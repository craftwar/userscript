// ==UserScript==
// @author craftwar
// @name tweak pixiv
// @namespace github.com.craftwar
// @description skip confirmation of url jump, auto-click show all button
// @version 2023.12.02
// @copyright 2023, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @match https://www.pixiv.net/*
// @noframes
// @grant none
// @inject-into content
// @run-at document-idle
// ==/UserScript==

'use strict';
(() => {
	if (window.location.href.startsWith("https://www.pixiv.net/jump.php")) {
		const observer = new MutationObserver((record, observer) => {
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
	} else {
		// press "R" or "ESC" to toggle comic show all
		var showAll = true;
		window.addEventListener("keydown", (event) => {
			if (event.code == "KeyR" || event.code == "Escape") {
				showAll = !showAll;
				if (!showAll) {
					const exitShowAllButton = document.body.querySelector("div.gtm-manga-viewer-close-icon");
					if (exitShowAllButton) {
						exitShowAllButton.click();
					}
				} else {
					clickShowAll();
				}
			}
		});

		function clickShowAll() {
			const showAllButton = document.body.querySelector("button.sc-emr523-0");
			if (showAllButton) {
				showAllButton.click();
				return true;
			}
		}

		const showAllObserver = new MutationObserver((record, observer) => {
			if (clickShowAll())
				observer.disconnect();
		}).observe(document.body, { subtree: true, childList: true, attributes: true });

	}
})();