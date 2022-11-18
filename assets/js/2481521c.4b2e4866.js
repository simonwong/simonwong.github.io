"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[5395],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(2081),a=(r(9496),r(9613));const o={},c="\u7b2c 1 \u7ae0\uff1a\u5f00\u59cb",i={unversionedId:"computerbasic/cpp_primer/part01/ch01",id:"computerbasic/cpp_primer/part01/ch01",title:"\u7b2c 1 \u7ae0\uff1a\u5f00\u59cb",description:"1.1",source:"@site/docs/computerbasic/cpp_primer/part01/ch01.md",sourceDirName:"computerbasic/cpp_primer/part01",slug:"/computerbasic/cpp_primer/part01/ch01",permalink:"/docs/computerbasic/cpp_primer/part01/ch01",draft:!1,tags:[],version:"current",lastUpdatedAt:1668735631,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{}},p={},l=[{value:"1.1",id:"11",level:2},{value:"1.2 \u521d\u8bc6\u8f93\u5165\u8f93\u51fa",id:"12-\u521d\u8bc6\u8f93\u5165\u8f93\u51fa",level:2},{value:"1.3 \u6ce8\u91ca\u7b80\u4ecb",id:"13-\u6ce8\u91ca\u7b80\u4ecb",level:2},{value:"1.4 \u63a7\u5236\u6d41",id:"14-\u63a7\u5236\u6d41",level:2},{value:"1.5",id:"15",level:2},{value:"1.6",id:"16",level:2}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c-1-\u7ae0\u5f00\u59cb"},"\u7b2c 1 \u7ae0\uff1a\u5f00\u59cb"),(0,a.kt)("h2",{id:"11"},"1.1"),(0,a.kt)("h2",{id:"12-\u521d\u8bc6\u8f93\u5165\u8f93\u51fa"},"1.2 \u521d\u8bc6\u8f93\u5165\u8f93\u51fa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cin\uff08see-in\uff09"),(0,a.kt)("li",{parentName:"ul"},"cout\uff08see-out\uff09"),(0,a.kt)("li",{parentName:"ul"},"cerr\uff08see-err\uff09"),(0,a.kt)("li",{parentName:"ul"},"clog\uff08see-log\uff09")),(0,a.kt)("p",null,"\u5199\u5165endl\u7684\u6548\u679c\u662f\u7ed3\u675f\u5f53\u524d\u884c\uff0c\u5e76\u5c06\u4e0e\u8bbe\u5907\u5173\u8054\u7684\u7f13\u51b2\u533a\uff08buffer\uff09\u4e2d\u7684\u5185\u5bb9\u5237\u5230\u8bbe\u5907\u4e2d\u3002\u7f13\u51b2\u5237\u65b0\u64cd\u4f5c\u53ef\u4ee5\u4fdd\u8bc1\u5230\u76ee\u524d\u4e3a\u6b62\u7a0b\u5e8f\u6240\u4ea7\u751f\u7684\u6240\u6709\u8f93\u51fa\u90fd\u771f\u6b63\u5199\u5165\u8f93\u51fa\u6d41\u4e2d\uff0c\u800c\u4e0d\u662f\u4ec5\u505c\u7559\u5728\u5185\u5b58\u4e2d\u7b49\u5f85\u5199\u5165\u6d41\u3002"),(0,a.kt)("h2",{id:"13-\u6ce8\u91ca\u7b80\u4ecb"},"1.3 \u6ce8\u91ca\u7b80\u4ecb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"// \u5355\u884c\u6ce8\u91ca\n/**\n * \u591a\u884c\u6ce8\u91ca\n */\n")),(0,a.kt)("h2",{id:"14-\u63a7\u5236\u6d41"},"1.4 \u63a7\u5236\u6d41"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"while (condition) {\n  statement\n}\nfor (init-statement; condition; expression) {\n  \n}\nif (condition) {\n  \n}\n")),(0,a.kt)("h2",{id:"15"},"1.5"),(0,a.kt)("h2",{id:"16"},"1.6"))}s.isMDXComponent=!0}}]);