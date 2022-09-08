"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[3244],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(2081),o=(n(9496),n(9613));const s={},a="ts-compiler API",c={unversionedId:"note/typescript/ast",id:"note/typescript/ast",title:"ts-compiler API",description:"\u65b9\u6cd5\u7b80\u8ff0",source:"@site/docs/note/typescript/ast.md",sourceDirName:"note/typescript",slug:"/note/typescript/ast",permalink:"/docs/note/typescript/ast",draft:!1,tags:[],version:"current",lastUpdatedAt:1662602599,formattedLastUpdatedAt:"Sep 8, 2022",frontMatter:{}},i={},l=[{value:"\u65b9\u6cd5\u7b80\u8ff0",id:"\u65b9\u6cd5\u7b80\u8ff0",level:2},{value:"ts",id:"ts",level:3},{value:"ts.forEach()",id:"tsforeach",level:4},{value:"ts.transform()",id:"tstransform",level:4},{value:"ts.Node",id:"tsnode",level:3},{value:"<code>getText</code> \u3001 <code>getFullText</code>",id:"gettext--getfulltext",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ts-compiler-api"},"ts-compiler API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u521b\u5efa\u4e00\u4e2aast\u8f6c\u6362\u5668\n */\nexport const createTransformer =\n  (\n    callback: (node: ts.Node, context: ts.TransformationContext) => ts.Node\n  ): ts.TransformerFactory<ts.SourceFile> =>\n  context =>\n  node =>\n    visitNodes(node, context, callback)\n\nexport const transform = (\n  text: string,\n  transformers: ts.TransformerFactory<ts.SourceFile>[],\n  scriptKind: ts.ScriptKind = ts.ScriptKind.TSX\n) => {\n  const ast = createAstNode(text, scriptKind)\n  const newAst = ts.transform(ast, transformers)\n  const printer = ts.createPrinter()\n  return printer.printNode(ts.EmitHint.SourceFile, newAst.transformed[0], ast)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export const add: ts.TransformerFactory<ts.SourceFile> = (context) => (rootNode) => {\n    function visit(node: ts.Node): ts.VisitResult<ts.Node> {\n        const { factory } = context;\n\n        // using the provided typeguard to narrow the node kind\n        if (ts.isObjectLiteralExpression(node)) {\n            return factory.updateObjectLiteralExpression(node, [\n                    // include the existing properties\n                    ...node.properties,\n                    // add your generated property\n                    factory.createPropertyAssignment(\n                        factory.createIdentifier("bar"),\n                        factory.createTrue()\n                    )\n                ]\n            );\n        }\n        return ts.visitEachChild(node, visit, context);\n    }\n\n    return ts.visitNode(rootNode, visit);\n};\n\n')),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u7b80\u8ff0"},"\u65b9\u6cd5\u7b80\u8ff0"),(0,o.kt)("h3",{id:"ts"},"ts"),(0,o.kt)("h4",{id:"tsforeach"},"ts.forEach()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const traverse = (node: ts.Node, callback: (node: ts.Node) => void) => {\n  callback(node)\n  node.forEachChild(node => traverse(node, callback))\n}\n")),(0,o.kt)("h4",{id:"tstransform"},"ts.transform()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const sourceFile = ts.createSourceFile("", `\n  const a = {\n    c: 123,\n    f: 546,\n  } \n`, ts.ScriptTarget.ESNext, true)\nconst transformRes = ts.transform(sourceFile, [\n  (context) => {\n    return (node) => {\n      const visitAst: ts.Visitor = (node) => {\n        const { factory } = context;\n\n        if (ts.isObjectLiteralExpression(node)) {\n          const res = factory.updateObjectLiteralExpression(node, [\n            factory.createPropertyAssignment(\n              factory.createIdentifier("asd"),\n              factory.createTrue(),\n            ),\n            factory.createPropertyAssignment(\n              factory.createIdentifier("etert"),\n              factory.createNumericLiteral(2341),\n            ),\n          ])\n          return res\n        }\n        return ts.visitEachChild(node, visitAst, context)\n      }\n      return ts.visitNode(node, visitAst)\n    }\n  }\n])\n')),(0,o.kt)("h3",{id:"tsnode"},"ts.Node"),(0,o.kt)("h4",{id:"gettext--getfulltext"},(0,o.kt)("inlineCode",{parentName:"h4"},"getText")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"h4"},"getFullText")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getText")," \u4f1a\u83b7\u53d6\u4ec5\u76f8\u5173\u7684\u5b57\u7b26\u4e32"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getFullText")," \u83b7\u53d6\u7684\u5b57\u7b26\u4e32\u4f1a\u5305\u542b\u7a7a\u683c"))}d.isMDXComponent=!0}}]);