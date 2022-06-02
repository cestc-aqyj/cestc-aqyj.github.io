import{p as B,R as b,F as l,L as e,C as c,P as t,W as d,ad as T,M as o,S as y,a2 as h,X as a,$ as L,Q as n,V as k,o as E}from"./vue.651ae949.js";const I=B({setup(x){const i=b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]);return(w,v)=>{const r=l("hl-list-item"),m=l("hl-list");return e(),c(m,null,{default:t(()=>[(e(!0),d(h,null,T(i.value,(p,u)=>(e(),c(r,{key:u},{default:t(()=>[o(y(p.content),1)]),_:2},1024))),128))]),_:1})}}});var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const F=B({setup(x){const i=b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),w=b([{value:"",label:"default"},{value:"border-x",label:"border-x"},{value:"bordered",label:"bordered"}]),v=b("");return(r,m)=>{const p=l("hl-option"),u=l("hl-select"),_=l("hl-list-item"),g=l("hl-list"),O=l("hl-col"),C=l("hl-row");return e(),d(h,null,[a(u,{modelValue:v.value,"onUpdate:modelValue":m[0]||(m[0]=f=>v.value=f),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:t(()=>[(e(!0),d(h,null,T(w.value,f=>(e(),d(h,null,[f.divider?(e(),c(p,{key:f.value,divider:""})):(e(),c(p,{key:f.value,label:f.label,value:f.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(C,null,{default:t(()=>[a(O,{span:"md:col-12"},{default:t(()=>[a(g,{border:v.value},{default:t(()=>[(e(!0),d(h,null,T(i.value,(f,G)=>(e(),c(_,{key:G,to:{path:f.path}},{default:t(()=>[o(y(f.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["border"])]),_:1})]),_:1})],64)}}});var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const $=o(" listGap\uFF1A "),V=o(" itemGap\uFF1A "),z=B({setup(x){const i=b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoAirplay",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoDatabase",content:"Transition \u52A8\u753B",path:"/"}]),w=b([{value:"0",label:"none"},{divider:!0},{value:"var(--xxs)",label:"xxs"},{value:"var(--xs)",label:"xs"},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),v=b("0"),r=b("var(--sm)");return(m,p)=>{const u=l("hl-option"),_=l("hl-select"),g=l("hl-list-item"),O=l("hl-list"),C=l("hl-col"),f=l("hl-icon"),G=l("hl-row");return e(),c(G,{gap:"var(--lg)"},{default:t(()=>[a(C,{span:"md:col-12"},{default:t(()=>[$,a(_,{modelValue:v.value,"onUpdate:modelValue":p[0]||(p[0]=s=>v.value=s),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:t(()=>[(e(!0),d(h,null,T(w.value,s=>(e(),d(h,null,[s.divider?(e(),c(u,{key:s.value,divider:""})):(e(),c(u,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(O,{gap:v.value,border:"bordered"},{default:t(()=>[(e(!0),d(h,null,T(i.value,(s,A)=>(e(),c(g,{key:A,to:{path:s.path}},{default:t(()=>[o(y(s.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["gap"])]),_:1}),a(C,{span:"md:col-12"},{default:t(()=>[V,a(_,{modelValue:r.value,"onUpdate:modelValue":p[1]||(p[1]=s=>r.value=s),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:t(()=>[(e(!0),d(h,null,T(w.value,s=>(e(),d(h,null,[s.divider?(e(),c(u,{key:s.value,divider:""})):(e(),c(u,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(O,{"item-gap":r.value,border:"bordered"},{default:t(()=>[(e(!0),d(h,null,T(i.value,(s,A)=>(e(),c(g,{key:A,to:{path:s.path}},{prefix:t(()=>[a(f,null,{default:t(()=>[(e(),c(L(s.icon)))]),_:2},1024)]),default:t(()=>[o(" "+y(s.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["item-gap"])]),_:1})]),_:1})}}});var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const D=B({setup(x){const i=b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]);return(w,v)=>{const r=l("hl-list-item"),m=l("hl-list");return e(),c(m,{hover:""},{default:t(()=>[(e(!0),d(h,null,T(i.value,(p,u)=>(e(),c(r,{key:u,to:{path:p.path}},{default:t(()=>[o(y(p.content),1)]),_:2},1032,["to"]))),128))]),_:1})}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const U=B({setup(x){const i=b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]);return(w,v)=>{const r=l("hl-list-item"),m=l("hl-list"),p=l("hl-col"),u=l("hl-row");return e(),c(u,{gap:"var(--lg)"},{default:t(()=>[a(p,{span:"md:col-12"},{default:t(()=>[a(m,{border:"bordered",indent:""},{default:t(()=>[(e(!0),d(h,null,T(i.value,(_,g)=>(e(),c(r,{key:g,to:{path:_.path}},{default:t(()=>[o(y(_.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),a(p,{span:"md:col-12"},{default:t(()=>[a(m,{border:"bordered",indent:"",merge:""},{default:t(()=>[(e(!0),d(h,null,T(i.value,(_,g)=>(e(),c(r,{key:g,to:{path:_.path}},{default:t(()=>[o(y(_.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})}}});var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});const Q=B({setup(x){const i=b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]);return(w,v)=>{const r=l("hl-list-item"),m=l("hl-list"),p=l("hl-col"),u=l("hl-row");return e(),c(u,{gap:"var(--lg)"},{default:t(()=>[a(p,{span:"md:col-12"},{default:t(()=>[a(m,{border:"bordered",indent:"",merge:"",hover:""},{default:t(()=>[(e(!0),d(h,null,T(i.value,(_,g)=>(e(),c(r,{key:g,to:{path:_.path}},{default:t(()=>[o(y(_.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const W=n("a",{href:""},"\u67E5\u770B",-1),X=B({setup(x){const i=b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]);return(w,v)=>{const r=l("hl-icon"),m=l("hl-list-item"),p=l("hl-list");return e(),c(p,{hover:""},{default:t(()=>[(e(!0),d(h,null,T(i.value,(u,_)=>(e(),c(m,{key:_,to:{path:u.path}},{prefix:t(()=>[a(r,null,{default:t(()=>[(e(),c(L(u.icon)))]),_:2},1024)]),suffix:t(()=>[W]),default:t(()=>[o(" "+y(u.content)+" ",1)]),_:2},1032,["to"]))),128))]),_:1})}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const q=n("h1",null,"List \u5217\u8868",-1),J=n("p",null,"\u4F7F\u7528 List \u7EC4\u4EF6\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A\u7B80\u6D01\u4E14\u6F02\u4EAE\u7684\u5217\u8868\u7EC4\u4EF6\u3002",-1),K=n("p",null,"list/basic",-1),Y=n("h2",{id:"hover-yang-shi"},[n("a",{class:"header-anchor",href:"#hover-yang-shi"}),o(" Hover \u6837\u5F0F")],-1),Z=n("p",null,[n("code",null,"hover"),o(" \u5C5E\u6027\u53EF\u4EE5\u4F7F item \u5728\u60AC\u505C\u65F6\u62E5\u6709\u80CC\u666F\u6548\u679C\uFF0C\u540C\u65F6\u8FD8\u6709\u9F20\u6807\u624B\u52BF\u7684\u53D8\u5316\u6765\u793A\u610F\u8FD9\u662F\u4E00\u4E2A\u53EF\u70B9\u51FB\u7684\u5BF9\u8C61\u3002")],-1),tt=n("p",null,"list/hover",-1),nt=n("h2",{id:"cha-cao"},[n("a",{class:"header-anchor",href:"#cha-cao"}),o(" \u63D2\u69FD")],-1),et=n("p",null,[o("ListItem \u7EC4\u4EF6\u63D0\u4F9B "),n("code",null,"prefix"),o(" \u548C "),n("code",null,"suffix"),o(" \u4E24\u4E2A\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5C55\u793A\u5728\u6587\u672C\u524D\u540E\u7684\u9644\u52A0\u5185\u5BB9\u3002")],-1),ot=n("p",null,"list/slot",-1),lt=n("h2",{id:"bian-kuang-yang-shi"},[n("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),o(" \u8FB9\u6846\u6837\u5F0F")],-1),at=n("p",null,[o("\u4F7F\u7528 "),n("code",null,"border"),o(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u8FB9\u6846\u6837\u5F0F\u3002")],-1),it=n("p",null,"list/border",-1),rt=n("h2",{id:"jian-ju-yang-shi"},[n("a",{class:"header-anchor",href:"#jian-ju-yang-shi"}),o(" \u95F4\u8DDD\u6837\u5F0F")],-1),ct=n("p",null,[o("List \u7EC4\u4EF6\u63D0\u4F9B "),n("code",null,"gap"),o(" \u548C "),n("code",null,"item-gap"),o(" \u5C5E\u6027\u6765\u5206\u522B\u5B9A\u4E49 ListItem \u4E4B\u95F4\u7684\u95F4\u8DDD\u548C ListItem \u5185\u90E8\u5143\u7D20\u7684\u95F4\u8DDD\u3002")],-1),st=n("p",null,"list/gap",-1),pt=n("h2",{id:"suo-jin-he-rong-he-shu-xing"},[n("a",{class:"header-anchor",href:"#suo-jin-he-rong-he-shu-xing"}),o(" \u7F29\u8FDB\u548C\u878D\u5408\u5C5E\u6027")],-1),ut=n("p",null,[o("\u4F7F\u7528 "),n("code",null,"indent"),o(" \u5C5E\u6027\u53EF\u4EE5\u4F7F list-item \u5411\u4E0B\u7F29\u8FDB\u4E00\u4E2A\u50CF\u7D20"),n("code",null,"margin-bottom: -1px"),o("\uFF0C"),n("code",null,"marge"),o(" \u5C5E\u6027\u53EF\u4F7F\u5F97 ListItem \u7684\u5706\u89D2\u81EA\u52A8\u878D\u5408\u3002")],-1),dt=n("div",null,[n("p",null,"List \u7EC4\u4EF6\u4F7F\u7528 Group \u7EC4\u4EF6\u6765\u6784\u5EFA\uFF0C\u6240\u4EE5\u7EE7\u627F\u4E86 Group \u7EC4\u4EF6\u7684\u90E8\u5206\u7279\u6027")],-1),ht=n("p",null,"list/indent",-1),mt=n("h2",{id:"lu-you"},[n("a",{class:"header-anchor",href:"#lu-you"}),o(" \u8DEF\u7531")],-1),_t=n("p",null,[n("code",null,"to"),o(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8981\u8DF3\u8F6C\u7684\u8DEF\u7531\u53C2\u6570\uFF0C\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u53C2\u8003vue-router\u7684\u6587\u6863\u3002")],-1),vt=n("p",null,"list/router",-1),ft=E('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>hover</td><td>\u4E3A list-item \u8BBE\u7F6E\u60AC\u505C\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>indent</td><td>\u4F7F list-item \u5411\u4E0B\u7F29\u8FDB 1px</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>merge</td><td>\u4F7F list-item \u4E4B\u95F4\u878D\u5408\uFF0C\u4EE5\u66F4\u52A0\u534F\u8C03\u7684\u5C55\u793A\u5706\u89D2\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E list-item \u4E4B\u95F4\u7684\u95F4\u8DDD</td><td>string</td><td>\u901A\u7528\u95F4\u8DDD\u6807\u7B7E</td><td>-</td></tr><tr><td>item-gap</td><td>\u8BBE\u7F6E list-item \u5185\u90E8\u5143\u7D20\u7684\u95F4\u8DDD</td><td>string</td><td>\u901A\u7528\u95F4\u8DDD\u6807\u7B7E</td><td>-</td></tr><tr><td>border</td><td>\u8BBE\u7F6E list-item \u7684\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>bordered / border-x</td><td>-</td></tr></tbody></table><h3 id="list-item-attributes"><a class="header-anchor" href="#list-item-attributes"></a> List Item Attributes</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>to</td><td>\u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C <code>vue-router</code> \u7684 <code>to</code></td><td>string/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>replace</td><td>\u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="list-item-slots"><a class="header-anchor" href="#list-item-slots"></a> List Item Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u524D\u7F00\u63D2\u69FD</td></tr><tr><td>suffix</td><td>\u540E\u7F00\u63D2\u69FD</td></tr></tbody></table>',6),Tt={setup(x){const i={"../../../examples/list/basic.vue":S,"../../../examples/list/border.vue":j,"../../../examples/list/gap.vue":M,"../../../examples/list/hover.vue":P,"../../../examples/list/indent.vue":N,"../../../examples/list/router.vue":R,"../../../examples/list/slot.vue":H};return(w,v)=>{const r=l("demo-block"),m=l("right-nav");return e(),d(h,null,[n("section",null,[q,J,a(r,{fs:"",demos:k(i),"path-name":"list/basic","source-code":`<template>
  <hl-list>
    <hl-list-item v-for="(item, index) in items" :key="index">
      {{ item.content }}
    </hl-list-item>
  </hl-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    icon: 'TwoApplication',
    content: 'Grid \u6805\u683C',
    path: '/',
  },
  {
    icon: 'TwoCamera',
    content: 'Group \u7EC4',
    path: '/',
  },
  {
    icon: 'TwoBriefcase',
    content: 'Layout \u5E03\u5C40',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Typography \u6392\u7248',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Icon \u56FE\u6807',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Transition \u52A8\u753B',
    path: '/',
  },
])
<\/script>
`},{default:t(()=>[K]),_:1},8,["demos"]),Y,Z,a(r,{fs:"",demos:k(i),"path-name":"list/hover","source-code":`<template>
  <hl-list hover>
    <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
      {{ item.content }}
    </hl-list-item>
  </hl-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    icon: 'TwoApplication',
    content: 'Grid \u6805\u683C',
    path: '/',
  },
  {
    icon: 'TwoCamera',
    content: 'Group \u7EC4',
    path: '/',
  },
  {
    icon: 'TwoBriefcase',
    content: 'Layout \u5E03\u5C40',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Typography \u6392\u7248',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Icon \u56FE\u6807',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Transition \u52A8\u753B',
    path: '/',
  },
])

<\/script>
`},{default:t(()=>[tt]),_:1},8,["demos"]),nt,et,a(r,{fs:"",demos:k(i),"path-name":"list/slot","source-code":`<template>
  <hl-list hover>
    <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
      <template #prefix>
        <hl-icon>
          <component :is="item.icon" />
        </hl-icon>
      </template>
      {{ item.content }}
      <template #suffix>
        <a href="">\u67E5\u770B</a>
      </template>
    </hl-list-item>
  </hl-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    icon: 'TwoApplication',
    content: 'Grid \u6805\u683C',
    path: '/',
  },
  {
    icon: 'TwoCamera',
    content: 'Group \u7EC4',
    path: '/',
  },
  {
    icon: 'TwoBriefcase',
    content: 'Layout \u5E03\u5C40',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Typography \u6392\u7248',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Icon \u56FE\u6807',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Transition \u52A8\u753B',
    path: '/',
  },
])

<\/script>
`},{default:t(()=>[ot]),_:1},8,["demos"]),lt,at,a(r,{fs:"",demos:k(i),"path-name":"list/border","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
    </template>
  </hl-select>
  <hl-row>
    <hl-col span="md:col-12">
      <hl-list :border="value">
        <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
          {{ item.content }}
        </hl-list-item>
      </hl-list>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    icon: 'TwoApplication',
    content: 'Grid \u6805\u683C',
    path: '/',
  },
  {
    icon: 'TwoCamera',
    content: 'Group \u7EC4',
    path: '/',
  },
  {
    icon: 'TwoBriefcase',
    content: 'Layout \u5E03\u5C40',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Typography \u6392\u7248',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Icon \u56FE\u6807',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Transition \u52A8\u753B',
    path: '/',
  },
])
const options = ref([
  {
    value: '',
    label: 'default',
  },
  {
    value: 'border-x',
    label: 'border-x',
  },
  {
    value: 'bordered',
    label: 'bordered',
  },
])
const value = ref('')

<\/script>
`},{default:t(()=>[it]),_:1},8,["demos"]),rt,ct,a(r,{fs:"",demos:k(i),"path-name":"list/gap","source-code":`<template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      listGap\uFF1A
      <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
        <template v-for="item in options">
          <hl-option v-if="item.divider" :key="item.value" divider />
          <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
        </template>
      </hl-select>
      <hl-list :gap="value" border="bordered">
        <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
          {{ item.content }}
        </hl-list-item>
      </hl-list>
    </hl-col>
    <hl-col span="md:col-12">
      itemGap\uFF1A
      <hl-select v-model="value1" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
        <template v-for="item in options">
          <hl-option v-if="item.divider" :key="item.value" divider />
          <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
        </template>
      </hl-select>
      <hl-list :item-gap="value1" border="bordered">
        <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
          <template #prefix>
            <hl-icon>
              <component :is="item.icon" />
            </hl-icon>
          </template>
          {{ item.content }}
        </hl-list-item>
      </hl-list>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    icon: 'TwoApplication',
    content: 'Grid \u6805\u683C',
    path: '/',
  },
  {
    icon: 'TwoCamera',
    content: 'Group \u7EC4',
    path: '/',
  },
  {
    icon: 'TwoBriefcase',
    content: 'Layout \u5E03\u5C40',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Typography \u6392\u7248',
    path: '/',
  },
  {
    icon: 'TwoAirplay',
    content: 'Icon \u56FE\u6807',
    path: '/',
  },
  {
    icon: 'TwoDatabase',
    content: 'Transition \u52A8\u753B',
    path: '/',
  },
])
const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--xxs)',
    label: 'xxs',
  },
  {
    value: 'var(--xs)',
    label: 'xs',
  },
  {
    value: 'var(--sm)',
    label: 'sm',
  },
  {
    value: 'var(--md)',
    label: 'md',
  },
  {
    value: 'var(--lg)',
    label: 'lg',
  },
  {
    value: 'var(--xl)',
    label: 'xl',
  },
  {
    value: 'var(--xxl)',
    label: 'xxl',
  },
])
const value = ref('0')
const value1 = ref('var(--sm)')

<\/script>
`},{default:t(()=>[st]),_:1},8,["demos"]),pt,ut,a(r,{fs:"",demos:k(i),"path-name":"list/indent","source-code":`<template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      <hl-list border="bordered" indent>
        <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
          {{ item.content }}
        </hl-list-item>
      </hl-list>
    </hl-col>
    <hl-col span="md:col-12">
      <hl-list border="bordered" indent merge>
        <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
          {{ item.content }}
        </hl-list-item>
      </hl-list>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    icon: 'TwoApplication',
    content: 'Grid \u6805\u683C',
    path: '/',
  },
  {
    icon: 'TwoCamera',
    content: 'Group \u7EC4',
    path: '/',
  },
  {
    icon: 'TwoBriefcase',
    content: 'Layout \u5E03\u5C40',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Typography \u6392\u7248',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Icon \u56FE\u6807',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Transition \u52A8\u753B',
    path: '/',
  },
])

<\/script>
`},{default:t(()=>[dt,ht]),_:1},8,["demos"]),mt,_t,a(r,{fs:"",demos:k(i),"path-name":"list/router","source-code":`<template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      <hl-list border="bordered" indent merge hover>
        <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
          {{ item.content }}
        </hl-list-item>
      </hl-list>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    icon: 'TwoApplication',
    content: 'Grid \u6805\u683C',
    path: '/',
  },
  {
    icon: 'TwoCamera',
    content: 'Group \u7EC4',
    path: '/',
  },
  {
    icon: 'TwoBriefcase',
    content: 'Layout \u5E03\u5C40',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Typography \u6392\u7248',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Icon \u56FE\u6807',
    path: '/',
  },
  {
    icon: 'TwoBookOpen',
    content: 'Transition \u52A8\u753B',
    path: '/',
  },
])

<\/script>
`},{default:t(()=>[vt]),_:1},8,["demos"]),ft]),a(m)],64)}}};export{Tt as default};
