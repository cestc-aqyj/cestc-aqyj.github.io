var pe=Object.defineProperty;var te=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var oe=(a,l,e)=>l in a?pe(a,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[l]=e,O=(a,l)=>{for(var e in l||(l={}))he.call(l,e)&&oe(a,e,l[e]);if(te)for(var e of te(l))_e.call(l,e)&&oe(a,e,l[e]);return a};import{H as $,L as me,W as fe,Q as o,X as A,P as B,a4 as ve,S as s,o as ue,aL as D}from"./vue.8f5537c1.js";import{H as L}from"./hongluan-icons.35255449.js";import{_ as be}from"./index.4914c8f9.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";const Fe={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:F,createBlock:V}=D,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),v=d("\u53D6 \u6D88"),k=d("\u786E \u5B9A");function C(w,f){const i=l("two-close"),m=l("hl-icon"),b=l("hl-button"),_=l("hl-panel");return F(),V(_,null,{header:t(()=>[u,a("div",n,[e(m,null,{default:t(()=>[e(i)]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:f[0]||(f[0]=g=>w.dialogVisible=!1)},{default:t(()=>[v]),_:1}),e(b,{type:"primary",onClick:f[1]||(f[1]=g=>w.dialogVisible=!1)},{default:t(()=>[k]),_:1})]),default:t(()=>[p]),_:1})}const{defineComponent:y}=D,{TwoClose:E}=L;return O({render:C},y({setup(w,{expose:f}){f();const i={TwoClose:E};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo1":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:F,createBlock:V}=D,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),v=d("\u53D6 \u6D88"),k=d("\u786E \u5B9A");function C(i,m){const b=l("two-upload"),_=l("hl-icon"),g=l("hl-button"),N=l("two-maximize"),P=l("hl-panel");return F(),V(P,{ref:"panel",borderless:""},{header:t(()=>[u,a("div",n,[e(g,{equal:"","no-fill":""},{default:t(()=>[e(_,null,{default:t(()=>[e(b)]),_:1})]),_:1}),e(g,{equal:"","no-fill":"",onClick:m[0]||(m[0]=S=>i.panel.toggleFullscreen())},{default:t(()=>[e(_,null,{default:t(()=>[e(N)]),_:1})]),_:1})])]),footer:t(()=>[e(g,{class:"m-r-md",onClick:m[1]||(m[1]=S=>i.dialogVisible=!1)},{default:t(()=>[v]),_:1}),e(g,{type:"primary",onClick:m[2]||(m[2]=S=>i.dialogVisible=!1)},{default:t(()=>[k]),_:1})]),default:t(()=>[p]),_:1},512)}const{defineComponent:y}=D,{ref:E}=D,{TwoUpload:T,TwoMaximize:w}=L;return O({render:C},y({setup(i,{expose:m}){m();const _={panel:E(null),ref:E,TwoUpload:T,TwoMaximize:w};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}))}(),"hl-demo2":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:d,createBlock:F,createCommentVNode:V,withCtx:u,createVNode:n,createElementVNode:p,createTextVNode:v}=D,k=p("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),C={class:"panel-header-right"},y=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),E=v("\u53D6 \u6D88"),T=v("\u786E \u5B9A"),w=p("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),f={class:"panel-header-right"},i=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=v("\u53D6 \u6D88"),b=v("\u786E \u5B9A");function _(h,r){const z=d("hl-option"),j=d("hl-select"),U=d("hl-group"),M=d("two-upload"),q=d("hl-icon"),x=d("hl-button"),I=d("two-maximize"),Q=d("hl-panel"),W=d("hl-col"),G=d("hl-row");return e(),t(l,null,[n(U,{gap:"var(--md)"},{default:u(()=>[n(j,{modelValue:h.radius,"onUpdate:modelValue":r[0]||(r[0]=c=>h.radius=c),clearable:"",placeholder:"radius\u5C3A\u5BF8"},{default:u(()=>[(e(!0),t(l,null,a(h.options,c=>(e(),t(l,null,[c.divider?(e(),F(z,{key:c.value,divider:""})):(e(),F(z,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),n(G,{class:"m-t-md",gap:"var(--xl)"},{default:u(()=>[n(W,{span:"col"},{default:u(()=>[n(Q,{radius:h.radius},{header:u(()=>[k,p("div",C,[n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(M)]),_:1})]),_:1}),n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(I)]),_:1})]),_:1})])]),footer:u(()=>[n(x,{class:"m-r-md",onClick:r[1]||(r[1]=c=>h.dialogVisible=!1)},{default:u(()=>[E]),_:1}),n(x,{type:"primary",onClick:r[2]||(r[2]=c=>h.dialogVisible=!1)},{default:u(()=>[T]),_:1})]),default:u(()=>[y]),_:1},8,["radius"])]),_:1}),n(W,{span:"col"},{default:u(()=>[n(Q,{radius:h.radius,borderless:""},{header:u(()=>[w,p("div",f,[n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(M)]),_:1})]),_:1}),n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(I)]),_:1})]),_:1})])]),footer:u(()=>[n(x,{class:"m-r-md",onClick:r[3]||(r[3]=c=>h.dialogVisible=!1)},{default:u(()=>[m]),_:1}),n(x,{type:"primary",onClick:r[4]||(r[4]=c=>h.dialogVisible=!1)},{default:u(()=>[b]),_:1})]),default:u(()=>[i]),_:1},8,["radius"])]),_:1})]),_:1})],64)}const{defineComponent:g}=D,{ref:N}=D,{TwoUpload:P,TwoMaximize:S}=L;return O({render:_},g({setup(h,{expose:r}){r();const z=N([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),j=N(""),U={options:z,radius:j,ref:N,TwoUpload:P,TwoMaximize:S};return Object.defineProperty(U,"__isScriptSetup",{enumerable:!1,value:!0}),U}}))}(),"hl-demo3":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:d,createBlock:F,createCommentVNode:V,withCtx:u,createVNode:n,createElementVNode:p,createTextVNode:v}=D,k=p("div",{class:"panel-title"},"\u6807\u9898",-1),C={class:"panel-header-right"},y=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),E=v("\u53D6 \u6D88"),T=v("\u786E \u5B9A"),w=p("div",{class:"panel-title"},"\u6807\u9898",-1),f={class:"panel-header-right"},i=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=v("\u53D6 \u6D88"),b=v("\u786E \u5B9A");function _(h,r){const z=d("hl-option"),j=d("hl-select"),U=d("hl-group"),M=d("two-upload"),q=d("hl-icon"),x=d("hl-button"),I=d("two-maximize"),Q=d("hl-panel"),W=d("hl-col"),G=d("hl-row");return e(),t(l,null,[n(U,{gap:"var(--md)"},{default:u(()=>[n(j,{modelValue:h.padding,"onUpdate:modelValue":r[0]||(r[0]=c=>h.padding=c),clearable:"",placeholder:"padding"},{default:u(()=>[(e(!0),t(l,null,a(h.options,c=>(e(),t(l,null,[c.divider?(e(),F(z,{key:c.value,divider:""})):(e(),F(z,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),n(j,{modelValue:h.bodyPadding,"onUpdate:modelValue":r[1]||(r[1]=c=>h.bodyPadding=c),clearable:"",placeholder:"body-padding"},{default:u(()=>[(e(!0),t(l,null,a(h.options,c=>(e(),t(l,null,[c.divider?(e(),F(z,{key:c.value,divider:""})):(e(),F(z,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),n(G,{class:"m-t-md",gap:"var(--xl)"},{default:u(()=>[n(W,{span:"col"},{default:u(()=>[n(Q,{padding:h.padding,"body-padding":h.bodyPadding},{header:u(()=>[k,p("div",C,[n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(M)]),_:1})]),_:1}),n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(I)]),_:1})]),_:1})])]),footer:u(()=>[n(x,{class:"m-r-md",onClick:r[2]||(r[2]=c=>h.dialogVisible=!1)},{default:u(()=>[E]),_:1}),n(x,{type:"primary",onClick:r[3]||(r[3]=c=>h.dialogVisible=!1)},{default:u(()=>[T]),_:1})]),default:u(()=>[y]),_:1},8,["padding","body-padding"])]),_:1}),n(W,{span:"col"},{default:u(()=>[n(Q,{padding:h.padding,"body-padding":h.bodyPadding,borderless:""},{header:u(()=>[w,p("div",f,[n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(M)]),_:1})]),_:1}),n(x,{equal:"","no-fill":""},{default:u(()=>[n(q,null,{default:u(()=>[n(I)]),_:1})]),_:1})])]),footer:u(()=>[n(x,{class:"m-r-md",onClick:r[4]||(r[4]=c=>h.dialogVisible=!1)},{default:u(()=>[m]),_:1}),n(x,{type:"primary",onClick:r[5]||(r[5]=c=>h.dialogVisible=!1)},{default:u(()=>[b]),_:1})]),default:u(()=>[i]),_:1},8,["padding","body-padding"])]),_:1})]),_:1})],64)}const{defineComponent:g}=D,{ref:N}=D,{TwoUpload:P,TwoMaximize:S}=L;return O({render:_},g({setup(h,{expose:r}){r();const z=N([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),j=N(""),U=N(""),M={options:z,padding:j,bodyPadding:U,ref:N,TwoUpload:P,TwoMaximize:S};return Object.defineProperty(M,"__isScriptSetup",{enumerable:!1,value:!0}),M}}))}(),"hl-demo4":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:F,createBlock:V}=D,u=a("div",{class:"panel-title"}," \u6807\u9898 ",-1),n={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),v=d("\u53D6 \u6D88"),k=d("\u786E \u5B9A");function C(f,i){const m=l("two-upload"),b=l("hl-icon"),_=l("hl-button"),g=l("two-maximize"),N=l("hl-panel"),P=l("hl-col"),S=l("hl-row");return F(),V(S,{gap:"var(--md)"},{default:t(()=>[e(P,{span:"col"},{default:t(()=>[e(N,{padding:"var(--md)","header-class":"new-header-class","body-class":"new-body-class","footer-class":"new-footer-class"},{header:t(()=>[u,a("div",n,[e(_,{equal:"","no-fill":""},{default:t(()=>[e(b,null,{default:t(()=>[e(m)]),_:1})]),_:1}),e(_,{equal:"","no-fill":""},{default:t(()=>[e(b,null,{default:t(()=>[e(g)]),_:1})]),_:1})])]),footer:t(()=>[e(_,{class:"m-r-md",onClick:i[0]||(i[0]=H=>f.dialogVisible=!1)},{default:t(()=>[v]),_:1}),e(_,{type:"primary",onClick:i[1]||(i[1]=H=>f.dialogVisible=!1)},{default:t(()=>[k]),_:1})]),default:t(()=>[p]),_:1})]),_:1})]),_:1})}const{defineComponent:y}=D,{TwoUpload:E,TwoMaximize:T}=L;return O({render:C},y({setup(f,{expose:i}){i();const m={TwoUpload:E,TwoMaximize:T};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}))}(),"hl-demo5":function(){const{createElementVNode:a,resolveComponent:l,withCtx:e,createVNode:t,openBlock:d,createBlock:F}=D,V=a("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)",-1),u=a("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)",-1);function n(v,k){const C=l("hl-panel"),y=l("hl-col"),E=l("hl-row");return d(),F(E,{gap:"var(--md)"},{default:e(()=>[t(y,{span:"col"},{default:e(()=>[t(C,null,{default:e(()=>[V]),_:1})]),_:1}),t(y,{span:"col"},{default:e(()=>[t(C,{borderless:""},{default:e(()=>[u]),_:1})]),_:1})]),_:1})}return O({render:n},{})}(),"hl-demo6":function(){const{resolveComponent:a,createVNode:l,withCtx:e,createElementVNode:t,createTextVNode:d,openBlock:F,createBlock:V}=D,u={class:"panel-header-left"},n=t("div",{class:"panel-title"}," Title ",-1),p=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),v=d(" Panel-Body "),k={class:"panel-header-left"},C=t("span",null,"\u6D4B\u8BD5",-1),y=t("div",{class:"panel-title"},[t("h5",null,"\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...")],-1),E=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),T=d(" Panel-Body "),w=t("div",{class:"panel-title"}," Title ",-1),f={class:"panel-header-right"},i=d(" Panel-Body "),m=t("div",{class:"panel-title"}," Title ",-1),b={class:"panel-header-right"},_=d(" \u641C\u7D22 "),g=d(" Panel-Body "),N=t("div",{class:"panel-title"}," Title ",-1),P={class:"panel-header-right"},S=d(" \u9009\u62E9 "),H=d("\u6570\u636E\u6D41"),h=d("\u4F20\u8F93\u5C5E\u6027\u503C"),r=d("\u5DF2\u65AD\u7EBF"),z=d("\u5F85\u6062\u590D"),j=d(" Panel-Body "),U=t("div",{class:"panel-title"}," Title ",-1),M=t("div",{class:"panel-header-right"},[t("span",{class:"text-danger"},"\u5C0F\u8D34\u58EB")],-1),q=d(" Panel-Body ");function x(c,Z){const J=a("two-news"),K=a("hl-icon"),X=a("hl-panel"),R=a("hl-col"),ne=a("hl-thumb"),ee=a("two-search"),ae=a("hl-input"),de=a("hl-group"),le=a("hl-button"),se=a("two-chevron-bottom"),Y=a("hl-dropdown-item"),ie=a("hl-dropdown-menu"),ce=a("hl-dropdown"),re=a("hl-row");return F(),V(re,{gap:"var(--md)"},{default:e(()=>[l(R,{span:"md:col-12"},{default:e(()=>[l(X,{"footer-align":"align-left"},{header:e(()=>[t("div",u,[l(K,{size:"lg",border:1.5},{default:e(()=>[l(J)]),_:1},8,["border"])]),n,p]),default:e(()=>[v]),_:1})]),_:1}),l(R,{span:"md:col-12"},{default:e(()=>[l(X,null,{header:e(()=>[t("div",k,[l(ne,{size:"sm",round:"",class:"primary"},{default:e(()=>[C]),_:1})]),y,E]),default:e(()=>[T]),_:1})]),_:1}),l(R,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[w,t("div",f,[l(de,{merge:"",indent:""},{default:e(()=>[l(ae,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:"",fill:""},{suffix:e(()=>[l(K,null,{default:e(()=>[l(ee)]),_:1})]),_:1})]),_:1})])]),default:e(()=>[i]),_:1})]),_:1}),l(R,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[m,t("div",b,[l(le,{type:"primary","icon-position":"right"},{icon:e(()=>[l(K,null,{default:e(()=>[l(ee)]),_:1})]),default:e(()=>[_]),_:1})])]),default:e(()=>[g]),_:1})]),_:1}),l(R,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[N,t("div",P,[l(ce,null,{dropdown:e(()=>[l(ie,null,{default:e(()=>[l(Y,null,{default:e(()=>[H]),_:1}),l(Y,null,{default:e(()=>[h]),_:1}),l(Y,null,{default:e(()=>[r]),_:1}),l(Y,null,{default:e(()=>[z]),_:1})]),_:1})]),default:e(()=>[l(le,{type:"link","icon-position":"right","no-fill":""},{icon:e(()=>[l(K,null,{default:e(()=>[l(se)]),_:1})]),default:e(()=>[S]),_:1})]),_:1})])]),default:e(()=>[j]),_:1})]),_:1}),l(R,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[U,M]),default:e(()=>[q]),_:1})]),_:1})]),_:1})}const{defineComponent:I}=D,{TwoSearch:Q,TwoChevronBottom:W}=L;return O({render:x},I({setup(c,{expose:Z}){Z();const J={TwoSearch:Q,TwoChevronBottom:W};return Object.defineProperty(J,"__isScriptSetup",{enumerable:!1,value:!0}),J}}))}(),"hl-demo7":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:F,createBlock:V}=D,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),v=d("\u53D6 \u6D88"),k=d("\u786E \u5B9A");function C(i,m){const b=l("two-top"),_=l("hl-icon"),g=l("hl-button"),N=l("two-maximize"),P=l("hl-panel"),S=l("hl-col"),H=l("hl-row");return F(),V(H,{gap:"var(--md)"},{default:t(()=>[e(S,{span:"col"},{default:t(()=>[e(P,{fullscreen:i.maxStatus,collapsed:i.minStatus},{header:t(()=>[u,a("div",n,[e(g,{equal:"","no-fill":"",onClick:i.min},{default:t(()=>[e(_,null,{default:t(()=>[e(b)]),_:1})]),_:1},8,["onClick"]),e(g,{equal:"","no-fill":"",onClick:i.max},{default:t(()=>[e(_,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["onClick"])])]),footer:t(()=>[e(g,{class:"m-r-md"},{default:t(()=>[v]),_:1}),e(g,{type:"primary"},{default:t(()=>[k]),_:1})]),default:t(()=>[p]),_:1},8,["fullscreen","collapsed"])]),_:1})]),_:1})}const{defineComponent:y}=D,{ref:E}=D,{TwoTop:T,TwoMaximize:w}=L;return O({render:C},y({setup(i,{expose:m}){m();const b=E(!1),_=E(!1),P={maxStatus:b,minStatus:_,min:()=>{_.value=!_.value},max:()=>{b.value?b.value=!1:b.value={top:"var(--xxl)",left:"var(--xxl)",right:"var(--xxl)",bottom:"var(--xxl)"}},ref:E,TwoTop:T,TwoMaximize:w};return Object.defineProperty(P,"__isScriptSetup",{enumerable:!1,value:!0}),P}}))}(),"hl-demo8":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:F,createBlock:V}=D,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},p=a("div",{class:"scrollable h-full"},[a("div",{class:"p-lg",style:{height:"calc(var(--xxl)*10)"}},"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F")],-1),v=d("\u53D6 \u6D88"),k=d("\u786E \u5B9A");function C(w,f){const i=l("two-close"),m=l("hl-icon"),b=l("hl-button"),_=l("hl-panel");return F(),V(_,{style:{height:"calc(var(--xxl) * 8)"},"full-body":""},{header:t(()=>[u,a("div",n,[e(m,null,{default:t(()=>[e(i)]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:f[0]||(f[0]=g=>w.dialogVisible=!1)},{default:t(()=>[v]),_:1}),e(b,{type:"primary",onClick:f[1]||(f[1]=g=>w.dialogVisible=!1)},{default:t(()=>[k]),_:1})]),default:t(()=>[p]),_:1})}const{defineComponent:y}=D,{TwoClose:E}=L;return O({render:C},y({setup(w,{expose:f}){f();const i={TwoClose:E};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}()}},Ee=o("h1",null,"Panel \u9762\u677F",-1),ge=o("p",null,"\u9762\u677F\u901A\u5E38\u7531\u5934\u90E8\u3001\u4E3B\u4F53\u548C\u811A\u6CE8\u7EC4\u6210\u3002Hongluan \u4E2D\u7684\u9762\u677F\u5927\u591A\u6570\u7528\u505A\u63D0\u793A\u6846\u3001\u901A\u77E5\u3001\u5BF9\u8BDD\u6846\u6216\u5F53\u4F5C\u52FE\u52D2\u5185\u5BB9\u533A\u57DF\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),Be=o("h2",{id:"ji-ben-yang-shi"},[o("a",{class:"header-anchor",href:"#ji-ben-yang-shi"}),s(" \u57FA\u672C\u6837\u5F0F")],-1),De=o("p",null,"Panel \u7EC4\u4EF6\u5305\u62EC header\u3001body\u3001footer \u4E09\u4E2A slot, body \u662F\u4E3A\u9ED8\u8BA4 slot",-1),Ce=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-panel>
    <template #header>
      <div class="panel-title">
        \u8FD9\u662F\u4E00\u4E2A\u6807\u9898
      </div>
      <div class="panel-header-right">
        <hl-icon>
          <two-close />
        </hl-icon>
      </div>
    </template>
    <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
    <template #footer>
      <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
      <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
    </template>
  </hl-panel>
</template>
<script setup lang="ts">
import { TwoClose } from '@hongluan-ui/icons'
<\/script>
`)],-1),ye=o("h2",{id:"wu-bian-kuang-yang-shi"},[o("a",{class:"header-anchor",href:"#wu-bian-kuang-yang-shi"}),s(" \u65E0\u8FB9\u6846\u6837\u5F0F")],-1),we=o("p",null,[o("code",null,"borderless"),s(" \u5C5E\u6027\u4F1A\u4F7F Panel \u7EC4\u4EF6\u53D8\u6210\u65E0\u8FB9\u6846\u72B6\u6001\uFF0C\u540C\u65F6\u5B83\u4EEC\u76F4\u63A5\u7684\u95F4\u8DDD\u4E5F\u4F1A\u4EA7\u751F\u53D8\u5316\u3002")],-1),xe=o("div",null,[o("p",null,[o("code",null,"outlineless"),s(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664 Panel \u5916\u4FA7\u8F6E\u5ED3\u7684\u8FB9\u6846")])],-1),Ae=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-panel ref="panel" borderless>
    <template #header>
      <div class="panel-title">
        \u8FD9\u662F\u4E00\u4E2A\u6807\u9898
      </div>
      <div class="panel-header-right">
        <hl-button equal no-fill>
          <hl-icon><two-upload /></hl-icon>
        </hl-button>
        <hl-button equal no-fill @click="panel.toggleFullscreen()">
          <hl-icon><two-maximize /></hl-icon>
        </hl-button>
      </div>
    </template>
    <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
    <template #footer>
      <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
      <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
    </template>
  </hl-panel>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'

const panel = ref(null)

<\/script>
`)],-1),ke=o("h2",{id:"yuan-jiao-shu-xing"},[o("a",{class:"header-anchor",href:"#yuan-jiao-shu-xing"}),s(" \u5706\u89D2\u5C5E\u6027")],-1),Ve=o("p",null,[o("code",null,"radius"),s(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u5706\u89D2\u6837\u5F0F")],-1),Ne=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-select v-model="radius" clearable placeholder="radius\u5C3A\u5BF8">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
  </hl-group>

  <hl-row class="m-t-md" gap="var(--xl)">
    <hl-col span="col">
      <hl-panel :radius="radius">
        <template #header>
          <div class="panel-title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
          <div class="panel-header-right">
            <hl-button equal no-fill>
              <hl-icon><two-upload /></hl-icon>
            </hl-button>
            <hl-button equal no-fill>
              <hl-icon><two-maximize /></hl-icon>
            </hl-button>
          </div>
        </template>
        <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
        <template #footer>
          <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
          <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
        </template>
      </hl-panel>
    </hl-col>

    <hl-col span="col">
      <hl-panel :radius="radius" borderless>
        <template #header>
          <div class="panel-title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
          <div class="panel-header-right">
            <hl-button equal no-fill>
              <hl-icon><two-upload /></hl-icon>
            </hl-button>
            <hl-button equal no-fill>
              <hl-icon><two-maximize /></hl-icon>
            </hl-button>
          </div>
        </template>
        <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
        <template #footer>
          <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
          <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
        </template>
      </hl-panel>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'

const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--sm)',
    label: 'var(--sm)',
  },
  {
    value: 'var(--md)',
    label: 'var(--md)',
  },
  {
    value: 'var(--lg)',
    label: 'var(--lg)',
  },
  {
    value: 'var(--xl)',
    label: 'var(--xl)',
  },
  {
    value: 'var(--xxl)',
    label: 'var(--xxl)',
  },
])
const radius = ref('')

<\/script>
`)],-1),Te=o("h2",{id:"jian-ju-shu-xing"},[o("a",{class:"header-anchor",href:"#jian-ju-shu-xing"}),s(" \u95F4\u8DDD\u5C5E\u6027")],-1),Pe=o("p",null,[o("code",null,"padding"),s(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u95F4\u8DDD\u5C3A\u5BF8\u3002"),o("code",null,"body-padding"),s(" \u5355\u72EC\u63A7\u5236 body \u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E "),o("code",null,"padding"),s("\u3002")],-1),ze=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hl-select v-model="padding" clearable placeholder="padding">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>

    <hl-select v-model="bodyPadding" clearable placeholder="body-padding">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
  </hl-group>

  <hl-row class="m-t-md" gap="var(--xl)">
    <hl-col span="col">
      <hl-panel :padding="padding" :body-padding="bodyPadding">
        <template #header>
          <div class="panel-title">\u6807\u9898</div>
          <div class="panel-header-right">
            <hl-button equal no-fill>
              <hl-icon>
                <two-upload />
              </hl-icon>
            </hl-button>
            <hl-button equal no-fill>
              <hl-icon>
                <two-maximize />
              </hl-icon>
            </hl-button>
          </div>
        </template>
        <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
        <template #footer>
          <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
          <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
        </template>
      </hl-panel>
    </hl-col>

    <hl-col span="col">
      <hl-panel :padding="padding" :body-padding="bodyPadding" borderless>
        <template #header>
          <div class="panel-title">\u6807\u9898</div>
          <div class="panel-header-right">
            <hl-button equal no-fill>
              <hl-icon>
                <two-upload />
              </hl-icon>
            </hl-button>
            <hl-button equal no-fill>
              <hl-icon>
                <two-maximize />
              </hl-icon>
            </hl-button>
          </div>
        </template>
        <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
        <template #footer>
          <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
          <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
        </template>
      </hl-panel>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'

const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--sm)',
    label: 'var(--sm)',
  },
  {
    value: 'var(--md)',
    label: 'var(--md)',
  },
  {
    value: 'var(--lg)',
    label: 'var(--lg)',
  },
  {
    value: 'var(--xl)',
    label: 'var(--xl)',
  },
  {
    value: 'var(--xxl)',
    label: 'var(--xxl)',
  },
])
const padding = ref('')
const bodyPadding = ref('')

<\/script>
`)],-1),Se=ue('<h2 id="zi-ding-yi-lei-ming"><a class="header-anchor" href="#zi-ding-yi-lei-ming"></a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><p><code>header-class</code>\uFF0C<code>body-class</code> \u548C <code>footer-class</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u5411\u5BF9\u5E94\u7684<code>header</code>\uFF0C<code>body</code>\uFF0C<code>footer</code> \u589E\u52A0\u81EA\u5B9A\u4E49\u7C7B</p>',2),qe=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col">
      <hl-panel padding="var(--md)" header-class="new-header-class" body-class="new-body-class" footer-class="new-footer-class">
        <template #header>
          <div class="panel-title">
            \u6807\u9898
          </div>
          <div class="panel-header-right">
            <hl-button equal no-fill>
              <hl-icon><two-upload /></hl-icon>
            </hl-button>
            <hl-button equal no-fill>
              <hl-icon><two-maximize /></hl-icon>
            </hl-button>
          </div>
        </template>
        <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
        <template #footer>
          <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
          <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
        </template>
      </hl-panel>
    </hl-col>
  </hl-row>
</template>
<script setup lang="ts">
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'
<\/script>
`)],-1),$e=o("h2",{id:"jian-dan-xing-tai"},[o("a",{class:"header-anchor",href:"#jian-dan-xing-tai"}),s(" \u7B80\u5355\u5F62\u6001")],-1),je=o("p",null,[s("Panel \u7EC4\u4EF6\u5141\u8BB8\u79FB\u9664 "),o("code",null,"header"),s("\u548C"),o("code",null,"footer"),s(" \u7ED3\u6784\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u5B9A\u4E49\u5B83\u7684\u7528\u9014\u3002")],-1),Ue=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col">
      <hl-panel>
        <div>\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)</div>
      </hl-panel>
    </hl-col>
    <hl-col span="col">
      <hl-panel borderless>
        <div>\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)</div>
      </hl-panel>
    </hl-col>
  </hl-row>
</template>
`)],-1),Me=o("h2",{id:"ke-kuo-zhan-de-header"},[o("a",{class:"header-anchor",href:"#ke-kuo-zhan-de-header"}),s(" \u53EF\u6269\u5C55\u7684 Header")],-1),Oe=o("p",null,[o("code",null,"header"),s(" \u63D2\u69FD\u53EF\u4EE5\u7684\u627F\u8F7D\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u7EC4\u4EF6\uFF0C\u4F60\u751A\u81F3\u4E0D\u9700\u8981\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Le=o("div",null,[o("p",null,[s("\u5728 header \u7684 slot \u4E2D\u63D0\u4F9B\u4E86\u7684 "),o("code",null,"panel-header-left"),s("\uFF0C"),o("code",null,"panel-title"),s("\uFF0C"),o("code",null,"panel-header-right"),s(" \u4E09\u4E2A\u5E03\u5C40\u6837\u5F0F\u3002")])],-1),He=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="md:col-12">
      <hl-panel footer-align="align-left">
        <template #header>
          <div class="panel-header-left">
            <hl-icon size="lg" :border="1.5"><two-news /></hl-icon>
          </div>
          <div class="panel-title">
            Title
          </div>
          <div class="panel-header-right">
            <button class="panel-close"></button>
          </div>
        </template>
        Panel-Body
      </hl-panel>
    </hl-col>

    <hl-col span="md:col-12">
      <hl-panel>
        <template #header>
          <div class="panel-header-left">
            <hl-thumb size="sm" round class="primary">
              <span>\u6D4B\u8BD5</span>
            </hl-thumb>
          </div>
          <div class="panel-title">
            <h5>\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...</h5>
          </div>
          <div class="panel-header-right">
            <button class="panel-close"></button>
          </div>
        </template>
        Panel-Body
      </hl-panel>
    </hl-col>

    <hl-col span="md:col-12" class="m-t-lg">
      <hl-panel>
        <template #header>
          <div class="panel-title">
            Title
          </div>
          <div class="panel-header-right">
            <hl-group merge indent>
              <hl-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" round fill>
                <template #suffix>
                  <hl-icon><two-search /></hl-icon>
                </template>
              </hl-input>
            </hl-group>
          </div>
        </template>
        Panel-Body
      </hl-panel>
    </hl-col>

    <hl-col span="md:col-12" class="m-t-lg">
      <hl-panel>
        <template #header>
          <div class="panel-title">
            Title
          </div>
          <div class="panel-header-right">
            <hl-button type="primary" icon-position="right">
              \u641C\u7D22
              <template #icon>
                <hl-icon><two-search /></hl-icon>
              </template>
            </hl-button>
          </div>
        </template>
        Panel-Body
      </hl-panel>
    </hl-col>

    <hl-col span="md:col-12" class="m-t-lg">
      <hl-panel>
        <template #header>
          <div class="panel-title">
            Title
          </div>
          <div class="panel-header-right">
            <hl-dropdown>
              <hl-button type="link" icon-position="right" no-fill>
                \u9009\u62E9
                <template #icon>
                  <hl-icon><two-chevron-bottom /></hl-icon>
                </template>
              </hl-button>
              <template #dropdown>
                <hl-dropdown-menu>
                  <hl-dropdown-item>\u6570\u636E\u6D41</hl-dropdown-item>
                  <hl-dropdown-item>\u4F20\u8F93\u5C5E\u6027\u503C</hl-dropdown-item>
                  <hl-dropdown-item>\u5DF2\u65AD\u7EBF</hl-dropdown-item>
                  <hl-dropdown-item>\u5F85\u6062\u590D</hl-dropdown-item>
                </hl-dropdown-menu>
              </template>
            </hl-dropdown>
          </div>
        </template>
        Panel-Body
      </hl-panel>
    </hl-col>

    <hl-col span="md:col-12" class="m-t-lg">
      <hl-panel>
        <template #header>
          <div class="panel-title">
            Title
          </div>
          <div class="panel-header-right">
            <span class="text-danger">\u5C0F\u8D34\u58EB</span>
          </div>
        </template>
        Panel-Body
      </hl-panel>
    </hl-col>
  </hl-row>
</template>
<script setup lang="ts">
import { TwoSearch, TwoChevronBottom } from '@hongluan-ui/icons'
<\/script>
`)],-1),Ie=o("h2",{id:"gao-ji-gong-neng"},[o("a",{class:"header-anchor",href:"#gao-ji-gong-neng"}),s(" \u9AD8\u7EA7\u529F\u80FD")],-1),Qe=o("p",null,[o("code",null,"panel"),s(" \u63D0\u4F9B "),o("code",null,"\u6536\u8D77"),s(" \u548C "),o("code",null,"\u5168\u5C4F"),s(" \u529F\u80FD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u6309\u94AE\u6765\u63A7\u5236\u5B83\u4EEC\u3002")],-1),We=o("div",null,[o("p",null,[s("\u53EF\u4EE5\u8BBE\u7F6E fullscreen \u4E3A "),o("code",null,"object"),s(" \u7C7B\u578B\uFF0C\u521D\u59CB\u5316\u5168\u5C4F\u7684 Panel \u4F4D\u7F6E")])],-1),Xe=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col">
      <hl-panel
        :fullscreen="maxStatus"
        :collapsed="minStatus"
      >
        <template #header>
          <div class="panel-title">
            \u8FD9\u662F\u4E00\u4E2A\u6807\u9898
          </div>
          <div class="panel-header-right">
            <hl-button equal no-fill @click="min">
              <hl-icon><two-top /></hl-icon>
            </hl-button>
            <hl-button equal no-fill @click="max">
              <hl-icon><two-maximize /></hl-icon>
            </hl-button>
          </div>
        </template>
        <div>\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
        <template #footer>
          <hl-button class="m-r-md">\u53D6 \u6D88</hl-button>
          <hl-button type="primary">\u786E \u5B9A</hl-button>
        </template>
      </hl-panel>
    </hl-col>
  </hl-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TwoTop, TwoMaximize } from '@hongluan-ui/icons'

const maxStatus = ref<boolean | Record<string, string>>(false)
const minStatus = ref(false)

const min = () => {
  minStatus.value = !minStatus.value
}
const max = () => {
  if (maxStatus.value) {
    maxStatus.value = false
  } else {
    maxStatus.value = { top: 'var(--xxl)', left: 'var(--xxl)', right: 'var(--xxl)', bottom: 'var(--xxl)' }
  }
}

<\/script>
`)],-1),Re=o("h2",{id:"zi-gua-ying-bodyqu-yu"},[o("a",{class:"header-anchor",href:"#zi-gua-ying-bodyqu-yu"}),s(" \u81EA\u9002\u5E94Body\u533A\u57DF")],-1),Ge=o("p",null,[s("\u4F60\u53EF\u4EE5\u4E3A "),o("code",null,"panel"),s(" \u8BBE\u7F6E "),o("code",null,"full-body"),s(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u5176 "),o("code",null,"panel-body"),s(" \u6839\u636E"),o("code",null,"panel"),s("\u7684\u9AD8\u5EA6\u81EA\u52A8\u4F38\u957F")],-1),Je=o("div",null,[o("p",null,[s("\u4F60\u53EF\u4EE5\u52A0\u4E0A\u5E26\u6709scroll\u5C5E\u6027\u7684\u7ED3\u6784\u6765\u4F7F\u5185\u5BB9\u5728\u9762\u677F\u5185\u6EDA\u52A8\uFF0C\u5B83\u53EF\u6839\u636E"),o("code",null,"panel"),s("\u7684\u9AD8\u5EA6\u81EA\u52A8\u9002\u5E94\u800C\u65E0\u9700\u8BBE\u7F6E\u6EDA\u52A8\u533A\u57DF\u7684\u9AD8\u5EA6\u3002")])],-1),Ke=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-panel style="height: calc(var(--xxl) * 8)" full-body>
    <template #header>
      <div class="panel-title">
        \u8FD9\u662F\u4E00\u4E2A\u6807\u9898
      </div>
      <div class="panel-header-right">
        <hl-icon>
          <two-close />
        </hl-icon>
      </div>
    </template>
    <div class="scrollable h-full">
      <div class="p-lg" style="height: calc(var(--xxl)*10)">\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
    </div>
    <template #footer>
      <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
      <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
    </template>
  </hl-panel>
</template>

<script setup lang="ts">
import { TwoClose } from '@hongluan-ui/icons'
<\/script>
`)],-1),Ye=ue('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>borderless</td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>outlineless</td><td>\u662F\u5426\u65E0\u8F6E\u5ED3\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>radius</td><td>\u5706\u89D2</td><td>string</td><td>\u2014</td><td>$xxs</td></tr><tr><td>padding</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>body-padding</td><td>body \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>footer-padding</td><td>footer \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>header-class</td><td>\u4E3A header \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>body-class</td><td>\u4E3A body \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>footer-class</td><td>\u4E3A footer \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>fullscreen</td><td>\u5168\u5C4F\u6A21\u5F0F</td><td>boolean / object{top: string; left: string; bottom: stirng; right: string;}</td><td>\u2014</td><td>false</td></tr><tr><td>collapsed</td><td>\u6536\u8D77\u6A21\u5F0F\uFF0C\u5168\u5C4F\u6A21\u5F0F\u4E0B\u6536\u8D77\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>full-body</td><td>\u53EF\u4F7F\u5176 panel-body \u6839\u636Epanel\u7684\u9AD8\u5EA6\u81EA\u52A8\u4F38\u957F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Panel \u4E3B\u4F53\u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Panel \u5934\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Panel \u811A\u6CE8\u7684\u5185\u5BB9</td></tr></tbody></table>',4);function Ze(a,l,e,t,d,F){const V=$("hl-demo0"),u=$("demo-block"),n=$("hl-demo1"),p=$("hl-demo2"),v=$("hl-demo3"),k=$("hl-demo4"),C=$("hl-demo5"),y=$("hl-demo6"),E=$("hl-demo7"),T=$("hl-demo8"),w=$("right-nav");return me(),fe(ve,null,[o("section",null,[Ee,ge,Be,De,A(u,{fs:""},{source:B(()=>[A(V)]),highlight:B(()=>[Ce]),_:1}),ye,we,A(u,{fs:""},{source:B(()=>[A(n)]),highlight:B(()=>[Ae]),default:B(()=>[xe]),_:1}),ke,Ve,A(u,{fs:""},{source:B(()=>[A(p)]),highlight:B(()=>[Ne]),_:1}),Te,Pe,A(u,{fs:""},{source:B(()=>[A(v)]),highlight:B(()=>[ze]),_:1}),Se,A(u,{fs:""},{source:B(()=>[A(k)]),highlight:B(()=>[qe]),_:1}),$e,je,A(u,{fs:""},{source:B(()=>[A(C)]),highlight:B(()=>[Ue]),_:1}),Me,Oe,A(u,{fs:""},{source:B(()=>[A(y)]),highlight:B(()=>[He]),default:B(()=>[Le]),_:1}),Ie,Qe,A(u,{fs:""},{source:B(()=>[A(E)]),highlight:B(()=>[Xe]),default:B(()=>[We]),_:1}),Re,Ge,A(u,{fs:""},{source:B(()=>[A(T)]),highlight:B(()=>[Ke]),default:B(()=>[Je]),_:1}),Ye]),A(w)],64)}var al=be(Fe,[["render",Ze]]);export{al as default};
