// ==UserScript==
// @name         Hack VectorMagic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://zh.vectormagic.com/images/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vectormagic.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

const observer = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // 监测到DOM变化时的处理逻辑
      blockScript();
    }
  }
});

// 开始观察document的变化
observer.observe(document.documentElement, { childList: true, subtree: true });

function blockScript() {
  const scriptElements = document.querySelectorAll('script[src]');
  scriptElements.forEach(script => {
    const scriptSrc = script.getAttribute('src');
    const regex = /.*Main.min_.*\.js/;
    if (regex.test(scriptSrc)) {
      script.remove();
    }
  });
}

(function () {
  'use strict';
  let canvas2svgScript = document.createElement('script');
  canvas2svgScript.type = 'text/javascript';
  canvas2svgScript.src =
    'https://cdn.jsdelivr.net/gh/zsjinwei/hack-vectormagic@1.0.3/canvas2svg.js';

  let hackScript = document.createElement('script');
  hackScript.type = 'text/javascript';
  hackScript.src =
    'https://cdn.jsdelivr.net/gh/zsjinwei/hack-vectormagic@1.0.3/hack-vectormagic.js';

  let heads = document.getElementsByTagName('head');
  heads[0].appendChild(canvas2svgScript);
  heads[0].appendChild(hackScript);
})();
