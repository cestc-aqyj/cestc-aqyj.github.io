var U=Object.defineProperty;var L=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var M=(s,n,e)=>n in s?U(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e,w=(s,n)=>{for(var e in n||(n={}))O.call(n,e)&&M(s,e,n[e]);if(L)for(var e of L(n))T.call(n,e)&&M(s,e,n[e]);return s};import{H as V,L as j,W as H,Q as u,X as D,P as b,a4 as I,aJ as A,S as o,o as W}from"./vue.059774a0.js";import{H as G}from"./hongluan-icons.5b925e95.js";import{_ as $}from"./index.04f8f626.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,createCommentVNode:m,withCtx:d}=A;function p(t,v){const F=i("hl-option"),l=i("hl-select");return e(),r(l,{modelValue:t.value,"onUpdate:modelValue":v[0]||(v[0]=E=>t.value=E),placeholder:"\u8BF7\u9009\u62E9"},{default:d(()=>[(e(!0),h(n,null,s(t.options,E=>(e(),h(n,null,[E.divider?(e(),r(F,{key:E.value,divider:""})):(e(),r(F,{key:E.value,label:E.label,value:E.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])}const{defineComponent:c,ref:f}=A,a=c({setup(){const t=f([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{divider:!0},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),v=f("");return{options:t,value:v}}});return w({render:p},a)}(),"hl-demo1":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m}=A;function d(a,t){const v=i("hl-option"),F=i("hl-select");return e(),r(F,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(a.options,l=>(e(),r(v,{key:l.value,label:l.label,value:l.value,disabled:l.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:p,ref:c}=A,f=p({setup(){const a=c([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976",disabled:!0},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),t=c("");return{options:a,value:t}}});return w({render:d},f)}(),"hl-demo2":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m}=A;function d(a,t){const v=i("hl-option"),F=i("hl-select");return e(),r(F,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),disabled:"",placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(a.options,l=>(e(),r(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:p,ref:c}=A,f=p({setup(){const a=c([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),t=c("");return{options:a,value:t}}});return w({render:d},f)}(),"hl-demo3":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m}=A;function d(a,t){const v=i("hl-option"),F=i("hl-select");return e(),r(F,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(a.options,l=>(e(),r(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:p,ref:c}=A,f=p({setup(){const a=c([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),t=c("");return{options:a,value:t}}});return w({render:d},f)}(),"hl-demo4":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m,createVNode:d,createElementVNode:p}=A,c=p("br",null,null,-1),f=p("br",null,null,-1),a=p("br",null,null,-1),t=p("br",null,null,-1);function v(B,g){const y=i("hl-option"),k=i("hl-select");return e(),h(n,null,[d(k,{modelValue:B.value,"onUpdate:modelValue":g[0]||(g[0]=C=>B.value=C),size:"sm",placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(B.options,C=>(e(),r(y,{key:C.value,label:C.label,value:C.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),c,f,d(k,{modelValue:B.value,"onUpdate:modelValue":g[1]||(g[1]=C=>B.value=C),size:"md",placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(B.options,C=>(e(),r(y,{key:C.value,label:C.label,value:C.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),a,t,d(k,{modelValue:B.value,"onUpdate:modelValue":g[2]||(g[2]=C=>B.value=C),size:"lg",placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(B.options,C=>(e(),r(y,{key:C.value,label:C.label,value:C.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])],64)}const{defineComponent:F,ref:l}=A,E=F({setup(){const B=l([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),g=l("");return{options:B,value:g}}});return w({render:v},E)}(),"hl-demo5":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,createVNode:m,withCtx:d,createElementVNode:p}=A,c=p("br",null,null,-1),f=p("br",null,null,-1),a=p("br",null,null,-1),t=p("br",null,null,-1),v=p("br",null,null,-1),F=p("br",null,null,-1);function l(k,C){const x=i("hl-option"),N=i("two-computer"),z=i("hl-icon"),S=i("hl-select");return e(),h(n,null,[m(S,{modelValue:k.value1,"onUpdate:modelValue":C[0]||(C[0]=_=>k.value1=_),multiple:"",placeholder:"\u8BF7\u9009\u62E9",size:"lg",style:{width:"300px"}},{prefix:d(()=>[m(z,null,{default:d(()=>[m(N)]),_:1})]),default:d(()=>[(e(!0),h(n,null,s(k.options,_=>(e(),r(x,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),c,f,m(S,{modelValue:k.value1,"onUpdate:modelValue":C[1]||(C[1]=_=>k.value1=_),multiple:"",filterable:"",placeholder:"\u53EF\u641C\u7D22",style:{width:"300px"}},{default:d(()=>[(e(!0),h(n,null,s(k.options,_=>(e(),r(x,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),a,t,m(S,{modelValue:k.value2,"onUpdate:modelValue":C[2]||(C[2]=_=>k.value2=_),size:"sm",multiple:"",clearable:"","collapse-tags":"",placeholder:"\u8BF7\u9009\u62E9",style:{width:"300px"}},{default:d(()=>[(e(!0),h(n,null,s(k.options,_=>(e(),r(x,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),v,F,m(S,{modelValue:k.value2,"onUpdate:modelValue":C[3]||(C[3]=_=>k.value2=_),size:"sm",multiple:"",filterable:"",clearable:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"\u8BF7\u9009\u62E9",style:{width:"300px"}},{default:d(()=>[(e(!0),h(n,null,s(k.options,_=>(e(),r(x,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])],64)}const{defineComponent:E,ref:B}=A,{TwoComputer:g}=G,y=E({components:{TwoComputer:g},setup(){const k=B([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"},{value:"\u9009\u98796",label:"\u5317\u4EAC\u70E4\u9E2D2"},{value:"\u9009\u98797",label:"\u5317\u4EAC\u70E4\u9E2D3"}]),C=B([]),x=B([]);return{options:k,value1:C,value2:x}}});return w({render:l},y)}(),"hl-demo6":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,toDisplayString:i,createElementVNode:r,resolveComponent:m,withCtx:d,createBlock:p}=A,c={class:"m-r-md"},f={class:"text-secondary font-sm"};function a(l,E){const B=m("hl-option"),g=m("hl-select");return e(),p(g,{modelValue:l.value,"onUpdate:modelValue":E[0]||(E[0]=y=>l.value=y),placeholder:"\u8BF7\u9009\u62E9"},{default:d(()=>[(e(!0),h(n,null,s(l.cities,y=>(e(),p(B,{key:y.value,label:y.label,value:y.value},{default:d(()=>[r("span",c,i(y.label),1),r("span",f,i(y.value),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:t,ref:v}=A,F=t({setup(){const l=v([{value:"Beijing",label:"\u5317\u4EAC"},{value:"Shanghai",label:"\u4E0A\u6D77"},{value:"Nanjing",label:"\u5357\u4EAC"},{value:"Chengdu",label:"\u6210\u90FD"},{value:"Shenzhen",label:"\u6DF1\u5733"},{value:"Guangzhou",label:"\u5E7F\u5DDE"}]),E=v("");return{cities:l,value:E}}});return w({render:a},F)}(),"hl-demo7":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m}=A;function d(a,t){const v=i("hl-option"),F=i("hl-option-group"),l=i("hl-select");return e(),r(l,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=E=>a.value=E),placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(a.options,E=>(e(),r(F,{key:E.label,label:E.label},{default:m(()=>[(e(!0),h(n,null,s(E.options,B=>(e(),r(v,{key:B.value,label:B.label,value:B.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:p,ref:c}=A,f=p({setup(){const a=c([{label:"\u70ED\u95E8\u57CE\u5E02",options:[{value:"Shanghai",label:"\u4E0A\u6D77"},{value:"Beijing",label:"\u5317\u4EAC"}]},{label:"\u57CE\u5E02\u540D",options:[{value:"Chengdu",label:"\u6210\u90FD"},{value:"Shenzhen",label:"\u6DF1\u5733"},{value:"Guangzhou",label:"\u5E7F\u5DDE"},{value:"Dalian",label:"\u5927\u8FDE"}]}]),t=c("");return{options:a,value:t}}});return w({render:d},f)}(),"hl-demo8":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m}=A;function d(a,t){const v=i("hl-option"),F=i("hl-select");return e(),r(F,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),filterable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:m(()=>[(e(!0),h(n,null,s(a.options,l=>(e(),r(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:p,ref:c}=A,f=p({setup(){const a=c([{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}]),t=c("");return{options:a,value:t}}});return w({render:d},f)}(),"hl-demo9":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m}=A;function d(t,v){const F=i("hl-option"),l=i("hl-select");return e(),r(l,{modelValue:t.value,"onUpdate:modelValue":v[0]||(v[0]=E=>t.value=E),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD","remote-method":t.remoteMethod,loading:t.loading},{default:m(()=>[(e(!0),h(n,null,s(t.options,E=>(e(),r(F,{key:E.value,label:E.label,value:E.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","loading"])}const{defineComponent:p,ref:c,onMounted:f}=A,a=p({setup(){const t=c([]),v=c([]),F=c([]),l=c(!1),E=c(["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]),B=g=>{g!==""?(l.value=!0,setTimeout(()=>{l.value=!1,t.value=F.value.filter(y=>y.label.toLowerCase().indexOf(g.toLowerCase())>-1)},200)):t.value=[]};return f(()=>{F.value=E.value.map(g=>({value:`value:${g}`,label:`label:${g}`}))}),{options:t,value:v,list:F,loading:l,states:E,remoteMethod:B}}});return w({render:d},a)}(),"hl-demo10":function(){const{renderList:s,Fragment:n,openBlock:e,createElementBlock:h,resolveComponent:i,createBlock:r,withCtx:m}=A;function d(a,t){const v=i("hl-option"),F=i("hl-select");return e(),r(F,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E"},{default:m(()=>[(e(!0),h(n,null,s(a.options,l=>(e(),r(v,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}const{defineComponent:p,ref:c}=A,f=p({setup(){const a=c([{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}]),t=c([]);return{options:a,value:t}}});return w({render:d},f)}()}},P=u("h1",null,"Select \u9009\u62E9\u5668",-1),q=u("p",null,"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9\u3002",-1),K=u("div",null,[u("p",null,[u("code",null,"v-model"),o(" \u7684\u503C\u4E3A\u5F53\u524D\u88AB\u9009\u4E2D\u7684 Option \u7EC4\u4EF6\u7684 "),u("code",null,"value"),o(" \u5C5E\u6027\u503C")])],-1),Q=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
    </template>
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u9EC4\u91D1\u7CD5',
      },
      {
        value: '\u9009\u98792',
        label: '\u53CC\u76AE\u5976',
      },
      {
        divider: true,
      },
      {
        value: '\u9009\u98793',
        label: '\u86B5\u4ED4\u714E',
      },
      {
        value: '\u9009\u98794',
        label: '\u9F99\u987B\u9762',
      },
      {
        value: '\u9009\u98795',
        label: '\u5317\u4EAC\u70E4\u9E2D',
      },
    ])
    const value = ref('')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),R=u("h2",{id:"you-jin-yong-xuan-xiang"},[u("a",{class:"header-anchor",href:"#you-jin-yong-xuan-xiang"}),o(" \u6709\u7981\u7528\u9009\u9879")],-1),X=u("p",null,[o("\u5728 Option \u7EC4\u4EF6\u4E2D\uFF0C\u8BBE\u5B9A"),u("code",null,"disabled"),o("\u503C\u4E3A true\uFF0C\u5373\u53EF\u7981\u7528\u8BE5\u9009\u9879")],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled" />
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u9EC4\u91D1\u7CD5',
      },
      {
        value: '\u9009\u98792',
        label: '\u53CC\u76AE\u5976',
        disabled: true,
      },
      {
        value: '\u9009\u98793',
        label: '\u86B5\u4ED4\u714E',
      },
      {
        value: '\u9009\u98794',
        label: '\u9F99\u987B\u9762',
      },
      {
        value: '\u9009\u98795',
        label: '\u5317\u4EAC\u70E4\u9E2D',
      },
    ])
    const value = ref('')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),Z=u("h3",{id:"jin-yong-zhuang-tai"},[u("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),o(" \u7981\u7528\u72B6\u6001")],-1),uu=u("p",null,[o("\u4E3A Select \u7EC4\u4EF6\u8BBE\u7F6E"),u("code",null,"disabled"),o("\u5C5E\u6027\uFF0C\u5219\u6574\u4E2A\u9009\u62E9\u5668\u4E0D\u53EF\u7528")],-1),eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" disabled placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u9EC4\u91D1\u7CD5',
      },
      {
        value: '\u9009\u98792',
        label: '\u53CC\u76AE\u5976',
      },
      {
        value: '\u9009\u98793',
        label: '\u86B5\u4ED4\u714E',
      },
      {
        value: '\u9009\u98794',
        label: '\u9F99\u987B\u9762',
      },
      {
        value: '\u9009\u98795',
        label: '\u5317\u4EAC\u70E4\u9E2D',
      },
    ])
    const value = ref('')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),tu=u("h2",{id:"ke-qing-kong-dan-xuan"},[u("a",{class:"header-anchor",href:"#ke-qing-kong-dan-xuan"}),o(" \u53EF\u6E05\u7A7A\u5355\u9009")],-1),lu=u("p",null,[o("\u4E3A Select \u7EC4\u4EF6\u8BBE\u7F6E"),u("code",null,"clearable"),o("\u5C5E\u6027\uFF0C\u5219\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C"),u("code",null,"clearable"),o("\u5C5E\u6027\u4EC5\u9002\u7528\u4E8E\u5355\u9009\u3002")],-1),ou=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u9EC4\u91D1\u7CD5',
      },
      {
        value: '\u9009\u98792',
        label: '\u53CC\u76AE\u5976',
      },
      {
        value: '\u9009\u98793',
        label: '\u86B5\u4ED4\u714E',
      },
      {
        value: '\u9009\u98794',
        label: '\u9F99\u987B\u9762',
      },
      {
        value: '\u9009\u98795',
        label: '\u5317\u4EAC\u70E4\u9E2D',
      },
    ])
    const value = ref('')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),au=u("h2",{id:"chi-cun"},[u("a",{class:"header-anchor",href:"#chi-cun"}),o(" \u5C3A\u5BF8")],-1),nu=u("p",null,[u("code",null,"sm"),o(","),u("code",null,"md"),o(","),u("code",null,"lg"),o("\u4E3A\u53EF\u9009\u503C\uFF0C\u9ED8\u8BA4\u4E3A"),u("code",null,"md"),o("\u3002")],-1),du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" size="sm" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select v-model="value" size="md" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select v-model="value" size="lg" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u9EC4\u91D1\u7CD5',
      },
      {
        value: '\u9009\u98792',
        label: '\u53CC\u76AE\u5976',
      },
      {
        value: '\u9009\u98793',
        label: '\u86B5\u4ED4\u714E',
      },
      {
        value: '\u9009\u98794',
        label: '\u9F99\u987B\u9762',
      },
      {
        value: '\u9009\u98795',
        label: '\u5317\u4EAC\u70E4\u9E2D',
      },
    ])
    const value = ref('')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),ru=u("h2",{id:"ji-chu-duo-xuan"},[u("a",{class:"header-anchor",href:"#ji-chu-duo-xuan"}),o(" \u57FA\u7840\u591A\u9009")],-1),su=u("p",null,[o("\u7528 Tag \u7EC4\u4EF6\u5C55\u793A\u5DF2\u9009\u9879\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E"),u("code",null,"collapse-tags"),o("\u5C5E\u6027\u5C06\u5B83\u4EEC\u5408\u5E76\u4E3A\u4E00\u6BB5\u6587\u5B57\u3002")],-1),iu=u("div",null,[u("p",null,[o("\u4E3A Select \u7EC4\u4EF6\u8BBE\u7F6E"),u("code",null,"multiple"),o("\u5C5E\u6027\u5373\u53EF\u542F\u7528\u591A\u9009\uFF0C\u6B64\u65F6"),u("code",null,"v-model"),o("\u7684\u503C\u4E3A\u5F53\u524D\u9009\u4E2D\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\u3002")])],-1),cu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value1" multiple placeholder="\u8BF7\u9009\u62E9" size="lg" style="width: 300px;">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    <template #prefix>
      <hl-icon><two-computer /></hl-icon>
    </template>
  </hl-select>
  <br><br>
  <hl-select v-model="value1" multiple filterable placeholder="\u53EF\u641C\u7D22" style="width: 300px;">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select
    v-model="value2"
    size="sm"
    multiple
    clearable
    collapse-tags
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 300px;"
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
  <br><br>
  <hl-select
    v-model="value2"
    size="sm"
    multiple
    filterable
    clearable
    collapse-tags
    collapse-tags-tooltip
    placeholder="\u8BF7\u9009\u62E9"
    style="width: 300px;"
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { TwoComputer } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoComputer },
  setup() {
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u9EC4\u91D1\u7CD5',
      },
      {
        value: '\u9009\u98792',
        label: '\u53CC\u76AE\u5976',
      },
      {
        value: '\u9009\u98793',
        label: '\u86B5\u4ED4\u714E',
      },
      {
        value: '\u9009\u98794',
        label: '\u9F99\u987B\u9762',
      },
      {
        value: '\u9009\u98795',
        label: '\u5317\u4EAC\u70E4\u9E2D',
      },
      {
        value: '\u9009\u98796',
        label: '\u5317\u4EAC\u70E4\u9E2D2',
      },
      {
        value: '\u9009\u98797',
        label: '\u5317\u4EAC\u70E4\u9E2D3',
      },
    ])
    const value1 = ref([])
    const value2 = ref([])

    return {
      options,
      value1,
      value2,
    }
  },
})
<\/script>
`)],-1),Eu=u("h2",{id:"zi-ding-yi-mo-ban"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-mo-ban"}),o(" \u81EA\u5B9A\u4E49\u6A21\u677F")],-1),pu=u("p",null,"\u5C06\u81EA\u5B9A\u4E49\u7684 HTML \u6A21\u677F\u63D2\u5165 Option \u7EC4\u4EF6\u7684 slot \u4E2D\u5373\u53EF\u3002",-1),hu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
      <span class="m-r-md">{{ item.label }}</span>
      <span class="text-secondary font-sm">{{ item.value }}</span>
    </hl-option>
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const cities = ref([
      {
        value: 'Beijing',
        label: '\u5317\u4EAC',
      },
      {
        value: 'Shanghai',
        label: '\u4E0A\u6D77',
      },
      {
        value: 'Nanjing',
        label: '\u5357\u4EAC',
      },
      {
        value: 'Chengdu',
        label: '\u6210\u90FD',
      },
      {
        value: 'Shenzhen',
        label: '\u6DF1\u5733',
      },
      {
        value: 'Guangzhou',
        label: '\u5E7F\u5DDE',
      },
    ])
    const value = ref('')

    return {
      cities,
      value,
    }
  },
})
<\/script>
`)],-1),mu=u("h2",{id:"fen-zu"},[u("a",{class:"header-anchor",href:"#fen-zu"}),o(" \u5206\u7EC4")],-1),vu=u("p",null,[o("\u4F7F\u7528 OptionGroup \u7EC4\u4EF6\u5BF9\u5907\u9009\u9879\u8FDB\u884C\u5206\u7EC4\uFF0C\u5B83\u7684"),u("code",null,"label"),o("\u5C5E\u6027\u4E3A\u5206\u7EC4\u540D")],-1),Fu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9">
    <hl-option-group v-for="group in options" :key="group.label" :label="group.label">
      <hl-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
    </hl-option-group>
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        label: '\u70ED\u95E8\u57CE\u5E02',
        options: [
          {
            value: 'Shanghai',
            label: '\u4E0A\u6D77',
          },
          {
            value: 'Beijing',
            label: '\u5317\u4EAC',
          },
        ],
      },
      {
        label: '\u57CE\u5E02\u540D',
        options: [
          {
            value: 'Chengdu',
            label: '\u6210\u90FD',
          },
          {
            value: 'Shenzhen',
            label: '\u6DF1\u5733',
          },
          {
            value: 'Guangzhou',
            label: '\u5E7F\u5DDE',
          },
          {
            value: 'Dalian',
            label: '\u5927\u8FDE',
          },
        ],
      },
    ])
    const value = ref('')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),Cu=u("h2",{id:"ke-sou-suo"},[u("a",{class:"header-anchor",href:"#ke-sou-suo"}),o(" \u53EF\u641C\u7D22")],-1),bu=u("p",null,[o("\u4E3A Select \u7EC4\u4EF6\u6DFB\u52A0"),u("code",null,"filterable"),o("\u5C5E\u6027\u5373\u53EF\u542F\u7528\u641C\u7D22\u529F\u80FD\u3002")],-1),Bu=u("div",null,[u("p",null,[o("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSelect \u7EC4\u4EF6\u4F1A\u627E\u51FA\u6240\u6709"),u("code",null,"label"),o("\u5C5E\u6027\u5305\u542B\u8F93\u5165\u503C\u7684\u9009\u9879\u3002\u5982\u679C\u5E0C\u671B\u4F7F\u7528\u5176\u4ED6\u7684\u641C\u7D22\u903B\u8F91\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A"),u("code",null,"filter-method"),o("\u6765\u5B9E\u73B0\u3002"),u("code",null,"filter-method"),o("\u4E3A\u4E00\u4E2A"),u("code",null,"Function"),o("\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002")])],-1),fu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" filterable placeholder="\u8BF7\u9009\u62E9">
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u9EC4\u91D1\u7CD5',
      },
      {
        value: '\u9009\u98792',
        label: '\u53CC\u76AE\u5976',
      },
      {
        value: '\u9009\u98793',
        label: '\u86B5\u4ED4\u714E',
      },
      {
        value: '\u9009\u98794',
        label: '\u9F99\u987B\u9762',
      },
      {
        value: '\u9009\u98795',
        label: '\u5317\u4EAC\u70E4\u9E2D',
      },
    ])
    const value = ref('')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),_u=u("h2",{id:"yuan-cheng-sou-suo"},[u("a",{class:"header-anchor",href:"#yuan-cheng-sou-suo"}),o(" \u8FDC\u7A0B\u641C\u7D22")],-1),Du=u("p",null,"\u4ECE\u670D\u52A1\u5668\u641C\u7D22\u6570\u636E\uFF0C\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u67E5\u627E",-1),Au=u("div",null,[u("p",null,[o("\u4E3A\u4E86\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\uFF0C\u9700\u8981\u5C06"),u("code",null,"filterable"),o("\u548C"),u("code",null,"remote"),o("\u8BBE\u7F6E\u4E3A"),u("code",null,"true"),o("\uFF0C\u540C\u65F6\u4F20\u5165\u4E00\u4E2A"),u("code",null,"remote-method"),o("\u3002"),u("code",null,"remote-method"),o("\u4E3A\u4E00\u4E2A"),u("code",null,"Function"),o("\uFF0C\u5B83\u4F1A\u5728\u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8F93\u5165\u503C\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679COption \u7EC4\u4EF6\u662F\u901A\u8FC7"),u("code",null,"v-for"),o("\u6307\u4EE4\u6E32\u67D3\u51FA\u6765\u7684\uFF0C\u6B64\u65F6\u9700\u8981\u4E3A Option \u7EC4\u4EF6\u6DFB\u52A0"),u("code",null,"key"),o("\u5C5E\u6027\uFF0C\u4E14\u5176\u503C\u9700\u5177\u6709\u552F\u4E00\u6027\uFF0C\u6BD4\u5982\u6B64\u4F8B\u4E2D\u7684"),u("code",null,"item.value"),o("\u3002")])],-1),gu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([])
    const value = ref([])
    const list = ref([])
    const loading = ref(false)
    const states = ref([
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ])

    const remoteMethod = query => {
      if (query !== '') {
        loading.value = true
        setTimeout(() => {
          loading.value = false
          options.value = list.value.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        options.value = []
      }
    }

    onMounted(() => {
      list.value = states.value.map(item => {
        return { value: \`value:\${item}\`, label: \`label:\${item}\` }
      })
    })

    return {
      options,
      value,
      list,
      loading,
      states,
      remoteMethod,
    }
  },
})
<\/script>
`)],-1),ku=u("h2",{id:"chuang-jian-tiao-mu"},[u("a",{class:"header-anchor",href:"#chuang-jian-tiao-mu"}),o(" \u521B\u5EFA\u6761\u76EE")],-1),yu=u("p",null,"\u53EF\u4EE5\u521B\u5EFA\u5E76\u9009\u4E2D\u9009\u9879\u4E2D\u4E0D\u5B58\u5728\u7684\u6761\u76EE",-1),Vu=u("div",null,[u("p",null,[o("\u4F7F\u7528"),u("code",null,"allow-create"),o("\u5C5E\u6027\u5373\u53EF\u901A\u8FC7\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u6587\u5B57\u6765\u521B\u5EFA\u65B0\u7684\u6761\u76EE\u3002\u6CE8\u610F\u6B64\u65F6"),u("code",null,"filterable"),o("\u5FC5\u987B\u4E3A true\u3002\u672C\u4F8B\u8FD8\u4F7F\u7528\u4E86"),u("code",null,"default-first-option"),o("\u5C5E\u6027\uFF0C\u5728\u8BE5\u5C5E\u6027\u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u6309\u4E0B\u56DE\u8F66\u5C31\u53EF\u4EE5\u9009\u4E2D\u5F53\u524D\u9009\u9879\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u9009\u9879\uFF0C\u65E0\u9700\u4F7F\u7528\u9F20\u6807\u6216\u952E\u76D8\u65B9\u5411\u952E\u8FDB\u884C\u5B9A\u4F4D\u3002")])],-1),wu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E"
  >
    <hl-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </hl-select>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'HTML',
        label: 'HTML',
      },
      {
        value: 'CSS',
        label: 'CSS',
      },
      {
        value: 'JavaScript',
        label: 'JavaScript',
      },
    ])
    const value = ref([])
    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),xu=W('<div class="doc-tip"><p>\u5982\u679C Select \u7684\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u8BF7\u52A1\u5FC5\u6307\u5B9A <code>value-key</code> \u4F5C\u4E3A\u5B83\u7684\u552F\u4E00\u6027\u6807\u8BC6\u3002</p></div><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean / string / boolean / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>value-key</td><td>\u4F5C\u4E3A value \u552F\u4E00\u6807\u8BC6\u7684\u952E\u540D\uFF0C\u7ED1\u5B9A\u503C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u65F6\u5FC5\u586B</td><td>string</td><td>\u2014</td><td>value</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>lg/ md / sm</td><td>md</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags</td><td>\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags-tooltip</td><td>\u9F20\u6807\u6ED1\u5165\u6298\u53E0Tag\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u6298\u53E0\u7684Tag</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>multiple-limit</td><td>\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>name</td><td>select input \u7684 name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>autocomplete</td><td>select input \u7684 autocomplete \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>off</td></tr><tr><td>placeholder</td><td>\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u5BBD\u5EA6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>allow-create</td><td>\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE\uFF0C\u9700\u914D\u5408 <code>filterable</code> \u4F7F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filter-method</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>remote</td><td>\u662F\u5426\u4E3A\u8FDC\u7A0B\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>remote-method</td><td>\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>loading</td><td>\u662F\u5426\u6B63\u5728\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6570\u636E</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>loading-text</td><td>\u8FDC\u7A0B\u52A0\u8F7D\u65F6\u663E\u793A\u7684\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u52A0\u8F7D\u4E2D</td></tr><tr><td>no-match-text</td><td>\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>#empty</code>\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u65E0\u5339\u914D\u6570\u636E</td></tr><tr><td>no-data-text</td><td>\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>#empty</code>\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u65E0\u6570\u636E</td></tr><tr><td>popper-class</td><td>Select \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>reserve-keyword</td><td>\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>default-first-option</td><td>\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879\u3002\u9700\u914D\u5408 <code>filterable</code> \u6216 <code>remote</code> \u4F7F\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body(deprecated)</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false\u3002\u8BF7\u4F7F\u7528teleported\u5C5E\u6027</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>teleported</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u8F93\u5165\u6846</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>tag-type</td><td>\u591A\u9009\u6807\u7B7E\u7C7B\u578B</td><td>string</td><td>info/success/warning/danger</td><td>-</td></tr><tr><td>effect</td><td>\u4E0B\u62C9\u6846\u4E3B\u9898</td><td>string</td><td><code>dark</code> / <code>light</code></td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u76EE\u524D\u7684\u9009\u4E2D\u503C</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false</td></tr><tr><td>remove-tag</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u79FB\u9664 tag \u65F6\u89E6\u53D1</td><td>\u79FB\u9664\u7684 tag \u503C</td></tr><tr><td>clear</td><td>\u53EF\u6E05\u7A7A\u7684\u5355\u9009\u6A21\u5F0F\u4E0B\u7528\u6237\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr><tr><td>blur</td><td>\u4F7F input \u5931\u53BB\u7126\u70B9\uFF0C\u5E76\u9690\u85CF\u4E0B\u62C9\u6846</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Option \u7EC4\u4EF6\u5217\u8868</td></tr><tr><td>prefix</td><td>Select \u7EC4\u4EF6\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>empty</td><td>\u65E0\u9009\u9879\u65F6\u7684\u5217\u8868</td></tr><tr><td>clear</td><td>clear icon \u81EA\u5B9A\u4E49</td></tr></tbody></table><h2 id="option-group-attributes"><a class="header-anchor" href="#option-group-attributes"></a> Option Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u5206\u7EC4\u7684\u7EC4\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u5C06\u8BE5\u5206\u7EC4\u4E0B\u6240\u6709\u9009\u9879\u7F6E\u4E3A\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="option-attributes"><a class="header-anchor" href="#option-attributes"></a> Option Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9009\u9879\u7684\u503C</td><td>string/number/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u9009\u9879\u7684\u6807\u7B7E\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E0E <code>value</code> \u76F8\u540C</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>divider</td><td>\u662F\u5426\u662F\u5206\u9694\u7B26</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',13);function Su(s,n,e,h,i,r){const m=V("hl-demo0"),d=V("demo-block"),p=V("hl-demo1"),c=V("hl-demo2"),f=V("hl-demo3"),a=V("hl-demo4"),t=V("hl-demo5"),v=V("hl-demo6"),F=V("hl-demo7"),l=V("hl-demo8"),E=V("hl-demo9"),B=V("hl-demo10"),g=V("right-nav");return j(),H(I,null,[u("section",null,[P,q,D(d,{fs:""},{source:b(()=>[D(m)]),highlight:b(()=>[Q]),default:b(()=>[K]),_:1}),R,X,D(d,{fs:""},{source:b(()=>[D(p)]),highlight:b(()=>[Y]),_:1}),Z,uu,D(d,{fs:""},{source:b(()=>[D(c)]),highlight:b(()=>[eu]),_:1}),tu,lu,D(d,{fs:""},{source:b(()=>[D(f)]),highlight:b(()=>[ou]),_:1}),au,nu,D(d,{fs:""},{source:b(()=>[D(a)]),highlight:b(()=>[du]),_:1}),ru,su,D(d,{fs:""},{source:b(()=>[D(t)]),highlight:b(()=>[cu]),default:b(()=>[iu]),_:1}),Eu,pu,D(d,{fs:""},{source:b(()=>[D(v)]),highlight:b(()=>[hu]),_:1}),mu,vu,D(d,{fs:""},{source:b(()=>[D(F)]),highlight:b(()=>[Fu]),_:1}),Cu,bu,D(d,{fs:""},{source:b(()=>[D(l)]),highlight:b(()=>[fu]),default:b(()=>[Bu]),_:1}),_u,Du,D(d,{fs:""},{source:b(()=>[D(E)]),highlight:b(()=>[gu]),default:b(()=>[Au]),_:1}),ku,yu,D(d,{fs:""},{source:b(()=>[D(B)]),highlight:b(()=>[wu]),default:b(()=>[Vu]),_:1}),xu]),D(g)],64)}var Tu=$(J,[["render",Su]]);export{Tu as default};
