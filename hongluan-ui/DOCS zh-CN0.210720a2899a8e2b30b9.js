(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/alert.md?vue&type=template&id=37e7d242

var alertvue_type_template_id_37e7d242_hoisted_1 = {
  class: "doc-main-content"
};
var _hoisted_2 = {
  class: "doc-content"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Alert 警告", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "用于页面中展示重要的提示信息。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Alert 组件提供四种主题，由"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性指定，默认值为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-alert title=\"默认样式\" type=\"\" class=\"bordered\"> </hl-alert>\n  <hl-alert title=\"成功提示的文案\" type=\"success\"> </hl-alert>\n  <hl-alert title=\"消息提示的文案\" type=\"primary\"> </hl-alert>\n  <hl-alert title=\"警告提示的文案\" type=\"warning\"> </hl-alert>\n  <hl-alert title=\"错误提示的文案\" type=\"danger\"> </hl-alert>\n  <hl-alert title=\"信息提示的文案\" type=\"info\"> </hl-alert>\n</template>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "scss"
}, ".test {\n  color: red;\n}\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "light-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#light-yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" light 颜色")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("当 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Alert"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 组件附有状态色的情况下，你可以在加上 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "effect=\"light\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性即可使它的颜色减淡。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-alert title=\"成功提示的文案\" type=\"success\" effect=\"light\"> </hl-alert>\n  <hl-alert title=\"消息提示的文案\" type=\"primary\" effect=\"light\"> </hl-alert>\n  <hl-alert title=\"警告提示的文案\" type=\"warning\" effect=\"light\"> </hl-alert>\n  <hl-alert title=\"错误提示的文案\" type=\"danger\" effect=\"light\"> </hl-alert>\n  <hl-alert title=\"信息提示的文案\" type=\"info\" effect=\"light\"> </hl-alert>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-guan-bi-an-niu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-guan-bi-an-niu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义关闭按钮")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "自定义关闭按钮为文字或其他符号。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性决定是否可关闭，接受"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。你可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来代替右侧的关闭图标，注意："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("必须为文本。设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("事件来设置关闭时的回调。")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-alert title=\"不可关闭的 alert\" type=\"danger\" :closable=\"false\"></hl-alert>\n  <hl-alert title=\"自定义 close-text\" type=\"primary\" close-text=\"知道了\"\n    >输入的额内容是</hl-alert\n  >\n  <hl-alert title=\"设置了回调的 alert\" type=\"warning\" @close=\"hello\"></hl-alert>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const hello = () => {\n        alert('Hello World!')\n      }\n      return {\n        hello,\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dai-you-icon"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-you-icon"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 带有 icon")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "表示某种状态时提升可读性。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "show-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n\n  <hl-col span=\"col-12\">\n    <hl-alert title=\"成功提示的文案\" type=\"success\" effect=\"light\" show-icon> </hl-alert>\n  </hl-col>\n  <hl-col span=\"col-12\">\n    <hl-alert title=\"消息提示的文案\" type=\"info\" effect=\"light\" show-icon> </hl-alert>\n  </hl-col>\n  <hl-col span=\"col-12\" class=\"m-t-lg\">\n    <hl-alert title=\"警告提示的文案\" type=\"warning\" effect=\"light\" show-icon> </hl-alert>\n  </hl-col>\n  <hl-col span=\"col-12\" class=\"m-t-lg\">\n    <hl-alert title=\"错误提示的文案\" type=\"danger\" effect=\"light\" show-icon> </hl-alert>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dai-you-fu-zhu-xing-wen-zi-jie-shao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-you-fu-zhu-xing-wen-zi-jie-shao"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 带有辅助性文字介绍")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "包含标题和内容，解释更详细的警告。", -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("除了必填的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性外，你可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-alert\n    title=\"带辅助性文字介绍\"\n    type=\"success\"\n    description=\"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……\"\n  >\n  </hl-alert>\n</template>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 带有 icon 和辅助性文字介绍")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "最后，这是一个同时具有 icon 和辅助性文字的样例。")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-12\">\n    <hl-alert\n      title=\"成功提示的文案\"\n      type=\"success\"\n      description=\"这是一段含有辅助性文字介绍的警告提示。\"\n      show-icon\n      light\n    >\n    </hl-alert>\n  </hl-col>\n  <hl-col span=\"col-12\">\n    <hl-alert title=\"自定义icon\" type=\"danger\" show-icon effect=\"light\">\n      <template #icon>\n        <hl-icon name=\"computer\" size=\"lg\" class=\"alert-icon\" />\n      </template>\n      这是一段含有辅助性文字介绍的警告提示。\n    </hl-alert>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>effect</td><td>样式主题</td><td>string</td><td>light</td><td>-</td></tr><tr><td>description</td><td>辅助性文字。也可通过默认 slot 传入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-text</td><td>关闭按钮自定义文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-icon</td><td>是否显示图标</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>描述</td></tr><tr><td>icon</td><td>自定义 icon</td></tr><tr><td>title</td><td>标题的内容</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭 alert 时触发的事件</td><td>—</td></tr></tbody></table>", 6);

function alertvue_type_template_id_37e7d242_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", alertvue_type_template_id_37e7d242_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", _hoisted_2, [_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    highlightScss: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/alert.md?vue&type=template&id=37e7d242

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/alert.md?vue&type=script&lang=ts


/* harmony default export */ var alertvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_alert = _resolveComponent("hl-alert");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_alert, {
          title: "默认样式",
          type: "",
          class: "bordered"
        }), _createVNode(_component_hl_alert, {
          title: "成功提示的文案",
          type: "success"
        }), _createVNode(_component_hl_alert, {
          title: "消息提示的文案",
          type: "primary"
        }), _createVNode(_component_hl_alert, {
          title: "警告提示的文案",
          type: "warning"
        }), _createVNode(_component_hl_alert, {
          title: "错误提示的文案",
          type: "danger"
        }), _createVNode(_component_hl_alert, {
          title: "信息提示的文案",
          type: "info"
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_alert = _resolveComponent("hl-alert");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_alert, {
          title: "成功提示的文案",
          type: "success",
          effect: "light"
        }), _createVNode(_component_hl_alert, {
          title: "消息提示的文案",
          type: "primary",
          effect: "light"
        }), _createVNode(_component_hl_alert, {
          title: "警告提示的文案",
          type: "warning",
          effect: "light"
        }), _createVNode(_component_hl_alert, {
          title: "错误提示的文案",
          type: "danger",
          effect: "light"
        }), _createVNode(_component_hl_alert, {
          title: "信息提示的文案",
          type: "info",
          effect: "light"
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("输入的额内容是");

      function render(_ctx, _cache) {
        var _component_hl_alert = _resolveComponent("hl-alert");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_alert, {
          title: "不可关闭的 alert",
          type: "danger",
          closable: false
        }), _createVNode(_component_hl_alert, {
          title: "自定义 close-text",
          type: "primary",
          "close-text": "知道了"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_alert, {
          title: "设置了回调的 alert",
          type: "warning",
          onClose: _ctx.hello
        }, null, 8, ["onClose"])], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var hello = function hello() {
            alert('Hello World!');
          };

          return {
            hello: hello
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_alert = _resolveComponent("hl-alert");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_alert, {
                  title: "成功提示的文案",
                  type: "success",
                  effect: "light",
                  "show-icon": ""
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_alert, {
                  title: "消息提示的文案",
                  type: "info",
                  effect: "light",
                  "show-icon": ""
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_alert, {
                  title: "警告提示的文案",
                  type: "warning",
                  effect: "light",
                  "show-icon": ""
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_alert, {
                  title: "错误提示的文案",
                  type: "danger",
                  effect: "light",
                  "show-icon": ""
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_alert = _resolveComponent("hl-alert");

        return _openBlock(), _createBlock(_component_hl_alert, {
          title: "带辅助性文字介绍",
          type: "success",
          description: "这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 这是一段含有辅助性文字介绍的警告提示。 ");

      function render(_ctx, _cache) {
        var _component_hl_alert = _resolveComponent("hl-alert");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_alert, {
                  title: "成功提示的文案",
                  type: "success",
                  description: "这是一段含有辅助性文字介绍的警告提示。",
                  "show-icon": "",
                  light: ""
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_alert, {
                  title: "自定义icon",
                  type: "danger",
                  "show-icon": "",
                  effect: "light"
                }, {
                  icon: _withCtx(function () {
                    return [_createVNode(_component_hl_icon, {
                      name: "computer",
                      size: "lg",
                      class: "alert-icon"
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/alert.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/alert.md



alertvue_type_script_lang_ts.render = alertvue_type_template_id_37e7d242_render

/* harmony default export */ var zh_CN_alert = __webpack_exports__["default"] = (alertvue_type_script_lang_ts);

/***/ })

}]);