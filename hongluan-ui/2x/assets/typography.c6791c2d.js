var S=Object.defineProperty;var j=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var H=(u,t,s)=>t in u?S(u,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[t]=s,g=(u,t)=>{for(var s in t||(t={}))V.call(t,s)&&H(u,s,t[s]);if(j)for(var s of j(t))N.call(t,s)&&H(u,s,t[s]);return u};import{Y as d,L as y,W as L,Q as n,a2 as e,a0 as c,P as T,o as b,a3 as p,aG as A}from"./vue.a2bb788b.js";import{_ as U}from"./index.1be8ef67.js";import"./hongluan.bb564fd4.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.da8bad7b.js";const M={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:t,withCtx:s,createVNode:o,openBlock:F,createBlock:E}=A,a=u("h1",null,"<h1> Hongluan heading",-1),l=u("h2",null,"<h2> Hongluan heading",-1),B=u("h3",null,"<h3> Hongluan heading",-1),h=u("h4",null,"<h4> Hongluan heading",-1),r=u("h5",null,"<h5> Hongluan heading",-1),i=u("h6",null,"<h6> Hongluan heading",-1),C=u("div",{class:"h1"},".h1 Hongluan heading",-1),_=u("div",{class:"h2"},".h2 Hongluan heading",-1),D=u("div",{class:"h3"},".h3 Hongluan heading",-1),f=u("div",{class:"h4"},".h4 Hongluan heading",-1),m=u("div",{class:"h5"},".h5 Hongluan heading",-1),x=u("div",{class:"h6"},".h6 Hongluan heading",-1);function w(eu,au){const v=t("hl-col"),k=t("hl-row");return F(),E(k,{gap:"var(--md)"},{default:s(()=>[o(v,{span:"col",class:"flex flex-col gap-lg"},{default:s(()=>[a,l,B,h,r,i]),_:1}),o(v,{span:"col",class:"flex flex-col gap-lg"},{default:s(()=>[C,_,D,f,m,x]),_:1})]),_:1})}return g({render:w},{})}(),"hl-demo1":function(){const{createElementVNode:u,Fragment:t,openBlock:s,createElementBlock:o}=A,F=u("p",{class:"font-sm"},"font-sm 12px \u6587\u672C\u5C3A\u5BF8\u5C55\u793A",-1),E=u("p",{class:"font-md"},"font-md 14px \u6587\u672C\u5C3A\u5BF8\u5C55\u793A",-1),a=u("p",{class:"font-lg"},"font-lg 16px \u6587\u672C\u5C3A\u5BF8\u5C55\u793A",-1);function l(h,r){return s(),o(t,null,[F,E,a],64)}return g({render:l},{})}(),"hl-demo2":function(){const{createElementVNode:u,createStaticVNode:t}=A,s=t('<p class="font-lg font-thin">font-thin</p><p class="font-lg font-extralight">font-extralight</p><p class="font-lg font-light">font-light</p><p class="font-lg font-normal">font-normal</p><p class="font-lg font-medium">font-medium</p><p class="font-lg font-semibold">font-semibold</p><p class="font-lg font-bold">font-bold</p><p class="font-lg font-extrabold">font-extrabold</p><p class="font-lg font-black">font-black</p>',9);function o(E,a){return s}return g({render:o},{})}(),"hl-demo3":function(){const{createElementVNode:u,resolveComponent:t,withCtx:s,createVNode:o,openBlock:F,createBlock:E}=A,a=u("h5",{class:"m-b-xs"},"\u9ED8\u8BA4\u6837\u5F0F",-1),l=u("p",null,"Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002",-1),B=u("h5",{class:"m-b-xs"},"\u9996\u884C\u7F29\u8FDB",-1),h=u("p",{class:"indent"},"Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002",-1),r=u("h5",{class:"m-b-xs"},"\u4E24\u7AEF\u5BF9\u9F50",-1),i=u("p",{class:"justify"},"Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002",-1);function C(D,f){const m=t("hl-col"),x=t("hl-row");return F(),E(x,{layout:"grid",gap:"var(--xl)",count:"count-md-3"},{default:s(()=>[o(m,{span:"col"},{default:s(()=>[a,l]),_:1}),o(m,{span:"col"},{default:s(()=>[B,h]),_:1}),o(m,{span:"col"},{default:s(()=>[r,i]),_:1})]),_:1})}return g({render:C},{})}(),"hl-demo4":function(){const{createElementVNode:u,resolveComponent:t,withCtx:s,openBlock:o,createBlock:F}=A,E=u("div",{class:"w-full"},[u("h4",{class:"m-b-sm"},"\u72EC\u81EA\u5B58\u5728"),u("p",null,"Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002")],-1),a=u("div",{class:"w-full"},[u("h4",{class:"m-b-sm"},"\u6709\u76F8\u90BB\u7684P\u6807\u7B7E\u5B58\u5728"),u("p",null,"Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C"),u("p",null,"\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002")],-1);function l(h,r){const i=t("hl-group");return o(),F(i,{gap:"var(--md)"},{default:s(()=>[E,a]),_:1})}return g({render:l},{})}(),"hl-demo5":function(){const{createElementVNode:u,resolveComponent:t,withCtx:s,openBlock:o,createBlock:F}=A,E=u("div",{class:"bg-content border w-full p-md"},[u("p",{class:"text-left"},"\u5DE6\u5BF9\u9F50")],-1),a=u("div",{class:"bg-content border w-full p-md"},[u("p",{class:"text-right"},"\u53F3\u5BF9\u9F50")],-1),l=u("div",{class:"bg-content border w-full p-md"},[u("p",{class:"text-center"},"\u5C45\u4E2D\u5BF9\u9F50")],-1);function B(r,i){const C=t("hl-group");return o(),F(C,{gap:"var(--md)",full:""},{default:s(()=>[E,a,l]),_:1})}return g({render:B},{})}(),"hl-demo6":function(){const{createElementVNode:u,Fragment:t,openBlock:s,createElementBlock:o}=A,F=u("div",{class:"w-xxl"},[u("p",{class:"ellipsis"},"Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002")],-1),E=u("div",{class:"m-t-lg w-xxl"},[u("p",{class:"ellipsis",style:{"--line":"2"}},"Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002")],-1);function a(B,h){return s(),o(t,null,[F,E],64)}return g({render:a},{})}(),"hl-demo7":function(){const{createElementVNode:u,resolveComponent:t,withCtx:s,openBlock:o,createBlock:F}=A,E=u("span",{class:"uppercase"},"uppercase \u8F6C\u5927\u5199",-1),a=u("span",{class:"lowercase"},"LOWERCASE \u8F6C\u5C0F\u5199",-1),l=u("span",{class:"capitalize"},"capitalize \u9996\u5B57\u6BCD\u5927\u5199",-1);function B(r,i){const C=t("hl-group");return o(),F(C,{gap:"var(--md)",block:"",align:"items-around"},{default:s(()=>[E,a,l]),_:1})}return g({render:B},{})}()}},q=b(`<h1>Typography \u6392\u7248</h1><p>\u6211\u4EEC\u4E3A\u6392\u7248\u521B\u5EFA\u4E86\u4E00\u7EC4\u9884\u5B9A\u4E49\u7684\u914D\u7F6E\uFF0C\u4EE5\u4F7F\u5B9A\u5236\u53D8\u5F97\u5BB9\u6613\u548C\u7B80\u5355\uFF0C\u5B83\u5305\u542B\u4E0D\u540C\u7C7B\u578B\u7684\u6807\u9898\u3001\u6BB5\u843D\u3001\u5B57\u4F53\u5927\u5C0F\u3001\u884C\u9AD8\u3001\u663E\u793A\u548C\u5176\u4ED6\u7528\u4E8E\u4E0D\u540C\u76EE\u7684\u7684\u6837\u5F0F\u3002</p><h2 id="zi-ti"><a class="header-anchor" href="#zi-ti"></a> \u5B57\u4F53</h2><p>\u5229\u7528&quot;\u7CFB\u7EDF\u5B57\u4F53\u5806\u6808&quot;\u5728\u6BCF\u4E2A\u8BBE\u5907\u548C\u64CD\u4F5C\u8BBE\u5907\u4E0A\u5B9E\u73B0\u6700\u4F73\u6587\u672C\u6E32\u67D3\u3002\u8FD9\u4E9B\u7CFB\u7EDF\u5B57\u4F53\u4E13\u4E3A\u5F53\u4ECA\u7684\u8BBE\u5907\u800C\u8BBE\u8BA1\uFF0C\u5177\u6709\u6539\u8FDB\u7684\u5C4F\u5E55\u6E32\u67D3\u3001\u53EF\u53D8\u5B57\u4F53\u652F\u6301\u7B49\u3002</p><pre><code class="hljs language-scss"><span class="hljs-selector-tag">body</span> {
  -apple-system,
  BlinkMacSystemFont,
  &#39;Segoe UI&#39;,
  Roboto,
  &#39;Helvetica Neue&#39;,
  Arial,
  &#39;Noto Sans&#39;,
  sans-serif,
  &#39;Apple <span class="hljs-attribute">Color</span> Emoji&#39;,
  &#39;Segoe UI Emoji&#39;,
  &#39;Segoe UI Symbol&#39;,
  &#39;Noto <span class="hljs-attribute">Color</span> Emoji&#39;
}
</code></pre><h2 id="biao-ti"><a class="header-anchor" href="#biao-ti"></a> \u6807\u9898</h2><p>\u4F7F\u7528 <code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code> \u6807\u7B7E\u6765\u5B9A\u4E49\u4F60\u7684\u6807\u9898\u3002<code>.h1</code> ~ <code>.h6</code> \u4E5F\u5177\u5907\u76F8\u540C\u7684\u6837\u5F0F</p>`,7),z=n("pre",null,[n("code",{class:"html"},`<hl-row gap="var(--md)">
  <hl-col span="col" class="flex flex-col gap-lg">
    <h1>&lt;h1&gt; Hongluan heading</h1>
    <h2>&lt;h2&gt; Hongluan heading</h2>
    <h3>&lt;h3&gt; Hongluan heading</h3>
    <h4>&lt;h4&gt; Hongluan heading</h4>
    <h5>&lt;h5&gt; Hongluan heading</h5>
    <h6>&lt;h6&gt; Hongluan heading</h6>
  </hl-col>
  <hl-col span="col" class="flex flex-col gap-lg">
    <div class="h1">.h1 Hongluan heading</div>
    <div class="h2">.h2 Hongluan heading</div>
    <div class="h3">.h3 Hongluan heading</div>
    <div class="h4">.h4 Hongluan heading</div>
    <div class="h5">.h5 Hongluan heading</div>
    <div class="h6">.h6 Hongluan heading</div>
  </hl-col>
</hl-row>
`)],-1),P=b(`<h2 id="xiao-biao-ti"><a class="header-anchor" href="#xiao-biao-ti"></a> \u5C0F\u6807\u9898</h2><p>\u4F7F\u7528 <code>&lt;small&gt;</code> \u6807\u7B7E\u6765\u5B9A\u4E49\u4F60\u7684\u526F\u6807\u9898\u3002</p><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>h1 \u6807\u9898 <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>\u526F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>h2 \u6807\u9898 <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>\u526F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>h3 \u6807\u9898 <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>\u526F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>h4 \u6807\u9898 <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>\u526F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>h5 \u6807\u9898 <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>\u526F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>h6 \u6807\u9898 <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>\u526F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>
</code></pre><h2 id="wen-ben-chi-cun"><a class="header-anchor" href="#wen-ben-chi-cun"></a> \u6587\u672C\u5C3A\u5BF8</h2><p>\u4F7F\u7528\u6587\u672C\u5C3A\u5BF8\u5DE5\u5177\u7C7B\uFF0C\u4F1A\u987A\u4FBF\u4E3A\u4F60\u8BBE\u5B9A line-height \u884C\u9AD8\uFF0C\u4EE5\u4FDD\u969C\u8BBE\u8BA1\u7CFB\u7EDF\u7684\u89C4\u8303\u4E00\u81F4\u6027\u3002</p>`,5),W=n("pre",null,[n("code",{class:"html"},`<p class="font-sm">font-sm 12px \u6587\u672C\u5C3A\u5BF8\u5C55\u793A</p>
<p class="font-md">font-md 14px \u6587\u672C\u5C3A\u5BF8\u5C55\u793A</p>
<p class="font-lg">font-lg 16px \u6587\u672C\u5C3A\u5BF8\u5C55\u793A</p>
`)],-1),$=n("h2",{id:"wen-ben-chong-liang"},[n("a",{class:"header-anchor",href:"#wen-ben-chong-liang"}),p(" \u6587\u672C\u91CD\u91CF")],-1),I=n("pre",null,[n("code",{class:"html"},`<p class="font-lg font-thin">font-thin</p>
<p class="font-lg font-extralight">font-extralight</p>
<p class="font-lg font-light">font-light</p>
<p class="font-lg font-normal">font-normal</p>
<p class="font-lg font-medium">font-medium</p>
<p class="font-lg font-semibold">font-semibold</p>
<p class="font-lg font-bold">font-bold</p>
<p class="font-lg font-extrabold">font-extrabold</p>
<p class="font-lg font-black">font-black</p>
`)],-1),R=n("h2",{id:"duan-luo-yang-shi"},[n("a",{class:"header-anchor",href:"#duan-luo-yang-shi"}),p(" \u6BB5\u843D\u6837\u5F0F")],-1),O=n("p",null,"\u6BB5\u843D\u6807\u7B7E\u4E5F\u65B0\u589E\u4E86 \u9996\u884C\u7F29\u8FDB \u548C \u4E24\u7AEF\u5BF9\u9F50 \u7684\u6837\u5F0F\u3002",-1),Q=n("pre",null,[n("code",{class:"html"},`<hl-row layout="grid" gap="var(--xl)" count="count-md-3">
  <hl-col span="col">
    <h5 class="m-b-xs">\u9ED8\u8BA4\u6837\u5F0F</h5>
    <p>Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p>
  </hl-col>
  <hl-col span="col">
    <h5 class="m-b-xs">\u9996\u884C\u7F29\u8FDB</h5>
    <p class="indent">Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p>
  </hl-col>
  <hl-col span="col">
    <h5 class="m-b-xs">\u4E24\u7AEF\u5BF9\u9F50</h5>
    <p class="justify">Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p>
  </hl-col>
</hl-row>
`)],-1),G=n("p",null,[n("code",null,"<p>"),p("\u6807\u7B7E\u9ED8\u8BA4\u8BBE\u7F6E\u4E86"),n("code",null,"margin-bottom: 1em"),p("\uFF0C\u4F46\u662F\u6CA1\u6709\u76F8\u90BB"),n("code",null,"<p>"),p("\u6807\u7B7E\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u79FB\u9664"),n("code",null,"margin-bottom"),p("\u5C5E\u6027")],-1),X=n("pre",null,[n("code",{class:"html"},`<hl-group gap="var(--md)">
  <div class="w-full">
    <h4 class="m-b-sm">\u72EC\u81EA\u5B58\u5728</h4>
    <p>Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p>
  </div>
  <div class="w-full">
    <h4 class="m-b-sm">\u6709\u76F8\u90BB\u7684P\u6807\u7B7E\u5B58\u5728</h4>
    <p>Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C</p>
    <p>\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p>
  </div>
</hl-group>
`)],-1),Y=n("h2",{id:"wen-ben-dui-qi"},[n("a",{class:"header-anchor",href:"#wen-ben-dui-qi"}),p(" \u6587\u672C\u5BF9\u9F50")],-1),J=n("pre",null,[n("code",{class:"html"},`<hl-group gap="var(--md)" full>
  <div class="bg-content border w-full p-md"><p class="text-left">\u5DE6\u5BF9\u9F50</p></div>
  <div class="bg-content border w-full p-md"><p class="text-right">\u53F3\u5BF9\u9F50</p></div>
  <div class="bg-content border w-full p-md"><p class="text-center">\u5C45\u4E2D\u5BF9\u9F50</p></div>
</hl-group>
`)],-1),K=n("h2",{id:"wen-ben-chao-chu-yin-cang"},[n("a",{class:"header-anchor",href:"#wen-ben-chao-chu-yin-cang"}),p(" \u6587\u672C\u8D85\u51FA\u9690\u85CF")],-1),Z=n("p",null,[n("code",null,"ellipsis"),p(" \u5DE5\u5177\u7C7B\u53EF\u4EE5\u4F7F\u6587\u672C\u8D85\u51FA\u7236\u5143\u7D20\u8303\u56F4\u65F6\u9690\u85CF\u989D\u5916\u7684\u5B57\u7B26\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7 css \u53D8\u91CF\u4F20\u9012\u663E\u793A\u7684\u884C\u6570\uFF0C\u4F8B\u5982\uFF1A"),n("code",null,'style="--line: 2"')],-1),uu=n("pre",null,[n("code",{class:"html"},`<div class="w-xxl"><p class="ellipsis">Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p></div>
<div class="m-t-lg w-xxl"><p class="ellipsis" style="--line: 2">Hongluan\u662F\u57FA\u4E8EVUE3\u5F00\u53D1\u7684\u4E00\u5957\u54CD\u5E94\u5F0F\u3001\u9AD8\u53EF\u63A7\u7684\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u4E3A\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u96C6\u6210\u4E86\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u72B6\u6001\u989C\u8272\u7B49\u8BED\u4E49\u5316\u7C7B\u578B\uFF0C\u751A\u81F3\u80FD\u8BA9\u4F60\u79BB\u5F00CSS\u5E76\u4E14\u76F4\u63A5\u5728HTML\u6807\u8BB0\u8BED\u8A00\u4E2D\u7EC4\u5408\u51FA\u4EFB\u610F\u7684\u8BBE\u8BA1\u3002</p></div>
`)],-1),nu=n("h2",{id:"da-xiao-xie-zhuan-huan"},[n("a",{class:"header-anchor",href:"#da-xiao-xie-zhuan-huan"}),p(" \u5927\u5C0F\u5199\u8F6C\u6362")],-1),su=n("pre",null,[n("code",{class:"html"},`<hl-group gap="var(--md)" block align="items-around">
  <span class="uppercase">uppercase \u8F6C\u5927\u5199</span>
  <span class="lowercase">LOWERCASE \u8F6C\u5C0F\u5199</span>
  <span class="capitalize">capitalize \u9996\u5B57\u6BCD\u5927\u5199</span>
</hl-group>
`)],-1),tu=b('<h2 id="qi-ta-yuan-su"><a class="header-anchor" href="#qi-ta-yuan-su"></a> \u5176\u4ED6\u5143\u7D20</h2><p>\u4F7F\u7528\u8BED\u4E49\u5316\u6807\u7B7E\u6765\u6784\u5EFA\u4F60\u7684\u9875\u9762\u5E03\u5C40\u3002</p><div class="scrollable m-t-md"><table><thead><tr><th>HTML Tag</th><th>Describe</th></tr></thead><tbody><tr><td><code>&lt;a&gt;</code></td><td>\u5C06\u6587\u672C\u8F6C\u6362\u4E3A\u8D85\u6587\u672C\u4F7F\u7528 <a href="#">a \u6807\u7B7E</a></td></tr><tr><td><code>&lt;em&gt;</code></td><td>\u5F3A\u8C03\u6587\u672C\u4F7F\u7528 <em>em \u6807\u7B7E</em></td></tr><tr><td><code>&lt;strong&gt;</code></td><td>\u5F3A\u8C03\u4EFB\u4F55\u989D\u5916\u7684\u66F4\u91CD\u8981\u6587\u672C\u4F7F\u7528 <strong>strong \u6807\u7B7E</strong></td></tr><tr><td><code>&lt;code&gt;</code></td><td>\u5B9A\u4E49\u5185\u8054\u4EE3\u7801\u7247\u6BB5\u4F7F\u7528 <code>code \u6807\u7B7E</code></td></tr><tr><td><code>&lt;del&gt;</code></td><td>\u6807\u8BB0\u6587\u6863\u4E2D\u5DF2\u88AB\u4FEE\u6539\u6216\u5220\u9664\u7684\u6587\u672C\u4F7F\u7528 <del>del \u6807\u7B7E</del></td></tr><tr><td><code>&lt;ins&gt;</code></td><td>\u6807\u8BB0\u6587\u6863\u4E2D\u63D2\u5165\u7684\u6587\u672C\u4F7F\u7528 <ins>ins \u6807\u7B7E</ins></td></tr><tr><td><code>&lt;mark&gt;</code></td><td>\u9AD8\u4EAE\u663E\u793A\u6587\u672C\u4F7F\u7528 <mark>mark \u6807\u7B7E</mark>\uFF0C\u5B83\u6CA1\u6709\u4EFB\u4F55\u8BED\u4E49\u542B\u4E49</td></tr><tr><td><code>&lt;q&gt;</code></td><td>\u5B9A\u4E49\u5F15\u5165\u7684\u8BED\u5F55\u5728 <q> q \u6807\u7B7E <q>\u91CC\u9762\u4F7F\u7528</q> q \u6807\u7B7E </q></td></tr><tr><td><code>&lt;abbr&gt;</code></td><td>\u5B9A\u4E49\u4E00\u4E2A\u6807\u9898\u7684\u7F29\u5199\u4F7F\u7528 <abbr title="Abbreviation Element">abbr \u6807\u7B7E</abbr></td></tr><tr><td><code>&lt;dfn&gt;</code></td><td>\u5B9A\u4E49\u4E00\u4E2A\u9879\u76EE\u672F\u8BED\u540D\u79F0\u4F7F\u7528 <dfn title="Defines a definition term">dfn \u6807\u7B7E</dfn></td></tr><tr><td><code>&lt;small&gt;</code></td><td>\u7F29\u5C0F\u663E\u793A\u4E0D\u91CD\u8981\u7684\u6587\u672C\u4F7F\u7528 <small>small \u6807\u7B7E</small></td></tr></tbody></table></div>',3);function lu(u,t,s,o,F,E){const a=d("hl-demo0"),l=d("demo-block"),B=d("hl-demo1"),h=d("hl-demo2"),r=d("hl-demo3"),i=d("hl-demo4"),C=d("hl-demo5"),_=d("hl-demo6"),D=d("hl-demo7"),f=d("right-nav");return y(),L(T,null,[n("section",null,[q,e(l,null,{source:c(()=>[e(a)]),highlight:c(()=>[z]),_:1}),P,e(l,null,{source:c(()=>[e(B)]),highlight:c(()=>[W]),_:1}),$,e(l,null,{source:c(()=>[e(h)]),highlight:c(()=>[I]),_:1}),R,O,e(l,null,{source:c(()=>[e(r)]),highlight:c(()=>[Q]),_:1}),G,e(l,null,{source:c(()=>[e(i)]),highlight:c(()=>[X]),_:1}),Y,e(l,null,{source:c(()=>[e(C)]),highlight:c(()=>[J]),_:1}),K,Z,e(l,null,{source:c(()=>[e(_)]),highlight:c(()=>[uu]),_:1}),nu,e(l,null,{source:c(()=>[e(D)]),highlight:c(()=>[su]),_:1}),tu]),e(f)],64)}var pu=U(M,[["render",lu]]);export{pu as default};
