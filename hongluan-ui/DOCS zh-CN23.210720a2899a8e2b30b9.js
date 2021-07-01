(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input.md?vue&type=template&id=248e6a22

var inputvue_type_template_id_248e6a22_hoisted_1 = {
  class: "doc-main-content"
};
var inputvue_type_template_id_248e6a22_hoisted_2 = {
  class: "doc-content"
};

var inputvue_type_template_id_248e6a22_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "input-shu-ru-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#input-shu-ru-kuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Input 输入框")], -1);

var inputvue_type_template_id_248e6a22_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "通过鼠标或键盘输入内容，Input 为受控组件，它总会显示 Vue 绑定值。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通常情况下，应当处理 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 事件，并更新组件的绑定值（或使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("）。否则输入框内显示的值将不会改变。不支持 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 修饰符。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input v-model=\"input\" placeholder=\"请输入内容\"></hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"zhuang-tai-yan-se\"><a class=\"header-anchor\" href=\"#zhuang-tai-yan-se\"></a> 状态颜色</h2><p>Input 的颜色与状态颜色保持一致。可选值为<code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code>和<code>info</code>。</p>", 2);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("根据鸿鸾的交互原则：无论是哪种状态的输入框，在非 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("strong", null, "焦点"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 或 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("strong", null, "激活"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 状态时，都统一呈现为默认的状态。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input v-model=\"input1\" placeholder=\"默认\" block></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input2\"\n      placeholder=\"primary\"\n      type=\"primary\"\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input3\"\n      placeholder=\"warning\"\n      type=\"warning\"\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input4\"\n      placeholder=\"success\"\n      type=\"success\"\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input5\"\n      placeholder=\"danger\"\n      type=\"danger\"\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input v-model=\"input6\" placeholder=\"info\" type=\"info\" block></hl-input>\n  </hl-col>\n</hl-row>\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input1: ref('默认'),\n        input2: ref('primary'),\n        input3: ref('warning'),\n        input4: ref('success'),\n        input5: ref('danger'),\n        input6: ref('info'),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fill-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fill-yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Fill 颜色")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "fill"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性，可以使 input 呈现为填充样式。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input v-model=\"input1\" placeholder=\"默认\" fill block></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input2\"\n      placeholder=\"primary\"\n      type=\"primary\"\n      fill\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input3\"\n      placeholder=\"warning\"\n      type=\"warning\"\n      fill\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input4\"\n      placeholder=\"success\"\n      type=\"success\"\n      fill\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input5\"\n      placeholder=\"danger\"\n      type=\"danger\"\n      fill\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-b-md\">\n    <hl-input\n      v-model=\"input6\"\n      placeholder=\"info\"\n      type=\"info\"\n      fill\n      block\n    ></hl-input>\n  </hl-col>\n</hl-row>\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input1: ref('默认'),\n        input2: ref('primary'),\n        input3: ref('warning'),\n        input4: ref('success'),\n        input5: ref('danger'),\n        input6: ref('info'),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "input-chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#input-chi-cun"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Input 尺寸")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("输入框提供了与按钮相同的尺寸。以方便与 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 组，来搭配使用。默认尺寸为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input\n  v-model=\"input1\"\n  placeholder=\"sm\"\n  size=\"sm\"\n  prefix-icon=\"mail\"\n  class=\"m-r-md\"\n></hl-input>\n<hl-input\n  v-model=\"input2\"\n  placeholder=\"md\"\n  size=\"md\"\n  prefix-icon=\"mail\"\n  class=\"m-r-md\"\n></hl-input>\n<hl-input\n  v-model=\"input3\"\n  placeholder=\"lg\"\n  size=\"lg\"\n  prefix-icon=\"mail\"\n  class=\"m-r-md\"\n></hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input1: ref(''),\n        input2: ref(''),\n        input3: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "la-shen-shu-ru-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#la-shen-shu-ru-kuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 拉伸输入框")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "block"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性可以把输入框拉伸至与父元素的宽度")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input block></hl-input>\n<hl-input native-type=\"textarea\" block class=\"m-t-md\"></hl-input>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tuo-yuan-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tuo-yuan-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 椭圆样式")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为 input 加上 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "round"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性，即可呈现为椭圆样式。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input v-model=\"input\" placeholder=\"请输入内容\" round></hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性指定是否禁用 input 组件")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input placeholder=\"请输入内容\" v-model=\"input\" :disabled=\"true\"></hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ke-qing-kong-de-shu-ru-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-qing-kong-de-shu-ru-kuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可清空的输入框")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可得到一个可清空的输入框")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input placeholder=\"请输入内容\" v-model=\"input\" clearable></hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref('测试输入'),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "mi-ma-shu-ru-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mi-ma-shu-ru-kuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 密码输入框")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "show-password"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可得到一个可切换显示隐藏的密码框")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input placeholder=\"请输入密码\" v-model=\"input\" show-password></hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dai-fu-biao-de-shu-ru-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-fu-biao-de-shu-ru-kuang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 带 \"附标\" 的输入框")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "prefix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "suffix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性在 input 组件首部和尾部增加图标，也可以通过 slot 来放置自定义内容。")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<p>属性方式：</p>\n<hl-row>\n  <hl-col span=\"col\">\n    <hl-input\n      placeholder=\"请选择日期\"\n      suffix-icon=\"userGroup\"\n      v-model=\"input1\"\n      block\n    ></hl-input>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-input\n      placeholder=\"请输入内容\"\n      prefix-icon=\"mail\"\n      v-model=\"input2\"\n      block\n    ></hl-input>\n  </hl-col>\n</hl-row>\n\n<p class=\"m-t-lg\">自定义slot方式：</p>\n<hl-row>\n  <hl-col span=\"col\">\n    <hl-input placeholder=\"请输入键词进行搜索\" v-model=\"input3\" block>\n      <template #prefix>\n        <select class=\"hl-input sm\" style=\"border: none\">\n          <option value=\"\">http://</option>\n          <option value=\"\">https://</option>\n          <option value=\"\">ssh:</option>\n        </select>\n      </template>\n      <template #suffix>\n        <hl-popover\n          placement=\"top\"\n          tooltip\n          trigger=\"hover\"\n          content=\"搜索一下\"\n        >\n          <template #reference>\n            <hl-icon name=\"search\" />\n          </template>\n        </hl-popover>\n      </template>\n    </hl-input>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-input placeholder=\"请输入内容\" v-model=\"input4\" block>\n      <template #prefix>邮箱：</template>\n      <template #suffix><hl-icon name=\"loading\" size=\"xs\"/></template>\n    </hl-input>\n  </hl-col>\n</hl-row>\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        input1: ref(''),\n        input2: ref(''),\n        input3: ref(''),\n        input4: ref('916471@qq.com'),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "wen-ben-yu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wen-ben-yu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 文本域")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过将 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "native-type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性的值设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "textarea"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 即可调用出文本域输入框。")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("文本域除了设置高度以外，还可通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "rows"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来控制高度。")])], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input\n  native-type=\"textarea\"\n  :rows=\"3\"\n  placeholder=\"请输入内容\"\n  block\n  v-model=\"textarea\"\n>\n</hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        textarea: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-dong-gao-du"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-dong-gao-du"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自动高度")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以使得文本域的高度能够根据文本内容自动进行调整。")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 还可以设定为一个对象，指定最小行数和最大行数。")])], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input\n  native-type=\"textarea\"\n  placeholder=\"请输入内容\"\n  v-model=\"textarea1\"\n  autosize\n  block\n></hl-input>\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        textarea1: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "shu-ru-chang-du-xian-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shu-ru-chang-du-xian-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 输入长度限制")], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用原生属性"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "minlength"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("来限制输入框的字符长度，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "show-word-limit"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可展示字数统计。")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-input\n  placeholder=\"请输入内容\"\n  v-model=\"text\"\n  maxlength=\"10\"\n  show-word-limit\n  block\n></hl-input>\n<hl-input\n  native-type=\"textarea\"\n  placeholder=\"请输入内容\"\n  v-model=\"textarea\"\n  maxlength=\"30\"\n  class=\"m-t-md\"\n  show-word-limit\n  block\n></hl-input>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n\n  export default defineComponent({\n    setup() {\n      return {\n        text: ref(''),\n        textarea: ref(''),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"input-attributes\"><a class=\"header-anchor\" href=\"#input-attributes\"></a> Input Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>native-type</td><td>类型</td><td>string</td><td>text，textarea 和其他 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types\">原生 input 的 type 值</a></td><td>text</td></tr><tr><td>model-value / v-model</td><td>绑定值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>maxlength</td><td>原生属性，最大输入长度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>minlength</td><td>原生属性，最小输入长度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>show-word-limit</td><td>是否显示输入字数统计，只在 <code>native-type = &quot;text&quot;</code> 或 <code>native-type = &quot;textarea&quot;</code> 时有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>clearable</td><td>是否可清空</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-password</td><td>是否显示切换密码图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>block</td><td>是否拉伸至父元素 100%的宽度</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>输入框尺寸，只在 <code>native-type!=&quot;textarea&quot;</code> 时有效</td><td>string</td><td>sm / lg</td><td>—</td></tr><tr><td>prefix-icon</td><td>输入框头部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>输入框尾部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>rows</td><td>输入框行数，只对 <code>native-type=&quot;textarea&quot;</code> 有效</td><td>number</td><td>—</td><td>2</td></tr><tr><td>autosize</td><td>自适应内容高度，只对 <code>native-type=&quot;textarea&quot;</code> 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }</td><td>boolean / object</td><td>—</td><td>false</td></tr><tr><td>autocomplete</td><td>原生属性，自动补全</td><td>string</td><td>on, off</td><td>off</td></tr><tr><td>auto-complete</td><td>下个主版本弃用</td><td>string</td><td>on, off</td><td>off</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>原生属性，是否只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>round</td><td>圆形输入框，只在 <code>native-type!=&quot;textarea&quot;</code> 时有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>max</td><td>原生属性，设置最大值</td><td>—</td><td>—</td><td>—</td></tr><tr><td>min</td><td>原生属性，设置最小值</td><td>—</td><td>—</td><td>—</td></tr><tr><td>step</td><td>原生属性，设置输入字段的合法数字间隔</td><td>—</td><td>—</td><td>—</td></tr><tr><td>resize</td><td>控制是否能被用户缩放</td><td>string</td><td>none, both, horizontal, vertical</td><td>—</td></tr><tr><td>autofocus</td><td>原生属性，自动获取焦点</td><td>boolean</td><td>true, false</td><td>false</td></tr><tr><td>type</td><td>颜色状态</td><td>string</td><td>info, primary, warning, danger, success</td><td>—</td></tr><tr><td>form</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>输入框关联的 label 文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>tabindex</td><td>输入框的 tabindex</td><td>string / number</td><td>-</td><td>-</td></tr><tr><td>validate-event</td><td>输入时是否触发表单的校验</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>input-style</td><td>input元素或textarea元素的style</td><td>object</td><td>-</td><td>{}</td></tr></tbody></table><h3 id=\"input-slots\"><a class=\"header-anchor\" href=\"#input-slots\"></a> Input Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容，只对 <code>native-type=&quot;text&quot;</code> 有效</td></tr><tr><td>suffix</td><td>输入框尾部内容，只对 <code>native-type=&quot;text&quot;</code> 有效</td></tr></tbody></table><h3 id=\"input-events\"><a class=\"header-anchor\" href=\"#input-events\"></a> Input Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>blur</td><td>在 Input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>在 Input 获得焦点时触发</td><td>(event: Event)</td></tr><tr><td>change</td><td>仅在输入框失去焦点或用户按下回车时触发</td><td>(value: string | number)</td></tr><tr><td>input</td><td>在 Input 值改变时触发</td><td>(value: string | number)</td></tr><tr><td>clear</td><td>在点击由 <code>clearable</code> 属性生成的清空按钮时触发</td><td>—</td></tr></tbody></table><h3 id=\"input-methods\"><a class=\"header-anchor\" href=\"#input-methods\"></a> Input Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>—</td></tr><tr><td>blur</td><td>使 input 失去焦点</td><td>—</td></tr><tr><td>select</td><td>选中 input 中的文字</td><td>—</td></tr></tbody></table>", 8);

function inputvue_type_template_id_248e6a22_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_hl_demo11 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo11");

  var _component_hl_demo12 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo12");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", inputvue_type_template_id_248e6a22_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", inputvue_type_template_id_248e6a22_hoisted_2, [inputvue_type_template_id_248e6a22_hoisted_3, inputvue_type_template_id_248e6a22_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_7, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_19];
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
  }), _hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_32, _hoisted_33, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    _: 1
  }), _hoisted_35, _hoisted_36, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo10)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), _hoisted_39, _hoisted_40, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo11)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), _hoisted_43, _hoisted_44, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo12)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_45];
    }),
    _: 1
  }), _hoisted_46]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/input.md?vue&type=template&id=248e6a22

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input.md?vue&type=script&lang=ts


/* harmony default export */ var inputvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_component_hl_input, {
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          placeholder: "请输入内容"
        }, null, 8, ["modelValue"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.input1 = $event;
                  }),
                  placeholder: "默认",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.input2 = $event;
                  }),
                  placeholder: "primary",
                  type: "primary",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input3,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.input3 = $event;
                  }),
                  placeholder: "warning",
                  type: "warning",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input4,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.input4 = $event;
                  }),
                  placeholder: "success",
                  type: "success",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input5,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.input5 = $event;
                  }),
                  placeholder: "danger",
                  type: "danger",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input6,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return _ctx.input6 = $event;
                  }),
                  placeholder: "info",
                  type: "info",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref('默认'),
            input2: ref('primary'),
            input3: ref('warning'),
            input4: ref('success'),
            input5: ref('danger'),
            input6: ref('info')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.input1 = $event;
                  }),
                  placeholder: "默认",
                  fill: "",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.input2 = $event;
                  }),
                  placeholder: "primary",
                  type: "primary",
                  fill: "",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input3,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.input3 = $event;
                  }),
                  placeholder: "warning",
                  type: "warning",
                  fill: "",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input4,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.input4 = $event;
                  }),
                  placeholder: "success",
                  type: "success",
                  fill: "",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input5,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.input5 = $event;
                  }),
                  placeholder: "danger",
                  type: "danger",
                  fill: "",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-b-md"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  modelValue: _ctx.input6,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return _ctx.input6 = $event;
                  }),
                  placeholder: "info",
                  type: "info",
                  fill: "",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref('默认'),
            input2: ref('primary'),
            input3: ref('warning'),
            input4: ref('success'),
            input5: ref('danger'),
            input6: ref('info')
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
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_input, {
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input1 = $event;
          }),
          placeholder: "sm",
          size: "sm",
          "prefix-icon": "mail",
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_input, {
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.input2 = $event;
          }),
          placeholder: "md",
          size: "md",
          "prefix-icon": "mail",
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_input, {
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.input3 = $event;
          }),
          placeholder: "lg",
          size: "lg",
          "prefix-icon": "mail",
          class: "m-r-md"
        }, null, 8, ["modelValue"])], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_input, {
          block: ""
        }), _createVNode(_component_hl_input, {
          "native-type": "textarea",
          block: "",
          class: "m-t-md"
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_component_hl_input, {
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          placeholder: "请输入内容",
          round: ""
        }, null, 8, ["modelValue"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_component_hl_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          disabled: true
        }, null, 8, ["modelValue"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_component_hl_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          clearable: ""
        }, null, 8, ["modelValue"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('测试输入')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_component_hl_input, {
          placeholder: "请输入密码",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          "show-password": ""
        }, null, 8, ["modelValue"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo9": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "属性方式：", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", {
        class: "m-t-lg"
      }, "自定义slot方式：", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("select", {
        class: "hl-input sm",
        style: {
          "border": "none"
        }
      }, [/*#__PURE__*/_createVNode("option", {
        value: ""
      }, "http://"), /*#__PURE__*/_createVNode("option", {
        value: ""
      }, "https://"), /*#__PURE__*/_createVNode("option", {
        value: ""
      }, "ssh:")], -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("邮箱：");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_popover = _resolveComponent("hl-popover");

        return _openBlock(), _createBlock(_Fragment, null, [_hoisted_1, _createVNode(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  placeholder: "请选择日期",
                  "suffix-icon": "userGroup",
                  modelValue: _ctx.input1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.input1 = $event;
                  }),
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  placeholder: "请输入内容",
                  "prefix-icon": "mail",
                  modelValue: _ctx.input2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.input2 = $event;
                  }),
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _hoisted_2, _createVNode(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  placeholder: "请输入键词进行搜索",
                  modelValue: _ctx.input3,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.input3 = $event;
                  }),
                  block: ""
                }, {
                  prefix: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  suffix: _withCtx(function () {
                    return [_createVNode(_component_hl_popover, {
                      placement: "top",
                      tooltip: "",
                      trigger: "hover",
                      content: "搜索一下"
                    }, {
                      reference: _withCtx(function () {
                        return [_createVNode(_component_hl_icon, {
                          name: "search"
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_input, {
                  placeholder: "请输入内容",
                  modelValue: _ctx.input4,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.input4 = $event;
                  }),
                  block: ""
                }, {
                  prefix: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  suffix: _withCtx(function () {
                    return [_createVNode(_component_hl_icon, {
                      name: "loading",
                      size: "xs"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            input4: ref('916471@qq.com')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo10": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_component_hl_input, {
          "native-type": "textarea",
          rows: 3,
          placeholder: "请输入内容",
          block: "",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.textarea = $event;
          })
        }, null, 8, ["modelValue"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            textarea: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo11": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_component_hl_input, {
          "native-type": "textarea",
          placeholder: "请输入内容",
          modelValue: _ctx.textarea1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.textarea1 = $event;
          }),
          autosize: "",
          block: ""
        }, null, 8, ["modelValue"]);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            textarea1: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo12": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.text,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.text = $event;
          }),
          maxlength: "10",
          "show-word-limit": "",
          block: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_input, {
          "native-type": "textarea",
          placeholder: "请输入内容",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.textarea = $event;
          }),
          maxlength: "30",
          class: "m-t-md",
          "show-word-limit": "",
          block: ""
        }, null, 8, ["modelValue"])], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            text: ref(''),
            textarea: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/input.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/input.md



inputvue_type_script_lang_ts.render = inputvue_type_template_id_248e6a22_render

/* harmony default export */ var input = __webpack_exports__["default"] = (inputvue_type_script_lang_ts);

/***/ })

}]);