(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/color.md?vue&type=template&id=a1294862

var colorvue_type_template_id_a1294862_hoisted_1 = {
  class: "doc-main-content"
};
var colorvue_type_template_id_a1294862_hoisted_2 = {
  class: "doc-content"
};

var colorvue_type_template_id_a1294862_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Color 色彩", -1);

var colorvue_type_template_id_a1294862_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "鸿鸾的 UI 组件几乎全部使用了如下几种状态的颜色。", -1);

var colorvue_type_template_id_a1294862_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "primary"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "danger"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("来定义状态色。通常它们会继承在某个组件的样式下，例如："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".button.primary{...}"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(",直接调用状态色的话请使用带 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bg-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("或 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "text-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 前缀的样式名。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group full>\n  <div class=\"bg-primary p-md w-lg text-light text-center\">首选 Primary</div>\n  <div class=\"bg-success p-md w-lg text-light text-center\">成功 Success</div>\n  <div class=\"bg-warning p-md w-lg text-light text-center\">警告 Warning</div>\n  <div class=\"bg-danger p-md w-lg text-light text-center\">危险 Danger</div>\n  <div class=\"bg-info p-md w-lg text-light text-center\">信息 Info</div>\n</hl-group>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "wen-ben-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wen-ben-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 文本色")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "文本颜色使用 text-* 文本前缀，同样也支持上面的渐进样式。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"example\">\n  <span class=\"text-primary\" style=\"margin-right: 12px;\"\n    >首选 text-primary</span\n  >\n  <span class=\"text-success\" style=\"margin-right: 12px;\"\n    >成功 text-success</span\n  >\n  <span class=\"text-warning\" style=\"margin-right: 12px;\"\n    >警告 text-warning</span\n  >\n  <span class=\"text-danger\" style=\"margin-right: 12px;\">危险 text-danger</span>\n  <span class=\"text-info\" style=\"margin-right: 12px;\"\n    >信息 text-info</span\n  >\n</div>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"jian-jin-yan-se\"><a class=\"header-anchor\" href=\"#jian-jin-yan-se\"></a> 渐进颜色</h2><p>我们使用更为合理的色彩算法，为每一个状态颜色都赋予了 <code>light</code> 和 <code>dark</code> 的渐进色。</p><div class=\"color-box\"><ul class=\"color-list\"><li class=\"bg-primary light-5\"><span>light-5</span><em>color($statePrimary, &#39;light-5&#39;)</em></li><li class=\"bg-primary light-4\"><span>light-4</span><em>color($statePrimary, &#39;light-4&#39;)</em></li><li class=\"bg-primary light-3\"><span>light-3</span><em>color($statePrimary, &#39;light-3&#39;)</em></li><li class=\"bg-primary light-2\"><span>light-2</span><em>color($statePrimary, &#39;light-2&#39;)</em></li><li class=\"bg-primary light-1\"><span>light-1</span> <em>color($statePrimary, &#39;light-1&#39;)</em></li><li class=\"bg-primary\"><span>primary</span> <em>$statePrimary</em></li><li class=\"bg-primary dark-1\"><span>dark-1</span> <em>color($statePrimary, &#39;dark-1&#39;)</em></li><li class=\"bg-primary dark-2\"><span>dark-2</span> <em>color($statePrimary, &#39;dark-2&#39;)</em></li><li class=\"bg-primary dark-3\"><span>dark-3</span> <em>color($statePrimary, &#39;dark-3&#39;)</em></li><li class=\"bg-primary dark-4\"><span>dark-4</span> <em>color($statePrimary, &#39;dark-4&#39;)</em></li><li class=\"bg-primary dark-5\"><span>dark-5</span> <em>color($statePrimary, &#39;dark-5&#39;)</em></li></ul><ul class=\"color-list compact\"><li class=\"bg-danger light-5\"><span>light-5</span> <em>color($stateDanger, &#39;light-5&#39;)</em></li><li class=\"bg-danger light-4\"><span>light-4</span> <em>color($stateDanger, &#39;light-4&#39;)</em></li><li class=\"bg-danger light-3\"><span>light-3</span> <em>color($stateDanger, &#39;light-3&#39;)</em></li><li class=\"bg-danger light-2\"><span>light-2</span> <em>color($stateDanger, &#39;light-2&#39;)</em></li><li class=\"bg-danger light-1\"><span>light-1</span> <em>color($stateDanger, &#39;light-1&#39;)</em></li><li class=\"bg-danger\"><span>danger</span> <em>$stateDanger</em></li><li class=\"bg-danger dark-1\"><span>dark-1</span> <em>color($stateDanger, &#39;dark-1&#39;)</em></li><li class=\"bg-danger dark-2\"><span>dark-2</span> <em>color($stateDanger, &#39;dark-2&#39;)</em></li><li class=\"bg-danger dark-3\"><span>dark-3</span> <em>color($stateDanger, &#39;dark-3&#39;)</em></li><li class=\"bg-danger dark-4\"><span>dark-4</span> <em>color($stateDanger, &#39;dark-4&#39;)</em></li><li class=\"bg-danger dark-5\"><span>dark-5</span> <em>color($stateDanger, &#39;dark-5&#39;)</em></li></ul><ul class=\"color-list compact\"><li class=\"bg-warning light-5\"><span>light-5</span> <em>color(stateWarning, &#39;light-5&#39;)</em></li><li class=\"bg-warning light-4\"><span>light-4</span> <em>color(stateWarning, &#39;light-4&#39;)</em></li><li class=\"bg-warning light-3\"><span>light-3</span> <em>color(stateWarning, &#39;light-3&#39;)</em></li><li class=\"bg-warning light-2\"><span>light-2</span> <em>color(stateWarning, &#39;light-2&#39;)</em></li><li class=\"bg-warning light-1\"><span>light-1</span> <em>color(stateWarning, &#39;light-1&#39;)</em></li><li class=\"bg-warning\"><span>warning</span> <em>$stateWarning</em></li><li class=\"bg-warning dark-1\"><span>dark-1</span> <em>color(stateWarning, &#39;dark-1&#39;)</em></li><li class=\"bg-warning dark-2\"><span>dark-2</span> <em>color(stateWarning, &#39;dark-2&#39;)</em></li><li class=\"bg-warning dark-3\"><span>dark-3</span> <em>color(stateWarning, &#39;dark-3&#39;)</em></li><li class=\"bg-warning dark-4\"><span>dark-4</span> <em>color(stateWarning, &#39;dark-4&#39;)</em></li><li class=\"bg-warning dark-5\"><span>dark-5</span> <em>color(stateWarning, &#39;dark-5&#39;)</em></li></ul><ul class=\"color-list compact\"><li class=\"bg-success light-5\"><span>light-5</span> <em>color($stateSuccess, &#39;light-5&#39;)</em></li><li class=\"bg-success light-4\"><span>light-4</span> <em>color($stateSuccess, &#39;light-4&#39;)</em></li><li class=\"bg-success light-3\"><span>light-3</span> <em>color($stateSuccess, &#39;light-3&#39;)</em></li><li class=\"bg-success light-2\"><span>light-2</span> <em>color($stateSuccess, &#39;light-2&#39;)</em></li><li class=\"bg-success light-1\"><span>light-1</span> <em>color($stateSuccess, &#39;light-1&#39;)</em></li><li class=\"bg-success\"><span>success</span> <em>$stateSuccess</em></li><li class=\"bg-success dark-1\"><span>dark-1</span> <em>color($stateSuccess, &#39;dark-1&#39;)</em></li><li class=\"bg-success dark-2\"><span>dark-2</span> <em>color($stateSuccess, &#39;dark-2&#39;)</em></li><li class=\"bg-success dark-3\"><span>dark-3</span> <em>color($stateSuccess, &#39;dark-3&#39;)</em></li><li class=\"bg-success dark-4\"><span>dark-4</span> <em>color($stateSuccess, &#39;dark-4&#39;)</em></li><li class=\"bg-success dark-5\"><span>dark-5</span> <em>color($stateSuccess, &#39;dark-5&#39;)</em></li></ul><ul class=\"color-list compact\"><li class=\"bg-info light-5\"><span>light-5</span> <em>color($stateInfo, &#39;light-5&#39;)</em></li><li class=\"bg-info light-4\"><span>light-4</span> <em>color($stateInfo, &#39;light-4&#39;)</em></li><li class=\"bg-info light-3\"><span>light-3</span> <em>color($stateInfo, &#39;light-3&#39;)</em></li><li class=\"bg-info light-2\"><span>light-2</span> <em>color($stateInfo, &#39;light-2&#39;)</em></li><li class=\"bg-info light-1\"><span>light-1</span> <em>color($stateInfo, &#39;light-1&#39;)</em></li><li class=\"bg-info\"><span>info</span> <em>$stateInfo</em></li><li class=\"bg-info dark-1\"><span>dark-1</span> <em>color($stateInfo, &#39;dark-1&#39;)</em></li><li class=\"bg-info dark-2\"><span>dark-2</span> <em>color($stateInfo, &#39;dark-2&#39;)</em></li><li class=\"bg-info dark-3\"><span>dark-3</span> <em>color($stateInfo, &#39;dark-3&#39;)</em></li><li class=\"bg-info dark-4\"><span>dark-4</span> <em>color($stateInfo, &#39;dark-4&#39;)</em></li><li class=\"bg-info dark-5\"><span>dark-5</span> <em>color($stateInfo, &#39;dark-5&#39;)</em></li></ul></div><div class=\"demo-description m-t-lg\"><div><p><code>light-*</code> 或 <code>dark-*</code>可以直接继承在状态色的class样式中使用，在Scss中可以通过引用<code>color()</code>函数的方式来定义,例如： <code>background-color:color($stateInfo, &#39;light-5&#39;)</code></p></div></div>", 4);

function colorvue_type_template_id_a1294862_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", colorvue_type_template_id_a1294862_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", colorvue_type_template_id_a1294862_hoisted_2, [colorvue_type_template_id_a1294862_hoisted_3, colorvue_type_template_id_a1294862_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [colorvue_type_template_id_a1294862_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/color.md?vue&type=template&id=a1294862

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/color.md?vue&type=script&lang=ts


/* harmony default export */ var colorvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "bg-primary p-md w-lg text-light text-center"
      }, "首选 Primary", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "bg-success p-md w-lg text-light text-center"
      }, "成功 Success", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "bg-warning p-md w-lg text-light text-center"
      }, "警告 Warning", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "bg-danger p-md w-lg text-light text-center"
      }, "危险 Danger", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "bg-info p-md w-lg text-light text-center"
      }, "信息 Info", -1);

      function render(_ctx, _cache) {
        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_component_hl_group, {
          full: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createStaticVNode = vue_esm_browser_prod["m" /* createStaticVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "example"
      };

      var _hoisted_2 = /*#__PURE__*/_createStaticVNode("<span class=\"text-primary\" style=\"margin-right:12px;\">首选 text-primary</span><span class=\"text-success\" style=\"margin-right:12px;\">成功 text-success</span><span class=\"text-warning\" style=\"margin-right:12px;\">警告 text-warning</span><span class=\"text-danger\" style=\"margin-right:12px;\">危险 text-danger</span><span class=\"text-info\" style=\"margin-right:12px;\">信息 text-info</span>", 5);

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock("div", _hoisted_1, [_hoisted_2]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/color.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/color.md



colorvue_type_script_lang_ts.render = colorvue_type_template_id_a1294862_render

/* harmony default export */ var color = __webpack_exports__["default"] = (colorvue_type_script_lang_ts);

/***/ })

}]);