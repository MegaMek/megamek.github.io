---
layout: post
title: "2025 State of the Universe"
date: 2025-02-18
---

# 2025 State of the Universe

<div class="container">
  <img src="/assets/images/SOU/MMek_Awardceremony_finfull.jpg" 
       alt="MegaMek Award Ceremony" 
       class="responsive-image">
  <style>
    .container {
      width: 100%;
      max-width: 1200px; /* Adjust this to your preferred maximum width */
      margin: 0 auto;
    }

    .responsive-image {
      width: 100%;
      height: auto;
      display: block;
      max-width: 100%;
    }
  </style>
</div>

Following the warm reception of [our first State of the Universe](https://megamek.org/2024/01/19/State-of-the-Universe!.html), we're excited to share another comprehensive update on MegaMek. As well as wish it a Happy 23rd Birthday!

<div class="container-small">
  <img src="/assets/images/SOU/MegaMek%2023%20Year.png" 
       alt="MegaMek 23 Year Anniversary" 
       class="responsive-image">
  <style>
    .container-small {
      width: 100%;
      max-width: 25%;
      margin: 0 auto;
    }

    .responsive-image {
      width: 100%;
      height: auto;
      display: block;
      max-width: 100%;
    }
  </style>
</div>

Traditionally when we do these we don't like to use "I", because MegaMek is a team...and yes there is no "I" in team. But I'd like to take a moment to provide some context.

I'm Hammer, one of the longest-serving members of the team. I began contributing to the projects in 2011 and officially joined the team in spring 2013, making me a veteran of the group. Initially, I replaced DarkISI as the data specialist, but my role has since evolved to include most of the community management and serving as the public face of the programs. In 2024, I was volun-told I was the Project Lead by the other Developers. Although I'm not a coder and no longer focus much on data work, my experience has allowed me to work closely with everyone, bridging the technical and community aspects of MegaMek and the larger BattleTech community.

My journey with MegaMek predates MekHQ, going back to the era of MegaMek Solo War and "Against the Bot: The Spreadsheet Edition." Reflecting on 2024, it has been an exceptional year for the projects. I've never witnessed such a remarkable combination of code contributions and community growth. The expansion in both our community size and program capabilities has been extraordinary.

## Some Thank You's

<div class="container">
  <img src="/assets/images/SOU/Mmek_Mercpeace_500x350.jpg" 
       alt="MegaMek Merc Peace" 
       class="responsive-image">
</div>

My words from last year still echo true this year...

On behalf of the development team, we express our heartfelt gratitude to everyone who has contributed to the evolution of these programs:

- The creators of BattleTech, past and present, whose rich universe and intricate game mechanics continue to inspire us. Your work provides the foundation for everything we do.

- Our predecessor developers, whose groundwork enables today's innovations and future possibilities. Your legacy lives on in every line of code we write.

- The dedicated contributors who generously share their diverse talents and time, consistently raising the bar for what our programs can achieve. Your passion drives our progress.

- Most importantly, our players - your engagement, feedback, bug reports, shared stories, and vibrant community participation keep these programs thriving and evolving. You are the heart of MegaMek.

Our Discord server, now 4,300 members strong, strives to be a welcoming community and has grown to more than five times the size of our Slack. Everyone's passion for BattleTech has taken these programs to new heights, and we're grateful for every member's contribution to this journey. There is an interesting site (Open Hub) someone shared with me years ago and I always find it amazing to look at the stats and see the amount of work everyone has put into these projects.

- [The Megamek Open Source Project on Open Hub](https://openhub.net/p/megamek)
- [The MegaMekLab Open Source Project on Open Hub](https://openhub.net/p/megameklab)
- [The MekHQ Open Source Project on Open Hub](https://openhub.net/p/mekhq)

## 2024 in Review

We entered 2024 with ambitious goals, including transitioning from our traditional Stable-Development approach to the Milestone system and upgrading from Java 11 to Java 17 with the launch of 0.50.x Development. Throughout the year, we released six updates, including Milestone 0.49.19.1. Let's look at what our team of developers and contributors accomplished this year.

### Development by the Numbers

<div class="container">
  <img src="/assets/images/SOU/Mmek_StrategyMeeting_500x350.jpg" 
       alt="MegaMek Strategy Meeting" 
       class="responsive-image">
</div>

Our migration to Git and GitHub in 2016 transformed our development process; it completely changed the way we could collaborate. While our core development team remains small, we've fostered a community of contributors who consistently amaze us with their innovative ideas and improvements. The numbers below reflect the success of our move all those years ago.

A quick note on terminology: In the GitHub world, a "line" represents any single row in a file - whether it's code, documentation, configuration, or even blank space. Git tracks these changes meticulously, giving us insight into the evolution of our projects.

Combined, these projects in 2024 represent over 8,600 commits and more than 105 million lines of code added across all three programs. When you look at this amount of work, I ask you remember everyone that contributes is a volunteer. The sheer amount of time in these lines is truly humbling, and that these programs get so much love from everyone.

### MegaMek: The Digital Battlefield

- 3,477 commits demonstrating continuous refinement
- 25 million lines of code added
- 19 million lines refined and optimized
- Net growth of 7 million lines, reflecting substantial expansion

Looking at everything we accomplished in 2024, it's clear it was a landmark year for MegaMek. We tackled a variety of fixes, improvements, and new features that have greatly enhanced the game. Some of the highlights include fixes for AS conversions, improvements to the new User Directory, and the implementation of the Internal Bomb Bay Quirk (yes, fear the Torrent). Aerospace movement saw significant improvements, along with updates to how shortcuts interact with flight paths. Anti-Mek infantry now follows proper construction rules, and we've begun a major rework on how armor types are managed. TAG-phase torso twist is back, and a major rework around Clan Mek chassis names. Oh...and we can't forget the ability to grab and carry stuff off the map.

There have been substantial bot command updates, and quirks have been brought in line with the latest Campaign Ops printing. The turn timer has been expanded, and, perhaps most noticeably, the programs now default to Dark Mode (Darcula), a move influenced by community feedback. Themes like Nimbus and Metal were removed due to persistent UI issues.

### MegaMekLab: The Engineering Bay

- 642 focused commits
- Over 5 million lines of code added
- Net change of 475,523 lines

MegaMekLab also saw substantial improvements in 2024. One of the biggest changes is the ability to embed fluff images and sprites directly into unit files, making unit customization and sharing even easier. Print queue functionality has been enhanced, allowing users to print MULs directly through the print queue dialog. We also implemented the Industrial Tripod Cockpit, along with various improvements to record sheets, summary views and the ability to the see a record sheet in the unit selector.

### MekHQ: The Command Center

- 4,536 commits showing intense development activity
- 74.5 million lines of code added
- Net increase of 10.4 million lines

MekHQ saw substantial updates and improvements throughout 2024. Repair bay unit lists now clearly indicate whether a unit is in repair or salvage mode. We've added the ability to set a max contract salvage percentage in campaign options and manually designate TO&E force commanders. Additionally, MekHQ StratCon saw updates to StratCon modifiers, the introduction of heavy battles, various bug fixes, and ultimately entered Beta.

### Introducing ACAR and PACAR

<div class="container">
  <img src="/assets/images/SOU/Mmek_Tensediplomacy_500x350.jpg" 
       alt="MegaMek Tense Diplomacy" 
       class="responsive-image">
</div>

These systems finally enable players to run MekHQ campaigns without requiring MegaMek battles, fulfilling a long-standing community request. While both systems are new and evolving, they represent exciting alternatives to traditional gameplay perfect for players who want to focus on AccountTech of the unit rather than playing every battle.

This means players now have a variety of ways to play:

1. Traditional tabletop games against Princess (as always)
2. Quick, abstract resolution through ACAR
3. Detailed AI-driven battles via PACAR

## Looking Ahead to 2025

<div class="container">
  <img src="/assets/images/SOU/splash-liftoff.jpg" 
       alt="MegaMek Liftoff" 
       class="responsive-image">
</div>

### We're running on caffeine, good intentions, and whatever shiny thing catches our eye.

We approach development with flexibility rather than rigid plans. Our developers and contributors work on what inspires them, creating an organic evolution of the software. While we may not have traditional roadmaps, we maintain a clear vision for each component's future, aiming to encompass the full scope of the BattleTech universe and play experience. For me, it's about recreating Operation LIBERATION and playing it from Space to Surface.

As a 23-year-old codebase, MegaMek requires careful attention to performance. Even as we transform, we focus on performance optimization, ensuring improvements don't compromise efficiency, and allow for new contributors to enter the codebase. Balancing visual appeal, functionality, and performance remains a key priority.

### MegaMek

Currently, we've just made improvements to trailers and allow them to be set up in the lobby and we are looking at ensuring they have all the kinks worked out (no pun intended).

There are plans to further refine ACAR and PACAR as we continue to support multiple ways to play. This will be a big change as we've traditionally looked at play as a recreation of Tabletop BattleTech. I'll stress that MegaMek will not become an abstract tool only, and we'll make sure the core experience is a faithful recreation of the Tabletop BattleTech experience. But we are excited to support the ultimate in AccountTech.

Meanwhile, Princess continues to evolve, with focused efforts on improving her efficiency and addressing various quirks. We're particularly excited about an upcoming bot-related project from one of our contributors - expect a major announcement on this front very soon.

A particularly significant undertaking is the comprehensive update of our force generation and RAT Generator files. A long time contributor is spearheading this effort, not only updating the XML files but also enhancing the underlying code to improve generation quality and enable units from the RecGuides to appear in-game. Originally implemented in 2018, these files provide powerful tools for generating opposition forces and units. However, the past seven years have brought substantial new information via the Master Unit List and various sourcebooks that we haven't yet incorporated. One of the key points of going through unit availability reviews is to ensure there is a gradient between A-rated (best) and F-rated (worst) forces. This way the Opfor and its rating will have meaningful impacts on the types of units you fight and what you might salvage. Want some of that sweet, high-performance tech and models? That means having to go up against the A/B-rated OpFors that will be fielding them.

The Fluff Pack project, announced last year, remains a priority, though the overwhelming number of entries has extended our timeline. At this time we plan to focus on the [CamoSpec artists](Camo Specs – A guide to regimental paint schemes) that have given us permission to use their images.

Additionally, my own super-secret project which I hope will be revealed in the 50.04 release, which I hope will generate some major wow factor.

### MegaMekLab

For MegaMekLab, our vision remains clear: to provide the ultimate BattleTech builder. While there aren't any major projects currently in development, this provides an excellent opportunity for community-driven improvements. We are actively seeking suggestions to enhance the Lab's functionality and user experience. It's worth noting that while we can't yet implement certain unit types like buildings, large naval craft, or mobile structures (as these need to be established in MegaMek first), we're exploring other exciting possibilities.

Among these possibilities are FrankenMeks and handheld weapons - complex features that require significant development effort but are looking into how they can be done within the current code structure. As MegaMek continues to evolve and as we look at new unit types, MegaMekLab will adapt and expand to support them.

### MekHQ

MekHQ's development is entering an exciting phase, we currently have an increased development capacity allowing us to pursue more ambitious goals and maintain a clearer development direction than ever before. We are phasing out Field Manual: Mercenaries (Revised) options, as it has been replaced by Campaign Operations. To avoid confusion and reference outdated rules, Campaign Operations will now be our core rulebook.

Player agency remains at the heart of our development philosophy. We want to introduce more meaningful choices throughout the experience, ensuring that each decision feels impactful and contributes to your unique campaign story. We're planning to announce some major updates that will fundamentally change how players experience StratCon - though we're keeping the details under wraps for now.

A major focus is the ongoing improvement and polish of StratCon, which has now reached Beta status with its core systems in place. We're working on refining various aspects of the gameplay experience, including a comprehensive overhaul of the prisoner system, a LosTech Module, continued improvements to logistics and convoy operations. Force generation is also receiving attention, with new developments aimed at providing more dynamic and balanced Opfors.

We've recently completed the transition of the system data from XML to YAML, so each system has its own file complete with data. YAML is a text-editable file which will allow the return of a system editor (more on that in the future). But players can modify, and even create their own systems. It also opens the door for us to include more data in the future like battles, garrisons, etc. But I need to stress these last ones are years away and will require significant volunteer support to do.

Beyond these immediate improvements, we're undertaking a significant code refactoring effort, with the long-term goal of retiring the deprecated Against the Bot system (while maintaining StratCon). A big part of the refactoring was completed with the new Campaign Options rework. We will be looking at ways to reduce the number of options without removing them; in hindsight, we created too many options within an option. In some cases, we'd have an option you'd activate then 5-6 sub-options to set. This combined with options being all over the place made for less than optimal experience. This combined with options being all over the place made for less than optimal experience. We'll continue to restructure things to help ensure MekHQ's continued stability and maintainability as we
add new features and capabilities.

## Hammer's closing reflections

<div class="container">
  <img src="/assets/images/SOU/splash-ceremony.jpg" 
       alt="MegaMek Ceremony" 
       class="responsive-image">
</div>

### MegaMek Community: A Shared Vision

The true strength of our project lies in the diverse talents and dedication of everyone who contributes in any capacity." From MegaMek's early days, our community has grown through the combined efforts of programmers, artists, writers, play-testers, and enthusiastic players. Each artist, Play Tester (Test Pilots), writer, and RFE/bug reporter has helped shape what we see today.

Our current community continues to thrive through this variety of contributions - whether it's creating new art assets, refining game balance through extensive gameplay testing, improving documentation, reporting bugs, or developing code. Looking ahead, we're excited to welcome new contributors of all kinds, knowing that fresh perspectives and diverse talents will help MegaMek evolve in ways we haven't yet imagined. Whether you're writing code, creating art, testing units, or simply sharing your gaming experiences to help identify issues, every contribution enriches this project.

### Our Vision and Progress

Our vision of fully recreating 40 years of Tabletop development in digital form remains ambitious yet achievable. Although the timeline may be uncertain, the dedication of our coders and the enthusiasm of the MegaMek community instill confidence in our ability to reach this goal.

We are deeply grateful for your continued support and participation in this journey. The programs have evolved beyond their original vision, creating new opportunities for BattleTech enthusiasts everywhere." As we progress, we look forward to sharing more achievements and milestones with all of you.

Drop by our [Discord](https://discord.gg/megamek) to chat about what interests you. Whether you're sharing battle stories, reporting bugs, or ready to dive into development, there's a place for you in our community. Together, we're building something special that honors the rich legacy of BattleTech while creating new possibilities for players everywhere.

Seyla!

PS: The art you see was raised as part of the Story Arcs campaign last year and was done by [Eldon Cowgur](https://www.instagram.com/eldoniousrex/) and [SpOoKy777](https://www.deviantart.com/spooky777).