Hi Everyone,

In our recent [State of the Universe](https://megamek.org/2024/01/19/State-of-the-Universe!.html) update, we committed to transparency regarding when we would switch Java versions. We know that the transition from Java 8 to 11 caused confusion (due to Oracle open-sourcing Java) which was felt as soon as we launched the 0.49.x Development cycle on May 1, 2021.

**Java 11** is now effectively End of Life (EOL), prompting the need to plan the move to **Java 17**. While many developers have been using **Java 17** for testing and playing for a couple of years, we haven't been actively coding in it. What does "actively coding" mean? Each version of Java introduces new tools and coding methods, leading to more efficient programs and expanded possibilities for coders. For example, this code:

<img src="https://i.imgur.com/35NSq8Y.png" alt="First Image" width="300"/>

becomes

<img src="https://i.imgur.com/fHwt26x.png" alt="Second Image" width="300"/>

These improvements allow us to do more with more efficient code.

Currently, we've released **0.49.19.1-Milestone** and started development on **0.49.20-Development**, which requires a minimum of **Java 11**. Those following our trackers and discussions in Discord have heard about our efforts to improve old code and explore new game types (looking at you, Strategic BattleForce).

### **Where does this leave us?**

We're planning to move the projects to **Java 17**, which has Premium support until September 2026, when it reaches its end of life.

Here's our current plan:

### **End of the 0.49.x Development Cycle**

<table>
  <tr>
    <th>Required to Play</th>
    <th>Development on</th>
  </tr>
  <tr>
    <td>Java 11</td>
    <td>Java 11</td>
  </tr>
</table>


Estimated for the end of June 2024, this will be the last version supporting **Java 11**. Once released, this will end the 0.49.x-Development cycle.

**0.49.20-Dev:** This is currently in development, and that development will continue on **Java 11**, meaning players need **Java 11 or 17** to run. While some players are using later versions of Java (18 and beyond) without issues, we only officially support up to **Java 17**. We anticipate this Dev release around the end of June 2024. This will be the last version supporting **Java 11**. Once released, this will end the 0.49.x-Development cycle.

### **0.50.x Development Cycle:**

<table>
  <tr>
    <th>Required to Play</th>
    <th>Development on</th>
  </tr>
  <tr>
    <td>Java 17</td>
    <td>Java 17</td>
  </tr>
</table>


We anticipate the release of **0.50.0-Development Release** and the start of the **0.50.x-Development** cycle, which requires **Java 17**, to occur later in the summer (August/September 2024).

This cycle will require **Java 17** to play. We will also begin using **Java 17** for coding. During this cycle, we will start testing **Java 21** and will provide more details on **Java 21** as the cycle progresses.

Additionally, at some point in the 0.50.x series, we will be adding [Sentry](https://sentry.io/welcome/) error tracking to help us gather more details on errors when they occur, enabling us to fix them sooner. Due to potential privacy issues with analytics and error tracking, this feature will be **opt-in** by default. We do encourage you to enable it so we can collect error data, but it will **NOT** be mandatory. When we get closer to launching this feature, we will provide more details on how to opt-in.


### **0.51.x Development Cycle: (Estimated Summer/Fall 2026)**

<table>
  <tr>
    <th>Required to Play</th>
    <th>Development on</th>
  </tr>
  <tr>
    <td>Java 21</td>
    <td>Java 21</td>
  </tr>
</table>


To be clear, this isn't likely to hit until **Java 17** reaches end of life (September 2026). This cycle would code on **Java 21** and require **Java 21** to play.

### **What do you need to do today?**

If you’re comfortable with **Java 11**, you can stay on **Java 11** until we start the 0.50.x Development Cycle. If you are comfortable with upgrading to **Java 17**, we encourage you to make the upgrade. The upgrade would would follow the same process as updating to Java 11, but selection Java 17. For a refresher see the [Updating to Adoptium](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) guide.

There will be an announcement once we've switched to **Java 17**. Once you see releases labeled with **0.50.x-Development or 0.50.x-Milestone**, you will require **Java 17**.

If you want to prepare and help us out, [upgrade to Java 17](https://github.com/MegaMek/megamek/wiki/Updating-to-Adoptium) now and continue playing. Report any issues you find [on our GitHub Trackers](https://github.com/MegaMek/megamek/wiki/Creating-an-Issue-%28Bug-Report%2C-Request-for-Enhancement%2C-Errata%29).

### Stay Connected with our Discord.
One final thing, if you aren't a remember of our Discord please join to keep up to date with the latest news and updates. You can join [here](https://discord.gg/megamek).