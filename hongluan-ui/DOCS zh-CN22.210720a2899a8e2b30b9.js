(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input-number.md?vue&type=template&id=d258daa2

var input_numbervue_type_template_id_d258daa2_hoisted_1 = {
  class: "doc-main-content"
};
var input_numbervue_type_template_id_d258daa2_hoisted_2 = {
  class: "doc-content"
};

var input_numbervue_type_template_id_d258daa2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "InputNumber 计数器", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("计数器由"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("容器和子成员 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-button>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-input>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件组成。所以它也拥有这些组件的样式。")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-input-number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("元素中使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("绑定变量即可，变量的初始值即为默认值。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <hl-input-number v-model=\"num\" @change=\"handleChange\" :min=\"1\" :max=\"10\" label=\"描述文字\" indent merge></hl-input-number>\n  <hl-input-number class=\"m-l-lg\" style=\"width:180px\" v-model=\"num\" @change=\"handleChange\" :min=\"1\" :max=\"10\" label=\"描述文字\" gap=\"var(--sm)\" round></hl-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，不设置时，最小值为 0。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-input-number v-model=\"num\" :disabled=\"true\" indent merge></hl-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "bu-shu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-shu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 步数")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("允许定义递增递减的步数控制，设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性可以控制步长，接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-input-number v-model=\"num\" :step=\"2\" indent merge></hl-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yan-ge-bu-shu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yan-ge-bu-shu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 严格步数")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "step-strictly"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。如果这个属性被设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，则只能输入步数的倍数。")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-input-number v-model=\"num\" :step=\"2\" step-strictly indent merge></hl-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 2\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jing-du"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jing-du"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 精度")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "precision"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以控制数值精度，接收一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "precision"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的值必须是一个非负整数，并且不能小于 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的小数位数。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-input-number v-model=\"num\" :precision=\"2\" :step=\"0.1\" :max=\"10\" indent merge></hl-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chi-cun"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 尺寸")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("额外提供了 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "sm"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("以及默认 三种尺寸的数字输入框")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group>\n  <hl-input-number size=\"sm\" v-model=\"num2\" class=\"m-r-md\" indent merge></hl-input-number>\n  <hl-input-number v-model=\"num3\" class=\"m-r-md\" indent merge></hl-input-number>\n  <hl-input-number size=\"lg\" v-model=\"num4\" class=\"m-r-md\" indent merge></hl-input-number>\n</hl-group>\n<script>\n  export default {\n    data() {\n      return {\n        num1: 1,\n        num2: 1,\n        num3: 1,\n        num4: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "an-niu-wei-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#an-niu-wei-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 按钮位置")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "controls-position"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以控制按钮位置。")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n<hl-group>\n  <hl-input-number v-model=\"num\" @change=\"handleChange\" :min=\"1\" :max=\"10\" indent merge class=\"m-r-md\"></hl-input-number>\n  <hl-input-number v-model=\"num\" controls-position=\"left\" @change=\"handleChange\" :min=\"1\" :max=\"10\" indent=\"5px\" class=\"m-r-md\"></hl-input-number>\n  <hl-input-number v-model=\"num\" controls-position=\"right\" @change=\"handleChange\" :min=\"1\" :max=\"10\" indent=\"5px\"></hl-input-number>\n</hl-group>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-qian-hou-tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-qian-hou-tu-biao"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义前后图标")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "prefix"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("以及"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "suffix"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slot实现。")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-input-number v-model=\"num\" @change=\"handleChange\" :min=\"1\" :max=\"10\" indent merge class=\"m-r-md\" style=\"width: 180px\">\n    <template #prefix>$</template>\n    <template #suffix>元</template>\n  </hl-input-number>\n  <hl-input-number v-model=\"num\" controls-position=\"left\" @change=\"handleChange\" indent merge class=\"m-r-md\" :min=\"1\" :max=\"10\">\n    <template #prefix><hl-icon name=\"heart\"></hl-icon></template>\n    <template #suffix>个</template>\n  </hl-input-number>\n  <hl-input-number v-model=\"num\" controls-position=\"right\" @change=\"handleChange\" indent merge :min=\"1\" :max=\"10\">\n    <template #suffix><hl-icon name=\"heart\"></hl-icon></template>\n  </hl-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>number / undefined</td><td>—</td><td>0</td></tr><tr><td>min</td><td>设置计数器允许的最小值</td><td>number</td><td>—</td><td>-Infinity</td></tr><tr><td>max</td><td>设置计数器允许的最大值</td><td>number</td><td>—</td><td>Infinity</td></tr><tr><td>step</td><td>计数器步长</td><td>number</td><td>—</td><td>1</td></tr><tr><td>step-strictly</td><td>是否只能输入 step 的倍数</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>precision</td><td>数值精度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>size</td><td>计数器尺寸</td><td>string</td><td>lg/sm</td><td></td></tr><tr><td>disabled</td><td>是否禁用计数器</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>controls</td><td>是否使用控制按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>controls-position</td><td>控制按钮位置</td><td>string</td><td>initial/left/right</td><td>initial</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>输入框关联的label文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>输入框默认 placeholder</td><td>string</td><td>-</td><td>-</td></tr><tr><td>merge</td><td>融合input-number表单元素</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>indent</td><td>缩进input-number表单元素</td><td>boolean、string</td><td>-</td><td>false</td></tr><tr><td>gap</td><td>间隙</td><td>string</td><td>-</td><td>false</td></tr><tr><td>round</td><td>圆形样式</td><td>string</td><td>-</td><td>false</td></tr></tbody></table><h2 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\"></a> Slots</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容</td></tr><tr><td>suffix</td><td>输入框尾部内容</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值被改变时触发</td><td>currentValue, oldValue</td></tr><tr><td>blur</td><td>在组件 Input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>在组件 Input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table><h2 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr><tr><td>select</td><td>选中 input 中的文字</td><td>—</td></tr></tbody></table>", 8);

function input_numbervue_type_template_id_d258daa2_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", input_numbervue_type_template_id_d258daa2_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", input_numbervue_type_template_id_d258daa2_hoisted_2, [input_numbervue_type_template_id_d258daa2_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
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
  }), _hoisted_29]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md?vue&type=template&id=d258daa2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input-number.md?vue&type=script&lang=ts


/* harmony default export */ var input_numbervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          onChange: _ctx.handleChange,
          min: 1,
          max: 10,
          label: "描述文字",
          indent: "",
          merge: ""
        }, null, 8, ["modelValue", "onChange"]), _createVNode(_component_hl_input_number, {
          class: "m-l-lg",
          style: {
            "width": "180px"
          },
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.num = $event;
          }),
          onChange: _ctx.handleChange,
          min: 1,
          max: 10,
          label: "描述文字",
          gap: "var(--sm)",
          round: ""
        }, null, 8, ["modelValue", "onChange"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        return _openBlock(), _createBlock(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          disabled: true,
          indent: "",
          merge: ""
        }, null, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        return _openBlock(), _createBlock(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          step: 2,
          indent: "",
          merge: ""
        }, null, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 5
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        return _openBlock(), _createBlock(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          step: 2,
          "step-strictly": "",
          indent: "",
          merge: ""
        }, null, 8, ["modelValue"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 2
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        return _openBlock(), _createBlock(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          precision: 2,
          step: 0.1,
          max: 10,
          indent: "",
          merge: ""
        }, null, 8, ["modelValue", "step"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_component_hl_group, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_input_number, {
              size: "sm",
              modelValue: _ctx.num2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.num2 = $event;
              }),
              class: "m-r-md",
              indent: "",
              merge: ""
            }, null, 8, ["modelValue"]), _createVNode(_component_hl_input_number, {
              modelValue: _ctx.num3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                return _ctx.num3 = $event;
              }),
              class: "m-r-md",
              indent: "",
              merge: ""
            }, null, 8, ["modelValue"]), _createVNode(_component_hl_input_number, {
              size: "lg",
              modelValue: _ctx.num4,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                return _ctx.num4 = $event;
              }),
              class: "m-r-md",
              indent: "",
              merge: ""
            }, null, 8, ["modelValue"])];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1
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
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_component_hl_group, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_input_number, {
              modelValue: _ctx.num,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.num = $event;
              }),
              onChange: _ctx.handleChange,
              min: 1,
              max: 10,
              indent: "",
              merge: "",
              class: "m-r-md"
            }, null, 8, ["modelValue", "onChange"]), _createVNode(_component_hl_input_number, {
              modelValue: _ctx.num,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                return _ctx.num = $event;
              }),
              "controls-position": "left",
              onChange: _ctx.handleChange,
              min: 1,
              max: 10,
              indent: "5px",
              class: "m-r-md"
            }, null, 8, ["modelValue", "onChange"]), _createVNode(_component_hl_input_number, {
              modelValue: _ctx.num,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                return _ctx.num = $event;
              }),
              "controls-position": "right",
              onChange: _ctx.handleChange,
              min: 1,
              max: 10,
              indent: "5px"
            }, null, 8, ["modelValue", "onChange"])];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("$");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("元");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("个");

      function render(_ctx, _cache) {
        var _component_hl_input_number = _resolveComponent("hl-input-number");

        var _component_hl_icon = _resolveComponent("hl-icon");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          onChange: _ctx.handleChange,
          min: 1,
          max: 10,
          indent: "",
          merge: "",
          class: "m-r-md",
          style: {
            "width": "180px"
          }
        }, {
          prefix: _withCtx(function () {
            return [_hoisted_1];
          }),
          suffix: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"]), _createVNode(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.num = $event;
          }),
          "controls-position": "left",
          onChange: _ctx.handleChange,
          indent: "",
          merge: "",
          class: "m-r-md",
          min: 1,
          max: 10
        }, {
          prefix: _withCtx(function () {
            return [_createVNode(_component_hl_icon, {
              name: "heart"
            })];
          }),
          suffix: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"]), _createVNode(_component_hl_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.num = $event;
          }),
          "controls-position": "right",
          onChange: _ctx.handleChange,
          indent: "",
          merge: "",
          min: 1,
          max: 10
        }, {
          suffix: _withCtx(function () {
            return [_createVNode(_component_hl_icon, {
              name: "heart"
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md



input_numbervue_type_script_lang_ts.render = input_numbervue_type_template_id_d258daa2_render

/* harmony default export */ var input_number = __webpack_exports__["default"] = (input_numbervue_type_script_lang_ts);

/***/ })

}]);