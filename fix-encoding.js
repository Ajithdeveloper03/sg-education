const fs = require('fs');

const files = [
  'src/app/page.js',
  'src/app/our-programs/page.js',
  'src/app/facilities/library/page.js',
  'src/app/about/founders-message/page.js',
  'src/app/about/sg-early-budding/page.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/â€™/g, '’');
  content = content.replace(/â€“/g, '–');
  content = content.replace(/â€”/g, '—');
  content = content.replace(/ðŸŒ±âœ¨/g, '🌱✨');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed ' + file);
});
