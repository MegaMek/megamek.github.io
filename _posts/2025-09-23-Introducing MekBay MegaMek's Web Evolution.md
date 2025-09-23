---
layout: post
title: "Introducing MekBay: MegaMek's Web Evolution"
date: 2025-09-23
categories: announcements development mekbay
author: Hammer, Project Lead
---

# Introducing [MekBay](https://mekbay.com/): MegaMek's Web Evolution

*By Hammer*

As a lot of you know, MegaMek has been around since 2002. And since its inception, we have introduced MegaMekLab and MekHQ, which have become incredibly successful parts of the MegaMek suite. All of our projects have always been built in Java, but we've watched in the last few years as things have moved online, more cloud-based. We consistently hear two big requests from the community: a web-based way to play MegaMek, and having a web-based tool for searching units, building forces, and then generating record sheets. MekBay addresses the second request as our first move into web-based tools, and represents our first full project that's not Java.

<div style="max-width: 1200px; margin: auto; display: flex; gap: 20px;">
  <a href="{{ '/assets/images/MekBay/Overview.png' | relative_url }}" target="_blank" style="flex: 1;">
    <img
      src="{{ '/assets/images/MekBay/Overview.png' | relative_url }}"
      alt="MekBay Overview"
      style="width: 100%; height: auto; cursor: pointer; border: 2px solid transparent; transition: all 0.3s; border-radius: 4px;"
      onmouseover="this.style.borderColor='#0066cc'; this.style.transform='scale(1.02)'"
      onmouseout="this.style.borderColor='transparent'; this.style.transform='scale(1)'"
    />
  </a>
  <a href="{{ '/assets/images/MekBay/Record_Sheet_1.png' | relative_url }}" target="_blank" style="flex: 1;">
    <img
      src="{{ '/assets/images/MekBay/Record_Sheet_1.png' | relative_url }}"
      alt="Example of Record Sheet with Damage"
      style="width: 100%; height: auto; cursor: pointer; border: 2px solid transparent; transition: all 0.3s; border-radius: 4px;"
      onmouseover="this.style.borderColor='#0066cc'; this.style.transform='scale(1.02)'"
      onmouseout="this.style.borderColor='transparent'; this.style.transform='scale(1)'"
    />
  </a>
</div>
<p style="text-align: center; color: #666; font-size: 14px; margin-top: 10px;">
  <em>Click images to view full size</em>
</p>

MekBay represents our fourth official project and a significant milestone in the evolution of the MegaMek suite.  We want MekBay to evolve the same way MegaMek has with community feedback, developers, and contributors who want to bring the love of the BattleTech Universe to their friends and families. While MegaMek represents (in our opinion) the best way to play an electronic representation of BattleTech we want MekBay to support TableTop in a way the MegaMek, MegaMekLab, and MekHQ can't. For years, you've asked for mobile access, web-based tools, and the ability to manage your BattleTech games without being tied to a desktop. We hope MekBay will start to deliver on those wishes.  But now for some details on what it does today.

## Current Features

### Complete MML Unit Database
Access the full MegaMek unit database directly from your browser or mobile device. Every unit that MegaMek can build and print is available with complete technical specifications.

<div style="max-width:800px;margin:auto">
  <video controls preload="metadata" playsinline
         style="width:100%;height:auto;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1)">
    <source src="{{ '/assets/images/MekBay/video/Filtering.mp4' | relative_url }}" type="video/mp4">
    Sorry—your browser can’t play this video.
  </video>
</div>

### Force Builder with Cloud Saving
Build and manage your forces with automatic cloud synchronization. Start building on your desktop, continue on your phone, and finalize on your tablet-all seamlessly synced.

<div style="max-width:800px;margin:auto">
  <video controls preload="metadata" playsinline
         style="width:100%;height:auto;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1)">
    <source src="{{ '/assets/images/MekBay/video/TRO_Sample.mp4' | relative_url }}" type="video/mp4">
    Sorry—your browser can’t play this video.
  </video>
</div>

### Printable Record Sheets
Generate clean, printable record sheets for tabletop play. 
  - Note: there is a known issue with iOS devices where record sheets may split across pages due to automatic footer insertion by Safari and other iOS browsers. We're investigating workarounds for this Apple platform limitation.

<div style="max-width:800px;margin:auto">
  <video controls preload="metadata" playsinline
         style="width:100%;height:auto;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1)">
    <source src="{{ '/assets/images/MekBay/video/RS_Sample.mp4' | relative_url }}" type="video/mp4">
    Sorry—your browser can’t play this video.
  </video>
</div>



>**Important:** MekBay **IS NOT** a canon source - these are functional game sheets designed for practical use, not official publication materials. As some of you know, MegaMekLab helps produce record sheets for official BattleTech products. When official record sheets are available through Catalyst Game Labs' products, those will always be considered the official sheets.

**Key differences from official sheets:**
- **Font styling:** Different fonts used for optimal mobile display
- **Unit name formatting:** Bold unit names for better readability
- **Heat scale display:** Uses arrows instead of asterisks on heat scales
- **Equipment inventory:** Each equipment piece listed on separate lines without quantity columns for cleaner mobile viewing
- **Hit modifier tables:** Includes hit modifier tables adjacent to inventory sections
- **Visual elements:** Focuses on hit tables and functional gameplay elements

### Advanced Search Engine
Powerful filtering capabilities let you search by unit type, statistics, factions, eras, and equipment using logical operators. Find exactly the units you need for your scenario or campaign.

### Interactive Unit Sheets
View and interact with unit data in an intuitive interface designed for quick reference during gameplay.

### TRO Browser
Browse through units in a MechWarrior-style interface, complete with improved UI elements and bug fixes from community feedback.

### Technical Implementation:

- Built as a [Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_app) with an Angular frontend (TypeScript, CSS, HTML) and NodeJS backend (JavaScript + MongoDB) for Cloud Sync when online
- Delivers a web-based experience that works offline after initial load
- You can save it as an app on your phone or tablet, making BattleTech unit management truly portable
- Your data syncs across all devices (with real-time sync planned for future releases)
- All unit data, factions, eras, quirks, and equipment pull from MegaMek's databases with automatic updates when online

Currently using static SVG exports from MegaMekLab for record sheets, with plans for dynamic sheet generation in future versions.

## Future Roadmap
As we continue developing MekBay, several exciting features are planned for upcoming releases:

### Real-Time Sync
Multi-device real-time synchronization ensures your sheets stay current whether you're using your phone, tablet, or desktop browser-an upgrade from the current cloud sync system.

## Multiplayer Read-Only Sheets
Share unit sheets with opponents in read-only mode, allowing them to view your units while maintaining data integrity through real-time sync.

### Unit Construction
Full unit construction capabilities with complete MegaMek compatibility. Units built in MekBay will work seamlessly with MegaMekLab and vice versa.

### Enhanced File Format Support
Expanded support for MUL and other file formats to ensure maximum compatibility with the MegaMek suite of programs.

### Built in GATOR Calculator
In development a built-in GATOR calculator that will tell you odds.

## Beta Status and Community Involvement

MekBay is currently in beta at **https://mekbay.com** with ongoing development. As with all MegaMek projects, we're committed to community-driven development and welcome your feedback.

A note for people wanting to contribute to MekBay. We'll need your feedback to make it everything it can be. The code for MekBay will soon be in our repositories. In the past we've had people that have wanted to contribute to the projects but haven't wanted to work in a Java environment. If you're a web developer, have a look at MekBay. And if you want to help out, we'd love to hear from you on our [discord.gg/megamek](https://discord.gg/megamek)

**Feedback Channels:** All feedback should be directed through our established MegaMek channels:
- **Discord:** Join our community at [discord.gg/megamek](https://discord.gg/megamek)
- **Coming Soon GitHub Repository and Trackers:**
 
## Looking Forward

Whether you're a veteran commander who's been with us since 2002 or a new recruit discovering the Inner Sphere, MekBay opens new possibilities for how you engage with BattleTech. We're excited to see how you use these tools to enhance your tabletop campaigns.

As an official MegaMek project, MekBay will receive ongoing development support and continue evolving based on community needs and feedback. This represents our commitment to making BattleTech more accessible to players regardless of their platform or technical setup. By expanding beyond our traditional Java environment, we're opening doors to new possibilities while still staying true to the MegaMek experience.

Join us and help us build the future of portable BattleTech tools.

The next evolution of the MegaMek suite begins with MekBay, we want the evolution to be mobile.

Seyla!

---

*Visit **https://mekbay.com** to try the beta now, and join our Discord at [discord.gg/megamek](https://discord.gg/megamek) for the latest updates on all our developments.*