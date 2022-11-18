"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[9577],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(2081),a=(n(9496),n(9613));const o={},c="MUI \u6e90\u7801\u5b66\u4e60",l={unversionedId:"advanced/mui/README",id:"advanced/mui/README",title:"MUI \u6e90\u7801\u5b66\u4e60",description:"MUI",source:"@site/docs/advanced/mui/README.md",sourceDirName:"advanced/mui",slug:"/advanced/mui/",permalink:"/docs/advanced/mui/",draft:!1,tags:[],version:"current",lastUpdatedAt:1668735631,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{}},i={},u=[{value:"Hooks \u5b66\u4e60",id:"hooks-\u5b66\u4e60",level:2},{value:"useEventCallback",id:"useeventcallback",level:3},{value:"\u8bbe\u8ba1\u601d\u60f3",id:"\u8bbe\u8ba1\u601d\u60f3",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mui-\u6e90\u7801\u5b66\u4e60"},"MUI \u6e90\u7801\u5b66\u4e60"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/"},"MUI")),(0,a.kt)("h2",{id:"hooks-\u5b66\u4e60"},"Hooks \u5b66\u4e60"),(0,a.kt)("h3",{id:"useeventcallback"},"useEventCallback"),(0,a.kt)("p",null,"\u53ef\u4ee5\u7528\u4e8e\u4e8b\u4ef6\u7ed1\u5b9a\u51fd\u6570\u7684\u5b58\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/**\n * https://github.com/facebook/react/issues/14099#issuecomment-440013892\n */\nfunction useEventCallback<Args extends unknown[], Return>(\n  fn: (...args: Args) => Return,\n): (...args: Args) => Return {\n  const ref = React.useRef(fn);\n  useEffectLayout(() => {\n    ref.current = fn;\n  });\n\n  return React.useCallback((...args: Args) => (0, ref.current!)(...args), []);\n}\n")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u601d\u60f3"},"\u8bbe\u8ba1\u601d\u60f3"),(0,a.kt)("p",null,"mui \u7684\u5f88\u591a\u7684\u7ec4\u4ef6\u8bbe\u8ba1\u90fd\u662f",(0,a.kt)("strong",{parentName:"p"},"\u590d\u5408\u7ec4\u4ef6\u6a21\u5f0f"),"\uff0c\u5982 Dialog \u7ec4\u4ef6\u3002\u7528\u975e\u5e38\u5927\u7684\u7075\u6d3b\u6027\uff0c\u4f46\u662f\u7528\u8d77\u6765\u5c31\u611f\u89c9\u4e0d\u592a\u65b9\u4fbf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Dialog>\n  <DialogTitle>Title</DialogTitle>\n  <DialogContent>Content</DialogContent>\n  <DialogActions>Buttons</DialogActions>\n</Dialog>\n")))}p.isMDXComponent=!0}}]);