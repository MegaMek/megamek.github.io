---
layout: post
title: "Feature Highlight: The MegaMek Launcher"
date: 2026-11-02
---

<style>
/*
 * Figures use the same frame as the Core Rules posts: 8px radius and an
 * accent-coloured border. Colours come from the site theme variables so
 * light and dark both work.
 */
.corerules-callout {
  background-color: var(--card-color);
  border-left: 4px solid var(--accent-color);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin: 1.75rem auto;
  max-width: 900px;
}
.corerules-callout p:last-child {
  margin-bottom: 0;
}
/* The opening story: the same frame, set as a short piece of fiction */
.corerules-fiction p {
  font-style: italic;
  margin-bottom: 0.5rem;
}
/* The cockpit's status readouts in the opening story */
.corerules-fiction p.launcher-readout {
  font-style: normal;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.corerules-figure {
  max-width: 900px;
  margin: 1.75rem auto;
}
.corerules-figure img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
}
.corerules-caption {
  text-align: center;
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.6rem;
  margin-bottom: 0;
}
</style>

*By Illiani*

<div class="corerules-callout corerules-fiction">
  <p>Explosions ripped through the perimeter, a cascade of progressive rumbles that reverberated through the cockpit of Elizabeth's Phoenix Hawk, <em>Rattlecan</em>.</p>
  <p class="launcher-readout">REACTOR ONLINE</p>
  <p>Suppressing panic she fumbled with the controls, willing the start up sequence to finish already.</p>
  <p class="launcher-readout">SENSORS ONLINE</p>
  <p>Just a little longer. Comms were down so she could only estimate Clan Jade Falcon's advance. Why did she put <em>Rattlecan</em> in for maintenance today of all days?</p>
  <p class="launcher-readout">WEAPONS ONLINE</p>
  <p>"Oh thank Blake." She didn't really believe Blake was divine, or any of ComStar's other nonsense. But, eh, sometimes it felt nice to go through the motions.</p>
  <p class="launcher-readout">START UP CANCELED</p>
  <p>Blue screens stared back at Elizabeth. White letters asking whether she wanted to update now or later. She clenched her fists. She hammered her head against the command couch. She let out a heavy sigh.</p>
  <p>"I hate it here."</p>
</div>

## Preamble

Hi MekFriends! I'm Illiani, the lead developer of MekHQ. Hammer is a little busy today, so you're stuck with me! Oh, and if you're waiting on my economics dev blog, I'm sorry, it'll be coming later in the week. Today, I'm here to talk to you about one of 51.01's exciting new features: the **MegaMek Launcher**. This is something we've been sitting on for a while and we're all really excited to show it off.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-02-the-megamek-launcher/launcher.png' | relative_url }}"
    alt="The MegaMek Launcher showing MegaMek, MegaMekLab and MekHQ in one window"
    loading="lazy"
  />
  <p class="corerules-caption">All three apps in one convenient place.</p>
</div>

## Identifying the Problem

Anyone who has played MegaMek for more than a couple of releases knows one thing for sure: upgrading to a new version sucks. I probably shouldn't word it like that - but it's true. Upgrading is a frustrating process and the most complicated part about going to a new release.

Equally annoying is the whole process of installing Java; you have to hunt down the right version, then you need to install it, and often you have to do archaic steps where missing even one can brick the entire process.

These two core problems have created an accessibility wall that new players must conquer if they wish to play. We know for a fact that many potential players bounce off that wall. Even for existing players, *The Wall* can discourage them from migrating to new versions. This creates an issue for our tiny, volunteer dev team. A lot of changes go into each version and the difference between even 51.00 and 51.01 is titanic. The more versions players are using, the harder it is to provide support.

There is another problem: our current release pattern just doesn't work any more. When MegaMek was young, each release consisted of only one or two major features and a spattering of bug fixes. Nowadays a single release consists of thousands of changes, big and small. Last month we did a spot check and found that in MekHQ alone over half a million lines had been changed just in 51.01's dev cycle. The more changes we make, the more likely a release is going to be broken. Our existing practice of releasing once a quarter and then expecting you to wait three to four months for any fixes just isn't tenable.

No release is bug free, but a player shouldn't be forced to choose between old or new bugs.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-02-the-megamek-launcher/settings_menu.png' | relative_url }}"
    alt="The launcher's settings menu"
    loading="lazy"
  />
  <p class="corerules-caption">Advanced settings at your fingertips.</p>
</div>

## Introducing the Solution

Throughout this dev cycle our new user interface lead, Alitar, has been hard at work crafting a real solution. In 51.01 you will no longer be required to download the entire suite directly from our website (or GitHub). Instead we will be releasing a launcher which can manage multiple copies of MegaMek, MekLab, and MekHQ. It will also handle installing Java, and even allow you to upgrade to new releases with just a single button press.

The goal with the launcher is to make your life easier. But it helps us too.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-02-the-megamek-launcher/other_installations.png' | relative_url }}"
    alt="The launcher managing several installations side by side"
    loading="lazy"
  />
  <p class="corerules-caption">Support for multiple installations. Play your way.</p>
</div>

## A New Model of Releases

With 51.01 we are retiring the old Nightly, Development, and Milestone pattern of releases. Instead, there will only be two release types: Core and Experimental.

### Core Releases

Core is our standard release intended for the majority of players. It can be seen as a direct replacement to the old Development and Milestone releases. As with Development releases, Core updates will arrive every four months. With the important distinction that the new launcher allows us to easily release patches between releases. No longer will a single bug scupper an entire release. Looking at you, 50.11!

Though not every fix will be backported - that will depend on a case by case basis - we now at least have the option of doing it at all. That opens the door for a far more stable experience in general.

### Experimental Releases

While Core is aimed at everybody, Experimental releases are for our amazing QA team. Experimental releases, unlike Nightlies, will release once a week (outside of any unexpected emergency patches). They are **not** intended for normal play, including the latest features, and all their accompanying, newly-coded bugs. You'll need to become very familiar with the Report Bug button if you intend to play on these releases.

<div class="corerules-figure">
  <img
    src="{{ '/assets/images/posts/2026/2026-11-02-the-megamek-launcher/uninstall.png' | relative_url }}"
    alt="Uninstalling an old version from the launcher"
    loading="lazy"
  />
  <p class="corerules-caption">Remove old versions at the click of a button.</p>
</div>

## The Ending Bit

In conclusion; this is an exciting time to be a MegaMek fan. Over the years this wonderful project has grown to have a fanbase of thousands. The whole team is eternally grateful to everyone who has submitted a bug, or stuck with us through the hard times. Everything we do is done out of love for the BattleTech hobby, MegaMek, and of course, you, the fans. We want you to be able to enjoy the hard work we put into each release, and with our new launcher we're hoping some of the rough edges are about to be sanded off.

Stay safe out there, MekWarrior, I'll see you in 51.01!

PS: We have some amazing things to announce as we get closer to the end of the year. *Project Tycoon* is coming and so far nobody has guessed what it is!
