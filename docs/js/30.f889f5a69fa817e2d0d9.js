webpackJsonp([30],{"H0+O":function(s,a,t){s.exports=t("LCgU")},LCgU:function(s,a,t){var n=t("VU/8")(null,t("gLWX"),null,null,null);s.exports=n.exports},gLWX:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",{attrs:{id:"国际化"}},[t("a",{staticClass:"anchor",attrs:{href:"#cube-国际化-anchor","aria-hidden":"true"}},[t("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),s._v(" 国际化")]),s._v(" "),t("p",[s._v("cube-ui 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：")]),s._v(" "),s._m(0),s._v(" "),t("p",[s._v("或者按需引入")]),s._v(" "),s._m(1),s._v(" "),t("p",[s._v("cube-ui 会监听当前的语言类型，因此自动渲染组件对应的文案，同时缓存加载过的文案，在做组件语言切换的时候，如果语言包已经安装，cube-ui 直接取缓存的文案。类似伪代码如下：")]),s._v(" "),s._m(2),s._v(" "),t("p",[s._v("默认的中文语言包如下")]),s._v(" "),s._m(3)])},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 完整引入 cube-ui")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" CubeUI "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'cube-ui'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" enUSMessages "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'cube-ui/src/locale/lang/en-US'")]),s._v(" "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cube-ui 内置")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" jaJPMessages "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'../some/path/lang/ja-JP'")]),s._v(" "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 自己引入日语语言包")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" Locale = CubeUI.Locale\n  Vue.use(CubeUI)\n  Locale.use("),t("span",{attrs:{class:"hljs-string"}},[s._v("'en-US'")]),s._v(", enUSMessages)\n  Locale.use("),t("span",{attrs:{class:"hljs-string"}},[s._v("'ja-JP'")]),s._v(", jaJPMessages)\n\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 按需引入 ActionSheet")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { ActionSheet, Locale } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'cube-ui'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" enUSMessages "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'cube-ui/src/locale/lang/en-US'")]),s._v("\n\n  Vue.use(Locale)\n  Locale.use("),t("span",{attrs:{class:"hljs-string"}},[s._v("'en-US'")]),s._v(", enUSMessages)\n\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 按需引入 ActionSheet")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { ActionSheet, Locale } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'cube-ui'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" enUSMessages "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'cube-ui/src/locale/lang/en-US'")]),s._v("\n\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 默认加载中文语言包")]),s._v("\n  Vue.use(Locale)\n\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 点击切换英文语言包")]),s._v("\n  one.click("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v("{\n    Locale.use("),t("span",{attrs:{class:"hljs-string"}},[s._v("'en-US'")]),s._v(", enUSMessages)\n  })\n\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 再次切换回中文语言包")]),s._v("\n  another.click("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 直接从缓存取")]),s._v("\n    Locale.use("),t("span",{attrs:{class:"hljs-string"}},[s._v("'zh-CN'")]),s._v(")\n  })\n\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("cancel")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'取消'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("confirm")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'确认'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ok")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'确定'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("prev")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'上一步'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("next")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'下一步'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("selectText")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请选择'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("now")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'现在'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("selectTime")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'选择时间'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("today")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'今日'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("formatDate")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'M月D日'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("hours")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'点'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("minutes")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'分'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("validator")]),s._v(": {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'此为必填项'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("string")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入数字'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("array")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'数据类型应为数组'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请选择有效日期'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("email")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入有效邮箱'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tel")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入有效的手机号码'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入有效网址'")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("string")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'至少输入 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'不得小于 {{config}}'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("array")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请选择至少 {{config}} 项'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请选择 {{config | toLocaleDateString(\"yyyy年MM月dd日\")}} 之后的时间'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("email")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'至少输入 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tel")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'至少输入 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'至少输入 {{config}} 位字符'")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("string")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请勿超过 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请勿大于 {{config}}'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("array")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'最多选择 {{config}} 项'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请选择 {{config | toLocaleDateString(\"yyyy年MM月dd日\")}} 之前的时间'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("email")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请勿超过 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tel")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请勿超过 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请勿超过 {{config}} 位字符'")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("len")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("string")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'长度应等于 {{config}}'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("array")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请选择 {{config}} 项'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请选择 {{config | toLocaleDateString(\"yyyy年MM月dd日\")}} 之前的时间'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("email")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tel")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入 {{config}} 位字符'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'请输入 {{config}} 位字符'")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pattern")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'格式错误'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("custom")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'未通过校验'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("notWhitespace")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'空白内容无效'")]),s._v("\n    }\n  }\n\n")])])}]}}});