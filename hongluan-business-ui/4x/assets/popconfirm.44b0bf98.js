var x=Object.defineProperty;var C=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var A=(u,e,t)=>e in u?x(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,E=(u,e)=>{for(var t in e||(e={}))v.call(e,t)&&A(u,t,e[t]);if(C)for(var t of C(e))k.call(e,t)&&A(u,t,e[t]);return u};import{P as _,L as y,W as N,Q as o,Y as l,S as s,a8 as V,aZ as b,a0 as F,aT as P}from"./vue.fe1efe53.js";import{_ as T}from"./index.9537f2bb.js";import"./hongluan-business.978527d4.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.f25ece14.js";const w={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:u,resolveComponent:e,withCtx:t,createVNode:c,openBlock:i,createBlock:a}=b,d=u("Delete");function n(p,r){const f=e("hl-button"),m=e("hb-popconfirm");return i(),a(m,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F"},{reference:t(()=>[c(f,null,{default:t(()=>[d]),_:1})]),_:1})}return E({render:n},{})}(),"hb-demo1":function(){const{resolveComponent:u,createVNode:e,withCtx:t,createTextVNode:c,openBlock:i,createBlock:a}=b,d=c(" \u786E\u8BA4\u5220\u9664\u5417\uFF1F "),n=c("\u5220\u9664");function h(r,f){const m=u("fill-info"),B=u("hl-icon"),D=u("hl-button"),g=u("hb-popconfirm");return i(),a(g,{"confirm-button-text":"\u786E\u5B9A","cancel-button-text":"\u4E0D\uFF0C\u8C22\u8C22","confirm-button-type":"danger"},{title:t(()=>[e(B,{type:"danger",class:"m-r-md"},{default:t(()=>[e(m)]),_:1}),d]),reference:t(()=>[e(D,null,{default:t(()=>[n]),_:1})]),_:1})}return E({render:h},{})}(),"hb-demo2":function(){const{createTextVNode:u,resolveComponent:e,withCtx:t,createVNode:c,openBlock:i,createBlock:a}=b,d=u("Delete");function n(r,f){const m=e("hl-button"),B=e("hb-popconfirm");return i(),a(B,{"confirm-button-text":"Yes","cancel-button-text":"No",title:"Are you sure to delete this?","on-confirm":r.confirmEvent,"on-cancel":r.cancelEvent},{reference:t(()=>[c(m,null,{default:t(()=>[d]),_:1})]),_:1},8,["on-confirm","on-cancel"])}const{defineComponent:h}=b,p=h({setup(){return{confirmEvent:()=>{console.log("confirm!")},cancelEvent:()=>{console.log("cancel!")}}}});return E({render:n},p)}()}},j=o("h1",null,"Popconfirm \u6C14\u6CE1\u786E\u8BA4\u6846",-1),$=o("p",null,"\u70B9\u51FB\u67D0\u4E2A\u5143\u7D20\u5F39\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u3002",-1),L=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),F(" \u57FA\u7840\u7528\u6CD5")],-1),Y=o("p",null,"Popconfirm \u7684\u5C5E\u6027\u4E0E Popover \u5F88\u7C7B\u4F3C\uFF0C \u56E0\u6B64\u5BF9\u4E8E\u91CD\u590D\u5C5E\u6027\uFF0C\u8BF7\u53C2\u8003 Popover \u7684\u6587\u6863\uFF0C\u5728\u6B64\u6587\u6863\u4E2D\u4E0D\u505A\u8BE6\u5C3D\u89E3\u91CA\u3002",-1),z=o("div",null,[o("p",null,"\u5728 Popconfirm \u4E2D\uFF0C\u53EA\u6709 title \u5C5E\u6027\u53EF\u7528\uFF0Ccontent \u5C5E\u6027\u4E0D\u4F1A\u88AB\u5C55\u793A\u3002")],-1),M=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm title="\u786E\u8BA4\u5220\u9664\u5417\uFF1F">
    <template #reference>
      <hl-button>Delete</hl-button>
    </template>
  </hb-popconfirm>
</template>
`)],-1),Q=o("h2",{id:"zi-ding-yi-dan-chu-kuang-de-nei-rong"},[o("a",{class:"header-anchor",href:"#zi-ding-yi-dan-chu-kuang-de-nei-rong"}),F(" \u81EA\u5B9A\u4E49\u5F39\u51FA\u6846\u7684\u5185\u5BB9")],-1),S=o("p",null,"\u53EF\u4EE5\u5728 Popconfirm \u4E2D\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),W=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),H=o("h2",{id:"shi-jian"},[o("a",{class:"header-anchor",href:"#shi-jian"}),F(" \u4E8B\u4EF6")],-1),O=o("p",null,"\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6",-1),X=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    title="Are you sure to delete this?"
    :on-confirm="confirmEvent"
    :on-cancel="cancelEvent"
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
`)],-1),Z=P('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>primary</td></tr><tr><td>cancel-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>link</td></tr><tr><td>effect</td><td>\u5F39\u7A97\u51FA\u9898</td><td>string</td><td>light / dark</td><td>light</td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>-</td><td>-</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u9690\u85CF\u4E0B\u62C9\u6846\u4E8B\u4EF6(ms)</td><td>number</td><td>-</td><td>200</td></tr><tr><td>teleported</td><td>\u5F39\u7A97\u662F\u5426append\u5230body\u4E0A</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>persistent</td><td>\u5173\u95ED\u5F39\u7A97\u540E\uFF0C\u662F\u5426\u9500\u6BC1DOM\u8282\u70B9</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>onConfirm</td><td>\u786E\u8BA4\u56DE\u8C03\u65B9\u6CD5</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u56DE\u8C03\u65B9\u6CD5</td><td>Function</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>reference</td><td>\u89E6\u53D1 Popconfirm \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr></tbody></table>',4);function q(u,e,t,c,i,a){const d=_("hb-demo0"),n=_("demo-block"),h=_("hb-demo1"),p=_("hb-demo2"),r=_("right-nav");return y(),N(V,null,[o("section",null,[j,$,L,Y,l(n,{fs:""},{source:s(()=>[l(d)]),highlight:s(()=>[M]),default:s(()=>[z]),_:1}),Q,S,l(n,{fs:""},{source:s(()=>[l(h)]),highlight:s(()=>[W]),_:1}),H,O,l(n,{fs:""},{source:s(()=>[l(p)]),highlight:s(()=>[X]),_:1}),Z]),l(r)],64)}var tt=T(w,[["render",q]]);export{tt as default};
