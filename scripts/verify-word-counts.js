const fs = require("fs");
const files = [
  "guide-ev-electric-vehicle-insurance.html",
  "guide-ai-aerial-drone-roof-inspection.html",
  "guide-california-fair-plan-home-insurance.html",
  "guide-why-home-insurance-rates-increase.html",
  "guide-car-makers-selling-driving-data.html",
  "guide-uninsured-underinsured-motorist-coverage.html",
  "guide-comprehensive-vs-collision-insurance.html",
  "guide-diminished-value-insurance-claim.html",
  "guide-personal-umbrella-insurance-guide.html",
  "guide-water-backup-vs-flood-insurance.html",
  "guide-sr22-insurance-filing-costs.html",
  "guide-renters-insurance-bundling-hack.html",
  "guide-pay-per-mile-car-insurance.html",
  "guide-commercial-general-liability-insurance.html",
  "guide-business-owners-policy-bop.html",
  "guide-pet-insurance-buying-guide.html",
  "guide-term-vs-whole-life-insurance.html",
  "guide-hdhp-vs-ppo-health-insurance-hsa.html",
  "guide-what-to-do-after-car-accident.html",
  "guide-first-time-homebuyer-insurance.html"
];

let totalWords = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, "utf-8");
  const articleMatch = content.match(/<article[\s\S]*?<\/article>/i);
  if (articleMatch) {
    const textOnly = articleMatch[0].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const words = textOnly.split(" ").length;
    totalWords += words;
    console.log(`${f}: ${words} words`);
  }
});
console.log(`Average: ${Math.round(totalWords / files.length)} words per post across ${files.length} posts.`);
