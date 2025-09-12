---
layout: post
title: "BattleTech Playtest Rules: MegaMek's Implementation and Community Guidelines"
date: 2025-09-11
categories: announcements development playtest
author: Hammer, Project Lead
---

# [BattleTech Playtest Rules:](https://battletech.com/playtest-battletech/) 
## MegaMek's Implementation and Community Guidelines

*By Hammer*

We've been getting questions about how MegaMek will handle the new BattleTech playtest rules. Here's our comprehensive update on what we've implemented and what you need to know.

## Our Approach:

Our original position was straightforward: we couldn't make decisions until we had rules in hand. Well, now we do. Our intention was always to implement new rules once we could see what they actually were. Now that we can see the rules and Catalyst's playtest framework, we're moving forward with implementation as optional rules. 

>**As of today, the code for Playtest Package One will be available and included in:
>
>-The future 0.50.07-Development release 
> 
>-Today's nightly MegaMek build.**

Our commitment remains the same: MegaMek will always follow the most current official rule set, just as we've handled errata implementation in the past. However, we're a volunteer, open-source project, so timelines for implementing major changes will vary based on developer availability.

## Playtest Package One: Implementation Details

The rules are implemented quickly but accurately, following the playtest document as written.

### What Are Nightlies?

[Nightly builds](https://github.com/MegaMek/megamek/wiki/Nightly-Builds) are the bleeding edge of our development efforts, assembled nightly (around 2300 Eastern Time). These versions pack all the latest changes, offering a glimpse into the future of our software at the **expense of stability.** Expect the unexpected, as nightlies may occasionally break down in the heat of development.

### Using Nightly Builds: Critical Information

**Compatibility Requirements:**
- Keep nightly builds in their own **SEPARATE FOLDERS from other versions
- ONLY USE the MegaMek nightly builds (DO NOT USE MekHQ integration - broken)
- Builds are only compatible with the **EXACT SAME VERSION** - i.e. September 11th and September 12th builds cannot play together
- You can only test against Princess (She doesn't understand the changes) or with someone using your exact build version

**Nightly Build Schedule:**
Nightly builds are generated at 3:00 AM UTC. Here's when that translates to in your local time zone:

| Region | Time During DST | Time During Standard |
|--------|-----------------|---------------------|
| Eastern Time (ET) | 11:00 PM (EDT) | 10:00 PM (EST) |
| Central Time (CT) | 10:00 PM (CDT) | 9:00 PM (CST) |
| Mountain Time (MT) | 9:00 PM (MDT) | 8:00 PM (MST) |
| Pacific Time (PT) | 8:00 PM (PDT) | 7:00 PM (PST) |
| United Kingdom | 4:00 AM (BST) | 3:00 AM (GMT) |
| Central European | 5:00 AM (CEST) | 4:00 AM (CET) |
| Eastern European | 6:00 AM (EEST) | 5:00 AM (EET) |
| India (IST) | 8:30 AM | 8:30 AM |
| Japan (JST) | 12:00 PM | 12:00 PM |
| Australia Eastern | 2:00 PM (AEDT) | 1:00 PM (AEST) |

*Note: Times for US time zones are for the previous day. India and Japan do not observe DST, so their times remain constant year-round.*

**Downloading Your Nightly Build:**
1. Log into GitHub (You must have an account)
2. Navigate to the GitHub page of the MegaMek
3. Hit the [Actions Tab](https://github.com/MegaMek/megamek/actions)
4. Look for the latest successful build, marked by a green checkmark (e.g., "Megamek Nightly CI **#454**: Scheduled"). Make a note of the build number for any potential issues
5. Scroll down to Artifacts at the bottom of the page, and select the non-Mac release for download

**Enabling Playtest Rules:**
Playtest options are **turned off by default**. Enable them in Game Options > Basic Options > "Playtest Package One Survivability Rules" (about 3/4 down the list).

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Playtest/Game_Options.png' | relative_url }}" target="_blank">
    <img
      src="{{ '/assets/images/Playtest/Game_Options.png' | relative_url }}"
      alt="Playtest Package One Game Options"
      style="width: 100%; height: auto; cursor: pointer; border: 2px solid transparent; transition: all 0.3s; border-radius: 4px;"
      onmouseover="this.style.borderColor='#0066cc'; this.style.transform='scale(1.02)'"
      onmouseout="this.style.borderColor='transparent'; this.style.transform='scale(1)'"
    />
  </a>
  <p style="text-align: center; color: #666; font-size: 14px; margin-top: 10px;">
    <em>Enable Playtest Package One in Game Options > Basic Options - click image to view full size</em>
  </p>
</div>

The changes may be subtle - for example, ammo explosions will look different, but you'll need to look closely to see the implemented modifications.

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Playtest/Damage_Example.png' | relative_url }}" target="_blank">
    <img
      src="{{ '/assets/images/Playtest/Damage_Example.png' | relative_url }}"
      alt="Playtest Package One Damage Example"
      style="width: 100%; height: auto; cursor: pointer; border: 2px solid transparent; transition: all 0.3s; border-radius: 4px;"
      onmouseover="this.style.borderColor='#0066cc'; this.style.transform='scale(1.02)'"
      onmouseout="this.style.borderColor='transparent'; this.style.transform='scale(1)'"
    />
  </a>
  <p style="text-align: center; color: #666; font-size: 14px; margin-top: 10px;">
    <em>Example of Playtest Package One survivability changes in action - click image to view full size</em>
  </p>
</div>

## Future Playtest Packages

While we have an excellent working relationship with Catalyst Game Labs, we're fans who will likely receive future playtest rules when the general community does. We'll implement them as quickly as possible into nightly releases, but several factors affect our timeline:

- Unknown complexity of future packages
- Unknown quantity of rules
- Implementation time requirements

This means we might implement rules after the playtest window closes. In other words we'll do our test to get them out as soon as we can. 

## Important Limitations and Guidelines

**Official Playtest Feedback:** We're an open-source, fan-based project. If you provide feedback to Catalyst stating your experience was based on MegaMek implementation, they may choose not to accept that feedback. We want complete transparency about this limitation.

**Community Discussion:** We've created a #battletech-playtest Discord channel for organized discussion. However, **the [MegaMek Discord](https://discord.gg/megamek) is not monitored for official feedback**. The development team cannot forward feedback to Catalyst, and we're **NOT**  implementing unofficial rules, spin-offs from playtest rules, or Discord commentary. We have a policy regarding [unoffical or non-canon content](https://github.com/MegaMek/megamek/wiki/Unofficial-or-Non%E2%80%90Canon-Content-Policy)

That said, if there's a legitimate bug in our implementation versus how the playtest rules are written, an issue should be opened on the MegaMek tracker with the specific details.

**Official Feedback:** We strongly encourage testing rules on tabletop and providing feedback through the channels Catalyst has defined in their playtest documents.

## Our Commitment Moving Forward

As developers, we're excited to see BattleTech evolving. We'll always endeavor to protect older rules as options where possible, but fair warning: there may be times when new rules or errata will override old ones, and we may have to remove older implementations depending on the scope of changes.

Until we see final rules and can evaluate their impact, we can only prepare and adapt. We'll update everyone as we go.

For now, if you want to experiment with Playtest Package One, grab the latest nightly build, enable the playtest options, and give them a try. Remember all the compatibility limitations we've outlined.

Run those ammo bins dry and your PPCs hot!

---

*For the latest updates join our Discord at [discord.gg/megamek](https://discord.gg/megamek) for community discussion in the #battletech-playtest channel.*