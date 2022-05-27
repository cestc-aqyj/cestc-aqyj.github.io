var S=Object.defineProperty,M=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var U=(s,l,n)=>l in s?S(s,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[l]=n,w=(s,l)=>{for(var n in l||(l={}))R.call(l,n)&&U(s,n,l[n]);if(k)for(var n of k(l))$.call(l,n)&&U(s,n,l[n]);return s},N=(s,l)=>M(s,j(l));import{H as _,L as I,W as L,Q as e,X as f,P as c,a4 as q,aJ as E,S as d,o as z}from"./vue.059774a0.js";import{_ as Q,H as W}from"./index.1d9df885.js";import{H as X}from"./hongluan-icons.5b925e95.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:s,createVNode:l,Fragment:n,openBlock:m,createElementBlock:i}=E;function p(o,t){const a=s("hl-switch");return m(),i(n,null,[l(a,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value=u),class:"m-r-md"},null,8,["modelValue"]),l(a,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value=u),type:"primary",width:"var(--xxl)"},null,8,["modelValue"])],64)}const{defineComponent:v,ref:r}=E,h=v({setup(){return{value:r(!0)}}});return w({render:p},h)}(),"hl-demo1":function(){const{resolveComponent:s,createVNode:l,Fragment:n,openBlock:m,createElementBlock:i}=E;function p(o,t){const a=s("hl-switch");return m(),i(n,null,[l(a,{modelValue:o.value1,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value1=u),size:"sm",class:"m-r-md"},null,8,["modelValue"]),l(a,{modelValue:o.value1,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value1=u),size:"md",class:"m-r-md"},null,8,["modelValue"]),l(a,{modelValue:o.value1,"onUpdate:modelValue":t[2]||(t[2]=u=>o.value1=u),size:"lg",class:"m-r-md"},null,8,["modelValue"])],64)}const{defineComponent:v,ref:r}=E,h=v({setup(){return{value1:r(!0)}}});return w({render:p},h)}(),"hl-demo2":function(){const{resolveComponent:s,createVNode:l,Fragment:n,openBlock:m,createElementBlock:i}=E;function p(o,t){const a=s("hl-switch");return m(),i(n,null,[l(a,{modelValue:o.value1,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value1=u),class:"m-r-md"},null,8,["modelValue"]),l(a,{modelValue:o.value1,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value1=u),class:"m-r-md",type:"primary"},null,8,["modelValue"]),l(a,{modelValue:o.value1,"onUpdate:modelValue":t[2]||(t[2]=u=>o.value1=u),class:"m-r-md",type:"success"},null,8,["modelValue"]),l(a,{modelValue:o.value1,"onUpdate:modelValue":t[3]||(t[3]=u=>o.value1=u),class:"m-r-md",type:"warning"},null,8,["modelValue"]),l(a,{modelValue:o.value1,"onUpdate:modelValue":t[4]||(t[4]=u=>o.value1=u),class:"m-r-md",type:"danger"},null,8,["modelValue"]),l(a,{modelValue:o.value1,"onUpdate:modelValue":t[5]||(t[5]=u=>o.value1=u),class:"m-r-md",type:"info"},null,8,["modelValue"]),l(a,{modelValue:o.value,"onUpdate:modelValue":t[6]||(t[6]=u=>o.value=u),"active-color":"#13ce66","inactive-color":"#2d3748"},null,8,["modelValue"])],64)}const{defineComponent:v,ref:r}=E,h=v({setup(){const o=r(!1),t=r(!0);return{value:o,value1:t}}});return w({render:p},h)}(),"hl-demo3":function(){const{resolveComponent:s,createVNode:l,toDisplayString:n,createElementVNode:m,Fragment:i,openBlock:p,createElementBlock:v}=E,r={class:"m-l-md"};function h(u,C){const V=s("hl-switch");return p(),v(i,null,[l(V,{modelValue:u.value,"onUpdate:modelValue":C[0]||(C[0]=y=>u.value=y),"active-value":"100","inactive-value":"0"},null,8,["modelValue"]),m("span",r,n(u.value),1)],64)}const{defineComponent:o,ref:t}=E,a=o({setup(){return{value:t("100")}}});return w({render:h},a)}(),"hl-demo4":function(){const{resolveComponent:s,createVNode:l,Fragment:n,openBlock:m,createElementBlock:i}=E;function p(o,t){const a=s("hl-switch");return m(),i(n,null,[l(a,{modelValue:o.value1,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value1=u),class:"m-r-md",disabled:""},null,8,["modelValue"]),l(a,{modelValue:o.value2,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value2=u),class:"m-r-md",type:"primary",disabled:""},null,8,["modelValue"])],64)}const{defineComponent:v,ref:r}=E,h=v({setup(){const o=r(!0),t=r(!1);return{value1:o,value2:t}}});return w({render:p},h)}(),"hl-demo5":function(){const{createElementVNode:s,resolveComponent:l,withCtx:n,createVNode:m,openBlock:i,createBlock:p,createCommentVNode:v,Fragment:r,createElementBlock:h}=E,o=s("i",null,"\xA5",-1);function t(F,g){const b=l("hl-switch"),A=l("two-mail"),D=l("hl-icon"),P=l("two-power"),H=l("two-airplay");return i(),h(r,null,[m(b,{modelValue:F.value2,"onUpdate:modelValue":g[0]||(g[0]=B=>F.value2=B),type:"success",class:"m-r-md"},{icon:n(()=>[o]),_:1},8,["modelValue"]),m(b,{modelValue:F.value3,"onUpdate:modelValue":g[1]||(g[1]=B=>F.value3=B),type:"danger",class:"m-r-md"},{icon:n(()=>[m(D,null,{default:n(()=>[m(A)]),_:1})]),_:1},8,["modelValue"]),m(b,{modelValue:F.value4,"onUpdate:modelValue":g[2]||(g[2]=B=>F.value4=B),loading:"",class:"m-r-md"},null,8,["modelValue"]),m(b,{modelValue:F.value4,"onUpdate:modelValue":g[3]||(g[3]=B=>F.value4=B),loading:"",class:"m-r-md"},{icon:n(()=>[m(D,null,{default:n(()=>[m(A)]),_:1})]),_:1},8,["modelValue"]),m(b,{modelValue:F.value4,"onUpdate:modelValue":g[4]||(g[4]=B=>F.value4=B),type:"primary",class:"m-r-md"},{icon:n(({checked:B})=>[m(D,null,{default:n(()=>[B?(i(),p(P,{key:0})):(i(),p(H,{key:1}))]),_:2},1024)]),_:1},8,["modelValue"])],64)}const{defineComponent:a,ref:u}=E,{TwoMail:C,TwoPower:V,TwoAirplay:y}=X,T=a({components:{TwoMail:C,TwoPower:V,TwoAirplay:y},setup(){const F=u(!0),g=u(!0),b=u(!0),A=u(!1);return{value1:F,value2:g,value3:b,value4:A}}});return w({render:t},T)}(),"hl-demo6":function(){const{resolveComponent:s,createVNode:l,Fragment:n,openBlock:m,createElementBlock:i}=E;function p(t,a){const u=s("hl-switch");return m(),i(n,null,[l(u,{modelValue:t.value1,"onUpdate:modelValue":a[0]||(a[0]=C=>t.value1=C),loading:t.loading1,"before-change":t.beforeChange1,class:"m-r-md"},null,8,["modelValue","loading","before-change"]),l(u,{modelValue:t.value2,"onUpdate:modelValue":a[1]||(a[1]=C=>t.value2=C),loading:t.loading2,"before-change":t.beforeChange2},null,8,["modelValue","loading","before-change"])],64)}const{reactive:v,toRefs:r}=E,{HlMessage:h}=W;return w({render:p},{setup(){const t=v({value1:!1,loading1:!1}),a=()=>(t.loading1=!0,new Promise(V=>{setTimeout(()=>(t.loading1=!1,h.success("\u5207\u6362\u6210\u529F"),V(!0)),1e3)})),u=v({value2:!1,loading2:!1}),C=()=>(u.loading2=!0,new Promise((V,y)=>{setTimeout(()=>(u.loading2=!1,h.error("\u5207\u6362\u5931\u8D25"),y(new Error("Error"))),1e3)}));return N(w(w({},r(t)),r(u)),{beforeChange1:a,beforeChange2:C})}})}()}},G=e("h1",null,"Switch \u5F00\u5173",-1),K=e("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),O=e("div",null,[e("p",null,[d("\u7ED1\u5B9A"),e("code",null,"v-model"),d("\u5230\u4E00\u4E2A"),e("code",null,"boolean"),d("\u7C7B\u578B\u7684\u53D8\u91CF\u3002")])],-1),Y=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Z=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),d(" \u5C3A\u5BF8\u4FEE\u9970")],-1),x=e("p",null,[d("Switch \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),d(),e("code",null,"md"),d(),e("code",null,"lg"),d(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),d(" \u5C3A\u5BF8")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),te=e("h2",{id:"yan-se"},[e("a",{class:"header-anchor",href:"#yan-se"}),d(" \u989C\u8272")],-1),ue=e("p",null,[d("Switch \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),e("code",null,"primary"),d("\u3001"),e("code",null,"success"),d("\u3001"),e("code",null,"warning"),d("\u548C"),e("code",null,"danger"),d("\u3002")],-1),oe=e("div",null,[e("p",null,[d("\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"active-color"),d("\u5C5E\u6027\u4E0E"),e("code",null,"inactive-color"),d("\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272\u3002")])],-1),le=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ne=z('<h2 id="kuo-zhan-de-value-lei-xing"><a class="header-anchor" href="#kuo-zhan-de-value-lei-xing"></a> \u6269\u5C55\u7684 value \u7C7B\u578B</h2><p>\u8BBE\u7F6E<code>active-value</code>\u548C<code>inactive-value</code>\u5C5E\u6027\uFF0C\u63A5\u53D7<code>boolean</code>, <code>string</code>\u6216<code>number</code>\u7C7B\u578B\u7684\u503C\u3002</p>',2),ae=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),de=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),d(" \u7981\u7528\u72B6\u6001")],-1),se=e("p",null,[d("\u8BBE\u7F6E"),e("code",null,"disabled"),d("\u5C5E\u6027\u53EF\u4F7F switch \u53D8\u4E3A\u7981\u7528\u72B6\u6001\u3002")],-1),re=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),me=e("h2",{id:"tu-biao"},[e("a",{class:"header-anchor",href:"#tu-biao"}),d(" \u56FE\u6807")],-1),ce=e("p",null,[e("code",null,"icon"),d("\u5C5E\u6027\u53EF\u4E3A Switch \u52A0\u4E0A\u56FE\u6807\u6548\u679C\u3002\u4F60\u4E5F\u901A\u8FC7 icon slot \u6765\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002")],-1),ie=e("div",null,[e("p",null,[d("\u6CE8\u610F slot \u91CC\u9762\u5FC5\u987B\u7528"),e("code",null,"i"),d("\u6807\u7B7E\u5305\u88F9\u4F60\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9")])],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
import { TwoMail, TwoPower, TwoAirplay } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoMail, TwoPower, TwoAirplay },
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
`)],-1),pe=e("h2",{id:"zu-zhi-qie-huan"},[e("a",{class:"header-anchor",href:"#zu-zhi-qie-huan"}),d(" \u963B\u6B62\u5207\u6362")],-1),ve=e("div",null,[e("p",null,[d("\u8BBE\u7F6E"),e("code",null,"before-change"),d("\u5C5E\u6027\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5207\u6362\u3002")])],-1),fe=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Ee=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8E<code>active-value</code>\u6216<code>inactive-value</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>Boolean</code>\u7C7B\u578B</td><td>boolean / string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>primary, warning, danger, success, info</td><td>\u2014</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>width</td><td>\u81EA\u5B9A\u4E49 switch \u7684\u5BBD\u5EA6\uFF0C width \u548C size \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>active-value</td><td>switch \u6253\u5F00\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>true</td></tr><tr><td>inactive-value</td><td>switch \u5173\u95ED\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>false</td></tr><tr><td>active-color</td><td>switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#C0CCDA</td></tr><tr><td>border-color</td><td>switch \u8FB9\u6846\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>switch \u5BF9\u5E94\u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate-event</td><td>\u6539\u53D8 switch \u72B6\u6001\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u72B6\u6001\uFF0C\u6B64\u72B6\u6001\u4E0B\u5982\u679C\u4E0D\u8BBE\u7F6E icon\uFF0C\u4F1A\u9ED8\u8BA4\u5C06 icon \u8BBE\u6210 Loading</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-change</td><td>switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362</td><td>function</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F Switch \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>icon \u81EA\u5B9A\u4E49\uFF0C\u81EA\u5B9A\u4E49\u5C06\u4F1A\u4F7F\u81EA\u52A8\u8BBE\u7F6E loading icon \u529F\u80FD\u5931\u6548\uFF0C\u53C2\u6570\uFF1A{ checked }</td></tr></tbody></table>',8);function Ce(s,l,n,m,i,p){const v=_("hl-demo0"),r=_("demo-block"),h=_("hl-demo1"),o=_("hl-demo2"),t=_("hl-demo3"),a=_("hl-demo4"),u=_("hl-demo5"),C=_("hl-demo6"),V=_("right-nav");return I(),L(q,null,[e("section",null,[G,K,f(r,{fs:""},{source:c(()=>[f(v)]),highlight:c(()=>[Y]),default:c(()=>[O]),_:1}),Z,x,f(r,{fs:""},{source:c(()=>[f(h)]),highlight:c(()=>[ee]),_:1}),te,ue,f(r,{fs:""},{source:c(()=>[f(o)]),highlight:c(()=>[le]),default:c(()=>[oe]),_:1}),ne,f(r,{fs:""},{source:c(()=>[f(t)]),highlight:c(()=>[ae]),_:1}),de,se,f(r,{fs:""},{source:c(()=>[f(a)]),highlight:c(()=>[re]),_:1}),me,ce,f(r,{fs:""},{source:c(()=>[f(u)]),highlight:c(()=>[he]),default:c(()=>[ie]),_:1}),pe,f(r,{fs:""},{source:c(()=>[f(C)]),highlight:c(()=>[fe]),default:c(()=>[ve]),_:1}),Ee]),f(V)],64)}var be=Q(J,[["render",Ce]]);export{be as default};
