"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[1083],{9613:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,s(s({ref:n},i),{},{components:t})):r.createElement(f,s({ref:n},i))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6795:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return i},default:function(){return d}});var r=t(5900),o=t(4750),a=(t(9496),t(9613)),s=["components"],c={},p="Taro \u7b14\u8bb0",l={unversionedId:"note/applet/taro",id:"note/applet/taro",title:"Taro \u7b14\u8bb0",description:"\u5728 Taro \u4e0a\u4f7f\u7528 dva",source:"@site/docs/note/applet/taro.md",sourceDirName:"note/applet",slug:"/note/applet/taro",permalink:"/docs/note/applet/taro",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"yarn",permalink:"/docs/note/NPM/yarn"},next:{title:"Just JavaScript",permalink:"/docs/note/justjavascript/"}},i=[{value:"\u5728 Taro \u4e0a\u4f7f\u7528 dva",id:"\u5728-taro-\u4e0a\u4f7f\u7528-dva",children:[{value:"src/store.js",id:"srcstorejs",children:[],level:3},{value:"src/app.js",id:"srcappjs",children:[],level:3},{value:"src/models/index.js",id:"srcmodelsindexjs",children:[],level:3},{value:"src/models/count.js",id:"srcmodelscountjs",children:[],level:3}],level:2},{value:"request \u65b9\u6cd5\u5c01\u88c5",id:"request-\u65b9\u6cd5\u5c01\u88c5",children:[],level:2}],u={toc:i};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"taro-\u7b14\u8bb0"},"Taro \u7b14\u8bb0"),(0,a.kt)("h2",{id:"\u5728-taro-\u4e0a\u4f7f\u7528-dva"},"\u5728 Taro \u4e0a\u4f7f\u7528 dva"),(0,a.kt)("h3",{id:"srcstorejs"},"src/store.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { create } from 'dva-core'\n// import { createLogger } from 'redux-logger'\nimport createLoading from 'dva-loading'\n\nlet app\nlet store\nlet dispatch\n\nfunction createApp(opt) {\n  // redux\u65e5\u5fd7\n  // Object.assign(opt, {\n  //   onAction: [createLogger()]\n  // })\n  app = create(opt)\n  app.use(createLoading({}))\n\n  if (!global.registered) opt.models.forEach(model => app.model(model))\n  global.registered = true\n  app.start()\n\n  // eslint-disable-next-line no-underscore-dangle\n  store = app._store\n  app.getStore = () => store\n\n  dispatch = store.dispatch\n\n  app.dispatch = dispatch\n\n  return app\n}\n\nexport default {\n  createApp,\n  getDispatch() {\n    return app.dispatch\n  }\n}\n")),(0,a.kt)("h3",{id:"srcappjs"},"src/app.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Taro, { Component } from '@tarojs/taro'\nimport { Provider } from '@tarojs/redux'\n// ...\nimport dva from './store'\nimport models from './models'\n\nconst dvaApp = dva.createApp({\n  initialState: {},\n  models,\n})\n\nconst store = dvaApp.getStore()\n\nclass App extends Component {\n  // ...\n  render () {\n    return (\n      <Provider store={store}>\n        <Index />\n      </Provider>\n    )\n  }\n}\n\nTaro.render(<App />, document.getElementById('app'))\n")),(0,a.kt)("h3",{id:"srcmodelsindexjs"},"src/models/index.js"),(0,a.kt)("p",null,"\u5f52\u7eb3\u6240\u6709\u7684 model \u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import home from '@/pages/home/model'\nimport count from './count'\n\nexport default [count, home]\n")),(0,a.kt)("h3",{id:"srcmodelscountjs"},"src/models/count.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  namespace: 'count',\n  state: {\n    count: 0,\n  },\n  effects: {\n    *addAfterOneSecond(action, { call, put }) {\n      yield call(delay, 1000)\n      yield put({ type: 'add' })\n    },\n  },\n  reducers: {\n    add (state) {\n      return {\n        count: state.count + 1\n      }\n    },\n  },\n}\n")),(0,a.kt)("h2",{id:"request-\u65b9\u6cd5\u5c01\u88c5"},"request \u65b9\u6cd5\u5c01\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Taro from '@tarojs/taro'\n\nconst baseConfig = {\n  baseUrl: 'http://localhost:7300/mock/5e44f224a4de7a8083850859/saas'\n}\n\nconst codeMessage = {\n  200: '\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002',\n  201: '\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002',\n  202: '\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002',\n  204: '\u5220\u9664\u6570\u636e\u6210\u529f\u3002',\n  400: '\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002',\n  401: '\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002',\n  403: '\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002',\n  404: '\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002',\n  406: '\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002',\n  410: '\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002',\n  422: '\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002',\n  500: '\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002',\n  502: '\u7f51\u5173\u9519\u8bef\u3002',\n  503: '\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002',\n  504: '\u7f51\u5173\u8d85\u65f6\u3002',\n}\n\nconst checkStatus = response => {\n  const errortext = codeMessage[response.statusCode] || response.errMsg\n\n  Taro.showModal({\n    title: `\u8bf7\u6c42\u9519\u8bef ${response.statusCode}: ${response.url}`,\n    content: errortext,\n  })\n\n  return response\n}\n\nfunction request (url, method, { data, headers, baseUrl }) {\n  const preUrl = baseUrl ? baseUrl.replace(/\\/$/, '') : baseConfig.baseUrl\n  const requestUrl = `${preUrl}/${url.replace(/^\\//, '')}`\n\n  // Taro.showLoading({\n  //   title: 'loading',\n  //   mask: true\n  // })\n\n  return Taro.request({\n    url: requestUrl,\n    method,\n    data,\n    // \u4e0d\u53d1\u9001 cookie\n    credentials: 'omit',\n    header: {\n      'content-type': 'application/json',\n      ...headers,\n    },\n  }).then(res => {\n    if (res.statusCode >= 200 && res.statusCode < 300) {\n      if (!res.data.success) {\n        Taro.showToast({\n          title: res.data.message || '\u8bf7\u6c42\u9519\u8bef',\n          icon: 'none',\n          duration: 1000,\n          mask: true,\n        })\n      }\n      return res.data\n    }\n    throw res\n  }).catch(error => checkStatus(error))\n}\n\n\nexport const get = (url, params = {}, config = {}) => request(url, params, config)\n\nexport const post = (url, data = {}, config = {}) => request(url, data, config)\n\nexport const put = (url, data = {}, config = {}) => request(url, data, config)\n\nexport const dele = (url, params = {}, config = {}) => request(url, params, config)\n")))}d.isMDXComponent=!0}}]);