const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// Exact dictionary of optimized Titles (40-60 chars) and Descriptions (130-155 chars)
const seoMap = {
  // Hubs
  'index.html': {
    title: 'PolicyGuide USA | 2026 Auto & Home Insurance Rates',
    desc: 'Compare 2026 US auto and home insurance rates, statutory state minimums, and top carrier ratings across all 50 states. Free calculators and rate tools.'
  },
  'calculators.html': {
    title: 'Free Insurance Calculators (2026) | PolicyGuide',
    desc: 'Free 2026 insurance calculators: estimate auto, home, renters, health, life, pet, and business premiums with live regional cost factors.'
  },
  'state-guide.html': {
    title: 'US Insurance Laws & Rates by State (2026)',
    desc: 'Compare statutory minimum liability limits, tort systems, average premium rates, and DOI compliance requirements across all 50 US states.'
  },
  'city-guide.html': {
    title: 'US Metro City Insurance Rates & Guides (2026)',
    desc: 'Compare verified carrier baselines, statutory minimums, and local weather peril rules across major US metropolitan cities. Find cheap rates.'
  },
  'carrier-comparison.html': {
    title: 'Insurance Carrier Comparison (2026) | PolicyGuide',
    desc: 'Compare America\'s top 10 insurance carriers side-by-side. Benchmark 2026 auto & home rates, telematics discounts, and customer claim satisfaction.'
  },
  'blog.html': {
    title: 'Insurance Guides & Rate Analysis (2026) | PolicyGuide',
    desc: 'Explore 50+ in-depth insurance guides. Uncover clear breakdowns of carrier pricing, telematics apps, state regulations, and discount strategies.'
  },

  // Calculators
  'calculator-auto.html': {
    title: 'Auto Insurance Calculator (2026) | PolicyGuide',
    desc: 'Free 2026 Auto Insurance Calculator. Estimate your personalized car insurance cost in seconds using vehicle class, driver age, mileage, and coverage tiers.'
  },
  'calculator-home.html': {
    title: 'Home Insurance Calculator (2026) | Free Tool',
    desc: 'Free 2026 Home Insurance Calculator. Estimate your annual and monthly house insurance costs based on dwelling rebuild value, roof age, and storm peril.'
  },
  'calculator-renters.html': {
    title: 'Renters Insurance Calculator (2026) | PolicyGuide',
    desc: 'Free 2026 Renters Insurance Calculator. Estimate tenant policy costs based on personal property value, liability limit, and deductible options.'
  },
  'calculator-health.html': {
    title: 'Health Insurance Cost Calculator (2026) | Free Tool',
    desc: 'Free 2026 Health Insurance Calculator. Estimate ACA premiums, plan deductible trade-offs, and employer subsidies across Bronze, Silver, and Gold tiers.'
  },
  'calculator-life.html': {
    title: 'Life Insurance Calculator (2026) | Term & Whole',
    desc: 'Free 2026 Life Insurance Calculator. Estimate your term and whole life coverage needs, monthly premiums, and family income protection in 60 seconds.'
  },
  'calculator-business.html': {
    title: 'Business Insurance Calculator (2026) | Free Tool',
    desc: 'Estimate small business insurance premiums for general liability, BOP, commercial property, and workers comp based on revenue, payroll, and industry.'
  },
  'calculator-pet.html': {
    title: 'Pet Insurance Calculator (2026) | PolicyGuide',
    desc: 'Free 2026 Pet Insurance Calculator. Estimate monthly veterinary insurance costs for dogs and cats based on breed risk, age, and deductible options.'
  },
  'calculator-rv.html': {
    title: 'RV Insurance Calculator (2026) | PolicyGuide',
    desc: 'Free 2026 RV Insurance Calculator. Estimate motorhome (Class A/B/C), camper van, and travel trailer insurance costs, including full-timer endorsements.'
  },
  'calculator-boat.html': {
    title: 'Boat & Watercraft Insurance Calculator (2026)',
    desc: 'Calculate boat and watercraft insurance premiums by hull length, engine horsepower, vessel value, waters navigated, and liability limits.'
  },
  'calculator-travel.html': {
    title: 'Travel Insurance Calculator (2026) | PolicyGuide',
    desc: 'Free 2026 Travel Insurance Calculator. Calculate trip cancellation, emergency medical evacuation, and Cancel For Any Reason (CFAR) costs.'
  },
  'calculator-deductible.html': {
    title: 'Deductible Break-Even Simulator (2026)',
    desc: 'Free 2026 Insurance Deductible Simulator. Calculate your break-even timeline when switching between $500, $1,000, and $2,500 auto and home deductibles.'
  },
  'calculator-discounts.html': {
    title: 'Insurance Discount Matcher Quiz (2026) | Free Tool',
    desc: 'Take our 2-minute insurance discount quiz. Discover bundling, telematics, safety equipment, and loyalty discounts to lower your premiums up to 35%.'
  },
  'calculator-vehicle-rate.html': {
    title: 'Vehicle & Driver Rate Estimator (2026)',
    desc: 'Calculate auto insurance premiums by vehicle category and driver age bracket. See live benchmark rates for sedans, SUVs, trucks, and electric vehicles.'
  },
  'calculator-compliance-audit.html': {
    title: 'State Compliance & Policy Audit (2026) Checklist',
    desc: 'Free 2026 State Insurance Compliance Audit. Verify your auto and home policy limits against 50-state statutory requirements and avoid penalty risks.'
  },
  'calculator-underinsured.html': {
    title: 'Am I Underinsured? Liability Limit Advisor (2026)',
    desc: 'Calculate your true liability lawsuit exposure. Find out if your auto and home coverage limits protect your home equity, wages, and savings.'
  },

  // Carrier Reviews & Comparisons
  'carrier-progressive-insurance-review.html': {
    title: 'Progressive Insurance Review (2026): Rates & Claims',
    desc: 'Unbiased 2026 Progressive Insurance Review. Benchmark car & home insurance rates, Snapshot telematics savings, Name Your Price tool, and claims scores.'
  },
  'carrier-state-farm-insurance-review.html': {
    title: 'State Farm Insurance Review (2026): Rates & Agents',
    desc: 'Comprehensive 2026 State Farm Insurance review. Explore auto and home rate benchmarks, Drive Safe & Save telematics, captive agent pros, and bundle savings.'
  },
  'carrier-geico-insurance-review.html': {
    title: 'GEICO Insurance Review (2026): Rates & DriveEasy',
    desc: 'Honest 2026 GEICO Insurance Review. Explore auto insurance pricing advantages, DriveEasy telematics, federal/military discounts, and claims handling.'
  },
  'carrier-allstate-insurance-review.html': {
    title: 'Allstate Insurance Review (2026): Rates & Drivewise',
    desc: 'Detailed 2026 Allstate Insurance Review. Analyze auto and homeowners rates, the Claim Satisfaction Guarantee, Drivewise telematics, and endorsements.'
  },
  'carrier-usaa-insurance-review.html': {
    title: 'USAA Insurance Review (2026): Military Rates & Perks',
    desc: 'Comprehensive 2026 USAA Insurance Review. Discover why USAA leads in customer satisfaction, lowest auto/home premiums, military perks, and eligibility.'
  },
  'carrier-erie-insurance-review.html': {
    title: 'Erie Insurance Review (2026): Rates & Rate Lock',
    desc: '2026 Erie Insurance Review. See how Erie Rate Lock freezes car insurance prices, benchmark cheap auto/home rates across 12 states, and check satisfaction.'
  },
  'carrier-farmers-insurance-review.html': {
    title: 'Farmers Insurance Review (2026): Rates & Signal App',
    desc: '2026 Farmers Insurance Review. Evaluate auto and home rates, Signal telematics discounts, customizable tiers (Standard, Enhanced), and customer ratings.'
  },
  'carrier-travelers-insurance-review.html': {
    title: 'Travelers Insurance Review (2026): Rates & Telematics',
    desc: 'In-depth 2026 Travelers Insurance Review. Real auto & home rates, IntelliDrive 90-day telematics savings, Premier New Car Replacement, and umbrella discounts.'
  },
  'carrier-nationwide-insurance-review.html': {
    title: 'Nationwide Insurance Review (2026): Rates & Coverage',
    desc: '2026 Nationwide Insurance Review. Analyze auto and home pricing, SmartMiles telematics for low-mileage drivers, Vanishing Deductible, and claims performance.'
  },
  'carrier-liberty-mutual-insurance-review.html': {
    title: 'Liberty Mutual Review (2026): Rates & RightTrack',
    desc: 'Unbiased 2026 Liberty Mutual Review. Benchmark auto & home rates, RightTrack telematics discounts, 24-hour roadside assistance, and customizable options.'
  },
  'carrier-chubb-insurance-review.html': {
    title: 'Chubb Insurance Review (2026): High-Net-Worth Rates',
    desc: '2026 Chubb Insurance Review. Discover Masterpiece high-value home & auto coverage, cash settlement options, complimentary risk consulting, and claims.'
  },
  'carrier-american-family-insurance-review.html': {
    title: 'American Family Review (2026): Rates & Discounts',
    desc: '2026 American Family Insurance Review. Explore AmFam auto & home rates, KnowYourDrive telematics savings, Generational discounts, and regional strengths.'
  },
  'carrier-aaa-auto-club-insurance-review.html': {
    title: 'AAA Auto Club Insurance Review (2026): Rates & Perks',
    desc: '2026 AAA Auto Club Insurance Review. Is membership required? Discover regional club underwriting (Auto Club South, ACG, CSAA), discounts, and roadside perks.'
  },
  'carrier-cheapest-property-casualty-insurance.html': {
    title: '10 Cheapest Insurance Companies in 2026 (Ranked)',
    desc: 'Who is the cheapest insurer in 2026? We benchmarked 100,000+ quotes across Progressive, GEICO, State Farm, Erie, USAA, and Travelers to rank the top 10.'
  },
  'carrier-geico-vs-progressive.html': {
    title: 'GEICO vs. Progressive (2026): Who Has Cheaper Rates?',
    desc: 'Detailed 2026 GEICO vs Progressive matchup. Uncover who offers cheaper car insurance, better tech apps, multi-policy discounts, and accident forgiveness.'
  },
  'carrier-geico-vs-state-farm.html': {
    title: 'GEICO vs. State Farm (2026): Which Insurer is Better?',
    desc: 'GEICO vs State Farm 2026 comparison. Which insurer is cheaper for your car and home? Compare rates by age, accident history, bundling, and customer service.'
  },
  'carrier-state-farm-vs-allstate.html': {
    title: 'State Farm vs. Allstate (2026): Rates & Comparison',
    desc: 'State Farm vs Allstate 2026 showdown. Compare captive agent service, Drive Safe & Save vs Drivewise, Claim Satisfaction Guarantee, and bundle rates.'
  },
  'carrier-state-farm-vs-progressive.html': {
    title: 'State Farm vs. Progressive (2026): Which is Cheaper?',
    desc: 'State Farm vs Progressive 2026 comparison. Compare full-coverage auto & home rates, Drive Safe & Save vs Snapshot, agent experience, and claims handling.'
  },
  'carrier-aaa-vs-state-farm.html': {
    title: 'AAA vs. State Farm (2026): Rates & Roadside Perks',
    desc: '2026 AAA vs State Farm comparison. Roadside assistance memberships vs nationwide agency network, auto and home rates, telematics, and loyalty discounts.'
  },

  // In-Depth Guides
  'guide-actual-cash-value-vs-replacement-cost.html': {
    title: 'Actual Cash Value vs. Replacement Cost Guide (2026)',
    desc: 'Learn the critical difference between ACV and Replacement Cost. Discover how depreciation clauses impact claims payouts on roofs, electronics, and cars.'
  },
  'guide-adas-sensors-car-insurance-repair-costs.html': {
    title: 'Why Car Repairs Cost $3,500+: ADAS Sensors & Rates',
    desc: 'Discover why windshield and bumper repairs cost $3,500+ today. Learn how ADAS sensor calibration drives up auto insurance collision premiums in 2026.'
  },
  'guide-ai-aerial-drone-roof-inspection.html': {
    title: 'AI & Drone Roof Inspections: Home Insurance Drops',
    desc: 'Why home insurers use aerial drones and AI imagery to non-renew policies. Learn how to challenge inaccurate drone roof reports and keep your coverage.'
  },
  'guide-airbnb-short-term-rental-insurance.html': {
    title: 'Airbnb & Short-Term Rental Insurance Guide (2026)',
    desc: 'Why standard homeowners insurance voids short-term rental claims. Learn how AirCover gaps leave hosts liable and how to get commercial host endorsements.'
  },
  'guide-business-owners-policy-bop.html': {
    title: 'Business Owner\'s Policy (BOP) Guide | PolicyGuide',
    desc: 'Complete small business guide to Business Owner\'s Policies (BOP). Learn how bundling property and liability insurance cuts commercial premiums by 25%.'
  },
  'guide-california-fair-plan-home-insurance.html': {
    title: 'California FAIR Plan Guide: Wildfire Rates & Rules',
    desc: 'Complete guide to the California FAIR Plan insurer of last resort. Understand wildfire risk scores, companion wrap policies, and alternatives in 2026.'
  },
  'guide-car-makers-selling-driving-data.html': {
    title: 'Are Automakers Selling Your Driving Data? (2026)',
    desc: 'Learn how GM, Ford, and Honda share telematics data with LexisNexis and Verisk. Discover how to request your consumer disclosure report and opt out.'
  },
  'guide-cheap-car-insurance-for-teens.html': {
    title: 'Cheap Car Insurance for Teens & College Students',
    desc: 'Proven underwriting strategies to lower teen driver car insurance rates. Discover good student discounts, parent policy bundling, and vehicle safety math.'
  },
  'guide-classic-collector-car-agreed-value-insurance.html': {
    title: 'Classic Car Insurance: Agreed Value vs Stated Value',
    desc: 'Why standard auto insurance ruins classic car payouts. Learn the crucial difference between Agreed Value vs Stated Value with Hagerty and Grundy.'
  },
  'guide-commercial-general-liability-insurance.html': {
    title: 'Commercial General Liability (CGL) Limits Guide',
    desc: 'Complete contractor and business guide to Commercial General Liability (CGL). Learn per-occurrence limits, aggregate caps, and COI certificate rules.'
  },
  'guide-comprehensive-vs-collision-insurance.html': {
    title: 'Comprehensive vs. Collision Insurance: 10% Rule',
    desc: 'Understand comprehensive vs collision insurance. Learn when to drop full coverage on older cars using the 10% rule and how to choose optimal deductibles.'
  },
  'guide-credit-score-car-insurance-impact.html': {
    title: 'Does Credit Score Affect Car Insurance? State Laws',
    desc: 'How insurance credit scores impact auto premiums up to 70%. Learn which states ban credit scoring (CA, HI, MA, MI) and how to improve your rating.'
  },
  'guide-diminished-value-insurance-claim.html': {
    title: 'How to File a Diminished Value Claim After a Crash',
    desc: 'Your car lost 15% to 30% of its market value after accident repairs. Learn how to calculate 17c diminished value formula and recover thousands in cash.'
  },
  'guide-ev-electric-vehicle-insurance.html': {
    title: 'Tesla & EV Insurance Guide (2026): Why Rates Differ',
    desc: 'Why electric vehicles cost 25% more to insure than gas cars. Explore battery replacement underwriting, Tesla Insurance safety scores, and discount hacks.'
  },
  'guide-fema-risk-rating-private-flood-insurance.html': {
    title: 'FEMA Risk Rating 2.0 vs. Private Flood Insurance',
    desc: 'Compare FEMA NFIP flood insurance under Risk Rating 2.0 against private flood underwriters. Learn flood zone rules, rate increases, and coverage limits.'
  },
  'guide-first-time-homebuyer-insurance.html': {
    title: 'First-Time Homebuyer Insurance Playbook (2026)',
    desc: 'First-time homebuyer? Complete guide to home insurance requirements: mortgage escrow prepaids, insurance binder deadlines, and replacement cost math.'
  },
  'guide-florida-citizens-property-insurance-depopulation.html': {
    title: 'Florida Citizens Insurance Depopulation: 20% Rule',
    desc: 'Florida Citizens Property Insurance depopulation explained. Learn how the 20% takeout rule works, why flood insurance is mandatory, and how to evaluate offers.'
  },
  'guide-gap-insurance-explained.html': {
    title: 'Gap Insurance Explained: When Is It Worth It?',
    desc: 'What is gap insurance and do you actually need it? Compare carrier gap insurance ($30/yr) vs dealership markups ($800), loan depreciation math, and rules.'
  },
  'guide-glp1-ozempic-wegovy-health-insurance-coverage.html': {
    title: 'GLP-1 Insurance Coverage: Ozempic & Wegovy Rules',
    desc: 'Complete guide to getting GLP-1 weight loss and diabetes medications approved by insurance. Learn prior authorization criteria, appeal letters, and copays.'
  },
  'guide-hdhp-vs-ppo-health-insurance-hsa.html': {
    title: 'HDHP vs. PPO Health Insurance: HSA Tax Savings',
    desc: 'Compare HDHP vs PPO health insurance. Learn the triple-tax advantage of Health Savings Accounts (HSA), deductible math, and how to choose the right plan.'
  },
  'guide-high-vs-low-insurance-deductible.html': {
    title: 'High vs. Low Insurance Deductibles: How to Choose',
    desc: 'Calculate whether a high or low insurance deductible saves more money. Compare $500 vs $1,000 deductibles, break-even timelines, and emergency fund rules.'
  },
  'guide-home-and-auto-insurance-bundle.html': {
    title: 'Home & Auto Insurance Bundle Guide: Save Up to 25%',
    desc: 'Discover how bundling home and auto insurance can save 15% to 25% annually. Compare top carrier discounts, single-deductible benefits, and bundle tips.'
  },
  'guide-how-much-car-insurance-do-i-need.html': {
    title: 'How Much Car Insurance Do I Need? 2026 Guide',
    desc: 'Find out exactly how much car insurance you need in 2026. Understand liability limits (100/300/100), full coverage requirements, and how to protect assets.'
  },
  'guide-how-to-lower-car-insurance.html': {
    title: 'How to Lower Your Car Insurance Rate: 12 Tactics',
    desc: 'Tired of auto insurance price hikes? Use these 12 proven underwriting tactics to reduce your car insurance premiums by 20% to 40% immediately.'
  },
  'guide-how-to-switch-insurance-companies.html': {
    title: 'How to Switch Insurance Companies in 2026',
    desc: 'Step-by-step 2026 guide on switching car and home insurance. Avoid coverage lapses, escrow pitfalls, get prorated refunds, and find cheaper rates legally.'
  },
  'guide-life-insurance-living-benefits-riders.html': {
    title: 'Life Insurance with Living Benefits Guide (2026)',
    desc: 'Discover how life insurance with living benefits allows you to access up to 80% of your death benefit while still alive to pay for cancer or critical care.'
  },
  'guide-pay-per-mile-car-insurance.html': {
    title: 'Pay-Per-Mile Car Insurance: Metromile & Mile Auto',
    desc: 'Do you drive under 7,500 miles a year? Compare pay-per-mile auto insurance programs, base daily rates, mileage tracking technology, and who saves the most.'
  },
  'guide-penalties-for-driving-without-insurance.html': {
    title: 'Penalties for Driving Without Insurance (50 States)',
    desc: 'What happens if you are caught driving without insurance in 2026? State-by-state fines, license suspensions, vehicle impounds, and SR-22 requirements.'
  },
  'guide-percentage-catastrophe-hurricane-hail-deductible.html': {
    title: 'Percentage Hurricane & Hail Deductibles Explained',
    desc: 'Discover how 2% to 5% percentage hurricane and hail deductibles create surprise out-of-pocket bills, how triggers work, and buy-back options in 2026.'
  },
  'guide-personal-umbrella-insurance-guide.html': {
    title: 'Personal Umbrella Insurance: When Do You Need $1M?',
    desc: 'Why middle-class homeowners and parents of teen drivers need an umbrella policy. Learn how $1M to $5M in excess liability protects your home equity and wages.'
  },
  'guide-pet-insurance-buying-guide.html': {
    title: 'Pet Insurance Guide: Accident, Illness & Wellness',
    desc: 'Is pet insurance worth it? Compare accident vs illness plans, 70% to 90% reimbursement rates, annual deductibles, and pre-existing condition waiting periods.'
  },
  'guide-renters-insurance-bundling-hack.html': {
    title: 'Renters Insurance Bundling Hack: Save on Auto Rates',
    desc: 'How to use multi-policy bundling math to lower your car insurance bill. Discover how adding cheap $12/mo renters insurance puts cash back in your pocket.'
  },
  'guide-rideshare-uber-lyft-delivery-insurance.html': {
    title: 'Rideshare & Delivery Insurance (Uber, Lyft, DoorDash)',
    desc: 'Discover how the rideshare insurance 3-period gap leaves gig drivers unprotected, why standard auto policies deny claims, and how to get endorsements.'
  },
  'guide-small-business-cyber-insurance-ransomware.html': {
    title: 'Small Business Cyber Insurance & Ransomware (2026)',
    desc: 'Small business cyber insurance checklist. Learn what first-party ransomware and wire fraud riders cover, why CGL denies cyber claims, and mandatory MFA rules.'
  },
  'guide-sr22-insurance-filing-costs.html': {
    title: 'SR-22 Insurance Filing, Costs & License Recovery',
    desc: 'Need an SR-22 certificate after a DUI or license suspension? Learn what it costs, filing fees vs rate surcharges, non-owner policies, and how to clear it.'
  },
  'guide-telematics-usage-based-insurance.html': {
    title: 'Telematics Car Insurance: Is Tracking Worth It?',
    desc: 'Is usage-based car insurance worth it? Compare Progressive Snapshot, State Farm Drive Safe, GEICO DriveEasy, surcharges, and privacy trade-offs.'
  },
  'guide-term-vs-whole-life-insurance.html': {
    title: 'Term vs. Whole Life Insurance: Why Term Wins',
    desc: 'Compare term life vs whole life insurance. Learn why financial advisors recommend buying cheap term life ($35/mo) and investing the difference in index funds.'
  },
  'guide-uninsured-underinsured-motorist-coverage.html': {
    title: 'Uninsured Motorist (UM/UIM) Coverage Limit Rules',
    desc: 'Over 14% of US drivers have zero car insurance. Learn how UM/UIM protects your health and wallet, how stacked limits work, and why minimums leave you exposed.'
  },
  'guide-water-backup-vs-flood-insurance.html': {
    title: 'Water Backup vs. Flood Insurance: $30,000 Gap',
    desc: 'Standard home insurance excludes both groundwater flooding and sewer drain backup. Learn the difference between FEMA flood insurance and a $50 water backup rider.'
  },
  'guide-what-to-do-after-car-accident.html': {
    title: 'What to Do After a Car Accident: 10-Step Checklist',
    desc: 'A step-by-step checklist of what to do right after a car accident. Learn what evidence to collect, what never to say to insurance adjusters, and protect claims.'
  },
  'guide-why-home-insurance-rates-increase.html': {
    title: 'Why Did My Home Insurance Rate Go Up? (2026)',
    desc: 'Did your homeowners insurance jump 20% to 35% with zero claims? Discover why premiums are spiking, how Inflation Guard works, and how to lower renewals.'
  },

  // Utilities
  'about.html': {
    title: 'About PolicyGuide USA | Independent P&C Research',
    desc: 'Learn about PolicyGuide USA\'s mission, actuarial benchmark methodologies, and independent editorial team delivering transparent insurance intelligence.'
  },
  'contact.html': {
    title: 'Contact PolicyGuide USA | Support & Inquiries',
    desc: 'Get in touch with the PolicyGuide USA editorial and research team. Submit insurance inquiries, actuarial methodology questions, or general support requests.'
  },
  'editorial-standards.html': {
    title: 'Editorial Standards & Fact-Checking | PolicyGuide',
    desc: 'Review PolicyGuide USA\'s rigorous editorial standards, actuarial data auditing processes, independent methodology, and non-commissioned review policies.'
  },
  'privacy.html': {
    title: 'Privacy Policy | PolicyGuide USA',
    desc: 'PolicyGuide USA privacy policy. Learn how we handle consumer data, our strict no-broker data selling commitment, cookie policies, and data rights.'
  },
  'terms.html': {
    title: 'Terms of Service | PolicyGuide USA',
    desc: 'PolicyGuide USA terms of service. Review our informational disclaimers, consumer use guidelines, intellectual property rules, and limitation of liability.'
  },
  'disclaimer.html': {
    title: 'Legal Disclaimer & Regulatory Disclosures',
    desc: 'Read PolicyGuide USA\'s legal disclosures, state DOI regulatory compliance notices, nominative fair use disclaimers, and consumer research notices.'
  },
  'article.html': {
    title: 'Insurance Guides & Articles Hub | PolicyGuide',
    desc: 'Read expert insurance articles, actuarial rate guides, policy limit tutorials, and consumer defense playbooks from PolicyGuide USA analysts.'
  }
};

// Schemas to inject for missing pages
const calculatorSchemaDefs = {
  'calculator-boat.html': {
    name: 'Boat & Watercraft Insurance Calculator',
    url: 'https://policyguideusa.com/calculator-boat',
    description: 'Calculate marine and watercraft insurance premiums based on hull length, horsepower, vessel value, and liability limits.'
  },
  'calculator-business.html': {
    name: 'Business Insurance Cost Estimator',
    url: 'https://policyguideusa.com/calculator-business',
    description: 'Estimate commercial business insurance costs for general liability, BOP, and commercial property based on annual revenue and payroll.'
  },
  'calculator-compliance-audit.html': {
    name: 'State Insurance Compliance Audit Checklist',
    url: 'https://policyguideusa.com/calculator-compliance-audit',
    description: 'Verify auto and property insurance policy limits against 50-state statutory requirements and avoid non-compliance penalties.'
  },
  'calculator-deductible.html': {
    name: 'Insurance Deductible Break-Even Simulator',
    url: 'https://policyguideusa.com/calculator-deductible',
    description: 'Calculate break-even payback timelines when choosing between $500, $1,000, and $2,500 auto and home insurance deductibles.'
  },
  'calculator-discounts.html': {
    name: 'Insurance Discount Matcher Quiz',
    url: 'https://policyguideusa.com/calculator-discounts',
    description: 'Find applicable multi-policy, telematics, safety feature, and loyalty discounts to reduce annual insurance costs.'
  },
  'calculator-health.html': {
    name: 'Health Insurance Premium Estimator',
    url: 'https://policyguideusa.com/calculator-health',
    description: 'Estimate ACA benchmark health premiums, deductible trade-offs, and out-of-pocket costs across Bronze, Silver, and Gold tiers.'
  },
  'calculator-pet.html': {
    name: 'Pet Insurance Premium Estimator',
    url: 'https://policyguideusa.com/calculator-pet',
    description: 'Calculate veterinary insurance costs for dogs and cats based on breed risk factors, pet age, and reimbursement tiers.'
  },
  'calculator-renters.html': {
    name: 'Renters Insurance Cost Estimator',
    url: 'https://policyguideusa.com/calculator-renters',
    description: 'Estimate tenant insurance costs based on personal property replacement value, liability coverage, and deductibles.'
  },
  'calculator-rv.html': {
    name: 'RV & Motorhome Insurance Calculator',
    url: 'https://policyguideusa.com/calculator-rv',
    description: 'Estimate motorhome (Class A/B/C) and travel trailer insurance rates, including full-timer endorsements and campsite liability.'
  },
  'calculator-travel.html': {
    name: 'Travel Insurance Premium Estimator',
    url: 'https://policyguideusa.com/calculator-travel',
    description: 'Calculate trip cancellation, emergency medical evacuation, and CFAR travel insurance costs for domestic and international trips.'
  },
  'calculator-underinsured.html': {
    name: 'Liability Underinsured Limit Advisor',
    url: 'https://policyguideusa.com/calculator-underinsured',
    description: 'Assess liability lawsuit exposure and calculate recommended umbrella, auto, and home liability coverage limits.'
  },
  'calculator-vehicle-rate.html': {
    name: 'Vehicle Type & Driver Age Rate Estimator',
    url: 'https://policyguideusa.com/calculator-vehicle-rate',
    description: 'Estimate car insurance benchmarks based on vehicle category (sedan, SUV, truck, EV) and driver age brackets.'
  }
};

let filesUpdated = 0;
let schemaInjected = 0;

for (const [file, meta] of Object.entries(seoMap)) {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Update Title Tag
  const titleRegex = /<title>[^<]+<\/title>/i;
  if (titleRegex.test(content)) {
    content = content.replace(titleRegex, `<title>${meta.title}</title>`);
    changed = true;
  }

  // 2. Update Meta Description
  const descRegex1 = /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i;
  const descRegex2 = /<meta\s+content=["'][^"']*["']\s+name=["']description["']/i;
  if (descRegex1.test(content)) {
    content = content.replace(descRegex1, `<meta name="description" content="${meta.desc}"`);
    changed = true;
  } else if (descRegex2.test(content)) {
    content = content.replace(descRegex2, `<meta name="description" content="${meta.desc}"`);
    changed = true;
  }

  // 3. Update Open Graph Title & Description
  content = content.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i, `<meta property="og:title" content="${meta.title}"`);
  content = content.replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i, `<meta property="og:description" content="${meta.desc}"`);

  // 4. Update Twitter Title & Description
  content = content.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']/i, `<meta name="twitter:title" content="${meta.title}"`);
  content = content.replace(/<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']/i, `<meta name="twitter:description" content="${meta.desc}"`);

  // 5. Inject WebApplication Schema for calculators if missing
  if (calculatorSchemaDefs[file] && !content.includes('application/ld+json')) {
    const calcInfo = calculatorSchemaDefs[file];
    const schemaBlock = `
  <!-- WebApplication Schema for Google Rich Snippets -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "${calcInfo.name}",
    "url": "${calcInfo.url}",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "${calcInfo.description}",
    "publisher": {
      "@type": "Organization",
      "name": "PolicyGuide USA",
      "url": "https://policyguideusa.com",
      "logo": "https://policyguideusa.com/assets/images/policyguide-logo.svg"
    }
  }
  </script>`;
    content = content.replace('</head>', `${schemaBlock}\n</head>`);
    changed = true;
    schemaInjected++;
  }

  // 6. Inject WebPage schema for utility pages if missing
  if (['editorial-standards.html', 'privacy.html', 'terms.html', 'article.html'].includes(file) && !content.includes('application/ld+json')) {
    const pageUrl = `https://policyguideusa.com/${file.replace('.html', '')}`;
    const pageType = file === 'editorial-standards.html' ? 'AboutPage' : (file === 'article.html' ? 'CollectionPage' : 'WebPage');
    const schemaBlock = `
  <!-- Structured Schema for Google E-E-A-T -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "${pageType}",
    "name": "${meta.title}",
    "url": "${pageUrl}",
    "description": "${meta.desc}",
    "publisher": {
      "@type": "Organization",
      "name": "PolicyGuide USA",
      "url": "https://policyguideusa.com",
      "logo": "https://policyguideusa.com/assets/images/policyguide-logo.svg"
    }
  }
  </script>`;
    content = content.replace('</head>', `${schemaBlock}\n</head>`);
    changed = true;
    schemaInjected++;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesUpdated++;
  }
}

console.log(`\n🎉 Completed SEO Optimization!`);
console.log(`Updated Meta & Titles for: ${filesUpdated} pages`);
console.log(`Injected Structured Schema for: ${schemaInjected} pages`);
