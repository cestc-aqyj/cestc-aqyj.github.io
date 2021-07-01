(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/time-picker.md?vue&type=template&id=6a3812b3

var time_pickervue_type_template_id_6a3812b3_hoisted_1 = {
  class: "doc-main-content"
};
var time_pickervue_type_template_id_6a3812b3_hoisted_2 = {
  class: "doc-content"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "TimePicker 时间选择器", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-time-picker"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 组件可以选择任意时间。")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabledHours"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabledMinutes"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabledSeconds"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 限制可选时间范围。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xl\" justify=\"center\">\n    <hl-col span=\"col-lg-10\">\n        <p>使用的箭头进行选择：<code>arrow-control</code></p>\n        <hl-time-picker arrow-control v-model=\"value2\" :disabled-hours=\"disabledHours\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\" placeholder=\"任意时间点\" block></hl-time-picker>\n    </hl-col>\n    <hl-col span=\"col-lg-10\">\n        <p>鼠标滚轮进行选择：默认</p>\n        <hl-time-picker v-model=\"value1\" :disabled-hours=\"disabledHours\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\" placeholder=\"任意时间点\" block></hl-time-picker>\n    </hl-col>\n</hl-row>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  const makeRange = (start, end) => {\n    const result = []\n    for (let i = start; i <= end; i++) {\n      result.push(i)\n    }\n    return result\n  }\n  export default defineComponent ({\n    setup() {\n      let value1 = ref(new Date(2016, 9, 10, 18, 40));\n      let value2 = ref(new Date(2016, 9, 10, 18, 40));\n\n      // 如允许 17:30:00 - 18:30:00\n      const disabledHours = () => {\n        return makeRange(0, 16).concat(makeRange(19, 23))\n      }\n\n      const disabledMinutes = (hour) => {\n        if (hour === 17) {\n          return makeRange(0, 29)\n        }\n        if (hour === 18) {\n          return makeRange(31, 59)\n        }\n      }\n\n      const disabledSeconds = (hour, minute) => {\n        if (hour === 18 && minute === 30) {\n          return makeRange(1, 59)\n        }\n      }\n\n      return {\n        value1,\n        value2,\n        disabledHours,\n        disabledMinutes,\n        disabledSeconds\n    }\n  }\n })\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ren-yi-shi-jian-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ren-yi-shi-jian-fan-wei"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 任意时间范围")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性即可选择时间范围，同样支持"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xl\" justify=\"center\">\n    <hl-col span=\"col-lg-10\">\n        <hl-time-picker is-range arrow-control v-model=\"value2\" range-separator=\"至\" start-placeholder=\"开始时间\" end-placeholder=\"结束时间\" placeholder=\"选择时间范围\" block></hl-time-picker>\n    </hl-col>\n    <hl-col span=\"col-lg-10\">\n        <hl-time-picker is-range v-model=\"value1\" range-separator=\"至\" start-placeholder=\"开始时间\" end-placeholder=\"结束时间\" placeholder=\"选择时间范围\" block></hl-time-picker>\n    </hl-col>\n</hl-row>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n    setup() {\n      let value1 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]);\n      let value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]);\n\n      return {\n        value1,\n        value2\n    }\n  }\n })\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>date</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>sm / lg</td><td>—</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>是否为时间范围选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>是否使用箭头进行时间选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>TimePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>format</td><td>显示在输入框中的格式</td><td>string</td><td>见<a href=\"#/zh-CN/component/date-picker#ri-qi-ge-shi\">日期格式</a></td><td>HH:mm:ss</td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date(TimePicker) / string(TimeSelect)</td><td>可被<code>new Date()</code>解析(TimePicker) / 可选值(TimeSelect)</td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabledHours</td><td>禁止选择部分小时选项</td><td>function</td><td>—</td><td>-</td></tr><tr><td>disabledMinutes</td><td>禁止选择部分分钟选项</td><td>function(selectedHour)</td><td>—</td><td>-</td></tr><tr><td>disabledSeconds</td><td>禁止选择部分秒选项</td><td>function(selectedHour, selectedMinute)</td><td>—</td><td>-</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr></tbody></table><h2 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr></tbody></table>", 6);

function time_pickervue_type_template_id_6a3812b3_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", time_pickervue_type_template_id_6a3812b3_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", time_pickervue_type_template_id_6a3812b3_hoisted_2, [_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_10]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/time-picker.md?vue&type=template&id=6a3812b3

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/time-picker.md?vue&type=script&lang=ts


/* harmony default export */ var time_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode("使用的箭头进行选择："), /*#__PURE__*/_createVNode("code", null, "arrow-control")], -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "鼠标滚轮进行选择：默认", -1);

      function render(_ctx, _cache) {
        var _component_hl_time_picker = _resolveComponent("hl-time-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "xl",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_time_picker, {
                  "arrow-control": "",
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  "disabled-hours": _ctx.disabledHours,
                  "disabled-minutes": _ctx.disabledMinutes,
                  "disabled-seconds": _ctx.disabledSeconds,
                  placeholder: "任意时间点",
                  block: ""
                }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_time_picker, {
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  "disabled-hours": _ctx.disabledHours,
                  "disabled-minutes": _ctx.disabledMinutes,
                  "disabled-seconds": _ctx.disabledSeconds,
                  placeholder: "任意时间点",
                  block: ""
                }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var defineComponent = vue_esm_browser_prod["q" /* defineComponent */],
          ref = vue_esm_browser_prod["L" /* ref */];

      var makeRange = function makeRange(start, end) {
        var result = [];

        for (var i = start; i <= end; i++) {
          result.push(i);
        }

        return result;
      };

      var democomponentExport = defineComponent({
        setup: function setup() {
          var value1 = ref(new Date(2016, 9, 10, 18, 40));
          var value2 = ref(new Date(2016, 9, 10, 18, 40)); // 如允许 17:30:00 - 18:30:00

          var disabledHours = function disabledHours() {
            return makeRange(0, 16).concat(makeRange(19, 23));
          };

          var disabledMinutes = function disabledMinutes(hour) {
            if (hour === 17) {
              return makeRange(0, 29);
            }

            if (hour === 18) {
              return makeRange(31, 59);
            }
          };

          var disabledSeconds = function disabledSeconds(hour, minute) {
            if (hour === 18 && minute === 30) {
              return makeRange(1, 59);
            }
          };

          return {
            value1: value1,
            value2: value2,
            disabledHours: disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds
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
        var _component_hl_time_picker = _resolveComponent("hl-time-picker");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "xl",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_time_picker, {
                  "is-range": "",
                  "arrow-control": "",
                  modelValue: _ctx.value2,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.value2 = $event;
                  }),
                  "range-separator": "至",
                  "start-placeholder": "开始时间",
                  "end-placeholder": "结束时间",
                  placeholder: "选择时间范围",
                  block: ""
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-lg-10"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_time_picker, {
                  "is-range": "",
                  modelValue: _ctx.value1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.value1 = $event;
                  }),
                  "range-separator": "至",
                  "start-placeholder": "开始时间",
                  "end-placeholder": "结束时间",
                  placeholder: "选择时间范围",
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
          var value1 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]);
          var value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]);
          return {
            value1: value1,
            value2: value2
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/time-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/time-picker.md



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_6a3812b3_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ })

}]);