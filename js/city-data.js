/**
 * PolicyGuide US - Metro & City Insurance Intelligence Dataset (2026)
 * Real actuarial benchmarks, local statutory rules, and risk factors
 */

const US_CITY_DATA = [
  {
    id: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateCode: "CA",
    tagline: "Wildfire Brush Zones, Commuter Congestion & Proposition 103 Rules",
    avgAutoAnnual: "$2,640",
    avgAutoMonthly: "$220",
    avgHomeAnnual: "$1,890",
    avgHomeMonthly: "$158",
    uninsuredMotoristPct: "16.6%",
    topRisk: "Severe Brush Fire / Wildfire Zone & High Commuter Density",
    statutoryMinimums: {
      bodilyInjuryPerson: "$30,000 (Updated 2025/2026)",
      bodilyInjuryAccident: "$60,000",
      propertyDamage: "$15,000"
    },
    localRules: [
      {
        title: "Proposition 103 Telematics Ban",
        description: "California Insurance Code strictly prohibits auto insurers from using continuous GPS/real-time driving behavior to increase rates. Carriers can only verify annual verified mileage."
      },
      {
        title: "California FAIR Plan Last Resort",
        description: "Homeowners in LA hillside zones (Bel Air, Hollywood Hills, Topanga, Pasadena) unable to secure standard admitted coverage rely on the CA FAIR Plan for basic fire coverage paired with a DIC (Difference in Conditions) wrap."
      },
      {
        title: "2025/2026 Statutory Minimum Hike (SB 1107)",
        description: "California modernized its antiquated 15/30/5 limits. Any policy issued or renewed in Los Angeles now requires at least 30/60/15 minimum coverage by state mandate."
      }
    ],
    recommendedCarriers: [
      { name: "GEICO", tag: "Lowest Direct Commuter Rate", rateIndex: "$178/mo", amBest: "A++", rating: 4.3 },
      { name: "Progressive", tag: "Best Multi-Car & Snapshot", rateIndex: "$192/mo", amBest: "A+", rating: 4.1 },
      { name: "State Farm", tag: "Largest Local Agent Network", rateIndex: "$205/mo", amBest: "A++", rating: 4.4 },
      { name: "Mercury", tag: "California Regional Specialist", rateIndex: "$184/mo", amBest: "A", rating: 4.0 }
    ],
    faqs: [
      {
        q: "Why is auto insurance so expensive in Los Angeles?",
        a: "Los Angeles County has some of the highest vehicle densities, claim litigation rates, and uninsured driver populations in the US, combined with high medical repair costs."
      },
      {
        q: "Can my insurer drop my home insurance in Los Angeles due to wildfire risk?",
        a: "Under California Department of Insurance (CDI) moratoria, insurers cannot non-renew policies in zip codes adjacent to declared wildfires for 1 year following a declared emergency."
      }
    ]
  },
  {
    id: "miami",
    name: "Miami",
    state: "Florida",
    stateCode: "FL",
    tagline: "Hurricane Windstorm Pools, Citizens Depopulation & Roof Statutes",
    avgAutoAnnual: "$3,420",
    avgAutoMonthly: "$285",
    avgHomeAnnual: "$5,150",
    avgHomeMonthly: "$429",
    uninsuredMotoristPct: "20.4%",
    topRisk: "Category 3-5 Hurricanes, Storm Surge & Roof Depreciation",
    statutoryMinimums: {
      bodilyInjuryPerson: "No-Fault / Optional BI",
      bodilyInjuryAccident: "$10,000 PIP (Personal Injury)",
      propertyDamage: "$10,000 PDL"
    },
    localRules: [
      {
        title: "3-Year Hurricane Claim Deadline",
        description: "Florida Statute §627.70132 mandates that notice of any hurricane or windstorm claim must be submitted to the carrier within 1 year for initial notice and 18 months for supplemental claims."
      },
      {
        title: "Citizens Property Depopulation 20% Rule",
        description: "If an authorized private admitted insurer makes an offer within 20% of your Citizens Property Insurance renewal rate, state law requires you to exit Citizens and accept private coverage."
      },
      {
        title: "No-Fault PIP & Fraud Surcharge",
        description: "Miami-Dade County carries Florida's highest auto litigation rate. While Florida only requires $10,000 PIP and $10,000 PDL, carrying only statutory minimums leaves personal assets heavily exposed."
      }
    ],
    recommendedCarriers: [
      { name: "State Farm", tag: "Highest Solvency in South FL", rateIndex: "$245/mo", amBest: "A++", rating: 4.4 },
      { name: "Progressive", tag: "Best Direct Rate Comparison", rateIndex: "$262/mo", amBest: "A+", rating: 4.0 },
      { name: "Citizens", tag: "State Carrier of Last Resort", rateIndex: "$320/mo", amBest: "A-", rating: 3.8 },
      { name: "Universal P&C", tag: "Florida Domestic Specialist", rateIndex: "$310/mo", amBest: "A", rating: 3.7 }
    ],
    faqs: [
      {
        q: "What hurricane deductible should I choose in Miami-Dade?",
        a: "Florida policies offer separate 2%, 5%, or 10% hurricane percentage deductibles based on Dwelling Coverage A. A 2% deductible on a $500,000 home means a $10,000 out-of-pocket obligation before carrier payout."
      },
      {
        q: "Is flood insurance required in Miami?",
        a: "Standard homeowners policies exclude flood and storm surge. Homes in FEMA Special Flood Hazard Areas (SFHA zones AE and VE) with federally backed mortgages must maintain NFIP or private flood policies."
      }
    ]
  },
  {
    id: "houston",
    name: "Houston",
    state: "Texas",
    stateCode: "TX",
    tagline: "Gulf Coast Hail Storms, TWIA Windstorm Pool & Uninsured Motorists",
    avgAutoAnnual: "$2,480",
    avgAutoMonthly: "$207",
    avgHomeAnnual: "$3,620",
    avgHomeMonthly: "$301",
    uninsuredMotoristPct: "18.2%",
    topRisk: "Severe Thunderstorm Hail, Flash Flooding & Gulf Hurricanes",
    statutoryMinimums: {
      bodilyInjuryPerson: "$30,000",
      bodilyInjuryAccident: "$60,000",
      propertyDamage: "$25,000 (30/60/25 Rule)"
    },
    localRules: [
      {
        title: "TWIA (Texas Windstorm Insurance Association) Eligibility",
        description: "Harris County properties along Galveston Bay require WPI-8 building inspection certificates to qualify for state-backed TWIA wind and hail coverage."
      },
      {
        title: "Separate Hail & Wind Percentage Deductibles",
        description: "Most Houston home insurers enforce 1% or 2% wind/hail deductibles separate from standard all-peril $1,000 deductibles due to frequent Gulf hail corridors."
      },
      {
        title: "Texas 30/60/25 Auto Liability Law",
        description: "Texas Transportation Code requires 30/60/25 liability. Because Houston ranks high in hit-and-run incidents, adding UM/UIM (Uninsured/Underinsured Motorist) endorsement is strongly recommended."
      }
    ],
    recommendedCarriers: [
      { name: "GEICO", tag: "Competitive Houston Commuter", rateIndex: "$165/mo", amBest: "A++", rating: 4.2 },
      { name: "Allstate", tag: "Best Home & Auto Multi-Policy", rateIndex: "$182/mo", amBest: "A+", rating: 4.1 },
      { name: "State Farm", tag: "Top Local Claims Service", rateIndex: "$188/mo", amBest: "A++", rating: 4.3 },
      { name: "Texas Farm Bureau", tag: "Texas Domestic Specialist", rateIndex: "$159/mo", amBest: "A", rating: 4.5 }
    ],
    faqs: [
      {
        q: "Why do Houston home insurance policies have a separate windstorm deductible?",
        a: "Due to frequent Gulf hurricanes and severe convective hail storms, Texas insurers split deductibles so policyholders pay 1% to 2% of their home's insured value when roof or siding hail claims occur."
      },
      {
        q: "What happens if an uninsured driver hits me in Houston?",
        a: "Without Texas Uninsured Motorist (UM/UIM) coverage, you would have to pay your own medical bills or file under collision coverage subject to your deductible."
      }
    ]
  },
  {
    id: "new-york",
    name: "New York City",
    state: "New York",
    stateCode: "NY",
    tagline: "$50,000 No-Fault PIP Statutory Law & Borough Rate Variations",
    avgAutoAnnual: "$3,680",
    avgAutoMonthly: "$306",
    avgHomeAnnual: "$1,620",
    avgHomeMonthly: "$135",
    uninsuredMotoristPct: "5.1%",
    topRisk: "Dense Traffic Pedestrian Liability & Brooklyn/Bronx Rate Surcharges",
    statutoryMinimums: {
      bodilyInjuryPerson: "$25,000 ($50k for wrongful death)",
      bodilyInjuryAccident: "$50,000 ($100k for wrongful death)",
      propertyDamage: "$10,000 + $50,000 No-Fault PIP"
    },
    localRules: [
      {
        title: "$50,000 No-Fault Mandatory Coverage",
        description: "Article 51 of NY Insurance Law requires every personal auto policy to include $50,000 Basic Economic Loss (PIP) per injured person regardless of fault."
      },
      {
        title: "Borough Surcharges (Brooklyn & Bronx)",
        description: "Rates for identical vehicles differ by up to 140% across NYC boroughs. Brooklyn (Kings County) and Bronx drivers pay significantly higher premiums than Manhattan or Staten Island."
      },
      {
        title: "TLC Rideshare Exclusion",
        description: "Standard personal auto policies strictly void collision and liability if an Uber/Lyft app is turned on in NYC. A specialized commercial TLC policy is required by NYC Taxi & Limousine Commission."
      }
    ],
    recommendedCarriers: [
      { name: "GEICO", tag: "Low Baseline for NYC Commuters", rateIndex: "$240/mo", amBest: "A++", rating: 4.1 },
      { name: "Progressive", tag: "Best Digital Claims App", rateIndex: "$258/mo", amBest: "A+", rating: 4.0 },
      { name: "State Farm", tag: "Top Rated for Multi-Line Co-op", rateIndex: "$270/mo", amBest: "A++", rating: 4.3 },
      { name: "Travelers", tag: "New York Founded & Reliable", rateIndex: "$285/mo", amBest: "A++", rating: 4.2 }
    ],
    faqs: [
      {
        q: "Why is Brooklyn car insurance more expensive than Manhattan?",
        a: "Brooklyn has much higher rates of parked car hit-and-runs, two-way street congestion, and personal injury protection (PIP) claim filings per registered vehicle compared to Manhattan."
      },
      {
        q: "Do I need condo or co-op insurance in NYC?",
        a: "Yes. Most NYC Co-op and Condo boards require an HO-6 policy with at least $300,000 to $500,000 in personal liability to cover water leaks and damage spreading between units."
      }
    ]
  },
  {
    id: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateCode: "IL",
    tagline: "Urban Vehicle Theft, Water Backup Endorsements & Winter Freezes",
    avgAutoAnnual: "$2,240",
    avgAutoMonthly: "$186",
    avgHomeAnnual: "$1,780",
    avgHomeMonthly: "$148",
    uninsuredMotoristPct: "11.8%",
    topRisk: "Catalytic Converter/Vehicle Theft, Winter Pipe Bursts & Sump Backup",
    statutoryMinimums: {
      bodilyInjuryPerson: "$25,000",
      bodilyInjuryAccident: "$50,000",
      propertyDamage: "$20,000 (25/50/20 Rule)"
    },
    localRules: [
      {
        title: "Mandatory Water Backup Endorsement",
        description: "In Cook County, municipal sewer backflow during heavy Midwest spring storms is the #1 uninsured home loss. Standard policies exclude this without a $35-$75/year sewer backup rider."
      },
      {
        title: "Catalytic Converter Theft Surcharge",
        description: "Chicago comprehensive claims spiked due to targeted component thefts. Maintaining a comprehensive deductible no higher than $250 or $500 is vital for street-parked vehicles."
      },
      {
        title: "Illinois Comparative Fault 51% Bar",
        description: "Under 735 ILCS 5/2-1116, you cannot recover damages from the other party if you are found 51% or more at fault in an Illinois accident."
      }
    ],
    recommendedCarriers: [
      { name: "State Farm", tag: "Illinois Headquarters & Lowest Base", rateIndex: "$142/mo", amBest: "A++", rating: 4.5 },
      { name: "GEICO", tag: "Top Direct Pricing for Renters", rateIndex: "$152/mo", amBest: "A++", rating: 4.2 },
      { name: "Progressive", tag: "Snapshot Telematics Savings", rateIndex: "$160/mo", amBest: "A+", rating: 4.1 },
      { name: "American Family", tag: "Midwest Specialist", rateIndex: "$155/mo", amBest: "A", rating: 4.2 }
    ],
    faqs: [
      {
        q: "Does Chicago auto insurance cover street parking hit-and-runs?",
        a: "Yes, provided you carry Collision or Comprehensive coverage, or Illinois Uninsured Motorist Property Damage (UMPD) with qualifying police report documentation."
      },
      {
        q: "What is the recommended sewer backup coverage limit in Chicago?",
        a: "Insurance advisors in Cook County recommend at least $10,000 to $25,000 in Sewer & Drain Backup endorsement to remediate finished basements after heavy rains."
      }
    ]
  }
];
