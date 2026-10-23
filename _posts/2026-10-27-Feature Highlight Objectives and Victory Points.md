---
layout: post
title: "Feature Highlight: Objectives and Victory Points"
date: 2026-10-27
---

<style>
/*
 * Shared visual language from the Core Rules, 0.51.01 and Contract Overhaul
 * posts. Every box and figure uses the same frame: card background, 8px
 * radius, 4px accent bar on the left. Colours come from the site theme
 * variables so light and dark both work; the warning red and the hazard
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
/* Something every player hits - nobody skims past this */
.corerules-callout.corerules-warning {
  border-left-color: #d32f2f;
  border-top: 1px solid #d32f2f;
  border-right: 1px solid #d32f2f;
  border-bottom: 1px solid #d32f2f;
}
.corerules-callout.corerules-warning h3 {
  color: #d32f2f;
}
/* Hazard tape for the system we're openly calling alpha */
.corerules-callout.corerules-caution {
  position: relative;
  overflow: hidden;
  border-left-color: #f2b705;
  border-top: 1px solid #f2b705;
  border-right: 1px solid #f2b705;
  border-bottom: 1px solid #f2b705;
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
.corerules-figure img,
.corerules-figure video {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
}
/* Scheme tabs: one tab per scoring scheme, the dialog screenshot beside its example. The panel
   uses the callout frame; side by side on wide screens, stacked below that. Screenshots never
   scale above their own size, so the dialog text stays sharp. */
.scheme-tabs {
  max-width: 1100px;
  margin: 1.75rem auto;
}
.scheme-tabs > .nav-tabs {
  border-bottom: 2px solid var(--accent-color);
  gap: 0.25rem;
}
/* The tabs and variant buttons are lists; the site puts a crosshair icon before every list item */
.scheme-tabs .nav-item::before {
  content: none;
}
.scheme-tabs > .nav-tabs .nav-link {
  color: inherit;
  border: 1px solid transparent;
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0.5rem 0.9rem;
}
.scheme-tabs > .nav-tabs .nav-link:hover {
  border-color: var(--accent-color);
}
.scheme-tabs > .nav-tabs .nav-link.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--background-color);
}
.scheme-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem 1.75rem;
  align-items: start;
  background-color: var(--card-color);
  border-left: 4px solid var(--accent-color);
  border-radius: 0 0 8px 8px;
  padding: 1.25rem 1.5rem;
}
@media (min-width: 1100px) {
  .scheme-panel {
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  }
}
.scheme-shot img {
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
}
.scheme-variants {
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.scheme-variants .nav-link {
  color: inherit;
  border: 1px solid var(--accent-color);
  border-radius: 999px;
  padding: 0.25rem 0.85rem;
  font-size: 0.85rem;
}
.scheme-variants .nav-link.active {
  background-color: var(--accent-color);
  color: var(--background-color);
}
.scheme-text h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
/* The Scan tab walks through a scan: the rule on top, then one step at a time, each step's picture beside
   its own text */
.scheme-panel-steps {
  grid-template-columns: minmax(0, 1fr) !important;
}
.scheme-panel-steps > .scheme-variants {
  justify-content: flex-start;
  margin-top: 0;
}
.scan-step {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem 1.75rem;
  align-items: start;
}
@media (min-width: 1100px) {
  .scan-step {
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  }
}
.scan-step h4 {
  margin-top: 0;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
/* Each scheme's line of story: set apart from the rules text by the same hazard-yellow edge as the opening
   story, and attributed, so it reads as someone on the battlefield talking */
/* the site styles every blockquote as a rounded FAQ box; these are a plain line with an edge */
.scheme-quote {
  margin: 0 0 1rem;
  padding: 0.1rem 0 0.1rem 0.9rem;
  border: 0;
  border-left: 3px solid #f2b705;
  border-radius: 0;
  background-color: transparent;
}
.scheme-quote p {
  margin-bottom: 0.3rem;
  font-style: italic;
}
.scheme-quote footer {
  font-size: 0.85em;
  opacity: 0.8;
}
.scheme-text .scheme-aside {
  font-size: 0.9em;
  font-style: italic;
  opacity: 0.85;
}
.scheme-text p:last-child {
  margin-bottom: 0;
}
/* Settings tables: the callout frame (card background, accent edge), a ruled header and padded,
   divided rows, so each setting reads as its own line. They scroll sideways on a narrow screen. */
.post-content table {
  width: 100%;
  max-width: 1100px;
  margin: 1.25rem auto 1.75rem;
  border-collapse: separate;
  border-spacing: 0;
  background-color: var(--card-color);
  border-left: 4px solid var(--accent-color);
  border-radius: 8px;
  overflow: hidden;
}
.post-content th,
.post-content td {
  padding: 0.65rem 1rem;
  text-align: left;
  vertical-align: top;
  line-height: 1.55;
}
.post-content th {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 2px solid var(--accent-color);
}
.post-content tbody tr + tr td {
  border-top: 1px solid rgba(128, 128, 128, 0.35);
}
.post-content td:first-child {
  font-weight: 700;
  min-width: 11rem;
}
@media (max-width: 700px) {
  .post-content table {
    display: block;
    overflow-x: auto;
  }
}
/* A break before each Step of the walkthrough: room above, a faint rule across, and a short strip of the
   Alpha box's hazard tape on the rule as the "new step" marker */
.post-content h3[id^="step-"] {
  position: relative;
  margin-top: 3.5rem;
  padding-top: 1.75rem;
  margin-bottom: 1rem;
}
.post-content h3[id^="step-"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--accent-color);
  opacity: 0.35;
}
.post-content h3[id^="step-"]::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  width: 96px;
  height: 10px;
  transform: translateX(-50%);
  border-radius: 2px;
  background-image: repeating-linear-gradient(45deg, #f2b705 0, #f2b705 8px, #1a1a1a 8px, #1a1a1a 16px);
}
/* A screenshot on the left with its text on the right; stacks on narrow screens */
.corerules-split {
  display: flex;
  gap: 1.75rem;
  align-items: flex-start;
  max-width: 1100px;
  margin: 1.75rem auto;
}
.corerules-split .corerules-figure {
  flex: 0 0 40%;
  margin: 0;
}
.corerules-split-text {
  flex: 1 1 0;
  min-width: 0;
}
@media (max-width: 800px) {
  .corerules-split {
    flex-direction: column;
  }
  .corerules-split .corerules-figure {
    flex-basis: auto;
    max-width: 460px;
  }
}
.corerules-caption {
  text-align: center;
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.6rem;
  margin-bottom: 0;
}
</style>

<!--
  DRAFT NOTES (delete before publishing)
  - Every figure now has its file. Still to do: retake dialogs/5_capture.png once the Capture
    description fix (MM #9342) is in.
  - Optional extras are marked OPTIONAL SHOT in the comments (Defend video, decoy, roadmap).
  - New media goes in assets/images/posts/2026/2026-10-27-objectives-and-victory-points/
-->

*By Hammer*

<div class="corerules-callout corerules-fiction">
  <p>"Raven One, Bravo Six. Sitrep on that warehouse."</p>
  <p>Static, then Sergeant Okafor, thin through the jamming. "Six, Raven One. Reading it now. Supplies, like we expected, hundreds of crates. But that's not all of it. There are 'Meks in there, ma'am. Gantries, a dozen chassis half stripped. They're refitting and repairing. That's no supply dump. It's a refit yard."</p>
  <p>Captain Reyes keyed the company net. "All Bravo, you heard that. This stopped being a supply raid thirty seconds ago. Plan's changed, people. Improvise, adapt, overcome. Kurita can't let that reading leave this valley. The jamming's too thick to send it, so it goes home in Okafor's Raven or not at all, and every gun they have is about to turn on him."</p>
  <p>On her display, four red icons had climbed onto the ridge above the river crossing the moment Okafor's sensors lit up, and stopped dead: a full Kurita lance, sitting right across his only way home. "Raven One, hold your position. Once that ridge is ours, you've got cover until you're clear. Nobody gets left behind."</p>
  <p>"Raven One copies. Holding for your mark."</p>
  <p>"They're not even firing, Captain," Lieutenant Hale said.</p>
  <p>"They don't need to. They're a cork in a bottle, and every second they sit up there, that ridge gets a little more theirs." She looked past the ridge to the yard itself. Behind it, a cargo DropShip was already spooling up to haul out whatever Kurita could load in time. Four minutes, maybe less. "They want that yard kept secret. Fine. We make sure there's nothing left worth hiding."</p>
  <p>"Orders?"</p>
  <p>"Fire and Battle Lances, advance on the ridge. Push that lance off it and cover Raven's withdrawal. Command Lance, on me. We're going into the yard. Wreck every gantry and every chassis we can reach. Sergeant Voss, your battle armor is off standby. Get inside those halls and finish what we can't reach. Every second we've got anyone inside that wire, their grip on it slips." She finally looked up from the display. "Let's go earn it."</p>
</div>

## The Short Version

For most of MegaMek's history, a game ended one way: somebody ran out of units. 0.51.01 starts to add objective-based play. You can place flags on the board, score victory points for holding them, scanning them, or taking them from the enemy, and let the points decide who won. And yes, you can mix them with the existing victory conditions. This post covers where victory conditions came from, how to set up and play an objectives game in 0.51.01, and what we're building next.

<div class="corerules-callout corerules-caution">
  <h3>Alpha</h3>
  <p>Objectives ship in 0.51.01 as an alpha. They're in active development, so expect rough edges, and expect things to change between releases. We're aiming to have the full set finished for 0.51.03 next spring.</p>
  <p>Until then, your feedback is what polishes it. Play it, push it, and tell us what feels wrong as well as what breaks. Report a Bug builds a bundle with the objective log lines we need, and Discord is the place for everything else.</p>
  <p>It's also why the deeper MekHQ link is still to come. MekHQ can only build on objectives once they're finished in MegaMek, so every game you play now brings that day closer.</p>
</div>

## Where We Started

MegaMek has had a victory phase since 2002. For a long time, though, "victory" meant one thing: the last side with units on the board wins.

Over the years we added more ways to end a game, each one a switch in Game Options:

- **Destroy enemy BV** (2006): win once you've destroyed a set percentage of the enemy's Battle Value.
- **Outnumber enemy** (2006): win once your surviving BV is a set multiple of theirs.
- **Enemy Commander Destroyed** (2007): win by killing every enemy command unit.
- **Kill count** (2013): win at a set number of kills.
- **Force game end at turn limit**: stop the game after a set number of turns.

These all work, and plenty of people still play with them. What they share is that every one of them counts kills. None of them knows where anything is on the map. You couldn't tell MegaMek "the bridge matters" or "hold the ridge until turn 8". Players who wanted a mission had to agree the rules among themselves and keep score on paper.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/old_victory_options.png' | relative_url }}"
    alt="The Victory Conditions tab of the old Game Options dialog: check for victory, destroy enemy BV, outnumber enemy, force game end at turn limit, kill count victory and enemy commander destroyed"
    width="1160" height="407"
  />
  <p class="corerules-caption">Victory conditions before 0.51.01. Every one of them counts kills.</p>
</div>

MekHQ got part of the way there in 2019, when 0.47.1 added [scenario objectives](/2019/11/06/Scenario-Objectives.html): destroy 35% of the enemy, preserve your allies, reach a map edge. Those are checked after the battle, when you resolve the scenario in MekHQ. MegaMek itself still had no idea there was an objective while you were playing.

The tabletop game has had objectives for a long time. The Core Rulebook has a whole section of Standard Missions built around objective counters, control zones, scanning and victory points. So this summer we started building them into MegaMek, properly, from the rules up.

## Built a Piece at a Time

Objectives touch almost everything: the lobby, the map, the End Phase, the reports. Rather than drop it all on you at once, we built it a piece at a time and put each piece in front of players before starting the next. If you like reading the gory details, it's all tracked on [GitHub](https://github.com/MegaMek/megamek/issues/8761).

A lot of that playing was done by the Test Pilots QA group. They've had their heads down through every piece, playing the same games over and over and catching lots of small issues along the way. Each round of their feedback made what was already there a little better before the next piece arrived.

## Playing an Objectives Game

Here's a game with objectives from start to finish, in the order you'll meet it. The first time you set one up, keep this page open in the lobby.

<div class="corerules-figure">
  <video controls preload="metadata">
    <source src="{{ '/assets/images/posts/2026/2026-10-16-0.51.01-is-coming/Objectives.mp4' | relative_url }}#t=0.1" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="corerules-caption">Objectives in action.</p>
</div>

### Step 1: Switch It On in the Lobby

Victory conditions used to be buried in the long Game Options list. Since July they've had their own **Victory Conditions** dialog in the lobby, and objectives have their own tab in it. You'll use both tabs.

On the **Victory Conditions** tab, tick **Force game end at turn limit** and set the number of turns. That's the most common way to end an objectives game: when the last turn ends, the side with the most victory points wins, and a tie is a draw.

The older conditions on that tab still work alongside objectives. Tick **Destroy enemy BV**, **Kill count** or **Enemy Commander Destroyed** as well, and whichever condition is met first ends the game. If one side is wiped out after points have been scored, the points decide the winner, not whoever is left standing.

Then switch to the **Objectives** tab:

| Option | What it does |
|---|---|
| **Use Objectives** | The master switch. Victory points decide the winner when the game ends. Everything else on this tab is greyed out until it's ticked. |
| **Victory points needed to win immediately** | A race. The first side to reach this many points, while leading on its own, wins on the spot. Leave it at 0 to turn it off. |
| **Sudden death objectives** | The game ends the moment any point is decided: a Hold point secured, a Defend point fallen, or a Capture point taken. Then the points decide the winner. |
| **Scan Enemy Units mission** | The Core Rulebook's Sensor Check mission. Every successful scan of an enemy unit is a reading worth 1 point once the scout carries it home, and a destroyed scout takes its readings with it. To limit it to a few targets, such as a convoy's trucks, a game master can right-click those units in the lobby and mark them **Wanted for Scanning**. How to scan is in the Scan tab in Step 3. |
| **Scouts must stay on the battlefield until turn** | How long scouts have to stay before they can leave with their readings. The rulebook says turn 5. |

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-16-0.51.01-is-coming/Victory_Conditions.png' | relative_url }}"
    alt="The Objectives tab of the Victory Conditions dialog, with Use Objectives ticked and a victory point target of 4"
  />
  <p class="corerules-caption">The Objectives tab in the lobby's Victory Conditions dialog.</p>
</div>

<div class="corerules-callout corerules-note">
  The game needs a way to end, or the points never count. Use the turn limit, a points target, or sudden death. If you forget, MegaMek will warn you.
</div>

Close the dialog and start the game when everyone is ready.

### Step 2: The New Victory Setup Phase

Ticking **Use Objectives** gives your game a brand new phase: **Victory Setup**. It's where every objectives game begins, and it's where you place your points. Leave Use Objectives off and you'll never see it. Your games play exactly as they always have.

Victory Setup comes straight after the lobby, before anything else happens on the map:

1. **Victory Setup:** place your objectives.
2. **Artillery pre-sighting and minefields**, if anyone has them. They come after Victory Setup on purpose, so you know where the objectives are before you pick your target hexes and lay your mines.
3. **Deployment**, and then the game.

Each player takes a turn on the real map, clicking a hex to place a point. The status bar tells you whose turn it is.

<div class="corerules-callout corerules-note">
  Objectives are played on a single ground map. Several map sheets joined together in the lobby count as one map.
</div>

We put this on the real map on purpose. An early version let you pick hexes on a preview in the lobby. We dropped it, because a preview and a generated map can disagree about what's in a hex, and nobody wants a flag on a mountain they thought was a field.

Your opponent doesn't see your points while you're placing them, but teammates and a game master do. Once setup ends, every point is on the map for everyone to see.

Clicking a hex opens a properties dialog for the new point. A description at the bottom explains, in plain words, what the point does with the settings you've chosen. It updates as you change them, so you always know what you're making.

These settings are on every point:

| Setting | What it does |
|---|---|
| **Scoring scheme** | How the point is won: Standard, Raid, Hold, Defend, Capture or Scan. Step 3 covers each one. The rest of the dialog changes to match. |
| **Victory points** | What the point is worth, from 1 to 99. |
| **Control radius (hexes)** | How big the zone is. 0 is just the flag's hex, 1 adds the six hexes around it, and so on. |
| **Starts controlled by** | Lets a side start the game already holding the point, like a garrison. "No one" is the default. |
| **Keep control when empty** | When ticked, a side keeps the point after its units walk away, until the enemy takes it. An empty point still scores for its holder, but Hold and Capture progress waits until someone is standing in it again. |

Then each scheme adds its own settings:

| Scheme | Extra settings |
|---|---|
| **Hold** | **Turns to secure**: how many turns a side must hold the point. **Turns counted**: *Consecutively* means losing the point resets the count, and *Cumulatively* means the turns add up over the game. |
| **Defend** | **Starting grip**: how strong the owner's hold is. **Grip drained per turn**: how much it drops for each turn an enemy stands in the zone. It never recovers. |
| **Capture** | **Points to capture**: the size of the progress meter. **Progress per turn**: how far a side moves it for each turn it controls the zone. |
| **Scan** | **Belongs to**: whose it is, which sets the flag's colour; "Nobody" is a valid choice. **Victory points are paid**: *On the scan*, *On the scan, lost if the scout is destroyed*, or *When the reading gets home*. **The scan reveals**: what the scanning side reads when its scan succeeds; a game master's field in 0.51.01. **Scanned by**, the side that scans it and scores it, arrives in the next release. A Scan point is read, not held, so it has no zone and no control settings. |

Press OK to place the point, or **Remove Flag** to take it back. Click one of your own points to change it. When you're finished, press **Done** and the next player takes their turn. If you press Done without placing anything, MegaMek checks that you meant to.

### Step 3: Choose How It Scores

Every point has a scoring scheme. Standard, Raid and Scan come straight from the rulebooks. Hold, Defend and Capture are MegaMek missions, there for players who want something different. Our plan has always been to capture the primary methods from the books, and also to offer players alternative ways to score.

Pick a scheme below to see its properties dialog next to an example: a moment from the battlefield, then how it works in MegaMek. Each example is a complete mission, so set it up as written and play it with a friend.

<!--
  SHOT 10: the properties dialog, once per scoring scheme, shown in the scheme tabs. CAPTURED.
  Folder: assets/images/posts/2026/2026-10-27-objectives-and-victory-points/dialogs/
  The example text in each tab uses the numbers in its screenshot, so a retake needs the same
  settings (or the text changed with it).
  Where a dropdown changes the rules, each choice has its own shot and its own button under the
  picture: Hold's Turns counted. The Scan tab walks through a whole scan instead, from scanning/.
  RETAKE 5_capture.png once the game fix for the Capture description is in: the current shot
  shows {0} and {1} instead of the numbers. Same settings: 5 points, radius 1, capture 10, rate 1.

  The tabs are Bootstrap 5 tabs (the site already loads bootstrap.bundle), no script of our own.
-->
<div class="scheme-tabs">
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="scheme-standard-tab" data-bs-toggle="tab" data-bs-target="#scheme-standard" type="button" role="tab" aria-controls="scheme-standard" aria-selected="true"><i aria-hidden="true" class="fas fa-flag"></i> Standard</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="scheme-raid-tab" data-bs-toggle="tab" data-bs-target="#scheme-raid" type="button" role="tab" aria-controls="scheme-raid" aria-selected="false"><i aria-hidden="true" class="fas fa-box-open"></i> Raid</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="scheme-hold-tab" data-bs-toggle="tab" data-bs-target="#scheme-hold" type="button" role="tab" aria-controls="scheme-hold" aria-selected="false"><i aria-hidden="true" class="fas fa-mountain"></i> Hold</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="scheme-defend-tab" data-bs-toggle="tab" data-bs-target="#scheme-defend" type="button" role="tab" aria-controls="scheme-defend" aria-selected="false"><i aria-hidden="true" class="fas fa-warehouse"></i> Defend</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="scheme-capture-tab" data-bs-toggle="tab" data-bs-target="#scheme-capture" type="button" role="tab" aria-controls="scheme-capture" aria-selected="false"><i aria-hidden="true" class="fas fa-arrows-left-right"></i> Capture</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="scheme-scan-tab" data-bs-toggle="tab" data-bs-target="#scheme-scan" type="button" role="tab" aria-controls="scheme-scan" aria-selected="false"><i aria-hidden="true" class="fas fa-satellite-dish"></i> Scan</button>
    </li>
  </ul>

  <div class="tab-content">

    <div class="tab-pane fade show active" id="scheme-standard" role="tabpanel" aria-labelledby="scheme-standard-tab" tabindex="0">
      <div class="scheme-panel">
        <div class="scheme-shot">
          <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/dialogs/1_standard.png' | relative_url }}" alt="The objective properties dialog set to Standard: 1 victory point, control radius 1" width="701" height="410" loading="lazy" />
        </div>
        <div class="scheme-text">
          <h3>Standard: Trading Ground</h3>
          <blockquote class="scheme-quote">
            <p>"They've got our relay station, Major." "Then we take their fuel dump. Whatever they grab, we grab back, and we keep what we started with."</p>
            <footer>&mdash; Davion company command net</footer>
          </blockquote>
          <p><strong>The rule (Core Rulebook):</strong> each End Phase, a side scores 1 victory point if it holds at least one of its own points <em>and</em> at least one of the enemy's. Hold them all and it's 2.</p>
          <p><strong>Set up:</strong> turn limit 8. Each player places two Standard points, 1 point each, radius 1: a relay station and a fuel dump.</p>
          <p><strong>In play:</strong> sitting on your own points earns nothing. The Davion player leaves a Hunchback HBK-4G guarding the relay station and sends a Phoenix Hawk PXH-1 to sit on the Kurita fuel dump. Now Davion scores every turn until Kurita pushes it off. This is the best mission to start with.</p>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="scheme-raid" role="tabpanel" aria-labelledby="scheme-raid-tab" tabindex="0">
      <div class="scheme-panel">
        <div class="scheme-shot">
          <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/dialogs/2_raid.png' | relative_url }}" alt="The objective properties dialog set to Raid: 5 victory points, control radius 0, scoring once at game end" width="669" height="362" loading="lazy" />
        </div>
        <div class="scheme-text">
          <h3>Raid: Last One Standing on the Crates</h3>
          <blockquote class="scheme-quote">
            <p>"Forget the early fight. The DropShip lifts at dusk, and it only takes whatever is in our hands when it does."</p>
            <footer>&mdash; Mercenary raid leader, before the drop</footer>
          </blockquote>
          <p><strong>The rule (Core Rulebook):</strong> whoever holds the point scores it. In 0.51.01 it pays once, when the game ends. See What's Next for the change coming to this one.</p>
          <p><strong>Set up:</strong> turn limit 8. One Raid point on a supply cache in the middle of the map: 5 points, radius 0, so only the cache's own hex counts.</p>
          <p><strong>In play:</strong> holding the cache on turn 2 is worth nothing. Holding it at the end of turn 8 is worth all 5. Expect both players to circle it for most of the game, then pile in during the last two turns. With a zone just one hex across, a fast Jenner JR7-D that can dash onto the cache at the very end is worth its weight in gold.</p>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="scheme-hold" role="tabpanel" aria-labelledby="scheme-hold-tab" tabindex="0">
      <div class="scheme-panel">
        <div class="scheme-shot">
          <div class="tab-content">
            <div class="tab-pane fade show active" id="hold-consecutive" role="tabpanel" aria-labelledby="hold-consecutive-tab" tabindex="0">
              <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/dialogs/3a_hold_consecutive.png' | relative_url }}" alt="The objective properties dialog set to Hold: 10 turns to secure, counted consecutively, 5 victory points, control radius 1" width="657" height="418" loading="lazy" />
            </div>
            <div class="tab-pane fade" id="hold-cumulative" role="tabpanel" aria-labelledby="hold-cumulative-tab" tabindex="0">
              <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/dialogs/3b_hold_cumulative.png' | relative_url }}" alt="The objective properties dialog set to Hold: 10 turns to secure, counted cumulatively, 5 victory points, control radius 1" width="712" height="427" loading="lazy" />
            </div>
          </div>
          <ul class="nav nav-pills scheme-variants" role="tablist" aria-label="Turns counted">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="hold-consecutive-tab" data-bs-toggle="pill" data-bs-target="#hold-consecutive" type="button" role="tab" aria-controls="hold-consecutive" aria-selected="true">Consecutively</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="hold-cumulative-tab" data-bs-toggle="pill" data-bs-target="#hold-cumulative" type="button" role="tab" aria-controls="hold-cumulative" aria-selected="false">Cumulatively</button>
            </li>
          </ul>
        </div>
        <div class="scheme-text">
          <h3>Hold: Dig In and Stay</h3>
          <blockquote class="scheme-quote">
            <p>"Command wants that ridge held for a hundred seconds straight. Not ninety. A hundred."</p>
            <footer>&mdash; Kurita lance commander</footer>
          </blockquote>
          <p><strong>The rule (MegaMek):</strong> the first side to hold the point for a set number of turns secures it. Either side can win it.</p>
          <p><strong>Set up:</strong> turn limit 16, with Sudden death objectives ticked. One Hold point on a central ridge: 5 points, radius 1, Turns to secure 10, counted Consecutively.</p>
          <p><strong>In play:</strong> Kurita gets a Griffin and a Panther onto the ridge on turn 3 and holds it through turn 8: six turns. On turn 9, a Davion Wolverine and Commando reach the zone. That's two against two, a tie, and the Kurita count drops back to zero. Count the turns <em>Cumulatively</em> instead, and the same push only pauses the count: Kurita keeps its six turns and needs four more. With sudden death on, whoever secures the ridge wins outright.</p>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="scheme-defend" role="tabpanel" aria-labelledby="scheme-defend-tab" tabindex="0">
      <div class="scheme-panel">
        <div class="scheme-shot">
          <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/dialogs/4_defend.png' | relative_url }}" alt="The objective properties dialog set to Defend: starting grip 10, grip drained 1 per turn, 5 victory points, control radius 1" width="652" height="439" loading="lazy" />
        </div>
        <div class="scheme-text">
          <h3>Defend: Every Second They're Inside Hurts</h3>
          <blockquote class="scheme-quote">
            <p>"I don't care if it's one Locust against my whole company. If it's inside the wire, the civilians are panicking."</p>
            <footer>&mdash; Garrison commander</footer>
          </blockquote>
          <p><strong>The rule (MegaMek):</strong> the point belongs to its owner, and only the enemy can take it. Every turn an enemy unit stands in the zone, the owner's grip drops, even if the owner has more units there. At zero, the point falls.</p>
          <p><strong>Set up:</strong> turn limit 15. The defender places a Defend point on their command post: 5 points, radius 1, Starting grip 10, Grip drained per turn 1.</p>
          <p><strong>In play:</strong> the defender's Atlas AS7-D stands on the command post, but a single attacking Locust LCT-1V darts into the zone. Outnumbered or not, the grip drops from 10 to 9. Ten sounds like plenty, but the turns don't have to come in a row, and the grip never comes back. Every End Phase the attacker has anything alive inside the wire costs the defender another point, and at zero the point falls and the attacker scores all 5. The defender has to keep the zone completely clear, so that Locust has to die <em>now</em>.</p>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="scheme-capture" role="tabpanel" aria-labelledby="scheme-capture-tab" tabindex="0">
      <div class="scheme-panel">
        <div class="scheme-shot">
          <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/dialogs/5_capture.png' | relative_url }}" alt="The objective properties dialog set to Capture: 10 points to capture, progress 1 per turn, 5 victory points, control radius 1" width="644" height="401" loading="lazy" />
        </div>
        <div class="scheme-text">
          <h3>Capture: A Tug of War</h3>
          <blockquote class="scheme-quote">
            <p>"We push them out of the spaceport, they push us back out. Whoever holds that tower long enough to make it stick, wins."</p>
            <footer>&mdash; Spaceport assault commander</footer>
          </blockquote>
          <p><strong>The rule (MegaMek):</strong> attackers fill a progress meter by controlling the zone, and the owner pushes it back by retaking it. A tie freezes it.</p>
          <p><strong>Set up:</strong> turn limit 16. The defender places a Capture point on a spaceport tower: 5 points, radius 1, Points to capture 10, Progress per turn 1.</p>
          <p><strong>In play:</strong> the attacker controls the zone from turn 2 to turn 7, and the meter climbs to 6 of 10. On turns 8 and 9 the defender retakes it, and the meter slides back to 4. On turn 10 both sides have two 'Meks in the zone, a tie, and the meter freezes. The attacker now needs six clean turns, every turn from 11 to 16, to fill it on the last turn and score the 5 points. One more tie and the tower holds.</p>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="scheme-scan" role="tabpanel" aria-labelledby="scheme-scan-tab" tabindex="0">
      <div class="scheme-panel scheme-panel-steps">
        <div class="scheme-text">
          <h3>Scan: Look, Don't Touch</h3>
          <blockquote class="scheme-quote">
            <p>"We don't need the depot. We need to know what's in it, and we need that intel back on the DropShip."</p>
            <footer>&mdash; Davion recon officer</footer>
          </blockquote>
          <p><strong>The rule (Core Rulebook):</strong> the point isn't held, it's read. A scout scans it, and the points are paid the moment the scan succeeds, paid but taken back if the scout dies, or paid only once the scout gets home. <strong>Scanned by</strong> picks the side that scans and scores it: your own, or the other side, when you hide something for them to find. <strong>Belongs to</strong> is whose it is, and sets the flag's colour.</p>
          <p class="scheme-aside">Scanned by, and writing the note as a player rather than a game master, arrive in the release after 0.51.01.</p>
        </div>
        <ul class="nav nav-pills scheme-variants" role="tablist" aria-label="A scan from start to finish">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="scan-setup-tab" data-bs-toggle="pill" data-bs-target="#scan-setup" type="button" role="tab" aria-controls="scan-setup" aria-selected="true">1. Set up</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="scan-order-tab" data-bs-toggle="pill" data-bs-target="#scan-order" type="button" role="tab" aria-controls="scan-order" aria-selected="false">2. The scan</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="scan-reveal-tab" data-bs-toggle="pill" data-bs-target="#scan-reveal" type="button" role="tab" aria-controls="scan-reveal" aria-selected="false">3. The reveal</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="scan-not-home-tab" data-bs-toggle="pill" data-bs-target="#scan-not-home" type="button" role="tab" aria-controls="scan-not-home" aria-selected="false">4. Not home yet</button>
        </li>
        </ul>
        <div class="tab-content">
        <div class="tab-pane fade show active" id="scan-setup" role="tabpanel" aria-labelledby="scan-setup-tab" tabindex="0">
          <div class="scan-step">
            <div class="scheme-shot">
              <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/scanning/1_setup.png' | relative_url }}" alt="The Scan point properties dialog: paid when the reading gets home, Belongs to Test2, Scanned by Test, 1 victory point, and &quot;A hidden depot&quot; in the scan reveals box" width="785" height="530" loading="lazy" />
            </div>
            <div class="scheme-text">
              <h4>1. Set up</h4>
              <p>Turn limit 10, scouts stay until turn 5. Team 1 places a Scan point on its own depot: Belongs to Team 1, Scanned by Team 2, 1 point, paid <em>When the reading gets home</em>. In <strong>The scan reveals</strong> it writes "A hidden depot". Nobody else can read that until Team 2's scan succeeds.</p>
              <pre><code>Gbxllm droo xszmtv gsv dzb blf kozb - Szmw lu Hgziormt</code></pre>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="scan-order" role="tabpanel" aria-labelledby="scan-order-tab" tabindex="0">
          <div class="scan-step">
            <div class="scheme-shot">
              <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/scanning/2_scan.png' | relative_url }}" alt="A light Mek beside a Scan point, labelled JAMMED and SCANNING, with a sensor sweep to the flag labelled SCANNED" width="530" height="335" loading="lazy" />
            </div>
            <div class="scheme-text">
              <h4>2. The scan</h4>
              <p>In the pre-End declarations phase, select your scout, press <strong>Scan</strong> and click the flag. Labels go on the scout and the flag, and a sensor sweep is drawn between them, so your opponent can see where you're looking. Here Team 2's Alfar AL-A1 has closed in on the depot.</p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="scan-reveal" role="tabpanel" aria-labelledby="scan-reveal-tab" tabindex="0">
          <div class="scan-step">
            <div class="scheme-shot">
              <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/scanning/3_reveal.png' | relative_url }}" alt="The End Phase report: the scan succeeds, needing 5 and rolling 6, then &quot;The scan reveals: A hidden depot&quot;" width="527" height="184" loading="lazy" />
            </div>
            <div class="scheme-text">
              <h4>3. The reveal</h4>
              <p>The sensor check is rolled in the End Phase against Piloting skill +3, and range, line of sight, probes, ECM and stealth all apply. The Alfar passes, and Team 2 alone reads "The scan reveals: A hidden depot". If your table prefers the Tactical Operations: Advanced Rules version, tick <strong>TacOps Scanning</strong> in Game Options.</p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="scan-not-home" role="tabpanel" aria-labelledby="scan-not-home-tab" tabindex="0">
          <div class="scan-step">
            <div class="scheme-shot">
              <img src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/scanning/4_not_home.png' | relative_url }}" alt="The start-of-round standings: Team 2 is carrying 1 scan reading not yet home" width="520" height="134" loading="lazy" />
            </div>
            <div class="scheme-text">
              <h4>4. Not home yet</h4>
              <p>Paid <em>When the reading gets home</em>, nothing is scored yet, and each round the standings remind both sides the reading is still out. The Alfar has to stay until turn 5, then leave over its own home edge, and if it dies first the reading dies with it. Choose <em>On the scan, lost if the scout is destroyed</em> to pay at once but take the point back if the scout dies before it leaves, or <em>On the scan</em> to pay for good.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

  </div>
</div>
<p class="corerules-caption">Click a tab to see each scoring scheme. Hold and Scan have more buttons under the picture: Hold shows both ways of counting turns, and Scan walks through a scan from start to finish.</p>

<!--
  SHOT 12 (optional, video, 15-20 s): the Defend example.
  A Defend point with grip 10; one light 'Mek enters the zone while a heavy defender stands on
  the flag. Show the End Phase report line "The grip on control point ... is weakening: 9 of 10
  remaining". File: defend_grip.mp4. It's the scheme players will understand least from text alone.
-->

### Step 4: Fight for Control

Once everyone has pressed Done, deploy and play as normal. Points are decided in each End Phase. A side **controls** a point when it has more eligible units inside the zone than anyone else. Two 'Meks against one is control. One against one is a tie, and a tie means nobody holds it.

Not everything counts. Crippled, prone, immobile and transported units don't. Neither do aircraft in flight, and a VTOL never counts, even on the ground. That's how the rulebook works, and it means a lance of hovering VTOLs won't hold the depot for you.

The board keeps you up to date:

- The flag and its zone take the colour of whoever holds it, and stay white while nobody does.
- **Hover over a flag** to see what it needs and who's winning it.
- Each End Phase report says who controls each point and what was scored. Each round opens with every side's running total.

<!--
  SHOT 3: a point being taken. CAPTURED: capture_point_taken.mp4 (Capturing_Contested.mp4,
  re-encoded H.264, CRF 28, 30 fps, audio stripped, fast start; 51 MB raw, 4.9 MB here). 1542x1104.
  A Capture point (3 to capture) starts uncontrolled; a Team 2 'Mek moves into the zone, the zone
  takes Team 2's colour, the report counts 1/3, 2/3, and the point is captured for 3 VP in round 4.
-->
<div class="corerules-figure">
  <video controls preload="metadata" width="1542" height="1104">
    <source src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/capture_point_taken.mp4' | relative_url }}#t=0.1" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class="corerules-caption">A Capture point being taken. The zone takes the colour of whoever holds it, and the report counts each turn of control until the point falls.</p>
</div>

### Step 5: The End of the Game

With objectives on, the game no longer has to end when one side is wiped out. It ends at the turn limit, when a side reaches the points target, or at sudden death, whichever you set in Step 1. Then the victory points decide the winner, and the victory page lists every scan made during the game.

Scenario files can go further. A scenario can place its own points, give a side a head start in victory points, lock the options that make up its mission, and set graded results, like a marginal or a decisive victory at set point totals.

<div class="corerules-figure" style="max-width: 530px;">
  <img
    src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/scan_win_report.png' | relative_url }}"
    alt="The final End Phase report: Team 2 scores the Scan point, is paid for the reading carried home, finishes with 1 victory point and wins the game"
    width="530" height="216"
  />
  <p class="corerules-caption">One reading carried home, one victory point, one win.</p>
</div>

<div class="corerules-callout">
  <h3><i aria-hidden="true" class="fas fa-user-shield"></i> Game Masters</h3>
  <p>A game master can set up any side's points, take a setup turn without any units, and place, edit or remove points in the middle of a game. Running a campaign night? Move the objective when the story calls for it. If a player joins a scenario late, they still get their setup turn.</p>
  <p>A game master also sees one extra field on Scan points: <strong>The scan reveals</strong>. Write what the scout discovers there, and only the scanning player reads it when the scan succeeds. "The warehouse is full of PPC capacitors" is a lot more fun than "+2 VP". From the next release, the player placing a Scan point can write it too, as in the Scan tab in Step 3.</p>
</div>

<div class="corerules-callout corerules-warning">
  <h3><i aria-hidden="true" class="fas fa-triangle-exclamation"></i> Important: The Bots Don't Play Objectives Yet</h3>
  <p>Princess will fight on an objectives map, but she doesn't know the flags are there. She won't contest a zone, garrison a point or scan anything.</p>
  <p>For now, objectives are for games between human players, or with a game master running things. Teaching the bots is on the list below, and it's last on purpose.</p>
</div>

## What's Next

Everything above is the foundation. Here's what comes next, in the order we plan to bring it to you. The first three are already built and are waiting for the release after 0.51.01; the variants and the Raid change have been through QA, and the scanning change is being tested now. The rest are planned. As always, plans can change.

### Objective Variants: Coming Soon

The Core Rulebook has four variants for objective counters, and all four are already built and tested:

- **Potential.** A candidate, not yet a confirmed objective. It scores nothing until a unit confirms it with a scan.
- **False.** A decoy. Scan it and it's exposed and removed. Never scan it, and you find out at the end of the game that you spent a whole battle guarding nothing.
- **Fragile.** Damage in its hex, from fire, artillery or a building collapse, can destroy it.
- **Mobile.** A 'Mek with a working hand can pick it up and carry it, and drops it if it falls. Carry it off the map and it goes with you.

QA has already played every one of these. They finished too late to go into a release this size, so they'll arrive in the release after 0.51.01.

<!--
  SHOT 6: carrying a Mobile flag. CAPTURED as two stills in mobile/ (pickup, then carried).
  A short video would still be a bonus: walk off with the flag, show the "carried by" tooltip, then
  shoot the carrier for the "needs N to keep hold" roll. File: mobile_flag.mp4.
-->
<div class="corerules-figure-row">
  <div class="corerules-figure" style="flex-grow: 1.03;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/mobile/1_pickup.png' | relative_url }}"
      alt="A Phoenix Hawk's move path ends on a Mobile objective flag, with the Choose Pickup Location dialog offering the right arm"
      width="662" height="640"
    />
    <p class="corerules-caption">Walk onto the flag and pick it up, choosing the hand to carry it in.</p>
  </div>
  <div class="corerules-figure" style="flex-grow: 2.03;">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/mobile/2_carried.png' | relative_url }}"
      alt="The Phoenix Hawk holding the flag, and the movement report saying it loads the objective"
      width="906" height="447"
    />
    <p class="corerules-caption">Coming soon: the Phoenix Hawk makes off with the objective.</p>
  </div>
</div>

<!--
  SHOT 7 (optional, side by side with SHOT 6 or on its own): a decoy exposed.
  Same build. Place a Raid flag with Variants: False, scan it, and capture the board after
  the flag disappears, with the "is a decoy" report line visible.
  File: decoy_exposed.png.
-->

### The Objective Raid Mission

In the Core Rulebook's Objective Raid mission, each side scores for every objective it holds, **every End Phase**, not just once at the end. The next release brings our Raid in line with the book, and QA has already played it. Raid points will pay every End Phase by default, as printed. A new setting, "Victory points are paid: Once at game end", keeps today's behaviour for anyone who prefers it, and saved games keep paying the way they were set up. It's the same principle again: the book's method first, with alternatives available.

The next step after that is a mission preset that sets up an Objective Raid for you: rolling the number of counters, enforcing the spacing, and rolling their variants.

### Scanning: Hide Something for Them to Find

Scanning gets the same treatment as everything else in this post: we keep playing it, and we keep polishing it. The next release adds a way to hide something for the other side to find. Choose who will scan it, write what they'll discover, and it stays a secret until they do. You've already had a glimpse of it in the Scan tab in Step 3.

### What About Capture the Flag?

Yes, we'll get there, and once the variants and the Raid change arrive, you're closer than you might think. You can already play a rough version: put a Mobile Raid flag in each side's deployment zone, set to pay **Once at game end**. A 'Mek with a working hand can grab the enemy's flag. It may drop it if it takes a beating, and the enemy can pick it straight back up. Carry it off the map over your own home edge, and it counts for your side when the game ends.

What's missing to make it the real thing:

- **A base to bring it home to.** Scoring when the flag reaches your own zone, not only when it leaves the map.
- **Flags that go home.** A dropped flag that its owners recover goes back to its base, instead of lying where it fell.
- **More than one capture.** Score, reset, and play on to three captures.

Those are on the list, after the pieces below.

### Setting the Stakes

We're also taking a fresh look at how victory points are set, and bringing it closer to the Core Rulebook. In the book, the mission decides what each objective is worth, and when a mission doesn't say, you can roll for it. So that's where we're heading:

- **Use Objectives** stays the switch in the lobby, and the side with the most points when the game ends still wins.
- A new **Objective value** choice in the lobby. Let each player set their own flags, as now. Make every flag worth the same, which locks the value in the flag dialog. Or roll on the Core Rulebook's random value table once setup is done.
- The **points needed to win immediately** target is either retired, or tied to the points actually on the board.

This is the next thing we're working on.

### Name Your Flags

Every flag a player places is currently called "Objective" and its hex number, so a busy game reads like a list of map coordinates. Scenario files can already give their flags real names, and players will be able to as well: "Hidden Supply Depot" instead of "Objective 0907", in every report, tooltip and the end-of-game page.

Behind the scenes, every flag also gets an identity of its own, so two flags with the same name, or a Mobile flag that's been carried halfway across the map, can never be mixed up.

### Further Out

The rest of the plan for 0.51.03, the release where we aim to have the whole set finished:

<div class="corerules-callout">
  <h3><i aria-hidden="true" class="fas fa-map"></i> On the Roadmap</h3>
  <ul>
    <li><strong>Demolish.</strong> A point you win by flattening what's in it, not by holding it. Drop the bridge, level the depot. The owner scores if it survives, and the attacker scores if it doesn't.</li>
    <li><strong>One flag, several objectives.</strong> Scan the depot to find out what's inside, and only then can you take it. One point, with each objective unlocking the next.</li>
    <li><strong>Hidden objectives.</strong> Points placed in secret, and full double-blind support on the board.</li>
    <li><strong>A custom scheme editor.</strong> Build your own scoring rules and victory conditions, instead of choosing from presets.</li>
    <li><strong>MekHQ.</strong> MekHQ can already hand MegaMek objectives before a battle. What's missing is the return trip: sending the results back so a StratCon scenario can read them.</li>
    <li><strong>The bots.</strong> Teaching the bots to plan around objectives the way a company commander would: send a lance to take the hill, hold the depot, hunt the scout.</li>
  </ul>
</div>

<div class="corerules-split">
  <div class="corerules-figure">
    <img
      src="{{ '/assets/images/posts/2026/2026-10-27-objectives-and-victory-points/priority_targets.png' | relative_url }}"
      alt="The Configure Bot window, Strategic Targets tab: enemy units listed by force with three ticked as priority 3 targets, and a Hex targets list underneath"
      width="693" height="895"
    />
    <p class="corerules-caption">Strategic Targets in Bot Settings. Once the objectives work is complete, the Hex targets list at the bottom goes: Princess will take her targets from the objectives on the map instead.</p>
  </div>
  <div class="corerules-split-text">
    <p>The bots come last for a reason. Every one of the items above changes what an objective can be. A bot taught today would have to be taught again each time one of them lands. So we'll teach it once, against the finished set. It means objectives stay a human-versus-human game a while longer, and we think that's the better trade. One small piece is already in 0.51.01. In Bot Settings you can mark enemy units as priority targets, such as the scouts in a scanning game or the trucks in a convoy, and the bot will favour shooting them. It still won't go after the flags themselves.</p>
  </div>
</div>

<!--
  OPTIONAL SHOT 8: a roadmap graphic.
  A simple timeline: 0.51.01 (objectives, Victory Setup, the six schemes, scanning); next release
  (variants, Objective Raid, Scanned by and private notes); planned (setting the stakes, named flags);
  further out (the roadmap list above, bots last). Can be a screenshot of GitHub Project 36 filtered to
  the series, or a small drawn graphic. File: roadmap.png.
-->

## Thanks

A feature this size doesn't happen without a lot of people. Thanks to the developers who reviewed every piece of it, to the Test Pilots QA group who played the same eight turns more times than anyone should have to, and to everyone who sent us a report when a flag did something strange.

Next week Illiani will be back to talk about the economic changes coming to MekHQ in 0.51.01.

*If you've got questions or feedback, come find us on [Discord](https://discord.gg/megamek).*

Run those ammo bins dry and your PPCs hot!
