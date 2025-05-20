---
layout: post
title: "Hot Fix for the New Milestone Release 0.50.06"
date: 2025-05-20
tags:
- Releases
- MegaMek
- MegaMekLab
- MekHQ
---

### 🚨 **URGENT: MekHQ 0.50.06 HOTFIX AVAILABLE** 🚨

**IMPORTANT:** This hotfix addresses ONLY the unit-purchase bug in MekHQ. Where if you tried to purchase a unit with GM mode off it would hard lock MekHQ. It does NOT affect MegaMek or MegaMekLab.

### WHO NEEDS THIS?

Anyone who downloaded MekHQ version 0.50.06 between May 19, 2025 and May 20, 2025 (16:00 UTC / 12:00 PM ET / 9:00 AM PT / 5:00 PM BST / 6:00 PM CEST / 1:00 AM JST May 21)

### HOW TO APPLY THE HOTFIX:
- End your current contract (count it as a free 'success'). 
- Close MekHQ and save if it's currently running
- Redownload the 0.50.06 MekHQ release from our website
- Backup your EXISTING 0.50.06 MekHQ folder by renaming it (e.g., add "_old" to the name)
- Unzip the new download to a fresh location. Do NOT extract into your existing 0.50.06 folder
- Launch MekHQ from the NEW folder
- Setup MekHQ like you would a new release. e.g set up your user folder, copy custom files, etc.
- Once everything is working properly, you can delete the backup (Original) folder

---
## Technical Stuff

### Java 17 is *Required* for all 0.50.x Releases

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

### State of the Universe (February 18, 2025)
If you haven't given the [State of the Universe (read here if you missed it)](https://megamek.org/2025/02/18/2025-State-of-the-Universe.html) a read, please do. There's lots of information in there that is still recent and relevant.

### Planetary Data Editor
The 0.50.04 release includes a new Planetary Data Editor as an alpha feature. This editor works with our newly implemented YAML-based planetary data system, making it significantly easier to view and modify planetary information.

The editor allows you to work with individual planet files rather than the previous approach of massive XML files that were difficult to navigate and edit. Each planet now has its own dedicated file containing all relevant information in one place - basic data, population changes, faction histories, and SICS codes.

This new feature is part of our larger initiative to improve usability for campaign managers and data contributors. We have an Alpha version of the Planet Editor available here [Planetary Systems Editor (ALPHA)](https://aaron-gullickson.shinyapps.io/planetary_system_editor/). Since this only edits at this time you'll need to make sure you keep back-ups of the original local files. Use at your own risk.

For more information about the planetary system rework, visit: [Planetary System File Rework](https://megamek.org/development/2025/02/17/Planetary-System-File-Rework.html)

**Note**: Being an ALPHA feature, we welcome your feedback and bug reports.

## User Data Directory for MegaMek, MegaMekLab, and MekHQ

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
