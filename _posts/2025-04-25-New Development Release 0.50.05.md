---
layout: post
title:  "MegaMek, MegaMekLab, and MekHQ 0.50.05 Released"
date:   2025-04-25
tags:
  - Releases
  - MegaMek
  - MegaMekLab
  - MekHQ
---

Hi Everyone!

Welcome to version 0.50.05! This release comes quite quickly after our previous version, but don't let the short cycle fool you—we've packed an impressive amount of bug fixes and technical improvements into this update.

While we had originally hoped that 0.50.04 would become a Milestone release, a few issues prevented that from happening. We believe 0.50.05 has a strong chance of achieving Milestone status, though we'll need a couple of weeks to make that final determination.

**Important Note:** If 0.50.05 does become a Milestone release and you're using 0.49.19.1, you will need to upgrade to Java 17 to run this version.

Looking ahead, please be aware that our next release cycle for version 0.50.06 will be significantly longer than usual. We don't anticipate having a new release (0.50.06) until July 2025. We'll be sharing more announcements in the coming week that will provide further details on this extended timeline. If 0.50.05 does achieve Milestone status, we strongly encourage all players to migrate to this version as it will serve as the foundation for future releases.

*Note: These release notes highlight key changes in this version. This is not an exhaustive list. For a full breakdown, see history.txt in the docs folder for each project or the change log section at the bottom*

## MegaMek

### New Features
* **Princess Callsigns** ([#6796](https://github.com/MegaMek/megamek/pull/6796)): Princess AI bots now receive unique callsigns instead of just numbers when adding multiple Princess AIs to a game. This makes it easier to identify and distinguish between different AI opponents.
* **Mek Jump Boosters and Jump Jets Support**: Added support for 'Mechs equipped with both Jump Jets and Mechanical Jump Boosters.
    * When a unit has only Mechanical Jump Boosters, movement behaves as before
    * When a unit has both Jump Jets and Mechanical Jump Boosters, players must choose which system to use when jumping
    * Code improvements separate Jump Jet and Jump Booster calculations for better rules implementation
    * Added new method getAnyTypeMaxJumpMP() for general jump capability assessment
* **New SPAs** ([#6823](https://github.com/MegaMek/megamek/pull/6823)): Added A Time of War (AToW) Special Personnel Abilities:
    * Combat Sense: Provides enhanced battlefield awareness, allowing pilots to better anticipate enemy actions and react more effectively in combat
    * Combat Paralysis: Represents hesitation under combat stress. A character with Combat Paralysis tends to freeze up in stressful situations, especially combat.

### Improvements
* **Board Preview Save Option** ([#6782](https://github.com/MegaMek/megamek/pull/6782)): Added a "Save As" function to the board preview in the lobby, allowing players to save generated boards for future use.
* **Princess Mine Deployment Fix** ([#6828](https://github.com/MegaMek/megamek/pull/6828)): Princess AI now deploys mines on her turn instead of at the start of the phase, fixing issues with mine deployment timing ([#6751](https://github.com/MegaMek/megamek/issues/6751)).
* **Princess Flak Targeting Improvement** ([#6905](https://github.com/MegaMek/megamek/pull/6905)): Fixed an issue where Princess incorrectly handled flak attacks by ensuring proper targeting of entities rather than hexes ([#6904](https://github.com/MegaMek/megamek/issues/6904)).

### Bug Fixes
* **Artillery Fixes** ([#6795](https://github.com/MegaMek/megamek/pull/6795)): Comprehensive fixes for multiple artillery and artillery flak issues:
    * Fixed artillery not causing damage due to blast level being set to 0 ([#6772](https://github.com/MegaMek/megamek/issues/6772))
    * Corrected artillery flak range calculations that were incorrectly affected by target altitude ([#6788](https://github.com/MegaMek/megamek/issues/6788))
    * Added level information to blast damage messages in phase report for better clarity
    * Fixed Princess AI firing "homing" indirect Artillery Flak shots by treating Artillery Flak like ADA
    * Corrected gravity modification to artillery range which was being applied in reverse
    * Added UI message to prevent users from illegally firing Artillery as Indirect Flak attacks
    * Normalized height calculations for artillery area effect attacks to ensure correct targeting
* **Counter-Battery Fire Fix** ([#6763](https://github.com/MegaMek/megamek/pull/6763)): Prevents impossible Counter-Battery Fire shots from being taken, which previously caused players to waste ammunition with no effect. This specifically addresses cases where friendly and enemy off-board artillery deployed to the same map area with 0 range between them.
* **Homing Artillery Direct Fire Fix** ([#6908](https://github.com/MegaMek/megamek/pull/6908)): Fixed an issue preventing homing artillery from working in direct fire mode when targeting a hex. Removes outdated code restrictions for more accurate rule implementation.
* **ASF Flak Fix** ([#6909](https://github.com/MegaMek/megamek/pull/6909)): Fixed an issue where Artillery Flak shots at AeroSpace Fighter targets would register hits but deal no damage due to an erroneous elevation check. Artillery now properly uses altitude for ASF targets.

### Various Data Fixes and Improvements
* **IS Faction Medium 'Mech Review (2900-3049)**: Updated faction availability, intro dates, and added missing variants. Improved differentiation between A-rated and F-rated forces. Adjusted mercenary/MERC faction salvage distributions to address Clan tech availability issues.
* **Clan Conventional Infantry Updates** ([#6790](https://github.com/MegaMek/megamek/pull/6790)): Comprehensive overhaul of Clan conventional infantry availability based on equipment rating, faction preferences, and era-appropriate technological progression.
* **Free Worlds League Infantry Expansion** ([#6926](https://github.com/MegaMek/megamek/pull/6926)): Added advanced infantry armor kits for Free Worlds League Military forces starting in the early 3030s. Includes era-specific unit types, technology progression, and representation of post-Jihad provincial forces.

*Princess may or may not have been spotted doing something hilarious again this release. We can neither confirm nor deny.*

## MegaMekLab

### New Features
* **Enhanced Tab System** ([#1766](https://github.com/MegaMek/megameklab/pull/1766), [#1790](https://github.com/MegaMek/megameklab/pull/1790)): Complete reimplementation of the tab system to work with multiple units simultaneously:
    * Persistent Action Bar: "New unit" and "Load unit" buttons remain accessible regardless of open tabs
    * Detachable Tabs: Units can be popped out into separate windows with size persistence
    * Tab Sorting: Tabs can be reordered via drag and drop
    * Improved Navigation: Middle-click to close tabs ([#1787](https://github.com/MegaMek/megameklab/issues/1787))
    * Tab Management: Double-click on empty tab bar or container to reattach all tabs
    * Cross-window Tab Movement: Drag and drop tabs between different windows
    * Visual Improvements: Ghost tab visualization during drag operations and magnetic docking
    * Fixed Issues: Closing a tab now properly changes focus ([#1786](https://github.com/MegaMek/megameklab/issues/1786)), unit name changes are reflected in tab titles, and maximizing detached windows is now supported ([#1789](https://github.com/MegaMek/megameklab/issues/1789))
* **Handheld Weapons Record Sheets** ([#1796](https://github.com/MegaMek/megameklab/pull/1796)): Added capability to generate record sheets for handheld weapons, making it easier to track these critical components during gameplay.
* **Undo/Redo/Reload Functions** ([#1816](https://github.com/MegaMek/megameklab/pull/1816)): Implemented essential editing functions under a new Edit menu, allowing users to undo mistakes, redo actions, and reload units to their last saved state.

### Improvements
* **Quirks Tab Reworked** ([#1798](https://github.com/MegaMek/megameklab/pull/1798)): Redesigned the quirks selection interface with quirks now distributed horizontally in columns and stacked vertically by group for improved organization and usability.
* Fixed cargo text overlap for Small Craft ([#1779](https://github.com/MegaMek/megameklab/issues/1779))
* Record sheet preview now maintains pan/zoom position during unit edits

### Bug Fixes
* **Record Sheet Preview and Tab Improvements** ([#1831](https://github.com/MegaMek/megameklab/pull/1831)):
    * Fixed concurrent modification errors during record sheet updates
    * Corrected cursor behavior when leaving tabbed panes
    * Fixed null pointer exceptions when opening multiple units
    * Improved type safety with wildcard types
* **Asynchronous Record Sheet Rendering** ([#1827](https://github.com/MegaMek/megameklab/pull/1827)): Implemented per-page asynchronous rendering for record sheets, significantly improving performance and responsiveness when viewing complex units. Added print dialog preview functionality.

## MekHQ

### Important Information

* **Scrounge:** The Scrounge skill has been deprecated following a community poll. You'll be offered a XP refund for Scrounge when loading your campaign in 50.05. This is optional—but won't be available once the skill is fully removed. Scrounge has been removed from all Academy curricula and replaced (for now) with Negotiation. We know many of you use Scrounge as a way to restrict procurement to Admin/Logistics only. So we added a new campaign option that will do exactly that.
* **Upgrading from 50.04:** Make sure to take advantage of the new 'reset criminal record' (General tab) and 'Reset Prisoner Capacity Reductions' (Human Resources \-\> Personnel \-\> Prisoners & Dependents) campaign options. This will remove any bugged effects that might be hanging around from 50.04.
* **Upgrading from 50.03 or 50.04:** In addition to the above, we recommend everyone resets their SPA options to fix a number of unfortunate bugs. You can either load your favorite stock (not custom) preset, or load into campaign options and tick the 'disable all' SPA option. Then close campaign options, selecting the apply option. Finally, open campaign options back up and re-enable the SPAs you want to keep.

### New Features

* **Mercenary Auction Events** ([#6285](https://github.com/MegaMek/mekhq/pull/6285)): Previously, players randomly received free units while on contract. This has been replaced with a new Mercenary Auction system. Campaigns not using StratCon are unaffected.
* **Enhanced Ronin Event** ([#6277](https://github.com/MegaMek/mekhq/pull/6277)): Previously, random MekWarriors could join your campaign without your input. That's changed. Now the Ronin will approach you directly, and you may choose to recruit them in exchange for Support Points. What do they do with those points? Who knows. Ronin can now be either MekWarriors or Aerospace Pilots. Campaigns not using StratCon will instead recruit Ronin using C-Bills.
* **Techs use Administration** ([#6438](https://github.com/MegaMek/mekhq/pull/6438), [#6441](https://github.com/MegaMek/mekhq/pull/6441)): Techs optionally gain (or lose) work time based on their Administration rating. Tech academy qualifications now also improve the Administration skill.
* **Doctors use Administration** ([#6436](https://github.com/MegaMek/mekhq/pull/6436), [#6437](https://github.com/MegaMek/mekhq/pull/6437)): Doctors optionally gain (or lose) bed capacity based on their Administration rating. Medical academy qualifications now also improve the Administration skill.
* **Added Life Events**: Added various narrative events to reflect celebrations and important Milestones ([#6482](https://github.com/MegaMek/mekhq/pull/6482), [#6491](https://github.com/MegaMek/mekhq/pull/6491), [#6498](https://github.com/MegaMek/mekhq/pull/6498)).
* **Added Blood Group Tracking** ([#6283](https://github.com/MegaMek/mekhq/pull/6283)): See [here](https://megamek.org/2025/04/01/The-Blood-is-life.html) for more information! Manual assignment will come in 50.06.
* **Introduced AToW-Lite Aging System** ([#6535](https://github.com/MegaMek/mekhq/pull/6535)): When enabled, character skills are affected by age, based on A Time of War rules.
* **Added New SPAs** ([#6539](https://github.com/MegaMek/mekhq/pull/6539), [#6540](https://github.com/MegaMek/mekhq/pull/6540), [#6607](https://github.com/MegaMek/mekhq/pull/6607)): Over 30 new SPAs from AToW and AToW: Companion have been added.
* **Added New Skills** ([#6537](https://github.com/MegaMek/mekhq/pull/6537)): 20 new "Roleplay Only" skills, from ATOW, added for future use and flavor.
* **Added ATOW Skill Check Dialog** ([#6578](https://github.com/MegaMek/mekhq/pull/6578)): You can now perform ATOW-based skill checks via right-click in the Personnel tab.
* **Added ATOW Traits** ([#6540](https://github.com/MegaMek/mekhq/pull/6540)): Wealth, Connections, Unlucky, and Reputation. These are tied into Campaign Operations' Reputation system. Wealth includes optional Extreme Expenditure and Discretionary Income features based on the rules in ATOW:Companion ([#6565](https://github.com/MegaMek/mekhq/pull/6565)).
* **Added ATOW Attribute Scores** ([#6552](https://github.com/MegaMek/mekhq/pull/6552), [#6554](https://github.com/MegaMek/mekhq/pull/6554), [#6555](https://github.com/MegaMek/mekhq/pull/6555), [#6564](https://github.com/MegaMek/mekhq/pull/6564)): No mechanical impact—yet. The Intelligence personality trait has been rebranded as Reasoning, to avoid confusion with the Intelligence attribute score ([#6553](https://github.com/MegaMek/mekhq/pull/6553)).

### Improvements

#### Infirmary Improvements
* Automatically assign injured characters to doctors each day ([#6288](https://github.com/MegaMek/mekhq/pull/6288)), either from the Infirmary or via a new MekHQ Options option. Prioritization is based on injury severity and doctor skill. Prisoners are prioritized last.
* Right-clicking an infirmary patient now shows their medical history ([#6289](https://github.com/MegaMek/mekhq/pull/6289)).
* In GM Mode, you can inflict random advanced medical injuries via right-click in the Personnel tab ([#6457](https://github.com/MegaMek/mekhq/pull/6457)).

#### New MekHQ Options
* MekHQ options can now be accessed from the splash screen ([#6348](https://github.com/MegaMek/mekhq/pull/6348)). You no longer need to load into a campaign to set your User Folder.
* Auto-save when concluding a contract or mission ([#6473](https://github.com/MegaMek/mekhq/pull/6473)).

#### Prisoner Improvements
* MekHQ Capture Style now available for all campaign types, not just StratCon ([#6372](https://github.com/MegaMek/mekhq/pull/6372), [#6393](https://github.com/MegaMek/mekhq/pull/6393)).
* You won't be nagged about non-existent prisoners ([#6339](https://github.com/MegaMek/mekhq/pull/6339), [#6369](https://github.com/MegaMek/mekhq/pull/6369)).
* Prisoner Events now trigger at intended frequencies ([#6394](https://github.com/MegaMek/mekhq/pull/6394)).
* Prisoners are no longer executed when "freed" by Security ([#6521](https://github.com/MegaMek/mekhq/pull/6521)).
* Added campaign options to reset Criminal Records ([#6569](https://github.com/MegaMek/mekhq/pull/6569)) and Prisoner Capacity ([#6570](https://github.com/MegaMek/mekhq/pull/6570)) due to 50.04 bugs. Highly recommended when upgrading from 50.04.
* Numerous other fixes to the new prisoner mechanics.

#### Campaign Options IIC Improvements
* You can again apply skill modifiers by profession (e.g., MekWarriors vs. Vehicle Crew) ([#6427](https://github.com/MegaMek/mekhq/pull/6427)).
* Special icons now indicate whether an option is new in this version or since the last Milestone ([#6462](https://github.com/MegaMek/mekhq/pull/6462)).
* Campaign Options IIC will no longer cause factions to travel back in time to claim territory before they existed ([#6349](https://github.com/MegaMek/mekhq/pull/6349), [#6368](https://github.com/MegaMek/mekhq/pull/6368)).
* The 'Tabula Rasa' stock preset has returned!

#### StratCon Improvements
* Fog-of-war visuals improved—easier to see unexplored hexes and match enemy contacts to scenarios ([#6368](https://github.com/MegaMek/mekhq/pull/6368), [#6447](https://github.com/MegaMek/mekhq/pull/6447)).
* Deploying to Allied Facilities no longer halts patrols in adjacent hexes ([#6338](https://github.com/MegaMek/mekhq/pull/6338)).
* Training Forces effectiveness slightly reduced ([#6471](https://github.com/MegaMek/mekhq/pull/6471)). See documentation.
* Ignored scenarios no longer "wander" if an Allied Facility is present ([#6423](https://github.com/MegaMek/mekhq/pull/6423)).
* OpFor targeting is now smarter—more focus on your facilities and deployed forces ([#6425](https://github.com/MegaMek/mekhq/pull/6425)).
* Many other smaller bug fixes.

#### Contract Improvements
* Non-merc campaigns can now receive House Command Rights or Integrated, not just the latter ([#6459](https://github.com/MegaMek/mekhq/pull/6459)).
* New Dynamic Contract Difficulty option ([#6450](https://github.com/MegaMek/mekhq/pull/6450)): contracts optionally scale to your campaign's experience rating and we fixed an issue where Clan OpFors were under-skilled.
* New campaigns now offer a wider contract selection ([#6453](https://github.com/MegaMek/mekhq/pull/6453)), reducing downtime or forced overreach.
* You are no longer required to resolve all scenarios before concluding a contract or mission ([#6474](https://github.com/MegaMek/mekhq/pull/6474)).
* You can no longer negotiate individual contract clauses multiple times ([#6726](https://github.com/MegaMek/mekhq/pull/6726)). The negotiation skill of the negotiator still improves the chances of getting a good result.

#### Education Improvements
* In GM Mode, you can now mass-assign Education Levels to characters (e.g., give all MekWarriors a college degree) ([#6478](https://github.com/MegaMek/mekhq/pull/6478)).
* Prisoners sent to Academies will escape ([#6533](https://github.com/MegaMek/mekhq/pull/6533)). No more circumventing prisoner capacity by sending everyone to the local polytechnic.

#### User Folder Improvements
* Campaign Presets have been moved to the data folder and can now be accessed from the user folder ([#6520](https://github.com/MegaMek/mekhq/pull/6520)).
* Award Icons are now accessible via the User Folder ([#6529](https://github.com/MegaMek/mekhq/pull/6529)).

#### Maintenance Improvements
* Maintenance time is now deducted only during maintenance checks, per errata ([#6587](https://github.com/MegaMek/mekhq/pull/6587)).
* You can now perform maintenance immediately via the unit right-click menu ([#6588](https://github.com/MegaMek/mekhq/pull/6588)).
* The hanger now displays how many days till the next maintenance check ([#6589](https://github.com/MegaMek/mekhq/pull/6589)).

#### Repair & Refit Improvements
* Dynamically priced parts (such as AES) can now be repaired ([#6517](https://github.com/MegaMek/mekhq/pull/6517)).
* Parts now properly reset when a refit or repair job is canceled ([#6590](https://github.com/MegaMek/mekhq/pull/6590)). This fixed some very old bugs.
* Non-Clan factions can no longer request Clan refit kits prior to Tukayyid ([#6622](https://github.com/MegaMek/mekhq/pull/6622)).
* When salvaging an item you can now see how many of that item are in stock ([#6527](https://github.com/MegaMek/mekhq/pull/6527)).

#### Warehouse Improvements
* Improved the visibility of new parts ([#6168](https://github.com/MegaMek/mekhq/pull/6168)).
* Added the ability to GM remove individual items (rather than full stacks) and toggle item newness ([#6514](https://github.com/MegaMek/mekhq/pull/6514)).
* Added the GM ability to increase the number of items in the warehouse ([#6741](https://github.com/MegaMek/mekhq/pull/6741)).
* Added spare parts filter and a column that shows how many of an item are in use ([#6525](https://github.com/MegaMek/mekhq/pull/6525)).

#### Minor Improvements
* All daily nag dialogs now use the new Immersive Dialog style.
* Characters can no longer resign while in transit ([#6426](https://github.com/MegaMek/mekhq/pull/6426)). Where would they go?
* If Blind Drop or True Blind Drop is enabled, OpFor details won't be viewable in MekHQ ([#6458](https://github.com/MegaMek/mekhq/pull/6458)).
* The Personal Log has been split into Personal Log, Medical Log, Assignment Log, and Performance Report ([#6624](https://github.com/MegaMek/mekhq/pull/6624)).
* Hydrogen-based fuel costs now factor in hydrogen produced by fusion engines ([#6631](https://github.com/MegaMek/mekhq/pull/6631)).
* You can now avoid abandoned systems on the Interstellar Map ([#6632](https://github.com/MegaMek/mekhq/pull/6632)). No mechanical impact yet, but generally JumpShip Captains avoid empty systems whenever possible.
* Turret salvage has been restored ([#6584](https://github.com/MegaMek/mekhq/pull/6584)). (It was meant to be back in 50.04, but a single line of code prevented it.)
* Characters now (optionally) gain one SPA at age 16 ([#6608](https://github.com/MegaMek/mekhq/pull/6608)). This is designed to work with the new SPAs added from A Time of War.
* Added New Player Quickstart to the splash screen ([#6665](https://github.com/MegaMek/mekhq/pull/6665)). This drops you into a fully loaded campaign with a generous contract all ready for the picking.
* autoAwards now correctly handles company-level and higher awards ([#6702](https://github.com/MegaMek/mekhq/pull/6702)). Hurray!
* You no longer need to use GM Mode to mothball or activate conventional infantry, or large vessels (such as DropShips) ([#6722](https://github.com/MegaMek/mekhq/pull/6722)).
* Many, many other minor fixes and improvements.

*Note: This release includes numerous additional bug fixes and under-the-hood improvements not individually listed here across all three programs (MegaMek, MegaMekLab, and MekHQ). For a complete list of all changes, please refer to the "Change Logs (Release Specific)" section at the end of these release notes or visit the individual PR descriptions on GitHub.*

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

2. Logging is now enabled by default but if you want to turn off the logging:
    - Go to Client Settings
    - Select the Main tab
    - Uncheck the "Log all game actions. (Server only)" option
    - [Find the Settings here](https://imgur.com/RCN2U7a)

3. Play **ground combat games only** that meet these requirements:
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
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.50.04...v0.50.05)  
[Download MegaMek 0.50.05](https://github.com/MegaMek/megamek/releases/download/v0.50.05/MegaMek-0.50.05.tar.gz)

### MegaMekLab Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megameklab/compare/v0.50.04...v0.50.05)  
[Download MegaMekLab 0.50.05](https://github.com/MegaMek/megameklab/releases/download/v0.50.05/MegaMeklab-0.50.05.tar.gz)

### MekHQ Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/mekhq/compare/v0.50.04...v0.50.05)  
[Download MekHQ 0.50.05](https://github.com/MegaMek/mekhq/releases/download/v0.50.05/Mekhq-0.50.05.tar.gz)
