"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[4545],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=c(n),d=l,g=k["".concat(o,".").concat(d)]||k[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(2081),l=(n(9496),n(9613));const a={},i="\u7b2c 3 \u7ae0\uff1a\u5b57\u7b26\u4e32\u3001\u5411\u91cf\u548c\u6570\u7ec4",p={unversionedId:"computerbasic/cpp_primer/part01/ch03",id:"computerbasic/cpp_primer/part01/ch03",title:"\u7b2c 3 \u7ae0\uff1a\u5b57\u7b26\u4e32\u3001\u5411\u91cf\u548c\u6570\u7ec4",description:"\u672c\u7ae0\u91cd\u70b9\uff1astring \u548c vector\u3002",source:"@site/docs/computerbasic/cpp_primer/part01/ch03.md",sourceDirName:"computerbasic/cpp_primer/part01",slug:"/computerbasic/cpp_primer/part01/ch03",permalink:"/docs/computerbasic/cpp_primer/part01/ch03",draft:!1,tags:[],version:"current",lastUpdatedAt:1660298396,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{}},o={},c=[{value:"3.1 \u547d\u540d\u7a7a\u95f4\u7684 using \u58f0\u660e",id:"31-\u547d\u540d\u7a7a\u95f4\u7684-using-\u58f0\u660e",level:2},{value:"3.2 \u6807\u51c6\u5e93\u7c7b\u578b string",id:"32-\u6807\u51c6\u5e93\u7c7b\u578b-string",level:2},{value:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316 string \u5bf9\u8c61",id:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316-string-\u5bf9\u8c61",level:3},{value:"string \u5bf9\u8c61\u4e0a\u7684\u64cd\u4f5c",id:"string-\u5bf9\u8c61\u4e0a\u7684\u64cd\u4f5c",level:3},{value:"\u8f93\u5165\u8f93\u51fa",id:"\u8f93\u5165\u8f93\u51fa",level:4},{value:"<code>getline</code>",id:"getline",level:4},{value:"<code>string::size_type</code>",id:"stringsize_type",level:4},{value:"\u5b57\u7b26\u4e32\u5b57\u9762\u503c",id:"\u5b57\u7b26\u4e32\u5b57\u9762\u503c",level:4},{value:"\u5904\u7406 string \u4e2d\u7684\u5b57\u7b26\u4e32",id:"\u5904\u7406-string-\u4e2d\u7684\u5b57\u7b26\u4e32",level:3},{value:"\u57fa\u4e8e\u8303\u56f4\u7684 for \u8bed\u53e5",id:"\u57fa\u4e8e\u8303\u56f4\u7684-for-\u8bed\u53e5",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u5982\u4f55\u9000\u51fa <code>while(cin &gt;&gt; str)</code> \u5faa\u73af",id:"\u5982\u4f55\u9000\u51fa-whilecin--str-\u5faa\u73af",level:4},{value:"3.3 \u6807\u51c6\u5e93\u7c7b\u578b vector",id:"33-\u6807\u51c6\u5e93\u7c7b\u578b-vector",level:2},{value:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316 vector \u5bf9\u8c61",id:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316-vector-\u5bf9\u8c61",level:3},{value:"\u5217\u8868\u521d\u59cb\u5316 vector \u5bf9\u8c61",id:"\u5217\u8868\u521d\u59cb\u5316-vector-\u5bf9\u8c61",level:4},{value:"\u503c\u521d\u59cb\u5316",id:"\u503c\u521d\u59cb\u5316",level:4},{value:"\u5411 vector \u5bf9\u8c61\u6dfb\u52a0\u5143\u7d20",id:"\u5411-vector-\u5bf9\u8c61\u6dfb\u52a0\u5143\u7d20",level:3},{value:"\u5176\u4ed6 vector \u64cd\u4f5c",id:"\u5176\u4ed6-vector-\u64cd\u4f5c",level:3},{value:"\u4e0d\u80fd\u7528\u4e0b\u6807\u5f62\u5f0f\u6dfb\u52a0\u5143\u7d20",id:"\u4e0d\u80fd\u7528\u4e0b\u6807\u5f62\u5f0f\u6dfb\u52a0\u5143\u7d20",level:4},{value:"3.4 \u8fed\u4ee3\u5668",id:"34-\u8fed\u4ee3\u5668",level:2},{value:"\u4f7f\u7528\u8fed\u4ee3\u5668",id:"\u4f7f\u7528\u8fed\u4ee3\u5668",level:3},{value:"\u8fed\u4ee3\u5668\u8fd0\u7b97\u7b26",id:"\u8fed\u4ee3\u5668\u8fd0\u7b97\u7b26",level:4},{value:"\u8fed\u4ee3\u5668\u7c7b\u578b",id:"\u8fed\u4ee3\u5668\u7c7b\u578b",level:4},{value:"\u89e3\u5f15\u7528\u3001\u6210\u5458\u8bbf\u95ee\u64cd\u4f5c",id:"\u89e3\u5f15\u7528\u6210\u5458\u8bbf\u95ee\u64cd\u4f5c",level:4},{value:"\u8fed\u4ee3\u5668\u8fd0\u7b97",id:"\u8fed\u4ee3\u5668\u8fd0\u7b97",level:3},{value:"3.5 \u6570\u7ec4",id:"35-\u6570\u7ec4",level:2},{value:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316\u6570\u7ec4",id:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316\u6570\u7ec4",level:3},{value:"\u663e\u793a\u7684\u521d\u59cb\u5316\u6570\u7ec4",id:"\u663e\u793a\u7684\u521d\u59cb\u5316\u6570\u7ec4",level:4},{value:"\u5b57\u7b26\u6570\u7ec4\u7684\u7279\u6b8a\u6027",id:"\u5b57\u7b26\u6570\u7ec4\u7684\u7279\u6b8a\u6027",level:4},{value:"\u4e0d\u5141\u8bb8\u62f7\u8d1d\u548c\u8d4b\u503c",id:"\u4e0d\u5141\u8bb8\u62f7\u8d1d\u548c\u8d4b\u503c",level:4},{value:"\u590d\u6742\u7684\u6570\u7ec4\u58f0\u660e",id:"\u590d\u6742\u7684\u6570\u7ec4\u58f0\u660e",level:4},{value:"\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20",id:"\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20",level:3},{value:"\u6307\u9488\u548c\u6570\u7ec4",id:"\u6307\u9488\u548c\u6570\u7ec4",level:3},{value:"\u6307\u9488\u4e5f\u662f\u8fed\u4ee3\u5668",id:"\u6307\u9488\u4e5f\u662f\u8fed\u4ee3\u5668",level:4},{value:"\u4e0b\u6807",id:"\u4e0b\u6807",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c-3-\u7ae0\u5b57\u7b26\u4e32\u5411\u91cf\u548c\u6570\u7ec4"},"\u7b2c 3 \u7ae0\uff1a\u5b57\u7b26\u4e32\u3001\u5411\u91cf\u548c\u6570\u7ec4"),(0,l.kt)("p",null,"\u672c\u7ae0\u91cd\u70b9\uff1a",(0,l.kt)("strong",{parentName:"p"},"string")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"vector"),"\u3002"),(0,l.kt)("p",null,"string \u8868\u793a\u53ef\u53d8\u957f\u7684\u5b57\u7b26\u5e8f\u5217"),(0,l.kt)("p",null,"vector \u5b58\u653e\u7684\u662f\u67d0\u79cd\u7ed9\u5b9a\u7c7b\u578b\u5bf9\u8c61\u7684\u53ef\u53d8\u957f\u5e8f\u5217"),(0,l.kt)("h2",{id:"31-\u547d\u540d\u7a7a\u95f4\u7684-using-\u58f0\u660e"},"3.1 \u547d\u540d\u7a7a\u95f4\u7684 using \u58f0\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"using namespace::name;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5934\u6587\u4ef6\u4e0d\u5e94\u5305\u542b using \u58f0\u660e"),"\uff0c\u56e0\u4e3a\u5934\u6587\u4ef6\u7684\u5185\u5bb9\u4f1a\u62f7\u8d1d\u5230\u6240\u6709\u5f15\u7528\u5b83\u7684\u6587\u4ef6\u4e2d\u53bb"),(0,l.kt)("h2",{id:"32-\u6807\u51c6\u5e93\u7c7b\u578b-string"},"3.2 \u6807\u51c6\u5e93\u7c7b\u578b string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"#include <string>\n\nusing std::string;\n")),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316-string-\u5bf9\u8c61"},"\u5b9a\u4e49\u548c\u521d\u59cb\u5316 string \u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://file.wangsijie.top/blog/202207290949534.jpeg",alt:null})),(0,l.kt)("h3",{id:"string-\u5bf9\u8c61\u4e0a\u7684\u64cd\u4f5c"},"string \u5bf9\u8c61\u4e0a\u7684\u64cd\u4f5c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://file.wangsijie.top/blog/202208010905507.jpeg",alt:null})),(0,l.kt)("h4",{id:"\u8f93\u5165\u8f93\u51fa"},"\u8f93\u5165\u8f93\u51fa"),(0,l.kt)("p",null,"\u8f93\u5165\u5c06\u4f1a\u5ffd\u7565\u5f00\u5934\u7684\u7a7a\u767d\uff08\u7a7a\u683c\u3001\u6362\u884c\uff09\uff0c\u4ece\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5f00\u59cb\uff0c\u76f4\u5230\u9047\u5230\u4e0b\u4e00\u4e2a\u7a7a\u767d\u3002\u5982\u8f93\u5165 \u201c    hello  world!      \u201d\uff0c\u8f93\u51fa \u201chello\u201d\u3002"),(0,l.kt)("h4",{id:"getline"},(0,l.kt)("inlineCode",{parentName:"h4"},"getline")),(0,l.kt)("p",null,"getline \u51fd\u6570\u8fd4\u56de\u7684\u90a3\u4e2a\u6362\u884c\u7b26\u5b9e\u9645\u4e0a\u88ab\u4e22\u5f03\u6389\u4e86"),(0,l.kt)("h4",{id:"stringsize_type"},(0,l.kt)("inlineCode",{parentName:"h4"},"string::size_type")),(0,l.kt)("p",null,"size \u65b9\u6cd5\u8fd4\u56de\u7684\u4e0d\u662f int \u6216 unsigned \uff0c\u800c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"string::size_type"),"\u3002",(0,l.kt)("strong",{parentName:"p"},"\u662f\u4e00\u4e2a\u65e0\u7b26\u53f7\u6574\u6570\u578b\uff0c\u80fd\u591f\u5b58\u653e\u4efb\u4f55 string \u7684\u5927\u5c0f"),"\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"size() < n"),"\u5f53 n \u662f \u8d1f\u6570\u65f6\uff0c\u7ed3\u679c\u5927\u6982\u7387\u662f true\uff0cn \u4f1a\u88ab\u8f6c\u4e3a\u4e00\u4e2a \u65e0\u7b26\u53f7\u503c\u3002"),(0,l.kt)("h4",{id:"\u5b57\u7b26\u4e32\u5b57\u9762\u503c"},"\u5b57\u7b26\u4e32\u5b57\u9762\u503c"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u662f\u4e3a\u4e86\u517c\u5bb9 C \u7684\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u548c string \u662f\u4e0d\u540c\u7684\u7c7b\u578b"),"\u3002"),(0,l.kt)("p",null,"string \u53ef\u4ee5\u4e0e\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u76f8\u52a0\uff0c\u5f97\u5230\u65b0\u7684 string\u3002\u4f46\u662f\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u4e0d\u80fd\u4e0e\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u76f8\u52a0\u3002"),(0,l.kt)("h3",{id:"\u5904\u7406-string-\u4e2d\u7684\u5b57\u7b26\u4e32"},"\u5904\u7406 string \u4e2d\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://file.wangsijie.top/blog/202208020926178.jpeg",alt:null})),(0,l.kt)("h4",{id:"\u57fa\u4e8e\u8303\u56f4\u7684-for-\u8bed\u53e5"},"\u57fa\u4e8e\u8303\u56f4\u7684 for \u8bed\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"for (declaration: expression)\n  statement\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"for (auto c : str) {\n    cout << c << endl;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u5f15\u7528\u6539\u53d8\u503c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"for (auto &c : str) {\n  c = toupper(c);\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0b\u6807\u8fd0\u7b97\u7b26")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"s[0]")," \u662f\u7b2c\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"s[s.size() - 1]")," \u662f\u6700\u540e\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("p",null,"\u4e0b\u6807\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e 0\uff0c\u800c\u5c0f\u4e8e size() \u7684\u503c\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e0b\u6807\u7c7b\u578b\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"string::size_type"),"\u3002"),(0,l.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.kt)("h4",{id:"\u5982\u4f55\u9000\u51fa-whilecin--str-\u5faa\u73af"},"\u5982\u4f55\u9000\u51fa ",(0,l.kt)("inlineCode",{parentName:"h4"},"while(cin >> str)")," \u5faa\u73af"),(0,l.kt)("p",null,"\u952e\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"ctrl + d")," \u8df3\u51fa\u5faa\u73af"),(0,l.kt)("h2",{id:"33-\u6807\u51c6\u5e93\u7c7b\u578b-vector"},"3.3 \u6807\u51c6\u5e93\u7c7b\u578b vector"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vector")," \u8868\u793a\u5bf9\u8c61\u7684\u96c6\u5408\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u7684\u7c7b\u578b\u90fd\u76f8\u540c\uff0c\u5e76\u6709\u4e00\u4e00\u5bf9\u5e94\u7684\u7d22\u5f15\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"#include <vector>\n\nusing std::vector;\n")),(0,l.kt)("p",null,"vector \u662f\u6a21\u677f\u800c\u975e\u7c7b\u578b\uff0c\u7531 vector \u751f\u6210\u7684\u7c7b\u578b\u5fc5\u987b\u5305\u542b vector \u4e2d\u5143\u7d20\u7684\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"vector<int>"),"\u3002"),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316-vector-\u5bf9\u8c61"},"\u5b9a\u4e49\u548c\u521d\u59cb\u5316 vector \u5bf9\u8c61",(0,l.kt)("img",{parentName:"h3",src:"https://file.wangsijie.top/blog/202208041955056.jpeg",alt:null})),(0,l.kt)("h4",{id:"\u5217\u8868\u521d\u59cb\u5316-vector-\u5bf9\u8c61"},"\u5217\u8868\u521d\u59cb\u5316 vector \u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'vector<string> arcticles = { "a", "an", "the" };\n')),(0,l.kt)("h4",{id:"\u503c\u521d\u59cb\u5316"},"\u503c\u521d\u59cb\u5316"),(0,l.kt)("p",null,"10 \u4e2a\u5143\u7d20\uff0c\u6bcf\u4e2a\u90fd\u662f\u7a7a string \u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"vector<string> ivec(10);\n")),(0,l.kt)("h3",{id:"\u5411-vector-\u5bf9\u8c61\u6dfb\u52a0\u5143\u7d20"},"\u5411 vector \u5bf9\u8c61\u6dfb\u52a0\u5143\u7d20"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"push_back")," \u8d1f\u8d23\u5411 vector \u672b\u5c3e\u6dfb\u52a0\u503c\u3002"),(0,l.kt)("p",null,"vector \u5bf9\u8c61\u80fd\u9ad8\u6548\u589e\u957f\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u8303\u56f4 for \u8bed\u53e5\u4e2d\u6700\u597d\u4e0d\u8981\u6709\u6539\u53d8\u904d\u5386\u5e8f\u5217\u5927\u5c0f\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"\u5176\u4ed6-vector-\u64cd\u4f5c"},"\u5176\u4ed6 vector \u64cd\u4f5c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://file.wangsijie.top/blog/202208061519276.jpeg",alt:null})),(0,l.kt)("p",null,"empty\u3001size \u8ddf string \u529f\u80fd\u5b8c\u5168\u4e00\u81f4\uff0csize \u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"vector<T>::size_type")),(0,l.kt)("h4",{id:"\u4e0d\u80fd\u7528\u4e0b\u6807\u5f62\u5f0f\u6dfb\u52a0\u5143\u7d20"},"\u4e0d\u80fd\u7528\u4e0b\u6807\u5f62\u5f0f\u6dfb\u52a0\u5143\u7d20"),(0,l.kt)("p",null,"\u5411\u4e00\u4e2a\u7a7a\u7684 vector \u76f4\u63a5 ",(0,l.kt)("inlineCode",{parentName:"p"},"vec[idx] = xxx")," \u662f\u9519\u8bef\u7684\uff0c\u4e0b\u6807\u8fd0\u7b97\u7b26\u7528\u4e8e\u8bbf\u95ee\u5df2\u5b58\u5728\u7684\u5143\u7d20\u3002"),(0,l.kt)("p",null,"\u786e\u4fdd\u4e0b\u6807\u5408\u6cd5\u7684\u4e00\u79cd\u6709\u6548\u624b\u6bb5\u5c31\u662f\u5c3d\u53ef\u80fd\u4f7f\u7528\u8303\u56f4for\u8bed\u53e5\u3002"),(0,l.kt)("h2",{id:"34-\u8fed\u4ee3\u5668"},"3.4 \u8fed\u4ee3\u5668"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u8fed\u4ee3\u5668"},"\u4f7f\u7528\u8fed\u4ee3\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"v.begin(); // \u6307\u5411\u7b2c\u4e00\u4e2a\u5143\u7d20\nv.end(); // \u6307\u5411\u5c3e\u5143\u7d20\u7684\u4e0b\u4e00\u4e2a\u4f4d\u7f6e\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"end()")," \u8fd4\u56de\u7684\u8fed\u4ee3\u5668\u79f0\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u5c3e\u540e\u8fed\u4ee3\u5668"),"\uff08off-the-end iterator, end iterator\uff09\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5bb9\u5668\u4e3a\u7a7a\uff0c\u4ed6\u4eec\u6307\u5411\u540c\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u90fd\u662f\u5c3e\u540e\u8fed\u4ee3\u5668\u3002"),(0,l.kt)("h4",{id:"\u8fed\u4ee3\u5668\u8fd0\u7b97\u7b26"},"\u8fed\u4ee3\u5668\u8fd0\u7b97\u7b26"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://file.wangsijie.top/blog/202208090920884.jpeg",alt:null})),(0,l.kt)("p",null,"\u8fed\u4ee3\u5668\u7684 for \u5faa\u73af\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"!=")," \u5224\u65ad\u5faa\u73af\u7ed3\u675f\u6761\u4ef6\uff0c\u6709\u4e9b\u8fed\u4ee3\u5668\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"for (auto is = s.begin(); is != s.end() && !isspace(*it); ++it) {\n  *it = toupper(*it);\n}\n")),(0,l.kt)("h4",{id:"\u8fed\u4ee3\u5668\u7c7b\u578b"},"\u8fed\u4ee3\u5668\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"vector<int>::iterator it;\nstrinng::iterator it2;\n\nvector<int>::const_iterator itConst;\nstrinng::const_iterator itconst2;\n")),(0,l.kt)("p",null,"\u4e00\u822c\u65e0\u9700\u5173\u7cfb\u8fed\u4ee3\u5668\u7c7b\u578b\uff0c\u76f4\u63a5 auto \u5373\u53ef\u3002\u5982\u679c\u5bf9\u8c61\u662f\u5e38\u91cf\uff0c\u90a3\u4e48\u5c31\u4f1a\u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx::const_iterator"),"\u3002"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u9ed8\u8ba4\u884c\u4e3a\u4e0d\u662f\u60f3\u8981\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"cbegin()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"cend()")," \u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx::const_iterator"),"\u3002"),(0,l.kt)("h4",{id:"\u89e3\u5f15\u7528\u6210\u5458\u8bbf\u95ee\u64cd\u4f5c"},"\u89e3\u5f15\u7528\u3001\u6210\u5458\u8bbf\u95ee\u64cd\u4f5c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"(*it).empty()")," \u5fc5\u987b\u8981\u52a0\u62ec\u53f7\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"it->empty()")," \u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u7bad\u5934\u8fd0\u7b97\u7b26"),"\uff0c\u7ed3\u5408\u89e3\u5f15\u7528\u548c\u6210\u5458\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u51e1\u662f\u4f7f\u7528\u8fed\u4ee3\u5668\u7684\u5faa\u73af\u4f53\uff0c\u90fd\u4e0d\u8981\u5411\u5bb9\u5668\u6dfb\u52a0\u5143\u7d20\u3002"),(0,l.kt)("h3",{id:"\u8fed\u4ee3\u5668\u8fd0\u7b97"},"\u8fed\u4ee3\u5668\u8fd0\u7b97"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://file.wangsijie.top/blog/202208100922851.jpeg",alt:null})),(0,l.kt)("h2",{id:"35-\u6570\u7ec4"},"3.5 \u6570\u7ec4"),(0,l.kt)("p",null,"\u6570\u7ec4\u7c7b\u4f3c\u4e8e vector\uff0c\u4f46\u662f\u5927\u5c0f\u56fa\u5b9a\uff0c\u4e0d\u80fd\u968f\u610f\u589e\u52a0\u3002"),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u548c\u521d\u59cb\u5316\u6570\u7ec4"},"\u5b9a\u4e49\u548c\u521d\u59cb\u5316\u6570\u7ec4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u7ef4\u5ea6\u5fc5\u987b\u662f\u5e38\u91cf\u8868\u8fbe\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"int arr_1[10];\nconstexpr unsigned len = 42;\nint arr_2[len];\n")),(0,l.kt)("p",null,"\u6570\u7ec4\u7684\u5185\u90e8\u7684\u67d0\u7c7b\u578b\u7684\u5143\u7d20\uff0c\u540c\u5185\u7f6e\u7c7b\u578b\u7684\u53d8\u91cf\u4e00\u6837\u9ed8\u8ba4\u521d\u59cb\u5316\u4e3a\u672a\u5b9a\u4e49\u7684\u503c\u3002"),(0,l.kt)("h4",{id:"\u663e\u793a\u7684\u521d\u59cb\u5316\u6570\u7ec4"},"\u663e\u793a\u7684\u521d\u59cb\u5316\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'int arr_3[3] = {0, 1, 2}; // \u7ef4\u5ea6\u662f 3\nint arr_4[] = {0, 1, 2}; // \u7ef4\u5ea6\u662f 3\nint arr_5[5] = {0, 1, 2}; // \u7ef4\u5ea6\u662f 5\uff0c\u76f8\u5f53\u4e8e {0, 1, 2\uff0c 0\uff0c 0}\nstring arr_6[3] = {"hello"} // \u7ef4\u5ea6\u662f 3\uff0c \u76f8\u5f53\u4e8e {"hello", "", ""}\n')),(0,l.kt)("p",null,"\u521d\u59cb\u503c\u5927\u4e8e\u957f\u5ea6\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("h4",{id:"\u5b57\u7b26\u6570\u7ec4\u7684\u7279\u6b8a\u6027"},"\u5b57\u7b26\u6570\u7ec4\u7684\u7279\u6b8a\u6027"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u7684\u7ed3\u5c3e\u5904\u8fd8\u6709\u4e00\u4e2a\u7a7a\u5b57\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"char a2[] = {'C', '+', '+'}; // \u957f\u5ea6\u4e3a 3\nchar a3[] = \"C++\"; // \u957f\u5ea6\u4e3a 4\nchar a4[3] = \"C++\"; // \u62a5\u9519\uff0c\u957f\u5ea6\u4e0d\u8db3\n")),(0,l.kt)("h4",{id:"\u4e0d\u5141\u8bb8\u62f7\u8d1d\u548c\u8d4b\u503c"},"\u4e0d\u5141\u8bb8\u62f7\u8d1d\u548c\u8d4b\u503c"),(0,l.kt)("p",null,"\u4e0d\u80fd\u5c06\u6570\u7ec4\u7684\u5185\u5bb9\u62f7\u8d1d\u7ed9\u5176\u4ed6\u6570\u7ec4\u4f5c\u4e3a\u5176\u521d\u59cb\u503c\uff0c\u4e5f\u4e0d\u80fd\u7528\u6570\u7ec4\u4e3a\u5176\u4ed6\u6570\u7ec4\u8d4b\u503c\u3002"),(0,l.kt)("h4",{id:"\u590d\u6742\u7684\u6570\u7ec4\u58f0\u660e"},"\u590d\u6742\u7684\u6570\u7ec4\u58f0\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"int *ptrs[10]; //   ptrs \u662f\u4e00\u4e2a\u542b\u6709 10 \u4e2a\u6574\u5f62\u6307\u9488\uff0cint* ptrs[10] \u8fd9\u6837\u5199\u53ef\u80fd\u66f4\u597d\u7406\u89e3\nint &refs[10] = /* ? */ // \u9519\u8bef\uff1a\u4e0d\u5b58\u5728\u5f15\u7528\u7684\u6570\u7ec4\nint (*Parray)[10] = &arr; // Parray \u6307\u5411\u4e00\u4e2a\u542b\u6709 10 \u4e2a\u6574\u6570\u7684\u6570\u7ec4\nint (&arrRef)[10] = arr; // arrRef \u5f15\u7528\u4e00\u4e2a\u542b\u6709 10 \u4e2a\u6574\u6570\u7684\u6570\u7ec4\n\nint *(&ptrsRef)[10] = ptrs; // ptrsRef \u5f15\u7528\u4e00\u4e2a\u542b\u6709 10 \u4e2a\u6574\u5f62\u6307\u9488\u7684\u6570\u7ec4\n")),(0,l.kt)("h3",{id:"\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20"},"\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20"),(0,l.kt)("p",null,"\u6570\u7ec4\u7684\u4e0b\u6807\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"size_t"),"\u3002"),(0,l.kt)("p",null,"\u4e0b\u6807\u8d8a\u754c\u8bd5\u56fe\u8bbf\u95ee\u975e\u6cd5\u5185\u5b58\u533a\u57df\uff0c\u4e5f\u4f1a\u4ea7\u751f\u9519\u8bef\u3002"),(0,l.kt)("h3",{id:"\u6307\u9488\u548c\u6570\u7ec4"},"\u6307\u9488\u548c\u6570\u7ec4"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u8868\u8fbe\u5f0f\u4e2d\uff0c\u4f7f\u7528\u6570\u7ec4\u7c7b\u578b\u7684\u5bf9\u8c61\u5176\u5b9e\u662f\u4f7f\u7528\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u6307\u5411\u8be5\u6570\u7ec4\u9996\u5143\u7d20\u7684\u6307\u9488"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"int arr[] = {0, 1, 2};\n// \u4e0b\u9762\u4e09\u4e2a\u64cd\u7eb5\u7b49\u4ef7\nint *p1 = &arr[0];\nint *p2 = arr;\nauto *p3 = arr;\n")),(0,l.kt)("h4",{id:"\u6307\u9488\u4e5f\u662f\u8fed\u4ee3\u5668"},"\u6307\u9488\u4e5f\u662f\u8fed\u4ee3\u5668"),(0,l.kt)("p",null,"\u6307\u5411\u6570\u7ec4\u5143\u7d20\u7684\u6267\u653f\u8fd8\u652f\u6301 \u8fed\u4ee3\u5668\u7684\u8fd0\u7b97"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"int arr[] = {0, 1, 2};\nint *p = arr; // \u6307\u5411 arr[0]\n++p; // \u6307\u5411 arr[1]\n")),(0,l.kt)("p",null,"\u5f97\u5230\u5c3e\u540e\u6307\u9488"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"int *lp = &arr[3]; // \u6ce8\u610f\uff1aarr \u5b9e\u9645\u7684\u6700\u540e\u4e00\u4e2a\u4e0b\u6807\u662f 2\uff0c \u800c\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u62ff\u5230\u5c3e\u540e\u6307\u9488\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u6807\u51c6\u5e93\u65b9\u6cd5\u83b7\u5f97\u6307\u9488\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"begin(arr)")," ",(0,l.kt)("inlineCode",{parentName:"p"},"end(arr)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\uff0c\u5c3e\u540e\u6307\u9488\u4e0d\u80fd\u6267\u884c\u89e3\u5f15\u7528\u548c\u9012\u589e\u64cd\u4f5c\u3002")),(0,l.kt)("h4",{id:"\u4e0b\u6807"},"\u4e0b\u6807"),(0,l.kt)("p",null,"\u5185\u7f6e\u7684\u4e0b\u6807\u8fd0\u7b97\u7b26\u6240\u7528\u7684\u7d22\u5f15\u503c\u4e0d\u662f\u65e0\u7b26\u53f7\u7c7b\u578b\u3002"))}u.isMDXComponent=!0}}]);