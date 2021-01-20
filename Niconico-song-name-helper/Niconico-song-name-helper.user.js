// ==UserScript==
// @author craftwar
// @name Niconico song-name helper
// @description Make craftwar's obs plugin (https://craftwarblog.blogspot.com/2018/01/obs-plugin-playing-song.html) able to get song name.
// @copyright 2020-2021, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL https://github.com/craftwar/userscript/tree/master/Spotify-song-name-helper
// @version 0.1.20210120
// @namespace github.com.craftwar
// @match https://www.nicovideo.jp/*
// @grant none
// @run-at document-end
// @inject-into content
// ==/UserScript==
// inject-into content for Violentmonkey, default mode page is not working
// ref: https://violentmonkey.github.io/2018/11/23/inject-into-context/

'use strict';
(() => {
	const suffixes = [" - ニコニコ動画", " - Niconico Video", " - niconico動畫"];
	const fake_suffix = " - YouTube";
	const fix_suffix = () => {
		if (!document.title.endsWith(fake_suffix)) {
			for (const suffix of suffixes) {
				if (document.title.endsWith(suffix)) {
					document.title = document.title.substring(0, document.title.length - suffix.length) + fake_suffix;
					break;
				}
			}
		}
	}

	const title_element = document.querySelector("title");
	const track_observer = new MutationObserver(fix_suffix);
	track_observer.observe(title_element, { childList: true });
	fix_suffix();
})();
