var U=Object.defineProperty;var z=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var O=(n,o,e)=>o in n?U(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,P=(n,o)=>{for(var e in o||(o={}))j.call(o,e)&&O(n,e,o[e]);if(z)for(var e of z(o))$.call(o,e)&&O(n,e,o[e]);return n};import{H as R,L as I,W,Q as u,X as C,P as B,a4 as Q,aL as A,S as l,o as L}from"./vue.8f5537c1.js";import{_ as X,H}from"./index.417b30ee.js";import{H as G}from"./hongluan-icons.35255449.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";const q={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:g,openBlock:b,createElementBlock:v}=A,a=n("hover \u6FC0\u6D3B"),D=n("click \u6FC0\u6D3B"),F=n("focus \u6FC0\u6D3B"),k=n("\u53F3\u952E\u6FC0\u6D3B"),w=n("\u624B\u5DE5\u6FC0\u6D3B");function h(s,f){const _=o("hl-button"),p=o("hl-popover");return b(),v(g,null,[t(p,{placement:"top-start",title:"\u6807\u9898",width:200,trigger:"hover",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(_,{class:"m-r-md"},{default:e(()=>[a]),_:1})]),_:1}),t(p,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(_,{class:"m-r-md"},{default:e(()=>[D]),_:1})]),_:1}),t(p,{ref:"popover",placement:"right",title:"\u6807\u9898",width:200,trigger:"focus",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(_,{class:"m-r-md"},{default:e(()=>[F]),_:1})]),_:1},512),t(p,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"contextmenu",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(_,{class:"m-r-md"},{default:e(()=>[k]),_:1})]),_:1}),t(p,{visible:s.visible,"onUpdate:visible":f[1]||(f[1]=d=>s.visible=d),placement:"bottom",title:"Title",width:200,content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:e(()=>[t(_,{class:"m-r-md",onClick:f[0]||(f[0]=d=>s.visible=!s.visible)},{default:e(()=>[w]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:c}=A,{ref:E}=A;return P({render:h},c({setup(s,{expose:f}){f();const p={visible:E(!1),ref:E};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}(),"hl-demo1":function(){const{createTextVNode:n,resolveComponent:o,resolveDirective:e,withCtx:t,openBlock:g,createBlock:b,withDirectives:v,createElementVNode:a,createVNode:D,Fragment:F,createElementBlock:k}=A,w=n(" Click me "),h=a("span",null," Some content ",-1);function c(p,d){const V=o("hl-button"),r=o("hl-popover"),i=e("click-outside");return g(),k(F,null,[v((g(),b(V,{ref:"buttonRef"},{default:t(()=>[w]),_:1})),[[i,p.onClickOutside]]),D(r,{ref:"popoverRef","virtual-ref":p.buttonRef,trigger:"click",title:"With title","virtual-triggering":""},{default:t(()=>[h]),_:1},8,["virtual-ref"])],64)}const{defineComponent:E,ref:m,unref:s}=A,{ClickOutside:f}=H,_=E({directives:{ClickOutside:f},setup(){const p=m(),d=m();return{buttonRef:p,popoverRef:d,onClickOutside:()=>{var r,i;(i=(r=s(d).popperRef)==null?void 0:r.delayHide)==null||i.call(r)}}}});return P({render:c},_)}(),"hl-demo2":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,openBlock:g,createBlock:b}=A,v=n("\u4E0A\u5DE6"),a=n("\u4E0A\u4E2D"),D=n("\u4E0A\u53F3"),F=n("\u53F3\u4E0A"),k=n("\u53F3\u4E2D"),w=n("\u53F3\u4E0B"),h=n("\u5DE6\u4E0A"),c=n("\u5DE6\u4E2D"),E=n("\u5DE6\u4E0B"),m=n("\u4E0B\u5DE6"),s=n("\u4E0B\u4E2D"),f=n("\u4E0B\u53F3");function _(d,V){const r=o("hl-button"),i=o("hl-popover"),x=o("hl-group"),y=o("hl-col"),T=o("hl-row");return g(),b(T,{align:"center middle",gap:"var(--lg)"},{default:e(()=>[t(y,{span:"col-12",class:"display-flex items-right items-bottom"},{default:e(()=>[t(x,{merge:"",indent:""},{default:e(()=>[t(i,{class:"item",trigger:"click",content:"top-start",effect:"dark",placement:"top-start"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[v]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"top",effect:"dark",placement:"top"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[a]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"top-end",effect:"dark",placement:"top-end"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[D]),_:1})]),_:1})]),_:1})]),_:1}),t(y,{span:"col-12",class:"display-flex"},{default:e(()=>[t(x,{dir:"vertical",merge:"",indent:""},{default:e(()=>[t(i,{class:"item",trigger:"click",content:"right-start",effect:"dark",placement:"right-start"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[F]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"right",effect:"dark",placement:"right"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[k]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"right-end",effect:"dark",placement:"right-end"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[w]),_:1})]),_:1})]),_:1})]),_:1}),t(y,{span:"col-12",class:"display-flex items-right"},{default:e(()=>[t(x,{dir:"vertical",merge:"",indent:""},{default:e(()=>[t(i,{class:"item",trigger:"click",content:"left-start",effect:"dark",placement:"left-start"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[h]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"left",effect:"dark",placement:"left"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[c]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"left-end",effect:"dark",placement:"left-end"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[E]),_:1})]),_:1})]),_:1})]),_:1}),t(y,{span:"col-12",class:"display-flex"},{default:e(()=>[t(x,{merge:"",indent:""},{default:e(()=>[t(i,{class:"item",trigger:"click",content:"bottom-start",effect:"dark",placement:"bottom-start"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[m]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"bottom",effect:"dark",placement:"bottom"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[s]),_:1})]),_:1}),t(i,{class:"item",trigger:"click",content:"bottom-end",effect:"dark",placement:"bottom-end"},{reference:e(()=>[t(r,{class:"group-item"},{default:e(()=>[f]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}return P({render:_},{})}(),"hl-demo3":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:g,openBlock:b,createElementBlock:v}=A,a=n("Dark"),D=n("Default");function F(w,h){const c=o("hl-button"),E=o("hl-popover");return b(),v(g,null,[t(E,{effect:"dark",content:"Top Center",placement:"top"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[a]),_:1})]),_:1}),t(E,{content:"Bottom Center",placement:"bottom"},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[D]),_:1})]),_:1})],64)}return P({render:F},{})}(),"hl-demo4":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:g,openBlock:b,createElementBlock:v}=A,a=n("Light"),D=n("Dark");function F(w,h){const c=o("hl-button"),E=o("hl-popover");return b(),v(g,null,[t(E,{trigger:"hover",content:"Top Center",placement:"top",tooltip:""},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[a]),_:1})]),_:1}),t(E,{trigger:"hover",effect:"dark",content:"Top center",placement:"top",tooltip:""},{reference:e(()=>[t(c,{class:"m-r-md"},{default:e(()=>[D]),_:1})]),_:1})],64)}return P({render:F},{})}(),"hl-demo5":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,createElementVNode:g,Fragment:b,openBlock:v,createElementBlock:a}=A,D=n("\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1"),F=g("h5",null,"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F",-1),k=g("div",null,"\u5220\u9664\u540E\u53EF\u8FDB\u5165\u56DE\u6536\u7AD9\u627E\u56DE\u6B64\u6570\u636E\u3002",-1),w=n("\u53D6\u6D88"),h=n("\u786E\u5B9A"),c=n("\u6784\u5EFA\u4E00\u4E2AConfirm\u6C14\u6CE1");function E(d,V){const r=o("hl-button"),i=o("hl-table-column"),x=o("hl-table"),y=o("hl-popover"),T=o("two-warning"),M=o("hl-icon"),N=o("hl-group");return v(),a(b,null,[t(y,{placement:"right",width:400,trigger:"click",class:"m-r-lg"},{reference:e(()=>[t(r,{class:"m-r-md"},{default:e(()=>[D]),_:1})]),default:e(()=>[t(x,{data:d.gridData,stripe:"",class:"compact"},{default:e(()=>[t(i,{width:"120",property:"date",label:"\u65E5\u671F"}),t(i,{width:"100",property:"name",label:"\u59D3\u540D"}),t(i,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1}),t(y,{visible:d.visible,"onUpdate:visible":V[2]||(V[2]=S=>d.visible=S),placement:"top"},{reference:e(()=>[t(r,{onClick:V[1]||(V[1]=S=>d.visible=!0)},{default:e(()=>[c]),_:1})]),default:e(()=>[t(N,{align:"items-top",gap:"var(--md)"},{default:e(()=>[t(M,{type:"warning",size:"lg",class:"no-shrink"},{default:e(()=>[t(T)]),_:1}),t(N,{dir:"vertical",gap:"var(--xxs)"},{default:e(()=>[F,k,t(N,{block:"",full:"",align:"items-right",class:"m-t-md"},{default:e(()=>[t(r,{type:"link",size:"sm",class:"static",onClick:V[0]||(V[0]=S=>d.visible=!1)},{default:e(()=>[w]),_:1}),t(r,{type:"primary",size:"sm",class:"static",onClick:d.btnClick},{default:e(()=>[h]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:m}=A,{ref:s}=A,{HlMessage:f}=H,{TwoWarning:_}=G;return P({render:E},m({setup(d,{expose:V}){V();const r=s(!1),i=s([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"}]),y={visible:r,gridData:i,btnClick:()=>{r.value=!1,f("\u5220\u9664\u6210\u529F")},ref:s,HlMessage:f,TwoWarning:_};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}))}(),"hl-demo6":function(){const{renderList:n,Fragment:o,openBlock:e,createElementBlock:t,createTextVNode:g,resolveComponent:b,withCtx:v,createVNode:a,createElementVNode:D}=A,F=g(" Click to open tooltip "),k=D("span",null," Some content ",-1);function w(m,s){const f=b("hl-button"),_=b("hl-popover");return e(),t(o,null,[D("div",null,[(e(),t(o,null,n(3,p=>a(f,{key:p,class:"m-r-md",onMouseover:s[0]||(s[0]=d=>m.buttonRef=d.currentTarget),onClick:s[1]||(s[1]=d=>m.visible=!m.visible)},{default:v(()=>[F]),_:2},1024)),64))]),a(_,{ref:"tooltipRef",visible:m.visible,"onUpdate:visible":s[2]||(s[2]=p=>m.visible=p),"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":m.buttonRef,"virtual-triggering":"",trigger:"click","popper-class":"singleton-tooltip"},{default:v(()=>[k]),_:1},8,["visible","virtual-ref"])],64)}const{defineComponent:h}=A,{ref:c}=A;return P({render:w},h({setup(m,{expose:s}){s();const f=c(),_=c(),p=c(!1),d={buttonRef:f,tooltipRef:_,visible:p,ref:c};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}))}(),"hl-demo7":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,openBlock:g,createBlock:b}=A,v=n("click \u6FC0\u6D3B");function a(h,c){const E=o("hl-button"),m=o("hl-option"),s=o("hl-select"),f=o("hl-time-select"),_=o("hl-date-picker"),p=o("hl-popover");return g(),b(p,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click","outside-ignore":h.outsideIgnore},{reference:e(()=>[t(E,{class:"m-r-md"},{default:e(()=>[v]),_:1})]),default:e(()=>[t(s,{ref:"selecRef",modelValue:h.selectVal,"onUpdate:modelValue":c[0]||(c[0]=d=>h.selectVal=d),class:"m-b-md"},{default:e(()=>[t(m,{value:"1",label:"1"}),t(m,{value:"2",label:"2"}),t(m,{value:"3",label:"3"})]),_:1},8,["modelValue"]),t(f,{ref:"timeSelecRef",modelValue:h.timeSelectVal,"onUpdate:modelValue":c[1]||(c[1]=d=>h.timeSelectVal=d),class:"m-b-md"},null,8,["modelValue"]),t(_,{ref:"timePickerRef",modelValue:h.timePickerVal,"onUpdate:modelValue":c[2]||(c[2]=d=>h.timePickerVal=d),class:"m-b-md"},null,8,["modelValue"])]),_:1},8,["outside-ignore"])}const{defineComponent:D}=A,{ref:F,computed:k}=A;return P({render:a},D({setup(h,{expose:c}){c();const E=F(),m=F(),s=F(),f=F(""),_=F(""),p=F(""),d=k(()=>{var r,i,x;return[(r=E.value)==null?void 0:r.popperPaneRef,(i=s.value)==null?void 0:i.popperPaneRef,(x=m.value)==null?void 0:x.popperPaneRef]}),V={selecRef:E,timeSelecRef:m,timePickerRef:s,selectVal:f,timeSelectVal:_,timePickerVal:p,outsideIgnore:d,ref:F,computed:k};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}))}()}},J=u("h1",null,"Popover \u6C14\u6CE1\u5F39\u6846",-1),K=u("p",null,"\u70B9\u51FB/\u9F20\u6807\u79FB\u5165\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u5361\u7247\u6D6E\u5C42\u3002",-1),Y=u("div",{class:"doc-tip"},[u("p",null,[u("em",null,[u("strong",null,"\u63D0\u793A")])]),u("p",null,"Popover \u5185\u4E0D\u652F\u6301 router-link \u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528 vm.$router.push \u4EE3\u66FF\u3002"),u("p",null,[l("Popover \u5185\u4E0D\u652F\u6301 disabled form \u5143\u7D20\uFF0C\u53C2\u8003 "),u("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter"},"MDN"),l("\uFF0C \u8BF7\u5728 disabled form \u5143\u7D20\u5916\u5C42\u6DFB\u52A0\u4E00\u5C42\u5305\u88F9\u5143\u7D20\u3002")])],-1),Z=u("div",null,[u("p",null,[u("code",null,"trigger"),l("\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u4F55\u65F6\u89E6\u53D1 Popover\uFF0C\u652F\u6301\u56DB\u79CD\u89E6\u53D1\u65B9\u5F0F\uFF1A"),u("code",null,"hover"),l("\uFF0C"),u("code",null,"click"),l("\uFF0C"),u("code",null,"focus"),l(" \u548C "),u("code",null,"contextmenu"),l("\u3002\u5982\u679C\u4F60\u60F3\u624B\u52A8\u63A7\u5236\u5B83\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E "),u("code",null,"v-model:visible"),l("\u3002\u5BF9\u4E8E\u89E6\u53D1 Popover \u7684\u5143\u7D20\uFF0C\u6709\u4E24\u79CD\u5199\u6CD5\uFF1A\u4F7F\u7528 "),u("code",null,"#reference"),l(" \u7684\u5177\u540D\u63D2\u69FD\uFF0C\u6216\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u4EE4"),u("code",null,"v-popover"),l("\u6307\u5411 Popover \u7684\u7D22\u5F15"),u("code",null,"ref"),l("\u3002")])],-1),ee=u("pre",null,[u("code",{class:"html"},` <template>
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

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

<\/script>
`)],-1),te=L('<h2 id="xu-ni-chu-fa"><a class="header-anchor" href="#xu-ni-chu-fa"></a> \u865A\u62DF\u89E6\u53D1</h2><p>Popover \u53EF\u4EE5\u7531\u865A\u62DF\u5143\u7D20\u89E6\u53D1\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5C31\u5F88\u9002\u5408\u4F7F\u7528\u5728\u89E6\u53D1\u5143\u7D20\u548C\u5C55\u793A\u5185\u5BB9\u5143\u7D20\u662F\u5206\u5F00\u7684\u573A\u666F\u3002\u901A\u5E38\u6211\u4EEC\u4F7F\u7528 <code>#reference</code> \u6765\u653E\u7F6E\u6211\u4EEC\u7684\u89E6\u53D1\u5143\u7D20\uFF0C \u7528 <code>triggering-element</code> API\uFF0C\u60A8\u53EF\u4EE5\u4EFB\u610F\u8BBE\u7F6E\u60A8\u7684\u89E6\u53D1\u5143\u7D20 \u4F46\u6CE8\u610F\u5230\u89E6\u53D1\u5143\u7D20\u5E94\u8BE5\u662F\u63A5\u53D7 <code>mouse</code> \u548C <code>keyboard</code> \u4E8B\u4EF6\u7684\u5143\u7D20\u3002</p><div class="doc-tip warning"><p>\u8B66\u544A\uFF1A v-popover \u5C06\u88AB\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 virtual-ref \u4F5C\u4E3A\u66FF\u4EE3\u3002</p></div><div class="doc-tip"><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u865A\u62DF\u89E6\u53D1\u7684 tooltip \u662F\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u4F60\u5FC5\u987B\u81EA\u5DF1\u53BB\u63A7\u5236 tooltip \u662F\u5426\u663E\u793A\uFF0C\u4F60\u5C06\u65E0\u6CD5\u901A\u8FC7\u70B9\u51FB\u7A7A\u767D\u5904\u6765\u5173\u95ED tooltip\u3002</p></div>',4),ue=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),oe=u("h2",{id:"fang-wei"},[u("a",{class:"header-anchor",href:"#fang-wei"}),l(" \u65B9\u4F4D")],-1),ne=u("p",null,"\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B 9 \u79CD\u4E0D\u540C\u65B9\u5411\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u5B8C\u6574\u793A\u4F8B\u6765\u9009\u62E9\u4F60\u60F3\u8981\u7684\u6548\u679C\u3002",-1),le=u("div",null,[u("p",null,[l("\u4F7F\u7528"),u("code",null,"content"),l("\u5C5E\u6027\u6765\u51B3\u5B9A"),u("code",null,"hover"),l("\u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002\u7531"),u("code",null,"placement"),l("\u5C5E\u6027\u51B3\u5B9A\u5C55\u793A\u6548\u679C\uFF1A"),u("code",null,"placement"),l("\u5C5E\u6027\u503C\u4E3A\uFF1A"),u("code",null,"\u65B9\u5411-\u5BF9\u9F50\u4F4D\u7F6E"),l("\uFF1B\u56DB\u4E2A\u65B9\u5411\uFF1A"),u("code",null,"top"),l("\u3001"),u("code",null,"left"),l("\u3001"),u("code",null,"right"),l("\u3001"),u("code",null,"bottom"),l("\uFF1B\u4E09\u79CD\u5BF9\u9F50\u4F4D\u7F6E\uFF1A"),u("code",null,"start"),l(", "),u("code",null,"end"),l("\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002\u5982"),u("code",null,'placement="left-end"'),l("\uFF0C\u5219\u63D0\u793A\u4FE1\u606F\u51FA\u73B0\u5728\u76EE\u6807\u5143\u7D20\u7684\u5DE6\u4FA7\uFF0C\u4E14\u63D0\u793A\u4FE1\u606F\u7684\u5E95\u90E8\u4E0E\u76EE\u6807\u5143\u7D20\u7684\u5E95\u90E8\u5BF9\u9F50\u3002")])],-1),re=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),ce=u("h2",{id:"shen-se-yang-shi"},[u("a",{class:"header-anchor",href:"#shen-se-yang-shi"}),l(" \u6DF1\u8272\u6837\u5F0F")],-1),de=u("p",null,[l("\u901A\u8FC7\u8BBE\u7F6E"),u("code",null,"effect"),l("\u5C5E\u6027 \u4E3A "),u("code",null,"dark"),l(" \u6765\u6539\u53D8\u4E3A\u6DF1\u8272\u6837\u5F0F\uFF0C\u901A\u5E38\u7528\u4E8E\u8868\u73B0 Tooltip \u7684\u6548\u679C\u3002")],-1),se=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),ie=u("h2",{id:"tooltip-wen-zi-ti-shi"},[u("a",{class:"header-anchor",href:"#tooltip-wen-zi-ti-shi"}),l(" Tooltip \u6587\u5B57\u63D0\u793A")],-1),ae=u("p",null,[l("Popover \u517C\u5177 Tooltip \u7684\u529F\u80FD\uFF0C\u4F7F\u7528"),u("code",null,"tooltip"),l(" \u5C5E\u6027\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A Tooltip\u3002")],-1),pe=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),me=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),l(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),Fe=u("p",null,"\u53EF\u4EE5\u5728 Popover \u4E2D\u5D4C\u5957\u591A\u79CD\u7C7B\u578B\u4FE1\u606F\uFF0C\u4EE5\u4E0B\u4E3A\u5D4C\u5957\u8868\u683C\u7684\u4F8B\u5B50\u3002",-1),he=u("div",null,[u("p",null,[l("\u5229\u7528\u5206\u53D1\u53D6\u4EE3"),u("code",null,"content"),l("\u5C5E\u6027")])],-1),Ee=u("pre",null,[u("code",{class:"html"},` <template>
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

<script setup lang="ts">
import { ref } from 'vue'
import { HlMessage } from 'hongluan-ui'
import { TwoWarning } from '@hongluan-ui/icons'

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

<\/script>
`)],-1),fe=u("h2",{id:"dan-li-mo-shi"},[u("a",{class:"header-anchor",href:"#dan-li-mo-shi"}),l(" \u5355\u4F8B\u6A21\u5F0F")],-1),_e=u("p",null,"Popover \u53EF\u4EE5\u4F5C\u4E3A\u5355\u4F8B\uFF0C\u4E5F\u5C31\u662F\u662F\u8BF4\u4F60\u53EF\u4EE5\u540C\u65F6\u6709\u591A\u4E2A\u89E6\u53D1\u540C\u4E00\u4E2A popover \u7684\u89E6\u53D1\u5143\u7D20\uFF0C\u8FD9\u4E2A\u529F\u80FD\u662F\u5728 \u865A\u62DF\u89E6\u53D1 \u7684\u57FA\u7840\u4E0A\u5F00\u53D1\u7684\u3002",-1),Be=u("div",{class:"doc-tip"},[u("p",null,"\u5DF2\u77E5\u95EE\u9898\uFF1A\u5F53\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u65F6\uFF0Ctooltip \u7684\u89E6\u53D1\u5143\u7D20\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u53D1\u751F\u5F39\u8DF3\u3002")],-1),ge=u("pre",null,[u("code",{class:"html"},` <template>
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

<script setup lang="ts">
import { ref } from 'vue'


const buttonRef = ref()
const tooltipRef = ref()

const visible = ref(false)

<\/script>

`)],-1),ve=u("h2",{id:"zu-zhi-dan-chuang-zi-dong-yin-cang"},[u("a",{class:"header-anchor",href:"#zu-zhi-dan-chuang-zi-dong-yin-cang"}),l(" \u963B\u6B62\u5F39\u7A97\u81EA\u52A8\u9690\u85CF")],-1),De=u("p",null,[l("Popover \u5185\u5D4C\u5165Select\uFF0CDatePicker\uFF0CTimeSelect\u7B49\u5177\u6709"),u("code",null,"body"),l("\u5185\u5F39\u7A97\u7684\u7EC4\u4EF6\u65F6\uFF0C\u70B9\u51FB\u5F39\u7A97\u5185\u5BB9\u4F1A\u5BFC\u81F4Popover\u81EA\u52A8\u9690\u85CF\u3002\u4E3A\u6B64\u60A8\u67092\u79CD\u65B9\u6CD5\uFF1A1\uFF09\u8BBE\u7F6Eteleported\u5C5E\u6027\u4E3Afalse\uFF1B2\uFF09\u901A\u8FC7\u8BBE\u7F6E"),u("code",null,"outside-ignore"),l("\u5C5E\u6027\u4EE5\u963B\u6B62\u6B64\u884C\u4E3A\u3002")],-1),be=u("div",null,[u("p",null,[u("code",null,"outside-ignore"),l("\u5C5E\u6027\u6F14\u793A")])],-1),Ce=u("pre",null,[u("code",{class:"html"},` <template>
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

<script setup lang="ts">
import { ref, computed } from 'vue'

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
<\/script>
`)],-1),Ae=L('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u65B9\u5F0F\u3002</td><td>string</td><td>click/focus/hover/contextmenu</td><td>click</td></tr><tr><td>effect</td><td>\u9ED8\u8BA4\u63D0\u4F9B\u7684\u4E3B\u9898</td><td>string</td><td>dark/light</td><td>light</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tooltip</td><td>\u662F\u5426\u4E3A tooltip\u3002\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0Ctrigger\u81EA\u52A8\u53D8\u66F4\u4E3Ahover\uFF0C\u4E0D\u53EF\u66F4\u6539\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>content</td><td>\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>slot</code> \u4F20\u5165 DOM</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u6700\u5C0F\u5BBD\u5EA6 150px</td></tr><tr><td>placement</td><td>\u51FA\u73B0\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover \u662F\u5426\u53EF\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>\u72B6\u6001\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>transition</td><td>\u5B9A\u4E49\u6E10\u53D8\u52A8\u753B</td><td>string</td><td>\u2014</td><td>fade-in</td></tr><tr><td>show-arrow</td><td>\u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/">popper.js</a> \u7684\u53C2\u6570</td><td>Object</td><td>\u53C2\u8003 <a href="https://popper.js.org/docs/v2/">popper.js</a> \u6587\u6863</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-style</td><td>\u4E3A popper \u6DFB\u52A0\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-after</td><td>\u5EF6\u8FDF\u51FA\u73B0\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u5173\u95ED\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>200</td></tr><tr><td>auto-close</td><td>Tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u9690\u85CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>teleported</td><td>Popover\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>virtual-triggering</td><td>\u662F\u5426\u4E3A\u865A\u62DF\u89E6\u53D1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>virtual-ref</td><td>\u89E6\u53D1\u5F39\u7A97\u7684\u5143\u7D20\u5F15\u7528</td><td>HTMLElement</td><td>\u2014</td><td>-</td></tr><tr><td>outside-ignore</td><td>\u963B\u6B62\u64CD\u4F5C\u5F39\u7A97\u5185\u5143\u7D20\u5BFC\u81F4\u5F39\u7A97\u81EA\u52A8\u9690\u85CF</td><td>MaybeElementRef[]</td><td>\u2014</td><td>[]</td></tr><tr><td>tabindex</td><td>Popover \u7EC4\u4EF6\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Popover \u5185\u5D4C HTML \u6587\u672C</td></tr><tr><td>reference</td><td>\u89E6\u53D1 Popover \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>show</td><td>\u663E\u793A\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',6);function ke(n,o,e,t,g,b){const v=R("hl-demo0"),a=R("demo-block"),D=R("hl-demo1"),F=R("hl-demo2"),k=R("hl-demo3"),w=R("hl-demo4"),h=R("hl-demo5"),c=R("hl-demo6"),E=R("hl-demo7"),m=R("right-nav");return I(),W(Q,null,[u("section",null,[J,K,Y,C(a,{fs:""},{source:B(()=>[C(v)]),highlight:B(()=>[ee]),default:B(()=>[Z]),_:1}),te,C(a,{fs:""},{source:B(()=>[C(D)]),highlight:B(()=>[ue]),_:1}),oe,ne,C(a,{fs:""},{source:B(()=>[C(F)]),highlight:B(()=>[re]),default:B(()=>[le]),_:1}),ce,de,C(a,{fs:""},{source:B(()=>[C(k)]),highlight:B(()=>[se]),_:1}),ie,ae,C(a,{fs:""},{source:B(()=>[C(w)]),highlight:B(()=>[pe]),_:1}),me,Fe,C(a,{fs:""},{source:B(()=>[C(h)]),highlight:B(()=>[Ee]),default:B(()=>[he]),_:1}),fe,_e,Be,C(a,{fs:""},{source:B(()=>[C(c)]),highlight:B(()=>[ge]),_:1}),ve,De,C(a,{fs:""},{source:B(()=>[C(E)]),highlight:B(()=>[Ce]),default:B(()=>[be]),_:1}),Ae]),C(m)],64)}var Te=X(q,[["render",ke]]);export{Te as default};
