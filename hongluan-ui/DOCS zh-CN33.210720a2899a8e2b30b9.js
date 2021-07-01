(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/panel.md?vue&type=template&id=a06adb86

var panelvue_type_template_id_a06adb86_hoisted_1 = {
  class: "doc-main-content"
};
var panelvue_type_template_id_a06adb86_hoisted_2 = {
  class: "doc-content"
};

var panelvue_type_template_id_a06adb86_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Panel 面板", -1);

var panelvue_type_template_id_a06adb86_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "面板通常由头部、主体和脚注组成。鸿鸾中的面板大多数用做提示框、通知、对话框或当作勾勒内容区域的容器，当然不仅如此。", -1);

var panelvue_type_template_id_a06adb86_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ji-ben-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基本样式")], -1);

var panelvue_type_template_id_a06adb86_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "panel"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 包括 header、body、footer 三个 slot, body 是为默认 slot")], -1);

var panelvue_type_template_id_a06adb86_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-panel>\n  <template #header>\n    <div class=\"panel-title\">\n      这是一个标题\n    </div>\n    <div class=\"panel-header-right\">\n      <hl-icon name=\"close\"></hl-icon>\n    </div>\n  </template>\n  <div>这是一段body信息</div>\n  <template #footer>\n    <hl-button class=\"m-r-md\" @click=\"dialogVisible = false\">取 消</hl-button>\n    <hl-button type=\"primary\" @click=\"dialogVisible = false\">确 定</hl-button>\n  </template>\n</hl-panel>\n\n<script>\n  export default {\n    data() {\n      return {}\n    },\n    methods: {},\n  }\n</script>\n")], -1);

var panelvue_type_template_id_a06adb86_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "wu-bian-kuang-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wu-bian-kuang-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 无边框样式")], -1);

var panelvue_type_template_id_a06adb86_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "borderless"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性会使 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "panel"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("变成无边框状态，同时它们直接的间距也会产生变化。")], -1);

var panelvue_type_template_id_a06adb86_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-panel borderless>\n  <template #header>\n    <div class=\"panel-title\">\n      这是一个标题\n    </div>\n    <div class=\"panel-header-right\">\n      <hl-button icon=\"upload\" equal no-fill></hl-button>\n      <hl-button icon=\"maximize\" equal no-fill></hl-button>\n    </div>\n  </template>\n  <div>这是一段body信息</div>\n  <template #footer>\n    <hl-button class=\"m-r-md\" @click=\"dialogVisible = false\">取 消</hl-button>\n    <hl-button type=\"primary\" @click=\"dialogVisible = false\">确 定</hl-button>\n  </template>\n</hl-panel>\n\n<script>\n  export default {\n    data() {\n      return {}\n    },\n    methods: {},\n  }\n</script>\n")], -1);

var panelvue_type_template_id_a06adb86_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jian-dan-xing-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jian-dan-xing-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 简单形态")], -1);

var panelvue_type_template_id_a06adb86_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "panel"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 允许移除 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 结构，这样你可以更灵活的定义它的用途和样式。")], -1);

var panelvue_type_template_id_a06adb86_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col\">\n    <hl-panel>\n      <div>仅保留body区域 (有边框)</div>\n    </hl-panel>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-panel borderless>\n      <div>仅保留body区域 (无边框)</div>\n    </hl-panel>\n  </hl-col>\n</hl-row>\n")], -1);

var panelvue_type_template_id_a06adb86_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ke-kuo-zhan-shi-header"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-kuo-zhan-shi-header"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可扩展式 Header")], -1);

var panelvue_type_template_id_a06adb86_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "header 容器可以的承载你的自定义元素和组件，你甚至不需要定义样式。", -1);

var panelvue_type_template_id_a06adb86_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在 header 的 slot 中提供了的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "panel-header-left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "panel-title"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "panel-header-right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 三个布局样式。")])], -1);

var panelvue_type_template_id_a06adb86_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\">\n    <hl-panel>\n      <template #header>\n        <div class=\"panel-header-left\">\n          <hl-icon name=\"news\" size=\"lg\" :border=\"1.5\"></hl-icon>\n        </div>\n        <div class=\"panel-title\">\n          Title\n        </div>\n        <div class=\"panel-header-right\">\n          <button class=\"panel-close\"></button>\n        </div>\n      </template>\n      Panel-Body\n    </hl-panel>\n  </hl-col>\n\n  <hl-col span=\"col-md-12\">\n    <hl-panel>\n      <template #header>\n        <div class=\"panel-header-left\">\n          <hl-thumb size=\"sm\" round class=\"primary\">\n            <span>俊杰</span>\n          </hl-thumb>\n        </div>\n        <div class=\"panel-title\">\n          <h5>对方正在输入中...</h5>\n        </div>\n        <div class=\"panel-header-right\">\n          <button class=\"panel-close\"></button>\n        </div>\n      </template>\n      Panel-Body\n    </hl-panel>\n  </hl-col>\n\n  <hl-col span=\"col-md-12\" class=\"m-t-lg\">\n    <hl-panel>\n      <template #header>\n        <div class=\"panel-title\">\n          Title\n        </div>\n        <div class=\"panel-header-right\">\n          <hl-group merge indent>\n            <hl-input\n              placeholder=\"请输入内容\"\n              suffix-icon=\"search\"\n              round\n              fill\n            ></hl-input>\n          </hl-group>\n        </div>\n      </template>\n      Panel-Body\n    </hl-panel>\n  </hl-col>\n\n  <hl-col span=\"col-md-12\" class=\"m-t-lg\">\n    <hl-panel>\n      <template #header>\n        <div class=\"panel-title\">\n          Title\n        </div>\n        <div class=\"panel-header-right\">\n          <hl-button type=\"primary\" icon=\"search\" icon-position=\"right\"\n            >搜索</hl-button\n          >\n        </div>\n      </template>\n      Panel-Body\n    </hl-panel>\n  </hl-col>\n\n  <hl-col span=\"col-md-12\" class=\"m-t-lg\">\n    <hl-panel>\n      <template #header>\n        <div class=\"panel-title\">\n          Title\n        </div>\n        <div class=\"panel-header-right\">\n          <hl-dropdown>\n            <hl-button\n              type=\"link\"\n              icon=\"chevronBottom\"\n              icon-position=\"right\"\n              no-fill\n              >搜索</hl-button\n            >\n            <template #dropdown>\n              <hl-dropdown-menu>\n                <hl-dropdown-item>数据流</hl-dropdown-item>\n                <hl-dropdown-item>传输属性值</hl-dropdown-item>\n                <hl-dropdown-item>已断线</hl-dropdown-item>\n                <hl-dropdown-item>待恢复</hl-dropdown-item>\n              </hl-dropdown-menu>\n            </template>\n          </hl-dropdown>\n        </div>\n      </template>\n      Panel-Body\n    </hl-panel>\n  </hl-col>\n\n  <hl-col span=\"col-md-12\" class=\"m-t-lg\">\n    <hl-panel>\n      <template #header>\n        <div class=\"panel-title\">\n          Title\n        </div>\n        <div class=\"panel-header-right\">\n          小贴士\n        </div>\n      </template>\n      Panel-Body\n    </hl-panel>\n  </hl-col>\n</hl-row>\n")], -1);

var panelvue_type_template_id_a06adb86_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"panel-attributes\"><a class=\"header-anchor\" href=\"#panel-attributes\"></a> Panel Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>borderless</td><td>是否无边框</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>radius</td><td>圆角</td><td>String / Number</td><td>—</td><td>8px</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\"></a> Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Panel 主体的内容</td></tr><tr><td>header</td><td>Panel 头部的内容</td></tr><tr><td>footer</td><td>Panel 脚注的内容</td></tr></tbody></table>", 4);

function panelvue_type_template_id_a06adb86_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", panelvue_type_template_id_a06adb86_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", panelvue_type_template_id_a06adb86_hoisted_2, [panelvue_type_template_id_a06adb86_hoisted_3, panelvue_type_template_id_a06adb86_hoisted_4, panelvue_type_template_id_a06adb86_hoisted_5, panelvue_type_template_id_a06adb86_hoisted_6, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [panelvue_type_template_id_a06adb86_hoisted_7];
    }),
    _: 1
  }), panelvue_type_template_id_a06adb86_hoisted_8, panelvue_type_template_id_a06adb86_hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [panelvue_type_template_id_a06adb86_hoisted_10];
    }),
    _: 1
  }), panelvue_type_template_id_a06adb86_hoisted_11, panelvue_type_template_id_a06adb86_hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [panelvue_type_template_id_a06adb86_hoisted_13];
    }),
    _: 1
  }), panelvue_type_template_id_a06adb86_hoisted_14, panelvue_type_template_id_a06adb86_hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [panelvue_type_template_id_a06adb86_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [panelvue_type_template_id_a06adb86_hoisted_16];
    }),
    _: 1
  }), panelvue_type_template_id_a06adb86_hoisted_18]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/panel.md?vue&type=template&id=a06adb86

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/panel.md?vue&type=script&lang=ts


/* harmony default export */ var panelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, " 这是一个标题 ", -1);

      var _hoisted_2 = {
        class: "panel-header-right"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "这是一段body信息", -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_panel = _resolveComponent("hl-panel");

        return _openBlock(), _createBlock(_component_hl_panel, null, {
          header: _withCtx(function () {
            return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_hl_icon, {
              name: "close"
            })])];
          }),
          footer: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {};
        },
        methods: {}
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, " 这是一个标题 ", -1);

      var _hoisted_2 = {
        class: "panel-header-right"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "这是一段body信息", -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_panel = _resolveComponent("hl-panel");

        return _openBlock(), _createBlock(_component_hl_panel, {
          borderless: ""
        }, {
          header: _withCtx(function () {
            return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_hl_button, {
              icon: "upload",
              equal: "",
              "no-fill": ""
            }), _createVNode(_component_hl_button, {
              icon: "maximize",
              equal: "",
              "no-fill": ""
            })])];
          }),
          footer: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {};
        },
        methods: {}
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "仅保留body区域 (有边框)", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "仅保留body区域 (无边框)", -1);

      function render(_ctx, _cache) {
        var _component_hl_panel = _resolveComponent("hl-panel");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, null, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, {
                  borderless: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
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
    }(),
    "hl-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "panel-header-left"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, " Title ", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "panel-header-right"
      }, [/*#__PURE__*/_createVNode("button", {
        class: "panel-close"
      })], -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" Panel-Body ");

      var _hoisted_5 = {
        class: "panel-header-left"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "俊杰", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, [/*#__PURE__*/_createVNode("h5", null, "对方正在输入中...")], -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "panel-header-right"
      }, [/*#__PURE__*/_createVNode("button", {
        class: "panel-close"
      })], -1);

      var _hoisted_9 = /*#__PURE__*/_createTextVNode(" Panel-Body ");

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, " Title ", -1);

      var _hoisted_11 = {
        class: "panel-header-right"
      };

      var _hoisted_12 = /*#__PURE__*/_createTextVNode(" Panel-Body ");

      var _hoisted_13 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, " Title ", -1);

      var _hoisted_14 = {
        class: "panel-header-right"
      };

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("搜索");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" Panel-Body ");

      var _hoisted_17 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, " Title ", -1);

      var _hoisted_18 = {
        class: "panel-header-right"
      };

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("搜索");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("数据流");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("传输属性值");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("已断线");

      var _hoisted_23 = /*#__PURE__*/_createTextVNode("待恢复");

      var _hoisted_24 = /*#__PURE__*/_createTextVNode(" Panel-Body ");

      var _hoisted_25 = /*#__PURE__*/_createVNode("div", {
        class: "panel-title"
      }, " Title ", -1);

      var _hoisted_26 = /*#__PURE__*/_createVNode("div", {
        class: "panel-header-right"
      }, " 小贴士 ", -1);

      var _hoisted_27 = /*#__PURE__*/_createTextVNode(" Panel-Body ");

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_panel = _resolveComponent("hl-panel");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, null, {
                  header: _withCtx(function () {
                    return [_createVNode("div", _hoisted_1, [_createVNode(_component_hl_icon, {
                      name: "news",
                      size: "lg",
                      border: 1.5
                    }, null, 8, ["border"])]), _hoisted_2, _hoisted_3];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, null, {
                  header: _withCtx(function () {
                    return [_createVNode("div", _hoisted_5, [_createVNode(_component_hl_thumb, {
                      size: "sm",
                      round: "",
                      class: "primary"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    })]), _hoisted_7, _hoisted_8];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, null, {
                  header: _withCtx(function () {
                    return [_hoisted_10, _createVNode("div", _hoisted_11, [_createVNode(_component_hl_group, {
                      merge: "",
                      indent: ""
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_input, {
                          placeholder: "请输入内容",
                          "suffix-icon": "search",
                          round: "",
                          fill: ""
                        })];
                      }),
                      _: 1
                    })])];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, null, {
                  header: _withCtx(function () {
                    return [_hoisted_13, _createVNode("div", _hoisted_14, [_createVNode(_component_hl_button, {
                      type: "primary",
                      icon: "search",
                      "icon-position": "right"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_15];
                      }),
                      _: 1
                    })])];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, null, {
                  header: _withCtx(function () {
                    return [_hoisted_17, _createVNode("div", _hoisted_18, [_createVNode(_component_hl_dropdown, null, {
                      dropdown: _withCtx(function () {
                        return [_createVNode(_component_hl_dropdown_menu, null, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_20];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_21];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_22];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_dropdown_item, null, {
                              default: _withCtx(function () {
                                return [_hoisted_23];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_button, {
                          type: "link",
                          icon: "chevronBottom",
                          "icon-position": "right",
                          "no-fill": ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_19];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })])];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_24];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_panel, null, {
                  header: _withCtx(function () {
                    return [_hoisted_25, _hoisted_26];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_27];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/panel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/panel.md



panelvue_type_script_lang_ts.render = panelvue_type_template_id_a06adb86_render

/* harmony default export */ var panel = __webpack_exports__["default"] = (panelvue_type_script_lang_ts);

/***/ })

}]);