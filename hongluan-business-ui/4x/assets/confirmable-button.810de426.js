var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var D=(e,o,t)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,B=(e,o)=>{for(var t in o||(o={}))N.call(o,t)&&D(e,t,o[t]);if(x)for(var t of x(o))V.call(o,t)&&D(e,t,o[t]);return e};import{U as f,L as T,W as I,Q as u,a1 as l,X as m,a9 as j,aX as p,a2 as F,aR as z}from"./vue.64e975b8.js";import{H as w}from"./hongluan-icons.0c35ed0d.js";import{_ as $}from"./index.af5faf42.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";const P={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,openBlock:r,createBlock:i}=p,a=e(" \u5220\u9664 ");function d(c,h){const _=o("hb-confirmable-button");return r(),i(_,{tip:"\u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664",onConfirm:c.del},{default:t(()=>[a]),_:1},8,["onConfirm"])}const{defineComponent:n}=p,s=n({setup(){return{del:()=>{console.log("\u786E\u8BA4\u5220\u9664")}}}});return B({render:d},s)}(),"hb-demo1":function(){const{resolveComponent:e,createVNode:o,withCtx:t,createTextVNode:r,openBlock:i,createBlock:a}=p,d=r(" \u518D\u70B9\u51FB\u4E00\u6B21\u5220\u9664 "),n=r(" \u5220\u9664\u5417\uFF1F ");function s(C,A){const E=e("fill-info"),b=e("hl-icon"),y=e("two-close"),v=e("hb-confirmable-button");return i(),a(v,{onConfirm:C.del},{tip:t(()=>[o(b,{type:"danger",class:"m-r-md"},{default:t(()=>[o(E)]),_:1}),d]),default:t(()=>[n,o(b,null,{default:t(()=>[o(y)]),_:1})]),_:1},8,["onConfirm"])}const{defineComponent:c}=p,{FillInfo:h,TwoClose:_}=w,g=c({components:{FillInfo:h,TwoClose:_},setup(){return{del:()=>{console.log("\u786E\u8BA4\u5220\u9664")}}}});return B({render:s},g)}(),"hb-demo2":function(){const{resolveComponent:e,createVNode:o,withCtx:t,createTextVNode:r,openBlock:i,createBlock:a}=p,d=r(" \u518D\u70B9\u51FB\u4E00\u6B21\u786E\u8BA4\u8F6C\u8D26 "),n=r(" \u8F6C\u8D26 ");function s(g,C){const A=e("fill-info"),E=e("hl-icon"),b=e("hb-confirmable-button");return i(),a(b,{"confirm-state":{type:"warning",outline:!0,effect:"light",dashed:!0},"popover-props":{effect:"dark",showArrow:!0}},{tip:t(()=>[o(E,{type:"warning",class:"m-r-md"},{default:t(()=>[o(A)]),_:1}),d]),default:t(()=>[n]),_:1})}const{defineComponent:c}=p,{FillInfo:h}=w,_=c({components:{FillInfo:h}});return B({render:s},_)}()}},X=u("h1",null,"ConfirmableButton \u53CC\u91CD\u786E\u8BA4\u6309\u94AE",-1),H=u("p",null,"\u901A\u5E38\u7528\u4E8E\u9700\u8981\u518D\u6B21\u786E\u8BA4\u7684\u64CD\u4F5C\u3002",-1),L=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),F(" \u57FA\u7840\u7528\u6CD5")],-1),Q=u("pre",null,[u("code",{class:"html"},` <template>
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

`)],-1),U=u("h2",{id:"zi-ding-yi-ti-shi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-ti-shi-nei-rong"}),F(" \u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9")],-1),W=u("pre",null,[u("code",{class:"html"},` <template>
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
import { FillInfo, TwoClose } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillInfo, TwoClose },
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

`)],-1),R=u("h2",{id:"zi-ding-yi-shu-xing"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-shu-xing"}),F(" \u81EA\u5B9A\u4E49\u5C5E\u6027")],-1),S=u("pre",null,[u("code",{class:"html"},` <template>
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
<script>
import { defineComponent } from 'vue'
import { FillInfo } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillInfo },
})
<\/script>


`)],-1),q=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>tip</td><td>\u63D0\u793A\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>default-state</td><td>\u9ED8\u8BA4\u6309\u94AE\u72B6\u6001\uFF0C\u53EF\u4F7F\u7528\u6309\u94AE\u6240\u6709\u5C5E\u6027\uFF0C\u53C2\u8003Button\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>{ type: &#39;link&#39; }</td></tr><tr><td>confirm-state</td><td>\u786E\u8BA4\u6309\u94AE\u72B6\u6001\uFF0C\u53EF\u4F7F\u7528\u6309\u94AE\u6240\u6709\u5C5E\u6027\uFF0C\u53C2\u8003Button\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>{ type: &#39;danger&#39; }</td></tr><tr><td>popover-props</td><td>\u63D0\u793A\u6846\u5C5E\u6027\uFF0C\u53C2\u8003Popover\u7EC4\u4EF6</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9</td></tr><tr><td>tip</td><td>\u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u786E\u8BA4\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>',6);function G(e,o,t,r,i,a){const d=f("hb-demo0"),n=f("demo-block"),s=f("hb-demo1"),c=f("hb-demo2"),h=f("right-nav");return T(),I(j,null,[u("section",null,[X,H,L,l(n,{fs:""},{source:m(()=>[l(d)]),highlight:m(()=>[Q]),_:1}),U,l(n,{fs:""},{source:m(()=>[l(s)]),highlight:m(()=>[W]),_:1}),R,l(n,{fs:""},{source:m(()=>[l(c)]),highlight:m(()=>[S]),_:1}),q]),l(h)],64)}var tt=$(P,[["render",G]]);export{tt as default};
