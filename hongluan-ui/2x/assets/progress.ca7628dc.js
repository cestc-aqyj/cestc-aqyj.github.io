var V=Object.defineProperty;var y=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(n,t,o)=>t in n?V(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,k=(n,t)=>{for(var o in t||(t={}))$.call(t,o)&&S(n,o,t[o]);if(y)for(var o of y(t))j.call(t,o)&&S(n,o,t[o]);return n};import{H as w,L as P,W as M,Q as e,X as E,P as _,a4 as z,S as r,o as O,aL as d}from"./vue.8f5537c1.js";import{H as N}from"./hongluan-icons.35255449.js";import{_ as T}from"./index.4914c8f9.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";const W={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,createVNode:t,Fragment:o,openBlock:h,createElementBlock:m}=d;function g(s,i){const a=n("hl-progress");return h(),m(o,null,[t(a,{type:"disabled",percentage:40,format:s.format,round:"",class:"m-b-xxl"},null,8,["format"]),t(a,{percentage:40,format:s.format,round:"",class:"m-b-xxl"},null,8,["format"]),t(a,{percentage:40,format:s.format,"stroke-width":"3px","show-text":!1,"track-color":"#fff"},null,8,["format"])],64)}const{defineComponent:F}=d,{ref:l}=d;return k({render:g},F({setup(s,{expose:i}){i();const u={format:p=>`${p}%  Complete`,ref:l};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}))}(),"hl-demo1":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:h,createBlock:m}=d;function g(s,i){const a=n("hl-progress"),u=n("hl-col"),p=n("hl-row");return h(),m(p,{gap:"var(--md)"},{default:o(()=>[t(u,{span:"lg:col-8"},{default:o(()=>[t(a,{percentage:68,type:"warning",format:s.formatWarning},null,8,["format"])]),_:1}),t(u,{span:"lg:col-8"},{default:o(()=>[t(a,{percentage:68,type:"success",format:s.formatSuccess},null,8,["format"])]),_:1}),t(u,{span:"lg:col-8"},{default:o(()=>[t(a,{percentage:68,type:"error",format:s.formatDanger},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:F}=d,{ref:l}=d;return k({render:g},F({setup(s,{expose:i}){i();const c={formatSuccess:B=>`${B}%  success`,formatWarning:B=>`${B}%  warning`,formatDanger:B=>`${B}%  danger`,ref:l};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"hl-demo2":function(){const{resolveComponent:n,createVNode:t,withCtx:o,Fragment:h,openBlock:m,createElementBlock:g}=d;function F(u,p){const c=n("hl-progress"),B=n("hl-col"),A=n("hl-row"),v=n("two-minus"),C=n("hl-icon"),x=n("hl-button"),b=n("two-plus"),D=n("hl-group");return m(),g(h,null,[t(A,{gap:"var(--md)"},{default:o(()=>[t(B,{span:"lg:col-8"},{default:o(()=>[t(c,{percentage:u.percentage,color:u.customColor},null,8,["percentage","color"])]),_:1}),t(B,{span:"lg:col-8"},{default:o(()=>[t(c,{percentage:u.percentage,color:u.customColorMethod},null,8,["percentage","color"])]),_:1}),t(B,{span:"lg:col-8"},{default:o(()=>[t(c,{percentage:u.percentage,color:u.customColors},null,8,["percentage","color"])]),_:1})]),_:1}),t(D,{merge:"",indent:"",class:"m-t-lg"},{default:o(()=>[t(x,{class:"group-item",onClick:u.decrease},{icon:o(()=>[t(C,null,{default:o(()=>[t(v)]),_:1})]),_:1},8,["onClick"]),t(x,{class:"group-item",onClick:u.increase},{icon:o(()=>[t(C,null,{default:o(()=>[t(b)]),_:1})]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:l}=d,{ref:f}=d,{TwoMinus:s,TwoPlus:i}=N;return k({render:F},l({setup(u,{expose:p}){p();const c=f(20),B=f("#409eff"),A=f([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),b={percentage:c,customColor:B,customColors:A,customColorMethod:D=>D<30?"#909399":D<70?"#e6a23c":"#67c23a",increase:()=>{c.value+=10,c.value>100&&(c.value=100)},decrease:()=>{c.value-=10,c.value<0&&(c.value=0)},ref:f,TwoMinus:s,TwoPlus:i};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}))}(),"hl-demo3":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:h,createBlock:m}=d;function g(s,i){const a=n("hl-progress"),u=n("hl-col"),p=n("hl-row");return h(),m(p,{gap:"var(--md)"},{default:o(()=>[t(u,{span:12},{default:o(()=>[t(a,{percentage:50,striped:"",format:s.format},null,8,["format"])]),_:1}),t(u,{span:12},{default:o(()=>[t(a,{percentage:50,striped:"",active:"",format:s.formatActive},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:F}=d,{ref:l}=d;return k({render:g},F({setup(s,{expose:i}){i();const p={format:c=>`${c}%  \u9759\u6001\u6761\u7EB9`,formatActive:c=>`${c}%  \u6EDA\u52A8\u6761\u7EB9`,ref:l};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}(),"hl-demo4":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:h,createBlock:m}=d;function g(s,i){const a=n("hl-progress"),u=n("hl-col"),p=n("hl-row");return h(),m(p,{gap:"var(--md)"},{default:o(()=>[t(u,{span:12},{default:o(()=>[t(a,{percentage:50,indicating:"",format:s.format},null,8,["format"])]),_:1}),t(u,{span:12},{default:o(()=>[t(a,{percentage:50,indicating:"",active:"",format:s.formatActive},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:F}=d,{ref:l}=d;return k({render:g},F({setup(s,{expose:i}){i();const p={format:c=>`${c}%  \u9759\u6001`,formatActive:c=>`${c}%  \u8109\u51B2`,ref:l};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}(),"hl-demo5":function(){const{resolveComponent:n,openBlock:t,createBlock:o}=d;function h(l,f){const s=n("hl-progress");return t(),o(s,{"show-as":"stack",stack:l.list},null,8,["stack"])}const{defineComponent:m}=d,{ref:g}=d;return k({render:h},m({setup(l,{expose:f}){f();const i={list:g([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:a=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${a}%`}]),ref:g};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo6":function(){const{resolveComponent:n,createVNode:t,createElementVNode:o,Fragment:h,openBlock:m,createElementBlock:g}=d,F=o("br",null,null,-1);function l(a,u){const p=n("hl-progress");return m(),g(h,null,[t(p,{percentage:75,"stroke-width":"var(--xxs)",text:a.text,"show-as":"line"},null,8,["text"]),F,t(p,{percentage:75,"stroke-width":"1px","hide-label":"","show-as":"line"})],64)}const{defineComponent:f}=d,{ref:s}=d;return k({render:l},f({setup(a,{expose:u}){u();const c={text:s("\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar"),ref:s};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"hl-demo7":function(){const{resolveComponent:n,createVNode:t,Fragment:o,openBlock:h,createElementBlock:m}=d;function g(s,i){const a=n("hl-progress");return h(),m(o,null,[t(a,{percentage:40,format:s.format,round:"",class:"m-b-xxl",align:"items-right"},null,8,["format"]),t(a,{"show-as":"stack",stack:s.list,align:"items-right"},null,8,["stack"])],64)}const{defineComponent:F}=d,{ref:l}=d;return k({render:g},F({setup(s,{expose:i}){i();const a=c=>`${c}%  Complete`,u=l([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:c=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${c}%`}]),p={format:a,list:u,ref:l};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}(),"hl-demo8":function(){const{resolveComponent:n,createVNode:t,toDisplayString:o,createElementVNode:h,withCtx:m,openBlock:g,createBlock:F}=d,l={class:"progress-content"};function f(i,a){const u=n("hl-progress"),p=n("hl-group");return g(),F(p,{indent:"var(--lg)"},{default:m(()=>[t(u,{"show-as":"circle",percentage:80}),t(u,{"show-as":"circle","stroke-width":"4px",percentage:70,color:"#f00","track-color":"rgba(0,0,0, 0.01)"},{default:m(({percentage:c})=>[h("div",l,[h("h5",null,"\u6D4B\u8BD5\uFF1A"+o(c),1)])]),_:1}),t(u,{"show-as":"circle",type:"info","stroke-width":"4px",percentage:50,text:"Label"})]),_:1})}return k({render:f},{})}(),"hl-demo9":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:h,createBlock:m}=d;function g(u,p){const c=n("two-minus"),B=n("hl-icon"),A=n("hl-button"),v=n("hl-progress"),C=n("two-plus"),x=n("hl-group"),b=n("hl-col"),D=n("hl-row");return h(),m(D,null,{default:o(()=>[t(b,{span:"md:col-12"},{default:o(()=>[t(x,{indent:"var(--md)",class:"items-middle"},{default:o(()=>[t(A,{onClick:u.decrease},{icon:o(()=>[t(B,null,{default:o(()=>[t(c)]),_:1})]),_:1},8,["onClick"]),t(v,{"show-as":"dashboard",percentage:u.percentage,color:u.colors},null,8,["percentage","color"]),t(A,{onClick:u.increase},{icon:o(()=>[t(B,null,{default:o(()=>[t(C)]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),t(b,{span:"md:col-12"},{default:o(()=>[t(v,{"show-as":"dashboard",percentage:u.percentage2,color:u.colors},null,8,["percentage","color"])]),_:1})]),_:1})}const{defineComponent:F}=d,{ref:l,onMounted:f}=d,{TwoMinus:s,TwoPlus:i}=N;return k({render:g},F({setup(u,{expose:p}){p();const c=l(10),B=l(0),A=l([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),v=()=>{c.value+=10,c.value>100&&(c.value=100)},C=()=>{c.value-=10,c.value<0&&(c.value=0)};f(()=>{setInterval(()=>{B.value=B.value%100+10},500)});const x={percentage:c,percentage2:B,colors:A,increase:v,decrease:C,ref:l,onMounted:f,TwoMinus:s,TwoPlus:i};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}))}(),"hl-demo10":function(){const{createElementVNode:n,resolveComponent:t,withCtx:o,createVNode:h,toDisplayString:m,Fragment:g,openBlock:F,createElementBlock:l}=d,f=n("span",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),s={class:"progress-label"},i={class:"progress-percentage"};function a(B,A){const v=t("hl-progress");return F(),l(g,null,[h(v,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:o(()=>[f]),_:1}),h(v,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:o(({percentage:C,text:x})=>[n("span",s,m(x),1),n("span",i,m(C)+"%",1)]),_:1}),h(v,{"show-as":"stack",stack:B.list,class:"m-b-xxl"},{default:o(({percentage:C})=>[n("strong",null,"\u8FDB\u5EA6\uFF1A"+m(C)+"%",1)]),_:1},8,["stack"])],64)}const{defineComponent:u}=d,{ref:p}=d;return k({render:a},u({setup(B,{expose:A}){A();const C={list:p([{percentage:35},{percentage:20,type:"warning"},{percentage:20,type:"error"}]),ref:p};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}))}()}},L=e("h1",null,"Progress \u8FDB\u5EA6\u6761",-1),I=e("p",null,"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\uFF0C\u544A\u77E5\u7528\u6237\u5F53\u524D\u72B6\u6001\u548C\u9884\u671F\u3002",-1),H=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),r(" \u57FA\u7840\u7528\u6CD5")],-1),q=e("div",null,[e("p",null,[r("\u6DFB\u52A0"),e("code",null,"percentage"),r("\u5C5E\u6027\u5373\u53EF\uFF0C\u8868\u793A\u8FDB\u5EA6\u6761\u5BF9\u5E94\u7684\u767E\u5206\u6BD4\uFF0C"),e("strong",null,"\u5FC5\u586B"),r("\uFF0C\u5FC5\u987B\u5728 0-100\u3002\u901A\u8FC7 "),e("code",null,"format"),r(" \u5C5E\u6027\u6765\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9\u3002")])],-1),Q=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress type="disabled" :percentage="40" :format="format" round class="m-b-xxl" />
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" />
  <hl-progress :percentage="40" :format="format" stroke-width="3px" :show-text="false" track-color="#fff" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  Complete\`
}

<\/script>
`)],-1),X=e("h2",{id:"jin-du-tiao-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-du-tiao-zhuang-tai"}),r(" \u8FDB\u5EA6\u6761\u72B6\u6001")],-1),U=e("p",null,[r("\u6DFB\u52A0"),e("code",null,"type"),r("\u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001\u3002")],-1),G=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="warning" :format="formatWarning" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="success" :format="formatSuccess" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="error" :format="formatDanger" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formatSuccess = percentage => {
  return \`\${percentage}%  success\`
}
const formatWarning = percentage => {
  return \`\${percentage}%  warning\`
}
const formatDanger = percentage => {
  return \`\${percentage}%  danger\`
}
<\/script>
`)],-1),J=e("h2",{id:"jie-duan-yan-se"},[e("a",{class:"header-anchor",href:"#jie-duan-yan-se"}),r(" \u9636\u6BB5\u989C\u8272")],-1),K=e("p",null,[r("\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"color"),r(" \u8BBE\u7F6E\u8FDB\u5EA6\u6761\u4E0D\u540C\u9636\u6BB5\u7684\u989C\u8272\uFF0C"),e("code",null,"color"),r(" \u53EF\u4EE5\u63A5\u53D7\u989C\u8272\u5B57\u7B26\u4E32\uFF0C\u51FD\u6570\u548C\u6570\u7EC4\u3002")],-1),R=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColor" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColorMethod" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColors" />
    </hl-col>
  </hl-row>

  <hl-group merge indent class="m-t-lg">
    <hl-button class="group-item" @click="decrease">
      <template #icon>
        <hl-icon><two-minus /></hl-icon>
      </template>
    </hl-button>
    <hl-button class="group-item" @click="increase">
      <template #icon>
        <hl-icon><two-plus /></hl-icon>
      </template>
    </hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'


const percentage = ref(20)
const customColor = ref('#409eff')
const customColors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
])

const customColorMethod = percentage => {
  if (percentage < 30) {
    return '#909399'
  } else if (percentage < 70) {
    return '#e6a23c'
  } else {
    return '#67c23a'
  }
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}

<\/script>
`)],-1),Y=e("h2",{id:"tiao-wen-zhuang"},[e("a",{class:"header-anchor",href:"#tiao-wen-zhuang"}),r(" \u6761\u7EB9\u72B6")],-1),Z=e("p",null,[r("\u6DFB\u52A0"),e("code",null,"striped"),r("\u5C5E\u6027\u8BBE\u7F6E\u6761\u7EB9\u72B6, \u6DFB\u52A0"),e("code",null,"active"),r("\u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u7EB9\u3002")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col :span="12">
      <hl-progress :percentage="50" striped :format="format" />
    </hl-col>
    <hl-col :span="12">
      <hl-progress :percentage="50" striped active :format="formatActive" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  \u9759\u6001\u6761\u7EB9\`
}
const formatActive = percentage => {
  return \`\${percentage}%  \u6EDA\u52A8\u6761\u7EB9\`
}

<\/script>
`)],-1),te=e("h2",{id:"mai-chong-zhuang"},[e("a",{class:"header-anchor",href:"#mai-chong-zhuang"}),r(" \u8109\u51B2\u72B6")],-1),oe=e("p",null,[r("\u6DFB\u52A0"),e("code",null,"indicating"),r("\u5C5E\u6027\u8BBE\u7F6E\u9759\u6001\u8109\u51B2\u72B6, \u6DFB\u52A0"),e("code",null,"active"),r("\u5C5E\u6027\u8BBE\u7F6E\u8109\u51B2\u72B6\u3002")],-1),ne=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col :span="12">
      <hl-progress :percentage="50" indicating :format="format" />
    </hl-col>
    <hl-col :span="12">
      <hl-progress :percentage="50" indicating active :format="formatActive" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  \u9759\u6001\`
}
const formatActive = percentage => {
  return \`\${percentage}%  \u8109\u51B2\`
}

<\/script>
`)],-1),re=e("h2",{id:"dui-die-zhuang"},[e("a",{class:"header-anchor",href:"#dui-die-zhuang"}),r(" \u5806\u53E0\u72B6")],-1),ue=e("p",null,[r("\u6DFB\u52A0\u5C5E\u6027"),e("code",null,"show-as"),r("\u503C\u4E3A"),e("code",null,"stack"),r("\u65F6\u53D8\u4E3A\u5806\u53E0\u72B6\uFF0C\u7528 "),e("code",null,"stack"),r(" \u4F20\u53C2\u3002")],-1),ce=e("div",null,[e("p",null,[r("\u53EF\u9009\u503C\uFF1A"),e("code",null,"percentage"),r(","),e("code",null,"type"),r(","),e("code",null,"striped"),r(","),e("code",null,"indicating"),r(","),e("code",null,"active"),r(","),e("code",null,"format"),r(" \u7B49\u5C5E\u6027")])],-1),le=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress show-as="stack" :stack="list" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  {
    percentage: 35,
    type: '',
    striped: true,
    active: false,
  },
  {
    percentage: 20,
    type: 'warning',
    indicating: true,
    active: true,
  },
  {
    percentage: 20,
    type: 'error',
    format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,
  },
])

<\/script>
`)],-1),se=e("h2",{id:"xian-tiao-yang-shi"},[e("a",{class:"header-anchor",href:"#xian-tiao-yang-shi"}),r(" \u7EBF\u6761\u6837\u5F0F")],-1),ae=e("p",null,[r("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"show-as"),r("\u4E3A "),e("code",null,"line"),r(" \u6837\u5F0F\u5373\u53EF\u5C55\u73B0\u4E00\u79CD\u65B0\u7684\u5F62\u6001")],-1),pe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress :percentage="75" stroke-width="var(--xxs)" :text="text" show-as="line" />
  <br>
  <hl-progress :percentage="75" stroke-width="1px" hide-label show-as="line" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar')

<\/script>
`)],-1),de=e("h2",{id:"dui-qi-fang-shi"},[e("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),r(" \u5BF9\u9F50\u65B9\u5F0F")],-1),ie=e("p",null,[r("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"align"),r("\u4E3A "),e("code",null,"left"),r(),e("code",null,"center"),r(),e("code",null,"right"),r(" \u6837\u5F0F\u5373\u53EF\u6539\u53D8\u8FDB\u5EA6\u6761\u7684\u5BF9\u9F50\u65B9\u5F0F")],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" align="items-right" />

  <hl-progress show-as="stack" :stack="list" align="items-right" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = percentage => {
  return \`\${percentage}%  Complete\`
}

const list = ref([
  {
    percentage: 35,
    type: '',
    striped: true,
    active: false,
  },
  {
    percentage: 20,
    type: 'warning',
    indicating: true,
    active: true,
  },
  {
    percentage: 20,
    type: 'error',
    format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,
  },
])

<\/script>
`)],-1),me=e("h2",{id:"huan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#huan-xing-jin-du-tiao"}),r(" \u73AF\u5F62\u8FDB\u5EA6\u6761")],-1),_e=e("p",null,[r("Progress \u7EC4\u4EF6\u53EF\u901A\u8FC7 "),e("code",null,"show-as"),r(" \u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF0C\u5728\u73AF\u5F62\u8FDB\u5EA6\u6761\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"width"),r(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u5176\u5927\u5C0F\u3002")],-1),ge=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-group indent="var(--lg)">
    <hl-progress show-as="circle" :percentage="80" />
    <hl-progress show-as="circle" stroke-width="4px" :percentage="70" color="#f00" track-color="rgba(0,0,0, 0.01)">
      <template #default="{percentage}">
        <div class="progress-content">
          <h5>\u6D4B\u8BD5\uFF1A{{ percentage }}</h5>
        </div>
      </template>
    </hl-progress>
    <hl-progress show-as="circle" type="info" stroke-width="4px" :percentage="50" text="Label" />
  </hl-group>
</template>
`)],-1),fe=e("h2",{id:"yi-biao-pan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#yi-biao-pan-xing-jin-du-tiao"}),r(" \u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761")],-1),Be=e("p",null,[r("\u901A\u8FC7 "),e("code",null,'show-as="dashboard"'),r("\u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761\u3002")],-1),Ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="md:col-12">
      <hl-group indent="var(--md)" class="items-middle">
        <hl-button @click="decrease">
          <template #icon>
            <hl-icon><two-minus /></hl-icon>
          </template>
        </hl-button>
        <hl-progress show-as="dashboard" :percentage="percentage" :color="colors" />
        <hl-button @click="increase">
          <template #icon>
            <hl-icon><two-plus /></hl-icon>
          </template>
        </hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12">
      <hl-progress show-as="dashboard" :percentage="percentage2" :color="colors" />
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'

const percentage = ref(10)
const percentage2 = ref(0)
const colors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
])

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}

onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})

<\/script>
`)],-1),Fe=e("h2",{id:"zi-ding-yi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),r(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),Ce=e("p",null,"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),ve=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">
    <span>\u81EA\u5B9A\u4E49\u5185\u5BB9</span>
  </hl-progress>

  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">
    <template #default="{percentage, text}">
      <span class="progress-label">{{ text }}</span>
      <span class="progress-percentage">{{ percentage }}%</span>
    </template>
  </hl-progress>

  <hl-progress show-as="stack" :stack="list" class="m-b-xxl">
    <template #default="{percentage}">
      <strong>\u8FDB\u5EA6\uFF1A{{ percentage }}%</strong>
    </template>
  </hl-progress>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  {
    percentage: 35,
  },
  {
    percentage: 20,
    type: 'warning',
  },
  {
    percentage: 20,
    type: 'error',
  },
])

<\/script>
`)],-1),Ae=O('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>percentage</td><td>\u767E\u5206\u6BD4</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>show-as</td><td>\u8FDB\u5EA6\u6761\u5C55\u73B0\u5F62\u5F0F</td><td>string</td><td>stack / circle / dashboard / line</td><td>\u2014</td></tr><tr><td>stroke-width</td><td>\u8FDB\u5EA6\u6761\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001</td><td>string</td><td>success / warning / error</td><td>\u2014</td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF08\u4F1A\u8986\u76D6\u72B6\u6001\u989C\u8272\uFF09(show-as \u4E3A stack \u65F6\u4E0D\u53EF\u7528)</td><td>string/function/array</td><td>\u2014</td><td></td></tr><tr><td>track-color</td><td>\u8FDB\u5EA6\u6761\u8F68\u9053\u989C\u8272</td><td>string</td><td>\u2014</td><td></td></tr><tr><td>show-text</td><td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>function(percentage)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>text</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u63CF\u8FF0\u6587\u5B57\uFF0C\u4E3B\u8981\u7528\u5728 line=true \u65F6\uFF0C\u663E\u793A\u5DE6\u4FA7\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>stack</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u96C6\u5408\uFF08\u53EA\u5728 show-as \u4E3A stack \u65F6\u53EF\u7528\uFF09</td><td>array[{percentage, type, striped, indicating, active, format}]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>align</td><td>\u8FDB\u5EA6\u6761\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u9ED8\u8BA4\u4E3A { percentage, text }\uFF0Cshow-as=stack \u65F6{percentage, type, striped, indicating, active, format}</td></tr></tbody></table>',4);function we(n,t,o,h,m,g){const F=w("hl-demo0"),l=w("demo-block"),f=w("hl-demo1"),s=w("hl-demo2"),i=w("hl-demo3"),a=w("hl-demo4"),u=w("hl-demo5"),p=w("hl-demo6"),c=w("hl-demo7"),B=w("hl-demo8"),A=w("hl-demo9"),v=w("hl-demo10"),C=w("right-nav");return P(),M(z,null,[e("section",null,[L,I,H,E(l,{fs:""},{source:_(()=>[E(F)]),highlight:_(()=>[Q]),default:_(()=>[q]),_:1}),X,U,E(l,{fs:""},{source:_(()=>[E(f)]),highlight:_(()=>[G]),_:1}),J,K,E(l,{fs:""},{source:_(()=>[E(s)]),highlight:_(()=>[R]),_:1}),Y,Z,E(l,{fs:""},{source:_(()=>[E(i)]),highlight:_(()=>[ee]),_:1}),te,oe,E(l,{fs:""},{source:_(()=>[E(a)]),highlight:_(()=>[ne]),_:1}),re,ue,E(l,{fs:""},{source:_(()=>[E(u)]),highlight:_(()=>[le]),default:_(()=>[ce]),_:1}),se,ae,E(l,{fs:""},{source:_(()=>[E(p)]),highlight:_(()=>[pe]),_:1}),de,ie,E(l,{fs:""},{source:_(()=>[E(c)]),highlight:_(()=>[he]),_:1}),me,_e,E(l,{fs:""},{source:_(()=>[E(B)]),highlight:_(()=>[ge]),_:1}),fe,Be,E(l,{fs:""},{source:_(()=>[E(A)]),highlight:_(()=>[Ee]),_:1}),Fe,Ce,E(l,{fs:""},{source:_(()=>[E(v)]),highlight:_(()=>[ve]),_:1}),Ae]),E(C)],64)}var Ne=T(W,[["render",we]]);export{Ne as default};
