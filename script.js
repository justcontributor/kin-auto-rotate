/*

MIT License

Copyright 2023 justcontributor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

// ==UserScript==
// @name                지식iN 룰렛 자동 회전
// @namespace           http://tampermonkey.net/
// @version             0.1.0
// @license             MIT License
//
// @grant       none
// @author              justcontributor
// @match               *://kin.naver.com/roulette/home.naver
// @icon                https://kin.naver.com/favicon.ico
// @run-at              document-start
// @inject-into         page
//
// @compatible          firefox Violentmonkey
// @compatible          firefox Tampermonkey
// @compatible          firefox Firemonkey
// @compatible          chrome Violentmonkey
// @compatible          chrome Tampermonkey
// @compatible          opera Violentmonkey
// @compatible          opera Tampermonkey
// @compatible          safari Stay
// @compatible          edge Violentmonkey
// @compatible          edge Tampermonkey
// @compatible          brave Violentmonkey
// @compatible          brave Tampermonkey
//
// @description         Automatically rotates the roulette in kin.naver.com.
// @description:ko      지식iN 룰렛을 자동으로 돌려주는 스크립트입니다.
//
// @supportURL https://github.com/justcontributor/kin-auto-rotate/issues
// @downloadURL https://update.greasyfork.org/scripts/468740/Restore%20YouTube%20Username%20from%20Handle%20to%20Custom.user.js
// @updateURL https://update.greasyfork.org/scripts/468740/Restore%20YouTube%20Username%20from%20Handle%20to%20Custom.meta.js
// ==/UserScript==

setInterval(() => {
  if (!window.nhn.isLogin) return false;

  document.querySelector("#startButton").click();
  if (document.querySelector("#emptyTicketLayer").style.display == "none") {
    setTimeout(() => {
      location.reload();
    }, 50);
  } else {
    location.href = "https://kin.naver.com";
  }
}, 500);
