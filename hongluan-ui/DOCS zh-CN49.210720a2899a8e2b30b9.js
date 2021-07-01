(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/transition.md?vue&type=template&id=0d493de1

var transitionvue_type_template_id_0d493de1_hoisted_1 = {
  class: "doc-main-content"
};
var transitionvue_type_template_id_0d493de1_hoisted_2 = {
  class: "doc-content"
};

var transitionvue_type_template_id_0d493de1_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h1", null, "内置过渡动画", -1);

var transitionvue_type_template_id_0d493de1_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Hongluan-UI 提供了一套流畅的 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  href: "https://cn.vuejs.org/v2/api/#transition"
}, "transition 动画"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 。它可以用到所有可以传入动画参数的属性中，你也可以直接使用它。")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fade-dan-ru-dan-chu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fade-dan-ru-dan-chu"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" fade 淡入淡出")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n<div style=\"display: flex; margin-top: 20px; height: 100px;\">\n  <transition name=\"fade\">\n    <div v-show=\"show\" class=\"transition-demo\">fade</div>\n  </transition>\n</div>\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "fall-luo-xia-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fall-luo-xia-xiao-guo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" fall 落下效果")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n<div style=\"display: flex; margin-top: 20px; height: 100px;\">\n  <transition name=\"fall\">\n    <div v-show=\"show\" class=\"transition-demo\">fall</div>\n  </transition>\n</div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "bounce-fan-dan-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bounce-fan-dan-xiao-guo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" bounce 反弹效果")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n<div style=\"display: flex; margin-top: 20px; height: 100px;\">\n  <transition name=\"bounce\">\n    <div v-show=\"show\" class=\"transition-demo\">bounce</div>\n  </transition>\n</div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "scale-suo-fang-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#scale-suo-fang-xiao-guo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" scale 缩放效果")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"scale\">\n        <div v-show=\"show\" class=\"transition-demo\">scale</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "roadster-pao-che-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#roadster-pao-che-xiao-guo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" roadster 跑车效果")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"roadster\">\n        <div v-show=\"show\" class=\"transition-demo\">roadster</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "slidetop-xiang-shang-hua-ru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slidetop-xiang-shang-hua-ru"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slideTop 向上滑入")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"slideTop\">\n        <div v-show=\"show\" class=\"transition-demo\">slideTop</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "slidedown-xiang-xia-hua-ru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slidedown-xiang-xia-hua-ru"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slideDown 向下滑入")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"slideDown\">\n        <div v-show=\"show\" class=\"transition-demo\">slideDown</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "slideleftside-cong-bian-yuan-xiang-zuo-hua-ru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slideleftside-cong-bian-yuan-xiang-zuo-hua-ru"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slideLeftSide 从边缘向左滑入")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"slideLeftSide\">\n        <div v-show=\"show\" class=\"transition-demo\">slideLeftSide</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "sliderightside-cong-bian-yuan-xiang-you-hua-ru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sliderightside-cong-bian-yuan-xiang-you-hua-ru"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slideRightSide 从边缘向右滑入")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"slideRightSide\">\n        <div v-show=\"show\" class=\"transition-demo\">slideRightSide</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "slidetopside-cong-bian-yuan-xiang-shang-hua-ru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slidetopside-cong-bian-yuan-xiang-shang-hua-ru"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slideTopSide 从边缘向上滑入")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"slideTopSide\">\n        <div v-show=\"show\" class=\"transition-demo\">slideTopSide</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "slidebottomside-cong-bian-yuan-xiang-xia-hua-ru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slidebottomside-cong-bian-yuan-xiang-xia-hua-ru"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slideBottomSide 从边缘向下滑入")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"slideBottomSide\">\n        <div v-show=\"show\" class=\"transition-demo\">slideBottomSide</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "jelly-guo-dong-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jelly-guo-dong-xiao-guo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" jelly 果冻效果")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("提供"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "jelly"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 效果。")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-button @click=\"show = !show\">Click Me</hl-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"jelly\">\n        <div v-show=\"show\" class=\"transition-demo\">jelly</div>\n      </transition>\n    </div>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "slide-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slide-xiao-guo"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" slide 效果")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("提供 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slideTop"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slideDown"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "slideTopDown"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 三种效果。")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <hl-button @click=\"show2 = !show2\">Click Me</hl-button>\n\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"slideTop\">\n        <div v-show=\"show2\" class=\"transition-demo\">.slideTop</div>\n      </transition>\n\n      <transition name=\"slideDown\">\n        <div v-show=\"show2\" class=\"transition-demo\">.slideDown</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: () => ({\n      show2: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "collapse-zhan-kai-zhe-die"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse-zhan-kai-zhe-die"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" collapse 展开折叠")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hl-collapse-transition"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 组件实现折叠展开效果。")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <hl-button @click=\"show3 = !show3\">Click Me</hl-button>\n\n    <div style=\"margin-top: 20px; height: 200px;\">\n      <hl-collapse-transition>\n        <div v-show=\"show3\">\n          <div class=\"transition-demo\">hl-collapse-transition</div>\n          <div class=\"transition-demo\">hl-collapse-transition</div>\n        </div>\n      </hl-collapse-transition>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: () => ({\n      show3: true,\n    }),\n  }\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"an-xu-yin-ru\"><a class=\"header-anchor\" href=\"#an-xu-yin-ru\"></a> 按需引入</h3><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// fade/zoom 等</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;hongluan-ui/lib/theme/scss/common/animate.scss&#39;</span>\n<span class=\"hljs-comment\">// collapse 展开折叠</span>\n<span class=\"hljs-keyword\">import</span> { HlCollapseTransition } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;hongluan-ui&#39;</span>\n<span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n\nVue.component(HlCollapseTransition.name, HlCollapseTransition)\n</code></pre>", 2);

function transitionvue_type_template_id_0d493de1_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_hl_demo11 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo11");

  var _component_hl_demo12 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo12");

  var _component_hl_demo13 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo13");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", transitionvue_type_template_id_0d493de1_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", transitionvue_type_template_id_0d493de1_hoisted_2, [transitionvue_type_template_id_0d493de1_hoisted_3, transitionvue_type_template_id_0d493de1_hoisted_4, _hoisted_5, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo10)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo11)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo12)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo13)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_36]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/transition.md?vue&type=template&id=0d493de1

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/transition.md?vue&type=script&lang=ts


/* harmony default export */ var transitionvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "fade"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "fade", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
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
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "fall"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "fall", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
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
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "bounce"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "bounce", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
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
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "scale"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "scale", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "roadster"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "roadster", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
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
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "slideTop"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "slideTop", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo6": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "slideDown"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "slideDown", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo7": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "slideLeftSide"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "slideLeftSide", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo8": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "slideRightSide"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "slideRightSide", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo9": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "slideTopSide"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "slideTopSide", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo10": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "slideBottomSide"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "slideBottomSide", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo11": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock(_Fragment, null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show = !_ctx.show;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "jelly"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, "jelly", 512), [[_vShow, _ctx.show]])];
          }),
          _: 1
        })])], 64);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo12": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _Transition = vue_esm_browser_prod["e" /* Transition */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_3 = {
        class: "transition-demo"
      };
      var _hoisted_4 = {
        class: "transition-demo"
      };

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show2 = !_ctx.show2;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "slideTop"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_3, ".slideTop", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "slideDown"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_4, ".slideDown", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show2: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo13": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _vShow = vue_esm_browser_prod["bb" /* vShow */],
          _withDirectives = vue_esm_browser_prod["fb" /* withDirectives */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      var _hoisted_2 = {
        style: {
          "margin-top": "20px",
          "height": "200px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "transition-demo"
      }, "hl-collapse-transition", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "transition-demo"
      }, "hl-collapse-transition", -1);

      function render(_ctx, _cache) {
        var _component_hl_button = _resolveComponent("hl-button");

        var _component_hl_collapse_transition = _resolveComponent("hl-collapse-transition");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_hl_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show3 = !_ctx.show3;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode("div", _hoisted_2, [_createVNode(_component_hl_collapse_transition, null, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", null, [_hoisted_3, _hoisted_4], 512), [[_vShow, _ctx.show3]])];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show3: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/transition.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/transition.md



transitionvue_type_script_lang_ts.render = transitionvue_type_template_id_0d493de1_render

/* harmony default export */ var transition = __webpack_exports__["default"] = (transitionvue_type_script_lang_ts);

/***/ })

}]);