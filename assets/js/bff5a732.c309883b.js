"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[6472],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(2081),n=(r(9496),r(9613));const l={},i="React Conf",o={unversionedId:"share/2021/react-conf-2021",id:"share/2021/react-conf-2021",title:"React Conf",description:"Part1",source:"@site/docs/share/2021/react-conf-2021.md",sourceDirName:"share/2021",slug:"/share/2021/react-conf-2021",permalink:"/docs/share/2021/react-conf-2021",draft:!1,tags:[],version:"current",lastUpdatedAt:1662602599,formattedLastUpdatedAt:"Sep 8, 2022",frontMatter:{},sidebar:"share",previous:{title:"\u4e1a\u52a1\u7ec4\u4ef6\u8bbe\u8ba1 \u2014\u2014\u4e2a\u4eba\u5b9e\u8df5",permalink:"/docs/share/2021/\u8bbe\u8ba1\u5f00\u53d1\u4e1a\u52a1\u7ec4\u4ef6\u7684\u4e2a\u4eba\u5b9e\u8df5"},next:{title:"\u7b97\u6cd5\u5206\u4eab",permalink:"/docs/share/2020/\u7b97\u6cd5\u5206\u4eab\u9012\u5f52\u5230\u6811\u5230\u52a8\u6001\u89c4\u5212"}},p={},c=[{value:"Part1",id:"part1",level:2},{value:"Suspense",id:"suspense",level:3},{value:"Concurrent features",id:"concurrent-features",level:3},{value:"Server Components",id:"server-components",level:3},{value:"React Native",id:"react-native",level:3},{value:"feature",id:"feature",level:3},{value:"upgrate",id:"upgrate",level:3},{value:"React Developer tooling",id:"react-developer-tooling",level:3},{value:"React without memo",id:"react-without-memo",level:3},{value:"Part2",id:"part2",level:2},{value:"The ROI of Designing with React",id:"the-roi-of-designing-with-react",level:3},{value:"Interactive playgrounds with React",id:"interactive-playgrounds-with-react",level:3},{value:"Part3",id:"part3",level:2},{value:"Relay",id:"relay",level:3},{value:"React Native Desktop",id:"react-native-desktop",level:3},{value:"On-device Machine Learning for React Native",id:"on-device-machine-learning-for-react-native",level:3},{value:"Part4",id:"part4",level:3},{value:"React 18 for External Store Libraries",id:"react-18-for-external-store-libraries",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"react-conf"},"React Conf"),(0,n.kt)("h2",{id:"part1"},"Part1"),(0,n.kt)("p",null,"\u4e3b\u8981\u8bb2 React18 \u7684\u65b0\u7279\u6027"),(0,n.kt)("h3",{id:"suspense"},"Suspense"),(0,n.kt)("p",null,"react query / swr"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"<Suspense fallback={<Spinner />}>\n    <List  />\n</Suspense>\n")),(0,n.kt)("p",null,"CLient: Code splitting ",(0,n.kt)("inlineCode",{parentName:"p"},"React.lazy"),"  16-17\uff1blike Relay"),(0,n.kt)("p",null,"Server: Streaming server rendering 16-18"),(0,n.kt)("p",null,"(Suspense \u7f13\u5b58?)"),(0,n.kt)("p",null,"Suspense on server"),(0,n.kt)("p",null,"\u5728 Suspense  loading \u65f6\uff0cserver \u53ef\u4ee5\u76f4\u5148\u52a0\u8f7d\u90e8\u5206"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Suspense demo")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/kind-sammet-j56ro?file=/src/App.js"},"https://codesandbox.io/s/kind-sammet-j56ro?file=/src/App.js")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"New Suspense SSR Architecture in React 18")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/37"},"https://github.com/reactwg/react-18/discussions/37")),(0,n.kt)("h3",{id:"concurrent-features"},"Concurrent features"),(0,n.kt)("p",null,"Concurrent rendering\u5e76\u53d1\u6e32\u67d3"),(0,n.kt)("h3",{id:"server-components"},"Server Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ea\u5728\u670d\u52a1\u5668\u6e32\u67d3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"0 bundle"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202112091457531.png",alt:null})),(0,n.kt)("h3",{id:"react-native"},"React Native"),(0,n.kt)("p",null,"React 18 in React Native"),(0,n.kt)("h3",{id:"feature"},"feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Automatic batching \u81ea\u52a8\u6279\u5904\u7406\uff0c\uff08\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\u3001\u539f\u751f\u4e8b\u4ef6\u4e2d\u7684\uff09 \u591a\u4e2asetState \u5408\u5e76\u4e3a \u4e00\u6b21 rerender\uff0c\u53ef\u4ee5\u4f7f\u7528 flushSync \u7981\u6b62\u6279\u5904\u7406")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"new apis"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"startTransition"),(0,n.kt)("li",{parentName:"ul"},"useTransition"),(0,n.kt)("li",{parentName:"ul"},"useDeferredValue() \u5ef6\u8fdf\u4e0d\u600e\u4e48\u8981\u7d27\u7684\u7ec4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"useId"),(0,n.kt)("li",{parentName:"ul"},"useSyncExternalStore")))),(0,n.kt)("h3",{id:"upgrate"},"upgrate"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"add react@beta react-dom@beta")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("del",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"del"},"ReactDOM.render()"))," ",(0,n.kt)("inlineCode",{parentName:"li"},"ReactDOM.creaetRoot().render()"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Upgrade demo")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/oldboyxx/jira_clone"},"https://github.com/oldboyxx/jira_clone")),(0,n.kt)("h3",{id:"react-developer-tooling"},"React Developer tooling"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"State \u4f1a\u901a\u8fc7map\u6587\u4ef6\u89e3\u6790\u5230\u547d\u540d"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e timeline")),(0,n.kt)("h3",{id:"react-without-memo"},"React without memo"),(0,n.kt)("p",null,"react forget"),(0,n.kt)("p",null,"\u6211\u60f3\u8fd9\u5e94\u8be5\u662f\u4e00\u4e2a\u7f16\u8bd1\u5de5\u5177\uff0c\u5e2e\u52a9\u5904\u7406 react memo\uff0c\u907f\u514d\u4eba\u5de5\u53bb\u5199\u5927\u91cf\u7684 useMemo\u3001useCallback \u8fd9\u6837\u7684\u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\u601d\u8def\u5f88\u68d2\uff0c\u4f46\u611f\u89c9\u95ee\u9898\u4f1a\u5f88\u591a\uff0c\u5f88\u96be\u5f88\u5feb\u7684 RC"),(0,n.kt)("h2",{id:"part2"},"Part2"),(0,n.kt)("p",null,"\u4e3b\u8981\u8bb2 React \u7684\u65b0\u6587\u6863\u7f51\u7ad9",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/"},"beta.reactjs.org")),(0,n.kt)("h3",{id:"the-roi-of-designing-with-react"},"The ROI of Designing with React"),(0,n.kt)("p",null,"Figma \u7684\u8bbe\u8ba1\u601d\u8def\u5bf9\u5e94 React \u7ec4\u4ef6\u5f00\u53d1\u601d\u8def\u7684\u501f\u9274\u3002"),(0,n.kt)("p",null,"Component\uff08\u7ec4\u4ef6\uff09 -> Composition \uff08\u7ec4\u5408\uff09"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learnreact.design/"},"https://learnreact.design/")),(0,n.kt)("h3",{id:"interactive-playgrounds-with-react"},"Interactive playgrounds with React"),(0,n.kt)("p",null,"Mdx "),(0,n.kt)("h2",{id:"part3"},"Part3"),(0,n.kt)("p",null,"relay\u3001RN \u684c\u9762\u7aef\u3001\u673a\u5668\u5b66\u4e60"),(0,n.kt)("h3",{id:"relay"},"Relay"),(0,n.kt)("h3",{id:"react-native-desktop"},"React Native Desktop"),(0,n.kt)("h3",{id:"on-device-machine-learning-for-react-native"},"On-device Machine Learning for React Native"),(0,n.kt)("h3",{id:"part4"},"Part4"),(0,n.kt)("h3",{id:"react-18-for-external-store-libraries"},"React 18 for External Store Libraries"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202112121154013.png",alt:null})),(0,n.kt)("p",null,"external stores \u5728 React 18 \u7684 concurrent render \u4e2d\u53ef\u80fd\u4f1a\u5b58\u5728\u95ee\u9898\uff0c\u540c\u4e00\u4e2a\u4e1c\u897f\u5728\u4e0d\u540c\u7ec4\u4ef6"),(0,n.kt)("p",null,"\u67e5\u770b\u8fd9\u4e2a\u7528\u4f8b",(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/mousepositionx-ov7px"},"https://codesandbox.io/s/mousepositionx-ov7px")),(0,n.kt)("p",null,"\u4f7f\u7528\u65b0\u7684 api ",(0,n.kt)("inlineCode",{parentName:"p"},"useSyncExternalStore")," \u6765\u89e3\u51b3"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/easy-exteral-state-in-react-18-hy3w8"},"https://codesandbox.io/s/easy-exteral-state-in-react-18-hy3w8")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Shopify/hydrogen"},"https://github.com/Shopify/hydrogen")))}u.isMDXComponent=!0}}]);