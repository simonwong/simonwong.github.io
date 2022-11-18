"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[4949],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(t),k=l,m=s["".concat(p,".").concat(k)]||s[k]||c[k]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(2081),l=(t(9496),t(9613));const a={},o="render \u6d41\u7a0b",i={unversionedId:"advanced/react-deep/stage-render",id:"advanced/react-deep/stage-render",title:"render \u6d41\u7a0b",description:"renderRootSync renderRootConcurrent \u533a\u522b\u662f\u540e\u8005\u591a\u4e86\u4e00\u4e2a shouldYield \u7684\u5224\u65ad\uff0cSheduler \u8981\u6c42\u4e2d\u65ad\u65f6\u5c31\u8981\u4e2d\u65ad\u3002",source:"@site/docs/advanced/react-deep/stage-render.md",sourceDirName:"advanced/react-deep",slug:"/advanced/react-deep/stage-render",permalink:"/docs/advanced/react-deep/stage-render",draft:!1,tags:[],version:"current",lastUpdatedAt:1668735631,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{},sidebar:"advanced",previous:{title:"React 18 \u7684\u65b0\u7279\u6027",permalink:"/docs/advanced/react-deep/react-18-feature"},next:{title:"commit \u9636\u6bb5",permalink:"/docs/advanced/react-deep/stage-commit"}},p={},u=[{value:"\u6267\u884c\u5de5\u4f5c\u5355\u5143",id:"\u6267\u884c\u5de5\u4f5c\u5355\u5143",level:2},{value:"beginWork",id:"beginwork",level:2},{value:"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\uff08\u5373 current == null \u65f6\uff09",id:"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6",level:3},{value:"\u66f4\u65b0\u7ec4\u4ef6\u65f6\uff08\u5373 current != null \u65f6\uff09",id:"\u66f4\u65b0\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6",level:3},{value:"completeWork",id:"completework",level:2},{value:"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\uff08\u5373 current == null \u65f6\uff09",id:"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6-1",level:3},{value:"\u66f4\u65b0\u7ec4\u4ef6\u65f6\uff08\u5373 current != null \u65f6\uff09",id:"\u66f4\u65b0\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6-1",level:3},{value:"\u9700\u8981\u5173\u6ce8\u7684\u91cd\u8981\u65b9\u6cd5",id:"\u9700\u8981\u5173\u6ce8\u7684\u91cd\u8981\u65b9\u6cd5",level:2},{value:"ensureRootIsScheduled",id:"ensurerootisscheduled",level:3}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"render-\u6d41\u7a0b"},"render \u6d41\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202202201216897.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"renderRootSync")," ",(0,l.kt)("inlineCode",{parentName:"p"},"renderRootConcurrent")," \u533a\u522b\u662f\u540e\u8005\u591a\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"shouldYield")," \u7684\u5224\u65ad\uff0cSheduler \u8981\u6c42\u4e2d\u65ad\u65f6\u5c31\u8981\u4e2d\u65ad\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202201261810754.gif",alt:null})),(0,l.kt)("p",null,"\u4ece\u6839\u8282\u70b9\u9012\u5f52\u6267\u884c\u5de5\u4f5c\u5355\u5143\u7684\u8fc7\u7a0b\u53ef\u4ee5\u8ba4\u4e3a\u662f",(0,l.kt)("strong",{parentName:"p"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386")),(0,l.kt)("h2",{id:"\u6267\u884c\u5de5\u4f5c\u5355\u5143"},"\u6267\u884c\u5de5\u4f5c\u5355\u5143"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"performUnitOfWork(workInProgress)")),(0,l.kt)("p",null,"\u5b9e\u8d28\u662f\u4ece\u7236\u8282\u70b9\u5f00\u59cb\u4e00\u76f4\u9012\u5f52\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"beginWork()"),"\u76f4\u5230\u7ed3\u675f\u3002\uff08\u9012\u5f52\u7684\u627e ",(0,l.kt)("inlineCode",{parentName:"p"},"fiber.children"),"\uff09"),(0,l.kt)("p",null,"\u7ed3\u675f\u540e\uff0c\u4ece\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u5f00\u59cb\u5411\u4e0a\u9012\u5f52\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"compeletWork()"),"\u3002\uff08\u627e ",(0,l.kt)("inlineCode",{parentName:"p"},"fiber.sibling"),"\uff0c\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"fiber.return"),"\uff09"),(0,l.kt)("h2",{id:"beginwork"},"beginWork"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"beginWork(current, workInProgress, renderlanes)")),(0,l.kt)("p",null,"\u5206\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,l.kt)("h3",{id:"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6"},"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\uff08\u5373 current == null \u65f6\uff09"),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0d\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"workInProgress.tag"),"\u521b\u5efa\u5b50 fiber \u8282\u70b9\uff0c\u6302\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"workInProgress.child")," \u4e0a"),(0,l.kt)("h3",{id:"\u66f4\u65b0\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6"},"\u66f4\u65b0\u7ec4\u4ef6\u65f6\uff08\u5373 current != null \u65f6\uff09"),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"newProps === oldProps")," \u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"current.tag === workIProgress.tag")," \u65f6\uff0c\u8868\u793a\u53ef\u4ee5\u76f4\u63a5\u590d\u7528\u524d\u4e00\u6b21\u66f4\u65b0\u7684\u5b50 Fiber \u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u5982\u4f55 current \u6ca1\u6709 pending work\uff08\u6ca1\u6709\u53d8\u66f4\uff09\uff0c\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"workInProgress.child")," \u53ef\u4ee5\u76f4\u63a5\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"current.children")," clone"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)")),(0,l.kt)("h2",{id:"completework"},"completeWork"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"completeWork()")),(0,l.kt)("p",null,"\u4e5f\u662f\u5206\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,l.kt)("h3",{id:"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6-1"},"\u9996\u6b21\u6302\u8f7d\u7ec4\u4ef6\u65f6\uff08\u5373 current == null \u65f6\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"createInstance()")," \u901a\u8fc7\u5f53\u524d\u7684 Fiber \u8282\u70b9\u521b\u5efa\u771f\u5b9e\u7684 DOM \u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"appendAllChildren()"),"\u5c06\u6240\u6709\u5b50\u8282\u70b9\u90fd append \u5230\u5f53\u524d DOM \u4e0a\uff08\u56e0\u4e3a\u662f\u81ea\u5e95\u5411\u4e0a\u6267\u884c\u7684\uff0c\u5b50\u8282\u70b9\u7684 DOM \u5148\u751f\u6210\u7684\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a DOM \u8282\u70b9\u8bbe\u7f6e props")),(0,l.kt)("h3",{id:"\u66f4\u65b0\u7ec4\u4ef6\u65f6\u5373-current--null-\u65f6-1"},"\u66f4\u65b0\u7ec4\u4ef6\u65f6\uff08\u5373 current != null \u65f6\uff09"),(0,l.kt)("p",null,"\u91cd\u70b9\u5173\u6ce8 ",(0,l.kt)("inlineCode",{parentName:"p"},"updateHostComponent()")," \u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"workInProgress.updateQueue")," \u6dfb\u52a0\u4e00\u4e2a\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u7ed9 WIP \u6dfb\u52a0\u9700\u8981\u66f4\u65b0\u7684\u6807\u8bc6 ",(0,l.kt)("inlineCode",{parentName:"p"},"workInProgress.flags |= Update")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4e00\u4e9b\u5217\u64cd\u4f5c\u5b8c\u540e\u8fdb\u5165\u5230\u4e0b\u4e00\u4e2a\u9636\u6bb5 ",(0,l.kt)("inlineCode",{parentName:"p"},"commitRoot()")),(0,l.kt)("h2",{id:"\u9700\u8981\u5173\u6ce8\u7684\u91cd\u8981\u65b9\u6cd5"},"\u9700\u8981\u5173\u6ce8\u7684\u91cd\u8981\u65b9\u6cd5"),(0,l.kt)("h3",{id:"ensurerootisscheduled"},"ensureRootIsScheduled"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202203071117141.png",alt:null})),(0,l.kt)("p",null,"\u8be5\u65b9\u6cd5\u662f\u5728 scheduleUpdateOnFiber \u4e2d\u88ab\u8c03\u7528\u7684\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"scheduleSyncCallback()")," \u5c06\u4efb\u52a1\u653e\u5230 ",(0,l.kt)("em",{parentName:"p"},"syncQueue")," \u4e2d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"scheduleMicrotask()")," \u5c06\u4efb\u52a1\u653e\u5230\u5fae\u4efb\u52a1\u4e2d\u8c03\u5ea6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"scheduleCallback()")," \u5c06\u4efb\u52a1\u653e\u5230\u4e00\u4e2a\u4f18\u5148\u7ea7\u961f\u5217\uff08\u6700\u5c0f\u5806\uff09\u4e2d\uff0c\u7acb\u5373\u6267\u884c"))),(0,l.kt)("p",null,"\u5f97\u76ca\u4e8e\u5fae\u4efb\u52a1\uff0c\u53ef\u4ee5\u8fdb\u884c\u6279\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48 17 \u4e5f\u662f\u7528\u4e86\u5fae\u4efb\u52a1\uff0c\u4f46\u6ca1\u6709\u6279\u5904\u7406\uff0c\u56e0\u4e3a\u5728 scheduleUpdateOnFiber \u4e2d\uff0c\u5224\u65ad\u4e86\u5982\u679c\u7528\u7684\u662f\u65e7\u7248\u672c\u7684\u4f7f\u7528\u65b9\u5f0f\uff08\u4e3a\u4e86\u517c\u5bb9\uff0c\u907f\u514d\u95ee\u9898\uff09\uff0c\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"scheduleCallback")," \u7acb\u5373\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5728\u4ee5\u524d\u7684\u7248\u672c\u4e2d\uff0cReact \u63a5\u7ba1\u4e86\u4e8b\u4ef6\uff0c\u4f1a\u5728\u4e8b\u4ef6\u5f00\u59cb\u65f6 isBatchingEventUpdates = true\uff0c \u4e8b\u4ef6\u7ed3\u675f\u540e isBatchingEventUpdates = false\uff0c\u6765\u5f00\u542f\u6279\u91cf\u5904\u7406\u3002\u800c setTimeout \u7b49\u7684\u56de\u8c03\u4f1a\u8131\u79bb\u8fd9\u4e2a\u63a7\u5236\u3002"))}c.isMDXComponent=!0}}]);