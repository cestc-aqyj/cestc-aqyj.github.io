var re=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var le=(a,l,e)=>l in a?re(a,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[l]=e,U=(a,l)=>{for(var e in l||(l={}))pe.call(l,e)&&le(a,e,l[e]);if(ee)for(var e of ee(l))he.call(l,e)&&le(a,e,l[e]);return a};import{H as S,L as me,W as _e,Q as o,X as w,P as F,a4 as fe,aJ as T,S as s,o as te}from"./vue.059774a0.js";import{H as j}from"./hongluan-icons.5b925e95.js";import{_ as ve}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const Fe={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:k}=T,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},h=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(x,b){const i=l("two-close"),_=l("hl-icon"),A=l("hl-button"),v=l("hl-panel");return f(),k(v,null,{header:t(()=>[u,a("div",n,[e(_,null,{default:t(()=>[e(i)]),_:1})])]),footer:t(()=>[e(A,{class:"m-r-md",onClick:b[0]||(b[0]=E=>x.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(A,{type:"primary",onClick:b[1]||(b[1]=E=>x.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[h]),_:1})}const{defineComponent:B}=T,{TwoClose:C}=j,V=B({components:{TwoClose:C}});return U({render:g},V)}(),"hl-demo1":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:k}=T,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},h=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(i,_){const A=l("two-upload"),v=l("hl-icon"),E=l("hl-button"),N=l("two-maximize"),P=l("hl-panel");return f(),k(P,{ref:"panel",borderless:""},{header:t(()=>[u,a("div",n,[e(E,{equal:"","no-fill":""},{default:t(()=>[e(v,null,{default:t(()=>[e(A)]),_:1})]),_:1}),e(E,{equal:"","no-fill":"",onClick:_[0]||(_[0]=z=>i.panel.toggleFullscreen())},{default:t(()=>[e(v,null,{default:t(()=>[e(N)]),_:1})]),_:1})])]),footer:t(()=>[e(E,{class:"m-r-md",onClick:_[1]||(_[1]=z=>i.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(E,{type:"primary",onClick:_[2]||(_[2]=z=>i.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[h]),_:1},512)}const{defineComponent:B,ref:C}=T,{TwoUpload:V,TwoMaximize:x}=j,b=B({components:{TwoUpload:V,TwoMaximize:x},setup(){return{panel:C(null)}}});return U({render:g},b)}(),"hl-demo2":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:d,createBlock:f,createCommentVNode:k,withCtx:u,createVNode:n,createElementVNode:h,createTextVNode:m}=T,y=h("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),g={class:"panel-header-right"},B=h("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),C=m("\u53D6 \u6D88"),V=m("\u786E \u5B9A"),x=h("div",{class:"panel-title"},"\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",-1),b={class:"panel-header-right"},i=h("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),_=m("\u53D6 \u6D88"),A=m("\u786E \u5B9A");function v(r,p){const q=d("hl-option"),W=d("hl-select"),G=d("hl-group"),L=d("two-upload"),$=d("hl-icon"),D=d("hl-button"),H=d("two-maximize"),I=d("hl-panel"),Q=d("hl-col"),K=d("hl-row");return e(),t(l,null,[n(G,{gap:"var(--md)"},{default:u(()=>[n(W,{modelValue:r.radius,"onUpdate:modelValue":p[0]||(p[0]=c=>r.radius=c),clearable:"",placeholder:"radius\u5C3A\u5BF8"},{default:u(()=>[(e(!0),t(l,null,a(r.options,c=>(e(),t(l,null,[c.divider?(e(),f(q,{key:c.value,divider:""})):(e(),f(q,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),n(K,{class:"m-t-md",gap:"var(--xl)"},{default:u(()=>[n(Q,{span:"col"},{default:u(()=>[n(I,{radius:r.radius},{header:u(()=>[y,h("div",g,[n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(L)]),_:1})]),_:1}),n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(H)]),_:1})]),_:1})])]),footer:u(()=>[n(D,{class:"m-r-md",onClick:p[1]||(p[1]=c=>r.dialogVisible=!1)},{default:u(()=>[C]),_:1}),n(D,{type:"primary",onClick:p[2]||(p[2]=c=>r.dialogVisible=!1)},{default:u(()=>[V]),_:1})]),default:u(()=>[B]),_:1},8,["radius"])]),_:1}),n(Q,{span:"col"},{default:u(()=>[n(I,{radius:r.radius,borderless:""},{header:u(()=>[x,h("div",b,[n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(L)]),_:1})]),_:1}),n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(H)]),_:1})]),_:1})])]),footer:u(()=>[n(D,{class:"m-r-md",onClick:p[3]||(p[3]=c=>r.dialogVisible=!1)},{default:u(()=>[_]),_:1}),n(D,{type:"primary",onClick:p[4]||(p[4]=c=>r.dialogVisible=!1)},{default:u(()=>[A]),_:1})]),default:u(()=>[i]),_:1},8,["radius"])]),_:1})]),_:1})],64)}const{defineComponent:E,ref:N}=T,{TwoUpload:P,TwoMaximize:z}=j,M=E({components:{TwoUpload:P,TwoMaximize:z},setup(){const r=N([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),p=N("");return{options:r,radius:p}}});return U({render:v},M)}(),"hl-demo3":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:t,resolveComponent:d,createBlock:f,createCommentVNode:k,withCtx:u,createVNode:n,createElementVNode:h,createTextVNode:m}=T,y=h("div",{class:"panel-title"},"\u6807\u9898",-1),g={class:"panel-header-right"},B=h("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),C=m("\u53D6 \u6D88"),V=m("\u786E \u5B9A"),x=h("div",{class:"panel-title"},"\u6807\u9898",-1),b={class:"panel-header-right"},i=h("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),_=m("\u53D6 \u6D88"),A=m("\u786E \u5B9A");function v(r,p){const q=d("hl-option"),W=d("hl-select"),G=d("hl-group"),L=d("two-upload"),$=d("hl-icon"),D=d("hl-button"),H=d("two-maximize"),I=d("hl-panel"),Q=d("hl-col"),K=d("hl-row");return e(),t(l,null,[n(G,{gap:"var(--md)"},{default:u(()=>[n(W,{modelValue:r.padding,"onUpdate:modelValue":p[0]||(p[0]=c=>r.padding=c),clearable:"",placeholder:"padding"},{default:u(()=>[(e(!0),t(l,null,a(r.options,c=>(e(),t(l,null,[c.divider?(e(),f(q,{key:c.value,divider:""})):(e(),f(q,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),n(W,{modelValue:r.bodyPadding,"onUpdate:modelValue":p[1]||(p[1]=c=>r.bodyPadding=c),clearable:"",placeholder:"body-padding"},{default:u(()=>[(e(!0),t(l,null,a(r.options,c=>(e(),t(l,null,[c.divider?(e(),f(q,{key:c.value,divider:""})):(e(),f(q,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),n(K,{class:"m-t-md",gap:"var(--xl)"},{default:u(()=>[n(Q,{span:"col"},{default:u(()=>[n(I,{padding:r.padding,"body-padding":r.bodyPadding},{header:u(()=>[y,h("div",g,[n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(L)]),_:1})]),_:1}),n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(H)]),_:1})]),_:1})])]),footer:u(()=>[n(D,{class:"m-r-md",onClick:p[2]||(p[2]=c=>r.dialogVisible=!1)},{default:u(()=>[C]),_:1}),n(D,{type:"primary",onClick:p[3]||(p[3]=c=>r.dialogVisible=!1)},{default:u(()=>[V]),_:1})]),default:u(()=>[B]),_:1},8,["padding","body-padding"])]),_:1}),n(Q,{span:"col"},{default:u(()=>[n(I,{padding:r.padding,"body-padding":r.bodyPadding,borderless:""},{header:u(()=>[x,h("div",b,[n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(L)]),_:1})]),_:1}),n(D,{equal:"","no-fill":""},{default:u(()=>[n($,null,{default:u(()=>[n(H)]),_:1})]),_:1})])]),footer:u(()=>[n(D,{class:"m-r-md",onClick:p[4]||(p[4]=c=>r.dialogVisible=!1)},{default:u(()=>[_]),_:1}),n(D,{type:"primary",onClick:p[5]||(p[5]=c=>r.dialogVisible=!1)},{default:u(()=>[A]),_:1})]),default:u(()=>[i]),_:1},8,["padding","body-padding"])]),_:1})]),_:1})],64)}const{defineComponent:E,ref:N}=T,{TwoUpload:P,TwoMaximize:z}=j,M=E({components:{TwoUpload:P,TwoMaximize:z},setup(){const r=N([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"var(--sm)"},{value:"var(--md)",label:"var(--md)"},{value:"var(--lg)",label:"var(--lg)"},{value:"var(--xl)",label:"var(--xl)"},{value:"var(--xxl)",label:"var(--xxl)"}]),p=N(""),q=N("");return{options:r,padding:p,bodyPadding:q}}});return U({render:v},M)}(),"hl-demo4":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:k}=T,u=a("div",{class:"panel-title"}," \u6807\u9898 ",-1),n={class:"panel-header-right"},h=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(b,i){const _=l("two-upload"),A=l("hl-icon"),v=l("hl-button"),E=l("two-maximize"),N=l("hl-panel"),P=l("hl-col"),z=l("hl-row");return f(),k(z,{gap:"var(--md)"},{default:t(()=>[e(P,{span:"col"},{default:t(()=>[e(N,{padding:"var(--md)","header-class":"new-header-class","body-class":"new-body-class","footer-class":"new-footer-class"},{header:t(()=>[u,a("div",n,[e(v,{equal:"","no-fill":""},{default:t(()=>[e(A,null,{default:t(()=>[e(_)]),_:1})]),_:1}),e(v,{equal:"","no-fill":""},{default:t(()=>[e(A,null,{default:t(()=>[e(E)]),_:1})]),_:1})])]),footer:t(()=>[e(v,{class:"m-r-md",onClick:i[0]||(i[0]=M=>b.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(v,{type:"primary",onClick:i[1]||(i[1]=M=>b.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[h]),_:1})]),_:1})]),_:1})}const{defineComponent:B}=T,{TwoUpload:C,TwoMaximize:V}=j,x=B({components:{TwoUpload:C,TwoMaximize:V}});return U({render:g},x)}(),"hl-demo5":function(){const{createElementVNode:a,resolveComponent:l,withCtx:e,createVNode:t,openBlock:d,createBlock:f}=T,k=a("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)",-1),u=a("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)",-1);function n(m,y){const g=l("hl-panel"),B=l("hl-col"),C=l("hl-row");return d(),f(C,{gap:"var(--md)"},{default:e(()=>[t(B,{span:"col"},{default:e(()=>[t(g,null,{default:e(()=>[k]),_:1})]),_:1}),t(B,{span:"col"},{default:e(()=>[t(g,{borderless:""},{default:e(()=>[u]),_:1})]),_:1})]),_:1})}return U({render:n},{})}(),"hl-demo6":function(){const{resolveComponent:a,createVNode:l,withCtx:e,createElementVNode:t,createTextVNode:d,openBlock:f,createBlock:k}=T,u={class:"panel-header-left"},n=t("div",{class:"panel-title"}," Title ",-1),h=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),m=d(" Panel-Body "),y={class:"panel-header-left"},g=t("span",null,"\u6D4B\u8BD5",-1),B=t("div",{class:"panel-title"},[t("h5",null,"\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...")],-1),C=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),V=d(" Panel-Body "),x=t("div",{class:"panel-title"}," Title ",-1),b={class:"panel-header-right"},i=d(" Panel-Body "),_=t("div",{class:"panel-title"}," Title ",-1),A={class:"panel-header-right"},v=d(" \u641C\u7D22 "),E=d(" Panel-Body "),N=t("div",{class:"panel-title"}," Title ",-1),P={class:"panel-header-right"},z=d(" \u9009\u62E9 "),M=d("\u6570\u636E\u6D41"),r=d("\u4F20\u8F93\u5C5E\u6027\u503C"),p=d("\u5DF2\u65AD\u7EBF"),q=d("\u5F85\u6062\u590D"),W=d(" Panel-Body "),G=t("div",{class:"panel-title"}," Title ",-1),L=t("div",{class:"panel-header-right"},[t("span",{class:"text-danger"},"\u5C0F\u8D34\u58EB")],-1),$=d(" Panel-Body ");function D(c,Ze){const oe=a("two-news"),O=a("hl-icon"),X=a("hl-panel"),J=a("hl-col"),ue=a("hl-thumb"),Y=a("two-search"),ne=a("hl-input"),ae=a("hl-group"),Z=a("hl-button"),de=a("two-chevron-bottom"),R=a("hl-dropdown-item"),se=a("hl-dropdown-menu"),ie=a("hl-dropdown"),ce=a("hl-row");return f(),k(ce,{gap:"var(--md)"},{default:e(()=>[l(J,{span:"md:col-12"},{default:e(()=>[l(X,{"footer-align":"align-left"},{header:e(()=>[t("div",u,[l(O,{size:"lg",border:1.5},{default:e(()=>[l(oe)]),_:1},8,["border"])]),n,h]),default:e(()=>[m]),_:1})]),_:1}),l(J,{span:"md:col-12"},{default:e(()=>[l(X,null,{header:e(()=>[t("div",y,[l(ue,{size:"sm",round:"",class:"primary"},{default:e(()=>[g]),_:1})]),B,C]),default:e(()=>[V]),_:1})]),_:1}),l(J,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[x,t("div",b,[l(ae,{merge:"",indent:""},{default:e(()=>[l(ne,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:"",fill:""},{suffix:e(()=>[l(O,null,{default:e(()=>[l(Y)]),_:1})]),_:1})]),_:1})])]),default:e(()=>[i]),_:1})]),_:1}),l(J,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[_,t("div",A,[l(Z,{type:"primary","icon-position":"right"},{icon:e(()=>[l(O,null,{default:e(()=>[l(Y)]),_:1})]),default:e(()=>[v]),_:1})])]),default:e(()=>[E]),_:1})]),_:1}),l(J,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[N,t("div",P,[l(ie,null,{dropdown:e(()=>[l(se,null,{default:e(()=>[l(R,null,{default:e(()=>[M]),_:1}),l(R,null,{default:e(()=>[r]),_:1}),l(R,null,{default:e(()=>[p]),_:1}),l(R,null,{default:e(()=>[q]),_:1})]),_:1})]),default:e(()=>[l(Z,{type:"link","icon-position":"right","no-fill":""},{icon:e(()=>[l(O,null,{default:e(()=>[l(de)]),_:1})]),default:e(()=>[z]),_:1})]),_:1})])]),default:e(()=>[W]),_:1})]),_:1}),l(J,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[l(X,null,{header:e(()=>[G,L]),default:e(()=>[$]),_:1})]),_:1})]),_:1})}const{defineComponent:H}=T,{TwoSearch:I,TwoChevronBottom:Q}=j,K=H({components:{TwoSearch:I,TwoChevronBottom:Q}});return U({render:D},K)}(),"hl-demo7":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:k}=T,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},h=a("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(i,_){const A=l("two-top"),v=l("hl-icon"),E=l("hl-button"),N=l("two-maximize"),P=l("hl-panel"),z=l("hl-col"),M=l("hl-row");return f(),k(M,{gap:"var(--md)"},{default:t(()=>[e(z,{span:"col"},{default:t(()=>[e(P,{fullscreen:i.maxStatus,collapsed:i.minStatus},{header:t(()=>[u,a("div",n,[e(E,{equal:"","no-fill":"",onClick:i.min},{default:t(()=>[e(v,null,{default:t(()=>[e(A)]),_:1})]),_:1},8,["onClick"]),e(E,{equal:"","no-fill":"",onClick:i.max},{default:t(()=>[e(v,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["onClick"])])]),footer:t(()=>[e(E,{class:"m-r-md"},{default:t(()=>[m]),_:1}),e(E,{type:"primary"},{default:t(()=>[y]),_:1})]),default:t(()=>[h]),_:1},8,["fullscreen","collapsed"])]),_:1})]),_:1})}const{defineComponent:B,ref:C}=T,{TwoTop:V,TwoMaximize:x}=j,b=B({components:{TwoTop:V,TwoMaximize:x},setup(){const i=C(!1),_=C(!1);return{maxStatus:i,minStatus:_,min:()=>{_.value=!_.value},max:()=>{i.value?i.value=!1:i.value={top:"var(--xxl)",left:"var(--xxl)",right:"var(--xxl)",bottom:"var(--xxl)"}}}}});return U({render:g},b)}(),"hl-demo8":function(){const{createElementVNode:a,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:d,openBlock:f,createBlock:k}=T,u=a("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),n={class:"panel-header-right"},h=a("div",{class:"scrollable h-full"},[a("div",{class:"p-lg",style:{height:"calc(var(--xxl)*10)"}},"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F")],-1),m=d("\u53D6 \u6D88"),y=d("\u786E \u5B9A");function g(b,i){const _=l("two-close"),A=l("hl-icon"),v=l("hl-button"),E=l("hl-panel");return f(),k(E,{style:{height:"calc(var(--xxl) * 8)"},"full-body":""},{header:t(()=>[u,a("div",n,[e(A,null,{default:t(()=>[e(_)]),_:1})])]),footer:t(()=>[e(v,{class:"m-r-md",onClick:i[0]||(i[0]=N=>b.dialogVisible=!1)},{default:t(()=>[m]),_:1}),e(v,{type:"primary",onClick:i[1]||(i[1]=N=>b.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[h]),_:1})}const{defineComponent:B,ref:C}=T,{TwoClose:V}=j,x=B({components:{TwoClose:V},setup(){return{value:C(5)}}});return U({render:g},x)}()}},be=o("h1",null,"Panel \u9762\u677F",-1),Ee=o("p",null,"\u9762\u677F\u901A\u5E38\u7531\u5934\u90E8\u3001\u4E3B\u4F53\u548C\u811A\u6CE8\u7EC4\u6210\u3002Hongluan \u4E2D\u7684\u9762\u677F\u5927\u591A\u6570\u7528\u505A\u63D0\u793A\u6846\u3001\u901A\u77E5\u3001\u5BF9\u8BDD\u6846\u6216\u5F53\u4F5C\u52FE\u52D2\u5185\u5BB9\u533A\u57DF\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),ge=o("h2",{id:"ji-ben-yang-shi"},[o("a",{class:"header-anchor",href:"#ji-ben-yang-shi"}),s(" \u57FA\u672C\u6837\u5F0F")],-1),Be=o("p",null,"Panel \u7EC4\u4EF6\u5305\u62EC header\u3001body\u3001footer \u4E09\u4E2A slot, body \u662F\u4E3A\u9ED8\u8BA4 slot",-1),Ce=o("pre",null,[o("code",{class:"html"},` <template>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoClose } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoClose },
})
<\/script>
`)],-1),De=o("h2",{id:"wu-bian-kuang-yang-shi"},[o("a",{class:"header-anchor",href:"#wu-bian-kuang-yang-shi"}),s(" \u65E0\u8FB9\u6846\u6837\u5F0F")],-1),we=o("p",null,[o("code",null,"borderless"),s(" \u5C5E\u6027\u4F1A\u4F7F Panel \u7EC4\u4EF6\u53D8\u6210\u65E0\u8FB9\u6846\u72B6\u6001\uFF0C\u540C\u65F6\u5B83\u4EEC\u76F4\u63A5\u7684\u95F4\u8DDD\u4E5F\u4F1A\u4EA7\u751F\u53D8\u5316\u3002")],-1),ye=o("div",null,[o("p",null,[o("code",null,"outlineless"),s(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664 Panel \u5916\u4FA7\u8F6E\u5ED3\u7684\u8FB9\u6846")])],-1),xe=o("pre",null,[o("code",{class:"html"},` <template>
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
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoUpload, TwoMaximize },
  setup() {
    const panel = ref(null)
    return {
      panel,
    }
  },
})
<\/script>
`)],-1),Ae=o("h2",{id:"yuan-jiao-shu-xing"},[o("a",{class:"header-anchor",href:"#yuan-jiao-shu-xing"}),s(" \u5706\u89D2\u5C5E\u6027")],-1),ke=o("p",null,[o("code",null,"radius"),s(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u5706\u89D2\u6837\u5F0F")],-1),Ve=o("pre",null,[o("code",{class:"html"},` <template>
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
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoUpload, TwoMaximize },
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
`)],-1),Te=o("h2",{id:"jian-ju-shu-xing"},[o("a",{class:"header-anchor",href:"#jian-ju-shu-xing"}),s(" \u95F4\u8DDD\u5C5E\u6027")],-1),Ne=o("p",null,[o("code",null,"padding"),s(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u95F4\u8DDD\u5C3A\u5BF8\u3002"),o("code",null,"body-padding"),s(" \u5355\u72EC\u63A7\u5236 body \u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E "),o("code",null,"padding"),s("\u3002")],-1),ze=o("pre",null,[o("code",{class:"html"},` <template>
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
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoUpload, TwoMaximize },
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
`)],-1),Pe=te('<h2 id="zi-ding-yi-lei-ming"><a class="header-anchor" href="#zi-ding-yi-lei-ming"></a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><p><code>header-class</code>\uFF0C<code>body-class</code> \u548C <code>footer-class</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u5411\u5BF9\u5E94\u7684<code>header</code>\uFF0C<code>body</code>\uFF0C<code>footer</code> \u589E\u52A0\u81EA\u5B9A\u4E49\u7C7B</p>',2),qe=o("pre",null,[o("code",{class:"html"},` <template>
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
<script>
import { defineComponent } from 'vue'
import { TwoUpload, TwoMaximize } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoUpload, TwoMaximize },
})
<\/script>
`)],-1),$e=o("h2",{id:"jian-dan-xing-tai"},[o("a",{class:"header-anchor",href:"#jian-dan-xing-tai"}),s(" \u7B80\u5355\u5F62\u6001")],-1),Se=o("p",null,[s("Panel \u7EC4\u4EF6\u5141\u8BB8\u79FB\u9664 "),o("code",null,"header"),s("\u548C"),o("code",null,"footer"),s(" \u7ED3\u6784\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u5B9A\u4E49\u5B83\u7684\u7528\u9014\u3002")],-1),Ue=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Me=o("h2",{id:"ke-kuo-zhan-de-header"},[o("a",{class:"header-anchor",href:"#ke-kuo-zhan-de-header"}),s(" \u53EF\u6269\u5C55\u7684 Header")],-1),je=o("p",null,[o("code",null,"header"),s(" \u63D2\u69FD\u53EF\u4EE5\u7684\u627F\u8F7D\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u7EC4\u4EF6\uFF0C\u4F60\u751A\u81F3\u4E0D\u9700\u8981\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Le=o("div",null,[o("p",null,[s("\u5728 header \u7684 slot \u4E2D\u63D0\u4F9B\u4E86\u7684 "),o("code",null,"panel-header-left"),s("\uFF0C"),o("code",null,"panel-title"),s("\uFF0C"),o("code",null,"panel-header-right"),s(" \u4E09\u4E2A\u5E03\u5C40\u6837\u5F0F\u3002")])],-1),He=o("pre",null,[o("code",{class:"html"},` <template>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoSearch, TwoChevronBottom } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoSearch, TwoChevronBottom },
})
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
<script>
import { defineComponent, ref } from 'vue'
import { TwoTop, TwoMaximize } from '@hongluan-ui/icons'

export default defineComponent ({
  components: { TwoTop, TwoMaximize },
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
`)],-1),Je=o("h2",{id:"zi-gua-ying-bodyqu-yu"},[o("a",{class:"header-anchor",href:"#zi-gua-ying-bodyqu-yu"}),s(" \u81EA\u9002\u5E94Body\u533A\u57DF")],-1),Ge=o("p",null,[s("\u4F60\u53EF\u4EE5\u4E3A "),o("code",null,"panel"),s(" \u8BBE\u7F6E "),o("code",null,"full-body"),s(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u5176 "),o("code",null,"panel-body"),s(" \u6839\u636E"),o("code",null,"panel"),s("\u7684\u9AD8\u5EA6\u81EA\u52A8\u4F38\u957F")],-1),Ke=o("div",null,[o("p",null,[s("\u4F60\u53EF\u4EE5\u52A0\u4E0A\u5E26\u6709scroll\u5C5E\u6027\u7684\u7ED3\u6784\u6765\u4F7F\u5185\u5BB9\u5728\u9762\u677F\u5185\u6EDA\u52A8\uFF0C\u5B83\u53EF\u6839\u636E"),o("code",null,"panel"),s("\u7684\u9AD8\u5EA6\u81EA\u52A8\u9002\u5E94\u800C\u65E0\u9700\u8BBE\u7F6E\u6EDA\u52A8\u533A\u57DF\u7684\u9AD8\u5EA6\u3002")])],-1),Oe=o("pre",null,[o("code",{class:"html"},` <template>
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
import { TwoClose } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoClose },
  setup() {
    const value = ref(5)

    return {
      value,
    }
  },
})
<\/script>
`)],-1),Re=te('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>borderless</td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>outlineless</td><td>\u662F\u5426\u65E0\u8F6E\u5ED3\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>radius</td><td>\u5706\u89D2</td><td>string</td><td>\u2014</td><td>$xxs</td></tr><tr><td>padding</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>body-padding</td><td>body \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>footer-padding</td><td>footer \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>header-class</td><td>\u4E3A header \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>body-class</td><td>\u4E3A body \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>footer-class</td><td>\u4E3A footer \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>fullscreen</td><td>\u5168\u5C4F\u6A21\u5F0F</td><td>boolean / object{top: string; left: string; bottom: stirng; right: string;}</td><td>\u2014</td><td>false</td></tr><tr><td>collapsed</td><td>\u6536\u8D77\u6A21\u5F0F\uFF0C\u5168\u5C4F\u6A21\u5F0F\u4E0B\u6536\u8D77\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>full-body</td><td>\u53EF\u4F7F\u5176 panel-body \u6839\u636Epanel\u7684\u9AD8\u5EA6\u81EA\u52A8\u4F38\u957F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Panel \u4E3B\u4F53\u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Panel \u5934\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Panel \u811A\u6CE8\u7684\u5185\u5BB9</td></tr></tbody></table>',4);function Ye(a,l,e,t,d,f){const k=S("hl-demo0"),u=S("demo-block"),n=S("hl-demo1"),h=S("hl-demo2"),m=S("hl-demo3"),y=S("hl-demo4"),g=S("hl-demo5"),B=S("hl-demo6"),C=S("hl-demo7"),V=S("hl-demo8"),x=S("right-nav");return me(),_e(fe,null,[o("section",null,[be,Ee,ge,Be,w(u,{fs:""},{source:F(()=>[w(k)]),highlight:F(()=>[Ce]),_:1}),De,we,w(u,{fs:""},{source:F(()=>[w(n)]),highlight:F(()=>[xe]),default:F(()=>[ye]),_:1}),Ae,ke,w(u,{fs:""},{source:F(()=>[w(h)]),highlight:F(()=>[Ve]),_:1}),Te,Ne,w(u,{fs:""},{source:F(()=>[w(m)]),highlight:F(()=>[ze]),_:1}),Pe,w(u,{fs:""},{source:F(()=>[w(y)]),highlight:F(()=>[qe]),_:1}),$e,Se,w(u,{fs:""},{source:F(()=>[w(g)]),highlight:F(()=>[Ue]),_:1}),Me,je,w(u,{fs:""},{source:F(()=>[w(B)]),highlight:F(()=>[He]),default:F(()=>[Le]),_:1}),Ie,Qe,w(u,{fs:""},{source:F(()=>[w(C)]),highlight:F(()=>[Xe]),default:F(()=>[We]),_:1}),Je,Ge,w(u,{fs:""},{source:F(()=>[w(V)]),highlight:F(()=>[Oe]),default:F(()=>[Ke]),_:1}),Re]),w(x)],64)}var al=ve(Fe,[["render",Ye]]);export{al as default};
