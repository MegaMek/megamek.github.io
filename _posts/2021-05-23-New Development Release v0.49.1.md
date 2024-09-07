# New Development Release 0.49.1

Welcome to 0.49.1 this release is all about bug fixes.  Our 0.49.0 release was a very buggy release and while this release fixes a lot of bugs, expect bugs to continue for the next few releases. With all the new stuff in (and planned) for 0.49.x it will take us time to find and fix them all. But players that have been using the nightly builds are reporting things very improved over 0.49.0

## MegaMek and Java 11

We've have officially made the change to **Java 11**, meaning to use the
**0.49.x Development branch** you'll need to update.

Due to changes in downloading Java that Oracle has made, we are recommending
players use [OpenJDK 11](https://adoptopenjdk.net/). We have a help page
[for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and
[macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able
to user your package manager to install OpenJDK from their repositories.

As mentioned nothing but bug fixes and some new sprites and maps.

## MegaMekLab

No changes from Stable 0.48.0

## MekHQ

Bug fixes and continued improvements to Stratcon. Not sure what Stratcon is [SEE HERE](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1719781/#msg1719781)

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

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.1)

+ PR #2823: Fix for issue preventing saving battle results to MUL and scenario resolution in MekHQ
+ PR #2825: Fixing Mek Tree Sorter NPEs
+ PR #2829: Fixing Mek Table Model Potential NPEs
+ Issue #2818: Placeholder Image on Destroyed Condor
+ Issue #2819: Fixing Left Click Targeting Issues
+ PR #2831: FovHighlightingAndDarkening Null Handling Improvements
+ PR #2835: ReadMe Java recommendation update and accessibility improvements
+ Issue #2820: Improved initial sizing of game options popup
+ PR #2850: Fixing LobbyMekCellFormatter NPE
+ PR #2849: Fixing Abstract Wreck Sprite NPE
+ Issue #2826 Traitor Context menu correction (no traitoring to teamless)
+ Issue #2856: Fixed Board Editor Level Up/Dn and left click dragging
+ PR #2862: Adding null target safety check for WeaponAttackAction.toHit() method
+ Issue #2963: Armor tooltip matches reality better
+ Issue #2776: Fix for frequent inability to start MegaMek scenarios with bots from MMS files
+ Issue #2727: Restore respect for client-side language settings (some things still aren't translated though)
+ Data: New sprites and unit file updates, updating Flynn Map pack, adding UlyssesSockdrawer Maps

### MegaMekLab Release Notes

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.1)

*No Changes

### MekHQ Release Notes

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.1)

+ Data: Fixing Aerospace Tech Portrait Folder Names
+ PR #2571: Fixing MekWarrior Salary
+ Issue #2569: Adding userdata to the build script
+ Issue #2574: Fixing Experience Tab Custom Skill Costs Formatting Type
+ PR #2584: MekHQ Options: New Day: Auto-hiring Pool Options
+ Issue #2568: Fixing StratCon Mission Completion NPEs
+ PR #2580: Campaign Options: Fixing doClick update issues
+ PR #2582: Fixing Astech and Medic pool salaries so they use the proper campaign options
+ PR #2587: Re-enable force deployment from TO&E
+ PR #2590: Take a breather after sending entities to MegaMek before trying to load transports
+ PR #2586: Fixing LAM Pilot Skill Level Calculation
+ PR #2599: Fixed multiple issues with deploying grounded dropships from MekHQ to MegaMek;
 Prevent putting scenario into error state when editing a non-resolved scenario in briefing room
+ Issue #2594: Allowing Scenario Date Nullable Comparison
+ Issue #2588: Fixing unmarketable check value for personnel table filter support check
+ PR #2602, #2611, #2615: StratCon Data Fixes
+ PR #2583: Dependent Swapover: Removing Parental and Spousal Abandonment, Fixing None Primary Role
+ Issue #2566: Ranks Warning Expansion and Change Tracking
+ Multiple StratCon stability and data fixes:
 - scenario data updates
 - phantom scenarios no longer display in briefing room; fixed objective scenarios remain on tracks until encountered
 - logic update for force deployment right click menu
 - map size rerolls no longer generate tiny maps
 - descriptive text updates
+ Issue #2607: Fixing Payment Overage Option Implementation
+ PR #2581: Modernizing Presets to 0.49.1 Standards
