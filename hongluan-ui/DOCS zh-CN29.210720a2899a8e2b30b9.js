(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message.md?vue&type=template&id=8b1f2a86

var messagevue_type_template_id_8b1f2a86_hoisted_1 = {
  class: "doc-main-content"
};
var messagevue_type_template_id_8b1f2a86_hoisted_2 = {
  class: "doc-content"
};

var messagevue_type_template_id_8b1f2a86_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Message 消息提示", -1);

var messagevue_type_template_id_8b1f2a86_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "从顶部出现，3 秒后自动消失。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Hongluan UI 注册了一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "$message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button @click=\"open\" class=\"m-r-md\">打开消息提示</hl-button>\n  <hl-button @click=\"openVn\">VNode</hl-button>\n</template>\n\n<script>\n  import { defineComponent, h } from 'vue'\n  import { HlMessage } from 'hongluan-ui'\n  export default defineComponent ({\n    setup() {\n      return {\n        open() {\n          HlMessage('只是一条消息提示')\n        },\n        openVn() {\n          HlMessage({\n            message: h('p', null, [\n              h('span', null, '内容可以是 '),\n              h('i', { style: 'color: teal' }, 'VNode')\n            ])\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "bu-tong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 不同状态")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "用来显示「成功、警告、消息、错误」类的操作反馈。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字段可以定义不同的状态，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。此时正文内容以"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字段的情况下像"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("那样直接调用。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button @click=\"open1\" class=\"m-r-md\">成功</hl-button>\n  <hl-button @click=\"open2\" class=\"m-r-md\">警告</hl-button>\n  <hl-button @click=\"open3\" class=\"m-r-md\">消息</hl-button>\n  <hl-button @click=\"open4\">错误</hl-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { HlMessage } from 'hongluan-ui'\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          HlMessage.success({\n            duration: 5000000,\n            showClose: true,\n            message: '恭喜你，这是一条成功消息'\n          });\n        },\n        open2() {\n          HlMessage.warning({\n            message: '警告哦，这是一条警告消息'\n          });\n        },\n        open3() {\n          HlMessage('这是一条消息提示');\n        },\n        open4() {\n          HlMessage.error('错了哦，这是一条错误消息');\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ke-guan-bi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-guan-bi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可关闭")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可以添加关闭按钮。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("字段。此外，和 Notification 一样，Message 拥有可控的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为不会被自动关闭，默认为 3000 毫秒。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button @click=\"open1\" class=\"m-r-md\">消息</hl-button>\n  <hl-button @click=\"open2\" class=\"m-r-md\">成功</hl-button>\n  <hl-button @click=\"open3\" class=\"m-r-md\">警告</hl-button>\n  <hl-button @click=\"open4\">错误</hl-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { HlMessage } from 'hongluan-ui'\n\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          HlMessage({\n            showClose: true,\n            message: '这是一条消息提示',\n            duration: 300000\n          });\n        },\n\n        open2() {\n          HlMessage({\n            showClose: true,\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          });\n        },\n\n        open3() {\n          HlMessage({\n            showClose: true,\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          });\n        },\n\n        open4() {\n          HlMessage({\n            showClose: true,\n            message: '错了哦，这是一条错误消息',\n            type: 'error'\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "wen-zi-dui-qi-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wen-zi-dui-qi-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 文字对齐方式")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "textAlign"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，可选值为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，默认值为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button @click=\"openCenter('left')\" class=\"m-r-md\">居左对齐方式</hl-button>\n  <hl-button @click=\"openCenter('center')\" class=\"m-r-md\">居中对齐方式</hl-button>\n  <hl-button @click=\"openCenter('right')\">居右对齐方式</hl-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { HlMessage } from 'hongluan-ui'\n  export default defineComponent({\n    setup() {\n      return {\n        openCenter(align) {\n          HlMessage({\n            message: `文字对齐方式`,\n            textAlign: align\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "shi-yong-html-pian-duan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shi-yong-html-pian-duan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 使用 HTML 片段")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性支持传入 HTML 片段")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性设置为 true，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 就会被当作 HTML 片段处理。")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button @click=\"openHTML\">使用 HTML 片段</hl-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { HlMessage } from 'hongluan-ui'\n  export default defineComponent({\n    setup() {\n      return {\n        openHTML() {\n          HlMessage({\n            dangerouslyUseHTMLString: true,\n            message: '<strong>这是 <i>HTML</i> 片段</strong>'\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<div class=\"warning\"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div><h2 id=\"quan-ju-fang-fa\"><a class=\"header-anchor\" href=\"#quan-ju-fang-fa\"></a> 全局方法</h2><p>Hongluan UI 为 <code>app.config.globalProperties</code> 添加了全局方法 $message。因此在 vue instance 中可以采用在 method 中调用 <code>this.$message</code> 方法唤起 <code>HlMessage</code>。</p><h2 id=\"dan-du-yin-yong\"><a class=\"header-anchor\" href=\"#dan-du-yin-yong\"></a> 单独引用</h2><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { HlMessage } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;hongluan-ui&#39;</span>;\n</code></pre><p>此时调用方法为 <code>HlMessage(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>HlMessage.success(options)</code>。并且可以调用 <code>HlMessage.closeAll()</code> 手动关闭所有实例。</p><h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>自定义图标的类名，会覆盖 <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>textAlign</td><td>文字对齐方式</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>onClose</td><td>关闭时的回调函数, 参数为被关闭的 message 实例</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>Message 距离窗口顶部的偏移量</td><td>number</td><td>—</td><td>20</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h3><p>调用 <code>HlMessage</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Message</td></tr></tbody></table>", 11);

function messagevue_type_template_id_8b1f2a86_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", messagevue_type_template_id_8b1f2a86_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", messagevue_type_template_id_8b1f2a86_hoisted_2, [messagevue_type_template_id_8b1f2a86_hoisted_3, messagevue_type_template_id_8b1f2a86_hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_24]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/message.md?vue&type=template&id=8b1f2a86

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message.md?vue&type=script&lang=ts


/* harmony default export */ var messagevue_type_script_lang_ts = ({
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("打开消息提示");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("VNode");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _ctx.open,
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          onClick: _ctx.openVn
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          h = vue_esm_browser_prod["s" /* h */];

      var _require = __webpack_require__(52),
          HlMessage = _require.HlMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            open: function open() {
              HlMessage('只是一条消息提示');
            },
            openVn: function openVn() {
              HlMessage({
                message: h('p', null, [h('span', null, '内容可以是 '), h('i', {
                  style: 'color: teal'
                }, 'VNode')])
              });
            }
          };
        }
      });
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("成功");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("警告");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("消息");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("错误");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _ctx.open1,
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          onClick: _ctx.open2,
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          onClick: _ctx.open3,
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */];

      var _require2 = __webpack_require__(52),
          HlMessage = _require2.HlMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            open1: function open1() {
              HlMessage.success({
                duration: 5000000,
                showClose: true,
                message: '恭喜你，这是一条成功消息'
              });
            },
            open2: function open2() {
              HlMessage.warning({
                message: '警告哦，这是一条警告消息'
              });
            },
            open3: function open3() {
              HlMessage('这是一条消息提示');
            },
            open4: function open4() {
              HlMessage.error('错了哦，这是一条错误消息');
            }
          };
        }
      });
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("消息");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("成功");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("警告");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("错误");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _ctx.open1,
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          onClick: _ctx.open2,
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          onClick: _ctx.open3,
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_button, {
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */];

      var _require3 = __webpack_require__(52),
          HlMessage = _require3.HlMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            open1: function open1() {
              HlMessage({
                showClose: true,
                message: '这是一条消息提示',
                duration: 300000
              });
            },
            open2: function open2() {
              HlMessage({
                showClose: true,
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              });
            },
            open3: function open3() {
              HlMessage({
                showClose: true,
                message: '警告哦，这是一条警告消息',
                type: 'warning'
              });
            },
            open4: function open4() {
              HlMessage({
                showClose: true,
                message: '错了哦，这是一条错误消息',
                type: 'error'
              });
            }
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("居左对齐方式");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("居中对齐方式");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("居右对齐方式");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.openCenter('left');
          }),
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.openCenter('center');
          }),
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_hl_button, {
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.openCenter('right');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        })], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */];

      var _require4 = __webpack_require__(52),
          HlMessage = _require4.HlMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            openCenter: function openCenter(align) {
              HlMessage({
                message: "\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F",
                textAlign: align
              });
            }
          };
        }
      });
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("使用 HTML 片段");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_component_hl_button, {
          onClick: _ctx.openHTML
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */];

      var _require5 = __webpack_require__(52),
          HlMessage = _require5.HlMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            openHTML: function openHTML() {
              HlMessage({
                dangerouslyUseHTMLString: true,
                message: '<strong>这是 <i>HTML</i> 片段</strong>'
              });
            }
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/message.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/message.md



messagevue_type_script_lang_ts.render = messagevue_type_template_id_8b1f2a86_render

/* harmony default export */ var message = __webpack_exports__["default"] = (messagevue_type_script_lang_ts);

/***/ })

}]);