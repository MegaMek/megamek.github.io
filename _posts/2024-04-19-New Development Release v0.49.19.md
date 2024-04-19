**Welcome All to 0.49.19!**

This is another MASSIVE release.

Before delving into the specifics, as one of the veteran developers (aka an old guy) involved in the projects, I would like to extend my heartfelt gratitude to all the current developers and contributors, both new and old. The pace has notably accelerated from the slowdown we experienced last year, and this is undoubtedly attributed to the dedication and passion they bring to the projects.

Back to the releases; we've again pushed a ton of code in the last two months. We realize the last few releases have had some issues in them and we know in 0.49.18 Aerospace was broken badly. It's why we've tried to focus this release on fixes and some improvements. Our hope is in a couple of weeks it can become a new **MILESTONE**. But that's not say there isn't some really good stuff in here.

There is one major thing you'll notice on opening MegaMek and MegaMekLab - they now default to the Dark Mode(Darcula). The majority of players polled are using it and it just makes sense to default it. Also themes like Nimbus, and Metal have been removed as they cause UI issues that aren't easily fixed. We've started to implement this in MekHQ but given the mess the UI code is in it will take a few releases to get it done.

The big advantage is with standard themes and code between the programs we can start to look at improving things in MekHQ's UI. This will be a long project but a needed one.

If you're someone that likes to read the change logs you'll notice there is lots of prep work for [StoryArcs](https://bg.battletech.com/forums/index.php?topic=84536.0) which we anticipate will be officially released in the next release (0.49.20). But here is a small bit of some of the new stuff.

**MegaMek**
  - We now have Black Ice
  - Units now understand Clan Pilots vs Inner Sphere Pilots. [Details](https://github.com/MegaMek/megamek/issues/3498)
  - We got improved built-in unit shadows for units. [Details](https://github.com/MegaMek/megamek/pull/5188)
  - Scenarios now have a dialog to load them. [Details](https://github.com/MegaMek/megamek/pull/5211)
  - Some nag and turn timer updates. [Details](https://github.com/MegaMek/megamek/pull/5254)
  - Introducing some YAML support for AS/SBF units. [Details](https://github.com/MegaMek/megamek/pull/5249)
  - Add split pane to weapon panel above to hit text. [Details](https://github.com/MegaMek/megamek/pull/5270)
  - Set up a simple rotating per-round save file system.

**MegaMekLab**
  - The ability to embed fluff images in the unit files. [Details](https://github.com/MegaMek/megamek/pull/5156)
  - Ability to embed sprites in the unit files. [Details](https://github.com/MegaMek/megameklab/pull/1444)
  - Print queue interface improvements. [Details](https://github.com/MegaMek/megameklab/pull/1457)
  - Print mul through print queue dialog. [Details](https://github.com/MegaMek/megameklab/pull/1460)
  - Implement the Industrial tripod cockpit.

**MekHQ**
  - Adjusted retirement TN and payout values. [Details](https://github.com/MegaMek/mekhq/pull/3867)
  - Update planetary conditions chance logic. [Details](https://github.com/MegaMek/mekhq/pull/3834)
  - Added Nag for wounded personnel without doctor.
  - Add lances to the force string when sending data to MegaMek. [Details](https://github.com/MegaMek/mekhq/pull/3901)
  - Added Nag dialog for pregnant combatants.
  - Unmaintained unit Nag dialog suppressed for units set to salvage.
  - Added ability to collapse/expand logs, missions, and kills in personnel unit screen. [Details](https://github.com/MegaMek/mekhq/pull/3968)
  - Reduced personnel table right-click menu clutter. [Details](https://github.com/MegaMek/mekhq/pull/3970)
  - Added scenario & mission tracking to kills, added ability to assign kills to scenario and/or mission. [Details](https://github.com/MegaMek/mekhq/pull/3988)

**MekHQ StratCon Alpha**
  - StratCon continues to be in alpha. But we got some small fixes and changes this release.
  - StratCon Mapgen fix. [Details](https://github.com/MegaMek/mekhq/pull/3874)
  - Victory Point terminology changes. [Details](https://github.com/MegaMek/mekhq/pull/3891)
  - Base Attack (Defender) objective changes. [Details](https://github.com/MegaMek/mekhq/pull/3889)
  - StratCon Air & Arty Modifiers. [Details](https://github.com/MegaMek/mekhq/pull/3947)

**A Few Reminders:**

**State of the Universe (January 19, 2024):**  
If you haven't given the [State of the Universe (read here if you missed it)](https://bg.battletech.com/forums/index.php?topic=83774.0) a read please do. Lots of information in there that is still recent and relevant. 

**User Data Directory for MegaMek, MegaMekLab, and MekHQ:**  
We've added a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.  
   
   - **Set a Custom Directory:** Choose any location on your computer (e.g., `D:/myMMStuff`) to keep your game resources.
   - **File Placement:**
     - Fonts and units (`.mtf`, `.blk`) can be placed anywhere within this directory.
     - Camo images in `/data/images/camo/`
     - Portrait images in `/data/images/portraits/`
     - Unit fluff images in `/data/images/fluff/<unit type>/`
     - Rank and award definition files (`.xml`) in `/data/universe/`
   - **Consistent Access:** Resources in this directory are usable across different game versions and modules without needing to relocate them for each new install.
   - **Implementation:** Set up this directory via the client settings. A game restart is required for changes to take effect.

**Removal of Unofficial Units Zip:**  
Based on feedback from our Discord and a poll where 75% of players favored this decision, we've removed the unofficial units zip from this release. This change allows us to focus on canon units.  
   
   To reintegrate the units:
   - Download the zip file from [MegaMek Extras HERE](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
   - Right-click and use the "save link as" option.
   - Save it as a zip to the data\mechfiles folder of the program.
   - We suggest saving it to a customs folder within data\mechfiles.
   - They will be added upon restart.
   
**MekHQ Campaign Files:**  
Remember, MekHQ campaign files **are NOT** backwards compatible. Moving your campaign to a newer version prevents reverting to an older one, but keeping backups allows play in both versions for comparison.

**When is the next Stable release?**

Please review the [State of the Universe](https://bg.battletech.com/forums/index.php?topic=83774.0)

**Java 11 and 17**
We've updated to Java 11. To use the **0.49.x Development branches**, an update is needed. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). Help pages for [Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) and [Mac](https://megamek.org/wiki/mac_issues.html) users are available. Linux users should use their package manager to install Adoptium Temurin.

This release also supports Java 17, which has undergone some testing. More player usage is needed, but Java 11 remains our recommended version.

**Social Media**
Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

**Mac Users**
[Check out this workaround for Mac Operating Systems](https://megamek.org/wiki/mac_issues.html).

**Contributing**
Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

**Updating Your Campaign:**
1. Make backups of your campaigns and customs.
2. Treat each release as stand-alone; copy your data forward from older versions, never backward.
3. Do not copy MegaMek saves or any preference file from a different version.

### Change Logs (Release Specific) and Download Links

**MegaMek Change Log**  
[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.19)

**MegaMekLab Change Log**  
[Download](https://github.com/MegaMekLab/megameklab/releases/tag/v0.49.19)

**MegaMek Change Log**  
[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.19)
   
   
   
   
   
