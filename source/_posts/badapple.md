---
title: Bad Apple!! on TI MSP432
excerpt: Bad Apple on a low-spec microcontroller.
date: 2022-12-13
tags:
- Embedded Systems
- Audiovisual
- C/C++
- Python
---
{% cli_prompt badapple mpv demo.mp4 %}
{% youtube bgwLhES1YYo %}
{% cli_prompt badapple cat badapple.md %}

{% links %}
[View on GitHub](https://github.com/slaugaus/bad-msp432)
{% endlinks %}

[Bad Apple!!](https://archive.org/details/bad_apple_is.7z) ported to the [Texas Instruments LaunchPad MSP432P401R](https://docs.rs-online.com/3934/A700000006811369.pdf), a [black & white LCD](https://www.sparkfun.com/products/10168) (notable for being the same part found in the Nokia 3310 cell phone), and a [DFPlayer Mini](https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299) clone.

This was my final project for ECEN 260 (Microprocessor-Based System Design) at BYU-Idaho. The lab kit had a 2-color LCD in it, and I almost immediately had the urge to play Bad Apple on it using the dev board the class was based around. This covers "Digital I/O," "Display," and "Timers" from the list of 7 concepts we needed to pick from. My professor was "quite impressed," saying it "exceeded expectations, and actually pressed the boundaries of the processor. Good work!"

Video is 32x24 @ 10 fps (upscaled to 64x48), "compressed" losslessly into 2x4 (actually 4x8) characters. Since there just so happen to be 256 different 2x4 characters, one frame is only 96 bytes long. The whole program ends up using 214K of the LaunchPad's 256K. Ironically, my attempt at run-length encoding made the frame array larger (too big for the board). With more time, I would probably experiment more with compression as an attempt to get proper 64x48, but this minimum viable product is enough for the standards I wanted to meet.

The audio is playing from an SD card in the DFPlayer. I wanted to control it with the board's serial mode, but I could not get the MSP432 to send it valid data. Maybe I have the baud rate wrong. Ultimately it doesn't matter, since the DFPlayer also has a "next track button" pin.

All the files needed to run it are in the GitHub repo linked above. The C code can be compiled and flashed to the MSP432 with [TI Code Composer Studio.](https://www.ti.com/tool/CCSTUDIO) (If you're taking ECEN 260, don't you dare pass this off as yours! The professors will recognize it, and you'll be using a different dev board than I did.)

Here's a wiring diagram if you happen to own the hardware and want to try it at home. The DFPlayer is (or should be) optional.

{% flexpics %}
{% asset_img ba-circuit.png Wiring diagram of the circuit %}
{% endflexpics %}

{% cli_prompt badapple blinky %}
