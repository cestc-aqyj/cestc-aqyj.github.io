var P=Object.defineProperty;var j=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var S=(c,r,a)=>r in c?P(c,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[r]=a,M=(c,r)=>{for(var a in r||(r={}))V.call(r,a)&&S(c,a,r[a]);if(j)for(var a of j(r))q.call(r,a)&&S(c,a,r[a]);return c};import{H as v,L as O,W as z,Q as e,X as D,P as y,a4 as Q,S as C,o as L,aL as B}from"./vue.8f5537c1.js";import{_ as R}from"./index.417b30ee.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const H={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:c,openBlock:r,createBlock:a}=B;function b(t,_){const u=c("hl-tree-v2");return r(),a(u,{data:t.data,props:t.props,height:208},null,8,["data","props"])}const{defineComponent:A}=B,{ref:f}=B;return M({render:b},A({setup(t,{expose:_}){_();const u=(n,E)=>`${n}-${E}`,l=(n,E,k,F=1,i="node")=>{let h=0;return new Array(k).fill(F).map(()=>{const p=F===n?0:Math.round(Math.random()*E),d=u(i,++h);return{id:d,label:d,children:p?l(n,E,p,F+1,d):void 0}})},s=l(4,30,40),m=f({value:"id",label:"label",children:"children"}),o={getKey:u,createData:l,data:s,props:m,ref:f};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}))}(),"hl-demo1":function(){const{resolveComponent:c,openBlock:r,createBlock:a}=B;function b(t,_){const u=c("hl-tree-v2");return r(),a(u,{data:t.data,props:t.props,"show-checkbox":"",height:208},null,8,["data","props"])}const{defineComponent:A}=B,{ref:f}=B;return M({render:b},A({setup(t,{expose:_}){_();const u=(n,E)=>`${n}-${E}`,l=(n,E,k,F=1,i="node")=>{let h=0;return new Array(k).fill(F).map(()=>{const p=F===n?0:Math.round(Math.random()*E),d=u(i,++h);return{id:d,label:d,children:p?l(n,E,p,F+1,d):void 0}})},s=l(4,30,40),m=f({value:"id",label:"label",children:"children"}),o={getKey:u,createData:l,data:s,props:m,ref:f};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}))}(),"hl-demo2":function(){const{resolveComponent:c,openBlock:r,createBlock:a}=B;function b(t,_){const u=c("hl-tree-v2");return r(),a(u,{data:t.data,props:t.props,"show-checkbox":"",height:208},null,8,["data","props"])}const{defineComponent:A}=B,{ref:f}=B;return M({render:b},A({setup(t,{expose:_}){_();const u=(n,E)=>`${n}-${E}`,l=(n,E,k,F=1,i="node")=>{let h=0;return new Array(k).fill(F).map(()=>{const p=F===n?0:Math.round(Math.random()*E),d=u(i,++h);return{id:d,label:d,disabled:Math.random()>.6,children:p?l(n,E,p,F+1,d):void 0}})},s=l(4,30,40),m=f({value:"id",label:"label",children:"children",disabled:"disabled"}),o={getKey:u,createData:l,data:s,props:m,ref:f};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}))}(),"hl-demo3":function(){const{resolveComponent:c,openBlock:r,createBlock:a}=B;function b(t,_){const u=c("hl-tree-v2");return r(),a(u,{data:t.data,height:208,props:t.props,"show-checkbox":"","default-checked-keys":t.defaultCheckedKeys,"default-expanded-keys":t.defaultExpandedKeys},null,8,["data","props","default-checked-keys","default-expanded-keys"])}const{defineComponent:A}=B,{ref:f}=B;return M({render:b},A({setup(t,{expose:_}){_();const u=(i,h)=>`${i}-${h}`,l=(i,h,p,d=1,w="node")=>{let K=0;return new Array(p).fill(d).map(()=>{const N=d===i?0:Math.round(Math.random()*h),x=u(w,++K);return{id:x,label:x,children:N?l(i,h,N,d+1,x):void 0}})},s=l(4,30,40),m=[],o=[];for(let i=0;i<s.length;++i){const h=s[i].children;if(h){o.push(s[i].id),m.push(h[0].id);break}}const n=f({value:"id",label:"label",children:"children"}),F={getKey:u,createData:l,data:s,checkedKeys:m,expanedKeys:o,props:n,defaultCheckedKeys:m,defaultExpandedKeys:o,ref:f};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}(),"hl-demo4":function(){const{normalizeClass:c,createElementVNode:r,toDisplayString:a,resolveComponent:b,withCtx:A,openBlock:f,createBlock:g}=B;function t(s,m){const o=b("hl-tree-v2");return f(),g(o,{data:s.data,props:s.props,height:208},{default:A(({node:n})=>[r("span",{class:c(["prefix text-primary",{"is-leaf":n.isLeaf}])},"TreeV2\xA0\xA0",2),r("span",null,a(n.label),1)]),_:1},8,["data","props"])}const{defineComponent:_}=B,{ref:u}=B;return M({render:t},_({setup(s,{expose:m}){m();const o=(i,h)=>`${i}-${h}`,n=(i,h,p,d=1,w="node")=>{let K=0;return new Array(p).fill(d).map(()=>{const N=d===i?0:Math.round(Math.random()*h),x=o(w,++K);return{id:x,label:x,children:N?n(i,h,N,d+1,x):void 0}})},E=n(4,30,40),k=u({value:"id",label:"label",children:"children"}),F={getKey:o,createData:n,data:E,props:k,ref:u};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}(),"hl-demo5":function(){const{resolveComponent:c,createVNode:r,Fragment:a,openBlock:b,createElementBlock:A}=B;function f(u,l){const s=c("hl-input"),m=c("hl-tree-v2");return b(),A(a,null,[r(s,{modelValue:u.query,"onUpdate:modelValue":l[0]||(l[0]=o=>u.query=o),placeholder:"Please enter keyword",block:"",onInput:u.onQueryChanged},null,8,["modelValue","onInput"]),r(m,{ref:"treeRef",data:u.data,props:u.props,"filter-method":u.filterMethod,height:208},null,8,["data","props","filter-method"])],64)}const{defineComponent:g}=B,{ref:t}=B;return M({render:f},g({setup(u,{expose:l}){l();const s=(p,d)=>`${p}-${d}`,m=(p,d,w,K=1,N="node")=>{let x=0;return new Array(w).fill(K).map(()=>{const $=K===p?0:Math.round(Math.random()*d),T=s(N,++x);return{id:T,label:T,children:$?m(p,d,$,K+1,T):void 0}})},o=t(null),n=m(4,30,5),E=t(""),k=t({value:"id",label:"label",children:"children"}),h={getKey:s,createData:m,treeRef:o,data:n,query:E,props:k,onQueryChanged:p=>{const d=o.value;d==null||d.filter(p)},filterMethod:(p,d)=>d.label.indexOf(p)!==-1,ref:t};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}))}()}},I=e("h1",null,"Tree V2 \u865A\u62DF\u6811",-1),W=e("p",null,"\u4E0D\u8BBA\u4F60\u7684\u6570\u636E\u91CF\u591A\u5927\uFF0C\u865A\u62DF\u6811\u90FD\u80FD\u6BEB\u65E0\u538B\u529B\u5730\u5904\u7406\u3002",-1),X=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),C(" \u57FA\u7840\u7528\u6CD5")],-1),U=e("p",null,"\u57FA\u7840\u7684\u6811\u5F62\u7ED3\u6784\u5C55\u793A",-1),G=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tree-v2 :data="data" :props="props" :height="208" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})

<\/script>
`)],-1),J=e("h2",{id:"ke-xuan-ze-de-xu-ni-shu"},[e("a",{class:"header-anchor",href:"#ke-xuan-ze-de-xu-ni-shu"}),C(" \u53EF\u9009\u62E9\u7684\u865A\u62DF\u6811")],-1),Y=e("p",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002",-1),Z=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tree-v2
    :data="data"
    :props="props"
    show-checkbox
    :height="208"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})

<\/script>
`)],-1),ee=e("h2",{id:"jin-yong-fu-xuan-kuang"},[e("a",{class:"header-anchor",href:"#jin-yong-fu-xuan-kuang"}),C(" \u7981\u7528\u590D\u9009\u6846")],-1),ue=e("p",null,"\u8282\u70B9\u7684\u590D\u9009\u6846\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u7981\u7528\u3002",-1),te=e("div",null,[e("p",null,[C("\u5728\u793A\u4F8B\u4E2D\uFF0C\u5C5E\u6027\u5728 "),e("code",null,"defaultProps"),C(" \u4E2D\u58F0\u660E\u4E86 "),e("code",null,"disabled"),C("\uFF0C\u4E00\u4E9B\u8282\u70B9\u88AB\u8BBE\u7F6E\u4E3A "),e("code",null,"disable\uFF1Atrue"),C("\u3002 \u76F8\u5E94\u7684\u590D\u9009\u6846\u5DF2\u7981\u7528\uFF0C\u4E0D\u80FD\u70B9\u51FB\u3002")])],-1),de=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tree-v2
    :data="data"
    :props="props"
    show-checkbox
    :height="208"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      disabled: Math.random() > 0.6,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
  disabled: 'disabled',
})

<\/script>
`)],-1),re=e("h2",{id:"mo-ren-kuo-zhan-he-mo-ren-jian-cha"},[e("a",{class:"header-anchor",href:"#mo-ren-kuo-zhan-he-mo-ren-jian-cha"}),C(" \u9ED8\u8BA4\u6269\u5C55\u548C\u9ED8\u8BA4\u68C0\u67E5")],-1),ne=e("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u9636\u6BB5\u88AB\u8BBE\u7F6E\u4E3A\u5C55\u5F00\u6216\u9009\u4E2D\u3002",-1),oe=e("div",null,[e("p",null,[C("\u5206\u522B\u901A\u8FC7 "),e("code",null,"default-expanded-keys"),C(" \u548C "),e("code",null,"default-checked-keys"),C(" \u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002")])],-1),ae=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tree-v2
    :data="data"
    :height="208"
    :props="props"
    show-checkbox
    :default-checked-keys="defaultCheckedKeys"
    :default-expanded-keys="defaultExpandedKeys"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const checkedKeys = []
const expanedKeys = []
for (let i = 0; i < data.length; ++i) {
  const children = data[i].children
  if (children) {
    expanedKeys.push(data[i].id)
    checkedKeys.push(children[0].id)
    break
  }
}

const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})
const defaultCheckedKeys = checkedKeys
const defaultExpandedKeys = expanedKeys

<\/script>
`)],-1),le=e("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),C(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),ce=e("p",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9",-1),se=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-tree-v2 :data="data" :props="props" :height="208">
    <template #default="{ node }">
      <span
        class="prefix text-primary"
        :class="{ 'is-leaf': node.isLeaf }"
      >TreeV2&nbsp;&nbsp;</span>
      <span>{{ node.label }}</span>
    </template>
  </hl-tree-v2>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})

<\/script>

`)],-1),ie=e("h2",{id:"jie-dian-guo-lu"},[e("a",{class:"header-anchor",href:"#jie-dian-guo-lu"}),C(" \u8282\u70B9\u8FC7\u6EE4")],-1),he=e("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u8FC7\u6EE4",-1),pe=e("div",null,[e("p",null,"\u5728\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u8C03\u7528 Tree \u5B9E\u4F8B\u7684filter\u65B9\u6CD5\uFF0C \u53C2\u6570\u4E3A\u5173\u952E\u5B57\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6Efilter-method\uFF0C\u503C\u4E3A\u8FC7\u6EE4\u51FD\u6570\u3002")],-1),me=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-input
    v-model="query"
    placeholder="Please enter keyword"
    block
    @input="onQueryChanged"
  />
  <hl-tree-v2
    ref="treeRef"
    :data="data"
    :props="props"
    :filter-method="filterMethod"
    :height="208"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const treeRef = ref(null)
const data = createData(4, 30, 5)
const query = ref('')
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})
const onQueryChanged = (query: string) => {
  const tree = treeRef.value
  tree?.filter(query)
}
const filterMethod = (query, node) => {
  return node.label.indexOf(query) !== -1
}
<\/script>
`)],-1),Ee=L('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E data</td><td>array</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td>string</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>\u2014</td></tr><tr><td>highlight-current</td><td>\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9</td><td>boolean</td><td>true</td></tr><tr><td>check-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>false</td></tr><tr><td>check-strictly</td><td>\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>false</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>current-node-key</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</td><td>string, number</td><td>\u2014</td></tr><tr><td>filter-method</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td>Function(value, data)</td><td>\u2014</td></tr><tr><td>indent</td><td>\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td>16</td></tr><tr><td>item-size</td><td>\u8282\u70B9\u9AD8\u5EA6</td><td>number</td><td>40</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> Props</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u5728\u6574\u68F5\u6811\u4E2D\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>string, number</td><td>id</td></tr><tr><td>label</td><td>\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>label</td></tr><tr><td>children</td><td>\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>children</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>disabled</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p><code>Tree</code> has the following method, which returns the currently selected array of nodes.</p><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>filter</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u64CD\u4F5C</td><td>(query: string)</td></tr><tr><td>getCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373show-checkbox\u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>getCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>setCheckedKeys</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9</td><td>(keys: TreeKey[])</td></tr><tr><td>setChecked</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u52FE\u9009\u72B6\u6001</td><td>(key: TreeKey, checked: boolean)</td></tr><tr><td>getHalfCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCurrentKey</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 key\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>getCurrentNode</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 data\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>setCurrentKey</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001</td><td>(key: TreeKey)</td></tr><tr><td>setData</td><td>\u5F53\u6570\u636E\u91CF\u975E\u5E38\u5E9E\u5927\u7684\u65F6\u5019\uFF0C\u4F7F\u7528reactive\u6570\u636E\u5C06\u5BFC\u81F4\u6027\u80FD\u975E\u5E38\u4F4E\u4E0B\uFF0C\u6240\u4EE5\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u80FD\u591F\u89C4\u907F\u8FD9\u79CD\u60C5\u51B5\u7684\u65B9\u6CD5</td><td>(data: TreeData)</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>node-click</td><td>\u5F53\u8282\u70B9\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, node: TreeNode, e: MouseEvent)</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>(e: Event, data: TreeNodeData, node: TreeNode)</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>(data: TreeNodeData, checked: boolean)</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u6536\u8D77\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9. \u53C2\u6570\u4E3A\uFF1A { node: TreeNode, data: TreeNodeData }</td></tr></tbody></table>',11);function Fe(c,r,a,b,A,f){const g=v("hl-demo0"),t=v("demo-block"),_=v("hl-demo1"),u=v("hl-demo2"),l=v("hl-demo3"),s=v("hl-demo4"),m=v("hl-demo5"),o=v("right-nav");return O(),z(Q,null,[e("section",null,[I,W,X,U,D(t,{fs:""},{source:y(()=>[D(g)]),highlight:y(()=>[G]),_:1}),J,Y,D(t,{fs:""},{source:y(()=>[D(_)]),highlight:y(()=>[Z]),_:1}),ee,ue,D(t,{fs:""},{source:y(()=>[D(u)]),highlight:y(()=>[de]),default:y(()=>[te]),_:1}),re,ne,D(t,{fs:""},{source:y(()=>[D(l)]),highlight:y(()=>[ae]),default:y(()=>[oe]),_:1}),le,ce,D(t,{fs:""},{source:y(()=>[D(s)]),highlight:y(()=>[se]),_:1}),ie,he,D(t,{fs:""},{source:y(()=>[D(m)]),highlight:y(()=>[me]),default:y(()=>[pe]),_:1}),Ee]),D(o)],64)}var be=R(H,[["render",Fe]]);export{be as default};
