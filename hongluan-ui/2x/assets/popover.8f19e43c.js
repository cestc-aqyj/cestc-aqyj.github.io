var L=Object.defineProperty;var H=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(o,n,t)=>n in o?L(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,V=(o,n)=>{for(var t in n||(n={}))$.call(n,t)&&M(o,t,n[t]);if(H)for(var t of H(n))U.call(n,t)&&M(o,t,n[t]);return o};import{Y as x,L as O,W,Q as u,a2 as B,a0 as s,P as G,aG as y,a3 as l,o as Q}from"./vue.ad0d5d1c.js";import{_ as S,H as I}from"./index.4f3bfee7.js";import"./hongluan.bb564fd4.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.3fa14f51.js";const X={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,Fragment:i,openBlock:f,createElementBlock:p}=y,c=o("hover \u6FC0\u6D3B"),m=o("click \u6FC0\u6D3B"),h=o("focus \u6FC0\u6D3B"),_=o("\u624B\u52A8\u6FC0\u6D3B");function g(D,v){const k=n("hl-button"),A=n("hl-popover");return f(),p(i,null,[e(A,{placement:"top-start",title:"\u6807\u9898",width:200,trigger:"hover",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[c]),_:1})]),_:1}),e(A,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[m]),_:1})]),_:1}),e(A,{ref:"popover",placement:"right",title:"\u6807\u9898",width:200,trigger:"focus",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[h]),_:1})]),_:1},512),e(A,{visible:D.visible,"onUpdate:visible":v[1]||(v[1]=a=>D.visible=a),placement:"bottom",title:"\u6807\u9898",width:200,trigger:"manual",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md",onClick:v[0]||(v[0]=a=>D.visible=!D.visible)},{default:t(()=>[_]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:b,ref:F}=y,E=b({setup(){return{visible:F(!1)}}});return V({render:g},E)}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,openBlock:i,createBlock:f}=y,p=o("\u4E0A\u5DE6"),c=o("\u4E0A\u4E2D"),m=o("\u4E0A\u53F3"),h=o("\u53F3\u4E0A"),_=o("\u53F3\u4E2D"),g=o("\u53F3\u4E0B"),b=o("\u5DE6\u4E0A"),F=o("\u5DE6\u4E2D"),E=o("\u5DE6\u4E0B"),D=o("\u4E0B\u5DE6"),v=o("\u4E0B\u4E2D"),k=o("\u4E0B\u53F3");function A(C,T){const r=n("hl-button"),d=n("hl-popover"),w=n("hl-group"),N=n("hl-col"),P=n("hl-row");return i(),f(P,{align:"center middle",gap:"var(--lg)"},{default:t(()=>[e(N,{span:"col-12",class:"display-flex items-right items-bottom"},{default:t(()=>[e(w,{merge:"",indent:""},{default:t(()=>[e(d,{class:"item",trigger:"click",content:"top-start",effect:"dark",placement:"top-start"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[p]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"top",effect:"dark",placement:"top"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[c]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"top-end",effect:"dark",placement:"top-end"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[m]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{span:"col-12",class:"display-flex"},{default:t(()=>[e(w,{dir:"vertical",merge:"",indent:""},{default:t(()=>[e(d,{class:"item",trigger:"click",content:"right-start",effect:"dark",placement:"right-start"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[h]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"right",effect:"dark",placement:"right"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[_]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"right-end",effect:"dark",placement:"right-end"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[g]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{span:"col-12",class:"display-flex items-right"},{default:t(()=>[e(w,{dir:"vertical",merge:"",indent:""},{default:t(()=>[e(d,{class:"item",trigger:"click",content:"left-start",effect:"dark",placement:"left-start"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[b]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"left",effect:"dark",placement:"left"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[F]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"left-end",effect:"dark",placement:"left-end"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[E]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{span:"col-12",class:"display-flex"},{default:t(()=>[e(w,{merge:"",indent:""},{default:t(()=>[e(d,{class:"item",trigger:"click",content:"bottom-start",effect:"dark",placement:"bottom-start"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[D]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"bottom",effect:"dark",placement:"bottom"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[v]),_:1})]),_:1}),e(d,{class:"item",trigger:"click",content:"bottom-end",effect:"dark",placement:"bottom-end"},{reference:t(()=>[e(r,{class:"group-item"},{default:t(()=>[k]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}return V({render:A},{})}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,Fragment:i,openBlock:f,createElementBlock:p}=y,c=o("Dark"),m=o("Default");function h(g,b){const F=n("hl-button"),E=n("hl-popover");return f(),p(i,null,[e(E,{effect:"dark",content:"Top Center",placement:"top"},{reference:t(()=>[e(F,{class:"m-r-md"},{default:t(()=>[c]),_:1})]),_:1}),e(E,{content:"Bottom Center",placement:"bottom"},{reference:t(()=>[e(F,{class:"m-r-md"},{default:t(()=>[m]),_:1})]),_:1})],64)}return V({render:h},{})}(),"hl-demo3":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,Fragment:i,openBlock:f,createElementBlock:p}=y,c=o("Light"),m=o("Dark");function h(g,b){const F=n("hl-button"),E=n("hl-popover");return f(),p(i,null,[e(E,{trigger:"hover",content:"Top Center",placement:"top",tooltip:""},{reference:t(()=>[e(F,{class:"m-r-md"},{default:t(()=>[c]),_:1})]),_:1}),e(E,{trigger:"hover",effect:"dark",content:"Top center",placement:"top",tooltip:""},{reference:t(()=>[e(F,{class:"m-r-md"},{default:t(()=>[m]),_:1})]),_:1})],64)}return V({render:h},{})}(),"hl-demo4":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,createElementVNode:i,Fragment:f,openBlock:p,createElementBlock:c}=y,m=o("\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1"),h=i("h5",null,"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F",-1),_=i("div",null,"\u5220\u9664\u540E\u53EF\u8FDB\u5165\u56DE\u6536\u7AD9\u627E\u56DE\u6B64\u6570\u636E\u3002",-1),g=o("\u53D6\u6D88"),b=o("\u786E\u5B9A"),F=o("\u6784\u5EFA\u4E00\u4E2AConfirm\u6C14\u6CE1");function E(a,C){const T=n("hl-button"),r=n("hl-table-column"),d=n("hl-table"),w=n("hl-popover"),N=n("two-warning"),P=n("hl-icon"),z=n("hl-group");return p(),c(f,null,[e(w,{placement:"right",width:400,trigger:"click",class:"m-r-lg"},{reference:t(()=>[e(T,null,{default:t(()=>[m]),_:1})]),default:t(()=>[e(d,{data:a.gridData,stripe:"",class:"compact"},{default:t(()=>[e(r,{width:"120",property:"date",label:"\u65E5\u671F"}),e(r,{width:"100",property:"name",label:"\u59D3\u540D"}),e(r,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1}),e(w,{visible:a.visible,"onUpdate:visible":C[2]||(C[2]=j=>a.visible=j),placement:"top"},{reference:t(()=>[e(T,{onClick:C[1]||(C[1]=j=>a.visible=!0)},{default:t(()=>[F]),_:1})]),default:t(()=>[e(z,{align:"items-top",gap:"var(--md)"},{default:t(()=>[e(P,{type:"warning",size:"lg",class:"no-shrink"},{default:t(()=>[e(N)]),_:1}),e(z,{dir:"vertical",gap:"var(--xxs)"},{default:t(()=>[h,_,e(z,{block:"",full:"",align:"items-right",class:"m-t-md"},{default:t(()=>[e(T,{type:"link",size:"sm",class:"static",onClick:C[0]||(C[0]=j=>a.visible=!1)},{default:t(()=>[g]),_:1}),e(T,{type:"primary",size:"sm",class:"static",onClick:a.btnClick},{default:t(()=>[b]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:D,ref:v}=y,{HlMessage:k}=I,A=D({setup(){const a=v(!1),C=v([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"}]);return{visible:a,gridData:C,btnClick:()=>{a.value=!1,k("\u5220\u9664\u6210\u529F")}}}});return V({render:E},A)}()}},Y=u("h1",null,"Popover \u6C14\u6CE1\u5F39\u6846",-1),q=u("p",null,"\u70B9\u51FB/\u9F20\u6807\u79FB\u5165\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u5361\u7247\u6D6E\u5C42\u3002",-1),J=u("div",null,[u("p",null,[u("code",null,"trigger"),l("\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u4F55\u65F6\u89E6\u53D1 Popover\uFF0C\u652F\u6301\u56DB\u79CD\u89E6\u53D1\u65B9\u5F0F\uFF1A"),u("code",null,"hover"),l("\uFF0C"),u("code",null,"click"),l("\uFF0C"),u("code",null,"focus"),l(" \u548C "),u("code",null,"manual"),l("\u3002\u5BF9\u4E8E\u89E6\u53D1 Popover \u7684\u5143\u7D20\uFF0C\u6709\u4E24\u79CD\u5199\u6CD5\uFF1A\u4F7F\u7528 "),u("code",null,"#reference"),l(" \u7684\u5177\u540D\u63D2\u69FD\uFF0C\u6216\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u4EE4"),u("code",null,"v-popover"),l("\u6307\u5411 Popover \u7684\u7D22\u5F15"),u("code",null,"ref"),l("\u3002")])],-1),K=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-popover placement="top-start" title="\u6807\u9898" :width="200" trigger="hover" content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002">
    <template #reference>
      <hl-button class="m-r-md">hover \u6FC0\u6D3B</hl-button>
    </template>
  </hl-popover>

  <hl-popover placement="bottom" title="\u6807\u9898" :width="200" trigger="click" content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002">
    <template #reference>
      <hl-button class="m-r-md">click \u6FC0\u6D3B</hl-button>
    </template>
  </hl-popover>

  <hl-popover
    ref="popover"
    placement="right"
    title="\u6807\u9898"
    :width="200"
    trigger="focus"
    content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"
  >
    <template #reference>
      <hl-button class="m-r-md">focus \u6FC0\u6D3B</hl-button>
    </template>
  </hl-popover>

  <hl-popover
    v-model:visible="visible"
    placement="bottom"
    title="\u6807\u9898"
    :width="200"
    trigger="manual"
    content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"
  >
    <template #reference>
      <hl-button class="m-r-md" @click="visible = !visible">\u624B\u52A8\u6FC0\u6D3B</hl-button>
    </template>
  </hl-popover>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref(false)

    return {
      visible,
    }
  },
})
<\/script>
`)],-1),R=u("h2",{id:"fang-wei"},[u("a",{class:"header-anchor",href:"#fang-wei"}),l(" \u65B9\u4F4D")],-1),Z=u("p",null,"\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B 9 \u79CD\u4E0D\u540C\u65B9\u5411\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u5B8C\u6574\u793A\u4F8B\u6765\u9009\u62E9\u4F60\u60F3\u8981\u7684\u6548\u679C\u3002",-1),tt=u("div",null,[u("p",null,[l("\u4F7F\u7528"),u("code",null,"content"),l("\u5C5E\u6027\u6765\u51B3\u5B9A"),u("code",null,"hover"),l("\u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002\u7531"),u("code",null,"placement"),l("\u5C5E\u6027\u51B3\u5B9A\u5C55\u793A\u6548\u679C\uFF1A"),u("code",null,"placement"),l("\u5C5E\u6027\u503C\u4E3A\uFF1A"),u("code",null,"\u65B9\u5411-\u5BF9\u9F50\u4F4D\u7F6E"),l("\uFF1B\u56DB\u4E2A\u65B9\u5411\uFF1A"),u("code",null,"top"),l("\u3001"),u("code",null,"left"),l("\u3001"),u("code",null,"right"),l("\u3001"),u("code",null,"bottom"),l("\uFF1B\u4E09\u79CD\u5BF9\u9F50\u4F4D\u7F6E\uFF1A"),u("code",null,"start"),l(", "),u("code",null,"end"),l("\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002\u5982"),u("code",null,'placement="left-end"'),l("\uFF0C\u5219\u63D0\u793A\u4FE1\u606F\u51FA\u73B0\u5728\u76EE\u6807\u5143\u7D20\u7684\u5DE6\u4FA7\uFF0C\u4E14\u63D0\u793A\u4FE1\u606F\u7684\u5E95\u90E8\u4E0E\u76EE\u6807\u5143\u7D20\u7684\u5E95\u90E8\u5BF9\u9F50\u3002")])],-1),et=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center middle" gap="var(--lg)">
    <hl-col span="col-12" class="display-flex items-right items-bottom">
      <hl-group merge indent>
        <hl-popover
          class="item"
          trigger="click"
          content="top-start"
          effect="dark"
          placement="top-start"
        >
          <template #reference>
            <hl-button class="group-item">\u4E0A\u5DE6</hl-button>
          </template>
        </hl-popover>
        <hl-popover class="item" trigger="click" content="top" effect="dark" placement="top">
          <template #reference>
            <hl-button class="group-item">\u4E0A\u4E2D</hl-button>
          </template>
        </hl-popover>
        <hl-popover
          class="item"
          trigger="click"
          content="top-end"
          effect="dark"
          placement="top-end"
        >
          <template #reference>
            <hl-button class="group-item">\u4E0A\u53F3</hl-button>
          </template>
        </hl-popover>
      </hl-group>
    </hl-col>

    <hl-col span="col-12" class="display-flex">
      <hl-group dir="vertical" merge indent>
        <hl-popover
          class="item"
          trigger="click"
          content="right-start"
          effect="dark"
          placement="right-start"
        >
          <template #reference>
            <hl-button class="group-item">\u53F3\u4E0A</hl-button>
          </template>
        </hl-popover>
        <hl-popover class="item" trigger="click" content="right" effect="dark" placement="right">
          <template #reference>
            <hl-button class="group-item">\u53F3\u4E2D</hl-button>
          </template>
        </hl-popover>
        <hl-popover
          class="item"
          trigger="click"
          content="right-end"
          effect="dark"
          placement="right-end"
        >
          <template #reference>
            <hl-button class="group-item">\u53F3\u4E0B</hl-button>
          </template>
        </hl-popover>
      </hl-group>
    </hl-col>

    <hl-col span="col-12" class="display-flex items-right">
      <hl-group dir="vertical" merge indent>
        <hl-popover
          class="item"
          trigger="click"
          content="left-start"
          effect="dark"
          placement="left-start"
        >
          <template #reference>
            <hl-button class="group-item">\u5DE6\u4E0A</hl-button>
          </template>
        </hl-popover>
        <hl-popover class="item" trigger="click" content="left" effect="dark" placement="left">
          <template #reference>
            <hl-button class="group-item">\u5DE6\u4E2D</hl-button>
          </template>
        </hl-popover>
        <hl-popover
          class="item"
          trigger="click"
          content="left-end"
          effect="dark"
          placement="left-end"
        >
          <template #reference>
            <hl-button class="group-item">\u5DE6\u4E0B</hl-button>
          </template>
        </hl-popover>
      </hl-group>
    </hl-col>

    <hl-col span="col-12" class="display-flex">
      <hl-group merge indent>
        <hl-popover
          class="item"
          trigger="click"
          content="bottom-start"
          effect="dark"
          placement="bottom-start"
        >
          <template #reference>
            <hl-button class="group-item">\u4E0B\u5DE6</hl-button>
          </template>
        </hl-popover>
        <hl-popover class="item" trigger="click" content="bottom" effect="dark" placement="bottom">
          <template #reference>
            <hl-button class="group-item">\u4E0B\u4E2D</hl-button>
          </template>
        </hl-popover>
        <hl-popover
          class="item"
          trigger="click"
          content="bottom-end"
          effect="dark"
          placement="bottom-end"
        >
          <template #reference>
            <hl-button class="group-item">\u4E0B\u53F3</hl-button>
          </template>
        </hl-popover>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),ut=u("h2",{id:"shen-se-yang-shi"},[u("a",{class:"header-anchor",href:"#shen-se-yang-shi"}),l(" \u6DF1\u8272\u6837\u5F0F")],-1),ot=u("p",null,[l("\u901A\u8FC7\u8BBE\u7F6E"),u("code",null,"effect"),l("\u5C5E\u6027 \u4E3A "),u("code",null,"dark"),l(" \u6765\u6539\u53D8\u4E3A\u6DF1\u8272\u6837\u5F0F\uFF0C\u901A\u5E38\u7528\u4E8E\u8868\u73B0 Tooltip \u7684\u6548\u679C\u3002")],-1),nt=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-popover effect="dark" content="Top Center" placement="top">
    <template #reference>
      <hl-button class="m-r-md">Dark</hl-button>
    </template>
  </hl-popover>
  <hl-popover content="Bottom Center" placement="bottom">
    <template #reference>
      <hl-button class="m-r-md">Default</hl-button>
    </template>
  </hl-popover>
</template>
`)],-1),lt=u("h2",{id:"tooltip-wen-zi-ti-shi"},[u("a",{class:"header-anchor",href:"#tooltip-wen-zi-ti-shi"}),l(" Tooltip \u6587\u5B57\u63D0\u793A")],-1),rt=u("p",null,[l("Popover \u517C\u5177 Tooltip \u7684\u529F\u80FD\uFF0C\u4F7F\u7528"),u("code",null,"tooltip"),l(" \u5C5E\u6027\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A Tooltip\u3002")],-1),ct=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-popover trigger="hover" content="Top Center" placement="top" tooltip>
    <template #reference>
      <hl-button class="m-r-md">Light</hl-button>
    </template>
  </hl-popover>

  <hl-popover trigger="hover" effect="dark" content="Top center" placement="top" tooltip>
    <template #reference>
      <hl-button class="m-r-md">Dark</hl-button>
    </template>
  </hl-popover>
</template>
`)],-1),dt=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),l(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),at=u("p",null,"\u53EF\u4EE5\u5728 Popover \u4E2D\u5D4C\u5957\u591A\u79CD\u7C7B\u578B\u4FE1\u606F\uFF0C\u4EE5\u4E0B\u4E3A\u5D4C\u5957\u8868\u683C\u7684\u4F8B\u5B50\u3002",-1),st=u("div",null,[u("p",null,[l("\u5229\u7528\u5206\u53D1\u53D6\u4EE3"),u("code",null,"content"),l("\u5C5E\u6027")])],-1),it=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-popover placement="right" :width="400" trigger="click" class="m-r-lg">
    <template #reference>
      <hl-button>\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1</hl-button>
    </template>
    <hl-table :data="gridData" stripe class="compact">
      <hl-table-column width="120" property="date" label="\u65E5\u671F" />
      <hl-table-column width="100" property="name" label="\u59D3\u540D" />
      <hl-table-column property="address" label="\u5730\u5740" />
    </hl-table>
  </hl-popover>

  <hl-popover v-model:visible="visible" placement="top">
    <hl-group align="items-top" gap="var(--md)">
      <hl-icon type="warning" size="lg" class="no-shrink">
        <two-warning />
      </hl-icon>
      <hl-group dir="vertical" gap="var(--xxs)">
        <h5>\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F</h5>
        <div>\u5220\u9664\u540E\u53EF\u8FDB\u5165\u56DE\u6536\u7AD9\u627E\u56DE\u6B64\u6570\u636E\u3002</div>
        <hl-group block full align="items-right" class="m-t-md">
          <hl-button type="link" size="sm" class="static" @click="visible = false">\u53D6\u6D88</hl-button>
          <hl-button type="primary" size="sm" class="static" @click="btnClick">\u786E\u5B9A</hl-button>
        </hl-group>
      </hl-group>
    </hl-group>

    <template #reference>
      <hl-button @click="visible = true">\u6784\u5EFA\u4E00\u4E2AConfirm\u6C14\u6CE1</hl-button>
    </template>
  </hl-popover>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { HlMessage } from 'hongluan-ui'
export default defineComponent({
  setup() {
    const visible = ref(false)
    const gridData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02',
      },
    ])

    const btnClick = () => {
      visible.value = false
      HlMessage('\u5220\u9664\u6210\u529F')
    }
    return {
      visible,
      gridData,
      btnClick,
    }
  },
})
<\/script>
`)],-1),pt=Q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u65B9\u5F0F\u3002tooltip \u65F6\uFF0C\u6B64\u5C5E\u6027\u5931\u6548\uFF0C\u503C\u88AB\u8BBE\u7F6E\u4E3A hover</td><td>string</td><td>click/focus/hover/manual</td><td>click</td></tr><tr><td>effect</td><td>\u9ED8\u8BA4\u63D0\u4F9B\u7684\u4E3B\u9898</td><td>string</td><td>dark/light</td><td>light</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tooltip</td><td>\u662F\u5426\u4E3A tooltip</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>content</td><td>\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>slot</code> \u4F20\u5165 DOM</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u6700\u5C0F\u5BBD\u5EA6 150px</td></tr><tr><td>placement</td><td>\u51FA\u73B0\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover \u662F\u5426\u53EF\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>\u72B6\u6001\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>transition</td><td>\u5B9A\u4E49\u6E10\u53D8\u52A8\u753B</td><td>string</td><td>\u2014</td><td>fade-in-linear</td></tr><tr><td>show-arrow</td><td>\u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934</td><td>Boolean</td><td>\u2014</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/">popper.js</a> \u7684\u53C2\u6570</td><td>Object</td><td>\u53C2\u8003 <a href="https://popper.js.org/docs/v2/">popper.js</a> \u6587\u6863</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-after</td><td>\u5EF6\u8FDF\u51FA\u73B0\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u5173\u95ED\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>200</td></tr><tr><td>auto-close</td><td>Tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u9690\u85CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>append-to-body</td><td>DOM\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>tabindex</td><td>Popover \u7EC4\u4EF6\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Popover \u5185\u5D4C HTML \u6587\u672C</td></tr><tr><td>reference</td><td>\u89E6\u53D1 Popover \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>show</td><td>\u663E\u793A\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',6);function mt(o,n,t,e,i,f){const p=x("hl-demo0"),c=x("demo-block"),m=x("hl-demo1"),h=x("hl-demo2"),_=x("hl-demo3"),g=x("hl-demo4"),b=x("right-nav");return O(),W(G,null,[u("section",null,[Y,q,B(c,{fs:""},{source:s(()=>[B(p)]),highlight:s(()=>[K]),default:s(()=>[J]),_:1}),R,Z,B(c,{fs:""},{source:s(()=>[B(m)]),highlight:s(()=>[et]),default:s(()=>[tt]),_:1}),ut,ot,B(c,{fs:""},{source:s(()=>[B(h)]),highlight:s(()=>[nt]),_:1}),lt,rt,B(c,{fs:""},{source:s(()=>[B(_)]),highlight:s(()=>[ct]),_:1}),dt,at,B(c,{fs:""},{source:s(()=>[B(g)]),highlight:s(()=>[it]),default:s(()=>[st]),_:1}),pt]),B(b)],64)}var gt=S(X,[["render",mt]]);export{gt as default};
