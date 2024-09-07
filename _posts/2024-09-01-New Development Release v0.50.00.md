---
layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.50.0 Release Notes"
date: 2024-09-01
categories: release
---

Hi Everyone,

It's here at last: **0.50.0!** This is again one of the largest releases we've ever done. Our standard release notes have changed and there is a lot in these notes. We assume that, as BattleTech players, everyone always reads all the notes. 😊

Let's start with a couple of important reads:

[Prepare for the transition to java 17 upcoming changes and how to stay updated](https://megamek.org/2024/05/30/Prepare-for-the-Transition-to-Java-17-Upcoming-Changes-and-How-to-Stay-Updated.html)

Next:

[Pre-Release Notes for 0.50.0-Development](https://megamek.org/2024/08/25/Pre-Release-Notes-for-0.50.0-Development.html).

Since you've read the links above, you know about Java 17, the new unified release, and the tar.gz file transition and are ready for it. Something else to be aware of is we've had to increase the memory that the programs need to run:

- MegaMek upped to 4 GB of RAM
- MegaMekLab stays at 1 GB of RAM
- MekHQ now needs 4 GB of RAM

---

## With the serious technical stuff out of the way, here is just a small look at what's changed!

### MegaMek

- Numerous bug fixes, including what we believe are final fixes for SimFire issues.
- Enhanced markers for hit, drifted, and missed artillery and bomb attacks.

![Artillery Markers](https://i.imgur.com/2sK7cb6.png)

- Implemented the ability to place and carry cargo objects (currently for Meks and ProtoMeks only). Capture the flag anyone?
- [Ammo Autoconfig anyone?](https://github.com/Sleet01/megamek/blob/90f17dd865bdc49476f16f711f15e7da4975df05/megamek/docs/Automatic%20Ammunition%20Configuration%20tool%20doc%200.50.0.pdf)

Here's an update on our favorite Sociopath - Princess

[![Princess Update](http://i.imgur.com/F4uIfqWm.png)](https://imgur.com/F4uIfqW)

After spending a lot of time at Blackjack, she's now mastering the art of scouting. Her new heat mapping feature helps her predict enemy moves, even under double-blind conditions. She's really getting a handle on using double-blind now!

She's also become more cautious in hazardous terrain. On low-gravity maps, she avoids pushing units beyond safe movement limits, while on high-gravity maps, she's careful with jumping to prevent potential mishaps. She's finally recognizing the risks of Deep Snow and Rubble too.

Additionally, Princess is becoming more adept with other hazardous terrains like Magma, Swamp, Mud, and Water. She's now ensuring that units avoid unnecessary danger in these environments. Water movement has improved for UMU and Submarine Infantry units, though transitioning in and out of water still has its challenges.

Beyond terrain navigation, Princess has gotten smarter about weaponry too. The latest update introduces semi-intelligent and randomized munition selection. Princess now checks enemy team compositions for different unit types, armor, and capabilities like high speed or ECM, and even factors in available support for guided munitions. She's prepared for both day and night conditions.

Princess is also adjusting her settings so now her dialog's sliders have clearer titles, and her Bravery sliders are finally labeled right.

### MegaMekLab

- Improved record sheet shading.
- Record sheets now display in the unit viewer.

### MekHQ

- Expanded and developed the [Education Module](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Turnover%20%26%20Retention%20Module.pdf)
- Added execution and jettison options for prisoners, marking the first steps toward implementing a war crimes rating that will impact unit ratings.
- Improvements to [Autoawards](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Awards%20Module.pdf) and [Turnover & Retention](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Turnover%20%26%20Retention%20Module.pdf)
- Enhanced Force Generator role functions.
- Updated handling of divorce, pregnancy, and death events.
- Added [random personality](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Random%20Personalities.pdf) functionality (no gameplay impact yet).
- Updated presets, with StratCon now considered out of Alpha and into Beta.
- Starting to depreciate the FMMr (Field Manual: Mercenaries-Revised) rules and converting to Campaign Ops rules where applicable.
- We've changed how Unit Card/Rating display and they update weekly now.

---

## Java 17 is now Required

Starting with version 0.50.0-Development, **Java 17 is REQUIRED**. For more detailed instructions, check our updated guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)). Make sure to read the directions carefully, especially **Step 6**. We'll continue using Java 17 until Fall 2026. Versions beyond Java 17 are not officially supported.

---

## Single/Unified Package Release

We've transitioned to a single, unified package for our releases. This means a single download contains files for all supported operating systems. For more details see [MegaMek ‐ Single Unified Package Release](https://github.com/MegaMek/megamek/wiki/MegaMek-%E2%80%90-Single-Unified-Package-Release)

---

## Important Change: We've Transitioned to .tar.gz Files

We are now using `.tar.gz`  files for downloads, which are more efficient and consistent across different systems. See [here for details](https://github.com/MegaMek/megamek/wiki/Tar.gz-and-the-MegaMek-Suite)

### Why Use .tar.gz Files?

- **Unified Packaging:** Works on Windows, macOS, and Linux.
- **Efficiency:** Better management and compression of files.
- **Compatibility:** Supported by most modern OSs and third-party tools.

| Operating System | Native .tar.gz Support | Recommended Method | Alternate Extraction Method |
|------------------|------------------------|---------------------|---------------------------|
| Windows 11 (version 22H2 and later) | Yes | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | Use File Explorer: Right-click the `.tar.gz` file, select "Extract All" |
| Windows 11 (versions before 22H2) | No | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | Use Command Prompt with `tar -xvzf filename.tar.gz` |
| Windows 10 (version 1803 and later) | No | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | Use Command Prompt or PowerShell with `tar -xvzf filename.tar.gz` |
| Windows 10 (versions before 1803) & Earlier Versions | No | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | N/A |
| macOS (starting from Mac OS X 10.0 Cheetah, March 2001) | Yes | Built-In Tools: Use Finder's built-in Archive Utility, or [The Unarchiver](https://theunarchiver.com/) | Use Terminal with `tar -xzvf filename.tar.gz` |
| Linux (all major distributions) | Yes | GUI's built-in unarchiver | Use Terminal with `tar -xzvf filename.tar.gz` |

## A Few Reminders

### Setting Up a Custom User Data Directory for MegaMek, MegaMekLab, and MekHQ

How to use the [Custom User Data Folder](https://github.com/MegaMek/megamek/wiki/Setting-Up-a-Custom-User-Data-Directory-for-MegaMek%2C-MegaMekLab%2C-and-MekHQ)

### The Milestone System Summary

Details on the replacement of the Stable/Development approach are available [here](https://github.com/MegaMek/megamek/wiki/Milestone-Releases).

### State of the Universe (January 19, 2024)

If you haven't read the [State of the Universe](https://bg.battletech.com/forums/index.php?topic=83774.0), please do so. It's packed with relevant information.

---

## MekHQ Campaign Update Instructions

To ensure the integrity of your MekHQ campaign, follow these steps when updating between versions:

1. Complete ongoing contracts, save, and exit the program.
2. **Backup your campaign and custom files.**
3. **DO NOT COPY** MegaMek saves or preference files from different versions.
4. Update MekHQ to the latest version. **Keep each version in its own folder.**
5. Load your save file and advance the game by one day.
6. Re-save custom presets.
7. Exit and restart MekHQ.

---

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek). We're also part of [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52) Discords. Follow us on Facebook: [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

---

## Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

---

## Change Logs (Release Specific) and Download Links

For this release the change logs are too large for the forum, please see them at the download links provided.

**MegaMek Change Log**
[Download](https://github.com/MegaMek/megamek/releases/tag/v0.50.0)

**MegaMekLab Change Log**
[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.50.0)

**MekHQ Change Log**
[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.50.0)

Thanks!

PS: If you made it this far I'm going to assume you read [Pre-Release Notes for 0.50.0-Development](https://megamek.org/2024/08/25/Pre-Release-Notes-for-0.50.0-Development.html).
