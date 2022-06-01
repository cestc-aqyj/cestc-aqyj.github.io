var z=Object.defineProperty;var S=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var U=(t,l,u)=>l in t?z(t,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[l]=u,y=(t,l)=>{for(var u in l||(l={}))O.call(l,u)&&U(t,u,l[u]);if(S)for(var u of S(l))$.call(l,u)&&U(t,u,l[u]);return t};import{H as k,L,W as Q,Q as e,X as h,P as i,a4 as W,S as p,o as X,aL as r}from"./vue.8f5537c1.js";import{_ as H}from"./index.4914c8f9.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const q={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:t,resolveComponent:l,createVNode:u,Fragment:_,openBlock:v,createElementBlock:F}=r,m={class:"block"},s=t("span",{class:"demonstration"},"\u9ED8\u8BA4",-1),C={class:"block"},n=t("span",{class:"demonstration"},"\u81EA\u5B9A\u4E49\u521D\u59CB\u503C",-1),o={class:"block"},a=t("span",{class:"demonstration"},"\u9690\u85CF Tooltip",-1),d={class:"block"},b=t("span",{class:"demonstration"},"\u683C\u5F0F\u5316 Tooltip",-1),c={class:"block"},V=t("span",{class:"demonstration"},"\u7981\u7528",-1);function w(E,B){const g=l("hl-slider");return v(),F(_,null,[t("div",m,[s,u(g,{modelValue:E.value1,"onUpdate:modelValue":B[0]||(B[0]=f=>E.value1=f)},null,8,["modelValue"])]),t("div",C,[n,u(g,{modelValue:E.value2,"onUpdate:modelValue":B[1]||(B[1]=f=>E.value2=f)},null,8,["modelValue"])]),t("div",o,[a,u(g,{modelValue:E.value3,"onUpdate:modelValue":B[2]||(B[2]=f=>E.value3=f),"show-tooltip":!1},null,8,["modelValue"])]),t("div",d,[b,u(g,{modelValue:E.value4,"onUpdate:modelValue":B[3]||(B[3]=f=>E.value4=f),"format-tooltip":E.formatTooltip},null,8,["modelValue","format-tooltip"])]),t("div",c,[V,u(g,{modelValue:E.value5,"onUpdate:modelValue":B[4]||(B[4]=f=>E.value5=f),disabled:""},null,8,["modelValue"])])],64)}const{defineComponent:D}=r,{ref:A}=r;return y({render:w},D({setup(E,{expose:B}){B();const g=A(0),f=A(50),j=A(36),P=A(48),T=A(42),N={value1:g,value2:f,value3:j,value4:P,value5:T,formatTooltip:x=>x/100,ref:A};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}}))}(),"hl-demo1":function(){const{createElementVNode:t,resolveComponent:l,createVNode:u,Fragment:_,openBlock:v,createElementBlock:F}=r,m={class:"block"},s=t("span",{class:"demonstration"},"\u4E0D\u663E\u793A\u95F4\u65AD\u70B9",-1),C={class:"block"},n=t("span",{class:"demonstration"},"\u663E\u793A\u95F4\u65AD\u70B9",-1);function o(c,V){const w=l("hl-slider");return v(),F(_,null,[t("div",m,[s,u(w,{modelValue:c.value1,"onUpdate:modelValue":V[0]||(V[0]=D=>c.value1=D),step:10},null,8,["modelValue"])]),t("div",C,[n,u(w,{modelValue:c.value2,"onUpdate:modelValue":V[1]||(V[1]=D=>c.value2=D),step:10,"show-stops":""},null,8,["modelValue"])])],64)}const{defineComponent:a}=r,{ref:d}=r;return y({render:o},a({setup(c,{expose:V}){V();const w=d(0),D=d(0),A={value1:w,value2:D,ref:d};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}}))}(),"hl-demo2":function(){const{resolveComponent:t,createVNode:l,withCtx:u,openBlock:_,createBlock:v}=r;function F(n,o){const a=t("hl-slider"),d=t("hl-col"),b=t("hl-row");return _(),v(b,null,{default:u(()=>[l(d,{span:"col"},{default:u(()=>[l(a,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=c=>n.value=c),type:"primary"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:u(()=>[l(a,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c),type:"danger"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:u(()=>[l(a,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=c=>n.value=c),type:"warning"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:u(()=>[l(a,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=c=>n.value=c),type:"success"},null,8,["modelValue"])]),_:1}),l(d,{span:"col"},{default:u(()=>[l(a,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=c=>n.value=c),type:"info"},null,8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:m}=r,{ref:s}=r;return y({render:F},m({setup(n,{expose:o}){o();const d={value:s(50),ref:s};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}))}(),"hl-demo3":function(){const{resolveComponent:t,createVNode:l,openBlock:u,createElementBlock:_}=r,v={class:"block"};function F(n,o){const a=t("hl-slider");return u(),_("div",v,[l(a,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=d=>n.value=d),range:"","show-stops":"",max:10},null,8,["modelValue"])])}const{defineComponent:m}=r,{ref:s}=r;return y({render:F},m({setup(n,{expose:o}){o();const d={value:s([4,8]),ref:s};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}))}(),"hl-demo4":function(){const{resolveComponent:t,createVNode:l,openBlock:u,createElementBlock:_}=r,v={class:"block"};function F(n,o){const a=t("hl-slider");return u(),_("div",v,[l(a,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=d=>n.value=d),vertical:"",height:"200px"},null,8,["modelValue"])])}const{defineComponent:m}=r,{ref:s}=r;return y({render:F},m({setup(n,{expose:o}){o();const d={value:s(0),ref:s};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}))}(),"hl-demo5":function(){const{resolveComponent:t,createVNode:l,openBlock:u,createElementBlock:_}=r,v={class:"block"};function F(n,o){const a=t("hl-slider");return u(),_("div",v,[l(a,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=d=>n.value=d),range:"",marks:n.marks},null,8,["modelValue","marks"])])}const{defineComponent:m}=r,{ref:s}=r;return y({render:F},m({setup(n,{expose:o}){o();const a=s([30,60]),d=s({0:"0\xB0C",8:"8\xB0C",37:"37\xB0C",50:{style:{color:"#1989FA"},label:"50%"}}),b={value:a,marks:d,ref:s};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}))}()}},G=e("h1",null,"Slider \u6ED1\u5757",-1),I=e("p",null,"\u901A\u8FC7\u62D6\u52A8\u6ED1\u5757\u5728\u4E00\u4E2A\u56FA\u5B9A\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9",-1),J=e("div",null,[e("p",null,"\u901A\u8FC7\u8BBE\u7F6E\u7ED1\u5B9A\u503C\u81EA\u5B9A\u4E49\u6ED1\u5757\u7684\u521D\u59CB\u503C")],-1),K=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <span class="demonstration">\u9ED8\u8BA4</span>
    <hl-slider v-model="value1" />
  </div>
  <div class="block">
    <span class="demonstration">\u81EA\u5B9A\u4E49\u521D\u59CB\u503C</span>
    <hl-slider v-model="value2" />
  </div>
  <div class="block">
    <span class="demonstration">\u9690\u85CF Tooltip</span>
    <hl-slider v-model="value3" :show-tooltip="false" />
  </div>
  <div class="block">
    <span class="demonstration">\u683C\u5F0F\u5316 Tooltip</span>
    <hl-slider v-model="value4" :format-tooltip="formatTooltip" />
  </div>
  <div class="block">
    <span class="demonstration">\u7981\u7528</span>
    <hl-slider v-model="value5" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(50)
const value3 = ref(36)
const value4 = ref(48)
const value5 = ref(42)

const formatTooltip = val => {
  return val / 100
}
<\/script>
`)],-1),M=e("h2",{id:"chi-san-zhi"},[e("a",{class:"header-anchor",href:"#chi-san-zhi"}),p(" \u79BB\u6563\u503C")],-1),R=e("p",null,"\u9009\u9879\u53EF\u4EE5\u662F\u79BB\u6563\u7684",-1),Y=e("div",null,[e("p",null,[p("\u6539\u53D8"),e("code",null,"step"),p("\u7684\u503C\u53EF\u4EE5\u6539\u53D8\u6B65\u957F\uFF0C\u901A\u8FC7\u8BBE\u7F6E"),e("code",null,"show-stops"),p("\u5C5E\u6027\u53EF\u4EE5\u663E\u793A\u95F4\u65AD\u70B9")])],-1),Z=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <span class="demonstration">\u4E0D\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value1" :step="10" />
  </div>
  <div class="block">
    <span class="demonstration">\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value2" :step="10" show-stops />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)

<\/script>
`)],-1),ee=e("h2",{id:"zhuang-tai-se"},[e("a",{class:"header-anchor",href:"#zhuang-tai-se"}),p(" \u72B6\u6001\u8272")],-1),te=e("p",null,"Slider \u4E5F\u652F\u6301\u72B6\u6001\u8272",-1),ue=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <hl-slider v-model="value" type="primary" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="danger" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="warning" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="success" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="info" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)

<\/script>
`)],-1),oe=e("h2",{id:"fan-wei-xuan-ze"},[e("a",{class:"header-anchor",href:"#fan-wei-xuan-ze"}),p(" \u8303\u56F4\u9009\u62E9")],-1),le=e("p",null,"\u652F\u6301\u9009\u62E9\u67D0\u4E00\u6570\u503C\u8303\u56F4",-1),ne=e("div",null,[e("p",null,[p("\u8BBE\u7F6E"),e("code",null,"range"),p("\u5373\u53EF\u5F00\u542F\u8303\u56F4\u9009\u62E9\uFF0C\u6B64\u65F6\u7ED1\u5B9A\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u5143\u7D20\u5206\u522B\u4E3A\u6700\u5C0F\u8FB9\u754C\u503C\u548C\u6700\u5927\u8FB9\u754C\u503C")])],-1),de=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-slider v-model="value" range show-stops :max="10" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([4, 8])

<\/script>
`)],-1),se=e("h2",{id:"shu-xiang-mo-shi"},[e("a",{class:"header-anchor",href:"#shu-xiang-mo-shi"}),p(" \u7AD6\u5411\u6A21\u5F0F")],-1),ae=e("div",null,[e("p",null,[p("\u8BBE\u7F6E"),e("code",null,"vertical"),p("\u53EF\u4F7F Slider \u53D8\u6210\u7AD6\u5411\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6"),e("code",null,"height"),p("\u5C5E\u6027")])],-1),re=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-slider v-model="value" vertical height="200px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)

<\/script>
`)],-1),ce=e("h2",{id:"zhan-shi-biao-ji"},[e("a",{class:"header-anchor",href:"#zhan-shi-biao-ji"}),p(" \u5C55\u793A\u6807\u8BB0")],-1),ie=e("div",null,[e("p",null,[p("\u8BBE\u7F6E "),e("code",null,"marks"),p(" \u5C5E\u6027\u53EF\u4EE5\u5C55\u793A\u6807\u8BB0")])],-1),pe=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-slider v-model="value" range :marks="marks" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([30, 60])
const marks = ref({
  0: '0\xB0C',
  8: '8\xB0C',
  37: '37\xB0C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
})
<\/script>
`)],-1),me=X('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td>\u2014</td><td>100</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>step</td><td>\u6B65\u957F</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-stops</td><td>\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-tooltip</td><td>\u662F\u5426\u663E\u793A tooltip</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format-tooltip</td><td>\u683C\u5F0F\u5316 tooltip message</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>vertical</td><td>\u662F\u5426\u7AD6\u5411\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>height</td><td>Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>debounce</td><td>\u8F93\u5165\u65F6\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2\uFF0C\u4EC5\u5728<code>show-input</code>\u7B49\u4E8E true \u65F6\u6709\u6548</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>tooltip-class</td><td>tooltip \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>marks</td><td>\u6807\u8BB0\uFF0C key \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A number \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 <code>[min, max]</code> \u5185\uFF0C\u6BCF\u4E2A\u6807\u8BB0\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-start-label</td><td>\u5F53\u4E3A<code>range</code>\u65F6, \u5C4F\u5E55\u9605\u8BFB\u5668\u8BFB\u53D6\u7684\u8303\u56F4\u5F00\u59CB\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-end-label</td><td>\u5F53\u4E3A<code>range</code>\u65F6, \u5C4F\u5E55\u9605\u8BFB\u5668\u8BFB\u53D6\u7684\u8303\u56F4\u7ED3\u675F\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>format-value-text</td><td>\u4E3A\u5C4F\u5E55\u9605\u8BFB\u5668\u683C\u5F0F\u5316 <code>aria-valuenow</code> \u5C5E\u6027\u503C</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr><tr><td>input</td><td>\u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u6D3B\u52A8\u8FC7\u7A0B\u5B9E\u65F6\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr></tbody></table>',4);function he(t,l,u,_,v,F){const m=k("hl-demo0"),s=k("demo-block"),C=k("hl-demo1"),n=k("hl-demo2"),o=k("hl-demo3"),a=k("hl-demo4"),d=k("hl-demo5"),b=k("right-nav");return L(),Q(W,null,[e("section",null,[G,I,h(s,{fs:""},{source:i(()=>[h(m)]),highlight:i(()=>[K]),default:i(()=>[J]),_:1}),M,R,h(s,{fs:""},{source:i(()=>[h(C)]),highlight:i(()=>[Z]),default:i(()=>[Y]),_:1}),ee,te,h(s,{fs:""},{source:i(()=>[h(n)]),highlight:i(()=>[ue]),_:1}),oe,le,h(s,{fs:""},{source:i(()=>[h(o)]),highlight:i(()=>[de]),default:i(()=>[ne]),_:1}),se,h(s,{fs:""},{source:i(()=>[h(a)]),highlight:i(()=>[re]),default:i(()=>[ae]),_:1}),ce,h(s,{fs:""},{source:i(()=>[h(d)]),highlight:i(()=>[pe]),default:i(()=>[ie]),_:1}),me]),h(b)],64)}var Ae=H(q,[["render",he]]);export{Ae as default};
