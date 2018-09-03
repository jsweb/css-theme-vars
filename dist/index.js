/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2018-06-12 12:06:25
 * @desc Get and Set global CSS properties (vars) with Vanilla JS
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('cssThemeVars', factory) :
  (global.cssThemeVars = factory());
}(this, (function () { 'use strict';

  var index = {setVar,getVar,setTheme,getTheme};function setVar(a,b){return document.documentElement.style.setProperty(a,b)}function getVar(a){return getComputedStyle(document.documentElement).getPropertyValue(a)}function setTheme(a={}){return Object.keys(a).forEach(b=>setVar(b,a[b]))}function getTheme(){const a=(b,a)=>b.concat(a),b=[...document.styleSheets].map(a=>[...a.rules]).reduce(a,[]).map(a=>a.cssText).reduce(a,[]).map(a=>a.split(";")).reduce(a,[]).map(a=>a.split(":")).reduce(a,[]).filter(a=>a.includes("var(--")).map(a=>a.match(/--[\w-]+/)[0]);return [...new Set(b)].sort().reduce((b,a)=>{const c=getVar(a);return c&&(b[a]=c),b},{})}

  return index;

})));
