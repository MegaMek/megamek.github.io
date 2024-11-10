layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.50.01 Release Notes"
date: 2024-11-10
categories: release
---

Hi Everyone,

Strap in for 0.50.01; this is another massive release. Before diving into specifics, a huge thanks to all contributors and new Devs over the last few months. I haven't seen this much code pushed in a long time; it's great to see.

With so much code comes challenges: while fixing bugs, modernizing code, and introducing new features, new issues can emerge. We anticipate the next few releases will have some issues, but don't let that deter you from using the releases—just remember to keep backups of your files. In fact, we encourage you to use this release to help us find and squash the bugs!

I've also tried a new approach to presenting release highlights (with a bit of AI for sorting and writing). Now, instead of a code block monolith, releases are categorized and linked to the pull request details directly. Let me know how you like this format.

### Let's dive into all the details!

First, we want to mention upfront that we did an interview with [Sarna](https://www.sarna.net/news/community-outreach-dropping-the-hammer-on-megamek/) back in August, where we discussed copyright and IP holders. Here's part of my answer from that interview:

---

<a href="https://imgur.com/bQ5WsQo">
  <img src="https://i.imgur.com/bQ5WsQo.png" title="source: imgur.com" style="max-width: 100%; height: auto;" alt="Screenshot from the Sarna interview" />
</a>

---

We decided to complete a internal compliance review to address the usage of protected terms (MechWarrior, BattleMech, 'Mech, and AeroTech) and found we had accumulated quite a few in our codebase over the years. We've removed unnecessary references to these terms to ensure legal compliance. While we've conducted a thorough review, some instances may remain, and we've left the references in the canon fluff.

---

## Release Highlights for MegaMek

### New Features

- **Custom Deployment Zones**: Define custom deployment zones for strategic advantages, such as flanking and ambushes. [#5924](https://github.com/MegaMek/megamek/pull/5924).

- **Enhanced Scenario Tools and Story Enrichments**: Improved tools, AI behaviors, and story elements, featuring custom deployment zones, retreat paths, and event triggers. Check out upgraded Kell's Hounds scenarios, showcasing these new capabilities to deepen campaign and mission immersion. [#5889](https://github.com/MegaMek/megamek/pull/5889), [#6156](https://github.com/MegaMek/megamek/pull/6156), [#6157](https://github.com/MegaMek/megamek/pull/6157), [#6167](https://github.com/MegaMek/megamek/pull/6167), [#6045](https://github.com/MegaMek/megamek/pull/6045).

- **Elevation Selection at Deployment**: Choose your unit's elevation during deployment to gain a tactical advantage over your opponents. [#5996](https://github.com/MegaMek/megamek/pull/5996).

- **Automatic Unit List Generation**: After each skirmish, receive a comprehensive unit list to help track forces and analyze outcomes. [#6164](https://github.com/MegaMek/megamek/pull/6164).

- **GUI Enhancements to Scaling and Display**: Upgraded FlatLaf scaling for improved interface responsiveness, and polished dialogs and menus for an optimized experience. Numerous graphical scaling issues have been addressed to ensure displays appear correctly across resolutions. [#6068](https://github.com/MegaMek/megamek/pull/6068), [#6076](https://github.com/MegaMek/megamek/pull/6076), [#6103](https://github.com/MegaMek/megamek/pull/6103), [#6098](https://github.com/MegaMek/megamek/pull/6098).

### Bug Fixes

- **Mini-Map Selection Lag**: Resolved mini-map unit selection lag, allowing you to command units without delay. [#6002](https://github.com/MegaMek/megamek/pull/6002).

- **Patchwork Armor Weight Calculation**: Corrected patchwork armor tonnage calculations according to *TechManual* standards. [#6010](https://github.com/MegaMek/megamek/pull/6010), [#6078](https://github.com/MegaMek/megamek/pull/6078).

- **Double-Blind Ghost Sprite**: Removed phantom images in double-blind games, ensuring accurate sensor readings. [#5988](https://github.com/MegaMek/megamek/pull/5988).

- **Battle Armor Flamer Issue**: Fixed a bug preventing Battle Armor from equipping flamers unless they had a fusion engine. Flamers are now operational as intended. [#5961](https://github.com/MegaMek/megamek/pull/5961).

- **High Gravity Fall Damage**: Updated high-gravity fall damage rules to align with *Total Warfare* standards. Units now receive proper damage based on gravitational conditions. [#6000](https://github.com/MegaMek/megamek/pull/6000).

- **LAM Crash Fix**: Resolved critical crash issues with Land-Air 'Meks in certain scenarios. [#6166](https://github.com/MegaMek/megamek/pull/6166).

### Improvements

- **Terminology Consistency**: Standardized terminology to align with IP holder trademark policies. [#5975](https://github.com/MegaMek/megamek/pull/5975), [#5981](https://github.com/MegaMek/megamek/pull/5981), [#5994](https://github.com/MegaMek/megamek/pull/5994).

- **Weapon Panel Usability**: Enhanced weapon panel usability with grouped identical weapons and refined ammo selectors for easier deployment. [#6165](https://github.com/MegaMek/megamek/pull/6165), [#6143](https://github.com/MegaMek/megamek/pull/6143).

- **Unit Tooltip Enhancements**: Tooltips now display melee weapons like hatchets and swords, allowing quick access to unit capabilities before close combat. [#6029](https://github.com/MegaMek/megamek/pull/6029), [#6098](https://github.com/MegaMek/megamek/pull/6098).

- **Text Display Improvements**: Enhanced word wrapping and text formatting across interfaces for better readability of mission briefings and unit statuses. [#6053](https://github.com/MegaMek/megamek/pull/6053), [#6123](https://github.com/MegaMek/megamek/pull/6123).

- **Atmospheric Control Errata**: Incorporated errata for advanced atmospheric conditions, adding realism to aerospace combat under challenging environmental conditions. [#5867](https://github.com/MegaMek/megamek/pull/5867).

## Release Highlights for MegaMekLab

### New Features

- **Armor Pips Grouping**: Added an experimental option to display armor pips in groups of five on record sheets, providing a cleaner, more intuitive visual for armor status and damage tracking. [#1598](https://github.com/MegaMek/megameklab/pull/1598).

- **RISC Heat Sink Override Kit**: Support for the advanced RISC Heat Sink Override Kit is now included in construction rules. Push your 'Mek's heat management to new limits, but beware of the risks! [#1643](https://github.com/MegaMek/megameklab/pull/1643).

- **Enhanced File Handling**: You can now open unit and MUL files directly in MegaMekLab through file association or drag-and-drop, streamlining your workflow for quicker design access. [#1648](https://github.com/MegaMek/megameklab/pull/1648).

### Improvements

- **FlatLaf UI Scaling**: Implemented FlatLaf UI scaling for better interface responsiveness, especially on high-resolution screens, making the design interface sharper and more user-friendly. [#1610](https://github.com/MegaMek/megameklab/pull/1610), [#1637](https://github.com/MegaMek/megameklab/pull/1637).

- **Radical Heat Sink Display**: Enhanced record sheets to display radical heat sinking systems accurately, ensuring all heat management technologies are represented for your designs. [#1621](https://github.com/MegaMek/megameklab/pull/1621).

- **Printing Enhancements**:

  - **Save Print Queue Setup**: Your print queue configuration is now saved between sessions, making batch printing of designs more convenient. [#1645](https://github.com/MegaMek/megameklab/pull/1645).

  - **Auto-add PDF Extension**: Files saved without a specified extension will automatically append `.pdf`, preventing file type confusion. [#1653](https://github.com/MegaMek/megameklab/pull/1653).

- **Critical Hit Table Improvements**: Enhanced 'Mek critical hit tables for accurate component placement and functionality, making designs reflect the intricacies of BattleMek engineering. [#1646](https://github.com/MegaMek/megameklab/pull/1646).

- **Patchwork Armor Tech Level**: When applying patchwork armor, tech levels now apply accurately to specific locations, enabling more precise customization in line with faction limits. [#1634](https://github.com/MegaMek/megameklab/pull/1634).

- **Cockpit Adjustments**: Adjustments to cockpit sizing ensure that items occupying the head slot are removed when switching to a small cockpit, adhering to construction rules. [#1647](https://github.com/MegaMek/megameklab/pull/1647).

- **Record Sheet Details**:

  - **Special Pilot Abilities**: Special Pilot Abilities (SPAs) are now printed on record sheets generated from MUL files, centralizing pilot details for better pre-battle planning. [#1625](https://github.com/MegaMek/megameklab/pull/1625).

  - **Terminology Consistency**: Record sheets now display "MECH" in designations, aligning with standard BattleTech terminology. [#1618](https://github.com/MegaMek/megameklab/pull/1618).

  *Note: The above section contains canon fluff where protected terms are used intentionally to reference official BattleTech lore.*

### Bug Fixes

- **Pilot Info Box Drawing**: Resolved issues with pilot information box display on record sheets, ensuring all pilot details appear accurately before deployment. [#1627](https://github.com/MegaMek/megameklab/pull/1627).

- **Weapon Inventory Fixes**:

  - Corrected weapon inventory display for units, ensuring all equipment appears as expected across unit types. [#1628](https://github.com/MegaMek/megameklab/pull/1628).

  - Fixed issues with exporting MUL files from MegaMekLab, enhancing compatibility with MegaMek and other tools. [#1629](https://github.com/MegaMek/megameklab/pull/1629).

- **Claw Modifier in Record Sheets**: Fixed claw weapon modifier calculations on record sheets to ensure melee combat values are accurate for close-quarters engagements. [#1652](https://github.com/MegaMek/megameklab/pull/1652).

- **Artillery on Aerospace Units**: Following *Tactical Operations: Advanced Units and Equipment* guidelines, artillery weapons can now be equipped on aerospace units, expanding strategic options. [#1615](https://github.com/MegaMek/megameklab/pull/1615).

### Terminology and Consistency Updates

- **"Mech" to "Mek" Adjustments**: Updated all "Mech" references to "Mek" for consistency with the MegaMek project and BattleTech lore. [#1606](https://github.com/MegaMek/megameklab/pull/1606).

- **Class Renames and Resource Fixes**: Renamed classes and adjusted resource names for code clarity, improving maintainability and stability in MegaMekLab. [#1608](https://github.com/MegaMek/megameklab/pull/1608), [#1611](https://github.com/MegaMek/megameklab/pull/1611).

## Release Highlights for MekHQ

There is a change in how you start new campaigns. Once you hit "Start a New Campaign", you will be presented with this screen:

<a href="https://imgur.com/AOi0aEu">
  <img src="https://i.imgur.com/AOi0aEu.png" title="source: imgur.com" style="max-width: 100%; height: auto;" alt="Screenshot of the new campaign start screen" />
</a>

You'll need to select "Customize", then choose your campaign start date, and then the program will launch.

### New Features

- **Dynamic Hiring Halls**: Added dynamic hiring halls to reflect the changing BattleTech universe. Recruitment options now vary by location and events, offering a more immersive experience. [#4903](https://github.com/MegaMek/mekhq/pull/4903).

- **Campaign Operations Contract Market and Negotiation**: Implemented a system for generating and negotiating contracts based on *BattleTech: Campaign Operations* rules. Dive deep into contract negotiations, with terms, conditions, and employer reputations impacting mercenary life. [#4644](https://github.com/MegaMek/mekhq/pull/4644), [#4967](https://github.com/MegaMek/mekhq/pull/4967), [#5054](https://github.com/MegaMek/mekhq/pull/5054).

- **Force Generation 3 and Clan Bidding System**: Integrated Force Generation 3, including the Clan bidding and batchall system, allowing Clan commanders to experience the honor-bound bidding process. [#4865](https://github.com/MegaMek/mekhq/pull/4865).

- **Relationship and Childhood Overhaul**: Expanded character backstories and interactions by revamping the relationship and childhood systems. Personnel now have richer histories impacting morale and battlefield performance. [#4521](https://github.com/MegaMek/mekhq/pull/4521).

- **Morale System Rework**: Overhauled the AtB morale system, now called MekHQ Morale, to reflect the human cost of war on personnel. Keep morale high to maintain unit effectiveness. [#4859](https://github.com/MegaMek/mekhq/pull/4859).

- **Dependents System Overhaul**: Decoupled dependents from AtB mechanics, adding a new layer to strategic gameplay by emphasizing the realities of mercenary life. [#4463](https://github.com/MegaMek/mekhq/pull/4463).

- **Unit Images in TO&E**: Added the option to display unit images within TO&E, making command decisions more intuitive with visual identification of forces. [#5024](https://github.com/MegaMek/mekhq/pull/5024).

- **Army Group Formation Level**: Expanded organizational structure to include the Army Group formation level for better control in grand-scale operations. [#4821](https://github.com/MegaMek/mekhq/pull/4821).

- **Contract Automation**: Implemented contract management automation, streamlining the administrative tasks of mercenary commands. [#5172](https://github.com/MegaMek/mekhq/pull/5172).

### Improvements

- **User Interface Enhancements**:

  - **Added FlatLaf GUI scaling for responsiveness across resolutions**. [#4990](https://github.com/MegaMek/mekhq/pull/4990), [#5033](https://github.com/MegaMek/mekhq/pull/5033), [#5049](https://github.com/MegaMek/mekhq/pull/5049).

  - Added era buttons in the date chooser to simplify campaign start date selection. [#4945](https://github.com/MegaMek/mekhq/pull/4945).

  - Enhanced the TO&E panel with a sticky force view tab and the option to display unit images. [#5024](https://github.com/MegaMek/mekhq/pull/5024), [#5025](https://github.com/MegaMek/mekhq/pull/5025).

  - Introduced new row highlights for statuses like Gone, Absent, and Fatigued to improve staff management. [#5034](https://github.com/MegaMek/mekhq/pull/5034).

  - Added colored skill levels in personnel displays for quicker recognition of team strengths. [#5053](https://github.com/MegaMek/mekhq/pull/5053).

  - Labeled OmniUnits as "Omni" within MekHQ UI, improving unit identification. [#5121](https://github.com/MegaMek/mekhq/pull/5121).

- **Quality of Life Improvements**:

  - Enhanced medical injury tracking in the UI to aid in personnel recovery management. [#5017](https://github.com/MegaMek/mekhq/pull/5017).

  - Implemented a preset picker for quick campaign setups with predefined settings. [#4981](https://github.com/MegaMek/mekhq/pull/4981).

  - Added tooltips and improved logging for guidance and debugging. [#4848](https://github.com/MegaMek/mekhq/pull/4848), [#5163](https://github.com/MegaMek/mekhq/pull/5163).

- **Refinements and Optimizations**:

  - Refactored systems for improved performance, including daily personnel processing and batchall logic. [#4984](https://github.com/MegaMek/mekhq/pull/4984).

  - Simplified reputation displays and adjusted morale calculations for better performance reflections. [#5097](https://github.com/MegaMek/mekhq/pull/5097).

  - Improved force generation for balanced encounters and substitutions. [#5085](https://github.com/MegaMek/mekhq/pull/5085), [#5113](https://github.com/MegaMek/mekhq/pull/5113).

### Bug Fixes

- **Stability Enhancements**:

  - Fixed NullPointerExceptions and other errors in TO&E, personnel removal, and loans dialog. [#4907](https://github.com/MegaMek/mekhq/pull/4907).

  - Corrected issues with faction ownership, personnel filters, and date picker presets. [#4793](https://github.com/MegaMek/mekhq/pull/4793).

- **Data and Compatibility Fixes**:

  - Resolved portrait folder naming issues and restored missing directories for character images. [#4846](https://github.com/MegaMek/mekhq/pull/4846).

  - Added compatibility handlers for save games from versions prior to 0.50.1. [#4913](https://github.com/MegaMek/mekhq/pull/4913).

- **Gameplay Corrections**:

  - Fixed early Clan unit appearances in non-Clan campaigns, preserving campaign integrity. [#5093](https://github.com/MegaMek/mekhq/pull/5093).

  - Addressed scenario unit selection issues, ensuring accurate unit pulls. [#5137](https://github.com/MegaMek/mekhq/pull/5137).

### Data Updates

- **Historical Data Enhancements**:

  - Added and corrected Clan Blood Spirit holdings from 2801 to 3059 for accurate Inner Sphere map representation. [#4944](https://github.com/MegaMek/mekhq/pull/4944).

  - Updated Kerensky Cluster system data circa 3059 for Clan territory accuracy. [#4959](https://github.com/MegaMek/mekhq/pull/4959).

- **Campaign Preset Updates**:

  - Refined campaign presets to align with current BattleTech lore and MekHQ developments. [#4817](https://github.com/MegaMek/mekhq/pull/4817).

### Other Notable Changes

- **Terminology Consistency**: Updated terms from "Mech" to "Mek" and "MechWarrior" to "MekWarrior" for consistency with BattleTech lore. [#4799](https://github.com/MegaMek/mekhq/pull/4799).

  *Note: The above section contains canon fluff where protected terms are used intentionally to reference official BattleTech lore.*

- **Personnel Management Improvements**:

  - Enhanced the random company name generator and adjusted personality traits for better personnel rosters. [#4655](https://github.com/MegaMek/mekhq/pull/4655).

  - Improved force generation limits for balanced infantry deployment in APCs. [#4816](https://github.com/MegaMek/mekhq/pull/4816).

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

1. Complete all ongoing contracts in your current campaign, save, and exit the program.

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

**Full Changelog**: [v0.50.0...v0.50.01](https://github.com/MegaMek/megamek/compare/v0.50.0...v0.50.01)  
[Download](https://github.com/MegaMek/megamek/releases/download/v0.50.01/MegaMek-0.50.01.tar.gz)

### MegaMekLab Change Log

**Full Changelog**: [v0.50.0...v0.50.01](https://github.com/MegaMek/megameklab/compare/v0.50.0...v0.50.01)  
[Download](https://github.com/MegaMek/megameklab/releases/download/v0.50.01/MegaMekLab-0.50.01.tar.gz)

### MekHQ Change Log

**Full Changelog**: [v0.50.0...v0.50.01](https://github.com/MegaMek/mekhq/compare/v0.50.0...v0.50.01)  
[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.50.01)
