var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(r,t,n)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,b=(r,t)=>{for(var n in t||(t={}))$.call(t,n)&&w(r,n,t[n]);if(y)for(var n of y(t))P.call(t,n)&&w(r,n,t[n]);return r};import{F as _,L as q,W as L,Q as e,X as C,P as i,a2 as M,aJ as g,M as l,o as N}from"./vue.fdea90c3.js";import{_ as Q}from"./index.70fcd2c0.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const T={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:r,createVNode:t,Fragment:n,openBlock:m,createElementBlock:p}=g;function E(u,o){const s=r("hl-input-number");return m(),p(n,null,[t(s,{modelValue:u.num,"onUpdate:modelValue":o[0]||(o[0]=f=>u.num=f),min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57",indent:"",merge:"",onChange:u.handleChange},null,8,["modelValue","onChange"]),t(s,{modelValue:u.num,"onUpdate:modelValue":o[1]||(o[1]=f=>u.num=f),class:"m-l-lg",style:{width:"180px"},min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57",gap:"var(--sm)",round:"",onChange:u.handleChange},null,8,["modelValue","onChange"])],64)}const{defineComponent:h,ref:d}=g,a=h({setup(){return{num:d(1),handleChange:s=>{console.log(s)}}}});return b({render:E},a)}(),"hl-demo1":function(){const{resolveComponent:r,openBlock:t,createBlock:n}=g;function m(d,a){const u=r("hl-input-number");return t(),n(u,{modelValue:d.num,"onUpdate:modelValue":a[0]||(a[0]=o=>d.num=o),disabled:!0,indent:"",merge:""},null,8,["modelValue"])}const{defineComponent:p,ref:E}=g,h=p({setup(){return{num:E(1)}}});return b({render:m},h)}(),"hl-demo2":function(){const{resolveComponent:r,openBlock:t,createBlock:n}=g;function m(d,a){const u=r("hl-input-number");return t(),n(u,{modelValue:d.num,"onUpdate:modelValue":a[0]||(a[0]=o=>d.num=o),step:2,indent:"",merge:""},null,8,["modelValue"])}const{defineComponent:p,ref:E}=g,h=p({setup(){return{num:E(5)}}});return b({render:m},h)}(),"hl-demo3":function(){const{resolveComponent:r,openBlock:t,createBlock:n}=g;function m(d,a){const u=r("hl-input-number");return t(),n(u,{modelValue:d.num,"onUpdate:modelValue":a[0]||(a[0]=o=>d.num=o),step:2,"step-strictly":"",indent:"",merge:""},null,8,["modelValue"])}const{defineComponent:p,ref:E}=g,h=p({setup(){return{num:E(2)}}});return b({render:m},h)}(),"hl-demo4":function(){const{resolveComponent:r,openBlock:t,createBlock:n}=g;function m(d,a){const u=r("hl-input-number");return t(),n(u,{modelValue:d.num,"onUpdate:modelValue":a[0]||(a[0]=o=>d.num=o),precision:2,step:.1,max:10,indent:"",merge:""},null,8,["modelValue","step"])}const{defineComponent:p,ref:E}=g,h=p({setup(){return{num:E(1)}}});return b({render:m},h)}(),"hl-demo5":function(){const{resolveComponent:r,createVNode:t,withCtx:n,openBlock:m,createBlock:p}=g;function E(u,o){const s=r("hl-input-number"),f=r("hl-group");return m(),p(f,null,{default:n(()=>[t(s,{modelValue:u.num2,"onUpdate:modelValue":o[0]||(o[0]=c=>u.num2=c),size:"sm",class:"m-r-md",indent:"",merge:""},null,8,["modelValue"]),t(s,{modelValue:u.num3,"onUpdate:modelValue":o[1]||(o[1]=c=>u.num3=c),class:"m-r-md",indent:"",merge:""},null,8,["modelValue"]),t(s,{modelValue:u.num4,"onUpdate:modelValue":o[2]||(o[2]=c=>u.num4=c),size:"lg",class:"m-r-md",indent:"",merge:""},null,8,["modelValue"])]),_:1})}const{defineComponent:h,ref:d}=g,a=h({setup(){const u=d(1),o=d(1),s=d(1);return{num2:u,num3:o,num4:s}}});return b({render:E},a)}(),"hl-demo6":function(){const{resolveComponent:r,createVNode:t,withCtx:n,openBlock:m,createBlock:p}=g;function E(u,o){const s=r("hl-input-number"),f=r("hl-group");return m(),p(f,{gap:"var(--md)"},{default:n(()=>[t(s,{modelValue:u.num,"onUpdate:modelValue":o[0]||(o[0]=c=>u.num=c),min:1,max:10,fill:"",block:"",indent:"",merge:"",onChange:u.handleChange},null,8,["modelValue","onChange"]),t(s,{modelValue:u.num,"onUpdate:modelValue":o[1]||(o[1]=c=>u.num=c),"controls-position":"inner",min:1,max:10,round:"",onChange:u.handleChange},null,8,["modelValue","onChange"]),t(s,{modelValue:u.num,"onUpdate:modelValue":o[2]||(o[2]=c=>u.num=c),"controls-position":"left",min:1,max:10,gap:"5px",onChange:u.handleChange},null,8,["modelValue","onChange"]),t(s,{modelValue:u.num,"onUpdate:modelValue":o[3]||(o[3]=c=>u.num=c),"controls-position":"right",min:1,max:10,gap:"5px",onChange:u.handleChange},null,8,["modelValue","onChange"])]),_:1})}const{defineComponent:h,ref:d}=g,a=h({setup(){return{num:d(1),handleChange:s=>{console.log(s)}}}});return b({render:E},a)}(),"hl-demo7":function(){const{createTextVNode:r,resolveComponent:t,withCtx:n,createVNode:m,createElementVNode:p,Fragment:E,openBlock:h,createElementBlock:d}=g,a=r("\xA5"),u=r("\u5143"),o=r("\u4E2A"),s=p("br",null,null,-1),f=p("br",null,null,-1);function c(F,B){const v=t("hl-input-number"),k=t("two-heart"),V=t("hl-icon"),j=t("two-sad"),z=t("two-smile");return h(),d(E,null,[m(v,{modelValue:F.num,"onUpdate:modelValue":B[0]||(B[0]=A=>F.num=A),min:1,max:10,indent:"",merge:"",class:"m-r-md",style:{width:"180px"},onChange:F.handleChange},{prefix:n(()=>[a]),suffix:n(()=>[u]),_:1},8,["modelValue","onChange"]),m(v,{modelValue:F.num,"onUpdate:modelValue":B[1]||(B[1]=A=>F.num=A),"controls-position":"left",indent:"",merge:"",class:"m-r-md",min:1,max:10,onChange:F.handleChange},{prefix:n(()=>[m(V,null,{default:n(()=>[m(k)]),_:1})]),suffix:n(()=>[o]),_:1},8,["modelValue","onChange"]),m(v,{modelValue:F.num,"onUpdate:modelValue":B[2]||(B[2]=A=>F.num=A),"controls-position":"right",indent:"",merge:"",min:1,max:10,onChange:F.handleChange},{suffix:n(()=>[m(V,null,{default:n(()=>[m(k)]),_:1})]),_:1},8,["modelValue","onChange"]),s,f,m(v,{modelValue:F.num,"onUpdate:modelValue":B[3]||(B[3]=A=>F.num=A),"controls-position":"inner",round:"",min:1,max:10,onChange:F.handleChange},{"icon-decrease":n(()=>[m(V,null,{default:n(()=>[m(j)]),_:1})]),"icon-increase":n(()=>[m(V,null,{default:n(()=>[m(z)]),_:1})]),_:1},8,["modelValue","onChange"])],64)}const{defineComponent:D,ref:x}=g,U=D({setup(){return{num:x(1),handleChange:v=>{console.log(v)}}}});return b({render:c},U)}()}},W=e("h1",null,"InputNumber \u8BA1\u6570\u5668",-1),X=e("p",null,"\u8BA1\u6570\u5668\u7531 Group \u5BB9\u5668\u548C\u5B50\u6210\u5458 Button\uFF0C Input \u7EC4\u4EF6\u7EC4\u6210\u3002\u6240\u4EE5\u5B83\u4E5F\u62E5\u6709\u8FD9\u4E9B\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002",-1),G=e("div",null,[e("p",null,[l("\u5728 InputNumber \u7EC4\u4EF6\u4E2D\u4F7F\u7528"),e("code",null,"v-model"),l("\u7ED1\u5B9A\u53D8\u91CF\u5373\u53EF\uFF0C\u53D8\u91CF\u7684\u521D\u59CB\u503C\u5373\u4E3A\u9ED8\u8BA4\u503C\u3002")])],-1),J=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number
    v-model="num"
    :min="1"
    :max="10"
    label="\u63CF\u8FF0\u6587\u5B57"
    indent
    merge
    @change="handleChange"
  />
  <hl-input-number
    v-model="num"
    class="m-l-lg"
    style="width:180px"
    :min="1"
    :max="10"
    label="\u63CF\u8FF0\u6587\u5B57"
    gap="var(--sm)"
    round
    @change="handleChange"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num = ref(1)
    const handleChange = value => {
      console.log(value)
    }
    return {
      num,
      handleChange,
    }
  },
})
<\/script>
`)],-1),S=N('<div class="doc-tip"><p>\u5F53\u8F93\u5165\u975E\u6CD5\u5B57\u7B26\u4E32\u65F6\uFF0Cinput\u7684\u4E8B\u4EF6\u5C06\u4F1A\u53D1\u51FANaN\u503C\uFF0C\u800C\u4E0D\u662F\u629B\u51FA\u9519\u8BEF</p></div><h2 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai"></a> \u7981\u7528\u72B6\u6001</h2><p><code>disabled</code>\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A<code>boolean</code>\uFF0C\u8BBE\u7F6E\u4E3A<code>true</code>\u5373\u53EF\u7981\u7528\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u5982\u679C\u4F60\u53EA\u9700\u8981\u63A7\u5236\u6570\u503C\u5728\u67D0\u4E00\u8303\u56F4\u5185\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>min</code>\u5C5E\u6027\u548C<code>max</code>\u5C5E\u6027\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\uFF0C\u6700\u5C0F\u503C\u4E3A 0\u3002</p>',3),H=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number v-model="num" :disabled="true" indent merge />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num = ref(1)
    return {
      num,
    }
  },
})
<\/script>
`)],-1),K=e("h2",{id:"bu-shu"},[e("a",{class:"header-anchor",href:"#bu-shu"}),l(" \u6B65\u6570")],-1),O=e("p",null,[l("\u5141\u8BB8\u5B9A\u4E49\u9012\u589E\u9012\u51CF\u7684\u6B65\u6570\u63A7\u5236\uFF0C\u8BBE\u7F6E"),e("code",null,"step"),l("\u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6B65\u957F\uFF0C\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"number"),l("\u3002")],-1),R=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number v-model="num" :step="2" indent merge />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num = ref(5)
    return {
      num,
    }
  },
})
<\/script>
`)],-1),Y=e("h2",{id:"yan-ge-bu-shu"},[e("a",{class:"header-anchor",href:"#yan-ge-bu-shu"}),l(" \u4E25\u683C\u6B65\u6570")],-1),Z=e("p",null,[e("code",null,"step-strictly"),l("\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),l("\u3002\u5982\u679C\u8FD9\u4E2A\u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E3A"),e("code",null,"true"),l("\uFF0C\u5219\u53EA\u80FD\u8F93\u5165\u6B65\u6570\u7684\u500D\u6570\u3002")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number v-model="num" :step="2" step-strictly indent merge />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num = ref(2)
    return {
      num,
    }
  },
})
<\/script>
`)],-1),ue=e("h2",{id:"jing-du"},[e("a",{class:"header-anchor",href:"#jing-du"}),l(" \u7CBE\u5EA6")],-1),te=e("p",null,[l("\u8BBE\u7F6E "),e("code",null,"precision"),l(" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6570\u503C\u7CBE\u5EA6\uFF0C\u63A5\u53D7\u4E00\u4E2A "),e("code",null,"number"),l("\u3002")],-1),ne=e("div",null,[e("p",null,[e("code",null,"precision"),l(" \u7684\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5C0F\u4E8E "),e("code",null,"step"),l(" \u7684\u5C0F\u6570\u4F4D\u6570\u3002")])],-1),oe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number
    v-model="num"
    :precision="2"
    :step="0.1"
    :max="10"
    indent
    merge
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num = ref(1)
    return {
      num,
    }
  },
})
<\/script>
`)],-1),de=e("h2",{id:"chi-cun"},[e("a",{class:"header-anchor",href:"#chi-cun"}),l(" \u5C3A\u5BF8")],-1),le=e("p",null,[l("\u989D\u5916\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),l("\u3001"),e("code",null,"lg"),l("\u4EE5\u53CA\u9ED8\u8BA4 \u4E09\u79CD\u5C3A\u5BF8\u7684\u6570\u5B57\u8F93\u5165\u6846")],-1),re=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-group>
    <hl-input-number v-model="num2" size="sm" class="m-r-md" indent merge />
    <hl-input-number v-model="num3" class="m-r-md" indent merge />
    <hl-input-number v-model="num4" size="lg" class="m-r-md" indent merge />
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num2 = ref(1)
    const num3 = ref(1)
    const num4 = ref(1)
    return {
      num2,
      num3,
      num4,
    }
  },
})
<\/script>
`)],-1),me=e("h2",{id:"an-niu-wei-zhi"},[e("a",{class:"header-anchor",href:"#an-niu-wei-zhi"}),l(" \u6309\u94AE\u4F4D\u7F6E")],-1),ae=e("p",null,[l("\u8BBE\u7F6E "),e("code",null,"controls-position"),l(" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E\u3002")],-1),se=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-input-number
      v-model="num"
      :min="1"
      :max="10"
      fill
      block
      indent
      merge
      @change="handleChange"
    />
    <hl-input-number
      v-model="num"
      controls-position="inner"
      :min="1"
      :max="10"
      round
      @change="handleChange"
    />
    <hl-input-number
      v-model="num"
      controls-position="left"
      :min="1"
      :max="10"
      gap="5px"
      @change="handleChange"
    />
    <hl-input-number
      v-model="num"
      controls-position="right"
      :min="1"
      :max="10"
      gap="5px"
      @change="handleChange"
    />
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num = ref(1)
    const handleChange = value => {
      console.log(value)
    }
    return {
      num,
      handleChange,
    }
  },
})
<\/script>
`)],-1),ie=e("h2",{id:"zi-ding-yi-qian-hou-tu-biao-yi-ji-zeng-jian-tu-biao"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-qian-hou-tu-biao-yi-ji-zeng-jian-tu-biao"}),l(" \u81EA\u5B9A\u4E49\u524D\u540E\u56FE\u6807\u4EE5\u53CA\u589E\u51CF\u56FE\u6807")],-1),pe=e("p",null,[l("\u901A\u8FC7"),e("code",null,"prefix"),l("\uFF0C"),e("code",null,"suffix"),l("\uFF0C"),e("code",null,"icon-increase"),l("\uFF0C"),e("code",null,"icon-decrease"),l(" slot\u5B9E\u73B0\u3002")],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number
    v-model="num"
    :min="1"
    :max="10"
    indent
    merge
    class="m-r-md"
    style="width: 180px"
    @change="handleChange"
  >
    <template #prefix>\xA5</template>
    <template #suffix>\u5143</template>
  </hl-input-number>
  <hl-input-number
    v-model="num"
    controls-position="left"
    indent
    merge
    class="m-r-md"
    :min="1"
    :max="10"
    @change="handleChange"
  >
    <template #prefix><hl-icon><two-heart /></hl-icon></template>
    <template #suffix>\u4E2A</template>
  </hl-input-number>
  <hl-input-number
    v-model="num"
    controls-position="right"
    indent
    merge
    :min="1"
    :max="10"
    @change="handleChange"
  >
    <template #suffix><hl-icon><two-heart /></hl-icon></template>
  </hl-input-number>
  <br><br>
  <hl-input-number
    v-model="num"
    controls-position="inner"
    round
    :min="1"
    :max="10"
    @change="handleChange"
  >
    <template #icon-decrease>
      <hl-icon><two-sad /></hl-icon>
    </template>
    <template #icon-increase>
      <hl-icon><two-smile /></hl-icon>
    </template>
  </hl-input-number>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const num = ref(1)
    const handleChange = value => {
      console.log(value)
    }
    return {
      num,
      handleChange,
    }
  },
})
<\/script>
`)],-1),ce=N('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number / undefined</td><td>\u2014</td><td>-</td></tr><tr><td>min</td><td>\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C</td><td>number</td><td>\u2014</td><td>-Infinity</td></tr><tr><td>max</td><td>\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C</td><td>number</td><td>\u2014</td><td>Infinity</td></tr><tr><td>step</td><td>\u8BA1\u6570\u5668\u6B65\u957F</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>step-strictly</td><td>\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>precision</td><td>\u6570\u503C\u7CBE\u5EA6</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>size</td><td>\u8BA1\u6570\u5668\u5C3A\u5BF8</td><td>string</td><td>lg/sm</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>controls</td><td>\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>controls-position</td><td>\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E</td><td>string</td><td>initial/left/right/inner</td><td>initial</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u8F93\u5165\u6846\u5173\u8054\u7684label\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder</td><td>string</td><td>-</td><td>-</td></tr><tr><td>merge</td><td>\u878D\u5408input-number\u8868\u5355\u5143\u7D20</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>indent</td><td>\u7F29\u8FDBinput-number\u8868\u5355\u5143\u7D20</td><td>boolean\u3001string</td><td>-</td><td>false</td></tr><tr><td>gap</td><td>\u95F4\u9699</td><td>string</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u6837\u5F0F</td><td>string</td><td>-</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prefix</td><td>\u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>suffix</td><td>\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9</td></tr><tr><td>icon-decrease</td><td>\u81EA\u5B9A\u4E49\u51CF\u5C11\u56FE\u6807</td></tr><tr><td>icon-increase</td><td>\u81EA\u5B9A\u4E49\u589E\u52A0\u56FE\u6807</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\u65F6\u89E6\u53D1</td><td>currentValue: number | NaN, oldValue: number | NaN</td></tr><tr><td>blur</td><td>\u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F\u7EC4\u4EF6 Input \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr><tr><td>blur</td><td>\u4F7F\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9</td><td>\u2014</td></tr></tbody></table>',8);function Ce(r,t,n,m,p,E){const h=_("hl-demo0"),d=_("demo-block"),a=_("hl-demo1"),u=_("hl-demo2"),o=_("hl-demo3"),s=_("hl-demo4"),f=_("hl-demo5"),c=_("hl-demo6"),D=_("hl-demo7"),x=_("right-nav");return q(),L(M,null,[e("section",null,[W,X,C(d,{fs:""},{source:i(()=>[C(h)]),highlight:i(()=>[J]),default:i(()=>[G]),_:1}),S,C(d,{fs:""},{source:i(()=>[C(a)]),highlight:i(()=>[H]),_:1}),K,O,C(d,{fs:""},{source:i(()=>[C(u)]),highlight:i(()=>[R]),_:1}),Y,Z,C(d,{fs:""},{source:i(()=>[C(o)]),highlight:i(()=>[ee]),_:1}),ue,te,C(d,{fs:""},{source:i(()=>[C(s)]),highlight:i(()=>[oe]),default:i(()=>[ne]),_:1}),de,le,C(d,{fs:""},{source:i(()=>[C(f)]),highlight:i(()=>[re]),_:1}),me,ae,C(d,{fs:""},{source:i(()=>[C(c)]),highlight:i(()=>[se]),_:1}),ie,pe,C(d,{fs:""},{source:i(()=>[C(D)]),highlight:i(()=>[he]),_:1}),ce]),C(x)],64)}var be=Q(T,[["render",Ce]]);export{be as default};
