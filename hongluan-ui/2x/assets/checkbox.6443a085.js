var $=Object.defineProperty;var L=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var P=(o,c,u)=>c in o?$(o,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[c]=u,G=(o,c)=>{for(var u in c||(c={}))q.call(c,u)&&P(o,u,c[u]);if(L)for(var u of L(c))Q.call(c,u)&&P(o,u,c[u]);return o};import{H as S,L as X,W as H,Q as e,X as y,P as B,a4 as J,S as n,o as T,aL as m}from"./vue.8f5537c1.js";import{_ as K}from"./index.417b30ee.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const M={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,openBlock:d,createBlock:F}=m,D=o("\u5907\u9009\u9879");function g(k,s){const E=c("hl-checkbox");return d(),F(E,{modelValue:k.checked,"onUpdate:modelValue":s[0]||(s[0]=i=>k.checked=i)},{default:u(()=>[D]),_:1},8,["modelValue"])}const{defineComponent:h}=m,{ref:x}=m;return G({render:g},h({setup(k,{expose:s}){s();const i={checked:x(!0),ref:x};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:d,Fragment:F,openBlock:D,createElementBlock:g}=m,h=o("Default"),x=o("Primary"),C=o("Success");function k(a,l){const b=c("hl-checkbox");return D(),g(F,null,[d(b,{modelValue:a.checked1,"onUpdate:modelValue":l[0]||(l[0]=t=>a.checked1=t),size:"sm"},{default:u(()=>[h]),_:1},8,["modelValue"]),d(b,{modelValue:a.checked2,"onUpdate:modelValue":l[1]||(l[1]=t=>a.checked2=t),type:"primary"},{default:u(()=>[x]),_:1},8,["modelValue"]),d(b,{modelValue:a.checked3,"onUpdate:modelValue":l[2]||(l[2]=t=>a.checked3=t),type:"success",size:"lg"},{default:u(()=>[C]),_:1},8,["modelValue"])],64)}const{defineComponent:s}=m,{ref:E}=m;return G({render:k},s({setup(a,{expose:l}){l();const b=E(!1),t=E(!1),r=E(!1),_={checked1:b,checked2:t,checked3:r,ref:E};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}))}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:d,Fragment:F,openBlock:D,createElementBlock:g}=m,h=o("Default"),x=o("Primary"),C=o("Success"),k=o("Warning"),s=o("Danger"),E=o("Info");function i(t,r){const _=c("hl-checkbox");return D(),g(F,null,[d(_,{modelValue:t.checked1,"onUpdate:modelValue":r[0]||(r[0]=p=>t.checked1=p)},{default:u(()=>[h]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked2,"onUpdate:modelValue":r[1]||(r[1]=p=>t.checked2=p),type:"primary"},{default:u(()=>[x]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked3,"onUpdate:modelValue":r[2]||(r[2]=p=>t.checked3=p),type:"success"},{default:u(()=>[C]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked4,"onUpdate:modelValue":r[3]||(r[3]=p=>t.checked4=p),type:"warning"},{default:u(()=>[k]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked5,"onUpdate:modelValue":r[4]||(r[4]=p=>t.checked5=p),type:"danger"},{default:u(()=>[s]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked6,"onUpdate:modelValue":r[5]||(r[5]=p=>t.checked6=p),type:"info"},{default:u(()=>[E]),_:1},8,["modelValue"])],64)}const{defineComponent:a}=m,{ref:l}=m;return G({render:i},a({setup(t,{expose:r}){r();const _=l(!1),p=l(!1),v=l(!1),j=l(!1),f=l(!1),V=l(!1),w={checked1:_,checked2:p,checked3:v,checked4:j,checked5:f,checked6:V,ref:l};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}))}(),"hl-demo3":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:d,Fragment:F,openBlock:D,createElementBlock:g}=m,h=o("Default"),x=o("Primary"),C=o("Success"),k=o("Warning"),s=o("Danger"),E=o("Info");function i(t,r){const _=c("hl-checkbox");return D(),g(F,null,[d(_,{modelValue:t.checked1,"onUpdate:modelValue":r[0]||(r[0]=p=>t.checked1=p),fill:""},{default:u(()=>[h]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked2,"onUpdate:modelValue":r[1]||(r[1]=p=>t.checked2=p),type:"primary",fill:""},{default:u(()=>[x]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked3,"onUpdate:modelValue":r[2]||(r[2]=p=>t.checked3=p),type:"success",fill:""},{default:u(()=>[C]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked4,"onUpdate:modelValue":r[3]||(r[3]=p=>t.checked4=p),type:"warning",fill:""},{default:u(()=>[k]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked5,"onUpdate:modelValue":r[4]||(r[4]=p=>t.checked5=p),type:"danger",fill:""},{default:u(()=>[s]),_:1},8,["modelValue"]),d(_,{modelValue:t.checked6,"onUpdate:modelValue":r[5]||(r[5]=p=>t.checked6=p),type:"info",fill:""},{default:u(()=>[E]),_:1},8,["modelValue"])],64)}const{defineComponent:a}=m,{ref:l}=m;return G({render:i},a({setup(t,{expose:r}){r();const _=l(!1),p=l(!1),v=l(!1),j=l(!1),f=l(!1),V=l(!1),w={checked1:_,checked2:p,checked3:v,checked4:j,checked5:f,checked6:V,ref:l};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}))}(),"hl-demo4":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:d,Fragment:F,openBlock:D,createElementBlock:g}=m,h=o("\u5907\u9009\u98791"),x=o("\u5907\u9009\u9879");function C(i,a){const l=c("hl-checkbox");return D(),g(F,null,[d(l,{modelValue:i.checked1,"onUpdate:modelValue":a[0]||(a[0]=b=>i.checked1=b),round:""},{default:u(()=>[h]),_:1},8,["modelValue"]),d(l,{modelValue:i.checked2,"onUpdate:modelValue":a[1]||(a[1]=b=>i.checked2=b),round:"",type:"primary"},{default:u(()=>[x]),_:1},8,["modelValue"])],64)}const{defineComponent:k}=m,{ref:s}=m;return G({render:C},k({setup(i,{expose:a}){a();const l=s(!1),b=s(!1),t={checked1:l,checked2:b,ref:s};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo5":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:d,Fragment:F,openBlock:D,createElementBlock:g}=m,h=o("\u5907\u9009\u98791"),x=o("\u5907\u9009\u9879");function C(i,a){const l=c("hl-checkbox");return D(),g(F,null,[d(l,{modelValue:i.checked1,"onUpdate:modelValue":a[0]||(a[0]=b=>i.checked1=b),disabled:""},{default:u(()=>[h]),_:1},8,["modelValue"]),d(l,{modelValue:i.checked2,"onUpdate:modelValue":a[1]||(a[1]=b=>i.checked2=b),disabled:""},{default:u(()=>[x]),_:1},8,["modelValue"])],64)}const{defineComponent:k}=m,{ref:s}=m;return G({render:C},k({setup(i,{expose:a}){a();const l=s(!1),b=s(!1),t={checked1:l,checked2:b,ref:s};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo6":function(){const{resolveComponent:o,createVNode:c,withCtx:u,openBlock:d,createBlock:F}=m;function D(C,k){const s=o("hl-checkbox"),E=o("hl-checkbox-group"),i=o("hl-col"),a=o("hl-row");return d(),F(a,null,{default:u(()=>[c(i,{span:"col-18"},{default:u(()=>[c(E,{modelValue:C.checkList,"onUpdate:modelValue":k[0]||(k[0]=l=>C.checkList=l),dir:"horizontal",gap:"var(--md)",wrap:""},{default:u(()=>[c(s,{label:"\u590D\u9009\u6846 A"}),c(s,{label:"\u590D\u9009\u6846 B"}),c(s,{label:"\u590D\u9009\u6846 C"}),c(s,{label:"\u7981\u7528",disabled:""}),c(s,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1}),c(i,{span:"col-6"},{default:u(()=>[c(E,{modelValue:C.checkList,"onUpdate:modelValue":k[1]||(k[1]=l=>C.checkList=l),dir:"vertical",gap:"var(--md)"},{default:u(()=>[c(s,{label:"\u590D\u9009\u6846 A"}),c(s,{label:"\u590D\u9009\u6846 B"}),c(s,{label:"\u590D\u9009\u6846 C"}),c(s,{label:"\u7981\u7528",disabled:""}),c(s,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:g}=m,{ref:h}=m;return G({render:D},g({setup(C,{expose:k}){k();const E={checkList:h(["\u9009\u4E2D\u4E14\u7981\u7528","\u590D\u9009\u6846 A"]),ref:h};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}}))}(),"hl-demo7":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:d,createElementVNode:F,renderList:D,Fragment:g,openBlock:h,createElementBlock:x,toDisplayString:C,createBlock:k}=m,s=o("\u5168\u9009"),E=F("hr",null,null,-1);function i(t,r){const _=c("hl-checkbox"),p=c("hl-checkbox-group");return h(),x(g,null,[d(_,{modelValue:t.checkAll,"onUpdate:modelValue":r[0]||(r[0]=v=>t.checkAll=v),indeterminate:t.isIndeterminate,onChange:t.handleCheckAllChange},{default:u(()=>[s]),_:1},8,["modelValue","indeterminate","onChange"]),E,d(p,{modelValue:t.checkedCities,"onUpdate:modelValue":r[1]||(r[1]=v=>t.checkedCities=v),dir:"vertical",gap:"var(--md)",onChange:t.handleCheckedCitiesChange},{default:u(()=>[(h(!0),x(g,null,D(t.cities,v=>(h(),k(_,{key:v,label:v},{default:u(()=>[o(C(v),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])],64)}const{defineComponent:a}=m,{ref:l}=m;return G({render:i},a({setup(t,{expose:r}){r();const _=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],p=l(!1),v=l(["\u4E0A\u6D77","\u5317\u4EAC"]),j=l(_),f=l(!0),N={cityOptions:_,checkAll:p,checkedCities:v,cities:j,isIndeterminate:f,handleCheckAllChange:O=>{v.value=O?_:[],f.value=!1},handleCheckedCitiesChange:O=>{let U=O.length;p.value=U===j.value.length,f.value=U>0&&U<j.value.length},ref:l};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}}))}(),"hl-demo8":function(){const{renderList:o,Fragment:c,openBlock:u,createElementBlock:d,toDisplayString:F,createTextVNode:D,resolveComponent:g,withCtx:h,createBlock:x}=m;function C(i,a){const l=g("hl-checkbox"),b=g("hl-checkbox-group");return u(),x(b,{modelValue:i.checkedCities,"onUpdate:modelValue":a[0]||(a[0]=t=>i.checkedCities=t),min:1,max:2},{default:h(()=>[(u(!0),d(c,null,o(i.cities,t=>(u(),x(l,{key:t,label:t},{default:h(()=>[D(F(t),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:k}=m,{ref:s}=m;return G({render:C},k({setup(i,{expose:a}){a();const l=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],b=s(["\u4E0A\u6D77","\u5317\u4EAC"]),t=s(l),r={cityOptions:l,checkedCities:b,cities:t,ref:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}(),"hl-demo9":function(){const{createElementVNode:o,resolveComponent:c,createVNode:u,withCtx:d,toDisplayString:F,renderList:D,Fragment:g,openBlock:h,createElementBlock:x,createTextVNode:C,createBlock:k}=m,s=o("p",{class:"m-b-md"},"\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),E={class:"bg-primary-light-5 text-primary p-sm m-t-md"},i=o("p",{class:"m-b-md"},"\u4F7F\u7528checkbox-group\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),a=o("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"},"\u9009\u9879\u4E00",-1),l=o("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"},"\u9009\u9879\u4E8C",-1),b={class:"bg-primary-light-5 text-primary p-sm m-t-md"},t=o("p",{class:"m-b-md"},"\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F",-1),r={class:"bg-primary-light-5 text-primary p-sm m-t-md"};function _(f,V){const w=c("hl-thumb"),N=c("hl-checkbox"),O=c("hl-group"),U=c("hl-col"),z=c("hl-checkbox-group"),I=c("hl-button"),W=c("hl-row");return h(),k(W,{gap:"var(--md)"},{default:d(()=>[u(U,{span:"col",class:"text-center"},{default:d(()=>[s,u(O,{style:{height:"48px"},gap:"var(--md)"},{default:d(()=>[u(N,{modelValue:f.checkboxGroup1,"onUpdate:modelValue":V[0]||(V[0]=A=>f.checkboxGroup1=A),label:"Edge",custom:""},{default:d(()=>[u(w,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png"})]),_:1},8,["modelValue"]),u(N,{modelValue:f.checkboxGroup1,"onUpdate:modelValue":V[1]||(V[1]=A=>f.checkboxGroup1=A),label:"Firefox",custom:""},{default:d(()=>[u(w,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png"})]),_:1},8,["modelValue"]),u(N,{modelValue:f.checkboxGroup1,"onUpdate:modelValue":V[2]||(V[2]=A=>f.checkboxGroup1=A),label:"Chrome",custom:""},{default:d(()=>[u(w,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png"})]),_:1},8,["modelValue"]),u(N,{modelValue:f.checkboxGroup1,"onUpdate:modelValue":V[3]||(V[3]=A=>f.checkboxGroup1=A),label:"Safari",custom:""},{default:d(()=>[u(w,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png"})]),_:1},8,["modelValue"])]),_:1}),o("p",E,F(f.checkboxGroup1),1)]),_:1}),u(U,{span:"col",class:"text-center"},{default:d(()=>[i,u(z,{modelValue:f.checkboxGroup2,"onUpdate:modelValue":V[4]||(V[4]=A=>f.checkboxGroup2=A),custom:"",type:"primary",gap:"6px"},{default:d(()=>[u(N,{label:"\u9009\u9879\u4E00"},{default:d(()=>[a]),_:1}),u(N,{label:"\u9009\u9879\u4E8C"},{default:d(()=>[l]),_:1})]),_:1},8,["modelValue"]),o("p",b,F(f.checkboxGroup2),1)]),_:1}),u(U,{span:"col",class:"text-center"},{default:d(()=>[t,u(z,{modelValue:f.checkboxGroup2,"onUpdate:modelValue":V[5]||(V[5]=A=>f.checkboxGroup2=A),style:{height:"48px"},custom:"",type:"primary",gap:"6px"},{default:d(()=>[(h(!0),x(g,null,D(f.cities,A=>(h(),k(N,{key:A,label:A},{default:d(()=>[u(I,null,{default:d(()=>[C(F(A),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),o("p",r,F(f.checkboxGroup2),1)]),_:1})]),_:1})}const{defineComponent:p}=m,{ref:v}=m;return G({render:_},p({setup(f,{expose:V}){V();const w=["\u9009\u9879\u4E00","\u9009\u9879\u4E8C"],N=v(["Safari"]),O=v(["\u9009\u9879\u4E00"]),U=v(w),z={cityOptions:w,checkboxGroup1:N,checkboxGroup2:O,cities:U,ref:v};return Object.defineProperty(z,"__isScriptSetup",{enumerable:!1,value:!0}),z}}))}()}},R=e("h1",null,"Checkbox \u590D\u9009\u6846",-1),Y=e("p",null,"\u4F7F\u7528\u5B8C\u5168\u91CD\u6784\u7684 Checkbox \u7EC4\u4EF6\u6765\u521B\u5EFA\u4E00\u81F4\u7684\u8DE8\u6D4F\u89C8\u5668\u548C\u8DE8\u8BBE\u5907\u7684\u590D\u9009\u6846\u3002",-1),Z=e("div",null,[e("p",null,[n("\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u5B9A\u4E49"),e("code",null,"v-model"),n("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u5355\u4E00\u7684 Checkbox \u7EC4\u4EF6\u4E2D\uFF0C\u9ED8\u8BA4\u7ED1\u5B9A\u53D8\u91CF\u7684\u503C\u4F1A\u662F"),e("code",null,"boolean"),n("\uFF0C\u9009\u4E2D\u4E3A"),e("code",null,"true"),n("\u3002")])],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <!-- \`checked\` \u4E3A true \u6216 false -->
  <hl-checkbox v-model="checked">\u5907\u9009\u9879</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref(true)
<\/script>
`)],-1),ue=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),n(" \u5C3A\u5BF8\u4FEE\u9970")],-1),te=e("p",null,[n("Checkbox \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),n(),e("code",null,"md"),n(),e("code",null,"lg"),n(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),n(" \u5C3A\u5BF8")],-1),oe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" size="sm">Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary">Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success" size="lg">Success</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)

<\/script>
`)],-1),le=T('<h2 id="zhuang-tai-yan-se"><a class="header-anchor" href="#zhuang-tai-yan-se"></a> \u72B6\u6001\u989C\u8272</h2><p>Checkbox \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A<code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code>\u3001<code>info</code>\u3002</p>',2),ce=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1">Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary">Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success">Success</hl-checkbox>
  <hl-checkbox v-model="checked4" type="warning">Warning</hl-checkbox>
  <hl-checkbox v-model="checked5" type="danger">Danger</hl-checkbox>
  <hl-checkbox v-model="checked6" type="info">Info</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)

<\/script>
`)],-1),de=e("h2",{id:"fill-yan-se"},[e("a",{class:"header-anchor",href:"#fill-yan-se"}),n(" Fill \u989C\u8272")],-1),ne=e("p",null,"\u4F7F\u7528 fill \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F Checkbox \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002",-1),re=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" fill>Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary" fill>Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success" fill>Success</hl-checkbox>
  <hl-checkbox v-model="checked4" type="warning" fill>Warning</hl-checkbox>
  <hl-checkbox v-model="checked5" type="danger" fill>Danger</hl-checkbox>
  <hl-checkbox v-model="checked6" type="info" fill>Info</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)

<\/script>
`)],-1),se=e("h2",{id:"yuan-xing-fu-xuan-kuang"},[e("a",{class:"header-anchor",href:"#yuan-xing-fu-xuan-kuang"}),n(" \u5706\u5F62\u590D\u9009\u6846")],-1),ae=e("p",null,[n("\u4E3A\u590D\u9009\u6846\u52A0\u4E0A "),e("code",null,"round"),n(" \u5C5E\u6027\uFF0C\u5373\u53EF\u5C06\u5B83\u4EEC\u53D8\u6210\u5706\u5F62\uFF0C\u5E76\u4E14\u62E5\u6709 "),e("code",null,"radio"),n(" \u76F8\u4F3C\u7684\u5916\u89C2\u3002")],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" round>\u5907\u9009\u98791</hl-checkbox>
  <hl-checkbox v-model="checked2" round type="primary">\u5907\u9009\u9879</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)

<\/script>
`)],-1),ie=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),n(" \u7981\u7528\u72B6\u6001")],-1),pe=e("p",null,[n("\u4E3A\u590D\u9009\u6846\u8BBE\u7F6E"),e("code",null,"disabled"),n("\u5C5E\u6027\u540E\u5448\u7070\u8272\u7981\u7528\uFF0C\u5373\u4FBF\u4F60\u4E3A\u5B83\u8BBE\u7F6E\u4E86\u72B6\u6001\u989C\u8272\u4E5F\u4F9D\u7136\u4E0D\u8D77\u4F5C\u7528\u3002")],-1),me=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" disabled>\u5907\u9009\u98791</hl-checkbox>
  <hl-checkbox v-model="checked2" disabled>\u5907\u9009\u9879</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)

<\/script>
`)],-1),ke=e("h2",{id:"fu-xuan-kuang-zu"},[e("a",{class:"header-anchor",href:"#fu-xuan-kuang-zu"}),n(" \u590D\u9009\u6846\u7EC4")],-1),_e=e("p",null,[n("\u5355\u9009\u6846\u7EC4\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),n(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),n("\uFF0C\u9ED8\u8BA4\u4E3A 12px")],-1),be=e("p",null,[n("CheckboxGroup \u5BB9\u5668\u80FD\u5C06\u591A\u4E2A\u590D\u9009\u6846\u7BA1\u7406\u4E3A\u4E00\u7EC4\uFF0C\u53EA\u9700\u4E3A\u5B83\u7684"),e("code",null,"v-model"),n("\u7ED1\u5B9A"),e("code",null,"Array"),n("\u7C7B\u578B\u7684\u53D8\u91CF\u5373\u53EF\u3002")],-1),Ee=e("div",null,[e("p",null,[n("Checkbox \u7EC4\u4EF6\u7684"),e("code",null,"label"),n("\u5C5E\u6027\u662F\u5BF9\u5E94\u7684\u503C\uFF0C\u5F53\u590D\u9009\u6846\u65E0\u4ECB\u7ECD\u5185\u5BB9\u65F6\u4E5F\u53EF\u5145\u5F53\u5B83\u7684\u4ECB\u7ECD\u3002"),e("code",null,"label"),n("\u4E0E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u503C\u76F8\u5BF9\u5E94\uFF0C\u5982\u679C\u5B58\u5728\u6307\u5B9A\u7684\u503C\u5219\u4E3A\u9009\u4E2D\u72B6\u6001\uFF0C\u5426\u5219\u4E3A\u4E0D\u9009\u4E2D\u3002\u590D\u9009\u6846\u7EC4\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),n(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),n("\uFF0C\u9ED8\u8BA4\u4E3A 12px")])],-1),fe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-18">
      <hl-checkbox-group v-model="checkList" dir="horizontal" gap="var(--md)" wrap>
        <hl-checkbox label="\u590D\u9009\u6846 A" />
        <hl-checkbox label="\u590D\u9009\u6846 B" />
        <hl-checkbox label="\u590D\u9009\u6846 C" />
        <hl-checkbox label="\u7981\u7528" disabled />
        <hl-checkbox label="\u9009\u4E2D\u4E14\u7981\u7528" disabled />
      </hl-checkbox-group>
    </hl-col>

    <hl-col span="col-6">
      <hl-checkbox-group v-model="checkList" dir="vertical" gap="var(--md)">
        <hl-checkbox label="\u590D\u9009\u6846 A" />
        <hl-checkbox label="\u590D\u9009\u6846 B" />
        <hl-checkbox label="\u590D\u9009\u6846 C" />
        <hl-checkbox label="\u7981\u7528" disabled />
        <hl-checkbox label="\u9009\u4E2D\u4E14\u7981\u7528" disabled />
      </hl-checkbox-group>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['\u9009\u4E2D\u4E14\u7981\u7528', '\u590D\u9009\u6846 A'])

<\/script>
`)],-1),Ce=e("h2",{id:"bu-que-ding-zhuang-tai"},[e("a",{class:"header-anchor",href:"#bu-que-ding-zhuang-tai"}),n(" \u4E0D\u786E\u5B9A\u72B6\u6001")],-1),Fe=e("p",null,[e("code",null,"indeterminate"),n(" \u5C5E\u6027\u7528\u4EE5\u8868\u793A\u590D\u9009\u6846\u7684\u4E0D\u786E\u5B9A\u72B6\u6001\uFF0C\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u5168\u9009\u7684\u6548\u679C\u3002")],-1),ge=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">\u5168\u9009</hl-checkbox>
  <hr>
  <hl-checkbox-group v-model="checkedCities" dir="vertical" gap="var(--md)" @change="handleCheckedCitiesChange">
    <hl-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</hl-checkbox>
  </hl-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cityOptions = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733']

const checkAll = ref(false)
const checkedCities = ref(['\u4E0A\u6D77', '\u5317\u4EAC'])
const cities = ref(cityOptions)
const isIndeterminate = ref(true)

const handleCheckAllChange = val => {
  checkedCities.value = val ? cityOptions : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = value => {
  let checkedCount = value.length
  checkAll.value = checkedCount === cities.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length
}

<\/script>
`)],-1),xe=e("h2",{id:"ke-xuan-xiang-mu-shu-liang-de-xian-zhi"},[e("a",{class:"header-anchor",href:"#ke-xuan-xiang-mu-shu-liang-de-xian-zhi"}),n(" \u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236")],-1),Be=e("p",null,[n("\u4F7F\u7528 "),e("code",null,"min"),n(" \u548C "),e("code",null,"max"),n(" \u5C5E\u6027\u80FD\u591F\u9650\u5236\u53EF\u4EE5\u88AB\u52FE\u9009\u7684\u9879\u76EE\u7684\u6570\u91CF\u3002")],-1),ye=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <hl-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</hl-checkbox>
  </hl-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cityOptions = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733']

const checkedCities = ref(['\u4E0A\u6D77', '\u5317\u4EAC'])
const cities = ref(cityOptions)

<\/script>
`)],-1),De=e("h2",{id:"zi-ding-yi-yang-shi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),n(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),ve=e("p",null,[n("\u53EA\u8981\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"custom"),n("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"Boolean"),n("\uFF0C"),e("code",null,"true"),n("\u4E3A\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Ve=e("div",null,[e("p",null,[n("\u4F60\u53EF\u4EE5\u6839\u636E Checkbox \u7EC4\u4EF6\u63D0\u4F9B\u7684 "),e("code",null,"is-checked"),n(),e("code",null,"is-focus"),n(),e("code",null,"is-disabled"),n("\u7684\u6837\u5F0F\u540D\u79F0\u6765\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002")])],-1),Ae=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-group style="height: 48px" gap="var(--md)">
        <hl-checkbox v-model="checkboxGroup1" label="Edge" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png" />
        </hl-checkbox>
        <hl-checkbox v-model="checkboxGroup1" label="Firefox" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png" />
        </hl-checkbox>
        <hl-checkbox v-model="checkboxGroup1" label="Chrome" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png" />
        </hl-checkbox>
        <hl-checkbox v-model="checkboxGroup1" label="Safari" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png" />
        </hl-checkbox>
      </hl-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ checkboxGroup1 }}</p>
    </hl-col>
    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528checkbox-group\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-checkbox-group v-model="checkboxGroup2" custom type="primary" gap="6px">
        <hl-checkbox label="\u9009\u9879\u4E00">
          <div class="p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary">\u9009\u9879\u4E00</div>
        </hl-checkbox>
        <hl-checkbox label="\u9009\u9879\u4E8C">
          <div class="p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary">\u9009\u9879\u4E8C</div>
        </hl-checkbox>
      </hl-checkbox-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ checkboxGroup2 }}</p>
    </hl-col>

    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-checkbox-group v-model="checkboxGroup2" style="height: 48px" custom type="primary" gap="6px">
        <hl-checkbox v-for="city in cities" :key="city" :label="city">
          <hl-button>{{ city }}</hl-button>
        </hl-checkbox>
      </hl-checkbox-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ checkboxGroup2 }}</p>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cityOptions = ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C']

const checkboxGroup1 = ref(['Safari'])
const checkboxGroup2 = ref(['\u9009\u9879\u4E00'])
const cities = ref(cityOptions)

<\/script>
`)],-1),we=T('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728<code>checkbox-group</code>\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3A<code>array</code>\u65F6\u6709\u6548\uFF09</td><td>string / number / boolean / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>true-label</td><td>\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>false-label</td><td>\u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>checked</td><td>\u5F53\u524D\u662F\u5426\u52FE\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indeterminate</td><td>\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u4FEE\u9970</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A Label \u5C5E\u6027\u7684\u6587\u672C\u5185\u5BB9</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table><h2 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes"></a> Checkbox Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>-</td><td>sm</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>label</td><td>\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events"></a> Checkbox Group Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table>',8);function Ne(o,c,u,d,F,D){const g=S("hl-demo0"),h=S("demo-block"),x=S("hl-demo1"),C=S("hl-demo2"),k=S("hl-demo3"),s=S("hl-demo4"),E=S("hl-demo5"),i=S("hl-demo6"),a=S("hl-demo7"),l=S("hl-demo8"),b=S("hl-demo9"),t=S("right-nav");return X(),H(J,null,[e("section",null,[R,Y,y(h,{fs:""},{source:B(()=>[y(g)]),highlight:B(()=>[ee]),default:B(()=>[Z]),_:1}),ue,te,y(h,{fs:""},{source:B(()=>[y(x)]),highlight:B(()=>[oe]),_:1}),le,y(h,{fs:""},{source:B(()=>[y(C)]),highlight:B(()=>[ce]),_:1}),de,ne,y(h,{fs:""},{source:B(()=>[y(k)]),highlight:B(()=>[re]),_:1}),se,ae,y(h,{fs:""},{source:B(()=>[y(s)]),highlight:B(()=>[he]),_:1}),ie,pe,y(h,{fs:""},{source:B(()=>[y(E)]),highlight:B(()=>[me]),_:1}),ke,_e,be,y(h,{fs:""},{source:B(()=>[y(i)]),highlight:B(()=>[fe]),default:B(()=>[Ee]),_:1}),Ce,Fe,y(h,{fs:""},{source:B(()=>[y(a)]),highlight:B(()=>[ge]),_:1}),xe,Be,y(h,{fs:""},{source:B(()=>[y(l)]),highlight:B(()=>[ye]),_:1}),De,ve,y(h,{fs:""},{source:B(()=>[y(b)]),highlight:B(()=>[Ae]),default:B(()=>[Ve]),_:1}),we]),y(t)],64)}var Le=K(M,[["render",Ne]]);export{Le as default};
