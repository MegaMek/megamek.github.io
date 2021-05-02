# New Stable 0.49.0
Welcome to the 0.49.x Development cycle, this is the first release in that cycle (0.49.0) and you'll see some massive changes in Megamek and a whole new way to play AtB in MekHQ. But before we get into some specifics on those we need to address a couple of things.

## MegaMek and Java 11
We've have officially made the change to **Java 11**, meaning to use the **0.49.x Development branch** you'll need to update. 

Due to changes in downloading Java that Oracle has made, we are recommending players use [OpenJDK 11](https://adoptopenjdk.net/). We have a help page [for windows](https://github.com/MegaMek/megamek/wiki/Updating-to-OpenJDK) and [macOS.](https://megamek.org/wiki/mac_issues.html) For Linux, you should be able to user your package manager to install OpenJDK from their repositories.

Next this release changes a ton of things in Megamek to accommodate the new lobby. It has been tested but we anticipate there are bugs. But the features of the new lobby make it worth the risk, it addressed 14 major requests for going back years.

In MekHQ we've been teasing it for months and the Alpha is here.

[STRATCON!](https://bg.battletech.com/forums/megamek-games/coming-soon-to-megamek/msg1719781/#msg1719781)

[Stratcon Preview Pic](https://i.imgur.com/e6JVmpz.png)

## MegaMek
Before I get to the lobby here are a few other things this release.
* IP address showing is now blocked by default in the lobby.
* You can refresh the unit cache in game.
* Offboard arty can disengage.
* Air launched Arrow IV's anyone?
* Irregular TRO units have been added.
* Testbot is largely retired and not available.
* Tons of data fixes, new sprites, and some new boards.

Princess has been doing obstacle courses at Blackjack and learning when to stand or not stand after getting knocked down. We know she loves melee so one of her instructors pointed out that when you don't have anything to do grabbing a club can come in handy down the road.

Main Lobby Changes:
*Unifies the tooltip in the lobby and game (while still enabling different views, e.g. the pilot info can be omitted as is done in the lobby mek table) and moves the code out of Entity; the tooltip now shows a different symbol for capital armor. I've introduced many unicode symbols, these require the Java "Dialog" logic font, I hope they work on other systems besides Win10 as well.

* Adds a general GUI scaling float value (neutral value = 1) that is accessible in the Client Settings and, unless a modal dialog is up, with CTRL Numpad+ and CTRL Numpad- . This currently scales mainly the lobby and some dialogs in the lobby that have been revamped.
* Completely revamps the info in the lobby Mektable, obviously. I've tried using colors that are desaturated in the hope this will make the colors readable for everyone. Also, the main colors come from methods that return different colors based on whether the current UI theme is light or dark.
* Allows sorting the Mektable by various algorithms
* Generally shows more info directly in the table such as velocity, height, deployment, partial repairs, C3 info. I've tried to hide stuff that's unnecessary such as height in space and so on to make it all kinda useful
* The lobby now shows if a unit has a problem such as instant death upon deployment or an unconnected C3 computer; the tooltip gives details on the problem (unit cannot survive in vacuum)
Makes the compact mode more useful; it now shows almost the same info as the full mode.
*Revamps the popup menu; it now allows some more unit settings such as C3 configuration and most operations work on multiple units
* Adds toggles to hide unofficial and legacy game options; also adds a Toggle Button that has a checkmark or cross as the normal Java toggle buttons don't show their status really well
* Adds searchlights automatically to all units in circumstances when they're needed
* Revamps the player config and planetary settings dialog
* Revamps the player table; it now allows multi-selection and direct setting of team and deployment via popup, also shows local bots with a symbol
* Makes some dialogs remember their size and position such as the Unit selector and force generator
* Adds Ctrl-S Quicksave and Ctrl-L Quickload. I think this is only useful for development. Ctrl-L works only from the main menu I think.
* The mektable generally remembers column sizes
removes some buttons from the main interface (such as Delete All) and adds a confirm dialog to delete and various other things that shouldn't be insta-kill
* Minefields now actually require the TacOps minefields game option to be active
* Corrects conventional fighter weight classes, use the same as ASF (50t = medium)
* Corrects legal deployment with double blind
* Obviously revamps board selection to graphical drag-n-drop. It can deal with server-side boards (although in this case it can't actually display the real board, just an empty placeholder) and invalid boards.
* Instead of choosing a board at random, the surprise function will now choose a board from a list of boards that can be assigned by selecting the desired boards and dragging them to the preview.
* Board setups can now be saved. I've created some examples from the boards we have
* Adds a smaller mini-map zoom that I neede for those huge maps and a better space mini-map with stars...
* Adds a team overview pane. The table can be detached to a window. It shows the summarized strength of the teams and when one team is selected in the table it shows the relative values (87% of ...)
* Adds ammo to the unit tooltips
* Adds forces to MM and a force tree view to the lobby. Forces currently have no in-game effect. * The game has a Forces object that controls the individual Force objects. The structure is similar to MekHQ's forces although I believe MekHQ has no owner field. Forces can be saved to MUL files and load from there correctly. However it only saves the full force every unit is in, not the forces themselves. When loading a MUL, the force structure is reconstructed from these individual force entries. Therefore, loading from a MUL will always create new forces, never integrate into existing ones. The forces from MekHQ can be transported to MM by using the String representation as Ive done in the MekHQ PR.
* Units in forces and sub forces can be moved up and down by CTRL-Up and CTRL-Down; no multi-selection.
* The mek table and force table allow CTRL-C to copy selected units (forces are ignored). It exports the unit, tonnage, pilot and a few values and pastes mostly well into Excel, although some units have secondary names that don't paste well such as "(3025)" which arrives as -3025 in Excel. Ive found no solution for this that also allows pasting into MM well.
Obviously, the mektable and force table also allow CTRL-V. So it's easy to copy-paste units in MM.
* Also, makes the key binds overlay disappear in the map preview

## MegaMekLab
Only a few bug fixes in the lab. Things will likely be quite with the lab for a bit, the dev focused on it is taking a break.

## MekHQ
We've already mentioned Stratcon. Rank Systems were also completely rewritten and modernized. They are now implemented with full user data folder merge capability, multiple custom rank system support, varied import/export capabilities, file refresh, full validation, and expanded professions. Note that individual ranks were not handled as part of this rework, just the systems and professions.

[Ranks Preview Pic](https://i.imgur.com/AX05snY.png)

The Personnel Options Tab was completely rewritten and reorganized, as the sheer number of options was making it hard to use and tell the difference between areas. Personnel Roles were also heavily modified, part of which was adding the LAM Pilot and Dependent primary role. The latter of which will replace our current handling of dependents (the swap over is done, but the old dependents and the flag do not migrate until the next release).

Additionally, a suite of base components have been created and preferences have been expanded. Keep a watch for the ability to cancel out of dialogs by pressing escape, and having the selected tab remembered between uses, as examples of some of the improvements originating with these standardization changes.

Some other stuff to look for is Improved Refit Tech sorting, Better GM Restore, new force icon pieces, lots of backend work improving stability, and an almost complete rework of custom ranks.



## SOCIAL MEDIA

We are also happy to announce we have an [Official MegaMek Discord](https://discord.gg/u2vJ5U2QpD). It will function like our Slack but gives us better voice support for those who use the [offical public servers](https://megamek.games).

Also a reminder to drop into the [Slack channel](https://bit.ly/2KSu5yQ) to meet other players and harass the Devs that drop in and out. If Slack isn't your thing check out these Discords with MegaMek channels - [Everything BattleTech](https://discord.gg/gyXMWjT) and [Classic BattleTech](https://discord.gg/D9jFn52).

Facebook - [MegaMek BattleTech](https://www.facebook.com/groups/5124394675) and [MegaMek](https://www.facebook.com/MegaMek)

## FOR MAC USERS

We think we now have a [workaround for macOS](https://megamek.org/wiki/mac_issues.html).

Another reminder when moving between versions:

1) Make backups of your campaigns and customs.
2) Always treat each release as a stand alone release and only copy your data forward from older versions.

## CHANGE LOGS (for this release only) AND DOWNLOAD LINKS

### MegaMek

[Download](https://github.com/MegaMek/megamek/releases/tag/v0.49.0)

### MegaMekLab

[Download](https://github.com/MegaMek/megameklab/releases/tag/v0.49.0)

### MekHQ

[Download](https://github.com/MegaMek/mekhq/releases/tag/v0.49.0)

