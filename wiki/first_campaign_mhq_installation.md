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
    <li><a href="#migrating">Moving Campaigns Between Versions</a></li>
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
      <p>MegaMek uses <code>.tar.gz</code> archives—a single download that works on Windows, Mac, and Linux.</p>
      <div class="guide-callout guide-callout-warning">
        <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Use 7-Zip on Windows</div>
        <p>The Windows built-in extractor struggles with MekHQ's 16,000+ files and can fail or corrupt the extraction.</p>
        <p class="mb-0">Download <a href="https://www.7-zip.org/" target="_blank"><strong>7-Zip</strong></a> (free)—it's significantly faster, more stable, and handles large archives properly.</p>
      </div>
      <p>Extract to a simple path like <code>C:\Games\MekHQ</code> (avoid paths with spaces or special characters).</p>
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
          <i class="fas fa-bug"></i> {% include glossary_term.html id="sentry" text="Anonymous Error Reporting" %}
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <p>Help developers fix bugs by enabling {% include glossary_term.html id="sentry" text="Sentry" %}, our anonymous error reporting system.</p>
          <p class="mb-0">Edit <code>sentry.properties</code> and change <code>enabled=false</code> to <code>enabled=true</code>.</p>
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
<pre style="color: #ffd700; margin: 0;"><code>MekHQ/
<span style="color: #ffc107;">├── bin/</span>                  Program binaries
<span style="color: #ffc107;">├── campaigns/</span>            <span style="color: #28a745;">← Save files go here</span>
<span style="color: #ffc107;">├── data/</span>                 Game data files
<span style="color: #ffc107;">├── docs/</span>                 <span style="color: #28a745;">← Documentation (important!)</span>
<span style="color: #ffc107;">├── lib/</span>                  Java libraries
<span style="color: #ffc107;">├── logs/</span>                 Log files for troubleshooting
<span style="color: #ffc107;">├── mmconf/</span>               Configuration files
<span style="color: #ffc107;">├── userdata/</span>             User customizations
├── MegaMek.exe           Tactical battle simulator
├── MegaMek.l4j.ini       MegaMek memory settings
├── MegaMekLab.exe        Unit editor
├── MegaMekLab.l4j.ini    MegaMekLab memory settings
├── MekHQ.exe             <span style="color: #28a745;">← Campaign manager (start here)</span>
├── MekHQ.l4j.ini         MekHQ memory settings
├── {% include glossary_term.html id="sentry" text="sentry.properties" %}      <span style="color: #28a745;">← Error reporting (opt-in)</span>
└── SubmitBug.html        Bug reporting instructions</code></pre>
    </div>
  </div>

  <div class="guide-callout guide-callout-tip mt-4">
    <div class="callout-title"><i class="fas fa-book"></i> Documentation</div>
    <p class="mb-0">The <code>docs</code> folder contains extensive documentation on MekHQ features, especially those not covered in official rulebooks (like personnel turnover and StratCon).</p>
  </div>
</section>

<section id="user-files">
  <h2><i class="fas fa-user-cog"></i> User Files Directory</h2>

  <div class="guide-callout guide-callout-tip">
    <div class="callout-title"><i class="fas fa-star"></i> Highly Recommended</div>
    <p>Setting up a User Files Directory is <strong>one of the most helpful things you can do</strong> when using MegaMek. It makes upgrading between versions painless—just point your new installation to the same folder and all your custom content is instantly available.</p>
    <p class="mb-0">Take 5 minutes to set this up now and save yourself hours of frustration later!</p>
  </div>

  <p>Set up a custom folder for your personal content (camos, portraits, custom units) that persists between updates and works across all three programs.</p>

  <h3>Why Use a User Directory?</h3>

  <div class="row g-3 mb-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(40, 167, 69, 0.3);">
        <div class="card-body" style="color: var(--text-color);">
          <h5 style="color: #28a745;"><i class="fas fa-folder-open"></i> Centralized Storage</h5>
          <p class="mb-0">Keep all customizations in one place instead of scattered across multiple installations.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(0, 123, 255, 0.3);">
        <div class="card-body" style="color: var(--text-color);">
          <h5 style="color: #007bff;"><i class="fas fa-sync-alt"></i> Easy Upgrades</h5>
          <p class="mb-0">Point new installations to your user folder—no need to copy files each time.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 193, 7, 0.3);">
        <div class="card-body" style="color: var(--text-color);">
          <h5 style="color: #ffc107;"><i class="fas fa-share-alt"></i> Multi-Version Access</h5>
          <p class="mb-0">Share resources across different versions without duplication.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(23, 162, 184, 0.3);">
        <div class="card-body" style="color: var(--text-color);">
          <h5 style="color: #17a2b8;"><i class="fas fa-cloud"></i> Cloud Compatible</h5>
          <p class="mb-0">Works with OneDrive, Dropbox, or Google Drive (files must sync locally).</p>
        </div>
      </div>
    </div>
  </div>

  <h3>Configuration by Program</h3>

  <table class="guide-table">
    <thead>
      <tr>
        <th>Program</th>
        <th>How to Set</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>MekHQ</strong></td>
        <td><strong>File &gt; MekHQ Options &gt; Miscellaneous</strong> &gt; User Files Directory</td>
      </tr>
      <tr>
        <td><strong>MegaMek</strong></td>
        <td><strong>View &gt; Client Settings</strong> &gt; User Files Directory</td>
      </tr>
      <tr>
        <td><strong>MegaMekLab</strong></td>
        <td><strong>File &gt; Options</strong> &gt; User Files Directory</td>
      </tr>
    </tbody>
  </table>

  <p>Set the path to a folder outside your installation (e.g., <code>C:\Games\MegaMek_UserData</code>). Restart the program after changing.</p>

  <h3>Required Folder Structure</h3>

  <div class="card" style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 215, 0, 0.2);">
    <div class="card-body">
<pre style="color: #ffd700; margin: 0;"><code>MegaMek_UserData/
├── <span style="color: #aaa;">*.ttf</span>                       Fonts (anywhere in root)
├── <span style="color: #aaa;">*.mtf, *.blk</span>                Custom units (anywhere in root)
└── <span style="color: #ffc107;">data/</span>
    ├── <span style="color: #ffc107;">campaignPresets/</span>        Campaign preset files
    ├── <span style="color: #ffc107;">images/</span>
    │   ├── <span style="color: #ffc107;">camo/</span>               Camouflage patterns
    │   ├── <span style="color: #ffc107;">portraits/</span>          Personnel portraits
    │   └── <span style="color: #ffc107;">fluff/</span>
    │       ├── <span style="color: #ffc107;">Mek/</span>            Mek fluff images
    │       ├── <span style="color: #ffc107;">Vehicle/</span>        Vehicle fluff images
    │       └── <span style="color: #ffc107;">...</span>             Other unit types
    └── <span style="color: #ffc107;">universe/</span>
        ├── ranks.xml           Custom rank definitions
        └── <span style="color: #ffc107;">awards/</span>             Custom award .xml files</code></pre>
    </div>
  </div>

  <div class="guide-callout guide-callout-warning mt-4">
    <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Limitation</div>
    <p class="mb-0">Map boards cannot be stored in the user directory due to program load mechanics. Keep boards in your installation's <code>data/boards/</code> folder.</p>
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

<section id="migrating">
  <h2><i class="fas fa-exchange-alt"></i> Moving Campaigns Between Versions</h2>

  <div class="guide-callout guide-callout-danger">
    <div class="callout-title"><i class="fas fa-exclamation-circle"></i> Critical: COPY, Never Move</div>
    <p><strong>MekHQ is NOT backward compatible.</strong> Once a campaign is loaded in a newer version, it cannot be opened in older versions.</p>
    <p class="mb-0">Always keep your original campaign files intact. Copy them to the new version—never move or overwrite.</p>
  </div>

  <h3>Step-by-Step Migration</h3>

  <div class="guide-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Finish Current Work</h4>
      <p>Complete any ongoing contracts, save your campaign, and exit MekHQ completely.</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Backup Your Files</h4>
      <p><strong>This step is critical to prevent data loss.</strong> Copy your campaign files (<code>.cpnx</code>) to a safe backup location before proceeding.</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Install New Version Separately</h4>
      <p>Extract the new version to a <strong>different folder</strong>—don't overwrite your existing installation. This lets you keep the old version as a fallback.</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Copy Campaign Files</h4>
      <p>Copy (not move!) your <code>.cpnx</code> files to the new version's <code>campaigns</code> folder.</p>
      <div class="guide-callout guide-callout-warning">
        <div class="callout-title"><i class="fas fa-ban"></i> Do NOT Copy These</div>
        <p class="mb-0">Never copy MegaMek saves or preference/config files between versions—they can cause serious stability issues.</p>
      </div>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Initialize in New Version</h4>
      <p>Load your campaign in the new version and <strong>advance at least one game day</strong>. This lets MekHQ update internal data structures.</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">6</div>
    <div class="step-content">
      <h4>Re-save Custom Presets</h4>
      <p>If you use custom campaign presets, re-save them in the new version to update their format.</p>
    </div>
  </div>

  <div class="guide-step">
    <div class="step-number">7</div>
    <div class="step-content">
      <h4>Restart</h4>
      <p>Exit and restart MekHQ to finalize the migration.</p>
    </div>
  </div>

  <div class="guide-callout guide-callout-info">
    <div class="callout-title"><i class="fas fa-shield-alt"></i> Best Practice</div>
    <p class="mb-0">Keep your old installation until you've verified everything works in the new version. This gives you a fallback if anything goes wrong.</p>
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
