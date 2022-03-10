"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[675],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=o(n),k=r,m=s["".concat(i,".").concat(k)]||s[k]||c[k]||p;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<p;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var a=n(5900),r=n(4750),p=(n(9496),n(9613)),l=["components"],u={},i="\u72b6\u6001\u66f4\u65b0",o={unversionedId:"advanced/react-deep/state-change",id:"advanced/react-deep/state-change",title:"\u72b6\u6001\u66f4\u65b0",description:"\u66f4\u65b0\u4f18\u5148\u7ea7",source:"@site/docs/advanced/react-deep/state-change.md",sourceDirName:"advanced/react-deep",slug:"/advanced/react-deep/state-change",permalink:"/docs/advanced/react-deep/state-change",tags:[],version:"current",frontMatter:{},sidebar:"advanced",previous:{title:"React diff \u7b97\u6cd5",permalink:"/docs/advanced/react-deep/diff"},next:{title:"\u6df1\u5165 React \u751f\u6001",permalink:"/docs/advanced/react-ecology/"}},d=[{value:"\u66f4\u65b0\u4f18\u5148\u7ea7",id:"\u66f4\u65b0\u4f18\u5148\u7ea7",children:[{value:"UpdateQueue",id:"updatequeue",children:[],level:3},{value:"\u4f18\u5148\u987a\u5e8f\uff08Prioritization\uff09",id:"\u4f18\u5148\u987a\u5e8fprioritization",children:[],level:3}],level:2},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",children:[],level:2},{value:"ClassComponent / HostRoot",id:"classcomponent--hostroot",children:[{value:"createUpdate",id:"createupdate",children:[],level:3},{value:"enqueueUpdate",id:"enqueueupdate",children:[],level:3},{value:"processUpdateQueue",id:"processupdatequeue",children:[],level:3}],level:2},{value:"FunctionComponent",id:"functioncomponent",children:[],level:2}],c={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u72b6\u6001\u66f4\u65b0"},"\u72b6\u6001\u66f4\u65b0"),(0,p.kt)("h2",{id:"\u66f4\u65b0\u4f18\u5148\u7ea7"},"\u66f4\u65b0\u4f18\u5148\u7ea7"),(0,p.kt)("h3",{id:"updatequeue"},"UpdateQueue"),(0,p.kt)("p",null,"\u5c31\u50cf fibers \u4e00\u6837\uff08\u53cc\u7f13\u5b58\u6280\u672f double buffering \uff0c\u4e00\u4e2a current tree\uff0c\u4e00\u4e2a workInProgress tree\uff09\uff0c\u66f4\u65b0\u961f\u5217\u4e5f\u662f\u6210\u5bf9\u51fa\u73b0\u7684\u3002"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5f53\u524d\u8868\u793a\u5c4f\u5e55\u53ef\u89c1\u72b6\u6001\u7684\u961f\u5217\uff08current queue\uff09\uff0c\u4e00\u4e2a\u53ef\u4ee5\u6302\u5728\uff08mutated\uff09\u53ef\u4ee5\u5728 committed \u524d\u5f02\u6b65\u5904\u7406\u7684 work-in-progress \u961f\u5217\uff08work-in-progress queue, \u6211\u4eec\u7b80\u79f0 WIP queue\uff09\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4e00\u4e2a WIP \u6e32\u67d3\u5728\u5b8c\u6210\u524d\u88ab\u4e22\u5f03\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece current queue \u514b\u9686\u4e00\u4e2a\u65b0\u7684 WIP queue\u3002"),(0,p.kt)("p",null,"\u4e24\u4e2a\u961f\u5217\u5171\u4eab\u4e00\u4e2a\u6301\u4e45\u7684\u5355\u94fe\u8868\u7ed3\u6784\uff0c\u4e3a\u4e86\u8c03\u5ea6\u66f4\u65b0\uff0c\u6211\u4eec\u628a\u5b83\u6dfb\u52a0\u5230\u4e24\u4e2a\u961f\u5217\u540e\u9762\u3002\u6bcf\u4e2a\u961f\u5217\u90fd\u7ef4\u62a4\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u6301\u4e45\u5217\u8868\u4e2d\u5c1a\u672a\u5904\u7406\u7684\u7b2c\u4e00\u6b21\u66f4\u65b0\u3002WIP queue \u7684\u6307\u9488\u603b\u662f\u6709\u4e00\u4e2a\u4f4d\u7f6e\u6307\u5411\u7b49\u4e8e\u6216\u5927\u4e8e\u5f53\u524d\u961f\u5217\uff0c\u56e0\u4e3a\u6211\u4eec\u603b\u662f\u5904\u7406\u8be5\u961f\u5217\u3002"),(0,p.kt)("p",null,"current queue \u7684\u6307\u9488\u4ec5\u5728 commit \u9636\u6bb5\uff08\u4ece current queue swap\uff09\u66f4\u65b0\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-toml"},"current \u6307\u9488:           A - B - C - D - E - F\nWIP \u6307\u9488:                           D - E - F\n                                   ^\nWIP queue \u5904\u7406\u7684\u66f4\u65b0\u6bd4 current \u591a\n")),(0,p.kt)("p",null,"\u6211\u4eec\u6dfb\u52a0\u4e24\u4e2a\u961f\u5217\u662f\u56e0\u4e3a\u6211\u4eec\u53ef\u80fd\u5728\u5220\u9664\u66f4\u65b0\u800c\u4e0d\u8fdb\u884c\u4efb\u4f55\u5904\u7406\u3002\u6bd4\u5982\uff0c\u5982\u679c\u6211\u4eec\u4ec5\u4ec5\u5411 WIP queue \u66f4\u65b0\uff0c\u4e00\u4e9b\u66f4\u65b0\u53ef\u80fd\u4f1a\u4e22\u5931\uff0c\u6bcf\u5f53 WIP \u901a\u8fc7\u4ece current \u514b\u9686\u6765\u91cd\u542f\u6e32\u67d3\u3002\u7c7b\u4f3c\u7684\uff0c\u5982\u679c\u6211\u4eec\u53ea\u5411 current tree \u6dfb\u52a0\u66f4\u65b0\uff0c\u90a3\u4e48\u6bcf\u5f53 WIP queu \u63d0\u4ea4\u5e76\u548c\u5f53\u524d\u961f\u5217\u4ea4\u6362\u65f6\uff0c\u66f4\u65b0\u5c31\u4f1a\u4e22\u5931\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7\u5411\u4e24\u4e2a\u961f\u5217\u6dfb\u52a0\uff0c\u6211\u4eec\u53ef\u4ee5\u4fdd\u8bc1\u66f4\u65b0\u5c06\u6210\u4e3a\u4e0b\u4e00\u4e2a WIP\uff08\u800c\u4e14 WIP queue \u4e00\u65e6 commit\uff0c\u53d8\u6210\u4e3a current queue\uff0c\u4ed6\u4eec\u4e0d\u4f1a\u6709\u4e24\u6b21\u76f8\u540c\u7684\u66f4\u65b0\u5371\u9669\uff09"),(0,p.kt)("h3",{id:"\u4f18\u5148\u987a\u5e8fprioritization"},"\u4f18\u5148\u987a\u5e8f\uff08Prioritization\uff09"),(0,p.kt)("p",null,"\u66f4\u65b0\u4e0d\u603b\u662f\u6309\u4f18\u5148\u7ea7\u6392\u5e8f\uff0c\u800c\u662f\u6309\u63d2\u5165\u7684\uff0c\u65b0\u7684\u66f4\u65b0\u603b\u662f\u6dfb\u52a0\u5728\u961f\u5c3e\u3002"),(0,p.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u4e2a\u4f18\u5148\u7ea7\u4ecd\u7136\u662f\u91cd\u8981\u7684\uff0c\u5728 render \u9636\u6bb5\u5904\u7406\u66f4\u65b0\u961f\u5217\u65f6\uff0c\u7ed3\u679c\u4e2d\u53ea\u5305\u542b\u5177\u6709\u8db3\u591f\u4f18\u5148\u7ea7\u7684\u66f4\u65b0\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u6211\u4eec\u56e0\u4e3a\u6ca1\u6709\u8db3\u591f\u4f18\u5148\u7ea7\u800c\u8df3\u8fc7\u4e00\u4e2a\u66f4\u65b0\uff0c\u5b83\u5c06\u4fdd\u7559\u5728\u961f\u5217\u4e2d\u4ee5\u7a0d\u540e\u5728\u4f4e\u4f18\u5148\u7ea7\u671f\u95f4\u5904\u7406\u3002"),(0,p.kt)("p",null,"\u81f3\u5173\u91cd\u8981\u7684\u662f\uff0c\u8df3\u8fc7\u7684\u66f4\u65b0\u4e4b\u540e\u7684\u6240\u6709\u66f4\u65b0\u4e5f\u4f1a\u4fdd\u7559\u5728\u961f\u5217\u4e2d\uff08\u4e0d\u7ba1\u5b83\u4eec\u7684\u4f18\u5148\u7ea7\u5982\u4f55\uff09\uff0c\u8fd9\u610f\u5473\u7740\u9ad8\u4f18\u5148\u7ea7\u66f4\u65b0\u6709\u65f6\u4f1a\u4ee5\u4e24\u79cd\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\u5904\u7406\u4e24\u6b21\u3002\u6211\u4eec\u8fd8\u4fdd\u6301\u8ddf\u8e2a\u4e00\u4e2a\u57fa\u672c\u72b6\u6001\uff0c\u4ed6\u8868\u793a\u5e94\u7528\u961f\u5217\u4e2d\u7b2c\u4e00\u6b21\u66f4\u65b0\u4e4b\u524d\u7684\u72b6\u6001\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202201241722787.png",alt:null})),(0,p.kt)("p",null,"\u56fe\u7247\u81ea\u5236\uff0c\u5185\u5bb9\u6765\u81ea ",(0,p.kt)("a",{parentName:"p",href:"https://twitter.com/acdlite/status/978412930973687808"},"Andrew Clark: \u4e0d\u540c\u4f18\u5148\u7ea7\u6d41\u7a0b (in Twitter)")),(0,p.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50:"),(0,p.kt)("p",null,"\u7ed9\u5b9a\u5f53\u524d\u72b6\u6001\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"}," ''"),", \u4ee5\u53ca\u4e0b\u9762\u7684\u66f4\u65b0\u961f\u5217"),(0,p.kt)("p",null,"  ",(0,p.kt)("inlineCode",{parentName:"p"},"A1 - B2 - C1 - D2")),(0,p.kt)("p",null,"\u5176\u4e2d\u6570\u5b57\u8868\u793a\u4f18\u5148\u7ea7\uff0c\u63d2\u5165\u5b57\u7b26\u4e32\u4ee5\u66f4\u65b0\u72b6\u6001, ",(0,p.kt)("em",{parentName:"p"},"React")," \u5c06\u4f1a\u4ee5\u4e24\u4e2a\u5355\u72ec\u7684\u6e32\u67d3\u5904\u7406\u8fd9\u4e9b\u66f4\u65b0\uff0c\u6bcf\u4e2a\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\u4e00\u4e2a\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u6b21\u6e32\u67d3\uff0c\u4f18\u5148\u7ea7\u4e3a1\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u521d\u59cb\u72b6\u6001: ",(0,p.kt)("inlineCode",{parentName:"p"},"''")),(0,p.kt)("p",{parentName:"li"},"\u66f4\u65b0\u961f\u5217: ",(0,p.kt)("inlineCode",{parentName:"p"},"[A1, C1]")),(0,p.kt)("p",{parentName:"li"},"\u72b6\u6001\u7ed3\u679c: ",(0,p.kt)("inlineCode",{parentName:"p"},"'AC'"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u6b21\u6e32\u67d3\uff0c\u4f18\u5148\u7ea7\u4e3a1\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u521d\u59cb\u72b6\u6001: ",(0,p.kt)("inlineCode",{parentName:"p"},"'A'"),"\uff08\u521d\u59cb\u72b6\u6001\u4e0d\u5305\u542b C1\uff0c\u56e0\u4e3a B2 \u88ab\u8df3\u8fc7\u4e86\uff09"),(0,p.kt)("p",{parentName:"li"},"\u66f4\u65b0\u961f\u5217: ",(0,p.kt)("inlineCode",{parentName:"p"},"[B2, C1\uff0c D2]")," \uff08C1 rebase \u5728 B2 \u540e\u9762\uff09"),(0,p.kt)("p",{parentName:"li"},"\u72b6\u6001\u7ed3\u679c: ",(0,p.kt)("inlineCode",{parentName:"p"},"'ABCD'")))),(0,p.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u662f\u6309\u63d2\u5165\u987a\u5e8f\u5904\u7406\u66f4\u65b0\u7684\uff0c\u5e76\u5728\u8df3\u8fc7\u4e4b\u524d\u7684\u66f4\u65b0\u65f6 rebase \u9ad8\u4f18\u5148\u7ea7\u7684\u66f4\u65b0\uff0c\u6240\u4ee5",(0,p.kt)("strong",{parentName:"p"},"\u4e0d\u8bba\u4f18\u5148\u7ea7\u5982\u4f55\uff0c\u6700\u7ec8\u7ed3\u679c\u662f\u786e\u5b9a"),"\u3002"),(0,p.kt)("p",null,"\u4e2d\u95f4\u72b6\u6001\u53ef\u80fd\u56e0\u4e3a\u4e0d\u7528\u4f18\u5148\u7ea7\u800c\u6709\u6240\u4e0d\u540c\uff0c\u4f46\u662f\u6700\u7ec8\u7ed3\u679c\u662f\u76f8\u540c\u7684\u3002"),(0,p.kt)("p",null,"\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactUpdateQueue.new.js"},"React Reconciler ReactUpdateQueue.new.js")),(0,p.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,p.kt)("p",null,"\u6211\u4eec\u5728\u72b6\u6001\u66f4\u65b0\u65f6\u9996\u5148\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"Update")," \u5bf9\u8c61\uff0c\u8868\u793a\u72b6\u6001\u7684\u66f4\u65b0\u3002"),(0,p.kt)("p",null,"\u7531\u4e8e\u4e0d\u540c\u7c7b\u578b\u7ec4\u4ef6\u5de5\u4f5c\u65b9\u5f0f\u4e0d\u540c\uff0c\u6240\u4ee5\u5b58\u5728\u4e24\u79cd\u4e0d\u540c\u7ed3\u6784\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Update"),"\uff0c\u5176\u4e2d",(0,p.kt)("inlineCode",{parentName:"p"},"ClassComponent"),"\u4e0e",(0,p.kt)("inlineCode",{parentName:"p"},"HostRoot"),"\u5171\u7528\u4e00\u5957",(0,p.kt)("inlineCode",{parentName:"p"},"Update"),"\u7ed3\u6784\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"FunctionComponent"),"\u5355\u72ec\u4f7f\u7528\u4e00\u79cd",(0,p.kt)("inlineCode",{parentName:"p"},"Update"),"\u7ed3\u6784\u3002"),(0,p.kt)("h2",{id:"classcomponent--hostroot"},"ClassComponent / HostRoot"),(0,p.kt)("p",null,"\u7c7b\u7ec4\u4ef6\uff0c\u6216\u8005\u6839\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u6839\u7ec4\u4ef6\u4f1a\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"updateContainer")," \u4e2d\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"createUpdate")," ",(0,p.kt)("inlineCode",{parentName:"p"},"enqueueUpdate")),(0,p.kt)("p",null,"\u7c7b\u7ec4\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"this.setState(xxx)")," \u4f1a\u8c03\u7528   ",(0,p.kt)("inlineCode",{parentName:"p"},"enqueueSetState")," \uff0c\u7136\u540e\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"createUpdate")," ",(0,p.kt)("inlineCode",{parentName:"p"},"enqueueUpdate")),(0,p.kt)("h3",{id:"createupdate"},"createUpdate"),(0,p.kt)("p",null,"createUpdate \u4f1a\u521b\u5efa\u5e76\u8fd4\u56de\u5982\u4e0b\u7ed3\u6784\u7684 Update \u5bf9\u8c61\uff0c\u662f\u4e00\u4e2a\u94fe\u8868\u7ed3\u6784"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Update<State> = {\n  eventTime: number, // \u4efb\u52a1\u65f6\u95f4\uff0c\u901a\u8fc7 performance.now() \u83b7\u53d6\u7684\u6beb\u79d2\u6570\n  lane: Lane, // \u4f18\u5148\u7ea7\uff0c\u5f53\u524d\u66f4\u65b0\u80fd\u5426\u88ab\u5904\u7406\u53d6\u51b3\u4e8e\u4ed6\u7684\u4f18\u5148\u7ea7\u662f\u5426\u5728\u672c\u6b21\u6e32\u67d3\u7684\u6279\u6b21\u4e2d\n  tag: 0 | 1 | 2 | 3, // \u66f4\u65b0\u7c7b\u578b\uff0c\u5206\u522b\u5bf9\u5e94 UpdateState ReplaceState ForceUpdate CaptureUpdate\n  payload: any, // \u643a\u5e26\u7684\u72b6\u6001\uff0cclass \u4e2d\u662f\u5bf9\u8c61\u6216\u8005\u51fd\u6570 (prevState, nextProps) => newState\uff1broot \u4e2d\u662f rootEl\n  callback: (() => mixed) | null, // \u56de\u8c03\u51fd\u6570\uff0c\u4f1a\u5728 commit#layout \u9636\u6bb5\u89e6\u53d1\n  next: Update<State> | null, // \u4e0b\u4e00\u4e2a Update\n}\n")),(0,p.kt)("h3",{id:"enqueueupdate"},"enqueueUpdate"),(0,p.kt)("p",null,"\u5728 fiber \u8282\u70b9\u4e0a\u6709\u4e00\u4e2a updateQueue \u5c5e\u6027\uff0c\u5b83\u662f\u4e0b\u9762\u8fd9\u6837\u7684\u4e00\u4e2a UpdateQueue \u5bf9\u8c61\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type SharedQueue<State> = {\n  pending: Update<State> | null,\n  interleaved: Update<State> | null,\n  lanes: Lanes,\n}\n\n// current \u8868\u793a\u5df2\u7ecf\u66f4\u65b0\u4e0a\u53bb\u7684\u72b6\u6001 / \u4e0a\u4e00\u6b21\u66f4\u65b0\u4e0a\u53bb\u7684\u72b6\u6001\uff0c\u5982\u4e0a\u9762\u4f8b\u5b50\u4e2d\u7684\u7b2c\u4e00\u6e32\u67d3\u540e\u7684\u7ed3\u679c\u3002\ntype UpdateQueue<State> = {\n  baseState: State, // current Fiber \u7684 state (old state) \u4ee5\u4ed6\u4e3a\u57fa\u7840\uff0c\u5982\u4f8b\u5b50\u4e2d\u7684\u7b2c\u4e8c\u6b21\u6e32\u67d3\u7684\u521d\u59cb\u72b6\u6001\n  firstBaseUpdate: Update<State> | null, // current \u4e0a Update \u5934\u8282\u70b9\uff0c\u5982\u4f8b\u5b50\u4e2d\u7684\u7b2c\u4e8c\u6b21\u6e32\u67d3\u7684 B2-C1-D2\n  lastBaseUpdate: Update<State> | null, // current \u4e0a Update \u5c3e\u8282\u70b9\uff0cB2 \u662f first , D2 \u662f last\n  shared: SharedQueue<State>, // \u5b58\u50a8\u7740\u672c\u6b21\u66f4\u65b0\u7684 update \u961f\u5217\uff0c\u662f\u5b9e\u9645\u7684 updateQueue\u3002shared \u7684\u610f\u601d\u662f current \u8282\u70b9\u4e0e workInProgress \u8282\u70b9\u5171\u4eab\u4e00\u6761\u66f4\u65b0\u961f\u5217\u3002\n  effects: Array<Update<State>> | null, // \u4fdd\u5b58 update.callback !== null \u7684 Update\n}\n")),(0,p.kt)("p",null,"enqueueUpdate \u4f1a\u4f7f\u5f97 UpdateQueue \uff08\u5b9e\u9645\u4e0a\u662f\u5b83\u4e0a\u9762\u7684 shared.pending\uff09\u5f62\u6210\u4e00\u4e2a\u5355\u5411\u73af\u5f62\u94fe\u8868\u7ed3\u6784\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"function enqueueUpdate (fiber\uff0c update\uff0c lane) {\n  const updateQueue = fiber.updateQueue\n  const sharedQueue = updateQueue.shared\n  const pending = sharedQueue.pending // pending \u603b\u662f\u6307\u5411\u6700\u540e\u4e00\u4e2a Update\uff0cpending.next \u5c31\u662f head\n  if (pending === null) {\n    update.next = update;\n  } else {\n    update.next = pending.next;\n    pending.next = update;\n  }\n  sharedQueue.pending = update;\n}\n")),(0,p.kt)("h3",{id:"processupdatequeue"},"processUpdateQueue"),(0,p.kt)("p",null,"\u5728 beginWork \u9636\u6bb5\uff0c\u4f1a\u8fdb\u884c\u66f4\u65b0\u961f\u5217\u7684\u5904\u7406\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u6574\u7406 UpdateQueue \uff0c\u5f53\u8fdb\u884c\u4e86\u4e00\u6b21\u66f4\u65b0\u540e\uff0c\u6709\u4e9b Update \u53ef\u80fd\u88ab\u8df3\u8fc7\u4e86\uff0c\u7b2c\u4e8c\u6b21\u66f4\u65b0\u53c8\u8fdb\u6765\u4e86\u65b0\u7684 Update\uff0c\u6b64\u65f6\u53ef\u80fd\u5b58\u5728\u4e24\u6761\u66f4\u65b0\u961f\u5217\uff1a1: \u4e0a\u4e00\u6b21\u88ab\u8df3\u8fc7\u7684\u66f4\u65b0\uff1afirstBaseUpdate - lastBaseUpdate\uff0c 2: \u65b0\u6765\u7684 Update")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u65ad\u5f00 pending \u73af\u5f62\u94fe\u8868\uff0c\u5408\u5e76\u4e0a\u9762\u4e24\u6761\u66f4\u65b0\u961f\u5217\uff0c\u56e0\u4e3a\u5f53\u524d\u64cd\u4f5c\u7684\u662f WIP fiber\uff0c\u6240\u4ee5\u8fd8\u9700\u8981\u540c\u6b65\u5230  currrent fiber \u4e0a\u3002\uff08\u4e24\u8fb9\u90fd\u540c\u6b65\u662f\u56e0\u4e3a\uff0c\u5982\u679c\u5f53\u524d\u88ab\u9ad8\u4f18\u5148\u7ea7\u4efb\u52a1\u6253\u65ad\uff0cWIP \u5c31\u6ca1\u6709\u4e86\uff0c\u4f46\u662f current \u4e0a\u8fd8\u4fdd\u7559\u7740\uff0c\u907f\u514d\u4e22\u5931 Update\u3002\uff09"))),(0,p.kt)("ol",{start:3},(0,p.kt)("li",{parentName:"ol"},"while \u5faa\u73af",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f18\u5148\u7ea7\u4e0d\u591f\uff0c\u90a3\u4e48\u8df3\u8fc7\u66f4\u65b0\uff0c\u653e\u5230 firstBaseUpdate \u4e0a\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f18\u5148\u7ea7\u8db3\u591f\uff0c\u5904\u7406\u672c\u6b21\u66f4\u65b0 ",(0,p.kt)("inlineCode",{parentName:"li"},"getStateFromUpdate()"),"\uff0c\u522b\u5fd8\u4e86\uff0c\u672c\u6b21\u66f4\u65b0\u662f\u57fa\u4e8e\u4e0a\u4e00\u6b21\u66f4\u65b0\u7684 (baseState / \u5faa\u73af\u66f4\u65b0\u7684 newState)",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"callback \u662f setState \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5982\u679c\u6709 callback\uff0c\u5c31\u4f1a\u653e\u5230 effects \u961f\u5217\u4e2d"),(0,p.kt)("li",{parentName:"ul"},"update = update.next \u56de\u5230 \u7b2c\u4e09\u6b65"))))),(0,p.kt)("li",{parentName:"ol"},"\u6839\u636e\u4e0a\u9762\u7684\u8ba1\u7b97\uff0c\u66f4\u65b0 UpdateQueue \u7684 firstBaseUpdate\u3001 lastBaseUpdate\uff0cworkInProgress \u7684 lanes\u3001memoizedState")),(0,p.kt)("h2",{id:"functioncomponent"},"FunctionComponent"),(0,p.kt)("p",null,"\u89c1 ",(0,p.kt)("a",{parentName:"p",href:"/docs/advanced/react-deep/react-hooks"},"React Hooks")))}s.isMDXComponent=!0}}]);