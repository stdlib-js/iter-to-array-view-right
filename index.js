// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterator2arrayviewRight=r()}(this,(function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(e,r,t.get),s&&u&&u.call(e,r,t.set),e};var c=t;function y(e,r,t){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(e){return"boolean"==typeof e}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return h&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function w(e,r){return null!=e&&g.call(e,r)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var v=p()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[b],r=w(e,b);try{e[b]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[b]=t:delete e[b],n}:function(e){return m.call(e)},d=Boolean.prototype.toString;var E=p();function A(e){return"object"==typeof e&&(e instanceof Boolean||(E?function(e){try{return d.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===v(e)))}function _(e){return s(e)||A(e)}function T(){return new Function("return this;")()}y(_,"isPrimitive",s),y(_,"isObject",A);var j="object"==typeof self?self:null,x="object"==typeof window?window:null,L="object"==typeof global?global:null;var B=function(e){if(arguments.length){if(!s(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(j)return j;if(x)return x;if(L)return L;throw new Error("unexpected error. Unable to resolve global object.")}(),R=B.document&&B.document.childNodes,S=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;y(V,"REGEXP",k);var I=Array.isArray?Array.isArray:function(e){return"[object Array]"===v(e)};function C(e){return null!==e&&"object"==typeof e}function O(e){return C(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function M(e){var r,t,n;if(("Object"===(t=v(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=k.exec(n.toString()))return r[1]}return O(e)?"Buffer":t}y(C,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!I(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(C));var P="function"==typeof e||"object"==typeof S||"function"==typeof R?function(e){return M(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?M(e).toLowerCase():r};function U(e){return"function"===P(e)}var N=Math.floor;function F(e){return N(e)===e}function Y(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&F(e.length)&&e.length>=0&&e.length<=9007199254740991}function z(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&U(e.next)}function W(e){return"number"==typeof e}var G=Number,J=G.prototype.toString;var X=p();function q(e){return"object"==typeof e&&(e instanceof G||(X?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function D(e){return W(e)||q(e)}y(D,"isPrimitive",W),y(D,"isObject",q);var H=Number.POSITIVE_INFINITY,K=G.NEGATIVE_INFINITY;function Q(e){return e<H&&e>K&&F(e)}function Z(e){return W(e)&&Q(e)}function $(e){return q(e)&&Q(e.valueOf())}function ee(e){return Z(e)||$(e)}y(ee,"isPrimitive",Z),y(ee,"isObject",$);var re="function";function te(e){return typeof e.get===re&&typeof e.set===re}var ne={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function oe(e){var r=ne[e];return"function"==typeof r?r:ne.default}var ie={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function ae(e){var r=ie[e];return"function"==typeof r?r:ie.default}var ue={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},fe="function"==typeof Float64Array;var le="function"==typeof Float64Array?Float64Array:null;var ce="function"==typeof Float64Array?Float64Array:void 0;var ye=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le([1,3.14,-3.14,NaN]),t=r,e=(fe&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ce:function(){throw new Error("not implemented")},se="function"==typeof Float32Array;var he="function"==typeof Float32Array?Float32Array:null;var pe="function"==typeof Float32Array?Float32Array:void 0;var me=function(){var e,r,t;if("function"!=typeof he)return!1;try{r=new he([1,3.14,-3.14,5e40]),t=r,e=(se&&t instanceof Float32Array||"[object Float32Array]"===v(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===H}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")},ge="function"==typeof Uint32Array;var we="function"==typeof Uint32Array?Uint32Array:null;var be="function"==typeof Uint32Array?Uint32Array:void 0;var ve=function(){var e,r,t;if("function"!=typeof we)return!1;try{r=new we(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ge&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?be:function(){throw new Error("not implemented")},de="function"==typeof Int32Array;var Ee="function"==typeof Int32Array?Int32Array:null;var Ae="function"==typeof Int32Array?Int32Array:void 0;var _e=function(){var e,r,t;if("function"!=typeof Ee)return!1;try{r=new Ee([1,3.14,-3.14,2147483648]),t=r,e=(de&&t instanceof Int32Array||"[object Int32Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")},Te="function"==typeof Uint16Array;var je="function"==typeof Uint16Array?Uint16Array:null;var xe="function"==typeof Uint16Array?Uint16Array:void 0;var Le=function(){var e,r,t;if("function"!=typeof je)return!1;try{r=new je(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Te&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?xe:function(){throw new Error("not implemented")},Be="function"==typeof Int16Array;var Re="function"==typeof Int16Array?Int16Array:null;var Se="function"==typeof Int16Array?Int16Array:void 0;var Ve=function(){var e,r,t;if("function"!=typeof Re)return!1;try{r=new Re([1,3.14,-3.14,32768]),t=r,e=(Be&&t instanceof Int16Array||"[object Int16Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")},ke="function"==typeof Uint8Array;var Ie="function"==typeof Uint8Array?Uint8Array:null;var Ce="function"==typeof Uint8Array?Uint8Array:void 0;var Oe=function(){var e,r,t;if("function"!=typeof Ie)return!1;try{r=new Ie(r=[1,3.14,-3.14,256,257]),t=r,e=(ke&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ce:function(){throw new Error("not implemented")},Me="function"==typeof Uint8ClampedArray;var Pe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ue="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Ne=function(){var e,r,t;if("function"!=typeof Pe)return!1;try{r=new Pe([-1,0,1,3.14,4.99,255,256]),t=r,e=(Me&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===v(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ue:function(){throw new Error("not implemented")},Fe="function"==typeof Int8Array;var Ye="function"==typeof Int8Array?Int8Array:null;var ze="function"==typeof Int8Array?Int8Array:void 0;var We=function(){var e,r,t;if("function"!=typeof Ye)return!1;try{r=new Ye([1,3.14,-3.14,128]),t=r,e=(Fe&&t instanceof Int8Array||"[object Int8Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")};function Ge(e){return Z(e)&&e>=0}function Je(e){return $(e)&&e.valueOf()>=0}function Xe(e){return Ge(e)||Je(e)}y(Xe,"isPrimitive",Ge),y(Xe,"isObject",Je);function qe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&F(e.length)&&e.length>=0&&e.length<=4294967295}var De="function"==typeof ArrayBuffer;function He(e){return De&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===v(e)}function Ke(e){return"object"==typeof e&&null!==e&&!I(e)}function Qe(e,r){if(!(this instanceof Qe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!W(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}y(Qe,"BYTES_PER_ELEMENT",8),y(Qe.prototype,"BYTES_PER_ELEMENT",8),y(Qe.prototype,"byteLength",16),y(Qe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),y(Qe.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ze="function"==typeof Math.fround?Math.fround:null,$e=new me(1);var er="function"==typeof Ze?Ze:function(e){return $e[0]=e,$e[0]};function rr(e,r){if(!(this instanceof rr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!W(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:er(e)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:er(r)}),this}function tr(e){return e instanceof Qe||e instanceof rr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function nr(e){return F(e/2)}function or(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}y(rr,"BYTES_PER_ELEMENT",4),y(rr.prototype,"BYTES_PER_ELEMENT",4),y(rr.prototype,"byteLength",8),y(rr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),y(rr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ir=or()?Symbol.iterator:null;function ar(e,r,t){c(e,r,{configurable:!1,enumerable:!1,get:t})}function ur(e){return e.re}function fr(e){return e.im}function lr(e,r){return new me(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function cr(e,r){return new ye(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function yr(e,r){return e[r]}function sr(e,r){return e.get(r)}function hr(e,r,t){e[r]=t}function pr(e,r,t){e.set(t,r)}function mr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?sr:yr,setter:r?pr:hr}}function gr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(qe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!tr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(ur(n),fr(n))}return r}function wr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,qe(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!tr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ur(i),fr(i))}return n}function br(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!tr(n=r[o]))return null;e[i]=ur(n),e[i+1]=fr(n),i+=2}return e}var vr=2*me.BYTES_PER_ELEMENT,dr=or();function Er(e){return e instanceof jr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ar(e){return e===jr||"Complex128Array"===e.name}function _r(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===vr}function Tr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*vr}function jr(){var e,r,t,n;if(r=arguments.length,!(this instanceof jr))return 0===r?new jr:1===r?new jr(arguments[0]):2===r?new jr(arguments[0],arguments[1]):new jr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new me(0);else if(1===r)if(Ge(arguments[0]))t=new me(2*arguments[0]);else if(Y(arguments[0]))if((n=(t=arguments[0]).length)&&I(t)&&tr(t[0])){if(null===(t=br(new me(2*n),t))){if(!nr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new me(arguments[0])}}else{if(_r(t))t=lr(t,0);else if(Tr(t))t=cr(t,0);else if(!nr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new me(t)}else if(He(arguments[0])){if(!F((t=arguments[0]).byteLength/vr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+vr+". Byte length: `"+t.byteLength+"`.");t=new me(t)}else{if(!Ke(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===dr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!U(t[ir]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!U((t=t[ir]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=gr(t))instanceof Error)throw t;t=new me(t)}else{if(!He(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ge(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!F(e/vr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+vr+". Value: `"+e+"`.");if(2===r){if(!F((n=t.byteLength-e)/vr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+vr+". View byte length: `"+n+"`.");t=new me(t,e)}else{if(!Ge(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*vr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*vr+"`.");t=new me(t,e,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}function xr(e){return e.re}function Lr(e){return e.im}function Br(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(qe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!tr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(xr(n),Lr(n))}return r}function Rr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,qe(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!tr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(xr(i),Lr(i))}return n}function Sr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!tr(n=r[o]))return null;e[i]=xr(n),e[i+1]=Lr(n),i+=2}return e}y(jr,"BYTES_PER_ELEMENT",vr),y(jr,"name","Complex64Array"),y(jr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!U(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!U(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Er(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(tr(l=n.call(r,e.get(c),c)))i[y]=ur(l),i[y+1]=fr(l);else{if(!(qe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Y(e)){if(n){for(u=e.length,a=mr(e),c=0;c<u;c++)if(!tr(a.getter(e,c))){f=!0;break}if(f){if(!nr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(tr(l=n.call(r,a.getter(e,c),c)))i[y]=ur(l),i[y+1]=fr(l);else{if(!(qe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ke(e)&&dr&&U(e[ir])){if(!U((i=e[ir]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?wr(i,n,r):gr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),y(jr,"of",(function(){var e,r;if(!U(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),ar(jr.prototype,"buffer",(function(){return this._buffer.buffer})),ar(jr.prototype,"byteLength",(function(){return this._buffer.byteLength})),ar(jr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(jr.prototype,"BYTES_PER_ELEMENT",jr.BYTES_PER_ELEMENT),y(jr.prototype,"copyWithin",(function(e,r){if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),y(jr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,y(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new rr(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),y(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ir&&y(t,ir,(function(){return r.entries()})),t})),y(jr.prototype,"get",(function(e){var r;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new rr((r=this._buffer)[e*=2],r[e+1])})),ar(jr.prototype,"length",(function(){return this._length})),y(jr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ge(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(tr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ur(e),void(n[t+1]=fr(e))}if(Er(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new me(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Y(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!tr(e[f])){i=!0;break}if(i){if(!nr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new me(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ur(u),n[t+1]=fr(u),t+=2}}));var Vr=2*ye.BYTES_PER_ELEMENT,kr=or();function Ir(e){return e instanceof Pr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Cr(e){return e===Pr||"Complex64Array"===e.name}function Or(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Vr/2}function Mr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Vr}function Pr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Pr))return 0===r?new Pr:1===r?new Pr(arguments[0]):2===r?new Pr(arguments[0],arguments[1]):new Pr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ye(0);else if(1===r)if(Ge(arguments[0]))t=new ye(2*arguments[0]);else if(Y(arguments[0]))if((n=(t=arguments[0]).length)&&I(t)&&tr(t[0])){if(null===(t=Sr(new ye(2*n),t))){if(!nr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ye(arguments[0])}}else{if(Or(t))t=lr(t,0);else if(Mr(t))t=cr(t,0);else if(!nr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ye(t)}else if(He(arguments[0])){if(!F((t=arguments[0]).byteLength/Vr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Vr+". Byte length: `"+t.byteLength+"`.");t=new ye(t)}else{if(!Ke(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===kr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!U(t[ir]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!U((t=t[ir]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Br(t))instanceof Error)throw t;t=new ye(t)}else{if(!He(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ge(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!F(e/Vr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Vr+". Value: `"+e+"`.");if(2===r){if(!F((n=t.byteLength-e)/Vr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Vr+". View byte length: `"+n+"`.");t=new ye(t,e)}else{if(!Ge(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Vr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Vr+"`.");t=new ye(t,e,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}y(Pr,"BYTES_PER_ELEMENT",Vr),y(Pr,"name","Complex128Array"),y(Pr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!U(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!U(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Ir(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(tr(l=n.call(r,e.get(c),c)))i[y]=xr(l),i[y+1]=Lr(l);else{if(!(qe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Y(e)){if(n){for(u=e.length,a=mr(e),c=0;c<u;c++)if(!tr(a.getter(e,c))){f=!0;break}if(f){if(!nr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(tr(l=n.call(r,a.getter(e,c),c)))i[y]=xr(l),i[y+1]=Lr(l);else{if(!(qe(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ke(e)&&kr&&U(e[ir])){if(!U((i=e[ir]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Rr(i,n,r):Br(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),y(Pr,"of",(function(){var e,r;if(!U(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),ar(Pr.prototype,"buffer",(function(){return this._buffer.buffer})),ar(Pr.prototype,"byteLength",(function(){return this._buffer.byteLength})),ar(Pr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(Pr.prototype,"BYTES_PER_ELEMENT",Pr.BYTES_PER_ELEMENT),y(Pr.prototype,"copyWithin",(function(e,r){if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),y(Pr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,y(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new Qe(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),y(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ir&&y(t,ir,(function(){return r.entries()})),t})),y(Pr.prototype,"get",(function(e){var r;if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ge(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Qe((r=this._buffer)[e*=2],r[e+1])})),ar(Pr.prototype,"length",(function(){return this._length})),y(Pr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ge(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(tr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=xr(e),void(n[t+1]=Lr(e))}if(Ir(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ye(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Y(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!tr(e[f])){i=!0;break}if(i){if(!nr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ye(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=xr(u),n[t+1]=Lr(u),t+=2}}));var Ur=[ye,me,_e,ve,Ve,Le,We,Oe,Ne,jr,Pr],Nr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Fr=Nr.length;function Yr(e){var r;if(I(e))return"generic";if(O(e))return null;for(r=0;r<Fr;r++)if(e instanceof Ur[r])return Nr[r];return ue[M(e)]||null}function zr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r){var t,n,o,i,a,u,f,l,c;if(!z(e))throw new TypeError(zr("0Pz46,G5",e));if(!Y(r))throw new TypeError(zr("0Pz2y,Ix",r));if(2===(n=arguments.length))o=0,i=r.length;else if(3===n)U(arguments[2])?(o=0,a=arguments[2]):o=arguments[2],i=r.length;else if(4===n)U(arguments[2])?(o=0,i=r.length,a=arguments[2],t=arguments[3]):U(arguments[3])?(o=arguments[2],i=r.length,a=arguments[3]):(o=arguments[2],i=arguments[3]);else if(5===n){if(o=arguments[2],U(arguments[3]))i=r.length,a=arguments[3],t=arguments[4];else if(i=arguments[3],!U(a=arguments[4]))throw new TypeError(zr("0Pz31,Lk",a))}else{if(o=arguments[2],i=arguments[3],!U(a=arguments[4]))throw new TypeError(zr("0Pz31,Lk",a));t=arguments[5]}if(!Z(o))throw new TypeError(zr("0PzLl",o));if(!Z(i))throw new TypeError(zr("0PzLm",i));if(i<0?(i=r.length+i)<0&&(i=0):i>r.length&&(i=r.length),o<0&&(o=r.length+o)<0&&(o=0),f=Yr(r),u=te(r)?oe(f):ae(f),l=i,a){for(;l>o&&(l-=1,!(c=e.next()).done);)u(r,l,a.call(t,c.value,l,i-l-1));return r}for(;l>o&&(l-=1,!(c=e.next()).done);)u(r,l,c.value);return r}}));
//# sourceMappingURL=index.js.map