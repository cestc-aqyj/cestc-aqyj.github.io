var q=Object.defineProperty,I=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var j=(a,o,t)=>o in a?q(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,x=(a,o)=>{for(var t in o||(o={}))L.call(o,t)&&j(a,t,o[t]);if(P)for(var t of P(o))S.call(o,t)&&j(a,t,o[t]);return a},y=(a,o)=>I(a,R(o));import{H as k,o as U,C as $,D as e,v as T,M as p,_ as h,au as H,av as N}from"./vue.450bc1d0.js";import{_ as M}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const W={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:a,resolveComponent:o,withCtx:t,createVNode:n,openBlock:D,createBlock:v}=N,b=a("\u8C37\u6B4C\u6D4F\u89C8\u5668"),s=a("\u706B\u72D0\u6D4F\u89C8\u5668"),r=a("\u6B27\u670B\u6D4F\u89C8\u5668");function _(c,l){const d=o("hl-tab-pane"),i=o("hl-tabs");return D(),v(i,{modelValue:c.activeName,"onUpdate:modelValue":l[0]||(l[0]=m=>c.activeName=m),onTabClick:c.handleClick},{default:t(()=>[n(d,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[b]),_:1}),n(d,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[s]),_:1}),n(d,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[r]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:E}=N;return x({render:_},{setup(){return{activeName:E("second"),handleClick:(d,i)=>{console.log(d,i)}}}})}(),"hl-demo1":function(){const{createTextVNode:a,resolveComponent:o,withCtx:t,createVNode:n,openBlock:D,createBlock:v}=N,b=a("\u8C37\u6B4C\u6D4F\u89C8\u5668"),s=a("\u706B\u72D0\u6D4F\u89C8\u5668"),r=a("\u6B27\u670B\u6D4F\u89C8\u5668");function _(c,l){const d=o("hl-tab-pane"),i=o("hl-tabs");return D(),v(i,{modelValue:c.activeName,"onUpdate:modelValue":l[0]||(l[0]=m=>c.activeName=m),type:"line",onTabClick:c.handleClick},{default:t(()=>[n(d,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:t(()=>[b]),_:1}),n(d,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:t(()=>[s]),_:1}),n(d,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:t(()=>[r]),_:1})]),_:1},8,["modelValue","onTabClick"])}const{ref:E}=N;return x({render:_},{setup(){return{activeName:E("first"),handleClick:(d,i)=>{console.log(d,i)}}}})}(),"hl-demo2":function(){const{createTextVNode:a,resolveComponent:o,withCtx:t,createVNode:n,Fragment:D,openBlock:v,createElementBlock:b}=N,s=a("top"),r=a("right"),_=a("bottom"),E=a("left"),V=a("\u8C37\u6B4C\u6D4F\u89C8\u5668"),c=a("\u706B\u72D0\u6D4F\u89C8\u5668"),l=a("\u6B27\u670B\u6D4F\u89C8\u5668");function d(u,B){const g=o("hl-radio"),C=o("hl-radio-group"),F=o("hl-tab-pane"),f=o("hl-tabs");return v(),b(D,null,[n(C,{modelValue:u.tabPosition,"onUpdate:modelValue":B[0]||(B[0]=A=>u.tabPosition=A),style:{"margin-bottom":"30px"}},{default:t(()=>[n(g,{label:"top"},{default:t(()=>[s]),_:1}),n(g,{label:"right"},{default:t(()=>[r]),_:1}),n(g,{label:"bottom"},{default:t(()=>[_]),_:1}),n(g,{label:"left"},{default:t(()=>[E]),_:1})]),_:1},8,["modelValue"]),n(f,{"tab-position":u.tabPosition,type:"line",style:{height:"200px"}},{default:t(()=>[n(F,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668"},{default:t(()=>[V]),_:1}),n(F,{label:"\u706B\u72D0\u6D4F\u89C8\u5668"},{default:t(()=>[c]),_:1}),n(F,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:t(()=>[l]),_:1})]),_:1},8,["tab-position"])],64)}const{ref:i}=N;return x({render:d},{setup(){return{tabPosition:i("top")}}})}(),"hl-demo3":function(){const{resolveComponent:a,createVNode:o,withCtx:t,createTextVNode:n,openBlock:D,createBlock:v}=N,b=n(" \u6211\u7684\u884C\u7A0B "),s=n(" \u6211\u7684\u884C\u7A0B "),r=n("\u6D88\u606F\u4E2D\u5FC3"),_=n("\u6B27\u670B\u6D4F\u89C8\u5668");function E(c,l){const d=a("two-application"),i=a("hl-icon"),m=a("hl-tab-pane"),u=a("hl-tabs");return D(),v(u,null,{default:t(()=>[o(m,null,{label:t(()=>[o(i,{class:"sm m-r-xs"},{default:t(()=>[o(d)]),_:1}),b]),default:t(()=>[s]),_:1}),o(m,{label:"\u6D88\u606F\u4E2D\u5FC3"},{default:t(()=>[r]),_:1}),o(m,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:t(()=>[_]),_:1})]),_:1})}return x({render:E},{})}(),"hl-demo4":function(){const{renderList:a,Fragment:o,openBlock:t,createElementBlock:n,toDisplayString:D,createTextVNode:v,resolveComponent:b,withCtx:s,createBlock:r}=N;function _(l,d){const i=b("hl-tab-pane"),m=b("hl-tabs");return t(),r(m,{modelValue:l.editableTabsValue,"onUpdate:modelValue":d[0]||(d[0]=u=>l.editableTabsValue=u),editable:"",onEdit:l.handleTabsEdit},{default:s(()=>[(t(!0),n(o,null,a(l.editableTabs,u=>(t(),r(i,{key:u.name,label:u.title,name:u.name},{default:s(()=>[v(D(u.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onEdit"])}const{reactive:E,toRefs:V}=N;return x({render:_},{setup(){const l=E({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),d=(i,m)=>{if(m==="add"){let u=++l.tabIndex+"";l.editableTabs.push({title:"New Tab",name:u,content:"New Tab content"}),l.editableTabsValue=u}if(m==="remove"){let u=l.editableTabs,B=l.editableTabsValue;B===i&&u.forEach((g,C)=>{if(g.name===i){let F=u[C+1]||u[C-1];F&&(B=F.name)}}),l.editableTabsValue=B,l.editableTabs=u.filter(g=>g.name!==i)}};return y(x({},V(l)),{handleTabsEdit:d})}})}(),"hl-demo5":function(){const{createTextVNode:a,resolveComponent:o,withCtx:t,createVNode:n,createElementVNode:D,renderList:v,Fragment:b,openBlock:s,createElementBlock:r,toDisplayString:_,createBlock:E}=N,V={style:{"margin-bottom":"20px"}},c=a(" add tab ");function l(u,B){const g=o("hl-button"),C=o("hl-tab-pane"),F=o("hl-tabs");return s(),r(b,null,[D("div",V,[n(g,{size:"sm",onClick:B[0]||(B[0]=f=>u.addTab(u.editableTabsValue))},{default:t(()=>[c]),_:1})]),n(F,{modelValue:u.editableTabsValue,"onUpdate:modelValue":B[1]||(B[1]=f=>u.editableTabsValue=f),type:"line",closable:"",onTabRemove:u.removeTab},{default:t(()=>[(s(!0),r(b,null,v(u.editableTabs,f=>(s(),E(C,{key:f.name,label:f.title,name:f.name},{default:t(()=>[a(_(f.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onTabRemove"])],64)}const{reactive:d,toRefs:i}=N;return x({render:l},{setup(){const u=d({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),B=()=>{let C=++u.tabIndex+"";u.editableTabs.push({title:"New Tab",name:C,content:"New Tab content"}),u.editableTabsValue=C},g=C=>{let F=u.editableTabs,f=u.editableTabsValue;f===C&&F.forEach((A,w)=>{if(A.name===C){let z=F[w+1]||F[w-1];z&&(f=z.name)}}),u.editableTabsValue=f,u.editableTabs=F.filter(A=>A.name!==C)};return y(x({},i(u)),{addTab:B,removeTab:g})}})}()}},G={class:"doc-main-content"},J={class:"doc-content"},K=e("h1",null,"Tabs \u6807\u7B7E\u9875",-1),O=e("p",null,"Tabs \u7528\u4E8E\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1),Q=e("div",null,[e("p",null,[h("Tabs \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9009\u9879\u5361\u529F\u80FD\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"value"),h(" \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u3002")])],-1),X=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('second')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),Y=e("h2",{id:"line-yang-shi"},[e("a",{class:"header-anchor",href:"#line-yang-shi"}),h(" Line \u6837\u5F0F")],-1),Z=e("p",null,[h("\u53EA\u9700\u8981\u8BBE\u7F6E "),e("code",null,"type"),h(" \u5C5E\u6027\u4E3A "),e("code",null,"line"),h(" \u5C31\u53EF\u4EE5\u4F7F\u9009\u9879\u5361\u6539\u53D8\u4E3A\u7EBF\u6761\u98CE\u683C\u3002")],-1),tt=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="activeName" type="line" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeName = ref('first')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  },
}
<\/script>
`)],-1),et=e("h2",{id:"wei-zhi"},[e("a",{class:"header-anchor",href:"#wei-zhi"}),h(" \u4F4D\u7F6E")],-1),ut=e("p",null,[h("\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"tab-position"),h(" \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E")],-1),at=e("div",null,[e("p",null,[h("\u6807\u7B7E\u4E00\u5171\u6709\u56DB\u4E2A\u65B9\u5411\u7684\u8BBE\u7F6E "),e("code",null,'tabPosition="left|right|top|bottom"')])],-1),ot=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <hl-radio label="top">top</hl-radio>
    <hl-radio label="right">right</hl-radio>
    <hl-radio label="bottom">bottom</hl-radio>
    <hl-radio label="left">left</hl-radio>
  </hl-radio-group>

  <hl-tabs :tab-position="tabPosition" type="line" style="height: 200px;">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const tabPosition = ref('top')
    return { tabPosition }
  },
}
<\/script>
`)],-1),nt=e("h2",{id:"zi-ding-yi-biao-qian-ye"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian-ye"}),h(" \u81EA\u5B9A\u4E49\u6807\u7B7E\u9875")],-1),lt=e("p",null,[h("\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),e("code",null,"slot"),h(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875\u7684\u5185\u5BB9")],-1),dt=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs>
    <hl-tab-pane>
      <template #label>
        <hl-icon class="sm m-r-xs"><two-application /></hl-icon>
        \u6211\u7684\u884C\u7A0B
      </template>
      \u6211\u7684\u884C\u7A0B
    </hl-tab-pane>
    <hl-tab-pane label="\u6D88\u606F\u4E2D\u5FC3">\u6D88\u606F\u4E2D\u5FC3</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>
`)],-1),st=e("h2",{id:"dong-tai-zeng-jian-biao-qian-ye"},[e("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-qian-ye"}),h(" \u52A8\u6001\u589E\u51CF\u6807\u7B7E\u9875")],-1),it=e("p",null,"\u589E\u51CF\u6807\u7B7E\u9875\u6309\u94AE\u53EA\u80FD\u5728\u9009\u9879\u5361\u6837\u5F0F\u7684\u6807\u7B7E\u9875\u4E0B\u4F7F\u7528",-1),ct=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tabs v-model="editableTabsValue" editable @edit="handleTabsEdit">
    <hl-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex: 2,
    })
    const handleTabsEdit = (targetName, action) => {
      if (action === 'add') {
        let newTabName = ++state.tabIndex + ''
        state.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        })
        state.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        let tabs = state.editableTabs
        let activeName = state.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        state.editableTabsValue = activeName
        state.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }

    return { ...toRefs(state), handleTabsEdit }
  },
}
<\/script>
`)],-1),bt=e("h2",{id:"zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"}),h(" \u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875\u89E6\u53D1\u5668")],-1),rt=e("pre",null,[e("code",{class:"html"},` <template>
  <div style="margin-bottom: 20px;">
    <hl-button size="sm" @click="addTab(editableTabsValue)">
      add tab
    </hl-button>
  </div>
  <hl-tabs
    v-model="editableTabsValue"
    type="line"
    closable
    @tab-remove="removeTab"
  >
    <hl-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex: 2,
    })

    const addTab = () => {
      let newTabName = ++state.tabIndex + ''
      state.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      })
      state.editableTabsValue = newTabName
    }

    const removeTab = targetName => {
      let tabs = state.editableTabs
      let activeName = state.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      state.editableTabsValue = activeName
      state.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
    return { ...toRefs(state), addTab, removeTab }
  },
}
<\/script>
`)],-1),ht=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u9009\u9879\u5361\u7684 name</td><td>string</td><td>\u2014</td><td>\u7B2C\u4E00\u4E2A\u9009\u9879\u5361\u7684 name</td></tr><tr><td>type</td><td>\u98CE\u683C\u7C7B\u578B</td><td>string</td><td>line</td><td>\u663E\u793A\u4E3A\u7EBF\u6761\u6837\u5F0F</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-pane</td><td>\u662F\u5426\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>addable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6807\u7B7E\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tab-position</td><td>\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u963B\u6B62\u5207\u6362\u3002</td><td>Function(activeName, oldActiveName)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-click</td><td>tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B</td></tr><tr><td>tab-remove</td><td>\u70B9\u51FB tab \u79FB\u9664\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name</td></tr><tr><td>tab-add</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>edit</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1</td><td>(targetName, action)</td></tr></tbody></table><h2 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes"></a> Tab Pane Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u9009\u9879\u5361\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D</td><td>string</td><td>\u2014</td><td>\u8BE5\u9009\u9879\u5361\u5728\u9009\u9879\u5361\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u9009\u9879\u5361\u5219\u4E3A&#39;1&#39;</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lazy</td><td>\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',6);function mt(a,o,t,n,D,v){const b=k("hl-demo0"),s=k("demo-block"),r=k("hl-demo1"),_=k("hl-demo2"),E=k("hl-demo3"),V=k("hl-demo4"),c=k("hl-demo5"),l=k("right-nav");return U(),$("section",G,[e("div",J,[K,O,T(s,{fs:""},{source:p(()=>[T(b)]),highlight:p(()=>[X]),default:p(()=>[Q]),_:1}),Y,Z,T(s,{fs:""},{source:p(()=>[T(r)]),highlight:p(()=>[tt]),_:1}),et,ut,T(s,{fs:""},{source:p(()=>[T(_)]),highlight:p(()=>[ot]),default:p(()=>[at]),_:1}),nt,lt,T(s,{fs:""},{source:p(()=>[T(E)]),highlight:p(()=>[dt]),_:1}),st,it,T(s,{fs:""},{source:p(()=>[T(V)]),highlight:p(()=>[ct]),_:1}),bt,T(s,{fs:""},{source:p(()=>[T(c)]),highlight:p(()=>[rt]),_:1}),ht]),T(l)])}var ft=M(W,[["render",mt]]);export{ft as default};
