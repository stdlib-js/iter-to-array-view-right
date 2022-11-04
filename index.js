// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iterator2arrayviewRight=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,l=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,s,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(e,t,r.get),p&&f&&f.call(e,t,r.set),e};var a=r;function s(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"boolean"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[v],i=v,t=null!=(o=e)&&g.call(o,i);try{e[v]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[v]=r:delete e[v],n}:function(e){return d.call(e)},m=Boolean.prototype.toString;var w=b();function j(e){return"object"==typeof e&&(e instanceof Boolean||(w?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===h(e)))}function _(e){return p(e)||j(e)}function T(){return new Function("return this;")()}s(_,"isPrimitive",p),s(_,"isObject",j);var E="object"==typeof self?self:null,S="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof O?O:null;var I=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(E)return E;if(S)return S;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),x=I.document&&I.document.childNodes,P=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;s(N,"REGEXP",B);var C=Array.isArray?Array.isArray:function(e){return"[object Array]"===h(e)};function V(e){return null!==e&&"object"==typeof e}function F(e){var t,r,n,o;if(("Object"===(r=h(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=B.exec(n.toString()))return t[1]}return V(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(V,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!C(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(V));var G="function"==typeof e||"object"==typeof P||"function"==typeof x?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};function k(e){return"function"===G(e)}var L=Math.floor;function M(e){return L(e)===e}function R(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&M(e.length)&&e.length>=0&&e.length<=9007199254740991}function D(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&k(e.next)}function U(e){return"number"==typeof e}var Y=Number,J=Y.prototype.toString;var X=b();function q(e){return"object"==typeof e&&(e instanceof Y||(X?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===h(e)))}function z(e){return U(e)||q(e)}s(z,"isPrimitive",U),s(z,"isObject",q);var H=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY;function Q(e){return e<H&&e>K&&M(e)}function W(e){return U(e)&&Q(e)}function Z(e){return q(e)&&Q(e.valueOf())}function $(e){return W(e)||Z(e)}function ee(e,t){return e[t]}function te(e,t){return e.get(t)}function re(e,t,r){e[t]=r}function ne(e,t,r){e.set(r,t)}function oe(e){var t=Boolean(e.get&&e.set);return{data:e,accessors:t,getter:t?te:ee,setter:t?ne:re}}function ie(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return s($,"isPrimitive",W),s($,"isObject",Z),function(e,t){var r,n,o,i,u,f,l,c;if(!D(e))throw new TypeError(ie("0Cu4J",e));if(!R(t))throw new TypeError(ie("0Cu3A",t));if(2===(n=arguments.length))o=0,i=t.length;else if(3===n)k(arguments[2])?(o=0,u=arguments[2]):o=arguments[2],i=t.length;else if(4===n)k(arguments[2])?(o=0,i=t.length,u=arguments[2],r=arguments[3]):k(arguments[3])?(o=arguments[2],i=t.length,u=arguments[3]):(o=arguments[2],i=arguments[3]);else if(5===n){if(o=arguments[2],k(arguments[3]))i=t.length,u=arguments[3],r=arguments[4];else if(i=arguments[3],!k(u=arguments[4]))throw new TypeError(ie("0Cu3D",u))}else{if(o=arguments[2],i=arguments[3],!k(u=arguments[4]))throw new TypeError(ie("0Cu3D",u));r=arguments[5]}if(!W(o))throw new TypeError(ie("invalid argument. Third argument must be either an integer (starting index) or a function. Value: `%s`.",o));if(!W(i))throw new TypeError(ie("invalid argument. Fourth argument must be either an integer (ending index) or a function. Value: `%s`.",i));if(i<0?(i=t.length+i)<0&&(i=0):i>t.length&&(i=t.length),o<0&&(o=t.length+o)<0&&(o=0),f=oe(t).setter,l=i,u){for(;l>o&&(l-=1,!(c=e.next()).done);)f(t,l,u.call(r,c.value,l,i-l-1));return t}for(;l>o&&(l-=1,!(c=e.next()).done);)f(t,l,c.value);return t}}));
//# sourceMappingURL=index.js.map