---
layout: info_page
title: A First Campaign of MekHQ
author: Taharqa (0.44.0 Guide), Windchild (Prefix)
---

### A First Campaign of MekHQ

We recommend reading the Against the Bot Starter Guide, located in the docs/AtB Stuff folder, and using it to get started with MekHQ. This holds true even if you are not playing an Against the Bot campaign, as that is our most up to date document on setting up and running MekHQ.

### A First Campaign of non-Against the Bot MekHQ in 0.44.0

Prefix: This tutorial was written for 0.44.0, and is thus somewhat out of date for the current version of MekHQ.

In this step-by-step tutorial, I outline how to start up a very simple MekHQ campaign, assign units and pilots, and run a first scenario. For this example, I am going to go classic and run a [Refusal War](https://www.sarna.net/wiki/Refusal_War) campaign as Clan Wolf that is loosely based on the excellent [*The Falcon and the Wolf* scenario pack](https://www.drivethrurpg.com/product/107737/BattleTech-The-Falcon-and-the-Wolf?cPath=4328_4541).

1. When you first start up MekHQ, choose `Start a New Campaign`. You will then be presented with a dialog to choose the start date of your campaign. Since I will be playing the Refusal War, I will start my campaign on 24 September 3057.
2. You will now be presented with several different preset campaign types from which you can select an option. These campaign types will set many of the game options for you, although you will still have the opportunity to customize as you like later. For this tutorial, we are going to choose the `Simple Presets` option so that we can get going quickly.
<br />
![preset_selection](/assets/images/first_mhq_game/game_preset.png){:class="img-fluid mx-auto rounded d-block w-50"}
3. You will now be presented with a dialog that gives you a multitude of options to customize the campaign to your liking. On the first tab, you will want to assign a name for your campaign, select a faction, and select a camo. I have also made a few other minor tweaks that are not essential.
    1. On the Repair and Acquisition tab, I lowered the minimum transit time for deliveries to zero so that parts I acquire are instantly available.
    2. On the personnel tab, I de-selected `Capture Prisoners in scenario` because I don't want to bother with the extra management of bondsmen.
    3. On the Rank System tab, I chose the `Clan rank system`.
    4. On the Name and Portrait Generation tab, I de-selected automatic portrait generation for Mechwarriors, because I want to choose my own portraits.
<br />
    ![preset_selection](/assets/images/first_mhq_game/game_options.png){:class="img-fluid mx-auto rounded d-block w-75"}
4. You will now be presented with the main MekHQ application which contains many tabs and a lot of functionality. I am going to start by adding my meks and pilots, and then I will organize them into a TO&E for a scenario. First, I turn `GM Mode` on with the button in the upper right. This will allow me to take certain actions that I wouldn't be able to do otherwise.
5. I can hire my Mechwarriors as a group by going to the `Marketplace > Hire Personnel in Bulk` menu item. Since i will run a full trinary, I need fifteen Mechwarriors. I start them all at the rank of Warrior. MekHQ will randomize their skill levels using the random generations guidelines set up in the campaign options.
<br />
![hire_personnel](/assets/images/first_mhq_game/hire_personnel.png){:class="img-fluid mx-auto rounded d-block w-50"}
    Once you hit `Hire`, a report about the new Mechwarriors will appear in the daily log to the right. All important happenings are shown in this daily log. If I move over to the `Personnel tab`, I can see my fifteen new Mechwarriors.
<br />
![personnel_tab1](/assets/images/first_mhq_game/personnel_tab1.png){:class="img-fluid mx-auto rounded d-block w-75"}
6. I sort my Mechwarriors by skill level and make my most skilled Mechwarriors the officers. I can do this by right-clicking on a person, which brings up a context menu with a lot of options. I want to use the `Rank` selection option at the top to change ranks. I also want my Star Captain to have the same name used in the canon *The Falcon and The Wolf* scenario pack. To do that, I right-click again and go all the way down to `GM Mode` at the bottom and then to `Edit...`. From the pop-up dialog, I can change any characteristic about my personnel, including their name. Finally, I use the `Change Portrait` option from the right-click menu to give portraits to all of my Mechwarriors. Note that the portraits I am using here are not included with MekHQ and are from my own collection. However, you can find a lot of useful portrait packs in the community for your own use. I can also use the `Graphic` View at the top to get a nice view fof my team.
<br />
![personnel_tab2](/assets/images/first_mhq_game/personnel_tab2.png){:class="img-fluid mx-auto rounded d-block w-75"}
7. Now, lets get these Mechwarriors some meks! Go to `Marketplace > Purchase Unit`. From this dialog, you can find and select units. You can use the `Buy` option to acquire units, but this may force you to make an acquisition roll, spend money, and wait for delivery depending on your game option settings. Alternatively, you can use the `Add (GM)` button to just add the unit directly, bypassing all of the acquisition rules. Since, I have generated a trinary of meks by hand based on the rules in *The Falcon and The Wolf* scenario pack, I will use the GM button to add my units. Once you are finished, you can close this dialog. Your new units will appear in the `Hangar tab`.
<br />
![hangar_tab1](/assets/images/first_mhq_game/hangar_tab1.png){:class="img-fluid mx-auto rounded d-block w-75"}
8. I can now assign pilots to each mek. I do this from the `Personnel tab`. Right click on a pilot and then choose `Assign to Unit` and pick the unit you want. Continue until all pilots are assigned a mek. The personnel tab view is looking pretty complete now.
<br />
![personnel_tab3](/assets/images/first_mhq_game/personnel_tab3.png){:class="img-fluid mx-auto rounded d-block w-75"}
9. We can now build the TO&E. Lets go over to the `TO&E tab`. The top level force here says "My Campaign." Right-click on that to change the name. I am going to start my organization at the Galaxy level even though I only have a trinary, just for the flavor. So I name this top level force "Beta Galaxy." I also change the icon using the right-click menu. Luckily, there was already an icon for Clan Wolf Beta Galaxy. You can add your own icons by placing them in the `data/images/force` directory.
10. I now want to add a new sub-force. I right-click on my top force and choose `Add New Force`. I name this force "352nd Assault Cluster." Now, if I double-click on the top level organization, it will open up my full TO&E. I add an additional sub-force to the 352nd Assault Cluster for my trinary. Then within the trinary, I add three different stars. You can also play around with building force icons from `Layered Icons` for a slick military look.
<br />
![toe1](/assets/images/first_mhq_game/toe1.png){:class="img-fluid mx-auto rounded d-block w-75"}
11. Now that I have my organization set up, I can drop units into the specific Stars. Just right-click on a given force and choose `Add Unit` to bring up a list of currently unassigned units. Assign all of your units and you will have a complete TO&E.
<br />
![toe2](/assets/images/first_mhq_game/toe2.png){:class="img-fluid mx-auto rounded d-block w-75"}
12. We are ready for action. This is probably a good time to save my campaign from the `File > Save Campaign` menu option. MekHQ will save your save games in the `campaigns` directory. It will automatically choose a name based on the campaign name and the date of the campaign, but you can change the file name if you like.
13. Now I can go to the `Briefing Room tab` and set up a scenario. First, I need to add a new mission. Missions are collections of scenarios that might be tied together in some way, such as part of a mercenary contract or planetary assault. Since my first scenario will be during the trial of possession over the planet of Colmar, I set "Colmar" as my first mission name and location. Then I use the `Add Scenario` button to add the scenario "Cutting Teeth" to this mission. I could also add some narrative text here for flavor, but I won't do that right now.
<br />
![briefing_room](/assets/images/first_mhq_game/briefing_room.png){:class="img-fluid mx-auto rounded d-block w-75"}
14. I need to assign units to my scenario. To do this, I move back over to the `TO&E tab`. I can choose any force or individual unit on the TO&E and right-click on them. Then I use the `Deploy Force` option to deploy my force to the scenario. If you return to the `Briefing Room tab`, you will see the forces listed for the scenario.
15. Now I can start the game. I have two options here:
    1. Use the `Start Game`. This will open up a game of MegaMek and assign my deployed forces into the game. From there I can assign OpFor and play against the bot or another human player. If I save my game and quit, I will be able to use the `Load Saved Game` to start up MegaMek from within MekHQ at a later time.
    2. Use the `Export MUL file` option to export my forces to a separate file that can be loaded into MegaMek from the `Load Unit List` button in the lobby. This is useful if you want to play on a dedicated server.
16. Once I am finished with my game and have declared either victory or defeat, I will be able to resolve the scenario in MekHQ. If you are running MegaMek from within MekHQ, then scenario resolution will automatically begin once you reach the victory screen in MegaMek. If you played on MegaMek separately, then you will be given an option to save your final file in MegaMek. You can then use the `Resolve Manually` button in MekHQ to load this file and begin scenario resolution.
17. Scenario resolution will ask you if you controlled the battlefield. This is used to determine whether you have access to all of that nice salvage smoking away on the battlefield. You will then be taking through a variety of dialogs that give you the status of your units, personnel, and salvage. You can edit any information here to your liking.
<br />
![resolve_scenario](/assets/images/first_mhq_game/resolve_scenario.png){:class="img-fluid mx-auto rounded d-block w-50"}
18. I have completed my first scenario. However, my units got pretty beat up. I should probably get them fixed up. I will need to add some MekTechs to my campaign in order to repair my units. I can use the same `Marketplace > Hire Personnel in Bulk` menu item to hire fifteen MekTechs. Each of those techs requires a team of six assistant techs (astechs) to be effective. I could hire a bunch of astechs to solve that problem. However, I can also hire a pool of temporary astechs that I don't need to track as separate personnel. To do this, I use the menu to go to `Marketplace > Astech Pool > Bring All Tech Teams to Full Strength`. On the bottom of the screen, the total number of temporary astechs will now be showing. Finally, I will need to use the `Advance Day` button to assign available minutes of work to my tech teams.
19. I can now move over to the `Repair Bay tab` where I will see a list of all my damaged units. Selecting a unit will bring up an overview of the unit and a list of all the repair tasks that need to be completed in order to fix up this unit.
<br />
![repair_bay1](/assets/images/first_mhq_game/repair_bay1.png){:class="img-fluid mx-auto rounded d-block w-75"}
20. Unfortunately, all of my tasks are greyed out because I have no available supplies for repairs. To get supplies, I click on the `Parts Acquisition` button. This will bring up a dialog that shows all of the various parts required in order to complete repairs, with various options about how to acquire them. Since I have set up automatic and instantaneous acquisition, I will just select the `Order All` button. Depending on how you have set up your game options, parts ordering could require successful acquisition rolls, cost money, and take time for delivery. Remember to plan ahead!
<br />
![part_acquisition](/assets/images/first_mhq_game/part_acquisition.png){:class="img-fluid mx-auto rounded d-block w-75"}
21. When I return to the `Repair Bay tab`, I will now be able to complete repairs with my new parts. When you select a repair task and a tech, you will be shown the target number and modifiers for successfully completing the task. Hit `Do Task` to attempt the repair. Keep in mind that, under the standard rules, if a tech of a certain skill level fails a repair then that repair can only be done by a tech of a higher level. Also keep an eye on how much time each repair takes and how much time your tech has left. If a tech takes on a repair without sufficient time, it will not be completed until the next day. You can also right-click on a task to explore options to reduce time and/or the target number.
<br />
![repair_bay2](/assets/images/first_mhq_game/repair_bay2.png){:class="img-fluid mx-auto rounded d-block w-75"}
22. I focus first on getting my units fit for the next battle and then I can focus on salvaging or repairing any enemy units. Once everything is fixed, I am ready for the next battle of the campaign!
