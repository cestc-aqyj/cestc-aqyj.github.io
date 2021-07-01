(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/switch.md?vue&type=template&id=64892bd1

var switchvue_type_template_id_64892bd1_hoisted_1 = {
  class: "doc-main-content"
};
var _hoisted_2 = {
  class: "doc-content"
};

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Switch 开关", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "表示两种相互对立的状态间的切换，多用于触发「开/关」。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("绑定"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("到一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("类型的变量。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-switch v-model=\"value\" class=\"m-r-md\"></hl-switch>\n<hl-switch v-model=\"value\" type=\"primary\" :width=\"60\"></hl-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: true\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 颜色")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Switch 的颜色与状态颜色保持一致。可选值为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "primary"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "danger"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "active-color"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性与"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "inactive-color"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来设置开关的背景色。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-switch v-model=\"value1\" class=\"m-r-md\"></hl-switch>\n<hl-switch v-model=\"value1\" class=\"m-r-md\" type=\"primary\"></hl-switch>\n<hl-switch v-model=\"value1\" class=\"m-r-md\" type=\"success\"></hl-switch>\n<hl-switch v-model=\"value1\" class=\"m-r-md\" type=\"warning\"></hl-switch>\n<hl-switch v-model=\"value1\" class=\"m-r-md\" type=\"danger\"></hl-switch>\n<hl-switch v-model=\"value1\" class=\"m-r-md\" type=\"info\"></hl-switch>\n\n<hl-switch\n  v-model=\"value\"\n  active-color=\"#13ce66\"\n  inactive-color=\"#2d3748\"\n></hl-switch>\n<script>\n  export default {\n    data() {\n      return {\n        value: false,\n        value1: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"kuo-zhan-de-value-lei-xing\"><a class=\"header-anchor\" href=\"#kuo-zhan-de-value-lei-xing\"></a> 扩展的 value 类型</h2><p>设置<code>active-value</code>和<code>inactive-value</code>属性，接受<code>Boolean</code>, <code>String</code>或<code>Number</code>类型的值。</p>", 2);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-switch v-model=\"value\" active-value=\"100\" inactive-value=\"0\"></hl-switch>\n<span class=\"m-l-md\">{{ value }}</span>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: '100',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性可使 switch 变为禁用状态。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-switch v-model=\"value1\" class=\"m-r-md\" disabled></hl-switch>\n<hl-switch v-model=\"value2\" class=\"m-r-md\" type=\"primary\" disabled></hl-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"chi-cun\"><a class=\"header-anchor\" href=\"#chi-cun\"></a> 尺寸</h2><p>设置<code>size</code>属性，可选值为<code>sm</code> <code>md</code> <code>lg</code>， 默认则为 <code>md</code>。</p>", 2);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-switch v-model=\"value1\" size=\"sm\" class=\"m-r-md\"></hl-switch>\n<hl-switch v-model=\"value1\" size=\"md\" class=\"m-r-md\"></hl-switch>\n<hl-switch v-model=\"value1\" size=\"lg\" class=\"m-r-md\"></hl-switch>\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-biao"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 图标")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性可为 switch 加上图标效果。你也通过 icon slot 来自定义设置。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("注意 slot 里面必须用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "i"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("标签包裹你的自定义内容")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-switch v-model=\"value2\" type=\"success\" class=\"m-r-md\">\n  <template #icon>\n    <i>$</i>\n  </template>\n</hl-switch>\n\n<hl-switch v-model=\"value3\" icon=\"close\" type=\"danger\" class=\"m-r-md\"></hl-switch>\n<hl-switch v-model=\"value4\" loading class=\"m-r-md\"></hl-switch>\n<hl-switch v-model=\"value4\" loading icon=\"Mail\" class=\"m-r-md\"></hl-switch>\n<hl-switch v-model=\"value4\" icon=\"power\" type=\"primary\" class=\"m-r-md\"></hl-switch>\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true,\n        value3: true,\n        value4: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zu-zhi-qie-huan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zu-zhi-qie-huan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 阻止切换")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "beforeChange"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-switch v-model=\"value1\" :loading=\"loading1\" :beforeChange=\"beforeChange1\" class=\"m-r-md\">\n</hl-switch>\n<hl-switch v-model=\"value2\" :loading=\"loading2\" :beforeChange=\"beforeChange2\">\n</hl-switch>\n<script>\n  import { reactive, toRefs } from 'vue'\n  import { HlMessage } from 'hongluan-ui'\n\n  export default {\n    setup() {\n      const status1 = reactive({\n        value1: false,\n        loading1: false,\n      })\n\n      const beforeChange1 = () => {\n        status1.loading1 = true\n        return new Promise(resolve => {\n          setTimeout(() => {\n            status1.loading1 = false\n            HlMessage.success('切换成功')\n            return resolve(true)\n          }, 1000)\n        })\n      }\n\n      const status2 = reactive({\n        value2: false,\n        loading2: false,\n      })\n\n      const beforeChange2 = () => {\n        status2.loading2 = true\n        return new Promise((resolve, reject) => {\n          setTimeout(() => {\n            status2.loading2 = false\n            HlMessage.error('切换失败')\n            return reject(new Error('error'))\n          }, 1000)\n        })\n      }\n\n      return {\n        ...toRefs(status1),\n        ...toRefs(status2),\n        beforeChange1,\n        beforeChange2,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值，必须等于<code>active-value</code>或<code>inactive-value</code>，默认为<code>Boolean</code>类型</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>图标</td><td>string</td><td>-</td><td>-</td></tr><tr><td>type</td><td>颜色状态</td><td>string</td><td>primary, warning, danger, success, info</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>sm / lg</td><td>—</td></tr><tr><td>width</td><td>switch 的宽度（像素），width 和 size 不能同时使用</td><td>number</td><td>—</td><td>40</td></tr><tr><td>active-value</td><td>switch 打开时的值</td><td>boolean / string / number</td><td>—</td><td>true</td></tr><tr><td>inactive-value</td><td>switch 关闭时的值</td><td>boolean / string / number</td><td>—</td><td>false</td></tr><tr><td>active-color</td><td>switch 打开时的背景色</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch 关闭时的背景色</td><td>string</td><td>—</td><td>#C0CCDA</td></tr><tr><td>name</td><td>switch 对应的 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>validate-event</td><td>改变 switch 状态时是否触发表单的校验</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>loading</td><td>加载状态，此状态下如果不设置icon，会默认将icon设成Loading</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-change</td><td>switch 状态改变前的钩子，返回 false 或者返回 Promise 且被 reject 则停止切换</td><td>function</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>switch 状态发生变化时的回调函数</td><td>新状态的值</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\"></a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 Switch 获取焦点</td><td>-</td></tr></tbody></table><h3 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\"></a> Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>icon 自定义，自定义将会使自动设置loading icon功能失效</td></tr></tbody></table>", 8);

function switchvue_type_template_id_64892bd1_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", switchvue_type_template_id_64892bd1_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", _hoisted_2, [_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_11, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_17, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/switch.md?vue&type=template&id=64892bd1

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/switch.md?vue&type=script&lang=ts


/* harmony default export */ var switchvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_switch = _resolveComponent("hl-switch");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value = $event;
          }),
          type: "primary",
          width: 60
        }, null, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_switch = _resolveComponent("hl-switch");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value1 = $event;
          }),
          class: "m-r-md",
          type: "primary"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value1 = $event;
          }),
          class: "m-r-md",
          type: "success"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.value1 = $event;
          }),
          class: "m-r-md",
          type: "warning"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.value1 = $event;
          }),
          class: "m-r-md",
          type: "danger"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.value1 = $event;
          }),
          class: "m-r-md",
          type: "info"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
            return _ctx.value = $event;
          }),
          "active-color": "#13ce66",
          "inactive-color": "#2d3748"
        }, null, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: false,
            value1: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "m-l-md"
      };

      function render(_ctx, _cache) {
        var _component_hl_switch = _resolveComponent("hl-switch");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "active-value": "100",
          "inactive-value": "0"
        }, null, 8, ["modelValue"]), _createVNode("span", _hoisted_1, _toDisplayString(_ctx.value), 1)], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: '100'
          };
        }
      };
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
        var _component_hl_switch = _resolveComponent("hl-switch");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          class: "m-r-md",
          disabled: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          class: "m-r-md",
          type: "primary",
          disabled: ""
        }, null, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: false
          };
        }
      };
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
        var _component_hl_switch = _resolveComponent("hl-switch");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          size: "sm",
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value1 = $event;
          }),
          size: "md",
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value1 = $event;
          }),
          size: "lg",
          class: "m-r-md"
        }, null, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true
          };
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", null, "$", -1);

      function render(_ctx, _cache) {
        var _component_hl_switch = _resolveComponent("hl-switch");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "success",
          class: "m-r-md"
        }, {
          icon: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value3 = $event;
          }),
          icon: "close",
          type: "danger",
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value4 = $event;
          }),
          loading: "",
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.value4 = $event;
          }),
          loading: "",
          icon: "Mail",
          class: "m-r-md"
        }, null, 8, ["modelValue"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.value4 = $event;
          }),
          icon: "power",
          type: "primary",
          class: "m-r-md"
        }, null, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: true,
            value3: true,
            value4: false
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
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_switch = _resolveComponent("hl-switch");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          loading: _ctx.loading1,
          beforeChange: _ctx.beforeChange1,
          class: "m-r-md"
        }, null, 8, ["modelValue", "loading", "beforeChange"]), _createVNode(_component_hl_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          loading: _ctx.loading2,
          beforeChange: _ctx.beforeChange2
        }, null, 8, ["modelValue", "loading", "beforeChange"])], 64);
      }

      var reactive = vue_esm_browser_prod["K" /* reactive */],
          toRefs = vue_esm_browser_prod["W" /* toRefs */];

      var _require = __webpack_require__(52),
          HlMessage = _require.HlMessage;

      var democomponentExport = {
        setup: function setup() {
          var status1 = reactive({
            value1: false,
            loading1: false
          });

          var beforeChange1 = function beforeChange1() {
            status1.loading1 = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                status1.loading1 = false;
                HlMessage.success('切换成功');
                return resolve(true);
              }, 1000);
            });
          };

          var status2 = reactive({
            value2: false,
            loading2: false
          });

          var beforeChange2 = function beforeChange2() {
            status2.loading2 = true;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                status2.loading2 = false;
                HlMessage.error('切换失败');
                return reject(new Error('error'));
              }, 1000);
            });
          };

          return extends_default()({}, toRefs(status1), toRefs(status2), {
            beforeChange1: beforeChange1,
            beforeChange2: beforeChange2
          });
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/switch.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/switch.md



switchvue_type_script_lang_ts.render = switchvue_type_template_id_64892bd1_render

/* harmony default export */ var zh_CN_switch = __webpack_exports__["default"] = (switchvue_type_script_lang_ts);

/***/ })

}]);