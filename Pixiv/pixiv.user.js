// ==UserScript==
// @author craftwar
// @name pixiv auto-click show all
// @namespace github.com.craftwar
// @version 0.1.202212.18
// @copyright 2022, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @match https://www.pixiv.net/*
// @grant none
// @run-at document-idle
// ==/UserScript==

'use strict';
(() => {
	let showAll = true;
	window.addEventListener("keydown", (event) => {
		if (event.code == "KeyR") {
			showAll = !showAll;
			if (!showAll) {
				var exitShowAllButton = document.body.querySelector("div.gtm-manga-viewer-close-icon");
				if (exitShowAllButton)
					exitShowAllButton.click();
			} else
				clickShowAll();
		}
	});
	function clickShowAll() {
		const showAllButton = document.body.querySelector("button.sc-emr523-0");
		if (showAllButton)
			showAllButton.click();
	}
	new MutationObserver((record, observer) => {
		if (showAll)
			clickShowAll();
	}).observe(document.body, { subtree: true, childList: true });
})();