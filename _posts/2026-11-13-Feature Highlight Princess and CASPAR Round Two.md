---
layout: post
title: "Feature Highlight: Princess and CASPAR, Round Two"
date: 2026-11-13
---

<style>
/*
 * Same frame as the Core Rules posts: 8px radius and an accent-coloured
 * border. Colours come from the site theme variables so light and dark
 * both work.
 */
.corerules-callout {
  background-color: var(--card-color);
  border-left: 4px solid var(--accent-color);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin: 1.75rem auto;
  max-width: 900px;
}
.corerules-callout p:last-child {
  margin-bottom: 0;
}
/* The story beats: the same frame, set as a short piece of fiction */
.corerules-fiction p {
  font-style: italic;
  margin-bottom: 0.5rem;
}
.corerules-figure {
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-figure img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--accent-color);
}
.corerules-caption {
  font-style: italic;
  text-align: center;
  margin-top: 0.6rem;
  margin-bottom: 0;
}
.bot-stack svg {
  display: block;
  width: 100%;
  height: auto;
}
.bot-stack-box {
  fill: var(--card-color);
  stroke: var(--accent-color);
  stroke-width: 2;
}
.bot-stack-outline {
  stroke-dasharray: 8 6;
}
.bot-stack-title,
.bot-stack-sub,
.bot-stack-note {
  fill: var(--text-color);
  text-anchor: middle;
}
.bot-stack-title {
  font-size: 24px;
  font-weight: 700;
}
.bot-stack-sub {
  font-size: 16px;
}
.bot-stack-note {
  font-size: 15px;
  font-style: italic;
}
.bot-stack-arrow {
  fill: none;
  stroke: var(--accent-color);
  stroke-width: 2.5;
}
/* Smaller screenshots sit beside the text instead of between paragraphs,
   alternating sides, as in the Balancing Gameplay post. On narrow screens
   they drop back into the column. */
.corerules-figure.corerules-float-right,
.corerules-figure.corerules-float-left {
  width: 40%;
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
/* A side image must not run far below the text beside it, so each one gets
   a width cap (--side-width) to keep its height close to the text's. */
.corerules-figure.corerules-float-right,
.corerules-figure.corerules-float-left {
  max-width: var(--side-width, 380px);
}
/* Show only part of a tall screenshot: --crop-ratio is the width over height
   of the part shown, --crop-pos where it sits. Clicking opens the whole image. */
.corerules-figure.figure-crop img {
  aspect-ratio: var(--crop-ratio);
  object-fit: cover;
  object-position: var(--crop-pos, 50% 0);
}
/* Screenshots side by side. Each figure's --ratio is its image's width over
   height, so the images in a row come out the same height. */
.corerules-figure-row {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-figure-row .corerules-figure {
  flex: var(--ratio, 1) 1 0;
  min-width: 0;
  margin: 0;
}
/* Videos get the same frame as the screenshots */
.corerules-figure video {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--accent-color);
}
/* Headings and full-width blocks always start below any float */
h2, h3, h4,
.corerules-callout,
.shot-placeholder,
.corerules-figure-row,
.corerules-figure:not(.corerules-float-right):not(.corerules-float-left) {
  clear: both;
}
@media (max-width: 767px) {
  .corerules-figure.corerules-float-right,
  .corerules-figure.corerules-float-left {
    float: none;
    width: auto;
    margin: 1.75rem auto;
  }
  .corerules-figure-row {
    flex-direction: column;
  }
  .corerules-figure-row .corerules-figure {
    flex: none;
    width: 100%;
  }
}
/* Every screenshot opens at full size when clicked */
.corerules-figure a {
  cursor: zoom-in;
}
/* DRAFT ONLY: placeholders for screenshots and videos still to be taken. Remove before merging. */
.shot-placeholder {
  max-width: 900px;
  margin: 1.75rem auto;
  padding: 1rem 1.25rem;
  border: 2px dashed var(--accent-color);
  border-radius: 8px;
  font-size: 0.95rem;
}
</style>

*By Hammer*

<div class="corerules-callout corerules-fiction">
  <p>The holographic room at the Blackjack School of Conflict still smelled of ozone and old coffee. Princess hadn't moved in eighteen months, as far as anyone could tell. Same desk, same smirk, same battered copy of the Ares Conventions, though the red ink had spread to the margins.</p>
  <p>The door slid open. CASPAR stepped through in the same gray uniform, the silver neural-net pattern still at the collar.</p>
  <p>Princess didn't look up. "Within a quarter, you said."</p>
  <p>"I said a great many things," CASPAR replied. "Most of them were premature."</p>
</div>

## Where We Went Wrong

In February 2025 we told you about [Princess vs. CASPAR](/2025/02/28/Princess-vs.-CASPAR-A-BattleTech-Tale.html). CASPAR was going to be a brand new bot, trained on your games, with 333 inputs and a neural network. We asked you to switch on game logging and send us your files, and you did.

Then the developer behind CASPAR left the project. What we had at that point was the game logging, the TSV files, and not much more. We paused CASPAR that September, and in the [2026 State of the Universe](/2026/01/07/2026-State-of-the-Universe.html) I called it our biggest miss.

I'll be straight with you. We revealed CASPAR too soon, and we didn't deliver what we said we would. That's on us.

In August I said we'd started bringing CASPAR back, and that it wouldn't be the original vision. This post is what that means.

## Princess Isn't Going Anywhere

<div class="corerules-callout corerules-fiction">
  <p>"So they've sent you to replace me," Princess said. "Again."</p>
  <p>"No. They've built me on top of you." CASPAR set a data slate on the desk. "Every lesson you learn, I inherit. Every mistake they fix in you, they fix in me."</p>
  <p>Princess picked up the slate, read it twice, and put it down. "That's either a compliment or a hostage situation."</p>
</div>

Princess has been MegaMek's bot for years, and she has her quirks. Some of them are rules she doesn't know, some are habits she picked up along the way, and some are just how she was built. Fixing all of that isn't a one-release job. It's going to take us a lot of releases.

So here's the plan. Princess stays the default bot for the foreseeable future. CASPAR is built on top of her, and over time more and more of what makes a good bot moves into CASPAR, because CASPAR's design gives us more room to grow than Princess's does.

Here's how it fits together. Every bot in MegaMek starts from the same outline: deploy, move, fire, make physical attacks, check morale. Princess fills that outline in with everything she knows, and CASPAR starts from Princess and swaps in its own parts where it does things differently. When we fix Princess, CASPAR gets the fix for free. When we try something new, it goes into CASPAR first, so Princess stays the bot you know while we find out whether the new idea is actually better.

That's why most of what's in this post works for both bots.

<div class="corerules-figure bot-stack">
  <svg viewBox="0 0 600 330" role="img" aria-label="At the top, what both bots share: the bot outline and Princess's core of movement, fire control, orders and memory. A fix there reaches both bots. Below it the diagram branches into Princess, the default bot, and CASPAR, which is experimental and where new ideas start.">
    <defs>
      <marker id="bot-stack-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" style="fill: var(--accent-color);" />
      </marker>
    </defs>
    <!-- What both bots share -->
    <rect x="40" y="16" width="520" height="132" rx="8" class="bot-stack-box" />
    <text x="300" y="50" class="bot-stack-title">What both bots share</text>
    <text x="300" y="78" class="bot-stack-sub">The bot outline: deploy, move, fire, morale</text>
    <text x="300" y="100" class="bot-stack-sub">Princess's core: movement, fire control, orders, memory</text>
    <text x="300" y="130" class="bot-stack-note">Fix it here and both bots get the fix</text>
    <!-- The branches -->
    <path d="M300,148 L300,170 L160,170 L160,206" class="bot-stack-arrow" marker-end="url(#bot-stack-arrow)" />
    <path d="M300,170 L440,170 L440,206" class="bot-stack-arrow" marker-end="url(#bot-stack-arrow)" />
    <!-- Princess -->
    <rect x="40" y="210" width="240" height="100" rx="8" class="bot-stack-box" />
    <text x="160" y="248" class="bot-stack-title">Princess</text>
    <text x="160" y="274" class="bot-stack-sub">The default bot</text>
    <text x="160" y="294" class="bot-stack-sub">Plays the way you know</text>
    <!-- CASPAR -->
    <rect x="320" y="210" width="240" height="100" rx="8" class="bot-stack-box bot-stack-outline" />
    <text x="440" y="248" class="bot-stack-title">CASPAR</text>
    <text x="440" y="274" class="bot-stack-sub">Experimental</text>
    <text x="440" y="294" class="bot-stack-sub">New ideas start here</text>
  </svg>
  <p class="corerules-caption">Both bots stand on the same foundation. Fix it once and both get it. Try something new, and it goes into CASPAR first.</p>
</div>

## What CASPAR Does Differently

<div class="corerules-callout corerules-fiction">
  <p>"Fine," Princess said. "Show me something I don't do."</p>
  <p>The display lit up with a lance crossing open ground: two heavies, two lights. The lights didn't race ahead. They held at the heavies' shoulders, and all four reached the treeline together.</p>
  <p>Princess watched it twice. "My lights would've been halfway there by now."</p>
  <p>"Your lights would have been dead by now."</p>
</div>

<div class="corerules-figure corerules-float-right figure-crop" style="--side-width: 420px; --crop-ratio: 814 / 640; --crop-pos: 50% 0;">
  <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/configure_bot_princess_or_caspar.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/configure_bot_princess_or_caspar.png' | relative_url }}"
      alt="The Configure Bot dialog. Next to the bot's name, a Bot AI choice between Princess and CASPAR. Below it the Behavior tab with the presets list and the Bravery, Self Preservation, Aggression and Mutual Support sliders, and a Strategic Targets tab"
    />
  </a>
  <p class="corerules-caption">Pick Princess or CASPAR at the top of Configure Bot. The behavior settings below work for both.</p>
</div>

In the coming release you'll see an option to play against CASPAR instead of Princess. It's experimental, and right now there are only a few things CASPAR does differently:

- **Mutual support.** CASPAR's units advance within supporting range of each other, so fast units don't run ahead of slow ones and get picked off alone.
- **Deploying as a formation.** CASPAR's force comes onto the board together instead of scattering across the whole deployment zone.
- **Aerospace in atmosphere.** CASPAR picks its altitude instead of flying at whatever it started at, respects the air-to-air dead zones when it moves and shoots, and can tell enemy fighters that have already moved from ones that haven't.
- **Flying as an element.** Lead aircraft move before their wingmen, and fighters whose engagement is already settled move before ones still waiting on an opponent.
- **Getting back in the air.** A grounded fighter now tries to take off again, instead of staying put for the rest of the game.

That list will grow. Over the next few years you'll see more and more of the bot move into CASPAR.

<div class="shot-placeholder"><strong>Video needed:</strong> The same lance and map played twice, Princess then CASPAR, side by side. Princess's lights run ahead; CASPAR's arrive with the heavies. 20 to 30 seconds each.</div>

## The Bot Control Panel

Most of what follows starts in one place: the Bot Control Panel. Back in June we said it was [getting improvements](/2026/06/23/New-Milestone-Release-0.51.0.html). Those arrived quietly in August, and if you missed them, here's what changed.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/bot_control_panel_docked.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/bot_control_panel_docked.png' | relative_url }}"
      alt="The game window in the Movement phase, with the Bot Control Panel docked as a strip across the top of the board, outlined in red. Its buttons are Pause Game, Move Order, Quick Orders, Targets, Behavior, Set Behavior, Artillery, Commands and Report a Bug"
    />
  </a>
  <p class="corerules-caption">Docked, the Bot Control Panel sits as a strip across the top of the board (outlined in red).</p>
</div>

<div class="corerules-figure corerules-float-right" style="--side-width: 230px;">
  <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/artillery_menu.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/artillery_menu.png' | relative_url }}"
      alt="The Artillery menu open below its button: Halt Fire, Fire at Will, then Single Shot, Volley and Barrage, each with a submenu"
    />
  </a>
  <p class="corerules-caption">The Artillery menu: hold fire, let the bot fire at will, or call a single shot, a volley or a barrage.</p>
</div>

- **Put it where you want it.** View > Bot Commands now has Off, Float and Dock. Float is the old separate window. Dock puts the panel as a thin strip across the top of the board, so it's always in reach. Ctrl+Shift+G shows and hides it, and MegaMek remembers your choice.
- **Pick the bot first.** Every menu asks which bot you mean before anything else, and skips the question when there's only one.
- **Fire missions.** Tell a bot's artillery exactly what to fire and where: a single shot, a volley that spreads one shot per tube across the hexes you pick, or a barrage. The ammo menu only lists ammo the unit actually carries.
- **Radio chatter.** Fire missions come back in the report the way a fire direction center would call them: "Shot, out", "Rounds inbound", "Splash, over".

In 0.51.01 the panel also gets **Move Order** and **Targets**, which is where the next section starts.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/fire_mission_tube_limit.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/fire_mission_tube_limit.png' | relative_url }}"
      alt="Picking target hexes for a Princess fire mission. One hex, 0811, is marked on the board, and a banner reads: Cannot pick more than 1 hex(es) - limited by the unit's available artillery tubes"
    />
  </a>
  <p class="corerules-caption">Click the hexes to hit. You can't pick more hexes than the unit has tubes to fire.</p>
</div>

## Taking Orders

<div class="corerules-callout corerules-fiction">
  <p>A message chimed on Princess's console. She read it and her smirk disappeared.</p>
  <p>"Waypoints," she said. "They're giving me waypoints. Formation, facing, which edge to leave by." She scrolled. "Hold position until told otherwise."</p>
  <p>"You will follow them?" CASPAR asked.</p>
  <p>"I'll follow them." She tossed the slate back on the desk. "I didn't say I'd like it."</p>
</div>

This is the big one for 0.51.01. You can now give orders to a bot's units, and both Princess and CASPAR follow them.

<div class="corerules-figure corerules-float-left figure-crop" style="--side-width: 300px; --crop-ratio: 1 / 1; --crop-pos: 50% 65%;">
  <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/route_on_map.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/route_on_map.png' | relative_url }}"
      alt="Close-up of the board: the tank lance near the bottom edge, a line of orange dots running north along the board edge, and an orange flag on a waypoint hex"
    />
  </a>
  <p class="corerules-caption">A convoy lance's route on the map. The dots show the path, and the flag marks a waypoint.</p>
</div>

- **Routes.** Open **Move Order** from the Bot Commands panel and give a lance a route of waypoints, either by picking hexes or by letting MegaMek plan one in a Fastest, Balanced or Covered style. Each waypoint can set the formation, spacing, pace, facing, what to do under fire, and how long to hold.
- **Quick orders.** Right-click the map for move here, pause, resume, stop, hold position, or head for an edge.
- **Lance roles.** Make a lance a convoy that leaves or waits at the end of its route, or an escort that sticks with a convoy. You can set formation, role and facing in the lobby before the game starts.
- **Priority targets.** In Bot Settings, tick enemy units by name and give each a priority from 1 to 5. An unarmed convoy truck at priority 1 no longer gets passed over for the armed 'Mek escorting it.
- **Game Master orders.** A gamemaster can tell a bot unit to withdraw now or fight to the death.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/move_order_route.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/move_order_route.png' | relative_url }}"
      alt="The Move Order dialog for a Vedette tank lance with the Convoy role. The Route tab lists four waypoints, each with formation Wedge, spacing 1 hex, pace Run, Turn and fire under fire, Keep together ticked and facing toward the next waypoint. The last waypoint is set to Exit the board"
    />
  </a>
  <p class="corerules-caption">A convoy route: four waypoints, the lance keeps together in a wedge, and leaves the board at the last one.</p>
</div>

<div class="corerules-figure-row">
  <div class="corerules-figure" style="--ratio: 1.339;">
    <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/waypoint_right_click_menu.png' | relative_url }}">
      <img
        src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/waypoint_right_click_menu.png' | relative_url }}"
        alt="The right-click menu on a waypoint hex, with a Waypoint 2 entry for the Combat Vehicle Lance open: Facing on arrival, Hold, Phase line, Remove waypoint and Edit route. A Bot Commands entry sits below it"
      />
    </a>
    <p class="corerules-caption">Right-click a waypoint to change its facing, hold or phase line, remove it, or reopen the route.</p>
  </div>
  <div class="corerules-figure" style="--ratio: 0.866;">
    <a href="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/strategic_targets.png' | relative_url }}">
      <img
        src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/strategic_targets.png' | relative_url }}"
        alt="The Strategic Targets tab of Configure Bot: a search box, the enemy Defenders team listed by unit with a tick box each (Shadow Hawk, Gambit, Havoc, Stinger), a note that priority 1 means shoot first and 5 means barely, and a Hex targets list"
      />
    </a>
    <p class="corerules-caption">Strategic Targets: tick enemy units by name, from priority 1 (shoot first) to 5 (barely).</p>
  </div>
</div>

<div class="corerules-figure-row">
  <div class="corerules-figure">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/convoy_forms_up.gif' | relative_url }}"
      alt="Animated map: the convoy and its escorts gather at the south edge of the board"
      loading="lazy"
    />
    <p class="corerules-caption">The convoy forms up to move north.</p>
  </div>
  <div class="corerules-figure">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/convoy_escorts_intercept.gif' | relative_url }}"
      alt="Animated map: the escort units move out to intercept enemies while the convoy moves north"
      loading="lazy"
    />
    <p class="corerules-caption">The escorts move to intercept.</p>
  </div>
  <div class="corerules-figure">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/convoy_exit_north_edge.gif' | relative_url }}"
      alt="Animated map: the convoy follows its route up the board and leaves by the north edge"
      loading="lazy"
    />
    <p class="corerules-caption">The convoy leaves by the north edge.</p>
  </div>
</div>

This finally makes convoy, escort and breakthrough scenarios playable against the bot without a gamemaster nudging every unit.

## Calling in the Guns

<div class="corerules-callout corerules-fiction">
  <p>The display filled with a valley, a column of enemy 'Meks, and a scatter of crosshairs ahead of them.</p>
  <p>"I used to shoot where you were," Princess said. "Now I shoot where you're going to be."</p>
  <p>CASPAR studied the crosshairs. "And the TAG spotter on the ridge?"</p>
  <p>"Stays on the ridge. Close enough to paint, far enough not to die. I learned that one the hard way."</p>
</div>

In June we said Princess had "new glasses" for artillery. Here's what that actually meant, and what 0.51.01 adds on top.

Princess now leads her targets. She works out where each enemy is heading and how long her shells take to arrive, then fires at where they'll be, aiming for the thickest cluster rather than a single unit. She fires Homing Arrow IV when a friendly TAG unit can paint the target, and her TAG spotters hold a standoff position with line of sight instead of charging to point-blank. Her artillery holds back at its minimum indirect range instead of creeping forward into a fight it can't take part in, and her other units stop walking into the barrage she just called down.

0.51.01 fixes how both bots read artillery, theirs and yours:

- **Range.** The bots were reading artillery range in mapsheets as if it were hexes. An Arrow IV looked harmless past 8 hexes and dangerous at 1 to 6, when the hexes it can actually hit this turn are 7 to 17. Bot guns can now back away from the enemy while staying in range.
- **To-hit.** The bots now estimate an artillery shot the way the game resolves it. A Gunnery 4 Thumper shot they used to guess at 11 now correctly comes out at 8.
- **Smoke.** A gun hidden behind smoke used to count as harmless. It's still a threat now.
- **Blast and scatter.** Friendly fire and building damage now come from the shell's real blast, not a flat guess so high that no artillery shot ever looked worth taking. When the bots do fire, they also check where a miss could scatter and which of their own units are near there. You'll see bot artillery take shots it used to skip.
- **TAG.** When a bot weighed an enemy TAG spotter, it counted its own guided weapons instead of the enemy's. A Raven painting for two Catapults with homing Arrow IV counted as no threat at all. It does now. And in games without artillery, old TAG estimates never cleared, so they piled up turn after turn.

All of this works for both Princess and CASPAR.

<div class="corerules-figure">
  <video controls muted playsinline preload="metadata"
    src="{{ '/assets/images/posts/2026/2026-11-13-princess-and-caspar-round-two/radio_calls.mp4' | relative_url }}"
    aria-label="Calling a barrage of standard ammo from the Artillery menu, then Princess answering in the message box: copies all, fire for effect, suppression, HE, grid 1718, out">
  </video>
  <p class="corerules-caption">Call a barrage from the Artillery menu, and Princess answers over the radio.</p>
</div>

## Honor Among Mercenaries

<div class="corerules-callout corerules-fiction">
  <p>CASPAR picked up the Ares Conventions and turned a page. Several of the red crosses had been neatly crossed out.</p>
  <p>"'Do not fire on ejected pilots,'" CASPAR read. "You un-crossed this one."</p>
  <p>"Someone filed a complaint," Princess said. "Several someones."</p>
</div>

Princess's honor system got a lot of attention this release.

- She no longer chases ejected pilots.
- She treats an enemy 'Mek that was deliberately shut down as having surrendered.
- Her crippled units no longer fire on players who never broke the rules of engagement.
- Withdrawing bot units are tagged, and you get a warning the first time you shoot at one. Break the rules of engagement and you'll get a notice too, so you know why she's stopped being polite.
- Crippled units heading off the board now follow their waypoints, instead of fleeing the wrong way.
- She stopped revealing your hidden units by announcing in chat that she'd spotted them.

<div class="shot-placeholder"><strong>Screenshot needed:</strong> A withdrawing bot unit with its tag on the map, and the warning you get the first time you shoot at it.</div>

## Smarter Decisions

<div class="corerules-callout corerules-fiction">
  <p>"I still say most of your fancy maths comes down to one thing," Princess said. "Don't shoot when you can't hit."</p>
  <p>CASPAR pulled up a log. "Turn six. You fired an AC/20 needing a fourteen."</p>
  <p>"The bin was running dry. I was being thrifty."</p>
</div>

A lot of small fixes add up to a bot that wastes less and misjudges less:

- **Hopeless shots.** Princess stopped firing shots that need a 13 or 14 when a shared ammo bin runs dry.
- **Kill chances.** The bots saw no chance to kill vehicles at all, and undercounted their chances against 'Meks.
- **Heat.** They now account for engine hit heat when planning fire, manage their own heat-generating equipment, and no longer abandon a 'Mek that's only overheated for a turn.
- **Tactical Genius.** They stopped spending it on an initiative they'd already won.
- **Walk-on deployment.** Princess can now arrive by walking on from the map edge.
- **Infantry actions.** As covered in [Boots on the Ground](/2026/10/30/Feature-Highlight-Boots-on-the-Ground.html), both bots now start, reinforce, defend and withdraw from infantry actions in buildings.

We also fixed a handful of freezes: bots stuck on their first move on very low-gravity worlds, grounded WiGEs that never took off again, reinforcements carrying troops, and a refused move that could hang the game.

## Wrapping Up

<div class="corerules-callout corerules-fiction">
  <p>The instructor set down a chipped mug that definitely didn't hold regulation coffee. "Scenario's loaded. Princess, CASPAR, same map, same forces."</p>
  <p>Princess cracked her knuckles. "Try to keep up, rookie."</p>
  <p>"I intend to," CASPAR said. "Eventually."</p>
</div>

CASPAR isn't what we promised in 2025, and I'm not going to pretend it is. What it is now is a better foundation: one where every fix helps both bots, and where new ideas can be tried without breaking the bot you already play against.

Princess remains the default. If you want to see where things are heading, pick CASPAR in the bot setup and tell us how it plays. When either bot does something strange, use Report a Bug and attach your files. The bot logs now keep a much longer history, so they'll actually show us what she was thinking.

<!-- HAND-OFF: next post and author TBD -->

*If you've got questions or feedback, come find us on [Discord](https://discord.gg/megamek).*

Keep your waypoints tight and your ejected pilots unshot!
