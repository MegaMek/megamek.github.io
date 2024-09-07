Hi Everyone,

The development cycle for 49.20 has been incredibly busy! It's one of the largest we've ever done, with 277 specific pushes to the various repositories. As you’ll see, there’s some amazing stuff coming your way. It's so massive that we've had to change the format of the release notes to avoid it being a release novel!

Before I get into specifics I want to give a shout out to the entire Dev team and all our contributors, new and old for the sheer amount of work in this release. If you're a fan of the programs make sure to drop a thanks for them on our [Discord](https://discord.gg/megamek) or here.

But before we get into all the stuff in this release, [make sure to give this very important post a read if you haven't.](https://megamek.org/2024/05/30/Prepare-for-the-Transition-to-Java-17-Upcoming-Changes-and-How-to-Stay-Updated.html). The TLDR is that this will be the last release using Java 11. Later this summer, We are starting the 0.50.0 release cycle and it will ***REQUIRE*** Java 17.

A word of caution: this release has so many code changes in so many areas that we don't anticipate this being a MILESTONE and truthfully will likely have bugs. But we need players to use it to find those bugs.

But let's get into all the new stuff.

### Release Highlights for MegaMek
#### New Features
- [**Improved Flight Path Indicator**](https://github.com/MegaMek/megamek/pull/5301): Aerospace units now display a significantly enhanced flight path indicator during movement planning.
- [**Font Customization**](https://github.com/MegaMek/megamek/pull/5321): Commanders can now customize the font used for round reports in the client settings, allowing for a more personalized and readable debriefing experience.
- **Light Conditions Support**: MegaMek now supports the light conditions "glare" and "solar flare." These new atmospheric conditions will challenge your tactics and visibility.

#### Improvements
- **Princess AI Improvements**: Princess continues to pick up optional classes at Blackjack. Her instructors have commented they are seeing her better manage ammo, looking for more and better routes, and handling specific conditions like black ice. She's looking forward to being able to go to more prestigious academies now that they are available.
- **Skin Editor Rework**: The Skin Editor has been reworked and is now fully functional again, with default saving to the user directory when available. This allows for easier customization and sharing of unit appearances.
- **Code Internals and Cleanup**: We've made numerous behind-the-scenes improvements to make the game run smoother and prepare for exciting new game types. This includes tidying up the way text is drawn on the screen, making it easier for the game to manage and display information, and simplifying some complex parts of the code to make the game more efficient and stable.
- **Symbol Fonts and Icons**: Added Google "Material Symbols" font and made various unit icon corrections. These enhancements improve visual clarity and consistency across the interface, making it easier to identify units and statuses at a glance.
- **Force Display and Tooltip Generation**: The force display will now have a default size to prevent it from starting fully collapsed. BoardView tooltip generation has been made modular, providing detailed terrain info in the Board Editor and enhancing usability during battles.
- **Accessibility and Safety Enhancements**: Improved cleanup and safety for accessibility windows, and made various parts of the game safer from errors. These enhancements provide a more robust and user-friendly interface.

### Release Highlights for MegaMekLab
#### New Features
- [**Copy Units to Clipboard**](https://github.com/MegaMek/megameklab/pull/1517): Units can now be copied to the clipboard with Discord formatting applied, enhancing ease of sharing and collaboration.

#### Improvements
- [**Table Readability and Performance**](https://github.com/MegaMek/megameklab/pull/1510): We have a new contributor who has been doing a lot of work to improve the readability of tables and give a smoother and clearer look and feel.

### Release Highlights for MekHQ
#### New Features
- [**Story Arcs**](https://megamek.org/2024/03/29/Introducing-Story-Arcs-Beta-Test.html): MekHQ has evolved from managing TableTop campaigns to incorporating the "Against the Bot" (AtB) spreadsheet and Stratcon, leading to countless Merc units' adventures. But we've always wanted to have a branching narrative tool in it. We've now implemented the first part of the architecture for story arcs. When complete, this feature enables users to craft their own Starterbooks-style campaigns or custom Mek-based adventures. We've included a special campaign to see how this will work. Called the "Young Wolves" campaign, it delves into the Refusal War of 3057.
- [**Education Module**](https://github.com/MegaMek/mekhq/pull/4054): This introduces the education and training of personnel, allowing users to send their personnel to academies and universities. Personnel attending these academies receive bonus XP and skill levels. While away, various events can occur, including the possibility of needing to resit classes, graduating with honors, or washing out. Travel to and from campuses has been abstracted but remains included, as does the consideration of campus destruction or closure. This module caters primarily to MekSims users, adding depth and realism to the game's education system. This feature supports over 200 canonical schools explicitly mentioned in canon sources and the ability to create custom ones, expanding educational options and improving character development.
- [**Turnover and Retention Module**](https://github.com/MegaMek/mekhq/pull/4101): Replaced the old retirement system with a new Turnover and Retention Module. This module introduces a range of campaign options that let you tailor it to fit your playstyle. Changes include minimum service contracts to reduce personnel turnover, revamped payouts, and clear distinctions between retiring, resigning, and deserting personnel. No more contracts where MekWarriors walk away with a fortune after a short stint in the barracks! Additionally, Shares are now linked to new code that tracks annual profits, ensuring personnel leaving with shares only take a percentage of your campaign's annual profits.
- [**AutoAwards System**](https://github.com/MegaMek/mekhq/pull/4008): Introducing the Automatic Tracking of Awards Eligibility System (autoAwards). This smart system tracks your personnel's achievements and automatically notifies you when they qualify for an award. AutoAwards supports custom award sets, making recognition easier than ever.
- **New Morale Level**: Introduced a new morale level to curb invincible morale spikes in AtB & StratCon, enhancing gameplay balance.
- **Life Paths Campaign Options**: Added a Life Paths Campaign Options Tab.

#### Improvements
- **Dialog and UI Enhancements**: Numerous updates to dialogs, including the Customize Scenario Dialog, Acquisitions Dialog, and various tooltips for better clarity and user experience.
- **Fatigue and Award Tracking**: Improved GUI support and mechanics for fatigue and automatic tracking of award eligibility, ensuring accurate representation and recognition of character conditions and achievements.
- **Personnel and Scenario Management**: Enhanced personnel management features, including handling multiple enrollments and logs, updated scenario modifiers for consistent map sizes, and clearer victory point designations.
- **Font Color Options**: Added new font color options for negative, positive, and warning events, improving readability and customization.

### Java 11 and 17 is _Required_ for all 0.49.x releases
We've updated to Java 11. To use the **0.49.x Development branches**, an update is needed. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). Help pages for [Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) and [Mac](https://megamek.org/wiki/mac_issues.html) users are available. Linux users should use their package manager to install Adoptium Temurin.

This release also supports Java 17, which has undergone some testing. More player usage is needed, but Java 11 remains our recommended version.

## A Few Reminders:
### State of the Universe (January 19, 2024):
If you haven't given the [State of the Universe (read here if you missed it)](https://bg.battletech.com/forums/index.php?topic=83774.0) a read, please do. There's lots of information in there that is still recent and relevant.

### The Milestone System Summary
Please see [this link](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) for details on the replacement for the old Stable and Development cycle.

### User Data Directory for MegaMek, MegaMekLab, and MekHQ:
We've added a customizable **User Data Directory** feature. This allows you to set a single external directory for storing game resources like units, camos, and fonts, which is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ.

#### Key Points:
- **Set a Custom Directory:** Choose any location on your computer (e.g., D:/myMMStuff) to keep your game resources.
- **File Placement:**
    - Fonts and units (.mtf, .blk) can be placed anywhere within this directory.
    - Camo images in /data/images/camo/
    - Portrait images in /data/images/portraits/
    - Unit fluff images in /data/images/fluff/<unit type>/
    - Rank and award definition files (.xml) in /data/universe/
- **Consistent Access:** Resources in this directory are usable across different game versions and modules without needing to relocate them for each new install.
- **Implementation:** Set up this directory via the client settings. A game restart is required for changes to take effect.

### Removal of Unofficial Units Zip:
Based on feedback from our Discord and a poll where 75% of players favored this decision, we've removed the unofficial units zip from this release. This change allows us to focus on canon units.

To reintegrate the units:
1. Download the zip file from [MegaMek Extras HERE](https://github.com/MegaMek/megamek-extras/tree/master/data/mechfiles).
2. Right-click and use the "save link as" option.
3. Save it as a zip to the data\mechfiles folder of the program.
- We suggest saving it to a customs folder within data\mechfiles.
4. They will be added upon restart.

### MekHQ Campaign Files:
Remember, MekHQ campaign files **_are NOT_** backwards compatible. Moving your campaign to a newer version prevents reverting to an older one, but keeping backups allows play in both versions for comparison.

### Social Media
Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

### Contributing
Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

### Updating Your Campaign:
- Make backups of your campaigns and customs.
- Treat each release as stand-alone; copy your data forward from older versions, never backward.
- Do not copy MegaMek saves or any preference file from a different version.

## Change Logs (Release Specific) and Download Links
### MegaMek Change Log
[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.20)
+ PR #5281, #5327, #5308, #5336, #5318, #5383, #5369, #5384, #5455, #5505, #5541: Code internals: preparatory work for supporting game types such as SBF, code cleanup for string drawing, superclass change for BoardView,
  Keydispatcher aka MegaMekController simplification, moving BoardView shadowmap creation to its own class, BoardView subclassing, DialogOptionsListener update
+ PR #5295: MM now supports the light conditions "glare" and "solar flare" (TO:AR)
+ PR #5301, #5441: Aerospace units now show a much improved flight path indicator when planning their movement; use MM's symbol font for indicator symbols, also for Collapse Warnings
+ PR #5321: The font used to write round reports can now be set in the client settings
+ Fix #5333: The standard G/P values of 4/5 may now be changed in the unit selector to see different BV/PV values; this functionality must be activated in the client settings
+ PR #5319: Add Symbol Font Google "Material Symbols"
+ PR #5386, #5389, #5390: Some Unit icon corrections
+ PR #5380: Further code internals: Update mechset (icon image link) reading and icon tests
+ PR #5388, #5410, #5411: The Skin Editor has been given a rework and is now functional again; it now defaults to saving to the user directory when available
+ PR #5387: Prevent errors when ESCaping out of the main menu's Connect... and Connect as Bot dialogs
+ PR #5409: Removed code for using a background image on boards
+ PR #5406, #5425, #5461, #5528: Mounted rework
+ PR #5412: The force display will now have a default size to prevent it from starting totally collapsed
+ PR #5418: More code internals: Princess's Precognition no longer produces unnecessary packet command log messages and processes an additional packet command
+ Fix #5408: Princess has taken part in a week-long battle workshop; she will now be less conservative with ammo (and other tweaks)
+ Fix #5417: Fixes Errors and nonsensical Princess movement
+ Fix #4034: Prevent an error when trying to save a game with C3 networks present
+ Fix #5419: iATM have received numerous code corrections that should restore their behavior in bays and better Princess calculations for them
+ PR #5433: Fixes ammo handling for one-shot weapons such as RLs
+ PR #5432: BoardView tooltip generation has been made modular. Using this, a specialized tooltip has been added for the Board Editor that displays much more detailed terrain info
+ PR #5431: Internal Code changes: Methods have been added to generate an average BV value for a unit of a given type and weight for use in generating forces
+ Fix #5439: BA Partial Wing bonus not properly computed outside of games with atmosphere, breaking MML Jump MP display
+ Data: Thank you Derv for the updated Map, but also the restoration of the original NBT (Netbattletech) maps this adds over 400 new maps!
+ PR #5444, #5522, #5573: BoardView Sprite separation
+ PR #5442: Add null check for turn timer when stopping
+ PR #5451: Expose map settings methods for use in MekHQ
+ Fix #1502: Ignore armortype slots in other-equipment cost calculation
+ PR #5475: Updating Project Dependencies
+ PR #5470: Allow plain look and feel border for Megamek Button
+ PR #5467: Modernize board validity checking code
+ Fix #5465: Bay ammo correction
+ PR #5454, #5540: Added an experimental option to not automatically select a unit for whenever a turn for me comes around
+ Fix #5452: AS advanced search and rear weapon conversion
+ PR #5450, #5501: ClientGUI adaptations
+ PR #5445: Game Systems Refactoring for future support of SBF.
+ PR #5468: Make BombMounted a subclass of AmmoMounted
+ Fix 5483: Make various calls safer from NPE and ensure searchlight target on board
+ PR #5487: Accessibility window cleanup and safety
+ Fix 5482: Process weapon quirks correctly in loading/saving protomeks #5484
+ PR #5481: Name Changes Updates
+ PR #5466: Move Field of Fire Sprites out of BoardView
+ PR #5472: Use FlatLaf exclusively
+ Fix 5489: NPE from BA AP Mount due to weapon linking to AP Mount equipment
+ Fix #5516, #5532: Added CamOps Fatigue Attribute to Crew (required for MekHQ #4101 and #4116)
+ Fix #5495: DropShips can now load other units without becoming invalid (unit crews no longer count as passengers)
+ PR #5510: Add a test for invalid canon units
+ Fix #5503: Add ammo null check to prevent NPEs for firing artillery bays
+ Fix #5502: Add ammo test for CI weapons on SV damage calc to prevent NPEs when firing infantry weapons from SV units
+ Fix #5515: Remove code remnant from internal bomb bay development that added cargo bays for cargo containers
+ PR #5525, #5546: Force generator data updates to basic APCs, recovery vehicles, and some civilian units to make them no longer appear in combat OpFor units
+ PR #5531: Harjel can now be added to support vehicles in accordance with the rules
+ PR #5533, #5544: Units can now be copied to clipboard with discord-formatting applied
+ Data: Fixes for #5514, #5469, #5460, #5223, #5194 (again), #5162
+ Fix #5504: Aeros that do not require fuel should now (finally) be able to move and not show warnings
+ Fix #5523: Fighter Squadrons are able to fire ammo weapons again
+ PR #5553: (Possible) fix to dedicated server loading issues (related to #5539)
+ Fix #5547: Fixing a bug coming from a duplicate artillery overlay added to the game map
+ Fix #5548: Fixing a bug trying to get line of sight issues for the tooltip
+ Fix #5542: Fixing the game not progressing to a round that has reinforcements
+ PR #5550, PR #5562: The default state of Edge usage is now "true" (also in MHQ)
+ PR #5549: ModelRecord unit analysis has been upgraded and expanded
+ Fix #5556: Fixing Nameplates
+ Fix #5394: Fixing a logo file name
+ PR #5560: The setting to show unit sprites in reports now defaults to off, as this has turned out to be resource-intensive
+ PR #5567: Princess has learned to be careful on black ice (provided she has seen its presence)
+ PR #5568: Internal changes to FactionRecord to parse AeroSpaceFighter entries correctly
+ PR #5576: Improvements to TacOps coolant failure systems
+ PR #5586: Updated Game Options and Report Log Default Preferences
+ PR #5599: Fixing Rocket Launchers to no longer allow indirect fire
+ PR #5601: Add revision to the game log
+ PR #5589: Re-submitting role exclusions
+ PR #5600: Numerous typo and spelling fixes
+ Fix #5596: Fixing firing arc updates and projections in space, the effects of special ammo on range can now be considered also for enemy units when selected in the Unit Display
+ PR #5615: Use "Equipment Rating" instead of just "Rating" where applicable
+ PR #5608: Lobby Multiunit Customization (including setting the deployment round) will now work on one's own bot units
+ Fix #5084: Princess and using AMS as a manual weapon
+ PR #5618: Branch for typos and spelling
+ Fix #5577: Industrial hexes no longer influence units higher than their roof
+ Fix #5622: Fixes MML #1532: Total Warfare Flamer should be unofficial
+ PR #5623: adjust wind direction order
+ PR #5613: Renewing Unit Display and Keybinds in Physical Phase
+ PR #5629: prevent NPE when OS launcher is being selected in weapons panel
+ PR #5634: cannot load Support Vehicle blk files missing armor_type field
+ Fix #5569: Fix for squadron ammo weapons

### MegaMekLab Change Log
[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.20)
+ PR #1486: Code internals: DialogOptionsListener update
+ Fix #1494: Heavy gauss rifles can no longer be mounted in mek turrets
+ Fix #1490: Upon saving a unit that was loaded from file, MML will now always ask for a new filename when that unit's name is changed
+ Fix #1497: BA Partial Wing bonus tooltip incorrectly listed +2 instead of +1
+ PR #1507: Fix missing Fighter Return Table column header in CF sheets
+ PR #1510: Improve readability of tables
+ Fix #1514: Fix Atrocious table shading render speed
+ Fix #1479: The support vehicle TRO plain text no longer contains HTML tags
+ Fix #1513: Units can now be copied to clipboard with discord-formatting applied
+ PR #1519: Added a missing "(resourceMap.getString", fixing a tooltip
+ PR #1520: Removed printing of pilot Edge abilities
+ PR #1521: Fixed to-hit modifier for pilot damage on aerospace record sheets.
+ PR #1529: Don't print Edge abilities of troopers
+ PR #1529: Don't print Edge abilities of troopers
+ FIX #1533: Filter out space bomb artillery (only Arrow IV Bombs for now)

### MekHQ Change Log
[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.20)
+ PR #4005: Code internals: DialogOptionsListener update
+ PR #2997: Story Arcs Basic Architecture
+ FIX #4017: Space and Low Atmosphere not saved to xml, when started game after load the correct board type was to megamek
+ PR #3928: add glare and solar flare odds to TerrainConditionsOddsManifest.xml file
+ PR #4033: Introduced a New Morale Level to Curb Invincible Morale Spikes in AtB & StratCon
+ Fix #3359: Added Ability to Order Impossible TN Parts from Acquisitions Dialog.
+ PR #3969: Added Nag Dialog for Exceeding Cargo Capacity While Destination is Set
+ Fix #3938: Added CamOps Rank Salary Multipliers
+ PR #3924: Fatigue GUI Support and Rebalance
+ PR #4059: Fix unit tests on Large Craft Bays
+ PR #4037: Better Randomness in BotForceRandomizer
+ PR #4026: Refactor ChoiceStoryPoint and NarrativeStoryPoint with underlying abstract DialogStoryPoint class
+ PR #3980: Improved CamOps Unit Rating Handling Within Clamp
+ Fix #3931: Add new Scenario features to CustomizeScenarioDialog
+ PR #4041: Updated isChild()
+ Fix #4080: Updated Tooltips for the Marriageable & Trying to Conceive Flags
+ Fix #4083: Added Customizable Log Display Settings to Campaign Options
+ Fix #4088: MM code adaptation for boards validation
+ PR #4087: Reintegrate Pay Multiplier into Salary Calculation
+ PR #4095: Restored ranks.xml
+ PR #4094: MegaMek code adaptation
+ PR #4008: Added the Automatic Tracking of Award Eligibility and Additional Award Enhancements
  Very Important to read the documentation on this feature (See Docs folder)
+ PR #4106: Use tabs in customize scenario dialog
+ PR #4105: Updated Post-Scenario Logging for Prisoners
+ PR #4104: Fixed Post-Scenario Tracking System's Handling of Multiple Personnel in autoAwards
+ PR #4102: Fixed Award Tier Count Calculations in PersonViewPanel
+ PR #4093: Added Negotiation and Scrounge Skill Settings for Administrator Personnel
+ PR #4054: Added Life Paths Campaign Options Tab, Added Education Module
  Very Important to read the documentation on this feature (See Docs folder)
+ PR #4114: Additional Education Module Bug Fixes
+ PR #4115: Fixed Award Image Display in Person View
+ PR #4116: Added ability to Pass CamOps Fatigue to MegaMek
+ PR #4117: Even More Education Module Bug Fixes
+ PR #4118: Added autoAwards Support for the Education Module
+ PR #4119: Added Reeducation Camps to Education Module, Replaced Placeholder Academy Descriptions
+ PR #4129: Correcting a bunch of spelling errors and typos
+ PR #4101: Replaced Retirement System with Turnover and Retention Module
  Very Important to read the documentation on this feature (See Docs folder)
+ PR #4124: Fixed Award Eligibility Tracker Issuing Double Scenario Kill Awards... again
+ PR #4125: Fixed Friendly Personnel Missing Post-Scenario Scenario Credit
+ PR #4127: Fixed Clan Creche Graduation in Education Module
+ PR #4136: Updated Scenario Modifiers to More Consistently Contribute to Map Size
+ PR #4137: Tied StratCon Force Generation BV Allowance to AtB Difficulty Option
+ PR #4140: Added Dedicated Awards Panel to Personnel Tab of Campaign Options
+ PR #4141: Fixed Used Parts Value Multipliers Incorrectly Resetting to 0
+ PR #4142: Added No Commander Nag Dialog
+ PR #4143: Adjusted Founder Turnover Modifier & Updated Documentation for Turnover and Retention Module
+ PR #4144: Changed "Operational Victory Points" to "Scenario Victory Points"
+ PR #4145: Reversed Order of Personnel Logs, Renamed 'Personnel Log' to 'Personal Log'
+ PR #4146: Added Ability to Change Original Unit Assignment via Personnel Table
+ PR #4147: Set Default Edge Usage States to True
+ PR #4150: Added Unit Quality Parameter to addNewUnit Method and Related Tests
+ PR #4151: Updated Vehicle Gunner's Experience Level Calculation to Optionally Include Artillery Skill
+ PR #4153: Added Font Color Options to MHQ Options for Negative, Positive, and Warning Events
+ PR #4126: Added Ability to Manually Edit Education Level to Edit Person View & Fixed Minor Bugs
+ PR #4133: Implemented Basic Tax System, Profits Calculations, and Minor Financial Term Changes
+ PR #4134: Updated Menu Labels and Tooltips for Better Clarity and Grammar
+ PR #4135: Added Birthday Announcement Options
+ PR #4138: Added Scenario Modifier Options to Campaign Options
+ PR #4139: Added Second Chance Caste to the Education Module for Warrior Caste Washouts
+ PR #4149: Added Automatic Bonus Parts Exchange at Contract End, Added Bonus Parts Display to Mission Stats Panel
+ PR #4152: Updated Parts Acquisition Dialog in Repair Tab
+ PR #4156: Replaced Uses of Font Color 'Red' with New MekHQ Font Color Option Call
+ PR #4157: Replaced Uses of Font Color 'Green' and 'Orange' with New MekHQ Font Color Option Calls
+ PR #4162: Updated Tooltip Text for Contract Command Rights to Include Clearer Game Mechanics
+ PR #4165: Added GM Hire & Fixed Skill Level Options to Bulk Hire Dialog
+ PR #4166: Added Campaign Option to Disable Salary Increases from Secondary Roles
+ PR #4167: Fixed Missing Personal Log Messages for Resign, Desert, and Defect
+ PR #4168: Updated Turnover Frequency Logic in Turnover and Retention Module
+ PR #4169: Streamlined Management Modifier Calculations in Turnover and Retention Module
+ PR #4175: Removed Flavor Text from Breach of Contract Departure in Turnover and Retention Module
+ PR #4176: Turnover Target Number Revision & Updated Documentation
+ PR #4177: Fix NPE Resulting from Null Recruitment Date
+ PR #4158: Added Campaign Option to Randomize New Unit Quality
+ PR #4172: Implemented More Education Module Bug Fixes
+ PR #4174: Fixed Payout of 0 c-bills Causing Soft Lock in Turnover and Retention Module
+ PR #4178: Updated Family Modifier Logic, a Warring Faction Modifier, in Turnover and Retention Module
+ PR #4183: Fixed Multi-Person Original Unit Assignments in Personnel Market & Interactions with Turnover and Retention Module
+ PR #4173: Added Multiple Turnover and Retention Module Improvements
+ Fix #4182: Added Nag to Alert Users at Contract End fix
+ PR #4187: Restored Missing Code for Scenario Modifier Options & Campaign Option Layout Tweaks
+ PR #4188: Added Campaign Start Date Logging to Campaign
+ Fix #4203: Fixed Monthly Unit Market Incorrectly Filtering Out Vehicles
+ PR #4205: Fixed bug in Company Generator, add word Dragoon in front of Dragoon rating.
+ PR #4202: Added Parsing for "campaignStartDate" on Campaign Load
+ PR #4201: Fixed Intersected Conditions in CustomizePersonDialog.java
+ PR #4199: Updated PersonnelTableMouseAdapter to Support Enrolling Multiple Personnel
+ PR #4197: Updated Default Support Personnel Counts in Company Generator
+ Fix #2085: Added Variable Unit Quality to Unit Markets and Updated Unit Market Logic
+ Fix #2405: Added Variable Unit Quality to Salvaged Units
+ PR #4208: Added Numerous Improvements to the Turnover and Retention Module
+ Fix #4210: Rolled Back 'overrideBv' XML Tag, Fixing Non-Random Scenario Modifier Forces Incorrectly Generating Random Meks
+ PR #4215: Fixed Handling of autoAwards Post-Scenario Kill Tracking
+ PR #4216: Converted Shares Payouts to Use Profits Not Net-Worth
+ PR #4217: Temporarily Removed Clan Support from Education Module, Refactored Remaining Code
+ PR #4218: Added Campaign Option to Control CamOps Unit Rating Within Clamp
+ Fix #4057: Could not find a mech summary
+ PR #4237: Added Prestigious Academies (A-z)
+ Fix #4235: Fixed Invalid Parsing of Early Childhood when Loading Personnel
+ PR #4248: Fixed Missing Qualification from James McKenna University
+ PR #4224: Corrected Condition for Enabling Prestigious Academies
+ PR #4225: Adjusted Condition for Setting campaignStartDate
+ PR #4226: Updated StratCon Font Colors to use New Font Color MekHQ Options
+ PR #4227: Updated Unit Market Descriptions & Refactored Unit Market Prices
+ PR #4229: Updated Child Education Level Handling & Academy Name Generation
+ PR #4230: Updated Fatigue Display Calculations in PersonViewPanel
+ PR #4231: Added Nag for Invalid Faction & Updated Missing Federation Commonwealth Start/End Date
+ PR #4232: Updated Loyalty Handling for Reeducation Camps
+ PR #4233: Fixed and Enhanced FactionHunterAwards Processing
+ PR #4234: Fixed Total Bonus Incorrectly Applying Repeated Division in Turnover Dialog
+ PR #4251: Adjusted Step Size for Fixed Map Chance AtB Option
+ PR #4252: Added 'getCurrentPrisoners' Method, Fixed Cargo Capacity Nag Dialog
+ PR #4253: Added Option to Restrict AtB Personnel Market to Hiring Halls Only
+ PR #4254: Updated Contract End Dialog Message
+ PR #4255: Relabeled Ally & Enemy Rating in AtB Contract Market to Improve Clarity
+ PR #4256: Fixed 'Advanced Infantry Graduate' Qualifications in Prestigious Academies Missing Start Date
+ PR #4257: Adjusted Curriculum XP to Use a Fixed Value Instead of Dynamic
+ Fix #3974: Add facility description capability to StratCon
+ PR #4261: Fixed Campus Name in Education Module
+ PR #4262: Separated Officer and Enlisted Curriculums, Corrected Local Academy Data
+ PR #4263: Inverted Management Skill Modifier in RetirementDefectionTracker
+ PR #4264: Updated Education Tooltip Properties to Better Handle Mass Enroll
+ PR #4267: Replaced Non-Universal ASCII Arrow with Braces in Turnover Dialog
+ PR #4271: Corrected Scenario BV Allowance Calculations for Scenario Modifiers
+ PR #4272: Updated Turnover & Retention Documentation
+ PR #4273: Corrected Dialog Option for Invalid Faction Nag
+ PR #4275: Fixed Original Unit Value Being Deducted from Payout Sum When Personnel Resign/Retire
+ FIX #4277: enable new network creation for units not in a network
+ FIX #4279: Added Check for 'dead' Status in Various Personnel Filters
+ PR #4282: Fixed Graduation Event Failing to Correctly Trigger autoAwards
+ PR #4285: Fixed Commanders Incorrectly Displaying 0 Loyalty
+ PR #4286: Numerous Corrections to the Prestigious Academies
+ PR #4287: Added More Education Module Fixes
+ PR #4274: Added 'Override Requirements' Campaign Option for Education Module
+ PR #4291: Added Clan Adoption (Abtakha)
+ PR #4292: Switched Loyalty Rating from Static to Dynamic
+ PR #4301: Add handling for new save-time exception added by fixes to MML 1537
+ PR #4281: Added Population Check to Education Module
+ PR #4299: Extended 'Hiring Halls Only' Personnel Market Option to Capital Planets
+ PR #4300: Revised Tuition and Faction discount Calculations
+ PR #4306: Fixed & Optimized Total Profits Calculation & Removed Tax Exemptions
+ PR #4307: Fixed Faction Discount to Tuition, Fixed autoAwards Triggering when Personnel Fail to Graduate
+ PR #4308: Fixed Administrative Capacity Displaying while Turnover is Disabled
+ PR #4309: Updated Education Module Documentation, Restored Reeducation Camp Dropout Functionality
```
