var v=Object.defineProperty;var A=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,p=(a,e)=>{for(var t in e||(e={}))w.call(e,t)&&g(a,t,e[t]);if(A)for(var t of A(e))L.call(e,t)&&g(a,t,e[t]);return a};import{Y as _,L as T,W as $,Q as o,a2 as h,a0 as m,P,a3 as E,o as Q,aG as y}from"./vue.a2bb788b.js";import{_ as W}from"./index.6c900e06.js";import"./hongluan.bb564fd4.js";import"./highlight.5c3ff532.js";import"./hongluan-icons.da8bad7b.js";const G={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:a,resolveComponent:e,withCtx:t,createVNode:u,openBlock:r,createBlock:c}=y,d=a("header"),n=a("sub-header"),l=a("aside"),s=a("main"),f=a("footer");function b(x,C){const i=e("hl-header"),B=e("hl-sub-header"),F=e("hl-aside"),D=e("hl-main"),j=e("hl-container"),N=e("hl-footer"),V=e("hl-layout");return r(),c(V,{class:"dom-area","data-name":"\u5916\u5C42\u5BB9\u5668"},{default:t(()=>[u(i,{class:"dom-area","data-name":"\u5934\u90E8"},{default:t(()=>[d]),_:1}),u(B,{class:"dom-area","data-name":"\u5B50\u7EA7\u5934\u90E8"},{default:t(()=>[n]),_:1}),u(j,{class:"dom-area","data-name":"\u5BB9\u5668"},{default:t(()=>[u(F,{class:"dom-area","data-name":"\u4FA7\u8FB9\u680F"},{default:t(()=>[l]),_:1}),u(D,{class:"dom-area","data-name":"\u4E3B\u4F53\u5185\u5BB9",style:{"min-height":"300px",height:"300px"}},{default:t(()=>[s]),_:1})]),_:1}),u(N,{class:"dom-area","data-name":"\u5E95\u90E8"},{default:t(()=>[f]),_:1})]),_:1})}return p({render:b},{})}(),"hl-demo1":function(){const{createTextVNode:a,resolveComponent:e,withCtx:t,createVNode:u,openBlock:r,createBlock:c}=y,d=a("header"),n=a("aside"),l=a("main");function s(b,k){const x=e("hl-header"),C=e("hl-aside"),i=e("hl-main"),B=e("hl-container"),F=e("hl-layout");return r(),c(F,{class:"dom-area","data-name":"\u5916\u5C42\u5BB9\u5668"},{default:t(()=>[u(x,{class:"dom-area","data-name":"\u5934\u90E8"},{default:t(()=>[d]),_:1}),u(B,{class:"dom-area","data-name":"\u5BB9\u5668"},{default:t(()=>[u(C,{class:"dom-area","data-name":"\u4FA7\u8FB9\u680F"},{default:t(()=>[n]),_:1}),u(i,{class:"dom-area","data-name":"\u4E3B\u4F53\u5185\u5BB9",style:{"min-height":"300px",height:"300px"}},{default:t(()=>[l]),_:1})]),_:1})]),_:1})}return p({render:s},{})}()}},X=o("h1",null,"Layout \u5E03\u5C40",-1),Y=o("p",null,"\u7528\u4E8E\u5E03\u5C40\u7684\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u65B9\u4FBF\u5FEB\u901F\u642D\u5EFA\u9875\u9762\u7684\u57FA\u672C\u7ED3\u6784\uFF1A",-1),q=o("pre",null,[o("code",{class:"html"},`<template>
  <hl-layout class="dom-area" data-name="\u5916\u5C42\u5BB9\u5668">
    <hl-header class="dom-area" data-name="\u5934\u90E8">header</hl-header>
    <hl-sub-header class="dom-area" data-name="\u5B50\u7EA7\u5934\u90E8"
      >sub-header</hl-sub-header
    >
    <hl-container class="dom-area" data-name="\u5BB9\u5668">
      <hl-aside class="dom-area" data-name="\u4FA7\u8FB9\u680F">aside</hl-aside>
      <hl-main
        class="dom-area"
        data-name="\u4E3B\u4F53\u5185\u5BB9"
        style="min-height: 300px; height: 300px"
        >main</hl-main
      >
    </hl-container>
    <hl-footer class="dom-area" data-name="\u5E95\u90E8">footer</hl-footer>
  </hl-layout>
</template>

`)],-1),z=o("h2",{id:"ke-chai-jie-jie-gou"},[o("a",{class:"header-anchor",href:"#ke-chai-jie-jie-gou"}),E(" \u53EF\u62C6\u89E3\u7ED3\u6784")],-1),H=o("p",null,[E("\u4F60\u53EF\u4EE5\u79FB\u9664 "),o("code",null,"layout"),E(" \u4E0B\u7684\u4EFB\u610F\u5E03\u5C40\u7EC4\u4EF6\u3002\u4EE5\u65B9\u4FBF\u4F60\u8BBE\u8BA1\u51FA\u4E30\u5BCC\u7684\u9875\u9762\u7ED3\u6784\u3002")],-1),I=o("pre",null,[o("code",{class:"html"},`<template>
  <hl-layout class="dom-area" data-name="\u5916\u5C42\u5BB9\u5668">
    <hl-header class="dom-area" data-name="\u5934\u90E8">header</hl-header>
    <hl-container class="dom-area" data-name="\u5BB9\u5668">
      <hl-aside class="dom-area" data-name="\u4FA7\u8FB9\u680F">aside</hl-aside>
      <hl-main
        class="dom-area"
        data-name="\u4E3B\u4F53\u5185\u5BB9"
        style="min-height: 300px; height: 300px"
        >main</hl-main
      >
    </hl-container>
  </hl-layout>
</template>

`)],-1),J=Q('<h2 id="gong-neng-yan-shi"><a class="header-anchor" href="#gong-neng-yan-shi"></a> \u529F\u80FD\u6F14\u793A</h2><p>hongluan-pro \u662F\u4F7F\u7528 hongluan-ui\u5236\u4F5C\u7684\u4E00\u5957\u4F01\u4E1A\u7EA7\u4E1A\u52A1\u4E2D\u53F0\u754C\u9762\u6A21\u7248\u3002<a href="http://pro.front.etcc.group/">\u5B8C\u6574\u5730\u5740</a></p><h2 id="layout-attributes"><a class="header-anchor" href="#layout-attributes"></a> Layout Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>boxed</td><td>\u9875\u9762\u5C45\u4E2D</td><td>boolean</td><td>false</td></tr><tr><td>fixed-aside</td><td>\u4FA7\u8FB9\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>fixed-header</td><td>\u9876\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>fixed-sub-header</td><td>\u4E8C\u7EA7\u9876\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>fixed-footer</td><td>\u5E95\u680F\u662F\u5426\u56FA\u5B9A</td><td>boolean</td><td>false</td></tr><tr><td>full-header</td><td>\u9876\u680F\u662F\u5426\u6EE1\u5BBD</td><td>boolean</td><td>false</td></tr><tr><td>full-sub-header</td><td>\u4E8C\u7EA7\u9876\u680F\u662F\u5426\u6EE1\u5BBD</td><td>boolean</td><td>false</td></tr><tr><td>full-footer</td><td>\u5E95\u680F\u662F\u5426\u6EE1\u5BBD</td><td>boolean</td><td>false</td></tr></tbody></table>',4);function K(a,e,t,u,r,c){const d=_("hl-demo0"),n=_("demo-block"),l=_("hl-demo1"),s=_("right-nav");return T(),$(P,null,[o("section",null,[X,Y,h(n,null,{source:m(()=>[h(d)]),highlight:m(()=>[q]),_:1}),z,H,h(n,null,{source:m(()=>[h(l)]),highlight:m(()=>[I]),_:1}),J]),h(s)],64)}var ee=W(G,[["render",K]]);export{ee as default};
