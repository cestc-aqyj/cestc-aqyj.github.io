var ne=Object.defineProperty;var re=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var le=(t,s,r)=>s in t?ne(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,N=(t,s)=>{for(var r in s||(s={}))ae.call(s,r)&&le(t,r,s[r]);if(re)for(var r of re(s))ie.call(s,r)&&le(t,r,s[r]);return t};import{H as D,L as pe,W as me,Q as o,X as i,P as n,a4 as ce,aJ as A,S as d,o as oe}from"./vue.059774a0.js";import{H as te}from"./hongluan-icons.5b925e95.js";import{_ as he}from"./index.04f8f626.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";const _e={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:t,createVNode:s,createTextVNode:r,withCtx:e,createElementVNode:l,openBlock:p,createBlock:m}=A,u=r("\u641C \u7D22"),y=l("h5",null,"\u6D4B\u8BD5",-1),c=l("div",null,"\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08",-1);function g(E,F){const _=t("hl-input"),a=t("hl-button"),b=t("hl-group"),B=t("hl-col"),I=t("two-user-group"),v=t("hl-icon"),S=t("hl-row");return p(),m(S,{align:"items-middle"},{default:e(()=>[s(B,{span:"col"},{default:e(()=>[s(b,{class:"dom-area",gap:"var(--sm)","data-name":"Group"},{default:e(()=>[s(_,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),s(a,{type:"primary"},{default:e(()=>[u]),_:1})]),_:1})]),_:1}),s(B,{span:"col"},{default:e(()=>[s(b,{gap:"var(--md)",full:"",align:"items-middle",class:"dom-area","data-name":"Group"},{default:e(()=>[s(v,{type:"primary",size:"xl",class:"static",fill:"",radius:""},{default:e(()=>[s(I)]),_:1}),s(b,{dir:"vertical",class:"dom-area","data-name":"Group"},{default:e(()=>[y,c]),_:1})]),_:1})]),_:1})]),_:1})}const{defineComponent:h}=A,{TwoUserGroup:x}=te,f=h({components:{TwoUserGroup:x}});return N({render:g},f)}(),"hl-demo1":function(){const{createTextVNode:t,resolveComponent:s,withCtx:r,createVNode:e,Fragment:l,openBlock:p,createElementBlock:m}=A,u=t("Group 1"),y=t("Group 1"),c=t("Group 2"),g=t("Group 2"),h=t("Group 3"),x=t("Group 3");function f(F,_){const a=s("hl-button"),b=s("hl-group");return p(),m(l,null,[e(b,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:r(()=>[e(a,{type:"success"},{default:r(()=>[u]),_:1}),e(a,{type:"success"},{default:r(()=>[y]),_:1})]),_:1}),e(b,{merge:"",class:"bg-stripes m-b-md m-r-md"},{default:r(()=>[e(a,{type:"danger"},{default:r(()=>[c]),_:1}),e(a,{type:"danger"},{default:r(()=>[g]),_:1})]),_:1}),e(b,{merge:"",class:"bg-stripes",block:""},{default:r(()=>[e(a,{type:"primary"},{default:r(()=>[h]),_:1}),e(a,{type:"primary"},{default:r(()=>[x]),_:1})]),_:1})],64)}return N({render:f},{})}(),"hl-demo2":function(){const{createTextVNode:t,resolveComponent:s,withCtx:r,createVNode:e,openBlock:l,createBlock:p}=A,m=t("Group Item"),u=t("Group Item"),y=t("Group Item"),c=t("Group Item"),g=t("Group Item"),h=t("Group Item");function x(E,F){const _=s("hl-button"),a=s("hl-group");return l(),p(a,{gap:"var(--md)",wrap:""},{default:r(()=>[e(_,{style:{width:"200px"},type:"primary"},{default:r(()=>[m]),_:1}),e(_,{style:{width:"200px"},type:"primary"},{default:r(()=>[u]),_:1}),e(_,{style:{width:"200px"},type:"primary"},{default:r(()=>[y]),_:1}),e(_,{style:{width:"200px"},type:"primary"},{default:r(()=>[c]),_:1}),e(_,{style:{width:"200px"},type:"primary"},{default:r(()=>[g]),_:1}),e(_,{style:{width:"200px"},type:"primary"},{default:r(()=>[h]),_:1})]),_:1})}return N({render:x},{})}(),"hl-demo3":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,openBlock:p,createBlock:m}=A,u=t("p",{class:"p-b-md"},"\u6A2A\u5411\u6392\u5217 horizontal",-1),y=s("Group Item"),c=s("Group Item"),g=t("p",{class:"p-b-md"},"\u7EB5\u5411\u6392\u5217 vertical",-1),h=s("Group Item"),x=s("Group Item");function f(F,_){const a=r("hl-button"),b=r("hl-group"),B=r("hl-col"),I=r("hl-row");return p(),m(I,null,{default:e(()=>[l(B,{span:"col"},{default:e(()=>[u,l(b,{dir:"horizontal",gap:"var(--md)",class:"bg-stripes"},{default:e(()=>[l(a,{type:"primary"},{default:e(()=>[y]),_:1}),l(a,{type:"primary"},{default:e(()=>[c]),_:1})]),_:1})]),_:1}),l(B,{span:"col"},{default:e(()=>[g,l(b,{dir:"vertical",gap:"var(--md)",class:"bg-stripes"},{default:e(()=>[l(a,{type:"primary"},{default:e(()=>[h]),_:1}),l(a,{type:"primary"},{default:e(()=>[x]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:f},{})}(),"hl-demo4":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,Fragment:p,openBlock:m,createElementBlock:u}=A,y=t("p",{class:"p-b-md"},"\u6A2A\u5411\u878D\u5408",-1),c=s("Group Item"),g=s("Group Item"),h=s("Group Item"),x=s("Group Item"),f=t("p",{class:"p-b-md"},"\u7EB5\u5411\u878D\u5408",-1),E=s("Group Item"),F=s("Group Item"),_=s("Group Item"),a=s("Group Item"),b=t("p",{class:"p-b-md"},"\u57FA\u672C\u878D\u5408",-1),B=s("\u6570\u636E\u6D41"),I=s("\u4F20\u8F93\u5C5E\u6027\u503C"),v=s("\u5DF2\u65AD\u7EBF"),S=s("\u5F85\u6062\u590D"),G=s("\u5176\u4ED6"),j=t("p",{class:"p-b-md"},"\u6DF1\u5EA6\u878D\u5408",-1),U=s("\u6570\u636E\u6D41"),V=s("\u4F20\u8F93\u5C5E\u6027\u503C"),k=s("\u5DF2\u65AD\u7EBF"),z=s("\u5F85\u6062\u590D"),P=s("\u5176\u4ED6");function H(Q,q){const w=r("hl-button"),M=r("hl-group"),X=r("hl-col"),J=r("hl-row"),K=r("hl-input"),O=r("two-more"),R=r("hl-icon"),T=r("hl-dropdown-item"),Y=r("hl-dropdown-menu"),Z=r("hl-dropdown");return m(),u(p,null,[l(J,null,{default:e(()=>[l(X,{span:"col"},{default:e(()=>[y,l(M,{dir:"horizontal",merge:""},{default:e(()=>[l(w,{type:"primary"},{default:e(()=>[c]),_:1}),l(w,{type:"primary"},{default:e(()=>[g]),_:1})]),_:1}),l(M,{dir:"horizontal",merge:"",block:"",class:"m-t-lg"},{default:e(()=>[l(w,{type:"primary",outline:""},{default:e(()=>[h]),_:1}),l(w,{type:"primary",outline:""},{default:e(()=>[x]),_:1})]),_:1})]),_:1}),l(X,{span:"col"},{default:e(()=>[f,l(M,{dir:"vertical",merge:""},{default:e(()=>[l(w,{type:"primary"},{default:e(()=>[E]),_:1}),l(w,{type:"primary"},{default:e(()=>[F]),_:1})]),_:1}),l(M,{dir:"vertical",merge:"",class:"m-l-lg"},{default:e(()=>[l(w,{type:"primary",outline:""},{default:e(()=>[_]),_:1}),l(w,{type:"primary",outline:""},{default:e(()=>[a]),_:1})]),_:1})]),_:1})]),_:1}),l(J,{class:"m-t-xxl"},{default:e(()=>[l(X,{span:"col"},{default:e(()=>[b,l(M,{dir:"horizontal",merge:"",indent:"",class:"m-r-md"},{default:e(()=>[l(K,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),t("div",null,[t("div",null,[t("div",null,[t("div",null,[l(Z,null,{dropdown:e(()=>[l(Y,null,{default:e(()=>[l(T,null,{default:e(()=>[B]),_:1}),l(T,null,{default:e(()=>[I]),_:1}),l(T,null,{default:e(()=>[v]),_:1}),l(T,{disabled:""},{default:e(()=>[S]),_:1}),l(T,{divider:""}),l(T,null,{default:e(()=>[G]),_:1})]),_:1})]),default:e(()=>[l(w,{type:"primary"},{default:e(()=>[l(R,null,{default:e(()=>[l(O)]),_:1})]),_:1})]),_:1})])])])])]),_:1})]),_:1}),l(X,{span:"col"},{default:e(()=>[j,l(M,{dir:"horizontal","deep-merge":"",indent:"",class:"m-r-md"},{default:e(()=>[l(K,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}),t("div",null,[t("div",null,[t("div",null,[t("div",null,[l(Z,null,{dropdown:e(()=>[l(Y,null,{default:e(()=>[l(T,null,{default:e(()=>[U]),_:1}),l(T,null,{default:e(()=>[V]),_:1}),l(T,null,{default:e(()=>[k]),_:1}),l(T,{disabled:""},{default:e(()=>[z]),_:1}),l(T,{divider:""}),l(T,null,{default:e(()=>[P]),_:1})]),_:1})]),default:e(()=>[l(w,{type:"primary"},{default:e(()=>[l(R,null,{default:e(()=>[l(O)]),_:1})]),_:1})]),_:1})])])])])]),_:1})]),_:1})]),_:1})],64)}const{defineComponent:$}=A,{TwoMore:W}=te,L=$({components:{TwoMore:W}});return N({render:H},L)}(),"hl-demo5":function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,createVNode:e,createTextVNode:l,openBlock:p,createBlock:m}=A,u=t("p",null,"\u6A2A\u5411\u7F29\u8FDB\u878D\u5408",-1),y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),c=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),g=t("p",null,"\u7EB5\u5411\u7F29\u8FDB\u878D\u5408",-1),h=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),x=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Group Item",-1),f=t("p",null,[l("\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5177\u4F53\u6570\u503C"),t("code",null,'indent="-2px"'),l("\u6765\u7F29\u8FDB\u5143\u7D20")],-1),E=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),F=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),_=t("p",null,[l("\u6B63\u503C\u8BBE\u7F6E"),t("code",null,'indent="12px"'),l(),t("span",{class:"font-bold text-danger"},"\u4E0D\u63A8\u8350")],-1),a=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1),b=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs",style:{"--border-width":"2px"}},"Group Item",-1);function B(v,S){const G=s("hl-group"),j=s("hl-col"),U=s("hl-row");return p(),m(U,null,{default:r(()=>[e(j,{span:"md:col-12"},{default:r(()=>[u,e(G,{dir:"horizontal",class:"m-t-sm",merge:"",indent:""},{default:r(()=>[y,c]),_:1})]),_:1}),e(j,{span:"md:col-12"},{default:r(()=>[g,e(G,{dir:"vertical",class:"m-t-sm",merge:"",indent:""},{default:r(()=>[h,x]),_:1})]),_:1}),e(j,{span:"col",class:"m-t-xl"},{default:r(()=>[f,e(G,{dir:"horizontal",class:"m-t-sm",merge:"",indent:"-2px"},{default:r(()=>[E,F]),_:1})]),_:1}),e(j,{span:"col",class:"m-t-xl"},{default:r(()=>[_,e(G,{dir:"horizontal",class:"m-t-sm",indent:"12px"},{default:r(()=>[a,b]),_:1})]),_:1})]),_:1})}return N({render:B},{})}(),"hl-demo6":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,openBlock:p,createBlock:m}=A,u=t("p",null,[t("code",null,"gap"),s("\u80FD\u66F4\u53CB\u597D\u7684\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u6392\u5E8F")],-1),y=s("Item 1"),c=s("Item 2"),g=s("Item 3"),h=s("Item 4"),x=t("p",null,[t("code",null,"indent"),s("\u65E0\u6CD5\u5BF9\u7EC4\u6210\u5458\u8FDB\u884C\u53CB\u597D\u6392\u5E8F")],-1),f=s("Item 1"),E=s("Item 2"),F=s("Item 3"),_=s("Item 4");function a(B,I){const v=r("hl-button"),S=r("hl-group"),G=r("hl-col"),j=r("hl-row");return p(),m(j,null,{default:e(()=>[l(G,{span:"md:col-12"},{default:e(()=>[u,l(S,{dir:"horizontal",gap:"var(--md)",class:"m-t-sm"},{default:e(()=>[l(v,{type:"primary",class:"order-3"},{default:e(()=>[y]),_:1}),l(v,{type:"primary",class:"order-4"},{default:e(()=>[c]),_:1}),l(v,{type:"primary",class:"order-1"},{default:e(()=>[g]),_:1}),l(v,{type:"primary",class:"order-2"},{default:e(()=>[h]),_:1})]),_:1})]),_:1}),l(G,{span:"md:col-12"},{default:e(()=>[x,l(S,{dir:"horizontal",indent:"var(--md)",class:"m-t-sm"},{default:e(()=>[l(v,{type:"danger",class:"order-3"},{default:e(()=>[f]),_:1}),l(v,{type:"danger",class:"order-4"},{default:e(()=>[E]),_:1}),l(v,{type:"danger",class:"order-1"},{default:e(()=>[F]),_:1}),l(v,{type:"danger",class:"order-2"},{default:e(()=>[_]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:a},{})}(),"hl-demo7":function(){const{createTextVNode:t,resolveComponent:s,withCtx:r,createVNode:e,createElementVNode:l,Fragment:p,openBlock:m,createElementBlock:u}=A,y=t("items-top"),c=t("items-middle"),g=t("items-bottom"),h=t("items-left"),x=t("items-center"),f=t("items-right"),E=l("h4",{class:"m-t-xl m-b-xxl"},"\u4F7F\u7528\u6848\u4F8B\uFF1A",-1),F=l("span",null,"\u6BB5",-1),_=l("h4",null,"\u4E3B\u52A8\u5F0FCSS\u751F\u6210\u7CFB\u7EDF",-1),a=l("div",null," \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002 ",-1);function b(j,U){const V=s("hl-button"),k=s("hl-group"),z=s("hl-col"),P=s("hl-row"),H=s("two-phone"),$=s("hl-icon"),W=s("hl-thumb"),L=s("two-mail"),Q=s("two-info");return m(),u(p,null,[e(P,{gap:"var(--xl)"},{default:r(()=>[e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-top",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(V,{type:"primary",class:"w-sm"},{default:r(()=>[y]),_:1})]),_:1})]),_:1}),e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-middle",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(V,{type:"primary",class:"w-sm"},{default:r(()=>[c]),_:1})]),_:1})]),_:1}),e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-bottom",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(V,{type:"primary",class:"w-sm"},{default:r(()=>[g]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{gap:"var(--xl)",class:"m-t-xxl"},{default:r(()=>[e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-left",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(V,{type:"primary",class:"w-sm"},{default:r(()=>[h]),_:1})]),_:1})]),_:1}),e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-center",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(V,{type:"primary",class:"w-sm"},{default:r(()=>[x]),_:1})]),_:1})]),_:1}),e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-right",class:"bg-stripes",style:{height:"100px",width:"100%"}},{default:r(()=>[e(V,{type:"primary",class:"w-sm"},{default:r(()=>[f]),_:1})]),_:1})]),_:1})]),_:1}),E,e(P,{class:"m-t-xxl"},{default:r(()=>[e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-middle",gap:"var(--md)"},{default:r(()=>[e(V,{type:"primary",equal:"",round:"",outline:""},{icon:r(()=>[e($,null,{default:r(()=>[e(H)]),_:1})]),_:1}),e(W,{round:"",type:"primary",size:"xxxl"},{default:r(()=>[F]),_:1}),e(V,{type:"primary",equal:"",round:"",outline:""},{icon:r(()=>[e($,null,{default:r(()=>[e(L)]),_:1})]),_:1})]),_:1})]),_:1}),e(z,{span:"col"},{default:r(()=>[e(k,{align:"items-top",gap:"var(--md)"},{default:r(()=>[e($,{type:"info",size:"xl",border:1.2,class:"no-shrink"},{default:r(()=>[e(Q)]),_:1},8,["border"]),e(k,{dir:"vertical",gap:"var(--xxs)"},{default:r(()=>[_,a]),_:1})]),_:1})]),_:1})]),_:1})],64)}const{defineComponent:B}=A,{TwoPhone:I,TwoMail:v,TwoInfo:S}=te,G=B({components:{TwoPhone:I,TwoMail:v,TwoInfo:S}});return N({render:b},G)}(),"hl-demo8":function(){const{createElementVNode:t,createTextVNode:s,resolveComponent:r,withCtx:e,createVNode:l,Fragment:p,openBlock:m,createElementBlock:u}=A,y=t("p",null,[s("\u4F7F\u7528"),t("code",null,"full"),s("\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6")],-1),c=t("span",null,"Auto",-1),g=s("23"),h=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),x=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),f=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),E=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),F=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},"Auto",-1),_=t("p",{class:"m-b-md"},[s("\u6A2A\u5411\u81EA\u9002\u5E94"),t("code",null,"full-x")],-1),a=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),b=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),B=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),I=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),v=t("p",{class:"m-b-md"},[s("\u7EB5\u5411\u81EA\u9002\u5E94"),t("code",null,"full-y")],-1),S=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),G=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),j=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),U=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),V=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),k=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),z=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),P=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1);function H(W,L){const Q=r("hl-button"),q=r("hl-group"),w=r("hl-col"),M=r("hl-row");return m(),u(p,null,[y,l(M,{class:"m-t-md",gap:"var(--lg)"},{default:e(()=>[l(w,{span:"col"},{default:e(()=>[l(q,{merge:"",indent:"",full:"",dir:"vertical",style:{height:"20vh"}},{default:e(()=>[l(q,{class:"display-flex border border-primary items-center items-middle radius-lg text-primary"},{default:e(()=>[c,l(Q,{type:"primary"},{default:e(()=>[g]),_:1})]),_:1}),h,x]),_:1})]),_:1}),l(w,{span:"col"},{default:e(()=>[l(q,{merge:"",indent:"",full:"",style:{height:"20vh"}},{default:e(()=>[f,E,F]),_:1})]),_:1})]),_:1}),l(M,{class:"m-t-lg",gap:"var(--lg)"},{default:e(()=>[l(w,{span:"col"},{default:e(()=>[_,l(q,{merge:"",indent:"",full:"full-x",class:"m-b-md"},{default:e(()=>[a,b]),_:1}),l(q,{dir:"vertical",merge:"",indent:"",full:"full-x"},{default:e(()=>[B,I]),_:1})]),_:1}),l(w,{span:"col"},{default:e(()=>[v,l(q,{full:""},{default:e(()=>[l(q,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[S]),_:1}),l(q,{merge:"",indent:"",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[G,j]),_:1}),l(q,{merge:"",indent:"",dir:"vertical",full:"full-y",class:"m-r-md",style:{height:"135px"}},{default:e(()=>[U,V]),_:1}),l(q,{merge:"",indent:"",dir:"vertical",full:"full-y",style:{height:"135px"}},{default:e(()=>[k,z,P]),_:1})]),_:1})]),_:1})]),_:1})],64)}return N({render:H},{})}(),"hl-demo9":function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,createVNode:e,Fragment:l,openBlock:p,createElementBlock:m}=A,u=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),y=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),c=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),g=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),h=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1),x=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),f=t("div",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Auto",-1),E=t("div",{class:"static display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Static",-1);function F(a,b){const B=s("hl-group");return p(),m(l,null,[e(B,{merge:"",indent:"",full:""},{default:r(()=>[u,y,c,g]),_:1}),e(B,{dir:"vertical",merge:"",indent:"",full:"",class:"m-t-lg",style:{height:"240px"}},{default:r(()=>[h,x,f,E]),_:1})],64)}return N({render:F},{})}(),"hl-demo10":function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,createVNode:e,openBlock:l,createBlock:p}=A,m=t("p",{class:"m-b-md"},"\u6A2A\u5411\u5D4C\u5957",-1),u=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),c=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),g=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),h=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),x=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),f=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),E=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),F=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),_=t("p",{class:"m-b-md"},"\u7EB5\u5411\u5D4C\u5957",-1),a=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),b=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),B=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),I=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),v=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),S=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),G=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),j=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),U=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),V=t("p",{class:"m-b-md"},"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),k=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),z=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),P=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),H=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),$=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),W=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),L=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),Q=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),q=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),w=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),M=t("p",{class:"m-b-md"},"\u591A\u7EA7\u6DF7\u5408\u5D4C\u5957",-1),X=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),J=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),K=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),O=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),R=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),T=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),Y=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),Z=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1),se=t("span",{class:"display-flex border border-primary items-center items-middle radius-lg text-primary p-xs"},"Item",-1);function de(ht,_t){const C=s("hl-group"),ee=s("hl-col"),ue=s("hl-row");return l(),p(ue,{gap:"var(--lg)"},{default:r(()=>[e(ee,{span:"md:col-12"},{default:r(()=>[m,e(C,{"deep-merge":"",indent:"",full:"full-x",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[u,y,c]),_:1}),e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[g,h,x]),_:1}),e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[f,E,F]),_:1})]),_:1})]),_:1}),e(ee,{span:"md:col-12"},{default:r(()=>[_,e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[a,b,B]),_:1}),e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[I,v,S]),_:1}),e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[G,j,U]),_:1})]),_:1})]),_:1}),e(ee,{span:"md:col-12",class:"m-t-lg"},{default:r(()=>[V,e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[k,z]),_:1}),e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[P,H]),_:1}),e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[$,W]),_:1})]),_:1}),e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(C,{dir:"vertical",full:"","deep-merge":"",indent:"",class:"dom-area","data-name":"G3"},{default:r(()=>[L,Q]),_:1}),e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[q,w]),_:1})]),_:1})]),_:1})]),_:1}),e(ee,{span:"md:col-12",class:"m-t-lg"},{default:r(()=>[M,e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G1"},{default:r(()=>[e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[X,J]),_:1}),e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[K,O]),_:1}),e(C,{dir:"vertical","deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G3"},{default:r(()=>[R,T]),_:1})]),_:1}),e(C,{"deep-merge":"",indent:"",full:"",class:"dom-area","data-name":"G2"},{default:r(()=>[Y,Z,se]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:de},{})}(),"hl-demo11":function(){const{resolveComponent:t,createVNode:s,createTextVNode:r,withCtx:e,openBlock:l,createBlock:p}=A,m=r("\u786E\u5B9A"),u=r("-"),y=r("+");function c(h,x){const f=t("hl-date-picker"),E=t("hl-button"),F=t("hl-group"),_=t("hl-col"),a=t("hl-input"),b=t("hl-row");return l(),p(b,{gap:"var(--md)"},{default:e(()=>[s(_,{span:"col"},{default:e(()=>[s(F,{size:"lg",indent:"",block:"",merge:""},{default:e(()=>[s(f,{placeholder:"placeholder"}),s(E,{type:"primary"},{default:e(()=>[m]),_:1})]),_:1})]),_:1}),s(_,{span:"col"},{default:e(()=>[s(F,{size:"sm",indent:"",block:"",merge:""},{default:e(()=>[s(E,{type:"primary"},{default:e(()=>[u]),_:1}),s(a,{class:"w-xs",placeholder:"placeholder"}),s(E,{type:"primary"},{default:e(()=>[y]),_:1})]),_:1})]),_:1})]),_:1})}return N({render:c},{})}(),"hl-demo12":function(){const{resolveComponent:t,createVNode:s,createTextVNode:r,withCtx:e,openBlock:l,createBlock:p}=A,m=r("\u786E\u5B9A");function u(c,g){const h=t("hl-input"),x=t("hl-time-picker"),f=t("hl-button"),E=t("hl-group");return l(),p(E,{disabled:"",indent:"",block:"",gap:"var(--sm)"},{default:e(()=>[s(h,{class:"w-xs",placeholder:"placeholder"}),s(x,{placeholder:"placeholder"}),s(f,{type:"primary"},{default:e(()=>[m]),_:1})]),_:1})}return N({render:u},{})}(),"hl-demo13":function(){const{resolveComponent:t,createVNode:s,withCtx:r,openBlock:e,createBlock:l}=A;function p(u,y){const c=t("hl-input"),g=t("hl-time-picker"),h=t("hl-group");return e(),l(h,{fill:"",indent:"",block:"",gap:"var(--sm)"},{default:r(()=>[s(c,{class:"w-xs",placeholder:"placeholder"}),s(g,{placeholder:"placeholder"})]),_:1})}return N({render:p},{})}()}},ye=o("h1",null,"Group \u7EC4",-1),ge=o("p",null,"Group \u662F\u9E3F\u9E3E\u4E2D\u6700\u5177\u6709\u7279\u70B9\u7684\u529F\u80FD\u4E4B\u4E00\uFF0C\u5B83\u66F4\u591A\u7528\u4E8E\u9875\u9762\u5143\u7D20\u7684\u5E03\u5C40\u6784\u9020\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),xe=o("h2",{id:"ji-ben-shi-yong"},[o("a",{class:"header-anchor",href:"#ji-ben-shi-yong"}),d(" \u57FA\u672C\u4F7F\u7528")],-1),fe=o("p",null,[d("\u901A\u5E38\u6211\u4EEC\u5C06\u5143\u7D20\u4E0E\u5143\u7D20\u7684\u7EC4\u5408\u7528"),o("code",null,"<div>"),d("\u5305\u88F9\u8D77\u6765\uFF0C\u6B64\u65F6\u4E0D\u59A8\u5C1D\u8BD5\u5C06\u5B83\u4EEC\u653E\u5230\u4E00\u4E2A"),o("code",null,"group"),d("\u7EC4\u91CC\u3002")],-1),be=o("div",null,[o("p",null,[d("\u4E3A\u4E86\u66F4\u597D\u7684\u5BF9\u5B50\u5143\u7D20\u8FDB\u884C\u6837\u5F0F\u63A7\u5236\uFF0CGroup \u7EC4\u4EF6\u4F1A\u81EA\u52A8\u4E3A\u5B50\u5143\u7D20\u589E\u52A0 "),o("code",null,".group-item"),d(" \u7C7B\u3002")])],-1),Ee=o("pre",null,[o("code",{class:"html"},` <template>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoUserGroup } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoUserGroup },
})
<\/script>
`)],-1),Fe=o("h2",{id:"block"},[o("a",{class:"header-anchor",href:"#block"}),d(" Block")],-1),Ce=o("p",null,[d("\u9ED8\u8BA4\u7684 Group \u7EC4\u4EF6\u662F "),o("code",null,"display:inline-flex"),d(" \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),o("code",null,"block"),d(" \u5C06\u5176\u8BBE\u7F6E\u4E3A\u5757\u5143\u7D20\u3002")],-1),Be=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ve=o("h2",{id:"huan-xing"},[o("a",{class:"header-anchor",href:"#huan-xing"}),d(" \u6362\u884C")],-1),we=o("p",null,[d("\u4F7F\u7528"),o("code",null,"wrap"),d("\u7C7B\u53EF\u4EE5\u4F7F\u7EC4\u5143\u7D20\u8D85\u51FA"),o("code",null,"group"),d("\u5BBD\u5EA6\u65F6\u81EA\u52A8\u6362\u884C")],-1),Ae=o("div",null,[o("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u63D2\u5165\u4E00\u884C\u5BBD\u5EA6\u4E3A 100%\u7684 div \u6765\u4F7F\u5143\u7D20\u5F3A\u5236\u6362\u884C")],-1),De=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--md)" wrap>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
    <hl-button style="width:200px" type="primary">Group Item</hl-button>
  </hl-group>
</template>
`)],-1),Ie=o("h2",{id:"pai-lie-fang-shi"},[o("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),d(" \u6392\u5217\u65B9\u5F0F")],-1),Ge=o("p",null,[d("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),o("code",null,'dir="horizontal"'),d(" \u6216 "),o("code",null,'dir="vertical"'),d(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u5B83\u4EEC\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),ke=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ne=o("h2",{id:"rong-he"},[o("a",{class:"header-anchor",href:"#rong-he"}),d(" \u878D\u5408")],-1),Ve=o("p",null,"\u589E\u52A0 merge \u5C5E\u6027\u53EF\u4F7F\u7EC4\u5185\u6210\u5458\u975E\u5E38\u53CB\u597D\u7684\u878D\u5408\u3002\u54EA\u6015\u7EC4\u5185\u6210\u5458\u62E5\u6709\u5404\u81EA\u7684\u8FB9\u8DDD\u548C\u5706\u89D2\u4E5F\u80FD\u88AB\u6B63\u786E\u7684\u5904\u7406\u3002",-1),ze=o("div",null,[o("p",null,[d("\u4F7F\u7528 "),o("code",null,"deep-merge"),d(" \u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u6210\u5458\u7684\u6DF1\u5EA6\u878D\u5408\uFF0C\u65E0\u8BBA\u5B83\u7684\u4E0A\u9762\u5D4C\u5957\u4E86\u591A\u5C11\u5C42\u7684 dom \u7ED3\u6784\u3002")])],-1),Te=o("pre",null,[o("code",{class:"html"},` <template>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoMore } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoMore },
})
<\/script>
`)],-1),Se=o("h2",{id:"suo-jin"},[o("a",{class:"header-anchor",href:"#suo-jin"}),d(" \u7F29\u8FDB")],-1),je=o("p",null,[d("\u7F29\u8FDB\u6807\u7B7E "),o("code",null,"indent"),d(" \u7528\u4E8E\u7F29\u51CF\u7EC4\u6210\u5458\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u4F60\u53EF\u4EE5\u76F4\u89C2\u7684\u770B\u5230\u878D\u5408\u7684\u5143\u7D20\u4F1A\u81EA\u52A8\u51CF\u53BB\u76F8\u8FDE\u63A5\u7684\u8FB9\u6846\u3002")],-1),qe=o("div",null,[o("p",null,[d("\u63A8\u8350\u4F7F\u7528"),o("code",null,"gap"),d("\u5C5E\u6027\u6765\u8BBE\u7F6E\u95F4\u9699\uFF0C\u56E0\u4E3A"),o("code",null,"indent"),d("\u4F7F\u7528\u7684\u662F"),o("code",null,"margin:"),d("\u5C5E\u6027\u6240\u4EE5\u5B83\u4EEC\u4F1A\u53D7\u5230 dom \u6E32\u67D3\u987A\u5E8F\u7684\u5F71\u54CD\u3002\u5982\u4E0B\uFF1A")])],-1),Me=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Pe=o("h2",{id:"jian-xi"},[o("a",{class:"header-anchor",href:"#jian-xi"}),d(" \u95F4\u9699")],-1),Ue=o("p",null,[d("\u4F7F\u7528"),o("code",null,"gap"),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap"},"\u539F\u751F\u5C5E\u6027"),d("\u6765\u8BBE\u7F6E\u7EC4\u6210\u5458\u7684\u95F4\u9699\u3002")],-1),$e=o("div",null,[o("p",null,[o("code",null,"gap"),d(" \u5C5E\u6027\u540C\u65F6\u8BBE\u7F6E\u4E86\u6A2A\u5411\u548C\u7EB5\u5411\u7684\u95F4\u9699\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E"),o("code",null,'gap-x=""'),d("\u548C"),o("code",null,'gap-y=""'),d(" \u5C5E\u6027")])],-1),He=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),We=o("h2",{id:"dui-qi-fang-shi"},[o("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),d(" \u5BF9\u9F50\u65B9\u5F0F")],-1),Le=o("p",null,[d("\u4E3A Group \u7EC4\u4EF6\u8BBE\u7F6E "),o("code",null,"align"),d(" \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u7EC4\u6210\u5458\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002")],-1),Qe=o("pre",null,[o("code",{class:"html"},` <template>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoPhone, TwoMail, TwoInfo } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoPhone, TwoMail, TwoInfo },
})
<\/script>
`)],-1),Xe=oe('<div class="doc-tip"><p>\u4E3A <code>align</code> \u8BBE\u7F6E <code>items-left</code> , <code>items-right</code> \u7B49\u5BF9\u9F50\u6837\u5F0F\uFF0C\u5373\u53EF\u6539\u53D8\u5B50\u5143\u7D20\u7684\u6A2A\u5411\u6392\u5217\u65B9\u5F0F\uFF0C\u53C2\u8003 <a href="#/zh-CN/style/flex">Flex \u5F39\u6027\u5E03\u5C40</a></p></div><h2 id="zi-gua-ying"><a class="header-anchor" href="#zi-gua-ying"></a> \u81EA\u9002\u5E94</h2><p>\u4E3A Group \u7EC4\u4EF6\u589E\u52A0 <code>full</code> \u5C5E\u6027\uFF0C\u53EF\u4F7F\u7EC4\u548C\u7EC4\u5185\u6210\u5458\u90FD\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u3002</p>',3),Je=o("div",null,[o("p",null,[d("\u4E3A "),o("code",null,"full"),d("\u5C5E\u6027\u4F20\u5165 "),o("code",null,"full-x"),d(" \u6216\u8005 "),o("code",null,"full-y"),d(" \u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u5B83\u7684\u62C9\u4F38\u65B9\u5411")])],-1),Ke=o("pre",null,[o("code",{class:"html"},` <template>
  <p>\u4F7F\u7528<code>full</code>\u5C5E\u6027\u5C06\u540C\u65F6\u81EA\u9002\u5E94\u5BBD\u5EA6\u548C\u9AD8\u5EA6</p>
  <hl-row class="m-t-md" gap="var(--lg)">
    <hl-col span="col">
      <hl-group merge indent full dir="vertical" style="height:20vh">
        <hl-group class="display-flex border border-primary items-center items-middle radius-lg text-primary">
          <span>Auto</span>
          <hl-button type="primary">23</hl-button>
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
`)],-1),Oe=o("h2",{id:"jing-tai-zu-cheng-yuan"},[o("a",{class:"header-anchor",href:"#jing-tai-zu-cheng-yuan"}),d(" \u9759\u6001\u7EC4\u6210\u5458")],-1),Re=o("p",null,[d("\u8D4B\u4E88\u7EC4\u6210\u5458 "),o("code",null,".static"),d(" \u7C7B\uFF0C\u53EF\u5C06\u7EC4\u6210\u5458\u8BBE\u7F6E\u6210\u9759\u6001\uFF0C\u8FD9\u6837\u5B83\u5C31\u4E0D\u4F1A\u6839\u636E\u5BBD\u5EA6\u800C\u53D8\u5316\u4E86\u3002")],-1),Ye=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ze=o("h2",{id:"zu-qian-tao"},[o("a",{class:"header-anchor",href:"#zu-qian-tao"}),d(" \u7EC4\u5D4C\u5957")],-1),et=o("p",null,[d("\u7EC4\u91CC\u9762\u8FD8\u53EF\u4EE5\u518D\u5D4C\u5957\u7EC4\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6784\u9020\u66F4\u52A0\u590D\u6742\u7684\u5E03\u5C40\u3002\u4F7F\u7528"),o("code",null,"deep-merge"),d("\u5C5E\u6027\uFF0C\u8FD8\u53EF\u4F7F\u5B83\u4EEC\u7684\u4E0B\u7EA7\u8282\u70B9\u4E4B\u95F4\u8FD8\u4FDD\u6301\u76F8\u4E92\u878D\u5408\u3002")],-1),tt=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),rt=o("h2",{id:"size"},[o("a",{class:"header-anchor",href:"#size"}),d(" Size")],-1),lt=o("p",null,[o("code",null,"size"),d(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 size \u5C5E\u6027\u7684\u503C\u3002")],-1),ot=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),st=o("h2",{id:"disabled"},[o("a",{class:"header-anchor",href:"#disabled"}),d(" Disabled")],-1),dt=o("p",null,[o("code",null,"disabled"),d(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 disabled \u5C5E\u6027\u7684\u503C\u3002")],-1),ut=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group disabled indent block gap="var(--sm)">
    <hl-input class="w-xs" placeholder="placeholder" />
    <hl-time-picker placeholder="placeholder" />
    <hl-button type="primary">\u786E\u5B9A</hl-button>
  </hl-group>
</template>
`)],-1),nt=o("h2",{id:"fill"},[o("a",{class:"header-anchor",href:"#fill"}),d(" Fill")],-1),at=o("p",null,[o("code",null,"fill"),d(" \u5C5E\u6027\u53EF\u4EE5\u7EDF\u4E00\u8BBE\u7F6E\u5B50\u7EC4\u4EF6\u4E2D\u652F\u6301 fill \u5C5E\u6027\u7684\u503C\u3002")],-1),it=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group fill indent block gap="var(--sm)">
    <hl-input class="w-xs" placeholder="placeholder" />
    <hl-time-picker placeholder="placeholder" />
  </hl-group>
</template>
`)],-1),pt=oe('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dir</td><td>\u6392\u5217\u65B9\u5411</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>\u53C2\u8003 <a href="#/zh-CN/style/flex">Flex \u5F39\u6027\u5E03\u5C40</a></td><td></td></tr><tr><td>merge</td><td>\u878D\u5408</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>deep-merge</td><td>\u6DF1\u5EA6\u878D\u5408</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>static</td><td>\u9759\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indent</td><td>\u8FB9\u8DDD\u7F29\u8FDB</td><td>boolean / string</td><td>\u81EA\u5B9A\u4E49\u7F29\u8FDB\u5C3A\u5BF8</td><td>false</td></tr><tr><td>gap</td><td>\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap-x</td><td>\u6A2A\u5411\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap-y</td><td>\u7EB5\u5411\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>full</td><td>\u62C9\u4F38\u81F3\u7236\u5143\u7D20\u7684\u5C3A\u5BF8</td><td>boolean / string</td><td>full-x (\u6A2A\u5411\u62C9\u4F38) / full-y (\u7EB5\u5411\u62C9\u4F38)</td><td>false</td></tr><tr><td>wrap</td><td>\u6362\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u8F6C\u6362\u4E3A\u5757\u5143\u7D20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 size \u5C5E\u6027\u7684\u503C</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 disabled \u5C5E\u6027\u7684\u503C</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u72B6\u6001</td><td>boolean</td><td>\u53C2\u8003\u5B50\u7EC4\u4EF6\u652F\u6301 fill \u5C5E\u6027\u7684\u503C</td><td>false</td></tr></tbody></table>',2);function mt(t,s,r,e,l,p){const m=D("hl-demo0"),u=D("demo-block"),y=D("hl-demo1"),c=D("hl-demo2"),g=D("hl-demo3"),h=D("hl-demo4"),x=D("hl-demo5"),f=D("hl-demo6"),E=D("hl-demo7"),F=D("hl-demo8"),_=D("hl-demo9"),a=D("hl-demo10"),b=D("hl-demo11"),B=D("hl-demo12"),I=D("hl-demo13"),v=D("right-nav");return pe(),me(ce,null,[o("section",null,[ye,ge,xe,fe,i(u,{fs:""},{source:n(()=>[i(m)]),highlight:n(()=>[Ee]),default:n(()=>[be]),_:1}),Fe,Ce,i(u,{fs:""},{source:n(()=>[i(y)]),highlight:n(()=>[Be]),_:1}),ve,we,i(u,{fs:""},{source:n(()=>[i(c)]),highlight:n(()=>[De]),default:n(()=>[Ae]),_:1}),Ie,Ge,i(u,{fs:""},{source:n(()=>[i(g)]),highlight:n(()=>[ke]),_:1}),Ne,Ve,i(u,{fs:""},{source:n(()=>[i(h)]),highlight:n(()=>[Te]),default:n(()=>[ze]),_:1}),Se,je,i(u,{fs:""},{source:n(()=>[i(x)]),highlight:n(()=>[Me]),default:n(()=>[qe]),_:1}),Pe,Ue,i(u,{fs:""},{source:n(()=>[i(f)]),highlight:n(()=>[He]),default:n(()=>[$e]),_:1}),We,Le,i(u,{fs:""},{source:n(()=>[i(E)]),highlight:n(()=>[Qe]),_:1}),Xe,i(u,{fs:""},{source:n(()=>[i(F)]),highlight:n(()=>[Ke]),default:n(()=>[Je]),_:1}),Oe,Re,i(u,{fs:""},{source:n(()=>[i(_)]),highlight:n(()=>[Ye]),_:1}),Ze,et,i(u,{fs:""},{source:n(()=>[i(a)]),highlight:n(()=>[tt]),_:1}),rt,lt,i(u,{fs:""},{source:n(()=>[i(b)]),highlight:n(()=>[ot]),_:1}),st,dt,i(u,{fs:""},{source:n(()=>[i(B)]),highlight:n(()=>[ut]),_:1}),nt,at,i(u,{fs:""},{source:n(()=>[i(I)]),highlight:n(()=>[it]),_:1}),pt]),i(v)],64)}var Ft=he(_e,[["render",mt]]);export{Ft as default};
