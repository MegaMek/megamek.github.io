---
layout: info_page
title: Mac Issues
---

### Apple OSX Security Issues

Because of additional security precautions, the default applications for Mac OSX will not work without some additional effort. These instructions assume some familiarity with OSX and it's command line. If you do not have such familiarity and cannot figure these instructions out, then it is best to ask for help. Instructions work best for OSX power users. 

Alternatively, you can download the Unix/Linux distribution to run the programs on Mac. You simply need to double-click the JAR files to start the program, although you will still need to allow your programs to run using the Secuirty and Privacy instructions below. 

1. Open `System Preferences->Security & Privacy`
2. Click the lock icon to allow changes.
3. Set `Allow apps downloaded from` to `Anywhere`
    * If Anywhere doesn't appear, you will need to open Terminal and run `sudo spctl --master-disable`
    * This does disable some of the built in OSX security assistance. If you don't wish to do this, you will have additional hoops to be able to run the programs.
4. Follow one of the 2 following procedures
    * Unzip using Finder, and then from Terminal issue the following command:
        ```bash
        sudo xattr -r -d com.apple.quarantine /full/path/to/unzipped/folder
        ```
    * Unzip using Terminal with the following command:
      ```bash
      mkdir -p /path/where/you/want/program && tar -jxvpf /path/to/program-mac.tar.bz2 -C /path/where/you/want/program
      ```
