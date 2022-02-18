"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[6521],{9613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2240:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(5900),a=t(4750),o=(t(9496),t(9613)),l=["components"],i={},c="lane \u6a21\u578b",p={unversionedId:"advanced/react-deep/lane-model",id:"advanced/react-deep/lane-model",title:"lane \u6a21\u578b",description:"\u4ecb\u7ecd",source:"@site/docs/advanced/react-deep/lane-model.md",sourceDirName:"advanced/react-deep",slug:"/advanced/react-deep/lane-model",permalink:"/docs/advanced/react-deep/lane-model",tags:[],version:"current",frontMatter:{},sidebar:"advanced",previous:{title:"React \u6d41\u7a0b\u4f2a\u7801",permalink:"/docs/advanced/react-deep/react-fake"},next:{title:"React diff \u7b97\u6cd5",permalink:"/docs/advanced/react-deep/diff"}},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2},{value:"Expiration Times \u6a21\u578b",id:"expiration-times-\u6a21\u578b",children:[],level:2},{value:"lane \u6a21\u578b",id:"lane-\u6a21\u578b-1",children:[],level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[],level:2}],s={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lane-\u6a21\u578b"},"lane \u6a21\u578b"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u5b66\u4e60 lane \u6a21\u578b\u524d\uff0c\u6211\u4eec\u5148\u5b66\u4e60\u4ed6\u7684\u524d\u8eab\uff1a Expiration Times \u6a21\u578b"),(0,o.kt)("h2",{id:"expiration-times-\u6a21\u578b"},"Expiration Times \u6a21\u578b"),(0,o.kt)("p",null,"\u5728 Expiration Times \u6a21\u578b\u4e2d\uff0c\u51b3\u5b9a\u5728\u5f53\u524d\u7684\u6279\u5904\u7406\u4e2d\u662f\u5426\u5305\u542b\u6307\u5b9a\u4efb\u52a1\uff0c\u662f\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u5224\u65ad\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isTaskIncludedInBatch = priorityOfTask >= priorityOfBatch;\n")),(0,o.kt)("p",null,"\u56e0\u4e3a\u5f53\u524d\u65bd\u52a0\u4e86\u4e00\u4e2a\u7ea6\u675f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u9664\u975e\u8fd8\u6709\u66f4\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\uff0c\u5426\u5219\u4e0d\u5141\u8bb8\u505a\u8f83\u4f4e\u4f18\u5148\u7ea7\u4efb\u52a1"),"\u3002\uff08\u8be5\u7ea6\u675f\u662f\u5728 Suspense \u51fa\u73b0\u524d\u8bbe\u8ba1\u7684\uff09"),(0,o.kt)("p",null,"\u4f46\u662f\u5f53\u4f60\u5f15\u5165  IO-bound \uff08Suspense\uff09\u7684\u4efb\u52a1\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u8f83\u9ad8\u4f18\u5148\u7ea7\u7684  IO-bound \u4efb\u52a1\u963b\u6b62\u8f83\u4f4e\u4f18\u5148\u7ea7\u7684 CPU-bound \u4efb\u52a1\u5b8c\u6210\u7684\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"Expiration Times \u7684\u4e00\u4e2a\u7f3a\u9677\u5c31\u662f\u9650\u5236\u4e86\u5982\u4f55\u8868\u8fbe\u4e00\u7ec4\u4f18\u5148\u7ea7"),(0,o.kt)("h2",{id:"lane-\u6a21\u578b-1"},"lane \u6a21\u578b"),(0,o.kt)("p",null,"\u76f8\u6bd4\u65e7\u6a21\u578b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"lane \u5c06",(0,o.kt)("strong",{parentName:"p"},"\u4efb\u52a1\u4f18\u5148\u7ea7\uff08\u4efb\u52a1A\u662f\u5426\u6bd4\u4efb\u52a1B\u4f18\u5148\u7ea7\u9ad8\uff09"),"\u7684\u6982\u5ff5\u4ece",(0,o.kt)("strong",{parentName:"p"},"\u4efb\u52a1\u6279\u5904\u7406\uff08\u4efb\u52a1A\u662f\u5426\u662f\u8fd9\u4e00\u7ec4\u7684\u4efb\u52a1\uff09"),"\u4e2d\u89e3\u5076\uff0c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"lane \u53ef\u4ee5\u7528\u5355\u4e00\u7684 32 \u4f4d\u6570\u636e\u7c7b\u578b\u8868\u793a\u8bb8\u591a\u4e0d\u540c\u7684\u4efb\u52a1\u7ebf\u7a0b\u3002"))),(0,o.kt)("p",null,"\u8868\u793a\u4efb\u52a1\u7684\u4f4d\u63a9\u7801\u7c7b\u578b\u79f0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Lane")),(0,o.kt)("p",null,"\u8868\u793a\u6279\u6b21\u7684\u4f4d\u63a9\u7801\u7c7b\u578b\u79f0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Lanes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const NoLanes: Lanes = /*       */ 0b0000000000000000000000000000000;\nexport const InputContinuousLane: Lanes = 0b0000000000000000000000000000100;\nexport const DefaultLane: Lanes = /*   */ 0b0000000000000000000000000010000;\nconst TransitionLanes: Lanes = /*      */ 0b0000000001111111111111111000000;\nconst RetryLanes: Lanes = /*           */ 0b0000111110000000000000000000000;\n")),(0,o.kt)("p",null,"\u5728 lane \u6a21\u578b\u4e2d\uff0c\u4efb\u52a1\u7ec4\u7528\u4f4d\u63a9\u7801\u8868\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isTaskIncludedInBatch = (task & batchOfTasks) !== 0;\n")),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/pull/18796"},"react PR#18796: Initial Lanes implementation")))}d.isMDXComponent=!0}}]);