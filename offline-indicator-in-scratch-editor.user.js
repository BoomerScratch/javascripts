// ==UserScript==
// @name         Offline indicator in Scratch editor
// @namespace    boomerscratch.github.io
// @version      0.1
// @description  Let's you know when you are offline when you are creating Scratch projects.
// @author       BoomerScratch
// @match        https://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var online = 1
    window.addEventListener("online",() => {
        online = 1
    });
    window.addEventListener("offline",() => {
        online = 0
    });

    setInterval(() => {
        if(!!document.getElementsByClassName("gui_menu-bar-position_3U1T0 menu-bar_menu-bar_JcuHF box_box_2jjDp")[0]) {
            if (online==0) {
            if (! !!document.getElementById("offline_msg")) {
            var elem = document.head.appendChild(document.createElement("style"));
            elem.innerHTML = `
.gui_body-wrapper_-N0sA:before {
content:"You are offline.";
display: inline-block;
text-align: center;
color: white;
width: 100%;
background-color: red;
}
body {
overflow: hidden;
}
`;
            elem.id = "offline_msg";
            };
            };
            if (online==1) {
                if (!!document.getElementById("offline_msg")) {
                    document.getElementById("offline_msg").parentNode.removeChild(document.getElementById("offline_msg"))
                };
            };
        };
    });
})();