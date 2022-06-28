import{p as b,R as r,F as p,L as v,W as g,Q as t,X as d,a2 as k,C as x,P as i,V as f,M as s,o as y}from"./vue.ec44b1f5.js";const $={class:"block"},w=t("span",{class:"demonstration"},"\u9ED8\u8BA4",-1),S={class:"block"},z=t("span",{class:"demonstration"},"\u81EA\u5B9A\u4E49\u521D\u59CB\u503C",-1),U={class:"block"},T=t("span",{class:"demonstration"},"\u9690\u85CF Tooltip",-1),C={class:"block"},A=t("span",{class:"demonstration"},"\u683C\u5F0F\u5316 Tooltip",-1),j={class:"block"},B=t("span",{class:"demonstration"},"\u7981\u7528",-1),F=b({setup(h){const e=r(0),u=r(50),o=r(36),l=r(48),n=r(42),m=a=>a/100;return(a,c)=>{const V=p("hl-slider");return v(),g(k,null,[t("div",$,[w,d(V,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=_=>e.value=_)},null,8,["modelValue"])]),t("div",S,[z,d(V,{modelValue:u.value,"onUpdate:modelValue":c[1]||(c[1]=_=>u.value=_)},null,8,["modelValue"])]),t("div",U,[T,d(V,{modelValue:o.value,"onUpdate:modelValue":c[2]||(c[2]=_=>o.value=_),"show-tooltip":!1},null,8,["modelValue"])]),t("div",C,[A,d(V,{modelValue:l.value,"onUpdate:modelValue":c[3]||(c[3]=_=>l.value=_),"format-tooltip":m},null,8,["modelValue"])]),t("div",j,[B,d(V,{modelValue:n.value,"onUpdate:modelValue":c[4]||(c[4]=_=>n.value=_),disabled:""},null,8,["modelValue"])])],64)}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const M=b({setup(h){const e=r(50);return(u,o)=>{const l=p("hl-slider"),n=p("hl-col"),m=p("hl-row");return v(),x(m,null,{default:i(()=>[d(n,{span:"col"},{default:i(()=>[d(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:"primary"},null,8,["modelValue"])]),_:1}),d(n,{span:"col"},{default:i(()=>[d(l,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=a=>e.value=a),type:"danger"},null,8,["modelValue"])]),_:1}),d(n,{span:"col"},{default:i(()=>[d(l,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value=a),type:"warning"},null,8,["modelValue"])]),_:1}),d(n,{span:"col"},{default:i(()=>[d(l,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=a=>e.value=a),type:"success"},null,8,["modelValue"])]),_:1}),d(n,{span:"col"},{default:i(()=>[d(l,{modelValue:e.value,"onUpdate:modelValue":o[4]||(o[4]=a=>e.value=a),type:"info"},null,8,["modelValue"])]),_:1})]),_:1})}}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const D={class:"block"},P=b({setup(h){const e=r([30,60]),u=r({0:"0\xB0C",8:"8\xB0C",37:"37\xB0C",50:{style:{color:"#1989FA"},label:"50%"}});return(o,l)=>{const n=p("hl-slider");return v(),g("div",D,[d(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=m=>e.value=m),range:"",marks:u.value},null,8,["modelValue","marks"])])}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const Q={class:"block"},R=b({setup(h){const e=r([4,8]);return(u,o)=>{const l=p("hl-slider");return v(),g("div",Q,[d(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),range:"","show-stops":"",max:10},null,8,["modelValue"])])}}});var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const X={class:"block"},N=t("span",{class:"demonstration"},"\u4E0D\u663E\u793A\u95F4\u65AD\u70B9",-1),q={class:"block"},G=t("span",{class:"demonstration"},"\u663E\u793A\u95F4\u65AD\u70B9",-1),H=b({setup(h){const e=r(0),u=r(0);return(o,l)=>{const n=p("hl-slider");return v(),g(k,null,[t("div",X,[N,d(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=m=>e.value=m),step:10},null,8,["modelValue"])]),t("div",q,[G,d(n,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=m=>u.value=m),step:10,"show-stops":""},null,8,["modelValue"])])],64)}}});var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const J={class:"block"},K=b({setup(h){const e=r(0);return(u,o)=>{const l=p("hl-slider");return v(),g("div",J,[d(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),vertical:"",height:"200px"},null,8,["modelValue"])])}}});var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const Z=t("h1",null,"Slider \u6ED1\u5757",-1),tt=t("p",null,"\u901A\u8FC7\u62D6\u52A8\u6ED1\u5757\u5728\u4E00\u4E2A\u56FA\u5B9A\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9",-1),et=t("div",null,[t("p",null,"\u901A\u8FC7\u8BBE\u7F6E\u7ED1\u5B9A\u503C\u81EA\u5B9A\u4E49\u6ED1\u5757\u7684\u521D\u59CB\u503C")],-1),lt=t("h2",{id:"chi-san-zhi"},[t("a",{class:"header-anchor",href:"#chi-san-zhi"}),s(" \u79BB\u6563\u503C")],-1),dt=t("p",null,"\u9009\u9879\u53EF\u4EE5\u662F\u79BB\u6563\u7684",-1),ot=t("div",null,[t("p",null,[s("\u6539\u53D8"),t("code",null,"step"),s("\u7684\u503C\u53EF\u4EE5\u6539\u53D8\u6B65\u957F\uFF0C\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"show-stops"),s("\u5C5E\u6027\u53EF\u4EE5\u663E\u793A\u95F4\u65AD\u70B9")])],-1),nt=t("h2",{id:"zhuang-tai-se"},[t("a",{class:"header-anchor",href:"#zhuang-tai-se"}),s(" \u72B6\u6001\u8272")],-1),st=t("p",null,"Slider \u4E5F\u652F\u6301\u72B6\u6001\u8272",-1),at=t("h2",{id:"fan-wei-xuan-ze"},[t("a",{class:"header-anchor",href:"#fan-wei-xuan-ze"}),s(" \u8303\u56F4\u9009\u62E9")],-1),rt=t("p",null,"\u652F\u6301\u9009\u62E9\u67D0\u4E00\u6570\u503C\u8303\u56F4",-1),ut=t("div",null,[t("p",null,[s("\u8BBE\u7F6E"),t("code",null,"range"),s("\u5373\u53EF\u5F00\u542F\u8303\u56F4\u9009\u62E9\uFF0C\u6B64\u65F6\u7ED1\u5B9A\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u5143\u7D20\u5206\u522B\u4E3A\u6700\u5C0F\u8FB9\u754C\u503C\u548C\u6700\u5927\u8FB9\u754C\u503C")])],-1),it=t("h2",{id:"shu-xiang-mo-shi"},[t("a",{class:"header-anchor",href:"#shu-xiang-mo-shi"}),s(" \u7AD6\u5411\u6A21\u5F0F")],-1),ct=t("div",null,[t("p",null,[s("\u8BBE\u7F6E"),t("code",null,"vertical"),s("\u53EF\u4F7F Slider \u53D8\u6210\u7AD6\u5411\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6"),t("code",null,"height"),s("\u5C5E\u6027")])],-1),pt=t("h2",{id:"zhan-shi-biao-ji"},[t("a",{class:"header-anchor",href:"#zhan-shi-biao-ji"}),s(" \u5C55\u793A\u6807\u8BB0")],-1),mt=t("div",null,[t("p",null,[s("\u8BBE\u7F6E "),t("code",null,"marks"),s(" \u5C5E\u6027\u53EF\u4EE5\u5C55\u793A\u6807\u8BB0")])],-1),_t=y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td>\u2014</td><td>100</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>step</td><td>\u6B65\u957F</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-stops</td><td>\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-tooltip</td><td>\u662F\u5426\u663E\u793A tooltip</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format-tooltip</td><td>\u683C\u5F0F\u5316 tooltip message</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>vertical</td><td>\u662F\u5426\u7AD6\u5411\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>height</td><td>Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>debounce</td><td>\u8F93\u5165\u65F6\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2\uFF0C\u4EC5\u5728<code>show-input</code>\u7B49\u4E8E true \u65F6\u6709\u6548</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>tooltip-class</td><td>tooltip \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>marks</td><td>\u6807\u8BB0\uFF0C key \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A number \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 <code>[min, max]</code> \u5185\uFF0C\u6BCF\u4E2A\u6807\u8BB0\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-start-label</td><td>\u5F53\u4E3A<code>range</code>\u65F6, \u5C4F\u5E55\u9605\u8BFB\u5668\u8BFB\u53D6\u7684\u8303\u56F4\u5F00\u59CB\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-end-label</td><td>\u5F53\u4E3A<code>range</code>\u65F6, \u5C4F\u5E55\u9605\u8BFB\u5668\u8BFB\u53D6\u7684\u8303\u56F4\u7ED3\u675F\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>format-value-text</td><td>\u4E3A\u5C4F\u5E55\u9605\u8BFB\u5668\u683C\u5F0F\u5316 <code>aria-valuenow</code> \u5C5E\u6027\u503C</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr><tr><td>input</td><td>\u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u6D3B\u52A8\u8FC7\u7A0B\u5B9E\u65F6\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr></tbody></table>',4),ht={setup(h){const e={"../../../examples/slider/basic.vue":E,"../../../examples/slider/color.vue":O,"../../../examples/slider/marks.vue":L,"../../../examples/slider/range.vue":W,"../../../examples/slider/stops.vue":I,"../../../examples/slider/vertical.vue":Y};return(u,o)=>{const l=p("demo-block"),n=p("right-nav");return v(),g(k,null,[t("section",null,[Z,tt,d(l,{fs:"",demos:f(e),"path-name":"slider/basic","source-code":`<template>
  <div class="block">
    <span class="demonstration">\u9ED8\u8BA4</span>
    <hl-slider v-model="value1" />
  </div>
  <div class="block">
    <span class="demonstration">\u81EA\u5B9A\u4E49\u521D\u59CB\u503C</span>
    <hl-slider v-model="value2" />
  </div>
  <div class="block">
    <span class="demonstration">\u9690\u85CF Tooltip</span>
    <hl-slider v-model="value3" :show-tooltip="false" />
  </div>
  <div class="block">
    <span class="demonstration">\u683C\u5F0F\u5316 Tooltip</span>
    <hl-slider v-model="value4" :format-tooltip="formatTooltip" />
  </div>
  <div class="block">
    <span class="demonstration">\u7981\u7528</span>
    <hl-slider v-model="value5" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(50)
const value3 = ref(36)
const value4 = ref(48)
const value5 = ref(42)

const formatTooltip = val => {
  return val / 100
}
<\/script>
`},{default:i(()=>[et]),_:1},8,["demos"]),lt,dt,d(l,{fs:"",demos:f(e),"path-name":"slider/stops","source-code":`<template>
  <div class="block">
    <span class="demonstration">\u4E0D\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value1" :step="10" />
  </div>
  <div class="block">
    <span class="demonstration">\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value2" :step="10" show-stops />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)

<\/script>
`},{default:i(()=>[ot]),_:1},8,["demos"]),nt,st,d(l,{fs:"",demos:f(e),"path-name":"slider/color","source-code":`<template>
  <hl-row>
    <hl-col span="col">
      <hl-slider v-model="value" type="primary" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="danger" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="warning" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="success" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="info" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)

<\/script>
`},null,8,["demos"]),at,rt,d(l,{fs:"",demos:f(e),"path-name":"slider/range","source-code":`<template>
  <div class="block">
    <hl-slider v-model="value" range show-stops :max="10" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([4, 8])

<\/script>
`},{default:i(()=>[ut]),_:1},8,["demos"]),it,d(l,{fs:"",demos:f(e),"path-name":"slider/vertical","source-code":`<template>
  <div class="block">
    <hl-slider v-model="value" vertical height="200px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)

<\/script>
`},{default:i(()=>[ct]),_:1},8,["demos"]),pt,d(l,{fs:"",demos:f(e),"path-name":"slider/marks","source-code":`<template>
  <div class="block">
    <hl-slider v-model="value" range :marks="marks" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([30, 60])
const marks = ref({
  0: '0\xB0C',
  8: '8\xB0C',
  37: '37\xB0C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
})
<\/script>
`},{default:i(()=>[mt]),_:1},8,["demos"]),_t]),d(n)],64)}}};export{ht as default};
