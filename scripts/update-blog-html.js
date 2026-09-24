const fs = require('fs');
const path = require('path');

const blogHtmlPath = path.join(__dirname, '..', 'blog.html');
let blogHtml = fs.readFileSync(blogHtmlPath, 'utf-8');

// The 20 guides cards HTML
const newPillarCards = `
      <!-- Guide 1: EV Insurance -->
      <a href="guide-ev-electric-vehicle-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-ev-insurance.jpg" class="blog-card-image" alt="Tesla & EV Insurance Guide 2026" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">EV &amp; Technology</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Tesla &amp; EV Insurance Guide 2026: Why Electric Car Rates Are 25% Higher</h3>
          <p class="blog-snippet">Why battery replacement costs ($15k–$24k), unibody megacastings, and certified shop labor increase EV premiums, plus 6 ways to save.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 2: AI Drone Roof Inspections -->
      <a href="guide-ai-aerial-drone-roof-inspection.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-drone-roof-inspection.jpg" class="blog-card-image" alt="AI and Drone Roof Inspections" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Property Underwriting</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">AI &amp; Drone Roof Inspections: Why Homeowners Are Getting Dropped</h3>
          <p class="blog-snippet">How aerial geospatial algorithms trigger surprise non-renewals without human inspectors, and the 30-day playbook to appeal unfair cancellations.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 3: California FAIR Plan -->
      <a href="guide-california-fair-plan-home-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-california-fair-plan.jpg" class="blog-card-image" alt="California FAIR Plan and Wildfire Crisis" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">State Crisis</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">California Home Insurance Crisis: FAIR Plan Guide &amp; Wildfire Scores</h3>
          <p class="blog-snippet">Navigating carrier non-renewals, why you must buy a DIC companion policy, and how IBHS wildfire home hardening unlocks private coverage.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 4: Why Home Rates Increase -->
      <a href="guide-why-home-insurance-rates-increase.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-why-home-rates-increase.jpg" class="blog-card-image" alt="Why Home Insurance Rates Spike" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Rate Inflation</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Why Did My Home Insurance Rate Go Up? Inflation Guard &amp; Secrets</h3>
          <p class="blog-snippet">Discover why premiums jumped 20%+ with zero claims, how automatic Coverage A Inflation Guard creeps your rate, and how to contest estimates.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 5: Car Makers Selling Data -->
      <a href="guide-car-makers-selling-driving-data.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-car-makers-selling-data.jpg" class="blog-card-image" alt="Car Makers Selling Driving Data" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Privacy &amp; Telematics</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Are Car Makers Selling Your Driving Data? LexisNexis &amp; Defense</h3>
          <p class="blog-snippet">How connected cars quietly transmit hard braking and late-night trips to insurance exchanges, and how to pull your free FCRA disclosure report.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 6: Uninsured Motorist -->
      <a href="guide-uninsured-underinsured-motorist-coverage.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-uninsured-motorist.jpg" class="blog-card-image" alt="Uninsured Motorist Coverage" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Liability Defense</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Uninsured &amp; Underinsured Motorist (UM/UIM): Critical Limit Rules</h3>
          <p class="blog-snippet">Why 14% of US drivers carry zero insurance, how UMBI shields you against medical debt, and how stacked limits multiply protection.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 7: Comprehensive vs Collision -->
      <a href="guide-comprehensive-vs-collision-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-comprehensive-vs-collision.jpg" class="blog-card-image" alt="Comprehensive vs Collision Insurance" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Coverage Math</span>
            <span>7 min read</span>
          </div>
          <h3 class="blog-title">Comprehensive vs. Collision Insurance: When to Drop Full Coverage</h3>
          <p class="blog-snippet">Understand moving crashes vs Acts of God, and apply the mathematical 10% Rule to drop collision on older vehicles while keeping cheap comp.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 8: Diminished Value -->
      <a href="guide-diminished-value-insurance-claim.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-diminished-value.jpg" class="blog-card-image" alt="Diminished Value Claims" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Claims Defense</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">How to File a Diminished Value Claim: Recovering Lost Resale Value</h3>
          <p class="blog-snippet">Your car lost $3,000–$7,000 in market value after accident repair. How to avoid the Georgia 17c trap and demand a full settlement check.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 9: Personal Umbrella -->
      <a href="guide-personal-umbrella-insurance-guide.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-umbrella-insurance.jpg" class="blog-card-image" alt="Personal Umbrella Insurance Guide" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Asset Defense</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Personal Umbrella Insurance: When Do You Need a $1M Policy?</h3>
          <p class="blog-snippet">Why middle-class families and parents of teen drivers need excess liability to shield home equity and future wages for only $200/year.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 10: Water Backup vs Flood -->
      <a href="guide-water-backup-vs-flood-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-water-backup-flood.jpg" class="blog-card-image" alt="Water Backup vs Flood Insurance" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Water Claims</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Water Backup vs. Flood Insurance: The $30,000 Coverage Gap</h3>
          <p class="blog-snippet">Standard home insurance excludes both groundwater and drain backup. Learn how a $50 water backup rider protects finished basements.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 11: SR-22 Insurance -->
      <a href="guide-sr22-insurance-filing-costs.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-sr22-insurance.jpg" class="blog-card-image" alt="SR-22 Insurance Filing and Costs" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">License Recovery</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">SR-22 Insurance Explained: Filing Requirements, Costs &amp; Reinstatement</h3>
          <p class="blog-snippet">What an SR-22 certificate actually is, filing fees vs surcharges, the non-owner insurance loophole, and how to clear your 3-year record.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 12: Renters Bundling Hack -->
      <a href="guide-renters-insurance-bundling-hack.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-renters-bundling.jpg" class="blog-card-image" alt="Renters Insurance Bundling Hack" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Discount Math</span>
            <span>7 min read</span>
          </div>
          <h3 class="blog-title">The Renters Insurance Bundling Trick: How a $12 Policy Saves $25</h3>
          <p class="blog-snippet">How multi-policy bundling arbitrage generates net monthly profit on auto insurance while unlocking $30,000 in personal property protection.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 13: Pay-Per-Mile Car Insurance -->
      <a href="guide-pay-per-mile-car-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-pay-per-mile.jpg" class="blog-card-image" alt="Pay-Per-Mile Car Insurance" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Low Mileage</span>
            <span>7 min read</span>
          </div>
          <h3 class="blog-title">Pay-Per-Mile Car Insurance: Metromile, SmartMiles &amp; Mile Auto</h3>
          <p class="blog-snippet">If you drive under 7,500 miles a year, learn how decoupling fixed rates into base daily fees + micro-mileage charges cuts bills by 40%.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 14: Commercial General Liability -->
      <a href="guide-commercial-general-liability-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-commercial-liability.svg" class="blog-card-image" alt="Commercial General Liability Insurance" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Commercial Defense</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Commercial General Liability (CGL): Limits &amp; Contractor COI Guide</h3>
          <p class="blog-snippet">Why clients mandate $1M/$2M limits, how to obtain instant ACORD 25 certificates of insurance, and avoiding the annual subcontractor audit trap.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 15: Business Owner's Policy -->
      <a href="guide-business-owners-policy-bop.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-business-owners-policy.svg" class="blog-card-image" alt="Business Owners Policy BOP" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Small Business</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Business Owner’s Policy (BOP) Guide: Bundling Property &amp; Liability</h3>
          <p class="blog-snippet">Bundle General Liability, Commercial Property, and Business Income interruption into one 3-in-1 discounted commercial package.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 16: Pet Insurance Buyer's Guide -->
      <a href="guide-pet-insurance-buying-guide.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-pet-insurance.svg" class="blog-card-image" alt="Pet Insurance Complete Guide" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Veterinary Health</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Pet Insurance Complete Guide: Accident, Illness &amp; Exclusions</h3>
          <p class="blog-snippet">How 70% to 90% reimbursement rates work on emergency surgeries, annual deductibles, and navigating pre-existing condition loopholes.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 17: Term vs Whole Life -->
      <a href="guide-term-vs-whole-life-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-term-vs-whole-life.svg" class="blog-card-image" alt="Term vs Whole Life Insurance" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Wealth &amp; Family</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">Term vs. Whole Life Insurance: Why 95% of Families Should Buy Term</h3>
          <p class="blog-snippet">Compare $35/mo term life against $420/mo whole life, how agent commissions erode cash value, and the term laddering strategy.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 18: HDHP vs PPO with HSA -->
      <a href="guide-hdhp-vs-ppo-health-insurance-hsa.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-hdhp-vs-ppo-hsa.svg" class="blog-card-image" alt="HDHP vs PPO Health Insurance" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Healthcare &amp; Taxes</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">HDHP vs. PPO Health Insurance: Maximizing HSA Tax Savings</h3>
          <p class="blog-snippet">Discover the triple-tax advantage of Health Savings Accounts (HSA), payroll premium differences, and how to choose during Open Enrollment.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 19: Car Accident Checklist -->
      <a href="guide-what-to-do-after-car-accident.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-what-to-do-after-accident.svg" class="blog-card-image" alt="What to Do After a Car Accident Checklist" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Emergency Defense</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">What to Do Immediately After a Car Accident: 10-Step Checklist</h3>
          <p class="blog-snippet">Photos to capture, what never to say to insurance adjusters, why apologies are weaponized as fault, and protecting your claim payout.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>

      <!-- Guide 20: First-Time Homebuyer Playbook -->
      <a href="guide-first-time-homebuyer-insurance.html" style="text-decoration: none; color: inherit;" class="blog-card">
        <div>
          <img src="assets/images/guide-first-time-homebuyer.svg" class="blog-card-image" alt="First-Time Homebuyer Insurance Playbook" loading="lazy">
          <div class="blog-meta-top">
            <span class="badge badge-sm badge-primary">Homebuyer Guide</span>
            <span>8 min read</span>
          </div>
          <h3 class="blog-title">First-Time Homebuyer Insurance Playbook: Escrow &amp; Rebuild Math</h3>
          <p class="blog-snippet">Master mortgage binder deadlines, escrow impound prepaids, CLUE property history checks, and insuring rebuild cost rather than land value.</p>
        </div>
        <div class="blog-card-footer">
          <span>By Editorial Team</span>
          <span style="color: var(--color-primary); font-weight: 700;">Read Full Guide &rarr;</span>
        </div>
      </a>
`;

// Insert newPillarCards into the pillar guides section in blog.html
const pillarGridMarker = '<div class="blog-grid">\n      <!-- Guide 1 -->';
if (blogHtml.includes(pillarGridMarker)) {
  blogHtml = blogHtml.replace(pillarGridMarker, '<div class="blog-grid">\n' + newPillarCards + '\n      <!-- Existing Guide 1 -->');
  // Update title / counter
  blogHtml = blogHtml.replace('All Topics (52)', 'All Topics (72)');
  blogHtml = blogHtml.replace('All Articles & State Analyses (52 Topics)', 'All Articles & State Analyses (72 Topics)');
  blogHtml = blogHtml.replace('50+ In-Depth Property & Casualty Consumer Guides.', '70+ In-Depth Property & Casualty Consumer Guides.');
  blogHtml = blogHtml.replace('2026 Comprehensive Pillar Guides', '2026 Trending Authority Pillar Guides (30 Deep-Dives)');
  fs.writeFileSync(blogHtmlPath, blogHtml, 'utf-8');
  console.log('Successfully updated blog.html with all 20 new comprehensive guide cards!');
} else {
  console.error('Could not find pillar grid marker in blog.html');
}
