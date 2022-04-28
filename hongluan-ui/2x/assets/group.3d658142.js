var ue=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var ee=(t,n,r)=>n in t?ue(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,k=(t,n)=>{for(var r in n||(n={}))de.call(n,r)&&ee(t,r,n[r]);if(Z)for(var r of Z(n))ae.call(n,r)&&ee(t,r,n[r]);return t};import{F as G,L as ie,W as pe,Q as o,X as p,P as d,a2 as me,M as s,o as te,aJ as V}from"./vue.30e377ec.js";import{_ as ce}from"./index.58703c48.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.51d8bafe.js";const he={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:t,createVNode:n,createTextVNode:r,withCtx:e,createElementVNode:l,openBlock:m,createBlock:c}=V,u=r("\u641C \u7D22"),_=l("h5",null,"\u6D4B\u8BD5",-1),h=l("div",null,"\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08",-1);function y(f,b){const x=t("hl-input"),F=t("hl-button"),i=t("hl-group"),a=t("hl-col"),E=t("two-user-group"),A=t("hl-icon"),z=t("hl-row");return m(),c(z,{align:"items-middle"},{default:e(()=>[n(a,{span:"col"},{default:e(()=>[n(i,{class:"dom-area",gap:"var(--sm)","data-name":"Group"},{default:e(()=>[n(x,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),n(F,{type:"primary"},{default:e(()=>[u]),_:1})]),_:1})]),_:1}),n(a,{span:"col"},{default:e(()=>[n(i,{gap:"var(--md)",full:"",align:"items-middle",class:"dom-area","data-name":"Group"},{default:e(()=>[n(A,{type:"primary",size:"xl",class:"static",fill:"",radius:""},{default:e(()=>[n(E)]),_:1}),n(i,{dir:"vertical",class:"dom-area","data-name":"Group"},{default:e(()=>[_,h]),_:1})]),_:1})]),_:1})]),_:1})}return k({render:y},{})}(),"hl-demo1":function(){const{createTextVNode:t,resolveComponent:n,withCtx:r,createVNode:e,Fragment:l,openBlock:m,createElementBlock:c}=V,u=t("Group 1"),_=t("Group 1"),h=t("Group 2"),y=t("Group 2"),g=t("Group 3"),f=t("Group 3");function b(F,i){const a=n("hl-button"),E=n("hl-group");return m(),c(l,null,[e(E,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:r(()=>[e(a,{type:"success"},{default:r(()=>[u]),_:1}),e(a,{type:"success"},{default:r(()=>[_]),_:1})]),_:1}),e(E,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:r(()=>[e(a,{type:"danger"},{default:r(()=>[h]),_:1}),e(a,{type:"danger"},{default:r(()=>[y]),_:1})]),_:1}),e(E,{merge:"",class:"bg-stripes",block:""},{default:r(()=>[e(a,{type:"primary"},{default:r(()=>[g]),_:1}),e(a,{type:"primary"},{default:r(()=>[f]),_:1})]),_:1})],64)}return k({render:b},{})}(),"hl-demo2":function(){const{createTextVNode:t,resolveComponent:n,withCtx:r,createVNode:e,openBlock:l,createBlock:m}=V,c=t("Group Item"),u=t("Group Item"),_=t("Group Item"),h=t("Group Item"),y=t("Group Item"),g=t("Group Item");function f(x,F){const i=n("hl-button"),a=n("hl-group");return l(),m(a,{gap:"var(--md)",wrap:""},{default:r(()=>[e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[c]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[u]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[_]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[h]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[y]),_:1}),e(i,{style:{width:"200px"},type:"primary"},{default:r(()=>[g]),_:1})]),_:1})}return k({render:f},{})}(),"hl-demo3":function(){const{createElementVNode:t,createTextVNode:n,resolveComponent:r,withCtx:e,createVNode:l,openBlock:m,createBlock:c}=V,u=t("p",{class:"p-b-md"},"\u6A2A\u5411\u6392\u5217 horizontal",-1),_=n("Group Item"),h=n("Group Item"),y=t("p",{class:"p-b-md"},"\u7EB5\u5411\u6392\u5217 vertical",-1),g=n("Group Item"),f=n("Group Item");function b(F,i){const a=r("hl-button"),E=r("hl-group"),A=r("hl-col"),z=r("hl-row");return m(),c(z,null,{default:e(()=>[l(A,{span:"col"},{default:e(()=>[u,l(E,{dir:"horizontal",gap:"var(--md)",class:"bg-stripes"},{default:e(()=>[l(a,{type:"primary"},{default:e(()=>[_]),_:1}),l(a,{type:"primary"},{default:e(()=>[h]),_:1})]),_:1})]),_:1}),l(A,{span:"col"},{default:e(()=>[y,l(E,{dir:"vertical",gap:"var(--md)",class:"bg-stripes"},{default:e(()=>[l(a,{type:"primary"},{default:e(()=>[g]),_:1}),l(a,{type:"primary"},{default:e(()=>[f]),_:1})]),_:1})]),_:1})]),_:1})}return k({render:b},{})}(),"hl-demo4":function(){const{createElementVNode:t,createTextVNode:n,resolveComponent:r,withCtx:e,createVNode:l,Fragment:m,openBlock:c,createElementBlock:u}=V,_=t("p",{class:"p-b-md"},"\u6A2A\u5411\u878D\u5408",-1),h=n("Group Item"),y=n("Group Item"),g=n("Group Item"),f=n("Group Item"),b=t("p",{class:"p-b-md"},"\u7EB5\u5411\u878D\u5408",-1),x=n("Group Item"),F=n("Group Item"),i=n("Group Item"),a=n("Group Item"),E=t("p",{class:"p-b-md"},"\u57FA\u672C\u878D\u5408",-1),A=n("\u6570\u636E\u6D41"),z=n("\u4F20\u8F93\u5C5E\u6027\u503C"),w=n("\u5DF2\u65AD\u7EBF"),D=n("\u5F85\u6062\u590D"),B=n("\u5176\u4ED6"),v=t("p",{class:"p-b-md"},"\u6DF1\u5EA6\u878D\u5408",-1),S=n("\u6570\u636E\u6D41"),$=n("\u4F20\u8F93\u5C5E\u6027\u503C"),q=n("\u5DF2\u65AD\u7EBF"),P=n("\u5F85\u6062\u590D"),W=n("\u5176\u4ED6");function L(Y,T){const I=r("hl-button"),j=r("hl-group"),Q=r("hl-col"),X=r("hl-row"),J=r("hl-input"),M=r("two-more"),H=r("hl-icon"),N=r("hl-dropdown-item"),K=r("hl-dropdown-menu"),O=r("hl-dropdown");return c(),u(m,null,[l(X,null,{default:e(()=>[l(Q,{span:"col"},{default:e(()=>[_,l(j,{dir:"horizontal",merge:""},{default:e(()=>[l(I,{type:"primary"},{default:e(()=>[h]),_:1}),l(I,{type:"primary"},{default:e(()=>[y]),_:1})]),_:1}),l(j,{dir:"horizontal",merge:"",block:"",class:"m-t-lg"},{default:e(()=>[l(I,{type:"primary",outline:""},{default:e(()=>[g]),_:1}),l(I,{type:"primary",outline:""},{default:e(()=>[f]),_:1})]),_:1})]),_:1}),l(Q,{span:"col"},{default:e(()=>[b,l(j,{dir:"vertical",merge:""},{default:e(()=>[l(I,{type:"primary"},{default:e(()=>[x]),_:1}),l(I,{type:"primary"},{default:e(()=>[F]),_:1})]),_:1}),l(j,{dir:"vertical",merge:"",class:"m-l-lg"},{default:e(()=>[l(I,{type:"primary",outline:""},{default:e(()=>[i]),_:1}),l(I,{type:"primary",outline:""},{default:e(()=>[a]),_:1})]),_:1})]),_:1})]),_:1}),l(X,{class:"m-t-xxl"},{default:e(()=>[l(Q,{span:"col"},{default:e(()=>[E,l(j,{dir:"horizontal",merge:"",indent:"",class:"m-r-md"},{default:e(()=>[l(J,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),t("div",null,[t("div",null,[t("div",null,[t("div",null,[l(O,null,{dropdown:e(()=>[l(K,null,{default:e(()=>[l(N,null,{default:e(()=>[A]),_:1}),l(N,null,{default:e(()=>[z]),_:1}),l(N,null,{default:e(()=>[w]),_:1}),l(N,{disabled:""},{default:e(()=>[D]),_:1}),l(N,{divider:""}),l(N,null,{default:e(()=>[B]),_:1})]),_:1})]),default:e(()=>[l(I,{type:"primary"},{default:e(()=>[l(H,null,{default:e(()=>[l(M)]),_:1})]),_:1})]),_:1})])])])])]),_:1})]),_:1}),l(Q,{span:"col"},{default:e(()=>[v,l(j,{dir:"horizontal","deep-merge":"",indent:"",class:"m-r-md"},{default:e(()=>[l(J,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),t("div",null,[t("div",null,[t("div",null,[t("div",null,[l(O,null,{dropdown:e(()=>[l(K,null,{default:e(()=>[l(N,null,{default:e(()=>[S]),_:1}),l(N,null,{default:e(()=>[$]),_:1}),l(N,null,{default:e(()=>[q]),_:1}),l(N,{disabled:""},{default:e(()=>[P]),_:1}),l(N,{divider:""}),l(N,null,{default:e(()=>[W]),_:1})]),_:1})]),default:e(()=>[l(I,{type:"primary"},{default:e(()=>[l(H,null,{default:e(()=>[l(M)]),_:1})]),_:1})]),_:1})])])])])]),_:1})]),_:1})]),_:1})],64)}return k({render:L},{})}(),"hl-demo5":function(){const{createElementVNode:t,resolveComponent:n,withCtx:r,createVNode:e,createTextVNode:l,openBlock:m,createBlock:c}=V,u=t("p",null,"\u6A2A\u5411\u7F29\u8FDB\u878D\u5408",-1),_=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),h=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),y=t("p",null,"\u7EB5\u5411\u7F29\u8FDB\u878D\u5408",-1),g=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),f=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),b=t("p",null,[l("\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5177\u4F53\u6570\u503C"),t("code",null,'indent="-2px"'),l("\u6765\u7F29\u8FDB\u5143\u7D20")],-1),x=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),F=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),i=t("p",null,[l("\u6B63\u503C\u8BBE\u7F6E"),t("code",null,'indent="12px"'),l(),t("span",{class:"font-bold text-danger"},"\u4E0D\u63A8\u8350")],-1),a=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),E=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1);function A(w,D){const B=n("hl-group"),v=n("hl-col"),S=n("hl-row");return m(),c(S,null,{default:r(()=>[e(v,{span:"md:col-12"},{default:r(()=>[u,e(B,{dir:"horizontal",class:"m-t-sm",merge:"",indent:""},{default:r(()=>[_,h]),_:1})]),_:1}),e(v,{span:"md:col-12"},{default:r(()=>[y,e(B,{dir:"vertical",class:"m-t-sm",merge:"",indent:""},{default:r(()=>[g,f]),_:1})]),_:1}),e(v,{span:"col",class:"m-t-xl"},{default:r(()=>[b,e(B,{dir:"horizontal",class:"m-t-sm",merge:"",indent:"-2px"},{default:r(()=>[x,F]),_:1})]),_:1}),e(v,{span:"col",class:"m-t-xl"},{default:r(()=>[i,e(B,{dir:"horizontal",class:"m-t-sm",indent:"12px"},{default:r(()=>[a,E]),_:1})]),_:1})]),_:1})}return k({render:A},{})}(),"hl-demo6":function(){const{createElementVNode:t,createTextVNode:n,resolveComponent:r,withCtx:e,createVNode:l,openBlock:m,createBlock:c}=V,u=t("p",null,[t("code",null,"gap"),n("\u80FD\u66F4\u53CB\u597D\u7684\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u6392\u5E8F")],-1),_=n("Item 1"),h=n("Item 2"),y=n("Item 3"),g=n("Item 4"),f=t("p",null,[t("code",null,"indent"),n("\u65E0\u6CD5\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u53CB\u597D\u6392\u5E8F")],-1),b=n("Item 1"),x=n("Item 2"),F=n("Item 3"),i=n("Item 4");function a(A,z){const w=r("hl-button"),D=r("hl-group"),B=r("hl-col"),v=r("hl-row");return m(),c(v,null,{default:e(()=>[l(B,{span:"md:col-12"},{default:e(()=>[u,l(D,{dir:"horizontal",gap:"var(--md)",class:"m-t-sm"},{default:e(()=>[l(w,{type:"primary",class:"order-3"},{default:e(()=>[_]),_:1}),l(w,{type:"primary",class:"order-4"},{default:e(()=>[h]),_:1}),l(w,{type:"primary",class:"order-1"},{default:e(()=>[y]),_:1}),l(w,{type:"primary",class:"order-2"},{default:e(()=>[g]),_:1})]),_:1})]),_:1}),l(B,{span:"md:col-12"},{default:e(()=>[f,l(D,{dir:"horizontal",indent:"var(--md)",class:"m-t-sm"},{default:e(()=>[l(w,{type:"danger",class:"order-3"},{default:e(()=>[b]),_:1}),l(w,{type:"danger",class:"order-4"},{default:e(()=>[x]),_:1}),l(w,{type:"danger",class:"order-1"},{default:e(()=>[F]),_:1}),l(w,{type:"danger",class:"order-2"},{default:e(()=>[i]),_:1})]),_:1})]),_:1})]),_:1})}return k({render:a},{})}(),"hl-demo7":function(){const{createTextVNode:t,resolveComponent:n,withCtx:r,createVNode:e,createElementVNode:l,Fragment:m,openBlock:c,createElementBlock:u}=V,_=t("items-top"),h=t("items-middle"),y=t("items-bottom"),g=t("items-left"),f=t("items-center"),b=t("items-right"),x=l("h4",{class:"m-t-xl m-b-xxl"},"\u4F7F\u7528\u6848\u4F8B\uFF1A",-1),F=l("span",null,"\u6BB5",-1),i=l("h4",null,"\u4E3B\u52A8\u5F0FCSS\u751F\u6210\u7CFB\u7EDF",-1),a=l("div",null," \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002 ",-1);function E(z,w){const D=n("hl-button"),B=n("hl-group"),v=n("hl-col"),S=n("hl-row"),$=n("two-phone"),q=n("hl-icon"),P=n("hl-thumb"),W=n("two-mail"),L=n("two-info");return c(),u(m,null,[e(S,{gap:"var(--xl)"},{default:r(()=>[e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-top",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(D,{type:"primary",class:"w-sm"},{default:r(()=>[_]),_:1})]),_:1})]),_:1}),e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-middle",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(D,{type:"primary",class:"w-sm"},{default:r(()=>[h]),_:1})]),_:1})]),_:1}),e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-bottom",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(D,{type:"primary",class:"w-sm"},{default:r(()=>[y]),_:1})]),_:1})]),_:1})]),_:1}),e(S,{gap:"var(--xl)",class:"m-t-xxl"},{default:r(()=>[e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-left",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(D,{type:"primary",class:"w-sm"},{default:r(()=>[g]),_:1})]),_:1})]),_:1}),e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-center",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(D,{type:"primary",class:"w-sm"},{default:r(()=>[f]),_:1})]),_:1})]),_:1}),e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-right",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(D,{type:"primary",class:"w-sm"},{default:r(()=>[b]),_:1})]),_:1})]),_:1})]),_:1}),x,e(S,{class:"m-t-xxl"},{default:r(()=>[e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-middle",gap:"var(--md)"},{default:r(()=>[e(D,{type:"primary",equal:"",round:"",outline:""},{icon:r(()=>[e(q,null,{default:r(()=>[e($)]),_:1})]),_:1}),e(P,{round:"",type:"primary",size:"xxxl"},{default:r(()=>[F]),_:1}),e(D,{type:"primary",equal:"",round:"",outline:""},{icon:r(()=>[e(q,null,{default:r(()=>[e(W)]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{span:"col"},{default:r(()=>[e(B,{align:"items-top",gap:"var(--md)"},{default:r(()=>[e(q,{type:"info",size:"xl",border:1.2,class:"no-shrink"},{default:r(()=>[e(L)]),_:1},8,["border"]),e(B,{dir:"vertical",gap:"var(--xxs)"},{default:r(()=>[i,a]),_:1})]),_:1})]),_:1})]),_:1})],64)}return k({render:E},{})}(),"hl-demo8":function(){const{createElementVNode:t,createTextVNode:n,resolveComponent:r,withCtx:e,createVNode:l,Fragment:m,openBlock:c,createElementBlock:u}=V,_=t("p",null,[n("\u4F7F\u7528"),t("code",null,"full"),n("\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6")],-1),h=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),y=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),g=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),f=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),b=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),x=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),F=t("p",{class:"m-b-md"},[n("\u6A2A\u5411\u81EA\u9002\u5E94"),t("code",null,"full-x")],-1),i=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),a=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),E=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),A=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),z=t("p",{class:"m-b-md"},[n("\u7EB5\u5411\u81EA\u9002\u5E94"),t("code",null,"full-y")],-1),w=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),D=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),B=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),v=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),S=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),$=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),q=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),P=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1);function W(U,Y){const T=r("hl-group"),I=r("hl-col"),j=r("hl-row");return c(),u(m,null,[_,l(j,{class:"m-t-md",gap:"var(--lg)"},{default:e(()=>[l(I,{span:"col"},{default:e(()=>[l(T,{merge:"",indent:"",full:"",dir:"vertical",style:{height:"20vh"}},{default:e(()=>[h,y,g]),_:1})]),_:1}),l(I,{span:"col"},{default:e(()=>[l(T,{merge:"",indent:"",full:"",style:{height:"20vh"}},{default:e(()=>[f,b,x]),_:1})]),_:1})]),_:1}),l(j,{class:"m-t-lg",gap:"var(--lg)"},{default:e(()=>[l(I,{span:"col"},{default:e(()=>[F,l(T,{merge:"",indent:"",full:"full-x",class:"m-b-md"},{default:e(()=>[i,a]),_:1}),l(T,{dir:"vertical",merge:"",indent:"",full:"full-x"},{default:e(()=>[E,A]),_:1})]),_:1}),l(I,{span:"col"},{default:e(()=>[z,l(T,{full:""},{default:e(()=>[l(T,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[w]),_:1}),l(T,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[D,B]),_:1}),l(T,{merge:"",indent:"",dir:"vertical",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[v,S]),_:1}),l(T,{merge:"",indent:"",dir:"vertical",full:"full-y",style:{height:"135px"}},{default:e(()=>[$,q,P]),_:1})]),_:1})]),_:1})]),_:1})],64)}return k({render:W},{})}(),"hl-demo9":function(){const{createElementVNode:t,resolveComponent:n,withCtx:r,createVNode:e,Fragment:l,openBlock:m,createElementBlock:c}=V,u=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),_=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),h=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),y=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),g=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),f=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),b=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),x=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1);function F(a,E){const A=n("hl-group");return m(),c(l,null,[e(A,{merge:"",indent:"",full:""},{default:r(()=>[u,_,h,y]),_:1}),e(A,{dir:"vertical",merge:"",indent:"",full:"",class:"m-t-lg",style:{height:"240px"}},{default:r(()=>[g,f,b,x]),_:1})],64)}return k({render:F},{})}(),"hl-demo10":function(){const{createElementVNode:t,resolveComponent:n,withCtx:r,createVNode:e,openBlock:l,createBlock:m}=V,c=t("p",{class:"m-b-md"},"\u6A2A\u5411\u5D4C\u5957",-1),u=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),_=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),h=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),g=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),f=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),b=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),x=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),F=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),i=t("p",{class:"m-b-md"},"\u7EB5\u5411\u5D4C\u5957",-1),a=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),E=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),A=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),z=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),w=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),D=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),B=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),v=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),S=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),$=t("p",{class:"m-b-md"},"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),q=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),P=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),W=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),L=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),U=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),Y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),T=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),I=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),j=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),Q=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),X=t("p",{class:"m-b-md"},"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),J=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),M=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),H=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),N=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),K=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),O=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),re=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),le=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),oe=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1);function ne(ct,ht){const C=n("hl-group"),R=n("hl-col"),se=n("hl-row");return l(),m(se,{gap:"var(--lg)"},{default:r(()=>[e(R,{span:"md:col-12"},{default:r(()=>[c,e(C,{dir:"horizontal",merge:"",indent:"",full:"full-x",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[u,_,h]),_:1}),e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[y,g,f]),_:1}),e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[b,x,F]),_:1})]),_:1})]),_:1}),e(R,{span:"md:col-12"},{default:r(()=>[i,e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[a,E,A]),_:1}),e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[z,w,D]),_:1}),e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[B,v,S]),_:1})]),_:1})]),_:1}),e(R,{span:"md:col-12",class:"m-t-lg"},{default:r(()=>[$,e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[q,P]),_:1}),e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[W,L]),_:1}),e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[U,Y]),_:1})]),_:1}),e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(C,{dir:"vertical",full:"",merge:"",indent:"",class:"dom-area","data-name":"G3"},{default:r(()=>[T,I]),_:1}),e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[j,Q]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{span:"md:col-12",class:"m-t-lg"},{default:r(()=>[X,e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[J,M]),_:1}),e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[H,N]),_:1}),e(C,{dir:"vertical",merge:"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[K,O]),_:1})]),_:1}),e(C,{dir:"horizontal",merge:"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[re,le,oe]),_:1})]),_:1})]),_:1})]),_:1})}return k({render:ne},{})}(),"hl-demo11":function(){const{resolveComponent:t,createVNode:n,createTextVNode:r,withCtx:e,openBlock:l,createBlock:m}=V,c=r("\u786E\u5B9A"),u=r("-"),_=r("+");function h(g,f){const b=t("hl-date-picker"),x=t("hl-button"),F=t("hl-group"),i=t("hl-col"),a=t("hl-input"),E=t("hl-row");return l(),m(E,{gap:"var(--md)"},{default:e(()=>[n(i,{span:"col"},{default:e(()=>[n(F,{size:"lg",indent:"",block:"",merge:""},{default:e(()=>[n(b,{placeholder:"placeholder"}),n(x,{type:"primary"},{default:e(()=>[c]),_:1})]),_:1})]),_:1}),n(i,{span:"col"},{default:e(()=>[n(F,{size:"sm",indent:"",block:"",merge:""},{default:e(()=>[n(x,{type:"primary"},{default:e(()=>[u]),_:1}),n(a,{class:"w-xs",placeholder:"placeholder"}),n(x,{type:"primary"},{default:e(()=>[_]),_:1})]),_:1})]),_:1})]),_:1})}return k({render:h},{})}(),"hl-demo12":function(){const{resolveComponent:t,createVNode:n,createTextVNode:r,withCtx:e,openBlock:l,createBlock:m}=V,c=r("\u786E\u5B9A");function u(h,y){const g=t("hl-input"),f=t("hl-time-picker"),b=t("hl-button"),x=t("hl-group");return l(),m(x,{disabled:"",indent:"",block:"",gap:"var(--sm)"},{default:e(()=>[n(g,{class:"w-xs",placeholder:"placeholder"}),n(f,{placeholder:"placeholder"}),n(b,{type:"primary"},{default:e(()=>[c]),_:1})]),_:1})}return k({render:u},{})}(),"hl-demo13":function(){const{resolveComponent:t,createVNode:n,withCtx:r,openBlock:e,createBlock:l}=V;function m(u,_){const h=t("hl-input"),y=t("hl-time-picker"),g=t("hl-group");return e(),l(g,{fill:"",indent:"",block:"",gap:"var(--sm)"},{default:r(()=>[n(h,{class:"w-xs",placeholder:"placeholder"}),n(y,{placeholder:"placeholder"})]),_:1})}return k({render:m},{})}()}},_e=o("h1",null,"Group \u7EC4",-1),ye=o("p",null,"Group \u662F\u9E3F\u9E3E\u4E2D\u6700\u5177\u6709\u7279\u70B9\u7684\u529F\u80FD\u4E4B\u4E00\uFF0C\u5B83\u66F4\u591A\u7528\u4E8E\u9875\u9762\u5143\u7D20\u7684\u5E03\u5C40\u6784\u9020\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),ge=o("h2",{id:"ji-ben-shi-yong"},[o("a",{class:"header-anchor",href:"#ji-ben-shi-yong"}),s(" \u57FA\u672C\u4F7F\u7528")],-1),xe=o("p",null,[s("\u901A\u5E38\u6211\u4EEC\u5C06\u5143\u7D20\u4E0E\u5143\u7D20\u7684\u7EC4\u5408\u7528"),o("code",null,"<div>"),s("\u5305\u88F9\u8D77\u6765\uFF0C\u6B64\u65F6\u4E0D\u59A8\u5C1D\u8BD5\u5C06\u5B83\u4EEC\u653E\u5230\u4E00\u4E2A"),o("code",null,"group"),s("\u7EC4\u91CC\u3002")],-1),fe=o("div",null,[o("p",null,[s("\u4E3A\u4E86\u66F4\u597D\u7684\u5BF9\u5B50\u5143\u7D20\u8FDB\u884C\u6837\u5F0F\u63A7\u5236\uFF0CGroup \u7EC4\u4EF6\u4F1A\u81EA\u52A8\u4E3A\u5B50\u5143\u7D20\u589E\u52A0 "),o("code",null,".group-item"),s(" \u7C7B\u3002")])],-1),be=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ee=o("h2",{id:"block"},[o("a",{class:"header-anchor",href:"#block"}),s(" Block")],-1),Fe=o("p",null,[s("\u9ED8\u8BA4\u7684 Group \u7EC4\u4EF6\u662F "),o("code",null,"display:inline-flex"),s(" \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),o("code",null,"block"),s(" \u5C06\u5176\u8BBE\u7F6E\u4E3A\u5757\u5143\u7D20\u3002")],-1),Be=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ce=o("h2",{id:"huan-xing"},[o("a",{class:"header-anchor",href:"#huan-xing"}),s(" \u6362\u884C")],-1),ve=o("p",null,[s("\u4F7F\u7528"),o("code",null,"wrap"),s("\u7C7B\u53EF\u4EE5\u4F7F\u7EC4\u5143\u7D20\u8D85\u51FA"),o("code",null,"group"),s("\u5BBD\u5EA6\u65F6\u81EA\u52A8\u6362\u884C")],-1),Ae=o("div",null,[o("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u63D2\u5165\u4E00\u884C\u5BBD\u5EA6\u4E3A 100%\u7684 div \u6765\u4F7F\u5143\u7D20\u5F3A\u5236\u6362\u884C")],-1),we=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--md)" wrap>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
  </hl-group>
</template>
`)],-1),De=o("h2",{id:"pai-lie-fang-shi"},[o("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),s(" \u6392\u5217\u65B9\u5F0F")],-1),Ie=o("p",null,[s("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),o("code",null,'dir="horizontal"'),s(" \u6216 "),o("code",null,'dir="vertical"'),s(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u5B83\u4EEC\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),Ge=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ke=o("h2",{id:"rong-he"},[o("a",{class:"header-anchor",href:"#rong-he"}),s(" \u878D\u5408")],-1),ze=o("p",null,"\u589E\u52A0 merge \u5C5E\u6027\u53EF\u4F7F\u7EC4\u5185\u6210\u5458\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u3002\u54EA\u6015\u7EC4\u5185\u6210\u5458\u62E5\u6709\u5404\u81EA\u7684\u8FB9\u8DDD\u548C\u5706\u89D2\u4E5F\u80FD\u88AB\u6B63\u786E\u7684\u5904\u7406\u3002",-1),Ne=o("div",null,[o("p",null,[s("\u4F7F\u7528 "),o("code",null,"deep-merge"),s(" \u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u6210\u5458\u7684\u6DF1\u5EA6\u878D\u5408\uFF0C\u65E0\u8BBA\u5B83\u7684\u4E0A\u9762\u5D4C\u5957\u4E86\u591A\u5C11\u5C42\u7684dom\u7ED3\u6784\u3002")])],-1),Ve=o("pre",null,[o("code",{class:"html"},` <template>
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
  </hl-row>
</template>
`)],-1),Te=o("h2",{id:"suo-jin"},[o("a",{class:"header-anchor",href:"#suo-jin"}),s(" \u7F29\u8FDB")],-1),Se=o("p",null,[s("\u7F29\u8FDB\u6807\u7B7E "),o("code",null,"indent"),s(" \u7528\u4E8E\u7F29\u51CF\u7EC4\u6210\u5458\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u4F60\u53EF\u4EE5\u76F4\u89C2\u7684\u770B\u5230\u878D\u5408\u7684\u5143\u7D20\u4F1A\u81EA\u52A8\u51CF\u53BB\u76F8\u8FDE\u63A5\u7684\u8FB9\u6846\u3002")],-1),je=o("div",null,[o("p",null,[s("\u63A8\u8350\u4F7F\u7528"),o("code",null,"gap"),s("\u5C5E\u6027\u6765\u8BBE\u7F6E\u95F4\u9699\uFF0C\u56E0\u4E3A"),o("code",null,"indent"),s("\u4F7F\u7528\u7684\u662F"),o("code",null,"margin:"),s("\u5C5E\u6027\u6240\u4EE5\u5B83\u4EEC\u4F1A\u53D7\u5230 dom \u6E32\u67D3\u987A\u5E8F\u7684\u5F71\u54CD\u3002\u5982\u4E0B\uFF1A")])],-1),qe=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),$e=o("h2",{id:"jian-xi"},[o("a",{class:"header-anchor",href:"#jian-xi"}),s(" \u95F4\u9699")],-1),Pe=o("p",null,[s("\u4F7F\u7528"),o("code",null,"gap"),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap"},"\u539F\u751F\u5C5E\u6027"),s("\u6765\u8BBE\u7F6E\u7EC4\u6210\u5458\u7684\u95F4\u9699\u3002")],-1),We=o("div",null,[o("p",null,[o("code",null,"gap"),s(" \u5C5E\u6027\u540C\u65F6\u8BBE\u7F6E\u4E86\u6A2A\u5411\u548C\u7EB5\u5411\u7684\u95F4\u9699\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E"),o("code",null,'gap-x=""'),s("\u548C"),o("code",null,'gap-y=""'),s(" \u5C5E\u6027")])],-1),Le=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Qe=o("h2",{id:"dui-qi-fang-shi"},[o("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),s(" \u5BF9\u9F50\u65B9\u5F0F")],-1),Xe=o("p",null,[s("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),o("code",null,"align"),s(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u7EC4\u6210\u5458\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002")],-1),Je=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Me=te('<div class="doc-tip"><p>\u4E3A <code>align</code> \u8BBE\u7F6E <code>items-left</code> , <code>items-right</code> \u7B49\u5BF9\u9F50\u6837\u5F0F\uFF0C\u5373\u53EF\u6539\u53D8\u5B50\u5143\u7D20\u7684\u6A2A\u5411\u6392\u5217\u65B9\u5F0F\uFF0C\u53C2\u8003 <a href="#/zh-CN/style/flex">Flex \u5F39\u6027\u5E03\u5C40</a></p></div><h2 id="zi-gua-ying"><a class="header-anchor" href="#zi-gua-ying"></a> \u81EA\u9002\u5E94</h2><p>\u4E3A Group \u7EC4\u4EF6\u589E\u52A0 <code>full</code> \u5C5E\u6027\uFF0C\u53EF\u4F7F\u7EC4\u548C\u7EC4\u5185\u6210\u5458\u90FD\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u3002</p>',3),He=o("div",null,[o("p",null,[s("\u4E3A "),o("code",null,"full"),s("\u5C5E\u6027\u4F20\u5165 "),o("code",null,"full-x"),s(" \u6216\u8005 "),o("code",null,"full-y"),s(" \u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u5B83\u7684\u62C9\u4F38\u65B9\u5411")])],-1),Ke=o("pre",null,[o("code",{class:"html"},` <template>
  <p>\u4F7F\u7528<code>full</code>\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6</p>
  <hl-row class="m-t-md" gap="var(--lg)">
    <hl-col span="col">
      <hl-group merge indent full dir="vertical" style="height:20vh">
        <div class="display-flex border border-primary items-center items-middle radius-lg text-primary">Auto</div>
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
`)],-1),Oe=o("h2",{id:"jing-tai-zu-cheng-yuan"},[o("a",{class:"header-anchor",href:"#jing-tai-zu-cheng-yuan"}),s(" \u9759\u6001\u7EC4\u6210\u5458")],-1),Re=o("p",null,[s("\u8D4B\u4E88\u7EC4\u6210\u5458 "),o("code",null,".static"),s(" \u7C7B\uFF0C\u53EF\u5C06\u7EC4\u6210\u5458\u8BBE\u7F6E\u6210\u9759\u6001\uFF0C\u8FD9\u6837\u5B83\u5C31\u4E0D\u4F1A\u6839\u636E\u5BBD\u5EA6\u800C\u53D8\u5316\u4E86\u3002")],-1),Ue=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ye=o("h2",{id:"zu-qian-tao"},[o("a",{class:"header-anchor",href:"#zu-qian-tao"}),s(" \u7EC4\u5D4C\u5957")],-1),Ze=o("p",null,"\u7EC4\u91CC\u9762\u8FD8\u53EF\u4EE5\u518D\u5D4C\u5957\u7EC4\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6784\u9020\u66F4\u52A0\u590D\u6742\u7684\u5E03\u5C40\u3002\u540C\u65F6\u5B83\u4EEC\u7684\u4E0B\u7EA7\u8282\u70B9\u4E4B\u95F4\u8FD8\u4FDD\u6301\u76F8\u4E92\u878D\u5408\u3002\u4F7F\u7528\u65B9\u6CD5\u5982 ui > li \u4E00\u6837\u7B80\u5355\u3002",-1),et=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      <p class="m-b-md">\u6A2A\u5411\u5D4C\u5957</p>
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
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
        <hl-group
          dir="vertical"
          merge
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
          merge
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
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
        </hl-group>
        <hl-group
          dir="horizontal"
          merge
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
          dir="horizontal"
          merge
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
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            dir="horizontal"
            merge
            indent
            full
            class="dom-area"
            data-name="G3"
          >
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            dir="horizontal"
            merge
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
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            merge
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
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
            <span class="display-flex border border-primary items-center items-middle radius-lg text-primary p-xs">Item</span>
          </hl-group>
          <hl-group
            dir="vertical"
            merge
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
            merge
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
          dir="horizontal"
          merge
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
`)],-1),tt=o("h2",{id:"size"},[o("a",{class:"header-anchor",href:"#size"}),s(" Size")],-1),rt=o("p",null,[o("code",null,"size"),s(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 size \u5C5E\u6027\u7684\u503C\u3002")],-1),lt=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ot=o("h2",{id:"disabled"},[o("a",{class:"header-anchor",href:"#disabled"}),s(" Disabled")],-1),nt=o("p",null,[o("code",null,"disabled"),s(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 disabled \u5C5E\u6027\u7684\u503C\u3002")],-1),st=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group disabled indent block gap="var(--sm)">
    <hl-input class="w-xs" placeholder="placeholder" />
    <hl-time-picker placeholder="placeholder" />
    <hl-button type="primary">\u786E\u5B9A</hl-button>
  </hl-group>
</template>
`)],-1),ut=o("h2",{id:"fill"},[o("a",{class:"header-anchor",href:"#fill"}),s(" Fill")],-1),dt=o("p",null,[o("code",null,"fill"),s(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 fill \u5C5E\u6027\u7684\u503C\u3002")],-1),at=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group fill indent block gap="var(--sm)">
    <hl-input class="w-xs" placeholder="placeholder" />
    <hl-time-picker placeholder="placeholder" />
  </hl-group>
</template>
`)],-1),it=te('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dir</td><td>\u6392\u5217\u65B9\u5411</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>top / middle / end / left / center / right / around /evenly / between</td><td></td></tr><tr><td>merge</td><td>\u878D\u5408</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>static</td><td>\u9759\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indent</td><td>\u8FB9\u8DDD\u7F29\u8FDB</td><td>boolean / string</td><td>\u81EA\u5B9A\u4E49\u7F29\u8FDB\u5C3A\u5BF8</td><td>false</td></tr><tr><td>gap</td><td>\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap-x</td><td>\u6A2A\u5411\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap-y</td><td>\u7EB5\u5411\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>full</td><td>\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5C3A\u5BF8</td><td>boolean / string</td><td>full-x (\u6A2A\u5411\u62C9\u4F38) / full-y (\u7EB5\u5411\u62C9\u4F38)</td><td>false</td></tr><tr><td>wrap</td><td>\u6362\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u8F6C\u6362\u4E3A\u5757\u5143\u7D20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 size \u5C5E\u6027\u7684\u503C</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 disabled \u5C5E\u6027\u7684\u503C</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 fill \u5C5E\u6027\u7684\u503C</td><td>false</td></tr></tbody></table>',2);function pt(t,n,r,e,l,m){const c=G("hl-demo0"),u=G("demo-block"),_=G("hl-demo1"),h=G("hl-demo2"),y=G("hl-demo3"),g=G("hl-demo4"),f=G("hl-demo5"),b=G("hl-demo6"),x=G("hl-demo7"),F=G("hl-demo8"),i=G("hl-demo9"),a=G("hl-demo10"),E=G("hl-demo11"),A=G("hl-demo12"),z=G("hl-demo13"),w=G("right-nav");return ie(),pe(me,null,[o("section",null,[_e,ye,ge,xe,p(u,{fs:""},{source:d(()=>[p(c)]),highlight:d(()=>[be]),default:d(()=>[fe]),_:1}),Ee,Fe,p(u,{fs:""},{source:d(()=>[p(_)]),highlight:d(()=>[Be]),_:1}),Ce,ve,p(u,{fs:""},{source:d(()=>[p(h)]),highlight:d(()=>[we]),default:d(()=>[Ae]),_:1}),De,Ie,p(u,{fs:""},{source:d(()=>[p(y)]),highlight:d(()=>[Ge]),_:1}),ke,ze,p(u,{fs:""},{source:d(()=>[p(g)]),highlight:d(()=>[Ve]),default:d(()=>[Ne]),_:1}),Te,Se,p(u,{fs:""},{source:d(()=>[p(f)]),highlight:d(()=>[qe]),default:d(()=>[je]),_:1}),$e,Pe,p(u,{fs:""},{source:d(()=>[p(b)]),highlight:d(()=>[Le]),default:d(()=>[We]),_:1}),Qe,Xe,p(u,{fs:""},{source:d(()=>[p(x)]),highlight:d(()=>[Je]),_:1}),Me,p(u,{fs:""},{source:d(()=>[p(F)]),highlight:d(()=>[Ke]),default:d(()=>[He]),_:1}),Oe,Re,p(u,{fs:""},{source:d(()=>[p(i)]),highlight:d(()=>[Ue]),_:1}),Ye,Ze,p(u,{fs:""},{source:d(()=>[p(a)]),highlight:d(()=>[et]),_:1}),tt,rt,p(u,{fs:""},{source:d(()=>[p(E)]),highlight:d(()=>[lt]),_:1}),ot,nt,p(u,{fs:""},{source:d(()=>[p(A)]),highlight:d(()=>[st]),_:1}),ut,dt,p(u,{fs:""},{source:d(()=>[p(z)]),highlight:d(()=>[at]),_:1}),it]),p(w)],64)}var Et=ce(he,[["render",pt]]);export{Et as default};
