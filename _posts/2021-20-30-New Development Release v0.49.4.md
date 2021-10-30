# New Development Release 0.49.4
Welcome all to 0.49.4. This release is a nice mixture of bugfixes, errata, and new MegaMek and MekHQ features.

## Java 11 and the 0.49.x Releases.
We have made the change to Java 11, meaning you'll need to update to use the **0.49.x Development Releases**. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11) (the name change is solely a rebrand on their side, and no changes are required if you've already downloaded OpenJDK 11).  We have a help page [for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and
[macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able to user your package manager to install OpenJDK from their repositories.


## MegaMek
MegaMek is now version protected. You can no longer load a save game nor connect to a server if there are version differences. Please note that this was never supported, but was previously possible.  Skill Generation has been completely rewritten in MegaMek, with new requested methods, standardized dialogs, and a far more workable backend for future use.

![Skill Generation](https://i.imgur.com/uduRcAb.png[/img)

We got some new errata implemented (Infantry Damage and StratOps Anti-Air). The menu bar has been updated and rewritten. Updated vibrobombs that they are properly revealed and active probes detect them. Implemented some fixes that will hopefully reduce the disconnects plaguing this release cycle. Deadborder continues to update sprites to match the kickstarter art and we've got another hundred or so in. Plus we continue to add fluff data to units. We reminded Princess that careening around the battlefield with infantry still on board is not the right thing to do.

Final note, in the release notes you'll see reference to dockable unit detail this is a newer feature and is very experimental but feedback would be appreciated.  

## MegaMekLab
MegaMekLab has had an errata change, a bugfix, and its versioning improved. However, it continues to be quiet as the dev focused on it is currently taking a break.

## MekHQ
Windchild's glad to (finally) announce the New Campaign Project, a complete rework and expansion for starting a campaign in MekHQ. Wave 1, and thus 0.47.4, introduces Campaign Presets, the replacement for Game Presets. Campaign presets handle a full options setup for a campaign in a single file, instead of just the campaign options. Their options are divided into startup options, which only affect new campaigns, and continuous options, which can be applied to new or current campaigns. Wave 2 is already in progress, with a spoiler post coming soon.

![Create Campaign Preset](https://i.imgur.com/m0BBFEB.png)

There's now a menu to assign personnel to a unit from the hangar tab, all of pre-existing menus relating to person/tech to unit assignment and vice versa have been standardized, and the assignment is now based solely on personnel roles. This is outside of Crewmembers (Vehicle and Vessel), Console Commanders, and Tech Officers, which will be handled in the future due to pre-existing internal implementation oddities. Note that the image is from a test campaign, where the camouflage being broken shows that camouflage is working properly.

![Assign Personnel Updates](https://i.imgur.com/2MbRfXy.png)

We've also added support for Tripod BattleMechs, properly layered force camouflage (Windchild - my bad on that not being implemented from the start of the camouflage changes), total XP earnings tracking, the Maintainer unofficial SPA, a few new minor campaign options, and moved era definitions to a data file (albeit in their barely used state).

Finally, there have also been a bunch of bugfixes.

## MekHQ StratCon Alpha
StratCon has seen a bunch of bugfixes since 0.49.3.

## SOCIAL MEDIA
We are also happy to announce we have an [Official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). It will function like our Slack but gives us better voice support for those who use the [official public servers](https://megamek.games). Also a reminder to drop into the [Slack channel](https://bit.ly/2KSu5yQ) to meet other players and harass the Devs that drop in and out. If Slack isn't your thing check out these Discords with MegaMek channels - [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52).

Facebook - [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek)

UlyssesSockdrawer is running a popular Solaris VII campaign on our Discord that is always looking for new players. You can join between cycles, which run on a regular basis. However, it is going on temporary hiatus after this cycle, return date TBA.

## Mac Users
We think we now have a [url=https://megamek.org/wiki/mac_issues.html]workaround for Mac Operating Systems[/url].

## Updating Your Campaign:
1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions, never backwards.
3. Do not copy MegaMek saves nor any preference file from a different version.

## Change Logs (Release Specific) and Download Links
###MegaMek
[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.4)
+ PR #3079: Skill Generation Rework
+ PR #3106: Relabel "Start a Saved Game" button to "Load a Saved Game"
+ PR #3113: Unit Readout Dialog: Add missing space between the dialog name and unit name
+ Issue #2975: Altitude is now properly ignored when customizing aerospace and space units for a space map
+ Issue #2719: Null protecting BotClient::calculatePointBlankShot
+ PR #3122: Nova Net Command: Improving error chat replies
+ PR #3096: Russian Name Cleanup
+ PR #3123: JToggleButtonPreference: Swapping to using doClick
+ PR #3127: Standardized Game Options File I/O
+ Issue #2854: Only skip the invalid unit when not allowing illegal designs
+ PR #3130: MegaMek XML Util: Fixing Two Escaping Issues
+ PR #2581: MegaMek XML Util: Adding Proper Parsing Methods
+ PR #3000: Top Menu Rewrite
+ Data: Few new maps from SimonLandmine and UlyssesSockdrawer. Some unit file fixes. 
+ Issue #3089: Fixing messages implementation to handle localization
+ PR #3132: Princess Player NPE
+ Data: (Errata) StratOps Advanced Anti-air now an unofficial option per its removal from StratOps.
+ Issue #3140: Moltke missing from FWL General generated RATs
+ Data - Some unit fixes and a new board.
+ Issue #3134: Show BV of players in the lobby player table
+ PR #3159: Per errata, primary infantry weapons doing more than .6 damage per trooper have been nerfed to .6; infantry burst fire trait added for those
+ Data: Various Unit file fixes
+ Issue #3128: Restore bot ability to unload infantry/BA from transports.
+ PR #3167: Tripod 'Mech Center Leg Actuator Damage Customization
+ PR #3168: Array bounds protecting Entity::getCritical
+ Issue #3133: Adding before round 1 deployment option
+ PR #3170: Fix NPE preventing loading MULs containing transported units
+ Issue #3126: Display Water0 under rough/swamp again
+ Issue #3102: Add mousePressed check to lobby popup trigger
+ Issue #3153: Minimap graphical issue corrections
+ PR #3139: Restore 'rotate board' option for maps with even width to rotate the board 180 degrees. 
+ PR #3162: Suite Version Tracking: Adding Full Versioning and Version Protection
+ PR #3176: Fixing ForceGeneratorViewUi NPE
+ PR #3177: Properly reveal vibrabombs detonated during a unit's movement
	allows active probes to reveal minefields during movement as per TacOps Active Probe rules (unit movement stops if a 
 minefield is revealed) prevent soft-lock when stopping a unit's movement due to minefield detonation with "simultaneous movement phase" turned on
+ PR #3190: Vibrabombs and other non-conventional/inferno mines always reduce density when detonated per current TacOps rules.
+ Issue #3147: Dead-fire missiles behave according to updated IO rules (no auto-hotload, cluster hit penalties, 5 point clustering for LRMs)
+ Issue #2894: Allow airborne microlite VTOL infantry to flee
+ Issue #2813: Per TW, updated swarm attack modifiers, battle armor vibro claws now do extra damage during swarm attack.
+ Data: New sprites/updated unit fixes and Shrapnel units. 
+ Issue #3813: Multiple improvements to the unit tooltips, in the lobby and otherwise.
+ Issue #3202: "Restore" ability to switch unit name display using ctrl-b (full name, just the chassis name, etc)
+ Issue #2207: Prevent additional MP cost and bog down nagging when moving along water surface while the bottom terrain costs extra MP/causes bog down
+ Issue #3015: Update tonnage display in the lobby table to display exact infantry tonnage; update player BV display formatting according to locale
+ PR #3110: Dockable Unit Detail
+ PR #3210: Base Components: Client Settings Dialog Swapover 
+ Issue #3185: Prevent server lockup when processing a club attack (against a unit also equipped with a club?)
+ PR #3218: BotGeometry Null Edge Detected Exception Logging Upgrade
+ PR #3219: Fixing the Messages instance used by Entity
+ Issue #3175: Fix concurrent modification issue preventing multi-bot replacement
+ Data: Fixes for #3208,#3188,#3155,#3146,#3141,#3117,#3064,#3040,#3034#2949,#2647,and #2637
+ Data: Numerous Fluff entries added, new sprites, new camos, and largest board in MegaMek added
	Stonewall072 Ocoee (50x700)


### MegaMekLab
[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.4)
+ PR #948: Update infantry record sheet printing for primary weapons doing more than .6 damage per trooper
+ PR #949: Standardized Suite Version Tracking
+ Issue #935: Can change jump MP and jump jet type on BA that didn't have jump jets without the app freaking out


###MekHQ
[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.4)
+ Issue #274: Moving Era Definitions to Data
+ PR #2793: Expanded Finances Transaction Types
+ Issue #2798: Adding Total XP Earnings Tracking
+ PR #2818: ReportHyperlinkListener Parsing Bugfixes
+ Issue #2825: Individual Camouflage Bulk Assignment from Same Original Camouflage
+ Issue #2521: Star League Caches No Longer Generate in Pre-Spaceflight, Early Spaceflight, and Age of War Eras
+ Issue #2838: Turrets now generate with the proper faction and thus names
+ Issue #2841: Properly hide the MechWarriors grouping when using individual role filters
+ Issue #2747: Fixing StratCon Scenario Template Path Capitalization
+ PR #2847: Preventing Null Force Template Addition
+ PR #2849, 2846: Addressed multiple errors resulting in failure to generate aerospace scenarios
+ PR #2860: Unit Market properly initializes for new campaigns
+ PR #2861: StratCon Tab NPE
+ PR #2862: Removing Useless Shares Sorter
+ Issue #2865: Specialist Infantry Salary Multiplier
+ PR #2844: AbstractIcon: Force Camouflage: Layering and Properly Sending to MegaMek
+ Data: Adding UlyssessSockdrawer's excellent Co-op guide to docs folder. 
+ Issue #2873: Part doesn't serlialize brandNew flag
+ Issue #2878: Prevent dropship bay doors from continuously breaking down when loading saves
+ Issue #1236: Adding full support for Tripod 'Mechs
+ Issue #1420: Can No Longer Deploy a Person Multiple Times
+ Issue #2867: Making the default unit market type the Open market instead of the Employer Market
+ PR #2869: Serializing StratCon OpFor Skill and Quality
+ PR #2883: Monday Training XP Assignment on New Day instead of AtB Scenario Generation
+ PR #2889: Ransom is no longer automatically selected at 100% salvage rights
+ Issue #210: One Person will be Artillery Trained when hiring minimum complement for an artillery-armed unit
+ Issue #2567: AtB now follows the part acquisition skill option
+ PR #2884: Briefing Room: Print Sheets now prints sheets for all units in AtB
+ Issue #2496: Maintenance Properly Includes Unofficial SPAs
+ Issue #2809: Grounded dropship scenarios will no longer feature immediately floating and crashing dropships; will start
+ PR #2891: Maintainer Unofficial SPA
+ PR #2880: Standardized Suite Version Tracking
+ Issue #1793: Reports: AbstractDialog Swapover, GUI Code Isolation, Preference Bugfixes, and Code Standardization
+ Issues #1092, #1105, #1950, and #2695: Person/Tech to Unit and Unit to Person/Tech Assignment Menu Standardization
+ PR #2855: New Campaign Project: Campaign Preset Rework
+ PR #2912: Fixing an NPE in Personnel Filter Style
+ PR #2916: Dependents cannot have an assigned unit
+ PR #2915: AtB Dynamic Scenario: Fixing missing serialization on all non-map values
+ Issue #2918: AtBContract End Date Display Does Not Update on Contract Extension
+ Issue #2920: Full Swapover to MekHQ's PersonnelOptions over MegaMek's PilotOptions
+ PR #2921: Main GUI Bottom Line Formatting Issues: Missing Space and Standardizing Colon Bolding
+ PR #2924: SelectAbilitiesDialog: Adding SPA Display Name Sorting
+ PR #2930: Improving Client Unknown Phase Logging During Initial Connection

Enjoy Everyone!