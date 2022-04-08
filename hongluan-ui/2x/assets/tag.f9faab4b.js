var z=Object.defineProperty;var N=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var I=(u,n,e)=>n in u?z(u,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[n]=e,v=(u,n)=>{for(var e in n||(n={}))j.call(n,e)&&I(u,e,n[e]);if(N)for(var e of N(n))L.call(n,e)&&I(u,e,n[e]);return u};import{F as b,L as S,W as $,Q as t,X as _,P as p,a2 as q,aJ as C,M as s,o as K}from"./vue.fdea90c3.js";import{_ as O}from"./index.d7b78d50.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const P={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:u,resolveComponent:n,withCtx:e,createVNode:o,openBlock:E,createBlock:h}=C,r=u("\u6807\u7B7E\u4E00"),l=u("\u6807\u7B7E\u4E8C"),c=u("\u6807\u7B7E\u4E09"),m=u("\u6807\u7B7E\u56DB"),g=u("\u6807\u7B7E\u4E94"),B=u("\u6807\u7B7E\u516D");function f(y,F){const d=n("hl-tag"),a=n("hl-group");return E(),h(a,{gap:"var(--md)"},{default:e(()=>[o(d,null,{default:e(()=>[r]),_:1}),o(d,{type:"primary"},{default:e(()=>[l]),_:1}),o(d,{type:"success"},{default:e(()=>[c]),_:1}),o(d,{type:"warning"},{default:e(()=>[m]),_:1}),o(d,{type:"danger"},{default:e(()=>[g]),_:1}),o(d,{type:"info"},{default:e(()=>[B]),_:1})]),_:1})}return v({render:f},{})}(),"hl-demo1":function(){const{renderList:u,Fragment:n,openBlock:e,createElementBlock:o,toDisplayString:E,createTextVNode:h,resolveComponent:r,withCtx:l,createBlock:c}=C;function m(i,y){const F=r("hl-tag"),d=r("hl-group");return e(),c(d,{gap:"var(--md)"},{default:l(()=>[(e(!0),o(n,null,u(i.items,a=>(e(),c(F,{key:a.label,type:a.type,effect:"light"},{default:l(()=>[h(E(a.label),1)]),_:2},1032,["type"]))),128))]),_:1})}const{defineComponent:g,ref:B}=C,f=g({setup(){return{items:B([{label:"\u6807\u7B7E\u4E00",type:null},{label:"\u6807\u7B7E\u4E8C",type:"primary"},{label:"\u6807\u7B7E\u4E09",type:"success"},{label:"\u6807\u7B7E\u56DB",type:"warning"},{label:"\u6807\u7B7E\u4E94",type:"danger"},{label:"\u6807\u7B7E\u516D",type:"info"}])}}});return v({render:m},f)}(),"hl-demo2":function(){const{renderList:u,Fragment:n,openBlock:e,createElementBlock:o,toDisplayString:E,createTextVNode:h,resolveComponent:r,withCtx:l,createBlock:c}=C;function m(i,y){const F=r("hl-tag"),d=r("hl-group");return e(),c(d,{gap:"var(--md)"},{default:l(()=>[(e(!0),o(n,null,u(i.items,a=>(e(),c(F,{key:a.label,type:a.type,effect:"light",round:""},{default:l(()=>[h(E(a.label),1)]),_:2},1032,["type"]))),128))]),_:1})}const{defineComponent:g,ref:B}=C,f=g({setup(){return{items:B([{label:"\u6807\u7B7E\u4E00",type:null},{label:"\u6807\u7B7E\u4E8C",type:"primary"},{label:"\u6807\u7B7E\u4E09",type:"success"},{label:"\u6807\u7B7E\u56DB",type:"warning"},{label:"\u6807\u7B7E\u4E94",type:"danger"},{label:"\u6807\u7B7E\u516D",type:"info"}])}}});return v({render:m},f)}(),"hl-demo3":function(){const{createTextVNode:u,resolveComponent:n,withCtx:e,createVNode:o,openBlock:E,createBlock:h}=C,r=u("\u6807\u7B7E\u4E00"),l=u("\u6807\u7B7E\u4E8C"),c=u("\u6807\u7B7E\u4E09"),m=u("\u6807\u7B7E\u56DB"),g=u("\u6807\u7B7E\u4E94"),B=u("\u6807\u7B7E\u516D");function f(y,F){const d=n("hl-tag"),a=n("hl-group");return E(),h(a,{gap:"var(--md)"},{default:e(()=>[o(d,{outline:""},{default:e(()=>[r]),_:1}),o(d,{type:"primary",outline:""},{default:e(()=>[l]),_:1}),o(d,{type:"success",outline:""},{default:e(()=>[c]),_:1}),o(d,{type:"warning",outline:""},{default:e(()=>[m]),_:1}),o(d,{type:"danger",outline:""},{default:e(()=>[g]),_:1}),o(d,{type:"info",outline:""},{default:e(()=>[B]),_:1})]),_:1})}return v({render:f},{})}(),"hl-demo4":function(){const{createTextVNode:u,resolveComponent:n,withCtx:e,createVNode:o,openBlock:E,createBlock:h}=C,r=u("\u5C0F\u578B\u6807\u7B7E"),l=u("\u9ED8\u8BA4\u6807\u7B7E"),c=u("\u5927\u578B\u6807\u7B7E");function m(B,f){const i=n("hl-tag"),y=n("hl-group");return E(),h(y,{gap:"var(--md)"},{default:e(()=>[o(i,{size:"sm"},{default:e(()=>[r]),_:1}),o(i,null,{default:e(()=>[l]),_:1}),o(i,{size:"lg"},{default:e(()=>[c]),_:1})]),_:1})}return v({render:m},{})}(),"hl-demo5":function(){const{createTextVNode:u,resolveComponent:n,withCtx:e,createVNode:o,openBlock:E,createBlock:h}=C,r=u("\u9ED8\u8BA4\u6807\u7B7E"),l=u("\u9ED8\u8BA4\u6807\u7B7E"),c=u("\u9ED8\u8BA4\u6807\u7B7E");function m(B,f){const i=n("hl-tag"),y=n("hl-group");return E(),h(y,{gap:"var(--md)"},{default:e(()=>[o(i,{color:"#ffeedd"},{default:e(()=>[r]),_:1}),o(i,{active:""},{default:e(()=>[l]),_:1}),o(i,{type:"primary",effect:"light",active:""},{default:e(()=>[c]),_:1})]),_:1})}return v({render:m},{})}(),"hl-demo6":function(){const{renderList:u,Fragment:n,openBlock:e,createElementBlock:o,toDisplayString:E,createTextVNode:h,resolveComponent:r,withCtx:l,createBlock:c}=C;function m(i,y){const F=r("hl-tag"),d=r("hl-group");return e(),c(d,{gap:"var(--md)"},{default:l(()=>[(e(!0),o(n,null,u(i.tags,a=>(e(),c(F,{key:a.name,closable:"",type:a.type},{default:l(()=>[h(E(a.name),1)]),_:2},1032,["type"]))),128))]),_:1})}const{defineComponent:g,ref:B}=C,f=g({setup(){return{tags:B([{name:"\u6807\u7B7E\u4E8C",type:"primary"},{name:"\u6807\u7B7E\u4E09",type:"success"},{name:"\u6807\u7B7E\u56DB",type:"warning"},{name:"\u6807\u7B7E\u4E94",type:"danger"},{name:"\u6807\u7B7E\u516D",type:"info"}])}}});return v({render:m},f)}(),"hl-demo7":function(){const{createTextVNode:u,resolveComponent:n,withCtx:e,openBlock:o,createBlock:E}=C,h=u(" Tag\u7701\u7565\u53F7\u793A\u4F8B ");function r(c,m){const g=n("hl-tag");return o(),E(g,{closable:"",type:"primary",style:{width:"100px"}},{default:e(()=>[h]),_:1})}return v({render:r},{})}(),"hl-demo8":function(){const{renderList:u,Fragment:n,openBlock:e,createElementBlock:o,toDisplayString:E,createTextVNode:h,resolveComponent:r,withCtx:l,createBlock:c,withKeys:m,createCommentVNode:g}=C,B=h("+ New Tag");function f(a,x){const A=r("hl-tag"),w=r("hl-input"),V=r("hl-button"),T=r("hl-group");return e(),c(T,{gap:"var(--md)"},{default:l(()=>[(e(!0),o(n,null,u(a.dynamicTags,k=>(e(),c(A,{key:k,closable:"","disable-transitions":!1,onClose:D=>a.handleClose(k)},{default:l(()=>[h(E(k),1)]),_:2},1032,["onClose"]))),128)),a.inputVisible?(e(),c(w,{key:0,ref:"saveTagInput",modelValue:a.inputValue,"onUpdate:modelValue":x[0]||(x[0]=k=>a.inputValue=k),class:"input-new-tag",size:"sm",onKeyup:m(a.handleInputConfirm,["enter"]),onBlur:a.handleInputConfirm},null,8,["modelValue","onKeyup","onBlur"])):(e(),c(V,{key:1,class:"button-new-tag",size:"sm",onClick:a.showInput},{default:l(()=>[B]),_:1},8,["onClick"]))]),_:1})}const{defineComponent:i,ref:y,nextTick:F}=C,d=i({setup(){const a=y(["\u6807\u7B7E\u4E00","\u6807\u7B7E\u4E8C","\u6807\u7B7E\u4E09"]),x=y(!1),A=y(""),w=y(null);return{saveTagInput:w,dynamicTags:a,inputVisible:x,inputValue:A,handleClose:D=>{a.value.splice(a.value.indexOf(D),1)},showInput:()=>{x.value=!0,F(D=>{w.value.focus()})},handleInputConfirm:()=>{let D=A.value;D&&a.value.push(D),x.value=!1,A.value=""}}}});return v({render:f},d)}()}},M=t("h1",null,"Tag \u6807\u7B7E",-1),Q=t("p",null,"\u7528\u4E8E\u6807\u8BB0\u548C\u9009\u62E9\u3002",-1),W=t("div",null,[t("p",null,[s("\u7531"),t("code",null,"type"),s("\u5C5E\u6027\u6765\u9009\u62E9 tag \u7684\u989C\u8272\u3002\u53EF\u9009\u503C\u4E3A"),t("code",null,"primary"),s("\u3001"),t("code",null,"success"),s("\u3001"),t("code",null,"warning"),s("\u3001"),t("code",null,"danger"),s(" \u548C "),t("code",null,"info"),s("\u3002")])],-1),X=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag>\u6807\u7B7E\u4E00</hl-tag>
    <hl-tag type="primary">\u6807\u7B7E\u4E8C</hl-tag>
    <hl-tag type="success">\u6807\u7B7E\u4E09</hl-tag>
    <hl-tag type="warning">\u6807\u7B7E\u56DB</hl-tag>
    <hl-tag type="danger">\u6807\u7B7E\u4E94</hl-tag>
    <hl-tag type="info">\u6807\u7B7E\u516D</hl-tag>
  </hl-group>
</template>
`)],-1),J=t("h2",{id:"light-yang-shi"},[t("a",{class:"header-anchor",href:"#light-yang-shi"}),s(" Light \u6837\u5F0F")],-1),U=t("p",null,"\u5F53\u6807\u7B7E\u9644\u6709\u72B6\u6001\u8272\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u5728\u52A0\u4E0A light \u5C5E\u6027\u5373\u53EF\u4F7F\u5B83\u7684\u989C\u8272\u51CF\u6DE1\u3002",-1),G=t("div",null,[t("p",null,[s("\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,'effect="light"'),s("\u5C5E\u6027\u6765\u6539\u53D8\u4E3B\u9898")])],-1),H=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag v-for="item in items" :key="item.label" :type="item.type" effect="light">
      {{ item.label }}
    </hl-tag>
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const items = ref([
      { label: '\u6807\u7B7E\u4E00', type: null },
      { label: '\u6807\u7B7E\u4E8C', type: 'primary' },
      { label: '\u6807\u7B7E\u4E09', type: 'success' },
      { label: '\u6807\u7B7E\u56DB', type: 'warning' },
      { label: '\u6807\u7B7E\u4E94', type: 'danger' },
      { label: '\u6807\u7B7E\u516D', type: 'info' },
    ])
    return {
      items,
    }
  },
})
<\/script>
`)],-1),R=t("h2",{id:"yuan-jiao-yang-shi"},[t("a",{class:"header-anchor",href:"#yuan-jiao-yang-shi"}),s(" \u5706\u89D2\u6837\u5F0F")],-1),Y=t("p",null,"round \u5C5E\u6027\u53EF\u4EE5\u4F7F tag \u5448\u73B0\u4E3A\u5706\u8FB9\u6837\u5F0F",-1),Z=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag v-for="item in items" :key="item.label" :type="item.type" effect="light" round>
      {{ item.label }}
    </hl-tag>
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const items = ref([
      { label: '\u6807\u7B7E\u4E00', type: null },
      { label: '\u6807\u7B7E\u4E8C', type: 'primary' },
      { label: '\u6807\u7B7E\u4E09', type: 'success' },
      { label: '\u6807\u7B7E\u56DB', type: 'warning' },
      { label: '\u6807\u7B7E\u4E94', type: 'danger' },
      { label: '\u6807\u7B7E\u516D', type: 'info' },
    ])
    return {
      items,
    }
  },
})
<\/script>
`)],-1),tt=t("h2",{id:"lun-kuo-yang-shi"},[t("a",{class:"header-anchor",href:"#lun-kuo-yang-shi"}),s(" \u8F6E\u5ED3\u6837\u5F0F")],-1),et=t("p",null,"Tag \u7EC4\u4EF6\u8FD8\u63D0\u4F9B\u4E00\u6B3E\u8F6E\u5ED3\u6837\u5F0F\uFF0C\u4EE5\u4FBF\u4F60\u6709\u66F4\u591A\u573A\u666F\u7684\u8868\u8FBE\u65B9\u5F0F\u3002",-1),ut=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag outline>\u6807\u7B7E\u4E00</hl-tag>
    <hl-tag type="primary" outline>\u6807\u7B7E\u4E8C</hl-tag>
    <hl-tag type="success" outline>\u6807\u7B7E\u4E09</hl-tag>
    <hl-tag type="warning" outline>\u6807\u7B7E\u56DB</hl-tag>
    <hl-tag type="danger" outline>\u6807\u7B7E\u4E94</hl-tag>
    <hl-tag type="info" outline>\u6807\u7B7E\u516D</hl-tag>
  </hl-group>
</template>
`)],-1),nt=t("h2",{id:"chi-cun-xiu-shi"},[t("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),s(" \u5C3A\u5BF8\u4FEE\u9970")],-1),ot=t("p",null,"Tag \u7EC4\u4EF6\u63D0\u4F9B\u9664\u4E86\u9ED8\u8BA4\u503C\u4EE5\u5916\u7684\u4E24\u79CD\u5C3A\u5BF8\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u573A\u666F\u4E0B\u9009\u62E9\u5408\u9002\u7684\u6309\u94AE\u5C3A\u5BF8\u3002",-1),lt=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag size="sm">\u5C0F\u578B\u6807\u7B7E</hl-tag>
    <hl-tag>\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
    <hl-tag size="lg">\u5927\u578B\u6807\u7B7E</hl-tag>
  </hl-group>
</template>
`)],-1),at=t("h2",{id:"zi-ding-yi-bei-jing-se-yi-ji-xuan-zhong-zhuang-tai"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-bei-jing-se-yi-ji-xuan-zhong-zhuang-tai"}),s(" \u81EA\u5B9A\u4E49\u80CC\u666F\u8272\u4EE5\u53CA\u9009\u4E2D\u72B6\u6001")],-1),st=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag color="#ffeedd">\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
    <hl-tag active>\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
    <hl-tag type="primary" effect="light" active>\u9ED8\u8BA4\u6807\u7B7E</hl-tag>
  </hl-group>
</template>
`)],-1),rt=t("h2",{id:"ke-yi-chu-biao-qian"},[t("a",{class:"header-anchor",href:"#ke-yi-chu-biao-qian"}),s(" \u53EF\u79FB\u9664\u6807\u7B7E")],-1),ct=t("p",null,[s("\u8BBE\u7F6E"),t("code",null,"closable"),s("\u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6807\u7B7E\u662F\u5426\u53EF\u79FB\u9664\u3002")],-1),dt=t("div",null,[t("p",null,[s("\u53EF\u4EE5\u8BBE\u7F6E"),t("code",null,"disable-transitions"),s("\u5C5E\u6027\uFF0C\u6765\u5173\u95ED\u6807\u7B7E\u79FB\u9664\u65F6\u6E10\u53D8\u52A8\u753B\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),t("code",null,"Boolean"),s("\uFF0Ctrue \u4E3A\u5173\u95ED\u3002")])],-1),it=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </hl-tag>
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tags = ref([
      { name: '\u6807\u7B7E\u4E8C', type: 'primary' },
      { name: '\u6807\u7B7E\u4E09', type: 'success' },
      { name: '\u6807\u7B7E\u56DB', type: 'warning' },
      { name: '\u6807\u7B7E\u4E94', type: 'danger' },
      { name: '\u6807\u7B7E\u516D', type: 'info' },
    ])
    return {
      tags,
    }
  },
})
<\/script>
`)],-1),pt=t("h2",{id:"yi-chu-kong-zhi"},[t("a",{class:"header-anchor",href:"#yi-chu-kong-zhi"}),s(" \u6EA2\u51FA\u63A7\u5236")],-1),ht=t("p",null,[s("\u901A\u8FC7\u6837\u5F0F\u8BBE\u7F6E"),t("code",null,"width"),s("\uFF0C\u53EF\u4EE5\u5728\u6587\u5B57\u8D85\u51FA\u957F\u5EA6\u540E\u663E\u793A\u7701\u7565\u53F7\u3002")],-1),_t=t("div",null,[t("p",null,"\u5F53Tag\u5728\u5176\u5B83DOM\u5185\u90E8\u7684\u65F6\u5019\uFF0C\u4F1A\u6839\u636E\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u6765\u81EA\u52A8\u9690\u85CF\u8D85\u51FA\u7684\u6587\u672C\u3002")],-1),Et=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-tag closable type="primary" style="width: 100px">
    Tag\u7701\u7565\u53F7\u793A\u4F8B
  </hl-tag>
</template>
`)],-1),mt=t("h2",{id:"dong-tai-bian-ji-biao-qian"},[t("a",{class:"header-anchor",href:"#dong-tai-bian-ji-biao-qian"}),s(" \u52A8\u6001\u7F16\u8F91\u6807\u7B7E")],-1),gt=t("p",null,[s("\u52A8\u6001\u7F16\u8F91\u6807\u7B7E\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6807\u7B7E\u5173\u95ED\u6309\u94AE\u540E\u89E6\u53D1\u7684 "),t("code",null,"close"),s(" \u4E8B\u4EF6\u6765\u5B9E\u73B0")],-1),Bt=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
      {{ tag }}
    </hl-tag>
    <hl-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      class="input-new-tag"
      size="sm"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <hl-button v-else class="button-new-tag" size="sm" @click="showInput">+ New Tag</hl-button>
  </hl-group>
</template>

<script>
import { defineComponent, ref, nextTick } from 'vue'
export default defineComponent({
  setup() {
    const dynamicTags = ref(['\u6807\u7B7E\u4E00', '\u6807\u7B7E\u4E8C', '\u6807\u7B7E\u4E09'])
    const inputVisible = ref(false)
    const inputValue = ref('')
    const saveTagInput = ref(null)

    const handleClose = tag => {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
    }

    const showInput = () => {
      inputVisible.value = true
      nextTick(_ => {
        saveTagInput.value.focus()
      })
    }

    const handleInputConfirm = () => {
      let val = inputValue.value
      if (val) {
        dynamicTags.value.push(val)
      }
      inputVisible.value = false
      inputValue.value = ''
    }

    return {
      saveTagInput,
      dynamicTags,
      inputVisible,
      inputValue,
      handleClose,
      showInput,
      handleInputConfirm,
    }
  },
})
<\/script>

<style>
  .hl-tag + .hl-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
`)],-1),ft=K('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>primary/success/warning/danger/info</td><td>\u2014</td></tr><tr><td>closable</td><td>\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disable-transitions</td><td>\u662F\u5426\u7981\u7528\u6E10\u53D8\u52A8\u753B</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>effect</td><td>\u4E3B\u9898</td><td>string</td><td>light</td><td>\u2014</td></tr><tr><td>outline</td><td>\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u5706\u89D2</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>active</td><td>\u9009\u4E2D</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>color</td><td>\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr><tr><td>close</td><td>\u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr></tbody></table>',4);function yt(u,n,e,o,E,h){const r=b("hl-demo0"),l=b("demo-block"),c=b("hl-demo1"),m=b("hl-demo2"),g=b("hl-demo3"),B=b("hl-demo4"),f=b("hl-demo5"),i=b("hl-demo6"),y=b("hl-demo7"),F=b("hl-demo8"),d=b("right-nav");return S(),$(q,null,[t("section",null,[M,Q,_(l,{fs:""},{source:p(()=>[_(r)]),highlight:p(()=>[X]),default:p(()=>[W]),_:1}),J,U,_(l,{fs:""},{source:p(()=>[_(c)]),highlight:p(()=>[H]),default:p(()=>[G]),_:1}),R,Y,_(l,{fs:""},{source:p(()=>[_(m)]),highlight:p(()=>[Z]),_:1}),tt,et,_(l,{fs:""},{source:p(()=>[_(g)]),highlight:p(()=>[ut]),_:1}),nt,ot,_(l,{fs:""},{source:p(()=>[_(B)]),highlight:p(()=>[lt]),_:1}),at,_(l,{fs:""},{source:p(()=>[_(f)]),highlight:p(()=>[st]),_:1}),rt,ct,_(l,{fs:""},{source:p(()=>[_(i)]),highlight:p(()=>[it]),default:p(()=>[dt]),_:1}),pt,ht,_(l,{fs:""},{source:p(()=>[_(y)]),highlight:p(()=>[Et]),default:p(()=>[_t]),_:1}),mt,gt,_(l,{fs:""},{source:p(()=>[_(F)]),highlight:p(()=>[Bt]),_:1}),ft]),_(d)],64)}var Dt=O(P,[["render",yt]]);export{Dt as default};
