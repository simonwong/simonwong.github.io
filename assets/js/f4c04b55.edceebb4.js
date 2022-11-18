"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[2297],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(2081),o=(t(9496),t(9613));const a={},i="umi \u4f7f\u7528\u7b14\u8bb0",c={unversionedId:"note/umi-note",id:"note/umi-note",title:"umi \u4f7f\u7528\u7b14\u8bb0",description:"umi 3",source:"@site/docs/note/umi-note.md",sourceDirName:"note",slug:"/note/umi-note",permalink:"/docs/note/umi-note",draft:!1,tags:[],version:"current",lastUpdatedAt:1668735631,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{},sidebar:"note",previous:{title:"webpack 4 \u7b14\u8bb0",permalink:"/docs/note/webpack4-note"},next:{title:"AppleScript \u7b14\u8bb0",permalink:"/docs/note/AppleScript-note"}},u={},s=[{value:"umi 3",id:"umi-3",level:2}],p={toc:s};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"umi-\u4f7f\u7528\u7b14\u8bb0"},"umi \u4f7f\u7528\u7b14\u8bb0"),(0,o.kt)("h2",{id:"umi-3"},"umi 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  chunks: ['common', 'vendors', 'umi'], // \u63d0\u53d6\u516c\u5171\u4f9d\u8d56\n  chainWebpack: function (config, { webpack }) {\n    // umi \u7684 hash \u4e0d\u591f\u5b9a\u5236\u5316\n    config\n      .output\n        .filename('[name].[hash].js')\n        .chunkFilename('[name].[hash].js')\n\n    config\n      .plugin('extract-css')\n      .tap(cfg => {\n        cfg[0].filename = '[name].[hash].css'\n        cfg[0].chunkFilename = '[name].[hash].css'\n        return [...cfg]\n      })\n\n    config.merge({\n      optimization: {\n        minimize: true,\n        splitChunks: {\n          chunks: 'all',\n          cacheGroups: {\n            common: {\n              name: 'common',\n              test({ resource }) {\n                return /[\\\\/]node_modules[\\\\/](lodash|bignumber|moment|react|react-dom).*$/.test(resource);\n              },\n              priority: 15,\n            },\n            vendors: {\n              name: 'vendors',\n              test({ resource }) {\n                return /[\\\\/]node_modules[\\\\/]/.test(resource);\n              },\n              priority: 10,\n            },\n          },\n        },\n      },\n    })\n  },\n})\n")))}l.isMDXComponent=!0}}]);