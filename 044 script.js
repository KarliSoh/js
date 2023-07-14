"use strict";

const p = document.querySelectorAll('p');

console.log(p);




function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // загружались по другому, меняем относительность друг к другу
    document.body.append(script);
}

loadScript("033 script.js");
loadScript("030 script.js");