var q=Object.defineProperty;var z=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var L=(e,u,t)=>u in e?q(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,w=(e,u)=>{for(var t in u||(u={}))M.call(u,t)&&L(e,t,u[t]);if(z)for(var t of z(u))j.call(u,t)&&L(e,t,u[t]);return e};import{P as A,L as I,W as Z,Q as o,X as f,S as d,F as R,aC as x,Y as h,o as $}from"./vue.0e7200cd.js";import{_ as G}from"./index.9dfed6e6.js";import"./hongluan.ccf786f1.js";import"./highlight.e2508551.js";import"./hongluan-icons.9e674cb2.js";const P={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("\u9ED8\u8BA4"),l=e("\u9996\u9009"),_=e("\u6210\u529F"),g=e("\u8B66\u544A"),F=e("\u5371\u9669"),B=e("\u4FE1\u606F"),C=e("link");function b(s,r){const c=u("hl-button"),p=u("hl-group");return i(),m(p,{gap:"var(--sm)"},{default:t(()=>[n(c,null,{default:t(()=>[a]),_:1}),n(c,{type:"primary"},{default:t(()=>[l]),_:1}),n(c,{type:"success"},{default:t(()=>[_]),_:1}),n(c,{type:"warning"},{default:t(()=>[g]),_:1}),n(c,{type:"danger"},{default:t(()=>[F]),_:1}),n(c,{type:"info"},{default:t(()=>[B]),_:1}),n(c,{type:"link"},{default:t(()=>[C]),_:1})]),_:1})}return w({render:b},{})}(),"hl-demo1":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("\u9ED8\u8BA4"),l=e("\u9996\u9009"),_=e("\u6210\u529F"),g=e("\u8B66\u544A"),F=e("\u5371\u9669"),B=e("\u4FE1\u606F");function C(E,s){const r=u("hl-button"),c=u("hl-group");return i(),m(c,{gap:"var(--sm)"},{default:t(()=>[n(r,{effect:"light"},{default:t(()=>[a]),_:1}),n(r,{type:"primary",effect:"light"},{default:t(()=>[l]),_:1}),n(r,{type:"success",effect:"light"},{default:t(()=>[_]),_:1}),n(r,{type:"warning",effect:"light"},{default:t(()=>[g]),_:1}),n(r,{type:"danger",effect:"light"},{default:t(()=>[F]),_:1}),n(r,{type:"info",effect:"light"},{default:t(()=>[B]),_:1})]),_:1})}return w({render:C},{})}(),"hl-demo2":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("\u9ED8\u8BA4"),l=e("\u65E0\u586B\u5145"),_=e("\u6DE1\u8272 & \u65E0\u586B\u5145");function g(B,C){const b=u("hl-button"),E=u("hl-group");return i(),m(E,{gap:"var(--sm)"},{default:t(()=>[n(b,{"no-fill":""},{default:t(()=>[a]),_:1}),n(b,{type:"primary","no-fill":""},{default:t(()=>[l]),_:1}),n(b,{type:"primary",effect:"light","no-fill":""},{default:t(()=>[_]),_:1})]),_:1})}return w({render:g},{})}(),"hl-demo3":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("\u9996\u9009"),l=e("\u6210\u529F"),_=e("\u8B66\u544A"),g=e("\u5371\u9669"),F=e("\u4FE1\u606F"),B=e("\u9996\u9009"),C=e("\u6210\u529F"),b=e("\u8B66\u544A"),E=e("\u5371\u9669"),s=e("\u4FE1\u606F");function r(p,v){const y=u("hl-button"),D=u("hl-group");return i(),m(D,{dir:"vertical",gap:"var(--lg)"},{default:t(()=>[n(D,{gap:"var(--sm)"},{default:t(()=>[n(y,{"no-fill":"",type:"primary",hover:"danger"},{default:t(()=>[a]),_:1}),n(y,{"no-fill":"",type:"success",hover:"danger"},{default:t(()=>[l]),_:1}),n(y,{"no-fill":"",type:"warning",hover:"danger"},{default:t(()=>[_]),_:1}),n(y,{"no-fill":"",type:"danger",hover:"danger"},{default:t(()=>[g]),_:1}),n(y,{"no-fill":"",type:"info",hover:"danger"},{default:t(()=>[F]),_:1})]),_:1}),n(D,{gap:"var(--sm)"},{default:t(()=>[n(y,{effect:"light",hover:"primary"},{default:t(()=>[B]),_:1}),n(y,{effect:"light",hover:"success"},{default:t(()=>[C]),_:1}),n(y,{effect:"light",hover:"warning"},{default:t(()=>[b]),_:1}),n(y,{effect:"light",hover:"danger"},{default:t(()=>[E]),_:1}),n(y,{effect:"light",hover:"info"},{default:t(()=>[s]),_:1})]),_:1})]),_:1})}return w({render:r},{})}(),"hl-demo4":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("\u5C0F\u6309\u94AE sm"),l=e("\u4E2D\u6309\u94AE md"),_=e("\u5927\u6309\u94AE lg");function g(B,C){const b=u("hl-button"),E=u("hl-group");return i(),m(E,{gap:"var(--sm)"},{default:t(()=>[n(b,{size:"sm"},{default:t(()=>[a]),_:1}),n(b,{size:"md"},{default:t(()=>[l]),_:1}),n(b,{size:"lg"},{default:t(()=>[_]),_:1})]),_:1})}return w({render:g},{})}(),"hl-demo5":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("\u6B63\u65B9"),l=e("\u6B63\u5706"),_=e("\u692D\u5706"),g=e("\u5706\u89D2\u8F6E\u5ED3"),F=e("\u692D\u5706\u8F6E\u5ED3"),B=e("\u5706\u89D2\u8F6E\u5ED3"),C=e("\u692D\u5706\u8F6E\u5ED3");function b(s,r){const c=u("hl-button"),p=u("hl-group");return i(),m(p,{gap:"var(--sm)"},{default:t(()=>[n(c,{type:"info",equal:""},{default:t(()=>[a]),_:1}),n(c,{type:"primary",equal:"",round:""},{default:t(()=>[l]),_:1}),n(c,{type:"warning",round:""},{default:t(()=>[_]),_:1}),n(c,{type:"primary",outline:""},{default:t(()=>[g]),_:1}),n(c,{type:"danger",round:"",outline:""},{default:t(()=>[F]),_:1}),n(c,{type:"primary",effect:"light",outline:"",dashed:""},{default:t(()=>[B]),_:1}),n(c,{type:"danger",effect:"light",round:"",outline:"",dashed:""},{default:t(()=>[C]),_:1})]),_:1})}return w({render:b},{})}(),"hl-demo6":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("Default"),l=e("Primary"),_=e("Light"),g=e("No-Fill");function F(C,b){const E=u("hl-button"),s=u("hl-group");return i(),m(s,{gap:"var(--sm)",wrap:""},{default:t(()=>[n(E,{disabled:""},{default:t(()=>[a]),_:1}),n(E,{type:"primary",disabled:""},{default:t(()=>[l]),_:1}),n(E,{type:"danger",effect:"light",disabled:""},{default:t(()=>[_]),_:1}),n(E,{"no-fill":"",disabled:""},{default:t(()=>[g]),_:1})]),_:1})}return w({render:F},{})}(),"hl-demo7":function(){const{resolveComponent:e,createVNode:u,withCtx:t,createTextVNode:n,createElementVNode:i,openBlock:m,createBlock:a}=x,l=n(" \u7F16\u8F91\u5185\u5BB9 "),_=n(" \u641C\u7D22 "),g=i("svg",{viewBox:"0 0 14 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[i("g",{stroke:"none","stroke-width":"1",fill:"currentColor","fill-rule":"evenodd"},[i("path",{d:"M3.81085186,7.8741634 C3.08368425,8.51551024 2.625,9.4541894 2.625,10.5 L2.625,13.475 C2.625,13.6606894 2.66115115,13.8379353 2.72679927,14.0000835 L0.525,14 C0.235050506,14 -2.25375274e-14,13.7649495 -2.25375274e-14,13.475 L-2.25375274e-14,10.5 C-2.25375274e-14,9.05025253 1.17525253,7.875 2.625,7.875 L3.81085186,7.8741634 Z M5.25,0 C5.51327888,0 5.76976817,0.0290696479 6.01643329,0.0841743439 C5.01529025,0.886619755 4.375,2.11853598 4.375,3.5 C4.375,4.88146402 5.01529025,6.11338024 6.01529372,6.91517165 C5.76976817,6.97093035 5.51327888,7 5.25,7 C3.31700338,7 1.75,5.43299662 1.75,3.5 C1.75,1.56700338 3.31700338,0 5.25,0 Z",opacity:"0.319999993"}),i("path",{d:"M11.375,7.875 C12.8247475,7.875 14,9.05025253 14,10.5 L14,13.475 C14,13.7649495 13.7649495,14 13.475,14 L4.025,14 C3.73505051,14 3.5,13.7649495 3.5,13.475 L3.5,10.5 C3.5,9.05025253 4.67525253,7.875 6.125,7.875 L11.375,7.875 Z M8.75,0 C10.6829966,0 12.25,1.56700338 12.25,3.5 C12.25,5.43299662 10.6829966,7 8.75,7 C6.81700338,7 5.25,5.43299662 5.25,3.5 C5.25,1.56700338 6.81700338,0 8.75,0 Z"})])],-1),F=n(" \u81EA\u5B9A\u4E49\u56FE\u6807 "),B=i("svg",{t:"1611553326339",viewBox:"0 0 1024 1024",fill:"currentColor",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M454.656 544.064c14.08 0 25.6 11.52 25.6 25.6v198.4a224 224 0 1 1-224-224h198.4z m-198.4-512A224 224 0 0 1 479.872 243.84l0.384 12.288v198.4a25.6 25.6 0 0 1-20.48 25.088l-5.12 0.512h-198.4a224 224 0 1 1 0-448z m512 0a224 224 0 0 1 0 448h-198.4a25.6 25.6 0 0 1-25.6-25.6v-198.4a224 224 0 0 1 224-224z"}),i("path",{d:"M768.256 992.064a224 224 0 0 0 0-448h-198.4a25.6 25.6 0 0 0-25.6 25.6v198.4a224 224 0 0 0 224 224z",opacity:".32"})],-1),C=n(" \u81EA\u5B9A\u4E49\u56FE\u6807 ");function b(s,r){const c=e("two-edit"),p=e("hl-icon"),v=e("hl-button"),y=e("two-search"),D=e("two-delete"),V=e("hl-group");return m(),a(V,{gap:"var(--sm)"},{default:t(()=>[u(v,{type:"primary","icon-position":"left"},{icon:t(()=>[u(p,null,{default:t(()=>[u(c)]),_:1})]),default:t(()=>[l]),_:1}),u(v,{type:"danger","icon-position":"right"},{icon:t(()=>[u(p,null,{default:t(()=>[u(y)]),_:1})]),default:t(()=>[_]),_:1}),u(v,{type:"primary",equal:""},{icon:t(()=>[u(p,null,{default:t(()=>[u(y)]),_:1})]),_:1}),u(v,{type:"primary",equal:"",round:"","no-fill":""},{icon:t(()=>[u(p,null,{default:t(()=>[u(D)]),_:1})]),_:1}),u(v,{type:"primary","icon-position":"right",equal:"",round:"",effect:"light"},{default:t(()=>[u(p,null,{default:t(()=>[u(y)]),_:1})]),_:1}),u(v,{type:"primary","icon-position":"left"},{icon:t(()=>[u(p,null,{default:t(()=>[g]),_:1})]),default:t(()=>[F]),_:1}),u(v,{type:"danger","icon-position":"right"},{icon:t(()=>[u(p,null,{default:t(()=>[B]),_:1})]),default:t(()=>[C]),_:1})]),_:1})}return w({render:b},{})}(),"hl-demo8":function(){const{resolveComponent:e,createVNode:u,withCtx:t,createTextVNode:n,openBlock:i,createBlock:m}=x,a=n(" Icon Left "),l=n(" Icon Right "),_=n(" Icon Left "),g=n(" Icon Right ");function F(C,b){const E=e("two-arrow-left"),s=e("hl-icon"),r=e("hl-button"),c=e("two-arrow-right"),p=e("hl-col"),v=e("hl-row");return i(),m(v,null,{default:t(()=>[u(p,{span:"col-24"},{default:t(()=>[u(r,{type:"primary","icon-position":"left",class:"m-r-md",style:{width:"200px"}},{icon:t(()=>[u(s,null,{default:t(()=>[u(E)]),_:1})]),default:t(()=>[a]),_:1}),u(r,{type:"primary","icon-position":"right",class:"m-r-md",style:{width:"200px"}},{icon:t(()=>[u(s,null,{default:t(()=>[u(c)]),_:1})]),default:t(()=>[l]),_:1})]),_:1}),u(p,{span:"col-24",class:"m-t-md"},{default:t(()=>[u(r,{type:"primary","icon-position":"left",class:"m-r-md",style:{width:"200px"},rational:""},{icon:t(()=>[u(s,null,{default:t(()=>[u(E)]),_:1})]),default:t(()=>[_]),_:1}),u(r,{type:"primary","icon-position":"right",class:"m-r-md",style:{width:"200px"},rational:""},{icon:t(()=>[u(s,null,{default:t(()=>[u(c)]),_:1})]),default:t(()=>[g]),_:1})]),_:1})]),_:1})}return w({render:F},{})}(),"hl-demo9":function(){const{resolveComponent:e,createVNode:u,withCtx:t,createTextVNode:n,openBlock:i,createBlock:m}=x,a=n(" \u4E0A\u4E00\u9875 "),l=n(" \u4E0B\u4E00\u9875 "),_=n("\u4E0A\u4E00\u9875"),g=n("\u4E0B\u4E00\u9875");function F(C,b){const E=e("two-chevron-left"),s=e("hl-icon"),r=e("hl-button"),c=e("two-chevron-right"),p=e("hl-group"),v=e("two-edit"),y=e("two-share"),D=e("two-delete");return i(),m(p,{gap:"var(--sm)"},{default:t(()=>[u(p,{merge:"",indent:""},{default:t(()=>[u(r,{type:"primary","icon-position":"left"},{icon:t(()=>[u(s,null,{default:t(()=>[u(E)]),_:1})]),default:t(()=>[a]),_:1}),u(r,{type:"primary","icon-position":"right"},{icon:t(()=>[u(s,null,{default:t(()=>[u(c)]),_:1})]),default:t(()=>[l]),_:1})]),_:1}),u(p,{merge:"",indent:""},{default:t(()=>[u(r,{type:"primary"},{default:t(()=>[u(s,null,{default:t(()=>[u(v)]),_:1})]),_:1}),u(r,{type:"primary"},{default:t(()=>[u(s,null,{default:t(()=>[u(y)]),_:1})]),_:1}),u(r,{type:"primary"},{default:t(()=>[u(s,null,{default:t(()=>[u(D)]),_:1})]),_:1})]),_:1}),u(p,{merge:"",indent:""},{default:t(()=>[u(r,{type:"primary",outline:""},{default:t(()=>[_]),_:1}),u(r,{type:"primary",outline:""},{default:t(()=>[g]),_:1})]),_:1})]),_:1})}return w({render:F},{})}(),"hl-demo10":function(){const{resolveComponent:e,createVNode:u,withCtx:t,createTextVNode:n,renderList:i,Fragment:m,openBlock:a,createElementBlock:l,createBlock:_,createCommentVNode:g}=x,F=n(" \u641C\u7D22 "),B=n("\u786E\u5B9A");function C(r,c){const p=e("hl-input"),v=e("two-search"),y=e("hl-icon"),D=e("hl-button"),V=e("hl-group"),N=e("hl-option"),T=e("hl-select");return a(),_(V,{gap:"var(--sm)"},{default:t(()=>[u(V,{merge:"",indent:""},{default:t(()=>[u(p,{modelValue:r.input,"onUpdate:modelValue":c[0]||(c[0]=k=>r.input=k),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:""},null,8,["modelValue"]),u(D,{"icon-position":"right",round:""},{icon:t(()=>[u(y,null,{default:t(()=>[u(v)]),_:1})]),default:t(()=>[F]),_:1})]),_:1}),u(V,{merge:"",indent:""},{default:t(()=>[u(T,{modelValue:r.value,"onUpdate:modelValue":c[1]||(c[1]=k=>r.value=k),placeholder:"\u8BF7\u9009\u62E9",class:"fill"},{default:t(()=>[(a(!0),l(m,null,i(r.options,k=>(a(),l(m,null,[k.divider?(a(),_(N,{key:k.value,divider:""})):(a(),_(N,{key:k.value,label:k.label,value:k.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(D,{type:"primary"},{default:t(()=>[B]),_:1})]),_:1})]),_:1})}const{defineComponent:b,ref:E}=x,s=b({setup(){const r=E(""),c=E([{value:"\u9009\u98791",label:"\u6807\u8BB0\u72B6\u6001"},{value:"\u9009\u98792",label:"\u751F\u6210\u62A5\u8868"},{value:"\u9009\u98793",label:"\u7EDF\u8BA1\u5206\u6790\u6570\u636E"},{divider:!0},{value:"\u9009\u98794",label:"\u79FB\u52A8\u5230\u2026"},{value:"\u9009\u98795",label:"\u5220\u9664"}]),p=E("");return{input:r,options:c,value:p}}});return w({render:C},s)}(),"hl-demo11":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,createVNode:n,openBlock:i,createBlock:m}=x,a=e("\u52A0\u8F7D\u4E2D"),l=e("\u52A0\u8F7D\u4E2D"),_=e("\u52A0\u8F7D\u4E2D"),g=e("\u52A0\u8F7D\u4E2D"),F=e("\u52A0\u8F7D\u4E2D");function B(b,E){const s=u("hl-button"),r=u("two-search"),c=u("hl-icon"),p=u("hl-group");return i(),m(p,{gap:"var(--sm)"},{default:t(()=>[n(s,{loading:!0},{default:t(()=>[a]),_:1}),n(s,{type:"primary",loading:!0},{default:t(()=>[l]),_:1}),n(s,{type:"warning",effect:"light",loading:!0},{default:t(()=>[_]),_:1}),n(s,{type:"warning",loading:!0,outline:""},{default:t(()=>[g]),_:1}),n(s,{type:"primary","no-fill":"",loading:!0,outline:""},{default:t(()=>[F]),_:1}),n(s,{type:"primary",loading:!0,equal:""},{icon:t(()=>[n(c,null,{default:t(()=>[n(r)]),_:1})]),_:1})]),_:1})}return w({render:B},{})}(),"hl-demo12":function(){const{createTextVNode:e,resolveComponent:u,withCtx:t,openBlock:n,createBlock:i}=x,m=e("\u62C9\u4F38\u81F3\u7236\u5BB9\u5668\u5BBD");function a(_,g){const F=u("hl-button");return n(),i(F,{type:"primary",block:""},{default:t(()=>[m]),_:1})}return w({render:a},{})}()}},S=o("h1",null,"Button \u6309\u94AE",-1),Q=o("p",null,[h("\u6309\u94AE\u7EC4\u4EF6\u4E5F\u62E5\u6709\u7EDF\u4E00\u7684\u72B6\u6001\u8272\uFF0C\u5982\uFF1A"),o("code",null,"primary"),h(", "),o("code",null,"danger"),h(" \u7B49\u3002")],-1),U=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-button>\u9ED8\u8BA4</hl-button>
    <hl-button type="primary">\u9996\u9009</hl-button>
    <hl-button type="success">\u6210\u529F</hl-button>
    <hl-button type="warning">\u8B66\u544A</hl-button>
    <hl-button type="danger">\u5371\u9669</hl-button>
    <hl-button type="info">\u4FE1\u606F</hl-button>
    <hl-button type="link">link</hl-button>
  </hl-group>
</template>
`)],-1),W=o("h2",{id:"dan-se-an-niu"},[o("a",{class:"header-anchor",href:"#dan-se-an-niu"}),h(" \u6DE1\u8272\u6309\u94AE")],-1),X=o("p",null,[h("\u5F53\u6309\u94AE\u9644\u6709\u72B6\u6001\u8272\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u5728\u52A0\u4E0A "),o("code",null,'effect = "light"'),h(" \u5C5E\u6027\u5373\u53EF\u4F7F\u5B83\u7684\u989C\u8272\u51CF\u6DE1\u3002")],-1),Y=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-button effect="light">\u9ED8\u8BA4</hl-button>
    <hl-button type="primary" effect="light">\u9996\u9009</hl-button>
    <hl-button type="success" effect="light">\u6210\u529F</hl-button>
    <hl-button type="warning" effect="light">\u8B66\u544A</hl-button>
    <hl-button type="danger" effect="light">\u5371\u9669</hl-button>
    <hl-button type="info" effect="light">\u4FE1\u606F</hl-button>
  </hl-group>
</template>
`)],-1),H=o("h2",{id:"wu-tian-chong-an-niu"},[o("a",{class:"header-anchor",href:"#wu-tian-chong-an-niu"}),h(" \u65E0\u586B\u5145\u6309\u94AE")],-1),J=o("p",null,[o("code",null,"no-fill"),h(" \u5C5E\u6027\u53EF\u4F7F\u6309\u94AE\u9ED8\u8BA4\u4E3A\u65E0\u586B\u5145\u6837\u5F0F\u3002")],-1),K=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-button no-fill>\u9ED8\u8BA4</hl-button>
    <hl-button type="primary" no-fill>\u65E0\u586B\u5145</hl-button>
    <hl-button type="primary" effect="light" no-fill>\u6DE1\u8272 & \u65E0\u586B\u5145</hl-button>
  </hl-group>
</template>
`)],-1),O=o("h2",{id:"jin-zai-xuan-ting-shi-xiang-ying-zhuang-tai-se"},[o("a",{class:"header-anchor",href:"#jin-zai-xuan-ting-shi-xiang-ying-zhuang-tai-se"}),h(" \u4EC5\u5728\u60AC\u505C\u65F6\u54CD\u5E94\u72B6\u6001\u8272")],-1),tt=o("p",null,[h("\u901A\u8FC7\u8BBE\u7F6E"),o("code",null,"hover"),h(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u6309\u94AE\u5728 hover \u7684\u60C5\u51B5\u4E0B\u624D\u54CD\u5E94\u72B6\u6001\u8272\u3002")],-1),ut=o("div",null,[o("p",null,"\u5F53hover\u4E3Aboolean\u503C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u6839\u636Etype\u548Ceffect\u5C5E\u6027\u8FDB\u884C\u6837\u5F0F\u5904\u7406\u3002\u5F53hover\u4E3Astring\u65F6\uFF0C\u4F1A\u81EA\u52A8\u6839\u636Eeffect\u5C5E\u6027\u8FDB\u884C\u6837\u5F0F\u5904\u7406\u3002")],-1),et=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group dir="vertical" gap="var(--lg)">
    <hl-group gap="var(--sm)">
      <hl-button no-fill type="primary" hover="danger">\u9996\u9009</hl-button>
      <hl-button no-fill type="success" hover="danger">\u6210\u529F</hl-button>
      <hl-button no-fill type="warning" hover="danger">\u8B66\u544A</hl-button>
      <hl-button no-fill type="danger" hover="danger">\u5371\u9669</hl-button>
      <hl-button no-fill type="info" hover="danger">\u4FE1\u606F</hl-button>
    </hl-group>

    <hl-group gap="var(--sm)">
      <hl-button effect="light" hover="primary">\u9996\u9009</hl-button>
      <hl-button effect="light" hover="success">\u6210\u529F</hl-button>
      <hl-button effect="light" hover="warning">\u8B66\u544A</hl-button>
      <hl-button effect="light" hover="danger">\u5371\u9669</hl-button>
      <hl-button effect="light" hover="info">\u4FE1\u606F</hl-button>
    </hl-group>
  </hl-group>
</template>
`)],-1),ot=o("h2",{id:"an-niu-chi-cun"},[o("a",{class:"header-anchor",href:"#an-niu-chi-cun"}),h(" \u6309\u94AE\u5C3A\u5BF8")],-1),nt=o("p",null,"Button \u7EC4\u4EF6\u63D0\u4F9B\u9664\u4E86\u9ED8\u8BA4\u503C\u4EE5\u5916\u7684\u4E09\u79CD\u5C3A\u5BF8\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u573A\u666F\u4E0B\u9009\u62E9\u5408\u9002\u7684\u6309\u94AE\u5C3A\u5BF8\u3002",-1),lt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-button size="sm">\u5C0F\u6309\u94AE sm</hl-button>
    <hl-button size="md">\u4E2D\u6309\u94AE md</hl-button>
    <hl-button size="lg">\u5927\u6309\u94AE lg</hl-button>
  </hl-group>
</template>
`)],-1),rt=o("h2",{id:"an-niu-xing-tai"},[o("a",{class:"header-anchor",href:"#an-niu-xing-tai"}),h(" \u6309\u94AE\u5F62\u6001")],-1),ct=o("p",null,"\u6309\u94AE\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u5F62\u6001\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u7684\u4F7F\u7528\u573A\u666F\u3002",-1),it=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-button type="info" equal>\u6B63\u65B9</hl-button>
    <hl-button type="primary" equal round>\u6B63\u5706</hl-button>
    <hl-button type="warning" round>\u692D\u5706</hl-button>
    <hl-button type="primary" outline>\u5706\u89D2\u8F6E\u5ED3</hl-button>
    <hl-button type="danger" round outline>\u692D\u5706\u8F6E\u5ED3</hl-button>
    <hl-button type="primary" effect="light" outline dashed>\u5706\u89D2\u8F6E\u5ED3</hl-button>
    <hl-button type="danger" effect="light" round outline dashed>\u692D\u5706\u8F6E\u5ED3</hl-button>
  </hl-group>
</template>
`)],-1),at=o("h2",{id:"jin-yong-zhuang-tai"},[o("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),h(" \u7981\u7528\u72B6\u6001")],-1),ht=o("p",null,[h("\u4F60\u53EF\u4EE5\u4F7F\u7528"),o("code",null,"disabled"),h("\u5C5E\u6027\u6765\u5B9A\u4E49\u6309\u94AE\u662F\u5426\u53EF\u7528\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),o("code",null,"boolean"),h("\u503C\u3002")],-1),dt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)" wrap>
    <hl-button disabled>Default</hl-button>
    <hl-button type="primary" disabled>Primary</hl-button>
    <hl-button type="danger" effect="light" disabled>Light</hl-button>
    <hl-button no-fill disabled>No-Fill</hl-button>
  </hl-group>
</template>
`)],-1),st=o("h2",{id:"tu-biao-xiu-shi"},[o("a",{class:"header-anchor",href:"#tu-biao-xiu-shi"}),h(" \u56FE\u6807\u4FEE\u9970")],-1),_t=o("p",null,[h("\u6309\u94AE\u5185\u7F6E\u4E86"),o("code",null,"icon"),h("\u63D2\u69FD\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528@hongluan-ui/icons \u7EC4\u4EF6\u7684\u56FE\u6807\u96C6\u6216\u8005\u81EA\u5B9A\u4E49SVG\u56FE\u6807\u3002"),o("code",null,"icon-position"),h("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u6807\u7684\u4F4D\u7F6E\u3002\u5F53\u53EA\u6709icon\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5D4C\u5165 Icon \u7EC4\u4EF6\uFF0C\u800C\u4E0D\u7528\u63D2\u69FD")],-1),pt=o("div",null,[o("p",null,"\u4F20\u5165\u81EA\u5B9A\u4E49\u56FE\u6807\u65F6\uFF0C\u4F7F\u7528Icon\u7EC4\u4EF6\uFF0C\u8FD9\u6837\u53EF\u4F7F\u5F97\u56FE\u6807\u4E0E\u6309\u94AE\u4E4B\u95F4\u66F4\u4E3A\u548C\u8C10\u3002")],-1),mt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-button type="primary" icon-position="left">
      \u7F16\u8F91\u5185\u5BB9
      <template #icon>
        <hl-icon>
          <!-- \u5173\u4E8E\u6587\u6863\u5185two\u524D\u7F00\u8BF4\u660E\uFF0C\u8BF7\u53C2\u8003icon\u6587\u6863 -->
          <two-edit />
        </hl-icon>
      </template>
    </hl-button>
    <hl-button type="danger" icon-position="right">
      \u641C\u7D22
      <template #icon>
        <hl-icon>
          <two-search />
        </hl-icon>
      </template>
    </hl-button>
    <hl-button type="primary" equal>
      <template #icon>
        <hl-icon>
          <two-search />
        </hl-icon>
      </template>
    </hl-button>
    <hl-button type="primary" equal round no-fill>
      <template #icon>
        <hl-icon>
          <two-delete />
        </hl-icon>
      </template>
    </hl-button>
    <hl-button type="primary" icon-position="right" equal round effect="light">
      <hl-icon>
        <two-search />
      </hl-icon>
    </hl-button>
    <hl-button type="primary" icon-position="left">
      <template #icon>
        <hl-icon>
          <svg viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
              <path d="M3.81085186,7.8741634 C3.08368425,8.51551024 2.625,9.4541894 2.625,10.5 L2.625,13.475 C2.625,13.6606894 2.66115115,13.8379353 2.72679927,14.0000835 L0.525,14 C0.235050506,14 -2.25375274e-14,13.7649495 -2.25375274e-14,13.475 L-2.25375274e-14,10.5 C-2.25375274e-14,9.05025253 1.17525253,7.875 2.625,7.875 L3.81085186,7.8741634 Z M5.25,0 C5.51327888,0 5.76976817,0.0290696479 6.01643329,0.0841743439 C5.01529025,0.886619755 4.375,2.11853598 4.375,3.5 C4.375,4.88146402 5.01529025,6.11338024 6.01529372,6.91517165 C5.76976817,6.97093035 5.51327888,7 5.25,7 C3.31700338,7 1.75,5.43299662 1.75,3.5 C1.75,1.56700338 3.31700338,0 5.25,0 Z" opacity="0.319999993" />
              <path d="M11.375,7.875 C12.8247475,7.875 14,9.05025253 14,10.5 L14,13.475 C14,13.7649495 13.7649495,14 13.475,14 L4.025,14 C3.73505051,14 3.5,13.7649495 3.5,13.475 L3.5,10.5 C3.5,9.05025253 4.67525253,7.875 6.125,7.875 L11.375,7.875 Z M8.75,0 C10.6829966,0 12.25,1.56700338 12.25,3.5 C12.25,5.43299662 10.6829966,7 8.75,7 C6.81700338,7 5.25,5.43299662 5.25,3.5 C5.25,1.56700338 6.81700338,0 8.75,0 Z" />
            </g>
          </svg>
        </hl-icon>
      </template>
      \u81EA\u5B9A\u4E49\u56FE\u6807
    </hl-button>

    <hl-button type="danger" icon-position="right">
      <template #icon>
        <hl-icon>
          <svg t="1611553326339" viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M454.656 544.064c14.08 0 25.6 11.52 25.6 25.6v198.4a224 224 0 1 1-224-224h198.4z m-198.4-512A224 224 0 0 1 479.872 243.84l0.384 12.288v198.4a25.6 25.6 0 0 1-20.48 25.088l-5.12 0.512h-198.4a224 224 0 1 1 0-448z m512 0a224 224 0 0 1 0 448h-198.4a25.6 25.6 0 0 1-25.6-25.6v-198.4a224 224 0 0 1 224-224z" />
            <path d="M768.256 992.064a224 224 0 0 0 0-448h-198.4a25.6 25.6 0 0 0-25.6 25.6v198.4a224 224 0 0 0 224 224z" opacity=".32" />
          </svg>
        </hl-icon>
      </template>
      \u81EA\u5B9A\u4E49\u56FE\u6807
    </hl-button>
  </hl-group>
</template>
`)],-1),ft=o("h2",{id:"dui-qi-fang-shi"},[o("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),h(" \u5BF9\u9F50\u65B9\u5F0F")],-1),Et=o("p",null,[o("code",null,"rational"),h(" \u5C5E\u6027\u80FD\u4F7F\u6309\u94AE\u56FE\u6807\u548C\u6587\u5B57\u7684\u6392\u5217\u65B9\u5F0F\u66F4\u4E3A\u5408\u7406\u3002")],-1),gt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-24">
      <hl-button type="primary" icon-position="left" class="m-r-md" style="width:200px">
        Icon Left
        <template #icon>
          <hl-icon>
            <two-arrow-left />
          </hl-icon>
        </template>
      </hl-button>
      <hl-button type="primary" icon-position="right" class="m-r-md" style="width:200px">
        Icon Right
        <template #icon>
          <hl-icon>
            <two-arrow-right />
          </hl-icon>
        </template>
      </hl-button>
    </hl-col>
    <hl-col span="col-24" class="m-t-md">
      <hl-button type="primary" icon-position="left" class="m-r-md" style="width:200px" rational>
        Icon Left
        <template #icon>
          <hl-icon>
            <two-arrow-left />
          </hl-icon>
        </template>
      </hl-button>
      <hl-button type="primary" icon-position="right" class="m-r-md" style="width:200px" rational>
        Icon Right
        <template #icon>
          <hl-icon>
            <two-arrow-right />
          </hl-icon>
        </template>
      </hl-button>
    </hl-col>
  </hl-row>
</template>
`)],-1),Ft=o("h2",{id:"an-niu-zu"},[o("a",{class:"header-anchor",href:"#an-niu-zu"}),h(" \u6309\u94AE\u7EC4")],-1),bt=o("p",null,"\u4F7F\u7528 Group \u5BB9\u5668\uFF0C\u6765\u6784\u5EFA\u4E00\u4E2A\u6309\u94AE\u7EC4\u3002",-1),Bt=o("div",null,[o("p",null,"\u66F4\u591A\u7684\u5206\u7EC4\u7EC4\u529F\u80FD\uFF0C\u8BF7\u53C2\u8003 Group \u7EC4\u4EF6\u6587\u6863\u3002")],-1),yt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-group merge indent>
      <hl-button type="primary" icon-position="left">
        \u4E0A\u4E00\u9875
        <template #icon>
          <hl-icon>
            <two-chevron-left />
          </hl-icon>
        </template>
      </hl-button>
      <hl-button type="primary" icon-position="right">
        \u4E0B\u4E00\u9875
        <template #icon>
          <hl-icon>
            <two-chevron-right />
          </hl-icon>
        </template>
      </hl-button>
    </hl-group>
    <hl-group merge indent>
      <hl-button type="primary">
        <hl-icon>
          <two-edit />
        </hl-icon>
      </hl-button>
      <hl-button type="primary">
        <hl-icon>
          <two-share />
        </hl-icon>
      </hl-button>
      <hl-button type="primary">
        <hl-icon>
          <two-delete />
        </hl-icon>
      </hl-button>
    </hl-group>
    <hl-group merge indent>
      <hl-button type="primary" outline>\u4E0A\u4E00\u9875</hl-button>
      <hl-button type="primary" outline>\u4E0B\u4E00\u9875</hl-button>
    </hl-group>
  </hl-group>
</template>
`)],-1),Ct=o("h2",{id:"yu-biao-dan-yuan-su-rong-he"},[o("a",{class:"header-anchor",href:"#yu-biao-dan-yuan-su-rong-he"}),h(" \u4E0E\u8868\u5355\u5143\u7D20\u878D\u5408")],-1),vt=o("p",null,[o("code",null,"group"),h(" \u5BB9\u5668\u4E0D\u4EC5\u53EF\u4EE5\u5728\u6309\u94AE\u4E4B\u95F4\u878D\u5408\u6837\u5F0F\uFF0C\u8FD8\u53EF\u4EE5\u4E0E\u5176\u4ED6\u8868\u5355\u5143\u7D20\u76F8\u4E92\u878D\u5408\u3002")],-1),At=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-group merge indent>
      <hl-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" round />
      <hl-button icon-position="right" round>
        \u641C\u7D22
        <template #icon>
          <hl-icon><two-search /></hl-icon>
        </template>
      </hl-button>
    </hl-group>

    <hl-group merge indent>
      <hl-select v-model="value" placeholder="\u8BF7\u9009\u62E9" class="fill">
        <template v-for="item in options">
          <hl-option v-if="item.divider" :key="item.value" divider />
          <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
        </template>
      </hl-select>
      <hl-button type="primary">\u786E\u5B9A</hl-button>
    </hl-group>
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const input = ref('')
    const options = ref([
      {
        value: '\u9009\u98791',
        label: '\u6807\u8BB0\u72B6\u6001',
      },
      {
        value: '\u9009\u98792',
        label: '\u751F\u6210\u62A5\u8868',
      },
      {
        value: '\u9009\u98793',
        label: '\u7EDF\u8BA1\u5206\u6790\u6570\u636E',
      },
      {
        divider: true,
      },
      {
        value: '\u9009\u98794',
        label: '\u79FB\u52A8\u5230\u2026',
      },
      {
        value: '\u9009\u98795',
        label: '\u5220\u9664',
      },
    ])
    const value = ref('')

    return {
      input,
      options,
      value,
    }
  },
})
<\/script>
`)],-1),wt=o("h2",{id:"jia-zai-zhuang-tai"},[o("a",{class:"header-anchor",href:"#jia-zai-zhuang-tai"}),h(" \u52A0\u8F7D\u72B6\u6001")],-1),xt=o("p",null,"\u70B9\u51FB\u6309\u94AE\u540E\u8FDB\u884C\u6570\u636E\u52A0\u8F7D\u64CD\u4F5C\uFF0C\u5728\u6309\u94AE\u4E0A\u663E\u793A\u52A0\u8F7D\u72B6\u6001\u3002",-1),Dt=o("div",null,[o("p",null,[h("\u8981\u8BBE\u7F6E\u4E3A loading \u72B6\u6001\uFF0C\u53EA\u8981\u8BBE\u7F6E"),o("code",null,"loading"),h("\u5C5E\u6027\u4E3A"),o("code",null,"true"),h("\u5373\u53EF\u3002")])],-1),kt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-button :loading="true">\u52A0\u8F7D\u4E2D</hl-button>
    <hl-button type="primary" :loading="true">\u52A0\u8F7D\u4E2D</hl-button>
    <hl-button type="warning" effect="light" :loading="true">\u52A0\u8F7D\u4E2D</hl-button>
    <hl-button type="warning" :loading="true" outline>\u52A0\u8F7D\u4E2D</hl-button>
    <hl-button type="primary" no-fill :loading="true" outline>\u52A0\u8F7D\u4E2D</hl-button>
    <hl-button type="primary" :loading="true" equal>
      <template #icon>
        <hl-icon><two-search /></hl-icon>
      </template>
    </hl-button>
  </hl-group>
</template>
`)],-1),Vt=o("h2",{id:"la-shen-an-niu"},[o("a",{class:"header-anchor",href:"#la-shen-an-niu"}),h(" \u62C9\u4F38\u6309\u94AE")],-1),Nt=o("p",null,"\u4F7F\u7528 block \u5C5E\u6027\u53EF\u4EE5\u628A\u6309\u94AE\u62C9\u4F38\u81F3\u4E0E\u7236\u5143\u7D20\u7B49\u5BBD",-1),zt=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-button type="primary" block>\u62C9\u4F38\u81F3\u7236\u5BB9\u5668\u5BBD</hl-button>
</template>
`)],-1),Lt=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>sm / md / lg</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>primary / success / warning / danger / info / link</td><td>\u2014</td></tr><tr><td>equal</td><td>\u662F\u5426\u65B9\u5F62\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u662F\u5426\u5706\u8FB9\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>loading</td><td>\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>effect</td><td>\u4E3B\u9898\u989C\u8272</td><td>string</td><td>light</td><td>-</td></tr><tr><td>no-fill</td><td>\u65E0\u586B\u5145\u80CC\u666F\u8272</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u662F\u5426\u62C9\u4F38\u81F3\u7236\u5143\u7D20 100%\u7684\u5BBD\u5EA6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>icon-position</td><td>\u56FE\u6807\u7684\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>\u2014</td></tr><tr><td>autofocus</td><td>\u662F\u5426\u9ED8\u8BA4\u805A\u7126</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>native-type</td><td>\u539F\u751F type \u5C5E\u6027</td><td>string</td><td>button / submit / reset</td><td>button</td></tr><tr><td>hover</td><td>hover\u6837\u5F0F</td><td>string / boolean</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td></tr><tr><td>loading</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u56FE\u6807</td></tr></tbody></table>',4);function Tt(e,u,t,n,i,m){const a=A("hl-demo0"),l=A("demo-block"),_=A("hl-demo1"),g=A("hl-demo2"),F=A("hl-demo3"),B=A("hl-demo4"),C=A("hl-demo5"),b=A("hl-demo6"),E=A("hl-demo7"),s=A("hl-demo8"),r=A("hl-demo9"),c=A("hl-demo10"),p=A("hl-demo11"),v=A("hl-demo12"),y=A("right-nav");return I(),Z(R,null,[o("section",null,[S,Q,f(l,{fs:""},{source:d(()=>[f(a)]),highlight:d(()=>[U]),_:1}),W,X,f(l,{fs:""},{source:d(()=>[f(_)]),highlight:d(()=>[Y]),_:1}),H,J,f(l,{fs:""},{source:d(()=>[f(g)]),highlight:d(()=>[K]),_:1}),O,tt,f(l,{fs:""},{source:d(()=>[f(F)]),highlight:d(()=>[et]),default:d(()=>[ut]),_:1}),ot,nt,f(l,{fs:""},{source:d(()=>[f(B)]),highlight:d(()=>[lt]),_:1}),rt,ct,f(l,{fs:""},{source:d(()=>[f(C)]),highlight:d(()=>[it]),_:1}),at,ht,f(l,{fs:""},{source:d(()=>[f(b)]),highlight:d(()=>[dt]),_:1}),st,_t,f(l,{fs:""},{source:d(()=>[f(E)]),highlight:d(()=>[mt]),default:d(()=>[pt]),_:1}),ft,Et,f(l,{fs:""},{source:d(()=>[f(s)]),highlight:d(()=>[gt]),_:1}),Ft,bt,f(l,{fs:""},{source:d(()=>[f(r)]),highlight:d(()=>[yt]),default:d(()=>[Bt]),_:1}),Ct,vt,f(l,{fs:""},{source:d(()=>[f(c)]),highlight:d(()=>[At]),_:1}),wt,xt,f(l,{fs:""},{source:d(()=>[f(p)]),highlight:d(()=>[kt]),default:d(()=>[Dt]),_:1}),Vt,Nt,f(l,{fs:""},{source:d(()=>[f(v)]),highlight:d(()=>[zt]),_:1}),Lt]),f(y)],64)}var $t=G(P,[["render",Tt]]);export{$t as default};
