var K=Object.defineProperty;var W=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var G=(u,a,o)=>a in u?K(u,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[a]=o,U=(u,a)=>{for(var o in a||(a={}))Q.call(a,o)&&G(u,o,a[o]);if(W)for(var o of W(a))Y.call(a,o)&&G(u,o,a[o]);return u};import{H as N,o as L,C as M,D as e,v as B,M as p,av as D,_ as d,au as q}from"./vue.450bc1d0.js";import{_ as J}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const O={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,Fragment:_,openBlock:V,createElementBlock:E}=D,h=u("\u5907\u9009\u9879"),f=u("\u5907\u9009\u9879");function F(m,r){const i=a("hl-radio");return V(),E(_,null,[t(i,{modelValue:m.radio,"onUpdate:modelValue":r[0]||(r[0]=s=>m.radio=s),label:"1"},{default:o(()=>[h]),_:1},8,["modelValue"]),t(i,{modelValue:m.radio,"onUpdate:modelValue":r[1]||(r[1]=s=>m.radio=s),label:"2"},{default:o(()=>[f]),_:1},8,["modelValue"])],64)}const{defineComponent:b,ref:C}=D,g=b({setup(){return{radio:C("1")}}});return U({render:F},g)}(),"hl-demo1":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,Fragment:_,openBlock:V,createElementBlock:E}=D,h=u("\u9ED8\u8BA4"),f=u("Primary"),F=u("Success"),b=u("Warning"),C=u("Danger"),g=u("Info");function m(l,n){const v=a("hl-radio");return V(),E(_,null,[t(v,{modelValue:l.radio,"onUpdate:modelValue":n[0]||(n[0]=c=>l.radio=c),label:"1"},{default:o(()=>[h]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[1]||(n[1]=c=>l.radio=c),label:"2",type:"primary"},{default:o(()=>[f]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[2]||(n[2]=c=>l.radio=c),label:"3",type:"success"},{default:o(()=>[F]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[3]||(n[3]=c=>l.radio=c),label:"4",type:"warning"},{default:o(()=>[b]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[4]||(n[4]=c=>l.radio=c),label:"5",type:"danger"},{default:o(()=>[C]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[5]||(n[5]=c=>l.radio=c),label:"6",type:"info"},{default:o(()=>[g]),_:1},8,["modelValue"])],64)}const{defineComponent:r,ref:i}=D,s=r({setup(){return{radio:i("1")}}});return U({render:m},s)}(),"hl-demo2":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,Fragment:_,openBlock:V,createElementBlock:E}=D,h=u("\u9ED8\u8BA4"),f=u("Primary"),F=u("Success"),b=u("Warning"),C=u("Danger"),g=u("Info");function m(l,n){const v=a("hl-radio");return V(),E(_,null,[t(v,{modelValue:l.radio,"onUpdate:modelValue":n[0]||(n[0]=c=>l.radio=c),label:"1",fill:""},{default:o(()=>[h]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[1]||(n[1]=c=>l.radio=c),label:"2",type:"primary",fill:""},{default:o(()=>[f]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[2]||(n[2]=c=>l.radio=c),label:"3",type:"success",fill:""},{default:o(()=>[F]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[3]||(n[3]=c=>l.radio=c),label:"4",type:"warning",fill:""},{default:o(()=>[b]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[4]||(n[4]=c=>l.radio=c),label:"5",type:"danger",fill:""},{default:o(()=>[C]),_:1},8,["modelValue"]),t(v,{modelValue:l.radio,"onUpdate:modelValue":n[5]||(n[5]=c=>l.radio=c),label:"6",type:"info",fill:""},{default:o(()=>[g]),_:1},8,["modelValue"])],64)}const{defineComponent:r,ref:i}=D,s=r({setup(){return{radio:i("1")}}});return U({render:m},s)}(),"hl-demo3":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,Fragment:_,openBlock:V,createElementBlock:E}=D,h=u("\u9ED8\u8BA4"),f=u("Primary"),F=u("Success");function b(r,i){const s=a("hl-radio");return V(),E(_,null,[t(s,{modelValue:r.radio,"onUpdate:modelValue":i[0]||(i[0]=l=>r.radio=l),label:"1",size:"sm",class:"m-r-md"},{default:o(()=>[h]),_:1},8,["modelValue"]),t(s,{modelValue:r.radio,"onUpdate:modelValue":i[1]||(i[1]=l=>r.radio=l),label:"2",type:"primary",size:"md",class:"m-r-md"},{default:o(()=>[f]),_:1},8,["modelValue"]),t(s,{modelValue:r.radio,"onUpdate:modelValue":i[2]||(i[2]=l=>r.radio=l),label:"3",type:"success",size:"lg",class:"m-r-md"},{default:o(()=>[F]),_:1},8,["modelValue"])],64)}const{defineComponent:C,ref:g}=D,m=C({setup(){return{radio:g("1")}}});return U({render:b},m)}(),"hl-demo4":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,Fragment:_,openBlock:V,createElementBlock:E}=D,h=u("\u5907\u9009\u9879"),f=u("\u5907\u9009\u9879");function F(m,r){const i=a("hl-radio");return V(),E(_,null,[t(i,{modelValue:m.radio,"onUpdate:modelValue":r[0]||(r[0]=s=>m.radio=s),disabled:"",label:"\u7981\u7528"},{default:o(()=>[h]),_:1},8,["modelValue"]),t(i,{modelValue:m.radio,"onUpdate:modelValue":r[1]||(r[1]=s=>m.radio=s),disabled:"",label:"\u9009\u4E2D\u4E14\u7981\u7528"},{default:o(()=>[f]),_:1},8,["modelValue"])],64)}const{defineComponent:b,ref:C}=D,g=b({setup(){return{radio:C("\u9009\u4E2D\u4E14\u7981\u7528")}}});return U({render:F},g)}(),"hl-demo5":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,Fragment:_,openBlock:V,createElementBlock:E}=D,h=u("\u5907\u9009\u9879"),f=u("\u5907\u9009\u9879"),F=u("\u672A\u52A0\u7C97");function b(r,i){const s=a("hl-radio");return V(),E(_,null,[t(s,{modelValue:r.radio,"onUpdate:modelValue":i[0]||(i[0]=l=>r.radio=l),label:"\u9009\u4E2D",bold:""},{default:o(()=>[h]),_:1},8,["modelValue"]),t(s,{modelValue:r.radio,"onUpdate:modelValue":i[1]||(i[1]=l=>r.radio=l),label:"\u672A\u9009\u4E2D",bold:""},{default:o(()=>[f]),_:1},8,["modelValue"]),t(s,{modelValue:r.radio,"onUpdate:modelValue":i[2]||(i[2]=l=>r.radio=l),label:"\u672A\u9009\u4E2D2"},{default:o(()=>[F]),_:1},8,["modelValue"])],64)}const{defineComponent:C,ref:g}=D,m=C({setup(){return{radio:g("\u9009\u4E2D")}}});return U({render:b},m)}(),"hl-demo6":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,openBlock:_,createBlock:V}=D,E=u("\u5907\u9009\u9879"),h=u("\u5907\u9009\u9879"),f=u("\u5907\u9009\u9879");function F(m,r){const i=a("hl-radio"),s=a("hl-radio-group");return _(),V(s,{modelValue:m.radio,"onUpdate:modelValue":r[0]||(r[0]=l=>m.radio=l),gap:"var(--md)",type:"primary",size:"md"},{default:o(()=>[t(i,{label:"a"},{default:o(()=>[E]),_:1}),t(i,{label:"b"},{default:o(()=>[h]),_:1}),t(i,{label:"c"},{default:o(()=>[f]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:b,ref:C}=D,g=b({setup(){return{radio:C("a")}}});return U({render:F},g)}(),"hl-demo7":function(){const{createTextVNode:u,resolveComponent:a,withCtx:o,createVNode:t,openBlock:_,createBlock:V}=D,E=u("\u5907\u9009\u9879"),h=u("\u5907\u9009\u9879"),f=u("\u5907\u9009\u9879"),F=u("\u5907\u9009\u9879"),b=u("\u5907\u9009\u9879"),C=u("\u5907\u9009\u9879");function g(s,l){const n=a("hl-radio"),v=a("hl-radio-group"),c=a("hl-col"),R=a("hl-row");return _(),V(R,null,{default:o(()=>[t(c,{span:"col"},{default:o(()=>[t(v,{modelValue:s.radio,"onUpdate:modelValue":l[0]||(l[0]=z=>s.radio=z),dir:"horizontal",gap:"var(--md)",type:"primary"},{default:o(()=>[t(n,{label:"a"},{default:o(()=>[E]),_:1}),t(n,{label:"b"},{default:o(()=>[h]),_:1}),t(n,{label:"c"},{default:o(()=>[f]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{span:"col"},{default:o(()=>[t(v,{modelValue:s.radio,"onUpdate:modelValue":l[1]||(l[1]=z=>s.radio=z),dir:"vertical",gap:"var(--md)",type:"primary"},{default:o(()=>[t(n,{label:"a"},{default:o(()=>[F]),_:1}),t(n,{label:"b"},{default:o(()=>[b]),_:1}),t(n,{label:"c"},{default:o(()=>[C]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:m,ref:r}=D,i=m({setup(){return{radio:r("a")}}});return U({render:g},i)}(),"hl-demo8":function(){const{createElementVNode:u,resolveComponent:a,withCtx:o,createVNode:t,createTextVNode:_,openBlock:V,createBlock:E}=D,h=u("p",null,"\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),f={class:"demo-check-img"},F=["src"],b={class:"demo-check-img"},C=["src"],g={class:"demo-check-img"},m=["src"],r={class:"demo-check-img"},i=["src"],s=u("p",null,"\u4F7F\u7528radio-group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),l=u("div",{class:"demo-check-text"},"\u5217\u8868",-1),n=u("div",{class:"demo-check-text"},"\u56FE\u6807",-1),v=u("p",null,"\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F",-1),c=_("\u5217\u8868"),R=_("\u56FE\u8868");function z(A,y){const w=a("hl-radio"),I=a("hl-group"),x=a("hl-col"),j=a("hl-radio-group"),S=a("hl-button"),$=a("hl-row");return V(),E($,null,{default:o(()=>[t(x,{span:"col"},{default:o(()=>[h,t(I,{style:{"--indent":"-2px"}},{default:o(()=>[t(w,{modelValue:A.radio1,"onUpdate:modelValue":y[0]||(y[0]=k=>A.radio1=k),label:"\u5317\u4EAC",custom:"",type:"success"},{default:o(()=>[u("div",f,[u("img",{src:A.src},null,8,F)])]),_:1},8,["modelValue"]),t(w,{modelValue:A.radio1,"onUpdate:modelValue":y[1]||(y[1]=k=>A.radio1=k),label:"\u4E0A\u6D77",custom:"",type:"primary"},{default:o(()=>[u("div",b,[u("img",{src:A.src},null,8,C)])]),_:1},8,["modelValue"]),t(w,{modelValue:A.radio1,"onUpdate:modelValue":y[2]||(y[2]=k=>A.radio1=k),label:"\u5E7F\u5DDE",custom:"",type:"danger"},{default:o(()=>[u("div",g,[u("img",{src:A.src},null,8,m)])]),_:1},8,["modelValue"]),t(w,{modelValue:A.radio1,"onUpdate:modelValue":y[3]||(y[3]=k=>A.radio1=k),label:"\u6DF1\u5733",custom:"",type:"warning"},{default:o(()=>[u("div",r,[u("img",{src:A.src},null,8,i)])]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(x,{span:"col"},{default:o(()=>[s,t(j,{modelValue:A.radio2,"onUpdate:modelValue":y[4]||(y[4]=k=>A.radio2=k),custom:""},{default:o(()=>[t(w,{label:"\u5217\u8868"},{default:o(()=>[l]),_:1}),t(w,{label:"\u56FE\u6807"},{default:o(()=>[n]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(x,{span:"col"},{default:o(()=>[v,t(j,{modelValue:A.radio2,"onUpdate:modelValue":y[5]||(y[5]=k=>A.radio2=k),custom:"",gap:"6px"},{default:o(()=>[t(w,{label:"\u5217\u8868"},{default:o(()=>[t(S,null,{default:o(()=>[c]),_:1})]),_:1}),t(w,{label:"\u56FE\u8868"},{default:o(()=>[t(S,null,{default:o(()=>[R]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:P,ref:T}=D,H=P({setup(){const A=T("\u4E0A\u6D77"),y=T("\u4E0A\u6D77"),w=T("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544970959,3405281631&fm=26&gp=0.jpg");return{radio1:A,radio2:y,src:w}}});return U({render:z},H)}()}},X={class:"doc-main-content"},Z={class:"doc-content"},ee=e("h1",null,"Radio \u5355\u9009\u6846",-1),oe=e("p",null,"\u7528\u4E8E\u5728\u591A\u4E2A\u5907\u9009\u9879\u4E2D\u9009\u4E2D\u5355\u4E2A\u72B6\u6001\u3002\u82E5\u9009\u9879\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Select \u9009\u62E9\u5668\u3002",-1),ue=e("div",null,[e("p",null,[d("\u8981\u4F7F\u7528 Radio \u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u8BBE\u7F6E"),e("code",null,"v-model"),d("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u9009\u4E2D\u610F\u5473\u7740\u53D8\u91CF\u7684\u503C\u4E3A\u76F8\u5E94 Radio "),e("code",null,"label"),d("\u5C5E\u6027\u7684\u503C\uFF0C"),e("code",null,"label"),d("\u53EF\u4EE5\u662F"),e("code",null,"string"),d("\u3001"),e("code",null,"number"),d("\u6216"),e("code",null,"boolean"),d("\u3002")])],-1),te=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),de=e("h2",{id:"zhuang-tai-yan-se"},[e("a",{class:"header-anchor",href:"#zhuang-tai-yan-se"}),d(" \u72B6\u6001\u989C\u8272")],-1),le=e("div",null,[e("p",null,[d("Radio \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),e("code",null,"primary"),d("\u3001"),e("code",null,"success"),d("\u3001"),e("code",null,"warning"),d("\u3001"),e("code",null,"danger"),d(" \u548C "),e("code",null,"info"),d("\u3002")])],-1),ae=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),re=e("h2",{id:"fill-yan-se"},[e("a",{class:"header-anchor",href:"#fill-yan-se"}),d(" Fill \u989C\u8272")],-1),ne=e("div",null,[e("p",null,"\u4F7F\u7528 fill \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F Radio \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002")],-1),ie=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),se=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),d(" \u5C3A\u5BF8\u4FEE\u9970")],-1),me=e("div",null,[e("p",null,[d("Radio \u63D0\u4F9B\u4E86 "),e("code",null,"sm"),d(),e("code",null,"md"),d(),e("code",null,"lg"),d(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),d(" \u5C3A\u5BF8")])],-1),ce=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),he=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),d(" \u7981\u7528\u72B6\u6001")],-1),pe=e("p",null,[d("\u53EA\u8981\u5728 Radio \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"disabled"),d("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),d("\uFF0C"),e("code",null,"true"),d("\u4E3A\u7981\u7528\u3002")],-1),_e=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Ee=e("h2",{id:"jia-cu-miao-bian"},[e("a",{class:"header-anchor",href:"#jia-cu-miao-bian"}),d(" \u52A0\u7C97\u63CF\u8FB9")],-1),fe=e("p",null,[d("\u7ED9 Radio \u7EC4\u4EF6\u589E\u52A0 "),e("code",null,"bold"),d(" \u5C5E\u6027\u5373\u53EF\u4F7F\u5B83\u7684\u8FB9\u7F18\u770B\u8D77\u6765\u66F4\u7A81\u51FA\u4E00\u4E9B\u3002")],-1),Fe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio v-model="radio" label="\u9009\u4E2D" bold>\u5907\u9009\u9879</hl-radio>
  <hl-radio v-model="radio" label="\u672A\u9009\u4E2D" bold>\u5907\u9009\u9879</hl-radio>
  <hl-radio v-model="radio" label="\u672A\u9009\u4E2D2">\u672A\u52A0\u7C97</hl-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('\u9009\u4E2D')
    return {
      radio,
    }
  },
})
<\/script>
`)],-1),be=e("h2",{id:"dan-xuan-kuang-zu"},[e("a",{class:"header-anchor",href:"#dan-xuan-kuang-zu"}),d(" \u5355\u9009\u6846\u7EC4")],-1),Ce=e("p",null,[d("\u5355\u9009\u6846\u7EC4\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),d(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0px"'),d("\uFF0C\u9ED8\u8BA4\u4E3A 12px")],-1),ge=e("div",null,[e("p",null,[d("\u7ED3\u5408 RadioGroup \u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6 Radio \u53EF\u4EE5\u5B9E\u73B0\u5355\u9009\u7EC4\uFF0C\u5728 RadioGroup \u4E2D\u7ED1\u5B9A"),e("code",null,"v-model"),d("\uFF0C\u5728 Radio \u4E2D\u8BBE\u7F6E\u597D"),e("code",null,"label"),d("\u5373\u53EF\uFF0C\u65E0\u9700\u518D\u7ED9\u6BCF\u4E00\u4E2ARadio \u7ED1\u5B9A\u53D8\u91CF\uFF0C\u53E6\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86"),e("code",null,"change"),d("\u4E8B\u4EF6\u6765\u54CD\u5E94\u53D8\u5316\uFF0C\u5B83\u4F1A\u4F20\u5165\u4E00\u4E2A\u53C2\u6570"),e("code",null,"value"),d("\u3002")])],-1),Be=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Ve=e("h2",{id:"zu-pai-lie"},[e("a",{class:"header-anchor",href:"#zu-pai-lie"}),d(" \u7EC4\u6392\u5217")],-1),ve=e("p",null,[d("\u5355\u9009\u6846\u7EC4\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"dir"),d(" \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u5B83\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),Ae=e("div",null,[e("p",null,[d("\u652F\u6301 \u9ED8\u8BA4\u7684 "),e("code",null,"horizontal"),d(" \u6A2A\u5411\u6392\u5217 \u548C "),e("code",null,"vertical"),d(" \u7EB5\u5411\u6392\u5217\u3002")])],-1),De=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ye=e("h2",{id:"zi-ding-yi-yang-shi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),d(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),ke=e("p",null,[d("\u53EA\u8981\u5728 Radio \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"custom"),d("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),d("\uFF0C"),e("code",null,"true"),d("\u4E3A\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Ne=e("div",null,[e("p",null,[d("\u4F60\u53EF\u4EE5\u6839\u636E Radio \u7EC4\u4EF6\u63D0\u4F9B\u7684 "),e("code",null,"is-checked"),d(),e("code",null,"is-focus"),d(),e("code",null,"is-disabled"),d("\u7684\u6837\u5F0F\u540D\u79F0\u6765\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002")])],-1),we=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <p>\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-group style="--indent:-2px">
        <hl-radio
          v-model="radio1"
          label="\u5317\u4EAC"
          custom
          type="success"
        >
          <div class="demo-check-img"><img :src="src"></div>
        </hl-radio>
        <hl-radio
          v-model="radio1"
          label="\u4E0A\u6D77"
          custom
          type="primary"
        >
          <div class="demo-check-img"><img :src="src"></div>
        </hl-radio>
        <hl-radio
          v-model="radio1"
          label="\u5E7F\u5DDE"
          custom
          type="danger"
        >
          <div class="demo-check-img"><img :src="src"></div>
        </hl-radio>
        <hl-radio
          v-model="radio1"
          label="\u6DF1\u5733"
          custom
          type="warning"
        >
          <div class="demo-check-img"><img :src="src"></div>
        </hl-radio>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p>\u4F7F\u7528radio-group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-radio-group v-model="radio2" custom>
        <hl-radio label="\u5217\u8868"><div class="demo-check-text">\u5217\u8868</div></hl-radio>
        <hl-radio label="\u56FE\u6807"><div class="demo-check-text">\u56FE\u6807</div></hl-radio>
      </hl-radio-group>
    </hl-col>

    <hl-col span="col">
      <p>\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-radio-group v-model="radio2" custom gap="6px">
        <hl-radio label="\u5217\u8868">
          <hl-button>\u5217\u8868</hl-button>
        </hl-radio>
        <hl-radio label="\u56FE\u8868">
          <hl-button>\u56FE\u8868</hl-button>
        </hl-radio>
      </hl-radio-group>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio1 = ref('\u4E0A\u6D77')
    const radio2 = ref('\u4E0A\u6D77')
    const src = ref('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544970959,3405281631&fm=26&gp=0.jpg')
    return {
      radio1,
      radio2,
      src,
    }
  },
})
<\/script>
`)],-1),Ue=q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>Radio \u7684 value</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>bold</td><td>\u52A0\u7C97\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u4FEE\u9970</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793ALabel\u5C5E\u6027\u7684\u6587\u672C\u5185\u5BB9</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u9009\u4E2D\u7684 Radio label \u503C</td></tr></tbody></table><h2 id="radio-group-attributes"><a class="header-anchor" href="#radio-group-attributes"></a> Radio Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>bold</td><td>\u52A0\u7C97\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>-</td><td>sm</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="radio-group-events"><a class="header-anchor" href="#radio-group-events"></a> Radio Group Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u9009\u4E2D\u7684 Radio label \u503C</td></tr></tbody></table>',8);function ze(u,a,o,t,_,V){const E=N("hl-demo0"),h=N("demo-block"),f=N("hl-demo1"),F=N("hl-demo2"),b=N("hl-demo3"),C=N("hl-demo4"),g=N("hl-demo5"),m=N("hl-demo6"),r=N("hl-demo7"),i=N("hl-demo8"),s=N("right-nav");return L(),M("section",X,[e("div",Z,[ee,oe,B(h,{fs:""},{source:p(()=>[B(E)]),highlight:p(()=>[te]),default:p(()=>[ue]),_:1}),de,B(h,{fs:""},{source:p(()=>[B(f)]),highlight:p(()=>[ae]),default:p(()=>[le]),_:1}),re,B(h,{fs:""},{source:p(()=>[B(F)]),highlight:p(()=>[ie]),default:p(()=>[ne]),_:1}),se,B(h,{fs:""},{source:p(()=>[B(b)]),highlight:p(()=>[ce]),default:p(()=>[me]),_:1}),he,pe,B(h,{fs:""},{source:p(()=>[B(C)]),highlight:p(()=>[_e]),_:1}),Ee,fe,B(h,{fs:""},{source:p(()=>[B(g)]),highlight:p(()=>[Fe]),_:1}),be,Ce,B(h,{fs:""},{source:p(()=>[B(m)]),highlight:p(()=>[Be]),default:p(()=>[ge]),_:1}),Ve,ve,B(h,{fs:""},{source:p(()=>[B(r)]),highlight:p(()=>[De]),default:p(()=>[Ae]),_:1}),ye,ke,B(h,{fs:""},{source:p(()=>[B(i)]),highlight:p(()=>[we]),default:p(()=>[Ne]),_:1}),Ue]),B(s)])}var Ge=J(O,[["render",ze]]);export{Ge as default};
