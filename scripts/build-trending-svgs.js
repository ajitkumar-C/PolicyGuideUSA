const fs = require("fs");
const path = require("path");

const svgs = {
  "guide-florida-citizens.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgFL" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#0E7490"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="cardFL" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgFL)"/>
    <circle cx="1020" cy="180" r="260" fill="#38BDF8" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardFL)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">FLORIDA PROPERTY WATCH</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Citizens Insurance Depopulation</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">The 20% Takeout Rule, Private Assumption &amp; Mandatory Flood Rules</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">📊 The 20% Rule</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Mandatory Takeout</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Private offer within 20% forces exit</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🌊 Flood Mandate</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">100% Required</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Applies even in Zone X non-flood</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(244,114,182,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F472B6">⚠️ Private Surplus</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Vetting Carriers</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Demotech vs AM Best financial rating</text>
      </g>
    </g>
  </svg>`,

  "guide-rideshare-delivery.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgRide" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#312E81"/>
        <stop offset="100%" stop-color="#4F46E5"/>
      </linearGradient>
      <linearGradient id="cardRide" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgRide)"/>
    <circle cx="1020" cy="180" r="260" fill="#818CF8" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardRide)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="250" height="38" rx="8" fill="rgba(129, 140, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#818CF8" letter-spacing="1.5">GIG ECONOMY AUTO DEFENSE</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Rideshare &amp; Delivery Insurance</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Uber, Lyft, DoorDash &amp; Closing the Period 1 Coverage Black Hole</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.3)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#EF4444">⚠️ Period 1 Trap</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Zero Collision</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">App on, waiting for request</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🛡️ Endorsement Cost</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$15 – $30 / mo</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Full collision &amp; comp continuity</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🍔 Delivery Apps</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">DoorDash Rules</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Excess liability vs personal damage</text>
      </g>
    </g>
  </svg>`,

  "guide-airbnb-short-term-rental.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgAir" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#831843"/>
        <stop offset="100%" stop-color="#BE185D"/>
      </linearGradient>
      <linearGradient id="cardAir" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgAir)"/>
    <circle cx="1020" cy="180" r="260" fill="#F43F5E" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardAir)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(244, 63, 94, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F43F5E" letter-spacing="1.5">SHORT-TERM RENTAL INTELLIGENCE</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Airbnb &amp; Vrbo Host Insurance</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Why Standard HO-3 Policies Deny Claims &amp; How AirCover Falls Short</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.3)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#EF4444">🚫 Business Exclusion</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">HO-3 Voided</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Commercial activity voids home claims</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🛡️ AirCover Reality</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Secondary Only</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Not a replacement for real insurance</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🏠 Commercial Policy</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Full STR Policy</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Loss of rental income + liability</text>
      </g>
    </g>
  </svg>`,

  "guide-fema-private-flood.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgFlood" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#0369A1"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="cardFlood" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgFlood)"/>
    <circle cx="1020" cy="180" r="260" fill="#38BDF8" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardFlood)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="230" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">FLOOD REFORM STRATEGY</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">FEMA Risk Rating 2.0 vs. Private Flood</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">How Private Underwriters Beat NFIP's 18% Annual Escalator &amp; $250k Cap</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#EF4444">📈 NFIP Escalator</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">+18% Per Year</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Compounding Risk Rating 2.0 glidepath</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">💰 Private Flood</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">20% – 40% Less</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Surplus lines modeling actual risk</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🏰 Higher Coverage</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$1,000,000+</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Bypasses FEMA's rigid $250k cap</text>
      </g>
    </g>
  </svg>`,

  "guide-adas-sensor-repairs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgAdas" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#4338CA"/>
      </linearGradient>
      <linearGradient id="cardAdas" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgAdas)"/>
    <circle cx="1020" cy="180" r="260" fill="#6366F1" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardAdas)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="250" height="38" rx="8" fill="rgba(99, 102, 241, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#818CF8" letter-spacing="1.5">VEHICLE TECH REPAIR INFLATION</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">ADAS Sensors &amp; Auto Repair Inflation</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Why Minor Fender Benders &amp; Windshield Replacements Now Cost $3,500+</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(129,140,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#818CF8">📡 Optical Calibration</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$800 – $1,400</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Dynamic &amp; static camera targeting</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#EF4444">💥 Bumper Radar</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Blind Spot Units</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">$1,200 sensor behind plastic fascia</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🛡️ Premium Impact</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">+24% Severity</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Drives modern comprehensive rate spikes</text>
      </g>
    </g>
  </svg>`,

  "guide-cyber-insurance-ransomware.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgCyber" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#14532D"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </linearGradient>
      <linearGradient id="cardCyber" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgCyber)"/>
    <circle cx="1020" cy="180" r="260" fill="#10B981" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardCyber)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(16, 185, 129, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#10B981" letter-spacing="1.5">CYBER DEFENSE INTELLIGENCE</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Small Business Cyber Insurance</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Ransomware Extortion, Wire Fraud &amp; Mandatory Underwriting MFA Controls</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(16,185,129,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#10B981">🔓 Ransomware</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Extortion Shield</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Negotiation, forensics &amp; restoration</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">📧 Social Engineering</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Wire Transfer Fraud</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Funds transfer deception riders</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🔑 Underwriting Rule</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">MFA Mandatory</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Zero coverage without 2FA enforcement</text>
      </g>
    </g>
  </svg>`,

  "guide-life-living-benefits.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgLive" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#0369A1"/>
      </linearGradient>
      <linearGradient id="cardLive" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgLive)"/>
    <circle cx="1020" cy="180" r="260" fill="#38BDF8" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardLive)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">MODERN LIFE PROTECTION</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Life Insurance with Living Benefits</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Accelerated Death Benefits for Cancer, Heart Attack, Stroke &amp; Long-Term Care</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🩺 Critical Illness</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">50% – 80% Payout</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Lump sum while alive for treatments</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">👵 Chronic / LTC</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">2 of 6 ADLs</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Replaces expensive standalone LTC</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">💵 Tax-Free Cash</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">IRC Sec 101(g)</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Exempt from federal income taxation</text>
      </g>
    </g>
  </svg>`,

  "guide-glp1-ozempic-coverage.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgGlp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#701A75"/>
        <stop offset="100%" stop-color="#A21CAF"/>
      </linearGradient>
      <linearGradient id="cardGlp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgGlp)"/>
    <circle cx="1020" cy="180" r="260" fill="#E879F9" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardGlp)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="250" height="38" rx="8" fill="rgba(232, 121, 249, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#E879F9" letter-spacing="1.5">HEALTH PHARMACY STRATEGY</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">GLP-1 Insurance Coverage (2026)</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Prior Authorization Playbook for Ozempic, Wegovy, Mounjaro &amp; Zepbound</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(232,121,249,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#E879F9">📋 Prior Auth Key</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">BMI + Comorbidity</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">BMI &gt;30 or &gt;27 + hypertension</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#EF4444">💊 Formulary Tiers</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Tier 3 / Specialty</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Step therapy metformin requirements</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">💳 Copay Hacks</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$25 / Month</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Manufacturer savings card integration</text>
      </g>
    </g>
  </svg>`,

  "guide-classic-collector-car.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgClassic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#854D0E"/>
        <stop offset="100%" stop-color="#B45309"/>
      </linearGradient>
      <linearGradient id="cardClassic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgClassic)"/>
    <circle cx="1020" cy="180" r="260" fill="#FBBF24" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardClassic)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(251, 191, 36, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#FBBF24" letter-spacing="1.5">COLLECTOR CAR VALUATION</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Classic &amp; Collector Car Insurance</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Agreed Value vs. Stated Value &amp; Actual Cash Value: Avoiding the Total Loss Trap</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🏆 Agreed Value</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Zero Depreciation</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Guaranteed payout of stated appraisal</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#EF4444">⚠️ Stated Value Trap</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Lesser of ACV</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Carrier pays depreciated scrap book</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🏎️ Specialist Policy</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Hagerty / Grundy</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Spare parts &amp; flatbed towing riders</text>
      </g>
    </g>
  </svg>`,

  "guide-percentage-catastrophe-deductibles.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgDed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#991B1B"/>
        <stop offset="100%" stop-color="#B91C1C"/>
      </linearGradient>
      <linearGradient id="cardDed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgDed)"/>
    <circle cx="1020" cy="180" r="260" fill="#F87171" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardDed)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="250" height="38" rx="8" fill="rgba(248, 113, 113, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#F87171" letter-spacing="1.5">CATASTROPHE DEDUCTIBLE MATH</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Percentage Hurricane &amp; Hail Deductibles</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">How 2% to 5% Dwelling Deductibles Create $10k–$25k Surprise Out-of-Pocket Bills</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#EF4444">🌪️ Not a Flat $1,000</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">2% to 5% of Cov A</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">$500k dwelling = $10k to $25k check</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">⏱️ Trigger Dates</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">NOAA Watches</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Active until 72 hours post-storm</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">🛡️ Buy-Back Riders</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Deductible Buffer</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Reimbursement endorsement option</text>
      </g>
    </g>
  </svg>`
};

const outputDir = path.join(__dirname, "..", "assets", "images");

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content.trim(), "utf8");
  console.log("Created: " + filename);
}
console.log("All 10 trending SVGs generated successfully!");
