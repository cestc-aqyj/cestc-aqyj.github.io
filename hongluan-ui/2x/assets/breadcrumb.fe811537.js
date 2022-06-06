import{F as d,L as u,C as m,P as r,X as a,M as e,Q as t,p as i,V as h,W as _,a2 as p,o as f}from"./vue.651ae949.js";import{_ as g}from"./index.20bc56e0.js";import{C as y,A as v}from"./hongluan-icons.071444ab.js";import"./hongluan.44f21e2d.js";import"./highlight.687c59a9.js";const B={},$=e("\u9996\u9875"),A=t("a",{href:"/"},"\u6D3B\u52A8\u7BA1\u7406",-1),x=e("\u6D3B\u52A8\u5217\u8868"),S=e("\u6D3B\u52A8\u8BE6\u60C5");function z(b,l){const n=d("hl-breadcrumb-item"),c=d("hl-breadcrumb");return u(),m(c,{separator:"/"},{default:r(()=>[a(n,{to:{path:"/"}},{default:r(()=>[$]),_:1}),a(n,null,{default:r(()=>[A]),_:1}),a(n,null,{default:r(()=>[x]),_:1}),a(n,null,{default:r(()=>[S]),_:1})]),_:1})}var C=g(B,[["render",z]]),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const w=e("\u9996\u9875"),I=e("\u6D3B\u52A8\u7BA1\u7406"),T=e(" \u6D3B\u52A8\u5217\u8868 "),j=e("\u6D3B\u52A8\u8BE6\u60C5"),M=i({setup(b){return(l,n)=>{const c=d("hl-icon"),o=d("hl-breadcrumb-item"),s=d("hl-breadcrumb");return u(),m(s,null,{icon:r(()=>[a(c,null,{default:r(()=>[a(h(y))]),_:1})]),default:r(()=>[a(o,{to:{path:"/"}},{default:r(()=>[w]),_:1}),a(o,null,{default:r(()=>[I]),_:1}),a(o,null,{icon:r(()=>[a(c,{size:"sm",type:"danger"},{default:r(()=>[a(h(v))]),_:1})]),default:r(()=>[T]),_:1}),a(o,null,{default:r(()=>[j]),_:1})]),_:1})}}});var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const P=t("h1",null,"Breadcrumb \u9762\u5305\u5C51",-1),k=t("p",null,"\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u5FEB\u901F\u8FD4\u56DE\u4E4B\u524D\u7684\u4EFB\u610F\u9875\u9762\u3002",-1),L=t("div",null,[t("p",null,[e("\u5728 Breadcrumb \u7EC4\u4EF6\u4E2D\u4F7F\u7528 BreadcrumbItem \u7EC4\u4EF6\u8868\u793A\u4ECE\u9996\u9875\u5F00\u59CB\u7684\u6BCF\u4E00\u7EA7\u3002Hongluan UI \u63D0\u4F9B\u4E86\u4E00\u4E2A"),t("code",null,"separator"),e("\u5C5E\u6027\uFF0C\u5728 Breadcrumb \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E\u5B83\u6765\u51B3\u5B9A\u5206\u9694\u7B26\uFF0C\u5B83\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4\u4E3A\u659C\u6760"),t("code",null,"/"),e("\u3002")])],-1),O=t("h2",{id:"tu-biao-fen-ge-fu"},[t("a",{class:"header-anchor",href:"#tu-biao-fen-ge-fu"}),e(" \u56FE\u6807\u5206\u9694\u7B26")],-1),Q=t("p",null,[e("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"icon"),e(" \u63D2\u69FD\uFF0C\u53EF\u4F7F\u7528\u76F8\u5E94\u7684 "),t("code",null,"icon\u56FE\u6807"),e(" \u4F5C\u4E3A\u5206\u9694\u7B26")],-1),R=t("div",null,[t("p",null,[e("\u6CE8\u610F\uFF0C\u4F7F\u7528"),t("code",null,"icon"),e(" \u63D2\u69FD\u5C06\u4F7F "),t("code",null,"separator"),e(" \u8BBE\u7F6E\u5931\u6548")])],-1),V=f('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>separator</td><td>\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u659C\u6760&#39;/&#39;</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon</td></tr></tbody></table><h2 id="breadcrumb-item-attributes"><a class="header-anchor" href="#breadcrumb-item-attributes"></a> Breadcrumb Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>to</td><td>\u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C <code>vue-router</code> \u7684 <code>to</code></td><td>string/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>replace</td><td>\u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="breadcrumb-item-slots"><a class="header-anchor" href="#breadcrumb-item-slots"></a> Breadcrumb Item Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8EBreadcrumb icon\u63D2\u69FD</td></tr></tbody></table>',8),U={setup(b){const l={"../../../examples/breadcrumb/basic.vue":D,"../../../examples/breadcrumb/icon.vue":N};return(n,c)=>{const o=d("demo-block"),s=d("right-nav");return u(),_(p,null,[t("section",null,[P,k,a(o,{fs:"",demos:h(l),"path-name":"breadcrumb/basic","source-code":`<template>
  <hl-breadcrumb separator="/">
    <hl-breadcrumb-item :to="{ path: '/' }">\u9996\u9875</hl-breadcrumb-item>
    <hl-breadcrumb-item><a href="/">\u6D3B\u52A8\u7BA1\u7406</a></hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u5217\u8868</hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u8BE6\u60C5</hl-breadcrumb-item>
  </hl-breadcrumb>
</template>
`},{default:r(()=>[L]),_:1},8,["demos"]),O,Q,a(o,{fs:"",demos:h(l),"path-name":"breadcrumb/icon","source-code":`<template>
  <hl-breadcrumb>
    <template #icon>
      <hl-icon>
        <two-chevron-right />
      </hl-icon>
    </template>
    <hl-breadcrumb-item :to="{ path: '/' }">\u9996\u9875</hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u7BA1\u7406</hl-breadcrumb-item>
    <hl-breadcrumb-item>
      \u6D3B\u52A8\u5217\u8868
      <template #icon>
        <hl-icon size="sm" type="danger">
          <two-airplay />
        </hl-icon>
      </template>
    </hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u8BE6\u60C5</hl-breadcrumb-item>
  </hl-breadcrumb>
</template>
<script lang="ts" setup>
import { TwoAirplay, TwoChevronRight } from '@hongluan-ui/icons'
<\/script>
`},{default:r(()=>[R]),_:1},8,["demos"]),V]),a(s)],64)}}};export{U as default};
