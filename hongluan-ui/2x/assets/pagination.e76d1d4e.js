var V=Object.defineProperty;var k=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var y=(l,t,e)=>t in l?V(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,D=(l,t)=>{for(var e in t||(t={}))z.call(t,e)&&y(l,e,t[e]);if(k)for(var e of k(t))w.call(t,e)&&y(l,e,t[e]);return l};import{H as x,L as N,W as S,Q as u,X as h,P as c,a4 as j,S as o,o as P,aL as E}from"./vue.8f5537c1.js";import{_ as G}from"./index.417b30ee.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const L={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:l,resolveComponent:t,createVNode:e,withCtx:r,openBlock:s,createBlock:i}=E,v=l("p",null,"\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C",-1),a=l("p",null,"\u5927\u4E8E 7 \u9875\u65F6\u7684\u6548\u679C",-1);function F(m,d){const f=t("hl-pagination"),n=t("hl-col"),p=t("hl-row");return s(),i(p,null,{default:r(()=>[e(n,{span:"col-24"},{default:r(()=>[v,e(f,{layout:"prev, pager, next",total:50})]),_:1}),e(n,{span:"col-24",class:"m-t-lg"},{default:r(()=>[a,e(f,{layout:"prev, pager, next",total:1e3})]),_:1})]),_:1})}return D({render:F},{})}(),"hl-demo1":function(){const{resolveComponent:l,openBlock:t,createBlock:e}=E;function r(i,v){const a=l("hl-pagination");return t(),e(a,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})}return D({render:r},{})}(),"hl-demo2":function(){const{renderList:l,Fragment:t,openBlock:e,createElementBlock:r,resolveComponent:s,createBlock:i,createCommentVNode:v,withCtx:a,createVNode:F}=E;function _(n,p){const g=s("hl-option"),B=s("hl-select"),A=s("hl-pagination");return e(),r(t,null,[F(B,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=b=>n.value=b),clearable:"",placeholder:"\u9009\u62E9\u5C3A\u5BF8",class:"m-b-md"},{default:a(()=>[(e(!0),r(t,null,l(n.options,b=>(e(),r(t,null,[b.divider?(e(),i(g,{key:b.value,divider:""})):(e(),i(g,{key:b.value,label:b.label,value:b.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(A,{layout:"total, slot, prev, pager, next, sizes, jumper",total:50,size:n.value,"pager-gap":n.pagerGapValue,block:""},null,8,["size","pager-gap"])],64)}const{defineComponent:m}=E,{ref:d}=E;return D({render:_},m({setup(n,{expose:p}){p();const g=d([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),B=d(""),A={options:g,value:B,ref:d};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}}))}(),"hl-demo3":function(){const{renderList:l,Fragment:t,openBlock:e,createElementBlock:r,resolveComponent:s,createBlock:i,createCommentVNode:v,withCtx:a,createVNode:F}=E;function _(n,p){const g=s("hl-option"),B=s("hl-select"),A=s("hl-group"),b=s("hl-pagination");return e(),r(t,null,[F(A,{gap:"var(--md)",class:"m-b-md"},{default:a(()=>[F(B,{modelValue:n.gapValue,"onUpdate:modelValue":p[0]||(p[0]=C=>n.gapValue=C),clearable:"",placeholder:"\u9009\u62E9\u5206\u9875\u5143\u7D20\u95F4\u9699"},{default:a(()=>[(e(!0),r(t,null,l(n.options,C=>(e(),r(t,null,[C.divider?(e(),i(g,{key:C.value,divider:""})):(e(),i(g,{key:C.value,label:C.label,value:C.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(B,{modelValue:n.pagerGapValue,"onUpdate:modelValue":p[1]||(p[1]=C=>n.pagerGapValue=C),clearable:"",placeholder:"\u9009\u62E9\u5206\u9875\u6307\u793A\u5668\u95F4\u9699"},{default:a(()=>[(e(!0),r(t,null,l(n.options,C=>(e(),r(t,null,[C.divider?(e(),i(g,{key:C.value,divider:""})):(e(),i(g,{key:C.value,label:C.label,value:C.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),F(b,{layout:"total, slot, prev, pager, next, sizes, jumper",total:50,gap:n.gapValue,"pager-gap":n.pagerGapValue,block:""},null,8,["gap","pager-gap"])],64)}const{defineComponent:m}=E,{ref:d}=E;return D({render:_},m({setup(n,{expose:p}){p();const g=d([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),B=d(""),A=d(""),b={options:g,gapValue:B,pagerGapValue:A,ref:d};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}))}(),"hl-demo4":function(){const{resolveComponent:l,openBlock:t,createBlock:e}=E;function r(i,v){const a=l("hl-pagination");return t(),e(a,{line:"",layout:"prev, pager, next",total:50})}return D({render:r},{})}(),"hl-demo5":function(){const{resolveComponent:l,openBlock:t,createBlock:e}=E;function r(i,v){const a=l("hl-pagination");return t(),e(a,{block:"",layout:"prev, pager, next",total:50})}return D({render:r},{})}(),"hl-demo6":function(){const{resolveComponent:l,createVNode:t,withCtx:e,openBlock:r,createBlock:s}=E;function i(a,F){const _=l("hl-pagination"),m=l("hl-col"),d=l("hl-row");return r(),s(d,{align:"items-center"},{default:e(()=>[t(m,{span:"lg:col-16",class:"dom-area","data-name":"left"},{default:e(()=>[t(_,{layout:"prev, pager, next",total:50,align:"items-left",block:""})]),_:1}),t(m,{span:"lg:col-16",class:"m-t-xxl dom-area","data-name":"center"},{default:e(()=>[t(_,{layout:"prev, pager, next",total:50,align:"items-center",block:""})]),_:1}),t(m,{span:"lg:col-16",class:"m-t-xxl dom-area","data-name":"right"},{default:e(()=>[t(_,{layout:"prev, pager, next",total:50,align:"items-right",block:""})]),_:1}),t(m,{span:"lg:col-16",class:"m-t-xxl dom-area","data-name":"between"},{default:e(()=>[t(_,{line:"",layout:"prev, pager, next",total:50,align:"items-between",block:""})]),_:1})]),_:1})}return D({render:i},{})}(),"hl-demo7":function(){const{createElementVNode:l,resolveComponent:t,withCtx:e,createVNode:r,openBlock:s,createBlock:i}=E,v=l("div",{style:{width:"100%",padding:"0 12px"}},[l("a",null,"\u81EA\u5B9A\u4E49\u5143\u7D20")],-1);function a(d,f){const n=t("hl-pagination"),p=t("hl-col"),g=t("hl-row");return s(),i(g,null,{default:e(()=>[r(p,{span:"col-24",class:"m-t-xxl"},{default:e(()=>[r(n,{"current-page":d.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, slot, prev, pager, next, sizes, jumper",total:400,align:"items-between",onSizeChange:d.handleSizeChange,onCurrentChange:d.handleCurrentChange},{default:e(()=>[v]),_:1},8,["current-page","onSizeChange","onCurrentChange"])]),_:1})]),_:1})}const{defineComponent:F}=E,{ref:_}=E;return D({render:a},F({setup(d,{expose:f}){f();const B={currentPage:_(4),handleSizeChange:A=>{console.log(`\u6BCF\u9875 ${A} \u6761`)},handleCurrentChange:A=>{console.log(`\u5F53\u524D\u9875: ${A}`)},ref:_};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}}))}(),"hl-demo8":function(){const{resolveComponent:l,createVNode:t,createElementVNode:e,openBlock:r,createElementBlock:s}=E,i={class:"m-b-md"};function v(m,d){const f=l("hl-switch"),n=l("hl-pagination");return r(),s("div",null,[e("p",i,[t(f,{modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=p=>m.value=p),style:{}},null,8,["modelValue"])]),t(n,{"hide-on-single-page":m.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])}const{defineComponent:a}=E,{ref:F}=E;return D({render:v},a({setup(m,{expose:d}){d();const n={value:F(!1),ref:F};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}))}()}},$=u("h1",null,"Pagination \u5206\u9875",-1),U=u("p",null,"\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u5206\u89E3\u6570\u636E\u3002",-1),q=u("div",null,[u("p",null,[o("\u8BBE\u7F6E"),u("code",null,"layout"),o("\uFF0C\u8868\u793A\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5E03\u5C40\u5143\u7D20\u4F1A\u4F9D\u6B21\u663E\u793A\u3002"),u("code",null,"prev"),o("\u8868\u793A\u4E0A\u4E00\u9875\uFF0C"),u("code",null,"next"),o("\u4E3A\u4E0B\u4E00\u9875\uFF0C"),u("code",null,"pager"),o("\u8868\u793A\u5206\u9875\u6307\u793A\u5668\u7684\u5217\u8868\uFF0C\u9664\u6B64\u4EE5\u5916\u8FD8\u63D0\u4F9B\u4E86"),u("code",null,"jumper"),o("\u548C"),u("code",null,"total"),o("\uFF0C"),u("code",null,"size"),o("\u548C\u7279\u6B8A\u7684\u5E03\u5C40\u7B26\u53F7"),u("code",null,"->"),o("\uFF0C"),u("code",null,"->"),o("\u540E\u7684\u5143\u7D20\u4F1A\u9760\u53F3\u663E\u793A\uFF0C"),u("code",null,"jumper"),o("\u8868\u793A\u8DF3\u9875\u5143\u7D20\uFF0C"),u("code",null,"total"),o("\u8868\u793A\u603B\u6761\u76EE\u6570\uFF0C"),u("code",null,"size"),o("\u7528\u4E8E\u8BBE\u7F6E\u6BCF\u9875\u663E\u793A\u7684\u9875\u7801\u6570\u91CF\u3002")])],-1),O=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-24">
      <p>\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C</p>
      <hl-pagination layout="prev, pager, next" :total="50" />
    </hl-col>
    <hl-col span="col-24" class="m-t-lg">
      <p>\u5927\u4E8E 7 \u9875\u65F6\u7684\u6548\u679C</p>
      <hl-pagination layout="prev, pager, next" :total="1000" />
    </hl-col>
  </hl-row>
</template>
`)],-1),Q=u("h2",{id:"she-zhi-zui-da-ye-ma-an-niu-shu"},[u("a",{class:"header-anchor",href:"#she-zhi-zui-da-ye-ma-an-niu-shu"}),o(" \u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570")],-1),W=u("p",null,[o("\u901A\u8FC7"),u("code",null,"pager-count"),o("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570\u3002")],-1),X=u("div",null,[u("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7 7 \u9875\u65F6 Pagination \u4F1A\u6298\u53E0\u591A\u4F59\u7684\u9875\u7801\u6309\u94AE\u3002")],-1),H=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination
    :page-size="20"
    :pager-count="11"
    layout="prev, pager, next"
    :total="1000"
  />
</template>
`)],-1),I=u("h2",{id:"chi-cun-xiu-shi"},[u("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),o(" \u5C3A\u5BF8\u4FEE\u9970")],-1),J=u("p",null,[o("\u901A\u8FC7"),u("code",null,"size"),o("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5206\u9875\u7684\u5C3A\u5BF8\u3002")],-1),K=u("div",null,[u("p",null,[o("\u5B83\u7684\u5C3A\u5BF8\u4E0E"),u("code",null,"button"),o("\u3001"),u("code",null,"input"),o("\u7B49form\u8868\u5355\u5143\u7D20\u7684\u5C3A\u5BF8\u4FDD\u6301\u4E00\u81F4")])],-1),M=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="\u9009\u62E9\u5C3A\u5BF8" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
    </template>
  </hl-select>
  <hl-pagination
    layout="total, slot, prev, pager, next, sizes, jumper"
    :total="50"
    :size="value"
    :pager-gap="pagerGapValue"
    block
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: 'sm',
    label: 'sm',
  },
  {
    value: 'md',
    label: 'md',
  },
  {
    value: 'lg',
    label: 'lg',
  },
])
const value = ref('')

<\/script>
`)],-1),R=u("h2",{id:"jian-ge"},[u("a",{class:"header-anchor",href:"#jian-ge"}),o(" \u95F4\u9694")],-1),T=u("p",null,[o("\u901A\u8FC7"),u("code",null,"gap"),o("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5206\u9875\u5143\u7D20\u7684\u95F4\u9694\u3002")],-1),Y=u("div",null,[u("p",null,[u("code",null,"pager-gap"),o(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5206\u9875\u6307\u793A\u5668\u76F4\u63A5\u7684\u95F4\u9694")])],-1),Z=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group gap="var(--md)" class="m-b-md">
    <hl-select v-model="gapValue" clearable placeholder="\u9009\u62E9\u5206\u9875\u5143\u7D20\u95F4\u9699">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>

    <hl-select v-model="pagerGapValue" clearable placeholder="\u9009\u62E9\u5206\u9875\u6307\u793A\u5668\u95F4\u9699">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
  </hl-group>
  <hl-pagination
    layout="total, slot, prev, pager, next, sizes, jumper"
    :total="50"
    :gap="gapValue"
    :pager-gap="pagerGapValue"
    block
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--sm)',
    label: 'var(--sm)',
  },
  {
    value: 'var(--md)',
    label: 'var(--md)',
  },
  {
    value: 'var(--lg)',
    label: 'var(--lg)',
  },
  {
    value: 'var(--xl)',
    label: 'var(--xl)',
  },
  {
    value: 'var(--xxl)',
    label: 'var(--xxl)',
  },
])
const gapValue = ref('')
const pagerGapValue = ref('')

<\/script>
`)],-1),uu=u("h2",{id:"line-yang-shi"},[u("a",{class:"header-anchor",href:"#line-yang-shi"}),o(" Line \u6837\u5F0F")],-1),eu=u("p",null,"\u5728\u7A7A\u95F4\u6709\u9650\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684\u5C0F\u578B\u5206\u9875\u3002",-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination line layout="prev, pager, next" :total="50" />
</template>
`)],-1),ou=u("h2",{id:"man-kuan-yu-pai-lie-fang-shi"},[u("a",{class:"header-anchor",href:"#man-kuan-yu-pai-lie-fang-shi"}),o(" \u6EE1\u5BBD\u4E0E\u6392\u5217\u65B9\u5F0F")],-1),lu=u("p",null,[o("\u4F7F\u7528 "),u("code",null,"block"),o(" \u5C5E\u6027\u4F1A\u4F7F\u5206\u9875\u7EC4\u4EF6\u53D8\u4E3A\u5757\u7EA7\u6837\u5F0F\u3002")],-1),nu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination block layout="prev, pager, next" :total="50" />
</template>
`)],-1),au=u("h2",{id:"pai-lie-fang-shi"},[u("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),o(" \u6392\u5217\u65B9\u5F0F")],-1),ru=u("p",null,[o("\u4F7F\u7528 "),u("code",null,"align"),o(" \u5C5E\u6027\u80FD\u591F\u8BBE\u7F6E\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center">
    <hl-col span="lg:col-16" class="dom-area" data-name="left">
      <hl-pagination layout="prev, pager, next" :total="50" align="items-left" block />
    </hl-col>
    <hl-col span="lg:col-16" class="m-t-xxl dom-area" data-name="center">
      <hl-pagination layout="prev, pager, next" :total="50" align="items-center" block />
    </hl-col>

    <hl-col span="lg:col-16" class="m-t-xxl dom-area" data-name="right">
      <hl-pagination layout="prev, pager, next" :total="50" align="items-right" block />
    </hl-col>

    <hl-col span="lg:col-16" class="m-t-xxl dom-area" data-name="between">
      <hl-pagination line layout="prev, pager, next" :total="50" align="items-between" block />
    </hl-col>
  </hl-row>
</template>
`)],-1),cu=u("h2",{id:"fu-jia-gong-neng"},[u("a",{class:"header-anchor",href:"#fu-jia-gong-neng"}),o(" \u9644\u52A0\u529F\u80FD")],-1),su=u("p",null,[o("\u6839\u636E\u4F7F\u7528\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u5176\u4ED6\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u5143\u7D20\u548C "),u("code",null,"align"),o(" \u5C5E\u6027\u6765\u5E03\u5C40\u4E00\u4E2A\u4E24\u7AEF\u5BF9\u9F50\u7684\u5206\u9875\u7EC4\u4EF6\u3002")],-1),pu=u("div",null,[u("p",null,[o("\u6B64\u4F8B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7528\u4F8B\uFF0C\u4F7F\u7528\u4E86"),u("code",null,"size-change"),o("\u548C"),u("code",null,"current-change"),o("\u4E8B\u4EF6\u6765\u5904\u7406\u9875\u7801\u5927\u5C0F\u548C\u5F53\u524D\u9875\u53D8\u52A8\u65F6\u5019\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002"),u("code",null,"page-sizes"),o("\u63A5\u53D7\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\uFF0C\u6570\u7EC4\u5143\u7D20\u4E3A\u5C55\u793A\u7684\u9009\u62E9\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u7684\u9009\u9879\uFF0C"),u("code",null,"[100, 200, 300, 400]"),o("\u8868\u793A\u56DB\u4E2A\u9009\u9879\uFF0C\u6BCF\u9875\u663E\u793A 100 \u4E2A\uFF0C200 \u4E2A\uFF0C300 \u4E2A\u6216\u8005 400 \u4E2A\u3002")])],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-24" class="m-t-xxl">
      <hl-pagination
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, slot, prev, pager, next, sizes, jumper"
        :total="400"
        align="items-between"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
        <div style="width:100%; padding: 0 12px">
          <a>\u81EA\u5B9A\u4E49\u5143\u7D20</a>
        </div>
      </hl-pagination>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(4)

const handleSizeChange = val => {
  console.log(\`\u6BCF\u9875 \${val} \u6761\`)
}
const handleCurrentChange = val => {
  console.log(\`\u5F53\u524D\u9875: \${val}\`)
}


<\/script>
`)],-1),hu=u("h2",{id:"dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"},[u("a",{class:"header-anchor",href:"#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"}),o(" \u5F53\u53EA\u6709\u4E00\u9875\u65F6\u9690\u85CF\u5206\u9875")],-1),Fu=u("p",null,[o("\u5F53\u53EA\u6709\u4E00\u9875\u65F6\uFF0C\u901A\u8FC7\u8BBE\u7F6E "),u("code",null,"hide-on-single-page"),o(" \u5C5E\u6027\u6765\u9690\u85CF\u5206\u9875\u3002")],-1),mu=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <p class="m-b-md">
      <hl-switch v-model="value" style="" />
    </p>
    <hl-pagination
      :hide-on-single-page="value"
      :total="5"
      layout="prev, pager, next"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)

<\/script>
`)],-1),Eu=P('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>line</td><td>\u662F\u5426\u4F7F\u7528\u7EBF\u6761\u5206\u9875\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>align</td><td>\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F</td><td>string</td><td><code>left</code>, <code>center</code>, <code>right</code>, <code>around</code>, <code>between</code></td><td>left</td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u5206\u9875\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td><code>sm</code>, <code>md</code>, <code>lg</code></td><td>md</td></tr><tr><td>page-size</td><td>\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A</td><td>number</td><td>\u2014</td><td>10</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E\u5206\u9875\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>pager-gap</td><td>\u8BBE\u7F6E\u5206\u9875\u6307\u793A\u5668\u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>total</td><td>\u603B\u6761\u76EE\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>page-count</td><td>\u603B\u9875\u6570\uFF0Ctotal \u548C page-count \u8BBE\u7F6E\u4EFB\u610F\u4E00\u4E2A\u5C31\u53EF\u4EE5\u8FBE\u5230\u663E\u793A\u9875\u7801\u7684\u529F\u80FD\uFF1B\u5982\u679C\u8981\u652F\u6301 page-sizes \u7684\u66F4\u6539\uFF0C\u5219\u9700\u8981\u4F7F\u7528 total \u5C5E\u6027</td><td>Number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>pager-count</td><td>\u5206\u9875\u6307\u793A\u5668\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0</td><td>number</td><td>\u5927\u4E8E\u7B49\u4E8E 5 \u4E14\u5C0F\u4E8E\u7B49\u4E8E 21 \u7684\u5947\u6570</td><td>7</td></tr><tr><td>current-page</td><td>\u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A\u7B26</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>layout</td><td>\u7EC4\u4EF6\u5E03\u5C40\uFF0C\u5B50\u7EC4\u4EF6\u540D\u7528\u9017\u53F7\u5206\u9694</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, total&#39;</td></tr><tr><td>page-sizes</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td><td>number[]</td><td>\u2014</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u4E0B\u62C9\u6846\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>prev-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0A\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>next-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0B\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF</td><td>boolean</td><td>\u2014</td><td>-</td></tr><tr><td>block</td><td>\u5757\u7EA7\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><blockquote class="m-t-md"><p><em><strong>\u7EC4\u4EF6\u73B0\u5728\u4F1A\u68C0\u67E5\u4E00\u4E9B\u4E0D\u5408\u7406\u7684\u7528\u6CD5\uFF0C\u5982\u679C\u53D1\u73B0\u5206\u9875\u5668\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u6838\u5BF9\u662F\u5426\u8FDD\u53CD\u4EE5\u4E0B\u60C5\u5F62\uFF1A</strong></em></p><ul><li>total \u548C page-count \u5FC5\u987B\u4F20\u4E00\u4E2A\uFF0C\u4E0D\u7136\u7EC4\u4EF6\u65E0\u6CD5\u5224\u65AD\u603B\u9875\u6570\uFF1B\u4F18\u5148\u4F7F\u7528 page-count;</li><li>\u5982\u679C\u4F20\u5165\u4E86 current-page \u5FC5\u987B\u76D1\u542C current-page \u53D8\u66F4\u7684\u4E8B\u4EF6\uFF08onUpdate:currentPage\uFF09\uFF1B\u5426\u5219\u5206\u9875\u5207\u6362\u4E0D\u8D77\u4F5C\u7528\uFF1B</li><li>\u5982\u679C\u4F20\u5165\u4E86 page-size\uFF0C\u4E14\u5E03\u5C40\u5305\u542B page-size \u9009\u62E9\u5668\uFF08\u5373 layout \u5305\u542B sizes\uFF09\uFF0C\u5FC5\u987B\u76D1\u542C page-size \u53D8\u66F4\u7684\u4E8B\u4EF6\uFF08onUpdate:pageSize\uFF09\uFF0C\u5426\u5219 page-size \u5207\u6362\u4E0D\u8D77\u4F5C\u7528\uFF1B</li></ul></blockquote><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>size-change</td><td>pageSize \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u6BCF\u9875\u6761\u6570</td></tr><tr><td>current-change</td><td>currentPage \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>prev-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>next-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr></tbody></table><blockquote class="m-t-md"><p><em><strong>\u4EE5\u4E0A\u4E8B\u4EF6\u4E0D\u63A8\u8350\u4F7F\u7528\uFF08\u4F46\u7531\u4E8E\u517C\u5BB9\u7684\u539F\u56E0\u4ECD\u7136\u652F\u6301\uFF0C\u5728\u4EE5\u540E\u7684\u7248\u672C\u4E2D\u5C06\u4F1A\u88AB\u5220\u9664\uFF09\uFF1B\u5982\u679C\u8981\u76D1\u542C current-page \u548C page-size \u7684\u6539\u53D8\uFF0C\u4F7F\u7528 v-model \u53CC\u5411\u7ED1\u5B9A\u662F\u4E2A\u66F4\u597D\u7684\u9009\u62E9\u3002</strong></em></p></blockquote><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u9700\u8981\u5728 <code>layout</code> \u4E2D\u5217\u51FA <code>slot</code></td></tr></tbody></table>',8);function gu(l,t,e,r,s,i){const v=x("hl-demo0"),a=x("demo-block"),F=x("hl-demo1"),_=x("hl-demo2"),m=x("hl-demo3"),d=x("hl-demo4"),f=x("hl-demo5"),n=x("hl-demo6"),p=x("hl-demo7"),g=x("hl-demo8"),B=x("right-nav");return N(),S(j,null,[u("section",null,[$,U,h(a,{fs:""},{source:c(()=>[h(v)]),highlight:c(()=>[O]),default:c(()=>[q]),_:1}),Q,W,h(a,{fs:""},{source:c(()=>[h(F)]),highlight:c(()=>[H]),default:c(()=>[X]),_:1}),I,J,h(a,{fs:""},{source:c(()=>[h(_)]),highlight:c(()=>[M]),default:c(()=>[K]),_:1}),R,T,h(a,{fs:""},{source:c(()=>[h(m)]),highlight:c(()=>[Z]),default:c(()=>[Y]),_:1}),uu,eu,h(a,{fs:""},{source:c(()=>[h(d)]),highlight:c(()=>[tu]),_:1}),ou,lu,h(a,{fs:""},{source:c(()=>[h(f)]),highlight:c(()=>[nu]),_:1}),au,ru,h(a,{fs:""},{source:c(()=>[h(n)]),highlight:c(()=>[du]),_:1}),cu,su,h(a,{fs:""},{source:c(()=>[h(p)]),highlight:c(()=>[iu]),default:c(()=>[pu]),_:1}),hu,Fu,h(a,{fs:""},{source:c(()=>[h(g)]),highlight:c(()=>[mu]),_:1}),Eu]),h(B)],64)}var bu=G(L,[["render",gu]]);export{bu as default};
