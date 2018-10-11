---
layout: info_page
title: Mac Issues
---

### Apple OSX Security Issues

Because of additional security precautions, the default applications for Mac OSX will not work without some additional effort. These instructions assume some familiarity with OSX and using the command line from a Terminal. If you do not have such familiarity and cannot figure these instructions out, then it is best to ask for help.

Alternatively, you can download the Unix/Linux distribution to run the programs on Mac. You simply need to double-click the JAR files to start the program, although you still may need to allow your programs to run using the first two instructions below. 

1. Double-click the Mek application you want to run. A pop-up window will appear telling you that it cannot be run because it is from an unidentified developer.
2. Open `System Preferences > Security & Privacy`. You should see an option near the bottom that says you recently tried to open the application. Click the `Open Anyway` button to allow it to open. You shold now be able to double-click this application to open it in the future.
3. The program will still not run properly because the Mac OSX system by default will not allow it to find the data directory because it resides outside of the application itself. Follow one of these procedures to correct this "quarantine" issue: 
    * Issue the following command from a Terminal:
        ```bash
        sudo xattr -r -d com.apple.quarantine /full/path/to/unzipped/folder
        ```
    * When you initially unzip the program, use the following command from a Terminal:
      ```bash
      mkdir -p /path/where/you/want/program && tar -jxvpf /path/to/program-mac.tar.bz2 -C /path/where/you/want/program
      ```

If you do not want to have to follow instructions 1 and 2 each time you download a new version, you can change the overall security settings on your Mac with the instructions below. Just be aware that you are disabling some of the built in OSX security assistance.

1. Open `System Preferences > Security & Privacy` and click the lock icon to allow changes.
2. Set `Allow apps downloaded from` to `Anywhere`. If Anywhere doesn't appear, you will need to open Terminal and run:
  ```bash
  sudo spctl --master-disable
  ```
