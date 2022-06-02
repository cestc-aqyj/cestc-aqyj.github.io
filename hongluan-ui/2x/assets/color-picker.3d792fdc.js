import{p as _,R as c,F as a,L as p,C as f,W as v,Q as e,X as d,a2 as g,P as u,V as h,M as m,o as b}from"./vue.651ae949.js";const k=_({setup(i){const t=c("rgba(19, 206, 102, 0.8)");return(s,l)=>{const o=a("hl-color-picker");return p(),f(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=n=>t.value=n),"show-alpha":""},null,8,["modelValue"])}}});var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const y={class:"m-b-md"},z=e("span",{class:"m-r-sm"},"\u6709\u9ED8\u8BA4\u503C",-1),x=e("span",{class:"m-r-sm"},"\u65E0\u9ED8\u8BA4\u503C",-1),F=_({setup(i){const t=c("#409EFF"),s=c();return(l,o)=>{const n=a("hl-color-picker");return p(),v(g,null,[e("div",y,[z,d(n,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},null,8,["modelValue"])]),e("div",null,[x,d(n,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=r=>s.value=r)},null,8,["modelValue"])])],64)}}});var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const C=_({setup(i){const t=c("rgba(255, 69, 0, 0.68)"),s=c(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(l,o)=>{const n=a("hl-color-picker");return p(),f(n,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),"show-alpha":"",predefine:s.value},null,8,["modelValue","predefine"])}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const S=_({setup(i){const t=c("409EFF");return(s,l)=>{const o=a("hl-color-picker"),n=a("hl-group");return p(),f(n,{indent:"var(--md)"},{default:u(()=>[d(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=r=>t.value=r),size:"lg"},null,8,["modelValue"]),d(o,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=r=>t.value=r)},null,8,["modelValue"]),d(o,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=r=>t.value=r),size:"sm"},null,8,["modelValue"])]),_:1})}}});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const $=e("h1",null,"ColorPicker \u989C\u8272\u9009\u62E9\u5668",-1),j=e("p",null,"\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002",-1),A=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),m(" \u57FA\u7840\u7528\u6CD5")],-1),M=e("div",null,[e("p",null,"\u4F7F\u7528 v-model \u4E0E Vue \u5B9E\u4F8B\u4E2D\u7684\u4E00\u4E2A\u53D8\u91CF\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\uFF0C\u7ED1\u5B9A\u7684\u53D8\u91CF\u9700\u8981\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u3002")],-1),P=e("p",null,"color-picker/basic",-1),O=e("h2",{id:"xuan-ze-tou-ming-du"},[e("a",{class:"header-anchor",href:"#xuan-ze-tou-ming-du"}),m(" \u9009\u62E9\u900F\u660E\u5EA6")],-1),T=e("div",null,[e("p",null,"ColorPicker \u652F\u6301\u666E\u901A\u989C\u8272\uFF0C\u4E5F\u652F\u6301\u5E26 Alpha \u901A\u9053\u7684\u989C\u8272\uFF0C \u8981\u542F\u7528 Alpha \u9009\u62E9\uFF0C\u53EA\u9700\u6DFB\u52A0 show-alpha \u5C5E\u6027\u3002")],-1),B=e("p",null,"color-picker/alpha",-1),D=e("h2",{id:"yu-ding-yi-yan-se"},[e("a",{class:"header-anchor",href:"#yu-ding-yi-yan-se"}),m(" \u9884\u5B9A\u4E49\u989C\u8272")],-1),L=e("div",null,[e("p",null,"\u9884\u5B9A\u4E49\u989C\u8272")],-1),Q=e("p",null,"color-picker/predefined-color",-1),R=e("h2",{id:"bu-tong-chi-cun"},[e("a",{class:"header-anchor",href:"#bu-tong-chi-cun"}),m(" \u4E0D\u540C\u5C3A\u5BF8")],-1),W=e("p",null,"color-picker/sizes",-1),X=b('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>large / default /small</td><td>\u2014</td></tr><tr><td>show-alpha</td><td>\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>color-format</td><td>\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex (\u5F53 show-alpha \u4E3A false) / rgb (\u5F53 show-alpha \u4E3A true)</td></tr><tr><td>popper-class</td><td>\u989C\u8272\u9009\u62E9\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>predefine</td><td>\u9884\u5B9A\u4E49\u989C\u8272</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u503C</td></tr><tr><td>active-change</td><td>\u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u503C</td></tr></tbody></table>',4),q={setup(i){const t={"../../../examples/color-picker/alpha.vue":V,"../../../examples/color-picker/basic.vue":w,"../../../examples/color-picker/predefined-color.vue":E,"../../../examples/color-picker/sizes.vue":U};return(s,l)=>{const o=a("demo-block"),n=a("right-nav");return p(),v(g,null,[e("section",null,[$,j,A,d(o,{fs:"",demos:h(t),"path-name":"color-picker/basic","source-code":`<template>
  <div class="m-b-md">
    <span class="m-r-sm">\u6709\u9ED8\u8BA4\u503C</span>
    <hl-color-picker v-model="color1" />
  </div>
  <div>
    <span class="m-r-sm">\u65E0\u9ED8\u8BA4\u503C</span>
    <hl-color-picker v-model="color2" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color1 = ref('#409EFF')
const color2 = ref()

<\/script>
`},{default:u(()=>[M,P]),_:1},8,["demos"]),O,d(o,{fs:"",demos:h(t),"path-name":"color-picker/alpha","source-code":`<template>
  <hl-color-picker v-model="color" show-alpha />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('rgba(19, 206, 102, 0.8)')

<\/script>
`},{default:u(()=>[T,B]),_:1},8,["demos"]),D,d(o,{fs:"",demos:h(t),"path-name":"color-picker/predefined-color","source-code":`<template>
  <hl-color-picker v-model="color" show-alpha :predefine="predefineColors" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
<\/script>
`},{default:u(()=>[L,Q]),_:1},8,["demos"]),R,d(o,{fs:"",demos:h(t),"path-name":"color-picker/sizes","source-code":`<template>
  <hl-group indent="var(--md)">
    <hl-color-picker v-model="color" size="lg" />
    <hl-color-picker v-model="color" />
    <hl-color-picker v-model="color" size="sm" />
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('409EFF')

<\/script>
`},{default:u(()=>[W]),_:1},8,["demos"]),X]),d(n)],64)}}};export{q as default};
