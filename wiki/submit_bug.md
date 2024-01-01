---
layout: info_page
title: Submit a Bug
---

### How to submit a quality bug report

Submitting quality bug reports is important to get bugs fixed and to not waste developer time. Once a bug is reported, a dev will have to verify that the report is actually a bug. Once it has been verified, a dev has to hunt down the cause of the bug, and then fix it.

#### Issue Tracker

The GitHub Issue tracker keeps track of all issues, including bug reports, feature requests etc.
Once a report has been submitted, a team member can add labels to it to help categorize the issue (ie., bug, enhancement, etc.).
Users should try their best to report the issue to the right program (MM, MML, MHQ), but team members can move issues if they end up on the wrong issue tracker (frequently, issues in MML could actually come from MM, but we don't expect users to know the precisely where the bug came from).

Quicklinks for the GitHub Issue trackers:

[MegaMek Issues](https://github.com/MegaMek/megamek/issues)

[MekHQ Issues](https://github.com/MegaMek/mekhq/issues)

[MegaMekLab Issues](https://github.com/MegaMek/megameklab/issues)

##### Check for duplicates

The first step in creating a bug report is to search the bug tracker to see if the bug has already been reported.

##### One Issue Per Ticket

Please only put one issue in each issue ticket. This allows each separate issues to be worked on individually, and the ticket for each issue closed as it has been worked on. This helps team members, any 3rd party contributors, and also the ticket filer.

##### GitHub vs SourceForge

GitHub is now the primary place for new versions of the code and the latest issues, however there are a number of legacy issue tickets on SourceForge which have not been moved over. These issues are still used by team members, although new issues cannot be reported there. SourceForge should be checked for duplicate issues as well. Links to legacy issue trackers:

[MegaMek Tickets](https://sourceforge.net/p/megamek/_list/tickets)

[MekHQ Tickets](https://sourceforge.net/p/mekhq/_list/tickets)

[MegaMekLab Tickets](https://sourceforge.net/p/megameklab/_list/tickets)

##### Be detailed

After making sure the bug report isn't a duplicate, it's time to think about what makes a quality bug report. It is important to be clear and detailed; the developers cannot read your mind and the only information they have to go off of is what is in the bug report. Often, something that seems obvious to the reporter will not be obvious to the developer, because the developer can be in a different frame of mind. Describe the situation leading up to the bug in as much detail as possible. Also include steps to reproduce: these should be detailed steps that a developer can use to reproduce the bug (a saved game can help here, see below).

One thing to note is that the bug tracker is not a forum to get information: if there is confusion about how something works, or why something works the way it does that isn't grounds for a bug report. Instead, [posting on the forums](http://megamek.info/forums) is a better way to get information. Furthermore, bug reports without sufficient details to reproduce are not beneficial at all. They just waste the devs time. Bug reports with single sentence descriptions or descriptions that say things like "see title" will not be well received.

It is also important to only report one issue per ticket. Creating a new ticket is cheap and it's easy to cross reference tickets. When multiple issues get reported in a single issue it just ends up confusing the discussion.

##### Give references for rules

Additionally, when reporting a bug about rules it is very important to give references to the rules and to first check errata. BattleTech is a complex game with a large number of optional rules. The devs may not know all of the rules by heart and often have to spend a lot of time looking up and cross checking rules.

##### Attach a log file

Version information is also important, and the easiest way to convey this is by attaching a log file from MegaMek. When running, MegaMek logs messages to `logs/megameklog.txt`` by default (this can be changed with the -log flag when running MegaMek). The log file will contain basic system information (like operating system) as well as the version of MegaMek that is running. Frequently it also contains stack traces that can be immensely helpful in hunting down a bug.

Under no circumstances should excerpts from a log file be posted into the ticket. This clutters up the ticket and can screw with the page formatting. Log files are generally not that large and easy to attach to the ticket. There can also be multiple pieces of useful information in the log file that can be missed when the reporter posts what they think is relevant. To attach multiple files, either zip up all files into one file and attach that, or attach a file and make the post and then edit the post to attach further files. Unfortunately there is no great way to make multiple attachments to our knowledge.

##### Attach a saved game

In addition to attaching a log file, it is also helpful to attach a saved game. If you have a saved game prior to the bug occurring, often the devs can load the saved game and quickly reproduce the bug. This is very helpful as the dev can then attach a debugger and step through the code to figure out exactly what is going on. MegaMek automatically creates an autosave at the start of a turn and there is also the "paranoid save" option that will make MegaMek save an autosave at the start of every phase instead of at the start of a turn. Changing the name of the save game (not the extension part) to the name of the player the dev should connect as would help streamline the devs effort to fix bugs. Do **not** say, "see this other ticket...** kind of comments. Attach relevant files to the ticket itself.

Sometimes, a saved game won't be enough to reproduce a particularly nasty and hard to catch bug. In this case, you can consider [creating a "heap dump" of the running game](https://github.com/MegaMek/megamek/wiki/Creating-a-Heap-Dump) and submitting it.
