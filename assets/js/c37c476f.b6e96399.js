"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[6069],{9613:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(2081),a=(n(9496),n(9613));const o={},c="Zustand \u6e90\u7801\u89e3\u6790",s={unversionedId:"advanced/react-ecology/zustand",id:"advanced/react-ecology/zustand",title:"Zustand \u6e90\u7801\u89e3\u6790",description:"\u4f7f\u7528",source:"@site/docs/advanced/react-ecology/zustand.md",sourceDirName:"advanced/react-ecology",slug:"/advanced/react-ecology/zustand",permalink:"/docs/advanced/react-ecology/zustand",draft:!1,tags:[],version:"current",lastUpdatedAt:1663295231,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{},sidebar:"advanced",previous:{title:"react-redux \u6e90\u7801\u89e3\u6790",permalink:"/docs/advanced/react-ecology/react-redux"},next:{title:"rollup \u539f\u7406\u89e3\u6790",permalink:"/docs/advanced/rollup/"}},l={},u=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"create",id:"create",level:2},{value:"createStore",id:"createstore",level:3},{value:"useStore",id:"usestore",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],i={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zustand-\u6e90\u7801\u89e3\u6790"},"Zustand \u6e90\u7801\u89e3\u6790"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"zustand \u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u901a\u8fc7 create \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a useStore hook\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import create from \'zustand\'\n\ntype CountState = {\n  count: number\n  increase: () => void\n  decrease: () => void\n}\n\nconst useStore = create<CountState>(set => ({\n  count: 0,\n  increase: () => set(state => ({ count: state.count + 1 })),\n  decrease: () => set(state => ({ count: state.count - 1 })),\n}))\n\nuseStore.subscribe(console.log)\n\nconst ZustandStore = () => {\n  const store = useStore()\n\n  return (\n    <div>\n      <p>Count: {store.count}</p>\n      <button type="button" onClick={() => store.increase()}>\n        increase\n      </button>\n      <button type="button" onClick={() => store.decrease()}>\n        decrease\n      </button>\n    </div>\n  )\n}\n')),(0,a.kt)("h2",{id:"create"},"create"),(0,a.kt)("p",null,"create \u65b9\u6cd5\u4e5f\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u76f4\u63a5\u770b\u4e0b\u9762\u7684\u4f2a\u4ee3\u7801\u3002\u5206\u4e3a\u4e24\u90e8\uff0c\u521b\u5efa strore\uff0c\u8fd4\u56de\u4e00\u4e2a hook useStore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const create = (createState) => {\n  const api = createStore(createState)\n  \n  const useStore = () => {\n    \n  }\n  \n  Object.assign(useStore, api)\n  \n  return useStore\n}\n")),(0,a.kt)("h3",{id:"createstore"},"createStore"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," \u91cc\uff0c\u89c1 ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," \u65b9\u6cd5\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u66f4\u65b0\u5408\u5e76\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u5e76\u4f7f\u7528\u4e86\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u8ba2\u9605\u6570\u636e\u66f4\u65b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const createStore = (createState) => {\n  let state\n  const listeners = new Set()\n  \n  // \u66f4\u65b0 state\n  const setState = (partial, replace) => {\n    // partial \u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\uff0c replace \u4e3a true \u53ef\u4ee5\u76f4\u63a5\u66ff\u6362 state ...\n    const nextState = partial(state)\n    state = Object.assign({}, state, nextState)\n    listeners.forEach((listener) => listener(state, previousState))\n  }\n  \n  const getState = () => state\n  \n  const subscribe = (listener, selector, equalityFn) => {\n    listeners.add(listener)\n    return () => listeners.delete(listener)\n  }\n\n  const api = { setState, getState, subscribe, destroy }\n  state = createState(setState, getState, api)\n\n  return api\n}\n")),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u77e5\u9053\u4e86 zustand \u662f\u5982\u4f55\u521b\u5efa\u72b6\u6001\uff0c\u66f4\u65b0\u72b6\u6001\u7684\uff0c\u4f46\u662f\u4ed6\u662f\u5982\u4f55\u8ba9 react \u89e6\u53d1\u66f4\u65b0\u7684\u5462\uff0c\u6211\u4eec\u770b\u770b useStore \u8fd9\u4e2a hook"),(0,a.kt)("h3",{id:"usestore"},"useStore"),(0,a.kt)("p",null,"\u4e00\u53e5\u8bdd\u603b\u7ed3\uff0c\u5c31\u662f \u901a\u8fc7\u4e0a\u9762\u7684 api.subscribe \u8ba2\u9605\u6570\u636e\u66f4\u65b0\uff0c\u4e00\u65e6\u66f4\u65b0\uff0c\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"forceUpdate"),"\u3002"),(0,a.kt)("p",null,"\u4e00\u4e9b\u7ec6\u8282\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 useReducer \u6765\u5f3a\u5236\u89e6\u53d1\u9875\u9762\u66f4\u65b0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u6b21\u66f4\u65b0\u90fd\u8981\u540c\u6b65\u66f4\u65b0 ref.current \uff0c\u56e0\u4e3a\u8ba2\u9605\u53ea\u4f1a\u8ba2\u9605\u4e00\u6b21\uff0clistener \u76f4\u63a5\u62ff ref.current \u6765\u83b7\u53d6\u6700\u65b0\u7684 selector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6e90\u7801\u4e2d\u8fd8\u4f1a\u901a\u8fc7 equalityFn \u6765\u8ba9\u7528\u6237\u81ea\u5df1\u5224\u65ad\u8981\u4e0d\u8981\u66f4\u65b0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useIsomorphicLayoutEffect")," \u662f SSR \u4f7f\u7528 effect hook \u7684\u540c\u6784\u65b9\u6848"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("inlineCode",{parentName:"p"},"useIsomorphicLayoutEffect = isSSR ? useEffect: useEffectLayout")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const useStore = (selector = api.getState, equalityFn) => {\n  const [, forceUpdate] = useReducer((c) => c + 1, 0)\n  \n  const state = api.getState()\n  // \u5c06 state \u3001 selector \u3001 equalityFn \u90fd\u5b58\u5230\u4e86 ref \u4e0a\n  const stateRef = useRef(state)\n  const selectorRef = useRef(selector)\n  \n  // \u8fd9\u4e2a\u662f\u5b58\u7684 selector \u7684 state\n  const currentSliceRef = useRef()\n  if (currentSliceRef.current === undefined) {\n    currentSliceRef.current = selector(state)\n  }\n  \n  const newStateSlice = selector(state)\n  \n  useIsomorphicLayoutEffect(() => {\n    stateRef.current = state\n    // \u540c\u6b65\u66f4\u65b0\u4e0a\u9762\u7684\u5404\u4e2a ref ...\n  })\n  \n  useIsomorphicLayoutEffect(() => {\n    // \u8ba2\u9605\u72b6\u6001\u66f4\u65b0\uff0c\u5e76\u89e6\u53d1\u66f4\u65b0\n    const listener = () => {\n      const nextState = api.getState()\n      const nextStateSlice = selectorRef.current(nextState)\n      stateRef.current = nextState\n      currentSliceRef.current = nextStateSlice\n      forceUpdate()\n    }\n    const unsubscribe = api.subscribe(listener)\n    return unsubscribe\n  }, [])\n  \n  return newStateSlice\n}\n")),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"zustand \u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0c\u4e3b\u8981\u662f\u4e24\u4e2a\u6b65\u9aa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createStore \u65b9\u6cd5\u521b\u5efa\u4e86\u4e00\u4e2a\u95ed\u5305\u73af\u5883\uff0c\u4fdd\u5b58\u72b6\u6001\uff0c\u5e76\u63d0\u4f9b\u6570\u636e\u8ba2\u9605"),(0,a.kt)("li",{parentName:"ul"},"useStore \u8ba2\u9605\u6570\u636e\uff0c\u5e76\u5f3a\u5236\u89e6\u53d1\u66f4\u65b0\u9875\u9762")))}p.isMDXComponent=!0}}]);