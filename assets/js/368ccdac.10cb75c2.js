"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[1361],{9613:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,c(c({ref:e},l),{},{components:n})):r.createElement(d,c({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:o,c[1]=u;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3013:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(5900),o=n(4750),a=(n(9496),n(9613)),c=["components"],u={},i="08.\u53d8\u66f4 \uff08Mutation\uff09",p={unversionedId:"note/justjavascript/mutation",id:"note/justjavascript/mutation",title:"08.\u53d8\u66f4 \uff08Mutation\uff09",description:"mutaion",source:"@site/docs/note/justjavascript/08.mutation.md",sourceDirName:"note/justjavascript",slug:"/note/justjavascript/mutation",permalink:"/docs/note/justjavascript/mutation",tags:[],version:"current",sidebarPosition:8,frontMatter:{}},l=[{value:"mutaion",id:"mutaion",children:[],level:2},{value:"let vs const",id:"let-vs-const",children:[],level:2}],s={toc:l};function m(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"08\u53d8\u66f4-mutation"},"08.\u53d8\u66f4 \uff08Mutation\uff09"),(0,a.kt)("h2",{id:"mutaion"},"mutaion"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Mutation"),"\u662f\u4e00\u79cd\u8868\u8fbe ",(0,a.kt)("em",{parentName:"p"},"change")," \u7684\u5947\u7279\u65b9\u5f0f"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8bf4\u6539\u53d8\u4e86\u5bf9\u8c61\u7684\u5c5e\u6027\uff08",(0,a.kt)("em",{parentName:"p"},"changed")," an object's property\uff09\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u53d8\u5f02\u4e86\u90a3\u4e2a\u5bf9\u8c61\uff08",(0,a.kt)("em",{parentName:"p"},"mutated")," that object\uff09\uff08\u53ca\u5176\u5c5e\u6027\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"mutated")," \u6709\u4e00\u79cd\u9634\u9669\u7684\u8bed\u8c03\uff0c\u63d0\u9192\u4f60\u8981\u5c0f\u5fc3\uff0c\u4f46\u4e0d\u610f\u5473\u7740",(0,a.kt)("em",{parentName:"p"},"mutated")," \u662f\u574f\u7684\u3002"),(0,a.kt)("h2",{id:"let-vs-const"},"let vs const"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a = { name: 'foo' }\na.name = 'bar'\n")),(0,a.kt)("p",null,"const \u53ef\u4ee5\u9632\u6b62\u53d8\u91cf\u7684\u91cd\u65b0\u5206\u914d\uff0c\u4f46\u4e0d\u80fd\u963b\u6b62\u5bf9\u8c61\u53d8\u5f02\uff08object mutation\uff09"))}m.isMDXComponent=!0}}]);