"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[2971],{9613:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return u}});var t=r(9496);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=l,m=s["".concat(c,".").concat(u)]||s[u]||k[u]||a;return r?t.createElement(m,o(o({ref:n},d),{},{components:r})):t.createElement(m,o({ref:n},d))}));function u(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1154:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var t=r(5900),l=r(4750),a=(r(9496),r(9613)),o=["components"],i={},c="Docker \u5165\u95e8",p={unversionedId:"services/Docker\u57fa\u7840",id:"services/Docker\u57fa\u7840",title:"Docker \u5165\u95e8",description:"\u955c\u50cf\u52a0\u901f",source:"@site/docs/services/Docker\u57fa\u7840.md",sourceDirName:"services",slug:"/services/Docker\u57fa\u7840",permalink:"/docs/services/Docker\u57fa\u7840",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/services/Docker\u57fa\u7840.md",tags:[],version:"current",frontMatter:{},sidebar:"services",previous:{title:"nginx\u914d\u7f6ehttps",permalink:"/docs/services/nginx\u914d\u7f6ehttps"},next:{title:"Docker \u4e0a\u5404\u79cd\u955c\u50cf\u7684\u4f7f\u7528",permalink:"/docs/services/Docker\u4e0a\u5404\u79cd\u955c\u50cf\u7684\u4f7f\u7528"}},d=[{value:"\u955c\u50cf\u52a0\u901f",id:"\u955c\u50cf\u52a0\u901f",children:[],level:2},{value:"Dockerfile",id:"dockerfile",children:[],level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",children:[{value:"\u8d44\u6e90\u6e05\u7406\u547d\u4ee4",id:"\u8d44\u6e90\u6e05\u7406\u547d\u4ee4",children:[],level:3},{value:"image",id:"image",children:[],level:3},{value:"container",id:"container",children:[],level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[],level:3}],level:2},{value:"docker build",id:"docker-build",children:[],level:2},{value:"\u6570\u636e\u6302\u8f7d",id:"\u6570\u636e\u6302\u8f7d",children:[{value:"volume",id:"volume",children:[],level:3},{value:"bind mount",id:"bind-mount",children:[],level:3},{value:"tmpfs",id:"tmpfs",children:[],level:3}],level:2},{value:"docker \u7f51\u7edc",id:"docker-\u7f51\u7edc",children:[{value:"host \u7f51\u7edc",id:"host-\u7f51\u7edc",children:[],level:3},{value:"bridge \u7f51\u7edc",id:"bridge-\u7f51\u7edc",children:[],level:3}],level:2},{value:"Alpine \u955c\u50cf",id:"alpine-\u955c\u50cf",children:[],level:2}],k={toc:d};function s(e){var n=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-\u5165\u95e8"},"Docker \u5165\u95e8"),(0,a.kt)("h2",{id:"\u955c\u50cf\u52a0\u901f"},"\u955c\u50cf\u52a0\u901f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# /etc/docker/daemon.json\n{\n  "registry-mirrors": [\n    "https://dockerhub.azk8s.cn",\n    "https://reg-mirror.qiniu.com"\n  ]\n}\n')),(0,a.kt)("p",null,"\u91cd\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$ systemctl daemon-reload\n$ systemctl restart docker\n")),(0,a.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"\n# image \u6587\u4ef6\u6784\u5efa\u9636\u6bb5\u6267\u884c\uff0c\u6267\u884c\u7ed3\u679c\u4f1a\u88ab\u6253\u5305\u8fdb\u5165 image \u6587\u4ef6\nRUN npm install\n\n# \u5bb9\u5668\u542f\u52a8\u540e\u6267\u884c\nCMD node index.js\n")),(0,a.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"service docker start                             # \u5f00\u542fdocker\u670d\u52a1\nsystemctl start docker                           # \u542f\u52a8 docker \u540e\u53f0\u670d\u52a1\nsystemctl daemon-reload                          # \u91cd\u542fdocker\u5b88\u62a4\u8fdb\u7a0b\nsystemctl restart docker                         # \u91cd\u542fdocker\u670d\u52a1\ndocker pull jenkins/jenkins                      # docker\u62c9\u53d6\u955c\u50cf\ndocker images                                    # \u67e5\u770b\u955c\u50cf\u5217\u8868\ndocker ps -a                                     # \u67e5\u770b\u5bb9\u5668,\u4e0d\u52a0-a\u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\uff0c\u52a0\u4e0a-a\u67e5\u770b\u6240\u6709\u5bb9\u5668                   \ndocker stop [container ID/alias]                 # \u5173\u95ed\u4e00\u4e2a\u5df2\u542f\u52a8\u5bb9\u5668 \ndocker start [container ID/alias]                 # \u542f\u52a8\u4e00\u4e2a\u5173\u95ed\u7684\u5bb9\u5668 \ndocker restart [container ID/alias]              # \u91cd\u542f\u5bb9\u5668 \ndocker inspect [container ID/alias]              #/ \u67e5\u770b\u4e00\u4e2a\u5bb9\u5668\u7684\u8be6\u60c5 \ndocker exec -it [container ID/alias] /bin/bash    # \u8fdb\u5165\u5bb9\u5668\u5185\u90e8\ndocker logs [container ID/alias]\n")),(0,a.kt)("h3",{id:"\u8d44\u6e90\u6e05\u7406\u547d\u4ee4"},"\u8d44\u6e90\u6e05\u7406\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker rm [container id]                         # \u5220\u9664\u5bb9\u5668\ndocker rmi [image id]                            # \u5220\u9664\u955c\u50cf\ndocker rmi REPOSITORY/TAR                        # \u5220\u9664\u955c\u50cf \u4f8b\uff1adocker rmi button-api/v2     \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker container prune # \u5220\u9664\u6240\u6709\u9000\u51fa\u72b6\u6001\u7684\u5bb9\u5668\ndocker volume prune # \u5220\u9664\u672a\u88ab\u4f7f\u7528\u7684\u6570\u636e\u5377\ndocker image prune # \u5220\u9664 dangling \u6216\u6240\u6709\u672a\u88ab\u4f7f\u7528\u7684\u955c\u50cf\n\ndocker system prune #\u5220\u9664\u5df2\u505c\u6b62\u7684\u5bb9\u5668\u3001dangling \u955c\u50cf\u3001\u672a\u88ab\u5bb9\u5668\u5f15\u7528\u7684 network \u548c\u6784\u5efa\u8fc7\u7a0b\u4e2d\u7684 cache\n# \u5b89\u5168\u8d77\u89c1\uff0c\u8fd9\u4e2a\u547d\u4ee4\u9ed8\u8ba4\u4e0d\u4f1a\u5220\u9664\u90a3\u4e9b\u672a\u88ab\u4efb\u4f55\u5bb9\u5668\u5f15\u7528\u7684\u6570\u636e\u5377\uff0c\u5982\u679c\u9700\u8981\u540c\u65f6\u5220\u9664\u8fd9\u4e9b\u6570\u636e\u5377\uff0c\u4f60\u9700\u8981\u663e\u5f0f\u7684\u6307\u5b9a --volumns \u53c2\u6570\ndocker system prune --all --force --volumns #\u8fd9\u6b21\u4e0d\u4ec5\u4f1a\u5220\u9664\u6570\u636e\u5377\uff0c\u800c\u4e14\u8fde\u786e\u8ba4\u7684\u8fc7\u7a0b\u90fd\u6ca1\u6709\u4e86\uff01\u6ce8\u610f\uff0c\u4f7f\u7528 --all \u53c2\u6570\u540e\u4f1a\u5220\u9664\u6240\u6709\u672a\u88ab\u5f15\u7528\u7684\u955c\u50cf\u800c\u4e0d\u4ec5\u4ec5\u662f dangling \u955c\u50cf\n")),(0,a.kt)("h3",{id:"image"},"image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker image ls"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker image rm [option] <imageid>")))),(0,a.kt)("h3",{id:"container"},"container"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker container start")),(0,a.kt)("p",{parentName:"li"},"  \u751f\u6210/\u542f\u52a8\u5bb9\u5668\uff0c\u4f46\u4e0d\u4f1a\u91cd\u590d\u751f\u6210\u5bb9\u5668\uff1b\uff1b\uff1b docker container run \u4f1a\u91cd\u590d\u751f\u6210"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$ docker container start [containerID]\n")),(0,a.kt)("p",null,"\u66f4\u591a\u53c2\u6570:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"-d \uff1a\u5728\u540e\u53f0\u8fd0\u884c\n-it : \u5bb9\u5668\u7684 shell \u6620\u5c04\u5230\u5f53\u524d\u7684 shell \uff0c \u7136\u540e\u5728\u672c\u673a\u7a97\u53e3\u8f93\u5165\u547d\u4ee4\uff0c\u4f1a\u4f20\u5165\u5bb9\u5668\n-p 80:3000 \uff1a\u5c06\u5bb9\u5668\u7684 3000 \u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7684 80 \u7aef\u53e3\n--rm : \u5bb9\u5668\u505c\u6b62\u8fd0\u884c\u540e\uff0c\u81ea\u52a8\u5220\u9664\u5bb9\u5668\u6587\u4ef6\n--name xxx : \u5bb9\u5668\u540d\u5b57\u4e3a xxx\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker container stop")),(0,a.kt)("p",{parentName:"li"},"  \u7ec8\u6b62\u5bb9\u5668\u8fd0\u884c\uff0c\u76f8\u5f53\u4e8e\u5148\u53d1\u8d77 SIGTERM \u4fe1\u53f7\uff0c\u8fc7\u6bb5\u65f6\u95f4\u518d\u53d1\u51fa SIGKILL\uff1b\uff1bdocker container kill \u4f1a\u76f4\u63a5\u53d1\u51fa sigkill"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$ docker container stop [containerID]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker container exec")),(0,a.kt)("p",{parentName:"li"},"  \u8fdb\u5165\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684 docker \u5bb9\u5668"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$ docker container exec -it [containerID] bash\n")),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl + p +q")," \u53ef\u4ee5\u63a8\u51fa\u5f53\u524d\u5bb9\u5668\u4e14\u4e0d\u4f1a\u5173\u95ed\u5bb9\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker container cp")),(0,a.kt)("p",{parentName:"li"},"  \u4ece\u6b63\u5728\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u91cc\uff0c\u5c06\u6587\u4ef6\u62f7\u8d1d\u5230\u672c\u673a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$ docker container cp [containID]:[/path/to/file] .\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker cp mysql:/var/lib/mysql /var/own/mysqldata\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"docker-build"},"docker build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$ docker build [OPTIONS] PATH | URL | -\n")),(0,a.kt)("p",null,"exapmle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"docker build -t my-image -f Dockerfile .\n")),(0,a.kt)("h2",{id:"\u6570\u636e\u6302\u8f7d"},"\u6570\u636e\u6302\u8f7d"),(0,a.kt)("p",null,"\u6570\u636e\u6302\u8f7d\u6709\u4e09\u79cd\u65b9\u5f0f"),(0,a.kt)("h3",{id:"volume"},"volume"),(0,a.kt)("p",null,"\u662f\u7531docker\u9ed8\u8ba4\u53ca\u63a8\u8350\u7684\u6302\u8f7d\u65b9\u5f0f\uff0cvolume\u7531docker\u76f4\u63a5\u7ba1\u7406\uff0c\u540c\u4e00\u4e2avolume\u53ef\u4ee5\u5171\u4eab\u7ed9\u591a\u4e2a\u5bb9\u5668\u4f7f\u7528\uff0cvolume\u548c\u5bb9\u5668\u7684\u751f\u547d\u5468\u671f\u5b8c\u5168\u72ec\u7acb\uff0c\u5bb9\u5668\u5220\u9664\u65f6volume\u4ecd\u7136\u5b58\u5728\u3002"),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1avolume \u5728\u5bbf\u4e3b\u673a\u4e0a\u6bd4\u8f83\u96be\u5b9a\u4f4d\uff0c\u5728\u5bbf\u4e3b\u673a\u4e0a\u76f4\u63a5\u64cd\u4f5c volume \u6bd4\u8f83\u56f0\u96be\u3002"),(0,a.kt)("h3",{id:"bind-mount"},"bind mount"),(0,a.kt)("p",null,"\u662f\u76f4\u63a5\u5c06\u5bbf\u4e3b\u673a\u6587\u4ef6\u7cfb\u7edf\u4e0a\u7684\u6587\u4ef6\u8def\u5f84\u6620\u5c04\u5230\u5bb9\u5668\u4e2d\uff0c\u4e24\u8fb9\u53cc\u5411\u540c\u6b65\u3002"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff0c\u4e5f\u53ef\u4ee5\u88ab\u522b\u7684\u7a0b\u5e8f\u4f7f\u7528"),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a\u53ef\u4ee5\u628a\u4efb\u4f55\u6587\u4ef6\u8def\u5f84\u4f7f\u7528bind mount\u7684\u65b9\u5f0f\u7ed1\u5b9a\u5230\u5bb9\u5668\u4e2d\uff0c\u8fd9\u6837\u6709\u53ef\u80fd\u4e00\u4e9b\u5b89\u5168\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"tmpfs"},"tmpfs"),(0,a.kt)("p",null,"\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684\u5185\u5b58\u4f5c\u4e3a\u5b58\u50a8\uff0c\u4e0d\u4f1a\u5199\u5230\u5bbf\u4e3b\u673a\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u548c\u524d\u4e24\u79cd\u533a\u522b\u8f83\u5927\u3002"),(0,a.kt)("h2",{id:"docker-\u7f51\u7edc"},"docker \u7f51\u7edc"),(0,a.kt)("h3",{id:"host-\u7f51\u7edc"},"host \u7f51\u7edc"),(0,a.kt)("p",null,"\u5c06\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u7f51\u7edc\uff0c\u4e0d\u9700\u8981\u518d\u4f7f\u7528 -p \u6307\u5b9a\u66b4\u9732\u63a5\u53e3\u3002\u5bb9\u5668\u66b4\u9732\u7684\u7aef\u53e3\u76f4\u63a5\u66b4\u9732\u7684\u5bbf\u4e3b\u673a\u4e0a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# \u4f7f\u7528 host \u7f51\u7edc\n$ docker run -d \\\n--network host \\\nnginx\n")),(0,a.kt)("h3",{id:"bridge-\u7f51\u7edc"},"bridge \u7f51\u7edc"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u5c31\u662f bridge \u7f51\u7edc\u3002docker \u5728\u5bbf\u4e3b\u673a\u4e0a\u521b\u5efa\u4e86 docker0 \u7684\u7f51\u6865"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# \u67e5\u770b\n$ ip addr show docker0\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\u5bbf\u4e3b\u673a\u7684IP\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"172.17.0.1")," \u3002\u5c31\u53ef\u4ee5\u5728nginx \u5bb9\u5668\u4e2d\uff0c\u901a\u8fc7\u8fd9\u4e2aip \u53cd\u5411\u4ee3\u7406\u5230\u5bbf\u4e3b\u673a"),(0,a.kt)("h2",{id:"alpine-\u955c\u50cf"},"Alpine \u955c\u50cf"),(0,a.kt)("p",null,"Alpine \u955c\u50cf\u6784\u5efa\u7684\u5bb9\u5668\uff0c\u8fdb\u5165\u7528\u4e0d\u4e86bash \uff0c\u7528 sh"))}s.isMDXComponent=!0}}]);