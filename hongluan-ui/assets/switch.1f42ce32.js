var j=Object.defineProperty,S=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(a,l,n)=>l in a?j(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n,_=(a,l)=>{for(var n in l||(l={}))M.call(l,n)&&k(a,n,l[n]);if(D)for(var n of D(l))P.call(l,n)&&k(a,n,l[n]);return a},U=(a,l)=>S(a,H(l));import{H as V,o as T,c as R,g as t,T as C,M as i,Y as $,aB as F,_ as m,aA as A}from"./vue.54068bde.js";import{_ as q,H as Y}from"./index.79199018.js";import"./hongluan.27fafe3d.js";import"./highlight.e2508551.js";import"./hongluan-icons.2b644934.js";const I={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:r,createElementBlock:h}=F;function f(o,e){const d=a("hl-switch");return r(),h(n,null,[l(d,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=u=>o.value=u),class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=u=>o.value=u),type:"primary",width:"var(--xxl)"},null,8,["modelValue"])],64)}const{defineComponent:E,ref:s}=F,p=E({setup(){return{value:s(!0)}}});return _({render:f},p)}(),"hl-demo1":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:r,createElementBlock:h}=F;function f(o,e){const d=a("hl-switch");return r(),h(n,null,[l(d,{modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=u=>o.value1=u),class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[1]||(e[1]=u=>o.value1=u),class:"m-r-md",type:"primary"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[2]||(e[2]=u=>o.value1=u),class:"m-r-md",type:"success"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[3]||(e[3]=u=>o.value1=u),class:"m-r-md",type:"warning"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[4]||(e[4]=u=>o.value1=u),class:"m-r-md",type:"danger"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[5]||(e[5]=u=>o.value1=u),class:"m-r-md",type:"info"},null,8,["modelValue"]),l(d,{modelValue:o.value,"onUpdate:modelValue":e[6]||(e[6]=u=>o.value=u),"active-color":"#13ce66","inactive-color":"#2d3748"},null,8,["modelValue"])],64)}const{defineComponent:E,ref:s}=F,p=E({setup(){const o=s(!1),e=s(!0);return{value:o,value1:e}}});return _({render:f},p)}(),"hl-demo2":function(){const{resolveComponent:a,createVNode:l,toDisplayString:n,createElementVNode:r,Fragment:h,openBlock:f,createElementBlock:E}=F,s={class:"m-l-md"};function p(u,g){const c=a("hl-switch");return f(),E(h,null,[l(c,{modelValue:u.value,"onUpdate:modelValue":g[0]||(g[0]=v=>u.value=v),"active-value":"100","inactive-value":"0"},null,8,["modelValue"]),r("span",s,n(u.value),1)],64)}const{defineComponent:o,ref:e}=F,d=o({setup(){return{value:e("100")}}});return _({render:p},d)}(),"hl-demo3":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:r,createElementBlock:h}=F;function f(o,e){const d=a("hl-switch");return r(),h(n,null,[l(d,{modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=u=>o.value1=u),class:"m-r-md",disabled:""},null,8,["modelValue"]),l(d,{modelValue:o.value2,"onUpdate:modelValue":e[1]||(e[1]=u=>o.value2=u),class:"m-r-md",type:"primary",disabled:""},null,8,["modelValue"])],64)}const{defineComponent:E,ref:s}=F,p=E({setup(){const o=s(!0),e=s(!1);return{value1:o,value2:e}}});return _({render:f},p)}(),"hl-demo4":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:r,createElementBlock:h}=F;function f(o,e){const d=a("hl-switch");return r(),h(n,null,[l(d,{modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=u=>o.value1=u),size:"sm",class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[1]||(e[1]=u=>o.value1=u),size:"md",class:"m-r-md"},null,8,["modelValue"]),l(d,{modelValue:o.value1,"onUpdate:modelValue":e[2]||(e[2]=u=>o.value1=u),size:"lg",class:"m-r-md"},null,8,["modelValue"])],64)}const{defineComponent:E,ref:s}=F,p=E({setup(){return{value1:s(!0)}}});return _({render:f},p)}(),"hl-demo5":function(){const{createElementVNode:a,resolveComponent:l,withCtx:n,createVNode:r,openBlock:h,createBlock:f,createCommentVNode:E,Fragment:s,createElementBlock:p}=F,o=a("i",null,"\xA5",-1);function e(c,v){const w=l("hl-switch"),b=l("two-mail"),y=l("hl-icon"),N=l("two-power"),z=l("two-airplay");return h(),p(s,null,[r(w,{modelValue:c.value2,"onUpdate:modelValue":v[0]||(v[0]=B=>c.value2=B),type:"success",class:"m-r-md"},{icon:n(()=>[o]),_:1},8,["modelValue"]),r(w,{modelValue:c.value3,"onUpdate:modelValue":v[1]||(v[1]=B=>c.value3=B),type:"danger",class:"m-r-md"},{icon:n(()=>[r(y,null,{default:n(()=>[r(b)]),_:1})]),_:1},8,["modelValue"]),r(w,{modelValue:c.value4,"onUpdate:modelValue":v[2]||(v[2]=B=>c.value4=B),loading:"",class:"m-r-md"},null,8,["modelValue"]),r(w,{modelValue:c.value4,"onUpdate:modelValue":v[3]||(v[3]=B=>c.value4=B),loading:"",class:"m-r-md"},{icon:n(()=>[r(y,null,{default:n(()=>[r(b)]),_:1})]),_:1},8,["modelValue"]),r(w,{modelValue:c.value4,"onUpdate:modelValue":v[4]||(v[4]=B=>c.value4=B),type:"primary",class:"m-r-md"},{icon:n(({checked:B})=>[r(y,null,{default:n(()=>[B?(h(),f(N,{key:0})):(h(),f(z,{key:1}))]),_:2},1024)]),_:1},8,["modelValue"])],64)}const{defineComponent:d,ref:u}=F,g=d({setup(){const c=u(!0),v=u(!0),w=u(!0),b=u(!1);return{value1:c,value2:v,value3:w,value4:b}}});return _({render:e},g)}(),"hl-demo6":function(){const{resolveComponent:a,createVNode:l,Fragment:n,openBlock:r,createElementBlock:h}=F;function f(e,d){const u=a("hl-switch");return r(),h(n,null,[l(u,{modelValue:e.value1,"onUpdate:modelValue":d[0]||(d[0]=g=>e.value1=g),loading:e.loading1,"before-change":e.beforeChange1,class:"m-r-md"},null,8,["modelValue","loading","before-change"]),l(u,{modelValue:e.value2,"onUpdate:modelValue":d[1]||(d[1]=g=>e.value2=g),loading:e.loading2,"before-change":e.beforeChange2},null,8,["modelValue","loading","before-change"])],64)}const{reactive:E,toRefs:s}=F,{HlMessage:p}=Y;return _({render:f},{setup(){const e=E({value1:!1,loading1:!1}),d=()=>(e.loading1=!0,new Promise(c=>{setTimeout(()=>(e.loading1=!1,p.success("\u5207\u6362\u6210\u529F"),c(!0)),1e3)})),u=E({value2:!1,loading2:!1}),g=()=>(u.loading2=!0,new Promise((c,v)=>{setTimeout(()=>(u.loading2=!1,p.error("\u5207\u6362\u5931\u8D25"),v(new Error("Error"))),1e3)}));return U(_(_({},s(e)),s(u)),{beforeChange1:d,beforeChange2:g})}})}()}},L=t("h1",null,"Switch \u5F00\u5173",-1),W=t("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),G=t("div",null,[t("p",null,[m("\u7ED1\u5B9A"),t("code",null,"v-model"),m("\u5230\u4E00\u4E2A"),t("code",null,"boolean"),m("\u7C7B\u578B\u7684\u53D8\u91CF\u3002")])],-1),J=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),K=t("h2",{id:"yan-se"},[t("a",{class:"header-anchor",href:"#yan-se"}),m(" \u989C\u8272")],-1),O=t("p",null,[m("Switch \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A"),t("code",null,"primary"),m("\u3001"),t("code",null,"success"),m("\u3001"),t("code",null,"warning"),m("\u548C"),t("code",null,"danger"),m("\u3002")],-1),Q=t("div",null,[t("p",null,[m("\u53EF\u4EE5\u4F7F\u7528"),t("code",null,"active-color"),m("\u5C5E\u6027\u4E0E"),t("code",null,"inactive-color"),m("\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272\u3002")])],-1),X=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),Z=A('<h2 id="kuo-zhan-de-value-lei-xing"><a class="header-anchor" href="#kuo-zhan-de-value-lei-xing"></a> \u6269\u5C55\u7684 value \u7C7B\u578B</h2><p>\u8BBE\u7F6E<code>active-value</code>\u548C<code>inactive-value</code>\u5C5E\u6027\uFF0C\u63A5\u53D7<code>boolean</code>, <code>string</code>\u6216<code>number</code>\u7C7B\u578B\u7684\u503C\u3002</p>',2),x=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),ee=t("h2",{id:"jin-yong-zhuang-tai"},[t("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),m(" \u7981\u7528\u72B6\u6001")],-1),te=t("p",null,[m("\u8BBE\u7F6E"),t("code",null,"disabled"),m("\u5C5E\u6027\u53EF\u4F7F switch \u53D8\u4E3A\u7981\u7528\u72B6\u6001\u3002")],-1),ue=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),oe=A('<h2 id="chi-cun"><a class="header-anchor" href="#chi-cun"></a> \u5C3A\u5BF8</h2><p>\u8BBE\u7F6E<code>size</code>\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A<code>sm</code> <code>md</code> <code>lg</code>\uFF0C \u9ED8\u8BA4\u5219\u4E3A <code>md</code>\u3002</p>',2),le=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),ne=t("h2",{id:"tu-biao"},[t("a",{class:"header-anchor",href:"#tu-biao"}),m(" \u56FE\u6807")],-1),de=t("p",null,[t("code",null,"icon"),m("\u5C5E\u6027\u53EF\u4E3A Switch \u52A0\u4E0A\u56FE\u6807\u6548\u679C\u3002\u4F60\u4E5F\u901A\u8FC7 icon slot \u6765\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002")],-1),ae=t("div",null,[t("p",null,[m("\u6CE8\u610F slot \u91CC\u9762\u5FC5\u987B\u7528"),t("code",null,"i"),m("\u6807\u7B7E\u5305\u88F9\u4F60\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9")])],-1),se=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),re=t("h2",{id:"zu-zhi-qie-huan"},[t("a",{class:"header-anchor",href:"#zu-zhi-qie-huan"}),m(" \u963B\u6B62\u5207\u6362")],-1),me=t("div",null,[t("p",null,[m("\u8BBE\u7F6E"),t("code",null,"before-change"),m("\u5C5E\u6027\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5207\u6362\u3002")])],-1),ce=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),ie=A('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8E<code>active-value</code>\u6216<code>inactive-value</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>Boolean</code>\u7C7B\u578B</td><td>boolean / string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>primary, warning, danger, success, info</td><td>\u2014</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>width</td><td>\u81EA\u5B9A\u4E49 switch \u7684\u5BBD\u5EA6\uFF0C width \u548C size \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>active-value</td><td>switch \u6253\u5F00\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>true</td></tr><tr><td>inactive-value</td><td>switch \u5173\u95ED\u65F6\u7684\u503C</td><td>boolean / string / number</td><td>\u2014</td><td>false</td></tr><tr><td>active-color</td><td>switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#C0CCDA</td></tr><tr><td>border-color</td><td>switch \u8FB9\u6846\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>switch \u5BF9\u5E94\u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate-event</td><td>\u6539\u53D8 switch \u72B6\u6001\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u72B6\u6001\uFF0C\u6B64\u72B6\u6001\u4E0B\u5982\u679C\u4E0D\u8BBE\u7F6Eicon\uFF0C\u4F1A\u9ED8\u8BA4\u5C06icon\u8BBE\u6210Loading</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-change</td><td>switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362</td><td>function</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F Switch \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>icon \u81EA\u5B9A\u4E49\uFF0C\u81EA\u5B9A\u4E49\u5C06\u4F1A\u4F7F\u81EA\u52A8\u8BBE\u7F6Eloading icon\u529F\u80FD\u5931\u6548\uFF0C\u53C2\u6570\uFF1A{ checked }</td></tr></tbody></table>',8);function he(a,l,n,r,h,f){const E=V("hl-demo0"),s=V("demo-block"),p=V("hl-demo1"),o=V("hl-demo2"),e=V("hl-demo3"),d=V("hl-demo4"),u=V("hl-demo5"),g=V("hl-demo6"),c=V("right-nav");return T(),R($,null,[t("section",null,[L,W,C(s,{fs:""},{source:i(()=>[C(E)]),highlight:i(()=>[J]),default:i(()=>[G]),_:1}),K,O,C(s,{fs:""},{source:i(()=>[C(p)]),highlight:i(()=>[X]),default:i(()=>[Q]),_:1}),Z,C(s,{fs:""},{source:i(()=>[C(o)]),highlight:i(()=>[x]),_:1}),ee,te,C(s,{fs:""},{source:i(()=>[C(e)]),highlight:i(()=>[ue]),_:1}),oe,C(s,{fs:""},{source:i(()=>[C(d)]),highlight:i(()=>[le]),_:1}),ne,de,C(s,{fs:""},{source:i(()=>[C(u)]),highlight:i(()=>[se]),default:i(()=>[ae]),_:1}),re,C(s,{fs:""},{source:i(()=>[C(g)]),highlight:i(()=>[ce]),default:i(()=>[me]),_:1}),ie]),C(c)],64)}var ge=q(I,[["render",he]]);export{ge as default};
