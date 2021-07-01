(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/pagination.md?vue&type=template&id=011eae1c

var paginationvue_type_template_id_011eae1c_hoisted_1 = {
  class: "doc-main-content"
};
var paginationvue_type_template_id_011eae1c_hoisted_2 = {
  class: "doc-content"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Pagination 分页", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "当数据量过多时，使用分页分解数据。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，表示需要显示的内容，用逗号分隔，布局元素会依次显示。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "prev"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("表示上一页，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "next"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为下一页，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "pager"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("表示页码列表，除此以外还提供了"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "jumper"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "total"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和特殊的布局符号"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "->"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "->"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("后的元素会靠右显示，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "jumper"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("表示跳页元素，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "total"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("表示总条目数，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("用于设置每页显示的页码数量。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-24\">\n    <p>页数较少时的效果</p>\n    <hl-pagination layout=\"prev, pager, next\" :total=\"50\"> </hl-pagination>\n  </hl-col>\n  <hl-col span=\"col-24\" class=\"m-t-lg\">\n    <p>大于 7 页时的效果</p>\n    <hl-pagination layout=\"prev, pager, next\" :total=\"1000\"> </hl-pagination>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "she-zhi-zui-da-ye-ma-an-niu-shu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#she-zhi-zui-da-ye-ma-an-niu-shu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 设置最大页码按钮数")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "pager-count"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性可以设置最大页码按钮数。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "默认情况下，当总页数超过 7 页时 Pagination 会折叠多余的页码按钮。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-pagination\n  :page-size=\"20\"\n  :pager-count=\"11\"\n  layout=\"prev, pager, next\"\n  :total=\"1000\"\n>\n</hl-pagination>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "line-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#line-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Line 样式")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "在空间有限的情况下，可以使用简单的小型分页。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-pagination line layout=\"prev, pager, next\" :total=\"50\"> </hl-pagination>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "man-kuan-yu-pai-lie-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#man-kuan-yu-pai-lie-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 满宽与排列方式")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "block"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性会使分页组件变为块级样式。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-pagination block layout=\"prev, pager, next\" :total=\"50\"></hl-pagination>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "pai-lie-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pai-lie-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 排列方式")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "justify"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性能够设置分页组件的排列方式。")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("支持常用的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left(默认)"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "around"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "between"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row justify=\"center\">\n  <hl-col span=\"col-lg-16\" class=\"dom-area\" data-name=\"left\">\n    <hl-pagination\n      layout=\"prev, pager, next\"\n      :total=\"50\"\n      justify=\"left\"\n    ></hl-pagination>\n  </hl-col>\n  <hl-col span=\"col-lg-16\" class=\"m-t-xxl dom-area\" data-name=\"center\">\n    <hl-pagination\n      layout=\"prev, pager, next\"\n      :total=\"50\"\n      justify=\"center\"\n    ></hl-pagination>\n  </hl-col>\n\n  <hl-col span=\"col-lg-16\" class=\"m-t-xxl dom-area\" data-name=\"right\">\n    <hl-pagination\n      layout=\"prev, pager, next\"\n      :total=\"50\"\n      justify=\"right\"\n    ></hl-pagination>\n  </hl-col>\n\n  <hl-col span=\"col-lg-16\" class=\"m-t-xxl dom-area\" data-name=\"between\">\n    <hl-pagination\n      line\n      layout=\"prev, pager, next\"\n      :total=\"50\"\n      justify=\"between\"\n    ></hl-pagination>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fu-jia-gong-neng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fu-jia-gong-neng"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 附加功能")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("根据使用需求，你可以添加其他的功能模块，还可以通过自定义元素和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "justify"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来布局一个两端对齐的分页组件。")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("此例是一个完整的用例，使用了"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size-change"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("事件来处理页码大小和当前页变动时候触发的事件。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "page-sizes"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("接受一个整型数组，数组元素为展示的选择每页显示个数的选项，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-24\" class=\"m-t-xxl\">\n    <hl-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      :current-page=\"currentPage4\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"total, slot, prev, pager, next, sizes, jumper\"\n      :total=\"400\"\n      justify=\"between\"\n    >\n      <div style=\"width:100%; padding: 0 12px\"><a>自定义元素</a></div>\n    </hl-pagination>\n  </hl-col>\n</hl-row>\n<script>\n  export default {\n    methods: {\n      handleSizeChange(val) {\n        console.log(`每页 ${val} 条`)\n      },\n      handleCurrentChange(val) {\n        console.log(`当前页: ${val}`)\n      },\n    },\n    data() {\n      return {\n        currentPage1: 5,\n        currentPage2: 5,\n        currentPage3: 5,\n        currentPage4: 4,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 当只有一页时隐藏分页")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("当只有一页时，通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hide-on-single-page"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来隐藏分页。")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<div>\n  <p>\n    <hl-switch v-model=\"value\" style=\"\"> </hl-switch>\n  </p>\n\n  <hl-pagination\n    :hide-on-single-page=\"value\"\n    :total=\"5\"\n    layout=\"prev, pager, next\"\n  >\n  </hl-pagination>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>line</td><td>是否使用线条分页样式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>justify</td><td>分页组件的排列方式</td><td>String</td><td><code>left</code>, <code>center</code>, <code>right</code>, <code>around</code>, <code>between</code></td><td>left</td></tr><tr><td>page-size</td><td>每页显示条目个数，支持 v-model 双向绑定</td><td>number</td><td>—</td><td>10</td></tr><tr><td>total</td><td>总条目数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>pager-count</td><td>页码按钮的数量，当总页数超过该值时会折叠</td><td>number</td><td>大于等于 5 且小于等于 21 的奇数</td><td>7</td></tr><tr><td>current-page</td><td>当前页数，支持 v-model 双向绑定符</td><td>number</td><td>—</td><td>1</td></tr><tr><td>layout</td><td>组件布局，子组件名用逗号分隔</td><td>String</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, total&#39;</td></tr><tr><td>page-sizes</td><td>每页显示个数选择器的选项设置</td><td>number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>每页显示个数选择器的下拉框类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>替代图标显示的上一页文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>替代图标显示的下一页文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>只有一页时是否隐藏</td><td>boolean</td><td>—</td><td>-</td></tr><tr><td>block</td><td>块级样式</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>size-change</td><td>pageSize 改变时会触发</td><td>每页条数</td></tr><tr><td>current-change</td><td>currentPage 改变时会触发</td><td>当前页</td></tr><tr><td>prev-click</td><td>用户点击上一页按钮改变当前页后触发</td><td>当前页</td></tr><tr><td>next-click</td><td>用户点击下一页按钮改变当前页后触发</td><td>当前页</td></tr></tbody></table><h2 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\"></a> Slot</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>自定义内容，需要在 <code>layout</code> 中列出 <code>slot</code></td></tr></tbody></table>", 6);

function paginationvue_type_template_id_011eae1c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", paginationvue_type_template_id_011eae1c_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", paginationvue_type_template_id_011eae1c_hoisted_2, [_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
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
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
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
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/pagination.md?vue&type=template&id=011eae1c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/pagination.md?vue&type=script&lang=ts


/* harmony default export */ var paginationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "页数较少时的效果", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "大于 7 页时的效果", -1);

      function render(_ctx, _cache) {
        var _component_hl_pagination = _resolveComponent("hl-pagination");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-24"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_pagination, {
                  layout: "prev, pager, next",
                  total: 50
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-24",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_pagination, {
                  layout: "prev, pager, next",
                  total: 1000
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
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_pagination = _resolveComponent("hl-pagination");

        return _openBlock(), _createBlock(_component_hl_pagination, {
          "page-size": 20,
          "pager-count": 11,
          layout: "prev, pager, next",
          total: 1000
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_pagination = _resolveComponent("hl-pagination");

        return _openBlock(), _createBlock(_component_hl_pagination, {
          line: "",
          layout: "prev, pager, next",
          total: 50
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_pagination = _resolveComponent("hl-pagination");

        return _openBlock(), _createBlock(_component_hl_pagination, {
          block: "",
          layout: "prev, pager, next",
          total: 50
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_pagination = _resolveComponent("hl-pagination");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-16",
              class: "dom-area",
              "data-name": "left"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_pagination, {
                  layout: "prev, pager, next",
                  total: 50,
                  justify: "left"
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-16",
              class: "m-t-xxl dom-area",
              "data-name": "center"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_pagination, {
                  layout: "prev, pager, next",
                  total: 50,
                  justify: "center"
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-16",
              class: "m-t-xxl dom-area",
              "data-name": "right"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_pagination, {
                  layout: "prev, pager, next",
                  total: 50,
                  justify: "right"
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-16",
              class: "m-t-xxl dom-area",
              "data-name": "between"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_pagination, {
                  line: "",
                  layout: "prev, pager, next",
                  total: 50,
                  justify: "between"
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
    "hl-demo5": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        style: {
          "width": "100%",
          "padding": "0 12px"
        }
      }, [/*#__PURE__*/_createVNode("a", null, "自定义元素")], -1);

      function render(_ctx, _cache) {
        var _component_hl_pagination = _resolveComponent("hl-pagination");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-24",
              class: "m-t-xxl"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_pagination, {
                  onSizeChange: _ctx.handleSizeChange,
                  onCurrentChange: _ctx.handleCurrentChange,
                  "current-page": _ctx.currentPage4,
                  "page-sizes": [100, 200, 300, 400],
                  "page-size": 100,
                  layout: "total, slot, prev, pager, next, sizes, jumper",
                  total: 400,
                  justify: "between"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onSizeChange", "onCurrentChange", "current-page"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        methods: {
          handleSizeChange: function handleSizeChange(val) {
            console.log("\u6BCF\u9875 " + val + " \u6761");
          },
          handleCurrentChange: function handleCurrentChange(val) {
            console.log("\u5F53\u524D\u9875: " + val);
          }
        },
        data: function data() {
          return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_switch = _resolveComponent("hl-switch");

        var _component_hl_pagination = _resolveComponent("hl-pagination");

        return _openBlock(), _createBlock("div", null, [_createVNode("p", null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          style: {}
        }, null, 8, ["modelValue"])]), _createVNode(_component_hl_pagination, {
          "hide-on-single-page": _ctx.value,
          total: 5,
          layout: "prev, pager, next"
        }, null, 8, ["hide-on-single-page"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/pagination.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/pagination.md



paginationvue_type_script_lang_ts.render = paginationvue_type_template_id_011eae1c_render

/* harmony default export */ var pagination = __webpack_exports__["default"] = (paginationvue_type_script_lang_ts);

/***/ })

}]);