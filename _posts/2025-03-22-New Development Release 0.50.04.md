---
layout: post
title:  "MegaMek, MegaMekLab, and MekHQ 0.50.04 Released"
date:   2025-03-22
tags:
  - Releases
  - MegaMek
  - MegaMekLab
  - MekHQ
---
Hi Everyone,

Welcome to 0.50.04! I'm going to say right up front that this has to be one of the largest releases we've ever done. While it does have a lot of new stuff which you can read about below, there are a lot of fixes and improvements to existing features that in some states, are bug fixes and in others, code improvements. This is the first release where we have some cautious optimism that it could achieve a Milestone status.

We do have some very big changes in this release. One of the things that you're going to start noticing with the programs is we're going to be slowly moving away from XML files and towards YAML files. The unit files will stay with MTF and BLK, but our other data will continue to evolve this way. So why the change? Simple really - XML files while great for computers aren't easily parsable by humans. While YAML (short for "YAML Ain't Markup Language") is a simple way to write data that both people and computers can easily read. Think of it like a neatly organized list or recipe.

Getting back to the release, there is simply too much to list everything here and for this release you'll really need to head to the change logs at the bottom. We will call out a few things for each program.

We have had a few important announcements on our website, if you haven't seen them here are the links:

* [2025 State of the Universe](https://megamek.org/2025/02/18/2025-State-of-the-Universe.html)
* [Princess vs. CASPAR: A BattleTech Tale](https://megamek.org/2025/02/28/Princess-vs.-CASPAR-A-BattleTech-Tale.html)
* [Planetary System File Rework](https://megamek.org/development/2025/02/17/Planetary-System-File-Rework.html)
* [Changes to POWs in MekHQ](https://megamek.org/2025/02/23/Changes-to-POW's-in-MekHQ.html)

### Release Highlights for MegaMek

**Enhanced towing functionality:**
* Added towing from lobby ([#6549](https://github.com/MegaMek/megamek/pull/6549))
* Fixed trailer disconnection vs. unloading logic ([#6588](https://github.com/MegaMek/megamek/pull/6588))
* Improved deployment-phase towing ([#6606](https://github.com/MegaMek/megamek/pull/6606))
* Added support for multiple trailers in towing system ([#6578](https://github.com/MegaMek/megamek/pull/6578))

**Other improvements:**
* Changes to transporting infantry in various bays ([#5929](https://github.com/MegaMek/mekhq/pull/5929))
* Destroying carried units in an Aerospace crash ([#6681](https://github.com/MegaMek/megamek/pull/6681))
* Princess unloading carried units from disabled units ([#6627](https://github.com/MegaMek/megamek/pull/6627))
* Fixed terrain blast damage application and related issues ([#6713](https://github.com/MegaMek/megamek/pull/6713))
* Added Hazardous Liquid Pool terrain type and official maps ([#6476](https://github.com/MegaMek/megamek/pull/6476), [#6561](https://github.com/MegaMek/megamek/pull/6561))
* Added Ultra Sublevel terrain feature ([#6502](https://github.com/MegaMek/megamek/pull/6502))
* Implemented GIF recording for game summaries and replays ([#6495](https://github.com/MegaMek/megamek/pull/6495), [#6527](https://github.com/MegaMek/megamek/pull/6527))
* Added multiselect support in Add Unit dialog ([#6645](https://github.com/MegaMek/megamek/pull/6645))
* Added over 3,000 new callsigns to the game ([#6718](https://github.com/MegaMek/megamek/pull/6718), [#6724](https://github.com/MegaMek/megamek/pull/6724))
* Enhanced minimap functionality with move path display and unit transparency ([#6504](https://github.com/MegaMek/megamek/pull/6504), [#6590](https://github.com/MegaMek/megamek/pull/6590))
* Princess was seen wandering out of a couple of classes labeled Classified and giggling like mad.
* Fixes and Data Improvements

### Release Highlights for MegaMekLab

* Pan+zoom in RS preview ([#1763](https://github.com/MegaMek/megameklab/pull/1763))
* RS preview in unit selector with draggable/undockable tabs ([#1764](https://github.com/MegaMek/megameklab/pull/1764))
* Chain drape implementation (Construction Only) ([#1739](https://github.com/MegaMek/megameklab/pull/1739))
* Capacitors/Insulators/Pulse Modules now show next to their mated weapon in RS ([#1728](https://github.com/MegaMek/megameklab/pull/1728))
* Enhanced unit selection: multiple units at a time, drag-and-drop support, and loading multiple units from cache ([#1755](https://github.com/MegaMek/megameklab/pull/1755))
* Print all open units with performance improvements ([#1754](https://github.com/MegaMek/megameklab/pull/1754))
* Various Record Sheet fixes and improvements ([#1768](https://github.com/MegaMek/megameklab/pull/1768))
* Begun work on Implementing Handheld weapons (at this time strictly backend code they aren't usable or buildable)
* Fixes and Improvements

### Release Highlights for MekHQ

* Implemented Campaign Options IIC with various improvements and fixes ([#4963](https://github.com/MegaMek/mekhq/pull/4963))
* Implemented Prisoners of War & abstracted Search and Rescue system ([#6016](https://github.com/MegaMek/mekhq/pull/6016), [#6083](https://github.com/MegaMek/mekhq/pull/6083), [#6099](https://github.com/MegaMek/mekhq/pull/6099), [#6151](https://github.com/MegaMek/mekhq/pull/6151), [#6252](https://github.com/MegaMek/mekhq/pull/6252), [#6279](https://github.com/MegaMek/mekhq/pull/6279), [#6292](https://github.com/MegaMek/mekhq/pull/6292))
* Converted planetary system data to YAML and overhauled planetary systems ([#6031](https://github.com/MegaMek/mekhq/pull/6031), [#6306](https://github.com/MegaMek/mekhq/pull/6306)) + Alpha Editor (See below)
* Added MekHQ User Guide PDF and updated New Player Guide PDF ([#6323](https://github.com/MegaMek/mekhq/pull/6323), [#6325](https://github.com/MegaMek/mekhq/pull/6325))
* Improved StratCon deployment logic ([#5981](https://github.com/MegaMek/mekhq/pull/5981), [#6011](https://github.com/MegaMek/mekhq/pull/6011), [#6084](https://github.com/MegaMek/mekhq/pull/6084), [#6158](https://github.com/MegaMek/mekhq/pull/6158))
* Adjusted Reinforcement Arrival Time Scaling, Target Number, and Leadership Budget Logic ([#6086](https://github.com/MegaMek/mekhq/pull/6086), [#6209](https://github.com/MegaMek/mekhq/pull/6209), [#6243](https://github.com/MegaMek/mekhq/pull/6243))
* Updated Scenario Briefings and Objectives ([#6108](https://github.com/MegaMek/mekhq/pull/6108), [#6133](https://github.com/MegaMek/mekhq/pull/6133), [#6157](https://github.com/MegaMek/mekhq/pull/6157), [#6268](https://github.com/MegaMek/mekhq/pull/6268), [#6280](https://github.com/MegaMek/mekhq/pull/6280))
* Removed Infirmary Background Image ([#6287](https://github.com/MegaMek/mekhq/pull/6287))
* Fixes and Improvements

## Technical Stuff

### Java 17 is *Required* for all 0.50.x Releases

Starting with version 0.50.0-Development, Java 17 will be **REQUIRED** to play. We've updated our guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) with more detailed instructions.

It's crucial to read the directions carefully, especially Step 6, which covers a recent change to the Adoptium installer. Make sure to select "Install for all users of this machine" in the Installation Scope.
We will continue using Java 17 until Fall 2026. If you choose to use a Java version beyond 17, it isn't officially supported, and our standard response for issues will be to revert to Java 17. We recommend upgrading to Java 17 before the new release; if you are running 0.49.12-Development or later, it will run on Java 17.

**WARNING**: Java 24 was released (18 March 2025)! MegaMek still **only** requires Java 17 (with plans to start officially testing Java 21 end of this year) but we know some of you like living on the bleeding edge of Java. If you are still running on an older OS that is 32-Bit (chances are some of you are), **DO NOT INSTALL JAVA 24!!!** It has officially dropped support for 32-bit Windows. This impacts those of you on Windows 10 or older.

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

## A Few Reminders and Stuff

### The Milestone System Summary
Please see [this link](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) for details on the replacement for the old Stable and Development cycle.

### CASPAR Tactical Evolution Initiative Launches with 0.50.04
The next generation tactical system codenamed CASPAR has officially entered active development with this release. CASPAR is designed to evolve through analysis of real combat engagements, unlike its infamous namesake whose drones relied solely on pre-programmed tactics.

### How to Contribute to CASPAR's Learning

1. Join [the MegaMek Discord](https://discord.gg/megamek) where you'll find dedicated channels for discussion and submitting game logs.

2. Enable game action logging in MegaMek:
    - Go to Client Settings
    - Select the Main tab
    - Check the "Log all game actions. (Server only)" option
    - Also check "Keep a copy of the game log"
    - [Find the Settings here](https://imgur.com/RCN2U7a)

3. Play **ground combat games only** that meet these requirements:
    - No custom units
    - Must include human players (all-bot games aren't suitable)
    - Human vs. human games are especially valuable

**PRIVACY NOTE:** No personal identification data is collected through these game logs—unless you deliberately incorporate such information into unit names.

### State of the Universe (February 18, 2025)
If you haven't given the [State of the Universe (read here if you missed it)](https://megamek.org/2025/02/18/2025-State-of-the-Universe.html) a read, please do. There's lots of information in there that is still recent and relevant.

### Planetary Data Editor
The 0.50.04 release includes a new Planetary Data Editor as an alpha feature. This editor works with our newly implemented YAML-based planetary data system, making it significantly easier to view and modify planetary information.

The editor allows you to work with individual planet files rather than the previous approach of massive XML files that were difficult to navigate and edit. Each planet now has its own dedicated file containing all relevant information in one place - basic data, population changes, faction histories, and SICS codes.

This new feature is part of our larger initiative to improve usability for campaign managers and data contributors. We have an Alpha version of the Planet Editor available here [Planetary Systems Editor (ALPHA)](https://aaron-gullickson.shinyapps.io/planetary_system_editor/). Since this only edits at this time you'll need to make sure you keep back-ups of the original local files. Use at your own risk.

For more information about the planetary system rework, visit: [Planetary System File Rework](https://megamek.org/development/2025/02/17/Planetary-System-File-Rework.html)

**Note**: Being an ALPHA feature, we welcome your feedback and bug reports.

## User Data Directory for MegaMek, MegaMekLab, and MekHQ

We've added a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.

#### Key Points:
- **Set a Custom Directory:** Choose any location on your computer (e.g., `D:/myMMStuff`) to keep your game resources.
- **File Placement:**
    - Fonts and units (.mtf, .blk) can be placed anywhere within this directory.
    - Camo images in `/data/images/camo/`
    - Portrait images in `/data/images/portraits/`
    - Unit fluff images in `/data/images/fluff/<unit type>/`
    - Rank and award definition files (.xml) in `/data/universe/`
- **Consistent Access:** Resources in this directory are usable across different game versions and modules without needing to relocate them for each new install.
- **Implementation:** Set up this directory via the client settings. A game restart is required for changes to take effect.

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

### Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.50.03...v0.50.04)  
[Download MegaMek 0.50.04](https://github.com/MegaMek/megamek/releases/download/v0.50.04/MegaMek-0.50.04.tar.gz)

### MegaMekLab Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megameklab/compare/v0.50.03...v0.50.04)  
[Download MegaMekLab 0.50.04](https://github.com/MegaMek/megameklab/releases/download/v0.50.04/MegaMeklab-0.50.04.tar.gz)

### MekHQ Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/mekhq/compare/v0.50.03...v0.50.04)  
[Download MekHQ 0.50.04](https://github.com/MegaMek/mekhq/releases/download/v0.50.04/Mekhq-0.50.04.tar.gz)


If you've made it this far! There is one other major surprise you'll see when you start the programs. Thanks to [Eldon Cowgur](https://www.artstation.com/eldoniousrex) for working with us!