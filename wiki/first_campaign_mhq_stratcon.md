---
layout: guide
title: "StratCon Guide"
description: "Understanding the StratCon system for single-player campaigns"
guide_section: stratcon
progress: 80
prev_page: /wiki/first_campaign_mhq_contract
prev_title: Your First Contract
next_page: /wiki/first_campaign_mhq_tips
next_title: Tips & Resources
toc: |
  <ul>
    <li><a href="#overview">Area of Operations</a></li>
    <li><a href="#objectives">Strategic Objectives</a></li>
    <li><a href="#facilities">Facilities</a></li>
    <li><a href="#recon">Reconnaissance</a></li>
    <li><a href="#resupply">Resupply and Convoys</a></li>
    <li><a href="#scenarios">Scenarios</a></li>
    <li><a href="#reinforcements">Reinforcements</a></li>
    <li><a href="#battles">Battles</a></li>
    <li><a href="#resolution">Resolution</a></li>
    <li><a href="#completion">Contract Completion</a></li>
  </ul>
---

<div class="guide-callout guide-callout-info">
  <div class="callout-title"><i class="fas fa-robot"></i> What is StratCon?</div>
  <p>{% include glossary_term.html id="stratcon" text="StratCon" %} is the automated campaign system that acts as your digital GM for single-player campaigns. It generates scenarios, manages objectives, and runs your contract.</p>
  <p class="mb-0"><small><i class="fas fa-book"></i> Terms with <span style="border-bottom: 1px dotted rgba(255,250,205,0.5);">dotted underlines</span> have glossary definitions—hover for a quick summary. <a href="{{ '/wiki/glossary' | relative_url }}">View full glossary</a></small></p>
</div>

<section id="overview">
  <h2><i class="fas fa-map-marked-alt"></i> Area of Operations</h2>

  <p>The {% include glossary_term.html id="area_of_operations" text="Area of Operations" %} tab shows the strategic situation for your contract.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Area of Operations.png' | relative_url }}" alt="Area of Operations" class="guide-image" data-title="Area of Operations">
    <figcaption class="guide-caption">Area of Operations showing the strategic map</figcaption>
  </figure>

  <h3>The Track</h3>

  <p>The main feature is the <strong>Track</strong>—a hex map representing your theater of operations. Each hex represents a large region or locality. The map shows:</p>

  <ul>
    <li><strong>Terrain biomes</strong> by hex appearance</li>
    <li><strong>Allied positions</strong> (blue symbols)</li>
    <li><strong>Enemy positions</strong> (red symbols)</li>
    <li><strong>Unscouted areas</strong> (shaded hexes)</li>
    <li><strong>{% include glossary_term.html id="strategic_objectives" text="Objectives" %} and facilities</strong></li>
  </ul>

  <h3>{% include glossary_term.html id="combat_teams" text="Combat Teams" %}</h3>

  <p>{% include glossary_term.html id="combat_teams" text="Combat Teams" %} are cohesive groups (like a Lance or Company) designed to fight together. Any force without child forces and containing at least one unit is automatically considered a Combat Team.</p>

  <h3>Force Designations ({% include glossary_term.html id="combat_roles" text="Combat Roles" %})</h3>

  <p>When deploying forces, assign them a {% include glossary_term.html id="combat_roles" text="Combat Role" %}:</p>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Designation</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Maneuver</strong></td>
        <td>Standard combat forces, easy to reinforce</td>
      </tr>
      <tr>
        <td><strong>Frontline</strong></td>
        <td>Breakthrough/defense forces; can deploy minefields and infantry in advance (uses Tactics skill)</td>
      </tr>
      <tr>
        <td><strong>Patrol</strong></td>
        <td>Recon forces; scout 7 hexes on deployment instead of 1</td>
      </tr>
      <tr>
        <td><strong>Training</strong></td>
        <td>Forces using deployment time to train skills</td>
      </tr>
      <tr>
        <td><strong>Cadre</strong></td>
        <td>Training local forces (for Cadre Duty contracts)</td>
      </tr>
      <tr>
        <td><strong>Auxiliary</strong></td>
        <td>Support forces (artillery, airpower) that act as reinforcements</td>
      </tr>
      <tr>
        <td><strong>Reserve</strong></td>
        <td>Off-duty forces for repair and recovery; won't generate scenarios</td>
      </tr>
    </tbody>
  </table>
</section>

<section id="objectives">
  <h2><i class="fas fa-bullseye"></i> {% include glossary_term.html id="strategic_objectives" text="Strategic Objectives" %}</h2>

  <p>The {% include glossary_term.html id="strategic_objectives" text="objectives" %} panel shows your mission goals:</p>

  <div class="row g-4 mb-4">
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.3);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.2); color: #ffd700;">
          <i class="fas fa-trophy"></i> {% include glossary_term.html id="contract_victory_points" text="Victory Points" %}
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p><strong>{% include glossary_term.html id="contract_victory_points" text="Contract Victory Points" %}</strong> determine contract success. Earned by:</p>
          <ul class="mb-0">
            <li>Completing {% include glossary_term.html id="strategic_objectives" text="objectives" %}</li>
            <li>Winning scenarios</li>
            <li>Capturing/destroying enemy facilities</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(0, 123, 255, 0.3);">
        <div class="card-header" style="background: rgba(0, 123, 255, 0.2); color: #007bff;">
          <i class="fas fa-hands-helping"></i> {% include glossary_term.html id="support_points" text="Support Points" %}
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p>Represent employer assistance:</p>
          <ul class="mb-0">
            <li>Generated by Admin/Transport at start and weekly</li>
            <li>Used for reinforcements (min 1 SP)</li>
            <li>Used for mercenary auctions and hiring Ronin</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(220, 53, 69, 0.3);">
        <div class="card-header" style="background: rgba(220, 53, 69, 0.2); color: #dc3545;">
          <i class="fas fa-fist-raised"></i> Enemy Morale
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p>Tracks enemy fighting spirit:</p>
          <ul class="mb-0">
            <li><strong>Routed</strong> = Allied victory imminent</li>
            <li><strong>Overwhelming</strong> = Difficult opposition</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="facilities">
  <h2><i class="fas fa-building"></i> Facilities</h2>

  <p>Facilities are bases and installations that provide bonuses to whoever controls them.</p>

  <h3>Allied Facilities</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Facility</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Air Base</strong></td>
        <td>Allied aircraft participate in scenarios</td>
      </tr>
      <tr>
        <td><strong>Artillery Base</strong></td>
        <td>Allied artillery supports scenarios</td>
      </tr>
      <tr>
        <td><strong>Base of Operations</strong></td>
        <td>Defended by veterans, turrets, and commander</td>
      </tr>
      <tr>
        <td><strong>Comms Center</strong></td>
        <td>Reduces reinforcement TN by 2</td>
      </tr>
      <tr>
        <td><strong>Data Center</strong></td>
        <td>Increases scan range by 1 hex</td>
      </tr>
      <tr>
        <td><strong>Early Warning Center</strong></td>
        <td>Reduces allied reinforcement arrival time</td>
      </tr>
      <tr>
        <td><strong>Industrial Center</strong></td>
        <td>Provides 1 SP/month</td>
      </tr>
      <tr>
        <td><strong>Mek Base</strong></td>
        <td>Allied meks participate in scenarios</td>
      </tr>
      <tr>
        <td><strong>Orbital Defense</strong></td>
        <td>Prevents hostile air operations</td>
      </tr>
      <tr>
        <td><strong>Space Port</strong></td>
        <td>Provides 2 SP/month</td>
      </tr>
      <tr>
        <td><strong>Tank Base</strong></td>
        <td>Allied vehicles participate in scenarios</td>
      </tr>
    </tbody>
  </table>

  <h3>Enemy Facilities</h3>

  <p>Enemy facilities provide similar bonuses to OpFor. For example:</p>
  <ul>
    <li><strong>Comms Center</strong> adds reinforcement modifiers against you</li>
    <li><strong>Industrial Center</strong> makes enemies larger and better equipped</li>
    <li><strong>Space Port</strong> increases enemy force size by 15%</li>
  </ul>

  <h3>Capturing Facilities</h3>

  <p>Deploy forces to an enemy facility to generate a capture scenario:</p>
  <div class="row g-4">
    <div class="col-md-6">
      <div class="card" style="background: var(--card-color); border: 1px solid rgba(0, 123, 255, 0.3);">
        <div class="card-body" style="color: var(--text-color);">
          <h5 style="color: #007bff;"><i class="fas fa-flag"></i> Capture</h5>
          <p class="mb-0">Eliminate defenders but preserve infrastructure</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card" style="background: var(--card-color); border: 1px solid rgba(220, 53, 69, 0.3);">
        <div class="card-body" style="color: var(--text-color);">
          <h5 style="color: #dc3545;"><i class="fas fa-bomb"></i> Destroy</h5>
          <p class="mb-0">Total destruction (denies the facility to everyone)</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="recon">
  <h2><i class="fas fa-binoculars"></i> Reconnaissance</h2>

  <p>Scout unscouted hexes to reveal objectives and enemy positions.</p>

  <div class="ratio ratio-16x9 mb-4">
    <iframe src="https://www.youtube.com/embed/Y7s298Td3U0?si=eCNy5_zjhHpaaQKR" title="StratCon Reconnaissance Tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Recon.png' | relative_url }}" alt="Recon Example" class="guide-image" data-title="Reconnaissance">
    <figcaption class="guide-caption">Reconnaissance revealing enemy positions</figcaption>
  </figure>

  <h3>Deploying Scouts</h3>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Right-click a hex on the track</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Select <strong>Manage Deployment</strong></p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Assign a force</p>
    </div>
  </div>

  <h3>Patrol Forces</h3>

  <p>Forces designated as <strong>Patrol</strong> are most efficient:</p>
  <ul>
    <li>Reveal the target hex AND surrounding hexes (up to 7 total)</li>
    <li>Only works when deployed to empty hexes</li>
  </ul>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-search"></i> Advanced Scouting</div>
    <p class="mb-0">With Advanced Scouting enabled, revealed hexes depend on unit types and pilot skills.</p>
  </div>

  <h3>Deployment Period</h3>

  <p>After deploying, forces need time to return:</p>
  <ul>
    <li><strong>Deployment Period</strong> shown in objectives panel</li>
    <li>Force unavailable for other tasks during this time</li>
    <li>Salvage and injured personnel return immediately</li>
  </ul>
</section>

<section id="resupply">
  <h2><i class="fas fa-truck"></i> Resupply and Convoys</h2>

  <p>Getting supplies during deployment is challenging—normal procurement takes weeks or months.</p>

  <h3>Employer Resupply</h3>

  <p>Periodic supply drops from your employer:</p>
  <ul>
    <li>Parts and equipment</li>
    <li>Ammunition</li>
    <li>Replacement personnel</li>
  </ul>

  <h3>Convoys</h3>

  <p>Use <strong>Convoy</strong> forces to transport supplies:</p>
  <ul>
    <li>Assign vehicles with cargo capacity to Convoy designation</li>
    <li>Convoys can be intercepted by enemy, generating combat scenarios</li>
    <li>Essential for moving SP-purchased items</li>
  </ul>
</section>

<section id="scenarios">
  <h2><i class="fas fa-chess"></i> Scenarios</h2>

  <p>StratCon generates scenarios (battles) based on your deployments and contract requirements.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Scenario Details.png' | relative_url }}" alt="Scenario List" class="guide-image" data-title="Scenario List">
    <figcaption class="guide-caption">Scenario list in the Briefing Room</figcaption>
  </figure>

  <h3>Scenario Information</h3>

  <p>Each scenario shows:</p>
  <ul>
    <li><strong>Location</strong> (hex coordinates)</li>
    <li><strong>Scenario type</strong> (attack, defense, recon, etc.)</li>
    <li><strong>Weather and lighting conditions</strong></li>
    <li><strong>Objectives</strong></li>
    <li><strong>Enemy composition estimate</strong></li>
  </ul>

  <h3>Conditions</h3>

  <p>Scenarios may have special conditions:</p>
  <ul>
    <li>Weather (rain, snow, fog)</li>
    <li>Lighting (night, dusk)</li>
    <li>Planetary conditions (gravity, atmosphere)</li>
  </ul>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-dice"></i> Tactics Reroll</div>
    <p class="mb-0">If your force commander has <strong>Tactics</strong> skill, you can attempt to reroll unfavorable conditions.</p>
  </div>

  <h3>Deploying to Scenarios</h3>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <p>Select the scenario in the Briefing Room</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <p>Assign forces from your TO&amp;E</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <p>Review deployment requirements</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <p>Start the battle</p>
    </div>
  </div>
</section>

<section id="reinforcements">
  <h2><i class="fas fa-parachute-box"></i> Reinforcements</h2>

  <p>Call for help during difficult battles.</p>

  <h3>Calling Reinforcements</h3>

  <p>During a scenario:</p>
  <ul>
    <li>Costs minimum 1 {% include glossary_term.html id="support_points" text="Support Point" %}</li>
    <li>More SP increases success chance</li>
    <li>Commander's <strong>Leadership</strong> skill provides bonus BV budget (500 BV per rank)</li>
  </ul>

  <h3>Reinforcement Arrival</h3>

  <p>Affected by:</p>
  <ul>
    <li>Commander's <strong>Strategy</strong> skill (reduces arrival time)</li>
    <li>Enemy facilities (Early Warning Centers delay you)</li>
    <li>Allied facilities (improve arrival time)</li>
  </ul>

  <h3>Interception</h3>

  <p>Reinforcing forces may be intercepted:</p>
  <ul>
    <li>Commander's <strong>Tactics</strong> skill reduces interception chance</li>
    <li>Intercepted reinforcements must fight their way through</li>
  </ul>
</section>

<section id="battles">
  <h2><i class="fas fa-crosshairs"></i> Battles</h2>

  <p>When a scenario is ready, you have several options:</p>

  <div class="row g-4">
    <div class="col-md-6 col-lg-3">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(40, 167, 69, 0.3);">
        <div class="card-header" style="background: rgba(40, 167, 69, 0.2); color: #28a745;">
          <i class="fas fa-play"></i> Manual Play
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Click <strong>Start Game</strong> to open MegaMek and play the battle yourself.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(0, 123, 255, 0.3);">
        <div class="card-header" style="background: rgba(0, 123, 255, 0.2); color: #007bff;">
          <i class="fas fa-file-upload"></i> Resolve Manually
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">If played separately, save the game in MegaMek and load it in MekHQ.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 193, 7, 0.3);">
        <div class="card-header" style="background: rgba(255, 193, 7, 0.2); color: #ffc107;">
          <i class="fas fa-robot"></i> Autoresolve
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Let the computer simulate the battle. Fast but less control.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(220, 53, 69, 0.3);">
        <div class="card-header" style="background: rgba(220, 53, 69, 0.2); color: #dc3545;">
          <i class="fas fa-running"></i> Ignore/Withdraw
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Skip the scenario. May have negative consequences.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="resolution">
  <h2><i class="fas fa-check-double"></i> Resolution</h2>

  <p>After a battle completes:</p>

  <h3>Status Updates</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Update</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Unit Damage</strong></td>
        <td>All damage applied to your units</td>
      </tr>
      <tr>
        <td><strong>Personnel Injuries</strong></td>
        <td>Casualties and wounds recorded</td>
      </tr>
      <tr>
        <td><strong>Enemy Losses</strong></td>
        <td>Destroyed/captured enemy units</td>
      </tr>
    </tbody>
  </table>

  <h3>Salvage</h3>

  <p>Select salvage from defeated enemies:</p>
  <ul>
    <li>Limited by salvage rights in contract</li>
    <li>Heavy/damaged items may be harder to recover</li>
    <li>Salvage forces improve recovery chances</li>
  </ul>

  <h3>Campaign Effects</h3>

  <ul>
    <li><strong>Victory Points</strong> adjusted</li>
    <li><strong>Enemy Morale</strong> may change</li>
    <li><strong>Facilities</strong> may change hands</li>
    <li><strong>Turning Points</strong> may be completed</li>
  </ul>
</section>

<section id="completion">
  <h2><i class="fas fa-flag-checkered"></i> Contract Completion</h2>

  <p>Contracts end when:</p>
  <ul>
    <li><strong>Time expires</strong></li>
    <li><strong>All objectives complete</strong></li>
    <li><strong>Enemy routed</strong></li>
    <li><strong>Your forces defeated</strong></li>
  </ul>

  <h3>Evaluation</h3>

  <p>Your performance is evaluated based on:</p>
  <ul>
    <li>Objectives completed</li>
    <li>Victory Points earned</li>
    <li>Losses sustained</li>
    <li>Contract terms met</li>
  </ul>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-chart-bar"></i> Effects</div>
    <p class="mb-0">This affects: Payment received, Reputation change, and Future contract availability.</p>
  </div>

  <h3>Continuing the Contract</h3>

  <p>Between scenarios:</p>

  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-wrench"></i> Repairs &amp; Recovery
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ol class="mb-0">
            <li>Return forces to Reserve designation</li>
            <li>Assign techs to repairs</li>
            <li>Treat injured personnel</li>
            <li>Resupply ammunition and parts</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-chess-board"></i> Strategic Positioning
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ol class="mb-0">
            <li>Scout new hexes with Patrol forces</li>
            <li>Position forces to protect objectives</li>
            <li>Plan attacks on enemy facilities</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-tasks"></i> Contract Progress
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Monitor:</p>
          <ul class="mb-0">
            <li>Victory Point total</li>
            <li>Enemy morale level</li>
            <li>Remaining objectives</li>
            <li>Time remaining</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
