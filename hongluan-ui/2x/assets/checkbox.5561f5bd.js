var $=Object.defineProperty;var j=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var S=(o,c,u)=>c in o?$(o,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[c]=u,N=(o,c)=>{for(var u in c||(c={}))q.call(c,u)&&S(o,u,c[u]);if(j)for(var u of j(c))Q.call(c,u)&&S(o,u,c[u]);return o};import{Y as w,L as X,W as Y,Q as e,a2 as x,a0 as g,P as H,aG as D,a3 as n,o as I}from"./vue.ad0d5d1c.js";import{_ as J}from"./index.4f3bfee7.js";import"./hongluan.bb564fd4.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.3fa14f51.js";const K={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,openBlock:l,createBlock:C}=D,B=o("\u5907\u9009\u9879");function _(p,m){const E=c("hl-checkbox");return l(),C(E,{modelValue:p.checked,"onUpdate:modelValue":m[0]||(m[0]=s=>p.checked=s)},{default:u(()=>[B]),_:1},8,["modelValue"])}const{defineComponent:a,ref:F}=D,k=a({setup(){return{checked:F(!0)}}});return N({render:_},k)}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:l,Fragment:C,openBlock:B,createElementBlock:_}=D,a=o("Default"),F=o("Primary"),k=o("Success");function p(r,d){const b=c("hl-checkbox");return B(),_(C,null,[l(b,{modelValue:r.checked1,"onUpdate:modelValue":d[0]||(d[0]=t=>r.checked1=t),size:"sm"},{default:u(()=>[a]),_:1},8,["modelValue"]),l(b,{modelValue:r.checked2,"onUpdate:modelValue":d[1]||(d[1]=t=>r.checked2=t),type:"primary"},{default:u(()=>[F]),_:1},8,["modelValue"]),l(b,{modelValue:r.checked3,"onUpdate:modelValue":d[2]||(d[2]=t=>r.checked3=t),type:"success",size:"lg"},{default:u(()=>[k]),_:1},8,["modelValue"])],64)}const{defineComponent:m,ref:E}=D,s=m({setup(){const r=E(!1),d=E(!1),b=E(!1);return{checked1:r,checked2:d,checked3:b}}});return N({render:p},s)}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:l,Fragment:C,openBlock:B,createElementBlock:_}=D,a=o("Default"),F=o("Primary"),k=o("Success"),p=o("Warning"),m=o("Danger"),E=o("Info");function s(t,h){const f=c("hl-checkbox");return B(),_(C,null,[l(f,{modelValue:t.checked1,"onUpdate:modelValue":h[0]||(h[0]=i=>t.checked1=i)},{default:u(()=>[a]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked2,"onUpdate:modelValue":h[1]||(h[1]=i=>t.checked2=i),type:"primary"},{default:u(()=>[F]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked3,"onUpdate:modelValue":h[2]||(h[2]=i=>t.checked3=i),type:"success"},{default:u(()=>[k]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked4,"onUpdate:modelValue":h[3]||(h[3]=i=>t.checked4=i),type:"warning"},{default:u(()=>[p]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked5,"onUpdate:modelValue":h[4]||(h[4]=i=>t.checked5=i),type:"danger"},{default:u(()=>[m]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked6,"onUpdate:modelValue":h[5]||(h[5]=i=>t.checked6=i),type:"info"},{default:u(()=>[E]),_:1},8,["modelValue"])],64)}const{defineComponent:r,ref:d}=D,b=r({setup(){const t=d(!1),h=d(!1),f=d(!1),i=d(!1),y=d(!1),z=d(!1);return{checked1:t,checked2:h,checked3:f,checked4:i,checked5:y,checked6:z}}});return N({render:s},b)}(),"hl-demo3":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:l,Fragment:C,openBlock:B,createElementBlock:_}=D,a=o("Default"),F=o("Primary"),k=o("Success"),p=o("Warning"),m=o("Danger"),E=o("Info");function s(t,h){const f=c("hl-checkbox");return B(),_(C,null,[l(f,{modelValue:t.checked1,"onUpdate:modelValue":h[0]||(h[0]=i=>t.checked1=i),fill:""},{default:u(()=>[a]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked2,"onUpdate:modelValue":h[1]||(h[1]=i=>t.checked2=i),type:"primary",fill:""},{default:u(()=>[F]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked3,"onUpdate:modelValue":h[2]||(h[2]=i=>t.checked3=i),type:"success",fill:""},{default:u(()=>[k]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked4,"onUpdate:modelValue":h[3]||(h[3]=i=>t.checked4=i),type:"warning",fill:""},{default:u(()=>[p]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked5,"onUpdate:modelValue":h[4]||(h[4]=i=>t.checked5=i),type:"danger",fill:""},{default:u(()=>[m]),_:1},8,["modelValue"]),l(f,{modelValue:t.checked6,"onUpdate:modelValue":h[5]||(h[5]=i=>t.checked6=i),type:"info",fill:""},{default:u(()=>[E]),_:1},8,["modelValue"])],64)}const{defineComponent:r,ref:d}=D,b=r({setup(){const t=d(!1),h=d(!1),f=d(!1),i=d(!1),y=d(!1),z=d(!1);return{checked1:t,checked2:h,checked3:f,checked4:i,checked5:y,checked6:z}}});return N({render:s},b)}(),"hl-demo4":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:l,Fragment:C,openBlock:B,createElementBlock:_}=D,a=o("\u5907\u9009\u98791"),F=o("\u5907\u9009\u9879");function k(s,r){const d=c("hl-checkbox");return B(),_(C,null,[l(d,{modelValue:s.checked1,"onUpdate:modelValue":r[0]||(r[0]=b=>s.checked1=b),round:""},{default:u(()=>[a]),_:1},8,["modelValue"]),l(d,{modelValue:s.checked2,"onUpdate:modelValue":r[1]||(r[1]=b=>s.checked2=b),round:"",type:"primary"},{default:u(()=>[F]),_:1},8,["modelValue"])],64)}const{defineComponent:p,ref:m}=D,E=p({setup(){const s=m(!1),r=m(!1);return{checked1:s,checked2:r}}});return N({render:k},E)}(),"hl-demo5":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:l,Fragment:C,openBlock:B,createElementBlock:_}=D,a=o("\u5907\u9009\u98791"),F=o("\u5907\u9009\u9879");function k(s,r){const d=c("hl-checkbox");return B(),_(C,null,[l(d,{modelValue:s.checked1,"onUpdate:modelValue":r[0]||(r[0]=b=>s.checked1=b),disabled:""},{default:u(()=>[a]),_:1},8,["modelValue"]),l(d,{modelValue:s.checked2,"onUpdate:modelValue":r[1]||(r[1]=b=>s.checked2=b),disabled:""},{default:u(()=>[F]),_:1},8,["modelValue"])],64)}const{defineComponent:p,ref:m}=D,E=p({setup(){const s=m(!1),r=m(!1);return{checked1:s,checked2:r}}});return N({render:k},E)}(),"hl-demo6":function(){const{resolveComponent:o,createVNode:c,withCtx:u,openBlock:l,createBlock:C}=D;function B(k,p){const m=o("hl-checkbox"),E=o("hl-checkbox-group"),s=o("hl-col"),r=o("hl-row");return l(),C(r,null,{default:u(()=>[c(s,{span:"col-18"},{default:u(()=>[c(E,{modelValue:k.checkList,"onUpdate:modelValue":p[0]||(p[0]=d=>k.checkList=d),dir:"horizontal",gap:"var(--md)",wrap:""},{default:u(()=>[c(m,{label:"\u590D\u9009\u6846 A"}),c(m,{label:"\u590D\u9009\u6846 B"}),c(m,{label:"\u590D\u9009\u6846 C"}),c(m,{label:"\u7981\u7528",disabled:""}),c(m,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1}),c(s,{span:"col-6"},{default:u(()=>[c(E,{modelValue:k.checkList,"onUpdate:modelValue":p[1]||(p[1]=d=>k.checkList=d),dir:"vertical",gap:"var(--md)"},{default:u(()=>[c(m,{label:"\u590D\u9009\u6846 A"}),c(m,{label:"\u590D\u9009\u6846 B"}),c(m,{label:"\u590D\u9009\u6846 C"}),c(m,{label:"\u7981\u7528",disabled:""}),c(m,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:_,ref:a}=D,F=_({setup(){return{checkList:a(["\u9009\u4E2D\u4E14\u7981\u7528","\u590D\u9009\u6846 A"])}}});return N({render:B},F)}(),"hl-demo7":function(){const{createTextVNode:o,resolveComponent:c,withCtx:u,createVNode:l,createElementVNode:C,renderList:B,Fragment:_,openBlock:a,createElementBlock:F,toDisplayString:k,createBlock:p}=D,m=o("\u5168\u9009"),E=C("hr",null,null,-1);function s(t,h){const f=c("hl-checkbox"),i=c("hl-checkbox-group");return a(),F(_,null,[l(f,{modelValue:t.checkAll,"onUpdate:modelValue":h[0]||(h[0]=y=>t.checkAll=y),indeterminate:t.isIndeterminate,onChange:t.handleCheckAllChange},{default:u(()=>[m]),_:1},8,["modelValue","indeterminate","onChange"]),E,l(i,{modelValue:t.checkedCities,"onUpdate:modelValue":h[1]||(h[1]=y=>t.checkedCities=y),dir:"vertical",gap:"var(--md)",onChange:t.handleCheckedCitiesChange},{default:u(()=>[(a(!0),F(_,null,B(t.cities,y=>(a(),p(f,{key:y,label:y},{default:u(()=>[o(k(y),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])],64)}const{defineComponent:r,ref:d}=D,b=r({setup(){const t=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],h=d(!1),f=d(["\u4E0A\u6D77","\u5317\u4EAC"]),i=d(t),y=d(!0);return{checkAll:h,checkedCities:f,cities:i,isIndeterminate:y,handleCheckAllChange:v=>{f.value=v?t:[],y.value=!1},handleCheckedCitiesChange:v=>{let G=v.length;h.value=G===i.value.length,y.value=G>0&&G<i.value.length}}}});return N({render:s},b)}(),"hl-demo8":function(){const{renderList:o,Fragment:c,openBlock:u,createElementBlock:l,toDisplayString:C,createTextVNode:B,resolveComponent:_,withCtx:a,createBlock:F}=D;function k(s,r){const d=_("hl-checkbox"),b=_("hl-checkbox-group");return u(),F(b,{modelValue:s.checkedCities,"onUpdate:modelValue":r[0]||(r[0]=t=>s.checkedCities=t),min:1,max:2},{default:a(()=>[(u(!0),l(c,null,o(s.cities,t=>(u(),F(d,{key:t,label:t},{default:a(()=>[B(C(t),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:p,ref:m}=D,E=p({setup(){const s=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],r=m(["\u4E0A\u6D77","\u5317\u4EAC"]),d=m(s);return{checkedCities:r,cities:d}}});return N({render:k},E)}(),"hl-demo9":function(){const{createElementVNode:o,resolveComponent:c,createVNode:u,withCtx:l,toDisplayString:C,renderList:B,Fragment:_,openBlock:a,createElementBlock:F,createTextVNode:k,createBlock:p}=D,m=o("p",{class:"m-b-md"},"\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),E={class:"bg-primary-light-5 text-primary p-sm m-t-md"},s=o("p",{class:"m-b-md"},"\u4F7F\u7528checkbox-group\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),r=o("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"},"\u9009\u9879\u4E00",-1),d=o("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"},"\u9009\u9879\u4E8C",-1),b={class:"bg-primary-light-5 text-primary p-sm m-t-md"},t=o("p",{class:"m-b-md"},"\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F",-1),h={class:"bg-primary-light-5 text-primary p-sm m-t-md"};function f(V,v){const G=c("hl-thumb"),U=c("hl-checkbox"),O=c("hl-group"),L=c("hl-col"),T=c("hl-checkbox-group"),P=c("hl-button"),W=c("hl-row");return a(),p(W,{gap:"var(--md)"},{default:l(()=>[u(L,{span:"col",class:"text-center"},{default:l(()=>[m,u(O,{style:{height:"48px"},gap:"var(--md)"},{default:l(()=>[u(U,{modelValue:V.checkboxGroup1,"onUpdate:modelValue":v[0]||(v[0]=A=>V.checkboxGroup1=A),label:"Edge",custom:""},{default:l(()=>[u(G,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png"})]),_:1},8,["modelValue"]),u(U,{modelValue:V.checkboxGroup1,"onUpdate:modelValue":v[1]||(v[1]=A=>V.checkboxGroup1=A),label:"Firefox",custom:""},{default:l(()=>[u(G,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png"})]),_:1},8,["modelValue"]),u(U,{modelValue:V.checkboxGroup1,"onUpdate:modelValue":v[2]||(v[2]=A=>V.checkboxGroup1=A),label:"Chrome",custom:""},{default:l(()=>[u(G,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png"})]),_:1},8,["modelValue"]),u(U,{modelValue:V.checkboxGroup1,"onUpdate:modelValue":v[3]||(v[3]=A=>V.checkboxGroup1=A),label:"Safari",custom:""},{default:l(()=>[u(G,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png"})]),_:1},8,["modelValue"])]),_:1}),o("p",E,C(V.checkboxGroup1),1)]),_:1}),u(L,{span:"col",class:"text-center"},{default:l(()=>[s,u(T,{modelValue:V.checkboxGroup2,"onUpdate:modelValue":v[4]||(v[4]=A=>V.checkboxGroup2=A),custom:"",type:"primary",gap:"6px"},{default:l(()=>[u(U,{label:"\u9009\u9879\u4E00"},{default:l(()=>[r]),_:1}),u(U,{label:"\u9009\u9879\u4E8C"},{default:l(()=>[d]),_:1})]),_:1},8,["modelValue"]),o("p",b,C(V.checkboxGroup2),1)]),_:1}),u(L,{span:"col",class:"text-center"},{default:l(()=>[t,u(T,{modelValue:V.checkboxGroup2,"onUpdate:modelValue":v[5]||(v[5]=A=>V.checkboxGroup2=A),style:{height:"48px"},custom:"",type:"primary",gap:"6px"},{default:l(()=>[(a(!0),F(_,null,B(V.cities,A=>(a(),p(U,{key:A,label:A},{default:l(()=>[u(P,null,{default:l(()=>[k(C(A),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),o("p",h,C(V.checkboxGroup2),1)]),_:1})]),_:1})}const{defineComponent:i,ref:y}=D,z=i({setup(){const V=["\u9009\u9879\u4E00","\u9009\u9879\u4E8C"],v=y(["Safari"]),G=y(["\u9009\u9879\u4E00"]),U=y(V);return{checkboxGroup1:v,checkboxGroup2:G,cities:U}}});return N({render:f},z)}()}},M=e("h1",null,"Checkbox \u590D\u9009\u6846",-1),R=e("p",null,"\u4F7F\u7528\u5B8C\u5168\u91CD\u6784\u7684 Checkbox \u7EC4\u4EF6\u6765\u521B\u5EFA\u4E00\u81F4\u7684\u8DE8\u6D4F\u89C8\u5668\u548C\u8DE8\u8BBE\u5907\u7684\u590D\u9009\u6846\u3002",-1),Z=e("div",null,[e("p",null,[n("\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u5B9A\u4E49"),e("code",null,"v-model"),n("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u5355\u4E00\u7684 Checkbox \u7EC4\u4EF6\u4E2D\uFF0C\u9ED8\u8BA4\u7ED1\u5B9A\u53D8\u91CF\u7684\u503C\u4F1A\u662F"),e("code",null,"boolean"),n("\uFF0C\u9009\u4E2D\u4E3A"),e("code",null,"true"),n("\u3002")])],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <!-- \`checked\` \u4E3A true \u6216 false -->
  <hl-checkbox v-model="checked">\u5907\u9009\u9879</hl-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checked = ref(true)
    return {
      checked,
    }
  },
})
<\/script>
`)],-1),ue=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),n(" \u5C3A\u5BF8\u4FEE\u9970")],-1),te=e("p",null,[n("Checkbox \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),n(),e("code",null,"md"),n(),e("code",null,"lg"),n(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),n(" \u5C3A\u5BF8")],-1),oe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" size="sm">Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary">Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success" size="lg">Success</hl-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    const checked3 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
    }
  },
})
<\/script>
`)],-1),ce=I('<h2 id="zhuang-tai-yan-se"><a class="header-anchor" href="#zhuang-tai-yan-se"></a> \u72B6\u6001\u989C\u8272</h2><p>Checkbox \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A<code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code>\u3001<code>info</code>\u3002</p>',2),le=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1">Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary">Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success">Success</hl-checkbox>
  <hl-checkbox v-model="checked4" type="warning">Warning</hl-checkbox>
  <hl-checkbox v-model="checked5" type="danger">Danger</hl-checkbox>
  <hl-checkbox v-model="checked6" type="info">Info</hl-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
    }
  },
})
<\/script>
`)],-1),de=e("h2",{id:"fill-yan-se"},[e("a",{class:"header-anchor",href:"#fill-yan-se"}),n(" Fill \u989C\u8272")],-1),ne=e("p",null,"\u4F7F\u7528 fill \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F Checkbox \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002",-1),re=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" fill>Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary" fill>Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success" fill>Success</hl-checkbox>
  <hl-checkbox v-model="checked4" type="warning" fill>Warning</hl-checkbox>
  <hl-checkbox v-model="checked5" type="danger" fill>Danger</hl-checkbox>
  <hl-checkbox v-model="checked6" type="info" fill>Info</hl-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
    }
  },
})
<\/script>
`)],-1),he=e("h2",{id:"yuan-xing-fu-xuan-kuang"},[e("a",{class:"header-anchor",href:"#yuan-xing-fu-xuan-kuang"}),n(" \u5706\u5F62\u590D\u9009\u6846")],-1),se=e("p",null,[n("\u4E3A\u590D\u9009\u6846\u52A0\u4E0A "),e("code",null,"round"),n(" \u5C5E\u6027\uFF0C\u5373\u53EF\u5C06\u5B83\u4EEC\u53D8\u6210\u5706\u5F62\uFF0C\u5E76\u4E14\u62E5\u6709 "),e("code",null,"radio"),n(" \u76F8\u4F3C\u7684\u5916\u89C2\u3002")],-1),ae=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" round>\u5907\u9009\u98791</hl-checkbox>
  <hl-checkbox v-model="checked2" round type="primary">\u5907\u9009\u9879</hl-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    return {
      checked1,
      checked2,
    }
  },
})
<\/script>
`)],-1),ie=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),n(" \u7981\u7528\u72B6\u6001")],-1),me=e("p",null,[n("\u4E3A\u590D\u9009\u6846\u8BBE\u7F6E"),e("code",null,"disabled"),n("\u5C5E\u6027\u540E\u5448\u7070\u8272\u7981\u7528\uFF0C\u5373\u4FBF\u4F60\u4E3A\u5B83\u8BBE\u7F6E\u4E86\u72B6\u6001\u989C\u8272\u4E5F\u4F9D\u7136\u4E0D\u8D77\u4F5C\u7528\u3002")],-1),pe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" disabled>\u5907\u9009\u98791</hl-checkbox>
  <hl-checkbox v-model="checked2" disabled>\u5907\u9009\u9879</hl-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    return {
      checked1,
      checked2,
    }
  },
})
<\/script>
`)],-1),ke=e("h2",{id:"fu-xuan-kuang-zu"},[e("a",{class:"header-anchor",href:"#fu-xuan-kuang-zu"}),n(" \u590D\u9009\u6846\u7EC4")],-1),be=e("p",null,[n("\u5355\u9009\u6846\u7EC4\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),n(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),n("\uFF0C\u9ED8\u8BA4\u4E3A 12px")],-1),fe=e("p",null,[n("CheckboxGroup \u5BB9\u5668\u80FD\u5C06\u591A\u4E2A\u590D\u9009\u6846\u7BA1\u7406\u4E3A\u4E00\u7EC4\uFF0C\u53EA\u9700\u4E3A\u5B83\u7684"),e("code",null,"v-model"),n("\u7ED1\u5B9A"),e("code",null,"Array"),n("\u7C7B\u578B\u7684\u53D8\u91CF\u5373\u53EF\u3002")],-1),Ee=e("div",null,[e("p",null,[n("Checkbox \u7EC4\u4EF6\u7684"),e("code",null,"label"),n("\u5C5E\u6027\u662F\u5BF9\u5E94\u7684\u503C\uFF0C\u5F53\u590D\u9009\u6846\u65E0\u4ECB\u7ECD\u5185\u5BB9\u65F6\u4E5F\u53EF\u5145\u5F53\u5B83\u7684\u4ECB\u7ECD\u3002"),e("code",null,"label"),n("\u4E0E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u503C\u76F8\u5BF9\u5E94\uFF0C\u5982\u679C\u5B58\u5728\u6307\u5B9A\u7684\u503C\u5219\u4E3A\u9009\u4E2D\u72B6\u6001\uFF0C\u5426\u5219\u4E3A\u4E0D\u9009\u4E2D\u3002\u590D\u9009\u6846\u7EC4\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),n(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),n("\uFF0C\u9ED8\u8BA4\u4E3A 12px")])],-1),Ce=e("pre",null,[e("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checkList = ref(['\u9009\u4E2D\u4E14\u7981\u7528', '\u590D\u9009\u6846 A'])
    return {
      checkList,
    }
  },
})
<\/script>
`)],-1),_e=e("h2",{id:"bu-que-ding-zhuang-tai"},[e("a",{class:"header-anchor",href:"#bu-que-ding-zhuang-tai"}),n(" \u4E0D\u786E\u5B9A\u72B6\u6001")],-1),Fe=e("p",null,[e("code",null,"indeterminate"),n(" \u5C5E\u6027\u7528\u4EE5\u8868\u793A\u590D\u9009\u6846\u7684\u4E0D\u786E\u5B9A\u72B6\u6001\uFF0C\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u5168\u9009\u7684\u6548\u679C\u3002")],-1),ge=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">\u5168\u9009</hl-checkbox>
  <hr>
  <hl-checkbox-group v-model="checkedCities" dir="vertical" gap="var(--md)" @change="handleCheckedCitiesChange">
    <hl-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</hl-checkbox>
  </hl-checkbox-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      checkAll,
      checkedCities,
      cities,
      isIndeterminate,
      handleCheckAllChange,
      handleCheckedCitiesChange,
    }
  },
})
<\/script>
`)],-1),xe=e("h2",{id:"ke-xuan-xiang-mu-shu-liang-de-xian-zhi"},[e("a",{class:"header-anchor",href:"#ke-xuan-xiang-mu-shu-liang-de-xian-zhi"}),n(" \u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236")],-1),Be=e("p",null,[n("\u4F7F\u7528 "),e("code",null,"min"),n(" \u548C "),e("code",null,"max"),n(" \u5C5E\u6027\u80FD\u591F\u9650\u5236\u53EF\u4EE5\u88AB\u52FE\u9009\u7684\u9879\u76EE\u7684\u6570\u91CF\u3002")],-1),De=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <hl-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</hl-checkbox>
  </hl-checkbox-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const cityOptions = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733']

    const checkedCities = ref(['\u4E0A\u6D77', '\u5317\u4EAC'])
    const cities = ref(cityOptions)

    return {
      checkedCities,
      cities,
    }
  },
})
<\/script>
`)],-1),ye=e("h2",{id:"zi-ding-yi-yang-shi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),n(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),Ve=e("p",null,[n("\u53EA\u8981\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"custom"),n("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"Boolean"),n("\uFF0C"),e("code",null,"true"),n("\u4E3A\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),ve=e("div",null,[e("p",null,[n("\u4F60\u53EF\u4EE5\u6839\u636E Checkbox \u7EC4\u4EF6\u63D0\u4F9B\u7684 "),e("code",null,"is-checked"),n(),e("code",null,"is-focus"),n(),e("code",null,"is-disabled"),n("\u7684\u6837\u5F0F\u540D\u79F0\u6765\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002")])],-1),Ae=e("pre",null,[e("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const cityOptions = ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C']

    const checkboxGroup1 = ref(['Safari'])
    const checkboxGroup2 = ref(['\u9009\u9879\u4E00'])
    const cities = ref(cityOptions)

    return {
      checkboxGroup1,
      checkboxGroup2,
      cities,
    }
  },
})
<\/script>
`)],-1),we=I('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728<code>checkbox-group</code>\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3A<code>array</code>\u65F6\u6709\u6548\uFF09</td><td>string / number / boolean / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>true-label</td><td>\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>false-label</td><td>\u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>checked</td><td>\u5F53\u524D\u662F\u5426\u52FE\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indeterminate</td><td>\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u4FEE\u9970</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A Label \u5C5E\u6027\u7684\u6587\u672C\u5185\u5BB9</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table><h2 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes"></a> Checkbox Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>-</td><td>sm</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events"></a> Checkbox Group Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table>',8);function Ne(o,c,u,l,C,B){const _=w("hl-demo0"),a=w("demo-block"),F=w("hl-demo1"),k=w("hl-demo2"),p=w("hl-demo3"),m=w("hl-demo4"),E=w("hl-demo5"),s=w("hl-demo6"),r=w("hl-demo7"),d=w("hl-demo8"),b=w("hl-demo9"),t=w("right-nav");return X(),Y(H,null,[e("section",null,[M,R,x(a,{fs:""},{source:g(()=>[x(_)]),highlight:g(()=>[ee]),default:g(()=>[Z]),_:1}),ue,te,x(a,{fs:""},{source:g(()=>[x(F)]),highlight:g(()=>[oe]),_:1}),ce,x(a,{fs:""},{source:g(()=>[x(k)]),highlight:g(()=>[le]),_:1}),de,ne,x(a,{fs:""},{source:g(()=>[x(p)]),highlight:g(()=>[re]),_:1}),he,se,x(a,{fs:""},{source:g(()=>[x(m)]),highlight:g(()=>[ae]),_:1}),ie,me,x(a,{fs:""},{source:g(()=>[x(E)]),highlight:g(()=>[pe]),_:1}),ke,be,fe,x(a,{fs:""},{source:g(()=>[x(s)]),highlight:g(()=>[Ce]),default:g(()=>[Ee]),_:1}),_e,Fe,x(a,{fs:""},{source:g(()=>[x(r)]),highlight:g(()=>[ge]),_:1}),xe,Be,x(a,{fs:""},{source:g(()=>[x(d)]),highlight:g(()=>[De]),_:1}),ye,Ve,x(a,{fs:""},{source:g(()=>[x(b)]),highlight:g(()=>[Ae]),default:g(()=>[ve]),_:1}),we]),x(t)],64)}var Se=J(K,[["render",Ne]]);export{Se as default};
