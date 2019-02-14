// ==UserScript==
// @name            Gitlab Git History
// @namespace       jackymancs4/userscripts
// @version         1.0.1
// @description     Add a button to the gitlab file interface to see its history
// @author          Giacomo Rossetto <jackyman_cs4@live.it>
// @match           https://gitlab.com/*
// @updateURL       https://raw.githubusercontent.com/Jackymancs4/git-history-userscript/master/gitlab-git-history.userscript.js
// @downloadURL     https://raw.githubusercontent.com/Jackymancs4/git-history-userscripts/master/gitlab-git-history.userscript.js
// @grant           GM_log
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    let parsedURL = new URL(url)

    if (parsedURL.host == "gitlab.com") {
        GM_log("Gitlab Git History Userscript: Not implemented yet! Sorry.")
    }
})();
