(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/group.md?vue&type=template&id=68e9e966

var groupvue_type_template_id_68e9e966_hoisted_1 = {
  class: "doc-main-content"
};
var groupvue_type_template_id_68e9e966_hoisted_2 = {
  class: "doc-content"
};

var groupvue_type_template_id_68e9e966_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Group 组", -1);

var groupvue_type_template_id_68e9e966_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Group 是鸿鸾中最具有特点的功能之一，它更多用于页面元素的布局构造，当然不仅如此。", -1);

var groupvue_type_template_id_68e9e966_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "ji-ben-shi-yong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-shi-yong"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基本使用")], -1);

var groupvue_type_template_id_68e9e966_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通常我们将元素与元素的组合用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<div>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("包裹起来，此时不妨尝试将它们放到一个"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组里。")], -1);

var groupvue_type_template_id_68e9e966_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("组件会自动为组成员增加 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".group-item"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 类。")])], -1);

var groupvue_type_template_id_68e9e966_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "\n<hl-row align=\"middle\">\n  <hl-col span=\"col\">\n    <hl-group class=\"dom-area\" data-name=\"Group\">\n      <hl-input placeholder=\"请输入内容\" class=\"m-r-sm\"></hl-input>\n      <hl-button type=\"primary\">搜 索</hl-button>\n    </hl-group>\n  </hl-col>\n\n  <hl-col span=\"col\">\n    <hl-group gap=\"1rem\" full align=\"middle\">\n      <hl-icon name=\"UserGroup\" type=\"primary\" size=\"xl\" class=\"static\" fill radius></hl-icon>\n      <hl-group dir=\"vertical\">\n        <h5>姜俊杰</h5>\n        <div>\n          资深前端工程师\n        </div>\n      </hl-group>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "block"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#block"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Block")], -1);

var groupvue_type_template_id_68e9e966_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("默认的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-group>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 是 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "display:inline-flex"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性。你可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "block"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 将其设置为块元素。")], -1);

var groupvue_type_template_id_68e9e966_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group merge class=\"bg-stripes m-b-md m-r-md\">\n  <hl-button type=\"primary\">Group 1</hl-button>\n  <hl-button type=\"primary\">Group 1</hl-button>\n</hl-group>\n<hl-group merge class=\"bg-stripes m-b-md m-r-md\">\n  <hl-button type=\"danger\">Group 2</hl-button>\n  <hl-button type=\"danger\">Group 2</hl-button>\n</hl-group>\n<hl-group merge class=\"bg-stripes\" block>\n  <hl-button type=\"warning\">Group 3</hl-button>\n  <hl-button type=\"warning\">Group 3</hl-button>\n</hl-group>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "huan-xing"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#huan-xing"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 换行")], -1);

var groupvue_type_template_id_68e9e966_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "wrap"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("类可以使组元素超出"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("宽度时自动换行")], -1);

var groupvue_type_template_id_68e9e966_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "你也可以通过插入一行宽度为 100%的 div 来使元素强制换行")], -1);

var groupvue_type_template_id_68e9e966_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group wrap>\n  <hl-button style=\"width:200px\" type=\"primary\" class=\"m-t-sm m-r-sm\">Group Item</hl-button>\n  <hl-button style=\"width:200px\" type=\"primary\" class=\"m-t-sm m-r-sm\">Group Item</hl-button>\n  <hl-button style=\"width:200px\" type=\"primary\" class=\"m-t-sm m-r-sm\">Group Item</hl-button>\n  <hl-button style=\"width:200px\" type=\"primary\" class=\"m-t-sm m-r-sm\">Group Item</hl-button>\n  <hl-button style=\"width:200px\" type=\"primary\" class=\"m-t-sm m-r-sm\">Group Item</hl-button>\n  <div style=\"width:100%\"></div>\n  <hl-button style=\"width:200px\" type=\"primary\" class=\"m-t-sm m-r-sm\">Group Item</hl-button>\n</hl-group>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "pai-lie-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pai-lie-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 排列方式")], -1);

var groupvue_type_template_id_68e9e966_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-group>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dir=\"horizontal\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 或 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dir=\"vertical\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性即可改变它们的排列方式。")], -1);

var groupvue_type_template_id_68e9e966_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("当你未定义 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-group>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dir=\"\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性时，默认为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "horizontal"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 横向排列。")])], -1);

var groupvue_type_template_id_68e9e966_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col\">\n    <p>横向排列 horizontal</p>\n    <hl-group dir=\"horizontal\" class=\"bg-stripes\">\n      <hl-button type=\"primary\" class=\"m-r-xs\">Group Item</hl-button>\n      <hl-button type=\"primary\">Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <p>纵向排列 vertical</p>\n    <hl-group dir=\"vertical\" class=\"bg-stripes\">\n      <hl-button type=\"primary\" class=\"m-b-xs\">Group Item</hl-button>\n      <hl-button type=\"primary\">Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "rong-he"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rong-he"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 融合")], -1);

var groupvue_type_template_id_68e9e966_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "增加 merge 属性可使组内成员非常友好的融合。哪怕组内成员拥有各自的边距和圆角也能被正确的处理。", -1);

var groupvue_type_template_id_68e9e966_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col\">\n    <p>横向融合</p>\n    <hl-group dir=\"horizontal\" merge>\n      <hl-button type=\"primary\">Group Item</hl-button>\n      <hl-button type=\"primary\">Group Item</hl-button>\n    </hl-group>\n    <hl-group dir=\"horizontal\" merge block class=\"m-t-lg\">\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <p>纵向融合</p>\n    <hl-group dir=\"vertical\" merge>\n      <hl-button type=\"primary\">Group Item</hl-button>\n      <hl-button type=\"primary\">Group Item</hl-button>\n    </hl-group>\n    <hl-group dir=\"vertical\" merge class=\"m-l-lg\">\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "suo-jin"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#suo-jin"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 缩进")], -1);

var groupvue_type_template_id_68e9e966_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("缩进标签 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "indent"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 用于缩减组成员之间的距离，你可以直观的看到融合的元素会自动减去相连接的边框。")], -1);

var groupvue_type_template_id_68e9e966_hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\">\n    <p>横向缩进融合</p>\n    <hl-group dir=\"horizontal\" class=\"m-t-sm\" merge indent>\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col-md-12\">\n    <p>纵向缩进融合</p>\n    <hl-group dir=\"vertical\" class=\"m-t-sm\" merge indent>\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n      <hl-button type=\"primary\" outline>Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n\n  <hl-col span=\"col\" class=\"m-t-xl\">\n    <p>也可以设置具体数值<code>indent=\"-2px\"</code>来缩进元素</p>\n    <hl-group dir=\"horizontal\" class=\"m-t-sm\" merge indent=\"-2px\">\n      <hl-button type=\"primary\" style=\"border-width: 2px\" outline>Group Item</hl-button>\n      <hl-button type=\"primary\" style=\"border-width: 2px\" outline>Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\" class=\"m-t-xl\">\n    <p>正值设置<code>indent=\"12px\"</code></p>\n    <hl-group dir=\"horizontal\" class=\"m-t-sm\" indent=\"12px\">\n      <hl-button type=\"primary\" style=\"border-width: 2px\" outline>Group Item</hl-button>\n      <hl-button type=\"primary\" style=\"border-width: 2px\" outline>Group Item</hl-button>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"shi-yong-gap-lai-she-zhi-zu-cheng-yuan-de-jian-ju\"><a class=\"header-anchor\" href=\"#shi-yong-gap-lai-she-zhi-zu-cheng-yuan-de-jian-ju\"></a> 使用 gap 来设置组成员的间距</h2><p>虽然<code>indent</code>属性也可以设置组成员之间的间距，但我更加建议使用<code>gap</code>的<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap\">原生属性</a>来设置组成员的间隔。因为<code>indent</code>属性是用<code>margin-left</code>来设置的边距的，它受到 dom 渲染顺序的影响，但它支持负数值。</p>", 2);

var groupvue_type_template_id_68e9e966_hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "gap"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性同时设置了行和列的间距，你也可以单独设置"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "col-gap=\"\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "row-gap=\"\""), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性")])], -1);

var groupvue_type_template_id_68e9e966_hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\">\n    <p><code>gap</code>能更友好的对组成员进行排序</p>\n    <hl-group dir=\"horizontal\" gap=\"1rem\" class=\"m-t-sm\">\n      <hl-button type=\"primary\" class=\"order-3\">Item 1</hl-button>\n      <hl-button type=\"primary\" class=\"order-4\">Item 2</hl-button>\n      <hl-button type=\"primary\" class=\"order-1\">Item 3</hl-button>\n      <hl-button type=\"primary\" class=\"order-2\">Item 4</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col-md-12\">\n    <p><code>indent</code>无法对组成员进行友好排序</p>\n    <hl-group dir=\"horizontal\" indent=\"1rem\" class=\"m-t-sm\">\n      <hl-button type=\"danger\" class=\"order-3\">Item 1</hl-button>\n      <hl-button type=\"danger\" class=\"order-4\">Item 2</hl-button>\n      <hl-button type=\"danger\" class=\"order-1\">Item 3</hl-button>\n      <hl-button type=\"danger\" class=\"order-2\">Item 4</hl-button>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "dui-qi-fang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dui-qi-fang-shi"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 对齐方式")], -1);

var groupvue_type_template_id_68e9e966_hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "<hl-group>"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "align"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性即可改变组成员的对齐方式。")], -1);

var groupvue_type_template_id_68e9e966_hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("支持的对齐属性："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "middle"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "right")])], -1);

var groupvue_type_template_id_68e9e966_hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"xxl\">\n  <hl-col span=\"col\">\n    <hl-group align=\"top\" class=\"bg-stripes\" style=\"height:100px; width: 100%\">\n      <hl-button type=\"primary\" style=\"width: 6rem\">Top</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-group align=\"middle\" class=\"bg-stripes\" style=\"height:100px; width: 100%\">\n      <hl-button type=\"primary\" style=\"width: 6rem\">middle</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-group align=\"bottom\" class=\"bg-stripes\" style=\"height:100px; width: 100%\">\n      <hl-button type=\"primary\" style=\"width: 6rem\">bottom</hl-button>\n    </hl-group>\n  </hl-col>\n</hl-row>\n\n<hl-row gap=\"xxl\" class=\"m-t-xxl\">\n  <hl-col span=\"col\">\n    <hl-group align=\"left\" class=\"bg-stripes\" style=\"height:100px; width: 100%\">\n      <hl-button type=\"primary\" style=\"width: 6rem\">left</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-group align=\"center\" class=\"bg-stripes\" style=\"height:100px; width: 100%\">\n      <hl-button type=\"primary\" style=\"width: 6rem\">center</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-group align=\"right\" class=\"bg-stripes\" style=\"height:100px; width: 100%\">\n      <hl-button type=\"primary\" style=\"width: 6rem\">right</hl-button>\n    </hl-group>\n  </hl-col>\n</hl-row>\n\n<hl-row class=\"m-t-xxl\">\n  <h4 class=\"m-b-xxl\">使用案例：</h4>\n  <hl-col span=\"col\">\n    <hl-group align=\"middle\" gap=\"1rem\">\n      <hl-button type=\"primary\" icon=\"phone\" equal round outline></hl-button>\n      <hl-thumb round type=\"primary\" size=\"xxxl\">\n        <span>段</span>\n      </hl-thumb>\n      <hl-button type=\"primary\" icon=\"mail\" equal round outline></hl-button>\n    </hl-group>\n  </hl-col>\n\n  <hl-col span=\"col\">\n    <hl-group align=\"top\" gap=\"1rem\">\n      <hl-icon name=\"info\" type=\"info\" size=\"xl\" class=\"no-shrink\"></hl-icon>\n      <hl-group dir=\"vertical\" gap=\"var(--xxs)\">\n        <h4>主动式CSS生成系统</h4>\n        <div>\n          主动式样式生成系统是通过config配置文件加样式生成函数mixin来编译的，我们可以完全自定义它所有的样式，并且不会产生冗余的代码。\n        </div>\n      </hl-group>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-gua-ying"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-gua-ying"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自适应")], -1);

var groupvue_type_template_id_68e9e966_hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "group"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 增加 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "full"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性，可使组和组内成员都拉伸至父元素的宽度或高度。")], -1);

var groupvue_type_template_id_68e9e966_hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "full"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性传入 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "full-x"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 或者 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "full-y"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可以单独设置它的响应方式")])], -1);

var groupvue_type_template_id_68e9e966_hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<p>使用<code>full</code>属性将同时自适应宽度和高度</p>\n<hl-row class=\"m-t-md\">\n  <hl-col span=\"col\">\n    <hl-group merge indent full dir=\"vertical\" style=\"height:10rem\">\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col\">\n    <hl-group merge indent full style=\"height:10rem\">\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n    </hl-group>\n  </hl-col>\n</hl-row>\n\n<hl-row class=\"m-t-lg\">\n  <hl-col span=\"col\">\n    <p>横向自适应<code>full-x</code></p>\n    <hl-group merge indent full=\"full-x\" class=\"m-b-lg\">\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n    </hl-group>\n\n    <hl-group dir=\"vertical\" merge indent full=\"full-x\">\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n      <hl-button type=\"primary\" outline>Auto</hl-button>\n    </hl-group>\n\n  </hl-col>\n  <hl-col span=\"col\">\n    <p>纵向自适应<code>full-y</code></p>\n    <hl-group full>\n      <hl-group merge indent full=\"full-y\" class=\"m-r-md\" style=\"height:131px\">\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n      </hl-group>\n      <hl-group merge indent full=\"full-y\" class=\"m-r-md\" style=\"height:131px\">\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n      </hl-group>\n      <hl-group merge indent dir=\"vertical\" full=\"full-y\" class=\"m-r-md\" style=\"height:131px\">\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n      </hl-group>\n      <hl-group merge indent dir=\"vertical\" full=\"full-y\" style=\"height:131px\">\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n        <hl-button type=\"primary\" outline>Auto</hl-button>\n      </hl-group>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var groupvue_type_template_id_68e9e966_hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jing-tai-zu-cheng-yuan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jing-tai-zu-cheng-yuan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 静态组成员")], -1);

var groupvue_type_template_id_68e9e966_hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("赋予组成员 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".static"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 类，可将组成员设置成静态，这样它就不会根据宽度而变化了。")], -1);

var groupvue_type_template_id_68e9e966_hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, ".static"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("类继承于 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "group-item"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 类之下，使用 class 样式来设置。")])], -1);

var groupvue_type_template_id_68e9e966_hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group merge indent full>\n  <hl-button type=\"primary\" outline class=\"static\">Static</hl-button>\n  <hl-button type=\"primary\" outline>Auto</hl-button>\n  <hl-button type=\"primary\" outline>Auto</hl-button>\n  <hl-button type=\"primary\" outline class=\"static\">Static</hl-button>\n</hl-group>\n\n<hl-group dir=\"vertical\" merge indent full class=\"m-t-lg\" style=\"height: 200px;\">\n  <hl-button type=\"primary\" outline class=\"static\">Static</hl-button>\n  <hl-button type=\"primary\" outline>Auto</hl-button>\n  <hl-button type=\"primary\" outline>Auto</hl-button>\n  <hl-button type=\"primary\" outline class=\"static\">Static</hl-button>\n</hl-group>\n")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zu-qian-tao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zu-qian-tao"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 组嵌套")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "组里面还可以再嵌套组，这样可以构造更加复杂的布局。同时它们的下级节点之间还保持相互融合。使用方法如 ui > li 一样简单。", -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\">\n    <p>横向嵌套</p>\n    <hl-group dir=\"horizontal\" merge indent full=\"full-x\" class=\"dom-area\" data-name=\"G1\">\n      <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <span>Item</span>\n        <span>Item</span>\n        <span>Item</span>\n      </hl-group>\n      <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <span>Item</span>\n        <span>Item</span>\n        <span>Item</span>\n      </hl-group>\n      <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <span>Item</span>\n        <span>Item</span>\n        <span>Item</span>\n      </hl-group>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col-md-12\">\n    <p>纵向嵌套</p>\n    <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G1\">\n      <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <span>Item</span>\n        <span>Item</span>\n        <span>Item</span>\n      </hl-group>\n      <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <span>Item</span>\n        <span>Item</span>\n        <span>Item</span>\n      </hl-group>\n      <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <span>Item</span>\n        <span>Item</span>\n        <span>Item</span>\n      </hl-group>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-t-lg\">\n    <p>多级混合嵌套</p>\n    <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G1\">\n      <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n        <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n        <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n      </hl-group>\n      <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <hl-group dir=\"vertical\" full merge indent class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n        <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n      </hl-group>\n    </hl-group>\n  </hl-col>\n  <hl-col span=\"col-md-12\" class=\"m-t-lg\">\n    <p>多级混合嵌套</p>\n    <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G1\">\n      <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n        <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n        <hl-group dir=\"vertical\" merge indent full class=\"dom-area\" data-name=\"G3\">\n          <span>Item</span>\n          <span>Item</span>\n        </hl-group>\n      </hl-group>\n      <hl-group dir=\"horizontal\" merge indent full class=\"dom-area\" data-name=\"G2\">\n        <span>Item</span>\n        <span>Item</span>\n        <span>Item</span>\n      </hl-group>\n    </hl-group>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\"></a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>dir</td><td>排列方向</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>align</td><td>对齐方式</td><td>string</td><td>top / middle / end / left / center / right</td><td></td></tr><tr><td>merge</td><td>融合</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>static</td><td>静态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>边距缩进</td><td>boolean / string</td><td>自定义缩进尺寸</td><td>false</td></tr><tr><td>gap</td><td>间隙</td><td>string</td><td>—</td><td>false</td></tr><tr><td>full</td><td>拉伸至父元素的尺寸</td><td>boolean / string</td><td>full-x (横向拉伸) / full-y (纵向拉伸)</td><td>false</td></tr><tr><td>wrap</td><td>换行</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>block</td><td>转换为块元素</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 2);

function groupvue_type_template_id_68e9e966_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", groupvue_type_template_id_68e9e966_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", groupvue_type_template_id_68e9e966_hoisted_2, [groupvue_type_template_id_68e9e966_hoisted_3, groupvue_type_template_id_68e9e966_hoisted_4, groupvue_type_template_id_68e9e966_hoisted_5, groupvue_type_template_id_68e9e966_hoisted_6, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_7];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_9, groupvue_type_template_id_68e9e966_hoisted_10, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_11];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_12, groupvue_type_template_id_68e9e966_hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_14];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_16, groupvue_type_template_id_68e9e966_hoisted_17, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_18];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_20, groupvue_type_template_id_68e9e966_hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_22];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_23, groupvue_type_template_id_68e9e966_hoisted_24, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_25];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_26, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_29];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_28];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_30, groupvue_type_template_id_68e9e966_hoisted_31, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_33];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_32];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_34, groupvue_type_template_id_68e9e966_hoisted_35, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_37];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_36];
    }),
    _: 1
  }), groupvue_type_template_id_68e9e966_hoisted_38, groupvue_type_template_id_68e9e966_hoisted_39, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_41];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [groupvue_type_template_id_68e9e966_hoisted_40];
    }),
    _: 1
  }), _hoisted_42, _hoisted_43, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo10)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    _: 1
  }), _hoisted_45]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/group.md?vue&type=template&id=68e9e966

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/group.md?vue&type=script&lang=ts


/* harmony default export */ var groupvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("搜 索");

      var _hoisted_2 = /*#__PURE__*/_createVNode("h5", null, "姜俊杰", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, " 资深前端工程师 ", -1);

      function render(_ctx, _cache) {
        var _component_hl_input = _resolveComponent("hl-input");

        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          align: "middle"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  class: "dom-area",
                  "data-name": "Group"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_input, {
                      placeholder: "请输入内容",
                      class: "m-r-sm"
                    }), _createVNode(_component_hl_button, {
                      type: "primary"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  gap: "1rem",
                  full: "",
                  align: "middle"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_icon, {
                      name: "UserGroup",
                      type: "primary",
                      size: "xl",
                      class: "static",
                      fill: "",
                      radius: ""
                    }), _createVNode(_component_hl_group, {
                      dir: "vertical"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2, _hoisted_3];
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
    "hl-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Group 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Group 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Group 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Group 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Group 3");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_group, {
          merge: "",
          class: "bg-stripes m-b-md m-r-md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_group, {
          merge: "",
          class: "bg-stripes m-b-md m-r-md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "danger"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "danger"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_group, {
          merge: "",
          class: "bg-stripes",
          block: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "warning"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "warning"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
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
    "hl-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        style: {
          "width": "100%"
        }
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Group Item");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_component_hl_group, {
          wrap: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              style: {
                "width": "200px"
              },
              type: "primary",
              class: "m-t-sm m-r-sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              style: {
                "width": "200px"
              },
              type: "primary",
              class: "m-t-sm m-r-sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              style: {
                "width": "200px"
              },
              type: "primary",
              class: "m-t-sm m-r-sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              style: {
                "width": "200px"
              },
              type: "primary",
              class: "m-t-sm m-r-sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              style: {
                "width": "200px"
              },
              type: "primary",
              class: "m-t-sm m-r-sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _hoisted_6, _createVNode(_component_hl_button, {
              style: {
                "width": "200px"
              },
              type: "primary",
              class: "m-t-sm m-r-sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
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
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "横向排列 horizontal", -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_4 = /*#__PURE__*/_createVNode("p", null, "纵向排列 vertical", -1);

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Group Item");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  class: "bg-stripes"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      class: "m-r-xs"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary"
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
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4, _createVNode(_component_hl_group, {
                  dir: "vertical",
                  class: "bg-stripes"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      class: "m-b-xs"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary"
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
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "横向融合", -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_6 = /*#__PURE__*/_createVNode("p", null, "纵向融合", -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Group Item");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  merge: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_3];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  merge: "",
                  block: "",
                  class: "m-t-lg"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6, _createVNode(_component_hl_group, {
                  dir: "vertical",
                  merge: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_hl_group, {
                  dir: "vertical",
                  merge: "",
                  class: "m-l-lg"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
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
    "hl-demo5": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "横向缩进融合", -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_4 = /*#__PURE__*/_createVNode("p", null, "纵向缩进融合", -1);

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_7 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode("也可以设置具体数值"), /*#__PURE__*/_createVNode("code", null, "indent=\"-2px\""), /*#__PURE__*/_createTextVNode("来缩进元素")], -1);

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_10 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode("正值设置"), /*#__PURE__*/_createVNode("code", null, "indent=\"12px\"")], -1);

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Group Item");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Group Item");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  class: "m-t-sm",
                  merge: "",
                  indent: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
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
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4, _createVNode(_component_hl_group, {
                  dir: "vertical",
                  class: "m-t-sm",
                  merge: "",
                  indent: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
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
            }), _createVNode(_component_hl_col, {
              span: "col",
              class: "m-t-xl"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  class: "m-t-sm",
                  merge: "",
                  indent: "-2px"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "border-width": "2px"
                      },
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "border-width": "2px"
                      },
                      outline: ""
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
            }), _createVNode(_component_hl_col, {
              span: "col",
              class: "m-t-xl"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  class: "m-t-sm",
                  indent: "12px"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "border-width": "2px"
                      },
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_11];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "border-width": "2px"
                      },
                      outline: ""
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
        });
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createVNode("code", null, "gap"), /*#__PURE__*/_createTextVNode("能更友好的对组成员进行排序")], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Item 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Item 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Item 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Item 4");

      var _hoisted_6 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createVNode("code", null, "indent"), /*#__PURE__*/_createTextVNode("无法对组成员进行友好排序")], -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Item 1");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Item 2");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Item 3");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Item 4");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  gap: "1rem",
                  class: "m-t-sm"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      class: "order-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      class: "order-4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_3];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      class: "order-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      class: "order-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  indent: "1rem",
                  class: "m-t-sm"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "danger",
                      class: "order-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "danger",
                      class: "order-4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "danger",
                      class: "order-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "danger",
                      class: "order-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
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
    "hl-demo7": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Top");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("middle");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("bottom");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("left");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("center");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("right");

      var _hoisted_7 = /*#__PURE__*/_createVNode("h4", {
        class: "m-b-xxl"
      }, "使用案例：", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", null, "段", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("h4", null, "主动式CSS生成系统", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", null, " 主动式样式生成系统是通过config配置文件加样式生成函数mixin来编译的，我们可以完全自定义它所有的样式，并且不会产生冗余的代码。 ", -1);

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_icon = _resolveComponent("hl-icon");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_row, {
          gap: "xxl"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "top",
                  class: "bg-stripes",
                  style: {
                    "height": "100px",
                    "width": "100%"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "width": "6rem"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "middle",
                  class: "bg-stripes",
                  style: {
                    "height": "100px",
                    "width": "100%"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "width": "6rem"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "bottom",
                  class: "bg-stripes",
                  style: {
                    "height": "100px",
                    "width": "100%"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "width": "6rem"
                      }
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
        }), _createVNode(_component_hl_row, {
          gap: "xxl",
          class: "m-t-xxl"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "left",
                  class: "bg-stripes",
                  style: {
                    "height": "100px",
                    "width": "100%"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "width": "6rem"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "center",
                  class: "bg-stripes",
                  style: {
                    "height": "100px",
                    "width": "100%"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "width": "6rem"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "right",
                  class: "bg-stripes",
                  style: {
                    "height": "100px",
                    "width": "100%"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      style: {
                        "width": "6rem"
                      }
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
        }), _createVNode(_component_hl_row, {
          class: "m-t-xxl"
        }, {
          default: _withCtx(function () {
            return [_hoisted_7, _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "middle",
                  gap: "1rem"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      icon: "phone",
                      equal: "",
                      round: "",
                      outline: ""
                    }), _createVNode(_component_hl_thumb, {
                      round: "",
                      type: "primary",
                      size: "xxxl"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      icon: "mail",
                      equal: "",
                      round: "",
                      outline: ""
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  align: "top",
                  gap: "1rem"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_icon, {
                      name: "info",
                      type: "info",
                      size: "xl",
                      class: "no-shrink"
                    }), _createVNode(_component_hl_group, {
                      dir: "vertical",
                      gap: "var(--xxs)"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9, _hoisted_10];
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
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode("使用"), /*#__PURE__*/_createVNode("code", null, "full"), /*#__PURE__*/_createTextVNode("属性将同时自适应宽度和高度")], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_8 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode("横向自适应"), /*#__PURE__*/_createVNode("code", null, "full-x")], -1);

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_13 = /*#__PURE__*/_createVNode("p", null, [/*#__PURE__*/_createTextVNode("纵向自适应"), /*#__PURE__*/_createVNode("code", null, "full-y")], -1);

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Auto");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_Fragment, null, [_hoisted_1, _createVNode(_component_hl_row, {
          class: "m-t-md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  merge: "",
                  indent: "",
                  full: "",
                  dir: "vertical",
                  style: {
                    "height": "10rem"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_3];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_hl_group, {
                  merge: "",
                  indent: "",
                  full: "",
                  style: {
                    "height": "10rem"
                  }
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
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
        }), _createVNode(_component_hl_row, {
          class: "m-t-lg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _createVNode(_component_hl_group, {
                  merge: "",
                  indent: "",
                  full: "full-x",
                  class: "m-b-lg"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_hl_group, {
                  dir: "vertical",
                  merge: "",
                  indent: "",
                  full: "full-x"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_11];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_button, {
                      type: "primary",
                      outline: ""
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
            }), _createVNode(_component_hl_col, {
              span: "col"
            }, {
              default: _withCtx(function () {
                return [_hoisted_13, _createVNode(_component_hl_group, {
                  full: ""
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_group, {
                      merge: "",
                      indent: "",
                      full: "full-y",
                      class: "m-r-md",
                      style: {
                        "height": "131px"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      merge: "",
                      indent: "",
                      full: "full-y",
                      class: "m-r-md",
                      style: {
                        "height": "131px"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_15];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_16];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      merge: "",
                      indent: "",
                      dir: "vertical",
                      full: "full-y",
                      class: "m-r-md",
                      style: {
                        "height": "131px"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_17];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_18];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      merge: "",
                      indent: "",
                      dir: "vertical",
                      full: "full-y",
                      style: {
                        "height": "131px"
                      }
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_19];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_20];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_button, {
                          type: "primary",
                          outline: ""
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_21];
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
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo9": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Static");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Static");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Static");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Auto");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Static");

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_group, {
          merge: "",
          indent: "",
          full: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary",
              outline: "",
              class: "static"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              outline: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              outline: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              outline: "",
              class: "static"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_hl_group, {
          dir: "vertical",
          merge: "",
          indent: "",
          full: "",
          class: "m-t-lg",
          style: {
            "height": "200px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_button, {
              type: "primary",
              outline: "",
              class: "static"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              outline: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              outline: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_button, {
              type: "primary",
              outline: "",
              class: "static"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
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
    "hl-demo10": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "横向嵌套", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("p", null, "纵向嵌套", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_17 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_18 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_19 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_20 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_21 = /*#__PURE__*/_createVNode("p", null, "多级混合嵌套", -1);

      var _hoisted_22 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_23 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_24 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_25 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_26 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_27 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_28 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_29 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_30 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_31 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_32 = /*#__PURE__*/_createVNode("p", null, "多级混合嵌套", -1);

      var _hoisted_33 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_34 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_35 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_36 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_37 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_38 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_39 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_40 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      var _hoisted_41 = /*#__PURE__*/_createVNode("span", null, "Item", -1);

      function render(_ctx, _cache) {
        var _component_hl_group = _resolveComponent("hl-group");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  merge: "",
                  indent: "",
                  full: "full-x",
                  class: "dom-area",
                  "data-name": "G1"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_group, {
                      dir: "vertical",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2, _hoisted_3, _hoisted_4];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      dir: "vertical",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_5, _hoisted_6, _hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      dir: "vertical",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8, _hoisted_9, _hoisted_10];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_11, _createVNode(_component_hl_group, {
                  dir: "vertical",
                  merge: "",
                  indent: "",
                  full: "",
                  class: "dom-area",
                  "data-name": "G1"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_group, {
                      dir: "horizontal",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_12, _hoisted_13, _hoisted_14];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      dir: "horizontal",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_15, _hoisted_16, _hoisted_17];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      dir: "horizontal",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_18, _hoisted_19, _hoisted_20];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_hoisted_21, _createVNode(_component_hl_group, {
                  dir: "horizontal",
                  merge: "",
                  indent: "",
                  full: "",
                  class: "dom-area",
                  "data-name": "G1"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_group, {
                      dir: "vertical",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_group, {
                          dir: "horizontal",
                          merge: "",
                          indent: "",
                          full: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_22, _hoisted_23];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_group, {
                          dir: "horizontal",
                          merge: "",
                          indent: "",
                          full: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_24, _hoisted_25];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_group, {
                          dir: "horizontal",
                          merge: "",
                          indent: "",
                          full: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_26, _hoisted_27];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      dir: "horizontal",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_group, {
                          dir: "vertical",
                          full: "",
                          merge: "",
                          indent: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_28, _hoisted_29];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_group, {
                          dir: "vertical",
                          merge: "",
                          indent: "",
                          full: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_30, _hoisted_31];
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
              span: "col-md-12",
              class: "m-t-lg"
            }, {
              default: _withCtx(function () {
                return [_hoisted_32, _createVNode(_component_hl_group, {
                  dir: "vertical",
                  merge: "",
                  indent: "",
                  full: "",
                  class: "dom-area",
                  "data-name": "G1"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_hl_group, {
                      dir: "horizontal",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_hl_group, {
                          dir: "vertical",
                          merge: "",
                          indent: "",
                          full: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_33, _hoisted_34];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_group, {
                          dir: "vertical",
                          merge: "",
                          indent: "",
                          full: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_35, _hoisted_36];
                          }),
                          _: 1
                        }), _createVNode(_component_hl_group, {
                          dir: "vertical",
                          merge: "",
                          indent: "",
                          full: "",
                          class: "dom-area",
                          "data-name": "G3"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_37, _hoisted_38];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_hl_group, {
                      dir: "horizontal",
                      merge: "",
                      indent: "",
                      full: "",
                      class: "dom-area",
                      "data-name": "G2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_39, _hoisted_40, _hoisted_41];
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/group.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/group.md



groupvue_type_script_lang_ts.render = groupvue_type_template_id_68e9e966_render

/* harmony default export */ var group = __webpack_exports__["default"] = (groupvue_type_script_lang_ts);

/***/ })

}]);