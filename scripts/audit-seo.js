const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.html') && f !== '404.html');

let results = [];
let stats = {
  total: files.length,
  titleTooLong: 0,
  titleTooShort: 0,
  descTooLong: 0,
  descTooShort: 0,
  missingCanonical: 0,
  canonicalWithHtml: 0,
  missingSchema: 0,
  missingH1: 0,
  multiH1: 0
};

for (const file of files) {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
  const fileData = { file, issues: [] };

  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  fileData.title = title;
  fileData.titleLen = title.length;
  if (!title) {
    fileData.issues.push('Missing Title');
  } else if (title.length > 60) {
    stats.titleTooLong++;
    fileData.issues.push(`Title too long (${title.length} chars): "${title}"`);
  } else if (title.length < 35) {
    stats.titleTooShort++;
    fileData.issues.push(`Title too short (${title.length} chars): "${title}"`);
  }

  // Description (properly extracting double-quoted or single-quoted values)
  let desc = '';
  const descMatch1 = content.match(/<meta[^>]*name=["']description["'][^>]*content="([^"]+)"/i) ||
                     content.match(/<meta[^>]*content="([^"]+)"[^>]*name=["']description["']/i);
  const descMatch2 = content.match(/<meta[^>]*name=["']description["'][^>]*content='([^']+)'/i) ||
                     content.match(/<meta[^>]*content='([^']+)'[^>]*name=["']description["']/i);

  if (descMatch1) desc = descMatch1[1].trim();
  else if (descMatch2) desc = descMatch2[1].trim();

  fileData.desc = desc;
  fileData.descLen = desc.length;
  if (!desc) {
    fileData.issues.push('Missing Meta Description');
  } else if (desc.length > 160) {
    stats.descTooLong++;
    fileData.issues.push(`Description too long (${desc.length} chars)`);
  } else if (desc.length < 110) {
    stats.descTooShort++;
    fileData.issues.push(`Description too short (${desc.length} chars): "${desc}"`);
  }

  // Canonical
  const canMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (!canMatch) {
    stats.missingCanonical++;
    fileData.issues.push('Missing canonical tag');
  } else {
    fileData.canonical = canMatch[1];
    if (canMatch[1].endsWith('.html')) {
      stats.canonicalWithHtml++;
      fileData.issues.push(`Canonical ends with .html: ${canMatch[1]}`);
    }
  }

  // Schema
  const hasSchema = content.includes('application/ld+json');
  if (!hasSchema) {
    stats.missingSchema++;
    fileData.issues.push('Missing structured schema (JSON-LD)');
  }

  // H1
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches) {
    stats.missingH1++;
    fileData.issues.push('Missing <h1>');
  } else if (h1Matches.length > 1) {
    stats.multiH1++;
    fileData.issues.push(`Multiple <h1> tags (${h1Matches.length})`);
  }

  if (fileData.issues.length > 0) {
    results.push(fileData);
  }
}

console.log('=== POST-OPTIMIZATION AUDIT SUMMARY ===');
console.log(`Total Pages Scanned: ${stats.total}`);
console.log(`Titles > 60 chars: ${stats.titleTooLong} (Target: 0)`);
console.log(`Titles < 35 chars: ${stats.titleTooShort} (Target: 0)`);
console.log(`Descriptions > 160 chars: ${stats.descTooLong} (Target: 0)`);
console.log(`Descriptions < 110 chars: ${stats.descTooShort} (Target: 0)`);
console.log(`Missing Canonical: ${stats.missingCanonical} (Target: 0)`);
console.log(`Canonical with .html: ${stats.canonicalWithHtml} (Target: 0)`);
console.log(`Missing Schema (JSON-LD): ${stats.missingSchema} (Target: 0)`);
console.log(`Missing H1: ${stats.missingH1} (Target: 0)`);
console.log(`Multiple H1s: ${stats.multiH1} (Target: 0)`);
console.log(`Pages with issues: ${results.length}`);

if (results.length > 0) {
  console.log('\nRemaining Issues:');
  results.forEach(r => {
    console.log(`\nFile: ${r.file}`);
    r.issues.forEach(iss => console.log(`  - ${iss}`));
  });
} else {
  console.log('\n🏆 ALL 88 PAGES PASSED 100% OF TECHNICAL SEO & META TAG CHECKS WITH ZERO ISSUES!');
}
