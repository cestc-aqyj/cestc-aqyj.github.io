var G=Object.defineProperty;var g=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var B=(n,t,o)=>t in n?G(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,k=(n,t)=>{for(var o in t||(t={}))J.call(t,o)&&B(n,o,t[o]);if(g)for(var o of g(t))O.call(t,o)&&B(n,o,t[o]);return n};import{U as b,L as Y,W as Z,Q as c,a1 as m,X as f,a9 as tt,aX as y,a2 as x,aR as ot}from"./vue.64e975b8.js";import{H as ut}from"./hongluan-icons.0c35ed0d.js";import{_ as nt}from"./index.7e3760ca.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";const et={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:n,createVNode:t,withCtx:o,resolveDynamicComponent:_,openBlock:d,createBlock:C,createCommentVNode:F,createTextVNode:e,createElementVNode:r,Fragment:v,createElementBlock:T}=y,S=e("\u663E\u793A\u9009\u4E2D\u533A\u57DF"),N=e("\u9690\u85CF\u9009\u4E2D\u533A\u57DF"),V=r("br",null,null,-1),M=e("\u663E\u793A\u64CD\u4F5C\u533A"),j=e("\u9690\u85CF\u64CD\u4F5C\u533A"),I=e("\u9690\u85CF\u5220\u9664\u64CD\u4F5C"),z=e("\u663E\u793A\u5220\u9664\u64CD\u4F5C"),$=e("\u663E\u793A3\u4E2A\u64CD\u4F5C"),W=r("br",null,null,-1),L=e("\u9690\u85CF\u8868\u683C\u5217\u914D\u7F6E"),X=e("\u6DFB\u52A0\u5217");function H(u,i){const a=n("two-inbox"),s=n("hl-icon"),w=n("two-world"),D=n("two-airplay"),h=n("hl-group"),p=n("hb-table-toolbar"),l=n("hl-button");return d(),T(v,null,[t(p,{selection:u.selection,action:u.action,extra:u.extra,onAction:u.onAction,onColChange:u.onColChange},{"extra-after":o(()=>[t(h,{merge:""},{default:o(()=>[t(s,{size:"xs",fill:""},{default:o(()=>[t(a)]),_:1}),t(s,{size:"xs",fill:""},{default:o(()=>[t(w)]),_:1}),t(s,{size:"xs",fill:""},{default:o(()=>[t(D)]),_:1})]),_:1})]),"action-icon":o(({item:E})=>[E.icon?(d(),C(s,{key:0},{default:o(()=>[(d(),C(_("Two"+E.icon)))]),_:2},1024)):F("",!0)]),_:1},8,["selection","action","extra","onAction","onColChange"]),t(h,{class:"m-t-md",indent:"var(--md)"},{default:o(()=>[t(l,{onClick:u.showSelection},{default:o(()=>[S]),_:1},8,["onClick"]),t(l,{onClick:u.hideSelection},{default:o(()=>[N]),_:1},8,["onClick"])]),_:1}),V,t(h,{class:"m-t-md",indent:"var(--md)"},{default:o(()=>[t(l,{onClick:u.showAction},{default:o(()=>[M]),_:1},8,["onClick"]),t(l,{onClick:u.hideAction},{default:o(()=>[j]),_:1},8,["onClick"]),t(l,{onClick:u.hideDelAction},{default:o(()=>[I]),_:1},8,["onClick"]),t(l,{onClick:u.showDelAction},{default:o(()=>[z]),_:1},8,["onClick"]),t(l,{onClick:u.show3Actions},{default:o(()=>[$]),_:1},8,["onClick"])]),_:1}),W,t(h,{class:"m-t-md",indent:"var(--md)"},{default:o(()=>[t(l,{onClick:u.hideColConfigAction},{default:o(()=>[L]),_:1},8,["onClick"]),t(l,{onClick:u.addColAction},{default:o(()=>[X]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:P,reactive:A}=y,{TwoInbox:Q,TwoWorld:U,TwoAirplay:K}=ut,R=P({components:{TwoInbox:Q,TwoWorld:U,TwoAirplay:K},setup(){const u=A({show:!1,count:0,total:100}),i=A({show:!0,showCount:2,actions:[{label:"\u5220\u9664\u6240\u6709",type:"danger",show:!0},{label:"\u6279\u91CF\u8F6C\u79FB",icon:"Airplay"},{label:"\u6279\u91CF\u5BA1\u5B9A",icon:"Star"},{label:"\u6279\u91CF\u4FEE\u6539"},{label:"\u6279\u91CF\u901A\u8FC7"},{label:"\u5176\u4ED6"}]}),a=A({showColConfig:!0,colConfig:{cols:[{label:"\u5E8F\u53F7"},{label:"\u9ED8\u8BA4colType"},{label:"link\u7C7B\u578B"},{label:"slot\u7C7B\u578B"}]}});return{selection:u,action:i,extra:a,showSelection:()=>{u.count=Math.floor(Math.random()*100),u.show=!0},hideSelection:()=>{u.show=!1,u.count="--"},onAction:q=>{console.log("on action",q)},showAction:()=>{i.show=!0},hideAction:()=>{i.show=!1},hideDelAction:()=>{i.actions[0].show=!1},showDelAction:()=>{i.actions[0].show=!0},show3Actions:()=>{i.showCount=3},addColAction:()=>{a.colConfig.cols.push({label:"\u6DFB\u52A0"+Math.floor(Math.random()*100)})},hideColConfigAction:()=>{a.showColConfig=!1},onColChange:()=>{console.log(a.colConfig.cols)}}}});return k({render:H},R)}()}},lt=c("h1",null,"TableToolbar \u8868\u683C\u5DE5\u5177\u680F",-1),ct=c("p",null,"\u8868\u683C\u5DE5\u5177\u680F\u7EC4\u4EF6\u3002\u5305\u62EC\u4E09\u4E2A\u533A\u57DF\uFF1A\u9009\u4E2D\u4FE1\u606F\u533A\uFF0C\u64CD\u4F5C\u533A\uFF0C\u4EE5\u53CA\u989D\u5916\u533A\u3002",-1),it=c("h2",{id:"ji-chu-yong-fa"},[c("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),x(" \u57FA\u7840\u7528\u6CD5")],-1),at=c("div",null,[c("p",null,[c("code",null,"action"),x("\u53C2\u6570\u91CC\u9762\u663E\u793A\u51FA\u6765\u7684\u9009\u9879\u6E32\u67D3\u4E3AButton\uFF0C\u6298\u53E0\u533A\u57DF\u6E32\u67D3\u4E3ADropdownItem\uFF0C\u6240\u4EE5\u5BF9\u5E94\u7684Button\u548CDropdownItem\u5C5E\u6027\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002\u9488\u5BF9\u5217\u7684\u914D\u7F6E\u4F1A\u81EA\u52A8\u5B58\u50A8\u4E8E\u672C\u5730\u3002")])],-1),st=c("pre",null,[c("code",{class:"html"},` <template>
  <hb-table-toolbar
    :selection="selection"
    :action="action"
    :extra="extra"
    @action="onAction"
    @col-change="onColChange"
  >
    <template #extra-after>
      <hl-group merge>
        <hl-icon size="xs" fill><two-inbox /></hl-icon>
        <hl-icon size="xs" fill><two-world /></hl-icon>
        <hl-icon size="xs" fill><two-airplay /></hl-icon>
      </hl-group>
    </template>
    <template #action-icon="{ item }">
      <hl-icon v-if="item.icon">
        <component :is="'Two' + item.icon" />
      </hl-icon>
    </template>
  </hb-table-toolbar>
  <hl-group class="m-t-md" indent="var(--md)">
    <hl-button @click="showSelection">\u663E\u793A\u9009\u4E2D\u533A\u57DF</hl-button>
    <hl-button @click="hideSelection">\u9690\u85CF\u9009\u4E2D\u533A\u57DF</hl-button>
  </hl-group>
  <br>
  <hl-group class="m-t-md" indent="var(--md)">
    <hl-button @click="showAction">\u663E\u793A\u64CD\u4F5C\u533A</hl-button>
    <hl-button @click="hideAction">\u9690\u85CF\u64CD\u4F5C\u533A</hl-button>
    <hl-button @click="hideDelAction">\u9690\u85CF\u5220\u9664\u64CD\u4F5C</hl-button>
    <hl-button @click="showDelAction">\u663E\u793A\u5220\u9664\u64CD\u4F5C</hl-button>
    <hl-button @click="show3Actions">\u663E\u793A3\u4E2A\u64CD\u4F5C</hl-button>
  </hl-group>
  <br>
  <hl-group class="m-t-md" indent="var(--md)">
    <hl-button @click="hideColConfigAction">\u9690\u85CF\u8868\u683C\u5217\u914D\u7F6E</hl-button>
    <hl-button @click="addColAction">\u6DFB\u52A0\u5217</hl-button>
  </hl-group>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { TwoInbox, TwoWorld, TwoAirplay } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoInbox, TwoWorld, TwoAirplay },
  setup() {
    const selection = reactive({
      show: false,
      count: 0,
      total: 100,
    })
    const action = reactive({
      show: true,
      showCount: 2,
      actions: [
        { label: '\u5220\u9664\u6240\u6709', type: 'danger', show: true },
        { label: '\u6279\u91CF\u8F6C\u79FB', icon: 'Airplay' },
        { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'Star' },
        { label: '\u6279\u91CF\u4FEE\u6539' },
        { label: '\u6279\u91CF\u901A\u8FC7' },
        { label: '\u5176\u4ED6' },
      ],
    })
    const extra = reactive({
      showColConfig: true,
      colConfig: {
        cols: [
          { label: '\u5E8F\u53F7' },
          { label: '\u9ED8\u8BA4colType' },
          { label: 'link\u7C7B\u578B' },
          { label: 'slot\u7C7B\u578B' },
        ],
      },
    })

    const onAction = item => {
      console.log('on action', item)
    }

    const showSelection = () => {
      selection.count = Math.floor(Math.random() * 100)
      selection.show = true
    }
    const hideSelection = () => {
      selection.show = false
      selection.count = '--'
    }
    const showAction = () => {
      action.show = true
    }
    const hideAction = () => {
      action.show = false
    }
    const hideDelAction = () => {
      action.actions[0].show = false
    }
    const showDelAction = () => {
      action.actions[0].show = true
    }
    const show3Actions = () => {
      action.showCount = 3
    }
    const hideColConfigAction = () => {
      extra.showColConfig = false
    }
    const addColAction = () => {
      extra.colConfig.cols.push({ label: '\u6DFB\u52A0' + Math.floor(Math.random() * 100) })
    }
    const onColChange = () => {
      console.log(extra.colConfig.cols)
    }
    return {
      selection,
      action,
      extra,
      showSelection,
      hideSelection,
      onAction,
      showAction,
      hideAction,
      hideDelAction,
      showDelAction,
      show3Actions,
      addColAction,
      hideColConfigAction,
      onColChange,
    }
  },
})
<\/script>
`)],-1),ht=ot('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>selection</td><td>\u9009\u4E2D\u4FE1\u606F</td><td>object {show: boolean; count: string / number, total: string / number}</td><td></td><td>{ show: false, count: &#39;--&#39;, total: &#39;--&#39; }</td></tr><tr><td>action</td><td>\u64CD\u4F5C\u4FE1\u606F</td><td>object { show: boolean; showCount: number; actions: array&lt;{label: string; show: boolean}&gt; }</td><td></td><td>{ show: true, showCount: 1, actions: [] }</td></tr><tr><td>extra</td><td>\u53F3\u4FA7\u989D\u5916\u533A\u57DF\u4FE1\u606F</td><td>object {showColConfig: boolean; colConfig: object}</td><td></td><td>{showColConfig: true, colConfig: {}}</td></tr></tbody></table><h2 id="extra.colconfig-attributes"><a class="header-anchor" href="#extra.colconfig-attributes"></a> extra.colConfig Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>storeKey</td><td>\u5B58\u50A8\u5728LocalStorage\u4E2D\u7684key\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u8BBE\u7F6E</td><td>string</td><td></td><td>location.pathname + location.hash</td></tr><tr><td>version</td><td>\u5B58\u50A8\u7684\u6570\u636E\u7248\u672C\u53F7\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u8BBE\u7F6E\u3002\u5982\u679C\u786E\u5B9E\u9700\u8981\u653E\u5F03\u81EA\u52A8\u4FDD\u5B58\uFF0C\u6BCF\u6B21\u53EF\u4F20\u5165\u968F\u673A\u5B57\u7B26\u4E32</td><td>string</td><td></td><td>v1</td></tr><tr><td>cols</td><td>\u5217\u4FE1\u606F\uFF0C\u5F53\u8FDB\u884C\u5217\u9009\u62E9\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5199\u5165$show$\u5C5E\u6027\uFF0C\u8BF7\u4E0D\u8981\u624B\u5DE5\u4FEE\u6539\u6B64\u5C5E\u6027\u3002\u8BF7\u786E\u8BA4label\u503C\u4E0D\u91CD\u590D</td><td>object {label: string}</td><td>--</td><td>--</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>selection</td><td>\u9009\u4E2D\u4FE1\u606F\u533A\u57DF</td></tr><tr><td>extra-after</td><td>\u53F3\u4FA7\u989D\u5916\u4FE1\u606F\u533A\u57DF\uFF0C\u5728colConfig\u6309\u94AE\u4E4B\u540E</td></tr><tr><td>extra-before</td><td>\u53F3\u4FA7\u989D\u5916\u4FE1\u606F\u533A\u57DF\uFF0C\u5728colConfig\u6309\u94AE\u4E4B\u524D</td></tr><tr><td>action-icon</td><td>\u81EA\u5B9A\u4E49action\u56FE\u6807</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>action</td><td>\u70B9\u51FBaction\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u4F20\u5165\u7684action\u5BF9\u8C61</td></tr><tr><td>col-change</td><td>\u9009\u62E9\u5217\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>--</td></tr></tbody></table>',8);function dt(n,t,o,_,d,C){const F=b("hb-demo0"),e=b("demo-block"),r=b("right-nav");return Y(),Z(tt,null,[c("section",null,[lt,ct,it,m(e,{fs:""},{source:f(()=>[m(F)]),highlight:f(()=>[st]),default:f(()=>[at]),_:1}),ht]),m(r)],64)}var Dt=nt(et,[["render",dt]]);export{Dt as default};
