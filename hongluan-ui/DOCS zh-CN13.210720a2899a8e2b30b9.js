(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/datetime-picker.md?vue&type=template&id=78838b70

var datetime_pickervue_type_template_id_78838b70_hoisted_1 = {
  class: "doc-main-content"
};
var datetime_pickervue_type_template_id_78838b70_hoisted_2 = {
  class: "doc-content"
};

var datetime_pickervue_type_template_id_78838b70_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "DateTimePicker 日期时间选择器", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-date-picker"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "datetime"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "DateTimePicker 由 时间 和 日期 选择器派生而来，相关属性可参考文档说明。")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "\n<hl-row>\n  <hl-col span=\"col-lg-8\">\n    <p>默认</p>\n    <hl-date-picker v-model=\"value1\" type=\"datetime\" placeholder=\"选择日期时间\" block></hl-date-picker>\n  </hl-col>\n  <hl-col span=\"col-lg-8\">\n    <p>带快捷选项</p>\n    <hl-date-picker v-model=\"value2\" type=\"datetime\" placeholder=\"选择日期时间\" :shortcuts=\"shortcuts\" block></hl-date-picker>\n  </hl-col>\n  <hl-col span=\"col-lg-8\">\n    <p>设置默认时间</p>\n    <hl-date-picker v-model=\"value3\" type=\"datetime\" placeholder=\"选择日期时间\" :default-time=\"defaultTime\" block></hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      const shortcuts = [{\n        text: '今天',\n        value: new Date(),\n      }, {\n        text: '昨天',\n        value: (() => {\n          const date = new Date();\n          date.setTime(date.getTime() - 3600 * 1000 * 24);\n          return date\n        })(),\n      }, {\n        text: '一周前',\n        value: (() => {\n          const date = new Date();\n          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n          return date\n        })(),\n      }]\n      const defaultTime = new Date(2000, 1, 1, 12, 0, 0)\n      return {\n        shortcuts,\n        value1: ref(''),\n        value2: ref(''),\n        value3: ref(''),\n        defaultTime // '12:00:00'\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ri-qi-he-shi-jian-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ri-qi-he-shi-jian-fan-wei"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 日期和时间范围")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "datetimerange"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可选择日期和时间范围")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row justify=\"center\">\n  <hl-col>\n    <p>默认</p>\n    <hl-date-picker\n      v-model=\"value1\"\n      type=\"datetimerange\"\n      range-separator=\"至\"\n      start-placeholder=\"开始日期\"\n      end-placeholder=\"结束日期\">\n    </hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<hl-row justify=\"center\" class=\"m-t-lg\">\n  <hl-col>\n    <p>带快捷选项</p>\n    <hl-date-picker\n      v-model=\"value2\"\n      type=\"datetimerange\"\n      :shortcuts=\"shortcuts\"\n      range-separator=\"至\"\n      start-placeholder=\"开始日期\"\n      end-placeholder=\"结束日期\">\n    </hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      const shortcuts = [{\n          text: '最近一周',\n          value: (() => {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n            return [start, end]\n          })()\n        }, {\n          text: '最近一个月',\n          value: (() => {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n            return [start, end]\n          })()\n        }, {\n          text: '最近三个月',\n          value: (() => {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n            return [start, end]\n          })()\n        }]\n      return {\n        shortcuts,\n        value1: ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]),\n        value2: ref('')\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "mo-ren-de-qi-shi-yu-jie-shu-shi-ke"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mo-ren-de-qi-shi-yu-jie-shu-shi-ke"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 默认的起始与结束时刻")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "datetimerange"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "00:00:00"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("作为起始与结束的时刻；通过选项"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以控制选中起始与结束日期时所使用的具体时刻。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("接受一个数组，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "\n<hl-row justify=\"center\">\n  <hl-col>\n    <p>起始日期时刻为 12:00:00</p>\n    <hl-date-picker \n    v-model=\"value1\" type=\"datetimerange\" start-placeholder=\"开始日期\" end-placeholder=\"结束日期\" :default-time=\"defaultTime1\" block>\n    </hl-date-picker>\n  </hl-col>\n  <hl-col class=\"m-t-lg\">\n    <p>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</p>\n    <hl-date-picker v-model=\"value2\" type=\"datetimerange\" start-placeholder=\"开始日期\" end-placeholder=\"结束日期\" :default-time=\"defaultTime2\" block>\n    </hl-date-picker>\n  </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent ({\n    setup() {\n      const defaultTime1 = [\n         new Date(2000, 1, 1, 12, 0, 0),\n      ] // '12:00:00'\n      const defaultTime2 = [\n         new Date(2000, 1, 1, 12, 0, 0),\n         new Date(2000, 2, 1, 8, 0, 0)\n       ] // '12:00:00', '08:00:00'\n      return {\n        value1: ref(''),\n        value2: ref(''),\n        defaultTime1,\n        defaultTime2\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>date(DateTimePicker) / array(DateTimeRangePicker)</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时结束日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>time-arrow-control</td><td>是否使用箭头进行时间选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>显示类型</td><td>string</td><td>year/month/date/week/ datetime/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>显示在输入框中的格式</td><td>string</td><td>见<a href=\"#/zh-CN/component/date-picker#ri-qi-ge-shi\">日期格式</a></td><td>YYYY-MM-DD HH:mm:ss</td></tr><tr><td>popper-class</td><td>DateTimePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date</td><td>可被<code>new Date()</code>解析</td><td>—</td></tr><tr><td>default-time</td><td>选中日期后的默认具体时刻</td><td>Date / 范围选择时：Date[]</td><td>非范围选择时：Date 对象；范围选择时：数组，长度为 2，每项值为 Date 对象，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 <code>00:00:00</code></td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>unlink-panels</td><td>在范围选择器里取消两个日期面板之间的联动</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>shortcuts</td><td>设置快捷选项，需要传入数组对象</td><td>object[{ text: string, value: Date }]</td><td>—</td><td>—</td></tr><tr><td>disabledDate</td><td>设置禁用状态，参数为当前日期，要求返回 Boolean</td><td>Function</td><td>—</td><td>—</td></tr><tr><td>cellClassName</td><td>设置日期的 className</td><td>Function(Date)</td><td>—</td><td>—</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr></tbody></table><h2 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>—</td></tr></tbody></table><h2 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\"></a> Slots</h2><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>range-separator</td><td>自定义分隔符</td></tr></tbody></table>", 8);

function datetime_pickervue_type_template_id_78838b70_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", datetime_pickervue_type_template_id_78838b70_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", datetime_pickervue_type_template_id_78838b70_hoisted_2, [datetime_pickervue_type_template_id_78838b70_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_13]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/datetime-picker.md?vue&type=template&id=78838b70

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/datetime-picker.md?vue&type=script&lang=ts


/* harmony default export */ var datetime_pickervue_type_script_lang_ts = ({
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

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "设置默认时间", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "datetime",
                  placeholder: "选择日期时间",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "datetime",
                  placeholder: "选择日期时间",
                  shortcuts: _ctx.shortcuts,
                  block: ""
                }, null, 8, ["modelValue", "shortcuts"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value3,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.value3 = $event;
                  }),
                  type: "datetime",
                  placeholder: "选择日期时间",
                  "default-time": _ctx.defaultTime,
                  block: ""
                }, null, 8, ["modelValue", "default-time"])];
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
            text: '一周前',
            value: function () {
              var date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            }()
          }];
          var defaultTime = new Date(2000, 1, 1, 12, 0, 0);
          return {
            shortcuts: shortcuts,
            value1: ref(''),
            value2: ref(''),
            value3: ref(''),
            defaultTime: defaultTime // '12:00:00'

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

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "默认", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "带快捷选项", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, null, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "datetimerange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_row, {
          justify: "center",
          class: "m-t-lg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, null, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "datetimerange",
                  shortcuts: _ctx.shortcuts,
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期"
                }, null, 8, ["modelValue", "shortcuts"])];
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
            value1: ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]),
            value2: ref('')
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "起始日期时刻为 12:00:00", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "起始日期时刻为 12:00:00，结束日期时刻为 08:00:00", -1);

      function render(_ctx, _cache) {
        var _component_hl_date_picker = _resolveComponent("hl-date-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, null, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  type: "datetimerange",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期",
                  "default-time": _ctx.defaultTime1,
                  block: ""
                }, null, 8, ["modelValue", "default-time"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_date_picker, {
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  type: "datetimerange",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期",
                  "default-time": _ctx.defaultTime2,
                  block: ""
                }, null, 8, ["modelValue", "default-time"])];
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
          var defaultTime1 = [new Date(2000, 1, 1, 12, 0, 0)]; // '12:00:00'

          var defaultTime2 = [new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)]; // '12:00:00', '08:00:00'

          return {
            value1: ref(''),
            value2: ref(''),
            defaultTime1: defaultTime1,
            defaultTime2: defaultTime2
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/datetime-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/datetime-picker.md



datetime_pickervue_type_script_lang_ts.render = datetime_pickervue_type_template_id_78838b70_render

/* harmony default export */ var datetime_picker = __webpack_exports__["default"] = (datetime_pickervue_type_script_lang_ts);

/***/ })

}]);