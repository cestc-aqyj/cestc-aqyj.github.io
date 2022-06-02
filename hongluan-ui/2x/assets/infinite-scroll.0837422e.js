import{p as y,R as _,ah as x,H as j,L as n,W as e,a2 as p,ad as k,S as M,B as h,V as r,a as v,F as b,Q as t,X as u,P as g,M as d,o as $}from"./vue.651ae949.js";const w={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}},z=y({setup(f){const s=_(0),i=()=>{s.value+=2};return(a,l)=>{const o=x("infinite-scroll");return j((n(),e("ul",w,[(n(!0),e(p,null,k(s.value,c=>(n(),e("li",{key:c,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},M(c),1))),128))])),[[o,i]])}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const T=["infinite-scroll-disabled"],F={key:0},O={key:1},P=y({setup(f){const s=_(10),i=_(!1),a=h(()=>s.value>=20),l=h(()=>i.value||a.value),o=()=>{i.value=!0,setTimeout(()=>{s.value+=2,i.value=!1},2e3)};return(c,C)=>{const S=x("infinite-scroll");return n(),e("div",null,[j((n(),e("ul",{style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":r(l)},[(n(!0),e(p,null,k(s.value,m=>(n(),e("li",{key:m,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},M(m),1))),128))],8,T)),[[S,o]]),i.value?(n(),e("p",F,"\u52A0\u8F7D\u4E2D...")):v("",!0),r(a)?(n(),e("p",O,"\u6CA1\u6709\u66F4\u591A\u4E86")):v("",!0)])}}});var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const D=t("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),E=t("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),L=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),d(" \u57FA\u7840\u7528\u6CD5")],-1),Q=t("p",null,[d("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),t("code",null,"v-infinite-scroll"),d("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),R=t("p",null,"infinite-scroll/basic",-1),V=t("h2",{id:"jin-yong-jia-zai"},[t("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),d(" \u7981\u7528\u52A0\u8F7D")],-1),W=t("p",null,"infinite-scroll/disabled",-1),X=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2),I={setup(f){const s={"../../../examples/infinite-scroll/basic.vue":A,"../../../examples/infinite-scroll/disabled.vue":B};return(i,a)=>{const l=b("demo-block"),o=b("right-nav");return n(),e(p,null,[t("section",null,[D,E,L,Q,u(l,{fs:"",demos:r(s),"path-name":"infinite-scroll/basic","source-code":`<template>
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
`},{default:g(()=>[R]),_:1},8,["demos"]),V,u(l,{fs:"",demos:r(s),"path-name":"infinite-scroll/disabled","source-code":`<template>
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
`},{default:g(()=>[W]),_:1},8,["demos"]),X]),u(o)],64)}}};export{I as default};
