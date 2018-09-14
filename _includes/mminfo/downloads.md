### Installation Instructions

#### Installing Java

MegaMek is a Java based program, so you must have Java 8 (or later) installed on your computer. Download Java [here](https://java.com/en/).

#### Stable vs. Development

We recommend that most users download and use the stable verion of the programs to minimize issues with bugs. The development versions are only for those users interested in testing and bughunting new features. 

#### Installation and Running

To install the programs, unzip the download into the directory of your choice. To run the programs follow the platform specific instructions below. 

##### Windows

To run the programs from Windows, just double-click on the given program icon from within the folder you unzipped. 

##### Unix/Linux

The Unix/Linux releases do not include binaries, but you can run the programs directly from the included JAR files. On some desktops, you may just be able to double-click these JAR files in order to run the programs. you can also run the programs (MegaMek in this example) from the command line with the command:

```java -jar MegaMek.jar &```

##### Mac OSX

Due to Apple's increased security on their newer operating systems, there is an additional step that must be taken to ensure ease of use. Open a terminal window and navigate to the folder where you have decompressed MegaMek, MegaMekLab, or MekHQ into. Once there, run 

```sudo xattr -r -d com.apple.quarantine /full/path/to/unzipped/folder``` 

This command removes the 'Quarantine Bit' that Apple places on downloaded programs as a means of protecting you. Without this step, MegaMek would not be able to locate it's data directories.

You can also run the programs from the Unix/Linux download on Apple. Just double-click the appropriate JAR file and the program should start.
