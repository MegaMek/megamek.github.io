# Welcome all to 0.49.10

This is release is quick release to address a couple of major bugs in 49.9. Please see [the release notes for 49.9](https://megamek.org/2022/09/07/New-Development-Release-v0.49.9.html) for everything added in 0.49.9.

Going to reiterate this comment.  As mentioned in the [49.9](https://megamek.org/2022/09/07/New-Development-Release-v0.49.9.html) Dev release notes this release is improved for stability but still isn't where we want it.

We know from experience that when we say this players generally stay away. But you can run both a stable release (0.48.0 or good dev release 0.49.7) you just need to keep them in separate folders. Remember that MekHQ campaign files **aren't** backwards compatible so if move your campaign from an earlier version to this you can't go back. But you can keep backups and play in both versions to see the difference.

## MegaMek

As mentioned 49.9 had a couple of critical bugs (Ammo crash and Mini-Map issues) in it and this release addresses those.

## MegaMekLab

No Changes in this release

## MekHQ

No Changes in this release

### MekHQ StratCon Alpha

No Changes in this release

## Stable 0.50.0 Status Update

We are still working on the development portion of the current dev cycle. Primarily, we need to handle player Java 17 support (currently blocked by bugs in Gradle, our build language, when it comes to multi-project builds), player save game issues (currently blocked by the above and Jackson or Moshi support), and connection stability issues (there's been regular connection stability reports since our early dev releases in this cycle, without traceable causes).

Until we resolve these issues we can't move ahead with a new Stable, and we have no ETA for this. With a milestone of 0.50.0 we need to make sure we get it right.

## Java 11

We've updated to Java 11, which means you'll need to update to use the **0.49.x development branches**. As Java is now open source, we recommend [Adoptium Temurin 11](https://adoptium.net/index.html?variant=openjdk11). We have a help page [for Windows](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) and [Mac](<https://megamek.org/wiki/mac_issues.html>). Further, for Linux, you should be able to use your package manager to install Adoptium Temurin from their repository. Finally, all our automated tests (with the exception of MegaMekLab) are done with Temurin 11.

**This is VERY important** - We don't support any version of Java higher than **Java 11**. Making sure when downloading and installing you are grabbing Java 11, Java 17 in particular breaks the programs hard!!

## Social Media

We are also happy to announce we have an [official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). This is now our primary community location for the suite, providing superior voice support, individual channels, and assistance for the [official public servers](https://megamek.games).  There are also the following community Discords with regular MegaMek channels, namely [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52). We are also on Facebook, at [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek) for our group and page respectively.

## Slack end of life

When we started the Slack, we wanted to move the MegaMek community from forums to a more interactive platform. While in the beginning the Slack had a small active community it's just never taken off like we hoped.

We've made the decision to open a MegaMek Discord after seeing the success of the MegaMek channels in other Discords. Since opening the Discord it's grown to 1900 members with 800-900 active members and is much busier and interactive than the Slack has ever been. The Discord platform has allowed us to better support players with things like voice channels linked to dedicated servers.

After careful review and discussion among the Devs we decided to close the Slack June 1st, 2022. We feel it will be more effective to focus and continue to build the community on [Discord](https://discord.gg/u2vJ5U2QpD).

We thank everyone who's been part of this community and for those that haven't please join us on the Discord

## Mac Users

[Please](https://megamek.org/wiki/mac_issues.html) check out this workaround for Mac Operating Systems.

## Contributing

[Please]({{ site.baseurl }} {% link wiki/i_want_to_help.md %}) check out this document for contributing to the suite. Deadborder has us covered from land unit sprites and camos. But we desperately need sprites for aerospace units.

## Updating Your Campaign

1. Make backups of your campaigns and customs.
2. Always treat each release as a stand alone release and only copy your data forward from older versions, never backwards.
3. Do not copy MegaMek saves nor any preference file from a different version.

## Change Logs (Release Specific) and Download Links

### MegaMek Change Log

[DOWNLOAD](https://github.com/MegaMek/megamek/releases/tag/v0.49.10)

+ Data: Shorten RAT names for FM3145
+ PR #3887 - Excised Rumble Seat and move to Legacy quirk.
+ PR #3886 - Simplify handling of submunition names
+ Issue #3880 - Respect the setting for showing incline graphics
+ PR #3882 - Base Components: DefaultScrollablePanel
+ Issue #3895 - fix minimap NPE

### MegaMekLab Change Log

[DOWNLOAD](https://github.com/MegaMek/megameklab/releases/tag/v0.49.10)

+ No Changes in this release

### MekHQ Change Log

[DOWNLOAD](https://github.com/MegaMek/mekhq/releases/tag/v0.49.10)

+ No Changes in this release

Enjoy everyone!
