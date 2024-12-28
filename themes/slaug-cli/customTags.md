# `slaug-cli` Custom Tag Plugins

## `flexpics`

Arranges images horizontally (places them in a `div.flex-pics` to be styled).

```
{% flexpics %}
![pic 1](pic1.png)
{% asset_img pic2.png pic 2 %}
{% endflexpics %}
```

renders as

```html
<div class="flex-pics">
    <img src="pic1.png" title="pic 1">
    <img src="pic2.png" title="pic 2">
</div>
```

## `cli_prompt postName blinky? cmdText`

Creates a CLI prompt looking thing that might have a blinky square and/or a command typed into it.

```
{% cli_prompt ~ blinky some text here lol %}
```

becomes

```
[visitor@portfolio ~]$ some text here lol █
```

Omit `blinky` to not get a blinky square.

## `links`

Throw the contents into a centered div, separated by |s.

```
{% links %}
[View on GitHub](https://github.com/slaugaus/bullet-heck)
[Download](https://github.com/slaugaus/bullet-heck/releases)
{% endlinks %}
```

renders as

```html
<p class="centered">
    <a href="https://github.com/slaugaus/bullet-heck">View on GitHub</a> |
    <a href="https://github.com/slaugaus/bullet-heck/releases">Download</a>
</p>
```

## `asset_script filename`

Load a JavaScript file from the post's assets folder. Because you really shouldn't be writing HTML in Markdown.

```
{% asset_script bh-bg.js %}
```

renders as

```html
<script src="./bh_bg.js"></script>
```

## `hi_box`

That header box thing on the homepage. Again, because you shouldn't be writing HTML in your Markdown.

```
{% hi_box %}
# Hi!
I'm Austin, a Computer Science student at Brigham Young University-Idaho. Between my self-taught computer knowledge and what I've learned in college, I have quite a bit of experience under my belt:
{% endhi_box %}
```

renders as

```html
<div id="hi-box" class="ascii-box">
    <h1>Hi!</h1>
    <p>I'm Austin, a Computer Science student at Brigham Young University-Idaho. Between my self-taught
    computer knowledge and what I've learned in college, I have quite a bit of experience under my belt:</p>
</div>
```
