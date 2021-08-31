"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[5685],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],s={},u="React Hooks \u4f7f\u7528\u6280\u5de7",i={unversionedId:"note/React/react-hooks\u4f7f\u7528\u6280\u5de7",id:"note/React/react-hooks\u4f7f\u7528\u6280\u5de7",isDocsHomePage:!1,title:"React Hooks \u4f7f\u7528\u6280\u5de7",description:"\u4f9d\u8d56",source:"@site/docs/note/React/react-hooks\u4f7f\u7528\u6280\u5de7.md",sourceDirName:"note/React",slug:"/note/React/react-hooks\u4f7f\u7528\u6280\u5de7",permalink:"/docs/note/React/react-hooks\u4f7f\u7528\u6280\u5de7",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/note/React/react-hooks\u4f7f\u7528\u6280\u5de7.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"React\u7b14\u8bb0",permalink:"/docs/note/React/React\u7b14\u8bb0"},next:{title:"React \u7ec4\u4ef6\u5f00\u53d1 5 \u79cd\u9ad8\u7ea7\u6a21\u5f0f",permalink:"/docs/note/React/React\u7ec4\u4ef6\u5f00\u53d15\u79cd\u9ad8\u7ea7\u6a21\u5f0f"}},l=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",children:[{value:"useEffect \u4f9d\u8d56\u516c\u7528\u51fd\u6570",id:"useeffect-\u4f9d\u8d56\u516c\u7528\u51fd\u6570",children:[]},{value:"\u53cc\u51fb",id:"\u53cc\u51fb",children:[]},{value:"\u63a5\u53e3\u8bf7\u6c42\u5c01\u88c5",id:"\u63a5\u53e3\u8bf7\u6c42\u5c01\u88c5",children:[]},{value:"URL \u6570\u636e\u4ed3\u5e93",id:"url-\u6570\u636e\u4ed3\u5e93",children:[]}]}],p={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-hooks-\u4f7f\u7528\u6280\u5de7"},"React Hooks \u4f7f\u7528\u6280\u5de7"),(0,o.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,o.kt)("h3",{id:"useeffect-\u4f9d\u8d56\u516c\u7528\u51fd\u6570"},"useEffect \u4f9d\u8d56\u516c\u7528\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function UserList () {\n    const [index, setIndex] = useState(0)\n    const fetchData = useCallback(() => {\n        featchMetod(index)\n    }, [index])\n    \n    useEffect(() => {\n        fetchData()\n    }, [fetchData])\n    \n    function doSomething () {\n        fetchData()\n    }\n    \n    return (\n        //...\n    )\n}\n")),(0,o.kt)("h3",{id:"\u53cc\u51fb"},"\u53cc\u51fb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useDoubleClick () {\n  const [ lastClickTime, setClickTime ] = useState(0)\n\n  return (callback) => (e) => {\n    const currentTime = e.timeStamp\n    const gap = currentTime - lastClickTime\n    if (gap > 0 && gap < 300) {\n      callback && callback(e)\n    }\n    setClickTime(currentTime)\n  }\n}\n")),(0,o.kt)("h3",{id:"\u63a5\u53e3\u8bf7\u6c42\u5c01\u88c5"},"\u63a5\u53e3\u8bf7\u6c42\u5c01\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function useFetch = (config, deps) => {\n  const abortController = new AbortController()\n  const [loading, setLoading] = useState(false)\n  const [result, setResult] = useState()\n\n  useEffect(() => {\n    setLoading(true)\n    fetch({\n      ...config,\n      signal: abortController.signal\n    })\n      .then((res) => setResult(res))\n      .finally(() => setLoading(false))\n  }, deps)\n\n  useEffect(() => {\n    return () => abortController.abort()\n  }, [])\n\n  return { result, loading }\n}\n")),(0,o.kt)("h3",{id:"url-\u6570\u636e\u4ed3\u5e93"},"URL \u6570\u636e\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function useQuery() {\n  const history = useHistory();\n  const { search, pathname } = useLocation();\n  // \u4fdd\u5b58query\u72b6\u6001\n  const queryState = useRef(qs.parse(search));\n  // \u8bbe\u7f6equery\n  const setQuery = handler => {\n    const nextQuery = handler(queryState.current);\n    queryState.current = nextQuery;\n    // replace\u4f1a\u4f7f\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\n    history.replace({\n      pathname: pathname,\n      search: qs.stringify(nextQuery),\n    });\n  };\n  return [queryState.current, setQuery];\n}\n\nconst [query, setQuery] = useQuery();\n\n// \u63a5\u53e3\u8bf7\u6c42\u4f9d\u8d56 page \u548c size\nuseEffect(() => {\n  api.getUsers();\n}, [query.page, query, size]);\n\n// \u5206\u9875\u6539\u53d8 \u89e6\u53d1\u63a5\u53e3\u91cd\u65b0\u8bf7\u6c42\nconst onPageChange = page => {\n  setQuery(prevQuery => ({\n    ...prevQuery,\n    page,\n  }));\n};\n")))}f.isMDXComponent=!0}}]);