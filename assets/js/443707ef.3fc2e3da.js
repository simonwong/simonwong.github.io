"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[8818],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,k=d["".concat(o,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(5900),a=n(4750),l=(n(9496),n(9613)),i=["components"],c={},o="React \u8bcd\u6c47\u8868",p={unversionedId:"advanced/react-deep/react-glossary",id:"advanced/react-deep/react-glossary",title:"React \u8bcd\u6c47\u8868",description:"\u8be6\u89c1 Glossary + Explain Like I'm Five",source:"@site/docs/advanced/react-deep/react-glossary.md",sourceDirName:"advanced/react-deep",slug:"/advanced/react-deep/react-glossary",permalink:"/docs/advanced/react-deep/react-glossary",tags:[],version:"current",frontMatter:{},sidebar:"advanced",previous:{title:"Fiber \u7684\u76f8\u5173\u6982\u5ff5",permalink:"/docs/advanced/react-deep/fiber"},next:{title:"React 18 \u7684\u65b0\u7279\u6027",permalink:"/docs/advanced/react-deep/react-18-feature"}},s=[{value:"Concurrency \u5e76\u53d1",id:"concurrency-\u5e76\u53d1",children:[],level:2},{value:"Suspense",id:"suspense",children:[],level:2},{value:"Hydration",id:"hydration",children:[],level:2},{value:"Passie effects",id:"passie-effects",children:[],level:2},{value:"Discrete events",id:"discrete-events",children:[],level:2},{value:"Promise tick",id:"promise-tick",children:[],level:2},{value:"flush sync",id:"flush-sync",children:[],level:2},{value:"Debouncing &amp; Throttling",id:"debouncing--throttling",children:[],level:2},{value:"Server Components",id:"server-components",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"react-\u8bcd\u6c47\u8868"},"React \u8bcd\u6c47\u8868"),(0,l.kt)("p",null,"\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/46"},"Glossary + Explain Like I'm Five")),(0,l.kt)("h2",{id:"concurrency-\u5e76\u53d1"},"Concurrency \u5e76\u53d1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e76\u53d1\u610f\u5473\u7740\u4efb\u52a1\u53ef\u4ee5\u91cd\u53e0\u3002")),(0,l.kt)("p",null,"\u4ee5\u6253\u7535\u8bdd\u4e3a\u4f8b\u5b50\uff1a"),(0,l.kt)("p",null,"\u6ca1\u6709\u5e76\u53d1\uff0c\u610f\u5473\u7740\u4e00\u6b21\u53ea\u80fd\u8fdb\u884c\u4e00\u6b21\u7535\u8bdd\u4ea4\u8c08\uff0c\u5148\u8ddf Alice \u901a\u8bdd\uff0c\u800c Bob \u6253\u7535\u8bdd\u7ed9\u6211\u5fc5\u987b\u5148\u7ed3\u675f Alice \u7684\u901a\u8bdd\uff0c\u624d\u80fd\u4e0e Bob \u901a\u8bdd\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202202081018443.png",alt:null})),(0,l.kt)("p",null,"\u5e76\u53d1\uff0c\u610f\u5473\u7740\u4e00\u6b21\u53ef\u4ee5\u8fdb\u884c\u591a\u4e2a\u5bf9\u8bdd\uff0c\u6211\u53ef\u4ee5\u5148\u8ba9 Alice \u6682\u505c\u4e00\u4f1a\u513f\uff0c\u8ddf Bob \u901a\u8bdd\u540e\u518d\u6062\u590d Alice \u7684\u901a\u8bdd\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202202081019915.png",alt:null})),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5e76\u53d1\u4e0d\u4e00\u5b9a\u610f\u5473\u7740\u540c\u65f6\u8ddf\u4e24\u4e2a\u4eba\u4ea4\u8c08\uff0c\u800c\u662f\u5728\u6253\u591a\u4e2a\u7535\u8bdd\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u8ddf\u8c01\u4ea4\u8c08\u3002"),(0,l.kt)("p",null,"\u5728 React \u4e2d\uff0c\u6240\u6709\u66f4\u65b0\u90fd\u662f\u7d27\u6025\u7684\uff0c\u4e00\u65e6\u5f00\u59cb\u91cd\u65b0\u6e32\u67d3\u65e0\u6cd5\u505c\u6b62\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"startTransition")," \u53ef\u4ee5\u5c06\u975e\u7d27\u6025\u72b6\u6001\u505a\u6807\u8bb0\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u7ed9 Alice \u505a\u8fc7\u6e21\u6807\u8bb0\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"startTransition"),"\uff09\uff0cBob \u7684\u901a\u8bdd\u662f\u7d27\u6025\u7684\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"setState"),"\uff09\uff0c\u53ef\u4ee5\u6682\u505c Alice \u7684\u901a\u8bdd\u3002"),(0,l.kt)("h2",{id:"suspense"},"Suspense"),(0,l.kt)("p",null,'\u7ec4\u4ef6\u53ef\u4ee5\u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u558a\u6682\u505c\uff1a\u201c\u6682\u505c\uff0c\u6211\u8fd8\u6ca1\u51c6\u5907\u597d\uff0c\u8bf7\u4e0d\u8981\u6e32\u67d3\u6211 \u2014\u2014 \u8fd9\u662f\u4e00\u4e2a\u5bfb\u547c\u673a\uff0c\u6211\u51c6\u5907\u597d\u540e\u4f1a ping \u4f60\u201d\uff08\u5728\u6e90\u7801\u4e2d\u5524\u9192\u8c03\u7528\u53eb "pings" ',(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/0e100ed00fb52cfd107db1d1081ef18fe4b9167f/packages/react-reconciler/src/ReactFiberThrow.new.js#L161-L190"},"attachPingListener"),"\uff09"),(0,l.kt)("p",null,"React \u4f1a\u5411\u4e0a\u67e5\u627e\u6700\u8fd1\u7684 Suspense\uff0c\u8be5 Suspense \u5305\u542b\u4e86\u7528\u6237\u8bbe\u7f6e\u597d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"fallback")," \u76f4\u5230\u63a5\u53d7\u5230 ping\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/28"},"Analogies for thinking & teaching Suspense?")),(0,l.kt)("h2",{id:"hydration"},"Hydration"),(0,l.kt)("p",null,"SSR \u5141\u8bb8\u4f60\u5c06\u670d\u52a1\u5668\u4e0a\u7684\u7ec4\u4ef6\u6e32\u67d3\u4e3aHTML \u5e76\u53d1\u9001\u7ed9\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u5f97\u7528\u6237\u5728\u52a0\u8f7d JS \u65f6\u5c31\u770b\u5230\u7b80\u5355\u7684\u4e1c\u897f\uff08\u4ec5\u4ec5\u7b80\u5355\u7684\u5c55\u793a\uff0c\u7531\u4e8e JS \u5c1a\u672a\u52a0\u8f7d\uff0c\u6309\u94ae\u70b9\u51fb\u90fd\u4e0d\u4f1a\u6709\u6548\u3002\uff09"),(0,l.kt)("p",null,"\u5f53 JS \u90fd\u52a0\u8f7d\u5b8c\u6210\uff0c\u544a\u8bc9 React \u201c App \u7ec4\u4ef6\u662f\u5728\u670d\u52a1\u5668\u4e0a\u751f\u6210\u7684\uff0c\u5c06\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u9644\u52a0\u5230\u8be5 HTML \u4e0a\uff01\u201d\u3002 React \u4f1a\u5728\u5185\u5b58\u4e2d\u6e32\u67d3\u4f60\u7684\u7ec4\u4ef6\u6811\uff0c\u4f46\u5b83\u4e0d\u4f1a\u4e3a\u5b83\u751f\u6210 DOM \u8282\u70b9\uff0c\u800c\u662f\u4f1a\u5c06\u6240\u6709\u903b\u8f91\u9644\u52a0\u5230\u73b0\u6709\u7684 HTML \u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'\u8fd9\u4e2a\u6e32\u67d3\u7ec4\u4ef6\u548c\u9644\u52a0\u5904\u7406\u4e8b\u4ef6\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u79f0\u4e3a "hydration"')),(0,l.kt)("p",null,"hydration \u540e\u9875\u9762\u53ef\u4ee5\u6b63\u5e38\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/37"},"New Suspense SSR Architecture in React 18 #What Is SSR?")),(0,l.kt)("h2",{id:"passie-effects"},"Passie effects"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd effect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useEffect"),' = "effects"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"),' = "layout effects"')),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bb2 passie effects \u5c31\u662f\u6307 ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect")," \uff1f\uff1f\uff1f"),(0,l.kt)("h2",{id:"discrete-events"},"Discrete events"),(0,l.kt)("p",null,'"discrete events" \u4e0d\u662f\u5728\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u6982\u5ff5\u3002\u5f53\u89e3\u91ca\u81ea\u52a8\u6279\u5904\u7406\u65f6\u4f1a\u7528\u5230\u8fd9\u4e2a\u3002'),(0,l.kt)("p",null,'\u6bd4\u5982\u8ba1\u6570\u5668\u8fde\u7eed\u70b9\u51fb\u4e24\u6b21\u6309\u94ae\uff0c\u5982\u679c\u8f93\u5165 "h" "e" "l" "l" "o" \u610f\u5473\u7740\u8f93\u5165"hello"\uff0c\u6bcf\u4e2a\u4e8b\u4ef6\u90fd\u662f\u7528\u6237\u6307\u5b9a\u7684\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u79f0\u4e4b\u4e3a "discrete"\uff08\u79bb\u6563\u7684\uff09\u3002'),(0,l.kt)("p",null,'\u4e0e mousemove \u4e8b\u4ef6\u4e0d\u540c\uff0c\u7528\u6237\u79fb\u52a8\u9f20\u6807\u5230 10 \u4e2a\u5750\u6807\u4e0a\uff0c\u4e0d\u662f\u6545\u610f\u6307\u5b9a\u5230\u67d0\u4e2a\u5750\u6807\u7684\uff0c\u7528\u6237\u4e0d\u77e5\u9053\u6267\u884c\u4e86\u591a\u5c11\u6b21 mousemove \u4e8b\u4ef6\uff0c\u8fd9\u7c7b\u4e8b\u4ef6\u79f0\u4e3a "continuous"\uff08\u8fde\u7eed\u7684\uff09\u3002'),(0,l.kt)("h2",{id:"promise-tick"},"Promise tick"),(0,l.kt)("p",null,'"promise tick" \u662f\u6307\u6062\u590d\u7b49\u5f85 promise \u7684\u51fd\u6570\u7684\u65f6\u523b\u3002\u79f0\u4e3a tick \u56e0\u4e3a\u5b83\u5c31\u662f\u4e00\u4e2a\u8ba1\u65f6\u5668\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let food = await cook()\neat(food)\n")),(0,l.kt)("p",null,"\u4f60\u7684\u51fd\u6570\u4e0d\u4f1a\u4e00\u6b21\u5168\u90e8\u6267\u884c\uff0c\u6bcf\u4e2a await \u201c\u62c6\u5206\u201d\u4f60\u7684\u529f\u80fd\u3002\u6709\u4e00\u90e8\u5206\u5728\u4e4b\u524d\u8fd0\u884c\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"cook()"),"\u7ed9\u4f60\u4e00\u4e2a\u627f\u8bfa\uff09\uff0c\u7136\u540e\u4f60\u8bf4\u5f53\u98df\u7269\u5b8c\u6210\u540e\u6062\u590d\uff0c\u5176\u4ed6\u4ee3\u7801\u5c06\u80fd\u591f\u540c\u65f6\u6267\u884c\u3002\u6700\u540e\uff0c\u5f53\u98df\u7269\u51c6\u5907\u597d\u65f6\uff0c\u4f60\u4f1a\u8df3\u56de\u5230\u8fd9\u4e2a\u51fd\u6570\uff0c\u521d\u59cb\u5316",(0,l.kt)("inlineCode",{parentName:"p"},"food"),"\u53d8\u91cf\uff0c\u7136\u540e\u5403\u6389\u5b83\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u60f3\u8c61\u6210\u7b49\u5f85\u9910\u9986\u8001\u677f\u6253\u7535\u8bdd\u7ed9\u6211\uff08\u98df\u7269\u597d\u4e86\uff09\u7684\u4e00\u4e2a\u8ba1\u65f6\u5668\u3002"),(0,l.kt)("h2",{id:"flush-sync"},"flush sync"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"flushSync")," \u65b9\u6cd5\u5141\u8bb8\u4f60\u544a\u8bc9 React \u7acb\u523b\u5237\u65b0\u5c4f\u5e55\uff08\u540c\u6b65\uff09"),(0,l.kt)("h2",{id:"debouncing--throttling"},"Debouncing & Throttling"),(0,l.kt)("p",null,"\u9632\u6296\u8282\u6d41\u539f\u7406\u5c31\u4e0d\u90fd\u8bf4\u4e86\uff0c\u5e94\u7528\u5230 React \u7684 state => UI \u770b\u770b\u3002\u4ee5\u7528\u6237\u6253\u5b57\u8f93\u5165\uff0c\u66f4\u65b0\u5c4f\u5e55\u5c55\u793a\u4e3a\u4f8b\uff0c\u4f60\u8981\u4e48\u7b49\u5f85\u7528\u6237\u505c\u6b62\u8f93\u5165\uff08\u9632\u6296\uff09\uff0c\u8981\u4e48\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u66f4\u65b0\uff08\u8282\u6d41\uff09\u3002"),(0,l.kt)("p",null,"React 18\u4e2d\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/41"},"startTransition")," \u4f7f\u5f97\u8fd9\u4e24\u79cd\u7b56\u7565\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\u90fd\u662f\u4e0d\u5fc5\u8981\u7684\uff0c\u770b\u770b React\u7684\u7b56\u7565\u3002"),(0,l.kt)("p",null,"\u4f60\u548c\u670b\u53cb\u8fbe\u6210\u4e00\u81f4\uff0c\u4f60\u7684\u670b\u53cb\u8bf4\u5b8c\u4e00\u53e5\u8bdd\u540e\uff0c\u60a8\u7acb\u5373\u5f00\u59cb\u56de\u590d\uff0c\u65e0\u9700\u7b49\u5f85\u3002\u4f46\u662f\uff0c\u5982\u679c\u670b\u53cb\u60f3\u7ee7\u7eed\u8bf4\uff0c\u90a3\u53ef\u80fd\u4f1a\u6253\u65ad\u4f60\uff0c\u56e0\u6b64\u4f60\u653e\u5f03\u56de\u590d\uff0c\u7b49\u5f85\u4e0b\u4e00\u6b21\u518d\u8bd5\u3002\uff08\u5982\u679c\u8fc7\u4e86\u4e00\u5b9a\u65f6\u95f4\uff0c\u4f60\u90fd\u6ca1\u6709\u673a\u4f1a\u56de\u590d\uff0c\u4f60\u53ef\u4ee5\u6253\u65ad\u4ed6\u4eec\uff0c\u9632\u6b62\u4f60\u4e00\u76f4\u6ca1\u673a\u4f1a\u56de\u590d\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202202081356461.png",alt:null})),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://react-beta-seven.vercel.app/"},"\u5728\u7ebf\u793a\u4f8b")),(0,l.kt)("h2",{id:"server-components"},"Server Components"))}d.isMDXComponent=!0}}]);