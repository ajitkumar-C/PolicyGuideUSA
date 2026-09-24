const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

let modifiedCount = 0;
files.forEach(file => {
  const filePath = path.join(rootDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('href="index.html"')) {
    content = content.replace(/href="index\.html"/g, 'href="/"');
    fs.writeFileSync(filePath, content, 'utf-8');
    modifiedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Updated ${modifiedCount} HTML files to use href="/" instead of href="index.html".`);
