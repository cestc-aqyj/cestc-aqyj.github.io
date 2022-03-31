var L=Object.defineProperty;var H=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var M=(o,n,t)=>n in o?L(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,N=(o,n)=>{for(var t in n||(n={}))S.call(n,t)&&M(o,t,n[t]);if(H)for(var t of H(n))$.call(n,t)&&M(o,t,n[t]);return o};import{F as y,L as U,W,Q as u,X as v,P as F,a2 as I,aJ as x,M as l,o as O}from"./vue.fdea90c3.js";import{_ as Q,H as j}from"./index.b5a94da0.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const X={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,Fragment:E,openBlock:_,createElementBlock:f}=x,d=o("hover \u6FC0\u6D3B"),B=o("click \u6FC0\u6D3B"),g=o("focus \u6FC0\u6D3B"),b=o("\u53F3\u952E\u6FC0\u6D3B"),C=o("\u624B\u5DE5\u6FC0\u6D3B");function A(s,D){const k=n("hl-button"),r=n("hl-popover");return _(),f(E,null,[e(r,{placement:"top-start",title:"\u6807\u9898",width:200,trigger:"hover",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[d]),_:1})]),_:1}),e(r,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"click",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[B]),_:1})]),_:1}),e(r,{ref:"popover",placement:"right",title:"\u6807\u9898",width:200,trigger:"focus",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[g]),_:1})]),_:1},512),e(r,{placement:"bottom",title:"\u6807\u9898",width:200,trigger:"contextmenu",content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[b]),_:1})]),_:1}),e(r,{visible:s.visible,"onUpdate:visible":D[1]||(D[1]=a=>s.visible=a),placement:"bottom",title:"Title",width:200,content:"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9,\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u3002"},{reference:t(()=>[e(k,{class:"m-r-md",onClick:D[0]||(D[0]=a=>s.visible=!s.visible)},{default:t(()=>[C]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:i,ref:m}=x,h=i({setup(){return{visible:m(!1)}}});return N({render:A},h)}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:n,resolveDirective:t,withCtx:e,openBlock:E,createBlock:_,withDirectives:f,createElementVNode:d,createVNode:B,Fragment:g,createElementBlock:b}=x,C=o(" Click me "),A=d("span",null," Some content ",-1);function i(r,a){const w=n("hl-button"),c=n("hl-popover"),p=t("click-outside");return E(),b(g,null,[f((E(),_(w,{ref:"buttonRef"},{default:e(()=>[C]),_:1})),[[p,r.onClickOutside]]),B(c,{ref:"popoverRef","virtual-ref":r.buttonRef,trigger:"click",title:"With title","virtual-triggering":""},{default:e(()=>[A]),_:1},8,["virtual-ref"])],64)}const{defineComponent:m,ref:h,unref:s}=x,{ClickOutside:D}=j,k=m({directives:{ClickOutside:D},setup(){const r=h(),a=h();return{buttonRef:r,popoverRef:a,onClickOutside:()=>{var c,p;(p=(c=s(a).popperRef)==null?void 0:c.delayHide)==null||p.call(c)}}}});return N({render:i},k)}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,openBlock:E,createBlock:_}=x,f=o("\u4E0A\u5DE6"),d=o("\u4E0A\u4E2D"),B=o("\u4E0A\u53F3"),g=o("\u53F3\u4E0A"),b=o("\u53F3\u4E2D"),C=o("\u53F3\u4E0B"),A=o("\u5DE6\u4E0A"),i=o("\u5DE6\u4E2D"),m=o("\u5DE6\u4E0B"),h=o("\u4E0B\u5DE6"),s=o("\u4E0B\u4E2D"),D=o("\u4E0B\u53F3");function k(a,w){const c=n("hl-button"),p=n("hl-popover"),T=n("hl-group"),V=n("hl-col"),R=n("hl-row");return E(),_(R,{align:"center middle",gap:"var(--lg)"},{default:t(()=>[e(V,{span:"col-12",class:"display-flex items-right items-bottom"},{default:t(()=>[e(T,{merge:"",indent:""},{default:t(()=>[e(p,{class:"item",trigger:"click",content:"top-start",effect:"dark",placement:"top-start"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[f]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"top",effect:"dark",placement:"top"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[d]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"top-end",effect:"dark",placement:"top-end"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[B]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{span:"col-12",class:"display-flex"},{default:t(()=>[e(T,{dir:"vertical",merge:"",indent:""},{default:t(()=>[e(p,{class:"item",trigger:"click",content:"right-start",effect:"dark",placement:"right-start"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[g]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"right",effect:"dark",placement:"right"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[b]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"right-end",effect:"dark",placement:"right-end"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[C]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{span:"col-12",class:"display-flex items-right"},{default:t(()=>[e(T,{dir:"vertical",merge:"",indent:""},{default:t(()=>[e(p,{class:"item",trigger:"click",content:"left-start",effect:"dark",placement:"left-start"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[A]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"left",effect:"dark",placement:"left"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[i]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"left-end",effect:"dark",placement:"left-end"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[m]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{span:"col-12",class:"display-flex"},{default:t(()=>[e(T,{merge:"",indent:""},{default:t(()=>[e(p,{class:"item",trigger:"click",content:"bottom-start",effect:"dark",placement:"bottom-start"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[h]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"bottom",effect:"dark",placement:"bottom"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[s]),_:1})]),_:1}),e(p,{class:"item",trigger:"click",content:"bottom-end",effect:"dark",placement:"bottom-end"},{reference:t(()=>[e(c,{class:"group-item"},{default:t(()=>[D]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:k},{})}(),"hl-demo3":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,Fragment:E,openBlock:_,createElementBlock:f}=x,d=o("Dark"),B=o("Default");function g(C,A){const i=n("hl-button"),m=n("hl-popover");return _(),f(E,null,[e(m,{effect:"dark",content:"Top Center",placement:"top"},{reference:t(()=>[e(i,{class:"m-r-md"},{default:t(()=>[d]),_:1})]),_:1}),e(m,{content:"Bottom Center",placement:"bottom"},{reference:t(()=>[e(i,{class:"m-r-md"},{default:t(()=>[B]),_:1})]),_:1})],64)}return N({render:g},{})}(),"hl-demo4":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,Fragment:E,openBlock:_,createElementBlock:f}=x,d=o("Light"),B=o("Dark");function g(C,A){const i=n("hl-button"),m=n("hl-popover");return _(),f(E,null,[e(m,{trigger:"hover",content:"Top Center",placement:"top",tooltip:""},{reference:t(()=>[e(i,{class:"m-r-md"},{default:t(()=>[d]),_:1})]),_:1}),e(m,{trigger:"hover",effect:"dark",content:"Top center",placement:"top",tooltip:""},{reference:t(()=>[e(i,{class:"m-r-md"},{default:t(()=>[B]),_:1})]),_:1})],64)}return N({render:g},{})}(),"hl-demo5":function(){const{createTextVNode:o,resolveComponent:n,withCtx:t,createVNode:e,createElementVNode:E,Fragment:_,openBlock:f,createElementBlock:d}=x,B=o("\u6253\u5F00\u4E00\u4E2ATable\u6C14\u6CE1"),g=E("h5",null,"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F",-1),b=E("div",null,"\u5220\u9664\u540E\u53EF\u8FDB\u5165\u56DE\u6536\u7AD9\u627E\u56DE\u6B64\u6570\u636E\u3002",-1),C=o("\u53D6\u6D88"),A=o("\u786E\u5B9A"),i=o("\u6784\u5EFA\u4E00\u4E2AConfirm\u6C14\u6CE1");function m(r,a){const w=n("hl-button"),c=n("hl-table-column"),p=n("hl-table"),T=n("hl-popover"),V=n("two-warning"),R=n("hl-icon"),P=n("hl-group");return f(),d(_,null,[e(T,{placement:"right",width:400,trigger:"click",class:"m-r-lg"},{reference:t(()=>[e(w,{class:"m-r-md"},{default:t(()=>[B]),_:1})]),default:t(()=>[e(p,{data:r.gridData,stripe:"",class:"compact"},{default:t(()=>[e(c,{width:"120",property:"date",label:"\u65E5\u671F"}),e(c,{width:"100",property:"name",label:"\u59D3\u540D"}),e(c,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1}),e(T,{visible:r.visible,"onUpdate:visible":a[2]||(a[2]=z=>r.visible=z),placement:"top"},{reference:t(()=>[e(w,{onClick:a[1]||(a[1]=z=>r.visible=!0)},{default:t(()=>[i]),_:1})]),default:t(()=>[e(P,{align:"items-top",gap:"var(--md)"},{default:t(()=>[e(R,{type:"warning",size:"lg",class:"no-shrink"},{default:t(()=>[e(V)]),_:1}),e(P,{dir:"vertical",gap:"var(--xxs)"},{default:t(()=>[g,b,e(P,{block:"",full:"",align:"items-right",class:"m-t-md"},{default:t(()=>[e(w,{type:"link",size:"sm",class:"static",onClick:a[0]||(a[0]=z=>r.visible=!1)},{default:t(()=>[C]),_:1}),e(w,{type:"primary",size:"sm",class:"static",onClick:r.btnClick},{default:t(()=>[A]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["visible"])],64)}const{defineComponent:h,ref:s}=x,{HlMessage:D}=j,k=h({setup(){const r=s(!1),a=s([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02"}]);return{visible:r,gridData:a,btnClick:()=>{r.value=!1,D("\u5220\u9664\u6210\u529F")}}}});return N({render:m},k)}(),"hl-demo6":function(){const{renderList:o,Fragment:n,openBlock:t,createElementBlock:e,createTextVNode:E,resolveComponent:_,withCtx:f,createVNode:d,createElementVNode:B}=x,g=E(" Click to open tooltip "),b=B("span",null," Some content ",-1);function C(h,s){const D=_("hl-button"),k=_("hl-popover");return t(),e(n,null,[B("div",null,[(t(),e(n,null,o(3,r=>d(D,{key:r,class:"m-r-md",onMouseover:s[0]||(s[0]=a=>h.buttonRef=a.currentTarget),onClick:s[1]||(s[1]=a=>h.visible=!h.visible)},{default:f(()=>[g]),_:2},1024)),64))]),d(k,{ref:"tooltipRef",visible:h.visible,"onUpdate:visible":s[2]||(s[2]=r=>h.visible=r),"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":h.buttonRef,"virtual-triggering":"",trigger:"click","popper-class":"singleton-tooltip"},{default:f(()=>[b]),_:1},8,["visible","virtual-ref"])],64)}const{defineComponent:A,ref:i}=x,m=A({setup(){const h=i(),s=i(),D=i(!1);return{buttonRef:h,tooltipRef:s,visible:D}}});return N({render:C},m)}()}},G=u("h1",null,"Popover \u6C14\u6CE1\u5F39\u6846",-1),J=u("p",null,"\u70B9\u51FB/\u9F20\u6807\u79FB\u5165\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u5361\u7247\u6D6E\u5C42\u3002",-1),q=u("div",{class:"doc-tip"},[u("p",null,[u("em",null,[u("strong",null,"\u63D0\u793A")])]),u("p",null,"Popover \u5185\u4E0D\u652F\u6301 router-link \u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528 vm.$router.push \u4EE3\u66FF\u3002"),u("p",null,[l("Popover \u5185\u4E0D\u652F\u6301 disabled form \u5143\u7D20\uFF0C\u53C2\u8003 "),u("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter"},"MDN"),l("\uFF0C \u8BF7\u5728 disabled form \u5143\u7D20\u5916\u5C42\u6DFB\u52A0\u4E00\u5C42\u5305\u88F9\u5143\u7D20\u3002")])],-1),K=u("div",null,[u("p",null,[u("code",null,"trigger"),l("\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u4F55\u65F6\u89E6\u53D1 Popover\uFF0C\u652F\u6301\u56DB\u79CD\u89E6\u53D1\u65B9\u5F0F\uFF1A"),u("code",null,"hover"),l("\uFF0C"),u("code",null,"click"),l("\uFF0C"),u("code",null,"focus"),l(" \u548C "),u("code",null,"contextmenu"),l("\u3002\u5982\u679C\u4F60\u60F3\u624B\u52A8\u63A7\u5236\u5B83\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E "),u("code",null,"v-model:visible"),l("\u3002\u5BF9\u4E8E\u89E6\u53D1 Popover \u7684\u5143\u7D20\uFF0C\u6709\u4E24\u79CD\u5199\u6CD5\uFF1A\u4F7F\u7528 "),u("code",null,"#reference"),l(" \u7684\u5177\u540D\u63D2\u69FD\uFF0C\u6216\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u4EE4"),u("code",null,"v-popover"),l("\u6307\u5411 Popover \u7684\u7D22\u5F15"),u("code",null,"ref"),l("\u3002")])],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Z=O('<h2 id="xu-ni-chu-fa"><a class="header-anchor" href="#xu-ni-chu-fa"></a> \u865A\u62DF\u89E6\u53D1</h2><p>Popover \u53EF\u4EE5\u7531\u865A\u62DF\u5143\u7D20\u89E6\u53D1\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5C31\u5F88\u9002\u5408\u4F7F\u7528\u5728\u89E6\u53D1\u5143\u7D20\u548C\u5C55\u793A\u5185\u5BB9\u5143\u7D20\u662F\u5206\u5F00\u7684\u573A\u666F\u3002\u901A\u5E38\u6211\u4EEC\u4F7F\u7528 <code>#reference</code> \u6765\u653E\u7F6E\u6211\u4EEC\u7684\u89E6\u53D1\u5143\u7D20\uFF0C \u7528 <code>triggering-element</code> API\uFF0C\u60A8\u53EF\u4EE5\u4EFB\u610F\u8BBE\u7F6E\u60A8\u7684\u89E6\u53D1\u5143\u7D20 \u4F46\u6CE8\u610F\u5230\u89E6\u53D1\u5143\u7D20\u5E94\u8BE5\u662F\u63A5\u53D7 <code>mouse</code> \u548C <code>keyboard</code> \u4E8B\u4EF6\u7684\u5143\u7D20\u3002</p><div class="doc-tip warning"><p>\u8B66\u544A\uFF1A v-popover \u5C06\u88AB\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 virtual-ref \u4F5C\u4E3A\u66FF\u4EE3\u3002</p></div><div class="doc-tip"><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u865A\u62DF\u89E6\u53D1\u7684 tooltip \u662F\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u4F60\u5FC5\u987B\u81EA\u5DF1\u53BB\u63A7\u5236 tooltip \u662F\u5426\u663E\u793A\uFF0C\u4F60\u5C06\u65E0\u6CD5\u901A\u8FC7\u70B9\u51FB\u7A7A\u767D\u5904\u6765\u5173\u95ED tooltip\u3002</p></div>',4),tt=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),et=u("h2",{id:"fang-wei"},[u("a",{class:"header-anchor",href:"#fang-wei"}),l(" \u65B9\u4F4D")],-1),ut=u("p",null,"\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B 9 \u79CD\u4E0D\u540C\u65B9\u5411\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u5B8C\u6574\u793A\u4F8B\u6765\u9009\u62E9\u4F60\u60F3\u8981\u7684\u6548\u679C\u3002",-1),ot=u("div",null,[u("p",null,[l("\u4F7F\u7528"),u("code",null,"content"),l("\u5C5E\u6027\u6765\u51B3\u5B9A"),u("code",null,"hover"),l("\u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002\u7531"),u("code",null,"placement"),l("\u5C5E\u6027\u51B3\u5B9A\u5C55\u793A\u6548\u679C\uFF1A"),u("code",null,"placement"),l("\u5C5E\u6027\u503C\u4E3A\uFF1A"),u("code",null,"\u65B9\u5411-\u5BF9\u9F50\u4F4D\u7F6E"),l("\uFF1B\u56DB\u4E2A\u65B9\u5411\uFF1A"),u("code",null,"top"),l("\u3001"),u("code",null,"left"),l("\u3001"),u("code",null,"right"),l("\u3001"),u("code",null,"bottom"),l("\uFF1B\u4E09\u79CD\u5BF9\u9F50\u4F4D\u7F6E\uFF1A"),u("code",null,"start"),l(", "),u("code",null,"end"),l("\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002\u5982"),u("code",null,'placement="left-end"'),l("\uFF0C\u5219\u63D0\u793A\u4FE1\u606F\u51FA\u73B0\u5728\u76EE\u6807\u5143\u7D20\u7684\u5DE6\u4FA7\uFF0C\u4E14\u63D0\u793A\u4FE1\u606F\u7684\u5E95\u90E8\u4E0E\u76EE\u6807\u5143\u7D20\u7684\u5E95\u90E8\u5BF9\u9F50\u3002")])],-1),nt=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),lt=u("h2",{id:"shen-se-yang-shi"},[u("a",{class:"header-anchor",href:"#shen-se-yang-shi"}),l(" \u6DF1\u8272\u6837\u5F0F")],-1),rt=u("p",null,[l("\u901A\u8FC7\u8BBE\u7F6E"),u("code",null,"effect"),l("\u5C5E\u6027 \u4E3A "),u("code",null,"dark"),l(" \u6765\u6539\u53D8\u4E3A\u6DF1\u8272\u6837\u5F0F\uFF0C\u901A\u5E38\u7528\u4E8E\u8868\u73B0 Tooltip \u7684\u6548\u679C\u3002")],-1),ct=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),dt=u("h2",{id:"tooltip-wen-zi-ti-shi"},[u("a",{class:"header-anchor",href:"#tooltip-wen-zi-ti-shi"}),l(" Tooltip \u6587\u5B57\u63D0\u793A")],-1),st=u("p",null,[l("Popover \u517C\u5177 Tooltip \u7684\u529F\u80FD\uFF0C\u4F7F\u7528"),u("code",null,"tooltip"),l(" \u5C5E\u6027\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A Tooltip\u3002")],-1),it=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),at=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),l(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),pt=u("p",null,"\u53EF\u4EE5\u5728 Popover \u4E2D\u5D4C\u5957\u591A\u79CD\u7C7B\u578B\u4FE1\u606F\uFF0C\u4EE5\u4E0B\u4E3A\u5D4C\u5957\u8868\u683C\u7684\u4F8B\u5B50\u3002",-1),mt=u("div",null,[u("p",null,[l("\u5229\u7528\u5206\u53D1\u53D6\u4EE3"),u("code",null,"content"),l("\u5C5E\u6027")])],-1),ht=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Ft=u("h2",{id:"dan-li-mo-shi"},[u("a",{class:"header-anchor",href:"#dan-li-mo-shi"}),l(" \u5355\u4F8B\u6A21\u5F0F")],-1),Et=u("p",null,"Popover \u53EF\u4EE5\u4F5C\u4E3A\u5355\u4F8B\uFF0C\u4E5F\u5C31\u662F\u662F\u8BF4\u4F60\u53EF\u4EE5\u540C\u65F6\u6709\u591A\u4E2A\u89E6\u53D1\u540C\u4E00\u4E2A popover \u7684\u89E6\u53D1\u5143\u7D20\uFF0C\u8FD9\u4E2A\u529F\u80FD\u662F\u5728 \u865A\u62DF\u89E6\u53D1 \u7684\u57FA\u7840\u4E0A\u5F00\u53D1\u7684\u3002",-1),ft=u("div",{class:"doc-tip"},[u("p",null,"\u5DF2\u77E5\u95EE\u9898\uFF1A\u5F53\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u65F6\uFF0Ctooltip \u7684\u89E6\u53D1\u5143\u7D20\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u53D1\u751F\u5F39\u8DF3\u3002")],-1),Bt=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),_t=O('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u65B9\u5F0F\u3002</td><td>string</td><td>click/focus/hover/contextmenu</td><td>click</td></tr><tr><td>effect</td><td>\u9ED8\u8BA4\u63D0\u4F9B\u7684\u4E3B\u9898</td><td>string</td><td>dark/light</td><td>light</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tooltip</td><td>\u662F\u5426\u4E3A tooltip\u3002\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0Ctrigger\u81EA\u52A8\u53D8\u66F4\u4E3Ahover\uFF0C\u4E0D\u53EF\u66F4\u6539\u3002</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>content</td><td>\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>slot</code> \u4F20\u5165 DOM</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u6700\u5C0F\u5BBD\u5EA6 150px</td></tr><tr><td>placement</td><td>\u51FA\u73B0\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>disabled</td><td>Popover \u662F\u5426\u53EF\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>visible / v-model:visible</td><td>\u72B6\u6001\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>transition</td><td>\u5B9A\u4E49\u6E10\u53D8\u52A8\u753B</td><td>string</td><td>\u2014</td><td>fade-in</td></tr><tr><td>show-arrow</td><td>\u662F\u5426\u663E\u793A Tooltip \u7BAD\u5934</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/docs/v2/">popper.js</a> \u7684\u53C2\u6570</td><td>Object</td><td>\u53C2\u8003 <a href="https://popper.js.org/docs/v2/">popper.js</a> \u6587\u6863</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>popper-class</td><td>\u4E3A popper \u6DFB\u52A0\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-after</td><td>\u5EF6\u8FDF\u51FA\u73B0\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>hide-after</td><td>\u5EF6\u8FDF\u5173\u95ED\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>200</td></tr><tr><td>auto-close</td><td>Tooltip \u51FA\u73B0\u540E\u81EA\u52A8\u9690\u85CF\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u9690\u85CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>teleported</td><td>Popover\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>virtual-triggering</td><td>\u662F\u5426\u4E3A\u865A\u62DF\u89E6\u53D1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>virtual-ref</td><td>\u89E6\u53D1\u5F39\u7A97\u7684\u5143\u7D20\u5F15\u7528</td><td>HTMLElement</td><td>\u2014</td><td>-</td></tr><tr><td>tabindex</td><td>Popover \u7EC4\u4EF6\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Popover \u5185\u5D4C HTML \u6587\u672C</td></tr><tr><td>reference</td><td>\u89E6\u53D1 Popover \u663E\u793A\u7684 HTML \u5143\u7D20</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>show</td><td>\u663E\u793A\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-enter</td><td>\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>hide</td><td>\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>before-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u524D\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>after-leave</td><td>\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>',6);function gt(o,n,t,e,E,_){const f=y("hl-demo0"),d=y("demo-block"),B=y("hl-demo1"),g=y("hl-demo2"),b=y("hl-demo3"),C=y("hl-demo4"),A=y("hl-demo5"),i=y("hl-demo6"),m=y("right-nav");return U(),W(I,null,[u("section",null,[G,J,q,v(d,{fs:""},{source:F(()=>[v(f)]),highlight:F(()=>[Y]),default:F(()=>[K]),_:1}),Z,v(d,{fs:""},{source:F(()=>[v(B)]),highlight:F(()=>[tt]),_:1}),et,ut,v(d,{fs:""},{source:F(()=>[v(g)]),highlight:F(()=>[nt]),default:F(()=>[ot]),_:1}),lt,rt,v(d,{fs:""},{source:F(()=>[v(b)]),highlight:F(()=>[ct]),_:1}),dt,st,v(d,{fs:""},{source:F(()=>[v(C)]),highlight:F(()=>[it]),_:1}),at,pt,v(d,{fs:""},{source:F(()=>[v(A)]),highlight:F(()=>[ht]),default:F(()=>[mt]),_:1}),Ft,Et,ft,v(d,{fs:""},{source:F(()=>[v(i)]),highlight:F(()=>[Bt]),_:1}),_t]),v(m)],64)}var xt=Q(X,[["render",gt]]);export{xt as default};
