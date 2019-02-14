// ==UserScript==
// @name            Github Git History
// @namespace       jackymancs4/userscripts
// @version         1.0.1
// @description     Add a button to the github file interface to see its history
// @author          Giacomo Rossetto <jackyman_cs4@live.it>
// @match           https://github.com/*
// @updateURL       https://raw.githubusercontent.com/Jackymancs4/git-history-userscript/master/github-git-history.userscript.js
// @downloadURL     https://raw.githubusercontent.com/Jackymancs4/git-history-userscripts/master/github-git-history.userscript.js
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    const auxUrl = url.split('/');
    auxUrl[2] = 'github.githistory.xyz'
    url = auxUrl.join('/');

    const buttonGithubHistory = document.createElement('a');
    buttonGithubHistory.innerHTML = 'Open in Git History';
    buttonGithubHistory.setAttribute('class', 'btn btn-sm BtnGroup-item');
    buttonGithubHistory.setAttribute('href', url);
    document.getElementById("raw-url").parentNode.appendChild(buttonGithubHistory);
})();
