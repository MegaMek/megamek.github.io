# Welcome all to 0.49.11

It's been a while since our last Dev release. Things had slowed as people took some much needed breaks.

But we have got a lot of exciting things in this release. We've had a couple of new and returning contributors and they've really worked on lots of fixes and improvements. We have the usual bug fixes in all three programs, see below for the detailed list but the big one in this release is...

## Alpha Strike Support

OK that's tackle the elephant first..this is **NOT** a playable version of Alpha Strike (Which if it every happened would be MegaStrike) it's strictly support for Alpha Strike.

Please see [Alpha Strike Card Support in MegaMek](https://bg.battletech.com/forums/alpha-strike-101/alpha-strike-card-support-in-megamek-coming-soon)

We've also added support for Java 17 starting with this release but please see below for some cautions.

We found that the 49.10 release had more stability and general improvements around connectivity but we still aren't 100% where we want to be. We know from experience that when we say this players generally stay away. But you can run both a stable release (0.48.0 or good dev release 0.49.10) you just need to keep them in separate folders.

Remember that MekHQ campaign files **aren't** backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

## MegaMek

In addition to Alpha Strike Support there are lots of UI/UIX improvements

+ Scale the Client GUI using the GUI scale
+ Add a non-tabbed Unit Display for users with high-resolution monitors
+ Add an overlay for Planetary Conditions
+ Allow long unit names to display cleanly when designating weapons fire
+ Long last target names display properly on extra unit display panel
+ Advantages display on the bottom of unit info card
+ Tooltip displays original vs modified movement due to planetary conditions
+ Add option to adjust the seen by in the unit tool tip
+ Line wrap for long sensor texts in the Unit Display's sensor tab
+ Add search functionality to the mini report dialog; configure keywords in the Client Settings
+ Fix target being cleared when selecting a new weapon
+ Allow Report Display Split Pane to Resize
+ Advanced search can now filter on weapon class as well set zero as a selectable weapon/equipment quantity in advanced search
+ When reinforcing from MUL, the target player can be picked
+ Turn timer in seconds
+ TO Infantry Movement on Pavement optional rule
+ CI Field Guns and Artillery are now destroyed with trooper loss according to TO:AUE[/li]
+ Data wise - Deadborder continues to fix and improve sprites, and we'll got lots of unit fixes and RecGuide 26 units in.
plus bug fixes see change log for details.

## MegaMekLab

We got a few fixes and we've made some improvements to record sheets this includes engine ratings, improved visibility of armor type, and internal structure

## MekHQ

We have quite a few fixes and improvements to the company generator.

### MekHQ StratCon Alpha

StratCon remains a key part of MekHQ but the main developer on it (Nickargua) is taking a well earned break from the projects. This will largely stop new features being added until his return. We'll address bug fixes as identified.

## Stable 0.50.0 Status Update

We are still working on the development portion of the current dev cycle. We've been able to implement a new version of Gradle (our build language) starting with this release (0.49.11) we've added support for Java 17. This will require more testing and we encourage players to use the programs with Java 17, Java 11 at this time remains our recommended choice. We are still working on the connection stability issues. Until we resolve these issues and confirm Java 17 stability we can't move ahead with a new Stable, and we have no ETA for this. With a milestone of 0.50.0 we need to make sure we get it right.

Until we resolve these issues we can't move ahead with a new Stable, and we have no ETA for this. With a milestone of 0.50.0 we need to make sure we get it right.

## Java 11 and Java 17

We've updated to Java 11, which means you'll need to update to use the [b]0.49.x development branches[/b]. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11) We have a help page [for Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) and [Mac](https://megamek.org/wiki/mac_issues.html]). Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

This release implements support for Java 17. We need to stress this has had some testing and needs more players to use the programs with Java 17. But Java 11 remains our recommended version.

## Social Media

We are also happy to announce we have an [official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). This is now our primary community location for the suite, providing superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games).  There are also the following community Discords with regular MegaMek channels, namely [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). We are also on Facebook, at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek) for our group and page respectively.

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

[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.11)

+ Issue #3776: Add 0 as a selectable weapon/equipment quantity in advanced search
+ PR #3908: Connections Rework: Logging Modernization
+ PR #3910: Remove unused modes from TAG weapons
+ PR #3929: Fix slots used by engines in Conventional Fighters
+ PR #3927: Improve the info shown in the unit tooltip for Conventional Infantry
+ PR #3925: Fix loading damaged CI and BA from a .MUL file
+ PR #3932, 3940, 3942: Advanced search can now filter on weapon class
+ PR #3935: CI Field Guns and Artillery are now destroyed with trooper loss according to TO:AUE
+ PR #3158: AlphaStrike conversion update and cards
+ PR #3944: Infantry refactor
+ PR #3946: Add a non-tabbed Unit Display for users with high-resolution monitors
+ PR #3954: Remove 2" base MV from ProtoMek gliders (to-be-errata); add missing OV calculation for 0 M dmg units
+ Issue #961: Allow long unit names to display cleanly when designating weapons fire
+ Issue #3949: non-tabbed unit display panel order can be configured in client settings; size and position saving for panels
+ RFE #2403: When reinforcing from MUL, the target player can be picked
+ Issue #3959: Long last target names display properly on extra unit display panel
+ Issue #2757: Bulletproofing for when DFA target is eliminated prior to DFA resolution
+ Issue #3902: Advantages display on the bottom of unit info card
+ Issue #2715: Tooltip displays original vs modified movement due to planetary conditions
+ Data: Updated sprites and camos. Data fixes for #3962, #3913, #3907, #3905, #3933, #3867
+ Data: TP Foster RATS #3930 - Thanks Stonewall072
+ PR #3970: AS conversion fixes
+ Issue #3414: Add option to adjust the seen by in the unit tool tip
+ PR #3972: AS conversion fixes round 2
+ Issue #3980: Prototype ER Large Laser Wrong Stats for Aerospace Units
+ PR #3989L AS Conversion fixes round 3
+ Issue #3978: Line wrap for long sensor texts in the Unit Display's sensor tab
+ Issue #3975: Allow the report display dialog to be always active during a game
+ PR #3997: Fixing Missing DockingCollar Handling in Unit Load
+ PR #3992: Update Alpha Strike conversion to newest errata
+ Issue #2842: Fix an issue where Thin Snow would increase MP costs for BA
+ PR #4007: Allow loading .mtf Mek files with split weapons on CT+H locations
+ Issue #3939: Prevent Null Entities in a Bay's Loaded Units
+ Issue #3984: Stuka-K5b2 data issues
+ Issue #3985: ER Small Pulse Laser Incorrect Aerospace Range
+ Issue #3906: Turn timer in seconds
+ Issue #3054: TO Infantry Movement on Pavement optional rule
+ Issue #4003, #4039, #4047: Add search functionality to the mini report dialog; configure keywords in the Client Settings
+ Issue #3818: Airborne Aerospace Units Unaffected By Extreme Temperatures
+ Issue #3727: Magma crust breakthrough and liquid magma damage not working as expected
+ Issues #543, #2959, #3982: Scale the Client GUI using the GUI scale
+ Issue #2684: Fix target being cleared when selecting a new weapon
+ PR #4015, #4036, #4037: Further Alpha Strike conversion errata and corrections
+ Issue #3375: Fix Player's Turn text not being updated in some circumstances
+ Issue #4013: Turn timer continues to run when you close the main window
+ PR #4017: Fix border move indication for vehicles
+ Issue #4022: Fixing Uncaught NPE when Address Bind is Already in Use
+ PR #3996: MMXMLUtility: Removing Deprecated Methods
+ Issue #3709: Removed  searchlight customization checkboxes for units that receive external searchlights automatically
+ Issue #3811: Fix formatting issue with the Infantry victory report
+ Issue #4021: Preventing Save Game Loading Player Name NPE
+ PR #3969: Add an overlay for Planetary Conditions
+ Issue #2695: Improve game options tooltips
+ PR #4049: Player Java 17 Support
+ PR #4055: Expand FOV Highlight Disk Size Option Dimension for Display Scaling
+ PR #4057: Allow Report Display Split Pane to Resize
+ Issue #4058: Fixing Default Fluff Image Paths
+ Updating to Apache Commons Text 1.10.0 from 1.9
+ Updating to FlatLAF 2.6 from 2.4
+ Updating to Jackson XML 2.14.1 from 2.13.3
+ Updating to JAXB Runtime 4.0.1 from 4.0.0
+ Updating to JUnit 5.9.1 from 5.9.0
+ Updating to Launch4j 2.5.4 from 2.5.3
+ Updating to Log4j 2.19.0 from 2.18.0
+ Updating to Mockito 4.10.0 from 4.6.1

### MegaMekLab Change Log

[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.11)

+ Issue #910: Fix SV Fission and TL C Fusion Engine Minimum Weight
+ PR #1168: Fixing Tripod Leg and Mek Spike Dagger Character Uses
+ PR #1181: Infantry refactor adaptation
+ Issue #1169: Add the engine rating and type to more Record Sheets
+ Issue #1179: Remove (IS) label from Plasma Rifle on Mixed Tech units
+ Issue #1176: Improve visibility of armor type on many Record Sheets
+ Issue #1197: Allow split weapons between CT and H
+ Issue #1196: Improve visibility of the structure type on RS and resize the armor type
+ PR #1201: Add the AS Card to MML's Preview Panel
+ PR #1206: Java 17 CI
+ Updating to Apache PDFBox 2.0.27 from 2.0.26
+ Updating to FlatLAF 2.6 from 2.4
+ Updating to JAXB Runtime 4.0.1 from 4.0.0
+ Updating to Launch4j 2.5.4 from 2.5.3
+ Updating to Log4j 2.19.0 from 2.18.0

### MekHQ Change Log

[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.11)

+ PR #3453: Remove restriction limiting generated/dynamic Scenarios to the current Campaign Week
+ PR #3450: Base Components: DefaultMHQScrollablePanel
+ PR #3482: Infantry refactor adaptation
+ PR #3486: Fixes issue where training ammo was affected by the parts cost multiplier
+ PR #3487: No longer attempt to include transport costs in contract costs if pay for transport is disabled
+ Issue #3478: Added "Partial Success" contract outcome option
+ PR #3466: Adding Faction Data Validation to Campaign Options Pane
+ Random Death: Fixing recommended type to Exponential from erroneous Percentage
+ PR #3499: MHQXMLUtility: Refit Swapover
+ PR #3500: MHQXMLUtility: Campaign: Removing duplicated fields
+ PR #3507: New Campaign Project: Adding Separate New Campaign Initialization Messages
+ Issue #3473: Load Default AtB Config When Custom Config Cannot Be Parsed
+ Issue #3489: Adding Small Craft and DropShip Transport Support
+ Issue #3492: Removing Cached ToolTip Portraits between MM Launches
+ Issue #3472: AdvanceDaysDialog: Replace Advance to New Decade with Advance to New Quarter
+ Issues #2467, #3483: Fix Part Store Battle Armour Tech Introduction and Clan Filtering
+ PR #3516: Company Generator: Adding Faction Options
+ PR #3511: Contract Market: Adding Transit Time and Estimated Profit Columns
+ PR #3501: MHQXMLUtility: Parts Swapover and Removing Deprecated Method Uses
+ PR #3520: Standardize Scenario and Mission naming so they no longer have displayed overlap
+ Issue #1858: Sandblaster can now be trained
+ PR #3529: Player Java 17 Support
+ Issue #3524: Fixing Missing Federated Commonwealth Planetary Events
+ PR #3534: Scenario Template Editor: Fixing Scrolling Intervals
+ PR #3535: MRMS Dialog: Fixing Scrolling Intervals
+ Issue #3373: Company Generator: Parts No Longer Go Missing After Unit Removal Before Reload
+ Issue #3435: Company Generator: Fixing Preset System
+ PR #3538: Data Loading: Don't Override the Selected Date
+ Issue #3389: Personnel Table: Sort Age Using Birth date
+ Updating to Apache Commons Text 1.10.0 from 1.9
+ Updating to Commonmark 0.21.0 from 0.19.0
+ Updating to FlatLAF 2.6 from 2.4
+ Updating to JAXB Runtime 4.0.1 from 4.0.0
+ Updating to Joda Money 1.0.3 from 1.0.2
+ Updating to Joda Time 2.12.2 from 2.11.1
+ Updating to JUnit 5.9.1 from 5.9.0
+ Updating to Launch4j 2.5.4 from 2.5.3
+ Updating to Log4j 2.19.0 from 2.18.0
+ Updating to Mockito 4.10.0 from 4.6.1
+ Updating to Mockito JUnit Jupiter 4.10.0 from 4.6.1

On behalf of the whole MegaMek Dev team we'd like to wish everyone a safe and happy holiday season and all the best in 2023.
