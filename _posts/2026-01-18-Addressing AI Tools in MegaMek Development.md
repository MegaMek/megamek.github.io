---
layout: post
title: "Addressing AI Tools in MegaMek Development"
date: 2026-01-18
---

*By Hammer*

Hey everyone,

You may have seen an article circulating about MegaMek's use of AI tools, and some communities are now raising concerns about AI-generated art in the program. We want to address this directly.

We became aware of this article today—the writer didn't reach out to us before publishing, so this is our first opportunity to respond. We appreciate the chance to provide some clarity.

---

## On AI-Generated Art

Let's be specific: the only AI-generated art in MegaMek consists of the pilot portrait packs and the PACAR resolution screen.

The portrait packs came at a time when we needed a few thousand faces. People were creating packs using images of movie stars and other recognizable faces, which raised legal concerns. We sourced these images as ethically as we could manage—I sought out an image generation service that used licensed source images for training (not stolen art) and was licensed for our intended use. These images were paid for out of my own pocket and donated to the project. A human artist, Saxarba, then refined them into the final images you've been using since 2020—[we even said at the time](https://megamek.org/2020/11/08/New-Dev-Releases-v0.47.12.html): "A big thanks to Saxarba for taking generic computer generated faces and turning them into a BattleTech feel."

<div style="width: 100%; max-width: 800px; margin: 20px auto;">
  <img src="/assets/images/AI_Blog/Saxarba Email.png" alt="Saxarba Email about portrait refinement" style="width: 100%; height: auto; display: block;">
</div>

The PACAR resolution screen was contributed by a developer who is no longer with the project. It was simply a placeholder until we could commission a proper replacement—[we've now removed it](https://github.com/MegaMek/mm-data/commit/75db62a444ee733ae5926289d5378a0cc4e49d57).

All other art in the program—splash screens, tilesets, sprites, and otherwise—has been created by artists who have been paid for their work or have volunteered their time and talent: Sp00ky777, Eldon Cowgur, Saxarba for tilesets, and Deadborder for sprites.

**We have no intent to begin using generative AI art in MegaMek. It can't compete with real artists for quality.**

---

## On AI-Assisted Code

Yes, we use AI tools in development. Here's what that looks like:

- **Code Reviews:** We've used GitHub Copilot for code reviews for some time.
- **Data Conversion:** We've used AI tools for XML-to-YAML conversions and other data tasks, like cleaning up text, grammar, spelling, and formatting.
- **Bug Fixes and Features:** More recently, I've been investigating and exploring the use of AI tools (primarily Claude Code) to assist with writing fixes and implementations—partial implementations, outdated code, and edge cases.

---

## Why We're Doing This

MegaMek is a 23-year-old volunteer project. No one on the team is compensated for their work. Currently, all the work you see happening in the programs is done by volunteers with limited hours. We have a backlog that grows faster than we can address it. AI tooling allows developers (like me) who can read code but not write it to help fix bugs and implement features that would otherwise sit untouched.

The process is:

1. Code is developed under human direction
2. Tested by human developers
3. Played by Human Test Pilots (QA Team)
4. Reviewed by human developers
5. Checked with Copilot on GitHub
6. Signed off and merged

**Every line of code that goes into MegaMek passes through multiple layers of human oversight before it reaches you.**

---

## On Transparency

We are an open-source project. Our [code, processes, and licensing are all publicly visible on GitHub](https://github.com/orgs/MegaMek/repositories)—every commit, every pull request, every discussion. We use GPL3 for code and CC4 for assets (we moved to CC4 specifically so people couldn't profit from our assets without citing the source). That's how this article found the AI labels in the first place.

There's nothing hidden here—we intentionally label pull requests involving AI tools so we can track that code for future reference if needed. Ironically, the only unlabeled AI code is when a human forgets to tag it.

<div style="width: 100%; max-width: 800px; margin: 20px auto;">
  <img src="/assets/images/AI_Blog/SamplePR.png" alt="Sample Pull Request showing AI label" style="width: 100%; height: auto; display: block;">
</div>

---

## Moving Forward

We understand that AI is a topic many feel strongly about, and we respect that. The legal landscape is still evolving, and people will naturally come to their own conclusions about what tools and software they're comfortable with.

What we can say is this: the software itself hasn't changed. The game still plays the same way it always has. The license is the same. The team is the same. The difference is in some of the tools we've used to help us work more efficiently.

Our stance on art remains unchanged: when we need art, we will continue to ask the community for funds and/or pay out of our pockets, pay artists for their work, release the art to the programs, and announce which artists created it so we can encourage people to support them.

MegaMek will continue development. Players who prefer older versions can always access them—v0.49.4 (October 30, 2021) was the last release before any Copilot interactions, and [v0.47.11](https://megamek.org/2020/11/08/New-Dev-Releases-v0.47.12.html) was the release before the portrait packs (or you can simply delete the portrait folder). We'll keep building for those who want to come along—and for those who want to contribute art, code, or other skills, we'd welcome the help.
