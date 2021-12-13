"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[4108],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,f=s["".concat(p,".").concat(m)]||s[m]||k[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(5900),l=n(4750),i=(n(9496),n(9613)),a=["components"],o={},p="React Fiber \u67b6\u6784",c={unversionedId:"share/ReactFiber\u67b6\u6784\u6d45\u6790",id:"share/ReactFiber\u67b6\u6784\u6d45\u6790",title:"React Fiber \u67b6\u6784",description:"\u5148\u770breact@16\u4ee5\u524d\u7684\u7248\u672c ##",source:"@site/docs/share/ReactFiber\u67b6\u6784\u6d45\u6790.md",sourceDirName:"share",slug:"/share/ReactFiber\u67b6\u6784\u6d45\u6790",permalink:"/docs/share/ReactFiber\u67b6\u6784\u6d45\u6790",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/share/ReactFiber\u67b6\u6784\u6d45\u6790.md",tags:[],version:"current",frontMatter:{},sidebar:"share",previous:{title:"\u4ece webpack \u6253\u5305\u770b\u524d\u7aef\u6a21\u5757\u5316",permalink:"/docs/share/\u4ecewebpack\u6253\u5305\u770b\u524d\u7aef\u6a21\u5757\u5316"},next:{title:"React\u6027\u80fd\u4f18\u5316",permalink:"/docs/share/React\u6027\u80fd\u4f18\u5316\u65b9\u6848"}},u=[{value:"\u5148\u770b<code>react@16</code>\u4ee5\u524d\u7684\u7248\u672c",id:"\u5148\u770breact16\u4ee5\u524d\u7684\u7248\u672c",children:[],level:2},{value:"Fiber \u4e0e Fiber tree",id:"fiber-\u4e0e-fiber-tree",children:[{value:"React@15",id:"react15",children:[],level:3},{value:"Fiber",id:"fiber",children:[],level:3},{value:"\u6267\u884c\u987a\u5e8f",id:"\u6267\u884c\u987a\u5e8f",children:[],level:3},{value:"render / reconciliation",id:"render--reconciliation",children:[],level:3},{value:"commit",id:"commit",children:[],level:3}],level:2},{value:"\u4f18\u5148\u7ea7\u7b56\u7565",id:"\u4f18\u5148\u7ea7\u7b56\u7565",children:[],level:2}],k={toc:u};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-fiber-\u67b6\u6784"},"React Fiber \u67b6\u6784"),(0,i.kt)("h2",{id:"\u5148\u770breact16\u4ee5\u524d\u7684\u7248\u672c"},"\u5148\u770b",(0,i.kt)("inlineCode",{parentName:"h2"},"react@16"),"\u4ee5\u524d\u7684\u7248\u672c"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"reconciler"),"\u91c7\u7528\u81ea\u9876\u5411\u4e0b\u9012\u5f52\uff0c\u4ece\u6839\u7ec4\u4ef6\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"setState()"),"\u540e\u7684\u7ec4\u4ef6\u5f00\u59cb\uff0c\u66f4\u65b0\u4ed6\u7684\u6574\u4e2a\u5b50\u6811")),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u6b63\u5e38\u7684\u5de5\u4f5c\u6d41\u7a0b\uff1a\u8fd0\u7b97 -> \u6e32\u67d3  -> \u8fd0\u7b97 -> \u6e32\u67d3 ..."),(0,i.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u6811\u8d8a\u5927\uff0c\u9012\u5f52\u904d\u5386\u6210\u672c\u8d8a\u9ad8\uff0c\u6301\u7eed\u5360\u7528\u4e3b\u7ebf\u7a0b --\x3e \u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u4e0a\u7684\u5e03\u5c40\u3001\u52a8\u753b\u7b49\u5468\u671f\u6027\u4efb\u52a1\u4ee5\u53ca\u4ea4\u4e92\u54cd\u5e94\u65e0\u6cd5\u7acb\u5373\u5f97\u5230\u5904\u7406\uff0c\u9020\u6210\u5361\u987f"),(0,i.kt)("li",{parentName:"ul"},"\u6267\u884c\u65f6\u95f4\u8fc7\u957f\uff0c\u5bfc\u81f4fps\u964d\u4f4e")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/share/3.png",alt:null})),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"fiber reconciler "),"(\u8c03\u89e3\u7b97\u6cd5)\u5c06\u8981\u6267\u884c\u7684js\u505a\u62c6\u5206\uff0c\u6765\u4fdd\u8bc1\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/share/4.png",alt:null})),(0,i.kt)("h2",{id:"fiber-\u4e0e-fiber-tree"},"Fiber \u4e0e Fiber tree"),(0,i.kt)("p",null,"React@15 \u8fd0\u884c\u662f\u5b58\u57283\u79cd\u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DOM\n    \u771f\u5b9eDOM\u8282\u70b9\n----\nInstances\n    \u6839\u636eElements\u521b\u5efa\u3002React\u7ef4\u62a4\u7684VDOM tree node\u3002\u5305\u542b\u4e86\u7ec4\u4ef6\u72b6\u6001\u3001\u7ec4\u4ef6\u4e0eDOM\u6811\u7684\u5173\u7cfb\n----\nElements\n    \u63cf\u8ff0UI\u957f\u4ec0\u4e48\u6837\u5b50\uff0ctype\uff0cprops\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u7684\u8c03\u5ea6\u53eb\u505a",(0,i.kt)("inlineCode",{parentName:"p"},"Stack reconciler"),"\u3002\u81ea\u9876\u5411\u4e0b\u9012\u5f52",(0,i.kt)("inlineCode",{parentName:"p"},"mount / update"),"\u3002",(0,i.kt)("strong",{parentName:"p"},"\u65e0\u6cd5\u4e2d\u65ad")),(0,i.kt)("p",null,"React@16 Filber\u67b6\u6784\u8fd0\u884c\u65f6\uff0c\u5c06Instances\u5c42\u589e\u52a0\u4e86\u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DOM\n    \u771f\u5b9eDOM\u8282\u70b9\n----------\neffect\n    \u6bcf\u4e2aworkInProgress tree\u8282\u70b9\u4e0a\u90fd\u6709\u4e00\u4e2aeffect list\u3002\u5b58\u653ediff\u7ed3\u679c\u3002\u8282\u70b9\u66f4\u65b0\u5b8c\u540e\u5411\u4e0amerge\n- - - \nworkInProgress\n    workInProgress tree\u662f\u8c03\u89e3\u8fc7\u7a0b\u4e2d\u7684\u8fdb\u5ea6\u5feb\u7167\uff0c\u7528\u4e8e\u65ad\u70b9\u6062\u590d\uff0c\u5728\u8fd9\u91cc\u6536\u96c6effect list\n- - -\nfiber\n    fiber tree\u7c7b\u4f3cvDOM tree\n----------\nElements\n    \u63cf\u8ff0UI\u957f\u4ec0\u4e48\u6837\u5b50\uff0ctype\uff0cprops\n")),(0,i.kt)("h3",{id:"react15"},"React@15"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react@15"),"\u4e2d\uff0c\u66f4\u65b0\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a"),(0,i.kt)("p",null,"1\u3001diff\uff1a\u5bf9\u6bd4\u524d\u540e\uff08\u904d\u5386\uff0c\u6bd4\u8f83\uff0c\u53ef\u62c6\u5206\uff0c\u7b97\u4e00\u534a\u7136\u540e\u63a5\u7740\u7b97\uff0c\u6267\u884c\u9636\u6bb5\u4e3b\u7ebf\u7a0b\u4e00\u76f4\u88ab\u5360\u7528\uff09"),(0,i.kt)("p",null,"2\u3001patch\uff1a\u5c06diff\u540e\u7684\u5dee\u5f02\u961f\u5217\u66f4\u65b0\u5230\u771f\u5b9eDOM\u4e0a\uff0c\u662f\u4e00\u8fde\u4e32\u7684DOM\u64cd\u4f5c"),(0,i.kt)("p",null,"diff\u662f\u4e00\u6b21\u6027\u8ba1\u7b97\u51fa\u6240\u6709\u5dee\u5f02\uff0c\u518d\u4e00\u6b21\u6027\u6267\u884cpatch"),(0,i.kt)("h3",{id:"fiber"},"Fiber"),(0,i.kt)("p",null,"\u4ee5\u4e00\u4e2afiber\u4e3a\u5355\u5143\u8fdb\u884c\u62c6\u5206\u3002fiber tree\u662f\u6839\u636eVDOM tree\u6784\u9020\u51fa\u6765\u7684\uff0c\u7136\u540e\u5728\u57fa\u7840\u4e4b\u4e0a\u589e\u52a0\u4e86\u4e00\u4e9b\u5c5e\u6027"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"fiber\u6307\u7684\u662ffiber tree\u4e0a\u7684\u8282\u70b9\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"Fiber\u8868\u793a React Fiber")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    alternate: Fiber|null, // \u5728fiber\u66f4\u65b0\u65f6\u514b\u9686\u51fa\u7684\u955c\u50cffiber\uff0c\u5bf9fiber\u7684\u4fee\u6539\u4f1a\u6807\u8bb0\u5728\u8fd9\u4e2afiber\u4e0a\n    nextEffect: Fiber | null, // \u5355\u94fe\u8868\u7ed3\u6784\uff0c\u65b9\u4fbf\u904d\u5386 Fiber Tree \u4e0a\u6709\u526f\u4f5c\u7528\u7684\u8282\u70b9\n    pendingWorkPriority: PriorityLevel, // \u6807\u8bb0\u5b50\u6811\u4e0a\u5f85\u66f4\u65b0\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\n\n    stateNode: any, // \u7ba1\u7406 instance \u81ea\u8eab\u7684\u7279\u6027\n    return: Fiber|null, // \u6307\u5411 Fiber Tree \u4e2d\u7684\u7236\u8282\u70b9\u3002\u5904\u7406\u5b8c\u540e\uff0c\u5411\u8c01\u63d0\u4ea4\u81ea\u5df1\u7684effect list\n    child: Fiber|null, // \u6307\u5411\u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9\n    sibling: Fiber|null, // \u6307\u5411\u5144\u5f1f\u8282\u70b9\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/share/5.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/share/7.png",alt:null})),(0,i.kt)("h3",{id:"\u6267\u884c\u987a\u5e8f"},"\u6267\u884c\u987a\u5e8f"),(0,i.kt)("p",null,"Stack \u6267\u884c\u662f\u4ee5\u4e00\u6574\u4e2atree\u4e3a\u5355\u4f4d\u3002\u4e14\u53ea\u80fd\u540c\u6b65\u6267\u884c\u3002"),(0,i.kt)("p",null,"Fiber \u662f\u4ee5\u4e00\u4e2afiber\u4e3a\u5355\u4f4d\u6267\u884c\u3002\u5bf9fiber\u505a\u8c03\u5ea6\u5904\u7406\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u8bf4\u6267\u884c A -> B -> C"),(0,i.kt)("p",null,"Stack\u662f\u4f9d\u6b21\u6267\u884c\uff0c\u5e76\u4e0d\u53ef\u4e2d\u65ad"),(0,i.kt)("p",null,"Fiber\u662f\uff0cA -> B \u53d1\u73b0\u6709\u66f4\u91cd\u8981\u7684\u4e8b\u60c5\uff0c\u4e2d\u65ad\uff0c\u7136\u540e\u56de\u6765\u6267\u884cB -> C"),(0,i.kt)("p",null,"\u65f6\u95f4\u5207\u7247\uff1aA-> B\u5207\u7247 B-> C\u5207\u7247\u3002A -> B\u6267\u884c\u4e86\u4e00\u534a\uff0c\u53d1\u73b0\u65f6\u95f4\u7528\u5b8c\u4e86\uff0c\u8d76\u7d27\u8fc7\u53bb\u770b\u770b\u6709\u6ca1\u6709\u7d27\u6025\u4efb\u52a1\u3002\u53d1\u73b0\u6709\u3002\u9a6c\u4e0a\u53bb\u6267\u884c\u91cd\u8981\u7684\u4efb\u52a1\uff0c\u7136\u540e\u56de\u6765\u91cd\u65b0A -> B"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/share/6.jpg",alt:" "})),(0,i.kt)("p",null,"\u4e24\u4e2a\u9636\u6bb5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reconciliation Phase\uff0c\u627e\u51fa\u9700\u8981\u66f4\u65b0\u7684DOM\uff0c\u53ef\u4ee5\u6253\u65ad")),(0,i.kt)("p",null,"\u5305\u542b\u4e86\uff08componentWillMount\u3001componentWillReceiveProps\u3001shouldComponentUpdate\u3001componentWillUpdate\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Commit Phase\uff0c\u4e00\u6b21\u6027\u628aDOM\u66f4\u65b0\u5b8c\uff0c\u7edd\u4e0d\u4f1a\u88ab\u6253\u65ad")),(0,i.kt)("p",null,"\uff08componentDidMount\u3001componentDidUpdate\u3001componentWillUnmount\uff09"),(0,i.kt)("h3",{id:"render--reconciliation"},"render / reconciliation"),(0,i.kt)("p",null,"\u6839\u636efiber tree\uff0c\u628a\u6bcf\u4e2afiber\u4f5c\u4e3a\u4e00\u4e2a\u5de5\u4f5c\u5355\u5143\u3002\u81ea\u9876\u5411\u4e0b\u6bcf\u4e2a\u8282\u70b9\u6784\u9020",(0,i.kt)("inlineCode",{parentName:"p"},"workInProgress tree")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f53\u524d\u8282\u70b9\u662f\u5426\u9700\u8981\u66f4\u65b0\uff1f\u66f4\u65b0\uff0c\u6253tag\uff0c\u52302 \uff1a \u4e0d\u66f4\u65b0\uff0cclone\u5b50\u8282\u70b9 \uff0c\u52305"),(0,i.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u5f53\u524d\u8282\u70b9\u72b6\u6001\uff08props\uff0cstate\uff0ccontext\u3002\u3002\u3002\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate()"),",false\u7684\u8bdd \u52305"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"render()"),"\u83b7\u5f97\u65b0\u7684\u5b50\u8282\u70b9\uff0c\u4e3a\u5b50\u8282\u70b9\u521b\u5efafiber\uff0c\u8fc7\u7a0b\u4e2d\u5c3d\u91cf\u590d\u7528\u73b0\u6709fiber\uff0c\u5b50\u8282\u70b9\u4e5f\u4f1a\u5728\u8fd9\u91cc\u589e\u5220"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709child fiber\uff0c\u90a3\u4e48\u5f53\u524dfiber\u5de5\u4f5c\u7ed3\u675f\uff0c\u628a",(0,i.kt)("inlineCode",{parentName:"li"},"effect list"),"\u4ea4\u7ed9",(0,i.kt)("inlineCode",{parentName:"li"},"return"),"\uff0c\u5e76\u628a\u5f53\u524d\u7684\u8282\u70b9\u7684sibling\u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u5de5\u4f5c\u5355\u5143\u3002\u6709child\u7684\u90a3\u4e48child\u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u5de5\u4f5c\u5355\u5143"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u5269\u4f59\u65f6\u95f4\u4e0d\u8db3\uff0c\u90a3\u4e48\u7b49\u4e0b\u4e00\u6b21\u4e3b\u7ebf\u7a0b\u7a7a\u95f2\u4e86\uff0c\u518d\u8fdb\u884c\u4e0b\u4e00\u4e2afiber\u3002\u5426\u5219\u7acb\u523b\u5f00\u59cb\u505a"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u4e0b\u4e00\u4e2afiber\uff0c\u90a3\u4e48\u7b2c\u4e00\u9636\u6bb5\u7ed3\u675f\uff0c\u8fdb\u5165",(0,i.kt)("inlineCode",{parentName:"li"},"pendingCommit"),"\u72b6\u6001")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," 1-6\u5faa\u73af\uff0c7\u51fa\u53e3\u3002\u5faa\u73af\u8fc7\u7a0b\uff0c\u505a\u5b8c\u770b\u8981\u4e0d\u8981\u4f11\u606f\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u5faa\u73af\u7ed3\u675f\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"workInProgress tree"),"\u7684\u6839\u8282\u70b9\u4e0a\u7684effect list\uff0c\u5c31\u662f\u6536\u96c6\u5230\u7684\u6240\u6709effect\uff08\u6bcf\u6b21\u505a\u5b8c\u4e00\u4e2a\u5c31\u5411\u4e0a\u5f52\u5e76\uff09")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5b9e\u9645\u4e0a\uff0c\u6784\u5efaworkInprogress\u7684\u8fc7\u7a0b\u5c31\u662fdiff\u8fc7\u7a0b\u3002\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"requestIdleCallback"),"\u6765\u8c03\u5ea6\u6267\u884c\u4e00\u7ec4\u4efb\u52a1\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u6bcf\u6b21\u6267\u884c\u5b8c\u770b\u770b\u6709\u6ca1\u6709\u7d27\u6025\u4efb\u52a1\uff0c\u628a\u63a7\u5236\u6743\u4ea4\u7ed9\u4e3b\u7ebf\u7a0b\uff0c\u7136\u540e\u7b49\u5f85\u4e0b\u4e00\u6b21\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"requestIdleCallback"),"\u56de\u8c03\u7ee7\u7eed\u6784\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"workInProgress tree"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"requestIdleCallback")),(0,i.kt)("h3",{id:"commit"},"commit"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5904\u7406effect list\uff0c\uff08\u66f4\u65b0DOM\u6811\u3001\u8c03\u7528\u751f\u547d\u5468\u671f\u3001\u66f4\u65b0ref\u5185\u90e8\u72b6\u6001\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u7ed3\u675f\uff0c\u5b8c\u6210commit\u5230DOM\u6811")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u662f\u4e00\u53e3\u6c14\u505a\u5b8c\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u4e0d\u8981\u518d\u540e3\u4e2a\u751f\u547d\u5468\u671f\u505a\u590d\u6742\u5de5\u4f5c")),(0,i.kt)("h2",{id:"\u4f18\u5148\u7ea7\u7b56\u7565"},"\u4f18\u5148\u7ea7\u7b56\u7565"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5de5\u4f5c\u5355\u5143\u8fd0\u884c\u65f6\u67096\u79cd\u4f18\u5148\u7ea7\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"synchronous \u4e0e\u4e4b\u524d\u7684Stack reconciler\u64cd\u4f5c\u4e00\u6837\uff0c\u540c\u6b65\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"task \u5728next tick\u4e4b\u524d\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"animation \u4e0b\u4e00\u5e27\u4e4b\u524d\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"high \u5728\u4e0d\u4e45\u7684\u5c06\u6765\u7acb\u5373\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"low \u7a0d\u5fae\u5ef6\u8fdf\uff08100-200ms\uff09\u6267\u884c\u4e5f\u6ca1\u5173\u7cfb"),(0,i.kt)("li",{parentName:"ul"},"offscreen \u4e0b\u4e00\u6b21render\u65f6\u6216scroll\u65f6\u624d\u6267\u884c")))}s.isMDXComponent=!0}}]);