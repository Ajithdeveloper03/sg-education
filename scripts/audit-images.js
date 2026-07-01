/**
 * Image Audit Script
 * Cross-references all images in /public against all source file references.
 * Reports: used, unused, duplicates, over-800KB files.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_DIR = path.join(__dirname, '..', 'src');

// --- Step 1: Collect all image files in /public (flat + /transport subfolder) ---
function getAllPublicImages() {
  const images = [];
  
  function scan(dir, prefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) {
        scan(path.join(dir, e.name), prefix + e.name + '/');
      } else if (/\.(png|jpg|jpeg|webp|svg|gif)$/i.test(e.name)) {
        const absPath = path.join(dir, e.name);
        const sizeKB = Math.round(fs.statSync(absPath).size / 1024);
        // The URL path from /public root
        const urlPath = prefix + e.name;
        images.push({ filename: e.name, urlPath, absPath, sizeKB });
      }
    }
  }
  
  scan(PUBLIC_DIR);
  return images;
}

// --- Step 2: Collect all image references in /src ---
function getAllSourceImageRefs() {
  const refs = new Set();
  
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) {
        scanDir(path.join(dir, e.name));
      } else if (/\.(js|jsx|ts|tsx|css|html)$/i.test(e.name)) {
        const content = fs.readFileSync(path.join(dir, e.name), 'utf8');
        // Match image paths in strings/JSX
        const matches = content.matchAll(/["'`]([^"'`]*\.(png|jpg|jpeg|webp|svg|gif))["'`]/gi);
        for (const m of matches) {
          let ref = m[1];
          // Normalize: remove leading /sg-education/ prefix
          if (ref.startsWith('/sg-education/')) {
            ref = ref.replace('/sg-education/', '');
          } else if (ref.startsWith('/')) {
            ref = ref.slice(1);
          }
          // Lowercase for comparison
          refs.add(ref.toLowerCase());
          refs.add(m[1]); // also store original
        }
      }
    }
  }
  
  scanDir(SRC_DIR);
  return refs;
}

// --- Step 3: Identify duplicates (same content, different names) ---
function findDuplicates(images) {
  // Use file size as a quick proxy (same size = potentially same file)
  const bySizeKB = {};
  for (const img of images) {
    if (!bySizeKB[img.sizeKB]) bySizeKB[img.sizeKB] = [];
    bySizeKB[img.sizeKB].push(img);
  }
  
  const duplicateGroups = [];
  for (const [size, group] of Object.entries(bySizeKB)) {
    if (group.length > 1 && parseInt(size) > 5) {
      duplicateGroups.push(group);
    }
  }
  return duplicateGroups;
}

function main() {
  console.log('='.repeat(70));
  console.log('SG Education — Image Audit Report');
  console.log('='.repeat(70));
  
  const allImages = getAllPublicImages();
  const sourceRefs = getAllSourceImageRefs();
  
  console.log(`\nTotal images in /public: ${allImages.length}`);
  console.log(`Total unique image refs in source: ${sourceRefs.size}`);
  
  // --- Classify each image ---
  const used = [];
  const unused = [];
  const overLimit = [];
  
  for (const img of allImages) {
    // Check if this image is referenced anywhere in source
    const isUsed = 
      sourceRefs.has(img.filename) ||
      sourceRefs.has(img.filename.toLowerCase()) ||
      sourceRefs.has(img.urlPath) ||
      sourceRefs.has(img.urlPath.toLowerCase()) ||
      // Also check with /sg-education/ prefix
      [...sourceRefs].some(ref => {
        const norm = ref.toLowerCase().replace(/^\/sg-education\//, '').replace(/^sg-education\//, '');
        return norm === img.filename.toLowerCase() || norm === img.urlPath.toLowerCase();
      });
    
    if (isUsed) {
      used.push(img);
    } else {
      unused.push(img);
    }
    
    if (img.sizeKB > 800) {
      overLimit.push(img);
    }
  }
  
  // --- Report: USED images ---
  console.log('\n' + '─'.repeat(70));
  console.log(`✅ USED IMAGES (${used.length})`);
  console.log('─'.repeat(70));
  used.forEach(img => {
    const flag = img.sizeKB > 800 ? ' ⚠️  OVER 800KB' : '';
    console.log(`  [${img.sizeKB.toString().padStart(5)} KB] ${img.filename}${flag}`);
  });
  
  // --- Report: UNUSED images ---
  console.log('\n' + '─'.repeat(70));
  console.log(`🗑️  UNUSED IMAGES (${unused.length}) — CANDIDATES FOR DELETION`);
  console.log('─'.repeat(70));
  unused.forEach(img => {
    console.log(`  [${img.sizeKB.toString().padStart(5)} KB] ${img.urlPath}`);
  });
  
  // --- Report: OVER 800KB ---
  console.log('\n' + '─'.repeat(70));
  console.log(`⚠️  IMAGES STILL OVER 800 KB (${overLimit.length})`);
  console.log('─'.repeat(70));
  overLimit.forEach(img => {
    console.log(`  [${img.sizeKB.toString().padStart(5)} KB] ${img.filename}`);
  });
  
  // --- Report: DUPLICATES ---
  const duplicates = findDuplicates(allImages);
  const suspectedDups = duplicates.filter(g => g.length > 1);
  console.log('\n' + '─'.repeat(70));
  console.log(`🔁 SUSPECTED DUPLICATES (same file size, ${suspectedDups.length} groups)`);
  console.log('─'.repeat(70));
  suspectedDups.forEach(group => {
    console.log(`  ${group[0].sizeKB} KB group:`);
    group.forEach(img => console.log(`    - ${img.urlPath}`));
  });
  
  // --- Summary JSON for automation ---
  const report = {
    used: used.map(i => i.filename),
    unused: unused.map(i => ({ filename: i.filename, urlPath: i.urlPath, sizeKB: i.sizeKB, absPath: i.absPath })),
    overLimit: overLimit.map(i => i.filename),
    duplicates: suspectedDups.map(g => g.map(i => i.filename)),
  };
  
  fs.writeFileSync(path.join(__dirname, 'image-audit-report.json'), JSON.stringify(report, null, 2));
  console.log('\n📄 Full report saved to scripts/image-audit-report.json');
  console.log('='.repeat(70));
}

main();
