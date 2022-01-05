"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[5715],{9613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,m=g["".concat(i,".").concat(d)]||g[d]||s[d]||l;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6868:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var r=t(5900),a=t(4750),l=(t(9496),t(9613)),o=["components"],c={},i="yarn",p={unversionedId:"note/NPM/yarn",id:"note/NPM/yarn",title:"yarn",description:"\u5b89\u88c5\u8fc7\u7a0b",source:"@site/docs/note/NPM/yarn.md",sourceDirName:"note/NPM",slug:"/note/NPM/yarn",permalink:"/docs/note/NPM/yarn",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"npm\u5305\u5f00\u53d1",permalink:"/docs/note/NPM/npm\u5305\u5f00\u53d1"},next:{title:"Taro \u7b14\u8bb0",permalink:"/docs/note/applet/taro"}},u=[{value:"\u5b89\u88c5\u8fc7\u7a0b",id:"\u5b89\u88c5\u8fc7\u7a0b",children:[{value:"\u83b7\u53d6\u5305",id:"\u83b7\u53d6\u5305",children:[],level:3}],level:2},{value:"\u89e3\u51b3\u4e86\u54ea\u4e9b npm \u95ee\u9898",id:"\u89e3\u51b3\u4e86\u54ea\u4e9b-npm-\u95ee\u9898",children:[],level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[{value:"global",id:"global",children:[],level:3},{value:"config",id:"config",children:[],level:3},{value:"create",id:"create",children:[],level:3}],level:2}],s={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"yarn"},"yarn"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u8fc7\u7a0b"},"\u5b89\u88c5\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u68c0\u6d4b\uff08checking\uff09\u2192 \u89e3\u6790\u5305\uff08Resolving Packages\uff09 \u2192 \u83b7\u53d6\u5305\uff08Fetching Packages\uff09\u2192 \u94fe\u63a5\u5305\uff08Linking Packages\uff09\u2192 \u6784\u5efa\u5305\uff08Building Packages\uff09"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u5305"},"\u83b7\u53d6\u5305"),(0,l.kt)("p",null,"\u4e0d\u8fc7 Yarn \u9ed8\u8ba4 prefer-online \u6a21\u5f0f\uff0c\u5373\u4f18\u5148\u4f7f\u7528\u7f51\u7edc\u6570\u636e\u3002\u5982\u679c\u7f51\u7edc\u6570\u636e\u8bf7\u6c42\u5931\u8d25\uff0c\u518d\u53bb\u8bf7\u6c42\u7f13\u5b58\u6570\u636e\u3002"),(0,l.kt)("p",null,"Yarn \u4f1a\u6839\u636e cacheFolder+slug+node_modules+pkg.name \u751f\u6210\u4e00\u4e2a path\uff0c\u5224\u65ad\u7cfb\u7edf\u4e2d\u662f\u5426\u5b58\u5728\u8be5 path\uff0c\u5982\u679c\u5b58\u5728\u8bc1\u660e\u5df2\u7ecf\u6709\u7f13\u5b58\uff0c\u4e0d\u7528\u91cd\u65b0\u4e0b\u8f7d\u3002\u8fd9\u4e2a path \u4e5f\u5c31\u662f\u4f9d\u8d56\u5305\u7f13\u5b58\u7684\u5177\u4f53\u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"\u89e3\u51b3\u4e86\u54ea\u4e9b-npm-\u95ee\u9898"},"\u89e3\u51b3\u4e86\u54ea\u4e9b npm \u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"yarn \u7f13\u5b58\u4e86\u6bcf\u6b21\u4f60\u4e0b\u8f7d\u7684\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"yarn \u53ef\u4ee5\u901a\u8fc7\u5e76\u884c\u7684\u7f51\u7edc\u8bf7\u6c42\u6700\u5927\u9650\u5ea6\u5229\u7528\u7f51\u7edc\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"yarn \u5728\u5f00\u59cb\u5b89\u88c5\u4e00\u4e2a\u5305\u4e4b\u524d\u4f1a\u5148\u7528 checksums \u6765\u9a8c\u8bc1\uff0c\u4f60\u4e0d\u7528\u62c5\u5fc3\u672c\u5730\u7684\u7f13\u5b58\u7684\u5305\u88ab\u7834\u574f\u4e86\u5bfc\u81f4\u5b89\u88c5\u5931\u8d25"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn init # npm init\nyarn # npm install\nyarn install --frozen-lockfile # npm ci\nyarn add react # npm i -S react\nyarn add -D webpack # npm i -D webpack\nyarn global add babel # npm i -g babel\nyarn remove vue # \u5220\u9664\u4f9d\u8d56\u5305 npm uninstall vue\nyarn upgrade # \u5347\u7ea7 package.json \u6307\u5b9a\u7684\u6240\u6709\u4f9d\u8d56\u5305(\u5728package.json\u6307\u5b9a\u7684\u7248\u672c\u8303\u56f4\u5185)\nyarn upgrade --latest # \u5347\u7ea7package.json\u6307\u5b9a\u7684\u6240\u6709\u4f9d\u8d56\u5305,\u4f46\u5ffd\u7565package.json\u6307\u5b9a\u7684\u7248\u672c\u8303\u56f4,\u540c\u65f6package.json\u4e2d\u6307\u5b9a\u7684\u7248\u672c\u5c06\u88ab\u91cd\u5199\nyarn outdated # \u5217\u51fa\u5305\u7684\u6240\u6709\u4f9d\u8d56\u9879\u7684\u7248\u672c\u4fe1\u606f\u3002\u6b64\u4fe1\u606f\u5305\u62ec\u5f53\u524d\u5b89\u88c5\u7684\u7248\u672c\u3001\u57fa\u4e8e\u8bed\u4e49\u7248\u672c\u6240\u9700\u7684\u7248\u672c\u548c\u6700\u65b0\u7684\u53ef\u7528\u7248\u672c\nyarn run # \u5217\u51fa\u5305\u91cc\u6240\u6709\u53ef\u8fd0\u884c\u7684\u811a\u672c\nyarn run dev # \u8fd0\u884cpackage.json\u4e2dscripts\u5b9a\u4e49\u7684\u811a\u672c\u547d\u4ee4,\u7b49\u540c\u4e8e npm runx\nyarn upgrade-interactive --latest # \u4ea4\u4e92\u5f0f\u5347\u7ea7\n\nyarn global list --depth=0 # \u67e5\u770b\u5168\u5c40\u5b89\u88c5\u7684\u5305\n")),(0,l.kt)("h3",{id:"global"},"global"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u67e5\u770b\u5168\u5c40\u5b89\u88c5\u5305"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn global list --depth=0\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u5305"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn global remove xxx\n")),(0,l.kt)("h3",{id:"config"},"config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn config list # \u67e5\u770bconfig\nyarn config list # \u67e5\u770b\u5f53\u524d\u76ee\u5f55\u76f8\u5173config\nyarn config get registry # \u67e5\u770b\u5f53\u524d\u4e0b\u8f7d\u6e90,\u521d\u59cb\u4e3ahttps://registry.yarnpkg.com\n\nyarn config set registry https://registry.npm.taobao.org -g # \u66f4\u6539\u4e3a\u6dd8\u5b9d\nyarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\n")),(0,l.kt)("h3",{id:"create"},"create"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create react-app my-app\n")),(0,l.kt)("p",null,"\u76f8\u5f53\u4e8e\u6267\u884c\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"yarn global add create-react-app\ncreate-react-app my-app\n")))}g.isMDXComponent=!0}}]);