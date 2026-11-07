---
layout: post
title: "Feature Highlight: Balancing Gameplay & Economics in 0.51.01"
date: 2026-11-07
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap">

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

/* Smaller screenshots sit beside the text instead of between paragraphs,
   alternating sides. On narrow screens they drop back into the column. */
.corerules-figure.corerules-float-right,
.corerules-figure.corerules-float-left {
  width: 46%;
  margin-top: 0.35rem;
  margin-bottom: 1.25rem;
}
.corerules-figure.corerules-float-right {
  float: right;
  margin-left: 1.75rem;
  margin-right: 0;
}
.corerules-figure.corerules-float-left {
  float: left;
  margin-right: 1.75rem;
  margin-left: 0;
}
/* Headings and full-width blocks always start below any float */
h2, h3, h4,
.corerules-callout,
.corerules-figure-row,
.corerules-figure:not(.corerules-float-right):not(.corerules-float-left),
.pillars-temple {
  clear: both;
}
@media (max-width: 767px) {
  .corerules-figure.corerules-float-right,
  .corerules-figure.corerules-float-left {
    float: none;
    /* !important beats a per-figure inline width */
    width: auto !important;
    margin: 1.75rem auto;
  }
}

/* The Project Tycoon teaser, drawn like the Enhanced Imaging display from
   the animated series: a starfield sky, wireframe mountains, a neon grid
   floor, a green wireframe subject, red stat lines and a waveform readout,
   all under CRT scanlines. Fixed colours, so it reads the same in light and
   dark. Text sizes follow the panel width (container query units). */
.tycoon-ei {
  position: relative;
  container-type: inline-size;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  margin: 2rem auto;
  overflow: hidden;
  border: 1px solid #2cff6a;
  border-radius: 8px;
  background-color: #000;
  box-shadow: 0 0 22px rgba(44, 255, 106, 0.25);
  font-family: "Orbitron", "Consolas", monospace;
}
.tycoon-scene {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
/* CRT scanlines and a soft vignette over the whole screen */
.tycoon-ei::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.28) 0, rgba(0, 0, 0, 0.28) 1px, transparent 1px, transparent 3px),
    radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, 0.55) 100%);
}
.tycoon-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
.tycoon-stats {
  position: absolute;
  top: 7%;
  right: 6%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.6cqw;
  color: #ff5f73;
  font-size: 3.6cqw;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-shadow: 0 0 0.5cqw #ff3d57, 0 0 1.4cqw rgba(255, 61, 87, 0.7);
}
.tycoon-readout {
  position: absolute;
  right: 6%;
  bottom: 8%;
  display: flex;
  align-items: center;
  gap: 1.4cqw;
}
.tycoon-wave {
  width: 26cqw;
  height: 5.6cqw;
  border: 0.25cqw solid #39ff6e;
  box-shadow: 0 0 1cqw rgba(57, 255, 110, 0.6), inset 0 0 1cqw rgba(57, 255, 110, 0.3);
  padding: 0.4cqw 0.8cqw;
}
.tycoon-wave svg {
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
}
.tycoon-wave path {
  fill: none;
  stroke: #39ff6e;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  filter: drop-shadow(0 0 3px #39ff6e);
  animation: tycoon-trace 2.6s linear infinite;
}
@keyframes tycoon-trace {
  80%, 100% { stroke-dashoffset: 0; }
}
.tycoon-clue {
  display: flex;
  flex-direction: column;
  color: #39ff6e;
  text-transform: uppercase;
  text-shadow: 0 0 0.6cqw rgba(57, 255, 110, 0.8);
  line-height: 1.15;
}
.tycoon-clue-label {
  font-size: 1.5cqw;
  letter-spacing: 0.25em;
  opacity: 0.75;
}
.tycoon-clue-name {
  font-size: 2.7cqw;
  font-weight: 700;
  letter-spacing: 0.08em;
}
@media (prefers-reduced-motion: reduce) {
  .tycoon-wave path {
    animation: none;
    stroke-dashoffset: 0;
  }
}

/* The four pillars of player power, drawn as a temple: a pediment on top,
   four fluted columns, and a stepped foundation. Theme colours only, so it
   works in light and dark. Two columns per row on narrow screens. */
.pillars-temple {
  max-width: 760px;
  margin: 2rem auto;
}
.pillars-pediment {
  background-color: var(--accent-color);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.55rem;
}
.pillars-pediment span {
  color: var(--card-color);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.pillars-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem 0.75rem;
  padding: 0 0.5rem;
  border-top: 6px solid var(--accent-color);
}
.pillar {
  flex: 1 1 140px;
  max-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pillar-capital,
.pillar-base {
  width: 100%;
  height: 14px;
  background-color: var(--accent-color);
  border-radius: 2px;
}
.pillar-capital {
  margin-top: 0.4rem;
}
.pillar-shaft {
  width: 78%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 0.4rem;
  text-align: center;
  background-color: var(--card-color);
  /* Fluting: thin vertical grooves down the shaft */
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 10px,
    rgba(127, 127, 127, 0.14) 10px,
    rgba(127, 127, 127, 0.14) 12px
  );
  border-left: 2px solid var(--accent-color);
  border-right: 2px solid var(--accent-color);
}
.pillar-shaft i {
  font-size: 1.8rem;
  color: var(--accent-color);
}
.pillar-shaft strong {
  font-size: 1.05rem;
  line-height: 1.3;
}
.pillar-shaft span {
  font-size: 0.9rem;
  font-style: italic;
}
.pillars-foundation {
  height: 12px;
  margin: 0 -0.5rem;
  background-color: var(--accent-color);
  border-radius: 2px;
  box-shadow: 0 8px 0 -2px var(--accent-color);
  opacity: 0.85;
}
@media (max-width: 575px) {
  .pillar {
    flex-basis: 40%;
  }
  .pillar-shaft {
    min-height: 170px;
  }
}
</style>

*By Illiani*

<div class="corerules-callout corerules-fiction">
  <p>Marcus Smoke Jaguar was a wizard of accounting. Finances were his domain. Graphs bent to his will. Numbers recognized <em>his</em> sovereignty. Which is why it was frustrating that the MekWarrior did not.</p>
  <p>"I understand, but Operation Revival takes precedence."</p>
  <p>He doubted the Star Colonel could even count to ten. How could Marcus make him understand the demands of logistics, of supply chains, of prioritized distribution? That was the problem with MekWarriors. They all expected to be first in line, not conceiving others demanded the same.</p>
  <p>"I can put in the request, but I do not think the Galaxy Commander will listen."</p>
  <p>In the decadent Inner Sphere money was power. An anathema to the Way of the Clans, of course. But Marcus could not help but imagine a world where he was recognized for his economic brilliance.</p>
  <p>"Neg, of course Star Colonel. I understand completely."</p>
  <p>In that world Marcus would be Khan. No, ilKhan! Head of a mercantile empire the likes of which the Inner Sphere had never seen. The so-called Great Houses would beg him for high quality merchandise. Trials would be fought for <em>his</em> favor...</p>
  <p>"I am sorry, Star Colonel. I will try harder. I promise."</p>
  <p>What a world that would be...</p>
</div>

## The Top Bit

Howdy MekFriends. I'm Illiani, the lead developer of MekHQ. I'm sorry this blog has taken so long to finish. I ended up rewriting it three times as I strived to find the right balance of information and length. For anyone unaware, today I'm going to be donning my games designer hat; I'm going to talk about the design philosophy that goes into balancing MekHQ, combined with some chatter about gameplay and economics in 0.51.01.

I will also warn you, this is another lengthy one. So grab yourself a snack, a coffee and let's talk game design!

<div class="corerules-callout corerules-warning">
  <h3><i aria-hidden="true" class="fas fa-triangle-exclamation"></i> Important: Existing Campaigns</h3>
  <p>As usual, 0.51.01 will happily import your older campaigns. As 0.51.01 is a whole new beast that really deserves to be faced on its own terms, however, I'm going to be upfront and tell you that if there ever was a time to start a new campaign... It's now. If you <em>do</em> choose to continue with an existing campaign, please upgrade using one of the default presets!</p>
  <p><strong>If you try to use campaign options configured for 0.51.00 you are going to have a <em>terrible</em> time in 0.51.01.</strong></p>
</div>

That out of the way, let's move onto the fun stuff!

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/01_commandGenerator.png' | relative_url }}"
    width="1545"
    height="878"
    alt="The Command Designer screen, building a twelve-unit mercenary Mek company with a roster of lances on the left and totals for battle value, tonnage and pilot skill on the right"
  />
  <p class="corerules-caption">A beginning is a very delicate time, but with the new command generator you can hit the ground running.</p>
</div>

## Balancing the Unbalanceable

<div class="corerules-callout corerules-note">
  "Given the opportunity, players will optimize the fun out of a game."<br>
  <span style="font-weight: 400; font-style: italic;">- Soren Johnson, lead designer of Civilization IV</span>
</div>

This is one of those famous quotes that gets thrown about whenever discussing game design. However, while true, I want to focus on Sid Meier's follow up: "*Water finds a crack*."

In *Snakes & Ladders,* players take turns rolling 2d6, moving their meeple, and hoping they land on a ladder and not a snake. This is an example of a play pattern. Simply: a pattern of behavior performed while playing a game. "Water finds a crack" refers to the tendency for players to seek out the play pattern that produces the best result with the least effort. Like water, they take the path of least resistance.

Returning to *Snakes & Ladders;* let's change the rules. Instead of rolling dice, the player can choose to progress to the next ladder automatically. Obviously, now the optimal way to win would be to hop from ladder to ladder. But is it the most fun? Probably not.

It's a common mistake to think of balancing in terms of making things equal. In our revised *Snakes & Ladders* there is now perfect mechanical balance, but the game suffers for it. Instead, the goal is to ensure that there are multiple, viable, routes to victory.

Let's change *Snakes & Ladders* one more time. Now the player can choose to travel 6 steps, or roll their dice. Whether to roll becomes a strategic choice. 7 is the average result on 2d6, but you could easily roll below 6. Heck, sometimes 6 might be the number needed to reach a ladder. With this simple change we've created multiple routes to victory and the game is more fun for it.

This is the philosophy I bring to MekHQ. When I'm talking about balance I'm not talking about making things equal. Instead, my goal is to encourage multiple ways to play. In this way, I hope to guide MekHQ towards its most enjoyable conclusion.

## Four Pillars of Power

Before we can talk about balancing MekHQ we need to understand where player power originates. This is important, because if we don't know how players win we can't challenge them. There are four pillars that fuel player power in MekHQ:

<div class="pillars-temple" role="list" aria-label="The four pillars of player power">
  <div class="pillars-pediment" aria-hidden="true"><span>Player Power</span></div>
  <div class="pillars-row">
    <div class="pillar" role="listitem">
      <div class="pillar-capital"></div>
      <div class="pillar-shaft">
        <i aria-hidden="true" class="fas fa-lightbulb"></i>
        <strong>Player Knowledge</strong>
        <span>What you know</span>
      </div>
      <div class="pillar-base"></div>
    </div>
    <div class="pillar" role="listitem">
      <div class="pillar-capital"></div>
      <div class="pillar-shaft">
        <i aria-hidden="true" class="fas fa-boxes-stacked"></i>
        <strong>Materiel</strong>
        <span>What you field</span>
      </div>
      <div class="pillar-base"></div>
    </div>
    <div class="pillar" role="listitem">
      <div class="pillar-capital"></div>
      <div class="pillar-shaft">
        <i aria-hidden="true" class="fas fa-coins"></i>
        <strong>Money</strong>
        <span>What you spend</span>
      </div>
      <div class="pillar-base"></div>
    </div>
    <div class="pillar" role="listitem">
      <div class="pillar-capital"></div>
      <div class="pillar-shaft">
        <i aria-hidden="true" class="fas fa-user-graduate"></i>
        <strong>Character Skill</strong>
        <span>Who you command</span>
      </div>
      <div class="pillar-base"></div>
    </div>
  </div>
  <div class="pillars-foundation" aria-hidden="true"></div>
</div>

A player's power projection is how well they can use each pillar to overcome MekHQ's challenges. Balance, therefore, is ensuring that success requires a player to draw from multiple pillars. It's important that no single pillar overwhelms the others. If you could win every contract by paying a million C-Bills, suddenly there is no need to invest in anything else, for example.

## Player Knowledge

Of our four pillars, player knowledge is the one that transcends individual campaigns. The more a player knows, the easier MekHQ becomes. New systems are released every version, so the game remains fresh but therein lies our problem. Over the years MekHQ has become an incredibly complex game. Players don't need to just know how to play BattleTech, but also all the systems unique to MekHQ. This creates a very significant barrier to entry.

In the past we've been pretty terrible at explaining systems to new users. There was even a time where systems would be added without any documentation (player-facing, or otherwise), while the documentation that did exist quickly fell out of date. To try and address this issue we added the in-game glossary, which has quickly grown to include numerous entries. Unless you already know what you're looking for, however, it can be hard to find the specific entry that has the exact answer you're looking for. Similarly, new or updated entries are hard to spot, and as we add more information this is only going to become worse.

In 0.51.01, we adopted a new approach to tutorialization. As systems are updated to the modern UI style, we're also going to be adding tutorial panels that appear the first time you open a dialog. They'll tell you about the dialog, how to use it, and any useful terms you should know. We've never tried anything like this before, so we would love your feedback!

Naturally, the Glossary is being updated to this style as well, and we've also added search functionality to it. Typing in 'fatigue', for instance, will show every glossary entry that mentions the word 'fatigue' in the entry's title, or text. We also went ahead and added the ability to quickly spot new or updated entries.

New and returning players are the life blood of any game; if we want MekHQ to grow, it is vital that we lower the barrier to entry. Don't worry, MekHQ isn't being dumbed down, but it is hopefully becoming easier to learn.

<div class="corerules-figure-row">
  <div class="corerules-figure" style="flex-grow: 1.545;">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/02_tutorialPanel.png' | relative_url }}"
      width="1482"
      height="959"
      alt="The contract market with a How the Board Works guide panel open on the right, walking through six numbered steps from scanning the board to accepting an offer"
    />
    <p class="corerules-caption">Tutorials at your fingertips. No more fumbling in the dark.</p>
  </div>
  <div class="corerules-figure" style="flex-grow: 1.530;">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/03_glossary.png' | relative_url }}"
      width="1175"
      height="768"
      alt="The new Glossary: a searchable list of 178 entries on the left with filters for unread and recently changed entries, and an overview listing everything updated in 0.51.01"
    />
    <p class="corerules-caption">A wealth of information awaits in the new and improved glossary.</p>
  </div>
</div>

## Materiel

Our second pillar relates to the resources you have available to resolve problems. This is things like TO&E formations, spare parts, and replacement units. There is some overlap with the *Money* and *Character Skill* pillars, but I split those out deliberately, and you'll see why later.

While this pillar does include custom units, that's not really something I'm worried about. If a player wants to create an utterly busted "perfect" 'Mek, they should be allowed to! Remember, balance isn't about making all things equal, but about making the encouraged play patterns fun. For players who enjoy it, creating perfect units *is* fun. I'd hate to ruin that out of some misguided pursuit of balance. Especially as many players never customize their units in any meaningful way.

Similarly when I introduced *Force Generation 3*, one of my goals was to add a sense of progression. The intention was for players to feel more powerful as they improved the quality of their units, so some power imbalance is intentional. That said, while better than its predecessors, there are still many issues with *Force Generation 3*. Next year I'm planning to unveil *Force Generation 4*, which will be part of a massive scenario overhaul which I won't be covering here. Please look forward to it!

Moving away from Force Generation, power imbalance within the *Materiel* pillar is focused within three core areas: limited problem scope, infinite growth, and salvage. Let's dive into each and see where improvements can be made.

### StratCon and Limited Problem Scope

StratCon is MekHQ's Digital GM for the strategic contract layer. It's a direct successor to *Against the Bot* which was retired last year. While there was an attempt to also retire StratCon in 2025, we backtracked when we realized a better option wasn't forthcoming.

That said, StratCon suffers from a limited problem scope. It can be useful to imagine problem scope as juggling. The more balls you need to keep in the air, the harder it is to manage each ball. Right now StratCon only really has two balls: scenarios and facilities. Scouting could also be included, but really that system is just in service of the other two.

Past attempts to increase the complexity of StratCon's problem scope have largely failed. For example, in 2025 we increased scenario tempo. Players quickly adjusted and any gains were lost. Failure to increase problem scope has created a situation where the player always has enough resources to respond to every problem, so attempts to change this paradigm needed a different approach.

Remember, the goal is to increase problem scope in StratCon. Ideally, we want to place the player in a situation where they need to make difficult decisions to win. Keep this in mind as you read through the next sections.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/04_areaOfOperations.png' | relative_url }}"
    width="1450"
    height="804"
    alt="A StratCon area of operations with forests, rivers and sea hexes, roads linking facilities, and gauges for Threat Level, Deployment Time, Employer Support, Victory Points and Escalation"
  />
  <p class="corerules-caption">While not as dramatic as other changes, even the AO has been given a new lick of paint.</p>
</div>

### Updating Command Rights

A contract's *command rights* reflect the influence an employer has over the player's deployments. This is really difficult to represent in StratCon in a way that's also fun.

One of the original attempts to model command rights had MekHQ randomly selecting lances and deploying them to scenarios automatically. This resulted in mountains of negative feedback. Later, allies were added to each scenario, with stricter command rights meaning more allies would deploy on your side. Unfortunately all this did was increase scenario size, which in turn meant longer scenarios, while also providing the player with more salvage at the end. We'll come back to the problems of abundant salvage later.

When the *turning point* mechanic was introduced, we tried to use command rights to influence the frequency a scenario was considered a *turning point* (i.e. awards contract victory points). This also failed, as it made balancing *contract victory points* a complete nightmare.

<div class="corerules-figure corerules-float-right">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/05_deploymentOrders.png' | relative_url }}"
    width="676"
    height="368"
    alt="A yellow Deployment Order marker on a badlands hex of the StratCon map, near hostile facilities linked by roads"
  />
  <p class="corerules-caption">You have your orders, commander.</p>
</div>

In 0.51.01, we're completely overhauling command rights by introducing a new mechanic: deployment orders. Deployment orders tell you to deploy a single formation to a specific hex. Each order has a time limit, so while there is some flexibility, you can't wholly ignore them. Deployment orders are also considered *strategic objectives*, so they will affect contract success. Finally, deployment orders can result in a scenario, so you can't just send a single unit on their lonesome to cheat the system.

As you might expect, stricter command rights result in more deployment orders. But, we've taken the system a bit further: in our data some factions are marked as *controlling* or *lenient*. These characteristics are reflected in how frequently an employer issues deployment orders. The goal here is to make the system feel like a natural extension of your employer's personality. The frequency of deployment orders also scales with contract size, ensuring the system always remains relevant.

With the changes made to command rights, all contracts calculate *contract victory points* in the same way. This also means that the chance a scenario will be a *turning point* is the same across all contracts. While it was possible to differentiate different contract types by using *turning points*, I ultimately opted not to do this. I fundamentally liked the *contract victory points* system and I think it's a good indicator of how the player is doing at a tactical level, while adding pressure to not skip every scenario.

### Essential Scenarios

<div class="corerules-figure corerules-float-left" style="width: 34%;">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/06_outOfControl.png' | relative_url }}"
    width="420"
    height="510"
    alt="A narrow StratCon sector with a Pirate Captain sighting, a Deployment Order and an allied facility marked Under Attack, all at once"
  />
  <p class="corerules-caption">If you're not careful, things can spiral out of control...</p>
</div>

Essential scenarios are scenarios that are directly tied to contract success. Prior to 0.51.01, all essential scenarios were generated at the beginning of the contract. Players would then spend the first few weeks hunting pre-generated missions down. Once all the essential scenarios were completed the mechanic essentially ceased to be relevant for the rest of the contract.

In 0.51.01, essential scenarios are slowly generated throughout the contract just like normal scenarios. This ensures the mechanic remains relevant for the entire contract, and also adds a degree of uncertainty.

To balance this, essential scenarios will no longer spawn hidden. In prior releases it felt like a contract's scouting stage was less of a strategic decision and more of a chore. In 0.51.01, I wanted to retain scouting's importance, but remove the need to scout the entire sector in order to weed out all the essential missions. Now, you're encouraged to only perform targeted recon, where you scout specific areas of the sector based on their strategic importance. This is now important, because sectors can generate much larger in 0.51.01 than they did in 0.51.00.

### Unique Contract Mechanics

<div class="corerules-figure corerules-float-right">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/06_navPoints.png' | relative_url }}"
    width="604"
    height="453"
    alt="A High Profile Target nav point on the edge of a frozen polar sector, beyond a line of hostile facilities"
  />
  <p class="corerules-caption">Nav Points can take many forms.</p>
</div>

Prior to 0.51.01, there wasn't a lot of difference between contracts. Largely, they were just variations on who to kill, and how. I consider this a balance issue, because it removes meaningful choice. If I have to ask you to choose between two almost identical red blocks, the choice will cease mattering to most players very quickly.

To combat this, each contract has been given a unique mechanic, which will be both explained in the glossary, and when accepting the affected contract. The goal here is to reinforce player choice and lean into the *player knowledge* pillar. This also allows us to balance overperforming contract types by increasing mechanical demands to make them more challenging.

As a rule, these mechanics revolve around the new nav point system. Nav points are placed in the area of operations and players are required to deploy forces to resolve them. The deployment orders I described earlier also use this system! While most contracts now use the nav point system, the way they're used differs significantly enough to be varied and remain interesting.

### Troublesome Facilities

In StratCon, facilities add additional strategic interest to the area of operations by bolstering scenario forces; they are a problem players cannot ignore. This creates a sense of urgency to the early phase of a contract as the player races to track down and defeat the opposing facilities to reduce pressure.

While I am a big fan of the facility system, it's not without flaws. Certain facilities significantly unbalance scenario play. The classic example are airbases, which could endlessly spawn waves of enemy bombers. As players have very few tools to counter a bombing run, this could quickly decimate their forces in a highly unfun way.

How players interact with facilities also has problems. Once a facility has been found, the only way forward is to deploy your biggest lance and hope to capture or destroy it. Capturing a facility also turns it to your side, which means that all enemy facilities ultimately served to do in the long run was feed bases to the player.

A lot of work has been done to try and balance facilities, such as limiting how often they can deploy forces, but fundamentally the issue was one of limited complexity. If a problem has one specific solution, it ceases to be challenging as soon as the player understands how to solve it.

#### Facilitating Fun

In 0.51.01 we went ahead and overhauled all facility mechanics, including fixing several bugs such as the facility intended to prevent aircraft not actually working. I also went ahead and updated the range of facility types, introducing jamming stations, field fortifications, and militia barracks.

<div class="corerules-figure corerules-float-right" style="max-width: 401px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/08_facilityDetails.png' | relative_url }}"
    width="401"
    height="177"
    alt="A facility tooltip for an Allied Industrial Center: tier Base, condition Intact, garrison 2 of 2, supply connected, allied turrets in fights here, and +1 Employer Support each month"
  />
  <p class="corerules-caption">No more guessing what a facility does.</p>
</div>

Facilities come in three tiers: outpost, base, and stronghold. This influences a facility's maximum garrison points, which are used to represent how well defended the facility is. Larger garrisons come with turrets as well as additional defenders, for example. Fighting at a facility, or placing it under siege, reduces the garrison, and allows you to soften up the facility before the grand assault.

A facility also has three damage states: intact, damaged, and crippled. Damage reduces how much a facility can influence the overall sector. For example, a damaged airbase dispatches bombers half as often, while a crippled airbase has no bombers to send. By the way, if you can cut off the facility's supply lines, or place it under siege, it will take one stage of damage each month.

#### Orders Received

While deployed to the area of operations, a formation can be issued a facility order. There are nine orders, ranging from *recon,* which gives you intel on the facility, to *interdict supply* which cuts off a supply line. Watch out though, the OpFor knows how to interdict your supply lines too!

<div class="corerules-figure corerules-float-left">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/07_enemyMoving.png' | relative_url }}"
    width="578"
    height="389"
    alt="A StratCon sector with red markers for a Supply Interdiction and two groups of Enemy Engineers, and a yellow Lookout Point nav point between them"
  />
  <p class="corerules-caption">Which crisis will you respond to, which can you afford to ignore?</p>
</div>

The intention is to give you a variety of new problems and associated tools to solve them. Facing a pair of airbases, but you lack the resources to attack them directly? Interdict their supply lines so they can't fuel their bombers. Can't afford to tie up multiple lances interdicting? Have one of your lances attempt a sabotage mission. That damages the facility, but comes with a risk: if the lance is caught they must fight their way out.

One of the new facility orders also allows you to construct outposts. Unless you're on a defensive contract, this is essential - I recommend opening with a base of operations or supply depot. I didn't want this to be a one-sided affair, however. Keep an eye out for the OpFor dispatching engineers of their own to establish their own forward positions. That said, building facilities isn't free; it ties up one of your formations for two weeks and costs *employer support* points, the new name for StratCon's *support points*. While building, it is also possible for the OpFor to attack your construction site, so come prepared for a fight!

I'll also mention that next year the scenario overhaul will link facility commands to scenario objectives. You can read more about Hammer's work on scenario objectives [here](https://megamek.org/2026/10/23/Feature-Highlight-Objectives-and-Victory-Points.html).

#### Mine Now

<div class="corerules-figure corerules-float-right" style="max-width: 460px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/09_facilityDecision.png' | relative_url }}"
    width="460"
    height="397"
    alt="An incoming transmission reading 'The Mek Base is ours. What are your orders?' with Hold, Raze and Hand Over buttons and an explanation of each choice"
  />
  <p class="corerules-caption">Which will you choose?</p>
</div>

Once you have successfully contested a facility, its fate falls in your hands. You can choose to hold it, in which case you get the full benefits associated with it. If it's attacked, however, you must defend it or it will be lost. Alternatively, you can surrender it to your employer, where the positive effects are lessened, but it will defend itself autonomously against attacks. Finally you can choose to raze the facility, which will increase a new mechanic called *escalation.* This will influence morale impact at the end of the month, and further increases if you destroy things like civilian infrastructure. Turns out people get upset when you blow up the local mall!

One of the problems I had with the old facility system is that it didn't really offer an interesting puzzle to solve. Facilities were easily captured and turned against your opponents. With the overhaul I wanted to turn facility removal into a multi-stage process. When paired with shorter contracts, this will mean that facilities become something you need to tackle across most of the deployment.

## Money

Onto the third pillar which, as the name suggests, is all about C-Bills. With enough money a campaign can overcome almost any hardship. Lose a 'Mek? Buy a new one. A pilot is killed? Head to the personnel market and get hiring. Your units get damaged? Well, no worries, thanks to money you have a warehouse full of spare parts. Like Batman, players can wield virtually limitless C-Bills like a convenient super power.

### The Post-Scarcity Stage

Before I get into the meat of this section I want to discuss what I call the 'post-scarcity stage.' Post-scarcity is the moment that money stops acting as a limit on player aspirations. When a player has infinite money, how do you challenge them? Certainly post-scarcity can be fun for a while, but how long does it keep being fun? How many campaigns need to reach post scarcity before the fun stops?

The bulk of my efforts within this pillar is to try and slow down how fast players get to the post-scarcity stage. I'm not trying to prevent it entirely, I don't think that's possible without making the game oppressive, financially speaking. Most players don't want poverty to be the defining characteristic of their entire campaign, but something does need to be done to find a healthy middle ground. Otherwise players will continue to rapidly outspend most interesting obstacles even very early on in their campaigns.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/10_postScarcity.png' | relative_url }}"
    width="1609"
    height="258"
    alt="A graph of campaign funds from 3023 to 3032, climbing steadily to around 1.5 billion C-Bills and jumping sharply from late 3031"
  />
  <p class="corerules-caption">December 3031 is the moment the campaign reaches post scarcity.</p>
</div>

### Diminishing Returns

Prior to 0.51.01, the majority of MekHQ's contract rules came from *Campaign Operations* (CamOps) married to the *Against the Bot* homebrewed ruleset. This system had a severe balance issue, where contract pay was directly tied to campaign worth. The more valuable your forces, the more you were paid. This created a self-sustaining snowball effect where the more you earned, the more you had, so the more you earned. It wasn't uncommon to see large campaigns hit a point where they were earning billions of C-Bills from a single contract.

0.51.01 migrates the contract system from CamOps toward the systems found in *Hot Spots: Draconis Reach*. This gives us a few new tools to help manage infinite profit. As Scale grows (a Hot Spots metric that dictates campaign size) pay also increases, however. As pay is derived directly from Scale, this would simply end up re-creating the same issue we had already had with CamOps.

To combat this hurdle I've added a system of diminishing returns which kicks in at Scale 3. In MekHQ each point of Scale is **roughly** an Inner Sphere company in 3151, so Scale 3 is **roughly** a battalion-sized force. These diminishing returns affect base pay, combat pay, and salvage rights. Overall, this places a soft cap on growth, where eventually further growth is no longer infinitely profitable.

The in universe justification for these changes is that your campaign is reaching a size where employers can no longer afford you. I will confess that this is partially an out-of-character measure requiring some suspension of disbelief. Like the taxation system added last year, you're encouraged not to think about it too hard. Salvage rights, in particular, are affected because the larger your campaign, the more scenarios are generated, resulting in larger volumes of salvage.

Infinite growth is a video game problem. Sometimes that means we have to forgo in-universe explanations in lieu of video game solutions. I do try to avoid this, and I explored many other possible solutions before eventually settling on implementing diminishing returns.

### Objective-Based Pay

Under CamOps, a contract's pay is settled at the moment of signing. If a contract says it will award 120 million C-Bills, that's what you're getting. *Hot Spots: Draconis Reach* works a bit differently. Pay is split between *base pay* and *combat bonus*. *Base pay* is intended to cover your expenses (similar to *straight support* in CamOps), while *combat bonus* is where you make your actual profit.

Changing to this model is really important, because it stops profit from being a passive mechanic. Under CamOps you could lose or skip every scenario and still get 120 million C-Bills paid out. Whereas under the new system, those losses immediately eat into your profit. This does mean that very fragile campaigns, that have been mismanaged or battered, really need to work to get back on top of things. But investigations so far have shown that the system, while challenging, isn't so punishing that a whole campaign can die from just 'one bad contract'.

#### Selective Payment

In MekHQ it isn't reasonable for every scenario to award a combat bonus, as there are far more scenarios in MekHQ than in an equivalent Hot Spots campaign, on which the system is based. Instead, we tie combat bonuses to essential scenarios. Whenever you complete an essential scenario, you will be awarded a combat bonus. Some contracts don't use essential scenarios, so for these, you will be awarded a combat bonus when successfully resolving one of their new nav point objectives.

The exact mechanics of when you're awarded a combat bonus differs between contracts. At time of writing I'm still figuring out the best way to communicate this to the player, but by the time 0.51.01 launches, it should hopefully be obvious when a nav point or a scenario awards a combat bonus for completion.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/11_noPostScarcity.png' | relative_url }}"
    width="1619"
    height="253"
    alt="A graph of campaign funds from 3068 to 3078 that still trends upward, but in steps with clear dips and flat stretches along the way"
  />
  <p class="corerules-caption">In 0.51.01 the campaign still sees profit, but there are peaks and troughs throughout.</p>
</div>

### Salvage

Salvage is both a core component of the BattleTech fantasy, and is inherently a fun mechanic. You get to blow up baddies, then cart their carcasses back to base for fun and profit. It's a loot reward that comes directly from playing the game and any changes need to be considered carefully. Unfortunately, salvage has traditionally created a massive balance issue that feeds into both the *money* and the *materiel* pillars we're examining. While infinite contract profit is one issue, I would argue that infinite salvage is just as bad.

Under CamOps, salvage rights were a set percentage of total salvage you could keep or sell. This meant that if you killed 100 'Meks over the course of a contract with 25% salvage rights, you could approximately increase your roster by 25 machines. Given that salvage generally uses sell value, and that sell value is usually pretty mangled by the time it hits the salvage interface, this is an absolute bargain! Whether you're selling 25 refurbished wrecks, or increasing your command by two companies, both are significant gains.

An early attempt to solve this came in the form of field control. If you kill 100 'Meks across a contract, but only hold the field half of the time, salvage is dropped to around a company. Players didn't like this change, but over time it's proven to have had a positive effect.

Later, we added the official CamOps salvage rules. This meant that you had to remove wrecks from the field before you could claim them. Unfortunately this wasn't really an effective reduction in overall salvage, as savvy players soon learned how many salvage teams they needed to grab everything. As players really enjoyed the more involved salvage process we do think the system was a successful improvement, just not one that affected game balance in a meaningful way.

In 0.51.01 we significantly overhauled the entire salvage system. One of those changes was to once again bring over a rule from *Hot Spots: Draconis Reach*. Hot Spots salvage rights work very differently: 25% salvage rights don't get you 25% of all salvage, rather you get paid 25% of the salvage's value. So, 100 million C-Bills total worth of salvage nets you 25 million C-Bills in payout. For each wreck recovered you get the option to take the money, or pay off the difference to your employer to keep the wreckage by buying out the other salvage shares. If you salvage a 1,000,000 C-Bill Locust you own 25% of, you either receive 250,000 C-Bills, or you pay your employer 750,000 C-Bills to purchase the whole wreck.

This change is phenomenal. Under CamOps salvage was essentially just free money or free units. Under the new system, acquiring units has a price tag. That tag might be lower than buying the unit off the market, but it is still no longer free. When combined with lower overall salvage rights this creates a far more balanced ecosystem that still rewards players plenty for playing well, without turning salvage into a cash cow.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/12_salvageDialog.png' | relative_url }}"
    width="1130"
    height="839"
    alt="The Salvage Recovery screen at 25% salvage rights: six wrecks on the left, and a dossier for a King Crab where you assign recovery vehicles and choose between the employer's cash share or keeping the wreck"
  />
  <p class="corerules-caption">Salvage has never looked this good.</p>
</div>

## Character Skill

Our final pillar is no less important for coming last. This pillar represents the growth of your personnel in skill and ability. Seeing a rag-tag band of green pilots grow into legendary MekWarriors is an essential component of the MekHQ power fantasy, and many players enjoy having their own personal Natasha Kerensky, or Kai Allard-Liao. This all comes at a cost, however, as character advancement remains a constant source of balancing issues.

In BattleTech, a pilot's skill is an incredible force multiplier to the unit's power. Being able to hit your target consistently, or staying on your feet in harsh conditions, is vital to the success of a mission. This is something that has been traditionally very difficult to balance. The nature of MekHQ means that progression that might take years to fully develop in tabletop campaign's much slower pace can be reached in a single sitting of digital campaigning. Rules that work well for balancing tabletop games begin falling apart when matched to MekHQ's timescale.

As always, let's put things in context. Older players may remember the old *Against the Bot* experience scale. This was an approximation of old rulesets combined with *Total Warfare's* advancement system. In short, most skill improvements cost around 8 xp and an SPA 20 xp or less. Under AtB it wasn't uncommon to take a *green* pilot all the way to *elite* within even a single contract. Extend that across years of in-game time, and suddenly every character was easily skilled at 0/0, with perfect SPAs to match.

In 2025, I began the slow process of moving us to *A Time of War's* (ATOW) xp scale. Now, SPAs were costing hundreds of xp, and skill improvements now were costed at the target skill level, multiplied by 10. I'm not going to lie, this change was met with mass outcry. I think changing the xp scale was probably one of my least popular changes!

### Time is Money

In general, I'm actually pretty happy with the current xp scale as it currently stands. Thanks to feedback from the community, I feel we've balanced it to a good degree. One problem was never resolved, however. All character progression is balanced by time. In 0.51.01, I've taken inspiration from *Hot Spots: Draconis Reach* once again and added a C-Bill cost to improving a skill to *regular*, and beyond. I imagine some readers are physically recoiling at the thought, so let me explain!

Earlier in this dev blog I spoke about video game problems requiring video game solutions. This is one of those instances. Having every character become *elite* (and better) has a knock-on effect that impacts almost every mechanic downstream. Suddenly we need to increase the skill of the OpFor, or they will be lambs to the slaughter. Contract negotiations become effortless when you're trying to roll higher than a three on 2d6. Meanwhile, your admins are filling your coffers with *employer support* points every chance they get. Don't even get me started on repairs, they never fail!

The last thing I want is to slow progression further. I don't think increasing the xp scale even more is an effective solution. Plus, I think the playerbase will beat me up if I tried it again. Instead, the added price tag turns progression into a strategic decision. Do you want to pay for every character to hit *elite*, or do you want to specialize your crew? If you specialize, how are you going to handle succession? If you pay for everyone, can you afford to buy that hot new Marauder fresh off the factory line?

This one change allows us to add checks and balances to three pillars simultaneously. Money sinks reduce the strength of the *money* pillar. They impact *materiel* by reducing the availability of *elite* plus personnel, while the *player knowledge* pillar is reinforced as you learn who to improve and who to ignore.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/13_improvementDialog.png' | relative_url }}"
    width="1905"
    height="1018"
    alt="The Training Console: a filterable list of personnel with their unspent xp, and a skills panel where a Swimming improvement costs 30 xp plus a 200,000 C-Bill training fee"
  />
  <p class="corerules-caption">Skill training, SPAs, traits, and more all in one place.</p>
</div>

### Which Improvements are Affected?

Skills in MekHQ are classified as *profession* skills that relate to a core profession, such as MekWarrior, *utility* skills that have a mechanical effect, and *roleplay* skills that cover everything else. Building on this, I didn't want to affect all improvements equally. *Profession* skills will be the most expensive, followed by *utility* skills. *Roleplay* skills, on the other hand, will be free.

SPAs are the single most expensive improvement a character can have. Both in xp and C-Bills. This is intended to make SPAs a significant investment, suitable for the power they bring. To discourage just stacking SPAs, the price of a new SPA depends on how many the character already has. Players should identify the one or two they need to make a character shine, and then stop there. A hard cap of five SPAs is also available in *campaign options*, for players who want additional restrictions.

### New Recruits

The cost of hiring new recruits has been increased to account for the cost of any skills they possess. This can make hiring new personnel very expensive by design. My intent here is to balance around the idea that 'home grown' personnel should generally provide a better value proposition than anyone hired directly from the market.

### Unseen Benefits

Something I've been trying to encourage for a few years is that characters should have pluriform forms of progression. A character isn't just defined by their skills and SPAs, so it was a deliberate decision not to add a C-Bill price tag to *edge*, *natural aptitudes*, *traits*, or *attribute scores*. Many of these systems were previously seen as not worth the opportunity cost. Now, when compared to paying for another SPA or skill improvements, they may become much more competitive avenues for advancement which stops character progression from being pooled into a single, optimal path.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-07-balancing-gameplay-and-economics/14_hiringFees.png' | relative_url }}"
    width="1563"
    height="708"
    alt="The personnel market sorted by hiring fee, from a 2.6 million C-Bill veteran codebreaker down to green mechanics at 26,400, with a tooltip splitting one pilot's fee into profession skills and a golden hello"
  />
  <p class="corerules-caption">Hiring costs increase rapidly with skill.</p>
</div>

## The Bottom Bit

We've finally reached the end, which means I've nearly run out of things to say! I know for some players there will be a degree of apprehension when reading today's blog. To those players I ask only one thing:

<div class="corerules-callout corerules-announce">
  Give the changes a go before writing them off!
</div>

I know change is scary, and there are a lot of big changes in 0.51.01, but each has been done in the hope of improving the overall game experience. And, if I get anything wrong, let me know! With changes as vast as these, there will be stuff we don't get right. So far playtester feedback has been very positive, thankfully, so if you have doubts, maybe you'll be pleasantly surprised too!

### Ending the 0.51.01 Cycle

0.51.01 is days away. It's going to be a really interesting release, and I am as excited as I am nervous. So much has gone into just one dev cycle, it's been incredible to work on. The team has done some amazing things. Things we never thought were even possible.

This will be the last dev blog from me, at least until 0.51.02 hits full swing. I will say that overall the reception to these feature highlights has been really positive. Once we've caught our breath, we're going to be talking about how we adopt this approach for future releases. I also want to take a moment to thank community member Tzahr, who has been generously donating their time to edit my dev blogs. Something that takes a lot of effort, given their length.

But, as I say, it's time for me to get back into the code mines. 0.51.01 is fast approaching and then the 0.51.02 dev cycle begins! But that's a problem for Future Illiani. I have only one thing left to say:

<div class="tycoon-ei">
  <p class="tycoon-sr">Project Tycoon is coming in 0.51.02, and so far nobody has guessed what it is. Your next clue is Nicolai Malthus.</p>
  <svg class="tycoon-scene" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="tycoon-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0f0d5c"/>
        <stop offset="0.55" stop-color="#2d22c4"/>
        <stop offset="0.9" stop-color="#4a2fd2"/>
      </linearGradient>
      <linearGradient id="tycoon-floor-fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#000" stop-opacity="0.95"/>
        <stop offset="0.35" stop-color="#000" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#000" stop-opacity="0"/>
      </linearGradient>
      <filter id="tycoon-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <clipPath id="tycoon-floor-clip"><rect x="0" y="585" width="1600" height="315"/></clipPath>
    </defs>
    <rect width="1600" height="900" fill="url(#tycoon-sky)"/>
    <g><circle cx="146" cy="300" r="0.9" fill="#fff" opacity="0.7"/><circle cx="152" cy="208" r="0.9" fill="#fff" opacity="0.35"/><circle cx="1304" cy="370" r="1.4" fill="#fff" opacity="0.35"/><circle cx="476" cy="128" r="1.8" fill="#fff" opacity="0.9"/><circle cx="846" cy="88" r="1.1" fill="#fff" opacity="0.7"/><circle cx="393" cy="370" r="1.1" fill="#fff" opacity="0.9"/><circle cx="664" cy="293" r="1.1" fill="#fff" opacity="0.35"/><circle cx="915" cy="358" r="1.8" fill="#fff" opacity="0.5"/><circle cx="309" cy="83" r="0.9" fill="#fff" opacity="0.9"/><circle cx="1327" cy="69" r="1.1" fill="#fff" opacity="0.7"/><circle cx="735" cy="40" r="1.8" fill="#fff" opacity="0.9"/><circle cx="1187" cy="194" r="1.8" fill="#fff" opacity="0.5"/><circle cx="50" cy="173" r="1.8" fill="#fff" opacity="0.9"/><circle cx="1262" cy="184" r="0.9" fill="#fff" opacity="0.35"/><circle cx="638" cy="148" r="0.9" fill="#fff" opacity="0.35"/><circle cx="187" cy="247" r="1.1" fill="#fff" opacity="0.35"/><circle cx="905" cy="87" r="1.1" fill="#fff" opacity="0.9"/><circle cx="1162" cy="401" r="1.8" fill="#fff" opacity="0.7"/><circle cx="348" cy="218" r="1.1" fill="#fff" opacity="0.5"/><circle cx="212" cy="388" r="1.4" fill="#fff" opacity="0.9"/><circle cx="128" cy="409" r="1.1" fill="#fff" opacity="0.7"/><circle cx="1249" cy="305" r="0.9" fill="#fff" opacity="0.5"/><circle cx="313" cy="289" r="0.9" fill="#fff" opacity="0.5"/><circle cx="744" cy="305" r="0.9" fill="#fff" opacity="0.35"/><circle cx="1163" cy="71" r="0.9" fill="#fff" opacity="0.5"/><circle cx="1063" cy="315" r="1.4" fill="#fff" opacity="0.7"/><circle cx="400" cy="317" r="1.1" fill="#fff" opacity="0.9"/><circle cx="209" cy="123" r="1.8" fill="#fff" opacity="0.35"/><circle cx="554" cy="151" r="1.1" fill="#fff" opacity="0.5"/><circle cx="909" cy="304" r="1.1" fill="#fff" opacity="0.5"/><circle cx="49" cy="261" r="1.1" fill="#fff" opacity="0.7"/><circle cx="224" cy="323" r="0.9" fill="#fff" opacity="0.7"/><circle cx="377" cy="309" r="0.9" fill="#fff" opacity="0.9"/><circle cx="872" cy="268" r="1.1" fill="#fff" opacity="0.35"/><circle cx="490" cy="404" r="1.1" fill="#fff" opacity="0.9"/><circle cx="651" cy="317" r="1.1" fill="#fff" opacity="0.35"/><circle cx="1362" cy="33" r="1.8" fill="#fff" opacity="0.5"/><circle cx="441" cy="386" r="1.4" fill="#fff" opacity="0.35"/><circle cx="407" cy="223" r="1.4" fill="#fff" opacity="0.7"/><circle cx="190" cy="259" r="1.8" fill="#fff" opacity="0.9"/><circle cx="1090" cy="299" r="1.8" fill="#fff" opacity="0.7"/><circle cx="1315" cy="216" r="0.9" fill="#fff" opacity="0.5"/><circle cx="1233" cy="415" r="0.9" fill="#fff" opacity="0.35"/><circle cx="642" cy="331" r="1.4" fill="#fff" opacity="0.35"/><circle cx="594" cy="344" r="0.9" fill="#fff" opacity="0.35"/><circle cx="1594" cy="34" r="1.8" fill="#fff" opacity="0.9"/><circle cx="2" cy="283" r="1.4" fill="#fff" opacity="0.5"/><circle cx="535" cy="187" r="1.8" fill="#fff" opacity="0.9"/><circle cx="71" cy="379" r="0.9" fill="#fff" opacity="0.9"/><circle cx="525" cy="41" r="0.9" fill="#fff" opacity="0.5"/><circle cx="1199" cy="122" r="1.4" fill="#fff" opacity="0.9"/><circle cx="1099" cy="31" r="0.9" fill="#fff" opacity="0.7"/><circle cx="1179" cy="195" r="0.9" fill="#fff" opacity="0.7"/><circle cx="1378" cy="168" r="1.4" fill="#fff" opacity="0.35"/><circle cx="640" cy="420" r="1.4" fill="#fff" opacity="0.35"/><circle cx="651" cy="160" r="0.9" fill="#fff" opacity="0.35"/><circle cx="328" cy="96" r="1.1" fill="#fff" opacity="0.35"/><circle cx="893" cy="178" r="1.8" fill="#fff" opacity="0.35"/><circle cx="172" cy="414" r="0.9" fill="#fff" opacity="0.35"/><circle cx="1001" cy="33" r="1.1" fill="#fff" opacity="0.5"/><circle cx="404" cy="322" r="1.4" fill="#fff" opacity="0.7"/><circle cx="1552" cy="154" r="1.8" fill="#fff" opacity="0.9"/><circle cx="985" cy="340" r="1.1" fill="#fff" opacity="0.7"/><circle cx="179" cy="216" r="1.8" fill="#fff" opacity="0.5"/><circle cx="1198" cy="13" r="0.9" fill="#fff" opacity="0.35"/><circle cx="1193" cy="145" r="1.8" fill="#fff" opacity="0.5"/><circle cx="827" cy="9" r="1.8" fill="#fff" opacity="0.7"/><circle cx="280" cy="308" r="1.8" fill="#fff" opacity="0.35"/><circle cx="1049" cy="345" r="0.9" fill="#fff" opacity="0.35"/><circle cx="546" cy="148" r="0.9" fill="#fff" opacity="0.5"/></g>
    <g><polygon points="-20,545 47,345 131,365 214,332 302,329 358,393 433,404 482,353 541,412 616,395 679,448 725,430 785,436 867,441 936,434 1024,388 1077,359 1149,398 1195,406 1262,379 1336,357 1418,313 1507,333 1571,323 1649,294 1620,595 -20,595" fill="#03140a"/><polyline points="-20,545 47,345 131,365 214,332 302,329 358,393 433,404 482,353 541,412 616,395 679,448 725,430 785,436 867,441 936,434 1024,388 1077,359 1149,398 1195,406 1262,379 1336,357 1418,313 1507,333 1571,323 1649,294" fill="none" stroke="#1d8f3a" stroke-width="1.6" opacity="0.75"/><path d="M-20,545 L36,563 L47,345 M-20,545 L-22,595 M47,345 L97,557 L131,365 M47,345 L44,595 M131,365 L192,582 L214,332 M131,365 L112,595 M214,332 L273,558 L302,329 M214,332 L231,595 M302,329 L314,582 L358,393 M302,329 L316,595 M358,393 L419,581 L433,404 M358,393 L361,595 M433,404 L456,588 L482,353 M433,404 L406,595 M482,353 L505,557 L541,412 M482,353 L512,595 M541,412 L593,564 L616,395 M541,412 L554,595 M616,395 L633,563 L679,448 M616,395 L634,595 M679,448 L724,573 L725,430 M679,448 L686,595 M725,430 L774,562 L785,436 M725,430 L744,595 M785,436 L811,583 L867,441 M785,436 L783,595 M867,441 L889,587 L936,434 M867,441 L848,595 M936,434 L988,566 L1024,388 M936,434 L948,595 M1024,388 L1051,574 L1077,359 M1024,388 L1040,595 M1077,359 L1100,569 L1149,398 M1077,359 L1067,595 M1149,398 L1156,576 L1195,406 M1149,398 L1143,595 M1195,406 L1221,578 L1262,379 M1195,406 L1167,595 M1262,379 L1321,573 L1336,357 M1262,379 L1247,595 M1336,357 L1380,573 L1418,313 M1336,357 L1310,595 M1418,313 L1475,570 L1507,333 M1418,313 L1447,595 M1507,333 L1539,555 L1571,323 M1507,333 L1505,595 M1571,323 L1605,560 L1649,294 M1571,323 L1570,595" fill="none" stroke="#1d8f3a" stroke-width="1" opacity="0.55"/></g>
    <g><polygon points="-20,545 44,431 92,461 135,417 214,429 291,431 340,445 382,440 429,458 503,462 547,473 594,506 653,517 717,500 770,482 818,522 877,488 951,464 992,475 1065,457 1122,464 1169,484 1232,473 1281,478 1344,436 1419,465 1460,417 1519,461 1578,409 1638,420 1620,595 -20,595" fill="#010804"/><polyline points="-20,545 44,431 92,461 135,417 214,429 291,431 340,445 382,440 429,458 503,462 547,473 594,506 653,517 717,500 770,482 818,522 877,488 951,464 992,475 1065,457 1122,464 1169,484 1232,473 1281,478 1344,436 1419,465 1460,417 1519,461 1578,409 1638,420" fill="none" stroke="#25b04a" stroke-width="1.7000000000000002" opacity="0.8"/><path d="M-20,545 L16,559 L44,431 M-20,545 L-3,595 M44,431 L78,563 L92,461 M44,431 L28,595 M92,461 L91,557 L135,417 M92,461 L75,595 M135,417 L192,557 L214,429 M135,417 L145,595 M214,429 L265,567 L291,431 M214,429 L212,595 M291,431 L328,574 L340,445 M291,431 L294,595 M340,445 L373,565 L382,440 M340,445 L334,595 M382,440 L395,561 L429,458 M382,440 L388,595 M429,458 L463,582 L503,462 M429,458 L442,595 M503,462 L520,557 L547,473 M503,462 L504,595 M547,473 L561,561 L594,506 M547,473 L529,595 M594,506 L644,579 L653,517 M594,506 L580,595 M653,517 L707,571 L717,500 M653,517 L665,595 M717,500 L766,588 L770,482 M717,500 L704,595 M770,482 L778,585 L818,522 M770,482 L749,595 M818,522 L824,573 L877,488 M818,522 L797,595 M877,488 L908,574 L951,464 M877,488 L889,595 M951,464 L987,571 L992,475 M951,464 L954,595 M992,475 L1016,578 L1065,457 M992,475 L1022,595 M1065,457 L1095,558 L1122,464 M1065,457 L1049,595 M1122,464 L1149,587 L1169,484 M1122,464 L1130,595 M1169,484 L1211,584 L1232,473 M1169,484 L1176,595 M1232,473 L1238,584 L1281,478 M1232,473 L1234,595 M1281,478 L1325,561 L1344,436 M1281,478 L1284,595 M1344,436 L1378,587 L1419,465 M1344,436 L1334,595 M1419,465 L1459,584 L1460,417 M1419,465 L1397,595 M1460,417 L1474,570 L1519,461 M1460,417 L1464,595 M1519,461 L1546,589 L1578,409 M1519,461 L1507,595 M1578,409 L1594,563 L1638,420 M1578,409 L1563,595" fill="none" stroke="#25b04a" stroke-width="1.1" opacity="0.6"/></g>
    <rect x="0" y="585" width="1600" height="315" fill="#000"/>
    <g clip-path="url(#tycoon-floor-clip)" filter="url(#tycoon-glow)">
      <path d="M800,585 L-2080,940 M800,585 L-1960,940 M800,585 L-1840,940 M800,585 L-1720,940 M800,585 L-1600,940 M800,585 L-1480,940 M800,585 L-1360,940 M800,585 L-1240,940 M800,585 L-1120,940 M800,585 L-1000,940 M800,585 L-880,940 M800,585 L-760,940 M800,585 L-640,940 M800,585 L-520,940 M800,585 L-400,940 M800,585 L-280,940 M800,585 L-160,940 M800,585 L-40,940 M800,585 L80,940 M800,585 L200,940 M800,585 L320,940 M800,585 L440,940 M800,585 L560,940 M800,585 L680,940 M800,585 L800,940 M800,585 L920,940 M800,585 L1040,940 M800,585 L1160,940 M800,585 L1280,940 M800,585 L1400,940 M800,585 L1520,940 M800,585 L1640,940 M800,585 L1760,940 M800,585 L1880,940 M800,585 L2000,940 M800,585 L2120,940 M800,585 L2240,940 M800,585 L2360,940 M800,585 L2480,940 M800,585 L2600,940 M800,585 L2720,940 M800,585 L2840,940 M800,585 L2960,940 M800,585 L3080,940 M800,585 L3200,940 M800,585 L3320,940 M800,585 L3440,940 M800,585 L3560,940 M800,585 L3680,940 M0,591.0 L1600,591.0 M0,592.9 L1600,592.9 M0,595.5 L1600,595.5 M0,598.8 L1600,598.8 M0,603.2 L1600,603.2 M0,609.0 L1600,609.0 M0,616.7 L1600,616.7 M0,626.9 L1600,626.9 M0,640.3 L1600,640.3 M0,658.0 L1600,658.0 M0,681.4 L1600,681.4 M0,712.2 L1600,712.2 M0,752.9 L1600,752.9 M0,806.6 L1600,806.6 M0,877.5 L1600,877.5" fill="none" stroke="#2cff6a" stroke-width="2.2"/>
    </g>
    <rect x="0" y="585" width="1600" height="315" fill="url(#tycoon-floor-fade)"/>
    <g filter="url(#tycoon-glow)"><path d="M400,713 L400,735 A70,21 0 0 0 540,735 L540,713 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,718.4 L402.4,740.4 M409.4,723.5 L409.4,745.5 M420.5,727.8 L420.5,749.8 M435.0,731.2 L435.0,753.2 M451.9,733.3 L451.9,755.3 M470.0,734.0 L470.0,756.0 M488.1,733.3 L488.1,755.3 M505.0,731.2 L505.0,753.2 M519.5,727.8 L519.5,749.8 M530.6,723.5 L530.6,745.5 M537.6,718.4 L537.6,740.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="713" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,691 L400,713 A70,21 0 0 0 540,713 L540,691 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,696.4 L402.4,718.4 M409.4,701.5 L409.4,723.5 M420.5,705.8 L420.5,727.8 M435.0,709.2 L435.0,731.2 M451.9,711.3 L451.9,733.3 M470.0,712.0 L470.0,734.0 M488.1,711.3 L488.1,733.3 M505.0,709.2 L505.0,731.2 M519.5,705.8 L519.5,727.8 M530.6,701.5 L530.6,723.5 M537.6,696.4 L537.6,718.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="691" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,669 L400,691 A70,21 0 0 0 540,691 L540,669 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,674.4 L402.4,696.4 M409.4,679.5 L409.4,701.5 M420.5,683.8 L420.5,705.8 M435.0,687.2 L435.0,709.2 M451.9,689.3 L451.9,711.3 M470.0,690.0 L470.0,712.0 M488.1,689.3 L488.1,711.3 M505.0,687.2 L505.0,709.2 M519.5,683.8 L519.5,705.8 M530.6,679.5 L530.6,701.5 M537.6,674.4 L537.6,696.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="669" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,647 L400,669 A70,21 0 0 0 540,669 L540,647 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,652.4 L402.4,674.4 M409.4,657.5 L409.4,679.5 M420.5,661.8 L420.5,683.8 M435.0,665.2 L435.0,687.2 M451.9,667.3 L451.9,689.3 M470.0,668.0 L470.0,690.0 M488.1,667.3 L488.1,689.3 M505.0,665.2 L505.0,687.2 M519.5,661.8 L519.5,683.8 M530.6,657.5 L530.6,679.5 M537.6,652.4 L537.6,674.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="647" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,625 L400,647 A70,21 0 0 0 540,647 L540,625 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,630.4 L402.4,652.4 M409.4,635.5 L409.4,657.5 M420.5,639.8 L420.5,661.8 M435.0,643.2 L435.0,665.2 M451.9,645.3 L451.9,667.3 M470.0,646.0 L470.0,668.0 M488.1,645.3 L488.1,667.3 M505.0,643.2 L505.0,665.2 M519.5,639.8 L519.5,661.8 M530.6,635.5 L530.6,657.5 M537.6,630.4 L537.6,652.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="625" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,603 L400,625 A70,21 0 0 0 540,625 L540,603 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,608.4 L402.4,630.4 M409.4,613.5 L409.4,635.5 M420.5,617.8 L420.5,639.8 M435.0,621.2 L435.0,643.2 M451.9,623.3 L451.9,645.3 M470.0,624.0 L470.0,646.0 M488.1,623.3 L488.1,645.3 M505.0,621.2 L505.0,643.2 M519.5,617.8 L519.5,639.8 M530.6,613.5 L530.6,635.5 M537.6,608.4 L537.6,630.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="603" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,581 L400,603 A70,21 0 0 0 540,603 L540,581 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,586.4 L402.4,608.4 M409.4,591.5 L409.4,613.5 M420.5,595.8 L420.5,617.8 M435.0,599.2 L435.0,621.2 M451.9,601.3 L451.9,623.3 M470.0,602.0 L470.0,624.0 M488.1,601.3 L488.1,623.3 M505.0,599.2 L505.0,621.2 M519.5,595.8 L519.5,617.8 M530.6,591.5 L530.6,613.5 M537.6,586.4 L537.6,608.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="581" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,559 L400,581 A70,21 0 0 0 540,581 L540,559 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,564.4 L402.4,586.4 M409.4,569.5 L409.4,591.5 M420.5,573.8 L420.5,595.8 M435.0,577.2 L435.0,599.2 M451.9,579.3 L451.9,601.3 M470.0,580.0 L470.0,602.0 M488.1,579.3 L488.1,601.3 M505.0,577.2 L505.0,599.2 M519.5,573.8 L519.5,595.8 M530.6,569.5 L530.6,591.5 M537.6,564.4 L537.6,586.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="559" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,537 L400,559 A70,21 0 0 0 540,559 L540,537 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,542.4 L402.4,564.4 M409.4,547.5 L409.4,569.5 M420.5,551.8 L420.5,573.8 M435.0,555.2 L435.0,577.2 M451.9,557.3 L451.9,579.3 M470.0,558.0 L470.0,580.0 M488.1,557.3 L488.1,579.3 M505.0,555.2 L505.0,577.2 M519.5,551.8 L519.5,573.8 M530.6,547.5 L530.6,569.5 M537.6,542.4 L537.6,564.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="537" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,515 L400,537 A70,21 0 0 0 540,537 L540,515 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,520.4 L402.4,542.4 M409.4,525.5 L409.4,547.5 M420.5,529.8 L420.5,551.8 M435.0,533.2 L435.0,555.2 M451.9,535.3 L451.9,557.3 M470.0,536.0 L470.0,558.0 M488.1,535.3 L488.1,557.3 M505.0,533.2 L505.0,555.2 M519.5,529.8 L519.5,551.8 M530.6,525.5 L530.6,547.5 M537.6,520.4 L537.6,542.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="515" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,493 L400,515 A70,21 0 0 0 540,515 L540,493 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,498.4 L402.4,520.4 M409.4,503.5 L409.4,525.5 M420.5,507.8 L420.5,529.8 M435.0,511.2 L435.0,533.2 M451.9,513.3 L451.9,535.3 M470.0,514.0 L470.0,536.0 M488.1,513.3 L488.1,535.3 M505.0,511.2 L505.0,533.2 M519.5,507.8 L519.5,529.8 M530.6,503.5 L530.6,525.5 M537.6,498.4 L537.6,520.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="493" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,471 L400,493 A70,21 0 0 0 540,493 L540,471 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,476.4 L402.4,498.4 M409.4,481.5 L409.4,503.5 M420.5,485.8 L420.5,507.8 M435.0,489.2 L435.0,511.2 M451.9,491.3 L451.9,513.3 M470.0,492.0 L470.0,514.0 M488.1,491.3 L488.1,513.3 M505.0,489.2 L505.0,511.2 M519.5,485.8 L519.5,507.8 M530.6,481.5 L530.6,503.5 M537.6,476.4 L537.6,498.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="471" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M400,449 L400,471 A70,21 0 0 0 540,471 L540,449 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M402.4,454.4 L402.4,476.4 M409.4,459.5 L409.4,481.5 M420.5,463.8 L420.5,485.8 M435.0,467.2 L435.0,489.2 M451.9,469.3 L451.9,491.3 M470.0,470.0 L470.0,492.0 M488.1,469.3 L488.1,491.3 M505.0,467.2 L505.0,489.2 M519.5,463.8 L519.5,485.8 M530.6,459.5 L530.6,481.5 M537.6,454.4 L537.6,476.4" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="470" cy="449" rx="70" ry="21" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><ellipse cx="470" cy="449" rx="50.4" ry="15.1" fill="none" stroke="#39ff6e" stroke-width="1.6"/><ellipse cx="470" cy="449" rx="21.0" ry="6.3" fill="none" stroke="#39ff6e" stroke-width="1.6"/><path d="M36,743 L36,765 A74,22 0 0 0 184,765 L184,743 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,748.7 L38.5,770.7 M45.9,754.0 L45.9,776.0 M57.7,758.6 L57.7,780.6 M73.0,762.1 L73.0,784.1 M90.8,764.3 L90.8,786.3 M110.0,765.0 L110.0,787.0 M129.2,764.3 L129.2,786.3 M147.0,762.1 L147.0,784.1 M162.3,758.6 L162.3,780.6 M174.1,754.0 L174.1,776.0 M181.5,748.7 L181.5,770.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="743" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,721 L36,743 A74,22 0 0 0 184,743 L184,721 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,726.7 L38.5,748.7 M45.9,732.0 L45.9,754.0 M57.7,736.6 L57.7,758.6 M73.0,740.1 L73.0,762.1 M90.8,742.3 L90.8,764.3 M110.0,743.0 L110.0,765.0 M129.2,742.3 L129.2,764.3 M147.0,740.1 L147.0,762.1 M162.3,736.6 L162.3,758.6 M174.1,732.0 L174.1,754.0 M181.5,726.7 L181.5,748.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="721" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,699 L36,721 A74,22 0 0 0 184,721 L184,699 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,704.7 L38.5,726.7 M45.9,710.0 L45.9,732.0 M57.7,714.6 L57.7,736.6 M73.0,718.1 L73.0,740.1 M90.8,720.3 L90.8,742.3 M110.0,721.0 L110.0,743.0 M129.2,720.3 L129.2,742.3 M147.0,718.1 L147.0,740.1 M162.3,714.6 L162.3,736.6 M174.1,710.0 L174.1,732.0 M181.5,704.7 L181.5,726.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="699" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,677 L36,699 A74,22 0 0 0 184,699 L184,677 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,682.7 L38.5,704.7 M45.9,688.0 L45.9,710.0 M57.7,692.6 L57.7,714.6 M73.0,696.1 L73.0,718.1 M90.8,698.3 L90.8,720.3 M110.0,699.0 L110.0,721.0 M129.2,698.3 L129.2,720.3 M147.0,696.1 L147.0,718.1 M162.3,692.6 L162.3,714.6 M174.1,688.0 L174.1,710.0 M181.5,682.7 L181.5,704.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="677" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,655 L36,677 A74,22 0 0 0 184,677 L184,655 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,660.7 L38.5,682.7 M45.9,666.0 L45.9,688.0 M57.7,670.6 L57.7,692.6 M73.0,674.1 L73.0,696.1 M90.8,676.3 L90.8,698.3 M110.0,677.0 L110.0,699.0 M129.2,676.3 L129.2,698.3 M147.0,674.1 L147.0,696.1 M162.3,670.6 L162.3,692.6 M174.1,666.0 L174.1,688.0 M181.5,660.7 L181.5,682.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="655" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,633 L36,655 A74,22 0 0 0 184,655 L184,633 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,638.7 L38.5,660.7 M45.9,644.0 L45.9,666.0 M57.7,648.6 L57.7,670.6 M73.0,652.1 L73.0,674.1 M90.8,654.3 L90.8,676.3 M110.0,655.0 L110.0,677.0 M129.2,654.3 L129.2,676.3 M147.0,652.1 L147.0,674.1 M162.3,648.6 L162.3,670.6 M174.1,644.0 L174.1,666.0 M181.5,638.7 L181.5,660.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="633" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,611 L36,633 A74,22 0 0 0 184,633 L184,611 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,616.7 L38.5,638.7 M45.9,622.0 L45.9,644.0 M57.7,626.6 L57.7,648.6 M73.0,630.1 L73.0,652.1 M90.8,632.3 L90.8,654.3 M110.0,633.0 L110.0,655.0 M129.2,632.3 L129.2,654.3 M147.0,630.1 L147.0,652.1 M162.3,626.6 L162.3,648.6 M174.1,622.0 L174.1,644.0 M181.5,616.7 L181.5,638.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="611" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,589 L36,611 A74,22 0 0 0 184,611 L184,589 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,594.7 L38.5,616.7 M45.9,600.0 L45.9,622.0 M57.7,604.6 L57.7,626.6 M73.0,608.1 L73.0,630.1 M90.8,610.3 L90.8,632.3 M110.0,611.0 L110.0,633.0 M129.2,610.3 L129.2,632.3 M147.0,608.1 L147.0,630.1 M162.3,604.6 L162.3,626.6 M174.1,600.0 L174.1,622.0 M181.5,594.7 L181.5,616.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="589" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M36,567 L36,589 A74,22 0 0 0 184,589 L184,567 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M38.5,572.7 L38.5,594.7 M45.9,578.0 L45.9,600.0 M57.7,582.6 L57.7,604.6 M73.0,586.1 L73.0,608.1 M90.8,588.3 L90.8,610.3 M110.0,589.0 L110.0,611.0 M129.2,588.3 L129.2,610.3 M147.0,586.1 L147.0,608.1 M162.3,582.6 L162.3,604.6 M174.1,578.0 L174.1,600.0 M181.5,572.7 L181.5,594.7" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="110" cy="567" rx="74" ry="22" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><ellipse cx="110" cy="567" rx="53.3" ry="15.8" fill="none" stroke="#39ff6e" stroke-width="1.6"/><ellipse cx="110" cy="567" rx="22.2" ry="6.6" fill="none" stroke="#39ff6e" stroke-width="1.6"/><path d="M158,809 L158,835 A92,28 0 0 0 342,835 L342,809 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,816.2 L161.1,842.2 M170.3,823.0 L170.3,849.0 M184.9,828.8 L184.9,854.8 M204.0,833.2 L204.0,859.2 M226.2,836.0 L226.2,862.0 M250.0,837.0 L250.0,863.0 M273.8,836.0 L273.8,862.0 M296.0,833.2 L296.0,859.2 M315.1,828.8 L315.1,854.8 M329.7,823.0 L329.7,849.0 M338.9,816.2 L338.9,842.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="809" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,783 L158,809 A92,28 0 0 0 342,809 L342,783 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,790.2 L161.1,816.2 M170.3,797.0 L170.3,823.0 M184.9,802.8 L184.9,828.8 M204.0,807.2 L204.0,833.2 M226.2,810.0 L226.2,836.0 M250.0,811.0 L250.0,837.0 M273.8,810.0 L273.8,836.0 M296.0,807.2 L296.0,833.2 M315.1,802.8 L315.1,828.8 M329.7,797.0 L329.7,823.0 M338.9,790.2 L338.9,816.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="783" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,757 L158,783 A92,28 0 0 0 342,783 L342,757 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,764.2 L161.1,790.2 M170.3,771.0 L170.3,797.0 M184.9,776.8 L184.9,802.8 M204.0,781.2 L204.0,807.2 M226.2,784.0 L226.2,810.0 M250.0,785.0 L250.0,811.0 M273.8,784.0 L273.8,810.0 M296.0,781.2 L296.0,807.2 M315.1,776.8 L315.1,802.8 M329.7,771.0 L329.7,797.0 M338.9,764.2 L338.9,790.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="757" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,731 L158,757 A92,28 0 0 0 342,757 L342,731 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,738.2 L161.1,764.2 M170.3,745.0 L170.3,771.0 M184.9,750.8 L184.9,776.8 M204.0,755.2 L204.0,781.2 M226.2,758.0 L226.2,784.0 M250.0,759.0 L250.0,785.0 M273.8,758.0 L273.8,784.0 M296.0,755.2 L296.0,781.2 M315.1,750.8 L315.1,776.8 M329.7,745.0 L329.7,771.0 M338.9,738.2 L338.9,764.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="731" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,705 L158,731 A92,28 0 0 0 342,731 L342,705 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,712.2 L161.1,738.2 M170.3,719.0 L170.3,745.0 M184.9,724.8 L184.9,750.8 M204.0,729.2 L204.0,755.2 M226.2,732.0 L226.2,758.0 M250.0,733.0 L250.0,759.0 M273.8,732.0 L273.8,758.0 M296.0,729.2 L296.0,755.2 M315.1,724.8 L315.1,750.8 M329.7,719.0 L329.7,745.0 M338.9,712.2 L338.9,738.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="705" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,679 L158,705 A92,28 0 0 0 342,705 L342,679 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,686.2 L161.1,712.2 M170.3,693.0 L170.3,719.0 M184.9,698.8 L184.9,724.8 M204.0,703.2 L204.0,729.2 M226.2,706.0 L226.2,732.0 M250.0,707.0 L250.0,733.0 M273.8,706.0 L273.8,732.0 M296.0,703.2 L296.0,729.2 M315.1,698.8 L315.1,724.8 M329.7,693.0 L329.7,719.0 M338.9,686.2 L338.9,712.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="679" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,653 L158,679 A92,28 0 0 0 342,679 L342,653 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,660.2 L161.1,686.2 M170.3,667.0 L170.3,693.0 M184.9,672.8 L184.9,698.8 M204.0,677.2 L204.0,703.2 M226.2,680.0 L226.2,706.0 M250.0,681.0 L250.0,707.0 M273.8,680.0 L273.8,706.0 M296.0,677.2 L296.0,703.2 M315.1,672.8 L315.1,698.8 M329.7,667.0 L329.7,693.0 M338.9,660.2 L338.9,686.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="653" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,627 L158,653 A92,28 0 0 0 342,653 L342,627 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,634.2 L161.1,660.2 M170.3,641.0 L170.3,667.0 M184.9,646.8 L184.9,672.8 M204.0,651.2 L204.0,677.2 M226.2,654.0 L226.2,680.0 M250.0,655.0 L250.0,681.0 M273.8,654.0 L273.8,680.0 M296.0,651.2 L296.0,677.2 M315.1,646.8 L315.1,672.8 M329.7,641.0 L329.7,667.0 M338.9,634.2 L338.9,660.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="627" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,601 L158,627 A92,28 0 0 0 342,627 L342,601 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,608.2 L161.1,634.2 M170.3,615.0 L170.3,641.0 M184.9,620.8 L184.9,646.8 M204.0,625.2 L204.0,651.2 M226.2,628.0 L226.2,654.0 M250.0,629.0 L250.0,655.0 M273.8,628.0 L273.8,654.0 M296.0,625.2 L296.0,651.2 M315.1,620.8 L315.1,646.8 M329.7,615.0 L329.7,641.0 M338.9,608.2 L338.9,634.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="601" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,575 L158,601 A92,28 0 0 0 342,601 L342,575 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,582.2 L161.1,608.2 M170.3,589.0 L170.3,615.0 M184.9,594.8 L184.9,620.8 M204.0,599.2 L204.0,625.2 M226.2,602.0 L226.2,628.0 M250.0,603.0 L250.0,629.0 M273.8,602.0 L273.8,628.0 M296.0,599.2 L296.0,625.2 M315.1,594.8 L315.1,620.8 M329.7,589.0 L329.7,615.0 M338.9,582.2 L338.9,608.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="575" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,549 L158,575 A92,28 0 0 0 342,575 L342,549 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,556.2 L161.1,582.2 M170.3,563.0 L170.3,589.0 M184.9,568.8 L184.9,594.8 M204.0,573.2 L204.0,599.2 M226.2,576.0 L226.2,602.0 M250.0,577.0 L250.0,603.0 M273.8,576.0 L273.8,602.0 M296.0,573.2 L296.0,599.2 M315.1,568.8 L315.1,594.8 M329.7,563.0 L329.7,589.0 M338.9,556.2 L338.9,582.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="549" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,523 L158,549 A92,28 0 0 0 342,549 L342,523 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,530.2 L161.1,556.2 M170.3,537.0 L170.3,563.0 M184.9,542.8 L184.9,568.8 M204.0,547.2 L204.0,573.2 M226.2,550.0 L226.2,576.0 M250.0,551.0 L250.0,577.0 M273.8,550.0 L273.8,576.0 M296.0,547.2 L296.0,573.2 M315.1,542.8 L315.1,568.8 M329.7,537.0 L329.7,563.0 M338.9,530.2 L338.9,556.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="523" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,497 L158,523 A92,28 0 0 0 342,523 L342,497 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,504.2 L161.1,530.2 M170.3,511.0 L170.3,537.0 M184.9,516.8 L184.9,542.8 M204.0,521.2 L204.0,547.2 M226.2,524.0 L226.2,550.0 M250.0,525.0 L250.0,551.0 M273.8,524.0 L273.8,550.0 M296.0,521.2 L296.0,547.2 M315.1,516.8 L315.1,542.8 M329.7,511.0 L329.7,537.0 M338.9,504.2 L338.9,530.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="497" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M158,471 L158,497 A92,28 0 0 0 342,497 L342,471 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M161.1,478.2 L161.1,504.2 M170.3,485.0 L170.3,511.0 M184.9,490.8 L184.9,516.8 M204.0,495.2 L204.0,521.2 M226.2,498.0 L226.2,524.0 M250.0,499.0 L250.0,525.0 M273.8,498.0 L273.8,524.0 M296.0,495.2 L296.0,521.2 M315.1,490.8 L315.1,516.8 M329.7,485.0 L329.7,511.0 M338.9,478.2 L338.9,504.2" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="250" cy="471" rx="92" ry="28" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><ellipse cx="250" cy="471" rx="66.2" ry="20.2" fill="none" stroke="#39ff6e" stroke-width="1.6"/><ellipse cx="250" cy="471" rx="27.6" ry="8.4" fill="none" stroke="#39ff6e" stroke-width="1.6"/><path d="M315,844 L315,872 A100,30 0 0 0 515,872 L515,844 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M318.4,851.8 L318.4,879.8 M328.4,859.0 L328.4,887.0 M344.3,865.2 L344.3,893.2 M365.0,870.0 L365.0,898.0 M389.1,873.0 L389.1,901.0 M415.0,874.0 L415.0,902.0 M440.9,873.0 L440.9,901.0 M465.0,870.0 L465.0,898.0 M485.7,865.2 L485.7,893.2 M501.6,859.0 L501.6,887.0 M511.6,851.8 L511.6,879.8" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="415" cy="844" rx="100" ry="30" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M315,816 L315,844 A100,30 0 0 0 515,844 L515,816 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M318.4,823.8 L318.4,851.8 M328.4,831.0 L328.4,859.0 M344.3,837.2 L344.3,865.2 M365.0,842.0 L365.0,870.0 M389.1,845.0 L389.1,873.0 M415.0,846.0 L415.0,874.0 M440.9,845.0 L440.9,873.0 M465.0,842.0 L465.0,870.0 M485.7,837.2 L485.7,865.2 M501.6,831.0 L501.6,859.0 M511.6,823.8 L511.6,851.8" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="415" cy="816" rx="100" ry="30" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M315,788 L315,816 A100,30 0 0 0 515,816 L515,788 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M318.4,795.8 L318.4,823.8 M328.4,803.0 L328.4,831.0 M344.3,809.2 L344.3,837.2 M365.0,814.0 L365.0,842.0 M389.1,817.0 L389.1,845.0 M415.0,818.0 L415.0,846.0 M440.9,817.0 L440.9,845.0 M465.0,814.0 L465.0,842.0 M485.7,809.2 L485.7,837.2 M501.6,803.0 L501.6,831.0 M511.6,795.8 L511.6,823.8" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="415" cy="788" rx="100" ry="30" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M315,760 L315,788 A100,30 0 0 0 515,788 L515,760 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M318.4,767.8 L318.4,795.8 M328.4,775.0 L328.4,803.0 M344.3,781.2 L344.3,809.2 M365.0,786.0 L365.0,814.0 M389.1,789.0 L389.1,817.0 M415.0,790.0 L415.0,818.0 M440.9,789.0 L440.9,817.0 M465.0,786.0 L465.0,814.0 M485.7,781.2 L485.7,809.2 M501.6,775.0 L501.6,803.0 M511.6,767.8 L511.6,795.8" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="415" cy="760" rx="100" ry="30" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M315,732 L315,760 A100,30 0 0 0 515,760 L515,732 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M318.4,739.8 L318.4,767.8 M328.4,747.0 L328.4,775.0 M344.3,753.2 L344.3,781.2 M365.0,758.0 L365.0,786.0 M389.1,761.0 L389.1,789.0 M415.0,762.0 L415.0,790.0 M440.9,761.0 L440.9,789.0 M465.0,758.0 L465.0,786.0 M485.7,753.2 L485.7,781.2 M501.6,747.0 L501.6,775.0 M511.6,739.8 L511.6,767.8" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="415" cy="732" rx="100" ry="30" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M315,704 L315,732 A100,30 0 0 0 515,732 L515,704 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M318.4,711.8 L318.4,739.8 M328.4,719.0 L328.4,747.0 M344.3,725.2 L344.3,753.2 M365.0,730.0 L365.0,758.0 M389.1,733.0 L389.1,761.0 M415.0,734.0 L415.0,762.0 M440.9,733.0 L440.9,761.0 M465.0,730.0 L465.0,758.0 M485.7,725.2 L485.7,753.2 M501.6,719.0 L501.6,747.0 M511.6,711.8 L511.6,739.8" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="415" cy="704" rx="100" ry="30" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M315,676 L315,704 A100,30 0 0 0 515,704 L515,676 Z" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><path d="M318.4,683.8 L318.4,711.8 M328.4,691.0 L328.4,719.0 M344.3,697.2 L344.3,725.2 M365.0,702.0 L365.0,730.0 M389.1,705.0 L389.1,733.0 M415.0,706.0 L415.0,734.0 M440.9,705.0 L440.9,733.0 M465.0,702.0 L465.0,730.0 M485.7,697.2 L485.7,725.2 M501.6,691.0 L501.6,719.0 M511.6,683.8 L511.6,711.8" stroke="#39ff6e" stroke-width="1.2" opacity="0.75"/><ellipse cx="415" cy="676" rx="100" ry="30" fill="#000" stroke="#39ff6e" stroke-width="2.4"/><ellipse cx="415" cy="676" rx="72.0" ry="21.6" fill="none" stroke="#39ff6e" stroke-width="1.6"/><ellipse cx="415" cy="676" rx="30.0" ry="9.0" fill="none" stroke="#39ff6e" stroke-width="1.6"/></g>
  </svg>
  <div class="tycoon-stats" aria-hidden="true">
    <span>Project Tycoon</span>
    <span>Arriving 0.51.02</span>
    <span>Correct guesses 0</span>
  </div>
  <div class="tycoon-readout" aria-hidden="true">
    <div class="tycoon-wave">
      <svg viewBox="0 0 300 60" preserveAspectRatio="none" focusable="false">
        <path d="M0,34 L16,34 Q21,27 26,34 L34,34 L37,40 L42,5 L47,54 L51,34 L62,34 Q70,21 78,34 L100,34 L116,34 Q121,27 126,34 L134,34 L137,40 L142,5 L147,54 L151,34 L162,34 Q170,21 178,34 L200,34 L216,34 Q221,27 226,34 L234,34 L237,40 L242,5 L247,54 L251,34 L262,34 Q270,21 278,34 L300,34" pathLength="1000"/>
      </svg>
    </div>
    <div class="tycoon-clue">
      <span class="tycoon-clue-label">Next clue</span>
      <span class="tycoon-clue-name">Nicolai Malthus</span>
    </div>
  </div>
</div>

Stay safe out there, MekWarriors. I'll see you in 0.51.01!

*If you've got questions or feedback, come find us on [Discord](https://discord.gg/megamek).*
