// ==UserScript==
// @name         Scratch dark theme
// @namespace    https://boomerscratch.github.io
// @version      0.1
// @description  Turns a lot of things in the scratch editor black by pressing ALT+Q
// @author       BoomerScratch
// @include        *://scratch.mit.edu/projects/*
// @include        *://scratch.mit.edu/projects/*/editor
// @include        *://scratch.mit.edu/projects/*/editor/*
// @include        *://scratch.mit.edu/projects/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', e => {
      if (e.keyCode === 81 && e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
setInterval(function(){var all = document.getElementsByClassName('gui_menu-bar-position_3U1T0 menu-bar_menu-bar_JcuHF box_box_2jjDp');
for (var i = 0; i < all.length; i++) {
  all[i].style.backgroundColor = '#000000';
};
document.getElementsByClassName('blocklySvg')[0].style.backgroundColor = '#000000'
document.getElementsByClassName('sprite-info_sprite-info_3EyZh box_box_2jjDp')[0].style.backgroundColor = '#505050'
document.getElementsByClassName('blocklyToolboxDiv')[0].style.backgroundColor = '#505050'
document.getElementsByClassName('scratchCategoryMenu')[0].style.backgroundColor = '#505050'
document.getElementsByClassName('scratchCategoryMenuItem scratchCategoryId-motion categorySelected')[0].style.backgroundColor = '#505050'
document.getElementsByClassName('stage-selector_stage-selector_3oWOr box_box_2jjDp')[0].style.backgroundColor = '#505050'
document.getElementsByClassName('stage-selector_header_2GVr1')[0].style.backgroundColor = '#505050'
if (document.getElementsByClassName('paint-editor_editor-container_1WLch')[0] == undefined == false) {document.getElementsByClassName('paint-editor_editor-container_1WLch')[0].style.backgroundColor = '#000000';document.getElementsByClassName('asset-panel_detail-area_2KQhH box_box_2jjDp')[0].style.backgroundColor = '#000000'}
if (document.getElementsByClassName('sound-editor_editor-container_iUSW-')[0] == undefined == false) {document.getElementsByClassName('sound-editor_editor-container_iUSW-')[0].style.backgroundColor = '#000000'}},1)
};
    });
})();
