---
layout: info_page
title: Mac Issues
---

### The MegaMek Launcher (Recommended)

The [MegaMek Launcher](/downloads.html#launcher-macos) installs MegaMek, MegaMekLab and MekHQ for you. **You don't need Java if you're using the launcher.** It comes built in. Pick the `.pkg` that matches your Mac's chip: Apple Silicon (M-series) or Intel.

Everything below is for a manual install from the `.tar.gz` archive (not recommended, use the launcher).

### Java On Mac

A manual install needs Java 21. Use the package installer from [Adoptium](https://adoptium.net/temurin/releases/?os=mac&version=21), which is preset to the version we recommend (21 LTS). Pick aarch64 for Apple Silicon (M-series) Macs or x64 for Intel Macs. The JRE (Java Runtime Environment) is all you need to play. Get the JDK (Java Development Kit) only if you plan to do Java development.

### Where to Put MegaMek

Due to the increased security of macOS, running any of the MegaMek programs from the Downloads folder will fail... horribly. To solve this, move them OUT of the Downloads folder. We recommend creating a `Games` folder in your home directory and unpacking the archive there.

Note: The `Downloads`, `Documents`, and `Desktop` folders are macOS protected folders and MegaMek will not run from these locations. In addition, if you have iCloud set to sync these folders, it is possible some files will get "deleted" locally and cause issues even if you could get MegaMek to load.

### Starting the Programs

Open Terminal in the folder you unpacked and run the program's script, for example `./MekHQ.sh`. `MegaMek.sh` and `MegaMekLab.sh` start the other programs.

If you'd rather double-click, use the JAR files (`MekHQ.jar`, `MegaMek.jar`, `MegaMekLab.jar`). On the first run you'll need to right-click and select Open. A dialog will appear mentioning that you downloaded the file from the internet, and asking if you are absolutely sure you wish to run it. Hit yes. After that, you can double-click the JAR file and it'll load like any other program.

Any time you update to a newer version by hand, you'll need to repeat these steps of right-clicking to open on first run.
