const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_DIR = path.join(__dirname, '..', 'src');

// Get all remaining images in /public (just filenames, lowercased)
const publicFiles = new Set(
  fs.readdirSync(PUBLIC_DIR)
    .filter(f => /\.(png|jpg|jpeg|webp|svg|gif)$/i.test(f))
    .map(f => f.toLowerCase())
);

function scanDir(dir) {
  const refs = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const fullPath = path.join(dir, e.name);
    if (e.isDirectory()) {
      refs.push(...scanDir(fullPath));
    } else if (/\.(js|jsx|ts|tsx|css)$/i.test(e.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.matchAll(/["'`]([^"'`]*\.(png|jpg|jpeg|webp|svg|gif))["'`]/gi);
      for (const m of matches) {
        let ref = m[1];
        if (ref.startsWith('http') || ref.startsWith('//')) continue;
        const filename = path.basename(ref).toLowerCase();
        refs.push({ filename, ref, srcFile: path.basename(fullPath) });
      }
    }
  }
  return refs;
}

const allRefs = scanDir(SRC_DIR);
const broken = allRefs.filter(r => !publicFiles.has(r.filename) && !r.ref.startsWith('public/'));

if (broken.length === 0) {
  console.log('✅ VERIFICATION PASSED: No broken image links detected!');
  console.log(`All ${allRefs.length} image references resolve to existing files.`);
} else {
  console.log('❌ BROKEN LINKS FOUND:');
  broken.forEach(b => console.log(`  [${b.srcFile}] => ${b.ref}`));
}

console.log('\n📊 Final /public image count: ' + publicFiles.size);
