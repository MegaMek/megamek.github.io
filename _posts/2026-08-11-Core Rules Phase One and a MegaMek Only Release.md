---
layout: post
title: "Core Rules Phase One, and a MegaMek-Only Release"
date: 2026-08-11
categories: [announcements, development]
author: Hammer, Project Lead
tags: [megamek, development, rules, core-rules, release]
---

<style>
/*
 * Core Rules post - shared visual language, matching the 30 July post.
 * Every box and figure uses the same frame: card background, 8px radius,
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

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_Rules/core-products-lineup.png' | relative_url }}"
    alt="The BattleTech Starter Box, Core Box, and Core Rulebook"
  />
  <p class="corerules-caption">The <a href="https://www.catalystgamelabs.com/news/catalyst-game-labs-battletech-refit-redeployment">Core product line</a>. Phase 1 is the gameplay rules out of these books.</p>
</div>

<div class="corerules-callout">
  <h3><i aria-hidden="true" class="fas fa-bolt"></i> Read The Whole Blog</h3>
  <p class="corerules-lede"><strong>Phase 1 of the Core Rules is merged, and a MegaMek-only release lands Friday.</strong></p>
  <ul>
    <li>It's in the nightlies tonight, if you don't want to wait for Friday.</li>
    <li><strong>MegaMek <span class="corerules-ver corerules-ver-now">0.51.0.1</span> lands Friday, 14 August.</strong> MegaMek alone. No MegaMekLab, no MekHQ.</li>
    <li>Core is the default ruleset now. Total Warfare is still there and you can select it.</li>
    <li>Keep it in its own folder. Don't copy it into your 0.51.0 Milestone folder.</li>
    <li>Roughly 136 changes, reaching into code nobody has touched in decades. We need you finding the bugs.</li>
  </ul>
  <p>That's the shape of it, not the substance. This is advance notice rather than the release announcement, and full release notes follow when it drops.</p>
  <p>Last time we put one of these out, the Discord filled up with questions this post had already answered. Which folder to use, what's in and what isn't, which version number is which, where to take a rules question - it's all below. Save us both the trip and read the whole thing.</p>
</div>

When we [laid out the Core Rules plan back in July](https://megamek.org/announcements/development/2026/07/30/BattleTech-Core-Rules-and-the-Old-Ones.html), we told you another post would follow to announce when Phase 1 merged in and testing could start.

This is that post, and it's got a second piece of news riding along with it.

The Pull Request for Phase 1 of the Core Rules merged today, and it's going into the nightlies now. We're also doing something we've never done before: a special release covering MegaMek alone, and we're aiming to put it out this Friday, 14 August.

Before we go any further, get these two straight, because they're close enough to trip over.

<div class="corerules-callout corerules-note">
  <span class="corerules-ver corerules-ver-now">0.51.0.1</span> is this Friday's MegaMek Core Rules release.<br><br>
  <span class="corerules-ver corerules-ver-later">0.51.01</span> is the full suite release still to come.
</div>

## The Special Release

<div class="corerules-figure corerules-figure-narrow">
  <img
    src="{{ '/assets/images/Core_Rules/core-rulebook-cover.png' | relative_url }}"
    alt="BattleTech Core Rulebook cover"
  />
  <p class="corerules-caption">Phase 1 covers the core gameplay rules from this book.</p>
</div>

**MegaMek <span class="corerules-ver corerules-ver-now">0.51.0.1</span> lands Friday, 14 August**, and it covers MegaMek alone. No MegaMekLab, no MekHQ.

The reasoning is simple. The Core Rules only affect MegaMek. MegaMekLab and MekHQ aren't touched by this work, so there's no reason to hold it behind a full suite release.

The other half of it is timing. We're still a couple of months out from <span class="corerules-ver corerules-ver-later">0.51.01</span>, and that's a long stretch to leave you with nothing new to play. This puts the Core Rules in your hands now, and it gets us something we need just as much: testing from a broader player base than our nightly users. Nightlies are a small group by design. A release reaches everyone. Bug fixes and feedback are the whole point of the exercise, and the sooner reports start coming back, the more of them we can act on before <span class="corerules-ver corerules-ver-later">0.51.01</span>.

## MegaMekLab, MekHQ, and Where This Goes

Making sure the Core Rules release works properly with MegaMekLab and MekHQ is still in progress. That's the other reason this is going out standalone rather than as a suite release.

So let me be as clear as I can be about this next part.

<div class="corerules-callout corerules-note">
  Don't copy the MegaMek Core release into your 0.51.0 Milestone folder. That's likely to break all three programs. Keep it in its own folder, separate from everything else. What you should end up with is a MegaMek Core folder sitting on its own, and your MekHQ 0.51.0 folder untouched beside it.
</div>

If you want to put campaign units through the Core Rules, we suspect you can export MUL files out of MekHQ, fight the battle in the Core release, and resolve the results manually back in MekHQ. We're fine with you testing that. Go in understanding there may be issues, because we haven't validated that workflow end to end. If you run into problems, tell us. Finding them now is useful to us.

As for <span class="corerules-ver corerules-ver-later">0.51.01</span>, the timeline we gave you in July hasn't changed: end of October at the earliest, more realistically into the middle of November, carrying the rest of the MegaMek work along with the MekHQ contract rewrite and everything else.

## The Biggest Change: Core Is the Default

<div class="corerules-callout corerules-announce">
  MegaMek now defaults to Core Rules.
</div>

In Game Options, under the Basic tab, there's a drop-down for which rule system you want to use. Core is what you'll find selected when you open it. Total Warfare hasn't gone anywhere, and switching back is one click.

This is the switch we described as Phase 0 back in July, the plumbing that lets us move between rulesets. Phase 1 is what finally sits behind it.

## What's Coming In Later Phases

These aren't missing. They belong to later phases, and we haven't gotten there yet:

- Environmental changes
- Terrain changes, other than roads reducing elevation change costs and allowing one more level of elevation change than normal
- Missions
- Assets and Battlefield Support
- Buildings

## What's Not Implemented Yet

These fall inside Phase 1's scope, but they aren't in this Pull Request:

- **Walk on initiative.** It's a big change and we're handling it separately.
- **B-Pod damage to standard infantry.** Core has no rules for this, only for damage against Asset infantry.
- **Active Probes removing the Fog modifier.** That one depends on the environmental changes coming in Phase 2.
- **Removal of Tech Levels.** We covered our thinking on this at length in the July post, and it's still ahead of us.
- **Core 'Mek Lance movement.** This matches TacOps Vehicle Lance Movement, but for 'Mechs.

## Implementation Decisions

Some calls we made along the way, and the reasoning where it isn't obvious:

- Ammunition amounts for Armor Piercing AC and Precision AC ammo use the new Core values regardless of which rule system you've selected.
- If a unit is built with Extended LRMs and Artemis IV, that combination works under Total Warfare as well.
- The new weapons, Light and Heavy Plasma Rifles, are available in all rule systems.
- Charging with both a Lance and a Shield will always favor the Lance if it's functional. You only get one.
- **The Bombast Laser fully replaces the old one, in both Core and Total Warfare.** It was such a large rule change that we couldn't carry the old version along with it, so what's in the game now is completely different to what was there before. It's also the first weapon we have that puts firing modes and charging together in a single piece of equipment. In the Ranged Attack Phase you'll see a **Charge Laser** button on the bottom menu, and it lights up for bombast lasers. The only question is the interesting one: do you shoot for maximum damage now and take the +2 to hit, or charge it and fire without the penalty next turn?
- The Weapon Attack Phase is now the Ranged Attack Phase.
- The Physical Phase is now the Physical Attack Phase.
- The tick-box for half-ammo loading in the Configure Mek screen is available under all rule systems.

## New Things You Should Know

- MRM Apollo Saturation attacks are declared by right-clicking on the hex.
- Changing the rule system changes which ammunition you can select in the Configure Mek screen.
- When you declare a charge and your unit has a shield, you'll be prompted to raise it.
- Front-loaded initiative is used for Core Rules.
- Initiative streak compensation is an official optional rule under Core, so it's no longer marked as Unofficial.

## Changes to the Game Options

Several options in the Game Options screen aren't valid under Core Rules. Rather than remove them, we grey them out when Core is selected, so you can see at a glance what does and doesn't apply. They're all still there when you select Total Warfare.

Here's what's unavailable with Core Rules selected:

- **Flamers per BattleMech Manual.** On in Core.
- **TacOps Minefields / BMM Minefield Support.** On in Core. Core uses Asset minefields, but the intent is for minefields to exist, so this is enabled.
- **(Unofficial) Alternate "Better" MASC/Supercharger.** Off in Core.
- **(Unofficial) Alternate "Better" MASC/Supercharger, Enhanced.** Off in Core.
- **TacOps Enhanced Missile Defense.** On in Core.
- **TacOps Charge Damage.** Off in Core. Charge damage changes significantly under Core.
- **TacOps Retractable Blades.** On in Core.
- **(Unofficial) Unjam Ultra Autocannons.** Off in Core. UACs don't jam any more.
- **(Unofficial) CASE/CASE II reduces pilot damage on ammo explosion.** Core already does this.
- **TacOps Backward Movement (Expanded).** On in Core.
- **Front-loaded initiative.** On in Core.

## Implemented, But We Want Eyes On It

These are in and working as far as we can tell, and they touch code that hasn't been disturbed in a very long time. If you want to be useful in a specific way, this is the list to work through:

- Superheavy 'Mechs: a critical hit on an ammo bin should cause one pilot hit and one explosion, and should also remove the second critical slot in that compressed slot.
- Superheavy 'Mechs: explosive weapons such as Gauss Rifles in compressed slots should only explode for the number of compressed slots, not the total critical slots the weapon would normally require.
- Underwater energy weapon attacks.
- Line of sight to 'Mechs fully submerged, viewed from above the waterline. You can't shoot across the waterline, but you can see them. This one's worth checking under double-blind.
- Piloting Skill Rolls for seatbelt checks should only ever be Piloting Skill plus the number of levels greater than zero.

## What Else Came With It

The Core Rules are the headline, but there's two months of MegaMek work riding in behind them. Around 220 pull requests have merged since 0.51.0. Here's what you're most likely to notice.

**The Game Options dialog, rebuilt.** Options are now organized into task-focused pages and sections, with a navigation search that highlights what it finds, contextual help on each option, and badges telling you which rulebook an option comes from. Unofficial and Legacy options sit behind their own category toggles, so a dialog you open to change one thing isn't a wall of rules you'll never use. Turning a category off doesn't touch values already loaded from a save or a scenario. It's the same shared settings framework MekHQ's Campaign Options are moving to, so the two will start to feel like the same program.

It's also where the Core Rules drop-down and those greyed-out options from earlier live, though not until Friday. This one isn't in the nightlies.

<div class="corerules-figure">
  <video
    width="1432"
    height="954"
    controls
    preload="metadata"
  >
    <source src="{{ '/assets/images/Core_is_Here/New_MegaMek_Options.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="corerules-caption">The rebuilt Game Options dialog: pages, search, and the rule badges.</p>
</div>

**Princess got a lot of attention.** She'll cross water and close to melee now, she accounts for weather, evasion and gravity when she works out where to move, she manages heat from terrain, movement and TSM, she knows what sprinting costs her, she places minefields, and she activates hidden units in the firing phase. She also retreats properly under Forced Withdrawal instead of milling around, stopped attacking abandoned units, and stopped hanging on ejected aero pilots.

The other half of that work was speed, and this one's worth a number. C3, C3i and Nova networks used to make Princess close to unplayable. In a 12-vs-12 game with networks on both sides, 35.8% of all client CPU went into recalculating Battle Value while she ranked her movement paths. That's now 0.18%, and the multi-second freeze before she declared her first shot is gone entirely.

We've also started work on resurrecting CASPAR. It isn't player-facing yet and there's nothing to try in this release. It won't be the original vision for it either. More on that when we've got something worth showing.

**Game Master mode, rebuilt.** The Edit Damage dialog is now the unit's own armor diagram, and it's a gamemaster's console rather than three columns of checkboxes. Click a location to damage it, set heat, crew hits and ammo, toggle unit conditions, hand a unit to another player, destroy it or restore it. There are temporary skill modifiers too, "+1 gunnery for 3 rounds", and combat, PSRs and the bots all respect them and they reverse themselves cleanly on expiry. The GM role is granted by vote, one player at a time. Alongside it there's a **Commands** button at the top right of the game window, giving you mouse access to the chat commands you actually use, with confirm dialogs on the dangerous ones.

<div class="corerules-figure-pair" style="--pair-ratio: 1344 / 1056;">
  <div class="corerules-figure">
    <video
      width="1344"
      height="1056"
      controls
      preload="metadata"
    >
      <source src="{{ '/assets/images/Core_is_Here/GM_Mode.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p class="corerules-caption">The damage editor as a gamemaster's console, built on the unit's own armor diagram.</p>
  </div>
  <div class="corerules-figure">
    <video
      width="2034"
      height="1460"
      controls
      preload="metadata"
    >
      <source src="{{ '/assets/images/Core_is_Here/Pre_Existing_Damage.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p class="corerules-caption">Rolling pre-existing damage onto a unit from the same dialog.</p>
  </div>
</div>

**Generate Battlefield.** It's a button in the lobby's Select Map tab, and it makes the server build the real board immediately and send it to everyone. Until now, the board a generated map would use didn't exist until the game started, so every player's preview was their own private random roll. Press the button and everyone previews the exact hexes you'll fight on. A custom board that only the host has on disk now works for every connected player, without them having the file.

**An Analysis tab in the unit viewer.** Damage against range, damage per direction, and weapon reach, all drawn from the unit's real weapon list. Expected damage uses the actual cluster hits table rather than assuming a 7, and it covers infantry, battle armor, ProtoMeks and large craft, not just 'Mechs. Type a different gunnery in the unit selector and the charts redraw as you type.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_is_Here/Analysis_1.png' | relative_url }}"
    alt="The Analysis tab showing damage vs range, damage per direction, and weapon reach for an Albatross C"
    width="1327" height="1387"
  />
  <p class="corerules-caption">The Albatross C 'Sooty Albatross' at Gunnery 4. Note how far the heat-sustained line sits below maximum damage past range 13.</p>
</div>

**Quirks and Pilot tabs, rebuilt with a search box.** Both tabs now tell you whether MegaMek actually implements what you're ticking. There are 39 quirks the engine ignores completely and 21 CamOps SPAs it doesn't have at all, and all of them now say so, with the book and page in the tooltip and a toggle to hide them. Nothing you tick disappears on you: a quirk a canon unit already carries always stays visible.

<div class="corerules-figure-pair">
  <div class="corerules-figure">
    <video
      width="1640"
      height="1396"
      controls
      preload="metadata"
    >
      <source src="{{ '/assets/images/Core_is_Here/Pilot_Options.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p class="corerules-caption">The Pilot tab, with the full CamOps SPA catalog and what MegaMek does with each one.</p>
  </div>
  <div class="corerules-figure">
    <video
      width="1230"
      height="920"
      controls
      preload="metadata"
    >
      <source src="{{ '/assets/images/Core_is_Here/Quirks_Rework.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p class="corerules-caption">Searching the Quirks tab, with the implementation status on every entry.</p>
  </div>
</div>

**Off switches that work.** Active Probes, ECM suites, C3/C3i/Naval C3/Nova, gauss rifles, Improved Heavy Lasers and individual heat sinks can all be deactivated, and the game effects genuinely stop while they're off. Switch a probe off and the hidden 'Mech three hexes away stays hidden. Switch C3 off and the unit shares no targeting data, but its network membership survives, so switch it back on and the old network just works. No lobby reconfiguration. Declare a switch any time you like, it resolves in the End Phase.

**Trains move as one unit.** Select a tractor and its trailers in the lobby and Connect as Train. The train deploys where the tractor deploys, and the tractor moves the whole thing. Trailers don't take a movement turn each any more. The lobby draws carried units nested under their carrier, which covers DropShips in a JumpShip and fighters in bays too, not just trailers.

<div class="corerules-figure">
  <video
    width="1832"
    height="1100"
    controls
    preload="metadata"
  >
    <source src="{{ '/assets/images/Core_is_Here/Trailers_and_Trains.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="corerules-caption">Hitching a train in the lobby, then moving the whole thing on one turn.</p>
</div>

**Engineering gear that finally does something.** Bridge-Layer (AVLB) equipment, bridge-building engineers, firefighting engineers, trench and fieldworks engineers, industrial elevators, and the bulldozer, which now clears rubble over several turns, changes charge damage, and lets a backhoe-equipped 'Mech build field fortifications the way vehicles do.

<div class="corerules-figure-pair" style="--pair-ratio: 601 / 529;">
  <div class="corerules-figure">
    <img
      src="{{ '/assets/images/Core_is_Here/AVLB.png' | relative_url }}"
      alt="A combat support vehicle with its bridge laid across a Depth 1 stream"
      width="685" height="573"
    />
    <p class="corerules-caption">The Prometheus lays its bridge across the stream in 0905.</p>
  </div>
  <div class="corerules-figure">
    <img
      src="{{ '/assets/images/Core_is_Here/Fire_Fighting.png' | relative_url }}"
      alt="Combat report showing three firefighting platoons working the same hex"
      width="601" height="529"
    />
    <p class="corerules-caption">Three platoons on one fire, the other two assisting the lead.</p>
  </div>
</div>

You also don't have to spend the first several turns of a game digging any more. Player Settings carries a **Fortifications** allotment, and you place those hexes during the deployment phase, exactly the way you place minefields. Non-mechanized infantry can deploy already dug in, and a vehicle can deploy already hull down into a fortified hex. A defensive scenario can start with the defenses in place.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_is_Here/Trenchworks.png' | relative_url }}"
    alt="A defensive line of dug-in infantry and hull down Manticores in fortified hexes"
    width="1494" height="639"
  />
  <p class="corerules-caption">A prepared position on turn one: infantry dug in, Manticores hull down, engineers still working.</p>
</div>

**Conventional infantry.** One-shot disposable weapons such as LAWs, fired once per scenario in place of the platoon's normal attack. Hitting the Deck (TO:AR p.106). Indirect fire for infantry mortars.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/Core_is_Here/Disposable_Weapons.png' | relative_url }}"
    alt="Combat report of a jump infantry platoon firing LAWs into a Wasp"
    width="1337" height="789"
  />
  <p class="corerules-caption">Thirteen troopers land their LAWs at once for 21 damage, and the Wasp loses an arm.</p>
</div>

**New rules and equipment.** TacOps Climbing for 'Mechs, including multi-turn climbs, dangle-and-drop and controlled climb-down, behind an optional rule. Advanced Scatter (TO:AR p.146). Magnetic Pulse missiles, and the completed iATM Improved Magnetic Pulse. The Directional Torso Mount and Overhead Arms quirks from the BattleMech Manual. The Wind Walker SPA. Tripwires and pitfalls out of the 4th Succession War scenario pack.

**Edge, properly wired up.** Edge can now be spent on RAC/UAC and rapid-fire autocannon jams, breach checks, failed ejection checks, RISC failures, zip lines, avoiding fire damage, several aerospace critical effects, and a set of vehicle triggers. Black-out checks don't allow multiple re-rolls any more, and Edge stays out of the way entirely when the option is off.

**Stability.** Double-blind games were leaking 400-600 MB a round, which ended in out-of-memory crashes or a client frozen solid in garbage collection, and it could follow you back into MekHQ. Both the leak and its cause are fixed, tracked all the way back to a 2020 tileset refactor. Save games that wouldn't load are fixed, a throwing packet handler can't freeze the server any more, and restoring a bot from a save no longer disconnects every client in the game.

**Smaller things you may appreciate:**

1. Keybinds for called shot direction.
2. The Aimed Shot dialog remembers where you dragged it.
3. Toasts can be turned off or retimed, and report toasts don't repeat any more.
4. Victory Conditions moved out of the Game Options dialog, and they persist between games now.
5. The combat summary GIF asks once at game start instead of recording all game and asking at the end. It was costing 9% of client CPU for players who didn't want one.
6. A FrankenMek filter in advanced search.
7. A long run of Force Generator work: Clan support, availability data in custom unit files, and better diagnostics when it can't find a unit.

## We Need Your Help

This is where you come in, and it's the reason we're putting a release out at all.

Phase 1 covers roughly 136 identified changes between Total Warfare and Core, and it reaches into functions that in some cases haven't been touched in decades. The odds of bugs are high. So this is where we need YOUR help again. We want as many of you as possible playing this, and we want you reporting what you find, especially anywhere our implementation doesn't match the Core Rules as written.

We're also looking at converting a couple of the dedicated servers over to Core, so multiplayer gets properly exercised rather than leaving us to guess from single-player reports. We're not naming which ones, because we haven't worked that out yet.

If you can't wait until Friday, Phase 1 is in the nightlies now. The new Game Options dialog isn't, so that one you'll have to wait for.

<div class="corerules-callout">
  <h3><i aria-hidden="true" class="fas fa-moon"></i> What A Nightly Is</h3>
  <p>If you haven't run a nightly before, here's what you're getting into. A nightly is built automatically at 3:00 AM UTC every night, straight from the most recent code, so it carries the latest features, fixes and improvements and none of the testing a stable release gets. Expect bugs, and expect features that aren't finished yet. They're for the people who enjoy running the bleeding edge and reporting what breaks.</p>
</div>

Don't assume Friday's build changes that, either. It'll still have far more in common with a nightly than with a development release. If stability is what you're after, stay on the current stable release and sit this one out.

Three practical rules if you do run one:

- Keep nightlies in their own separate folder, away from everything else.
- Don't use them with MekHQ.
- Two nightlies from different days can't play against each other.

<div class="corerules-callout">
  <h3><i aria-hidden="true" class="fas fa-bug"></i> Where To Take It</h3>
  <ul>
    <li><strong>A bug in MegaMek.</strong> The <a href="https://github.com/MegaMek/megamek/issues">MegaMek tracker</a>, with the build number and enough detail for us to reproduce it.</li>
    <li><strong>A question about how a Core rule works.</strong> The <a href="https://www.battletech.com/forums/index.php/board,109.0.html">Core Rulebook forum</a>, not our tracker. We're learning these rules alongside everyone else, and we're in no position to hand out rulings.</li>
  </ul>
</div>

---

We've been saying for a while that this one was coming. It arrives Friday, and the faster you break it, the better it gets.

Seyla!

---

*For the latest updates, join our [Discord](https://discord.gg/megamek) and follow along with development.*
