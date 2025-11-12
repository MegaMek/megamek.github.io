---
layout: post
title: "Retiring the Colors: Against the Bot"
date: 2025-11-11
categories: announcements development mekhq
author: Hammer, Project Lead
---

# Retiring the Colors: Against the Bot

by Hammer

If you’ve been with the project a while, you likely remember long nights spent playing *Against the Bot*—or *AtB*—our community’s single-player campaign system for MekHQ. Originally a fan-made spreadsheet, it was integrated into MekHQ by **Neoancient** in 2014, becoming the Digital GM behind countless memorable campaigns. Over time, **StratCon** expanded on those ideas with a strategic map and improved systems. As StratCon grew, AtB’s aging code became harder to maintain, limiting both development and player experience. We kept it running as long as possible, but it’s finally time to let it rest. This post celebrates AtB’s legacy and explains why it’s being retired.

## The Origins of AtB

Before MekHQ even existed, BattleTech players were creating homemade campaign systems for MegaMek. They wanted persistent forces, ongoing stories, and characters who survived—or didn’t—between battles. That desire became *Against the Bot*, a spreadsheet created by early community members like **Makinus** and **Snimm**, later refined by **scJazz** and others lost to time. Players rolled for contracts, managed personnel, and generated opposition by hand—tedious, but beloved.

Then came **Taharqa**, who built MekHQ to bring campaigns into software. In 2014, **Neoancient** took the next step—turning the AtB spreadsheet into integrated code. It was one of his first major MegaMek projects, and while he later admitted he’d design it differently today, it worked. What had been a spreadsheet became a living system.

Here are some legacy screenshots showing how far we've come

{% include carousel.html
id="ATB_Retirement"
folder="/assets/images/AtB_Retirement/" %}


## The Legacy

Once AtB arrived in MekHQ, everything changed. Campaigns had structure, persistence, and consequence. The player base grew dramatically, long before the release of Harebrained Schemes’ *BattleTech*, giving single-player BattleTech fans a digital GM and a way to tell their own tales. The result was staggering: hundreds of campaigns, thousands of battles, tens of thousands of destroyed ’Mechs—and countless memories.

As the community expanded, developers like **Ralgith** and **Windchild** carried the torch. Windchild’s work, which came later, deepened the human side of MekHQ—making personnel feel like real characters rather than statistics.

AtB’s influence reached beyond MekHQ. The demand for smarter opposition improved **Princess**. Refit mechanics and error reports drove progress in **MegaMekLab**, which in turn led to **[MekBay](https://mekbay.com)**. Even now, many features trace their roots to requests from AtB campaigns.

Every contributor—coders, artists, data curators, and testers—volunteered their time for love of BattleTech and the community. A few names deserve special mention:

- **Akjosch** – First planetary rework, foundation for the campaign map.
- **Arlith** – Tireless rule implementation, endless bug hunting in MegaMek (many from AtB campaigns), and overall MegaMek stability.
- **Beerockxs** – Sustained MegaMek and MegaMekLab through key years.
- **Bloodwolf** – Relentless tester and artist, essential but often unsung.
- **DarkISI** – Managed data before 2013, keeping tabletop accuracy alive.

To all the developers and contributors who continue to support MegaMek, MegaMekLab, and MekHQ today—you know who you are. Your dedication and creativity keep these projects thriving. And to the next generation reading this and thinking you’d like to be part of this legacy—there’s always room to join, to learn, and to help carry it forward.

Their work built the foundation we stand on today.

## Why Retire It

AtB’s integration was always meant to be permanent—it was baked deep into MekHQ’s systems. Contracts, opposition generation, even campaign logic all assume AtB is active. That tight coupling now prevents further progress. Every improvement risks breaking something tied to AtB’s old design.

The limitations of AtB were recognized early, and addressing them took considerable time and effort—eventually leading to the development of **StratCon**. In many ways, StratCon represents the natural evolution of AtB, building on its foundations while moving toward a more flexible and modern framework. Over time, StratCon became the primary way to play campaigns, offering systems that AtB could no longer sustain. Yet even as we gradually separated the two, AtB’s roots remained embedded in the core codebase, leaving us with technical debt that must now be resolved. And if we ever want to create something truly new—a campaign system built from scratch for the next era—we’ll still need to untangle these legacy systems first.

The biggest issue is balance. AtB was created when early bots like TestBot and Princess were simple and predictable. To stay challenging, AtB compensated by heavily outnumbering the player. But today’s Princess is far more capable. Those old assumptions now create unfair, frustrating battles. Fixing this would require rewriting the system from the ground up.

That’s why **StratCon** was built—to use modern balancing, scalable architecture, and adaptable systems that can grow with future improvements. As StratCon evolved and became the community standard, AtB’s relevance declined. Yet its deep integration left us bound to outdated design choices, slowing development and blocking key features like persistent enemies and advanced contract systems.

With the upcoming **0.50.10** release, AtB will be fully removed from MekHQ.

## What’s Next

To ease the transition, we’re introducing **StratCon Mapless Mode**—a version of StratCon without the campaign map, but with all the improvements AtB never had: better OpFor generation, refined salvage and logistics, convoy and rescue missions, and more. Existing AtB campaigns will automatically migrate to Mapless Mode when loaded into 0.50.10, keeping your units, history, and stories intact.

## Moving Forward

Removing AtB isn’t the end of single-player campaigns—it’s the removal of a barrier. By eliminating the accumulated technical debt, we can finally begin exploring what’s possible: discussing persistent OpFors, expanding contract systems, and developing new campaign mechanics. This doesn’t commit us to those features, but it opens the door to see where future development might lead.

For many, AtB’s retirement feels like losing an old comrade. It’s understandable—AtB has been part of MekHQ’s identity for over a decade. But its spirit lives on in StratCon, now stronger and more flexible than ever.

To the original spreadsheet pioneers: thank you. Your work shaped a generation of digital BattleTech campaigns. To those who’ve kept AtB alive for years: your dedication showed us what mattered most. And to every commander who ever fought *against the bot*: your stories endure.

Against the Bot served with honor. Now it’s time to retire its colors and march forward together.

Seyla!
---

*Questions or concerns about StratCon Mapless Mode? Join us on [Discord](https://discord.gg/megamek) for support and discussion during the transition.*
