"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[89],{28:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,100;1,300&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Style+Script&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand&display=swap);"]),i.push([n.id,":root {\n  --white-color: #fff;\n  --primary-color: #eff1f7;\n  --secondary-color: #212121;\n}\n\n.dark-theme {\n  --primary-color: #1b1b32;\n  --secondary-color: #fff;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n}\n\n.btn {\n  width: 80px;\n  align-self: end;\n  padding: 3px;\n  border: 3px solid var(--secondary-color);\n}\n\nheader > img {\n  cursor: pointer;\n  margin-right: 30px;\n  width: 2.5rem;\n  height: 3rem;\n}\n\nh1 {\n  font-family: 'Style Script', cursive;\n  font-style: italic;\n  font-weight: 400;\n  letter-spacing: 0.4rem;\n  font-size: 4.5rem;\n}\n\n.h1-decoration {\n  letter-spacing: 0.5rem;\n  text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);\n}\n\nh2 {\n  font-size: 1.7rem;\n  letter-spacing: 0.1rem;\n}\n\ntable,\ntr,\nth,\ntd {\n  border: 1px solid #ddd;\n  background-color: var(--white-color);\n}\n\ntbody {\n  display: block;\n  height: 47vh;\n  overflow: auto;\n}\n\nthead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\nthead {\n  width: calc(100% - 1em);\n}\n\ntable {\n  width: 400px;\n}\n\n.scores-list {\n  width: 50%;\n  height: 50vh;\n  margin: 30px;\n}\n\n.form-container {\n  width: 50%;\n  height: 30vh;\n}\n\nform > input,\nbutton {\n  margin: 0.5rem;\n  padding: 5px 10px;\n}\n\n@media screen and (max-width: 992px) {\n  h1 {\n    letter-spacing: 0.2rem;\n    font-size: 2.7rem;\n  }\n\n  header > img {\n    width: 3rem;\n  }\n\n  .section-container {\n    padding: 5px;\n    flex-direction: column;\n  }\n\n  .scores-list,\n  .form-container {\n    width: 90vw;\n    margin: 10px;\n  }\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},89:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),p=t(216),u=t.n(p),f=t(589),h=t.n(f),m=t(28),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(m.Z,v);const g=m.Z&&m.Z.locals?m.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);