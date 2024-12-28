---
title: Visual JSON Editor
excerpt: JSON viewer/editor GUI for VS Code that looks like its settings page.
date: 2024-12-13
tags:
- VS Code
- TypeScript
- Web
---
{% cli_prompt jsonedit cat jsonedit.md %}
`cat: warning: this is a placeholder. continue anyway? y`

Open JSON files in a GUI that looks (kind of) like the VS Code settings page! Includes type changing, item rearrangement, undo/redo, and assistance with colors, dates, and times.

## Features

### Edit Names & Values

Names are validated:

![](rename.gif)

Strings have multi-line support:

![](string.gif)

Numbers are validated and aren't constrained by JS limits:

![](number.gif)

Booleans become checkboxes:

![](bool.gif)

Full support for object and array nesting:

![](obj.gif)

6-digit hex codes give you the Chromium color picker:

![](color.png)

Finally, ISO 8601 zoneless date-time strings give you the Chromium `datetime-local` picker:

![](datetime.png)

### Type Conversion

Convert certain types of item to other types using the dropdown box.

![](type.gif)

If something's "stuck" as a certain type, use the clear button to nullify it and try again.

![](clear.gif)

### Rearrange Items

Use the up and down arrows to move an item around the "layer" it's in.

![](move.gif)

### Theme Compatible

All colors are pulled from your current color theme.

![](theme-collage.png)

{% cli_prompt jsonedit blinky %}
