---
layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.51.0 Milestone Release"
date: 2026-06-23
tags:
- Releases
- MegaMek
- MegaMekLab
- MekHQ
---

<!-- FLAG: date above set to 2026-06-23 as a placeholder. Change to the actual designation/ship date. Filename date should match. -->

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

<div style="width: 100%; max-width: 1200px; margin: 0 auto 20px auto;">
  <img src="/assets/images/SOU/MMek_Awardceremony_finfull.jpg" alt="MegaMek, MegaMekLab, and MekHQ 0.51.0 Milestone Release" style="width: 100%; height: auto; display: block;">
</div>

Hi Everyone!

## Welcome to Milestone Release 0.51.0!

<div style="background-color: #1a3a1a; border: 2px solid #4a9f4a; border-radius: 10px; padding: 15px 20px; margin: 20px 0; text-align: center;">
  <strong style="color: #7fcf7f; font-size: 1.2em;">v0.51.0 is Now a Milestone Release!</strong>
</div>

It's official: after its time out in the wild, version 0.51.0 has earned its Milestone designation. [Released back on June 6](https://megamek.org/2026/06/06/New-Development-Release-0.51.0.html), 0.51.0 was our biggest development push in a long while, and we're happy to report it has held up well enough to become **0.51.0-MILESTONE**.

This is also the first Milestone to run on our new **Java 21** baseline. That's the single most important thing in this post, so before you do anything else, read the Technical section below. If you're moving up from an older release, you will need to upgrade Java to run this one.

<div style="background-color: #1a3a1a; border: 2px solid #4a9f4a; border-radius: 10px; padding: 15px 20px; margin: 20px 0;">
  <strong style="color: #7fcf7f; font-size: 1.15em; display: block; margin-bottom: 8px; text-align: center;">Heads-up: We've Repacked the Release with Data Fixes</strong>
  As part of the Milestone designation, we've repacked 0.51.0 with some data fixes. If you downloaded 0.51.0 between June 6 and yesterday and want those fixes, you can re-download the release using the links at the bottom of this post. <strong>Unzip it to its own folder and transfer your campaigns across.</strong> Do <strong>not</strong> unzip it into your existing folder. Like all our releases, this one needs to be treated as standalone.
</div>

## What a Milestone Actually Is

We get asked this a lot, so here's the short version. Every release we put out is tagged **Development**. We retired the old "Stable" label years ago. The next build we'd ever call truly Stable is version 1.0, which is currently slated for sometime before the end of the century. A Milestone is not a separate kind of build, and it isn't a return of "Stable." It's a Development release that has proven itself.

The process works like this. We ship a Development release, then we watch it. Over the following few weeks we gather feedback from GitHub issues, Discord, social media, and our test pilots. If the build demonstrates solid stability and reliability across that observation period, we retroactively designate it a Milestone. Releases that lean toward bug fixes and polish are the strongest candidates; the ones stuffed with brand-new, far-reaching features usually need longer to settle before they qualify.

A Milestone is **not** bug-free. What it means is that the build is unlikely to contain game-breaking issues, and that the bugs still lurking are mostly minor nuisances with known workarounds. We aim for a new Milestone roughly every 6 to 9 months, though that window stretches or shrinks depending on what development is up to.

Two simple ways to think about which build is right for you:

* **Milestone builds** are like a well-maintained Thunderbolt: proven reliable in the field. Best for players who want to sit on a release with a low risk of bugs, and a good starting point for new players.
* **Development builds** are prototype 'Meks fresh from the factory: packed with the newest features, but not yet fully battle-tested. Best for veteran players who crave the new stuff (and if you want the bleeding edge, the nightlies live over on [Discord](https://discord.gg/megamek)).

For the full write-up on how the system works, see the [Milestone Releases wiki page](https://github.com/MegaMek/megamek/wiki/Milestone-Releases).

## Why 0.51.0 Made the Cut

We'll be honest with you, the way we always try to be: when 0.51.0 shipped, we told you to expect some rough edges. A brand-new Java baseline plus over 400 merged pull requests across the suite is a lot of change to absorb at once, and we said as much at release.

Over the observation period, it held up. A couple of features remain more beta than the rest (FrankenMek construction in particular, exactly as we flagged on day one), but the core experience across all three programs has proven stable. For everyone who's been waiting on a solid anchor point on the new Java baseline, this is the one to move to.

## A Quick Recap of What's in 0.51.0

Because this is the same 0.51.0 build, the complete feature list, with screenshots and videos, already lives in the [0.51.0 release notes](https://megamek.org/2026/06/06/New-Development-Release-0.51.0.html). Here's the short version of what you're getting.

<img src="/assets/images/SOU/MegaMek.png" alt="MegaMek Logo" class="hex-logo">

### MegaMek

<div style="clear: both;"></div>

**FrankenMeks** have arrived: cobbled-together 'Meks rebuilt from mismatched salvage, now buildable in MegaMekLab and playable in MegaMek. We also added a batch of rules straight from the manuals, including Mountain Troops, Chainsaws and Dual Saws, Ghost Targets, and geysers that now factor into line of sight. On top of that you'll find new on-board toast notifications so important events are harder to miss, a reworked Ruler and line-of-sight tool, and a big cleanup pass on the lobby equipment dialog.

<img src="/assets/images/SOU/MegaMekLab.png" alt="MegaMekLab Logo" class="hex-logo">

### MegaMekLab

<div style="clear: both;"></div>

The other half of the FrankenMek story: you can now build them directly in MegaMekLab at the Experimental tech level and take them into play. Record sheets also gained some useful options, including the ability to hide the rules level, proper Radical Heat Sink display, and an improved total-heat readout.

<img src="/assets/images/SOU/MekHQ.png" alt="MekHQ Logo" class="hex-logo">

### MekHQ

<div style="clear: both;"></div>

The marquee feature is the one you've been asking for over many years: an **in-game Planetary System Editor**, so you can adjust planetary ownership without hand-editing miles of XML. Alongside it are a new Briefing Room tab and a refreshed top panel, a Pity Contracts system that gives struggling early campaigns a hand up, and a sweeping "Spit & Polish" wave of quality-of-life work: search bars across the Personnel, Warehouse, and Hangar tabs, adjustable procurement priority, toned-down Mental Breaks, a significant StratCon facility nerf, and a weekly net-worth graph on the Finance tab. This release also brought an unusually large bug-fix pass to MekHQ, so campaign play should feel noticeably more stable.

One housekeeping note: as of 0.51.0 the current Company Generator is officially deprecated. No new changes or fixes are coming for it, and it will eventually be removed, though there's no timeline for that yet. For more, see the "Deprecated" entry in the MekHQ Glossary.

### Data, Licensing, and Canonicity

On launch you'll now see a startup window that lays out our licensing and states plainly that the suite is an unofficial, fan-created implementation rather than a canon source. The unit selector also gained tri-state filters for "Canon only" and "Has published Record Sheet." The full story is in the [companion data post](https://megamek.org/2026/06/05/Java-21-Version-0.51.0-and-Our-Data.html).

For all the details, head to the [full 0.51.0 release notes](https://megamek.org/2026/06/06/New-Development-Release-0.51.0.html).

## Known Issues

<div style="width: 100%; max-width: 600px; margin: 20px auto;">
  <img src="/assets/images/SOU/splash-rescue.jpg" alt="Known Issues" style="width: 100%; height: auto; display: block;">
</div>

Here are the known issues we're tracking as of this post, grouped by program. None are show-stoppers, but they're worth knowing about going in.

**MegaMek**

* [#8316](https://github.com/MegaMek/megamek/issues/8316) — Infantry no longer respects a unit's cargo/infantry compartment capacity
* [#8342](https://github.com/MegaMek/megamek/issues/8342) — Jump Infantry not dismounting from a VTOL
* [#8370](https://github.com/MegaMek/megamek/issues/8370) — Artillery in direct fire against VTOLs is missing the attacker-movement modifier
* [#8375](https://github.com/MegaMek/megamek/issues/8375) — Edge being used more than once for blackout checks
* [#8381](https://github.com/MegaMek/megamek/issues/8381) — A custom DropShip design shows as "light damage" even in its best condition

**MegaMekLab**

* Primitive 'Meks currently cannot be loaded.

**MekHQ**

* The Curse of Blandness: every newly generated character arrives with a 5 in every attribute and no Traits. It's like a strictly worse Thanos Snap, where everyone comes out perfectly balanced (as all things should be™).

We're working these for upcoming Development releases. For the current live lists, and to report anything you run into yourself, see the issue trackers for [MegaMek](https://github.com/MegaMek/megamek/issues), [MegaMekLab](https://github.com/MegaMek/megameklab/issues), and [MekHQ](https://github.com/MegaMek/mekhq/issues).

---

## Looking Ahead to 0.51.01

<div style="width: 100%; max-width: 600px; margin: 20px auto;">
  <img src="/assets/images/SOU/splash-liftoff.jpg" alt="Looking Ahead to 0.51.01" style="width: 100%; height: auto; display: block;">
</div>

First, the question everyone asks: when? We don't have a date for 0.51.01. What we can tell you is that it likely won't drop until early fall. We also want to set some expectations, especially on the MekHQ side, because some massive changes are coming.

One heads-up before the highlights: this next stretch is going to be bumpy. As these large reworks land, expect a period of less stable releases that are more likely to have bugs, with MekHQ feeling it the most. That's the nature of changes this size, and we'd rather say so up front than surprise you.

### MekHQ

* **Multiple campaign locations.** You'll be able to run multiple locations in a single campaign. Yes, that means two regiments sitting on two different systems.
* **A full contract-system rewrite.** All contract code, the GUI, and the player-facing experience are being rebuilt from the ground up. A more thorough announcement will follow at a later date.
* **G.R.E.G., the Generic Random Event Generator.** GREG is the successor to P.E.S.T. (the Prisoner Event SysTem) and brings new tricks with it, including skill and ability checks. It will take over all Prisoner Events and Convoy Roleplay Events, and we'll use it to re-introduce LosTech Caches. As with the contract rewrite, expect a fuller update later.
* **Old personnel markets removed.** The new Personnel Market has been the default recruitment option for nearly a year, so the old, deprecated markets are being deleted in 0.51.01.

### MegaMek

* **Infantry and engineers.** Both have seen substantial work this cycle. Disposable weapons are now in, and every engineering type except Sensor Engineers has been implemented, so field works, trench works, and mines can all be set up. You can even set up field works pre-game, right in the lobby.
* **Princess and engineers.** As of this writing Princess doesn't support engineers, but we'll be looking into giving her some engineering smarts.
* **Princess and artillery.** The bot control panel is getting improvements, including finer control over how Princess handles artillery: you can tell her exactly what ammo to fire and which hexes to target. She's also got new glasses, so her artillery fire against you is more accurate now, though fast units will still slip out from under it.
* **A few surprises.** We have other things planned on the MegaMek side that we'll likely save for closer to release, or for release day itself.

### BattleTech Core Rules, and the Old Ones

You're probably wondering about the new rules. We will be implementing the upcoming BattleTech Core Rules tabletop ruleset in its entirety, with the exception of Battlefield Support. As we've said before, we'll do our best to keep the old rules around while we add the new ones. The new rules will become the default, and the old rules will move to options.

That said, we want to be straight with you. This is an almost 25-year-old program, and its tech debt is strong. We don't yet know whether, or which, old rules might be affected. There's a real chance some will have to be removed, especially where they conflict with the new rules and make maintaining both unworkable. We're a small volunteer team and can only do so much, and our priority has always been to support the most current rule set. Across 25 years MegaMek has weathered a lot of rule changes, and you can look back and see where we've protected rules and where we've had to let them go.

---

## Technical Stuff

<div style="width: 100%; max-width: 600px; margin: 20px auto;">
  <img src="/assets/images/SOU/splash-repairs.jpg" alt="Technical Stuff" style="width: 100%; height: auto; display: block;">
</div>

<div style="background-color: #4a1a1a; border: 3px solid #e03030; border-radius: 10px; padding: 18px 22px; margin: 25px 0; text-align: center;">
  <strong style="color: #ff5555; font-size: 1.5em; display: block; margin-bottom: 6px;">&#9888; CRITICAL: Java 21 Is Required</strong>
  <strong style="color: #ffd0d0; font-size: 1.15em;">This is the big one. 0.51.0 requires Java 21. It will not run on Java 17.</strong>
</div>

This is the first Milestone built on the Java 21 baseline. If you're moving up from the previous Milestone, or from any earlier 0.50.x or 0.49.x release, you are almost certainly still on Java 17 (and some of you may even be on Java 11). **You must install Java 21 before this Milestone will launch.** This is not optional, and "it won't start" is nearly always this.

<!-- FLAG: If you want to name the specific previous Milestone version players are most likely upgrading FROM, drop it in here (e.g. "coming from 0.50.06-MILESTONE"). I left it generic since I wasn't certain which release was the last Milestone before 0.51.0. -->

The good news: the process is the same as the earlier move to Java 17. Our guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) still uses Java 17 in its examples; just select **Java 21** instead during installation. Everything else in the directions stays the same.

It's crucial to read the directions carefully, especially **Step 6**, which covers a recent change to the Adoptium installer. Make sure to select "Install for all users of this machine" in the Installation Scope.

We're continuing to test against Java 25 and things look optimistic, but it will likely be later this year before we commit to a full move. If you choose to run a Java version beyond 21 that isn't officially supported, our standard response to issues will be to ask you to revert to Java 21.

**WARNING:** If you are running an older 32-bit OS, **DO NOT INSTALL JAVA 24 or later**, as those versions have officially dropped support for 32-bit Windows.

## A Few Reminders

### Player Options Going Forward

With 0.51.0 now designated a Milestone, players have two clear paths:

* Stick with **0.51.0-MILESTONE** as your reliable anchor while we push into the next development cycle.
* Keep riding the **Development releases** as they drop, if you want the newest features as they land.

### State of the Universe

If you missed it, the [2026 State of the Universe](https://megamek.org/2026/01/07/2026-State-of-the-Universe.html) is worth a read for the bigger picture on where the projects are headed.

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

### Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.50.12...v0.51.0)
[Download MegaMek 0.51.0](https://github.com/MegaMek/megamek/releases/download/v0.51.0/MegaMek-0.51.0.tar.gz)

### MegaMekLab Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megameklab/compare/v0.50.12...v0.51.0)
[Download MegaMekLab 0.51.0](https://github.com/MegaMek/megameklab/releases/download/v0.51.0/MegaMeklab-0.51.0.tar.gz)

### MekHQ Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/mekhq/compare/v0.50.12...v0.51.0)
[Download MekHQ 0.51.0](https://github.com/MegaMek/mekhq/releases/download/v0.51.0/Mekhq-0.51.0.tar.gz)

---

Thank you, as always, for playing, testing, and reporting. A Milestone only happens because enough of you put the release through its paces and told us what you found. Move up when you're ready, keep those backups, and we'll see you on the battlefield.

Seyla!

<div style="width: 100%; max-width: 800px; margin: 30px auto;">
  <img src="/assets/images/SOU/splash-ceremony.jpg" alt="MegaMek 0.51.0 Milestone" style="width: 100%; height: auto; display: block;">
</div>
