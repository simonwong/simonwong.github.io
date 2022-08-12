"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[4944],{9613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),o=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=o(n),d=r,s=k["".concat(c,".").concat(d)]||k[d]||m[d]||l;return n?a.createElement(s,p(p({ref:e},u),{},{components:n})):a.createElement(s,p({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2098:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(2081),r=(n(9496),n(9613));const l={},p="C++ \u7b14\u8bb0",i={unversionedId:"computerbasic/cpp/README",id:"computerbasic/cpp/README",title:"C++ \u7b14\u8bb0",description:"\u524d\u7f6e",source:"@site/docs/computerbasic/cpp/README.md",sourceDirName:"computerbasic/cpp",slug:"/computerbasic/cpp/",permalink:"/docs/computerbasic/cpp/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660298396,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{},sidebar:"computerbasic",previous:{title:"C++ Primer \u7b14\u8bb0",permalink:"/docs/computerbasic/cpp_primer/"},next:{title:"\u4e8c\u8fdb\u5236\u4e0e\u4f4d\u8fd0\u7b97\u7684\u5b9e\u7528\u64cd\u4f5c",permalink:"/docs/computerbasic/\u4e8c\u8fdb\u5236\u4e0e\u4f4d\u8fd0\u7b97\u7684\u5b9e\u7528\u64cd\u4f5c"}},c={},o=[{value:"\u524d\u7f6e",id:"\u524d\u7f6e",level:2},{value:"c++ \u6807\u51c6\u7248\u672c",id:"c-\u6807\u51c6\u7248\u672c",level:3},{value:"\u7f16\u8bd1\u5668",id:"\u7f16\u8bd1\u5668",level:3},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:4},{value:"Clang",id:"clang",level:4},{value:"GNU\u7f16\u8bd1\u5668\u5957\u88c5 \uff08GCC\uff09",id:"gnu\u7f16\u8bd1\u5668\u5957\u88c5-gcc",level:4},{value:"\u6587\u4ef6\u540e\u7f00",id:"\u6587\u4ef6\u540e\u7f00",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:o};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c-\u7b14\u8bb0"},"C++ \u7b14\u8bb0"),(0,r.kt)("h2",{id:"\u524d\u7f6e"},"\u524d\u7f6e"),(0,r.kt)("p",null,"\u5b66\u4e60 c++ \u9700\u8981\u7684\u8bb8\u591a\u524d\u7f6e\u77e5\u8bc6\uff0c\u7f16\u8bd1\u5668\u533a\u522b\uff0c\u7248\u672c\u533a\u522b\uff0c\u6587\u4ef6\u540e\u7f00\u533a\u522b\u7b49\u3002\u5f3a\u5927\u7684\u8bed\u8a00\uff0c\u5374\u53c8\u6709\u5404\u79cd\u5404\u6837\u7684\u89c4\u8303\u533a\u522b\uff0c\u4ee4\u65b0\u624b\u751f\u754f\u3002"),(0,r.kt)("h3",{id:"c-\u6807\u51c6\u7248\u672c"},"c++ \u6807\u51c6\u7248\u672c"),(0,r.kt)("p",null,"\u7531\u8fd1\u5230\u8fdc\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"c++23\uff08c++2b\uff09\u8349\u6848\uff0c\u4ecd\u5728\u5236\u5b9a\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"c++20\uff08c++2a\uff09\u5c06\u8fd9\u95e8\u8bed\u8a00\u9886\u8fdb\u4e86\u73b0\u4ee3\u5316\u7684\u5927\u95e8"),(0,r.kt)("li",{parentName:"ul"},"c++14\uff08C++1y\uff09\u3001",(0,r.kt)("strong",{parentName:"li"},"c++17\uff08c++1x\uff09"),"\u662f\u5bf9 c++11 \u7684\u91cd\u8981\u8865\u5145\u548c\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"c++11\uff08C++0x\uff09")),(0,r.kt)("li",{parentName:"ul"},"c++03"),(0,r.kt)("li",{parentName:"ul"},"c++98")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202203301547655.jpeg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"gun++")," \u662f c++ \u5bf9\u5e94\u7248\u672c\u6807\u51c6\u4e0e gun \u62d3\u5c55\u3002gun \u62d3\u5c55\u6e90\u81ea\u4e8e GCC"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a8\u8350\uff1a"),"\u4f7f\u7528 c++17 \u7248\u672c\u6bd4\u8f83\u5408\u9002\uff0c\u6709\u4e9b\u7f16\u8bd1\u5668\u5bf9 c++20 \u6ca1\u6709\u5b8c\u5168\u652f\u6301\u3002"),(0,r.kt)("h3",{id:"\u7f16\u8bd1\u5668"},"\u7f16\u8bd1\u5668"),(0,r.kt)("h4",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"\u4f20\u7edf\u7684\u7f16\u8bd1\u5668\u901a\u5e38\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff0c\u524d\u7aef\uff08frontEnd\uff09\uff0c\u4f18\u5316\u5668\uff08Optimizer\uff09\u548c\u540e\u7aef\uff08backEnd\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u524d\u7aef\uff1a\u8d1f\u8d23\u8bcd\u6cd5\u8bed\u6cd5\u5206\u6790\uff0c\u6e90\u7801 AST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f18\u5316\u5668\uff1a\u5bf9\u4e2d\u95f4\u4ee3\u7801\u4f18\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u540e\u7aef\uff1a\u5c06\u4ee3\u7801\u8f6c\u4e3a\u5404\u81ea\u5e73\u53f0\u7684\u673a\u5668\u7801"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u73b0\u4ee3\u7f16\u8bd1\u5668\u5de5\u4f5c\u6d41\u7a0b"),"\uff1a"),(0,r.kt)("p",null,"\u6e90\u4ee3\u7801 => \u9884\u5904\u7406\u5668 => \u7f16\u8bd1\u5668 => \u6c47\u7f16\u8bed\u8a00 => \u76ee\u6807\u4ee3\u7801 => \u94fe\u63a5\u5668 => \u53ef\u6267\u884c\u6587\u4ef6"),(0,r.kt)("h4",{id:"clang"},"Clang"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/Clang"},"Clang")," \u662f\u4e00\u4e2a C\u3001C++\u3001Objective-C \u7b49\u53d8\u6210\u8bed\u8a00\u7684\u7f16\u8bd1\u5668\u524d\u7aef\uff0c\u91c7\u7528\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/LLVM"},"LLVM"),"\u4f5c\u4e3a\u5176\u540e\u7aef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"clang")," \u662f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"clang++")," \u662f"),(0,r.kt)("p",null,"\u67e5\u770b Clang \u5bf9 c++ \u4e2a\u7248\u672c\u7684\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://clang.llvm.org/cxx_status.html"},"C++ Support in Clang")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901f\u5ea6\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5360\u7528\u5c0f"),(0,r.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6027\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u9759\u6001\u5206\u6790")),(0,r.kt)("h4",{id:"gnu\u7f16\u8bd1\u5668\u5957\u88c5-gcc"},"GNU\u7f16\u8bd1\u5668\u5957\u88c5 \uff08GCC\uff09"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/GCC"},"GNU\u7f16\u8bd1\u5668\u5957\u88c5")," \u53ef\u4ee5\u5904\u7406 C\u3001C++\u3001Objective-C\u3001Java\u3001GO \u7b49\u8bed\u8a00\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"gcc")," \u662f GUN C Compiler\uff0c\u5373 C \u7f16\u8bd1\u5668\uff1b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"g++")," \u662f GUN C++ Compiler\uff0c\u5373 C++ \u7f16\u8bd1\u5668\uff1b"),(0,r.kt)("p",null,"\u67e5\u770b GCC \u5bf9 c++ \u7684\u5404\u7248\u672c\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/projects/cxx-status.html#cxx20"},"C++ Standards Support in GCC")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6d41\u884c\uff0c\u5e7f\u6cdb\u4f7f\u7528\uff0c\u652f\u6301\u5b8c\u5907")),(0,r.kt)("h3",{id:"\u6587\u4ef6\u540e\u7f00"},"\u6587\u4ef6\u540e\u7f00"),(0,r.kt)("p",null,"C++ \u6e90\u6587\u4ef6\u7684\u540e\u7f00\u5341\u5206\u6df7\u4e71\uff0c\u4e0d\u540c\u7f16\u8bd1\u5668\u652f\u6301\u4e0d\u540c\u540e\u7f00\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u8bd1\u5668"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Microsoft Visual C++"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GCC\uff08GNU C++\uff09"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Borland C++"),(0,r.kt)("th",{parentName:"tr",align:"left"},"UNIX"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5934\u6587\u4ef6\u540e\u7f00"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6807\u51c6\u6587\u4ef6\u540e\u7f00"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".cpp")," ",(0,r.kt)("inlineCode",{parentName:"td"},".cxx"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},".cc")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".cpp"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},".cxx"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},".cc"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},".c++")," ",(0,r.kt)("inlineCode",{parentName:"td"},".C")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".cpp")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".C"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},".cc"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},".cxx"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},".c"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8c37\u6b4c\u7684\u89c4\u8303\uff1a")),(0,r.kt)("p",null,"\u6587\u4ef6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".cc"),"\uff0c\u5934\u6587\u4ef6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".h")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a8\u8350\uff1a")),(0,r.kt)("p",null,"\u6587\u4ef6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".cpp")," \uff0c\u5934\u6587\u4ef6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".h")),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300aC++ Primer\u300b\uff08\u4e2d\u6587\u7248\uff09\uff08\u7b2c 5 \u7248\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.cppreference.com/w/cpp"},"C++ \u53c2\u8003\u624b\u518c"),"\uff08\u4e2d\u6587\u7248\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://changkun.de/modern-cpp/"},"\u73b0\u4ee3 C++ \u6559\u7a0b: \u9ad8\u901f\u4e0a\u624b C++ 11/14/17/20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/contents/"},"Google \u98ce\u683c\u6307\u5357\u4e2d\u6587\u7248\uff1aC++ \u98ce\u683c\u6307\u5357"))))}m.isMDXComponent=!0}}]);