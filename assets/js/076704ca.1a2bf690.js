"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[5948],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return y}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,k=d["".concat(o,".").concat(y)]||d[y]||u[y]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2268:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(5900),a=t(4750),l=(t(9496),t(9613)),i=["components"],p={},o="TypeScript \u5b9e\u8df5",s={unversionedId:"note/typescript/practice",id:"note/typescript/practice",title:"TypeScript \u5b9e\u8df5",description:"\u5e38\u89c1\u6848\u4f8b",source:"@site/docs/note/typescript/practice.md",sourceDirName:"note/typescript",slug:"/note/typescript/practice",permalink:"/docs/note/typescript/practice",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"TypeScript \u8303\u578b",permalink:"/docs/note/typescript/generics"},next:{title:"TypeScript \u5e38\u89c1\u95ee\u9898",permalink:"/docs/note/typescript/qa"}},c=[{value:"\u5e38\u89c1\u6848\u4f8b",id:"\u5e38\u89c1\u6848\u4f8b",children:[{value:"\u4ee5\u5bf9\u8c61\u7684 key \u4f5c\u4e3a\u8054\u5408\u7c7b\u578b",id:"\u4ee5\u5bf9\u8c61\u7684-key-\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b",children:[],level:3},{value:"\u4ee5\u5bf9\u8c61\u7684 value \u4f5c\u4e3a\u8054\u5408\u7c7b\u578b",id:"\u4ee5\u5bf9\u8c61\u7684-value-\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b",children:[],level:3},{value:"\u4ee5\u5bf9\u8c61\u7684 value \u503c\u6700\u4e3a\u7c7b\u578b",id:"\u4ee5\u5bf9\u8c61\u7684-value-\u503c\u6700\u4e3a\u7c7b\u578b",children:[],level:3},{value:"\u4ee5\u6570\u7ec4\u7684\u6bcf\u9879\u5143\u7d20\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b",id:"\u4ee5\u6570\u7ec4\u7684\u6bcf\u9879\u5143\u7d20\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b",children:[],level:3},{value:"\u904d\u5386\u8054\u5408\u7c7b\u578b",id:"\u904d\u5386\u8054\u5408\u7c7b\u578b",children:[],level:3},{value:"\u5224\u65ad",id:"\u5224\u65ad",children:[{value:"\u4e25\u683c\u5224\u65ad\u4e24\u4e2a\u7c7b\u578b\u662f\u5426\u76f8\u5f53",id:"\u4e25\u683c\u5224\u65ad\u4e24\u4e2a\u7c7b\u578b\u662f\u5426\u76f8\u5f53",children:[],level:4},{value:"\u68c0\u67e5\u662f\u5426\u662f never",id:"\u68c0\u67e5\u662f\u5426\u662f-never",children:[],level:4},{value:"\u5728 K in S \u4e2d\u901a\u8fc7\u65ad\u8a00\u7b5b\u9009",id:"\u5728-k-in-s-\u4e2d\u901a\u8fc7\u65ad\u8a00\u7b5b\u9009",children:[],level:4}],level:3}],level:2},{value:"\u9a9a\u64cd\u4f5c",id:"\u9a9a\u64cd\u4f5c",children:[{value:"\u5b57\u7b26\u4e32 split",id:"\u5b57\u7b26\u4e32-split",children:[],level:3},{value:"\u5b57\u7b26\u4e32 trim",id:"\u5b57\u7b26\u4e32-trim",children:[],level:3},{value:"\u6570\u7ec4 join",id:"\u6570\u7ec4-join",children:[],level:3},{value:"\u6570\u7ec4\u8f6c\u5bf9\u8c61",id:"\u6570\u7ec4\u8f6c\u5bf9\u8c61",children:[],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"typescript-\u5b9e\u8df5"},"TypeScript \u5b9e\u8df5"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u6848\u4f8b"},"\u5e38\u89c1\u6848\u4f8b"),(0,l.kt)("h3",{id:"\u4ee5\u5bf9\u8c61\u7684-key-\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b"},"\u4ee5\u5bf9\u8c61\u7684 key \u4f5c\u4e3a\u8054\u5408\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const typeMap = {\n    1: 'a',\n    2: 'c',\n    3: 'g',\n}\n\ntype Typekey = keyof typeof typeMap\n")),(0,l.kt)("h3",{id:"\u4ee5\u5bf9\u8c61\u7684-value-\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b"},"\u4ee5\u5bf9\u8c61\u7684 value \u4f5c\u4e3a\u8054\u5408\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type ValueOf<T> = T[keyof T]\n\nconst typeMap = {\n    1: 'a',\n    2: 'c',\n    3: 'g',\n}\n\ntype TypeValue = ValueOf<typeof typeMap>\n")),(0,l.kt)("h3",{id:"\u4ee5\u5bf9\u8c61\u7684-value-\u503c\u6700\u4e3a\u7c7b\u578b"},"\u4ee5\u5bf9\u8c61\u7684 value \u503c\u6700\u4e3a\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// ts \u4f1a\u9ed8\u8ba4\u63a8\u5bfc\u7c7b\u578b `white` \u7684\u7c7b\u578b\u4e3a `string`\nconst color = {\n  white: '#fff',\n  black: '#000'\n}\n")),(0,l.kt)("p",null,"\u6539\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6b64\u65f6 white \u7684\u7c7b\u578b\u4e3a \u2018#fff\u2019\nconst color = {\n  white: '#fff',\n  black: '#000'\n} as const\n")),(0,l.kt)("h3",{id:"\u4ee5\u6570\u7ec4\u7684\u6bcf\u9879\u5143\u7d20\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b"},"\u4ee5\u6570\u7ec4\u7684\u6bcf\u9879\u5143\u7d20\u4f5c\u4e3a\u8054\u5408\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const arr = ['a', 'b', 'c'] as const\ntype Abc = typeof asd[number]\n")),(0,l.kt)("h3",{id:"\u904d\u5386\u8054\u5408\u7c7b\u578b"},"\u904d\u5386\u8054\u5408\u7c7b\u578b"),(0,l.kt)("p",null,"\u8054\u5408\u7c7b\u578b\u8fdb\u884c extends \u4f1a\u8fdb\u884c\u5206\u53d1\uff0c\u5373\u4e00\u4e2a\u63a5\u4e00\u4e2a\u7684\u5224\u65ad\u662f\u5426 extends\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type LoopUnion<T extends string> = T extends T ? `loop ${T}` : never;\n\ntype AA = LoopUnion<'A' | 'B' | 'C'> // -> \"loop A\" | \"loop B\" | \"loop C\"\n\n// \u76f8\u5f53\u4e8e\u662f\ntype ABC = 'A' | 'B' | 'C'\n('A' extends ABC ? 'loop A' : never) |\n('B' extends ABC ? 'loop B' : never) |\n('C' extends ABC ? 'loop C' : never)\n")),(0,l.kt)("h3",{id:"\u5224\u65ad"},"\u5224\u65ad"),(0,l.kt)("h4",{id:"\u4e25\u683c\u5224\u65ad\u4e24\u4e2a\u7c7b\u578b\u662f\u5426\u76f8\u5f53"},"\u4e25\u683c\u5224\u65ad\u4e24\u4e2a\u7c7b\u578b\u662f\u5426\u76f8\u5f53"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Equal<X, Y> =\n    (<T>() => T extends X ? 1 : 2) extends\n  (<T>() => T extends Y ? 1 : 2) ? true : false\n\nMyEqual<any, unknown> // false\nMyEqual<any, unknown> // false\nMyEqual<1, 1 | 2> // false\nMyEqual<{}, { a: 1 }> // false\nMyEqual<{ readonly a: 1 }, { a: 1 }> // false\nMyEqual<boolean, true> // false\n  \nMyEqual<{}, {}> // true\nMyEqual<2 | 1, 1 | 2> // true\n")),(0,l.kt)("h4",{id:"\u68c0\u67e5\u662f\u5426\u662f-never"},"\u68c0\u67e5\u662f\u5426\u662f never"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/23182"},"Conditional Types - Checking ",(0,l.kt)("inlineCode",{parentName:"a"},"extends never")," only works sometimes #23182")),(0,l.kt)("p",null,"\u5728 ts \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"T extends U ? X : Y")," \uff0c\u5982\u679c T \u662f\u4e00\u4e2a\u8054\u5408\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"'A' | 'B'"),"\uff0c\u5c06\u4f1a\u201c\u5206\u53d1\u201d\uff08distributed\uff09\uff0c\u53ef\u4ee5\u89c6\u4f5c\u4e3a "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"T = 'A' | 'B'\nT extends U ? X : Y\n// \u5c06\u4f1a\u89c6\u4f5c\u4e3a\uff1a\n('A' extends U ? X : Y) | ('B' extends U ? X : Y)\n")),(0,l.kt)("p",null,"\u5728\u6761\u4ef6\u5206\u53d1\u65f6\uff0cnever \u5c06\u4f1a\u89c6\u4e3a\u7a7a\u8054\u5408\u7c7b\u578b\uff08an empty union\uff09\uff0c\u610f\u5473\u7740 ",(0,l.kt)("inlineCode",{parentName:"p"},"'A' | never")," \u88ab\u5f53\u4f5c\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"'A'"),"\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u5f53 T \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"never")," \u65f6\uff0c\u5c06\u4e0d\u4f1a\u5206\u53d1\uff0c\u8fdb\u800c\u5f97\u5230\u7684\u7ed3\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"never")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type isNever<T> = T extends never ? true : false\ntype Res = isNever<never> // => never\n")),(0,l.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5f3a\u5236\u8ba9 TS \u5206\u53d1 T\uff0c\u8ba9  T \u4e0d\u4f1a\u88ab\u89c6\u4e3a\u7a7a\u8054\u5408\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type isNever<T> = [T] extends [never] ? true : false\n")),(0,l.kt)("h4",{id:"\u5728-k-in-s-\u4e2d\u901a\u8fc7\u65ad\u8a00\u7b5b\u9009"},"\u5728 K in S \u4e2d\u901a\u8fc7\u65ad\u8a00\u7b5b\u9009"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/type-challenges/type-challenges/issues/3542"},"1367 - Remove Index Signature - Template literal alternative")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Foo = {\n  [key: string]: any\n  foo(): void\n}\n\ntype RemoveIndexSignature<T> = {\n  [K in keyof T as K extends `${infer Str}` ? Str : never]: T[K]\n}\n")),(0,l.kt)("h2",{id:"\u9a9a\u64cd\u4f5c"},"\u9a9a\u64cd\u4f5c"),(0,l.kt)("p",null,"\u91cd\u70b9\u5728\u4e8e\u4f7f\u7528 infer \u63d0\u53d6\uff0c\u4f7f\u7528\u4e09\u5143\u8868\u8fbe\u5f0f\u9012\u5f52\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u7684\u63d0\u53d6")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type StrShift = T extends `${infer Head}${U}` ? U : Never\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u7684\u63d0\u53d6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type ArrShift = T extends [infer Head, ...infer Tail] ? Tail : Never\n")),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32-split"},"\u5b57\u7b26\u4e32 split"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Split<T, U extends string> = T extends `${infer Head}${U}${infer Tail}` ? [Head, ...Split<Tail, U>] : [T]\n")),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32-trim"},"\u5b57\u7b26\u4e32 trim"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Whitespace = '\\n' | ' ';\n\ntype Trim<T> = T extends `${Whitespace}${infer U}` ? Trim<U> : T extends `${infer U}${Whitespace}` ? Trim<U> : T;\n\ntype LeftTrim<T> = T extends `${WhiteSpace}${infer V}` ? LeftTrim<V> : T\n")),(0,l.kt)("h3",{id:"\u6570\u7ec4-join"},"\u6570\u7ec4 join"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Join<T extends unknown[], U extends string> = T extends [infer Head, ...infer Tail]\n    ? [] extends Tail\n        ? Head\n        : `${Head & string}${U}${Join<Tail, U>}`\n    : ''\n")),(0,l.kt)("h3",{id:"\u6570\u7ec4\u8f6c\u5bf9\u8c61"},"\u6570\u7ec4\u8f6c\u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[[k1, v1], [k2, v2]]")," \u8f6c\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"{ k1: v1, k2: v2 }")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type MapArray = readonly (readonly [string, string])[]\ntype MapRecord = Record<string, string>\ntype ArrayToObject<Arr extends MapArray, Result extends MapRecord = {}> =\n    Arr extends []\n        ? Result\n        : Arr extends readonly [infer Head, ...infer Tail]\n      ? Head extends readonly [infer Key, infer Value]\n        ? Tail extends MapArray\n          ? Key extends string\n            ? ArrayToObject<Tail, Result & Record<Key, Value>>\n            : never\n          : never\n        : never\n      : never\n")))}d.isMDXComponent=!0}}]);