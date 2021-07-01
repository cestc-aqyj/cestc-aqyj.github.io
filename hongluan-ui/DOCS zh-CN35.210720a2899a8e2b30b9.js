(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/prefix.md?vue&type=template&id=082a92a6

var _hoisted_1 = {
  class: "doc-main-content"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<div class=\"doc-content\"><h2 id=\"zi-ding-yi-zu-jian-qian-zhui\"><a class=\"header-anchor\" href=\"#zi-ding-yi-zu-jian-qian-zhui\"></a> 自定义组件前缀</h2><p>通过改动源代码中的三处，即可轻松build出来不同前缀的组件库</p><h3 id=\"1-yuan-mabuild-common.js\"><a class=\"header-anchor\" href=\"#1-yuan-mabuild-common.js\"></a> 1，源码build/common.js</h3><pre><code class=\"hljs language-JS\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">prefix</span>: <span class=\"hljs-string\">&#39;hl&#39;</span>, <span class=\"hljs-comment\">//修改这里，全小写</span>\n}\n</code></pre><h3 id=\"2-yuan-mapackages-theme-src-common-config.scss\"><a class=\"header-anchor\" href=\"#2-yuan-mapackages-theme-src-common-config.scss\"></a> 2，源码packages/theme/src/common/config.scss</h3><pre><code class=\"hljs language-scss\"><span class=\"hljs-variable\">$conf-prefix</span>:                   <span class=\"hljs-string\">&quot;hl-&quot;</span> !default;        <span class=\"hljs-comment\">// 改这里，全小写</span>\n</code></pre><h3 id=\"3-yuan-mapackages-src-utils-constants.ts\"><a class=\"header-anchor\" href=\"#3-yuan-mapackages-src-utils-constants.ts\"></a> 3，源码packages/src/utils/constants.ts</h3><pre><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> PREFIX = <span class=\"hljs-string\">&#39;Hl&#39;</span> <span class=\"hljs-comment\">// 改这里，第一个字母请大写</span>\n</code></pre><p>DONE!</p></div>", 1);

function render(_ctx, _cache) {
  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/prefix.md?vue&type=template&id=082a92a6

// CONCATENATED MODULE: ./website/docs/zh-CN/prefix.md

const script = {}
script.render = render

/* harmony default export */ var prefix = __webpack_exports__["default"] = (script);

/***/ })

}]);