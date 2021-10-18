import{H as a,o as n,C as l,v as p,au as e}from"./vue.450bc1d0.js";import{_ as c}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const h={},m={class:"doc-main-content"},r=e(`<div class="doc-content"><h1>\u81EA\u5B9A\u4E49\u4E3B\u9898</h1><p>Hongluan UI \u63D0\u4F9B\u4E24\u5957\uFF08\u9ED8\u8BA4\u548C\u6697\u8272\uFF09\u4E3B\u9898\u3002\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E0D\u540C\u7A0B\u5EA6\u7684\u6837\u5F0F\u81EA\u5B9A\u4E49\u3002</p><h2 id="zai-xiang-mu-zhong-gai-bian-scss-bian-liang"><a class="header-anchor" href="#zai-xiang-mu-zhong-gai-bian-scss-bian-liang"></a> \u5728\u9879\u76EE\u4E2D\u6539\u53D8 SCSS \u53D8\u91CF</h2><p>Hongluan UI \u7684 theme \u4F7F\u7528 SCSS \u7F16\u5199\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E5F\u4F7F\u7528\u4E86 SCSS\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u6539\u53D8 Hongluan UI \u7684\u6837\u5F0F\u53D8\u91CF\u3002\u65B0\u5EFA\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F8B\u5982 <code>theme-variables.scss</code>\uFF0C\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF08\u6CE8\u610F\uFF1A\u9700\u8981\u9879\u76EE\u652F\u6301 sass math \u5E93\uFF09\uFF1A</p><pre><code class="hljs language-scss"><span class="hljs-comment">// \u6539\u53D8\u4E3B\u8981\u9875\u9762\u989C\u8272\u53D8\u91CF</span>
<span class="hljs-variable">$pageFontColor</span>: teal;
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/index&#39;</span>;
<span class="hljs-comment">// \u6216\u8005</span>
<span class="hljs-comment">// @import &#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/common/config&#39;; </span>
<span class="hljs-comment">// @import &#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/components&#39;;</span>
</code></pre><p>\u4E4B\u540E\uFF0C\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u76F4\u63A5\u5F15\u5165\u4EE5\u4E0A\u6837\u5F0F\u6587\u4EF6\u5373\u53EF\uFF08\u65E0\u9700\u5F15\u5165 Hongluan UI \u7F16\u8BD1\u597D\u7684 CSS \u6587\u4EF6\uFF09\uFF1A</p><pre><code class="hljs language-JS"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> HongluanUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./theme-variables.scss&#39;</span>
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp(App)
app.use(HongluanUI)
</code></pre><h2 id="an-se-zhu-ti"><a class="header-anchor" href="#an-se-zhu-ti"></a> \u6697\u8272\u4E3B\u9898</h2><p>\u9E3F\u9E3E\u9ED8\u8BA4\u63D0\u4F9B\u4E00\u5957\u6697\u8272\u4E3B\u9898\uFF0C\u5F15\u5165\u76F8\u5E94\u7684config-dark.scss\u5373\u53EF</p><pre><code class="hljs language-scss"><span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/common/config-dark&#39;</span>; 
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/components&#39;</span>;
</code></pre><h2 id="ke-ding-zhi-de-bian-liang"><a class="header-anchor" href="#ke-ding-zhi-de-bian-liang"></a> \u53EF\u5B9A\u5236\u7684\u53D8\u91CF</h2><pre><code class="hljs language-scss">
<span class="hljs-comment">//+----------------------------------------------------------------------</span>
<span class="hljs-comment">//  Config \u57FA\u7840\u914D\u7F6E</span>
<span class="hljs-comment">//+----------------------------------------------------------------------</span>
<span class="hljs-variable">$conf-darkTheme</span>:            false !default;        <span class="hljs-comment">// \u5F00\u542F\u6697\u8272\u4E3B\u9898\u7279\u5F81</span>
<span class="hljs-variable">$conf-select</span>:               false !default;        <span class="hljs-comment">// \u5F00\u542F\u5185\u5BB9\u4FDD\u62A4</span>
<span class="hljs-variable">$conf-transition</span>:           true !default;         <span class="hljs-comment">// \u5F00\u542F\u6E10\u663E\u6548\u679C</span>
<span class="hljs-variable">$conf-rem</span>:                  false !default;        <span class="hljs-comment">// \u5F00\u542Frem\u4F5C\u4E3A\u5C3A\u5BF8\u5355\u4F4D</span>

<span class="hljs-comment">//+----------------------------------------------------------------------</span>
<span class="hljs-comment">// Pages \u5168\u5C40\u6837\u5F0F\u8BBE\u7F6E</span>
<span class="hljs-comment">//+----------------------------------------------------------------------</span>

<span class="hljs-comment">//--\u5B57\u4F53------------------------------------------------------------------</span>
<span class="hljs-variable">$pageFontFamily</span>:            
                            -apple-system,
                            BlinkMacSystemFont,
                            segoe ui,
                            Roboto,
                            helvetica neue,
                            Arial,
                            Noto Sans,
                            sans-serif !default;

<span class="hljs-variable">$pageRemRadix</span>:              <span class="hljs-number">100px</span> !default;                                  <span class="hljs-comment">// \u5C3A\u5BF8\u57FA\u6570\uFF08\u7528\u4E8E\u8F93\u51FArem\u5355\u4F4D\uFF09                         </span>
<span class="hljs-variable">$pageMainWidth</span>:             <span class="hljs-number">1440px</span> !default;                                 <span class="hljs-comment">// \u9875\u9762\u4E3B\u4F53\u5BBD\u5EA6</span>
<span class="hljs-variable">$pageMainColor</span>:             <span class="hljs-number">#00A3FF</span> !default;                                <span class="hljs-comment">// \u9875\u9762\u4E3B\u8272\u7CFB(\u54C1\u724C\u8272)</span>
<span class="hljs-variable">$pageDuration</span>:              <span class="hljs-number">0.3s</span> !default;                                   <span class="hljs-comment">// \u901A\u7528\u52A8\u753B\u6301\u7EED\u65F6\u95F4</span>
<span class="hljs-variable">$pageTiming</span>:                ease !default;                                   <span class="hljs-comment">// \u901A\u7528\u52A8\u753B\u66F2\u7EBF</span>

<span class="hljs-comment">//--\u80CC\u666F\u989C\u8272---------------------------------------------------------------</span>
<span class="hljs-variable">$pageBG-Body</span>:               <span class="hljs-number">#FFFFFF</span> !default;                                <span class="hljs-comment">// \u9875\u9762\u80CC\u666F (\u4E3B\u4F53)</span>
<span class="hljs-variable">$pageBG-Content</span>:            <span class="hljs-number">#FFFFFF</span> !default;                                <span class="hljs-comment">// \u9875\u9762\u80CC\u666F (\u5185\u5BB9\u533A)</span>
<span class="hljs-variable">$pageBG-Light</span>:              <span class="hljs-number">#F6F9FB</span> !default;                                <span class="hljs-comment">// \u9875\u9762\u80CC\u666F (\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u8303\u56F4)</span>
<span class="hljs-variable">$pageBG-Popup</span>:              <span class="hljs-number">#FFFFFF</span> !default;                                <span class="hljs-comment">// \u9875\u9762\u5F39\u7A97\u80CC\u666F\uFF08\u6D6E\u5C42\u3001\u5F39\u7A97\u7B49\uFF09</span>
<span class="hljs-variable">$pageBG-Element</span>:            <span class="hljs-number">#FFFFFF</span> !default;                                <span class="hljs-comment">// \u9875\u9762\u7EC4\u4EF6\u5143\u7D20\u80CC\u666F</span>
<span class="hljs-variable">$pageBG-Hover</span>:              <span class="hljs-number">#F6F9FB</span> !default;                                <span class="hljs-comment">// \u9875\u9762\u901A\u7528\u60AC\u505C\u80CC\u666F</span>
<span class="hljs-variable">$pageBG-Mask</span>:               rgba(<span class="hljs-number">#212435</span>, <span class="hljs-number">0.5</span>);                              <span class="hljs-comment">// \u906E\u7F69\u989C\u8272</span>

<span class="hljs-comment">//--\u6587\u672C\u5C5E\u6027---------------------------------------------------------------</span>
<span class="hljs-variable">$pageFontSize-Sm</span>:           <span class="hljs-number">12px</span> !default;                                   <span class="hljs-comment">// \u5C0F\u6587\u672C\u5C3A\u5BF8</span>
<span class="hljs-variable">$pageFontSize-Md</span>:           <span class="hljs-number">14px</span> !default;                                   <span class="hljs-comment">// \u4E2D\u6587\u672C\u5C3A\u5BF8</span>
<span class="hljs-variable">$pageFontSize-Lg</span>:           <span class="hljs-number">16px</span> !default;                                   <span class="hljs-comment">// \u5927\u6587\u672C\u5C3A\u5BF8</span>
<span class="hljs-variable">$pageFontSize-Xl</span>:           <span class="hljs-number">18px</span> !default;                                   <span class="hljs-comment">// \u52A0\u5927\u6587\u672C\u5C3A\u5BF8</span>

<span class="hljs-comment">//--\u6587\u672C\u884C\u9AD8---------------------------------------------------------------</span>
<span class="hljs-variable">$pageFontLineHeight-Sm</span>:     <span class="hljs-number">20px</span> !default;                                   <span class="hljs-comment">// \u5C0F\u6587\u672C\u884C\u9AD8</span>
<span class="hljs-variable">$pageFontLineHeight-Md</span>:     <span class="hljs-number">22px</span> !default;                                   <span class="hljs-comment">// \u4E2D\u6587\u672C\u884C\u9AD8</span>
<span class="hljs-variable">$pageFontLineHeight-Lg</span>:     <span class="hljs-number">24px</span> !default;                                   <span class="hljs-comment">// \u5927\u6587\u672C\u884C\u9AD8</span>
<span class="hljs-variable">$pageFontLineHeight-Xl</span>:     <span class="hljs-number">26px</span> !default;                                   <span class="hljs-comment">// \u52A0\u5927\u6587\u672C\u884C\u9AD8</span>

<span class="hljs-comment">//--\u6587\u672C\u91CD\u91CF---------------------------------------------------------------</span>
<span class="hljs-variable">$pageFontWeight</span>:            <span class="hljs-number">400</span> !default;                                    <span class="hljs-comment">// \u57FA\u7840\u6587\u672C\u5B57\u91CD</span>
<span class="hljs-variable">$pageFontWeight-Bold</span>:       <span class="hljs-number">500</span> !default;                                    <span class="hljs-comment">// \u7C97\u4F53\u6587\u672C\u5B57\u91CD</span>

<span class="hljs-comment">//--\u6587\u672C\u989C\u8272---------------------------------------------------------------</span>
<span class="hljs-variable">$pageFontColor</span>:             <span class="hljs-number">#5E6278</span> !default;                                <span class="hljs-comment">// \u4E3B\u8981\u6587\u672C</span>
<span class="hljs-variable">$pageFontColor-Secondary</span>:   <span class="hljs-number">#A1A5B7</span> !default;                                <span class="hljs-comment">// \u6B21\u8981\u6587\u672C</span>
<span class="hljs-variable">$pageFontColor-Light</span>:       <span class="hljs-number">#B5B5C3</span> !default;                                <span class="hljs-comment">// \u6DE1\u8272\u6587\u672C/\u7981\u7528\u8272</span>
<span class="hljs-variable">$pageFontColor-Lightest</span>:    <span class="hljs-number">#E4E6EF</span> !default;                                <span class="hljs-comment">// \u6DE1\u8272\u6587\u672C/\u8D85\u6DE1\u8272</span>
<span class="hljs-variable">$pageFontColor-Title</span>:       <span class="hljs-number">#3F4254</span> !default;                                <span class="hljs-comment">// \u6807\u9898\u6587\u672C</span>
<span class="hljs-variable">$pageFontColor-Link</span>:        <span class="hljs-number">#009EF7</span> !default;                                <span class="hljs-comment">// \u6587\u672C\u94FE\u63A5</span>
<span class="hljs-variable">$pageFontColor-Hover</span>:       <span class="hljs-number">#009EF7</span> !default;                                <span class="hljs-comment">// \u6587\u672C\u60AC\u505C</span>
<span class="hljs-variable">$pageFontColor-Inverse</span>:     <span class="hljs-number">#FFFFFF</span> !default;                                <span class="hljs-comment">// \u53CD\u8272\u6587\u672C</span>

<span class="hljs-comment">//--\u8FB9\u6846\u989C\u8272---------------------------------------------------------------</span>
<span class="hljs-variable">$pageBorderColor</span>:           <span class="hljs-number">#EFF2F5</span> !default;                                <span class="hljs-comment">// \u9ED8\u8BA4\u8FB9\u6846</span>
<span class="hljs-variable">$pageBorderColor-Light</span>:     <span class="hljs-number">#E8EBF8</span> !default;                                <span class="hljs-comment">// \u6DE1\u8272\u8FB9\u6846</span>
<span class="hljs-variable">$pageBorderColor-Dark</span>:      <span class="hljs-number">#CDCFD8</span> !default;                                <span class="hljs-comment">// \u6DF1\u8272\u8FB9\u6846</span>

<span class="hljs-comment">//--\u72B6\u6001\u989C\u8272---------------------------------------------------------------</span>
<span class="hljs-variable">$primary</span>:                   <span class="hljs-number">#40a9ff</span> !default;                                <span class="hljs-comment">// \u9996\u9009</span>
<span class="hljs-variable">$success</span>:                   <span class="hljs-number">#50cd89</span> !default;                                <span class="hljs-comment">// \u6210\u529F</span>
<span class="hljs-variable">$danger</span>:                    <span class="hljs-number">#f1416c</span> !default;                                <span class="hljs-comment">// \u5371\u9669</span>
<span class="hljs-variable">$warning</span>:                   <span class="hljs-number">#ffc700</span> !default;                                <span class="hljs-comment">// \u8B66\u544A</span>
<span class="hljs-variable">$info</span>:                      <span class="hljs-number">#7239ea</span> !default;                                <span class="hljs-comment">// \u4FE1\u606F</span>

<span class="hljs-comment">//--\u5706\u8FB9\u5C5E\u6027---------------------------------------------------------------</span>
<span class="hljs-variable">$pageRadius-Sm</span>:             <span class="hljs-number">3px</span> !default;                                    <span class="hljs-comment">// \u516C\u7528\u8FB9\u6846\u534A\u5F84 \u5C0F\u53F7</span>
<span class="hljs-variable">$pageRadius-Md</span>:             <span class="hljs-number">4px</span> !default;                                    <span class="hljs-comment">// \u516C\u7528\u8FB9\u6846\u534A\u5F84 \u4E2D\u53F7</span>
<span class="hljs-variable">$pageRadius-Lg</span>:             <span class="hljs-number">6px</span> !default;                                    <span class="hljs-comment">// \u516C\u7528\u8FB9\u6846\u534A\u5F84 \u5927\u53F7</span>
<span class="hljs-variable">$pageRadius-Xl</span>:             <span class="hljs-number">8px</span> !default;                                    <span class="hljs-comment">// \u516C\u7528\u8FB9\u6846\u534A\u5F84 \u5927\u53F7</span>
<span class="hljs-variable">$pageRoundRadius</span>:           <span class="hljs-number">100px</span> !default;                                  <span class="hljs-comment">// \u5706\u5F62\u5143\u7D20\u6700\u5927\u534A\u5F84\u5C3A\u5BF8</span>

<span class="hljs-comment">//--\u5C42\u7EA7\u9634\u5F71---------------------------------------------------------------</span>
<span class="hljs-variable">$boxShadow-level1</span>:          <span class="hljs-number">0</span> <span class="hljs-number">5px</span> <span class="hljs-number">12px</span> <span class="hljs-number">0</span> rgba(<span class="hljs-number">109</span>,<span class="hljs-number">131</span>,<span class="hljs-number">168</span>,<span class="hljs-number">0.05</span>), <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">50px</span> <span class="hljs-number">0</span> rgba(<span class="hljs-number">193</span>,<span class="hljs-number">205</span>,<span class="hljs-number">225</span>,<span class="hljs-number">0.10</span>) !default;
<span class="hljs-variable">$boxShadow-level2</span>:          <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">30px</span> <span class="hljs-number">0</span> rgba(<span class="hljs-number">109</span>,<span class="hljs-number">131</span>,<span class="hljs-number">168</span>,<span class="hljs-number">0.15</span>) !default;
<span class="hljs-variable">$boxShadow-level3</span>:          <span class="hljs-number">0</span> <span class="hljs-number">2px</span> <span class="hljs-number">14px</span> <span class="hljs-number">0</span> rgba(<span class="hljs-number">193</span>,<span class="hljs-number">205</span>,<span class="hljs-number">225</span>,<span class="hljs-number">0.25</span>) !default;

<span class="hljs-comment">//--\u5C42\u7EA7\u5206\u914D---------------------------------------------------------------</span>
<span class="hljs-variable">$z-index-level1</span>:            <span class="hljs-number">10000</span> !default;     <span class="hljs-comment">//\u53EF\u4EE5\u906E\u6321\u9875\u9762\u6240\u6709\u5185\u5BB9, \u5982loading\u72B6\u6001</span>
<span class="hljs-variable">$z-index-level2</span>:            <span class="hljs-number">4000</span> !default;      <span class="hljs-comment">//\u6A21\u6001\u6846,\u5BF9\u8BDD\u6846</span>
<span class="hljs-variable">$z-index-level3</span>:            <span class="hljs-number">3000</span> !default;      <span class="hljs-comment">//\u906E\u7F69,</span>
<span class="hljs-variable">$z-index-level4</span>:            <span class="hljs-number">2000</span> !default;      <span class="hljs-comment">//\u4E0B\u62C9\u83DC\u5355,\u5BFC\u822A</span>
<span class="hljs-variable">$z-index-level5</span>:            <span class="hljs-number">1000</span> !default;      <span class="hljs-comment">//\u5176\u4ED6</span>

<span class="hljs-comment">//--\u54CD\u5E94\u5C3A\u5BF8---------------------------------------------------------------</span>
<span class="hljs-variable">$respond-Sm</span>:                <span class="hljs-number">640px</span>!default;
<span class="hljs-variable">$respond-md</span>:                <span class="hljs-number">768px</span>!default;
<span class="hljs-variable">$respond-lg</span>:                <span class="hljs-number">1024px</span>!default;
<span class="hljs-variable">$respond-xl</span>:                <span class="hljs-number">1280px</span>!default;
<span class="hljs-variable">$respond-xxl</span>:               <span class="hljs-number">1536px</span>!default;

<span class="hljs-comment">//--\u89C4\u8303\u5316\u5C3A\u5BF8 (\u672C\u7CFB\u7EDF\u4F7F\u75284\u7684\u500D\u6570)--------------------------------------------</span>
<span class="hljs-variable">$xxs</span>:                       <span class="hljs-number">4px</span>!default;
<span class="hljs-variable">$xs</span>:                        <span class="hljs-number">8px</span>!default;
<span class="hljs-variable">$sm</span>:                        <span class="hljs-number">12px</span>!default;
<span class="hljs-variable">$md</span>:                        <span class="hljs-number">16px</span>!default;
<span class="hljs-variable">$lg</span>:                        <span class="hljs-number">24px</span>!default;
<span class="hljs-variable">$xl</span>:                        <span class="hljs-number">32px</span>!default;
<span class="hljs-variable">$xxl</span>:                       <span class="hljs-number">40px</span>!default;

<span class="hljs-comment">//--Headings \u6807\u9898 \u9ED8\u8BA4\u5C5E\u6027\u8BBE\u7F6E----------------------------------------------</span>
<span class="hljs-variable">$h1</span>:                        <span class="hljs-number">30px</span>!default;
<span class="hljs-variable">$h2</span>:                        <span class="hljs-number">24px</span>!default;
<span class="hljs-variable">$h3</span>:                        <span class="hljs-number">20px</span>!default;
<span class="hljs-variable">$h4</span>:                        <span class="hljs-number">18px</span>!default;
<span class="hljs-variable">$h5</span>:                        <span class="hljs-number">16px</span>!default;
<span class="hljs-variable">$h6</span>:                        <span class="hljs-number">14px</span>!default;

<span class="hljs-comment">//--\u901A\u7528\u56FE\u6807\u5C3A\u5BF8------------------------------------------------------------</span>
<span class="hljs-variable">$iconSize-Xxxs</span>:             <span class="hljs-number">12px</span>!default;
<span class="hljs-variable">$iconSize-Xxs</span>:              <span class="hljs-number">14px</span>!default;
<span class="hljs-variable">$iconSize-Xs</span>:               <span class="hljs-number">16px</span>!default;
<span class="hljs-variable">$iconSize-Sm</span>:               <span class="hljs-number">18px</span>!default;
<span class="hljs-variable">$iconSize-Md</span>:               <span class="hljs-number">20px</span>!default;
<span class="hljs-variable">$iconSize-Lg</span>:               <span class="hljs-number">24px</span>!default;
<span class="hljs-variable">$iconSize-Xl</span>:               <span class="hljs-number">28px</span>!default;
<span class="hljs-variable">$iconSize-Xxl</span>:              <span class="hljs-number">32px</span>!default;
<span class="hljs-variable">$iconSize-Xxxl</span>:             <span class="hljs-number">36px</span>!default;

<span class="hljs-comment">//--\u6807\u9898\u7C7B\u578B [\u540D\u79F0  \u6587\u5B57\u5C3A\u5BF8  \u5C0F\u6807\u9898\u5C3A\u5BF8  \u884C\u9AD8]---------------------------------</span>
<span class="hljs-variable">$headings</span>:
    h1    <span class="hljs-variable">$h1</span>    <span class="hljs-number">18px</span>    math.div(<span class="hljs-number">34</span>, <span class="hljs-number">30</span>),
    h2    <span class="hljs-variable">$h2</span>    <span class="hljs-number">16px</span>    math.div(<span class="hljs-number">32</span>, <span class="hljs-number">24</span>),
    h3    <span class="hljs-variable">$h3</span>    <span class="hljs-number">15px</span>    math.div(<span class="hljs-number">28</span>, <span class="hljs-number">20</span>),
    h4    <span class="hljs-variable">$h4</span>    <span class="hljs-number">14px</span>    math.div(<span class="hljs-number">26</span>, <span class="hljs-number">18</span>),
    h5    <span class="hljs-variable">$h5</span>    <span class="hljs-number">12px</span>    math.div(<span class="hljs-number">24</span>, <span class="hljs-number">16</span>),
    h6    <span class="hljs-variable">$h6</span>    <span class="hljs-number">12px</span>    math.div(<span class="hljs-number">22</span>, <span class="hljs-number">14</span>),
    !default;

<span class="hljs-comment">//--\u8868\u5355\u5143\u7D20\u57FA\u7840\u8BBE\u7F6E--------------------------------------------------------</span>
<span class="hljs-variable">$pageFormShadow</span>:                      false !default;                           <span class="hljs-comment">//\u5F00\u542F\u7126\u70B9\u5149\u6655\u6548\u679C</span>
<span class="hljs-variable">$pageFormRadius</span>:                      <span class="hljs-variable">$pageRadius-Md</span> !default;                  <span class="hljs-comment">//\u5706\u89D2\u5C3A\u5BF8</span>
<span class="hljs-variable">$pageFormHeight-Xs</span>:                   <span class="hljs-number">22px</span> !default;                            <span class="hljs-comment">//xs\u9AD8\u5EA6 </span>
<span class="hljs-variable">$pageFormHeight-Sm</span>:                   <span class="hljs-number">28px</span> !default;                            <span class="hljs-comment">//sm\u9AD8\u5EA6 </span>
<span class="hljs-variable">$pageFormHeight-Md</span>:                   <span class="hljs-number">36px</span> !default;                            <span class="hljs-comment">//md\u9AD8\u5EA6 </span>
<span class="hljs-variable">$pageFormHeight-Lg</span>:                   <span class="hljs-number">44px</span> !default;                            <span class="hljs-comment">//lg\u9AD8\u5EA6 </span>
<span class="hljs-variable">$pageFormBgColor</span>:                     <span class="hljs-number">#FFFFFF</span> !default;                         <span class="hljs-comment">//\u901A\u7528\u8868\u5355\u5143\u7D20\u80CC\u666F</span>
<span class="hljs-variable">$pageFormBorderSize</span>:                  <span class="hljs-number">1px</span> !default;                             <span class="hljs-comment">//\u9ED8\u8BA4\u8FB9\u6846\u5C3A\u5BF8</span>
<span class="hljs-variable">$pageFormBorderColor</span>:                 <span class="hljs-number">#E4E6EF</span> !default;                         <span class="hljs-comment">//\u9ED8\u8BA4\u8FB9\u6846\u989C\u8272</span>
<span class="hljs-variable">$pageFormDisabledBorderColor</span>:         <span class="hljs-number">#E5E6E9</span> !default;                         <span class="hljs-comment">//\u7981\u7528\u72B6\u6001\u8FB9\u6846\u8272</span>
<span class="hljs-variable">$pageFormDisabledBgColor</span>:             <span class="hljs-number">#F3F3F5</span> !default;                         <span class="hljs-comment">//\u7981\u7528\u72B6\u6001\u80CC\u666F\u8272</span>
<span class="hljs-variable">$pageFormDisabledColor</span>:               <span class="hljs-variable">$pageFontColor-Light</span> !default;            <span class="hljs-comment">//\u7981\u7528\u72B6\u6001\u6587\u672C\u8272</span>
<span class="hljs-variable">$pageFormDisabledOpacity</span>:             <span class="hljs-number">0.8</span> !default;                             <span class="hljs-comment">//\u7981\u7528\u72B6\u6001\u900F\u660E\u5EA6</span>
<span class="hljs-variable">$pageFormIconSize</span>:                    <span class="hljs-number">16px</span> !default;                            <span class="hljs-comment">//\u5185\u5D4Cicon\u5C3A\u5BF8</span>
<span class="hljs-variable">$pageFormIconColor</span>:                   <span class="hljs-variable">$pageFontColor-Secondary</span> !default;        <span class="hljs-comment">//\u5185\u5D4Cicon\u989C\u8272</span>

<span class="hljs-comment">// Input &amp; Button\u8868\u5355\u5143\u7D20\u9AD8\u5EA6 [\u540D\u79F0  \u9AD8\u5EA6  \u4E0A\u4E0B\u586B\u5145  \u5DE6\u53F3\u586B\u5145  \u6587\u5B57\u5927\u5C0F  \u884C\u9AD8  \u5706\u89D2\u5C3A\u5BF8  \u56FE\u6807\u5927\u5C0F]</span>
<span class="hljs-variable">$pageFormSize</span>:
    sm    <span class="hljs-variable">$pageFormHeight-Sm</span>    <span class="hljs-number">3px</span>    <span class="hljs-number">8px</span>     <span class="hljs-variable">$pageFontSize-Sm</span>    <span class="hljs-variable">$pageFontLineHeight-Sm</span>    <span class="hljs-variable">$pageRadius-Sm</span>    <span class="hljs-variable">$iconSize-Xxs</span>,
    md    <span class="hljs-variable">$pageFormHeight-Md</span>    <span class="hljs-number">6px</span>    <span class="hljs-number">12px</span>    <span class="hljs-variable">$pageFontSize-Md</span>    <span class="hljs-variable">$pageFontLineHeight-Md</span>    <span class="hljs-variable">$pageRadius-Md</span>    <span class="hljs-variable">$iconSize-Xs</span>,
    lg    <span class="hljs-variable">$pageFormHeight-Lg</span>    <span class="hljs-number">9px</span>    <span class="hljs-number">16px</span>    <span class="hljs-variable">$pageFontSize-Lg</span>    <span class="hljs-variable">$pageFontLineHeight-Lg</span>    <span class="hljs-variable">$pageRadius-Lg</span>    <span class="hljs-variable">$iconSize-Sm</span>,
    !default;

</code></pre><p>\u5982\u679C\u4F60\u9700\u8981\u6DF1\u5EA6\u5B9A\u5236\u4E3B\u9898\uFF0C\u8BF7\u53C2\u8003\u5B8C\u6574\u7684 config.scss \u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\uFF0C\u548C\u4F7F\u7528\u76F8\u5E94\u7EC4\u4EF6\u7684 mixin \u6765\u521B\u4F5C\u4E2A\u6027\u5316\u6837\u5F0F\u3002</p></div>`,1);function j(o,t){const s=a("right-nav");return n(),l("section",m,[r,p(s)])}var v=c(h,[["render",j]]);export{v as default};
