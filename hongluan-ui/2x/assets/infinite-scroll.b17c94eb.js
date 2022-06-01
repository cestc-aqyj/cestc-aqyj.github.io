var L=Object.defineProperty;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(o,e,t)=>e in o?L(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))M.call(e,t)&&j(o,t,e[t]);if(S)for(var t of S(e))P.call(e,t)&&j(o,t,e[t]);return o};import{H as F,L as $,W as N,Q as u,X as f,P as b,a4 as V,S as A,o as z,aL as a}from"./vue.8f5537c1.js";import{_ as O}from"./index.4914c8f9.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const Q={name:"component-doc",components:{"hl-demo0":function(){const{renderList:o,Fragment:e,openBlock:t,createElementBlock:n,toDisplayString:v,resolveDirective:g,withDirectives:c}=a,s={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}};function p(_,d){const r=g("infinite-scroll");return c((t(),n("ul",s,[(t(!0),n(e,null,o(_.count,E=>(t(),n("li",{key:E,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},v(E),1))),128))])),[[r,_.load]])}const{defineComponent:m}=a,{ref:D}=a;return y({render:p},m({setup(_,{expose:d}){d();const r=D(0),i={count:r,load:()=>{r.value+=2},ref:D};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo1":function(){const{renderList:o,Fragment:e,openBlock:t,createElementBlock:n,toDisplayString:v,resolveDirective:g,withDirectives:c,createCommentVNode:s}=a,p=["infinite-scroll-disabled"],m={key:0},D={key:1};function B(i,C){const h=g("infinite-scroll");return t(),n("div",null,[c((t(),n("ul",{style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":i.disabled},[(t(!0),n(e,null,o(i.count,l=>(t(),n("li",{key:l,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},v(l),1))),128))],8,p)),[[h,i.load]]),i.loading?(t(),n("p",m,"\u52A0\u8F7D\u4E2D...")):s("",!0),i.noMore?(t(),n("p",D,"\u6CA1\u6709\u66F4\u591A\u4E86")):s("",!0)])}const{defineComponent:_}=a,{ref:d,computed:r}=a;return y({render:B},_({setup(i,{expose:C}){C();const h=d(10),l=d(!1),k=r(()=>h.value>=20),w=r(()=>l.value||k.value),x={count:h,loading:l,noMore:k,disabled:w,load:()=>{l.value=!0,setTimeout(()=>{h.value+=2,l.value=!1},2e3)},ref:d,computed:r};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}))}()}},T=u("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),W=u("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),X=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),A(" \u57FA\u7840\u7528\u6CD5")],-1),H=u("p",null,[A("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),u("code",null,"v-infinite-scroll"),A("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),I=u("pre",null,[u("code",{class:"html"},` <template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none">
    <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const load = () => {
  count.value += 2
}
<\/script>
`)],-1),q=u("h2",{id:"jin-yong-jia-zai"},[u("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),A(" \u7981\u7528\u52A0\u8F7D")],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <ul
      v-infinite-scroll="load"
      style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
    </ul>
    <p v-if="loading">\u52A0\u8F7D\u4E2D...</p>
    <p v-if="noMore">\u6CA1\u6709\u66F4\u591A\u4E86</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const count = ref(10)
const loading = ref(false)

const noMore = computed(() => {
  return count.value >= 20
})
const disabled = computed(() => {
  return loading.value || noMore.value
})

const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
<\/script>
`)],-1),J=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2);function K(o,e,t,n,v,g){const c=F("hl-demo0"),s=F("demo-block"),p=F("hl-demo1"),m=F("right-nav");return $(),N(V,null,[u("section",null,[T,W,X,H,f(s,{fs:""},{source:b(()=>[f(c)]),highlight:b(()=>[I]),_:1}),q,f(s,{fs:""},{source:b(()=>[f(p)]),highlight:b(()=>[G]),_:1}),J]),f(m)],64)}var ot=O(Q,[["render",K]]);export{ot as default};
