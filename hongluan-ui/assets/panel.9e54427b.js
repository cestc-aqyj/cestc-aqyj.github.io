var ue=Object.defineProperty;var L=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var O=(o,l,e)=>l in o?ue(o,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[l]=e,T=(o,l)=>{for(var e in l||(l={}))ae.call(l,e)&&O(o,e,l[e]);if(L)for(var e of L(l))de.call(l,e)&&O(o,e,l[e]);return o};import{H as q,o as se,c as ie,g as n,T as v,M as r,Y as ce,aB as N,_ as a,aA as Q}from"./vue.d542b1f8.js";import{_ as he}from"./index.b2c1f405.js";import"./hongluan.3c5b9861.js";import"./highlight.e2508551.js";import"./hongluan-icons.e8265415.js";const re={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),F={class:"panel-header-right"},g=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),B=u("\u53D6 \u6D88"),D=u("\u786E \u5B9A");function m(p,h){const d=l("two-close"),c=l("hl-icon"),E=l("hl-button"),_=l("hl-panel");return b(),f(_,null,{header:t(()=>[i,o("div",F,[e(c,null,{default:t(()=>[e(d)]),_:1})])]),footer:t(()=>[e(E,{class:"m-r-md",onClick:h[0]||(h[0]=s=>p.dialogVisible=!1)},{default:t(()=>[B]),_:1}),e(E,{type:"primary",onClick:h[1]||(h[1]=s=>p.dialogVisible=!1)},{default:t(()=>[D]),_:1})]),default:t(()=>[g]),_:1})}return T({render:m},{})}(),"hl-demo1":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),F={class:"panel-header-right"},g=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),B=u("\u53D6 \u6D88"),D=u("\u786E \u5B9A");function m(d,c){const E=l("two-upload"),_=l("hl-icon"),s=l("hl-button"),k=l("two-maximize"),x=l("hl-panel");return b(),f(x,{ref:"panel",borderless:""},{header:t(()=>[i,o("div",F,[e(s,{equal:"","no-fill":""},{default:t(()=>[e(_,null,{default:t(()=>[e(E)]),_:1})]),_:1}),e(s,{equal:"","no-fill":"",onClick:c[0]||(c[0]=w=>d.panel.toggleFullscreen())},{default:t(()=>[e(_,null,{default:t(()=>[e(k)]),_:1})]),_:1})])]),footer:t(()=>[e(s,{class:"m-r-md",onClick:c[1]||(c[1]=w=>d.dialogVisible=!1)},{default:t(()=>[B]),_:1}),e(s,{type:"primary",onClick:c[2]||(c[2]=w=>d.dialogVisible=!1)},{default:t(()=>[D]),_:1})]),default:t(()=>[g]),_:1},512)}const{defineComponent:C,ref:p}=N,h=C({setup(){return{panel:p(null)}}});return T({render:m},h)}(),"hl-demo2":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),F={class:"panel-header-right"},g=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),B=u("\u53D6 \u6D88"),D=u("\u786E \u5B9A"),m=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),C={class:"panel-header-right"},p=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),h=u("\u53D6 \u6D88"),d=u("\u786E \u5B9A");function c(_,s){const k=l("two-upload"),x=l("hl-icon"),w=l("hl-button"),V=l("two-maximize"),A=l("hl-panel"),$=l("hl-col"),z=l("hl-row");return b(),f(z,{gap:"var(--md)"},{default:t(()=>[e($,{span:"col"},{default:t(()=>[e(A,{radius:"0"},{header:t(()=>[i,o("div",F,[e(w,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(k)]),_:1})]),_:1}),e(w,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(V)]),_:1})]),_:1})])]),footer:t(()=>[e(w,{class:"m-r-md",onClick:s[0]||(s[0]=y=>_.dialogVisible=!1)},{default:t(()=>[B]),_:1}),e(w,{type:"primary",onClick:s[1]||(s[1]=y=>_.dialogVisible=!1)},{default:t(()=>[D]),_:1})]),default:t(()=>[g]),_:1})]),_:1}),e($,{span:"col"},{default:t(()=>[e(A,{radius:"var(--lg)",borderless:""},{header:t(()=>[m,o("div",C,[e(w,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(k)]),_:1})]),_:1}),e(w,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(V)]),_:1})]),_:1})])]),footer:t(()=>[e(w,{class:"m-r-md",onClick:s[2]||(s[2]=y=>_.dialogVisible=!1)},{default:t(()=>[h]),_:1}),e(w,{type:"primary",onClick:s[3]||(s[3]=y=>_.dialogVisible=!1)},{default:t(()=>[d]),_:1})]),default:t(()=>[p]),_:1})]),_:1})]),_:1})}return T({render:c},{})}(),"hl-demo3":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),F={class:"panel-header-right"},g=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),B=u("\u53D6 \u6D88"),D=u("\u786E \u5B9A"),m=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),C={class:"panel-header-right"},p=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),h=u("\u53D6 \u6D88"),d=u("\u786E \u5B9A"),c=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),E={class:"panel-header-right"},_=o("div",null,"\u5355\u72EC\u63A7\u5236panel-body\u7684\u95F4\u8DDD",-1),s=u("\u53D6 \u6D88"),k=u("\u786E \u5B9A");function x(V,A){const $=l("two-upload"),z=l("hl-icon"),y=l("hl-button"),H=l("two-maximize"),Y=l("hl-panel"),M=l("hl-col"),I=l("hl-row");return b(),f(I,{gap:"var(--md)"},{default:t(()=>[e(M,{span:"col"},{default:t(()=>[e(Y,{padding:"var(--md)",borderless:""},{header:t(()=>[i,o("div",F,[e(y,{equal:"","no-fill":""},{default:t(()=>[e(z,null,{default:t(()=>[e($)]),_:1})]),_:1}),e(y,{equal:"","no-fill":""},{default:t(()=>[e(z,null,{default:t(()=>[e(H)]),_:1})]),_:1})])]),footer:t(()=>[e(y,{class:"m-r-md",onClick:A[0]||(A[0]=P=>V.dialogVisible=!1)},{default:t(()=>[B]),_:1}),e(y,{type:"primary",onClick:A[1]||(A[1]=P=>V.dialogVisible=!1)},{default:t(()=>[D]),_:1})]),default:t(()=>[g]),_:1})]),_:1}),e(M,{span:"col"},{default:t(()=>[e(Y,{padding:"var(--xl)",borderless:""},{header:t(()=>[m,o("div",C,[e(y,{equal:"","no-fill":""},{default:t(()=>[e(z,null,{default:t(()=>[e($)]),_:1})]),_:1}),e(y,{equal:"","no-fill":""},{default:t(()=>[e(z,null,{default:t(()=>[e(H)]),_:1})]),_:1})])]),footer:t(()=>[e(y,{class:"m-r-md",onClick:A[2]||(A[2]=P=>V.dialogVisible=!1)},{default:t(()=>[h]),_:1}),e(y,{type:"primary",onClick:A[3]||(A[3]=P=>V.dialogVisible=!1)},{default:t(()=>[d]),_:1})]),default:t(()=>[p]),_:1})]),_:1}),e(M,{span:"col"},{default:t(()=>[e(Y,{padding:"var(--xl)","body-padding":"0",borderless:""},{header:t(()=>[c,o("div",E,[e(y,{equal:"","no-fill":""},{default:t(()=>[e(z,null,{default:t(()=>[e($)]),_:1})]),_:1}),e(y,{equal:"","no-fill":""},{default:t(()=>[e(z,null,{default:t(()=>[e(H)]),_:1})]),_:1})])]),footer:t(()=>[e(y,{class:"m-r-md",onClick:A[4]||(A[4]=P=>V.dialogVisible=!1)},{default:t(()=>[s]),_:1}),e(y,{type:"primary",onClick:A[5]||(A[5]=P=>V.dialogVisible=!1)},{default:t(()=>[k]),_:1})]),default:t(()=>[_]),_:1})]),_:1})]),_:1})}return T({render:x},{})}(),"hl-demo4":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),F={class:"panel-header-right"},g=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),B=u("\u53D6 \u6D88"),D=u("\u786E \u5B9A");function m(p,h){const d=l("two-upload"),c=l("hl-icon"),E=l("hl-button"),_=l("two-maximize"),s=l("hl-panel"),k=l("hl-col"),x=l("hl-row");return b(),f(x,{gap:"var(--md)"},{default:t(()=>[e(k,{span:"col"},{default:t(()=>[e(s,{padding:"var(--md)","header-class":"new-header-class","body-class":"new-body-class","footer-class":"new-footer-class"},{header:t(()=>[i,o("div",F,[e(E,{equal:"","no-fill":""},{default:t(()=>[e(c,null,{default:t(()=>[e(d)]),_:1})]),_:1}),e(E,{equal:"","no-fill":""},{default:t(()=>[e(c,null,{default:t(()=>[e(_)]),_:1})]),_:1})])]),footer:t(()=>[e(E,{class:"m-r-md",onClick:h[0]||(h[0]=w=>p.dialogVisible=!1)},{default:t(()=>[B]),_:1}),e(E,{type:"primary",onClick:h[1]||(h[1]=w=>p.dialogVisible=!1)},{default:t(()=>[D]),_:1})]),default:t(()=>[g]),_:1})]),_:1})]),_:1})}return T({render:m},{})}(),"hl-demo5":function(){const{createElementVNode:o,resolveComponent:l,withCtx:e,createVNode:t,openBlock:u,createBlock:b}=N,f=o("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)",-1),i=o("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)",-1);function F(B,D){const m=l("hl-panel"),C=l("hl-col"),p=l("hl-row");return u(),b(p,{gap:"var(--md)"},{default:e(()=>[t(C,{span:"col"},{default:e(()=>[t(m,null,{default:e(()=>[f]),_:1})]),_:1}),t(C,{span:"col"},{default:e(()=>[t(m,{borderless:""},{default:e(()=>[i]),_:1})]),_:1})]),_:1})}return T({render:F},{})}(),"hl-demo6":function(){const{resolveComponent:o,createVNode:l,withCtx:e,createElementVNode:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i={class:"panel-header-left"},F=t("div",{class:"panel-title"}," Title ",-1),g=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),B=u(" Panel-Body "),D={class:"panel-header-left"},m=t("span",null,"\u6D4B\u8BD5",-1),C=t("div",{class:"panel-title"},[t("h5",null,"\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...")],-1),p=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),h=u(" Panel-Body "),d=t("div",{class:"panel-title"}," Title ",-1),c={class:"panel-header-right"},E=u(" Panel-Body "),_=t("div",{class:"panel-title"}," Title ",-1),s={class:"panel-header-right"},k=u(" \u641C\u7D22 "),x=u(" Panel-Body "),w=t("div",{class:"panel-title"}," Title ",-1),V={class:"panel-header-right"},A=u(" \u641C\u7D22 "),$=u("\u6570\u636E\u6D41"),z=u("\u4F20\u8F93\u5C5E\u6027\u503C"),y=u("\u5DF2\u65AD\u7EBF"),H=u("\u5F85\u6062\u590D"),Y=u(" Panel-Body "),M=t("div",{class:"panel-title"}," Title ",-1),I=t("div",{class:"panel-header-right"}," \u5C0F\u8D34\u58EB ",-1),P=u(" Panel-Body ");function R(Qe,Re){const U=o("two-news"),W=o("hl-icon"),j=o("hl-panel"),S=o("hl-col"),X=o("hl-thumb"),J=o("two-search"),Z=o("hl-input"),ee=o("hl-group"),K=o("hl-button"),te=o("two-chevron-bottom"),G=o("hl-dropdown-item"),le=o("hl-dropdown-menu"),ne=o("hl-dropdown"),oe=o("hl-row");return b(),f(oe,{gap:"var(--md)"},{default:e(()=>[l(S,{span:"col-md-12"},{default:e(()=>[l(j,{"footer-align":"align-left"},{header:e(()=>[t("div",i,[l(W,{size:"lg",border:1.5},{default:e(()=>[l(U)]),_:1},8,["border"])]),F,g]),default:e(()=>[B]),_:1})]),_:1}),l(S,{span:"col-md-12"},{default:e(()=>[l(j,null,{header:e(()=>[t("div",D,[l(X,{size:"sm",round:"",class:"primary"},{default:e(()=>[m]),_:1})]),C,p]),default:e(()=>[h]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[d,t("div",c,[l(ee,{merge:"",indent:""},{default:e(()=>[l(Z,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:"",fill:""},{suffix:e(()=>[l(W,null,{default:e(()=>[l(J)]),_:1})]),_:1})]),_:1})])]),default:e(()=>[E]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[_,t("div",s,[l(K,{type:"primary","icon-position":"right"},{icon:e(()=>[l(W,null,{default:e(()=>[l(J)]),_:1})]),default:e(()=>[k]),_:1})])]),default:e(()=>[x]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[w,t("div",V,[l(ne,null,{dropdown:e(()=>[l(le,null,{default:e(()=>[l(G,null,{default:e(()=>[$]),_:1}),l(G,null,{default:e(()=>[z]),_:1}),l(G,null,{default:e(()=>[y]),_:1}),l(G,null,{default:e(()=>[H]),_:1})]),_:1})]),default:e(()=>[l(K,{type:"link","icon-position":"right","no-fill":""},{icon:e(()=>[l(W,null,{default:e(()=>[l(te)]),_:1})]),default:e(()=>[A]),_:1})]),_:1})])]),default:e(()=>[Y]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[M,I]),default:e(()=>[P]),_:1})]),_:1})]),_:1})}return T({render:R},{})}(),"hl-demo7":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),F={class:"panel-header-right"},g=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),B=u("\u53D6 \u6D88"),D=u("\u786E \u5B9A");function m(d,c){const E=l("two-top"),_=l("hl-icon"),s=l("hl-button"),k=l("two-maximize"),x=l("hl-panel"),w=l("hl-col"),V=l("hl-row");return b(),f(V,{gap:"var(--md)"},{default:t(()=>[e(w,{span:"col"},{default:t(()=>[e(x,{fullscreen:d.maxStatus,collapsed:d.minStatus},{header:t(()=>[i,o("div",F,[e(s,{equal:"","no-fill":"",onClick:d.min},{default:t(()=>[e(_,null,{default:t(()=>[e(E)]),_:1})]),_:1},8,["onClick"]),e(s,{equal:"","no-fill":"",onClick:d.max},{default:t(()=>[e(_,null,{default:t(()=>[e(k)]),_:1})]),_:1},8,["onClick"])])]),footer:t(()=>[e(s,{class:"m-r-md"},{default:t(()=>[B]),_:1}),e(s,{type:"primary"},{default:t(()=>[D]),_:1})]),default:t(()=>[g]),_:1},8,["fullscreen","collapsed"])]),_:1})]),_:1})}const{defineComponent:C,ref:p}=N,h=C({setup(){const d=p(!1),c=p(!1);return{maxStatus:d,minStatus:c,min:()=>{c.value=!c.value},max:()=>{d.value?d.value=!1:d.value={top:"var(--md)",left:"var(--md)"}}}}});return T({render:m},h)}(),"hl-demo8":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:b,createBlock:f}=N,i=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),F={class:"panel-header-right"},g=o("div",{style:{height:"calc(var(--xxl)*10)"}},"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),B=u("\u53D6 \u6D88"),D=u("\u786E \u5B9A");function m(d,c){const E=l("two-close"),_=l("hl-icon"),s=l("hl-button"),k=l("hl-panel");return b(),f(k,{style:{height:"calc(var(--xxl) * 8)"},"inner-scroll":""},{header:t(()=>[i,o("div",F,[e(_,null,{default:t(()=>[e(E)]),_:1})])]),footer:t(()=>[e(s,{class:"m-r-md",onClick:c[0]||(c[0]=x=>d.dialogVisible=!1)},{default:t(()=>[B]),_:1}),e(s,{type:"primary",onClick:c[1]||(c[1]=x=>d.dialogVisible=!1)},{default:t(()=>[D]),_:1})]),default:t(()=>[g]),_:1})}const{defineComponent:C,ref:p}=N,h=C({setup(){return{value:p(5)}}});return T({render:m},h)}()}},pe=n("h1",null,"Panel \u9762\u677F",-1),_e=n("p",null,"\u9762\u677F\u901A\u5E38\u7531\u5934\u90E8\u3001\u4E3B\u4F53\u548C\u811A\u6CE8\u7EC4\u6210\u3002\u9E3F\u9E3E\u4E2D\u7684\u9762\u677F\u5927\u591A\u6570\u7528\u505A\u63D0\u793A\u6846\u3001\u901A\u77E5\u3001\u5BF9\u8BDD\u6846\u6216\u5F53\u4F5C\u52FE\u52D2\u5185\u5BB9\u533A\u57DF\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),me=n("h2",{id:"ji-ben-yang-shi"},[n("a",{class:"header-anchor",href:"#ji-ben-yang-shi"}),a(" \u57FA\u672C\u6837\u5F0F")],-1),fe=n("p",null,"Panel \u7EC4\u4EF6\u5305\u62EC header\u3001body\u3001footer \u4E09\u4E2A slot, body \u662F\u4E3A\u9ED8\u8BA4 slot",-1),Fe=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ee=n("h2",{id:"wu-bian-kuang-yang-shi"},[n("a",{class:"header-anchor",href:"#wu-bian-kuang-yang-shi"}),a(" \u65E0\u8FB9\u6846\u6837\u5F0F")],-1),ve=n("p",null,[n("code",null,"borderless"),a(" \u5C5E\u6027\u4F1A\u4F7F Panel \u7EC4\u4EF6\u53D8\u6210\u65E0\u8FB9\u6846\u72B6\u6001\uFF0C\u540C\u65F6\u5B83\u4EEC\u76F4\u63A5\u7684\u95F4\u8DDD\u4E5F\u4F1A\u4EA7\u751F\u53D8\u5316\u3002")],-1),be=n("div",null,[n("p",null,[n("code",null,"outlineless"),a(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664Panel\u5916\u4FA7\u8F6E\u5ED3\u7684\u8FB9\u6846")])],-1),ge=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Be=n("h2",{id:"yuan-jiao-shu-xing"},[n("a",{class:"header-anchor",href:"#yuan-jiao-shu-xing"}),a(" \u5706\u89D2\u5C5E\u6027")],-1),De=n("p",null,[n("code",null,"radius"),a(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u5706\u89D2\u6837\u5F0F")],-1),Ce=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col">
      <hl-panel radius="0">
        <template #header>
          <div class="panel-title">
            \u8FD9\u662F\u4E00\u4E2A\u6807\u9898
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

    <hl-col span="col">
      <hl-panel radius="var(--lg)" borderless>
        <template #header>
          <div class="panel-title">
            \u8FD9\u662F\u4E00\u4E2A\u6807\u9898
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
`)],-1),we=n("h2",{id:"jian-ju-shu-xing"},[n("a",{class:"header-anchor",href:"#jian-ju-shu-xing"}),a(" \u95F4\u8DDD\u5C5E\u6027")],-1),ye=n("p",null,[n("code",null,"padding"),a(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u95F4\u8DDD\u5C3A\u5BF8\u3002"),n("code",null,"body-padding"),a(" \u5355\u72EC\u63A7\u5236 body \u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E "),n("code",null,"padding"),a("\u3002")],-1),Ae=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col">
      <hl-panel padding="var(--md)" borderless>
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

    <hl-col span="col">
      <hl-panel padding="var(--xl)" borderless>
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

    <hl-col span="col">
      <hl-panel padding="var(--xl)" body-padding="0" borderless>
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
        <div>\u5355\u72EC\u63A7\u5236panel-body\u7684\u95F4\u8DDD</div>
        <template #footer>
          <hl-button class="m-r-md" @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
          <hl-button type="primary" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
        </template>
      </hl-panel>
    </hl-col>
  </hl-row>
</template>
`)],-1),xe=Q('<h2 id="zi-ding-yi-lei-ming"><a class="header-anchor" href="#zi-ding-yi-lei-ming"></a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><p><code>header-class</code>\uFF0C<code>body-class</code> \u548C <code>footer-class</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u5411\u5BF9\u5E94\u7684<code>header</code>\uFF0C<code>body</code>\uFF0C<code>footer</code> \u589E\u52A0\u81EA\u5B9A\u4E49\u7C7B</p>',2),ke=n("div",null,[n("p",null,"\u4F60\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684 Devtools \u5DE5\u5177\u6765\u67E5\u770B Dom \u4E0A\u7684\u53D8\u5316\u3002")],-1),Ve=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ne=n("h2",{id:"jian-dan-xing-tai"},[n("a",{class:"header-anchor",href:"#jian-dan-xing-tai"}),a(" \u7B80\u5355\u5F62\u6001")],-1),qe=n("p",null,[a("Panel \u7EC4\u4EF6\u5141\u8BB8\u79FB\u9664 "),n("code",null,"header"),a("\u548C"),n("code",null,"footer"),a(" \u7ED3\u6784\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u5B9A\u4E49\u5B83\u7684\u7528\u9014\u548C\u6837\u5F0F\u3002")],-1),ze=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Te=n("h2",{id:"ke-kuo-zhan-de-header"},[n("a",{class:"header-anchor",href:"#ke-kuo-zhan-de-header"}),a(" \u53EF\u6269\u5C55\u7684 Header")],-1),$e=n("p",null,"header \u63D2\u69FD\u53EF\u4EE5\u7684\u627F\u8F7D\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u7EC4\u4EF6\uFF0C\u4F60\u751A\u81F3\u4E0D\u9700\u8981\u5B9A\u4E49\u6837\u5F0F\u3002",-1),Pe=n("div",null,[n("p",null,[a("\u5728 header \u7684 slot \u4E2D\u63D0\u4F9B\u4E86\u7684 "),n("code",null,"panel-header-left"),a("\uFF0C"),n("code",null,"panel-title"),a("\uFF0C"),n("code",null,"panel-header-right"),a(" \u4E09\u4E2A\u5E03\u5C40\u6837\u5F0F\u3002")])],-1),je=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Se=n("h2",{id:"gao-ji-gong-neng"},[n("a",{class:"header-anchor",href:"#gao-ji-gong-neng"}),a(" \u9AD8\u7EA7\u529F\u80FD")],-1),He=n("p",null,[n("code",null,"panel"),a(" \u63D0\u4F9B "),n("code",null,"\u6536\u8D77"),a(" \u548C "),n("code",null,"\u5168\u5C4F"),a(" \u529F\u80FD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u6309\u94AE\u6765\u63A7\u5236\u5B83\u4EEC\u3002")],-1),Ye=n("div",null,[n("p",null,[a("\u53EF\u4EE5\u8BBE\u7F6Efullscreen\u4E3A "),n("code",null,"object"),a(" \u7C7B\u578B\uFF0C\u521D\u59CB\u5316\u5168\u5C4F\u7684Panel\u4F4D\u7F6E")])],-1),Me=n("pre",null,[n("code",{class:"html"},` <template>
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
        maxStatus.value = { top: 'var(--md)', left: 'var(--md)' }
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
`)],-1),We=n("h2",{id:"zi-gua-ying-nei-bu-gun-dong"},[n("a",{class:"header-anchor",href:"#zi-gua-ying-nei-bu-gun-dong"}),a(" \u81EA\u9002\u5E94\u5185\u90E8\u6EDA\u52A8")],-1),Ge=n("p",null,[a("\u4F60\u53EF\u4EE5\u4E3A "),n("code",null,"panel"),a(" \u8BBE\u7F6E "),n("code",null,"inner-scroll"),a(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u5176 "),n("code",null,"panel-body"),a(" \u7684\u5185\u5BB9\u5728panel\u5185\u90E8\u6EDA\u52A8")],-1),Ie=n("div",null,[n("p",null,[a("\u4F60\u65E0\u9700\u8BBE\u7F6E\u6EDA\u52A8\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u5B83\u662F\u6839\u636E"),n("code",null,"panel"),a("\u7684\u9AD8\u5EA6\u81EA\u52A8\u9002\u5E94\u7684\u3002")])],-1),Je=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ke=Q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>borderless</td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>outlineless</td><td>\u662F\u5426\u65E0\u8F6E\u5ED3\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>radius</td><td>\u5706\u89D2</td><td>string</td><td>\u2014</td><td>$xxs</td></tr><tr><td>padding</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>body-padding</td><td>body \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>footer-padding</td><td>footer \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>header-class</td><td>\u4E3A header \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>body-class</td><td>\u4E3A body \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>footer-class</td><td>\u4E3A footer \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>fullscreen</td><td>\u5168\u5C4F\u6A21\u5F0F</td><td>boolean / object{top: string; left: string; bottom: stirng; right: string;}</td><td>\u2014</td><td>false</td></tr><tr><td>collapsed</td><td>\u6536\u8D77\u6A21\u5F0F\uFF0C\u5168\u5C4F\u6A21\u5F0F\u4E0B\u6536\u8D77\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>inner-scroll</td><td>\u4F7Fpanel-body\u7684\u5185\u5BB9\u5728panel\u5185\u90E8\u6EDA\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Panel \u4E3B\u4F53\u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Panel \u5934\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Panel \u811A\u6CE8\u7684\u5185\u5BB9</td></tr></tbody></table>',4);function Le(o,l,e,t,u,b){const f=q("hl-demo0"),i=q("demo-block"),F=q("hl-demo1"),g=q("hl-demo2"),B=q("hl-demo3"),D=q("hl-demo4"),m=q("hl-demo5"),C=q("hl-demo6"),p=q("hl-demo7"),h=q("hl-demo8"),d=q("right-nav");return se(),ie(ce,null,[n("section",null,[pe,_e,me,fe,v(i,{fs:""},{source:r(()=>[v(f)]),highlight:r(()=>[Fe]),_:1}),Ee,ve,v(i,{fs:""},{source:r(()=>[v(F)]),highlight:r(()=>[ge]),default:r(()=>[be]),_:1}),Be,De,v(i,{fs:""},{source:r(()=>[v(g)]),highlight:r(()=>[Ce]),_:1}),we,ye,v(i,{fs:""},{source:r(()=>[v(B)]),highlight:r(()=>[Ae]),_:1}),xe,v(i,{fs:""},{source:r(()=>[v(D)]),highlight:r(()=>[Ve]),default:r(()=>[ke]),_:1}),Ne,qe,v(i,{fs:""},{source:r(()=>[v(m)]),highlight:r(()=>[ze]),_:1}),Te,$e,v(i,{fs:""},{source:r(()=>[v(C)]),highlight:r(()=>[je]),default:r(()=>[Pe]),_:1}),Se,He,v(i,{fs:""},{source:r(()=>[v(p)]),highlight:r(()=>[Me]),default:r(()=>[Ye]),_:1}),We,Ge,v(i,{fs:""},{source:r(()=>[v(h)]),highlight:r(()=>[Je]),default:r(()=>[Ie]),_:1}),Ke]),v(d)],64)}var nt=he(re,[["render",Le]]);export{nt as default};
