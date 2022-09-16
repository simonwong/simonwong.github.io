"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[7507],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(2081),o=(t(9496),t(9613));const a={},l="\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c",i={unversionedId:"note/\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c",id:"note/\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c",title:"\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c",description:"npm yarn \u7684\u955c\u50cf\u6e90\u914d\u7f6e",source:"@site/docs/note/\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c.md",sourceDirName:"note",slug:"/note/\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c",permalink:"/docs/note/\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c",draft:!1,tags:[],version:"current",lastUpdatedAt:1663295231,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{},sidebar:"note",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/docs/note/\u6b63\u5219\u8868\u8fbe\u5f0f"},next:{title:"webpack 4 \u7b14\u8bb0",permalink:"/docs/note/webpack4-note"}},s={},c=[{value:"npm yarn \u7684\u955c\u50cf\u6e90\u914d\u7f6e",id:"npm-yarn-\u7684\u955c\u50cf\u6e90\u914d\u7f6e",level:2},{value:"\u955c\u50cf\u6e90\u7ba1\u7406 nrm",id:"\u955c\u50cf\u6e90\u7ba1\u7406-nrm",level:2},{value:"git clone \u63d0\u5347\u901f\u5ea6",id:"git-clone-\u63d0\u5347\u901f\u5ea6",level:2},{value:".editorconfig",id:"editorconfig",level:2},{value:"jsconfig.json",id:"jsconfigjson",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c"},"\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c"),(0,o.kt)("h2",{id:"npm-yarn-\u7684\u955c\u50cf\u6e90\u914d\u7f6e"},"npm yarn \u7684\u955c\u50cf\u6e90\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm config set registry https://registry.npm.taobao.org --global\nnpm config set disturl https://npm.taobao.org/dist --global\n\nyarn config set registry https://registry.npm.taobao.org --global\nyarn config set disturl https://npm.taobao.org/dist --global\n")),(0,o.kt)("h2",{id:"\u955c\u50cf\u6e90\u7ba1\u7406-nrm"},"\u955c\u50cf\u6e90\u7ba1\u7406 nrm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g nrm\n\nnrm ls\nnrm usr [name]\n")),(0,o.kt)("h2",{id:"git-clone-\u63d0\u5347\u901f\u5ea6"},"git clone \u63d0\u5347\u901f\u5ea6"),(0,o.kt)("p",null,"git \u4ee3\u7406\u5230 \u4ee3\u7406\u5de5\u5177\u7aef\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global http.proxy socks5://127.0.0.1:1080\ngit config --global https.proxy socks5://127.0.0.1:1080\n")),(0,o.kt)("p",null,"\u914d\u7f6e hosts \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vi /etc/hosts\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"151.101.72.249 http://global-ssl.fastly.Net\n192.30.253.112 http://github.com\n")),(0,o.kt)("h2",{id:"editorconfig"},".editorconfig"),(0,o.kt)("p",null,"\u914d\u5408 vscode \u63d2\u4ef6 EditorConfig \u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# http://editorconfig.org\nroot = true\n\n[*]\nindent_style = space\nindent_size = 4\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[*.md]\ntrim_trailing_whitespace = false\n\n[Makefile]\nindent_style = tab\n")),(0,o.kt)("h2",{id:"jsconfigjson"},"jsconfig.json"),(0,o.kt)("p",null,"\u5f53webpack \u4e2d\u8bbe\u7f6e\u4e86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// webpack.config.js\nalias: {\n    '@': './src',\n},\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u5728 vscode \u4e2d\u81ea\u52a8\u8bc6\u522b @ \u6807\u793a\u7684\u8def\u5f84\uff0c\u914d\u7f6ejsconfig.json \u914d\u7f6e\u53c2\u8003>> ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/jsconfig"},"jsconfig.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// jsconfig.json / tsconfig.json\n{\n    "compilerOptions": {\n        // \u8bc6\u522b index.jsx\n        "jsx": "react",\n        "baseUrl": ".",\n        "paths": {\n            "@/*": ["./src/*"]\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);