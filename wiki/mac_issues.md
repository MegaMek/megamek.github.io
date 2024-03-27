---
layout: info_page
title: Mac Issues
---

### Java On Mac

This has gotten simpler over the years. previously you would have had to install Homebrew and walk through a process to get it setup. Now, it is as simple as running a Package Installer. The recommended installer can be found [here](https://adoptium.net/temurin/releases/?os=mac&version=17) and this is preset to use the recommended version of Java for the latest development release (17 LTS). If you intend to do Java Development, get the JDK (Java Development Kit) version, otherwise get the JRE (Java Runtime Environment) version. As of 03/27/2024 there are 2 active processor platforms for macOS, x64 for Intel and aarch64 for M-Series.

### MegaMek Installation

Now that that is out of the way, let's get to the hard part! Due to the increased security of macOS in recent releases, running any of the MegaMek programs from the Downloads folder will fail... horribly. To solve this, all we have to do is move them OUT of the Downloads folder. We recommend creating a `Games` folder in your home directory and placing the uncompressed files in there.

Note: The `Downloads`, `Documents`, and `Desktop` folders are macOS protected folders and MegaMek will not run from these locations. In addition, if you have iCloud set to sync these folders, it is possible some files will get "deleted" locally and cause issues even if you could get MegaMek to load.

After that, on first load of the JAR files, you'll need to right-click and select open. A dialog will appear mentioning that you downloaded the file from the internet, from a (most likely) Amazon domain, and asking if you are absolutely sure you wish to run it. Hit yes. After that, you can double click the JAR file and it'll load like any other program without any known issue.

Any time you update to a newer version, you'll need to repeat these steps of right-clicking to open on first run.
