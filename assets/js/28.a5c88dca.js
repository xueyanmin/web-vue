(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{570:function(s,a,t){s.exports=t.p+"assets/img/1.index.ac61ac6c.png"},703:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"源码概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码概览"}},[s._v("#")]),s._v(" 源码概览")]),s._v(" "),e("xminder",{attrs:{tipkey:"b"}}),s._v(" "),e("p",[e("img",{attrs:{src:t(570),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"源码调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码调试"}},[s._v("#")]),s._v(" 源码调试")]),s._v(" "),e("ul",[e("li",[s._v("下载 vue3.x")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/vuejs/core\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("开启 source map 模式")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n...\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node scripts/dev.js --sourcemap"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("打包")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm run dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("使用 live-server(需安装 vscode 插件) 打开 examples 目录下的 demo 文件")])]),s._v(" "),e("p",[s._v("用户使用vue3.x")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("createApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ElementPlus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" locale "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"流程概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程概述"}},[s._v("#")]),s._v(" 流程概述")]),s._v(" "),e("p",[s._v("createApp会在内部通过执行createRenderer函数返回一个对象")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("createApp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("createAppApi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("createApp(App)实际上就是执行")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("createAppApi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("返回一个对象")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n  use:相关函数,\n  mount:相关函数,\n  ...\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("执行mount，会依次将根节点生成vnode,然后调用上述render函数")]),s._v(" "),e("p",[s._v("render函数通过patch将递归遍历整个项目节点，根据不通类型进入不通函数处理")]),s._v(" "),e("p",[s._v("如果是组件节点，会通过创建组件实例--\x3e设置组件实例（期间会调用setup函数）--\x3e完成组件实例的设置后查看是否需要编译--\x3e设置并运行带有副作用的渲染函数--\x3e通过effect的update调用render函数")]),s._v(" "),e("p",[s._v("上述组件在是否需要编译的地方如果需要编译，会通过compiler函数依次执行parse --\x3e ast -_> gencode --\x3e render函数")]),s._v(" "),e("p",[s._v("通过上述递归方式将所有组件通过render函数渲染一边后，就能实现vue3.x的整个运行流程")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);