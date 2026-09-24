const fs = require('fs');

const files = [
  { html: 'guide-ev-electric-vehicle-insurance.html', img: 'assets/images/guide-ev-insurance.jpg' },
  { html: 'guide-ai-aerial-drone-roof-inspection.html', img: 'assets/images/guide-drone-roof-inspection.jpg' },
  { html: 'guide-california-fair-plan-home-insurance.html', img: 'assets/images/guide-california-fair-plan.jpg' },
  { html: 'guide-why-home-insurance-rates-increase.html', img: 'assets/images/guide-why-home-rates-increase.jpg' },
  { html: 'guide-car-makers-selling-driving-data.html', img: 'assets/images/guide-car-makers-selling-data.jpg' },
  { html: 'guide-uninsured-underinsured-motorist-coverage.html', img: 'assets/images/guide-uninsured-motorist.jpg' },
  { html: 'guide-comprehensive-vs-collision-insurance.html', img: 'assets/images/guide-comprehensive-vs-collision.jpg' },
  { html: 'guide-diminished-value-insurance-claim.html', img: 'assets/images/guide-diminished-value.jpg' },
  { html: 'guide-personal-umbrella-insurance-guide.html', img: 'assets/images/guide-umbrella-insurance.jpg' },
  { html: 'guide-water-backup-vs-flood-insurance.html', img: 'assets/images/guide-water-backup-flood.jpg' },
  { html: 'guide-sr22-insurance-filing-costs.html', img: 'assets/images/guide-sr22-insurance.jpg' },
  { html: 'guide-renters-insurance-bundling-hack.html', img: 'assets/images/guide-renters-bundling.jpg' },
  { html: 'guide-pay-per-mile-car-insurance.html', img: 'assets/images/guide-pay-per-mile.jpg' },
  { html: 'guide-commercial-general-liability-insurance.html', img: 'assets/images/guide-commercial-liability.svg' },
  { html: 'guide-business-owners-policy-bop.html', img: 'assets/images/guide-business-owners-policy.svg' },
  { html: 'guide-pet-insurance-buying-guide.html', img: 'assets/images/guide-pet-insurance.svg' },
  { html: 'guide-term-vs-whole-life-insurance.html', img: 'assets/images/guide-term-vs-whole-life.svg' },
  { html: 'guide-hdhp-vs-ppo-health-insurance-hsa.html', img: 'assets/images/guide-hdhp-vs-ppo-hsa.svg' },
  { html: 'guide-what-to-do-after-car-accident.html', img: 'assets/images/guide-what-to-do-after-accident.svg' },
  { html: 'guide-first-time-homebuyer-insurance.html', img: 'assets/images/guide-first-time-homebuyer.svg' }
];

let allOk = true;
files.forEach((item, idx) => {
  const htmlExists = fs.existsSync(item.html);
  const imgExists = fs.existsSync(item.img);
  const htmlSize = htmlExists ? fs.statSync(item.html).size : 0;
  const imgSize = imgExists ? fs.statSync(item.img).size : 0;
  if (!htmlExists || !imgExists || htmlSize < 5000 || imgSize < 500) {
    console.error(`FAILED: ${item.html} (HTML: ${htmlExists}, IMG: ${imgExists})`);
    allOk = false;
  } else {
    console.log(`[${idx+1}/20] OK: ${item.html} (${Math.round(htmlSize/1024)}KB) | Img: ${item.img} (${Math.round(imgSize/1024)}KB)`);
  }
});

if (allOk) {
  console.log("\n>>> ALL 20 GUIDES AND IMAGES VERIFIED PERFECTLY! <<<");
}
