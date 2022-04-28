var se=Object.defineProperty;var R=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var Y=(a,l,e)=>l in a?se(a,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[l]=e,$=(a,l)=>{for(var e in l||(l={}))ie.call(l,e)&&Y(a,e,l[e]);if(R)for(var e of R(l))ce.call(l,e)&&Y(a,e,l[e]);return a};import{F as T,L as re,W as he,Q as o,X as C,P as E,a2 as pe,aJ as V,M as s,o as Z}from"./vue.30e377ec.js";import{_ as _e}from"./index.58703c48.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.51d8bafe.js";const me={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:A}=V,n=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(F,v){const c=l("two-close"),_=l("hl-icon"),B=l("hl-button"),x=l("hl-panel");return f(),A(x,null,{header:t(()=>[n,a("div",u,[e(_,null,{default:t(()=>[e(c)]),_:1})])]),footer:t(()=>[e(B,{class:"m-r-md",onClick:v[0]||(v[0]=b=>F.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(B,{type:"primary",onClick:v[1]||(v[1]=b=>F.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1})}return $({render:g},{})}(),"hl-demo1":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:A}=V,n=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(c,_){const B=l("two-upload"),x=l("hl-icon"),b=l("hl-button"),N=l("two-maximize"),P=l("hl-panel");return f(),A(P,{ref:"panel",borderless:""},{header:t(()=>[n,a("div",u,[e(b,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(B)]),_:1})]),_:1}),e(b,{equal:"","no-fill":"",onClick:_[0]||(_[0]=k=>c.panel.toggleFullscreen())},{default:t(()=>[e(x,null,{default:t(()=>[e(N)]),_:1})]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:_[1]||(_[1]=k=>c.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(b,{type:"primary",onClick:_[2]||(_[2]=k=>c.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1},512)}const{defineComponent:w,ref:F}=V,v=w({setup(){return{panel:F(null)}}});return $({render:g},v)}(),"hl-demo2":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:d,createBlock:f,createCommentVNode:A,withCtx:n,createVNode:u,createElementVNode:p,createTextVNode:m}=V,y=p("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),g={class:"panel-header-right"},w=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),F=m("\u53D6 \u6D88"),v=m("\u786E \u5B9A"),c=p("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),_={class:"panel-header-right"},B=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),x=m("\u53D6 \u6D88"),b=m("\u786E \u5B9A");function N(r,h){const q=d("hl-option"),H=d("hl-select"),J=d("hl-group"),j=d("two-upload"),z=d("hl-icon"),D=d("hl-button"),L=d("two-maximize"),U=d("hl-panel"),Q=d("hl-col"),M=d("hl-row");return e(),t(l,null,[u(J,{gap:"var(--md)"},{default:n(()=>[u(H,{modelValue:r.radius,"onUpdate:modelValue":h[0]||(h[0]=i=>r.radius=i),clearable:"",placeholder:"radius\u5C3A\u5BF8"},{default:n(()=>[(e(!0),t(l,null,a(r.options,i=>(e(),t(l,null,[i.divider?(e(),f(q,{key:i.value,divider:""})):(e(),f(q,{key:i.value,label:i.label,value:i.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),u(M,{class:"m-t-md",gap:"var(--xl)"},{default:n(()=>[u(Q,{span:"col"},{default:n(()=>[u(U,{radius:r.radius},{header:n(()=>[y,p("div",g,[u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(j)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(L)]),_:1})]),_:1})])]),footer:n(()=>[u(D,{class:"m-r-md",onClick:h[1]||(h[1]=i=>r.dialogVisible=!1)},{default:n(()=>[F]),_:1}),u(D,{type:"primary",onClick:h[2]||(h[2]=i=>r.dialogVisible=!1)},{default:n(()=>[v]),_:1})]),default:n(()=>[w]),_:1},8,["radius"])]),_:1}),u(Q,{span:"col"},{default:n(()=>[u(U,{radius:r.radius,borderless:""},{header:n(()=>[c,p("div",_,[u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(j)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(L)]),_:1})]),_:1})])]),footer:n(()=>[u(D,{class:"m-r-md",onClick:h[3]||(h[3]=i=>r.dialogVisible=!1)},{default:n(()=>[x]),_:1}),u(D,{type:"primary",onClick:h[4]||(h[4]=i=>r.dialogVisible=!1)},{default:n(()=>[b]),_:1})]),default:n(()=>[B]),_:1},8,["radius"])]),_:1})]),_:1})],64)}const{defineComponent:P,ref:k}=V,S=P({setup(){const r=k([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),h=k("");return{options:r,radius:h}}});return $({render:N},S)}(),"hl-demo3":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:d,createBlock:f,createCommentVNode:A,withCtx:n,createVNode:u,createElementVNode:p,createTextVNode:m}=V,y=p("div",{class:"panel-title"},"\u6807\u9898",-1),g={class:"panel-header-right"},w=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),F=m("\u53D6 \u6D88"),v=m("\u786E \u5B9A"),c=p("div",{class:"panel-title"},"\u6807\u9898",-1),_={class:"panel-header-right"},B=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),x=m("\u53D6 \u6D88"),b=m("\u786E \u5B9A");function N(r,h){const q=d("hl-option"),H=d("hl-select"),J=d("hl-group"),j=d("two-upload"),z=d("hl-icon"),D=d("hl-button"),L=d("two-maximize"),U=d("hl-panel"),Q=d("hl-col"),M=d("hl-row");return e(),t(l,null,[u(J,{gap:"var(--md)"},{default:n(()=>[u(H,{modelValue:r.padding,"onUpdate:modelValue":h[0]||(h[0]=i=>r.padding=i),clearable:"",placeholder:"padding"},{default:n(()=>[(e(!0),t(l,null,a(r.options,i=>(e(),t(l,null,[i.divider?(e(),f(q,{key:i.value,divider:""})):(e(),f(q,{key:i.value,label:i.label,value:i.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(H,{modelValue:r.bodyPadding,"onUpdate:modelValue":h[1]||(h[1]=i=>r.bodyPadding=i),clearable:"",placeholder:"body-padding"},{default:n(()=>[(e(!0),t(l,null,a(r.options,i=>(e(),t(l,null,[i.divider?(e(),f(q,{key:i.value,divider:""})):(e(),f(q,{key:i.value,label:i.label,value:i.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),u(M,{class:"m-t-md",gap:"var(--xl)"},{default:n(()=>[u(Q,{span:"col"},{default:n(()=>[u(U,{padding:r.padding,"body-padding":r.bodyPadding},{header:n(()=>[y,p("div",g,[u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(j)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(L)]),_:1})]),_:1})])]),footer:n(()=>[u(D,{class:"m-r-md",onClick:h[2]||(h[2]=i=>r.dialogVisible=!1)},{default:n(()=>[F]),_:1}),u(D,{type:"primary",onClick:h[3]||(h[3]=i=>r.dialogVisible=!1)},{default:n(()=>[v]),_:1})]),default:n(()=>[w]),_:1},8,["padding","body-padding"])]),_:1}),u(Q,{span:"col"},{default:n(()=>[u(U,{padding:r.padding,"body-padding":r.bodyPadding,borderless:""},{header:n(()=>[c,p("div",_,[u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(j)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:n(()=>[u(z,null,{default:n(()=>[u(L)]),_:1})]),_:1})])]),footer:n(()=>[u(D,{class:"m-r-md",onClick:h[4]||(h[4]=i=>r.dialogVisible=!1)},{default:n(()=>[x]),_:1}),u(D,{type:"primary",onClick:h[5]||(h[5]=i=>r.dialogVisible=!1)},{default:n(()=>[b]),_:1})]),default:n(()=>[B]),_:1},8,["padding","body-padding"])]),_:1})]),_:1})],64)}const{defineComponent:P,ref:k}=V,S=P({setup(){const r=k([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),h=k(""),q=k("");return{options:r,padding:h,bodyPadding:q}}});return $({render:N},S)}(),"hl-demo4":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:A}=V,n=a("div",{class:"panel-title"}," \u6807\u9898 ",-1),u={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(F,v){const c=l("two-upload"),_=l("hl-icon"),B=l("hl-button"),x=l("two-maximize"),b=l("hl-panel"),N=l("hl-col"),P=l("hl-row");return f(),A(P,{gap:"var(--md)"},{default:t(()=>[e(N,{span:"col"},{default:t(()=>[e(b,{padding:"var(--md)","header-class":"new-header-class","body-class":"new-body-class","footer-class":"new-footer-class"},{header:t(()=>[n,a("div",u,[e(B,{equal:"","no-fill":""},{default:t(()=>[e(_,null,{default:t(()=>[e(c)]),_:1})]),_:1}),e(B,{equal:"","no-fill":""},{default:t(()=>[e(_,null,{default:t(()=>[e(x)]),_:1})]),_:1})])]),footer:t(()=>[e(B,{class:"m-r-md",onClick:v[0]||(v[0]=k=>F.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(B,{type:"primary",onClick:v[1]||(v[1]=k=>F.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1})]),_:1})]),_:1})}return $({render:g},{})}(),"hl-demo5":function(){const{createElementVNode:a,resolveComponent:l,withCtx:e,createVNode:t,openBlock:d,createBlock:f}=V,A=a("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)",-1),n=a("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)",-1);function u(m,y){const g=l("hl-panel"),w=l("hl-col"),F=l("hl-row");return d(),f(F,{gap:"var(--md)"},{default:e(()=>[t(w,{span:"col"},{default:e(()=>[t(g,null,{default:e(()=>[A]),_:1})]),_:1}),t(w,{span:"col"},{default:e(()=>[t(g,{borderless:""},{default:e(()=>[n]),_:1})]),_:1})]),_:1})}return $({render:u},{})}(),"hl-demo6":function(){const{resolveComponent:a,createVNode:l,withCtx:e,createElementVNode:t,createTextVNode:d,openBlock:f,createBlock:A}=V,n={class:"panel-header-left"},u=t("div",{class:"panel-title"}," Title ",-1),p=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),m=d(" Panel-Body "),y={class:"panel-header-left"},g=t("span",null,"\u6D4B\u8BD5",-1),w=t("div",{class:"panel-title"},[t("h5",null,"\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...")],-1),F=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),v=d(" Panel-Body "),c=t("div",{class:"panel-title"}," Title ",-1),_={class:"panel-header-right"},B=d(" Panel-Body "),x=t("div",{class:"panel-title"}," Title ",-1),b={class:"panel-header-right"},N=d(" \u641C\u7D22 "),P=d(" Panel-Body "),k=t("div",{class:"panel-title"}," Title ",-1),S={class:"panel-header-right"},r=d(" \u9009\u62E9 "),h=d("\u6570\u636E\u6D41"),q=d("\u4F20\u8F93\u5C5E\u6027\u503C"),H=d("\u5DF2\u65AD\u7EBF"),J=d("\u5F85\u6062\u590D"),j=d(" Panel-Body "),z=t("div",{class:"panel-title"}," Title ",-1),D=t("div",{class:"panel-header-right"},[t("span",{class:"text-danger"},"\u5C0F\u8D34\u58EB")],-1),L=d(" Panel-Body ");function U(M,i){const ee=a("two-news"),G=a("hl-icon"),W=a("hl-panel"),X=a("hl-col"),le=a("hl-thumb"),K=a("two-search"),te=a("hl-input"),oe=a("hl-group"),O=a("hl-button"),ne=a("two-chevron-bottom"),I=a("hl-dropdown-item"),ue=a("hl-dropdown-menu"),ae=a("hl-dropdown"),de=a("hl-row");return f(),A(de,{gap:"var(--md)"},{default:e(()=>[l(X,{span:"md:col-12"},{default:e(()=>[l(W,{"footer-align":"align-left"},{header:e(()=>[t("div",n,[l(G,{size:"lg",border:1.5},{default:e(()=>[l(ee)]),_:1},8,["border"])]),u,p]),default:e(()=>[m]),_:1})]),_:1}),l(X,{span:"md:col-12"},{default:e(()=>[l(W,null,{header:e(()=>[t("div",y,[l(le,{size:"sm",round:"",class:"primary"},{default:e(()=>[g]),_:1})]),w,F]),default:e(()=>[v]),_:1})]),_:1}),l(X,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[c,t("div",_,[l(oe,{merge:"",indent:""},{default:e(()=>[l(te,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:"",fill:""},{suffix:e(()=>[l(G,null,{default:e(()=>[l(K)]),_:1})]),_:1})]),_:1})])]),default:e(()=>[B]),_:1})]),_:1}),l(X,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[x,t("div",b,[l(O,{type:"primary","icon-position":"right"},{icon:e(()=>[l(G,null,{default:e(()=>[l(K)]),_:1})]),default:e(()=>[N]),_:1})])]),default:e(()=>[P]),_:1})]),_:1}),l(X,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[k,t("div",S,[l(ae,null,{dropdown:e(()=>[l(ue,null,{default:e(()=>[l(I,null,{default:e(()=>[h]),_:1}),l(I,null,{default:e(()=>[q]),_:1}),l(I,null,{default:e(()=>[H]),_:1}),l(I,null,{default:e(()=>[J]),_:1})]),_:1})]),default:e(()=>[l(O,{type:"link","icon-position":"right","no-fill":""},{icon:e(()=>[l(G,null,{default:e(()=>[l(ne)]),_:1})]),default:e(()=>[r]),_:1})]),_:1})])]),default:e(()=>[j]),_:1})]),_:1}),l(X,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[z,D]),default:e(()=>[L]),_:1})]),_:1})]),_:1})}return $({render:U},{})}(),"hl-demo7":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:A}=V,n=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(c,_){const B=l("two-top"),x=l("hl-icon"),b=l("hl-button"),N=l("two-maximize"),P=l("hl-panel"),k=l("hl-col"),S=l("hl-row");return f(),A(S,{gap:"var(--md)"},{default:t(()=>[e(k,{span:"col"},{default:t(()=>[e(P,{fullscreen:c.maxStatus,collapsed:c.minStatus},{header:t(()=>[n,a("div",u,[e(b,{equal:"","no-fill":"",onClick:c.min},{default:t(()=>[e(x,null,{default:t(()=>[e(B)]),_:1})]),_:1},8,["onClick"]),e(b,{equal:"","no-fill":"",onClick:c.max},{default:t(()=>[e(x,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["onClick"])])]),footer:t(()=>[e(b,{class:"m-r-md"},{default:t(()=>[m]),_:1}),e(b,{type:"primary"},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1},8,["fullscreen","collapsed"])]),_:1})]),_:1})}const{defineComponent:w,ref:F}=V,v=w({setup(){const c=F(!1),_=F(!1);return{maxStatus:c,minStatus:_,min:()=>{_.value=!_.value},max:()=>{c.value?c.value=!1:c.value={top:"var(--xxl)",left:"var(--xxl)",right:"var(--xxl)",bottom:"var(--xxl)"}}}}});return $({render:g},v)}(),"hl-demo8":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:A}=V,n=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=a("div",{class:"scrollable h-full"},[a("div",{class:"p-lg",style:{height:"calc(var(--xxl)*10)"}},"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F")],-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(c,_){const B=l("two-close"),x=l("hl-icon"),b=l("hl-button"),N=l("hl-panel");return f(),A(N,{style:{height:"calc(var(--xxl) * 8)"},"full-body":""},{header:t(()=>[n,a("div",u,[e(x,null,{default:t(()=>[e(B)]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:_[0]||(_[0]=P=>c.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(b,{type:"primary",onClick:_[1]||(_[1]=P=>c.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1})}const{defineComponent:w,ref:F}=V,v=w({setup(){return{value:F(5)}}});return $({render:g},v)}()}},ve=o("h1",null,"Panel \u9762\u677F",-1),fe=o("p",null,"\u9762\u677F\u901A\u5E38\u7531\u5934\u90E8\u3001\u4E3B\u4F53\u548C\u811A\u6CE8\u7EC4\u6210\u3002Hongluan \u4E2D\u7684\u9762\u677F\u5927\u591A\u6570\u7528\u505A\u63D0\u793A\u6846\u3001\u901A\u77E5\u3001\u5BF9\u8BDD\u6846\u6216\u5F53\u4F5C\u52FE\u52D2\u5185\u5BB9\u533A\u57DF\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),Fe=o("h2",{id:"ji-ben-yang-shi"},[o("a",{class:"header-anchor",href:"#ji-ben-yang-shi"}),s(" \u57FA\u672C\u6837\u5F0F")],-1),be=o("p",null,"Panel \u7EC4\u4EF6\u5305\u62EC header\u3001body\u3001footer \u4E09\u4E2A slot, body \u662F\u4E3A\u9ED8\u8BA4 slot",-1),Ee=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ge=o("h2",{id:"wu-bian-kuang-yang-shi"},[o("a",{class:"header-anchor",href:"#wu-bian-kuang-yang-shi"}),s(" \u65E0\u8FB9\u6846\u6837\u5F0F")],-1),Be=o("p",null,[o("code",null,"borderless"),s(" \u5C5E\u6027\u4F1A\u4F7F Panel \u7EC4\u4EF6\u53D8\u6210\u65E0\u8FB9\u6846\u72B6\u6001\uFF0C\u540C\u65F6\u5B83\u4EEC\u76F4\u63A5\u7684\u95F4\u8DDD\u4E5F\u4F1A\u4EA7\u751F\u53D8\u5316\u3002")],-1),De=o("div",null,[o("p",null,[o("code",null,"outlineless"),s(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664 Panel \u5916\u4FA7\u8F6E\u5ED3\u7684\u8FB9\u6846")])],-1),Ce=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const panel = ref(null)
    return {
      panel,
    }
  },
})
<\/script>
`)],-1),ye=o("h2",{id:"yuan-jiao-shu-xing"},[o("a",{class:"header-anchor",href:"#yuan-jiao-shu-xing"}),s(" \u5706\u89D2\u5C5E\u6027")],-1),we=o("p",null,[o("code",null,"radius"),s(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u5706\u89D2\u6837\u5F0F")],-1),xe=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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

    return {
      options,
      radius,
    }
  },
})
<\/script>
`)],-1),Ae=o("h2",{id:"jian-ju-shu-xing"},[o("a",{class:"header-anchor",href:"#jian-ju-shu-xing"}),s(" \u95F4\u8DDD\u5C5E\u6027")],-1),ke=o("p",null,[o("code",null,"padding"),s(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u95F4\u8DDD\u5C3A\u5BF8\u3002"),o("code",null,"body-padding"),s(" \u5355\u72EC\u63A7\u5236 body \u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E "),o("code",null,"padding"),s("\u3002")],-1),Ve=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      options,
      padding,
      bodyPadding,
    }
  },
})
<\/script>
`)],-1),Ne=Z('<h2 id="zi-ding-yi-lei-ming"><a class="header-anchor" href="#zi-ding-yi-lei-ming"></a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><p><code>header-class</code>\uFF0C<code>body-class</code> \u548C <code>footer-class</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u5411\u5BF9\u5E94\u7684<code>header</code>\uFF0C<code>body</code>\uFF0C<code>footer</code> \u589E\u52A0\u81EA\u5B9A\u4E49\u7C7B</p>',2),Pe=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),qe=o("h2",{id:"jian-dan-xing-tai"},[o("a",{class:"header-anchor",href:"#jian-dan-xing-tai"}),s(" \u7B80\u5355\u5F62\u6001")],-1),ze=o("p",null,[s("Panel \u7EC4\u4EF6\u5141\u8BB8\u79FB\u9664 "),o("code",null,"header"),s("\u548C"),o("code",null,"footer"),s(" \u7ED3\u6784\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u5B9A\u4E49\u5B83\u7684\u7528\u9014\u3002")],-1),Te=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),$e=o("h2",{id:"ke-kuo-zhan-de-header"},[o("a",{class:"header-anchor",href:"#ke-kuo-zhan-de-header"}),s(" \u53EF\u6269\u5C55\u7684 Header")],-1),Se=o("p",null,[o("code",null,"header"),s(" \u63D2\u69FD\u53EF\u4EE5\u7684\u627F\u8F7D\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u7EC4\u4EF6\uFF0C\u4F60\u751A\u81F3\u4E0D\u9700\u8981\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),je=o("div",null,[o("p",null,[s("\u5728 header \u7684 slot \u4E2D\u63D0\u4F9B\u4E86\u7684 "),o("code",null,"panel-header-left"),s("\uFF0C"),o("code",null,"panel-title"),s("\uFF0C"),o("code",null,"panel-header-right"),s(" \u4E09\u4E2A\u5E03\u5C40\u6837\u5F0F\u3002")])],-1),Le=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ue=o("h2",{id:"gao-ji-gong-neng"},[o("a",{class:"header-anchor",href:"#gao-ji-gong-neng"}),s(" \u9AD8\u7EA7\u529F\u80FD")],-1),He=o("p",null,[o("code",null,"panel"),s(" \u63D0\u4F9B "),o("code",null,"\u6536\u8D77"),s(" \u548C "),o("code",null,"\u5168\u5C4F"),s(" \u529F\u80FD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u6309\u94AE\u6765\u63A7\u5236\u5B83\u4EEC\u3002")],-1),Qe=o("div",null,[o("p",null,[s("\u53EF\u4EE5\u8BBE\u7F6E fullscreen \u4E3A "),o("code",null,"object"),s(" \u7C7B\u578B\uFF0C\u521D\u59CB\u5316\u5168\u5C4F\u7684 Panel \u4F4D\u7F6E")])],-1),We=o("pre",null,[o("code",{class:"html"},` <template>
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
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    const maxStatus = ref(false)
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
    return {
      maxStatus,
      minStatus,
      min,
      max,
    }
  },
})
<\/script>
`)],-1),Xe=o("h2",{id:"zi-gua-ying-bodyqu-yu"},[o("a",{class:"header-anchor",href:"#zi-gua-ying-bodyqu-yu"}),s(" \u81EA\u9002\u5E94Body\u533A\u57DF")],-1),Je=o("p",null,[s("\u4F60\u53EF\u4EE5\u4E3A "),o("code",null,"panel"),s(" \u8BBE\u7F6E "),o("code",null,"full-body"),s(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u5176 "),o("code",null,"panel-body"),s(" \u6839\u636E"),o("code",null,"panel"),s("\u7684\u9AD8\u5EA6\u81EA\u52A8\u4F38\u957F")],-1),Me=o("div",null,[o("p",null,[s("\u4F60\u53EF\u4EE5\u52A0\u4E0A\u5E26\u6709scroll\u5C5E\u6027\u7684\u7ED3\u6784\u6765\u4F7F\u5185\u5BB9\u5728\u9762\u677F\u5185\u6EDA\u52A8\uFF0C\u5B83\u53EF\u6839\u636E"),o("code",null,"panel"),s("\u7684\u9AD8\u5EA6\u81EA\u52A8\u9002\u5E94\u800C\u65E0\u9700\u8BBE\u7F6E\u6EDA\u52A8\u533A\u57DF\u7684\u9AD8\u5EA6\u3002")])],-1),Ge=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(5)

    return {
      value,
    }
  },
})
<\/script>
`)],-1),Ie=Z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>borderless</td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>outlineless</td><td>\u662F\u5426\u65E0\u8F6E\u5ED3\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>radius</td><td>\u5706\u89D2</td><td>string</td><td>\u2014</td><td>$xxs</td></tr><tr><td>padding</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>body-padding</td><td>body \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>footer-padding</td><td>footer \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>header-class</td><td>\u4E3A header \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>body-class</td><td>\u4E3A body \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>footer-class</td><td>\u4E3A footer \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>fullscreen</td><td>\u5168\u5C4F\u6A21\u5F0F</td><td>boolean / object{top: string; left: string; bottom: stirng; right: string;}</td><td>\u2014</td><td>false</td></tr><tr><td>collapsed</td><td>\u6536\u8D77\u6A21\u5F0F\uFF0C\u5168\u5C4F\u6A21\u5F0F\u4E0B\u6536\u8D77\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>full-body</td><td>\u53EF\u4F7F\u5176 panel-body \u6839\u636Epanel\u7684\u9AD8\u5EA6\u81EA\u52A8\u4F38\u957F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Panel \u4E3B\u4F53\u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Panel \u5934\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Panel \u811A\u6CE8\u7684\u5185\u5BB9</td></tr></tbody></table>',4);function Ke(a,l,e,t,d,f){const A=T("hl-demo0"),n=T("demo-block"),u=T("hl-demo1"),p=T("hl-demo2"),m=T("hl-demo3"),y=T("hl-demo4"),g=T("hl-demo5"),w=T("hl-demo6"),F=T("hl-demo7"),v=T("hl-demo8"),c=T("right-nav");return re(),he(pe,null,[o("section",null,[ve,fe,Fe,be,C(n,{fs:""},{source:E(()=>[C(A)]),highlight:E(()=>[Ee]),_:1}),ge,Be,C(n,{fs:""},{source:E(()=>[C(u)]),highlight:E(()=>[Ce]),default:E(()=>[De]),_:1}),ye,we,C(n,{fs:""},{source:E(()=>[C(p)]),highlight:E(()=>[xe]),_:1}),Ae,ke,C(n,{fs:""},{source:E(()=>[C(m)]),highlight:E(()=>[Ve]),_:1}),Ne,C(n,{fs:""},{source:E(()=>[C(y)]),highlight:E(()=>[Pe]),_:1}),qe,ze,C(n,{fs:""},{source:E(()=>[C(g)]),highlight:E(()=>[Te]),_:1}),$e,Se,C(n,{fs:""},{source:E(()=>[C(w)]),highlight:E(()=>[Le]),default:E(()=>[je]),_:1}),Ue,He,C(n,{fs:""},{source:E(()=>[C(F)]),highlight:E(()=>[We]),default:E(()=>[Qe]),_:1}),Xe,Je,C(n,{fs:""},{source:E(()=>[C(v)]),highlight:E(()=>[Ge]),default:E(()=>[Me]),_:1}),Ie]),C(c)],64)}var tl=_e(me,[["render",Ke]]);export{tl as default};
