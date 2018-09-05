/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2018-06-12 12:06:25
 * @desc Get and Set global CSS properties (vars) with Vanilla JS
 */

(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.cssThemeVars=b()})(this,function(){"use strict";function a(a,b){return document.documentElement.style.setProperty(a,b)}function b(a){return getComputedStyle(document.documentElement).getPropertyValue(a)}return{setVar:a,getVar:b,setTheme:function(b={}){return Object.keys(b).forEach(c=>a(c,b[c]))},getTheme:function(){const a=(b,a)=>b.concat(a),c=[...document.styleSheets].map(a=>[...a.rules]).reduce(a,[]).map(a=>a.cssText).reduce(a,[]).map(a=>a.split(";")).reduce(a,[]).map(a=>a.split(":")).reduce(a,[]).filter(a=>a.includes("var(--")).map(a=>a.match(/--[\w-]+/)[0]);return[...new Set(c)].sort().reduce((c,a)=>{const d=b(a);return d&&(c[a]=d),c},{})}}});