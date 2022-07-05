import{p as g,R as m,F as v,L as h,W as p,X as a,a2 as _,U as b,V as r,P as c,C as V,Q as e,S as U,M as s,o as x}from"./vue.ec44b1f5.js";import{H as y}from"./index.06ef057f.js";import{l as z,V as S,A as M}from"./hongluan-icons.3feb039d.js";import"./hongluan.e8fea845.js";import"./highlight.687c59a9.js";const T=g({setup(f){const n=m(!0);return(u,o)=>{const t=v("hl-switch");return h(),p(_,null,[a(t,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),class:"m-r-md"},null,8,["modelValue"]),a(t,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l),type:"primary",width:"var(--xxl)"},null,8,["modelValue"])],64)}}});var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const P=g({setup(f){const n=b({value1:!1,loading1:!1}),u=()=>(n.loading1=!0,new Promise(l=>{setTimeout(()=>(n.loading1=!1,y.success("\u5207\u6362\u6210\u529F"),l(!0)),1e3)})),o=b({value2:!1,loading2:!1}),t=()=>(o.loading2=!0,new Promise((l,d)=>{setTimeout(()=>(o.loading2=!1,y.error("\u5207\u6362\u5931\u8D25"),d(new Error("Error"))),1e3)}));return(l,d)=>{const w=v("hl-switch");return h(),p(_,null,[a(w,{modelValue:r(n).value1,"onUpdate:modelValue":d[0]||(d[0]=i=>r(n).value1=i),loading:r(n).loading1,"before-change":u,class:"m-r-md"},null,8,["modelValue","loading"]),a(w,{modelValue:r(o).value2,"onUpdate:modelValue":d[1]||(d[1]=i=>r(o).value2=i),loading:r(o).loading2,"before-change":t},null,8,["modelValue","loading"])],64)}}});var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const k=g({setup(f){const n=m(!1),u=m(!0);return(o,t)=>{const l=v("hl-switch");return h(),p(_,null,[a(l,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=d=>u.value=d),class:"m-r-md"},null,8,["modelValue"]),a(l,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=d=>u.value=d),class:"m-r-md",type:"primary"},null,8,["modelValue"]),a(l,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=d=>u.value=d),class:"m-r-md",type:"success"},null,8,["modelValue"]),a(l,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=d=>u.value=d),class:"m-r-md",type:"warning"},null,8,["modelValue"]),a(l,{modelValue:u.value,"onUpdate:modelValue":t[4]||(t[4]=d=>u.value=d),class:"m-r-md",type:"danger"},null,8,["modelValue"]),a(l,{modelValue:u.value,"onUpdate:modelValue":t[5]||(t[5]=d=>u.value=d),class:"m-r-md",type:"info"},null,8,["modelValue"]),a(l,{modelValue:n.value,"onUpdate:modelValue":t[6]||(t[6]=d=>n.value=d),"active-color":"#13ce66","inactive-color":"#2d3748"},null,8,["modelValue"])],64)}}});var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const O=g({setup(f){const n=m(!0),u=m(!1);return(o,t)=>{const l=v("hl-switch");return h(),p(_,null,[a(l,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=d=>n.value=d),class:"m-r-md",disabled:""},null,8,["modelValue"]),a(l,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=d=>u.value=d),class:"m-r-md",type:"primary",disabled:""},null,8,["modelValue"])],64)}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const E=e("i",null,"\xA5",-1),H=g({setup(f){m(!0);const n=m(!0),u=m(!0),o=m(!1);return(t,l)=>{const d=v("hl-switch"),w=v("hl-icon");return h(),p(_,null,[a(d,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=i=>n.value=i),type:"success",class:"m-r-md"},{icon:c(()=>[E]),_:1},8,["modelValue"]),a(d,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=i=>u.value=i),type:"danger",class:"m-r-md"},{icon:c(()=>[a(w,null,{default:c(()=>[a(r(z))]),_:1})]),_:1},8,["modelValue"]),a(d,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=i=>o.value=i),loading:"",class:"m-r-md"},null,8,["modelValue"]),a(d,{modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=i=>o.value=i),loading:"",class:"m-r-md"},{icon:c(()=>[a(w,null,{default:c(()=>[a(r(z))]),_:1})]),_:1},8,["modelValue"]),a(d,{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=i=>o.value=i),type:"primary",class:"m-r-md"},{icon:c(({checked:i})=>[a(w,null,{default:c(()=>[i?(h(),V(r(S),{key:0})):(h(),V(r(M),{key:1}))]),_:2},1024)]),_:1},8,["modelValue"])],64)}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const L=g({setup(f){const n=m(!0);return(u,o)=>{const t=v("hl-switch");return h(),p(_,null,[a(t,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),size:"sm",class:"m-r-md"},null,8,["modelValue"]),a(t,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l),size:"md",class:"m-r-md"},null,8,["modelValue"]),a(t,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=l=>n.value=l),size:"lg",class:"m-r-md"},null,8,["modelValue"])],64)}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const D={class:"m-l-md"},Q=g({setup(f){const n=m("100");return(u,o)=>{const t=v("hl-switch");return h(),p(_,null,[a(t,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),"active-value":"100","inactive-value":"0"},null,8,["modelValue"]),e("span",D,U(n.value),1)],64)}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const W=e("h1",null,"Switch \u5F00\u5173",-1),X=e("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),B=e("div",null,[e("p",null,[s("\u7ED1\u5B9A"),e("code",null,"v-model"),s("\u5230\u4E00\u4E2A"),e("code",null,"boolean"),s("\u7C7B\u578B\u7684\u53D8\u91CF\u3002")])],-1),N=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),s(" \u5C3A\u5BF8\u4FEE\u9970")],-1),G=e("p",null,[s("Switch \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),s(),e("code",null,"md"),s(),e("code",null,"lg"),s(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),s(" \u5C3A\u5BF8")],-1),I=e("h2",{id:"yan-se"},[e("a",{class:"header-anchor",href:"#yan-se"}),s(" \u989C\u8272")],-1),J=e("p",null,[s("Switch \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),e("code",null,"primary"),s("\u3001"),e("code",null,"success"),s("\u3001"),e("code",null,"warning"),s("\u548C"),e("code",null,"danger"),s("\u3002")],-1),K=e("div",null,[e("p",null,[s("\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"active-color"),s("\u5C5E\u6027\u4E0E"),e("code",null,"inactive-color"),s("\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272\u3002")])],-1),Y=x('<h2 id="kuo-zhan-de-value-lei-xing"><a class="header-anchor" href="#kuo-zhan-de-value-lei-xing"></a> \u6269\u5C55\u7684 value \u7C7B\u578B</h2><p>\u8BBE\u7F6E<code>active-value</code>\u548C<code>inactive-value</code>\u5C5E\u6027\uFF0C\u63A5\u53D7<code>boolean</code>, <code>string</code>\u6216<code>number</code>\u7C7B\u578B\u7684\u503C\u3002</p>',2),Z=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),s(" \u7981\u7528\u72B6\u6001")],-1),ee=e("p",null,[s("\u8BBE\u7F6E"),e("code",null,"disabled"),s("\u5C5E\u6027\u53EF\u4F7F switch \u53D8\u4E3A\u7981\u7528\u72B6\u6001\u3002")],-1),te=e("h2",{id:"tu-biao"},[e("a",{class:"header-anchor",href:"#tu-biao"}),s(" \u56FE\u6807")],-1),le=e("p",null,[e("code",null,"icon"),s("\u5C5E\u6027\u53EF\u4E3A Switch \u52A0\u4E0A\u56FE\u6807\u6548\u679C\u3002\u4F60\u4E5F\u901A\u8FC7 icon slot \u6765\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002")],-1),ne=e("div",null,[e("p",null,[s("\u6CE8\u610F slot \u91CC\u9762\u5FC5\u987B\u7528"),e("code",null,"i"),s("\u6807\u7B7E\u5305\u88F9\u4F60\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9")])],-1),ae=e("h2",{id:"zu-zhi-qie-huan"},[e("a",{class:"header-anchor",href:"#zu-zhi-qie-huan"}),s(" \u963B\u6B62\u5207\u6362")],-1),oe=e("div",null,[e("p",null,[s("\u8BBE\u7F6E"),e("code",null,"before-change"),s("\u5C5E\u6027\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5207\u6362\u3002")])],-1),de=x('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8E<code>active-value</code>\u6216<code>inactive-value</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>Boolean</code>\u7C7B\u578B</td><td>boolean / string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>primary, warning, danger, success, info</td><td>\u2014</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>width</td><td>\u81EA\u5B9A\u4E49 switch \u7684\u5BBD\u5EA6\uFF0C width \u548C size \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>active-value</td><td>switch \u6253\u5F00\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>true</td></tr><tr><td>inactive-value</td><td>switch \u5173\u95ED\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>false</td></tr><tr><td>active-color</td><td>switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#C0CCDA</td></tr><tr><td>border-color</td><td>switch \u8FB9\u6846\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>switch \u5BF9\u5E94\u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate-event</td><td>\u6539\u53D8 switch \u72B6\u6001\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u72B6\u6001\uFF0C\u6B64\u72B6\u6001\u4E0B\u5982\u679C\u4E0D\u8BBE\u7F6E icon\uFF0C\u4F1A\u9ED8\u8BA4\u5C06 icon \u8BBE\u6210 Loading</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-change</td><td>switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362</td><td>function</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F Switch \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>icon \u81EA\u5B9A\u4E49\uFF0C\u81EA\u5B9A\u4E49\u5C06\u4F1A\u4F7F\u81EA\u52A8\u8BBE\u7F6E loading icon \u529F\u80FD\u5931\u6548\uFF0C\u53C2\u6570\uFF1A{ checked }</td></tr></tbody></table>',8),me={setup(f){const n={"../../../examples/switch/basic.vue":j,"../../../examples/switch/change.vue":C,"../../../examples/switch/color.vue":$,"../../../examples/switch/disabled.vue":A,"../../../examples/switch/icon.vue":F,"../../../examples/switch/size.vue":q,"../../../examples/switch/value.vue":R};return(u,o)=>{const t=v("demo-block"),l=v("right-nav");return h(),p(_,null,[e("section",null,[W,X,a(t,{fs:"",demos:r(n),"path-name":"switch/basic","source-code":`<template>
  <hl-switch v-model="value" class="m-r-md" />
  <hl-switch v-model="value" type="primary" width="var(--xxl)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)

<\/script>
`},{default:c(()=>[B]),_:1},8,["demos"]),N,G,a(t,{fs:"",demos:r(n),"path-name":"switch/size","source-code":`<template>
  <hl-switch v-model="value1" size="sm" class="m-r-md" />
  <hl-switch v-model="value1" size="md" class="m-r-md" />
  <hl-switch v-model="value1" size="lg" class="m-r-md" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
<\/script>
`},null,8,["demos"]),I,J,a(t,{fs:"",demos:r(n),"path-name":"switch/color","source-code":`<template>
  <hl-switch v-model="value1" class="m-r-md" />
  <hl-switch v-model="value1" class="m-r-md" type="primary" />
  <hl-switch v-model="value1" class="m-r-md" type="success" />
  <hl-switch v-model="value1" class="m-r-md" type="warning" />
  <hl-switch v-model="value1" class="m-r-md" type="danger" />
  <hl-switch v-model="value1" class="m-r-md" type="info" />

  <hl-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#2d3748"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
const value1 = ref(true)

<\/script>
`},{default:c(()=>[K]),_:1},8,["demos"]),Y,a(t,{fs:"",demos:r(n),"path-name":"switch/value","source-code":`<template>
  <hl-switch v-model="value" active-value="100" inactive-value="0" />
  <span class="m-l-md">{{ value }}</span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('100')
<\/script>
`},null,8,["demos"]),Z,ee,a(t,{fs:"",demos:r(n),"path-name":"switch/disabled","source-code":`<template>
  <hl-switch v-model="value1" class="m-r-md" disabled />
  <hl-switch v-model="value2" class="m-r-md" type="primary" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)

<\/script>
`},null,8,["demos"]),te,le,a(t,{fs:"",demos:r(n),"path-name":"switch/icon","source-code":`<template>
  <hl-switch v-model="value2" type="success" class="m-r-md">
    <template #icon>
      <i>\xA5</i>
    </template>
  </hl-switch>

  <hl-switch v-model="value3" type="danger" class="m-r-md">
    <template #icon>
      <hl-icon><two-mail /></hl-icon>
    </template>
  </hl-switch>
  <hl-switch v-model="value4" loading class="m-r-md" />
  <hl-switch v-model="value4" loading class="m-r-md">
    <template #icon>
      <hl-icon><two-mail /></hl-icon>
    </template>
  </hl-switch>
  <hl-switch v-model="value4" type="primary" class="m-r-md">
    <template #icon="{ checked }">
      <hl-icon>
        <two-power v-if="checked" />
        <two-airplay v-else />
      </hl-icon>
    </template>
  </hl-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoMail, TwoPower, TwoAirplay } from '@hongluan-ui/icons'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(false)

<\/script>
`},{default:c(()=>[ne]),_:1},8,["demos"]),ae,a(t,{fs:"",demos:r(n),"path-name":"switch/change","source-code":`<template>
  <hl-switch v-model="status1.value1" :loading="status1.loading1" :before-change="beforeChange1" class="m-r-md" />
  <hl-switch v-model="status2.value2" :loading="status2.loading2" :before-change="beforeChange2" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { HlMessage } from 'hongluan-ui'

const status1 = reactive({
  value1: false,
  loading1: false,
})

const beforeChange1 = () => {
  status1.loading1 = true
  return new Promise(resolve => {
    setTimeout(() => {
      status1.loading1 = false
      HlMessage.success('\u5207\u6362\u6210\u529F')
      return resolve(true)
    }, 1000)
  })
}

const status2 = reactive({
  value2: false,
  loading2: false,
})

const beforeChange2 = () => {
  status2.loading2 = true
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      status2.loading2 = false
      HlMessage.error('\u5207\u6362\u5931\u8D25')
      return reject(new Error('Error'))
    }, 1000)
  })
}

<\/script>
`},{default:c(()=>[oe]),_:1},8,["demos"]),de]),a(l)],64)}}};export{me as default};
