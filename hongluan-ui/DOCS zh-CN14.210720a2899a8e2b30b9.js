(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dialog.md?vue&type=template&id=5117f73b

var dialogvue_type_template_id_5117f73b_hoisted_1 = {
  class: "doc-main-content"
};
var dialogvue_type_template_id_5117f73b_hoisted_2 = {
  class: "doc-content"
};

var dialogvue_type_template_id_5117f73b_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Dialog 对话框", -1);

var dialogvue_type_template_id_5117f73b_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Dialog 弹出一个对话框，适合需要定制性更大的场景。", -1);

var dialogvue_type_template_id_5117f73b_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("需要设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性，它接收 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，当为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 时显示 Dialog。Dialog 分为两个部分："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 需要具名为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的用法。")])], -1);

var dialogvue_type_template_id_5117f73b_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button class=\"m-r-md\" @click=\"btnClick('center')\">打开 Dialog</hl-button>\n<br /><br />\n<hl-button class=\"m-r-md\" @click=\"btnClick('left', 'drawer')\">打开 左侧抽屉</hl-button>\n<hl-button class=\"m-r-md\" @click=\"btnClick('right', 'drawer')\">打开 右侧抽屉</hl-button>\n<hl-button class=\"m-r-md\" @click=\"btnClick('bottom', 'drawer')\">打开 底部抽屉</hl-button>\n<hl-button class=\"m-r-md\" @click=\"btnClick('top', 'drawer')\">打开 顶部抽屉</hl-button>\n<br /><br />\n<hl-button class=\"m-r-md\" @click=\"btnClick('fullscreen', 'drawer')\">打开 全屏Dialog</hl-button>\n\n<hl-dialog\n  v-model=\"dialogVisible\"\n  :width=\"400\"\n  :showAs=\"showAs\"\n  :placement=\"placement\"\n>\n  <template #header>\n    <h4>自定义对话框title</h4>\n  </template>\n  <span style=\"display:block; height:100px;\">对话框body信息</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <hl-button @click=\"dialogVisible = false\">取 消</hl-button>\n      <hl-button type=\"primary\" @click=\"dialogVisible = false\">确 定</hl-button>\n    </span>\n  </template>\n</hl-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogVisible: false,\n        showAs: 'dialog',\n        placement: 'center',\n      }\n    },\n    methods: {\n      btnClick(placement, showAs = 'dialog', animation) {\n        this.placement = placement\n        this.showAs = showAs\n        this.dialogVisible = true\n      },\n    },\n  }\n</script>\n")], -1);

var dialogvue_type_template_id_5117f73b_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的相关逻辑。")])], -1);

var dialogvue_type_template_id_5117f73b_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-nei-rong"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义内容")], -1);

var dialogvue_type_template_id_5117f73b_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Dialog 组件的可以嵌入任意的内容", -1);

var dialogvue_type_template_id_5117f73b_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button class=\"m-r-md\" @click=\"dialogTableVisible = true\"\n  >打开嵌套表格的 Dialog</hl-button\n>\n\n<hl-dialog title=\"收货地址\" v-model=\"dialogTableVisible\" width=\"50%\">\n  <hl-table :data=\"gridData\" list>\n    <hl-table-column property=\"date\" label=\"日期\" width=\"150\"></hl-table-column>\n    <hl-table-column property=\"name\" label=\"姓名\" width=\"200\"></hl-table-column>\n    <hl-table-column property=\"address\" label=\"地址\"></hl-table-column>\n  </hl-table>\n</hl-dialog>\n\n<!-- Form -->\n<hl-button class=\"m-r-md\" @click=\"dialogFormVisible = true\"\n  >打开嵌套表单的 Dialog</hl-button\n>\n\n<hl-dialog title=\"收货地址\" v-model=\"dialogFormVisible\" width=\"500px\">\n  <hl-form :model=\"form\" :width=\"['col-md-6','col-md-18']\">\n    <hl-form-item label=\"活动名称\" :label-width=\"formLabelWidth\">\n      <hl-input v-model=\"form.name\" autocomplete=\"off\" block></hl-input>\n    </hl-form-item>\n    <hl-form-item label=\"活动区域\" :label-width=\"formLabelWidth\">\n      <hl-select v-model=\"form.region\" placeholder=\"请选择活动区域\" block>\n        <hl-option label=\"区域一\" value=\"shanghai\"></hl-option>\n        <hl-option label=\"区域二\" value=\"beijing\"></hl-option>\n      </hl-select>\n    </hl-form-item>\n  </hl-form>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <hl-button @click=\"dialogFormVisible = false\" class=\"m-r-md\">取 消</hl-button>\n      <hl-button type=\"primary\" @click=\"dialogFormVisible = false\"\n        >确 定</hl-button\n      >\n    </span>\n  </template>\n</hl-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '120px',\n      }\n    },\n  }\n</script>\n")], -1);

var dialogvue_type_template_id_5117f73b_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "qian-tao-de-dialog"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qian-tao-de-dialog"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 嵌套的 Dialog")], -1);

var dialogvue_type_template_id_5117f73b_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性。")], -1);

var dialogvue_type_template_id_5117f73b_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-button class=\"m-r-md\" @click=\"outerVisible = true\"\n    >点击打开外层 Dialog</hl-button\n  >\n\n  <hl-dialog title=\"外层 Dialog\" v-model=\"outerVisible\">\n      \n    <hl-dialog\n      width=\"30%\"\n      title=\"内层 Dialog\"\n      v-model=\"innerVisible\"\n      append-to-body\n    >\n    </hl-dialog>\n\n    <template #footer>\n      <div class=\"dialog-footer\">\n        <hl-button @click=\"outerVisible = false\">取 消</hl-button>\n        <hl-button type=\"primary\" @click=\"innerVisible = true\"\n          >打开内层 Dialog</hl-button\n        >\n      </div>\n    </template>\n  </hl-dialog>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        outerVisible: false,\n        innerVisible: false,\n      }\n    },\n  }\n</script>\n")], -1);

var dialogvue_type_template_id_5117f73b_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 获取相应组件，请在 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 事件回调中进行。")])], -1);

var dialogvue_type_template_id_5117f73b_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "guan-bi-shi-xiao-hui-dom-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#guan-bi-shi-xiao-hui-dom-nei-rong"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 关闭时销毁 DOM 内容")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可在 Dialog 没有显示时，销毁 Dialog 里的内容以达到减少 DOM 节点的作用", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("需要注意的是，当这个属性被启用时，Dialog 内并不会有任何的 DOM 节点存在，除了 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "overlay"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "header（如果有）"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "footer（如果有）")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button class=\"m-r-md\" @click=\"centerDialogVisible = true\"\n  >点击打开 Dialog</hl-button\n>\n\n<hl-dialog\n  title=\"提示\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  destroy-on-close\n>\n  <span>需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的</span>\n  <strong>额外的内容</strong>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <hl-button @click=\"centerDialogVisible = false\">取 消</hl-button>\n      <hl-button type=\"primary\" @click=\"centerDialogVisible = false\">确 定</hl-button>\n    </span>\n  </template>\n</hl-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>是否显示 Dialog</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>width</td><td>Dialog 的宽度。showAs=drawer，position=top / bottom，设置为 100%</td><td>string / number</td><td>—</td><td>auto</td></tr><tr><td>height</td><td>Dialog 的高度。showAs=drawer，position=left / right，设置为 100%</td><td>string / number</td><td>—</td><td>auto</td></tr><tr><td>top</td><td>Dialog CSS 中的 top 值</td><td>string</td><td>—</td><td>30vh</td></tr><tr><td>modal</td><td>是否需要遮罩层</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>是否在 Dialog 出现时将 body 滚动锁定</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>Dialog 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>Dialog 打开的延时时间，单位毫秒</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Dialog 关闭的延时时间，单位毫秒</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>是否可以通过点击 modal 关闭 Dialog</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>是否可以通过按下 ESC 关闭 Dialog</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>关闭前的回调，会暂停 Dialog 的关闭</td><td>function(done)，done 用于关闭 Dialog</td><td>—</td><td>—</td></tr><tr><td>destroy-on-close</td><td>关闭时销毁 Dialog 中的元素</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>modal-class</td><td>弹窗自定义类名</td><td>string</td><td>—</td><td>-</td></tr><tr><td>custom-class</td><td>Dialog 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>showAs</td><td>弹窗类型。设置为 drawer 时，请配合 placement 使用</td><td>string</td><td>dialog / drawer</td><td>dialog</td></tr><tr><td>animation-name</td><td>Dialog 动画类型，仅对dialog类型生效。参考内置过度动画文档</td><td>string</td><td>-</td><td>-</td></tr><tr><td>placement</td><td>弹窗位置</td><td>string</td><td>center / top / bottom / left / right / fullscreen</td><td>center</td></tr><tr><td>borderless</td><td>是否无边框</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h2 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\"></a> Slots</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Dialog 的内容</td></tr><tr><td>header</td><td>Dialog 头部区的内容</td></tr><tr><td>footer</td><td>Dialog 按钮操作区的内容</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>open</td><td>Dialog 打开的回调</td><td>—</td></tr><tr><td>opened</td><td>Dialog 打开动画结束时的回调</td><td>—</td></tr><tr><td>close</td><td>Dialog 关闭的回调</td><td>—</td></tr><tr><td>closed</td><td>Dialog 关闭动画结束时的回调</td><td>—</td></tr></tbody></table>", 6);

function dialogvue_type_template_id_5117f73b_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", dialogvue_type_template_id_5117f73b_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", dialogvue_type_template_id_5117f73b_hoisted_2, [dialogvue_type_template_id_5117f73b_hoisted_3, dialogvue_type_template_id_5117f73b_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dialogvue_type_template_id_5117f73b_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dialogvue_type_template_id_5117f73b_hoisted_5];
    }),
    _: 1
  }), dialogvue_type_template_id_5117f73b_hoisted_7, dialogvue_type_template_id_5117f73b_hoisted_8, dialogvue_type_template_id_5117f73b_hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dialogvue_type_template_id_5117f73b_hoisted_10];
    }),
    _: 1
  }), dialogvue_type_template_id_5117f73b_hoisted_11, dialogvue_type_template_id_5117f73b_hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dialogvue_type_template_id_5117f73b_hoisted_13];
    }),
    _: 1
  }), dialogvue_type_template_id_5117f73b_hoisted_14, dialogvue_type_template_id_5117f73b_hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/dialog.md?vue&type=template&id=5117f73b

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dialog.md?vue&type=script&lang=ts


/* harmony default export */ var dialogvue_type_script_lang_ts = ({
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("打开 Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("打开 左侧抽屉");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("打开 右侧抽屉");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("打开 底部抽屉");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("打开 顶部抽屉");

      var _hoisted_8 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("打开 全屏Dialog");

      var _hoisted_11 = /*#__PURE__*/_createVNode("h4", null, "自定义对话框title", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("span", {
        style: {
          "display": "block",
          "height": "100px"
        }
      }, "对话框body信息", -1);

      var _hoisted_13 = {
        class: "dialog-footer"
      };

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_dialog = _resolveComponent("hl-dialog");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.btnClick('center');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _hoisted_2, _hoisted_3, _createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.btnClick('left', 'drawer');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }), _createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.btnClick('right', 'drawer');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }), _createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[4] || (_cache[4] = function ($event) {
            return _ctx.btnClick('bottom', 'drawer');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }), _createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[5] || (_cache[5] = function ($event) {
            return _ctx.btnClick('top', 'drawer');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_7];
          }),
          _: 1
        }), _hoisted_8, _hoisted_9, _createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[6] || (_cache[6] = function ($event) {
            return _ctx.btnClick('fullscreen', 'drawer');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_10];
          }),
          _: 1
        }), _createVNode(_component_hl_dialog, {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
            return _ctx.dialogVisible = $event;
          }),
          width: 400,
          showAs: _ctx.showAs,
          placement: _ctx.placement
        }, {
          header: _withCtx(function () {
            return [_hoisted_11];
          }),
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_13, [_createVNode(_component_hl_button, {
              onClick: _cache[7] || (_cache[7] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              onClick: _cache[8] || (_cache[8] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_12];
          }),
          _: 1
        }, 8, ["modelValue", "showAs", "placement"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogVisible: false,
            showAs: 'dialog',
            placement: 'center'
          };
        },
        methods: {
          btnClick: function btnClick(placement, showAs, animation) {
            if (showAs === void 0) {
              showAs = 'dialog';
            }

            this.placement = placement;
            this.showAs = showAs;
            this.dialogVisible = true;
          }
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("打开嵌套表格的 Dialog");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("打开嵌套表单的 Dialog");

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_table_column = _resolveComponent("hl-table-column");

        var _component_hl_table = _resolveComponent("hl-table");

        var _component_hl_dialog = _resolveComponent("hl-dialog");

        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_form_item = _resolveComponent("hl-form-item");

        var _component_hl_option = _resolveComponent("hl-option");

        var _component_hl_select = _resolveComponent("hl-select");

        var _component_hl_form = _resolveComponent("hl-form");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogTableVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_dialog, {
          title: "收货地址",
          modelValue: _ctx.dialogTableVisible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.dialogTableVisible = $event;
          }),
          width: "50%"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_table, {
              data: _ctx.gridData,
              list: ""
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_table_column, {
                  property: "date",
                  label: "日期",
                  width: "150"
                }), _createVNode(_component_hl_table_column, {
                  property: "name",
                  label: "姓名",
                  width: "200"
                }), _createVNode(_component_hl_table_column, {
                  property: "address",
                  label: "地址"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.dialogFormVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_hl_dialog, {
          title: "收货地址",
          modelValue: _ctx.dialogFormVisible,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
            return _ctx.dialogFormVisible = $event;
          }),
          width: "500px"
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_hl_button, {
              onClick: _cache[6] || (_cache[6] = function ($event) {
                return _ctx.dialogFormVisible = false;
              }),
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              onClick: _cache[7] || (_cache[7] = function ($event) {
                return _ctx.dialogFormVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_form, {
              model: _ctx.form,
              width: ['col-md-6', 'col-md-18']
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_form_item, {
                  label: "活动名称",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_input, {
                      modelValue: _ctx.form.name,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.form.name = $event;
                      }),
                      autocomplete: "off",
                      block: ""
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"]), _createVNode(_component_hl_form_item, {
                  label: "活动区域",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_select, {
                      modelValue: _ctx.form.region,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.form.region = $event;
                      }),
                      placeholder: "请选择活动区域",
                      block: ""
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_option, {
                          label: "区域一",
                          value: "shanghai"
                        }), _createVNode(_component_hl_option, {
                          label: "区域二",
                          value: "beijing"
                        })];
                      }),
                      _: 1
                    }, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"])];
              }),
              _: 1
            }, 8, ["model"])];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '120px'
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开外层 Dialog");

      var _hoisted_2 = {
        class: "dialog-footer"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("打开内层 Dialog");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_dialog = _resolveComponent("hl-dialog");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.outerVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_dialog, {
          title: "外层 Dialog",
          modelValue: _ctx.outerVisible,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.outerVisible = $event;
          })
        }, {
          footer: _withCtx(function () {
            return [_createVNode("div", _hoisted_2, [_createVNode(_component_hl_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.outerVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              onClick: _cache[4] || (_cache[4] = function ($event) {
                return _ctx.innerVisible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_dialog, {
              width: "30%",
              title: "内层 Dialog",
              modelValue: _ctx.innerVisible,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                return _ctx.innerVisible = $event;
              }),
              "append-to-body": ""
            }, null, 8, ["modelValue"])];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            outerVisible: false,
            innerVisible: false
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("strong", null, "额外的内容", -1);

      var _hoisted_4 = {
        class: "dialog-footer"
      };

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("取 消");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("确 定");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_dialog = _resolveComponent("hl-dialog");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          class: "m-r-md",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.centerDialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_dialog, {
          title: "提示",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.centerDialogVisible = $event;
          }),
          width: "30%",
          "destroy-on-close": ""
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_4, [_createVNode(_component_hl_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2, _hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            centerDialogVisible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/dialog.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/dialog.md



dialogvue_type_script_lang_ts.render = dialogvue_type_template_id_5117f73b_render

/* harmony default export */ var dialog = __webpack_exports__["default"] = (dialogvue_type_script_lang_ts);

/***/ })

}]);