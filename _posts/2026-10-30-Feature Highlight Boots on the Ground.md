---
layout: post
title: "Feature Highlight: Boots on the Ground"
date: 2026-10-30
---

<style>
/*
 * Figures use the same frame as the Core Rules posts: 8px radius and an
 * accent-coloured border. Colours come from the site theme variables so
 * light and dark both work.
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
/* The opening story: the same frame, set as a short piece of fiction */
.corerules-fiction p {
  font-style: italic;
  margin-bottom: 0.5rem;
}
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
  aspect-ratio: var(--pair-ratio, 2054 / 1349);
  height: auto;
  object-fit: contain;
  background-color: var(--card-color);
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
.corerules-figure img,
.corerules-figure video {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
}
/* A step-through viewer for a sequence of screenshots. Each slide shows the
   whole image and its caption; it moves only when the reader clicks or swipes. */
.corerules-steps {
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-steps-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.corerules-steps-track::-webkit-scrollbar {
  display: none;
}
.corerules-steps .corerules-figure {
  flex: 0 0 100%;
  scroll-snap-align: start;
  margin: 0;
}
.corerules-steps .corerules-figure img {
  aspect-ratio: var(--steps-ratio, 16 / 10);
  object-fit: contain;
  background-color: var(--card-color);
}
.corerules-steps-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.6rem;
}
.corerules-steps-controls button {
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  background-color: var(--card-color);
  color: inherit;
  padding: 0.2rem 0.9rem;
  cursor: pointer;
}
.corerules-steps-controls button:disabled {
  opacity: 0.4;
  cursor: default;
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

If you came here for Illiani and a deep dive into MekHQ economics, so did I. Illiani's post went out on time, by HPG, and ComStar has it sitting in the queue behind a Precentor's birthday greetings. Until the transmission fee clears, you're stuck with me and the infantry. Infantry are cheaper than economists anyway. Ask any merc commander.

<div class="corerules-callout corerules-fiction">
  <p>The red light came on in Karnov Three, and Sergeant Pike stood up in the middle of the troop bay like he'd been waiting all week for it.</p>
  <p>"All right, listen up. Briefing's short because the ride's short." He slapped the bulkhead. "Hollis and his jump troops drop on the flak guns. We land on the vehicle pad and take the fab hall."</p>
</div>

## What's New
Infantry have a reputation at the tabletop. There are a lot of rules, they're spread across Total Warfare, Tactical Operations, the TechManual, and years of errata, and many of them are abstract enough that tracking them by hand slows the whole game down. MegaMek does that bookkeeping for you, which is a big part of why infantry are one of the most popular units in MegaMek. Players are always asking for more from them.

That same complexity makes infantry one of the hardest things in BattleTech to get right in code, and we've been getting a steady stream of questions and bug reports to prove it. So for 0.51.01 we went back through infantry with a fine-tooth comb. We filled in rules that were missing and fixed ones we had wrong, from how they fight inside buildings to what they carry, what they breathe, and how they get off a VTOL. Here's what's new, and why it makes your platoons more interesting to play.

## Infantry Actions in Buildings

<div class="corerules-callout corerules-fiction">
  <p>"Kurita's got flak emplacements ringing that pad, with a platoon dug into each one," Pike said. "Hollis lands on top of them and clears them out room by room. The gun crews fight too, so don't expect them to sit it out."</p>
</div>

Infantry vs. infantry fighting inside buildings has been in MegaMek for a couple of releases, but the old version was rough around the edges. We've reworked how it's presented and gone back to Tactical Operations: Advanced Rules (pp. 169-174) to make sure the implementation is full and accurate.

The attacker declares an action against a building, and the defender answers with the infantry inside and part of the building's crew. Yes, that means the gun crews get a say. Each building gets one roll in the End Phase, and the report now tells each round as a short narrative with linked unit names, then lists casualties for each unit, so you can actually follow what happened.

<div class="corerules-steps" style="--steps-ratio: 1045 / 865;">
  <div class="corerules-steps-track">
    <div class="corerules-figure">
      <img
        src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/infantry_action_1_declare.png' | relative_url }}"
        alt="A dialog titled Infantry inside an enemy building, asking whether to declare an infantry action against the Light Shredder Gun Emplacement the platoon is in"
        loading="lazy"
      />
      <p class="corerules-caption">Step 1. Your platoon is inside an enemy gun emplacement, and MegaMek asks whether you want to start something.</p>
    </div>
    <div class="corerules-figure">
      <img
        src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/infantry_action_2_attackers.png' | relative_url }}"
        alt="The attack dialog: one platoon checked as the attacker at 33.75 Marine Points, counted as 34, against a crew worth up to 0.5"
        loading="lazy"
      />
      <p class="corerules-caption">Step 2. Pick who goes in. This platoon brings 33.75 Marine Points, counted as 34.</p>
    </div>
    <div class="corerules-figure">
      <img
        src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/infantry_action_3_defender_asked.png' | relative_url }}"
        alt="A dialog titled Facility under attack, telling the defender that if nothing is committed to its defence, the building falls"
        loading="lazy"
      />
      <p class="corerules-caption">Step 3. The defender gets asked. Commit nothing, and the building falls.</p>
    </div>
    <div class="corerules-figure">
      <img
        src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/infantry_action_4_defenders.png' | relative_url }}"
        alt="The defend dialog: committing the one living crew member, worth 0.5 Marine Points, counted as 1, against the attackers 34"
        loading="lazy"
      />
      <p class="corerules-caption">Step 4. The defender commits its only crewman. Half a Marine Point against 34.</p>
    </div>
  </div>
  <div class="corerules-steps-controls">
    <button type="button" class="corerules-steps-previous" aria-label="Previous step">&#10094;</button>
    <span class="corerules-steps-counter">1 of 4</span>
    <button type="button" class="corerules-steps-next" aria-label="Next step">&#10095;</button>
  </div>
</div>

Strength comes from the Marine Points tables as printed, and heads aren't everything. Regular infantry score 0.75 per trooper, Elementals score 2, and armored troopers get a bonus. Battle armor picks up modifiers for weight class, intact armor, burst-fire and flame weapons, and claws, drills, and the like. The building modifier helps the defender only.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/infantry_action_end_phase_report.png' | relative_url }}"
    alt="End Phase report for two infantry actions in two flak gun emplacements. Each tells the fight as a short story with the units linked, then gives the odds, the roll on the Infantry vs. Infantry Action Table, and each side's casualties by unit with troopers left"
  />
  <p class="corerules-caption">Two fights in two emplacements, both still going. The story first, then the odds, the roll, and who lost how many.</p>
</div>

Once infantry commit to an action, they hold their ground. They don't move, target, or make attacks elsewhere. The only way out is to withdraw, and withdrawing costs you one last exchange at half damage. I'll be upfront: the book doesn't say whether engaged infantry can move, so this is our interpretation. It sits behind an option, Infantry actions: committed units hold their ground, under Advanced Combat > Infantry Actions. It's on by default, so you can turn it off if your table reads it differently. There's also a house-rule option that lets defenders withdraw.

<div class="corerules-figure-row">
  <div class="corerules-figure" style="flex-grow: 1.706;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/infantry_action_withdraw_attacker.png' | relative_url }}"
      width="1170"
      height="686"
      alt="The attacker's Continue or withdraw dialog: two platoons already in the action at 65 Marine Points, with a box to withdraw the whole force this turn and a note that withdrawing takes one more roll at half damage"
    />
    <p class="corerules-caption">Attacking: reinforce, carry on, or tick the box and pull out at half damage.</p>
  </div>
  <div class="corerules-figure" style="flex-grow: 1.737;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/infantry_action_withdraw_defender.png' | relative_url }}"
      width="1468"
      height="845"
      alt="The defender's dialog: a platoon already in the action, a crew counter, and a house-rule box to withdraw the defending infantry this turn, which hands the building to the attackers"
    />
    <p class="corerules-caption">Defending: commit crew, or, with the house rule on, withdraw and give up the building.</p>
  </div>
</div>

Units wiped out in an infantry action used to show up as "pilot error" in the end-of-game summary. The kill now goes to the other side, where it belongs.

The bots fight these too. Princess and CASPAR now declare infantry actions the way a player does. They'll start one when the odds look good, reinforce one they're winning, defend their own buildings with the infantry inside and part of the crew, and withdraw when it turns against them. How eager they are depends on their behavior settings. Like everything else Princess does, she won't always make the call you would.

A few honest limits. A captured building currently just sits there. Two attackers who are hostile to each other in the same building aren't modelled. Manei Domini score like regular troopers, because the unit data can't tell them apart yet.

## When the Building Becomes the Target

<div class="corerules-callout corerules-fiction">
  <p>"And the fab hall?" Lindqvist asked. "What are we walking into?"</p>
  <p>"Medium construction. Walls eat most of what a 'Mek throws at you."</p>
  <p>"How much is most?" Teague asked.</p>
  <p>"Depends on the gun. And before you ask, there's a basement. Small. Nothing bigger than a man fits down there."</p>
  <p>"So, me."</p>
  <p>"So, you, Teague."</p>
</div>

"How much is most?" Teague asked, and now there's a real answer. When a building is attacked, the type of building sets the share of the attack that reaches the infantry inside (TW p. 172), and every platoon in the building takes that full share. The share is converted using the attacking weapon's own damage, not a flat table. A large pulse laser into a medium building kills three troopers. An AC/20, for all its noise, kills one.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/building_attack_damage_to_infantry.png' | relative_url }}"
    alt="Round report: a BattleMaster PPC hits an occupied medium building. The building absorbs 10 points, 5 are passed to the platoon inside, which loses one trooper and has 27 left"
  />
  <p class="corerules-caption">A PPC into an occupied medium building. Five points carry through, and the platoon inside loses one trooper.</p>
</div>

Damage from conventional infantry weapons isn't reduced by the building, burst-fire weapons count as direct fire, and mechanized infantry take double from non-infantry weapons. Gun emplacements and fortresses scale the attack down first. Only a deliberate attack on the building reaches the people in it. A shot the building blocks as cover doesn't.

Infernos that hit a building now burn the infantry inside at the building's share, and only on the level they struck. A hardened building keeps them out entirely.

And Teague's basement is real. A roll of 9 on the Basements Table now gives you a small basement that only infantry can enter. Before this, MegaMek treated anything below ground as water, which made for some very confused infantry.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/small_basement.png' | relative_url }}"
    alt="Hex tooltip for a medium building reading Basement: Small, with an infantry platoon inside at elevation -1"
  />
  <p class="corerules-caption">A small basement, and a platoon already down in it at elevation -1.</p>
</div>

## Getting the Weapons Right

<div class="corerules-callout corerules-fiction">
  <p>"Kade, Hollis. One's loaded. Jump platoon, SRMs are Infernos, declared at the depot."</p>
  <p>Teague leaned toward Pike. "Infernos. Those the same as our grenades?"</p>
  <p>"No. The grenades are Incendiary now. They burn people. You throw one at a tank, the tank laughs at you."</p>
  <p>"Says who?"</p>
  <p>"Says the errata, Teague. Read a book."</p>
  <p>The pilot cut across the net. "Kurita's got LRM carriers in the valley. If they throw Swarms, they'll go for the big stuff first."</p>
  <p>"And if they miss?" Teague asked.</p>
  <p>"Then they go looking for the nearest platoon," Pike said, "and that platoon eats every last missile. So don't be the nearest platoon."</p>
</div>

A big chunk of this release is us going back to the TechManual and its errata and fixing what we had wrong.

Incendiary, not Inferno. Pike has it right. Following the TechManual errata, 17 infantry flame weapons have been renamed from "Inferno" to "Incendiary." They were never Inferno munitions, and the old name had players expecting them to cook vehicle crews. Against vehicles they do damage, not heat, and the log tells you why. Old unit files and saves still load under the old names.

Infernos are a choice you make before the drop. Any SRM platoon now picks Inferno or Standard under Configure > Equipment > Carried Munitions, and that's what it has for the whole battle. Inferno fires half the platoon's Damage Value in missiles. The separate Inferno SRM launchers are gone, since the errata deletes them, so the Elephant beast infantry now mounts the plain two-shot launcher and gets a bump in damage and BV.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/inferno_carried_munitions.png' | relative_url }}"
    alt="Configure Unit, Equipment tab for a jump SRM platoon, with Carried Munitions set to Inferno"
  />
  <p class="corerules-caption">Hollis's jump platoon, set to Inferno before the drop. That's what it fights with all battle.</p>
</div>

Heavy Burst. A platoon whose primary weapon is over the damage cap gets Heavy Burst: extra dice against conventional infantry and a to-hit bonus at point blank range. The old code had half of that rule keyed to the wrong unit. It's fixed, and the damage report now tags it, so you can see what it added.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/heavy_burst_report.png' | relative_url }}"
    alt="Damage report: two laser rifle platoons hit enemy infantry, tagged +6 Heavy Burst and +3 Heavy Burst, each followed by a line saying the caustic atmosphere adds 1 damage"
  />
  <p class="corerules-caption">Heavy Burst, tagged on the line: +6 on the first volley, +3 on the second. And that caustic air adds a point of its own.</p>
</div>

Swarm missiles. The Karnov pilot's warning is the rule. A Swarm volley that hits conventional infantry stops there, because the platoon absorbs every missile. When leftover missiles look for a new target, every unit in an adjacent hex is now a candidate, not just one per hex.

Flame damage. Battle armor with pain shunts now halves flame damage like conventional infantry. Heavy and vehicle flamers get the proper halving against mechanized infantry and inside buildings. Fire-Resistant battle armor now ignores the heavy flamer too.

The data. We corrected 67 infantry weapons against the TechManual tables, registered two that were missing, and added 15 light machine guns from Shrapnel. Needlers, stunners, and dart guns also stop reporting damage they can't actually do to armor. Fair warning: the BV of some infantry forces will shift.

## Getting On and Off

<div class="corerules-callout corerules-fiction">
  <p>"Kade, Mbeki. If that pad's hot, my people can make the drop."</p>
  <p>"You can make a thirty meter fall, Sergeant. Once. Hollis has jump packs. You have feet. You go when they land."</p>
  <p>"Voss, how's the ride?"</p>
  <p>Voss and his battle armor squad were clamped to the hull of Lieutenant Hunter's BattleMaster. "Bumpy. No jump jets on these suits, so if anybody grabs onto a VTOL and it climbs, we're coming off it the hard way."</p>
</div>

Mbeki wanted to make that drop, and Kade was right to stop him. Under the errata, only infantry with jump or VTOL movement can leave a VTOL or WiGE that hasn't landed. Foot troops stay aboard until it sets down. Jump troops over a building land on the roof and count as having jumped.

Voss's worry is real too. Battle armor shaken off an airborne VTOL or WiGE now takes damage per trooper for every level it falls. Off a ground vehicle it's a point per trooper, and off a jumping 'Mek it's a point per trooper for every jump MP used. Jump-capable suits come off an airborne carrier without damage, but they can't move or shoot that turn.

VTOL beast infantry can now fly over deep water, and an airborne beast platoon spends movement just to hold its position.

## Bad Air and Personal Gear

<div class="corerules-callout corerules-fiction">
  <p>"Valley air's caustic," Pike said. "XCT seals stay on the whole time. Anybody pops a mask down there gets to find out what their lungs taste like."</p>
  <p>"Sarge," Private Teague said, "I dig holes for a living. My lungs already taste like dirt."</p>
  <p>"Then you'll hardly notice the difference."</p>
  <p>"Hunter," Kade said over the net, "if you punch out down there, keep that sidearm holstered. Kurita doesn't shoot pilots who don't shoot first."</p>
  <p>"Noted," Hunter said, sounding bored.</p>
</div>

The valley's caustic air comes from the new Tainted and Toxic Atmospheres rules. Infantry need XCT training and the right gear to take the field at all in tainted or toxic air, which is why Pike was so particular about those seals.

<div class="corerules-figure-row">
  <div class="corerules-figure" style="flex-grow: 0.651;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/planetary_conditions_caustic_taint.png' | relative_url }}"
      width="510"
      height="784"
      alt="Planetary Conditions dialog with the Atmospheric Taint list open on Caustic (Tainted); the other choices are Breathable, Radiological/Poisonous and Flammable, each Tainted or Toxic"
    />
    <p class="corerules-caption">Pick the air in Planetary Conditions. Caustic (Tainted) for Pike's valley.</p>
  </div>
  <div class="corerules-figure" style="flex-grow: 1.303;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/planetary_conditions_overlay.png' | relative_url }}"
      width="400"
      height="307"
      alt="The in-game Planetary Conditions overlay, listing Atmospheric Taint: Caustic (Tainted)"
    />
    <p class="corerules-caption">In the game, Ctrl+P shows it on the map.</p>
  </div>
</div>

Hunter has some new protection too. Crews can now wear personal armor kits that keep protecting them after they eject, whether that's a space suit, a snowsuit, an environment suit, or a MechWarrior combat suit for toxic air and heat. Ejected and dismounted crews also keep their own sidearm instead of picking up a generic rifle. Kade's advice still stands: Princess only respects pilots who don't shoot at her.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/configure_pilots_kit_and_sidearm.png' | relative_url }}"
    alt="Configure Unit, Pilot tab for the BattleMaster Broadside: Armor Kit set to MekWarrior Kit (Basic), Sidearm set to a laser pistol, and a Small Arms skill of 5"
  />
  <p class="corerules-caption">Hunter's kit for the drop: a MekWarrior Kit, a laser pistol, and a Small Arms skill to use it with.</p>
</div>

## In Your Campaign
If you play MekHQ, a lot of this follows you into your campaign.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-30-boots-on-the-ground/mekhq_issue_kits.png' | relative_url }}"
    alt="The MekHQ Issue Kits dialog: MekWarrior Kit Basic, Clan and Advanced, each with stock, price and tags for hot, tainted and toxic air, and a roster below with each person's current kit"
  />
  <p class="corerules-caption">Issue Kits in MekHQ. Kits come out of stores, a shortfall is ordered, and the tags say which ones handle hot, tainted or toxic air.</p>
</div>

- Disposable infantry weapons are tracked trooper by trooper. You can buy them in bulk, with one successful roll filling a whole platoon's order, and reloads draw from the warehouse first.
- Armor kits are real parts, priced by MegaMek. Swapping them is a refit, and infantry can quick-swap theirs.
- Refits that rearm a platoon now buy proper infantry weapons instead of leaving generic ones behind.
- A new campaign option lets your techs and mechanics look after conventional infantry instead of the infantry doing it themselves.
- Dismounted crews fight using their best infantry weapon skill.
- Survival gear: infantry were deploying without it. That's fixed.
- Battle armor suits now belong to the trooper wearing them. When a suit is lost, the trooper inside is the casualty, not some random member of the squad. Refits keep each trooper's suit, and destroyed suits can be replaced again.

## Wrapping Up

<div class="corerules-callout corerules-fiction">
  <p>"Two minutes," the pilot called.</p>
  <p>The Karnov bucked as something on the ground found its range. Pike grabbed a strap and didn't even look up.</p>
  <p>"All right, people. Let's go take a building."</p>
</div>

Most of this isn't flashy. It's us going back to rules that have been in the books for years and making MegaMek play them the way they're written. Some games you've played before will come out differently now, and that's intended.

I'll be straight with you, though. The infantry rules are huge, and I have no doubt we've still missed things. There will be more questions and more clarifications, and we'll keep working through them. If something doesn't match the book, use Report a Bug, tell us the rule and the page, and attach your files.

We also don't know yet what the Core Rules will mean for infantry. As we covered in [BattleTech Core Rules and the Old Ones](/announcements/development/2026/07/30/BattleTech-Core-Rules-and-the-Old-Ones.html), infantry is one of the areas Catalyst's compatibility work is focused on, and we'll follow wherever that lands. For now, this release is our version of the Marian Reforms. The Roman kind, not the Hegemony.

Next week, assuming ComStar lets go of it, Illiani's post finally arrives with the economic changes coming to MekHQ in 0.51.01. Fair warning to anyone whose mercenary company is richer than the Federated Suns: your accountants want a word. And all those platoons you just dropped on a factory? Somebody has to pay them.

Keep your seals on and your flamers fueled!

<script>
// Step-through viewers. The buttons keep their own slide index, so quick clicks
// never read a half-finished scroll; a swipe syncs the index once it settles.
document.querySelectorAll('.corerules-steps').forEach((viewer) => {
  const track = viewer.querySelector('.corerules-steps-track');
  const slideCount = track.children.length;
  const previousButton = viewer.querySelector('.corerules-steps-previous');
  const nextButton = viewer.querySelector('.corerules-steps-next');
  const counter = viewer.querySelector('.corerules-steps-counter');
  let currentIndex = 0;
  let settleTimer = null;
  const showIndex = () => {
    counter.textContent = (currentIndex + 1) + ' of ' + slideCount;
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slideCount - 1;
  };
  const goTo = (index) => {
    currentIndex = Math.max(0, Math.min(slideCount - 1, index));
    track.scrollTo({ left: currentIndex * track.clientWidth });
    showIndex();
  };
  previousButton.addEventListener('click', () => goTo(currentIndex - 1));
  nextButton.addEventListener('click', () => goTo(currentIndex + 1));
  track.addEventListener('scroll', () => {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => {
      currentIndex = Math.round(track.scrollLeft / track.clientWidth);
      showIndex();
    }, 150);
  }, { passive: true });
  window.addEventListener('resize', () => goTo(currentIndex));
  showIndex();
});
</script>
