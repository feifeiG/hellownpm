(function(t){function e(e){for(var r,a,c=e[0],i=e[1],f=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(p.length)p.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"20a7bd0c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(t);var f=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,n[1](f)}o[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=f;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3206:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("hello world from ggtext")])},o=[],u={name:"",components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},a=u,c=n("2877"),i=Object(c["a"])(a,r,o,!1,null,"5485599c",null),f=i.exports,l={install:function(t){t.component("ggtext",f)}};e["default"]=l},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},u=[],a=(n("5c0b"),n("2877")),c={},i=Object(a["a"])(c,o,u,!1,null,null,null),f=i.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(l["a"]);var s=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],p=new l["a"]({routes:s}),d=p,b=n("5bd4"),v=n.n(b);r["a"].use(v.a),r["a"].config.productionTip=!1,new r["a"]({router:d,render:function(t){return t(f)}}).$mount("#app")},"5bd4":function(t,e,n){t.exports=n("3206")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.c8e943ed.js.map