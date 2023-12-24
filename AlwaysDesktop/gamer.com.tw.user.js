// ==UserScript==
// @author	craftwar
// @name 	Always desktop bahamut
// @description	Redirect mobile bahamut to desktop
// @description:zh-TW	重導到巴哈姆特桌面版網站
// @namespace github.com.craftwar
// @include	https://m.gamer.com.tw/gnn/*
// @version	23.12.24
// @grant	none
// ==/UserScript==
'use strict';
(() => {
	const m = /^https:\/\/m\.gamer\.com\.tw\/gnn\/(.+)/.exec(window.location.href);
	if (m)
		window.location.replace("https://gnn.gamer.com.tw/" + m[1]);
})();
