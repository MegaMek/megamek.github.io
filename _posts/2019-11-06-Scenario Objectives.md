---
layout: post
title:  "What You Need to Know about the Planetary System Overhaul"
date:   2019-10-17
tags:
  - Features MekHQ
---

One of things mentioned in the release notes for 0.47.1 was Scenario Objectives. Here is a quick summary of it.

his update adds scenario objectives. What does this mean?

For standard AtB scenarios, the objectives are now explicitly tracked, to the best of the program's ability, during scenario resolution. This includes enemy unit destruction, allied unit preservation and any special objectives (you will probably need to manually set the state of the latter).

For scenario templates, you now have the option to embed objectives within the scenario templates. So, want to tell the player to "destroy 35% of primary hostiles, hostile reinforcements to gain one VP and lose one VP if failed", "preserve 85% of allied force one to gain one VP and one AtB bonus roll per surviving unit"? This will let you do that.

It's an experimental feature, so expect bugs and inconsistencies. Feedback is appreciated. Other than on how ugly the UI is, unless you've got some suggestions on how to improve it.

The objective UI looks like this:

![ScenarioObjectives](/assets/images/ScenarioObjectives.jpg){:class="img-fluid"}

Short Description should be a text description of the objective. It can be as long as you want, but longer ones may start to look weird in the scenario UI.

Details is a list of hints/tips that you want to display after the itemized force/unit list for the objective.

Objective Type is pretty straightforward:
Destroy - a unit will count towards this if it's destroyed per Total Warfare rules. Meaning, CT destruction, pilot death/ejection, engine/gyro kill. If the unit's force does not have battlefield control and it's immobilized, it also counts as destroyed. Basically, if you can salvage it after a battle, it counts towards this.

Force Withdrawal - a unit will count towards this if it's destroyed, crippled or has left the map.

Capture - a unit will count towards this if it's immobilized and its opponent has battlefield control, or if it's eliminated (destroyed) but the crew is not killed. Review these carefully, as it's hard to keep track of programmatically.

Prevent from reaching - this will expand to allow the selection of an edge. Force Destination edge will automatically set the destination edge to that of the first associated force template. A unit will count towards this if it's immobilized, destroyed, crippled or leaves the map via the wrong edge. If the unit's opponent forfeits battlefield control, it will be considered as having reached the edge.

Preserve - prevent units in the associated force from being destroyed, or immobilized also if the opposition has battlefield control.

Reach - allows edge selection as "prevent from reaching". A unit meets this criterion if it leaves the map from the designated edge or the unit's owner seizes control of the battlefield.

Custom - whatever you want. Obviously, it will have to be set manually during scenario resolution.

Percentage or Fixed Amount is pretty straightforward - either a percentage of all the selected forces must meet the objective, or a fixed number of units from the selected forces.

Force Names: This is a dropdown containing the force templates defined for the scenario. Adding one will associate the particular template with this objective. You can add any defined force template. For example, "Destroy 50% of Primary Opfor, Hostile Reinforcements".

"at most"/"at least": this is a time limit. At most is an upper bound (e.g. do this objective within X rounds), while "at least" is a lower bound (e.g. do this for at least X rounds). None turns the time limit off, Fixed is a fixed number of rounds, PrimaryUnitCountScaled will scale the time limit by the number of player and allied units that "contribute to unit count" and are assigned/generated prior to the user pressing the "finalize" button when instantiating a scenario from this template.

The next section is the scenario effects. Amount is either a fixed amount or a multiplier. Fixed is self-explanatory, linear is scaled to the number of relevant units that "contribute to unit count" and inverted is the number of relevant units that "contribute to unit count" but haven't met the objective. This number is used to determine how much of the effect type to apply.

Effect Type is a work in progress and not all are implemented.

ScenarioVictory/Defeat grants "vp" towards scenario victory or defeat respectively.
ContractScoreUpdate updates the contract score.
SupportPointUpdate, MoraleUpdate, BVBudgetUpdate are not implemented
ContractVictory means the player can declare victory in the current contract. Use sparingly.
ContractDefeat means the player automatically loses the current contract. Again, use sparingly.
AtBBonus grants the player the specified number of "AtB Bonus" rolls.

Effect Condition tells the program whether to apply the effect when the objective succeeds or when it fails. You can have more than one.
