const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
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

const cleanDisclaimerHtml = `        <!-- Legal, Actuarial & Trademark Protection Notice -->
        <div class="legal-disclaimer-box">
          <div class="legal-header">
            <span>⚖️</span> Legal Trademark Notice, Actuarial Methodology &amp; Regulatory Disclaimers
          </div>
          <p>
            <strong>Trademark &amp; Non-Affiliation Notice:</strong> State Farm®, Progressive®, GEICO®, Allstate®, AAA®, Travelers®, Nationwide®, Liberty Mutual®, Farmers®, USAA®, American Family®, Erie Insurance®, Chubb®, and any other third-party insurer trademarks, service marks, logos, or brand names referenced on this website are the sole property of their respective corporate owners. PolicyGuide USA is an independent consumer research and informational publisher. PolicyGuide USA is not an agent, broker, affiliate, subsidiary, or sponsor of, nor is it endorsed by, any insurance carrier mentioned herein. All references to trademarks and brand names are strictly for identification, consumer education, and comparative analysis under the Nominative Fair Use doctrine of the United States Trademark Act (15 U.S.C. § 1125 / Lanham Act).
          </p>
          <p>
            <strong>Not an Underwriting Carrier or Insurance Broker:</strong> PolicyGuide USA is strictly an independent educational and financial technology publisher. We do not sell insurance policies, underwrite risk, process claims, issue insurance binders, or act as an insurance brokerage. Any quote submission, policy consultation, or insurance transaction occurs directly between the consumer and licensed third-party insurance providers or underwriters.
          </p>
          <p>
            <strong>Rate Estimates &amp; Actuarial Accuracy:</strong> All rate estimates, benchmark premiums, discounts, and tier comparisons presented are illustrative and derived from publicly available rate filings submitted to state Departments of Insurance (DOI), the National Association of Insurance Commissioners (NAIC), and public consumer surveys. Actual policy terms, underwriting criteria, premium pricing, and eligibility are determined solely by the underwriting insurance carrier based on individual applicant risk factors, including driving history, credit-based insurance score, garaging territory, and requested coverage limits.
          </p>
        </div>`;

console.log(`Cleaning inline styles on ${targetFiles.length} files...`);

for (const file of targetFiles) {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf-8');

  // Replace existing legal-disclaimer-box block with clean markup
  const regex = /<!-- Legal, Actuarial & Trademark Protection Notice -->[\s\S]*?<\/div>\s*(?=<\/article>|<!-- Quote Modal -->|<\/div>\s*<\/div>\s*<!-- Quote Modal)/;
  if (regex.test(html)) {
    html = html.replace(regex, cleanDisclaimerHtml + '\n');
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`Cleaned: ${file}`);
  } else {
    // If matched by class
    const regex2 = /<div class="legal-disclaimer-box"[\s\S]*?<\/div>/;
    if (regex2.test(html)) {
      html = html.replace(regex2, cleanDisclaimerHtml);
      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`Cleaned (fallback): ${file}`);
    }
  }
}

console.log('\nAll disclaimer boxes cleaned of conflicting inline styles.');
