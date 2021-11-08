var U=Object.defineProperty,N=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var A=(a,l,n)=>l in a?U(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n,g=(a,l)=>{for(var n in l||(l={}))j.call(l,n)&&A(a,n,l[n]);if(D)for(var n of D(l))S.call(l,n)&&A(a,n,l[n]);return a},y=(a,l)=>N(a,z(l));import{M as _,o as H,C as M,D as u,v,Q as i,Y as P,av as F,_ as c,au as b}from"./vue.3baa9061.js";import{_ as R,H as T}from"./index.4b0b5d1f.js";import"./hongluan.a52c900d.js";import"./highlight.e2508551.js";import"./hongluan-icons.91256e5f.js";const $={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:s,createElementBlock:f}=F;function E(o,e){const d=a("hl-switch");return s(),f(n,null,[l(d,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),type:"primary",width:"var(--xxl)"},null,8,["modelValue"])],64)}const{defineComponent:h,ref:r}=F,p=h({setup(){return{value:r(!0)}}});return g({render:E},p)}(),"hl-demo1":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:s,createElementBlock:f}=F;function E(o,e){const d=a("hl-switch");return s(),f(n,null,[l(d,{modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value1=t),class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value1=t),class:"m-r-md",type:"primary"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value1=t),class:"m-r-md",type:"success"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value1=t),class:"m-r-md",type:"warning"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[4]||(e[4]=t=>o.value1=t),class:"m-r-md",type:"danger"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value1=t),class:"m-r-md",type:"info"},null,8,["modelValue"]),l(d,{modelValue:o.value,"onUpdate:modelValue":e[6]||(e[6]=t=>o.value=t),"active-color":"#13ce66","inactive-color":"#2d3748"},null,8,["modelValue"])],64)}const{defineComponent:h,ref:r}=F,p=h({setup(){const o=r(!1),e=r(!0);return{value:o,value1:e}}});return g({render:E},p)}(),"hl-demo2":function(){const{resolveComponent:a,createVNode:l,toDisplayString:n,createElementVNode:s,Fragment:f,openBlock:E,createElementBlock:h}=F,r={class:"m-l-md"};function p(t,m){const C=a("hl-switch");return E(),h(f,null,[l(C,{modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=V=>t.value=V),"active-value":"100","inactive-value":"0"},null,8,["modelValue"]),s("span",r,n(t.value),1)],64)}const{defineComponent:o,ref:e}=F,d=o({setup(){return{value:e("100")}}});return g({render:p},d)}(),"hl-demo3":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:s,createElementBlock:f}=F;function E(o,e){const d=a("hl-switch");return s(),f(n,null,[l(d,{modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value1=t),class:"m-r-md",disabled:""},null,8,["modelValue"]),l(d,{modelValue:o.value2,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value2=t),class:"m-r-md",type:"primary",disabled:""},null,8,["modelValue"])],64)}const{defineComponent:h,ref:r}=F,p=h({setup(){const o=r(!0),e=r(!1);return{value1:o,value2:e}}});return g({render:E},p)}(),"hl-demo4":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:s,createElementBlock:f}=F;function E(o,e){const d=a("hl-switch");return s(),f(n,null,[l(d,{modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value1=t),size:"sm",class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value1=t),size:"md",class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value1=t),size:"lg",class:"m-r-md"},null,8,["modelValue"])],64)}const{defineComponent:h,ref:r}=F,p=h({setup(){return{value1:r(!0)}}});return g({render:E},p)}(),"hl-demo5":function(){const{createElementVNode:a,resolveComponent:l,withCtx:n,createVNode:s,Fragment:f,openBlock:E,createElementBlock:h}=F,r=a("i",null,"\xA5",-1);function p(t,m){const C=l("hl-switch"),V=l("two-mail"),w=l("hl-icon"),k=l("two-power");return E(),h(f,null,[s(C,{modelValue:t.value2,"onUpdate:modelValue":m[0]||(m[0]=B=>t.value2=B),type:"success",class:"m-r-md"},{icon:n(()=>[r]),_:1},8,["modelValue"]),s(C,{modelValue:t.value3,"onUpdate:modelValue":m[1]||(m[1]=B=>t.value3=B),type:"danger",class:"m-r-md"},{icon:n(()=>[s(w,null,{default:n(()=>[s(V)]),_:1})]),_:1},8,["modelValue"]),s(C,{modelValue:t.value4,"onUpdate:modelValue":m[2]||(m[2]=B=>t.value4=B),loading:"",class:"m-r-md"},null,8,["modelValue"]),s(C,{modelValue:t.value4,"onUpdate:modelValue":m[3]||(m[3]=B=>t.value4=B),loading:"",class:"m-r-md"},{icon:n(()=>[s(w,null,{default:n(()=>[s(V)]),_:1})]),_:1},8,["modelValue"]),s(C,{modelValue:t.value4,"onUpdate:modelValue":m[4]||(m[4]=B=>t.value4=B),type:"primary",class:"m-r-md"},{icon:n(()=>[s(w,null,{default:n(()=>[s(k)]),_:1})]),_:1},8,["modelValue"])],64)}const{defineComponent:o,ref:e}=F,d=o({setup(){const t=e(!0),m=e(!0),C=e(!0),V=e(!1);return{value1:t,value2:m,value3:C,value4:V}}});return g({render:p},d)}(),"hl-demo6":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:s,createElementBlock:f}=F;function E(e,d){const t=a("hl-switch");return s(),f(n,null,[l(t,{modelValue:e.value1,"onUpdate:modelValue":d[0]||(d[0]=m=>e.value1=m),loading:e.loading1,"before-change":e.beforeChange1,class:"m-r-md"},null,8,["modelValue","loading","before-change"]),l(t,{modelValue:e.value2,"onUpdate:modelValue":d[1]||(d[1]=m=>e.value2=m),loading:e.loading2,"before-change":e.beforeChange2},null,8,["modelValue","loading","before-change"])],64)}const{reactive:h,toRefs:r}=F,{HlMessage:p}=T;return g({render:E},{setup(){const e=h({value1:!1,loading1:!1}),d=()=>(e.loading1=!0,new Promise(C=>{setTimeout(()=>(e.loading1=!1,p.success("\u5207\u6362\u6210\u529F"),C(!0)),1e3)})),t=h({value2:!1,loading2:!1}),m=()=>(t.loading2=!0,new Promise((C,V)=>{setTimeout(()=>(t.loading2=!1,p.error("\u5207\u6362\u5931\u8D25"),V(new Error("Error"))),1e3)}));return y(g(g({},r(e)),r(t)),{beforeChange1:d,beforeChange2:m})}})}()}},q=u("h1",null,"Switch \u5F00\u5173",-1),Y=u("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),I=u("div",null,[u("p",null,[c("\u7ED1\u5B9A"),u("code",null,"v-model"),c("\u5230\u4E00\u4E2A"),u("code",null,"boolean"),c("\u7C7B\u578B\u7684\u53D8\u91CF\u3002")])],-1),L=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-switch v-model="value" class="m-r-md" />
  <hl-switch v-model="value" type="primary" width="var(--xxl)" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(true)

    return {
      value,
    }
  },
})
<\/script>
`)],-1),Q=u("h2",{id:"yan-se"},[u("a",{class:"header-anchor",href:"#yan-se"}),c(" \u989C\u8272")],-1),W=u("p",null,[c("Switch \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),u("code",null,"primary"),c("\u3001"),u("code",null,"success"),c("\u3001"),u("code",null,"warning"),c("\u548C"),u("code",null,"danger"),c("\u3002")],-1),G=u("div",null,[u("p",null,[c("\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"active-color"),c("\u5C5E\u6027\u4E0E"),u("code",null,"inactive-color"),c("\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272\u3002")])],-1),J=u("pre",null,[u("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(false)
    const value1 = ref(true)

    return {
      value,
      value1,
    }
  },
})
<\/script>
`)],-1),K=b('<h2 id="kuo-zhan-de-value-lei-xing"><a class="header-anchor" href="#kuo-zhan-de-value-lei-xing"></a> \u6269\u5C55\u7684 value \u7C7B\u578B</h2><p>\u8BBE\u7F6E<code>active-value</code>\u548C<code>inactive-value</code>\u5C5E\u6027\uFF0C\u63A5\u53D7<code>boolean</code>, <code>string</code>\u6216<code>number</code>\u7C7B\u578B\u7684\u503C\u3002</p>',2),O=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-switch v-model="value" active-value="100" inactive-value="0" />
  <span class="m-l-md">{{ value }}</span>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('100')

    return {
      value,
    }
  },
})
<\/script>
`)],-1),X=u("h2",{id:"jin-yong-zhuang-tai"},[u("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),c(" \u7981\u7528\u72B6\u6001")],-1),Z=u("p",null,[c("\u8BBE\u7F6E"),u("code",null,"disabled"),c("\u5C5E\u6027\u53EF\u4F7F switch \u53D8\u4E3A\u7981\u7528\u72B6\u6001\u3002")],-1),x=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-switch v-model="value1" class="m-r-md" disabled />
  <hl-switch v-model="value2" class="m-r-md" type="primary" disabled />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(true)
    const value2 = ref(false)

    return {
      value1,
      value2,
    }
  },
})
<\/script>
`)],-1),ee=b('<h2 id="chi-cun"><a class="header-anchor" href="#chi-cun"></a> \u5C3A\u5BF8</h2><p>\u8BBE\u7F6E<code>size</code>\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A<code>sm</code> <code>md</code> <code>lg</code>\uFF0C \u9ED8\u8BA4\u5219\u4E3A <code>md</code>\u3002</p>',2),te=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-switch v-model="value1" size="sm" class="m-r-md" />
  <hl-switch v-model="value1" size="md" class="m-r-md" />
  <hl-switch v-model="value1" size="lg" class="m-r-md" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(true)

    return {
      value1,
    }
  },
})
<\/script>
`)],-1),ue=u("h2",{id:"tu-biao"},[u("a",{class:"header-anchor",href:"#tu-biao"}),c(" \u56FE\u6807")],-1),oe=u("p",null,[u("code",null,"icon"),c("\u5C5E\u6027\u53EF\u4E3A Switch \u52A0\u4E0A\u56FE\u6807\u6548\u679C\u3002\u4F60\u4E5F\u901A\u8FC7 icon slot \u6765\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002")],-1),le=u("div",null,[u("p",null,[c("\u6CE8\u610F slot \u91CC\u9762\u5FC5\u987B\u7528"),u("code",null,"i"),c("\u6807\u7B7E\u5305\u88F9\u4F60\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9")])],-1),ne=u("pre",null,[u("code",{class:"html"},` <template>
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
    <template #icon>
      <hl-icon><two-power /></hl-icon>
    </template>
  </hl-switch>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(true)
    const value2 = ref(true)
    const value3 = ref(true)
    const value4 = ref(false)

    return {
      value1,
      value2,
      value3,
      value4,
    }
  },
})
<\/script>
`)],-1),de=u("h2",{id:"zu-zhi-qie-huan"},[u("a",{class:"header-anchor",href:"#zu-zhi-qie-huan"}),c(" \u963B\u6B62\u5207\u6362")],-1),ae=u("div",null,[u("p",null,[c("\u8BBE\u7F6E"),u("code",null,"before-change"),c("\u5C5E\u6027\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5207\u6362\u3002")])],-1),se=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-switch v-model="value1" :loading="loading1" :before-change="beforeChange1" class="m-r-md" />
  <hl-switch v-model="value2" :loading="loading2" :before-change="beforeChange2" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { HlMessage } from 'hongluan-ui'

export default {
  setup() {
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

    return {
      ...toRefs(status1),
      ...toRefs(status2),
      beforeChange1,
      beforeChange2,
    }
  },
}
<\/script>
`)],-1),re=b('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8E<code>active-value</code>\u6216<code>inactive-value</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>Boolean</code>\u7C7B\u578B</td><td>boolean / string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>primary, warning, danger, success, info</td><td>\u2014</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>width</td><td>\u81EA\u5B9A\u4E49 switch \u7684\u5BBD\u5EA6\uFF0C width \u548C size \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>active-value</td><td>switch \u6253\u5F00\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>true</td></tr><tr><td>inactive-value</td><td>switch \u5173\u95ED\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>false</td></tr><tr><td>active-color</td><td>switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#C0CCDA</td></tr><tr><td>border-color</td><td>switch \u8FB9\u6846\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>switch \u5BF9\u5E94\u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate-event</td><td>\u6539\u53D8 switch \u72B6\u6001\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u72B6\u6001\uFF0C\u6B64\u72B6\u6001\u4E0B\u5982\u679C\u4E0D\u8BBE\u7F6Eicon\uFF0C\u4F1A\u9ED8\u8BA4\u5C06icon\u8BBE\u6210Loading</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-change</td><td>switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362</td><td>function</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F Switch \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>icon \u81EA\u5B9A\u4E49\uFF0C\u81EA\u5B9A\u4E49\u5C06\u4F1A\u4F7F\u81EA\u52A8\u8BBE\u7F6Eloading icon\u529F\u80FD\u5931\u6548</td></tr></tbody></table>',8);function me(a,l,n,s,f,E){const h=_("hl-demo0"),r=_("demo-block"),p=_("hl-demo1"),o=_("hl-demo2"),e=_("hl-demo3"),d=_("hl-demo4"),t=_("hl-demo5"),m=_("hl-demo6"),C=_("right-nav");return H(),M(P,null,[u("section",null,[q,Y,v(r,{fs:""},{source:i(()=>[v(h)]),highlight:i(()=>[L]),default:i(()=>[I]),_:1}),Q,W,v(r,{fs:""},{source:i(()=>[v(p)]),highlight:i(()=>[J]),default:i(()=>[G]),_:1}),K,v(r,{fs:""},{source:i(()=>[v(o)]),highlight:i(()=>[O]),_:1}),X,Z,v(r,{fs:""},{source:i(()=>[v(e)]),highlight:i(()=>[x]),_:1}),ee,v(r,{fs:""},{source:i(()=>[v(d)]),highlight:i(()=>[te]),_:1}),ue,oe,v(r,{fs:""},{source:i(()=>[v(t)]),highlight:i(()=>[ne]),default:i(()=>[le]),_:1}),de,v(r,{fs:""},{source:i(()=>[v(m)]),highlight:i(()=>[se]),default:i(()=>[ae]),_:1}),re]),v(C)],64)}var Ee=R($,[["render",me]]);export{Ee as default};
