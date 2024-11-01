---
layout: post
title: "StratCon and Logistics: The Future of MegaMek Campaigns"
date: 2024-10-31
author: MegaMek Team
categories: [Development, StratCon]
tags: [megamek, stratcon, logistics, development]
---

## StratCon and Logistics
<a href="https://imgur.com/75rdHKS">
  <img src="https://i.imgur.com/75rdHKS.jpg" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>

> "The strength of our warriors lies not only in their skill, nor in the power of their BattleMechs, but in the lifelines that sustain them. Every ration, every round of ammunition, and every wrench in a technician's hand is a testament to the relentless and unseen force of logistics. Without it, even the mightiest lance would falter. Let those who seek victory never forget that battles are won on the front lines, but wars are sustained in the shadows—by those who toil to ensure we endure."
>
> — General Aleksandr Kerensky, Star League Defense Forces

## Moving Forward with StratCon

As we move into the 0.50.x development cycle, we want to share our vision for evolving StratCon (Strategic Context), which entered its Beta phase at the start of this cycle. Before diving into the specifics, we want to announce that we will no longer be supporting Against the Bot (AtB), as it is now considered deprecated code. AtB, one of first solo campaign system developed for MegaMek, has served us well and laid the foundation for StratCon and has driven MekHQ development for years. However, as we look to the future, our focus will shift towards growing and expanding StratCon.

If you're unfamiliar with the differences between AtB and StratCon, we recommend checking out [this video by BigFluff10000](https://youtu.be/ZAsn8BVaukw?si=5yma1comiCAXH3pX), one of our dedicated MegaMek Twitch streamers, for a summary of the differences between the two systems.

We anticipate staying in the 0.50.x development cycle until late 2026. During this time, we'll introduce new concepts and gradually phase out legacy AtB elements that no longer align with our vision. You may have already noticed some of these changes with recent updates to the personnel system. While we'll continue enhancing personnel, we're also shifting our focus to improve other areas within StratCon.

## Strategic Decision-Making and Logistics

One major area we're aiming to expand is strategic and tactical decision-making, empowering players to make impactful command choices beyond just the battlefield. Currently, this is modeled with Tracks, Facilities, and Command Rights. However, one aspect we've always felt could be stronger is the logistics system. Parts availability, bonus parts, and the tabletop rules conversion haven't yet reached the level of immersion we're aiming for.

With that in mind, we're planning a significant logistics overhaul for 0.50.02-Development (expected in late 2024 to early 2025). This update will introduce new mechanics for managing logistics, bringing a richer, in-universe feel to the StratCon experience—a touch of RPG to enhance your immersion in the StratCon world.

## The Resupply Module: Reimagining Parts Acquisition

### Origins of Bonus Parts

In the days before MekHQ, when mercenary commanders tracked their units via the original AtB (Against the Bot) spreadsheet, Bonus Parts emerged as a simple solution for acquiring specific equipment. What began as a quartermaster's convenience evolved into an unrestricted "procurement ticket" once coded into MekHQ, allowing access to virtually any technology with barely a thought to availability or era restrictions.

### The Original Rules

Looking back at the original AtB spreadsheet, post-battle bonuses followed a structured table system:

<a href="https://imgur.com/mp0cBem">
  <img src="https://i.imgur.com/mp0cBem.png" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>


Even in these early rules, there were clear restrictions: while parts could be from any availability level, they explicitly could not be LosTech, and commanders still had to pay standard market prices. For civilian vehicles and 'Mechs, commanders could opt to receive their C-bill value instead.

### Current Issues

The problems with Bonus Parts have become as obvious as a Atlas trying to sneak through a city:

1. **Logistics Shortcut**: Instead of managing complex supply chains like any proper mercenary outfit, commanders increasingly rely on Bonus Parts as their primary resupply method.

2. **Era Violations**: The system allows Inner Sphere forces to casually acquire technology that shouldn't exist in their time. Imagine a Davion unit in 3025 fielding more Gauss Rifles than the Federated Suns' elite RCTs – it simply shouldn't happen.

3. **StratCon Implications**: The situation has only worsened with StratCon's Support Points system. Through a series of simple conversions:
    - Campaign Victory Points become Support Points
    - Support Points transform into Bonus Parts
    - This system turns even the most sophisticated Star League equipment into mere C-Bill transactions. What House Lords would deploy entire expeditions to uncover, players can acquire through simple bookkeeping.

## Introducing Resupplies

<a href="https://imgur.com/ImQtl3r">
  <img src="https://i.imgur.com/ImQtl3r.png" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>


Enter the Resupply system – a new approach to how mercenary units receive their critical supplies. Under this system, your employer will dispatch monthly Resupplies tailored specifically to your unit's needs and capabilities. Think of it as having a dedicated quartermaster who intimately knows your force composition.

### Resupply Drops

Your Resupply Drops are determined by analyzing your active combat units (excluding mothballed units and those marked for salvage). The system creates a weighted pool of all parts currently in use across your force. For example, if your unit fields five Medium Lasers but only one Large Laser, Medium Lasers will appear five times more frequently in your Resupplies.

<a href="https://imgur.com/t4Rv2t6">
  <img src="https://i.imgur.com/t4Rv2t6.png" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>


### What's going on with the Supply Convoy?

<a href="https://imgur.com/YJYdOWq">
  <img src="https://i.imgur.com/YJYdOWq.png" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>


Your Resupply convoys don't just follow predetermined supply routes – they navigate through active war zones. During transit, your convoy commander may contact you with situation reports, drawing from over 100 possible encounters. The intensity of your contract plays a role too, with an additional 200 events triggered by enemy morale levels.

### Did we bring enough trucks?

<a href="https://imgur.com/YJYdOWq">
  <img src="https://i.imgur.com/YJYdOWq.png" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>

On Independent Contracts the player will have the opportunity to designate forces in their TO&E as Resupply Convoys. These convoys will have events happen to them and may be intercepted. The efficiency of the convoy will be based on its Cargo capacity. With each scale of Resupply requiring 25 tons.

### Smugglers

<a href="https://imgur.com/WnK2zJp">
  <img src="https://i.imgur.com/WnK2zJp.png" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>

On Guerrilla Contracts the player does not have the luxury of organized resupplies - either from their employer, or their own convoys. Instead, players will need to rely on the 'generosity' of local smugglers. Each month the player will be presented with an offer from a local smuggler.

## In Development: LosTech
<a href="https://imgur.com/nM3cdxW">
  <img src="https://i.imgur.com/nM3cdxW.png" style="width: 100%; max-width: 600px; height: auto;" alt="Responsive Image">
</a>


### The Hunt for Lost Technology

An important note about Resupplies: they will never include LosTech. For those seeking Star League treasures, we're developing a more thematic approach through LosTech Caches. While this system is still under development, here's what we envision:

#### Chasing Rumors
Occasionally, your unit will encounter special "Chasing a Rumor" scenarios. These missions lurk hidden on your StratCon map. These new scenarios will eventually replace the legacy AtB Cache missions, offering a more immersive experience.

#### The Search
Victory in these missions doesn't guarantee discovery. Sometimes the rumors lead nowhere, triggering one of 100 possible events. Here's a glimpse of what you might encounter:

#### Mysterious Offers
Should fortune favor your expedition, you may receive an enigmatic transmission:

<a href="https://imgur.com/qe7wy6J"><img src="https://i.imgur.com/qe7wy6J.png" title="source: imgur.com" /></a>

### With Great Rewards come Great Risks

---BEGIN TRANSMISSION---

Transmission Code: @##$%@!&^***

Date: Fe$#uary 18, 30@%

TO: Precentor Gid@on Tha#&s

FROM: Agent &h!a Vo$$

RE: O-erat*-n ^(*y Sh!o7d, File 78^0RAM

*Pe# st@r^ng orders, infiltra^&on of mercenary unit [##@%@^!&] is compl@#ed. Int!i^l recon rep%ts L_sT^ch d!sc@ver#d at su@-cted S-/r L#&gue depot. Ope!&tives have embe#%ed with t#ir log+%tics, and soft inte$tion has begun.

*Det_%ted sig^&ficant activity ar*#nd access point. LosTech spo$$ include var^%us Me#%s and eq*%pment of S*a# L#@gue origin. Recomm@#d moving to Phase T^& to neut#!ize risk of tec$logical redis#@ery.

Sab#%age preps und_#way. Comms interfe^%ce eff!@tive, fal@% morale amo*% unit maint*#ned by so#%ed faults in eq()ment. Delays rep%#ted as _per*%ives ins@#e doubt reg$#ding 'curse' of LosT%#h.

Approval needed for Phase T@^ escal*#ion. Use of ^_(#&&( for cache destr#@ion is re&om$#ed. Risk e+tim#te within -cce@%ble parameters.

The Peace of Blake be w^%h you.

---END TRANSMISSION-

## Be a Test Pilot!
We have an Alpha Version of this based on the 0.50.01-Development codebase. If you want to help test this new feature, you can download the [Artifact here](https://github.com/MegaMek/mekhq/actions/runs/11622017545/artifacts/2131272913)  

It's very important that the Artifact sit in its own folder. All campaigns from 0.50.0 campaigns can be transferred to test **BUT** once a campaign is using this Artifact it can't go back to **ANY** other version. 

We have a dedicated channel to this on our [Discord](https://discord.gg/megamek) and we strongly recommend joining to stay up to date. 