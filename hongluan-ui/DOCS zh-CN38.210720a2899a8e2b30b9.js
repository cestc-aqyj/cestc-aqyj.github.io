(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/radio.md?vue&type=template&id=43db1420

var radiovue_type_template_id_43db1420_hoisted_1 = {
  class: "doc-main-content"
};
var radiovue_type_template_id_43db1420_hoisted_2 = {
  class: "doc-content"
};

var radiovue_type_template_id_43db1420_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Radio 单选框", -1);

var radiovue_type_template_id_43db1420_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "用于在多个备选项中选中单个状态。若选项过多，建议使用 Select 选择器。", -1);

var radiovue_type_template_id_43db1420_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("要使用 Radio 组件，只需要设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("绑定变量，选中意味着变量的值为相应 Radio "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性的值，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以是"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("或"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var radiovue_type_template_id_43db1420_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-radio v-model=\"radio\" label=\"1\">备选项</hl-radio>\n<hl-radio v-model=\"radio\" label=\"2\">备选项</hl-radio>\n\n<script>\n  export default {\n    data() {\n      return {\n        radio: '1',\n      }\n    },\n  }\n</script>\n")], -1);

var radiovue_type_template_id_43db1420_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zhuang-tai-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhuang-tai-yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 状态颜色")], -1);

var radiovue_type_template_id_43db1420_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Radio 的颜色与状态颜色保持一致。可选值为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "primary"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "danger"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var radiovue_type_template_id_43db1420_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-radio v-model=\"radio\" label=\"1\">默认</hl-radio>\n<hl-radio v-model=\"radio\" label=\"2\" type=\"primary\">Primary</hl-radio>\n<hl-radio v-model=\"radio\" label=\"3\" type=\"success\">Success</hl-radio>\n<hl-radio v-model=\"radio\" label=\"4\" type=\"warning\">Warning</hl-radio>\n<hl-radio v-model=\"radio\" label=\"5\" type=\"danger\">Danger</hl-radio>\n<hl-radio v-model=\"radio\" label=\"6\" type=\"info\">Info</hl-radio>\n\n<script>\n  export default {\n    data() {\n      return {\n        radio: '1',\n      }\n    },\n  }\n</script>\n")], -1);

var radiovue_type_template_id_43db1420_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fill-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fill-yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Fill 颜色")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "使用 fill 属性，可以使 Radio 呈现为填充样式。")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-radio v-model=\"radio\" label=\"1\" fill>默认</hl-radio>\n<hl-radio v-model=\"radio\" label=\"2\" type=\"primary\" fill>Primary</hl-radio>\n<hl-radio v-model=\"radio\" label=\"3\" type=\"success\" fill>Success</hl-radio>\n<hl-radio v-model=\"radio\" label=\"4\" type=\"warning\" fill>Warning</hl-radio>\n<hl-radio v-model=\"radio\" label=\"5\" type=\"danger\" fill>Danger</hl-radio>\n<hl-radio v-model=\"radio\" label=\"6\" type=\"info\" fill>Info</hl-radio>\n\n<script>\n  export default {\n    data() {\n      return {\n        radio: '1',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chi-cun-xiu-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chi-cun-xiu-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 尺寸修饰")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Radio 提供了 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "sm"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 三种尺寸样式，默认为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 尺寸")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-radio v-model=\"radio\" label=\"1\" size=\"sm\" class=\"m-r-md\">默认</hl-radio>\n<hl-radio v-model=\"radio\" label=\"2\" type=\"primary\" size=\"md\" class=\"m-r-md\">Primary</hl-radio>\n<hl-radio v-model=\"radio\" label=\"3\" type=\"success\" size=\"lg\" class=\"m-r-md\">Success</hl-radio>\n\n\n<script>\n  export default {\n    data() {\n      return {\n        radio: '1',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("只要在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-radio"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("元素中设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可，它接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为禁用。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-radio disabled v-model=\"radio\" label=\"禁用\">备选项</hl-radio>\n  <hl-radio disabled v-model=\"radio\" label=\"选中且禁用\">备选项</hl-radio>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        radio: '选中且禁用',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jia-cu-miao-bian"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jia-cu-miao-bian"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 加粗描边")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("给 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 增加 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bold"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性即可使它的边缘看起来更突出一些。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-radio v-model=\"radio\" label=\"选中\" bold>备选项</hl-radio>\n  <hl-radio v-model=\"radio\" label=\"未选中\" bold>备选项</hl-radio>\n  <hl-radio v-model=\"radio\" label=\"未选中2\">未加粗</hl-radio>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        radio: '选中',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dan-xuan-kuang-zu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dan-xuan-kuang-zu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 单选框组")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("单选框组提供了一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indent"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来自定义元素之间的边距，例如："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indent=\"0px\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，默认为 12px")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("结合"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-radio-group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("元素和子元素"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-radio"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以实现单选组，在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-radio-group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("中绑定"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-radio"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("中设置好"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可，无需再给每一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-radio"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("绑定变量，另外，还提供了"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("事件来响应变化，它会传入一个参数"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-radio-group v-model=\"radio\" :indent=\"12\" type=\"primary\" size=\"lg\">\n    <hl-radio label=\"a\">备选项</hl-radio>\n    <hl-radio label=\"b\">备选项</hl-radio>\n    <hl-radio label=\"c\">备选项</hl-radio>\n  </hl-radio-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        radio: 'a',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义样式")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("只要在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-radio"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("元素中设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "custom"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可，它接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为自定义样式。")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("你可以根据"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-radio>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件提供的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "is-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "is-focus"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "is-disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的样式名称来自定义设计。")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col\">\n    <p>使用hl-group组件实现自定义radio</p>\n    <hl-group style=\"--indent:-2px\">\n      <hl-radio v-model=\"radio1\" label=\"北京\" custom type=\"success\"\n        ><div class=\"demo-check-img\"><img :src=\"src\" /></div\n      ></hl-radio>\n      <hl-radio v-model=\"radio1\" label=\"上海\" custom type=\"primary\"\n        ><div class=\"demo-check-img\"><img :src=\"src\" /></div\n      ></hl-radio>\n      <hl-radio v-model=\"radio1\" label=\"广州\" custom type=\"danger\"\n        ><div class=\"demo-check-img\"><img :src=\"src\" /></div\n      ></hl-radio>\n      <hl-radio v-model=\"radio1\" label=\"深圳\" custom type=\"warning\"\n        ><div class=\"demo-check-img\"><img :src=\"src\" /></div\n      ></hl-radio>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <p>使用hl-radio-group组件实现自定义radio</p>\n    <hl-radio-group\n      v-model=\"radio2\"\n      type=\"danger\"\n      style=\"--indent: 6px\"\n      custom\n    >\n      <hl-radio label=\"北京\"><div class=\"demo-check-text\">北京</div></hl-radio>\n      <hl-radio label=\"上海\"><div class=\"demo-check-text\">上海</div></hl-radio>\n      <hl-radio label=\"广州\"><div class=\"demo-check-text\">广州</div></hl-radio>\n      <hl-radio label=\"深圳\"><div class=\"demo-check-text\">深圳</div></hl-radio>\n    </hl-radio-group>\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        src:\n          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544970959,3405281631&fm=26&gp=0.jpg',\n        radio1: '上海',\n        radio2: '上海',\n        radio3: '上海',\n        radio4: '上海',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"radio-attributes\"><a class=\"header-anchor\" href=\"#radio-attributes\"></a> Radio Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Radio 的 value</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>bold</td><td>加粗边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸修饰</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>custom</td><td>自定义样式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>颜色状态</td><td>string</td><td>info, primary, warning, danger, success</td><td>—</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h2 id=\"radio-events\"><a class=\"header-anchor\" href=\"#radio-events\"></a> Radio Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发的事件</td><td>选中的 Radio label 值</td></tr></tbody></table><h2 id=\"radio-group-attributes\"><a class=\"header-anchor\" href=\"#radio-group-attributes\"></a> Radio-group Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>bold</td><td>加粗边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>custom</td><td>自定义样式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>颜色状态</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>indent</td><td>间距</td><td>string / number</td><td>-</td><td>12px</td></tr></tbody></table><h2 id=\"radio-group-events\"><a class=\"header-anchor\" href=\"#radio-group-events\"></a> Radio-group Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发的事件</td><td>选中的 Radio label 值</td></tr></tbody></table>", 8);

function radiovue_type_template_id_43db1420_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_hl_demo7 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo7");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", radiovue_type_template_id_43db1420_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", radiovue_type_template_id_43db1420_hoisted_2, [radiovue_type_template_id_43db1420_hoisted_3, radiovue_type_template_id_43db1420_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_43db1420_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_43db1420_hoisted_5];
    }),
    _: 1
  }), radiovue_type_template_id_43db1420_hoisted_7, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_43db1420_hoisted_9];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_43db1420_hoisted_8];
    }),
    _: 1
  }), radiovue_type_template_id_43db1420_hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/radio.md?vue&type=template&id=43db1420

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/radio.md?vue&type=script&lang=ts


/* harmony default export */ var radiovue_type_script_lang_ts = ({
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "1"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "2"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: '1'
          };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("默认");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Primary");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Success");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Warning");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Danger");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Info");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "1"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "2",
          type: "primary"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "3",
          type: "success"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "4",
          type: "warning"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "5",
          type: "danger"
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "6",
          type: "info"
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: '1'
          };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("默认");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Primary");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Success");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Warning");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Danger");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Info");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "1",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "2",
          type: "primary",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "3",
          type: "success",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "4",
          type: "warning",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "5",
          type: "danger",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "6",
          type: "info",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: '1'
          };
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
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("默认");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Primary");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Success");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "1",
          size: "sm",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "2",
          type: "primary",
          size: "md",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "3",
          type: "success",
          size: "lg",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: '1'
          };
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
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio, {
          disabled: "",
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "禁用"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          disabled: "",
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "选中且禁用"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: '选中且禁用'
          };
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
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("未加粗");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "选中",
          bold: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "未选中",
          bold: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "未选中2"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: '选中'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        var _component_hl_radio_group = _resolveComponent("hl-radio-group");

        return _openBlock(), _createBlock(_component_hl_radio_group, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          indent: 12,
          type: "primary",
          size: "lg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_radio, {
              label: "a"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: "b"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: "c"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: 'a'
          };
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "使用hl-group组件实现自定义radio", -1);

      var _hoisted_2 = {
        class: "demo-check-img"
      };
      var _hoisted_3 = {
        class: "demo-check-img"
      };
      var _hoisted_4 = {
        class: "demo-check-img"
      };
      var _hoisted_5 = {
        class: "demo-check-img"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("p", null, "使用hl-radio-group组件实现自定义radio", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "demo-check-text"
      }, "北京", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "demo-check-text"
      }, "上海", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "demo-check-text"
      }, "广州", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "demo-check-text"
      }, "深圳", -1);

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_radio_group = _resolveComponent("hl-radio-group");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_group, {
                  style: {
                    "--indent": "-2px"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_radio, {
                      modelValue: _ctx.radio1,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                        return _ctx.radio1 = $event;
                      }),
                      label: "北京",
                      custom: "",
                      type: "success"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode("div", _hoisted_2, [_createVNode("img", {
                          src: _ctx.src
                        }, null, 8, ["src"])])];
                      }),
                      _: 1
                    }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
                      modelValue: _ctx.radio1,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                        return _ctx.radio1 = $event;
                      }),
                      label: "上海",
                      custom: "",
                      type: "primary"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode("div", _hoisted_3, [_createVNode("img", {
                          src: _ctx.src
                        }, null, 8, ["src"])])];
                      }),
                      _: 1
                    }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
                      modelValue: _ctx.radio1,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                        return _ctx.radio1 = $event;
                      }),
                      label: "广州",
                      custom: "",
                      type: "danger"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode("div", _hoisted_4, [_createVNode("img", {
                          src: _ctx.src
                        }, null, 8, ["src"])])];
                      }),
                      _: 1
                    }, 8, ["modelValue"]), _createVNode(_component_hl_radio, {
                      modelValue: _ctx.radio1,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.radio1 = $event;
                      }),
                      label: "深圳",
                      custom: "",
                      type: "warning"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode("div", _hoisted_5, [_createVNode("img", {
                          src: _ctx.src
                        }, null, 8, ["src"])])];
                      }),
                      _: 1
                    }, 8, ["modelValue"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6, _createVNode(_component_hl_radio_group, {
                  modelValue: _ctx.radio2,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.radio2 = $event;
                  }),
                  type: "danger",
                  style: {
                    "--indent": "6px"
                  },
                  custom: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_radio, {
                      label: "北京"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_radio, {
                      label: "上海"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_radio, {
                      label: "广州"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_radio, {
                      label: "深圳"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544970959,3405281631&fm=26&gp=0.jpg',
            radio1: '上海',
            radio2: '上海',
            radio3: '上海',
            radio4: '上海'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/radio.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/radio.md



radiovue_type_script_lang_ts.render = radiovue_type_template_id_43db1420_render

/* harmony default export */ var zh_CN_radio = __webpack_exports__["default"] = (radiovue_type_script_lang_ts);

/***/ })

}]);