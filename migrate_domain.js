const fs = require('fs');
const path = require('path');

const targetDirs = ['src', 'php-backend'];
const exts = ['.js', '.jsx', '.css', '.php'];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (exts.includes(path.extname(dirPath))) {
        callback(dirPath);
      }
    }
  });
}

function processFile(filePath) {
  let originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;

  // 1. Replace https://inymartlabs.com/sg-education with https://sgeducations.in
  content = content.replace(/https:\/\/inymartlabs\.com\/sg-education/g, 'https://sgeducations.in');

  // 2. Replace absolute path references to /sg-education/ (e.g. src="/sg-education/image.png") with /
  // We need to be careful not to replace it if it's already part of the domain we just replaced above, 
  // but since we already replaced the domain above, the remaining /sg-education/ are relative paths.
  content = content.replace(/(['"`]|url\()\/sg-education\//g, '$1/');

  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

targetDirs.forEach(dir => {
  let fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    walkDir(fullPath, processFile);
  }
});

// Update next.config.mjs manually
const nextConfigPath = path.join(__dirname, 'next.config.mjs');
if (fs.existsSync(nextConfigPath)) {
  let config = fs.readFileSync(nextConfigPath, 'utf8');
  if (config.includes("basePath: '/sg-education'")) {
    config = config.replace(/basePath:\s*'\/sg-education',?/g, '');
    fs.writeFileSync(nextConfigPath, config, 'utf8');
    console.log(`Updated next.config.mjs`);
  }
}

console.log('Migration complete!');
