---
layout: post
title: "Taming the OpFor Beast: Opfor Balancing"
date: 2024-09-27
categories: [MekHQ, Game Development]
tags: [OpFor, Balancing, MekHQ, BattleTech]
---

# Meks in the Balance:
## Taming the OpFor Beast

Today, we'd like to dive into the fascinating world of OpFor balancing in MekHQ.

## A Not-So-Brief History

### Against the Bot
#### 1st Generation Force Generation – The Steiner Method

Let's start with a little history. When we implemented AtB (Against the Bot) into MekHQ, we didn't modify it from the original spreadsheet. AtB was developed at a time when MekHQ didn’t exist, MegaMek only had TestBot, and Princess was new and not very capable. As such, it was meant to be played with a mix of pen and paper and MegaMek. It relied on the classic BattleTech balancing method – **Unit Weight**. It also relied on the old maxim "Quantity has a Quality all its own".

Consider that Battlemeks are typically divided into ultralight (below 20 tons), light (20-35 tons), medium (40-55 tons), heavy (60-75 tons), assault (80-100 tons), and Super-Heavy designs (over 100 tons), regardless of their actual battlefield role.

The system started by looking at the weight of the player’s lance. For this example, let’s assume the following Medium Lance in 3053:

| Mek                | Tonnage |
|--------------------|---------|
| Centurion CN9-A    | 50      |
| Clint CLNT-2-3T    | 40      |
| Griffin GRF-1N     | 55      |
| Phoenix Hawk PXH-1 | 45      |
| **Total Weight**   | **190** |

Based on the following weight classification:

| Tonnage        | Weight Class |
|----------------|--------------|
| 0 to 130       | Light        |
| 131 to 200     | Medium       |
| 201 to 280     | Heavy        |
| 281 to 390     | Assault      |

This lance would be classified as 'Medium.' AtB would generate an Opposing Force (OpFor) based on this classification. But if you look closely you'll notice the lance range differ by the top end unit weights multiplied by 4. Meaning 4 top weight light mechs would make a lance of 140 tons (35x4).

#### The Tonnage-Based Challenge

Let's examine two scenarios for how AtB rolls up the OpFor, these are considered the "best" and "worst" case scenarios for the player and our Medium lance:

| Scenario                       | Forces                  | Roll     | Composition                     | Analysis                                                                                                                       |
|---------------------------------|-------------------------|----------|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Theoretical Player Advantage** | Inner Sphere Opponent   | 1d20 Roll = 4 | 2 Light Lances (LLMM each)       | 8 meks total: Two Light Lances, each with 2 Light and 2 Medium Meks (LLMM LLMM). The player’s 4 Medium Meks have an advantage in firepower and armor against the Light meks but face an equal number of Medium Meks. The numerical disadvantage (8 vs 4) means the player must be cautious|
|                                 | Clan Opponent           | 1d20 Roll = 3 | 2 Light Clan Stars (LLLMM each)   | 10 meks total: Two Light Clan Stars, each with 3 Light and 2 Medium Meks (LLLMM LLLMM). The player’s 4 Medium Meks are outnumbered more than 2 to 1 and face the technological superiority of Clan equipment. Even the Light Clan meks are nearly on par with Inner Sphere Mediums, making this fight extremely difficult. |
| **Theoretical Player Disadvantage** | Inner Sphere Opponent   | 1d20 Roll = 18| 1 Medium Lance + 1 Light Lance: (MMMH) + (LLMM) | 8 meks total: The enemy force consists of 1 Medium Lance (3 Medium Meks + 1 Heavy Mech, MMMH) and 1 Light Lance (2 Light and 2 Medium Meks, LLMM). The player's 4 Medium Meks face a tougher challenge due to the Heavy Mech's superior armor and firepower. |
|                                 | Clan Opponent           | 1d20 Roll = 15| 1 Medium Clan Star + 1 Light Clan Star: (MMMMH) + (LLLMM) | 10 Clan meks total: One Medium Clan Star (4 Medium Meks + 1 Heavy Mech, MMMMH) and one Light Clan Star (3 Light and 2 Medium Meks, LLLMM). The player’s 4 Medium Meks face overwhelming odds against 10 technologically superior Clan units. The Clan Heavy Mech will be a significant threat, and the combination of Light and Medium Clan meks ensures that the player will be outgunned and outmaneuvered.|
| **Balanced Encounter**          | Inner Sphere Opponent   | 1d20 Roll = 10| 1 Medium Lance + 1 Light Lance: (MMMH) + (LLMM) | 8 meks total: The enemy consists of 1 Medium Lance (3 Medium Meks + 1 Heavy Mech, MMMH) and 1 Light Lance (2 Light and 2 Medium Meks, LLMM). The player's 4 Medium Meks face a slightly stronger force due to the inclusion of the Heavy Mech.|
|                                 | Clan Opponent           | 1d20 Roll = 9 | 1 Medium Clan Star + 1 Light Clan Star: (MMMMH) + (LLLMM) | 10 Clan meks total: One Medium Clan Star (4 Medium Meks + 1 Heavy Mech, MMMMH) and one Light Clan Star (3 Light and 2 Medium Meks, LLLMM). The player's 4 Medium Meks are significantly outnumbered and face superior Clan technology. The Heavy Clan Mech's firepower and the numerical advantage of the Clan forces make this encounter very difficult.|

This system didn’t account for pilot skills or Battle Value (BV). As Princess improved, human players started being simply outnumbered or outmatched. As more players starting using AtB while learning how to play MegaMek this created a lot of frustration. This is why as Developers we are recommending player move away from pure Against the Bot to StratCon.

## StratCon: The Next Evolution for Against the Bot
### 2nd Generation Force Generation – Enter the Dragon

A few years ago, we introduced StratCon, which changed the balancing approach by factoring in both weight and BV (Battle Value). MekHQ would look at your lance’s weight category and attempt to generate an OpFor that matched your weight while also matching or slightly exceeding your BV. This was a big improvement, but it came with its own set of challenges.

One issue arose when players started fielding low-weight but high-BV forces. MekHQ had trouble creating a balanced 25k BV ‘medium’ lance, for example. Plus, the system could still substitute single heavier lances with multiple lighter ones. This meant you could end up facing three light lances because the system decided that was equal to one heavy lance, struggled to meet the BV allowance and responded by spamming light units.

Another problem came from how the system matched BV. MekHQ would generate lances until the total exceeded its BV allowance. This meant that if it was slightly under, it could spawn an entire extra lance, which threw off the balance—especially with factions like the Clans or Word of Blake, where an extra Star or Level II could heavily skew a scenario.

Add in any scenario modifiers, and it was easy for things to spiral out of control.


## Enter: Force Generation 3 featuring Generic BV
### 3rd Generation Force Generation – Sharpening the Talons

Force Generation 3 aims to fine-tune the best elements of StratCon’s BV system to create more interesting and unpredictable scenarios. It’s not a complete overhaul, but rather an evolution we hope you'll enjoy. Before we get into the how to's of the system let me introduce the tool that is the new cornerstone of it

We introduced Generic BV a couple of versions ago, specifically for Story Arcs. But what is it?

### Generic BV

Generic BV is a simplified measure of a unit’s power. Under standard BV, a unit’s base BV is modified by factors like pilot skills, ammunition, and C3, providing a precise estimate of that unit’s battlefield potential. Generic BV, on the other hand, abstracts this. Instead of calculating the specific BV of each individual unit, it estimates the average power across all units of a certain type and weight.

So, why is this good? Imagine a player force using standard BV. Against a Green OpFor, the system would keep adding units to the enemy’s side until both forces were balanced. Then, against an Elite OpFor, it would do the same—add more units until the forces were evenly matched.

This can make both battles feel similar, even though one should be much harder than the other. With Generic BV, the system focuses on comparing the average power of the chassis on both sides. This means that a Green OpFor will field a weaker force compared to an Elite OpFor, making the Green OpFor much easier to defeat.

It also goes further: since Generic BV doesn’t account for specific unit caliber, OpFors with higher-quality units will feel stronger than those with lower-quality ones. This way, battling the Clans will feel fundamentally different from battling Pirates.

Now, when you field your Elite lance of top-tier pilots in customized rigs, you’ll really feel the power difference compared to when you were using a fresh force straight out of the Company Generator.

### Bring on the BattleMath

In Force Generation 3, balancing opposing forces is crucial to creating fair and engaging scenarios. To achieve this, a new approach calculates a "Generic BV" (Battle Value) for each unit, based on its type and weight, without considering pilot skill or specific equipment. This generic BV serves as an average measure of a unit’s combat potential by weight class, making it easier to generate balanced forces in campaigns or scenarios.

Here's a step-by-step breakdown of the process:

1. **Fetch Player Forces**: First, the player’s forces are collected. Note that some scenario modifier forces are excluded from the BV calculation and do not contribute to the total.

2. **Calculate Generic BV (GBV)**: For each unit in the player's force, the GBV is calculated. This is derived from the average BV2 value of all units with the same type and weight class. For example, every 55-ton Mek shares the same GBV, ensuring consistency across similar unit types.

3. **Set Difficulty Range**: For each bot force, a target value is generated, ranging from 85% to 120% (in multiples of 5) of the player’s total GBV. This value defines the scenario’s difficulty, allowing for a range of encounters—some easier (85%), others more challenging (120%), and most somewhere in between.

4. **Generate Opposing Forces**: The system randomly generates formations for the bot force until it surpasses the target GBV, adjusted by the difficulty percentage set in the previous step. This ensures that the enemy force's strength aligns with the intended challenge level.

5. **Fine-Tune Balance**: If the bot force exceeds 125% of the target GBV, units are randomly removed until the force either consists of a single unit or is within the 125% limit. This step prevents scenarios from becoming overwhelmingly unbalanced.

This structured process allows for a more dynamic and varied mix of opponents. Instead of consistently facing swarms of low-BV units like Wasps or Stingers, you’ll encounter a more diverse combination of Meks, vehicles, and other units. This is accomplished using a statistical model that predicts BV based on weight, capturing the natural scaling of combat potential as tonnage increases. For example, a 20-ton Locust and a 75-ton Marauder are assigned average values that reflect their expected battlefield performance, leading to more engaging and challenging encounters.

For those interested in the underlying calculation, the formula for Generic BV is:

``` 
Math.round(Math.exp(B0 + B1 * Math.log(getWeight())))
```

Here, `B0` and `B1` are coefficients derived from our database of units.

By implementing this approach, Force Generation 3 ensures that battles are not only balanced but also unpredictable and reflective of authentic BattleTech dynamics, enhancing the overall gameplay experience.



#### Lets get back Force Generation 3

Instead of strictly basing the weight of the OpFor on your force, MekHQ now rolls dice behind the scenes to generate a random force weight. These rolls roughly follow the table on page 265 of Total Warfare. Each bot force (Primary OpFor, Reinforcements, etc.) rolls separately, which makes the bot forces feel more varied and in line with what you’d expect from canon.

Once the system has decided on the weight category, it rolls to determine the force composition, again following Total Warfare’s tables. Also, MekHQ no longer substitutes heavier forces with multiple lighter ones, fixing the light unit spam issue that’s been around for a while.

#### BV Adjustments

After generating its units, MekHQ uses the Generic BV and compares the total BV of its force to yours, with a few dice rolls for variation. This ensures that each scenario feels different—some easier, some harder. If the bot exceeds its BV allowance by more than 25%, it will start randomly removing units until it’s within that margin. So even if the Clans drop an extra Star on you, the actual force you’ll face will only have one or two extra units, not a whole wave of reinforcements.

## Example: The Impact on Aerospace Scenarios

A lance of Flying Drakøns (Legendary pilots, 0/1).

<img src="https://i.imgur.com/iTUJZkC.png" alt="Flying Drakøns" style="max-width: 100%; height: auto;">


Generated an unbalanced scenario under the old system. As you can see, they are likely to be overwhelmed by numbers.

<img src="https://i.imgur.com/GQ9KZD8.png" alt="UnBalanced Scenario" style="max-width: 100%; height: auto;">

Using the revised generation, the scenario felt more balanced, showcasing the improvements.

<img src="https://i.imgur.com/KdvmvwH.png" alt="Balanced Scenario" style="max-width: 100%; height: auto;">


### You Dare To Refuse My Batchall!?

Ah, the Clans, those traitors to the original Star League, have always posed a unique challenge in force generation, often overwhelming players by deploying entire clusters. Now, with the introduction of a complete bidding and Batchall system, the Clans feel more true to their lore, providing an experience that's both authentic and challenging.

The bidding system combines the Generic BV approach steps with the standard BV2. These additional steps apply specifically to campaigns involving player forces versus Clan factions, supplementing the basic force generation steps:

1. **Step Six:** Calculate the BV2 of both forces, including the player and the OpFor. Determine the total unit count for the player’s forces (ignoring infantry and counting Battle Armor (BA) as 0.5 of a unit).

2. **Step Seven:** Retrieve the honor rating of the Batchall faction, which is based on the values defined in *Total Warfare*. If the OpFor’s BV2 exceeds the player's BV2 by a certain percentage—strictly 125%, opportunistically 150%, or liberally 175%, depending on the faction's honor—randomly remove units from the OpFor until it falls within this honor-based limit. This ensures that factions with a stricter sense of honor, like Clan Jade Falcon, won't exceed the player's forces by an excessive margin, while more opportunistic factions, such as Clan Wolf, may take greater liberties.

3. **Step Eight:** Check the unit count. If the player’s forces outnumber the OpFor by more than a 2:1 ratio, randomly add BA units to the OpFor until this ratio is balanced. This adjustment ensures that the Clans aren't overwhelmed by sheer numbers and maintains a level of challenge consistent with their combat doctrines.

After 3061, changes in Clan attitudes will start to impact the bidding process, as the shifting dynamics of inter-Clan politics influence how much forces will adhere to their traditional honor systems.

For example, against Clan Jade Falcon in 3055, the old system's OpFor significantly outperformed the player in BV:

<img src="https://i.imgur.com/pZ8iWpl.png" alt="Force Generation 2 System" style="max-width: 100%; height: auto;">

With the new bidding system, the Clans maintain an honorable yet challenging force, aligning with their philosophy of warfare:

<img src="https://i.imgur.com/kEdUQIf.png" alt="Force Generation 3 System" style="max-width: 100%; height: auto;">

By incorporating these steps, campaigns involving player forces versus Clan factions capture the true essence of Clan warfare. This approach ensures that the Clans present an appropriate level of challenge while adhering to their traditions, making battles feel both balanced and authentic, and reflecting the tactical nuances of facing off against these formidable warriors.

## Conclusion

The new force generation methods ensure that battles feel fair, challenging, and closer to the authentic BattleTech experience. Try out these scenarios yourself and experience the difference! The code as been pushed to our nightly builds and we'll be watching and listening for feedback. We know we'll need to tweak the Batchall system and still need to work on some Inner Sphere balancing but this is a big step to improving lots of the battles. 

The code has been recently pushed to the nightly builds if anyone wants to try it out hop on the [Discord](https://discord.gg/megamek) and ask an Admin about becoming a Test Pilot (QA for MegaMek)
