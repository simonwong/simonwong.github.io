"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[6556],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(2081),a=(r(9496),r(9613));const o={},l=void 0,p={unversionedId:"advanced/webpack/process",id:"advanced/webpack/process",title:"process",description:"\u53c2\u8003\uff1ahttps://segmentfault.com/a/1190000039956437",source:"@site/docs/advanced/webpack/process.md",sourceDirName:"advanced/webpack",slug:"/advanced/webpack/process",permalink:"/docs/advanced/webpack/process",draft:!1,tags:[],version:"current",lastUpdatedAt:1662602599,formattedLastUpdatedAt:"Sep 8, 2022",frontMatter:{}},c={},i=[],s={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000039956437"},"https://segmentfault.com/a/1190000039956437")),(0,a.kt)("p",null,"\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u9636\u6bb5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u53c2\u6570\uff1a\u5c06\u914d\u7f6e\u6587\u4ef6\u3001shell \u53c2\u6570\u3001\u9ed8\u8ba4\u53c2\u6570\u5408\u5e76\u6210\u6700\u7ec8\u7684\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa compiler\uff08\u7f16\u8bd1\u5668\u5bf9\u8c61\uff09\uff1anew Compiler(config)"),(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u7f16\u8bd1\u73af\u5883\uff08",(0,a.kt)("em",{parentName:"li"},"hooks.environment"),"\uff09\uff1a\u6ce8\u5165\u5185\u7f6e\u63d2\u4ef6\u3001\u6ce8\u518c\u5404\u79cd\u6a21\u5757\u5de5\u5382\u3001\u521d\u59cb\u5316 RuleSet \u96c6\u5408\u3001\u52a0\u8f7d\u914d\u7f6e\u7684\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u7f16\u8bd1\uff08",(0,a.kt)("em",{parentName:"li"},"hooks.run"),"\uff09\uff1acompiler.run()\uff1b\u521b\u5efa compilation = new Compilation()\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u5165\u53e3\uff08",(0,a.kt)("em",{parentName:"li"},"hooks.addEntry"),"\uff09\uff1acompilation.addEntry()")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6784\u5efa\u9636\u6bb5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u6a21\u5757\uff08",(0,a.kt)("em",{parentName:"li"},"hooks.make"),"\uff09\uff1a\u521b\u5efa module \u5bf9\u8c61\uff0c\u6839\u636e module \u914d\u7f6e\u89c4\u5219\uff0c\u8c03\u7528\u5404\u79cd loader \u7f16\u8bd1\u4e3a js\uff0c\u5c06 js \u7f16\u8bd1\u4e3a AST \u5bf9\u8c61\uff0c\u9012\u5f52\u4f9d\u8d56"),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u7f16\u8bd1\uff08",(0,a.kt)("em",{parentName:"li"},"hooks.finishMake"),"\uff09\uff1a\u4e0a\u4e00\u6b65\u5b8c\u6210\u9012\u5f52\u540e\uff0c\u53ef\u4ee5\u5f62\u6210\u4e00\u5e45",(0,a.kt)("strong",{parentName:"li"},"\u4f9d\u8d56\u5173\u7cfb\u56fe"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u751f\u6210\u9636\u6bb5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u8d44\u6e90\uff08",(0,a.kt)("em",{parentName:"li"},"hooks.seal"),"\uff09\uff1a\u4ece moduleGraph \u8f6c\u4e3a chunkGraph"),(0,a.kt)("li",{parentName:"ul"},"\u5199\u5165\u8d44\u6e90\uff08",(0,a.kt)("em",{parentName:"li"},"hooks.emitAssets"),"\uff09\uff1a\u5c06 assets \u5199\u5165\u6587\u4ef6\u7cfb\u7edf")))}u.isMDXComponent=!0}}]);