(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tabs.md?vue&type=template&id=7d1182fa

var tabsvue_type_template_id_7d1182fa_hoisted_1 = {
  class: "doc-main-content"
};
var tabsvue_type_template_id_7d1182fa_hoisted_2 = {
  class: "doc-content"
};

var tabsvue_type_template_id_7d1182fa_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Tabs 标签页", -1);

var tabsvue_type_template_id_7d1182fa_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Tabs 用于分隔内容上有关联但属于不同类别的数据集合。", -1);

var tabsvue_type_template_id_7d1182fa_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来指定当前选中的标签页。")])], -1);

var tabsvue_type_template_id_7d1182fa_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <hl-tab-pane label=\"谷歌浏览器\" name=\"first\">谷歌浏览器</hl-tab-pane>\n    <hl-tab-pane label=\"火狐浏览器\" name=\"second\">火狐浏览器</hl-tab-pane>\n    <hl-tab-pane label=\"欧朋浏览器\" name=\"third\">欧朋浏览器</hl-tab-pane>\n  </hl-tabs>\n</template>\n<script>\n  import { ref } from 'vue'\n  export default {\n    setup() {\n      const activeName = ref('second')\n      const handleClick = (tab, event) => {\n        console.log(tab, event)\n      }\n      return { activeName, handleClick }\n    },\n  }\n</script>\n")], -1);

var tabsvue_type_template_id_7d1182fa_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "line-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#line-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Line 样式")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("只需要设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "line"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 就可以使选项卡改变为线条风格。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-tabs v-model=\"activeName\" type=\"line\" @tab-click=\"handleClick\">\n    <hl-tab-pane label=\"谷歌浏览器\" name=\"first\">谷歌浏览器</hl-tab-pane>\n    <hl-tab-pane label=\"火狐浏览器\" name=\"second\">火狐浏览器</hl-tab-pane>\n    <hl-tab-pane label=\"欧朋浏览器\" name=\"third\">欧朋浏览器</hl-tab-pane>\n  </hl-tabs>\n</template>\n<script>\n  import { ref } from 'vue'\n  export default {\n    setup() {\n      const activeName = ref('first')\n      const handleClick = (tab, event) => {\n        console.log(tab, event)\n      }\n      return { activeName, handleClick }\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "wei-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wei-zhi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 位置")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "tab-position"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 设置标签的位置")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("标签一共有四个方向的设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "tabPosition=\"left|right|top|bottom\"")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-radio-group v-model=\"tabPosition\" style=\"margin-bottom: 30px;\">\n    <hl-radio label=\"top\">top</hl-radio>\n    <hl-radio label=\"right\">right</hl-radio>\n    <hl-radio label=\"bottom\">bottom</hl-radio>\n    <hl-radio label=\"left\">left</hl-radio>\n  </hl-radio-group>\n\n  <hl-tabs :tab-position=\"tabPosition\" type=\"line\" style=\"height: 200px;\">\n    <hl-tab-pane label=\"谷歌浏览器\">谷歌浏览器</hl-tab-pane>\n    <hl-tab-pane label=\"火狐浏览器\">火狐浏览器</hl-tab-pane>\n    <hl-tab-pane label=\"欧朋浏览器\">欧朋浏览器</hl-tab-pane>\n  </hl-tabs>\n</template>\n<script>\n  import { ref } from 'vue'\n  export default {\n    setup() {\n      const tabPosition = ref('top')\n      return { tabPosition }\n    },\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-biao-qian-ye"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-biao-qian-ye"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义标签页")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以通过具名 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来实现自定义标签页的内容")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-tabs>\n  <hl-tab-pane>\n    <template v-slot:label>\n      <hl-icon class=\"sm m-r-xs\" name=\"application\"></hl-icon>\n      我的行程\n    </template>\n    我的行程\n  </hl-tab-pane>\n  <hl-tab-pane label=\"消息中心\">消息中心</hl-tab-pane>\n  <hl-tab-pane label=\"欧朋浏览器\">欧朋浏览器</hl-tab-pane>\n</hl-tabs>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dong-tai-zeng-jian-biao-qian-ye"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-tai-zeng-jian-biao-qian-ye"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 动态增减标签页")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "增减标签页按钮只能在选项卡样式的标签页下使用", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-tabs v-model=\"editableTabsValue\" editable @edit=\"handleTabsEdit\">\n  <hl-tab-pane\n    :key=\"item.name\"\n    v-for=\"(item, index) in editableTabs\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </hl-tab-pane>\n</hl-tabs>\n<script>\n  import { reactive, toRefs } from 'vue'\n  export default {\n    setup() {\n      const state = reactive({\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      })\n      const handleTabsEdit = (targetName, action) => {\n        if (action === 'add') {\n          let newTabName = ++state.tabIndex + ''\n          state.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content',\n          })\n          state.editableTabsValue = newTabName\n        }\n        if (action === 'remove') {\n          let tabs = state.editableTabs\n          let activeName = state.editableTabsValue\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1]\n                if (nextTab) {\n                  activeName = nextTab.name\n                }\n              }\n            })\n          }\n\n          state.editableTabsValue = activeName\n          state.editableTabs = tabs.filter(tab => tab.name !== targetName)\n        }\n      }\n\n      return { ...toRefs(state), handleTabsEdit }\n    },\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义增加标签页触发器")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <hl-button size=\"sm\" @click=\"addTab(editableTabsValue)\">\n    add tab\n  </hl-button>\n</div>\n<hl-tabs\n  v-model=\"editableTabsValue\"\n  type=\"line\"\n  closable\n  @tab-remove=\"removeTab\"\n>\n  <hl-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </hl-tab-pane>\n</hl-tabs>\n<script>\n  import { reactive, toRefs } from 'vue'\n  export default {\n    setup() {\n      const state = reactive({\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      })\n\n      const addTab = targetName => {\n        let newTabName = ++state.tabIndex + ''\n        state.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content',\n        })\n        state.editableTabsValue = newTabName\n      }\n\n      const removeTab = targetName => {\n        let tabs = state.editableTabs\n        let activeName = state.editableTabsValue\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1]\n              if (nextTab) {\n                activeName = nextTab.name\n              }\n            }\n          })\n        }\n\n        state.editableTabsValue = activeName\n        state.editableTabs = tabs.filter(tab => tab.name !== targetName)\n      }\n      return { ...toRefs(state), addTab, removeTab }\n    },\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"tabs-attributes\"><a class=\"header-anchor\" href=\"#tabs-attributes\"></a> Tabs Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值，选中选项卡的 name</td><td>string</td><td>—</td><td>第一个选项卡的 name</td></tr><tr><td>type</td><td>风格类型</td><td>string</td><td>line</td><td>显示为线条样式</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>标签是否可增加</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>标签是否同时可增加和关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>选项卡所在位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>标签的宽度是否自撑开</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table><h2 id=\"tabs-events\"><a class=\"header-anchor\" href=\"#tabs-events\"></a> Tabs Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-click</td><td>tab 被选中时触发</td><td>被选中的标签 tab 实例</td></tr><tr><td>tab-remove</td><td>点击 tab 移除按钮后触发</td><td>被删除的标签的 name</td></tr><tr><td>tab-add</td><td>点击 tabs 的新增按钮后触发</td><td>—</td></tr><tr><td>edit</td><td>点击 tabs 的新增按钮或 tab 被关闭后触发</td><td>(targetName, action)</td></tr></tbody></table><h2 id=\"tab-pane-attributes\"><a class=\"header-anchor\" href=\"#tab-pane-attributes\"></a> Tab-pane Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>选项卡标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>与选项卡绑定值 value 对应的标识符，表示选项卡别名</td><td>string</td><td>—</td><td>该选项卡在选项卡列表中的顺序值，如第一个选项卡则为&#39;1&#39;</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>标签是否延迟渲染</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 6);

function tabsvue_type_template_id_7d1182fa_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", tabsvue_type_template_id_7d1182fa_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", tabsvue_type_template_id_7d1182fa_hoisted_2, [tabsvue_type_template_id_7d1182fa_hoisted_3, tabsvue_type_template_id_7d1182fa_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [tabsvue_type_template_id_7d1182fa_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [tabsvue_type_template_id_7d1182fa_hoisted_5];
    }),
    _: 1
  }), tabsvue_type_template_id_7d1182fa_hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_20, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tabs.md?vue&type=template&id=7d1182fa

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tabs.md?vue&type=script&lang=ts


/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("谷歌浏览器");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("火狐浏览器");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("欧朋浏览器");

      function render(_ctx, _cache) {
        var _component_hl_tab_pane = _resolveComponent("hl-tab-pane");

        var _component_hl_tabs = _resolveComponent("hl-tabs");

        return _openBlock(), _createBlock(_component_hl_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_tab_pane, {
              label: "谷歌浏览器",
              name: "first"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "火狐浏览器",
              name: "second"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "欧朋浏览器",
              name: "third"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onTabClick"]);
      }

      var ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = {
        setup: function setup() {
          var activeName = ref('second');

          var handleClick = function handleClick(tab, event) {
            console.log(tab, event);
          };

          return {
            activeName: activeName,
            handleClick: handleClick
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
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("谷歌浏览器");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("火狐浏览器");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("欧朋浏览器");

      function render(_ctx, _cache) {
        var _component_hl_tab_pane = _resolveComponent("hl-tab-pane");

        var _component_hl_tabs = _resolveComponent("hl-tabs");

        return _openBlock(), _createBlock(_component_hl_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          type: "line",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_tab_pane, {
              label: "谷歌浏览器",
              name: "first"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "火狐浏览器",
              name: "second"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "欧朋浏览器",
              name: "third"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onTabClick"]);
      }

      var ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = {
        setup: function setup() {
          var activeName = ref('first');

          var handleClick = function handleClick(tab, event) {
            console.log(tab, event);
          };

          return {
            activeName: activeName,
            handleClick: handleClick
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("top");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("right");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("bottom");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("left");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("谷歌浏览器");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("火狐浏览器");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("欧朋浏览器");

      function render(_ctx, _cache) {
        var _component_hl_radio = _resolveComponent("hl-radio");

        var _component_hl_radio_group = _resolveComponent("hl-radio-group");

        var _component_hl_tab_pane = _resolveComponent("hl-tab-pane");

        var _component_hl_tabs = _resolveComponent("hl-tabs");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_radio_group, {
          modelValue: _ctx.tabPosition,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.tabPosition = $event;
          }),
          style: {
            "margin-bottom": "30px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_radio, {
              label: "top"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: "right"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: "bottom"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_radio, {
              label: "left"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_tabs, {
          "tab-position": _ctx.tabPosition,
          type: "line",
          style: {
            "height": "200px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_tab_pane, {
              label: "谷歌浏览器"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "火狐浏览器"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "欧朋浏览器"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["tab-position"])], 64);
      }

      var ref = vue_esm_browser_prod["L" /* ref */];
      var democomponentExport = {
        setup: function setup() {
          var tabPosition = ref('top');
          return {
            tabPosition: tabPosition
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
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 我的行程 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 我的行程 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("消息中心");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("欧朋浏览器");

      function render(_ctx, _cache) {
        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_tab_pane = _resolveComponent("hl-tab-pane");

        var _component_hl_tabs = _resolveComponent("hl-tabs");

        return _openBlock(), _createBlock(_component_hl_tabs, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_tab_pane, null, {
              label: _withCtx(function () {
                return [_createVNode(_component_hl_icon, {
                  class: "sm m-r-xs",
                  name: "application"
                }), _hoisted_1];
              }),
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "消息中心"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_tab_pane, {
              label: "欧朋浏览器"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
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
    "hl-demo4": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_hl_tab_pane = _resolveComponent("hl-tab-pane");

        var _component_hl_tabs = _resolveComponent("hl-tabs");

        return _openBlock(), _createBlock(_component_hl_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_hl_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onEdit"]);
      }

      var reactive = vue_esm_browser_prod["K" /* reactive */],
          toRefs = vue_esm_browser_prod["W" /* toRefs */];
      var democomponentExport = {
        setup: function setup() {
          var state = reactive({
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          });

          var handleTabsEdit = function handleTabsEdit(targetName, action) {
            if (action === 'add') {
              var newTabName = ++state.tabIndex + '';
              state.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
              });
              state.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              var tabs = state.editableTabs;
              var activeName = state.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach(function (tab, index) {
                  if (tab.name === targetName) {
                    var nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              state.editableTabsValue = activeName;
              state.editableTabs = tabs.filter(function (tab) {
                return tab.name !== targetName;
              });
            }
          };

          return extends_default()({}, toRefs(state), {
            handleTabsEdit: handleTabsEdit
          });
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
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" add tab ");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_tab_pane = _resolveComponent("hl-tab-pane");

        var _component_hl_tabs = _resolveComponent("hl-tabs");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode("div", _hoisted_1, [_createVNode(_component_hl_button, {
          size: "sm",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.addTab(_ctx.editableTabsValue);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })]), _createVNode(_component_hl_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "line",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_hl_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])], 64);
      }

      var reactive = vue_esm_browser_prod["K" /* reactive */],
          toRefs = vue_esm_browser_prod["W" /* toRefs */];
      var democomponentExport = {
        setup: function setup() {
          var state = reactive({
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          });

          var addTab = function addTab(targetName) {
            var newTabName = ++state.tabIndex + '';
            state.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            state.editableTabsValue = newTabName;
          };

          var removeTab = function removeTab(targetName) {
            var tabs = state.editableTabs;
            var activeName = state.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach(function (tab, index) {
                if (tab.name === targetName) {
                  var nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            state.editableTabsValue = activeName;
            state.editableTabs = tabs.filter(function (tab) {
              return tab.name !== targetName;
            });
          };

          return extends_default()({}, toRefs(state), {
            addTab: addTab,
            removeTab: removeTab
          });
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_7d1182fa_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);