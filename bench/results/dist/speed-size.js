!function(){"use strict";var t=function(t){var e=0;t+="x";for(var n=parseInt(65745979961613.07),r=0;r<t.length;r++)e>n&&(e=parseInt(e/137)),e=131*e+t.charCodeAt(r);return e},e=function(t,e,n){var r=n<.5?n*(1+e):n+e-n*e,o=2*n-r;return[(t/=360)+1/3,t,t-1/3].map((function(t){return t<0&&t++,t>1&&t--,t=t<1/6?o+6*(r-o)*t:t<.5?r:t<2/3?o+6*(r-o)*(2/3-t):o,Math.round(255*t)}))},n=function(e){var n=[(e=e||{}).lightness,e.saturation].map((function(t){return t=t||[.35,.5,.65],"[object Array]"===Object.prototype.toString.call(t)?t.concat():[t]}));this.L=n[0],this.S=n[1],this.hash=e.hash||t};n.prototype.hsl=function(t){var e,n,r=this.hash(t);return e=r%359,r=parseInt(r/360),n=this.S[r%this.S.length],r=parseInt(r/this.S.length),[e,n,this.L[r%this.L.length]]},n.prototype.rgb=function(t){var n=this.hsl(t);return e.apply(this,n)},n.prototype.hex=function(t){var e,n=this.rgb(t);return e="#",n.forEach((function(t){t<16&&(e+=0),e+=t.toString(16)})),e};var r=n;const o=[];let i,s;function c(t){function e(n){if(0===arguments.length)return i&&!e.o.has(i)&&(e.o.add(i),i.u.push(e)),t;if(s)return e.t===o&&s.push(e),e.t=n,n;t=n;const r=i;return i=void 0,e.i=new Set(e.o),e.i.forEach(t=>t.s=!1),e.i.forEach(t=>{t.s||t()}),i=r,t}return e.$o=!0,e.o=new Set,e.t=o,e}function a(t,e){function n(){const r=i;i&&i.__c.push(n);const o=n.__c;return u(n),n.s=!0,i=n,e=t(e),o.forEach(t=>{-1===n.__c.indexOf(t)&&(t.s=!0)}),function t(e){return e.reduce((e,n)=>e.concat(n,t(n.__c)),[])}(n.__c).forEach(t=>{t.s&&t.u.forEach(e=>{e.i&&e.i.delete(t)})}),i=r,e}return t.v=n,f(n),n(),function(){return n.s?n.u.forEach(t=>t()):e=n(),e}}function l(t){return a(t),()=>u(t.v)}function u(t){t.__c.forEach(u),t.u.forEach(e=>{e.o.delete(t)}),t.S.forEach(t=>t()),f(t)}function f(t){t.u=[],t.__c=[],t.S=[]}var h=Object.freeze({__proto__:null,S:a,cleanup:function(t){return i&&i.S.push(t),t},computed:a,isListening:function(){return!!i},o:c,observable:c,root:function(t){const e=i,n=()=>{};i=n,f(n);const r=t(()=>{u(n),i=void 0});return i=e,r},sample:function(t){const e=i;i=void 0;const n=t();return i=e,n},subscribe:l,transaction:function(t){s=[];const e=t();let n=s;return s=void 0,n.forEach(t=>{if(t.t!==o){const e=t.t;t.t=o,t(e)}}),e},unsubscribe:function(t){u(t.v)}});const p={},d=[];function m(t,e,n,r){if(n){if(e){if(!r){const e=(r=n.previousSibling||t.lastChild).__g;if(e)for(r=r.previousSibling;r&&r.__g!==e;)r=r.previousSibling}let e;for(;r&&r!==n;)e=r.nextSibling,t.removeChild(r),r.__g=0,r=e}}else t.textContent=""}let _=0;function y(t,e,n,r,o){t=n&&n.parentNode||t;const i=typeof e;return e===r||(!e&&0!==e||!0===e?(m(t,r,n,o),r=null):r&&"string"!=typeof r||!("string"===i||"number"===i&&(e+=""))?"function"===i?p.subscribe((function(){r=p.insert(t,e(),n,r)})):(m(t,r,n,o),e instanceof Node||(e=p.h(d,e)),11===e.nodeType&&e.firstChild!==e.lastChild&&(e.firstChild.__g=e.lastChild.__g=++_),t.insertBefore(e,n||null),r=e):(null!=r&&t.firstChild?n?(n.previousSibling||t.lastChild).data=e:t.firstChild.data=e:n?t.insertBefore(document.createTextNode(e),n):t.textContent=e,r=e)),r}function g(t,e,n,r,o){if(!t||"attrs"===t&&(r=!0))for(t in e)g(t,e[t],n,r,o);else"o"!==t[0]||"n"!==t[1]||e.$o?"function"==typeof e?e.$t?e.$t(2,g,n,t):p.subscribe(()=>{g(t,e(),n,r,o)}):o?n.style.setProperty(t,e):r||"data-"===t.slice(0,5)||"aria-"===t.slice(0,5)?n.setAttribute(t,e):"style"===t?"string"==typeof e?n.style.cssText=e:g(null,e,n,r,!0):("class"===t&&(t+="Name"),n[t]=e):function(t,e,n){e=e.slice(2);const r=p.cleanup(()=>t.removeEventListener(e,b));n?t.addEventListener(e,b):r(),(t.t||(t.t={}))[e]=n}(n,t,e)}function b(t){return this.t[t.type](t)}function v(t,e){for(let e in t)p[e]=t[e];function n(){const t=d.slice.call(arguments);let n;return t.forEach((function r(o){const i=typeof o;if(null==o);else if("string"===i)n?n.appendChild(document.createTextNode(o)):n=e?document.createElementNS("http://www.w3.org/2000/svg",o):document.createElement(o);else if(Array.isArray(o))n||(n=document.createDocumentFragment()),o.forEach(r);else if(o instanceof Node)n?n.appendChild(o):n=o;else if("object"===i)g(null,o,n,e);else if("function"===i)if(n){const t=n.appendChild(document.createTextNode(""));o.$t?o.$t(1,y,n,""):y(n,o,t)}else n=o.apply(null,t.splice(1));else n.appendChild(document.createTextNode(""+o))})),n}return p.insert=y,p.property=g,p.h=n,n}const w=v(h),E=v(h,!0),x=c,S=[],k={};let A;function C(t,e){let n;return[e,t.__p,t.__c||t].forEach((function e(r){if(r instanceof Node)(n=r).i=n.i||0;else if(Array.isArray(r))r.forEach(e);else if(n){let e=F(n)[n.i];if(e)if(r===k)n.i++;else if("object"==typeof r)if(null===r.type)n.i++,e.u=!0,e.data.trim()!==r.__p.trim()&&(r.t.__c.length!==F(n).length&&e.splitText(e.data.indexOf(r.__p)+r.__p.length),e.data.trim()!==r.__p.trim()&&(e.data=r.__p));else if(r.type)C(r,e),n.i++;else for(let e in r)p.property(e,r[e],n,t.o);else if("function"==typeof r){let t,o,i,s=e.data,c="";p.subscribe((function(){A=t;let a=r();const l="string"==typeof a||"number"==typeof a;a=l?c+a:a,t?s=p.insert(n,a,o,s,i):(l?(n.i++,r.t.__c.length!==F(n).length&&(e.splitText(e.data.indexOf(a)+a.length),c=s.match(/^\s*/)[0])):(Array.isArray(a)&&(i=e,e=n),C(a,e),s=[]),o=n.insertBefore(document.createTextNode(""),F(n)[n.i]||null)),A=!1,t=!0}))}}})),n}function F(t){let e=t.firstChild,n=[];for(;e;)(3!==e.nodeType||e.data.trim()||e.u)&&n.push(e),e=e.nextSibling;return n}const j=function(t){return function(){if(A)return(t?E:w).apply(null,arguments);const e=S.slice.call(arguments),n={__c:[]};function r(t,e){t.__c.push(e),e.t=t}return e.forEach((function e(o){t&&(n.o=t),null==o||(o===k||"function"==typeof o?r(n,o):Array.isArray(o)?o.forEach(e):"object"==typeof o?o.type?r(n,o):n.__p=o:n.type?r(n,{type:null,__p:o}):n.type=o)})),n.type?n:n.__c.length>1?n.__c:n.__c[0]}}(),N={vanillajs:"#FFDD57",sinuous:"#70EDAC",solid:"#481B82",knockout:"#DB5A03",hyperapp:"#037FFF",redom:"#E7DC64",bobril:"#936037",preact:"#673AB8",react:"#61DAFB",mikado:"#59ABE9",inferno:"#E41E1D",wasm:"#644FF0",vue:"#40B883",angular:"#A6130C",ember:"#E04E39",svelte:"#FF3E00",lit:"#FF6C6A",mithril:"#1E5799"};function T(t){return t.id||t.framework}function B(t){return T(t).split("-")[0]}function D(t){if(0===t.length)return 0;t.sort((function(t,e){return t-e}));var e=Math.floor(t.length/2);return t.length%2?t[e]:(t[e-1]+t[e])/2}const L=x("https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/results.json"),O=x([]),$=x("#all"),I=x(!0),z=a(()=>{return(t=O().map(t=>t.benchmark),[...new Set(t)]).sort().slice(0,9);var t}),M=x(!1);function W(t){I(t.target.checked)}async function P(){M(!0);const t=await fetch(L()),e=await t.json();O(Array.isArray(e)?e:e.results),M(!1)}function q(){const t=z().reduce((t,e)=>(t[e]=O().filter(t=>!T(t).includes("non-keyed")).filter(t=>t.benchmark===e).sort((t,e)=>D(t.values)>D(e.values)?1:-1)[0],t),{});let e=O().filter(t=>t.benchmark.startsWith("0")||t.benchmark.startsWith("34_")).filter(t=>!T(t).includes("non-keyed")).reduce((t,e)=>{const n=t[e.framework]=t[e.framework]||{framework:e.framework,results:[]};return e.benchmark.startsWith("0")?n.results.push(e):e.benchmark.startsWith("34_")&&(n.totalbytes=e.values[0]),t},[]);e=Object.values(e).map(e=>{const n=e.results.reduce((e,n)=>e+D(n.values)/D(t[n.benchmark].values),0);return{...e,slowdown:n/e.results.length}}).sort((t,e)=>t.slowdown-e.slowdown);const n=e.map(t=>t.totalbytes),{max:o}=(i=n.concat().sort((t,e)=>t-e),s=i[Math.floor(i.length/4)],{max:(c=i[Math.ceil(.75*i.length)])+1.5*(a=c-s),min:s-1.5*a});var i,s,c,a;I()&&(e=e.filter(t=>t.totalbytes<o));const l=$().match(/\d+/);l&&(e=e.slice(0,parseInt(l[0]))),console.log(e);const u=e.map(t=>({name:T(t),marker:{color:N[B(t)]||(new r).hex(B(t))},x:[100/t.slowdown],y:[t.totalbytes],mode:"markers",type:"scatter"}));Plotly.newPlot("speed-size",u,{title:"Speed x Size",height:650,xaxis:{title:"100 / avg. slowdown (higher is better)"},yaxis:{title:"Size in bytes",autorange:"reversed"}},{responsive:!0})}l(P),document.querySelectorAll(".filter-list a").forEach(t=>{C(j("a",{class:()=>t.href.includes($())?"is-active":""}),t)}),C(j("input",{oninput:W}),document.querySelector(".outlier-check")),l(q),window.addEventListener("hashchange",(function(){location.hash&&$(location.hash)})),location.hash&&$(location.hash)}();