var O=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(n,o,e)=>o in n?O(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,f=(n,o)=>{for(var e in o||(o={}))N.call(o,e)&&b(n,e,o[e]);if(h)for(var e of h(o))V.call(o,e)&&b(n,e,o[e]);return n};import{U as l,L,W as P,Q as t,a1 as i,X as c,a9 as $,aX as F,a2 as X}from"./vue.64e975b8.js";import{_ as w}from"./index.7e3760ca.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.0c35ed0d.js";const I={name:"component-doc",components:{"hb-demo0":function(){const{renderList:n,Fragment:o,openBlock:e,createElementBlock:_,createElementVNode:r,toDisplayString:u,createTextVNode:p,resolveComponent:s,withCtx:a,createBlock:E}=F,j=r("h5",null,"Inner Prop",-1),B=p(" / "),C=r("br",null,null,-1);function x(m,z){const A=s("hb-alias");return e(!0),_(o,null,n(m.list,(v,y)=>(e(),E(A,{key:y,obj2:v.obj1.innerObj2},{default:a(({obj2:d})=>[j,r("span",null,"prop1: "+u(d.prop1),1),B,r("span",null,"prop2: "+u(d.prop2),1),C]),_:2},1032,["obj2"]))),128)}const{defineComponent:D,ref:g}=F,k=D({setup(){return{list:g([{obj1:{innerObj2:{prop1:"1",prop2:"2"}}},{obj1:{innerObj2:{prop1:"3",prop2:"4"}}}])}}});return f({render:x},k)}()}},Q=t("h1",null,"Alias \u522B\u540D",-1),S=t("p",null,"\u901A\u5E38\u7528\u4E8E\u591A\u91CD\u5FAA\u73AF\uFF0C\u5B9A\u4E49\u4E34\u65F6\u53D8\u91CF\uFF0C\u65B9\u4FBF\u6A21\u677F\u4E2D\u4EE5\u7B80\u6D01\u7684\u65B9\u5F0F\u8BBF\u95EE\u4E34\u65F6\u53D8\u91CF\u3002",-1),T=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),X(" \u57FA\u7840\u7528\u6CD5")],-1),W=t("div",null,[t("p",null,"\u5177\u4F53\u7528\u6CD5\u8BF7\u770B\u4EE3\u7801\uFF0C\u7EC4\u4EF6\u5185\u4E00\u5B9A\u8981\u5D4C\u5165\u5185\u5BB9")],-1),U=t("pre",null,[t("code",{class:"html"},` <template>
  <template v-for="(item, idx) in list" :key="idx">
    <hb-alias :obj2="item.obj1.innerObj2" #="{ obj2 }">
      <h5>Inner Prop</h5>
      <span>prop1: {{ obj2.prop1 }}</span> / <span>prop2: {{ obj2.prop2 }}</span>
      <br>
    </hb-alias>
  </template>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const list = ref([
      {
        obj1: {
          innerObj2: {
            prop1: '1',
            prop2: '2',
          },
        },
      },
      {
        obj1: {
          innerObj2: {
            prop1: '3',
            prop2: '4',
          },
        },
      },
    ])
    return {
      list,
    }
  },
})
<\/script>
`)],-1);function q(n,o,e,_,r,u){const p=l("hb-demo0"),s=l("demo-block"),a=l("right-nav");return L(),P($,null,[t("section",null,[Q,S,T,i(s,{fs:""},{source:c(()=>[i(p)]),highlight:c(()=>[U]),default:c(()=>[W]),_:1})]),i(a)],64)}var Y=w(I,[["render",q]]);export{Y as default};
