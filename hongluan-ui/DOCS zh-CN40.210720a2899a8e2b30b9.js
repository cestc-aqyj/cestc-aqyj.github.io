(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/select.md?vue&type=template&id=09a28200

var selectvue_type_template_id_09a28200_hoisted_1 = {
  class: "doc-main-content"
};
var selectvue_type_template_id_09a28200_hoisted_2 = {
  class: "doc-content"
};

var selectvue_type_template_id_09a28200_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Select 选择器", -1);

var selectvue_type_template_id_09a28200_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "当选项过多时，使用下拉菜单展示并选择内容。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的值为当前被选中的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-option"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的 value 属性值")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" placeholder=\"请选择\">\n    <template v-for=\"item in options\">\n      <hl-option v-if=\"item.divider\" divider> </hl-option>\n      <hl-option v-else :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n    </template>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            divider: true,\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "you-jin-yong-xuan-xiang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#you-jin-yong-xuan-xiang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 有禁用选项")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-option"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("中，设定"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("值为 true，即可禁用该选项")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\" :disabled=\"item.disabled\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n            disabled: true,\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-select"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，则整个选择器不可用")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" disabled placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ke-qing-kong-dan-xuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-qing-kong-dan-xuan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可清空单选")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-select"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，则可将选择器清空。需要注意的是，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性仅适用于单选。")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" clearable placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chi-cun"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 尺寸")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "sm"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(","), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为可选值，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" size=\"sm\" placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n  <br /><br />\n  <hl-select v-model=\"value\" size=\"md\" placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n  <br /><br />\n  <hl-select v-model=\"value\" size=\"lg\" placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ji-chu-duo-xuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-duo-xuan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基础多选")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("用 Tag 组件展示已选项，你也可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性将它们合并为一段文字。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-select"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可启用多选，此时"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的值为当前选中值所组成的数组。")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value1\" multiple placeholder=\"请选择\" style=\"width: 300px;\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n    <template #prefix>\n      <hl-icon name=\"computer\" />\n    </template>\n  </hl-select>\n  <br /><br />\n  <hl-select v-model=\"value1\" multiple filterable placeholder=\"可搜索\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n  <br /><br />\n  <hl-select v-model=\"value2\" multiple clearable collapse-tags placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n          {\n            value: '选项6',\n            label: '北京烤鸭2',\n          },\n          {\n            value: '选项7',\n            label: '北京烤鸭3',\n          },\n        ],\n        value1: [],\n        value2: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-mo-ban"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-mo-ban"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义模板")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("将自定义的 HTML 模板插入"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-option"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("的 slot 中即可。")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" placeholder=\"请选择\">\n    <hl-option v-for=\"item in cities\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\">\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.value }}</span>\n    </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [\n          {\n            value: 'Beijing',\n            label: '北京',\n          },\n          {\n            value: 'Shanghai',\n            label: '上海',\n          },\n          {\n            value: 'Nanjing',\n            label: '南京',\n          },\n          {\n            value: 'Chengdu',\n            label: '成都',\n          },\n          {\n            value: 'Shenzhen',\n            label: '深圳',\n          },\n          {\n            value: 'Guangzhou',\n            label: '广州',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fen-zu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fen-zu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 分组")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-option-group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("对备选项进行分组，它的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性为分组名")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" placeholder=\"请选择\">\n    <hl-option-group v-for=\"group in options\" :key=\"group.label\" :label=\"group.label\">\n      <hl-option v-for=\"item in group.options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n    </hl-option-group>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            label: '热门城市',\n            options: [\n              {\n                value: 'Shanghai',\n                label: '上海',\n              },\n              {\n                value: 'Beijing',\n                label: '北京',\n              },\n            ],\n          },\n          {\n            label: '城市名',\n            options: [\n              {\n                value: 'Chengdu',\n                label: '成都',\n              },\n              {\n                value: 'Shenzhen',\n                label: '深圳',\n              },\n              {\n                value: 'Guangzhou',\n                label: '广州',\n              },\n              {\n                value: 'Dalian',\n                label: '大连',\n              },\n            ],\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ke-sou-suo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-sou-suo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可搜索")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-select"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可启用搜索功能。")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("默认情况下，Select 会找出所有"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("来实现。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，它会在输入值发生变化时调用，参数为当前输入值。")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" filterable placeholder=\"请选择\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yuan-cheng-sou-suo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yuan-cheng-sou-suo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 远程搜索")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "从服务器搜索数据，输入关键字进行查找", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为了启用远程搜索，需要将"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，同时传入一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-option"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("是通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-for"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("指令渲染出来的，此时需要为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-option"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，且其值需具有唯一性，比如此例中的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "item.value"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" multiple filterable remote reserve-keyword placeholder=\"请输入关键词\" :remote-method=\"remoteMethod\" :loading=\"loading\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: [\n          'Alabama',\n          'Alaska',\n          'Arizona',\n          'Arkansas',\n          'California',\n          'Colorado',\n          'Connecticut',\n          'Delaware',\n          'Florida',\n          'Georgia',\n          'Hawaii',\n          'Idaho',\n          'Illinois',\n          'Indiana',\n          'Iowa',\n          'Kansas',\n          'Kentucky',\n          'Louisiana',\n          'Maine',\n          'Maryland',\n          'Massachusetts',\n          'Michigan',\n          'Minnesota',\n          'Mississippi',\n          'Missouri',\n          'Montana',\n          'Nebraska',\n          'Nevada',\n          'New Hampshire',\n          'New Jersey',\n          'New Mexico',\n          'New York',\n          'North Carolina',\n          'North Dakota',\n          'Ohio',\n          'Oklahoma',\n          'Oregon',\n          'Pennsylvania',\n          'Rhode Island',\n          'South Carolina',\n          'South Dakota',\n          'Tennessee',\n          'Texas',\n          'Utah',\n          'Vermont',\n          'Virginia',\n          'Washington',\n          'West Virginia',\n          'Wisconsin',\n          'Wyoming',\n        ],\n      }\n    },\n    mounted() {\n      this.list = this.states.map(item => {\n        return { value: `value:${item}`, label: `label:${item}` }\n      })\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true\n          setTimeout(() => {\n            this.loading = false\n            this.options = this.list.filter(item => {\n              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1\n            })\n          }, 200)\n        } else {\n          this.options = []\n        }\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chuang-jian-tiao-mu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chuang-jian-tiao-mu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 创建条目")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可以创建并选中选项中不存在的条目", -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可通过在输入框中输入文字来创建新的条目。注意此时"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("必须为 true。本例还使用了"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "default-first-option"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。")])], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-select v-model=\"value\" multiple filterable allow-create default-first-option placeholder=\"请选择文章标签\">\n    <hl-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </hl-option>\n  </hl-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'HTML',\n            label: 'HTML',\n          },\n          {\n            value: 'CSS',\n            label: 'CSS',\n          },\n          {\n            value: 'JavaScript',\n            label: 'JavaScript',\n          },\n        ],\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<div class=\"tip\"><p>如果 Select 的绑定值为对象类型，请务必指定 <code>value-key</code> 作为它的唯一性标识。</p></div><h2 id=\"select-attributes\"><a class=\"header-anchor\" href=\"#select-attributes\"></a> Select Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>boolean / string / boolean / number</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>lg/ md / sm</td><td>md</td></tr><tr><td>clearable</td><td>是否可以清空选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>多选时是否将选中值按文字的形式展示</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>多选时用户最多可以选择的项目数，为 0 则不限制</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>select input 的 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>select input 的 autocomplete 属性</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>占位符</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>filterable</td><td>是否可搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>block</td><td>拉伸至父元素宽度</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>是否允许用户创建新条目，需配合 <code>filterable</code> 使用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>自定义搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>是否为远程搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>远程搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>是否正在从远程获取数据</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>远程加载时显示的文字</td><td>string</td><td>—</td><td>加载中</td></tr><tr><td>no-match-text</td><td>搜索条件无匹配时显示的文字，也可以使用<code>#empty</code>设置</td><td>string</td><td>—</td><td>无匹配数据</td></tr><tr><td>no-data-text</td><td>选项为空时显示的文字，也可以使用<code>#empty</code>设置</td><td>string</td><td>—</td><td>无数据</td></tr><tr><td>popper-class</td><td>Select 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>在输入框按下回车，选择第一个匹配项。需配合 <code>filterable</code> 或 <code>remote</code> 使用</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id=\"select-events\"><a class=\"header-anchor\" href=\"#select-events\"></a> Select Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中值发生变化时触发</td><td>目前的选中值</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr><tr><td>remove-tag</td><td>多选模式下移除 tag 时触发</td><td>移除的 tag 值</td></tr><tr><td>clear</td><td>可清空的单选模式下用户点击清空按钮时触发</td><td>—</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table><h2 id=\"select-slots\"><a class=\"header-anchor\" href=\"#select-slots\"></a> Select Slots</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Option 组件列表</td></tr><tr><td>prefix</td><td>Select 组件头部内容</td></tr><tr><td>empty</td><td>无选项时的列表</td></tr><tr><td>clear</td><td>clear icon 自定义</td></tr></tbody></table><h2 id=\"option-group-attributes\"><a class=\"header-anchor\" href=\"#option-group-attributes\"></a> Option Group Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>分组的组名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否将该分组下所有选项置为禁用</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id=\"option-attributes\"><a class=\"header-anchor\" href=\"#option-attributes\"></a> Option Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选项的标签，若不设置则默认与 <code>value</code> 相同</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divider</td><td>是否是分隔符</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr><tr><td>blur</td><td>使 input 失去焦点，并隐藏下拉框</td><td>-</td></tr></tbody></table>", 13);

function selectvue_type_template_id_09a28200_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", selectvue_type_template_id_09a28200_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", selectvue_type_template_id_09a28200_hoisted_2, [selectvue_type_template_id_09a28200_hoisted_3, selectvue_type_template_id_09a28200_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo10)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    _: 1
  }), _hoisted_41]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/select.md?vue&type=template&id=09a28200

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/select.md?vue&type=script&lang=ts


/* harmony default export */ var selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createCommentVNode = vue_esm_browser_prod["k" /* createCommentVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
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
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              divider: true
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value,
                disabled: item.disabled
              }, null, 8, ["label", "value", "disabled"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶',
              disabled: true
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          disabled: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          clearable: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          };
        }
      };
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
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("br", null, null, -1);

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          size: "sm",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]), _hoisted_1, _hoisted_2, _createVNode(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value = $event;
          }),
          size: "md",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]), _hoisted_3, _hoisted_4, _createVNode(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value = $event;
          }),
          size: "lg",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("br", null, null, -1);

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          multiple: "",
          placeholder: "请选择",
          style: {
            "width": "300px"
          }
        }, {
          prefix: _withCtx(function () {
            return [_createVNode(_component_hl_icon, {
              name: "computer"
            })];
          }),
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]), _hoisted_1, _hoisted_2, _createVNode(_component_hl_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value1 = $event;
          }),
          multiple: "",
          filterable: "",
          placeholder: "可搜索"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]), _hoisted_3, _hoisted_4, _createVNode(_component_hl_select, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value2 = $event;
          }),
          multiple: "",
          clearable: "",
          "collapse-tags": "",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }, {
              value: '选项6',
              label: '北京烤鸭2'
            }, {
              value: '选项7',
              label: '北京烤鸭3'
            }],
            value1: [],
            value2: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "float": "left"
        }
      };
      var _hoisted_2 = {
        style: {
          "float": "right",
          "color": "#8492a6",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, {
                default: _withCtx(function () {
                  return [_createVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.value), 1)];
                }),
                _: 2
              }, 1032, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            cities: [{
              value: 'Beijing',
              label: '北京'
            }, {
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Nanjing',
              label: '南京'
            }, {
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_option_group = _resolveComponent("hl-option-group");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (group) {
              return _openBlock(), _createBlock(_component_hl_option_group, {
                key: group.label,
                label: group.label
              }, {
                default: _withCtx(function () {
                  return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(group.options, function (item) {
                    return _openBlock(), _createBlock(_component_hl_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }), 128))];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              label: '热门城市',
              options: [{
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }]
            }, {
              label: '城市名',
              options: [{
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }]
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          };
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
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          multiple: "",
          filterable: "",
          remote: "",
          "reserve-keyword": "",
          placeholder: "请输入关键词",
          "remote-method": _ctx.remoteMethod,
          loading: _ctx.loading
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "remote-method", "loading"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [],
            value: [],
            list: [],
            loading: false,
            states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
          };
        },
        mounted: function mounted() {
          this.list = this.states.map(function (item) {
            return {
              value: "value:" + item,
              label: "label:" + item
            };
          });
        },
        methods: {
          remoteMethod: function remoteMethod(query) {
            var _this = this;

            if (query !== '') {
              this.loading = true;
              setTimeout(function () {
                _this.loading = false;
                _this.options = _this.list.filter(function (item) {
                  return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
              }, 200);
            } else {
              this.options = [];
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo10": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        return _openBlock(), _createBlock(_component_hl_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          multiple: "",
          filterable: "",
          "allow-create": "",
          "default-first-option": "",
          placeholder: "请选择文章标签"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_hl_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'HTML',
              label: 'HTML'
            }, {
              value: 'CSS',
              label: 'CSS'
            }, {
              value: 'JavaScript',
              label: 'JavaScript'
            }],
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/select.md



selectvue_type_script_lang_ts.render = selectvue_type_template_id_09a28200_render

/* harmony default export */ var zh_CN_select = __webpack_exports__["default"] = (selectvue_type_script_lang_ts);

/***/ })

}]);