---
layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.50.11 Released"
date: 2025-12-30
tags:
  - Releases
  - MegaMek
  - MegaMekLab
  - MekHQ
---

Hi Everyone!

Well, that was a fast turnaround! Just a few weeks after 0.50.10, we're back with version 0.50.11. Don't let the quick cycle fool you—this release packs a solid punch with critical bug fixes, quality-of-life improvements, and a significant push on cybernetic implant implementations.

We believe 0.50.11 has a strong chance of achieving Milestone status, though we'll need a couple of weeks of community testing to make that final determination. If you've been waiting for a stable jumping-off point, keep an eye on this one.

*Note: These release notes highlight key changes in this version. This is not an exhaustive list. For a full breakdown, see history.txt in the docs folder for each project or the change log section at the bottom.*

---

## MegaMek

This release brings a wave of cybernetic implant implementations, quality-of-life improvements, and fixes for some bugs that have been lurking in our tracker for years.

### New Features

#### Cybernetic Implants: The Word Made Flesh

The Manei Domini would be proud. We've implemented a significant portion of the cybernetic implant rules from Interstellar Operations, bringing the Master's blessed augmentations to MegaMek:

* **Sensory Implants**: Cybernetic Sensory Implants for Infantry (IO pg 78), Multi-Modal Sensory Implants, and Enhanced Multi-Modal Sensory Implants
* **Communication Implants**: Boosted Comm Implant base benefits now functional, plus fixes to existing cybernetic communications implants
* **Neural Interfaces**: Prototype Direct Neural Interface (IO pg 83), VDNI/BVDNI implementation fixes (IO pg 71), and Triple-Core Processor (TCP)
* **TSM Implants**: Missing implementations per Interstellar Ops now added
* **Gas Effusers**: Cybernetic Gas Effuser (Pheromone) and Toxin variants (IO pg 79)
* **Dermal Camo Armor**: Now fully functional in gameplay

Whether you're fielding a Frail against unsuspecting opponents or just want to see what all those implant options actually do in combat, the tools are now at your disposal. Peace of Blake be upon you.

#### Buildings: The Foundation is Laid

This release begins a multi-stage rework of how MegaMek handles buildings. The groundwork here will eventually bring TacOps building rules to full implementation - proper fortresses, functional turrets, gun emplacements done the right way, and more. There's more to come, but this is a significant first step toward making defensive structures work as intended.

#### Quality of Life Improvements

* **Round & Phase Display**: The window title now shows the current round number and phase - no more losing track mid-game
* **Lay Mine Button**: 'Meks and ProtoMeks now have a dedicated button for mine deployment
* **Obsolete Quirk**: Now fully functional in gameplay - your aging Star League relics will feel appropriately past their prime
* **Autoconfig Munitions Fix**: Autoconfig no longer selects illegal or ineffectual munitions, making unit setup cleaner
* **Aerospace Climb Out**: Added vertical map exit at altitude 10 for aerospace units
* **Variable Range Targeting Dialog**: New dialog makes VRT selection clearer
* **PACAR MUL Export**: PACAR now generates a MekHQ-usable MUL file at the end of automated resolution, making it easier to bring results back into your campaign

### Rules Fixes

* **Crippling Damage**: Updated per TW Errata v11.01
* **Angel ECM Dual Mode**: "ECM & ECCM" mode now correctly applies both effects, not just ECCM
* **Nova CEWS**: Now compatible with Null Signature System
* **Tripod Physical Attacks**: Now correctly restricted to front arc
* **Hot-Loaded Missiles**: Launchers now explode when critically hit, as they should
* **BA Pop-Up Mines**: Now deal damage per mine, not per squad
* **BA Swarm Attacks**: Zero-damage swarm attacks now correctly roll for critical hits
* **Fighter Squadrons**: No longer take "high damage threshold" critical hits per Strategic Operations
* **Physical Attacks vs Prone 'Meks**: Now resolved correctly
* **Non-Fusion 'Mek Heat**: BattleMeks with non-fusion engines now generate movement heat

### Bug Fixes

* **Handheld Weapons**: Fixed mode switching throwing errors or switching incorrect equipment
* **Direct Blow Damage**: Fixed incorrect rounding of additional damage
* **Multiple TAGs**: Fixed issues when firing multiple TAG systems
* **Rapid-Fire AC Special Ammo**: Rapid-fire autocannons were losing special ammunition effects when fired in rapid-fire mode. This has been fixed - your precision or flak rounds now work as intended regardless of fire mode
* **Bridge Movement**: Fixed walkability problems on bridges
* **Building Scaling**: Units can no longer scale to roofs of adjacent buildings that are too tall
* **MG Arrays**: Now properly link for ProtoMeks
* **Radical Heat Sinks**: Target number now correctly reduces on inactive turns
* **Capital Weapons**: Modifier now applies to DropShips under 500 tons
* **Screen Launchers**: Cluster damage now calculated correctly
* **LAM Fixes**: Fixed aerospace strafing bug; LAMs no longer suffer +3 to-hit on mode change turns; stacked ASF LAMs can now transform
* **Aerospace Detection**: Fixed visual detection on both ground and non-ground maps
* **Area Effect Visibility**: Units are no longer incorrectly revealed by AE attacks
* **Picked Up MechWarriors**: Now properly displayed and reset on unit add
* **Pre-0.50.0 Units**: Fixed loading issues with ProtoMeks and BattleMeks created before 0.50.0

*This release includes numerous additional fixes and improvements. For the complete changelog, see GitHub.*

---

## MegaMekLab

A lighter release for MegaMekLab this cycle, focused on construction rule fixes and record sheet improvements.

### Improvements

* **Obsolete Quirk Implementation**: The Obsolete quirk is now available in MegaMekLab, allowing you to properly flag older designs
* **K-F Adaptor & Modular Space Station Descriptions**: Updated option descriptions to provide better clarity on these construction options

### Bug Fixes

* **Dermal Armor Mutual Exclusion**: Dermal Armor and Dermal Camo Armor are now properly mutually exclusive - you can no longer equip both
* **Battle Armor Jump Boosters on Record Sheets**: Jump Boosters no longer incorrectly appear on Battle Armor record sheets
* **Handheld Weapon Enhancements**: Weapon enhancements are now properly linked on Handheld Weapon record sheets

*This release includes additional under-the-hood improvements not listed here. For the complete changelog, see GitHub.*

---

## MekHQ

This release packs a lot of fixes and quality-of-life improvements. We're highlighting the key changes below, but for the complete picture, check out the full changelog linked at the bottom.

**UPGRADE WARNING (Pre-0.50.10 Campaigns Only):**
If you are upgrading from a version prior to 0.50.10 and use VTOL or wet naval vehicles, it is vital that you do not upgrade while in transit. If you do, the upgrade process will convert ALL of your VTOL and Naval crews into ground crew. Campaigns already on 0.50.10 or later are unaffected.

### Major Features

#### AutoTech

Joining Quick Train and AutoInfirmary, a new MekHQ Client Option has been added. When enabled, MekHQ will automatically assign techs to unassigned units at the start of each day. The most skilled characters are picked first, and no character will be assigned more than two units.

#### I'm the Captain Now

You can now designate a second-in-command, just like you assign a campaign commander. If your commander meets an unfortunate end (cockpit crit, resignation, or otherwise), the second-in-command automatically takes over and a new second-in-command is chosen. Succession planning - it's not just for Great Houses anymore.

#### Scenario Map Sizes Rework

Scenario map sizes have been completely rewritten. Most scenarios will now generate at around 2x2 map sheets, with some reaching 2x3. As unit counts increase, maps expand horizontally rather than vertically. This keeps engagement ranges consistent while supporting truly massive battles. A new campaign option lets you adjust the scale if needed, but we recommend trying the defaults first.

#### Buying Off Flaws

You can now spend XP to remove Flaws. The cost equals what you would have earned by taking the Flaw normally - so it's expensive - but it means a bad roll on Veterancy Awards is no longer career-ending.

### Critical Bug Fixes

* **Tech Acquisition**: Setting your Acquisition Skill to "Any Tech" no longer breaks MekHQ
* **Faction Standings**: Reloading a campaign was resetting accolade data, trapping campaigns in a "someone important noticed you" limbo. Fixed - expect faction standings events to progress properly now (may take 3-6 in-game months for old data to clear)
* **Field Control Dialog**: Fixed a Java-related bug where the end-of-scenario dialog sometimes wouldn't display
* **Education**: Fixed errors when selecting characters with certain education data; characters with permanent injuries can now attend education

### Notable Improvements

* **Initiative Fixes**: Initiative modifiers now correctly transfer from MekHQ to MegaMek. Princess will have initiative modifiers again - and so will you
* **Personality Flaws**: Several changes to make flaws like Berserker less disruptive. Characters constantly losing their minds? Put them on Leave between contracts. (Medication option coming in 0.50.12)
* **Injury & Aging Effects**: Now affect Attribute Scores rather than skills directly, making them less crippling
* **Post-Scenario Bugs**: Fixed the deployment zone bug and several other issues where information was incorrectly retained between scenarios
* **Tabbed Daily Reports**: The tabs introduced in 0.50.10 are now fully implemented as filters. Pre-0.50.11 behavior available in MekHQ Client Options (but not recommended)

### Additional Changes

* **Multi-Tech**: Techs can now hold multiple tech professions (e.g., MekTech and Mechanic)
* **Report a Bug Button**: Quick access to open bug reports. No report means no fix!
* **Contract Market Fixes**: Profit display corrected (was visual only); columns now sort properly
* **Quick Train Upgrades**: Can now train additional skills, plus under-the-hood improvements
* **New Surgeries**: More prosthetic and implant options for Alternate Advanced Medical. Legality now affects pricing
* **Campaign Upgrades**: Rewritten to be nearly instant and more reliable

*For the complete list of changes, see the changelog on GitHub.*

---

## Technical Stuff

### Java 17 is *Required* for all 0.50.x Releases

Starting with version 0.50.0, Java 17 is **REQUIRED** to play. We've updated our guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) with detailed instructions.

It's crucial to read the directions carefully, especially Step 6, which covers a recent change to the Adoptium installer. Make sure to select "Install for all users of this machine" in the Installation Scope.

We will continue using Java 17 until Fall 2026. If you choose to use a Java version beyond 17, it isn't officially supported, and our standard response for issues will be to revert to Java 17.

**WARNING**: Java 24 was released (18 March 2025)! MegaMek still **only** requires Java 17, but if you are running on an older 32-bit OS, **DO NOT INSTALL JAVA 24** as it has officially dropped support for 32-bit Windows.

**Looking Ahead**: We've added testing against Java 25 LTS in this release as we prepare for future upgrades. No action needed on your part - just know we're planning ahead.

### Running a Dedicated Server with Docker

Want to host your own MegaMek server? Docker images for MegaMek dedicated servers now support user folders for custom content. For setup instructions, visit the [Docker guide on MegaMek.games](https://megamek.games/docker).

---

## Important: MekHQ Campaign Update Instructions

It is critical to follow these steps to ensure the integrity of your MekHQ campaign when updating between versions. Failure to follow these steps can result in the corruption of your campaign file.

Treat each release as stand-alone; **Copy, never Move** your data forward from older versions. MekHQ is **NOT** backward compatible.

1. **Make a backup of your campaign and custom files. This is a critical step to prevent data loss!**
2. **DO NOT COPY** MegaMek saves or any preference file from a different version to avoid compatibility issues.
3. Update MekHQ to the latest version. **NEVER** overwrite the existing folder; always keep each version in its own folder.
4. Re-save any custom presets to ensure they are updated with the new version's settings.

---

## A Few Reminders

### The Milestone System Summary

Please see [this link](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) for details on our Milestone release system.

### State of the Universe & Development Updates

If you haven't read our recent posts, we recommend checking out:

* [2025 State of the Universe](https://megamek.org/2025/02/18/2025-State-of-the-Universe.html)
* [Looking Ahead and Looking Back: MegaMek Development Update 2025](https://megamek.org/2025/08/15/Looking-Ahead-and-Looking-Back-MegaMek-Development-Update-2025.html)

### User Data Directory

We have a customizable **User Data Directory** feature that allows you to set a single external directory for storing game resources like units, camos, and fonts, accessible across different installations and versions.

Set up this directory via client settings. A game restart is required for changes to take effect.

---

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

### Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

---

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log

**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.50.10...v0.50.11)  
[Download MegaMek 0.50.11](https://github.com/MegaMek/megamek/releases/download/v0.50.11/MegaMek-0.50.11.tar.gz)

### MegaMekLab Change Log

**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megameklab/compare/v0.50.10...v0.50.11)  
[Download MegaMekLab 0.50.11](https://github.com/MegaMek/megameklab/releases/download/v0.50.11/MegaMeklab-0.50.11.tar.gz)

### MekHQ Change Log

**Full Changelog**: [View on GitHub](https://github.com/MegaMek/mekhq/compare/v0.50.10...v0.50.11)  
[Download MekHQ 0.50.11](https://github.com/MegaMek/mekhq/releases/download/v0.50.11/Mekhq-0.50.11.tar.gz)
