# New Stable 0.48

Welcome to the 0.48.0 Stable release. Wow, it's been 1 year, 6 months, 21 days since we released the 0.46.0 Stable! In that time we've seen MegaMek grow in leaps and bounds. We've doubled our player base on social media. Been involved in virtual cons, assisted [Catalyst Game Labs](https://catalystgamelabs.com) with the World Wide Event in 2020, and helped keep hundreds of players connected during the challenges that 2020 brought us.

As Developers we want to say thank you to all the players and fans of BattleTech and MegaMek that keep these programs going.

We've written detailed notes below to cover what happened in each program but I do want to address a couple of technical things first.

## Stable Releases versus Development Releases

There is a perception that Stable releases are bug free and Development (Dev) releases are buggy. A better way to think of it is our Stable releases are less likely to have game breaking bugs, but we can't guarantee they won't happen, while Development releases have new features and thus are more likely to have bugs. However, the more players using the development releases the faster we can find those bugs and fix them, thus getting us to new stables quicker. We often get asked about how do you run both. Simple, just have a folder for Stable and each development release gets its own folder. If you are going to do this remember:

1) **_Make backups_** of your campaigns and customs.
2) Always treat each release as a stand alone release and only copy your data forward from older versions.
3) Campaigns and save games are **_NOT_** backwards compatible.

So what's coming up in the next dev cycle? To be honest, with the current global situation we don't have any firm plans. A few things we do know about and/or hoping for.

1) The new [Lobby](https://bg.battletech.com/forums/megamek-games/preview-of-new-lobby-and-request-for-feedback/), we don't have a date for it, but if you have ideas for it please post in that thread. No guarantees but we are open to ideas.
2) [StratCon](https://github.com/MegaMek/mekhq/pull/2144) - The replacement for AtB. We'd consider this pre-Alpha but we are very excited for it.
3) More personnel options in MekHQ. You think its annoying when your people die in combat, how about old age or in pregnancy &lt;evil gri&gt;.
4) Continue to implement missing rules, quirks, terrains, and unit types to be playable and buildable. Railways, Airships, and one day Mobile Structures. Steiner Recon lance versus Rattler anyone?

## MegaMek and Java

I can't stress how important this is going forward. This Stable will support Java 8 but going forward you must have **Java 11** to use the **0.49.x Development branch**. This stable will run on Java 11 with countless players seeing huge improvements in performance and visual quality on high DPI monitors (i.e. 4k).

Due to changes in downloading Java that Oracle has made, we are recommending players use [OpenJDK 11](https://adoptopenjdk.net/). We have a help page [for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and [macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able to user your package manager to install OpenJDK from their repositories.

## I want to help

We often get people ask how they can help the projects. Give [our community page](https://megamek.org/community.html). The biggest thing we need right now is people to help with documentation. For example, write the steps for how to do something in a way we can use on our wiki. We have old manuals that need updating with modern screen shots. Got a talent for videos? We'd love to see more videos like [these](https://bg.battletech.com/forums/index.php/topic,72636.0.html), but for MekHQ and MegaMekLab.

If you have art skills, we really need someone to tackle sprites for the Aerospace units. Deadborder has his hands full keeping up with the ground units.

## MegaMek 0.46.1 to 0.48.0

What a busy development cycle for MegaMek - 218 Bug fixes, 66 data improvements, and 35 Pull Requests (PR’s) with major bug fixes or improvements. Some of the big ones include:

Princess spent a year at the Blackjack School of Conflict. In the process she developed the ability to multi-target, fly aerospace and use air strikes, master basic infantry tactics and field gun use, fire and counter-battery with artillery (you can counter battery as well), started to learn the basics of turrets and fortifications, learned to use a compass to improve her pathfinding, and we tried teaching her little mercy.

As a process of improving the Record sheet printing, we’ve made significant improvements on equipment validation and as an extension of that building all units in MegaMekLab.

The terrain we fight has also improved as we’ve added more maps including some amazing ones from Simon Landmine and Derv. To help with these maps we’ve overhauled the Map Editor, swapped to the Saxarba Theme, added SirMegaV building fluff and implemented inclines/cliffs/level 1 terrain. We also had a large texture overhaul from Ahne.

Other graphical improvements include the addition of [‘Damage Decals’](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1625891/#msg1625891) for 'Mechs and vehicles. Destroyed vehicles/ASFs now look like the unit that was destroyed (unless there is an ammo explosion, then it looks like a crater).

Data-wise we’ve got new sprites based on the Kickstarter, and Deadborder has finished the vehicle project. This means every current land unit in the game has a sprite down to the chassis-model level. Unit-wise, every unit playable up to Rec Guide 12 is in this release. For fun, GreekFire has helped add Fluff text to a selection of units.

Lastly some odds and ends. We've added a Graphical Editor for the RAT generator (read me in docs). Fuel-air Explosives for when you just gotta kill that Clan Elemental Cluster. A Random Callsign generator. The ability to output [game summary images](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1673607/#msg1673607) during various phases. Significant improvements to the camouflage and portrait selectors. And we've redone a huge amount of the default settings in MegaMek - for a detailed list see [here](https://github.com/MegaMek/megamek/pull/2334). Anyone notice something missing from MegaMek on new installs going forward?

Lastly two words - Dark Mode.

## MegaMekLab 0.46.1 to 0.48.0

This development cycle the focus has been on making MegaMekLab more robust and able to support almost all types of unit construction. We’ve have 200 bug fixes and 34 PR’s for additions. At the end of this cycle we are happy to say that we can and print the following:

* 'Mechs. (Normal, IM, Tripod, Super Heavy, LAMs, QuadVee) - Building and printing (except handheld weapons)
* Combat Vehicles - Building and printing (including Naval units)
* Battle Armor - Building and printing
* Aerospace Fighters - Building and printing
* Conventional Fighters - Building and printing
* DropShips - Building and printing
* Infantry - Building and printing
* JumpShips - Building and printing
* WarShips - Building and printing
* Space Stations - Building and printing
* ProtoMechs - Building and printing
* Support Vehicles (standard support vehicles from TW/TM except Airships but including Rail) printing still to come.

A few notes on printing record sheets, you will find that using the “export to PDF” then printing the PDF will give you better results. The official sheets used by CGL have a different font than the ones you’ll print. During this development cycle we removed that font due to concerns around licensing and distributing it. Added lots of options for unit design and print configurations under the File-Configuration. This includes things like including optional tables, roles, quirks, heat profiles, table-top mini scale, and color or Black and white sheets.

Also since the last stable:

* We now have a splash screen (from the amazing [SpOoky777](https://www.deviantart.com/spooky777)).
* Variable sized equipment: this is now configured in the equipment tab allowing greater precision.
* **Dark Mode**

## MekHQ 0.46.1 to 0.48.0

A huge amount of work has been done with MekHQ since the last stable with 237 issues fixed and 190 PRs of improvements and new features. We’ve worked on performance improvements in general and continued to work on improving the stability of refits.

Some of the biggest changes include the addition of the [Command Center](https://megamek.org/2020/06/02/Command-Center.html) and the [Planetary System refactor](https://megamek.org/2019/10/17/planetary-systems.html).

There have been significant Personnel Improvements since stable. These improvements add Random Marriages, divide names into Given Names and Surnames while adding trailing honorifics, Former Spouse Tracking, expanded Family Display, added a bunch of new campaign options (whose organization will be improved in 0.49.X), new personnel statuses that describe various forms of personnel death... and more. To really bring your people to life we’ve added a 1200+ images portrait pack. Lastly, the random callsign generator is available in MekHQ.

We’ve had Numerous QoL improvements such as keyboard shortcuts, natural order sorting, and improved bulk selection options. This includes numerous UI improvements and filtering options while we work on improving the backend code to improve the performance. We've also implemented an autosave, added campaign subset exports, standardized the unit selector with MegaMek, and added dark mode. Further, customizations in general have had improvements with the new MekHQ Options adding fully customizable date formats and more.

The GM Tools have been upgraded allowing you access to this dialog to roll for unit, bloodname, callsign, origin planet, and their name, or just access it from the Manage Campaign/GM Tools Dialog in the top bar. We’ve also added Hangar Tab Colours to better show what’s happening to units. The light purple displays any uncrewed units, while orange shows for any units missing a tech that requires one. Also, in the hanger we added the battle damage decals to show on the MekHQ sprites.

AtB continues to be a huge part of MekHQ and in the last year seen a huge increase in players using it. All of the changes impact AtB in some way, plus we’ve had fixes and improvements to it scattered all through this dev cycle, two notable ones being mission conclusion improvements and non-combatant forces.

Data-wise, we've had significant added lots of new news stories, a few new factions and updated data based on the House Arano sourcebook, added some new force icon pieces, and a new AtB preset based on CampaignAnon's excellent guide (see docs folder).

## SOCIAL MEDIA

We are also happy to announce we are starting up an [Official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). It will function like our Slack but gives us better voice support for those who use the [offical public servers](https://megamek.games).

Also a reminder to drop into the [Slack channel](https://bit.ly/2KSu5yQ) to meet other players and harass the Devs that drop in and out. If Slack isn't your thing check out these Discords with MegaMek channels - [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52).

Facebook - [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek)

## FOR MAC USERS

We think we now have a [workaround for macOS](https://megamek.org/wiki/mac_issues.html).

Another reminder when moving between versions:

1) Make backups of your campaigns and customs.
2) Always treat each release as a stand alone release and only copy your data forward from older versions.

There is a good chance you’ll have issues in MekHQ with unit name changes. If you get errors loading your campaign as result of unit name errors please [see this post](https://github.com/MegaMek/megamek/wiki/Name-Issues-with-Units).

In MekHQ, you might notice that female personnel may have a box, underline, or an additional space between their given name(s) and surname(s). This is due to an issue for certain non-Latin characters in names in our name text files. This has been fixed, but unfortunately could not be fixed in save files through migration. A extra space can be removed by deleting it (provided the new given name makes sense), but any boxes or underline will require manual fixes. We would recommend doing so by comparing the name to what is in the data/names/firstnames_female.txt file, and replace any names that you find have issues with those located in said file.

## CHANGE LOGS (for this release only) AND DOWNLOAD LINKS

### MegaMek

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.48.0)

* PR #2638, #2640: Turret data fixes
* Data: Updating Snub PPC per Errata.
* Data: Fixing possible range issue with Clan HMG.
* Issue #2639: Melee Specialist SPA Description Uses Internal Name
* Issue #2512: Check Small Pilot ability for LAM and Aero Piloting Skill Rolls
* Issue #2625: Change the default toggle chat to backquote / grave
* Issue #2662: Prevent error logging from crashing server when checking whether LAM with bomb bays has inferno ordnance
* Issue #2666: Take into account center torso when checking LAMs for available bomb bays to load bombs into
* PR #2668: Prevent skidding units from collapsing bridge "basements" when going under them
* Issue #2681: Fixing GameTurn Entity Check NPE
* Issue #2528: Undo during movement recalculates LOS
* PR #2686: Distance Null Coordinate NPE
* Data: Lots of new spites, new boards (Flynn, SimonLandmine), unit file fixes
* Removing Print text and disabling the "Bing"
* PR #2689: Random Skill Generator: Fixing AND Comparison
* Issue #2676: Clan Heavy Machine Guns - No Range
* PR #2690: Orphan control for destroyed entities to prevent soft-lock when loading save after destroying a unit
* Data: Fixes for #2693, #2680, #2679, #2678, #2677, #2674, #2653, #2644, #2629
* Data: New Sprites
* Data: Improved SRM's range and Aero damage wrong.

### MegaMekLab

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.48.0)

* No Changes since 0.47.17

### MekHQ

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.48.0)

* Issue #2427: Exception during maintenance on a new day breaks MekHQ
* Issue #2431: Fix exception exporting personnel to CSV
* PR #2437: Hangar Report: Fixing Wrong Node Addition for Medium Wheeled
* PR #2381: Repair Tab: Adding better information blockers for Null/Void Signature System and Chameleon Shield
* Issue #2441: Adding Force Icon Pieces: numerous Alphanumerics and the Vehicle Assorted Type.
* Issue #2429: Awards Documentation: Fixing Minimum Excel Version, Removing Duplicated Images, Double Spacing
* Issue #2442: Fixing Multiple Ranks Issues
