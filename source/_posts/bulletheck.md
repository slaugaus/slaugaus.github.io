---
title: Bullet Heck!
excerpt: A simple endless space shooter and my first big project.
date: 2018-05-04
uses_canvas: true
tags:
- Pygame
- Games
- Python
---
`[visitor@portfolio bulletheck]$ ./cool-background &`
`[1] 573`
`Running cool background.` <a id="toggle-bg">`Click here to turn it off.`</a>
`[visitor@portfolio bulletheck]$ mpv demo.mp4`

{% youtube _FGTeRFonkE %}
{% cli_prompt cat bulletheck.md %}

{% links %}
[View on GitHub](https://github.com/slaugaus/bullet-heck)
[Download](https://github.com/slaugaus/bullet-heck/releases)
{% endlinks %}

Even though I made it in high school, this is still one of my biggest and most ambitious programming projects. Officially titled "Creating a 2D Video Game with Python," I first learned the language from various library books, then applied the experience to an original project. It met my school's requirements of 25 hours of work and covering the criteria of "career-based" (potential job skills) and "personal challenge."

{% flexpics %}
{% asset_img bh-ship.gif Player ship %}
{% endflexpics %}

The game itself is a 2D horizontal space shooter called “Bullet Heck!” with abstract “fake 3D” player and enemy graphics (made in Blender and rendered to .png sequences). There are 6 types of enemy that show up over time, 4 levels of weapon upgrades for your ship, and an endless score-attack gameplay loop with scaling difficulty. Thanks to the `pickle` library, your high score is saved between sessions.

{% flexpics %}
{% asset_img bh-heal.gif Health pickup %}
{% asset_img bh-power.gif Powerup pickup %}
{% endflexpics %}

Admittedly, it's not incredibly hard, hence the "heck" instead of "hell." Your ship has a tiny hitbox, 3 hit points that can be refilled, AND 3 lives.

{% flexpics %}
{% asset_img bh-enemy1.gif Enemy 1 %}
{% asset_img bh-enemy2.gif Enemy 2 %}
{% asset_img bh-enemy3.gif Enemy 3 %}
{% asset_img bh-enemy4.gif Enemy 4 %}
{% asset_img bh-enemy5.gif Enemy 5 %}
{% asset_img bh-enemy6.gif Enemy 6 %}
{% endflexpics %}

Enemies spawn on a timer, which gets shorter the higher your score is. Only enemy #1 spawns at first, but the other 5 become available as your score increases. They all have the potential to drop a health or powerup sphere when blown up.

From left to right:

1. Small "tri-torus": Rolls straight forward.
2. Big "tri-torus": Also rolls straight forward, but has more health and drops 2 items!
3. Enemy ship: Fires a bullet in one of 4 preset directions. Maybe its aim computer is broken?
4. Circle thing #1: Spins and fires 2 bullets.
5. Circle thing #2: Spins and fires 4 bullets.
6. Circle thing #3: Spins and fires 6 bullets.

{% flexpics %}
{% asset_img bh-boom.gif Explosion %}
{% endflexpics %}

Using the tkinter library, I also wrote a launcher program for editing settings before you play. There's even configurable gamepad support!

{% flexpics %}
{% asset_img bh-launcher1.png Bullet Heck! Launcher 1 %}
{% asset_img bh-launcher2.png Bullet Heck! Launcher 2 %}
{% asset_img bh-launcher3.png Bullet Heck! Launcher 3 %}
{% endflexpics %}

### Credits

* Explosion graphics generated at the now-defunct [explosiongenerator.com](https://web.archive.org/web/20211129212300/http://explosiongenerator.com/) (Internet Archive link)
* Sound effects obtained from [zapsplat.com](https://www.zapsplat.com)
* Font is "Uno Estado" by Dan Zadorozny (Iconian Fonts)
* Music is "Space Fighter Loop" by Kevin MacLeod (incompetech.com), licensed under CC BY 3.0

{% cli_prompt bulletheck blinky %}
{% asset_script bh-bg.js %}
