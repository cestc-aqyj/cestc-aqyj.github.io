var j=Object.defineProperty;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(o,e,t)=>e in o?j(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))w.call(e,t)&&k(o,t,e[t]);if(x)for(var t of x(e))S.call(e,t)&&k(o,t,e[t]);return o};import{P as D,L,W as M,Q as u,X as m,S as E,F as $,aC as A,Y as C,o as N}from"./vue.0e7200cd.js";import{_ as V}from"./index.9dfed6e6.js";import"./hongluan.ccf786f1.js";import"./highlight.e2508551.js";import"./hongluan-icons.9e674cb2.js";const z={name:"component-doc",components:{"hl-demo0":function(){const{renderList:o,Fragment:e,openBlock:t,createElementBlock:n,toDisplayString:p,resolveDirective:h,withDirectives:l}=A,r={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}};function d(s,f){const _=h("infinite-scroll");return l((t(),n("ul",r,[(t(!0),n(e,null,o(s.count,v=>(t(),n("li",{key:v,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},p(v),1))),128))])),[[_,s.load]])}const{defineComponent:a,ref:B}=A,b=a({setup(){const s=B(0);return{count:s,load:()=>{s.value+=2}}}});return y({render:d},b)}(),"hl-demo1":function(){const{renderList:o,Fragment:e,openBlock:t,createElementBlock:n,toDisplayString:p,resolveDirective:h,withDirectives:l,createCommentVNode:r}=A,d={style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":"disabled"},a={key:0},B={key:1};function b(i,c){const g=h("infinite-scroll");return t(),n("div",null,[l((t(),n("ul",d,[(t(!0),n(e,null,o(i.count,F=>(t(),n("li",{key:F,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},p(F),1))),128))])),[[g,i.load]]),i.loading?(t(),n("p",a,"\u52A0\u8F7D\u4E2D...")):r("",!0),i.noMore?(t(),n("p",B,"\u6CA1\u6709\u66F4\u591A\u4E86")):r("",!0)])}const{defineComponent:s,ref:f,computed:_}=A,v=s({setup(){const i=f(10),c=f(!1),g=_(()=>i.value>=20),F=_(()=>c.value||g.value);return{count:i,loading:c,noMore:g,disabled:F,load:()=>{c.value=!0,setTimeout(()=>{i.value+=2,c.value=!1},2e3)}}}});return y({render:b},v)}()}},Q=u("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),T=u("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),W=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),C(" \u57FA\u7840\u7528\u6CD5")],-1),X=u("p",null,[C("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),u("code",null,"v-infinite-scroll"),C("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),I=u("pre",null,[u("code",{class:"html"},` <template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none">
    <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
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
`)],-1),P=u("h2",{id:"jin-yong-jia-zai"},[u("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),C(" \u7981\u7528\u52A0\u8F7D")],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <ul
      v-infinite-scroll="load"
      style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
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
`)],-1),q=N('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2);function G(o,e,t,n,p,h){const l=D("hl-demo0"),r=D("demo-block"),d=D("hl-demo1"),a=D("right-nav");return L(),M($,null,[u("section",null,[Q,T,W,X,m(r,{fs:""},{source:E(()=>[m(l)]),highlight:E(()=>[I]),_:1}),P,m(r,{fs:""},{source:E(()=>[m(d)]),highlight:E(()=>[Y]),_:1}),q]),m(a)],64)}var tt=V(z,[["render",G]]);export{tt as default};
