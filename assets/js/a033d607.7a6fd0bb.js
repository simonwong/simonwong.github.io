"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[3238],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,c(c({ref:t},p),{},{components:n})):a.createElement(k,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(2081),r=(n(9496),n(9613));const l={},c="acme.sh \u8bc1\u4e66\u9881\u53d1",i={unversionedId:"services/acme.sh\u8bc1\u4e66\u9881\u53d1",id:"services/acme.sh\u8bc1\u4e66\u9881\u53d1",title:"acme.sh \u8bc1\u4e66\u9881\u53d1",description:"\u5b89\u88c5acme.sh",source:"@site/docs/services/acme.sh\u8bc1\u4e66\u9881\u53d1.md",sourceDirName:"services",slug:"/services/acme.sh\u8bc1\u4e66\u9881\u53d1",permalink:"/docs/services/acme.sh\u8bc1\u4e66\u9881\u53d1",draft:!1,tags:[],version:"current",lastUpdatedAt:1663295231,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{},sidebar:"services",previous:{title:"Docker \u4e0a\u5404\u79cd\u955c\u50cf\u7684\u4f7f\u7528",permalink:"/docs/services/Docker\u4e0a\u5404\u79cd\u955c\u50cf\u7684\u4f7f\u7528"},next:{title:"MySql \u4f7f\u7528",permalink:"/docs/services/mysql\u4f7f\u7528"}},o={},s=[{value:"\u5b89\u88c5acme.sh",id:"\u5b89\u88c5acmesh",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u6dfb\u52a0\u914d\u7f6e",id:"\u6dfb\u52a0\u914d\u7f6e",level:2},{value:"DNS \u9a8c\u8bc1",id:"dns-\u9a8c\u8bc1",level:2},{value:"\u751f\u6210\u8bc1\u4e66",id:"\u751f\u6210\u8bc1\u4e66",level:3},{value:"zerossl",id:"zerossl",level:3},{value:"\u62f7\u8d1d/\u5b89\u88c5\u8bc1\u4e66",id:"\u62f7\u8d1d\u5b89\u88c5\u8bc1\u4e66",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"acmesh-\u8bc1\u4e66\u9881\u53d1"},"acme.sh \u8bc1\u4e66\u9881\u53d1"),(0,r.kt)("h2",{id:"\u5b89\u88c5acmesh"},"\u5b89\u88c5acme.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl  https://get.acme.sh | sh\n\n# \u91cd\u8f7d bashrc\nsource ~/.bashrc\n")),(0,r.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"acme.sh --upgrade")," \u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"acme.sh  --upgrade  --auto-upgrade")," \u81ea\u52a8\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"acme.sh --upgrade  --auto-upgrade  0")," \u5173\u95ed\u81ea\u52a8\u66f4\u65b0")),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u914d\u7f6e"},"\u6dfb\u52a0\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u4ee5\u4e0b\u4e3a DNS \u9a8c\u8bc1\uff0c\u662f\u901a\u8fc7\u914d\u7f6e\u4e00\u4e2a\u968f\u673a\u7684 TXT \u8bb0\u5f55\u6765\u9a8c\u8bc1\u7684")),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba9 ",(0,r.kt)("inlineCode",{parentName:"p"},"acme.sh")," \u6709\u6743\u9650\u81ea\u52a8\u6dfb\u52a0 DNS \u89e3\u6790\uff0c\u9700\u8981\u5728\u963f\u91cc\u4e91\u6dfb\u52a0\u4e00\u4e2a\u5b50\u7528\u6237\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u7528\u6237"),"\uff1aRAM \u8bbf\u95ee\u63a7\u5236-> \u4eba\u5458\u7ba1\u7406 -> \u521b\u5efa\u7528\u6237\uff08\u767b\u5f55\u540d\u548c\u663e\u793a\u540d\u968f\u4fbf\u586b\uff0c\u81ea\u5df1\u77e5\u9053\u8fd9\u662f\u54ea\u4e2a\u7528\u6237\u5c31\u884c\uff09")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6743\u9650"),"\uff1a\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"AliyunDNSFullAccess")," \u8be5\u6743\u9650\uff0c\u6765\u5141\u8bb8\u7ba1\u7406 DNS \u89e3\u6790")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa AccessKey"),"\uff1a\u5728\u8be5\u7528\u6237\u4e0b\u521b\u5efa accesskey\uff0c\u5e76\u5728\u4e0b\u9762 ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc")," \u4e2d\u6dfb\u52a0\u914d\u7f6e"),(0,r.kt)("p",{parentName:"li"},"\uff08\u6ce8\u610f\uff0c\u662f\u5728\u8be5\u5b50\u7528\u6237\u4e0b\u521b\u5efa\uff0c\u800c\u4e0d\u662fAccessKey \u7ba1\u7406\u4e0b\u521b\u5efa\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# .bashrc\nexport Ali_Key="AccessKeyId"\nexport Ali_Secret="AccessKeySecret"\n\n# shell\nsource ~./bashrc\n')),(0,r.kt)("h2",{id:"dns-\u9a8c\u8bc1"},"DNS \u9a8c\u8bc1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u4e00\u4e0b\u4ee5 baidu.com \u4e3a\u4f8b\u5b50\uff0c\u4f60\u9700\u8981\u6539\u6210\u4f60\u81ea\u5df1\u7684\u57df\u540d")),(0,r.kt)("h3",{id:"\u751f\u6210\u8bc1\u4e66"},"\u751f\u6210\u8bc1\u4e66"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"*.baidu.com")," \u8868\u793a\u9002\u7528\u4e8e\u6cdb\u57df\u540d\uff0c\u4e5f\u662f\u8bf4\u4f60\u7684\u6240\u6709\u4e8c\u7ea7\u57df\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"a.baidu.com")," ",(0,r.kt)("inlineCode",{parentName:"p"},"b.baidu.com")," \u90fd\u7528\u540c\u4e00\u4e2a\u8bc1\u4e66\uff0c\u4e0d\u9700\u8981\u4e00\u4e2a\u4e00\u4e2a\u914d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"acme.sh --issue --dns dns_ali -d baidu.com -d *.baidu.com\n")),(0,r.kt)("h3",{id:"zerossl"},"zerossl"),(0,r.kt)("p",null,"\u5728\u67d0\u4e2a\u7248\u672c\u4e2d\uff0c acme \u9ed8\u8ba4\u4f7f\u7528 zerossl \u4e86\uff0c\u8dd1\u4e0a\u9762\u7684\u547d\u4ee4\u5e94\u8be5\u4f1a\u6709\u63d0\u793a\uff0c\u53ef\u4ee5\u6839\u636e\u63d0\u793a\u6ce8\u518c zerossl"),(0,r.kt)("p",null,"\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"emial@gmail.com")," \u66ff\u6362\u6210\u4f60\u81ea\u5df1\u7684\u90ae\u7bb1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6ce8\u518c zerossl\nacme.sh --register-account -m emial@gmail.com --server zerossl\n\n# \u7136\u540e\u751f\u6210\u8bc1\u4e66\nacme.sh --server zerossl --issue --dns dns_ali -d baidu.com -d *.baidu.com\n")),(0,r.kt)("p",null,"\u8bc1\u4e66\u751f\u6210\u76ee\u5f55"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/root/.acme.sh/baidu.com/baidu.com.cer"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.acme.sh/baidu.com/baidu.com.key"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.acme.sh/baidu.com/ca.cer"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.acme.sh/baidu.com/fullchain.cer")),(0,r.kt)("p",null," \u6ce8\u610f\uff1anginx \u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u4e0a\u9762\u7684\u76ee\u5f55\uff0c\u56e0\u4e3a\u662f\u52a8\u6001\u7684\uff0c\u9700\u8981\u7ee7\u7eed\u64cd\u4f5c"),(0,r.kt)("h2",{id:"\u62f7\u8d1d\u5b89\u88c5\u8bc1\u4e66"},"\u62f7\u8d1d/\u5b89\u88c5\u8bc1\u4e66"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'acme.sh --installcert \\\n-d  baidu.com \\\n--key-file    /usr/local/nginx/ssl/baidu.com.key \\\n--fullchain-file /usr/local/nginx/ssl/fullchain.cer \\\n--reloadcmd  "service nginx force-reload"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"key-file")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"fullchain-file")," \u8868\u793a\u4f60\u9700\u8981\u5b89\u88c5\u8bc1\u4e66\u7684\u76ee\u5f55"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reloadcmd")," \u76f8\u5f53\u4e8e\u4e00\u4e2a\u91cd\u542f\u670d\u52a1\u7684\uff0c\u5f53\u8bc1\u4e66\u66f4\u65b0\u540e\uff0c\u9700\u8981\u901a\u8fc7\u91cd\u542f\u4f60\u7684 nginx \u6216\u8005 docker \u670d\u52a1\u4f7f\u5f97\u8bc1\u4e66\u751f\u6548\uff0c\u4f60\u9700\u8981\u81ea\u5df1\u914d\u7f6e\u5bf9\u5e94\u7684\u547d\u4ee4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f53 acme.sh \u66f4\u65b0\u8bc1\u4e66\u65f6\uff0c\u4f1a\u8fd0\u884c\u8be5\u547d\u4ee4\uff0c\u6765\u4f7f\u5f97\u65b0\u8bc1\u4e66\u751f\u6548")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Neilpang/acme.sh/wiki/%E8%AF%B4%E6%98%8E"},"acme.sh \u4e2d\u6587 wiki")))}m.isMDXComponent=!0}}]);