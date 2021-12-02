var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t)=>{for(var e in t||(t={}))M.call(t,e)&&k(o,e,t[e]);if(x)for(var e of x(t))S.call(t,e)&&k(o,e,t[e]);return o};import{H as D,o as V,c as L,g as u,T as p,M as E,Y as N,aA as F,_ as A,az as $}from"./vue.ce25aa37.js";import{_ as z}from"./index.4a92399f.js";import"./hongluan.3c5b9861.js";import"./highlight.e2508551.js";import"./hongluan-icons.f928b84f.js";const T={name:"component-doc",components:{"hl-demo0":function(){const{renderList:o,Fragment:t,openBlock:e,createElementBlock:n,toDisplayString:h,resolveDirective:_,withDirectives:d}=F,s={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}};function l(r,C){const f=_("infinite-scroll");return d((e(),n("ul",s,[(e(!0),n(t,null,o(r.count,c=>(e(),n("li",{key:c,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},h(c),1))),128))],512)),[[f,r.load]])}const{defineComponent:a,ref:b}=F,B=a({setup(){const r=b(0);return{count:r,load:()=>{r.value+=2}}}});return y({render:l},B)}(),"hl-demo1":function(){const{renderList:o,Fragment:t,openBlock:e,createElementBlock:n,toDisplayString:h,resolveDirective:_,createElementVNode:d,withDirectives:s,createCommentVNode:l}=F,a={style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":"disabled"},b={key:0},B={key:1};function r(i,m){const v=_("infinite-scroll");return e(),n("div",null,[s(d("ul",a,[(e(!0),n(t,null,o(i.count,g=>(e(),n("li",{key:g,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},h(g),1))),128))],512),[[v,i.load]]),i.loading?(e(),n("p",b,"\u52A0\u8F7D\u4E2D...")):l("",!0),i.noMore?(e(),n("p",B,"\u6CA1\u6709\u66F4\u591A\u4E86")):l("",!0)])}const{defineComponent:C,ref:f,computed:c}=F,j=C({setup(){const i=f(10),m=f(!1),v=c(()=>i.value>=20),g=c(()=>m.value||v.value);return{count:i,loading:m,noMore:v,disabled:g,load:()=>{m.value=!0,setTimeout(()=>{i.value+=2,m.value=!1},2e3)}}}});return y({render:r},j)}()}},Y=u("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),H=u("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),I=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),A(" \u57FA\u7840\u7528\u6CD5")],-1),W=u("p",null,[A("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),u("code",null,"v-infinite-scroll"),A("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),q=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),G=u("h2",{id:"jin-yong-jia-zai"},[u("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),A(" \u7981\u7528\u52A0\u8F7D")],-1),J=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),K=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2);function O(o,t,e,n,h,_){const d=D("hl-demo0"),s=D("demo-block"),l=D("hl-demo1"),a=D("right-nav");return V(),L(N,null,[u("section",null,[Y,H,I,W,p(s,{fs:""},{source:E(()=>[p(d)]),highlight:E(()=>[q]),_:1}),G,p(s,{fs:""},{source:E(()=>[p(l)]),highlight:E(()=>[J]),_:1}),K]),p(a)],64)}var te=z(T,[["render",O]]);export{te as default};
