var se=Object.defineProperty;var O=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var R=(d,l,e)=>l in d?se(d,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[l]=e,$=(d,l)=>{for(var e in l||(l={}))ie.call(l,e)&&R(d,e,l[e]);if(O)for(var e of O(l))ce.call(l,e)&&R(d,e,l[e]);return d};import{Y as T,L as re,W as he,Q as n,a2 as C,a0 as E,P as pe,aG as V,a3 as i,o as Z}from"./vue.a2bb788b.js";import{_ as _e}from"./index.1be8ef67.js";import"./hongluan.bb564fd4.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.da8bad7b.js";const me={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:a,openBlock:v,createBlock:A}=V,o=d("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=d("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=a("\u53D6 \u6D88"),y=a("\u786E \u5B9A");function g(F,f){const c=l("two-close"),_=l("hl-icon"),B=l("hl-button"),x=l("hl-panel");return v(),A(x,null,{header:t(()=>[o,d("div",u,[e(_,null,{default:t(()=>[e(c)]),_:1})])]),footer:t(()=>[e(B,{class:"m-r-md",onClick:f[0]||(f[0]=b=>F.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(B,{type:"primary",onClick:f[1]||(f[1]=b=>F.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1})}return $({render:g},{})}(),"hl-demo1":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:a,openBlock:v,createBlock:A}=V,o=d("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=d("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=a("\u53D6 \u6D88"),y=a("\u786E \u5B9A");function g(c,_){const B=l("two-upload"),x=l("hl-icon"),b=l("hl-button"),N=l("two-maximize"),P=l("hl-panel");return v(),A(P,{ref:"panel",borderless:""},{header:t(()=>[o,d("div",u,[e(b,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(B)]),_:1})]),_:1}),e(b,{equal:"","no-fill":"",onClick:_[0]||(_[0]=k=>c.panel.toggleFullscreen())},{default:t(()=>[e(x,null,{default:t(()=>[e(N)]),_:1})]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:_[1]||(_[1]=k=>c.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(b,{type:"primary",onClick:_[2]||(_[2]=k=>c.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1},512)}const{defineComponent:w,ref:F}=V,f=w({setup(){return{panel:F(null)}}});return $({render:g},f)}(),"hl-demo2":function(){const{renderList:d,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:a,createBlock:v,createCommentVNode:A,withCtx:o,createVNode:u,createElementVNode:p,createTextVNode:m}=V,y=p("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),g={class:"panel-header-right"},w=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),F=m("\u53D6 \u6D88"),f=m("\u786E \u5B9A"),c=p("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),_={class:"panel-header-right"},B=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),x=m("\u53D6 \u6D88"),b=m("\u786E \u5B9A");function N(r,h){const q=a("hl-option"),H=a("hl-select"),X=a("hl-group"),S=a("two-upload"),z=a("hl-icon"),D=a("hl-button"),L=a("two-maximize"),U=a("hl-panel"),Q=a("hl-col"),Y=a("hl-row");return e(),t(l,null,[u(X,{gap:"var(--md)"},{default:o(()=>[u(H,{modelValue:r.radius,"onUpdate:modelValue":h[0]||(h[0]=s=>r.radius=s),clearable:"",placeholder:"radius\u5C3A\u5BF8"},{default:o(()=>[(e(!0),t(l,null,d(r.options,s=>(e(),t(l,null,[s.divider?(e(),v(q,{key:s.value,divider:""})):(e(),v(q,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),u(Y,{class:"m-t-md",gap:"var(--xl)"},{default:o(()=>[u(Q,{span:"col"},{default:o(()=>[u(U,{radius:r.radius},{header:o(()=>[y,p("div",g,[u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(S)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(L)]),_:1})]),_:1})])]),footer:o(()=>[u(D,{class:"m-r-md",onClick:h[1]||(h[1]=s=>r.dialogVisible=!1)},{default:o(()=>[F]),_:1}),u(D,{type:"primary",onClick:h[2]||(h[2]=s=>r.dialogVisible=!1)},{default:o(()=>[f]),_:1})]),default:o(()=>[w]),_:1},8,["radius"])]),_:1}),u(Q,{span:"col"},{default:o(()=>[u(U,{radius:r.radius,borderless:""},{header:o(()=>[c,p("div",_,[u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(S)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(L)]),_:1})]),_:1})])]),footer:o(()=>[u(D,{class:"m-r-md",onClick:h[3]||(h[3]=s=>r.dialogVisible=!1)},{default:o(()=>[x]),_:1}),u(D,{type:"primary",onClick:h[4]||(h[4]=s=>r.dialogVisible=!1)},{default:o(()=>[b]),_:1})]),default:o(()=>[B]),_:1},8,["radius"])]),_:1})]),_:1})],64)}const{defineComponent:P,ref:k}=V,j=P({setup(){const r=k([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),h=k("");return{options:r,radius:h}}});return $({render:N},j)}(),"hl-demo3":function(){const{renderList:d,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:a,createBlock:v,createCommentVNode:A,withCtx:o,createVNode:u,createElementVNode:p,createTextVNode:m}=V,y=p("div",{class:"panel-title"},"\u6807\u9898",-1),g={class:"panel-header-right"},w=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),F=m("\u53D6 \u6D88"),f=m("\u786E \u5B9A"),c=p("div",{class:"panel-title"},"\u6807\u9898",-1),_={class:"panel-header-right"},B=p("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),x=m("\u53D6 \u6D88"),b=m("\u786E \u5B9A");function N(r,h){const q=a("hl-option"),H=a("hl-select"),X=a("hl-group"),S=a("two-upload"),z=a("hl-icon"),D=a("hl-button"),L=a("two-maximize"),U=a("hl-panel"),Q=a("hl-col"),Y=a("hl-row");return e(),t(l,null,[u(X,{gap:"var(--md)"},{default:o(()=>[u(H,{modelValue:r.padding,"onUpdate:modelValue":h[0]||(h[0]=s=>r.padding=s),clearable:"",placeholder:"padding"},{default:o(()=>[(e(!0),t(l,null,d(r.options,s=>(e(),t(l,null,[s.divider?(e(),v(q,{key:s.value,divider:""})):(e(),v(q,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(H,{modelValue:r.bodyPadding,"onUpdate:modelValue":h[1]||(h[1]=s=>r.bodyPadding=s),clearable:"",placeholder:"body-padding"},{default:o(()=>[(e(!0),t(l,null,d(r.options,s=>(e(),t(l,null,[s.divider?(e(),v(q,{key:s.value,divider:""})):(e(),v(q,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),u(Y,{class:"m-t-md",gap:"var(--xl)"},{default:o(()=>[u(Q,{span:"col"},{default:o(()=>[u(U,{padding:r.padding,"body-padding":r.bodyPadding},{header:o(()=>[y,p("div",g,[u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(S)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(L)]),_:1})]),_:1})])]),footer:o(()=>[u(D,{class:"m-r-md",onClick:h[2]||(h[2]=s=>r.dialogVisible=!1)},{default:o(()=>[F]),_:1}),u(D,{type:"primary",onClick:h[3]||(h[3]=s=>r.dialogVisible=!1)},{default:o(()=>[f]),_:1})]),default:o(()=>[w]),_:1},8,["padding","body-padding"])]),_:1}),u(Q,{span:"col"},{default:o(()=>[u(U,{padding:r.padding,"body-padding":r.bodyPadding,borderless:""},{header:o(()=>[c,p("div",_,[u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(S)]),_:1})]),_:1}),u(D,{equal:"","no-fill":""},{default:o(()=>[u(z,null,{default:o(()=>[u(L)]),_:1})]),_:1})])]),footer:o(()=>[u(D,{class:"m-r-md",onClick:h[4]||(h[4]=s=>r.dialogVisible=!1)},{default:o(()=>[x]),_:1}),u(D,{type:"primary",onClick:h[5]||(h[5]=s=>r.dialogVisible=!1)},{default:o(()=>[b]),_:1})]),default:o(()=>[B]),_:1},8,["padding","body-padding"])]),_:1})]),_:1})],64)}const{defineComponent:P,ref:k}=V,j=P({setup(){const r=k([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),h=k(""),q=k("");return{options:r,padding:h,bodyPadding:q}}});return $({render:N},j)}(),"hl-demo4":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:a,openBlock:v,createBlock:A}=V,o=d("div",{class:"panel-title"}," \u6807\u9898 ",-1),u={class:"panel-header-right"},p=d("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=a("\u53D6 \u6D88"),y=a("\u786E \u5B9A");function g(F,f){const c=l("two-upload"),_=l("hl-icon"),B=l("hl-button"),x=l("two-maximize"),b=l("hl-panel"),N=l("hl-col"),P=l("hl-row");return v(),A(P,{gap:"var(--md)"},{default:t(()=>[e(N,{span:"col"},{default:t(()=>[e(b,{padding:"var(--md)","header-class":"new-header-class","body-class":"new-body-class","footer-class":"new-footer-class"},{header:t(()=>[o,d("div",u,[e(B,{equal:"","no-fill":""},{default:t(()=>[e(_,null,{default:t(()=>[e(c)]),_:1})]),_:1}),e(B,{equal:"","no-fill":""},{default:t(()=>[e(_,null,{default:t(()=>[e(x)]),_:1})]),_:1})])]),footer:t(()=>[e(B,{class:"m-r-md",onClick:f[0]||(f[0]=k=>F.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(B,{type:"primary",onClick:f[1]||(f[1]=k=>F.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1})]),_:1})]),_:1})}return $({render:g},{})}(),"hl-demo5":function(){const{createElementVNode:d,resolveComponent:l,withCtx:e,createVNode:t,openBlock:a,createBlock:v}=V,A=d("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)",-1),o=d("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)",-1);function u(m,y){const g=l("hl-panel"),w=l("hl-col"),F=l("hl-row");return a(),v(F,{gap:"var(--md)"},{default:e(()=>[t(w,{span:"col"},{default:e(()=>[t(g,null,{default:e(()=>[A]),_:1})]),_:1}),t(w,{span:"col"},{default:e(()=>[t(g,{borderless:""},{default:e(()=>[o]),_:1})]),_:1})]),_:1})}return $({render:u},{})}(),"hl-demo6":function(){const{resolveComponent:d,createVNode:l,withCtx:e,createElementVNode:t,createTextVNode:a,openBlock:v,createBlock:A}=V,o={class:"panel-header-left"},u=t("div",{class:"panel-title"}," Title ",-1),p=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),m=a(" Panel-Body "),y={class:"panel-header-left"},g=t("span",null,"\u6D4B\u8BD5",-1),w=t("div",{class:"panel-title"},[t("h5",null,"\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...")],-1),F=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),f=a(" Panel-Body "),c=t("div",{class:"panel-title"}," Title ",-1),_={class:"panel-header-right"},B=a(" Panel-Body "),x=t("div",{class:"panel-title"}," Title ",-1),b={class:"panel-header-right"},N=a(" \u641C\u7D22 "),P=a(" Panel-Body "),k=t("div",{class:"panel-title"}," Title ",-1),j={class:"panel-header-right"},r=a(" \u641C\u7D22 "),h=a("\u6570\u636E\u6D41"),q=a("\u4F20\u8F93\u5C5E\u6027\u503C"),H=a("\u5DF2\u65AD\u7EBF"),X=a("\u5F85\u6062\u590D"),S=a(" Panel-Body "),z=t("div",{class:"panel-title"}," Title ",-1),D=t("div",{class:"panel-header-right"}," \u5C0F\u8D34\u58EB ",-1),L=a(" Panel-Body ");function U(Y,s){const ee=d("two-news"),I=d("hl-icon"),W=d("hl-panel"),G=d("hl-col"),le=d("hl-thumb"),K=d("two-search"),te=d("hl-input"),oe=d("hl-group"),M=d("hl-button"),ne=d("two-chevron-bottom"),J=d("hl-dropdown-item"),ue=d("hl-dropdown-menu"),ae=d("hl-dropdown"),de=d("hl-row");return v(),A(de,{gap:"var(--md)"},{default:e(()=>[l(G,{span:"col-md-12"},{default:e(()=>[l(W,{"footer-align":"align-left"},{header:e(()=>[t("div",o,[l(I,{size:"lg",border:1.5},{default:e(()=>[l(ee)]),_:1},8,["border"])]),u,p]),default:e(()=>[m]),_:1})]),_:1}),l(G,{span:"col-md-12"},{default:e(()=>[l(W,null,{header:e(()=>[t("div",y,[l(le,{size:"sm",round:"",class:"primary"},{default:e(()=>[g]),_:1})]),w,F]),default:e(()=>[f]),_:1})]),_:1}),l(G,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[c,t("div",_,[l(oe,{merge:"",indent:""},{default:e(()=>[l(te,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:"",fill:""},{suffix:e(()=>[l(I,null,{default:e(()=>[l(K)]),_:1})]),_:1})]),_:1})])]),default:e(()=>[B]),_:1})]),_:1}),l(G,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[x,t("div",b,[l(M,{type:"primary","icon-position":"right"},{icon:e(()=>[l(I,null,{default:e(()=>[l(K)]),_:1})]),default:e(()=>[N]),_:1})])]),default:e(()=>[P]),_:1})]),_:1}),l(G,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[k,t("div",j,[l(ae,null,{dropdown:e(()=>[l(ue,null,{default:e(()=>[l(J,null,{default:e(()=>[h]),_:1}),l(J,null,{default:e(()=>[q]),_:1}),l(J,null,{default:e(()=>[H]),_:1}),l(J,null,{default:e(()=>[X]),_:1})]),_:1})]),default:e(()=>[l(M,{type:"link","icon-position":"right","no-fill":""},{icon:e(()=>[l(I,null,{default:e(()=>[l(ne)]),_:1})]),default:e(()=>[r]),_:1})]),_:1})])]),default:e(()=>[S]),_:1})]),_:1}),l(G,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(W,null,{header:e(()=>[z,D]),default:e(()=>[L]),_:1})]),_:1})]),_:1})}return $({render:U},{})}(),"hl-demo7":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:a,openBlock:v,createBlock:A}=V,o=d("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=d("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=a("\u53D6 \u6D88"),y=a("\u786E \u5B9A");function g(c,_){const B=l("two-top"),x=l("hl-icon"),b=l("hl-button"),N=l("two-maximize"),P=l("hl-panel"),k=l("hl-col"),j=l("hl-row");return v(),A(j,{gap:"var(--md)"},{default:t(()=>[e(k,{span:"col"},{default:t(()=>[e(P,{fullscreen:c.maxStatus,collapsed:c.minStatus},{header:t(()=>[o,d("div",u,[e(b,{equal:"","no-fill":"",onClick:c.min},{default:t(()=>[e(x,null,{default:t(()=>[e(B)]),_:1})]),_:1},8,["onClick"]),e(b,{equal:"","no-fill":"",onClick:c.max},{default:t(()=>[e(x,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["onClick"])])]),footer:t(()=>[e(b,{class:"m-r-md"},{default:t(()=>[m]),_:1}),e(b,{type:"primary"},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1},8,["fullscreen","collapsed"])]),_:1})]),_:1})}const{defineComponent:w,ref:F}=V,f=w({setup(){const c=F(!1),_=F(!1);return{maxStatus:c,minStatus:_,min:()=>{_.value=!_.value},max:()=>{c.value?c.value=!1:c.value={top:"var(--xxl)",left:"var(--xxl)",right:"var(--xxl)",bottom:"var(--xxl)"}}}}});return $({render:g},f)}(),"hl-demo8":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:a,openBlock:v,createBlock:A}=V,o=d("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),u={class:"panel-header-right"},p=d("div",{style:{height:"calc(var(--xxl)*10)"}},"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=a("\u53D6 \u6D88"),y=a("\u786E \u5B9A");function g(c,_){const B=l("two-close"),x=l("hl-icon"),b=l("hl-button"),N=l("hl-panel");return v(),A(N,{style:{height:"calc(var(--xxl) * 8)"},"inner-scroll":""},{header:t(()=>[o,d("div",u,[e(x,null,{default:t(()=>[e(B)]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:_[0]||(_[0]=P=>c.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(b,{type:"primary",onClick:_[1]||(_[1]=P=>c.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[p]),_:1})}const{defineComponent:w,ref:F}=V,f=w({setup(){return{value:F(5)}}});return $({render:g},f)}()}},fe=n("h1",null,"Panel \u9762\u677F",-1),ve=n("p",null,"\u9762\u677F\u901A\u5E38\u7531\u5934\u90E8\u3001\u4E3B\u4F53\u548C\u811A\u6CE8\u7EC4\u6210\u3002Hongluan \u4E2D\u7684\u9762\u677F\u5927\u591A\u6570\u7528\u505A\u63D0\u793A\u6846\u3001\u901A\u77E5\u3001\u5BF9\u8BDD\u6846\u6216\u5F53\u4F5C\u52FE\u52D2\u5185\u5BB9\u533A\u57DF\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),Fe=n("h2",{id:"ji-ben-yang-shi"},[n("a",{class:"header-anchor",href:"#ji-ben-yang-shi"}),i(" \u57FA\u672C\u6837\u5F0F")],-1),be=n("p",null,"Panel \u7EC4\u4EF6\u5305\u62EC header\u3001body\u3001footer \u4E09\u4E2A slot, body \u662F\u4E3A\u9ED8\u8BA4 slot",-1),Ee=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),ge=n("h2",{id:"wu-bian-kuang-yang-shi"},[n("a",{class:"header-anchor",href:"#wu-bian-kuang-yang-shi"}),i(" \u65E0\u8FB9\u6846\u6837\u5F0F")],-1),Be=n("p",null,[n("code",null,"borderless"),i(" \u5C5E\u6027\u4F1A\u4F7F Panel \u7EC4\u4EF6\u53D8\u6210\u65E0\u8FB9\u6846\u72B6\u6001\uFF0C\u540C\u65F6\u5B83\u4EEC\u76F4\u63A5\u7684\u95F4\u8DDD\u4E5F\u4F1A\u4EA7\u751F\u53D8\u5316\u3002")],-1),De=n("div",null,[n("p",null,[n("code",null,"outlineless"),i(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664 Panel \u5916\u4FA7\u8F6E\u5ED3\u7684\u8FB9\u6846")])],-1),Ce=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),ye=n("h2",{id:"yuan-jiao-shu-xing"},[n("a",{class:"header-anchor",href:"#yuan-jiao-shu-xing"}),i(" \u5706\u89D2\u5C5E\u6027")],-1),we=n("p",null,[n("code",null,"radius"),i(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u5706\u89D2\u6837\u5F0F")],-1),xe=n("pre",null,[n("code",{class:"html"},` <template>
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
        label: 'sm',
      },
      {
        value: 'var(--md)',
        label: 'md',
      },
      {
        value: 'var(--lg)',
        label: 'lg',
      },
      {
        value: 'var(--xl)',
        label: 'xl',
      },
      {
        value: 'var(--xxl)',
        label: 'xxl',
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
`)],-1),Ae=n("h2",{id:"jian-ju-shu-xing"},[n("a",{class:"header-anchor",href:"#jian-ju-shu-xing"}),i(" \u95F4\u8DDD\u5C5E\u6027")],-1),ke=n("p",null,[n("code",null,"padding"),i(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u95F4\u8DDD\u5C3A\u5BF8\u3002"),n("code",null,"body-padding"),i(" \u5355\u72EC\u63A7\u5236 body \u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E "),n("code",null,"padding"),i("\u3002")],-1),Ve=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ne=Z('<h2 id="zi-ding-yi-lei-ming"><a class="header-anchor" href="#zi-ding-yi-lei-ming"></a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><p><code>header-class</code>\uFF0C<code>body-class</code> \u548C <code>footer-class</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u5411\u5BF9\u5E94\u7684<code>header</code>\uFF0C<code>body</code>\uFF0C<code>footer</code> \u589E\u52A0\u81EA\u5B9A\u4E49\u7C7B</p>',2),Pe=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),qe=n("h2",{id:"jian-dan-xing-tai"},[n("a",{class:"header-anchor",href:"#jian-dan-xing-tai"}),i(" \u7B80\u5355\u5F62\u6001")],-1),ze=n("p",null,[i("Panel \u7EC4\u4EF6\u5141\u8BB8\u79FB\u9664 "),n("code",null,"header"),i("\u548C"),n("code",null,"footer"),i(" \u7ED3\u6784\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u5B9A\u4E49\u5B83\u7684\u7528\u9014\u548C\u6837\u5F0F\u3002")],-1),Te=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),$e=n("h2",{id:"ke-kuo-zhan-de-header"},[n("a",{class:"header-anchor",href:"#ke-kuo-zhan-de-header"}),i(" \u53EF\u6269\u5C55\u7684 Header")],-1),je=n("p",null,"header \u63D2\u69FD\u53EF\u4EE5\u7684\u627F\u8F7D\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u7EC4\u4EF6\uFF0C\u4F60\u751A\u81F3\u4E0D\u9700\u8981\u5B9A\u4E49\u6837\u5F0F\u3002",-1),Se=n("div",null,[n("p",null,[i("\u5728 header \u7684 slot \u4E2D\u63D0\u4F9B\u4E86\u7684 "),n("code",null,"panel-header-left"),i("\uFF0C"),n("code",null,"panel-title"),i("\uFF0C"),n("code",null,"panel-header-right"),i(" \u4E09\u4E2A\u5E03\u5C40\u6837\u5F0F\u3002")])],-1),Le=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col-md-12">
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

    <hl-col span="col-md-12">
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

    <hl-col span="col-md-12" class="m-t-lg">
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

    <hl-col span="col-md-12" class="m-t-lg">
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

    <hl-col span="col-md-12" class="m-t-lg">
      <hl-panel>
        <template #header>
          <div class="panel-title">
            Title
          </div>
          <div class="panel-header-right">
            <hl-dropdown>
              <hl-button type="link" icon-position="right" no-fill>
                \u641C\u7D22
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

    <hl-col span="col-md-12" class="m-t-lg">
      <hl-panel>
        <template #header>
          <div class="panel-title">
            Title
          </div>
          <div class="panel-header-right">
            \u5C0F\u8D34\u58EB
          </div>
        </template>
        Panel-Body
      </hl-panel>
    </hl-col>
  </hl-row>
</template>
`)],-1),Ue=n("h2",{id:"gao-ji-gong-neng"},[n("a",{class:"header-anchor",href:"#gao-ji-gong-neng"}),i(" \u9AD8\u7EA7\u529F\u80FD")],-1),He=n("p",null,[n("code",null,"panel"),i(" \u63D0\u4F9B "),n("code",null,"\u6536\u8D77"),i(" \u548C "),n("code",null,"\u5168\u5C4F"),i(" \u529F\u80FD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u6309\u94AE\u6765\u63A7\u5236\u5B83\u4EEC\u3002")],-1),Qe=n("div",null,[n("p",null,[i("\u53EF\u4EE5\u8BBE\u7F6E fullscreen \u4E3A "),n("code",null,"object"),i(" \u7C7B\u578B\uFF0C\u521D\u59CB\u5316\u5168\u5C4F\u7684 Panel \u4F4D\u7F6E")])],-1),We=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ge=n("h2",{id:"zi-gua-ying-nei-bu-gun-dong"},[n("a",{class:"header-anchor",href:"#zi-gua-ying-nei-bu-gun-dong"}),i(" \u81EA\u9002\u5E94\u5185\u90E8\u6EDA\u52A8")],-1),Xe=n("p",null,[i("\u4F60\u53EF\u4EE5\u4E3A "),n("code",null,"panel"),i(" \u8BBE\u7F6E "),n("code",null,"inner-scroll"),i(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u5176 "),n("code",null,"panel-body"),i(" \u7684\u5185\u5BB9\u5728 panel \u5185\u90E8\u6EDA\u52A8")],-1),Ye=n("div",null,[n("p",null,[i("\u4F60\u65E0\u9700\u8BBE\u7F6E\u6EDA\u52A8\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u5B83\u662F\u6839\u636E"),n("code",null,"panel"),i("\u7684\u9AD8\u5EA6\u81EA\u52A8\u9002\u5E94\u7684\u3002")])],-1),Ie=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-panel style="height: calc(var(--xxl) * 8)" inner-scroll>
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
    <div style="height: calc(var(--xxl)*10)">\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F</div>
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
`)],-1),Je=Z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>borderless</td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>outlineless</td><td>\u662F\u5426\u65E0\u8F6E\u5ED3\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>radius</td><td>\u5706\u89D2</td><td>string</td><td>\u2014</td><td>$xxs</td></tr><tr><td>padding</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>body-padding</td><td>body \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>footer-padding</td><td>footer \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>header-class</td><td>\u4E3A header \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>body-class</td><td>\u4E3A body \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>footer-class</td><td>\u4E3A footer \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>fullscreen</td><td>\u5168\u5C4F\u6A21\u5F0F</td><td>boolean / object{top: string; left: string; bottom: stirng; right: string;}</td><td>\u2014</td><td>false</td></tr><tr><td>collapsed</td><td>\u6536\u8D77\u6A21\u5F0F\uFF0C\u5168\u5C4F\u6A21\u5F0F\u4E0B\u6536\u8D77\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>inner-scroll</td><td>\u4F7F panel-body \u7684\u5185\u5BB9\u5728 panel \u5185\u90E8\u6EDA\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Panel \u4E3B\u4F53\u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Panel \u5934\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Panel \u811A\u6CE8\u7684\u5185\u5BB9</td></tr></tbody></table>',4);function Ke(d,l,e,t,a,v){const A=T("hl-demo0"),o=T("demo-block"),u=T("hl-demo1"),p=T("hl-demo2"),m=T("hl-demo3"),y=T("hl-demo4"),g=T("hl-demo5"),w=T("hl-demo6"),F=T("hl-demo7"),f=T("hl-demo8"),c=T("right-nav");return re(),he(pe,null,[n("section",null,[fe,ve,Fe,be,C(o,{fs:""},{source:E(()=>[C(A)]),highlight:E(()=>[Ee]),_:1}),ge,Be,C(o,{fs:""},{source:E(()=>[C(u)]),highlight:E(()=>[Ce]),default:E(()=>[De]),_:1}),ye,we,C(o,{fs:""},{source:E(()=>[C(p)]),highlight:E(()=>[xe]),_:1}),Ae,ke,C(o,{fs:""},{source:E(()=>[C(m)]),highlight:E(()=>[Ve]),_:1}),Ne,C(o,{fs:""},{source:E(()=>[C(y)]),highlight:E(()=>[Pe]),_:1}),qe,ze,C(o,{fs:""},{source:E(()=>[C(g)]),highlight:E(()=>[Te]),_:1}),$e,je,C(o,{fs:""},{source:E(()=>[C(w)]),highlight:E(()=>[Le]),default:E(()=>[Se]),_:1}),Ue,He,C(o,{fs:""},{source:E(()=>[C(F)]),highlight:E(()=>[We]),default:E(()=>[Qe]),_:1}),Ge,Xe,C(o,{fs:""},{source:E(()=>[C(f)]),highlight:E(()=>[Ie]),default:E(()=>[Ye]),_:1}),Je]),C(c)],64)}var tl=_e(me,[["render",Ke]]);export{tl as default};
