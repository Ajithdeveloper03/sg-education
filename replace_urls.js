const fs = require('fs');
const path = require('path');

const targetUrl = 'https://inymartlabs.com/sg-education/php-backend';
const searchUrl = 'http://localhost/php-backend';

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(searchUrl)) {
    const newContent = content.split(searchUrl).join(targetUrl);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const filesToUpdate = [
  'src/app/gallery/page.js',
  'src/app/blog/page.js',
  'src/app/blog/details/page.js',
  'src/app/admin/page.js',
  'src/app/admin/(dashboard)/gallery/page.js',
  'src/app/admin/(dashboard)/dashboard/page.js',
  'src/app/admin/(dashboard)/blog/page.js'
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, file);
  replaceInFile(fullPath);
});

console.log('Done!');
