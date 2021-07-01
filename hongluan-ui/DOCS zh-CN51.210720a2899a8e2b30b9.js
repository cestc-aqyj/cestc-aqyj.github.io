(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/typography.md?vue&type=template&id=c4d56ace

var typographyvue_type_template_id_c4d56ace_hoisted_1 = {
  class: "doc-main-content"
};
var typographyvue_type_template_id_c4d56ace_hoisted_2 = {
  class: "doc-content"
};

var typographyvue_type_template_id_c4d56ace_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h1>Typography 排版</h1><p>鸿鸾重构了全部的 HTML 样式，这样有利于在不同浏览器上的统一表现。</p><h2 id=\"css3-he-mo-xing\"><a class=\"header-anchor\" href=\"#css3-he-mo-xing\"></a> CSS3 盒模型</h2><p>默认在全局使用了 border-box 属性后，将来你在页面排版的时候不会因为给元素加上 padding 而增加他的尺寸。</p><h2 id=\"zi-ti\"><a class=\"header-anchor\" href=\"#zi-ti\"></a> 字体</h2><p>通常我们使用非衬线字体作为页面的主体文字样式。非衬线字体，如：微软雅黑。衬线字体如：宋体等。</p><pre><code class=\"hljs language-css\"><span class=\"hljs-selector-tag\">body</span> {\n  <span class=\"hljs-attribute\">font-family</span>: \n  Noto Sans, \n  <span class=\"hljs-string\">&#39;Helvetica Neue&#39;</span>, \n  Arial, \n  Roboto, \n  <span class=\"hljs-string\">&#39;PingFang SC&#39;</span>, \n  <span class=\"hljs-string\">&#39;Hiragino Sans GB&#39;</span>, \n  <span class=\"hljs-string\">&#39;WenQuanYi Micro Hei&#39;</span>, \n  <span class=\"hljs-string\">&#39;Microsoft Yahei&#39;</span>, \n  sans-serif;\n}\n</code></pre><h2 id=\"biao-ti\"><a class=\"header-anchor\" href=\"#biao-ti\"></a> 标题</h2><p>使用 &lt;h1&gt; 到 &lt;h6&gt; 标签来定义你的标题。</p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span>&gt;</span>h1 标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>h2 标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>h3 标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h4</span>&gt;</span>h4 标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h4</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h5</span>&gt;</span>h5 标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h5</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h6</span>&gt;</span>h6 标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h6</span>&gt;</span>\n</code></pre><h2 id=\"biao-ti-nei-de-small\"><a class=\"header-anchor\" href=\"#biao-ti-nei-de-small\"></a> 标题内的 &lt;small&gt;</h2><p>使用 <code>&lt;small&gt;</code> 标签来定义你的副标题。</p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h1</span>&gt;</span>h1 标题 <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">small</span>&gt;</span>副标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">small</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h2</span>&gt;</span>h2 标题 <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">small</span>&gt;</span>副标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">small</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h2</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>h3 标题 <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">small</span>&gt;</span>副标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">small</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h4</span>&gt;</span>h4 标题 <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">small</span>&gt;</span>副标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">small</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h4</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h5</span>&gt;</span>h5 标题 <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">small</span>&gt;</span>副标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">small</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h5</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h6</span>&gt;</span>h6 标题 <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">small</span>&gt;</span>副标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">small</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h6</span>&gt;</span>\n</code></pre><h2 id=\"fen-ge-xian-hr\"><a class=\"header-anchor\" href=\"#fen-ge-xian-hr\"></a> 分隔线 &lt;hr&gt;</h2><p>除了基础的实线，鸿鸾还新增了虚线和点线样式。</p>", 15);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "实线\n<hr />\n虚线\n<hr class=\"dashed\" />\n点线\n<hr class=\"dotted\" />\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "duan-luo-biao-qian-p"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#duan-luo-biao-qian-p"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 段落标签 <p>")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "段落标签也新增了 首行缩进 和 两端对齐 的样式。", -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<hl-row gap=\"md\">\n  <hl-col span=\"col-md-8\">\n    <h5>默认样式</h5>\n    <p>\n      鸿鸾是一款高性能，轻量级，易使用的前端开源框架。鸿鸾使用了大量的HTML5和CSS3特性.所以在使用时要考虑你的项目是否要兼容IE8以下浏览器。\n    </p>\n  </hl-col>\n  <hl-col span=\"col-md-8\">\n    <h5>首行缩进</h5>\n    <p class=\"indent\">\n      鸿鸾是一款高性能，轻量级，易使用的前端开源框架。鸿鸾使用了大量的HTML5和CSS3特性.所以在使用时要考虑你的项目是否要兼容IE8以下浏览器。\n    </p>\n  </hl-col>\n  <hl-col span=\"col-md-8\">\n    <h5>两端对齐</h5>\n    <p class=\"justify\">\n      鸿鸾是一款高性能，轻量级，易使用的前端开源框架。鸿鸾使用了大量的HTML5和CSS3特性.所以在使用时要考虑你的项目是否要兼容IE8以下浏览器。\n    </p>\n  </hl-col>\n</hl-row>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "yin-yong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yin-yong"
}), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 引用")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"example\">\n  <blockquote>\n    <p>鸿鸾UI的组件样式式由Mixin生成的，你也可以自定义样式生成文件。</p>\n  </blockquote>\n</div>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"qi-ta-yuan-su\"><a class=\"header-anchor\" href=\"#qi-ta-yuan-su\"></a> 其他元素</h2><table class=\"hl-simple-table compact\"><thead><tr><th style=\"width:12rem;\">标签</th><th>描述</th></tr></thead><tbody><tr><td><code>&lt;a&gt;</code></td><td> 将文本转换为超文本使用 <a href=\"#\">a 标签</a>。 </td></tr><tr><td><code>&lt;em&gt;</code></td><td> 强调文本使用 <em>em 标签</em>。 </td></tr><tr><td><code>&lt;strong&gt;</code></td><td> 强调任何额外的更重要文本使用 <strong>strong 标签</strong>。 </td></tr><tr><td><code>&lt;code&gt;</code></td><td> 定义内联代码片段使用 <code>code 标签</code>。 </td></tr><tr><td><code>&lt;del&gt;</code></td><td> 标记文档中已被修改或删除的文本使用 <del>del 标签</del>。 </td></tr><tr><td><code>&lt;ins&gt;</code></td><td> 标记文档中插入的文本使用 <ins>ins 标签</ins>。 </td></tr><tr><td><code>&lt;mark&gt;</code></td><td> 高亮显示文本使用 <mark>mark 标签</mark>，它没有任何语义含义。 </td></tr><tr><td><code>&lt;q&gt;</code></td><td> 定义引入的语录在 <q> q 标签 <q>里面使用</q> q 标签 </q>。 </td></tr><tr><td><code>&lt;abbr&gt;</code></td><td> 定义一个标题的缩写使用 <abbr title=\"Abbreviation Element\">abbr 标签</abbr>。 </td></tr><tr><td><code>&lt;dfn&gt;</code></td><td> 定义一个项目术语名称使用 <dfn title=\"Defines a definition term\">dfn 标签</dfn>。 </td></tr><tr><td><code>&lt;small&gt;</code></td><td> 缩小显示不重要的文本使用 <small>small 标签</small>。 </td></tr></tbody></table><h2 id=\"bian-jie-pai-ban-yang-shi-can-kao-biao\"><a class=\"header-anchor\" href=\"#bian-jie-pai-ban-yang-shi-can-kao-biao\"></a> 便捷排版样式参考表</h2><p>有些样式可能你在排版种仅只用一次，通常会选择使用内联样式的写法，或者使用鸿鸾提供的常用排版类。</p>", 4);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "  <div class=\"w-xl bg-danger light-5 p-md text-left radius-md text-danger clearfix\">\n    <div class=\"p-md float-left bg-danger light-2 radius-sm text-light\">Left</div>\n    <div class=\"float-left m-l-md\">\n      <div class=\"font-bold font-lg m-t-xxs\">Title</div>\n      <p>content</p>\n    </div>\n  </div>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h2 id=\"wen-ben-lei\"><a class=\"header-anchor\" href=\"#wen-ben-lei\"></a> 文本类</h2><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.text-left</code></td><td>text-align: left;</td></tr><tr><td><code>.text-right</code></td><td>text-align: right;</td></tr><tr><td><code>.text-center</code></td><td>text-align: center;</td></tr><tr><td><code>.font-bold</code></td><td>font-weight: 700;</td></tr><tr><td><code>.font-sm</code></td><td>font-size: 12px;</td></tr><tr><td><code>.font-md</code></td><td>font-size: 14px;</td></tr><tr><td><code>.font-lg</code></td><td>font-weight: 16px;</td></tr><tr><td><code>.ellipsis</code></td><td><div class=\"ellipsis\" style=\"--line:2;\"> 文本超出父元素宽度后用省略号隐藏。常用语新闻简介等长文本内容，你需要为它设置 <code>--line:2</code> 的内联样式来定义它的行数限制，如：<code>style=&quot;--line:2&quot;</code></div></td></tr><tr><td><code>.uppercase</code></td><td>定义仅有大写字母。</td></tr><tr><td><code>.lowercase</code></td><td>定义无大写字母，仅有小写字母。</td></tr><tr><td><code>.capitalize</code></td><td>文本中的每个单词以大写字母开头</td></tr><tr><td><code>.price</code></td><td> 为文本加上价格单位 <code>.yuan</code> <code>.dollar</code> <code>.euro</code> 例： <code>&lt;span class=&quot;price yuan&quot;&gt;&lt;/span&gt;</code></td></tr></tbody></table><h2 id=\"xiu-shi-lei\"><a class=\"header-anchor\" href=\"#xiu-shi-lei\"></a> 修饰类</h2><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.text-left</code></td><td>text-align: left;</td></tr></tbody></table><h2 id=\"bu-ju-lei\"><a class=\"header-anchor\" href=\"#bu-ju-lei\"></a> 布局类</h2><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.float-left</code></td><td>float: left;</td></tr><tr><td><code>.float-right</code></td><td>float: right;</td></tr><tr><td><code>.clearfix</code></td><td>清除浮动</td></tr><tr><td><code>.hidden</code></td><td>使用<code>display:none</code>来隐藏元素，同时支持响应式标签例如：<code>hidden-md</code></td></tr></tbody></table><h2 id=\"dan-xing-bu-ju-lei\"><a class=\"header-anchor\" href=\"#dan-xing-bu-ju-lei\"></a> 弹性布局类</h2><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.static</code></td><td>可使拥有<code>flex-grow</code>属性的某个成员不再响应自动宽度和高度</td></tr><tr><td><code>.no-grow</code></td><td>定义flex如果存在剩余空间，也不放大子元素。</td></tr><tr><td><code>.no-shrink</code></td><td>定义flex如果剩余空间不足，也不缩小子元素</td></tr><tr><td><code>.item-top</code></td><td>align-items: flex-start;</td></tr><tr><td><code>.item-middle</code></td><td>align-items: center;</td></tr><tr><td><code>.item-bottom</code></td><td>align-items: flex-end;</td></tr><tr><td><code>.item-left</code></td><td>justify-content: flex-start;</td></tr><tr><td><code>.item-center</code></td><td>justify-content: center;</td></tr><tr><td><code>.item-right</code></td><td>justify-content: flex-end;</td></tr><tr><td><code>.item-around</code></td><td>justify-content: space-around;</td></tr><tr><td><code>.item-between</code></td><td>justify-content: space-between;</td></tr><tr><td><code>.order-{1~24}</code></td><td>使用order-1 到 order-24 排序，还可以使用<code>.order-first</code> <code>.order-last</code> <code>.order-none</code>来快速定义</td></tr></tbody></table><h2 id=\"chi-cun-lei\"><a class=\"header-anchor\" href=\"#chi-cun-lei\"></a> 尺寸类</h2><div class=\"hl-row\"><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.w-none</code></td><td>width: 0</td></tr><tr><td><code>.w-xxs</code></td><td>width: 40px</td></tr><tr><td><code>.w-xs</code></td><td>width: 80px</td></tr><tr><td><code>.w-sm</code></td><td>width: 120px</td></tr><tr><td><code>.w-md</code></td><td>width: 160px</td></tr><tr><td><code>.w-lg</code></td><td>width: 240px</td></tr><tr><td><code>.w-xl</code></td><td>width: 320px</td></tr><tr><td><code>.w-xxl</code></td><td>width: 400px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.w-min-none</code></td><td>min-width: 0</td></tr><tr><td><code>.w-min-xxs</code></td><td>min-width: 40px</td></tr><tr><td><code>.w-min-xs</code></td><td>min-width: 80px</td></tr><tr><td><code>.w-min-sm</code></td><td>min-width: 120px</td></tr><tr><td><code>.w-min-md</code></td><td>min-width: 160px</td></tr><tr><td><code>.w-min-lg</code></td><td>min-width: 240px</td></tr><tr><td><code>.w-min-xl</code></td><td>min-width: 320px</td></tr><tr><td><code>.w-min-xxl</code></td><td>min-width: 400px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.w-max-none</code></td><td>max-width: 0</td></tr><tr><td><code>.w-max-xxs</code></td><td>max-width: 40px</td></tr><tr><td><code>.w-max-xs</code></td><td>max-width: 80px</td></tr><tr><td><code>.w-max-sm</code></td><td>max-width: 120px</td></tr><tr><td><code>.w-max-md</code></td><td>max-width: 160px</td></tr><tr><td><code>.w-max-lg</code></td><td>max-width: 240px</td></tr><tr><td><code>.w-max-xl</code></td><td>max-width: 320px</td></tr><tr><td><code>.w-max-xxl</code></td><td>max-width: 400px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.radius-none</code></td><td>radius: 0</td></tr><tr><td><code>.radius-xxs</code></td><td>radius: 4px</td></tr><tr><td><code>.radius-xs</code></td><td>radius: 8px</td></tr><tr><td><code>.radius-sm</code></td><td>radius: 12px</td></tr><tr><td><code>.radius-md</code></td><td>radius: 16px</td></tr><tr><td><code>.radius-lg</code></td><td>radius: 24px</td></tr><tr><td><code>.radius-xl</code></td><td>radius: 32px</td></tr><tr><td><code>.radius-xxl</code></td><td>radius: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.p-none</code></td><td>padding: 0</td></tr><tr><td><code>.p-xxs</code></td><td>padding: 4px</td></tr><tr><td><code>.p-xs</code></td><td>padding: 8px</td></tr><tr><td><code>.p-sm</code></td><td>padding: 12px</td></tr><tr><td><code>.p-md</code></td><td>padding: 16px</td></tr><tr><td><code>.p-lg</code></td><td>padding: 24px</td></tr><tr><td><code>.p-xl</code></td><td>padding: 32px</td></tr><tr><td><code>.p-xxl</code></td><td>padding: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.p-l-none</code></td><td>padding-left: 0</td></tr><tr><td><code>.p-l-xxs</code></td><td>padding-left: 4px</td></tr><tr><td><code>.p-l-xs</code></td><td>padding-left: 8px</td></tr><tr><td><code>.p-l-sm</code></td><td>padding-left: 12px</td></tr><tr><td><code>.p-l-md</code></td><td>padding-left: 16px</td></tr><tr><td><code>.p-l-lg</code></td><td>padding-left: 24px</td></tr><tr><td><code>.p-l-xl</code></td><td>padding-left: 32px</td></tr><tr><td><code>.p-l-xxl</code></td><td>padding-left: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.p-r-none</code></td><td>padding-right: 0</td></tr><tr><td><code>.p-r-xxs</code></td><td>padding-right: 4px</td></tr><tr><td><code>.p-r-xs</code></td><td>padding-right: 8px</td></tr><tr><td><code>.p-r-sm</code></td><td>padding-right: 12px</td></tr><tr><td><code>.p-r-md</code></td><td>padding-right: 16px</td></tr><tr><td><code>.p-r-lg</code></td><td>padding-right: 24px</td></tr><tr><td><code>.p-r-xl</code></td><td>padding-right: 32px</td></tr><tr><td><code>.p-r-xxl</code></td><td>padding-right: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.p-t-none</code></td><td>padding-top: 0</td></tr><tr><td><code>.p-t-xxs</code></td><td>padding-top: 4px</td></tr><tr><td><code>.p-t-xs</code></td><td>padding-top: 8px</td></tr><tr><td><code>.p-t-sm</code></td><td>padding-top: 12px</td></tr><tr><td><code>.p-t-md</code></td><td>padding-top: 16px</td></tr><tr><td><code>.p-t-lg</code></td><td>padding-top: 24px</td></tr><tr><td><code>.p-t-xl</code></td><td>padding-top: 32px</td></tr><tr><td><code>.p-t-xxl</code></td><td>padding-top: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.p-b-none</code></td><td>padding-bottom: 0</td></tr><tr><td><code>.p-b-xxs</code></td><td>padding-bottom: 4px</td></tr><tr><td><code>.p-b-xs</code></td><td>padding-bottom: 8px</td></tr><tr><td><code>.p-b-sm</code></td><td>padding-bottom: 12px</td></tr><tr><td><code>.p-b-md</code></td><td>padding-bottom: 16px</td></tr><tr><td><code>.p-b-lg</code></td><td>padding-bottom: 24px</td></tr><tr><td><code>.p-b-xl</code></td><td>padding-bottom: 32px</td></tr><tr><td><code>.p-b-xxl</code></td><td>padding-bottom: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.m-none</code></td><td>margin: 0</td></tr><tr><td><code>.m-xxs</code></td><td>margin: 4px</td></tr><tr><td><code>.m-xs</code></td><td>margin: 8px</td></tr><tr><td><code>.m-sm</code></td><td>margin: 12px</td></tr><tr><td><code>.m-md</code></td><td>margin: 16px</td></tr><tr><td><code>.m-lg</code></td><td>margin: 24px</td></tr><tr><td><code>.m-xl</code></td><td>margin: 32px</td></tr><tr><td><code>.m-xxl</code></td><td>margin: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.m-l-none</code></td><td>margin-left: 0</td></tr><tr><td><code>.m-l-xxs</code></td><td>margin-left: 4px</td></tr><tr><td><code>.m-l-xs</code></td><td>margin-left: 8px</td></tr><tr><td><code>.m-l-sm</code></td><td>margin-left: 12px</td></tr><tr><td><code>.m-l-md</code></td><td>margin-left: 16px</td></tr><tr><td><code>.m-l-lg</code></td><td>margin-left: 24px</td></tr><tr><td><code>.m-l-xl</code></td><td>margin-left: 32px</td></tr><tr><td><code>.m-l-xxl</code></td><td>margin-left: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.m-r-none</code></td><td>margin-right: 0</td></tr><tr><td><code>.m-r-xxs</code></td><td>margin-right: 4px</td></tr><tr><td><code>.m-r-xs</code></td><td>margin-right: 8px</td></tr><tr><td><code>.m-r-sm</code></td><td>margin-right: 12px</td></tr><tr><td><code>.m-r-md</code></td><td>margin-right: 16px</td></tr><tr><td><code>.m-r-lg</code></td><td>margin-right: 24px</td></tr><tr><td><code>.m-r-xl</code></td><td>margin-right: 32px</td></tr><tr><td><code>.m-r-xxl</code></td><td>margin-right: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.m-t-none</code></td><td>margin-top: 0</td></tr><tr><td><code>.m-t-xxs</code></td><td>margin-top: 4px</td></tr><tr><td><code>.m-t-xs</code></td><td>margin-top: 8px</td></tr><tr><td><code>.m-t-sm</code></td><td>margin-top: 12px</td></tr><tr><td><code>.m-t-md</code></td><td>margin-top: 16px</td></tr><tr><td><code>.m-t-lg</code></td><td>margin-top: 24px</td></tr><tr><td><code>.m-t-xl</code></td><td>margin-top: 32px</td></tr><tr><td><code>.m-t-xxl</code></td><td>margin-top: 40px</td></tr></tbody></table></div><div class=\"col-md-12 m-b-md\"><table class=\"hl-simple-table bordered striped compact hover\"><thead><tr><th style=\"width:12rem;\">类名</th><th>描述</th></tr></thead><tbody><tr><td><code>.m-b-none</code></td><td>margin-bottom: 0</td></tr><tr><td><code>.m-b-xxs</code></td><td>margin-bottom: 4px</td></tr><tr><td><code>.m-b-xs</code></td><td>margin-bottom: 8px</td></tr><tr><td><code>.m-b-sm</code></td><td>margin-bottom: 12px</td></tr><tr><td><code>.m-b-md</code></td><td>margin-bottom: 16px</td></tr><tr><td><code>.m-b-lg</code></td><td>margin-bottom: 24px</td></tr><tr><td><code>.m-b-xl</code></td><td>margin-bottom: 32px</td></tr><tr><td><code>.m-b-xxl</code></td><td>margin-bottom: 40px</td></tr></tbody></table></div></div>", 10);

function typographyvue_type_template_id_c4d56ace_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hl_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_hl_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo1");

  var _component_hl_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo2");

  var _component_hl_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("hl-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", typographyvue_type_template_id_c4d56ace_hoisted_1, [Object(vue_esm_browser_prod["o" /* createVNode */])("div", typographyvue_type_template_id_c4d56ace_hoisted_2, [typographyvue_type_template_id_c4d56ace_hoisted_3, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_hl_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29]), Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/typography.md?vue&type=template&id=c4d56ace

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/typography.md?vue&type=script&lang=ts


/* harmony default export */ var typographyvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "hl-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("实线 ");

      var _hoisted_2 = /*#__PURE__*/_createVNode("hr", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 虚线 ");

      var _hoisted_4 = /*#__PURE__*/_createVNode("hr", {
        class: "dashed"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createTextVNode(" 点线 ");

      var _hoisted_6 = /*#__PURE__*/_createVNode("hr", {
        class: "dotted"
      }, null, -1);

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock(_Fragment, null, [_hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6], 64);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo1": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("h5", null, "默认样式", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, " 鸿鸾是一款高性能，轻量级，易使用的前端开源框架。鸿鸾使用了大量的HTML5和CSS3特性.所以在使用时要考虑你的项目是否要兼容IE8以下浏览器。 ", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("h5", null, "首行缩进", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("p", {
        class: "indent"
      }, " 鸿鸾是一款高性能，轻量级，易使用的前端开源框架。鸿鸾使用了大量的HTML5和CSS3特性.所以在使用时要考虑你的项目是否要兼容IE8以下浏览器。 ", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("h5", null, "两端对齐", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("p", {
        class: "justify"
      }, " 鸿鸾是一款高性能，轻量级，易使用的前端开源框架。鸿鸾使用了大量的HTML5和CSS3特性.所以在使用时要考虑你的项目是否要兼容IE8以下浏览器。 ", -1);

      function render(_ctx, _cache) {
        var _component_hl_col = _resolveComponent("hl-col");

        var _component_hl_row = _resolveComponent("hl-row");

        return _openBlock(), _createBlock(_component_hl_row, {
          gap: "md"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_hl_col, {
              span: "col-md-8"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6];
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
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "example"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("blockquote", null, [/*#__PURE__*/_createVNode("p", null, "鸿鸾UI的组件样式式由Mixin生成的，你也可以自定义样式生成文件。")], -1);

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock("div", _hoisted_1, [_hoisted_2]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "hl-demo3": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "w-xl bg-danger light-5 p-md text-left radius-md text-danger clearfix"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "p-md float-left bg-danger light-2 radius-sm text-light"
      }, "Left", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "float-left m-l-md"
      }, [/*#__PURE__*/_createVNode("div", {
        class: "font-bold font-lg m-t-xxs"
      }, "Title"), /*#__PURE__*/_createVNode("p", null, "content")], -1);

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock("div", _hoisted_1, [_hoisted_2, _hoisted_3]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/typography.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/typography.md



typographyvue_type_script_lang_ts.render = typographyvue_type_template_id_c4d56ace_render

/* harmony default export */ var typography = __webpack_exports__["default"] = (typographyvue_type_script_lang_ts);

/***/ })

}]);