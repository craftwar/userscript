// ==UserScript==
// @author craftwar
// @name Spotify song-name helper
// @description Make craftwar's obs plugin (https://craftwarblog.blogspot.com/2018/01/obs-plugin-playing-song.html) able to get Spotify song name.
// @copyright 2019, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL https://github.com/craftwar/userscript/tree/master/Spotify-song-name-helper
// @version 0.1.20190602
// @namespace github.com.craftwar
// @match https://open.spotify.com/*
// @grant none
// @run-at document-end
// @inject-into content
// ==/UserScript==
// inject-into content for Violentmonkey, default mode page is not working
// ref: https://violentmonkey.github.io/2018/11/23/inject-into-context/

(() => {
const track_observer = new MutationObserver( ()=> {
	if (!document.title.endsWith(" - YouTube"))
		document.title += " - YouTube";
});

const body_element = document.querySelector("body");
track_observer.observe(body_element, {subtree:true, characterData:true});
})();
