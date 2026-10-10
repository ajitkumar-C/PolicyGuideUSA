const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'assets', 'images');

const svgs = {
  "carrier-travelers.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgTrav" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#991B1B"/>
        <stop offset="100%" stop-color="#B91C1C"/>
      </linearGradient>
      <linearGradient id="cardTrav" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgTrav)"/>
    <circle cx="1030" cy="170" r="280" fill="#EF4444" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardTrav)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(239, 68, 68, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F87171" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Travelers P&amp;C Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">IntelliDrive 90-Day Telematics, Premier New Car Replacement &amp; Independent Agents</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">🛡️ Umbrella Brand</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">170+ Years</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Established 1853 heritage</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">📱 IntelliDrive</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">90-Day Test</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Tracks for 90 days only, not forever</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🤝 Independent</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Top Agency</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Premier independent broker choice</text>
      </g>
    </g>
  </svg>`,

  "carrier-nationwide.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgNW" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="cardNW" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgNW)"/>
    <circle cx="1030" cy="170" r="280" fill="#38BDF8" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardNW)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Nationwide P&amp;C Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Vanishing Deductible, SmartMiles Pay-Per-Mile &amp; On Your Side Claims</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">📉 Vanishing Ded</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">-$100 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Shrinks deductible down to $0</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🚗 SmartMiles</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Pay-Per-Mile</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Ideal for remote workers &amp; low mileage</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(244,114,182,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F472B6">🤝 On Your Side</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Annual Review</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Free comprehensive coverage audit</text>
      </g>
    </g>
  </svg>`,

  "carrier-liberty-mutual.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgLM" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#78350F"/>
        <stop offset="100%" stop-color="#D97706"/>
      </linearGradient>
      <linearGradient id="cardLM" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgLM)"/>
    <circle cx="1030" cy="170" r="280" fill="#FBBF24" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardLM)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(251, 191, 36, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#FBBF24" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Liberty Mutual P&amp;C Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">RightTrack Telematics, Only Pay For What You Need &amp; Lifetime Repair Guarantee</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🎯 Custom Riders</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">A La Carte</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Tailored coverage options</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">📱 RightTrack</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Up to 30% Off</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Telematics discount for safe drivers</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🔧 Lifetime Repair</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Guaranteed</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Network repair warranty for life</text>
      </g>
    </g>
  </svg>`,

  "carrier-farmers.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgFarm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#DC2626"/>
      </linearGradient>
      <linearGradient id="cardFarm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgFarm)"/>
    <circle cx="1030" cy="170" r="280" fill="#EF4444" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardFarm)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(239, 68, 68, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F87171" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Farmers Insurance Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Signal Telematics, Smart Plan Home Packages &amp; Declining Deductibles</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">📦 Smart Plan</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">3 Tiers</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Standard, Enhanced, Premier Home</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">📱 Signal App</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Up to 15%</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Telematics safety discount</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🛡️ Declining Ded</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">-$50 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Earned for claim-free renewals</text>
      </g>
    </g>
  </svg>`,

  "carrier-usaa.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgUSAA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#1E40AF"/>
      </linearGradient>
      <linearGradient id="cardUSAA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgUSAA)"/>
    <circle cx="1030" cy="170" r="280" fill="#60A5FA" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardUSAA)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(96, 165, 250, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#60A5FA" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">USAA Insurance Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Military Eligibility, SafePilot Telematics, Lowest Rates &amp; #1 Claims Satisfaction</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#60A5FA">🎖️ Military Only</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Exclusive</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Serving active, vets &amp; families</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">💰 Lowest Rates</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$1,450 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">National average for full coverage</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">⭐ J.D. Power</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Top Ranked</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Highest claim satisfaction score</text>
      </g>
    </g>
  </svg>`,

  "carrier-vs-state-farm-progressive.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgSFProg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#991B1B"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="cardSFProg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgSFProg)"/>
    <circle cx="1030" cy="170" r="280" fill="#38BDF8" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardSFProg)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">CARRIER SHOWDOWN 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">State Farm vs. Progressive</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">America's #1 P&amp;C Rivalry: Rates, Snapshot vs. Drive Safe &amp; Save, &amp; Bundling</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">🔴 State Farm</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$2,080 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Wins on Home/Auto Bundles &amp; Agents</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🔵 Progressive</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$2,150 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Wins on High-Risk Drivers &amp; Tech</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">⚖️ The Verdict</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Profile Split</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Clean=State Farm; Tickets=Progressive</text>
      </g>
    </g>
  </svg>`,

  "carrier-vs-geico-progressive.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgGP" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="cardGP" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgGP)"/>
    <circle cx="1030" cy="170" r="280" fill="#60A5FA" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardGP)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(96, 165, 250, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#60A5FA" letter-spacing="1.5">CARRIER SHOWDOWN 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">GEICO vs. Progressive</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Direct Auto Quoting Giants: Rates, DriveEasy vs. Snapshot, &amp; Claims Payouts</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#60A5FA">🦎 GEICO</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$1,980 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Cheapest for clean records &amp; military</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">📦 Progressive</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$2,150 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Better for tickets, DUIs &amp; bundle</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">⚙️ Tech Features</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">MBI vs HQX</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">GEICO warranty vs Prog home network</text>
      </g>
    </g>
  </svg>`,

  "carrier-vs-state-farm-allstate.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgSFAll" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#991B1B"/>
        <stop offset="100%" stop-color="#1E40AF"/>
      </linearGradient>
      <linearGradient id="cardSFAll" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgSFAll)"/>
    <circle cx="1030" cy="170" r="280" fill="#93C5FD" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardSFAll)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(147, 197, 253, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#93C5FD" letter-spacing="1.5">CARRIER SHOWDOWN 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">State Farm vs. Allstate</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Captive Agency Giants: Bundling Discounts, Drive Safe vs Drivewise, &amp; Claims Guarantee</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">🔴 State Farm</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">19k Agents</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Cheaper base rates &amp; bigger bundle</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(147,197,253,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#93C5FD">🔵 Allstate</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Guarantee</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">6-mo claim credit &amp; HostAdvantage</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">💰 Bundle Math</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">-$1,127/yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">State Farm edges Allstate on pricing</text>
      </g>
    </g>
  </svg>`,

  "carrier-cheapest-pc-ranking.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgCheap" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#065F46"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <linearGradient id="cardCheap" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgCheap)"/>
    <circle cx="1030" cy="170" r="280" fill="#34D399" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardCheap)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(52, 211, 153, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#34D399" letter-spacing="1.5">NATIONAL BENCHMARK 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Top 10 Cheapest P&amp;C Insurers</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Actuarial Cost Comparison: Auto, Home &amp; Multi-Line Bundles Ranked Across 50 States</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🥇 #1 Overall</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">USAA</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Lowest rates (Military exclusive)</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🥈 #2 General</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">GEICO</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Lowest public rate for clean drivers</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🥉 #3 Bundler</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">State Farm</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Best pricing when pairing home+auto</text>
      </g>
    </g>
  </svg>`,

  "guide-how-to-switch-insurance.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgSwitch" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#10B981"/>
      </linearGradient>
      <linearGradient id="cardSwitch" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgSwitch)"/>
    <circle cx="1030" cy="170" r="280" fill="#38BDF8" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardSwitch)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">CONSUMER PLAYBOOK 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">How to Switch Insurance</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Avoid Penalties, Secure Pro-Rated Refunds, Mortgage Escrow Timing &amp; Zero Coverage Gaps</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">💵 Pro-Rated Refund</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">100% Legal</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Insurers must refund unused premiums</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">⏱️ Zero-Gap Rule</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Overlapping</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Never cancel old before new is active</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🏡 Escrow Timing</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Notify Lender</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Send binder 15 days before renewal</text>
      </g>
    </g>
  </svg>`,

  "carrier-american-family.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgAmFam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#9333EA"/>
      </linearGradient>
      <linearGradient id="cardAmFam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgAmFam)"/>
    <circle cx="1030" cy="170" r="280" fill="#C084FC" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardAmFam)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(192, 132, 252, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#C084FC" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">American Family Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">KnowYourDrive Telematics, Diminishing Deductible &amp; Midwest Multi-Line Strength</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(192,132,252,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#C084FC">📱 KnowYourDrive</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Up to 20%</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">App-based driving discount</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">📦 Midwest Bundles</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">23% Savings</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Top home and auto discount</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">⭐ Customer Care</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">A Rating</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">A.M. Best financial stability</text>
      </g>
    </g>
  </svg>`,

  "carrier-erie.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgErie" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#065F46"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <linearGradient id="cardErie" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgErie)"/>
    <circle cx="1030" cy="170" r="280" fill="#34D399" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardErie)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(52, 211, 153, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#34D399" letter-spacing="1.5">CARRIER AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Erie Insurance Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Why ERIE Rate Lock® Freezes Premiums for Years &amp; Independent Agency Trust</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🔒 ERIE Rate Lock</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Frozen Rates</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Rate stays same until you change cars</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">💰 Lowest Mid-Atl</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$1,540 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">25% cheaper than national average</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">⭐ #1 J.D. Power</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Top 3 Regional</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Exceptional customer loyalty</text>
      </g>
    </g>
  </svg>`,

  "carrier-chubb.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgChubb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B0F19"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
      <linearGradient id="cardChubb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgChubb)"/>
    <circle cx="1030" cy="170" r="280" fill="#F59E0B" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardChubb)" stroke="rgba(245,158,11,0.3)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(245, 158, 11, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F59E0B" letter-spacing="1.5">LUXURY P&amp;C AUDIT 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Chubb Masterpiece Review</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">High-Net-Worth Estates, Unlimited Cash Rebuild, Agreed Value Auto &amp; Concierge Claims</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(245,158,11,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F59E0B">🏰 Extended Rebuild</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Unlimited</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Pays rebuild cost even over limit</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🏎️ Agreed Value</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">No Deprec.</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Locks vehicle total-loss check</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">💎 Cash-Out Option</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">100% Cash</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Take cash check without rebuilding</text>
      </g>
    </g>
  </svg>`,

  "carrier-vs-aaa-state-farm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgAAASF" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#7F1D1D"/>
        <stop offset="100%" stop-color="#DC2626"/>
      </linearGradient>
      <linearGradient id="cardAAASF" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgAAASF)"/>
    <circle cx="1030" cy="170" r="280" fill="#EF4444" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardAAASF)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(239, 68, 68, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F87171" letter-spacing="1.5">CARRIER SHOWDOWN 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">AAA vs. State Farm</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Roadside Club Synergy vs. #1 Captive Agent Network: Rates, Perks &amp; Bundling</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">🚗 AAA (Auto Club)</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Towing Built-In</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Best for drivers wanting roadside perks</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🔴 State Farm</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">National Reach</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">19k agents in all 50 states seamlessly</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">💰 Rate Match</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Close Call</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">State Farm edges out on home bundle</text>
      </g>
    </g>
  </svg>`,

  "carrier-vs-geico-state-farm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgGSF" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#DC2626"/>
      </linearGradient>
      <linearGradient id="cardGSF" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgGSF)"/>
    <circle cx="1030" cy="170" r="280" fill="#60A5FA" opacity="0.16"/>
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="1000" height="475" rx="20" fill="url(#cardGSF)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <rect x="40" y="40" width="280" height="38" rx="8" fill="rgba(96, 165, 250, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#60A5FA" letter-spacing="1.5">CARRIER SHOWDOWN 2026</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">GEICO vs. State Farm</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">Direct Low-Cost Auto vs. Mutual Agency Leader: Pricing, Bundles &amp; Underwriting</text>
      <line x1="40" y1="215" x2="960" y2="215" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#60A5FA">🦎 GEICO</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$1,980 / yr</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Cheapest for solo auto &amp; military</text>
      </g>
      <g transform="translate(345, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F87171">🔴 State Farm</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Top Bundler</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Internal home+auto underwriting</text>
      </g>
      <g transform="translate(650, 245)">
        <rect x="0" y="0" width="280" height="170" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">⚖️ Winner</text>
        <text x="25" y="85" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Contextual</text>
        <text x="25" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Solo auto=GEICO; Homeowner=State Farm</text>
      </g>
    </g>
  </svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(targetDir, filename);
  fs.writeFileSync(filePath, content.trim(), 'utf-8');
  console.log(`Generated SVG banner: ${filename}`);
}

console.log('All 15 Batch 2 SVG banners generated successfully!');

