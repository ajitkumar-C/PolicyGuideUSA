const fs = require('fs');

const files = [
  'guide-florida-citizens-property-insurance-depopulation.html',
  'guide-rideshare-uber-lyft-delivery-insurance.html',
  'guide-airbnb-short-term-rental-insurance.html',
  'guide-fema-risk-rating-private-flood-insurance.html',
  'guide-adas-sensors-car-insurance-repair-costs.html',
  'guide-small-business-cyber-insurance-ransomware.html',
  'guide-life-insurance-living-benefits-riders.html',
  'guide-glp1-ozempic-wegovy-health-insurance-coverage.html',
  'guide-classic-collector-car-agreed-value-insurance.html',
  'guide-percentage-catastrophe-hurricane-hail-deductible.html'
];

let allValid = true;

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`Missing file: ${f}`);
    allValid = false;
    return;
  }
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  if (!matches) {
    console.error(`No JSON-LD in ${f}`);
    allValid = false;
    return;
  }
  matches.forEach((m, idx) => {
    try {
      const raw = m.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
      JSON.parse(raw);
    } catch (e) {
      console.error(`Invalid JSON in ${f} (block ${idx}):`, e.message);
      allValid = false;
    }
  });
  console.log(`[PASS] ${f} (${(content.length / 1024).toFixed(1)} KB)`);
});

if (allValid) {
  console.log('\nAll 10 trending guide files and JSON-LD schemas verified successfully!');
} else {
  process.exit(1);
}
