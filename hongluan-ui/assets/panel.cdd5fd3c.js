var ue=Object.defineProperty;var K=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var L=(n,l,e)=>l in n?ue(n,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[l]=e,$=(n,l)=>{for(var e in l||(l={}))ae.call(l,e)&&L(n,e,l[e]);if(K)for(var e of K(l))de.call(l,e)&&L(n,e,l[e]);return n};import{M as q,o as se,C as ie,D as o,v as g,Q as E,Y as ce,av as z,_ as c,au as O}from"./vue.53c5f407.js";import{_ as he}from"./index.4c5900db.js";import"./hongluan.975e8b35.js";import"./highlight.e2508551.js";import"./hongluan-icons.1a8d0b03.js";const re={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:n,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:B,createBlock:b}=z,s=n("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),v={class:"panel-header-right"},D=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),C=u("\u53D6 \u6D88"),w=u("\u786E \u5B9A");function _(h,i){const A=l("two-close"),a=l("hl-icon"),r=l("hl-button"),m=l("hl-panel");return B(),b(m,null,{header:t(()=>[s,n("div",v,[e(a,null,{default:t(()=>[e(A)]),_:1})])]),footer:t(()=>[e(r,{class:"m-r-md",onClick:i[0]||(i[0]=d=>h.dialogVisible=!1)},{default:t(()=>[C]),_:1}),e(r,{type:"primary",onClick:i[1]||(i[1]=d=>h.dialogVisible=!1)},{default:t(()=>[w]),_:1})]),default:t(()=>[D]),_:1})}return $({render:_},{})}(),"hl-demo1":function(){const{createElementVNode:n,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:B,createBlock:b}=z,s=n("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),v={class:"panel-header-right"},D=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),C=u("\u53D6 \u6D88"),w=u("\u786E \u5B9A");function _(A,a){const r=l("two-upload"),m=l("hl-icon"),d=l("hl-button"),k=l("two-maximize"),x=l("hl-panel");return B(),b(x,{ref:"panel",borderless:""},{header:t(()=>[s,n("div",v,[e(d,{equal:"","no-fill":""},{default:t(()=>[e(m,null,{default:t(()=>[e(r)]),_:1})]),_:1}),e(d,{equal:"","no-fill":"",onClick:a[0]||(a[0]=f=>A.panel.toggleFullscreen())},{default:t(()=>[e(m,null,{default:t(()=>[e(k)]),_:1})]),_:1})])]),footer:t(()=>[e(d,{class:"m-r-md",onClick:a[1]||(a[1]=f=>A.dialogVisible=!1)},{default:t(()=>[C]),_:1}),e(d,{type:"primary",onClick:a[2]||(a[2]=f=>A.dialogVisible=!1)},{default:t(()=>[w]),_:1})]),default:t(()=>[D]),_:1},512)}const{defineComponent:y,ref:h}=z,i=y({setup(){return{panel:h(null)}}});return $({render:_},i)}(),"hl-demo2":function(){const{createElementVNode:n,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:B,createBlock:b}=z,s=n("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),v={class:"panel-header-right"},D=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),C=u("\u53D6 \u6D88"),w=u("\u786E \u5B9A"),_=n("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),y={class:"panel-header-right"},h=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),i=u("\u53D6 \u6D88"),A=u("\u786E \u5B9A");function a(m,d){const k=l("two-upload"),x=l("hl-icon"),f=l("hl-button"),V=l("two-maximize"),p=l("hl-panel"),T=l("hl-col"),N=l("hl-row");return B(),b(N,{gap:"var(--md)"},{default:t(()=>[e(T,{span:"col"},{default:t(()=>[e(p,{radius:"0"},{header:t(()=>[s,n("div",v,[e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(k)]),_:1})]),_:1}),e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(V)]),_:1})]),_:1})])]),footer:t(()=>[e(f,{class:"m-r-md",onClick:d[0]||(d[0]=F=>m.dialogVisible=!1)},{default:t(()=>[C]),_:1}),e(f,{type:"primary",onClick:d[1]||(d[1]=F=>m.dialogVisible=!1)},{default:t(()=>[w]),_:1})]),default:t(()=>[D]),_:1})]),_:1}),e(T,{span:"col"},{default:t(()=>[e(p,{radius:"var(--lg)",borderless:""},{header:t(()=>[_,n("div",y,[e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(k)]),_:1})]),_:1}),e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(V)]),_:1})]),_:1})])]),footer:t(()=>[e(f,{class:"m-r-md",onClick:d[2]||(d[2]=F=>m.dialogVisible=!1)},{default:t(()=>[i]),_:1}),e(f,{type:"primary",onClick:d[3]||(d[3]=F=>m.dialogVisible=!1)},{default:t(()=>[A]),_:1})]),default:t(()=>[h]),_:1})]),_:1})]),_:1})}return $({render:a},{})}(),"hl-demo3":function(){const{createElementVNode:n,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:B,createBlock:b}=z,s=n("div",{class:"panel-title"}," \u6807\u9898 ",-1),v={class:"panel-header-right"},D=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),C=u("\u53D6 \u6D88"),w=u("\u786E \u5B9A"),_=n("div",{class:"panel-title"}," \u6807\u9898 ",-1),y={class:"panel-header-right"},h=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),i=u("\u53D6 \u6D88"),A=u("\u786E \u5B9A"),a=n("div",{class:"panel-title"}," \u6807\u9898 ",-1),r={class:"panel-header-right"},m=n("div",null,"\u5355\u72EC\u63A7\u5236panel-body\u7684\u95F4\u8DDD",-1),d=u("\u53D6 \u6D88"),k=u("\u786E \u5B9A");function x(V,p){const T=l("two-upload"),N=l("hl-icon"),F=l("hl-button"),Y=l("two-maximize"),H=l("hl-panel"),M=l("hl-col"),G=l("hl-row");return B(),b(G,{gap:"var(--md)"},{default:t(()=>[e(M,{span:"col"},{default:t(()=>[e(H,{padding:"var(--md)",borderless:""},{header:t(()=>[s,n("div",v,[e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(T)]),_:1})]),_:1}),e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(Y)]),_:1})]),_:1})])]),footer:t(()=>[e(F,{class:"m-r-md",onClick:p[0]||(p[0]=P=>V.dialogVisible=!1)},{default:t(()=>[C]),_:1}),e(F,{type:"primary",onClick:p[1]||(p[1]=P=>V.dialogVisible=!1)},{default:t(()=>[w]),_:1})]),default:t(()=>[D]),_:1})]),_:1}),e(M,{span:"col"},{default:t(()=>[e(H,{padding:"var(--xl)",borderless:""},{header:t(()=>[_,n("div",y,[e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(T)]),_:1})]),_:1}),e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(Y)]),_:1})]),_:1})])]),footer:t(()=>[e(F,{class:"m-r-md",onClick:p[2]||(p[2]=P=>V.dialogVisible=!1)},{default:t(()=>[i]),_:1}),e(F,{type:"primary",onClick:p[3]||(p[3]=P=>V.dialogVisible=!1)},{default:t(()=>[A]),_:1})]),default:t(()=>[h]),_:1})]),_:1}),e(M,{span:"col"},{default:t(()=>[e(H,{padding:"var(--xl)","body-padding":"0",borderless:""},{header:t(()=>[a,n("div",r,[e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(T)]),_:1})]),_:1}),e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(Y)]),_:1})]),_:1})])]),footer:t(()=>[e(F,{class:"m-r-md",onClick:p[4]||(p[4]=P=>V.dialogVisible=!1)},{default:t(()=>[d]),_:1}),e(F,{type:"primary",onClick:p[5]||(p[5]=P=>V.dialogVisible=!1)},{default:t(()=>[k]),_:1})]),default:t(()=>[m]),_:1})]),_:1})]),_:1})}return $({render:x},{})}(),"hl-demo4":function(){const{createElementVNode:n,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:B,createBlock:b}=z,s=n("div",{class:"panel-title"}," \u6807\u9898 ",-1),v={class:"panel-header-right"},D=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),C=u("\u53D6 \u6D88"),w=u("\u786E \u5B9A");function _(h,i){const A=l("two-upload"),a=l("hl-icon"),r=l("hl-button"),m=l("two-maximize"),d=l("hl-panel"),k=l("hl-col"),x=l("hl-row");return B(),b(x,{gap:"var(--md)"},{default:t(()=>[e(k,{span:"col"},{default:t(()=>[e(d,{padding:"var(--md)","header-class":"new-header-class","body-class":"new-body-class","footer-class":"new-footer-class"},{header:t(()=>[s,n("div",v,[e(r,{equal:"","no-fill":""},{default:t(()=>[e(a,null,{default:t(()=>[e(A)]),_:1})]),_:1}),e(r,{equal:"","no-fill":""},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1})]),_:1})])]),footer:t(()=>[e(r,{class:"m-r-md",onClick:i[0]||(i[0]=f=>h.dialogVisible=!1)},{default:t(()=>[C]),_:1}),e(r,{type:"primary",onClick:i[1]||(i[1]=f=>h.dialogVisible=!1)},{default:t(()=>[w]),_:1})]),default:t(()=>[D]),_:1})]),_:1})]),_:1})}return $({render:_},{})}(),"hl-demo5":function(){const{createElementVNode:n,resolveComponent:l,withCtx:e,createVNode:t,openBlock:u,createBlock:B}=z,b=n("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)",-1),s=n("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)",-1);function v(C,w){const _=l("hl-panel"),y=l("hl-col"),h=l("hl-row");return u(),B(h,{gap:"var(--md)"},{default:e(()=>[t(y,{span:"col"},{default:e(()=>[t(_,null,{default:e(()=>[b]),_:1})]),_:1}),t(y,{span:"col"},{default:e(()=>[t(_,{borderless:""},{default:e(()=>[s]),_:1})]),_:1})]),_:1})}return $({render:v},{})}(),"hl-demo6":function(){const{resolveComponent:n,createVNode:l,withCtx:e,createElementVNode:t,createTextVNode:u,openBlock:B,createBlock:b}=z,s={class:"panel-header-left"},v=t("div",{class:"panel-title"}," Title ",-1),D=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),C=u(" Panel-Body "),w={class:"panel-header-left"},_=t("span",null,"\u6D4B\u8BD5",-1),y=t("div",{class:"panel-title"},[t("h5",null,"\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...")],-1),h=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),i=u(" Panel-Body "),A=t("div",{class:"panel-title"}," Title ",-1),a={class:"panel-header-right"},r=u(" Panel-Body "),m=t("div",{class:"panel-title"}," Title ",-1),d={class:"panel-header-right"},k=u(" \u641C\u7D22 "),x=u(" Panel-Body "),f=t("div",{class:"panel-title"}," Title ",-1),V={class:"panel-header-right"},p=u(" \u641C\u7D22 "),T=u("\u6570\u636E\u6D41"),N=u("\u4F20\u8F93\u5C5E\u6027\u503C"),F=u("\u5DF2\u65AD\u7EBF"),Y=u("\u5F85\u6062\u590D"),H=u(" Panel-Body "),M=t("div",{class:"panel-title"}," Title ",-1),G=t("div",{class:"panel-header-right"}," \u5C0F\u8D34\u58EB ",-1),P=u(" Panel-Body ");function R(We,Ge){const U=n("two-news"),Q=n("hl-icon"),j=n("hl-panel"),S=n("hl-col"),X=n("hl-thumb"),I=n("two-search"),Z=n("hl-input"),ee=n("hl-group"),J=n("hl-button"),te=n("two-chevron-bottom"),W=n("hl-dropdown-item"),le=n("hl-dropdown-menu"),ne=n("hl-dropdown"),oe=n("hl-row");return B(),b(oe,{gap:"var(--md)"},{default:e(()=>[l(S,{span:"col-md-12"},{default:e(()=>[l(j,{"footer-align":"align-left"},{header:e(()=>[t("div",s,[l(Q,{size:"lg",border:1.5},{default:e(()=>[l(U)]),_:1},8,["border"])]),v,D]),default:e(()=>[C]),_:1})]),_:1}),l(S,{span:"col-md-12"},{default:e(()=>[l(j,null,{header:e(()=>[t("div",w,[l(X,{size:"sm",round:"",class:"primary"},{default:e(()=>[_]),_:1})]),y,h]),default:e(()=>[i]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[A,t("div",a,[l(ee,{merge:"",indent:""},{default:e(()=>[l(Z,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:"",fill:""},{suffix:e(()=>[l(Q,null,{default:e(()=>[l(I)]),_:1})]),_:1})]),_:1})])]),default:e(()=>[r]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[m,t("div",d,[l(J,{type:"primary","icon-position":"right"},{icon:e(()=>[l(Q,null,{default:e(()=>[l(I)]),_:1})]),default:e(()=>[k]),_:1})])]),default:e(()=>[x]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[f,t("div",V,[l(ne,null,{dropdown:e(()=>[l(le,null,{default:e(()=>[l(W,null,{default:e(()=>[T]),_:1}),l(W,null,{default:e(()=>[N]),_:1}),l(W,null,{default:e(()=>[F]),_:1}),l(W,null,{default:e(()=>[Y]),_:1})]),_:1})]),default:e(()=>[l(J,{type:"link","icon-position":"right","no-fill":""},{icon:e(()=>[l(Q,null,{default:e(()=>[l(te)]),_:1})]),default:e(()=>[p]),_:1})]),_:1})])]),default:e(()=>[H]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[M,G]),default:e(()=>[P]),_:1})]),_:1})]),_:1})}return $({render:R},{})}(),"hl-demo7":function(){const{createElementVNode:n,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,normalizeClass:B,openBlock:b,createBlock:s}=z,v=n("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),D={class:"panel-header-right"},C=n("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),w=u("\u53D6 \u6D88"),_=u("\u786E \u5B9A");function y(a,r){const m=l("two-top"),d=l("hl-icon"),k=l("hl-button"),x=l("two-maximize"),f=l("hl-panel"),V=l("hl-col"),p=l("hl-row");return b(),s(p,{gap:"var(--md)"},{default:t(()=>[e(V,{span:"col"},{default:t(()=>[e(f,{class:B({fullscreen:a.maxStatus,collapsed:a.minStatus})},{header:t(()=>[v,n("div",D,[e(k,{equal:"","no-fill":"",onClick:a.min},{default:t(()=>[e(d,null,{default:t(()=>[e(m)]),_:1})]),_:1},8,["onClick"]),e(k,{equal:"","no-fill":"",onClick:a.max},{default:t(()=>[e(d,null,{default:t(()=>[e(x)]),_:1})]),_:1},8,["onClick"])])]),footer:t(()=>[e(k,{class:"m-r-md"},{default:t(()=>[w]),_:1}),e(k,{type:"primary"},{default:t(()=>[_]),_:1})]),default:t(()=>[C]),_:1},8,["class"])]),_:1})]),_:1})}const{defineComponent:h,ref:i}=z,A=h({setup(){const a=i(!1),r=i(!1);return{maxStatus:a,minStatus:r,min:()=>{r.value=!r.value},max:()=>{a.value=!a.value}}}});return $({render:y},A)}()}},pe=o("h1",null,"Panel \u9762\u677F",-1),_e=o("p",null,"\u9762\u677F\u901A\u5E38\u7531\u5934\u90E8\u3001\u4E3B\u4F53\u548C\u811A\u6CE8\u7EC4\u6210\u3002\u9E3F\u9E3E\u4E2D\u7684\u9762\u677F\u5927\u591A\u6570\u7528\u505A\u63D0\u793A\u6846\u3001\u901A\u77E5\u3001\u5BF9\u8BDD\u6846\u6216\u5F53\u4F5C\u52FE\u52D2\u5185\u5BB9\u533A\u57DF\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),me=o("h2",{id:"ji-ben-yang-shi"},[o("a",{class:"header-anchor",href:"#ji-ben-yang-shi"}),c(" \u57FA\u672C\u6837\u5F0F")],-1),fe=o("p",null,"Panel \u7EC4\u4EF6\u5305\u62EC header\u3001body\u3001footer \u4E09\u4E2A slot, body \u662F\u4E3A\u9ED8\u8BA4 slot",-1),Fe=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ee=o("h2",{id:"wu-bian-kuang-yang-shi"},[o("a",{class:"header-anchor",href:"#wu-bian-kuang-yang-shi"}),c(" \u65E0\u8FB9\u6846\u6837\u5F0F")],-1),be=o("p",null,[o("code",null,"borderless"),c(" \u5C5E\u6027\u4F1A\u4F7F Panel \u7EC4\u4EF6\u53D8\u6210\u65E0\u8FB9\u6846\u72B6\u6001\uFF0C\u540C\u65F6\u5B83\u4EEC\u76F4\u63A5\u7684\u95F4\u8DDD\u4E5F\u4F1A\u4EA7\u751F\u53D8\u5316\u3002")],-1),ve=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ge=o("h2",{id:"yuan-jiao-shu-xing"},[o("a",{class:"header-anchor",href:"#yuan-jiao-shu-xing"}),c(" \u5706\u89D2\u5C5E\u6027")],-1),Be=o("p",null,[o("code",null,"radius"),c(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u5706\u89D2\u6837\u5F0F")],-1),De=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ce=o("h2",{id:"jian-ju-shu-xing"},[o("a",{class:"header-anchor",href:"#jian-ju-shu-xing"}),c(" \u95F4\u8DDD\u5C5E\u6027")],-1),we=o("p",null,[o("code",null,"padding"),c(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u95F4\u8DDD\u5C3A\u5BF8\u3002"),o("code",null,"body-padding"),c(" \u5355\u72EC\u63A7\u5236 body \u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E "),o("code",null,"padding"),c("\u3002")],-1),ye=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ae=O('<h2 id="zi-ding-yi-lei-ming"><a class="header-anchor" href="#zi-ding-yi-lei-ming"></a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><p><code>header-class</code>\uFF0C<code>body-class</code> \u548C <code>footer-class</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u5411\u5BF9\u5E94\u7684<code>header</code>\uFF0C<code>body</code>\uFF0C<code>footer</code> \u589E\u52A0\u81EA\u5B9A\u4E49\u7C7B</p>',2),ke=o("div",null,[o("p",null,"\u4F60\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684 Devtools \u5DE5\u5177\u6765\u67E5\u770B Dom \u4E0A\u7684\u53D8\u5316\u3002")],-1),xe=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),Ve=o("h2",{id:"jian-dan-xing-tai"},[o("a",{class:"header-anchor",href:"#jian-dan-xing-tai"}),c(" \u7B80\u5355\u5F62\u6001")],-1),Ne=o("p",null,[c("Panel \u7EC4\u4EF6\u5141\u8BB8\u79FB\u9664 "),o("code",null,"header"),c("\u548C"),o("code",null,"footer"),c(" \u7ED3\u6784\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u5B9A\u4E49\u5B83\u7684\u7528\u9014\u548C\u6837\u5F0F\u3002")],-1),qe=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),ze=o("h2",{id:"ke-kuo-zhan-de-header"},[o("a",{class:"header-anchor",href:"#ke-kuo-zhan-de-header"}),c(" \u53EF\u6269\u5C55\u7684 Header")],-1),$e=o("p",null,"header \u63D2\u69FD\u53EF\u4EE5\u7684\u627F\u8F7D\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u7EC4\u4EF6\uFF0C\u4F60\u751A\u81F3\u4E0D\u9700\u8981\u5B9A\u4E49\u6837\u5F0F\u3002",-1),Te=o("div",null,[o("p",null,[c("\u5728 header \u7684 slot \u4E2D\u63D0\u4F9B\u4E86\u7684 "),o("code",null,"panel-header-left"),c("\uFF0C"),o("code",null,"panel-title"),c("\uFF0C"),o("code",null,"panel-header-right"),c(" \u4E09\u4E2A\u5E03\u5C40\u6837\u5F0F\u3002")])],-1),Pe=o("pre",null,[o("code",{class:"html"},` <template>
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
`)],-1),je=o("h2",{id:"gao-ji-gong-neng"},[o("a",{class:"header-anchor",href:"#gao-ji-gong-neng"}),c(" \u9AD8\u7EA7\u529F\u80FD")],-1),Se=o("p",null,[o("code",null,"panel"),c(" \u63D0\u4F9B "),o("code",null,"\u6536\u8D77"),c(" \u548C "),o("code",null,"\u5168\u5C4F"),c(" \u529F\u80FD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u6309\u94AE\u6765\u63A7\u5236\u5B83\u4EEC\u3002")],-1),Ye=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col">
      <hl-panel :class="{fullscreen: maxStatus, collapsed: minStatus}">
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
      maxStatus.value = !maxStatus.value
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
`)],-1),He=O('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>borderless</td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>radius</td><td>\u5706\u89D2</td><td>string</td><td>\u2014</td><td>$xxs</td></tr><tr><td>padding</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>body-padding</td><td>body \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>footer-padding</td><td>footer \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>header-class</td><td>\u4E3A header \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>body-class</td><td>\u4E3A body \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>footer-class</td><td>\u4E3A footer \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>fullscreen</td><td>\u5168\u5C4F\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>collapsed</td><td>\u6536\u8D77\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Panel \u4E3B\u4F53\u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Panel \u5934\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Panel \u811A\u6CE8\u7684\u5185\u5BB9</td></tr></tbody></table>',4);function Me(n,l,e,t,u,B){const b=q("hl-demo0"),s=q("demo-block"),v=q("hl-demo1"),D=q("hl-demo2"),C=q("hl-demo3"),w=q("hl-demo4"),_=q("hl-demo5"),y=q("hl-demo6"),h=q("hl-demo7"),i=q("right-nav");return se(),ie(ce,null,[o("section",null,[pe,_e,me,fe,g(s,{fs:""},{source:E(()=>[g(b)]),highlight:E(()=>[Fe]),_:1}),Ee,be,g(s,{fs:""},{source:E(()=>[g(v)]),highlight:E(()=>[ve]),_:1}),ge,Be,g(s,{fs:""},{source:E(()=>[g(D)]),highlight:E(()=>[De]),_:1}),Ce,we,g(s,{fs:""},{source:E(()=>[g(C)]),highlight:E(()=>[ye]),_:1}),Ae,g(s,{fs:""},{source:E(()=>[g(w)]),highlight:E(()=>[xe]),default:E(()=>[ke]),_:1}),Ve,Ne,g(s,{fs:""},{source:E(()=>[g(_)]),highlight:E(()=>[qe]),_:1}),ze,$e,g(s,{fs:""},{source:E(()=>[g(y)]),highlight:E(()=>[Pe]),default:E(()=>[Te]),_:1}),je,Se,g(s,{fs:""},{source:E(()=>[g(h)]),highlight:E(()=>[Ye]),_:1}),He]),g(i)],64)}var Ue=he(re,[["render",Me]]);export{Ue as default};
