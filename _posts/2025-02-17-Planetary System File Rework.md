---
layout: post
title: "Navigating the Stars: Major Updates to MegaMek's Planetary Systems"
date: 2025-02-17
author: MegaMek Dev Team
categories: development
tags: [development, update, planets, yaml]
---

Hi Everyone

We're excited to announce a significant upgrade to how MegaMek handles planetary systems data. While this might sound like a purely technical change, it's going to make exploring the Inner Sphere and beyond much more reliable and extensible for both players and developers.



## The Mission Briefing

We've completed undertaken a complete overhaul of how MegaMek stores and processes planetary system data. We're moving from our current monolithic XML-based system to a more modern YAML format on a per system basis, making it easier for both our development team and community contributors to maintain and expand the vast universe of BattleTech.

## Understanding YAML: The New ComStar Data Format

For those unfamiliar with YAML (Yet Another Markup Language), think of it as a more human-friendly way to organize data – like a ComStar database that even a FedSuns infantry recruit could read! YAML uses simple key-value pairs and indentation to structure information, making it much easier to read and edit than XML.

Here's an example using data from Alarion, a key world in the Lyran Commonwealth:

```yaml
name:
  source: canon
  value: Alarion
type: TERRESTRIAL
gravity:
  source: canon
  value: 0.98
atmosphere: BREATHABLE
temperature:
  source: canon
  value: 45
water:
  source: canon
  value: 80
landmass:
  - name:
      source: canon
      value: New Brunswick
    capital:
      source: canon
      value: Craiova
```

As you can see, YAML uses simple indentation to show relationships between data (similar to a military chain of command). The `source: canon` entries tell us which data comes from official BattleTech sources, while other entries are derived from various historical records created by ComStar archivists. This clear organization makes it much easier for both our development team and community contributors to maintain and expand our planetary data.

The key change is that each planet now gets its own file. In addition the system events are contain in that file, making it simple to find and update information about specific worlds. Want to add a custom planet to your campaign? Just create a new YAML file with the appropriate structure, and MekHQ will handle the rest!

## Strategic Advantages

This upgrade brings several key improvements to the battlefield:

### For Players
- **Custom Planetary Systems**: You can now create your own planetary systems by adding YAML files to your custom data directory. Perfect for those who want to expand their campaigns into uncharted territory!
- **More Reliable System Data**: We've cleaned up and standardized data for all planetary systems, including those mysterious connector systems that link far-flung periphery locations to the Clan Homeworlds.
- **Better Source Attribution**: We've added proper source information for canonical data, making it easier to track what comes from official BattleTech sources and what's been added by the MegaMek team.

### For Developers and Contributors
- **Streamlined Data Management**: Each planetary system now has its own file, making it much easier to edit and maintain compared to the previous massive XML files.
- **Improved Data Structure**: We've implemented proper enums for HPG ratings and planetary types, and created new classes for stars and landmasses.
- **Future-Ready**: This update paves the way for upcoming features, including web-based tools for editing planetary data and in-game campaign features for recording planetary changes.

## Technical Details

For those interested in the nuts and bolts:

- **File Organization**: Planetary systems are now organized in two categories:
  - `canon_systems`: Official BattleTech planetary systems
  - `connector_systems`: Systems that connect distant locations like the Clan Homeworlds

- **Data Structure Improvements**: We've introduced several new features:
  - A new `StarType` class for calculating jump points and solar charging time
  - Proper enums for HPG ratings and planetary types
  - A `LandMass` class for detailed planetary surface information
  - A `SourceableValue` class for tracking data sources

## Known Impact on Custom Content

If you've been using custom planetary system XML files, they'll need to be converted to the new YAML format. We're planning to release a conversion tool to help with this transition. Until the tools are released we've had success converting XML to YAML by using the various AI tools (ChatGPT, Claude.ai,Gemini). We started by showing it a sample of the final YAML file then giving them the system data from the XML file and asking for it convert the information. For now, if you need assistance with converting your custom systems, please reach out to the community.

## Future Operations

This update is just the beginning. We're already working on:
- Tools for editing planetary data back in MekHQ
- Campaign features for recording planetary changes (perfect for those who want to track their mercenary company's impact on the Inner Sphere!)
- Improved visualization of planetary data in-game

## Your Mission, Should You Choose to Accept It

As always, we encourage our community to test these changes and provide feedback. If you encounter any issues or have suggestions for improvement, please let us know through our [MekHQ issues tracker](https://github.com/MegaMek/mekhq/issues).

Remember, MechWarriors: your feedback helps us make MegaMek better for everyone in the Inner Sphere!

---
*This message has been transmitted via HPG network from MegaMek Development Command. End transmission.*