var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,a=(t,a)=>{for(var l in a||(a={}))n.call(a,l)&&r(t,l,a[l]);if(e)for(var l of e(a))o.call(a,l)&&r(t,l,a[l]);return t};import{W as l,o as d,c as h,i as c,v as i,s,E as p,aK as m,aL as u}from"./vue.b9c48aee.js";import{_ as b}from"./index.c59879b2.js";import"./hongluan-business.74ca0624.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.24045f27.js";const g={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=u;return a({render:function(o,r){const a=t("hb-empty");return e(),n(a,{description:"描述文字"})}},{})}(),"hl-demo1":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=u;return a({render:function(o,r){const a=t("hb-empty");return e(),n(a,{image:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"})}},{})}(),"hl-demo2":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=u;return a({render:function(o,r){const a=t("hb-empty");return e(),n(a,{"image-size":"20vw"})}},{})}(),"hl-demo3":function(){const{createTextVNode:t,resolveComponent:e,withCtx:n,createVNode:o,openBlock:r,createBlock:l}=u,d=t("返回首页");return a({render:function(t,a){const h=e("hl-button"),c=e("hl-group"),i=e("hb-empty");return r(),l(i,null,{default:n((()=>[o(c,{class:"m-t-lg"},{default:n((()=>[o(h,{type:"primary",icon:"arrowLeft","icon-position":"left"},{default:n((()=>[d])),_:1})])),_:1})])),_:1})}},{})}()}},f={class:"doc-main-content"},y={class:"doc-content"},v=c("h1",null,"Empty 空状态",-1),j=c("p",null,"空状态时的占位提示。",-1),w=c("h2",{id:"ji-chu-yong-fa"},[c("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),p(" 基础用法")],-1),k=c("pre",null,[c("code",{class:"html"},'<template>\n  <hb-empty description="描述文字"></hb-empty>\n</template>\n')],-1),B=c("h2",{id:"zi-ding-yi-tu-pian"},[c("a",{class:"header-anchor",href:"#zi-ding-yi-tu-pian"}),p(" 自定义图片")],-1),_=c("p",null,[p("通过设置 "),c("code",null,"image"),p(" 属性传入图片 URL。")],-1),z=c("pre",null,[c("code",{class:"html"},'<template>\n  <hb-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></hb-empty>\n</template>\n')],-1),O=c("h2",{id:"tu-pian-chi-cun"},[c("a",{class:"header-anchor",href:"#tu-pian-chi-cun"}),p(" 图片尺寸")],-1),C=c("p",null,[p("通过设置 "),c("code",null,"image-size"),p(" 属性来控制图片大小。")],-1),E=c("pre",null,[c("code",{class:"html"},'<template>\n  <hb-empty image-size="20vw"></hb-empty>\n</template>\n')],-1),x=c("h2",{id:"di-bu-nei-rong"},[c("a",{class:"header-anchor",href:"#di-bu-nei-rong"}),p(" 底部内容")],-1),L=c("p",null,"使用默认插槽可在底部插入内容。",-1),N=c("pre",null,[c("code",{class:"html"},'<template>\n  <hb-empty>\n    <hl-group class="m-t-lg">\n      <hl-button type="primary" icon="arrowLeft" icon-position="left">返回首页</hl-button>\n    </hl-group>\n  </hb-empty>\n</template>\n')],-1),P=m('<h2 id="empty-attributes"><a class="header-anchor" href="#empty-attributes"></a> Empty Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>image</td><td>图片地址</td><td>string</td><td>—</td><td>—</td></tr><tr><td>image-size</td><td>图片大小（宽度）</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>文本描述</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h2 id="empty-slots"><a class="header-anchor" href="#empty-slots"></a> Empty Slots</h2><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义底部内容</td></tr><tr><td>image</td><td>自定义图片</td></tr><tr><td>description</td><td>自定义描述文字</td></tr></tbody></table>',4);var S=b(g,[["render",function(t,e,n,o,r,a){const p=l("hl-demo0"),m=l("demo-block"),u=l("hl-demo1"),b=l("hl-demo2"),g=l("hl-demo3"),S=l("right-nav");return d(),h("section",f,[c("div",y,[v,j,w,i(m,null,{source:s((()=>[i(p)])),highlight:s((()=>[k])),_:1}),B,_,i(m,null,{source:s((()=>[i(u)])),highlight:s((()=>[z])),_:1}),O,C,i(m,null,{source:s((()=>[i(b)])),highlight:s((()=>[E])),_:1}),x,L,i(m,null,{source:s((()=>[i(g)])),highlight:s((()=>[N])),_:1}),P]),i(S)])}]]);export{S as default};