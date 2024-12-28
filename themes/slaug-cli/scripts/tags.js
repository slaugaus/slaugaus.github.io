'use strict';

function flexPics(_args, content) {
    content = hexo.render.renderSync({ text: content, engine: 'markdown' });
    const pics = content.match(/(<a[^>]*>((?!<\/a)(.|\n))+<\/a>)|(<img[^>]+>)/g);
    return `<div class="flex-pics">${pics.join('')}</div>`;
}

hexo.extend.tag.register("flexpics", flexPics, true);

function cliPrompt(args) {
    const postName = args[0];
    let isBlinky = false;
    let cmdText;
    if (args[1] === "blinky") {
        isBlinky = true;
        cmdText = args.slice(2).join(' ');
    } else {
        cmdText = args.slice(1).join(' ');
    }

    let str = `[visitor@portfolio ${postName}]$`;
    if (cmdText)
        str += ' ' + cmdText;
    if (isBlinky)
        str += ' <span class="blinky">█</span>'
    return `<p><code>${str}</code></p>`;
}

hexo.extend.tag.register("cli_prompt", cliPrompt);

function links(_args, content) {
    content = hexo.render.renderSync({ text: content, engine: 'markdown' });
    const links = content.match(/(<a[^>]*>((?!<\/a)(.|\n))+<\/a>)/g);
    return `<p class="centered">${links.join(' | ')}</p>`
}

hexo.extend.tag.register("links", links, true);

function assetScript(args) {
    return `<script src="./${args.join(" ")}"></script>`
}

hexo.extend.tag.register("asset_script", assetScript);

function hiBox(_args, content) {
    content = hexo.render.renderSync({ text: content, engine: "markdown" });
    return `<div id="hi-box" class="ascii-box">${content}</div>`
}

hexo.extend.tag.register("hi_box", hiBox, true);