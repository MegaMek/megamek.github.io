# Welcome all to 0.49.7 Development Release.

### Happy Birthday to MegaMek!

On February 18th, 2002, MegaMek was born. Looking for a way to play Table Top BattleTech with friends no longer close, Ben Mazur and a small group of developers started MegaMek. For the last 20 years it’s been a faithful recreation of BattleTech and been enjoyed by thousands of players. It's spawned MegaMekLab, Mekwars, MekHQ, thousands of spread sheets, and brought countless BattleTech players from around the world together to play. For an interesting look back in time [check out this article](https://sourceforge.net/blog/potm-2003-06)

While we would have liked to commemorate this release with a new Stable we aren't there yet! But the team and our QA players have worked hard to test this release. We think its most stable dev release in the current cycle.

Before we get to the new stuff. The Dev Team would like to sincerely thank the following:

- The makers of BattleTech (past and present) for giving us an amazing universe to play in, and a game with huge depth, complexity, and fun to play.-
- The dev's past who built the foundation upon which the current devs build and will continue to build upon.
- The contributors whose art skills, writing skills, and gift of time have made the programs better.
- Most importantly the players who's continued use of the programs, suggestions, bug reports, fun stories, and interactions have kept these programs alive.

But on to the good stuff! Check out the new splash screens and launch icons for the programs. We've also had some fun and made some digital medallions that players can use. But the biggest item here is <drumroll>.

### Company Generator (New Campaign Project Wave Two)
The Company Generator is a MekHQ change that adds the ability to take a campaign (ideally new, although that's not required) and creates a full mercenary company with the forces, personnel, units, and parts already generated and assigned. Further, it's fully integrated with Campaign Pre-sets, MekHQ Options, and the UserData folder. Customizability was core to the design, with the following being its individual options setup. Note that anything not specified uses the currently selected campaign options, while unimplemented provide hints to what's coming waves of this project (of which there are currently seven planned). The following images depict the current options setup.

![alt text](http://i.imgur.com/kx4dJ4Pl.png)
![alt text](http://i.imgur.com/gmIlANwl.png)
![alt text](http://i.imgur.com/2h78kW6l.png)


These options were used in 3025 to generate the following company.

TO&E Tab: Automatically created, named, and iconed forces with automatically assigned personnel
![alt text](http://i.imgur.com/bH9XNrTl.png)

Personnel Tab: Founding personnel, some of which have families because of the starting simulations.
![Personnel Tab: Founding personnel, some of which have families because of the starting simulations.](http://i.imgur.com/C3IvlCYl.png)

Hangar Tab: Units with their pilots, forces, and techs already assigned.
![alt text](http://i.imgur.com/O8lPNU9l.png)

Warehouse Tab: Automatically filled at a rate of 1 part per 3 in the input units, rounded normally.
![alt text](http://i.imgur.com/8TXCPHPl.png)

Some general notes on this release.
### MegaMek
This release has largely focused on bug fixes and stability improvements. They are joined by the TacOps AR Bracing Rule and huge amount of data has been added including updated Map packs, all Rec Guides are included, as well has more and more units have been getting fluff text.
 
### MegaMekLab
The Lab has had a lot of improvements and bug fixes as we continue our journey to become the best builder out there. Some of the biggest changes you'll see in this release are a rewrite of the equipment view, it now uses a natural sorting method and can be popped out to be on the assign crit tab. 

![alt text](http://i.imgur.com/ZAX2FlRl.png)

Popped Out

![Popped Out](http://i.imgur.com/wN2ebwol.png)

The Export to PDF Print Queue dialog has been rewritten.
![alt text](http://i.imgur.com/6bc9jZsl.png)
There are improvements to how equipment is being drag and dropped in the works as well. 

### MekHQ
The AtB starter guide and pre-sets have been updated for all of the latest changes, including covering using the Company Generator.
The Personnel Randomization, Retirement, and Dependent options have seen major changes for 0.49.7.
![alt text](http://i.imgur.com/A3vyzH5l.png)

The Personnel Randomization setup takes the previous setup and expands upon it to handle central system and clanner options properly. This is a long-term setup, while the new Retirement and Dependent formats are both temporarily stopgap setups to improve the option availability and their organization until we can get to their full internal implementation.
This is in addition to the Company Generator and a whole host of bugfixes.

### MekHQ StratCon Alpha
StratCon has seen a few bugfixes since 0.49.6.

###Dry Technical (but important) Internal Changes
We've focused this release on suite-wide internal changes, tons of bugfixes, errata, and new MegaMek, MegaMekLab, and MekHQ features with some of the longest testing duration we've ever done for a non-release candidate. This is especially notable given that after this release things will likely become more unstable. But its required changes required to handle underlying issues relating to MegaMek save games, MegaMek connections, and player Java 17 support.

We've added uncaught exception handling, meaning we can fix hidden or otherwise missed issues. This has already led to multiple important fixes thanks to QA and nightly build finds. We believe the current fixes handle any known causes, but new reports because of this dialog will be critical for fixing long-term pre-existing issues including currently unknown issues. If you see this dialog it will be important to open a bug report for it. 

![alt text](http://i.imgur.com/VIw5nFPl.png)

Second, and technically expanding on the above, we've continued reworking our logging setup. Namely, we've created a legacy logging setup to temporarily handle MegaMek's remaining ancient logging formats and to handle anything current and the above logging has missed.

![alt text](http://i.imgur.com/sJNobHYl.png)

Third, we continue to update our remaining dependencies to their latest releases. There are five remaining dependency updates, two of which are new updates. This leaves the three pre-existing, nasty, and extremely difficult issues. Specifically, the latter means that XStream (MegaMek's save game setup, and extremely outdated) needs a complete replacement before our next stable, JAXB (some internal XML setups) needs difficult internal updates, and JUnit (Unit Testing) needs to be migrated from release 4.* to latest 5.*. The XStream and two recent updates will be handled before the next stable release, while JAXB and JUnit are unlikely to be handled in the near future.

Fourth, we've rewritten the MekHQ readme file to explain suite status and dependencies. This is primarily for developer use, but also provides an external view into our internals. MekHQ has implemented everything outside of Javadocs (currently these are broken builds suite wide, albeit with fixes open). MegaMek has implemented everything outside of Javadocs and the Code Coverage setup (both being immediate goals). MegaMekLab is in the worst state, and we are currently unsure as to whether it's a bug, the internal code, or the current design setup causing the current issues.
Finally, we continue to clean up more of our internal underlying code issues, primarily in MegaMek.

### Stable 0.50.0 Status Update
While we are still in the portion of the current dev cycle and don't have an anticipated date for it. But we have some big things still to address before the Stable. Including adding Java 17 support, update the player save game issues, and continue to improve connection stability issues.

### Java 11
We've updated to Java 11, which means you'll need to update to use the **0.49.x development branches**. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). We have a help page [for Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) and [Mac](https://megamek.org/wiki/mac_issues.html). Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

### Social Media
We are also happy to announce we have an [official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). This is now our primary community location for the suite, providing superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We do still have the legacy [Slack channel](https://bit.ly/2KSu5yQ), which is rarely used outside of the developers. There are also the following community Discords with regular MegaMek channels, namely [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). We are also on Facebook, at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek) for our group and page respectively.

### Solaris VII Tourney
UlyssesSockdrawer has been running a popular Solaris VII campaign on our Discord that is always looking for new players. You can join in the next week, and otherwise join between cycles. Join the [Discord](https://discord.gg/u2vJ5U2QpD) for more information. 
### Mac Users
[Please check out this workaround for Mac Operating Systems](https://megamek.org/wiki/mac_issues.html)

### Contributing
[Please check out this document for contributing to the suite](https://megamek.org/wiki/I-want-to-help)

### Updating Your Campaign:
1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions, never backwards.
3. Do not copy MegaMek saves nor any preference file from a different version.

### Change Logs (Release Specific) and Download Links
### MegaMek
[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.7)
+ Issue #504: Adding View Active Unit keybind, to view active unit in Unit Display and target previously viewed unit
+ PR #3347: TacOps: AR bracing rule (mechs and protomechs can brace to get a bonus to hit on some shots, but are a lot easier to hit themselves)
+ PR #3346: Logging: Default Global Exception Handler and Standardized Legacy Logging
+ Data: New Sprites, Fluff, Issue #3355, and some general mechset fixes.
+ PR #3358: Per latest errata, transports now load infantry at the end of their movement; the infantry unit has to not have moved yet
+ Data: Fixing Dark Age availability for the Light PPC and Enhanced PPC, fixing missing TAG for BA LBX AC.
+ Issue #3379: One-Shot Advanced SRM Errata
+ PR #3381: Updating Launch4j and GRGit to latest
+ Updating to Mockito Core 4.2.0 from 4.1.0
+ Updating to Apache FreeMarker 2.3.31 from 2.3.28
+ Updating to Jackson Core 2.13.1 from 2.9.8
+ Issue #3357: Updating to Jakarta.Mail 2.0.1 from Javax.Mail 1.6.2
+ Data: Equipment Name fixes/standardizations identified with recent changes to MML equipment tab.  Biggest change was removing duplicate C3 Master entries and consolidating them in a C3 weapons folder. Includes fixes to impacted unit files. 
+ Issue #3371: Fixing TurnOrdered NPEs for null Entity game and null Player team
+ Data: Updated EVS Map Pack (I like big maps I cannot lie)
+ Issue: #3384: Swarm LRMs not available, but Swarm-I are
+ Data: Cleaning up some missing equipment flags
+ PR #3389: TAG flag correction, unused ISLightTag removed
+ Issue: #3393: Inner Sphere AC/2s Use Wrong Aerospace Range
+ Data: New Sprites. 
+ Issue #3365: Removing Force Generator's Broken 2786 Setup
+ Issue #3343: Improving the Forced Victory Phase Skip tool tip
+ Issue #3394: Restoring Save Mul Menu Item in Top Bar
+ Issues #1896 and #3378: Adding MapTextColor and WarningColor to the advanced client options
+ PR #3391: SuiteOptions: Naming standardization and finishing initial setup
+ Data: Removing Hawk SRM and Phoenix LRMs. They were ammo only and no weapon could use them. Allow a few more requested Tech Progression Fixes. 
+ PR #3402: Updating FlatLaf from 1.6.5 to 2.0.1
+ MekHQ Issue #3072: Fixing (primarily) Early Era Force Generator Faction Record NPE Due to blank being parsed as a faction code.
+ Issue #2505: Fixing Prosthetic Leg MASC To Hit and Movement mods
+ MHQ Issue #3072, Part 2: Preventing the RAT Generator from writing empty parent faction tags
+ Issue #3397: Standardizing the BasementType Enum
+ PR #3412: Improved Initial Log Message
+ Issue #3319: Fixing Unofficial On Map Predesignate Invalid Turn Processing NPEs
+ Data: New Sprites, Various name fixes in Force Generator Files adding final Rec Guides.
+ PR #3420: RAT Generator editor fixes
+ Issue #3363: Apply Zweihander damage to both arms when using an improvised club
+ PR #3428: Creating a standard FontComboBox
+ PR #3432: Attack Handler: Fixing return packet NPE and Improving Logging
+ Data: New Sprites, unit file fixes and ForcePack Wolf Dragoons.
+ Issue #3444: Clan Tech base can have Artillery pieces but Ammo for them is not available.
+ Data: Updated Force Generator to include RecGuide 16, Updated Flynn, SimonLandmine, Ulysses Map Packs, Updated Camos and new sprites.

### MegaMekLab
[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.7)
+ Issue #901: Fixing Manual BV
+ PR #995: Adding ilClan era image to record sheets, correcting era dates
+ PR #993: Logging: Default Global Exception Handler and Standardized Legacy Logging
+ PR #997: Adding Config Colour for Unhittable Crit Slots (Endo, etc.)
+ Issue #1001: Add ProtoMek Myomer Booster Run MP to RS
+ Issue #295, #408: Equipment View
+ PR #1007: Updating Launch4j and GRGit to latest
+ Issue #991 - Text Overlap Issue - Record Sheets
+ Issue: Fixes C3 issue in StringUtil / UnitUtil as part of MegaMek C3 consolidation.
+ PR #1009: Improved Equipment Sorting
+ PR #1014: SuiteOptions: Naming standardization and finishing initial setup
+ Issue: Removing references to deleted ammos (Streak MRMs, Hawk SRM, Phoenix LRMs)
+ PR #1015: Improved MML Settings Dialog
+ Issue #984: Fixing No MUL Pilot Data for BA
+ Issue #1010: Improved Unit Print Queue Dialog, with the ability to Print Multiple Cached Units
+ Issues #985, #988: Sponson, Shoulder, and Head Turrets need to include all equipment in turret for Turret Weight
+ Issue #1008: Set the correct minimum size value for all variable size equipment
+ Issue #1012: Conventional Fighters can only select standard fusion and ICE engines (XXL Removal being Pending Errata)
+ Issue #1016: CASE / CASE II note is now printed with the header of all locations that have either system
+ PR #1018: Improved Initial Log Message
+ Issue #932: Correctly hides/disables fuel fields for Support Vehicles that don't use fuel
+ Issue #1002: Display an error occured message when printing RS to a file that is locked
+ Updating Apache FOP from 2.6 to 2.7
+ Issue #1026: Added Coolant Pod to Other category check in EquipmentDatabaseCategory

### MekHQ
[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.7)
+ PR #3043: Logging: Default Global Exception Handler and Standardized Legacy Logging
+ Issue #3040: Fixing Unit Icon Filename Write Copy/paste Error
+ Issue #3038: Fixing missing Personnel Table Integer Comparators
+ PR #3048: Fixing C3 filename
+ PR #2938: Initial MHQ Suite Locale Setup, Proper Date Localization
+ PR #2992: Personnel Modules: Retirement / Dependent Stopgaps: Expanded Options, Ability to Disable
+ PR #2856: New Campaign Project: Random Origin Options Rework
+ Issue #2974: Windows Build Unix Script MML Startup Script Missing
+ PR #3054: Ensure Proper UserData Folder Inclusions
+ PR #3055: Updating connectors to Randis IV and Collean, and removing duplicated data
+ Issue #2947: Reset Skill Minimum upon scrap
+ Issue #2897: Prevent Loading of parts with invalid part ids
+ Issue #2928: Return a Null Refit When The New Entity Can't Be Parsed
+ PR #3060: Add shifting wind direction and strength to Scenario
+ PR #3066: Add sucsId to planetary systems data
+ PR #3052: Abstract Icon: Force Icon Piece Cleanups
+ PR #3068: Change dates in system_events.xml to all have the same format
+ PR #3070: Fix faction codes
+ PR #3074: Updating Launch4j and GRGit to latest
+ Updating jFreeChart and Joda Time to latest
+ Updating Apache Commons Text to 1.9 and Apache Commons CSV to 1.8
+ Updating to Org.Commonmark 0.18.1 from Atlassian Commonmark 0.13.0
+ Updating to Mockito Core 4.2.0 from 4.1.0
+ Issue #3063: Increasing default Start Game Delay to 1,000 from 500
+ MekHQ Options: Defaulting New Day Force Icon Operational Status to True
+ Issue #3062: Preventing NPE when a Tech doesn't get returned by Campaign::getPerson
+ Issue #3075: Adding missing kills sorter
+ PR #3085: Integrate faction changes from 3151 SUCS data, removing PIND faction
+ PR #3086: Finishing PIND faction removal
+ Fixing JàrnFòlk and Fiefdom of Randis faction names
+ PR #3087: SuiteOptions: Naming standardization and finishing initial setup
+ PR #3091: Allow traitor units in scenarios
+ Issue #3072: Fixing (primarily) Early Era Force Generator Faction Generation NPE
+ Issue #3076: Add Paperdoll Fallback For Unimplemented Composite Handling
+ PR #3080: Fixing CancellationException During Cancelled Startup
+ PR #3096: Improved Initial Log Message
+ Issue #3102: Fixing Contract Completion Retirement ConMod
+ PR #3007: Skill Generation: Phenotype Bonus Applies to Proper Skills
+ PR #3020: New Campaign Project: Campaign Options Pane
+ Fixing Republic of the Barrens faction name
+ Fixing Starting Contract Count label so it says it's not implemented
+ PR #3033: New Campaign Project: AtB Company Generator
+ CampaignAnon Starter Guide v4.0, with New Campaign Project coverage
+ PR #3121: Replacing MHQ's Startup GUI with a modified version of MML's
+ PR #3122: Adding Font Directory Parsing

Enjoy everyone, Seyla!
