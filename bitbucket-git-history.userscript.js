// ==UserScript==
// @name            Bitbucket Git History
// @namespace       jackymancs4/userscripts
// @version         1.0.0
// @description     Add a button to the bitbucket file interface to see its history
// @author          Giacomo Rossetto <jackyman_cs4@live.it>
// @match           https://bitbucket.org/*
// @updateURL       https://raw.githubusercontent.com/Jackymancs4/git-history-userscript/master/bitbucket-git-history.userscript.js
// @downloadURL     https://raw.githubusercontent.com/Jackymancs4/git-history-userscripts/master/bitbucket-git-history.userscript.js
// @grant           GM_log
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    let parsedURL = new URL(url)

    if (parsedURL.host == "bitbucket.org") {
        GM_log("Bitbucket Git History Userscript: Not implemented yet! Sorry.")
    }
})();
