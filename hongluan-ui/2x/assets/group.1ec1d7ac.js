var ne=Object.defineProperty;var re=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var le=(t,s,r)=>s in t?ne(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,V=(t,s)=>{for(var r in s||(s={}))ae.call(s,r)&&le(t,r,s[r]);if(re)for(var r of re(s))ie.call(s,r)&&le(t,r,s[r]);return t};import{H as D,L as pe,W as me,Q as o,X as p,P as n,a4 as ce,S as u,o as oe,aJ as A}from"./vue.059774a0.js";import{H as te}from"./hongluan-icons.5b925e95.js";import{_ as he}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const _e={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:t,createVNode:s,createTextVNode:r,withCtx:e,createElementVNode:l,openBlock:m,createBlock:c}=A,d=r("\u641C \u7D22"),y=l("h5",null,"\u6D4B\u8BD5",-1),h=l("div",null,"\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08",-1);function g(f,F){const i=t("hl-input"),a=t("hl-button"),b=t("hl-group"),C=t("hl-col"),I=t("two-user-group"),v=t("hl-icon"),q=t("hl-row");return m(),c(q,{align:"items-middle"},{default:e(()=>[s(C,{span:"col"},{default:e(()=>[s(b,{class:"dom-area",gap:"var(--sm)","data-name":"Group"},{default:e(()=>[s(i,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),s(a,{type:"primary"},{default:e(()=>[d]),_:1})]),_:1})]),_:1}),s(C,{span:"col"},{default:e(()=>[s(b,{gap:"var(--md)",full:"",align:"items-middle",class:"dom-area","data-name":"Group"},{default:e(()=>[s(v,{type:"primary",size:"xl",class:"static",fill:"",radius:""},{default:e(()=>[s(I)]),_:1}),s(b,{dir:"vertical",class:"dom-area","data-name":"Group"},{default:e(()=>[y,h]),_:1})]),_:1})]),_:1})]),_:1})}const{defineComponent:_}=A,{TwoUserGroup:x}=te;return V({render:g},_({setup(f,{expose:F}){F();const i={TwoUserGroup:x};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo1":function(){const{createTextVNode:t,resolveComponent:s,withCtx:r,createVNode:e,Fragment:l,openBlock:m,createElementBlock:c}=A,d=t("Group 1"),y=t("Group 1"),h=t("Group 2"),g=t("Group 2"),_=t("Group 3"),x=t("Group 3");function E(F,i){const a=s("hl-button"),b=s("hl-group");return m(),c(l,null,[e(b,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:r(()=>[e(a,{type:"success"},{default:r(()=>[d]),_:1}),e(a,{type:"success"},{default:r(()=>[y]),_:1})]),_:1}),e(b,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:r(()=>[e(a,{type:"danger"},{default:r(()=>[h]),_:1}),e(a,{type:"danger"},{default:r(()=>[g]),_:1})]),_:1}),e(b,{merge:"",class:"bg-stripes",block:""},{default:r(()=>[e(a,{type:"primary"},{default:r(()=>[_]),_:1}),e(a,{type:"primary"},{default:r(()=>[x]),_:1})]),_:1})],64)}return V({render:E},{})}(),"hl-demo2":function(){const{createTextVNode:t,resolveComponent:s,withCtx:r,createVNode:e,openBlock:l,createBlock:m}=A,c=t("Group Item"),d=t("Group Item"),y=t("Group Item"),h=t("Group Item"),g=t("Group Item"),_=t("Group Item");function x(f,F){const i=s("hl-button"),a=s("hl-group");return l(),m(a,{gap:"var(--md)",wrap:""},{default:r(()=>[e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[c]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[d]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[y]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[h]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[g]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[_]),_:1})]),_:1})}return V({render:x},{})}(),"hl-demo3":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,openBlock:m,createBlock:c}=A,d=t("p",{class:"p-b-md"},"\u6A2A\u5411\u6392\u5217 horizontal",-1),y=s("Group Item"),h=s("Group Item"),g=t("p",{class:"p-b-md"},"\u7EB5\u5411\u6392\u5217 vertical",-1),_=s("Group Item"),x=s("Group Item");function E(F,i){const a=r("hl-button"),b=r("hl-group"),C=r("hl-col"),I=r("hl-row");return m(),c(I,null,{default:e(()=>[l(C,{span:"col"},{default:e(()=>[d,l(b,{dir:"horizontal",gap:"var(--md)",class:"bg-stripes"},{default:e(()=>[l(a,{type:"primary"},{default:e(()=>[y]),_:1}),l(a,{type:"primary"},{default:e(()=>[h]),_:1})]),_:1})]),_:1}),l(C,{span:"col"},{default:e(()=>[g,l(b,{dir:"vertical",gap:"var(--md)",class:"bg-stripes"},{default:e(()=>[l(a,{type:"primary"},{default:e(()=>[_]),_:1}),l(a,{type:"primary"},{default:e(()=>[x]),_:1})]),_:1})]),_:1})]),_:1})}return V({render:E},{})}(),"hl-demo4":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,Fragment:m,openBlock:c,createElementBlock:d}=A,y=t("p",{class:"p-b-md"},"\u6A2A\u5411\u878D\u5408",-1),h=s("Group Item"),g=s("Group Item"),_=s("Group Item"),x=s("Group Item"),E=t("p",{class:"p-b-md"},"\u7EB5\u5411\u878D\u5408",-1),f=s("Group Item"),F=s("Group Item"),i=s("Group Item"),a=s("Group Item"),b=t("p",{class:"p-b-md"},"\u57FA\u672C\u878D\u5408",-1),C=s("\u6570\u636E\u6D41"),I=s("\u4F20\u8F93\u5C5E\u6027\u503C"),v=s("\u5DF2\u65AD\u7EBF"),q=s("\u5F85\u6062\u590D"),z=s("\u5176\u4ED6"),T=t("p",{class:"p-b-md"},"\u6DF1\u5EA6\u878D\u5408",-1),P=s("\u6570\u636E\u6D41"),w=s("\u4F20\u8F93\u5C5E\u6027\u503C"),G=s("\u5DF2\u65AD\u7EBF"),S=s("\u5F85\u6062\u590D"),$=s("\u5176\u4ED6");function W(M,U){const N=r("hl-button"),O=r("hl-group"),Q=r("hl-col"),X=r("hl-row"),J=r("hl-input"),K=r("two-more"),R=r("hl-icon"),j=r("hl-dropdown-item"),Y=r("hl-dropdown-menu"),Z=r("hl-dropdown");return c(),d(m,null,[l(X,null,{default:e(()=>[l(Q,{span:"col"},{default:e(()=>[y,l(O,{dir:"horizontal",merge:""},{default:e(()=>[l(N,{type:"primary"},{default:e(()=>[h]),_:1}),l(N,{type:"primary"},{default:e(()=>[g]),_:1})]),_:1}),l(O,{dir:"horizontal",merge:"",block:"",class:"m-t-lg"},{default:e(()=>[l(N,{type:"primary",outline:""},{default:e(()=>[_]),_:1}),l(N,{type:"primary",outline:""},{default:e(()=>[x]),_:1})]),_:1})]),_:1}),l(Q,{span:"col"},{default:e(()=>[E,l(O,{dir:"vertical",merge:""},{default:e(()=>[l(N,{type:"primary"},{default:e(()=>[f]),_:1}),l(N,{type:"primary"},{default:e(()=>[F]),_:1})]),_:1}),l(O,{dir:"vertical",merge:"",class:"m-l-lg"},{default:e(()=>[l(N,{type:"primary",outline:""},{default:e(()=>[i]),_:1}),l(N,{type:"primary",outline:""},{default:e(()=>[a]),_:1})]),_:1})]),_:1})]),_:1}),l(X,{class:"m-t-xxl"},{default:e(()=>[l(Q,{span:"col"},{default:e(()=>[b,l(O,{dir:"horizontal",merge:"",indent:"",class:"m-r-md"},{default:e(()=>[l(J,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),t("div",null,[t("div",null,[t("div",null,[t("div",null,[l(Z,null,{dropdown:e(()=>[l(Y,null,{default:e(()=>[l(j,null,{default:e(()=>[C]),_:1}),l(j,null,{default:e(()=>[I]),_:1}),l(j,null,{default:e(()=>[v]),_:1}),l(j,{disabled:""},{default:e(()=>[q]),_:1}),l(j,{divider:""}),l(j,null,{default:e(()=>[z]),_:1})]),_:1})]),default:e(()=>[l(N,{type:"primary"},{default:e(()=>[l(R,null,{default:e(()=>[l(K)]),_:1})]),_:1})]),_:1})])])])])]),_:1})]),_:1}),l(Q,{span:"col"},{default:e(()=>[T,l(O,{dir:"horizontal","deep-merge":"",indent:"",class:"m-r-md"},{default:e(()=>[l(J,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),t("div",null,[t("div",null,[t("div",null,[t("div",null,[l(Z,{class:"merge-item"},{dropdown:e(()=>[l(Y,null,{default:e(()=>[l(j,null,{default:e(()=>[P]),_:1}),l(j,null,{default:e(()=>[w]),_:1}),l(j,null,{default:e(()=>[G]),_:1}),l(j,{disabled:""},{default:e(()=>[S]),_:1}),l(j,{divider:""}),l(j,null,{default:e(()=>[$]),_:1})]),_:1})]),default:e(()=>[l(N,{type:"primary"},{default:e(()=>[l(R,null,{default:e(()=>[l(K)]),_:1})]),_:1})]),_:1})])])])])]),_:1})]),_:1})]),_:1})],64)}const{defineComponent:H}=A,{TwoMore:L}=te;return V({render:W},H({setup(M,{expose:U}){U();const N={TwoMore:L};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}}))}(),"hl-demo5":function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,createVNode:e,createTextVNode:l,openBlock:m,createBlock:c}=A,d=t("p",null,"\u6A2A\u5411\u7F29\u8FDB\u878D\u5408",-1),y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),h=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),g=t("p",null,"\u7EB5\u5411\u7F29\u8FDB\u878D\u5408",-1),_=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),x=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),E=t("p",null,[l("\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5177\u4F53\u6570\u503C"),t("code",null,'indent="-2px"'),l("\u6765\u7F29\u8FDB\u5143\u7D20")],-1),f=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),F=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),i=t("p",null,[l("\u6B63\u503C\u8BBE\u7F6E"),t("code",null,'indent="12px"'),l(),t("span",{class:"font-bold text-danger"},"\u4E0D\u63A8\u8350")],-1),a=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),b=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1);function C(v,q){const z=s("hl-group"),T=s("hl-col"),P=s("hl-row");return m(),c(P,null,{default:r(()=>[e(T,{span:"md:col-12"},{default:r(()=>[d,e(z,{dir:"horizontal",class:"m-t-sm",merge:"",indent:""},{default:r(()=>[y,h]),_:1})]),_:1}),e(T,{span:"md:col-12"},{default:r(()=>[g,e(z,{dir:"vertical",class:"m-t-sm",merge:"",indent:""},{default:r(()=>[_,x]),_:1})]),_:1}),e(T,{span:"col",class:"m-t-xl"},{default:r(()=>[E,e(z,{dir:"horizontal",class:"m-t-sm",merge:"",indent:"-2px"},{default:r(()=>[f,F]),_:1})]),_:1}),e(T,{span:"col",class:"m-t-xl"},{default:r(()=>[i,e(z,{dir:"horizontal",class:"m-t-sm",indent:"12px"},{default:r(()=>[a,b]),_:1})]),_:1})]),_:1})}return V({render:C},{})}(),"hl-demo6":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,openBlock:m,createBlock:c}=A,d=t("p",null,[t("code",null,"gap"),s("\u80FD\u66F4\u53CB\u597D\u7684\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u6392\u5E8F")],-1),y=s("Item 1"),h=s("Item 2"),g=s("Item 3"),_=s("Item 4"),x=t("p",null,[t("code",null,"indent"),s("\u65E0\u6CD5\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u53CB\u597D\u6392\u5E8F")],-1),E=s("Item 1"),f=s("Item 2"),F=s("Item 3"),i=s("Item 4");function a(C,I){const v=r("hl-button"),q=r("hl-group"),z=r("hl-col"),T=r("hl-row");return m(),c(T,null,{default:e(()=>[l(z,{span:"md:col-12"},{default:e(()=>[d,l(q,{dir:"horizontal",gap:"var(--md)",class:"m-t-sm"},{default:e(()=>[l(v,{type:"primary",class:"order-3"},{default:e(()=>[y]),_:1}),l(v,{type:"primary",class:"order-4"},{default:e(()=>[h]),_:1}),l(v,{type:"primary",class:"order-1"},{default:e(()=>[g]),_:1}),l(v,{type:"primary",class:"order-2"},{default:e(()=>[_]),_:1})]),_:1})]),_:1}),l(z,{span:"md:col-12"},{default:e(()=>[x,l(q,{dir:"horizontal",indent:"var(--md)",class:"m-t-sm"},{default:e(()=>[l(v,{type:"danger",class:"order-3"},{default:e(()=>[E]),_:1}),l(v,{type:"danger",class:"order-4"},{default:e(()=>[f]),_:1}),l(v,{type:"danger",class:"order-1"},{default:e(()=>[F]),_:1}),l(v,{type:"danger",class:"order-2"},{default:e(()=>[i]),_:1})]),_:1})]),_:1})]),_:1})}return V({render:a},{})}(),"hl-demo7":function(){const{createTextVNode:t,resolveComponent:s,withCtx:r,createVNode:e,createElementVNode:l,Fragment:m,openBlock:c,createElementBlock:d}=A,y=t("items-top"),h=t("items-middle"),g=t("items-bottom"),_=t("items-left"),x=t("items-center"),E=t("items-right"),f=l("h4",{class:"m-t-xl m-b-xxl"},"\u4F7F\u7528\u6848\u4F8B\uFF1A",-1),F=l("span",null,"\u6BB5",-1),i=l("h4",null,"\u4E3B\u52A8\u5F0FCSS\u751F\u6210\u7CFB\u7EDF",-1),a=l("div",null," \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002 ",-1);function b(T,P){const w=s("hl-button"),G=s("hl-group"),S=s("hl-col"),$=s("hl-row"),W=s("two-phone"),H=s("hl-icon"),L=s("hl-thumb"),k=s("two-mail"),M=s("two-info");return c(),d(m,null,[e($,{gap:"var(--xl)"},{default:r(()=>[e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-top",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(w,{type:"primary",class:"w-sm"},{default:r(()=>[y]),_:1})]),_:1})]),_:1}),e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-middle",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(w,{type:"primary",class:"w-sm"},{default:r(()=>[h]),_:1})]),_:1})]),_:1}),e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-bottom",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(w,{type:"primary",class:"w-sm"},{default:r(()=>[g]),_:1})]),_:1})]),_:1})]),_:1}),e($,{gap:"var(--xl)",class:"m-t-xxl"},{default:r(()=>[e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-left",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(w,{type:"primary",class:"w-sm"},{default:r(()=>[_]),_:1})]),_:1})]),_:1}),e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-center",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(w,{type:"primary",class:"w-sm"},{default:r(()=>[x]),_:1})]),_:1})]),_:1}),e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-right",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(w,{type:"primary",class:"w-sm"},{default:r(()=>[E]),_:1})]),_:1})]),_:1})]),_:1}),f,e($,{class:"m-t-xxl"},{default:r(()=>[e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-middle",gap:"var(--md)"},{default:r(()=>[e(w,{type:"primary",equal:"",round:"",outline:""},{icon:r(()=>[e(H,null,{default:r(()=>[e(W)]),_:1})]),_:1}),e(L,{round:"",type:"primary",size:"xxxl"},{default:r(()=>[F]),_:1}),e(w,{type:"primary",equal:"",round:"",outline:""},{icon:r(()=>[e(H,null,{default:r(()=>[e(k)]),_:1})]),_:1})]),_:1})]),_:1}),e(S,{span:"col"},{default:r(()=>[e(G,{align:"items-top",gap:"var(--md)"},{default:r(()=>[e(H,{type:"info",size:"xl",border:1.2,class:"no-shrink"},{default:r(()=>[e(M)]),_:1},8,["border"]),e(G,{dir:"vertical",gap:"var(--xxs)"},{default:r(()=>[i,a]),_:1})]),_:1})]),_:1})]),_:1})],64)}const{defineComponent:C}=A,{TwoPhone:I,TwoMail:v,TwoInfo:q}=te;return V({render:b},C({setup(T,{expose:P}){P();const w={TwoPhone:I,TwoMail:v,TwoInfo:q};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}))}(),"hl-demo8":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,Fragment:m,openBlock:c,createElementBlock:d}=A,y=t("p",null,[s("\u4F7F\u7528"),t("code",null,"full"),s("\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6")],-1),h=t("span",null,"Auto",-1),g=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),_=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),x=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),E=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),f=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),F=t("p",{class:"m-b-md"},[s("\u6A2A\u5411\u81EA\u9002\u5E94"),t("code",null,"full-x")],-1),i=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),a=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),b=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),C=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),I=t("p",{class:"m-b-md"},[s("\u7EB5\u5411\u81EA\u9002\u5E94"),t("code",null,"full-y")],-1),v=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),q=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),z=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),T=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),P=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),w=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),G=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),S=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1);function $(H,L){const k=r("hl-group"),M=r("hl-col"),U=r("hl-row");return c(),d(m,null,[y,l(U,{class:"m-t-md",gap:"var(--lg)"},{default:e(()=>[l(M,{span:"col"},{default:e(()=>[l(k,{merge:"",indent:"",full:"",dir:"vertical",style:{height:"20vh"}},{default:e(()=>[l(k,{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},{default:e(()=>[h]),_:1}),g,_]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[l(k,{merge:"",indent:"",full:"",style:{height:"20vh"}},{default:e(()=>[x,E,f]),_:1})]),_:1})]),_:1}),l(U,{class:"m-t-lg",gap:"var(--lg)"},{default:e(()=>[l(M,{span:"col"},{default:e(()=>[F,l(k,{merge:"",indent:"",full:"full-x",class:"m-b-md"},{default:e(()=>[i,a]),_:1}),l(k,{dir:"vertical",merge:"",indent:"",full:"full-x"},{default:e(()=>[b,C]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[I,l(k,{full:""},{default:e(()=>[l(k,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[v]),_:1}),l(k,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[q,z]),_:1}),l(k,{merge:"",indent:"",dir:"vertical",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[T,P]),_:1}),l(k,{merge:"",indent:"",dir:"vertical",full:"full-y",style:{height:"135px"}},{default:e(()=>[w,G,S]),_:1})]),_:1})]),_:1})]),_:1})],64)}return V({render:$},{})}(),"hl-demo9":function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,createVNode:e,Fragment:l,openBlock:m,createElementBlock:c}=A,d=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),y=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),h=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),g=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),_=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),x=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),E=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),f=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1);function F(a,b){const C=s("hl-group");return m(),c(l,null,[e(C,{merge:"",indent:"",full:""},{default:r(()=>[d,y,h,g]),_:1}),e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"m-t-lg",style:{height:"240px"}},{default:r(()=>[_,x,E,f]),_:1})],64)}return V({render:F},{})}(),"hl-demo10":function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,createVNode:e,openBlock:l,createBlock:m}=A,c=t("p",{class:"m-b-md"},"\u6A2A\u5411\u5D4C\u5957",-1),d=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),h=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),g=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),_=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),x=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),E=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),f=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),F=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),i=t("p",{class:"m-b-md"},"\u7EB5\u5411\u5D4C\u5957",-1),a=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),b=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),C=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),I=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),v=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),q=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),z=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),T=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),P=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),w=t("p",{class:"m-b-md"},"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),G=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),S=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),$=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),W=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),H=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),L=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),k=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),M=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),U=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),N=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),O=t("p",{class:"m-b-md"},"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),Q=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),X=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),J=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),K=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),R=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),j=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),Y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),Z=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),se=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1);function ue(ht,_t){const B=s("hl-group"),ee=s("hl-col"),de=s("hl-row");return l(),m(de,{gap:"var(--lg)"},{default:r(()=>[e(ee,{span:"md:col-12"},{default:r(()=>[c,e(B,{"deep-merge":"",indent:"",full:"full-x",class:"dom-area","data-name":"G1"},{default:r(()=>[e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[d,y,h]),_:1}),e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[g,_,x]),_:1}),e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[E,f,F]),_:1})]),_:1})]),_:1}),e(ee,{span:"md:col-12"},{default:r(()=>[i,e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[a,b,C]),_:1}),e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[I,v,q]),_:1}),e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[z,T,P]),_:1})]),_:1})]),_:1}),e(ee,{span:"md:col-12",class:"m-t-lg"},{default:r(()=>[w,e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[G,S]),_:1}),e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[$,W]),_:1}),e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[H,L]),_:1})]),_:1}),e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(B,{dir:"vertical",full:"","deep-merge":"",indent:"",class:"dom-area","data-name":"G3"},{default:r(()=>[k,M]),_:1}),e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[U,N]),_:1})]),_:1})]),_:1})]),_:1}),e(ee,{span:"md:col-12",class:"m-t-lg"},{default:r(()=>[O,e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[Q,X]),_:1}),e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[J,K]),_:1}),e(B,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[R,j]),_:1})]),_:1}),e(B,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[Y,Z,se]),_:1})]),_:1})]),_:1})]),_:1})}return V({render:ue},{})}(),"hl-demo11":function(){const{resolveComponent:t,createVNode:s,createTextVNode:r,withCtx:e,openBlock:l,createBlock:m}=A,c=r("\u786E\u5B9A"),d=r("-"),y=r("+");function h(_,x){const E=t("hl-date-picker"),f=t("hl-button"),F=t("hl-group"),i=t("hl-col"),a=t("hl-input"),b=t("hl-row");return l(),m(b,{gap:"var(--md)"},{default:e(()=>[s(i,{span:"col"},{default:e(()=>[s(F,{size:"lg",indent:"",block:"",merge:""},{default:e(()=>[s(E,{placeholder:"placeholder"}),s(f,{type:"primary"},{default:e(()=>[c]),_:1})]),_:1})]),_:1}),s(i,{span:"col"},{default:e(()=>[s(F,{size:"sm",indent:"",block:"",merge:""},{default:e(()=>[s(f,{type:"primary"},{default:e(()=>[d]),_:1}),s(a,{class:"w-xs",placeholder:"placeholder"}),s(f,{type:"primary"},{default:e(()=>[y]),_:1})]),_:1})]),_:1})]),_:1})}return V({render:h},{})}(),"hl-demo12":function(){const{resolveComponent:t,createVNode:s,createTextVNode:r,withCtx:e,openBlock:l,createBlock:m}=A,c=r("\u786E\u5B9A");function d(h,g){const _=t("hl-input"),x=t("hl-time-picker"),E=t("hl-button"),f=t("hl-group");return l(),m(f,{disabled:"",indent:"",block:"",gap:"var(--sm)"},{default:e(()=>[s(_,{class:"w-xs",placeholder:"placeholder"}),s(x,{placeholder:"placeholder"}),s(E,{type:"primary"},{default:e(()=>[c]),_:1})]),_:1})}return V({render:d},{})}(),"hl-demo13":function(){const{resolveComponent:t,createVNode:s,withCtx:r,openBlock:e,createBlock:l}=A;function m(d,y){const h=t("hl-input"),g=t("hl-time-picker"),_=t("hl-group");return e(),l(_,{fill:"",indent:"",block:"",gap:"var(--sm)"},{default:r(()=>[s(h,{class:"w-xs",placeholder:"placeholder"}),s(g,{placeholder:"placeholder"})]),_:1})}return V({render:m},{})}()}},ye=o("h1",null,"Group \u7EC4",-1),ge=o("p",null,"Group \u662F\u9E3F\u9E3E\u4E2D\u6700\u5177\u6709\u7279\u70B9\u7684\u529F\u80FD\u4E4B\u4E00\uFF0C\u5B83\u66F4\u591A\u7528\u4E8E\u9875\u9762\u5143\u7D20\u7684\u5E03\u5C40\u6784\u9020\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),xe=o("h2",{id:"ji-ben-shi-yong"},[o("a",{class:"header-anchor",href:"#ji-ben-shi-yong"}),u(" \u57FA\u672C\u4F7F\u7528")],-1),fe=o("p",null,[u("\u901A\u5E38\u6211\u4EEC\u5C06\u5143\u7D20\u4E0E\u5143\u7D20\u7684\u7EC4\u5408\u7528"),o("code",null,"<div>"),u("\u5305\u88F9\u8D77\u6765\uFF0C\u6B64\u65F6\u4E0D\u59A8\u5C1D\u8BD5\u5C06\u5B83\u4EEC\u653E\u5230\u4E00\u4E2A"),o("code",null,"group"),u("\u7EC4\u91CC\u3002")],-1),be=o("div",null,[o("p",null,[u("\u4E3A\u4E86\u66F4\u597D\u7684\u5BF9\u5B50\u5143\u7D20\u8FDB\u884C\u6837\u5F0F\u63A7\u5236\uFF0CGroup \u7EC4\u4EF6\u4F1A\u81EA\u52A8\u4E3A\u5B50\u5143\u7D20\u589E\u52A0 "),o("code",null,".group-item"),u(" \u7C7B\u3002")])],-1),Ee=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row align="items-middle">
    <hl-col span="col">
      <hl-group class="dom-area" gap="var(--sm)" data-name="Group">
        <hl-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        <hl-button type="primary">\u641C \u7D22</hl-button>
      </hl-group>
    </hl-col>

    <hl-col span="col">
      <hl-group gap="var(--md)" full align="items-middle" class="dom-area" data-name="Group">
        <hl-icon type="primary" size="xl" class="static" fill radius>
          <two-user-group />
        </hl-icon>
        <hl-group dir="vertical" class="dom-area" data-name="Group">
          <h5>\u6D4B\u8BD5</h5>
          <div>\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08</div>
        </hl-group>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
<script lang="ts" setup>
import { TwoUserGroup } from '@hongluan-ui/icons'
<\/script>
`)],-1),Fe=o("h2",{id:"block"},[o("a",{class:"header-anchor",href:"#block"}),u(" Block")],-1),Be=o("p",null,[u("\u9ED8\u8BA4\u7684 Group \u7EC4\u4EF6\u662F "),o("code",null,"display:inline-flex"),u(" \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),o("code",null,"block"),u(" \u5C06\u5176\u8BBE\u7F6E\u4E3A\u5757\u5143\u7D20\u3002")],-1),Ce=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ve=o("h2",{id:"huan-xing"},[o("a",{class:"header-anchor",href:"#huan-xing"}),u(" \u6362\u884C")],-1),we=o("p",null,[u("\u4F7F\u7528"),o("code",null,"wrap"),u("\u7C7B\u53EF\u4EE5\u4F7F\u7EC4\u5143\u7D20\u8D85\u51FA"),o("code",null,"group"),u("\u5BBD\u5EA6\u65F6\u81EA\u52A8\u6362\u884C")],-1),Ae=o("div",null,[o("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u63D2\u5165\u4E00\u884C\u5BBD\u5EA6\u4E3A 100%\u7684 div \u6765\u4F7F\u5143\u7D20\u5F3A\u5236\u6362\u884C")],-1),De=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--md)" wrap>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
  </hl-group>
</template>
`)],-1),Ie=o("h2",{id:"pai-lie-fang-shi"},[o("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),u(" \u6392\u5217\u65B9\u5F0F")],-1),Ge=o("p",null,[u("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),o("code",null,'dir="horizontal"'),u(" \u6216 "),o("code",null,'dir="vertical"'),u(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u5B83\u4EEC\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),ke=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <p class="p-b-md">\u6A2A\u5411\u6392\u5217 horizontal</p>
      <hl-group dir="horizontal" gap="var(--md)" class="bg-stripes">
        <hl-button type="primary">Group Item</hl-button>
        <hl-button type="primary">Group Item</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p class="p-b-md">\u7EB5\u5411\u6392\u5217 vertical</p>
      <hl-group dir="vertical" gap="var(--md)" class="bg-stripes">
        <hl-button type="primary">Group Item</hl-button>
        <hl-button type="primary">Group Item</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Ne=o("h2",{id:"rong-he"},[o("a",{class:"header-anchor",href:"#rong-he"}),u(" \u878D\u5408")],-1),Ve=o("p",null,"\u589E\u52A0 merge \u5C5E\u6027\u53EF\u4F7F\u7EC4\u5185\u6210\u5458\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u3002\u54EA\u6015\u7EC4\u5185\u6210\u5458\u62E5\u6709\u5404\u81EA\u7684\u8FB9\u8DDD\u548C\u5706\u89D2\u4E5F\u80FD\u88AB\u6B63\u786E\u7684\u5904\u7406\u3002",-1),ze=o("div",null,[o("p",null,[u("\u4F7F\u7528 "),o("code",null,"deep-merge"),u(" \u53EF\u4EE5\u4F7F\u5E26\u6709"),o("code",null,"merge-item"),u("\u7C7B\u7684\u7EC4\u6210\u5458\u7684\u6DF1\u5EA6\u878D\u5408\uFF0C\u65E0\u8BBA\u5B83\u7684\u4E0A\u9762\u5D4C\u5957\u4E86\u591A\u5C11\u5C42\u7684 dom \u7ED3\u6784\u3002")])],-1),Te=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <p class="p-b-md">\u6A2A\u5411\u878D\u5408</p>
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
      <p class="p-b-md">\u7EB5\u5411\u878D\u5408</p>
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

  <hl-row class="m-t-xxl">
    <hl-col span="col">
      <p class="p-b-md">\u57FA\u672C\u878D\u5408</p>
      <hl-group dir="horizontal" merge indent class="m-r-md">
        <hl-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        <div>
          <div>
            <div>
              <div>
                <hl-dropdown>
                  <hl-button type="primary">
                    <hl-icon>
                      <two-more />
                    </hl-icon>
                  </hl-button>
                  <template #dropdown>
                    <hl-dropdown-menu>
                      <hl-dropdown-item>\u6570\u636E\u6D41</hl-dropdown-item>
                      <hl-dropdown-item>\u4F20\u8F93\u5C5E\u6027\u503C</hl-dropdown-item>
                      <hl-dropdown-item>\u5DF2\u65AD\u7EBF</hl-dropdown-item>
                      <hl-dropdown-item disabled>\u5F85\u6062\u590D</hl-dropdown-item>
                      <hl-dropdown-item divider />
                      <hl-dropdown-item>\u5176\u4ED6</hl-dropdown-item>
                    </hl-dropdown-menu>
                  </template>
                </hl-dropdown>
              </div>
            </div>
          </div>
        </div>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p class="p-b-md">\u6DF1\u5EA6\u878D\u5408</p>
      <hl-group dir="horizontal" deep-merge indent class="m-r-md">
        <hl-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        <div>
          <div>
            <div>
              <div>
                <hl-dropdown class="merge-item">
                  <hl-button type="primary">
                    <hl-icon>
                      <two-more />
                    </hl-icon>
                  </hl-button>
                  <template #dropdown>
                    <hl-dropdown-menu>
                      <hl-dropdown-item>\u6570\u636E\u6D41</hl-dropdown-item>
                      <hl-dropdown-item>\u4F20\u8F93\u5C5E\u6027\u503C</hl-dropdown-item>
                      <hl-dropdown-item>\u5DF2\u65AD\u7EBF</hl-dropdown-item>
                      <hl-dropdown-item disabled>\u5F85\u6062\u590D</hl-dropdown-item>
                      <hl-dropdown-item divider />
                      <hl-dropdown-item>\u5176\u4ED6</hl-dropdown-item>
                    </hl-dropdown-menu>
                  </template>
                </hl-dropdown>
              </div>
            </div>
          </div>
        </div>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
<script lang="ts" setup>
import { TwoMore } from '@hongluan-ui/icons'
<\/script>
`)],-1),Se=o("h2",{id:"suo-jin"},[o("a",{class:"header-anchor",href:"#suo-jin"}),u(" \u7F29\u8FDB")],-1),je=o("p",null,[u("\u7F29\u8FDB\u6807\u7B7E "),o("code",null,"indent"),u(" \u7528\u4E8E\u7F29\u51CF\u7EC4\u6210\u5458\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u4F60\u53EF\u4EE5\u76F4\u89C2\u7684\u770B\u5230\u878D\u5408\u7684\u5143\u7D20\u4F1A\u81EA\u52A8\u51CF\u53BB\u76F8\u8FDE\u63A5\u7684\u8FB9\u6846\u3002")],-1),qe=o("div",null,[o("p",null,[u("\u63A8\u8350\u4F7F\u7528"),o("code",null,"gap"),u("\u5C5E\u6027\u6765\u8BBE\u7F6E\u95F4\u9699\uFF0C\u56E0\u4E3A"),o("code",null,"indent"),u("\u4F7F\u7528\u7684\u662F"),o("code",null,"margin:"),u("\u5C5E\u6027\u6240\u4EE5\u5B83\u4EEC\u4F1A\u53D7\u5230 dom \u6E32\u67D3\u987A\u5E8F\u7684\u5F71\u54CD\u3002\u5982\u4E0B\uFF1A")])],-1),Pe=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="md:col-12">
      <p>\u6A2A\u5411\u7F29\u8FDB\u878D\u5408</p>
      <hl-group dir="horizontal" class="m-t-sm" merge indent>
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Group Item</span>
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Group Item</span>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12">
      <p>\u7EB5\u5411\u7F29\u8FDB\u878D\u5408</p>
      <hl-group dir="vertical" class="m-t-sm" merge indent>
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Group Item</span>
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Group Item</span>
      </hl-group>
    </hl-col>

    <hl-col span="col" class="m-t-xl">
      <p>\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5177\u4F53\u6570\u503C<code>indent="-2px"</code>\u6765\u7F29\u8FDB\u5143\u7D20</p>
      <hl-group dir="horizontal" class="m-t-sm" merge indent="-2px">
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs" style="--border-width: 2px">Group Item</span>
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs" style="--border-width: 2px">Group Item</span>
      </hl-group>
    </hl-col>
    <hl-col span="col" class="m-t-xl">
      <p>\u6B63\u503C\u8BBE\u7F6E<code>indent="12px"</code> <span class="font-bold text-danger">\u4E0D\u63A8\u8350</span> </p>
      <hl-group dir="horizontal" class="m-t-sm" indent="12px">
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs" style="--border-width: 2px">Group Item</span>
        <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs" style="--border-width: 2px">Group Item</span>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Me=o("h2",{id:"jian-xi"},[o("a",{class:"header-anchor",href:"#jian-xi"}),u(" \u95F4\u9699")],-1),$e=o("p",null,[u("\u4F7F\u7528"),o("code",null,"gap"),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap"},"\u539F\u751F\u5C5E\u6027"),u("\u6765\u8BBE\u7F6E\u7EC4\u6210\u5458\u7684\u95F4\u9699\u3002")],-1),He=o("div",null,[o("p",null,[o("code",null,"gap"),u(" \u5C5E\u6027\u540C\u65F6\u8BBE\u7F6E\u4E86\u6A2A\u5411\u548C\u7EB5\u5411\u7684\u95F4\u9699\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E"),o("code",null,'gap-x=""'),u("\u548C"),o("code",null,'gap-y=""'),u(" \u5C5E\u6027")])],-1),Oe=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="md:col-12">
      <p><code>gap</code>\u80FD\u66F4\u53CB\u597D\u7684\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u6392\u5E8F</p>
      <hl-group dir="horizontal" gap="var(--md)" class="m-t-sm">
        <hl-button type="primary" class="order-3">Item 1</hl-button>
        <hl-button type="primary" class="order-4">Item 2</hl-button>
        <hl-button type="primary" class="order-1">Item 3</hl-button>
        <hl-button type="primary" class="order-2">Item 4</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12">
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
`)],-1),Ue=o("h2",{id:"dui-qi-fang-shi"},[o("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),u(" \u5BF9\u9F50\u65B9\u5F0F")],-1),We=o("p",null,[u("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),o("code",null,"align"),u(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u7EC4\u6210\u5458\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002")],-1),Le=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--xl)">
    <hl-col span="col">
      <hl-group align="items-top" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">items-top</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="items-middle" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">items-middle</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="items-bottom" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">items-bottom</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>

  <hl-row gap="var(--xl)" class="m-t-xxl">
    <hl-col span="col">
      <hl-group align="items-left" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">items-left</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="items-center" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">items-center</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group align="items-right" class="bg-stripes" style="height:100px; width: 100%">
        <hl-button type="primary" class="w-sm">items-right</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>

  <h4 class="m-t-xl m-b-xxl">\u4F7F\u7528\u6848\u4F8B\uFF1A</h4>
  <hl-row class="m-t-xxl">
    <hl-col span="col">
      <hl-group align="items-middle" gap="var(--md)">
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
      <hl-group align="items-top" gap="var(--md)">
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
<script lang="ts" setup>
import { TwoPhone, TwoMail, TwoInfo } from '@hongluan-ui/icons'
<\/script>
`)],-1),Qe=oe('<div class="doc-tip"><p>\u4E3A <code>align</code> \u8BBE\u7F6E <code>items-left</code> , <code>items-right</code> \u7B49\u5BF9\u9F50\u6837\u5F0F\uFF0C\u5373\u53EF\u6539\u53D8\u5B50\u5143\u7D20\u7684\u6A2A\u5411\u6392\u5217\u65B9\u5F0F\uFF0C\u53C2\u8003 <a href="#/zh-CN/style/flex">Flex \u5F39\u6027\u5E03\u5C40</a></p></div><h2 id="zi-gua-ying"><a class="header-anchor" href="#zi-gua-ying"></a> \u81EA\u9002\u5E94</h2><p>\u4E3A Group \u7EC4\u4EF6\u589E\u52A0 <code>full</code> \u5C5E\u6027\uFF0C\u53EF\u4F7F\u7EC4\u548C\u7EC4\u5185\u6210\u5458\u90FD\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u3002</p>',3),Xe=o("div",null,[o("p",null,[u("\u4E3A "),o("code",null,"full"),u("\u5C5E\u6027\u4F20\u5165 "),o("code",null,"full-x"),u(" \u6216\u8005 "),o("code",null,"full-y"),u(" \u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u5B83\u7684\u62C9\u4F38\u65B9\u5411")])],-1),Je=o("pre",null,[o("code",{class:"html"},` <template>
  <p>\u4F7F\u7528<code>full</code>\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6</p>
  <hl-row class="m-t-md" gap="var(--lg)">
    <hl-col span="col">
      <hl-group merge indent full dir="vertical" style="height:20vh">
        <hl-group class="display-flex border border-primary items-center items-middle radius-lg text-primary">
          <span>Auto</span>
        </hl-group>
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary">Auto</div>
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary">Auto</div>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group merge indent full style="height:20vh">
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary">Auto</div>
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary">Auto</div>
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary">Auto</div>
      </hl-group>
    </hl-col>
  </hl-row>

  <hl-row class="m-t-lg" gap="var(--lg)">
    <hl-col span="col">
      <p class="m-b-md">\u6A2A\u5411\u81EA\u9002\u5E94<code>full-x</code></p>
      <hl-group merge indent full="full-x" class="m-b-md">
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
      </hl-group>
      <hl-group dir="vertical" merge indent full="full-x">
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <p class="m-b-md">\u7EB5\u5411\u81EA\u9002\u5E94<code>full-y</code></p>
      <hl-group full>
        <hl-group merge indent full="full-y" class="m-r-md" style="height:135px">
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
        </hl-group>
        <hl-group merge indent full="full-y" class="m-r-md" style="height:135px">
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
        </hl-group>
        <hl-group
          merge
          indent
          dir="vertical"
          full="full-y"
          class="m-r-md"
          style="height:135px"
        >
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
        </hl-group>
        <hl-group merge indent dir="vertical" full="full-y" style="height:135px">
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
          <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
        </hl-group>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),Ke=o("h2",{id:"jing-tai-zu-cheng-yuan"},[o("a",{class:"header-anchor",href:"#jing-tai-zu-cheng-yuan"}),u(" \u9759\u6001\u7EC4\u6210\u5458")],-1),Re=o("p",null,[u("\u8D4B\u4E88\u7EC4\u6210\u5458 "),o("code",null,".static"),u(" \u7C7B\uFF0C\u53EF\u5C06\u7EC4\u6210\u5458\u8BBE\u7F6E\u6210\u9759\u6001\uFF0C\u8FD9\u6837\u5B83\u5C31\u4E0D\u4F1A\u6839\u636E\u5BBD\u5EA6\u800C\u53D8\u5316\u4E86\u3002")],-1),Ye=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group merge indent full>
    <div class="static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Static</div>
    <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
    <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
    <div class="static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Static</div>
  </hl-group>

  <hl-group
    dir="vertical"
    merge
    indent
    full
    class="m-t-lg"
    style="height: 240px;"
  >
    <div class="static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Static</div>
    <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
    <div class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Auto</div>
    <div class="static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Static</div>
  </hl-group>
</template>
`)],-1),Ze=o("h2",{id:"zu-qian-tao"},[o("a",{class:"header-anchor",href:"#zu-qian-tao"}),u(" \u7EC4\u5D4C\u5957")],-1),et=o("p",null,[u("\u7EC4\u91CC\u9762\u8FD8\u53EF\u4EE5\u518D\u5D4C\u5957\u7EC4\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6784\u9020\u66F4\u52A0\u590D\u6742\u7684\u5E03\u5C40\u3002\u4F7F\u7528"),o("code",null,"deep-merge"),u("\u5C5E\u6027\uFF0C\u8FD8\u53EF\u4F7F\u5B83\u4EEC\u7684\u4E0B\u7EA7\u8282\u70B9\u4E4B\u95F4\u8FD8\u4FDD\u6301\u76F8\u4E92\u878D\u5408\u3002")],-1),tt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      <p class="m-b-md">\u6A2A\u5411\u5D4C\u5957</p>
      <hl-group
        deep-merge
        indent
        full="full-x"
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          dir="vertical"
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
        <hl-group
          dir="vertical"
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
        <hl-group
          dir="vertical"
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12">
      <p class="m-b-md">\u7EB5\u5411\u5D4C\u5957</p>
      <hl-group
        dir="vertical"
        deep-merge
        indent
        full
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
        <hl-group
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
        <hl-group
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12" class="m-t-lg">
      <p class="m-b-md">\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957</p>
      <hl-group
        deep-merge
        indent
        full
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          dir="vertical"
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <hl-group
            deep-merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            deep-merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            deep-merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
        </hl-group>
        <hl-group
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <hl-group
            dir="vertical"
            full
            deep-merge
            indent
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            deep-merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
        </hl-group>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12" class="m-t-lg">
      <p class="m-b-md">\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957</p>
      <hl-group
        dir="vertical"
        deep-merge
        indent
        full
        class="dom-area"
        data-name="G1"
      >
        <hl-group
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <hl-group
            dir="vertical"
            deep-merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            deep-merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            deep-merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
        </hl-group>
        <hl-group
          deep-merge
          indent
          full
          class="dom-area"
          data-name="G2"
        >
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),rt=o("h2",{id:"size"},[o("a",{class:"header-anchor",href:"#size"}),u(" Size")],-1),lt=o("p",null,[o("code",null,"size"),u(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 size \u5C5E\u6027\u7684\u503C\u3002")],-1),ot=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col">
      <hl-group size="lg" indent block merge>
        <hl-date-picker placeholder="placeholder" />
        <hl-button type="primary">\u786E\u5B9A</hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="col">
      <hl-group size="sm" indent block merge>
        <hl-button type="primary">-</hl-button>
        <hl-input class="w-xs" placeholder="placeholder" />
        <hl-button type="primary">+</hl-button>
      </hl-group>
    </hl-col>
  </hl-row>
</template>
`)],-1),st=o("h2",{id:"disabled"},[o("a",{class:"header-anchor",href:"#disabled"}),u(" Disabled")],-1),ut=o("p",null,[o("code",null,"disabled"),u(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 disabled \u5C5E\u6027\u7684\u503C\u3002")],-1),dt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group disabled indent block gap="var(--sm)">
    <hl-input class="w-xs" placeholder="placeholder" />
    <hl-time-picker placeholder="placeholder" />
    <hl-button type="primary">\u786E\u5B9A</hl-button>
  </hl-group>
</template>
`)],-1),nt=o("h2",{id:"fill"},[o("a",{class:"header-anchor",href:"#fill"}),u(" Fill")],-1),at=o("p",null,[o("code",null,"fill"),u(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 fill \u5C5E\u6027\u7684\u503C\u3002")],-1),it=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group fill indent block gap="var(--sm)">
    <hl-input class="w-xs" placeholder="placeholder" />
    <hl-time-picker placeholder="placeholder" />
  </hl-group>
</template>
`)],-1),pt=oe('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dir</td><td>\u6392\u5217\u65B9\u5411</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>\u53C2\u8003 <a href="#/zh-CN/style/flex">Flex \u5F39\u6027\u5E03\u5C40</a></td><td></td></tr><tr><td>merge</td><td>\u878D\u5408</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>deep-merge</td><td>\u6DF1\u5EA6\u878D\u5408</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>static</td><td>\u9759\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indent</td><td>\u8FB9\u8DDD\u7F29\u8FDB</td><td>boolean / string</td><td>\u81EA\u5B9A\u4E49\u7F29\u8FDB\u5C3A\u5BF8</td><td>false</td></tr><tr><td>gap</td><td>\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap-x</td><td>\u6A2A\u5411\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap-y</td><td>\u7EB5\u5411\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>full</td><td>\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5C3A\u5BF8</td><td>boolean / string</td><td>full-x (\u6A2A\u5411\u62C9\u4F38) / full-y (\u7EB5\u5411\u62C9\u4F38)</td><td>false</td></tr><tr><td>wrap</td><td>\u6362\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u8F6C\u6362\u4E3A\u5757\u5143\u7D20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 size \u5C5E\u6027\u7684\u503C</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 disabled \u5C5E\u6027\u7684\u503C</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 fill \u5C5E\u6027\u7684\u503C</td><td>false</td></tr></tbody></table>',2);function mt(t,s,r,e,l,m){const c=D("hl-demo0"),d=D("demo-block"),y=D("hl-demo1"),h=D("hl-demo2"),g=D("hl-demo3"),_=D("hl-demo4"),x=D("hl-demo5"),E=D("hl-demo6"),f=D("hl-demo7"),F=D("hl-demo8"),i=D("hl-demo9"),a=D("hl-demo10"),b=D("hl-demo11"),C=D("hl-demo12"),I=D("hl-demo13"),v=D("right-nav");return pe(),me(ce,null,[o("section",null,[ye,ge,xe,fe,p(d,{fs:""},{source:n(()=>[p(c)]),highlight:n(()=>[Ee]),default:n(()=>[be]),_:1}),Fe,Be,p(d,{fs:""},{source:n(()=>[p(y)]),highlight:n(()=>[Ce]),_:1}),ve,we,p(d,{fs:""},{source:n(()=>[p(h)]),highlight:n(()=>[De]),default:n(()=>[Ae]),_:1}),Ie,Ge,p(d,{fs:""},{source:n(()=>[p(g)]),highlight:n(()=>[ke]),_:1}),Ne,Ve,p(d,{fs:""},{source:n(()=>[p(_)]),highlight:n(()=>[Te]),default:n(()=>[ze]),_:1}),Se,je,p(d,{fs:""},{source:n(()=>[p(x)]),highlight:n(()=>[Pe]),default:n(()=>[qe]),_:1}),Me,$e,p(d,{fs:""},{source:n(()=>[p(E)]),highlight:n(()=>[Oe]),default:n(()=>[He]),_:1}),Ue,We,p(d,{fs:""},{source:n(()=>[p(f)]),highlight:n(()=>[Le]),_:1}),Qe,p(d,{fs:""},{source:n(()=>[p(F)]),highlight:n(()=>[Je]),default:n(()=>[Xe]),_:1}),Ke,Re,p(d,{fs:""},{source:n(()=>[p(i)]),highlight:n(()=>[Ye]),_:1}),Ze,et,p(d,{fs:""},{source:n(()=>[p(a)]),highlight:n(()=>[tt]),_:1}),rt,lt,p(d,{fs:""},{source:n(()=>[p(b)]),highlight:n(()=>[ot]),_:1}),st,ut,p(d,{fs:""},{source:n(()=>[p(C)]),highlight:n(()=>[dt]),_:1}),nt,at,p(d,{fs:""},{source:n(()=>[p(I)]),highlight:n(()=>[it]),_:1}),pt]),p(v)],64)}var Ft=he(_e,[["render",mt]]);export{Ft as default};
