"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[7717],{9613:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,l(l({ref:t},i),{},{components:n})):r.createElement(m,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(2081),a=(n(9496),n(9613));const c={},l="React 18 \u7684\u65b0\u7279\u6027",o={unversionedId:"advanced/react-deep/react-18-feature",id:"advanced/react-deep/react-18-feature",title:"React 18 \u7684\u65b0\u7279\u6027",description:"\u81ea\u52a8\u6279\u5904\u7406",source:"@site/docs/advanced/react-deep/react-18-feature.md",sourceDirName:"advanced/react-deep",slug:"/advanced/react-deep/react-18-feature",permalink:"/docs/advanced/react-deep/react-18-feature",draft:!1,tags:[],version:"current",lastUpdatedAt:1662602599,formattedLastUpdatedAt:"Sep 8, 2022",frontMatter:{},sidebar:"advanced",previous:{title:"React \u8bcd\u6c47\u8868",permalink:"/docs/advanced/react-deep/react-glossary"},next:{title:"render \u6d41\u7a0b",permalink:"/docs/advanced/react-deep/stage-render"}},s={},u=[{value:"\u81ea\u52a8\u6279\u5904\u7406",id:"\u81ea\u52a8\u6279\u5904\u7406",level:2},{value:"\u4ec0\u4e48\u662f\u6279\u5904\u7406",id:"\u4ec0\u4e48\u662f\u6279\u5904\u7406",level:3},{value:"\u4ec0\u4e48\u662f\u81ea\u52a8\u6279\u5904\u7406",id:"\u4ec0\u4e48\u662f\u81ea\u52a8\u6279\u5904\u7406",level:3},{value:"\u5982\u679c\u4e0d\u60f3\u6279\u5904\u7406",id:"\u5982\u679c\u4e0d\u60f3\u6279\u5904\u7406",level:3},{value:"startTransition",id:"starttransition",level:2},{value:"useDeferredValue",id:"usedeferredvalue",level:2},{value:"Suspense SSR",id:"suspense-ssr",level:2}],i={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-18-\u7684\u65b0\u7279\u6027"},"React 18 \u7684\u65b0\u7279\u6027"),(0,a.kt)("h2",{id:"\u81ea\u52a8\u6279\u5904\u7406"},"\u81ea\u52a8\u6279\u5904\u7406"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f\u6279\u5904\u7406"},"\u4ec0\u4e48\u662f\u6279\u5904\u7406"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6279\u5904\u7406\u662f\u5c06\u591a\u4e2a\u72b6\u6001\u66f4\u65b0\u5206\u7ec4\u5230\u4e00\u4e2a\u91cd\u65b0\u6e32\u67d3\u4e2d\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002")),(0,a.kt)("p",null,"\u5728 React 17 \u7248\u672c\u4e2d\uff0c\u4f55\u65f6\u505a\u6279\u5904\u7406\u662f\u4e0d\u4e00\u81f4\u7684\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u4ee3\u7801\uff0c\u6bcf\u6b21\u70b9\u51fb\uff0c\u867d\u7136 set \u4e86\u4e24\u4e2a\u72b6\u6001\uff0c\u4f46\u662f\u53ea\u4f1a\u89e6\u53d1\u4e00\u6b21 rerender\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  const [count, setCount] = useState(0);\n  const [flag, setFlag] = useState(false);\n\n  function handleClick() {\n    setCount(c => c + 1); // \u8fd8\u6ca1\u6709\u91cd\u65b0\u6e32\u67d3\n    setFlag(f => !f); // \u8fd8\u6ca1\u6709\u91cd\u65b0\u6e32\u67d3\n    // React \u5c06\u53ea\u4f1a\u91cd\u65b0\u6e32\u67d3\u4e00\u6b21\uff08\u8fd9\u662f\u6279\u5904\u7406\uff09\n  }\n\n  return (\n    <div>\n      <button onClick={handleClick}>Next</button>\n      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"\u4f46\u662f\u4e0b\u9762\u8fd9\u79cd\u60c5\u51b5\uff0c\u4e0d\u4f1a\u6279\u5904\u7406\u3002Promise\u3001setTimeout\u3001\u539f\u751f\u4e8b\u4ef6\u6216\u5176\u4ed6\u4e8b\u4ef6\u5185\u90e8\u7684\u66f4\u65b0\u90fd\u4e0d\u4f1a\u89e6\u53d1\u6279\u5904\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function handleClick() {\n  fetchSomething().then(() => {\n    // React 17 \u548c\u66f4\u65e9\u7248\u672c\u4e0d\u4f1a\u6279\u5904\u7406\u8fd9\u4e9b\uff0c\u56e0\u4e3a\u5b83\u4eec\u5728\u56de\u8c03\u4e8b\u4ef6\u4e4b\u540e\u8fd0\u884c\uff0c\u800c\u4e0d\u662f\u5728\u56de\u8c03\u671f\u95f4\u8fd0\u884c\n    setCount(c => c + 1); // \u5bfc\u81f4\u91cd\u65b0\u6e32\u67d3\n    setFlag(f => !f); // \u5bfc\u81f4\u91cd\u65b0\u6e32\u67d3\n  });\n}\n")),(0,a.kt)("p",null,"PS: \u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.unstable_batchedUpdates")," \u8fd9\u4e2a\u65b9\u6cd5\u6765\u5b9e\u73b0\u6279\u5904\u7406\u3002\u8be5\u65b9\u6cd5\u5728 18 \u4e2d\u4ecd\u4f1a\u4fdd\u7559\u3002"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f\u81ea\u52a8\u6279\u5904\u7406"},"\u4ec0\u4e48\u662f\u81ea\u52a8\u6279\u5904\u7406"),(0,a.kt)("p",null,"\u5728 React 18 \u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"createRoot")," \uff0c\u6240\u6709\u7684\u66f4\u65b0\u90fd\u4f1a\u81ea\u52a8\u6279\u5904\u7406\u3002\u65e0\u8bba\u662f\u5728 setTimeout \u8fd8\u662f\u54ea\u91cc\u90fd\u4f1a\u4fdd\u6301\u4e00\u81f4\u7684\u884c\u4e3a\u3002"),(0,a.kt)("h3",{id:"\u5982\u679c\u4e0d\u60f3\u6279\u5904\u7406"},"\u5982\u679c\u4e0d\u60f3\u6279\u5904\u7406"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.flushSync()")," \u9000\u51fa\u6279\u5904\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { flushSync } from 'react-dom';\n\nfunction handleClick() {\n  flushSync(() => {\n    setCounter(c => c + 1);\n  });\n  // React \u5df2\u7ecf\u66f4\u65b0\u4e86 DOM\n  flushSync(() => {\n    setFlag(f => !f);\n  });\n  // React \u5df2\u7ecf\u66f4\u65b0\u4e86 DOM\n}\n")),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/21"},"Automatic batching for fewer renders in React 18")),(0,a.kt)("h2",{id:"starttransition"},"startTransition"),(0,a.kt)("p",null,"\u8ba9\u60a8\u5728\u6602\u8d35\u7684\u72b6\u6001\u8f6c\u6362\u671f\u95f4\u4fdd\u6301UI\u7684\u54cd\u5e94\u6027"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/41"},"New feature: startTransition")),(0,a.kt)("h2",{id:"usedeferredvalue"},"useDeferredValue"),(0,a.kt)("p",null,"\u5141\u8bb8\u60a8\u5ef6\u8fdf\u66f4\u65b0\u5c4f\u5e55\u4e2d\u4e0d\u592a\u91cd\u8981\u7684\u90e8\u5206"),(0,a.kt)("h2",{id:"suspense-ssr"},"Suspense SSR"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/37"},"New Suspense SSR Architecture in React 18")))}p.isMDXComponent=!0}}]);