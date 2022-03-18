var D=Object.defineProperty;var F=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var A=(n,e,t)=>e in n?D(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,E=(n,e)=>{for(var t in e||(e={}))v.call(e,t)&&A(n,t,e[t]);if(F)for(var t of F(e))y.call(e,t)&&A(n,t,e[t]);return n};import{a4 as _,Q as k,W as N,S as o,a7 as l,a5 as s,P as V,aX as b,a8 as C,aS as P}from"./vue.7ea6d5da.js";import{_ as T}from"./index.709ccb24.js";import"./hongluan-business.a5572174.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.daeaf28e.js";const w={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:n,resolveComponent:e,withCtx:t,createVNode:c,openBlock:a,createBlock:i}=b,r=n("Delete");function u(p,d){const f=e("hl-button"),m=e("hb-popconfirm");return a(),i(m,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F"},{reference:t(()=>[c(f,null,{default:t(()=>[r]),_:1})]),_:1})}return E({render:u},{})}(),"hb-demo1":function(){const{resolveComponent:n,createVNode:e,withCtx:t,createTextVNode:c,openBlock:a,createBlock:i}=b,r=c(" \u786E\u8BA4\u5220\u9664\u5417\uFF1F "),u=c("\u5220\u9664");function h(d,f){const m=n("fill-info"),B=n("hl-icon"),g=n("hl-button"),x=n("hb-popconfirm");return a(),i(x,{"confirm-button-text":"\u786E\u5B9A","cancel-button-text":"\u4E0D\uFF0C\u8C22\u8C22","confirm-button-type":"danger"},{title:t(()=>[e(B,{type:"danger",class:"m-r-md"},{default:t(()=>[e(m)]),_:1}),r]),reference:t(()=>[e(g,null,{default:t(()=>[u]),_:1})]),_:1})}return E({render:h},{})}(),"hb-demo2":function(){const{createTextVNode:n,resolveComponent:e,withCtx:t,createVNode:c,openBlock:a,createBlock:i}=b,r=n("Delete");function u(d,f){const m=e("hl-button"),B=e("hb-popconfirm");return a(),i(B,{"confirm-button-text":"Yes","cancel-button-text":"No",title:"Are you sure to delete this?",onConfirm:d.confirmEvent,onCancel:d.cancelEvent},{reference:t(()=>[c(m,null,{default:t(()=>[r]),_:1})]),_:1},8,["onConfirm","onCancel"])}const{defineComponent:h}=b,p=h({setup(){return{confirmEvent:()=>{console.log("confirm!")},cancelEvent:()=>{console.log("cancel!")}}}});return E({render:u},p)}()}},j=o("h1",null,"Popconfirm \u6C14\u6CE1\u786E\u8BA4\u6846",-1),$=o("p",null,"\u70B9\u51FB\u67D0\u4E2A\u5143\u7D20\u5F39\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u3002",-1),S=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),C(" \u57FA\u7840\u7528\u6CD5")],-1),z=o("p",null,"Popconfirm \u7684\u5C5E\u6027\u4E0E Popover \u5F88\u7C7B\u4F3C\uFF0C \u56E0\u6B64\u5BF9\u4E8E\u91CD\u590D\u5C5E\u6027\uFF0C\u8BF7\u53C2\u8003 Popover \u7684\u6587\u6863\uFF0C\u5728\u6B64\u6587\u6863\u4E2D\u4E0D\u505A\u8BE6\u5C3D\u89E3\u91CA\u3002",-1),L=o("div",null,[o("p",null,"\u5728 Popconfirm \u4E2D\uFF0C\u53EA\u6709 title \u5C5E\u6027\u53EF\u7528\uFF0Ccontent \u5C5E\u6027\u4E0D\u4F1A\u88AB\u5C55\u793A\u3002")],-1),Q=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm title="\u786E\u8BA4\u5220\u9664\u5417\uFF1F">
    <template #reference>
      <hl-button>Delete</hl-button>
    </template>
  </hb-popconfirm>
</template>
`)],-1),W=o("h2",{id:"zi-ding-yi-dan-chu-kuang-de-nei-rong"},[o("a",{class:"header-anchor",href:"#zi-ding-yi-dan-chu-kuang-de-nei-rong"}),C(" \u81EA\u5B9A\u4E49\u5F39\u51FA\u6846\u7684\u5185\u5BB9")],-1),X=o("p",null,"\u53EF\u4EE5\u5728 Popconfirm \u4E2D\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),Y=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm
    confirm-button-text="\u786E\u5B9A"
    cancel-button-text="\u4E0D\uFF0C\u8C22\u8C22"
    confirm-button-type="danger"
  >
    <template #title>
      <hl-icon type="danger" class="m-r-md">
        <fill-info />
      </hl-icon>
      \u786E\u8BA4\u5220\u9664\u5417\uFF1F
    </template>
    <template #reference>
      <hl-button>\u5220\u9664</hl-button>
    </template>
  </hb-popconfirm>
</template>
`)],-1),H=o("h2",{id:"shi-jian"},[o("a",{class:"header-anchor",href:"#shi-jian"}),C(" \u4E8B\u4EF6")],-1),M=o("p",null,"\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6",-1),q=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <hl-button>Delete</hl-button>
    </template>
  </hb-popconfirm>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const confirmEvent = () => {
      console.log('confirm!')
    }
    const cancelEvent = () => {
      console.log('cancel!')
    }

    return {
      confirmEvent,
      cancelEvent,
    }
  },
})
<\/script>
`)],-1),G=P('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>primary</td></tr><tr><td>cancel-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>link</td></tr><tr><td>effect</td><td>\u5F39\u7A97\u51FA\u9898</td><td>string</td><td>light / dark</td><td>light</td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>reference</td><td>\u89E6\u53D1 Popconfirm \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>',6);function I(n,e,t,c,a,i){const r=_("hb-demo0"),u=_("demo-block"),h=_("hb-demo1"),p=_("hb-demo2"),d=_("right-nav");return k(),N(V,null,[o("section",null,[j,$,S,z,l(u,{fs:""},{source:s(()=>[l(r)]),highlight:s(()=>[Q]),default:s(()=>[L]),_:1}),W,X,l(u,{fs:""},{source:s(()=>[l(h)]),highlight:s(()=>[Y]),_:1}),H,M,l(u,{fs:""},{source:s(()=>[l(p)]),highlight:s(()=>[q]),_:1}),G]),l(d)],64)}var tt=T(w,[["render",I]]);export{tt as default};
