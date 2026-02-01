---
layout: guide
title: "Starting Your First Company"
description: "Building your mercenary company from the ground up"
guide_section: company
splash: splash-liftoff.jpg
progress: 45
prev_page: /wiki/first_campaign_mhq_setup
prev_title: Campaign Setup
next_page: /wiki/first_campaign_mhq_contract
next_title: Your First Contract
toc: |
  <ul>
    <li><a href="#quickstart">Quick Start Generator</a></li>
    <li><a href="#combat-forces">Understanding Combat Forces</a></li>
    <li><a href="#manual">Manual Company Creation</a></li>
    <li><a href="#funds">Funds and Money</a></li>
    <li><a href="#personnel">Staff and Personnel</a></li>
    <li><a href="#education">Education Module</a></li>
    <li><a href="#xp">XP and Skills</a></li>
    <li><a href="#procurement">Procurements</a></li>
    <li><a href="#maintenance">Maintenance and Crew</a></li>
    <li><a href="#parts">Parts and Autologistics</a></li>
    <li><a href="#repairs">Repairs</a></li>
    <li><a href="#toe">Organization (TO&amp;E)</a></li>
    <li><a href="#overview">Unit Overview</a></li>
  </ul>
---

<section id="quickstart">
  <h2><i class="fas fa-bolt"></i> Quick Start: Company Generator</h2>

  <p>If you want to get straight to action, use <strong>Manage Campaign &gt; Quick Start Company Generator</strong>. This tool creates a ready-to-play lance, company, or larger force with:</p>

  <ul>
    <li>Units appropriate for your year and faction</li>
    <li>All necessary personnel</li>
    <li>Leftover funds</li>
  </ul>

  <div class="guide-callout guide-callout-warning">
    <div class="callout-title"><i class="fas fa-robot"></i> Note</div>
    <p class="mb-0">The Company Generator currently only creates Mek forces. For combined arms, follow the manual process below.</p>
  </div>

  <h3>Video Tutorial: Company Generation</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Company Generation and Assigning Support Forces
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/ltcnOOQyfr4?si=oekKloA4zxrOmPxM" title="MekHQ Tutorial -- Company Generation and Assigning Support Forces" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section id="combat-forces">
  <h2><i class="fas fa-chess"></i> Understanding Combat Forces</h2>

  <p>Before building your force, it helps to understand the different types of combat units available in BattleTech and their tactical roles.</p>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Understanding Combat Forces
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/goIci3dOW5U?si=oTKT2HTq9Ml6EurX" title="MekHQ Tutorial -- Understanding Combat Forces" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <p>This video covers the types of combat forces (BattleMeks, vehicles, infantry, aerospace, and more), where to find additional information on each, and the advantages they bring to your company.</p>
</section>

<section id="manual">
  <h2><i class="fas fa-hammer"></i> Manual Company Creation</h2>

  <h3>GM Mode and Interstellar Map</h3>

  <p>Two essential tools for setup:</p>

  <div class="row g-4 mb-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.2); color: #ffd700;">
          <i class="fas fa-user-shield"></i> GM Mode
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Toggle in upper right. Allows unrestricted changes: adding units, money, instant repairs, editing missions.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.2); color: #ffd700;">
          <i class="fas fa-globe"></i> Interstellar Map
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Shows the Inner Sphere and Periphery with capitals and hiring halls.</p>
        </div>
      </div>
    </div>
  </div>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Interstellar map.png' | relative_url }}" alt="Interstellar Map" class="guide-image" data-title="Interstellar Map">
    <figcaption class="guide-caption">Interstellar Map showing the Inner Sphere</figcaption>
  </figure>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-lightbulb"></i> Did You Know?</div>
    <p class="mb-0">Double-click on any planet to see detailed system information, including all planets in the system, their characteristics, and historical data.</p>
  </div>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/planetary_system/planetary_system_view.png' | relative_url }}" alt="System View" class="guide-image" data-title="System View">
    <figcaption class="guide-caption">System view showing planets and detailed information</figcaption>
  </figure>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-location-arrow"></i> Relocating</div>
    <p class="mb-0">To relocate your company: Click a planet &gt; Right-click &gt; GM Tools &gt; Move there.</p>
  </div>
</section>

<section id="funds">
  <h2><i class="fas fa-coins"></i> Funds and Money</h2>

  <p>Every company starts with money. CamOps provides guidelines for starting funds.</p>

  <div class="row g-4 mb-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-university"></i> Option 1: Take a Loan
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Use the Finances tab to take a bank loan.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-magic"></i> Option 2: GM Mode Funding
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ol class="mb-0">
            <li>Go to <strong>Finances</strong> tab</li>
            <li>Click <strong>Add Transactions</strong></li>
            <li>Add your starting capital (e.g., 120 million C-Bills)</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Funds and Money.png' | relative_url }}" alt="Finances Tab" class="guide-image" data-title="Finances Tab">
    <figcaption class="guide-caption">Finances Tab showing transaction history</figcaption>
  </figure>
</section>

<section id="personnel">
  <h2><i class="fas fa-users"></i> Staff and Personnel</h2>

  <h3>Hiring Methods</h3>

  <div class="row g-4 mb-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(40, 167, 69, 0.3);">
        <div class="card-header" style="background: rgba(40, 167, 69, 0.2); color: #28a745;">
          <i class="fas fa-store"></i> Personnel Market (Realistic)
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ul class="mb-0">
            <li>Access via toolbar or Personnel Market button</li>
            <li>Shows currently available hires at your location</li>
            <li>Sparse in combat zones</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 193, 7, 0.3);">
        <div class="card-header" style="background: rgba(255, 193, 7, 0.2); color: #ffc107;">
          <i class="fas fa-user-plus"></i> Direct Hire (GM Tool)
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ul class="mb-0">
            <li><strong>Marketplace &gt; Hire</strong> for individual hires</li>
            <li><strong>Marketplace &gt; Hire Personnel in Bulk</strong> for large numbers</li>
            <li>More control but less realistic</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/personnel market.png' | relative_url }}" alt="Hire Personnel" class="guide-image" data-title="Hire Personnel">
    <figcaption class="guide-caption">Hire Personnel dialog</figcaption>
  </figure>

  <h3>Creating Custom Characters</h3>

  <p>When hiring, click <strong>Edit Statistics</strong> to customize:</p>
  <ul>
    <li>Skills (combat, support, roleplay)</li>
    <li>Personality and backstory</li>
    <li>Attributes and traits</li>
  </ul>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Edit Person.png' | relative_url }}" alt="Edit Statistics" class="guide-image" data-title="Edit Statistics">
    <figcaption class="guide-caption">Edit Statistics dialog</figcaption>
  </figure>

  <p>Use <strong>Change Profile</strong> (right-click menu) to add:</p>
  <ul>
    <li>Custom portrait</li>
    <li>Biography</li>
    <li>Callsign</li>
  </ul>

  <h3>Personnel Tab</h3>

  <p>The Personnel tab shows all your employees with sorting and filtering options.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Personnel Roster.png' | relative_url }}" alt="Personnel Tab" class="guide-image" data-title="Personnel Tab">
    <figcaption class="guide-caption">Personnel Tab with filtering options</figcaption>
  </figure>

  <div class="guide-step">
    <div class="step-number"><i class="fas fa-crown"></i></div>
    <div class="step-content">
      <h4>Setting Up Leadership</h4>
      <img src="{{ '/assets/images/first_campaign_mhq/Setting Up Leadership.png' | relative_url }}" alt="Personnel Flags Menu" class="img-fluid rounded" style="float: right; width: 80%; margin-left: 1rem; margin-bottom: 0.5rem;">
      <ol>
        <li>Select your commander</li>
        <li>Right-click &gt; <strong>Flags</strong> &gt; Select Commander</li>
        <li>Right-click &gt; <strong>Change Rank</strong> to set appropriate ranks</li>
      </ol>
    </div>
  </div>
  <div style="clear: both;"></div>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-star"></i> Founders</div>
    <p class="mb-0">Flag founding members (Right-click &gt; Flags &gt; Founder). Founders have lower {% include glossary_term.html id="turnover" text="turnover" %}.</p>
  </div>

  <h3>Video Tutorial: Custom Ranks</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Custom Ranks
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/_jXPTj2eEiM?si=tK-riw55JnQKaAis" title="MekHQ Tutorial -- Custom Ranks" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <p>This video demonstrates how to create and customize rank structures for your mercenary company.</p>

  <h3>Required Staff</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Role</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Command Admin</strong></td>
        <td>Overall unit management, reinforcement management</td>
      </tr>
      <tr>
        <td><strong>HR Admin</strong></td>
        <td>Personnel happiness, admin capacity</td>
      </tr>
      <tr>
        <td><strong>Logistics Admin</strong></td>
        <td>Procurement and resupply</td>
      </tr>
      <tr>
        <td><strong>Transport Admin</strong></td>
        <td>Movement and deployment support</td>
      </tr>
      <tr>
        <td><strong>MekTechs</strong></td>
        <td>Maintain and repair meks</td>
      </tr>
      <tr>
        <td><strong>Mechanics</strong></td>
        <td>Maintain and repair vehicles</td>
      </tr>
      <tr>
        <td><strong>Doctors</strong></td>
        <td>Treat injuries and illnesses</td>
      </tr>
    </tbody>
  </table>

  <div class="guide-callout guide-callout-warning">
    <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> {% include glossary_term.html id="hr_strain" text="Admin Strain" %}</div>
    <p class="mb-0">Without sufficient admin capacity, you'll experience <strong>admin strain</strong>, increasing personnel {% include glossary_term.html id="turnover" text="turnover" %}.</p>
  </div>
</section>

<section id="education">
  <h2><i class="fas fa-graduation-cap"></i> Education Module</h2>

  <p>The Education module provides immersive skill development instead of abstract XP spending.</p>

  <h3>Sending Personnel to Education</h3>

  <p>Right-click a person &gt; <strong>Education</strong> submenu:</p>

  <div class="row g-4 mb-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-home"></i> Unit Education
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Internal training (creche, bootcamp)</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-university"></i> Local Academies
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">External schools (colleges, military academies)</p>
        </div>
      </div>
    </div>
  </div>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Education.png' | relative_url }}" alt="Education Options" class="guide-image" data-title="Education Options">
    <figcaption class="guide-caption">Education submenu options</figcaption>
  </figure>

  <p>Students appear in the Personnel tab under the "Students" filter.</p>
</section>

<section id="xp">
  <h2><i class="fas fa-chart-line"></i> XP and Skills</h2>

  <h3>Spending XP</h3>

  <p>Right-click a person &gt; <strong>Spend XP</strong>:</p>
  <ul>
    <li>Improve existing skills</li>
    <li>Acquire new skills</li>
    <li>Learn Special Pilot Abilities (SPAs)</li>
  </ul>

  <h3>Mass Personnel Training</h3>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Click <strong>Mass Personnel Training</strong> (top right of Personnel tab)</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Select profession and skill to improve</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Train everyone who qualifies</p>
    </div>
  </div>

  <h3>Quick Train</h3>
  <p>The <strong>Quick Train</strong> button advances the lowest primary profession skills. Can be automated at end of month.</p>

  <h3>Important Leadership Skills</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Skill</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Leadership</strong></td>
        <td>Grants 500 BV per rank for reinforcements; reduces turnover for subordinates</td>
      </tr>
      <tr>
        <td><strong>Strategy</strong></td>
        <td>Reduces reinforcement arrival time</td>
      </tr>
      <tr>
        <td><strong>Tactics</strong></td>
        <td>Deploy minefields/infantry before battle; reroll scenario conditions</td>
      </tr>
    </tbody>
  </table>

  <h3>Video Tutorial: Training New Pilots</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Training New Mek Pilots
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/Vyocx8a-1hk?si=Z0ysGBs5BWiW9LPu" title="MekHQ Tutorial -- Training New Mek Pilots" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <p>This video demonstrates how to use training forces to develop new MekWarriors for your company.</p>
</section>

<section id="procurement">
  <h2><i class="fas fa-shopping-cart"></i> Procurements and Acquisitions</h2>

  <h3>Buying Units</h3>

  <div class="row g-4 mb-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-store"></i> Unit Marketplace
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p><strong>Command Center &gt; Find Units</strong></p>
          <ul class="mb-0">
            <li>Shows available units at your location</li>
            <li>Refreshes monthly</li>
            <li>Prices fluctuate</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-search"></i> Direct Purchase
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p><strong>Marketplace &gt; Purchase Units</strong></p>
          <ul class="mb-0">
            <li>Search for any unit by type, weight, tech base</li>
            <li>Buy or add via GM Mode</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Direct Purchase.png' | relative_url }}" alt="Purchase Units" class="guide-image" data-title="Purchase Units">
    <figcaption class="guide-caption">Purchase Units dialog</figcaption>
  </figure>

  <p>Purchased units go to the procurement queue and arrive based on your acquisition rules.</p>

  <h3>Buying Equipment</h3>

  <p><strong>Marketplace &gt; Purchase Parts</strong> or Command Center &gt; Find Parts:</p>
  <ul>
    <li>Search for any part, weapon, or equipment</li>
    <li>Use "Buy in Bulk" for larger quantities</li>
  </ul>
</section>

<section id="maintenance">
  <h2><i class="fas fa-wrench"></i> {% include glossary_term.html id="maintenance" text="Maintenance" %} and Crew</h2>

  <h3>Activating Units</h3>

  <p>If your settings have units arrive mothballed, you must activate them:</p>
  <ul>
    <li>Right-click unit &gt; <strong>Activate</strong></li>
    <li>Requires 480 minutes of {% include glossary_term.html id="tech_time" text="tech time" %}</li>
  </ul>

  <h3>Assigning Crew</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Assignment</th>
        <th>Method</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pilots/Crew</strong></td>
        <td>Right-click unit &gt; <strong>Assign Person</strong> &gt; Pilot/Driver<br>Or from Personnel tab: Right-click person &gt; <strong>Assign to Unit</strong></td>
      </tr>
      <tr>
        <td><strong>Tech (for maintenance)</strong></td>
        <td>Right-click unit &gt; <strong>Assign Person</strong> &gt; Tech<br>Each tech has 480 minutes of {% include glossary_term.html id="tech_time" text="work time" %} per day</td>
      </tr>
    </tbody>
  </table>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Assigning Personnel.png' | relative_url }}" alt="Hangar Tab" class="guide-image" data-title="Hangar Tab">
    <figcaption class="guide-caption">Hangar Tab showing unit assignments</figcaption>
  </figure>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-magic"></i> Vehicle Crew Shortcut</div>
    <p class="mb-0">Right-click vehicle &gt; GM Mode &gt; <strong>Add Minimum Complement</strong> to auto-generate required crew.</p>
  </div>

  <h3>Mothballing</h3>

  <p>Mothballed units don't require maintenance but occupy cargo space. Use for long-term storage or when not needed.</p>
</section>

<section id="parts">
  <h2><i class="fas fa-cogs"></i> Parts in Use and Autologistics</h2>

  <h3>Parts in Use Report</h3>

  <p>Command Center &gt; <strong>Parts in Use Report</strong> shows:</p>
  <ul>
    <li>All parts used across your unit</li>
    <li>Current stock levels</li>
    <li>Weight of inventory</li>
  </ul>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/AutoLogistics2.png' | relative_url }}" alt="Parts in Use" class="guide-image" data-title="Parts in Use">
    <figcaption class="guide-caption">Parts in Use Report</figcaption>
  </figure>

  <h3>Setting Up Autologistics</h3>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Set <strong>Requested Stock Percentage</strong> for each part type</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Click <strong>Order parts to fill requested stock</strong></p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Enable <strong>Add Part Orders to Fill Requested Stocks Weekly</strong></p>
    </div>
  </div>

  <h3>Recommended Stock Levels</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Part Type</th>
        <th>Recommended %</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Armor</td>
        <td>100%+</td>
      </tr>
      <tr>
        <td>Ammo</td>
        <td>100%+</td>
      </tr>
      <tr>
        <td>Heat sinks</td>
        <td>20%</td>
      </tr>
      <tr>
        <td>Common weapons</td>
        <td>20%</td>
      </tr>
    </tbody>
  </table>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-clock"></i> {% include glossary_term.html id="delivery_times" text="Planning Time" %}</div>
    <p class="mb-0">Plan 2-3 months between contracts to catch up on procurements. {% include glossary_term.html id="delivery_times" text="Delivery times" %} in BattleTech are measured in months, not days.</p>
  </div>
</section>

<section id="repairs">
  <h2><i class="fas fa-tools"></i> Repairs</h2>

  <h3>Repair Bay Tab</h3>

  <p>Damaged units appear in the <strong>Repair Bay</strong> tab.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Mass Repair Mass Salvage.png' | relative_url }}" alt="Repair Bay" class="guide-image" data-title="Repair Bay">
    <figcaption class="guide-caption">Repair Bay showing damaged units</figcaption>
  </figure>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Select unit (left column)</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Select damaged part (middle column)</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Assign tech (right column)</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <p>Click <strong>Do Task</strong></p>
    </div>
  </div>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-clock"></i> Extra Time</div>
    <p class="mb-0">Right-click a task to assign more time, lowering the target number.</p>
  </div>

  <h3>Salvage Mode</h3>

  <p>For badly damaged parts, switch to salvage mode:</p>
  <ul>
    <li>Right-click unit &gt; Change repair to salvage</li>
    <li>Salvage components to recover what you can</li>
    <li>Order replacement parts</li>
  </ul>

  <h3>Mass Repair/Salvage</h3>
  <p>Use the <strong>Mass repair/salvage</strong> button to automate the repair process.</p>

  <h3>Medicine</h3>
  <p>Injured personnel appear in the <strong>Infirmary</strong> tab. Doctors treat patients based on:</p>
  <ul>
    <li>Number of beds (MASH theaters if used)</li>
    <li>Doctor skill</li>
    <li>Available time</li>
  </ul>
</section>

<section id="toe">
  <h2><i class="fas fa-sitemap"></i> Organization (TO&amp;E)</h2>

  <p>The <strong>TO&amp;E tab</strong> (Table of Organization and Equipment) structures your forces.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Table of Organization.png' | relative_url }}" alt="TO&E Tab" class="guide-image" data-title="TO&E Tab">
    <figcaption class="guide-caption">TO&amp;E Tab showing force structure</figcaption>
  </figure>

  <h3>Building Your Organization</h3>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Right-click top-level force to rename</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Right-click &gt; <strong>Add New Force</strong> to create sub-units</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Double-click forces to expand the tree</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <p>Right-click force &gt; <strong>Add Unit</strong> to assign units</p>
    </div>
  </div>

  <h3>Force Types</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Frontline</strong></td>
        <td>Main combat forces</td>
      </tr>
      <tr>
        <td><strong>Auxiliary</strong></td>
        <td>Reinforcement pool</td>
      </tr>
      <tr>
        <td><strong>Support</strong></td>
        <td>Non-combat assets</td>
      </tr>
    </tbody>
  </table>

  <h3>Video Tutorial: Support Forces</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Support Forces (Types and Assigning)
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/Q-SWIKhroaM?si=LYiKdLSYvSTJWnzk" title="MekHQ Tutorial -- Support Forces (Types and Assigning)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <p>This video covers the different types of support forces and how to assign them within your organization.</p>
</section>

<section id="overview">
  <h2><i class="fas fa-tachometer-alt"></i> Unit Overview</h2>

  <h3>Command Center</h3>

  <p>The <strong>Command Center</strong> tab provides an overview of your company:</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Command Center.png' | relative_url }}" alt="Command Center" class="guide-image" data-title="Command Center">
    <figcaption class="guide-caption">Command Center overview</figcaption>
  </figure>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Section</th>
        <th>Information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Daily Log</strong></td>
        <td>Recent events and activities</td>
      </tr>
      <tr>
        <td><strong>Reputation</strong></td>
        <td>Your unit's standing</td>
      </tr>
      <tr>
        <td><strong>Cargo Summary</strong></td>
        <td>Capacity vs. usage</td>
      </tr>
      <tr>
        <td><strong>Reports</strong></td>
        <td>Various status reports</td>
      </tr>
    </tbody>
  </table>

  <h3>Advancing Time</h3>

  <p>Click <strong>Advance Day</strong> to progress one day. Each day:</p>
  <ul>
    <li>Procurement rolls are made</li>
    <li>Maintenance and repairs progress</li>
    <li>Personnel go about their business</li>
    <li>New hires appear in the market</li>
  </ul>
</section>
