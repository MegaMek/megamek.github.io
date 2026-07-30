---
layout: post
title: "BattleTech Core Rules, and the Old Ones"
date: 2026-07-30
categories: [announcements, development]
author: Hammer, Project Lead
tags: [megamek, mekhq, megameklab, mekbay, development, rules, core-rules]
---

<style>
/*
 * Core Rules post - shared visual language.
 * Every box and figure uses the same frame: card background, 8px radius,
 * 4px accent bar on the left. Variants differ by typography only.
 * Colours come from the site theme variables so light and dark both work.
 */
.corerules-callout,
.corerules-phase {
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
.corerules-phase p:last-child,
.corerules-phase ul:last-child {
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

/* Phase flowchart */
.corerules-phases {
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-phase {
  margin: 0 auto;
}
.corerules-phase-label {
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--background-color);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 0.15rem 0.65rem;
}
.corerules-phase h4 {
  margin: 0.6rem 0;
  font-size: 1.2rem;
}
.corerules-connector {
  text-align: center;
  color: var(--accent-color);
  font-size: 1.5rem;
  line-height: 1;
  margin: 0.5rem 0;
}

/* Figures - same radius and accent edge as the boxes */
.corerules-figure {
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-figure-narrow {
  max-width: 400px;
}
.corerules-figure img {
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
.corerules-embed {
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-embed iframe {
  border: 1px solid var(--accent-color) !important;
  border-radius: 8px;
}
</style>

*By Hammer*

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_Rules/core-products-lineup.png' | relative_url }}"
    alt="The BattleTech Starter Box, Core Box, and Core Rulebook"
  />
  <p class="corerules-caption">The new Core product line: <a href="https://www.catalystgamelabs.com/news/catalyst-game-labs-battletech-refit-redeployment">Starter Box, Core Box, and Core Rulebook</a>.</p>
</div>

<div class="corerules-callout">
  <h3><i class="fas fa-bolt"></i> The Short Version</h3>
  <p class="corerules-lede"><strong>The Core Rules are coming to MegaMek.</strong></p>
  <p>That's as short a version as we can usefully give you. There's a lot in here about what changes, what stays, what doesn't survive, and what we can't answer yet, and it's worth reading the whole thing.</p>
</div>

You're probably wondering about the new rules.

For a long time our answer was the same: we couldn't say what we were doing until we'd seen the rules. We've seen them now, and we've had them in development for a while already. The questions we keep getting are straightforward: do we know what we're doing, and are we keeping the Total Warfare rules around?

<div class="corerules-callout corerules-announce">
  We will be implementing the upcoming BattleTech Core Rules tabletop ruleset in its entirety, and it will become the default ruleset in MegaMek.
</div>

Battlefield Support is the one place where I want to be careful about what I'm promising: we will be supporting it, but whether that extends to playing Assets on the board in MegaMek is still undecided. More on that below. As we've said before, we'll do our best to keep the old rules around as options while we add the new ones.

That framing isn't ours alone. Catalyst has described the new structure the same way in their [Refit and Redeployment announcement](https://www.catalystgamelabs.com/news/catalyst-game-labs-battletech-refit-redeployment): Core is one book and it is standard, and everything else is optional. Backwards compatibility was an explicit design goal carried all the way through the playtest process, which matters a great deal to MegaMek, since we carry implementations of rules that go back to 1984.

That said, we want to be straight with you. This is an almost 25-year-old program, and its tech debt is strong. Having worked through the rules, we now have a strong sense of what stays and what doesn't, and some of the old rules aren't going to survive, particularly where they conflict with the new ones and make maintaining both unworkable. You'll get the specifics of what made the cut in the release notes closer to release. We're a small volunteer team and can only do so much, and our priority has always been to support the most current rule set. MegaMek has weathered a lot of rule changes over the years, and you can look back and see where we've protected rules and where we've had to let them go.

One note on terms before we get into it. When we say Total Warfare in this post, we mean the Total Warfare book itself and the Total Warfare sub-forum on the official site. We are not using it as shorthand for the whole family of current rulebooks. TechManual, both TacOps volumes, StratOps, Interstellar Ops, and Campaign Ops are separate things, and we'll come to them below.

## Where We Are Today

We know what needs doing and we're moving ahead with development in MegaMek. Roundtop has started working on this for us, in conjunction with the rest of the development team. We're approaching the work in phases, with each phase roughly corresponding to a section of the ruleset.

[MekBay](https://next.mekbay.com/) is already out in front of us. A large number of the Core Rules changes have been implemented there, worked strictly from the change document with no interpretation added, and those changes went live yesterday, 29 July. Being web-based, MekBay can turn this around faster than the desktop programs can, so it's the first place you'll see the new rules reflected. You can go and look at them right now at [next.mekbay.com](https://next.mekbay.com/).

## The Phases

<div class="corerules-phases">

  <div class="corerules-phase">
    <span class="corerules-phase-label">Phase 0</span>
    <h4>The rules system</h4>
    <p>This is already in the MegaMek nightly as of a week ago. It's the plumbing that lets us switch between rulesets such as Total Warfare and Core. Not everything will be capable of making that change, but almost everything is. Don't go looking for fireworks yet, though. The switch is in there, but flipping it doesn't do anything at the moment, because nothing sits behind it until Phase 1 starts merging into the nightlies.</p>
  </div>

  <div class="corerules-connector"><i class="fas fa-chevron-down"></i></div>

  <div class="corerules-phase">
    <span class="corerules-phase-label">Phase 1</span>
    <h4>Core gameplay rules</h4>
    <p>These are the rules that cover how the game runs: what you can and cannot do, and what equipment is in the game. There were approximately 136 separate changes identified between Total Warfare and Core, ranging from the minor (kicks being -1 to hit) to the major (MRM Saturation mode). We are almost through them.</p>
    <p>We have also identified some areas that will need to change for everything, Total Warfare and Core alike, and more may be added in future. That list is luckily fairly small:</p>
    <ul>
      <li>Precision and AP Autocannon ammunition amounts. These will be the new ones.</li>
      <li>Changes to the names of phases and rolls, such as Ranged Attack Phase and Physical Attack Roll.</li>
      <li>New weapons. Light and Heavy Plasma Rifles will be added.</li>
      <li>Artemis IV for Extended LRMs. This requires constructing a unit with the system.</li>
    </ul>
  </div>

  <div class="corerules-connector"><i class="fas fa-chevron-down"></i></div>

  <div class="corerules-phase">
    <span class="corerules-phase-label">Phase 2</span>
    <h4>Environment and terrain rules</h4>
    <p>These are the new environments such as fog, light, and wind, and terrain such as smoke and fire. There are also changes to buildings and to how maps present items. This has significant overlap with MekHQ because of how these feed planetary conditions, so we have to go slow and make sure we don't break what already exists.</p>
  </div>

  <div class="corerules-connector"><i class="fas fa-chevron-down"></i></div>

  <div class="corerules-phase">
    <span class="corerules-phase-label">Phase 3</span>
    <h4>Missions</h4>
    <p>One big area, and completely new ground for us. The Core Rulebook adds a Missions chapter that gives players a structure for generating pick-up games, while deliberately leaving force composition up to the people at the table. There's nothing in MegaMek that maps to this today.</p>
  </div>

  <div class="corerules-connector"><i class="fas fa-chevron-down"></i></div>

  <div class="corerules-phase">
    <span class="corerules-phase-label">Phase 4</span>
    <h4>Battlefield Support and Assets</h4>
    <p>We will be supporting Battlefield Support, and work is already underway across all four repositories. Assets are being built as a first-class unit type with their own file format, unit selector and search integration, printable cards, lobby setup, and full editing and printing in MegaMekLab.</p>
    <p>What isn't settled is in-game play. The current work delivers the data model and the infrastructure around it. Whether Assets get full movement and combat support on the board in MegaMek is a decision we haven't made yet.</p>
  </div>

</div>

Of those, Phase 1 is the one we're anticipating will be complete when we ship. That's the bulk of what most players will notice at the table.

## About the Next Release (0.51.01)

Before we go further, I should address the next release, because it will be unlike pretty much any release we've ever done.

The development cycle on 0.51.01 is realistically four to five months. We're not anticipating dropping it until the end of October, and more realistically into the middle of November. With a cycle that long, and coming off a Milestone, we made the decision to undertake some absolutely massive upgrades and improvements to the codebase while we have the runway to do it properly.

The practical upshot: MegaMek 0.51.01 will, in all likelihood, ship with completely playable Core Rules. That is not a small statement, and we're making it with the usual caveat that this is a volunteer project and timelines move. But it's where we're aiming.

Core Rules aren't the only thing going into it. On the MegaMek side there's a long list of new bells and whistles we've been implementing, plus significant under-the-hood work on Princess. A good chunk of that has been performance profiling. The rest has gone into plumbing in conditions she was previously blind to: weather, night, and planetary conditions in general. Handing her that information is the first step. Whether she makes good use of all of it is something we'll be watching closely, and we'd expect some rough edges along the way.

On the MekHQ side the changes are extensive. We're expanding existing systems and laying groundwork for a more abstract version of StratCon. Let me be clear about what that means, because "abstract" can sound like we're replacing something you already use. We're not. StratCon exists, and a headless, mapless version of it already exists. What we're building toward now is persistent OpFor, separated forces, and a complete rebuild of our contract code.

Which brings me to the warning, and I'm only half joking here. There is a high chance that 0.51.01 arrives as a house on fire, on a train, heading toward a bridge that's washed out. In other words, a mess. A glorious, spectacular mess.

<div class="corerules-embed">
  <div class="tenor-gif-embed" data-postid="12704217" data-share-method="host" data-aspect-ratio="1.78218" data-width="100%"><a href="https://tenor.com/view/back-to-the-future-train-explosion-explode-gif-12704217">Back To The Future Train GIF</a>from <a href="https://tenor.com/search/back+to+the+future-gifs">Back To The Future GIFs</a></div>
  <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
  <p class="corerules-caption">An accurate depiction of the 0.51.01 release.</p>
</div>

That said, we're still three and a bit months out from release. All of this could look rather different by then.

## But I Want To Play It NOW!

Don't say we didn't warn you.

We will start merging Phase 1 of the Core Rules implementation into the nightlies in the next couple of weeks. There will be some areas that need a bit more work, but almost everything will be coming in.

This is where we need YOUR help. We want you playing the nightlies and reporting the issues you find, especially issues with our implementation of the Core mechanics. This is a large change to a lot of functions that haven't been touched in decades, so the possibility of bugs is high. We want you to find them, and we want you to report them.

What we can't help with is the rules themselves. If you have a question about how a Core rule or mechanic is meant to work, that belongs on the [Core Rulebook forum](https://www.battletech.com/forums/index.php/board,109.0.html) rather than our tracker. We are learning these rules as we go, the same as every other player, and we're in no position to hand out rulings.

Another post will follow to announce when it's merged in and testing can start.

## The Elephant in the Room: Total Warfare

If you go check the official Catalyst forums, you'll notice they are now stating that Total Warfare is a deprecated ruleset and that they will no longer be issuing errata for it. Their announcement, [End of an Era](https://www.battletech.com/forums/index.php/topic,91343.0.html), lays it out.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_Rules/end-of-an-era-tw-errata.png' | relative_url }}"
    alt="Catalyst forum announcement: End of an Era - TW Errata"
  />
  <p class="corerules-caption">The announcement on the official BattleTech forums.</p>
</div>

That's an important statement, and it effectively tells us we need to move away from Total Warfare. It doesn't change the commitment I made at the top of this post, but it does change where our maintenance effort goes.

It also has a practical consequence for bug reports, and you should hear it now rather than find out later. We're going to treat Total Warfare as deprecated as well. If you find something in those rules that needs a ruling from the rules team before we can resolve it, we won't be able to fix it, because there's no errata process left to ask through and no official answer is coming.

That doesn't mean we'll start closing issues that might already have an answer sitting out there. What it does mean is that we need you to do the legwork first. The Catalyst forums are back up, so search them properly and check whether your question has already been addressed. Point us at a ruling and we can work with it. If we don't see a link to a solution, we're likely to close the bug as unfixable.

How that plays out is going to depend on the specific rules, and I can't give you a blanket answer. What I can tell you is what we're finding as we implement. In some situations the old and new rules coexist perfectly well and we can support both. In others they simply can't coexist, and something has to give. We'll know which is which as we work through it.

The principle behind each of those calls is the same: Core is the baseline now, and everything else gets evaluated against it.

One thing we won't be doing is cherry-picking. The switch is wholesale. Core rules are on, or Total Warfare rules are on. We aren't going to build a scenario where you take this bit from Core and that bit from Total Warfare and run a hybrid of your own design. It's too difficult to code and too difficult to manage.

## The Other Rulebooks

Something Catalyst alludes to, and we want to state plainly: we aren't removing the other rulebooks. We're not removing anything from existence.

Our working assumption is that those rules bolt on to the Core Rules until such time as Catalyst releases updated versions of them. If updated versions never arrive, those rules stay as they are, written against Total Warfare as they were. That isn't ideal, and it beats pretending we have answers nobody has published yet.

Here's a concrete example. One of the features of the Damage Interrupt Circuit (DIC, IO:AE p.62) was to reduce the number of pilot hits from an ammo explosion to one. Core already does this. But the wording of DIC doesn't say "reduce it by one," it says "reduce it to one." So we will not be reducing it by one in Core. Until that's updated, errata'd, or clarified by Catalyst, we're not making that change.

## What Catalyst Has Said About Compatibility

<div class="corerules-figure corerules-figure-narrow">
  <img
    src="{{ '/assets/images/Core_Rules/core-rulebook-cover.png' | relative_url }}"
    alt="BattleTech Core Rulebook cover"
  />
  <p class="corerules-caption">The first of the refreshed rulebooks.</p>
</div>

The Core Rulebook is intended to be the first in a series of refreshed rulebooks. The other books aren't out yet, which means there will be a certain amount of improvisation required when applying the new general rules to unit types the Core Rulebook doesn't cover.

Keith Hann, who wrote the Core Rulebook and who most of you will know better as Xotl, has been clear that Catalyst will not be issuing a pile of ad-hoc rulings to paper over every point of confusion between Total Warfare and the Core Rulebook. As he put it, that would amount to rewriting the books before they've rewritten the books. The general approach breaks down like this:

- If a Core Rulebook change ports straight across to a situation the book doesn't cover, you're expected to just use it. A combat vehicle with an Extended LRM launcher simply uses the new ELRM rules.
- If a change mostly works but leaves a small gap, they're collecting questions and folding the answers into a regularly revised Compatibility Update document. Think "what's the BV or damage against non-'Mech targets for the new heavy plasma rifle?" That's a value, not a ruleset.
- If a change would require lengthy addenda or a wholesale rewrite, they're not addressing it now, and you're expected to use the pre-Core rules until those books are replaced. Skidding is gone from Core, which raises questions about sideslipping. You either drop sideslipping too or use it as printed in Total Warfare. That's your call to make, and no patch is coming.
- Optional rules are out of scope. SPAs, SCAs, TacOps, IntOps alternate rulesets, none of that is being covered. Aerospace is also excluded, because that ruleset is being rewritten anyway.

Their focus is on standard-rules, non-BFS infantry and combat vehicles. Other unit types, drones and mobile structures among them, are more likely to be passed over.

## What That Means For Us

This is CGL's stance, and we're going to mirror it.

Here's the wrinkle, and it's one we've talked about before with FrankenMeks: a human at a table can improvise. Code can't. When a rules gap gets filled with "use your judgment," we don't have a judgment to compile. So where Catalyst says wait and see, we will also wait and see. We are not going to invent house rulings to fill gaps, and our [unofficial and non-canon content policy](https://github.com/MegaMek/megamek/wiki/Unofficial-or-Non%E2%80%90Canon-Content-Policy) hasn't changed.

Where the Compatibility Update document gives us a value or a clarification, we'll implement it. Where it doesn't, the affected rules stay as they are until the relevant book lands.

## Tech Levels, Core, and Availability

This brings us to a really big thing for us.

In his [Further Notes on the Core Rulebook](https://www.catalystgamelabs.com/news/further-notes-on-the-core-rulebook) post, Xotl walks through how rules levels evolved over the decades and how availability got tangled up with them along the way. It's worth reading in full if you want the design thinking behind the revision.

He gives one example that will feel painfully familiar to anyone who has ever gone digging through our data. Artemis V FCS carries a Tech Base, two sets of ratings, a rules level that shifts from Experimental to Advanced to Tournament Legal depending on what year your game is set in, and a Common flag from 3093 onward. Then repeat that for several hundred other items, and don't forget the chassis rating or the structural components nobody thinks about. His own verdict is that the vast majority of it never saw use at the table and mainly generated correction work.

He makes another point worth sitting with. Almost nobody organizes a game around Availability Ratings or shifting rules levels. People organize around Battle Value, the in-universe date, and which unit types are allowed.

He's right, and for a tabletop rulebook that's the correct call. But notice what actually makes all that cross-referencing a burden: a human has to do it. Look up the Tech Base, check the ratings, work out which rules level applies in your game year, then do the whole thing again for the next item. That's what never survives contact with a real game night, and it's exactly why the material went unused.

A program doesn't have that problem. Every one of those lookups happens instantly and it never gets tired of doing them. The work that's tedious at the table is free in code.

That matters, because a huge amount of our player base uses MekHQ for campaign play rather than tabletop play, and MekHQ needs this data to keep functioning. Force generation, unit availability, era-appropriate opposition, all of it leans on it. When a campaign has to work out what a Periphery outfit in 3025 can realistically get its hands on, availability isn't trivia, it's the mechanic doing the work.

So we're keeping the existing availability rules, with the changes below.

You'll notice on the official record sheets that there's no tech level anymore. That's what we're modelling too.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_Rules/core-record-sheet.png' | relative_url }}"
    alt="Core Rules BattleMech record sheet 'Mech Data block, with no tech level listed"
  />
  <p class="corerules-caption">Tech Base is still there. Rules level isn't.</p>
</div>

Here's the decision. It splits into two questions that used to be tangled together.

**Can you play it?** If it's in the Core Rules, it's available for play, no questions asked. If it isn't in the Core book, that doesn't put it off limits. It means that equipment hasn't been written to the new rules yet, which puts you in the territory Xotl describes above: use the Core change where it ports across cleanly, and fall back on the older rules where it would take a rewrite to bridge. What we'll build in MegaMek is a filter that tells you which side of that line a unit sits on, and nothing more. Core, or non-Core. What you do from there is your call.

**How hard is it to get hold of?** Introductory, Advanced, and Experimental are being removed from our references and replaced with Prototype, Production, Common, and Ubiquitous. There's a rough mapping to what came before, in that Prototype covers roughly what Experimental did and Production roughly what Advanced did. That's a simplistic explanation, but it'll orient you. Beyond that the concept is straightforward: Prototype means the unit is hard to find, Production means it's a little easier, Common means you're tripping over them on every corner, and Ubiquitous means there's one parked in every garage. Might not be the exact math, but you'll get the sense of it.

Introduction dates stay alongside the availability tiers, and both hold until new rules replace them.

For the builders: MegaMekLab's validation will be updated to line up with all this. It's a smaller change than you might expect, because we don't really validate tech rules levels there today anyway.

This is the smallest set of parameters we could land on that keeps the campaign side working.

<div class="corerules-callout corerules-note">
  What I've given you here is the shape of it rather than the detail. There's more to say about how the tiers map onto existing data, what happens to units that straddle the line, and what the filter actually looks like in the interface. That's a post of its own, and we'll publish it once the internal planning has firmed up.
</div>

Two caveats, and they both matter.

We'd like this in 0.51.01, but we aren't sure it will make it. There's a good deal of internal planning still ahead of us.

More importantly, this is an internal system. It is not an approved Catalyst system. Nothing official sits behind Prototype, Production, Common, and Ubiquitous as we're describing them here. It's something we have to come up with ourselves, inspired by the rules rather than handed down from them, because nothing official fills that gap. The line we're drawing is this: we aren't writing rules, we're organizing data. If the tabletop game introduces its own system for managing tech advancement and availability down the road, we'll look at implementing that instead.

We always endeavor to be a faithful representation of the tabletop game, and there are times we just can't do it. This is one of those times.

---

We've done this before. We'll do it again.

Seyla!

---

*For the latest updates, join our [Discord](https://discord.gg/megamek) and follow along with development.*
