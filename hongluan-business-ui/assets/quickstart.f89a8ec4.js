import{W as s,o as a,f as n,g as p,v as l,s as e,Y as t,aK as c,_ as r}from"./vue.008a8305.js";import{_ as o}from"./index.5eb21845.js";import"./hongluan-business.e90150dc.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.a0717c25.js";const h={},i=c('<h1>快速上手</h1><p>本节将介绍如何在项目中使用鸿鸾业务组件UI。</p><pre><code class="hljs">注意：鸿鸾业务组件库依赖于鸿鸾基础组件库，您需要同时参考鸿鸾基础组件库的引入方法，先引入hongluan-ui\n</code></pre><h2 id="yin-ru-hongluan-business-ui"><a class="header-anchor" href="#yin-ru-hongluan-business-ui"></a> 引入 Hongluan Business UI</h2><p>你可以引入整个 Hongluan Business UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Hongluan Business UI Library。</p><h2 id="wan-zheng-yin-ru"><a class="header-anchor" href="#wan-zheng-yin-ru"></a> 完整引入</h2><p>在 main.js 中写入以下内容：</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> HongluanBusinessUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-business-ui&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-business-ui/dist/index.css&#39;</span>;\n<span class="hljs-comment">// import &#39;hongluan-business-ui/dist/index-dark.css&#39;;</span>\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp(App)\napp.use(HongluanBusinessUI)\napp.mount(<span class="hljs-string">&#39;#app&#39;</span>)\n</code></pre><p>以上代码便完成了 Hongluan Business UI 的引入。需要注意的是，样式文件需要单独引入。</p><h2 id="volar-support"><a class="header-anchor" href="#volar-support"></a> Volar support</h2><p>如果您使用 Volar，请在 <code>tsconfig.json</code> 中通过 <code>compilerOptions.type</code> 指定全局组件类型。</p><pre><code class="hljs language-json"><span class="hljs-comment">// tsconfig.json</span>\n{\n  <span class="hljs-attr">&quot;compilerOptions&quot;</span>: {\n    <span class="hljs-comment">// ...</span>\n    <span class="hljs-attr">&quot;types&quot;</span>: [<span class="hljs-string">&quot;hongluan-business-ui/global&quot;</span>]\n  }\n}\n</code></pre><h2 id="an-xu-yin-ru-zu-jian"><a class="header-anchor" href="#an-xu-yin-ru-zu-jian"></a> 按需引入组件</h2><p><code>HongluanBusinessUI</code>的 JS 代码默认支持基于 ES modules 的 <a href="https://webpack.js.org/guides/tree-shaking/">摇树 tree shaking</a>。</p><blockquote><p>App.vue</p></blockquote><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">hb-avatar-list</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;avatarList&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">hb-avatar-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { HbAvatarList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-business-ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;app&#39;</span>\n  <span class="hljs-attr">components</span>: {\n    HbAvatarList,\n  },\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> avatarList = ref([\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a&#39;</span>,\n      },\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a&#39;</span>,\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;头像二&#39;</span>\n      },\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4&#39;</span>,\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;头像三&#39;</span>\n      },\n      {\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1&#39;</span>,\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;头像四&#39;</span>\n      },\n    ])\n    <span class="hljs-keyword">return</span> {\n      avatarList\n    }\n  }\n})\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre><h2 id="yang-shi-de-yin-ru"><a class="header-anchor" href="#yang-shi-de-yin-ru"></a> 样式的引入</h2><p>我们<strong>强烈建议直接引入全部的样式文件</strong>，虽然这看起来会增大整个应用的体积，但这样做可以避免引入额外的打包工具插件（减少负担），你还可以通过 <a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/">CDN</a> 的方式来加载样式文件，从而使得你的应用加载更快。</p><p>通过 JS 的方式引入</p><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-business-ui/dist/index.css&#39;</span>\n<span class="hljs-comment">// import &#39;hongluan-business-ui/dist/index-dark.css&#39;</span>\n</code></pre><p>通过 HTML 的头文件引入</p><pre><code class="hljs language-html"><span class="hljs-comment">&lt;!-- index.html --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;//unpkg.com/hongluan-business-ui/dist/index.css&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n</code></pre>',22),u={id:"zi-dong-dao-ru-tui-jian"},j=p("a",{class:"header-anchor",href:"#zi-dong-dao-ru-tui-jian"},null,-1),d=r(" 自动导入 "),g=r("推荐"),m=c('<p>首先需要安装 <code>unplugin-vue-components</code>。</p><pre><code class="hljs language-shell">npm install unplugin-vue-components\n</code></pre><p>然后将以下代码添加到 <code>Vite</code> 或 <code>Webpack</code> 的配置文件中。</p><h4 id="vite"><a class="header-anchor" href="#vite"></a> Vite</h4><pre><code class="hljs language-ts"><span class="hljs-comment">// vite.config.ts</span>\n<span class="hljs-keyword">import</span> Components <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({\n  <span class="hljs-attr">plugins</span>: [\n    Components({\n      <span class="hljs-attr">resolvers</span>: [\n        <span class="hljs-comment">// example of importing Vant</span>\n        <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {\n          <span class="hljs-comment">// where `name` is always CapitalCase</span>\n          <span class="hljs-keyword">if</span> (name.startsWith(<span class="hljs-string">&#39;Hb&#39;</span>))\n            <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-business-ui&#39;</span> }\n        }\n      ]\n    }),\n  ],\n})\n\n</code></pre><h4 id="webpack"><a class="header-anchor" href="#webpack"></a> Webpack</h4><pre><code class="hljs language-js"><span class="hljs-comment">// webpack.config.js</span>\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-attr">plugins</span>: [\n    <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>)({\n      <span class="hljs-attr">resolvers</span>: [\n        <span class="hljs-comment">// example of importing Vant</span>\n        <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {\n          <span class="hljs-comment">// where `name` is always CapitalCase</span>\n          <span class="hljs-keyword">if</span> (name.startsWith(<span class="hljs-string">&#39;Hb&#39;</span>))\n            <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-business-ui&#39;</span> }\n        }\n      ]\n    })\n  ]\n}\n</code></pre><h4 id="vue-cli"><a class="header-anchor" href="#vue-cli"></a> Vue CLI</h4><pre><code class="hljs language-js"><span class="hljs-comment">// vue.config.js</span>\n<span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">configureWebpack</span>: {\n    <span class="hljs-attr">plugins</span>: [\n      <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>)({\n        <span class="hljs-attr">resolvers</span>: [\n          <span class="hljs-comment">// example of importing Vant</span>\n          <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {\n            <span class="hljs-comment">// where `name` is always CapitalCase</span>\n            <span class="hljs-keyword">if</span> (name.startsWith(<span class="hljs-string">&#39;Hb&#39;</span>))\n              <span class="hljs-keyword">return</span> { <span class="hljs-attr">importName</span>: name, <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;hongluan-business-ui&#39;</span> }\n          }\n        ]\n      }),\n    ],\n  },\n}\n</code></pre><p>For more bundlers (<a href="https://rollupjs.org/">Rollup</a>, <a href="https://cli.vuejs.org/">Vue CLI</a>) and configs please reference <a href="https://github.com/antfu/unplugin-vue-components#readme">unplugin-vue-components</a>.</p><h2 id="kai-shi-shi-yong"><a class="header-anchor" href="#kai-shi-shi-yong"></a> 开始使用</h2><p>至此，一个基于 Vue3 和 Hongluan Business UI 的开发环境已经搭建完毕，现在就可以编写代码了。</p><p>各个组件的使用方法请参阅它们各自的说明文档。</p>',13);var f=o(h,[["render",function(c,r){const o=s("hl-tag"),h=s("right-nav");return a(),n(t,null,[p("section",null,[i,p("h3",u,[j,d,l(o,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"sm"},{default:e((()=>[g])),_:1})]),m]),l(h)],64)}]]);export{f as default};
