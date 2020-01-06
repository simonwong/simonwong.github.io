(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{235:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"提升开发体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提升开发体验"}},[s._v("#")]),s._v(" 提升开发体验")]),s._v(" "),a("h2",{attrs:{id:"npm-yarn-的镜像源配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-yarn-的镜像源配置"}},[s._v("#")]),s._v(" npm yarn 的镜像源配置")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org --global\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" disturl https://npm.taobao.org/dist --global\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org --global\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" disturl https://npm.taobao.org/dist --global\n")])])]),a("h2",{attrs:{id:"镜像源管理-nrm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像源管理-nrm"}},[s._v("#")]),s._v(" 镜像源管理 nrm")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g nrm\n\nnrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nnrm usr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"git-clone-提升速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-clone-提升速度"}},[s._v("#")]),s._v(" git clone 提升速度")]),s._v(" "),a("p",[s._v("git 代理到 代理工具端口")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy socks5://127.0.0.1:1080\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global https.proxy socks5://127.0.0.1:1080\n")])])]),a("p",[s._v("配置 hosts 文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hosts\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("151.101")]),s._v(".72.249 http://global-ssl.fastly.Net\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.30")]),s._v(".253.112 http://github.com\n")])])]),a("h2",{attrs:{id:"editorconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editorconfig"}},[s._v("#")]),s._v(" .editorconfig")]),s._v(" "),a("p",[s._v("配合 vscode 插件 EditorConfig 使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# http://editorconfig.org\nroot = true\n\n[*]\nindent_style = space\nindent_size = 4\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[*.md]\ntrim_trailing_whitespace = false\n\n[Makefile]\nindent_style = tab\n")])])]),a("h2",{attrs:{id:"jsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsconfig-json"}},[s._v("#")]),s._v(" jsconfig.json")]),s._v(" "),a("p",[s._v("当webpack 中设置了")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\nalias"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("为了在 vscode 中自动识别 @ 标示的路径，配置jsconfig.json 配置参考>> "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/jsconfig",target:"_blank",rel:"noopener noreferrer"}},[s._v("jsconfig.json"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// jsconfig.json / tsconfig.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baseUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"paths"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);