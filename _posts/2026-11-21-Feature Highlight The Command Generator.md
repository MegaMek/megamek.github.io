---
layout: post
title: "Feature Highlight: The Command Generator"
date: 2026-11-21
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
/* Every screenshot opens at full size when clicked */
.corerules-figure a {
  cursor: zoom-in;
}
h2, h3, h4,
.corerules-callout,
.corerules-figure-row,
.corerules-figure {
  clear: both;
}
@media (max-width: 767px) {
  .corerules-figure-row {
    flex-direction: column;
  }
  .corerules-figure-row .corerules-figure {
    flex: none;
    width: 100%;
  }
}
</style>

*By Hammer*

<div class="corerules-callout corerules-fiction">
  <p>The bar on Galatea was called the Last Contract, and half the tables in it held a mercenary unit that didn't exist yet.</p>
  <p>"Medium 'Meks," Wilson said. "Fast enough to get out of trouble. A lance of hovertanks to scout for them. Jump infantry for the dirty work."</p>
  <p>Tomas Brandt, his XO since their AFFS days, turned his glass slowly. "And a name."</p>
  <p>"Wilson's Wildcards."</p>
  <p>Brandt winced. "Every bonding clerk from here to Outreach will file us under Wilson's Hussars. Heaven forbid anyone confuses us with them."</p>
  <p>Wilson looked around the bar for inspiration and found it on the sign scrawled over the back booth. "No Questions Asked."</p>
  <p>"We're naming a mercenary unit after a bar sign?"</p>
  <p>"Half the units in this room are named after something on a bar wall. They just won't admit it."</p>
</div>

In the [2026 State of the Universe](/2026/01/07/2026-State-of-the-Universe.html), I put a new company generator on our roadmap for this year. I'll admit that when I wrote that line, I didn't expect it to turn into one of the biggest pieces of work in 0.51.01. But here we are, and here it is.

## Where We Started

Every time a player starts a new MekHQ campaign, they have an idea in their head. The unit they want to command. The mix of 'Meks, tanks and infantry. The era they want to fight in. They have a sense of what they want this unit to be, and maybe they've already got a name for it. If there's one message we've heard constantly over the years, it's that players love being able to give their unit an identity of its own.

The Company Generator, which Windchild wrote, was a start down that road. For a lot of you, it was the first screen of every campaign you ever played. You'd pick a few options, press a button, and get 'Meks, pilots, officers and money in one go, which beat building a company by hand, one pilot at a time. Over in MegaMek, the RAT Generator could do a lot of this too. But neither one could create the whole unit the way the player often envisioned it.

Like Against the Bot before it, the Company Generator has earned a proper send-off. It got more campaigns off the ground than any of us could count. Windchild, thank you. It served with honor.

But it was showing its age. A Clan Cluster came out in lances. A Combine regiment and a Periphery militia got the same support. And every command, in every era, got the same four trucks. A single lance and a full regiment both started with one Flatbed, one Sherpa, one MASH truck and one recovery vehicle. One player summed it up better than I can: four flatbeds for an entire regiment.

We gave you a quick look at the replacement in [0.51.01 is coming](/2026/10/16/0.51.01-what's-coming.html). This post goes all the way in. The Company Generator is gone, and in its place is the Command Generator. It builds your starting force from the same rules MegaMek uses to build forces for every faction in the game, and it's a real step toward letting you create the unit you had in your head.

---

## Under the Hood

<div class="corerules-callout corerules-fiction">
  <p>Brandt spread a battered AFFS field manual across the table. "Every House builds a command the same way, Commander. They start with what's in the depots. A militia company in the Capellan March gets Hornets, because that's what the factories turned out and what the quartermaster can spare."</p>
  <p>"And then?"</p>
  <p>"Then they decide what it's for. A command lance. A fire lance. Something fast to run down whatever tries to get away." He closed the manual. "Nobody builds a company out of twelve random 'Meks. Not if they want it to come home. Captain Reyes taught me that, the day Okafor's Raven made it out of that Kurita valley."</p>
</div>

The Force Generator has been in MegaMek since 2016, when Neoancient built it along with the RAT Generator. It's probably one of the most underused tools we have. The Command Generator is built on top of it, so it's worth knowing how it works before we go any further.

It's really two parts. There's the code that generates the units, and there's the data it generates them from. Think of it like a kitchen: the code is the cook, and the data is the pantry. The cook gets all the attention, but even the best cook can't make a meal out of an empty pantry. The data decides what you actually get.

On the code side, MegaMek has three tools:

- **The RAT Generator** builds random unit tables from the availability numbers.
- **The Formation Builder** builds lances to match the lance types described in Campaign Operations, such as a Fire Lance, a Pursuit Lance or a Striker Lance.
- **The Force Generator** builds out the TO&E, or more precisely the order of battle, for a whole command, from the commanding officer down to the last trooper.

The data comes in two parts as well:

- **Unit availability.** Every chassis gets an availability from 1 to 10 for each faction and era. Then every model of that chassis gets its own availability from 1 to 10, so a chassis can be common while one of its models is rare. If you've used the RAT Generator, you've seen this data at work. MekHQ uses the same numbers to pick the opponents you face.
- **Organisation.** How each faction structures and names its forces, drawn from the sourcebooks and specific to each era where we can manage it.

Here's what that looks like in practice. These two entries come straight from the 3049 era file in our data, trimmed slightly so they're easier to read. Availability can be set for a whole faction, or for a single command within it.

```xml
<chassis name='Marauder II' unitType='Mek'>
    <availability>MERC.WD:5,MERC:2+</availability>
    <model name='MAD-4A'>
        <availability>MERC:8</availability>
    </model>
    <model name='MAD-5A'>
        <availability>MERC.WD:4+</availability>
    </model>
    <model name='MAD-5B'>
        <availability>MERC.WD:3:3050</availability>
    </model>
    <model name='MAD-5C'>
        <availability>MERC.WD:1:3052</availability>
    </model>
</chassis>
```

`MERC.WD` is Wolf's Dragoons. The Marauder II is a 5 for the Dragoons and only a 2 for mercenaries in general.

So what happens when a faction or command isn't listed? It falls back to its parent. The Dragoons' parent is `MERC`, and the parent of `MERC` is the Inner Sphere as a whole, `IS`. That's why the Dragoons can still roll the MAD-4A even though it only lists `MERC`. In fact it's their most likely variant. The MAD-5A, 5B and 5C list only the Dragoons, so any other mercenary unit works its way up the chain, finds nothing, and never rolls one. Neither does the Draconis Combine, since neither `DC` nor `IS` is on the chassis line at all.

```xml
<chassis name='Hornet' unitType='Mek'>
    <availability>FS:3,FS.CMM:5,FS.DMM:5,FS.CrMM:5,MERC:4,MERC.WD:4,FC:1,Periphery.HR:3+,Periphery.OS:2+</availability>
    <model name='HNT-151'>
        <availability>FS:8,MERC:8,FC:0,Periphery.HR:8,Periphery.OS:8</availability>
    </model>
    <model name='HNT-161'>
        <availability>MERC.WD:6-</availability>
    </model>
    <model name='HNT-171'>
        <availability>FS:8+,MERC:4+:3052,FC:8</availability>
    </model>
</chassis>
```

Across the Federated Suns the Hornet is a 3, but in the Capellan, Draconis and Crucis March Militias (`FS.CMM`, `FS.DMM` and `FS.CrMM`) it's a 5. Any other Federated Suns command falls back to that `FS:3`. The Dragoons get their own HNT-161, and the HNT-171 shows up for mercenaries from 3052.

The markers after a number do the fine tuning. A `+` means the unit is more common in better-equipped forces, a `-` means it's more common in worse-equipped ones, and a year after the rating, like `:3052`, means it only starts appearing that year.

Organisation is the other half. I asked the Force Generator for a Federated Commonwealth Corps 'Mek company in 3050, Veteran, and here's how it put one together. The FedCom borrows its rules from the Federated Suns, and the Federated Suns falls back on our general Inner Sphere rules for anything it doesn't define itself.

First, the Federated Suns rules decide the company's weight, name it and give it a captain:

```xml
<force echelon="%COMPANY%" eschName="Company" ifUnitType="Mek|Tank">
    <name ifRole="command">Command Company</name>
    <name>{alpha} Company</name>
    <co>%CAPTAIN%</co>
    <weightClass>
        <option weight="1">A</option>
        <option weight="4">H</option>
        <option weight="5">M</option>
        <option weight="3">L</option>
    </weightClass>
</force>
```

Ours rolled heavy. The general Inner Sphere rules then decide how a heavy company splits into lances:

```xml
<subforceOption ifWeightClass="H">
    <option weightClass="A,H,M" weight="1">%LANCE%</option>
    <option weightClass="H,H,H" weight="4">%LANCE%</option>
    <option weightClass="H,H,M" weight="2">%LANCE%</option>
</subforceOption>
```

It came up heavy, heavy, medium. Last, the Federated Suns rules give every lance a Leftenant and a lance type from Campaign Operations. The first lance takes the command role, so it's almost always a Command Lance, and the rest roll from a weighted list:

```xml
<force echelon="%LANCE%" eschName="Lance" ifUnitType="Mek">
    <name>{formation} Lance</name>
    <co>%LT%</co>
    <role ifIndex="0">
        <option>+command</option>
    </role>
    <formation ifRole="command">
        <option weight="66">Command</option>
        <!-- plus Assault, Fast Assault and Hunter for heavier lances -->
    </formation>
    <formation ifIndex="0|1" ifRole="!command">
        <option weight="32">Fire</option>
        <!-- plus Battle, Striker/Cavalry, Recon and many more -->
    </formation>
</force>
```

Here's what came out: a Heavy Mek Company under Hauptmann Hymete Ridhwani, who also leads its Command Lance from an Orion. Beside it sit a Fire Lance and a Pursuit Lance, each under its own Leftenant, and every unit has a role: Brawler, Skirmisher or Sniper. Pursuit is one of the rarer picks for a third lance, so that one was a bit of luck. It looks like something out of a sourcebook, and that's exactly the point.

<div class="corerules-figure-row">
  <div class="corerules-figure" style="--ratio: 1.853;">
    <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/formationsetup.png' | relative_url }}">
      <img
        src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/formationsetup.png' | relative_url }}"
        width="1062"
        height="573"
        alt="The Force Generator tab set to the Federated Commonwealth Corps in 3050: a Mek company at Standard (C) equipment and Veteran experience. The composition summary shows seven medium, four heavy and one assault 'Mek"
        loading="lazy"
      />
    </a>
    <p class="corerules-caption">Federated Commonwealth, 3050, one Veteran company.</p>
  </div>
  <div class="corerules-figure" style="--ratio: 0.706;">
    <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/generatedforceexample.png' | relative_url }}">
      <img
        src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/generatedforceexample.png' | relative_url }}"
        width="658"
        height="932"
        alt="The command model for that company: a Heavy Mek Company under Hauptmann Hymete Ridhwani, whose Command Lance holds an Orion, an Ostsol, a Wolverine and a Griffin, with a Fire Lance and a Pursuit Lance each under a Leftenant"
        loading="lazy"
      />
    </a>
    <p class="corerules-caption">Hauptmanns, Leftenants, and a lance for every job.</p>
  </div>
</div>

<div class="corerules-callout">
  <p><strong>Our data is not canon.</strong> It's our best estimate of the information as it's been presented.</p>
</div>

We pull our data from the Master Unit List, from Sarna and from the sourcebooks, and then we apply some educated guesswork where they run out. That's what lets us generate interesting forces at all. But the data is only as good as what we have and what we can mine from it.

That also means some eras have far more data than others. Go to 3025 or 3050 and there's tons of it. Go back to the Age of War, or forward to the ilClan era, and there's a lot less, so keep that in mind when a force looks a little odd. As Catalyst publishes more about each era, we'll keep refining the data, and the forces you get will keep getting better. The pantry is never really finished.

It's not only eras, either. The big factions in the well-documented eras are well covered, while minor and short-lived factions fall back on generic rules, and the faction tooltip tells you so. There are a few gaps we already know about, too. Clan conventional fighters before 3078 don't have enough data, so Clan Wolf in 3060 can't build them yet, and beast and aquatic infantry are thin on the ground. If your faction's force looks wrong, tell us which faction, which year and what you expected. That's exactly the kind of report we can fix.

In my time as the data guy, I did a lot of work improving that data and expanding on what Neoancient had built. I've since handed it off to dgorsman. It's a massive job for one person.

It's also open to a lot of interpretation. So when you select a Cluster and the generator rolls up an entire Cluster, know that there are a lot of hours of research and analysis behind it. There's also a lot of interpretation from whoever put the underlying data together. And this is where I remind people that we're a volunteer project. We do this for fun, and for our love of the game.

<div class="corerules-callout">
  <p><strong>One small ask.</strong> The next time you look at a unit the generator has rolled and think to yourself, "that's kind of cool," and you're on the <a href="https://discord.gg/megamek">Discord</a>, make sure dgorsman knows you appreciate the work that goes into keeping the pantry well stocked.</p>
</div>

## Your Faction, Your Way

The Force Generator doesn't make one force and paint your colors on it. It asks your faction how it organises itself, and builds to match. Most of this release's work on it went into getting that right:

- **Inner Sphere commands** come out in lances, companies and battalions, named the way your faction names them.
- **Clan commands** come out in Points, Stars, Binaries and Trinaries, with warriors drawn from the right Bloodhouses and Enhanced Imaging where it applies.
- **ComStar and the Word of Blake** build in Level IIs, and Word of Blake Shadow Divisions get their Manei Domini implants.
- **Support formations** follow the same naming, so a support lance can come out as "Alfa Lance" and a Clan one as "Able Star".

Clan Clusters also aim for a weight mix now, instead of rolling each Star on its own. A front-line Cluster that's meant to be 40 percent assault, 30 heavy, 20 medium and 10 light lands close to that on average, not wherever the dice felt like that day.

A lot of this went all the way down to the data. A single command file can now describe a whole command and its regiments, so the St. Ives Lancers and all seven of their regiments live in one place. And Clan Goliath Scorpion, which had been split across three faction codes over the years, finally reads as one faction across its whole history.

## Getting the Units Right

Then there's what the generator actually hands you, and a lot of your reports this cycle were about exactly that. Every one of these started as a bug report or a Discord thread:

- **Clan VTOLs and fighters** come in matched pairs, in real Stars of ten, Binaries of twenty and Trinaries of thirty.
- **Clan battle armor and infantry Trinaries** have three Stars, not one squad.
- **Clan fleets** have Stars, Binaries and Trinaries, and Wolf, Jade Falcon and Star Adder call theirs the Naval Reserve.
- **Mercenaries** get a fighter wing when you ask for aerospace, instead of a militia of infantry, tanks and 'Meks.
- **Aerospace fighters** don't offer Assault any more, because it used to build a single fighter. Old presets saved with Assault now roll a full formation at a random weight.
- **Infantry** get a class instead of a weight: foot, motorized, mechanized, jump, beast or aquatic. Your faction's own platoons come first, so a Federated Suns jump battalion gets AFFS jump platoons, not Clan or Kurita ones.
- **Variety.** Ask for another Hunchback when there's already one in the lance, and you'll usually get something else. Duplicates are now less likely to be picked, so you stop getting four copies of the same model.

On the data side, I need to call out dgorsman again, who finished the third and last part of the Clan 'Mek availability update, covering 3067 to 3160. It's checked against the MUL and built on a technology curve, so front-line Clusters get cutting-edge OmniMeks from their own Clan, while the worst-equipped get older designs, often Inner Sphere ones. That's months of careful, unglamorous work, and it's the kind that decides what you actually roll. dgorsman also added generic advanced infantry for mercenaries, the Periphery and pirates, and we fixed the Clan, ComStar and Word of Blake support vehicle numbers along the way. A Clan salvage Star is no longer ten Waylands.

## In MegaMek Too

Everything in this part runs on MegaMek's Force Generator, so even if you never touch MekHQ, you still get it. Open **Create Random Army** in the lobby, and the Force Generator tab builds the same faction-correct formations as an order of battle you can edit. Right-click a formation to re-roll it as something else, or add a lance, company or battalion under it. If you've only ever used the RAT tab, give this one a try. It's been sitting there since 2016, and it's better now than it's ever been.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/thenewforcegen.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/thenewforcegen.png' | relative_url }}"
      width="1892"
      height="1033"
      alt="MegaMek's Create a random army dialog on the Force Generator tab: year, faction, subfaction, unit type, formation, equipment rating, target weight and experience, role filters, transport percentages, a composition summary, a rolled units table and a command model panel on the right"
      loading="lazy"
    />
  </a>
  <p class="corerules-caption">The Force Generator tab in MegaMek's lobby. Same engine, no campaign required.</p>
</div>

The dialog itself got a lot of small fixes:

- It remembers your settings between visits.
- It used to hand every unit waiting to be added to whichever player you'd picked last. Now it asks first, and there's a new **Add to Game** button.
- The unit type menu only offers what your faction can actually field that year. There are no ProtoMeks for Clans that never built them.
- If there isn't enough data for a force, you get a clear "Insufficient Data" message instead of a blank one.
- The role filter boxes for artillery, cargo and engineers can be clicked again.
- Battle armor no longer lands in the assault weight class.
- Gun emplacements can be generated, so your next base assault has guns on the walls.
- There are new Heroic and Legendary skill levels.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/aforceadded.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/aforceadded.png' | relative_url }}"
      width="1043"
      height="423"
      alt="The rolled units table for the Federated Commonwealth company, listing twelve 'Meks from an Orion ON1-K to a Phoenix Hawk PXH-1D with their BV, movement, tech base and unit role, above the Generate, Formation Mix, Add to Game, Export MUL and Clear Force buttons"
      loading="lazy"
    />
  </a>
  <p class="corerules-caption">Twelve 'Meks, one company, and an Add to Game button that sends them to the right player.</p>
</div>

<div class="corerules-figure">
  <video
    width="1920"
    height="1080"
    controls
    preload="metadata"
  >
    <source src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/forcegeninaction.mp4' | relative_url }}#t=0.1" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="corerules-caption">The Force Generator in action in MegaMek.</p>
</div>

---

## Building a Command

<div class="corerules-callout corerules-fiction">
  <p>Wilson pushed a data slate across the table: his bank authorisation, the bonding papers, and a list of names he'd been collecting for years. "Recruiting money. Signing bonuses, first month's pay, and enough left over to make a DropShip captain take us seriously."</p>
  <p>He leaned back. "You know how the Davions put a regiment together, and you know what we can afford. I'm going to let you build out what we've talked about."</p>
  <p>Brandt scrolled through the names. "And if I come back with a regiment?"</p>
  <p>"On this budget?" Wilson snorted. "Then I don't want to know how much of it says Quikscell on the side."</p>
</div>

That's the engine. Now let's put it to work.

When you start a new campaign, the first thing you'll see is a big hazard-yellow button beside Advance Day that reads **Generate Starting Command**. You can't miss it, and that's on purpose. When we watched people start campaigns, they kept walking straight past the old one. It only shows while your campaign has no units and no personnel, so once you've added anything, it's gone.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/newmainscreen.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/newmainscreen.png' | relative_url }}"
      width="1915"
      height="1050"
      alt="A brand new MekHQ campaign, The Phantom, on 1 January 3151 with no funds and no units. At the top, beside Advance Day, is a yellow Generate Starting Command button framed in black and yellow hazard stripes"
      loading="lazy"
    />
  </a>
  <p class="corerules-caption">Zero C-bills, zero units, one very yellow button.</p>
</div>

Press it and you get the Command Designer. It has four pages, and each one has a short guide built in, with steps, an example and the terms it uses. A strip across the top keeps a running count of what you've built so far: combat units, personnel, starting cash and lift.

**Force: what fights.** The controls will be familiar from Random Army, now with Heroic and Legendary experience. Press **Roll**, and each roll adds to your command rather than replacing it, so you can roll a battalion of 'Meks and then put a company of VTOLs on top. Don't like a unit? Click the ring beside it to strike it out. It stays on the list in case you change your mind, and striking out a formation takes every unit in it along with it. You can also open any unit's Technical Readout before you commit to it.

The designer also opens small now. It used to open on whatever your faction's default was, which meant a regiment for the Combine and a whole division for the Federated Suns. That's a lot of 'Meks to pay for in your first month. For a new campaign we recommend three lances or Stars, or two Level IIs, and the page tells you so. Clan players can build one Star at a time.

<div class="corerules-figure-row">
  <div class="corerules-figure" style="--ratio: 1.623;">
    <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/thenewcommandgen.png' | relative_url }}">
      <img
        src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/thenewcommandgen.png' | relative_url }}"
        width="1295"
        height="798"
        alt="The Command Designer on its Force page before anything is rolled: unit type, weight class, formation size, equipment rating, and a note recommending three lances or Stars, or two Level IIs, for a new campaign"
        loading="lazy"
      />
    </a>
    <p class="corerules-caption">The Force page, before the first roll.</p>
  </div>
  <div class="corerules-figure" style="--ratio: 1.405;">
    <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/gennedforcewithcustomunits.png' | relative_url }}">
      <img
        src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/gennedforcewithcustomunits.png' | relative_url }}"
        width="1309"
        height="932"
        alt="The Force page after two rolls: an Alfa Mek Battalion of 28 units, with an Alfa Mek Company of three 'Mek lances and a combat vehicle lance, and an Alfa VTOL Company of three lances. The totals show 26,747 BV and 1,126 tons"
        loading="lazy"
      />
    </a>
    <p class="corerules-caption">A 'Mek battalion, then a VTOL company on top. 28 units, every lance named.</p>
  </div>
</div>

**People: who leads and supports.** This page decides how your officers are picked, how much staff you hire, how names and ranks work, and how much history your command has. The support staff table works out what Campaign Operations says your command needs, as rolled. For the 28-unit battalion above, that's 12 MekTechs, 26 mechanics, 4 doctors and 9 administrators, and you can turn each one up or down. Assistants can be pooled or hired as named people, though a few hundred named astechs will slow MekHQ down, and the page warns you about that.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/peoplepleasers.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/peoplepleasers.png' | relative_url }}"
      width="1284"
      height="935"
      alt="The People page: leadership options, the chain of command taken from the roll, a support staff table showing the need for 12 MekTechs, 26 mechanics, 4 doctors and 9 administrators, assistant pools, a 10 percent medical reserve, and naming, rank and origin options"
      loading="lazy"
    />
  </a>
  <p class="corerules-caption">Twelve MekTechs, 26 mechanics, and a polite warning about astechs.</p>
</div>

**Logistics: what it owns and starts with.** Spare parts, starting cash and an optional loan. More on those further down.

**Review: what happens when you build.** Every step the build will take, in order. You also get a list of things worth a second look, and a check on whether anything changed since you rolled. Nothing touches your campaign until you press **Build Command**.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/finalreview.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/finalreview.png' | relative_url }}"
      width="1290"
      height="936"
      alt="The Review page: ready to build 28 units and about 96 named people, with eight numbered steps from committing the combat force to the starting simulation, and one item worth a second look: no DropShips were asked for, so the command hires its lift"
      loading="lazy"
    />
  </a>
  <p class="corerules-caption">Eight steps, one thing to check, and nothing happens until you say so.</p>
</div>

One thing to know: the designer always rolls for your campaign's own faction. If you want a different force, start your campaign as that faction.

## Ships, Trucks and the People Who Run Them

<div class="corerules-callout corerules-fiction">
  <p>Brandt spent a week following leads.</p>
  <p>The MechWarriors came off Wilson's list, including a Phoenix Hawk pilot named Elizabeth, who wanted a unit whose 'Meks didn't stop to install updates in the middle of a Jade Falcon raid, and Lieutenant Hunter, who said yes the way he said everything, sounding bored. The techs were in a machine shop off the spaceport road, rebuilding an actuator for a unit that had gone bust owing them three months' pay. Hollis and his jump troops were in a boxing gym, working the heavy bags like the bags owed them money, and Mbeki's foot platoon came along because Hollis did. The recovery crew was easy. Recovery crews are always in the bar closest to the salvage yard, and that's where Private Teague, who dug holes for a living, signed on to dig 'Meks out of them instead.</p>
  <p>The DropShip captain took longer. Brandt finally found her in the back booth of a spaceport bar nobody admitted to drinking in, with a Union called the <em>Dumb Luck</em>, two missed payments on it, and no interest in questions.</p>
  <p>"Where to?" she asked.</p>
  <p>"Wherever the contract is."</p>
  <p>She finished her drink. "That'll cost extra."</p>
</div>

This is where the old generator fell down hardest, and it's where I spent most of September: the ships that carry your 'Meks, the trucks that drag them home, and the crews for both.

**DropShips stay, and they're loaded.** The generator used to throw away a DropShip if it carried fighters, which was every bit as frustrating as it sounds. Now it keeps it, sizes your lift to what the whole force needs across every roll, and puts carried units aboard in your TO&E. Troopships and JumpShips are filed as support formations now, too. Before that, Resupply could send two Overlords and a Condor out as a supply run, and you'd get a Convoy Rescue mission for your own transport fleet. If you don't ask for DropShips at all, the Review page flags it and your command hires its lift instead, so nobody gets stranded on their first contract.

**Support vehicles fit the force and the era.** The four fixed trucks are gone. Support vehicles are rolled from the Force Generator like everything else, sized to your force and right for the year. A command in 2450 fields a UTR-588 Recovery Vehicle, a Carter Medical Emergency Response Vehicle and a Randolph Support Vehicle, not the same four trucks every command has had since forever. A battalion that needs a dozen recovery vehicles gets three lances of them under Recovery Operations, and that Recovery Company is filed as a Salvage formation, so your salvage planner can actually use it.

**Crews that make sense.** A recovery vehicle used to get four drivers and four gunners. It now gets one driver and three gunners, and a MASH truck gets one driver and five crew. Support crews also use your faction's ranks, so a Combine recovery vehicle commander is a Gunsho, not a Sergeant. Small thing, but it's the kind of small thing that makes a unit feel like it belongs where it came from.

**Support Teams.** Your techs, doctors and administrators are filed into support formations in your TO&E. They follow your roster and never deploy, and they no longer count toward your command's size, so forty clerks don't turn your regiment into a brigade any more. It's on by default, under Use Support Teams. Techs are then spread across your hangar by the same quick-assign the rest of MekHQ uses.

**LAMs and infantry.** LAM pilots used to be crewed as ordinary 'Mek pilots, and infantry were being handed drivers. Both are fixed.

## Officers and a Little History

<div class="corerules-callout corerules-fiction">
  <p>"Who gets the command lance?" Wilson asked.</p>
  <p>Brandt tapped the roster. "Best pilot in the outfit, which is you. Second best gets the fire lance, and Hunter's already complaining about it. And nobody gets a lance because they bought the drinks."</p>
</div>

Here's an embarrassing one. Some options in the old dialog were saved and then quietly ignored. Seven officer selection options and four starting simulation options, to be exact. You could tick them all you liked, and nothing happened. They all work now. Your best people end up in charge, and your best pilots end up in the leading lances. And if you switch the starting simulation on under People, History, your command arrives with up to ten years of history behind it: marriages, children and experience.

The defaults are what we'd actually recommend, so most players can leave them alone. Illiani went through the generator option by option and told me which ones nobody should ever have to touch, and those are on: best commander, best officers, most skilled pilots to the primary lances, captains for your ships, and a medical reserve. The starting simulation is off until you ask for it.

We also turned down the noise. The simulation used to leave you with a stack of pregnancy and implant announcements on your first morning. One player got seven births in one go. That's gone, and maternity leave is off while the simulation runs, because on the Veteran presets it was leaving 'Meks without pilots and techs before you'd taken a single contract. And commanders' names now match who they are, so no more male Teresas or female Bills.

## Money and Paperwork

<div class="corerules-callout corerules-fiction">
  <p>The loan shark kept an office above a pawn shop and two very large friends by the door. "Starting funds?" he asked.</p>
  <p>"Whatever's left after the DropShip payment," Brandt said.</p>
  <p>"So, nothing. There's a loan option."</p>
  <p>"What's the rate?"</p>
  <p>"Ever hear of usury?"</p>
</div>

Starting cash covers twelve months of running costs, with a floor of 10 million C-bills. If your command costs 2 million C-bills a month, you start with 24 million. It's measured when you build, so it always matches the command you actually got.

You can also take a loan for the same amount again, over two years at 15 percent. The designer warns you in bold that it can make your early game very hard, and it means it. If you've read [Illiani's economics post](/2026/11/07/Feature-Highlight-Balancing-Gameplay-and-Economics.html), you know money is tighter in 0.51.01 than it's ever been. Think hard before you sign.

<div class="corerules-figure">
  <a href="{{ '/assets/images/posts/2026/2026-11-21-command-generator/logiisqueenofthebattlefield.png' | relative_url }}">
    <img
      src="{{ '/assets/images/posts/2026/2026-11-21-command-generator/logiisqueenofthebattlefield.png' | relative_url }}"
      width="1286"
      height="934"
      alt="The Logistics page: spare part restock percentages for fifteen categories on the left, including Armor and Bomb, and on the right twelve months of starting cash built from salaries, maintenance, overhead, food and housing, with a 10,000,000 C-bill minimum and a box for Double Starting Cash with a Loan"
      loading="lazy"
    />
  </a>
  <p class="corerules-caption">Amateurs talk tactics. Professionals talk restock percentages.</p>
</div>

Spare parts are your autologistics percentages, shared with Campaign Options, and you can now type the numbers in directly. Armor Kits and Bombs are on the list now. They'd gone missing because the list lived in three places and only two of them had been updated. Software is like that sometimes.

When you build, your Warehouse, Finances and Command Center tabs all show the finished command straight away, where before the Warehouse could sit empty until you clicked something. And contracts are waiting for you the moment the generator finishes, so you can go straight from building a command to finding it work.

---

## Wrapping Up

<div class="corerules-callout corerules-fiction">
  <p>Brandt set the roster down in front of Wilson. A company of medium 'Meks, a hovertank lance, a jump platoon, a recovery lance, eight techs, two doctors, the <em>Dumb Luck</em>, and an administrator named Marcus, formerly of Clan Smoke Jaguar, who already hated them both.</p>
  <p>Wilson read it twice. "That's the unit I had in my head."</p>
  <p>"I know," Brandt said. "You wouldn't stop talking about it."</p>
  <p>Wilson folded the roster into his jacket. "Good. Now we need a contract."</p>
  <p>"Any preference?" Brandt asked. "Garrison duty? Pirate hunting? A nice quiet raid?"</p>
  <p>"I don't care what it is." He was grinning as he headed for the door. "No job too small, no fee too high."</p>
</div>

Wilson found his contract, and Illiani has already told that story in [The Contract Overhaul Project](/2026/10/20/Feature-Highlight-The-Contract-Overhaul-Project.html). Let's just say he should have read the header. Go find your new command some work. It's got a DropShip to pay off.

---

## Before You Go

Something like this is never one person's work, and this one stands on foundations that are ten years old. Neoancient built the RAT Generator and the Force Generator back in 2016, and none of this exists without that. Windchild's Company Generator got a generation of MekHQ campaigns off the ground and showed us what a quick start could be. I built on that engine and wrote the first version of the Command Generator. Then Illiani took it apart and rebuilt the designer from the ground up, twice, based on your feedback. The four-page version you'll use is theirs. dgorsman's availability data decides what you actually roll.

And to the test pilots who built more starting commands this cycle than most of us will ever play, and to everyone who sent a bug report saying "this doesn't look like a Clan Cluster", thank you. You're the reason it does now.

If something goes wrong, use **Report a Bug** and attach your files.

*If you've got questions or feedback, come find us on [Discord](https://discord.gg/megamek).*

Keep your lances full and your logistics officers happy!
