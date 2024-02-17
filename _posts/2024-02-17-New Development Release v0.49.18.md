**Welcome All to 0.49.18!**

This release is MASSIVE. We've managed to push a ton of code in the last six weeks. We have a big mix of new stuff, bug fixes and general improvements. Being the first release since the State of the Universe (read here if you missed it) it's too early to tell if this is a MILESTONE. We have too much stuff in all three programs to highlight everything so we recommend giving the change log a good look. But some highlights in no particular order.

**MegaMek**  
+ Fixes for AS conversions
+ Fixes to the new User Directory
+ Implement the Internal Bomb Bay Quirk (fear the Torrent)
+ Added gyro/NUL ID/ to the advanced search
+ Improvements to Aerospace flight paths and how shortcuts interact with them
+ Anti-Mek infantry now properly matches construction rules. 
+ Start of a major rework on how we manage armor types
+ TAG-phase Torso Twist returns
+ Major rework around Mek Clan Chassis Names (this could impact MekHQ)
+ [Bot command updates](https://github.com/MegaMek/megamek/pull/5121)
+ Quirk updates now match Campaign Ops 4th Printing for all units
+ [Turn Timer expansion](https://github.com/MegaMek/megamek/pull/5126)

![alt text](https://imgur.com/6NvNSYBl.png)

+ [Add the ability to see the Force in Game](https://github.com/MegaMek/megamek/pull/4985)

![alt text](https://i.imgur.com/9vmlwAhl.png)

![alt text](https://i.imgur.com/9qgaJ3hl.png)





Princess has successfully graduated from [Blackjack's advanced munitions course](https://bg.battletech.com/forums/index.php?topic=57647.msg1990758#msg1990758). You will see more ammo switching, making MML and ATM's more effective. If the players give her alternate ammo types she will use them. As an example give her TAG units, and Artillery with homing ammos. 

**MegaMekLab**
+ Numerous bug fixes
+ Expanding the Summary view information including showing earliest year possible
+ Numerous improvements to record sheets
+ [Implements Anti-Mek Equipment](https://github.com/MegaMek/megameklab/pull/1396) (If your an infantry user give this a read) 

**MekHQ**
+ Bug fixes
+ Repair bay unit list show if unit is in repair or salvage mode
+ add max contract salvage percentage to campaign options
+ manually set TO&E force commander

**MekHQ StratCon Alpha**  
+ [Updated Stratcon Modifiers](https://github.com/MegaMek/mekhq/pull/3801)
+ [StratCon Heavy Battles](https://github.com/MegaMek/mekhq/pull/3840)

**A Few Reminders:**

1. **Unit File Alignment with MUL:**  
   We aligned unit files with the MUL by removing the term "(Standard)", resulting in the removal of nearly 1000 instances. Our Quality Assurance (QA) team has thoroughly tested these changes. There's a potential risk in MekHQ with CPNX files due to their reliance on unit names. If errors occur while loading your campaign file, we apologize for the inconvenience. For assistance, please refer to [this post](https://github.com/MegaMek/megamek/wiki/Name-Issues-with-Units).

2. **Removal of Unofficial Units Zip:**  
   Based on feedback from our Discord and a poll where 75% of players favored this decision, we've removed the unofficial units zip from this release. This change allows us to focus on canon units.  
   
   To reintegrate the units:
   - Download the zip file from [MegaMek Extras HERE](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
   - Right-click and use the "save link as" option.
   - Save it as a zip to the data\mechfiles folder of the program.
     - We suggest saving it to a customs folder within data\mechfiles.
   - They will be added upon restart.

3. **User Data Directory for MegaMek, MegaMekLab, and MekHQ:**  
   We've added a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.  
   
   **Key Points:**
   - **Set a Custom Directory:** Choose any location on your computer (e.g., `D:/myMMStuff`) to keep your game resources.
   - **File Placement:**
     - Fonts and units (`.mtf`, `.blk`) can be placed anywhere within this directory.
     - Camo images in `/data/images/camo/`
     - Portrait images in `/data/images/portraits/`
     - Unit fluff images in `/data/images/fluff/<unit type>/`
     - Rank and award definition files (`.xml`) in `/data/universe/`
   - **Consistent Access:** Resources in this directory are usable across different game versions and modules without needing to relocate them for each new install.
   - **Implementation:** Set up this directory via the client settings. A game restart is required for changes to take effect.

4. **MekHQ Campaign Files:**  
   Remember, MekHQ campaign files **are NOT** backward compatible. Moving your campaign to a newer version prevents reverting to an older one, but keeping backups allows play in both versions for comparison.

**Stable release**
Please review the [State of the Universe](url=https://bg.battletech.com/forums/index.php?topic=83774.0

**Java 11 and 17**
We've updated to Java 11. To use the **0.49.x development branches**, an update is needed. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). Help pages for [Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) and [Mac](https://megamek.org/wiki/mac_issues.html) users are available. Linux users should use their package manager to install Adoptium Temurin.

This release also supports Java 17, which has undergone some testing. More player usage is needed, but Java 11 remains our recommended version.

**Social Media**
Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

**Mac Users**
[Check out this workaround for Mac Operating Systems](https://megamek.org/wiki/mac_issues.html).

**Contributing**
Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

**Updating Your Campaign:**
1. Make backups of your campaigns and customs.
2. Treat each release as stand-alone; copy your data forward from older versions, never backward.
3. Do not copy MegaMek saves or any preference file from a different version.

---
**Change Logs (Release Specific) and Download Links**

**MegaMek Change Log**  
[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.18)
**0.49.18 (2024-02-16 1900 UTC)**
+ Fix #5004: Prevents an error when configuring LAMs or quadvees in the lobby
+ PR #5002, #5001: AS conversion: fix BA medium and long range damage with SSW, STOL units and aerodyne DS/SC now receive VSTOL
+ PR #4993: Alpha Strike aero support vehicles (fixced wing support) will now find and display their fluff images if there are any
+ Fix #4998: ZIP files in the user directory will no longer generate errors when they contain files other than unit files
+ PR #5003: Implements the Internal Bomb Bay quirk
+ PR #5024: Mech summary invalid
+ PR #5023: Correct conversion exception causing search to not work
+ Fix #5015: Add advanced search for gyro
+ PR #5014: Fix CF warning sprite to work with isometric view
+ PR #5012: QuirkEntry: remove maximum slot number check (fixes MegaMekLab#1364)
+ PR #4992: Don't display engine rating for SV engines
+ PR #5025, #5068: Using the keybind (default: Backspace) for removing the last movement step will now remove all illegal steps if there are any at the end of a move path
+ Fix #5038: Add clan CASE in postLoadInit for explosive secondary locations
+ Fix #5028: Tow button no longer working
+ PR #5036: CF Warning clean up sprites when turn ends
+ Fix #1021: Overshooting movement is now automatically removed when the Evade button is pressed
+ PR #5034: ADA Missile to-hit modifiers have received an update to match the rules better
+ Fix #4648: The Sandblaster SPA now allows selecting Mek mortars
+ Fix #4520: Princess has undergone aerospace training sessions and is now better able to select between TAG and other weapons
+ PR #5009: Searchlights are no longer auto-enabled during daytime
+ Fix #5046: RFE: Search by MUL ID in advanced search.
+ Fix #5051: RFE: Improve the Invalid Reasons display
+ Fix #5060: Heat Inefficient issues with BV
+ Fix #5053: Update Aero movement envelope when accelerating or decelerating
+ PR #5059: Unit tooltip pilot updates
+ PR #5057: Lobby force updates
+ PR #5041: Princess Ice & Infantry On Ice Fix
+ PR #5069: Reset forces when resetting game 
+ Fix #5064, Fix #5065: Aero movement cenvelope and acc/dec next optimizations.
+ PR #5071: MUL parser updates
+ PR #5075: Laser-guided bombs now receive a -2 bonus on tagged units
+ PR #5074: Infantry no longer incorrectly applies a BV unit type modifier
+ PR #5040: Units with TAG weapons should now be able to torso twist in the Offboard / TAG phases in accordance with recent errata
+ PR #5083: Misc Code stuff
+ Fix #4941: MechView Ammo Block
+ Fix #5070: CI Anti-Mek Gear - Implements proper Anti-Mek set up for Infantry
+ Fix #5078: BA LB-X should get flak bonus against airborne targets
+ Fix #5088: Inaccurate Movement Envelope for Aerospace Fighters on Ground Maps
+ PR #5094: add start and connect to game to the file menu
+ PR #5102: Laser insulator and RISC laser pulse module validation
+ PR #5101, #5116, #5119, #5137: Rework of the internal representation of Armor
+ PR #5106, #5107: Separates clan and IS name for Meks with different names such as Mad Cat/Timber Wolf
+ Fix #5092: SPA Natural Aptitude: Piloting is not being applied to low gravity PSR's.
+ Fix #5103: Check for not dusk dawn for searchlight penalty reduction
+ PR #5121: Bot command updates
+ Fix #4878: Princess non-combat PSR reduction
+ Fix #5103, #5030, #5072: Correct issues with BAP targeting to hit bonus 
+ Fix #5073: Brings Quirks in line with Campaign Ops 4th printing table.
+ PR #5126: turn timer updates
+ PR #5132: Fix Long Tom Cannon not dealing damage to flying dropship
+ Fix #5104: To-hit calculation bug when shooting at VTOLs
+ PR #5146: planetary conditions weather updates 
+ PR #5140: BA tech advancement for Exoskeltons.
+ PR #5147: Fix weather restrictions around wind 
+ Data: Implement Shrapnel #9 Laser Weapons.
+ PR #5159: Light and Heavy Machine Gun Ammo is mislabeled
+ Fix #5149, #5151: fix NPE in getHexTip(), fix NPE in doEntityDisplacement()
+ PR #5173 Add bot command for dishonored players 
+ Fix #4670: Hide entity statblocks from the hex tooltip when entity is hidden
+ PR #5170: Use IGame in TurnOrdered 
+ PR #5169: Code cleanup #5169
+ Fix #5155: Add checkbox to turn off showing player deployment on map preview
+ Fix #4952: Princess does not select alt ammo
+ Fix #5174: Quick Fix for structure not loading correctly
+ Fix #5112: Allow editing pilot hits in the lobby

**MegaMekLab Change Log**   
[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.18)
**0.49.18 (2024-02-16 1900 UTC)**
+ Fix #1370: Closing a unit selection dialog without selecting a unit no longer leads to an error message displayed
+ Fix #1309: Cargo containers can no longer be added to battle meks (they remain available to industrial meks)
+ Fix #1358: Record sheets for beast-mounted infantry now show additional movement information
+ Fix #1033: BA bays now show their capacity as the number of BA suits instead of BA squads
+ Fix #1312: Modular armor can now be added to fighters
+ Fix #1305: MASH can now be added to clan units
+ Fix #1308: Improved weapon sorting in the equipment database
+ Fix #1041: On space stations, the "modular" checkbox is now used to configure the "modular" or "KF adapter" features depending on the weight of the space station
+ PR #1357: The summary view has been reworked; it now shows availability data for some of the systems on the unit
+ Fix #1081: Summary: BMCore Equipment Availability Display is Always ?
+ Fix #1289: Battle Armor Mechanical Jump booster Error
+ Fix #1228: SV Mast Mount not being assigned to rotor, fixed to body and cannot be moved
+ PR #1380: Show the earliest possible construction year in the summary
+ Fix #1314: On industrial tripods, environmental sealing now correctly adds a crit to the center leg
+ PR #1382: Crit cells now use equipment abbreviations for long names
+ PR #1383: Text overlap on BA record sheets for lots of equipment has been fixed for most cases
+ Fix #1385: Units that use .blk files now save their Combat Role
+ PR #1387: Long unit validation popup messages now use a scrollbar
+ Fix #494: Problem with infantry unit weight breakdown in the Reports menu
+ Fix #1037: Infantry bays on record sheets now show their platoon capacity rather than weight
+ Fix #1038: Record sheets no longer list infantry compartments as infantry bays
+ Fix #1086: Subcapital weapons can now be placed in a corresponding capital weapon bay
+ Fix #1064: Support vehicles should no longer be incorrectly classified as tech rating D minimum regardless of components
+ Fix #1065: Combat vehicles should no longer incorrectly be classified as tech rating E
+ PR #1396: CI Anti-Mek Gear - Implements proper Anti-Mek Infantry construction.
+ PR #1404: Include equipment that modifies weapon heat in status bar
+ Fix #1185: Clicking in year field no longer unassigns BattleArmor armor crits
+ Fix #1183: The Dropship bay door maximum now updates consistently
+ Fix #1405: Fixed a bug with resetting system crits that lead to what seemed conflicts between XLFE, NullSig, and CLPS
+ Fix #1192: Fixed a bug with internal weapon and equipment linkage that lead to laser insulators sometimes affecting multiple lasers
+ PR #1402, #1412, #1417: Rework of the internal representation of Armor
+ PR #1410: Adaptation to Mek Clan name separation in MM; Adds a clan chassis name field for Meks; for units such as the Mad Cat, 
            the IS name and clan name can be reordered on record sheets
+ PR #1411: StatusBar: calculate the correct total max weight for BA
+ Fix #1400: VTOLS print with an incorrect Hit chart
+ Fix #1203: Allow construction of BA exoskeleton before 2710
+ PR #1428: Use the configurable unit summary in MML
+ PR #1427: Debug helper update  
+ Fix #1419: Fix automatic placement of armors without crit requirement
+ Fix #1421: Remove misc heat duplication in the status bar 

**MekHQ Change Log**   
[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.18)
**0.49.18 (2024-02-16 1900 UTC)**
+ PR #3805: Adaptations for the Internal Bomb Bay quirk
+ PR #3801: New StratCon Scenario Modifiers (Thanks Thom293)
+ PR #3788: Adjust campaign creation dialogs to have correct jdialod owner
+ Fix #3540: Manually set TO&E force commander
+ PR #3818: MUL parser updates
+ PR #3816: Show if unit is in repair or salvage mode in repair bay. 
+ PR #3823, #3827, #3833: Rework of the internal representation of Armor
+ PR #3826: Adaptation to Mek Clan name separation in MM
+ Fix #3740: Consistent messaging in Daily Activity Log: ComStar bill vs. C-Bill
+ PR #3821: Add max contract salvage percentage to campaign options
+ Fix #3763: Reversing quality names in unit set quality GM menu
+ Fix #3194: Awarding non-stackable medals to multiple people 
+ Issue #3781: Force commanders can be picked from among highest-ranking individuals
+ Fix #3843: Fix chassis lookup
+ Fix #3842: Can't load prefab campaigns  
+ PR #3849: StratCon Heavy Battles, by PhoenixHeart.

Cheers! 