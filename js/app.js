/**
 * PolicyGuide US - Main Application Logic
 * Interactive Carrier Filtering, Logos, Zip Routing, Calculators, Modals, and Blog Hub
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initZipLookup();
  initCarrierMatrix();
  initCalculators();
  initLeadModal();
  initMobileMenu();
  initBlog();
});

// 1. Theme Management (Dark / Light)
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('policyguide_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('policyguide_theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// 2. Zip Code Geo-Resolver with Address Intelligence
function initZipLookup() {
  const zipInput = document.getElementById('zip-input');
  const zipBtn = document.getElementById('zip-btn');
  const stateResult = document.getElementById('zip-result');

  // Attach real-time autocomplete dropdown & live USPS validation
  if (zipInput && window.AddressIntelligence) {
    window.AddressIntelligence.attachAutocomplete(zipInput, {
      autoSubmit: false,
      onSelect: () => {
        performLookup();
      }
    });
  }

  function performLookup() {
    const val = (zipInput ? zipInput.value.trim() : '');
    if (!val) {
      alert('Please enter a 5-digit US ZIP Code (e.g. 90210, 33109, 75001).');
      if (zipInput) zipInput.focus();
      return;
    }

    // Strict validation against official US postal database
    if (window.AddressIntelligence && window.AddressIntelligence.isReady) {
      const valResult = window.AddressIntelligence.validateZipInput(val);
      if (!valResult.isValid) {
        if (stateResult) {
          stateResult.innerHTML = `
            <div class="alert alert-warning" style="background: rgba(239, 68, 68, 0.08); border: 1px solid var(--color-danger); padding: 1.25rem; border-radius: var(--radius-sm); margin-top: 1rem; text-align: left;">
              <div style="display:flex; align-items:center; gap:0.5rem; color: var(--color-danger); font-weight:700; font-size:1.05rem;">
                <span>⚠️</span> Invalid US ZIP Code: "${val}"
              </div>
              <p style="margin: 0.5rem 0 0.25rem; color: var(--color-text-main); font-size: 0.92rem;">
                "${val}" was not found in the official database of 33,000+ US postal ZIP codes.
              </p>
              <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.5rem;">
                💡 <strong>Try:</strong> Start typing digits (e.g. <code>900</code>, <code>331</code>, <code>750</code>) and select your exact city or neighborhood from the autocomplete suggestions.
              </div>
            </div>
          `;
          stateResult.classList.remove('hidden');
        }
        if (zipInput) {
          zipInput.classList.remove('is-valid-zip');
          zipInput.classList.add('is-invalid-zip');
          zipInput.focus();
        }
        return;
      }
    }

    const state = resolveZipToState(val);
    if (!state) {
      if (stateResult) {
        stateResult.innerHTML = `
          <div class="alert alert-warning" style="background: rgba(245, 158, 11, 0.1); border: 1px solid var(--color-warning); padding: 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
            <strong>ZIP Code Not Found:</strong> We couldn't match "${val}" directly. Please select your state from our 50-State Guide below.
          </div>
        `;
        stateResult.classList.remove('hidden');
      }
      return;
    }

    renderStateSnapshot(state, val);
  }

  if (zipBtn) zipBtn.addEventListener('click', performLookup);
  if (zipInput) {
    zipInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performLookup();
    });
  }
}

function renderStateSnapshot(state, zip) {
  const container = document.getElementById('zip-result');
  if (!container) return;

  const topCarriersHtml = state.topCarriers.map(cName => {
    const cObj = US_CARRIERS_DATA.find(c => c.name.toLowerCase() === cName.toLowerCase()) || {
      name: cName,
      logoSvg: `<div style="background:#1E293B; color:#FFF; padding:6px 12px; border-radius:6px; font-weight:bold;">${cName}</div>`,
      tagline: 'Top Rated in ' + state.name,
      avgAnnualAuto: state.avgAnnualAuto,
      quoteUrl: '#',
      agentPhone: '1-800-555-0199'
    };
    return `
      <div class="carrier-mini-card">
        <div class="carrier-mini-logo">
          ${cObj.logoSvg}
        </div>
        <div class="mini-header">
          <strong>${cObj.name}</strong>
          <span class="badge badge-success">Top Pick</span>
        </div>
        <div class="mini-rate">Est. $${cObj.avgAnnualAuto}/yr</div>
        <div class="mini-actions">
          <button class="btn btn-primary btn-sm open-quote-modal" data-carrier="${cObj.name}" data-state="${state.code}" data-zip="${zip}">
            Get Quote
          </button>
          <a href="tel:${cObj.agentPhone}" class="btn btn-outline btn-sm">📞 Call</a>
        </div>
      </div>
    `;
  }).join('');

  const locationSubheader = state.matchedCity 
    ? `(${state.matchedCity}, ${state.matchedCounty} County &bull; ZIP: ${zip})`
    : `(ZIP: ${zip})`;

  container.innerHTML = `
    <div class="state-snapshot-card animate-fade-in">
      <div class="snapshot-header">
        <div>
          <span class="badge badge-primary">${state.code} Coverage Hub</span>
          <h3 style="margin-top: 0.35rem;">${state.name} Rates & Requirements ${locationSubheader}</h3>
        </div>
        <a href="state-guide.html?state=${state.code}" class="link-arrow" style="font-weight: 700;">Full ${state.name} Legal Guide &rarr;</a>
      </div>
      <div class="snapshot-grid">
        <div class="stat-pill">
          <span class="stat-label">Minimum Legal Limits</span>
          <span class="stat-val highlight">${state.minLiability}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fault System</span>
          <span class="stat-val">${state.faultSystem}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Avg Auto Rate</span>
          <span class="stat-val">$${state.avgAnnualAuto}/yr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Avg Home Rate</span>
          <span class="stat-val">$${state.avgAnnualHome}/yr</span>
        </div>
      </div>
      <div class="snapshot-tip">
        <strong>💡 ${state.name} Consumer Advisory:</strong> ${state.keyTip}
      </div>
      <div class="snapshot-carriers">
        <h4 style="margin-bottom: 0.75rem;">Top Recommended Insurers in ${state.name}:</h4>
        <div class="mini-carrier-grid">
          ${topCarriersHtml}
        </div>
      </div>
    </div>
  `;
  container.classList.remove('hidden');
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  attachModalTriggers();
}

// 3. Top Carriers Comparison Grid with Official SVG Logos
function initCarrierMatrix() {
  const container = document.getElementById('carrier-matrix-container');
  if (!container) return;

  const filterBtns = document.querySelectorAll('.carrier-filter-btn');
  let currentFilter = 'all';

  function render(filter) {
    let list = [...US_CARRIERS_DATA];
    if (filter === 'telematics') {
      list = list.filter(c => c.telematics.surchargeRisk.startsWith('NO'));
    } else if (filter === 'bundle') {
      list = list.filter(c => c.linesOffered.includes('Homeowners (HO-3/HO-5)') || c.linesOffered.includes('Homeowners'));
    } else if (filter === 'low-rate') {
      list.sort((a, b) => a.avgAnnualAuto - b.avgAnnualAuto);
    }

    container.innerHTML = list.map(c => `
      <div class="carrier-card" id="carrier-${c.id}">
        <div class="carrier-card-header">
          <div class="carrier-brand-header">
            <div class="carrier-logo-wrapper" title="${c.name} Official Logo">
              ${c.logoSvg}
            </div>
            <div class="carrier-identity">
              <h3 class="carrier-name" style="margin-top: 0.25rem;">${c.name}</h3>
              <span class="carrier-tagline">${c.tagline}</span>
            </div>
          </div>
          <div class="carrier-rating-badge">
            <span class="stars">★★★★★</span>
            <span class="score">${c.jdPowerScore} / 5.0</span>
            <small class="am-best">AM Best: ${c.amBestRating}</small>
          </div>
        </div>

        <div class="carrier-key-stats">
          <div class="stat-box">
            <span class="lbl">Avg Auto Rate</span>
            <span class="val">$${c.avgAnnualAuto}<small>/yr</small></span>
          </div>
          <div class="stat-box">
            <span class="lbl">Avg Home Rate</span>
            <span class="val">$${c.avgAnnualHome}<small>/yr</small></span>
          </div>
          <div class="stat-box">
            <span class="lbl">Market Share</span>
            <span class="val">${c.marketShare.split(' ')[0]}</span>
          </div>
        </div>

        <div class="carrier-telematics-highlight">
          <strong>📱 ${c.telematics.name} App:</strong> ${c.telematics.maxDiscount}
          <div class="telematics-risk ${c.telematics.surchargeRisk.startsWith('YES') ? 'risk-yes' : 'risk-no'}">
            ${c.telematics.surchargeRisk}
          </div>
        </div>

        <div class="carrier-discounts-preview">
          <strong>Top Discounts:</strong>
          <div class="tag-cloud">
            ${c.popularDiscounts.slice(0, 4).map(d => `<span class="tag">${d}</span>`).join('')}
          </div>
        </div>

        <div class="carrier-card-footer">
          <button class="btn btn-primary open-quote-modal" data-carrier="${c.name}">
            Get ${c.name} Quote
          </button>
          <a href="carrier-comparison.html#${c.id}" class="btn btn-secondary">
            Full Review & Matchups
          </a>
          <a href="tel:${c.agentPhone}" class="btn btn-outline" title="Call Licensed Agent">
            📞 ${c.agentPhone}
          </a>
        </div>
      </div>
    `).join('');

    attachModalTriggers();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      render(currentFilter);
    });
  });

  render(currentFilter);
}

// 4. Interactive Calculator Handlers
function initCalculators() {
  // Calculator 1: Coverage Limits
  const calcCoverageBtn = document.getElementById('calc-coverage-btn');
  if (calcCoverageBtn) {
    calcCoverageBtn.addEventListener('click', () => {
      const homeStatus = document.getElementById('cov-home-status').value;
      const netWorth = document.getElementById('cov-net-worth').value;
      const vehicles = parseInt(document.getElementById('cov-vehicles').value, 10);
      const highRisk = document.getElementById('cov-risk').checked;

      const result = Calculators.evaluateCoverage(homeStatus, netWorth, vehicles, highRisk);
      const resultBox = document.getElementById('cov-result-box');

      resultBox.innerHTML = `
        <div class="calc-result-card animate-fade-in">
          <h4>Recommended Safe Coverage Tier:</h4>
          <div class="tier-title">${result.tier}</div>
          <div class="limits-breakdown">
            <div class="limit-item">
              <span class="limit-label">Bodily Injury (Per Person):</span>
              <span class="limit-val">${result.bodilyInjuryPerson}</span>
            </div>
            <div class="limit-item">
              <span class="limit-label">Bodily Injury (Per Accident):</span>
              <span class="limit-val">${result.bodilyInjuryAccident}</span>
            </div>
            <div class="limit-item">
              <span class="limit-label">Property Damage:</span>
              <span class="limit-val">${result.propertyDamage}</span>
            </div>
            ${result.umbrellaNeeded ? `
              <div class="limit-item umbrella-alert">
                <span class="limit-label">Personal Umbrella Policy (PUP):</span>
                <span class="limit-val">${result.umbrellaAmount} (Est. ~$180/yr)</span>
              </div>
            ` : ''}
          </div>
          <ul class="reasons-list">
            ${result.reasons.map(r => `<li>${r}</li>`).join('')}
          </ul>
          <button class="btn btn-primary open-quote-modal" data-tier="${result.tier}">
            Compare Quotes for ${result.tier}
          </button>
        </div>
      `;
      resultBox.classList.remove('hidden');
      attachModalTriggers();
    });
  }

  // Calculator 2: Deductible Break-even
  const calcDeductibleBtn = document.getElementById('calc-deductible-btn');
  if (calcDeductibleBtn) {
    calcDeductibleBtn.addEventListener('click', () => {
      const curr = document.getElementById('ded-curr').value;
      const target = document.getElementById('ded-target').value;
      const premium = document.getElementById('ded-premium').value;

      const res = Calculators.calculateDeductibleSavings(curr, target, premium);
      const resBox = document.getElementById('ded-result-box');

      if (res.error) {
        resBox.innerHTML = `<div class="alert alert-warning">${res.error}</div>`;
        resBox.classList.remove('hidden');
        return;
      }

      resBox.innerHTML = `
        <div class="calc-result-card animate-fade-in">
          <h4>Deductible Break-Even Analysis ($${curr} &rarr; $${target}):</h4>
          <div class="stat-row">
            <div class="stat-cell">
              <span class="stat-num">$${res.annualSavings}</span>
              <span class="stat-desc">Annual Savings</span>
            </div>
            <div class="stat-cell">
              <span class="stat-num">$${res.monthlySavings}</span>
              <span class="stat-desc">Monthly Savings</span>
            </div>
            <div class="stat-cell">
              <span class="stat-num">${res.breakEvenMonths} Mos</span>
              <span class="stat-desc">Break-Even Time</span>
            </div>
            <div class="stat-cell">
              <span class="stat-num">$${res.threeYearNetSavings}</span>
              <span class="stat-desc">3-Year Net Profit</span>
            </div>
          </div>
          <p class="verdict-text"><strong>Analysis:</strong> ${res.verdict}</p>
        </div>
      `;
      resBox.classList.remove('hidden');
    });
  }

  // Calculator 3: Discount Matcher Quiz
  const calcDiscountBtn = document.getElementById('calc-discount-btn');
  if (calcDiscountBtn) {
    calcDiscountBtn.addEventListener('click', () => {
      const answers = {
        multiPolicy: document.getElementById('disc-bundle').checked,
        multiCar: document.getElementById('disc-multicar').checked,
        paperless: document.getElementById('disc-paperless').checked,
        telematics: document.getElementById('disc-telematics').checked,
        goodStudent: document.getElementById('disc-student').checked,
        defensiveDriver: document.getElementById('disc-defense').checked,
        antiTheft: document.getElementById('disc-antitheft').checked,
        homeSecurity: document.getElementById('disc-security').checked
      };

      const res = Calculators.calculateDiscounts(answers);
      const resBox = document.getElementById('disc-result-box');

      resBox.innerHTML = `
        <div class="calc-result-card animate-fade-in">
          <h4>Your Unclaimed Discount Opportunities:</h4>
          <div class="tier-title" style="color: var(--color-success)">
            Up to ${res.discountPercent}% Off (Est. $${res.estimatedYearlySavings}/year in savings)
          </div>
          <p>You qualify for <strong>${res.qualifyingCount} verified discounts</strong>. Show this checklist to your insurance carrier:</p>
          <div class="discounts-checklist">
            ${res.discounts.map(d => `
              <div class="checklist-item">
                <div>
                  <strong>✓ ${d.name}</strong>
                  <div class="text-muted" style="font-size:0.8rem;">${d.desc}</div>
                </div>
                <span class="badge badge-success">${d.saving}</span>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 1.5rem;">
            <button class="btn btn-primary open-quote-modal">
              Apply These Discounts & Compare Quotes
            </button>
          </div>
        </div>
      `;
      resBox.classList.remove('hidden');
      attachModalTriggers();
    });
  }

  // Calculator 4: Vehicle Class & Driver Age Rate Estimator
  const calcRateEstimatorBtn = document.getElementById('calc-rate-estimator-btn');
  if (calcRateEstimatorBtn) {
    calcRateEstimatorBtn.addEventListener('click', () => {
      const vClass = document.getElementById('est-vehicle').value;
      const ageTier = document.getElementById('est-age').value;
      const mileage = document.getElementById('est-mileage').value;
      const record = document.getElementById('est-record').value;
      const cov = document.getElementById('est-coverage').value;

      const res = Calculators.evaluateVehicleAgeRate(vClass, ageTier, mileage, record, cov);
      const resBox = document.getElementById('est-result-box');

      resBox.innerHTML = `
        <div class="calc-result-card animate-fade-in" style="border-left: 4px solid var(--color-primary);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
            <div>
              <h4 style="margin-bottom: 0.25rem;">Custom Benchmark Rates for Your Profile</h4>
              <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0;">2026 National P&C Actuarial Model</p>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 1.6rem; font-weight: 800; color: #10B981;">$${res.estimatedMonthly}/mo</span>
              <span style="display: block; font-size: 0.78rem; color: var(--color-text-dim);">Est. Average ($${res.estimatedAnnual}/yr)</span>
            </div>
          </div>

          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; font-size: 0.88rem;">
            <strong>💡 Actuarial Risk Analysis:</strong> ${res.keyDriver}
          </div>

          <h5 style="margin-bottom: 0.75rem; font-size: 0.95rem;">Carrier Rate Breakdown:</h5>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
            ${res.carriers.map(c => `
              <div class="card" style="padding: 1rem; border: 1px solid ${c.name === res.bestCarrier.name ? '#10B981' : 'var(--color-border)'}; background: ${c.name === res.bestCarrier.name ? 'rgba(16, 185, 129, 0.08)' : 'var(--color-surface)'};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                  <strong>${c.name}</strong>
                  <span class="badge ${c.name === res.bestCarrier.name ? 'badge-success' : 'badge-primary'}" style="font-size: 0.65rem;">${c.amBest}</span>
                </div>
                <div style="font-size: 1.35rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.25rem;">$${c.monthly}<span style="font-size: 0.75rem; font-weight: 500; color: var(--color-text-dim);">/mo</span></div>
                <div style="font-size: 0.78rem; color: var(--color-accent); font-weight: 600; margin-bottom: 0.35rem;">${c.tag}</div>
                <div style="font-size: 0.75rem; color: var(--color-text-muted);">${c.highlight}</div>
              </div>
            `).join('')}
          </div>

          <button class="btn btn-primary open-quote-modal">
            Lock In Rate & Compare Quotes &rarr;
          </button>
        </div>
      `;
      resBox.classList.remove('hidden');
      attachModalTriggers();
    });
  }

  // Calculator 5: State Compliance & Audit Checklists
  const checklistTabs = document.querySelectorAll('#checklist-tabs button');
  const checklistContainer = document.getElementById('audit-checklist-items');
  const progressLabel = document.getElementById('audit-progress-label');
  const statusBadge = document.getElementById('audit-status-badge');
  const printBtn = document.getElementById('print-audit-btn');

  const AUDIT_DATA = {
    florida: [
      { id: 'fl_ded', label: 'Separate Hurricane Percentage Deductible Verified', desc: 'Ensure deductible is 2% of Dwelling Coverage A rather than 5% or 10% to prevent massive storm out-of-pocket costs.' },
      { id: 'fl_rcv', label: 'Roof Surface Covered at Replacement Cost (RCV)', desc: 'Confirm your policy pays full replacement cost rather than depreciated Actual Cash Value (ACV) for aging shingle/tile roofs.' },
      { id: 'fl_flood', label: 'Flood Policy Active (NFIP or Private Market)', desc: 'Mandatory under Florida law for all Citizens Property policyholders in flood hazard zones, recommended for all coastal zip codes.' },
      { id: 'fl_deadline', label: '1-Year Hurricane Claim Notice Requirement Noted', desc: 'Florida Statute §627.70132 mandates claims must be formally submitted to insurer within 1 year of named storm landfall.' },
      { id: 'fl_water', label: 'Water Damage Sub-Limit Uncapped (Min. $25k-$50k)', desc: 'Inspect policy endorsements to confirm non-weather interior plumbing leak coverage is not restricted to a $10,000 sublimit.' },
      { id: 'fl_windmit', label: 'Valid Wind Mitigation Inspection on File', desc: 'Roof deck attachment, hurricane clips, and secondary water barrier inspection credits yield up to $1,200/yr in statutory discounts.' }
    ],
    california: [
      { id: 'ca_limits', label: 'Policy Modernized to 30/60/15 Statutory Minimums', desc: 'SB 1107 raised California auto minimums from 15/30/5 to 30/60/15. Outdated limits leave personal wages vulnerable.' },
      { id: 'ca_brush', label: '100-Foot Defensible Space Zone Maintained', desc: 'Required by Cal Fire PRC 4291. Insurers actively use aerial imaging and satellite audits before issuing renewal notices.' },
      { id: 'ca_dic', label: 'Difference in Conditions (DIC) Policy Paired with FAIR Plan', desc: 'CA FAIR Plan only covers fire and smoke. A companion DIC policy is mandatory to insure against water, theft, and liability.' },
      { id: 'ca_mileage', label: 'Annual Verified Odometer Reading Submitted', desc: 'California Prop 103 requires carriers to rate by actual annual driving distance. Low-mileage verification unlocks up to 25% savings.' },
      { id: 'ca_nonrenewal', label: 'CDI 1-Year Wildfire Moratorium Protection Checked', desc: 'Check if your ZIP code is covered under the California Department of Insurance mandatory 1-year cancellation freeze.' },
      { id: 'ca_ev', label: 'OEM Parts Endorsement for EV / Tesla Drivers', desc: 'Ensure your collision policy does not mandate aftermarket parts that void electric vehicle battery or sensor warranties.' }
    ],
    national: [
      { id: 'us_liability', label: 'Bodily Injury Liability Equals Household Net Worth', desc: 'State minimums (25/50) are insufficient. Combined home equity, bank balances, and brokerage assets require at least 100/300/100 or 250/500/250.' },
      { id: 'us_um', label: 'Uninsured Motorist (UM/UIM) Matches Bodily Injury Limit', desc: '14% of US motorists drive uninsured. Carrying high liability without matching UM leaves you unprotected if hit by an uninsured driver.' },
      { id: 'us_emergency', label: 'Deductible Emergency Buffer Liquid and Available', desc: 'Never choose a $1,000 or $1,500 deductible without keeping that exact amount in an accessible high-yield savings buffer.' },
      { id: 'us_bundle', label: 'Multi-Line Bundle Discounts Applied Across Accounts', desc: 'Verify your auto and home/renters policies share the same carrier account to capture the standard 15%-22% package discount.' },
      { id: 'us_mvr', label: '36-Month Surcharge Review for Clean Records', desc: 'Moving violations and minor comprehensive claims roll off carrier surcharge rating models after 3 years. Re-quote immediately upon expiry.' },
      { id: 'us_umbrella', label: '$1 Million Personal Umbrella Policy Evaluated', desc: 'For households with assets exceeding $500,000 or teen drivers, an umbrella policy costs only ~$200/year for $1M in excess coverage.' }
    ]
  };

  function renderChecklist(auditType) {
    if (!checklistContainer) return;
    const items = AUDIT_DATA[auditType] || AUDIT_DATA.florida;

    checklistContainer.innerHTML = items.map(item => `
      <label class="checkbox-item" style="padding: 0.85rem 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); margin-bottom: 0.65rem;">
        <input type="checkbox" class="audit-item-chk" data-item-id="${item.id}">
        <div>
          <strong style="color: #FFFFFF; font-size: 0.95rem;">${item.label}</strong>
          <div style="font-size: 0.82rem; color: var(--color-text-muted); margin-top: 0.2rem;">${item.desc}</div>
        </div>
      </label>
    `).join('');

    updateChecklistProgress(items.length);

    checklistContainer.querySelectorAll('.audit-item-chk').forEach(chk => {
      chk.addEventListener('change', () => {
        updateChecklistProgress(items.length);
      });
    });
  }

  function updateChecklistProgress(total) {
    if (!checklistContainer || !progressLabel) return;
    const checked = checklistContainer.querySelectorAll('.audit-item-chk:checked').length;
    progressLabel.textContent = `Audit Progress: ${checked} / ${total} Verified (${Math.round((checked / total) * 100)}%)`;
    if (statusBadge) {
      if (checked === total) {
        statusBadge.textContent = '100% Compliant';
        statusBadge.className = 'badge badge-success';
      } else if (checked > 0) {
        statusBadge.textContent = 'In Progress';
        statusBadge.className = 'badge badge-warning';
      } else {
        statusBadge.textContent = 'Action Required';
        statusBadge.className = 'badge badge-primary';
      }
    }
  }

  if (checklistTabs.length > 0) {
    checklistTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        checklistTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderChecklist(btn.dataset.audit);
      });
    });
    renderChecklist('florida');
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// 5. Quote Lead Generation Modal (Simulating MediaAlpha / EverQuote Funnel)
function initLeadModal() {
  const modal = document.getElementById('quote-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const leadForm = document.getElementById('lead-quote-form');
  const modalZipInput = document.getElementById('modal-zip');

  // Attach autocomplete intelligence to modal zip input
  if (modalZipInput && window.AddressIntelligence) {
    window.AddressIntelligence.attachAutocomplete(modalZipInput);
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const zip = (modalZipInput ? modalZipInput.value : '90210').trim();
      const carrier = document.getElementById('modal-carrier-name').value || 'Top Rated Carriers';
      const coverageType = document.getElementById('modal-coverage-type').value;

      // Validate ZIP Code against 33,000+ US postal directory
      if (window.AddressIntelligence && window.AddressIntelligence.isReady) {
        const check = window.AddressIntelligence.validateZipInput(zip);
        if (!check.isValid) {
          alert(`⚠️ Invalid US ZIP Code: "${zip}".\nPlease enter a recognized 5-digit US ZIP code (e.g. 90210, 33109, 75001) or choose from the suggestions.`);
          if (modalZipInput) modalZipInput.focus();
          return;
        }
      }

      const state = resolveZipToState(zip) || {
        code: 'US',
        name: 'United States',
        minLiability: '25/50/25',
        faultSystem: 'At-Fault (Tort)',
        avgAnnualAuto: 1680,
        avgAnnualHome: 1530
      };

      const cObj = US_CARRIERS_DATA.find(c => c.name.toLowerCase() === carrier.toLowerCase()) || US_CARRIERS_DATA[0];
      const targetUrl = cObj ? cObj.quoteUrl : 'https://www.geico.com';
      const agentPhone = cObj ? cObj.agentPhone : '1-800-555-0199';

      const modalBody = document.getElementById('modal-dynamic-content');
      const locationLabel = state.matchedCity 
        ? `${state.matchedCity}, ${state.code}` 
        : state.name;

      modalBody.innerHTML = `
        <div class="quote-redirect-view animate-fade-in">
          <div class="loading-state" id="modal-loading-indicator">
            <div style="font-size:2.5rem; text-align:center; margin-bottom: 0.5rem;">🔎</div>
            <h3 style="text-align:center; margin: 0.25rem 0;">Analyzing ZIP ${zip}...</h3>
            <p style="text-align:center; color: var(--color-text-muted); font-size:0.9rem;">
              Matching 2026 ${coverageType} underwriting guidelines in <strong>${locationLabel}</strong>...
            </p>
            <div class="progress-bar-container" style="margin: 1.25rem 0;">
              <div class="progress-bar-fill"></div>
            </div>
            <small style="display:block; text-align:center; color:var(--color-text-dim);">Connecting to licensed DOI database...</small>
          </div>
          <div class="quote-result-card hidden animate-fade-in" id="modal-final-result"></div>
        </div>
      `;

      setTimeout(() => {
        const loadingIndicator = document.getElementById('modal-loading-indicator');
        const resultCard = document.getElementById('modal-final-result');
        if (loadingIndicator) loadingIndicator.classList.add('hidden');

        if (resultCard) {
          resultCard.innerHTML = `
            <div style="text-align:center; margin-bottom:1.1rem;">
              <div style="font-size:2.2rem; line-height:1; margin-bottom:0.35rem;">🎉</div>
              <h3 style="margin: 0.2rem 0; font-size:1.35rem; color:var(--color-text-main);">
                Rates Located for ${locationLabel} (${zip})
              </h3>
              <p style="font-size:0.88rem; color:var(--color-text-muted); margin-bottom:0;">
                Matched with <strong>${carrier}</strong> under active 2026 ${state.code} insurance filings.
              </p>
            </div>

            <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-sm); padding:0.95rem 1.15rem; margin-bottom:1.25rem;">
              <div style="display:flex; justify-content:space-between; margin-bottom:0.45rem; font-size:0.88rem;">
                <span style="color:var(--color-text-muted);">${state.name} Legal Minimum:</span>
                <strong style="color:var(--color-primary);">${state.minLiability}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:0.45rem; font-size:0.88rem;">
                <span style="color:var(--color-text-muted);">Est. ${carrier} Benchmark:</span>
                <strong>$${cObj.avgAnnualAuto}/yr <span style="font-weight:normal; color:var(--color-text-dim);">($${Math.round(cObj.avgAnnualAuto/12)}/mo)</span></strong>
              </div>
              <div style="display:flex; justify-content:space-between; font-size:0.88rem;">
                <span style="color:var(--color-text-muted);">AM Best Financial Grade:</span>
                <strong style="color:var(--color-success);">${cObj.amBestRating}</strong>
              </div>
            </div>

            <div style="text-align:center;">
              <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-success" style="width:100%; margin-bottom:0.75rem; font-size:1.05rem; padding:0.85rem;">
                Lock In Your ${carrier} Rate Online &rarr;
              </a>
              <div style="font-size:0.82rem; color:var(--color-text-muted); margin-bottom:0.5rem;">— OR SPEAK WITH A LICENSED STATE AGENT NOW —</div>
              <a href="tel:${agentPhone}" class="btn btn-outline" style="width:100%; font-size:0.95rem;">
                📞 Call Dedicated Line: ${agentPhone}
              </a>
              <small style="display:block; margin-top:0.75rem; font-size:0.72rem; color:var(--color-text-dim);">
                🔒 Zero obligation quote &bull; Direct Carrier DOI Registered &bull; No endless telemarketing calls
              </small>
            </div>
          `;
          resultCard.classList.remove('hidden');
        }
      }, 1100);
    });
  }
}

function attachModalTriggers() {
  const triggers = document.querySelectorAll('.open-quote-modal');
  const modal = document.getElementById('quote-modal');
  const carrierInput = document.getElementById('modal-carrier-name');
  const zipInput = document.getElementById('modal-zip');

  triggers.forEach(btn => {
    btn.onclick = () => {
      const carrier = btn.getAttribute('data-carrier') || 'All Major Carriers';
      const zip = btn.getAttribute('data-zip') || '';
      if (carrierInput) carrierInput.value = carrier;
      if (zipInput && zip) {
        zipInput.value = zip;
        zipInput.dispatchEvent(new Event('input', { bubbles: true }));
      }

      const titleEl = document.getElementById('modal-title');
      if (titleEl) titleEl.textContent = `Get Your Free ${carrier} Rate Comparison`;

      if (modal) modal.classList.remove('hidden');
    };
  });
}

// 6. 50+ SEO Blog Posts & Article Reader Logic
function initBlog() {
  const blogContainer = document.getElementById('blog-posts-container');
  const homeBlogContainer = document.getElementById('home-blog-container');
  const searchInput = document.getElementById('blog-search-input');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');

  // Render on blog.html
  if (blogContainer) {
    let currentCategory = 'all';

    function renderBlogPosts() {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
      let filtered = INSURANCE_BLOG_POSTS.filter(post => {
        const matchCat = currentCategory === 'all' || post.category === currentCategory;
        const matchQuery = post.title.toLowerCase().includes(query) || post.snippet.toLowerCase().includes(query);
        return matchCat && matchQuery;
      });

      if (filtered.length === 0) {
        blogContainer.innerHTML = `<div class="alert alert-warning" style="grid-column: 1/-1; padding:1.5rem; text-align:center;">No articles found matching "${query}". Try another search term.</div>`;
        return;
      }

      blogContainer.innerHTML = filtered.map(post => `
        <div class="blog-card" onclick="window.location.href='article.html?id=${encodeURIComponent(post.id)}'">
          <div>
            <div class="blog-meta-top">
              <span class="badge badge-primary">${post.category}</span>
              <span class="text-dim">⏱ ${post.readTime}</span>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-snippet">${post.snippet}</p>
          </div>
          <div class="blog-card-footer">
            <span>📅 ${post.publishDate}</span>
            <a href="article.html?id=${encodeURIComponent(post.id)}" class="link-arrow" style="font-weight:700; color:var(--color-primary);">Read Full Guide &rarr;</a>
          </div>
        </div>
      `).join('');
    }

    if (searchInput) searchInput.addEventListener('input', renderBlogPosts);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderBlogPosts();
      });
    });

    renderBlogPosts();
  }

  // Render top 6 featured guides on homepage (index.html)
  if (homeBlogContainer) {
    const featured = INSURANCE_BLOG_POSTS.slice(0, 6);
    homeBlogContainer.innerHTML = featured.map(post => `
      <div class="blog-card" onclick="window.location.href='article.html?id=${encodeURIComponent(post.id)}'">
        <div>
          <div class="blog-meta-top">
            <span class="badge badge-primary">${post.category}</span>
            <span class="text-dim">⏱ ${post.readTime}</span>
          </div>
          <h3 class="blog-title">${post.title}</h3>
          <p class="blog-snippet">${post.snippet}</p>
        </div>
        <div class="blog-card-footer">
          <span>📅 ${post.publishDate}</span>
          <a href="article.html?id=${encodeURIComponent(post.id)}" class="link-arrow" style="font-weight:700; color:var(--color-primary);">Read Full Guide &rarr;</a>
        </div>
      </div>
    `).join('');
  }
}

// Global Article Navigation (Full Page Editorial Reader)
window.openArticleReader = function(postId) {
  window.location.href = 'article.html?id=' + encodeURIComponent(postId);
};

// 7. Mobile Navigation
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
    });
  }
}
