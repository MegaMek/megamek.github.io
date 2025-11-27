---
layout: post
title: "MegaMek, MegaMekLab, and MekHQ 0.50.10 Released"
date: 2025-11-27
tags:
  - Releases
  - MegaMek
  - MegaMekLab
  - MekHQ
---

Hi Everyone!

Welcome to version 0.50.10! If you're wondering what happened to 0.50.08 and 0.50.09—well, seven ate nine. More accurately, our build system (Gradle) decided it doesn't like those version numbers and flat-out refuses to compile them. Rather than argue with our tools, we've declared them "The Builds That Shall Not Be Named" and moved on. Sometimes you just have to pick your battles, and this wasn't one worth fighting.

Version numbering aside, we thought 0.50.07 was a big build—and we had three months to work on it. We've done almost as much in six weeks. There's an enormous amount here—so much that we can no longer present everything in the release notes. We're highlighting key features below, but we strongly encourage you to explore the full changelogs linked at the bottom.

This release marks two milestone moments for the project. First, after more than a decade of service, Against the Bot has been officially retired. AtB served the community well, but StratCon now offers everything it did and more with active development. It's the end of an era, but it clears the path for MekHQ's future. With this release, we also consider StratCon feature complete—other than bug fixes, we have no plans for new features.

Second, Handheld Weapons are finally playable. We teased something epic coming this fall, and this is it. After being construction-only in MegaMekLab for several releases, 'Mechs can now wield handheld weapons in actual gameplay. Combined with the ability to pick up and carry small vehicles or Battle Armor squads, this opens up tactical possibilities we've never had before.

Beyond these headlines, you'll find Playtest Package 3 implementation, Nova CEWS with a proper UI and lobby configuration, functional Lift Hoists, new ammunition types, and fixes for some of the oldest bugs in our tracker. MekHQ brings Alternative Advanced Medical systems, CamOps Salvage rules, facility renting, and major StratCon enhancements including Mapless and Single Drop modes.

*Note: These release notes highlight key changes in this version. This is not an exhaustive list. For a full breakdown, see history.txt in the docs folder for each project or the change log section at the bottom.*

## MegaMek

### Major Features

#### Handheld Weapons: Finally Playable!

After being construction-only in MegaMekLab for several releases, Handheld Weapons (HHW) are now fully functional in gameplay. This represents significant work to bring these weapons from the design bay to the battlefield.

But that's not all - with the TO:AR "picking up stuff" option enabled, 'Mechs can now carry very small vehicles or Battle Armor squads in their arms. Think of it as giving your Atlas its own Tonka toy. While you can't throw them yet (that's a future goal), the foundation is in place for some interesting tactical possibilities down the road.

<div style="max-width: 1000px; margin: auto; display: flex; gap: 16px;">
  <a href="{{ '/assets/images/Releases/0_50_10/HHW1.png' | relative_url }}" target="_blank" style="flex: 1;">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/HHW1.png' | relative_url }}"
        alt="Handheld Weapons Example 1"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
  <a href="{{ '/assets/images/Releases/0_50_10/HHW2.png' | relative_url }}" target="_blank" style="flex: 1;">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/HHW2.png' | relative_url }}"
        alt="Handheld Weapons Example 2"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>


#### Lift Hoists: Now Functional

Lift Hoists have moved from theoretical equipment to working battlefield tools. Units equipped with lift hoists can now use them in gameplay, with full MekHQ integration for campaign play.

#### Playtest Package 3 Implementation

Following our implementation of Playtest Packages One and Two, we've now added support for **Playtest Package 3 - Gear**. As with previous packages, these rules are implemented as optional settings and are **turned off by default**.

Enable them in Game Options > Basic Options. Look for the Playtest Package Three options.

As always, we're an open-source, fan-based project. If you provide feedback to Catalyst stating your experience was based on MegaMek implementation, they may choose not to accept that feedback. We strongly encourage testing rules on tabletop and providing feedback through the channels Catalyst has defined in their playtest documents.

#### Anti-Radiation Ammunition (ARAD)

We've implemented Anti-Radiation Ammunition (ARAD) for SRMs, LRMs, and MMLs. These missiles home in on active electronic systems, providing a tactical option against units relying on electronic warfare equipment. Unlike Listen-Kill missiles, ARAD missiles maintain their full range and damage potential and aren't easily confused by ECM. However, they're incompatible with Streak or Artemis systems. ARAD ammo is included in autoconfig support.

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Releases/0_50_10/ARAD_Damage.png' | relative_url }}" target="_blank">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/ARAD_Damage.png' | relative_url }}"
        alt="Anti-Radiation Ammunition Damage"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>


#### Nova CEWS: Complete Implementation

We've delivered a comprehensive implementation of Nova Composite Electronic Warfare System (Nova CEWS) rules per Interstellar Operations: Alternate Eras. This includes BV cap enforcement (the 35% bonus cap was previously missing), lobby network persistence fixes (networks configured in lobby now properly persist when game starts), a new in-game network management dialog for the End Phase, and C3 connection line display fixes across all game phases.

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Releases/0_50_10/Nova_Management.png' | relative_url }}" target="_blank">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/Nova_Management.png' | relative_url }}"
        alt="Nova CEWS Network Management"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>




### Notable Bug Fixes (these fix some of the oldest bugs we have)

**Combat, Targeting & Movement**

- Dead entities can now have their missiles targeted by AMS - no more free passes for missiles from destroyed units
- ASFs are now correctly targeted by ground units
- Air-to-Ground LOS now works properly even when aircraft end their movement far away
- Hidden units no longer visible when they shouldn't be
- Pointblank Shots now work properly
- Aero non-BAP sensor range corrected
- VTOLs can now load units at end of turn
- Zipline dropping now uses target position rather than starting position

**Edge & Special Abilities**

- Edge can now only be used once per roll, enforcing the official rule
- Edge can no longer be used to re-roll crit locations when only one viable location remains
- Tactical Genius no longer causes game freezes

**Quality of Life**

- Aero Maneuvers tooltips: Hovering over maneuver options now displays detailed information including requirements, thrust costs, control modifiers, and effects

---

## MegaMekLab

### Bug Fixes & Improvements

- Battle Armor Detachable Weapon Packs now properly display weapons on record sheets
- Stealth armor no longer incorrectly flagged as Fixed Mount Unit (FMU)
- QuadVee flank BV now correctly calculated when equipped with supercharger
- Quirks tab layout aligned with MegaMek's 3-panel design for consistency
- Fixed ground movement table display
- Fixed missing faction availability for Clan 'Mechs with Inner Sphere names

### Infrastructure

- Significant work on MekBay data integration including fluff data, systems data, cargo data, and Alpha Strike data

---

## MekHQ

<div style="background: #2d1a1a; border: 2px solid #cc0000; border-radius: 6px; padding: 12px 16px; margin: 16px 0;">
  <strong style="color: #ff4444;">MAJOR UPGRADE WARNING:</strong>
  <span style="color: #ff6666;">If you use VTOL or wet naval vehicles it is vital that you do not upgrade while in transit. If you do, the upgrade process will convert ALL of your VTOL and Naval crews into ground crew. Apologies for any inconvenience caused.</span>
</div>

### Major Features

#### Against the Bot: End of an Era

After more than a decade of service, Against the Bot (AtB) has been officially retired. StratCon is now the supported campaign system, offering everything AtB did and more with active development. The migration is straightforward - StratCon uses the same underlying campaign structure with a more robust codebase.

AtB was implemented when MekHQ was in its infancy, and over time it became so intertwined with StratCon and base MekHQ that fixing one often broke another. This retirement removes legacy code issues and lets us improve StratCon without cascading issues. Related cleanup includes deprecating the old AtB Ship Search in favor of the expanded Unit Market.

#### Alternative Advanced Medical (AAM)

This new optional system adds expanded injury types with detailed effects, full prosthetic and implant surgery options (over 19 elective procedures), disease mechanics with an inoculation system, and location-specific injuries with appropriate healing modifiers. Characters with too many advanced implants may experience mental and physical health degradation.

AAM will see significant expansion in coming versions - this is just the foundation.

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Releases/0_50_10/Alt_Advanced_Medical.png' | relative_url }}" target="_blank">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/Alt_Advanced_Medical.png' | relative_url }}"
        alt="Alternative Advanced Medical System"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>

#### CamOps Salvage Rules

New optional salvage rules bring MekHQ in line with Campaign Operations. When enabled, you'll need dedicated salvage forces in your TO&E. These forces deploy to scenarios, and following battle resolution, you use them to recover your salvage. The system includes a Salvage Force Picker, Salvage Tech Picker, and salvage return delays based on deployment time.

This is a fairly involved system - we recommend reading the official CamOps rules and experimenting before using it in an active campaign.

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Releases/0_50_10/CamOps_Salvage.png' | relative_url }}" target="_blank">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/CamOps_Salvage.png' | relative_url }}"
        alt="Campaign Operations Salvage Rules"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>


#### Facility Renting

When accepting contracts, you can now rent facilities instead of maintaining permanent units for support functions. This covers MASH Theater capacity, Field Kitchen capacity, and security personnel. Pay a fee, get the benefits.

You can also rent Maintenance Bays and "Factory Conditions" for your units while off-contract or on garrison contracts (any contract ending in "Duty" except Relief Duty, plus Temporary Retainer contracts).

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Releases/0_50_10/Facility_Rentals.png' | relative_url }}" target="_blank">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/Facility_Rentals.png' | relative_url }}"
        alt="Facility Rentals System"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>

#### StratCon Enhancements

**Mapless Mode** removes the Area of Operations map and plays like classic AtB - for players who want StratCon's systems without the hex-based strategic layer.

**Single Drop Mode** generates one scenario per week scaled against your entire TO&E, rather than multiple scenarios across a map. The glossary explains why this works well for cooperative campaigns.

**Official Challenge Scenarios** pit you against a small, highly skilled and well-equipped OpFor in a duel scenario. The intent is that multiplayer groups split their players - some control BluFor, others take the OpFor. If these scenarios don't fit your campaign style, delete them from the Briefing Room and use the new "Add a StratCon Scenario" button to generate something else.

Both Mapless and Single Drop modes are designed with streamers and large multiplayer campaigns in mind. **Important**: Don't enable these modes mid-contract. Start fresh.

#### Veterancy Awards Return

When a character reaches Veteran rank, they now receive a free Special Pilot Ability. However, there's a small chance (2%) they'll receive a Flaw instead - and some of those flaws can be career-ending or severely debilitating.

This reflects our design philosophy: free power comes with risk. One character might get Natural Aptitude/Gunnery; another might get Combat Paralysis. Such is the cost of spinning the wheel.

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Releases/0_50_10/Veterancy_Awards.png' | relative_url }}" target="_blank">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/Veterancy_Awards.png' | relative_url }}"
        alt="Veterancy Awards System"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>

### Additional Features

**Handheld Weapons & Lift Hoists**: Full MekHQ integration for both systems. These can now be maintained, assigned, and tracked through your campaign. Princess doesn't understand handheld weapons yet, but your players can use them freely.

**Unit Market Expansion**: The Unit Market now includes Support Vehicles, DropShips, JumpShips, Infantry, and Battle Armor.

**Seven New Contract Types**: Updated contract type generation provides better variety.

**Family Tree Viewer**: Track generational campaigns more easily by viewing a character's complete family tree.

**Diplomacy Report**: A new report in the Command Center shows faction standings and diplomatic relationships at a glance.

<div style="max-width: 800px; margin: auto;">
  <a href="{{ '/assets/images/Releases/0_50_10/Diplomacy_Alert.png' | relative_url }}" target="_blank">
    <div style="width: 100%; aspect-ratio: 16/9; background: #1a1a1a; border-radius: 4px; overflow: hidden;">
      <img
        src="{{ '/assets/images/Releases/0_50_10/Diplomacy_Alert.png' | relative_url }}"
        alt="Diplomacy Report"
        style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: all 0.3s;"
        onmouseover="this.style.transform='scale(1.02)'"
        onmouseout="this.style.transform='scale(1)'"
      />
    </div>
  </a>
</div>

### Mid-Campaign Feature Enablement

Many new features now include "Options Changed" dialogs that help existing campaigns adopt new systems without starting from scratch. When you enable features like CamOps Salvage, Prisoner Capacity, Advanced Scouting, MASH Theater tracking, or Veterancy Awards mid-campaign, you'll receive appropriate free units, personnel, or skills. This applies to bug fixes as well - turning Advanced Scouting or Prisoner Capacity back on after this release will grant the resources needed to use the updated systems.

### Quality of Life Improvements

**Deployment**: Deploying from the TO&E or Briefing Room (right-click on scenario) now works properly. Force type can be changed directly in the TO&E, forces remember their assigned force types, and a new "Cadre" force type distinguishes between forces training allies versus your own personnel.

**Daily Report**: Now supports tabs for filtering and organizing information.

**Glossary**: Significantly expanded with new entries and tutorial documentation throughout the program.

**Personnel & Units**: Quick Train system speeds up personnel development. TO&E assignments can be managed directly from the Hangar. Auto-mothball prompts appear when beginning transit. MegaMek client settings are accessible from within MekHQ.

**Logistics**: Transportation costs overhauled to align with Campaign Operations. Maintenance schedules now self-correct. Parts in Use correctly tracks biped vs. quadruped 'Mech components. Conventional infantry can now be refit.

### Critical Bug Fixes

- **Advanced Scouting**: Fixed and ready to use
- **Prisoner Capacity**: Fixed and ready to use
- **Battle Armor Skills**: Now use the correct skill
- **Pirate Campaigns**: Recruitment works properly for low-reputation campaigns
- **Prisoners of War**: No longer incorrectly display as Camp Followers
- **Morale System**: Now works as intended

### Campaign Options Updates

- FM:MR Unit Reputation option removed (Campaign Operations is now the standard)
- New option to restrict soldiers to small arms only
- Option to disable seed forces in StratCon
- Option to prevent tornadoes in scenarios
- Option to obstruct parts/unit delivery while in transit
- "Only Commanders Matter" option for multi-crew vehicles

---

## Community Growth

We're excited to share that our Discord server has crossed **5,000 members**! This is a remarkable milestone for our community - for context, we had around 700 members back when we were on Slack. Thank you to everyone who has joined and contributed to making this such a welcoming place for BattleTech enthusiasts.

## MekBay

MekBay has launched! If you haven't checked it out yet, head over to [mekbay.com](https://mekbay.com). Drake and cat/dev/random continue to do phenomenal work pushing out updates to improve functionality.

Unlike the core programs, MekBay releases updates continuously—you'll see a notification when updates are available and can update immediately. If you're a web developer interested in contributing, the code is available for review and contribution.

---

## Technical Stuff

### Java 17 is *Required* for all 0.50.x Releases

Starting with version 0.50.0, Java 17 is **REQUIRED** to play. We've updated our guide to [Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) with detailed instructions.

It's crucial to read the directions carefully, especially Step 6, which covers a recent change to the Adoptium installer. Make sure to select "Install for all users of this machine" in the Installation Scope.

We will continue using Java 17 until Fall 2026. If you choose to use a Java version beyond 17, it isn't officially supported, and our standard response for issues will be to revert to Java 17.

**WARNING**: Java 24 was released (18 March 2025)! MegaMek still **only** requires Java 17, but if you are running on an older 32-bit OS, **DO NOT INSTALL JAVA 24** as it has officially dropped support for 32-bit Windows.

---

## Important: MekHQ Campaign Update Instructions

It is critical to follow these steps to ensure the integrity of your MekHQ campaign when updating between versions. Failure to follow these steps can result in the corruption of your campaign file.

Treat each release as stand-alone; **Copy, never Move** your data forward from older versions. MekHQ is **NOT** backward compatible.

1. **Make a backup of your campaign and custom files. This is a critical step to prevent data loss!**
2. **DO NOT COPY** MegaMek saves or any preference file from a different version to avoid compatibility issues.
3. Update MekHQ to the latest version. **NEVER** overwrite the existing folder; always keep each version in its own folder.
4. Re-save any custom presets to ensure they are updated with the new version's settings.

---

## A Few Reminders

### The Milestone System Summary

Please see [this link](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) for details on our Milestone release system.

### State of the Universe & Development Updates

If you haven't read our recent posts, we recommend checking out:
- [2025 State of the Universe](https://megamek.org/2025/02/18/2025-State-of-the-Universe.html)
- [Looking Ahead and Looking Back: MegaMek Development Update 2025](https://megamek.org/2025/08/15/Looking-Ahead-and-Looking-Back-MegaMek-Development-Update-2025.html)

### User Data Directory

We have a customizable **User Data Directory** feature that allows you to set a single external directory for storing game resources like units, camos, and fonts, accessible across different installations and versions.

Set up this directory via client settings. A game restart is required for changes to take effect.

---

## Social Media

Join our [official MegaMek Discord](https://discord.gg/megamek), our primary community hub for the suite. We offer voice support, individual channels, and assistance for the [official public servers](https://megamek.games). We're also part of community Discords [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). Find us on Facebook at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek).

### Contributing

Interested in contributing? [Find out how here](https://megamek.org/wiki/I-want-to-help).

---

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megamek/compare/v0.50.07...v0.50.10)  
[Download MegaMek 0.50.10](https://github.com/MegaMek/megamek/releases/download/v0.50.10/MegaMek-0.50.10.tar.gz)

### MegaMekLab Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/megameklab/compare/v0.50.07...v0.50.10)  
[Download MegaMekLab 0.50.10](https://github.com/MegaMek/megameklab/releases/download/v0.50.10/MegaMeklab-0.50.10.tar.gz)

### MekHQ Change Log
**Full Changelog**: [View on GitHub](https://github.com/MegaMek/mekhq/compare/v0.50.07...v0.50.10)  
[Download MekHQ 0.50.10](https://github.com/MegaMek/mekhq/releases/download/v0.50.10/Mekhq-0.50.10.tar.gz)