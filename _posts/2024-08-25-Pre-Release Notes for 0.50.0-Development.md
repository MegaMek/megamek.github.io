# Pre-Release Notes for 0.50.0-Development

Hi Everyone,

We want to discuss the upcoming 0.50.0 Development release. We know there's a lot of excitement about it, and we must say, we’ve got some great stuff lined up. However, we want to get a few things out there before the release day (very soon) excitement hits and everyone starts downloading.

First and foremost, please remember that the 0.50.0 Development release is **NOT** a MILESTONE Or  Stable release. Stable releases don’t exist anymore (see [Milestone Releases](https://github.com/MegaMek/megamek/wiki/Milestone-Releases) for details). The likelihood of this release being a MILESTONE is very slim; it will likely be similar to the 0.49.0-Development release from a few years ago—a necessary release but included many issues tied to the lobby rework.

# Key Changes coming in 0.50.0

As I discussed in the recent [Sarna interview](https://www.sarna.net/news/community-outreach-dropping-the-hammer-on-megamek/), we’ve reached a point where we’ve moved from considering modernizing our code to needing to modernize our code. The first steps of this transition are included in the 0.50.0 release. Let’s go over some of the key changes you can expect.

## Single/Unified Package Release

We’ve transitioned to a Single/Unified package for our releases. What does this mean? Instead of having separate versions for Windows, macOS, and Linux, we now offer a single download that contains the necessary files for all supported operating systems.

![.tar.gz Example](https://i.imgur.com/aYhWhRn.png)

After downloading the package, you can extract the files and run the program on your system. This change simplifies the distribution process, ensuring that all users are working with the same files, regardless of their operating system.

![Download Package](https://i.imgur.com/SczJ2Cm.png)

## Important Change: We've transition to .tar.gz Files

We’ve moved from using zip files to `.tar.gz` files for our downloads. This widely used archive format combines file packaging and compression, making it easier to manage the large number of files we have in the programs. Using `.tar.gz` gives an efficient way to package and compress files, reducing download sizes, it also helps with consistency across different systems, and also simplifies distribution. 

> **But depending on your operating system, you may need to use different tools to extract these files.**

### Why Use .tar.gz Files?

The `.tar.gz` format is popular in Unix and Linux environments and is also supported on Windows and macOS through built-in tools or third-party applications. It offers several key advantages:

- **Unified Packaging**: With `.tar.gz`, we provide a single download that works on Windows, macOS, and Linux, ensuring all users access the same files in the same version.
- **Efficiency**: This format is highly efficient for managing large numbers of files. For instance, MekHQ includes 933 folders and 16,522 files. Using `.tar.gz` compresses these files into a single, manageable archive, reducing storage requirements and speeding up downloads.
- **Compatibility**: Most modern operating systems and many third-party tools support `.tar.gz` files, making them a versatile choice for our distribution needs.

### Looking Ahead

As our programs continue to expand the data and images, we need to have an efficient data storage and management file. We'll be reviewing and monitoring feedback on the `.tar.gz` format to ensure it meets our needs and those of our users. If you have any questions or concerns about this change, please let us know on our [Discord server](https://discord.gg/megamek).

### How to Extract .tar.gz Files

Here's a quick guide on how to extract `.tar.gz` files on different operating systems:

| Operating System                              | Built-In Support for .tar.gz Files | Recommended Method                                    | Alternate Extraction Method                           |
|-----------------------------------------------|------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| Windows 11 (version 22H2 and later)           | Yes                                | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | Use File Explorer: Right-click the `.tar.gz` file, select "Extract All" |
| Windows 11 (versions before 22H2)             | No                                 | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | Use Command Prompt with `tar -xvzf filename.tar.gz` |
| Windows 10 (version 1803 and later)           | No                                 | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | Use Command Prompt or PowerShell with `tar -xvzf filename.tar.gz` |
| Windows 10 (versions before 1803) & Earlier Versions | No                                 | Use third-party tools: [7-Zip](https://www.7-zip.org/), [WinRAR](https://www.win-rar.com/), [WinZip](https://www.winzip.com/) | N/A                                                   |
| macOS (starting from Mac OS X 10.0 Cheetah, March 2001) | Yes                                | Built-In Tools: Use Finder's built-in Archive Utility, or [The Unarchiver](https://theunarchiver.com/) | Use Terminal with `tar -xzvf filename.tar.gz`         |
| Linux (all major distributions)               | Yes                                | GUI's built-in unarchiver                             | Use Terminal with `tar -xzvf filename.tar.gz`         |


> ### How to Check Your Windows Version
> To determine whether you can extract .tar.gz files natively or need to use a third-party tool, check your Windows version:
>
> 1. Press Windows Key + R to open the Run dialog.
> 2. Type `winver` and press Enter.
> 3. A window will appear displaying your Windows version and build number.


# Java 17 will now required

Starting with version 0.50.0-Development, **Java 17 will be REQUIRED** to play. We’ve updated our guide to [Updating to Adoptium](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) with more detailed instructions.

It’s crucial to read the directions carefully, especially **Step 6**, which covers a recent change to the Adoptium installer. Make sure to select “Install for all users of this machine” in the Installation Scope.

We will continue using Java 17 until Fall 2026. If you choose to use a Java version beyond 17, it isn't officially supported, and our standard answer for issues will be to revert to Java 17. We recommend upgrading to Java 17 before the new release; if you are running 0.49.12-Development or later, it will run on Java 17.

# We also got a lot of good stuff coming. 

While 0.50.0 is a Development release, and the jump to 0.50.0 marks the move us using a new version of Java, there are many other changes in the programs. Here’s a small summary:

### MegaMek:
- Numerous bug fixes, including what we believe are final fixes for SimFire issues.
- Princess AI has been enhanced with a heat mapping feature to better forecast future moves and learn from past rounds, allowing it to move intelligently towards enemy positions even under double-blind conditions. AKA...she can use double-blind now. 
- Improved tools for Princess to generate and select munitions based on faction, era, and game settings.
- Enhanced markers for hit, drifted, and missed artillery and bomb attacks.

  ![Imgur](https://i.imgur.com/2sK7cb6.png)

- Significantly improved Princess's ability to handle hazardous terrain.
- Implemented the ability to place and carry cargo objects (currently for Mechs and ProtoMechs only).


### MegaMekLab:
- Improved record sheet shading.
- Record sheets now display in the unit viewer.


### MekHQ:
- Expanded and developed the [Education Module](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Turnover%20%26%20Retention%20Module.pdf) 
- Added execution and jettison options for prisoners, marking the first steps toward implementing a war crimes rating that will impact unit ratings.
- Improvements to [Autoawards](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Awards%20Module.pdf) and [Turnover & Retention](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Turnover%20%26%20Retention%20Module.pdf)
- Enhanced Force Generator role functions.
- Updated handling of divorce, pregnancy, and death events.
- Added [random personality](https://github.com/MegaMek/mekhq/blob/master/MekHQ/docs/Personnel%20Modules/Random%20Personalities.pdf) functionality (no gameplay impact yet).
- Updated presets, with StratCon now considered out of Alpha and Beta stages.
- Starting to depreciate the FMMr (Field Manual: Mercenaries-Revised) rules and converting to Campaign Ops rules where applicable.

This is just a snapshot of the changes. For full details, please refer to the change logs.

## MekHQ Campaign Files and Updating Guidelines

### Campaign Files Compatibility

MekHQ campaign files are **NOT** backwards compatible. Once you’ve moved your campaign to a newer version, you cannot revert it to an older version. However, keeping backups allows you to play in both versions for comparison.

### Updating Your Campaign

- Always make and keep backups of your campaigns and custom data before updating.
- Treat each release as a stand-alone version. Copy (don’t move) your data forward from older versions, but never backward.
- Do not copy MegaMek saves or preference files from different versions. Each version should have its own distinct set of files to avoid compatibility issues.

# Optional Automated Bug Reporting with Sentry

We’ve integrated [Sentry](https://sentry.io/) into our programs to help monitor and resolve errors more efficiently. Sentry tracks issues in real time, automatically generating detailed bug reports to help us understand and fix problems as they occur. This proactive approach ensures that we can quickly address any issues that arise.

Sentry includes robust features to protect user privacy. It does not track any personal information, and by default, Sentry is turned off. Users can enable it manually by editing a local file, ensuring they have control over their data and reporting preferences.

# Stay Connected with Our Discord

The best way to stay up to date with the latest news, get technical support, and engage with the community is through our Discord server. If you're not a member yet, join us [here](https://discord.gg/megamek) to keep up with everything happening and to connect with other users.

## If you're new to the programs or just want a refresh on our plans and directions here is some further reading

- [State of the Universe!](https://megamek.org/2024/01/19/State-of-the-Universe!.html)
- [Prepare for the Transition to Java 17: Upcoming Changes and How to Stay Updated](https://megamek.org/2024/05/30/Prepare-for-the-Transition-to-Java-17-Upcoming-Changes-and-How-to-Stay-Updated.html)
- [Sarna Community Outreach – Dropping the Hammer on MegaMek](https://www.sarna.net/news/community-outreach-dropping-the-hammer-on-megamek/)

