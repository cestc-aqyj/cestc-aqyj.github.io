import{p as m,R as _,F as a,L as g,W as b,X as t,a1 as w,C as x,P as s,Q as e,S,V as u,E as M,M as n,o as C}from"./vue.45a90dcf.js";import{_ as E}from"./index.22311846.js";import{G as j,J as A}from"./hongluan-icons.084d359d.js";import"./hongluan.e8fea845.js";import"./highlight.687c59a9.js";const T=m({setup(h){const r=c=>`${c}%  Complete`,l=_([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:c=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${c}%`}]);return(c,o)=>{const p=a("hl-progress");return g(),b(w,null,[t(p,{percentage:40,format:r,round:"",class:"m-b-xxl",align:"items-right"}),t(p,{"show-as":"stack",stack:l.value,align:"items-right"},null,8,["stack"])],64)}}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const P=m({setup(h){const r=l=>`${l}%  Complete`;return(l,c)=>{const o=a("hl-progress");return g(),b(w,null,[t(o,{type:"disabled",percentage:40,format:r,round:"",class:"m-b-xxl"}),t(o,{percentage:40,format:r,round:"",class:"m-b-xxl"}),t(o,{percentage:40,format:r,"stroke-width":"3px","show-text":!1,"track-color":"#fff"})],64)}}});var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const F={},W={class:"progress-content"};function L(h,r){const l=a("hl-progress"),c=a("hl-group");return g(),x(c,{indent:"var(--lg)"},{default:s(()=>[t(l,{"show-as":"circle",percentage:80}),t(l,{"show-as":"circle","stroke-width":"4px",percentage:70,color:"#f00","track-color":"rgba(0,0,0, 0.01)"},{default:s(({percentage:o})=>[e("div",W,[e("h5",null,"\u6D4B\u8BD5\uFF1A"+S(o),1)])]),_:1}),t(l,{"show-as":"circle",type:"info","stroke-width":"4px",percentage:50,text:"Label"})]),_:1})}var q=E(F,[["render",L]]),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const Q=m({setup(h){const r=_(20),l=_("#409eff"),c=_([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),o=i=>i<30?"#909399":i<70?"#e6a23c":"#67c23a",p=()=>{r.value+=10,r.value>100&&(r.value=100)},d=()=>{r.value-=10,r.value<0&&(r.value=0)};return(i,y)=>{const f=a("hl-progress"),v=a("hl-col"),z=a("hl-row"),k=a("hl-icon"),$=a("hl-button"),B=a("hl-group");return g(),b(w,null,[t(z,{gap:"var(--md)"},{default:s(()=>[t(v,{span:"lg:col-8"},{default:s(()=>[t(f,{percentage:r.value,color:l.value},null,8,["percentage","color"])]),_:1}),t(v,{span:"lg:col-8"},{default:s(()=>[t(f,{percentage:r.value,color:o},null,8,["percentage"])]),_:1}),t(v,{span:"lg:col-8"},{default:s(()=>[t(f,{percentage:r.value,color:c.value},null,8,["percentage","color"])]),_:1})]),_:1}),t(B,{merge:"",indent:"",class:"m-t-lg"},{default:s(()=>[t($,{class:"group-item",onClick:d},{icon:s(()=>[t(k,null,{default:s(()=>[t(u(j))]),_:1})]),_:1}),t($,{class:"group-item",onClick:p},{icon:s(()=>[t(k,null,{default:s(()=>[t(u(A))]),_:1})]),_:1})]),_:1})],64)}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const V=m({setup(h){const r=_(10),l=_(0),c=_([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),o=()=>{r.value+=10,r.value>100&&(r.value=100)},p=()=>{r.value-=10,r.value<0&&(r.value=0)};return M(()=>{setInterval(()=>{l.value=l.value%100+10},500)}),(d,i)=>{const y=a("hl-icon"),f=a("hl-button"),v=a("hl-progress"),z=a("hl-group"),k=a("hl-col"),$=a("hl-row");return g(),x($,null,{default:s(()=>[t(k,{span:"md:col-12"},{default:s(()=>[t(z,{indent:"var(--md)",class:"items-middle"},{default:s(()=>[t(f,{onClick:p},{icon:s(()=>[t(y,null,{default:s(()=>[t(u(j))]),_:1})]),_:1}),t(v,{"show-as":"dashboard",percentage:r.value,color:c.value},null,8,["percentage","color"]),t(f,{onClick:o},{icon:s(()=>[t(y,null,{default:s(()=>[t(u(A))]),_:1})]),_:1})]),_:1})]),_:1}),t(k,{span:"md:col-12"},{default:s(()=>[t(v,{"show-as":"dashboard",percentage:l.value,color:c.value},null,8,["percentage","color"])]),_:1})]),_:1})}}});var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const G=m({setup(h){const r=c=>`${c}%  \u9759\u6001`,l=c=>`${c}%  \u8109\u51B2`;return(c,o)=>{const p=a("hl-progress"),d=a("hl-col"),i=a("hl-row");return g(),x(i,{gap:"var(--md)"},{default:s(()=>[t(d,{span:12},{default:s(()=>[t(p,{percentage:50,indicating:"",format:r})]),_:1}),t(d,{span:12},{default:s(()=>[t(p,{percentage:50,indicating:"",active:"",format:l})]),_:1})]),_:1})}}});var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const N=e("br",null,null,-1),H=m({setup(h){const r=_("\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar");return(l,c)=>{const o=a("hl-progress");return g(),b(w,null,[t(o,{percentage:75,"stroke-width":"var(--xxs)",text:r.value,"show-as":"line"},null,8,["text"]),N,t(o,{percentage:75,"stroke-width":"1px","hide-label":"","show-as":"line"})],64)}}});var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const U=m({setup(h){const r=_([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:l=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${l}%`}]);return(l,c)=>{const o=a("hl-progress");return g(),x(o,{"show-as":"stack",stack:r.value},null,8,["stack"])}}});var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});const Z=e("span",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),ee={class:"progress-label"},te={class:"progress-percentage"},ne=m({setup(h){const r=_([{percentage:35},{percentage:20,type:"warning"},{percentage:20,type:"error"}]);return(l,c)=>{const o=a("hl-progress");return g(),b(w,null,[t(o,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:s(()=>[Z]),_:1}),t(o,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:s(({percentage:p,text:d})=>[e("span",ee,S(d),1),e("span",te,S(p)+"%",1)]),_:1}),t(o,{"show-as":"stack",stack:r.value,class:"m-b-xxl"},{default:s(({percentage:p})=>[e("strong",null,"\u8FDB\u5EA6\uFF1A"+S(p)+"%",1)]),_:1},8,["stack"])],64)}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne});const oe=m({setup(h){const r=c=>`${c}%  \u9759\u6001\u6761\u7EB9`,l=c=>`${c}%  \u6EDA\u52A8\u6761\u7EB9`;return(c,o)=>{const p=a("hl-progress"),d=a("hl-col"),i=a("hl-row");return g(),x(i,{gap:"var(--md)"},{default:s(()=>[t(d,{span:12},{default:s(()=>[t(p,{percentage:50,striped:"",format:r})]),_:1}),t(d,{span:12},{default:s(()=>[t(p,{percentage:50,striped:"",active:"",format:l})]),_:1})]),_:1})}}});var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});const ae=m({setup(h){const r=o=>`${o}%  success`,l=o=>`${o}%  warning`,c=o=>`${o}%  danger`;return(o,p)=>{const d=a("hl-progress"),i=a("hl-col"),y=a("hl-row");return g(),x(y,{gap:"var(--md)"},{default:s(()=>[t(i,{span:"lg:col-8"},{default:s(()=>[t(d,{percentage:68,type:"warning",format:l})]),_:1}),t(i,{span:"lg:col-8"},{default:s(()=>[t(d,{percentage:68,type:"success",format:r})]),_:1}),t(i,{span:"lg:col-8"},{default:s(()=>[t(d,{percentage:68,type:"error",format:c})]),_:1})]),_:1})}}});var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});const le=e("h1",null,"Progress \u8FDB\u5EA6\u6761",-1),pe=e("p",null,"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\uFF0C\u544A\u77E5\u7528\u6237\u5F53\u524D\u72B6\u6001\u548C\u9884\u671F\u3002",-1),ue=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),n(" \u57FA\u7840\u7528\u6CD5")],-1),de=e("div",null,[e("p",null,[n("\u6DFB\u52A0"),e("code",null,"percentage"),n("\u5C5E\u6027\u5373\u53EF\uFF0C\u8868\u793A\u8FDB\u5EA6\u6761\u5BF9\u5E94\u7684\u767E\u5206\u6BD4\uFF0C"),e("strong",null,"\u5FC5\u586B"),n("\uFF0C\u5FC5\u987B\u5728 0-100\u3002\u901A\u8FC7 "),e("code",null,"format"),n(" \u5C5E\u6027\u6765\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9\u3002")])],-1),ie=e("h2",{id:"jin-du-tiao-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-du-tiao-zhuang-tai"}),n(" \u8FDB\u5EA6\u6761\u72B6\u6001")],-1),ge=e("p",null,[n("\u6DFB\u52A0"),e("code",null,"type"),n("\u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001\u3002")],-1),he=e("h2",{id:"jie-duan-yan-se"},[e("a",{class:"header-anchor",href:"#jie-duan-yan-se"}),n(" \u9636\u6BB5\u989C\u8272")],-1),_e=e("p",null,[n("\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"color"),n(" \u8BBE\u7F6E\u8FDB\u5EA6\u6761\u4E0D\u540C\u9636\u6BB5\u7684\u989C\u8272\uFF0C"),e("code",null,"color"),n(" \u53EF\u4EE5\u63A5\u53D7\u989C\u8272\u5B57\u7B26\u4E32\uFF0C\u51FD\u6570\u548C\u6570\u7EC4\u3002")],-1),me=e("h2",{id:"tiao-wen-zhuang"},[e("a",{class:"header-anchor",href:"#tiao-wen-zhuang"}),n(" \u6761\u7EB9\u72B6")],-1),fe=e("p",null,[n("\u6DFB\u52A0"),e("code",null,"striped"),n("\u5C5E\u6027\u8BBE\u7F6E\u6761\u7EB9\u72B6, \u6DFB\u52A0"),e("code",null,"active"),n("\u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u7EB9\u3002")],-1),ve=e("h2",{id:"mai-chong-zhuang"},[e("a",{class:"header-anchor",href:"#mai-chong-zhuang"}),n(" \u8109\u51B2\u72B6")],-1),be=e("p",null,[n("\u6DFB\u52A0"),e("code",null,"indicating"),n("\u5C5E\u6027\u8BBE\u7F6E\u9759\u6001\u8109\u51B2\u72B6, \u6DFB\u52A0"),e("code",null,"active"),n("\u5C5E\u6027\u8BBE\u7F6E\u8109\u51B2\u72B6\u3002")],-1),we=e("h2",{id:"dui-die-zhuang"},[e("a",{class:"header-anchor",href:"#dui-die-zhuang"}),n(" \u5806\u53E0\u72B6")],-1),xe=e("p",null,[n("\u6DFB\u52A0\u5C5E\u6027"),e("code",null,"show-as"),n("\u503C\u4E3A"),e("code",null,"stack"),n("\u65F6\u53D8\u4E3A\u5806\u53E0\u72B6\uFF0C\u7528 "),e("code",null,"stack"),n(" \u4F20\u53C2\u3002")],-1),ye=e("div",null,[e("p",null,[n("\u53EF\u9009\u503C\uFF1A"),e("code",null,"percentage"),n(","),e("code",null,"type"),n(","),e("code",null,"striped"),n(","),e("code",null,"indicating"),n(","),e("code",null,"active"),n(","),e("code",null,"format"),n(" \u7B49\u5C5E\u6027")])],-1),ke=e("h2",{id:"xian-tiao-yang-shi"},[e("a",{class:"header-anchor",href:"#xian-tiao-yang-shi"}),n(" \u7EBF\u6761\u6837\u5F0F")],-1),$e=e("p",null,[n("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"show-as"),n("\u4E3A "),e("code",null,"line"),n(" \u6837\u5F0F\u5373\u53EF\u5C55\u73B0\u4E00\u79CD\u65B0\u7684\u5F62\u6001")],-1),Se=e("h2",{id:"dui-qi-fang-shi"},[e("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),n(" \u5BF9\u9F50\u65B9\u5F0F")],-1),ze=e("p",null,[n("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"align"),n("\u4E3A "),e("code",null,"left"),n(),e("code",null,"center"),n(),e("code",null,"right"),n(" \u6837\u5F0F\u5373\u53EF\u6539\u53D8\u8FDB\u5EA6\u6761\u7684\u5BF9\u9F50\u65B9\u5F0F")],-1),je=e("h2",{id:"huan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#huan-xing-jin-du-tiao"}),n(" \u73AF\u5F62\u8FDB\u5EA6\u6761")],-1),Ae=e("p",null,[n("Progress \u7EC4\u4EF6\u53EF\u901A\u8FC7 "),e("code",null,"show-as"),n(" \u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF0C\u5728\u73AF\u5F62\u8FDB\u5EA6\u6761\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"width"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u5176\u5927\u5C0F\u3002")],-1),Be=e("h2",{id:"yi-biao-pan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#yi-biao-pan-xing-jin-du-tiao"}),n(" \u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761")],-1),Me=e("p",null,[n("\u901A\u8FC7 "),e("code",null,'show-as="dashboard"'),n("\u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761\u3002")],-1),Ce=e("h2",{id:"zi-ding-yi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),n(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),Ee=e("p",null,"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),Te=C('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>percentage</td><td>\u767E\u5206\u6BD4</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>show-as</td><td>\u8FDB\u5EA6\u6761\u5C55\u73B0\u5F62\u5F0F</td><td>string</td><td>stack / circle / dashboard / line</td><td>\u2014</td></tr><tr><td>stroke-width</td><td>\u8FDB\u5EA6\u6761\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001</td><td>string</td><td>success / warning / error</td><td>\u2014</td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF08\u4F1A\u8986\u76D6\u72B6\u6001\u989C\u8272\uFF09(show-as \u4E3A stack \u65F6\u4E0D\u53EF\u7528)</td><td>string/function/array</td><td>\u2014</td><td></td></tr><tr><td>track-color</td><td>\u8FDB\u5EA6\u6761\u8F68\u9053\u989C\u8272</td><td>string</td><td>\u2014</td><td></td></tr><tr><td>show-text</td><td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>function(percentage)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>text</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u63CF\u8FF0\u6587\u5B57\uFF0C\u4E3B\u8981\u7528\u5728 line=true \u65F6\uFF0C\u663E\u793A\u5DE6\u4FA7\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>stack</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u96C6\u5408\uFF08\u53EA\u5728 show-as \u4E3A stack \u65F6\u53EF\u7528\uFF09</td><td>array[{percentage, type, striped, indicating, active, format}]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>align</td><td>\u8FDB\u5EA6\u6761\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u9ED8\u8BA4\u4E3A { percentage, text }\uFF0Cshow-as=stack \u65F6{percentage, type, striped, indicating, active, format}</td></tr></tbody></table>',4),Le={setup(h){const r={"../../../examples/progress/align.vue":O,"../../../examples/progress/basic.vue":D,"../../../examples/progress/circle.vue":I,"../../../examples/progress/color.vue":R,"../../../examples/progress/dashboard.vue":X,"../../../examples/progress/indicating.vue":J,"../../../examples/progress/line.vue":K,"../../../examples/progress/show-as.vue":Y,"../../../examples/progress/slot.vue":re,"../../../examples/progress/striped.vue":se,"../../../examples/progress/type.vue":ce};return(l,c)=>{const o=a("demo-block"),p=a("right-nav");return g(),b(w,null,[e("section",null,[le,pe,ue,t(o,{fs:"",demos:u(r),"path-name":"progress/basic","source-code":`<template>
  <hl-progress type="disabled" :percentage="40" :format="format" round class="m-b-xxl" />
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" />
  <hl-progress :percentage="40" :format="format" stroke-width="3px" :show-text="false" track-color="#fff" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  Complete\`
}

<\/script>
`},{default:s(()=>[de]),_:1},8,["demos"]),ie,ge,t(o,{fs:"",demos:u(r),"path-name":"progress/type","source-code":`<template>
  <hl-row gap="var(--md)">
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="warning" :format="formatWarning" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="success" :format="formatSuccess" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="error" :format="formatDanger" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formatSuccess = percentage => {
  return \`\${percentage}%  success\`
}
const formatWarning = percentage => {
  return \`\${percentage}%  warning\`
}
const formatDanger = percentage => {
  return \`\${percentage}%  danger\`
}
<\/script>
`},null,8,["demos"]),he,_e,t(o,{fs:"",demos:u(r),"path-name":"progress/color","source-code":`<template>
  <hl-row gap="var(--md)">
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColor" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColorMethod" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColors" />
    </hl-col>
  </hl-row>

  <hl-group merge indent class="m-t-lg">
    <hl-button class="group-item" @click="decrease">
      <template #icon>
        <hl-icon><two-minus /></hl-icon>
      </template>
    </hl-button>
    <hl-button class="group-item" @click="increase">
      <template #icon>
        <hl-icon><two-plus /></hl-icon>
      </template>
    </hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'


const percentage = ref(20)
const customColor = ref('#409eff')
const customColors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
])

const customColorMethod = percentage => {
  if (percentage < 30) {
    return '#909399'
  } else if (percentage < 70) {
    return '#e6a23c'
  } else {
    return '#67c23a'
  }
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}

<\/script>
`},null,8,["demos"]),me,fe,t(o,{fs:"",demos:u(r),"path-name":"progress/striped","source-code":`<template>
  <hl-row gap="var(--md)">
    <hl-col :span="12">
      <hl-progress :percentage="50" striped :format="format" />
    </hl-col>
    <hl-col :span="12">
      <hl-progress :percentage="50" striped active :format="formatActive" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  \u9759\u6001\u6761\u7EB9\`
}
const formatActive = percentage => {
  return \`\${percentage}%  \u6EDA\u52A8\u6761\u7EB9\`
}

<\/script>
`},null,8,["demos"]),ve,be,t(o,{fs:"",demos:u(r),"path-name":"progress/indicating","source-code":`<template>
  <hl-row gap="var(--md)">
    <hl-col :span="12">
      <hl-progress :percentage="50" indicating :format="format" />
    </hl-col>
    <hl-col :span="12">
      <hl-progress :percentage="50" indicating active :format="formatActive" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  \u9759\u6001\`
}
const formatActive = percentage => {
  return \`\${percentage}%  \u8109\u51B2\`
}

<\/script>
`},null,8,["demos"]),we,xe,t(o,{fs:"",demos:u(r),"path-name":"progress/show-as","source-code":`<template>
  <hl-progress show-as="stack" :stack="list" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  {
    percentage: 35,
    type: '',
    striped: true,
    active: false,
  },
  {
    percentage: 20,
    type: 'warning',
    indicating: true,
    active: true,
  },
  {
    percentage: 20,
    type: 'error',
    format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,
  },
])

<\/script>
`},{default:s(()=>[ye]),_:1},8,["demos"]),ke,$e,t(o,{fs:"",demos:u(r),"path-name":"progress/line","source-code":`<template>
  <hl-progress :percentage="75" stroke-width="var(--xxs)" :text="text" show-as="line" />
  <br>
  <hl-progress :percentage="75" stroke-width="1px" hide-label show-as="line" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar')

<\/script>
`},null,8,["demos"]),Se,ze,t(o,{fs:"",demos:u(r),"path-name":"progress/align","source-code":`<template>
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" align="items-right" />

  <hl-progress show-as="stack" :stack="list" align="items-right" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  Complete\`
}

const list = ref([
  {
    percentage: 35,
    type: '',
    striped: true,
    active: false,
  },
  {
    percentage: 20,
    type: 'warning',
    indicating: true,
    active: true,
  },
  {
    percentage: 20,
    type: 'error',
    format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,
  },
])

<\/script>
`},null,8,["demos"]),je,Ae,t(o,{fs:"",demos:u(r),"path-name":"progress/circle","source-code":`<template>
  <hl-group indent="var(--lg)">
    <hl-progress show-as="circle" :percentage="80" />
    <hl-progress show-as="circle" stroke-width="4px" :percentage="70" color="#f00" track-color="rgba(0,0,0, 0.01)">
      <template #default="{percentage}">
        <div class="progress-content">
          <h5>\u6D4B\u8BD5\uFF1A{{ percentage }}</h5>
        </div>
      </template>
    </hl-progress>
    <hl-progress show-as="circle" type="info" stroke-width="4px" :percentage="50" text="Label" />
  </hl-group>
</template>
`},null,8,["demos"]),Be,Me,t(o,{fs:"",demos:u(r),"path-name":"progress/dashboard","source-code":`<template>
  <hl-row>
    <hl-col span="md:col-12">
      <hl-group indent="var(--md)" class="items-middle">
        <hl-button @click="decrease">
          <template #icon>
            <hl-icon><two-minus /></hl-icon>
          </template>
        </hl-button>
        <hl-progress show-as="dashboard" :percentage="percentage" :color="colors" />
        <hl-button @click="increase">
          <template #icon>
            <hl-icon><two-plus /></hl-icon>
          </template>
        </hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12">
      <hl-progress show-as="dashboard" :percentage="percentage2" :color="colors" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'

const percentage = ref(10)
const percentage2 = ref(0)
const colors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
])

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}

onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})

<\/script>
`},null,8,["demos"]),Ce,Ee,t(o,{fs:"",demos:u(r),"path-name":"progress/slot","source-code":`<template>
  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">
    <span>\u81EA\u5B9A\u4E49\u5185\u5BB9</span>
  </hl-progress>

  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">
    <template #default="{percentage, text}">
      <span class="progress-label">{{ text }}</span>
      <span class="progress-percentage">{{ percentage }}%</span>
    </template>
  </hl-progress>

  <hl-progress show-as="stack" :stack="list" class="m-b-xxl">
    <template #default="{percentage}">
      <strong>\u8FDB\u5EA6\uFF1A{{ percentage }}%</strong>
    </template>
  </hl-progress>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  {
    percentage: 35,
  },
  {
    percentage: 20,
    type: 'warning',
  },
  {
    percentage: 20,
    type: 'error',
  },
])

<\/script>
`},null,8,["demos"]),Te]),t(p)],64)}}};export{Le as default};
