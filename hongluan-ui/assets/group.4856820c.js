var at=Object.defineProperty;var L=Object.getOwnPropertySymbols;var st=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var O=(n,o,e)=>o in n?at(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,N=(n,o)=>{for(var e in o||(o={}))st.call(o,e)&&O(n,e,o[e]);if(L)for(var e of L(o))rt.call(o,e)&&O(n,e,o[e]);return n};import{H as k,o as dt,B as ct,C as u,v as p,M as r,Y as pt,_ as a,aw as it,ax as V}from"./vue.4f7e9041.js";import{_ as ht}from"./index.c59861f5.js";import"./hongluan.a52c900d.js";import"./highlight.e2508551.js";import"./hongluan-icons.01c6d80b.js";const mt={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,createVNode:o,createTextVNode:e,withCtx:t,createElementVNode:l,openBlock:i,createBlock:h}=V,s=e("\u641C \u7D22"),g=l("h5",null,"\u6D4B\u8BD5",-1),m=l("div",null," \u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08 ",-1);function f(B,F){const y=n("hl-input"),A=n("hl-button"),x=n("hl-group"),d=n("hl-col"),c=n("two-user-group"),b=n("hl-icon"),G=n("hl-row");return i(),h(G,{align:"middle"},{default:t(()=>[o(d,{span:"col"},{default:t(()=>[o(x,{class:"dom-area",gap:"var(--sm)","data-name":"Group"},{default:t(()=>[o(y,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),o(A,{type:"primary"},{default:t(()=>[s]),_:1})]),_:1})]),_:1}),o(d,{span:"col"},{default:t(()=>[o(x,{gap:"var(--md)",full:"",align:"middle",class:"dom-area","data-name":"Group"},{default:t(()=>[o(b,{type:"primary",size:"xl",class:"static",fill:"",radius:""},{default:t(()=>[o(c)]),_:1}),o(x,{dir:"vertical",class:"dom-area","data-name":"Group"},{default:t(()=>[g,m]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:f},{})}(),"hl-demo1":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:l,openBlock:i,createElementBlock:h}=V,s=n("Group 1"),g=n("Group 1"),m=n("Group 2"),f=n("Group 2"),E=n("Group 3"),B=n("Group 3");function F(A,x){const d=o("hl-button"),c=o("hl-group");return i(),h(l,null,[t(c,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:e(()=>[t(d,{type:"success"},{default:e(()=>[s]),_:1}),t(d,{type:"success"},{default:e(()=>[g]),_:1})]),_:1}),t(c,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:e(()=>[t(d,{type:"danger"},{default:e(()=>[m]),_:1}),t(d,{type:"danger"},{default:e(()=>[f]),_:1})]),_:1}),t(c,{merge:"",class:"bg-stripes",block:""},{default:e(()=>[t(d,{type:"primary"},{default:e(()=>[E]),_:1}),t(d,{type:"primary"},{default:e(()=>[B]),_:1})]),_:1})],64)}return N({render:F},{})}(),"hl-demo2":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,createElementVNode:l,openBlock:i,createBlock:h}=V,s=n("Group Item"),g=n("Group Item"),m=n("Group Item"),f=n("Group Item"),E=n("Group Item"),B=l("div",{style:{width:"100%"}},null,-1),F=n("Group Item");function y(x,d){const c=o("hl-button"),b=o("hl-group");return i(),h(b,{wrap:""},{default:e(()=>[t(c,{style:{width:"200px"},type:"primary",class:"m-t-sm m-r-sm"},{default:e(()=>[s]),_:1}),t(c,{style:{width:"200px"},type:"primary",class:"m-t-sm m-r-sm"},{default:e(()=>[g]),_:1}),t(c,{style:{width:"200px"},type:"primary",class:"m-t-sm m-r-sm"},{default:e(()=>[m]),_:1}),t(c,{style:{width:"200px"},type:"primary",class:"m-t-sm m-r-sm"},{default:e(()=>[f]),_:1}),t(c,{style:{width:"200px"},type:"primary",class:"m-t-sm m-r-sm"},{default:e(()=>[E]),_:1}),B,t(c,{style:{width:"200px"},type:"primary",class:"m-t-sm m-r-sm"},{default:e(()=>[F]),_:1})]),_:1})}return N({render:y},{})}(),"hl-demo3":function(){const{createElementVNode:n,createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:l,openBlock:i,createBlock:h}=V,s=n("p",null,"\u6A2A\u5411\u6392\u5217 horizontal",-1),g=o("Group Item"),m=o("Group Item"),f=n("p",null,"\u7EB5\u5411\u6392\u5217 vertical",-1),E=o("Group Item"),B=o("Group Item");function F(A,x){const d=e("hl-button"),c=e("hl-group"),b=e("hl-col"),G=e("hl-row");return i(),h(G,null,{default:t(()=>[l(b,{span:"col"},{default:t(()=>[s,l(c,{dir:"horizontal",gap:"var(--md)",class:"bg-stripes"},{default:t(()=>[l(d,{type:"primary"},{default:t(()=>[g]),_:1}),l(d,{type:"primary"},{default:t(()=>[m]),_:1})]),_:1})]),_:1}),l(b,{span:"col"},{default:t(()=>[f,l(c,{dir:"vertical",gap:"var(--md)",class:"bg-stripes"},{default:t(()=>[l(d,{type:"primary"},{default:t(()=>[E]),_:1}),l(d,{type:"primary"},{default:t(()=>[B]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:F},{})}(),"hl-demo4":function(){const{createElementVNode:n,createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:l,openBlock:i,createBlock:h}=V,s=n("p",null,"\u6A2A\u5411\u878D\u5408",-1),g=o("Group Item"),m=o("Group Item"),f=o("Group Item"),E=o("Group Item"),B=n("p",null,"\u7EB5\u5411\u878D\u5408",-1),F=o("Group Item"),y=o("Group Item"),A=o("Group Item"),x=o("Group Item");function d(b,G){const C=e("hl-button"),I=e("hl-group"),_=e("hl-col"),w=e("hl-row");return i(),h(w,null,{default:t(()=>[l(_,{span:"col"},{default:t(()=>[s,l(I,{dir:"horizontal",merge:""},{default:t(()=>[l(C,{type:"primary"},{default:t(()=>[g]),_:1}),l(C,{type:"primary"},{default:t(()=>[m]),_:1})]),_:1}),l(I,{dir:"horizontal",merge:"",block:"",class:"m-t-lg"},{default:t(()=>[l(C,{type:"primary",outline:""},{default:t(()=>[f]),_:1}),l(C,{type:"primary",outline:""},{default:t(()=>[E]),_:1})]),_:1})]),_:1}),l(_,{span:"col"},{default:t(()=>[B,l(I,{dir:"vertical",merge:""},{default:t(()=>[l(C,{type:"primary"},{default:t(()=>[F]),_:1}),l(C,{type:"primary"},{default:t(()=>[y]),_:1})]),_:1}),l(I,{dir:"vertical",merge:"",class:"m-l-lg"},{default:t(()=>[l(C,{type:"primary",outline:""},{default:t(()=>[A]),_:1}),l(C,{type:"primary",outline:""},{default:t(()=>[x]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:d},{})}(),"hl-demo5":function(){const{createElementVNode:n,createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:l,openBlock:i,createBlock:h}=V,s=n("p",null,"\u6A2A\u5411\u7F29\u8FDB\u878D\u5408",-1),g=o("Group Item"),m=o("Group Item"),f=n("p",null,"\u7EB5\u5411\u7F29\u8FDB\u878D\u5408",-1),E=o("Group Item"),B=o("Group Item"),F=n("p",null,[o("\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5177\u4F53\u6570\u503C"),n("code",null,'indent="-2px"'),o("\u6765\u7F29\u8FDB\u5143\u7D20")],-1),y=o("Group Item"),A=o("Group Item"),x=n("p",null,[o("\u6B63\u503C\u8BBE\u7F6E"),n("code",null,'indent="12px"'),o(),n("span",{class:"font-bold text-danger"},"\u4E0D\u63A8\u8350")],-1),d=o("Group Item"),c=o("Group Item");function b(C,I){const _=e("hl-button"),w=e("hl-group"),z=e("hl-col"),S=e("hl-row");return i(),h(S,null,{default:t(()=>[l(z,{span:"col-md-12"},{default:t(()=>[s,l(w,{dir:"horizontal",class:"m-t-sm",merge:"",indent:""},{default:t(()=>[l(_,{type:"primary",outline:""},{default:t(()=>[g]),_:1}),l(_,{type:"primary",outline:""},{default:t(()=>[m]),_:1})]),_:1})]),_:1}),l(z,{span:"col-md-12"},{default:t(()=>[f,l(w,{dir:"vertical",class:"m-t-sm",merge:"",indent:""},{default:t(()=>[l(_,{type:"primary",outline:""},{default:t(()=>[E]),_:1}),l(_,{type:"primary",outline:""},{default:t(()=>[B]),_:1})]),_:1})]),_:1}),l(z,{span:"col",class:"m-t-xl"},{default:t(()=>[F,l(w,{dir:"horizontal",class:"m-t-sm",merge:"",indent:"-2px"},{default:t(()=>[l(_,{type:"primary",style:{"border-width":"2px"},outline:""},{default:t(()=>[y]),_:1}),l(_,{type:"primary",style:{"border-width":"2px"},outline:""},{default:t(()=>[A]),_:1})]),_:1})]),_:1}),l(z,{span:"col",class:"m-t-xl"},{default:t(()=>[x,l(w,{dir:"horizontal",class:"m-t-sm",indent:"12px"},{default:t(()=>[l(_,{type:"primary",style:{"border-width":"2px"},outline:""},{default:t(()=>[d]),_:1}),l(_,{type:"primary",style:{"border-width":"2px"},outline:""},{default:t(()=>[c]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:b},{})}(),"hl-demo6":function(){const{createElementVNode:n,createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:l,openBlock:i,createBlock:h}=V,s=n("p",null,[n("code",null,"gap"),o("\u80FD\u66F4\u53CB\u597D\u7684\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u6392\u5E8F")],-1),g=o("Item 1"),m=o("Item 2"),f=o("Item 3"),E=o("Item 4"),B=n("p",null,[n("code",null,"indent"),o("\u65E0\u6CD5\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u53CB\u597D\u6392\u5E8F")],-1),F=o("Item 1"),y=o("Item 2"),A=o("Item 3"),x=o("Item 4");function d(b,G){const C=e("hl-button"),I=e("hl-group"),_=e("hl-col"),w=e("hl-row");return i(),h(w,null,{default:t(()=>[l(_,{span:"col-md-12"},{default:t(()=>[s,l(I,{dir:"horizontal",gap:"var(--md)",class:"m-t-sm"},{default:t(()=>[l(C,{type:"primary",class:"order-3"},{default:t(()=>[g]),_:1}),l(C,{type:"primary",class:"order-4"},{default:t(()=>[m]),_:1}),l(C,{type:"primary",class:"order-1"},{default:t(()=>[f]),_:1}),l(C,{type:"primary",class:"order-2"},{default:t(()=>[E]),_:1})]),_:1})]),_:1}),l(_,{span:"col-md-12"},{default:t(()=>[B,l(I,{dir:"horizontal",indent:"var(--md)",class:"m-t-sm"},{default:t(()=>[l(C,{type:"danger",class:"order-3"},{default:t(()=>[F]),_:1}),l(C,{type:"danger",class:"order-4"},{default:t(()=>[y]),_:1}),l(C,{type:"danger",class:"order-1"},{default:t(()=>[A]),_:1}),l(C,{type:"danger",class:"order-2"},{default:t(()=>[x]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:d},{})}(),"hl-demo7":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,createElementVNode:l,Fragment:i,openBlock:h,createElementBlock:s}=V,g=n("Top"),m=n("middle"),f=n("bottom"),E=n("left"),B=n("center"),F=n("right"),y=l("h4",{class:"m-t-xl m-b-xxl"},"\u4F7F\u7528\u6848\u4F8B\uFF1A",-1),A=l("span",null,"\u6BB5",-1),x=l("h4",null,"\u4E3B\u52A8\u5F0FCSS\u751F\u6210\u7CFB\u7EDF",-1),d=l("div",null," \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002 ",-1);function c(G,C){const I=o("hl-button"),_=o("hl-group"),w=o("hl-col"),z=o("hl-row"),S=o("two-phone"),j=o("hl-icon"),$=o("hl-thumb"),W=o("two-mail"),Y=o("two-info");return h(),s(i,null,[t(z,{gap:"var(--xl)"},{default:e(()=>[t(w,{span:"col"},{default:e(()=>[t(_,{align:"top",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:e(()=>[t(I,{type:"primary",class:"w-sm"},{default:e(()=>[g]),_:1})]),_:1})]),_:1}),t(w,{span:"col"},{default:e(()=>[t(_,{align:"middle",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:e(()=>[t(I,{type:"primary",class:"w-sm"},{default:e(()=>[m]),_:1})]),_:1})]),_:1}),t(w,{span:"col"},{default:e(()=>[t(_,{align:"bottom",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:e(()=>[t(I,{type:"primary",class:"w-sm"},{default:e(()=>[f]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{gap:"var(--xl)",class:"m-t-xxl"},{default:e(()=>[t(w,{span:"col"},{default:e(()=>[t(_,{align:"left",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:e(()=>[t(I,{type:"primary",class:"w-sm"},{default:e(()=>[E]),_:1})]),_:1})]),_:1}),t(w,{span:"col"},{default:e(()=>[t(_,{align:"center",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:e(()=>[t(I,{type:"primary",class:"w-sm"},{default:e(()=>[B]),_:1})]),_:1})]),_:1}),t(w,{span:"col"},{default:e(()=>[t(_,{align:"right",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:e(()=>[t(I,{type:"primary",class:"w-sm"},{default:e(()=>[F]),_:1})]),_:1})]),_:1})]),_:1}),y,t(z,{class:"m-t-xxl"},{default:e(()=>[t(w,{span:"col"},{default:e(()=>[t(_,{align:"middle",gap:"var(--md)"},{default:e(()=>[t(I,{type:"primary",equal:"",round:"",outline:""},{icon:e(()=>[t(j,null,{default:e(()=>[t(S)]),_:1})]),_:1}),t($,{round:"",type:"primary",size:"xxxl"},{default:e(()=>[A]),_:1}),t(I,{type:"primary",equal:"",round:"",outline:""},{icon:e(()=>[t(j,null,{default:e(()=>[t(W)]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{span:"col"},{default:e(()=>[t(_,{align:"top",gap:"var(--md)"},{default:e(()=>[t(j,{type:"info",size:"xl",border:1.2,class:"no-shrink"},{default:e(()=>[t(Y)]),_:1},8,["border"]),t(_,{dir:"vertical",gap:"var(--xxs)"},{default:e(()=>[x,d]),_:1})]),_:1})]),_:1})]),_:1})],64)}return N({render:c},{})}(),"hl-demo8":function(){const{createElementVNode:n,createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:l,Fragment:i,openBlock:h,createElementBlock:s}=V,g=n("p",null,[o("\u4F7F\u7528"),n("code",null,"full"),o("\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6")],-1),m=o("Auto"),f=o("Auto"),E=o("Auto"),B=o("Auto"),F=o("Auto"),y=o("Auto"),A=n("p",null,[o("\u6A2A\u5411\u81EA\u9002\u5E94"),n("code",null,"full-x")],-1),x=o("Auto"),d=o("Auto"),c=o("Auto"),b=o("Auto"),G=n("p",null,[o("\u7EB5\u5411\u81EA\u9002\u5E94"),n("code",null,"full-y")],-1),C=o("Auto"),I=o("Auto"),_=o("Auto"),w=o("Auto"),z=o("Auto"),S=o("Auto"),j=o("Auto"),$=o("Auto");function W(J,K){const v=e("hl-button"),T=e("hl-group"),q=e("hl-col"),H=e("hl-row");return h(),s(i,null,[g,l(H,{class:"m-t-md",gap:"var(--lg)"},{default:t(()=>[l(q,{span:"col"},{default:t(()=>[l(T,{merge:"",indent:"",full:"",dir:"vertical",style:{height:"20vh"}},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[m]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[f]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[E]),_:1})]),_:1})]),_:1}),l(q,{span:"col"},{default:t(()=>[l(T,{merge:"",indent:"",full:"",style:{height:"20vh"}},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[B]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[F]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[y]),_:1})]),_:1})]),_:1})]),_:1}),l(H,{class:"m-t-lg",gap:"var(--lg)"},{default:t(()=>[l(q,{span:"col"},{default:t(()=>[A,l(T,{merge:"",indent:"",full:"full-x",class:"m-b-lg"},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[x]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[d]),_:1})]),_:1}),l(T,{dir:"vertical",merge:"",indent:"",full:"full-x"},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[c]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[b]),_:1})]),_:1})]),_:1}),l(q,{span:"col"},{default:t(()=>[G,l(T,{full:""},{default:t(()=>[l(T,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"131px"}},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[C]),_:1})]),_:1}),l(T,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"131px"}},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[I]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[_]),_:1})]),_:1}),l(T,{merge:"",indent:"",dir:"vertical",full:"full-y",class:"m-r-md",style:{height:"131px"}},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[w]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[z]),_:1})]),_:1}),l(T,{merge:"",indent:"",dir:"vertical",full:"full-y",style:{height:"131px"}},{default:t(()=>[l(v,{type:"primary",outline:""},{default:t(()=>[S]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[j]),_:1}),l(v,{type:"primary",outline:""},{default:t(()=>[$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}return N({render:W},{})}(),"hl-demo9":function(){const{createTextVNode:n,resolveComponent:o,withCtx:e,createVNode:t,Fragment:l,openBlock:i,createElementBlock:h}=V,s=n("Static"),g=n("Auto"),m=n("Auto"),f=n("Static"),E=n("Static"),B=n("Auto"),F=n("Auto"),y=n("Static");function A(d,c){const b=o("hl-button"),G=o("hl-group");return i(),h(l,null,[t(G,{merge:"",indent:"",full:""},{default:e(()=>[t(b,{type:"primary",outline:"",class:"static"},{default:e(()=>[s]),_:1}),t(b,{type:"primary",outline:""},{default:e(()=>[g]),_:1}),t(b,{type:"primary",outline:""},{default:e(()=>[m]),_:1}),t(b,{type:"primary",outline:"",class:"static"},{default:e(()=>[f]),_:1})]),_:1}),t(G,{dir:"vertical",merge:"",indent:"",full:"",class:"m-t-lg",style:{height:"200px"}},{default:e(()=>[t(b,{type:"primary",outline:"",class:"static"},{default:e(()=>[E]),_:1}),t(b,{type:"primary",outline:""},{default:e(()=>[B]),_:1}),t(b,{type:"primary",outline:""},{default:e(()=>[F]),_:1}),t(b,{type:"primary",outline:"",class:"static"},{default:e(()=>[y]),_:1})]),_:1})],64)}return N({render:A},{})}(),"hl-demo10":function(){const{createElementVNode:n,resolveComponent:o,withCtx:e,createVNode:t,openBlock:l,createBlock:i}=V,h=n("p",null,"\u6A2A\u5411\u5D4C\u5957",-1),s=n("span",{class:"demo"},"Item",-1),g=n("span",{class:"demo"},"Item",-1),m=n("span",{class:"demo"},"Item",-1),f=n("span",{class:"demo"},"Item",-1),E=n("span",{class:"demo"},"Item",-1),B=n("span",{class:"demo"},"Item",-1),F=n("span",{class:"demo"},"Item",-1),y=n("span",{class:"demo"},"Item",-1),A=n("span",{class:"demo"},"Item",-1),x=n("p",null,"\u7EB5\u5411\u5D4C\u5957",-1),d=n("span",{class:"demo"},"Item",-1),c=n("span",{class:"demo"},"Item",-1),b=n("span",{class:"demo"},"Item",-1),G=n("span",{class:"demo"},"Item",-1),C=n("span",{class:"demo"},"Item",-1),I=n("span",{class:"demo"},"Item",-1),_=n("span",{class:"demo"},"Item",-1),w=n("span",{class:"demo"},"Item",-1),z=n("span",{class:"demo"},"Item",-1),S=n("p",null,"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),j=n("span",{class:"demo"},"Item",-1),$=n("span",{class:"demo"},"Item",-1),W=n("span",{class:"demo"},"Item",-1),Y=n("span",{class:"demo"},"Item",-1),J=n("span",{class:"demo"},"Item",-1),K=n("span",{class:"demo"},"Item",-1),v=n("span",{class:"demo"},"Item",-1),T=n("span",{class:"demo"},"Item",-1),q=n("span",{class:"demo"},"Item",-1),H=n("span",{class:"demo"},"Item",-1),P=n("p",null,"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),Q=n("span",{class:"demo"},"Item",-1),R=n("span",{class:"demo"},"Item",-1),U=n("span",{class:"demo"},"Item",-1),X=n("span",{class:"demo"},"Item",-1),Z=n("span",{class:"demo"},"Item",-1),tt=n("span",{class:"demo"},"Item",-1),et=n("span",{class:"demo"},"Item",-1),nt=n("span",{class:"demo"},"Item",-1),ot=n("span",{class:"demo"},"Item",-1);function ut(me,_e){const D=o("hl-group"),M=o("hl-col"),lt=o("hl-row");return l(),i(lt,{gap:"var(--lg)"},{default:e(()=>[t(M,{span:"col-md-12"},{default:e(()=>[h,t(D,{dir:"horizontal",merge:"",indent:"",full:"full-x",class:"dom-area","data-name":"G1"},{default:e(()=>[t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[s,g,m]),_:1}),t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[f,E,B]),_:1}),t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[F,y,A]),_:1})]),_:1})]),_:1}),t(M,{span:"col-md-12"},{default:e(()=>[x,t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:e(()=>[t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[d,c,b]),_:1}),t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[G,C,I]),_:1}),t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[_,w,z]),_:1})]),_:1})]),_:1}),t(M,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[S,t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:e(()=>[t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:e(()=>[j,$]),_:1}),t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:e(()=>[W,Y]),_:1}),t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:e(()=>[J,K]),_:1})]),_:1}),t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[t(D,{dir:"vertical",full:"",merge:"",indent:"",class:"dom-area","data-name":"G3"},{default:e(()=>[v,T]),_:1}),t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:e(()=>[q,H]),_:1})]),_:1})]),_:1})]),_:1}),t(M,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[P,t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:e(()=>[t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:e(()=>[Q,R]),_:1}),t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:e(()=>[U,X]),_:1}),t(D,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:e(()=>[Z,tt]),_:1})]),_:1}),t(D,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:e(()=>[et,nt,ot]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:ut},{})}(),"hl-demo11":function(){const{resolveComponent:n,createVNode:o,createTextVNode:e,withCtx:t,openBlock:l,createBlock:i}=V,h=e("\u786E\u5B9A"),s=e("-"),g=e("+");function m(E,B){const F=n("hl-date-picker"),y=n("hl-button"),A=n("hl-group"),x=n("hl-col"),d=n("hl-input"),c=n("hl-row");return l(),i(c,null,{default:t(()=>[o(x,{span:"col"},{default:t(()=>[o(A,{size:"lg",indent:"",block:"",merge:""},{default:t(()=>[o(F),o(y,null,{default:t(()=>[h]),_:1})]),_:1})]),_:1}),o(x,{span:"col"},{default:t(()=>[o(A,{size:"sm",indent:"",block:"",merge:""},{default:t(()=>[o(y,null,{default:t(()=>[s]),_:1}),o(d,{class:"w-xs"}),o(y,null,{default:t(()=>[g]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:m},{})}(),"hl-demo12":function(){const{resolveComponent:n,createVNode:o,createTextVNode:e,withCtx:t,openBlock:l,createBlock:i}=V,h=e("\u786E\u5B9A");function s(m,f){const E=n("hl-input"),B=n("hl-time-picker"),F=n("hl-button"),y=n("hl-group");return l(),i(y,{disabled:"",indent:"",block:"",gap:"var(--sm)"},{default:t(()=>[o(E,{class:"w-xs"}),o(B),o(F,{type:"primary"},{default:t(()=>[h]),_:1})]),_:1})}return N({render:s},{})}(),"hl-demo13":function(){const{resolveComponent:n,createVNode:o,withCtx:e,openBlock:t,createBlock:l}=V;function i(s,g){const m=n("hl-input"),f=n("hl-time-picker"),E=n("hl-group");return t(),l(E,{fill:"",indent:"",block:"",gap:"var(--sm)"},{default:e(()=>[o(m,{class:"w-xs"}),o(f)]),_:1})}return N({render:i},{})}()}},_t=u("h1",null,"Group \u7EC4",-1),gt=u("p",null,"Group \u662F\u9E3F\u9E3E\u4E2D\u6700\u5177\u6709\u7279\u70B9\u7684\u529F\u80FD\u4E4B\u4E00\uFF0C\u5B83\u66F4\u591A\u7528\u4E8E\u9875\u9762\u5143\u7D20\u7684\u5E03\u5C40\u6784\u9020\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),ft=u("h2",{id:"ji-ben-shi-yong"},[u("a",{class:"header-anchor",href:"#ji-ben-shi-yong"}),a(" \u57FA\u672C\u4F7F\u7528")],-1),Et=u("p",null,[a("\u901A\u5E38\u6211\u4EEC\u5C06\u5143\u7D20\u4E0E\u5143\u7D20\u7684\u7EC4\u5408\u7528"),u("code",null,"<div>"),a("\u5305\u88F9\u8D77\u6765\uFF0C\u6B64\u65F6\u4E0D\u59A8\u5C1D\u8BD5\u5C06\u5B83\u4EEC\u653E\u5230\u4E00\u4E2A"),u("code",null,"group"),a("\u7EC4\u91CC\u3002")],-1),yt=u("div",null,[u("p",null,[a("Group \u7EC4\u4EF6\u4F1A\u81EA\u52A8\u4E3A\u7EC4\u6210\u5458\u589E\u52A0 "),u("code",null,".group-item"),a(" \u7C7B\u3002")])],-1),Ft=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="middle">
    <hl-col span="col">
      <hl-group class="dom-area" gap="var(--sm)" data-name="Group">
        <hl-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        <hl-button type="primary">\u641C \u7D22</hl-button>
      </hl-group>
    </hl-col>

    <hl-col span="col">
      <hl-group gap="var(--md)" full align="middle" class="dom-area" data-name="Group">
        <hl-icon type="primary" size="xl" class="static" fill radius>
          <two-user-group />
        </hl-icon>
        <hl-group dir="vertical" class="dom-area" data-name="Group">
          <h5>\u6D4B\u8BD5</h5>
          <div>
            \u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08
          </div>
        </hl-group>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),bt=u("h2",{id:"block"},[u("a",{class:"header-anchor",href:"#block"}),a(" Block")],-1),Bt=u("p",null,[a("\u9ED8\u8BA4\u7684 Group \u7EC4\u4EF6\u662F "),u("code",null,"display:inline-flex"),a(" \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"block"),a(" \u5C06\u5176\u8BBE\u7F6E\u4E3A\u5757\u5143\u7D20\u3002")],-1),Ct=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group merge class="bg-stripes m-b-md m-r-md">
    <hl-button type="success">Group 1</hl-button>
    <hl-button type="success">Group 1</hl-button>
  </hl-group>
  <hl-group merge class="bg-stripes m-b-md m-r-md">
    <hl-button type="danger">Group 2</hl-button>
    <hl-button type="danger">Group 2</hl-button>
  </hl-group>
  <hl-group merge class="bg-stripes" block>
    <hl-button type="primary">Group 3</hl-button>
    <hl-button type="primary">Group 3</hl-button>
  </hl-group>
</template>
`)],-1),xt=u("h2",{id:"huan-xing"},[u("a",{class:"header-anchor",href:"#huan-xing"}),a(" \u6362\u884C")],-1),At=u("p",null,[a("\u4F7F\u7528"),u("code",null,"wrap"),a("\u7C7B\u53EF\u4EE5\u4F7F\u7EC4\u5143\u7D20\u8D85\u51FA"),u("code",null,"group"),a("\u5BBD\u5EA6\u65F6\u81EA\u52A8\u6362\u884C")],-1),Dt=u("div",null,[u("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u63D2\u5165\u4E00\u884C\u5BBD\u5EA6\u4E3A 100%\u7684 div \u6765\u4F7F\u5143\u7D20\u5F3A\u5236\u6362\u884C")],-1),It=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group wrap>
    <hl-button style="width:200px" type="primary" class="m-t-sm m-r-sm">Group Item</hl-button>
    <hl-button style="width:200px" type="primary" class="m-t-sm m-r-sm">Group Item</hl-button>
    <hl-button style="width:200px" type="primary" class="m-t-sm m-r-sm">Group Item</hl-button>
    <hl-button style="width:200px" type="primary" class="m-t-sm m-r-sm">Group Item</hl-button>
    <hl-button style="width:200px" type="primary" class="m-t-sm m-r-sm">Group Item</hl-button>
    <div style="width:100%"></div>
    <hl-button style="width:200px" type="primary" class="m-t-sm m-r-sm">Group Item</hl-button>
  </hl-group>
</template>
`)],-1),wt=u("h2",{id:"pai-lie-fang-shi"},[u("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),a(" \u6392\u5217\u65B9\u5F0F")],-1),vt=u("p",null,[a("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),u("code",null,'dir="horizontal"'),a(" \u6216 "),u("code",null,'dir="vertical"'),a(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u5B83\u4EEC\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),Gt=u("div",null,[u("p",null,[a("Group \u7EC4\u4EF6\u9ED8\u8BA4\u4E3A "),u("code",null,"horizontal"),a(" \u6A2A\u5411\u6392\u5217\u3002\u6392\u5217\u65B9\u5F0F\u4E5F\u652F\u6301\u54CD\u5E94\u5F0F\u5C5E\u6027\uFF0C\u4F8B\u5982\uFF1A"),u("code",null,"horizontal-lg"),a(" \u7B49\u3002")])],-1),kt=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <p>\u6A2A\u5411\u6392\u5217 horizontal</p>
      <hl-group dir="horizontal" gap="var(--md)" class="bg-stripes">
        <hl-button type="primary">Group Item</hl-button>
        <hl-button type="primary">Group Item</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p>\u7EB5\u5411\u6392\u5217 vertical</p>
      <hl-group dir="vertical" gap="var(--md)" class="bg-stripes">
        <hl-button type="primary">Group Item</hl-button>
        <hl-button type="primary">Group Item</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Nt=u("h2",{id:"rong-he"},[u("a",{class:"header-anchor",href:"#rong-he"}),a(" \u878D\u5408")],-1),Vt=u("p",null,"\u589E\u52A0 merge \u5C5E\u6027\u53EF\u4F7F\u7EC4\u5185\u6210\u5458\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u3002\u54EA\u6015\u7EC4\u5185\u6210\u5458\u62E5\u6709\u5404\u81EA\u7684\u8FB9\u8DDD\u548C\u5706\u89D2\u4E5F\u80FD\u88AB\u6B63\u786E\u7684\u5904\u7406\u3002",-1),zt=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <p>\u6A2A\u5411\u878D\u5408</p>
      <hl-group dir="horizontal" merge>
        <hl-button type="primary">Group Item</hl-button>
        <hl-button type="primary">Group Item</hl-button>
      </hl-group>
      <hl-group dir="horizontal" merge block class="m-t-lg">
        <hl-button type="primary" outline>Group Item</hl-button>
        <hl-button type="primary" outline>Group Item</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p>\u7EB5\u5411\u878D\u5408</p>
      <hl-group dir="vertical" merge>
        <hl-button type="primary">Group Item</hl-button>
        <hl-button type="primary">Group Item</hl-button>
      </hl-group>
      <hl-group dir="vertical" merge class="m-l-lg">
        <hl-button type="primary" outline>Group Item</hl-button>
        <hl-button type="primary" outline>Group Item</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Tt=u("h2",{id:"suo-jin"},[u("a",{class:"header-anchor",href:"#suo-jin"}),a(" \u7F29\u8FDB")],-1),St=u("p",null,[a("\u7F29\u8FDB\u6807\u7B7E "),u("code",null,"indent"),a(" \u7528\u4E8E\u7F29\u51CF\u7EC4\u6210\u5458\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u4F60\u53EF\u4EE5\u76F4\u89C2\u7684\u770B\u5230\u878D\u5408\u7684\u5143\u7D20\u4F1A\u81EA\u52A8\u51CF\u53BB\u76F8\u8FDE\u63A5\u7684\u8FB9\u6846\u3002")],-1),jt=u("div",null,[u("p",null,[a("\u63A8\u8350\u4F7F\u7528"),u("code",null,"gap"),a("\u5C5E\u6027\u6765\u8BBE\u7F6E\u95F4\u9694\uFF0C\u56E0\u4E3A"),u("code",null,"indent"),a("\u4F7F\u7528\u7684\u662F"),u("code",null,"margin:"),a("\u5C5E\u6027\u6240\u4EE5\u5B83\u4EEC\u4F1A\u53D7\u5230dom\u6E32\u67D3\u987A\u5E8F\u7684\u5F71\u54CD\u3002\u5982\u4E0B\uFF1A")])],-1),qt=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-md-12">
      <p>\u6A2A\u5411\u7F29\u8FDB\u878D\u5408</p>
      <hl-group dir="horizontal" class="m-t-sm" merge indent>
        <hl-button type="primary" outline>Group Item</hl-button>
        <hl-button type="primary" outline>Group Item</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col-md-12">
      <p>\u7EB5\u5411\u7F29\u8FDB\u878D\u5408</p>
      <hl-group dir="vertical" class="m-t-sm" merge indent>
        <hl-button type="primary" outline>Group Item</hl-button>
        <hl-button type="primary" outline>Group Item</hl-button>
      </hl-group>
    </hl-col>

    <hl-col span="col" class="m-t-xl">
      <p>\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5177\u4F53\u6570\u503C<code>indent="-2px"</code>\u6765\u7F29\u8FDB\u5143\u7D20</p>
      <hl-group dir="horizontal" class="m-t-sm" merge indent="-2px">
        <hl-button type="primary" style="border-width: 2px" outline>Group Item</hl-button>
        <hl-button type="primary" style="border-width: 2px" outline>Group Item</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col" class="m-t-xl">
      <p>\u6B63\u503C\u8BBE\u7F6E<code>indent="12px"</code> <span class="font-bold text-danger">\u4E0D\u63A8\u8350</span> </p>
      <hl-group dir="horizontal" class="m-t-sm" indent="12px">
        <hl-button type="primary" style="border-width: 2px" outline>Group Item</hl-button>
        <hl-button type="primary" style="border-width: 2px" outline>Group Item</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),$t=u("h2",{id:"jian-ju"},[u("a",{class:"header-anchor",href:"#jian-ju"}),a(" \u95F4\u8DDD")],-1),Wt=u("p",null,[a("\u4F7F\u7528"),u("code",null,"gap"),u("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap"},"\u539F\u751F\u5C5E\u6027"),a("\u6765\u8BBE\u7F6E\u7EC4\u6210\u5458\u7684\u95F4\u9694\u3002")],-1),Yt=u("div",null,[u("p",null,[u("code",null,"gap"),a(" \u5C5E\u6027\u540C\u65F6\u8BBE\u7F6E\u4E86\u884C\u548C\u5217\u7684\u95F4\u8DDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E"),u("code",null,'col-gap=""'),a("\u548C"),u("code",null,'row-gap=""'),a(" \u5C5E\u6027")])],-1),Ht=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-md-12">
      <p><code>gap</code>\u80FD\u66F4\u53CB\u597D\u7684\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u6392\u5E8F</p>
      <hl-group dir="horizontal" gap="var(--md)" class="m-t-sm">
        <hl-button type="primary" class="order-3">Item 1</hl-button>
        <hl-button type="primary" class="order-4">Item 2</hl-button>
        <hl-button type="primary" class="order-1">Item 3</hl-button>
        <hl-button type="primary" class="order-2">Item 4</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col-md-12">
      <p><code>indent</code>\u65E0\u6CD5\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u53CB\u597D\u6392\u5E8F</p>
      <hl-group dir="horizontal" indent="var(--md)" class="m-t-sm">
        <hl-button type="danger" class="order-3">Item 1</hl-button>
        <hl-button type="danger" class="order-4">Item 2</hl-button>
        <hl-button type="danger" class="order-1">Item 3</hl-button>
        <hl-button type="danger" class="order-2">Item 4</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Mt=u("h2",{id:"dui-qi-fang-shi"},[u("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),a(" \u5BF9\u9F50\u65B9\u5F0F")],-1),Jt=u("p",null,[a("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),u("code",null,"align"),a(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u7EC4\u6210\u5458\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002")],-1),Kt=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row gap="var(--xl)">
    <hl-col span="col">
      <hl-group align="top" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">Top</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="middle" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">middle</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="bottom" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">bottom</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>

  <hl-row gap="var(--xl)" class="m-t-xxl">
    <hl-col span="col">
      <hl-group align="left" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">left</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="center" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">center</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="right" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">right</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>

  <h4 class="m-t-xl m-b-xxl">\u4F7F\u7528\u6848\u4F8B\uFF1A</h4>
  <hl-row class="m-t-xxl">
    <hl-col span="col">
      <hl-group align="middle" gap="var(--md)">
        <hl-button type="primary" equal round outline>
          <template #icon>
            <hl-icon><two-phone /></hl-icon>
          </template>
        </hl-button>
        <hl-thumb round type="primary" size="xxxl">
          <span>\u6BB5</span>
        </hl-thumb>
        <hl-button type="primary" equal round outline>
          <template #icon>
            <hl-icon><two-mail /></hl-icon>
          </template>
        </hl-button>
      </hl-group>
    </hl-col>

    <hl-col span="col">
      <hl-group align="top" gap="var(--md)">
        <hl-icon type="info" size="xl" :border="1.2" class="no-shrink">
          <two-info />
        </hl-icon>
        <hl-group dir="vertical" gap="var(--xxs)">
          <h4>\u4E3B\u52A8\u5F0FCSS\u751F\u6210\u7CFB\u7EDF</h4>
          <div>
            \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002
          </div>
        </hl-group>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Lt=u("h2",{id:"zi-gua-ying"},[u("a",{class:"header-anchor",href:"#zi-gua-ying"}),a(" \u81EA\u9002\u5E94")],-1),Ot=u("p",null,[a("\u4E3A Group \u7EC4\u4EF6\u589E\u52A0 "),u("code",null,"full"),a(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u7EC4\u548C\u7EC4\u5185\u6210\u5458\u90FD\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u3002")],-1),Pt=u("div",null,[u("p",null,[a("\u4E3A "),u("code",null,"full"),a("\u5C5E\u6027\u4F20\u5165 "),u("code",null,"full-x"),a(" \u6216\u8005 "),u("code",null,"full-y"),a(" \u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u5B83\u7684\u54CD\u5E94\u65B9\u5F0F")])],-1),Qt=u("pre",null,[u("code",{class:"html"},` <template>
  <p>\u4F7F\u7528<code>full</code>\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6</p>
  <hl-row class="m-t-md" gap="var(--lg)">
    <hl-col span="col">
      <hl-group merge indent full dir="vertical" style="height:20vh">
        <hl-button type="primary" outline>Auto</hl-button>
        <hl-button type="primary" outline>Auto</hl-button>
        <hl-button type="primary" outline>Auto</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group merge indent full style="height:20vh">
        <hl-button type="primary" outline>Auto</hl-button>
        <hl-button type="primary" outline>Auto</hl-button>
        <hl-button type="primary" outline>Auto</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>

  <hl-row class="m-t-lg" gap="var(--lg)">
    <hl-col span="col">
      <p>\u6A2A\u5411\u81EA\u9002\u5E94<code>full-x</code></p>
      <hl-group merge indent full="full-x" class="m-b-lg">
        <hl-button type="primary" outline>Auto</hl-button>
        <hl-button type="primary" outline>Auto</hl-button>
      </hl-group>

      <hl-group dir="vertical" merge indent full="full-x">
        <hl-button type="primary" outline>Auto</hl-button>
        <hl-button type="primary" outline>Auto</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p>\u7EB5\u5411\u81EA\u9002\u5E94<code>full-y</code></p>
      <hl-group full>
        <hl-group merge indent full="full-y" class="m-r-md" style="height:131px">
          <hl-button type="primary" outline>Auto</hl-button>
        </hl-group>
        <hl-group merge indent full="full-y" class="m-r-md" style="height:131px">
          <hl-button type="primary" outline>Auto</hl-button>
          <hl-button type="primary" outline>Auto</hl-button>
        </hl-group>
        <hl-group
          merge
          indent
          dir="vertical"
          full="full-y"
          class="m-r-md"
          style="height:131px"
        >
          <hl-button type="primary" outline>Auto</hl-button>
          <hl-button type="primary" outline>Auto</hl-button>
        </hl-group>
        <hl-group merge indent dir="vertical" full="full-y" style="height:131px">
          <hl-button type="primary" outline>Auto</hl-button>
          <hl-button type="primary" outline>Auto</hl-button>
          <hl-button type="primary" outline>Auto</hl-button>
        </hl-group>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Rt=u("h2",{id:"jing-tai-zu-cheng-yuan"},[u("a",{class:"header-anchor",href:"#jing-tai-zu-cheng-yuan"}),a(" \u9759\u6001\u7EC4\u6210\u5458")],-1),Ut=u("p",null,[a("\u8D4B\u4E88\u7EC4\u6210\u5458 "),u("code",null,".static"),a(" \u7C7B\uFF0C\u53EF\u5C06\u7EC4\u6210\u5458\u8BBE\u7F6E\u6210\u9759\u6001\uFF0C\u8FD9\u6837\u5B83\u5C31\u4E0D\u4F1A\u6839\u636E\u5BBD\u5EA6\u800C\u53D8\u5316\u4E86\u3002")],-1),Xt=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group merge indent full>
    <hl-button type="primary" outline class="static">Static</hl-button>
    <hl-button type="primary" outline>Auto</hl-button>
    <hl-button type="primary" outline>Auto</hl-button>
    <hl-button type="primary" outline class="static">Static</hl-button>
  </hl-group>

  <hl-group
    dir="vertical"
    merge
    indent
    full
    class="m-t-lg"
    style="height: 200px;"
  >
    <hl-button type="primary" outline class="static">Static</hl-button>
    <hl-button type="primary" outline>Auto</hl-button>
    <hl-button type="primary" outline>Auto</hl-button>
    <hl-button type="primary" outline class="static">Static</hl-button>
  </hl-group>
</template>
`)],-1),Zt=u("h2",{id:"zu-qian-tao"},[u("a",{class:"header-anchor",href:"#zu-qian-tao"}),a(" \u7EC4\u5D4C\u5957")],-1),te=u("p",null,"\u7EC4\u91CC\u9762\u8FD8\u53EF\u4EE5\u518D\u5D4C\u5957\u7EC4\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6784\u9020\u66F4\u52A0\u590D\u6742\u7684\u5E03\u5C40\u3002\u540C\u65F6\u5B83\u4EEC\u7684\u4E0B\u7EA7\u8282\u70B9\u4E4B\u95F4\u8FD8\u4FDD\u6301\u76F8\u4E92\u878D\u5408\u3002\u4F7F\u7528\u65B9\u6CD5\u5982 ui > li \u4E00\u6837\u7B80\u5355\u3002",-1),ee=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="col-md-12">
      <p>\u6A2A\u5411\u5D4C\u5957</p>
      <hl-group
        dir="horizontal"
        merge
        indent
        full="full-x"
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          dir="vertical"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="demo">Item</span>
          <span class="demo">Item</span>
          <span class="demo">Item</span>
        </hl-group>
        <hl-group
          dir="vertical"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="demo">Item</span>
          <span class="demo">Item</span>
          <span class="demo">Item</span>
        </hl-group>
        <hl-group
          dir="vertical"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="demo">Item</span>
          <span class="demo">Item</span>
          <span class="demo">Item</span>
        </hl-group>
      </hl-group>
    </hl-col>
    <hl-col span="col-md-12">
      <p>\u7EB5\u5411\u5D4C\u5957</p>
      <hl-group
        dir="vertical"
        merge
        indent
        full
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          dir="horizontal"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="demo">Item</span>
          <span class="demo">Item</span>
          <span class="demo">Item</span>
        </hl-group>
        <hl-group
          dir="horizontal"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="demo">Item</span>
          <span class="demo">Item</span>
          <span class="demo">Item</span>
        </hl-group>
        <hl-group
          dir="horizontal"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="demo">Item</span>
          <span class="demo">Item</span>
          <span class="demo">Item</span>
        </hl-group>
      </hl-group>
    </hl-col>
    <hl-col span="col-md-12" class="m-t-lg">
      <p>\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957</p>
      <hl-group
        dir="horizontal"
        merge
        indent
        full
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          dir="vertical"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <hl-group
            dir="horizontal"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
          <hl-group
            dir="horizontal"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
          <hl-group
            dir="horizontal"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
        </hl-group>
        <hl-group
          dir="horizontal"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <hl-group
            dir="vertical"
            full
            merge
            indent
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
        </hl-group>
      </hl-group>
    </hl-col>
    <hl-col span="col-md-12" class="m-t-lg">
      <p>\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957</p>
      <hl-group
        dir="vertical"
        merge
        indent
        full
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          dir="horizontal"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <hl-group
            dir="vertical"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="demo">Item</span>
            <span class="demo">Item</span>
          </hl-group>
        </hl-group>
        <hl-group
          dir="horizontal"
          merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="demo">Item</span>
          <span class="demo">Item</span>
          <span class="demo">Item</span>
        </hl-group>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),ne=u("h2",{id:"size"},[u("a",{class:"header-anchor",href:"#size"}),a(" Size")],-1),oe=u("p",null,[u("code",null,"size"),a(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301size\u5C5E\u6027\u7684\u503C\u3002")],-1),ue=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <hl-group size="lg" indent block merge>
        <hl-date-picker />
        <hl-button>\u786E\u5B9A</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group size="sm" indent block merge>
        <hl-button>-</hl-button>
        <hl-input class="w-xs" />
        <hl-button>+</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),le=u("h2",{id:"disabled"},[u("a",{class:"header-anchor",href:"#disabled"}),a(" Disabled")],-1),ae=u("p",null,[u("code",null,"disabled"),a(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301disabled\u5C5E\u6027\u7684\u503C\u3002")],-1),se=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group disabled indent block gap="var(--sm)">
    <hl-input class="w-xs" />
    <hl-time-picker />
    <hl-button type="primary">\u786E\u5B9A</hl-button>
  </hl-group>
</template>
`)],-1),re=u("h2",{id:"fill"},[u("a",{class:"header-anchor",href:"#fill"}),a(" Fill")],-1),de=u("p",null,[u("code",null,"fill"),a(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301fill\u5C5E\u6027\u7684\u503C\u3002")],-1),ce=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group fill indent block gap="var(--sm)">
    <hl-input class="w-xs" />
    <hl-time-picker />
  </hl-group>
</template>
`)],-1),pe=it('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dir</td><td>\u6392\u5217\u65B9\u5411</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>top / middle / end / left / center / right / around /evenly / between</td><td></td></tr><tr><td>merge</td><td>\u878D\u5408</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>static</td><td>\u9759\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indent</td><td>\u8FB9\u8DDD\u7F29\u8FDB</td><td>boolean / string</td><td>\u81EA\u5B9A\u4E49\u7F29\u8FDB\u5C3A\u5BF8</td><td>false</td></tr><tr><td>gap</td><td>\u95F4\u9699</td><td>string</td><td>\u2014</td><td>false</td></tr><tr><td>full</td><td>\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5C3A\u5BF8</td><td>boolean / string</td><td>full-x (\u6A2A\u5411\u62C9\u4F38) / full-y (\u7EB5\u5411\u62C9\u4F38)</td><td>false</td></tr><tr><td>wrap</td><td>\u6362\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u8F6C\u6362\u4E3A\u5757\u5143\u7D20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301size\u5C5E\u6027\u7684\u503C</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301disabled\u5C5E\u6027\u7684\u503C</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301fill\u5C5E\u6027\u7684\u503C</td><td>false</td></tr></tbody></table>',2);function ie(n,o,e,t,l,i){const h=k("hl-demo0"),s=k("demo-block"),g=k("hl-demo1"),m=k("hl-demo2"),f=k("hl-demo3"),E=k("hl-demo4"),B=k("hl-demo5"),F=k("hl-demo6"),y=k("hl-demo7"),A=k("hl-demo8"),x=k("hl-demo9"),d=k("hl-demo10"),c=k("hl-demo11"),b=k("hl-demo12"),G=k("hl-demo13"),C=k("right-nav");return dt(),ct(pt,null,[u("section",null,[_t,gt,ft,Et,p(s,{fs:""},{source:r(()=>[p(h)]),highlight:r(()=>[Ft]),default:r(()=>[yt]),_:1}),bt,Bt,p(s,{fs:""},{source:r(()=>[p(g)]),highlight:r(()=>[Ct]),_:1}),xt,At,p(s,{fs:""},{source:r(()=>[p(m)]),highlight:r(()=>[It]),default:r(()=>[Dt]),_:1}),wt,vt,p(s,{fs:""},{source:r(()=>[p(f)]),highlight:r(()=>[kt]),default:r(()=>[Gt]),_:1}),Nt,Vt,p(s,{fs:""},{source:r(()=>[p(E)]),highlight:r(()=>[zt]),_:1}),Tt,St,p(s,{fs:""},{source:r(()=>[p(B)]),highlight:r(()=>[qt]),default:r(()=>[jt]),_:1}),$t,Wt,p(s,{fs:""},{source:r(()=>[p(F)]),highlight:r(()=>[Ht]),default:r(()=>[Yt]),_:1}),Mt,Jt,p(s,{fs:""},{source:r(()=>[p(y)]),highlight:r(()=>[Kt]),_:1}),Lt,Ot,p(s,{fs:""},{source:r(()=>[p(A)]),highlight:r(()=>[Qt]),default:r(()=>[Pt]),_:1}),Rt,Ut,p(s,{fs:""},{source:r(()=>[p(x)]),highlight:r(()=>[Xt]),_:1}),Zt,te,p(s,{fs:""},{source:r(()=>[p(d)]),highlight:r(()=>[ee]),_:1}),ne,oe,p(s,{fs:""},{source:r(()=>[p(c)]),highlight:r(()=>[ue]),_:1}),le,ae,p(s,{fs:""},{source:r(()=>[p(b)]),highlight:r(()=>[se]),_:1}),re,de,p(s,{fs:""},{source:r(()=>[p(G)]),highlight:r(()=>[ce]),_:1}),pe]),p(C)],64)}var Be=ht(mt,[["render",ie]]);export{Be as default};
