# Welcome All to 0.49.17

You might notice something unusual: we jumped from 0.49.15 directly to 0.49.17. What happened? A major bug surfaced at the last minute, one that only appears after the releases are built. Therefore, while 49.16 does exist, it will never be officially released, and if you find it *DO NOT USE IT*.

As we close this year, let's welcome version 49.17. Looking back on 2023, we started with version 0.49.11. Although we've had only six releases this year, significant progress was made across all three programs. Highlights include major UI enhancements, Alpha Strike Support, updates to Record Sheet style, Stratcon enhancements, a complete overhaul of Advanced Search, enhanced Unit tooltips, the ability to display the game board in all phases, Strategic BattleForce conversions, a full overhaul of Client settings, Unit Mekview improvements, the introduction of a basic GM mode, along with numerous bug fixes and data additions. A special mention to Deadborder for their continuous efforts in creating and improving sprites.

We are still not close to a .50 Stable release. We are rethinking how we present Stable vs. Development releases, but more on this will come in the new year. For specific changes in this release, please refer to the sections below.

For detailed information, ensure you click the links in some of the list items below. The full release notes are at the end of this section. Here's what's new:

## MegaMek

- Let's welcome Beast mounted infantry to MegaMek. Cry Havoc and let slip the Branths of War!
- Unit Roles and Quirks have been moved to the unit files, meaning they now need to be managed via MegaMekLab. **Important: quirk saving in MegaMek no longer works.**
- Numerous improvements to various reports and Unit Tooltips.
- BV improvements around TacOps Ammo types.
- [Improvements to Tooltip colors.](https://github.com/MegaMek/megamek/pull/4957)
- [Additional deployment options added.](https://github.com/MegaMek/megamek/pull/4922)
- [Introduction of the Warbook option in-game, allowing access to TRO information.](https://github.com/MegaMek/megamek/pull/4981)
- [Introduction of a basic User File Directory.](https://github.com/MegaMek/megamek/pull/4961)
**Please see the Docs folder for a file - UserDirHelp.html to help explain how to use.**
- [Structure collapse warning feature for deployment and movement.](https://github.com/MegaMek/megamek/pull/4984)
- Numerous data fixes, new fluff, and new sprites.

## MegaMekLab

- [Significant improvements to the MML interface.](https://github.com/MegaMek/megameklab/pull/1352)
- Enhanced version controls for units created in MegaMekLab.
- Quirks and Roles are now managed through MegaMekLab.
- The MML splash startup screen now displays the menu bar.
- Implementation of various bug fixes.

## MekHQ

- Introduction of a new filter for children.
- Support for beast-mounted infantry.

### MekHQ StratCon Alpha

No new updates in this release.

## A Few Reminders

### Unit File Alignment with MUL

We aligned unit files with the MUL by removing the term "(Standard)", resulting in the removal of nearly 1000 instances. Our Quality Assurance (QA) team has thoroughly tested these changes. There's a potential risk in MekHQ with CPNX files due to their reliance on unit names. If errors occur while loading your campaign file, we apologize for the inconvenience. For assistance, please refer to [this post](https://github.com/MegaMek/megamek/wiki/Name-Issues-with-Units).

### Removal of Unofficial Units Zip

Based on feedback from our Discord and a poll where 75% of players favored this decision, we've removed the unofficial units zip from this release. This change allows us to focus on canon units.

To reintegrate the units:

- Download the zip file from [MegaMek Extras HERE](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
- Right-click and use the "save link as" option.
- Save it as a zip to the data\mechfiles folder of the program.
- We suggest saving it to a customs folder within data\mechfiles.
- They will be added upon restart.

### User Data Directory for MegaMek, MegaMekLab, and MekHQ

We've added a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.

#### Key Points

- **Set a Custom Directory:** Choose any location on your computer (e.g., `D:/myMMStuff`) to keep your game resources.
- **File Placement:**
   - Fonts and units (`.mtf`, `.blk`) can be placed anywhere within this directory.
   - Camo images in `/data/images/camo/`
   - Portrait images in `/data/images/portraits/`
   - Unit fluff images in `/data/images/fluff/<unit type>/`
   - Rank and award definition files (`.xml`) in `/data/universe/`
- **Consistent Access:** Resources in this directory are usable across different game versions and modules without needing to relocate them for each new install.
- **Implementation:** Set up this directory via the client settings. A game restart is required for changes to take effect.

#### MekHQ Campaign Files

Remember, MekHQ campaign files **are NOT** backward compatible. Moving your campaign to a newer version prevents reverting to an older one, but keeping backups allows play in both versions for comparison.

## Regarding Simultaneous (Sim) Stuff

The issue with skipping units is largely resolved. We're aware of and investigating the issue where two players can cancel each other's weapon selections, but there's no ETA for a fix.

The future of Sim Stuff is under review. If our fixes prove effective, Sim Movement is **likely** to be the only feature removed, as it's poorly coded and doesn't adhere to TT rules used in Double Blind. Thus, Sim Deployment, Sim Targeting, Sim Firing, and Sim Physical are **likely** to remain. The term **likely** is used as defined by Merriam-Webster: "having a high probability of occurring or being true: very probable".

## Stable 0.50.0 Status Update

We're not yet at the point of releasing a Stable 0.5.0. March 5th, 2024, will mark three years of development. We are exploring different ways to present Stable vs. Development releases and hope to provide updates soon.

In the meantime, we recommend players move to a good Dev release, like 0.49.15, which had a manageable bug from MegaMek to MekHQ. [See here for details](https://bg.battletech.com/forums/index.php/topic,82935.0.html). Note that using a dev release requires Java 11 or 17 (see the next section).

## Java 11 and 17

We've updated to Java 11. To use the **0.49.x development branches**, an update is needed. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). Help pages for [Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) and [Mac](https://megamek.org/wiki/mac_issues.html) users are available. Linux users should use their package manager to install Adoptium Temurin.

This release also supports Java 17, which has undergone some testing. More player usage is needed, but Java 11 remains our recommended version.

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

## Mac Users

[Check out this workaround for Mac Operating Systems](https://megamek.org/wiki/mac_issues.html).

## Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

## Updating Your Campaign

1. Make backups of your campaigns and customs.
2. Treat each release as stand-alone; copy your data forward from older versions, never backward.
3. Do not copy MegaMek saves or any preference file from a different version.

---

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.17)

#### 0.49.17 (2023-12-31 1900 UTC)

+ Fix #1031: Show structure collapse warning when deploying and moving.
+ PR #4990: FixedWingSupport: automatically set SI when walk MPs are set

#### 0.49.16 (2023-12-30 2200 UTC)

+ Fix #4769: BA Tube Artillery should support smoke rounds
+ Fix #4854: Fix multiple end-of-game and end-of-phase hangs
+ Fix #4541: Natural piloting SPA applies to physical attacks
+ PR #4871: Allow HTML tags in the TROView fluff
+ Data: Update Boards and Tagging. Fluff project continues.
+ Fix #4793: Flame Based Infantry Bugs
+ Issue #4213: RFE Add CI indirect fire for mortars
+ PR #4877: Add client setting for auto centering
+ PR #4875: Done and skip buttons handle changes in GUI Scale better
+ Issue #4861: Fix for RAC and UAC ammo bingo state hanging game
+ PR #4853: Fixes bugs with loading infantry into transports and JumpShip fuel consumption
+ Data: Correcting various Prototype weapon BVs.
+ Issue #4794: Game hangs on 'firing phase'
+ PR #4872: Improvements to CSV tool.
+ PR #4883: Beast mounted infantry implemented! Swoop down on unsuspecting Meks with your Branth fliers!
+ Fix #4806: IllegalArgumentException when attempting to launch and recover fighters in the same turn
+ Fix #3861: Militarized Space Stations turning corrected
+ PR #4899: add report heading for piloting rolls
+ PR #4900: advanced search for mounted infantry
+ PR #4903: Move Unit Roles to Unit Files
+ Fix #4821: Fixed-Wing Support Vehicles with propellers and fusion engines should not require fuel
+ PR #4914: add missing filter for QuadVee
+ Fix #3095: Jumped WIGE does not get to-hit modifier
+ Fix #4901: 49.16 - Beast Infantry - Princess Cannot Move Branth Flying infantry
+ Issue #4907: Display Cockpit type in Unit Viewer
+ Fix #4857: Sprinting units are considered to be using supercharger
+ PR #4924: weapon panel factor in combat computer with displaying heat buildup
+ Issue #3917: Vehicles with jump MP no longer incorrectly count as immobilized
+ Issue #4876: Unit display tab renders properly when switching units
+ PR #4932: Illumination indicators added to hex/unit tooltips
+ Issue #4930: Added option to start with search lights on at deployment
+ Issue #4866: Correct roll reporting for fumbled PSRs
+ PR #4928: Don't set GM to observer when GM player has no units to avoid auto-skip of report phases
+ Issue #4925: Mobile artillery points being generated with black navy force generation 0.49.15
+ PR #4873, #4964: In round reports, many dice rolls now have tooltips showing roll details
+ Issue #4904: Ultra ACs firing a single shot now correctly report when they score a hit
+ Issue #4927: With both TacOps Woods Cover and TacOps Active Probes options active, a to-hit bonus is now only applied if intervening woods hexes exist.
+ Issue #4795: Fixed sensor range bands not showing up under certain circumstances
+ PR #4948, 4950: Quirks are now part of the unit files (.mtf and .blk). They can still be configured in the lobby; any changes made there only apply to the present unit. Saving custom quirks from the lobby has been removed. An accompanying change adds quirk editing to MegaMekLab.
+ Fix #4935: Torpedoes no longer think they're crossing dry land when in fact they are fired through open water
+ PR #4921: Background colors for the unit tooltip can now be configured in the client settings
+ PR #4954: Add the MM version and date when saving unit files
+ PR #4955: MekSummaryCache BV calculation: ignore pilot skill
+ Data #4933: Megamek TacOps ammo BV error (Partial Fix - work still needed on Dead Fire and LK)
+ PR #4956: Use foot/jump type modifier for beast-mounted infantry
+ PR #4963: In the heat report, heat effects are now shown after the affected unit (instead of before)
+ PR #4966: The mtf file format for Meks now uses chassis: and model: qualifiers and no longer includes the mtf version
+ Issue #4949: return impossible instead of raising an error
+ PR #4957: More tooltips colors (set FG color and BG color for more tooltips, add highlight, weapon, quirk client settings, consolidate some colors into existing client setting colors)
+ PR #4922: Add deployment options (There is a lot in this one see note from PR link for specifics)
+ PR #4981: Add unit readout button (Warbook) that displays the unit summary, TRO entry, and AS card in Game
+ PR #4961: User file directory
+ PR #4977: Add a split pane lobby between player and unit panels
+ PR #4980: Allow gm to configure spas in game[/code]

### MegaMekLab Change Log

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.17)

#### 0.49.17 (2023-12-31 1900 UTC)

+ PR #1352 MML interface changes

#### 0.49.16 (2023-12-30 2200 UTC)

+ PR #1338 - Allow unit role selection in MML
+ Fix #145: Quirks can now be edited in MML and are part of the unit files
+ PR #1337: The BA manipulator size can now be set in MML
+ Fix #1005: Fixed issues with conventional infantry where the GUI was not updating correctly after changes to the number of infantry in a squad or the primary weapon
+ Fix #1154: Protomech Armor Limits Inconsistent 0.49.8
+ Fix #1345: Some ProtoMek arm armor maximums were incorrect
+ Fix #1341: Clan ferro-aluminum armor no takes up the right number of slots on Aerospace units
+ Issue #1061: Add 'Generator' key to .mtf format, MM/MML can now load .mtf files exported from SSW
+ Fix #1334: Adding a oneshot launcher no longer removes ammo for other weapons from the equipment list
+ PR #1351: MML's splash startup screen now also shows the menu bar, adding some missing functionality like loading from file
+ Fix 1354: Coolant Pods now show up in the "Other" category instead of Ammo and are no longer hidden by the Ammo w/o weapon filter
+ PR #1355: StatusBar: correct free slot displays
+ PR #1352: Adds an option to start MML in its splash screen (current behavior) or directly load the most recent unit or start on a new unit of a choosable type;
            Most file choosers now use Swing's JFileChooser and remember their size and position as well as the last directory; also file extension filters have been added where applicable;
            Recent files will now behave as such
            All unit type main UIs now individually remember their size and position; there is a menu item to reset all window positions;
            It is now possible to import settings from another MML setup.
            Save As now uses the accelerator Ctrl-Shift-S instead of Ctrl-A (which doesn't work as it does a select-all)

### MekHQ Change Log

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.17)

#### 0.49.17 (2023-12-31 1900 UTC)

+ No code added

#### 0.49.16 (2023-12-30 2200 UTC)

+ PR #3771: Add "children" filter to personnel tab
+ PR #3780: Support for Beast Mounted Infantry[/code]

On behalf of the MegaMek team, we wish everyone a safe and successful 2024. Cheers!
