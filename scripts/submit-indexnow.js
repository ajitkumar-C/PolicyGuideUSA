/**
 * IndexNow URL Submission Script for PolicyGuide USA
 * Automatically parses sitemap.xml and submits all URLs to IndexNow (Bing, Yandex, Copilot/ChatGPT index)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '099c39fd8bfc4851b05ad0e1eb5d35bc';
const HOST = 'policyguideusa.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '..', 'sitemap.xml');

function extractUrlsFromSitemap(xmlContent) {
  const matches = [...xmlContent.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)];
  return [...new Set(matches.map(m => m[1].trim()))];
}

async function submitToIndexNow(urls) {
  console.log(`\n🚀 Preparing to submit ${urls.length} URLs to IndexNow for ${HOST}...`);
  console.log(`🔑 Key: ${API_KEY}`);
  console.log(`📍 Key Location: ${KEY_LOCATION}\n`);

  const payload = JSON.stringify({
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  });

  const endpoints = [
    { name: 'IndexNow Central API', hostname: 'api.indexnow.org', path: '/indexnow' },
    { name: 'Microsoft Bing Direct', hostname: 'www.bing.com', path: '/indexnow' }
  ];

  for (const endpoint of endpoints) {
    await new Promise((resolve) => {
      const options = {
        hostname: endpoint.hostname,
        port: 443,
        path: endpoint.path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload)
        },
        timeout: 10000
      };

      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', chunk => { body += chunk; });
        res.on('end', () => {
          if (res.statusCode === 200 || res.statusCode === 202) {
            console.log(`✅ [${endpoint.name}] Success! Status: ${res.statusCode} (URLs queued for immediate crawl)`);
          } else {
            console.log(`⚠️ [${endpoint.name}] Status: ${res.statusCode} ${res.statusMessage}`);
            if (body) console.log(`   Response: ${body}`);
          }
          resolve();
        });
      });

      req.on('error', (err) => {
        console.error(`❌ [${endpoint.name}] Request failed:`, err.message);
        resolve();
      });

      req.on('timeout', () => {
        req.destroy();
        console.error(`⏱️ [${endpoint.name}] Request timed out.`);
        resolve();
      });

      req.write(payload);
      req.end();
    });
  }

  console.log('\n🏁 Submission completed.');
  console.log('💡 Note: Ensure your live deployment has 099c39fd8bfc4851b05ad0e1eb5d35bc.txt uploaded at https://policyguideusa.com/099c39fd8bfc4851b05ad0e1eb5d35bc.txt so Bing can verify domain ownership.');
}

function run() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`❌ Sitemap not found at: ${SITEMAP_PATH}`);
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urls = extractUrlsFromSitemap(sitemapXml);

  if (urls.length === 0) {
    console.error('❌ No URLs found in sitemap.xml.');
    process.exit(1);
  }

  console.log(`Found ${urls.length} unique URLs in sitemap.xml:`);
  urls.slice(0, 5).forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
  if (urls.length > 5) {
    console.log(`  ... and ${urls.length - 5} more.`);
  }

  submitToIndexNow(urls);
}

run();
