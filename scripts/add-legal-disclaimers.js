const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// All 20 Carrier guides + carrier-comparison.html + article.html
const targetFiles = [
  'carrier-progressive-insurance-review.html',
  'carrier-state-farm-insurance-review.html',
  'carrier-geico-insurance-review.html',
  'carrier-allstate-insurance-review.html',
  'carrier-aaa-auto-club-insurance-review.html',
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
  'guide-how-to-switch-insurance-companies.html',
  'carrier-comparison.html',
  'article.html'
];

const legalDisclaimerHtml = `
        <!-- Legal, Actuarial & Trademark Protection Notice -->
        <div class="legal-disclaimer-box" style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 4px solid #38BDF8; padding: 1.5rem; border-radius: 8px; margin-top: 3.5rem; font-size: 0.82rem; line-height: 1.6; color: var(--color-text-dim);">
          <strong style="color: var(--color-text-main); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.65rem;">
            <span>⚖️</span> Legal Trademark Notice, Actuarial Methodology &amp; Regulatory Disclaimers
          </strong>
          <p style="margin-bottom: 0.65rem; color: var(--color-text-muted);">
            <strong>Trademark &amp; Non-Affiliation Notice:</strong> State Farm®, Progressive®, GEICO®, Allstate®, AAA®, Travelers®, Nationwide®, Liberty Mutual®, Farmers®, USAA®, American Family®, Erie Insurance®, Chubb®, and any other third-party insurer trademarks, service marks, logos, or brand names referenced on this website are the sole property of their respective corporate owners. PolicyGuide USA is an independent consumer research and informational publisher. PolicyGuide USA is not an agent, broker, affiliate, subsidiary, or sponsor of, nor is it endorsed by, any insurance carrier mentioned herein. All references to trademarks and brand names are strictly for identification, consumer education, and comparative analysis under the Nominative Fair Use doctrine of the United States Trademark Act (15 U.S.C. § 1125 / Lanham Act).
          </p>
          <p style="margin-bottom: 0.65rem; color: var(--color-text-muted);">
            <strong>Not an Underwriting Carrier or Insurance Broker:</strong> PolicyGuide USA is strictly an independent educational and financial technology publisher. We do not sell insurance policies, underwrite risk, process claims, issue insurance binders, or act as an insurance brokerage. Any quote submission, policy consultation, or insurance transaction occurs directly between the consumer and licensed third-party insurance providers or underwriters.
          </p>
          <p style="margin-bottom: 0; color: var(--color-text-muted);">
            <strong>Rate Estimates &amp; Actuarial Accuracy:</strong> All rate estimates, benchmark premiums, discounts, and tier comparisons presented are illustrative and derived from publicly available rate filings submitted to state Departments of Insurance (DOI), the National Association of Insurance Commissioners (NAIC), and public consumer surveys. Actual policy terms, underwriting criteria, premium pricing, and eligibility are determined solely by the underwriting insurance carrier based on individual applicant risk factors, including driving history, credit-based insurance score, garaging territory, and requested coverage limits.
          </p>
        </div>
`;

console.log(`Injecting comprehensive legal disclaimers into ${targetFiles.length} files...`);

let updatedCount = 0;

for (const file of targetFiles) {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has legal-disclaimer-box
  if (html.includes('class="legal-disclaimer-box"')) {
    console.log(`Already has disclaimer: ${file}`);
    continue;
  }

  // Insert right before </article>
  if (html.includes('</article>')) {
    html = html.replace('</article>', `${legalDisclaimerHtml}\n      </article>`);
    fs.writeFileSync(filePath, html, 'utf-8');
    updatedCount++;
    console.log(`Injected disclaimer: ${file}`);
  } else {
    console.log(`Could not find </article> in: ${file}`);
  }
}

console.log(`\nSuccessfully injected legal disclaimers into ${updatedCount} files.`);
