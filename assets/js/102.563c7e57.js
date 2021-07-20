(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{377:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("h2",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),s("blockquote",[s("p",[t._v("Undefined、Null、Boolean、String、Number、Symbol、Object")])]),t._v(" "),s("h3",{attrs:{id:"undefined、null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined、null"}},[t._v("#")]),t._v(" undefined、null")]),t._v(" "),s("p",[t._v("undefined是一个变量。并非关键字。建议使用void 0类获取undfined值。")]),t._v(" "),s("p",[t._v("null是关键字：“定义了但是为空”")]),t._v(" "),s("h3",{attrs:{id:"boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),s("p",[s("code",[t._v("true")]),t._v(" "),s("code",[t._v("false")])]),t._v(" "),s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),s("p",[t._v("字符串的最大长度是2^53-1")]),t._v(" "),s("p",[t._v("字符串是"),s("code",[t._v("UTF-16")]),t._v("编码，常用的"),s("code",[t._v("chartAt")]),t._v(" "),s("code",[t._v("charCodeAt")]),t._v(" "),s("code",[t._v("length")]),t._v("都是针对的UTF-16编码")]),t._v(" "),s("blockquote",[s("p",[t._v("0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）")])]),t._v(" "),s("p",[t._v("处理非BMP的字符，要小心。如"),s("code",[t._v("喆")])]),t._v(" "),s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),s("p",[t._v("有18437736874454810627(即 2^64-2^53+3) 个值")]),t._v(" "),s("ul",[s("li",[t._v("NaN，占用了9007199254740990")]),t._v(" "),s("li",[t._v("Infinity，无穷大")]),t._v(" "),s("li",[t._v("-Infinity，负无穷大")])]),t._v(" "),s("p",[s("code",[t._v("0.1 + 0.2 == 0.3")]),t._v("的比较方法"),s("code",[t._v("Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON")])]),t._v(" "),s("h3",{attrs:{id:"symbol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),s("p",[t._v("是一切非字符串的对象 key 的集合")]),t._v(" "),s("h3",{attrs:{id:"object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),s("p",[t._v("是一切有形和无形物体的总称。")]),t._v(" "),s("p",[t._v("是“属性的集合” key-value")]),t._v(" "),s("p",[t._v("基本类型和他们的对象类型：")]),t._v(" "),s("p",[t._v("Number、String、Boolean、Symbol")]),t._v(" "),s("p",[t._v("3 与 "),s("code",[t._v("new Number(3)")]),t._v("是完全不同的值。一个是Number类型，一个是对象类型。")]),t._v(" "),s("p",[t._v("前三个构造器是两用的。跟"),s("code",[t._v("new")]),t._v("搭配，产生对象，直接调用表示强制类型转换")]),t._v(" "),s("h3",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://file.wangsijie.top/share/chongxuefe/2019-02-1871bafbd2404dc3ffa5ccf5d0ba077720.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"stringtonumber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stringtonumber"}},[t._v("#")]),t._v(" StringToNumber")]),t._v(" "),s("p",[s("code",[t._v("parseInt")]),t._v("建议都穿入第二个参数")]),t._v(" "),s("p",[s("code",[t._v("parseFloat")]),t._v("直接吧原字符串作为十进制来解析")]),t._v(" "),s("p",[t._v("Number是比上面俩个更好的选择")]),t._v(" "),s("h3",{attrs:{id:"numbertostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numbertostring"}},[t._v("#")]),t._v(" NumberToString")]),t._v(" "),s("p",[t._v("基本是符合直觉的十进制转换")]),t._v(" "),s("h3",{attrs:{id:"装箱转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装箱转换"}},[t._v("#")]),t._v(" 装箱转换")]),t._v(" "),s("blockquote",[s("p",[t._v("把基本类型转换为对应的对象")])]),t._v(" "),s("p",[s("code",[t._v("Object(Symbol('a')) //=> Symbol {Symbol(a)}description: \"a\"__proto__: Symbol[[PrimitiveValue]]: Symbol(a)")])]),t._v(" "),s("p",[s("code",[t._v("Object.prototype.toString.call")]),t._v("可以准确识别对象的基本类型。")]),t._v(" "),s("p",[t._v("但是call本身会进行装箱操作，所以要typeof区分是基本类型，还是对象类型")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "Number"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "Object"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "[object Number]"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "[object Number]"')]),t._v("\n")])])]),s("h3",{attrs:{id:"拆箱转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆箱转换"}},[t._v("#")]),t._v(" 拆箱转换")]),t._v(" "),s("blockquote",[s("p",[t._v("把对象类型转换为基本类型")]),t._v(" "),s("p",[t._v("遵循“先拆箱再转换”")])]),t._v(" "),s("blockquote",[s("p",[t._v("拆箱转换会尝试调用"),s("code",[t._v("valueOf")]),t._v(" "),s("code",[t._v("toString")]),t._v("，如果都不存在，或者没有返回基本类型，就会抛出"),s("code",[t._v("TypeError")])])]),t._v(" "),s("p",[t._v("当做一些类型强制转换时，会进行拆箱转换。会有不同的顺序")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => valueOf --\x3e toString --\x3e TypeError")]),t._v("\nobj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => toString --\x3e valueOf --\x3e TypeError")]),t._v("\n")])])]),s("h3",{attrs:{id:"规范类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规范类型"}},[t._v("#")]),t._v(" 规范类型")]),t._v(" "),s("p",[t._v("除了七种语言类型，还有规范类型")]),t._v(" "),s("ul",[s("li",[t._v("List 和 Record：用于描述函数传参过程")]),t._v(" "),s("li",[t._v("Set：主要用于结束字符集等")]),t._v(" "),s("li",[t._v("Completion Record：用于描述异常、跳出等语句执行过程")]),t._v(" "),s("li",[t._v("Reference：用于描述对象属性访问、delete等")]),t._v(" "),s("li",[t._v("Lexical Environment 和 Environment Record：用于描述变量和作用域")]),t._v(" "),s("li",[t._v("Data Block：用于描述二进制数据")])]),t._v(" "),s("h2",{attrs:{id:"对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[t._v("#")]),t._v(" 对象")]),t._v(" "),s("p",[t._v("对象的特点")]),t._v(" "),s("ul",[s("li",[t._v("对象具有唯一标识性：具有唯一标识的内存地址")]),t._v(" "),s("li",[t._v("对象有状态：同一对象处于不同的状态")]),t._v(" "),s("li",[t._v("对象具有行为：对象的状态可能因为他的行为产生变迁")])]),t._v(" "),s("blockquote",[s("p",[t._v("对象独有的特色："),s("strong",[t._v("对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力")])])]),t._v(" "),s("h2",{attrs:{id:"类与原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类与原型"}},[t._v("#")]),t._v(" 类与原型")]),t._v(" "),s("blockquote",[s("p",[t._v("基于类的编程语言 C++ 、 Java 等")]),t._v(" "),s("p",[t._v("基于原型 JavaScript 等")])]),t._v(" "),s("p",[t._v("原型系统的“复制操作”思路：")]),t._v(" "),s("ul",[s("li",[t._v("新对象持有一个原型的引用：JavaScript")]),t._v(" "),s("li",[t._v("切实地复制对象，且无关联")])]),t._v(" "),s("h3",{attrs:{id:"javascript的原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript的原型"}},[t._v("#")]),t._v(" JavaScript的原型")]),t._v(" "),s("blockquote",[s("p",[t._v("如果所有对象都有私有字段 [[prototype]] ，就是对象的原型")]),t._v(" "),s("p",[t._v("读取一个属性，如果对象本身没有，就会继续访问对象的原型，知道原型为空或找到")])]),t._v(" "),s("p",[t._v("ES6 访问操作原型")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Object.create")]),t._v(" 根据指定的原型创建新对象，原型可以是 null")]),t._v(" "),s("li",[s("code",[t._v("Object.getPrototypeOf")]),t._v(" 获得一个对象的原型")]),t._v(" "),s("li",[s("code",[t._v("Object.setPrototypeOf")]),t._v(" 设置一个对象的原型")])]),t._v(" "),s("h3",{attrs:{id:"早期的原型和类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#早期的原型和类"}},[t._v("#")]),t._v(" 早期的原型和类")]),t._v(" "),s("p",[t._v("模拟类")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("p2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("c1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("p2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这种方式的p1、p2属性将被暴露在o1中")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nc2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nc2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("p2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("c2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("p2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这种方式的p1、p2属性不会暴露")]),t._v("\n")])])]),s("h3",{attrs:{id:"es6中的类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6中的类"}},[t._v("#")]),t._v(" ES6中的类")]),t._v(" "),s("h2",{attrs:{id:"对象的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象的分类"}},[t._v("#")]),t._v(" 对象的分类")]),t._v(" "),s("ul",[s("li",[t._v("宿主对象")]),t._v(" "),s("li",[t._v("内置对象\n"),s("ul",[s("li",[t._v("固有对象")]),t._v(" "),s("li",[t._v("原生对象")]),t._v(" "),s("li",[t._v("普通对象")])])])]),t._v(" "),s("h3",{attrs:{id:"宿主对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宿主对象"}},[t._v("#")]),t._v(" 宿主对象")]),t._v(" "),s("p",[t._v("比如浏览器环境中的宿主。")]),t._v(" "),s("p",[t._v("window上的属性一部分来自 JavaScript 语言，一部分来自浏览器。")]),t._v(" "),s("p",[t._v("又分为固有的和用户创建的。"),s("code",[t._v("document.createElement")]),t._v(" 可以创建一些 dom 对象。")]),t._v(" "),s("p",[t._v("还会提供一些构造器，比如 "),s("code",[t._v("new Image")])]),t._v(" "),s("h3",{attrs:{id:"内置对象·固有对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置对象·固有对象"}},[t._v("#")]),t._v(" 内置对象·固有对象")]),t._v(" "),s("p",[t._v("由标准规定，随着 JavaScript 运行时创建而自动创建的实例")]),t._v(" "),s("h3",{attrs:{id:"内置对象·原生对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置对象·原生对象"}},[t._v("#")]),t._v(" 内置对象·原生对象")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://file.wangsijie.top/share/chongxuefe/07f7826ffeb895e2e8a59dd186cf7758.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("几乎所有这些构造器的能力都是无法用纯js代码实现的，也无法用 class/extend 继承")])]),t._v(" "),s("h3",{attrs:{id:"内置对象·普通对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置对象·普通对象"}},[t._v("#")]),t._v(" 内置对象·普通对象")]),t._v(" "),s("h3",{attrs:{id:"用对象来模拟函数与构造器-函数对象和构造器对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用对象来模拟函数与构造器-函数对象和构造器对象"}},[t._v("#")]),t._v(" 用对象来模拟函数与构造器：函数对象和构造器对象")]),t._v(" "),s("blockquote",[s("p",[t._v("函数对象：具有 [[call]] 私有字段的对象")]),t._v(" "),s("p",[t._v("构造器对象：具有 [[construct]] 的对象")])]),t._v(" "),s("h2",{attrs:{id:"javascript-的执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-的执行"}},[t._v("#")]),t._v(" JavaScript 的执行")]),t._v(" "),s("h3",{attrs:{id:"事件循环-宏观任务与微观任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环-宏观任务与微观任务"}},[t._v("#")]),t._v(" 事件循环 - 宏观任务与微观任务")]),t._v(" "),s("p",[t._v("宏观任务：由宿主发起的")]),t._v(" "),s("p",[t._v("微观任务：由 JS 引擎发起的")]),t._v(" "),s("blockquote",[s("p",[t._v("JavaScript 引擎等待宿主环境分配宏观任务，通常等待的行为都是一个事件循环")]),t._v(" "),s("p",[t._v("整个循环做的事情基本就是反复“等待 - 执行”")])]),t._v(" "),s("p",[t._v("每次执行过程，其实就是一个宏观任务，所以"),s("strong",[t._v("宏观任务的列队")]),t._v("就相当于事件循环")]),t._v(" "),s("p",[t._v("宏观任务中，Promise 也会产生异步代码，JS需要保证这些异步代码在一个宏观任务中执行。")]),t._v(" "),s("p",[t._v("每个宏观任务又包含一个微观任务列队")]),t._v(" "),s("h3",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://file.wangsijie.top/share/chongxuefe/68f50c00d475a7d6d8c7eef6a91b2152.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("其实只是一个绑定了"),s("strong",[t._v("执行环境")]),t._v("的函数")])]),t._v(" "),s("ul",[s("li",[t._v("环境部分\n"),s("ul",[s("li",[t._v("环境：函数的词法环境（执行上下文的一部分）")]),t._v(" "),s("li",[t._v("标识符列表：函数中用到的未申明变量")])])]),t._v(" "),s("li",[t._v("表达式部分：函数体")])]),t._v(" "),s("h3",{attrs:{id:"执行上下文-执行的基础设施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-执行的基础设施"}},[t._v("#")]),t._v(" 执行上下文：执行的基础设施")]),t._v(" "),s("ul",[s("li",[t._v("Lexical environment：词法环境，当获取变量或者 this 值时使用")]),t._v(" "),s("li",[t._v("variable environment：变量环境，当申明变量时使用")]),t._v(" "),s("li",[t._v("code evalution state：用于恢复代码执行位置")]),t._v(" "),s("li",[t._v("Function：执行的任务是函数时使用，表示正在被执行的函数")]),t._v(" "),s("li",[t._v("ScriptOrMoudle：执行的任务是脚本或模板时使用，表示正在执行的代码")]),t._v(" "),s("li",[t._v("Realm：使用的基础库和内置对象实例")]),t._v(" "),s("li",[t._v("Generator：仅生成器上下文有这个属性，表示当前生成器")])]),t._v(" "),s("h3",{attrs:{id:"this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),s("blockquote",[s("p",[t._v("普通函数的 this 值由“调用它所使用的引用”所决定")])]),t._v(" "),s("h3",{attrs:{id:"completion-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#completion-类型"}},[t._v("#")]),t._v(" Completion 类型")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),s("p",[t._v("Completion Record 用于描述异常、跳出等语句执行过程，表示一个语句执行完之后的结果")]),t._v(" "),s("ul",[s("li",[t._v("[[type]] 表示完成的类型，有 break continue return throw normal 几种")]),t._v(" "),s("li",[t._v("[[value]] 表示语句的返回值，如果语句没有，则是 empty")]),t._v(" "),s("li",[t._v("[[target]] 表示语句的目标，通常是一个 JavaScript 标签")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://file.wangsijie.top/share/chongxuefe/98ce53be306344c018cddd6c083392d5.jpg",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://file.wangsijie.top/share/chongxuefe/7760027d7ee09bdc8ec140efa9caf1d3.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("穿透：穿过当前这一层，到外面那一层，向外逐层寻找可以“消费”的那一层")]),t._v(" "),s("li",[t._v("消费：这一层就处理了")])]),t._v(" "),s("h2",{attrs:{id:"词法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法"}},[t._v("#")]),t._v(" 词法")]),t._v(" "),s("h3",{attrs:{id:"whitespace-空白字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whitespace-空白字符"}},[t._v("#")]),t._v(" WhiteSpace 空白字符")]),t._v(" "),s("p",[t._v("js 支持所有的 Unicode 中的空格分类下的空格")]),t._v(" "),s("h3",{attrs:{id:"lineterminator-换行符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lineterminator-换行符"}},[t._v("#")]),t._v(" LineTerminator 换行符")]),t._v(" "),s("p",[t._v("换行符回影响 js 的两个重要语法特性：自动插入分号和” no line terminator “规则")]),t._v(" "),s("h3",{attrs:{id:"comment-注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comment-注释"}},[t._v("#")]),t._v(" Comment 注释")]),t._v(" "),s("h3",{attrs:{id:"token-词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-词"}},[t._v("#")]),t._v(" Token 词")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("IndentifierName 标识符名称，变量名")])]),t._v(" "),s("li",[s("p",[t._v("Punctuator 符号，运算符和大括号等")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{ ( ) [ ] . ... ; , < > <= >= == != === !== + - * % ** ++ -- << >> >>> & | ^ ! ~ && || ? : = += -= *= %= **= <<= >>= >>>= &= |= ^= => / /= }\n")])])])]),t._v(" "),s("li",[s("p",[t._v("NumericLiteral 数字直接量，数字")]),t._v(" "),s("p",[s("code",[t._v("12.toString()")]),t._v(" 12. 会被当作数字的一部分，所以会报错，可以加个空格，让点成为单独的token "),s("code",[t._v("12 .toString()")])])]),t._v(" "),s("li",[s("p",[t._v("StringLiteral 字符串直接量，单双引号引起来的直接量")])]),t._v(" "),s("li",[s("p",[t._v("RegularExpressionLiteral 正则表达式直接量")])]),t._v(" "),s("li",[s("p",[t._v("Template 字符串模板")])])]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("h3",{attrs:{id:"分号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分号"}},[t._v("#")]),t._v(" 分号")]),t._v(" "),s("p",[t._v("自动插入分号规则：")]),t._v(" "),s("ul",[s("li",[t._v("有换行符，且下一个符号是不符合语法的，那么就尝试插入分号")]),t._v(" "),s("li",[t._v("有换行符，且语法中规定地处不能有换行符（即 no LineTerminator here 规则），那么就自动插入分号")]),t._v(" "),s("li",[t._v("源代码借书处，不能形成完成的脚本或者模块结构，那么就自动插入分号")])]),t._v(" "),s("p",[t._v("no LineTerminator here ，不能插入换行的规则：")]),t._v(" "),s("ul",[s("li",[t._v("带标签的 continue  "),s("code",[t._v("continue /*no LineTerminator here*/ outter")])]),t._v(" "),s("li",[t._v("带标签的 break "),s("code",[t._v("break /*no LineTerminator here*/ outter")])]),t._v(" "),s("li",[t._v("return 后 "),s("code",[t._v("return /*no LineTerminator here*/1;")])]),t._v(" "),s("li",[t._v("后自增、后自减运算符前 "),s("code",[t._v("i/*no LineTerminator here*/++")])]),t._v(" "),s("li",[t._v("throw 和 Exception 之间 "),s("code",[t._v('throw/*no LineTerminator here*/new Exception("error")')])]),t._v(" "),s("li",[t._v("凡是 async 关键字 后面 "),s("code",[t._v("async/*no LineTerminator here*/x => x*x")])]),t._v(" "),s("li",[t._v("箭头函数的箭头前 "),s("code",[t._v("const f = x/*no LineTerminator here*/=> x*x")])]),t._v(" "),s("li",[t._v("yield 之后 "),s("code",[t._v("yield/*no LineTerminator here*/i++;")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);