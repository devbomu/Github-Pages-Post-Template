// ==UserScript==
// @name         Github Pages Post Template
// @namespace    http://tampermonkey.net/
// @version      2024-01-11
// @description  Github pages post template for myself
// @author       Bomu
// @match        https://github.com/devbomu/devbomu.github.io/new/master/_posts/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
var $ = window.jQuery;

$(window).on('load', function() {
    var original = '<div class="cm-line"><img class="cm-widgetBuffer" aria-hidden="true"><span class="cm-placeholder" aria-label="placeholder Enter file contents here" contenteditable="false" style="pointer-events: none;">Enter file contents here</span><br></div>';
    var template;
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var currentDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    if (window.location.href == 'https://github.com/devbomu/devbomu.github.io/new/master/_posts/blog') {
        template = `<div class="cm-line">${currentDate.slice(0, 10)}-{TITLE}.markdown</div><div class="cm-line">---</div><div class="cm-line">title: "!!! TITLE HERE !!!"</div><div class="cm-line">layout: post</div><div class="cm-line">date: ${currentDate}</div><div class="cm-line">tag:</div><div class="cm-line">- !!! TAGS HERE !!!</div><div class="cm-line">image: /assets/images/error.gif</div><div class="cm-line">headerImage: false</div><div class="cm-line">projects: false</div><div class="cm-line">description: "!!! DESCRIPTION HERE !!!"</div><div class="cm-line">category: blog</div><div class="cm-line">permalink: /blog/:title</div><div class="cm-line">author: bomu</div><div class="cm-line">externalLink: false</div><div class="cm-line">---</div><div class="cm-line"><br></div>`;
        alert("New blog post!\nPlease wait for a second!");
    } else if (window.location.href == 'https://github.com/devbomu/devbomu.github.io/new/master/_posts/projects') {
        template = `<div class="cm-line">${currentDate.slice(0, 10)}-{TITLE}.markdown</div><div class="cm-line">---</div><div class="cm-line">title: "!!! TITLE HERE !!!"</div><div class="cm-line">layout: post</div><div class="cm-line">date: ${currentDate}</div><div class="cm-line">tag:</div><div class="cm-line">- !!! TAGS HERE !!!</div><div class="cm-line">image: /assets/images/error.gif</div><div class="cm-line">headerImage: false</div><div class="cm-line">projects: true</div><div class="cm-line">description: "!!! DESCRIPTION HERE !!!"</div><div class="cm-line">category: projects</div><div class="cm-line">permalink: /projects/:title</div><div class="cm-line">author: bomu</div><div class="cm-line">externalLink: false</div><div class="cm-line">---</div><div class="cm-line"><br></div>`;
        alert("New project post!\nPlease wait for a second!");
    } else return;
    setTimeout(function() {
        $("div.cm-line").replaceWith(template);
    }, 1000);
});