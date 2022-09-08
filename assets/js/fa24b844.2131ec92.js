"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[8685],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,m=s["".concat(i,".").concat(k)]||s[k]||u[k]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(2081),a=(n(9496),n(9613));const l={},o="TypeScript \u8303\u578b",p={unversionedId:"note/typescript/generics",id:"note/typescript/generics",title:"TypeScript \u8303\u578b",description:"\u5173\u952e\u5b57",source:"@site/docs/note/typescript/generics.md",sourceDirName:"note/typescript",slug:"/note/typescript/generics",permalink:"/docs/note/typescript/generics",draft:!1,tags:[],version:"current",lastUpdatedAt:1662602599,formattedLastUpdatedAt:"Sep 8, 2022",frontMatter:{},sidebar:"note",previous:{title:"2018-2020",permalink:"/docs/note/daily/2018-2020"},next:{title:"TypeScript \u5b9e\u8df5",permalink:"/docs/note/typescript/practice"}},i={},c=[{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2},{value:"keyof",id:"keyof",level:4},{value:"typeof",id:"typeof",level:4},{value:"extends",id:"extends",level:4},{value:"infer",id:"infer",level:4},{value:"\u5de5\u5177\u7c7b\u578b",id:"\u5de5\u5177\u7c7b\u578b",level:2},{value:"<code>Partial&lt;T&gt;</code>\u3001<code>Required&lt;T&gt;</code>\u3001<code>Readonly&lt;T&gt;</code>\u3001<code>Mutable&lt;T&gt;</code>",id:"partialtrequiredtreadonlytmutablet",level:4},{value:"<code>Record&lt;K, T&gt;</code> \u3001 <code>Pick&lt;T, K&gt;</code>",id:"recordk-t--pickt-k",level:4},{value:"<code>Exclude&lt;T, U&gt;</code>\u3001<code>Extract&lt;T, U&gt;</code>\u3001<code>NonNullable&lt;T&gt;</code>",id:"excludet-uextractt-unonnullablet",level:4},{value:"<code>Omit&lt;T, K&gt;</code>",id:"omitt-k",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-\u8303\u578b"},"TypeScript \u8303\u578b"),(0,a.kt)("h2",{id:"\u5173\u952e\u5b57"},"\u5173\u952e\u5b57"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u9762 User \u7c7b\u578b\u4e3a\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type User = {\n  name: string;\n  age: number;\n}\n")),(0,a.kt)("h4",{id:"keyof"},"keyof"),(0,a.kt)("p",null,"\u5f97\u5230 object \u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u540d\u6784\u6210\u7684\u8054\u5408\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type UserAttr = keyof User; // 'name' | 'age'\n")),(0,a.kt)("h4",{id:"typeof"},"typeof"),(0,a.kt)("p",null,"\u63a8\u5bfc\u67d0\u5b9e\u4f8b\u7684\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = () => ({ name: 'Simon', age: 18 });\ntype Foo = typeof foo; // () => { name: string, age: number }\n")),(0,a.kt)("h4",{id:"extends"},"extends"),(0,a.kt)("p",null,"\u5728\u7c7b\u578b\u8fd0\u7b97\u4e2d\uff0c\u4e0d\u662f\u7ee7\u627f\u6216\u6269\u5c55\uff0c\u800c\u662f\u5224\u65ad\u4e00\u4e2a\u7c7b\u578b\u662f\u5426\u53ef\u4ee5\u88ab\u8d4b\u4e88\u53e6\u4e00\u4e2a\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MustFunc =  Foo extends Function ? Foo : () => { a: 1 }\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7528\u6765",(0,a.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u7ea6\u675f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function logLength<T>(arg: T) {\n  console.log(arg.length); // \u7c7b\u578b\u201cT\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201clength\u201d\n}\n\n// \u6539\u9020\u6210\u5982\u4e0b\n\ninterface LengthObj {\n  length: number\n}\nfunction logLength<T extends LengthObj>(arg: T) {\n  console.log(arg.length);\n}\n")),(0,a.kt)("h4",{id:"infer"},"infer"),(0,a.kt)("p",null,"\u7c7b\u578b\u63d0\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type UserPromise = Promise<User>;\n\ntype UnPromisify<T> = T extends Promise<infer V> ? V : never;\ntype InferedUser = UnPromisify<T>; // { name: string, age: number }\n")),(0,a.kt)("h2",{id:"\u5de5\u5177\u7c7b\u578b"},"\u5de5\u5177\u7c7b\u578b"),(0,a.kt)("h4",{id:"partialtrequiredtreadonlytmutablet"},(0,a.kt)("inlineCode",{parentName:"h4"},"Partial<T>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h4"},"Required<T>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h4"},"Readonly<T>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h4"},"Mutable<T>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Partial<T>")," \u4f7f\u5f97 object \u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u53ef\u9009\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyPartial<T> = {\n  [k in keyof T]?: T[K];\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Required<T>")," \u4f7f\u5f97 object \u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u5fc5\u586b\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyRequired<T> = {\n  [k in keyof T]-?: T[K];\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Readonly<T>")," \u4f7f\u5f97 object \u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u53ea\u8bfb\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyReadonly<T> = {\n  readonly [k in keyof T]: T[K];\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mutable<T>")," \u4f7f\u5f97  object \u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u53ef\u53d8\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyMutable<T> = {\n  -readonly [k in keyof T]: T[K];\n}\n")),(0,a.kt)("h4",{id:"recordk-t--pickt-k"},(0,a.kt)("inlineCode",{parentName:"h4"},"Record<K, T>")," \u3001 ",(0,a.kt)("inlineCode",{parentName:"h4"},"Pick<T, K>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Record<K, T>")," K \u662f\u4efb\u610f\u8054\u5408\u7c7b\u578b\u3001T \u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u6700\u540e\u7ec4\u5408\u6210\u4e00\u4e2a object \u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyRecord<K extends keyof any, T> = {\n  [P in K]: T\n}\n\ntype ABCObj = MyRecord<'a' | 'b' | 'c', number> // { a: number, b: number, c: number }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Pick<T, K>")," \u662f\u4ece object \u7c7b\u578b\u4e2d\uff0c\u9009\u53d6\u4e00\u4e9b\u5c5e\u6027\uff08\u5c5e\u6027\u7684\u8054\u5408\u7c7b\u578b\uff09\uff0c\u7ec4\u5408\u6210\u4e00\u4e2a\u65b0\u7684 object \u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyPick<T, K extends keyof T> = {\n  [P in K]: T[P];\n}\n\ntype NameObj = MyPick<User, 'name'>; // { name: string }\n")),(0,a.kt)("h4",{id:"excludet-uextractt-unonnullablet"},(0,a.kt)("inlineCode",{parentName:"h4"},"Exclude<T, U>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h4"},"Extract<T, U>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h4"},"NonNullable<T>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyExclude<T, U> = T extends U ? never : T;\ntype MyExtract<T, U> = T extends U ? T : never;\ntype MyNonNullable<T> = T extends null | undefined ? never : T;\n")),(0,a.kt)("h4",{id:"omitt-k"},(0,a.kt)("inlineCode",{parentName:"h4"},"Omit<T, K>")),(0,a.kt)("p",null,"\u4e0e Pick \u76f8\u53cd\uff0c\u7528\u4e8e\u6392\u9664\u67d0\u4e9b\u952e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>;\n\ntype MyOmit2<T, K> = {\n  [P in Exclude<keyof T, K>]: T[P];\n};\n")))}u.isMDXComponent=!0}}]);