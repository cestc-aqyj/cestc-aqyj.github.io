var k=Object.defineProperty;var C=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var A=(u,e,t)=>e in u?k(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,b=(u,e)=>{for(var t in e||(e={}))y.call(e,t)&&A(u,t,e[t]);if(C)for(var t of C(e))N.call(e,t)&&A(u,t,e[t]);return u};import{U as _,L as V,W as P,Q as o,a1 as l,X as i,a9 as T,aX as f,a2 as B,aR as w}from"./vue.64e975b8.js";import{H as I}from"./hongluan-icons.0c35ed0d.js";import{_ as j}from"./index.7e3760ca.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";const $={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:u,resolveComponent:e,withCtx:t,createVNode:d,openBlock:s,createBlock:a}=f,r=u("Delete");function n(h,c){const m=e("hl-button"),E=e("hb-popconfirm");return s(),a(E,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F"},{reference:t(()=>[d(m,null,{default:t(()=>[r]),_:1})]),_:1})}return b({render:n},{})}(),"hb-demo1":function(){const{resolveComponent:u,createVNode:e,withCtx:t,createTextVNode:d,openBlock:s,createBlock:a}=f,r=d(" \u786E\u8BA4\u5220\u9664\u5417\uFF1F "),n=d("\u5220\u9664");function p(E,F){const g=u("fill-info"),D=u("hl-icon"),x=u("hl-button"),v=u("hb-popconfirm");return s(),a(v,{"confirm-button-text":"\u786E\u5B9A","cancel-button-text":"\u4E0D\uFF0C\u8C22\u8C22","confirm-button-type":"danger"},{title:t(()=>[e(D,{type:"danger",class:"m-r-md"},{default:t(()=>[e(g)]),_:1}),r]),reference:t(()=>[e(x,null,{default:t(()=>[n]),_:1})]),_:1})}const{defineComponent:h}=f,{FillInfo:c}=I,m=h({components:{FillInfo:c}});return b({render:p},m)}(),"hb-demo2":function(){const{createTextVNode:u,resolveComponent:e,withCtx:t,createVNode:d,openBlock:s,createBlock:a}=f,r=u("Delete");function n(c,m){const E=e("hl-button"),F=e("hb-popconfirm");return s(),a(F,{"confirm-button-text":"Yes","cancel-button-text":"No",title:"Are you sure to delete this?","on-confirm":c.confirmEvent,"on-cancel":c.cancelEvent},{reference:t(()=>[d(E,null,{default:t(()=>[r]),_:1})]),_:1},8,["on-confirm","on-cancel"])}const{defineComponent:p}=f,h=p({setup(){return{confirmEvent:()=>{console.log("confirm!")},cancelEvent:()=>{console.log("cancel!")}}}});return b({render:n},h)}()}},H=o("h1",null,"Popconfirm \u6C14\u6CE1\u786E\u8BA4\u6846",-1),L=o("p",null,"\u70B9\u51FB\u67D0\u4E2A\u5143\u7D20\u5F39\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u3002",-1),X=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),B(" \u57FA\u7840\u7528\u6CD5")],-1),z=o("p",null,"Popconfirm \u7684\u5C5E\u6027\u4E0E Popover \u5F88\u7C7B\u4F3C\uFF0C \u56E0\u6B64\u5BF9\u4E8E\u91CD\u590D\u5C5E\u6027\uFF0C\u8BF7\u53C2\u8003 Popover \u7684\u6587\u6863\uFF0C\u5728\u6B64\u6587\u6863\u4E2D\u4E0D\u505A\u8BE6\u5C3D\u89E3\u91CA\u3002",-1),M=o("div",null,[o("p",null,"\u5728 Popconfirm \u4E2D\uFF0C\u53EA\u6709 title \u5C5E\u6027\u53EF\u7528\uFF0Ccontent \u5C5E\u6027\u4E0D\u4F1A\u88AB\u5C55\u793A\u3002")],-1),Q=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-popconfirm title="\u786E\u8BA4\u5220\u9664\u5417\uFF1F">
    <template #reference>
      <hl-button>Delete</hl-button>
    </template>
  </hb-popconfirm>
</template>
`)],-1),U=o("h2",{id:"zi-ding-yi-dan-chu-kuang-de-nei-rong"},[o("a",{class:"header-anchor",href:"#zi-ding-yi-dan-chu-kuang-de-nei-rong"}),B(" \u81EA\u5B9A\u4E49\u5F39\u51FA\u6846\u7684\u5185\u5BB9")],-1),W=o("p",null,"\u53EF\u4EE5\u5728 Popconfirm \u4E2D\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),Y=o("pre",null,[o("code",{class:"html"},` <template>
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
<script>
import { defineComponent } from 'vue'
import { FillInfo } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillInfo },
})
<\/script>
`)],-1),O=o("h2",{id:"shi-jian"},[o("a",{class:"header-anchor",href:"#shi-jian"}),B(" \u4E8B\u4EF6")],-1),R=o("p",null,"\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6",-1),S=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),q=w('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>primary</td></tr><tr><td>cancel-button-type</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>link</td></tr><tr><td>effect</td><td>\u5F39\u7A97\u51FA\u9898</td><td>string</td><td>light / dark</td><td>light</td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>-</td><td>-</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u9690\u85CF\u4E0B\u62C9\u6846\u4E8B\u4EF6(ms)</td><td>number</td><td>-</td><td>200</td></tr><tr><td>teleported</td><td>\u5F39\u7A97\u662F\u5426append\u5230body\u4E0A</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>persistent</td><td>\u5173\u95ED\u5F39\u7A97\u540E\uFF0C\u662F\u5426\u9500\u6BC1DOM\u8282\u70B9</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>onConfirm</td><td>\u786E\u8BA4\u56DE\u8C03\u65B9\u6CD5</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u56DE\u8C03\u65B9\u6CD5</td><td>Function</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>reference</td><td>\u89E6\u53D1 Popconfirm \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr></tbody></table>',4);function G(u,e,t,d,s,a){const r=_("hb-demo0"),n=_("demo-block"),p=_("hb-demo1"),h=_("hb-demo2"),c=_("right-nav");return V(),P(T,null,[o("section",null,[H,L,X,z,l(n,{fs:""},{source:i(()=>[l(r)]),highlight:i(()=>[Q]),default:i(()=>[M]),_:1}),U,W,l(n,{fs:""},{source:i(()=>[l(p)]),highlight:i(()=>[Y]),_:1}),O,R,l(n,{fs:""},{source:i(()=>[l(h)]),highlight:i(()=>[S]),_:1}),q]),l(c)],64)}var ut=j($,[["render",G]]);export{ut as default};
