const fs = require("fs");
const path = require("path");

const svgs = {
  "guide-commercial-liability.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bg)"/>
    <circle cx="1050" cy="150" r="280" fill="#38BDF8" opacity="0.12"/>
    <circle cx="150" cy="550" r="320" fill="#00C48C" opacity="0.1"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="220" height="38" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="1.5">COMMERCIAL DEFENSE</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Commercial General Liability (CGL)</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">$1,000,000 / $2,000,000 Limit Guidelines for Contractors &amp; LLCs</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.2)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🛡️ Bodily Injury &amp; Prop</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$1M Per Occurrence</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Protects jobsite slip &amp; fall claims</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(0,196,140,0.2)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#00C48C">📑 Certificate of Ins (COI)</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Instant Issue</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Mandatory client &amp; landlord proof</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.2)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">💼 Products-Completed</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$2M Aggregate</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Coverage after job signoff</text>
      </g>
    </g>
  </svg>`,

  "guide-business-owners-policy.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgBop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E1B4B"/>
        <stop offset="100%" stop-color="#312E81"/>
      </linearGradient>
      <linearGradient id="cardBop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgBop)"/>
    <circle cx="1000" cy="180" r="260" fill="#818CF8" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardBop)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="230" height="38" rx="8" fill="rgba(129, 140, 248, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#818CF8" letter-spacing="1.5">COMMERCIAL PACKAGE</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Business Owner’s Policy (BOP)</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">3-in-1 Bundled Protection: Property + Liability + Business Interruption</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(129,140,248,0.2)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#818CF8">🏢 Commercial Property</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Buildings &amp; Tools</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Fire, storm &amp; theft protection</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.2)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">⚖️ General Liability</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Customer Lawsuits</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Legal defense &amp; settlements</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.2)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#34D399">💰 Business Income</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Operating Payroll</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Covers lost revenue during repairs</text>
      </g>
    </g>
  </svg>`,

  "guide-pet-insurance.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgPet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#14532D"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </linearGradient>
      <linearGradient id="cardPet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgPet)"/>
    <circle cx="1020" cy="180" r="260" fill="#10B981" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardPet)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="230" height="38" rx="8" fill="rgba(16, 185, 129, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#10B981" letter-spacing="1.5">VETERINARY INTELLIGENCE</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Pet Insurance Buyer’s Guide</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Accident vs Illness vs Wellness Plans &amp; Pre-Existing Exclusion Rules</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(16,185,129,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#10B981">🐾 Reimbursement Rate</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">70% to 90%</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Covers surgeries &amp; emergency ER</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(244,114,182,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F472B6">⚠️ Pre-Existing Watch</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Enroll Early</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Cured vs incurable waiting periods</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🩺 Annual Deductibles</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">$250 or $500</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Annual vs per-condition limits</text>
      </g>
    </g>
  </svg>`,

  "guide-term-vs-whole-life.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgLife" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#064E3B"/>
        <stop offset="100%" stop-color="#0F766E"/>
      </linearGradient>
      <linearGradient id="cardLife" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgLife)"/>
    <circle cx="1020" cy="180" r="260" fill="#14B8A6" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardLife)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(20, 184, 166, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#14B8A6" letter-spacing="1.5">FAMILY WEALTH STRATEGY</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">Term Life vs. Whole Life Insurance</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Why 95% of Families Should Buy Term &amp; Invest the Difference</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="430" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(20,184,166,0.3)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="700" fill="#14B8A6">✅ Term Life (20–30 Years)</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="30" font-weight="800" fill="#F8FAFC">$35 / Month</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">$1,000,000 pure death benefit during mortgage &amp; child rearing</text>
      </g>
      <g transform="translate(530, 240)">
        <rect x="0" y="0" width="430" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(248,113,113,0.3)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="700" fill="#F87171">❌ Whole Life (Permanent)</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="30" font-weight="800" fill="#F8FAFC">$420 / Month</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">High agent commission fees &amp; low cash-value surrender returns</text>
      </g>
    </g>
  </svg>`,

  "guide-hdhp-vs-ppo-hsa.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgHsa" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#172554"/>
      </linearGradient>
      <linearGradient id="cardHsa" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgHsa)"/>
    <circle cx="1020" cy="180" r="260" fill="#3B82F6" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardHsa)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="220" height="38" rx="8" fill="rgba(59, 130, 246, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#60A5FA" letter-spacing="1.5">HEALTHCARE &amp; TAX MATH</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">HDHP vs. PPO Health Insurance</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Triple-Tax-Advantaged HSA Strategy vs Copay Peace of Mind</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(59,130,246,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#60A5FA">🏥 HDHP + HSA</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Triple Tax Free</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Deductible in, tax-free growth &amp; out</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(16,185,129,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#10B981">🩺 Traditional PPO</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Flat Copays</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Predictable doctor visits &amp; Rx meds</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(245,158,11,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#F59E0B">⚖️ Decision Threshold</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Annual Utilization</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">High claims favor PPO; healthy favor HDHP</text>
      </g>
    </g>
  </svg>`,

  "guide-what-to-do-after-accident.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgAcc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#881337"/>
        <stop offset="100%" stop-color="#4C0519"/>
      </linearGradient>
      <linearGradient id="cardAcc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgAcc)"/>
    <circle cx="1020" cy="180" r="260" fill="#F43F5E" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardAcc)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(244, 63, 94, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#FB7185" letter-spacing="1.5">POST-COLLISION DEFENSE</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">What to Do After a Car Accident</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">10-Step Evidence Checklist &amp; What Never to Say to Insurance Adjusters</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(244,63,94,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FB7185">📸 1. Scene Evidence</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Take 20+ Photos</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Skid marks, plates, traffic lights</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🚔 2. Police Report</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Always Call 911</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Get the responding officer badge #</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🤐 3. Zero Admission</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Never Say Sorry</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Politeness is weaponized as fault</text>
      </g>
    </g>
  </svg>`,

  "guide-first-time-homebuyer.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bgHome" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0D9488"/>
      </linearGradient>
      <linearGradient id="cardHome" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bgHome)"/>
    <circle cx="1020" cy="180" r="260" fill="#14B8A6" opacity="0.14"/>
    <g transform="translate(100, 110)">
      <rect x="0" y="0" width="1000" height="455" rx="20" fill="url(#cardHome)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
      <rect x="40" y="40" width="240" height="38" rx="8" fill="rgba(20, 184, 166, 0.15)"/>
      <text x="55" y="65" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#2DD4BF" letter-spacing="1.5">FIRST-TIME HOMEBUYER</text>
      <text x="40" y="130" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="800" fill="#F8FAFC">First-Time Homebuyer Insurance Playbook</text>
      <text x="40" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="500" fill="#94A3B8">Escrow Prepaids, Lender Binder Requirements &amp; Replacement Cost Math</text>
      <line x1="40" y1="210" x2="960" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <g transform="translate(40, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(45,212,191,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#2DD4BF">🏠 Mortgage Binder</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Closing Prerequisite</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Required 14 days before closing</text>
      </g>
      <g transform="translate(345, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">🏦 Escrow Impound</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">12-Month Advance</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Prepaid into closing escrow account</text>
      </g>
      <g transform="translate(650, 240)">
        <rect x="0" y="0" width="280" height="150" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(251,191,36,0.25)"/>
        <text x="25" y="45" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#FBBF24">🔨 Dwelling A Value</text>
        <text x="25" y="80" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="800" fill="#F8FAFC">Rebuild != Market</text>
        <text x="25" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" fill="#94A3B8">Exclude land cost from dwelling limit</text>
      </g>
    </g>
  </svg>`
};

const outputDir = path.join(__dirname, "..", "assets", "images");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content.trim(), "utf-8");
  console.log("Generated:", filename);
}
