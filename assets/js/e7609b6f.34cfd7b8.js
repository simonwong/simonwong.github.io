"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[6556],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,k=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var r=n(5900),a=n(4750),o=(n(9496),n(9613)),l=["components"],p={},c=void 0,i={unversionedId:"advanced/webpack/process",id:"advanced/webpack/process",title:"process",description:"\u53c2\u8003\uff1ahttps://segmentfault.com/a/1190000039956437",source:"@site/docs/advanced/webpack/process.md",sourceDirName:"advanced/webpack",slug:"/advanced/webpack/process",permalink:"/docs/advanced/webpack/process",tags:[],version:"current",frontMatter:{}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000039956437"},"https://segmentfault.com/a/1190000039956437")),(0,o.kt)("p",null,"\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u9636\u6bb5")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u53c2\u6570\uff1a\u5c06\u914d\u7f6e\u6587\u4ef6\u3001shell \u53c2\u6570\u3001\u9ed8\u8ba4\u53c2\u6570\u5408\u5e76\u6210\u6700\u7ec8\u7684\u914d\u7f6e\u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa compiler\uff08\u7f16\u8bd1\u5668\u5bf9\u8c61\uff09\uff1anew Compiler(config)"),(0,o.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u7f16\u8bd1\u73af\u5883\uff08",(0,o.kt)("em",{parentName:"li"},"hooks.environment"),"\uff09\uff1a\u6ce8\u5165\u5185\u7f6e\u63d2\u4ef6\u3001\u6ce8\u518c\u5404\u79cd\u6a21\u5757\u5de5\u5382\u3001\u521d\u59cb\u5316 RuleSet \u96c6\u5408\u3001\u52a0\u8f7d\u914d\u7f6e\u7684\u63d2\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u7f16\u8bd1\uff08",(0,o.kt)("em",{parentName:"li"},"hooks.run"),"\uff09\uff1acompiler.run()\uff1b\u521b\u5efa compilation = new Compilation()\uff0c"),(0,o.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u5165\u53e3\uff08",(0,o.kt)("em",{parentName:"li"},"hooks.addEntry"),"\uff09\uff1acompilation.addEntry()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6784\u5efa\u9636\u6bb5")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u6a21\u5757\uff08",(0,o.kt)("em",{parentName:"li"},"hooks.make"),"\uff09\uff1a\u521b\u5efa module \u5bf9\u8c61\uff0c\u6839\u636e module \u914d\u7f6e\u89c4\u5219\uff0c\u8c03\u7528\u5404\u79cd loader \u7f16\u8bd1\u4e3a js\uff0c\u5c06 js \u7f16\u8bd1\u4e3a AST \u5bf9\u8c61\uff0c\u9012\u5f52\u4f9d\u8d56"),(0,o.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u7f16\u8bd1\uff08",(0,o.kt)("em",{parentName:"li"},"hooks.finishMake"),"\uff09\uff1a\u4e0a\u4e00\u6b65\u5b8c\u6210\u9012\u5f52\u540e\uff0c\u53ef\u4ee5\u5f62\u6210\u4e00\u5e45",(0,o.kt)("strong",{parentName:"li"},"\u4f9d\u8d56\u5173\u7cfb\u56fe"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u751f\u6210\u9636\u6bb5")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u8d44\u6e90\uff08",(0,o.kt)("em",{parentName:"li"},"hooks.seal"),"\uff09\uff1a\u4ece moduleGraph \u8f6c\u4e3a chunkGraph"),(0,o.kt)("li",{parentName:"ul"},"\u5199\u5165\u8d44\u6e90\uff08",(0,o.kt)("em",{parentName:"li"},"hooks.emitAssets"),"\uff09\uff1a\u5c06 assets \u5199\u5165\u6587\u4ef6\u7cfb\u7edf")))}m.isMDXComponent=!0}}]);