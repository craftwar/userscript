// ==UserScript==
// @author craftwar
// @name NightBot-AutoDJ song-name helper
// @description Make craftwar's obs plugin (http://craftwarblog.blogspot.com/2018/01/obs-plugin-playing-song.html) able to get NightBot-AutoDJ song name.
// @copyright 2018, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL https://github.com/craftwar/userscript/tree/master/NightBot-song-name-helper
// @version 0.1.20180208
// @namespace github.com.craftwar
// @match https://beta.nightbot.tv/song_requests*
// @grant none
// @run-at document-end
// ==/UserScript==

let body_element = document.querySelector("body");

let body_observer = new MutationObserver( (record, observer)=> {
	let element = document.querySelector(".current-track > h4:first-child > strong:first-child").childNodes[0];
	if (element) {
		observer.disconnect();

		let song_observer = new MutationObserver( ()=> {
			document.title = element.wholeText + " - YouTube";
		});
		song_observer.observe(element, { characterData: true });
	}
});

body_observer.observe(body_element, { subtree: true, childList: true });
