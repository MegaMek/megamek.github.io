---
layout: post
title:  "New Development Release 0.47.3"
date:   2020-2-1
tags:
  - Releases
---
Hi Everyone,

It's been a few months since we released 47.2 and we've got a list of fixes and improvements that are ready for testing.

**FOR MAC USERS**
There isn't a Mac release and you'll have to use the Unix release. We are having issues with the Gradle packaging scripts and various security settings in MacOS. We are working on the issue and have no ETA for a fix.

MegaMek
Numerous bug fixes in this release, including the pesky trailer fix. But some good new stuff, House Arano has been added, we've added a Graphical Editor for the RAT generator (read me in docs), and the biggie -new GUI for the map editor.

So this change to the map editor is based of the unfinished work of a former contributor and one of our new contributors (Windchild) has polished it up. Major word of warning: this needs testing and needs testing by people who have experience with the map editor. There is NO documentation for it (Hint hint... if someone wants to update the Board tutorial doc let us know).

![New Map GUI](/assets/images/Map_Editor/MapEditor.png){:class="img-fluid w-75"}

MegaMekLab
Lots and Lots of bug fixes especially around large craft. But the big stuff you'll start to see is a massive overhaul on the record sheets. As part of this we are working towards being able to print all unit types. BUT we aren't there yet.

MekHQ.
Again lots of bug fixes and some QoL stuff. But a few new cool things like:
-origin planet to personnel
-GM Jumpship Recharge
-Ability to load units into dropships/warships for automatic deployment to megamek scenarios
-in Hangar's Assign Tech menu, group by skill level
-Fixes and features around family members
-Identify on the interstellar view planets that are eligible for additional contracts
-House Arano sourcebook planet ownership data added
