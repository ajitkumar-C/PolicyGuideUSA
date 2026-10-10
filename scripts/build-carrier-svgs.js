const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const svgs = {
  "carrier-progressive.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgProg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B132B"/>
        <stop offset="50%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#0369A1"/>
      </linearGradient>
      <linearGradient id="cardProg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgProg)"/>
    <circle cx="1030" cy="170" r="280" fill="#38BDF8" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardProg)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Progressive P&amp;C Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Snapshot Telematics, Rate Benchmarks &amp; HomeQuote Explorer</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">📊 Avg Auto Rate</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$2,150 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Lenient for high-risk &amp; prior lapses</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">📱 Snapshot Program</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Up to $156/yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Average driver discount earned</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(244,114,182,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F472B6">🏡 Home Multi-Line</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">ASI Underwriting</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">HomeQuote Explorer network</text>
      </g>
    </g>
  </svg>`,

  "carrier-state-farm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgSF" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#991B1B"/>
        <stop offset="100%" stop-color="#DC2626"/>
      </linearGradient>
      <linearGradient id="cardSF" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgSF)"/>
    <circle cx="1030" cy="170" r="280" fill="#EF4444" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardSF)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(239, 68, 68, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F87171" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">State Farm P&amp;C Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">#1 US Market Share, Captive Agents &amp; Drive Safe &amp; Save</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">🛡️ Market Dominance</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">18.5% Share</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Largest auto &amp; home insurer in US</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">📦 Multi-Line Bundle</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Up to $1,127</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Annual savings when bundling home/auto</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🚗 Drive Safe &amp; Save</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Up to 30% Off</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Zero surcharge guarantee policy</text>
      </g>
    </g>
  </svg>`,

  "carrier-geico.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgGeico" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B132B"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#2563EB"/>
      </linearGradient>
      <linearGradient id="cardGeico" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgGeico)"/>
    <circle cx="1030" cy="170" r="280" fill="#60A5FA" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardGeico)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(96, 165, 250, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#60A5FA" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">GEICO P&amp;C Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Direct Auto Pricing, Berkshire Underwriting &amp; DriveEasy</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#60A5FA">⚡ Low Base Rates</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$1,980 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Top choice for clean driving records</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🎖️ Federal &amp; Military</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Up to 15% Off</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Over 500 recognized affinity groups</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(244,114,182,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F472B6">🏠 Home Partnership</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Third-Party</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Underwritten by Travelers/Homesite</text>
      </g>
    </g>
  </svg>`,

  "carrier-allstate.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgAllstate" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B132B"/>
        <stop offset="50%" stop-color="#1E40AF"/>
        <stop offset="100%" stop-color="#1D4ED8"/>
      </linearGradient>
      <linearGradient id="cardAllstate" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgAllstate)"/>
    <circle cx="1030" cy="170" r="280" fill="#93C5FD" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardAllstate)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(147, 197, 253, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#93C5FD" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Allstate P&amp;C Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Claim Satisfaction Guarantee, Drivewise &amp; Feature Packages</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(147,197,253,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#93C5FD">🤝 Claim Guarantee</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Credit Back</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Six-month premium credit if dissatisfied</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">📱 Drivewise Program</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Cash Rewards</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Quarterly checks back to safe drivers</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🏡 Premium Features</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">HostAdvantage</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Top riders for Airbnb &amp; short term rental</text>
      </g>
    </g>
  </svg>`,

  "carrier-aaa.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgAAA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#B91C1C"/>
      </linearGradient>
      <linearGradient id="cardAAA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgAAA)"/>
    <circle cx="1030" cy="170" r="280" fill="#EF4444" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardAAA)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(239, 68, 68, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F87171" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">AAA (Auto Club) Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Regional Clubs, Membership Math, Roadside Perks &amp; P&amp;C Rates</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">🚗 Roadside Synergy</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Premier Tow</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Built-in towing &amp; emergency service</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">💰 Membership Math</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">5% – 15% Off</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Policy savings exceeds annual dues</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🗺️ Regional Underwriting</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">CSAA / ACG</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Varies by regional motor club</text>
      </g>
    </g>
  </svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(targetDir, filename);
  fs.writeFileSync(filePath, content.trim(), 'utf-8');
  console.log(`Generated SVG banner: ${filename}`);
}

console.log('All 5 Carrier SVG banners generated successfully!');
