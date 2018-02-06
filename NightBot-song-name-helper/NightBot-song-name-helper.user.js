// ==UserScript==
// @author craftwar
// @name NightBot-AutoDJ song-name helper
// @description Make craftwar's obs plugin (http://craftwarblog.blogspot.com/2018/01/obs-plugin-playing-song.html) able to get NightBot-AutoDJ song name.
// @copyright 2018, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL https://github.com/craftwar/userscript/tree/master/NightBot-song-name-helper
// @version 0.1.20180206
// @namespace github.com.craftwar
// @match https://beta.nightbot.tv/song_requests
// @grant none
// @run-at document-end
// ==/UserScript==

// increase wait_time if it's not working
const wait_time=5000;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(wait_time).then(() => {
  element = document.querySelector(".current-track > h4:first-child > strong:first-child").childNodes[0];
  document.title = element.wholeText + " - YouTube";

  let observer = new MutationObserver( ()=> {
    document.title = element.wholeText + " - YouTube";
  });
  observer.observe(element, { characterData: true });
  
// cross-origin is not allowed, use timer to update
/*
var iframe = document.getElementsByTagName('iframe');
var innerDoc = iframe[0].contentDocument || iframe[0].contentWindow.document;
var videoelement = document.getElementsByTagName('video');
*/
})
