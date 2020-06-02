We have a new screen coming to MekHQ called the **Command Center**. It also removes and replaces the **Overview** tab. The command center is now the default tab upon starting MekHQ and contains a variety of useful information. Here is a screenshot of it:

<img width="1478" alt="Screen Shot 2020-06-02 at 2 11 10 PM" src="https://user-images.githubusercontent.com/16107446/83570645-46275f80-a4db-11ea-979b-c7d03d60565d.png">

The command center currently includes the following:
- The daily log. This is probably the most significant change. Rather than the double SplitPane fugliness we have lived with forever (and I created), the daily log now lives in the command center. This provides more room for the other tabs to do their own thing. 
- an optional unit icon, for pizazz (Set that in the campaign options)
- A basic information panel that includes a lot of summary information for the unit that would be useful to know. Many of these are summaries of the detailed information contained in the old Overview reports.
- Buttons to pull up dialogs to the reports that used to be included in the overview tab. 
- A procurement panel that includes the current shopping list of the unit as well as buttons for getting stuff. The separate procurement tables in the Hangar and Warehouse tabs have been removed. Note that the "Parts in Use" tool from the Overview tab is included here now as a dialog. 

We've also added a few other graphical elements at other parts of the GUI to support these changes:

<img width="1478" alt="Screen Shot 2020-06-02 at 2 11 34 PM" src="https://user-images.githubusercontent.com/16107446/83571101-014ff880-a4dc-11ea-89dc-8f7227e5058c.png">

The two changes here are:
- The repair bay includes a report of the last repair check, so that users can immediately see whether checks are successful without having to cycle back to the command center. 
- When the daily log gets updated and the user is not on the Command Center tab, the command center tab changes color to red to alert the user to updates. Once they return to the command center tab, the color goes back to normal. Unfortunately, this feature does not seem to work in the Nimbus look and feel. 

## Rationale
The rationale for this change is to consolidate some of the uglier GUI elements (procurement tables, daily log, and overview) that often get in the way of what users actually need to accomplish on a given tab, and re-design user interaction with them in a pleasing way. 

There is plenty of room for expansion in this tab. The procurement panel could be shrunk considerably to allow for other panels such as detailed repair information. scenario information, or whatever.
