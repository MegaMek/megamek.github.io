### Welcome all to 0.49.13!

This release marks a significant milestone for MegaMek as we finish the second year of 0.49.x development. It features numerous fixes and quality-of-life improvements. The breadth of exciting additions is extensive, making it challenging to decide where to begin. We recommend reviewing the complete list to see all changes. However, we'll highlight a few noteworthy ones for now. It's important to note that this release, being the 13th in the cycle, may still contain a few new bugs due to all the awesome new stuff.

Here we go...

+ [Client settings had a massive overhaul](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1928052/#msg1928052)
+ [Major improvements to how min/max visual and sensor ranges are display in game](https://github.com/MegaMek/megamek/pull/4430)
+ [Improvements to the Detail Unit Counts in the Initiative Phase](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1931189/#msg1931189)
+ [Allow sprites on reports in Double Blind](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1932258/#msg1932258)
+ [Major improvements to the Create Random army menus](https://github.com/MegaMek/megamek/pull/4228)
+ Expanded the Display FOV Darken/Highlight and Field of Fire to all non-report phases, it also shows the optional weapon Field of Fire during the deployment phase
+ [Weapons Quirks now show in the unit selector](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1928818/#msg1928818)
+ Improvements in showing multiple units in the same hex
+ Princess and her off board artillery can no longer hide in double blind! Counter-battery fire to off board targets now works in double blind.
+ BattleArmor with Indirect fire weapons can well... fire indirectly now. Conventional Infantry is trickier and not implemented.
+ Numerous fixes to Alphas Strike Conversion

We have a few of **VERY** important things to be aware of in this release especially around the units.

1. Anti-aliasing is now an option and if you’re having graphic slow downs or “chugging on the map” trying to change the option in client settings.
2. We have made changes to the unit files to align them with the MUL by removing the term "(Standard)". This was a significant data task and resulted in the removal of nearly 1000 instances of "(Standard)". Our Quality Assurance (QA) team has thoroughly tested these name changes by creating campaigns and loading them with every unit. However, there is a potential risk in MekHQ with CPNX files, as they rely on unit names for matching. If you encounter any errors while loading your campaign file, we apologize for the inconvenience and kindly refer to the [following post](https://github.com/MegaMek/megamek/wiki/Name-Issues-with-Units) for further assistance.
3. Lastly we’ve ripped the unofficial unit band aid off. We've moved the unofficial units zip out of this release. The reasons and poll for this was [discussed here](https://bg.battletech.com/forums/megamek-games/how-often-do-you-use-the-units-from-the-unsupported-or-unofficial-folders/). Between our Discord and this poll 75% of players were good with us removing them. It allows us to have the releases be focused on canon units.

The file is still available but players will need to add the zip file manually. We have no plans to further support or add units into that zip. It would be safe to just set it up in a customs folder and move that folder between releases.

To add the units back:

1. Download the zip file from the [MegaMek Extras](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
2. You need to right click and use the "Save link as"
3. Save this as a zip to the `data\mechfiles` folder of the program. - As a suggestion save this to a customs folder in the `data\mechfiles`
4. On restart they will be added.

We continue to find small improvements in stability over 49.12 but we still aren't 100% where we want to be. We know from experience that when we say this players generally stay away. But you can run both a stable release (0.48.0 or good dev release 0.49.12) you just need to keep them in separate folders. We need players to use Dev releases.

Remember that MekHQ campaign files **aren't** backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

#### MegaMek

See the notes above and below for specific things.

#### MegaMekLab

A big option to the unofficial record sheets, On record sheets, hit location and cluster tables can now be printed in place of the fluff image; activate this option in the record sheet settings. You can see an [example here](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1922237/#msg1922237).

Remember to check the FILE-Configuration for all sorts of options for Record Sheets.

#### MekHQ

There isn't a lot of MekHQ outside of some fixes, but we do have StratCon fixes.

#### MekHQ StratCon Alpha

StratCon is starting to get a little more work and bug fixes (see below). Nickargua the dev is looking for help and see here for [how to help](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1935360/#msg1935360). It sounds complicated but it's quite easy to make the files he's looking for.

#### Stable 0.50.0 Status Update

We are still in the development portion of the current cycle. We've been able to implement a new version of Gradle (our build language) starting with the 0.49.11 release. As well as adding support for Java 17. This is still undergoing testing and we encourage players to use the programs with Java 17 but Java 11 remains our recommended choice for the .49.x Dev cycle. We are still working on the connection stability issues.

We've found the primary cause of these disconnects is the use the Unofficial "Simultaneous" options. These options create a host of issues and while they worked in 0.48.0 Stable the changes in this Dev Branch have made them problematic. As a fair warning we are considering removing them when we get to 0.50.0 Stable. These are the options we are referring too.

![Sim Options](https://i.imgur.com/GCpqZdo.png){:.img-fluid}

We are getting to a point where we are starting to talk about 0.50.0 Stable but we still have some significant things we need to complete and don't anticipate a new Stable anytime soon. At this point we have some really good solid development releases and for security alone I'd recommend upgrading to Java 11 from Java 8.

Once that is done [we'd recommend trying a dev release like 0.49.12.](https://megamek.org/2023/03/04/New-Development-Release-v0.49.12.html)  With a milestone of 0.50.0 we need to make sure we get it right.

#### Java 11 and Java 17

We've updated to Java 11, which means you'll need to update to use the **0.49.x development branches**. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11) We have a help page [for Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) and [Mac](https://megamek.org/wiki/mac_issues.html]). Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

This release implements support for Java 17. We need to stress this has had some testing and needs more players to use the programs with Java 17. But Java 11 remains our recommended version.

#### Social Media

We are also happy to announce we have an [official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). This is now our primary community location for the suite, providing superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games).  There are also the following community Discords with regular MegaMek channels, namely [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). We are also on Facebook, at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek) for our group and page respectively.

#### Mac Users

[Please](https://megamek.org/wiki/mac_issues.html) check out this workaround for Mac Operating Systems.

#### Contributing

[Please](https://megamek.org/wiki/I-want-to-help) check out this document for contributing to the suite. Deadborder has us covered from land unit sprites and camos. But we desperately need sprites for aerospace units.

#### Updating Your Campaign

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions, never backwards.
3. Do not copy MegaMek saves nor any preference file from a different version.

#### Change Logs (Release Specific) and Download Links

##### MegaMek Change Log

[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.13)

+ Fix #3914: LAM fuel tanks will now correctly provide fuel to the LAM
+ Fix #3951: Solar engine powered fixed wing support vehicles are now able to move and don't require fuel
+ Fix #3696: Altitude values no longer inadvertently influence space combat
+ Fix #4229, #4249, #4278, #4415: Alpha Strike conversion and card fixes
+ Fix #4234: The mini round report now allows marking and copying text
+ Fix #4235: A player without a team no longer results in an error
+ Fix #4238: Erroneous jungle hexes in Fan Pack Arctic boards have been replaced with woods
+ Fix #3915: In space with StratOps ECM rules active, a LAM's ECM systems now use the correct range of 0 (its own hex) instead of 6
+ Data: Updates to Flynn map pack
+ Data: Updates to Spanish translation.
+ Data: Updates to German translation.
+ PR #4213: BA mortar weapons can now use indirect fire
+ PR #4251: The lobby now indicates that a unit is shut down
+ Fix #4246: Improve rendering of horizontal scroll bar
+ PR #4254: Clan weapons get explicitly called out in firing phase reports
+ Fix #3968: Hexes with multiple units now give better information in the unit labels
+ Fix #3703: Uncompressed save games can now be loaded
+ Fix #4117: Unit card and minimap can now be focused when clicked
+ Fix #4261: Prevent aerospace units from having an out-of-bounds bomb count
+ Fix #2102, #3896: Weapon-delivered smoke will now not move in the round it is created and not count this round towards dispersion;
                    it will also disperse regardless of game options
+ PR #4269: Anti-aliasing has been removed as a gui option; high quality rendering will always be used
+ Fix #2220: Units now dismount to adjacent hexes from SV
+ Fix #4203: QoL updates to the Create Random Army tabs
+ PR #4228: Various updates to the advanced search: patchwork armor, AS unit roles, additional unit type and unit survival filters
+ PR #4268: Princess will now attack even DropShips when set to very high aggression values
+ PR #4280: Adds two new "v2" Princess Presets for the new aggression values
+ Fix #4267: Ejected Crew now remember their initiative
+ PR #4276: The key binds can now be reset to their default values in the client settings
+ PR #4281: For VTOL vehicles, elevation is now saved to and loaded from MULs
+ PR #4289: A pure text stats summary of Alpha Strike elements can now be copied to the Clipboard
+ PR #4282: Symbols on the minimap can now be hidden; the minimap also now has a context menu
+ PR #4284, #4296, #4313: Substantial updates to the client settings dialog
+ PR #4295: System/java/MegaMek information can now be copied in the About dialog
+ Fix #4293: Off-board entities are now properly visible to players
+ PR #4292: The -quick command line flag can now be combined with other flags
+ PR #4290: The lobby chat window now shows a text placeholder when empty to improve its visibility
+ Fix #4302: The wind direction shown in the Planetary Conditions is now correct
+ PR #4294: MegaMek now has random and constant skill generation values for The Society (WoRS)
+ PR #4319: The unit tooltip now shows original armor and internal structure values
+ PR #4310: Show a chat message when changing settings
+ Fix #4334: Correctly display heat capacity on unit tool tip to match unit card when TO Heat-sink Coolant Failure is used
+ Fix #4221: Flares now correctly de-spawn when blown off the map
+ Fix #2333: Show Weapon Quirks in various tool tips
+ Fix MML 881: Problem with PPC Capacitors in Mixed Tech Mechs and Vehicles (adding missing PPCs)
+ Issue #2972: Add team BV totals to round report
+ PR #4348: Add weapon location to tooltips if appropriate client setting is on
+ Issue #2569: Ability to change certain color palettes in client settings to improve accessibility
+ Issue #4291: Prevent unintended discovery of opponent hidden units if both player and opponent have them
+ PR #4318: Added expandable detailed info to target selection dropdowns
+ PR #4368: The random map generator can now generate Snow features
+ PR #4360: Low Quality Graphics options to address lag in game
+ Issue #3813: Implement repeating TSEMPs
+ Issue #4370: Remove unnecessary log bloat for altitude checks in space
+ PR #4405: Prevent error displaying hex tooltip in various situations
+ Fix #1227: Variable Size critical slots on Superheavy Meks from MTF files now load correctly
+ Issue #4314: BA Micro Grenade Launchers can now correctly attack targets up to 2 hexes away and show these ranges in the unit display
+ Issue #4392: The random map generator now respects the full range of allowed terrain features and may create a feature when between 0 and 1 are allowed
+ Issue #4345: The bot readme will no longer appear anytime a bot is created and respects the nag dialog setting. Those can be reset with a new menu item
+ Issue #2981: Entity images now show on reports when using double blind
+ PR #4362: The round report now gives detailed unit counts
+ Fix #4386: Indirect-fire ballistic weapons no longer apply modifiers for planetary conditions
+ PR #4379: The overheat from weapon fire shown in the unit display now shows the correct heat capacity values when heat capacity is modified
+ PR #4288: The in-game Done button has been reworked to prevent accidental no-actions without constantly having to add a click in the nag window
+ PR #4412: Remove "(Standard)" as model to follow the MUL. The MUL has removed the (Standard) and we will continue our practice of matching the MUL as closely as possible
+ Fix #4327, #4400: Field of Fire and FOV Darken/Highlight may now be used in more phases of the game
+ PR #4414: The wreck tooltip now shows crew info if they did not eject
+ Data: iATM ammo should use ATM availability codes for standard (ER,HE,Standard) ammos
+ Fix #4406: Fix an issue with Forces not working correctly when using double blind
+ PR #4388: Chaff Pods (ECM and smoke) are now functional in the game
+ Issue #4416: Entities destroyed by environmental conditions are marked as destroyed
+ Issue #4411: Corrected display of cruise missile damage values
+ Issue #4835: Allow repeating TSEMP on aerospace units
+ Fix #4283: Custom Weapon Orders can now be saved again
+ Issue #4262: Game year selection no longer limit units
+ Issue #4422: Issue with escape key reset when jumping
+ PR #4438: Split light visible range and other visible range calculations
+ Fix #4432: Issue with seen by client setting unit tool tip index mismatch
+ Fix #4446: Show teams before players on BV count report section
+ Data: Fixing #4223, #4206, #4371, #4398, #4377, #4272, #4257, #4244 ,#4312
+ PR #4430: Highlight min/max visual and sensor ranges
+ PR #4450: When TacOps sensors is not on, don't show sensor rings
+ PR #4451: When TacOps sensors is not on, show visual range in tool tip

##### MegaMekLab Change Log

[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.13)

+ PR #1241: On record sheets, hit location and cluster tables can now be printed in place of the fluff image; activate this option in the record sheet settings
+ Issue #1247: BA pop-up mines now show up under "other equipment"
+ Issue #1238: Battle Armor tube artillery now only allowed on battle armor

##### MekHQ Change Log

[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.13)

+ Data: updates to the StratCon FAQ now version 2.3 in docs\atb folder.
+ PR #3618: Campaign Options: Properly Disable Retirement and Dependent Options On Preset Load
+ PR #3619: Campaign Options: Properly Disable Contract Market Pane based on AtB Selection
+ Issue #3634: Re-enable Mass Mothball dialog
+ Issue #3654: Engines can be swapped again in MekLab
+ Issue #3652/3629: Addressed errors loading campaigns with pending special AtB scenarios
+ Data: Improvements to FedCom Civil War Planetary Control
+ Issue #3502: Campaign Options: Improve Maximum Acquisition Per Day Text and Tool Tip Text
+ PR #3662: Update refit classes based on CamOps
+ Issue #3632: [StratCon] Text clarification regarding airborne dropship modifier
+ PR #3663: Properly classify CASE refits
+ Issue #3600: [StratCon] Regenerating bot forces no longer duplicates displayed scenario objectives
+ PR #3665: StratCon Hidden Facility Modifier Fix

Enjoy everyone!
