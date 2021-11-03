"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[2938],{9613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9155:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(2245),o=t(5903),a=(t(9496),t(9613)),c=["components"],i={},l="webpack 4 \u7b14\u8bb0",p={unversionedId:"note/webpack4-note",id:"note/webpack4-note",isDocsHomePage:!1,title:"webpack 4 \u7b14\u8bb0",description:"\u73af\u5883\u53d8\u91cf",source:"@site/docs/note/webpack4-note.md",sourceDirName:"note",slug:"/note/webpack4-note",permalink:"/docs/note/webpack4-note",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/note/webpack4-note.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c",permalink:"/docs/note/\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c"},next:{title:"TypeScript \u7b14\u8bb0",permalink:"/docs/note/typescript-note"}},u=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",children:[{value:"cross-env",id:"cross-env",children:[],level:3},{value:"DefinePlugin",id:"defineplugin",children:[],level:3}],level:2},{value:"hash",id:"hash",children:[],level:2},{value:"splitChunks",id:"splitchunks",children:[{value:"chunks",id:"chunks",children:[],level:3},{value:"cacheGroups",id:"cachegroups",children:[],level:3}],level:2}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webpack-4-\u7b14\u8bb0"},"webpack 4 \u7b14\u8bb0"),(0,a.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,a.kt)("h3",{id:"cross-env"},"cross-env"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cross-env")," \u5e26\u5165\u7684\u73af\u5883\u53d8\u91cf\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_ENV=prod")," \u4e5f\u53ea\u662f\u7528\u5728 webpack \u6253\u5305\u7684\u65f6\u5019\u3002"),(0,a.kt)("h3",{id:"defineplugin"},"DefinePlugin"),(0,a.kt)("p",null,"\u60f3\u8981\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u7528 DefinePlugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new webpack.DefinePlugin({\n  APP_ENV: JSON.stringify(process.env.APP_ENV),\n  THE_ENV: JSON.stringify('the')\n})\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u62ff\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.APP_ENV")),(0,a.kt)("h2",{id:"hash"},"hash"),(0,a.kt)("p",null,"\u6587\u4ef6\u8f93\u51fa\u65f6\u914d\u7f6e\u54c8\u5e0c\u6709\u4e09\u79cd\u65b9\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[name].[hash].js")," \u6bcf\u6b21\u90fd\u662f\u4e00\u6837\u7684"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[name].[chunkhash].js")," \u4f1a\u6309\u7167\u4f9d\u8d56\uff0c\u76f8\u5173\u4f9d\u8d56\u7684\u6587\u4ef6\u6539\u53d8\uff0chash \u90fd\u4f1a\u6539\u53d8"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[name].[contenthash].js")," \u6309\u7167\u6587\u4ef6\uff0c\u76f8\u5173\u6587\u4ef6\u6539\u62dc\u5e74\uff0chash \u4f1a\u6539\u53d8"),(0,a.kt)("p",null,"\u6bd4\u8f83\u597d\u7684\u65b9\u6848\u662f \uff0c splitChunks \u5206\u51fa\u4e0d\u600e\u4e48\u53d8\u52a8\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u7136\u540e\u4f7f\u7528 chunkhash / contenthash \u6765\u6301\u4e45\u7f13\u5b58\u3002"),(0,a.kt)("h2",{id:"splitchunks"},"splitChunks"),(0,a.kt)("h3",{id:"chunks"},"chunks"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," : \u667a\u80fd\u5904\u7406 \u5f02\u6b65\u5f15\u5165\u548c\u76f4\u63a5\u5f15\u5165"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"async")," \uff1a\u53ea\u4f18\u5316\u5f02\u6b65\u5f15\u5165"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"initial"),"\uff1a\u53ea\u4f18\u5316\u76f4\u63a5\u5f15\u5165"),(0,a.kt)("h3",{id:"cachegroups"},"cacheGroups"),(0,a.kt)("p",null,"\u6700\u91cd\u8981\u7684\u662f cacheGroups"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"cacheGroups: {\n    common: {\n        name: 'common',\n        test({ resource }) {\n            return /[\\\\/]node_modules[\\\\/](lodash|bignumber|moment|react|react-dom).*$/.test(resource);\n        },\n        priority: 15,\n    },\n    vendors: {\n        name: 'vendors',\n        test({ resource }) {\n            return /[\\\\/]node_modules[\\\\/]/.test(resource);\n        },\n        priority: 10,\n    },\n},\n")))}d.isMDXComponent=!0}}]);