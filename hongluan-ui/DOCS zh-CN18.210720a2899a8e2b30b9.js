(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/grid.md?vue&type=template&id=219fd301

var gridvue_type_template_id_219fd301_hoisted_1 = {
  class: "doc-main-content"
};
var gridvue_type_template_id_219fd301_hoisted_2 = {
  class: "doc-content"
};

var gridvue_type_template_id_219fd301_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h1>Grid 栅格系统</h1><p>鸿鸾使用了 <strong>24 列</strong> 栅格系统，通过对 <code>row</code> 和 <code>col</code> 组件的定义，即可轻松创造出丰富且响应式的界面布局</p><h2 id=\"ji-chu-bu-ju\"><a class=\"header-anchor\" href=\"#ji-chu-bu-ju\"></a> 基础布局</h2><p>使用 <code>span</code> 属性来为每一个 <code>col</code> 设置比例 例如 <code>span=&quot;col-12&quot;</code></p>", 4);

var gridvue_type_template_id_219fd301_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("strong", null, "24 列"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 栅格表示你可以将宽度拆分为 24 列，24 为 100%、12 为 50%、6 为 25%，依此类推。所以你可以将 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置为 1-24 的任意数值，例如："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col-5")])], -1);

var gridvue_type_template_id_219fd301_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col-12\"><em>col-12</em></hl-col>\n  <hl-col span=\"col-12\"><em>col-12</em></hl-col>\n</hl-row>\n<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col-8\"><em>col-8</em></hl-col>\n  <hl-col span=\"col-8\"><em>col-8</em></hl-col>\n  <hl-col span=\"col-8\"><em>col-8</em></hl-col>\n</hl-row>\n\n<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col-6\"><em>col-6</em></hl-col>\n  <hl-col span=\"col-6\"><em>col-6</em></hl-col>\n  <hl-col span=\"col-6\"><em>col-6</em></hl-col>\n  <hl-col span=\"col-6\"><em>col-6</em></hl-col>\n</hl-row>\n")], -1);

var gridvue_type_template_id_219fd301_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "xiang-ying-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xiang-ying-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 响应式")], -1);

var gridvue_type_template_id_219fd301_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("你可以为每个成员 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 赋予响应窗口尺寸的标签，例如 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "span=\"col-md-12\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("strong", null, "可以多同时设置多个响应式个标签哦"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")], -1);

var gridvue_type_template_id_219fd301_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("响应式尺寸有 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "sm"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "xl"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "xxl"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" , 参考页尾的窗口响应对照表")])], -1);

var gridvue_type_template_id_219fd301_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col-md-4\"><em>col-md-4</em></hl-col>\n  <hl-col span=\"col-md-8\"><em>col-md-8</em></hl-col>\n  <hl-col span=\"col-md-12\"><em>col-md-12</em></hl-col>\n</hl-row>\n\n<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col-lg-12\"><em>col-lg-12</em></hl-col>\n  <hl-col span=\"col-lg-12\"><em>col-lg-12</em></hl-col>\n</hl-row>\n\n<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col-lg-8 col-xl-8\"><em>col-lg-8 col-xl-8</em></hl-col>\n  <hl-col span=\"col-lg-12 col-xl-8\"><em>col-lg-12 col-xl-8</em></hl-col>\n  <hl-col span=\"col-lg-4 col-xl-8\"><em>col-lg-4 col-xl-8</em></hl-col>\n</hl-row>\n")], -1);

var gridvue_type_template_id_219fd301_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jun-deng-fen-bu-lie"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jun-deng-fen-bu-lie"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 均等分布列")], -1);

var gridvue_type_template_id_219fd301_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("当你未设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 比例的时候，它们将自动均等分配宽度，当 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的宽度小于内容宽度的时候它们会自动换行显示。")], -1);

var gridvue_type_template_id_219fd301_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 也支持相同的响应式尺寸例如： "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col-md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col-lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 等")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col\"><em>col</em></hl-col>\n  <hl-col span=\"col\"><em>col</em></hl-col>\n  <hl-col span=\"col\"><em>col</em></hl-col>\n</hl-row>\n<hl-row class=\"show-col\">\n  <hl-col span=\"col\"><em>col</em></hl-col>\n  <hl-col span=\"col\"><em>col</em></hl-col>\n  <hl-col span=\"col\"><em>col</em></hl-col>\n</hl-row>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "pian-yi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pian-yi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 偏移")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("你可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来偏移某个 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 列，例如 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "offset=\"offset-md-8\"")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 拥有跟 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 一样的宽度比例设定和响应式的特性。")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row class=\"show-col gap-none\">\n  <hl-col span=\"col-md-8\"><em>col-md-8</em></hl-col>\n  <hl-col span=\"col-md-8\" offset=\"offset-md-8\"><em>col-md-8 offset-md-8</em></hl-col>\n</hl-row>\n\n<hl-row class=\"show-col\">\n  <hl-col span=\"col-md-6\"><em>col-md-8</em></hl-col>\n  <hl-col span=\"col-lg-12\" offset=\"offset-lg-6\"><em>col-lg-12 offset-lg-6</em></hl-col>\n</hl-row>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jian-ju-she-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jian-ju-she-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 间距设置")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("鸿鸾提供了规范化间距尺寸来设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 之间的间距, 例如为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-row>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 增加 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "gap=\"md\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("你也可以给 gap 传递 number 类型的数值来自定义间距，例如： "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ":gap=100\"")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-select v-model=\"value\" clearable placeholder=\"请选择\">\n  <template v-for=\"item in options\">\n    <hl-option v-if=\"item.divider\" divider> </hl-option>\n    <hl-option v-else :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </template>\n</hl-select>\n\n<hl-row :gap=\"value\" class=\"show-col\">\n  <hl-col span=\"col-md-8\"><em>{{ value }}</em></hl-col>\n  <hl-col span=\"col-md-8\"><em>{{ value }}</em></hl-col>\n  <hl-col span=\"col-md-8\"><em>{{ value }}</em></hl-col>\n</hl-row>\n\n<hl-row :gap=\"80\" class=\"show-col\">\n  <hl-col span=\"col-md-8\"><em>自定义</em></hl-col>\n  <hl-col span=\"col-md-8\"><em>自定义</em></hl-col>\n  <hl-col span=\"col-md-8\"><em>自定义</em></hl-col>\n</hl-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'none',\n            label: 'none',\n          },\n          {\n            divider: true,\n          },\n          {\n            value: 'sm',\n            label: 'sm',\n          },\n          {\n            value: 'md',\n            label: 'md',\n          },\n          {\n            value: 'lg',\n            label: 'lg',\n          },\n          {\n            value: 'xl',\n            label: 'xl',\n          },\n          {\n            value: 'xxl',\n            label: 'xxl',\n          },\n        ],\n        value: 'md',\n      }\n    },\n    methods: {\n      open() {\n        console.log(1)\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "heng-xiang-dui-qi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#heng-xiang-dui-qi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 横向对齐")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "align"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可改变子元素的排列方式，例如 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "align=\"center\"")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "align"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" , "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" , "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" , "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "around"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" , "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "between"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 即可改变子元素的横向排列方式，")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"none\" class=\"show-col dom-area\" align=\"left\" data-name=\"left\">\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n</hl-row>\n\n<hl-row gap=\"none\" class=\"show-col dom-area\" align=\"center\" data-name=\"center\">\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n</hl-row>\n\n<hl-row gap=\"none\" class=\"show-col dom-area\" align=\"right\" data-name=\"right\">\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n</hl-row>\n\n<hl-row gap=\"none\" class=\"show-col dom-area\" align=\"around\" data-name=\"around\">\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n</hl-row>\n\n<hl-row gap=\"none\" class=\"show-col dom-area\" align=\"between\" data-name=\"between\">\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n  <hl-col span=\"col-md-6\"><em>col-md-6</em></hl-col>\n</hl-row>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zong-xiang-dui-qi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zong-xiang-dui-qi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 纵向对齐")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "align"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性指定 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" , "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "middle"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" , "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 即可改变子元素的纵向排列方式。")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col\">\n    <hl-row gap=\"none\" class=\"show-col bg-stripes\" align=\"top\" style=\"height: 10rem\">\n      <hl-col span=\"col\"><em>col</em></hl-col>\n      <hl-col span=\"col\"><em>col</em></hl-col>\n    </hl-row>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-row gap=\"none\" class=\"show-col bg-stripes\" align=\"middle\" style=\"height: 10rem\">\n      <hl-col span=\"col\"><em>col</em></hl-col>\n      <hl-col span=\"col\"><em>col</em></hl-col>\n    </hl-row>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-row gap=\"none\" class=\"show-col bg-stripes\" align=\"bottom\" style=\"height: 10rem\">\n      <hl-col span=\"col\"><em>col</em></hl-col>\n      <hl-col span=\"col\"><em>col</em></hl-col>\n    </hl-row>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "grid-zi-dong-wang-ge-bu-ju"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#grid-zi-dong-wang-ge-bu-ju"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Grid 自动网格布局")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "网格布局（Grid）是目前最强大的 CSS 布局方案。它将网页划分成一个个网格以便你任意组合。", -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("同样，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "count-*-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 也支持相同的响应式尺寸，例如： "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "count-xl-3"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(",")])], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row layout=\"grid\" count=\"count-xl-3\" gap=\"md\" direction=\"vertical\" class=\"show-col\">\n  <hl-col span=\"col\"><em>1</em></hl-col>\n  <hl-col span=\"col\"><em>2</em></hl-col>\n  <hl-col span=\"col\"><em>3</em></hl-col>\n  <hl-col span=\"col\"><em>4</em></hl-col>\n  <hl-col span=\"col\"><em>5</em></hl-col>\n  <hl-col span=\"col\"><em>6</em></hl-col>\n  <hl-col span=\"col\"><em>7</em></hl-col>\n  <hl-col span=\"col\"><em>8</em></hl-col>\n  <hl-col span=\"col\"><em>9</em></hl-col>\n</hl-row>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "pai-lie-shun-xu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pai-lie-shun-xu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 排列顺序")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以设置网格的排列顺序，例如 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "direction=\"vertical\"")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("direction 支持的参数有： 横向排序 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 纵向排序 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "horizontal")])], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row layout=\"grid\" count=\"count-xl-3\" gap=\"md\" direction=\"horizontal\" class=\"show-col\">\n  <hl-col span=\"col\"><em>1</em></hl-col>\n  <hl-col span=\"col\"><em>2</em></hl-col>\n  <hl-col span=\"col\"><em>3</em></hl-col>\n  <hl-col span=\"col\"><em>4</em></hl-col>\n  <hl-col span=\"col\"><em>5</em></hl-col>\n  <hl-col span=\"col\"><em>6</em></hl-col>\n  <hl-col span=\"col\"><em>7</em></hl-col>\n  <hl-col span=\"col\"><em>8</em></hl-col>\n  <hl-col span=\"col\"><em>9</em></hl-col>\n</hl-row>\n")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "kua-du-she-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kua-du-she-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 跨度设置")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-col>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "span"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性，支持传入跨度例如："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".grid-col-span-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，同时也支持传入多个响应式跨度标签")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以设置跨行"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".grid-row-span-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和跨列"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".grid-col-span-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("也允许同时设置它们。同时跨度类也支持响应尺寸标签，例如 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "grid-row-span-lg-*"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("或"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "grid-col-span-lg-*")])], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row layout=\"grid\" count=\"count-3\" gap=\"md\" direction=\"vertical\" class=\"show-col\">\n  <hl-col span=\"col grid-col-span-3\"><em>1</em></hl-col>\n  <hl-col span=\"col\"><em>2</em></hl-col>\n  <hl-col span=\"col grid-row-span-lg-1 grid-row-span-xl-2\"><em>3</em></hl-col>\n  <hl-col span=\"col\"><em>4</em></hl-col>\n  <hl-col span=\"col\"><em>5</em></hl-col>\n  <hl-col span=\"col\"><em>6</em></hl-col>\n</hl-row>\n\n<br />\n<br />\n<p>跨度类与 <code>.col-*`</code> 类似，但<code>.col-*</code> 是根据24栅格来占比的，而跨度类是基于 <code>hl-row</code> 的 <code>count</code> 属性来占比的。</p>\n<p>比如：当 <code>count=\"count-3\"</code> 时 <code>.grid-col-span-3</code> 即为 3/3， <code>.grid-col-span-1</code> 即为 1/3。</p>\n")], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "flow-zi-dong-liu-bu-ju"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#flow-zi-dong-liu-bu-ju"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Flow 自动流布局")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "流布局能够自动根据可用的空间插入元素。通常用于展现瀑布流的布局方案。", -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "flow"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性能够创建瀑布流式布局。 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "count"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 表示列数，可以设置成数字或者使用断点字符串设置。 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "gap"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 表示间距，可以设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "sm"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 、 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 、 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 、 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "xl"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" ，也可以设置数值，单位 px。")])], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row layout=\"flow\" count=\"count-lg-2 count-xl-3 count-xxl-4\" gap=\"md\" class=\"show-col\">\n  <hl-col span=\"col\" style=\"height: 300px;\"><em>col1</em></hl-col>\n  <hl-col span=\"col\" style=\"height: 200px;\"><em>col2</em></hl-col>\n  <hl-col span=\"col\" style=\"height: 120px;\"><em>col3</em></hl-col>\n  <hl-col span=\"col\" style=\"height: 380px;\"><em>col4</em></hl-col>\n  <hl-col span=\"col\" style=\"height: 240px;\"><em>col5</em></hl-col>\n  <hl-col span=\"col\" style=\"height: 260px;\"><em>col6</em></hl-col>\n  <hl-col span=\"col\" style=\"height: 380px;\"><em>col7</em></hl-col>\n  <hl-col span=\"col\" style=\"height: 120px;\"><em>col8</em></hl-col>\n</hl-row>\n")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"row-attributes\"><a class=\"header-anchor\" href=\"#row-attributes\"></a> Row Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>align</td><td>栅格的排列方式</td><td>string</td><td>top/middle/bottom/left/center/right/around/between</td><td>-</td></tr><tr><td>layout</td><td>自动布局类型</td><td>string</td><td>flow / grid</td><td>-</td></tr><tr><td>count</td><td>自动布局列数</td><td>string/number</td><td></td><td>1</td></tr><tr><td>gap</td><td>col 列间距</td><td>string/number</td><td>sm/md/lg/xxl/数值</td><td>-</td></tr><tr><td>direction</td><td>自动布局的排列方向</td><td>string</td><td>vertical / horizontal</td><td>vertical</td></tr></tbody></table><h2 id=\"col-attributes\"><a class=\"header-anchor\" href=\"#col-attributes\"></a> Col Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>col 占据的格数</td><td>number/string</td><td>—</td><td></td></tr><tr><td>offset</td><td>col 偏移的格数</td><td>number/string</td><td>—</td><td></td></tr><tr><td>none</td><td>auto</td><td>number/object (例如： .col)</td><td>—</td><td>—</td></tr><tr><td>sm</td><td><code>≥640px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： .col-sm-)</td><td>—</td><td>—</td></tr><tr><td>md</td><td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： .col-md-)</td><td>—</td><td>—</td></tr><tr><td>lg</td><td><code>≥1024px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： .col-lg-)</td><td>—</td><td>—</td></tr><tr><td>xl</td><td><code>≥1280px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： .col-xl-)</td><td>—</td><td>—</td></tr><tr><td>xxl</td><td><code>≥1536px</code> 响应式栅格数或者栅格属性对象</td><td>number/object (例如： .col-xxl-)</td><td>—</td><td>—</td></tr></tbody></table>", 4);

function gridvue_type_template_id_219fd301_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_hl_demo7 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo7");

  var _component_hl_demo8 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo8");

  var _component_hl_demo9 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo9");

  var _component_hl_demo10 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo10");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", gridvue_type_template_id_219fd301_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", gridvue_type_template_id_219fd301_hoisted_2, [gridvue_type_template_id_219fd301_hoisted_3, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [gridvue_type_template_id_219fd301_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [gridvue_type_template_id_219fd301_hoisted_7];
    }),
    _: 1
  }), gridvue_type_template_id_219fd301_hoisted_9, gridvue_type_template_id_219fd301_hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [gridvue_type_template_id_219fd301_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [gridvue_type_template_id_219fd301_hoisted_11];
    }),
    _: 1
  }), gridvue_type_template_id_219fd301_hoisted_13, gridvue_type_template_id_219fd301_hoisted_14, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [gridvue_type_template_id_219fd301_hoisted_15];
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
  }), _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_32, _hoisted_33, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    _: 1
  }), _hoisted_36, _hoisted_37, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), _hoisted_40, _hoisted_41, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_43];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    _: 1
  }), _hoisted_44, _hoisted_45, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo10)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_47];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_46];
    }),
    _: 1
  }), _hoisted_48]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/grid.md?vue&type=template&id=219fd301

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/grid.md?vue&type=script&lang=ts


/* harmony default export */ var gridvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "col-12", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "col-12", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "col-8", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "col-8", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "col-8", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "col-6", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("em", null, "col-6", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("em", null, "col-6", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("em", null, "col-6", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "col-md-4", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "col-md-8", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "col-md-12", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "col-lg-12", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "col-lg-12", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "col-lg-8 col-xl-8", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("em", null, "col-lg-12 col-xl-8", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("em", null, "col-lg-4 col-xl-8", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-8 col-xl-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-12 col-xl-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-4 col-xl-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "col-md-8", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "col-md-8 offset-md-8", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "col-md-8", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "col-lg-12 offset-lg-6", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          class: "show-col gap-none"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8",
              offset: "offset-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-12",
              offset: "offset-lg-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createCommentVNode = vue_esm_browser_prod["k" /* createCommentVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "自定义", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "自定义", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "自定义", -1);

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          clearable: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_Fragment, null, [item.divider ? (_openBlock(), _createBlock(_component_hl_option, {
                key: 0,
                divider: ""
              })) : (_openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]))], 64);
            }), 256))];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_row, {
          gap: _ctx.value,
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_createVNode("em", null, _toDisplayString(_ctx.value), 1)];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_createVNode("em", null, _toDisplayString(_ctx.value), 1)];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_createVNode("em", null, _toDisplayString(_ctx.value), 1)];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["gap"]), _createVNode(_component_hl_row, {
          gap: 80,
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'none',
              label: 'none'
            }, {
              divider: true
            }, {
              value: 'sm',
              label: 'sm'
            }, {
              value: 'md',
              label: 'md'
            }, {
              value: 'lg',
              label: 'lg'
            }, {
              value: 'xl',
              label: 'xl'
            }, {
              value: 'xxl',
              label: 'xxl'
            }],
            value: 'md'
          };
        },
        methods: {
          open: function open() {
            console.log(1);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("em", null, "col-md-6", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          gap: "none",
          class: "show-col dom-area",
          align: "left",
          "data-name": "left"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          gap: "none",
          class: "show-col dom-area",
          align: "center",
          "data-name": "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          gap: "none",
          class: "show-col dom-area",
          align: "right",
          "data-name": "right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          gap: "none",
          class: "show-col dom-area",
          align: "around",
          "data-name": "around"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          gap: "none",
          class: "show-col dom-area",
          align: "between",
          "data-name": "between"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-6"
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "col", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, {
                  gap: "none",
                  class: "show-col bg-stripes",
                  align: "top",
                  style: {
                    "height": "10rem"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, {
                      span: "col"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_col, {
                      span: "col"
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
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, {
                  gap: "none",
                  class: "show-col bg-stripes",
                  align: "middle",
                  style: {
                    "height": "10rem"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, {
                      span: "col"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_3];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_col, {
                      span: "col"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, {
                  gap: "none",
                  class: "show-col bg-stripes",
                  align: "bottom",
                  style: {
                    "height": "10rem"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, {
                      span: "col"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_col, {
                      span: "col"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    })];
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
    "hl-demo7": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "1", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "2", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "3", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "4", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "5", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "6", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("em", null, "7", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("em", null, "8", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("em", null, "9", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          layout: "grid",
          count: "count-xl-3",
          gap: "md",
          direction: "vertical",
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
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
    "hl-demo8": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "1", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "2", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "3", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "4", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "5", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "6", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("em", null, "7", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("em", null, "8", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("em", null, "9", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          layout: "grid",
          count: "count-xl-3",
          gap: "md",
          direction: "horizontal",
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
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
    "hl-demo9": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _createStaticVNode = vue_esm_browser_prod["m" /* createStaticVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "1", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "2", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "3", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "4", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "5", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "6", -1);

      var _hoisted_7 = /*#__PURE__*/_createStaticVNode("<br><br><p>跨度类与 <code>.col-*`</code> 类似，但<code>.col-*</code> 是根据24栅格来占比的，而跨度类是基于 <code>hl-row</code> 的 <code>count</code> 属性来占比的。</p><p>比如：当 <code>count=&quot;count-3&quot;</code> 时 <code>.grid-col-span-3</code> 即为 3/3， <code>.grid-col-span-1</code> 即为 1/3。</p>", 4);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          layout: "grid",
          count: "count-3",
          gap: "md",
          direction: "vertical",
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col grid-col-span-3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col grid-row-span-lg-1 grid-row-span-xl-2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _hoisted_7], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo10": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("em", null, "col1", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("em", null, "col2", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("em", null, "col3", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("em", null, "col4", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("em", null, "col5", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("em", null, "col6", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("em", null, "col7", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("em", null, "col8", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          layout: "flow",
          count: "count-lg-2 count-xl-3 count-xxl-4",
          gap: "md",
          class: "show-col"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "300px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "200px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "120px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "380px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "240px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "260px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "380px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col",
              style: {
                "height": "120px"
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/grid.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/grid.md



gridvue_type_script_lang_ts.render = gridvue_type_template_id_219fd301_render

/* harmony default export */ var grid = __webpack_exports__["default"] = (gridvue_type_script_lang_ts);

/***/ })

}]);