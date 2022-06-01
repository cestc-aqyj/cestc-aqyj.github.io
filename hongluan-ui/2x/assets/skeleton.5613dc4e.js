var P=Object.defineProperty;var O=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var z=(n,e,t)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,k=(n,e)=>{for(var t in e||(e={}))T.call(e,t)&&z(n,t,e[t]);if(O)for(var t of O(e))H.call(e,t)&&z(n,t,e[t]);return n};import{H as x,L as $,W as Q,Q as u,X as d,P as s,a4 as W,S as j,o as X,aL as h}from"./vue.8f5537c1.js";import{_ as q}from"./index.4914c8f9.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const G={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,openBlock:e,createBlock:t}=h;function a(l,p){const o=n("hl-skeleton");return e(),t(o)}return k({render:a},{})}(),"hl-demo1":function(){const{resolveComponent:n,openBlock:e,createBlock:t}=h;function a(l,p){const o=n("hl-skeleton");return e(),t(o,{rows:5})}return k({render:a},{})}(),"hl-demo2":function(){const{resolveComponent:n,openBlock:e,createBlock:t}=h;function a(l,p){const o=n("hl-skeleton");return e(),t(o,{rows:5,animated:""})}return k({render:a},{})}(),"hl-demo3":function(){const{resolveComponent:n,createVNode:e,createElementVNode:t,withCtx:a,openBlock:i,createBlock:l}=h,p={style:{padding:"14px"}},o={style:{display:"flex","align-items":"center","justify-items":"space-between"}};function C(B,v){const m=n("hl-skeleton-item"),A=n("hl-skeleton");return i(),l(A,{style:{width:"240px"}},{template:a(()=>[e(m,{variant:"image",style:{width:"240px",height:"240px"}}),t("div",p,[e(m,{variant:"p",style:{width:"50%"}}),t("div",o,[e(m,{variant:"text",style:{"margin-right":"16px"}}),e(m,{variant:"text",style:{width:"30%"}})])])]),_:1})}return k({render:C},{})}(),"hl-demo4":function(){const{createElementVNode:n,resolveComponent:e,createVNode:t,toDisplayString:a,createTextVNode:i,withCtx:l,openBlock:p,createBlock:o}=h,C=n("label",{style:{"margin-right":"16px"}},"\u5207\u6362\u52A0\u8F7D\u72B6\u6001",-1),D={style:{padding:"14px"}},B={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},v=n("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),m=n("p",{class:"m-t-md"},"Delicious hamburger",-1),A={class:"time m-r-md"},b=i("\u64CD\u4F5C\u6309\u94AE");function N(c,_){const E=e("hl-switch"),F=e("hl-skeleton-item"),r=e("hl-button"),V=e("hl-panel"),g=e("hl-skeleton"),f=e("hl-group");return p(),o(f,{dir:"vertical",align:"items-top",gap:"var(--md)"},{default:l(()=>[n("div",null,[C,t(E,{modelValue:c.loading,"onUpdate:modelValue":_[0]||(_[0]=y=>c.loading=y)},null,8,["modelValue"])]),t(g,{style:{width:"240px"},loading:c.loading,animated:""},{template:l(()=>[t(F,{variant:"image",style:{width:"240px",height:"240px"}}),n("div",D,[t(F,{variant:"h3",style:{width:"50%"}}),n("div",B,[t(F,{variant:"text",style:{"margin-right":"16px"}}),t(F,{variant:"text",style:{width:"30%"}})])])]),default:l(()=>[t(V,null,{footer:l(()=>[n("span",A,a(c.currentDate),1),t(r,{type:"primary"},{default:l(()=>[b]),_:1})]),default:l(()=>[v,m]),_:1})]),_:1},8,["loading"])]),_:1})}const{defineComponent:S}=h,{ref:w}=h;return k({render:N},S({setup(c,{expose:_}){_();const r={loading:w(!0),currentDate:"2020-09-23",ref:w};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}(),"hl-demo5":function(){const{createTextVNode:n,resolveComponent:e,withCtx:t,createVNode:a,createElementVNode:i,renderList:l,Fragment:p,openBlock:o,createElementBlock:C,toDisplayString:D,createBlock:B}=h,v=n("\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D"),m={style:{padding:"14px"}},A={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},b=["src"],N={class:"time m-t-md"},S={class:"time m-r-md"},w=n("\u64CD\u4F5C\u6309\u94AE");function L(r,V){const g=e("hl-button"),f=e("hl-skeleton-item"),y=e("hl-panel"),M=e("hl-skeleton"),U=e("hl-group");return o(),B(U,{dir:"vertical",align:"items-top",gap:"var(--md)",style:{width:"400px"}},{default:t(()=>[a(g,{onClick:r.setLoading},{default:t(()=>[v]),_:1},8,["onClick"]),a(M,{style:{width:"400px"},loading:r.loading,animated:"",count:3},{template:t(()=>[a(f,{variant:"image",style:{width:"400px",height:"267px"}}),i("div",m,[a(f,{variant:"h3",style:{width:"50%"}}),i("div",A,[a(f,{variant:"text",style:{"margin-right":"16px"}}),a(f,{variant:"text",style:{width:"30%"}})])])]),default:t(()=>[(o(!0),C(p,null,l(r.lists,I=>(o(),B(y,{key:I.name},{footer:t(()=>[i("span",S,D(r.currentDate),1),a(g,{type:"primary"},{default:t(()=>[w]),_:1})]),default:t(()=>[i("img",{src:I.imgUrl,class:"image multi-content w-full"},null,8,b),i("p",N,D(I.name),1)]),_:2},1024))),128))]),_:1},8,["loading"])]),_:1})}const{defineComponent:c}=h,{onMounted:_,ref:E}=h;return k({render:L},c({setup(r,{expose:V}){V();const g=E(!0),f=E("2021-09-23"),y=E([]),M=()=>{g.value=!0,setTimeout(()=>g.value=!1,2e3)};_(()=>{g.value=!1,y.value=[{imgUrl:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",name:"Deer"},{imgUrl:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",name:"Horse"},{imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",name:"Mountain Lion"}]});const U={loading:g,currentDate:f,lists:y,setLoading:M,onMounted:_,ref:E};return Object.defineProperty(U,"__isScriptSetup",{enumerable:!1,value:!0}),U}}))}(),"hl-demo6":function(){const{createElementVNode:n,resolveComponent:e,createVNode:t,toDisplayString:a,createTextVNode:i,withCtx:l,openBlock:p,createBlock:o}=h,C=n("label",{style:{"margin-right":"16px"}},"\u5207\u6362\u52A0\u8F7D",-1),D={style:{padding:"14px"}},B={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},v=n("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),m=n("p",{class:"m-t-md"},"Delicious hamburger",-1),A={class:"time m-r-md"},b=i("\u64CD\u4F5C\u6309\u94AE");function N(c,_){const E=e("hl-switch"),F=e("hl-skeleton-item"),r=e("hl-button"),V=e("hl-panel"),g=e("hl-skeleton"),f=e("hl-group");return p(),o(f,{dir:"vertical",align:"items-top",gap:"var(--md)"},{default:l(()=>[n("div",null,[C,t(E,{modelValue:c.loading,"onUpdate:modelValue":_[0]||(_[0]=y=>c.loading=y)},null,8,["modelValue"])]),t(g,{style:{width:"240px"},loading:c.loading,animated:"",throttle:500},{template:l(()=>[t(F,{variant:"image",style:{width:"240px",height:"240px"}}),n("div",D,[t(F,{variant:"h3",style:{width:"50%"}}),n("div",B,[t(F,{variant:"text",style:{"margin-right":"16px"}}),t(F,{variant:"text",style:{width:"30%"}})])])]),default:l(()=>[t(V,null,{footer:l(()=>[n("span",A,a(c.currentDate),1),t(r,{type:"primary"},{default:l(()=>[b]),_:1})]),default:l(()=>[v,m]),_:1})]),_:1},8,["loading"])]),_:1})}const{defineComponent:S}=h,{ref:w}=h;return k({render:N},S({setup(c,{expose:_}){_();const r={loading:w(!1),currentDate:"2020-09-23",ref:w};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}()}},J=u("h1",null,"Skeleton \u9AA8\u67B6\u5C4F",-1),K=u("p",null,"\u5728\u9700\u8981\u7B49\u5F85\u52A0\u8F7D\u5185\u5BB9\u7684\u4F4D\u7F6E\u8BBE\u7F6E\u4E00\u4E2A\u9AA8\u67B6\u5C4F\uFF0C\u67D0\u4E9B\u573A\u666F\u4E0B\u6BD4 Loading \u7684\u89C6\u89C9\u6548\u679C\u66F4\u597D\u3002",-1),R=u("div",null,[u("p",null,"\u57FA\u7840\u7684\u9AA8\u67B6\u6548\u679C\u3002")],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-skeleton />
</template>
`)],-1),Z=u("h2",{id:"geng-duo-can-shu"},[u("a",{class:"header-anchor",href:"#geng-duo-can-shu"}),j(" \u66F4\u591A\u53C2\u6570")],-1),tt=u("p",null,"\u53EF\u4EE5\u914D\u7F6E\u9AA8\u67B6\u5C4F\u6BB5\u843D\u6570\u91CF\uFF0C\u4EE5\u4FBF\u66F4\u63A5\u8FD1\u771F\u5B9E\u6E32\u67D3\u6548\u679C\u3002\u663E\u793A\u7684\u6570\u91CF\u4F1A\u6BD4\u4F20\u5165\u7684\u6570\u91CF\u591A 1\uFF0C\u9996\u884C\u4F1A\u88AB\u6E32\u67D3\u4E00\u4E2A\u957F\u5EA6 33% \u7684\u6BB5\u9996\u3002",-1),et=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-skeleton :rows="5" />
</template>
`)],-1),ut=u("h2",{id:"dong-hua-xiao-guo"},[u("a",{class:"header-anchor",href:"#dong-hua-xiao-guo"}),j(" \u52A8\u753B\u6548\u679C")],-1),nt=u("p",null,"\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F00\u5173\u6807\u5FD7\uFF0C\u8868\u660E\u662F\u5426\u663E\u793A\u52A0\u8F7D\u52A8\u753B\uFF0C \u8C03\u7528 animated \u5982\u679C\u771F\u771F\u662F\u8FD9\u6837\uFF0C\u6240\u6709\u7684 Skeleton \u7684\u5B50\u8282\u70B9\u5C06\u663E\u793A\u52A8\u753B\u3002",-1),ot=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-skeleton :rows="5" animated />
</template>
`)],-1),lt=u("h2",{id:"zi-ding-yi-yang-shi"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),j(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),at=u("p",null,"Hongluan UI \u63D0\u4F9B\u7684\u6392\u7248\u6A21\u5F0F\u6709\u65F6\u5019\u5E76\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u5F53\u60A8\u60F3\u8981\u7528\u81EA\u5DF1\u5B9A\u4E49\u7684\u6A21\u677F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A\u5177\u540D Slot template \u6765\u81EA\u5DF1\u8BBE\u5B9A\u6A21\u677F\u3002",-1),st=u("p",null,"\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E0D\u540C\u7684\u6A21\u677F\u5355\u5143\u53EF\u4F9B\u4F7F\u7528\uFF0C\u5177\u4F53\u53EF\u9009\u503C\u8BF7\u770B API \u8BE6\u7EC6\u63CF\u8FF0\u3002 \u53E6\u5916\uFF0C\u5728\u6784\u5EFA\u60A8\u81EA\u5DF1\u81EA\u5B9A\u4E49\u7684\u9AA8\u67B6\u65F6\uFF0C\u60A8\u5E94\u8BE5\u5C3D\u53EF\u80FD\u66F4\u63A5\u8FD1\u4E8E\u771F\u6B63\u7684DOM\u3002 \u907F\u514DDOM\u56E0\u9AD8\u5EA6\u5DEE\u800C\u53D1\u751F\u6296\u52A8\u3002",-1),it=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-skeleton style="width: 240px">
    <template #template>
      <hl-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <hl-skeleton-item variant="p" style="width: 50%" />
        <div
          style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          "
        >
          <hl-skeleton-item variant="text" style="margin-right: 16px" />
          <hl-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
  </hl-skeleton>
</template>
`)],-1),rt=u("h2",{id:"jia-zai-zhuang-tai"},[u("a",{class:"header-anchor",href:"#jia-zai-zhuang-tai"}),j(" \u52A0\u8F7D\u72B6\u6001")],-1),dt=u("p",null,"\u5F53 Loading \u7ED3\u675F\u4E4B\u540E\uFF0C\u6211\u4EEC\u5F80\u5F80\u9700\u8981\u663E\u793A\u771F\u5B9E\u7684 UI\uFF0C \u53EF\u4EE5\u901A\u8FC7 loading \u7684\u503C\u6765\u63A7\u5236\u662F\u5426\u663E\u793A\u52A0\u8F7D\u540E\u7684 DOM\u3002 \u7136\u540E\u901A\u8FC7 \u5177\u540D Slot default \u6765\u8BBE\u7F6E\u5F53 loading \u7ED3\u675F\u4E4B\u540E\u9700\u8981\u5C55\u793A\u7684 UI\u3002",-1),ct=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group dir="vertical" align="items-top" gap="var(--md)">
    <div>
      <label style="margin-right: 16px">\u5207\u6362\u52A0\u8F7D\u72B6\u6001</label>
      <hl-switch v-model="loading" />
    </div>
    <hl-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <hl-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <hl-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <hl-skeleton-item variant="text" style="margin-right: 16px" />
            <hl-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <hl-panel>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <p class="m-t-md">Delicious hamburger</p>
          <template #footer>
            <span class="time m-r-md">{{ currentDate }}</span>
            <hl-button type="primary">\u64CD\u4F5C\u6309\u94AE</hl-button>
          </template>
        </hl-panel>
      </template>
    </hl-skeleton>
  </hl-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
const currentDate = '2020-09-23'

<\/script>
`)],-1),ht=u("h2",{id:"xuan-ran-duo-tiao-shu-ju"},[u("a",{class:"header-anchor",href:"#xuan-ran-duo-tiao-shu-ju"}),j(" \u6E32\u67D3\u591A\u6761\u6570\u636E")],-1),pt=u("p",null,"\u5927\u591A\u65F6\u5019, \u9AA8\u67B6\u5C4F\u90FD\u88AB\u7528\u6765\u6E32\u67D3\u5217\u8868, \u5F53\u6211\u4EEC\u9700\u8981\u5728\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\u7684\u65F6\u5019\u6765\u6E32\u67D3\u4E00\u4E2A\u5047\u7684 UI\u3002 \u5229\u7528 count \u8FD9\u4E2A\u5C5E\u6027\u5C31\u80FD\u63A7\u5236\u6E32\u67D3\u591A\u5C11\u6761\u5047\u7684\u6570\u636E\u5728\u9875\u9762\u4E0A",-1),mt=u("div",null,[u("p",null,"\u8BF7\u6CE8\u610F, \u8BF7\u5C3D\u53EF\u80FD\u7684\u5C06 count \u7684\u5927\u5C0F\u4FDD\u6301\u5728\u6700\u5C0F\u72B6\u6001, \u5373\u4F7F\u662F\u5047\u7684 UI, DOM \u5143\u7D20\u591A\u4E86\u4E4B\u540E, \u7167\u6837\u4F1A\u5F15\u8D77\u6027\u80FD\u95EE\u9898, \u5E76\u4E14\u5728\u9AA8\u67B6\u5C4F\u9500\u6BC1\u65F6\u6240\u6D88\u8017\u7684\u65F6\u95F4\u4E5F\u4F1A\u66F4\u957F\uFF08\u76F8\u5BF9\u6765\u8BF4\uFF09\u3002")],-1),_t=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group dir="vertical" align="items-top" gap="var(--md)" style="width: 400px">
    <hl-button @click="setLoading">\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D</hl-button>
    <hl-skeleton style="width: 400px" :loading="loading" animated :count="3">
      <template #template>
        <hl-skeleton-item variant="image" style="width: 400px; height: 267px" />
        <div style="padding: 14px">
          <hl-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <hl-skeleton-item variant="text" style="margin-right: 16px" />
            <hl-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <hl-panel v-for="item in lists" :key="item.name">
          <img :src="item.imgUrl" class="image multi-content w-full">
          <p class="time m-t-md">{{ item.name }}</p>
          <template #footer>
            <span class="time m-r-md">{{ currentDate }}</span>
            <hl-button type="primary">\u64CD\u4F5C\u6309\u94AE</hl-button>
          </template>
        </hl-panel>
      </template>
    </hl-skeleton>
  </hl-group>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'


const loading = ref(true)
const currentDate = ref('2021-09-23')
const lists = ref([])

const setLoading = () => {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}

onMounted(() => {
  loading.value = false
  lists.value = [
    {
      imgUrl:
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl:
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
})
<\/script>
`)],-1),Ft=u("h2",{id:"fang-zhi-xuan-ran-dou-dong"},[u("a",{class:"header-anchor",href:"#fang-zhi-xuan-ran-dou-dong"}),j(" \u9632\u6B62\u6E32\u67D3\u6296\u52A8")],-1),gt=u("p",null,"\u6709\u7684\u65F6\u5019\uFF0CAPI \u7684\u8BF7\u6C42\u56DE\u6765\u7684\u7279\u522B\u5FEB\uFF0C\u5F80\u5F80\u9AA8\u67B6\u5360\u4F4D\u521A\u521A\u88AB\u6E32\u67D3\uFF0C\u771F\u5B9E\u7684\u6570\u636E\u5C31\u5DF2\u7ECF\u56DE\u6765\u4E86\uFF0C\u7528\u6237\u7684\u754C\u9762\u4F1A\u7A81\u7136\u4E00\u95EA\uFF0C \u6B64\u65F6\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5C31\u9700\u8981\u901A\u8FC7 throttle \u5C5E\u6027\u6765\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\u3002",-1),Et=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group dir="vertical" align="items-top" gap="var(--md)">
    <div>
      <label style="margin-right: 16px">\u5207\u6362\u52A0\u8F7D</label>
      <hl-switch v-model="loading" />
    </div>
    <hl-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
      <template #template>
        <hl-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <hl-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <hl-skeleton-item variant="text" style="margin-right: 16px" />
            <hl-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <hl-panel>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <p class="m-t-md">Delicious hamburger</p>
          <template #footer>
            <span class="time m-r-md">{{ currentDate }}</span>
            <hl-button type="primary">\u64CD\u4F5C\u6309\u94AE</hl-button>
          </template>
        </hl-panel>
      </template>
    </hl-skeleton>
  </hl-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const currentDate = '2020-09-23'

<\/script>
`)],-1),ft=X('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>animated</td><td>\u662F\u5426\u4F7F\u7528\u52A8\u753B</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>count</td><td>\u6E32\u67D3\u591A\u5C11\u4E2A template, \u5EFA\u8BAE\u4F7F\u7528\u5C3D\u53EF\u80FD\u5C0F\u7684\u6570\u5B57</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u7ED3\u675F\u540E\u7684 DOM \u7ED3\u6784</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>rows</td><td>\u9AA8\u67B6\u5C4F\u6BB5\u843D\u6570\u91CF</td><td>number</td><td>\u2014</td><td>3</td></tr><tr><td>throttle</td><td>\u5EF6\u8FDF\u5360\u4F4D DOM \u6E32\u67D3\u7684\u65F6\u95F4, \u5355\u4F4D\u662F\u6BEB\u79D2</td><td>number</td><td>-</td><td>0</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u7528\u6765\u5C55\u793A\u52A0\u8F7D\u72B6\u6001\u7ED3\u675F\u540E\u7684 UI</td></tr><tr><td>template</td><td>\u7528\u6765\u5C55\u793A\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26</td></tr></tbody></table><h2 id="skeleton-item-attributes"><a class="header-anchor" href="#skeleton-item-attributes"></a> Skeleton Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>variant</td><td>\u5F53\u524D\u663E\u793A\u7684\u5360\u4F4D\u5143\u7D20\u7684\u6837\u5F0F</td><td>string</td><td>p / text / h1 / h3 / text / caption / button / image / circle / rect</td><td>text</td></tr></tbody></table>',6);function Ct(n,e,t,a,i,l){const p=x("hl-demo0"),o=x("demo-block"),C=x("hl-demo1"),D=x("hl-demo2"),B=x("hl-demo3"),v=x("hl-demo4"),m=x("hl-demo5"),A=x("hl-demo6"),b=x("right-nav");return $(),Q(W,null,[u("section",null,[J,K,d(o,{fs:""},{source:s(()=>[d(p)]),highlight:s(()=>[Y]),default:s(()=>[R]),_:1}),Z,tt,d(o,{fs:""},{source:s(()=>[d(C)]),highlight:s(()=>[et]),_:1}),ut,nt,d(o,{fs:""},{source:s(()=>[d(D)]),highlight:s(()=>[ot]),_:1}),lt,at,st,d(o,{fs:""},{source:s(()=>[d(B)]),highlight:s(()=>[it]),_:1}),rt,dt,d(o,{fs:""},{source:s(()=>[d(v)]),highlight:s(()=>[ct]),_:1}),ht,pt,d(o,{fs:""},{source:s(()=>[d(m)]),highlight:s(()=>[_t]),default:s(()=>[mt]),_:1}),Ft,gt,d(o,{fs:""},{source:s(()=>[d(A)]),highlight:s(()=>[Et]),_:1}),ft]),d(b)],64)}var kt=q(G,[["render",Ct]]);export{kt as default};
