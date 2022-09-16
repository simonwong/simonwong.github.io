"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[8668],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(n),s=i,k=d["".concat(o,".").concat(s)]||d[s]||c[s]||a;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(2081),i=(n(9496),n(9613));const a={},l="umijs \u539f\u7406",p={unversionedId:"advanced/umijs",id:"advanced/umijs",title:"umijs \u539f\u7406",description:"\u5305\u5206\u6790",source:"@site/docs/advanced/umijs.md",sourceDirName:"advanced",slug:"/advanced/umijs",permalink:"/docs/advanced/umijs",draft:!1,tags:[],version:"current",lastUpdatedAt:1663295231,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{},sidebar:"advanced",previous:{title:"Webpack \u6027\u80fd\u4f18\u5316",permalink:"/docs/advanced/webpack/optimization"},next:{title:"\u6784\u5efa\u811a\u624b\u67b6",permalink:"/docs/advanced/\u6784\u5efa\u811a\u624b\u67b6"}},o={},u=[{value:"\u5305\u5206\u6790",id:"\u5305\u5206\u6790",level:2},{value:"umi",id:"umi",level:3},{value:"@umi/core",id:"umicore",level:3},{value:"@umi/runtime",id:"umiruntime",level:3},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:2},{value:"<code>import { xxx } from &#39;umi&#39;</code>",id:"import--xxx--from-umi",level:3},{value:".umi \u6587\u4ef6",id:"umi-\u6587\u4ef6",level:3},{value:"\u6784\u5efa\u65f6",id:"\u6784\u5efa\u65f6",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"umijs-\u539f\u7406"},"umijs \u539f\u7406"),(0,i.kt)("h2",{id:"\u5305\u5206\u6790"},"\u5305\u5206\u6790"),(0,i.kt)("p",null,"umi \u7684\u5fae\u5185\u6838\u67b6\u6784\u672c\u8d28\u662f\u914d\u7f6e\u6536\u96c6\u5668\u548c\u63d2\u4ef6\u7ba1\u7406\u5668\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202111241754810.png",alt:null})),(0,i.kt)("h3",{id:"umi"},"umi"),(0,i.kt)("p",null,"cli \u7406\u7528\u6237\u547d\u4ee4\u3002export \u8fd0\u884c\u65f6\u7528\u7684\u65b9\u6cd5\u3001\u7ec4\u4ef6"),(0,i.kt)("h3",{id:"umicore"},"@umi/core"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Service")),(0,i.kt)("p",null,"\u6838\u5fc3\u670d\u52a1\u7c7b"),(0,i.kt)("p",null,"\u6ce8\u518c plugin \u548c presets\u3002\u751f\u6210 config \u5b9e\u4f8b\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Config")),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u7528\u6237 config \u914d\u7f6e\uff0cmerge config\uff0cwatch config\uff08watch \u4f9d\u8d56\u4e86\u7b2c\u4e09\u65b9\u5e93 ",(0,i.kt)("inlineCode",{parentName:"p"},"chokidar"),"\uff09"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Route")),(0,i.kt)("p",null,"\u5904\u7406\u7ea6\u5b9a\u5f0f\u8def\u7531"),(0,i.kt)("h3",{id:"umiruntime"},"@umi/runtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u7b2c\u4e09\u65b9\u5e93 ",(0,i.kt)("inlineCode",{parentName:"p"},"history-with-query")," \u66b4\u9732\u4e86 History \u76f8\u5173\u65b9\u6cd5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u7b2c\u4e09\u65b9\u5e93 ",(0,i.kt)("inlineCode",{parentName:"p"},"react-router-dom")," \u66b4\u9732\u4e86 react-router \u7684\u8def\u7531\u7ec4\u4ef6\u548c\u8def\u7531 hooks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u590d\u5236\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"react-loadable")," \u4ee3\u7801\uff0c\u5c01\u88c5\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Loadable")," \uff0c\u7136\u540e\u66b4\u9732\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic")," \u65b9\u6cd5\u6765\u505a react code splitting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u66b4\u9732\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin")," \u7c7b \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"isBrowser")," \u65b9\u6cd5"))),(0,i.kt)("h2",{id:"\u8fd0\u884c\u65f6"},"\u8fd0\u884c\u65f6"),(0,i.kt)("h3",{id:"import--xxx--from-umi"},(0,i.kt)("inlineCode",{parentName:"h3"},"import { xxx } from 'umi'")),(0,i.kt)("p",null,"index.ts \u6587\u4ef6 export \u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"@umijs/runtime")," \u8fd0\u884c\u65f6\u7684\u7ec4\u4ef6\u65b9\u6cd5\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," ",(0,i.kt)("inlineCode",{parentName:"p"},"useHistory")," \u7b49\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"export * from '@@/core/umiExports'")," \u66b4\u9732\u51fa\u6240\u6709 umi \u7684\u63d2\u4ef6\u66b4\u9732\u7684\u4e1c\u897f\u3002\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"@@")," \u6307\u5411\u9879\u76ee\u76ee\u5f55\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/.umi"),"\uff09"),(0,i.kt)("h3",{id:"umi-\u6587\u4ef6"},".umi \u6587\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"umi.ts \u2014\u2014 \u76f4\u63a5\u770b\u6e90\u7801"),(0,i.kt)("p",{parentName:"li"},"polifile\u3001render\u3001hotreload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"core \u2014\u2014 \u5185\u90e8\u63d2\u4ef6\u751f\u6210"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"routes.ts \u2014\u2014 \u52a8\u6001\u751f\u6210\u4e86\u8def\u7531"),(0,i.kt)("li",{parentName:"ul"},"plugins.ts \u2014\u2014 \u63d2\u4ef6\u5217\u8868"),(0,i.kt)("li",{parentName:"ul"},"history.ts \u2014\u2014 \u52a8\u6001\u66b4\u9732 ",(0,i.kt)("inlineCode",{parentName:"li"},"history")),(0,i.kt)("li",{parentName:"ul"},"..."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"pluginA..B..C.. \u2014\u2014 \u5916\u90e8\u63d2\u4ef6\u751f\u6210"))),(0,i.kt)("h2",{id:"\u6784\u5efa\u65f6"},"\u6784\u5efa\u65f6"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202111241755577.png",alt:null})))}c.isMDXComponent=!0}}]);