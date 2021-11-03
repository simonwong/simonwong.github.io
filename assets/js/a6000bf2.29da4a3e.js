"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[3070],{9613:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return b}});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),i=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=i(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(t),b=r,g=m["".concat(u,".").concat(b)]||m[b]||p[b]||a;return t?o.createElement(g,c(c({ref:n},d),{},{components:t})):o.createElement(g,c({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9896:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return d},default:function(){return m}});var o=t(2245),r=t(5903),a=(t(9496),t(9613)),c=["components"],l={},u="mongodb \u64cd\u4f5c\u6307\u4ee4",i={unversionedId:"backend/mongodb",id:"backend/mongodb",isDocsHomePage:!1,title:"mongodb \u64cd\u4f5c\u6307\u4ee4",description:"\u6570\u636e\u5e93\u5907\u4efd ##",source:"@site/docs/backend/mongodb.md",sourceDirName:"backend",slug:"/backend/mongodb",permalink:"/docs/backend/mongodb",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/backend/mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"backend",previous:{title:"\u670d\u52a1\u6027\u80fd\u8c03\u4f18",permalink:"/docs/backend/\u670d\u52a1\u6027\u80fd\u8c03\u4f18"}},d=[{value:"\u6570\u636e\u5e93\u5907\u4efd",id:"\u6570\u636e\u5e93\u5907\u4efd",children:[],level:2},{value:"\u6570\u636e\u5e93\u5bfc\u5165",id:"\u6570\u636e\u5e93\u5bfc\u5165",children:[],level:2},{value:"mongodb \u653e\u5230\u670d\u52a1\u4e2d\u542f\u52a8",id:"mongodb-\u653e\u5230\u670d\u52a1\u4e2d\u542f\u52a8",children:[],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb-\u64cd\u4f5c\u6307\u4ee4"},"mongodb \u64cd\u4f5c\u6307\u4ee4"),(0,a.kt)("h2",{id:"\u6570\u636e\u5e93\u5907\u4efd"},"\u6570\u636e\u5e93\u5907\u4efd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mongodump -h localhost:27017 -d [\u5e93\u540d] -o [\u4fdd\u5b58\u8def\u5f84]\n# \u4f8b\u5b50\uff1a\nmongodump -h localhost:27017 -d ef_manage -o  D:\\Mongo\\backup\n")),(0,a.kt)("h2",{id:"\u6570\u636e\u5e93\u5bfc\u5165"},"\u6570\u636e\u5e93\u5bfc\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mongorestore -h localhost:27017 -d [\u5e93\u540d] [\u5907\u4efd\u6587\u4ef6\u8def\u5f84]\n# \u4f8b\u5b50\uff1a\nmongorestore -h 192.168.1.113:27017 -d ef_manage D:\\Mongo\\backup\\ef_manage\n")),(0,a.kt)("h2",{id:"mongodb-\u653e\u5230\u670d\u52a1\u4e2d\u542f\u52a8"},"mongodb \u653e\u5230\u670d\u52a1\u4e2d\u542f\u52a8"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"mongdb\u76ee\u5f55\u952e\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"log/mongo.log")),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5458\u542f\u52a8cmd"))),(0,a.kt)("p",null,"mac\u4e0b\u542f\u52a8mongodb\u670d\u52a1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"data\u76ee\u5f55\uff08usr/local/Cellar/mongodb/data/db)"),(0,a.kt)("p",{parentName:"blockquote"},"log\u76ee\u5f55\uff08usr/local/Cellar/mongodb/)"),(0,a.kt)("p",{parentName:"blockquote"},"conf\u76ee\u5f55\uff08usr/local/etc/mongod.conf)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo mongod --config /usr/local/etc/mongod.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mongod --logpath D:\\mongodb\\log\\mongo.log --dbpath D:mongoData --serviceName MongoDB --directoryperdb --install\n\n# \u542f\u52a8\u670d\u52a1\nnet start MongoDB\n\n# \u5220\u9664\u670d\u52a1\nsc delete MongoDB\n")))}m.isMDXComponent=!0}}]);