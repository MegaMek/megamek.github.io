# New Development Release 0.49.3

Welcome to 0.49.2 this release is back to a mix of big fixes and some cool new features. 

But first a word from one of our sponsors; Are you tired of fighting super-strength meks, are those Tau Zombies getting you down, try the new fully functioning Anti-TSM spray available in SRM and LRM varieties. Available at fine weapons dealer near you. 

There are a lot of fixes, big additions, and subtle changes in this release. Please give the change logs a close look for everything. But some highlights: 

## Java 11 and the 0.49.x Releases.

We've have officially made the change to **Java 11**, meaning to use the
**0.49.x Development branch** you'll need to update.

Due to changes in downloading Java that Oracle has made, As Java is now open source, we are recommending players use [OpenJDK 11](https://adoptopenjdk.net/). We have a help page [for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and
[macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able to user your package manager to install OpenJDK from their repositories.


## MegaMek
We've added board tagging, Adds the "tag" key word for board files so boards can be tagged, e.g. tag "Forest (Auto)", tag "Roads (Auto)" , tag "I like this map" for more details on this feature see [HERE](https://github.com/MegaMek/megamek/pull/2955). We've modernized the princess configuration dialog and it has numerous improvements see [HERE](https://github.com/MegaMek/megamek/pull/3041) for details. We've also added additional unit label [display options](https://github.com/MegaMek/megamek/pull/3017).

Players now have option to provide their email address to the server (which is not shared with the other players). If the server has a local SMTP server configured, round reports can be emailed to players.

Hidden Units now default to on to reduce issues coming out of MekHQ. The RAT generator now includes space stations. We have added all the Rec Guides up to 18, and Deadborder continues to pump out updated and new sprites. Finally we think we've taught princess that crossing water with holes in your armor is bad.

## MegaMekLab
MegaMekLab has had a bugfix, but has otherwise been quiet as the dev focused on it is currently taking a break.


## MekHQ
The Advance Days Dialog is complete and replaces the old popout for the daily log while expanding its former functionality. It is designed to be left open if desired while handling ones day advancement needs.

![Advanced Days Dialog](https://i.imgur.com/quPVXOPl.png)


The Unit Market has been rewritten, and because of that is now available outside of Against the Bot based on one's Campaign Options.
![Unit Market Dialog](https://i.imgur.com/O58fxgJl.png)

 
However, these were both coded before 0.49.2. The focus for MekHQ over the past two months has been in bugfixes, bug prevention, and code improvement.

## Stratcon Alpha
StratCon has seen yet more bugfixes and balance changes, plus facility implementations, GM StratCon campaign state management options, customizabile chance of generating a user made map, and potential player DropShip use in DropShip defense scenarios.

If you aren't familar with Stratcon see [HERE](https://github.com/MegaMek/mekhq/pull/2144)

## SOCIAL MEDIA

We are also happy to announce we have an [Official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). It will function like our Slack but gives us better voice support for those who use the [official public servers](https://megamek.games).

Also a reminder to drop into the [Slack channel](https://bit.ly/2KSu5yQ) to meet other players and harass the Devs that drop in and out. If Slack isn't your thing check out these Discords with MegaMek channels - [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52).

We also have a player running a very popular Solaris VII campaign on our Discord and it's always looking for new players. You can join between cycles, which run on a regular basis.

Facebook - [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek)

## FOR MAC USERS

We think we now have a [workaround for macOS](https://megamek.org/wiki/mac_issues.html).

Another reminder when moving between versions:

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions.

## CHANGE LOGS (for this release only) AND DOWNLOAD LINKS

### MegaMek Release Notes

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.3)

+ PR #2955: Board Tagging
+ Issues #1628, #1857, #2181, #2264, #2290, #2390, #2944: Board Editor and Menu Enhancements and Fixes
+ Issue #2960: Fixing non-basic letters in the new camouflage setup
+ PR #2971: Fixing the Magistracy of Canopus Planetary Militia Force Generator Faction
+ PR #2987: Remove unwanted water terrain exits from boards
+ PR #2990, 2993: Fix errors discovered while play-testing on potato-grade computer:
	-prevent tooltip errors when mousing over non-unit spotting target	
	-prevent player camo color related force rendering error in lobby due to slow MekHQ-MegaMek data transfer
	-improved bot ability to avoid flying off-board on space maps in newtonian flight model
	-prevent ejected aerospace pilots from crashing the server when drifting off-board on space map
	-prevent attempts to use searchlights on non-existent buildings
	-"Nearest" destination zone is now respected properly by the bot
	-Fix several "stuttering"/"jumping" issues when moving around the map
+ Issue #2995: Critical Hits not being applied
+ PR #2998: Advanced Map Generator Panel: Fixing Woods Size Text
+ Issue #2988, 2989: Multiple fixes to errors encountered when using fighter squadrons
+ PR #3009: Fixing Princess Null Entity Packet state update
+ Issue #3002: Disallow torso-twisting and vehicle turret rotation during TAG phase per recent errata
+ PR #3010: StatusBarPhaseDisplay Code cleanup
+ PR #3011: Fixes for multiple game-freezing issues relating to counter-battery fire against previously destroyed units
+ PR #2968: Prevent TAG from attempting to designate targets for hostile incoming homing ordnance
+ PR #3023: Allow UUID Serialization
+ PR #3022: Preventing three Compute::getTargetTotalNP NPEs
+ PR #3021: Fixing Calculate LOS NPEs
+ Data: New Sprites, Camos
+ PR #3041: Princess config dialog improvements; much easier bot replacement upon loading a save game.
+ Issue #3407: Prevent server lockup when processing swarm attacks that select an infantry unit in a building as a secondary target
+ PR #3051: RAT Generator Editor no longer shuffles model entries around randomly; space stations have been added to RAT Generator
+ Issue #3031: Bot will no longer attempt to cross water in "long range pathfinding mode" when doing so would cause an armor breach
+ Issue #3052: Fix for server lockup when firing infantry-scale weapons off of small support vehicles; fixes for multiple errors processing non-existent passenger units.
+ Issue #3048: Hits on hull-down (non-superheavy) vehicles without turrets now land on proper location.
+ PR #3017: Additional unit label display options (toggled with the unit label display keybind) to show abbreviated and really abbreviated unit names.
+ PR #3050: Players now have option to provide their email address to the server (which is not shared with the other players). If the server has a local SMTP server configured, round reports can be emailed to players.
+ PR #3072: Hidden Units is now Enabled by default
+ Issue #3065: Prevent units from winding up with an illegal facing as a result of a fish tail, and in general.
+ Issue #3042: Properly Set Anti-Mek Skill For Battle Armour and Infantry
+ PR #3082: AbstractUnitSelectorDialog: Properly Catching NPEs and other MechFileParser Exceptions in getSelectedEntity
+ PR #2980: Do not use GUIPreferences from Board
+ Issue #2951: Update to-hit modifiers for weapon and physicals attacks against grounded dropships and other superheavy units.
+ Data: Updated Boards including MegaMek Invitational Boards
+ Issue #2918: Shaky Stick SPA now applies for airborne VTOLs and WIGEs.
+ Issue #3094: Double Blind: Fixing Unjam Turret Action Report
+ Unofficial Equipment Documentation
+ Data: Adding Rec Guides 15-18 includes Unit Roles, some Fluff, and canon quirks. New Camos and new sprites
+ Data: Fixing some weapon name types and a missing princess behaviour(Ambusher) and some sprite errors.

### MegaMekLab Release Notes

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.3)

+ Issue #898: Heavy-Duty Pile Driver and arm actuators

### MekHQ Release Notes

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.3)

+ Issue #2679: Correctly show and apply overtime mod to multi-day rolls
+ Issue #2709: Two Scenario Date NPEs
+ Issue #2685: Preventing NPE when loading scenario save games
+ Issue #2609: Show which parts are blocking repairs
+ Issue #2707: Preventing text wrap in the person title JTable usages
+ PR #2718: Fixing Bulk Refit Complete/Cancel
+ Issue #2717: Advance Days Dialog no longer based on modality
+ PR #2716, 2727: StratCon - player dropships will now be pulled into dropship defense scenarios;
	-more abstractly: capability to substitute player units for bot units in designated scenario force templates
	-prevent "regenerate bot forces" button from displaying when editing completed scenarios
	-allow contract completion for scenarios with remaining "fixed" objectives (useful for when the enemy morale goes to rout or you win a base of operations attack)
	-explicitly show that objectives in defensive contracts must be held until contract completion	
    -fix clicked hex detection on StratCon map when viewing anything other than top left corner when map doesn't fit on single screen (smaller resolutions/bigger maps)
    -added scroll pane to info panel in case it has more data than can be displayed (important on smaller resolutions)
    	do not un-deploy force from track if it's assigned to a scenario on the track until the scenario is resolved one way or another
+ Issue #251: Force Generator Unit Generation Empty Unit Table Parent Faction Fallback
+ Issue #2736: Fixing Alternative Faction Code Generation by using correct ArrayList type
+ PR #2744: Mass Mothball Dialog: Fixing IndexOutOfBoundsException with no techs for a unit type
+ PR #2745: Fixing Two AtB Scenario View Panel NPEs
+ PR #2725: StratCon campaign state management: GM Tool to add VP/SP; Ability to convert VP to SP manually; Ability to convert SP to bonus parts; GM mode viewing of current track's "scenario spawn odds".
+ PR #2751: Fixing Astech Divide By Zero Errors
+ PR #2756, 2802: StratCon
	- Fix incorrect bot configuration in pursuit scenario that would cause it to bee-line for the opposite edge
	- When objective scenarios move, they will take their objectives with them
	- Strategic objective display improvement - colorcoding and symbols to indicate in-progress/complete/failed.
	- Prevent phantom scenarios from showing up in TO&E deploy menu for both forces and individual units
	- Removing a force that's assigned to a StratCon track will no longer cause the strategic map to fail to render
+ Issue #1098: Fixing Repair Tab Tech Order Options
+ PR #2478: Markets Tab and AbstractUnitMarket
+ Issue #2558: Adding Custom Messages for Dependant Joining/Departing the Force
+ Issue #1767: Adding Campaign Messages when gaining SPAs/Edge and Personnel Log Options for gaining Skills/SPAs/Edge
+ Issue #2771: Fixing Missing Current Daily Log on AdvanceDaysDialog Creation
+ PR #2769: New StratCon feature - sometimes (with configurable frequency), the generated maps will be replaced by a similarly sized user-made fixed map instead.
+ PR #2775: Finances Tab: Price Multipliers Panel Cleanup and Expansion
+ PR #2760: Rank fixes and improvements from HB: Major Periphery States
+ PR #2796: AtB/StratCon: Preventing Hidden Units With Option Disabled
+ Issue #2790: Fixing Null Birthday
+ Issue #2779: Can now cancel a bulk part purchase
+ PR #2788: Stratcon Facility Implementations
+ Issue #2816: Fixing Two AtB Morale ArrayIndexOutOfBoundsExceptions that break on New Day
+ PR #2821: StratCon Scenario Generation New Day NPE Prevention
+ Issue #2786: CustomizePersonDialog Phenotype and Gender ComboBox bugfixes
+ Issue #2754: Properly clearing Hidden, Narc, and iNarc Flags during scenario resolution
+ PR #2828: Fixing AtB Lance Role Sorting and Improving Mission Name Sorting
+ Issue #1042: Fixing Client Button Setting and MegaMek Preferences Not Saving from MekHQ
+ Issue #2807: Removing EquipmentParts whose EquipmentTypes fail to parse