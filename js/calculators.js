/**
 * PolicyGuide US - Comprehensive Insurance Calculators Suite (2026 Edition)
 * Covers:
 * 1. Auto Insurance Calculator
 * 2. Home Insurance Calculator
 * 3. Renters Insurance Calculator
 * 4. Health Insurance Calculator
 * 5. Life Insurance Calculator
 * 6. Business Insurance Calculator
 * 7. Travel Insurance Calculator
 * 8. Pet Insurance Calculator
 * 9. RV Insurance Calculator
 * 10. Boat Insurance Calculator
 * + Specialized Advisory Tools:
 * 11. "Am I Underinsured?" Coverage Limit & Umbrella Advisor
 * 12. Deductible Savings Break-Even Simulator
 * 13. The 2-Minute Discount Matcher Quiz
 * 14. Vehicle Type & Driver Age Rate Estimator
 * 15. State Compliance & Annual Policy Audit Checklist
 */

const Calculators = {
  // 1. AUTO INSURANCE CALCULATOR
  calculateAuto: function(params) {
    const baseAnnual = 1650;
    const vType = params.vehicleType || 'sedan';
    const age = parseInt(params.driverAge, 10) || 35;
    const record = params.drivingRecord || 'clean';
    const coverage = params.coverageTier || 'standard';
    const deductible = parseInt(params.deductible, 10) || 1000;
    const mileage = parseInt(params.mileage, 10) || 12000;

    // Multipliers
    let vFactor = 1.0;
    if (vType === 'suv') vFactor = 1.05;
    else if (vType === 'truck') vFactor = 1.12;
    else if (vType === 'sports') vFactor = 1.45;
    else if (vType === 'ev') vFactor = 1.22;

    let ageFactor = 1.0;
    if (age < 21) ageFactor = 2.15;
    else if (age < 25) ageFactor = 1.60;
    else if (age < 30) ageFactor = 1.20;
    else if (age > 65) ageFactor = 1.15;

    let recFactor = 1.0;
    if (record === 'ticket') recFactor = 1.22;
    else if (record === 'accident') recFactor = 1.44;
    else if (record === 'lapse') recFactor = 1.28;

    let covFactor = 1.0;
    if (coverage === 'minimum') covFactor = 0.62;
    else if (coverage === 'full') covFactor = 1.35;
    else if (coverage === 'premium') covFactor = 1.55;

    let dedFactor = 1.0;
    if (deductible <= 250) dedFactor = 1.14;
    else if (deductible === 500) dedFactor = 1.06;
    else if (deductible >= 1500) dedFactor = 0.92;

    let mileFactor = 1.0;
    if (mileage < 7500) mileFactor = 0.90;
    else if (mileage > 15000) mileFactor = 1.15;

    const annual = Math.round(baseAnnual * vFactor * ageFactor * recFactor * covFactor * dedFactor * mileFactor);
    const monthly = Math.round(annual / 12);
    const rangeMin = Math.round(annual * 0.86);
    const rangeMax = Math.round(annual * 1.16);

    const drivers = [];
    if (age < 25) drivers.push('Drivers under 25 pay higher base premiums due to nationwide collision frequency statistics.');
    if (record !== 'clean') drivers.push('Prior violations or at-fault claims surcharge policies for up to 36 months.');
    if (vType === 'ev') drivers.push('EVs cost ~22% more to repair due to specialized sensors and high-voltage battery casing.');
    if (deductible <= 500) drivers.push('Low $250–$500 deductibles raise premiums significantly compared to a $1,000 threshold.');
    if (drivers.length === 0) drivers.push('Clean driving history and standard commuter mileage place you in a preferred discount tier.');

    const tips = [
      'Enroll in a telematics app (GEICO DriveEasy or Progressive Snapshot) for up to 25% savings.',
      'Raising your deductible from $500 to $1,000 typically reduces collision premiums by 12% to 15%.',
      'Bundle auto with homeowners or renters insurance for a 10% to 20% multi-policy discount.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 2. HOME INSURANCE CALCULATOR
  calculateHome: function(params) {
    const baseAnnual = 2200;
    const rebuildCost = parseInt(params.rebuildCost, 10) || 350000;
    const roofAge = params.roofAge || '6to15';
    const stormRisk = params.stormRisk || 'medium';
    const deductible = parseInt(params.deductible, 10) || 1000;
    const security = params.security || 'standard';

    let rebuildFactor = rebuildCost / 350000;
    let roofFactor = roofAge === 'under5' ? 0.90 : (roofAge === '16to25' ? 1.18 : (roofAge === '26plus' ? 1.35 : 1.0));
    let stormFactor = stormRisk === 'low' ? 0.85 : (stormRisk === 'high' ? 1.30 : (stormRisk === 'veryhigh' ? 1.55 : 1.0));
    let dedFactor = deductible <= 500 ? 1.15 : (deductible >= 2500 ? 0.90 : 1.0);
    let secFactor = security === 'alarm' ? 0.94 : (security === 'smart' ? 0.88 : 1.0);

    const annual = Math.round(baseAnnual * rebuildFactor * roofFactor * stormFactor * dedFactor * secFactor);
    const monthly = Math.round(annual / 12);
    const rangeMin = Math.round(annual * 0.85);
    const rangeMax = Math.round(annual * 1.18);

    const drivers = [];
    if (roofAge === '26plus' || roofAge === '16to25') drivers.push('Roofs over 15 years old face higher wind/hail surcharges or actual cash value restrictions.');
    if (stormRisk === 'high' || stormRisk === 'veryhigh') drivers.push('Coastal or catastrophe-prone zones carry mandatory separate hurricane or wildfire deductibles.');
    if (rebuildCost > 500000) drivers.push('High replacement cost reflects elevated local labor and building material costs.');
    if (drivers.length === 0) drivers.push('Standard single-family suburban home with moderate weather risk profile.');

    const tips = [
      'Document roof replacement or wind-mitigation inspections to unlock up to 25% statutory discounts.',
      'Install automatic water shutoff sensors to prevent plumbing leaks (the #1 non-weather home claim).',
      'Ensure your dwelling coverage equals current reconstruction cost, not volatile real estate market value.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 3. RENTERS INSURANCE CALCULATOR
  calculateRenters: function(params) {
    const baseAnnual = 210;
    const contentsVal = parseInt(params.contentsValue, 10) || 30000;
    const liabilityLimit = parseInt(params.liabilityLimit, 10) || 100000;
    const deductible = parseInt(params.deductible, 10) || 500;
    const replacementCost = !!params.replacementCost;

    let contentsFactor = contentsVal / 30000;
    let liabFactor = liabilityLimit >= 300000 ? 1.08 : 1.0;
    let dedFactor = deductible <= 250 ? 1.12 : (deductible >= 1000 ? 0.92 : 1.0);
    let rcFactor = replacementCost ? 1.08 : 0.95;

    const annual = Math.round(baseAnnual * contentsFactor * liabFactor * dedFactor * rcFactor);
    const monthly = Math.round(annual / 12);
    const rangeMin = Math.round(annual * 0.88);
    const rangeMax = Math.round(annual * 1.15);

    const drivers = [
      `Personal property limit of $${contentsVal.toLocaleString()} covers all electronics, clothing, and furniture.`,
      `Includes $${liabilityLimit.toLocaleString()} in personal liability protection against guest injury lawsuits.`
    ];

    const tips = [
      'Choose "Replacement Cost" over "Actual Cash Value" so insurer pays to buy new items after a fire or theft.',
      'Bundling renters with your car insurance often saves enough on auto to make renters insurance virtually free.',
      'Keep a digital video inventory of your apartment on Google Drive or iCloud for effortless claim proof.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 4. HEALTH INSURANCE CALCULATOR
  calculateHealth: function(params) {
    const baseMonthly = 580;
    const age = parseInt(params.applicantAge, 10) || 38;
    const household = params.householdSize || 'one';
    const metalTier = params.metalTier || 'silver';
    const subsidy = params.subsidyLevel || 'none';

    let ageFactor = age < 25 ? 0.75 : (age < 35 ? 0.85 : (age < 50 ? 1.15 : 1.65));
    let hhFactor = household === 'two' ? 1.85 : (household === 'family' ? 2.55 : 1.0);
    let metalFactor = metalTier === 'bronze' ? 0.78 : (metalTier === 'gold' ? 1.25 : (metalTier === 'platinum' ? 1.45 : 1.0));
    let subMultiplier = subsidy === 'high' ? 0.35 : (subsidy === 'moderate' ? 0.60 : (subsidy === 'low' ? 0.80 : 1.0));

    const monthly = Math.round(baseMonthly * ageFactor * hhFactor * metalFactor * subMultiplier);
    const annual = monthly * 12;
    const rangeMin = Math.round(monthly * 0.88);
    const rangeMax = Math.round(monthly * 1.18);

    const drivers = [
      `${metalTier.toUpperCase()} tier offers balanced cost sharing and out-of-pocket maximum caps.`,
      `Applicant age of ${age} utilizes standard ACA 3:1 age band actuarial curves.`,
      subsidy !== 'none' ? `Assumes active ACA Advance Premium Tax Credit (APTC) reduction.` : `Represents full unsubsidized benchmark premium.`
    ];

    const tips = [
      'If your income qualifies, Silver plans unlock extra Cost-Sharing Reductions (CSRs) that slash deductibles to near $0.',
      'Pair a qualified High-Deductible Bronze plan with a Health Savings Account (HSA) for triple tax deductions.',
      'Check in-network doctors and prescription formulary tiers before locking in your carrier.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 5. LIFE INSURANCE CALCULATOR
  calculateLife: function(params) {
    const deathBenefit = parseInt(params.coverageAmount, 10) || 500000;
    const termYears = parseInt(params.termLength, 10) || 20;
    const age = parseInt(params.age, 10) || 35;
    const tobacco = params.tobacco === 'yes';
    const policyType = params.policyType || 'term';

    let baseRatePerThousand = 0.75;
    let ageMultiplier = age < 30 ? 0.65 : (age < 40 ? 0.95 : (age < 50 ? 1.65 : (age < 60 ? 3.10 : 5.50)));
    let tobaccoMultiplier = tobacco ? 2.45 : 1.0;
    let typeMultiplier = policyType === 'whole' ? 5.2 : 1.0;
    let termMultiplier = termYears === 10 ? 0.80 : (termYears === 30 ? 1.35 : 1.0);

    const annual = Math.round((deathBenefit / 1000) * baseRatePerThousand * ageMultiplier * tobaccoMultiplier * typeMultiplier * termMultiplier);
    const monthly = Math.max(15, Math.round(annual / 12));
    const rangeMin = Math.round(monthly * 0.85);
    const rangeMax = Math.round(monthly * 1.25);

    const drivers = [
      `A $${deathBenefit.toLocaleString()} ${termYears}-year level term locks in this fixed monthly rate until policy end.`,
      tobacco ? 'Nicotine / tobacco use more than doubles standard mortality premium rates.' : 'Non-tobacco preferred rate class applied.',
      policyType === 'whole' ? 'Permanent whole life insurance builds cash value but costs 5x-7x more than term.' : 'Term life provides maximum financial protection per premium dollar.'
    ];

    const tips = [
      'Use the DIME method: calculate Debt + Income (10x annual) + Mortgage + Education to find exact coverage needs.',
      'Lock in 20 or 30-year term coverage while young and healthy; rates never increase during the level term period.',
      'Avoid high fees of whole life unless you have a high-net-worth estate tax planning need.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 6. BUSINESS INSURANCE CALCULATOR
  calculateBusiness: function(params) {
    const baseAnnual = 1800;
    const industry = params.industry || 'retail';
    const revenue = parseInt(params.revenue, 10) || 400000;
    const employees = parseInt(params.employees, 10) || 4;
    const hasProperty = !!params.hasProperty;
    const hasWorkersComp = !!params.hasWorkersComp;

    let indFactor = industry === 'office' ? 0.72 : (industry === 'contractor' ? 1.55 : (industry === 'restaurant' ? 1.38 : 1.0));
    let revFactor = revenue < 200000 ? 0.85 : (revenue > 1000000 ? 1.45 : 1.0);
    let empFactor = 1.0 + (employees * 0.04);
    let addonFactor = (hasProperty ? 1.22 : 1.0) * (hasWorkersComp ? 1.30 : 1.0);

    const annual = Math.round(baseAnnual * indFactor * revFactor * empFactor * addonFactor);
    const monthly = Math.round(annual / 12);
    const rangeMin = Math.round(annual * 0.84);
    const rangeMax = Math.round(annual * 1.22);

    const drivers = [
      `Industry risk profile for ${industry.toUpperCase()} sets baseline slip-and-fall and operational liability.`,
      `Includes $1,000,000 / $2,000,000 commercial General Liability coverage benchmark.`,
      employees > 0 ? `Scales for ${employees} employees and associated payroll liability.` : `Sole proprietorship single-operator rate baseline.`
    ];

    const tips = [
      'Purchase a Business Owner Policy (BOP) combining General Liability and Property for ~20% bundled savings.',
      'Implement written safety protocols and employee handbooks to qualify for preferred commercial underwriting tiers.',
      'Review your payroll estimates annually with your carrier to avoid unexpected workers comp audit penalties.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 7. TRAVEL INSURANCE CALCULATOR
  calculateTravel: function(params) {
    const tripCost = parseInt(params.tripCost, 10) || 4500;
    const travelers = parseInt(params.travelers, 10) || 2;
    const age = parseInt(params.age, 10) || 40;
    const international = params.destination === 'international';
    const cfar = !!params.cfar; // Cancel For Any Reason

    let ratePct = 0.055; // 5.5% base of trip cost
    if (age > 65) ratePct += 0.025;
    if (international) ratePct += 0.015;
    if (cfar) ratePct += 0.035;

    const totalCost = Math.round(tripCost * ratePct);
    const monthly = totalCost; // One-time premium
    const rangeMin = Math.round(totalCost * 0.88);
    const rangeMax = Math.round(totalCost * 1.20);

    const drivers = [
      `Total insurable non-refundable trip investment: $${tripCost.toLocaleString()} for ${travelers} traveler(s).`,
      international ? 'International medical evacuation and hospital emergency coverage included.' : 'Domestic travel cancellation and delay coverage.',
      cfar ? 'Cancel For Any Reason (CFAR) rider adds 75% reimbursement for voluntary cancellations.' : 'Standard covered-perils cancellation (illness, weather, bereavement).'
    ];

    const tips = [
      'Standard US health insurance (and Medicare) rarely covers overseas medical care; travel medical is essential abroad.',
      'Purchase your policy within 14 days of your initial trip deposit to qualify for pre-existing condition waivers.',
      'Check if your credit card already includes secondary baggage and flight delay coverage before paying extra.'
    ];

    return { annual: totalCost, monthly: totalCost, rangeMin, rangeMax, drivers, tips, isOneTime: true };
  },

  // 8. PET INSURANCE CALCULATOR
  calculatePet: function(params) {
    const petType = params.petType || 'dog';
    const age = parseInt(params.petAge, 10) || 3;
    const breedRisk = params.breedRisk || 'average';
    const annualLimit = params.annualLimit || '10k';
    const reimbursement = parseInt(params.reimbursement, 10) || 80;

    let base = petType === 'cat' ? 32 : 52;
    let ageMultiplier = 1.0 + (age * 0.08);
    let breedMultiplier = breedRisk === 'high' ? 1.35 : (breedRisk === 'low' ? 0.88 : 1.0);
    let limitMultiplier = annualLimit === 'unlimited' ? 1.30 : (annualLimit === '5k' ? 0.85 : 1.0);
    let reimbMultiplier = reimbursement === 90 ? 1.15 : (reimbursement === 70 ? 0.88 : 1.0);

    const monthly = Math.round(base * ageMultiplier * breedMultiplier * limitMultiplier * reimbMultiplier);
    const annual = monthly * 12;
    const rangeMin = Math.round(monthly * 0.85);
    const rangeMax = Math.round(monthly * 1.22);

    const drivers = [
      `${petType.toUpperCase()} aged ${age} years old in ${breedRisk} veterinary risk class.`,
      `Reimburses ${reimbursement}% of covered vet fees after deductible up to $${annualLimit === 'unlimited' ? 'Unlimited' : annualLimit} annual cap.`,
      'Covers accidents, unexpected illnesses, surgeries, prescription medications, and diagnostics.'
    ];

    const tips = [
      'Enroll your pet as early as possible before any chronic health issues are documented as pre-existing.',
      'A $500 annual deductible with 80% reimbursement offers the best balance between premium and emergency protection.',
      'Routine wellness exams and vaccines are cheaper paid out-of-pocket than buying pricey wellness add-ons.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 9. RV INSURANCE CALCULATOR
  calculateRV: function(params) {
    const baseAnnual = 1550;
    const rvType = params.rvType || 'travel';
    const rvValue = parseInt(params.rvValue, 10) || 65000;
    const isFullTimer = !!params.isFullTimer;
    const storage = params.storage || 'driveway';

    let typeFactor = rvType === 'classa' ? 1.45 : (rvType === 'classc' ? 1.22 : (rvType === 'fifth' ? 0.90 : 0.72));
    let valFactor = rvValue / 65000;
    let fullTimerFactor = isFullTimer ? 1.55 : 1.0;
    let storageFactor = storage === 'indoor' ? 0.88 : (storage === 'street' ? 1.15 : 1.0);

    const annual = Math.round(baseAnnual * typeFactor * valFactor * fullTimerFactor * storageFactor);
    const monthly = Math.round(annual / 12);
    const rangeMin = Math.round(annual * 0.86);
    const rangeMax = Math.round(annual * 1.18);

    const drivers = [
      `${rvType.toUpperCase()} valuation of $${rvValue.toLocaleString()} with comprehensive & collision protection.`,
      isFullTimer ? 'Full-timer endorsement adds homeowner-style personal liability and contents coverage.' : 'Recreational seasonal use profile.',
      `Stored in ${storage} setting affecting weather and theft loss probability.`
    ];

    const tips = [
      'If you live in your RV 6+ months a year, standard RV insurance will deny claims—you MUST have a Full-Timer policy.',
      'Add emergency roadside assistance specifically configured for heavy dual-axle RV towing.',
      'Winterize and store your RV indoors or in a fenced facility to earn storage discounts during off-seasons.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 10. BOAT INSURANCE CALCULATOR
  calculateBoat: function(params) {
    const baseAnnual = 920;
    const boatType = params.boatType || 'bowrider';
    const boatValue = parseInt(params.boatValue, 10) || 45000;
    const waters = params.waters || 'inland';
    const safetyCourse = !!params.safetyCourse;

    let typeFactor = boatType === 'yacht' ? 1.70 : (boatType === 'performance' ? 1.50 : (boatType === 'small' ? 0.75 : 1.0));
    let valFactor = boatValue / 45000;
    let waterFactor = waters === 'coastal' ? 1.15 : (waters === 'offshore' ? 1.35 : 0.90);
    let safetyDiscount = safetyCourse ? 0.90 : 1.0;

    const annual = Math.round(baseAnnual * typeFactor * valFactor * waterFactor * safetyDiscount);
    const monthly = Math.round(annual / 12);
    const rangeMin = Math.round(annual * 0.85);
    const rangeMax = Math.round(annual * 1.20);

    const drivers = [
      `Agreed Hull Value of $${boatValue.toLocaleString()} with marine collision and theft coverage.`,
      `Operated in ${waters} waterways with associated grounding and weather loss baselines.`,
      safetyCourse ? '10% discount applied for verified Boater Safety Education certification.' : 'Standard boater rating tier.'
    ];

    const tips = [
      'Ensure policy includes fuel spill liability and wreckage removal ($500k+ recommended by marine law).',
      'Complete a state-approved online Boating Safety Course (e.g. BoatUS) for lifetime 10% premium reductions.',
      'Check navigational limits in your policy to verify coverage boundaries during long-distance coastal cruises.'
    ];

    return { annual, monthly, rangeMin, rangeMax, drivers, tips };
  },

  // 11. SPECIALIZED: "Am I Underinsured?" Coverage Limit & Umbrella Advisor
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
      reasons.push('State minimums (e.g. 25/50/25) leave you exposed, as average new car repair is $48,000+. 50/100/50 protects your income without high premiums.');
    } else if (netWorthNum >= 75000 && netWorthNum < 500000) {
      recommendedTier = 'Recommended Homeowner Tier (100/300/100)';
      biPerPerson = '$100,000';
      biPerAccident = '$300,000';
      propDamage = '$100,000';
      reasons.push('Owning a home or having savings makes you a target for lawsuits following a severe at-fault accident.');
      reasons.push('100/300/100 is the minimum threshold required before an insurer will sell you an umbrella policy.');
    } else {
      recommendedTier = 'Asset Shield Tier (250/500/250 + Umbrella)';
      biPerPerson = '$250,000';
      biPerAccident = '$500,000';
      propDamage = '$250,000';
      umbrellaNeeded = true;
      umbrellaAmount = netWorthNum > 1500000 ? '$2,000,000' : '$1,000,000';
      reasons.push(`With assets over $500,000, your personal savings, home equity, and retirement are vulnerable to excess judgments.`);
      reasons.push(`A ${umbrellaAmount} Personal Umbrella Policy costs only ~$180–$280/year and provides comprehensive peace of mind.`);
    }

    if (vehicles > 2 || highRiskFactors) {
      reasons.push('Multiple household drivers or youthful motorists elevate exposure. Always maintain at least $100k property damage coverage.');
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

  // 12. SPECIALIZED: Deductible Savings Break-Even Simulator
  calculateDeductibleSavings: function(currentDeductible, targetDeductible, annualCollisionCompCost) {
    const curr = parseInt(currentDeductible, 10);
    const target = parseInt(targetDeductible, 10);
    const premium = parseFloat(annualCollisionCompCost) || 900;

    if (target <= curr) {
      return { error: 'Target deductible must be higher than your current deductible to calculate savings.' };
    }

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

  // 13. SPECIALIZED: The 2-Minute Discount Matcher Quiz
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
      eligibleDiscounts.push({ name: 'Safe Driver Telematics (Snapshot / Drive Safe & Save)', saving: '15% - 30%', desc: 'Enroll in mobile app driving tracking. Low-mileage and safe drivers save the most.' });
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

    const cappedPercent = Math.min(totalDiscountPercent, 42);

    return {
      discountPercent: cappedPercent,
      qualifyingCount: eligibleDiscounts.length,
      discounts: eligibleDiscounts,
      estimatedYearlySavings: Math.round(1800 * (cappedPercent / 100))
    };
  },

  // 14. SPECIALIZED: Vehicle Type & Driver Age Rate Estimator
  evaluateVehicleAgeRate: function(vehicleClass, ageGroup, annualMileage, drivingRecord, coverageTier) {
    const baseRate = 1750;

    const vehicleMultipliers = { 'sedan': 1.0, 'suv': 0.94, 'truck': 1.06, 'ev': 1.28, 'luxury': 1.45 };
    const ageMultipliers = { 'young': 1.95, 'prime': 1.0, 'mature': 0.88, 'senior': 1.12 };
    const mileageMultipliers = { 'low': 0.90, 'average': 1.0, 'high': 1.14 };
    const recordMultipliers = { 'clean': 1.0, 'ticket': 1.22, 'accident': 1.44, 'lapse': 1.28 };
    const coverageMultipliers = { 'minimum': 0.58, 'standard': 1.0, 'full': 1.38 };

    const vFactor = vehicleMultipliers[vehicleClass] || 1.0;
    const aFactor = ageMultipliers[ageGroup] || 1.0;
    const mFactor = mileageMultipliers[annualMileage] || 1.0;
    const rFactor = recordMultipliers[drivingRecord] || 1.0;
    const cFactor = coverageMultipliers[coverageTier] || 1.0;

    const estimatedAnnual = Math.round(baseRate * vFactor * aFactor * mFactor * rFactor * cFactor);
    const estimatedMonthly = Math.round(estimatedAnnual / 12);

    const carriers = [
      { name: 'GEICO', monthly: Math.round(estimatedMonthly * (drivingRecord === 'clean' ? 0.92 : 1.05)), amBest: 'A++', highlight: 'Top digital discounts & automated claims' },
      { name: 'Progressive', monthly: Math.round(estimatedMonthly * (drivingRecord !== 'clean' ? 0.93 : 0.98)), amBest: 'A+', highlight: 'Snapshot App Discounts & Name Your Price' },
      { name: 'State Farm', monthly: Math.round(estimatedMonthly * (ageGroup === 'mature' || ageGroup === 'senior' ? 0.89 : 1.02)), amBest: 'A++', highlight: 'Premier local agent network & bundling' },
      { name: 'Allstate', monthly: Math.round(estimatedMonthly * 1.04), amBest: 'A+', highlight: 'Drivewise Safe Driver Cash Back rewards' }
    ];

    const bestCarrier = carriers.reduce((prev, curr) => curr.monthly < prev.monthly ? curr : prev);

    let keyDriver = '';
    if (ageGroup === 'young') keyDriver = 'Drivers aged 16-24 carry higher risk baselines due to collision stats. Good student or defensive driving discounts save up to $450/yr.';
    else if (vehicleClass === 'ev') keyDriver = 'Electric vehicles average 28% higher collision repair costs due to battery pack containment and specialized sensor calibration.';
    else if (drivingRecord !== 'clean') keyDriver = 'Moving violations or at-fault claims surcharge rates for ~36 months before rolling off your motor vehicle record (MVR).';
    else keyDriver = 'Your preferred driver profile qualifies for top-tier rate categories across all major US carriers.';

    return { estimatedAnnual, estimatedMonthly, carriers, bestCarrier, keyDriver };
  }
};

// Export to window
window.Calculators = Calculators;
