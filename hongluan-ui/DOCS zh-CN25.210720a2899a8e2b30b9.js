(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/layout.md?vue&type=template&id=f5c03190

var layoutvue_type_template_id_f5c03190_hoisted_1 = {
  class: "doc-main-content"
};
var layoutvue_type_template_id_f5c03190_hoisted_2 = {
  class: "doc-content"
};

var layoutvue_type_template_id_f5c03190_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Layout 布局", -1);

var layoutvue_type_template_id_f5c03190_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "用于布局的容器组件，方便快速搭建页面的基本结构：", -1);

var layoutvue_type_template_id_f5c03190_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-layout class=\"dom-area\" data-name=\"外层容器\">\n    <hl-header class=\"dom-area\" data-name=\"头部\">header</hl-header>\n    <hl-sub-header class=\"dom-area\" data-name=\"子级头部\"\n      >sub-header</hl-sub-header\n    >\n    <hl-container class=\"dom-area\" data-name=\"容器\">\n      <hl-aside class=\"dom-area\" data-name=\"侧边栏\">aside</hl-aside>\n      <hl-main\n        class=\"dom-area\"\n        data-name=\"主体内容\"\n        style=\"min-height: 300px; height: 300px\"\n        >main</hl-main\n      >\n    </hl-container>\n    <hl-footer class=\"dom-area\" data-name=\"底部\">footer</hl-footer>\n  </hl-layout>\n</template>\n\n")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ke-chai-jie-jie-gou"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-chai-jie-jie-gou"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可拆解结构")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("你可以移除 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 下的任意布局组件。以方便你设计出丰富的页面结构。")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-layout class=\"dom-area\" data-name=\"外层容器\">\n    <hl-header class=\"dom-area\" data-name=\"头部\">header</hl-header>\n    <hl-container class=\"dom-area\" data-name=\"容器\">\n      <hl-aside class=\"dom-area\" data-name=\"侧边栏\">aside</hl-aside>\n      <hl-main\n        class=\"dom-area\"\n        data-name=\"主体内容\"\n        style=\"min-height: 300px; height: 300px\"\n        >main</hl-main\n      >\n    </hl-container>\n  </hl-layout>\n</template>\n\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"gong-neng-yan-shi\"><a class=\"header-anchor\" href=\"#gong-neng-yan-shi\"></a> 功能演示</h2><p>鸿鸾即将提供一套完整的后台模版框架。<a href=\"/#/zh-CN/layout\">完整地址</a></p><div class=\"demo-browser m-t-md\"><div class=\"content\"><iframe src=\"/#/zh-CN/layout\" title=\"demo\" class=\"iframe-demo\"></iframe></div></div><h2 id=\"layout-attributes\"><a class=\"header-anchor\" href=\"#layout-attributes\"></a> Layout Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>boxed</td><td>页面居中</td><td>boolean</td><td>false</td></tr><tr><td>fixed-aside</td><td>侧边栏是否固定</td><td>boolean</td><td>false</td></tr><tr><td>fixed-header</td><td>顶栏是否固定</td><td>boolean</td><td>false</td></tr><tr><td>fixed-sub-header</td><td>二级顶栏是否固定</td><td>boolean</td><td>false</td></tr><tr><td>fixed-footer</td><td>底栏是否固定</td><td>boolean</td><td>false</td></tr><tr><td>full-header</td><td>顶栏是否满宽</td><td>boolean</td><td>false</td></tr><tr><td>full-sub-header</td><td>二级顶栏是否满宽</td><td>boolean</td><td>false</td></tr><tr><td>full-footer</td><td>底栏是否满宽</td><td>boolean</td><td>false</td></tr></tbody></table>", 5);

function layoutvue_type_template_id_f5c03190_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", layoutvue_type_template_id_f5c03190_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", layoutvue_type_template_id_f5c03190_hoisted_2, [layoutvue_type_template_id_f5c03190_hoisted_3, layoutvue_type_template_id_f5c03190_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_f5c03190_hoisted_5];
    }),
    _: 1
  }), _hoisted_6, _hoisted_7, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/layout.md?vue&type=template&id=f5c03190

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/layout.md?vue&type=script&lang=ts


/* harmony default export */ var layoutvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("header");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("sub-header");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("aside");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("main");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("footer");

      function render(_ctx, _cache) {
        var _component_hl_header = _resolveComponent("hl-header");

        var _component_hl_sub_header = _resolveComponent("hl-sub-header");

        var _component_hl_aside = _resolveComponent("hl-aside");

        var _component_hl_main = _resolveComponent("hl-main");

        var _component_hl_container = _resolveComponent("hl-container");

        var _component_hl_footer = _resolveComponent("hl-footer");

        var _component_hl_layout = _resolveComponent("hl-layout");

        return _openBlock(), _createBlock(_component_hl_layout, {
          class: "dom-area",
          "data-name": "外层容器"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_header, {
              class: "dom-area",
              "data-name": "头部"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_sub_header, {
              class: "dom-area",
              "data-name": "子级头部"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_container, {
              class: "dom-area",
              "data-name": "容器"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_aside, {
                  class: "dom-area",
                  "data-name": "侧边栏"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_hl_main, {
                  class: "dom-area",
                  "data-name": "主体内容",
                  style: {
                    "min-height": "300px",
                    "height": "300px"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_footer, {
              class: "dom-area",
              "data-name": "底部"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
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
    "hl-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("header");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("aside");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("main");

      function render(_ctx, _cache) {
        var _component_hl_header = _resolveComponent("hl-header");

        var _component_hl_aside = _resolveComponent("hl-aside");

        var _component_hl_main = _resolveComponent("hl-main");

        var _component_hl_container = _resolveComponent("hl-container");

        var _component_hl_layout = _resolveComponent("hl-layout");

        return _openBlock(), _createBlock(_component_hl_layout, {
          class: "dom-area",
          "data-name": "外层容器"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_header, {
              class: "dom-area",
              "data-name": "头部"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_container, {
              class: "dom-area",
              "data-name": "容器"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_aside, {
                  class: "dom-area",
                  "data-name": "侧边栏"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_hl_main, {
                  class: "dom-area",
                  "data-name": "主体内容",
                  style: {
                    "min-height": "300px",
                    "height": "300px"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/layout.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/layout.md



layoutvue_type_script_lang_ts.render = layoutvue_type_template_id_f5c03190_render

/* harmony default export */ var layout = __webpack_exports__["default"] = (layoutvue_type_script_lang_ts);

/***/ })

}]);