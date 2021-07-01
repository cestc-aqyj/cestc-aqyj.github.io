(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/thumb.md?vue&type=template&id=331011d1

var thumbvue_type_template_id_331011d1_hoisted_1 = {
  class: "doc-main-content"
};
var thumbvue_type_template_id_331011d1_hoisted_2 = {
  class: "doc-content"
};

var thumbvue_type_template_id_331011d1_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "Thumb 缩略图", -1);

var thumbvue_type_template_id_331011d1_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "图片容器，在保留原生 img 的特性下，支持懒加载，自定义占位、加载失败等", -1);

var thumbvue_type_template_id_331011d1_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "fit"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("确定图片如何适应到容器框，同原生 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
}, "object-fit"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")])], -1);

var thumbvue_type_template_id_331011d1_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-thumb\">\n  <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n    <span class=\"demonstration\">{{ fit }}</span>\n    <hl-thumb\n      style=\"width: 100px; height: 100px\"\n      :src=\"url\"\n      :fit=\"fit\"\n    ></hl-thumb>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: '../assets/images/show_thumb.png',\n      }\n    },\n  }\n</script>\n")], -1);

var thumbvue_type_template_id_331011d1_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "suo-lue-tu-chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#suo-lue-tu-chi-cun"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 缩略图尺寸")], -1);

var thumbvue_type_template_id_331011d1_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性来定义缩略图的尺寸，可选值为 xxs，xs，sm，md，lg，xl，xxl")], -1);

var thumbvue_type_template_id_331011d1_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-thumb\n  size=\"xxxs\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"xxs\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"xs\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"sm\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"md\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"lg\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"xl\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"xxl\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  size=\"xxxl\"\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yuan-jiao-he-yuan-xing"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yuan-jiao-he-yuan-xing"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 圆角和圆形")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "radius"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "round"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("属性实现")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-thumb\n  radius\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n<hl-thumb\n  round\n  fit=\"cover\"\n  class=\"m-r-md\"\n  src=\"../assets/images/show_thumb.png\"\n></hl-thumb>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zi-ding-yi-suo-lue-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-suo-lue-nei-rong"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 自定义缩略内容")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group indent=\"1rem\">\n<hl-thumb round type=\"primary\" size=\"xxxs\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"xxs\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"xs\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"sm\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"md\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"lg\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"xl\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"xxl\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"primary\" size=\"xxxl\">\n  <span>姓名</span>\n</hl-thumb>\n</hl-group>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 颜色")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-thumb round type=\"primary\" class=\"m-r-md\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"danger\" class=\"m-r-md\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"warning\" class=\"m-r-md\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"success\" class=\"m-r-md\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round type=\"info\" class=\"m-r-md\">\n  <span>姓名</span>\n</hl-thumb>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "light-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#light-yan-se"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Light颜色")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 可使状态色减淡")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-group indent=\"-0.5rem\">\n    <hl-thumb round bordered size=\"md\" type=\"primary\" effect=\"light\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round bordered size=\"md\" type=\"danger\" effect=\"light\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round bordered size=\"md\" type=\"warning\" effect=\"light\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round bordered size=\"md\" type=\"success\" effect=\"light\">\n  <span>姓名</span>\n</hl-thumb>\n<hl-thumb round bordered size=\"md\" type=\"info\" effect=\"light\">\n  <span>姓名</span>\n</hl-thumb>\n</hl-group>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "zhan-wei-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhan-wei-nei-rong"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 占位内容")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slot = placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("来自定义占位内容")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\">\n    <p>默认</p>\n    <hl-thumb :src=\"src\" style=\"width: 100%; height:200px;\" fit=\"cover\"></hl-thumb>\n  </hl-col>\n  <hl-col span=\"col-md-12\">\n    <p>自定义</p>\n    <hl-thumb :src=\"src\" style=\"width: 100%; height:200px;\" fit=\"cover\">\n      <template #placeholder>\n        加载中...\n      </template>\n    </hl-thumb>\n  </hl-col>\n</hl-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        src: '../assets/images/show_thumb.png',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "jia-zai-shi-bai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jia-zai-shi-bai"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 加载失败")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slot = error"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可自定义加载失败内容")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row>\n  <hl-col span=\"col-md-12\">\n    <p>默认</p>\n    <hl-thumb src=\"http://test.com/1.png\" style=\"width: 100%; height:100px\"></hl-thumb>\n  </hl-col>\n  <hl-col span=\"col-md-12\">\n    <p>自定义</p>\n    <hl-thumb src=\"http://test.com/1.png\" style=\"width: 100%; height:100px\">\n      <template #error>\n        <hl-icon name=\"close\"></hl-icon>\n      </template>\n    </hl-thumb>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "da-tu-yu-lan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#da-tu-yu-lan"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 大图预览")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("可通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "previewSrcList"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 开启预览大图的功能。")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-thumb__preview\">\n  <hl-thumb\n    style=\"width: 100px; height: 100px\"\n    :src=\"url\"\n    fit=\"cover\"\n    :preview-src-list=\"srcList\"\n  >\n  </hl-thumb>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        url:\n          '../assets/images/show_thumb.png',\n        srcList: [\n          '../assets/images/show_thumb.png',\n          '../assets/images/show_thumb2.png',\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"thumb-attributes\"><a class=\"header-anchor\" href=\"#thumb-attributes\"></a> Thumb Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>alt</td><td>原生 alt</td><td>string</td><td>-</td><td>-</td></tr><tr><td>fit</td><td>确定图片如何适应容器框，同原生 <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit\">object-fit</a></td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>-</td></tr><tr><td>hide-on-click-modal</td><td>当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>preview-src-list</td><td>开启图片预览功能</td><td>Array</td><td>—</td><td>-</td></tr><tr><td>referrer-policy</td><td>原生 referrerPolicy</td><td>string</td><td>-</td><td>-</td></tr><tr><td>src</td><td>图片源，同原生</td><td>string</td><td>—</td><td>-</td></tr><tr><td>type</td><td>自定义内容时候可选配色</td><td>string</td><td>info, primary, warning, danger, success</td><td>—</td></tr><tr><td>z-index</td><td>设置图片预览的 z-index</td><td>Number</td><td>—</td><td>2000</td></tr><tr><td>bordered</td><td>边框效果</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h3 id=\"thumb-events\"><a class=\"header-anchor\" href=\"#thumb-events\"></a> Thumb Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load</td><td>图片加载成功触发</td><td>(e: Event)</td></tr><tr><td>error</td><td>图片加载失败触发</td><td>(e: Error)</td></tr></tbody></table><h3 id=\"thumb-slots\"><a class=\"header-anchor\" href=\"#thumb-slots\"></a> Thumb Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>placeholder</td><td>图片未加载的占位内容</td></tr><tr><td>error</td><td>加载失败的内容，只有设置了 src 属性，并加载失败后才会显示此插槽内容</td></tr><tr><td>default</td><td>默认内容，未设置 src 时显示</td></tr></tbody></table><h3 id=\"imageviewer-attributes\"><a class=\"header-anchor\" href=\"#imageviewer-attributes\"></a> ImageViewer Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>url-list</td><td>用于预览的图片链接列表</td><td>Array&lt;string&gt;</td><td>-</td><td>[]</td></tr><tr><td>z-index</td><td>预览时遮罩层的 z-index</td><td>number / string</td><td>int / string&lt;int&gt;</td><td>2000</td></tr><tr><td>initial-index</td><td>预览的首张图片的位置, 小于等于数组长度</td><td>number</td><td>int</td><td>0</td></tr><tr><td>infinite</td><td>是否可以无限循环预览</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>hide-on-click-modal</td><td>是否可以通过点击遮罩层关闭预览</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>append-to-body</td><td>image 自身是否插入至 body 元素上。嵌套的父元素设置了 transform 属性必须指定该属性并赋值为 true</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"imageviewer-events\"><a class=\"header-anchor\" href=\"#imageviewer-events\"></a> ImageViewer Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发</td><td>无</td></tr><tr><td>switch</td><td>当图片切换时触发</td><td>(val: number) 切换目标的下标</td></tr></tbody></table>", 10);

function thumbvue_type_template_id_331011d1_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", thumbvue_type_template_id_331011d1_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", thumbvue_type_template_id_331011d1_hoisted_2, [thumbvue_type_template_id_331011d1_hoisted_3, thumbvue_type_template_id_331011d1_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [thumbvue_type_template_id_331011d1_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [thumbvue_type_template_id_331011d1_hoisted_5];
    }),
    _: 1
  }), thumbvue_type_template_id_331011d1_hoisted_7, thumbvue_type_template_id_331011d1_hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [thumbvue_type_template_id_331011d1_hoisted_9];
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
  }), _hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/thumb.md?vue&type=template&id=331011d1

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/thumb.md?vue&type=script&lang=ts


/* harmony default export */ var thumbvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */];
      var _hoisted_1 = {
        class: "demo-thumb"
      };
      var _hoisted_2 = {
        class: "demonstration"
      };

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        return _openBlock(), _createBlock("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.fits, function (fit) {
          return _openBlock(), _createBlock("div", {
            class: "block",
            key: fit
          }, [_createVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_hl_thumb, {
            style: {
              "width": "100px",
              "height": "100px"
            },
            src: _ctx.url,
            fit: fit
          }, null, 8, ["src", "fit"])]);
        }), 128))]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: '../assets/images/show_thumb.png'
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
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_thumb, {
          size: "xxxs",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "xxs",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "xs",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "sm",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "md",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "lg",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "xl",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "xxl",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          size: "xxxl",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        })], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_thumb, {
          radius: "",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        }), _createVNode(_component_hl_thumb, {
          round: "",
          fit: "cover",
          class: "m-r-md",
          src: "../assets/images/show_thumb.png"
        })], 64);
      }

      var democomponentExport = {};
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_component_hl_group, {
          indent: "1rem"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "xxxs"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "xxs"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "xs"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "sm"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "md"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "lg"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "xl"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "xxl"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              type: "primary",
              size: "xxxl"
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
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
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_thumb, {
          round: "",
          type: "primary",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_hl_thumb, {
          round: "",
          type: "danger",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_hl_thumb, {
          round: "",
          type: "warning",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_hl_thumb, {
          round: "",
          type: "success",
          class: "m-r-md"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }), _createVNode(_component_hl_thumb, {
          round: "",
          type: "info",
          class: "m-r-md"
        }, {
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
    "hl-demo5": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "姓名", -1);

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_group = _resolveComponent("hl-group");

        return _openBlock(), _createBlock(_component_hl_group, {
          indent: "-0.5rem"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_thumb, {
              round: "",
              bordered: "",
              size: "md",
              type: "primary",
              effect: "light"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              bordered: "",
              size: "md",
              type: "danger",
              effect: "light"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              bordered: "",
              size: "md",
              type: "warning",
              effect: "light"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              bordered: "",
              size: "md",
              type: "success",
              effect: "light"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_thumb, {
              round: "",
              bordered: "",
              size: "md",
              type: "info",
              effect: "light"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
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
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "默认", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "自定义", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 加载中... ");

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_thumb, {
                  src: _ctx.src,
                  style: {
                    "width": "100%",
                    "height": "200px"
                  },
                  fit: "cover"
                }, null, 8, ["src"])];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_thumb, {
                  src: _ctx.src,
                  style: {
                    "width": "100%",
                    "height": "200px"
                  },
                  fit: "cover"
                }, {
                  placeholder: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["src"])];
              }),
              _: 1
            })];
          }),
          _: 1
        });
      }

      var democomponentExport = {
        data: function data() {
          return {
            src: '../assets/images/show_thumb.png'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "默认", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "自定义", -1);

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_icon = _resolveComponent("hl-icon");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_hl_thumb, {
                  src: "http://test.com/1.png",
                  style: {
                    "width": "100%",
                    "height": "100px"
                  }
                })];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-12"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_hl_thumb, {
                  src: "http://test.com/1.png",
                  style: {
                    "width": "100%",
                    "height": "100px"
                  }
                }, {
                  error: _withCtx(function () {
                    return [_createVNode(_component_hl_icon, {
                      name: "close"
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
    "hl-demo8": function () {
      var _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-thumb__preview"
      };

      function render(_ctx, _cache) {
        var _component_hl_thumb = _resolveComponent("hl-thumb");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_hl_thumb, {
          style: {
            "width": "100px",
            "height": "100px"
          },
          src: _ctx.url,
          fit: "cover",
          "preview-src-list": _ctx.srcList
        }, null, 8, ["src", "preview-src-list"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            url: '../assets/images/show_thumb.png',
            srcList: ['../assets/images/show_thumb.png', '../assets/images/show_thumb2.png']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/thumb.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/thumb.md



thumbvue_type_script_lang_ts.render = thumbvue_type_template_id_331011d1_render

/* harmony default export */ var thumb = __webpack_exports__["default"] = (thumbvue_type_script_lang_ts);

/***/ })

}]);