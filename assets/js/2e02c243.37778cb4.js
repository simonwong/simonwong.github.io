"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[3421],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,g=f["".concat(i,".").concat(d)]||f[d]||p[d]||l;return t?r.createElement(g,c(c({ref:n},u),{},{components:t})):r.createElement(g,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,c=new Array(l);c[0]=f;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<l;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),c=["components"],a={},i="JEST \u7b14\u8bb0",s={unversionedId:"note/jest",id:"note/jest",isDocsHomePage:!1,title:"JEST \u7b14\u8bb0",description:"\u5e38\u7528\u547d\u4ee4",source:"@site/docs/note/jest.md",sourceDirName:"note",slug:"/note/jest",permalink:"/docs/note/jest",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/note/jest.md",tags:[],version:"current",frontMatter:{}},u=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[]},{value:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u7684\u6d4b\u8bd5",id:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u7684\u6d4b\u8bd5",children:[{value:"\u6d4b\u8bd5 <code>console.log</code>",id:"\u6d4b\u8bd5-consolelog",children:[]}]},{value:"\u6a21\u677f",id:"\u6a21\u677f",children:[{value:"\u57fa\u7840",id:"\u57fa\u7840",children:[]}]}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jest-\u7b14\u8bb0"},"JEST \u7b14\u8bb0"),(0,l.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/cli"},"Jest CLI Options")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jest watch")," \u76d1\u542c git \u4e0a\u6539\u52a8\u7684\u6587\u4ef6\uff0c\u6bcf\u6b21\u4fee\u6539\u4f1a\u81ea\u52a8\u8dd1\u6d4b\u8bd5"),(0,l.kt)("h2",{id:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u7684\u6d4b\u8bd5"},"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u7684\u6d4b\u8bd5"),(0,l.kt)("h3",{id:"\u6d4b\u8bd5-consolelog"},"\u6d4b\u8bd5 ",(0,l.kt)("inlineCode",{parentName:"h3"},"console.log")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let originalLog = null\n\nbeforeEach(() => {\n  originalLog = global.console.log\n  global.console.log = jest.fn()\n})\n\nafterEach(() => {\n  global.console.log = originalLog\n})\n\n// demo\ntest('console.log', () => {\n  console.log('123')\n  expect(global.console.log).toHaveBeenCalledWith('123')\n})\n")),(0,l.kt)("h2",{id:"\u6a21\u677f"},"\u6a21\u677f"),(0,l.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u8fd0\u884c\u524d\nbeforeAll(() => {});\n// \u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u8fd0\u884c\u540e\nafterAll(() => {});\n\n// \u6bcf\u4e2a\u6d4b\u8bd5\u8fd0\u884c\u524d\nbeforeEach\uff08() => {}\uff09\n// \u6bcf\u4e2a\u6d4b\u8bd5\u8fd0\u884c\u540e\nafterEach\uff08() => {}\uff09\n\n\ndescribe('\u6a21\u5757:', () => {\n  describe('\u6a21\u57571', () => {\n    test('\u7528\u4f8b1', () => {\n      assert.strictEqual(xxxx, xxxx)\n    })\n  })\n\n  describe('\u6a21\u57572', () => {\n    test('\u7528\u4f8b2', () => {\n      assert.deepStrictEqual(isNumber(1), true)\n    })\n  })\n})\n")))}f.isMDXComponent=!0}}]);