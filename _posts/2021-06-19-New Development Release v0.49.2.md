# New Development Release 0.49.2

Welcome to 0.49.2 this release is back to a mix of big fixes and some cool new features.

But first a word from one of our sponsors; Are you tired of fighting super-strength meks, are those Tau Zombies getting you down, try the new fully functioning Anti-TSM spray available in SRM and LRM varieties. Available at fine weapons dealer near you.

There are a lot of fixes, big additions, and subtle changes in this release. Please give the change logs a close look for everything. But some highlights:

## MegaMek and Java 11

We've have officially made the change to **Java 11**, meaning to use the
**0.49.x Development branch** you'll need to update.

Due to changes in downloading Java that Oracle has made, we are recommending
players use [OpenJDK 11](https://adoptopenjdk.net/). We have a help page
[for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and
[macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able
to user your package manager to install OpenJDK from their repositories.

## MegaMek

We've got some more fixes to the map editor. SeaVee's camo pack has been retired and replaced by DeadBorders pack, which is a larger pack and look darn good with his sprites. Speaking of camo we added a layered underlay to the sprites and you'll notice another improvement in there look. Some improvements in game like indicating if a unit is narc'd, and show which units can move on the facing arrow.

The minimap [has had an overhaul](https://github.com/MegaMek/megamek/pull/2948]minimap) - the Strat Ops are now the standard, and the old version the icons have been redone. While Princess was at Blackjack she picked up some options - Introduction to avoiding mines, Ordering allies to flee, and her BattleArmor instructors reminded her when you climb on something to tear it up.

We've also implemented the errata for level 1 buildings. Lastly a ton of new sprites, Rec Guide 14, and more units with fluff text.

## MegaMekLab

The lab got some bug fixes, a chunk of these impact printing Record sheets, and improvements to how we validate certain equipment.

## MekHQ

Nickargua has been working hard on the Stratcon Alpha and this release as numerous fixes (see change log below). Windchild has been busy improving various dialogs and reports. We also have added colors customizability in the MekHQ options. Extra time for maintenance is available for those needing help in the Third Succession War. Improvements to the rank sorting. The GM tools dialog is completely rewritten. We continue to chip away at refit issues.

## SOCIAL MEDIA

We are also happy to announce we have an [Official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). It will function like our Slack but gives us better voice support for those who use the [official public servers](https://megamek.games).

Also a reminder to drop into the [Slack channel](https://bit.ly/2KSu5yQ) to meet other players and harass the Devs that drop in and out. If Slack isn't your thing check out these Discords with MegaMek channels - [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52).

Facebook - [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek)

## FOR MAC USERS

We think we now have a [workaround for macOS](https://megamek.org/wiki/mac_issues.html).

Another reminder when moving between versions:

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions.

## CHANGE LOGS (for this release only) AND DOWNLOAD LINKS

### MegaMek Release Notes

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.2)

+ PR #2816: Board Editor Layout Scaling
+ PR #2852: Board Hex Fluff Transitions
+ PR #2877: Report Messages Cleanup
+ PR #2879: Remove unnecessary logging and bot processing of human-readable round reports
+ Issue #2704: Indicate that units may still move on facing arrow
+ Issue #2878: Princess configuration dialog no longer locks up when trying to click Ok
+ Issue #2886: Wreck sprites display correctly when zoomed; removed wreck sprite labels; indicator of what's wrecked shows up in tooltip popup
+ PR #2887: Menu bar scales with the rest of the GUI
+ PR #2885: Fix "weird" key-bind defaults
+ Issue #2884: preventing Array Index Out of Bound error when adding bombs to a LAM
+ PR #2880: "De-hexed" water and pavement (partial-looking water and pavement hexes that are functionally water and pavement, but look more "realistic" like the recent physical CGL hex maps)
+ PR #2869: Camouflage: Deadborder Pack, Base Component Swapover
+ PR #2898: Princess will now do her best to avoid known minefields
+ PR #2896: Base Components: Using proper locale
+ PR #2903: Camouflage: Layered Overlay
+ Issue #2883: Can once again issue flee command to allied bots, but need to specify an edge (see docs);
	Can set bot destination edge to 'nearest', causing its units to move to the nearest board edge
+ PR #2912: Show all locations for spreadable equipment in summary view
+ PR #2916: CommonMenuBar maintenance (checkbox items)
+ Issue #2897: Princess will now attack with swarming BA
+ Issue #2888: Princess can no longer unjam tank weapons/turret or use searchlight when unit crew is unconscious
+ PR #2924: Per current errata, "short" buildings now provide partial cover for tall units (e.g. mechs) rather than enclosing them completely
+ PR #2923: Prototype TSM
+ Issue #2672: Fuel Tank Magnitude Tooltip Correction
+ PR #2915: Improved unit image scaling in the lobby
+ Issue #929: NARCed status on unit tooltip
+ Issue #2920: Prevent lock-up when resolving homing artillery attacks vs tagged hex
+ PR #2929: Players can now skip deploying minefields
+ Issue #2543: Board images save at current zoom, game summary at zoom 1
+ PR #2910: UnitReadoutDialog Standardization
+ Issue #2917: Fixing Structured_Water directory reference
+ Issue #2003: Fix terrain exit issue in map editor
+ PR #2937: CommonMenuBar and MovementDisplay Menu entry corrections
+ PR #2941: Prevent rendering failures in lobby when using LAMs in fighter mode
+ PR #2934: Complete Anti-TSM "Green Smoke" warhead implementation
+ Issue #2762: Improve the Minimap and fix empty summary screenshots
+ Data:New Sprites, Rec Guide 14 (also renaming folder to match MUL), more units with Fluff text.

### MegaMekLab Release Notes

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.2)

+ Issue #912: Changing AMS, A-Pod, and B-Pod display text from PD to PB
+ Issue #905: Preventing Full Head Ejection NPE
+ PR #917: Remove prototype heat-sinks from equipment tab
+ PR #918: Show unused tonnage in the status bar
+ PR #919: Show multiple equipment locations on the record sheet
+ Issue #870: Wrong aerospace fighter speed in clipboard export
+ Issue #871: Partial Wing heat dissipation on record sheet
+ Issue #873: Beagle Active Probe range on record sheet
+ Issue #885: Heat Sink/Laser Insulator Interaction on Vehicles
+ Issue #886: Prototype Triple Strength Myomer
+ Issue #884: Reengineered laser damage type
+ PR #926: Enable infantry field guns to use HVACs, if you wanted to do that for some reason
+ Issue #888: Artemis IV Validation
+ Issue #890: Mixed Tech QuadVee Compact Heat Sinks multiple problems
+ Issue #897: Additional peculiar entry for Clan Machine-Gun Ammo
+ Bug: IS MASC not filtered out with Clan tech base

### MekHQ Release Notes

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.2)

+ Issue #2620: Adding Missing Leadership Column in Personnel Tab
+ Issue #2625: Properly Clear Tech Units on Person removal/retirement
+ PR #2617: Contract Command Rights Enum and Tool Tips
+ PR #2637: Personnel Names
+ PR #2651, #2688, #2698, #2701, #2702: Various StratCon fixes:
  - Updated arrival altitude for aerospace fighter reinforcement modifiers (they were showing up on the ground)
  - Standardized "recon" type scenarios to have the same criteria as Tukayyid scenarios
  - Various briefing text clarifications
  - Store artillery off-board status between campaign saves
  - On Integrated command, don't immediately and incorrectly undeploy lances after generating scenarios
  - Adjusted manual force deployment rules (unlimited stacking on allied facilities, one per hex otherwise, no manual deployment under integrated command)
  - Tighten up reinforcement restrictions (can't deploy units that can't actually deploy; can't double deploy units; can now only deploy fight lances or have to use a support point/VP)
  - VTOLs no longer start on the ground in certain situations, for real
  - Removed extraneous "recon turrets" modifier span for recon raid contracts
  - Tighten up strategic objective generation; correct objective coordinate display
  - Removed extraneous references to contract score in some scenario modifiers; water-naval units may rarely make an appearance
  - More robust transport loading code
  - Bot now has access to Arrow IV external ordnance, won't load 20 TAG pods on a single fighter.
  - Prevent double deployment of units and forces to individual scenarios
+ PR #2656: Cleaning up a few erroneous Campaign GUI properties
+ PR #2655: Ensuring BotForce has a Valid Base Camouflage
+ PR #2622: Camouflage: Deadborder Pack, Base Component Swapover
+ PR #2653: Expanding File/Refresh Capabilities
+ PR #2652: Personnel Table Expanded Randomization Functionality
+ Issue #2659: Hangar Report: Adding IndustrialMech Section and Missing Combat Vehicle Super Heavy Nodes
+ Issue #2642: StratCon Tab: Force Table Background Doesn't Work Properly in Nimbus
+ Issue #2610: Adding Tech Officer migration from the reference class
+ Issue #2534: Fixing Missing Clan Check For Endo Steel Location Repairs
+ Issue #2382: Large Vessel Clan Repair and Maintenance modifier no longer applies to Clan
+ PR #2667: Preventing NONE Primary Role Hiring
+ Issue #2485: Default Subcontract Name, Briefing Tab Mission Tracking
+ PR #2284: MHQ Options: Adding Colors Customizability
+ Issue #2491: Allow extra time for maintenance per StratOps/New CamOps repair/maintenance rules.
+ Issue #2661: Can no longer select the same unit across multiple selectors in StratCon scenario management UI.
+ Issue #2548: Making ROM Designation and Manei Domini Class and Rank part of the rank system data
+ Issue #2529: Fixing refit display so it no longer includes the pilot's BV
+ PR #2678: Adding Personnel Tab Grouping and Filter Tool Tips
+ PR #2540: Factions Data Customizability Expansion and Cleanup
+ PR #2677: Ignorable Nag Dialogs
+ Issues #2636 and #2658: AdvanceDaysDialog Rework: Advancement-based Modality, Expanded Buttons, Persistent Daily Report
+ PR #2634: AtB Enum (Morale, Contract Type, Lance Role) tooltips
+ PR #2691: ResolveScenarioWizardDialog Uses Standardized Entity Readout Dialog for Unit Views
+ Issues #2116 and #2589: Improving Rank and Title Sorting
+ PR #2694: Hangar Tab: Maintenance Color No Longer Shows with Maintenance Disabled
+ PR #2693: GM Tools Dialog Rewrite
+ PR #2422: Improve simple accessibility faults
+ Issue #2703: Defend against parts without campaigns after Refit
+ Issue #2687: Fix error refitting dropship transport bays
