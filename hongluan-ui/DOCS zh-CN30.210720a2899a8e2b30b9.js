(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/notification.md?vue&type=template&id=b427ae06

var notificationvue_type_template_id_b427ae06_hoisted_1 = {
  class: "doc-main-content"
};
var notificationvue_type_template_id_b427ae06_hoisted_2 = {
  class: "doc-content"
};

var notificationvue_type_template_id_b427ae06_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "notification-tong-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#notification-tong-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Notification 通知")], -1);

var notificationvue_type_template_id_b427ae06_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "悬浮出现在页面角落，显示全局的通知提醒消息。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "ji-ben-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-yong-fa"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基本用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "适用性广泛的通知栏", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Notification 组件提供通知功能，Element Plus 注册了"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("方法，接收一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字面量参数，在最简单的情况下，你可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字段和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，可以控制关闭的时间间隔，特别的是，如果设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，则不会自动关闭。注意："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("接收一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，单位为毫秒，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "4500"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button\n    plain\n    @click=\"open1\">\n    可自动关闭\n  </hl-button>\n  <hl-button\n    plain\n    @click=\"open2\">\n    不会自动关闭\n    </hl-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: '标题名称',\n          message: h('p', { style: 'color: teal'}, '在引入 Hongluan UI Library 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）')\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: '提示',\n          message: '这是一条不会自动关闭的消息',\n          icon:'inbox',\n          duration: 0\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "dai-you-qing-xiang-xing"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-you-qing-xiang-xing"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 带有倾向性")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Hongluan ui 为 Notification 组件准备了四种通知类型："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。如有特殊icon，请直接设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("填写icon库中的图标名称，如：open2 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "inbox"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(",通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字段的情况下像"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "open3"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("那样直接调用。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button\n    plain\n    @click=\"open1\">\n    成功\n  </hl-button>\n  <hl-button\n    plain\n    @click=\"open2\">\n    警告\n  </hl-button>\n  <hl-button\n    plain\n    @click=\"open3\">\n    消息\n  </hl-button>\n  <hl-button\n    plain\n    @click=\"open4\">\n    错误\n  </hl-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: '成功',\n          message: '这是一条成功的提示消息',\n          type: 'success',\n          duration: 0\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: '警告',\n          message: '这是一条警告的提示消息',\n          type: 'warning'\n        });\n      },\n\n      open3() {\n        this.$notify.info({\n          title: '消息',\n          message: '这是一条消息的提示消息'\n        });\n      },\n\n      open4() {\n        this.$notify.error({\n          title: '错误',\n          message: '这是一条错误的提示消息'\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-dan-chu-wei-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-dan-chu-wei-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义弹出位置")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可以让 Notification 从屏幕四角中的任意一角弹出", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性定义 Notification 的弹出位置，支持四个选项："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top-left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom-right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom-left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button\n    plain\n    @click=\"open1\">\n    右上角\n  </hl-button>\n  <hl-button\n    plain\n    @click=\"open2\">\n    右下角\n  </hl-button>\n  <hl-button\n    plain\n    @click=\"open3\">\n    左下角\n  </hl-button>\n  <hl-button\n    plain\n    @click=\"open4\">\n    左上角\n  </hl-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: '自定义位置',\n          message: '右上角弹出的消息'\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: '自定义位置',\n          message: '右下角弹出的消息',\n          position: 'bottom-right'\n        });\n      },\n\n      open3() {\n        this.$notify({\n          title: '自定义位置',\n          message: '左下角弹出的消息',\n          position: 'bottom-left'\n        });\n      },\n\n      open4() {\n        this.$notify({\n          title: '自定义位置',\n          message: '左上角弹出的消息',\n          position: 'top-left'\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "dai-you-pian-yi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-you-pian-yi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 带有偏移")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "让 Notification 偏移一些位置", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Notification 提供设置偏移量的功能，通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button\n    plain\n    @click=\"open\">\n    偏移的消息\n  </hl-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify({\n          title: '偏移',\n          message: '这是一条带有偏移的提示消息',\n          offset: 100\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "shi-yong-html-pian-duan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shi-yong-html-pian-duan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 使用 HTML 片段")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性支持传入 HTML 片段")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置为 true，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 就会被当作 HTML 片段处理。")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button\n    plain\n    @click=\"open\">\n    使用 HTML 片段\n  </hl-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify({\n          title: 'HTML 片段',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>这是 <i>HTML</i> 片段</strong>'\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<div class=\"warning\"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div><h3 id=\"yin-cang-guan-bi-an-niu\"><a class=\"header-anchor\" href=\"#yin-cang-guan-bi-an-niu\"></a> 隐藏关闭按钮</h3><p>可以不显示关闭按钮</p>", 3);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可隐藏关闭按钮。")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button\n    plain\n    @click=\"open\">\n    隐藏关闭按钮\n  </hl-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Info',\n          message: '这是一条没有关闭按钮的消息',\n          showClose: false\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"quan-ju-fang-fa\"><a class=\"header-anchor\" href=\"#quan-ju-fang-fa\"></a> 全局方法</h3><p>Hongluan ui 为 <code>app.config.globalProperties</code> 添加了全局方法 <code>$notify</code>。因此在 vue instance 中可以采用本页面中的方式调用 Notification。</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\"></a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>说明文字</td><td>string/Vue.VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>主题样式，如果不在可选值内将被忽略</td><td>string</td><td>success/warning/info/error</td><td>—</td></tr><tr><td>iconClass</td><td>自定义图标的类名。若设置了 <code>type</code>，则 <code>iconClass</code> 会被覆盖</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td>number</td><td>—</td><td>4500</td></tr><tr><td>position</td><td>自定义弹出位置</td><td>string</td><td>top-right/top-left/bottom-right/bottom-left</td><td>top-right</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>onClose</td><td>关闭时的回调函数</td><td>function</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>点击 Notification 时的回调函数</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量</td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"fang-fa\"><a class=\"header-anchor\" href=\"#fang-fa\"></a> 方法</h3><p>调用 <code>Notification</code> 或 <code>this.$notify</code> 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Notification</td></tr></tbody></table>", 7);

function notificationvue_type_template_id_b427ae06_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", notificationvue_type_template_id_b427ae06_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", notificationvue_type_template_id_b427ae06_hoisted_2, [notificationvue_type_template_id_b427ae06_hoisted_3, notificationvue_type_template_id_b427ae06_hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_30]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/notification.md?vue&type=template&id=b427ae06

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/notification.md?vue&type=script&lang=ts


/* harmony default export */ var notificationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 可自动关闭 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 不会自动关闭 ");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])], 64);
      }

      var h = vue_esm_browser_prod["s" /* h */];
      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$notify({
              title: '标题名称',
              message: h('p', {
                style: 'color: teal'
              }, '在引入 Hongluan UI Library 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）')
            });
          },
          open2: function open2() {
            this.$notify({
              title: '提示',
              message: '这是一条不会自动关闭的消息',
              icon: 'inbox',
              duration: 0
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 成功 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 警告 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 消息 ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" 错误 ");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])], 64);
      }

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$notify({
              title: '成功',
              message: '这是一条成功的提示消息',
              type: 'success',
              duration: 0
            });
          },
          open2: function open2() {
            this.$notify({
              title: '警告',
              message: '这是一条警告的提示消息',
              type: 'warning'
            });
          },
          open3: function open3() {
            this.$notify.info({
              title: '消息',
              message: '这是一条消息的提示消息'
            });
          },
          open4: function open4() {
            this.$notify.error({
              title: '错误',
              message: '这是一条错误的提示消息'
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 右上角 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 右下角 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 左下角 ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" 左上角 ");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          plain: "",
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])], 64);
      }

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$notify({
              title: '自定义位置',
              message: '右上角弹出的消息'
            });
          },
          open2: function open2() {
            this.$notify({
              title: '自定义位置',
              message: '右下角弹出的消息',
              position: 'bottom-right'
            });
          },
          open3: function open3() {
            this.$notify({
              title: '自定义位置',
              message: '左下角弹出的消息',
              position: 'bottom-left'
            });
          },
          open4: function open4() {
            this.$notify({
              title: '自定义位置',
              message: '左上角弹出的消息',
              position: 'top-left'
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 偏移的消息 ");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_component_hl_button, {
          plain: "",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            this.$notify({
              title: '偏移',
              message: '这是一条带有偏移的提示消息',
              offset: 100
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 使用 HTML 片段 ");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_component_hl_button, {
          plain: "",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            this.$notify({
              title: 'HTML 片段',
              dangerouslyUseHTMLString: true,
              message: '<strong>这是 <i>HTML</i> 片段</strong>'
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 隐藏关闭按钮 ");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_component_hl_button, {
          plain: "",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            this.$notify.success({
              title: 'Info',
              message: '这是一条没有关闭按钮的消息',
              showClose: false
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/notification.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/notification.md



notificationvue_type_script_lang_ts.render = notificationvue_type_template_id_b427ae06_render

/* harmony default export */ var notification = __webpack_exports__["default"] = (notificationvue_type_script_lang_ts);

/***/ })

}]);