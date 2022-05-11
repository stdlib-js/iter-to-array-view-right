// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var o=e,l=t,d=r,m=i.isPrimitive,h=n,a=s;var f=function(e,t){var r,i,n,s,f,g,u,p;if(!d(e))throw new TypeError(a("0Cu4J",e));if(!l(t))throw new TypeError(a("0Cu3A",t));if(2===(i=arguments.length))n=0,s=t.length;else if(3===i)o(arguments[2])?(n=0,f=arguments[2]):n=arguments[2],s=t.length;else if(4===i)o(arguments[2])?(n=0,s=t.length,f=arguments[2],r=arguments[3]):o(arguments[3])?(n=arguments[2],s=t.length,f=arguments[3]):(n=arguments[2],s=arguments[3]);else if(5===i){if(n=arguments[2],o(arguments[3]))s=t.length,f=arguments[3],r=arguments[4];else if(s=arguments[3],!o(f=arguments[4]))throw new TypeError(a("0Cu3D",f))}else{if(n=arguments[2],s=arguments[3],!o(f=arguments[4]))throw new TypeError(a("0Cu3D",f));r=arguments[5]}if(!m(n))throw new TypeError(a("invalid argument. Third argument must be either an integer (starting index) or a function. Value: `%s`.",n));if(!m(s))throw new TypeError(a("invalid argument. Fourth argument must be either an integer (ending index) or a function. Value: `%s`.",s));if(s<0?(s=t.length+s)<0&&(s=0):s>t.length&&(s=t.length),n<0&&(n=t.length+n)<0&&(n=0),g=h(t).setter,u=s,f){for(;u>n&&(u-=1,!(p=e.next()).done);)g(t,u,f.call(r,p.value,u,s-u-1));return t}for(;u>n&&(u-=1,!(p=e.next()).done);)g(t,u,p.value);return t};export{f as default};
//# sourceMappingURL=index.mjs.map
