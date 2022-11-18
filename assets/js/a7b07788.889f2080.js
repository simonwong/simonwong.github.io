"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[369],{9613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||i[d]||l;return t?n.createElement(k,o(o({ref:r},c),{},{components:t})):n.createElement(k,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3585:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>i,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=t(2081),a=(t(9496),t(9613));const l={},o="Homebrew",p={unversionedId:"tools/Homebrew",id:"tools/Homebrew",title:"Homebrew",description:"\u5e38\u7528\u547d\u4ee4",source:"@site/docs/tools/Homebrew.md",sourceDirName:"tools",slug:"/tools/Homebrew",permalink:"/docs/tools/Homebrew",draft:!1,tags:[],version:"current",lastUpdatedAt:1668735631,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{},sidebar:"tools",previous:{title:"Charles",permalink:"/docs/tools/Charles"}},s={},u=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:3},{value:"\u5e93\u7684\u67e5\u627e\u3001\u5b89\u88c5\u3001\u66f4\u65b0\u3001\u5220\u9664",id:"\u5e93\u7684\u67e5\u627e\u5b89\u88c5\u66f4\u65b0\u5220\u9664",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u7b2c\u4e09\u65b9\u5e93",id:"\u7b2c\u4e09\u65b9\u5e93",level:3},{value:"Homebrew Cask",id:"homebrew-cask",level:2},{value:"\u8f6f\u4ef6\u7684\u67e5\u627e\u3001\u5b89\u88c5\u3001\u66f4\u65b0\u3001\u5220\u9664",id:"\u8f6f\u4ef6\u7684\u67e5\u627e\u5b89\u88c5\u66f4\u65b0\u5220\u9664",level:3}],c={toc:u};function i(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"homebrew"},"Homebrew"),(0,a.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("h3",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew update\n")),(0,a.kt)("h3",{id:"\u5e93\u7684\u67e5\u627e\u5b89\u88c5\u66f4\u65b0\u5220\u9664"},"\u5e93\u7684\u67e5\u627e\u3001\u5b89\u88c5\u3001\u66f4\u65b0\u3001\u5220\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew search <formulae>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew info <formulae>\n")),(0,a.kt)("p",null,"\u5b89\u88c5/\u5378\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install <formulae>\nbrew uninstall <formulae>\n")),(0,a.kt)("p",null,"\u67e5\u770b\u54ea\u4e9b\u5e93\u6709\u65b0\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew outdated\n")),(0,a.kt)("p",null,"\u6307\u5b9a\u6216\u4e00\u6b21\u6027\u66f4\u65b0\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew upgrade <formulae>\nbrew upgrade\n")),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u6e05\u7406\u65e0\u7528\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew cleanup\n")),(0,a.kt)("p",null,"\u81ea\u884c\u8bca\u65ad"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew doctor\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u65b9\u5e93"},"\u7b2c\u4e09\u65b9\u5e93"),(0,a.kt)("p",null,"\u67e5\u770b\u5df2\u6dfb\u52a0\u7684\u4e09\u65b9\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u7b2c\u4e09\u65b9\u5e93\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"tap")," \u540e\u518d ",(0,a.kt)("inlineCode",{parentName:"p"},"install")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap <user/repo>\nbrew tap <user/repo> <URL>\n")),(0,a.kt)("p",null,"\u79fb\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew untap <user/repo>\n")),(0,a.kt)("h2",{id:"homebrew-cask"},"Homebrew Cask"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Homebrew Cask \u53ef\u4ee5\u8bf4\u662f Homebrew \u7684\u4e00\u4e2a\u884d\u751f\u7a0b\u5e8f\uff0c\u662f\u4e3a\u4e86\u89e3\u51b3 macOS \u4e0a\u975e Mac App Store \u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u7ba1\u7406\u95ee\u9898")),(0,a.kt)("h3",{id:"\u8f6f\u4ef6\u7684\u67e5\u627e\u5b89\u88c5\u66f4\u65b0\u5220\u9664"},"\u8f6f\u4ef6\u7684\u67e5\u627e\u3001\u5b89\u88c5\u3001\u66f4\u65b0\u3001\u5220\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap caskroom/cask\nbrew cask search <formulae>\nbrew cask info <formulae>\nbrew cask install <formulae>\nbrew cask uninstall <formulae>\nbrew cask list\n")))}i.isMDXComponent=!0}}]);