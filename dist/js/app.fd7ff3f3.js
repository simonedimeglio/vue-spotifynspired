(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17f2":function(t,e,n){"use strict";n("9a00")},5452:function(t,e,n){"use strict";n("af35")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{discs:t.discs}})],1)},o=[],i=n("bc3a"),s=n.n(i),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("img",{staticClass:"logo",attrs:{src:n("93df"),alt:"Spotify Logo"}})])}],l={name:"Header",components:{}},f=l,p=(n("5452"),n("2877")),d=Object(p["a"])(f,c,u,!1,null,null,null),b=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container main-container"},t._l(t.discs,(function(t,e){return n("Album",{key:e,attrs:{poster:t.poster,title:t.title,author:t.author,genre:t.genre,year:t.year}})})),1)])},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-container"},[n("img",{staticClass:"album-img",attrs:{src:t.poster,alt:"Album cover of "+t.title+" by "+t.author}}),n("div",{staticClass:"album-txt"},[n("div",{staticClass:"album-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"album-author"},[t._v(t._s(t.author))]),n("div",{staticClass:"album-year"},[t._v(t._s(t.year))])])])},g=[],y={name:"Album",props:{poster:String,title:String,author:String,genre:String,year:String}},_=y,O=(n("a941"),Object(p["a"])(_,h,g,!1,null,null,null)),j=O.exports,x={name:"Main",props:{discs:Array},components:{Album:j}},w=x,S=(n("17f2"),Object(p["a"])(w,m,v,!1,null,null,null)),C=S.exports,M={name:"App",components:{Header:b,Main:C},data:function(){return{discs:[]}},created:function(){var t=this;s.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.discs=e.data.response}))}},P=M,A=(n("5c0b"),Object(p["a"])(P,a,o,!1,null,null,null)),$=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"93df":function(t,e,n){t.exports=n.p+"img/spotify-logo.c24917d4.png"},"9a00":function(t,e,n){},"9c0c":function(t,e,n){},"9d91":function(t,e,n){},a941:function(t,e,n){"use strict";n("9d91")},af35:function(t,e,n){}});
//# sourceMappingURL=app.fd7ff3f3.js.map