function t({types:t},n={}){let r=!1!==n.pragma&&(n.pragma||"h"),e=!1!==r&&f(r),o=n.useBuiltIns,u=n.useNativeSpread,i=n.monomorphic||!1===e,c=function(n){if(!1===r||!1===n)return null;let e=t.identifier(r.split(".")[0]),{module:o,export:u}="string"!=typeof n?n:{module:n,export:null};let i;return i="*"===u?t.importNamespaceSpecifier(e):"default"===u?t.importDefaultSpecifier(e):t.importSpecifier(e,u?t.identifier(u):e),t.importDeclaration([i],t.stringLiteral(o))}(n.import||!1),l=n.wrapExpression;let s;function f(n){let r=n.split(".");let e;for(let n=0;n<r.length;n++){let o=p(r[n]);e=0===n?o:t.memberExpression(e,o)}return e}function p(n){return t.isValidIdentifier(n)?t.identifier(n):t.stringLiteral(n)}function a(n){return Object.keys(n).map((r=>{let e=n[r].map((n=>t.isNode(n)?y(n):t.valueToNode(n)));let o=e[0];return e.length>1&&(t.isStringLiteral(o)||(o=t.binaryExpression("+",t.stringLiteral(""),m(o))),e.slice(1).forEach((n=>{o=t.binaryExpression("+",o,m(n))})),e.some(h)&&(o=t.functionExpression(null,[],t.blockStatement([t.returnStatement(o)])))),t.objectProperty(p(r),o)}))}function d(n){return t.isNode(n)?y(n):t.objectExpression(a(n))}function g(r,c){if(r=y(r),t.isNode(r))return r;if("string"==typeof r)return l=r,n.monomorphic?t.objectExpression([t.objectProperty(p("type"),t.numericLiteral(3)),t.objectProperty(p("tag"),t.nullLiteral()),t.objectProperty(p("props"),t.nullLiteral()),t.objectProperty(p("children"),t.nullLiteral()),t.objectProperty(p("text"),t.stringLiteral(l))]):t.stringLiteral(l);var l;if(void 0===r)return t.identifier("undefined");const{tag:s,props:h,children:m}=r,x="string"!=typeof s,b=x?s:t.stringLiteral(s),j=function(n,r){if(!n||0===n.length)return t.nullLiteral();if(n.length>0&&t.isNode(n[0])&&n.unshift({}),1===n.length)return d(n[0]);if(2===n.length&&!t.isNode(n[0])&&0===Object.keys(n[0]).length)return d(n[1]);if(u){let r=[];return n.forEach((n=>{t.isNode(n)?r.push(t.spreadElement(n)):r.push(...a(n))})),t.objectExpression(r)}let e=o?f("Object.assign"):r.addHelper("extends");return t.callExpression(e,n.map(d))}(h,c);return function(r,o,u){return 1===u.elements.length&&t.isArrayExpression(u.elements[0])&&0===u.elements[0].elements.length&&(u=u.elements[0]),i?t.objectExpression([n.monomorphic&&t.objectProperty(p("type"),t.numericLiteral(1)),t.objectProperty(p("tag"),r),t.objectProperty(p("props"),o),t.objectProperty(p("children"),u),n.monomorphic&&t.objectProperty(p("text"),t.nullLiteral())].filter(Boolean)):(!1!==n.variableArity&&(u=u.elements),t.callExpression(e,[r,o].concat(u)))}(b,j,t.arrayExpression((m||[]).map((t=>g(t,c))).map((n=>x?t.arrowFunctionExpression([],n):n))))}function y(t){return s.has(t)?s.get(t):t}function h(n){return t.isIdentifier(n)||t.isFunctionExpression(n)||t.isArrowFunctionExpression(n)}function m(n){if(h(n)){let r=t.unaryExpression("typeof",n),e=t.binaryExpression("===",r,t.stringLiteral("function"));return t.conditionalExpression(e,t.callExpression(t.memberExpression(n,t.identifier("call")),[t.thisExpression()]),n)}return n}let x=n.tag||"html";return{name:"htm",visitor:{Program:{exit(t,n){n.get("hasHtm")&&c&&t.unshiftContainer("body",c)}},TaggedTemplateExpression(n,r){s=new Map;let o=n.node.tag.name;if("/"===x[0]?function(t){let n=t.split("/").slice(1),r=n.pop()||"";return new RegExp(n.join("/"),r)}(x).test(o):o===x){let o=n.node.quasi.quasis.map((t=>t.value.raw)),u=n.node.quasi.expressions;let i=((t,n)=>{let r=t=>{let e="",o=null;let u=[],i=[];for(let c=1;c<t.length;c++){let l=t[c++],s="number"==typeof l?n[l-1]:l;1===t[c]?e=s:3===t[c]?(u.push(s),o=null):5===t[c]?(o||(o=Object.create(null),u.push(o)),o[t[++c]]=[s]):6===t[c]?o[t[++c]].push(s):2===t[c]?i.push(r(s)):0===t[c]&&i.push(s)}return{tag:e,props:u,children:i}},{children:e}=r(t);return e.length>1?e:e[0]})(function(t){let n,r,e=1,o="",u="",i=[0];let c=t=>{1===e&&(t||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(t||o,0):3===e&&(t||o)?(i.push(t||o,1),e=2):2===e&&"..."===o&&t?i.push(t,3):2===e&&o&&!t?i.push(!0,5,o):e>=5&&((o||!t&&5===e)&&(i.push(o,e,r),e=6),t&&(i.push(t,e,r),e=6)),o=""};for(let l=0;l<t.length;l++){l&&(1===e&&c(),c(l));for(let s=0;s<t[l].length;s++)n=t[l][s],1===e?"<"===n?(c(),i=[i],e=3):o+=n:4===e?"--"===o&&">"===n?(e=1,o=""):o=n+o[0]:u?n===u?u="":o+=n:'"'===n||"'"===n?u=n:">"===n?(c(),e=1):e&&("="===n?(e=5,r=o,o=""):"/"===n&&(e<5||">"===t[l][s+1])?(c(),3===e&&(i=i[0]),e=i,(i=i[0]).push(e,2),e=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(c(),e=2):o+=n),3===e&&"!--"===o&&(e=4,i=i[0])}return c(),i}(o),u);t.isArrayExpression(i)&&(i=i.elements),l&&u.forEach((t=>{s.set(t,n.scope.generateUidIdentifier("field"))}));let c=Array.isArray(i)?t.callExpression(e,[t.arrayExpression(i.map((t=>g(t,r))))]):t.isNode(i)||"string"==typeof i?t.callExpression(e,[t.arrayExpression([g(i,r)])]):g(i,r);if(l){let r=Array.from(s.values());r.unshift(n.scope.generateUidIdentifier("statics")),c=t.callExpression(f(`${l}.apply`),[t.arrowFunctionExpression(r,c),t.arrayExpression([t.arrayExpression(o.map((n=>t.stringLiteral(n)))),...u])])}n.replaceWith(c),r.set("hasHtm",!0)}}}}}export{t as default};
//# sourceMappingURL=babel-plugin-htm.js.map