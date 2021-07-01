(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dropdown.md?vue&type=template&id=26adf783

var dropdownvue_type_template_id_26adf783_hoisted_1 = {
  class: "doc-main-content"
};
var dropdownvue_type_template_id_26adf783_hoisted_2 = {
  class: "doc-content"
};

var dropdownvue_type_template_id_26adf783_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Dropdown 下拉菜单", -1);

var dropdownvue_type_template_id_26adf783_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "将动作或菜单折叠到下拉菜单中。", -1);

var dropdownvue_type_template_id_26adf783_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过组件"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("来设置下拉触发的元素以及需要通过具名"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 来设置下拉菜单。默认情况下，下拉按钮只要"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("即可，无需点击也会显示下拉菜单。")])], -1);

var dropdownvue_type_template_id_26adf783_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-dropdown>\n  <span>下拉菜单</span>\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>数据流</hl-dropdown-item>\n      <hl-dropdown-item>传输属性值</hl-dropdown-item>\n      <hl-dropdown-item>已断线</hl-dropdown-item>\n      <hl-dropdown-item disabled>待恢复</hl-dropdown-item>\n      <hl-dropdown-item divider></hl-dropdown-item>\n      <hl-dropdown-item>其他</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chu-fa-dui-xiang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chu-fa-dui-xiang"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 触发对象")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "通常情况下，Dropdown 可使用任意组件来触发下拉菜单。", -1);

var dropdownvue_type_template_id_26adf783_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "split"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来让触发下拉元素呈现为按钮组或者链接，取值为 button 或者 link。同时它还会自动为触发元素加上一个小箭头。")])], -1);

var dropdownvue_type_template_id_26adf783_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group dir=\"horizontal\" merge indent class=\"m-r-md\">\n  <hl-input placeholder=\"请输入内容\"></hl-input>\n  <hl-dropdown>\n    <hl-button type=\"primary\" icon=\"more\"></hl-button>\n    <template #dropdown>\n      <hl-dropdown-menu>\n        <hl-dropdown-item>数据流</hl-dropdown-item>\n        <hl-dropdown-item>传输属性值</hl-dropdown-item>\n        <hl-dropdown-item>已断线</hl-dropdown-item>\n        <hl-dropdown-item disabled>待恢复</hl-dropdown-item>\n        <hl-dropdown-item divider></hl-dropdown-item>\n        <hl-dropdown-item>其他</hl-dropdown-item>\n      </hl-dropdown-menu>\n    </template>\n  </hl-dropdown>\n</hl-group>\n\n<hl-dropdown class=\"m-r-sm\">\n  <hl-button type=\"danger\" icon=\"ChevronBottom\" icon-position=\"right\" light\n    >下拉菜单</hl-button\n  >\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>数据流</hl-dropdown-item>\n      <hl-dropdown-item>传输属性值</hl-dropdown-item>\n      <hl-dropdown-item>已断线</hl-dropdown-item>\n      <hl-dropdown-item disabled>待恢复</hl-dropdown-item>\n      <hl-dropdown-item divider></hl-dropdown-item>\n      <hl-dropdown-item>其他</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n\n<hl-dropdown class=\"m-r-sm\">\n  <hl-button type=\"primary\" icon=\"more\" equal round no-fill></hl-button>\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>数据流</hl-dropdown-item>\n      <hl-dropdown-item>传输属性值</hl-dropdown-item>\n      <hl-dropdown-item>已断线</hl-dropdown-item>\n      <hl-dropdown-item disabled>待恢复</hl-dropdown-item>\n      <hl-dropdown-item divider></hl-dropdown-item>\n      <hl-dropdown-item>其他</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n\n<hl-dropdown class=\"m-r-sm\">\n  <hl-thumb round type=\"info\" size=\"sm\">\n    <span>测试</span>\n  </hl-thumb>\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>个人信息</hl-dropdown-item>\n      <hl-dropdown-item>实名认证</hl-dropdown-item>\n      <hl-dropdown-item>安全设置</hl-dropdown-item>\n      <hl-dropdown-item divider></hl-dropdown-item>\n      <hl-dropdown-item>退出登录</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n\n<hr />\n\n<p class=\"m-t-lg m-b-lg\">你也可以设置split属性来构建一个按钮或文本的下拉菜单</p>\n\n<hl-dropdown split=\"button\" type=\"primary\" @click=\"handleClick\" class=\"m-r-md\">\n  Dropdown\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>数据流</hl-dropdown-item>\n      <hl-dropdown-item>传输属性值</hl-dropdown-item>\n      <hl-dropdown-item>已断线</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n<hl-dropdown split=\"link\" type=\"success\" @click=\"handleClick\">\n  Dropdown\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>数据流</hl-dropdown-item>\n      <hl-dropdown-item>传输属性值</hl-dropdown-item>\n      <hl-dropdown-item>已断线</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        this.$message('你点击了一个下拉菜单')\n      },\n    },\n  }\n</script>\n")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chu-fa-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chu-fa-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 触发方式")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以配置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 、 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 或者 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "contextmenu")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"lg\">\n  <hl-col span=\"col-8\">\n    <p>hover 激活</p>\n    <hl-dropdown split=\"button\">\n      下拉菜单\n      <template #dropdown>\n        <hl-dropdown-menu>\n          <hl-dropdown-item>标记状态</hl-dropdown-item>\n          <hl-dropdown-item>生成报表</hl-dropdown-item>\n          <hl-dropdown-item>统计分析数据</hl-dropdown-item>\n          <hl-dropdown-item divider></hl-dropdown-item>\n          <hl-dropdown-item>移动到…</hl-dropdown-item>\n          <hl-dropdown-item>删除</hl-dropdown-item>\n        </hl-dropdown-menu>\n      </template>\n    </hl-dropdown>\n  </hl-col>\n  <hl-col span=\"col-8\">\n    <p>click 激活</p>\n    <hl-dropdown trigger=\"click\" split=\"button\">\n      下拉菜单\n      <template #dropdown>\n        <hl-dropdown-menu>\n          <hl-dropdown-item>标记状态</hl-dropdown-item>\n          <hl-dropdown-item>生成报表</hl-dropdown-item>\n          <hl-dropdown-item>统计分析数据</hl-dropdown-item>\n          <hl-dropdown-item divider></hl-dropdown-item>\n          <hl-dropdown-item>移动到…</hl-dropdown-item>\n          <hl-dropdown-item>删除</hl-dropdown-item>\n        </hl-dropdown-menu>\n      </template>\n    </hl-dropdown>\n  </hl-col>\n  <hl-col span=\"col-8\">\n    <p>右键(contextmenu) 激活</p>\n    <hl-dropdown split=\"button\" trigger=\"contextmenu\">\n      右键此处\n      <template #dropdown>\n        <hl-dropdown-menu>\n          <hl-dropdown-item>标记状态</hl-dropdown-item>\n          <hl-dropdown-item>生成报表</hl-dropdown-item>\n          <hl-dropdown-item>统计分析数据</hl-dropdown-item>\n          <hl-dropdown-item divider></hl-dropdown-item>\n          <hl-dropdown-item>移动到…</hl-dropdown-item>\n          <hl-dropdown-item>删除</hl-dropdown-item>\n        </hl-dropdown-menu>\n      </template>\n    </hl-dropdown>\n  </hl-col>\n</hl-row>\n")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "cai-dan-yin-cang-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cai-dan-yin-cang-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 菜单隐藏方式")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来配置。")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("下拉菜单默认在点击菜单项后会被隐藏，将"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可以关闭此功能。")])], -1);

var dropdownvue_type_template_id_26adf783_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-dropdown :hide-on-click=\"false\">\n  <hl-button>下拉菜单</hl-button>\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>黄金糕</hl-dropdown-item>\n      <hl-dropdown-item>狮子头</hl-dropdown-item>\n      <hl-dropdown-item>螺蛳粉</hl-dropdown-item>\n      <hl-dropdown-item disabled>双皮奶</hl-dropdown-item>\n      <hl-dropdown-item divided>蚵仔煎</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zhi-ling-shi-jian"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhi-ling-shi-jian"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 指令事件")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作", -1);

var dropdownvue_type_template_id_26adf783_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-dropdown @command=\"handleCommand\">\n  <hl-button>下拉菜单</hl-button>\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item command=\"a\">黄金糕</hl-dropdown-item>\n      <hl-dropdown-item command=\"b\">狮子头</hl-dropdown-item>\n      <hl-dropdown-item command=\"c\">螺蛳粉</hl-dropdown-item>\n      <hl-dropdown-item command=\"d\" disabled>双皮奶</hl-dropdown-item>\n      <hl-dropdown-item command=\"e\" divided>蚵仔煎</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('你点击了：' + command)\n      },\n    },\n  }\n</script>\n")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "chi-cun-xiu-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chi-cun-xiu-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 尺寸修饰")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过 split=\"button\" 创建的按钮式下拉菜单，也能够同"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-button>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件一样设置尺寸和颜色。")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("额外的尺寸："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "sm"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "md"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "lg"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来配置它们。")])], -1);

var dropdownvue_type_template_id_26adf783_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-dropdown size=\"sm\" split=\"button\" type=\"primary\" class=\"m-r-md\">\n  小型尺寸\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>dropdown-item</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n\n<hl-dropdown split=\"button\" type=\"danger\" class=\"m-r-md\">\n  默认尺寸\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>dropdown-item</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n\n<hl-dropdown size=\"lg\" split=\"button\" type=\"success\" class=\"m-r-md\">\n  大型尺寸\n  <template #dropdown>\n    <hl-dropdown-menu>\n      <hl-dropdown-item>dropdown-item</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "tu-biao-xiu-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-biao-xiu-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 图标修饰")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("你可以为每一个 Dropdown-item 设置 Icon图标,通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "icon-class"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性可以传递 class样式名称。")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("参考 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("strong", null, "Hl-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 组件的 api")])], -1);

var dropdownvue_type_template_id_26adf783_hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-dropdown split=\"button\" trigger=\"click\">\n  带icon属性的下拉菜单\n  <template #dropdown>\n    <hl-dropdown-menu>\n          <hl-dropdown-item icon=\"Star\" icon-class=\"info\">标记状态</hl-dropdown-item>\n          <hl-dropdown-item icon=\"Page\" icon-class=\"info\">生成报表</hl-dropdown-item>\n          <hl-dropdown-item icon=\"ChartPie\" icon-class=\"info\">统计分析数据</hl-dropdown-item>\n          <hl-dropdown-item divider></hl-dropdown-item>\n          <hl-dropdown-item icon=\"FolderIn\" icon-class=\"info\">移动到…</hl-dropdown-item>\n          <hl-dropdown-item icon=\"Delete\" icon-class=\"info\">删除</hl-dropdown-item>\n    </hl-dropdown-menu>\n  </template>\n</hl-dropdown>\n")], -1);

var dropdownvue_type_template_id_26adf783_hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"dropdown-attributes\"><a class=\"header-anchor\" href=\"#dropdown-attributes\"></a> Dropdown Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>菜单按钮或者链接类型，同 Button 组件或者 text-color 颜色(只在<code>split</code>为 button 或者 link 的情况下有效)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>菜单尺寸，在<code>split</code>为 button 的情况下也对触发按钮生效</td><td>string</td><td>sm / lg</td><td>—</td></tr><tr><td>max-height</td><td>菜单最大高度</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>split</td><td>下拉触发元素呈现为按钮组或者文本</td><td>string</td><td>—</td><td>button/link</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end</td><td>bottom</td></tr><tr><td>trigger</td><td>触发下拉的行为</td><td>string</td><td>hover, click, contextmenu</td><td>hover</td></tr><tr><td>hide-on-click</td><td>是否在点击菜单项后隐藏菜单</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-timeout</td><td>展开下拉菜单的延时（仅在 trigger 为 hover 时有效）</td><td>number</td><td>—</td><td>250</td></tr><tr><td>hide-timeout</td><td>收起下拉菜单的延时（仅在 trigger 为 hover 时有效）</td><td>number</td><td>—</td><td>150</td></tr><tr><td>tabindex</td><td>Dropdown 组件的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h2 id=\"dropdown-slots\"><a class=\"header-anchor\" href=\"#dropdown-slots\"></a> Dropdown Slots</h2><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件</td></tr><tr><td>dropdown</td><td>下拉列表，通常是 <code>&lt;hl-dropdown-menu&gt;</code> 组件</td></tr></tbody></table><h2 id=\"dropdown-events\"><a class=\"header-anchor\" href=\"#dropdown-events\"></a> Dropdown Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td><code>split</code> 为 button 或者 link 时，点击左侧的回调</td><td>—</td></tr><tr><td>command</td><td>点击菜单项触发的事件回调</td><td>dropdown-item 的指令</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr></tbody></table><h2 id=\"dropdown-menu-item-attributes\"><a class=\"header-anchor\" href=\"#dropdown-menu-item-attributes\"></a> Dropdown Menu Item Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>command</td><td>指令</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divider</td><td>是否是分割线</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function dropdownvue_type_template_id_26adf783_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_hl_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo4");

  var _component_hl_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo5");

  var _component_hl_demo6 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", dropdownvue_type_template_id_26adf783_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", dropdownvue_type_template_id_26adf783_hoisted_2, [dropdownvue_type_template_id_26adf783_hoisted_3, dropdownvue_type_template_id_26adf783_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_5];
    }),
    _: 1
  }), dropdownvue_type_template_id_26adf783_hoisted_7, dropdownvue_type_template_id_26adf783_hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_9];
    }),
    _: 1
  }), dropdownvue_type_template_id_26adf783_hoisted_11, dropdownvue_type_template_id_26adf783_hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_13];
    }),
    _: 1
  }), dropdownvue_type_template_id_26adf783_hoisted_14, dropdownvue_type_template_id_26adf783_hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_16];
    }),
    _: 1
  }), dropdownvue_type_template_id_26adf783_hoisted_18, dropdownvue_type_template_id_26adf783_hoisted_19, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_20];
    }),
    _: 1
  }), dropdownvue_type_template_id_26adf783_hoisted_21, dropdownvue_type_template_id_26adf783_hoisted_22, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_24];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_23];
    }),
    _: 1
  }), dropdownvue_type_template_id_26adf783_hoisted_25, dropdownvue_type_template_id_26adf783_hoisted_26, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_28];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_26adf783_hoisted_27];
    }),
    _: 1
  }), dropdownvue_type_template_id_26adf783_hoisted_29]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md?vue&type=template&id=26adf783

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/dropdown.md?vue&type=script&lang=ts


/* harmony default export */ var dropdownvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "下拉菜单", -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("数据流");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("传输属性值");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("已断线");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("待恢复");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("其他");

      function render(_ctx, _cache) {
        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        return _openBlock(), _createBlock(_component_hl_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  divider: ""
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("数据流");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("传输属性值");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("已断线");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("待恢复");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("其他");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("下拉菜单");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("数据流");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("传输属性值");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("已断线");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("待恢复");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("其他");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("数据流");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("传输属性值");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("已断线");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("待恢复");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("其他");

      var _hoisted_17 = /*#__PURE__*/_createVNode("span", null, "测试", -1);

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("个人信息");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("实名认证");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("安全设置");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("退出登录");

      var _hoisted_22 = /*#__PURE__*/_createVNode("hr", null, null, -1);

      var _hoisted_23 = /*#__PURE__*/_createVNode("p", {
        class: "m-t-lg m-b-lg"
      }, "你也可以设置split属性来构建一个按钮或文本的下拉菜单", -1);

      var _hoisted_24 = /*#__PURE__*/_createTextVNode(" Dropdown ");

      var _hoisted_25 = /*#__PURE__*/_createTextVNode("数据流");

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("传输属性值");

      var _hoisted_27 = /*#__PURE__*/_createTextVNode("已断线");

      var _hoisted_28 = /*#__PURE__*/_createTextVNode(" Dropdown ");

      var _hoisted_29 = /*#__PURE__*/_createTextVNode("数据流");

      var _hoisted_30 = /*#__PURE__*/_createTextVNode("传输属性值");

      var _hoisted_31 = /*#__PURE__*/_createTextVNode("已断线");

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_thumb = _resolveComponent("hl-thumb");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_group, {
          dir: "horizontal",
          merge: "",
          indent: "",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_input, {
              placeholder: "请输入内容"
            }), _createVNode(_component_hl_dropdown, null, {
              dropdown: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_menu, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_dropdown_item, null, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_dropdown_item, null, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_dropdown_item, null, {
                      default: _withCtx(function () {
                        return [_hoisted_3];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_dropdown_item, {
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_dropdown_item, {
                      divider: ""
                    }), _createVNode(_component_hl_dropdown_item, null, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_hl_button, {
                  type: "primary",
                  icon: "more"
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_dropdown, {
          class: "m-r-sm"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_8];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  divider: ""
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_11];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "danger",
              icon: "ChevronBottom",
              "icon-position": "right",
              light: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_dropdown, {
          class: "m-r-sm"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_14];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  divider: ""
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary",
              icon: "more",
              equal: "",
              round: "",
              "no-fill": ""
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_dropdown, {
          class: "m-r-sm"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_19];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  divider: ""
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_21];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_hl_thumb, {
              round: "",
              type: "info",
              size: "sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_17];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _hoisted_22, _hoisted_23, _createVNode(_component_hl_dropdown, {
          split: "button",
          type: "primary",
          onClick: _ctx.handleClick,
          class: "m-r-md"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_25];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_26];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_27];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_24];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_hl_dropdown, {
          split: "link",
          type: "success",
          onClick: _ctx.handleClick
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_29];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_30];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_31];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_28];
          }),
          _: 1
        }, 8, ["onClick"])], 64);
      }

      var democomponentExport = {
        methods: {
          handleClick: function handleClick() {
            this.$message('你点击了一个下拉菜单');
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "hover 激活", -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 下拉菜单 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("标记状态");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("生成报表");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("统计分析数据");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("移动到…");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("删除");

      var _hoisted_8 = /*#__PURE__*/_createVNode("p", null, "click 激活", -1);

      var _hoisted_9 = /*#__PURE__*/_createTextVNode(" 下拉菜单 ");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("标记状态");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("生成报表");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("统计分析数据");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("移动到…");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("删除");

      var _hoisted_15 = /*#__PURE__*/_createVNode("p", null, "右键(contextmenu) 激活", -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" 右键此处 ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("标记状态");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("生成报表");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("统计分析数据");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("移动到…");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("删除");

      function render(_ctx, _cache) {
        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "lg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_dropdown, {
                  split: "button"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_hl_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_3];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_4];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_5];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, {
                          divider: ""
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_6];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _createVNode(_component_hl_dropdown, {
                  trigger: "click",
                  split: "button"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_hl_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_10];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_12];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, {
                          divider: ""
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_13];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_15, _createVNode(_component_hl_dropdown, {
                  split: "button",
                  trigger: "contextmenu"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_hl_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_17];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_18];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_19];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, {
                          divider: ""
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_20];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_dropdown_item, null, {
                          default: _withCtx(function () {
                            return [_hoisted_21];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_16];
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
    "hl-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("下拉菜单");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        return _openBlock(), _createBlock(_component_hl_dropdown, {
          "hide-on-click": false
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  divided: ""
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
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
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
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("下拉菜单");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        return _openBlock(), _createBlock(_component_hl_dropdown, {
          onCommand: _ctx.handleCommand
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, {
                  command: "a"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  command: "b"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  command: "c"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  command: "d",
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  command: "e",
                  divided: ""
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
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onCommand"]);
      }

      var democomponentExport = {
        methods: {
          handleCommand: function handleCommand(command) {
            this.$message('你点击了：' + command);
          }
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
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 小型尺寸 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("dropdown-item");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 默认尺寸 ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("dropdown-item");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode(" 大型尺寸 ");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("dropdown-item");

      function render(_ctx, _cache) {
        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_dropdown, {
          size: "sm",
          split: "button",
          type: "primary",
          class: "m-r-md"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_dropdown, {
          split: "button",
          type: "danger",
          class: "m-r-md"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_hl_dropdown, {
          size: "lg",
          split: "button",
          type: "success",
          class: "m-r-md"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 带icon属性的下拉菜单 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("标记状态");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("生成报表");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("统计分析数据");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("移动到…");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("删除");

      function render(_ctx, _cache) {
        var _component_hl_dropdown_item = _resolveComponent("hl-dropdown-item");

        var _component_hl_dropdown_menu = _resolveComponent("hl-dropdown-menu");

        var _component_hl_dropdown = _resolveComponent("hl-dropdown");

        return _openBlock(), _createBlock(_component_hl_dropdown, {
          split: "button",
          trigger: "click"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_hl_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_dropdown_item, {
                  icon: "Star",
                  "icon-class": "info"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  icon: "Page",
                  "icon-class": "info"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  icon: "ChartPie",
                  "icon-class": "info"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  divider: ""
                }), _createVNode(_component_hl_dropdown_item, {
                  icon: "FolderIn",
                  "icon-class": "info"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_hl_dropdown_item, {
                  icon: "Delete",
                  "icon-class": "info"
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
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_26adf783_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ })

}]);