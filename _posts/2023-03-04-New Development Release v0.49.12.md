### Welcome all to 0.49.12!

This is one massive release with lots of stuff across the programs. We have so much new exciting stuff in here I don't know where to start. You'll have to give the full list a review. But these in my opinion are some of the major ones.

The [Advanced Unit Search](https://github.com/MegaMek/megamek/pull/4131) has been redone and is now one of the most powerful out their to find units, including a quirk search.  The ability to [Show the Game board](https://github.com/MegaMek/megamek/pull/4030) in all phases is now available. The [unit Tool Tips have had improvements.](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1894415/#msg1894415) The data being shown is huge, including long requested things like bombs on board. As an extension of this there are improvements to [unit information in the lobby](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1897317/#msg1897317) showing the role for example.

We've implemented numerous Alpha Strike conversion fixes and implemented the ability to print AS cards from inside MegaMek. As an extension of this we've implemented [Strategic BattleForce Conversion and printing.](https://bg.battletech.com/forums/strategic-games/coming-soon-to-megamek-strategic-battleforce-conversion). We need to stress that this, like the Alpha Strike conversions, are tools and we have no plans to implement playable Alpha Strike or SBF.

One final one, our decision to turn off the BONG! was met with cheers and howls. Since we like to make everyone happy (or try too) lets welcome the [return of the bong.](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1909506/#msg1909506) This can know be customized and as a couple of other options, it can also be set to on or off in the client settings.

We found that the 49.11 release had more stability and general improvements around connectivity but we still aren't 100% where we want to be. We know from experience that when we say this players generally stay away. But you can run both a stable release (0.48.0 or good dev release 0.49.10) you just need to keep them in separate folders.

Remember that MekHQ campaign files **aren't** backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

### MegaMek

+ Numerous Alpha Strike conversion fixes.
+ Ability to Print AS Cards
+ Ability to create and print Strategic BattleForce Formations
+ Improvements to the Weapon Display in game
+ Show Game Board in all phases
+ Tool tip Improvements
+ Super Cooled Myomer is useable
+ Ability to export sprites with Camo and Damage
+ Improvements to Initiative reports
+ Lobby Improvements
+ Attack Tool Tip Updates
+ Numerous small improvements to unit tool tip
+ Ability to create trenches and field works with engineering equipment
+ VTOL's don't bog down in swamps
+ Numerous data fixes and Rec Guides additions.
+ New SPA's - Cross Country SPA, Environmental Specialist, Terrain Master (Nightwalker)

### MegaMekLab

+ Preview BA AS stats
+ Fixes to VTOL Record sheets
+ Adding Role, fixing AP check boxes of BA Record Sheets

### MekHQ

+ Numerous Bug fixes
+ Improvements to StratCon presets
+ New News
+ Personnel Table: Adding Flag View

### MekHQ StratCon Alpha

StratCon remains a key part of MekHQ but the main developer on it (Nickargua) is taking a well earned break from the projects. This will largely stop new features being added until his return. We'll address bug fixes as identified.

## Stable 0.50.0 Status Update

We are still working on the development portion of the current dev cycle. We've been able to implement a new version of Gradle (our build language) starting with this release (0.49.11) we've added support for Java 17. This will require more testing and we encourage players to use the programs with Java 17, Java 11 at this time remains our recommended choice. We are still working on the connection stability issues. Until we resolve these issues and confirm Java 17 stability we can't move ahead with a new Stable, and we have no ETA for this. With a milestone of 0.50.0 we need to make sure we get it right.

Until we resolve these issues we can't move ahead with a new Stable, and we have no ETA for this. With a milestone of 0.50.0 we need to make sure we get it right.

## Java 11 and Java 17

We've updated to Java 11, which means you'll need to update to use the **0.49.x development branches**. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11) We have a help page [for Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) and [Mac](https://megamek.org/wiki/mac_issues.html]). Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

This release implements support for Java 17. We need to stress this has had some testing and needs more players to use the programs with Java 17. But Java 11 remains our recommended version.

## Social Media

We are also happy to announce we have an [official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). This is now our primary community location for the suite, providing superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games).  There are also the following community Discords with regular MegaMek channels, namely [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). We are also on Facebook, at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek) for our group and page respectively.

## Mac Users

[Please](https://megamek.org/wiki/mac_issues.html) check out this workaround for Mac Operating Systems.

## Contributing

[Please](https://megamek.org/wiki/I-want-to-help) check out this document for contributing to the suite. Deadborder has us covered from land unit sprites and camos. But we desperately need sprites for aerospace units.

## Updating Your Campaign

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions, never backwards.
3. Do not copy MegaMek saves nor any preference file from a different version.

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log

[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.12)

+ PR #4062: OS Thunderbolt Weapons are now available for construction and use
+ PR #4118: The Cross Country SPA is now available for vehicle pilots (effects on water movement is not yet implemented)
+ Issue #4149: Fix an error with the readme file for Princess
+ Issues #4169, #3568: Fixing a bug with firing weapons after having moved offboard
+ Issue #2652: TacOps BA crits
+ Issue #2945: RHS failure chance errata
+ PR #4166: Company-sized forces can now be converted to Strategic Battle Force Formations
+ PRs/Issues #4070, #4069, #4065, #4067, #4073, #4145, #4182, #4186, #4187, #4219: Alpha Strike conversion corrections (see Issue #3961)
+ Issue #4028: Update altitude bomb scatter handling to current errata (by MoF);
               BA micro bomb attacks now use gunnery and only scatter one space per TW p228
+ PR #4077: Fix SmallCraft and DropShip landing lengths
+ Data: Rec Guide 27 and other unit fixes.
+ Issue #4066: Incorrect item size on BA AP Gauss Rifle
+ PR #4087: Alpha Strike damage conversion will now ignore ammo weapons that lack ammo
+ PR #4074, #4103, #4136, #4137: Alpha Strike conversion updates
+ PR #4084: Java 17: Manifest File Add-Opens
+ Issue #4088: Improved Autocannon/2 on ASF is listed as doing 20/0/0 damage
+ PR #4096: Fix Unit Display weapon order bugs
+ PR #4078: Various unit tooltip improvements
+ PR #4030: show game board in all the game phases
+ PR #4125: Add tooltips showing shortcut keys to the in-game action buttons
+ Issue #4090: Fix TO:AR lighting conditions piloting skill and MP penalties
+ Issue #4093: (Errata) Ensure a minimum weight and crit count of 1 for MASC
+ Data: Various Data fixes (RAT name shortening, New Rec Guides)
+ PR #4100: Base Components: Adding JDisableablePanel
+ PR #4094: Disconnecting Entity from MM's Force to facilitate other game types
+ PR #4111: Super Cooled Myomer is now operational in MM games
+ MHQ Issue #3558: Track RATs Using a Final HashMap to Prevent Null Issues
+ Issue #4098: Adding Sprite Camouflage and Damage Export Options
+ Issue #4060: Improving Initiative Report
+ PR #4092: Lobby updates
+ PR #4097: Attack Tool Tip update
+ PR #4113: AS Conversion: BA with jump MP reduced to 0 count as non-jumping
+ PR #4112: BaseComponents: Adding Nag Dialog Setup
+ PR #4130: show movement for all entity types on unit tool tip
+ PR #4132: Fixing Tripod Movement and Mini Crit Display
+ PR #4168: The minimap now shows the map's size
+ Issue #4143: Fixing Advanced Search Dialog Panels Expanding on Reload
+ PR #4101: SPA: Environmental Specialist
+ PR #4102: SPA: Terrain Master (Nightwalker)
+ PR #4142: Fix threading issues and add a SkinnedJPanel
+ PR #4123: Expanding Primary Dialog Preferences
+ Issue #4148: Infantry Fortify option takes one turn instead of three
+ Issue #4032: Filter Tactical Genius Double Blind Report Message
+ Issue #3151: Unit Display Weapon List Count Option
+ Issue #4160: Correct issue with weapon list visible row count
+ Issue #4128: Status bar update for players remaining
+ Issue #4129: Unit tool tip fixes #4129
+ Issue #4158: Fixing a bug in using ammo from a trailer
+ Issue #3026: Vehicles with suitable equipment are now able to create Trenches/Fieldworks
+ Issue #4171: MM-J17: NPE at End of MM game
+ PR #4131: Substantial additions to the advanced unit search
+ PR #4151: Allow configurable sounds to be played for some turn-related events
+ Issue #4157: The lobby unit configuration dialog will now remember its size and position
+ Issues #4010, #3499: Fix an error where swamp bog down checks happened inconsistently
+ PR #4180: Hide External Windows in Lounge Phase
+ PR #4181: Fixing missing unit tooltip good crits when there is a bad crit
+ PR #4202: Fixing display bugs in the RAT Generator
+ PR #4190, #4207: Advanced Search: add invalid, failed to load equipment, tech base and tech level filters
+ Issue #3603: Off Board Artillery with Deployment Delay Doesn't Display Deployment Delay
+ Issue #3934: Deadfire LRM range brackets incorrect 0.49.10
+ Issue #4185: RFE: Visual GUI indicator that unit is using Searchlight.
+ Issue #4173: Heat Buildup colors in weapons fire tab are off by one
+ Issue #4141, #4218: Fixing a bug with ejected pilots at altitude blocking ground unit movement
+ PR #4209: Strategic BattleForce record sheets can now be printed from the conversion dialog window in MM's game lobby
+ PR #4211: Alpha Strike cards can now be printed from most card views and, for multiple units, from the conversion dialog in MM's game lobby
+ PR #4194: Show movement mode before move indicators
+ PR #4193: Show amount of heat over capacity on the weapon tab
+ Data Issues #4210, #4206, #4200, #4198, #4192, #4122, #4119, #3963, and #3919 fixed.
+ Updating XStream to 1.4.19 from 1.4.14

### MegaMekLab Change Log

[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.12)

+ PR #1208: BattleArmor now also feature an Alpha Strike conversion preview
+ PR #1225: Fixed a bug in the Record Sheet VTOL tables
+ Issue #1223: Record Sheets: Show Artemis for MML weapons
+ Java 17: Manifest File Add-Opens
+ Issues #1188, #1218: Fixing MML-only UNIX Jar Release
+ Issues #1231, #1232, #1233: BA Record Sheets: Showing unit role, fixing AP checkbox, showing SSW on Trooper 1
+ PR #1229: Remove threading from the UI loader

### MekHQ Change Log

[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.12)

+ Issue #3345: Rename Gunnery/Protomech to Gunnery/ProtoMech
+ Issue #3541: Maintenance Extra Time Doesn't Show For Mothballing, Activating, and Mothballed Units
+ Issue #3542: Remove Unit Market Offers That Fail to Parse
+ Issue #3553: Migrate Turn Timer Game Option
+ Issue #3436: Add StratCon Preset
+ Issue #3558: RATs Are Used Outside of AtB
+ PR #3580: Personnel Table: Add Founder Column to Biographical Information View
+ PR #3574: Fixing Support VTOL Maintenance Time
+ PR #3579: Personnel Table Mouse Adapter: Add Founder to Spouse Selection Information
+ PR #3572: Adds Environmental Specialist Specialist
+ Issue #2482: Interstellar Map: Add Contract Search and Planetary Acquisition Radius Options
+ PR #3546: Campaign Options: Move Contract Search Radius and Variable Contract Length to Contract Market
+ PR #3551: Campaign Options: Fixing Financial Year Tool Tip Option Typo
+ Issue #3554: Null Protecting MechSummaryCache Return
+ PR #3557: Yearly Retirement Nag Now Follows Campaign Options
+ PR #3561: Campaign Options Dialog: Fixing Random Retirement Panel Name
+ PR #3563: Base Components: Moving JDisableablePanel to MM
+ Issue #3569: Company Generation Dialog: Fixing Warning Option Names
+ Issue #3573: Null Protect Adding Allied Entities to an Objective
+ Issue #3576: Prevent Ultra-Light and Superheavy Scenario Assignment OutOfBounds NPEs
+ PR #3581: Personnel Table: Adding Flag View
+ Issue #3582: Company Generator: Prevent Preset From Loading in Older Versions
+ Issue #3583: Campaign Preset: Prevent Preset From Loading in Older Versions
+ PR #3586: Campaign Ops Unit Rating: Properly Calculate Admin Personnel Numbers
+ PR #3589: Phenotype Enum: Migrating Uses to Simplification Methods
+ PR #3590: Fixing New Campaign SPA Options Reset
+ PR #3591: Use JFrame Instead of Frame as Frame has Accessibility Issues
+ MM Issue #4098: Adding Sprite Camouflage and Damage Export Options
+ PR #3550: Initial Swapovers to allow for Legendary and Heroic Skill Levels
+ Issue #3318: Add manual personnel payments that generate Finance debit
+ Issue #3543: Cleaning up some medal award images
+ PR #3603: News Update
+ Issue #3592: Handling Procreation for Returning Pregnant Personnel
+ Issue #3607: Properly Load Support Edge Option Text
+ Issue #3605: News Properly Shows in Advance Days Dialog
+ PR #3614: Unit Table Mouse Adapter: Only Allow Unit Assignments for Available Units
+ PR #3612: Unit Market Pane: Fixing Missing Table Name
+ Issue #3601: Fixing Nag Display and Specified Description Text
+ Issue #3599: Prevent Null Entity Generation Scenario Creation NPEs
+ Java 17: Manifest File Add-Opens

Enjoy everyone!
