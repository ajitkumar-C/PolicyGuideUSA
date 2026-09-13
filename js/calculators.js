/**
 * PolicyGuide US - Interactive Consumer Calculators
 * 1. Coverage Limit & Umbrella Advisor
 * 2. Deductible Savings Break-Even Simulator
 * 3. 2-Minute Discount Matcher Quiz
 */

const Calculators = {
  // 1. Coverage Advisor
  evaluateCoverage: function(homeStatus, netWorth, vehicles, highRiskFactors) {
    let recommendedTier = 'Standard Protection (100/300/100)';
    let biPerPerson = '$100,000';
    let biPerAccident = '$300,000';
    let propDamage = '$100,000';
    let umbrellaNeeded = false;
    let umbrellaAmount = '$0';
    let reasons = [];

    const netWorthNum = parseInt(netWorth, 10) || 100000;

    if (netWorthNum < 75000 && homeStatus === 'rent') {
      recommendedTier = 'Essential Protection (50/100/50)';
      biPerPerson = '$50,000';
      biPerAccident = '$100,000';
      propDamage = '$50,000';
      reasons.push('State minimums (like 25/50/25) are dangerously low, as the average new car costs $48,000. 50/100/50 protects your income without high premiums.');
    } else if (netWorthNum >= 75000 && netWorthNum < 500000) {
      recommendedTier = 'Recommended Homeowner Tier (100/300/100)';
      biPerPerson = '$100,000';
      biPerAccident = '$300,000';
      propDamage = '$100,000';
      reasons.push('Owning a home or having savings makes you a target for lawsuits following a severe at-fault accident.');
      reasons.push('100/300/100 is the benchmark required by most carriers before you can purchase an umbrella policy.');
    } else {
      recommendedTier = 'Asset Shield Tier (250/500/250 + Umbrella)';
      biPerPerson = '$250,000';
      biPerAccident = '$500,000';
      propDamage = '$250,000';
      umbrellaNeeded = true;
      umbrellaAmount = netWorthNum > 1500000 ? '$2,000,000' : '$1,000,000';
      reasons.push(`With assets over $500,000, your personal savings, home equity, and future retirement accounts are vulnerable to excess judgments.`);
      reasons.push(`A ${umbrellaAmount} Personal Umbrella Policy costs only ~$180-$280/year and provides total peace of mind.`);
    }

    if (vehicles > 2 || highRiskFactors) {
      reasons.push('Multiple household drivers increase annual exposure. Maintain at least $100k property damage coverage.');
    }

    return {
      tier: recommendedTier,
      bodilyInjuryPerson: biPerPerson,
      bodilyInjuryAccident: biPerAccident,
      propertyDamage: propDamage,
      umbrellaNeeded: umbrellaNeeded,
      umbrellaAmount: umbrellaAmount,
      reasons: reasons
    };
  },

  // 2. Deductible Simulator
  calculateDeductibleSavings: function(currentDeductible, targetDeductible, annualCollisionCompCost) {
    const curr = parseInt(currentDeductible, 10);
    const target = parseInt(targetDeductible, 10);
    const premium = parseFloat(annualCollisionCompCost) || 900;

    if (target <= curr) {
      return { error: 'Target deductible must be higher than current deductible to calculate savings.' };
    }

    // Typical industry actuarial curve for comprehensive/collision deductible changes
    let discountPct = 0;
    if (curr === 250 && target === 500) discountPct = 0.12;
    else if (curr === 250 && target === 1000) discountPct = 0.24;
    else if (curr === 250 && target === 1500) discountPct = 0.32;
    else if (curr === 500 && target === 1000) discountPct = 0.14;
    else if (curr === 500 && target === 1500) discountPct = 0.22;
    else if (curr === 1000 && target === 1500) discountPct = 0.10;
    else discountPct = 0.15;

    const annualSavings = Math.round(premium * discountPct);
    const monthlySavings = Math.round(annualSavings / 12);
    const outOfPocketGap = target - curr;
    const breakEvenMonths = Math.ceil((outOfPocketGap / annualSavings) * 12);

    return {
      annualSavings: annualSavings,
      monthlySavings: monthlySavings,
      outOfPocketGap: outOfPocketGap,
      breakEvenMonths: breakEvenMonths,
      threeYearNetSavings: (annualSavings * 3) - outOfPocketGap,
      verdict: breakEvenMonths <= 24 
        ? 'Strongly Recommended: Break-even is under 2 years. Put the savings into an emergency buffer.' 
        : 'Moderate Benefit: Ensure you have an immediate cash buffer to cover the out-of-pocket gap in an accident.'
    };
  },

  // 3. Discount Matcher
  calculateDiscounts: function(answers) {
    let totalDiscountPercent = 0;
    let eligibleDiscounts = [];

    if (answers.multiPolicy) {
      totalDiscountPercent += 16;
      eligibleDiscounts.push({ name: 'Home & Auto Multi-Policy Bundle', saving: 'Up to 20%', desc: 'Save on both your auto and home/renters policy when bundled under one insurer.' });
    }
    if (answers.multiCar) {
      totalDiscountPercent += 12;
      eligibleDiscounts.push({ name: 'Multi-Vehicle Discount', saving: 'Up to 15%', desc: 'Insuring two or more vehicles on the same policy unlocks instant rate tier drops.' });
    }
    if (answers.paperless) {
      totalDiscountPercent += 4;
      eligibleDiscounts.push({ name: 'Paperless & Auto-Pay (EFT)', saving: '$50 - $100/yr', desc: 'Eliminates billing installment fees and awards continuous paperless discounts.' });
    }
    if (answers.telematics) {
      totalDiscountPercent += 18;
      eligibleDiscounts.push({ name: 'Safe Driver Telematics (Snapshot / Drive Safe & Save)', saving: '15% - 30%', desc: 'Enroll in mobile app driving tracking. Low-mileage and non-nighttime drivers save the most.' });
    }
    if (answers.goodStudent) {
      totalDiscountPercent += 10;
      eligibleDiscounts.push({ name: 'Good Student (B Average or Higher)', saving: '10% - 15%', desc: 'High school or college students under 25 maintaining a 3.0+ GPA qualify for youth rate relief.' });
    }
    if (answers.defensiveDriver) {
      totalDiscountPercent += 8;
      eligibleDiscounts.push({ name: 'Approved Defensive Driving Course', saving: '5% - 10%', desc: 'Complete a state-approved online safety course (valid for 3 years of savings).' });
    }
    if (answers.antiTheft) {
      totalDiscountPercent += 5;
      eligibleDiscounts.push({ name: 'Anti-Theft & Telematics Tracking', saving: 'Up to 10% off Comp', desc: 'GPS recovery devices (LoJack, OnStar) reduce comprehensive vehicle theft premiums.' });
    }
    if (answers.homeSecurity) {
      totalDiscountPercent += 7;
      eligibleDiscounts.push({ name: 'Smart Home Security & Water Shut-Off', saving: '5% - 12% off Home', desc: 'Monitored fire/burglary alarms or automatic main water leak sensors.' });
    }

    // Cap total realistic stacking discount
    const cappedPercent = Math.min(totalDiscountPercent, 42);

    return {
      discountPercent: cappedPercent,
      qualifyingCount: eligibleDiscounts.length,
      discounts: eligibleDiscounts,
      estimatedYearlySavings: Math.round(1800 * (cappedPercent / 100))
    };
  },

  // 4. Vehicle & Driver Age Rate Estimator (2026 Actuarial Model)
  evaluateVehicleAgeRate: function(vehicleClass, ageGroup, annualMileage, drivingRecord, coverageTier) {
    const baseRate = 1750;

    const vehicleMultipliers = {
      'sedan': 1.0,
      'suv': 0.94,
      'truck': 1.06,
      'ev': 1.28,
      'luxury': 1.45
    };

    const ageMultipliers = {
      'young': 1.95,
      'prime': 1.0,
      'mature': 0.88,
      'senior': 1.12
    };

    const mileageMultipliers = {
      'low': 0.90,
      'average': 1.0,
      'high': 1.14
    };

    const recordMultipliers = {
      'clean': 1.0,
      'ticket': 1.22,
      'accident': 1.44,
      'lapse': 1.28
    };

    const coverageMultipliers = {
      'minimum': 0.58,
      'standard': 1.0,
      'full': 1.38
    };

    const vFactor = vehicleMultipliers[vehicleClass] || 1.0;
    const aFactor = ageMultipliers[ageGroup] || 1.0;
    const mFactor = mileageMultipliers[annualMileage] || 1.0;
    const rFactor = recordMultipliers[drivingRecord] || 1.0;
    const cFactor = coverageMultipliers[coverageTier] || 1.0;

    const estimatedAnnual = Math.round(baseRate * vFactor * aFactor * mFactor * rFactor * cFactor);
    const estimatedMonthly = Math.round(estimatedAnnual / 12);

    const carriers = [
      {
        name: 'GEICO',
        monthly: Math.round(estimatedMonthly * (drivingRecord === 'clean' ? 0.92 : 1.05)),
        tag: ageGroup === 'young' ? 'Best Direct Mobile Rates' : 'Lowest Baseline Commuter',
        amBest: 'A++',
        highlight: 'Top digital discounts & automated claims'
      },
      {
        name: 'Progressive',
        monthly: Math.round(estimatedMonthly * (drivingRecord !== 'clean' ? 0.93 : 0.98)),
        tag: drivingRecord !== 'clean' ? 'Top Choice with Ticket/Accident' : 'Snapshot App Discounts (Up to 30%)',
        amBest: 'A+',
        highlight: 'Forgiving underwriting with Name Your Price'
      },
      {
        name: 'State Farm',
        monthly: Math.round(estimatedMonthly * (ageGroup === 'mature' || ageGroup === 'senior' ? 0.89 : 1.02)),
        tag: 'Highest Customer Satisfaction',
        amBest: 'A++',
        highlight: 'Top local agent claim network & multi-policy'
      },
      {
        name: 'Allstate',
        monthly: Math.round(estimatedMonthly * 1.04),
        tag: 'Drivewise Safe Driver Cash Back',
        amBest: 'A+',
        highlight: 'Claim satisfaction guarantee & rewards'
      }
    ];

    const bestCarrier = carriers.reduce((prev, curr) => curr.monthly < prev.monthly ? curr : prev);

    let keyDriver = '';
    if (ageGroup === 'young') {
      keyDriver = 'Drivers aged 16-24 carry elevated risk baselines due to collision statistics. Adding good student or defensive driving discounts saves up to $450/yr.';
    } else if (vehicleClass === 'ev') {
      keyDriver = 'Electric vehicles average 28% higher collision repair costs due to battery pack containment and specialized sensor calibration.';
    } else if (drivingRecord !== 'clean') {
      keyDriver = 'Moving violations or at-fault claims surcharge rates for typically 36 months before rolling off your motor vehicle record (MVR).';
    } else {
      keyDriver = 'Your preferred driver profile qualifies for top-tier rate categories across all major US carriers.';
    }

    return {
      estimatedAnnual,
      estimatedMonthly,
      carriers,
      bestCarrier,
      keyDriver
    };
  }
};
