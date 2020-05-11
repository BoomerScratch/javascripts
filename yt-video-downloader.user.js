// ==UserScript==
// @name         YouTube video downloader
// @namespace    none
// @version      0.1
// @description  Downloads YouTube videos by clicking a button below the video
// @author       You
// @match        *://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    function getYouTubeVideoData(videoID) {
        return new Promise((resolve, reject) => {
            fetch("https://www.youtube.com/get_video_info?video_id=" + videoID,{mode:"no-cors"}).then(res => res.text()).then(data => {
                var urlParams = new URLSearchParams("https://example.com/" + decodeURIComponent(data));
                var param = urlParams.get('player_response');
                var statusparam = urlParams.get('errorcode')
                if(!!statusparam) {reject("Failed to fetch video data")} else {resolve(JSON.parse(param))};
            }).catch(err => reject("Failed to fetch video data"))
        });
    };
    await new Promise((resolve) => {
        setInterval(() => {
            if (!!document.querySelector("ytd-menu-renderer")) resolve(undefined);
        });
    });
    var elem = document.querySelector("ytd-menu-renderer").appendChild(document.createElement("button"));
    elem.innerHTML = "Download this video";
    elem.addEventListener("click",() => {
        getYouTubeVideoData(new URLSearchParams(location.search).get("v")).then(data => {
            fetch("https://cors-anywhere.herokuapp.com/" + data.streamingData.formats[0].url).then(res => res.blob()).then(data => {
                var elem = document.body.appendChild(document.createElement("a"));
                elem.href = window.URL.createObjectURL(data);
                elem.innerText = "dl";
                elem.setAttribute("download","");
                elem.click();
                elem.remove();
            });
        });
    });
})();