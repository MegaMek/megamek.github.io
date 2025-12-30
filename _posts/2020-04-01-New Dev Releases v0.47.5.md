---
layout: post
title:  "New Development Release 0.47.5"
date:   2020-4-1
tags:
  - Releases
---
Hi Everyone,

Been a few months since our last dev release. This is a massive release with a staggering amount of stuff in it which means their will likely be issues. But unless there are major deal breaking bugs in this release. Things will slow on development for the foreseeable future. The dev's time have become limited with everything going on in world

These dark themes they are new and have had some testing but there might be glitches and weirdness around them.

**FOR MAC USERS**
There isn't a Mac release and you'll have to use the Unix release. We are having issues with the Gradle packaging scripts and various security settings in MacOS. We are working on the issue and have no ETA for a fix.

MegaMek
Lots of bug fixes, some errata implemented - looking at you Narrow/Low profile. But a couple of big new things. Fuel-air Explosives for when you just gotta kill that Clan Elemental Cluster. Princess has graduated the next level of artillery school, she can counter-battery fire and so can you. Thanks to Simon Landmine's testing of the new map editor there have been a bunch of bugfixes and further improvements to the map editor.

MegaMekLab
There is a staggering amount of bug fixes and the record sheet project has completed new Aerospace Sheets and conventional Infantry sheets. We are targeting BA and Protomeks in the next wave but no ETA.

MekHQ.
MekHQ has finally gone to the dark side with the dark mode implementation complete. Windchild's has done a lot of work on Personnel. These improvements add Random Marriages, divides names into Given Names and Surnames while adding trailing honorifics, Former Spouse Tracking, expanding Family Displays, and a few new marriage and divorce options relating to how names are changed.

Additionally, there are fourteen new options to campaigns (which can now be reach in existing campaigns through keyboard shortcuts: hold ALT, then press 'F' followed by 'C'), under the Personnel tab in the Family Options tab. These are a mixture of new and additional customization, plus a few new features.

* Keyboard Shortcuts for the top Menu (hold ALT, then use the underlined key for the menu option) (primary tab shortcuts coming in the next release)
* Hangar tab pop-up menu bulk selection additions and fixes
* Localized Natural Order Sorting (i.e. going 1, 2, 10, 20 instead of the previous 1, 10, 2, 20)
* Proper Gender and Portrait Migration from MegaMek
* Advance Day in Personnel Market
* Special Abilities are generated for Veteran and Elite Personnel on Person Generation


Note: You might notice that female personnel may have a box, underline, or an additional space between their given name(s) and surname(s). This is due to an issue for certain non-Latin characters in names in our name text files. This has been fixed, but unfortunately could not be fixed in save files through migration. A extra space can be removed by deleting it (provided the new given name makes sense), but any boxes or underline will require manual fixes. I would recommend doing so by comparing the name to what is in the data/names/firstnames_female.txt file, and replace any names that you find have issues with those located in said file.
