var O=Object.defineProperty;var T=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var G=(o,l,t)=>l in o?O(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t,y=(o,l)=>{for(var t in l||(l={}))P.call(l,t)&&G(o,t,l[t]);if(T)for(var t of T(l))W.call(l,t)&&G(o,t,l[t]);return o};import{H as v,o as $,C as q,D as e,v as B,M as g,av as D,_ as d,au as L}from"./vue.450bc1d0.js";import{_ as H}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const M={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,openBlock:r,createBlock:x}=D,E=o("\u5907\u9009\u9879");function k(C,m){const F=l("hl-checkbox");return r(),x(F,{modelValue:C.checked,"onUpdate:modelValue":m[0]||(m[0]=i=>C.checked=i)},{default:t(()=>[E]),_:1},8,["modelValue"])}const{defineComponent:h,ref:_}=D,b=h({setup(){return{checked:_(!0)}}});return y({render:k},b)}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,createVNode:r,Fragment:x,openBlock:E,createElementBlock:k}=D,h=o("Default"),_=o("Primary"),b=o("Success"),C=o("Warning"),m=o("Danger"),F=o("Info");function i(u,s){const p=l("hl-checkbox");return E(),k(x,null,[r(p,{modelValue:u.checked1,"onUpdate:modelValue":s[0]||(s[0]=a=>u.checked1=a)},{default:t(()=>[h]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked2,"onUpdate:modelValue":s[1]||(s[1]=a=>u.checked2=a),type:"primary"},{default:t(()=>[_]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked3,"onUpdate:modelValue":s[2]||(s[2]=a=>u.checked3=a),type:"success"},{default:t(()=>[b]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked4,"onUpdate:modelValue":s[3]||(s[3]=a=>u.checked4=a),type:"warning"},{default:t(()=>[C]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked5,"onUpdate:modelValue":s[4]||(s[4]=a=>u.checked5=a),type:"danger"},{default:t(()=>[m]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked6,"onUpdate:modelValue":s[5]||(s[5]=a=>u.checked6=a),type:"info"},{default:t(()=>[F]),_:1},8,["modelValue"])],64)}const{defineComponent:n,ref:c}=D,f=n({setup(){const u=c(!1),s=c(!1),p=c(!1),a=c(!1),A=c(!1),w=c(!1);return{checked1:u,checked2:s,checked3:p,checked4:a,checked5:A,checked6:w}}});return y({render:i},f)}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,createVNode:r,Fragment:x,openBlock:E,createElementBlock:k}=D,h=o("Default"),_=o("Primary"),b=o("Success"),C=o("Warning"),m=o("Danger"),F=o("Info");function i(u,s){const p=l("hl-checkbox");return E(),k(x,null,[r(p,{modelValue:u.checked1,"onUpdate:modelValue":s[0]||(s[0]=a=>u.checked1=a),fill:""},{default:t(()=>[h]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked2,"onUpdate:modelValue":s[1]||(s[1]=a=>u.checked2=a),type:"primary",fill:""},{default:t(()=>[_]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked3,"onUpdate:modelValue":s[2]||(s[2]=a=>u.checked3=a),type:"success",fill:""},{default:t(()=>[b]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked4,"onUpdate:modelValue":s[3]||(s[3]=a=>u.checked4=a),type:"warning",fill:""},{default:t(()=>[C]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked5,"onUpdate:modelValue":s[4]||(s[4]=a=>u.checked5=a),type:"danger",fill:""},{default:t(()=>[m]),_:1},8,["modelValue"]),r(p,{modelValue:u.checked6,"onUpdate:modelValue":s[5]||(s[5]=a=>u.checked6=a),type:"info",fill:""},{default:t(()=>[F]),_:1},8,["modelValue"])],64)}const{defineComponent:n,ref:c}=D,f=n({setup(){const u=c(!1),s=c(!1),p=c(!1),a=c(!1),A=c(!1),w=c(!1);return{checked1:u,checked2:s,checked3:p,checked4:a,checked5:A,checked6:w}}});return y({render:i},f)}(),"hl-demo3":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,createVNode:r,Fragment:x,openBlock:E,createElementBlock:k}=D,h=o("Default"),_=o("Primary"),b=o("Success");function C(n,c){const f=l("hl-checkbox");return E(),k(x,null,[r(f,{modelValue:n.checked1,"onUpdate:modelValue":c[0]||(c[0]=u=>n.checked1=u),size:"sm"},{default:t(()=>[h]),_:1},8,["modelValue"]),r(f,{modelValue:n.checked2,"onUpdate:modelValue":c[1]||(c[1]=u=>n.checked2=u),type:"primary"},{default:t(()=>[_]),_:1},8,["modelValue"]),r(f,{modelValue:n.checked3,"onUpdate:modelValue":c[2]||(c[2]=u=>n.checked3=u),type:"success",size:"lg"},{default:t(()=>[b]),_:1},8,["modelValue"])],64)}const{defineComponent:m,ref:F}=D,i=m({setup(){const n=F(!1),c=F(!1),f=F(!1);return{checked1:n,checked2:c,checked3:f}}});return y({render:C},i)}(),"hl-demo4":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,createVNode:r,Fragment:x,openBlock:E,createElementBlock:k}=D,h=o("\u5907\u9009\u98791"),_=o("\u5907\u9009\u9879");function b(i,n){const c=l("hl-checkbox");return E(),k(x,null,[r(c,{modelValue:i.checked1,"onUpdate:modelValue":n[0]||(n[0]=f=>i.checked1=f),round:""},{default:t(()=>[h]),_:1},8,["modelValue"]),r(c,{modelValue:i.checked2,"onUpdate:modelValue":n[1]||(n[1]=f=>i.checked2=f),round:"",type:"primary"},{default:t(()=>[_]),_:1},8,["modelValue"])],64)}const{defineComponent:C,ref:m}=D,F=C({setup(){const i=m(!1),n=m(!1);return{checked1:i,checked2:n}}});return y({render:b},F)}(),"hl-demo5":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,createVNode:r,Fragment:x,openBlock:E,createElementBlock:k}=D,h=o("\u5907\u9009\u98791"),_=o("\u5907\u9009\u9879");function b(i,n){const c=l("hl-checkbox");return E(),k(x,null,[r(c,{modelValue:i.checked1,"onUpdate:modelValue":n[0]||(n[0]=f=>i.checked1=f),disabled:""},{default:t(()=>[h]),_:1},8,["modelValue"]),r(c,{modelValue:i.checked2,"onUpdate:modelValue":n[1]||(n[1]=f=>i.checked2=f),disabled:""},{default:t(()=>[_]),_:1},8,["modelValue"])],64)}const{defineComponent:C,ref:m}=D,F=C({setup(){const i=m(!1),n=m(!1);return{checked1:i,checked2:n}}});return y({render:b},F)}(),"hl-demo6":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,createVNode:r,Fragment:x,openBlock:E,createElementBlock:k}=D,h=o("\u5907\u9009\u9879"),_=o("\u5907\u9009\u9879"),b=o("\u672A\u52A0\u7C97");function C(n,c){const f=l("hl-checkbox");return E(),k(x,null,[r(f,{modelValue:n.checked1,"onUpdate:modelValue":c[0]||(c[0]=u=>n.checked1=u),label:1,bold:""},{default:t(()=>[h]),_:1},8,["modelValue"]),r(f,{modelValue:n.checked1,"onUpdate:modelValue":c[1]||(c[1]=u=>n.checked1=u),label:2,bold:""},{default:t(()=>[_]),_:1},8,["modelValue"]),r(f,{modelValue:n.checked1,"onUpdate:modelValue":c[2]||(c[2]=u=>n.checked1=u),label:0},{default:t(()=>[b]),_:1},8,["modelValue"])],64)}const{defineComponent:m,ref:F}=D,i=m({setup(){return{checked1:F(!1)}}});return y({render:C},i)}(),"hl-demo7":function(){const{resolveComponent:o,createVNode:l,withCtx:t,openBlock:r,createBlock:x}=D;function E(b,C){const m=o("hl-checkbox"),F=o("hl-checkbox-group"),i=o("hl-col"),n=o("hl-row");return r(),x(n,null,{default:t(()=>[l(i,{span:"col-18"},{default:t(()=>[l(F,{modelValue:b.checkList,"onUpdate:modelValue":C[0]||(C[0]=c=>b.checkList=c),dir:"horizontal",gap:"var(--md)",wrap:""},{default:t(()=>[l(m,{label:"\u590D\u9009\u6846 A"}),l(m,{label:"\u590D\u9009\u6846 B"}),l(m,{label:"\u590D\u9009\u6846 C"}),l(m,{label:"\u7981\u7528",disabled:""}),l(m,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1}),l(i,{span:"col-6"},{default:t(()=>[l(F,{modelValue:b.checkList,"onUpdate:modelValue":C[1]||(C[1]=c=>b.checkList=c),dir:"vertical",gap:"var(--md)"},{default:t(()=>[l(m,{label:"\u590D\u9009\u6846 A"}),l(m,{label:"\u590D\u9009\u6846 B"}),l(m,{label:"\u590D\u9009\u6846 C"}),l(m,{label:"\u7981\u7528",disabled:""}),l(m,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:k,ref:h}=D,_=k({setup(){return{checkList:h(["\u9009\u4E2D\u4E14\u7981\u7528","\u590D\u9009\u6846 A"])}}});return y({render:E},_)}(),"hl-demo8":function(){const{createTextVNode:o,resolveComponent:l,withCtx:t,createVNode:r,createElementVNode:x,renderList:E,Fragment:k,openBlock:h,createElementBlock:_,toDisplayString:b,createBlock:C}=D,m=o("\u5168\u9009"),F=x("hr",null,null,-1);function i(u,s){const p=l("hl-checkbox"),a=l("hl-checkbox-group");return h(),_(k,null,[r(p,{modelValue:u.checkAll,"onUpdate:modelValue":s[0]||(s[0]=A=>u.checkAll=A),indeterminate:u.isIndeterminate,onChange:u.handleCheckAllChange},{default:t(()=>[m]),_:1},8,["modelValue","indeterminate","onChange"]),F,r(a,{modelValue:u.checkedCities,"onUpdate:modelValue":s[1]||(s[1]=A=>u.checkedCities=A),dir:"vertical",gap:"var(--md)",onChange:u.handleCheckedCitiesChange},{default:t(()=>[(h(!0),_(k,null,E(u.cities,A=>(h(),C(p,{key:A,label:A},{default:t(()=>[o(b(A),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])],64)}const{defineComponent:n,ref:c}=D,f=n({setup(){const u=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],s=c(!1),p=c(["\u4E0A\u6D77","\u5317\u4EAC"]),a=c(u),A=c(!0);return{checkAll:s,checkedCities:p,cities:a,isIndeterminate:A,handleCheckAllChange:N=>{p.value=N?u:[],A.value=!1},handleCheckedCitiesChange:N=>{let U=N.length;s.value=U===a.value.length,A.value=U>0&&U<a.value.length}}}});return y({render:i},f)}(),"hl-demo9":function(){const{renderList:o,Fragment:l,openBlock:t,createElementBlock:r,toDisplayString:x,createTextVNode:E,resolveComponent:k,withCtx:h,createBlock:_}=D;function b(i,n){const c=k("hl-checkbox"),f=k("hl-checkbox-group");return t(),_(f,{modelValue:i.checkedCities,"onUpdate:modelValue":n[0]||(n[0]=u=>i.checkedCities=u),min:1,max:2},{default:h(()=>[(t(!0),r(l,null,o(i.cities,u=>(t(),_(c,{key:u,label:u},{default:h(()=>[E(x(u),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:C,ref:m}=D,F=C({setup(){const i=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],n=m(["\u4E0A\u6D77","\u5317\u4EAC"]),c=m(i);return{checkedCities:n,cities:c}}});return y({render:b},F)}(),"hl-demo10":function(){const{createElementVNode:o,renderList:l,Fragment:t,openBlock:r,createElementBlock:x,resolveComponent:E,createVNode:k,withCtx:h,createBlock:_,toDisplayString:b,createTextVNode:C}=D,m=o("p",null,"\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),F=o("p",null,"\u4F7F\u7528checkbox-group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),i={class:"demo-check-text"},n=o("p",null,"\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F",-1);function c(p,a){const A=E("hl-thumb"),w=E("hl-checkbox"),z=E("hl-group"),N=E("hl-col"),U=E("hl-checkbox-group"),S=E("hl-button"),I=E("hl-row");return r(),_(I,null,{default:h(()=>[k(N,{span:"col"},{default:h(()=>[m,k(z,{gap:"var(--md)"},{default:h(()=>[(r(!0),x(t,null,l(p.cities,V=>(r(),_(w,{key:V,modelValue:p.checkboxGroup1,"onUpdate:modelValue":a[0]||(a[0]=j=>p.checkboxGroup1=j),label:V,custom:""},{default:h(()=>[k(A,{radius:"",fit:"cover",class:"demo-check-img",size:"xxl",src:"../assets/images/show_thumb.png"})]),_:2},1032,["modelValue","label"]))),128))]),_:1})]),_:1}),k(N,{span:"col"},{default:h(()=>[F,k(U,{modelValue:p.checkboxGroup2,"onUpdate:modelValue":a[1]||(a[1]=V=>p.checkboxGroup2=V),custom:"",type:"primary",gap:"6px"},{default:h(()=>[(r(!0),x(t,null,l(p.cities,V=>(r(),_(w,{key:V,label:V},{default:h(()=>[o("span",i,b(V),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),k(N,{span:"col"},{default:h(()=>[n,k(U,{modelValue:p.checkboxGroup2,"onUpdate:modelValue":a[2]||(a[2]=V=>p.checkboxGroup2=V),custom:"",type:"primary",gap:"6px"},{default:h(()=>[(r(!0),x(t,null,l(p.cities,V=>(r(),_(w,{key:V,label:V},{default:h(()=>[k(S,null,{default:h(()=>[C(b(V),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:f,ref:u}=D,s=f({setup(){const p=["\u4E0A\u6D77","\u5317\u4EAC"],a=u(["\u4E0A\u6D77"]),A=u(["\u4E0A\u6D77"]),w=u(p);return{checkboxGroup1:a,checkboxGroup2:A,cities:w}}});return y({render:c},s)}()}},J={class:"doc-main-content"},K={class:"doc-content"},Q=e("h1",null,"Checkbox \u590D\u9009\u6846",-1),R=e("p",null,"\u4F7F\u7528\u5B8C\u5168\u91CD\u6784\u7684 Checkbox \u7EC4\u4EF6\u6765\u521B\u5EFA\u4E00\u81F4\u7684\u8DE8\u6D4F\u89C8\u5668\u548C\u8DE8\u8BBE\u5907\u7684\u590D\u9009\u6846\u3002",-1),X=e("div",null,[e("p",null,[d("\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u5B9A\u4E49"),e("code",null,"v-model"),d("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u5355\u4E00\u7684 Checkbox \u7EC4\u4EF6\u4E2D\uFF0C\u9ED8\u8BA4\u7ED1\u5B9A\u53D8\u91CF\u7684\u503C\u4F1A\u662F"),e("code",null,"boolean"),d("\uFF0C\u9009\u4E2D\u4E3A"),e("code",null,"true"),d("\u3002")])],-1),Y=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Z=L('<h2 id="zhuang-tai-yan-se"><a class="header-anchor" href="#zhuang-tai-yan-se"></a> \u72B6\u6001\u989C\u8272</h2><p>Checkbox \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A<code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code>\u3001<code>info</code>\u3002</p>',2),ee=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ue=e("h2",{id:"fill-yan-se"},[e("a",{class:"header-anchor",href:"#fill-yan-se"}),d(" Fill \u989C\u8272")],-1),te=e("p",null,"\u4F7F\u7528 fill \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F Checkbox \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002",-1),oe=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ce=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),d(" \u5C3A\u5BF8\u4FEE\u9970")],-1),le=e("p",null,[d("Checkbox \u63D0\u4F9B\u4E86 "),e("code",null,"sm"),d(),e("code",null,"md"),d(),e("code",null,"lg"),d(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),d(" \u5C3A\u5BF8")],-1),de=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ne=e("h2",{id:"yuan-xing-fu-xuan-kuang"},[e("a",{class:"header-anchor",href:"#yuan-xing-fu-xuan-kuang"}),d(" \u5706\u5F62\u590D\u9009\u6846")],-1),he=e("p",null,[d("\u4E3A\u590D\u9009\u6846\u52A0\u4E0A "),e("code",null,"round"),d(" \u5C5E\u6027\uFF0C\u5373\u53EF\u5C06\u5B83\u4EEC\u53D8\u6210\u5706\u5F62\uFF0C\u5E76\u4E14\u62E5\u6709 "),e("code",null,"radio"),d(" \u76F8\u4F3C\u7684\u5916\u89C2\u3002")],-1),re=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ae=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),d(" \u7981\u7528\u72B6\u6001")],-1),se=e("p",null,[d("\u4E3A\u590D\u9009\u6846\u8BBE\u7F6E"),e("code",null,"disabled"),d("\u5C5E\u6027\u540E\u5448\u7070\u8272\u7981\u7528\uFF0C\u5373\u4FBF\u4F60\u4E3A\u5B83\u8BBE\u7F6E\u4E86\u72B6\u6001\u989C\u8272\u4E5F\u4F9D\u7136\u4E0D\u8D77\u4F5C\u7528\u3002")],-1),ie=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),me=e("h2",{id:"jia-cu-miao-bian"},[e("a",{class:"header-anchor",href:"#jia-cu-miao-bian"}),d(" \u52A0\u7C97\u63CF\u8FB9")],-1),pe=e("p",null,[d("\u7ED9 Checkbox \u589E\u52A0 "),e("code",null,"bold"),d(" \u5C5E\u6027\u5373\u53EF\u4F7F\u5B83\u7684\u8FB9\u7F18\u770B\u8D77\u6765\u66F4\u7A81\u51FA\u4E00\u4E9B\u3002")],-1),ke=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-checkbox v-model="checked1" :label="1" bold>\u5907\u9009\u9879</hl-checkbox>
  <hl-checkbox v-model="checked1" :label="2" bold>\u5907\u9009\u9879</hl-checkbox>
  <hl-checkbox v-model="checked1" :label="0">\u672A\u52A0\u7C97</hl-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    return {
      checked1,
    }
  },
})
<\/script>
`)],-1),fe=e("h2",{id:"fu-xuan-kuang-zu"},[e("a",{class:"header-anchor",href:"#fu-xuan-kuang-zu"}),d(" \u590D\u9009\u6846\u7EC4")],-1),Ee=e("p",null,[d("\u5355\u9009\u6846\u7EC4\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),d(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0px"'),d("\uFF0C\u9ED8\u8BA4\u4E3A 12px")],-1),_e=e("p",null,[d("CheckboxGroup \u5BB9\u5668\u80FD\u5C06\u591A\u4E2A\u590D\u9009\u6846\u7BA1\u7406\u4E3A\u4E00\u7EC4\uFF0C\u53EA\u9700\u4E3A\u5B83\u7684"),e("code",null,"v-model"),d("\u7ED1\u5B9A"),e("code",null,"Array"),d("\u7C7B\u578B\u7684\u53D8\u91CF\u5373\u53EF\u3002")],-1),be=e("div",null,[e("p",null,[d("Checkbox \u7EC4\u4EF6\u7684"),e("code",null,"label"),d("\u5C5E\u6027\u662F\u5BF9\u5E94\u7684\u503C\uFF0C\u5F53\u590D\u9009\u6846\u65E0\u4ECB\u7ECD\u5185\u5BB9\u65F6\u4E5F\u53EF\u5145\u5F53\u5B83\u7684\u4ECB\u7ECD\u3002"),e("code",null,"label"),d("\u4E0E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u503C\u76F8\u5BF9\u5E94\uFF0C\u5982\u679C\u5B58\u5728\u6307\u5B9A\u7684\u503C\u5219\u4E3A\u9009\u4E2D\u72B6\u6001\uFF0C\u5426\u5219\u4E3A\u4E0D\u9009\u4E2D\u3002\u590D\u9009\u6846\u7EC4\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),d(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0px"'),d("\uFF0C\u9ED8\u8BA4\u4E3A 12px")])],-1),Ce=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Fe=e("h2",{id:"bu-que-ding-zhuang-tai"},[e("a",{class:"header-anchor",href:"#bu-que-ding-zhuang-tai"}),d(" \u4E0D\u786E\u5B9A\u72B6\u6001")],-1),ge=e("p",null,[e("code",null,"indeterminate"),d(" \u5C5E\u6027\u7528\u4EE5\u8868\u793A\u590D\u9009\u6846\u7684\u4E0D\u786E\u5B9A\u72B6\u6001\uFF0C\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u5168\u9009\u7684\u6548\u679C\u3002")],-1),xe=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Be=e("h2",{id:"ke-xuan-xiang-mu-shu-liang-de-xian-zhi"},[e("a",{class:"header-anchor",href:"#ke-xuan-xiang-mu-shu-liang-de-xian-zhi"}),d(" \u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236")],-1),De=e("p",null,[d("\u4F7F\u7528 "),e("code",null,"min"),d(" \u548C "),e("code",null,"max"),d(" \u5C5E\u6027\u80FD\u591F\u9650\u5236\u53EF\u4EE5\u88AB\u52FE\u9009\u7684\u9879\u76EE\u7684\u6570\u91CF\u3002")],-1),Ae=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Ve=e("h2",{id:"zi-ding-yi-yang-shi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),d(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),ve=e("p",null,[d("\u53EA\u8981\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"custom"),d("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"Boolean"),d("\uFF0C"),e("code",null,"true"),d("\u4E3A\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),ye=e("div",null,[e("p",null,[d("\u4F60\u53EF\u4EE5\u6839\u636E Checkbox \u7EC4\u4EF6\u63D0\u4F9B\u7684 "),e("code",null,"is-checked"),d(),e("code",null,"is-focus"),d(),e("code",null,"is-disabled"),d("\u7684\u6837\u5F0F\u540D\u79F0\u6765\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002")])],-1),we=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <p>\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-group gap="var(--md)">
        <hl-checkbox v-for="city in cities" :key="city" v-model="checkboxGroup1" :label="city" custom>
          <hl-thumb radius fit="cover" class="demo-check-img" size="xxl" src="../assets/images/show_thumb.png" />
        </hl-checkbox>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p>\u4F7F\u7528checkbox-group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-checkbox-group v-model="checkboxGroup2" custom type="primary" gap="6px">
        <hl-checkbox v-for="city in cities" :key="city" :label="city">
          <span class="demo-check-text">{{ city }}</span>
        </hl-checkbox>
      </hl-checkbox-group>
    </hl-col>

    <hl-col span="col">
      <p>\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-checkbox-group v-model="checkboxGroup2" custom type="primary" gap="6px">
        <hl-checkbox v-for="city in cities" :key="city" :label="city">
          <hl-button>{{ city }}</hl-button>
        </hl-checkbox>
      </hl-checkbox-group>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const cityOptions = ['\u4E0A\u6D77', '\u5317\u4EAC']

    const checkboxGroup1 = ref(['\u4E0A\u6D77'])
    const checkboxGroup2 = ref(['\u4E0A\u6D77'])
    const cities = ref(cityOptions)

    return {
      checkboxGroup1,
      checkboxGroup2,
      cities,
    }
  },
})
<\/script>
`)],-1),Ne=L('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728<code>checkbox-group</code>\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3A<code>array</code>\u65F6\u6709\u6548\uFF09</td><td>string / number / boolean / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>true-label</td><td>\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>false-label</td><td>\u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>checked</td><td>\u5F53\u524D\u662F\u5426\u52FE\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indeterminate</td><td>\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>bold</td><td>\u52A0\u7C97\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u4FEE\u9970</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793ALabel\u5C5E\u6027\u7684\u6587\u672C\u5185\u5BB9</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table><h2 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes"></a> Checkbox Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>bold</td><td>\u52A0\u7C97\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>-</td><td>sm</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events"></a> Checkbox Group Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table>',8);function Ue(o,l,t,r,x,E){const k=v("hl-demo0"),h=v("demo-block"),_=v("hl-demo1"),b=v("hl-demo2"),C=v("hl-demo3"),m=v("hl-demo4"),F=v("hl-demo5"),i=v("hl-demo6"),n=v("hl-demo7"),c=v("hl-demo8"),f=v("hl-demo9"),u=v("hl-demo10"),s=v("right-nav");return $(),q("section",J,[e("div",K,[Q,R,B(h,{fs:""},{source:g(()=>[B(k)]),highlight:g(()=>[Y]),default:g(()=>[X]),_:1}),Z,B(h,{fs:""},{source:g(()=>[B(_)]),highlight:g(()=>[ee]),_:1}),ue,te,B(h,{fs:""},{source:g(()=>[B(b)]),highlight:g(()=>[oe]),_:1}),ce,le,B(h,{fs:""},{source:g(()=>[B(C)]),highlight:g(()=>[de]),_:1}),ne,he,B(h,{fs:""},{source:g(()=>[B(m)]),highlight:g(()=>[re]),_:1}),ae,se,B(h,{fs:""},{source:g(()=>[B(F)]),highlight:g(()=>[ie]),_:1}),me,pe,B(h,{fs:""},{source:g(()=>[B(i)]),highlight:g(()=>[ke]),_:1}),fe,Ee,_e,B(h,{fs:""},{source:g(()=>[B(n)]),highlight:g(()=>[Ce]),default:g(()=>[be]),_:1}),Fe,ge,B(h,{fs:""},{source:g(()=>[B(c)]),highlight:g(()=>[xe]),_:1}),Be,De,B(h,{fs:""},{source:g(()=>[B(f)]),highlight:g(()=>[Ae]),_:1}),Ve,ve,B(h,{fs:""},{source:g(()=>[B(u)]),highlight:g(()=>[we]),default:g(()=>[ye]),_:1}),Ne]),B(s)])}var je=H(M,[["render",Ue]]);export{je as default};
