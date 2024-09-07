---
title: Bullet Heck!
date: 2018-05-04
tags:
  - Pygame
  - Games
  - Python
---

<!-- TODO: A canvas#bh-bg is needed, likely in the theme. And what about the script?  -->

<p class="command">[visitor@portfolio bulletheck]$ ./cool-background &amp; <br>
    [1] 573 <br>
    Running cool background. <a id="toggle-bg">Click here to turn it off.</a><br>
    [visitor@portfolio bulletheck]$ mpv demo.mp4</p>

{% youtube _FGTeRFonkE %}

<p class="command">[visitor@portfolio bulletheck]$ cat bulletheck.md</p>

<p class="centered"><a href="https://github.com/slaugaus/bullet-heck" target="_blank">View on GitHub</a> |
    <a href="https://github.com/slaugaus/bullet-heck/releases" target="_blank">Download</a>
</p>

Even though I made it in high school, this is still one of my biggest/most ambitious programming projects. Officially titled "Creating a 2D Video Game with Python," I first learned the language from various library books, then applied the experience to an original project. It met my school's requirements of 25 hours of work and covering the criteria of "career-based" (potential job skills) and "personal challenge."

![Player ship](bh-ship.gif)

The game itself is a 2D horizontal space shooter called “Bullet Heck!” with abstract “fake 3D” player and enemy graphics (made in Blender and rendered to .png sequences). There are 6 types of enemy that show up over time, 4 levels of weapon upgrades for your ship, and an endless score-attack gameplay loop with scaling difficulty. Thanks to the "pickle" library, your high score is saved between sessions.

<!-- TODO: Theme needs a custom tag for aligning images. Probably also use them for .command, .centered, etc. -->
![Health pickup](bh-heal.gif) ![Powerup pickup](bh-power.gif)

Admittedly, it's not incredibly hard, hence the "heck" instead of "hell." Your ship has a tiny hitbox, 3 hit points that can be refilled, AND 3 lives.

![Enemy 1](bh-enemy1.gif) ![Enemy 2](bh-enemy2.gif) ![Enemy 3](bh-enemy3.gif) ![Enemy 4](bh-enemy4.gif) ![Enemy 5](bh-enemy5.gif) ![Enemy 6](bh-enemy6.gif)

Enemies spawn on a timer, which gets shorter the higher your score is. Only enemy #1 spawns at first, but the other 5 become available as your score increases. They all have the potential to drop a health or powerup sphere when blown up.

From left to right:

1. Small "tri-torus": Rolls straight forward.
2. Big "tri-torus": Also rolls straight forward, but has more health and drops 2 items!
3. Enemy ship: Fires a bullet in one of 4 preset directions. Maybe its aim computer is broken?
4. Circle thing #1: Spins and fires 2 bullets.
5. Circle thing #2: Spins and fires 4 bullets.
6. Circle thing #3: Spins and fires 6 bullets.

![Explosion](bh-boom.gif)

Using the tkinter library, I also wrote a launcher program for editing settings before you play. There's even configurable gamepad support!

![Bullet Heck! Launcher 1](bh-launcher1.png) ![Bullet Heck! Launcher 2](bh-launcher2.png) ![Bullet Heck! Launcher 3](bh-launcher3.png)

### Credits

* Explosion graphics generated at the now-defunct [explosiongenerator.com](https://web.archive.org/web/20211129212300/http://explosiongenerator.com/) (Internet Archive link)
* Sound effects obtained from [zapsplat.com](https://www.zapsplat.com)
* Font is "Uno Estado" by Dan Zadorozny (Iconian Fonts)
* Music is "Space Fighter Loop" by Kevin MacLeod (incompetech.com), licensed under CC BY 3.0

<p class="command">[visitor@portfolio bulletheck]$ <span class="blinky">█</span></p>
