/**
 * Image Optimization Script
 * Compresses PNG/JPG images in /public to target 600–800 KB range.
 * Preserves original dimensions, filenames, and visual quality.
 * Skips images that are already under 600 KB (logos, icons, decoratives, etc.)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Images to SKIP (logos, icons, decorative, very small images - no need to compress)
const SKIP_FILES = new Set([
  'logo.png', 'early budding logo.png', 'SG EB (2).png',
  'cloud.png', 'cloud design.png', 'about-student.png',
  'motto teacher.png', 'TRANSPORTATION.png', '5.png', '1.jpg',
]);

// Only process these extensions
const TARGET_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Size targets in bytes
const TARGET_MIN_KB = 600;
const TARGET_MAX_KB = 800;
const TARGET_MIN = TARGET_MIN_KB * 1024;
const TARGET_MAX = TARGET_MAX_KB * 1024;

async function getImageInfo(filePath) {
  try {
    const meta = await sharp(filePath).metadata();
    return meta;
  } catch (e) {
    return null;
  }
}

async function optimizeImage(filePath, filename) {
  const originalSize = fs.statSync(filePath).size;
  const originalKB = Math.round(originalSize / 1024);
  const ext = path.extname(filename).toLowerCase();

  // Skip if already within target range or below minimum (small images)
  if (originalSize <= TARGET_MAX && originalSize >= TARGET_MIN) {
    console.log(`✅ SKIP (already in range ${originalKB} KB): ${filename}`);
    return { filename, originalKB, newKB: originalKB, status: 'already_ok' };
  }

  if (originalSize < TARGET_MIN) {
    console.log(`✅ SKIP (small image ${originalKB} KB): ${filename}`);
    return { filename, originalKB, newKB: originalKB, status: 'too_small' };
  }

  // Image is too large — compress it
  const meta = await getImageInfo(filePath);
  if (!meta) {
    console.log(`⚠️  SKIP (cannot read): ${filename}`);
    return { filename, originalKB, newKB: originalKB, status: 'error' };
  }

  console.log(`🔄 Compressing (${originalKB} KB → target 600–800 KB): ${filename}`);

  // Binary search on quality to hit the target range
  let lo = 1, hi = 95, bestBuffer = null, bestQuality = 80;

  for (let iter = 0; iter < 12; iter++) {
    const mid = Math.round((lo + hi) / 2);
    let buf;

    try {
      if (ext === '.png') {
        buf = await sharp(filePath)
          .png({ quality: mid, compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer();
      } else {
        buf = await sharp(filePath)
          .jpeg({ quality: mid, mozjpeg: true })
          .toBuffer();
      }
    } catch (e) {
      console.log(`  ⚠️  Sharp error at quality ${mid}: ${e.message}`);
      break;
    }

    const bufKB = Math.round(buf.length / 1024);

    if (buf.length >= TARGET_MIN && buf.length <= TARGET_MAX) {
      bestBuffer = buf;
      bestQuality = mid;
      console.log(`  ✓ Quality ${mid} → ${bufKB} KB (in range)`);
      break;
    } else if (buf.length > TARGET_MAX) {
      // Too big — reduce quality
      hi = mid - 1;
    } else {
      // Too small — increase quality
      if (!bestBuffer || buf.length > (bestBuffer ? bestBuffer.length : 0)) {
        bestBuffer = buf;
        bestQuality = mid;
      }
      lo = mid + 1;
    }

    // Track closest to target
    if (bestBuffer) {
      const dist = Math.abs(buf.length - (TARGET_MIN + TARGET_MAX) / 2);
      const bestDist = Math.abs(bestBuffer.length - (TARGET_MIN + TARGET_MAX) / 2);
      if (dist < bestDist) {
        bestBuffer = buf;
        bestQuality = mid;
      }
    } else {
      bestBuffer = buf;
      bestQuality = mid;
    }
  }

  if (!bestBuffer) {
    console.log(`  ⚠️  Could not compress: ${filename}`);
    return { filename, originalKB, newKB: originalKB, status: 'error' };
  }

  const newKB = Math.round(bestBuffer.length / 1024);

  // Only write if the new file is actually smaller or within target
  if (bestBuffer.length >= originalSize) {
    console.log(`  ℹ️  Skipping write — compressed (${newKB} KB) not smaller than original (${originalKB} KB)`);
    return { filename, originalKB, newKB: originalKB, status: 'no_gain' };
  }

  // Write optimized image back in-place
  fs.writeFileSync(filePath, bestBuffer);
  console.log(`  ✅ Saved: ${originalKB} KB → ${newKB} KB (quality ${bestQuality})`);

  return { filename, originalKB, newKB, quality: bestQuality, status: 'optimized' };
}

async function main() {
  console.log('='.repeat(60));
  console.log('SG Education — Image Optimization Script');
  console.log('Target: 600–800 KB per image (PNG/JPG only)');
  console.log('='.repeat(60));
  console.log();

  const files = fs.readdirSync(PUBLIC_DIR).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return TARGET_EXTENSIONS.includes(ext) && !SKIP_FILES.has(f);
  });

  console.log(`Found ${files.length} images to process.\n`);

  const results = [];
  for (const file of files) {
    const filePath = path.join(PUBLIC_DIR, file);
    const result = await optimizeImage(filePath, file);
    results.push(result);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));

  const optimized = results.filter(r => r.status === 'optimized');
  const totalSavedKB = optimized.reduce((sum, r) => sum + (r.originalKB - r.newKB), 0);

  console.log(`Total images processed: ${results.length}`);
  console.log(`Optimized: ${optimized.length}`);
  console.log(`Total space saved: ~${totalSavedKB} KB (~${Math.round(totalSavedKB / 1024)} MB)`);
  console.log();
  console.log('Optimized files:');
  optimized.forEach(r => {
    console.log(`  ${r.filename}: ${r.originalKB} KB → ${r.newKB} KB`);
  });

  const noGain = results.filter(r => r.status === 'no_gain');
  if (noGain.length > 0) {
    console.log(`\nNo gain (kept original): ${noGain.map(r => r.filename).join(', ')}`);
  }

  console.log('\n✅ Optimization complete!');
}

main().catch(console.error);
