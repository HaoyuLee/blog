(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{432:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"element-ui的autocomplete组件下拉样式覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui的autocomplete组件下拉样式覆盖"}},[t._v("#")]),t._v(" element-ui的autocomplete组件下拉样式覆盖")]),t._v(" "),s("p",[t._v("很久没写vue2和element-ui相关代码了，入职新公司以来，近期项目还是这个技术栈。\n周六有个需求，el-autocomplete组件因为在table中使用，宽度很小，因为组件默认下拉内容和input同等宽度，就产生了下拉内容显示不全的问题。现在记录一下。")]),t._v(" "),s("h2",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),s("ol",[s("li",[t._v("使用popper-class属性，给下拉内容增加自定义class")]),t._v(" "),s("li",[t._v("定义样式width，覆盖width等于input宽度")])]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// diy.scss")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".popper_auto_width ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在js中引入")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'diy.scss'")]),t._v("\n")])])]),s("p",[t._v("现在el-autocomplete的下拉内容的宽度就会根据内容自适应而不是与input保持一致了")]),t._v(" "),s("h2",{attrs:{id:"其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[t._v("#")]),t._v(" 其他问题")]),t._v(" "),s("ol",[s("li",[t._v("为什么样式不在vue组件中")])]),t._v(" "),s("blockquote",[s("p",[t._v("popper组件是挂载在body标签下，组件中的样式不生效\n除非style标签不写scoped，但是同样是全局生效，不好管理")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("为什么不用deep选择器")])]),t._v(" "),s("blockquote",[s("p",[t._v("因为问题1")])])])}),[],!1,null,null,null);s.default=n.exports}}]);