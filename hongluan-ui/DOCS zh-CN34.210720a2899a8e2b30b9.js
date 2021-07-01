(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/popover.md?vue&type=template&id=53549208

var popovervue_type_template_id_53549208_hoisted_1 = {
  class: "doc-main-content"
};
var popovervue_type_template_id_53549208_hoisted_2 = {
  class: "doc-content"
};

var popovervue_type_template_id_53549208_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Popover 气泡弹框", -1);

var popovervue_type_template_id_53549208_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "点击/鼠标移入元素，弹出气泡式的卡片浮层。", -1);

var popovervue_type_template_id_53549208_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性用于设置何时触发 Popover，支持四种触发方式："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "focus"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "manual"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。对于触发 Popover 的元素，有两种写法：使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "#reference"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的具名插槽，或使用自定义指令"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "v-popover"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("指向 Popover 的索引"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var popovervue_type_template_id_53549208_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <hl-popover placement=\"top-start\" title=\"标题\" :width=\"200\" trigger=\"hover\" content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\">\n    <template #reference>\n      <hl-button class=\"m-r-md\">hover 激活</hl-button>\n    </template>\n  </hl-popover>\n\n  <hl-popover placement=\"bottom\" title=\"标题\" :width=\"200\" trigger=\"click\" content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\">\n    <template #reference>\n      <hl-button class=\"m-r-md\">click 激活</hl-button>\n    </template>\n  </hl-popover>\n\n  <hl-popover ref=\"popover\" placement=\"right\" title=\"标题\" :width=\"200\" trigger=\"focus\" content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\">\n    <template #reference>\n      <hl-button class=\"m-r-md\">focus 激活</hl-button>\n    </template>\n  </hl-popover>\n\n  <hl-popover placement=\"bottom\" title=\"标题\" :width=\"200\" trigger=\"manual\" content=\"这是一段内容,这是一段内容,这是一段内容,这是一段内容。\" v-model:visible=\"visible\">\n    <template #reference>\n      <hl-button class=\"m-r-md\" @click=\"visible = !visible\">手动激活</hl-button>\n    </template>\n  </hl-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      }\n    },\n  }\n</script>\n")], -1);

var popovervue_type_template_id_53549208_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fang-wei"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fang-wei"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 方位")], -1);

var popovervue_type_template_id_53549208_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来选择你想要的效果。", -1);

var popovervue_type_template_id_53549208_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来决定"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("时的提示信息。由"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性决定展示效果："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性值为："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "方向-对齐位置"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("；四个方向："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("；三种对齐位置："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，默认为空。如"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "placement=\"left-end\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。")])], -1);

var popovervue_type_template_id_53549208_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xl\" justify=\"center middle\">\n  <hl-col span=\"col-10\">\n    <hl-row justify=\"right\">\n        <hl-col style=\"display: flex; justify-content: flex-end;\">\n            <hl-group merge indent>\n            <hl-popover class=\"item\" trigger=\"hover\" content=\"Top Left 提示文字\" placement=\"top-start\">\n                <template #reference>\n                <hl-button class=\"group-item\">上左</hl-button>\n                </template>\n            </hl-popover>\n\n            <hl-popover class=\"item\" trigger=\"hover\" content=\"Top Center 提示文字\" placement=\"top\">\n                <template #reference>\n                <hl-button class=\"group-item\">上中</hl-button>\n                </template>\n            </hl-popover>\n            <hl-popover class=\"item\" trigger=\"hover\" content=\"Top Right 提示文字\" placement=\"top-end\">\n                <template #reference>\n                <hl-button class=\"group-item\">上右</hl-button>\n                </template>\n            </hl-popover>\n            </hl-group>\n        </hl-col>\n    </hl-row>\n  </hl-col>\n\n  <hl-col span=\"col-10\">\n    <hl-row justify=\"left\">\n        <hl-col>\n        <hl-group dir=\"vertical\" merge indent>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Right Top 提示文字\" placement=\"right-start\">\n            <template #reference>\n              <hl-button class=\"group-item\">右上</hl-button>\n            </template>\n          </hl-popover>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Right Center 提示文字\" placement=\"right\">\n            <template #reference>\n              <hl-button class=\"group-item\">右中</hl-button>\n            </template>\n          </hl-popover>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Right Bottom 提示文字\" placement=\"right-end\">\n            <template #reference>\n              <hl-button class=\"group-item\">右下</hl-button>\n            </template>\n          </hl-popover>\n        </hl-group>\n        </hl-col>\n    </hl-row>\n  </hl-col>\n\n  <hl-col span=\"col-10\">\n    <hl-row justify=\"right\">\n        <hl-col style=\"display: flex; justify-content: flex-end;\">\n        <hl-group dir=\"vertical\" merge indent>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Left Top 提示文字\" placement=\"left-start\">\n            <template #reference>\n              <hl-button class=\"group-item\">左上</hl-button>\n            </template>\n          </hl-popover>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Left Center 提示文字\" placement=\"left\">\n            <template #reference>\n              <hl-button class=\"group-item\">左中</hl-button>\n            </template>\n          </hl-popover>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Left Bottom 提示文字\" placement=\"left-end\">\n            <template #reference>\n              <hl-button class=\"group-item\">左下</hl-button>\n            </template>\n          </hl-popover>\n        </hl-group>\n        </hl-col>\n    </hl-row>\n  </hl-col>\n\n  <hl-col span=\"col-10\">\n    <hl-row justify=\"left\">\n        <hl-col>\n        <hl-group merge indent>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Bottom Left 提示文字\" placement=\"bottom-start\">\n            <template #reference>\n              <hl-button class=\"group-item\">下左</hl-button>\n            </template>\n          </hl-popover>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Bottom Center 提示文字\" placement=\"bottom\">\n            <template #reference>\n              <hl-button class=\"group-item\">下中</hl-button>\n            </template>\n          </hl-popover>\n          <hl-popover class=\"item\" trigger=\"hover\" content=\"Bottom Right 提示文字\" placement=\"bottom-end\">\n            <template #reference>\n              <hl-button class=\"group-item\">下右</hl-button>\n            </template>\n          </hl-popover>\n        </hl-group>\n        </hl-col>\n    </hl-row>\n  </hl-col>\n</hl-row>\n\n")], -1);

var popovervue_type_template_id_53549208_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "shen-se-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shen-se-yang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 深色样式")], -1);

var popovervue_type_template_id_53549208_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来改变为深色样式，通常用于表现Tooltip的效果。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-popover effect=\"dark\" content=\"Top Center\" placement=\"top\">\n  <template #reference>\n    <hl-button class=\"m-r-md\">Dark</hl-button>\n  </template>\n</hl-popover>\n<hl-popover content=\"Bottom Center\" placement=\"bottom\">\n  <template #reference>\n    <hl-button class=\"m-r-md\">Default</hl-button>\n  </template>\n</hl-popover>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tooltip-wen-zi-ti-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tooltip-wen-zi-ti-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Tooltip 文字提示")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Popover 兼具 Tooltip 的功能，使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性即可创建一个 Tooltip。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-popover trigger=\"hover\" content=\"Top Center\" placement=\"top\" tooltip>\n  <template #reference>\n    <hl-button class=\"m-r-md\">Light</hl-button>\n  </template>\n</hl-popover>\n\n<hl-popover trigger=\"hover\" effect=\"dark\" content=\"Top center\" placement=\"top\" tooltip>\n  <template #reference>\n    <hl-button class=\"m-r-md\">Dark</hl-button>\n  </template>\n</hl-popover>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "qian-tao-xin-xi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qian-tao-xin-xi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 嵌套信息")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("利用分发取代"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-popover placement=\"right\" :width=\"400\" trigger=\"click\">\n  <template #reference>\n    <hl-button>click 激活</hl-button>\n  </template>\n  <hl-table :data=\"gridData\">\n    <hl-table-column width=\"120\" property=\"date\" label=\"日期\"></hl-table-column>\n    <hl-table-column width=\"100\" property=\"name\" label=\"姓名\"></hl-table-column>\n    <hl-table-column property=\"address\" label=\"地址\"></hl-table-column>\n  </hl-table>\n</hl-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "qian-tao-cao-zuo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qian-tao-cao-zuo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 嵌套操作")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "当然，你还可以嵌套操作，这相比 Dialog 更为轻量：", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-popover placement=\"top\" :width=\"160\" v-model:visible=\"visible\">\n  <p>这是一段内容这是一段内容确定删除吗？</p>\n  <div style=\"text-align: right; margin: 0\">\n    <hl-button size=\"sm\" type=\"link\" @click=\"visible = false\">取消</hl-button>\n    <hl-button type=\"primary\" size=\"sm\" @click=\"visible = false\">确定</hl-button>\n  </div>\n  <template #reference>\n    <hl-button @click=\"visible = true\">删除</hl-button>\n  </template>\n</hl-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式。tooltip 时，此属性失效，值被设置为 hover</td><td>String</td><td>click/focus/hover/manual</td><td>click</td></tr><tr><td>effect</td><td>默认提供的主题</td><td>String</td><td>dark/light</td><td>light</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>tooltip</td><td>是否为 tooltip</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>content</td><td>显示的内容，也可以通过 <code>slot</code> 传入 DOM</td><td>String</td><td>—</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>String, Number</td><td>—</td><td>最小宽度 150px</td></tr><tr><td>placement</td><td>出现位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover 是否可用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>状态是否可见</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>定义渐变动画</td><td>String</td><td>—</td><td>fade-in-linear</td></tr><tr><td>show-arrow</td><td>是否显示 Tooltip 箭头，更多参数可见<a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a></td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href=\"https://popper.js.org/docs/v2/\">popper.js</a> 的参数</td><td>Object</td><td>参考 <a href=\"https://popper.js.org/docs/v2/\">popper.js</a> 文档</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>为 popper 添加类名</td><td>String</td><td>—</td><td>—</td></tr><tr><td>show-after</td><td>延迟出现，单位毫秒</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>hide-after</td><td>延迟关闭，单位毫秒</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>auto-close</td><td>Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td>Popover 组件的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a></td><td>number</td><td>—</td><td>-</td></tr></tbody></table><h2 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\"></a> Slot</h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Popover 内嵌 HTML 文本</td></tr><tr><td>reference</td><td>触发 Popover 显示的 HTML 元素</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>show</td><td>显示时触发</td><td>—</td></tr><tr><td>after-enter</td><td>显示动画播放完毕后触发</td><td>—</td></tr><tr><td>hide</td><td>隐藏时触发</td><td>—</td></tr><tr><td>after-leave</td><td>隐藏动画播放完毕后触发</td><td>—</td></tr></tbody></table>", 6);

function popovervue_type_template_id_53549208_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", popovervue_type_template_id_53549208_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", popovervue_type_template_id_53549208_hoisted_2, [popovervue_type_template_id_53549208_hoisted_3, popovervue_type_template_id_53549208_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [popovervue_type_template_id_53549208_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [popovervue_type_template_id_53549208_hoisted_5];
    }),
    _: 1
  }), popovervue_type_template_id_53549208_hoisted_7, popovervue_type_template_id_53549208_hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [popovervue_type_template_id_53549208_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [popovervue_type_template_id_53549208_hoisted_9];
    }),
    _: 1
  }), popovervue_type_template_id_53549208_hoisted_11, popovervue_type_template_id_53549208_hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md?vue&type=template&id=53549208

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/popover.md?vue&type=script&lang=ts


/* harmony default export */ var popovervue_type_script_lang_ts = ({
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("hover 激活");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("click 激活");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("focus 激活");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("手动激活");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_popover = _resolveComponent("hl-popover");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_popover, {
          placement: "top-start",
          title: "标题",
          width: 200,
          trigger: "hover",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_popover, {
          placement: "bottom",
          title: "标题",
          width: 200,
          trigger: "click",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_popover, {
          ref: "popover",
          placement: "right",
          title: "标题",
          width: 200,
          trigger: "focus",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512), _createVNode(_component_hl_popover, {
          placement: "bottom",
          title: "标题",
          width: 200,
          trigger: "manual",
          content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。",
          visible: _ctx.visible,
          "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = !_ctx.visible;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["visible"])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("上左");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("上中");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("上右");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("右上");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("右中");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("右下");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("左上");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("左中");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("左下");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("下左");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("下中");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("下右");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_popover = _resolveComponent("hl-popover");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "xl",
          justify: "center middle"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-10"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, {
                  justify: "right"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, {
                      style: {
                        "display": "flex",
                        "justify-content": "flex-end"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_group, {
                          merge: "",
                          indent: ""
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Top Left 提示文字",
                              placement: "top-start"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_1];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Top Center 提示文字",
                              placement: "top"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_2];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Top Right 提示文字",
                              placement: "top-end"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_3];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-10"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, {
                  justify: "left"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_group, {
                          dir: "vertical",
                          merge: "",
                          indent: ""
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Right Top 提示文字",
                              placement: "right-start"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_4];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Right Center 提示文字",
                              placement: "right"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_5];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Right Bottom 提示文字",
                              placement: "right-end"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_6];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-10"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, {
                  justify: "right"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, {
                      style: {
                        "display": "flex",
                        "justify-content": "flex-end"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_group, {
                          dir: "vertical",
                          merge: "",
                          indent: ""
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Left Top 提示文字",
                              placement: "left-start"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_7];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Left Center 提示文字",
                              placement: "left"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_8];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Left Bottom 提示文字",
                              placement: "left-end"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_9];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-10"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_row, {
                  justify: "left"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_col, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_group, {
                          merge: "",
                          indent: ""
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Bottom Left 提示文字",
                              placement: "bottom-start"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_10];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Bottom Center 提示文字",
                              placement: "bottom"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_11];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            }), _createVNode(_component_hl_popover, {
                              class: "item",
                              trigger: "hover",
                              content: "Bottom Right 提示文字",
                              placement: "bottom-end"
                            }, {
                              reference: _withCtx(function () {
                                return [_createVNode(_component_hl_button, {
                                  class: "group-item"
                                }, {
                                  default: _withCtx(function () {
                                    return [_hoisted_12];
                                  }),
                                  _: 1
                                })];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
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
    "hl-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Dark");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Default");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_popover = _resolveComponent("hl-popover");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_popover, {
          effect: "dark",
          content: "Top Center",
          placement: "top"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_popover, {
          content: "Bottom Center",
          placement: "bottom"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Light");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Dark");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_popover = _resolveComponent("hl-popover");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_popover, {
          trigger: "hover",
          content: "Top Center",
          placement: "top",
          tooltip: ""
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_popover, {
          trigger: "hover",
          effect: "dark",
          content: "Top center",
          placement: "top",
          tooltip: ""
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              class: "m-r-md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("click 激活");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_table_column = _resolveComponent("hl-table-column");

        var _component_hl_table = _resolveComponent("hl-table");

        var _component_hl_popover = _resolveComponent("hl-popover");

        return _openBlock(), _createBlock(_component_hl_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_table_column, {
                  width: "120",
                  property: "date",
                  label: "日期"
                }), _createVNode(_component_hl_table_column, {
                  width: "100",
                  property: "name",
                  label: "姓名"
                }), _createVNode(_component_hl_table_column, {
                  property: "address",
                  label: "地址"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo5": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "这是一段内容这是一段内容确定删除吗？", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "right",
          "margin": "0"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("取消");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("确定");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("删除");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_popover = _resolveComponent("hl-popover");

        return _openBlock(), _createBlock(_component_hl_popover, {
          placement: "top",
          width: 160,
          visible: _ctx.visible,
          "onUpdate:visible": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.visible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_hl_button, {
              size: "sm",
              type: "link",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              size: "sm",
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 8, ["visible"]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/popover.md



popovervue_type_script_lang_ts.render = popovervue_type_template_id_53549208_render

/* harmony default export */ var popover = __webpack_exports__["default"] = (popovervue_type_script_lang_ts);

/***/ })

}]);