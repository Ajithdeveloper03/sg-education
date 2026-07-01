/**
 * Image Cleanup Script
 * Deletes all confirmed unused images from /public.
 * Based on the audit report in image-audit-report.json.
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// All confirmed unused files (from audit)
const TO_DELETE = [
  // Orphaned WebP duplicates (PNG is referenced in code)
  '2 mission.webp',
  '2 our values.webp',
  '2 vision.webp',
  'about sge 1.webp',
  'about sge 2.webp',
  'about sge 3.webp',
  'about sge 4.webp',
  'about sge 5.webp',
  'Ancient Bharath Culture.webp',
  'banner page.webp',
  'blog banner.webp',
  'Clubs & Enrichment Programs.webp',
  'Corporate Culture.webp',
  'Extracurriculars & Arts.webp',
  'facilities banner.webp',
  'Fun Learning.webp',
  'gallery banner.webp',
  'HEALTH & WELL-BEING.webp',
  'One Day One.webp',
  'our values.webp',
  'program banner.webp',
  'school motto banner.webp',
  'sg early budding banner.webp',
  'Skill Identity.webp',
  'Sports & Leadership.webp',
  'Sports & Leadership 2.webp',
  'Traditional Customs.webp',
  'transport background.webp',
  'meet our team.webp',

  // Orphaned PNG duplicates (WebP is referenced in code)
  'about-student.png',
  'boy_thumbs_up.png',
  'decorative-grass.png',
  'girl_writing.png',
  'logo.png',
  'mentor.png',
  'mamtha 1.webp',
  'mamtha 2.webp',
  'TRANSPORTATION.png',
  'pillars1.png',
  'pillars2.png',
  'pillars3.png',
  'pillars4.png',
  'mission.png',
  'vision.png',
  'Hygiene.png',
  'early budding logo.webp',

  // Completely unused images
  '1.jpg',
  '5.png',
  '5.webp',
  'cloud design.png',
  'cloud design.webp',
  'cloud.png',
  'kids-dream-lead.png',
  'kids-dream-lead.webp',
  'kids_dream_lead.png',
  'kids_dream_lead.webp',
  'mamtha.png',
  'mamtha.webp',
  'motto teacher.png',
  'motto teacher.webp',
  'Sports & Leadership 2.png',
  'SG EB (2).png',
  'SG EB (2).webp',
  'SG EB(2).webp',
  'sg-eb-logo.webp',

  // Unused SVG/system files
  'file.svg',
  'globe.svg',
  'next.svg',
  'vercel.svg',
  'window.svg',
];

// Files in subdirectories
const TO_DELETE_SUBDIRS = [
  'transport/school-bus-bg.jpg',
  'transport/school-bus-bg.webp',
];

function deleteFile(absPath, label) {
  if (fs.existsSync(absPath)) {
    fs.unlinkSync(absPath);
    const sizeKB = '(deleted)';
    console.log(`  🗑️  Deleted: ${label}`);
    return true;
  } else {
    console.log(`  ⚠️  Not found (skipped): ${label}`);
    return false;
  }
}

function main() {
  console.log('='.repeat(65));
  console.log('SG Education — Image Cleanup Script');
  console.log('Deleting 72 unused/duplicate images from /public');
  console.log('='.repeat(65));
  console.log();

  let deleted = 0;
  let skipped = 0;

  // Delete flat files
  for (const filename of TO_DELETE) {
    const absPath = path.join(PUBLIC_DIR, filename);
    if (deleteFile(absPath, filename)) deleted++;
    else skipped++;
  }

  // Delete subdirectory files
  for (const relPath of TO_DELETE_SUBDIRS) {
    const absPath = path.join(PUBLIC_DIR, relPath);
    if (deleteFile(absPath, relPath)) deleted++;
    else skipped++;
  }

  // Try to remove transport/ dir if empty
  const transportDir = path.join(PUBLIC_DIR, 'transport');
  if (fs.existsSync(transportDir)) {
    const remaining = fs.readdirSync(transportDir);
    if (remaining.length === 0) {
      fs.rmdirSync(transportDir);
      console.log(`  🗂️  Removed empty directory: transport/`);
    } else {
      console.log(`  ℹ️  transport/ directory still has files: ${remaining.join(', ')}`);
    }
  }

  console.log();
  console.log('='.repeat(65));
  console.log(`✅ Cleanup complete!`);
  console.log(`   Deleted: ${deleted} files`);
  console.log(`   Skipped (not found): ${skipped} files`);
  console.log('='.repeat(65));

  // --- Final verification: count remaining files ---
  console.log('\n📊 Remaining images in /public:');
  const remaining = fs.readdirSync(PUBLIC_DIR).filter(f => /\.(png|jpg|jpeg|webp|svg|gif)$/i.test(f));
  remaining.sort();
  remaining.forEach(f => {
    const sizeKB = Math.round(fs.statSync(path.join(PUBLIC_DIR, f)).size / 1024);
    const flag = sizeKB > 800 ? ' ⚠️ OVER 800KB' : '';
    console.log(`  [${sizeKB.toString().padStart(5)} KB] ${f}${flag}`);
  });
  console.log(`\n  Total: ${remaining.length} images`);
}

main();
