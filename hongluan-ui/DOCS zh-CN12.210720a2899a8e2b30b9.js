(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/date-picker.md?vue&type=template&id=87334b64

var date_pickervue_type_template_id_87334b64_hoisted_1 = {
  class: "doc-main-content"
};
var date_pickervue_type_template_id_87334b64_hoisted_2 = {
  class: "doc-content"
};

var date_pickervue_type_template_id_87334b64_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "DatePicker 日期选择器", -1);

var date_pickervue_type_template_id_87334b64_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "以「日」为基本单位，基础的日期选择控件", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("基本单位由"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性指定。通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "shortcuts"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("配置快捷选项，禁用日期通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabledDate"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 设置，传入函数")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, " <hl-row gap=\"xl\" justify=\"center\">\n    <hl-col span=\"col-lg-10 col-md-12\">\n        <p>默认</p>\n        <hl-date-picker v-model=\"value1\" type=\"date\" placeholder=\"选择日期\" block></hl-date-picker>\n    </hl-col>\n    <hl-col span=\"col-lg-10 col-md-12\">\n        <p>带快捷选项</p>\n        <hl-date-picker v-model=\"value2\" type=\"date\" placeholder=\"选择日期\" :disabled-date=\"disabledDate\" :shortcuts=\"shortcuts\" block></hl-date-picker>\n    </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n        const disabledDate = (time) => {\n          return time.getTime() > Date.now()\n        }\n        const shortcuts = [{\n          text: '今天',\n          value: new Date(),\n        }, {\n          text: '昨天',\n          value: (() => {\n            const date = new Date()\n            date.setTime(date.getTime() - 3600 * 1000 * 24)\n            return date\n          })(),\n        }, {\n          text: '一周以前',\n          value: (() => {\n            const date = new Date()\n            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)\n            return date\n          })(),\n        }]\n        const value1 = ref(\"\")\n        const value2 = ref(\"\")\n        return {\n            value1: value1,\n            value2: value2,\n            disabledDate: disabledDate,\n            shortcuts: shortcuts\n        }\n    }\n  })\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "qi-ta-ri-qi-dan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qi-ta-ri-qi-dan-wei"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 其他日期单位")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "通过扩展基础的日期选择，可以选择周、月、年或多个日期", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xl\" justify=\"center\">\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>周</p>\n    <hl-date-picker v-model=\"value1\" type=\"week\" format=\"\" placeholder=\"选择周\" block></hl-date-picker>\n  </hl-col>\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>月</p>\n    <hl-date-picker v-model=\"value2\" type=\"month\" placeholder=\"选择月\" block></hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<hl-row gap=\"xl\" justify=\"center\" class=\"m-t-lg\">\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>年</p>\n    <hl-date-picker v-model=\"value3\" type=\"year\" placeholder=\"选择年\" block></hl-date-picker>\n  </hl-col>\n  <hl-col span=\"col-md-12 col-lg-10\">\n    <p>多个日期</p>\n    <hl-date-picker type=\"dates\" v-model=\"value4\" placeholder=\"选择一个或多个日期\" block></hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      return {\n        value1: ref(''),\n        value2: ref(''),\n        value3: ref(''),\n        value4: ref('')\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "xuan-ze-ri-qi-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xuan-ze-ri-qi-fan-wei"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 选择日期范围")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可在一个选择器中便捷地选择一个时间范围", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "unlink-panels"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性解除联动。")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xl\" justify=\"center\">\n  <hl-col span=\"col-lg-12\">\n    <p>默认</p>\n    <hl-date-picker v-model=\"value1\" type=\"daterange\" range-separator=\"至\" start-placeholder=\"开始日期\" end-placeholder=\"结束日期\" block></hl-date-picker>\n  </hl-col>\n  <hl-col span=\"col-lg-12\">\n    <p>带快捷选项</p>\n    <hl-date-picker v-model=\"value2\" type=\"daterange\" unlink-panels range-separator=\"至\" start-placeholder=\"开始日期\" end-placeholder=\"结束日期\" :shortcuts=\"shortcuts\" block></hl-date-picker>\n  </hl-col>\n</hl-row>\n\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      const  shortcuts = [{\n       text: '最近一周',\n       value: (() => {\n         const end = new Date()\n         const start = new Date()\n         start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)\n         return [start, end]\n       })(),\n     }, {\n       text: '最近一个月',\n       value: (() => {\n         const end = new Date()\n         const start = new Date()\n         start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)\n         return [start, end]\n       })(),\n     }, {\n       text: '最近三个月',\n       value: (() => {\n         const end = new Date()\n         const start = new Date()\n         start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)\n         return [start, end]\n       })(),\n     }]\n      return {\n        shortcuts: shortcuts,\n        value1: ref(''),\n        value2: ref('')\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "xuan-ze-yue-fen-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xuan-ze-yue-fen-fan-wei"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 选择月份范围")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可在一个选择器中便捷地选择一个月份范围", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "unlink-panels"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性解除联动。")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xl\" justify=\"center\">\n  <hl-col span=\"col-lg-12\">\n    <p>默认</p>\n    <hl-date-picker v-model=\"value1\" type=\"monthrange\" range-separator=\"至\" start-placeholder=\"开始月份\" end-placeholder=\"结束月份\" block></hl-date-picker>\n  </hl-col>\n  <hl-col span=\"col-lg-12\">\n    <p>带快捷选项</p>\n    <hl-date-picker v-model=\"value2\" type=\"monthrange\" unlink-panels range-separator=\"至\" start-placeholder=\"开始月份\" end-placeholder=\"结束月份\" :shortcuts=\"shortcuts\" block></hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      const shortcuts = [{\n          text: '本月',\n          value: [new Date(), new Date()],\n        }, {\n          text: '今年至今',\n          value: (() => {\n            const end = new Date()\n            const start = new Date(new Date().getFullYear(), 0)\n            return [start, end]\n          })(),\n        }, {\n          text: '最近六个月',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setMonth(start.getMonth() - 6)\n            return [start, end]\n          })(),\n        }]\n      return {\n        shortcuts: shortcuts,\n        value1: ref(''),\n        value2: ref('')\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "mo-ren-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mo-ren-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 默认值")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("如果用户没有选择日期，那默认展示当前日的月份。你可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "default-value"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来设置成其他的日期。")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("如果类型是 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "daterange"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "default-value"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 则会设置左边窗口的默认值。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xl\" justify=\"center\">\n  <hl-col span=\"col-lg-12\">\n    <p>日期</p>\n    <hl-date-picker v-model=\"value1\" type=\"date\" placeholder=\"Pick a date\" :default-value=\"new Date(2010, 9, 1)\"></hl-date-picker>\n  </hl-col>\n\n  <hl-col span=\"col-lg-12\">\n    <p>日期范围</p>\n    <hl-date-picker v-model=\"value2\" type=\"daterange\" start-placeholder=\"Start Date\" end-placeholder=\"End Date\" :default-value=\"[new Date(2010, 9, 1), new Date(2010, 10, 1)]\"></hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      return {\n        value1: ref(''),\n        value2: ref('')\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ri-qi-ge-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ri-qi-ge-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 日期格式")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("指定输入框的格式。默认情况下，组件接受并返回"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Date"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("对象。")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", {
  class: "warning"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "请注意大小写")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("在 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  href: "https://day.js.org/docs/zh-CN/display/format"
}, "这里"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 查看 Day.js 支持的 format 参数。")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col>\n    <p>默认为 Date 对象</p>\n    <hl-date-picker v-model=\"value1\" type=\"date\" placeholder=\"选择日期\" format=\"YYYY 年 MM 月 DD 日\"></hl-date-picker>\n    <p class=\"m-t-lg\">值：{{ value1 }}</p>\n  </hl-col>\n  <hl-col class=\"m-t-lg\">\n    <p>使用value-format</p>\n    <hl-date-picker v-model=\"value2\" type=\"date\" placeholder=\"选择日期\" format=\"YYYY 年 MM 月 DD 日\" value-format=\"YYYY/MM/DD\"></hl-date-picker>\n    <p class=\"m-t-lg\">值：{{ value2 }}</p>\n  </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      return {\n        value1: ref(''),\n        value2: ref(''),\n        value3: ref('')\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "mo-ren-xian-shi-ri-qi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mo-ren-xian-shi-ri-qi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 默认显示日期")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "在选择日期范围时，指定起始日期和结束日期的默认时刻。", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以分别指定二者的具体时刻。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("接受一个数组，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "\n<p>组件值：{{ value }}</p>\n<hl-date-picker v-model=\"value\" type=\"daterange\" start-placeholder=\"开始日期\" end-placeholder=\"结束日期\" :default-time=\"defaultTime\"></hl-date-picker>\n\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      const defaultTime = [\n         new Date(2000, 1, 1, 0, 0, 0),\n         new Date(2000, 2, 1, 23, 59, 59)\n       ] // '00:00:00', '23:59:59'\n      return {\n        value: ref(''),\n        defaultTime: defaultTime\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>date(DatePicker) / array(DateRangePicker)</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时结束日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>显示类型</td><td>string</td><td>year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange</td><td>date</td></tr><tr><td>format</td><td>显示在输入框中的格式</td><td>string</td><td>见<a href=\"#/zh-CN/component/date-picker#ri-qi-ge-shi\">日期格式</a></td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>DatePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>—</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date</td><td>可被<code>new Date()</code>解析</td><td>—</td></tr><tr><td>default-time</td><td>范围选择时选中日期所使用的当日内具体时刻</td><td>Date[]</td><td>数组，长度为 2，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 <code>00:00:00</code></td><td>—</td></tr><tr><td>value-format</td><td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td><td>string</td><td>见<a href=\"#/zh-CN/component/date-picker#ri-qi-ge-shi\">日期格式</a></td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>unlink-panels</td><td>在范围选择器里取消两个日期面板之间的联动</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>validate-event</td><td>输入时是否触发表单的校验</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>shortcuts</td><td>设置快捷选项，需要传入数组对象</td><td>object[{ text: string, value: Date }]</td><td>—</td><td>—</td></tr><tr><td>disabledDate</td><td>设置禁用状态，参数为当前日期，要求返回 Boolean</td><td>Function</td><td>—</td><td>—</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr></tbody></table><h2 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>—</td></tr></tbody></table>", 6);

function date_pickervue_type_template_id_87334b64_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", date_pickervue_type_template_id_87334b64_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", date_pickervue_type_template_id_87334b64_hoisted_2, [date_pickervue_type_template_id_87334b64_hoisted_3, date_pickervue_type_template_id_87334b64_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/date-picker.md?vue&type=template&id=87334b64

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/date-picker.md?vue&type=script&lang=ts


/* harmony default export */ var date_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "默认", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "带快捷选项", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "xl",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-10 col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "date",
                  placeholder: "选择日期",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-10 col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "date",
                  placeholder: "选择日期",
                  "disabled-date": _ctx.disabledDate,
                  shortcuts: _ctx.shortcuts,
                  block: ""
                }, null, 8, ["modelValue", "disabled-date", "shortcuts"])];
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
          var disabledDate = function disabledDate(time) {
            return time.getTime() > Date.now();
          };

          var shortcuts = [{
            text: '今天',
            value: new Date()
          }, {
            text: '昨天',
            value: function () {
              var date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            }()
          }, {
            text: '一周以前',
            value: function () {
              var date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            }()
          }];
          var value1 = ref("");
          var value2 = ref("");
          return {
            value1: value1,
            value2: value2,
            disabledDate: disabledDate,
            shortcuts: shortcuts
          };
        }
      });
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "周", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "月", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "年", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("p", null, "多个日期", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          gap: "xl",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "week",
                  format: "",
                  placeholder: "选择周",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "month",
                  placeholder: "选择月",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          gap: "xl",
          justify: "center",
          class: "m-t-lg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value3,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.value3 = $event;
                  }),
                  type: "year",
                  placeholder: "选择年",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12 col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4, _createVNode(_component_hl_date_picker, {
                  type: "dates",
                  modelValue: _ctx.value4,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.value4 = $event;
                  }),
                  placeholder: "选择一个或多个日期",
                  block: ""
                }, null, 8, ["modelValue"])];
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
            value1: ref(''),
            value2: ref(''),
            value3: ref(''),
            value4: ref('')
          };
        }
      });
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "默认", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "带快捷选项", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "xl",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "daterange",
                  "unlink-panels": "",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期",
                  shortcuts: _ctx.shortcuts,
                  block: ""
                }, null, 8, ["modelValue", "shortcuts"])];
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
          var shortcuts = [{
            text: '最近一周',
            value: function () {
              var end = new Date();
              var start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }()
          }, {
            text: '最近一个月',
            value: function () {
              var end = new Date();
              var start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }()
          }, {
            text: '最近三个月',
            value: function () {
              var end = new Date();
              var start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }()
          }];
          return {
            shortcuts: shortcuts,
            value1: ref(''),
            value2: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "默认", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "带快捷选项", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "xl",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "monthrange",
                  "range-separator": "至",
                  "start-placeholder": "开始月份",
                  "end-placeholder": "结束月份",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "monthrange",
                  "unlink-panels": "",
                  "range-separator": "至",
                  "start-placeholder": "开始月份",
                  "end-placeholder": "结束月份",
                  shortcuts: _ctx.shortcuts,
                  block: ""
                }, null, 8, ["modelValue", "shortcuts"])];
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
          var shortcuts = [{
            text: '本月',
            value: [new Date(), new Date()]
          }, {
            text: '今年至今',
            value: function () {
              var end = new Date();
              var start = new Date(new Date().getFullYear(), 0);
              return [start, end];
            }()
          }, {
            text: '最近六个月',
            value: function () {
              var end = new Date();
              var start = new Date();
              start.setMonth(start.getMonth() - 6);
              return [start, end];
            }()
          }];
          return {
            shortcuts: shortcuts,
            value1: ref(''),
            value2: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "日期", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "日期范围", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "xl",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "date",
                  placeholder: "Pick a date",
                  "default-value": new Date(2010, 9, 1)
                }, null, 8, ["modelValue", "default-value"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "daterange",
                  "start-placeholder": "Start Date",
                  "end-placeholder": "End Date",
                  "default-value": [new Date(2010, 9, 1), new Date(2010, 10, 1)]
                }, null, 8, ["modelValue", "default-value"])];
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
            value1: ref(''),
            value2: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "默认为 Date 对象", -1);

      var _hoisted_2 = {
        class: "m-t-lg"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "使用value-format", -1);

      var _hoisted_4 = {
        class: "m-t-lg"
      };

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, null, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "date",
                  placeholder: "选择日期",
                  format: "YYYY 年 MM 月 DD 日"
                }, null, 8, ["modelValue"]), _createVNode("p", _hoisted_2, "值：" + _toDisplayString(_ctx.value1), 1)];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "date",
                  placeholder: "选择日期",
                  format: "YYYY 年 MM 月 DD 日",
                  "value-format": "YYYY/MM/DD"
                }, null, 8, ["modelValue"]), _createVNode("p", _hoisted_4, "值：" + _toDisplayString(_ctx.value2), 1)];
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
            value1: ref(''),
            value2: ref(''),
            value3: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode("p", null, "组件值：" + _toDisplayString(_ctx.value), 1), _createVNode(_component_hl_date_picker, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          type: "daterange",
          "start-placeholder": "开始日期",
          "end-placeholder": "结束日期",
          "default-time": _ctx.defaultTime
        }, null, 8, ["modelValue", "default-time"])], 64);
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)]; // '00:00:00', '23:59:59'

          return {
            value: ref(''),
            defaultTime: defaultTime
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/date-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/date-picker.md



date_pickervue_type_script_lang_ts.render = date_pickervue_type_template_id_87334b64_render

/* harmony default export */ var date_picker = __webpack_exports__["default"] = (date_pickervue_type_script_lang_ts);

/***/ })

}]);