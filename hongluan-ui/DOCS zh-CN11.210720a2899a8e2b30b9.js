(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/custom-theme.md?vue&type=template&id=51f9dbf4

var _hoisted_1 = {
  class: "doc-main-content"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<div class=\"doc-content\"><h2 id=\"zi-ding-yi-zhu-ti\"><a class=\"header-anchor\" href=\"#zi-ding-yi-zhu-ti\"></a> 自定义主题</h2><p>Hongluan UI 默认提供一套主题。我们提供了两种方法，可以进行不同程度的样式自定义。</p><h3 id=\"zai-xiang-mu-zhong-gai-bian-scss-bian-liang\"><a class=\"header-anchor\" href=\"#zai-xiang-mu-zhong-gai-bian-scss-bian-liang\"></a> 在项目中改变 SCSS 变量</h3><p>Hongluan UI 的 theme 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Hongluan UI 的样式变量。新建一个样式文件，例如 <code>theme-variables.scss</code>，写入以下内容：</p><pre><code class=\"hljs language-html\">/* 改变主要文颜色变量 */\n$pageFontColor: teal;\n\n@import &quot;~hongluan-ui/packages/theme/src/index&quot;;\n</code></pre><p>之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Hongluan UI 编译好的 CSS 文件）：</p><pre><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> HongluanUI <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;hongluan-ui&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./theme-variables.scss&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(HongluanUI)\n</code></pre><h3 id=\"zi-ding-yiconfig-wen-jian\"><a class=\"header-anchor\" href=\"#zi-ding-yiconfig-wen-jian\"></a> 自定义config文件</h3><p>从hongluan-ui的包中拷贝主题的配置文件（node_modules/hongluan-ui/lib/theme/scss/common/config.scss）到相应的项目目录中去，然后可以完全修改里面的每个scss变量，配置文件中有详细的注释。 <br><br> 接着修改webpack的配置文件（以vue.config.js举例），参考代码如下：</p><pre><code class=\"hljs language-JS\">...\n<span class=\"hljs-attr\">css</span>: {\n  <span class=\"hljs-attr\">loaderOptions</span>: {\n    <span class=\"hljs-attr\">sass</span>: {\n      <span class=\"hljs-attr\">prependData</span>: <span class=\"hljs-string\">`@import &quot;@/assets/style/theme-config.scss&quot;;`</span>\n    },\n  }\n}\n...\n</code></pre><p>最后引入相应的Hongluan UI组件scss</p><pre><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>;\n<span class=\"hljs-keyword\">import</span> HongluanUI <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;hongluan-ui&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;hongluan-ui/lib/theme/scss/components.scss&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App);\napp.use(HongluanUI);\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>);\n</code></pre></div>", 1);

function render(_ctx, _cache) {
  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/custom-theme.md?vue&type=template&id=51f9dbf4

// CONCATENATED MODULE: ./website/docs/zh-CN/custom-theme.md

const script = {}
script.render = render

/* harmony default export */ var custom_theme = __webpack_exports__["default"] = (script);

/***/ })

}]);