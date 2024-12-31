---
layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.50.02 Release Notes"
date: 2024-12-30
categories: release
---

Hi Everyone,

Welcome to 0.50.02; this is another massive release. With so much code comes challenges: while fixing bugs, modernizing code, and introducing new features, new issues can emerge. We anticipate the next few releases will have some issues, but don't let that deter you from using the releases—just remember to keep backups of your files. In fact, we encourage you to use this release to help us find and squash the bugs!

---

### Let's dive into all the details!
Keep in mind these are just highlights and you'd need to look at the change logs below for everything. 

## Release Highlights for MegaMek
### Game Experience Improvements
- New and Improved Game Master Tools ([#6183](https://github.com/MegaMek/megamek/pull/6183)),([#6223](https://github.com/MegaMek/megamek/pull/6223)),([#6245](https://github.com/MegaMek/megamek/pull/6245))
- You can now pause Princess-only games for better control ([#6186](https://github.com/MegaMek/megamek/pull/6186))
- Advanced board search with board tagging added to the lobby - finding that perfect map just got easier! ([#6196](https://github.com/MegaMek/megamek/pull/6196)),([#6216](https://github.com/MegaMek/megamek/pull/6216))
- Strategic retreat option at movement phase end ([#6230](https://github.com/MegaMek/megamek/pull/6230))
- Added heat indicators in weapon display to help with heat management ([#6321](https://github.com/MegaMek/megamek/pull/6321))
- Improved path visibility under units ([#6312](https://github.com/MegaMek/megamek/pull/6312))
- Team information now shown in BV reports ([#6222](https://github.com/MegaMek/megamek/pull/6222))
- Unit list printing capability added ([#6190](https://github.com/MegaMek/megamek/pull/6190))
- RISC laser pulse module now available ([#6209](https://github.com/MegaMek/megamek/pull/6209))
- Dirt and gravel roads with proper effects (no maps with this yet) ([#6246](https://github.com/MegaMek/megamek/pull/6246))
- Updated partial cover and hull down bonuses ([#6307](https://github.com/MegaMek/megamek/pull/6307))
- Battle Armor Plasma Rifles now properly apply TacOps rules ([#6237](https://github.com/MegaMek/megamek/pull/6237))
- Corrected IR Sensor rules per TO:AR errata ([#6227](https://github.com/MegaMek/megamek/pull/6227))
- Updated force generator calculations ([#6244](https://github.com/MegaMek/megamek/pull/6244))
- Princess went back to Blackjack to run the obstacle course to better understand ways to kill without breaking herself ([#6311](  https://github.com/MegaMek/megamek/pull/6311))

### Bug Fixes
- Fixed deployment issues with combined arms ([#6292](https://github.com/MegaMek/megamek/pull/6292))
- Corrected aerospace unit placement and movement ([#6269](https://github.com/MegaMek/megamek/pull/6269))
- Fixed Nova CEWS BV calculations ([#6304](https://github.com/MegaMek/megamek/pull/6304))
- Flak weapons can no longer make aimed shots at immobile targets ([#6298](https://github.com/MegaMek/megamek/pull/6298))
- Offboard artillery can't unjam critted weapons anymore ([#6286](https://github.com/MegaMek/megamek/pull/6286))
- Fixed infantry field weapons restoration ([#6291](https://github.com/MegaMek/megamek/pull/6291))
- Corrected cargo bay minimum doors ([#6322](https://github.com/MegaMek/megamek/pull/6322))
- Updated aerospace takeoff logic and landing rules ([#6302](https://github.com/MegaMek/megamek/pull/6302))
- Fixed ECM effects on sensor spotting ([#6238](https://github.com/MegaMek/megamek/pull/6238))

---

## Release Highlights for MegaMekLab
- There hasn't been much work on MegaMekLab this cycle other than a couple of fixes to support the new MegaMek features.

---

## Release Highlights for MekHQ
## Major Features and Improvements

- **New Resupply System**
  - Automated stock management with customizable thresholds ([#5158](https://github.com/MegaMek/mekhq/pull/5158))
  - Smart part ordering based on your unit configurations ([#5382](https://github.com/MegaMek/mekhq/pull/5382))
  - Improved cargo capacity calculations ([#5339](https://github.com/MegaMek/mekhq/pull/5339))

- **Auto-Resolve Improvements (ACARS)**
  - Princess AI now handles battlefield resolution ([#5155](https://github.com/MegaMek/mekhq/pull/5155))
  - Added Abstract Combat Auto Resolution (ACAR) notes and documentation ([#5532](https://github.com/MegaMek/mekhq/pull/5532)),([#5389](https://github.com/MegaMek/mekhq/pull/5389))

### 🎯 Strategic Command (StratCon) Enhancements

- **Combat Teams System** (formerly Strategic Formations)
  - Refined role-based organization with new combat roles ([#5558](https://github.com/MegaMek/mekhq/pull/5558))
  - Improved deployment mechanics ([#5395](https://github.com/MegaMek/mekhq/pull/5395))
  - Added "In Reserve" designation for better force management ([#5364](https://github.com/MegaMek/mekhq/pull/5364))
  - New comprehensive guide for Combat Teams & Support Forces ([#5428](https://github.com/MegaMek/mekhq/pull/5428))

- **Enhanced Contract Management**
  - Re-enabled Campaign Operations Contract Market ([#5206](https://github.com/MegaMek/mekhq/pull/5206))
  - Monthly support points generation for sustained operations ([#5228](https://github.com/MegaMek/mekhq/pull/5228))
  - Improved scenario objectives and force generation ([#5290](https://github.com/MegaMek/mekhq/pull/5290))
  
- **StratCon Tab layout**
  - Improved StratCon tab layout and UI design ([#5361](https://github.com/MegaMek/mekhq/pull/5361))

### 👥 Personnel Management Improvements

- **Personnel Development**
  - Refined relationship simulation behavior ([#5240](https://github.com/MegaMek/mekhq/pull/5240))
  - Better handling of marriages and personnel status changes ([#5313](https://github.com/MegaMek/mekhq/pull/5313))
  - Improved starting age calculations for different backgrounds ([#5540](https://github.com/MegaMek/mekhq/pull/5540))

- **Training and Education**
  - Added missing Anti-Mek training for Battle Armor crews ([#5476](https://github.com/MegaMek/mekhq/pull/5476))
  - Enhanced in-house training programs ([#5561](https://github.com/MegaMek/mekhq/pull/5561))
  - Better skill level management in mass training ([#5421](https://github.com/MegaMek/mekhq/pull/5421))

  - Updated personnel modules and unit markets documentation ([#5496](https://github.com/MegaMek/mekhq/pull/5496))

### 📊 Game Balance
- Adjusted scenario modifiers for better balance ([#5436](https://github.com/MegaMek/mekhq/pull/5436))
- Reduced scenario sizes for house and integrated commands ([#5524](https://github.com/MegaMek/mekhq/pull/5524))
- Improved force generation and unit substitution ([#5314](https://github.com/MegaMek/mekhq/pull/5314))

## Bug Fixes & Technical Improvements
- Far too many to list here. Please see the full change log for details.


- **Force Generation Improvements**: Numerous Force Generation 3 (FG3) updates, including difficulty adjustments and infantry generation improvements, enhancing engagement dynamics. [#5113](https://github.com/MegaMek/mekhq/pull/5113), [#5120](https://github.com/MegaMek/mekhq/pull/5120), [#5167](https://github.com/MegaMek/mekhq/pull/5167).

---

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

**Full Changelog**: [v0.50.01...v0.50.02](https://github.com/MegaMek/megamek/compare/v0.50.01...v0.50.02)  
[Download](https://github.com/MegaMek/megamek/releases/download/v0.50.02/MegaMek-0.50.02.tar.gz)

### MegaMekLab Change Log

**Full Changelog**: [v0.50.01...v0.50.02](https://github.com/MegaMek/megameklab/compare/v0.50.01...v0.50.02)  
[Download](https://github.com/MegaMek/megameklab/releases/download/v0.50.02/MegaMekLab-0.50.02.tar.gz)

### MekHQ Change Log

**Full Changelog**: [v0.50.01...v0.50.02](https://github.com/MegaMek/mekhq/compare/v0.50.01...v0.50.02)  
[Download](https://github.com/MegaMek/mekhq/releases/download/v0.50.02/MekHQ-0.50.02.tar.gz)
