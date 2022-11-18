"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[8989],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(2081),a=(n(9496),n(9613));const l={},i="Fiber \u7684\u76f8\u5173\u6982\u5ff5",o={unversionedId:"advanced/react-deep/fiber",id:"advanced/react-deep/fiber",title:"Fiber \u7684\u76f8\u5173\u6982\u5ff5",description:"Fiber",source:"@site/docs/advanced/react-deep/fiber.md",sourceDirName:"advanced/react-deep",slug:"/advanced/react-deep/fiber",permalink:"/docs/advanced/react-deep/fiber",draft:!1,tags:[],version:"current",lastUpdatedAt:1668735631,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{},sidebar:"advanced",previous:{title:"\u6df1\u5165\u5b66\u4e60 React",permalink:"/docs/advanced/react-deep/"},next:{title:"React \u8bcd\u6c47\u8868",permalink:"/docs/advanced/react-deep/react-glossary"}},p={},s=[{value:"Fiber",id:"fiber",level:2},{value:"Fiber tree root",id:"fiber-tree-root",level:2},{value:"workInProgress",id:"workinprogress",level:2},{value:"\u526f\u4f5c\u7528\uff08side-effect\uff09",id:"\u526f\u4f5c\u7528side-effect",level:2},{value:"Effects list",id:"effects-list",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fiber-\u7684\u76f8\u5173\u6982\u5ff5"},"Fiber \u7684\u76f8\u5173\u6982\u5ff5"),(0,a.kt)("h2",{id:"fiber"},"Fiber"),(0,a.kt)("p",null,"React \u4e3a\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u521b\u5efa\u4e86\u4e00\u4e2a Fiber \u8282\u70b9\uff0c\u6700\u7ec8\u7ec4\u6210\u4e00\u9897 Fiber \u6811\uff0c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202201261708798.png",alt:null})),(0,a.kt)("p",null,"Fiber \u662f\u4e00\u4e2a\u94fe\u8868\u7ed3\u6784\uff0cchild \u6307\u5411\u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9\uff0csibling \u6307\u5411\u4e0b\u4e00\u4e2a\u5144\u5f1f\u8282\u70b9\uff0creturn \u6307\u5411\u7236\u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function FiberNode(\n  tag: WorkTag,\n  pendingProps: mixed,\n  key: null | string,\n  mode: TypeOfMode,\n) {\n  // \u5b9e\u4f8b\n  this.tag = tag;\n  this.key = key; // \u4e00\u7ec4\u5b50\u8282\u70b9\u7684\u552f\u4e00\u6807\u8bc6\u7b26\n  this.elementType = null; // element.type\n  this.type = null; // \u6307\u5411\u7ec4\u4ef6\u7684\u51fd\u6570\u3001\u6784\u9020\u51fd\u6570\u3001DOM \u8282\u70b9\u7684 HTML tag\n  this.stateNode = null; // \u5bf9\u7ec4\u4ef6\u3001DOM\u8282\u70b9\u6216\u4e0e\u5149\u7ea4\u8282\u70b9\u5173\u8054\u7684\u5176\u4ed6\u5143\u7d20\u7c7b\u578b\u7684\u7c7b\u5b9e\u4f8b\u7684\u5f15\u7528\n\n  // Fiber \u5f15\u7528\n  this.return = null; // \u7236\u8282\u70b9\n  this.child = null; // \u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9\n  this.sibling = null; // \u4e0b\u4e00\u4e2a\u5144\u5f1f\u8282\u70b9\n  this.index = 0;\n\n  this.ref = null;\n\n  this.pendingProps = pendingProps; // \u6839\u636eReact\u5143\u7d20\u4e2d\u7684\u65b0\u6570\u636e\u66f4\u65b0\u7684 props\uff0c\u9700\u8981\u5e94\u7528\u4e8e\u5b50\u7ec4\u4ef6\u6216DOM\u5143\u7d20\u3002\n  this.memoizedProps = null; // \u5728\u4e0a\u4e00\u6b21\u6e32\u67d3\u671f\u95f4\u7528\u4e8e\u521b\u5efa\u8f93\u51fa\u7684 fiber props\n  this.updateQueue = null; // \u72b6\u6001\u66f4\u65b0\u3001\u56de\u8c03\u548cDOM\u66f4\u65b0\u7684\u961f\u5217\u3002\n  this.memoizedState = null; // \u7528\u4e8e\u521b\u5efa\u8f93\u51fa\u7684\u5149\u7ea4\u7684\u72b6\u6001\u3002\u5904\u7406\u66f4\u65b0\u65f6\uff0c\u5b83\u4f1a\u53cd\u6620\u5c4f\u5e55\u4e0a\u5f53\u524d\u5448\u73b0\u7684\u72b6\u6001\u3002\n  this.dependencies = null; // \u4f9d\u8d56\u9879\uff08\u4e0a\u4e0b\u6587\u3001\u4e8b\u4ef6\uff09\uff08\u5982\u679c\u6709\uff09\n\n  this.mode = mode; // \u63cf\u8ff0 fiber \u53ca\u5176\u5b50\u6811\u5c5e\u6027\u7684\u4f4d\u5b57\u6bb5\u3002\n\n  // \u526f\u4f5c\u7528\n  this.flags = NoFlags; // \u526f\u4f5c\u7528\u6807\u8bc6\uff0c\u4ee5\u524d\u53eb\u505a effectTag\n  this.subtreeFlags = NoFlags;\n  this.deletions = null;\n\n  // \u4efb\u52a1\u6279\u6b21\n  this.lanes = NoLanes;\n  this.childLanes = NoLanes;\n\n  this.alternate = null;\n}\n")),(0,a.kt)("h2",{id:"fiber-tree-root"},"Fiber tree root"),(0,a.kt)("p",null,"React \u4e3a\u6bcf\u4e2a\u5bb9\u5668\u521b\u5efa\u4e00\u4e2a fiber root\u3002\u6e90\u7801\u4e2d\u4e00\u822c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"HostRoot")),(0,a.kt)("h2",{id:"workinprogress"},"workInProgress"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b21\u6e32\u67d3\u8fc7\u540e\uff0cReact \u6700\u7ec8\u4f1a\u751f\u6210\u4e00\u9897 Fiber \u6811\u3002\u8fd9\u68f5\u6811\u901a\u5e38\u5728\u6e90\u7801\u4e2d\u53eb\u505a ",(0,a.kt)("inlineCode",{parentName:"p"},"current"),"\uff08\u9996\u6b21\u6e32\u67d3\u4e2d current \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uff09\u3002"),(0,a.kt)("p",null,"\u5f53 React \u5f00\u59cb\u5904\u7406\u66f4\u65b0\u65f6\uff0cReact \u4f1a\u751f\u6210\u4e00\u9897 ",(0,a.kt)("inlineCode",{parentName:"p"},"workInProgress")," \u6811\u3002"),(0,a.kt)("p",null,"\u6240\u7528\u5de5\u4f5c\u90fd\u5728 workInProgress tree \u7684 Fiber \u4e0a\u6267\u884c\uff0c\u4e00\u65e6\u6574\u68f5\u6811\u66f4\u65b0\u5b8c\u5e76\u5728\u5c4f\u5e55\u4e0a\u5448\u73b0\uff0c\u4ed6\u5c31\u53d8\u6210\u4e86 current\u3002"),(0,a.kt)("p",null,"React \u603b\u662f\u4e00\u6b21\u6027\u66f4\u65b0 DOM\uff0c\u4e0d\u4f1a\u663e\u793a\u90e8\u5206\u7ed3\u679c\uff0cworkInProgress tree \u5145\u5f53\u7740\u4e0d\u53ef\u89c1\u7684\u4e2d\u95f4\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u526f\u4f5c\u7528side-effect"},"\u526f\u4f5c\u7528\uff08side-effect\uff09"),(0,a.kt)("p",null,"\u5728 react \u4e2d\uff0c\u6240\u6709\u7ec4\u4ef6\u53ef\u4ee5\u89c6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"(state, props) => UI"),"\u3002"),(0,a.kt)("p",null,"\u6267\u884c\u8fc7\u6570\u636e\u83b7\u53d6\u3001\u8ba2\u9605\u6216\u624b\u52a8\u66f4\u6539React\u7ec4\u4ef6\u7684DOM\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u526f\u4f5c\u7528\uff0c\u7b80\u79f0 ",(0,a.kt)("inlineCode",{parentName:"p"},"effect"),"\u3002\u5927\u591a\u6570\u7684 state\u3001props \u66f4\u65b0\u90fd\u5c06\u5bfc\u81f4\u526f\u4f5c\u7528\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u526f\u4f5c\u7528\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e00\u4e2a\u5de5\u4f5c\uff08work\uff09\u3002\u4e00\u4e2a fiber \u8282\u70b9\u662f\u4e00\u4e2a\u5f88\u65b9\u4fbf\u7684\u673a\u5236\u53bb\u8ddf\u8e2a\u66f4\u65b0\u7684 effect\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u73b0\u5728\u4f7f\u7528",(0,a.kt)("em",{parentName:"p"},"flags")," \u5c5e\u6027\u6807\u8bc6\u7684\uff08\u4ee5\u524d\u8fd9\u4e2a\u5c5e\u6027\u540d\u53eb ",(0,a.kt)("em",{parentName:"p"},"effectTag"),"\uff09"),(0,a.kt)("h2",{id:"effects-list"},"Effects list"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f effects list \u5df2\u7ecf\u88ab\u91cd\u6784\u4e86\uff0c\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/facebook/react/pull/19261"},"Effects list refactor"))),(0,a.kt)("p",null,"\u5982\u679c\u5728 wip \u6811\u4e0a\u9012\u5f52\u627e\u8981\u66f4\u65b0\u7684\u8282\u70b9\u4f1a\u6bd4\u8f83\u6162\uff0creact \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7ebf\u6027\u7684\u6570\u636e\u7ed3\u6784 effect list\uff0c\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u662f\u9700\u8981\u66f4\u65b0\u7684\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\uff0c effects list \u4f1a\u8df3\u8fc7\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202201261547305.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202201261548456.png",alt:null})))}u.isMDXComponent=!0}}]);