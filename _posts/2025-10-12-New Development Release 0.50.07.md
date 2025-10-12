---
layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.50.07 Released"
date: 2025-10-XX
tags:
  - Releases
  - MegaMek
  - MegaMekLab
  - MekHQ
---

Hi Everyone!

I can't believe it's been almost five months since our last MegaMek release. As we move into the next set of development releases, I wanted to take some time to discuss what's been happening over these past five months. We've had some very significant changes, and while some of our previous blog posts have touched on these topics, I think it's important to bring everything together in one place.

For more details on what's been happening with the projects over the past several months, check out our [Looking Ahead and Looking Back: MegaMek Development Update 2025](https://megamek.org/2025/08/15/Looking-Ahead-and-Looking-Back-MegaMek-Development-Update-2025.html) post.

## The Big Picture: Licensing and Code Modernization

Probably the biggest change is that we are now officially operating under our new licensing structure. All of our code across all projects is now under GPL 3, and all of our data has been moved to Creative Commons. If you want to dive deep into the nitty-gritty of what changed, when we made these licensing changes, and why, check out our [comprehensive licensing announcement from May](https://megamek.org/announcements/licensing/2025/05/25/Important-Update-MegaMek-License-Changes-Coming-with-Version-0.50.07.html). We're glad to have this process completed and behind us.

## Code Refactoring: The Necessary Overhaul

In addition to the licensing changes, we've had to make significant refactoring to our codebase across all three programs. If you're not familiar with the term "refactoring," think of it as pulling every single item out of a closet, organizing everything, and then putting it all back in a new, more logical order. It's the same stuff, but structured better for future use.

### What This Means for 0.50.07

A few important things to understand about this release:

**This release is massive in terms of code changes.** Every one of the programs has undergone extensive overhauls. The numbers speak for themselves:
* **MekHQ:** 419 pull requests merged
* **MegaMek:** 244 pull requests merged
* **MegaMekLab:** 97 pull requests merged
* **Total Changes:** 760 unique PRs across all three programs

For those unfamiliar with the term, a "pull request" (or PR) represents a single code change, bug fix, or feature that has been reviewed and merged into the program. Each PR can range from a simple one-line fix to massive overhauls involving hundreds of files. The 760 PRs in this release represent an enormous amount of work from our volunteer development team and contributors.

When you look at the changelog, it is literally too large to include in a single blog post. Instead, we're going to highlight a few key improvements like we normally do and let you explore the full release notes at your own pace.

**We do expect some bugs and issues.** You cannot undertake this level of changes and refactoring without encountering some problems. This is the reality of software development, especially with a codebase that's been evolving for 23 years. While there will be issues, we'll work through and fix them as they're reported. The key point is this: in the long run, these changes put us in a much better position code-wise than we were before.

### A Massive Thank You

I need to call out and thank Tex for taking on the absolute Herculean job of leading much of this code refactoring work. Additionally, I want to recognize all the other developers for helping, chipping in, supporting, and doing everything they do to make these programs what they are. This was truly a team effort, and the amount of volunteer hours that went into this release is staggering.

## Looking Ahead: Release Timeline and Java Support

We're looking forward to being in open waters for a while. As we look further ahead, we don't anticipate another Milestone release until probably well into 2026. As we approach the end of 2026, we will also be upgrading our Java requirements, as we've discussed in previous announcements.

### Current Java Support Status

Let me clarify our current Java position:

Right now, we officially support only Java 17. This is what we test and code with, and this is what we recommend all players use.

We do have community members using Java 21, and knock on wood, they aren't reporting any significant issues. However, that doesn't mean we're officially telling you to upgrade to Java 21. We are actively evaluating what the next upgrade path will be, and we'll communicate that decision well in advance when we make it.

If you experience any issues while running on Java 21, our first troubleshooting step will be to ask you to revert to Java 17 to see if the problem persists. That said, if you are using Java 21 and have any feedback—positive or negative—please let us know.

## MekBay Update: For Those Who Missed the Launch

In addition to all the changes in the core programs, we've been steadily developing MekBay. If you missed the announcement or haven't checked it out yet, I encourage you to read [Introducing MekBay](https://megamek.org/2025/07/08/Introducing-MekBay-MegaMek-Web-Evolution.html). Drake and cat/dev/random continue to do phenomenal work, steadily pushing out update after update to improve the functionality. We have really big plans for this tool's future.

### MekBay's Different Release Model

Something important I want to call out: **MekBay will not have releases like MegaMek.** MekBay will release updates continuously. If you're using MekBay, you'll simply see a notification when updates are available, and you can update immediately. It's much more like a modern web application in that respect.

To head off the inevitable question: "Why can't you do that for the core programs?"

The simple reason is we can't. The nature of the code in the original programs (MegaMek, MegaMekLab, and MekHQ) prohibits that kind of automated updating system. These programs were built in an era before such systems were common, and the architecture doesn't support patching or automated updates. It's just not feasible for us to even remotely consider any type of patching or automated update system for the core programs without a complete rewrite.

### MekBay's Future Integration

We're really looking forward to expanding what MekBay can do and how it aligns with MegaMek. In particular, we're exploring ways to build units and create unit lists that can be seamlessly passed back and forth between the programs. However, this is not something that's going to be built overnight. We need to be realistic about our resources and the fact that we currently have the capacity to support both programs, but development on integration features will take time.

If you are a web developer and are interested in contributing to MekBay's development, the code is available for review and contribution. We'd love to have more hands helping with this exciting new tool.

## BattleTech Playtest Rules

We've implemented Playtest Package One and Playtest Package Two in this release as optional rules. If you'd like to try them out, you can enable them in the game options by searching for "PlayTest." For complete details on our approach to the playtest rules, backwards compatibility, and what this means for MegaMek's future, please read our [comprehensive playtest implementation announcement](https://megamek.org/announcements/development/playtest/2025/09/11/MegaMek-and-PlayTest.html).

## What's New in This Release

With all that context out of the way, let's get into some of the new and exciting features in 0.50.07!

### MegaMek

MegaMek has received substantial updates across gameplay, UI, and core systems:

**New Rules & Features**
* Booby Trap rules for ground combat
* Heroic/Legendary skill level tracking
* Public Playtest 1 and 2 Implementation
* Favorite bot behavior and new convoy AI options
* Enhanced multiple map and odd-width map support

**Faction & Unit Updates**
* Faction data overhaul: new factions, updated Clan forces, improved availability
* Many fixes to Battle Armor, ProtoMek, trailers, equipment rules, BV calculations, ammo handling, and weapon effects

**UI & Gameplay Improvements**
* MekView Entity Readout updates with improved display
* New keybind options, zoom controls, and phase report layout
* Better quick tips, new splash screen for ultrawide monitors, onboard PDF viewing
* Board editor upgrades: deployment zones, board tags, advanced search

**Bug Fixes**
* Mobility/PSR improvements and consistent building entry for infantry
* Numerous NPE (Null Pointer Exception) protections for movement, lobby, and targeting
* UI and icon fixes for units and faction/tech details
* Improved force assignment, chat, and starting location in the lobby

**Behind the Scenes**
* Faster, more robust build and logging systems
* Refactored panels/dialogs for smoother performance
* Updated Gradle, dependencies, and internal code organization

### MegaMekLab

MegaMekLab has seen substantial improvements to record sheets, GUI usability, and construction options:

**Record Sheet Improvements**
* Fancy pips for better visual clarity
* OmniVees now properly display as Omni on the sheet
* Physical attacks now displayed on record sheets
* To-hit modifiers added (with ongoing work for obscure cases like interface cockpits)
* Default font changed to Roboto for cleaner, more readable sheets
* Max Heat (Dissipation) calculation improved, now handles rapid-fire and one-shot weapons correctly
* Various handheld weapon fixes, mostly related to ammo display
* PPC Capacitor now correctly adds Clan CASE to the location
* Beast-mounted infantry now use the correct damage divisor
* Shields display the correct number of pips again

**GUI Enhancements**
* Sort units in the print queue
* Reworked Conventional Infantry UI is cleaner and less error-prone
* Battle Armor ammo bin size can now be set from the Equipment tab instead of requiring the Criticals tab
* Items weighing less than a kilogram now display their actual weight instead of 0 (particularly relevant for some conventional infantry weapons)
* Better layout for quirks selection

**Construction Options**
* Modular Weapon Mount for Battle Armor added
* ProtoMek Transport Bays (on DropShips and similar) now functional
* Gun Emplacements construction support! (These DO NOT support official rules, only emplacements as we have implemented them)

### MekHQ

MekHQ has received extensive updates this release, with improvements touching nearly every aspect of campaign management. Here are some of the highlights:

**Personnel & Character Systems**
* Introduction of a brand new personnel recruitment market
* Attribute scores now impact skills
* Heroic & Legendary skill levels are now tracked
* Numerous new SPAs added, including some specifically for Administrators
* Added 254 Civilian Professions
* Admins can no longer take multiple admin professions at the same time
* Added the ability to perform single-attribute and double-attribute AToW attribute checks
* Permanent AsTechs & Medics now have tangible value

**Faction & Reputation Systems**
* Introduction of a brand new faction reputation tracking system
* New campaign starting locations - no more starting on Galatea with every campaign
* New options for randomized campaign factions & start dates

**StratCon & Combat**
* StratCon now supports pirate campaigns, me harties!
* OpFor callsign generation can be toggled on/off
* Stopped the Clans cheating at Batchalls (yet again) and other critical force generation fixes
* Decreased support point cost of Mercenary Auctions & Ronin Hires by 50%
* New, more accurate tracking of contract requirements

**Interface & Quality of Life**
* General GUI improvements across the main interface and many smaller dialogs
* Significant improvements to Mass Repair and Mass Salvage
* Massive glossary updates with a new look, new entries, and documentation now viewable in-game!

**Plus over 100 other bug fixes & improvements** not individually listed here.

* Nearly forgot...Rather raid than trade? Hoist the Jolly Roger, take what you can salvage, and owe nothing to the Great Houses, me harties—MekHQ now supports  pirate campaigns!

## Important: MekHQ Campaign Update Instructions for 0.50.07

Over the past year, we've become aware that upgrading campaigns across versions has become increasingly tedious, with more steps added each release. You had to resave your campaign, manually open and close MekHQ, end current contracts, etc. That's why, in 0.50.07, we've added an automatic campaign upgrader to MekHQ. Simply load your 0.50.06 campaign and follow the instructions on screen. MekHQ will handle everything.

**Before You Upgrade:**
* **Save your campaign in 0.50.06.** Since 0.50.06 was a Milestone release, this is required for 0.50.07 to load your campaign.
* **Save any custom presets in 0.50.06.** Presets not saved in 0.50.06 will not be compatible with 0.50.07.

**Safety Steps:**
1. **Make a backup of your campaign and custom files.** This is critical to prevent data loss.
2. **Keep each version in its own folder.** Never overwrite existing installations - MekHQ is NOT backward compatible.
3. **Do NOT copy** MegaMek saves or preference files between versions.

Once you've completed these steps, load your campaign in 0.50.07 and follow the on-screen prompts. The automatic upgrader handles the rest!

## Technical Stuff

### Java 17 is Required for all 0.50.x Releases

Starting with version 0.50.0, Java 17 is **REQUIRED** to play. We've updated our guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) with detailed instructions.

It's crucial to read the directions carefully, especially Step 6, which covers a recent change to the Adoptium installer. Make sure to select "Install for all users of this machine" in the Installation Scope.

We will continue using Java 17 as our official supported version through 2026. If you choose to use a Java version beyond 17, it isn't officially supported, and our standard troubleshooting response will be to ask you to revert to Java 17.

## A Few Reminders

### The Milestone System Summary
Please see [this link](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) for details on our Milestone release system.

### User Data Directory
We support a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.

For complete details on setting up and using the User Data Directory, see our previous release notes or the documentation in the programs.

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

### Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.50.06...v0.50.07)  
[Download MegaMek 0.50.07](https://github.com/MegaMek/megamek/releases/download/v0.50.07/MegaMek-0.50.07.tar.gz)

### MegaMekLab Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megameklab/compare/v0.50.06...v0.50.07)  
[Download MegaMekLab 0.50.07](https://github.com/MegaMek/megameklab/releases/download/v0.50.07/MegaMeklab-0.50.07.tar.gz)

### MekHQ Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/mekhq/compare/v0.50.06...v0.50.07)  
[Download MekHQ 0.50.07](https://github.com/MegaMek/mekhq/releases/download/v0.50.07/Mekhq-0.50.07.tar.gz)

---

Thank you for your continued support and patience as we work to improve these programs. We're excited about where the project is heading and grateful to have such a dedicated community along for the journey.

Seyla!