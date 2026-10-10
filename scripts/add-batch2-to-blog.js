const fs = require('fs');
const path = require('path');

const blogHtmlPath = path.join(__dirname, '..', 'blog.html');
let blogHtml = fs.readFileSync(blogHtmlPath, 'utf-8');

const batch2Cards = `
      <!-- Carrier 6: Travelers -->
      <a href="/carrier-travelers-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-travelers.svg" class="blog-card-image" alt="Travelers Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Independent Giant</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">Travelers Insurance Review (2026): IntelliDrive, Rates &amp; Brokers</h3>
          <p class="blog-snippet">IntelliDrive 90-day telematics savings (up to 30%), Premier New Car Replacement (5 years), and independent agent network advantages.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Carrier 7: Nationwide -->
      <a href="/carrier-nationwide-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-nationwide.svg" class="blog-card-image" alt="Nationwide Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Mutual Leader</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">Nationwide Insurance Review (2026): SmartMiles &amp; Vanishing Deductibles</h3>
          <p class="blog-snippet">SmartMiles pay-per-mile auto pricing, Vanishing Deductible up to $500, and On Your Side claims satisfaction ratings.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Carrier 8: Liberty Mutual -->
      <a href="/carrier-liberty-mutual-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-liberty-mutual.svg" class="blog-card-image" alt="Liberty Mutual Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Custom Coverage</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Liberty Mutual Review (2026): Rates, RightTrack &amp; Policy Riders</h3>
          <p class="blog-snippet">RightTrack 90-day discounts, Better Car Replacement, affinity discounts, and customized auto-home packages.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Carrier 9: Farmers -->
      <a href="/carrier-farmers-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-farmers.svg" class="blog-card-image" alt="Farmers Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Tiered Packages</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">Farmers Insurance Review (2026): Signal App, Rates &amp; Home Perks</h3>
          <p class="blog-snippet">Signal telematics rewards, Standard/Enhanced/Premier policy tiers, Eco-Rebuild perks, and captive agent support.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Carrier 10: USAA -->
      <a href="/carrier-usaa-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-usaa.svg" class="blog-card-image" alt="USAA Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Military Gold Standard</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">USAA Insurance Review (2026): Military Rates &amp; Top Satisfaction</h3>
          <p class="blog-snippet">Industry-lowest auto and home premiums ($1,580/yr avg), SafePilot telematics, deployment discounts, and eligibility rules.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Carrier 11: American Family -->
      <a href="/carrier-american-family-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-american-family.svg" class="blog-card-image" alt="American Family Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Regional Leader</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">American Family Review (2026): KnowYourDrive &amp; Family Discounts</h3>
          <p class="blog-snippet">KnowYourDrive telematics, Generational young adult discounts, matching siding endorsements, and Midwest rate benchmarks.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Carrier 12: Erie Insurance -->
      <a href="/carrier-erie-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-erie.svg" class="blog-card-image" alt="Erie Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Value Leader</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Erie Insurance Review (2026): Erie Rate Lock &amp; Low Premiums</h3>
          <p class="blog-snippet">How Erie Rate Lock freezes car insurance costs permanently, guaranteed home replacement cost, and 12-state availability.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Carrier 13: Chubb -->
      <a href="/carrier-chubb-insurance-review" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-chubb.svg" class="blog-card-image" alt="Chubb Insurance Review" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">High-Net-Worth</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">Chubb Insurance Review (2026): Masterpiece High-Net-Worth Coverage</h3>
          <p class="blog-snippet">Masterpiece luxury home and exotic auto protection, cash-out claims option, wildfire defense teams, and agreed-value payouts.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Audit &rarr;</span>
        </div>
      </a>

      <!-- Showdown 14: State Farm vs Progressive -->
      <a href="/carrier-state-farm-vs-progressive" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-vs-state-farm-progressive.svg" class="blog-card-image" alt="State Farm vs Progressive" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Top 2 Showdown</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">State Farm vs. Progressive (2026): Rates, Telematics &amp; Matchup</h3>
          <p class="blog-snippet">Head-to-head comparison of Drive Safe &amp; Save vs Snapshot, clean driver rates vs ticket forgiveness, and bundle savings.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Comparison &rarr;</span>
        </div>
      </a>

      <!-- Showdown 15: GEICO vs Progressive -->
      <a href="/carrier-geico-vs-progressive" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-vs-geico-progressive.svg" class="blog-card-image" alt="GEICO vs Progressive" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Direct Showdown</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">GEICO vs. Progressive (2026): Rates, Snapshot vs. DriveEasy</h3>
          <p class="blog-snippet">Comparing direct quoting prices, mobile app usability, third-party home insurance underwriting, and high-risk driver surcharges.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Comparison &rarr;</span>
        </div>
      </a>

      <!-- Showdown 16: State Farm vs Allstate -->
      <a href="/carrier-state-farm-vs-allstate" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-vs-state-farm-allstate.svg" class="blog-card-image" alt="State Farm vs Allstate" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Captive Showdown</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">State Farm vs. Allstate (2026): Rates, Agents &amp; Guarantees</h3>
          <p class="blog-snippet">Comparing captive agent networks (19,000 vs 10,000), Allstate Claim Satisfaction Guarantee, and Drivewise cash rewards vs State Farm discounts.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Comparison &rarr;</span>
        </div>
      </a>

      <!-- Showdown 17: AAA vs State Farm -->
      <a href="/carrier-aaa-vs-state-farm" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-vs-aaa-state-farm.svg" class="blog-card-image" alt="AAA vs State Farm" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Club vs Agency</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">AAA vs. State Farm (2026): Roadside Perks vs. Lower Premiums</h3>
          <p class="blog-snippet">Auto club membership cost analysis, 200-mile Premier roadside towing, travel discounts, and side-by-side auto rates.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Comparison &rarr;</span>
        </div>
      </a>

      <!-- Showdown 18: GEICO vs State Farm -->
      <a href="/carrier-geico-vs-state-farm" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-vs-geico-state-farm.svg" class="blog-card-image" alt="GEICO vs State Farm" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Market Leaders</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">GEICO vs. State Farm (2026): Direct Cheap Rates vs. Local Agents</h3>
          <p class="blog-snippet">Which giant is cheaper? Standalone car insurance rates vs home-auto bundling, DriveEasy vs Drive Safe &amp; Save telematics.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Comparison &rarr;</span>
        </div>
      </a>

      <!-- Ranking 19: Cheapest P&C Carriers -->
      <a href="/carrier-cheapest-property-casualty-insurance" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/carrier-cheapest-pc-ranking.svg" class="blog-card-image" alt="10 Cheapest P&C Insurance Companies" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Annual Benchmark</span>
            <span>10 min read</span>
          </div>
          <h3 class="blog-title">10 Cheapest Property &amp; Casualty Insurance Companies in 2026</h3>
          <p class="blog-snippet">Actuarial rate audit ranking USAA, Erie, GEICO, State Farm, Nationwide, and Progressive across 100,000+ benchmarked rate filings.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Ranking &rarr;</span>
        </div>
      </a>

      <!-- Guide 20: How to Switch Insurance -->
      <a href="/guide-how-to-switch-insurance-companies" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-how-to-switch-insurance.svg" class="blog-card-image" alt="How to Switch Insurance Companies" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Strategy Guide</span>
            <span>9 min read</span>
          </div>
          <h3 class="blog-title">How to Switch Insurance Companies in 2026 Without Penalty</h3>
          <p class="blog-snippet">Mid-term switching secrets, claiming unearned prorated refunds, avoiding C.L.U.E. coverage lapses, and mortgage escrow setup.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>
`;

// Insert batch2Cards after Carrier 5 (AAA) card
const targetInsert = `<!-- Carrier 5: AAA -->`;
const carrier5EndIndex = blogHtml.indexOf('</a>', blogHtml.indexOf(targetInsert));

if (carrier5EndIndex !== -1) {
  const insertPos = carrier5EndIndex + 4;
  blogHtml = blogHtml.slice(0, insertPos) + '\n' + batch2Cards + blogHtml.slice(insertPos);
  
  // Update total count
  blogHtml = blogHtml.replace(/All Topics \(\d+\)/, 'All Topics (87)');
  
  fs.writeFileSync(blogHtmlPath, blogHtml, 'utf-8');
  console.log('Successfully added Batch 2 cards to blog.html and updated total count to 87.');
} else {
  console.error('Could not find Carrier 5 insertion point in blog.html');
}
