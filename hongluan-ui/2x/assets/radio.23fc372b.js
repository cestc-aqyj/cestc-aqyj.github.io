var I=Object.defineProperty;var j=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var P=(t,a,o)=>a in t?I(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,w=(t,a)=>{for(var o in a||(a={}))$.call(a,o)&&P(t,o,a[o]);if(j)for(var o of j(a))L.call(a,o)&&P(t,o,a[o]);return t};import{F as x,L as Q,W as X,Q as e,X as y,P as h,a2 as J,aJ as A,M as l,o as M}from"./vue.30e377ec.js";import{_ as q}from"./index.58703c48.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.51d8bafe.js";const H={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:E,openBlock:F,createElementBlock:b}=A,c=t("\u5907\u9009\u9879"),g=t("\u5907\u9009\u9879");function C(s,n){const m=a("hl-radio");return F(),b(E,null,[u(m,{modelValue:s.radio,"onUpdate:modelValue":n[0]||(n[0]=p=>s.radio=p),label:"1"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(m,{modelValue:s.radio,"onUpdate:modelValue":n[1]||(n[1]=p=>s.radio=p),label:"2"},{default:o(()=>[g]),_:1},8,["modelValue"])],64)}const{defineComponent:B,ref:V}=A,v=B({setup(){return{radio:V("1")}}});return w({render:C},v)}(),"hl-demo1":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:E,openBlock:F,createElementBlock:b}=A,c=t("\u9ED8\u8BA4"),g=t("Primary"),C=t("Success");function B(n,m){const p=a("hl-radio");return F(),b(E,null,[u(p,{modelValue:n.radio,"onUpdate:modelValue":m[0]||(m[0]=d=>n.radio=d),label:"1",size:"sm",class:"m-r-md"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(p,{modelValue:n.radio,"onUpdate:modelValue":m[1]||(m[1]=d=>n.radio=d),label:"2",type:"primary",size:"md",class:"m-r-md"},{default:o(()=>[g]),_:1},8,["modelValue"]),u(p,{modelValue:n.radio,"onUpdate:modelValue":m[2]||(m[2]=d=>n.radio=d),label:"3",type:"success",size:"lg",class:"m-r-md"},{default:o(()=>[C]),_:1},8,["modelValue"])],64)}const{defineComponent:V,ref:v}=A,s=V({setup(){return{radio:v("1")}}});return w({render:B},s)}(),"hl-demo2":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:E,openBlock:F,createElementBlock:b}=A,c=t("\u9ED8\u8BA4"),g=t("Primary"),C=t("Success"),B=t("Warning"),V=t("Danger"),v=t("Info");function s(d,r){const f=a("hl-radio");return F(),b(E,null,[u(f,{modelValue:d.radio,"onUpdate:modelValue":r[0]||(r[0]=i=>d.radio=i),label:"1"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[1]||(r[1]=i=>d.radio=i),label:"2",type:"primary"},{default:o(()=>[g]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[2]||(r[2]=i=>d.radio=i),label:"3",type:"success"},{default:o(()=>[C]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[3]||(r[3]=i=>d.radio=i),label:"4",type:"warning"},{default:o(()=>[B]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[4]||(r[4]=i=>d.radio=i),label:"5",type:"danger"},{default:o(()=>[V]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[5]||(r[5]=i=>d.radio=i),label:"6",type:"info"},{default:o(()=>[v]),_:1},8,["modelValue"])],64)}const{defineComponent:n,ref:m}=A,p=n({setup(){return{radio:m("1")}}});return w({render:s},p)}(),"hl-demo3":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:E,openBlock:F,createElementBlock:b}=A,c=t("\u9ED8\u8BA4"),g=t("Primary"),C=t("Success"),B=t("Warning"),V=t("Danger"),v=t("Info");function s(d,r){const f=a("hl-radio");return F(),b(E,null,[u(f,{modelValue:d.radio,"onUpdate:modelValue":r[0]||(r[0]=i=>d.radio=i),label:"1",fill:""},{default:o(()=>[c]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[1]||(r[1]=i=>d.radio=i),label:"2",type:"primary",fill:""},{default:o(()=>[g]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[2]||(r[2]=i=>d.radio=i),label:"3",type:"success",fill:""},{default:o(()=>[C]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[3]||(r[3]=i=>d.radio=i),label:"4",type:"warning",fill:""},{default:o(()=>[B]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[4]||(r[4]=i=>d.radio=i),label:"5",type:"danger",fill:""},{default:o(()=>[V]),_:1},8,["modelValue"]),u(f,{modelValue:d.radio,"onUpdate:modelValue":r[5]||(r[5]=i=>d.radio=i),label:"6",type:"info",fill:""},{default:o(()=>[v]),_:1},8,["modelValue"])],64)}const{defineComponent:n,ref:m}=A,p=n({setup(){return{radio:m("1")}}});return w({render:s},p)}(),"hl-demo4":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,Fragment:E,openBlock:F,createElementBlock:b}=A,c=t("\u5907\u9009\u9879"),g=t("\u5907\u9009\u9879");function C(s,n){const m=a("hl-radio");return F(),b(E,null,[u(m,{modelValue:s.radio,"onUpdate:modelValue":n[0]||(n[0]=p=>s.radio=p),disabled:"",label:"\u7981\u7528"},{default:o(()=>[c]),_:1},8,["modelValue"]),u(m,{modelValue:s.radio,"onUpdate:modelValue":n[1]||(n[1]=p=>s.radio=p),disabled:"",label:"\u9009\u4E2D\u4E14\u7981\u7528"},{default:o(()=>[g]),_:1},8,["modelValue"])],64)}const{defineComponent:B,ref:V}=A,v=B({setup(){return{radio:V("\u9009\u4E2D\u4E14\u7981\u7528")}}});return w({render:C},v)}(),"hl-demo5":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,openBlock:E,createBlock:F}=A,b=t("\u5907\u9009\u9879"),c=t("\u5907\u9009\u9879"),g=t("\u5907\u9009\u9879");function C(s,n){const m=a("hl-radio"),p=a("hl-radio-group");return E(),F(p,{modelValue:s.radio,"onUpdate:modelValue":n[0]||(n[0]=d=>s.radio=d),gap:"var(--md)",type:"primary",size:"md"},{default:o(()=>[u(m,{label:"a"},{default:o(()=>[b]),_:1}),u(m,{label:"b"},{default:o(()=>[c]),_:1}),u(m,{label:"c"},{default:o(()=>[g]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:B,ref:V}=A,v=B({setup(){return{radio:V("a")}}});return w({render:C},v)}(),"hl-demo6":function(){const{createTextVNode:t,resolveComponent:a,withCtx:o,createVNode:u,openBlock:E,createBlock:F}=A,b=t("\u5907\u9009\u9879"),c=t("\u5907\u9009\u9879"),g=t("\u5907\u9009\u9879"),C=t("\u5907\u9009\u9879"),B=t("\u5907\u9009\u9879"),V=t("\u5907\u9009\u9879");function v(p,d){const r=a("hl-radio"),f=a("hl-radio-group"),i=a("hl-col"),z=a("hl-row");return E(),F(z,null,{default:o(()=>[u(i,{span:"col"},{default:o(()=>[u(f,{modelValue:p.radio,"onUpdate:modelValue":d[0]||(d[0]=_=>p.radio=_),dir:"horizontal",gap:"var(--md)",type:"primary"},{default:o(()=>[u(r,{label:"a"},{default:o(()=>[b]),_:1}),u(r,{label:"b"},{default:o(()=>[c]),_:1}),u(r,{label:"c"},{default:o(()=>[g]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(i,{span:"col"},{default:o(()=>[u(f,{modelValue:p.radio,"onUpdate:modelValue":d[1]||(d[1]=_=>p.radio=_),dir:"vertical",gap:"var(--md)",type:"primary"},{default:o(()=>[u(r,{label:"a"},{default:o(()=>[C]),_:1}),u(r,{label:"b"},{default:o(()=>[B]),_:1}),u(r,{label:"c"},{default:o(()=>[V]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:s,ref:n}=A,m=s({setup(){return{radio:n("a")}}});return w({render:v},m)}(),"hl-demo7":function(){const{createElementVNode:t,resolveComponent:a,createVNode:o,withCtx:u,toDisplayString:E,createTextVNode:F,openBlock:b,createBlock:c}=A,g=t("p",{class:"m-b-md"},"\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),C={class:"bg-primary-light-5 text-primary p-sm m-t-md"},B=t("p",{class:"m-b-md"},"\u4F7F\u7528radio-group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),V=t("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"}," \u9009\u9879\u4E00 ",-1),v=t("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"}," \u9009\u9879\u4E8C ",-1),s={class:"bg-primary-light-5 text-primary p-sm m-t-md"},n=t("p",{class:"m-b-md"},"\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F",-1),m=F("\u9009\u9879\u4E00"),p=F("\u9009\u9879\u4E8C"),d={class:"bg-primary-light-5 text-primary p-sm m-t-md"};function r(_,D){const U=a("hl-thumb"),N=a("hl-radio"),W=a("hl-group"),R=a("hl-col"),T=a("hl-radio-group"),S=a("hl-button"),G=a("hl-row");return b(),c(G,{gap:"var(--md)"},{default:u(()=>[o(R,{span:"col",class:"text-center"},{default:u(()=>[g,o(W,{style:{height:"48px"},gap:"var(--md)"},{default:u(()=>[o(N,{modelValue:_.radio1,"onUpdate:modelValue":D[0]||(D[0]=k=>_.radio1=k),label:"Edge",custom:""},{default:u(()=>[o(U,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png"})]),_:1},8,["modelValue"]),o(N,{modelValue:_.radio1,"onUpdate:modelValue":D[1]||(D[1]=k=>_.radio1=k),label:"Firefox",custom:""},{default:u(()=>[o(U,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png"})]),_:1},8,["modelValue"]),o(N,{modelValue:_.radio1,"onUpdate:modelValue":D[2]||(D[2]=k=>_.radio1=k),label:"Chrome",custom:""},{default:u(()=>[o(U,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png"})]),_:1},8,["modelValue"]),o(N,{modelValue:_.radio1,"onUpdate:modelValue":D[3]||(D[3]=k=>_.radio1=k),label:"Safari",custom:""},{default:u(()=>[o(U,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png"})]),_:1},8,["modelValue"])]),_:1}),t("p",C,E(_.radio1),1)]),_:1}),o(R,{span:"col",class:"text-center"},{default:u(()=>[B,o(T,{modelValue:_.radio2,"onUpdate:modelValue":D[4]||(D[4]=k=>_.radio2=k),style:{height:"48px"},gap:"var(--md)",custom:""},{default:u(()=>[o(N,{label:"\u9009\u9879\u4E00"},{default:u(()=>[V]),_:1}),o(N,{label:"\u9009\u9879\u4E8C"},{default:u(()=>[v]),_:1})]),_:1},8,["modelValue"]),t("p",s,E(_.radio2),1)]),_:1}),o(R,{span:"col",class:"text-center"},{default:u(()=>[n,o(T,{modelValue:_.radio2,"onUpdate:modelValue":D[5]||(D[5]=k=>_.radio2=k),style:{height:"48px"},custom:"",gap:"6px"},{default:u(()=>[o(N,{label:"\u9009\u9879\u4E00"},{default:u(()=>[o(S,null,{default:u(()=>[m]),_:1})]),_:1}),o(N,{label:"\u9009\u9879\u4E8C"},{default:u(()=>[o(S,null,{default:u(()=>[p]),_:1})]),_:1})]),_:1},8,["modelValue"]),t("p",d,E(_.radio2),1)]),_:1})]),_:1})}const{defineComponent:f,ref:i}=A,z=f({setup(){const _=i("Firefox"),D=i("\u9009\u9879\u4E00");return{radio1:_,radio2:D}}});return w({render:r},z)}()}},K=e("h1",null,"Radio \u5355\u9009\u6846",-1),O=e("p",null,"\u7528\u4E8E\u5728\u591A\u4E2A\u5907\u9009\u9879\u4E2D\u9009\u4E2D\u5355\u4E2A\u72B6\u6001\u3002\u82E5\u9009\u9879\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Select \u9009\u62E9\u5668\u3002",-1),Y=e("div",null,[e("p",null,[l("\u8981\u4F7F\u7528 Radio \u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u8BBE\u7F6E"),e("code",null,"v-model"),l("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u9009\u4E2D\u610F\u5473\u7740\u53D8\u91CF\u7684\u503C\u4E3A\u76F8\u5E94 Radio "),e("code",null,"label"),l("\u5C5E\u6027\u7684\u503C\uFF0C"),e("code",null,"label"),l("\u53EF\u4EE5\u662F"),e("code",null,"string"),l("\u3001"),e("code",null,"number"),l("\u6216"),e("code",null,"boolean"),l("\u3002")])],-1),Z=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1">\u5907\u9009\u9879</hl-radio>
  <hl-radio v-model="radio" label="2">\u5907\u9009\u9879</hl-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('1')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),ee=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),l(" \u5C3A\u5BF8\u4FEE\u9970")],-1),oe=e("p",null,[l("Radio \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),l(),e("code",null,"md"),l(),e("code",null,"lg"),l(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),l(" \u5C3A\u5BF8")],-1),ue=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1" size="sm" class="m-r-md">\u9ED8\u8BA4</hl-radio>
  <hl-radio v-model="radio" label="2" type="primary" size="md" class="m-r-md">Primary</hl-radio>
  <hl-radio v-model="radio" label="3" type="success" size="lg" class="m-r-md">Success</hl-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('1')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),te=e("h2",{id:"zhuang-tai-yan-se"},[e("a",{class:"header-anchor",href:"#zhuang-tai-yan-se"}),l(" \u72B6\u6001\u989C\u8272")],-1),le=e("div",null,[e("p",null,[l("Radio \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),e("code",null,"primary"),l("\u3001"),e("code",null,"success"),l("\u3001"),e("code",null,"warning"),l("\u3001"),e("code",null,"danger"),l(" \u548C "),e("code",null,"info"),l("\u3002")])],-1),de=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1">\u9ED8\u8BA4</hl-radio>
  <hl-radio v-model="radio" label="2" type="primary">Primary</hl-radio>
  <hl-radio v-model="radio" label="3" type="success">Success</hl-radio>
  <hl-radio v-model="radio" label="4" type="warning">Warning</hl-radio>
  <hl-radio v-model="radio" label="5" type="danger">Danger</hl-radio>
  <hl-radio v-model="radio" label="6" type="info">Info</hl-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('1')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),ae=e("h2",{id:"fill-yan-se"},[e("a",{class:"header-anchor",href:"#fill-yan-se"}),l(" Fill \u989C\u8272")],-1),re=e("div",null,[e("p",null,"\u4F7F\u7528 fill \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F Radio \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002")],-1),ne=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="1" fill>\u9ED8\u8BA4</hl-radio>
  <hl-radio v-model="radio" label="2" type="primary" fill>Primary</hl-radio>
  <hl-radio v-model="radio" label="3" type="success" fill>Success</hl-radio>
  <hl-radio v-model="radio" label="4" type="warning" fill>Warning</hl-radio>
  <hl-radio v-model="radio" label="5" type="danger" fill>Danger</hl-radio>
  <hl-radio v-model="radio" label="6" type="info" fill>Info</hl-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('1')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),ie=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),l(" \u7981\u7528\u72B6\u6001")],-1),se=e("p",null,[l("\u53EA\u8981\u5728 Radio \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"disabled"),l("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),l("\uFF0C"),e("code",null,"true"),l("\u4E3A\u7981\u7528\u3002")],-1),me=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" disabled label="\u7981\u7528">\u5907\u9009\u9879</hl-radio>
  <hl-radio v-model="radio" disabled label="\u9009\u4E2D\u4E14\u7981\u7528">\u5907\u9009\u9879</hl-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('\u9009\u4E2D\u4E14\u7981\u7528')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),pe=e("h2",{id:"dan-xuan-kuang-zu"},[e("a",{class:"header-anchor",href:"#dan-xuan-kuang-zu"}),l(" \u5355\u9009\u6846\u7EC4")],-1),ce=e("p",null,[l("\u5355\u9009\u6846\u7EC4\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),l(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),l("\uFF0C\u9ED8\u8BA4\u4E3A 12px")],-1),he=e("div",null,[e("p",null,[l("\u7ED3\u5408 RadioGroup \u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6 Radio \u53EF\u4EE5\u5B9E\u73B0\u5355\u9009\u7EC4\uFF0C\u5728 RadioGroup \u4E2D\u7ED1\u5B9A"),e("code",null,"v-model"),l("\uFF0C\u5728 Radio \u4E2D\u8BBE\u7F6E\u597D"),e("code",null,"label"),l("\u5373\u53EF\uFF0C\u65E0\u9700\u518D\u7ED9\u6BCF\u4E00\u4E2A Radio \u7ED1\u5B9A\u53D8\u91CF\uFF0C\u53E6\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86"),e("code",null,"change"),l("\u4E8B\u4EF6\u6765\u54CD\u5E94\u53D8\u5316\uFF0C\u5B83\u4F1A\u4F20\u5165\u4E00\u4E2A\u53C2\u6570"),e("code",null,"value"),l("\u3002")])],-1),_e=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio-group v-model="radio" gap="var(--md)" type="primary" size="md">
    <hl-radio label="a">\u5907\u9009\u9879</hl-radio>
    <hl-radio label="b">\u5907\u9009\u9879</hl-radio>
    <hl-radio label="c">\u5907\u9009\u9879</hl-radio>
  </hl-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('a')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),Ee=e("h2",{id:"zu-pai-lie"},[e("a",{class:"header-anchor",href:"#zu-pai-lie"}),l(" \u7EC4\u6392\u5217")],-1),fe=e("p",null,[l("\u5355\u9009\u6846\u7EC4\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"dir"),l(" \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u5B83\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),Fe=e("div",null,[e("p",null,[l("\u652F\u6301 \u9ED8\u8BA4\u7684 "),e("code",null,"horizontal"),l(" \u6A2A\u5411\u6392\u5217 \u548C "),e("code",null,"vertical"),l(" \u7EB5\u5411\u6392\u5217\u3002")])],-1),be=e("pre",null,[e("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('a')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),ge=e("h2",{id:"zi-ding-yi-yang-shi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),l(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),Ce=e("p",null,[l("\u53EA\u8981\u5728 Radio \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"custom"),l("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),l("\uFF0C"),e("code",null,"true"),l("\u4E3A\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Be=e("div",null,[e("p",null,[l("\u4F60\u53EF\u4EE5\u6839\u636E Radio \u7EC4\u4EF6\u63D0\u4F9B\u7684 "),e("code",null,"is-checked"),l(),e("code",null,"is-focus"),l(),e("code",null,"is-disabled"),l("\u7684\u6837\u5F0F\u540D\u79F0\u6765\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002")])],-1),Ve=e("pre",null,[e("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio1 = ref('Firefox')
    const radio2 = ref('\u9009\u9879\u4E00')
    return {
      radio1,
      radio2,
    }
  },
})
<\/script>
`)],-1),ve=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>Radio \u7684 value</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u4FEE\u9970</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A Label \u5C5E\u6027\u7684\u6587\u672C\u5185\u5BB9</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u9009\u4E2D\u7684 Radio label \u503C</td></tr></tbody></table><h2 id="radio-group-attributes"><a class="header-anchor" href="#radio-group-attributes"></a> Radio Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>-</td><td>sm</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="radio-group-events"><a class="header-anchor" href="#radio-group-events"></a> Radio Group Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u9009\u4E2D\u7684 Radio label \u503C</td></tr></tbody></table>',8);function ye(t,a,o,u,E,F){const b=x("hl-demo0"),c=x("demo-block"),g=x("hl-demo1"),C=x("hl-demo2"),B=x("hl-demo3"),V=x("hl-demo4"),v=x("hl-demo5"),s=x("hl-demo6"),n=x("hl-demo7"),m=x("right-nav");return Q(),X(J,null,[e("section",null,[K,O,y(c,{fs:""},{source:h(()=>[y(b)]),highlight:h(()=>[Z]),default:h(()=>[Y]),_:1}),ee,oe,y(c,{fs:""},{source:h(()=>[y(g)]),highlight:h(()=>[ue]),_:1}),te,y(c,{fs:""},{source:h(()=>[y(C)]),highlight:h(()=>[de]),default:h(()=>[le]),_:1}),ae,y(c,{fs:""},{source:h(()=>[y(B)]),highlight:h(()=>[ne]),default:h(()=>[re]),_:1}),ie,se,y(c,{fs:""},{source:h(()=>[y(V)]),highlight:h(()=>[me]),_:1}),pe,ce,y(c,{fs:""},{source:h(()=>[y(v)]),highlight:h(()=>[_e]),default:h(()=>[he]),_:1}),Ee,fe,y(c,{fs:""},{source:h(()=>[y(s)]),highlight:h(()=>[be]),default:h(()=>[Fe]),_:1}),ge,Ce,y(c,{fs:""},{source:h(()=>[y(n)]),highlight:h(()=>[Ve]),default:h(()=>[Be]),_:1}),ve]),y(m)],64)}var Ue=q(H,[["render",ye]]);export{Ue as default};
