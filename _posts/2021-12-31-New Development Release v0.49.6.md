# New Development Release 0.49.6

Welcome all to 0.49.6, and Happy New Year!

This release is a nice mixture of suite-wide internal changes, bugfixes, errata, and new MegaMek, MegaMekLab, and MekHQ features. This release is also the first one that has seen some testing by our newly created QA team. Please join the
[official MegaMek Discord](https://discord.gg/u2vJ5U2QpD)  if you'd like more information or to volunteer to join the QA team.

## Java 11 and the 0.49.x Releases

We have made the change to Java 11, meaning you'll need to update to use the **0.49.x Development Releases**. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11) (the name change is solely a rebrand on their side, and no changes are required if you've already downloaded OpenJDK 11).  We have a help page [for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and
[macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able to user your package manager to install OpenJDK from their repositories.

## MegaMek

MegaMek has seen a lot of fixes, and a ton of basic internal code cleanup to improve its readability and stability the goal being to find unknown and unreported minor bugs. In addition to the fixes, we have a few new things. The Blood Stalker SPA has been coded, active probes now reveal hidden units on the move, princess has a new ignore target command, tons of unit fixes and new fluff for units, and lastly Rec Guide 19/20/21 have been added.

## Tech Progression in the programs

Starting in this release we've made some changes to tech progression which will impact MegaMekLab and MekHQ. Previously 100% of our data was based on the Interstellar Operations tables. But officially the tables in TRO Prototypes, and RS NTNU are considered the accurate ones. We've consolidated the three tables into Megamek updating both our static and variable tech ratings.

If you weren't aware we have two versions of tech progression built into MegaMek (Static and Variable). Static was based on tech levels circa 3071 we have now moved the static tech levels to 3145. Variable tech level is what we recommend using (enabled in the game options) as it tracks equipment moving from experimental to advanced to common(Tourney legal). This becomes important to be able to build the Rec Guide units, and any future units CGL produces for the ilClan era. It still allows for older eras to be played, but with static on you'll see some differences versus older published material.

## MegaMekLab

The lab hasn't had a lot of stuff done in the last couple of years. But Juliez our dev that likes improving look at feel of the programs decided to work on the lab a bit. You'll notice big changes to the UI and UIX - showing ammo and max damage on tooltips, tab-based scroll panes, improved readability on the large craft crit tabs, and improvements to the Mek crit display. Additional improvements are planned see [here for more](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1792648/#msg1792648). Our goal to keep moving MegaMekLab from the ugly ducking of designers to the premier one. Lastly, all of the MegaMekLab dependencies have been updated and a few bugs have been fixed.

## MekHQ

Force icons have been completely reworked, with the Kailan pack replacing the former MekHQ pack and the graphical components updated to be consistent with Portraits and Camouflage. There's also a ton of new options for pieces added in this swap over, including the new operational status indicators shown in the examples below.

![A fully operational Clan Snow Raven headquarters assault OmniMek supernova trinary](https://i.imgur.com/IKmKBpNl.png){:.img-fluid}

![A marginally operational pirate cruiser lance.](https://i.imgur.com/e7M8z58l.png){:.img-fluid}

![Marriage and Divorce](https://i.imgur.com/I6c1IB7l.png){:.img-fluid}

The Marriage and Divorce Personnel Modules have been merged, adding Random Divorce, Weighted Divorce Surname changes, and a ton of other new options.

These changes are joined by some new [d](https://i.imgur.com/HbrA4Sh.png)eath-related Personnel Statuses, the Dates and Other Personnel Table Views, the non-AtB Scenario View has been improved, and there's been a bunch of bug fixes.

## Dry Technical Stuff (but important for the future of the projects)

We've made several significant changes to our internal setup for this release. First, we've migrated our Log4j to Log4j2 2.17.1. This was done out of an abundance of caution, as MegaMek previously used Log4j1 with the most vulnerable regions pre-dating even that implementation.

However, there have been significant performance and security improvements and hence we determined a complete swap over was in our best interest going forward. Second, we've migrated to Gradle 6.7. This is a necessary step towards supporting Java 15 and beyond and fixes a few major Gradle build failure cases. Third, our default RAM allocation has been increased to 2/1/2 GB for MM/MML/MHQ respectively. This change has been made to reduce the disconnect and processing speed issues, as a follow-up relating to the Java update.

Finally, our GitHub Actions for MM and MHQ have been updated to use an easily modifiable constant setup for testing, to handle testing multiple Java versions, to handle multiple Java distributions, and to handle multiple operating systems. Altogether, these suite changes will ensure better stability, performance, and security going forward.

## MekHQ StratCon Alpha

StratCon has seen a few bugfixes since 0.49.5.

## SOCIAL MEDIA

We are also happy to announce we have an [Official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). It will function like our Slack but gives us better voice support for those who use the [official public servers](https://megamek.games). Also a reminder to drop into the [Slack channel](https://bit.ly/2KSu5yQ) to meet other players and harass the Devs that drop in and out. If Slack isn't your thing check out these Discords with MegaMek channels - [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52).

Facebook - [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek)

UlyssesSockdrawer is running a popular Solaris VII campaign on our Discord that is always looking for new players. You can join between cycles, which run on a regular basis. However, it is going on temporary hiatus after this cycle, return date TBA.

## Mac Users

We think we now have a [url=https://megamek.org/wiki/mac_issues.html]workaround for Mac Operating Systems[/url].

## Updating Your Campaign

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions, never backwards.
3. Do not copy MegaMek saves nor any preference file from a different version.

## Change Logs (Release Specific) and Download Links

### MegaMek

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.6)

+ Issue #2917: Missing Water Tile Hexes in Nightly Builds
+ Issue #3156: Use More Reliable Technique to Report the Attacker
+ PR #3225: Blood Stalker SPA
+ PR #3222: Base Components: New Dialogs Appear Centered, LOSDialog Swapover
+ PR #3235: Base Components: GameOptionsDialog Swapover, Making Hide Legacy and Hide Unofficial Full Game Options
+ PR #3228: Base Components: PlayerSettingsDialog Update
+ Issue #3231: Detachable Unit Detail Tweaks
+ Data: Updating Deadborder Map Pack and some quirk fixes and surname fixes.
+ PR #3243: Add Separate KeyBind for in game Undo Last Step
+ PR #3248: Preventing Conditional Ejection on Cockpit Crit
+ Issue #3245: Prevent concurrent modification exception when sending out player turn updates
+ Issue #3237: Prevent VTOLs from getting stuck in a swamp while going up and down in the air
+ PR #3249: Ammo/Weapon techbase mismatch fixes + one instance of missing ammo
+ Increasing MegaMek's base RAM allocation to 2 GB
+ Data: Updating mechfiles (fluff, some errata) new sprites updated quirks (includes fix for #3253).
+ Updating MekView to have a line break between fluff text.
+ Issue #3255: Add missing TSM BV modifier (x2) to Claws
+ PR #3625: Don't show ECM bubbles for hidden hostile units
+ PR #3270: Updating Flat Look and Feel from 0.26 to 1.6.5
+ PR #3281: Updating Commons-Text to 1.9 from 1.8
+ PR #3261: Allows active probes to reveal hidden units "on the move" as per TacOps Active Probe rules.
+ PR #3288: princess: ignoreTarget: unitID
+ PR #3292: Quad Meks no longer swap cover and aiming mode when doing a head hit edge reroll
+ PR #3289: Upgrading Mockito to 4.1.0
+ Issue #3240: Fixing JumpShip no Grav Deck Crit Handling
+ Issue #3273: Fixing Off-board Artillery NPE
+ PR #3301: Fixing Quirk NPE and Quirk Tool VTOL Handling
+ Data: Rec Guide 19, various unit fixes and fluff.
+ PR #3305: Adding CodeQL GitHub Action - Automated Code Insights
+ PR #3297: Rewriting Tele-missile AMS to handle LGTM, Performance, and Code Issues
+ PR #3299: LGTM Code Issues: Fixes Round 1
+ PR #3310: JUnit Update to 4.13.2 from 4.12
+ Issue #3312, 3313: Prevent bot units from spotting aerospace fighters and sensor contacts for indirect fire
+ PR #3298: Entity::assignAMS Performance Refactor
+ PR #3307: Log4j2 2.17.1 Swapover from Log4j1 1.2.17
+ Data: Tech Progression update. Merging the tables from TRO Prototypes and 3145 NTNU. Moves
+	Static tech levels for lots of equipment to 3145 per those table.
+ PR #3315: LGTM Code Issues: Fixes Round 2
+ PR #3316: Fixing a NPE in AeroGroundPathFinder::ForwardToTheEnd
+ Data: New Units (Rec Guides 19, 20), new sprites, TP fixes, and updated Camos
+ Issue #2199: MUL Parser Game Option-reliant Personnel Load
+ MekHQ Issue #3026: MegaMekXMLUtil: Skip Null UUIDs During File Output
+ Data: Large update of Fluff, Tech level, and clean up of Rec Guide Names adding Rec Guide 21 units.
+ PR #3334: GitHub Actions: Adding Support for Multiple Java Distributions and Versions, with Temurin as our default, and Fixing Missing Release Inclusions
+ Issue #3337: Fixing EntityListFile NPE when using OS weapon with no linked munition type
+ PR #3335: MegaMekXMLUtil: Skip Null LocalDates During File Output and Fixing Empty UUID Write
+ PR #3266: Fix incorrect saxarba structured water tile sizes
+ Data: Fixes for #3342, #3333, #3242, #3067 and #3236 includes fixes to RAT Generator and RATs for name changes etc.
+ Data: Updated boards for Flynn, new sprites, more fluff for selected units.

### MegaMekLab

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.6)

+ Issue #908: Corrections to the Aero reference tables
+ Issue #943: Add CASE info to ammo on non-Mek Record Sheets
+ Issues #646, #953: Show Ammo Shots and Weapon Maximum Damage in tooltips
+ Issue #785: Tab-based Scroll panes
+ PR #961: Preserve expanded state of Large Aero Weapon Bays
+ PR #960, 963: Large Aero Crit Visual Improvements
+ PR #864: Update to Apache FOP 2.5: Modern Font Support Improvements
+ PR #966: Large Craft Weight-Free Slot and Additional Tonnage Visual Improvements
+ PR #967: Large Aero Crit View Bug Fixes
+ PR #969: Updating Apache XML Graphic dependencies: FOP to 2.6, Batik to 1.14
+ PR #970: Updating PDF Box to 2.0.24
+ PR #971: Crit Cell and Tooltip Improvements
+ PR #977: Log4j2 2.15.0 Swapover from Log4j1 1.2.17
+ PR #980: Log4j2 2.17.1 Update
+ Issue #986: Fixing Hanging Bracket on Aerospace TAG Equipment

### MekHQ

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.6)

+ PR #2857: Personnel Status: Expansions for Random Death
+ PR #2933: Startup: Rename Origin Force Node With Campaign Name
+ PR #2951: AssignUnitToPersonMenu: Adding Missing Personnel Filters
+ Increased base RAM assignment to 2 GB
+ PR #2474: Copy C3 Master on Restore
+ PR #2952: Personnel Assignment Menus Performance Improvements
+ PR #2959: Finances: Fixing Various Property Issues
+ PR #2960: Campaign Options Dialog: Fixing Portrait Generation Property Issue
+ Issue #476: Log Entry for Personnel Moved In/Out of a ToE Force
+ Issue #2932, #2944: When assigning a vehicle gunner, don't assign them as a driver also.
+ Issue #2866: Actually, replace VTOL rotors as opposed to just eating the part
+ MegaMek #3232, #3244: PersonnelOptions/PilotOptions Fix (Multiplayer Games and Saves should now work properly)
+ Issue #2962: AtB Campaigns Now Properly Load with Automatic or Tech Acquisition Skills
+ PR #2345: Refactor equipment unscrambling to make it testable
+ PR #2991: Updating Mockito to 4.1.0
+ PR #2986: Fixing Unit Market Preference Copy/Paste Error
+ PR #3002: Log4j2 2.17.1 Swapover from Log4j1 1.2.17
+ PR #3004: JUnit Update to 4.13.2 from 4.12
+ Issue #2863: Adding Dates Personnel Tab Filter, Displaying Dates, and adding Pregnancy Color
+ PR #2851: Personnel Modules: Marriage: Modularization and Expanded Options
+ PR #2908: Personnel Modules: Divorce: Modularization, Random Divorce, Expanded Options, and Bulk Manual Divorce
+ PR #3017: PersonnelTableModelColumn Enum: Improved Personnel Comparator Usage, Other Personnel Tab Filter, Improved Column Uses for the Batch XP and Personnel Market Tables
+ Issues #347, #354, #2235, #2448: AbstractIcon: Force Icon Rework and Kailan's Pack Swapover
+ PR #2977: GitHub Actions: Adding Support for Multiple Java Distributions and Versions, with Temurin as our default
+ Issue #3023: Fix multiple situations where extremely low or high-skill units with multiple crew members would cause a lockup during scenario resolution
+ PR #3024: Improving Scenario View Graphics as part of migrating functionality from AtBScenario to Scenario
+ Issue #2983: Reordering spouse KIA logging so it is assigned to the correct person
+ Issue #2993: Fixing Duplicated Small Craft and JumpShip Pilot Assignment

Enjoy everyone and on behalf of the entire MegaMek Team; Thank you! for playing and wishing everyone the best in 2022.
