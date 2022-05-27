var P=Object.defineProperty;var y=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var N=(r,n,o)=>n in r?P(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,A=(r,n)=>{for(var o in n||(n={}))O.call(n,o)&&N(r,o,n[o]);if(y)for(var o of y(n))T.call(n,o)&&N(r,o,n[o]);return r};import{H as b,L as H,W as L,Q as e,X as E,P as h,a4 as $,S as d,o as S,aJ as i}from"./vue.059774a0.js";import{H as q}from"./hongluan-icons.5b925e95.js";import{_ as Q}from"./index.c1538894.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const R={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:r,createVNode:n,Fragment:o,openBlock:m,createElementBlock:_}=i;function p(u,t){const c=r("hl-input-number");return m(),_(o,null,[n(c,{modelValue:u.num,"onUpdate:modelValue":t[0]||(t[0]=C=>u.num=C),min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57",indent:"",merge:"",onChange:u.handleChange},null,8,["modelValue","onChange"]),n(c,{modelValue:u.num,"onUpdate:modelValue":t[1]||(t[1]=C=>u.num=C),class:"m-l-lg",style:{width:"180px"},min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57",gap:"var(--sm)",round:"",onChange:u.handleChange},null,8,["modelValue","onChange"])],64)}const{defineComponent:g}=i,{ref:l}=i;return A({render:p},g({setup(u,{expose:t}){t();const a={num:l(1),handleChange:f=>{console.log(f)},ref:l};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hl-demo1":function(){const{resolveComponent:r,openBlock:n,createBlock:o}=i;function m(l,s){const u=r("hl-input-number");return n(),o(u,{modelValue:l.num,"onUpdate:modelValue":s[0]||(s[0]=t=>l.num=t),disabled:!0,indent:"",merge:""},null,8,["modelValue"])}const{defineComponent:_}=i,{ref:p}=i;return A({render:m},_({setup(l,{expose:s}){s();const t={num:p(1),ref:p};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo2":function(){const{resolveComponent:r,openBlock:n,createBlock:o}=i;function m(l,s){const u=r("hl-input-number");return n(),o(u,{modelValue:l.num,"onUpdate:modelValue":s[0]||(s[0]=t=>l.num=t),step:2,indent:"",merge:""},null,8,["modelValue"])}const{defineComponent:_}=i,{ref:p}=i;return A({render:m},_({setup(l,{expose:s}){s();const t={num:p(5),ref:p};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo3":function(){const{resolveComponent:r,openBlock:n,createBlock:o}=i;function m(l,s){const u=r("hl-input-number");return n(),o(u,{modelValue:l.num,"onUpdate:modelValue":s[0]||(s[0]=t=>l.num=t),step:2,"step-strictly":"",indent:"",merge:""},null,8,["modelValue"])}const{defineComponent:_}=i,{ref:p}=i;return A({render:m},_({setup(l,{expose:s}){s();const t={num:p(2),ref:p};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo4":function(){const{resolveComponent:r,openBlock:n,createBlock:o}=i;function m(l,s){const u=r("hl-input-number");return n(),o(u,{modelValue:l.num,"onUpdate:modelValue":s[0]||(s[0]=t=>l.num=t),precision:2,step:.1,max:10,indent:"",merge:""},null,8,["modelValue","step"])}const{defineComponent:_}=i,{ref:p}=i;return A({render:m},_({setup(l,{expose:s}){s();const t={num:p(1),ref:p};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo5":function(){const{resolveComponent:r,createVNode:n,withCtx:o,openBlock:m,createBlock:_}=i;function p(u,t){const c=r("hl-input-number"),C=r("hl-group");return m(),_(C,null,{default:o(()=>[n(c,{modelValue:u.num2,"onUpdate:modelValue":t[0]||(t[0]=a=>u.num2=a),size:"sm",class:"m-r-md",indent:"",merge:""},null,8,["modelValue"]),n(c,{modelValue:u.num3,"onUpdate:modelValue":t[1]||(t[1]=a=>u.num3=a),class:"m-r-md",indent:"",merge:""},null,8,["modelValue"]),n(c,{modelValue:u.num4,"onUpdate:modelValue":t[2]||(t[2]=a=>u.num4=a),size:"lg",class:"m-r-md",indent:"",merge:""},null,8,["modelValue"])]),_:1})}const{defineComponent:g}=i,{ref:l}=i;return A({render:p},g({setup(u,{expose:t}){t();const c=l(1),C=l(1),a=l(1),f={num2:c,num3:C,num4:a,ref:l};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}(),"hl-demo6":function(){const{resolveComponent:r,createVNode:n,withCtx:o,openBlock:m,createBlock:_}=i;function p(u,t){const c=r("hl-input-number"),C=r("hl-group");return m(),_(C,{gap:"var(--md)"},{default:o(()=>[n(c,{modelValue:u.num,"onUpdate:modelValue":t[0]||(t[0]=a=>u.num=a),min:1,max:10,fill:"",block:"",indent:"",merge:"",onChange:u.handleChange},null,8,["modelValue","onChange"]),n(c,{modelValue:u.num,"onUpdate:modelValue":t[1]||(t[1]=a=>u.num=a),"controls-position":"inner",min:1,max:10,round:"",onChange:u.handleChange},null,8,["modelValue","onChange"]),n(c,{modelValue:u.num,"onUpdate:modelValue":t[2]||(t[2]=a=>u.num=a),"controls-position":"left",min:1,max:10,gap:"5px",onChange:u.handleChange},null,8,["modelValue","onChange"]),n(c,{modelValue:u.num,"onUpdate:modelValue":t[3]||(t[3]=a=>u.num=a),"controls-position":"right",min:1,max:10,gap:"5px",onChange:u.handleChange},null,8,["modelValue","onChange"])]),_:1})}const{defineComponent:g}=i,{ref:l}=i;return A({render:p},g({setup(u,{expose:t}){t();const a={num:l(1),handleChange:f=>{console.log(f)},ref:l};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hl-demo7":function(){const{createTextVNode:r,resolveComponent:n,withCtx:o,createVNode:m,createElementVNode:_,Fragment:p,openBlock:g,createElementBlock:l}=i,s=r("\xA5"),u=r("\u5143"),t=r("\u4E2A"),c=_("br",null,null,-1),C=_("br",null,null,-1);function a(F,B){const D=n("hl-input-number"),w=n("two-heart"),v=n("hl-icon"),k=n("two-arrow-left"),I=n("two-arrow-right");return g(),l(p,null,[m(D,{modelValue:F.num,"onUpdate:modelValue":B[0]||(B[0]=V=>F.num=V),min:1,max:10,indent:"",merge:"",class:"m-r-md",style:{width:"180px"},onChange:F.handleChange},{prefix:o(()=>[s]),suffix:o(()=>[u]),_:1},8,["modelValue","onChange"]),m(D,{modelValue:F.num,"onUpdate:modelValue":B[1]||(B[1]=V=>F.num=V),"controls-position":"left",indent:"","deep-merge":"",class:"m-r-md",min:1,max:10,onChange:F.handleChange},{prefix:o(()=>[m(v,null,{default:o(()=>[m(w)]),_:1})]),suffix:o(()=>[t]),_:1},8,["modelValue","onChange"]),m(D,{modelValue:F.num,"onUpdate:modelValue":B[2]||(B[2]=V=>F.num=V),"controls-position":"right",indent:"","deep-merge":"",min:1,max:10,onChange:F.handleChange},{suffix:o(()=>[m(v,null,{default:o(()=>[m(w)]),_:1})]),_:1},8,["modelValue","onChange"]),c,C,m(D,{modelValue:F.num,"onUpdate:modelValue":B[3]||(B[3]=V=>F.num=V),"controls-position":"inner",min:1,max:10,onChange:F.handleChange},{"icon-decrease":o(()=>[m(v,null,{default:o(()=>[m(k)]),_:1})]),"icon-increase":o(()=>[m(v,null,{default:o(()=>[m(I)]),_:1})]),_:1},8,["modelValue","onChange"])],64)}const{defineComponent:f}=i,{ref:x}=i,{TwoHeart:U,TwoArrowLeft:j,TwoArrowRight:z}=q;return A({render:a},f({setup(F,{expose:B}){B();const v={num:x(1),handleChange:k=>{console.log(k)},ref:x,TwoHeart:U,TwoArrowLeft:j,TwoArrowRight:z};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}))}()}},W=e("h1",null,"InputNumber \u8BA1\u6570\u5668",-1),X=e("p",null,"\u8BA1\u6570\u5668\u7531 Group \u5BB9\u5668\u548C\u5B50\u6210\u5458 Button\uFF0C Input \u7EC4\u4EF6\u7EC4\u6210\u3002\u6240\u4EE5\u5B83\u4E5F\u62E5\u6709\u8FD9\u4E9B\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002",-1),G=e("div",null,[e("p",null,[d("\u5728 InputNumber \u7EC4\u4EF6\u4E2D\u4F7F\u7528"),e("code",null,"v-model"),d("\u7ED1\u5B9A\u53D8\u91CF\u5373\u53EF\uFF0C\u53D8\u91CF\u7684\u521D\u59CB\u503C\u5373\u4E3A\u9ED8\u8BA4\u503C\u3002")])],-1),J=e("pre",null,[e("code",{class:"html"},` <template>
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

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = value => {
  console.log(value)
}
<\/script>
`)],-1),M=S('<div class="doc-tip"><p>\u5F53\u8F93\u5165\u975E\u6CD5\u5B57\u7B26\u4E32\u65F6\uFF0Cinput\u7684\u4E8B\u4EF6\u5C06\u4F1A\u53D1\u51FANaN\u503C\uFF0C\u800C\u4E0D\u662F\u629B\u51FA\u9519\u8BEF</p></div><h2 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai"></a> \u7981\u7528\u72B6\u6001</h2><p><code>disabled</code>\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A<code>boolean</code>\uFF0C\u8BBE\u7F6E\u4E3A<code>true</code>\u5373\u53EF\u7981\u7528\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u5982\u679C\u4F60\u53EA\u9700\u8981\u63A7\u5236\u6570\u503C\u5728\u67D0\u4E00\u8303\u56F4\u5185\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>min</code>\u5C5E\u6027\u548C<code>max</code>\u5C5E\u6027\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\uFF0C\u6700\u5C0F\u503C\u4E3A 0\u3002</p>',3),K=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number v-model="num" :disabled="true" indent merge />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)

<\/script>
`)],-1),Y=e("h2",{id:"bu-shu"},[e("a",{class:"header-anchor",href:"#bu-shu"}),d(" \u6B65\u6570")],-1),Z=e("p",null,[d("\u5141\u8BB8\u5B9A\u4E49\u9012\u589E\u9012\u51CF\u7684\u6B65\u6570\u63A7\u5236\uFF0C\u8BBE\u7F6E"),e("code",null,"step"),d("\u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6B65\u957F\uFF0C\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"number"),d("\u3002")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number v-model="num" :step="2" indent merge />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(5)

<\/script>
`)],-1),te=e("h2",{id:"yan-ge-bu-shu"},[e("a",{class:"header-anchor",href:"#yan-ge-bu-shu"}),d(" \u4E25\u683C\u6B65\u6570")],-1),ue=e("p",null,[e("code",null,"step-strictly"),d("\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),d("\u3002\u5982\u679C\u8FD9\u4E2A\u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E3A"),e("code",null,"true"),d("\uFF0C\u5219\u53EA\u80FD\u8F93\u5165\u6B65\u6570\u7684\u500D\u6570\u3002")],-1),ne=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number v-model="num" :step="2" step-strictly indent merge />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(2)

<\/script>
`)],-1),oe=e("h2",{id:"jing-du"},[e("a",{class:"header-anchor",href:"#jing-du"}),d(" \u7CBE\u5EA6")],-1),le=e("p",null,[d("\u8BBE\u7F6E "),e("code",null,"precision"),d(" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6570\u503C\u7CBE\u5EA6\uFF0C\u63A5\u53D7\u4E00\u4E2A "),e("code",null,"number"),d("\u3002")],-1),de=e("div",null,[e("p",null,[e("code",null,"precision"),d(" \u7684\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\uFF0C\u5E76\u4E14\u4E0D\u80FD\u5C0F\u4E8E "),e("code",null,"step"),d(" \u7684\u5C0F\u6570\u4F4D\u6570\u3002")])],-1),re=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input-number
    v-model="num"
    :precision="2"
    :step="0.1"
    :max="10"
    indent
    merge
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
<\/script>
`)],-1),me=e("h2",{id:"chi-cun"},[e("a",{class:"header-anchor",href:"#chi-cun"}),d(" \u5C3A\u5BF8")],-1),se=e("p",null,[d("\u989D\u5916\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),d("\u3001"),e("code",null,"lg"),d("\u4EE5\u53CA\u9ED8\u8BA4 \u4E09\u79CD\u5C3A\u5BF8\u7684\u6570\u5B57\u8F93\u5165\u6846")],-1),ae=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-group>
    <hl-input-number v-model="num2" size="sm" class="m-r-md" indent merge />
    <hl-input-number v-model="num3" class="m-r-md" indent merge />
    <hl-input-number v-model="num4" size="lg" class="m-r-md" indent merge />
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num2 = ref(1)
const num3 = ref(1)
const num4 = ref(1)

<\/script>
`)],-1),ie=e("h2",{id:"an-niu-wei-zhi"},[e("a",{class:"header-anchor",href:"#an-niu-wei-zhi"}),d(" \u6309\u94AE\u4F4D\u7F6E")],-1),pe=e("p",null,[d("\u8BBE\u7F6E "),e("code",null,"controls-position"),d(" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E\u3002")],-1),ce=e("pre",null,[e("code",{class:"html"},` <template>
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

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = value => {
  console.log(value)
}
<\/script>
`)],-1),he=e("h2",{id:"zi-ding-yi-qian-hou-tu-biao-yi-ji-zeng-jian-tu-biao"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-qian-hou-tu-biao-yi-ji-zeng-jian-tu-biao"}),d(" \u81EA\u5B9A\u4E49\u524D\u540E\u56FE\u6807\u4EE5\u53CA\u589E\u51CF\u56FE\u6807")],-1),_e=e("p",null,[d("\u901A\u8FC7"),e("code",null,"prefix"),d("\uFF0C"),e("code",null,"suffix"),d("\uFF0C"),e("code",null,"icon-increase"),d("\uFF0C"),e("code",null,"icon-decrease"),d(" slot\u5B9E\u73B0\u3002")],-1),Ee=e("pre",null,[e("code",{class:"html"},` <template>
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
    deep-merge
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
    deep-merge
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
    :min="1"
    :max="10"
    @change="handleChange"
  >
    <template #icon-decrease>
      <hl-icon><two-arrow-left /></hl-icon>
    </template>
    <template #icon-increase>
      <hl-icon><two-arrow-right /></hl-icon>
    </template>
  </hl-input-number>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoHeart, TwoArrowLeft, TwoArrowRight } from '@hongluan-ui/icons'

const num = ref(1)
const handleChange = value => {
  console.log(value)
}

<\/script>
`)],-1),Ce=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number / undefined</td><td>\u2014</td><td>-</td></tr><tr><td>min</td><td>\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C</td><td>number</td><td>\u2014</td><td>-Infinity</td></tr><tr><td>max</td><td>\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C</td><td>number</td><td>\u2014</td><td>Infinity</td></tr><tr><td>step</td><td>\u8BA1\u6570\u5668\u6B65\u957F</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>step-strictly</td><td>\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>precision</td><td>\u6570\u503C\u7CBE\u5EA6</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>size</td><td>\u8BA1\u6570\u5668\u5C3A\u5BF8</td><td>string</td><td>lg/sm</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>controls</td><td>\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>controls-position</td><td>\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E</td><td>string</td><td>initial/left/right/inner</td><td>initial</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u8F93\u5165\u6846\u5173\u8054\u7684label\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder</td><td>string</td><td>-</td><td>-</td></tr><tr><td>merge</td><td>\u878D\u5408input-number\u8868\u5355\u5143\u7D20</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>deep-merge</td><td>\u6DF1\u5EA6\u878D\u5408input-number\u8868\u5355\u5143\u7D20</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>indent</td><td>\u7F29\u8FDBinput-number\u8868\u5355\u5143\u7D20</td><td>boolean\u3001string</td><td>-</td><td>false</td></tr><tr><td>gap</td><td>\u95F4\u9699</td><td>string</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u6837\u5F0F</td><td>string</td><td>-</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>value-on-clear</td><td>\u5F53\u8F93\u5165\u6846\u4E3A\u7A7A\u65F6\uFF0C\u5E94\u8BBE\u7F6E\u7684\u503C</td><td>string / number / null</td><td>min/max</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prefix</td><td>\u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>suffix</td><td>\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9</td></tr><tr><td>icon-decrease</td><td>\u81EA\u5B9A\u4E49\u51CF\u5C11\u56FE\u6807</td></tr><tr><td>icon-increase</td><td>\u81EA\u5B9A\u4E49\u589E\u52A0\u56FE\u6807</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\u65F6\u89E6\u53D1</td><td>currentValue: number | NaN, oldValue: number | NaN</td></tr><tr><td>blur</td><td>\u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F\u7EC4\u4EF6 Input \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr><tr><td>blur</td><td>\u4F7F\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9</td><td>\u2014</td></tr></tbody></table>',8);function ge(r,n,o,m,_,p){const g=b("hl-demo0"),l=b("demo-block"),s=b("hl-demo1"),u=b("hl-demo2"),t=b("hl-demo3"),c=b("hl-demo4"),C=b("hl-demo5"),a=b("hl-demo6"),f=b("hl-demo7"),x=b("right-nav");return H(),L($,null,[e("section",null,[W,X,E(l,{fs:""},{source:h(()=>[E(g)]),highlight:h(()=>[J]),default:h(()=>[G]),_:1}),M,E(l,{fs:""},{source:h(()=>[E(s)]),highlight:h(()=>[K]),_:1}),Y,Z,E(l,{fs:""},{source:h(()=>[E(u)]),highlight:h(()=>[ee]),_:1}),te,ue,E(l,{fs:""},{source:h(()=>[E(t)]),highlight:h(()=>[ne]),_:1}),oe,le,E(l,{fs:""},{source:h(()=>[E(c)]),highlight:h(()=>[re]),default:h(()=>[de]),_:1}),me,se,E(l,{fs:""},{source:h(()=>[E(C)]),highlight:h(()=>[ae]),_:1}),ie,pe,E(l,{fs:""},{source:h(()=>[E(a)]),highlight:h(()=>[ce]),_:1}),he,_e,E(l,{fs:""},{source:h(()=>[E(f)]),highlight:h(()=>[Ee]),_:1}),Ce]),E(x)],64)}var De=Q(R,[["render",ge]]);export{De as default};
