"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9526],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],u={sidebar_position:2,slug:"/docs/concepts/libuv-event-loop"},a="LibUV and the Event Loop",s={unversionedId:"documentation/concepts/libuv-and-the-event-loop",id:"documentation/concepts/libuv-and-the-event-loop",isDocsHomePage:!1,title:"LibUV and the Event Loop",description:"TODO//github.com/nodejs/node/blob/master/src/README.md#libuv-handles-and-requests",source:"@site/docs/03-documentation/04-concepts/02-libuv-and-the-event-loop.md",sourceDirName:"03-documentation/04-concepts",slug:"/docs/concepts/libuv-event-loop",permalink:"/docs/concepts/libuv-event-loop",editUrl:"https://github.com/luvit/luvit.io/edit/master/website/docs/03-documentation/04-concepts/02-libuv-and-the-event-loop.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/docs/concepts/libuv-event-loop"},sidebar:"tutorialSidebar",previous:{title:"Table of Contents",permalink:"/docs/concepts"},next:{title:"Luvi's Runtime Environment",permalink:"/docs/concepts/luvi-runtime-environment"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"libuv-and-the-event-loop"},"LibUV and the Event Loop"),(0,c.kt)("p",null,"TODO: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/blob/master/src/README.md#libuv-handles-and-requests"},"https://github.com/nodejs/node/blob/master/src/README.md#libuv-handles-and-requests")))}d.isMDXComponent=!0}}]);