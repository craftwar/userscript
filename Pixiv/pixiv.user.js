// ==UserScript==
// @author craftwar
// @name tweak pixiv
// @namespace github.com.craftwar
// @description skip confirmation of url jump, press "R" to show all pictures
// @version 2023.11.05
// @copyright 2023, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @match https://www.pixiv.net/*
// @grant none
// @run-at document-idle
// ==/UserScript==

'use strict';
(() => {
	if (window.location.href.startsWith("https://www.pixiv.net/jump.php")) {
		observer = new MutationObserver((record, observer) => {
			if (skipConfirmation())
				observer.disconnect();
		}).observe(document.body, { subtree: true, childList: true, attributes: true });
		if (skipConfirmation())
			observer.disconnect();
		function skipConfirmation() {
			let link = document.body.querySelector("a")
			if (link) {
				link.click();
				return true;
			}
		}
	}
	else {
		let showAll = false;
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
		// new MutationObserver((record, observer) => {
		// 	if (showAll)
		// 		clickShowAll();
		// }).observe(document.body, { subtree: true, childList: true });
	}
})();