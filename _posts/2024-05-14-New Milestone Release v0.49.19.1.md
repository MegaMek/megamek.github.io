**Hi Everyone,**

We are happy to announce we have a new Milestone: **0.49.19.1-MILESTONE**.

For those not familiar with the Milestone system we've moved to, it’s explained in major detail [HERE](https://megamek.org/2024/01/19/State-of-the-Universe!.html). Our current Milestone is **0.49.7**, and its details are [HERE](https://megamek.org/2022/02/18/New-Development-Release-v0.49.7.html). While it’s a massive improvement over **0.48.0 Stable**, it’s already long in the tooth, having been released in February 2022, our 20th Anniversary.

Since then, we’ve pushed a lot of development releases with numerous fixes and improvements. However, until **0.49.19**, none met the requirements. We hoped that **0.49.19** would make the cut and become a Milestone. But alas, it had a few deal-breaking bugs that we fixed at the beginning of the **0.49.20 Development Cycle**.

After **0.49.19** was released we started into **0.49.20-Development**, The next few releases are updating a lot of very old code, some of which has been around since the beginning of MegaMek. Much of the code was limited by the Java of the time, the skill of the developers, and how MegaMek was being used. We’ve battled and tweaked this code for years, but if we want to move the programs forward, we need to modernize and make the code less restrictive. This, in turn, opens the door for improvements like custom buildings, weapons, armor, and other game types.

So, here’s the rub: we launched **0.49.19** thinking it was Milestone-ready, then started all these major code changes, and then the few issues hit. This left us with two options:

1. Continue on and wait until a later release naturally became a Milestone or...
2. Backport fixes to create a unique release.

We’ve chosen option 2, which brings us to **0.49.19.1**, or as we've nicknamed it _**“One Ninety One.”**_

There isn’t anything new in here...well, there is a nasty surprise around Gun Emplacements. 😈

One more thing...If you're a [mini painter please check out this post](https://megamek.org/2024/04/21/Artists-Wanted-for-Mini-Fluff-Pack.html)

---

**A Few Reminders:**

**State of the Universe (January 19, 2024):**
If you haven't given the [State of the Universe (read here if you missed it)](https://bg.battletech.com/forums/index.php?topic=83774.0) a read please do. Lots of information in there that is still recent and relevant.

---

**The Milestone System Summary**

*Introducing the Milestone System*
To better serve our players and development team, we are transitioning from the traditional ‘Stable’ / ‘Development’ scheme to a more dynamic ‘Milestone’ system.

**Key Aspects of the Milestone System**

- **End of Traditional ‘Stable’ Releases:** The ‘Stable’ releases will be discontinued. The next major release, version 1.0, is expected before the end of the century. This shift supports a fluid and ongoing development process.
- **Development Tag for All Releases:** Every release will now be tagged as ‘Development’. Version numbers (e.g., 0.49.x, 0.51.x) will be assigned based on internal criteria and communicated in the release notes. Even-numbered releases no longer indicate stability.
- **Transparent Communication on Significant Changes:** Major changes, such as updates to software requirements, will be clearly communicated to ensure users are well-prepared.

**Versioning Plan and Milestone Designation**

- **Development Release:** Versions labeled as 0.XX.X-Dev are part of the regular development cycle.
- **Observation Period:** Post-release, we monitor performance and gather user feedback.
- **Milestone Tagging:** Stable versions will be retroactively designated as ‘Milestone’ (e.g., 0.49.7-MILESTONE) after a few weeks.
- **Communication:** Milestone designations will be shared across all platforms.

**Criteria and Frequency of Milestone Releases**

- **Stability and Reliability:** Releases must demonstrate high stability and reliability.
- **Nature of Updates:** Bug fix-focused releases are more likely to achieve ‘Milestone’ status.
- **Frequency:** Milestones are anticipated every 6-9 months, but this may vary.

**Rationale for Change**
This system promotes continuous development and encourages users to stay current with recent releases, bridging the gap between Stable and Development versions. It helps shift the mindset from viewing ‘Stable’ versions as superior and fosters an understanding that the software is in continuous development.

---

**User Data Directory for MegaMek, MegaMekLab, and MekHQ:**
We've added a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.

**Key Points:**

- **Set a Custom Directory:** Choose any location on your computer (e.g., `D:/myMMStuff`) to keep your game resources.
- **File Placement:**
    - Fonts and units (`.mtf`, `.blk`) can be placed anywhere within this directory.
    - Camo images in `/data/images/camo/`
    - Portrait images in `/data/images/portraits/`
    - Unit fluff images in `/data/images/fluff/<unit type>/`
    - Rank and award definition files (`.xml`) in `/data/universe/`
- **Consistent Access:** Resources in this directory are usable across different game versions and modules without needing to relocate them for each new install.
- **Implementation:** Set up this directory via the client settings. A game restart is required for changes to take effect.

---

**Removal of Unofficial Units Zip:**
Based on feedback from our Discord and a poll where 75% of players favored this decision, we've removed the unofficial units zip from this release. This change allows us to focus on canon units.

To reintegrate the units:

- Download the zip file from [MegaMek Extras HERE](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
- Right-click and use the "save link as" option.
- Save it as a zip to the `data\mechfiles` folder of the program.
    - We suggest saving it to a customs folder within `data\mechfiles`.
- They will be added upon restart.

---

**MekHQ Campaign Files:**
Remember, MekHQ campaign files **are NOT** backwards compatible. Moving your campaign to a newer version prevents reverting to an older one, but keeping backups allows play in both versions for comparison.

---

**When is the next Stable release?**
These are no longer a thing. Please give above or this a read [State of the Universe](https://bg.battletech.com/forums/index.php?topic=83774.0)

---

**Java 11 and 17 is *Required* for all 0.49.x releases**
We've updated to Java 11. To use the **0.49.x Development branches**, an update is needed. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). Help pages for [Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) and [Mac](https://megamek.org/wiki/mac_issues.html) users are available. Linux users should use their package manager to install Adoptium Temurin.

This release also supports Java 17, which has undergone some testing. More player usage is needed, but Java 11 remains our recommended version.

---

**Social Media**
Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

**Mac Users**
[Check out this workaround for Mac Operating Systems](https://megamek.org/wiki/mac_issues.html).

**Contributing**
Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

---

**Updating Your Campaign:**

1. Make backups of your campaigns and customs.
2. Treat each release as stand-alone; copy your data forward from older versions, never backward.
3. Do not copy MegaMek saves or any preference file from a different version.

---
## **Change Logs (Release Specific) and Download Links**

**MegaMek Change Log**
[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.19.1)

- Fix #5415: Implement RFE #5408: update Princess ammo conservation values
- Fix #5426: add null checks for getC3UUIDAsString() (fixes MegaMek/mekhq#4034 )
- Fix #5433: Handle one-shot ammo weapons like RLs appropriately
- Fix #5440: MM fix for MML issue where Partial Wing not accounted for
- Fix #5442: add null check for turn timer when stopping
- Fix MML #1502: Ignore armortype slots in other-equipment cost calculation
- PR #5391: RaozSpas Turret Rework Phase 1
- Data Updates

**MegaMekLab Change Log**
[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.19.1)
- Fix #1498: Add separate handling for BA PW jump bonus tooltip
- Fix for Commando filename collisions

**MekHQ Change Log**
[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.19.1)
- Fix #4023: Save boardType to XML
- Fix #4052: Move modifiedTemperature to AtBScenario
- Fix #4061: Campaign no longer loads in 0.49.19+ due to unusual Person and Infantry attributes
- Fix #4062: StratCon generating Weather, Light, and Planetary conditions despite Campaign options
- Fix for Commando case-based name collisions
- Update Data in MekHQ Repo
