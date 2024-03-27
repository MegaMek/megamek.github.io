# Welcome all to 0.49.8

Going to start this off with a very important statement. The next few Development releases of programs will be **UNSTABLE**  they contain several major internal reworks (see Internal Changes below), lots of bugfixes, and some enhancements. Basically we are working on taking the programs (especially MegaMek) from a
[Crossbow CRS-X](http://www.masterunitlist.info/Unit/Details/5583/crossbow-crs-x) to a [Crossbow T](url=http://www.masterunitlist.info/Unit/Details/8235/crossbow-t)

We know from experience that when we say its an unstable release that players generally stay away. But you can run both a stable release (0.48.0 or good dev release 0.49.7) you just need to keep them in separate folders.

But for MekHQ things are not backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

What we need most is players to test multiplayer in MegaMek and expect issues with it. The more we can get players to test these releases the faster we can get thru to the next "stable" release.

## MegaMek

We do have some good new stuff in MegaMek. Some highlights are:

- Added a link to the MUL from inside the unit selector
- Fixed some issues around the splash screens sizing
- Fixed the MASC/Supercharger interactions
- Added the Shrapnel Infantry weapons (these are fun!)
- Fixed the AR10 launchers
- Started the first parts of the BV fixes and improved reporting (sorry unofficial BV stuff is gone)
- Improved Cost calculation report
- Removed the buggy Detachable Unit Display (it might come back later)
- Lots of data - Improving the RAT Generator with Rec Guide units,
- Added the factions from Tamar Rising very limited unit support initially.
- Lots of bug fixes

## MegaMekLab

Juliez continues to work on improving the look and feel of the lab. This includes:

- Reworking the Mek drag-n-drop logic,
- Reversed the equipment filter toggle,
- Fixed some RS printing things,
- LAMs have fuel tanks,
- The menu bar has been reworked,
- Lots of bug fixes.

## MekHQ

The Death Module has been merged, adding Random Death to MekHQ. There are three provided methods, from which we highly recommend using Exponential Random Death with the following settings to simulate deaths. It also includes data-based random cause generation, which is customizable as a user data file.

![Random Death](https://i.imgur.com/CINmqaM.png)

We've also added a bunch of new MekHQ Options to improve MegaMek launch stability on low resource systems, unit status coloring to the personnel unit assignment menus (this is theme-dependant), conventional fighters to the unit market, standardized potential asset terms with loan terms, and added the semiannual term for assets and loans. This is in addition to a whole host of bugfixes.

## MekHQ StratCon Alpha

Minor bugfixes only.

## Ongoing Internal Changes

Boring but important stuff ahead. If you are a interested in the guts of how the programs work this be for you.

We've started to modernize and rework our internal connection setup for the first time in fifteen years. This necessary change will almost certainly cause further issues, but we cannot find them without further testing. We've handled a lot of uncaught exceptions that have been raised since 0.49.7, dating from the earliest days of the suite to the modern day. We continue to modernize the logging setup, with just a few legacy setups remaining. We've also added the build date to the logs. Updated all our dependencies to their latest release bar XStream. XStream is the only outdated setup left, with its replacement of either Jackson or Moshi being an open discussion before the required swapover for 0.50.0. Our unit testing has been updated to JUnit5, from a mixture of JUnit 3 and JUnit 4.  Finally, we've cleaned up yet more of our internal underlying code issues, primarily in MM.

MML's base repository setup has been modernized and standardized to bring it up to date with MM and MHQ. The repository setup has been redone, build scripts have been rewritten, and integrations have been fixed and/ or added. This was done to simplify future changes, improve the code, and standardize within the suite.

I wanted to thank Windchild for tackling this and the other coders for reviewing the code. They've dived into our "Shed in the backyard" and by doing this we know the short term pain will be for big long term gains.

## Stable 0.50.0 Status Update

We are still working on the development portion of the current dev cycle. Primarily, we need to handle player Java 17 support (currently blocked by bugs in Gradle, our build language, when it comes to multi-project builds), player save game issues (currently blocked by the above and Jackson or Moshi support), and connection stability issues (there's been regular connection stability reports since our early dev releases in this cycle, without traceable causes).

Until we resolve these issues we can't move ahead with a new Stable, and we have no ETA for this. With a milestone of 0.50.0 we need to make sure we get it right.

## Java 11

We've updated to Java 11, which means you'll need to update to use the [b]0.49.x development branches[/b]. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). We have a help page [for Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) and [Mac](<https://megamek.org/wiki/mac_issues.html>. Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

**This is VERY important** - We don't support any version of Java higher than **Java 11**. Making sure when downloading and installing you are grabbing Java 11, Java 17 in particular breaks the programs hard!!

## Social Media

We are also happy to announce we have an [official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). This is now our primary community location for the suite, providing superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games).  There are also the following community Discords with regular MegaMek channels, namely [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). We are also on Facebook, at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek) for our group and page respectively.

UlyssesSockdrawer has been running a popular Solaris VII campaign on our Discord that is always looking for new players. You can join between cycles. Join the Discord for more information.

## Slack end of life

When we started the Slack, we wanted to move the MegaMek community from forums to a more interactive platform. While in the beginning the Slack had a small active community it's just never taken off like we hoped.

We've made the decision to open a MegaMek Discord after seeing the success of the MegaMek channels in other Discords. Since opening the Discord it's grown to 1900 members with 800-900 active members and is much busier and interactive than the Slack has ever been. The Discord platform has allowed us to better support players with things like voice channels linked to dedicated servers.

After careful review and discussion among the Devs we decided to close the Slack June 1st, 2022. We feel it will be more effective to focus and continue to build the community on [Discord](https://discord.gg/u2vJ5U2QpD).

We thank everyone who's been part of this community and for those that haven't please join us on the Discord

## Mac Users

[Please](https://megamek.org/wiki/mac_issues.html) check out this workaround for Mac Operating Systems.

## Contributing

[Please]({{ site.baseurl }} {% link wiki/i_want_to_help.md %}) check out this document for contributing to the suite. Deadborder has us covered from land unit sprites and camos. But we desperately need sprites for aerospace units.

## Updating Your Campaign

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions, never backwards.
3. Do not copy MegaMek saves nor any preference file from a different version.

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log

[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.8)

- PR #3431: MUL ID
- PR #3447: Adding Build-Date to the Manifest File
- Issue #3436: Choose splash image and sizing based on dpi scaled sizes
- PR #3451: Properly Treating Blank Passwords as not being Passwords
- Issue #3435: Check if the report vector is empty before adding a new line
- Issues #2749 and #3418: Proper Supercharger Implementation and Improved MASC/Supercharger Hex Movement Display
- PR #3446: Adding the Legendary SkillLevel
- PR #3427: Properly Loading All Fonts in MegaMek
- PR #3452: Mech melee equipment validation update
- PR #3454: Hull-down vehicles can indirectly fire body-mounted LRMs per errata
- PR #3458: Rat Generator Editor UI Updates
- Issue #3460: Preventing Gun Emplacement Off-board Deployment and NPEs
- PR #3423: Increasing the chat levels for some useful princess game-play messages
- PR #3445: Fixing MegaMek's Javadoc Build
- Issue #3413: Command Line Flags and Argument Improvements
- Data: Force Generator updates. In the process of adding missing units and updating units.
- PR #3476: Generated RAT table TechBase column
- PR #3480: Correct Remote Sensor Dispenser BA ammo amount
- Issue #3484: Per errata, Battle Armor and infantry no longer allowed to set MGs to burst fire mode.
- Issue #3386: Per TW, Aerodyne DropShips and small craft can now hover, but can no longer vertically land or take off, except in vacuum.
- Data: New Sprites and a few new camos.
- Issue #3400: Introduced new pre-movement and pre-firing phases; currently they allow eligible units to un-hide (rather than having to select an option via arcane dropdown in the Extras tab on the previous turn).
- Issue #3505: Improved bot valuation of attacks by variable-damage infantry weapons (e.g. support lasers)
- Issue #3448: Display unit cost in mech summary without counting ammo.
- Issue #3502: Disable Jump Button when prone
- Data: Adding Shrapnel Infantry Weapons. These have been converted per the rules in AToWC but things like
        proper intro dates are missing. These have been estimated based on fluff text, and availability codes.
        Compared to lots of the existing infantry weapons these are long ranged, and more powerful especially the sniper rifles.
- PR #3490: RATGeneratorEditor UX Improvements
- PR #3515: Modernizing a bunch of Legacy Logging
- Data #3262 - BattleArmorTROView NPE Reached from AbstractUnitSelectorDialog (Oni BA remade)
- Data #3533, #3529, #3528, #3527, #3518, #3517, #3516, #3430, and #3410 fixes for various unit files.
    RAT Generator Rec Guide 18 updates, Tech Progression errata.
- MML Issue #927: Add LAM FuelTank
- PR #3525: RATGeneratorEditor: Allow deleting RAT Roles and show MUL Role
- Data: Updating Clothing light to remove offending text.
- PR #3553: Improved Russian Name Data
- Issue #2841: Fixed a bug that prevented AR-10 launchers from switching between available ammos
- PR #3560: Data fix: Screen Launchers are now correctly classified as Capital Weapons and available to Large Craft in MML
- Issue #3257: Fixes the BV and auto CASE placement for PPC Capacitors on Clan units
- PR #3556: Change the internal representation of BV calcs and offer text and HTML style export of BV calc reports
- PR #3569: Fixing Freemarker Configuration Version Initialization
- PR #3570: Remove unofficial BV calculation options
- Issue #3531: Fixes superheavy Mek Ammo Battle Value penalty
- Issue #3576: Fixing Destroyed Squadron Kill Assignment IllegalArgumentException
- Data: New Sprites, some new BA formations, fixes for #3577, #3575, #3571, #3544, and #3353
- PR #3583: XML Util Methods: Minor Write Performance Improvements
- PR #3584: Make a cost calculation report available for all unit types
- PR #3591: Fixing MegaMek log paths
- PR #3600: Enable Gun Emplacement ToolTips
- PR #3614: Fixing Atmosphere typos
- Issue #3607: Fixing Null Swarming Entity Unit ToolTip NPE
- Issue #3607: Prevent Entities from Fleeing While Swarming a Unit
- PR #3606: Logging Modernization: Updating a Bunch More System.out, System.err, and printStackTraces
- PR #3629: Detachable Unit Display Removal
- Issue #2738: Initiative bonuses no longer stack for players or teams, picking the highest bonus instead
- PR #3640: Fixing Attack Action NPE from Missing Nullable Handling
- PR #3602: Connection Rework Phase Two
- Issue #3641: Fixing Server Game End ConMod
- PR #3636: Standardizing Minimap Spelling
- PR #3643: Trimming Trailing Whitespace from Service IP Address
- Data: New Sprites, Updated board folder formatting and added new maps.
- Data: Added Rec Guide 16 to RAT Generator.
- Data: Added Factions from Tamar Rising to RAT Generator.
    These are set as Minor factions and given limited information RAT are based on the faction they derive from.
- Moving Outdated Board Editor docs to docs/Archive Stuff
- Issue #3613: Princess: Adding Stop Swarm Behavior For Fleeing
- Updating to FlatLaf 2.2 from 2.0.1
- Updating to Jackson XML 2.13.3 from 2.13.1
- Updating to JAXB 4.0.0 from 2.3.2
- Updating to JAXB Runtime 3.0.2 from 2.3.2
- Updating to Launch4j 2.5.3 from 2.5.1
- Updating to Log4j2 2.17.2 from 2.17.1
- Adding JUnit Jupiter 5.8.2
- Updating to JUnit Vintage 5.8.2 from JUnit 4.13.2
- Updating to Mockito 4.5.1 from 4.2.0

### MegaMekLab Change Log

[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.8)

- PR #1029: Adding Build-Date to the Manifest File
- PR #1028: Fixing MML's Javadoc Build
- PR #1036: Mek construction drag-n-drop rework
- PR #1043: MUL Id
- PR #1049: Reverse the equipment filter toggle behavior: Click to single-select, Ctrl-Click to add
- Issue #1042: Print the exact type of TSM to RS
- PR #1052: LGTM: Fixing the vast majority of open issues
- PR #1054: LGTM: Fixing final issues
- Issue #1045: Missing Equipment filters
- PR #1053: Choose splash image and sizing based on dpi scaled sizes
- Issue #1022: Add RS ammo display to Mine/Sensor dispensers
- Issue #1023: Fixing LAM Conversion Equipment tonnage calculation
- Issue #567: Disallow Commercial Armor for BattleMeks
- Issue #1062: Reenable BA clamps in equipment DB
- PR #1066: Show dry cost in Status bar and full cost in tooltip
- Issue #1068: Handling null source image document creation issues
- Issue #1067: Aerospace safe thrust turns refresh
- Issue #927: Add LAM FuelTank
- PR #1074: Adding Cache Refresh to MML
- PR #1079: Fixing BuildView createLabel Missing Tooltips
- PR #1085: For Meks, display with the header of each crit location if that location is protected by CASE
- PR #1092: Fixing MegaMekLab's log paths
- PR #1090: MML Menu Bar Rework
- Issue #1094: Fixing Export/Print to PDF Results in Exception in Full Suite Build
- PR #1095: Implement CostDisplayDialog in MML
- PR #1098: Suite Cleanup 2: Fixing a Ton of Internal Typos: Phase 1
- Issue #1088: Naval Combat Units can now take Maritime Lifeboats
- Issue #1034: Actually Return the Calculated JumpShip SRCS Mass
- Issue #1025: Adding MagLev Engine weights
- Issue #1104: Allow Single Suit Battle Armour Units
- Updating to JAXB 4.0.0 from 2.3.2
- Updating to Launch4j 2.5.3 from 2.5.1
- Updating to Log4j2 2.17.2 from 2.17.1
- Updating to Apache PDFBox 2.0.26 from 2.0.24
- Updating to JAXB Runtime 3.0.2 from 2.3.2

### MekHQ Change Log

[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.8)

- PR #3117: Adding Build-Date to the Manifest File
- PR #3115: Fixing MekHQ's Javadoc Build
- PR #3130: Fixing Unit Order File I/O Copypaste Bug
- Issue #3097: Adding Medical Dialog Handwriting Font Selection Option
- PR #3137: Fixing the final two LGTM issues
- PR #3113: AbstractIcon: MekHQ's Preferences Now Write to MekHQ's File
- PR #3123: Company Generator: Adding MechWarrior Callsign Generation Option
- Issue #3132: Adding Entity Generation Null Protection for Officer Duel Scenario
- PR #3105: Base Components: CompleteMissionDialog Rewrite
- Issue #2877: Part XML File I/O using MHQXMLUtility
- Issue #3143: Choose splash image and sizing based on dpi scaled sizes
- PR #3161: Fixing two accidentally kept negations for Random Dependents Removal
- PR #3159: AutosaveService: Fixing Two Assert Uses
- Issue #3153: Adding Verbose Planetary Acquisitions Reporting Save Game Warning
- Issue #3146: Fixing NPEs in Campaign::getForceFor to handle NPE raised from unit assignment
- PR #3163: Campaign Options Dialog: Fixing Scrolling Issues
- Issue #3185: Fixing Ransom With None Skill Experience
- PR #3186: Fixing Person null portrait exception handling
- PR #3192: GUI Menu Bar: Adding Accelerators to Menu Items
- PR #3182: Fixing Export Units with no units export typo
- PR #3204: Autosave: Fixing resource leaks and nullability
- PR #3181: TransactionType: Alphabetical Options Rework
- Data: Adding UlyssesSockdrawer Chaos Campaign Guide.
- Issue #3196: Fixing Remove Unit NPE
- Issue #3207: Hangar Report: Adding Missing Ultralight IndustrialMech Category
- Issue #3211: Handling UnitTableMouseAdapter Bomb Bay Null Munition Types NPE
- PR #3220: Fixing VTOL Pilot Assignment
- PR #3221: Increasing Maximum Bulk Part and Personnel Purchase Quantity to 10k
- Issue #3224: Personnel Modules: Death
- PR #3238: Fixing MekHQ's log paths
- Issue #3173: Hangar Table: Adding Crew State and Condition columns
- Issue #2696: Adding Coloring to the Personnel Unit Assignment Menus
- PR #3245: PersonnelTable: Fixing Dead and Absent Personnel Color Usage
- MML Issue #1094: Export/Print to PDF Results in Exception in Full Suite Build
- Issue #3167: Fixing Board Utilities Exception on Scenario Start
- Issue #3252: Fixing Retirement Table Column Pay Bonus Sorters and Default Return Values
- PR #3254: Fixing Transaction Type Migration
- Issue #3246: Adding Campaign Reports to Personnel Status Changes
- PR #3250: Allow editing of base contract pay for AtB-style contracts in 'Edit Mission' UI
- PR #3262: Contract Score now shows properly in AtB
- Issue #3260: Clear Makeshift Clubs Upon Return To MekHQ
- PR #3267: Add conventional fighters to AtB unit market
- PR #3266: Adding Missing Retirement Civilian Error Logging
- Modernizing Presets to 0.49.8 Standards
- PR #3269: RandomOriginOptions: Fixing Specified System File Write
- Issue #3270: Preventing RandomFactionGenerator Rebel Faction Target NPE from Null Faction Borders
- PR #3276: Campaign Options: Renaming Chase Missions to the Proper Chase Scenarios
- PR #3268: Personnel Modules: Migrate Retirement and Dependent Modules based on AtB Enablement
- PR #3264: Connection Rework Phase 2.5: Adding Start Game Options for Low Resource Systems
- PR #3106: Financial Terms: Fixing / Expanding Asset Terms, Fixing Loan Term Date Calculations, Adding Semiannual Term
- Issue #3281: Preventing Contract Market No Selected Contract NPE
- PR #3292: Prevent StratCon from generating scenarios on the strategic map when enemy morale is "rout".
- Issue #3294: Unit Is Properly Removed after Black Market Swindle
- Issue #3160: Stratcon - Prevent "Good Intel" modifier from removing units that are scenario objectives
- Issue #3289: AtB/StratCon - added adjustable setting to control likelihood of opposing force special pilot abilities (range from none to "everyone")
- Issue #2612: Expanded StratCon FAQ Documentation
- Issue #2973: StratCon - integrated command contracts no longer generate objectives other than "positive VPs"
- Updating to JAXB 4.0.0 from 2.3.2
- Updating to Launch4j 2.5.3 from 2.5.1
- Updating to Apache Commons CSV 1.9.0 from 1.8
- Updating to Log4j2 2.17.2 from 2.17.1
- Updating to Apache Commonmark 0.18.2 from 0.18.1
- Updating to Joda Time 2.10.14 from 2.10.13
- Updating to JAXB Runtime 3.0.2 from 2.3.2
- Adding JUnit Jupiter 5.8.2
- Updating to JUnit Vintage 5.8.2 from JUnit 4.13.2
- Updating to Mockito 4.5.1 from 4.2.0

Enjoy everyone!
