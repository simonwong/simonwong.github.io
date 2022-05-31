"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[7811],{9613:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return s}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=o,m=d["".concat(p,".").concat(s)]||d[s]||l[s]||a;return n?r.createElement(m,c(c({ref:t},f),{},{components:n})):r.createElement(m,c({ref:t},f))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return f},default:function(){return d}});var r=n(5900),o=n(4750),a=(n(9496),n(9613)),c=["components"],i={},p="\u6027\u80fd\u4f18\u5316",u={unversionedId:"note/performance",id:"note/performance",title:"\u6027\u80fd\u4f18\u5316",description:"\u8c03\u8bd5",source:"@site/docs/note/performance.md",sourceDirName:"note",slug:"/note/performance",permalink:"/docs/note/performance",tags:[],version:"current",frontMatter:{}},f=[{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",children:[{value:"performance \u76d1\u542c",id:"performance-\u76d1\u542c",children:[],level:3}],level:2}],l={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6027\u80fd\u4f18\u5316"},"\u6027\u80fd\u4f18\u5316"),(0,a.kt)("h2",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,a.kt)("h3",{id:"performance-\u76d1\u542c"},"performance \u76d1\u542c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"DNS \u89e3\u6790\u8017\u65f6: domainLookupEnd - domainLookupStart\nTCP \u8fde\u63a5\u8017\u65f6: connectEnd - connectStart\nSSL \u5b89\u5168\u8fde\u63a5\u8017\u65f6: connectEnd - secureConnectionStart\n\u7f51\u7edc\u8bf7\u6c42\u8017\u65f6 (TTFB): responseStart - requestStart\n\u6570\u636e\u4f20\u8f93\u8017\u65f6: responseEnd - responseStart\nDOM \u89e3\u6790\u8017\u65f6: domInteractive - responseEnd\n\u8d44\u6e90\u52a0\u8f7d\u8017\u65f6: loadEventStart - domContentLoadedEventEnd\nFirst Byte\u65f6\u95f4: responseStart - domainLookupStart\n\u767d\u5c4f\u65f6\u95f4: responseEnd - fetchStart\n\u9996\u6b21\u53ef\u4ea4\u4e92\u65f6\u95f4: domInteractive - fetchStart\nDOM Ready \u65f6\u95f4: domContentLoadEventEnd - fetchStart\n\u9875\u9762\u5b8c\u5168\u52a0\u8f7d\u65f6\u95f4: loadEventStart - fetchStart\nhttp \u5934\u90e8\u5927\u5c0f\uff1a transferSize - encodedBodySize\n\u91cd\u5b9a\u5411\u6b21\u6570\uff1aperformance.navigation.redirectCount\n\u91cd\u5b9a\u5411\u8017\u65f6: redirectEnd - redirectStart\n")))}d.isMDXComponent=!0}}]);