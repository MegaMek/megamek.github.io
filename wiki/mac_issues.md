---
layout: info_page
title: Mac Issues
---

### macOS Issues and Solutions

macOS security has strengthened over the years to the point that it makes it difficult to run programs such as the MegaMek suite of programs without jumping through many hoops. The instructions below will attempt to make it easier to use the suite with minimal fuss. This will require some familiarity with the Terminal and installation of additional software. Afterwards, however, using the MegaMek suite of programs will be as simple as double clicking the JAR files.

### Homebrew & OpenJDK

Before we can get to MegaMek, we need to install 2 pieces of support software. Homebrew and OpenJDK.

[Homebrew](https://brew.sh) is a community supported package manager for macOS and Linux. You can use the command below to install.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This utility does NOT need administrator privileges and will install Homebrew into `/usr/local`.

Once installed, the following command will install OpenJDK 11.

```bash
brew install openjdk@11
```

This won't take long to install. This next command WILL require administrator privileges but will make running Java programs easier. The exact line may be different for your setup but will be stated in the output of Homebrew. It'll be listed just after the `For the system Java wrappers to find this JDK, symlink it with` statement.

```bash
sudo ln -sfn /usr/local/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk
```

This links the OpenJDK into a system location which will allow you to simply double click JAR files to open.

### MegaMek Installation

Now that that is out of the way, let's get to the hard part! Due to the increased security of macOS in recent releases, running any of the MegaMek programs from the Downloads folder will fail... horribly. To solve this, all we have to do is move them OUT of the Downloads folder. We recommend creating a `Games` folder in your home directory and placing the uncompressed files in there.

Note: The `Downloads`, `Documents`, and `Desktop` folders are macOS protected folders and MegaMek will not run from these locations. In addition, if you have iCloud set to sync these folders, it is possible some files will get "deleted" locally and cause issues even if you could get MegaMek to load. 

After that, on first load of the JAR files, you'll need to right-click and select open. A dialog will appear mentioning that you downloaded the file from the internet, from a (most likely) Amazon domain, and asking if you are absolutely sure you wish to run it. Hit yes. After that, you can double click the JAR file and it'll load like any other program without any known issue.

Any time you update to a newer version, you'll need to repeat these steps of right-clicking to open on first run.
