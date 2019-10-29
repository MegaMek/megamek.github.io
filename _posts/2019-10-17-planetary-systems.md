---
layout: post
title:  "What You Need to Know about the Planetary System Overhaul"
date:   2019-10-17
tags:
  - Features MekHQ
---

When you open up MekHQ 0.47.1, you may notice a big change in the interstellar map panel. First, when you click on the menu at the bottom to get color-coded information, you will notice something like this:

![population view](/assets/images/planetary_system/pop_now.png){:class="img-fluid w-75"}

Thats a full display of the relative population size of *every* planetary system in the data. There are no more missing grey dots. Thats true of all the elements selectable from that menu.

It gets even better, though! The data for each planetary system dynamically adjust from the point a colony is founded through to 3145. So, you can get realistic planetary data for any time period you play in. Here, for example, is the same (much brighter population map) at the height of the Star League (2765):

![population view in 2765](/assets/images/planetary_system/pop_2765.png){:class="img-fluid w-75"}

But wait, there's more. You may have noticed that I wrote "planetary system" and not "planet." If you double-click on any dot on the interstellar map, you will switch to a view like this:

![planetary system view](/assets/images/planetary_system/planetary_system_view.png){:class="img-fluid w-75"}

That's right, you are looking at a map of the planetary system, complete with markers indicating the current unit's course and diretion of travel, and indicators for recharge stations at the zenith and nadir points.

All of this is made possible by a massive undertaking involving a legion of contributors to refactor all of our "planet" data into "planetary system" data. As a baseline, we used the *Campaign Operations* rules for generating star systems to flesh out each star system circa [FedCom Civil War](https://www.sarna.net/wiki/FedCom_Civil_War) and then used a lot of math to project values forward and backwards in time. You can read all about the gory details of the project [here](https://github.com/AaronGullickson/system_generation).

#### It Looks Cool, But What Is It Good For?

Well looking cool is almost reason enough, but the planetary system approach will also allow us to implement further cool features in the future, as well as get more use out of some existing rules (like planetary based acquisition, for example). Some of these features *could* include:

* Using planetary information to help generate maps and planetary conditions for games
* Allowing for the use of recharge stations in interstellar travel
* Allowing units to use pirate jump points
* Allowing travel to other planets in a planetary system
* Helping to generate information on manufacturing facilities
* Using socio-industrial codes of planetary systems to help resolve acquistion of parts and equipment (see the planetary acquisition rules currently in MekHQ for an example of this)
* Calculating the expected time of an HPG transmission

#### But Its Not Canon!

Where canon data exists for planetary systems, we have used it. We have also marked all data as canon or non-canon in the underlying XML data that drives this whole thing. In the future we hope to make the source of data directly visible to users from within MekHQ.

But yes, much of the data here is not canon. However, we have endeavored to make it as consistent with canon as possible and to follow the general history of the Battletech universe (e.g. depopulation and technology decline following the fall of the Star League). It may not be canon but it should feel canon-y.

As CGL produces new canon data for systems, we will be updating our data to adjust for canon data. Thus, users should be aware that some of this data may change in the future.

There are also going to be places where the data accidentally misrepresent canon data because we missed a canon source. We encourage users to submit issues to the [MekHQ issues page](https://github.com/MegaMek/mekhq/issues) with corrections for incorrect entries, with a clear indication of the source.

In the meantime, we hope you enjoy exploring the newly enriched Battletech universe. Keep your eyes peeled for a few easter eggs.

#### What About My Custom Planets?

Some users may have made changes to the underlying planet data for their campaigns. There are really two different scenarios here:

1. You may have used the in-game planetary editor to add custom events to a particular planet like faction changes. These custom planetary events *should* load correctly into the new system in 0.47.1 and be saved correctly into the new system when you save a game. However, this is a development version so please post a bug report if you have problems.
2. You may have edited the planets.xml or planet_events.xml file in the data folder itself to create an AU dataset. This is a more difficult situation. At present, custom planets.xml and planet_events.xml will not load into MekHQ 0.47.1 because we use a new XML structure in which the `planet` tag is wrapped inside a `system` tag. If you are XML savvy, you can make your custom XML work by wrapping each of your `planet` objects in a `system` object and then wrapping the whole thing in a `systems` tag. However, you will only have one planet per system. At some point, we hope to make the code for generating systems available as executable which will make it easier for those with AU campaigns to transition to the new system, but that is farther down the road so you may want to hold off on 0.47.1.

The system in 0.47.1 has also disabled the ability to add custom events to planets. This is temporary. In future development releases in this cycle we plan to add back in the ability to add custom events for planets and systems. 
