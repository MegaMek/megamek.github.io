# Welcome all to 0.49.9

Going to start this off with a very important statement. As mentioned in the [49.8](https://bg.battletech.com/forums/megamek-games/new-development-snapshot-0-49-8-for-megamek-megameklab-and-mekhq) Dev release notes this release is improved for stability but still isn't where we want it.

We know from experience that when we say this players generally stay away. But you can run both a stable release (0.48.0 or good dev release 0.49.7) you just need to keep them in separate folders. Remember that MekHQ campaign files **aren't** backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

What we need most is players to continue to test multiplayer in MegaMek specifically looking for disconnects and players to test the unofficial SimFire and SimPhysical unofficial options.

While development in general slowed over the summer we do have a lot of stuff done in the last three months. Some highlights are:

## MegaMek

- We've removed No Torso Twist per the new errata and but left the quirk as unofficial for those wanting it.
- Deadfire Missiles now have correct range brackets
- Added the ability to Draw TMM pips in movement and firing phases
- We've started to get back some of the "Royal" Sprites (coloured)
- Increased amount and usefulness of data displayed in the General tab of the unit display (See screenshot below).
- Fluff Image folders reorganized
- More flexible deployment zones; improvements to deployment zone rendering
- Single Blind (aka Princess is hunting us..all of us)
- New Spanish Translation for MegaMek
- Started work on a GM mode (very early right now with minimum support)
- BA MUL Alignment Project
- Add a unit browser to the main menu on the splash screen so you don't need to be "in" MegaMek to look at units

Here is an example of the new General Tab.

![New General Tab](https://i.imgur.com/fUQXTd9l.png){:.img-fluid}

The flexible deployment zone is a huge improvement and is [detailed here.](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek)

![Flexible Deployment Zone](https://i.imgur.com/bOJvjKBl.png){:.img-fluid}

If adding Fluff images you can now place them into the folder as listed. You'll need to create these folder in this format and it is case sensitive. Vehicles covers all vehicles except convention aircraft

![Fluff Image Folder Structure](http://i.imgur.com/ToD7PATl.png){:.img-fluid}

We are close to having a AS Converter in MegaMek and hope to have it for the next dev release (49.10).
You can see a preview below.

![Sample of AS card in MegaMek](http://i.imgur.com/0red2dzl.png){:.img-fluid}

We've completed a huge BattleArmor project that aligns us with the MUL's new structure for BattleArmor. Meaning almost every suit now has a 4/5/6 person option. The next major data project that will take quite a few months to finish is the Force Generator updated, our generator was implemented in 2018 and the MUL has had considerable updates since then, and new units. This project will update our generator files to re-align with the MUL and add the new units from the Rec Guides to the tables.

Lastly I think Single Blind is one of the biggest and funnest changes to MegaMek in years. It allows Princess to see the entire map, but the player can work under the rules of Double blind. In the \docs\Bot Stuff is a Single blind command doc that explains how this works.

![Princess Hunting](https://i.imgur.com/PyInuJbl.png){:.img-fluid}

## MegaMekLab

Work on the lab continues to be focused on bug fixes and a few fixes to Record Sheet printing. But we did finally add a save option to the MML exit dialog.

## MekHQ

Things have been slow developmentally with with a focus on bug fixes. But we do have one big addition - Scenario templates can now load force definition from fixed MUL file. [See here for more details](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1856680/#msg1856680)

### MekHQ StratCon Alpha

Minor bugfixes only. Including a fix to how scenarios are balanced if you add extra units to them.

## Stable 0.50.0 Status Update

We are still working on the development portion of the current dev cycle. Primarily, we need to handle player Java 17 support (currently blocked by bugs in Gradle, our build language, when it comes to multi-project builds), player save game issues (currently blocked by the above and Jackson or Moshi support), and connection stability issues (there's been regular connection stability reports since our early dev releases in this cycle, without traceable causes).

Until we resolve these issues we can't move ahead with a new Stable, and we have no ETA for this. With a milestone of 0.50.0 we need to make sure we get it right.

## Java 11

We've updated to Java 11, which means you'll need to update to use the **0.49.x development branches**. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). We have a help page [for Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) and [Mac](<https://megamek.org/wiki/mac_issues.html>). Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

**This is VERY important** - We don't support any version of Java higher than **Java 11**. Making sure when downloading and installing you are grabbing Java 11, Java 17 in particular breaks the programs hard!!

## Social Media

We are also happy to announce we have an [official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). This is now our primary community location for the suite, providing superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games).  There are also the following community Discords with regular MegaMek channels, namely [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). We are also on Facebook, at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek) for our group and page respectively.

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

+ Data: Updating Tags on Board Files
+ Issue #3662: Draw "Target Movement Modifier" on final legal step of current movement path
+ PR #3672: Removed No Torso Twist & updated quirks per BMM v6 errata
+ PR #3620: Suite Cleanup 2: Fixing a Ton of Internal Typos: Phase 1
+ PR #3615: Fixing all Assert Usages
+ PR #3686: Fixing Resource Leaks in Server::registerWithServerBrowser
+ PR #3687: Gun Emplacements can now have damage done to their equipment persist to MekHQ
+ Issue #3689: Show pilot callsign in damage phase report
+ Issue #3664: Draw TMM pips in movement and firing phases
+ PR #3707: Fixing MM's Try With Resources Resource Leaks
+ Issue #3699 Deadfire LRMs and SRMs have incorrect range brackets
+ PR #3721: Adding Dragon's Teeth and Burned/Felled Woods Rough Terrain Fluff Sprites
+ Issue #3688: Adding Color to Heat Reports
+ Issue #3722: Princess will do a better job not targeting ignored units with artillery
+ Issue #3729: Any button click on map now brings up menu, improving usability on single-button machines
+ PR #3734: Fixing Nowhere Typos
+ PR #3733: Change border colors on the minimap for moved units
+ Issue #3599: Unjam/clear turret buttons update properly after canceling pending firing orders
+ Issue #3711: Female MekWarriors are now able to have a beer after ejecting from their mech
+ Data: New Sprites including the return of 'Royal' sprites (Thanks to UlyssesSockdrawer)
+ Data: Battle Armor moving to new MUL conventions (4,5,6 unit squads).
+ Issue #3695: Increased amount and usefulness of data displayed in the General tab of the unit display.
+ Issue #3719: No kicking while bogged down
+ Issue #3742: Errata - Infantry Heat Suit environment type
+ PR #1134: Improvements to Fluff Image folders (see Wiki for specifics).
+ Issue #3715: Zero pad auto-board save image filenames
+ Issue #3743: Fixing ToolTip TMM Yellow Colors
+ Issue #3731: Save Lobby Map Settings during Save
+ Issue #3757: Minimum Range for Clan LRM
+ PR #3771: UnitDisplay: Lobby-style Quirk Text
+ Issue #1852: More flexible deployment zones; improvements to deployment zone rendering; defunct 'deep deployment zone' feature as it's now redundant
+ Issue #3753: Vehicles with Vehicle Grenade Launchers no longer lock up the game during firing phase when VGL firing arc goes off board
+ Issue #470: Display weapon fields of fire during TAG phase
+ Issue #3730: Save game Planetary settings are not persistent if in Lobby
+ Issue #3744: Mast Mount not in Support Vee equipment for VTOL
+ Issue #203, #3780: Introduced a chat command to allow individual bot player to see entire board in double blind mode
+ Issue #3564: Board validation will now find all invalid connected building hexes of different classes
+ Issue #3694: Restored ALT-Click behavior of the Map Editor building button
+ Data: Implements Spanish Translation for MegaMek. Thanks to IsWas
+ Issue #3783: Added option to change report link color
+ PR #3708: Add a MUL link to the RAT Generator Editor
+ Issue #3786: Properly update player slot "am I a bot" state when swapping between human and bot players
+ Issue #7784: Artillery reports properly respect /seeall flag
+ PR #3787: Added a GM mode flag (/gm to initiate, /allowGM to vote in favor, requires unanimous total confirmation)
  - GM Mode currently allows GM to use "/seeall" command even if GM is not an observer
+ PR #3798: Minor bot performance improvement; prevent bot-controlled jumping and zero-turn-cost infantry units from spinning in place like ballerinas
+ Issue #3791: RAT Generators don't generate units in their introduction year.
+ PR #3767: Modernize Server collections
+ Data: Fixing Maps in Scenarios files.
+ PR #3817: Prevent null pointer exception when clicking cancel during map setup save dialog.
+ PR #3475: Prevent null pointer exception when loading scenarios with invalid weather conditions flag; default to none instead
+ PR #3808: Add working hex copy/paste to the Board Editor
+ PR #3826: Add orbital guns fluff images
+ PR #3809: Fix the Formation Builder to again be able to generate fire support lances
+ Issues #3665, 3658: Server Connection Rework
+ Data: BA MUL Alignment Project.
	This involves a complete rework of the BA naming conventions to match the MUL. Almost all suits now have a (Sqd4,5,6) designation indicating the size
	as opposed to the random naming used before. MUL IDs have been cross referenced and added as required. As a final bonus to the project all BA now have
	some fluff text from Sarna.
+ Issue #3819 Unit Files needing updates.
+ Data: More BA fixes including fix to name_change.txt which resolves MekHQ #3412.
+ Issue #3453: Updated About Box copyright text per #3453
+ Issue #3435: Fixed image flickering in the About... dialog
+ Issues #3748, #3806 (partly): Correct infantry BV w.r.t. Anti-Mek attack ability and skill
+ Issues #3800, #3740: Fix various issues with sprinting, MASC and Supercharger
+ Issues #3847: RAT Generator - Won't Generate Super Heavy ProtoMeks or Tanks
+ PR #3842: Scout Bike quirk implemented
+ PR #3853: Base Components: Adding AbstractScrollablePanel
+ PR #3855: Add a unit browser to the main menu
+ Issues #2397, #2675, #3135: Fixing Shadow Rendering Issues
+ PR #3859: Unit specified deployment zone width/offset now persist to and load from MUL
+ PR #3840: BV calculation report for BA
+ PR #3823: Consolidate MASC/SC Target Number lookup
+ PR #3879 (MML Issue #1165): Improve handling of illegal armor on BA units in the TRO View
+ Data: New Camos, New Sprites, updated unit files, adding the buildable Boondoggles units, Tech Progression adjustments.
+ Updating to Gradle 7.5.1 from 6.7
+ Updating to grgit 5.0.0 from 4.1.1
+ Updating to FlatLAF 2.4 from 2.2
+ Updating to Log4j 2.18.0 from 2.17.2
+ Updating to Mockito 4.6.1 from 4.5.1
+ Updating to JUnit 5.9.0 from 5.8.2

### MegaMekLab Change Log

+ Issue #1099: Stop at 0 tons when Selecting "Use Remaining Tonnage" for Armour
+ Issue #1040: Adding Save Option to MML Exit Dialog
+ Issue #1111: Physical Attack Table Encoding Error (Push attack)
+ PR #1096: Fixing all Assert Usages
+ PR #1126: Fixing Closeable Resource Leaks
+ Issue #933: "Use Remaining Tonnage" button causes Issues
+ Issue #904: Paratrooper infantry should be limited to foot movement
+ Issue #937: Able to add more armor hardened armor than tonnage allows with patchwork
+ Issue #1030: Broadside heat data missing
+ Fixing Missing Load From Unit Cache Control-U Shortcut
+ Issue #1121: ConcurrentModificationException When Editing Viking IIC
+ Issue #1137: Disappearing structure and armor crits when adding lower arm and hand actuators
+ Issue #1125: Erroneous Invalidation of "Split" Equipment for LAM
+ PR #1140: Show DWP data on BA record sheets
+ PR #1141: Add missing columns to BA cluster reference table
+ Issue #1110: Docking collars improperly listed in blk files, not appearing on ship
+ Issue #1143: Fix ClassCastException when toggling military checkbox
+ Issue #1133: Add safety prompts to Reset Unit/Change Unit Type/Load Unit
+ Issue #1127: Fix text field behavior (MUL ID and Year among others)
+ Issue #1147: UMU MPs Printed As Jumping MPs On Record Sheet Export
+ Issue #1166: Fix ammo allocation to SmallCraft units
+ Updating to Gradle 7.5.1 from 6.7
+ Updating to grgit 5.0.0 from 4.1.1
+ Updating to FlatLAF 2.4 from 2.2
+ Updating to Log4j 2.18.0 from 2.17.2

### MekHQ Change Log

+ PR #3306: Swapping to a Single Retirement Campaign Report
+ PR #3311: MHQXMLUtility: Fixing Refit Filename and Campaign XML Custom Unit Name escaping
+ PR #3261: Fixing all Assert Usages
+ PR #3156: New Campaign Project: Improved Loading Stages
+ PR #3334: Finances: Fixing Missing Options Handling
+ PR #3338: CampaignGUI: Fixing Campaign Save Resource Leaks
+ PR #3339: Fixing Try With Resources Resource Leaks
+ Issue #3229: Can now train Astech and Medtech skills in AtB for 5xp
+ Issue #3343: Mass Training Dialog: Properly Handle Skills With Training Disabled
+ PR #3344: Ignore End Date for Active Contract Scenario Assignment
+ PR #3340: Fixing Close Exists Resource Leaks
+ Issues #3346/3347: CustomizePersonDialog: Fixing Skills and Abilities Scroll Increments
+ Issue #3362: CampaignOptionsPane: Personnel Tab: Allow Horizontal Scrolling
+ Issue #2901: Removing IS Factions from Lupus Generation for 2860-3000
+ Issue #3370: Retirement: Fixing missing s in report format
+ Issue #3372: Fixing Campaign Loan Report Issues
+ Issue #3375: Export MUL File Exports a MUL Per Player
+ PR #3337: Testing: Heavily Expanding Personnel Unit Testing. Fixing Civilian Role Comparison, Loan Week Calculation, and Pregnancy Week Calculation.
+ Issue #3291: Fixing No Exclusive Bloodnames Bloodname Generation Exception
+ PR #3399: Fixing Single Entity MUL NPE with Null Campaign
+ Issue #3408: Player-controlled DropShips now properly register damage on post-battle resolution screen
+ Issue #2791, 3225: User is now able to delete scenarios from both briefing tab and StratCon map using GM mode
+ RFE #3410: Scenario templates can now load force definition from fixed MUL file; must be located in data/scenariotemplates/fixedmuls
+ PR #3419: Moving Financial Institutions to Data
+ PR #3417: Scenarios can now subtract money as a "reward" when defining loot (to simulate drop costs/entry fees/etc)
+ PR #3426: Canceling out of GM -> Set Unit Quality dialog no longer generates an error message
+ PR #3431: Base Components: Adding AbstractMHQScrollablePanel and Fixing Company Generation Options Dialog Scrolling
+ PR #3424: Properly fail to load a Campaign when the version can't be parsed
+ Updating to Gradle 7.5.1 from 6.7
+ Updating to grgit 5.0.0 from 4.1.1
+ Updating to FlatLAF 2.4 from 2.2
+ Updating to Commonmark 0.19.0 from 0.18.2
+ Updating to Log4j 2.18.0 from 2.17.2
+ Updating to Joda Time 2.11.1 from 2.11.0
+ Updating to Mockito 4.6.1 from 4.5.1
+ Updating to JUnit 5.9.0 from 5.8.2

Enjoy everyone!
