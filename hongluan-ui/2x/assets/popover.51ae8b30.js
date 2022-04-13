var j=Object.defineProperty;var z=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(n,o,e)=>o in n?j(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,R=(n,o)=>{for(var e in o||(o={}))L.call(o,e)&&M(n,e,o[e]);if(z)for(var e of z(o))U.call(o,e)&&M(n,e,o[e]);return n};import{F as x,L as $,W as I,Q as u,X as C,P as E,a2 as W,aJ as V,M as l,o as H}from"./vue.fdea90c3.js";import{_ as Q,H as O}from"./index.f30b9df7.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const X={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:B,openBlock:D,createElementBlock:_}=V,s=n("hover \u6FC0\u6D3B"),g=n("click \u6FC0\u6D3B"),h=n("focus \u6FC0\u6D3B"),k=n("\u53F3\u952E\u6FC0\u6D3B"),A=n("\u624B\u5DE5\u6FC0\u6D3B");function p(a,v){const b=o("hl-button"),r=o("hl-popover");return D(),_(B,null,[t(r,{placement:"top-start",title:"\u6807\u9898",width:200,trigger:"hover",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(b,{class:"m-r-md"},{default:e(()=>[s]),_:1})]),_:1}),t(r,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(b,{class:"m-r-md"},{default:e(()=>[g]),_:1})]),_:1}),t(r,{ref:"popover",placement:"right",title:"\u6807\u9898",width:200,trigger:"focus",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(b,{class:"m-r-md"},{default:e(()=>[h]),_:1})]),_:1},512),t(r,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"contextmenu",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(b,{class:"m-r-md"},{default:e(()=>[k]),_:1})]),_:1}),t(r,{visible:a.visible,"onUpdate:visible":v[1]||(v[1]=d=>a.visible=d),placement:"bottom",title:"Title",width:200,content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(b,{class:"m-r-md",onClick:v[0]||(v[0]=d=>a.visible=!a.visible)},{default:e(()=>[A]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:c,ref:F}=V,i=c({setup(){return{visible:F(!1)}}});return R({render:p},i)}(),"hl-demo1":function(){const{createTextVNode:n,resolveComponent:o,resolveDirective:e,withCtx:t,openBlock:B,createBlock:D,withDirectives:_,createElementVNode:s,createVNode:g,Fragment:h,createElementBlock:k}=V,A=n(" Click me "),p=s("span",null," Some content ",-1);function c(r,d){const w=o("hl-button"),m=o("hl-popover"),f=e("click-outside");return B(),k(h,null,[_((B(),D(w,{ref:"buttonRef"},{default:t(()=>[A]),_:1})),[[f,r.onClickOutside]]),g(m,{ref:"popoverRef","virtual-ref":r.buttonRef,trigger:"click",title:"With title","virtual-triggering":""},{default:t(()=>[p]),_:1},8,["virtual-ref"])],64)}const{defineComponent:F,ref:i,unref:a}=V,{ClickOutside:v}=O,b=F({directives:{ClickOutside:v},setup(){const r=i(),d=i();return{buttonRef:r,popoverRef:d,onClickOutside:()=>{var m,f;(f=(m=a(d).popperRef)==null?void 0:m.delayHide)==null||f.call(m)}}}});return R({render:c},b)}(),"hl-demo2":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,openBlock:B,createBlock:D}=V,_=n("\u4E0A\u5DE6"),s=n("\u4E0A\u4E2D"),g=n("\u4E0A\u53F3"),h=n("\u53F3\u4E0A"),k=n("\u53F3\u4E2D"),A=n("\u53F3\u4E0B"),p=n("\u5DE6\u4E0A"),c=n("\u5DE6\u4E2D"),F=n("\u5DE6\u4E0B"),i=n("\u4E0B\u5DE6"),a=n("\u4E0B\u4E2D"),v=n("\u4E0B\u53F3");function b(d,w){const m=o("hl-button"),f=o("hl-popover"),y=o("hl-group"),N=o("hl-col"),P=o("hl-row");return B(),D(P,{align:"center middle",gap:"var(--lg)"},{default:e(()=>[t(N,{span:"col-12",class:"display-flex items-right items-bottom"},{default:e(()=>[t(y,{merge:"",indent:""},{default:e(()=>[t(f,{class:"item",trigger:"click",content:"top-start",effect:"dark",placement:"top-start"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[_]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"top",effect:"dark",placement:"top"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[s]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"top-end",effect:"dark",placement:"top-end"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[g]),_:1})]),_:1})]),_:1})]),_:1}),t(N,{span:"col-12",class:"display-flex"},{default:e(()=>[t(y,{dir:"vertical",merge:"",indent:""},{default:e(()=>[t(f,{class:"item",trigger:"click",content:"right-start",effect:"dark",placement:"right-start"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[h]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"right",effect:"dark",placement:"right"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[k]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"right-end",effect:"dark",placement:"right-end"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[A]),_:1})]),_:1})]),_:1})]),_:1}),t(N,{span:"col-12",class:"display-flex items-right"},{default:e(()=>[t(y,{dir:"vertical",merge:"",indent:""},{default:e(()=>[t(f,{class:"item",trigger:"click",content:"left-start",effect:"dark",placement:"left-start"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[p]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"left",effect:"dark",placement:"left"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[c]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"left-end",effect:"dark",placement:"left-end"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[F]),_:1})]),_:1})]),_:1})]),_:1}),t(N,{span:"col-12",class:"display-flex"},{default:e(()=>[t(y,{merge:"",indent:""},{default:e(()=>[t(f,{class:"item",trigger:"click",content:"bottom-start",effect:"dark",placement:"bottom-start"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[i]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"bottom",effect:"dark",placement:"bottom"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[a]),_:1})]),_:1}),t(f,{class:"item",trigger:"click",content:"bottom-end",effect:"dark",placement:"bottom-end"},{reference:e(()=>[t(m,{class:"group-item"},{default:e(()=>[v]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}return R({render:b},{})}(),"hl-demo3":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:B,openBlock:D,createElementBlock:_}=V,s=n("Dark"),g=n("Default");function h(A,p){const c=o("hl-button"),F=o("hl-popover");return D(),_(B,null,[t(F,{effect:"dark",content:"Top Center",placement:"top"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[s]),_:1})]),_:1}),t(F,{content:"Bottom Center",placement:"bottom"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[g]),_:1})]),_:1})],64)}return R({render:h},{})}(),"hl-demo4":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:B,openBlock:D,createElementBlock:_}=V,s=n("Light"),g=n("Dark");function h(A,p){const c=o("hl-button"),F=o("hl-popover");return D(),_(B,null,[t(F,{trigger:"hover",content:"Top Center",placement:"top",tooltip:""},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[s]),_:1})]),_:1}),t(F,{trigger:"hover",effect:"dark",content:"Top center",placement:"top",tooltip:""},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[g]),_:1})]),_:1})],64)}return R({render:h},{})}(),"hl-demo5":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,createElementVNode:B,Fragment:D,openBlock:_,createElementBlock:s}=V,g=n("\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1"),h=B("h5",null,"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F",-1),k=B("div",null,"\u5220\u9664\u540E\u53EF\u8FDB\u5165\u56DE\u6536\u7AD9\u627E\u56DE\u6B64\u6570\u636E\u3002",-1),A=n("\u53D6\u6D88"),p=n("\u786E\u5B9A"),c=n("\u6784\u5EFA\u4E00\u4E2AConfirm\u6C14\u6CE1");function F(r,d){const w=o("hl-button"),m=o("hl-table-column"),f=o("hl-table"),y=o("hl-popover"),N=o("two-warning"),P=o("hl-icon"),T=o("hl-group");return _(),s(D,null,[t(y,{placement:"right",width:400,trigger:"click",class:"m-r-lg"},{reference:e(()=>[t(w,{class:"m-r-md"},{default:e(()=>[g]),_:1})]),default:e(()=>[t(f,{data:r.gridData,stripe:"",class:"compact"},{default:e(()=>[t(m,{width:"120",property:"date",label:"\u65E5\u671F"}),t(m,{width:"100",property:"name",label:"\u59D3\u540D"}),t(m,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1}),t(y,{visible:r.visible,"onUpdate:visible":d[2]||(d[2]=S=>r.visible=S),placement:"top"},{reference:e(()=>[t(w,{onClick:d[1]||(d[1]=S=>r.visible=!0)},{default:e(()=>[c]),_:1})]),default:e(()=>[t(T,{align:"items-top",gap:"var(--md)"},{default:e(()=>[t(P,{type:"warning",size:"lg",class:"no-shrink"},{default:e(()=>[t(N)]),_:1}),t(T,{dir:"vertical",gap:"var(--xxs)"},{default:e(()=>[h,k,t(T,{block:"",full:"",align:"items-right",class:"m-t-md"},{default:e(()=>[t(w,{type:"link",size:"sm",class:"static",onClick:d[0]||(d[0]=S=>r.visible=!1)},{default:e(()=>[A]),_:1}),t(w,{type:"primary",size:"sm",class:"static",onClick:r.btnClick},{default:e(()=>[p]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:i,ref:a}=V,{HlMessage:v}=O,b=i({setup(){const r=a(!1),d=a([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"}]);return{visible:r,gridData:d,btnClick:()=>{r.value=!1,v("\u5220\u9664\u6210\u529F")}}}});return R({render:F},b)}(),"hl-demo6":function(){const{renderList:n,Fragment:o,openBlock:e,createElementBlock:t,createTextVNode:B,resolveComponent:D,withCtx:_,createVNode:s,createElementVNode:g}=V,h=B(" Click to open tooltip "),k=g("span",null," Some content ",-1);function A(i,a){const v=D("hl-button"),b=D("hl-popover");return e(),t(o,null,[g("div",null,[(e(),t(o,null,n(3,r=>s(v,{key:r,class:"m-r-md",onMouseover:a[0]||(a[0]=d=>i.buttonRef=d.currentTarget),onClick:a[1]||(a[1]=d=>i.visible=!i.visible)},{default:_(()=>[h]),_:2},1024)),64))]),s(b,{ref:"tooltipRef",visible:i.visible,"onUpdate:visible":a[2]||(a[2]=r=>i.visible=r),"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":i.buttonRef,"virtual-triggering":"",trigger:"click","popper-class":"singleton-tooltip"},{default:_(()=>[k]),_:1},8,["visible","virtual-ref"])],64)}const{defineComponent:p,ref:c}=V,F=p({setup(){const i=c(),a=c(),v=c(!1);return{buttonRef:i,tooltipRef:a,visible:v}}});return R({render:A},F)}(),"hl-demo7":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,openBlock:B,createBlock:D}=V,_=n("click \u6FC0\u6D3B");function s(p,c){const F=o("hl-button"),i=o("hl-option"),a=o("hl-select"),v=o("hl-time-select"),b=o("hl-date-picker"),r=o("hl-popover");return B(),D(r,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click","outside-ignore":p.outsideIgnore},{reference:e(()=>[t(F,{class:"m-r-md"},{default:e(()=>[_]),_:1})]),default:e(()=>[t(a,{ref:"selecRef",modelValue:p.selectVal,"onUpdate:modelValue":c[0]||(c[0]=d=>p.selectVal=d),class:"m-b-md"},{default:e(()=>[t(i,{value:"1",label:"1"}),t(i,{value:"2",label:"2"}),t(i,{value:"3",label:"3"})]),_:1},8,["modelValue"]),t(v,{ref:"timeSelecRef",modelValue:p.timeSelectVal,"onUpdate:modelValue":c[1]||(c[1]=d=>p.timeSelectVal=d),class:"m-b-md"},null,8,["modelValue"]),t(b,{ref:"timePickerRef",modelValue:p.timePickerVal,"onUpdate:modelValue":c[2]||(c[2]=d=>p.timePickerVal=d),class:"m-b-md"},null,8,["modelValue"])]),_:1},8,["outside-ignore"])}const{defineComponent:g,ref:h,computed:k}=V,A=g({setup(){const p=h(),c=h(),F=h(),i=h(""),a=h(""),v=h(""),b=k(()=>{var r,d,w;return[(r=p.value)==null?void 0:r.popperPaneRef,(d=F.value)==null?void 0:d.popperPaneRef,(w=c.value)==null?void 0:w.popperPaneRef]});return{selectVal:i,timeSelectVal:a,timePickerVal:v,selecRef:p,timeSelecRef:c,timePickerRef:F,outsideIgnore:b}}});return R({render:s},A)}()}},G=u("h1",null,"Popover \u6C14\u6CE1\u5F39\u6846",-1),J=u("p",null,"\u70B9\u51FB/\u9F20\u6807\u79FB\u5165\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u5361\u7247\u6D6E\u5C42\u3002",-1),q=u("div",{class:"doc-tip"},[u("p",null,[u("em",null,[u("strong",null,"\u63D0\u793A")])]),u("p",null,"Popover \u5185\u4E0D\u652F\u6301 router-link \u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528 vm.$router.push \u4EE3\u66FF\u3002"),u("p",null,[l("Popover \u5185\u4E0D\u652F\u6301 disabled form \u5143\u7D20\uFF0C\u53C2\u8003 "),u("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter"},"MDN"),l("\uFF0C \u8BF7\u5728 disabled form \u5143\u7D20\u5916\u5C42\u6DFB\u52A0\u4E00\u5C42\u5305\u88F9\u5143\u7D20\u3002")])],-1),K=u("div",null,[u("p",null,[u("code",null,"trigger"),l("\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u4F55\u65F6\u89E6\u53D1 Popover\uFF0C\u652F\u6301\u56DB\u79CD\u89E6\u53D1\u65B9\u5F0F\uFF1A"),u("code",null,"hover"),l("\uFF0C"),u("code",null,"click"),l("\uFF0C"),u("code",null,"focus"),l(" \u548C "),u("code",null,"contextmenu"),l("\u3002\u5982\u679C\u4F60\u60F3\u624B\u52A8\u63A7\u5236\u5B83\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E "),u("code",null,"v-model:visible"),l("\u3002\u5BF9\u4E8E\u89E6\u53D1 Popover \u7684\u5143\u7D20\uFF0C\u6709\u4E24\u79CD\u5199\u6CD5\uFF1A\u4F7F\u7528 "),u("code",null,"#reference"),l(" \u7684\u5177\u540D\u63D2\u69FD\uFF0C\u6216\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u4EE4"),u("code",null,"v-popover"),l("\u6307\u5411 Popover \u7684\u7D22\u5F15"),u("code",null,"ref"),l("\u3002")])],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
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
    placement="bottom"
    title="\u6807\u9898"
    :width="200"
    trigger="contextmenu"
    content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"
  >
    <template #reference>
      <hl-button class="m-r-md">\u53F3\u952E\u6FC0\u6D3B</hl-button>
    </template>
  </hl-popover>
  <hl-popover
    v-model:visible="visible"
    placement="bottom"
    title="Title"
    :width="200"
    content="\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"
  >
    <template #reference>
      <hl-button class="m-r-md" @click="visible = !visible">\u624B\u5DE5\u6FC0\u6D3B</hl-button>
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
`)],-1),Z=H('<h2 id="xu-ni-chu-fa"><a class="header-anchor" href="#xu-ni-chu-fa"></a> \u865A\u62DF\u89E6\u53D1</h2><p>Popover \u53EF\u4EE5\u7531\u865A\u62DF\u5143\u7D20\u89E6\u53D1\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5C31\u5F88\u9002\u5408\u4F7F\u7528\u5728\u89E6\u53D1\u5143\u7D20\u548C\u5C55\u793A\u5185\u5BB9\u5143\u7D20\u662F\u5206\u5F00\u7684\u573A\u666F\u3002\u901A\u5E38\u6211\u4EEC\u4F7F\u7528 <code>#reference</code> \u6765\u653E\u7F6E\u6211\u4EEC\u7684\u89E6\u53D1\u5143\u7D20\uFF0C \u7528 <code>triggering-element</code> API\uFF0C\u60A8\u53EF\u4EE5\u4EFB\u610F\u8BBE\u7F6E\u60A8\u7684\u89E6\u53D1\u5143\u7D20 \u4F46\u6CE8\u610F\u5230\u89E6\u53D1\u5143\u7D20\u5E94\u8BE5\u662F\u63A5\u53D7 <code>mouse</code> \u548C <code>keyboard</code> \u4E8B\u4EF6\u7684\u5143\u7D20\u3002</p><div class="doc-tip warning"><p>\u8B66\u544A\uFF1A v-popover \u5C06\u88AB\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 virtual-ref \u4F5C\u4E3A\u66FF\u4EE3\u3002</p></div><div class="doc-tip"><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u865A\u62DF\u89E6\u53D1\u7684 tooltip \u662F\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u4F60\u5FC5\u987B\u81EA\u5DF1\u53BB\u63A7\u5236 tooltip \u662F\u5426\u663E\u793A\uFF0C\u4F60\u5C06\u65E0\u6CD5\u901A\u8FC7\u70B9\u51FB\u7A7A\u767D\u5904\u6765\u5173\u95ED tooltip\u3002</p></div>',4),ee=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button
    ref="buttonRef"
    v-click-outside="onClickOutside"
  >
    Click me
  </hl-button>

  <hl-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
  >
    <span> Some content </span>
  </hl-popover>
</template>

<script>
import { defineComponent, ref, unref } from 'vue'
import { ClickOutside } from 'hongluan-ui'

export default defineComponent({
  directives: {
    ClickOutside,
  },
  setup() {
    const buttonRef = ref()
    const popoverRef = ref()
    const onClickOutside = () => {
      unref(popoverRef).popperRef?.delayHide?.()
    }

    return {
      buttonRef,
      popoverRef,
      onClickOutside,
    }
  },
})
<\/script>
`)],-1),te=u("h2",{id:"fang-wei"},[u("a",{class:"header-anchor",href:"#fang-wei"}),l(" \u65B9\u4F4D")],-1),ue=u("p",null,"\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B 9 \u79CD\u4E0D\u540C\u65B9\u5411\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u5B8C\u6574\u793A\u4F8B\u6765\u9009\u62E9\u4F60\u60F3\u8981\u7684\u6548\u679C\u3002",-1),oe=u("div",null,[u("p",null,[l("\u4F7F\u7528"),u("code",null,"content"),l("\u5C5E\u6027\u6765\u51B3\u5B9A"),u("code",null,"hover"),l("\u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002\u7531"),u("code",null,"placement"),l("\u5C5E\u6027\u51B3\u5B9A\u5C55\u793A\u6548\u679C\uFF1A"),u("code",null,"placement"),l("\u5C5E\u6027\u503C\u4E3A\uFF1A"),u("code",null,"\u65B9\u5411-\u5BF9\u9F50\u4F4D\u7F6E"),l("\uFF1B\u56DB\u4E2A\u65B9\u5411\uFF1A"),u("code",null,"top"),l("\u3001"),u("code",null,"left"),l("\u3001"),u("code",null,"right"),l("\u3001"),u("code",null,"bottom"),l("\uFF1B\u4E09\u79CD\u5BF9\u9F50\u4F4D\u7F6E\uFF1A"),u("code",null,"start"),l(", "),u("code",null,"end"),l("\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002\u5982"),u("code",null,'placement="left-end"'),l("\uFF0C\u5219\u63D0\u793A\u4FE1\u606F\u51FA\u73B0\u5728\u76EE\u6807\u5143\u7D20\u7684\u5DE6\u4FA7\uFF0C\u4E14\u63D0\u793A\u4FE1\u606F\u7684\u5E95\u90E8\u4E0E\u76EE\u6807\u5143\u7D20\u7684\u5E95\u90E8\u5BF9\u9F50\u3002")])],-1),ne=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),le=u("h2",{id:"shen-se-yang-shi"},[u("a",{class:"header-anchor",href:"#shen-se-yang-shi"}),l(" \u6DF1\u8272\u6837\u5F0F")],-1),re=u("p",null,[l("\u901A\u8FC7\u8BBE\u7F6E"),u("code",null,"effect"),l("\u5C5E\u6027 \u4E3A "),u("code",null,"dark"),l(" \u6765\u6539\u53D8\u4E3A\u6DF1\u8272\u6837\u5F0F\uFF0C\u901A\u5E38\u7528\u4E8E\u8868\u73B0 Tooltip \u7684\u6548\u679C\u3002")],-1),ce=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),de=u("h2",{id:"tooltip-wen-zi-ti-shi"},[u("a",{class:"header-anchor",href:"#tooltip-wen-zi-ti-shi"}),l(" Tooltip \u6587\u5B57\u63D0\u793A")],-1),se=u("p",null,[l("Popover \u517C\u5177 Tooltip \u7684\u529F\u80FD\uFF0C\u4F7F\u7528"),u("code",null,"tooltip"),l(" \u5C5E\u6027\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A Tooltip\u3002")],-1),ie=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),ae=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),l(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),pe=u("p",null,"\u53EF\u4EE5\u5728 Popover \u4E2D\u5D4C\u5957\u591A\u79CD\u7C7B\u578B\u4FE1\u606F\uFF0C\u4EE5\u4E0B\u4E3A\u5D4C\u5957\u8868\u683C\u7684\u4F8B\u5B50\u3002",-1),me=u("div",null,[u("p",null,[l("\u5229\u7528\u5206\u53D1\u53D6\u4EE3"),u("code",null,"content"),l("\u5C5E\u6027")])],-1),he=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-popover placement="right" :width="400" trigger="click" class="m-r-lg">
    <template #reference>
      <hl-button class="m-r-md">\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1</hl-button>
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
`)],-1),Fe=u("h2",{id:"dan-li-mo-shi"},[u("a",{class:"header-anchor",href:"#dan-li-mo-shi"}),l(" \u5355\u4F8B\u6A21\u5F0F")],-1),fe=u("p",null,"Popover \u53EF\u4EE5\u4F5C\u4E3A\u5355\u4F8B\uFF0C\u4E5F\u5C31\u662F\u662F\u8BF4\u4F60\u53EF\u4EE5\u540C\u65F6\u6709\u591A\u4E2A\u89E6\u53D1\u540C\u4E00\u4E2A popover \u7684\u89E6\u53D1\u5143\u7D20\uFF0C\u8FD9\u4E2A\u529F\u80FD\u662F\u5728 \u865A\u62DF\u89E6\u53D1 \u7684\u57FA\u7840\u4E0A\u5F00\u53D1\u7684\u3002",-1),Ee=u("div",{class:"doc-tip"},[u("p",null,"\u5DF2\u77E5\u95EE\u9898\uFF1A\u5F53\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u65F6\uFF0Ctooltip \u7684\u89E6\u53D1\u5143\u7D20\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u53D1\u751F\u5F39\u8DF3\u3002")],-1),Be=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <hl-button
      v-for="i in 3"
      :key="i"
      class="m-r-md"
      @mouseover="(e) => (buttonRef = e.currentTarget)"
      @click="visible = !visible"
    >
      Click to open tooltip
    </hl-button>
  </div>

  <hl-popover
    ref="tooltipRef"
    v-model:visible="visible"
    :popper-options="{
      modifiers: [
        {
          name: 'computeStyles',
          options: {
            adaptive: false,
            enabled: false,
          },
        },
      ],
    }"
    :virtual-ref="buttonRef"
    virtual-triggering
    trigger="click"
    popper-class="singleton-tooltip"
  >
    <span> Some content </span>
  </hl-popover>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const buttonRef = ref()
    const tooltipRef = ref()

    const visible = ref(false)
    return {
      buttonRef,
      tooltipRef,
      visible,
    }
  },
})
<\/script>

<style>
.singleton-tooltip {
  transition: transform 0.3s var(--hl-transition-function-fast-bezier);
}
</style>
`)],-1),_e=u("h2",{id:"zu-zhi-dan-chuang-zi-dong-yin-cang"},[u("a",{class:"header-anchor",href:"#zu-zhi-dan-chuang-zi-dong-yin-cang"}),l(" \u963B\u6B62\u5F39\u7A97\u81EA\u52A8\u9690\u85CF")],-1),ge=u("p",null,[l("Popover \u5185\u5D4C\u5165Select\uFF0CDatePicker\uFF0CTimeSelect\u7B49\u5177\u6709"),u("code",null,"body"),l("\u5185\u5F39\u7A97\u7684\u7EC4\u4EF6\u65F6\uFF0C\u70B9\u51FB\u5F39\u7A97\u5185\u5BB9\u4F1A\u5BFC\u81F4Popover\u81EA\u52A8\u9690\u85CF\u3002\u4E3A\u6B64\u60A8\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E"),u("code",null,"outside-ignore"),l("\u5C5E\u6027\u4EE5\u963B\u6B62\u6B64\u884C\u4E3A\u3002")],-1),ve=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-popover
    placement="bottom"
    title="\u6807\u9898"
    :width="200"
    trigger="click"
    :outside-ignore="outsideIgnore"
  >
    <template #reference>
      <hl-button class="m-r-md">click \u6FC0\u6D3B</hl-button>
    </template>
    <hl-select ref="selecRef" v-model="selectVal" class="m-b-md">
      <hl-option value="1" label="1" />
      <hl-option value="2" label="2" />
      <hl-option value="3" label="3" />
    </hl-select>
    <hl-time-select ref="timeSelecRef" v-model="timeSelectVal" class="m-b-md" />
    <hl-date-picker ref="timePickerRef" v-model="timePickerVal" class="m-b-md" />
  </hl-popover>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  setup() {
    const selecRef = ref()
    const timeSelecRef = ref()
    const timePickerRef = ref()
    const selectVal = ref('')
    const timeSelectVal = ref('')
    const timePickerVal = ref('')

    const outsideIgnore = computed(() => [
      selecRef.value?.popperPaneRef,
      timePickerRef.value?.popperPaneRef,
      timeSelecRef.value?.popperPaneRef,
    ])

    return {
      selectVal,
      timeSelectVal,
      timePickerVal,
      selecRef,
      timeSelecRef,
      timePickerRef,
      outsideIgnore,
    }
  },
})
<\/script>
`)],-1),De=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u65B9\u5F0F\u3002</td><td>string</td><td>click/focus/hover/contextmenu</td><td>click</td></tr><tr><td>effect</td><td>\u9ED8\u8BA4\u63D0\u4F9B\u7684\u4E3B\u9898</td><td>string</td><td>dark/light</td><td>light</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tooltip</td><td>\u662F\u5426\u4E3A tooltip\u3002\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0Ctrigger\u81EA\u52A8\u53D8\u66F4\u4E3Ahover\uFF0C\u4E0D\u53EF\u66F4\u6539\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>content</td><td>\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>slot</code> \u4F20\u5165 DOM</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u6700\u5C0F\u5BBD\u5EA6 150px</td></tr><tr><td>placement</td><td>\u51FA\u73B0\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover \u662F\u5426\u53EF\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>\u72B6\u6001\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>transition</td><td>\u5B9A\u4E49\u6E10\u53D8\u52A8\u753B</td><td>string</td><td>\u2014</td><td>fade-in</td></tr><tr><td>show-arrow</td><td>\u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/">popper.js</a> \u7684\u53C2\u6570</td><td>Object</td><td>\u53C2\u8003 <a href="https://popper.js.org/docs/v2/">popper.js</a> \u6587\u6863</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-style</td><td>\u4E3A popper \u6DFB\u52A0\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-after</td><td>\u5EF6\u8FDF\u51FA\u73B0\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u5173\u95ED\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>200</td></tr><tr><td>auto-close</td><td>Tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u9690\u85CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>teleported</td><td>Popover\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>virtual-triggering</td><td>\u662F\u5426\u4E3A\u865A\u62DF\u89E6\u53D1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>virtual-ref</td><td>\u89E6\u53D1\u5F39\u7A97\u7684\u5143\u7D20\u5F15\u7528</td><td>HTMLElement</td><td>\u2014</td><td>-</td></tr><tr><td>outside-ignore</td><td>\u963B\u6B62\u64CD\u4F5C\u5F39\u7A97\u5185\u5143\u7D20\u5BFC\u81F4\u5F39\u7A97\u81EA\u52A8\u9690\u85CF</td><td>MaybeElementRef[]</td><td>\u2014</td><td>[]</td></tr><tr><td>tabindex</td><td>Popover \u7EC4\u4EF6\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Popover \u5185\u5D4C HTML \u6587\u672C</td></tr><tr><td>reference</td><td>\u89E6\u53D1 Popover \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>show</td><td>\u663E\u793A\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',6);function be(n,o,e,t,B,D){const _=x("hl-demo0"),s=x("demo-block"),g=x("hl-demo1"),h=x("hl-demo2"),k=x("hl-demo3"),A=x("hl-demo4"),p=x("hl-demo5"),c=x("hl-demo6"),F=x("hl-demo7"),i=x("right-nav");return $(),I(W,null,[u("section",null,[G,J,q,C(s,{fs:""},{source:E(()=>[C(_)]),highlight:E(()=>[Y]),default:E(()=>[K]),_:1}),Z,C(s,{fs:""},{source:E(()=>[C(g)]),highlight:E(()=>[ee]),_:1}),te,ue,C(s,{fs:""},{source:E(()=>[C(h)]),highlight:E(()=>[ne]),default:E(()=>[oe]),_:1}),le,re,C(s,{fs:""},{source:E(()=>[C(k)]),highlight:E(()=>[ce]),_:1}),de,se,C(s,{fs:""},{source:E(()=>[C(A)]),highlight:E(()=>[ie]),_:1}),ae,pe,C(s,{fs:""},{source:E(()=>[C(p)]),highlight:E(()=>[he]),default:E(()=>[me]),_:1}),Fe,fe,Ee,C(s,{fs:""},{source:E(()=>[C(c)]),highlight:E(()=>[Be]),_:1}),_e,ge,C(s,{fs:""},{source:E(()=>[C(F)]),highlight:E(()=>[ve]),_:1}),De]),C(i)],64)}var Re=Q(X,[["render",be]]);export{Re as default};
