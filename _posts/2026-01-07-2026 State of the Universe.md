---
layout: post
title: "2026 State of the Universe and New Milestone Announcement"
date: 2026-01-07
---

<style>
.hex-logo {
  float: left;
  width: 120px;
  height: auto;
  margin: 0 20px 10px 0;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
/* Left-justify subheadings (h3, h4, etc.) */
h3, h4, h5, h6 {
  text-align: left;
}
</style>

# 2026 State of the Universe

<div style="width: 100%; max-width: 1200px; margin: 0 auto 20px auto;">
  <img src="/assets/images/SOU/MMek_Awardceremony_finfull.jpg" alt="MegaMek 2026 State of the Universe" style="width: 100%; height: auto; display: block;">
</div>

*By Hammer*

Before I get into the State of the Universe, I have an announcement.

<div style="background-color: #1a3a1a; border: 2px solid #4a9f4a; border-radius: 10px; padding: 15px 20px; margin: 20px 0; text-align: center;">
  <strong style="color: #7fcf7f; font-size: 1.2em;">v0.50.11 is Now a Milestone Release!</strong>
</div>

If you're wondering what makes a Milestone different from a Development release, check out our [Milestone Releases](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) guide.

Since its release, we've had remarkably few bug reports, and the couple of minor issues that did come up were easy-to-fix data issues. We have small data patches available on our [Discord](https://discord.gg/megamek)—check the **#announcements** channel. If you downloaded the programs prior to January 7, 2026, you can go to the download link and re-download the programs, or get the patches from [Discord](https://discord.gg/megamek) and patch your release.

If you choose to re-download: with this release, and **only with this release**, you can safely unzip it over the existing folder. Again, I need to stress—you can only unzip over the same release version. If you want to be really safe, unzip it to its own folder, move your data over, and then delete the old version.

---

## 2026 State of the Universe

Following the success of our previous State of the Universe updates, we're excited to share another comprehensive look at MegaMek. We're now into our 24th year—still technically alpha software, still committed to that version 1.0 release by the end of the century. Although, as I write this, I suddenly realize we're now a quarter of the way through the century. We might need to pick up the pace a bit!

Traditionally when we do these, we don't like to use "I," because MegaMek is a team—and yes, there is no "I" in team. But I'll take a moment to provide some context. I'm Hammer, one of the longest-serving members of the team. I began contributing to the projects in 2011, officially joined the team in spring 2013, and in 2024 was volun-told I was the Project Lead by the other developers. My role has evolved over the years—I've stepped back considerably from my work as the data guy, and these days I'm something of a Solahma warrior—keeper of the MegaMek Remembrance, tossing out the wish list of things that would be amazing to see happen. Some of that wish list actually happened in 2025, and some of it is happening even as I write this.

---

## Some Thank You's

My words from previous years still echo true...

On behalf of the Dev team, thank you to everyone who's contributed to these programs:

- The creators of [BattleTech](https://battletech.com/), past and present, whose universe and game mechanics give us something worth building.
- Our emeritus developers, whose past work made everything we do today possible.
- The contributors/test pilots who share their talents and time, consistently raising the bar for what these programs can do.
- Most importantly, our players—your engagement, feedback, bug reports, and shared stories keep these programs alive. You are the heart of MegaMek.

<div style="width: 100%; max-width: 500px; margin: 20px auto;">
  <img src="/assets/images/SOU/Mmek_Mercpeace_500x350.jpg" alt="MekWarriors shaking hands" style="width: 100%; height: auto; display: block;">
</div>

Our [Discord](https://discord.gg/megamek) server now stands at **5,109 members** and continues to grow. We're one of the larger BattleTech communities out there, and while the Discord server is heavily focused on MegaMek, some of the most active conversations we have are around the universe, the tabletop rules, and everything happening with the Renaissance of BattleTech in general.

I don't want to call out specific developers, because everybody contributes in their own way. We have people who push huge amounts of code. We have people who maybe only do one feature, but it's an important feature. We have people who play the game and identify the bugs. The project is about the BattleTech community—it's not about any individual. Everybody contributes, whether it's playing the game and talking about it and sharing their experiences, or writing the code and implementing the rules and changes and new ideas and features.

As somebody who's been with the projects a while, I look around the community—the contributors, the test pilots, the developers, and the content creators who take time out of their day to stream the programs, make videos, and showcase what we do in ways that a still photo simply doesn't allow. While things can be frustrating and annoying at times, you also recognize that this is something special.

You hear stories of people's games, and you know that people are going to talk about their experiences for a long time. Every headshot. Every failed piloting check. They're all part of the story and the narrative that is the BattleTech universe.

I'm just grateful to be part of that, with people who love the game and the universe as much as I do. It brings a big smile to my face to know that we're a respected part of BattleTech.

---

## 2025 in Review

<!-- IMAGE: Year in review image here -->

If I had to characterize 2025 in one phrase, it would be: **the biggest year we've ever had.** In my time with the projects, this is the most code we've ever pushed, the most features we've ever implemented. If you look at what MekHQ looked like at the 0.49.19.1 release and compare it to today, it's like a different program.

The team has seen some turnover this year. We had developers come in, make a fairly big impact on the programs, and then leave us. I think that's just the nature of open-source projects. We have people who come in and stay long term, people who drop in and out, and people who come in, do one or two big things, and then leave—because ultimately, we're still a hobby. But I think the dev team we have now is probably one of the strongest we've ever had, both in terms of size and in terms of what they've done and accomplished.

### By the Numbers

The numbers tell the story: **47 contributors** added nearly **8 million lines** of code, data, and content across the projects throughout the year. We closed **398 reported issues** and pushed over **1,400 bug fixes**. Every bit of that is volunteer work.

On the content side, we added **948 new unit files**, **433 new map boards**, and **52 new 'Mek files**.

### Releases

As a reminder: **Development releases** are our regular updates that may have some bugs but include new features. **Milestone releases** are versions we've identified as particularly stable—safe spots for players who prefer reliability over bleeding-edge features.

<table style="width: 100%; max-width: 500px; margin: 20px auto; border-collapse: collapse;">
  <tr style="background-color: #2a2a2a; color: #fff;">
    <th style="padding: 10px; text-align: left; border: 1px solid #444;">Release</th>
    <th style="padding: 10px; text-align: left; border: 1px solid #444;">Type</th>
    <th style="padding: 10px; text-align: left; border: 1px solid #444;">Date</th>
    <th style="padding: 10px; text-align: right; border: 1px solid #444;">Total Downloads</th>
  </tr>
  <tr style="background-color: #1a1a1a;">
    <td style="padding: 10px; border: 1px solid #444;">v0.50.03</td>
    <td style="padding: 10px; border: 1px solid #444;">Development</td>
    <td style="padding: 10px; border: 1px solid #444;">Feb 2</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">4,029</td>
  </tr>
  <tr style="background-color: #222;">
    <td style="padding: 10px; border: 1px solid #444;">v0.50.04</td>
    <td style="padding: 10px; border: 1px solid #444;">Development</td>
    <td style="padding: 10px; border: 1px solid #444;">Mar 22</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">3,410</td>
  </tr>
  <tr style="background-color: #1a1a1a;">
    <td style="padding: 10px; border: 1px solid #444;">v0.50.05</td>
    <td style="padding: 10px; border: 1px solid #444;">Development</td>
    <td style="padding: 10px; border: 1px solid #444;">Apr 25</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">2,678</td>
  </tr>
  <tr style="background-color: #222;">
    <td style="padding: 10px; border: 1px solid #444;"><strong>v0.50.06</strong></td>
    <td style="padding: 10px; border: 1px solid #444;"><strong>Milestone</strong></td>
    <td style="padding: 10px; border: 1px solid #444;"><strong>May 19</strong></td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;"><strong>33,011</strong></td>
  </tr>
  <tr style="background-color: #1a1a1a;">
    <td style="padding: 10px; border: 1px solid #444;">v0.50.07</td>
    <td style="padding: 10px; border: 1px solid #444;">Development</td>
    <td style="padding: 10px; border: 1px solid #444;">Oct 12</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">3,716</td>
  </tr>
  <tr style="background-color: #222;">
    <td style="padding: 10px; border: 1px solid #444;">v0.50.10</td>
    <td style="padding: 10px; border: 1px solid #444;">Development</td>
    <td style="padding: 10px; border: 1px solid #444;">Nov 27</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">3,213</td>
  </tr>
  <tr style="background-color: #1a1a1a;">
    <td style="padding: 10px; border: 1px solid #444;"><strong>v0.50.11</strong></td>
    <td style="padding: 10px; border: 1px solid #444;"><strong>Milestone</strong></td>
    <td style="padding: 10px; border: 1px solid #444;"><strong>Dec 30</strong></td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;"><strong>361*</strong></td>
  </tr>
</table>

<p style="text-align: center; font-style: italic; margin-top: -10px;">*Still accumulating</p>

*Sharp-eyed readers will notice we jumped from 0.50.07 to 0.50.10. Seven ate nine—or rather, Gradle did. Our build system flat-out refuses to compile versions ending in .08 or .09. Sometimes the quirks aren't just in the 'Meks.*

The v0.50.06 Milestone drove approximately **10x the downloads** of our development releases. MekHQ continues to be the primary download at about 76% of total downloads, confirming that campaign play is central to how people experience the MegaMek suite.

The big efforts of 2025 were landing the v0.50.06 Milestone in May and completing the [licensing reorganization](/announcements/licensing/2025/05/25/Important-Update-MegaMek-License-Changes-Coming-with-Version-0.50.07.html) in Q3. With 0.50.07, all of our code moved to GPL 3, and all of our data moved to Creative Commons—a significant undertaking that positions us better for the future.

I need to call out and thank **Tex** for taking on the absolute Herculean job of leading much of the code refactoring work that made this possible. If you're not familiar with the term "refactoring," think of it as pulling every single item out of a closet, organizing everything, and then putting it all back in a new, more logical order. The other developers helped, chipped in, and supported this effort—and it shows in the stability improvements we've seen.

### Community Reach

MegaMek reached players in **166 countries** in 2025. Our biggest audiences came from the United States, Canada, Germany, the UK, and Australia—but we also saw players from Russia, Poland, Spain, the Philippines, Brazil, and beyond.

---

<img src="/assets/images/SOU/MegaMek.png" alt="MegaMek Logo" class="hex-logo">

## MegaMek: The Digital Battlefield

<div style="clear: both;"></div>

### What's New in 2025

Looking back on 2025, there are so many things we implemented, changed, and improved—in every release. When we looked at the changelog for 0.50.07, it was literally too large to include in a single blog post.

At broad strokes, what we've been really happy to see is a general improvement in stability. We've modernized a lot of old systems to bring them in line with errata. Key additions:

- **Playtest Rules** — Packages One, Two, and Three (Gear), all optional under Game Options
- **Handheld Weapons** — Finally playable in v0.50.10
- **Picking Things Up** — 'Meks carrying small vehicles or BA squads
- **Lift Hoists** — Now functional with MekHQ integration
- **ARAD Missiles** — Anti-radiation ammo for SRMs, LRMs, MMLs
- **Manei Domini Cybernetics** — Fully aligned with Interstellar Operations
- **Minimap improvements** — Sensor range, facing displays, UI enhancements
- **GM Tools** — Headless client and Commander GUI

**Force Generation** continues to improve with more era-appropriate and varied results.

---

<img src="/assets/images/SOU/MegaMekLab.png" alt="MegaMekLab Logo" class="hex-logo">

## MegaMekLab: The Engineering Bay

<div style="clear: both;"></div>

We've had so many improvements to MegaMekLab in 2025 that while cosmetically you may think the program looks the same, the functionality has transformed.

### The Tab Revolution

The biggest change is our reimplemented tab system:

- Open **multiple units** in separate tabs
- **Drag and drop** to reorder or undock into separate windows
- **Real-time preview** — watch the record sheet update as you edit
- **Middle-click** to close, **double-click** empty bar to reattach all

Multiple designs open, side-by-side comparisons, Alpha Strike card previews—it transforms how you work.

### Other Key Improvements

- **Drag and drop unit files** from outside the program
- **Handheld Weapons record sheets**
- **Undo/Redo/Reload** under Edit menu
- **Asynchronous rendering** — improved performance on complex units
- **Quirks tab rework** — better organization

### Gothic Support

Yes, we have decided internally that we will support Gothic. But for us to fully support Gothic, we need full construction rules to come out. The 'Meks are pretty straightforward, but without rules for Abominations, we're not in a position to create an Abominations construction section to produce record sheets.

---

<img src="/assets/images/SOU/MekHQ.png" alt="MekHQ Logo" class="hex-logo">

## MekHQ: The Command Center

<div style="clear: both;"></div>

If there is a program that changed the most in 2025, it's MekHQ. We are now the ultimate way to play AccountTech in BattleTech—you're not just leading a unit into battle anymore, you're managing people with actual characters.

### The Big Changes

**Against the Bot Retired**: After more than a decade of service, AtB was officially retired in v0.50.10. For many, it feels like losing an old comrade—it's been part of MekHQ's identity since Neoancient integrated it in 2014. But its spirit lives on in StratCon, now stronger and more flexible than ever. To the original spreadsheet pioneers: thank you. Against the Bot served with honor.

**StratCon Feature Complete**: We now consider StratCon feature complete. For those who preferred AtB's simpler approach, we introduced two new modes:

- **Mapless Mode** — StratCon without the campaign map, but with better OpFor generation, refined salvage and logistics, convoy and rescue missions
- **Single Drop Mode** — Designed for multiplayer groups splitting into BluFor and OpFor

Both modes are designed with streamers and large multiplayer campaigns in mind.

### New Features & Systems

- **Alternative Advanced Medical System** — Expanded injuries, 19+ procedures, prosthetics, disease mechanics
- **Mercenary Auction System** — Bid on equipment instead of random free units
- **Enhanced Ronin Event** — Recruit approaching ronin for Support Points
- **Veteran Rank SPAs** — Free SPA at Veteran (2% chance of Flaw instead)
- **Automatic Campaign Upgrader** — No more manual version migration steps
- **Daily Report Tabs**, **Expanded Glossary**, **Quick Train**, **Auto-Tech Assignment**, **Second-in-Command**
- **Campaign Options IIC** — Significant updates for better option management and campaign customization

We deprecated **Scrounge** and added procurement restrictions as a campaign option.

### RPG Integration

We're bringing the game closer to A Time of War with an evolving advanced character builder. For those who hate that level of detail, we're simultaneously developing **"Blob Crews"**—the platoon commander and 27 shadowy figures in the background, rather than 28 individual personalities.

### Design Philosophy

Many systems we've introduced address the **power curve problem**. Campaign Operations doesn't cover everything, and the automation in MekHQ lets you play games quickly and accumulate C-Bills and experience at phenomenal rates. Our homegrown systems—medical, logistics, convoys—are designed to give you agency through meaningful choices.

<img src="/assets/images/SOU/Mmek_StrategyMeeting_500x350.jpg" alt="Strategy Meeting" style="float: left; width: 250px; height: auto; margin: 0 20px 10px 0; border-radius: 5px;">

We're trying to create a sense of command—and the most difficult choice a commander faces is whether to fight at all. History is full of battles that should or shouldn't have been fought, decisions that ultimately shaped outcomes far beyond the battlefield. That's what we're evolving MekHQ to model: the weight of command, where sometimes the only winning move is not to play. When you see it that way, everything starts to link together.

<div style="clear: both;"></div>

---

## MekBay: The Web Evolution

<!-- IMAGE: MekBay image here -->

MekBay's reception has been absolutely incredible. Launched in September 2025, it's grown steadily—and just a few days ago we added Alpha Strike support, which created quite a buzz.

<table style="width: 100%; max-width: 400px; margin: 20px auto; border-collapse: collapse;">
  <tr style="background-color: #2a2a2a; color: #fff;">
    <th style="padding: 10px; text-align: left; border: 1px solid #444;">Metric</th>
    <th style="padding: 10px; text-align: right; border: 1px solid #444;">Value</th>
  </tr>
  <tr style="background-color: #1a1a1a;">
    <td style="padding: 10px; border: 1px solid #444;">Active Users</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">4,535</td>
  </tr>
  <tr style="background-color: #222;">
    <td style="padding: 10px; border: 1px solid #444;">Total Forces Created</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">24,000</td>
  </tr>
  <tr style="background-color: #1a1a1a;">
    <td style="padding: 10px; border: 1px solid #444;">Alpha Strike Forces Created</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">452</td>
  </tr>
  <tr style="background-color: #222;">
    <td style="padding: 10px; border: 1px solid #444;">Max Concurrent Users</td>
    <td style="padding: 10px; text-align: right; border: 1px solid #444;">275 (Jan 5, 2026)</td>
  </tr>
</table>

For those not familiar, see our announcement post: [Introducing MekBay: MegaMek's Web Evolution](/announcements/development/mekbay/2025/09/23/Introducing-MekBay-MegaMek's-Web-Evolution.html)

### Why MekBay?

MekBay started with a simple request we heard for years: "I wish MegaMek was usable on mobile."

We couldn't port MegaMek itself to mobile—the codebase is too complex. But we could bring core functionality to the web: the unit database, force building, record sheet generation. MekBay is the result. It's not a replacement for the desktop programs; it's a companion that meets players where they are.

### What Players Are Using It For

- Unit database access and force building
- Record sheet generation from any device
- Alpha Strike support (just added)
- Mobile access and mini tracking

We knew it would be popular. We didn't anticipate *this* popular.

### How MekBay Works

MekBay shares databases with MegaMek—our unit files drive the data. Plans include MUL file compatibility and eventually custom unit support between platforms.

Unlike desktop releases, MekBay updates daily. I've seen players request features on [Discord](https://discord.gg/megamek) and Drake push them out hours later. If you tried it in September and haven't looked since, check it out again.

For the record, we have no plans for a web-based MegaMek.

---

## Technical Updates

<div style="width: 100%; max-width: 600px; margin: 20px auto;">
  <img src="/assets/images/SOU/splash-repairs.jpg" alt="Technical Updates" style="width: 100%; height: auto; display: block;">
</div>

Now for the stuff that makes the techs happy.

### Java 17 Transition

With the release of 0.50.0, we transitioned to Java 17. To be honest, we held our breath. I remember the chaos when the community had to move from Java 8 to Java 11—it wasn't fun. That was compounded by Oracle's decision to make Java open-source, which created huge confusion.

The good news is the move to Java 17 was relatively painless. We were positioned with good tutorials, we had community members generous enough to make YouTube videos on how to update, and our Java quick-tip (which gets lots of use on [Discord](https://discord.gg/megamek)) really helped players upgrade seamlessly.

### Looking Ahead: Java 21 or Java 25?

We try to follow the LTS (Long Term Support) versions of Java. Java 17 entered long-term support in September 2021 and has extended support through September 2029. Java also does its best to stay backwards compatible.

In the previous State of the Universe, I mentioned we'd evaluate the decision to move to Java 21 in September 2026. Java 21 was released in September 2023 with long-term support until 2031. Quite a few players are currently running the programs on Java 21 without issues, so we anticipate good stability.

One thing we're currently studying: **should we jump straight to Java 25?** Java 25 was released in September 2025 with support until 2033. Traditionally, MegaMek has lagged behind LTS versions, but as Java evolves, it introduces new features we can use to further optimize and improve the code.

As of this State of the Universe, our intention is to stay with our Java 21 plan—sometime in the winter of 2026, we'd likely release a version requiring Java 21. But there's a chance we'll say "no, we're going straight to Java 25." We'll have more on this later this year, probably making decisions in the fall based on our testing.

If you like running bleeding edge, feel free to grab Java 25—it's available now. If you have bugs or issues, you'll get us saying it's not officially supported, but we'd appreciate any feedback.

### YAML Migration

We're continuing our migration toward YAML. In 2025, we transitioned our system data to the new format and released an alpha **Systems Editor** in 0.50.04. Instead of navigating massive XML files, each system now has its own dedicated YAML file containing basic data, population changes, faction histories, and SICS codes all in one place. This makes it significantly easier for players and contributors to view and modify system information.

We'd like to start moving our equipment files to YAML this year, though that's still in the planning stage.

What does this allow us? If we can land the YAML conversion and rework some creaky old code, it would finally open the door for **custom weapons and equipment** within some parameters. More on this if we can get some architecture in place—probably won't hear more until later this year.

### Under the Hood

Some changes are invisible to most players but represent significant code improvements.

**User Data Directory**: We added a customizable directory feature that lets you set a single external location for storing game resources—units, camos, fonts, and more. This directory is accessible across different installations and versions of MegaMek, MegaMekLab, and MekHQ. No more copying your custom files between versions.

**Damage Manager**: The new Damage Manager will soon become the only Damage Manager, replacing legacy code that's been with us for years. As one of our developers put it: "The DamageManager is dead, long live the DamageManager." These kinds of refactoring efforts improve stability and make future development easier.

---

## 2025 Misses

It's important to reflect on the year, acknowledge what we missed, and learn from those experiences. 

<div style="width: 100%; max-width: 600px; margin: 20px auto;">
  <img src="/assets/images/SOU/splash-rescue.jpg" alt="2025 Misses" style="width: 100%; height: auto; display: block;">
</div>

### CASPAR

Our biggest miss was CASPAR. It represents the classic problem with open-source projects. We had a very skilled developer come in who had the capabilities to take Princess further—but who also had the ability to develop something new, which was CASPAR. But like the curse of a lot of open-source projects, someone comes in with the best intentions, and then real life kicks in, and it turns out we couldn't accomplish it.

In hindsight, we announced CASPAR too soon. But we felt we had to—CASPAR required game logging to study how Princess plays, and we weren't going to collect that data without telling players first.

As for **Duchess**—the concept of an overarching AI that Princess would work for, specific to the StratCon environment to help direct strategy—it remains just that: a concept. I'm not going to say Duchess is dead, because it never really materialized in the first place. It was from those Duchess conversations that CASPAR emerged.

So as I sit here today, we have missed opportunities with Princess. Our plan is to send her back to Blackjack this year for some continued improvements. In particular, we're interested in her behaviors around hidden units and improving her fire control decisions by incorporating variables we know she's missing—things like quirks. We also have some ideas to explore around improving her use of artillery. But this is all in the planning stage, and we'll have to see how it plays out through the year.

### Story Arcs and the Systems Editor

We have one Story Arc—"Young Wolves"—and it's aging. Again, an example where a committed developer came in, did a lot of work, and unfortunately real life took them.

Story Arcs is in an interesting spot. When that developer came back in early 2025 and we talked about what needed to happen, there was a realization that we needed to do system work before Story Arc work—because stories take place in systems. This led to close collaboration with the [SUCS team on Sarna](https://www.sarna.net/wiki/Information:System_coordinates#External_References), which started the process of standardizing data and putting in an alpha Systems Editor.

But I'm not sure looking at 2026 where this will play out. We are still committed to Story Arcs. We are still committed to a Systems Editor. We still want to support players with their alternate universe play. But if I'm being honest, the regular BattleTech universe is huge, and that has to be our priority.

That said, we recognize the Systems Editor isn't just for alternate universe players—even regular campaign players want the ability to update control of various systems as their campaigns progress. So while Story Arcs might not move forward this year, we are exploring ways to get the Systems Editor working.

What does Story Arcs need? Someone who can come in with strong skills to write an editor—because manually writing a Story Arc is too complicated. For the Systems Editor, we need someone with strong knowledge of MekHQ code who can step in, look at the existing code, and get it working.

### Lessons Learned

Something you'll probably see going forward: we had a lot of excitement for things, which led us to announce a lot of things in 2025. I think you'll find that we're going to be less inclined to announce big things until they're well in development and at a point where we can announce them in a way that we know we can get them to the finish line.

Because every time we make a commitment and don't accomplish it, I take that personally. And I know the other devs feel it as well. It adds a level of stress and pressure that an open-source project can't sustain.

---

## Looking Ahead to 2026

<!-- IMAGE: Looking ahead image here -->

What does 2026 hold? We'd love to say we're going to do better than we did in 2025, but that's going to be a little challenging this year. We have a few developers currently away or planning to take time away from the project, and that always slows development.

With v0.50.11 becoming a Milestone, it puts us in a good position to have a few releases where we can be a bit shaky. Speaking for myself, I intend to modernize some of our older equipment and introduce new equipment.

We'd safely anticipate that in 2026 we'll probably have **four or five releases**. We're trying to keep a pattern of a release every two months, but that varies based on developer contributions and availability.

### On the Roadmap

We have several projects we're confident will land in 2026: the **Advanced Character Builder (ACB)** for deeper RPG integration, a **revamped ranks system**, and a **new company generator**. The initial **Espionage system** should arrive early this year. **TO:AR Advanced Buildings** are already available in MegaMek and being tested in MekHQ for base defense missions.

Under the hood, the new Damage Manager will become the only Damage Manager—most players won't notice, but it replaces legacy code and positions us for future work.

We still want to look into Large Naval Craft, Mobile Structures, and space-to-surface combat, but being honest, we aren't sure if those will land for a while. As always with a volunteer project, priorities shift based on who has time and energy.

### The Big Variables

Everyone's always interested in super-secret projects and major announcements. Yes, we have things we're discussing internally that we're not prepared to announce publicly yet—across all the projects. But we don't have anything we're prepared to officially tease or announce at this point. There are plans.

One big variable for us is what happens when Catalyst releases the next rule set based on the playtest. Depending on how comprehensive those changes are, it could take us a few releases to get through all of that.

As we look at 2026—because we're a volunteer project—things can change and do. You never know when you're going to lose someone or gain someone who can be instrumental in changing the projects. So while we always have ideas and concepts, we also have to be realistic about what we can do. We're not a professional software development house with hard timelines.

**Pay attention to our blog and, most importantly, hang out in our [Discord](https://discord.gg/megamek).** We pay close attention to what players say and ask for.

But as we look way out into 2027, I'm hopeful and optimistic that we'll have some really exciting things—either done or announced—to celebrate **25 years of MegaMek.**

---

## Closing Reflections

<div style="width: 100%; max-width: 500px; margin: 20px auto;">
  <img src="/assets/images/SOU/Mmek_Tensediplomacy_500x350.jpg" alt="Closing Reflections" style="width: 100%; height: auto; display: block;">
</div>

Looking back on 2025, I'm proud of what we've built and how the community has grown alongside it. BattleTech's resurgence is [Catalyst's](https://www.catalystgamelabs.com/) celebration, but knowing MegaMek plays a part in that success means a lot.
Thank you for playing MegaMek—for your engagement, your feedback, and your passion for the universe. Without you, this would just be a program on GitHub that a few people download.

If you're reading this and haven't looked at the programs in the last few years, I invite you to give them a try again. While parts of the programs still look and feel like 2000s accounting software, I think you'll find a surprising amount of depth and fun within them.

And for those of you who've never left us—thank you. Every battle report, every bug ticket, every "this doesn't match the rulebook"—it all matters. You've kept this project alive for 24 years.

I still look forward to the day when I can play [Operation LIBERATION](https://www.sarna.net/wiki/Operation_LIBERATION)—from space to surface—as a campaign. We're not there yet. But that's the thing about MegaMek: we're not going anywhere.
Drop by our [Discord](https://discord.gg/megamek) to share your battle stories, report bugs, or talk BattleTech. There's a place for you here.

Seyla!

<div style="width: 100%; max-width: 800px; margin: 30px auto;">
  <img src="/assets/images/SOU/splash-ceremony.jpg" alt="MegaMek Closing" style="width: 100%; height: auto; display: block;">
</div>

---

*The statistics in this post were compiled from GitHub API data, Git logs, and Google Search Console analytics as of January 7, 2026.*
