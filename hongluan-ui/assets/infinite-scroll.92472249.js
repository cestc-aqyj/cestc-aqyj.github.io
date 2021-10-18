var S=Object.defineProperty;var j=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(u,e,t)=>e in u?S(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,y=(u,e)=>{for(var t in e||(e={}))x.call(e,t)&&w(u,t,e[t]);if(j)for(var t of j(e))V.call(e,t)&&w(u,t,e[t]);return u};import{H as D,o as L,C as N,D as o,v as m,M as E,av as F,_ as A,au as $}from"./vue.450bc1d0.js";import{_ as z}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const T={name:"component-doc",components:{"hl-demo0":function(){const{renderList:u,Fragment:e,openBlock:t,createElementBlock:n,toDisplayString:h,resolveDirective:f,withDirectives:c}=F,l={class:"infinite-list",style:{overflow:"auto"}};function r(s,B){const b=f("infinite-scroll");return c((t(),n("ul",l,[(t(!0),n(e,null,u(s.count,a=>(t(),n("li",{key:a,class:"infinite-list-item"},h(a),1))),128))],512)),[[b,s.load]])}const{defineComponent:d,ref:C}=F,g=d({setup(){const s=C(0);return{count:s,load:()=>{s.value+=2}}}});return y({render:r},g)}(),"hl-demo1":function(){const{renderList:u,Fragment:e,openBlock:t,createElementBlock:n,toDisplayString:h,resolveDirective:f,createElementVNode:c,withDirectives:l,createCommentVNode:r}=F,d={class:"infinite-list-wrapper",style:{overflow:"auto"}},C={class:"list","infinite-scroll-disabled":"disabled"},g={key:0},s={key:1};function B(i,_){const p=f("infinite-scroll");return t(),n("div",d,[l(c("ul",C,[(t(!0),n(e,null,u(i.count,v=>(t(),n("li",{key:v,class:"list-item"},h(v),1))),128))],512),[[p,i.load]]),i.loading?(t(),n("p",g,"\u52A0\u8F7D\u4E2D...")):r("",!0),i.noMore?(t(),n("p",s,"\u6CA1\u6709\u66F4\u591A\u4E86")):r("",!0)])}const{defineComponent:b,ref:a,computed:k}=F,M=b({setup(){const i=a(10),_=a(!1),p=k(()=>i.value>=20),v=k(()=>_.value||p.value);return{count:i,loading:_,noMore:p,disabled:v,load:()=>{_.value=!0,setTimeout(()=>{i.value+=2,_.value=!1},2e3)}}}});return y({render:B},M)}()}},H={class:"doc-main-content"},I={class:"doc-content"},W=o("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),q=o("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),G=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),A(" \u57FA\u7840\u7528\u6CD5")],-1),J=o("p",null,[A("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),o("code",null,"v-infinite-scroll"),A("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),K=o("pre",null,[o("code",{class:"html"},` <template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(0)
    const load = () => {
      count.value += 2
    }
    return {
      count,
      load,
    }
  },
})
<\/script>
`)],-1),O=o("h2",{id:"jin-yong-jia-zai"},[o("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),A(" \u7981\u7528\u52A0\u8F7D")],-1),P=o("pre",null,[o("code",{class:"html"},` <template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">\u52A0\u8F7D\u4E2D...</p>
    <p v-if="noMore">\u6CA1\u6709\u66F4\u591A\u4E86</p>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      count,
      loading,
      noMore,
      disabled,
      load,
    }
  },
})
<\/script>
`)],-1),Q=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2);function R(u,e,t,n,h,f){const c=D("hl-demo0"),l=D("demo-block"),r=D("hl-demo1"),d=D("right-nav");return L(),N("section",H,[o("div",I,[W,q,G,J,m(l,{fs:""},{source:E(()=>[m(c)]),highlight:E(()=>[K]),_:1}),O,m(l,{fs:""},{source:E(()=>[m(r)]),highlight:E(()=>[P]),_:1}),Q]),m(d)])}var ut=z(T,[["render",R]]);export{ut as default};
