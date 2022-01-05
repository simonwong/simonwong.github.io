"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[9889],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5081:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(5900),a=t(4750),l=(t(9496),t(9613)),o=["components"],i={},s="\u5e38\u7528\u7684CSS",c={unversionedId:"note/\u5e38\u7528\u7684css",id:"note/\u5e38\u7528\u7684css",title:"\u5e38\u7528\u7684CSS",description:"\u5e03\u5c40",source:"@site/docs/note/\u5e38\u7528\u7684css.md",sourceDirName:"note",slug:"/note/\u5e38\u7528\u7684css",permalink:"/docs/note/\u5e38\u7528\u7684css",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"03. \u503c\u548c\u53d8\u91cf\uff08value and variables\uff09",permalink:"/docs/note/justjavascript/values-and-variables"},next:{title:"webapp \u5f00\u53d1\u603b\u7ed3",permalink:"/docs/note/webapp"}},p=[{value:"\u5e03\u5c40",id:"\u5e03\u5c40",children:[{value:"\u5168\u5c40\u4f7f\u7528rem\uff0c\u5c40\u90e8\u4f7f\u7528em",id:"\u5168\u5c40\u4f7f\u7528rem\u5c40\u90e8\u4f7f\u7528em",children:[],level:3},{value:"\u8868\u683c\u7684\u5904\u7406-\u7b49\u5bbd\u5355\u5143\u683c",id:"\u8868\u683c\u7684\u5904\u7406-\u7b49\u5bbd\u5355\u5143\u683c",children:[],level:3},{value:"\u5f39\u6027\u76d2\u5916\u8fb9\u8ddd-\u5904\u7406\u5217\u7684\u591a\u4f59\u7a7a\u95f4",id:"\u5f39\u6027\u76d2\u5916\u8fb9\u8ddd-\u5904\u7406\u5217\u7684\u591a\u4f59\u7a7a\u95f4",children:[],level:3},{value:"\u5185\u90e8\u6bd4\u4f8b\u76d2",id:"\u5185\u90e8\u6bd4\u4f8b\u76d2",children:[],level:3},{value:"Img \u5143\u7d20\u5728\u6b63\u65b9\u5f62\u81ea\u9002\u5e94\u9ad8\u5bbd\u4e14\u5c45\u4e2d",id:"img-\u5143\u7d20\u5728\u6b63\u65b9\u5f62\u81ea\u9002\u5e94\u9ad8\u5bbd\u4e14\u5c45\u4e2d",children:[],level:3}],level:2},{value:"\u6280\u5de7",id:"\u6280\u5de7",children:[{value:"\u7ee7\u627f <code>box-sizing</code>",id:"\u7ee7\u627f-box-sizing",children:[],level:3},{value:"\u91cd\u7f6e\u5143\u7d20\u7684\u5c5e\u6027 <code>unset</code>",id:"\u91cd\u7f6e\u5143\u7d20\u7684\u5c5e\u6027-unset",children:[],level:3},{value:"\u5bfc\u822a\u680f\u7684\u8fb9\u7ebf <code>:not()</code>",id:"\u5bfc\u822a\u680f\u7684\u8fb9\u7ebf-not",children:[],level:3},{value:"\u80cc\u666f\u56fe\u7247\u7684\u5904\u7406",id:"\u80cc\u666f\u56fe\u7247\u7684\u5904\u7406",children:[],level:3},{value:"\u6587\u672c\u6ea2\u51fa",id:"\u6587\u672c\u6ea2\u51fa",children:[],level:3},{value:"\u6e05\u9664\u6d6e\u52a8",id:"\u6e05\u9664\u6d6e\u52a8",children:[],level:3},{value:"\u5782\u76f4\u5c45\u4e2d\u5904\u7406",id:"\u5782\u76f4\u5c45\u4e2d\u5904\u7406",children:[],level:3},{value:"\u5c42\u51fb\u7a7f",id:"\u5c42\u51fb\u7a7f",children:[],level:3},{value:"0.5px \u6700\u4f73\u65b9\u6848",id:"05px-\u6700\u4f73\u65b9\u6848",children:[],level:3}],level:2},{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[{value:"\u4f7f\u5b57\u4f53\u66f4\u52a0\u6e05\u6670",id:"\u4f7f\u5b57\u4f53\u66f4\u52a0\u6e05\u6670",children:[],level:3},{value:"\u4e3a\u52a0\u8f7d\u5931\u8d25\u7684\u56fe\u7247\u6dfb\u52a0\u6837\u5f0f",id:"\u4e3a\u52a0\u8f7d\u5931\u8d25\u7684\u56fe\u7247\u6dfb\u52a0\u6837\u5f0f",children:[],level:3},{value:"\u4e3a\u4e86\u66f4\u597d\u7684\u79fb\u52a8\u7aef\u4f53\u9a8c\uff0c\u4e3a\u8868\u5355\u5143\u7d20\u4f7f\u7528<code>font-size</code>",id:"\u4e3a\u4e86\u66f4\u597d\u7684\u79fb\u52a8\u7aef\u4f53\u9a8c\u4e3a\u8868\u5355\u5143\u7d20\u4f7f\u7528font-size",children:[],level:3}],level:2},{value:"\u517c\u5bb9",id:"\u517c\u5bb9",children:[{value:"IOS \u7684 <code>input:disabled</code> \u6837\u5f0f",id:"ios-\u7684-inputdisabled-\u6837\u5f0f",children:[],level:3}],level:2},{value:"Sass / Less",id:"sass--less",children:[{value:"\u53d8\u91cf\u5171\u4eab\u7684\u65b9\u6848",id:"\u53d8\u91cf\u5171\u4eab\u7684\u65b9\u6848",children:[],level:3}],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e38\u7528\u7684css"},"\u5e38\u7528\u7684CSS"),(0,l.kt)("h2",{id:"\u5e03\u5c40"},"\u5e03\u5c40"),(0,l.kt)("h3",{id:"\u5168\u5c40\u4f7f\u7528rem\u5c40\u90e8\u4f7f\u7528em"},"\u5168\u5c40\u4f7f\u7528rem\uff0c\u5c40\u90e8\u4f7f\u7528em"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"h2 {\n    font-size: 2em;\n}\np {\n    font-size: 1em;\n}\narticle {\n    font-size: 1.25rem;\n}\naside .module {\n    font-size: .9rem;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u6839\u8282\u70b9",(0,l.kt)("inlineCode",{parentName:"p"},"html"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"font-size"),"\u8bbe\u7f6e\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\u6bcf\u4e2a\u6a21\u5757\u53d8\u5f97\u5206\u660e\uff0c\u66f4\u5bb9\u6613\u7ef4\u62a4\u66f4\u7075\u6d3b\u3002")),(0,l.kt)("h3",{id:"\u8868\u683c\u7684\u5904\u7406-\u7b49\u5bbd\u5355\u5143\u683c"},"\u8868\u683c\u7684\u5904\u7406-\u7b49\u5bbd\u5355\u5143\u683c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".calendar {\n    table-layout: fixed;\n}\n")),(0,l.kt)("h3",{id:"\u5f39\u6027\u76d2\u5916\u8fb9\u8ddd-\u5904\u7406\u5217\u7684\u591a\u4f59\u7a7a\u95f4"},"\u5f39\u6027\u76d2\u5916\u8fb9\u8ddd-\u5904\u7406\u5217\u7684\u591a\u4f59\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".list {\n    display: flex;\n    justify-content: space-between;\n}\n.list .person {\n    flex-basis: 23%;\n}\n")),(0,l.kt)("h3",{id:"\u5185\u90e8\u6bd4\u4f8b\u76d2"},"\u5185\u90e8\u6bd4\u4f8b\u76d2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container\n    height: 0;\n    padding-bottom: 20%;\n    position: relative;\n}\n.container div {\n    border: 2px dashed #ddd;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\u7236\u5b50div\u4f1a\u4fdd\u6301 5:1 \u7684\u6bd4\u4f8b")),(0,l.kt)("h3",{id:"img-\u5143\u7d20\u5728\u6b63\u65b9\u5f62\u81ea\u9002\u5e94\u9ad8\u5bbd\u4e14\u5c45\u4e2d"},"Img \u5143\u7d20\u5728\u6b63\u65b9\u5f62\u81ea\u9002\u5e94\u9ad8\u5bbd\u4e14\u5c45\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper {\n    width: 100px;\n    height: 100px;\n    \n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n}\n")),(0,l.kt)("h2",{id:"\u6280\u5de7"},"\u6280\u5de7"),(0,l.kt)("h3",{id:"\u7ee7\u627f-box-sizing"},"\u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"h3"},"box-sizing")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"html {\n    box-sizing: border-box;\n}\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n")),(0,l.kt)("h3",{id:"\u91cd\u7f6e\u5143\u7d20\u7684\u5c5e\u6027-unset"},"\u91cd\u7f6e\u5143\u7d20\u7684\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"h3"},"unset")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"button {\n    all: unset;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"all"),"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"IE11"),"\u5185\u4e0d\u652f\u6301")),(0,l.kt)("h3",{id:"\u5bfc\u822a\u680f\u7684\u8fb9\u7ebf-not"},"\u5bfc\u822a\u680f\u7684\u8fb9\u7ebf ",(0,l.kt)("inlineCode",{parentName:"h3"},":not()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".nav li:not(:last-child) {\n    border-right: 1px solid #666;\n}\n")),(0,l.kt)("h3",{id:"\u80cc\u666f\u56fe\u7247\u7684\u5904\u7406"},"\u80cc\u666f\u56fe\u7247\u7684\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"div {\n    background-position: center right;\n    background-repeat: no-repeat;/* \u56fe\u7247\u91cd\u590d repeat-x,repeat-y */\n    background-attachment: fixed;/* \u56fa\u5b9a\u80cc\u666f\u56fe\u7247 */\n    background-size: cover; /* \u89c4\u5b9a\u5c3a\u5bf8 */\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u79fb\u52a8\u7aef\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"background-attachment\uff1a fixed;"),"\u4f1a\u5931\u6548\u3002\u53ef\u4ee5\u8fd9\u6837hack ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".thebox:before {\n    content: ' ';\n    position: fixed;\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: url(path/to/image) center 0 no-repeat;\n    background-size: cover;\n}\n")),(0,l.kt)("h3",{id:"\u6587\u672c\u6ea2\u51fa"},"\u6587\u672c\u6ea2\u51fa"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5355\u884c\u6587\u672c\u6ea2\u51fa")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".notice{\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u591a\u884c\u6587\u672c\u6ea2\u51fa")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csss"},".notice {\n    display: -webkit-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 2; /* \u6587\u672c\u663e\u793a\u884c\u6570\uff0c\u9700\u8981\u7ed3\u5408\u5f39\u6027\u76d2\u5b50\uff0c\u6392\u5217\u65b9\u5411\u4e24\u4e2a\u5c5e\u6027 */\n    -webkit-box-orient: vertical;/* \u5b50\u5143\u7d20\u6c34\u5e73\u6216\u5782\u76f4\u6392\u5217 */\n    /* word-break: break-all; \u8d85\u51fa\u6362\u884c\uff0c\u5355\u8bcd\u4f1a\u88ab\u622a\u65ad */\n    /* word-wrap:break-word; \u540c\u8d85\u51fa\u6362\u884c\uff0c\u5355\u8bcd\u4e0d\u4f1a\u622a\u65ad */\n}\n")),(0,l.kt)("h3",{id:"\u6e05\u9664\u6d6e\u52a8"},"\u6e05\u9664\u6d6e\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".clearfix:before,\n.clearfix:after {\n    display: table;\n    content: ' ';\n}\n.clearfix:after {\n    clear: both;\n}\n")),(0,l.kt)("h3",{id:"\u5782\u76f4\u5c45\u4e2d\u5904\u7406"},"\u5782\u76f4\u5c45\u4e2d\u5904\u7406"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u884c\u9ad8 ",(0,l.kt)("inlineCode",{parentName:"p"},"line-height"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5782\u76f4\u5bf9\u5176\u56fe\u7247\u3002\u6216\u8005table",(0,l.kt)("inlineCode",{parentName:"p"},"vertical-align: midel;")," ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528transfrom\uff0c\u5c45\u4e2d\u4e0d\u5b9a\u9ad8\u5bbd\u5143\u7d20 "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-css"},"div {\n       position: absolute;\n       top: 50%;\n       left: 50%;\n       -webkit-transform: translate(-50%, -50%);\n }\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528flexbox"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-css"},".parent_div {\n       justify-content: center; //\u5b50\u5143\u7d20\u6c34\u5e73\u5c45\u4e2d\n       align-items: center; // \u5b50\u5143\u7d20\u5782\u76f4\u5c45\u4e2d\n       display: -webkit-flex;\n}\n")))),(0,l.kt)("h3",{id:"\u5c42\u51fb\u7a7f"},"\u5c42\u51fb\u7a7f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pointer-events: none; \u53ef\u4f7f\u5f97\u5c42\u53ef\u51fb\u7a7f\npointer-events: auto; \u9ed8\u8ba4\n")),(0,l.kt)("h3",{id:"05px-\u6700\u4f73\u65b9\u6848"},"0.5px \u6700\u4f73\u65b9\u6848"),(0,l.kt)("p",null,"\u503c\u5f97\u4e4b\u4e00\u7684\u662f\uff0c\u4f2a\u5143\u7d20\u7684\u5bb9\u5668\uff0c\u6700\u597d\u4e0d\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"overflow: hidden"),"\uff0c \u5982\u679c\u4e00\u5b9a\u8981 hidden\uff0c\u4e14\u51fa\u73b0\u4e86\u8fb9\u7ebf\u4e22\u5931\u7684\u95ee\u9898\uff0c\u9700\u8981\u9002\u5f53\u8c03\u6574\u4e0b\u9762\u7684\u5b9a\u4f4d\u4f4d\u7f6e\u6216\u8005\u9ad8\u5bbd\u5c5e\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".border-base() {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 200%;\n  height: 200%;\n  transform: scale(0.5, 0.5);\n  transform-origin: 0 0;\n  content: '';\n  pointer-events: none;\n}\n\n.border-bottom-1px {\n  position: relative;\n\n  &::after {\n    .border-base();\n\n    border-bottom: 1px solid @border-color-base;\n  }\n}\n\n.border-1px(@radius: 0px) {\n  position: relative;\n\n  &::after {\n    .border-base();\n\n    border: 1px solid @border-color-base;\n    border-radius: @radius;\n  }\n}\n")),(0,l.kt)("h2",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,l.kt)("h3",{id:"\u4f7f\u5b57\u4f53\u66f4\u52a0\u6e05\u6670"},"\u4f7f\u5b57\u4f53\u66f4\u52a0\u6e05\u6670"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n")),(0,l.kt)("h3",{id:"\u4e3a\u52a0\u8f7d\u5931\u8d25\u7684\u56fe\u7247\u6dfb\u52a0\u6837\u5f0f"},"\u4e3a\u52a0\u8f7d\u5931\u8d25\u7684\u56fe\u7247\u6dfb\u52a0\u6837\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},'img {\n    display: block;\n    font-family: Helvetica, Arial, sans-serif;\n    font-weight: 300;\n    height: auto;\n    line-height: 2;\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\nimg::before {\n    content: "We\'re sorry, the image below is broken :(";\n    display: block;\n    margin-bottom: 10px;\n}\nimg::after {\n    content: "(url: " attr(src) ")";\n    display: block;\n    font-size: 12px;\n}\n')),(0,l.kt)("h3",{id:"\u4e3a\u4e86\u66f4\u597d\u7684\u79fb\u52a8\u7aef\u4f53\u9a8c\u4e3a\u8868\u5355\u5143\u7d20\u4f7f\u7528font-size"},"\u4e3a\u4e86\u66f4\u597d\u7684\u79fb\u52a8\u7aef\u4f53\u9a8c\uff0c\u4e3a\u8868\u5355\u5143\u7d20\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h3"},"font-size")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},'input[type="text"],\ninput[type="number"],\nselect,\ntextarea {\n    font-size: 16px;\n}\n')),(0,l.kt)("h2",{id:"\u517c\u5bb9"},"\u517c\u5bb9"),(0,l.kt)("h3",{id:"ios-\u7684-inputdisabled-\u6837\u5f0f"},"IOS \u7684 ",(0,l.kt)("inlineCode",{parentName:"h3"},"input:disabled")," \u6837\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"input:disabled {\n    -webkit-text-fill-color: @text-color;\n    color: @text-color;\n    opacity: 1;\n}\n")),(0,l.kt)("h2",{id:"sass--less"},"Sass / Less"),(0,l.kt)("h3",{id:"\u53d8\u91cf\u5171\u4eab\u7684\u65b9\u6848"},"\u53d8\u91cf\u5171\u4eab\u7684\u65b9\u6848"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/styles/variables.js\nmodule.exports = {\n  // \u4e3b\u989c\u8272\n  'primary-color': '#0C4CFF',\n  // \u51fa\u9519\u989c\u8272\n  'error-color': '#F15533',\n  // \u6210\u529f\u989c\u8272\n  'success-color': '#35B34A',\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// webpack.config.js\nconst styleVariables = require('src/styles/variables');\n\n// ...\n      {\n        test: /\\.scss$/,\n        use: [\n          'style-loader',\n          'css-loader?sourceMap&minimize',\n          {\n            loader: 'sass-loader',\n            options: {\n              data: Object.keys(styleVariables)\n                .map(key => `\\$${key}: ${styleVariables[key]};`)\n                .join('\\n'),\n              sourceMap: true,\n              sourceMapContents: true\n            }\n          }\n        ]\n      }\n//...\n")),(0,l.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5728scss\u6587\u4ef6\u4e2d\uff0c\u76f4\u63a5\u5f15\u7528\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// page.scss\n.button {\n  background: $primary-color;\n}\n")))}u.isMDXComponent=!0}}]);