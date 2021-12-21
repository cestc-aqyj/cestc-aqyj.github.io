var S=Object.defineProperty;var j=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var V=(l,t,d)=>t in l?S(l,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[t]=d,N=(l,t)=>{for(var d in t||(t={}))L.call(t,d)&&V(l,d,t[d]);if(j)for(var d of j(t))$.call(t,d)&&V(l,d,t[d]);return l};import{H as v,o as H,c as M,g as u,T as h,M as c,Y as q,aB as C,_ as s,aA as I}from"./vue.d542b1f8.js";import{_ as Y}from"./index.b2c1f405.js";import"./hongluan.3c5b9861.js";import"./highlight.e2508551.js";import"./hongluan-icons.e8265415.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:l,openBlock:t,createBlock:d}=C;function r(e,n){const a=l("hl-tree");return t(),d(a,{data:e.data,props:e.defaultProps,onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])}const{defineComponent:B,ref:E}=C,F=B({setup(){const e=E([{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]),n=E({children:"children",label:"label"});return{data:e,defaultProps:n,handleNodeClick:i=>{console.log(i)}}}});return N({render:r},F)}(),"hl-demo1":function(){const{resolveComponent:l,openBlock:t,createBlock:d}=C;function r(e,n){const a=l("hl-tree");return t(),d(a,{props:e.props,load:e.loadNode,lazy:"","show-checkbox":"",onCheckChange:e.handleCheckChange},null,8,["props","load","onCheckChange"])}const{defineComponent:B,ref:E}=C,F=B({setup(){const e=E({label:"name",children:"zones"}),n=E(1);return{props:e,count:n,handleCheckChange:(A,D,p)=>{console.log(A,D,p)},handleNodeClick:A=>{console.log(A)},loadNode:(A,D)=>{if(A.level===0)return D([{name:"region1"},{name:"region2"}]);if(A.level>3)return D([]);var p;A.data.name==="region1"?p=!0:A.data.name==="region2"?p=!1:p=Math.random()>.5,setTimeout(()=>{var b;p?b=[{name:"zone"+n.value++},{name:"zone"+n.value++}]:b=[],D(b)},500)}}}});return N({render:r},F)}(),"hl-demo2":function(){const{resolveComponent:l,openBlock:t,createBlock:d}=C;function r(e,n){const a=l("hl-tree");return t(),d(a,{props:e.props,load:e.loadNode,lazy:"","show-checkbox":""},null,8,["props","load"])}const{defineComponent:B,ref:E}=C,F=B({setup(){return{props:E({label:"name",children:"zones",isLeaf:"leaf"}),loadNode:(a,i)=>{if(a.level===0)return i([{name:"region"}]);if(a.level>1)return i([]);setTimeout(()=>{i([{name:"leaf",leaf:!0},{name:"zone"}])},2e3)}}}});return N({render:r},F)}(),"hl-demo3":function(){const{resolveComponent:l,openBlock:t,createBlock:d}=C;function r(e,n){const a=l("hl-tree");return t(),d(a,{data:e.data,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:e.defaultProps},null,8,["data","props"])}const{defineComponent:B,ref:E}=C,F=B({setup(){const e=E([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),n=E({children:"children",label:"label"});return{data:e,defaultProps:n}}});return N({render:r},F)}(),"hl-demo4":function(){const{resolveComponent:l,openBlock:t,createBlock:d}=C;function r(e,n){const a=l("hl-tree");return t(),d(a,{data:e.data,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5]},null,8,["data"])}const{defineComponent:B,ref:E}=C,F=B({setup(){const e=E([{id:1,label:"\u4E00\u7EA7 2",children:[{id:3,label:"\u4E8C\u7EA7 2-1",children:[{id:4,label:"\u4E09\u7EA7 3-1-1"},{id:5,label:"\u4E09\u7EA7 3-1-2",disabled:!0}]},{id:2,label:"\u4E8C\u7EA7 2-2",disabled:!0,children:[{id:6,label:"\u4E09\u7EA7 3-2-1"},{id:7,label:"\u4E09\u7EA7 3-2-2",disabled:!0}]}]}]),n=E({children:"children",label:"label"});return{data:e,defaultProps:n}}});return N({render:r},F)}(),"hl-demo5":function(){const{resolveComponent:l,createVNode:t,createTextVNode:d,withCtx:r,createElementVNode:B,Fragment:E,openBlock:F,createElementBlock:e}=C,n={class:"buttons"},a=d("\u901A\u8FC7 node \u83B7\u53D6"),i=d("\u901A\u8FC7 key \u83B7\u53D6"),k=d("\u901A\u8FC7 node \u8BBE\u7F6E"),A=d("\u901A\u8FC7 key \u8BBE\u7F6E"),D=d("\u6E05\u7A7A");function p(o,_){const f=l("hl-tree"),y=l("hl-button");return F(),e(E,null,[t(f,{ref:"tree",data:o.data,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:o.defaultProps},null,8,["data","props"]),B("div",n,[t(y,{onClick:o.getCheckedNodes},{default:r(()=>[a]),_:1},8,["onClick"]),t(y,{onClick:o.getCheckedKeys},{default:r(()=>[i]),_:1},8,["onClick"]),t(y,{onClick:o.setCheckedNodes},{default:r(()=>[k]),_:1},8,["onClick"]),t(y,{onClick:o.setCheckedKeys},{default:r(()=>[A]),_:1},8,["onClick"]),t(y,{onClick:o.resetChecked},{default:r(()=>[D]),_:1},8,["onClick"])])],64)}const{defineComponent:b,ref:x}=C,m=b({setup(){const o=x([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),_=x({children:"children",label:"label"}),f=x(null);return{tree:f,data:o,defaultProps:_,getCheckedNodes:()=>{console.log(f.value.getCheckedNodes())},getCheckedKeys:()=>{console.log(f.value.getCheckedKeys())},setCheckedNodes:()=>{f.value.setCheckedNodes([{id:5,label:"\u4E8C\u7EA7 2-1"},{id:9,label:"\u4E09\u7EA7 1-1-1"}])},setCheckedKeys:()=>{f.value.setCheckedKeys([3])},resetChecked:()=>{f.value.setCheckedKeys([])}}}});return N({render:p},m)}(),"hl-demo6":function(){const{createElementVNode:l,resolveComponent:t,createVNode:d,withCtx:r,toDisplayString:B,openBlock:E,createElementBlock:F}=C,e={class:"custom-tree-container"},n={class:"block"},a=l("p",null,"\u4F7F\u7528 render-content",-1),i={class:"block"},k=l("p",null,"\u4F7F\u7528 slot",-1),A=["onClick"],D=["onClick"];function p(o,_){const f=t("hl-tree"),y=t("two-folder"),T=t("hl-icon"),g=t("hl-group");return E(),F("div",e,[l("div",n,[a,d(f,{data:o.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":o.renderContent},null,8,["data","render-content"])]),l("div",i,[k,d(f,{data:o.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:r(({node:w,data:z})=>[d(g,{full:"",gap:"var(--xs)",align:"between"},{default:r(()=>[d(T,{size:"xs",class:"static"},{default:r(()=>[d(y)]),_:1}),l("span",null,B(w.label),1),d(g,{gap:"var(--md)",class:"static"},{default:r(()=>[l("a",{onClick:P=>o.append(z)}," Append ",8,A),l("a",{onClick:P=>o.remove(w,z)}," Delete ",8,D)]),_:2},1024)]),_:2},1024)]),_:1},8,["data"])])])}const{defineComponent:b,ref:x}=C,m=b({setup(){let o=1e3;const _=x([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),f=g=>{const w={id:o++,label:"testtest",children:[]};g.children||(g.children=[]),g.children.push(w)},y=(g,w)=>{const z=g.parent,P=z.data.children||z.data,O=P.findIndex(K=>K.id===K.id);P.splice(O,1)};return{data:_,append:f,remove:y,renderContent:(g,{node:w,data:z,store:P})=>g("span",{class:"custom-tree-node"},g("span",null,w.label),g("span",null,g("a",{onClick:()=>f(z)},"Append "),g("a",{onClick:()=>y(w)},"Delete")))}}});return N({render:p},m)}(),"hl-demo7":function(){const{resolveComponent:l,createVNode:t,Fragment:d,openBlock:r,createElementBlock:B}=C;function E(i,k){const A=l("hl-input"),D=l("hl-tree");return r(),B(d,null,[t(A,{modelValue:i.filterText,"onUpdate:modelValue":k[0]||(k[0]=p=>i.filterText=p),placeholder:"\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u8FC7\u6EE4"},null,8,["modelValue"]),t(D,{ref:"tree",class:"filter-tree",data:i.data,props:i.defaultProps,"default-expand-all":"","filter-node-method":i.filterNode},null,8,["data","props","filter-node-method"])],64)}const{defineComponent:F,ref:e,watch:n}=C,a=F({setup(){const i=e(""),k=e(null),A=e([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2"}]}]),D=e({children:"children",label:"label"}),p=(b,x)=>b?x.label.indexOf(b)!==-1:!0;return n(i,b=>{k.value.filter(b)}),{data:A,tree:k,defaultProps:D,filterText:i,filterNode:p}}});return N({render:E},a)}(),"hl-demo8":function(){const{resolveComponent:l,openBlock:t,createBlock:d}=C;function r(e,n){const a=l("hl-tree");return t(),d(a,{data:e.data,props:e.defaultProps,accordion:"",onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])}const{defineComponent:B,ref:E}=C,F=B({setup(){const e=E([{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]),n=E({children:"children",label:"label"});return{data:e,defaultProps:n,handleNodeClick:i=>{console.log(i)}}}});return N({render:r},F)}(),"hl-demo9":function(){const{resolveComponent:l,openBlock:t,createBlock:d}=C;function r(e,n){const a=l("hl-tree");return t(),d(a,{data:e.data,"node-key":"id","default-expand-all":"",draggable:"","allow-drop":e.allowDrop,"allow-drag":e.allowDrag,onNodeDragStart:e.handleDragStart,onNodeDragEnter:e.handleDragEnter,onNodeDragLeave:e.handleDragLeave,onNodeDragOver:e.handleDragOver,onNodeDragEnd:e.handleDragEnd,onNodeDrop:e.handleDrop},null,8,["data","allow-drop","allow-drag","onNodeDragStart","onNodeDragEnter","onNodeDragLeave","onNodeDragOver","onNodeDragEnd","onNodeDrop"])}const{defineComponent:B,ref:E}=C,F=B({setup(){const e=E([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:9,label:"\u4E09\u7EA7 1-1-1"},{id:10,label:"\u4E09\u7EA7 1-1-2"}]}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:5,label:"\u4E8C\u7EA7 2-1"},{id:6,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:7,label:"\u4E8C\u7EA7 3-1"},{id:8,label:"\u4E8C\u7EA7 3-2",children:[{id:11,label:"\u4E09\u7EA7 3-2-1"},{id:12,label:"\u4E09\u7EA7 3-2-2"},{id:13,label:"\u4E09\u7EA7 3-2-3"}]}]}]),n=E({children:"children",label:"label"});return{data:e,defaultProps:n,handleDragStart:(m,o)=>{console.log("drag start",m)},handleDragEnter:(m,o,_)=>{console.log("tree drag enter: ",o.label)},handleDragLeave:(m,o,_)=>{console.log("tree drag leave: ",o.label)},handleDragOver:(m,o,_)=>{console.log("tree drag over: ",o.label)},handleDragEnd:(m,o,_,f)=>{console.log("tree drag end: ",o&&o.label,_)},handleDrop:(m,o,_,f)=>{console.log("tree drop: ",o.label,_)},allowDrop:(m,o,_)=>o.data.label==="\u4E8C\u7EA7 3-1"?_!=="inner":!0,allowDrag:m=>m.data.label.indexOf("\u4E09\u7EA7 3-2-2")===-1}}});return N({render:r},F)}()}},U=u("h1",null,"Tree \u6811\u5F62\u63A7\u4EF6",-1),W=u("p",null,"\u7528\u6E05\u6670\u7684\u5C42\u7EA7\u7ED3\u6784\u5C55\u793A\u4FE1\u606F\uFF0C\u53EF\u5C55\u5F00\u6216\u6298\u53E0\u3002",-1),X=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        label: '\u4E00\u7EA7 1',
        children: [
          {
            label: '\u4E8C\u7EA7 1-1',
            children: [
              {
                label: '\u4E09\u7EA7 1-1-1',
              },
            ],
          },
        ],
      },
      {
        label: '\u4E00\u7EA7 2',
        children: [
          {
            label: '\u4E8C\u7EA7 2-1',
            children: [
              {
                label: '\u4E09\u7EA7 2-1-1',
              },
            ],
          },
          {
            label: '\u4E8C\u7EA7 2-2',
            children: [
              {
                label: '\u4E09\u7EA7 2-2-1',
              },
            ],
          },
        ],
      },
      {
        label: '\u4E00\u7EA7 3',
        children: [
          {
            label: '\u4E8C\u7EA7 3-1',
            children: [
              {
                label: '\u4E09\u7EA7 3-1-1',
              },
            ],
          },
          {
            label: '\u4E8C\u7EA7 3-2',
            children: [
              {
                label: '\u4E09\u7EA7 3-2-1',
              },
            ],
          },
        ],
      },
    ])
    const defaultProps = ref({
      children: 'children',
      label: 'label',
    })
    const handleNodeClick = data => {
      console.log(data)
    }
    return {
      data,
      defaultProps,
      handleNodeClick,
    }
  },
})
<\/script>
`)],-1),G=u("h2",{id:"ke-xuan-ze"},[u("a",{class:"header-anchor",href:"#ke-xuan-ze"}),s(" \u53EF\u9009\u62E9")],-1),Q=u("p",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86\u52A8\u6001\u52A0\u8F7D\u8282\u70B9\u6570\u636E\u7684\u65B9\u6CD5\u3002",-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const props = ref({
      label: 'name',
      children: 'zones',
    })
    const count = ref(1)

    const handleCheckChange = (data, checked, indeterminate) => {
      console.log(data, checked, indeterminate)
    }
    const handleNodeClick = data => {
      console.log(data)
    }
    const loadNode = (node, resolve) => {
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [
            {
              name: 'zone' + count.value++,
            },
            {
              name: 'zone' + count.value++,
            },
          ]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    }
    return {
      props,
      count,
      handleCheckChange,
      handleNodeClick,
      loadNode,
    }
  },
})
<\/script>
`)],-1),Z=u("h2",{id:"lan-jia-zai-zi-ding-yi-ye-zi-jie-dian"},[u("a",{class:"header-anchor",href:"#lan-jia-zai-zi-ding-yi-ye-zi-jie-dian"}),s(" \u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u53F6\u5B50\u8282\u70B9")],-1),uu=u("div",null,[u("p",null,"\u7531\u4E8E\u5728\u70B9\u51FB\u8282\u70B9\u65F6\u624D\u8FDB\u884C\u8BE5\u5C42\u6570\u636E\u7684\u83B7\u53D6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B Tree \u65E0\u6CD5\u9884\u77E5\u67D0\u4E2A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u6240\u4EE5\u4F1A\u4E3A\u6BCF\u4E2A\u8282\u70B9\u6DFB\u52A0\u4E00\u4E2A\u4E0B\u62C9\u6309\u94AE\uFF0C\u5982\u679C\u8282\u70B9\u6CA1\u6709\u4E0B\u5C42\u6570\u636E\uFF0C\u5219\u70B9\u51FB\u540E\u4E0B\u62C9\u6309\u94AE\u4F1A\u6D88\u5931\u3002\u540C\u65F6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u63D0\u524D\u544A\u77E5 Tree \u67D0\u4E2A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4ECE\u800C\u907F\u514D\u5728\u53F6\u5B50\u8282\u70B9\u524D\u6E32\u67D3\u4E0B\u62C9\u6309\u94AE\u3002")],-1),eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree :props="props" :load="loadNode" lazy show-checkbox />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const props = ref({
      label: 'name',
      children: 'zones',
      isLeaf: 'leaf',
    })
    const loadNode = (node, resolve) => {
      if (node.level === 0) {
        return resolve([{ name: 'region' }])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [
          {
            name: 'leaf',
            leaf: true,
          },
          {
            name: 'zone',
          },
        ]

        resolve(data)
      }, 2000)
    }
    return {
      props,
      loadNode,
    }
  },
})
<\/script>
`)],-1),tu=u("h2",{id:"mo-ren-zhan-kai-he-mo-ren-xuan-zhong"},[u("a",{class:"header-anchor",href:"#mo-ren-zhan-kai-he-mo-ren-xuan-zhong"}),s(" \u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D")],-1),du=u("p",null,"\u53EF\u5C06 Tree \u7684\u67D0\u4E9B\u8282\u70B9\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u5C55\u5F00\u6216\u9ED8\u8BA4\u9009\u4E2D",-1),lu=u("div",null,[u("p",null,[s("\u5206\u522B\u901A\u8FC7"),u("code",null,"default-expanded-keys"),s("\u548C"),u("code",null,"default-checked-keys"),s("\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u5FC5\u987B\u8BBE\u7F6E"),u("code",null,"node-key"),s("\uFF0C\u5176\u503C\u4E3A\u8282\u70B9\u6570\u636E\u4E2D\u7684\u4E00\u4E2A\u5B57\u6BB5\u540D\uFF0C\u8BE5\u5B57\u6BB5\u5728\u6574\u68F5\u6811\u4E2D\u662F\u552F\u4E00\u7684\u3002")])],-1),ou=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree
    :data="data"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 1,
        label: '\u4E00\u7EA7 1',
        children: [
          {
            id: 4,
            label: '\u4E8C\u7EA7 1-1',
            children: [
              {
                id: 9,
                label: '\u4E09\u7EA7 1-1-1',
              },
              {
                id: 10,
                label: '\u4E09\u7EA7 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '\u4E00\u7EA7 2',
        children: [
          {
            id: 5,
            label: '\u4E8C\u7EA7 2-1',
          },
          {
            id: 6,
            label: '\u4E8C\u7EA7 2-2',
          },
        ],
      },
      {
        id: 3,
        label: '\u4E00\u7EA7 3',
        children: [
          {
            id: 7,
            label: '\u4E8C\u7EA7 3-1',
          },
          {
            id: 8,
            label: '\u4E8C\u7EA7 3-2',
          },
        ],
      },
    ])
    const defaultProps = ref({
      children: 'children',
      label: 'label',
    })
    return {
      data,
      defaultProps,
    }
  },
})
<\/script>
`)],-1),nu=u("h2",{id:"jin-yong-zhuang-tai"},[u("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),s(" \u7981\u7528\u72B6\u6001")],-1),au=u("p",null,"\u53EF\u5C06 Tree \u7684\u67D0\u4E9B\u8282\u70B9\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001",-1),ru=u("div",null,[u("p",null,[s("\u901A\u8FC7"),u("code",null,"disabled"),s("\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\u3002")])],-1),Eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 1,
        label: '\u4E00\u7EA7 2',
        children: [
          {
            id: 3,
            label: '\u4E8C\u7EA7 2-1',
            children: [
              {
                id: 4,
                label: '\u4E09\u7EA7 3-1-1',
              },
              {
                id: 5,
                label: '\u4E09\u7EA7 3-1-2',
                disabled: true,
              },
            ],
          },
          {
            id: 2,
            label: '\u4E8C\u7EA7 2-2',
            disabled: true,
            children: [
              {
                id: 6,
                label: '\u4E09\u7EA7 3-2-1',
              },
              {
                id: 7,
                label: '\u4E09\u7EA7 3-2-2',
                disabled: true,
              },
            ],
          },
        ],
      },
    ])
    const defaultProps = ref({
      children: 'children',
      label: 'label',
    })
    return {
      data,
      defaultProps,
    }
  },
})
<\/script>
`)],-1),cu=u("h2",{id:"shu-jie-dian-de-xuan-ze"},[u("a",{class:"header-anchor",href:"#shu-jie-dian-de-xuan-ze"}),s(" \u6811\u8282\u70B9\u7684\u9009\u62E9")],-1),su=u("div",null,[u("p",null,[s("\u672C\u4F8B\u5C55\u793A\u5982\u4F55\u83B7\u53D6\u548C\u8BBE\u7F6E\u9009\u4E2D\u8282\u70B9\u3002\u83B7\u53D6\u548C\u8BBE\u7F6E\u5404\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7 node \u6216\u901A\u8FC7 key\u3002\u5982\u679C\u9700\u8981\u901A\u8FC7 key \u6765\u83B7\u53D6\u6216\u8BBE\u7F6E\uFF0C\u5219\u5FC5\u987B\u8BBE\u7F6E"),u("code",null,"node-key"),s("\u3002")])],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree
    ref="tree"
    :data="data"
    show-checkbox
    default-expand-all
    node-key="id"
    highlight-current
    :props="defaultProps"
  />

  <div class="buttons">
    <hl-button @click="getCheckedNodes">\u901A\u8FC7 node \u83B7\u53D6</hl-button>
    <hl-button @click="getCheckedKeys">\u901A\u8FC7 key \u83B7\u53D6</hl-button>
    <hl-button @click="setCheckedNodes">\u901A\u8FC7 node \u8BBE\u7F6E</hl-button>
    <hl-button @click="setCheckedKeys">\u901A\u8FC7 key \u8BBE\u7F6E</hl-button>
    <hl-button @click="resetChecked">\u6E05\u7A7A</hl-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 1,
        label: '\u4E00\u7EA7 1',
        children: [
          {
            id: 4,
            label: '\u4E8C\u7EA7 1-1',
            children: [
              {
                id: 9,
                label: '\u4E09\u7EA7 1-1-1',
              },
              {
                id: 10,
                label: '\u4E09\u7EA7 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '\u4E00\u7EA7 2',
        children: [
          {
            id: 5,
            label: '\u4E8C\u7EA7 2-1',
          },
          {
            id: 6,
            label: '\u4E8C\u7EA7 2-2',
          },
        ],
      },
      {
        id: 3,
        label: '\u4E00\u7EA7 3',
        children: [
          {
            id: 7,
            label: '\u4E8C\u7EA7 3-1',
          },
          {
            id: 8,
            label: '\u4E8C\u7EA7 3-2',
          },
        ],
      },
    ])
    const defaultProps = ref({
      children: 'children',
      label: 'label',
    })
    const tree = ref(null)

    const getCheckedNodes = () => {
      console.log(tree.value.getCheckedNodes())
    }
    const getCheckedKeys = () => {
      console.log(tree.value.getCheckedKeys())
    }
    const setCheckedNodes = () => {
      tree.value.setCheckedNodes([
        {
          id: 5,
          label: '\u4E8C\u7EA7 2-1',
        },
        {
          id: 9,
          label: '\u4E09\u7EA7 1-1-1',
        },
      ])
    }
    const setCheckedKeys = () => {
      tree.value.setCheckedKeys([3])
    }
    const resetChecked = () => {
      tree.value.setCheckedKeys([])
    }
    return {
      tree,
      data,
      defaultProps,
      getCheckedNodes,
      getCheckedKeys,
      setCheckedNodes,
      setCheckedKeys,
      resetChecked,
    }
  },
})
<\/script>
`)],-1),Fu=u("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),s(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),hu=u("p",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9",-1),Bu=u("div",null,[u("p",null,[s("\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u6CD5\u8FDB\u884C\u6811\u8282\u70B9\u5185\u5BB9\u7684\u81EA\u5B9A\u4E49\uFF1A"),u("code",null,"render-content"),s("\u548C scoped slot\u3002\u4F7F\u7528"),u("code",null,"render-content"),s("\u6307\u5B9A\u6E32\u67D3\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u9700\u8981\u7684\u8282\u70B9\u533A\u5185\u5BB9\u5373\u53EF\u3002\u6E32\u67D3\u51FD\u6570\u7684\u7528\u6CD5\u8BF7\u53C2\u8003 Vue \u6587\u6863\u3002\u4F7F\u7528 scoped slot \u4F1A\u4F20\u5165\u4E24\u4E2A\u53C2\u6570"),u("code",null,"node"),s("\u548C"),u("code",null,"data"),s("\uFF0C\u5206\u522B\u8868\u793A\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61\u548C\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\u3002\u6CE8\u610F\uFF1A\u7531\u4E8E jsfiddle \u4E0D\u652F\u6301 JSX \u8BED\u6CD5\uFF0C\u6240\u4EE5"),u("code",null,"render-content"),s("\u793A\u4F8B\u5728 jsfiddle \u4E2D\u65E0\u6CD5\u8FD0\u884C\u3002\u4F46\u662F\u5728\u5B9E\u9645\u7684\u9879\u76EE\u4E2D\uFF0C\u53EA\u8981\u6B63\u786E\u5730\u914D\u7F6E\u4E86\u76F8\u5173\u4F9D\u8D56\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u3002")])],-1),Cu=u("pre",null,[u("code",{class:"html"},` <template>
  <div class="custom-tree-container">
    <div class="block">
      <p>\u4F7F\u7528 render-content</p>
      <hl-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
      />
    </div>
    <div class="block">
      <p>\u4F7F\u7528 slot</p>
      <hl-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
        <template #default="{ node, data }">
          <hl-group full gap="var(--xs)" align="between">
            <hl-icon size="xs" class="static">
              <two-folder />
            </hl-icon>
            <span>{{ node.label }}</span>
            <hl-group gap="var(--md)" class="static">
              <a @click="append(data)">
                Append
              </a>
              <a @click="remove(node, data)">
                Delete
              </a>
            </hl-group>
          </hl-group>
        </template>
      </hl-tree>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    let id = 1000
    const data = ref([
      {
        id: 1,
        label: '\u4E00\u7EA7 1',
        children: [
          {
            id: 4,
            label: '\u4E8C\u7EA7 1-1',
            children: [
              {
                id: 9,
                label: '\u4E09\u7EA7 1-1-1',
              },
              {
                id: 10,
                label: '\u4E09\u7EA7 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '\u4E00\u7EA7 2',
        children: [
          {
            id: 5,
            label: '\u4E8C\u7EA7 2-1',
          },
          {
            id: 6,
            label: '\u4E8C\u7EA7 2-2',
          },
        ],
      },
      {
        id: 3,
        label: '\u4E00\u7EA7 3',
        children: [
          {
            id: 7,
            label: '\u4E8C\u7EA7 3-1',
          },
          {
            id: 8,
            label: '\u4E8C\u7EA7 3-2',
          },
        ],
      },
    ])

    const append = d => {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!d.children) {
        d.children = []
      }
      d.children.push(newChild)
    }
    const remove = (node, d) => {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === d.id)
      children.splice(index, 1)
    }
    const renderContent = (h, { node, data, store }) => {
      return h(
        'span',
        {
          class: 'custom-tree-node',
        },
        h('span', null, node.label),
        h(
          'span',
          null,
          h(
            'a',
            {
              onClick: () => append(data),
            },
            'Append ',
          ),
          h(
            'a',
            {
              onClick: () => remove(node, data),
            },
            'Delete',
          ),
        ),
      )
    }
    return {
      data,
      append,
      remove,
      renderContent,
    }
  },
})
<\/script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
`)],-1),Au=u("h2",{id:"jie-dian-guo-lu"},[u("a",{class:"header-anchor",href:"#jie-dian-guo-lu"}),s(" \u8282\u70B9\u8FC7\u6EE4")],-1),pu=u("p",null,"\u901A\u8FC7\u5173\u952E\u5B57\u8FC7\u6EE4\u6811\u8282\u70B9",-1),Du=u("div",null,[u("p",null,[s("\u5728\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u8C03\u7528 Tree \u5B9E\u4F8B\u7684"),u("code",null,"filter"),s("\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u5173\u952E\u5B57\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6E"),u("code",null,"filter-node-method"),s("\uFF0C\u503C\u4E3A\u8FC7\u6EE4\u51FD\u6570\u3002")])],-1),fu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input v-model="filterText" placeholder="\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u8FC7\u6EE4" />

  <hl-tree
    ref="tree"
    class="filter-tree"
    :data="data"
    :props="defaultProps"
    default-expand-all
    :filter-node-method="filterNode"
  />
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  setup() {
    const filterText = ref('')
    const tree = ref(null)
    const data = ref([
      {
        id: 1,
        label: '\u4E00\u7EA7 1',
        children: [
          {
            id: 4,
            label: '\u4E8C\u7EA7 1-1',
            children: [
              {
                id: 9,
                label: '\u4E09\u7EA7 1-1-1',
              },
              {
                id: 10,
                label: '\u4E09\u7EA7 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '\u4E00\u7EA7 2',
        children: [
          {
            id: 5,
            label: '\u4E8C\u7EA7 2-1',
          },
          {
            id: 6,
            label: '\u4E8C\u7EA7 2-2',
          },
        ],
      },
      {
        id: 3,
        label: '\u4E00\u7EA7 3',
        children: [
          {
            id: 7,
            label: '\u4E8C\u7EA7 3-1',
          },
          {
            id: 8,
            label: '\u4E8C\u7EA7 3-2',
          },
        ],
      },
    ])
    const defaultProps = ref({
      children: 'children',
      label: 'label',
    })

    const filterNode = (value, data) => {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }

    watch(filterText, val => {
      tree.value.filter(val)
    })

    return {
      data,
      tree,
      defaultProps,
      filterText,
      filterNode,
    }
  },
})
<\/script>
`)],-1),bu=u("h2",{id:"shou-feng-qin-mo-shi"},[u("a",{class:"header-anchor",href:"#shou-feng-qin-mo-shi"}),s(" \u624B\u98CE\u7434\u6A21\u5F0F")],-1),mu=u("p",null,"\u5BF9\u4E8E\u540C\u4E00\u7EA7\u7684\u8282\u70B9\uFF0C\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A",-1),gu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        label: '\u4E00\u7EA7 1',
        children: [
          {
            label: '\u4E8C\u7EA7 1-1',
            children: [
              {
                label: '\u4E09\u7EA7 1-1-1',
              },
            ],
          },
        ],
      },
      {
        label: '\u4E00\u7EA7 2',
        children: [
          {
            label: '\u4E8C\u7EA7 2-1',
            children: [
              {
                label: '\u4E09\u7EA7 2-1-1',
              },
            ],
          },
          {
            label: '\u4E8C\u7EA7 2-2',
            children: [
              {
                label: '\u4E09\u7EA7 2-2-1',
              },
            ],
          },
        ],
      },
      {
        label: '\u4E00\u7EA7 3',
        children: [
          {
            label: '\u4E8C\u7EA7 3-1',
            children: [
              {
                label: '\u4E09\u7EA7 3-1-1',
              },
            ],
          },
          {
            label: '\u4E8C\u7EA7 3-2',
            children: [
              {
                label: '\u4E09\u7EA7 3-2-1',
              },
            ],
          },
        ],
      },
    ])
    const defaultProps = ref({
      children: 'children',
      label: 'label',
    })

    const handleNodeClick = data => {
      console.log(data)
    }
    return {
      data,
      defaultProps,
      handleNodeClick,
    }
  },
})
<\/script>
`)],-1),ku=u("h2",{id:"ke-tuo-zhuai-jie-dian"},[u("a",{class:"header-anchor",href:"#ke-tuo-zhuai-jie-dian"}),s(" \u53EF\u62D6\u62FD\u8282\u70B9")],-1),_u=u("p",null,"\u901A\u8FC7 draggable \u5C5E\u6027\u53EF\u8BA9\u8282\u70B9\u53D8\u4E3A\u53EF\u62D6\u62FD\u3002",-1),vu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree
    :data="data"
    node-key="id"
    default-expand-all
    draggable
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    @node-drag-start="handleDragStart"
    @node-drag-enter="handleDragEnter"
    @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver"
    @node-drag-end="handleDragEnd"
    @node-drop="handleDrop"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        id: 1,
        label: '\u4E00\u7EA7 1',
        children: [
          {
            id: 4,
            label: '\u4E8C\u7EA7 1-1',
            children: [
              {
                id: 9,
                label: '\u4E09\u7EA7 1-1-1',
              },
              {
                id: 10,
                label: '\u4E09\u7EA7 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '\u4E00\u7EA7 2',
        children: [
          {
            id: 5,
            label: '\u4E8C\u7EA7 2-1',
          },
          {
            id: 6,
            label: '\u4E8C\u7EA7 2-2',
          },
        ],
      },
      {
        id: 3,
        label: '\u4E00\u7EA7 3',
        children: [
          {
            id: 7,
            label: '\u4E8C\u7EA7 3-1',
          },
          {
            id: 8,
            label: '\u4E8C\u7EA7 3-2',
            children: [
              {
                id: 11,
                label: '\u4E09\u7EA7 3-2-1',
              },
              {
                id: 12,
                label: '\u4E09\u7EA7 3-2-2',
              },
              {
                id: 13,
                label: '\u4E09\u7EA7 3-2-3',
              },
            ],
          },
        ],
      },
    ])
    const defaultProps = ref({
      children: 'children',
      label: 'label',
    })

    const handleDragStart = (node, ev) => {
      console.log('drag start', node)
    }
    const handleDragEnter = (draggingNode, dropNode, ev) => {
      console.log('tree drag enter: ', dropNode.label)
    }
    const handleDragLeave = (draggingNode, dropNode, ev) => {
      console.log('tree drag leave: ', dropNode.label)
    }
    const handleDragOver = (draggingNode, dropNode, ev) => {
      console.log('tree drag over: ', dropNode.label)
    }
    const handleDragEnd = (draggingNode, dropNode, dropType, ev) => {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    }
    const handleDrop = (draggingNode, dropNode, dropType, ev) => {
      console.log('tree drop: ', dropNode.label, dropType)
    }
    const allowDrop = (draggingNode, dropNode, type) => {
      if (dropNode.data.label === '\u4E8C\u7EA7 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    }
    const allowDrag = draggingNode => {
      return draggingNode.data.label.indexOf('\u4E09\u7EA7 3-2-2') === -1
    }
    return {
      data,
      defaultProps,
      handleDragStart,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDragEnd,
      handleDrop,
      allowDrop,
      allowDrag,
    }
  },
})
<\/script>
`)],-1),yu=I('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td>String</td><td>\u2014</td><td>\u2014</td></tr><tr><td>node-key</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>String</td><td>\u2014</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>render-after-expand</td><td>\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u6811\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53 lazy \u5C5E\u6027\u4E3A true \u65F6\u751F\u6548</td><td>function(node, resolve)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>render-content</td><td>\u6811\u8282\u70B9\u7684\u5185\u5BB9\u533A\u7684\u6E32\u67D3 Function</td><td>Function(h, { node, data, store })</td><td>\u2014</td><td>\u2014</td></tr><tr><td>highlight-current</td><td>\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u662F false\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>check-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>check-strictly</td><td>\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>current-node-key</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</td><td>string, number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filter-node-method</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td>Function(value, data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indent</td><td>\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td>\u2014</td><td>16</td></tr><tr><td>icon-class</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>\u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\uFF0C\u9700\u4E0E load \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>draggable</td><td>\u662F\u5426\u5F00\u542F\u62D6\u62FD\u8282\u70B9\u529F\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>allow-drag</td><td>\u5224\u65AD\u8282\u70B9\u80FD\u5426\u88AB\u62D6\u62FD</td><td>Function(node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>allow-drop</td><td>\u62D6\u62FD\u65F6\u5224\u5B9A\u76EE\u6807\u8282\u70B9\u80FD\u5426\u88AB\u653E\u7F6E\u3002<code>type</code> \u53C2\u6570\u6709\u4E09\u79CD\u60C5\u51B5\uFF1A&#39;prev&#39;\u3001&#39;inner&#39; \u548C &#39;next&#39;\uFF0C\u5206\u522B\u8868\u793A\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u524D\u3001\u63D2\u5165\u81F3\u76EE\u6807\u8282\u70B9\u548C\u653E\u7F6E\u5728\u76EE\u6807\u8282\u70B9\u540E</td><td>Function(draggingNode, dropNode, type)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>gap</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9\u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>children</td><td>\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>boolean, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>isLeaf</td><td>\u6307\u5B9A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u4EC5\u5728\u6307\u5B9A\u4E86 lazy \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\u751F\u6548</td><td>boolean, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>class</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9class</td><td>string, function(data, node)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p><code>Tree</code> \u5185\u90E8\u4F7F\u7528\u4E86 Node \u7C7B\u578B\u7684\u5BF9\u8C61\u6765\u5305\u88C5\u7528\u6237\u4F20\u5165\u7684\u6570\u636E\uFF0C\u7528\u6765\u4FDD\u5B58\u76EE\u524D\u8282\u70B9\u7684\u72B6\u6001\u3002 <code>Tree</code> \u62E5\u6709\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>filter</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u64CD\u4F5C</td><td>\u63A5\u6536\u4E00\u4E2A\u4EFB\u610F\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u4F1A\u5728 filter-node-method \u4E2D\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570</td></tr><tr><td>updateKeyChildren</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u8282\u70B9\u5B50\u5143\u7D20\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key, data) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8282\u70B9 key 2. \u8282\u70B9\u6570\u636E\u7684\u6570\u7EC4</td></tr><tr><td>getCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly, includeHalfChecked) \u63A5\u6536\u4E24\u4E2A boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C1. \u662F\u5426\u53EA\u662F\u53F6\u5B50\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code> 2. \u662F\u5426\u5305\u542B\u534A\u9009\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setCheckedNodes</td><td>\u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(nodes) \u63A5\u6536\u52FE\u9009\u8282\u70B9\u6570\u636E\u7684\u6570\u7EC4</td></tr><tr><td>getCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly) \u63A5\u6536\u4E00\u4E2A boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u82E5\u4E3A <code>true</code> \u5219\u4EC5\u8FD4\u56DE\u88AB\u9009\u4E2D\u7684\u53F6\u5B50\u8282\u70B9\u7684 keys\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setCheckedKeys</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(keys, leafOnly) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u52FE\u9009\u8282\u70B9\u7684 key \u7684\u6570\u7EC4 2. boolean \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u82E5\u4E3A <code>true</code> \u5219\u4EC5\u8BBE\u7F6E\u53F6\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>setChecked</td><td>\u901A\u8FC7 key / data \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u52FE\u9009\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key/data, checked, deep) \u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF0C1. \u52FE\u9009\u8282\u70B9\u7684 key \u6216\u8005 data 2. boolean \u7C7B\u578B\uFF0C\u8282\u70B9\u662F\u5426\u9009\u4E2D 3. boolean \u7C7B\u578B\uFF0C\u662F\u5426\u8BBE\u7F6E\u5B50\u8282\u70B9 \uFF0C\u9ED8\u8BA4\u4E3A false</td></tr><tr><td>getHalfCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 <code>show-checkbox</code> \u4E3A <code>true</code>\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCurrentKey</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 key\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE null</td><td>\u2014</td></tr><tr><td>getCurrentNode</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 data\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE null</td><td>\u2014</td></tr><tr><td>setCurrentKey</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(key, shouldAutoExpandParent=true) 1. \u5F85\u88AB\u9009\u8282\u70B9\u7684 key\uFF0C\u82E5\u4E3A null \u5219\u53D6\u6D88\u5F53\u524D\u9AD8\u4EAE\u7684\u8282\u70B9 2. \u662F\u5426\u6269\u5C55\u7236\u8282\u70B9</td></tr><tr><td>setCurrentNode</td><td>\u901A\u8FC7 node \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(node, shouldAutoExpandParent=true) 1. \u5F85\u88AB\u9009\u8282\u70B9\u7684 node 2. \u662F\u5426\u6269\u5C55\u7236\u8282\u70B9</td></tr><tr><td>getNode</td><td>\u6839\u636E data \u6216\u8005 key \u62FF\u5230 Tree \u7EC4\u4EF6\u4E2D\u7684 node</td><td>(data) \u8981\u83B7\u5F97 node \u7684 key \u6216\u8005 data</td></tr><tr><td>getNodePath</td><td>\u6839\u636E data \u6216\u8005 key \u62FF\u5230 Tree \u7EC4\u4EF6\u4E2D\u7684 node \u5B8C\u6574\u8DEF\u5F84</td><td>(data) \u8981\u83B7\u5F97 node \u7684 data \u6570\u7EC4</td></tr><tr><td>remove</td><td>\u5220\u9664 Tree \u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5FC5\u987B\u8BBE\u7F6E node-key \u5C5E\u6027</td><td>(data) \u8981\u5220\u9664\u7684\u8282\u70B9\u7684 data \u6216\u8005 node</td></tr><tr><td>append</td><td>\u4E3A Tree \u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\u8FFD\u52A0\u4E00\u4E2A\u5B50\u8282\u70B9</td><td>(data, parentNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u8FFD\u52A0\u7684\u5B50\u8282\u70B9\u7684 data 2. \u5B50\u8282\u70B9\u7684 parent \u7684 data\u3001key \u6216\u8005 node</td></tr><tr><td>insertBefore</td><td>\u4E3A Tree \u7684\u4E00\u4E2A\u8282\u70B9\u7684\u524D\u9762\u589E\u52A0\u4E00\u4E2A\u8282\u70B9</td><td>(data, refNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684 data 2. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u8282\u70B9\u7684 data\u3001key \u6216\u8005 node</td></tr><tr><td>insertAfter</td><td>\u4E3A Tree \u7684\u4E00\u4E2A\u8282\u70B9\u7684\u540E\u9762\u589E\u52A0\u4E00\u4E2A\u8282\u70B9</td><td>(data, refNode) \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C1. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684 data 2. \u8981\u589E\u52A0\u7684\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9\u7684 data\u3001key \u6216\u8005 node</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>node-click</td><td>\u8282\u70B9\u88AB\u70B9\u51FB\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3002</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u67D0\u4E00\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1Aevent\u3001\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB\u3002</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u672C\u8EAB\u662F\u5426\u88AB\u9009\u4E2D\u3001\u8282\u70B9\u7684\u5B50\u6811\u4E2D\u662F\u5426\u6709\u88AB\u9009\u4E2D\u7684\u8282\u70B9</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u6811\u76EE\u524D\u7684\u9009\u4E2D\u72B6\u6001\u5BF9\u8C61\uFF0C\u5305\u542B checkedNodes\u3001checkedKeys\u3001halfCheckedNodes\u3001halfCheckedKeys \u56DB\u4E2A\u5C5E\u6027</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u5F53\u524D\u8282\u70B9\u7684\u6570\u636E\uFF0C\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u4F20\u9012\u7ED9 <code>data</code> \u5C5E\u6027\u7684\u6570\u7EC4\u4E2D\u8BE5\u8282\u70B9\u6240\u5BF9\u5E94\u7684\u5BF9\u8C61\u3001\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u8282\u70B9\u7EC4\u4EF6\u672C\u8EAB</td></tr><tr><td>node-drag-start</td><td>\u8282\u70B9\u5F00\u59CB\u62D6\u62FD\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E24\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-enter</td><td>\u62D6\u62FD\u8FDB\u5165\u5176\u4ED6\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-leave</td><td>\u62D6\u62FD\u79BB\u5F00\u67D0\u4E2A\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u6240\u79BB\u5F00\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-over</td><td>\u5728\u62D6\u62FD\u8282\u70B9\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF08\u7C7B\u4F3C\u6D4F\u89C8\u5668\u7684 mouseover \u4E8B\u4EF6\uFF09</td><td>\u5171\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u5F53\u524D\u8FDB\u5165\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001event</td></tr><tr><td>node-drag-end</td><td>\u62D6\u62FD\u7ED3\u675F\u65F6\uFF08\u53EF\u80FD\u672A\u6210\u529F\uFF09\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\uFF08\u53EF\u80FD\u4E3A\u7A7A\uFF09\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr><tr><td>node-drop</td><td>\u62D6\u62FD\u6210\u529F\u5B8C\u6210\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u5171\u56DB\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\uFF1A\u88AB\u62D6\u62FD\u8282\u70B9\u5BF9\u5E94\u7684 Node\u3001\u7ED3\u675F\u62D6\u62FD\u65F6\u6700\u540E\u8FDB\u5165\u7684\u8282\u70B9\u3001\u88AB\u62D6\u62FD\u8282\u70B9\u7684\u653E\u7F6E\u4F4D\u7F6E\uFF08before\u3001after\u3001inner\uFF09\u3001event</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data }</td></tr></tbody></table>',11);function Nu(l,t,d,r,B,E){const F=v("hl-demo0"),e=v("demo-block"),n=v("hl-demo1"),a=v("hl-demo2"),i=v("hl-demo3"),k=v("hl-demo4"),A=v("hl-demo5"),D=v("hl-demo6"),p=v("hl-demo7"),b=v("hl-demo8"),x=v("hl-demo9"),m=v("right-nav");return H(),M(q,null,[u("section",null,[U,W,h(e,{fs:""},{source:c(()=>[h(F)]),highlight:c(()=>[X]),_:1}),G,Q,h(e,{fs:""},{source:c(()=>[h(n)]),highlight:c(()=>[R]),_:1}),Z,h(e,{fs:""},{source:c(()=>[h(a)]),highlight:c(()=>[eu]),default:c(()=>[uu]),_:1}),tu,du,h(e,{fs:""},{source:c(()=>[h(i)]),highlight:c(()=>[ou]),default:c(()=>[lu]),_:1}),nu,au,h(e,{fs:""},{source:c(()=>[h(k)]),highlight:c(()=>[Eu]),default:c(()=>[ru]),_:1}),cu,h(e,{fs:""},{source:c(()=>[h(A)]),highlight:c(()=>[iu]),default:c(()=>[su]),_:1}),Fu,hu,h(e,{fs:""},{source:c(()=>[h(D)]),highlight:c(()=>[Cu]),default:c(()=>[Bu]),_:1}),Au,pu,h(e,{fs:""},{source:c(()=>[h(p)]),highlight:c(()=>[fu]),default:c(()=>[Du]),_:1}),bu,mu,h(e,{fs:""},{source:c(()=>[h(b)]),highlight:c(()=>[gu]),_:1}),ku,_u,h(e,{fs:""},{source:c(()=>[h(x)]),highlight:c(()=>[vu]),_:1}),yu]),h(m)],64)}var ju=Y(J,[["render",Nu]]);export{ju as default};
