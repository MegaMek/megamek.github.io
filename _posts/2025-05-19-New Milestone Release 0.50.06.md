layout: post
title:  "MegaMek, MegaMekLab, and MekHQ 0.50.06 Released"
date:   2025-05-19
tags:
  - Releases
  - MegaMek
  - MegaMekLab
  - MekHQ
---

Hi Everyone!

## Welcome to Milestone Release 0.50.06!

We're pleased to announce the immediate release of MegaMek 0.50.06 as a Milestone Version. This quick follow-up to 0.50.05 addresses a couple of issues in 0.50.05 while delivering a new Milestone for our users. Before we get into the details I want to give everyone a reminder of the two major release types.

### Understanding Our Release Types

#### Milestone Builds
Like a well-maintained Thunderbolt, Milestone builds have proven themselves reliable in the field. These are Development releases that have been thoroughly tested by the community and found free of major bugs. Released roughly every 9-12 months, and we try to offer the perfect balance between stability and updated features.

It's important to note that "Milestone" doesn't mean completely bug-free—rather, these builds are less likely to contain game-breaking issues, with most remaining bugs being minor nuisances that have known workarounds.
**Best for: Players that want a stay on a release with a low risk of bugs, good for new players.**

#### Development Builds
Development builds are like prototype 'Mechs fresh from the factory—packed with new features but not fully battle-tested. While generally stable, they may have occasional quirks or unexpected behavior, similar to a temperamental targeting computer.
**Best for: Veteran players that crave the rush of new stuff, not to be confused with Necrosia infused players that want the nightly releases for that you need the [Discord](https://discord.gg/megamek)

#### Moving to a new Milestone (Critical step if on Java 11)
Currently, most players are using either the previous Milestone (0.49.19.1) or a recent Development release. With version 0.50.06 now being designated as a Milestone, we're providing a new Milestone for all players to move from 0.49.19.1 to 0.50.06.

**It is CRITICAL if you're using 0.49.19.1 with Java 11 you MUST update to Java 17 to run the new Milestone.** Please see this [link for instructions](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-%28Eclipse-Temurin-Open-Source-Java%29)

### About This Release
While version 0.50.05 was a very strong release overall, it contained a couple of bugs related to C3 computers that required reloading as a workaround. Because of this issue, we made the decision not to designate 0.50.05 as a Milestone Release. But like the old 0.49.7 it was a contender and a strong release.

For the past three weeks, the development team has worked incredibly hard and with remarkable speed to focus exclusively on bug fixes across all three programs. This dedicated effort has led to our unusual decision to release version 0.50.06 as a Milestone immediately without the usual feedback period.

Players using our nightly builds and our test pilots have reported:
* No major bugs discovered
* Only a few minor irritants remaining
* Exceptional stability across all systems

Without further ado, below you'll find an abbreviated list of the fixes and small improvements included in this release.

### MegaMek
We have around 88 bug fixes in this release and the change logs will list them all. But a few we want to call out a couple of the key ones.

* [Fixes the final facing facing modifier for princess, adds a few special case handlings and tests by @Scoppio](https://github.com/MegaMek/megamek/pull/7016)
* [Feat: expose Princess new external levers to allow players to spice things up by @Scoppio](https://github.com/MegaMek/megamek/pull/7019)
* [Feat: you can setup so princess herd only with her own units by @Scoppio](https://github.com/MegaMek/megamek/pull/7021)

### MegaMekLab
Around 27 Bug fixes, with a major focus on the printing the record sheets. But a few to call out.
* [Adds option to show weapons quirks to record sheets by @exeea](https://github.com/MegaMek/megameklab/pull/1850)
* [Print with Weapons sort order by @exeea](https://github.com/MegaMek/megameklab/pull/1847)
* [Force Builder view - build and print from MML by @exeea](https://github.com/MegaMek/megameklab/pull/1835)
* [Heat view now displays also total dissipation and total heat by @exeea](https://github.com/MegaMek/megameklab/pull/1871)
* [Print Damaged Units in RS preview/print by @exeea](https://github.com/MegaMek/megameklab/pull/1836)
* [Various RS fixes + Large Craft ammo amount allocation dialog by @exeea](https://github.com/MegaMek/megameklab/pull/1887)

### MekHQ
There are 170 bug fixes and improvements for this release. This is a very small highlight of them.

* [Added Support for Mission and Scenario Hyperlinking by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6643)
* [Made Injuries Appear More Serious By Changing Terms by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6670)
* [PR: Added 'Advanced Multiple Days' & 'Mass Personnel Training' Buttons by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6811)
* [Improvement: Renamed Several Skills to Better Match ATOW by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6888)
* [Improvement: Added In-Game Tutorial Documentation to the Briefing Room for AtB and StratCon Contracts by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6862)
* [Improvement: Added Career/Any, Running, Swimming, Melee Weapons, Thrown Weapons, Support Weapons and Zero-G Operations skills; Added Additional Science, Art & Interest Specializations by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6891)
* [Improvement: Improved Person View to Include a Larger Portrait & Upgraded Several Components; Moved Medical Record Button to Personnel Right-Click Menu by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6894)
* [Improvement: Updated tooltip in MRMS dialog and JUnit Tests for `MRMSService.java` by @psikomonkie](https://github.com/MegaMek/mekhq/pull/6889)
* [Improvement: Updated Campaign Options to Use Civilian Instead of Dependent Terminology by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6928)
* [Improvement: Reworked Integrated Command Rights to No Longer AutoAssign Forces and to Allow Interactions with StratCon by @IllianiBird](https://github.com/MegaMek/mekhq/pull/6813)
* [Improvement: Extended Tutorialization Links & Glossary to Cover Most Tabs by @IllianiBird](https://github.com/MegaMek/mekhq/pull/7041)

and many many more.

### Looking Ahead: The Road to Version 50.07 and Beyond
#### Extended Development Cycle
Our current development team is the largest, most diverse, and most skilled in history of the projects. After discussion, we've decided it's time to start modernizing some of the code dating back to MegaMek's original inception.

This modernization effort:
* Will likely introduce some bugs in upcoming releases (Starting in 0.50.07)
* Is why we're planning a longer development cycle (with version 50.07 targeted for Q3 2025)

The extended development window will give us the necessary time to update the codebase while implementing several new features. If you've been following our development releases, you've already started to see meaningful improvements, which will continue across all programs.

#### GitHub and how we store the file in the Data folder

Significant changes are coming specifically to how we store and manage our data on GitHub. These changes will be implemented during the 0.50.07 release cycle. We'll be releasing a detailed announcement explaining the specifics of these changes in about a week. This information will be particularly important for developers who use MegaMek's data in their projects.

#### Java 21 and Beyond

All of these improvements are necessary to better position ourselves for compatibility with Java 21 and beyond. The significant changes and improvements already visible in recent development releases will continue across all programs as we move forward.

#### Community Input: Equipment Rules

One of our key initiatives is to thoroughly evaluate what equipment rules MegaMek doesn't currently have implemented. We will soon open a dedicated forum thread on the official forums where we will:
* List equipment rules we know are not implemented or only partially implemented
* Invite community feedback to identify gaps we may have missed
* Gather thoughts on prioritization and implementation approaches

We'll provide more specific details when we open this thread and encourage broad community participation.

### A Note on MegaMek's Future
I know some aspects of this post might prompt speculation, but we want to be clear: there is nothing concerning happening with MegaMek/MegaMekLab/MekHQ. We simply finally have the resources and team to start digging in and taking the programs to the next level.

Don't expect dramatic visual changes—the programs will always maintain its classic interface that "looks like a year 2000 accounting program." That's part of its charm! However, under the hood, we're working toward:
* More state-of-the-art, responsive code
* Better logging for easier bug identification
* Fixes for long-standing pain points in gameplay
* Positioning ourselves for long-requested features and improvements

All of these improvements will take time, and we view 50.06 as both a launching point and the next step for players to move too. It allows us to focus on the development cycle without the pressure of an aging Milestone release (0.49.19.1) using a Java version (Java 11) that we have moved past. 

### Player Options Going Forward
Version 0.50.06 serves as a good point for players who prefer reliability while we embark on our next development releases. Players have two paths forward:
* Stick with 0.50.06 as a Milestone release while we work on bigger changes
* When 0.50.07 drops in Q3 join us for the development experience

---
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

### How to automatically report bugs: Turn on Sentry

To maintain optimal performance in your MegaMek missions, we've integrated Sentry into our systems for efficient bug tracking and error resolution. Sentry monitors issues in real time and automatically generates detailed bug reports, helping us fix problems swiftly and keep you focused on the fight.

🔒 **Your Privacy Matters**:
- Sentry is designed to respect your privacy. It does not track any personal information
- **By default, Sentry is turned OFF**. You have complete control over whether to enable it

📝 **How to Enable Sentry if you want to help**:
1. Open the sentry.properties file (located in the root of the program folder) in a text editor of your choice
![Sentry 1](/assets/images/Sentry/Sentry%201.jpg)

2. Once open, change the line `enabled=false` to `enabled=true` and save the file
![Sentry 2](/assets/images/Sentry/Sentry%202.jpg)

The other information in the file is the Server information where Sentry sends its bug reports. We have a channel on our Discord where only Developers/Engineers get notified of the reports. Here is an example:
![Sentry 3](/assets/images/Sentry/Sentry%203.jpg)

This will allow Sentry to start tracking errors and bugs in the game. If you encounter any issues, Sentry will automatically send a report to our development team, helping us identify and resolve problems quickly.

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
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.50.05...v0.50.06)  
[Download MegaMek 0.50.06](https://github.com/MegaMek/megamek/releases/download/v0.50.06/MegaMek-0.50.06.tar.gz)

### MegaMekLab Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megameklab/compare/v0.50.05...v0.50.06)  
[Download MegaMekLab 0.50.06](https://github.com/MegaMek/megameklab/releases/download/v0.50.06/MegaMeklab-0.50.06.tar.gz)

### MekHQ Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/mekhq/compare/v0.50.05...v0.50.06)  
[Download MekHQ 0.50.06](https://github.com/MegaMek/mekhq/releases/download/v0.50.06/Mekhq-0.50.06.tar.gz)


Thank you for your continued support of MegaMek. We're excited about the future of the project and grateful to have such a dedicated community along for the journey!