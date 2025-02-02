---
layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.50.03 Release Notes"
date: 2025-02-02
categories: release
---

Hi Everyone,

Welcome to 0.50.03; Keeping with the recent pattern this is a massive release. We have a record number of developers and contributors working on the projects. In fact the most I've seen in my 13 years with the projects. As I've mentioned in the past we can only highlight some of the really big ticket items for each project, and the change logs are too large to include in the posts. Please take a look at the individual change log links, or look at the complete changes in the change log section links.  But let me call out some of the big stuff.

---
## Release Highlights

### MegaMek
- Numerous improvements to the Minimap including an improved preview, display sensor ranges and facing, and added some customization options.([#6436](https://github.com/MegaMek/megamek/pull/6436)),([#6446](https://github.com/MegaMek/megamek/pull/6446)),([#6471](https://github.com/MegaMek/megamek/pull/6471))
- Added headless client and Commander GUI ([#6418](https://github.com/MegaMek/megamek/pull/6418))
<div style="display:flex; flex-wrap:wrap; gap:10px;">
  <a href="https://imgur.com/wfoEdVt" target="_blank">
    <img src="https://i.imgur.com/wfoEdVt.jpg" alt="Image 1" style="max-width:100%; height:auto;">
  </a>
  <a href="https://imgur.com/Njt1XTJ" target="_blank">
    <img src="https://i.imgur.com/Njt1XTJ.jpg" alt="Image 2" style="max-width:100%; height:auto;">
  </a>
  <a href="https://imgur.com/WzcDDDO" target="_blank">
    <img src="https://i.imgur.com/WzcDDDO.jpg" alt="Image 3" style="max-width:100%; height:auto;">
  </a>
</div>
- Implemented errata around Aero Units and visual range. ([#2457](https://github.com/MegaMek/megamek/pull/2457))
- Improved bombing and strafing the ground with no LOS ([#1072](https://github.com/MegaMek/megamek/pull/1072))
- Numerous fixes around Dropships.
- Princess has been picking up classes again. Resulting in fixing to pathing, more willingness to scout in double blind, and better hazard awareness
- There is a new approach to players managing Princess, you need to see the PR for specifics on this. ([#6418](https://github.com/MegaMek/megamek/pull/6418))
- ACAR has had numerous improvements and we've introduced Princess ACAR (PACAR) version of ACAR which is covered in the above PR. ([#5812](https://github.com/MegaMek/mekhq/pull/5812))
- dgorsmans continues to improve the Force Generator tables. ([#6387](https://github.com/MegaMek/megamek/pull/6387)),([#6394](https://github.com/MegaMek/megamek/pull/6394)),([#6408](https://github.com/MegaMek/megamek/pull/6408))
- You may have noticed the MegaMek theme had a nasty habit of defaulting to the Capellan theme and then occasionally resetting itself back to Capellan. Well, the Chancellor has been ousted.

### MegaMekLab
- A huge amount of bug fixes and improvements.
- This is a huge game changer for MegaMeklab - Allow opening multiple units in tabs ([#1673](https://github.com/MegaMek/megameklab/pull/1673))
  <img src="https://i.imgur.com/5tQcQ38.jpg" alt="Tabbed MegaMekLab" style="max-width:100%; height:auto;">


### MekHQ
- Implemented Campaign Options IIC ([#4963](https://github.com/MegaMek/mekhq/pull/4963))
- <img src="assets/images/gifs/co iic.gif" alt="Dynamic Image" style="max-width:100%; height:auto;">


- Issue 3650 – RFE Add Ability to Link Units in MekHQ ([#5634](https://github.com/MegaMek/mekhq/pull/5634))
- Numerous bug fixes for some bigger MekHQ issues.
- Leadership Units & Support Point Scarcity Hot Fixes ([#5577](https://github.com/MegaMek/mekhq/pull/5577))
- Updated Resupply & Contract Automation Dialogs to Current Format; Fixed Multiple Resupply Bugs ([#5598](https://github.com/MegaMek/mekhq/pull/5598))
- Added Warning for Campaign Dates Before 2470 ([#5680](https://github.com/MegaMek/mekhq/pull/5680))
- Removed Legacy AtB Scenarios from StratCon Campaigns ([#5790](https://github.com/MegaMek/mekhq/pull/5790))
- Added Better Tooltips for Force Roles ([#5597](https://github.com/MegaMek/mekhq/pull/5597))
- Reworked Morale Logic ([#5669](https://github.com/MegaMek/mekhq/pull/5669))
- MegaMek Issue 6416: Ghostbusting – Reset isDestroyed for entities when returning to MekHQ ([#5803](https://github.com/MegaMek/mekhq/pull/5803))

# Technical Stuff and Social Media
---
## Java 17 is **Required** for all 0.50.x Releases
---

Starting with version 0.50.0-Development, Java 17 will be **REQUIRED** to play. We’ve updated our guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) with more detailed instructions.

It’s crucial to read the directions carefully, especially Step 6, which covers a recent change to the Adoptium installer. Make sure to select “Install for all users of this machine” in the Installation Scope.

We will continue using Java 17 until Fall 2026. If you choose to use a Java version beyond 17, it isn’t officially supported, and our standard response for issues will be to revert to Java 17. We recommend upgrading to Java 17 before the new release; if you are running 0.49.12-Development or later, it will run on Java 17.

---

## User Data Directory for MegaMek, MegaMekLab, and MekHQ

We've added a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.

### Key Points:

- **Set a Custom Directory**: Choose any location on your computer (e.g., `D:/myMMStuff`) to keep your game resources.

- **File Placement**:

  - Fonts and units (.mtf, .blk) can be placed anywhere within this directory.

  - Camo images in `/data/images/camo/`.

  - Portrait images in `/data/images/portraits/`.

  - Unit fluff images in `/data/images/fluff/<unit type>/`.

  - Rank and award definition files (.xml) in `/data/universe/`.

- **Consistent Access**: Resources in this directory are usable across different game versions and modules without needing to relocate them for each new install.

- **Implementation**: Set up this directory via the client settings. A game restart is required for changes to take effect.

---

## Important: MekHQ Campaign Update Instructions

It is critical to follow these steps to ensure the integrity of your MekHQ campaign when updating between versions. Failure to follow these steps can result in the corruption of your campaign file.

Treat each release as stand-alone; **Copy, never Move** your data forward from older versions. MekHQ is **NOT** backward compatible.

1. You **MUST** complete all ongoing contracts in your current campaign, save, and exit the program.

2. **Make a backup of your campaign and custom files. This is a critical step to prevent data loss!**

3. **DO NOT COPY** MegaMek saves or any preference file from a different version to avoid compatibility issues.

4. Update MekHQ to the latest version. **NEVER** overwrite the existing folder; always keep each version in its own folder.

5. In the new version, load your save file in MekHQ and advance the game by one day.

6. Re-save any custom presets to ensure they are updated with the new version's settings.

7. Exit MekHQ and restart the application to complete the update process.

Following these steps will ensure that your campaign data initializes correctly and avoids potential issues. This process is essential for maintaining campaign stability.

---

## A Few Reminders

### The Milestone System Summary

Please see [this link](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) for details on the replacement for the old Stable and Development cycle.

### Pre-Release Notes for 0.50.0-Development Cycle (August 25, 2024)

This post covers some of the key changes that are happening as we go into the 0.50.xx-Development cycle. Read more [here](https://megamek.org/2024/08/25/Pre-Release-Notes-for-0.50.0-Development.html).

### State of the Universe (January 19, 2024)

If you haven't given the [State of the Universe](https://bg.battletech.com/forums/index.php?topic=83774.0) a read, please do. There's lots of information in there that is still recent and relevant.

---

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

---

### Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

---

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log

**Full Changelog**: [v0.50.02...v0.50.03](https://github.com/MegaMek/megamek/compare/v0.50.02...v0.50.03)  
[Download](https://github.com/MegaMek/megamek/releases/download/v0.50.03/MegaMek-0.50.03.tar.gz)

### MegaMekLab Change Log

**Full Changelog**: [v0.50.02...v0.50.03](https://github.com/MegaMek/megameklab/compare/v0.50.02...v0.50.03)  
[Download](https://github.com/MegaMek/megameklab/releases/download/v0.50.03/MegaMekLab-0.50.03.tar.gz)

### MekHQ Change Log

**Full Changelog**: [v0.50.02...v0.50.03](https://github.com/MegaMek/mekhq/compare/v0.50.02...v0.50.03)  
[Download](https://github.com/MegaMek/mekhq/releases/download/v0.50.03/MekHQ-0.50.03.tar.gz)
