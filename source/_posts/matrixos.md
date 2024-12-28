---
title: matrixOS
excerpt: CLI OS-like thing for HUB75 LED matrix panels, powered by Teensy 4 with the SmartLED Shield.
date: 2024-04-02
tags:
- Embedded Systems
- Audiovisual
- C/C++
- Arduino
---
{% cli_prompt matrixos mpv demo.mp4 %}
{% youtube my4MEbugbas %}
{% cli_prompt matrixos cat matrixos.md %}
`cat: warning: this is a placeholder. continue anyway? y`

{% code line_number:false %}
                          __                __             ______    ______  
                         |  \              |  \           /      \  /      \ 
 ______ ____    ______  _| $$_     ______   \$$ __    __ |  $$$$$$\|  $$$$$$\
|      \    \  |      \|   $$ \   /      \ |  \|  \  /  \| $$  | $$| $$___\$$
| $$$$$$\$$$$\  \$$$$$$\\$$$$$$  |  $$$$$$\| $$ \$$\/  $$| $$  | $$ \$$    \ 
| $$ | $$ | $$ /      $$ | $$ __ | $$   \$$| $$  >$$  $$ | $$  | $$ _\$$$$$$\
| $$ | $$ | $$|  $$$$$$$ | $$|  \| $$      | $$ /  $$$$\ | $$__/ $$|  \__| $$
| $$ | $$ | $$ \$$    $$  \$$  $$| $$      | $$|  $$ \$$\ \$$    $$ \$$    $$
\ $$  \$$  \$$  \$$$$$$$   \$$$$  \$$       \$$ \$$   \$$  \$$$$$$   \$$$$$$ 
{% endcode %}

by [me](https://github.com/slaugaus), [@cbialorucki](https://github.com/cbialorucki), and [@Jakedez](https://github.com/Jakedez)

OS-like thing for HUB75 LED matrix panels, powered by Teensy 4 with the SmartLED Shield.

## Library Credits

[SmartMatrix](https://github.com/pixelmatix/SmartMatrix)

[PNGdec](https://github.com/bitbank2/PNGdec/) [MUST USE VERSION 1.0.1, VERSION 1.0.2 DOES NOT WORK] and [JPEGDEC](https://github.com/bitbank2/JPEGDEC/)

[GifDecoder](https://github.com/pixelmatix/GifDecoder) (depends on [AnimatedGIF](https://github.com/bitbank2/AnimatedGIF))
* [FilenameFunctions](https://github.com/pixelmatix/GifDecoder/tree/master/examples/SmartMatrixGifPlayer), with some modifications, from GifDecoder example sketches

Teensy built-in libraries, notably [USBHost_t36](https://github.com/PaulStoffregen/USBHost_t36)

{% cli_prompt matrixos blinky %}
