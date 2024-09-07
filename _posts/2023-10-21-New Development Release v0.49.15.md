# Welcome all to 0.49.15

We'll its been a few months since the last dev release. But things haven't been slow, we have a ton of fixes in this release and few new things. A few highlights would be the camo rotation and MekView improvements, but we sent Princess for a couple more courses at Blackjack (Don't drown yourself and how to fire ADA Arrows). **Insert Taps being played** We've fully removed TestBot and would like to thank him for his years of service. Hail Testbot! Long live Princess!

## MegaMek

+ [Camo Rotation and Scaling](https://github.com/MegaMek/megamek/pull/4716)
+ [The MekView has had a big overhaul](https://github.com/MegaMek/megamek/pull/4822)
+ [Take'em out of my sky...Air Defense Arrow IV Implemented](https://github.com/MegaMek/megamek/pull/4762)
+ Round report fix (This fixes crazy lag some players where getting as the game went on)
+ Retired TestBot
+ Princess improvements to   water deployment
+ Lots of Aero Landing errata
+ Fixes LOTS of fixes.
+ SimFire fix Part Deux

## MegaMekLab

+ Implement Save state for auto-fill/compact toggles and sorting in mek crit view upon click
+ Bug Fixes

## MekHQ

+ Stratcon fixes (see below)
+ Weight Calculations for space mech locations
+ Bug fixes

### MekHQ StratCon Alpha

We've got more Stratcon fixes in this release.

+ Improve contrast between revealed/unrevealed hexes
+ Generate scenario using default temp mappings when facility-specific mappings aren't present
+ fix missing badlands image
+ definition file paths are now linux-friendly

## A Few Reminders

1. We have made changes to the unit files to align them with the MUL by removing the term "(Standard)". This was a significant data task and resulted in the removal of nearly 1000 instances of "(Standard)". Our Quality Assurance (QA) team has thoroughly tested these name changes by creating campaigns and loading them with every unit. However, there is a potential risk in MekHQ with CPNX files, as they rely on unit names for matching. If you encounter any errors while loading your campaign file, we apologize for the inconvenience and kindly refer to the [following post](https://github.com/MegaMek/megamek/wiki/Name-Issues-with-Units) for further assistance.

2. Lastly we’ve ripped the unofficial unit band aid off. We've moved the unofficial units zip out of this release. The reasons and poll for this was [discussed here](https://bg.battletech.com/forums/megamek-games/how-often-do-you-use-the-units-from-the-unsupported-or-unofficial-folders/). Between our Discord and this poll 75% of players were good with us removing them. It allows us to have the releases be focused on canon units.

The file is still available but players will need to add the zip file manually. We have no plans to further support or add units into that zip. It would be safe to just set it up in a customs folder and move that folder between releases.

To add the units back:

1. Download the zip file from the [MegaMek Extras](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
2. You need to right click and use the "Save link as"
3. Save this as a zip to the data\mechfiles folder of the program.
     -As a suggestion save this to a customs folder in the data\mechfiles
4. On restart they will be added.

Remember that MekHQ campaign files **are NOT** backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

## Lets talk about Simultaneous (Sim) stuff

The last couple of release we created a bit of a storm with the comments around Sim Phases and their future. In 49.14 we implemented a what we thought was a fix and tighten up some of the code. While it reduced them they still persisted. Then we finally got the golden egg - a save with a repeatable instance of it happening. Turns out if a unit skidded or fell in the movement phase a tag wasn't reset causing the unit to skip. So far in test the QA time hasn't seen a repeat of the skip.

But we want still want specific about a few things. If these fixes work then the only one **_likely_** on the chopping block is Sim Movement. It's not coded well and doesn't follow TT rules used in Double Blind. So lets say this another way.....Sim Deployment, Sim Targeting, Sim Firing, and Sim Physical will **_likely_** stay. Notice a key word in the last few sentences **_"likely"_** as defined by Merriam-Webster _"having a high probability of occurring or being true : very probable"._

What we would like players to do is to continue to test the fixes in this release. Go back to using Sim Phases (we don't recommend testing with Sim Move). We are looking specifically for instances where a **player gets there firing turn skipped**. If you want to help with this make sure to turn on "Paranoid Autosave" we'd need save games to continue to track down the issue.

## Stable 0.50.0 Status Update

We are still in the development portion of the current cycle. We've been able to implement a new version of Gradle (our build language) starting with the 0.49.11 release. As well as adding support for Java 17. This is still undergoing testing and we encourage players to use the programs with Java 17 but Java 11 remains our recommended choice for the .49.x Dev cycle. We are still working on the connection stability issues and are hopeful this release is the first step on the road to a fix.

We are getting to a point where we are starting to talk about 0.50.0 Stable but we still have some significant things we need to complete and don't anticipate a new Stable anytime soon. At this point we have some really good solid development releases and for security alone I'd recommend upgrading to Java 11 from Java 8.

## Java 11 and Java 17

We've updated to Java 11, which means you'll need to update to use the [b]0.49.x development branches[/b]. As Java is now open source, we recommend [url=https://adoptium.net/index.html?variant=openjdk11]Adoptium Temurin 11[/url]. We have a help page [url=https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)]for Windows[/url] and [url=https://megamek.org/wiki/mac_issues.html]Mac[/url]. Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

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

[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.15)

+ PR #4688: Round reports should no longer take increasingly long to load
+ PR #4686: QuadVee should no longer be able to fall after converting to vehicle mode
+ PR #4684: Added game option for GM to advance report phases without waiting for other players
+ PR #4691: Correct max # of bay doors for space stations and jumpships
+ PR #4661: Add audio tab and master volume setting to client settings
+ PR #4678: Display vehicle crit effects in unit tooltip
+ Issue #4687: Fixes to jump jet attack logic
+ Issue #4705: Reset 'turn interrupted' flag between phases (possible SimFire fix)
+ Issue #4699: Fix homing Arty splash
+ Issue #4707: Prevent bot crash when firing large craft weapons from bays
+ Issue #935: Disallow targeting of hexes for ignition that cannot be set on fire as per BMM p. 107
+ Issue #4346: Prevent soft-lock when battle armor ends swarm attack on unit being destroyed by something else
+ Issue #3956: First Succession Wars Rats seem incorrect
+ PR #4716: Camo rotation and scaling
+ PR #4709: Mixed tech dropships do not save BA Tech type
+ Issue #4704: Follow-the-leader LRM ammo is treated as regular ammo when passing through ECM field.
+ Issue #4708: Respect variable tech level game option/allowed era settings
+ Issue #4711: Prevent squadron-related NPE in lobby
+ Issue #4692: Landed dropships introduced in megamek scenarios should deploy properly
+ PR #4728: Mute "other players turn" sound properly
+ Fix #4739: ProtoMek Transport bays should now load properly
+ PR #4746: Removed Testbot
+ Fix #3546: Artillery cannons now generate proper damage values for Fuel-Air ammunition
+ Fix #4359: Artillery cannons now use flak modifiers correctly
+ Fix #4734: Non-Mek heat-tracking units no longer burn to death in a terrain fire
+ Fix #4750: Prevent errors for some dialogs
+ PR #4753: Small Craft are no longer shown as invalid in the lobby after configuring them
+ PR #4751: Tech level filtering in the unit selector dialog has been corrected (also affects MML and MHQ)
+ PR #4748: Alpha strike filters now correctly apply when creating random creating a random army
+ Issue #4690: Improvements to MegaMek command-line handling
+ Issue #4286: RATGeneratorEditor: Show unit type instead of number
+ issue #4756: Quirks: VTOL Rotor Arrangement Co-Axial/Dual Rotor
+ Issue #4756: Correct NPE in bvReports when player is not on a team
+ Fix #4694: Silver Bullet Gauss Rifle now use the correct Aero damage of 9
+ Fix #4774: Tripod Meks with AES now load correctly
+ Fix #4737: The planetary conditions overlay should now be more consistently shown or hidden
+ PR #4771: Alpha Strike conversion updates
+ Fix #4754: Updates to some VTOL and CV units that feature transportation capabilities which may not have loaded correctly
+ Fix #4727: Fixes an error with pilot images in reports
+ PR #4776: Fixed Wing Support with STOL no longer show as invalid in the lobby when set to altitude 0
+ Issue #1552: Added Arrow IV air defense missiles; Princess can use them if available
+ Issue #4782: Argotera now has full-head ejection system
+ Fix #4780: Players can once again fire during the point blank phase
+ Fix #4779: Meks can once again sprint
+ Fix #4768: Improved gauss rifles nerfed - take a +1 penalty to the TN when fired from small aeros
+ Issue #4550: Improve Princess logic regarding placement of units in deep water
+ Issue #2698: Attempt to reduce bot speed in low gravity
+ Fix #3870, 4524: Properly apply quirks and SPAs to artillery attacks
+ Issue #4730: Multi-crew units with command console receive correct crew count
+ PR #4800: Improvements to aerospace and fighter squadron UI
+ Fix #4789: Prevent bot hang when smoke drifts off-board
+ Fix #4790: Prevent soft lock when processing artillery attacks against fled/destroyed off-board artillery
+ Fix #4738: Aim-high attacks no longer use partial cover hit table when target is in partial cover
+ PR #4815: Some illegal ammos have been removed from artillery cannons
+ Fix #4706: The BV calculation now includes special values for minefield artillery rounds
+ Fix #4743: Units making vertical landings now only apply half the terrain modifiers
+ PR #4813: Aero landing now considers terrain modifiers for advanced terrain from TO; a unit takes damage when the landing path includes rough or rubble; a unit that lands in water of sufficient depth (2 for DS, 1 otherwise) is destroyed; dropships landing in depth 1 water are permanently immobile
+ Data: Fixes for #4808, #4752, #4685, #4677, #4619, and #4597
+ Fix #4820: Fix Immelman and Split-S maneuvers
+ PR #4818: Separate structure class from TestEntity
+ PR #4816: TestTank: Adapt some tests for GunEmplacements
+ Fix #4828: Use standard ECM range for Watchdog/Nova CEWS
+ Fix 4830: WiGE units with jump jets no longer jump to the bottom of water hexes
+ PR #4834: The unit tooltip now indicates when TSM is active
+ PR #4822, #4844: Formatting updates and utilities for the unit summary (unit selector/lobby unit view)
+ Fix #4786: Fix modifier for controlled sideslip
+ Fix #4745: Fix machine gun array burst damage against conventional infantry

### MegaMekLab Change Log

[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.15)

+ Fix #1172: Clan TAG will no longer be written as TAG (Clan) (Clan) in Mixed Tech units
+ Fix #1292: File -> Exit in the menu bar item will now actually exit MML
+ PR #1298: Add max bay door counts for fixed wing support vehicles; minimum door counts for all bays
+ Issue #1287: Fix NPE when deleting multi-slot BA equipment
+ PR #1297: Save state for auto-fill/compact toggles and sorting in mek crit view upon click
+ PR #1310: Tech level filtering in the unit selector dialog has been corrected
+ PR #1311: MML support for MegaMek PR #1552

### MekHQ Change Log

[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.15)

+ PR #3735: Maintenance cost shown in whole C-Bills
+ Issue #3741: Stratcon fixes
     - Improve contrast between revealed/unrevealed hexes
     - Generate scenario using default temp mappings when facility-specific mappings aren't present
     - fix missing badlands image
     - definition file paths are now linux-friendly
+ Issue #3725: Improve performance when searching for parts using "planetary acquisition"
+ Issue #2854: Implemented CamOps errata for avionics repair times
+ PR #3756: Tech level filtering in the unit selector dialog has been corrected
+ Issue #3747: Unable to Assign Pilots to Tripod Meks
+ PR #3766: weight calculation for spare mech locations
+ PR #3768: Arano Restoration Campaign - Planetary Control

Enjoy everyone!
