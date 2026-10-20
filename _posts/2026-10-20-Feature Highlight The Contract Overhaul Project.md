---
layout: post
title: "Feature Highlight: The Contract Overhaul Project"
date: 2026-10-20
---

<style>
/*
 * Shared visual language from the Core Rules and 0.51.01 posts. Every box and
 * figure uses the same frame: card background, 8px radius, 4px accent bar on
 * the left. Variants differ by typography only. Colours come from the site
 * theme variables so light and dark both work; the warning red and the hazard
 * yellow are fixed so they read the same in either theme.
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
.corerules-callout ul:last-child {
  margin-bottom: 0;
}
.corerules-callout li {
  line-height: 1.75;
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
.corerules-note {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.55;
}
/* The opening story: the same frame, set as a short piece of fiction */
.corerules-fiction p {
  font-style: italic;
  margin-bottom: 0.5rem;
}
/* Something every existing campaign hits on upgrade - nobody skims past this */
.corerules-callout.corerules-warning {
  border-left-color: #d32f2f;
  border-top: 1px solid #d32f2f;
  border-right: 1px solid #d32f2f;
  border-bottom: 1px solid #d32f2f;
}
.corerules-callout.corerules-warning h3 {
  color: #d32f2f;
}
/* Hazard tape for the system we're openly calling experimental */
.corerules-callout.corerules-caution {
  position: relative;
  overflow: hidden;
  border-left-color: #f2b705;
  border-top: 1px solid #f2b705;
  border-right: 1px solid #f2b705;
  border-bottom: 1px solid #f2b705;
  /* Room for the hazard tape that sits across the top edge */
  padding-top: 1.75rem;
}
.corerules-callout.corerules-caution::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  background-image: repeating-linear-gradient(
    45deg,
    #f2b705 0,
    #f2b705 14px,
    #1a1a1a 14px,
    #1a1a1a 28px
  );
}
.corerules-callout.corerules-caution h3 {
  /* Shrink-to-fit block so the chip hugs the text but still centres */
  display: table;
  margin: 0 auto 0.9rem;
  background-color: #f2b705;
  color: #1a1a1a;
  padding: 0.3rem 0.85rem;
  border-radius: 4px;
}

/* Figures - same radius and accent edge as the boxes. Screenshots never
   scale above their own width. */
.corerules-figure {
  max-width: 900px;
  margin: 1.75rem auto;
}
/* Figures of different shapes side by side at one shared height. Each figure
   sets flex-grow to its own width / height, so widths split in proportion and
   heights come out equal with no letterboxing. They stack on narrow screens. */
.corerules-figure-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1.25rem;
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-figure-row .corerules-figure {
  flex-shrink: 1;
  flex-basis: 0;
  min-width: 240px;
  max-width: none;
  margin: 0;
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
</style>

*By Illiani*

<div class="corerules-callout corerules-fiction">
  <p>The DropShip "Dumb Luck" was silent except for Commander Wilson's agitated sighs and the tapping of his noteputer. He raised his head, looking at his XO with the ruffled expression of a man on the edge.</p>
  <p>"Our employer is Capellan?"</p>
  <p>The XO nodded, already seeing where the conversation was leading.</p>
  <p>"And our target is Davion?"</p>
  <p>Another nod.</p>
  <p>"Then why do the orders come with a Federated Suns header?"</p>
  <p>The XO fidgeted in place.</p>
  <p>"This is a false flag, isn't it?"</p>
  <p>A final nod.</p>
  <p>"We're screwed..."</p>
</div>

## Preamble

I don't normally write these, so let me start by introducing myself. I'm Illiani, the lead developer of MekHQ - or so they tell me. I've been a member of the development team since late 2024 and a MegaMek player since the Test Bot days. I have two active MekHQ campaigns, my tabletop mercenaries are called *Salvage Gatcha*, and my favorite stories feature Bryan Young's *Fox Patrol*. Some of my work includes the personnel market, education module, resupplies, and of course, AutoAwards.

<div class="corerules-callout corerules-announce">
  Today, I have the absolute pleasure to introduce The Contract Overhaul Project, or 'nuContract' for short.
</div>

Replacing the old AtB Contract Market, nuContract is a modern take on the MekHQ contract experience. It updates everything, from how contracts are generated and negotiated, to how they're fought over.

If that sounds exciting, go grab a coffee! We're going to be here a while.

<div class="corerules-figure" style="max-width: 461px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_01.png' | relative_url }}"
    width="461"
    height="374"
    alt="The MekHQ Daily Activity Log, ending with a line reading 'New contracts are available: 5 Mercenary contracts available'"
  />
  <p class="corerules-caption">The daily report tells you exactly when new contracts are available.</p>
</div>

<div class="corerules-callout corerules-warning">
  <h3><i aria-hidden="true" class="fas fa-triangle-exclamation"></i> Important: Existing Campaigns</h3>
  <p>Before I get into the meat of this blog I want to cover how compatibility with existing campaigns is being handled.</p>
  <p>When upgrading to 0.51.01 all currently open contracts and missions will be automatically closed. Any outstanding contract payments will be collected immediately, POWs will be ransomed, and the contract will be considered a complete success.</p>
  <p>As the old contract system and the new are entirely incompatible, I'm sorry to say that this is not optional. Your contract history will be retained, however.</p>
</div>

<div class="corerules-figure" style="max-width: 452px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_02.png' | relative_url }}"
    width="452"
    height="195"
    alt="A Daily Activity Log entry saying an old-format contract was closed out as a complete success, under the heading Campaign Upgraded to 0.51.01"
  />
  <p class="corerules-caption">Upgrading is automatic and doesn't require any special steps.</p>
</div>

### Why nuContract?

One of the first things a player does when starting MekHQ is pick a contract. Over the years the AtB contract market has not aged gracefully. To make matters worse, under the hood it suffered a terrible case of legacy code. It was a constant source of player confusion, and was very inflexible.

As MekHQ started to modernize, the limitations of the old AtB code began to be felt. In late 2025, I started putting down plans for a 'contract market overhaul', which later evolved into nuContract.

Unfortunately, the old AtB code was fully embedded into MekHQ itself. This meant that I couldn't just go in and do a modernization pass and call it a day. Instead, I had to spend two solid months just managing the migration process from AtB to the new architecture. It was slow, tedious work, but necessary.

When you boot up 0.51.01, you are going to see the benefits immediately. A brand new contract market. A brand new contract experience. And a mountain of fixed bugs and features you've wanted, for years.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_03.png' | relative_url }}"
    width="1172"
    height="629"
    alt="The old AtB contract market: a dense table of offers on the left and a long list of contract terms and pay figures on the right"
  />
  <p class="corerules-caption">The original AtB Contract Market, unchanged since 2014.</p>
</div>

### Chaos Campaign Integration

nuContract gives us an unprecedented opportunity to redefine what a contract is. After months of deliberation I settled on *Hot Spots: Draconis Reach* as the primary source material for nuContract's ideas. I imagine that may be divisive so I want to talk about why I reached that decision.

Hot Spots is the campaign system being currently supported by CGL, while *Campaign Operations* (CamOps) has fallen by the wayside. There is a wealth of information about Chaos Campaigns and the Hot Spots system itself, whereas with CamOps we're forced to figure things out with rules questions frequently going unanswered on the forums.

To reinforce this, I was the developer that introduced the majority of the CamOps systems in MekHQ. Not a single one of those was implemented without major balance or usability issues. In a tabletop campaign, a GM can easily adjudicate ambiguous rules, or tweak campaign balance on the fly; we do not have that luxury. The complexity of CamOps also made it difficult to create supporting house rules without contradicting other, interdependent systems.

While Hot Spots *is* a simpler system, this simplicity makes it smoother to integrate into MekHQ. It also makes it easier for us to introduce those wonderfully crunchy homebrewed systems you all love.

There are no plans to wholly replace all CamOps systems - such as repair - with Hot Spots analogs. Instead, we're going to start rolling out Hot Spots systems (as campaign options) that players can use should they wish. The new contract market is one of those rare cases where I had to pick one route. I ask that players keep an open mind and wait to experience nuContract themselves before judging it too harshly.

<div class="corerules-figure" style="max-width: 766px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_04.png' | relative_url }}"
    width="766"
    height="836"
    alt="The Market Rules campaign options, with Market Method set to Chaos Campaign and a long list of contract and salvage settings"
  />
  <p class="corerules-caption">nuContract is supported by a wealth of Campaign Options.</p>
</div>

## Brand New Contract Market

With the preamble out of the way, let's talk about the fun stuff. Where better to start than the problem that prompted this entire project: the contract market.

As you can see below, the contract view has seen massive visual improvements. The goal here was to give you the information you needed at a glance, while also presenting it in a visually pleasing fashion.

This is still a work in progress, so if you have any feedback, let us know.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_05.png' | relative_url }}"
    width="1353"
    height="964"
    alt="The new Contracts Available board: a list of operations on the left, and a briefing dossier on the right with the employer's message, a route map, terms, intel, money and the target planet"
  />
  <p class="corerules-caption">The goal of the new market was to be visually pleasing without sacrificing usability.</p>
</div>

### GM Tools

nuContract brings a bevy of new GM Tools. One of the limitations of the old market was that a GM could not edit an offer until after it had been accepted, and even then, the editable options were still very limited.

nuContract gives GMs the ability to truly direct their stories. Contracts can be edited, created from scratch, generated, and deleted, all from within the contract market interface. Don't worry, you'll have access to this interface even if you have the automated market disabled in your settings.

Furthermore, all manually created contracts will appear in the market just like the automated ones. This means you now have the ability to hand craft several contracts at once and then allow your players to pick the one they fancy.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_06.png' | relative_url }}"
    width="1093"
    height="641"
    alt="The GM contract editor open on The Job tab, with fields for objectives, target system, dates, scale and victory points"
  />
  <p class="corerules-caption">Your campaign, your rules. Edit and create contracts with powerful new tools.</p>
</div>

### Generation Changes

Aside from the extra tools for handcrafted contracts, automated contract generation has also seen *massive changes.*

First, we have completely rewritten how contracts generate their employer, enemy, and location. One of the things I didn't like with the old system was how random it could feel. I wanted to take this opportunity to expand our contract generation tech so that the contracts themselves told a story. You can read more about that [here](https://github.com/MegaMek/mekhq/pull/9598).

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_07.png' | relative_url }}"
    width="901"
    height="215"
    alt="An employer's negotiator describing a reconnaissance-in-force mission, next to a route map from Erod's Escape to Orkney"
  />
  <p class="corerules-caption">Employers react to the mission and to your Faction Standings (Text by Tzahr).</p>
</div>

#### Covert & False Flag Operations

One of the fun parts of the BattleTech setting is its politics, so now contracts can be generated as covert operations. These are not officially endorsed by your employer, and they may even hide their real identity, or even set you up against nominally allied factions! Covert operations include some of the sneakier missions, like deep raids and black ops insurgency contracts.

Rarely a covert mission may be a false flag operation, where the listed employer is not who they say they are. Be careful, lest your campaign become a pawn on someone else's board. Don't worry though, there are clear signs that a contract is not as it seems. In the end, it is up to you to decide whether the increased pay is worth the risk of being manipulated.

<div class="corerules-figure" style="max-width: 787px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_08.png' | relative_url }}"
    width="787"
    height="183"
    alt="Employer settings showing a contract shown as the Republic of the Sphere, with a hidden secret backer of the Draconis Combine"
  />
  <p class="corerules-caption">Not every contract is as it seems...</p>
</div>

### Special Employers

The great houses aren't the only ones in the market for MekWarriors with negotiable morals. You can now expect contracts to be offered by local merchant groups, civilian governments, nobles, and other fun and colorful characters and organisations of various stripes.

You may also find ComStar and the Word of Blake pulling their usual shenanigans, especially now they're capable of using other factions as fronts...

<div class="corerules-figure" style="max-width: 784px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_09.png' | relative_url }}"
    width="784"
    height="185"
    alt="Employer settings for a corporation shown as Pioneer Technologies, working for the Capellan Confederation, with ComStar as the hidden secret backer"
  />
  <p class="corerules-caption">How do you do fellow Capellans?</p>
</div>

### Contract Uniqueness

Under AtB all contracts could feel the same. Other than a few financial differences, there wasn't really enough to differentiate two contracts of the same type. With that in mind I implemented four new systems: hidden intel, special contract clauses, contract characteristics, and non-negotiable clauses. These interplay to help each contract feel like a more unique offering compared to AtB.

#### Hidden Intel

An employer posting a contract can choose to withhold certain information, like the allegiance of your opponent, their veterancy, or the quality of their equipment. Or that of your allies! A truly paranoid employer might even withhold the contract type entirely.

<div class="corerules-figure" style="max-width: 603px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_10.png' | relative_url }}"
    width="603"
    height="165"
    alt="Contract terms beside an Intel panel where Allied Command, Threat and Morale all read No Intel"
  />
  <p class="corerules-caption">Without perfect intel you need to follow your gut.</p>
</div>

#### Special Contract Rules

Some contract types also come with unique special rules taken from *Hot Spots: Draconis Reach*.

Cadre Duty, for example, sees you training local forces. As all combat is simulated, you take no damage or injuries, but that of course also means there is no salvage. Guerrilla Contracts, on the other hand, have all support payments doubled, but only collected at the end of the contract. While Pirate Raids will allow you to seize loot that will provide an extra cash injection when the booty is sold as soon as the contract is over.

These special rules are clearly shown in the contract market, so you don't need to worry about missing anything.

<div class="corerules-figure" style="max-width: 422px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_11.png' | relative_url }}"
    width="422"
    height="165"
    alt="Three contract offers, one tagged Simulated Damage and Reduced Combat Pay"
  />
  <p class="corerules-caption">Cadre Duty means simulated damage, perfect for training your personnel.</p>
</div>

#### Contract Characteristics

Finally, contracts can now be generated with special characteristics. For example, a contract might be marked as 'High Pay', increasing monthly pay by 25%. Another might be part of a 'Media Blackout', resulting in no gain or loss to Faction Standings. Or maybe the contract is 'Demanding', requiring more Victory Points than normal.

There are 22 total characteristics to pick from, and while there isn't a limit on how many a contract can have, 0-2 is most common. GMs can add or remove characteristics from a contract at any time.

<div class="corerules-figure" style="max-width: 307px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_12.png' | relative_url }}"
    width="307"
    height="216"
    alt="Contract terms with three characteristic tags: Completion Bonus, High Intensity and Signing Bonus"
  />
  <p class="corerules-caption">Unique characteristics make for unique experiences.</p>
</div>

### Reputation & Negotiations

I'm sure you've all had this experience: your elite negotiator rocks up to try and get you a better deal, only for the clause to get significantly worse. This is because negotiations followed the old AtB rules, where even legendary characters could barely tilt the scales.

With our move towards *Hot Spots: Draconis Reach* we were able to implement its accompanying negotiation system. There, instead of negotiations being random, you get a number of 'negotiation points' based on your Reputation.

This gives you a deterministic way to influence the terms you actually want to change, which helps reduce the likelihood of certain contracts generating as complete duds. That doesn't mean negotiators are irrelevant, however. More on them later.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_13.png' | relative_url }}"
    width="960"
    height="683"
    alt="The new negotiation screen: a step track for each contract term, rented facilities below, and your negotiator and theirs on the right"
  />
  <p class="corerules-caption">Brand new negotiations come with a brand new, modern, interface.</p>
</div>

#### Non-Negotiable Terms

As part of the contract uniqueness pass, we've implemented a system where some contract clauses can be non-negotiable. These are clauses (such as salvage percentage) where the employer has no interest in negotiating.

<div class="corerules-figure" style="max-width: 611px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_14.png' | relative_url }}"
    width="611"
    height="429"
    alt="Negotiation terms where Base Pay and Salvage are marked Locked by the employer"
  />
  <p class="corerules-caption">Not every employer is willing to bend to your will.</p>
</div>

#### Active Negotiation

When shopping for a contract you can assign a negotiator; this negotiator can use their Skills to unlock non-negotiable clauses or increase the quality of random clauses.

Active Negotiation uses an opposed Negotiation skill check, with some employers having access to more experienced negotiators than others. If the employer wins, you could find yourself with additionally locked or degraded clauses.

<div class="corerules-figure-row">
  <div class="corerules-figure" style="flex-grow: 0.758;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_15.png' | relative_url }}"
      width="307"
      height="405"
      alt="The employer's negotiator panel showing your chances against them, with buttons to ask for a better offer or an exception"
    />
    <p class="corerules-caption">The right word at the right moment can turn the tide.</p>
  </div>
  <div class="corerules-figure" style="flex-grow: 1.614;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_16.png' | relative_url }}"
      width="1012"
      height="627"
      alt="The Choose Your Negotiator screen, ranking four administrators by skill and chance of success"
    />
    <p class="corerules-caption">Your negotiator matters, choose wisely.</p>
  </div>
</div>

### Reputation

In 0.51.01 we've added an experimental feature that allows players to split their forces between multiple locations. You might have a home planet where your dependents live, while the rest of the campaign is off earning money elsewhere in the Inner Sphere. In 0.51.02 we are planning to expand this further, allowing you to also conduct multiple concurrent contracts between different locations.

While this is something players have wanted for years, it comes at a cost. There is no way to make CamOps Reputation work with force splitting, from either a code standpoint, or balancing.

Does a unit with three individually operating forces gain Reputation at 300% speed? How do you handle the Reputation of a player dissolving one of their forces, but not the other? Finally, running the Reputation evaluators is fairly resource-intensive, and running it multiple times for multiple forces would be demanding.

These are just examples of problems we found with CamOps Reputation. With this in mind:

<div class="corerules-callout corerules-note">
  CamOps Reputation is now being considered a legacy system. This means it will be maintained, but it is no longer being developed.
</div>

#### Introducing Individual Reputation

Given the problems with CamOps Reputation, we turned again to *Hot Spots: Draconis Reach*. However, that also shared many of the predicted issues. Chiefly, Reputation could still run away far too easily. However, Hot Spots Reputation is a very simple system and that did open the door to a solution: Individual Reputation.

When individual reputation is enabled, all characters have their own Reputation score. If a character is assigned to a force that wins a contract, their Reputation goes up. If the force does something naughty? Their reputation goes down.

If the force disbands, everyone carries their reputation with them. The reputation of a force is determined by an average of the personnel within it. So, a force of goody two-shoes can offset the low Reputation from Lt. Naughty Pants, but not completely negate it.

For the mathematically inclined, I did explore a handful of different approaches here, including a gaussian average. I opted to keep with the classic mean as it's the easiest for the average user to grasp, and I also felt it provided the best results.

To reduce name-based confusion, the unrelated ATOW Trait 'Reputation' has also been rebranded to 'Fame'.

<div class="corerules-figure" style="max-width: 630px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_17.png' | relative_url }}"
    width="630"
    height="268"
    alt="A MekWarrior's personnel record, ending with a Chaos Reputation score of 6"
  />
  <p class="corerules-caption">Individual Reputation means everyone matters.</p>
</div>

## StratCon Overhaul

Pushing pesky math aside, my quest to help differentiate individual contracts extended beyond the market layer. StratCon is amazing, but it was limited by the technology that existed when it was developed. With nuContract I wanted to take the opportunity to update StratCon to benefit from the advancements we've made in the past five years.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_18.png' | relative_url }}"
    width="1434"
    height="727"
    alt="The StratCon screen: a sector map with roads and facilities, a Sector Environment panel, threat and support gauges, and a row of GM tools"
  />
  <p class="corerules-caption">StratCon updated for 2026.</p>
</div>

### Map Generation

The biggest change concerns how StratCon sectors are generated. In 0.51.01, you are going to see fewer, but bigger sectors. For most campaigns you can expect only a single Sector per contract by default. If you prefer many smaller sectors, don't worry. Everything is supported by extensive campaign options.

The sector changes don't end there. For the most part, older sectors were generated randomly. While some planetary conditions were factored in, the vast majority were not. Now, the entire process has been rewritten. The new system is designed to try and create believable landmasses, taking full advantage of all available planetary data. And, if you don't like what MekHQ generated, new GM tools have been added that allow you to completely redraw the sector if you wish - perfect for handcrafted GM contracts.

You can read more about the changes to sector generation [here](https://github.com/MegaMek/mekhq/pull/9670).

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_19.png' | relative_url }}"
    width="908"
    height="544"
    alt="A polar StratCon sector covered in ice and snow, with a chain of volcano hexes and a hostile militia barracks"
  />
  <p class="corerules-caption">Every sector is unique and based on the planet you're on.</p>
</div>

### Scenario Changes

While the main focus of nuContract was on the contract layer, some changes have been made to scenarios as well. The terrain of a scenario will now better reflect the StratCon hex it appears in. Get a scenario in a city placed in the middle of a volcano hex? Well, best look forward to fighting in Dr Evil's Volcano Lair!

I also conducted an in-depth review of all scenario types, which revealed how similar many of them were. This led me to removing numerous types and replacing them with more distinctive versions. Pay careful attention to scenario objectives in 0.51.01, as every scenario was rewritten using a new dev tool.

There are still a lot of other scenario changes I have planned, but these are scheduled for next year's Scenario Overhaul Project. nuScenario plans to upgrade scenarios to a similar scale that nuContract has for contracts, so look forward to that!

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_20.png' | relative_url }}"
    width="958"
    height="769"
    alt="A MegaMek battle map of dark volcanic ground with lava hexes and buildings"
  />
  <p class="corerules-caption">I hope you know the rules for magma...</p>
</div>

### Contract Special Mechanics

I mentioned in the contract market portion that I wanted to help contracts feel unique. This was especially a problem in StratCon's objectives, where all contracts were variations on 'kill this', 'destroy that', and 'protect here'.

Introducing the 'Nav Point' system! This allows MekHQ to place points of interest on the StratCon map. These aren't facilities or scenarios, but still require you to deploy forces to resolve them.

What a Nav Point specifically means - and whether they're even used - will depend on the type of contract. For a Planetary Assault, Nav Points represent strategic positions. Deploy forces there, but be careful, there's a chance the OpFor will do the same. On a Mole Hunt, the Nav Points represent leads that could potentially help you uncover the Mole. Pirate Hunt? Well, here the Nav Points are sightings of the pirate captain. Find and eliminate them to end the contract early!

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_21.png' | relative_url }}"
    width="917"
    height="676"
    alt="A Civil Disobedience Nav Point on a StratCon map, with a tooltip warning that the unrest may turn into a riot"
  />
  <p class="corerules-caption">Some Nav Points add a spin on familiar challenges.</p>
</div>

### Reworked Facilities

All facility mechanics have also been completely rewritten. New facilities have been added, some have been nerfed, and overall the system is now far more involved. If you want a good touch point, imagine Total War strongholds, but with a MekHQ bent.

Attacking a facility isn't just a case of deploying, fighting a scenario, and then walking away with your free base anymore. Now you need to recon to gather intel, launch successive assaults to whittle down the garrison, or even set up blockades to break their supply lines - those airbases can't launch fighters if they don't have fuel!

When it's time to attack the base, maybe you can avoid a fight entirely by setting up a siege and starving out your opponent. But beware, the enemy might make a counter attack before they allow that to happen!

What about your own bases? Build and upgrade outposts to give yourself the advantage, then choose whether to garrison them yourself or hand them to your employer. Each has pros and cons, so weigh your options carefully. Don't worry, though, this isn't a one-sided affair. Look forward to enemy engineers trying to build outposts of their own!

One of your outposts is under attack? Rush to the defence, or - if it's garrisoned by your employer - let their forces handle it. You're no longer the only person responding to base attacks.

<div class="corerules-callout corerules-caution">
  <h3>Experimental</h3>
  <p>Of all the systems added by nuContract, this is the most experimental. It is supported by a wealth of Glossary information, but you should anticipate an all-new learning curve.</p>
  <p>Please provide feedback so the system can be improved.</p>
</div>

<div class="corerules-figure" style="max-width: 609px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_22.png' | relative_url }}"
    width="609"
    height="558"
    alt="A hostile orbital defense base on the StratCon map, with a tooltip listing its garrison, traits, supply line and what it does to fights in the sector"
  />
  <p class="corerules-caption">Facilities are now a puzzle you need to solve if you want to win.</p>
</div>

### Salvage Overhaul

The last of the major feature changes concerns salvage. Since we introduced CamOps Salvage we have received a wealth of player feedback. While our implementation of Salvage was rules-as-written, we quickly became aware of several issues players were having.

<div class="corerules-callout">
  <h3><i aria-hidden="true" class="fas fa-screwdriver-wrench"></i> Five Salvage Models</h3>
  <p>In 0.51.01 you will be able to choose from five models:</p>
  <ul>
    <li><strong>Legacy</strong> is the old AtB system; it's largely a fallback and continues to exist just because removing it would be more hassle than leaving it in.</li>
    <li><strong>CamOps (Strict)</strong> is identical to the 0.51.0 Milestone implementation.</li>
    <li><strong>CamOps (Revised)</strong> follows the official CamOps rules, but with some quality of life improvements I'll cover shortly.</li>
    <li><strong>Chaos Campaign</strong> follows the salvage rules in <em>Hot Spots: Draconis Reach</em>. This is very similar to Legacy in that you don't need salvage units. If Legacy is ever removed this model will replace it entirely.</li>
    <li><strong>MekHQ</strong> marries the Chaos Campaign model with CamOps (Revised) giving you the best of both worlds.</li>
  </ul>
</div>

<div class="corerules-figure" style="max-width: 746px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_23.png' | relative_url }}"
    width="746"
    height="143"
    alt="The Salvage System dropdown listing Legacy, CamOps (Strict), CamOps (Revised), Chaos Campaign and MekHQ"
  />
  <p class="corerules-caption">Salvage your way.</p>
</div>

#### Quality of Life Improvements

The quality of life improvements I'm about to describe are only used by the CamOps (Revised) and MekHQ salvage models.

- If a salvage formation is involved in a scenario, the formation will still be able to conduct salvage operations after the scenario.
- A 'Mek missing a leg cannot participate in salvage operations.
- 'Meks are no longer limited to just dragging away salvage. Now they can utilize cargo and lift hoists like any other unit.
- Units using cargo to remove wrecks can recover as many units as they can carry.
- When salvaging aerospace or small craft on the space map, salvage craft can recover as many units as they have appropriate bays and doors for.

It is my hope that, with these changes, the worst causes of player frustration will be resolved.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_24.png' | relative_url }}"
    width="1090"
    height="705"
    alt="The Salvage Operation screen, listing available techs with their remaining minutes and a salvage crew panel"
  />
  <p class="corerules-caption">Salvage assignment has been completely overhauled based on player feedback.</p>
</div>

#### Salvage Percent

How the salvage percentage clause operates has also changed, though these changes only apply if using the Chaos Campaign or MekHQ salvage models.

Salvage percent is no longer the percentage of units that you get to keep as salvage. Instead, it is the percentage of any individual wreck's worth that you own. As an example, if you have 25% salvage and you have a wreck worth 4 million C-Bills, you can either be paid 1 million, or you can pay 3 million to keep the wreck.

For more information please see *Hot Spots: Draconis Reach*.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_25.png' | relative_url }}"
    width="1118"
    height="724"
    alt="The Salvage Recovery screen: a list of wrecks with their value, and a dossier where you assign salvage units and choose to leave each wreck with the employer or buy it"
  />
  <p class="corerules-caption">An updated salvage dialog gives you all the tools you need to succeed.</p>
</div>

#### Clantech & Stealing Salvage

If you face the Clans before Tukayyid you currently don't get to salvage any of their equipment. While this is accurate to BattleTech's lore, it felt too restrictive on player storytelling.

With nuContract I've kept the core mechanic: employers still invoke special clauses to prevent you getting that juicy clantech. If you have an Inner Sphere employer prior to Tukayyid however, any Clan or Mixed Tech is valued at 200%. This makes fighting on the Clan Front potentially very lucrative, since a wreck that would normally be worth 10 million C-Bills will now be worth 20 million C-Bills!

But there's more. What if you really want that Mad Cat, or Mad Dog, or Mad Badger? A new option has been added to the salvage dialog (MekHQ model only), which allows you to pay nothing and keep whatever you can carry. As this is quite literally grand theft clantech, however, the contract will end the next day and be counted as a Contract Breach. Whether the loot is worth the Reputation hit is entirely left to your discretion.

<div class="corerules-figure" style="max-width: 732px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_26.png' | relative_url }}"
    width="732"
    height="386"
    alt="A tech asking 'Steal the Salvage?', warning that the contract will be breached and end immediately"
  />
  <p class="corerules-caption">Naughty naughty...</p>
</div>

## Other

That's all of the major features out of the way. Before I close off, I want to highlight a couple of smaller changes as well.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_27.png' | relative_url }}"
    width="1012"
    height="582"
    alt="A scenario briefing transmission listing the objectives, with Commence Drop and Return to the Launch Bay buttons"
  />
  <p class="corerules-caption">Update briefings give you the information you need.</p>
</div>

### Formation Role Updates

Combat formations (Patrol, Maneuver, Frontline, etc) have been updated in 0.51.01. The goal was to give each role a more defined purpose:

- **Patrol**: unchanged.
- **Maneuver**: better at reinforcing.
- **Frontline**: can deploy extra units using Tactics and Leadership.
- **Training**: this role is unchanged, but the Training mechanic itself has been wholly rewritten. We're really sorry for the issues players had with Training in 0.51.0 Milestone.
- **Auxiliary**: cannot be deployed directly, but can be deployed as reinforcements or as leadership units.
- **Reserve**: cannot be deployed at all.

Cadre has been removed because contract formation requirements have also been removed.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_28.png' | relative_url }}"
    width="947"
    height="608"
    alt="The new Deployment dialog, with tabs for Primary, Reinforce, Auxiliaries and Utility, and a dossier of the selected lance"
  />
  <p class="corerules-caption">We have updated all deployment dialogs based on player feedback.</p>
</div>

## Conclusion

Well, all good things must come to an end, and all bad things too. If you've got this far, thank you for sticking with me.

nuContract has dominated my life for five straight months and I am incredibly excited to see what you all think.

We've got another dev blog lined up for next week, where Hammer will be talking about a bunch of cool MegaMek features. Then, the week after I'll be back to chat about the massive economic changes coming in 0.51.01. Look forward to me waffling on about game balance, run away profits, and preventing snowballing!

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-20-the-contract-overhaul-project/Image_29.png' | relative_url }}"
    width="954"
    height="824"
    alt="The contract debrief screen, showing the combat record, objectives, pay and a choice of Success, Partial, Failure or Breach"
  />
  <p class="corerules-caption">We've updated the contract end dialog to remove the guesswork.</p>
</div>

Until then, stay safe MekWarriors.

*If you've got questions or feedback, come find us on [Discord](https://discord.gg/megamek).*
