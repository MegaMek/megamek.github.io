---
layout: post
title: "Looking Ahead and Looking Back: MegaMek Development Update 2025"
date: 2025-08-15
---

# Looking Ahead and Looking Back: MegaMek Development Update 2025

*By Hammer*

We've been relatively quiet these past few months as we've worked through licensing changes and repository restructuring. It's time for a general update on where the projects stand and where they're heading. This isn't a full State of the Universe address—think of it more as a snapshot of where we are today and how we see things coming together for the foreseeable future.

## An Incredible Year of Development

I'll be honest: this year has been incredible. In the first seven months alone, we pushed an amazing amount of code with the largest number of developers and contributors we've ever had working on the project. We then started a code embargo at the beginning of summer to handle the repository updates and licensing changes across all files in all programs. Even with this necessary pause for restructuring, the output for the year has been unbelievable.

But like all open-source projects, change is constant. People come, people go. And as we look ahead, we're seeing this natural evolution happening.

## The Rest of 2025: Managing Expectations

As we look toward year's end, we're experiencing some transitions. Some developers have left, others have needed to slow down, and some contributors have gone quiet. This is normal—the project has thrived for 23 years and will continue, though the pace is likely shifting again to a slower tempo.

The licensing and restructuring changes are taking much longer than anticipated, which will impact our release schedule for the rest of the year. We released the 0.50.06-MILESTONE, and I'll be honest with the community: it just barely meets our milestone standards. But we absolutely needed a milestone to push forward with everything required for the coming years.

### About Version 0.50.07-Development

Many of you have asked about 0.50.07-Development's release date. Let me be transparent: it will likely be a buggy development release. The volume of code refactoring we've done over the past two months to align with licensing changes will inevitably introduce bugs.

We originally hoped to drop 0.50.07-Development at the end of August, but the restructuring is taking longer than anticipated—we were overly optimistic. As of today, we're looking at:
- Two to three more weeks of code restructuring
- A couple weeks of testing

Best case scenario: 0.50.07-Development releases end of September. Realistically: mid-October is more likely.

I know this is a long gap between releases, and we're warning you it may be buggy. But we hope players understand that while this causes short-term frustration, it will greatly benefit the project long-term.

## Project-Wide Updates

### New Development Team Addition

We've moved long-time contributor Dgorsman to the development team. They're diligently updating force generator files that drive OpFor creation across all three programs. These modernized files already produce more interesting forces and bring our data to the ilClan era. This is a major positive development that will benefit MegaMek battles, MegaMekLab unit availability, and MekHQ campaign play.

With Dgorsman moving to the development team, I'll be stepping back from managing and handling the data aspect of the projects. I'll still dabble, but the majority of data work will now go through them. Over the last few years, my role has evolved to be more of a community liaison and project lead. While I wear this second title with great humility as I'm not a coder, as one of the longest-serving members of the development team, I've become something like General Kerensky before the Exodus—the old soldier who's seen every battle, trying to hold the Star League togethe[r](https://youtu.be/m_MaJDK3VNE?si=dlJ9a-rMP8yz8R9U) while knowing when to make the hard calls. Sometimes leadership means rallying everyone behind a vision, and sometimes it means saying "No, we're not implementing that feature, it would tear the codebase apart."

## Project Infrastructure Updates

### Licensing Changes

We've completed the necessary communication period for contributors to decide whether they want their content included under the new licensing structure. I'm happy to report that through our outreach and community response, we've maintained everything except a few tilesets. For full details on the licensing changes, see our [comprehensive announcement from May](https://megamek.org/announcements/licensing/2025/05/25/Important-Update-MegaMek-License-Changes-Coming-with-Version-0.50.07.html).

Our community survey revealed that the tilesets we need to remove aren't widely used—they're older sets, and most players are comfortable with the default Saxarba tileset. The following will be removed:
- Atmospheric
- BW_Atmosphere
- HQ_Atmospheric

Since we couldn't secure permission, these won't be available even as optional downloads. If you want to keep using them, I recommend backing them up from 0.50.06-MILESTONE. What you do with your personal backups is your choice, but we cannot include them in future packaging.

### XML to YAML: Modernizing Data Management

For years, our data has lived in XML files—easy to package at the time, but increasingly problematic. As more players edit XMLs without understanding the structure, bugs and crashes result. While XML isn't particularly hard, its formatting requirements can obscure the actual data.

We're systematically moving all data to YAML files—each planet gets its own file. Eventually, house units (like the Davion Heavy Guards) will have individual YAML files. This format makes it easier for players to contribute and modify data like system ownership. It also provides a clearer structure for managing factions down to individual military units.

This will take a few years to complete, but we're well underway. The bad news: players with customized XML files will need to handle conversions themselves, as we lack the resources to provide conversion tools. While I know AI tools are controversial to some, ChatGPT, Co-Pilot, Claude.ai, and Gemini have all been successfully tested for XML-to-YAML conversions. However, we're not prepared to provide specific instructions for using these tools—our limited development resources must stay focused on our own conversions and code.

## MegaMek Updates

### CASPAR/ACAR/PACAR: A Pause in Development

This update saddens me. We started with great optimism about creating [CASPAR](https://megamek.org/2025/02/28/Princess-vs.-CASPAR-A-BattleTech-Tale.html), but creating a new AI from scratch is no easy task—just look at any game ever made to see that AI is typically the biggest challenge. We're fortunate that Princess, while occasionally sociopathic, works well for our needs.

We're pausing CASPAR development for several reasons. The primary developer for CASPAR, ACAR, and PACAR has left the projects. We don't know when or if they'll return, and we lack the resources to continue expanding these systems. We'll maintain Princess logs in case we can resurrect CASPAR, but for now, we consider this time well spent exploring alternatives. The work even led to some improvements to Princess along the way.

ACAR and PACAR will remain in the program and stay functional, but further improvements are unlikely, and bugs may remain open for a while. It was a unique concept that really needs their original developer to handle properly. We hope they'll return, but we must plan as if they won't.

## MegaMekLab Updates

### FrankenMeks: Waiting for Clarity

Earlier this year, we discussed implementing FrankenMeks in MegaMekLab. While we've made some progress, we're currently stuck waiting for rules clarifications from the game designers.

The core issue is that the ruleset for these units contains ambiguities. Humans can interpret and fill logic gaps when playing tabletop, but code requires precise rules. Until we receive official clarifications on construction logic and gameplay mechanics, we cannot properly implement these units in either MegaMek or MegaMekLab.

We've committed to making anything buildable in MegaMekLab also playable in MegaMek—no more construction-only frustration. Therefore, FrankenMeks remain on hold until we get the answers we need to implement them correctly in both programs.

### Handheld Weapons: Awaiting Implementation

You may have noticed we've added handheld weapon construction to MegaMekLab. While the construction side is complete, implementing playability in MegaMek requires additional work.

The developer handling this feature needed time away but is returning to tackle the gameplay implementation. Like FrankenMeks, we suspect we'll need rules clarifications from the game designers to ensure these weapons work correctly in actual play.

We're committed to making these weapons fully functional in both programs—buildable in MegaMekLab and playable in MegaMek. Until then, they remain construction-only. We have no ETA, but this will be an exciting addition once complete.

### Fluff Pack: A Moving Target

This passion project of mine has been years in the making, and I take full ownership of not getting it across the finish line yet. The challenge isn't just technical—it's keeping pace with the ever-expanding BattleTech miniature line.

Every time new minis are released or existing ones are repainted, our target shifts. We need to carefully manage both the number and size of images to avoid bloating the programs, while ensuring we have the right images that align with current miniatures. Additionally, these images need to be properly integrated into our data structure, which is simultaneously converting from XML to YAML.

Bottom line: we'll keep working on it with no ETA, but it will come out if it's the last thing I ever do.

## MekHQ Updates

### In This Release (0.50.07-Development)

#### Personnel Market Overhaul

We've completely [revamped the Personnel Market system](https://megamek.org/2025/08/02/Overhauled-Recruitment.html), transforming recruitment from a routine task into a strategic challenge that reflects BattleTech's gritty realism.

The new system replaces daily recruitment with monthly rolls, where your success depends on location, faction standing, and unit reputation. Three market types offer different experiences: the fully immersive MekHQ Market (location-based with hiring halls and population factors), CamOps Revised (official rules with added professions), and CamOps Strict (pure rulebook implementation).

Key improvements include:
- **Strategic Planning Required**: Travel to populated worlds with hiring halls for better recruitment odds
- **Reputation-Based Quality**: Elite recruits won't join green units—earn better personnel through battlefield success
- **Golden Hello Option**: Offer one year's salary upfront to attract higher-quality candidates
- **Dependent System**: Untrained hopefuls appear monthly, perfect for units investing in education
- **Faction-Aware Generation**: Personnel types match your location, era, and local factions

The system ensures all necessary professions are available (no more missing Administrators) while preventing anachronisms like ProtoMek pilots appearing in 3025. With recruitment now tied to Campaign Ops Reputation, falling below -25 means only pirates and mercenaries will consider joining your unit.

#### Faction Standings: The Politics of War

We've implemented a comprehensive [Faction Standings system](https://megamek.org/2025/07/26/Introducing-Faction-Standings.html) that brings political consequences to your campaign decisions. This system is distinct from Force Reputation—while reputation measures your professional prestige, Faction Standing is about trust, loyalty, and politics.

Key features include:
- **Regard System**: Measured from -60 (hated) to +60 (beloved), your standing with each faction affects everything from contract availability to special rewards
- **Accolades and Consequences**: Earn rewards like cash bonuses, free 'Mechs, or propaganda support when in favor; face fines, leadership purges, or even disbandment when you fall from grace
- **Ultimatums**: Major historical turning points where neutrality isn't an option—the Amaris Coup, ComStar Schism, or FedCom Civil War force permanent campaign-altering choices
- **Climate Regard**: Faction attitudes shift based on historical events (e.g., the Draconis Combine hating mercenaries after the 4th Succession War)
- **Piracy Success Index**: Pirates use a separate system entirely, gaining PSI through successful raids while risking legal crackdowns

Changing sides or defecting carries real consequences—loyal crew may abandon you or die in transition, and your old faction will blacklist you permanently. The system evolves through eras, shifting oversight from the MRB to MRBC to Clan Sea Fox's MBA, keeping your campaigns historically grounded.

### Core Systems Update

#### StratCon: Feature Complete and Future Plans

StratCon has become the primary way to use MekHQ. Internally, we view it as feature complete. We don't anticipate adding much more, though there may be refinements to surrounding systems and OpFor creation.

One upcoming change: we'll continue decoupling Against the Bot from StratCon. When AtB was implemented years ago, MekHQ was in its infancy, and our implementation approach wasn't ideal. Currently, StratCon, AtB, and plain MekHQ (the campaign management tool) are so intertwined that fixing or improving one often breaks another.

Once decoupled, we'll eventually decommission Against the Bot, leaving StratCon and the MekHQ campaign management tool. I anticipate this happening within the coming year. On the surface, you'll notice few changes—just the removal of some options.

For those asking why we can't keep AtB: it's simple. Keeping it means bug reports from players using a frustrating, outdated system. We've determined it's better to retire it. This removes technical debt and allows us to tweak StratCon without worrying about impacts to multiple systems.

### In Active Development

#### A Time of War: Character Development Reimagined

Something you may have seen discussed on Discord is our implementation of A Time of War character development for player units. This has always been planned, but I want to clarify what we're building and set appropriate expectations.

We're implementing a character creator based on AToW, mostly following the rules but with concessions made for MekHQ. Characters created with our system won't be identical to those made manually following the AToW manuals—we've had to adapt certain mechanics like experience points to work within MekHQ's framework. However, they'll be close enough that a game master familiar with both systems can convert between them.

What's coming first is the Life Path builder—the foundation for the upcoming Advanced Character Builder. By itself, the Life Path builder doesn't create characters; it creates the templates and paths that the full character builder will use. Think of it as building the toolkit before building the tools.

This system will have full support for the user data directory, maintain our Milestone-to-Milestone compatibility promise (just like saves), and include a one-click resave option to upgrade all custom life paths across versions with minimal fuss. The character creator itself should be available later this year or early next. We won't be adding Destiny support, but we will include the ability to randomly generate NPCs, expanding the character roster of player commands.

I have to share the developer's closing thoughts on this system: "This whole system is unbelievably cool. And I don't mean our implementation—we're just standing on the shoulders of giants. The AToW writers have done a fantastic job of capturing the tone and feel of each faction. I've always liked AToW conceptually, but this project has given me a real respect for what they've accomplished."

It's our hope that bringing RPG elements into MekHQ—especially the character builder—will reinvigorate interest in AToW and add new depth to campaign play.

{% include carousel.html
id="atow-carousel"
folder="/assets/images/AToW_Builder/" %}

#### Company Generator Rewrite

Currently focused on creating Mech companies, players want generation of larger, multi-unit-type forces. The new generator (in design phase) will use MegaMek's Force Generator systems. This will allow for more diverse and realistic force compositions.

### Awaiting Resources

#### Planet Editor: Building the Foundation

As part of the planetary rework, we've introduced an alpha systems editor that will be a top priority once the developer returns. You can try the [current alpha version here](https://aaron-gullickson.shinyapps.io/planetary_system_editor/)—but please note this is very much in development and may have bugs or incomplete features.

Players have long wanted the ability to create alternate universes or see their military victories reflected in the game world. The editor will enable dynamic gameplay where successful planetary assaults change system ownership, potentially triggering future contracts as opposing houses attempt to reclaim lost worlds. While it's not true AI strategy—more of a simple card trick—it adds meaningful consequences and narrative continuity to campaigns.

We hope for progress this winter, but with the developer's return uncertain, we can only confirm it remains a priority to complete when resources allow.

#### Story Arcs: The Long Road

Story Arcs has been in planning for years. We currently have one story arc—Lone Wolves—which works, though some of our MekHQ modernization has affected certain options.

The challenge with Story Arcs is creating them without proper tools. The original developer can only work on the projects a couple months per year. When they returned earlier this year and we reviewed community feedback, it became clear we need a planetary systems editor and further planetary system rework first, not a Story Arcs editor.

This initiated our move from monolithic XML files to a more nimble YAML format. While we're committed to completing Story Arcs eventually, we face a chicken-and-egg problem: we need an editor that allows regular people to write story arcs, then we need creative, story-minded people to write them. Until we have that editor, Story Arcs will remain in its current format with development paused for the foreseeable future.

## New Milestone Timeline

We recognize we'll need a new milestone sooner rather than later. We don't like talking specific dates, but 0.50.07-Development won't be a milestone. Looking at our remaining time this year, 0.50.08-Development will likely be the last release of 2025, and probably won't achieve milestone status either.

Depending on bug counts in these next releases, we could have a new milestone by Q1/Q2 2026 if we can effectively squash bugs. While it may seem counterintuitive, we encourage players to play through each release rather than waiting for milestones. More players mean we find, track, and kill bugs faster—which means quicker milestones.

## Looking Ahead: Reasons for Optimism

Reading the above, you might think the projects aren't in a good place—but that's far from true. They're in a very good place.

To borrow from my earlier Kerensky reference: I've been standing watch over this Star League for a long time, and what looks like crisis to new recruits is just another Tuesday in the Inner Sphere. Developers leaving? That's happened before—we adapted. Features getting paused? We've weathered worse storms. The difference is that after 23 years, we know these cycles are normal. Sometimes you're defending against a Clan invasion, sometimes you're rebuilding during peacetime. Right now we're in one of those "garrison duty between wars" phases—not exciting, but necessary for the long campaign ahead.

The code and licensing changes position us better for new coders to join and learn as contributors. The licensing protects IP holders and us, while opening doors for us to ask for fundraising for specific needs like art or infrastructure support when necessary. Let me be absolutely clear: MegaMek will always remain open source and free. We're a fan project built on love for BattleTech, not a business venture. Any fundraising would be rare, specific, and transparent—think "we need $500 for server costs" or "help us commission a new tileset," never "donate to support development."

While the development team is smaller in the second half of 2025 than the first, this is normal ebb and flow. Think of the first six months like the Amaris Civil War and First and Second Succession Wars—high tempo, high pace, lots happening. Now we're entering our version of the Third Succession War—a quieter period where big things still happen alongside many smaller improvements.

If you code, want to learn to code, or have a head for coding, we're open source and welcoming to those who want to contribute—provided they adhere to our [guidelines](https://github.com/MegaMek/megamek/wiki/Developer-Expectations) and have passion for the BattleTech universe. Don't be afraid to visit [Discord](https://discord.gg/megamek) and ask.

And while I can't say much more about it, we are working on something absolutely epic. It's truly a first for the projects and something I never thought I'd see. It'll be a game changer for BattleTech players. We'll have more to say this fall.

## Thanks for Reading

The journey continues, and we're grateful you're part of it. Every bug report, every contribution, every game played helps make MegaMek better for everyone.

Seyla!