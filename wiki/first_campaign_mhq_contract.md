---
layout: guide
title: "Your First Contract"
description: "Taking on your first contract in MekHQ"
guide_section: contract
splash: Mmek_StrategyMeeting_500x350.jpg
progress: 60
prev_page: /wiki/first_campaign_mhq_company
prev_title: Your First Company
next_page: /wiki/first_campaign_mhq_stratcon
next_title: StratCon Guide
toc: |
  <ul>
    <li><a href="#finding">Finding Contracts</a></li>
    <li><a href="#market">Contract Market</a></li>
    <li><a href="#details">Contract Details</a></li>
    <li><a href="#accepting">Accepting a Contract</a></li>
    <li><a href="#travel">Travel</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#after">After the Battle</a></li>
    <li><a href="#post">Post-Battle</a></li>
  </ul>
---

<section id="finding">
  <h2><i class="fas fa-search-dollar"></i> Finding Contracts</h2>

  <p>Contracts appear in <strong>Marketplace &gt; Contract Market</strong>. The number of available contracts depends on:</p>
  <ul>
    <li>Your unit's reputation</li>
    <li>Your current location</li>
    <li>The date (new contracts appear on the 1st of each month)</li>
  </ul>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-magic"></i> GM Mode</div>
    <p class="mb-0">If no contracts are available, wait until next month or use <strong>Generate (GM)</strong> with GM Mode active.</p>
  </div>
</section>

<section id="market">
  <h2><i class="fas fa-handshake"></i> Contract Market Overview</h2>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Contract Market Table overview.png' | relative_url }}" alt="Contract Market" class="guide-image" data-title="Contract Market">
    <figcaption class="guide-caption">Contract Market showing available contracts</figcaption>
  </figure>

  <h3>Contract Information</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Column</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Employer</strong></td>
        <td>Your future boss</td>
      </tr>
      <tr>
        <td><strong>Enemy</strong></td>
        <td>The OpFor you'll be fighting</td>
      </tr>
      <tr>
        <td><strong>Mission Type</strong></td>
        <td>Overall goal (raid, garrison, pirate hunting, etc.)</td>
      </tr>
      <tr>
        <td><strong>Transit Time</strong></td>
        <td>Days to reach the contract location</td>
      </tr>
      <tr>
        <td><strong>Contract Length</strong></td>
        <td>Duration in months (may change during contract)</td>
      </tr>
      <tr>
        <td><strong>Transport Terms</strong></td>
        <td>Percentage of transport costs covered</td>
      </tr>
      <tr>
        <td><strong>Salvage Rights</strong></td>
        <td>Percentage of salvage you keep</td>
      </tr>
      <tr>
        <td><strong>Straight Support</strong></td>
        <td>Running cost coverage</td>
      </tr>
      <tr>
        <td><strong>Battle Loss Compensation</strong></td>
        <td>Casualty/loss coverage (mutually exclusive with straight support)</td>
      </tr>
      <tr>
        <td><strong>Estimated Profit</strong></td>
        <td>Projected profit (doesn't include salvage value)</td>
      </tr>
      <tr>
        <td><strong>{% include glossary_term.html id="challenge_skulls" text="Skulls" %}</strong></td>
        <td>Difficulty rating (1-5 skulls)</td>
      </tr>
    </tbody>
  </table>

  <h3>Fees and Bonuses</h3>

  <div class="row g-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(220, 53, 69, 0.3);">
        <div class="card-header" style="background: rgba(220, 53, 69, 0.2); color: #dc3545;">
          <i class="fas fa-file-invoice-dollar"></i> MRBC Fee
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Usually 25% paid in advance to the Mercenary Review and Bonding Commission</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(40, 167, 69, 0.3);">
        <div class="card-header" style="background: rgba(40, 167, 69, 0.2); color: #28a745;">
          <i class="fas fa-gift"></i> Signing Bonus
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Rare upfront payment for taking the contract</p>
        </div>
      </div>
    </div>
  </div>

  <h3>Video Tutorial: Contract Market</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Contracts and the Contract Market
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/W-KR5KumXpc?si=HUQ7nOeI2On-ohjT" title="MekHQ Tutorial -- Contracts and the Contract Market" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section id="details">
  <h2><i class="fas fa-file-contract"></i> Contract Details</h2>

  <p>Click a contract to see detailed information in the right panel.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Contract details.png' | relative_url }}" alt="Contract Details" class="guide-image" data-title="Contract Details">
    <figcaption class="guide-caption">Contract details panel</figcaption>
  </figure>

  <h3>{% include glossary_term.html id="challenge_skulls" text="Challenge Estimate" %}</h3>

  <p>The {% include glossary_term.html id="challenge_skulls" text="skull rating" %} indicates difficulty:</p>
  <table class="guide-table">
    <thead>
      <tr>
        <th>Rating</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><i class="fas fa-skull text-muted"></i> 1 Skull</td>
        <td>Below your level</td>
      </tr>
      <tr>
        <td><i class="fas fa-skull text-warning"></i><i class="fas fa-skull text-warning"></i> 2.5 Skulls</td>
        <td>On par with your forces</td>
      </tr>
      <tr>
        <td><i class="fas fa-skull text-danger"></i><i class="fas fa-skull text-danger"></i><i class="fas fa-skull text-danger"></i><i class="fas fa-skull text-danger"></i><i class="fas fa-skull text-danger"></i> 5 Skulls</td>
        <td>Significantly harder</td>
      </tr>
    </tbody>
  </table>

  <h3>Force Quality</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Rating</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>{% include glossary_term.html id="experience_rating" text="Experience" %}</strong></td>
        <td>Green to Elite (same as your roster)</td>
      </tr>
      <tr>
        <td><strong>Equipment</strong></td>
        <td>F (worst) to A (best)</td>
      </tr>
    </tbody>
  </table>

  <h3>Command Rights</h3>

  <p>Determines your operational independence:</p>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Level</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>{% include glossary_term.html id="command_rights_integrated" text="Integrated" %}</strong></td>
        <td>Part of employer's force; allies join all scenarios</td>
      </tr>
      <tr>
        <td><strong>{% include glossary_term.html id="command_rights_house" text="House" %}</strong></td>
        <td>Limited independence; allies join ~1/3 of scenarios</td>
      </tr>
      <tr>
        <td><strong>{% include glossary_term.html id="command_rights_liaison" text="Liaison" %}</strong></td>
        <td>Moderate independence; allies join ~1/3 of scenarios</td>
      </tr>
      <tr>
        <td><strong>{% include glossary_term.html id="command_rights_independent" text="Independent" %}</strong></td>
        <td>Full freedom; allies rarely join scenarios</td>
      </tr>
    </tbody>
  </table>

  <h3>Negotiation</h3>
  <p>Click <strong>Renegotiate</strong> next to any term to attempt a better deal. Success depends on your admin staff skills.</p>
</section>

<section id="accepting">
  <h2><i class="fas fa-check-circle"></i> Accepting a Contract</h2>

  <p>Once you've chosen a contract:</p>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Review Terms Carefully</h4>
      <p>Check all contract terms and requirements</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Negotiate if Desired</h4>
      <p>Attempt to renegotiate unfavorable terms</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Accept Contract</h4>
      <p>Click <strong>Accept Contract</strong> to finalize</p>
    </div>
  </div>

  <p>The contract appears in your <strong>Briefing Room</strong> tab.</p>
</section>

<section id="travel">
  <h2><i class="fas fa-route"></i> Travel</h2>

  <p>After accepting a contract, you'll need to travel to the deployment location.</p>

  <h3>Transit</h3>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Go to the <strong>Interstellar Map</strong></p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Your destination is marked</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Use <strong>Advance Day</strong> or <strong>Advance Multiple Days</strong> to travel</p>
    </div>
  </div>

  <p>Travel time depends on:</p>
  <ul>
    <li>Distance in jump points</li>
    <li>Available JumpShip routes</li>
    <li>Your transport arrangements</li>
  </ul>

  <h3>Transport Costs</h3>

  <p>Transport costs are calculated based on:</p>
  <ul>
    <li>Unit weight requiring transport</li>
    <li>Distance traveled</li>
    <li>Transport terms in your contract</li>
  </ul>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-spaceship"></i> Capacity</div>
    <p class="mb-0">If you lack sufficient transport capacity, you'll need to hire DropShips and JumpShips.</p>
  </div>
</section>

<section id="deployment">
  <h2><i class="fas fa-chess-knight"></i> Deployment</h2>

  <h3>Briefing Room</h3>

  <p>The <strong>Briefing Room</strong> tab shows your active contracts and missions.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Briefing, requirements, assignments.png' | relative_url }}" alt="Briefing Room" class="guide-image" data-title="Briefing Room">
    <figcaption class="guide-caption">Briefing Room showing active contracts</figcaption>
  </figure>

  <h3>Contract Requirements</h3>

  <p>Your contract specifies:</p>
  <ul>
    <li><strong>Mission objectives</strong></li>
    <li><strong>Required forces</strong></li>
    <li><strong>Time limits</strong></li>
    <li><strong>Support available</strong></li>
  </ul>

  <h3>Force Deployment</h3>

  <p>When a scenario appears:</p>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Go to the <strong>TO&amp;E</strong> tab</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Right-click on forces you want to deploy</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Select <strong>Deploy Force</strong> to the scenario</p>
    </div>
  </div>

  <p>The scenario appears in the Briefing Room with assigned forces listed.</p>

  <h3>Video Tutorial: Starting a New Contract</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Starting a New Contract
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/s84Jyd6rOvI?si=JP3yhsM1GE0D8pc8" title="MekHQ Tutorial -- Starting a New Contract" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <h3>Starting Battle</h3>

  <div class="row g-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(40, 167, 69, 0.3);">
        <div class="card-header" style="background: rgba(40, 167, 69, 0.2); color: #28a745;">
          <i class="fas fa-play"></i> Start Game
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Opens MegaMek with your deployed forces. Assign OpFor and play against bot or human.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.3);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.2); color: #ffd700;">
          <i class="fas fa-file-export"></i> Export MUL File
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Exports forces for loading into a separate MegaMek instance or dedicated server.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="after">
  <h2><i class="fas fa-flag-checkered"></i> After the Battle</h2>

  <h3>Scenario Resolution</h3>

  <p>After completing a battle in MegaMek:</p>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Declare victory or defeat in MegaMek</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>MekHQ automatically begins scenario resolution (if running from MekHQ)</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>If played separately, use <strong>Resolve Manually</strong> and load the final save</p>
    </div>
  </div>

  <h3>Resolution Steps</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Step</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Battlefield Control</strong></td>
        <td>Did you control the field? (Affects salvage access)</td>
      </tr>
      <tr>
        <td><strong>Unit Status</strong></td>
        <td>Review damage to your units</td>
      </tr>
      <tr>
        <td><strong>Personnel Status</strong></td>
        <td>Check for injuries and casualties</td>
      </tr>
      <tr>
        <td><strong>Salvage</strong></td>
        <td>Select enemy units/equipment to keep</td>
      </tr>
    </tbody>
  </table>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Concluding the contract.png' | relative_url }}" alt="Scenario Resolution" class="guide-image" data-title="Scenario Resolution">
    <figcaption class="guide-caption">Scenario Resolution dialog</figcaption>
  </figure>
</section>

<section id="post">
  <h2><i class="fas fa-medkit"></i> Post-Battle</h2>

  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-wrench"></i> Repairs
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ol class="mb-0">
            <li>Check the <strong>Repair Bay</strong> tab</li>
            <li>Assign techs to repairs</li>
            <li>Order replacement parts if needed</li>
            <li>Use <strong>Advance Day</strong> to progress repairs</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-user-md"></i> Medical
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ol class="mb-0">
            <li>Check the <strong>Infirmary</strong> tab</li>
            <li>Assign doctors to patients</li>
            <li>Serious injuries may require cybernetic prosthetics</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-truck-loading"></i> Resupply
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ol class="mb-0">
            <li>Order ammunition</li>
            <li>Replace damaged equipment</li>
            <li>Replenish armor stocks</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="guide-callout guide-callout-tip mt-4">
    <div class="callout-title"><i class="fas fa-clock"></i> Planning Time</div>
    <p class="mb-0">Plan 2-3 months between contracts for repairs and procurement.</p>
  </div>

  <h3>Video Tutorial: Salvage Operations</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Salvage Operations
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/DzsTOafxFKI?si=vn3OrdojR0LKtB1u" title="MekHQ Tutorial -- Salvage Operations" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</section>
