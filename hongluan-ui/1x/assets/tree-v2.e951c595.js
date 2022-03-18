var N=Object.defineProperty;var K=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(s,o,c)=>o in s?N(s,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[o]=c,_=(s,o)=>{for(var c in o||(o={}))M.call(o,c)&&v(s,c,o[c]);if(K)for(var c of K(o))w.call(o,c)&&v(s,c,o[c]);return s};import{Y as b,L as T,W as $,Q as u,a2 as F,a0 as p,P as j,aG as y,a3 as B,o as V}from"./vue.a2bb788b.js";import{_ as q}from"./index.6c900e06.js";import"./hongluan.bb564fd4.js";import"./highlight.5c3ff532.js";import"./hongluan-icons.da8bad7b.js";const z={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:s,openBlock:o,createBlock:c}=y;function f(e,r){const t=s("hl-tree-v2");return o(),c(t,{data:e.data,props:e.props,height:208},null,8,["data","props"])}const{defineComponent:C,ref:D}=y,m=(e,r)=>`${e}-${r}`,a=(e,r,t,d=1,n="node")=>{let i=0;return new Array(t).fill(d).map(()=>{const h=d===e?0:Math.round(Math.random()*r),l=m(n,++i);return{id:l,label:l,children:h?a(e,r,h,d+1,l):void 0}})},E=C({setup(){return{data:a(4,30,40),props:D({value:"id",label:"label",children:"children"})}}});return _({render:f},E)}(),"hl-demo1":function(){const{resolveComponent:s,openBlock:o,createBlock:c}=y;function f(e,r){const t=s("hl-tree-v2");return o(),c(t,{data:e.data,props:e.props,"show-checkbox":"",height:208},null,8,["data","props"])}const{defineComponent:C,ref:D}=y,m=(e,r)=>`${e}-${r}`,a=(e,r,t,d=1,n="node")=>{let i=0;return new Array(t).fill(d).map(()=>{const h=d===e?0:Math.round(Math.random()*r),l=m(n,++i);return{id:l,label:l,children:h?a(e,r,h,d+1,l):void 0}})},E=C({setup(){return{data:a(4,30,40),props:D({value:"id",label:"label",children:"children"})}}});return _({render:f},E)}(),"hl-demo2":function(){const{resolveComponent:s,openBlock:o,createBlock:c}=y;function f(e,r){const t=s("hl-tree-v2");return o(),c(t,{data:e.data,props:e.props,"show-checkbox":"",height:208},null,8,["data","props"])}const{defineComponent:C,ref:D}=y,m=(e,r)=>`${e}-${r}`,a=(e,r,t,d=1,n="node")=>{let i=0;return new Array(t).fill(d).map(()=>{const h=d===e?0:Math.round(Math.random()*r),l=m(n,++i);return{id:l,label:l,disabled:Math.random()>.6,children:h?a(e,r,h,d+1,l):void 0}})},E=C({setup(){return{data:a(4,30,40),props:D({value:"id",label:"label",children:"children",disabled:"disabled"})}}});return _({render:f},E)}(),"hl-demo3":function(){const{resolveComponent:s,openBlock:o,createBlock:c}=y;function f(e,r){const t=s("hl-tree-v2");return o(),c(t,{data:e.data,height:208,props:e.props,"show-checkbox":"","default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":e.defaultExpandedKeys},null,8,["data","props","default-checked-keys","default-expanded-keys"])}const{defineComponent:C,ref:D}=y,m=(e,r)=>`${e}-${r}`,a=(e,r,t,d=1,n="node")=>{let i=0;return new Array(t).fill(d).map(()=>{const h=d===e?0:Math.round(Math.random()*r),l=m(n,++i);return{id:l,label:l,children:h?a(e,r,h,d+1,l):void 0}})},E=C({setup(){const e=a(4,30,40),r=[],t=[];for(let d=0;d<e.length;++d){const n=e[d].children;if(n){t.push(e[d].id),r.push(n[0].id);break}}return{data:e,props:D({value:"id",label:"label",children:"children"}),defaultCheckedKeys:r,defaultExpandedKeys:t}}});return _({render:f},E)}(),"hl-demo4":function(){const{normalizeClass:s,createElementVNode:o,toDisplayString:c,resolveComponent:f,withCtx:C,openBlock:D,createBlock:m}=y;function a(n,i){const h=f("hl-tree-v2");return D(),m(h,{data:n.data,props:n.props,height:208},{default:C(({node:l})=>[o("span",{class:s(["prefix text-primary",{"is-leaf":l.isLeaf}])},"TreeV2\xA0\xA0",2),o("span",null,c(l.label),1)]),_:1},8,["data","props"])}const{defineComponent:E,ref:e}=y,r=(n,i)=>`${n}-${i}`,t=(n,i,h,l=1,k="node")=>{let A=0;return new Array(h).fill(l).map(()=>{const x=l===n?0:Math.round(Math.random()*i),g=r(k,++A);return{id:g,label:g,children:x?t(n,i,x,l+1,g):void 0}})},d=E({setup(){return{data:t(4,30,40),props:e({value:"id",label:"label",children:"children"})}}});return _({render:a},d)}(),"hl-demo5":function(){const{resolveComponent:s,createVNode:o,Fragment:c,openBlock:f,createElementBlock:C}=y;function D(t,d){const n=s("hl-input"),i=s("hl-tree-v2");return f(),C(c,null,[o(n,{modelValue:t.query,"onUpdate:modelValue":d[0]||(d[0]=h=>t.query=h),placeholder:"Please enter keyword",block:"",onInput:t.onQueryChanged},null,8,["modelValue","onInput"]),o(i,{ref:"treeRef",data:t.data,props:t.props,"filter-method":t.filterMethod,height:208},null,8,["data","props","filter-method"])],64)}const{defineComponent:m,ref:a}=y,E=(t,d)=>`${t}-${d}`,e=(t,d,n,i=1,h="node")=>{let l=0;return new Array(n).fill(i).map(()=>{const k=i===t?0:Math.round(Math.random()*d),A=E(h,++l);return{id:A,label:A,children:k?e(t,d,k,i+1,A):void 0}})},r=m({setup(){const t=a(null);return{treeRef:t,data:e(4,30,5),query:a(""),props:a({value:"id",label:"label",children:"children"}),onQueryChanged(d){const n=t.value;n==null||n.filter(d)},filterMethod(d,n){return n.label.indexOf(d)!==-1}}}});return _({render:D},r)}()}},P=u("h1",null,"Tree V2 \u865A\u62DF\u6811",-1),Q=u("p",null,"\u4E0D\u8BBA\u4F60\u7684\u6570\u636E\u91CF\u591A\u5927\uFF0C\u865A\u62DF\u6811\u90FD\u80FD\u6BEB\u65E0\u538B\u529B\u5730\u5904\u7406\u3002",-1),R=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),B(" \u57FA\u7840\u7528\u6CD5")],-1),L=u("p",null,"\u57FA\u7840\u7684\u6811\u5F62\u7ED3\u6784\u5C55\u793A",-1),O=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree-v2 :data="data" :props="props" :height="208" />
</template>
<script>
import { defineComponent, ref } from 'vue'

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
export default defineComponent({
  setup() {
    return {
      data: createData(4, 30, 40),
      props: ref({
        value: 'id',
        label: 'label',
        children: 'children',
      }),
    }
  },
})
<\/script>
`)],-1),S=u("h2",{id:"ke-xuan-ze-de-xu-ni-shu"},[u("a",{class:"header-anchor",href:"#ke-xuan-ze-de-xu-ni-shu"}),B(" \u53EF\u9009\u62E9\u7684\u865A\u62DF\u6811")],-1),H=u("p",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002",-1),I=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree-v2
    :data="data"
    :props="props"
    show-checkbox
    :height="208"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

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
export default defineComponent({
  setup() {
    return {
      data: createData(4, 30, 40),
      props: ref({
        value: 'id',
        label: 'label',
        children: 'children',
      }),
    }
  },
})
<\/script>
`)],-1),W=u("h2",{id:"jin-yong-fu-xuan-kuang"},[u("a",{class:"header-anchor",href:"#jin-yong-fu-xuan-kuang"}),B(" \u7981\u7528\u590D\u9009\u6846")],-1),G=u("p",null,"\u8282\u70B9\u7684\u590D\u9009\u6846\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u7981\u7528\u3002",-1),U=u("div",null,[u("p",null,[B("\u5728\u793A\u4F8B\u4E2D\uFF0C\u5C5E\u6027\u5728 "),u("code",null,"defaultProps"),B(" \u4E2D\u58F0\u660E\u4E86 "),u("code",null,"disabled"),B("\uFF0C\u4E00\u4E9B\u8282\u70B9\u88AB\u8BBE\u7F6E\u4E3A "),u("code",null,"disable\uFF1Atrue"),B("\u3002 \u76F8\u5E94\u7684\u590D\u9009\u6846\u5DF2\u7981\u7528\uFF0C\u4E0D\u80FD\u70B9\u51FB\u3002")])],-1),X=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree-v2
    :data="data"
    :props="props"
    show-checkbox
    :height="208"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

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
export default defineComponent({
  setup() {
    return {
      data: createData(4, 30, 40),
      props: ref({
        value: 'id',
        label: 'label',
        children: 'children',
        disabled: 'disabled',
      }),
    }
  },
})
<\/script>
`)],-1),Y=u("h2",{id:"mo-ren-kuo-zhan-he-mo-ren-jian-cha"},[u("a",{class:"header-anchor",href:"#mo-ren-kuo-zhan-he-mo-ren-jian-cha"}),B(" \u9ED8\u8BA4\u6269\u5C55\u548C\u9ED8\u8BA4\u68C0\u67E5")],-1),J=u("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u9636\u6BB5\u88AB\u8BBE\u7F6E\u4E3A\u5C55\u5F00\u6216\u9009\u4E2D\u3002",-1),Z=u("div",null,[u("p",null,[B("\u5206\u522B\u901A\u8FC7 "),u("code",null,"default-expanded-keys"),B(" \u548C "),u("code",null,"default-checked-keys"),B(" \u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002")])],-1),ee=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-tree-v2
    :data="data"
    :height="208"
    :props="props"
    show-checkbox
    :default-checked-keys="defaultCheckedKeys"
    :default-expanded-keys="defaultExpandedKeys"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

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
export default defineComponent({
  setup() {
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
    return {
      data,
      props: ref({
        value: 'id',
        label: 'label',
        children: 'children',
      }),
      defaultCheckedKeys: checkedKeys,
      defaultExpandedKeys: expanedKeys,
    }
  },
})
<\/script>
`)],-1),ue=u("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),B(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),te=u("p",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9",-1),de=u("pre",null,[u("code",{class:"html"},` <template>
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
<script>
import { defineComponent, ref } from 'vue'

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
export default defineComponent({
  setup() {
    return {
      data: createData(4, 30, 40),
      props: ref({
        value: 'id',
        label: 'label',
        children: 'children',
      }),
    }
  },
})
<\/script>

`)],-1),re=u("h2",{id:"jie-dian-guo-lu"},[u("a",{class:"header-anchor",href:"#jie-dian-guo-lu"}),B(" \u8282\u70B9\u8FC7\u6EE4")],-1),ne=u("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u8FC7\u6EE4",-1),oe=u("div",null,[u("p",null,"\u5728\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u8C03\u7528 Tree \u5B9E\u4F8B\u7684filter\u65B9\u6CD5\uFF0C \u53C2\u6570\u4E3A\u5173\u952E\u5B57\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6Efilter-method\uFF0C\u503C\u4E3A\u8FC7\u6EE4\u51FD\u6570\u3002")],-1),ae=u("pre",null,[u("code",{class:"html"},` <template>
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
<script>
import { defineComponent, ref } from 'vue'

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
export default defineComponent({
  setup() {
    const treeRef = ref(null)
    return {
      treeRef,
      data: createData(4, 30, 5),
      query: ref(''),
      props: ref({
        value: 'id',
        label: 'label',
        children: 'children',
      }),
      onQueryChanged(query) {
        const tree = treeRef.value
        tree?.filter(query)
      },
      filterMethod(query, node) {
        return node.label.indexOf(query) !== -1
      },
    }
  },
})
<\/script>
`)],-1),le=V('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E data</td><td>array</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td>string</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>\u2014</td></tr><tr><td>highlight-current</td><td>\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9</td><td>boolean</td><td>true</td></tr><tr><td>check-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>false</td></tr><tr><td>check-strictly</td><td>\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>false</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>current-node-key</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</td><td>string, number</td><td>\u2014</td></tr><tr><td>filter-method</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td>Function(value, data)</td><td>\u2014</td></tr><tr><td>indent</td><td>\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td>16</td></tr><tr><td>item-size</td><td>\u8282\u70B9\u9AD8\u5EA6</td><td>number</td><td>40</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> Props</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u5728\u6574\u68F5\u6811\u4E2D\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>string, number</td><td>id</td></tr><tr><td>label</td><td>\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>label</td></tr><tr><td>children</td><td>\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>children</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>disabled</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p><code>Tree</code> has the following method, which returns the currently selected array of nodes.</p><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>filter</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u64CD\u4F5C</td><td>(query: string)</td></tr><tr><td>getCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373show-checkbox\u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>getCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>setCheckedKeys</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9</td><td>(keys: TreeKey[])</td></tr><tr><td>setChecked</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u52FE\u9009\u72B6\u6001</td><td>(key: TreeKey, checked: boolean)</td></tr><tr><td>getHalfCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCurrentKey</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 key\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>getCurrentNode</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 data\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>setCurrentKey</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001</td><td>(key: TreeKey)</td></tr><tr><td>setData</td><td>\u5F53\u6570\u636E\u91CF\u975E\u5E38\u5E9E\u5927\u7684\u65F6\u5019\uFF0C\u4F7F\u7528reactive\u6570\u636E\u5C06\u5BFC\u81F4\u6027\u80FD\u975E\u5E38\u4F4E\u4E0B\uFF0C\u6240\u4EE5\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u80FD\u591F\u89C4\u907F\u8FD9\u79CD\u60C5\u51B5\u7684\u65B9\u6CD5</td><td>(data: TreeData)</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>node-click</td><td>\u5F53\u8282\u70B9\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, node: TreeNode, e: MouseEvent)</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>(e: Event, data: TreeNodeData, node: TreeNode)</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>(data: TreeNodeData, checked: boolean)</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u6536\u8D77\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9. \u53C2\u6570\u4E3A\uFF1A { node: TreeNode, data: TreeNodeData }</td></tr></tbody></table>',11);function ce(s,o,c,f,C,D){const m=b("hl-demo0"),a=b("demo-block"),E=b("hl-demo1"),e=b("hl-demo2"),r=b("hl-demo3"),t=b("hl-demo4"),d=b("hl-demo5"),n=b("right-nav");return T(),$(j,null,[u("section",null,[P,Q,R,L,F(a,{fs:""},{source:p(()=>[F(m)]),highlight:p(()=>[O]),_:1}),S,H,F(a,{fs:""},{source:p(()=>[F(E)]),highlight:p(()=>[I]),_:1}),W,G,F(a,{fs:""},{source:p(()=>[F(e)]),highlight:p(()=>[X]),default:p(()=>[U]),_:1}),Y,J,F(a,{fs:""},{source:p(()=>[F(r)]),highlight:p(()=>[ee]),default:p(()=>[Z]),_:1}),ue,te,F(a,{fs:""},{source:p(()=>[F(t)]),highlight:p(()=>[de]),_:1}),re,ne,F(a,{fs:""},{source:p(()=>[F(d)]),highlight:p(()=>[ae]),default:p(()=>[oe]),_:1}),le]),F(n)],64)}var Fe=q(z,[["render",ce]]);export{Fe as default};
