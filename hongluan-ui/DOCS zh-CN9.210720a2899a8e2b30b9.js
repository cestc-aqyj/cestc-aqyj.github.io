(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/checkbox.md?vue&type=template&id=68cca6ac

var checkboxvue_type_template_id_68cca6ac_hoisted_1 = {
  class: "doc-main-content"
};
var checkboxvue_type_template_id_68cca6ac_hoisted_2 = {
  class: "doc-content"
};

var checkboxvue_type_template_id_68cca6ac_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Checkbox 复选框", -1);

var checkboxvue_type_template_id_68cca6ac_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "使用完全重构的 checkbox 组件来创建一致的跨浏览器和跨设备的复选框。", -1);

var checkboxvue_type_template_id_68cca6ac_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("元素中定义"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("绑定变量，单一的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("中，默认绑定变量的值会是"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，选中为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var checkboxvue_type_template_id_68cca6ac_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <!-- `checked` 为 true 或 false -->\n  <hl-checkbox v-model=\"checked\">备选项</hl-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"zhuang-tai-yan-se\"><a class=\"header-anchor\" href=\"#zhuang-tai-yan-se\"></a> 状态颜色</h2><p>Radio 的颜色与状态颜色保持一致。可选值为<code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code>、<code>info</code>。</p>", 2);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-checkbox v-model=\"checked1\">Default</hl-checkbox>\n<hl-checkbox v-model=\"checked2\" type=\"primary\">Primary</hl-checkbox>\n<hl-checkbox v-model=\"checked3\" type=\"success\">Success</hl-checkbox>\n<hl-checkbox v-model=\"checked4\" type=\"warning\">Warning</hl-checkbox>\n<hl-checkbox v-model=\"checked5\" type=\"danger\">Danger</hl-checkbox>\n<hl-checkbox v-model=\"checked6\" type=\"info\">Info</hl-checkbox>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: false,\n        checked3: false,\n        checked4: false,\n        checked5: false,\n        checked6: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fill-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fill-yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Fill 颜色")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "使用 fill 属性，可以使 Checkbox 呈现为填充样式。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-checkbox v-model=\"checked1\" fill>Default</hl-checkbox>\n<hl-checkbox v-model=\"checked2\" type=\"primary\" fill>Primary</hl-checkbox>\n<hl-checkbox v-model=\"checked3\" type=\"success\" fill>Success</hl-checkbox>\n<hl-checkbox v-model=\"checked4\" type=\"warning\" fill>Warning</hl-checkbox>\n<hl-checkbox v-model=\"checked5\" type=\"danger\" fill>Danger</hl-checkbox>\n<hl-checkbox v-model=\"checked6\" type=\"info\" fill>Info</hl-checkbox>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: false,\n        checked3: false,\n        checked4: false,\n        checked5: false,\n        checked6: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chi-cun-xiu-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chi-cun-xiu-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 尺寸修饰")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Checkbox 提供了 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "sm"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 三种尺寸样式，默认为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 尺寸")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-checkbox v-model=\"checked1\" size=\"sm\">Default</hl-checkbox>\n<hl-checkbox v-model=\"checked2\" type=\"primary\">Primary</hl-checkbox>\n<hl-checkbox v-model=\"checked3\" type=\"success\" size=\"lg\">Success</hl-checkbox>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: false,\n        checked3: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yuan-xing-fu-xuan-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yuan-xing-fu-xuan-kuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 圆形复选框")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为复选框加上 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "round"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性，即可将它们变成圆形，并且拥有 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 相似的外观。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-checkbox v-model=\"checked1\" round>备选项1</hl-checkbox>\n<hl-checkbox v-model=\"checked2\" round type=\"primary\">备选项</hl-checkbox>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为复选框设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性后呈灰色禁用，即便你为它设置了状态颜色也依然不起作用。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-checkbox v-model=\"checked1\" disabled>备选项1</hl-checkbox>\n  <hl-checkbox v-model=\"checked2\" disabled>备选项</hl-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jia-cu-miao-bian"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jia-cu-miao-bian"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 加粗描边")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("给 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 增加 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bold"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性即可使它的边缘看起来更突出一些。")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-checkbox v-model=\"checked2\" :label=\"1\" bold>备选项</hl-checkbox>\n  <hl-checkbox v-model=\"checked2\" :label=\"2\" bold>备选项</hl-checkbox>\n  <hl-checkbox v-model=\"checked2\" :label=\"0\">未加粗</hl-checkbox>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked2: [1],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"fu-xuan-kuang-zu\"><a class=\"header-anchor\" href=\"#fu-xuan-kuang-zu\"></a> 复选框组</h2><p>单选框组提供了一个 <code>indent</code> 来自定义元素之间的边距，例如：<code>indent=&quot;0px&quot;</code>，默认为 12px</p><p><code>checkbox-group</code>容器能将多个复选框管理为一组，只需为它的<code>v-model</code>绑定<code>Array</code>类型的变量即可。</p>", 3);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-checkbox>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性是对应的值，当复选框无介绍内容时也可充当它的介绍。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。复选框组还提供了一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indent"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来自定义元素之间的边距，例如："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indent=\"0px\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，默认为 12px")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-checkbox-group v-model=\"checkList\" indent=\"24px\">\n    <hl-checkbox label=\"复选框 A\"></hl-checkbox>\n    <hl-checkbox label=\"复选框 B\"></hl-checkbox>\n    <hl-checkbox label=\"复选框 C\"></hl-checkbox>\n    <hl-checkbox label=\"禁用\" disabled></hl-checkbox>\n    <hl-checkbox label=\"选中且禁用\" disabled></hl-checkbox>\n  </hl-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checkList: ['选中且禁用', '复选框 A'],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "bu-que-ding-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-que-ding-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 不确定状态")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性用以表示复选框的不确定状态，一般用于实现全选的效果。")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-checkbox :indeterminate=\"isIndeterminate\" v-model=\"checkAll\" @change=\"handleCheckAllChange\">全选</hl-checkbox>\n  <div style=\"margin: 15px 0;\"></div>\n  <hl-checkbox-group v-model=\"checkedCities\" @change=\"handleCheckedCitiesChange\">\n    <hl-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</hl-checkbox>\n  </hl-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳']\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      }\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : []\n        this.isIndeterminate = false\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length\n        this.checkAll = checkedCount === this.cities.length\n        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ke-xuan-xiang-mu-shu-liang-de-xian-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-xuan-xiang-mu-shu-liang-de-xian-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可选项目数量的限制")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性能够限制可以被勾选的项目的数量。")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-checkbox-group v-model=\"checkedCities\" :min=\"1\" :max=\"2\">\n    <hl-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</hl-checkbox>\n  </hl-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳']\n  export default {\n    data() {\n      return {\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义样式")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("只要在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("元素中设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "custom"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可，它接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为自定义样式。")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("你可以根据"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-checkbox>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件提供的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "is-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "is-focus"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "is-disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的样式名称来自定义设计。")])], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col\">\n    <p>使用hl-group组件实现自定义radio</p>\n    <hl-group indent=\"-2px\">\n      <hl-checkbox v-model=\"checkboxGroup1\" v-for=\"city in cities\" :label=\"city\" :key=\"city\" custom type=\"success\"\n        ><div class=\"demo-check-img\"><img :src=\"src\" /></div\n      ></hl-checkbox>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <p>使用hl-checkbox-group组件实现自定义radio</p>\n    <hl-checkbox-group v-model=\"checkboxGroup2\" custom type=\"primary\" indent=\"6px\">\n      <hl-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">\n        <span class=\"demo-check-text\">{{city}}</span>\n      </hl-checkbox>\n    </hl-checkbox-group>\n  </hl-col>\n</hl-row>\n\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳']\n  export default {\n    data() {\n      return {\n        src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544970959,3405281631&fm=26&gp=0.jpg',\n        checkboxGroup1: ['上海'],\n        checkboxGroup2: ['上海'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"checkbox-attributes\"><a class=\"header-anchor\" href=\"#checkbox-attributes\"></a> Checkbox Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>没有选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>当前是否勾选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>bold</td><td>加粗边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸修饰</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>round</td><td>圆形多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>颜色状态</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr></tbody></table><h3 id=\"checkbox-events\"><a class=\"header-anchor\" href=\"#checkbox-events\"></a> Checkbox Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td>更新后的值</td></tr></tbody></table><h3 id=\"checkbox-group-attributes\"><a class=\"header-anchor\" href=\"#checkbox-group-attributes\"></a> Checkbox-group Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>array</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>可被勾选的 checkbox 的最小数量</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>可被勾选的 checkbox 的最大数量</td><td>number</td><td>—</td><td>—</td></tr><tr><td>bold</td><td>加粗边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>custom</td><td>自定义样式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>round</td><td>圆形多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>颜色状态</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>indent</td><td>间距</td><td>string / number</td><td>-</td><td>12px</td></tr></tbody></table><h3 id=\"checkbox-group-events\"><a class=\"header-anchor\" href=\"#checkbox-group-events\"></a> Checkbox-group Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td>更新后的值</td></tr></tbody></table>", 8);

function checkboxvue_type_template_id_68cca6ac_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", checkboxvue_type_template_id_68cca6ac_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", checkboxvue_type_template_id_68cca6ac_hoisted_2, [checkboxvue_type_template_id_68cca6ac_hoisted_3, checkboxvue_type_template_id_68cca6ac_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [checkboxvue_type_template_id_68cca6ac_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [checkboxvue_type_template_id_68cca6ac_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_15];
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
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_30, _hoisted_31, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_36, _hoisted_37, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo10)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), _hoisted_40]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md?vue&type=template&id=68cca6ac

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/checkbox.md?vue&type=script&lang=ts


/* harmony default export */ var checkboxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        return _openBlock(), _createBlock(_component_hl_checkbox, {
          modelValue: _ctx.checked,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checked: true
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Default");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Primary");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Success");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Warning");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Danger");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Info");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          type: "primary"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checked3 = $event;
          }),
          type: "success"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.checked4 = $event;
          }),
          type: "warning"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked5,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.checked5 = $event;
          }),
          type: "danger"
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked6,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.checked6 = $event;
          }),
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
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Default");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Primary");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Success");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Warning");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Danger");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Info");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          type: "primary",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checked3 = $event;
          }),
          type: "success",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.checked4 = $event;
          }),
          type: "warning",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked5,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.checked5 = $event;
          }),
          type: "danger",
          fill: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked6,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.checked6 = $event;
          }),
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
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Default");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Primary");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Success");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          size: "sm"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          type: "primary"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checked3 = $event;
          }),
          type: "success",
          size: "lg"
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
            checked1: false,
            checked2: false,
            checked3: false
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项1");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          round: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          round: "",
          type: "primary"
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
            checked1: false,
            checked2: true
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项1");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          disabled: ""
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
            checked1: false,
            checked2: true
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
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("未加粗");

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          label: 1,
          bold: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          label: 2,
          bold: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          label: 0
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
            checked2: [1]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        var _component_hl_checkbox_group = _resolveComponent("hl-checkbox-group");

        return _openBlock(), _createBlock(_component_hl_checkbox_group, {
          modelValue: _ctx.checkList,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkList = $event;
          }),
          indent: "24px"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_checkbox, {
              label: "复选框 A"
            }), _createVNode(_component_hl_checkbox, {
              label: "复选框 B"
            }), _createVNode(_component_hl_checkbox, {
              label: "复选框 C"
            }), _createVNode(_component_hl_checkbox, {
              label: "禁用",
              disabled: ""
            }), _createVNode(_component_hl_checkbox, {
              label: "选中且禁用",
              disabled: ""
            })];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checkList: ['选中且禁用', '复选框 A']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("全选");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "15px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        var _component_hl_checkbox_group = _resolveComponent("hl-checkbox-group");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_checkbox, {
          indeterminate: _ctx.isIndeterminate,
          modelValue: _ctx.checkAll,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkAll = $event;
          }),
          onChange: _ctx.handleCheckAllChange
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["indeterminate", "modelValue", "onChange"]), _hoisted_2, _createVNode(_component_hl_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checkedCities = $event;
          }),
          onChange: _ctx.handleCheckedCitiesChange
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_hl_checkbox, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])], 64);
      }

      var cityOptions = ['上海', '北京', '广州', '深圳'];
      var democomponentExport = {
        data: function data() {
          return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
          };
        },
        methods: {
          handleCheckAllChange: function handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
          },
          handleCheckedCitiesChange: function handleCheckedCitiesChange(value) {
            var checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo9": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        var _component_hl_checkbox_group = _resolveComponent("hl-checkbox-group");

        return _openBlock(), _createBlock(_component_hl_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkedCities = $event;
          }),
          min: 1,
          max: 2
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_hl_checkbox, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var cityOptions = ['上海', '北京', '广州', '深圳'];
      var democomponentExport = {
        data: function data() {
          return {
            checkedCities: ['上海', '北京'],
            cities: cityOptions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo10": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "使用hl-group组件实现自定义radio", -1);

      var _hoisted_2 = {
        class: "demo-check-img"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "使用hl-checkbox-group组件实现自定义radio", -1);

      var _hoisted_4 = {
        class: "demo-check-text"
      };

      function render(_ctx, _cache) {
        var _component_hl_checkbox = _resolveComponent("hl-checkbox");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_checkbox_group = _resolveComponent("hl-checkbox-group");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_group, {
                  indent: "-2px"
                }, {
                  default: _withCtx(function () {
                    return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
                      return _openBlock(), _createBlock(_component_hl_checkbox, {
                        modelValue: _ctx.checkboxGroup1,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                          return _ctx.checkboxGroup1 = $event;
                        }),
                        label: city,
                        key: city,
                        custom: "",
                        type: "success"
                      }, {
                        default: _withCtx(function () {
                          return [_createVNode("div", _hoisted_2, [_createVNode("img", {
                            src: _ctx.src
                          }, null, 8, ["src"])])];
                        }),
                        _: 2
                      }, 1032, ["modelValue", "label"]);
                    }), 128))];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _createVNode(_component_hl_checkbox_group, {
                  modelValue: _ctx.checkboxGroup2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.checkboxGroup2 = $event;
                  }),
                  custom: "",
                  type: "primary",
                  indent: "6px"
                }, {
                  default: _withCtx(function () {
                    return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
                      return _openBlock(), _createBlock(_component_hl_checkbox, {
                        label: city,
                        key: city
                      }, {
                        default: _withCtx(function () {
                          return [_createVNode("span", _hoisted_4, _toDisplayString(city), 1)];
                        }),
                        _: 2
                      }, 1032, ["label"]);
                    }), 128))];
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

      var cityOptions = ['上海', '北京', '广州', '深圳'];
      var democomponentExport = {
        data: function data() {
          return {
            src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544970959,3405281631&fm=26&gp=0.jpg',
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['上海'],
            cities: cityOptions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_68cca6ac_render

/* harmony default export */ var zh_CN_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);