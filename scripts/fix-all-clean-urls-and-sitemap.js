const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

console.log(`Auditing and updating ${htmlFiles.length} HTML files for clean URLs & canonicals...`);

let canonicalFixed = 0;
let ogUrlFixed = 0;
let linksFixed = 0;

for (const file of htmlFiles) {
  const filePath = path.join(rootDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // 1. Fix canonical tag
  // Replace <link rel="canonical" href="https://policyguideusa.com/something.html"> with clean URL
  content = content.replace(/<link rel="canonical" href="https:\/\/policyguideusa\.com\/([^"]+)\.html">/g, (match, slug) => {
    changed = true;
    canonicalFixed++;
    if (slug === 'index') {
      return '<link rel="canonical" href="https://policyguideusa.com/">';
    }
    return `<link rel="canonical" href="https://policyguideusa.com/${slug}">`;
  });

  // 2. Fix og:url
  content = content.replace(/<meta property="og:url" content="https:\/\/policyguideusa\.com\/([^"]+)\.html">/g, (match, slug) => {
    changed = true;
    ogUrlFixed++;
    if (slug === 'index') {
      return '<meta property="og:url" content="https://policyguideusa.com/">';
    }
    return `<meta property="og:url" content="https://policyguideusa.com/${slug}">`;
  });

  // 3. Fix JSON-LD Schema IDs & URLs that have .html
  content = content.replace(/"(https:\/\/policyguideusa\.com\/[^"#]+)\.html(#|")/g, (match, urlWithoutExt, ending) => {
    changed = true;
    return `"${urlWithoutExt}${ending}`;
  });

  // 4. Fix relative href="something.html" to "/something" (skip anchor-only #, external urls, or assets)
  // For internal .html links:
  content = content.replace(/href="([a-zA-Z0-9_-]+)\.html(#?[^"]*)"/g, (match, page, anchor) => {
    changed = true;
    linksFixed++;
    if (page === 'index') {
      return `href="/${anchor}"`;
    }
    return `href="/${page}${anchor}"`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

console.log(`Updated HTML files:`);
console.log(`- Canonical tags updated: ${canonicalFixed}`);
console.log(`- og:url tags updated: ${ogUrlFixed}`);
console.log(`- Internal hrefs converted to clean URLs: ${linksFixed}`);

// 5. Update sitemap.xml to clean URLs and append the 15 new carrier guides
const sitemapPath = path.join(rootDir, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Replace existing .html locs with clean locs
sitemap = sitemap.replace(/<loc>https:\/\/policyguideusa\.com\/([^<]+)\.html<\/loc>/g, (match, slug) => {
  if (slug === 'index') {
    return '<loc>https://policyguideusa.com/</loc>';
  }
  return `<loc>https://policyguideusa.com/${slug}</loc>`;
});

// List of 15 new batch 2 items
const newItems = [
  'carrier-travelers-insurance-review',
  'carrier-nationwide-insurance-review',
  'carrier-liberty-mutual-insurance-review',
  'carrier-farmers-insurance-review',
  'carrier-usaa-insurance-review',
  'carrier-american-family-insurance-review',
  'carrier-erie-insurance-review',
  'carrier-chubb-insurance-review',
  'carrier-state-farm-vs-progressive',
  'carrier-geico-vs-progressive',
  'carrier-state-farm-vs-allstate',
  'carrier-aaa-vs-state-farm',
  'carrier-geico-vs-state-farm',
  'carrier-cheapest-property-casualty-insurance',
  'guide-how-to-switch-insurance-companies'
];

let addedCount = 0;
let newEntriesXml = '\n  <!-- 2026 Carrier In-Depth Audits & Matchups (Batch 2) -->\n';

for (const slug of newItems) {
  const urlEntry = `https://policyguideusa.com/${slug}`;
  if (!sitemap.includes(urlEntry)) {
    newEntriesXml += `  <url>\n    <loc>${urlEntry}</loc>\n    <lastmod>2026-10-10</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    addedCount++;
  }
}

// Insert before </urlset>
sitemap = sitemap.replace('</urlset>', `${newEntriesXml}</urlset>`);
fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
console.log(`Updated sitemap.xml to clean URLs and added ${addedCount} new guide URLs.`);
