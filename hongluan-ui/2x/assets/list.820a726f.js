var j=Object.defineProperty;var G=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var N=(r,n,t)=>n in r?j(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,O=(r,n)=>{for(var t in n||(n={}))P.call(n,t)&&N(r,t,n[t]);if(G)for(var t of G(n))$.call(n,t)&&N(r,t,n[t]);return r};import{H as A,L as U,W as H,Q as o,X as w,P as y,a4 as Q,S as F,o as W,aJ as f}from"./vue.059774a0.js";import{_ as X}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";import"./hongluan-icons.5b925e95.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{renderList:r,Fragment:n,openBlock:t,createElementBlock:d,toDisplayString:i,createTextVNode:c,resolveComponent:h,withCtx:e,createBlock:u}=f;function E(C,v){const m=h("hl-list-item"),l=h("hl-list");return t(),u(l,null,{default:e(()=>[(t(!0),d(n,null,r(C.items,(p,a)=>(t(),u(m,{key:a},{default:e(()=>[c(i(p.content),1)]),_:2},1024))),128))]),_:1})}const{defineComponent:B}=f,{ref:b}=f;return O({render:E},B({setup(C,{expose:v}){v();const l={items:b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),ref:b};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hl-demo1":function(){const{renderList:r,Fragment:n,openBlock:t,createElementBlock:d,toDisplayString:i,createTextVNode:c,resolveComponent:h,withCtx:e,createBlock:u}=f;function E(C,v){const m=h("hl-list-item"),l=h("hl-list");return t(),u(l,{hover:""},{default:e(()=>[(t(!0),d(n,null,r(C.items,(p,a)=>(t(),u(m,{key:a,to:{path:p.path}},{default:e(()=>[c(i(p.content),1)]),_:2},1032,["to"]))),128))]),_:1})}const{defineComponent:B}=f,{ref:b}=f;return O({render:E},B({setup(C,{expose:v}){v();const l={items:b([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),ref:b};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hl-demo2":function(){const{renderList:r,Fragment:n,openBlock:t,createElementBlock:d,resolveDynamicComponent:i,createBlock:c,resolveComponent:h,withCtx:e,createVNode:u,toDisplayString:E,createElementVNode:B,createTextVNode:b}=f,k=B("a",{href:""},"\u67E5\u770B",-1);function C(p,a){const T=h("hl-icon"),s=h("hl-list-item"),x=h("hl-list");return t(),c(x,{hover:""},{default:e(()=>[(t(!0),d(n,null,r(p.items,(D,g)=>(t(),c(s,{key:g,to:{path:D.path}},{prefix:e(()=>[u(T,null,{default:e(()=>[(t(),c(i(D.icon)))]),_:2},1024)]),suffix:e(()=>[k]),default:e(()=>[b(" "+E(D.content)+" ",1)]),_:2},1032,["to"]))),128))]),_:1})}const{defineComponent:v}=f,{ref:m}=f;return O({render:C},v({setup(p,{expose:a}){a();const s={items:m([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),ref:m};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}(),"hl-demo3":function(){const{renderList:r,Fragment:n,openBlock:t,createElementBlock:d,resolveComponent:i,createBlock:c,createCommentVNode:h,withCtx:e,createVNode:u,toDisplayString:E,createTextVNode:B}=f;function b(m,l){const p=i("hl-option"),a=i("hl-select"),T=i("hl-list-item"),s=i("hl-list"),x=i("hl-col"),D=i("hl-row");return t(),d(n,null,[u(a,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=g=>m.value=g),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:e(()=>[(t(!0),d(n,null,r(m.options,g=>(t(),d(n,null,[g.divider?(t(),c(p,{key:g.value,divider:""})):(t(),c(p,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(D,null,{default:e(()=>[u(x,{span:"md:col-12"},{default:e(()=>[u(s,{border:m.value},{default:e(()=>[(t(!0),d(n,null,r(m.items,(g,L)=>(t(),c(T,{key:L,to:{path:g.path}},{default:e(()=>[B(E(g.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["border"])]),_:1})]),_:1})],64)}const{defineComponent:k}=f,{ref:C}=f;return O({render:b},k({setup(m,{expose:l}){l();const p=C([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),a=C([{value:"",label:"default"},{value:"border-x",label:"border-x"},{value:"bordered",label:"bordered"}]),T=C(""),s={items:p,options:a,value:T,ref:C};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}(),"hl-demo4":function(){const{renderList:r,Fragment:n,openBlock:t,createElementBlock:d,resolveComponent:i,createBlock:c,createCommentVNode:h,withCtx:e,createVNode:u,toDisplayString:E,createTextVNode:B,resolveDynamicComponent:b}=f,k=B(" listGap\uFF1A "),C=B(" itemGap\uFF1A ");function v(a,T){const s=i("hl-option"),x=i("hl-select"),D=i("hl-list-item"),g=i("hl-list"),L=i("hl-col"),S=i("hl-icon"),I=i("hl-row");return t(),c(I,{gap:"var(--lg)"},{default:e(()=>[u(L,{span:"md:col-12"},{default:e(()=>[k,u(x,{modelValue:a.value,"onUpdate:modelValue":T[0]||(T[0]=_=>a.value=_),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:e(()=>[(t(!0),d(n,null,r(a.options,_=>(t(),d(n,null,[_.divider?(t(),c(s,{key:_.value,divider:""})):(t(),c(s,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(g,{gap:a.value,border:"bordered"},{default:e(()=>[(t(!0),d(n,null,r(a.items,(_,V)=>(t(),c(D,{key:V,to:{path:_.path}},{default:e(()=>[B(E(_.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["gap"])]),_:1}),u(L,{span:"md:col-12"},{default:e(()=>[C,u(x,{modelValue:a.value1,"onUpdate:modelValue":T[1]||(T[1]=_=>a.value1=_),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:e(()=>[(t(!0),d(n,null,r(a.options,_=>(t(),d(n,null,[_.divider?(t(),c(s,{key:_.value,divider:""})):(t(),c(s,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(g,{"item-gap":a.value1,border:"bordered"},{default:e(()=>[(t(!0),d(n,null,r(a.items,(_,V)=>(t(),c(D,{key:V,to:{path:_.path}},{prefix:e(()=>[u(S,null,{default:e(()=>[(t(),c(b(_.icon)))]),_:2},1024)]),default:e(()=>[B(" "+E(_.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["item-gap"])]),_:1})]),_:1})}const{defineComponent:m}=f,{ref:l}=f;return O({render:v},m({setup(a,{expose:T}){T();const s=l([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoAirplay",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoDatabase",content:"Transition \u52A8\u753B",path:"/"}]),x=l([{value:"0",label:"none"},{divider:!0},{value:"var(--xxs)",label:"xxs"},{value:"var(--xs)",label:"xs"},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),D=l("0"),g=l("var(--sm)"),L={items:s,options:x,value:D,value1:g,ref:l};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}}))}(),"hl-demo5":function(){const{renderList:r,Fragment:n,openBlock:t,createElementBlock:d,toDisplayString:i,createTextVNode:c,resolveComponent:h,withCtx:e,createBlock:u,createVNode:E}=f;function B(v,m){const l=h("hl-list-item"),p=h("hl-list"),a=h("hl-col"),T=h("hl-row");return t(),u(T,{gap:"var(--lg)"},{default:e(()=>[E(a,{span:"md:col-12"},{default:e(()=>[E(p,{border:"bordered",indent:""},{default:e(()=>[(t(!0),d(n,null,r(v.items,(s,x)=>(t(),u(l,{key:x,to:{path:s.path}},{default:e(()=>[c(i(s.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),E(a,{span:"md:col-12"},{default:e(()=>[E(p,{border:"bordered",indent:"",merge:""},{default:e(()=>[(t(!0),d(n,null,r(v.items,(s,x)=>(t(),u(l,{key:x,to:{path:s.path}},{default:e(()=>[c(i(s.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})}const{defineComponent:b}=f,{ref:k}=f;return O({render:B},b({setup(v,{expose:m}){m();const p={items:k([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),ref:k};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}(),"hl-demo6":function(){const{renderList:r,Fragment:n,openBlock:t,createElementBlock:d,toDisplayString:i,createTextVNode:c,resolveComponent:h,withCtx:e,createBlock:u,createVNode:E}=f;function B(v,m){const l=h("hl-list-item"),p=h("hl-list"),a=h("hl-col"),T=h("hl-row");return t(),u(T,{gap:"var(--lg)"},{default:e(()=>[E(a,{span:"md:col-12"},{default:e(()=>[E(p,{border:"bordered",indent:"",merge:"",hover:""},{default:e(()=>[(t(!0),d(n,null,r(v.items,(s,x)=>(t(),u(l,{key:x,to:{path:s.path}},{default:e(()=>[c(i(s.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})}const{defineComponent:b}=f,{ref:k}=f;return O({render:B},b({setup(v,{expose:m}){m();const p={items:k([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),ref:k};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}()}},q=o("h1",null,"List \u5217\u8868",-1),z=o("p",null,"\u4F7F\u7528 List \u7EC4\u4EF6\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A\u7B80\u6D01\u4E14\u6F02\u4EAE\u7684\u5217\u8868\u7EC4\u4EF6\u3002",-1),K=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),M=o("h2",{id:"hover-yang-shi"},[o("a",{class:"header-anchor",href:"#hover-yang-shi"}),F(" Hover \u6837\u5F0F")],-1),R=o("p",null,[o("code",null,"hover"),F(" \u5C5E\u6027\u53EF\u4EE5\u4F7F item \u5728\u60AC\u505C\u65F6\u62E5\u6709\u80CC\u666F\u6548\u679C\uFF0C\u540C\u65F6\u8FD8\u6709\u9F20\u6807\u624B\u52BF\u7684\u53D8\u5316\u6765\u793A\u610F\u8FD9\u662F\u4E00\u4E2A\u53EF\u70B9\u51FB\u7684\u5BF9\u8C61\u3002")],-1),Y=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Z=o("h2",{id:"cha-cao"},[o("a",{class:"header-anchor",href:"#cha-cao"}),F(" \u63D2\u69FD")],-1),tt=o("p",null,[F("ListItem \u7EC4\u4EF6\u63D0\u4F9B "),o("code",null,"prefix"),F(" \u548C "),o("code",null,"suffix"),F(" \u4E24\u4E2A\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5C55\u793A\u5728\u6587\u672C\u524D\u540E\u7684\u9644\u52A0\u5185\u5BB9\u3002")],-1),et=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ot=o("h2",{id:"bian-kuang-yang-shi"},[o("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),F(" \u8FB9\u6846\u6837\u5F0F")],-1),nt=o("p",null,[F("\u4F7F\u7528 "),o("code",null,"border"),F(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u8FB9\u6846\u6837\u5F0F\u3002")],-1),ut=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),lt=o("h2",{id:"jian-ju-yang-shi"},[o("a",{class:"header-anchor",href:"#jian-ju-yang-shi"}),F(" \u95F4\u8DDD\u6837\u5F0F")],-1),rt=o("p",null,[F("List \u7EC4\u4EF6\u63D0\u4F9B "),o("code",null,"gap"),F(" \u548C "),o("code",null,"item-gap"),F(" \u5C5E\u6027\u6765\u5206\u522B\u5B9A\u4E49 ListItem \u4E4B\u95F4\u7684\u95F4\u8DDD\u548C ListItem \u5185\u90E8\u5143\u7D20\u7684\u95F4\u8DDD\u3002")],-1),at=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),it=o("h2",{id:"suo-jin-he-rong-he-shu-xing"},[o("a",{class:"header-anchor",href:"#suo-jin-he-rong-he-shu-xing"}),F(" \u7F29\u8FDB\u548C\u878D\u5408\u5C5E\u6027")],-1),ct=o("p",null,[F("\u4F7F\u7528 "),o("code",null,"indent"),F(" \u5C5E\u6027\u53EF\u4EE5\u4F7F list-item \u5411\u4E0B\u7F29\u8FDB\u4E00\u4E2A\u50CF\u7D20"),o("code",null,"margin-bottom: -1px"),F("\uFF0C"),o("code",null,"marge"),F(" \u5C5E\u6027\u53EF\u4F7F\u5F97 ListItem \u7684\u5706\u89D2\u81EA\u52A8\u878D\u5408\u3002")],-1),st=o("div",null,[o("p",null,"List \u7EC4\u4EF6\u4F7F\u7528 Group \u7EC4\u4EF6\u6765\u6784\u5EFA\uFF0C\u6240\u4EE5\u7EE7\u627F\u4E86 Group \u7EC4\u4EF6\u7684\u90E8\u5206\u7279\u6027")],-1),pt=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),dt=o("h2",{id:"lu-you"},[o("a",{class:"header-anchor",href:"#lu-you"}),F(" \u8DEF\u7531")],-1),ht=o("p",null,[o("code",null,"to"),F(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8981\u8DF3\u8F6C\u7684\u8DEF\u7531\u53C2\u6570\uFF0C\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u53C2\u8003vue-router\u7684\u6587\u6863\u3002")],-1),mt=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),_t=W('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>hover</td><td>\u4E3A list-item \u8BBE\u7F6E\u60AC\u505C\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>indent</td><td>\u4F7F list-item \u5411\u4E0B\u7F29\u8FDB 1px</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>merge</td><td>\u4F7F list-item \u4E4B\u95F4\u878D\u5408\uFF0C\u4EE5\u66F4\u52A0\u534F\u8C03\u7684\u5C55\u793A\u5706\u89D2\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E list-item \u4E4B\u95F4\u7684\u95F4\u8DDD</td><td>string</td><td>\u901A\u7528\u95F4\u8DDD\u6807\u7B7E</td><td>-</td></tr><tr><td>item-gap</td><td>\u8BBE\u7F6E list-item \u5185\u90E8\u5143\u7D20\u7684\u95F4\u8DDD</td><td>string</td><td>\u901A\u7528\u95F4\u8DDD\u6807\u7B7E</td><td>-</td></tr><tr><td>border</td><td>\u8BBE\u7F6E list-item \u7684\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>bordered / border-x</td><td>-</td></tr></tbody></table><h3 id="list-item-attributes"><a class="header-anchor" href="#list-item-attributes"></a> List Item Attributes</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>to</td><td>\u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C <code>vue-router</code> \u7684 <code>to</code></td><td>string/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>replace</td><td>\u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="list-item-slots"><a class="header-anchor" href="#list-item-slots"></a> List Item Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u524D\u7F00\u63D2\u69FD</td></tr><tr><td>suffix</td><td>\u540E\u7F00\u63D2\u69FD</td></tr></tbody></table>',6);function ft(r,n,t,d,i,c){const h=A("hl-demo0"),e=A("demo-block"),u=A("hl-demo1"),E=A("hl-demo2"),B=A("hl-demo3"),b=A("hl-demo4"),k=A("hl-demo5"),C=A("hl-demo6"),v=A("right-nav");return U(),H(Q,null,[o("section",null,[q,z,w(e,{fs:""},{source:y(()=>[w(h)]),highlight:y(()=>[K]),_:1}),M,R,w(e,{fs:""},{source:y(()=>[w(u)]),highlight:y(()=>[Y]),_:1}),Z,tt,w(e,{fs:""},{source:y(()=>[w(E)]),highlight:y(()=>[et]),_:1}),ot,nt,w(e,{fs:""},{source:y(()=>[w(B)]),highlight:y(()=>[ut]),_:1}),lt,rt,w(e,{fs:""},{source:y(()=>[w(b)]),highlight:y(()=>[at]),_:1}),it,ct,w(e,{fs:""},{source:y(()=>[w(k)]),highlight:y(()=>[pt]),default:y(()=>[st]),_:1}),dt,ht,w(e,{fs:""},{source:y(()=>[w(C)]),highlight:y(()=>[mt]),_:1}),_t]),w(v)],64)}var Tt=X(J,[["render",ft]]);export{Tt as default};
