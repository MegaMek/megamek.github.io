# Welcome to our first State of the Universe

![enter image description here](https://i.imgur.com/kGhFe9zm.png)

This marks our first attempt at a detailed update on the programs. We'll look at where we've been, and where we are, and where we'd like to go. Pull up a chair, a beverage, and give yourself some time as this will be a long one – with the long-awaited answer to "When is the next Stable?".

MegaMek was started in 2002 by Ben  Mazur and a small group of developers who were looking for a way to play Tabletop BattleTech with friends no longer close by. For the last 21 years it's been a faithful recreation of BattleTech and been enjoyed by thousands of players. It's spawned MegaMekLab, MekWars, MekHQ, thousands of spread sheets, and brought countless BattleTech players from around the world together to play.

## Some Thank You's

 On behalf of the development team, we express our gratitude to everyone who has played a role in the evolution of the programs:

- A special thank you to the makers of BattleTech, both past and present, for creating an amazing universe and a game that is deep, complex, and incredibly fun to play.

- We acknowledge the work of the past developers, whose efforts have enabled current and future developers to continue innovating and expanding.

- Our talented contributors, with their diverse range of skills and generous dedication of time, have significantly improved the programs.

- Most importantly, our deepest gratitude goes to the players, whose ongoing engagement, valuable suggestions, diligent issue reporting, shared stories, and vibrant interactions have been critical in keeping these programs thriving.

The transition to GitHub years ago transformed our development process into a more dynamic and collaborative environment. While we are a small group of developers, it has allowed a community of contributors that continually impress us with their ideas and improvements.

Our Discord server, now exceeding 3300 members, is a testament to our welcoming and ever-growing community. It's simple to see that everyone's passion and dedication for BattleTech have been instrumental in elevating the programs to their current heights.

## Getting involved plug (Build the MegaMek World: Your Skills, MegaMek's future)

I'm going to do a little bit of a plug here. Do you love the BattleTech universe, have coding skills (ideally Java), or technical writing skills, or a great attention to detail, or art skills? We'd love to hear from you, the projects are always looking for people wanting to chip in or give back. If you are collaborative, open to feedback, not scared of a 20-year-old Java code base and want to make a difference, head to Discord and let us know what you'd like to do. We'd love to see what you can offer.

## We have a few different ways to get involved

- If you can code, check out the issue trackers on GitHub and grab a few issues to fix. But a word of caution, we are protective of the code base. If you come with a first PR refactoring Server, Entity, or Game don't be surprised if those are rejected. As Devs we are keepers of the code and want to see that contributors have the skills before accepting code like that. Start small and work up. We also ask new coders to remember the base is 20 years old, and you will see things that were cutting edge in 2008 but dated today.

- If you have writing skills, we need people willing to work on creating reference material, particularly a "manual" of some sort. This might be a traditional manual, or even 60 sec YouTube clips. We are open to ideas but at its core we want a way to help players use the programs.

- For artists, we have a specific list of units we'd love to get sprites for. To be precise, these are Aerospace units, not ground units. Deadborder has created the sprites for every ground unit, and we have no interest in moving away from his work on those. We are also open to people that want to create new Tilesets for maps.

- For the detail oriented, we need brave souls to use nightly releases and test out features and bug fixes before they hit the main releases. Effectively a QA team for the programs.

- Are you someone that loves crawling through lore, the MUL excites you, obscure details of this unit at this battle fills your soul with joy? We have things for you as well if you can edit text files and ideally have some experience with XML files.

If any of these interests you, come ask on the [Discord.](https://discord.gg/u2vJ5U2QpD)

## Java and Technical Updates

Java is the language of the programs, and there are no plans to change that. One of the huge questions we get is "Can I run MegaMek on my phone, tablet, etc". In almost every situation the answer is no.

The simple reason is that the current Java code base we use does not run on phones/tablets. In addition, even if it could run, there is the interface problem. Phones and smaller tablets simply do not have the display size to effectively manage all the information and inputs required.

Likewise, we know people that have gotten MegaMek to run on a Steam Deck, but that is from people outside of the Dev team. We applaud them for getting it working, but as a dev team we aren't in a position to support anything beyond our current release types.

One of the biggest challenges we've faced with players wanting to move to the 0.49.x release is the need to move to Java 11 or 17.

<span style="color: red">VERY IMPORTANT POINT!</span>

Java 8 from Oracle 'helpfully' points out the need for an upgrade if you try to run a Dev release with it installed. BUT, the problem is that Oracle built an upgrade check into Java 8, then stopped making or supporting Java, so the upgrade check just generates a link back to Java 8 again. It's a frustrating experience for players wanting to move.

To be able to use any of the programs in the 0.49.x cycle you must have Java 11 or 17. To install follow the directions from this post:

[Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) guide.


Given the age of Java 8, people should move to Java 11 or 17 anyway just for security reasons. Remember the programs **ONLY** officially support Java 11 or 17.

Currently, we are committed to Java 11 as our development version and providing support for Java 17. Looking ahead, we anticipate an eventual transition to Java 17 and eventually, the introduction of support for Java 21. We currently have no timelines for those moves and when we do, we'll make an announcement well in advance.

## Let's talk a bit about the programs

### MegaMek: Is it a game or a Virtual Tabletop

MegaMek has always occupied a unique space, it captures the essence of the tabletop game but with the functionality of a virtual tabletop. In the last few years, developments in the programs, particularly MekHQ and AtB/Stratcon, combined with the evolution of the bot (affectionately known as "Princess"), have further blurred these lines. At its core, MegaMek remains a faithful recreation of tabletop BattleTech, offering a variety of ways to play – be it player versus player, cooperative, or solo play experiences.

However, we must remember that at its heart, it is more than either; it's a unique blend of both a game and a virtual tabletop experience. With that comes a strict need to adhere to our open-source licensing and a deep respect for all copyright holders. For these reasons, we cannot accept offers of financial support and will always decline them. Only under very specific and rare circumstances will we ask the community for support, which is always limited to specific requests, such as assistance in purchasing art assets.

### MegaMek's Evolution and Future Vision

Reflecting on the changes from the 0.48.0 Stable release to the current 0.49.17-Dev, we are amazed by the progress. We encourage players who haven't yet explored the development cycle releases (Dev) to do so. For those unfamiliar with what's included in the 0.49.x Development cycle, here are some of the key improvements that have been implemented:

- **Game play Evolution:** We've integrated new BattleTech rules and errata, enriching the game play experience. An incredibly powerful advanced unit search, Alpha Strike support, and Strategic BattleForce conversions are just a few highlights that have expanded the use of MegaMek as a tool for Alpha Strike and SBF players.

- **Enhanced User Interface:** Major UI overhauls have streamlined the game's look and feel, including improvements in lobby design, improved navigation, and better overall player experience. The mini-map and unit tooltips have been redesigned for clarity and functionality.

- **Stability and Performance**: We've focused on code cleanup and stability, reducing disconnects and optimizing performance. We continue to look for ways to improve stability and performance.

- **Princess Improvements**: Princess has seen significant enhancements, offering more challenging and strategic game play. We'll keep sending her to the finest Academies to hone her skills. As lots of players have commented they fear the day when she can think across turns. Perhaps one day she can become SkyNet.

- **Richer Content**: Regular updates have brought new units, sprites, and fluff text, keeping the game fresh and aligned with the evolving BattleTech universe.

The future of MegaMek looks bright, as we continue to focus on addressing specific issues and interests. We are continually amazed by what our contributors bring to the table, enhancing playability and usability, as well as helping to tackle more complex issues.

### MegaMekLab: Seydlitz into a Stuka?

MegaMekLab has seen remarkable growth and improvement since 0.48.0 Stable. Once considered the underdog of unit design tools, we think it now stands as a versatile and powerful platform for creating and customizing a wide array of units within the universe. We take pride in our collaboration with Catalyst Game Labs, contributing to the production of official record sheets. While we aim to continuously improve MegaMekLab's stability and usability, we also recognize the importance of maintaining its core functionality and listening to community feedback.

Since we launched the 0.49.x Development cycle these are some of the changes to MegaMekLab.

- **User Interface Improvements**: We've revamped the UI, making it more intuitive and user-friendly. Tooltips now display more information enhancing the design process.

- **Enhanced Functionality**: Bug fixes and errata implementations have improved the reliability and accuracy of MegaMekLab, particularly in record sheet printing and equipment validation.

We know that if we ask the community everyone will have their favorite program, and competition is great, but if you haven't really had a good look at the most recent versions of what MegaMekLab can do we encourage everyone to give it try.

### MekHQ: No job too small, no fee too high

MekHQ has emerged as the cornerstone of our suite. It offers players the ability to create and manage their mercenary units – a staple of Tabletop BattleTech games. While development on MekHQ has seen a recent slowdown and will for the foreseeable future, we remain committed to its advancement. Since 0.48.0 there have been numerous improvements.

- **Campaign and Scenario Development**: The introduction of the Company Generator and enhancements to StratCon have revolutionized campaign play, offering greater depth and customizability.

- **Personnel Modules**: New modules for personnel management, including procreation, marriage, and random death, have added layers of realism and narrative to your mercenary units.

- **UI and Customization**: We've improved the interface and added new filter options for an even more personalized experience.

What does the future of MekHQ hold: as of this writing we aren't sure. The developers that have worked on MekHQ in the last couple of years are away from the projects. Currently MekHQ is stable and while it has some issues, nothing is truly game breaking.

Our vision for MekHQ includes bug fixes, enhanced support for various unit types, and the integration of robust campaign play features. We'd love to get StoryArcs across the finish line, have a system editor, improve our refit code, update the accessibility of the programs with more customization options, add robust support for Clan and House units, and once CGL releases it have support for the new MechCommander's Handbook.

But for now, MekHQ is slumbering, but rest assured if we implement things in MegaMek or MegaMekLab we will always make sure not to break MekHQ.

## Next Stable (aka. "Where the heck is 0.50.0?")

### Current Release Cycle and Its Challenges

Before we get too deep into this, there is something we must remind everyone. All three programs are either Beta or Alpha in terms of Development. Think of them like Early Releases on Steam.

With that said we want to address our existing release framework, which has been traditionally divided into 'Stable' and 'Development' versions. Stable versions, our even-numbered releases, we try to keep free of major issues, while odd-numbered development releases represent ongoing progress and innovation and are more likely to have major issues.

This approach, while providing clear structure in the past, has increasingly become a bottleneck. As time between a "Stable" release and continued development grows, it creates a sharp distinction between "Stable" and "Development" releases. New players often choose the "Stable" version only to find missing features and units they'd seen somewhere (aka a Dev release), They encounter issues already fixed, or ask about features added in a development release, making the "Stable" version look noticeably outdated.

Additionally, the mismatch in Java versions for the 'Dev' releases leads to troubleshooting time for us, disrupting the flow of improvements and bug fixes. When we decide to release a 'Stable' version, we pause everything except bug fixes, which can take months, hindering advancements in the programs and making it difficult for outside contributors to join as we force them to wait or only fix bugs, effectively stopping innovation and development (remember the size of the Dev team.)

This structure, initially intended to provide stability and reliability, has impeded our ability to rapidly respond to new ideas, player feedback, and technological advancements, resulting in delays and missed opportunities for timely enhancements.

**Discord and Better Tools and Feedback Methods**
In the past, we relied on the forums and bug trackers for issue reporting. Since moving to GitHub, we have been using integrated tools like nightly builds and GitHub for efficient code testing and review. These checks reduce the amount of game breaking bugs entering the programs. If they do anyway, Discord has emerged as a vital channel for instant player feedback, allowing for a more engaged and responsive development process.

This means the difference between the "Stable" versions and the "Dev" versions in actual stability is not sufficient to warrant the time to keep both separate.

### Introducing the Milestone System

To better serve our players and the development team, we are transitioning away from the traditional 'Stable' / 'Development' labeling scheme to a more dynamic 'Milestone' system.

#### Key Aspects of the Milestone System

- **End of Traditional 'Stable' Releases** : The 'Stable' releases, as we know them, will be discontinued. The next major release anticipated to be labeled as 'Stable' will be version 1.0, slated for release before the end of this century. This change signifies a move towards a more fluid and ongoing development process.
- **Development Tag for All Releases** : Moving forward, every release will be tagged on release as 'Development'.
- **Version Numbering** : The specific version numbering, such as 0.49.x or 0.51.x, is determined by the development team based on internal criteria that reflect our ongoing development efforts. Any changes in version numbering will be communicated in the release notes of the respective release. It's important to note that an even-numbered release will no longer indicates a 'Stable' release but simply a change in version numbering. For example, transitioning from 0.49.x to 0.50.x does not signify a move to a stable release but indicates that we have determined that we've hit a milestone that warrant the version number change, and both remain development releases.
- **Transparent Communication on Significant Changes** : As part of our commitment to clarity and user support, any major changes, especially those pertaining to software requirements, will be clearly outlined. For example, changes in the required version of Java, like our previous transition from Java 8 to Java 11, will be communicated in advance. This ensures our users are well-informed and can prepare for any significant updates, such as a future move to another Java LTS version.

#### Versioning Plan and Milestone Designation

Under the new system, our approach to versioning and release designation will be as follows:

1. **A Development Release** : Versions will be labeled as 0.XX.X-Dev and will be released as part of our regular development cycle.
2. **Observation Period** : Post-release we monitor the software's performance and gather user feedback. This will be from issues opened on GitHub, Discord, social media, etc.
3. **Milestone Tagging** : If a version, like 0.49.7, proves stable and reliable for a period of a few weeks, we will retroactively designate it as a 'Milestone' (e.g., 0.49.7-MILESTONE).
4. **Communication** : This designation will be communicated across all our platforms, including release notes, social media, and forums.

#### Criteria and Frequency of Milestone Releases

The decision to designate a release as a 'Milestone' depends on several factors:

- **Stability and Reliability** : A release must demonstrate a high level of stability and reliability during the observation period.
- **Nature of Updates** : Releases focused primarily on bug fixes are more likely to achieve 'Milestone' status than those introducing major new features or significant changes, like Large Naval Craft, Mobile Structures, or Space to Surface play (not saying we are implementing those anytime soon!).
- **Frequency of Milestones:** We anticipate MILESTONES will come up every **6-9 months**. However, this could be longer or shorter depending on what is happening with development.

#### Example of Milestone Designation

To illustrate, consider the following sequence of releases:

- **49.7-Dev**: Met the criteria for stability and reliability, so we would name it 0.49.7-MILESTONE.

- **49.8-Dev to 0.49.17-Dev**: Each had issues or aspects of 'weirdness' and did not meet 'Milestone' criteria. For example, 0.49.15-Dev contained a significant bug, albeit with an easy workaround, but was not good enough to be called a MILESTONE.

- **49.18-Dev**: If it meets the criteria for stability and reliability, it becomes 0.49.18-MILESTONE (hypothetically) a few weeks after release.

This sequence demonstrates our revised approach; not every development release becomes a 'Milestone' after a week. The designation is reserved for those versions that genuinely meet our standards for stability and user experience. They provide a good entry point to the programs, and a safe release for players to use while waiting on the next MILESTONE. We will encourage players to move up as MILESTONES are released. With the caveat of always keeping backups of your CPNX file, as the programs are still in development (Beta/Alpha/Early Access 😊)

#### Rationale for Change

Adopting the Milestone system serves multiple purposes:

- **Continuous Development**: This approach allows for uninterrupted innovation and improvement in the software. By focusing on the most recent releases, we can maintain a steady pace of development.

- **Current Versions for Users**: We want to encourage players to move beyond using a 'Stable' version, like 0.48, for extended periods. This approach bridges the gap between Stable and Development versions, enabling players to stay up-to-date more quickly by transitioning between milestones and allowing us to phase out older releases.

- **Changing Perceptions**: It shifts the mindset from viewing 'Stable' versions as inherently superior to 'Development' versions. This helps foster an understanding that the programs are in continuous development and will remain so for the foreseeable future.

#### But wait, doesn't that mean I'm always using a "risky" version?

Depends on your definition of risky, the 0.48.0 Stable still had some nasty bugs in it (Skill settings in MekHQ and DFA bugs), but communication and player feedback allowed players to use it knowing the workarounds. Which when you think about it is effectively the same thing we will be doing with MILESTONES, and we have been doing for years with players living in the Development cycle releases.

#### Summary

With the introduction of the Milestone system in the MegaMek suite, we're making a strategic shift towards a more agile and user-focused development cycle. This change is designed to speed up our innovation while also providing our community with access to stable and reliable versions of the software more consistently.

Based on the above criteria we are happy to announce that
**0.49.7** will be our first MILESTONE release.

One final recommendation unless you ONLY use one of the programs we recommend players use the MekHQ version as it has all three programs.

[MekHQ 0.49.7-MILESTONE](https://github.com/MegaMek/mekhq/releases/tag/v0.49.7)

[Megamek 0.49.7-MILESTONE](https://github.com/MegaMek/megamek/releases/tag/v0.49.7)

[MegaMekLab 0.49.7-MILESTONE](https://github.com/MegaMek/megameklab/releases/tag/v0.49.7)

The MILESTONE represents considerable improvements over 0.48.0 but will require players to update to Java 11. Remember if you are on Java 8 and try to run the MILESTONE it will say you need Java 11, then but you into the Oracle upgrade loop.

Please ONLY use these instructions and make sure to follow them EXACTLY, especially the reboots and Step 6.
[Updating to Adoptium (Eclipse Temurin Open Source Java)](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium-(Eclipse-Temurin-Open-Source-Java)) guide.


## The Future

As we look ahead, our optimism for the future of the suite remains strong. Over the past 20-plus years, the programs have not only surpassed the original vision of the founders but have also carved their own unique paths. This remarkable journey has been made possible entirely by volunteers and shaped by the dedicated players in the BattleTech community. We acknowledge the ambitious vision of recreating 40 years of Tabletop development in digital form through MegaMek.

We believe that one day, the programs will fully reflect the Tabletop rules. Now, the challenge is to find the time to make this a reality! We extend our heartfelt thanks to you for joining us on this journey and for your ongoing support. We eagerly anticipate sharing more updates and achievements as we progress. With the continued dedication of coders and enthusiasts in the BattleTech community, we're confident that the suites will keep growing and evolving.

Seyla!
