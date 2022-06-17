import{p as g,R as _,ap as y,H as x,L as t,W as n,a2 as p,ad as j,S as k,B as h,V as r,a as v,F as b,Q as s,X as u,M as d,o as S}from"./vue.247780a9.js";const $={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}},w=g({setup(m){const e=_(0),i=()=>{e.value+=2};return(a,l)=>{const o=y("infinite-scroll");return x((t(),n("ul",$,[(t(!0),n(p,null,j(e.value,c=>(t(),n("li",{key:c,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(c),1))),128))])),[[o,i]])}}});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const A=["infinite-scroll-disabled"],T={key:0},F={key:1},O=g({setup(m){const e=_(10),i=_(!1),a=h(()=>e.value>=20),l=h(()=>i.value||a.value),o=()=>{i.value=!0,setTimeout(()=>{e.value+=2,i.value=!1},2e3)};return(c,W)=>{const M=y("infinite-scroll");return t(),n("div",null,[x((t(),n("ul",{style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":r(l)},[(t(!0),n(p,null,j(e.value,f=>(t(),n("li",{key:f,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(f),1))),128))],8,A)),[[M,o]]),i.value?(t(),n("p",T,"\u52A0\u8F7D\u4E2D...")):v("",!0),r(a)?(t(),n("p",F,"\u6CA1\u6709\u66F4\u591A\u4E86")):v("",!0)])}}});var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const D=s("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),E=s("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),L=s("h2",{id:"ji-chu-yong-fa"},[s("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),d(" \u57FA\u7840\u7528\u6CD5")],-1),Q=s("p",null,[d("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),s("code",null,"v-infinite-scroll"),d("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),R=s("h2",{id:"jin-yong-jia-zai"},[s("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),d(" \u7981\u7528\u52A0\u8F7D")],-1),V=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2),C={setup(m){const e={"../../../examples/infinite-scroll/basic.vue":z,"../../../examples/infinite-scroll/disabled.vue":B};return(i,a)=>{const l=b("demo-block"),o=b("right-nav");return t(),n(p,null,[s("section",null,[D,E,L,Q,u(l,{fs:"",demos:r(e),"path-name":"infinite-scroll/basic","source-code":`<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none">
    <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const load = () => {
  count.value += 2
}
<\/script>
`},null,8,["demos"]),R,u(l,{fs:"",demos:r(e),"path-name":"infinite-scroll/disabled","source-code":`<template>
  <div>
    <ul
      v-infinite-scroll="load"
      style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
    </ul>
    <p v-if="loading">\u52A0\u8F7D\u4E2D...</p>
    <p v-if="noMore">\u6CA1\u6709\u66F4\u591A\u4E86</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const count = ref(10)
const loading = ref(false)

const noMore = computed(() => {
  return count.value >= 20
})
const disabled = computed(() => {
  return loading.value || noMore.value
})

const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
<\/script>
`},null,8,["demos"]),V]),u(o)],64)}}};export{C as default};
