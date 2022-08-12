"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[7566],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var l=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?l.createElement(k,o(o({ref:n},s),{},{components:t})):l.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=t(2081),r=(t(9496),t(9613));const a={},o="rollup \u539f\u7406\u89e3\u6790",i={unversionedId:"advanced/rollup/README",id:"advanced/rollup/README",title:"rollup \u539f\u7406\u89e3\u6790",description:"\u4f7f\u7528",source:"@site/docs/advanced/rollup/README.md",sourceDirName:"advanced/rollup",slug:"/advanced/rollup/",permalink:"/docs/advanced/rollup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660298396,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{},sidebar:"advanced",previous:{title:"Zustand \u6e90\u7801\u89e3\u6790",permalink:"/docs/advanced/react-ecology/zustand"},next:{title:"rollup \u63d2\u4ef6",permalink:"/docs/advanced/rollup/plugins"}},p={},u=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u6253\u5305\u6548\u679c",id:"\u6253\u5305\u6548\u679c",level:3},{value:"\u6e90\u7801\u89e3\u6790",id:"\u6e90\u7801\u89e3\u6790",level:2},{value:"getInputOptions",id:"getinputoptions",level:3},{value:"new Graph()",id:"new-graph",level:3},{value:"catchUnfinishedHookActions  /  graph.build()",id:"catchunfinishedhookactions----graphbuild",level:3},{value:"return",id:"return",level:3},{value:"bundle.write()",id:"bundlewrite",level:2},{value:"getOutputOptionsAndPluginDriver",id:"getoutputoptionsandplugindriver",level:3},{value:"bundle.generate()",id:"bundlegenerate",level:3},{value:"writeOutputFile",id:"writeoutputfile",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rollup-\u539f\u7406\u89e3\u6790"},"rollup \u539f\u7406\u89e3\u6790"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u6211\u4eec\u4ee5 node api \u7684\u5f62\u5f0f\u4f7f\u7528 rollup\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u662f\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"rollup.config.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import path from 'path'\nimport { RollupOptions } from 'rollup'\nimport typescript from '@rollup/plugin-typescript'\nimport babel from '@rollup/plugin-babel'\nimport resolve from '@rollup/plugin-node-resolve'\nimport commonjs from '@rollup/plugin-commonjs'\nimport { DEFAULT_EXTENSIONS } from '@babel/core'\n\nimport pkg from './package.json'\n\nconst paths = {\n  input: path.join(__dirname, '/src/index.ts'),\n  output: path.join(__dirname, '/lib'),\n}\n\n// rollup \u914d\u7f6e\u9879\nconst rollupConfig: RollupOptions = {\n  input: paths.input,\n  output: [\n    {\n      file: path.join(paths.output, 'index.js'),\n      format: 'cjs', // \u8f93\u51fa commonjs \u89c4\u8303\u7684\u4ee3\u7801\n      name: pkg.name,\n    },\n    {\n      file: path.join(paths.output, 'index.esm.js'),\n      format: 'es', // \u8f93\u51fa es \u89c4\u8303\u7684\u4ee3\u7801\n      name: pkg.name,\n    },\n  ],\n  external: [\n    // ...Object.keys(pkg.dependencies),\n    /@babel\\/runtime/,\n  ], // \u6307\u51fa\u5e94\u5c06\u54ea\u4e9b\u6a21\u5757\u89c6\u4e3a\u5916\u90e8\u6a21\u5757\uff0c\u5982 Peer dependencies \u4e2d\u7684\u4f9d\u8d56\n  plugins: [\n    // ts \u7684\u529f\u80fd\u53ea\u5728\u4e8e\u7c7b\u578b\u68c0\u67e5\u548c\u7f16\u8bd1\u51fa\u58f0\u660e\u6587\u4ef6\uff0c\u7f16\u8bd1\u4ea4\u7ed9 babel \u6765\u505a\n    typescript({\n      tsconfig: './tsconfig.json',\n    }),\n    // \u914d\u5408 commnjs \u89e3\u6790\u7b2c\u4e09\u65b9\u6a21\u5757\n    resolve(),\n    // \u4f7f\u5f97 rollup \u652f\u6301 commonjs \u89c4\u8303\uff0c\u8bc6\u522b commonjs \u89c4\u8303\u7684\u4f9d\u8d56\n    commonjs(),\n    babel({\n      babelHelpers: 'runtime',\n      // \u53ea\u8f6c\u6362\u6e90\u4ee3\u7801\uff0c\u4e0d\u8fd0\u884c\u5916\u90e8\u4f9d\u8d56\n      exclude: 'node_modules/**',\n      // babel \u9ed8\u8ba4\u4e0d\u652f\u6301 ts \u9700\u8981\u624b\u52a8\u6dfb\u52a0\n      extensions: [...DEFAULT_EXTENSIONS, '.ts'],\n    }),\n  ],\n}\n\nexport default rollupConfig\n")),(0,r.kt)("p",null,"\u4f7f\u7528 node api \u6253\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { rollup } from 'rollup'\nimport rollupConfig from './rollup.config'\n\nconst build = async () => {\n  const inputOptions = {\n    input: rollupConfig.input,\n    external: rollupConfig.external,\n    plugins: rollupConfig.plugins,\n  }\n  const outOptions = rollupConfig.output\n  let bundle\n\n  try {\n    bundle = await rollup(inputOptions)\n\n    // \u5199\u5165\u9700\u8981\u904d\u5386\u8f93\u51fa\u914d\u7f6e\n    if (Array.isArray(outOptions)) {\n      outOptions.forEach(async outOption => {\n        await bundle.write(outOption)\n      })\n    }\n  } catch (e) {\n    if (e instanceof Error) {\n      log.error(e.message)\n    }\n  }\n\n  if (bundle !== null) {\n    // closes the bundle\n    await bundle.close()\n    log.progress('Rollup built successfully')\n  }\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u91cd\u70b9\u5173\u6ce8\u4e24\u4e2a\u5185\u5bb9\uff0c\u4ee5\u53ca\u8be6\u7ec6\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rollup \u65b9\u6cd5\uff08\u4f7f\u7528 input\u3001plugins \u7b49\u53c2\u6570\uff09\u521b\u5efa\u4e86\u4e00\u4e2a bundle \u5bf9\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bundle \u5bf9\u8c61\u662f\u4e2a\u4ec0\u4e48\uff0c\u662f\u4e2a\u7f16\u8bd1\u5bf9\u8c61\u4e48\uff1f"),(0,r.kt)("li",{parentName:"ul"},"plugins \u5728\u6574\u4e2a\u7f16\u8bd1\u8fc7\u7a0b\u7684\u751f\u547d\u5468\u671f\u662f\u4ec0\u4e48\u6837\u7684"))),(0,r.kt)("li",{parentName:"ul"},"bundle.write \u65b9\u6cd5\uff08\u4f7f\u7528 output \u53c2\u6570\uff0c\u5305\u62ec\u8f93\u51fa\u683c\u5f0f\u3001\u540d\u79f0\u7b49\uff09\u5c06\u6700\u7ec8\u8d44\u6e90\u5199\u5165\u5230\u7cfb\u7edf\u4e2d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 format\uff08",(0,r.kt)("em",{parentName:"li"},"cjs")," / ",(0,r.kt)("em",{parentName:"li"},"es"),"\uff09\uff0c\u662f\u5982\u4f55\u8f93\u51fa\u5bf9\u5e94\u7684\u683c\u5f0f\u89c4\u8303\u7684")))),(0,r.kt)("h3",{id:"\u6253\u5305\u6548\u679c"},"\u6253\u5305\u6548\u679c"),(0,r.kt)("p",null,"\u6e90\u7801\u90e8\u5206\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport { name } from './bar'\n\nconst main = () => {\n  console.log('first', name)\n}\nconst data = {\n  barName: name\n}\nexport { data, main }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// bar.js\nconst name = 'bar'\nconst noop = () => {}\nexport { name }\n")),(0,r.kt)("p",null,"\u6253\u5305\u540e\u7ed3\u679c\uff08es \u683c\u5f0f\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6587\u4ef6\u5408\u5e76\u6210\u4e86\u4e00\u4e2a\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u53bb\u6389\u4f9d\u8d56\u4e4b\u95f4\u7684  import export \uff0c\u53d8\u6210\u76f4\u63a5\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u53bb\u6389\u4e86\u6ca1\u6709\u88ab\u4f7f\u7528\u7684\u4ee3\u7801\uff08bar.js \u4e2d\u7684 noop\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// index.esm.js\nconst name = 'bar';\n\nconst main = () => {\n  console.log('first', name);\n};\n\nconst data = {\n  barName: name\n};\n\nexport { data, main };\n")),(0,r.kt)("h2",{id:"\u6e90\u7801\u89e3\u6790"},"\u6e90\u7801\u89e3\u6790"),(0,r.kt)("p",null,"\u5165\u53e3\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/rollup/rollup.ts"),"\uff0c\u770b\u4e00\u770b\u5b83\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\uff08\u6307 ",(0,r.kt)("inlineCode",{parentName:"p"},"rollupInternal"),"\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"getInputOptions"))," \u65b9\u6cd5\u5c06\u7528\u6237\u914d\u7f6e\u6539\u6210\u5185\u90e8\u7528\u7684\u6570\u636e\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"new Graph()"))," \u5b9e\u4f8b\u5316\u4e86\u4e00\u4e2a\u56fe\u6570\u636e\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"catchUnfinishedHookActions"))),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff08bundle\uff09\uff0c\u5305\u542b write\u3001close \u7b49\u65b9\u6cd5")),(0,r.kt)("h3",{id:"getinputoptions"},"getInputOptions"),(0,r.kt)("p",null,"\u5185\u90e8\u6700\u7ec8\u4f1a\u751f\u6210\u8fd9\u6837\u7684\u4e00\u4e2a option"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"    const options: NormalizedInputOptions & InputOptions = {\n        acorn: getAcorn(config), // acorn \u914d\u7f6e\n        acornInjectPlugins: getAcornInjectPlugins(config), // \u6ce8\u5165 acorn \u63d2\u4ef6\uff0c\u6bd4\u5982 acorn-jsx\n        cache: getCache(config), // cache \u7f13\u5b58\u914d\u7f6e\n        context, // \u4e0a\u4e0b\u6587\uff0c\u6bd4\u5982 windows\n        experimentalCacheExpiry: config.experimentalCacheExpiry ?? 10,\n        external: getIdMatcher(config.external), // \u5c06 external \u7ec4\u88c5\u6210\u65b9\u6cd5\uff0c\u65b9\u4fbf\u4f7f\u7528\n        inlineDynamicImports: getInlineDynamicImports(config, onwarn, strictDeprecations),// \u5e9f\u5f03\u4e86\u4e0d\u5173\u6ce8\uff0c\u6539\u5230 output \u4e2d\n        input: getInput(config), // \u5c06 input \u7ec4\u6210\u4e00\u4e2a\u6570\u7ec4\n        makeAbsoluteExternalsRelative: config.makeAbsoluteExternalsRelative ?? true, // \u662f\u5426\u5c06\u7edd\u5bf9\u8def\u5f84\u8f6c\u4e3a\u76f8\u5bf9\u8def\u5f84\n        manualChunks: getManualChunks(config, onwarn, strictDeprecations), // \u5e9f\u5f03\u4e86\uff0c\u4e0d\u5173\u6ce8\uff0c\u6539\u5230 output \u4e2d\n        maxParallelFileReads: getMaxParallelFileReads(config), // \u6587\u4ef6\u8bfb\u53d6\u6700\u5927\u5e76\u53d1\u6570\uff0c\u9ed8\u8ba4 20\n        moduleContext: getModuleContext(config, context), // \u66f4 context \u5dee\u4e0d\u591a\n        onwarn, // \u8b66\u544a\u76d1\u542c\n        perf: config.perf || false, // \u662f\u5426\u6536\u96c6\u6027\u80fd\u6570\u636e\n        plugins: ensureArray(config.plugins), // \u63d2\u4ef6\n        preserveEntrySignatures: getPreserveEntrySignatures(config, unsetOptions), // strict \u65f6\uff0c\u5c06\u5bfc\u51fa\u540d\u8ddf\u5bfc\u5165\u65f6\u7684\u547d\u540d\u4e00\u6837\uff0c\u53ea\u5bfc\u51fa\u5fc5\u8981\u7684\n        preserveModules: getPreserveModules(config, onwarn, strictDeprecations), // \u5e9f\u5f03\u4e86\uff0c\u4e0d\u5173\u6ce8\uff0c\u6539\u5230 output \u4e2d\n        preserveSymlinks: config.preserveSymlinks || false, // false \u65f6\uff0c\u89e3\u6790\u6587\u4ef6\u65f6\u9075\u5faa\u7b26\u53f7\u94fe\u63a5\u3002\n        shimMissingExports: config.shimMissingExports || false,\n        strictDeprecations\uff1a config.strictDeprecations || false, // \u4f7f\u7528\u4e86\u6807\u8bb0\u4e3a\u5f03\u7528\u7684\u65b9\u6cd5\uff0ctrue \u76f4\u63a5 error\uff0cfalse \u62a5 warning\uff0c\u9ed8\u8ba4 false\n        treeshake: getTreeshake(config, onwarn, strictDeprecations) // treeshake \u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a true\uff0c\u76f8\u5f53\u4e8e\u672a\u6307\u5b9a\uff0c\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684 treeshake \u914d\u7f6e\uff0c \u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e09\u4e2a\u5185\u7f6e\u914d\u7f6e\uff1a \u201csmallest\u201d \u201crecommended\u201d \u201csafest\u201d\n    }\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5185\u90e8\u4f7f\u7528\u7684\u914d\u7f6e\u8fd8\u662f\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4e86\u89e3\u5230\u4e00\u4e9b\u4e0d\u5e38\u7528\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4ecd\u65e7\u53ea\u770b\u4e00\u4e9b\u91cd\u70b9\u914d\u7f6e",(0,r.kt)("strong",{parentName:"p"},"\u5173\u6ce8\u5b83\u4eec\u7684\u8d70\u5411"),"\uff1ainput\uff0cplugins\u3002"),(0,r.kt)("h3",{id:"new-graph"},"new Graph()"),(0,r.kt)("p",null,"(\u751f\u6210\u56fe\u5b9e\u4f8b\uff0c\u90a3\u731c\u6d4b\u5c06\u4f1a\u4ece\u5165\u53e3\u5f00\u59cb\u7684\u89e3\u6790\u4f9d\u8d56\u5173\u7cfb\u7ec4\u6210\u4e00\u5e45\u6709\u5411\u56fe\u3002)"),(0,r.kt)("p",null,"\u5173\u6ce8\u6784\u9020\u51fd\u6570\uff08\u5ffd\u7565 cache \u548c watch \u76f8\u5173\u7684\u4ee3\u7801\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pluginDriver = new PluginDriver")," \u751f\u6210\u4e00\u4e2a \u63d2\u4ef6\u9a71\u52a8\u5b9e\u4f8b\uff0c\u63d2\u4ef6\u9a71\u52a8\u5668\u4e2d \u5b9e\u4f8b\u5316\u4e86\u4e00\u4e2a FileEmitter \uff0c\u4e3a\u63d2\u4ef6\u63d0\u4f9b\u6587\u4ef6\u8f93\u51fa\u80fd\u529b\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hookParallel \u94a9\u5b50\u89e6\u53d1\u5668\uff0c\u8c03\u7528\u6709\u6240\u6709\u63d2\u4ef6\u7684\u94a9\u5b50"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"acornParser = acorn.Parser...")," \u4e00\u4e2a acorn \u89e3\u6790\u5668\u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"moduleLoader = new ModuleLoader")," \u751f\u6210\u4e00\u4e2a\u6a21\u5757\u52a0\u8f7d\u5668\u5b9e\u4f8b\uff0c\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u8bfb\u53d6\u961f\u5217\u3002")),(0,r.kt)("p",null,"\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb\u5982\u4e0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://file.wangsijie.top/blog/202203221738992.png",alt:null})),(0,r.kt)("p",null,"\u81f3\u6b64\u5c31\u7ed3\u675f\u4e86\uff0c\u6ca1\u6709\u751f\u6210\u6709\u5411\u56fe\uff1f\u5728\u540e\u9762\u5462"),(0,r.kt)("h3",{id:"catchunfinishedhookactions----graphbuild"},"catchUnfinishedHookActions  /  graph.build()"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u5f88\u6709\u610f\u601d\uff0c\u76f4\u8bd1\u4e3a\u201c\u6355\u83b7\u672a\u5b8c\u6210\u7684\u94a9\u5b50\u52a8\u4f5c\u201d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"emptyEventLoopPromise")," \u6ce8\u518c\u4e86\u4e00\u4e2a ",(0,r.kt)("em",{parentName:"p"},"beforeExit")," \u4e8b\u4ef6\uff0c\u4e00\u65e6\u89e6\u53d1\uff0c\u5c31\u4f1a reject\u3002\uff08\u4f1a\u5728\u63d2\u4ef6\u8fd4\u56de\u7684 promise \u4e00\u76f4\u6ca1\u6709\u88ab resolve \u65f6\u53d1\u751f\uff09\u3002"),(0,r.kt)("p",null,"emptyEventLoopPromise \u4f1a\u8ddf callback \u7ade\u4e89\uff08race\uff09\uff0c\u5982\u679c beforeExit \u5148\u89e6\u53d1\u4e86\uff0c\u8bf4\u660e callback \u6ca1\u6709\u6267\u884c\u5b8c\uff0c\u6709\u4e9b\u95ee\u9898\uff0c\u5c31\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function catchUnfinishedHookActions (pluginDriver, callback) {\n    let handleEmptyEventLoop\n    const emptyEventLoopPromise = new Promise((_, reject) => {\n        handleEmptyEventLoop = () => {\n            const unfulfilledActions = pluginDriver.getUnfulfilledHookActions();\n            reject(\n                new Error(`Unexpected early exit...`)\n            )\n        }\n        process.once('beforeExit', handleEmptyEventLoop)\n    })\n    const result = await Promise.race([callback(), emptyEventLoopPromise])\n    process.off('beforeExit', handleEmptyEventLoop)\n    return result\n}\n")),(0,r.kt)("p",null,"\u8dd1\u8fdc\u4e86\uff0c\u6211\u4eec\u91cd\u70b9\u5173\u6ce8 callback \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\uff08\u4e0d\u5173\u6ce8\u5f02\u5e38\u95ee\u9898\uff09\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"graph.build()")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5206\u522b\u5728 build \u524d\u540e\u89e6\u53d1\u4e86\u63d2\u4ef6\u7684 buildStart\u3001buildEnd \u94a9\u5b50\u3002\u6211\u4eec\u91cd\u70b9\u770b build \u65b9\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"generateModuleGraph()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ece\u5165\u53e3\u6a21\u5757 ast \u89e3\u6790\uff0c\u5e76\u6839\u636e\u4f9d\u8d56\u5173\u7cfb\u751f\u6210\u4e00\u5e45\u6a21\u5757\u56fe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ece modulesById \u4e2d\u5411 modules \u6dfb\u52a0 module")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"sortModules()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u6790\u6a21\u5757\uff0c\u8f93\u51fa\u5faa\u73af\u4f9d\u8d56\u3001\u548c\u6392\u5e8f\u597d\u7684\u4f9d\u8d56\uff08\u662f",(0,r.kt)("em",{parentName:"li"},"\u540e\u5e8f"),"\u6392\u5e8f\u7684\uff0c\u800c\u975e",(0,r.kt)("em",{parentName:"li"},"\u9006\u540e\u5e8f"),"\u6392\u5e8f\uff0c\u9006\u540e\u5e8f\u4f1a\u5728\u540e\u9762\u6b65\u9aa4\u8fdb\u884c\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757\u7ed1\u5b9a\u6765\u6e90\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"bindReferences()"),"\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"includeStatements()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u6709 sideEffect\uff08\u4ece Program \u9012\u5f52\u8c03\u7528\u5404\u4e2a\u8282\u70b9\u7684 hasSideEffect\uff0c\u5404\u4e2a\u8282\u70b9\u4e2d\uff0crollup \u5185\u7f6e\u4e86 ast node type \u7684\u7c7b\uff0c\u5e76\u63cf\u8ff0\u4e86\u5982\u4f55\u67e5\u627e sideEffect\uff0c\u5982\u4f55 render \u7b49\u7b49\uff0c\u503c\u5f97\u4e00\u9898\u7684\u662f render \u4e2d\u4f7f\u7528\u4e86 MagicString \u6765\u5904\u7406\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\uff09"),(0,r.kt)("li",{parentName:"ul"},"treeshaking")))),(0,r.kt)("h3",{id:"return"},"return"),(0,r.kt)("p",null,"\u6700\u540e\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bundle =  {\n  close () {},\n  write () {\n    // ...\n    handleGenerateWrite(...)\n  },\n  // ...\n}\n")),(0,r.kt)("h2",{id:"bundlewrite"},"bundle.write()"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\u8c03\u7528\u4e86 handleGenerateWrite \u65b9\u6cd5\uff0c\u91cc\u9762\u5206 3 \u4e2a\u6b65\u9aa4"),(0,r.kt)("p",null,"\u6838\u5fc3\u6b65\u9aa4\u662f bundle.generate()"),(0,r.kt)("h3",{id:"getoutputoptionsandplugindriver"},"getOutputOptionsAndPluginDriver"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e86\u4e00\u4e2a outputPluginDriver\uff0c\u6765\u505a\u7f16\u8bd1\u540e\u7684\u8d44\u6e90\u8f93\u51fa"),(0,r.kt)("h3",{id:"bundlegenerate"},"bundle.generate()"),(0,r.kt)("p",null,"\u65b0\u5efa\u4e86\u4e00\u4e2a bundle \u5b9e\u4f8b\uff0c\u5e76\u8c03\u7528 bundle.generate()\u3002\u770b\u770b generate \u91cc\u9762\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"outputBundle")," \u7a7a\u5bf9\u8c61\uff0c\u6700\u540e\u8f93\u51fa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"generateChunks()"),(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e86\u4e00\u4e2a chunk \u5b9e\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"createAddons()"),(0,r.kt)("p",{parentName:"li"},"\u5728\u9884\u6e32\u67d3\u4e4b\u524d\u521b\u5efa\u989d\u5916\u6dfb\u52a0\u7684\u5185\u5bb9\uff1abanner\u3001 footer\u3001 intro\u3001 outro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"getGenerateCodeSnippets()"),(0,r.kt)("p",{parentName:"li"},"\u751f\u6210\u4ee3\u7801\u7247\u6bb5\uff0c\u5904\u7406\u4e00\u4e9b\u7ec6\u8282\uff0c\u6bd4\u5982\u662f\u5426\u662f\u5426\u52a0 \u5c01\u53f7\uff0c\u4f7f\u7528 let \u8fd8\u662f var \u7b49\u7b49")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"prerenderChunks()\uff1b addFinalizedChunksToBundle()"),(0,r.kt)("p",{parentName:"li"},"\u9884\u6e32\u67d3\u5757\uff0c\u4ee5\u53ca\u6700\u7ec8\u6e32\u67d3\u7684\u5185\u5bb9\u6dfb\u52a0\u5230 bundle \u4e0a\u3002\u8fd9\u91cc\u7684\u903b\u8f91\u6bd4\u8f83\u590d\u6742\uff0c\u76f4\u63a5\u5173\u6ce8\u4e00\u4e9b\u70b9\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"generateExports \u53bb\u6389\u539f\u5148\u4ee3\u7801\u7684 exports\uff0c\u6539\u4e3a \u76f4\u63a5\u58f0\u660e\uff08\u56e0\u4e3a\u662f\u8981\u628a\u4ee3\u7801\u5408\u5e76\u7684\uff0c\u5982\u6700\u5f00\u59cb\u7684\u793a\u4f8b\uff09"),(0,r.kt)("li",{parentName:"ol"},"modules \u4f1a\u88ab reverse()\uff0c\u5728\u4e0a\u9762 build \u9636\u6bb5\u662f\u56fe\u7684\u540e\u5e8f\u6392\u5e8f\uff0c\u8fd9\u91cc reverse \u540e\u5c31\u662f\u62d3\u6251\u6392\u5e8f\uff08\u9006\u540e\u5e8f\uff09\u4e86"),(0,r.kt)("li",{parentName:"ol"},"es \u683c\u5f0f\u7684\uff0c\u53ef\u4ee5\u7701\u53bb\u4e86 exports \u7b49\u7b49\u4ee3\u7801\u7684\u6dfb\u52a0"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e86 MagicString  \u6765\u5904\u7406\u5b57\u7b26\u4e32\u7684\u62fc\u63a5\u5220\u9664\u7b49\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e86 AST node \u7c7b\u578b\u5bf9\u5e94\u7684\u7c7b\uff0c\u5e76\u4f7f\u7528\u4ed6\u4eec\u7684 render \u65b9\u6cd5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"outputBundle")," \u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u7f16\u8bd1\u540e\u7684\u5b57\u7b26\u4e32"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  code: "use strict;..."\uff0c\n  fileName: "index.js",\n  modules: [] // \u524d\u9762\u6392\u5e8f\u597d\u7684 modules\n  type: "chunk"\uff0c\n  // ...\n}\n')),(0,r.kt)("h3",{id:"writeoutputfile"},"writeOutputFile"),(0,r.kt)("p",null,"\u5c06\u8d44\u6e90\u5199\u5165\u5230\u7cfb\u7edf\u4e2d"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u65bd\u5de5\u4e2d..."))}c.isMDXComponent=!0}}]);