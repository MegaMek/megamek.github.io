The best way to manage custom units in Megamek is to create a folder called "Customs" in the `data\mechfiles` folder. Make sure you keep all your custom units in there.

Our recommended way of building custom units is with [MegaMekLab](https://github.com/MegaMek/megameklab/releases). The program is always kept current and currently can build the following unit types.
* Meks (Including Industrial, Super Heavy, Tripod, LAMs)                                                                              
* Aerospace Fighters
* Conventional Fighters
* Combat Vehicles only (vehicles with a BAR rating are currently not supported)
* BattleArmor
* Infantry
* Dropships
* Small Craft
* Jumpships
* Warships
* Space Stations.
* Primitive versions of above units

**Planned for 2019**
* ProtoMeks
* Support Vee's (only ones from TechManual at this time)

Simply build the unit and save it to the customs folder. Make sure the file saves with either it's BLK or MTF (for meks) extension.  Once you start MegaMek the units will be added.

If you can't find the unit in the Unit Selector check the games date, and rules level. As a last option go into the `data\mechfiles` folder and delete the file called units.cache. On restart Megamek will rebuild this file and your custom unit should show up.

**Note on the Construction Rules.**

Units will be constructed and validated against the current construction rules. Refer to CGL Tech Manual, Tactical Operations, Strategic Operations, and Intersteller Operations. These books/PDF's are available from DriveThruRPG or Catalyst Game Labs Store.

The program is not designed to tell you what things do, or special abilities or rules.  We do include a reference to the book and page number for the equipment.

**Other Builders (i.e Heavy Metal Pro, Solaris Skunkwerks, etc)**

We can't guarantee that builders other than MegaMekLab will work with Megamek.  Megamek is a program in constant development, and while we do our best to ensure backwards compatibility it's not always possible.  Other building programs might not keep current with our name systems or file formats. As such this files might not load, or in extreme cases crash Megamek. 

We will always try to help, but we would first recommend rebuilding and saving the unit from MegaMekLab.
