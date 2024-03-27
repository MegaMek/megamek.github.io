# Welcome all to 0.49.14

This release is a one of the largest releases for fixes and new features that we've done in quite a while. There are numerous bug fixes in all three programs, data wise we've added a few more units, few new sprites and updates and new boards. But the exciting stuff is a huge new Stratcon Feature, and lots of QOL stuff in MegaMek. Plus it can print Record Sheets again.  cheesy

## MegaMek

+ Make sure to click the link in some of the list for more specific information, also the full release notes are below. Here we go...
+ [Expanded unit data in the end report](https://github.com/MegaMek/megamek/pull/4454)
+ Improvements to Battle Value calculation and reports, adding missing reports and numerous fixes to calculations from errata, skills, bomb usage, and force bonuses
+ [The Weapons Panel of the Unit Display now shows considerably more info about the target](https://github.com/MegaMek/megamek/pull/4423)
![Weapons Panel](http://i.imgur.com/MMAJYbxl.png){:.img-fluid}
+ [Details of the current turn such as the planned movement or planned firing can now be shown as a list of actions in an overlay](https://github.com/MegaMek/megamek/pull/4513)
+ [We've improved the GUI for the Unit Selector with better formatting](https://github.com/MegaMek/megamek/pull/4549)
![Unit Selector](http://i.imgur.com/klGNnhLl.png){:.img-fluid}
+ We have a fix for the extreme lag players encountered when a Windows OS scaling other than 100% was combined with MM's HQ rendering. We are still getting some reports of lag between phases and investigating those.
+ Fixes for Alpha Strike Conversion updates
+ We have a fix for the extreme lag players encountered when a Windows OS scaling other than 100% was combined with MM's HQ rendering. We are still getting some reports of lag between phases and investigating those.
+ We have improvements to the mini-map, you can use it again in the board editor and improved it's performance
+ Improvements to unit validation to capture more invalid designs.
+ [Improvements to the save games on dedicated servers](https://github.com/MegaMek/megamek/pull/4621)
+ The random map generator now supports ultra-heavy terrain (woods, rubble, rough), jungles and tundra
+ [We know everyone LOVE's (sarcasm) command line stuff so we've improved the Replace Player Dialog and you can now edit existing bot configurations](https://github.com/MegaMek/megamek/pull/4605)
+ ![Unit Selector](http://i.imgur.com/eIVn9r9l.png){:.img-fluid}

+ Ever run a campaign as a GM, tired of players abusing your NPC techs? Well guess what techs (GM's) can strike back!  [Nothing like a lose panel on a fusion reactor to heat things]( https://github.com/MegaMek/megamek/pull/4576)
"The nature of sabotage almost requires the existence of a traitor - Intelligence Secretary Justin Xiang Allard"

### Lets talk about Simultaneous (Sim) stuff

Last release we created a bit of a storm with the comments around Sim Phases and their future. Guess what...we think we have a fix for them.

But we want to be specific about a few things. If this fix works then the only one **_likely_** on the chopping block is Sim Movement. It's not coded well and doesn't follow TT rules used in Double Blind. So lets say this another way.....Sim Deployment, Sim Targeting, Sim Firing, and Sim Physical will **_likely_** stay. Notice a key word in the last few sentences **_"likely"_** as defined by Merriam-Webster _"having a high probability of occurring or being true : very probable"._

What we would like players to do is test the fix in this release. Go back to using Sim Phases (try to avoid Sim Move). We are looking specifically for instances where a [u]player gets there turned skipped[/u]. If you want to help with this make sure to turn on "Paranoid Autosave" we'd need save games to continue to track down the issue.

## MegaMekLab

Lots of fixes, and improvements to reporting BV and Alpha Conversion reports. We also fixed our packing opps in 49.13 and we can print Record Sheets again.

We are aware of an intermittent issue (won't run) with the _**stand alone**_ MegaMekLab release and Linux. If you have issues please use the full MekHQ release to get a working MegaMekLab.

## MekHQ
Has had some bug fixes, but the one...and for one of the coolest (in our opinion) features for Stratcon.

### Stratcon Advanced Terrain Update

Tired of looking at the same gray hexes and square boxes while tactical battles take place only on generic grasslands terrain? With this update, that will be a thing of the past.
![Unit Selector](http://i.imgur.com/xVLeTFKl.png){:.img-fluid}

A note on features:

+ Each track now has an average temperature that is transferred to MegaMek.
+ The track's temperature determines which biomes may appear on the track.
+ Each hex has its own biome which determines what tactical maps appear in MegaMek.[/li]
+ The random map generator has been upgraded with a lot of new terrain possibilities. Fight in deep jungles, frozen wastelands or obnoxiously short foliage forests.
+ [Awesome biome and facility graphics thanks to Florian "SpOoKy777" Mellies.](https://www.sarna.net/wiki/Florian_Mellies)

_**This part is critically important!!! You must finish up your current contract/mission before updating versions.**_

**A few reminders of things.**

1. We have made changes to the unit files to align them with the MUL by removing the term "(Standard)". This was a significant data task and resulted in the removal of nearly 1000 instances of "(Standard)". Our Quality Assurance (QA) team has thoroughly tested these name changes by creating campaigns and loading them with every unit. However, there is a potential risk in MekHQ with CPNX files, as they rely on unit names for matching. If you encounter any errors while loading your campaign file, we apologize for the inconvenience and kindly refer to the [following post](https://github.com/MegaMek/megamek/wiki/Name-Issues-with-Units) for further assistance.

2. Lastly we’ve ripped the unofficial unit band aid off. We've moved the unofficial units zip out of this release. The reasons and poll for this was [discussed here](https://bg.battletech.com/forums/megamek-games/how-often-do-you-use-the-units-from-the-unsupported-or-unofficial-folders/). Between our Discord and this poll 75% of players were good with us removing them. It allows us to have the releases be focused on canon units.

The file is still available but players will need to add the zip file manually. We have no plans to further support or add units into that zip. It would be safe to just set it up in a customs folder and move that folder between releases.

To add the units back:

1. Download the zip file from the [MegaMek Extras](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
2. You need to right click and use the "Save link as"
3. Save this as a zip to the data\mechfiles folder of the program.
     -As a suggestion save this to a customs folder in the data\mechfiles
4. On restart they will be added.

Remember that MekHQ campaign files **aren't** backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

See the notes above and below for specific things.

### MekHQ StratCon Alpha

See the big news above!!

## Stable 0.50.0 Status Update

We are still in the development portion of the current cycle. We've been able to implement a new version of Gradle (our build language) starting with the 0.49.11 release. As well as adding support for Java 17. This is still undergoing testing and we encourage players to use the programs with Java 17 but Java 11 remains our recommended choice for the .49.x Dev cycle. We are still working on the connection stability issues and are hopeful this release is the first step on the road to a fix.

We are getting to a point where we are starting to talk about 0.50.0 Stable but we still have some significant things we need to complete and don't anticipate a new Stable anytime soon. At this point we have some really good solid development releases and for security alone I'd recommend upgrading to Java 11 from Java 8.

## Java 11 and Java 17

We've updated to Java 11, which means you'll need to update to use the [b]0.49.x development branches[/b]. As Java is now open source, we recommend [url=https://adoptium.net/index.html?variant=openjdk11]Adoptium Temurin 11[/url]. We have a help page [url=https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium]for Windows[/url] and [url=https://megamek.org/wiki/mac_issues.html]Mac[/url]. Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

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

[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.14)

+ Fix #4452: Fixes a bug with detecting if Infantry dies due to extreme temperatures
+ Fix #4245: At victory in a double-blind game, a full unfiltered report is now available
+ PR #4458: When clicking on report hyperlink, center board on entity if possible
+ Fix #4460: Prevent blank lobby after adding custom units in multi-player games
+ PR #4454: End-round report shows visible active unit data (as displayed in tooltip)
+ Fix #4473: Realign phase done buttons
+ Fix #4471: Don't filter patchwork it causes the index to get out of sync
+ Fix #4467: Add client setting for Max Range to Draw Sensor / Visual Rings
+ PR #4468: Limit the width of the unit tooltip so that it does not grow really wide
+ Fix #4481: Incorrect availability ratings for Clan electronic warfare equipment
+ PR #4482: Minimap updates
+ Fix #4449: Delete PilotToolTip cache on client start and when portrait is set
+ Fix #4479: In fire phases, solo torso twist no longer triggers Done button enabling; corrected Done button handling during movement
+ Fix #4480, #3494: Selecting BA Anti-Personnel weapons during the firing phase no longer results in an error
+ PR #4474: Improvements to Battle Value calculation and reports
+ PR #4502: Map generator parameter dialog now loads theme from preset; various bugfixes to map generator parameter dialog
+ Fix #4462: Fixed the extreme lag players encountered when a Windows OS scaling other than 100% was combined with MM's HQ rendering
+ PR #4423: The WeaponsPanel of the Unit Display now shows considerably more info about the target
+ PR #4509: Stand-alone MegaMek now also contains pilot portraits
+ PR #4516: Additional icons, among them a large icon for grounded Buccaneer DropShips
+ PR #4514: The random map generator now supports ultra-heavy terrain (woods, rubble, rough), jungles and tundra
+ PR #4533: Displaying the visual/sensor ranges now has a key-bind configuration field in the client settings
+ Fix #4523: Fixes an error with the unit status report (picked up pilots are now excluded from the report)
+ PR #4517: The BT Universe's Eras are now loaded from a definition XML file. The eras are moddable
+ PR #4513: Details of the current turn such as the planned movement or planned firing can now be shown as a list of actions in an overlay
+ Fix #894: TO fatigue is now calculated from the better of Gunnery/Anti-Mek for Infantry
+ PR #4539: Picked-up pilots are now shown on the unit tooltip in pilot info
+ PR #4532, #4536: BV Calculation updates for MG Arrays and Manei Domini options
+ Fix #206: The allowed weapons for the Sandblaster and Weapon Specialist SPAs have been corrected; some are available depending on game options; Weapon choices are now shown in the pilot tooltip
+ PR #4549, #4551: GUI improvements to the Unit Selector
+ Fix #4305: Environmental Specialist SPA is now properly reducing penalties from high wind
+ PR #4567: The unofficial sensor geek modifier is now applied to sensor ranges displayed on the map
+ PR #4565: Sensor info and sensor range are no longer erroneously shown in the combination of a ground map with TO Sensor Rules off and SO Advanced Sensors on
+ Fix #4548: Fix soft-lock after physical attack round report
+ PR #4573: The text export for the unit summary no longer contains HTML tags
+ Fix MML-#1256: The Flotation Hull chassis mod is now allowed for WiGE vehicles
+ PR #4587: BA Cargo Lifter Manipulators can now have different sizes (different carrying capacities)
+ Fix #4598: Load from MUL in lounge now sets unit's deployment round to 0 by default
+ Fix #4574: Mortar turret ammo selection dropdown is empty
+ Fix #4543, 4547: Auto-success/fail message in to-hit display; set scroll to top when selecting new target for reduced annoyance
+ PR #4609: There is now a client setting to hide the unit tooltips in the game reports
+ PR #4607, #4654: Alpha Strike Conversion updates
+ PR #4610: Implemented Gas Hog quirk (only relevant for aerospace units at the moment)
+ Issue #4527: Allow indirect LRM launches from nose cones of grounded spheroid dropships
+ Issue #4614: unit display tab strip background respects theme
+ Issue #4553: off-board artillery Disengage causes uncaught null-pointer exception
+ PR #4632, #4630, #4627, #4626, #4660: Tests for flagging units as invalid have been expanded (Nova CEWS, internal structure slots, modular armor, industrial equipment)
+ PR #4622: Fluff images for some unit types are now loaded from the right directories
+ Fix #4618: Improved and unified save game path resolution and error reporting for -dedicated and -host starts; should now find save games without path
+ Fix #4540: Field of fire and sensors rings now display during indirect attack declaration (-> TAG)
+ PR #4576: Game Master mode can now edit units during a game
+ Fix #4591: Grounded SmallCraft now receive a -2 attack bonus instead of a +2 malus that only applies to fighters
+ PR #4637: There is now an indicator in the player table showing the GM player
+ Fix #4599: The Alpha Strike stats table that can be accessed from the lobby is now sortable; sorting also applies to printing AS cards
+ Fix #4582: Infantry (over) stacking in building hex
+ Fix #4439, #4638: Indirect mortar attacks without spotter and indirect semi-guided + tag attacks now ignore all terrain modifiers including those of the target hex
+ PR #4605: The Replace Player Dialog can now edit existing bot configurations
+ Fix #3654: Infantry/BA damage messages no longer accumulate
+ Fix #4641: In the lobby, setting the game master no longer requires a vote
+ Fix #4645: Display the correct conversion mode text for LAMs
+ Fix #4656: Game board key binds (wasd) now also work in the report phases
+ Fix #4653: Moving from prone to hull down now allows a free facing change the same way moving from prone to standing does
+ PR #4674: Fix potential race condition in Game::turnVector
+ Fix #4606: Half-roll maneuver allows illegal facing change for aerospace fighter
+ Fix #4652: VTOL Jet Boosters Not Applying +3 Modifier To Piloting Rolls

### MegaMekLab Change Log

[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.14)

+ PR #1267: Adaptations to MM's #4474 (BV calculation and reports update)
+ Fix #1250: The maximum turns at thrust display for Conventional Fighters now shows correct values
+ Fix #1262, #1258, #1245: Physical attack modifiers and damage values in reference tables have been corrected
+ Fix #1275: Large weapon critical slots can no longer be split into a Mek's legs
+ Fix #1273: Record Sheets now show Coolant Pods in the inventory
+ Fix #1212: Record Sheets now show appropriate heat MP penalties when inch or cm movement units are selected
+ Fix #1256: The Flotation Hull chassis mod is now allowed for WiGE vehicles
+ Fix #488: Dumpers calculate weight properly based on linked cargo
+ Fix #1216: In the equipment database view, all ammo including that of weapons not present on the unit can now be shown
+ PR #1282: The critical slot view for fighter units has now reduced input lag and popup menus will work more reliably
+ Fix #1155: Reinforced Structure no longer uses a crit slot when loading a unit
+ Fix #1199: Prevented ProtoMek access to some weapons forbidden to them by the rules
+ PR #1286: The equipment database filter that hides prototype equipment now also hides "other" equipment such as Prototype CASE
+ Fix #1265, #1173: Several BattleArmor validity tests have been added
+ Fix #275: BattleArmor Detachable Weapon Packs can now be found in the equipment list more easily but will register as invalid when the unit doesn't have sufficient MP
+ Fix #1252: Mek partial wings can no longer be pod-mounted; the combination of partial wings and Mek mechanical jump boosters is now marked as invalid
+ Fix #1290: The Alpha Strike conversion report can now be accessed from the unit preview

### MekHQ Change Log

[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.14)

+ PR #3676: Gradle build fixes
+ Issue #3682: Prevent NPE when changing bot config
+ Issue #3683 - fix issue preventing loading saved campaigns containing MASC
+ Issue #3621 - prevent NPE completing ship search immediately after loading campaign
+ PR #3692: Adaptations to MM's #4474 (BV calculation and reports update)
+ Issue #3402, #3715: Only hostile units are now displayed on the killboard during scenario resolution, Stratcon fixes
+ PR #3694: New StratCon feature - tracks now have individual terrain hexes (with graphics) and average temperatures;
    the terrain influences the map presets used for tactical battles; temperature is passed to megamek (may be hot!)
+ PR #3724: "Clan Personnel" special flag now correctly sets the person's clan status
+ PR #3731: Fix nightly build from a missed method rename in MegaMek.
+ Issue #3713: allied turrets have upgraded network security; defeat in evacuation scenarios results in facility capture instead of destruction

Enjoy everyone!
