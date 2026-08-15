---
layout: post
title: "MegaMek 0.51.00.1, the Core Rules Release"
date: 2026-08-14
tags:
- Releases
- MegaMek
- Core Rules
---

<style>
/*
 * Core Rules post - shared visual language, matching the 30 July and 11 August
 * posts. Every box and figure uses the same frame: card background, 8px radius,
 * 4px accent bar on the left. Variants differ by typography only.
 * Colours come from the site theme variables so light and dark both work.
 * The one deliberate exception is the version chips below, which use fixed
 * colours - the whole point of them is that the two release numbers read as
 * different at a glance, so they must not shift with the theme.
 */
.corerules-callout {
  background-color: var(--card-color);
  border-left: 4px solid var(--accent-color);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin: 1.75rem auto;
  max-width: 900px;
}
.corerules-callout h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.corerules-callout p:last-child,
.corerules-callout ul:last-child,
.corerules-callout ol:last-child {
  margin-bottom: 0;
}
.corerules-announce,
.corerules-note {
  text-align: center;
}
.corerules-announce {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.45;
}
.corerules-lede {
  text-align: center;
  margin-bottom: 0.9rem;
}
.corerules-lede strong {
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--background-color);
  font-size: 1.15rem;
  line-height: 1.3;
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
}
.corerules-note {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.55;
}
/*
 * The incompatibility warning. Same frame as every other box so it doesn't
 * look bolted on, but a fixed red edge instead of the theme accent - this is
 * the one thing on the page nobody is allowed to skim past. The red is held
 * constant across themes for the same reason as the version chips.
 */
.corerules-callout.corerules-warning {
  border-left-color: #d32f2f;
  border-top: 1px solid #d32f2f;
  border-right: 1px solid #d32f2f;
  border-bottom: 1px solid #d32f2f;
}
.corerules-callout.corerules-warning h3 {
  color: #d32f2f;
}

/*
 * Version chips. The two release numbers differ by one character, so they get
 * distinct colours wherever they are contrasted. Colour is never the only cue -
 * the surrounding sentence always says which is which.
 */
.corerules-ver {
  display: inline-block;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-weight: 700;
  font-size: 0.95em;
  letter-spacing: 0.02em;
  white-space: nowrap;
  /* No vertical padding inline - it would push the pill out of the line box
     and collide with the line above. The radius alone carries the shape. */
  padding: 0 0.7em;
  line-height: 1.5;
  margin: 0 0.05em;
  border-radius: 999px;
  border: 2px solid;
}
.corerules-callout li {
  line-height: 1.75;
}
/* In the centered warning box each number sits on its own line, so it can breathe */
.corerules-note .corerules-ver {
  font-size: 1.35em;
  padding: 0.15em 1em;
  line-height: 1.6;
}
.corerules-ver-now {
  color: #14532d;
  background-color: #bbf7d0;
  border-color: #15803d;
}
.corerules-ver-later {
  color: #713f12;
  background-color: #fde68a;
  border-color: #b45309;
}

/* Figures - same radius and accent edge as the boxes */
.corerules-figure {
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-figure-narrow {
  max-width: 400px;
}
/* Two figures side by side; they stack on narrow screens */
.corerules-figure-pair {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1.25rem;
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-figure-pair .corerules-figure {
  flex: 1 1 320px;
  max-width: none;
  margin: 0;
}
/* Paired media share one box size; differing sources letterbox inside it.
   Each pair sets --pair-ratio to whichever of its two sources is tallest. */
.corerules-figure-pair video,
.corerules-figure-pair img {
  aspect-ratio: var(--pair-ratio, 1640 / 1396);
  height: auto;
  object-fit: contain;
  background-color: var(--card-color);
}
.corerules-figure img,
.corerules-figure video {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
}
.corerules-caption {
  text-align: center;
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.6rem;
  margin-bottom: 0;
}
</style>

*By Hammer*

Hi Everyone!

It's here. **MegaMek <span class="corerules-ver corerules-ver-now">0.51.00.1</span>, the Core Rules release.**

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_is_Here/Splash_Core_Rules_Edition.jpg' | relative_url }}"
    alt="The MegaMek launcher with Core Rules Edition sprayed across the logo"
  />
  <p class="corerules-caption">You'll know which build you're in the moment it opens.</p>
</div>

MegaMek on its own, without MegaMekLab and MekHQ beside it. We've done that before, but it's been a very long time, and it's rare enough that it comes with strings attached. We told you on Monday it was coming, and here it is, on the day we said.

Before anything else, the one thing you cannot afford to skim past.

<div class="corerules-callout corerules-warning">
  <h3><i aria-hidden="true" class="fas fa-triangle-exclamation"></i> This Release Is MegaMek Only and Does Not Work With MekHQ</h3>
  <p class="corerules-announce">The Core Rules Edition is MegaMek and nothing else.<br>It is <u>not compatible</u> with MekHQ.</p>
  <p>There is no matching MegaMekLab or MekHQ build, and there won't be one. Don't launch it from MekHQ, don't point a campaign at it, and don't copy it into a folder any other program is using. If you run campaigns, MekHQ stays on 0.51.0 with its own MegaMek 0.51.0 beside it, exactly as it is today, and this release sits in a separate folder of its own.</p>
  <p>Making the Core Rules work properly with MegaMekLab and MekHQ is still in progress. That's a large part of why this went out standalone, and it's what <span class="corerules-ver corerules-ver-later">0.51.01</span> is for.</p>
</div>

Read the whole thing before you install it. Every question we got asked the last time is answered somewhere below, and this release has more sharp edges than most. If it isn't answered here, come and ask us on [the Discord](https://discord.gg/megamek).

The two posts that led up to today are [BattleTech Core Rules, and the Old Ones](https://megamek.org/announcements/development/2026/07/30/BattleTech-Core-Rules-and-the-Old-Ones.html) from 30 July, which explains what the Core Rules are and why we're doing this, and [Core Rules Phase One, and a MegaMek-Only Release](https://megamek.org/announcements/development/2026/08/11/Core-Rules-Phase-One-and-a-MegaMek-Only-Release.html) from Monday, which covers everything else that's riding along in this build. What follows here is the release itself.

---

## First, the Version Number

We have two release numbers in flight and they look far too much alike, so get these straight before you go any further. The one you want is the one with four parts.

<div class="corerules-callout corerules-note">
  <span class="corerules-ver corerules-ver-now">0.51.00.1</span> is this release. MegaMek, Core Rules, today.<br><br>
  <span class="corerules-ver corerules-ver-later">0.51.01</span> is the full suite release still to come.
</div>

**If you read Monday's post, we called this one 0.51.0.1 there.** That was us writing the number the way we say it out loud. The program writes it with one more zero, and the program is what you'll be staring at when you file a bug report, so <span class="corerules-ver corerules-ver-now">0.51.00.1</span> is the number to go by. Same release we promised you on Monday. One extra zero.

That fourth number is new. MegaMek versions have had three parts for as long as anyone can remember, and we had to teach the program to understand a fourth one to ship this at all.

Here's how to read it. Our numbering runs 0.51.00, 0.51.01, 0.51.02 and so on, so the May Milestone you're most likely running is 0.51.00 inside the program even though we called it 0.51.0 on the download page. This release is that Milestone plus one point release: <span class="corerules-ver corerules-ver-now">0.51.00.1</span>. It is not a step toward <span class="corerules-ver corerules-ver-later">0.51.01</span>, which is the next full suite release and still to come.

Check it against the main menu when you launch. If the number under the logo doesn't read 0.51.00.1, you're not in this build.

The timeline for <span class="corerules-ver corerules-ver-later">0.51.01</span> is the one we gave you in July and it hasn't changed: end of October at the earliest, more realistically into the middle of November, carrying the rest of the MegaMek work along with the MekHQ contract rewrite and everything else.

---

## Before You Install

Three things, and they matter more than usual with this release.

**It has to be in its own folder.** Unzip it somewhere new. Not into your 0.51.0 folder, not over the top of an existing install, not into anything another program is pointed at. These are separate folders, and that isn't a suggestion. What you should end up with is a MegaMek Core folder sitting by itself, and your 0.51.0 install untouched beside it.

**Don't point MekHQ at it.** This build is not compatible with MekHQ, and that isn't a caution, it's a statement of fact. MegaMekLab and MekHQ are still on 0.51.0 and they stay there. Don't set this as MekHQ's MegaMek path and don't launch a scenario into it. Monday's post sets out the one route we're comfortable with for getting campaign units in front of the Core Rules, and what we expect of you if you try it. Read it there.

**Don't carry preference files forward.** Treat this as a stand-alone install, the same way you'd treat a nightly.

If stability is what you're after, stay on 0.51.0 and sit this one out. We'd rather say that plainly now than field the complaints later.

---

## The Core Rules

<div class="corerules-callout corerules-announce">
  MegaMek now defaults to Core Rules.
</div>

Open Game Options, look at the Basic tab, and there's a drop-down for the rule system. Core is what's selected when you get there. Total Warfare hasn't gone anywhere and switching back takes one click.

That drop-down is the piece we called Phase 0 back in July, the plumbing that lets us hold two rulesets at once. Phase 1 is what now sits behind it: the gameplay rules out of the Core Rulebook, roughly 136 identified differences from Total Warfare.

### What's Not In This One

These belong to later phases. They aren't missing, we just haven't got there:

- Environmental changes
- Terrain changes, beyond roads reducing elevation change costs and allowing one more level of elevation change than normal
- Missions
- Assets and Battlefield Support
- Buildings

And these sit inside Phase 1's scope but didn't make this release:

- **Walk on initiative.** It's a big change and it's being handled on its own.
- **B-Pod damage to standard infantry.** Core only has rules for damage against Asset infantry.
- **Active Probes removing the Fog modifier.** That one waits on the environmental work in Phase 2.
- **Removal of Tech Levels.** We wrote about our thinking at length in the July post. Still ahead of us.
- **Core 'Mek Lance movement.** TacOps Vehicle Lance Movement, but for 'Meks.

### Calls We Made

Some decisions you'll run into, and the reasoning where it isn't obvious:

- Ammunition amounts for Armor Piercing AC and Precision AC ammo use the new Core values whichever rule system you've selected.
- A unit built with Extended LRMs and Artemis IV works under Total Warfare too.
- The new Light and Heavy Plasma Rifles are available in every rule system.
- Charge with both a Lance and a Shield and the Lance wins if it's functional. You only get the one.
- **The Bombast Laser fully replaces the old one, in Core and in Total Warfare.** The rule changed so much we couldn't carry both, so what's in the game now is a different weapon to what was there before. It's also our first piece of equipment that combines firing modes with charging. In the Ranged Attack Phase there's a **Charge Laser** button on the bottom menu, and it lights up for bombast lasers. Take maximum damage now and wear the +2 to hit, or charge it and fire clean next turn. That's the whole question, and it's a good one.
- The half-ammo tick-box in the Configure Mek screen is available under all rule systems.
- The Weapon Attack Phase is now the Ranged Attack Phase, and the Physical Phase is now the Physical Attack Phase.

### Things You'll Want To Know

- MRM Apollo Saturation attacks are declared by right-clicking the hex.
- Changing the rule system changes which ammunition you can pick in the Configure Mek screen.
- Declare a charge with a shield equipped and you'll be asked whether to raise it.
- Core uses front-loaded initiative.
- Initiative streak compensation is an official optional rule under Core, so it's no longer marked Unofficial.

### Options That Grey Out

A number of Game Options aren't valid under Core. Rather than hide them we grey them out when Core is selected, so you can see at a glance what does and doesn't apply. Select Total Warfare and they all come back.

- **Flamers per BattleMech Manual.** On in Core.
- **TacOps Minefields / BMM Minefield Support.** On in Core. Core uses Asset minefields, but minefields are meant to exist, so it's enabled.
- **(Unofficial) Alternate "Better" MASC/Supercharger**, and its Enhanced variant. Off in Core.
- **TacOps Enhanced Missile Defense.** On in Core.
- **TacOps Charge Damage.** Off in Core. Charge damage changes significantly under Core.
- **TacOps Retractable Blades.** On in Core.
- **(Unofficial) Unjam Ultra Autocannons.** Off in Core. UACs don't jam any more.
- **(Unofficial) CASE/CASE II reduces pilot damage on ammo explosion.** Core already does this.
- **TacOps Backward Movement (Expanded).** On in Core.
- **Front-loaded initiative.** On in Core.

### Where We'd Like Eyes

These are in and working as far as we can tell, and they sit in code that hasn't been disturbed in a very long time. If you want to be useful in a specific way, work this list:

- Superheavy 'Meks: a critical hit on an ammo bin should cause one pilot hit and one explosion, and should also remove the second critical slot in that compressed slot.
- Superheavy 'Meks: explosive weapons such as Gauss Rifles in compressed slots should only explode for the number of compressed slots, not the total slots the weapon would normally need.
- Underwater energy weapon attacks.
- Line of sight to 'Meks fully submerged, seen from above the waterline. You can't shoot across the waterline but you can see them. Worth checking under double-blind.
- Piloting Skill Rolls for seatbelt checks should only ever be Piloting Skill plus the number of levels greater than zero.

---

## Everything Else in This Release

The Core Rules are the headline, but two months of MegaMek work rode in behind them. More than 200 pull requests have merged into MegaMek since 0.51.0, and this is not a small release by any measure other than the number of programs in it.

All of it is covered in [Monday's post](https://megamek.org/announcements/development/2026/08/11/Core-Rules-Phase-One-and-a-MegaMek-Only-Release.html), with the videos and screenshots to go with it. We're not printing it twice, so go and read it there.

The complete list of everything that changed is in the changelog at the bottom.

---

## Technical Stuff

### Java 21 Is Required

Same as 0.51.0. If you're coming from an older install, our guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) uses Java 17 as its example; pick Java 21 instead and everything else in the directions is the same.

Read Step 6 carefully, it covers a change to the Adoptium installer. Make sure you select "Install for all users of this machine" in the Installation Scope.

**WARNING**: if you're on an older 32-bit OS, **do not install Java 24 or later**. Those releases officially dropped support for 32-bit Windows.

### Knowing Which Build You're In

Because this release is meant to live in its own folder next to your other installs, we made it say so. The launcher wears **Core Rules Edition** sprayed across the logo, and the main menu says the same thing in red under the version number. If you've got two MegaMek windows open, you'll know which is which at a glance.

### Running a Dedicated Server

Docker images for MegaMek dedicated servers support user folders for custom content. Setup instructions are in the [Docker guide on MegaMek.games](https://megamek.games/docker). We're also looking at converting a couple of the public servers to Core so multiplayer gets properly exercised rather than leaving us to guess from single-player reports. We haven't settled on which ones yet.

---

## We Need Your Help

This is the whole reason we're putting a release out at all.

Phase 1 covers roughly 136 identified differences between Total Warfare and Core, and it reaches into functions that in some cases haven't been touched in decades. The odds of bugs are high. We want as many of you as possible playing this, and we want you reporting what you find, especially anywhere our implementation doesn't match the Core Rules as written.

<div class="corerules-callout">
  <h3><i aria-hidden="true" class="fas fa-bug"></i> Where To Take It</h3>
  <ul>
    <li><strong>A bug in MegaMek.</strong> The <a href="https://github.com/MegaMek/megamek/issues">MegaMek tracker</a>, with the version number and enough detail for us to reproduce it.</li>
    <li><strong>A question about how a Core rule works.</strong> The <a href="https://www.battletech.com/forums/index.php/board,109.0.html">Core Rulebook forum</a>, not our tracker. We're learning these rules alongside everyone else and we're in no position to hand out rulings.</li>
  </ul>
</div>

---

## A Few Reminders

### The Milestone System

This is not a Milestone release. For what that means and how our Milestone system works, see [the wiki](https://github.com/MegaMek/megamek/wiki/Milestone-Releases).

### User Data Directory

The **User Data Directory** lets you set a single external directory for game resources like units, camos and fonts, shared across installations and versions. Set it up in client settings; a restart is required for changes to take effect. It's a good way to keep your custom content available to this release without copying folders around.

### Recent Reading

- [BattleTech Core Rules, and the Old Ones](https://megamek.org/announcements/development/2026/07/30/BattleTech-Core-Rules-and-the-Old-Ones.html)
- [Core Rules Phase One, and a MegaMek-Only Release](https://megamek.org/announcements/development/2026/08/11/Core-Rules-Phase-One-and-a-MegaMek-Only-Release.html)
- [2026 State of the Universe](https://megamek.org/2026/01/07/2026-State-of-the-Universe.html)

---

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

### Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/i_want_to_help.html).

---

## Change Log and Download

### MegaMek Change Log

**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.51.0...v0.51.00.1)

[Download MegaMek 0.51.00.1](https://github.com/MegaMek/megamek/releases/download/v0.51.00.1/MegaMek-0.51.00.1.tar.gz)

Its own folder. You know the drill.

---

We've been telling you this one was coming since July. It's here, and the faster you break it, the better it gets.

Seyla!
