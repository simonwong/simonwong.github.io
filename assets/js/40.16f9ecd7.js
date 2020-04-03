(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{289:function(a,s,t){"use strict";t.r(s);var e=t(17),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker-入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门"}},[a._v("#")]),a._v(" Docker 入门")]),a._v(" "),t("h2",{attrs:{id:"镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[a._v("#")]),a._v(" 镜像加速")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("# /etc/docker/daemon.json\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://dockerhub.azk8s.cn"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://reg-mirror.qiniu.com"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("重启")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ systemctl daemon"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("reload\n$ systemctl restart docker\n")])])]),t("h2",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# image 文件构建阶段执行，执行结果会被打包进入 image 文件")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" npm install\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 容器启动后执行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CMD")]),a._v(" node index.js\n")])])]),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("service docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),a._v("                             "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 开启docker服务\nsystemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),a._v(" docker                           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 启动 docker 后台服务\nsystemctl daemon"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("reload                          "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 重启docker守护进程\nsystemctl restart docker                         "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 重启docker服务\ndocker pull jenkins"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("jenkins                      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" docker拉取镜像\ndocker images                                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 查看镜像列表\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a                                     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 查看容器"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("不加"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a查看正在运行的，加上"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a查看所有容器\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" 容器id                                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 删除容器\ndocker rmi 镜像id                                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 删除镜像\ndocker rmi REPOSITORY"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("TAR                        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 删除镜像 例：docker rmi button"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v2                        \ndocker stop 容器ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("容器别名                        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 关闭一个已启动容器 \ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),a._v(" 容器ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("容器别名                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 启动一个关闭的容器 \ndocker inspect 容器ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("容器别名                     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 查看一个容器的详情 \ndocker exec "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it 容器ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("容器别名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bash          "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" 进入容器内部\n")])])]),t("h3",{attrs:{id:"image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[a._v("#")]),a._v(" image")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("docker image ls")])]),a._v(" "),t("li",[t("p",[a._v("docker image rm [option] "),t("imageid")],1)])]),a._v(" "),t("h3",{attrs:{id:"container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[a._v("#")]),a._v(" container")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("docker container start")]),a._v(" "),t("p",[a._v("生成/启动容器，但不会重复生成容器；；； docker container run 会重复生成")])])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containerID]")]),a._v("\n")])])]),t("p",[a._v("更多参数:")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d ：在后台运行\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it : 容器的 shell 映射到当前的 shell ， 然后在本机窗口输入命令，会传入容器\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p 80:3000 ：将容器的 3000 端口映射到宿主机的 80 端口\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" : 容器停止运行后，自动删除容器文件\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("name xxx : 容器名字为 xxx\n")])])]),t("ul",[t("li",[t("p",[a._v("docker container stop")]),a._v(" "),t("p",[a._v("终止容器运行，相当于先发起 SIGTERM 信号，过段时间再发出 SIGKILL；；docker container kill 会直接发出 sigkill")])])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker container stop "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containerID]")]),a._v("\n")])])]),t("ul",[t("li",[t("p",[a._v("docker container exec")]),a._v(" "),t("p",[a._v("进入一个正在运行的 docker 容器")])])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker container exec "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containerID]")]),a._v(" bash\n")])])]),t("p",[a._v("通过 "),t("code",[a._v("ctrl + p +q")]),a._v(" 可以推出当前容器且不会关闭容器")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("docker container cp")]),a._v(" "),t("p",[a._v("从正在运行的 Docker 容器里，将文件拷贝到本机")])])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[containID]")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("to"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),t("h3",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" mysql:"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lib"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("own"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mysqldata\n")])])]),t("ul",[t("li")]),a._v(" "),t("h2",{attrs:{id:"docker-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-build"}},[a._v("#")]),a._v(" docker build")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker build "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[OPTIONS]")]),a._v(" PATH "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" URL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n")])])]),t("p",[a._v("exapmle")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("docker build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t my"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("image "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("f Dockerfile "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),t("h2",{attrs:{id:"数据挂载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据挂载"}},[a._v("#")]),a._v(" 数据挂载")]),a._v(" "),t("p",[a._v("数据挂载有三种方式")]),a._v(" "),t("h3",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[a._v("#")]),a._v(" volume")]),a._v(" "),t("p",[a._v("是由docker默认及推荐的挂载方式，volume由docker直接管理，同一个volume可以共享给多个容器使用，volume和容器的生命周期完全独立，容器删除时volume仍然存在。")]),a._v(" "),t("p",[a._v("缺点：volume 在宿主机上比较难定位，在宿主机上直接操作 volume 比较困难。")]),a._v(" "),t("h3",{attrs:{id:"bind-mount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind-mount"}},[a._v("#")]),a._v(" bind mount")]),a._v(" "),t("p",[a._v("是直接将宿主机文件系统上的文件路径映射到容器中，两边双向同步。")]),a._v(" "),t("p",[a._v("优点：可以直接访问，也可以被别的程序使用")]),a._v(" "),t("p",[a._v("缺点：可以把任何文件路径使用bind mount的方式绑定到容器中，这样有可能一些安全问题。")]),a._v(" "),t("h3",{attrs:{id:"tmpfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tmpfs"}},[a._v("#")]),a._v(" tmpfs")]),a._v(" "),t("p",[a._v("使用宿主机的内存作为存储，不会写到宿主机的文件系统中，和前两种区别较大。")]),a._v(" "),t("h2",{attrs:{id:"docker-网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-网络"}},[a._v("#")]),a._v(" docker 网络")]),a._v(" "),t("h3",{attrs:{id:"host-网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#host-网络"}},[a._v("#")]),a._v(" host 网络")]),a._v(" "),t("p",[a._v("将与宿主机共享网络，不需要再使用 -p 指定暴露接口。容器暴露的端口直接暴露的宿主机上。")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用 host 网络")]),a._v("\n$ docker run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("network host \\\nnginx\n")])])]),t("h3",{attrs:{id:"bridge-网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bridge-网络"}},[a._v("#")]),a._v(" bridge 网络")]),a._v(" "),t("p",[a._v("默认就是 bridge 网络。docker 在宿主机上创建了 docker0 的网桥")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看")]),a._v("\n$ ip addr show docker0\n")])])]),t("p",[a._v("可以发现宿主机的IP是"),t("code",[a._v("172.17.0.1")]),a._v(" 。就可以在nginx 容器中，通过这个ip 反向代理到宿主机")]),a._v(" "),t("h2",{attrs:{id:"alpine-镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alpine-镜像"}},[a._v("#")]),a._v(" Alpine 镜像")]),a._v(" "),t("p",[a._v("Alpine 镜像构建的容器，进入用不了bash ，用 sh")])])}),[],!1,null,null,null);s.default=r.exports}}]);