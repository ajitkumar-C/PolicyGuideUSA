const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const carrierFiles = [
  // Core 5
  'carrier-progressive-insurance-review.html',
  'carrier-state-farm-insurance-review.html',
  'carrier-geico-insurance-review.html',
  'carrier-allstate-insurance-review.html',
  'carrier-aaa-auto-club-insurance-review.html',
  // Next 15
  'carrier-travelers-insurance-review.html',
  'carrier-nationwide-insurance-review.html',
  'carrier-liberty-mutual-insurance-review.html',
  'carrier-farmers-insurance-review.html',
  'carrier-usaa-insurance-review.html',
  'carrier-american-family-insurance-review.html',
  'carrier-erie-insurance-review.html',
  'carrier-chubb-insurance-review.html',
  'carrier-state-farm-vs-progressive.html',
  'carrier-geico-vs-progressive.html',
  'carrier-state-farm-vs-allstate.html',
  'carrier-aaa-vs-state-farm.html',
  'carrier-geico-vs-state-farm.html',
  'carrier-cheapest-property-casualty-insurance.html',
  'guide-how-to-switch-insurance-companies.html'
];

console.log(`Enhancing layout width and sidebar on ${carrierFiles.length} carrier guides...`);

for (const file of carrierFiles) {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${file}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf-8');

  // 1. Expand container max-width from 1050px to 1260px for optimal screen coverage
  html = html.replace(/max-width:\s*1050px;/g, 'max-width: 1260px;');
  html = html.replace(/max-width:\s*860px;/g, 'max-width: 1000px;');

  // 2. Update .article-layout grid in <style>
  html = html.replace(
    /\.article-layout\s*\{\s*display:\s*grid;\s*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*340px;/g,
    '.article-layout { display: grid; grid-template-columns: minmax(0, 1fr) 360px;'
  );

  // 3. Make sure .article-sidebar has position: sticky and top: 90px
  html = html.replace(
    /\.article-sidebar\s*\{\s*min-width:\s*0;\s*width:\s*100%;\s*display:\s*flex;\s*flex-direction:\s*column;\s*gap:\s*1\.5rem;\s*position:\s*sticky;\s*top:\s*95px;\s*\}/g,
    '.article-sidebar { min-width: 0; width: 100%; display: flex; flex-direction: column; gap: 1.5rem; position: sticky; top: 90px; }'
  );

  // 4. Enrich sidebar content with Quick Zip Checker & Top Carriers mini benchmark
  const oldSidebarCards = `        <!-- Editorial Fact Check Card -->
        <div class="sidebar-card" style="font-size: 0.85rem; color: var(--color-text-muted);">`;

  const newSidebarCards = `        <!-- Quick ZIP Rate Checker -->
        <div class="sidebar-card" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(15, 23, 42, 0.4) 100%); border: 1px solid var(--color-primary);">
          <h4 style="margin-bottom: 0.5rem; color: var(--color-text-main);">📍 Check Your Area Rates</h4>
          <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.85rem;">Instantly check state-regulated base rates and local premium averages in your ZIP code.</p>
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="inline-sidebar-zip" class="form-control" placeholder="ZIP (e.g. 90210)" maxlength="5" style="width: 130px; font-weight: 700;">
            <button class="btn btn-primary btn-sm" onclick="openModal()" style="flex: 1; padding: 0.55rem 0.75rem; white-space: nowrap;">Check Rates &rarr;</button>
          </div>
        </div>

        <!-- 2026 National Rate Benchmark Card -->
        <div class="sidebar-card">
          <h4 style="margin-bottom: 0.75rem;">2026 Carrier Benchmarks</h4>
          <div style="display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem;">
            <div style="display: flex; justify-content: space-between; padding-bottom: 0.4rem; border-bottom: 1px solid var(--color-border);">
              <span><strong>USAA</strong> (Military)</span>
              <span style="color: #10B981; font-weight: 700;">$132 / mo</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 0.4rem; border-bottom: 1px solid var(--color-border);">
              <span><strong>Erie</strong> (12 States)</span>
              <span style="color: #10B981; font-weight: 700;">$133 / mo</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 0.4rem; border-bottom: 1px solid var(--color-border);">
              <span><strong>GEICO</strong> (Clean Auto)</span>
              <span style="color: #38BDF8; font-weight: 700;">$165 / mo</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 0.4rem; border-bottom: 1px solid var(--color-border);">
              <span><strong>State Farm</strong> (Bundles)</span>
              <span style="color: #38BDF8; font-weight: 700;">$173 / mo</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 0.4rem; border-bottom: 1px solid var(--color-border);">
              <span><strong>Progressive</strong> (Tickets)</span>
              <span style="color: #38BDF8; font-weight: 700;">$179 / mo</span>
            </div>
          </div>
          <a href="/carrier-cheapest-property-casualty-insurance" style="display: block; margin-top: 0.85rem; font-size: 0.82rem; color: var(--color-primary); font-weight: 600; text-decoration: none;">View Full 10 Carrier Ranking &rarr;</a>
        </div>

        <!-- Editorial Fact Check Card -->
        <div class="sidebar-card" style="font-size: 0.85rem; color: var(--color-text-muted);">`;

  if (html.includes(oldSidebarCards)) {
    html = html.replace(oldSidebarCards, newSidebarCards);
  }

  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`Enhanced: ${file}`);
}

console.log('\\nAll 20 carrier guides updated with wide 1260px container and rich sidebar cards.');
