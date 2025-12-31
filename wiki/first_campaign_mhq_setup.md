---
layout: guide
title: "Campaign Setup"
description: "Configuring your campaign rules and options for MekHQ"
guide_section: setup
splash: splash-ceremony.jpg
progress: 30
prev_page: /wiki/first_campaign_mhq_installation
prev_title: Installation
next_page: /wiki/first_campaign_mhq_company
next_title: Your First Company
toc: |
  <ul>
    <li><a href="#starting">Starting a New Campaign</a></li>
    <li><a href="#general">General Settings</a></li>
    <li><a href="#hr">Human Resources</a></li>
    <li><a href="#advancement">Advancement</a></li>
    <li><a href="#logistics">Logistics</a></li>
    <li><a href="#operations">Operations</a></li>
    <li><a href="#final">Final Touches</a></li>
    <li><a href="#battle-rules">Battle Rules</a></li>
  </ul>
---

<section id="starting">
  <h2><i class="fas fa-play-circle"></i> Starting a New Campaign</h2>

  <p>When you first start MekHQ, click <strong>New Campaign</strong>. After a brief loading screen, you'll see the Campaign Preset selection.</p>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Campaign setup.png' | relative_url }}" alt="Campaign Preset Selection" class="guide-image" data-title="Campaign Preset Selection">
    <figcaption class="guide-caption">Campaign Preset Selection dialog</figcaption>
  </figure>

  <h3>Preset Options</h3>

  <p>For single-player campaigns against the computer, select either:</p>

  <div class="row g-4 mb-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(40, 167, 69, 0.5);">
        <div class="card-header" style="background: rgba(40, 167, 69, 0.2); color: #28a745;">
          <i class="fas fa-user-graduate"></i> New Player Preset
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p>Easier experience, fewer complex mechanics.</p>
          <p class="mb-0"><strong>Recommended for:</strong> First-time players</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.5);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.2); color: #ffd700;">
          <i class="fas fa-medal"></i> Veteran Player Preset
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p>Full Campaign Operations rules with StratCon.</p>
          <p class="mb-0"><strong>This guide uses:</strong> Veteran Player Preset</p>
        </div>
      </div>
    </div>
  </div>

  <p>Both include <strong>{% include glossary_term.html id="stratcon" text="StratCon" %}</strong>, an automated campaign system that acts as your digital GM for single-player gameplay.</p>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-bolt"></i> Quick Start</div>
    <p class="mb-0">If you select New Player Preset and click "Confirm," you can skip to <a href="{{ '/wiki/first_campaign_mhq_company' | relative_url }}">Starting Your First Company</a>.</p>
  </div>

  <p>Click <strong>Customize</strong> to fine-tune the campaign options, which we'll cover below.</p>
</section>

<section id="general">
  <h2><i class="fas fa-cog"></i> General Settings</h2>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/general section.png' | relative_url }}" alt="General Settings" class="guide-image" data-title="General Settings">
    <figcaption class="guide-caption">General Settings tab</figcaption>
  </figure>

  <h3>Start Date</h3>

  <p>Choose when your campaign begins. The era affects available technology and the political landscape.</p>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-calendar-alt"></i> Recommended for New Players</div>
    <p class="mb-0">Late Succession Wars (around <strong>3025</strong>). No advanced technology to worry about, but plenty of interesting political events in the following decades.</p>
  </div>

  <h3>Unit Configuration</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Setting</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Unit Name</strong></td>
        <td>Your company's name (can be randomized)</td>
      </tr>
      <tr>
        <td><strong>Unit Faction</strong></td>
        <td>Who you represent (Mercenary recommended)</td>
      </tr>
      <tr>
        <td><strong>{% include glossary_term.html id="force_reputation" text="Reputation" %}</strong></td>
        <td>How reputation is calculated (keep CamOps default)</td>
      </tr>
      <tr>
        <td><strong>Insignia</strong></td>
        <td>Your unit's icon</td>
      </tr>
      <tr>
        <td><strong>Camo</strong></td>
        <td>Your unit's color scheme</td>
      </tr>
    </tbody>
  </table>
</section>

<section id="hr">
  <h2><i class="fas fa-users"></i> Human Resources</h2>

  <p>These settings control personnel management.</p>

  <h3>Personnel - General</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Recommendation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>{% include glossary_term.html id="edge" text="Edge" %}</strong></td>
        <td>Optional "luck" points from A Time of War. Disable for grittier gameplay.</td>
      </tr>
      <tr>
        <td><strong>SPAs</strong></td>
        <td>Special Pilot Abilities add variety. Enable with a limit (2-3 per character).</td>
      </tr>
    </tbody>
  </table>

  <h3>Personnel - Awards</h3>
  <p>Keep defaults. If you disable Edge, set award bonuses to XP only.</p>

  <h3>Personnel - Medical</h3>
  <p>Fine-tune if doctors over/underperform. <strong>Advanced Medical</strong> includes traumas, illnesses, and amputations.</p>

  <h3>Personnel - Personnel Information</h3>
  <p>Enable all tracking/logging options. Slows down large units (200+ personnel) but provides useful statistics for smaller companies.</p>

  <h3>Personnel - Prisoners &amp; Civilians</h3>
  <ul>
    <li><strong>Capture Style "MekHQ"</strong> adds roleplay events even if you don't take prisoners</li>
    <li>Uncheck "Random addition" for civilians unless you want surprise arrivals</li>
  </ul>

  <h3>Personnel - Biography</h3>
  <p>Notable settings:</p>
  <ul>
    <li><strong>Backgrounds tab:</strong> Enable clan origins if desired</li>
    <li><strong>Education module:</strong> Recommended for roleplay value—send personnel to academies and bootcamps instead of just spending XP</li>
  </ul>

  <h3>Rank Systems</h3>
  <p>Choose a rank structure matching your unit's origin. Custom ranks can also be created.</p>

  <h3>Relationships</h3>
  <p>Enable for marriages, divorces, and procreation. Check "Determine Father at Birth" and "Log Name Changes" for proper records.</p>

  <h3>Turnover and Retention</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>{% include glossary_term.html id="fatigue" text="Fatigue" %}</strong></td>
        <td>Models exhaustion from deployment. Adds depth but can be disabled.</td>
      </tr>
      <tr>
        <td><strong>{% include glossary_term.html id="turnover" text="Turnover" %}</strong></td>
        <td>Controls when personnel quit. Quarterly checks are manageable; annually is easier.</td>
      </tr>
      <tr>
        <td><strong>Hide Loyalty</strong></td>
        <td>Adds intrigue—you won't know who plans to leave.</td>
      </tr>
    </tbody>
  </table>
</section>

<section id="advancement">
  <h2><i class="fas fa-chart-line"></i> Advancement</h2>

  <h3>Awards and Randomization</h3>
  <p>Keep defaults initially. The <strong>Advancement Multiplier</strong> (default 1.0) affects XP costs—set to 0.5 for faster progression.</p>

  <h3>Skills</h3>
  <p>Keep defaults for your first campaigns.</p>

  <h3>Abilities</h3>
  <p>All SPAs should be checked. Uncheck "unofficial" abilities if you prefer pure rulebook options.</p>
</section>

<section id="logistics">
  <h2><i class="fas fa-boxes"></i> Logistics</h2>

  <h3>Supplies and Acquisition</h3>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Logistics.png' | relative_url }}" alt="Logistics Settings" class="guide-image" data-title="Logistics Settings">
    <figcaption class="guide-caption">Logistics Settings tab</figcaption>
  </figure>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Setting</th>
        <th>Recommendation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>{% include glossary_term.html id="delivery_times" text="Delivery Time" %}</strong></td>
        <td>Change from Months to <strong>Weeks</strong> for faster resupply</td>
      </tr>
      <tr>
        <td><strong>Autologistics</strong></td>
        <td>Set parts to 25-50%, armor/ammo to 100%+</td>
      </tr>
      <tr>
        <td><strong>{% include glossary_term.html id="parts_availability" text="Planetary Acquisitions" %}</strong></td>
        <td>Enable for realism (harder to find tech in the Periphery)</td>
      </tr>
      <tr>
        <td><strong>Clan Parts</strong></td>
        <td>Disable if not playing as Clans</td>
      </tr>
    </tbody>
  </table>

  <h3>{% include glossary_term.html id="maintenance" text="Maintenance" %} and Repairs</h3>

  <p>If {% include glossary_term.html id="maintenance" text="maintenance" %} feels too punishing:</p>
  <ul>
    <li>Set <strong>Maintenance Modifier</strong> to -2 (easier rolls)</li>
    <li>Increase maintenance cycle beyond 7 days</li>
    <li>Untick "Use Era Modifiers" for repairs</li>
  </ul>

  <div class="guide-callout guide-callout-warning">
    <div class="callout-title"><i class="fas fa-balance-scale"></i> Balance</div>
    <p class="mb-0">Making everything too easy removes challenge. Try defaults first.</p>
  </div>
</section>

<section id="operations">
  <h2><i class="fas fa-briefcase"></i> Operations</h2>

  <h3>Finances</h3>

  <p>For hardcore accounting, enable:</p>
  <ul>
    <li>Pay for Overhead</li>
    <li>Pay for Maintenance</li>
    <li>Recruitment costs</li>
    <li>Taxes</li>
  </ul>
  <p>Disable these if money is too tight.</p>

  <h3>Markets</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Market</th>
        <th>Recommendation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Contract Market</strong></td>
        <td>Lower max salvage to 50% for realism</td>
      </tr>
      <tr>
        <td><strong>Personnel Market</strong></td>
        <td>Enable "Hiring Halls only" for realism</td>
      </tr>
      <tr>
        <td><strong>Unit Market</strong></td>
        <td>Disable if you prefer pure acquisition rolls</td>
      </tr>
    </tbody>
  </table>

  <h3>Digital GMs (StratCon)</h3>

  <figure class="guide-figure">
    <img src="{{ '/assets/images/first_campaign_mhq/Configuring Campaign Rules.png' | relative_url }}" alt="StratCon Settings" class="guide-image" data-title="StratCon Settings">
    <figcaption class="guide-caption">StratCon Settings</figcaption>
  </figure>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-robot"></i> Enable StratCon</div>
    <p class="mb-0">Enable StratCon for single-player campaigns against the computer.</p>
  </div>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Setting</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Difficulty</strong></td>
        <td>Start with Ultra-Green for first playthrough</td>
      </tr>
      <tr>
        <td><strong>Unit Ratios</strong></td>
        <td>1:1:1 generates meks, vehicles, and mixed forces equally</td>
      </tr>
      <tr>
        <td><strong>Weather/Planetary Conditions</strong></td>
        <td>Disable for simpler battles; enable for variety</td>
      </tr>
    </tbody>
  </table>
</section>

<section id="final">
  <h2><i class="fas fa-check-circle"></i> Final Touches</h2>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Save Your Preset</h4>
      <p>Go to <strong>File &gt; Save Preset</strong> for future campaigns</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Apply Settings</h4>
      <p>Click <strong>Apply Settings</strong> to finalize</p>
    </div>
  </div>

  <h3>MekHQ Options</h3>

  <p>Go to <strong>File &gt; MekHQ Options</strong> and configure:</p>

  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-bell-slash"></i> Nag Options
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Untick all (show all reminder dialogs while learning)</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-sun"></i> New Day Options
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p class="mb-0">Enable all automation features</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-save"></i> Autosave Options
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ul class="mb-0 ps-3">
            <li>Increase autosaves to 10</li>
            <li>Enable save before scenario start</li>
            <li>Enable save before mission conclusion</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="battle-rules">
  <h2><i class="fas fa-crosshairs"></i> Configuring Battle Rules (Optional)</h2>

  <p>Access via <strong>File &gt; MegaMek Options</strong> to configure tactical combat rules.</p>

  <h3>Double Blind (More Realistic Vision)</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Recommendation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TacOps Double Blind</td>
        <td><i class="fas fa-check text-success"></i> Enable</td>
      </tr>
      <tr>
        <td>TacOps Sensor Rules</td>
        <td><i class="fas fa-check text-success"></i> Enable</td>
      </tr>
      <tr>
        <td>Blind Drop</td>
        <td><i class="fas fa-check text-success"></i> Enable</td>
      </tr>
      <tr>
        <td>No Double Blind Messages</td>
        <td><i class="fas fa-check text-success"></i> Enable</td>
      </tr>
      <tr>
        <td>Exclusive double blind deployment zones</td>
        <td><i class="fas fa-times text-danger"></i> Disable (doesn't work well with StratCon)</td>
      </tr>
    </tbody>
  </table>

  <h3>Allowed Units</h3>
  <ul>
    <li><i class="fas fa-check text-success"></i> Check "Variable tech level"</li>
    <li><i class="fas fa-check text-success"></i> Check "Allow invalid unit designs"</li>
  </ul>

  <h3>Combat Rules</h3>
  <p>Search "TacOps" in the options for the full list. Notable options:</p>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Careful Stand</td>
        <td>Slower but more reliable standing</td>
      </tr>
      <tr>
        <td>Starting Fires</td>
        <td>Lasers can ignite forests</td>
      </tr>
      <tr>
        <td>Backward Movement</td>
        <td>Move backwards on slopes</td>
      </tr>
      <tr>
        <td>Minefields</td>
        <td>Enable minefield use</td>
      </tr>
    </tbody>
  </table>

  <h3>Miscellaneous</h3>
  <ul>
    <li>"Flamers per BattleMech Manual" - More viable flamers</li>
    <li>"Infantry don't count for movement initiative"</li>
    <li>"Through-armor criticals will float"</li>
  </ul>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-sync"></i> Flexibility</div>
    <p class="mb-0">All options can be changed at any time during the campaign.</p>
  </div>
</section>
