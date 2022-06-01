var G=Object.defineProperty;var T=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var O=(t,a,o)=>a in t?G(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,N=(t,a)=>{for(var o in a||(a={}))I.call(a,o)&&O(t,o,a[o]);if(T)for(var o of T(a))L.call(a,o)&&O(t,o,a[o]);return t};import{H as w,L as $,W as Q,Q as e,X as y,P as E,a4 as X,S as l,o as H,aL as h}from"./vue.8f5537c1.js";import{_ as q}from"./index.4914c8f9.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:g,openBlock:F,createElementBlock:C}=h,c=t("\u5907\u9009\u9879"),B=t("\u5907\u9009\u9879");function V(p,n){const m=a("hl-radio");return F(),C(g,null,[u(m,{modelValue:p.radio,"onUpdate:modelValue":n[0]||(n[0]=s=>p.radio=s),label:"1"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(m,{modelValue:p.radio,"onUpdate:modelValue":n[1]||(n[1]=s=>p.radio=s),label:"2"},{default:o(()=>[B]),_:1},8,["modelValue"])],64)}const{defineComponent:v}=h,{ref:f}=h;return N({render:V},v({setup(p,{expose:n}){n();const s={radio:f("1"),ref:f};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}(),"hl-demo1":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:g,openBlock:F,createElementBlock:C}=h,c=t("\u9ED8\u8BA4"),B=t("Primary"),V=t("Success");function v(n,m){const s=a("hl-radio");return F(),C(g,null,[u(s,{modelValue:n.radio,"onUpdate:modelValue":m[0]||(m[0]=d=>n.radio=d),label:"1",size:"sm",class:"m-r-md"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(s,{modelValue:n.radio,"onUpdate:modelValue":m[1]||(m[1]=d=>n.radio=d),label:"2",type:"primary",size:"md",class:"m-r-md"},{default:o(()=>[B]),_:1},8,["modelValue"]),u(s,{modelValue:n.radio,"onUpdate:modelValue":m[2]||(m[2]=d=>n.radio=d),label:"3",type:"success",size:"lg",class:"m-r-md"},{default:o(()=>[V]),_:1},8,["modelValue"])],64)}const{defineComponent:f}=h,{ref:A}=h;return N({render:v},f({setup(n,{expose:m}){m();const d={radio:A("1"),ref:A};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}))}(),"hl-demo2":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:g,openBlock:F,createElementBlock:C}=h,c=t("\u9ED8\u8BA4"),B=t("Primary"),V=t("Success"),v=t("Warning"),f=t("Danger"),A=t("Info");function p(d,r){const _=a("hl-radio");return F(),C(g,null,[u(_,{modelValue:d.radio,"onUpdate:modelValue":r[0]||(r[0]=i=>d.radio=i),label:"1"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[1]||(r[1]=i=>d.radio=i),label:"2",type:"primary"},{default:o(()=>[B]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[2]||(r[2]=i=>d.radio=i),label:"3",type:"success"},{default:o(()=>[V]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[3]||(r[3]=i=>d.radio=i),label:"4",type:"warning"},{default:o(()=>[v]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[4]||(r[4]=i=>d.radio=i),label:"5",type:"danger"},{default:o(()=>[f]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[5]||(r[5]=i=>d.radio=i),label:"6",type:"info"},{default:o(()=>[A]),_:1},8,["modelValue"])],64)}const{defineComponent:n}=h,{ref:m}=h;return N({render:p},n({setup(d,{expose:r}){r();const i={radio:m("1"),ref:m};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo3":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:g,openBlock:F,createElementBlock:C}=h,c=t("\u9ED8\u8BA4"),B=t("Primary"),V=t("Success"),v=t("Warning"),f=t("Danger"),A=t("Info");function p(d,r){const _=a("hl-radio");return F(),C(g,null,[u(_,{modelValue:d.radio,"onUpdate:modelValue":r[0]||(r[0]=i=>d.radio=i),label:"1",fill:""},{default:o(()=>[c]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[1]||(r[1]=i=>d.radio=i),label:"2",type:"primary",fill:""},{default:o(()=>[B]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[2]||(r[2]=i=>d.radio=i),label:"3",type:"success",fill:""},{default:o(()=>[V]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[3]||(r[3]=i=>d.radio=i),label:"4",type:"warning",fill:""},{default:o(()=>[v]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[4]||(r[4]=i=>d.radio=i),label:"5",type:"danger",fill:""},{default:o(()=>[f]),_:1},8,["modelValue"]),u(_,{modelValue:d.radio,"onUpdate:modelValue":r[5]||(r[5]=i=>d.radio=i),label:"6",type:"info",fill:""},{default:o(()=>[A]),_:1},8,["modelValue"])],64)}const{defineComponent:n}=h,{ref:m}=h;return N({render:p},n({setup(d,{expose:r}){r();const i={radio:m("1"),ref:m};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo4":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:g,openBlock:F,createElementBlock:C}=h,c=t("\u5907\u9009\u9879"),B=t("\u5907\u9009\u9879");function V(p,n){const m=a("hl-radio");return F(),C(g,null,[u(m,{modelValue:p.radio,"onUpdate:modelValue":n[0]||(n[0]=s=>p.radio=s),disabled:"",label:"\u7981\u7528"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(m,{modelValue:p.radio,"onUpdate:modelValue":n[1]||(n[1]=s=>p.radio=s),disabled:"",label:"\u9009\u4E2D\u4E14\u7981\u7528"},{default:o(()=>[B]),_:1},8,["modelValue"])],64)}const{defineComponent:v}=h,{ref:f}=h;return N({render:V},v({setup(p,{expose:n}){n();const s={radio:f("\u9009\u4E2D\u4E14\u7981\u7528"),ref:f};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}(),"hl-demo5":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,openBlock:g,createBlock:F}=h,C=t("\u5907\u9009\u9879"),c=t("\u5907\u9009\u9879"),B=t("\u5907\u9009\u9879");function V(p,n){const m=a("hl-radio"),s=a("hl-radio-group");return g(),F(s,{modelValue:p.radio,"onUpdate:modelValue":n[0]||(n[0]=d=>p.radio=d),gap:"var(--md)",type:"primary",size:"md"},{default:o(()=>[u(m,{label:"a"},{default:o(()=>[C]),_:1}),u(m,{label:"b"},{default:o(()=>[c]),_:1}),u(m,{label:"c"},{default:o(()=>[B]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:v}=h,{ref:f}=h;return N({render:V},v({setup(p,{expose:n}){n();const s={radio:f("a"),ref:f};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}(),"hl-demo6":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,openBlock:g,createBlock:F}=h,C=t("\u5907\u9009\u9879"),c=t("\u5907\u9009\u9879"),B=t("\u5907\u9009\u9879"),V=t("\u5907\u9009\u9879"),v=t("\u5907\u9009\u9879"),f=t("\u5907\u9009\u9879");function A(s,d){const r=a("hl-radio"),_=a("hl-radio-group"),i=a("hl-col"),R=a("hl-row");return g(),F(R,null,{default:o(()=>[u(i,{span:"col"},{default:o(()=>[u(_,{modelValue:s.radio,"onUpdate:modelValue":d[0]||(d[0]=b=>s.radio=b),dir:"horizontal",gap:"var(--md)",type:"primary"},{default:o(()=>[u(r,{label:"a"},{default:o(()=>[C]),_:1}),u(r,{label:"b"},{default:o(()=>[c]),_:1}),u(r,{label:"c"},{default:o(()=>[B]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(i,{span:"col"},{default:o(()=>[u(_,{modelValue:s.radio,"onUpdate:modelValue":d[1]||(d[1]=b=>s.radio=b),dir:"vertical",gap:"var(--md)",type:"primary"},{default:o(()=>[u(r,{label:"a"},{default:o(()=>[V]),_:1}),u(r,{label:"b"},{default:o(()=>[v]),_:1}),u(r,{label:"c"},{default:o(()=>[f]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:p}=h,{ref:n}=h;return N({render:A},p({setup(s,{expose:d}){d();const _={radio:n("a"),ref:n};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}))}(),"hl-demo7":function(){const{createElementVNode:t,resolveComponent:a,createVNode:o,withCtx:u,toDisplayString:g,createTextVNode:F,openBlock:C,createBlock:c}=h,B=t("p",{class:"m-b-md"},"\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),V={class:"bg-primary-light-5 text-primary p-sm m-t-md"},v=t("p",{class:"m-b-md"},"\u4F7F\u7528radio-group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),f=t("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"}," \u9009\u9879\u4E00 ",-1),A=t("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"}," \u9009\u9879\u4E8C ",-1),p={class:"bg-primary-light-5 text-primary p-sm m-t-md"},n=t("p",{class:"m-b-md"},"\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F",-1),m=F("\u9009\u9879\u4E00"),s=F("\u9009\u9879\u4E8C"),d={class:"bg-primary-light-5 text-primary p-sm m-t-md"};function r(b,D){const S=a("hl-thumb"),x=a("hl-radio"),U=a("hl-group"),z=a("hl-col"),j=a("hl-radio-group"),P=a("hl-button"),W=a("hl-row");return C(),c(W,{gap:"var(--md)"},{default:u(()=>[o(z,{span:"col",class:"text-center"},{default:u(()=>[B,o(U,{style:{height:"48px"},gap:"var(--md)"},{default:u(()=>[o(x,{modelValue:b.radio1,"onUpdate:modelValue":D[0]||(D[0]=k=>b.radio1=k),label:"Edge",custom:""},{default:u(()=>[o(S,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png"})]),_:1},8,["modelValue"]),o(x,{modelValue:b.radio1,"onUpdate:modelValue":D[1]||(D[1]=k=>b.radio1=k),label:"Firefox",custom:""},{default:u(()=>[o(S,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png"})]),_:1},8,["modelValue"]),o(x,{modelValue:b.radio1,"onUpdate:modelValue":D[2]||(D[2]=k=>b.radio1=k),label:"Chrome",custom:""},{default:u(()=>[o(S,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png"})]),_:1},8,["modelValue"]),o(x,{modelValue:b.radio1,"onUpdate:modelValue":D[3]||(D[3]=k=>b.radio1=k),label:"Safari",custom:""},{default:u(()=>[o(S,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png"})]),_:1},8,["modelValue"])]),_:1}),t("p",V,g(b.radio1),1)]),_:1}),o(z,{span:"col",class:"text-center"},{default:u(()=>[v,o(j,{modelValue:b.radio2,"onUpdate:modelValue":D[4]||(D[4]=k=>b.radio2=k),style:{height:"48px"},gap:"var(--md)",custom:""},{default:u(()=>[o(x,{label:"\u9009\u9879\u4E00"},{default:u(()=>[f]),_:1}),o(x,{label:"\u9009\u9879\u4E8C"},{default:u(()=>[A]),_:1})]),_:1},8,["modelValue"]),t("p",p,g(b.radio2),1)]),_:1}),o(z,{span:"col",class:"text-center"},{default:u(()=>[n,o(j,{modelValue:b.radio2,"onUpdate:modelValue":D[5]||(D[5]=k=>b.radio2=k),style:{height:"48px"},custom:"",gap:"6px"},{default:u(()=>[o(x,{label:"\u9009\u9879\u4E00"},{default:u(()=>[o(P,null,{default:u(()=>[m]),_:1})]),_:1}),o(x,{label:"\u9009\u9879\u4E8C"},{default:u(()=>[o(P,null,{default:u(()=>[s]),_:1})]),_:1})]),_:1},8,["modelValue"]),t("p",d,g(b.radio2),1)]),_:1})]),_:1})}const{defineComponent:_}=h,{ref:i}=h;return N({render:r},_({setup(b,{expose:D}){D();const S=i("Firefox"),x=i("\u9009\u9879\u4E00"),U={radio1:S,radio2:x,ref:i};return Object.defineProperty(U,"__isScriptSetup",{enumerable:!1,value:!0}),U}}))}()}},K=e("h1",null,"Radio \u5355\u9009\u6846",-1),M=e("p",null,"\u7528\u4E8E\u5728\u591A\u4E2A\u5907\u9009\u9879\u4E2D\u9009\u4E2D\u5355\u4E2A\u72B6\u6001\u3002\u82E5\u9009\u9879\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Select \u9009\u62E9\u5668\u3002",-1),Y=e("div",null,[e("p",null,[l("\u8981\u4F7F\u7528 Radio \u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u8BBE\u7F6E"),e("code",null,"v-model"),l("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u9009\u4E2D\u610F\u5473\u7740\u53D8\u91CF\u7684\u503C\u4E3A\u76F8\u5E94 Radio "),e("code",null,"label"),l("\u5C5E\u6027\u7684\u503C\uFF0C"),e("code",null,"label"),l("\u53EF\u4EE5\u662F"),e("code",null,"string"),l("\u3001"),e("code",null,"number"),l("\u6216"),e("code",null,"boolean"),l("\u3002")])],-1),Z=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1">\u5907\u9009\u9879</hl-radio>
  <hl-radio v-model="radio" label="2">\u5907\u9009\u9879</hl-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('1')

<\/script>
`)],-1),ee=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),l(" \u5C3A\u5BF8\u4FEE\u9970")],-1),oe=e("p",null,[l("Radio \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),l(),e("code",null,"md"),l(),e("code",null,"lg"),l(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),l(" \u5C3A\u5BF8")],-1),ue=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1" size="sm" class="m-r-md">\u9ED8\u8BA4</hl-radio>
  <hl-radio v-model="radio" label="2" type="primary" size="md" class="m-r-md">Primary</hl-radio>
  <hl-radio v-model="radio" label="3" type="success" size="lg" class="m-r-md">Success</hl-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('1')

<\/script>
`)],-1),te=e("h2",{id:"zhuang-tai-yan-se"},[e("a",{class:"header-anchor",href:"#zhuang-tai-yan-se"}),l(" \u72B6\u6001\u989C\u8272")],-1),le=e("div",null,[e("p",null,[l("Radio \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),e("code",null,"primary"),l("\u3001"),e("code",null,"success"),l("\u3001"),e("code",null,"warning"),l("\u3001"),e("code",null,"danger"),l(" \u548C "),e("code",null,"info"),l("\u3002")])],-1),de=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1">\u9ED8\u8BA4</hl-radio>
  <hl-radio v-model="radio" label="2" type="primary">Primary</hl-radio>
  <hl-radio v-model="radio" label="3" type="success">Success</hl-radio>
  <hl-radio v-model="radio" label="4" type="warning">Warning</hl-radio>
  <hl-radio v-model="radio" label="5" type="danger">Danger</hl-radio>
  <hl-radio v-model="radio" label="6" type="info">Info</hl-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('1')

<\/script>
`)],-1),re=e("h2",{id:"fill-yan-se"},[e("a",{class:"header-anchor",href:"#fill-yan-se"}),l(" Fill \u989C\u8272")],-1),ae=e("div",null,[e("p",null,"\u4F7F\u7528 fill \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F Radio \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002")],-1),ne=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1" fill>\u9ED8\u8BA4</hl-radio>
  <hl-radio v-model="radio" label="2" type="primary" fill>Primary</hl-radio>
  <hl-radio v-model="radio" label="3" type="success" fill>Success</hl-radio>
  <hl-radio v-model="radio" label="4" type="warning" fill>Warning</hl-radio>
  <hl-radio v-model="radio" label="5" type="danger" fill>Danger</hl-radio>
  <hl-radio v-model="radio" label="6" type="info" fill>Info</hl-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('1')

<\/script>
`)],-1),ie=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),l(" \u7981\u7528\u72B6\u6001")],-1),se=e("p",null,[l("\u53EA\u8981\u5728 Radio \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"disabled"),l("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),l("\uFF0C"),e("code",null,"true"),l("\u4E3A\u7981\u7528\u3002")],-1),me=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" disabled label="\u7981\u7528">\u5907\u9009\u9879</hl-radio>
  <hl-radio v-model="radio" disabled label="\u9009\u4E2D\u4E14\u7981\u7528">\u5907\u9009\u9879</hl-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('\u9009\u4E2D\u4E14\u7981\u7528')

<\/script>
`)],-1),pe=e("h2",{id:"dan-xuan-kuang-zu"},[e("a",{class:"header-anchor",href:"#dan-xuan-kuang-zu"}),l(" \u5355\u9009\u6846\u7EC4")],-1),ce=e("p",null,[l("\u5355\u9009\u6846\u7EC4\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),l(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),l("\uFF0C\u9ED8\u8BA4\u4E3A 12px")],-1),he=e("div",null,[e("p",null,[l("\u7ED3\u5408 RadioGroup \u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6 Radio \u53EF\u4EE5\u5B9E\u73B0\u5355\u9009\u7EC4\uFF0C\u5728 RadioGroup \u4E2D\u7ED1\u5B9A"),e("code",null,"v-model"),l("\uFF0C\u5728 Radio \u4E2D\u8BBE\u7F6E\u597D"),e("code",null,"label"),l("\u5373\u53EF\uFF0C\u65E0\u9700\u518D\u7ED9\u6BCF\u4E00\u4E2A Radio \u7ED1\u5B9A\u53D8\u91CF\uFF0C\u53E6\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86"),e("code",null,"change"),l("\u4E8B\u4EF6\u6765\u54CD\u5E94\u53D8\u5316\uFF0C\u5B83\u4F1A\u4F20\u5165\u4E00\u4E2A\u53C2\u6570"),e("code",null,"value"),l("\u3002")])],-1),_e=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio-group v-model="radio" gap="var(--md)" type="primary" size="md">
    <hl-radio label="a">\u5907\u9009\u9879</hl-radio>
    <hl-radio label="b">\u5907\u9009\u9879</hl-radio>
    <hl-radio label="c">\u5907\u9009\u9879</hl-radio>
  </hl-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('a')

<\/script>
`)],-1),Ee=e("h2",{id:"zu-pai-lie"},[e("a",{class:"header-anchor",href:"#zu-pai-lie"}),l(" \u7EC4\u6392\u5217")],-1),fe=e("p",null,[l("\u5355\u9009\u6846\u7EC4\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"dir"),l(" \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u5B83\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),be=e("div",null,[e("p",null,[l("\u652F\u6301 \u9ED8\u8BA4\u7684 "),e("code",null,"horizontal"),l(" \u6A2A\u5411\u6392\u5217 \u548C "),e("code",null,"vertical"),l(" \u7EB5\u5411\u6392\u5217\u3002")])],-1),ge=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <hl-radio-group v-model="radio" dir="horizontal" gap="var(--md)" type="primary">
        <hl-radio label="a">\u5907\u9009\u9879</hl-radio>
        <hl-radio label="b">\u5907\u9009\u9879</hl-radio>
        <hl-radio label="c">\u5907\u9009\u9879</hl-radio>
      </hl-radio-group>
    </hl-col>

    <hl-col span="col">
      <hl-radio-group v-model="radio" dir="vertical" gap="var(--md)" type="primary">
        <hl-radio label="a">\u5907\u9009\u9879</hl-radio>
        <hl-radio label="b">\u5907\u9009\u9879</hl-radio>
        <hl-radio label="c">\u5907\u9009\u9879</hl-radio>
      </hl-radio-group>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('a')

<\/script>
`)],-1),Fe=e("h2",{id:"zi-ding-yi-yang-shi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),l(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),Ce=e("p",null,[l("\u53EA\u8981\u5728 Radio \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"custom"),l("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),l("\uFF0C"),e("code",null,"true"),l("\u4E3A\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Be=e("div",null,[e("p",null,[l("\u4F60\u53EF\u4EE5\u6839\u636E Radio \u7EC4\u4EF6\u63D0\u4F9B\u7684 "),e("code",null,"is-checked"),l(),e("code",null,"is-focus"),l(),e("code",null,"is-disabled"),l("\u7684\u6837\u5F0F\u540D\u79F0\u6765\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002")])],-1),Ve=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-group style="height: 48px" gap="var(--md)">
        <hl-radio v-model="radio1" label="Edge" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png" />
        </hl-radio>
        <hl-radio v-model="radio1" label="Firefox" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png" />
        </hl-radio>
        <hl-radio v-model="radio1" label="Chrome" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png" />
        </hl-radio>
        <hl-radio v-model="radio1" label="Safari" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png" />
        </hl-radio>
      </hl-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ radio1 }}</p>
    </hl-col>
    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528radio-group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-radio-group v-model="radio2" style="height: 48px" gap="var(--md)" custom>
        <hl-radio label="\u9009\u9879\u4E00">
          <div
            class="p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"
          >
            \u9009\u9879\u4E00
          </div>
        </hl-radio>
        <hl-radio label="\u9009\u9879\u4E8C">
          <div
            class="p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"
          >
            \u9009\u9879\u4E8C
          </div>
        </hl-radio>
      </hl-radio-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ radio2 }}</p>
    </hl-col>

    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-radio-group v-model="radio2" style="height: 48px" custom gap="6px">
        <hl-radio label="\u9009\u9879\u4E00">
          <hl-button>\u9009\u9879\u4E00</hl-button>
        </hl-radio>
        <hl-radio label="\u9009\u9879\u4E8C">
          <hl-button>\u9009\u9879\u4E8C</hl-button>
        </hl-radio>
      </hl-radio-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ radio2 }}</p>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('Firefox')
const radio2 = ref('\u9009\u9879\u4E00')

<\/script>
`)],-1),ve=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>Radio \u7684 value</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u4FEE\u9970</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A Label \u5C5E\u6027\u7684\u6587\u672C\u5185\u5BB9</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u9009\u4E2D\u7684 Radio label \u503C</td></tr></tbody></table><h2 id="radio-group-attributes"><a class="header-anchor" href="#radio-group-attributes"></a> Radio Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>-</td><td>sm</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="radio-group-events"><a class="header-anchor" href="#radio-group-events"></a> Radio Group Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u9009\u4E2D\u7684 Radio label \u503C</td></tr></tbody></table>',8);function ye(t,a,o,u,g,F){const C=w("hl-demo0"),c=w("demo-block"),B=w("hl-demo1"),V=w("hl-demo2"),v=w("hl-demo3"),f=w("hl-demo4"),A=w("hl-demo5"),p=w("hl-demo6"),n=w("hl-demo7"),m=w("right-nav");return $(),Q(X,null,[e("section",null,[K,M,y(c,{fs:""},{source:E(()=>[y(C)]),highlight:E(()=>[Z]),default:E(()=>[Y]),_:1}),ee,oe,y(c,{fs:""},{source:E(()=>[y(B)]),highlight:E(()=>[ue]),_:1}),te,y(c,{fs:""},{source:E(()=>[y(V)]),highlight:E(()=>[de]),default:E(()=>[le]),_:1}),re,y(c,{fs:""},{source:E(()=>[y(v)]),highlight:E(()=>[ne]),default:E(()=>[ae]),_:1}),ie,se,y(c,{fs:""},{source:E(()=>[y(f)]),highlight:E(()=>[me]),_:1}),pe,ce,y(c,{fs:""},{source:E(()=>[y(A)]),highlight:E(()=>[_e]),default:E(()=>[he]),_:1}),Ee,fe,y(c,{fs:""},{source:E(()=>[y(p)]),highlight:E(()=>[ge]),default:E(()=>[be]),_:1}),Fe,Ce,y(c,{fs:""},{source:E(()=>[y(n)]),highlight:E(()=>[Ve]),default:E(()=>[Be]),_:1}),ve]),y(m)],64)}var Se=q(J,[["render",ye]]);export{Se as default};
