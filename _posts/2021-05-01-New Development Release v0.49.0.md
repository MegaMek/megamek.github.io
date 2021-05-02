# New Stable 0.49.0

Welcome to the 0.49.x Development cycle, this is the first release in that
cycle (0.49.0) and you'll see some massive changes in MegaMek and a whole new
way to play AtB in MekHQ. But before we get into some specifics on those we need
to address a couple of things.

## MegaMek and Java 11

We've have officially made the change to **Java 11**, meaning to use the
**0.49.x Development branch** you'll need to update.

Due to changes in downloading Java that Oracle has made, we are recommending
players use [OpenJDK 11](https://adoptopenjdk.net/). We have a help page
[for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and
[macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able
to user your package manager to install OpenJDK from their repositories.

Next this release changes a ton of things in MegaMek to accommodate the new
lobby. It has been tested but we anticipate there are bugs. But the features of
the new lobby make it worth the risk, it addressed 14 major requests for going
back years.

In MekHQ we've been teasing it for months and the Alpha is here.

[STRATCON!](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1719781/#msg1719781)

![Stratcon Preview Pic](/assets/images/screenshots/stratcon-1.png "StratCon Preview"){:class="img-fluid rounded"}

## MegaMek

Before I get to the lobby here are a few other things this release.

* IP address showing is now blocked by default in the lobby.
* You can refresh the unit cache in game.
* Offboard arty can disengage.
* Air launched Arrow IV's anyone?
* Irregular TRO units have been added.
* Testbot is largely retired and not available.
* Tons of data fixes, new sprites, and some new boards.

Princess has been doing obstacle courses at Blackjack and learning when to stand
or not stand after getting knocked down. We know she loves melee so one of her
instructors pointed out that when you don't have anything to do grabbing a club
can come in handy down the road.

Main Lobby Changes:

* Unifies the tooltip in the lobby and game (while still enabling different views, e.g. the pilot info can be omitted as is done in the lobby mek table) and moves the code out of Entity; the tooltip now shows a different symbol for capital armor. I've introduced many unicode symbols, these require the Java "Dialog" logic font, I hope they work on other systems besides Win10 as well.

* Adds a general GUI scaling float value (neutral value = 1) that is accessible in the Client Settings and, unless a modal dialog is up, with CTRL Numpad+ and CTRL Numpad- . This currently scales mainly the lobby and some dialogs in the lobby that have been revamped.
* Completely revamps the info in the lobby Mektable, obviously. I've tried using colors that are desaturated in the hope this will make the colors readable for everyone. Also, the main colors come from methods that return different colors based on whether the current UI theme is light or dark.
* Allows sorting the Mektable by various algorithms
* Generally shows more info directly in the table such as velocity, height, deployment, partial repairs, C3 info. I've tried to hide stuff that's unnecessary such as height in space and so on to make it all kinda useful
* The lobby now shows if a unit has a problem such as instant death upon deployment or an unconnected C3 computer; the tooltip gives details on the problem (unit cannot survive in vacuum)
* Makes the compact mode more useful; it now shows almost the same info as the full mode.
* Revamps the popup menu; it now allows some more unit settings such as C3 configuration and most operations work on multiple units
* Adds toggles to hide unofficial and legacy game options; also adds a Toggle Button that has a checkmark or cross as the normal Java toggle buttons don't show their status really well
* Adds searchlights automatically to all units in circumstances when they're needed
* Revamps the player config and planetary settings dialog
* Revamps the player table; it now allows multi-selection and direct setting of team and deployment via popup, also shows local bots with a symbol
* Makes some dialogs remember their size and position such as the Unit selector and force generator
* Adds Ctrl-S Quicksave and Ctrl-L Quickload. I think this is only useful for development. Ctrl-L works only from the main menu I think.
* The mektable generally remembers column sizes removes some buttons from the main interface (such as Delete All) and adds a confirm dialog to delete and various other things that shouldn't be insta-kill
* Minefields now actually require the TacOps minefields game option to be active
* Corrects conventional fighter weight classes, use the same as ASF (50t = medium)
* Corrects legal deployment with double blind
* Obviously revamps board selection to graphical drag-n-drop. It can deal with server-side boards (although in this case it can't actually display the real board, just an empty placeholder) and invalid boards.
* Instead of choosing a board at random, the surprise function will now choose a board from a list of boards that can be assigned by selecting the desired boards and dragging them to the preview.
* Board setups can now be saved. I've created some examples from the boards we have
* Adds a smaller mini-map zoom that I need for those huge maps and a better space mini-map with stars...
* Adds a team overview pane. The table can be detached to a window. It shows the summarized strength of the teams and when one team is selected in the table it shows the relative values (87% of ...)
* Adds ammo to the unit tooltips
* Adds forces to MM and a force tree view to the lobby. Forces currently have no in-game effect. * The game has a Forces object that controls the individual Force objects. The structure is similar to MekHQ's forces although I believe MekHQ has no owner field. Forces can be saved to MUL files and load from there correctly. However it only saves the full force every unit is in, not the forces themselves. When loading a MUL, the force structure is reconstructed from these individual force entries. Therefore, loading from a MUL will always create new forces, never integrate into existing ones. The forces from MekHQ can be transported to MM by using the String representation as Ive done in the MekHQ PR.
* Units in forces and sub forces can be moved up and down by CTRL-Up and CTRL-Down; no multi-selection.
* The mek table and force table allow CTRL-C to copy selected units (forces are ignored). It exports the unit, tonnage, pilot and a few values and pastes mostly well into Excel, although some units have secondary names that don't paste well such as "(3025)" which arrives as -3025 in Excel. Ive found no solution for this that also allows pasting into MM well.
* Obviously, the mektable and force table also allow CTRL-V. So it's easy to copy-paste units in MM.
* Also, makes the key binds overlay disappear in the map preview

## MegaMekLab

Only a few bug fixes in the lab. Things will likely be quite with the lab for a
bit, the dev focused on it is taking a break.

## MekHQ

We've already mentioned Stratcon. Rank Systems were also completely rewritten and
modernized. They are now implemented with full user data folder merge capability,
multiple custom rank system support, varied import/export capabilities, file
refresh, full validation, and expanded professions. Note that individual ranks
were not handled as part of this rework, just the systems and professions.

[Ranks Preview Pic](https://i.imgur.com/AX05snY.png)

The Personnel Options Tab was completely rewritten and reorganized, as the sheer
number of options was making it hard to use and tell the difference between areas.
Personnel Roles were also heavily modified, part of which was adding the LAM Pilot
and Dependent primary role. The latter of which will replace our current handling
of dependents (the swap over is done, but the old dependents and the flag do not
migrate until the next release).

Additionally, a suite of base components have been created and preferences have
been expanded. Keep a watch for the ability to cancel out of dialogs by pressing
escape, and having the selected tab remembered between uses, as examples of some of
the improvements originating with these standardization changes.

Some other stuff to look for is Improved Refit Tech sorting, Better GM Restore, new
force icon pieces, lots of backend work improving stability, and an almost complete
rework of custom ranks.

## SOCIAL MEDIA

We are also happy to announce we have an
[Official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). It will function like our
Slack but gives us better voice support for those who use the
[official public servers](https://megamek.games).

Also a reminder to drop into the [Slack channel](https://bit.ly/2KSu5yQ) to meet other
players and harass the Devs that drop in and out. If Slack isn't your thing check out
these Discords with MegaMek channels -
[Everything BattleTech](https://discord.gg/gyXMWjT) and
[Classic BattleTech](https://discord.gg/D9jFn52).

Facebook - [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and
[MegaMek](https://www.facebook.com/MegaMek)

## FOR MAC USERS

We think we now have a [workaround for macOS](https://megamek.org/wiki/mac_issues.html).

Another reminder when moving between versions:

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions.

## CHANGE LOGS (for this release only) AND DOWNLOAD LINKS

### MegaMek Release Notes

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.0)

* Issue #2614: Improved Building Validation
* Issue #2592: Random Army Creation Tech Level Max Index Comparison Issue
* Issue #2272: Fixing Alt-Click on Building and Mouse Wheel Over Building/Bridge/Fuel Tank Not Clearing Tile
* Issue #2362: Fixing XML Schema File Issues
* PR #2655: Accessibility command improvements
* Issue #2710: Shield DC and DA values
* PR #2714: Change source and target compatibility to Java 11
* Data: New maps, unit fixes including fix for #2707
* Issue #2597: Add thread safety to duplicate name hash
* Issue #2722: Do not send IP addresses in chat by default
* PR #2691: Base Components: Creating Base Components based on the previous MekHQ Preference setup
* PR #2724: "File>Unit List>Refresh Unit Cache" loads any changes in the unit files without having to restart
* PR #2730: Tooltips for target number calculations on the round report
* Issue #146: Disengage/Remove Unit Button for Offboard Artillery
* Issue #2722: Add a UI to enable/disable showing IPs in chat
* Issue #1131: Prevent units with bay weapon ammo from having that ammo disappear when customizing unit under some conditions
* PR #2737: Use correct target number for chain whip trip with active TSM
* Data: Unit date update. The MUL has update a lot of units with new dates this brings MM in line with them.
* Issue #2740: Update base target number for attacking with "picked up" club (tree/girder/arm/leg) to be piloting - 1, rather than piloting + 1
* Issue #2694: The bot will now consider not attempting to get up, or going to hull-down (where applicable) when odds of getting up are low
* PR #2742: Enable the bot to "find club", when it absolutely, positively has nothing better to do with the firing phase
* Issue #2747: Prevent protomech AC ammo from causing 8x the damage it should during ammo explosions
* PR #2558: Pre-designated auto-hit artillery hexes for on-board artillery option works with on-board artillery
* PR #2754: Making Princess the default bot for MM Scenarios and Fixing MM Scenario Bot Loading
* PR #2752: Offboard Artillery Target Not Found NPE
* PR #2570: Camouflage Improvements and Integrated Directory Refresh
* Issue #2755: Searchlights no longer have unlimited range
* Issue #2758, 2759: Infantry no longer able to leap up to flying VTOLs for swarm attacks; target movement modifier now applies to legal leg/swarm attacks.
* Issue #2767: Incorrect Citation for "(Unofficial) Specify the number of pre-designated artillery autohit hexes per map area
* Issue #547: Implement air-launched Arrow IV (homing and non-homing)
* PR #2773: Launch Fighters (bot version)
* Issue #1219: Adding Defensive Code for RATGenerator Era
* Issues #1785/#2138: Fixing and Improving Round Report Player Stats
* Issues #2787: Protomech AC gun and ammo are different tech levels
* PR #2786: Units set for a delayed assault drop no longer disappear on the first turn of the game.
* Issue #2438: Adding More Detail to Fire Damage Reporting
* Data: New Sprites, IrTech addition, numerous other data fixes. Fixes for #2696
* Issue #2794: Switching back and forth from TestBot in bot config dialog no longer causes an NPE because the TestBot option has been removed.
* Issue #2709: Equipment improperly tagged as fixed on recent omni designs
* Issues: Lobby Rewrite addressing #448, #765, #1996, #2277, #2306, #2322, #2327, #2340, #2374, #2384, #2385, #2428, #2560, #2657
* Issue #2133: MegaMek Scenario Additions (Planetary Conditions inclusion and Dialog skips)
* PR #2797: Re-enable doubleclicking in the IconChooser
* PR #2802: Weapon Attack Action Class Cast Exception Fix
* Issue #2281: Creating a standard BV Display Dialog
* PR #2803: Fixing a few Reports that are Missing Subjects
* Issue #2801 Omnimech Pods Incorrect Labels
* Data: Adding Mech write ups to selected units.
* New Sprites and Issue #2798 Wolfhounds Missing Full-Head Ejection Systems
* Data: Issue #2774 - Kaji Maps Update.
* Data: Updated 1st SW RATs, and some general unit data fixes.

### MegaMekLab Release Notes

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.0)

* PR #859: Allow MML config to be loaded in memory only
* PR #892: Account for missing actuators in shield pips
* PR #894: Change source and target compatibility to Java 11
* Issue #638: Industrial Mechs should be able to use Torso Mounted Cockpits.

### MekHQ Release Notes

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.0)

* Issue #338 Parts 1 and 2: Improved Refit Technician Selection Sort
* Issue #2418: Ensure context menu shortcut works on our tables
* PR #2361: Use MML's CConfig.load instead of new CConfig()
* Issue #2415: Implementing Unit Weapon SPA Generation and Fixing Tech Level Comparisons
* PR #2260: Implementing Save and Quit in the MekHQ exit option pane
* Issue #2446: Calculate the scrollable block increment correctly
* Issue #2452: Ensure a Lance's Force assignment is still valid
* Data: New Graphical Force Icon Type Pieces
* PR #2379: Repair Bay: Adding part name to the report when GM repairing
* PR #2337: Shopping List No Longer Writes to XML While Empty
* Issue #2459: Only calculate weight if EquipmentPart has a type
* PR #2465: Change source and target compatibility to Java 11
* PR #2151: Improving Mission and Scenario Status Processing
* PR #2440: Base Components: Creation and Expanding Preferences
* Issue #2458: MRMS Astech Requirement Checks
* PR #2473: Better GM unit restore
* PR #2475: Use the correct resource string for free C3i Nodes on TOE
* Issue #2456: Incorrect Financial Export Date, Two Force Icon NPEs, Unit Market NPE
* Issue #2469: Fixing Award Log Edit NPEs
* Issue MegaMek/megamek#2597: Use MM's new UnitNameTracker for name collisions
* Issue #338: Base Refit Tech Selection Free Time Sort
* PR #2468: Bulk Procurement Table Selection and GM-less Clear
* Issue #3288: GM Tool Name Generation Expansion - Bulk Generation, Manual Editing
* Issue #1936: AbstractIcon: Full Camouflage Implementation - Adding Force Camouflage
* Issue #2489: Improving Award XML Load Null Proofing
* PR #2356: Improving Genealogy Null Protections
* PR #2417: Personnel Options Tab Rework
* PR #2494: Base Components: Sorted Combo Box Model
* PR #2331: Add MekLocation tests and fix location repair nits
* PR #2532: ProtoMech Bay Rating
* PR #2144: StratCon - Alpha
* Issue #2487: When a garrison-type contract comes back from a "rout" break, you may find yourself facing different opposition
* Issue #2460: Improving Default AtBContract Name and Briefing Tab Sort
* PR #2352: Personnel Role Enum
* PR #2545: Allow aerospace fighters with only 10 heat sinks to repair damaged heat sinks
* Issue #2553: Fixing FactionComboBox NPE with null input code
* Issue #2553: Fixing preferences issue in the Personnel Market
* Issues #1483, #2196, #2201, #2202, #2205, #2449: Rank System and Profession Rework
* Issue #271: ScenarioStatus Enum: Expanded Scenario Status Options
* PR #2479: Fixing Escorpión Imperio starting planet
