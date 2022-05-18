var j=Object.defineProperty;var G=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(l,n,t)=>n in l?j(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,L=(l,n)=>{for(var t in n||(n={}))$.call(n,t)&&N(l,t,n[t]);if(G)for(var t of G(n))P.call(n,t)&&N(l,t,n[t]);return l};import{H as D,L as U,W as H,Q as o,X as k,P as w,a4 as Q,aJ as x,S as m,o as W}from"./vue.059774a0.js";import{_ as X}from"./index.04f8f626.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.5b925e95.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:c,toDisplayString:a,createTextVNode:i,resolveComponent:s,withCtx:e,createBlock:u}=x;function d(_,B){const v=s("hl-list-item"),h=s("hl-list");return t(),u(h,null,{default:e(()=>[(t(!0),c(n,null,l(_.items,(f,r)=>(t(),u(v,{key:r},{default:e(()=>[i(a(f.content),1)]),_:2},1024))),128))]),_:1})}const{defineComponent:E,ref:C}=x,T=E({setup(){return{items:C([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}])}}});return L({render:d},T)}(),"hl-demo1":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:c,toDisplayString:a,createTextVNode:i,resolveComponent:s,withCtx:e,createBlock:u}=x;function d(_,B){const v=s("hl-list-item"),h=s("hl-list");return t(),u(h,{hover:""},{default:e(()=>[(t(!0),c(n,null,l(_.items,(f,r)=>(t(),u(v,{key:r,to:{path:f.path}},{default:e(()=>[i(a(f.content),1)]),_:2},1032,["to"]))),128))]),_:1})}const{defineComponent:E,ref:C}=x,T=E({setup(){return{items:C([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}])}}});return L({render:d},T)}(),"hl-demo2":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:c,resolveDynamicComponent:a,createBlock:i,resolveComponent:s,withCtx:e,createVNode:u,toDisplayString:d,createElementVNode:E,createTextVNode:C}=x,T=E("a",{href:""},"\u67E5\u770B",-1);function _(f,r){const g=s("hl-icon"),F=s("hl-list-item"),y=s("hl-list");return t(),i(y,{hover:""},{default:e(()=>[(t(!0),c(n,null,l(f.items,(A,b)=>(t(),i(F,{key:b,to:{path:A.path}},{prefix:e(()=>[u(g,null,{default:e(()=>[(t(),i(a(A.icon)))]),_:2},1024)]),suffix:e(()=>[T]),default:e(()=>[C(" "+d(A.content)+" ",1)]),_:2},1032,["to"]))),128))]),_:1})}const{defineComponent:B,ref:v}=x,h=B({setup(){return{items:v([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}])}}});return L({render:_},h)}(),"hl-demo3":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:c,resolveComponent:a,createBlock:i,createCommentVNode:s,withCtx:e,createVNode:u,toDisplayString:d,createTextVNode:E}=x;function C(v,h){const f=a("hl-option"),r=a("hl-select"),g=a("hl-list-item"),F=a("hl-list"),y=a("hl-col"),A=a("hl-row");return t(),c(n,null,[u(r,{modelValue:v.value,"onUpdate:modelValue":h[0]||(h[0]=b=>v.value=b),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:e(()=>[(t(!0),c(n,null,l(v.options,b=>(t(),c(n,null,[b.divider?(t(),i(f,{key:b.value,divider:""})):(t(),i(f,{key:b.value,label:b.label,value:b.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(A,null,{default:e(()=>[u(y,{span:"md:col-12"},{default:e(()=>[u(F,{border:v.value},{default:e(()=>[(t(!0),c(n,null,l(v.items,(b,V)=>(t(),i(g,{key:V,to:{path:b.path}},{default:e(()=>[E(d(b.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["border"])]),_:1})]),_:1})],64)}const{defineComponent:T,ref:_}=x,B=T({setup(){const v=_([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}]),h=_([{value:"",label:"default"},{value:"border-x",label:"border-x"},{value:"bordered",label:"bordered"}]),f=_("");return{items:v,options:h,value:f}}});return L({render:C},B)}(),"hl-demo4":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:c,resolveComponent:a,createBlock:i,createCommentVNode:s,withCtx:e,createVNode:u,toDisplayString:d,createTextVNode:E,resolveDynamicComponent:C}=x,T=E(" listGap\uFF1A "),_=E(" itemGap\uFF1A ");function B(r,g){const F=a("hl-option"),y=a("hl-select"),A=a("hl-list-item"),b=a("hl-list"),V=a("hl-col"),I=a("hl-icon"),S=a("hl-row");return t(),i(S,{gap:"var(--lg)"},{default:e(()=>[u(V,{span:"md:col-12"},{default:e(()=>[T,u(y,{modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=p=>r.value=p),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:e(()=>[(t(!0),c(n,null,l(r.options,p=>(t(),c(n,null,[p.divider?(t(),i(F,{key:p.value,divider:""})):(t(),i(F,{key:p.value,label:p.label,value:p.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(b,{gap:r.value,border:"bordered"},{default:e(()=>[(t(!0),c(n,null,l(r.items,(p,O)=>(t(),i(A,{key:O,to:{path:p.path}},{default:e(()=>[E(d(p.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["gap"])]),_:1}),u(V,{span:"md:col-12"},{default:e(()=>[_,u(y,{modelValue:r.value1,"onUpdate:modelValue":g[1]||(g[1]=p=>r.value1=p),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:e(()=>[(t(!0),c(n,null,l(r.options,p=>(t(),c(n,null,[p.divider?(t(),i(F,{key:p.value,divider:""})):(t(),i(F,{key:p.value,label:p.label,value:p.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(b,{"item-gap":r.value1,border:"bordered"},{default:e(()=>[(t(!0),c(n,null,l(r.items,(p,O)=>(t(),i(A,{key:O,to:{path:p.path}},{prefix:e(()=>[u(I,null,{default:e(()=>[(t(),i(C(p.icon)))]),_:2},1024)]),default:e(()=>[E(" "+d(p.content),1)]),_:2},1032,["to"]))),128))]),_:1},8,["item-gap"])]),_:1})]),_:1})}const{defineComponent:v,ref:h}=x,f=v({setup(){const r=h([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoAirplay",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoDatabase",content:"Transition \u52A8\u753B",path:"/"}]),g=h([{value:"0",label:"none"},{divider:!0},{value:"var(--xxs)",label:"xxs"},{value:"var(--xs)",label:"xs"},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),F=h("0"),y=h("var(--sm)");return{items:r,options:g,value:F,value1:y}}});return L({render:B},f)}(),"hl-demo5":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:c,toDisplayString:a,createTextVNode:i,resolveComponent:s,withCtx:e,createBlock:u,createVNode:d}=x;function E(B,v){const h=s("hl-list-item"),f=s("hl-list"),r=s("hl-col"),g=s("hl-row");return t(),u(g,{gap:"var(--lg)"},{default:e(()=>[d(r,{span:"md:col-12"},{default:e(()=>[d(f,{border:"bordered",indent:""},{default:e(()=>[(t(!0),c(n,null,l(B.items,(F,y)=>(t(),u(h,{key:y,to:{path:F.path}},{default:e(()=>[i(a(F.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),d(r,{span:"md:col-12"},{default:e(()=>[d(f,{border:"bordered",indent:"",merge:""},{default:e(()=>[(t(!0),c(n,null,l(B.items,(F,y)=>(t(),u(h,{key:y,to:{path:F.path}},{default:e(()=>[i(a(F.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})}const{defineComponent:C,ref:T}=x,_=C({setup(){return{items:T([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}])}}});return L({render:E},_)}(),"hl-demo6":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:c,toDisplayString:a,createTextVNode:i,resolveComponent:s,withCtx:e,createBlock:u,createVNode:d}=x;function E(B,v){const h=s("hl-list-item"),f=s("hl-list"),r=s("hl-col"),g=s("hl-row");return t(),u(g,{gap:"var(--lg)"},{default:e(()=>[d(r,{span:"md:col-12"},{default:e(()=>[d(f,{border:"bordered",indent:"",merge:"",hover:""},{default:e(()=>[(t(!0),c(n,null,l(B.items,(F,y)=>(t(),u(h,{key:y,to:{path:F.path}},{default:e(()=>[i(a(F.content),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})}const{defineComponent:C,ref:T}=x,_=C({setup(){return{items:T([{icon:"TwoApplication",content:"Grid \u6805\u683C",path:"/"},{icon:"TwoCamera",content:"Group \u7EC4",path:"/"},{icon:"TwoBriefcase",content:"Layout \u5E03\u5C40",path:"/"},{icon:"TwoBookOpen",content:"Typography \u6392\u7248",path:"/"},{icon:"TwoBookOpen",content:"Icon \u56FE\u6807",path:"/"},{icon:"TwoBookOpen",content:"Transition \u52A8\u753B",path:"/"}])}}});return L({render:E},_)}()}},q=o("h1",null,"List \u5217\u8868",-1),z=o("p",null,"\u4F7F\u7528 List \u7EC4\u4EF6\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A\u7B80\u6D01\u4E14\u6F02\u4EAE\u7684\u5217\u8868\u7EC4\u4EF6\u3002",-1),K=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-list>
    <hl-list-item v-for="(item, index) in items" :key="index">
      {{ item.content }}
    </hl-list-item>
  </hl-list>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      items,
    }
  },
})
<\/script>
`)],-1),M=o("h2",{id:"hover-yang-shi"},[o("a",{class:"header-anchor",href:"#hover-yang-shi"}),m(" Hover \u6837\u5F0F")],-1),R=o("p",null,[o("code",null,"hover"),m(" \u5C5E\u6027\u53EF\u4EE5\u4F7F item \u5728\u60AC\u505C\u65F6\u62E5\u6709\u80CC\u666F\u6548\u679C\uFF0C\u540C\u65F6\u8FD8\u6709\u9F20\u6807\u624B\u52BF\u7684\u53D8\u5316\u6765\u793A\u610F\u8FD9\u662F\u4E00\u4E2A\u53EF\u70B9\u51FB\u7684\u5BF9\u8C61\u3002")],-1),Y=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-list hover>
    <hl-list-item v-for="(item, index) in items" :key="index" :to="{ path: item.path }">
      {{ item.content }}
    </hl-list-item>
  </hl-list>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      items,
    }
  },
})
<\/script>
`)],-1),Z=o("h2",{id:"cha-cao"},[o("a",{class:"header-anchor",href:"#cha-cao"}),m(" \u63D2\u69FD")],-1),tt=o("p",null,[m("ListItem \u7EC4\u4EF6\u63D0\u4F9B "),o("code",null,"prefix"),m(" \u548C "),o("code",null,"suffix"),m(" \u4E24\u4E2A\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5C55\u793A\u5728\u6587\u672C\u524D\u540E\u7684\u9644\u52A0\u5185\u5BB9\u3002")],-1),et=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      items,
    }
  },
})
<\/script>
`)],-1),ot=o("h2",{id:"bian-kuang-yang-shi"},[o("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),m(" \u8FB9\u6846\u6837\u5F0F")],-1),nt=o("p",null,[m("\u4F7F\u7528 "),o("code",null,"border"),m(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u8FB9\u6846\u6837\u5F0F\u3002")],-1),ut=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      items,
      options,
      value,
    }
  },
})
<\/script>
`)],-1),lt=o("h2",{id:"jian-ju-yang-shi"},[o("a",{class:"header-anchor",href:"#jian-ju-yang-shi"}),m(" \u95F4\u8DDD\u6837\u5F0F")],-1),at=o("p",null,[m("List \u7EC4\u4EF6\u63D0\u4F9B "),o("code",null,"gap"),m(" \u548C "),o("code",null,"item-gap"),m(" \u5C5E\u6027\u6765\u5206\u522B\u5B9A\u4E49 ListItem \u4E4B\u95F4\u7684\u95F4\u8DDD\u548C ListItem \u5185\u90E8\u5143\u7D20\u7684\u95F4\u8DDD\u3002")],-1),it=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      items,
      options,
      value,
      value1,
    }
  },
})
<\/script>
`)],-1),rt=o("h2",{id:"suo-jin-he-rong-he-shu-xing"},[o("a",{class:"header-anchor",href:"#suo-jin-he-rong-he-shu-xing"}),m(" \u7F29\u8FDB\u548C\u878D\u5408\u5C5E\u6027")],-1),ct=o("p",null,[m("\u4F7F\u7528 "),o("code",null,"indent"),m(" \u5C5E\u6027\u53EF\u4EE5\u4F7F list-item \u5411\u4E0B\u7F29\u8FDB\u4E00\u4E2A\u50CF\u7D20"),o("code",null,"margin-bottom: -1px"),m("\uFF0C"),o("code",null,"marge"),m(" \u5C5E\u6027\u53EF\u4F7F\u5F97 ListItem \u7684\u5706\u89D2\u81EA\u52A8\u878D\u5408\u3002")],-1),st=o("div",null,[o("p",null,"List \u7EC4\u4EF6\u4F7F\u7528 Group \u7EC4\u4EF6\u6765\u6784\u5EFA\uFF0C\u6240\u4EE5\u7EE7\u627F\u4E86 Group \u7EC4\u4EF6\u7684\u90E8\u5206\u7279\u6027")],-1),pt=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      items,
    }
  },
})
<\/script>
`)],-1),dt=o("h2",{id:"lu-you"},[o("a",{class:"header-anchor",href:"#lu-you"}),m(" \u8DEF\u7531")],-1),ht=o("p",null,[o("code",null,"to"),m(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8981\u8DF3\u8F6C\u7684\u8DEF\u7531\u53C2\u6570\uFF0C\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u53C2\u8003vue-router\u7684\u6587\u6863\u3002")],-1),mt=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      items,
    }
  },
})
<\/script>
`)],-1),_t=W('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>hover</td><td>\u4E3A list-item \u8BBE\u7F6E\u60AC\u505C\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>indent</td><td>\u4F7F list-item \u5411\u4E0B\u7F29\u8FDB 1px</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>merge</td><td>\u4F7F list-item \u4E4B\u95F4\u878D\u5408\uFF0C\u4EE5\u66F4\u52A0\u534F\u8C03\u7684\u5C55\u793A\u5706\u89D2\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E list-item \u4E4B\u95F4\u7684\u95F4\u8DDD</td><td>string</td><td>\u901A\u7528\u95F4\u8DDD\u6807\u7B7E</td><td>-</td></tr><tr><td>item-gap</td><td>\u8BBE\u7F6E list-item \u5185\u90E8\u5143\u7D20\u7684\u95F4\u8DDD</td><td>string</td><td>\u901A\u7528\u95F4\u8DDD\u6807\u7B7E</td><td>-</td></tr><tr><td>border</td><td>\u8BBE\u7F6E list-item \u7684\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>bordered / border-x</td><td>-</td></tr></tbody></table><h3 id="list-item-attributes"><a class="header-anchor" href="#list-item-attributes"></a> List Item Attributes</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>to</td><td>\u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C <code>vue-router</code> \u7684 <code>to</code></td><td>string/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>replace</td><td>\u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="list-item-slots"><a class="header-anchor" href="#list-item-slots"></a> List Item Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u524D\u7F00\u63D2\u69FD</td></tr><tr><td>suffix</td><td>\u540E\u7F00\u63D2\u69FD</td></tr></tbody></table>',6);function ft(l,n,t,c,a,i){const s=D("hl-demo0"),e=D("demo-block"),u=D("hl-demo1"),d=D("hl-demo2"),E=D("hl-demo3"),C=D("hl-demo4"),T=D("hl-demo5"),_=D("hl-demo6"),B=D("right-nav");return U(),H(Q,null,[o("section",null,[q,z,k(e,{fs:""},{source:w(()=>[k(s)]),highlight:w(()=>[K]),_:1}),M,R,k(e,{fs:""},{source:w(()=>[k(u)]),highlight:w(()=>[Y]),_:1}),Z,tt,k(e,{fs:""},{source:w(()=>[k(d)]),highlight:w(()=>[et]),_:1}),ot,nt,k(e,{fs:""},{source:w(()=>[k(E)]),highlight:w(()=>[ut]),_:1}),lt,at,k(e,{fs:""},{source:w(()=>[k(C)]),highlight:w(()=>[it]),_:1}),rt,ct,k(e,{fs:""},{source:w(()=>[k(T)]),highlight:w(()=>[pt]),default:w(()=>[st]),_:1}),dt,ht,k(e,{fs:""},{source:w(()=>[k(_)]),highlight:w(()=>[mt]),_:1}),_t]),k(B)],64)}var bt=X(J,[["render",ft]]);export{bt as default};
