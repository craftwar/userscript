// ==UserScript==
// @author craftwar
// @name pixiv click show all
// @namespace github.com.craftwar
// @version 0.1.20221002
// @copyright 2022, craftwar (https://craftwarblog.blogspot.com/)
// @license GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @match https://www.pixiv.net/*
// @grant none
// @run-at document-idle
// ==/UserScript==

'use strict';
(() => {
	new MutationObserver((record, observer) => {
		const showAll = document.body.querySelector("button.sc-emr523-0");
		if (showAll)
			showAll.click();
	}).observe(document.body, { subtree: true, childList: true });
})();