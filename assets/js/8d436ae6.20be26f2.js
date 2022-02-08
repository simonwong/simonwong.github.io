"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[1204],{9613:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return h}});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),v=u(r),h=l,k=v["".concat(d,".").concat(h)]||v[h]||p[h]||i;return r?n.createElement(k,a(a({ref:t},o),{},{components:r})):n.createElement(k,a({ref:t},o))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=v;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6429:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return o},default:function(){return v}});var n=r(5900),l=r(4750),i=(r(9496),r(9613)),a=["components"],c={},d="React \u4e4b\u9053\uff0c\u6700\u4f73\u5b9e\u8df5",u={unversionedId:"advanced/react-practice/\u6700\u4f73\u5b9e\u8df5",id:"advanced/react-practice/\u6700\u4f73\u5b9e\u8df5",title:"React \u4e4b\u9053\uff0c\u6700\u4f73\u5b9e\u8df5",description:"Tao of React - Software Design, Architecture & Best Practices",source:"@site/docs/advanced/react-practice/\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:"advanced/react-practice",slug:"/advanced/react-practice/\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/advanced/react-practice/\u6700\u4f73\u5b9e\u8df5",tags:[],version:"current",frontMatter:{},sidebar:"advanced",previous:{title:"\u524d\u7aef\u8fdb\u9636",permalink:"/docs/advanced"},next:{title:"React Hooks \u4f7f\u7528\u6280\u5de7",permalink:"/docs/advanced/react-practice/react-hooks\u4f7f\u7528\u6280\u5de7"}},o=[{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[{value:"\u504f\u7231\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u504f\u7231\u51fd\u6570\u5f0f\u7ec4\u4ef6",children:[],level:3},{value:"\u7f16\u5199\u4e00\u81f4\u6027\u7ec4\u4ef6",id:"\u7f16\u5199\u4e00\u81f4\u6027\u7ec4\u4ef6",children:[],level:3},{value:"\u7ec4\u4ef6\u540d\u79f0",id:"\u7ec4\u4ef6\u540d\u79f0",children:[],level:3},{value:"\u8f85\u52a9\u51fd\u6570",id:"\u8f85\u52a9\u51fd\u6570",children:[],level:3},{value:"\u4e0d\u8981\u786c\u7f16\u7801",id:"\u4e0d\u8981\u786c\u7f16\u7801",children:[],level:3},{value:"\u7ec4\u4ef6\u957f\u5ea6",id:"\u7ec4\u4ef6\u957f\u5ea6",children:[],level:3},{value:"\u5728 JSX \u4e2d\u6ce8\u91ca",id:"\u5728-jsx-\u4e2d\u6ce8\u91ca",children:[],level:3},{value:"\u4f7f\u7528\u9519\u8bef\u8fb9\u754c",id:"\u4f7f\u7528\u9519\u8bef\u8fb9\u754c",children:[],level:3},{value:"\u89e3\u6784\u53c2\u6570",id:"\u89e3\u6784\u53c2\u6570",children:[],level:3},{value:"\u53c2\u6570\u6570\u91cf",id:"\u53c2\u6570\u6570\u91cf",children:[],level:3},{value:"\u4f20\u9012\u5bf9\u8c61",id:"\u4f20\u9012\u5bf9\u8c61",children:[],level:3},{value:"\u6761\u4ef6\u6e32\u67d3",id:"\u6761\u4ef6\u6e32\u67d3",children:[],level:3},{value:"\u907f\u514d\u5d4c\u5957\u6761\u4ef6\u6e32\u67d3",id:"\u907f\u514d\u5d4c\u5957\u6761\u4ef6\u6e32\u67d3",children:[],level:3},{value:"\u5728\u5355\u72ec\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5217\u8868",id:"\u5728\u5355\u72ec\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5217\u8868",children:[],level:3},{value:"\u5728\u53c2\u6570\u89e3\u6784\u65f6\u8d4b\u4e88\u9ed8\u8ba4\u503c",id:"\u5728\u53c2\u6570\u89e3\u6784\u65f6\u8d4b\u4e88\u9ed8\u8ba4\u503c",children:[],level:3},{value:"\u907f\u514d\u5d4c\u5957\u7684\u6e32\u67d3\u51fd\u6570",id:"\u907f\u514d\u5d4c\u5957\u7684\u6e32\u67d3\u51fd\u6570",children:[],level:3}],level:2},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",children:[{value:"\u4f7f\u7528 reducer",id:"\u4f7f\u7528-reducer",children:[],level:3}],level:2},{value:"\u7ec4\u4ef6\u5fc3\u667a\u6a21\u578b",id:"\u7ec4\u4ef6\u5fc3\u667a\u6a21\u578b",children:[],level:2},{value:"\u5e94\u7528\u7ed3\u6784",id:"\u5e94\u7528\u7ed3\u6784",children:[],level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",children:[{value:"\u4e0d\u8981\u8fc7\u65e9\u4f18\u5316",id:"\u4e0d\u8981\u8fc7\u65e9\u4f18\u5316",children:[],level:3},{value:"\u67e5\u770b bundle \u5c3a\u5bf8",id:"\u67e5\u770b-bundle-\u5c3a\u5bf8",children:[],level:3},{value:"\u91cd\u65b0\u6e32\u67d3",id:"\u91cd\u65b0\u6e32\u67d3",children:[],level:3}],level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[],level:2},{value:"\u6837\u5f0f",id:"\u6837\u5f0f",children:[],level:2},{value:"\u6570\u636e\u8bf7\u6c42",id:"\u6570\u636e\u8bf7\u6c42",children:[{value:"\u4f7f\u7528\u6570\u636e\u5904\u7406\u5e93",id:"\u4f7f\u7528\u6570\u636e\u5904\u7406\u5e93",children:[],level:3}],level:2}],p={toc:o};function v(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-\u4e4b\u9053\u6700\u4f73\u5b9e\u8df5"},"React \u4e4b\u9053\uff0c\u6700\u4f73\u5b9e\u8df5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://alexkondov.com/tao-of-react/"},"Tao of React - Software Design, Architecture & Best Practices")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.taniarascia.com/react-architecture-directory-structure/"},"React Architecture: How to Structure and Organize a React Application")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,i.kt)("h3",{id:"\u504f\u7231\u51fd\u6570\u5f0f\u7ec4\u4ef6"},"\u504f\u7231\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u6ca1\u6709\u751f\u547d\u5468\u671f\u3001\u6784\u9020\u51fd\u6570\u3001\u6837\u677f\u4ee3\u7801"),(0,i.kt)("h3",{id:"\u7f16\u5199\u4e00\u81f4\u6027\u7ec4\u4ef6"},"\u7f16\u5199\u4e00\u81f4\u6027\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u575a\u6301\u76f8\u540c\u7684\u98ce\u683c\uff0c\u8f85\u52a9\u51fd\u6570\u653e\u76f8\u540c\u4f4d\u7f6e\u3001\u76f8\u540c\u7684\u65b9\u5f0f\u5bfc\u51fa\u3001\u9075\u5faa\u76f8\u540c\u7684\u547d\u540d\u89c4\u5219"),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u540d\u79f0"},"\u7ec4\u4ef6\u540d\u79f0"),(0,i.kt)("p",null,"\u59cb\u7ec8\u547d\u540d\u4f60\u7684\u7ec4\u4ef6\uff0c\u4fbf\u4e8e\u5728 React Dev Tools \u4e2d\u8ffd\u8e2a"),(0,i.kt)("h3",{id:"\u8f85\u52a9\u51fd\u6570"},"\u8f85\u52a9\u51fd\u6570"),(0,i.kt)("p",null,"\u4e0d\u9700\u8981\u4fdd\u6301\u95ed\u5305\u7684\u8f85\u52a9\u51fd\u6570\u79fb\u5230\u7ec4\u4ef6\u5916\u90e8\uff0c\u51cf\u5c11\u7ec4\u4ef6\u566a\u97f3"),(0,i.kt)("h3",{id:"\u4e0d\u8981\u786c\u7f16\u7801"},"\u4e0d\u8981\u786c\u7f16\u7801"),(0,i.kt)("p",null,"\u4f7f\u7528\u914d\u7f6e\u5bf9\u8c61"),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u957f\u5ea6"},"\u7ec4\u4ef6\u957f\u5ea6"),(0,i.kt)("p",null,"\u4e00\u4e2a\u51fd\u6570\u5982\u679c\u505a\u4e86\u5f88\u591a\u4e8b\u60c5\uff0c\u8003\u8651\u63d0\u53d6\u903b\u8f91\u3002"),(0,i.kt)("h3",{id:"\u5728-jsx-\u4e2d\u6ce8\u91ca"},"\u5728 JSX \u4e2d\u6ce8\u91ca"),(0,i.kt)("p",null,"\u5728\u4ee3\u7801\u5757\u4e2d\u63d0\u4f9b\u903b\u8f91\u6ce8\u91ca"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u9519\u8bef\u8fb9\u754c"},"\u4f7f\u7528\u9519\u8bef\u8fb9\u754c"),(0,i.kt)("p",null,"\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")),(0,i.kt)("h3",{id:"\u89e3\u6784\u53c2\u6570"},"\u89e3\u6784\u53c2\u6570"),(0,i.kt)("p",null,"\u89e3\u6784 ",(0,i.kt)("inlineCode",{parentName:"p"},"...props")),(0,i.kt)("h3",{id:"\u53c2\u6570\u6570\u91cf"},"\u53c2\u6570\u6570\u91cf"),(0,i.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7ec4\u4ef6 props \u8fc7\u591a\uff0c\u8003\u8651\u62c6\u5206\uff1f"),(0,i.kt)("p",null,"props \u8d8a\u591a\uff0c\u610f\u5473\u7740\u91cd\u65b0\u6e32\u67d3\u7684\u53ef\u80fd\u8d8a\u591a"),(0,i.kt)("h3",{id:"\u4f20\u9012\u5bf9\u8c61"},"\u4f20\u9012\u5bf9\u8c61"),(0,i.kt)("p",null,"\u4f20\u9012\u4e00\u4e2a\u6570\u636e\u76f8\u5173\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u4e00\u4e2a\u4f20\u5165"),(0,i.kt)("h3",{id:"\u6761\u4ef6\u6e32\u67d3"},"\u6761\u4ef6\u6e32\u67d3"),(0,i.kt)("p",null,"\u4f7f\u7528\u4e09\u5143\u8868\u8fbe\u5f0f\u4e0d\u5bb9\u6613\u51fa\u9519\u3002\u77ed\u8def\u8fd0\u7b97\u53ef\u80fd\u9002\u5f97\u5176\u53cd"),(0,i.kt)("h3",{id:"\u907f\u514d\u5d4c\u5957\u6761\u4ef6\u6e32\u67d3"},"\u907f\u514d\u5d4c\u5957\u6761\u4ef6\u6e32\u67d3"),(0,i.kt)("h3",{id:"\u5728\u5355\u72ec\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5217\u8868"},"\u5728\u5355\u72ec\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5217\u8868"),(0,i.kt)("p",null,"\u5c06 map \u6e32\u67d3\u7684\u7ec4\u4ef6\u63d0\u53d6\u4e3a\u4e00\u4e2a\u7ec4\u4ef6"),(0,i.kt)("h3",{id:"\u5728\u53c2\u6570\u89e3\u6784\u65f6\u8d4b\u4e88\u9ed8\u8ba4\u503c"},"\u5728\u53c2\u6570\u89e3\u6784\u65f6\u8d4b\u4e88\u9ed8\u8ba4\u503c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defaultProps")," \u662f\u53e6\u5916\u9644\u52a0\u5230\u7ec4\u4ef6\u7684\uff0c\u610f\u5473\u7740\u548c\u53c2\u6570\u503c\u4e0d\u5728\u4e00\u8d77\u3002"),(0,i.kt)("p",null,"\u5728\u53c2\u6570\u89e3\u6784\u65f6\u8d4b\u4e88\u9ed8\u8ba4\u503c\u53ef\u4ee5\u66f4\u8f7b\u677e\u7684\u4ece\u4e0a\u5f80\u4e0b\u770b\u4ee3\u7801\u3002"),(0,i.kt)("h3",{id:"\u907f\u514d\u5d4c\u5957\u7684\u6e32\u67d3\u51fd\u6570"},"\u907f\u514d\u5d4c\u5957\u7684\u6e32\u67d3\u51fd\u6570"),(0,i.kt)("h2",{id:"\u72b6\u6001\u7ba1\u7406"},"\u72b6\u6001\u7ba1\u7406"),(0,i.kt)("h3",{id:"\u4f7f\u7528-reducer"},"\u4f7f\u7528 reducer"),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5fc3\u667a\u6a21\u578b"},"\u7ec4\u4ef6\u5fc3\u667a\u6a21\u578b"),(0,i.kt)("h2",{id:"\u5e94\u7528\u7ed3\u6784"},"\u5e94\u7528\u7ed3\u6784"),(0,i.kt)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,i.kt)("h3",{id:"\u4e0d\u8981\u8fc7\u65e9\u4f18\u5316"},"\u4e0d\u8981\u8fc7\u65e9\u4f18\u5316"),(0,i.kt)("p",null,"\u5728\u6027\u80fd\u4f18\u5316\u524d\uff0c\u6784\u5efa\u53ef\u8bfb\u53ef\u7ef4\u62a4\u7684\u7ec4\u4ef6\u66f4\u91cd\u8981\u3002"),(0,i.kt)("h3",{id:"\u67e5\u770b-bundle-\u5c3a\u5bf8"},"\u67e5\u770b bundle \u5c3a\u5bf8"),(0,i.kt)("p",null,"\u4e0d\u8981\u53d1\u5e03\u5355\u72ec bundle \u7684js \u6587\u4ef6\uff0c\u5c3d\u53ef\u80fd\u5728\u8def\u7531\u7ea7\u522b\u6216\u66f4\u9ad8\u7ea7\u522b\u62c6\u5206"),(0,i.kt)("h3",{id:"\u91cd\u65b0\u6e32\u67d3"},"\u91cd\u65b0\u6e32\u67d3"),(0,i.kt)("p",null,"\u6ce8\u610f\u4f60\u7684\u53c2\u6570\uff1a\u51fd\u6570\u3001\u5bf9\u8c61\u3001\u6570\u7ec4"),(0,i.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,i.kt)("h2",{id:"\u6837\u5f0f"},"\u6837\u5f0f"),(0,i.kt)("h2",{id:"\u6570\u636e\u8bf7\u6c42"},"\u6570\u636e\u8bf7\u6c42"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u6570\u636e\u5904\u7406\u5e93"},"\u4f7f\u7528\u6570\u636e\u5904\u7406\u5e93"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"React Query")," ",(0,i.kt)("inlineCode",{parentName:"p"},"swr")))}v.isMDXComponent=!0}}]);