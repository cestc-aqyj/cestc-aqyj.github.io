var y=Object.defineProperty;var A=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,B=(o,e)=>{for(var t in e||(e={}))v.call(e,t)&&g(o,t,e[t]);if(A)for(var t of A(e))k.call(e,t)&&g(o,t,e[t]);return o};import{U as m,L as w,W as N,Q as u,a1 as l,X as h,a9 as V,aY as f,a2 as C,aS as T}from"./vue.ad2657a3.js";import{_ as j}from"./index.d7b8800f.js";import"./hongluan-business.43bfe6f1.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.2fede2bd.js";const z={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,openBlock:r,createBlock:i}=f,a=o(" \u5220\u9664 ");function c(s,p){const _=e("hb-confirmable-button");return r(),i(_,{tip:"\u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664",onConfirm:s.del},{default:t(()=>[a]),_:1},8,["onConfirm"])}const{defineComponent:n}=f,d=n({setup(){return{del:()=>{console.log("\u786E\u8BA4\u5220\u9664")}}}});return B({render:c},d)}(),"hb-demo1":function(){const{resolveComponent:o,createVNode:e,withCtx:t,createTextVNode:r,openBlock:i,createBlock:a}=f,c=r(" \u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664 "),n=r(" \u5220\u9664\u5417\uFF1F ");function d(_,F){const E=o("fill-info"),b=o("hl-icon"),x=o("two-close"),D=o("hb-confirmable-button");return i(),a(D,{onConfirm:_.del},{tip:t(()=>[e(b,{type:"danger",class:"m-r-md"},{default:t(()=>[e(E)]),_:1}),c]),default:t(()=>[n,e(b,null,{default:t(()=>[e(x)]),_:1})]),_:1},8,["onConfirm"])}const{defineComponent:s}=f,p=s({setup(){return{del:()=>{console.log("\u786E\u8BA4\u5220\u9664")}}}});return B({render:d},p)}(),"hb-demo2":function(){const{resolveComponent:o,createVNode:e,withCtx:t,createTextVNode:r,openBlock:i,createBlock:a}=f,c=r(" \u518D\u70B9\u51FB\u4E00\u6B21\u786E\u8BA4\u8F6C\u8D26 "),n=r(" \u8F6C\u8D26 ");function d(p,_){const F=o("fill-info"),E=o("hl-icon"),b=o("hb-confirmable-button");return i(),a(b,{"confirm-state":{type:"warning",outline:!0,effect:"light",dashed:!0},"popover-props":{effect:"dark",showArrow:!0}},{tip:t(()=>[e(E,{type:"warning",class:"m-r-md"},{default:t(()=>[e(F)]),_:1}),c]),default:t(()=>[n]),_:1})}return B({render:d},{})}()}},$=u("h1",null,"ConfirmableButton \u53CC\u91CD\u786E\u8BA4\u6309\u94AE",-1),P=u("p",null,"\u901A\u5E38\u7528\u4E8E\u9700\u8981\u518D\u6B21\u786E\u8BA4\u7684\u64CD\u4F5C\u3002",-1),L=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),C(" \u57FA\u7840\u7528\u6CD5")],-1),Q=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-confirmable-button tip="\u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664" @confirm="del">
    \u5220\u9664
  </hb-confirmable-button>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const del = () => {
      console.log('\u786E\u8BA4\u5220\u9664')
    }
    return {
      del,
    }
  },
})
<\/script>

`)],-1),S=u("h2",{id:"zi-ding-yi-ti-shi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-ti-shi-nei-rong"}),C(" \u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9")],-1),W=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-confirmable-button @confirm="del">
    <template #tip>
      <hl-icon type="danger" class="m-r-md">
        <fill-info />
      </hl-icon>
      \u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664
    </template>
    <template #default>
      \u5220\u9664\u5417\uFF1F
      <hl-icon>
        <two-close />
      </hl-icon>
    </template>
  </hb-confirmable-button>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const del = () => {
      console.log('\u786E\u8BA4\u5220\u9664')
    }
    return {
      del,
    }
  },
})
<\/script>

`)],-1),X=u("h2",{id:"zi-ding-yi-shu-xing"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-shu-xing"}),C(" \u81EA\u5B9A\u4E49\u5C5E\u6027")],-1),U=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-confirmable-button
    :confirm-state="{type: 'warning', outline: true, effect: 'light', dashed: true}"
    :popover-props="{effect: 'dark', showArrow: true}"
  >
    <template #tip>
      <hl-icon type="warning" class="m-r-md">
        <fill-info />
      </hl-icon>
      \u518D\u70B9\u51FB\u4E00\u6B21\u786E\u8BA4\u8F6C\u8D26
    </template>
    \u8F6C\u8D26
  </hb-confirmable-button>
</template>

`)],-1),Y=T('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>tip</td><td>\u63D0\u793A\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>default-state</td><td>\u9ED8\u8BA4\u6309\u94AE\u72B6\u6001\uFF0C\u53EF\u4F7F\u7528\u6309\u94AE\u6240\u6709\u5C5E\u6027\uFF0C\u53C2\u8003Button\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>{ type: &#39;link&#39; }</td></tr><tr><td>confirm-state</td><td>\u786E\u8BA4\u6309\u94AE\u72B6\u6001\uFF0C\u53EF\u4F7F\u7528\u6309\u94AE\u6240\u6709\u5C5E\u6027\uFF0C\u53C2\u8003Button\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>{ type: &#39;danger&#39; }</td></tr><tr><td>popover-props</td><td>\u63D0\u793A\u6846\u5C5E\u6027\uFF0C\u53C2\u8003Popover\u7EC4\u4EF6</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9</td></tr><tr><td>tip</td><td>\u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u786E\u8BA4\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>',6);function q(o,e,t,r,i,a){const c=m("hb-demo0"),n=m("demo-block"),d=m("hb-demo1"),s=m("hb-demo2"),p=m("right-nav");return w(),N(V,null,[u("section",null,[$,P,L,l(n,{fs:""},{source:h(()=>[l(c)]),highlight:h(()=>[Q]),_:1}),S,l(n,{fs:""},{source:h(()=>[l(d)]),highlight:h(()=>[W]),_:1}),X,l(n,{fs:""},{source:h(()=>[l(s)]),highlight:h(()=>[U]),_:1}),Y]),l(p)],64)}var O=j(z,[["render",q]]);export{O as default};
