var U=Object.defineProperty,I=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var q=(u,o,t)=>o in u?U(u,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[o]=t,N=(u,o)=>{for(var t in o||(o={}))L.call(o,t)&&q(u,t,o[t]);if(P)for(var t of P(o))j.call(o,t)&&q(u,t,o[t]);return u},w=(u,o)=>I(u,R(o));import{H as x,L as S,W as $,Q as e,X as C,P as p,a4 as H,aJ as f,S as r,o as Q}from"./vue.059774a0.js";import{H as W}from"./hongluan-icons.5b925e95.js";import{_ as X}from"./index.6a62691a.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";const G={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,openBlock:E,createBlock:F}=f,h=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),i=u("\u706B\u72D0\u6D4F\u89C8\u5668"),b=u("\u6B27\u670B\u6D4F\u89C8\u5668");function _(d,n){const a=o("hl-tab-pane"),c=o("hl-tabs");return E(),F(c,{modelValue:d.activeName,"onUpdate:modelValue":n[0]||(n[0]=m=>d.activeName=m),onTabClick:d.handleClick},{default:t(()=>[l(a,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[h]),_:1}),l(a,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[i]),_:1}),l(a,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[b]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:B}=f;return N({render:_},{setup(){return{activeName:B("second"),handleClick:(a,c)=>{console.log(a,c)}}}})}(),"hl-demo1":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,openBlock:E,createBlock:F}=f,h=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),i=u("\u706B\u72D0\u6D4F\u89C8\u5668"),b=u("\u6B27\u670B\u6D4F\u89C8\u5668");function _(d,n){const a=o("hl-tab-pane"),c=o("hl-tabs");return E(),F(c,{modelValue:d.activeName,"onUpdate:modelValue":n[0]||(n[0]=m=>d.activeName=m),type:"line",onTabClick:d.handleClick},{default:t(()=>[l(a,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[h]),_:1}),l(a,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[i]),_:1}),l(a,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[b]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:B}=f;return N({render:_},{setup(){return{activeName:B("first"),handleClick:(a,c)=>{console.log(a,c)}}}})}(),"hl-demo2":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,openBlock:E,createBlock:F}=f,h=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),i=u("\u706B\u72D0\u6D4F\u89C8\u5668"),b=u("\u6B27\u670B\u6D4F\u89C8\u5668");function _(d,n){const a=o("hl-tab-pane"),c=o("hl-tabs");return E(),F(c,{modelValue:d.activeName,"onUpdate:modelValue":n[0]||(n[0]=m=>d.activeName=m),type:"button",onTabClick:d.handleClick},{default:t(()=>[l(a,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[h]),_:1}),l(a,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[i]),_:1}),l(a,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[b]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:B}=f;return N({render:_},{setup(){return{activeName:B("first"),handleClick:(a,c)=>{console.log(a,c)}}}})}(),"hl-demo3":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,openBlock:E,createBlock:F}=f,h=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),i=u("\u706B\u72D0\u6D4F\u89C8\u5668"),b=u("\u6B27\u670B\u6D4F\u89C8\u5668");function _(d,n){const a=o("hl-tab-pane"),c=o("hl-tabs");return E(),F(c,{modelValue:d.activeName,"onUpdate:modelValue":n[0]||(n[0]=m=>d.activeName=m),"nav-padding":"var(--xxl)",onTabClick:d.handleClick},{default:t(()=>[l(a,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[h]),_:1}),l(a,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[i]),_:1}),l(a,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[b]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:B}=f;return N({render:_},{setup(){return{activeName:B("second"),handleClick:(a,c)=>{console.log(a,c)}}}})}(),"hl-demo4":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,openBlock:E,createBlock:F}=f,h=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),i=u("\u706B\u72D0\u6D4F\u89C8\u5668"),b=u("\u6B27\u670B\u6D4F\u89C8\u5668");function _(d,n){const a=o("hl-tab-pane"),c=o("hl-tabs");return E(),F(c,{modelValue:d.activeName,"onUpdate:modelValue":n[0]||(n[0]=m=>d.activeName=m),gap:"var(--md)",onTabClick:d.handleClick},{default:t(()=>[l(a,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[h]),_:1}),l(a,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[i]),_:1}),l(a,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[b]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:B}=f;return N({render:_},{setup(){return{activeName:B("second"),handleClick:(a,c)=>{console.log(a,c)}}}})}(),"hl-demo5":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,openBlock:E,createBlock:F}=f,h=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),i=u("\u706B\u72D0\u6D4F\u89C8\u5668"),b=u("\u6B27\u670B\u6D4F\u89C8\u5668");function _(d,n){const a=o("hl-tab-pane"),c=o("hl-tabs");return E(),F(c,{modelValue:d.activeName,"onUpdate:modelValue":n[0]||(n[0]=m=>d.activeName=m),"nav-height":"80px",onTabClick:d.handleClick},{default:t(()=>[l(a,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[h]),_:1}),l(a,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[i]),_:1}),l(a,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[b]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:B}=f;return N({render:_},{setup(){return{activeName:B("second"),handleClick:(a,c)=>{console.log(a,c)}}}})}(),"hl-demo6":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,openBlock:E,createBlock:F}=f,h=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),i=u("\u706B\u72D0\u6D4F\u89C8\u5668"),b=u("\u6B27\u670B\u6D4F\u89C8\u5668");function _(d,n){const a=o("hl-tab-pane"),c=o("hl-tabs");return E(),F(c,{modelValue:d.activeName,"onUpdate:modelValue":n[0]||(n[0]=m=>d.activeName=m),"pane-height":"calc(var(--xxl) * 6)",onTabClick:d.handleClick},{default:t(()=>[l(a,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[h]),_:1}),l(a,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[i]),_:1}),l(a,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[b]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:B}=f;return N({render:_},{setup(){return{activeName:B("second"),handleClick:(a,c)=>{console.log(a,c)}}}})}(),"hl-demo7":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,Fragment:E,openBlock:F,createElementBlock:h}=f,i=u("top"),b=u("right"),_=u("bottom"),B=u("left"),v=u("\u8C37\u6B4C\u6D4F\u89C8\u5668"),d=u("\u706B\u72D0\u6D4F\u89C8\u5668"),n=u("\u6B27\u670B\u6D4F\u89C8\u5668");function a(s,D){const T=o("hl-radio"),g=o("hl-radio-group"),k=o("hl-tab-pane"),V=o("hl-tabs");return F(),h(E,null,[l(g,{modelValue:s.tabPosition,"onUpdate:modelValue":D[0]||(D[0]=A=>s.tabPosition=A),style:{"margin-bottom":"30px"}},{default:t(()=>[l(T,{label:"top"},{default:t(()=>[i]),_:1}),l(T,{label:"right"},{default:t(()=>[b]),_:1}),l(T,{label:"bottom"},{default:t(()=>[_]),_:1}),l(T,{label:"left"},{default:t(()=>[B]),_:1})]),_:1},8,["modelValue"]),l(V,{"tab-position":s.tabPosition,type:"button",style:{height:"200px"}},{default:t(()=>[l(k,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668"},{default:t(()=>[v]),_:1}),l(k,{label:"\u706B\u72D0\u6D4F\u89C8\u5668"},{default:t(()=>[d]),_:1}),l(k,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:t(()=>[n]),_:1})]),_:1},8,["tab-position"])],64)}const{ref:c}=f;return N({render:a},{setup(){return{tabPosition:c("top")}}})}(),"hl-demo8":function(){const{resolveComponent:u,createVNode:o,withCtx:t,createTextVNode:l,openBlock:E,createBlock:F}=f,h=l(" \u6211\u7684\u884C\u7A0B "),i=l(" \u6211\u7684\u884C\u7A0B "),b=l("\u6D88\u606F\u4E2D\u5FC3"),_=l("\u6B27\u670B\u6D4F\u89C8\u5668");function B(a,c){const m=u("two-application"),s=u("hl-icon"),D=u("hl-tab-pane"),T=u("hl-tabs");return E(),F(T,null,{default:t(()=>[o(D,null,{label:t(()=>[o(s,{class:"sm m-r-xs"},{default:t(()=>[o(m)]),_:1}),h]),default:t(()=>[i]),_:1}),o(D,{label:"\u6D88\u606F\u4E2D\u5FC3"},{default:t(()=>[b]),_:1}),o(D,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:t(()=>[_]),_:1})]),_:1})}const{defineComponent:v}=f,{TwoApplication:d}=W,n=v({components:{TwoApplication:d}});return N({render:B},n)}(),"hl-demo9":function(){const{renderList:u,Fragment:o,openBlock:t,createElementBlock:l,toDisplayString:E,createTextVNode:F,resolveComponent:h,withCtx:i,createBlock:b}=f;function _(n,a){const c=h("hl-tab-pane"),m=h("hl-tabs");return t(),b(m,{modelValue:n.editableTabsValue,"onUpdate:modelValue":a[0]||(a[0]=s=>n.editableTabsValue=s),editable:"",onEdit:n.handleTabsEdit},{default:i(()=>[(t(!0),l(o,null,u(n.editableTabs,s=>(t(),b(c,{key:s.name,label:s.title,name:s.name},{default:i(()=>[F(E(s.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onEdit"])}const{reactive:B,toRefs:v}=f;return N({render:_},{setup(){const n=B({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),a=(c,m)=>{if(m==="add"){let s=++n.tabIndex+"";n.editableTabs.push({title:"New Tab",name:s,content:"New Tab content"}),n.editableTabsValue=s}if(m==="remove"){let s=n.editableTabs,D=n.editableTabsValue;D===c&&s.forEach((T,g)=>{if(T.name===c){let k=s[g+1]||s[g-1];k&&(D=k.name)}}),n.editableTabsValue=D,n.editableTabs=s.filter(T=>T.name!==c)}};return w(N({},v(n)),{handleTabsEdit:a})}})}(),"hl-demo10":function(){const{createTextVNode:u,resolveComponent:o,withCtx:t,createVNode:l,createElementVNode:E,renderList:F,Fragment:h,openBlock:i,createElementBlock:b,toDisplayString:_,createBlock:B}=f,v={style:{"margin-bottom":"20px"}},d=u(" add tab ");function n(s,D){const T=o("hl-button"),g=o("hl-tab-pane"),k=o("hl-tabs");return i(),b(h,null,[E("div",v,[l(T,{size:"sm",onClick:D[0]||(D[0]=V=>s.addTab(s.editableTabsValue))},{default:t(()=>[d]),_:1})]),l(k,{modelValue:s.editableTabsValue,"onUpdate:modelValue":D[1]||(D[1]=V=>s.editableTabsValue=V),type:"line",closable:"",onTabRemove:s.removeTab},{default:t(()=>[(i(!0),b(h,null,F(s.editableTabs,V=>(i(),B(g,{key:V.name,label:V.title,name:V.name},{default:t(()=>[u(_(V.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onTabRemove"])],64)}const{reactive:a,toRefs:c}=f;return N({render:n},{setup(){const s=a({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),D=()=>{let g=++s.tabIndex+"";s.editableTabs.push({title:"New Tab",name:g,content:"New Tab content"}),s.editableTabsValue=g},T=g=>{let k=s.editableTabs,V=s.editableTabsValue;V===g&&k.forEach((A,y)=>{if(A.name===g){let z=k[y+1]||k[y-1];z&&(V=z.name)}}),s.editableTabsValue=V,s.editableTabs=k.filter(A=>A.name!==g)};return w(N({},c(s)),{addTab:D,removeTab:T})}})}()}},J=e("h1",null,"Tabs \u6807\u7B7E\u9875",-1),K=e("p",null,"Tabs \u7528\u4E8E\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1),M=e("div",null,[e("p",null,[r("Tabs \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u6807\u7B7E\u529F\u80FD\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"value"),r(" \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u3002")])],-1),O=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('second')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),Y=e("h2",{id:"line-yang-shi"},[e("a",{class:"header-anchor",href:"#line-yang-shi"}),r(" Line \u6837\u5F0F")],-1),Z=e("p",null,[r("\u53EA\u9700\u8981\u8BBE\u7F6E "),e("code",null,"type"),r(" \u5C5E\u6027\u4E3A "),e("code",null,"line"),r(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u7EBF\u6761\u98CE\u683C\u3002")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" type="line" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('first')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),te=e("h2",{id:"button-yang-shi"},[e("a",{class:"header-anchor",href:"#button-yang-shi"}),r(" Button \u6837\u5F0F")],-1),ue=e("p",null,[r("\u53EA\u9700\u8981\u8BBE\u7F6E "),e("code",null,"type"),r(" \u5C5E\u6027\u4E3A "),e("code",null,"button"),r(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u6309\u94AE\u98CE\u683C\u3002")],-1),ae=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" type="button" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('first')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),oe=e("h2",{id:"paddingshu-xing"},[e("a",{class:"header-anchor",href:"#paddingshu-xing"}),r(" Padding\u5C5E\u6027")],-1),ne=e("p",null,[e("code",null,"nav-padding"),r(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u7684\u4E24\u4FA7\u586B\u5145\u5C3A\u5BF8\uFF0C\u5B83\u53EA\u63A5\u6536"),e("code",null,"\u5B57\u7B26\u4E32"),r(" \u7C7B\u578B\u3002")],-1),le=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" nav-padding="var(--xxl)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('second')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),de=e("h2",{id:"gapshu-xing"},[e("a",{class:"header-anchor",href:"#gapshu-xing"}),r(" Gap\u5C5E\u6027")],-1),ce=e("p",null,[e("code",null,"gap"),r(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5B83\u53EA\u63A5\u6536"),e("code",null,"\u5B57\u7B26\u4E32"),r(" \u7C7B\u578B\u3002")],-1),se=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" gap="var(--md)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('second')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),ie=e("h2",{id:"biao-qian-gao-du-she-zhi"},[e("a",{class:"header-anchor",href:"#biao-qian-gao-du-she-zhi"}),r(" \u6807\u7B7E\u9AD8\u5EA6\u8BBE\u7F6E")],-1),re=e("p",null,[e("code",null,"nav-height"),r(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u6807\u7B7E\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),e("code",null,"\u5B57\u7B26\u4E32"),r(" \u7C7B\u578B\u3002")],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" nav-height="80px" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('second')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),be=e("h2",{id:"nei-rong-qu-gao-du-she-zhi"},[e("a",{class:"header-anchor",href:"#nei-rong-qu-gao-du-she-zhi"}),r(" \u5185\u5BB9\u533A\u9AD8\u5EA6\u8BBE\u7F6E")],-1),me=e("p",null,[e("code",null,"pane-height"),r(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),e("code",null,"\u5B57\u7B26\u4E32"),r(" \u7C7B\u578B\u3002")],-1),pe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" pane-height="calc(var(--xxl) * 6)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('second')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),_e=e("h2",{id:"wei-zhi"},[e("a",{class:"header-anchor",href:"#wei-zhi"}),r(" \u4F4D\u7F6E")],-1),Be=e("p",null,[r("\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"tab-position"),r(" \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E")],-1),Ce=e("div",null,[e("p",null,[r("\u6807\u7B7E\u4E00\u5171\u6709\u56DB\u4E2A\u65B9\u5411\u7684\u8BBE\u7F6E "),e("code",null,'tabPosition="left|right|top|bottom"')])],-1),Ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <hl-radio label="top">top</hl-radio>
    <hl-radio label="right">right</hl-radio>
    <hl-radio label="bottom">bottom</hl-radio>
    <hl-radio label="left">left</hl-radio>
  </hl-radio-group>

  <hl-tabs :tab-position="tabPosition" type="button" style="height: 200px;">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const tabPosition = ref('top')
    return { tabPosition }
  },
}
<\/script>
`)],-1),Fe=e("h2",{id:"zi-ding-yi-biao-qian-ye"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian-ye"}),r(" \u81EA\u5B9A\u4E49\u6807\u7B7E\u9875")],-1),fe=e("p",null,[r("\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),e("code",null,"slot"),r(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875\u7684\u5185\u5BB9")],-1),De=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs>
    <hl-tab-pane>
      <template #label>
        <hl-icon class="sm m-r-xs"><two-application /></hl-icon>
        \u6211\u7684\u884C\u7A0B
      </template>
      \u6211\u7684\u884C\u7A0B
    </hl-tab-pane>
    <hl-tab-pane label="\u6D88\u606F\u4E2D\u5FC3">\u6D88\u606F\u4E2D\u5FC3</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoApplication } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoApplication },
})
<\/script>
`)],-1),ve=e("h2",{id:"dong-tai-zeng-jian-biao-qian-ye"},[e("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-qian-ye"}),r(" \u52A8\u6001\u589E\u51CF\u6807\u7B7E\u9875")],-1),Te=e("p",null,"\u589E\u51CF\u6807\u7B7E\u9875\u6309\u94AE\u53EA\u80FD\u5728\u6807\u7B7E\u6837\u5F0F\u7684\u6807\u7B7E\u9875\u4E0B\u4F7F\u7528",-1),Ne=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="editableTabsValue" editable @edit="handleTabsEdit">
    <hl-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex: 2,
    })
    const handleTabsEdit = (targetName, action) => {
      if (action === 'add') {
        let newTabName = ++state.tabIndex + ''
        state.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        })
        state.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        let tabs = state.editableTabs
        let activeName = state.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        state.editableTabsValue = activeName
        state.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }

    return { ...toRefs(state), handleTabsEdit }
  },
}
<\/script>
`)],-1),ge=e("h2",{id:"zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"}),r(" \u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875\u89E6\u53D1\u5668")],-1),ke=e("pre",null,[e("code",{class:"html"},` <template>
  <div style="margin-bottom: 20px;">
    <hl-button size="sm" @click="addTab(editableTabsValue)">
      add tab
    </hl-button>
  </div>
  <hl-tabs
    v-model="editableTabsValue"
    type="line"
    closable
    @tab-remove="removeTab"
  >
    <hl-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex: 2,
    })

    const addTab = () => {
      let newTabName = ++state.tabIndex + ''
      state.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      })
      state.editableTabsValue = newTabName
    }

    const removeTab = targetName => {
      let tabs = state.editableTabs
      let activeName = state.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      state.editableTabsValue = activeName
      state.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
    return { ...toRefs(state), addTab, removeTab }
  },
}
<\/script>
`)],-1),Ve=Q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u6807\u7B7E\u7684 name</td><td>string / number</td><td>\u2014</td><td>\u7B2C\u4E00\u4E2A\u6807\u7B7E\u7684 name</td></tr><tr><td>type</td><td>\u98CE\u683C\u7C7B\u578B</td><td>string</td><td>line</td><td>\u663E\u793A\u4E3A\u7EBF\u6761\u6837\u5F0F</td></tr><tr><td>nav-height</td><td>\u6807\u7B7E\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>nav-padding</td><td>\u6807\u7B7E\u7684\u586B\u5145\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u6807\u7B7E\u7684\u95F4\u9694\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>pane-height</td><td>\u5185\u5BB9\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-pane</td><td>\u662F\u5426\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>addable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6807\u7B7E\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tab-position</td><td>\u6807\u7B7E\u6240\u5728\u4F4D\u7F6E</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u963B\u6B62\u5207\u6362\u3002</td><td>Function(activeName, oldActiveName)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-click</td><td>tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B</td></tr><tr><td>tab-change</td><td><code>activeName</code>\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(name: <code>TabPanelName</code>)</td></tr><tr><td>tab-remove</td><td>\u70B9\u51FB tab \u79FB\u9664\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name</td></tr><tr><td>tab-add</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>edit</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1</td><td>(targetName, action)</td></tr></tbody></table><h2 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes"></a> Tab Pane Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6807\u7B7E\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u4E0E\u6807\u7B7E\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u6807\u7B7E\u522B\u540D</td><td>string / number</td><td>\u2014</td><td>\u8BE5\u6807\u7B7E\u5728\u6807\u7B7E\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u6807\u7B7E\u5219\u4E3A&#39;1&#39;</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lazy</td><td>\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',6);function xe(u,o,t,l,E,F){const h=x("hl-demo0"),i=x("demo-block"),b=x("hl-demo1"),_=x("hl-demo2"),B=x("hl-demo3"),v=x("hl-demo4"),d=x("hl-demo5"),n=x("hl-demo6"),a=x("hl-demo7"),c=x("hl-demo8"),m=x("hl-demo9"),s=x("hl-demo10"),D=x("right-nav");return S(),$(H,null,[e("section",null,[J,K,C(i,{fs:""},{source:p(()=>[C(h)]),highlight:p(()=>[O]),default:p(()=>[M]),_:1}),Y,Z,C(i,{fs:""},{source:p(()=>[C(b)]),highlight:p(()=>[ee]),_:1}),te,ue,C(i,{fs:""},{source:p(()=>[C(_)]),highlight:p(()=>[ae]),_:1}),oe,ne,C(i,{fs:""},{source:p(()=>[C(B)]),highlight:p(()=>[le]),_:1}),de,ce,C(i,{fs:""},{source:p(()=>[C(v)]),highlight:p(()=>[se]),_:1}),ie,re,C(i,{fs:""},{source:p(()=>[C(d)]),highlight:p(()=>[he]),_:1}),be,me,C(i,{fs:""},{source:p(()=>[C(n)]),highlight:p(()=>[pe]),_:1}),_e,Be,C(i,{fs:""},{source:p(()=>[C(a)]),highlight:p(()=>[Ee]),default:p(()=>[Ce]),_:1}),Fe,fe,C(i,{fs:""},{source:p(()=>[C(c)]),highlight:p(()=>[De]),_:1}),ve,Te,C(i,{fs:""},{source:p(()=>[C(m)]),highlight:p(()=>[Ne]),_:1}),ge,C(i,{fs:""},{source:p(()=>[C(s)]),highlight:p(()=>[ke]),_:1}),Ve]),C(D)],64)}var Ue=X(G,[["render",xe]]);export{Ue as default};
