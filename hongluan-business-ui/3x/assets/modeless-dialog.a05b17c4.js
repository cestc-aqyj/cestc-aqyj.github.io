var W=Object.defineProperty;var $=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var j=(e,l,u)=>l in e?W(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,P=(e,l)=>{for(var u in l||(l={}))X.call(l,u)&&j(e,u,l[u]);if($)for(var u of $(l))q.call(l,u)&&j(e,u,l[u]);return e};import{a4 as M,Q as G,W as J,S as t,a7 as b,a5 as h,P as K,aX as v,a8 as n,aS as O}from"./vue.7ea6d5da.js";import{ad as L}from"./hongluan-business.a5572174.js";import{_ as Y,H}from"./index.709ccb24.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.daeaf28e.js";const Z={name:"component-doc",components:{"hb-demo0":function(){const{toDisplayString:e,createTextVNode:l,resolveComponent:u,withCtx:o,createVNode:F,createElementVNode:m,Fragment:E,openBlock:a,createElementBlock:g}=v,p=m("p",null,"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",-1);function C(d,s){const i=u("hl-button"),k=u("hb-modeless-dialog");return a(),g(E,null,[F(i,{onClick:d.show},{default:o(()=>[l(e(d.visible?"Hide":"Show"),1)]),_:1},8,["onClick"]),F(k,{modelValue:d.visible,"onUpdate:modelValue":s[0]||(s[0]=c=>d.visible=c),width:"400px",title:"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",resize:"",onResize:d.resizeCB},{default:o(()=>[p]),_:1},8,["modelValue","onResize"])],64)}const{defineComponent:B,ref:_}=v,y=B({setup(){const d=_(!1);return{visible:d,show:()=>{d.value=!d.value},resizeCB:()=>{console.log("resizing...")}}}});return P({render:C},y)}(),"hb-demo1":function(){const{toDisplayString:e,createTextVNode:l,resolveComponent:u,withCtx:o,createVNode:F,createElementVNode:m,Fragment:E,openBlock:a,createElementBlock:g}=v,p=m("div",{class:"m-t-md"},"\u8303\u56F4\uFF1A\u5DE6\u4E0A\u89D2\uFF080,0\uFF09 / \u53F3\u4E0B\u89D2\uFF081000,600\uFF09",-1),C=m("p",null,"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",-1);function B(s,i){const k=u("hl-button"),c=u("hb-modeless-dialog");return a(),g(E,null,[F(k,{onClick:s.show},{default:o(()=>[l(e(s.visible?"Hide":"Show"),1)]),_:1},8,["onClick"]),p,F(c,{modelValue:s.visible,"onUpdate:modelValue":i[0]||(i[0]=f=>s.visible=f),width:"400px",title:"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B",boundings:[0,0,1e3,600]},{default:o(()=>[C]),_:1},8,["modelValue"])],64)}const{defineComponent:_,ref:y}=v,d=_({setup(){const s=y(!1);return{visible:s,show:()=>{s.value=!s.value}}}});return P({render:B},d)}(),"hb-demo2":function(){const{createTextVNode:e,resolveComponent:l,withCtx:u,createVNode:o,openBlock:F,createBlock:m}=v,E=e("\u521B\u5EFA"),a=e("\u624B\u52A8\u5173\u95ED");function g(d,s){const i=l("hl-button"),k=l("hl-group");return F(),m(k,{gap:"var(--md)"},{default:u(()=>[o(i,{onClick:d.create},{default:u(()=>[E]),_:1},8,["onClick"]),o(i,{onClick:d.close},{default:u(()=>[a]),_:1},8,["onClick"])]),_:1})}const{defineComponent:p,h:C}=v,{ModelessDialogManager:B,HbEmpty:_}=H,y=p({setup(){return{create:()=>{B.show({id:"my-modelesss-dialog",title:"\u6D4B\u8BD5Manager",body:C(_,{description:"\u7A7A\u5185\u5BB9"}),resize:!0})},close:()=>{B.get("my-modelesss-dialog").close()}}}});return P({render:g},y)}(),"hb-demo3":function(){const{createTextVNode:e,resolveComponent:l,withCtx:u,createVNode:o,toDisplayString:F,createElementVNode:m,Fragment:E,openBlock:a,createElementBlock:g}=v,p=e("\u521B\u5EFA"),C=e("\u6700\u5927\u5316"),B=e("\u6298\u53E0"),_=e("\u663E\u793A/\u9690\u85CF"),y=e("\u624B\u5DE5\u5173\u95ED"),d=m("br",null,null,-1),s=e("\u521B\u5EFA\u591A\u4E2A\u5BF9\u8BDD\u6846"),i=m("br",null,null,-1),k=e("\u6298\u53E0\u6240\u6709"),c=e("\u5173\u95ED\u6240\u6709"),f=e("\u9690\u85CF\u6240\u6709"),w=e("\u663E\u793A\u6240\u6709");function x(r,S){const A=l("hl-button"),U=l("hl-tag"),N=l("hl-group");return a(),g(E,null,[o(N,{gap:"var(--md)"},{default:u(()=>[o(A,{onClick:r.create},{default:u(()=>[p]),_:1},8,["onClick"]),o(U,null,{default:u(()=>[e("\u72B6\u6001\uFF1A"+F(r.visible?"\u663E\u793A":"\u9690\u85CF"),1)]),_:1}),o(A,{onClick:r.max},{default:u(()=>[C]),_:1},8,["onClick"]),o(A,{onClick:r.collapse},{default:u(()=>[B]),_:1},8,["onClick"]),o(A,{onClick:r.show},{default:u(()=>[_]),_:1},8,["onClick"]),o(A,{onClick:r.close},{default:u(()=>[y]),_:1},8,["onClick"])]),_:1}),d,o(N,{gap:"var(--md)",class:"m-t-md"},{default:u(()=>[o(A,{onClick:r.create2},{default:u(()=>[s]),_:1},8,["onClick"])]),_:1}),i,o(N,{gap:"var(--md)",class:"m-t-md"},{default:u(()=>[o(A,{onClick:r.collaseAll},{default:u(()=>[k]),_:1},8,["onClick"]),o(A,{onClick:r.closeAll},{default:u(()=>[c]),_:1},8,["onClick"]),o(A,{onClick:r.hideAll},{default:u(()=>[f]),_:1},8,["onClick"]),o(A,{onClick:r.showAll},{default:u(()=>[w]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:I,ref:z,h:V}=v,{HlButton:T}=L,{ModelessDialogManager:D}=H,Q=I({setup(){const r=z(""),S=z(!1);return{visible:S,create:()=>{D.show({id:"my-modelesss-dialog2",title:"\u6D4B\u8BD5Manager\uFF0C\u56FA\u5B9AID",body:V("input",{value:r.value,onInput:R=>{r.value=R.target.value}}),footer:V("div",null,[V(T,{type:"primary",class:"m-r-md"},{default:()=>"\u786E\u5B9A"}),V(T,null,{default:()=>"\u53D6\u6D88"})])}),S.value=D.get("my-modelesss-dialog2").isShown()},show:()=>{D.get("my-modelesss-dialog2").toggleShow(),S.value=D.get("my-modelesss-dialog2").isShown()},create2:()=>{D.show({title:"\u6D4B\u8BD5Manager"})},max:()=>{D.get("my-modelesss-dialog2").toggleMaximize()},collapse:()=>{D.get("my-modelesss-dialog2").toggleCollapse()},close:()=>{D.get("my-modelesss-dialog2").close()},collaseAll:()=>{D.collapseAll()},closeAll:()=>{D.closeAll()},showAll:()=>{D.showAll()},hideAll:()=>{D.hideAll()}}}});return P({render:x},Q)}(),"hb-demo4":function(){const{createTextVNode:e,resolveComponent:l,withCtx:u,createVNode:o,openBlock:F,createBlock:m}=v,E=e("\u521B\u5EFA"),a=e("\u4FEE\u6539\u5BF9\u8BDD\u6846\u5C5E\u6027"),g=e("\u4FEE\u6539Slot"),p=e("\u4FEE\u6539Panel\u5C5E\u6027");function C(c,f){const w=l("hl-button"),x=l("hl-group");return F(),m(x,{gap:"var(--md)"},{default:u(()=>[o(w,{onClick:c.create},{default:u(()=>[E]),_:1},8,["onClick"]),o(w,{onClick:c.modifyProp},{default:u(()=>[a]),_:1},8,["onClick"]),o(w,{onClick:c.modifySlot},{default:u(()=>[g]),_:1},8,["onClick"]),o(w,{onClick:c.modifyPanel},{default:u(()=>[p]),_:1},8,["onClick"])]),_:1})}const{defineComponent:B,ref:_,reactive:y,h:d}=v,{HlButton:s}=L,{ModelessDialogManager:i}=H,k=B({setup(){const c=_(""),f=y({id:"my-modelesss-dialog3",borderless:!0,bodyPadding:"var(--lg)",title:"\u6D4B\u8BD5Manager",body:d("input",{value:c.value,onInput:V=>{c.value=V.target.value}}),footer:d("div",null,[d(s,{type:"primary",class:"m-r-md"},{default:()=>"\u786E\u5B9A"}),d(s,null,{default:()=>"\u53D6\u6D88"})])});return{create:()=>{i.show(f)},modifyProp:()=>{f.title="\u4FEE\u6539\u5BF9\u8BDD\u6846\u6807\u9898"},modifyPanel:()=>{f.borderless=!1,f.bodyPadding="var(--sm)"},modifySlot:()=>{f.footer=d("div",{innerHTML:"\u4FEE\u6539Footer Slot\u5185\u5BB9"})}}}});return P({render:C},k)}()}},uu=t("h1",null,"ModelessDialog \u975E\u6A21\u6001\u5BF9\u8BDD\u6846",-1),tu=t("p",null,"\u57FA\u4E8EPanel\u6784\u5EFA\u7684\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\uFF0C\u652F\u6301\u6700\u5927\u5316\uFF0C\u6700\u5C0F\u5316\uFF0C\u6536\u8D77\uFF0C\u5C55\u5F00\uFF0C\u62D6\u62FD\u6539\u53D8\u5927\u5C0F\u7B49\u529F\u80FD",-1),eu=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),n(" \u57FA\u7840\u7528\u6CD5")],-1),ou=t("p",null,"\u53EF\u4EE5\u901A\u8FC7\u58F0\u660E\u7EC4\u4EF6\u7684\u5F62\u5F0F\uFF0C\u5B9E\u4F8B\u5316\u8BE5\u7EC4\u4EF6\u3002\u5728\u70B9\u51FB\u5173\u95ED\u6216\u8005\u8DEF\u7531\u5207\u6362\u4EE5\u540E\uFF0C\u8BE5\u7EC4\u4EF6\u81EA\u52A8\u9500\u6BC1",-1),lu=t("div",null,[t("p",null,"\u53EF\u4EE5\u5728style\u4E2D\u8BBE\u7F6Eleft/top\u8986\u76D6\u9ED8\u8BA4\u7684\u5F39\u51FA\u4F4D\u7F6E")],-1),du=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button @click="show">{{ visible ? 'Hide' : 'Show' }}</hl-button>
  <hb-modeless-dialog
    v-model="visible"
    width="400px"
    title="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B"
    resize
    @resize="resizeCB"
  >
    <p>\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B</p>
  </hb-modeless-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref(false)

    const show = () => {
      visible.value = !visible.value
    }
    const resizeCB = () => {
      console.log('resizing...')
    }
    return {
      visible,
      show,
      resizeCB,
    }
  },
})
<\/script>
`)],-1),su=t("h2",{id:"tuo-dong-fan-wei"},[t("a",{class:"header-anchor",href:"#tuo-dong-fan-wei"}),n(" \u62D6\u52A8\u8303\u56F4")],-1),nu=t("p",null,[n("\u53EF\u4EE5\u901A\u8FC7 "),t("code",null,"boundings"),n(" \u5C5E\u6027\u9650\u5B9A\u53EF\u62D6\u62FD\u8303\u56F4\uFF0C"),t("code",null,"boundings"),n("\u4E3A\u56DB\u4E2A\u6570\u503C\u7684\u6570\u7EC4\uFF0C\u5206\u522B\u4E3A\u5DE6\u4E0A\u89D2\u5750\u6807\uFF08x,y\uFF09\u4E0E\u53F3\u4E0B\u89D2\u5750\u6807(x,y)")],-1),au=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button @click="show">{{ visible ? 'Hide' : 'Show' }}</hl-button>
  <div class="m-t-md">\u8303\u56F4\uFF1A\u5DE6\u4E0A\u89D2\uFF080,0\uFF09 / \u53F3\u4E0B\u89D2\uFF081000,600\uFF09</div>
  <hb-modeless-dialog
    v-model="visible"
    width="400px"
    title="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B"
    :boundings="[0,0,1000,600]"
  >
    <p>\u975E\u6A21\u6001\u5BF9\u8BDD\u6846\u793A\u4F8B</p>
  </hb-modeless-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref(false)

    const show = () => {
      visible.value = !visible.value
    }
    return {
      visible,
      show,
    }
  },
})
<\/script>
`)],-1),ru=t("h2",{id:"shi-yong-modelessdialogmanager"},[t("a",{class:"header-anchor",href:"#shi-yong-modelessdialogmanager"}),n(" \u4F7F\u7528ModelessDialogManager")],-1),iu=t("p",null,[n("\u901A\u8FC7\u8C03\u7528 "),t("code",null,"ModelessDialogManager"),n(" API\u7684 "),t("code",null,"show"),n(" \u65B9\u6CD5\u521B\u5EFA\u5BF9\u8BDD\u6846\uFF0C\u6B64\u5BF9\u8BDD\u6846\u53EF\u4EE5\u5728\u9875\u9762\u5207\u6362\u4EE5\u540E\u4FDD\u6301\u4E0D\u88AB\u9500\u6BC1\u3002")],-1),cu=t("div",null,[t("p",null,[t("code",null,"id"),n("\u5C5E\u6027\u9700\u8981\u552F\u4E00\u56FA\u5B9A\u503C")])],-1),hu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-button @click="create">\u521B\u5EFA</hl-button>
    <hl-button @click="close">\u624B\u52A8\u5173\u95ED</hl-button>
  </hl-group>
</template>
<script>
import { defineComponent, h } from 'vue'
import { ModelessDialogManager, HbEmpty } from 'hongluan-business-ui'

export default defineComponent({
  setup() {
    const close = () => {
      ModelessDialogManager.get('my-modelesss-dialog').close()
    }

    const create = () => {
      ModelessDialogManager.show({
        id: 'my-modelesss-dialog',
        title: '\u6D4B\u8BD5Manager',
        body: h(HbEmpty, { description: '\u7A7A\u5185\u5BB9' }),
        resize: true,
      })
    }

    return {
      create,
      close,
    }
  },
})
<\/script>
`)],-1),Fu=t("h2",{id:"modelessdialogmanager-apishi-li"},[t("a",{class:"header-anchor",href:"#modelessdialogmanager-apishi-li"}),n(" ModelessDialogManager API\u793A\u4F8B")],-1),mu=t("div",null,[t("p",null,[t("code",null,"header"),n("\uFF0C"),t("code",null,"body"),n("\uFF0C"),t("code",null,"footer"),n(" \u5FC5\u987B\u4E3AVNode\u5B9E\u4F8B\uFF0C\u5426\u5219\u4E0D\u8FDB\u884C\u5904\u7406")])],-1),Bu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-button @click="create">\u521B\u5EFA</hl-button>
    <hl-tag>\u72B6\u6001\uFF1A{{ visible ? '\u663E\u793A' : '\u9690\u85CF' }}</hl-tag>
    <hl-button @click="max">\u6700\u5927\u5316</hl-button>
    <hl-button @click="collapse">\u6298\u53E0</hl-button>
    <hl-button @click="show">\u663E\u793A/\u9690\u85CF</hl-button>
    <hl-button @click="close">\u624B\u5DE5\u5173\u95ED</hl-button>
  </hl-group>
  <br>
  <hl-group gap="var(--md)" class="m-t-md">
    <hl-button @click="create2">\u521B\u5EFA\u591A\u4E2A\u5BF9\u8BDD\u6846</hl-button>
  </hl-group>
  <br>
  <hl-group gap="var(--md)" class="m-t-md">
    <hl-button @click="collaseAll">\u6298\u53E0\u6240\u6709</hl-button>
    <hl-button @click="closeAll">\u5173\u95ED\u6240\u6709</hl-button>
    <hl-button @click="hideAll">\u9690\u85CF\u6240\u6709</hl-button>
    <hl-button @click="showAll">\u663E\u793A\u6240\u6709</hl-button>
  </hl-group>
</template>
<script>
import { defineComponent, ref, h } from 'vue'
import { HlButton } from 'hongluan-ui'
import { ModelessDialogManager } from 'hongluan-business-ui'

export default defineComponent({
  setup() {
    const inputVal = ref('')
    const visible = ref(false)

    const create = () => {
      ModelessDialogManager.show({
        id: 'my-modelesss-dialog2',
        title: '\u6D4B\u8BD5Manager\uFF0C\u56FA\u5B9AID',
        body: h('input', {
          value: inputVal.value,
          onInput:e=> {
            inputVal.value = e.target.value
          },
        }),
        footer: h('div', null, [
          h(HlButton, { type: 'primary', class: 'm-r-md' }, { default: () => '\u786E\u5B9A' }),
          h(HlButton, null, { default: () => '\u53D6\u6D88' }),
        ]),
      })
      visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown()
    }

    const show = () => {
      ModelessDialogManager.get('my-modelesss-dialog2').toggleShow()
      visible.value = ModelessDialogManager.get('my-modelesss-dialog2').isShown()
    }
    const max = () => {
      ModelessDialogManager.get('my-modelesss-dialog2').toggleMaximize()
    }
    const collapse = () => {
      ModelessDialogManager.get('my-modelesss-dialog2').toggleCollapse()
    }
    const close = () => {
      ModelessDialogManager.get('my-modelesss-dialog2').close()
    }

    const create2 = () => {
      ModelessDialogManager.show({
        title: '\u6D4B\u8BD5Manager',
      })
    }

    const collaseAll = () => {
      ModelessDialogManager.collapseAll()
    }
    const closeAll = () => {
      ModelessDialogManager.closeAll()
    }
    const showAll = () => {
      ModelessDialogManager.showAll()
    }
    const hideAll = () => {
      ModelessDialogManager.hideAll()
    }

    return {
      visible,
      create,
      show,
      create2,
      max,
      collapse,
      close,
      collaseAll,
      closeAll,
      showAll,
      hideAll,
    }
  },
})
<\/script>
`)],-1),Du=t("h2",{id:"modelessdialogmanager-apixiang-ying-shi-shi-li"},[t("a",{class:"header-anchor",href:"#modelessdialogmanager-apixiang-ying-shi-shi-li"}),n(" ModelessDialogManager API\u54CD\u5E94\u5F0F\u793A\u4F8B")],-1),Eu=t("p",null,[n("\u5982\u679C\u9700\u8981\u52A8\u6001\u4FEE\u6539\u5BF9\u8BDD\u6846\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"reactive"),n(" \u5305\u88C5\u6240\u6709\u5C5E\u6027\u3002")],-1),gu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-button @click="create">\u521B\u5EFA</hl-button>
    <hl-button @click="modifyProp">\u4FEE\u6539\u5BF9\u8BDD\u6846\u5C5E\u6027</hl-button>
    <hl-button @click="modifySlot">\u4FEE\u6539Slot</hl-button>
    <hl-button @click="modifyPanel">\u4FEE\u6539Panel\u5C5E\u6027</hl-button>
  </hl-group>
</template>
<script>
import { defineComponent, ref, reactive, h } from 'vue'
import { HlButton } from 'hongluan-ui'
import { ModelessDialogManager } from 'hongluan-business-ui'

export default defineComponent({
  setup() {
    const inputVal = ref('')
    const dialogProps = reactive({
      id: 'my-modelesss-dialog3',
      borderless: true,
      bodyPadding: 'var(--lg)',
      title: '\u6D4B\u8BD5Manager',
      body: h('input', {
        value: inputVal.value,
        onInput:e=> {
          inputVal.value = e.target.value
        },
      }),
      footer: h('div', null, [
        h(HlButton, { type: 'primary', class: 'm-r-md' }, { default: () => '\u786E\u5B9A' }),
        h(HlButton, null, { default: () => '\u53D6\u6D88' }),
      ]),
    })

    const create = () => {
      ModelessDialogManager.show(dialogProps)
    }
    const modifyProp = () => {
      dialogProps.title = '\u4FEE\u6539\u5BF9\u8BDD\u6846\u6807\u9898'
    }
    const modifySlot = () => {
      dialogProps.footer = h('div', { innerHTML: '\u4FEE\u6539Footer Slot\u5185\u5BB9' })
    }
    const modifyPanel = () => {
      dialogProps.borderless = false
      dialogProps.bodyPadding = 'var(--sm)'
    }

    return {
      create,
      modifyProp,
      modifyPanel,
      modifySlot,
    }
  },
})
<\/script>
`)],-1),pu=O('<h2 id="pei-he-dockcontainershi-yong"><a class="header-anchor" href="#pei-he-dockcontainershi-yong"></a> \u914D\u5408DockContainer\u4F7F\u7528</h2><p>\u8BF7\u53C2\u89C1DockContainer\u7EC4\u4EF6\u6587\u6863\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u662F\u5426\u663E\u793A\u5BF9\u8BDD\u6846</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BF9\u8BDD\u6846\u7684\u5BBD\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>height</td><td>\u5BF9\u8BDD\u6846\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>top</td><td>\u5BF9\u8BDD\u6846 CSS \u4E2D\u7684 top \u503C</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>resize</td><td>\u53F3\u4E0B\u89D2\u662F\u5426\u53EF\u62D6\u62FD\u6539\u53D8\u5927\u5C0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>boundings</td><td>\u53EF\u62D6\u62FD\u8303\u56F4</td><td>array</td><td>\u2014</td><td>-</td></tr><tr><td>custom-class</td><td>\u5BF9\u8BDD\u6846\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>open-delay</td><td>\u5BF9\u8BDD\u6846\u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-delay</td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-maximize</td><td>\u662F\u5426\u663E\u793A\u6700\u5927\u5316\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-collapse</td><td>\u662F\u5426\u663E\u793A\u6298\u53E0\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C\u5BF9\u8BDD\u6846\u7684\u5173\u95ED</td><td>function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>animation-name</td><td>\u5BF9\u8BDD\u6846\u52A8\u753B\u7C7B\u578B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>title</td><td>\u5BF9\u8BDD\u6846\u6807\u9898\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Eheader slot</td><td>string</td><td>-</td><td>-</td></tr><tr><td>z-index</td><td>\u81EA\u5B9A\u4E49\u5C42\u7EA7</td><td>number</td><td>-</td><td>-</td></tr><tr><td>id</td><td>\u5BF9\u8BDD\u6846\u6839\u8282\u70B9id</td><td>string</td><td>-</td><td>-</td></tr><tr><td>use-dock</td><td>\u662F\u5426\u914D\u5408DockContainer\u4F7F\u7528\u3002\u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u6298\u53E0\u65F6\u4F1A\u628A\u5BF9\u8BDD\u6846\u6536\u7EB3\u5230DockContainer\u4E2D\u53BB</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>snapshot</td><td>\u914D\u5408DockContainer\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u5C55\u793A\u7684\u5F62\u5F0F</td><td>boolean / string / object { type: string, url: string }</td><td>-</td><td>false</td></tr><tr><td>Panel\u7EC4\u4EF6\u5C5E\u6027</td><td>\u5BF9\u8BDD\u6846\u57FA\u4E8EPanel\u7EC4\u4EF6\u6784\u5EFA\uFF0C\u81EA\u52A8\u652F\u6301\u4F7F\u7528Panel\u7EC4\u4EF6\u6240\u6709\u5C5E\u6027</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u5BF9\u8BDD\u6846\u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>\u5BF9\u8BDD\u6846\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>resize</td><td>\u5BF9\u8BDD\u6846\u62D6\u62FD\u6539\u53D8\u5927\u5C0F\u56DE\u8C03</td><td>\u2014</td></tr></tbody></table><h2 id="modelessdialogmanager-methods"><a class="header-anchor" href="#modelessdialogmanager-methods"></a> ModelessDialogManager Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>show</td><td>\u663E\u793A\u5BF9\u8BDD\u6846\uFF0C\u4F1A\u81EA\u5B9A\u68C0\u67E5\u6307\u5B9Aid\u7684\u5BF9\u8BDD\u6846\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u5B58\u5728\u5C06\u76F4\u63A5\u8FD4\u56DE\u5DF2\u5B58\u5728\u5BF9\u8BDD\u6846\u5B9E\u4F8B</td><td>\u5BF9\u8BDD\u6846\u6240\u652F\u6301\u5C5E\u6027 &amp; { header: VNode, body: VNode, footer: VNode }</td></tr><tr><td>get</td><td>\u83B7\u53D6\u5BF9\u8BDD\u6846\u5B9E\u4F8B</td><td>\u5BF9\u8BDD\u6846id</td></tr><tr><td>has</td><td>\u68C0\u67E5\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u5B58\u5728</td><td>\u5BF9\u8BDD\u6846id</td></tr><tr><td>closeAll</td><td>\u5173\u95ED\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>showAll</td><td>\u663E\u793A\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>hideAll</td><td>\u9690\u85CF\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>collapseAll</td><td>\u6298\u53E0\u591A\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>expandAll</td><td>\u5C55\u5F00\u6240\u6709\u5BF9\u8BDD\u6846</td><td>-</td></tr></tbody></table><h2 id="modelessdialog-instance-methods"><a class="header-anchor" href="#modelessdialog-instance-methods"></a> ModelessDialog Instance Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>-</td></tr><tr><td>toggleShow</td><td>\u663E\u793A/\u9690\u85CF\u5BF9\u8BDD\u6846</td><td>shown: boolean\uFF0C\u624B\u52A8\u8BBE\u7F6E\u663E\u793A\u6216\u8005\u9690\u85CF</td></tr><tr><td>toggleCollapse</td><td>\u6298\u53E0/\u5C55\u5F00\u5BF9\u8BDD\u6846</td><td>collapsable: boolean\uFF0C\u624B\u52A8\u8BBE\u7F6E\u6298\u53E0\u6216\u8005\u5C55\u5F00</td></tr><tr><td>toggleMaximize</td><td>\u6700\u5927\u5316/\u8FD8\u539F\u5BF9\u8BDD\u6846</td><td>maximizable: boolean\uFF0C\u624B\u52A8\u8BBE\u7F6E\u6700\u5927\u5316</td></tr><tr><td>isShown</td><td>\u5BF9\u8BDD\u6846\u5DF2\u7ECF\u663E\u793A</td><td>-</td></tr><tr><td>isClosed</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u5173\u95ED</td><td>-</td></tr><tr><td>isCollapsed</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u6298\u53E0</td><td>-</td></tr><tr><td>isMaximized</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u5DF2\u7ECF\u6700\u5927\u5316</td><td>-</td></tr></tbody></table>',12);function Cu(e,l,u,o,F,m){const E=M("hb-demo0"),a=M("demo-block"),g=M("hb-demo1"),p=M("hb-demo2"),C=M("hb-demo3"),B=M("hb-demo4"),_=M("right-nav");return G(),J(K,null,[t("section",null,[uu,tu,eu,ou,b(a,{fs:""},{source:h(()=>[b(E)]),highlight:h(()=>[du]),default:h(()=>[lu]),_:1}),su,nu,b(a,{fs:""},{source:h(()=>[b(g)]),highlight:h(()=>[au]),_:1}),ru,iu,b(a,{fs:""},{source:h(()=>[b(p)]),highlight:h(()=>[hu]),default:h(()=>[cu]),_:1}),Fu,b(a,{fs:""},{source:h(()=>[b(C)]),highlight:h(()=>[Bu]),default:h(()=>[mu]),_:1}),Du,Eu,b(a,{fs:""},{source:h(()=>[b(B)]),highlight:h(()=>[gu]),_:1}),pu]),b(_)],64)}var Nu=Y(Z,[["render",Cu]]);export{Nu as default};
