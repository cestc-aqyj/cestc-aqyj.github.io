var z=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var _=(a,u,d)=>u in a?z(a,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[u]=d,y=(a,u)=>{for(var d in u||(u={}))I.call(u,d)&&_(a,d,u[d]);if(v)for(var d of v(u))X.call(u,d)&&_(a,d,u[d]);return a};import{P as B,L as Y,W as Z,Q as s,Y as C,S as A,a8 as q,aZ as g,a0 as G,aT as H}from"./vue.fe1efe53.js";import{_ as J}from"./index.5d086418.js";import"./hongluan-business.978527d4.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.f25ece14.js";const R={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:a,createVNode:u,withCtx:d,createTextVNode:i,createElementVNode:o,Fragment:f,openBlock:h,createElementBlock:E}=g,p={class:"m-t-md"},V={class:"m-t-md"},N=i(" \u53EF\u9009\u4EFB\u610F\u8282\u70B9\uFF1A"),k={class:"m-t-md"},w=i(" \u591A\u9009\uFF1A"),T={class:"m-t-md"},P=i(" \u7981\u7528\uFF1A"),S={class:"m-t-md"},U=i(" \u53EF\u6E05\u7A7A\uFF1A"),j={class:"m-t-md"},x=i(" \u53EF\u641C\u7D22\uFF1A"),$={class:"m-t-md"},K=i(" \u6298\u53E0\u591A\u9009\u9879\uFF1A");function L(e,t){const b=a("two-point"),m=a("hl-icon"),F=a("hb-tree-selector"),r=a("hl-switch");return h(),E(f,null,[u(F,{modelValue:e.selectedNodes,"onUpdate:modelValue":t[0]||(t[0]=l=>e.selectedNodes=l),clearable:e.clearable,filterable:e.filterable,"collapse-tags":e.collapseTags,disabled:e.disabled,"tree-props":e.treeProps},{prefix:d(()=>[u(m,null,{default:d(()=>[u(b)]),_:1})]),_:1},8,["modelValue","clearable","filterable","collapse-tags","disabled","tree-props"]),o("div",p,[o("div",V,[N,u(r,{modelValue:e.treeProps.checkStrictly,"onUpdate:modelValue":t[1]||(t[1]=l=>e.treeProps.checkStrictly=l),type:"primary"},null,8,["modelValue"])]),o("div",k,[w,u(r,{modelValue:e.treeProps.showCheckbox,"onUpdate:modelValue":t[2]||(t[2]=l=>e.treeProps.showCheckbox=l),type:"primary",onChange:e.changeValues},null,8,["modelValue","onChange"])]),o("div",T,[P,u(r,{modelValue:e.disabled,"onUpdate:modelValue":t[3]||(t[3]=l=>e.disabled=l),type:"primary"},null,8,["modelValue"])]),o("div",S,[U,u(r,{modelValue:e.clearable,"onUpdate:modelValue":t[4]||(t[4]=l=>e.clearable=l),type:"primary"},null,8,["modelValue"])]),o("div",j,[x,u(r,{modelValue:e.filterable,"onUpdate:modelValue":t[5]||(t[5]=l=>e.filterable=l),type:"primary"},null,8,["modelValue"])]),o("div",$,[K,u(r,{modelValue:e.collapseTags,"onUpdate:modelValue":t[6]||(t[6]=l=>e.collapseTags=l),type:"primary"},null,8,["modelValue"])])])],64)}const{defineComponent:M,ref:n,reactive:O,nextTick:D}=g,Q=M({setup(){const e=n("2"),t=(c,W)=>c?W.label.indexOf(c)!==-1:!0,b=n(!0),m=n(!1),F=n(!1),r=n(!1),l=O({nodeKey:"id",checkStrictly:!0,showCheckbox:!1,filterNodeMethod:t,data:[{label:"\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",id:"1",childrens:[{label:"\u4E4C\u9C81\u6728\u9F50\u5E02",id:"2",childrens:[{label:"\u8FBE\u5742\u57CE\u533A",id:"7",childrens:[]},{label:"\u5934\u5C6F\u6CB3\u533A",id:"8",childrens:[]},{label:"\u4E4C\u9C81\u6728\u9F50\u53BF",id:"9",childrens:[{label:"\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547",id:"8-1",childrens:[]},{label:"\u6D4B\u8BD5\u4E61\u95472",id:"8-2",childrens:[]},{label:"\u6D4B\u8BD5\u4E61\u95473",id:"8-3",childrens:[]}]}]},{label:"\u514B\u62C9\u739B\u4F9D\u5E02",id:"3",disabled:!0,childrens:[{label:"\u514B\u62C9\u739B\u4F9D\u533A",id:"10",disabled:!0,childrens:[]},{label:"\u767D\u78B1\u6EE9\u533A",id:"11",disabled:!0,childrens:[]},{label:"\u72EC\u5C71\u5B50\u533A",id:"12",disabled:!0,childrens:[]}]},{label:"\u5410\u9C81\u756A\u5730\u533A",id:"4",childrens:[]},{label:"\u54C8\u5BC6\u5730\u533A",id:"5",childrens:[]},{label:"\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",id:"6",childrens:[]}]}],props:{children:"childrens",label:"label"}});return{changeValues:c=>{c?(e.value="",D(()=>{e.value=["2"]})):(e.value=[],D(()=>{e.value="2"}))},selectedNodes:e,clearable:b,disabled:m,filterable:F,collapseTags:r,treeProps:l}}});return y({render:L},Q)}()}},ee=s("h1",null,"TreeSelector \u6811\u5F62\u9009\u62E9\u5668",-1),ue=s("p",null,"\u4E0B\u62C9\u6811\u5F62\u9009\u62E9\u5668\uFF0C\u652F\u6301\u5355\u9009\u591A\u9009\uFF0C\u7531Selector\u4EE5\u53CATree\u7EC4\u5408\u800C\u6210\u3002",-1),te=s("h2",{id:"ji-chu-yong-fa"},[s("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),G(" \u57FA\u7840\u7528\u6CD5")],-1),le=s("div",null,[s("p",null,"\u8BBE\u7F6E\u7684\u6811\u6240\u6709\u5C5E\u6027\u90FD\u5C06\u76F4\u63A5\u900F\u4F20\u7ED9\u6811\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u8282\u70B9\uFF0C\u662F\u5426\u5168\u90E8\u5C55\u5F00\u7B49\u5C5E\u6027")],-1),de=s("pre",null,[s("code",{class:"html"},` <template>
  <hb-tree-selector
    v-model="selectedNodes"
    :clearable="clearable"
    :filterable="filterable"
    :collapse-tags="collapseTags"
    :disabled="disabled"
    :tree-props="treeProps"
  >
    <template #prefix>
      <hl-icon><two-point /></hl-icon>
    </template>
  </hb-tree-selector>
  <div class="m-t-md">
    <div class="m-t-md">
      \u53EF\u9009\u4EFB\u610F\u8282\u70B9\uFF1A<hl-switch v-model="treeProps.checkStrictly" type="primary" />
    </div>
    <div class="m-t-md">
      \u591A\u9009\uFF1A<hl-switch v-model="treeProps.showCheckbox" type="primary" @change="changeValues" />
    </div>
    <div class="m-t-md">
      \u7981\u7528\uFF1A<hl-switch v-model="disabled" type="primary" />
    </div>
    <div class="m-t-md">
      \u53EF\u6E05\u7A7A\uFF1A<hl-switch v-model="clearable" type="primary" />
    </div>
    <div class="m-t-md">
      \u53EF\u641C\u7D22\uFF1A<hl-switch v-model="filterable" type="primary" />
    </div>
    <div class="m-t-md">
      \u6298\u53E0\u591A\u9009\u9879\uFF1A<hl-switch v-model="collapseTags" type="primary" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, nextTick } from 'vue'
export default defineComponent({
  setup() {
    const selectedNodes = ref('2')
    const filterNode = (value, data) => {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
    const clearable = ref(true)
    const disabled = ref(false)
    const filterable = ref(false)
    const collapseTags = ref(false)
    const treeProps = reactive({
      nodeKey: 'id',
      checkStrictly: true,
      showCheckbox: false,
      filterNodeMethod: filterNode,
      data: [
        {
          label: '\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A',
          id: '1',
          childrens: [
            {
              label: '\u4E4C\u9C81\u6728\u9F50\u5E02',
              id: '2',
              childrens: [
                { label: '\u8FBE\u5742\u57CE\u533A', id: '7', childrens: [] },
                { label: '\u5934\u5C6F\u6CB3\u533A', id: '8', childrens: [] },
                {
                  label: '\u4E4C\u9C81\u6728\u9F50\u53BF',
                  id: '9',
                  childrens: [
                    { label: '\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547', id: '8-1', childrens: [] },
                    { label: '\u6D4B\u8BD5\u4E61\u95472', id: '8-2', childrens: [] },
                    { label: '\u6D4B\u8BD5\u4E61\u95473', id: '8-3', childrens: [] },
                  ],
                },
              ],
            },
            {
              label: '\u514B\u62C9\u739B\u4F9D\u5E02',
              id: '3',
              disabled: true,
              childrens: [
                {
                  label: '\u514B\u62C9\u739B\u4F9D\u533A',
                  id: '10',
                  disabled: true,
                  childrens: [],
                },
                { label: '\u767D\u78B1\u6EE9\u533A', id: '11', disabled: true, childrens: [] },
                { label: '\u72EC\u5C71\u5B50\u533A', id: '12', disabled: true, childrens: [] },
              ],
            },
            { label: '\u5410\u9C81\u756A\u5730\u533A', id: '4', childrens: [] },
            { label: '\u54C8\u5BC6\u5730\u533A', id: '5', childrens: [] },
            { label: '\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE', id: '6', childrens: [] },
          ],
        },
      ],
      props: {
        children: 'childrens',
        label: 'label',
      },
    })

    const changeValues = val => {
      if (val) {
        selectedNodes.value = ''
        nextTick(() => {
          selectedNodes.value = ['2']
        })
      } else {
        selectedNodes.value = []
        nextTick(() => {
          selectedNodes.value = '2'
        })
      }
    }
    return {
      changeValues,
      selectedNodes,
      clearable,
      disabled,
      filterable,
      collapseTags,
      treeProps,
    }
  },
})
<\/script>
`)],-1),ae=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model / model-value</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / object / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u7A7A</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>placeholder</td><td>-</td><td>string</td><td>\u8BF7\u9009\u62E9</td><td>-</td></tr><tr><td>placement</td><td>poppover\u4F4D\u7F6E\uFF0C\u53C2\u89C1Poppover\u7EC4\u4EF6\u5B9A\u4E49</td><td>string</td><td>\u2014</td><td>bottom</td></tr><tr><td>size</td><td>input\u5927\u5C0F\uFF0C\u53C2\u89C1Input\u7EC4\u4EF6\u5B9A\u4E49</td><td>string</td><td>\u2014</td><td>true</td></tr><tr><td>disabled</td><td>\u662F\u5426\u542F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapse-tags</td><td>\u662F\u5426\u6298\u53E0\u591A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tree-props</td><td>\u4E0B\u62C9\u6811\u5C5E\u6027\uFF0C\u53C2\u89C1Tree\u7EC4\u4EF6\u5B9A\u4E49\u3002nodeKey\u4E3A\u5FC5\u586B\u9879</td><td>object</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>\u81EA\u5B9A\u4E49\u591A\u9009tag\u663E\u793A\uFF0C\u53C2\u6570\u4E3A{ tag }</td></tr><tr><td>tree-node</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data }</td></tr><tr><td>prefix</td><td>\u81EA\u5B9A\u4E49\u524D\u7F00</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table>',6);function se(a,u,d,i,o,f){const h=B("hb-demo0"),E=B("demo-block"),p=B("right-nav");return Y(),Z(q,null,[s("section",null,[ee,ue,te,C(E,{fs:""},{source:A(()=>[C(h)]),highlight:A(()=>[de]),default:A(()=>[le]),_:1}),ae]),C(p)],64)}var pe=J(R,[["render",se]]);export{pe as default};
