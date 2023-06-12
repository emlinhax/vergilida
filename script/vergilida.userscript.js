// ==UserScript==
// @name         Vergilida
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  uc sux (jk)
// @author       emlin
// @match        https://www.vergiliusproject.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vergiliusproject.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var block = document.getElementsByClassName("c hljs cpp")[0];
    if(block)
    {
        var struct_name = document.getElementsByClassName("h2-tdata")[0].innerText
        var struct_raw = document.getElementById("copyblock").innerText
        block.innerHTML = '<button id="ida-button" onclick="window.vergilida()" class="button btn-info">Download ' + struct_name + '.h [IDA Compatible]</button>' + block.innerHTML

        function dl(filename, text) {
            var el = document.createElement('a');
            el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            el.setAttribute('download', filename);
            el.style.display = 'none';
            document.body.appendChild(el);
            el.click();
            document.body.removeChild(el);
        }

        window.vergilida = function() {
            struct_raw = struct_raw.replace("VOID", "void") //ida doesnt know uppercase VOID for some reason (it does know other uppercase types tho?)
            dl(struct_name + ".h", struct_raw)
        }
    }
})();
