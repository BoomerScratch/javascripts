// ==UserScript==
// @name         Custom cursor
// @namespace    boomerscratch.github.io
// @version      0.1
// @description  Press alt+shift+c to upload a custom cursor and use it.
// @author       BoomerScratch
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', e => {
    if (e.keyCode === 67 && e.altKey && e.shiftKey && !e.ctrlKey && !e.metaKey) {
    var x = document.createElement('div')
    x.innerHTML = '<input type="file" style="width: 0; height: 0; position: fixed; left: 0; top: 0;" id="uploadcursor" accept="image/*,.cur"></input>'
    document.getElementsByTagName('body')[0].appendChild(x)
    document.getElementById("uploadcursor").click()
    document.getElementById('uploadcursor').onchange = function() {const cursorFile = document.getElementById("uploadcursor").files[0];document.getElementById("uploadcursor").parentNode.removeChild(document.getElementById("uploadcursor"));const objurl = URL.createObjectURL(cursorFile);var x = document.createElement("style");x.innerText = "body,html {cursor: url('" + objurl + "'), auto}";document.getElementsByTagName('head')[0].appendChild(x)}
    }})
})();
