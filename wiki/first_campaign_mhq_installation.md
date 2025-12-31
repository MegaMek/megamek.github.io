---
layout: guide
title: "Installation"
description: "How to download, install, and configure MekHQ on Windows"
guide_section: installation
progress: 15
next_page: /wiki/first_campaign_mhq_setup
next_title: Campaign Setup
toc: |
  <ul>
    <li><a href="#downloading">Downloading MekHQ</a></li>
    <li><a href="#installation">Installation Steps</a></li>
    <li><a href="#configuration">Optional Configuration</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#user-files">User Files Directory</a></li>
    <li><a href="#reporting">Reporting Issues</a></li>
  </ul>
---

<div class="guide-callout guide-callout-info">
  <div class="callout-title"><i class="fab fa-windows"></i> Windows Installation</div>
  <p class="mb-0">This section covers installation on Windows machines. For other operating systems, please see the <a href="https://github.com/MegaMek/megamek/wiki" target="_blank">MegaMek Wiki</a>.</p>
</div>

<section id="downloading">
  <h2><i class="fas fa-download"></i> Downloading MekHQ</h2>

  <p>Download the MekHQ Suite (which includes MegaMek and MegaMekLab) from <a href="https://megamek.org" target="_blank">megamek.org</a>.</p>

  <h3>Release Types</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Release Type</th>
        <th>Description</th>
        <th>Recommended For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong><i class="fas fa-star text-warning"></i> Milestone</strong></td>
        <td>A stable, polished version considered the most reliable by developers</td>
        <td>Most players</td>
      </tr>
      <tr>
        <td><strong><i class="fas fa-code-branch"></i> Development</strong></td>
        <td>Feature-complete releases with newer features, but may contain bugs</td>
        <td>Testing new features</td>
      </tr>
      <tr>
        <td><strong><i class="fas fa-moon"></i> Nightly Builds</strong></td>
        <td>Latest development versions from <a href="https://github.com/MegaMek/mekhq/releases" target="_blank">GitHub</a></td>
        <td>Advanced users reporting bugs</td>
      </tr>
    </tbody>
  </table>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-thumbs-up"></i> Recommendation</div>
    <p class="mb-0">If you're following this guide, we recommend starting with the latest <strong>Milestone</strong> or <strong>Development</strong> build.</p>
  </div>
</section>

<section id="installation">
  <h2><i class="fas fa-cogs"></i> Installation Steps</h2>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Install Java 17 (Required)</h4>
      <p>Follow the instructions on megamek.org (usually displayed prominently).</p>
      <div class="guide-callout guide-callout-warning">
        <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Important</div>
        <p class="mb-0">32-bit machines must use Java 17 LTS. Java 21+ dropped 32-bit support entirely.</p>
      </div>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Extract the Archive</h4>
      <p>Use <a href="https://www.7-zip.org/" target="_blank">7-Zip</a> rather than Windows' built-in extractor.</p>
      <p>Extract to a simple path like <code>C:\Games\MegaMek</code></p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Run the Executables</h4>
      <table class="guide-table">
        <thead>
          <tr>
            <th>Executable</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>MekHQ.exe</code></td>
            <td>Campaign management</td>
          </tr>
          <tr>
            <td><code>MegaMek.exe</code></td>
            <td>Tactical battles</td>
          </tr>
          <tr>
            <td><code>MegaMekLab.exe</code></td>
            <td>Unit customization</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section id="configuration">
  <h2><i class="fas fa-sliders-h"></i> Optional Configuration</h2>

  <p>Before opening the program, you can optionally configure:</p>

  <div class="row g-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-bug"></i> Anonymous Error Reporting
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p>Help developers by sending anonymous error data.</p>
          <p class="mb-0">Edit <code>sentry.properties</code> and change the line from <code>false</code> to <code>true</code>.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 215, 0, 0.2);">
        <div class="card-header" style="background: rgba(255, 215, 0, 0.1); color: var(--accent-color);">
          <i class="fas fa-memory"></i> Memory Allocation
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p>Increase memory allocation if needed for larger games.</p>
          <p class="mb-0">Edit the <code>.ini</code> files. See the <a href="https://megamek.org" target="_blank">FAQ on megamek.org</a> for details.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="folder-structure">
  <h2><i class="fas fa-folder-tree"></i> Folder Structure</h2>

  <p>After extraction, your folder should contain:</p>

  <div class="card" style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 215, 0, 0.2);">
    <div class="card-body">
<pre style="color: #ffd700; margin: 0;"><code>MegaMek/
├── MekHQ.exe
├── MegaMek.exe
├── MegaMekLab.exe
├── <span style="color: #28a745;">docs/</span>           ← Documentation (important!)
├── <span style="color: #17a2b8;">data/</span>           ← Game data files
├── <span style="color: #ffc107;">campaigns/</span>      ← Save files go here
└── ...</code></pre>
    </div>
  </div>

  <div class="guide-callout guide-callout-tip mt-4">
    <div class="callout-title"><i class="fas fa-book"></i> Documentation</div>
    <p class="mb-0">The <code>docs</code> folder contains extensive documentation on MekHQ features, especially those not covered in official rulebooks (like personnel turnover and StratCon).</p>
  </div>
</section>

<section id="user-files">
  <h2><i class="fas fa-user-cog"></i> User Files Directory</h2>

  <p>You can set up a custom folder for your personal content (camos, portraits, custom units) that persists between MekHQ updates:</p>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Open Settings</h4>
      <p>Go to <strong>File &gt; MekHQ Options &gt; Miscellaneous</strong></p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Set User Files Directory</h4>
      <p>Set a <strong>User Files Directory</strong> outside your MekHQ folder (e.g., <code>C:\Games\MegaMek_DATA</code>)</p>
    </div>
  </div>

  <h3>File Placement in User Directory</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Content Type</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fonts, units (.mtf, .blk)</td>
        <td>Anywhere in directory</td>
      </tr>
      <tr>
        <td>Camo images</td>
        <td><code>/data/images/camo/</code></td>
      </tr>
      <tr>
        <td>Portrait images</td>
        <td><code>/data/images/portraits/</code></td>
      </tr>
      <tr>
        <td>Unit fluff images</td>
        <td><code>/data/images/fluff/&lt;unit type&gt;/</code></td>
      </tr>
      <tr>
        <td>Rank/award definitions</td>
        <td><code>/data/universe/</code></td>
      </tr>
      <tr>
        <td>Campaign presets</td>
        <td><code>/data/campaignPresets/</code></td>
      </tr>
    </tbody>
  </table>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-sync-alt"></i> Easy Upgrades</div>
    <p class="mb-0">This makes upgrading between versions much easier—just point the new installation to your user folder.</p>
  </div>

  <h3>Video Tutorial: Upgrading MekHQ</h3>

  <div class="guide-video">
    <div class="video-header">
      <i class="fab fa-youtube"></i> MekHQ Tutorial — Upgrading MekHQ Versions
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/WwEDhCmDV-I?si=aRv5OtroIninwJb4" title="MekHQ Tutorial -- Upgrading MekHQ versions" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section id="reporting">
  <h2><i class="fas fa-bug"></i> Reporting Issues</h2>

  <p>If you find a bug or want to suggest an enhancement:</p>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Discuss on Discord First</h4>
      <p>Developers may already be working on it. Join us on <a href="https://discord.gg/megamek" target="_blank">Discord</a>.</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Choose the Correct Tracker</h4>
      <table class="guide-table">
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Tracker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Battle engine bugs</td>
            <td><a href="https://github.com/MegaMek/megamek/issues" target="_blank">MegaMek Issues</a></td>
          </tr>
          <tr>
            <td>Unit editor bugs</td>
            <td><a href="https://github.com/MegaMek/megameklab/issues" target="_blank">MegaMekLab Issues</a></td>
          </tr>
          <tr>
            <td>Campaign management bugs</td>
            <td><a href="https://github.com/MegaMek/mekhq/issues" target="_blank">MekHQ Issues</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Submit Your Report</h4>
      <ul>
        <li><strong>Check for duplicates</strong> before submitting</li>
        <li><strong>Follow the template</strong> - Clear information helps resolve issues faster</li>
        <li><strong>Tag feature requests</strong> with "RFE" in the title</li>
      </ul>
    </div>
  </div>
</section>
