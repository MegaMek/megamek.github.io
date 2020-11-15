---
layout: post
title:  "New Development Release 0.47.14"
date:   2020-11-15
tags:
  - Releases,MegaMek,MegaMekLab,MekHQ,Features
---
Hi Everyone,

They say the third times is the charm. Sorry about the 0.47.12 and 0.47.13 releases but sometime bugs get missed. I'm going to recycle the notes from the previous releases.

Opps...as we set a record for shortest time between releases. 0.47.12 had a game breaking bug in MekHQ that has been fixed in this release. We did add a couple of other small things in this release. For simplicity I'm reusing the main part of the 0.47.12 notes.

The march to stable continues. This is very much a bug release with only a few of new features. But the new things are huge! First up the Megamek portrait pack is here! 1379 Images covering all types of roles. A big thanks to Saxarba for taking generic computer generated faces and turning them into a BattleTech feel. 

A few notes on the pack. It does add close to 250 MB to the download size of the MekHQ releases. But if you download just the Megamek or MegaMekLab releases you won't get them. We made the decision to include them based on an overwhelming majority being ok with the increased download size. It also reduces the risk of issues with players alternating using and not using them between releases. We know that not everyone will be happy with the release but overall it adds a lot of character to the MekHQ. 

If your concerned about size you are able to delete them after downloading. To do this go to your data\images\portraits folder and delete everything inside the Male and Female folders.

One of our most requested features is an option to print to Record Sheets with tables. To see what we mean see [here](https://www.dropbox.com/s/rt1gsc5nmvs406p/47.12%20Reference%20sheets%20DO%20NOT%20DELETE%20or%20move.pdf?dl=0). Well...now you can. To set these and other printing options in MegaMekLab see the File-Configuration menu. Also makes sure to look at File-Themes to change the look of MegaMekLab.

Lastly we are still aiming for a new stable (0.48.0 Stable) by New Years but we need to stress no promises.

As always when using a Development release.
1)  Make backups of your campaigns and customs.
2)  Always treat each release as a stand alone release and only copy your data forward from older versions.

#### MegaMek
As mentioned we are moving toward a new stable, meaning not a lot of new things in this releases. But one of the big ones is sending Princess to another map reading course. She is getting better with fast units and with longer range paths. We've also changed a lot of default settings in Megamek - for a detailed list see [here](https://github.com/MegaMek/megamek/pull/2334). We also implemented a couple more quirks (Oversize and Static Ammo Feed) and full head ejection system. Deadborder continues to crank out new sprites based on the Kickstarter, units that have cleared moratorium, and for fun check out the Ram Plate equipped Rhino.

#### MegaMekLab
Again lots of bug fixes as we push to make MegaMekLab more stable and capable. This releases includes improvements to printing, margin fixes, and expanding the optional tables on unit types.

#### MekHQ.
Bug fixes and code optimizations here. While MekHQ was never designed to handle forces the size of SLDF divisions but players are doing it (much to our amazement). Windchild and Watford have been working to make MekHQ better able to handle this. This includes UI improvements, standardizing code, and filtering options. This fixes increases the risk of bugs in this release so make sure you keep backups. But in the long run sets us up for an improved experience. Lastly we've added a new AtB preset based on CampaignAnon excellent guide.

**FOR MAC USERS**
There isn't a Mac release and you'll have to use the Unix release. We are having issues with the Gradle packaging scripts and various security settings in MacOS.  We are working on the issue and have no ETA for a fix.

You can get them [here](https://megamek.org/downloads.html)

