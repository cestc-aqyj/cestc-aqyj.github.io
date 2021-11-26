var ue=Object.defineProperty;var L=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var M=(o,l,e)=>l in o?ue(o,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[l]=e,$=(o,l)=>{for(var e in l||(l={}))ae.call(l,e)&&M(o,e,l[e]);if(L)for(var e of L(l))de.call(l,e)&&M(o,e,l[e]);return o};import{E as q,o as se,c as ie,g as n,Q as B,H as _,Y as ce,ay as z,_ as i,ax as O}from"./vue.7de0486a.js";import{_ as he}from"./index.6438634e.js";import"./hongluan.9c38f5fe.js";import"./highlight.e2508551.js";import"./hongluan-icons.14143dc3.js";const re={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:D,createBlock:E}=z,d=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),v={class:"panel-header-right"},C=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),w=u("\u53D6 \u6D88"),y=u("\u786E \u5B9A");function m(r,h){const s=l("two-close"),c=l("hl-icon"),b=l("hl-button"),p=l("hl-panel");return D(),E(p,null,{header:t(()=>[d,o("div",v,[e(c,null,{default:t(()=>[e(s)]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:h[0]||(h[0]=a=>r.dialogVisible=!1)},{default:t(()=>[w]),_:1}),e(b,{type:"primary",onClick:h[1]||(h[1]=a=>r.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[C]),_:1})}return $({render:m},{})}(),"hl-demo1":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:D,createBlock:E}=z,d=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),v={class:"panel-header-right"},C=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),w=u("\u53D6 \u6D88"),y=u("\u786E \u5B9A");function m(s,c){const b=l("two-upload"),p=l("hl-icon"),a=l("hl-button"),V=l("two-maximize"),x=l("hl-panel");return D(),E(x,{ref:"panel",borderless:""},{header:t(()=>[d,o("div",v,[e(a,{equal:"","no-fill":""},{default:t(()=>[e(p,null,{default:t(()=>[e(b)]),_:1})]),_:1}),e(a,{equal:"","no-fill":"",onClick:c[0]||(c[0]=f=>s.panel.toggleFullscreen())},{default:t(()=>[e(p,null,{default:t(()=>[e(V)]),_:1})]),_:1})])]),footer:t(()=>[e(a,{class:"m-r-md",onClick:c[1]||(c[1]=f=>s.dialogVisible=!1)},{default:t(()=>[w]),_:1}),e(a,{type:"primary",onClick:c[2]||(c[2]=f=>s.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[C]),_:1},512)}const{defineComponent:A,ref:r}=z,h=A({setup(){return{panel:r(null)}}});return $({render:m},h)}(),"hl-demo2":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:D,createBlock:E}=z,d=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),v={class:"panel-header-right"},C=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),w=u("\u53D6 \u6D88"),y=u("\u786E \u5B9A"),m=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),A={class:"panel-header-right"},r=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),h=u("\u53D6 \u6D88"),s=u("\u786E \u5B9A");function c(p,a){const V=l("two-upload"),x=l("hl-icon"),f=l("hl-button"),k=l("two-maximize"),g=l("hl-panel"),T=l("hl-col"),N=l("hl-row");return D(),E(N,{gap:"var(--md)"},{default:t(()=>[e(T,{span:"col"},{default:t(()=>[e(g,{radius:"0"},{header:t(()=>[d,o("div",v,[e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(V)]),_:1})]),_:1}),e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(k)]),_:1})]),_:1})])]),footer:t(()=>[e(f,{class:"m-r-md",onClick:a[0]||(a[0]=F=>p.dialogVisible=!1)},{default:t(()=>[w]),_:1}),e(f,{type:"primary",onClick:a[1]||(a[1]=F=>p.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[C]),_:1})]),_:1}),e(T,{span:"col"},{default:t(()=>[e(g,{radius:"var(--lg)",borderless:""},{header:t(()=>[m,o("div",A,[e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(V)]),_:1})]),_:1}),e(f,{equal:"","no-fill":""},{default:t(()=>[e(x,null,{default:t(()=>[e(k)]),_:1})]),_:1})])]),footer:t(()=>[e(f,{class:"m-r-md",onClick:a[2]||(a[2]=F=>p.dialogVisible=!1)},{default:t(()=>[h]),_:1}),e(f,{type:"primary",onClick:a[3]||(a[3]=F=>p.dialogVisible=!1)},{default:t(()=>[s]),_:1})]),default:t(()=>[r]),_:1})]),_:1})]),_:1})}return $({render:c},{})}(),"hl-demo3":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:D,createBlock:E}=z,d=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),v={class:"panel-header-right"},C=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),w=u("\u53D6 \u6D88"),y=u("\u786E \u5B9A"),m=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),A={class:"panel-header-right"},r=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),h=u("\u53D6 \u6D88"),s=u("\u786E \u5B9A"),c=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),b={class:"panel-header-right"},p=o("div",null,"\u5355\u72EC\u63A7\u5236panel-body\u7684\u95F4\u8DDD",-1),a=u("\u53D6 \u6D88"),V=u("\u786E \u5B9A");function x(k,g){const T=l("two-upload"),N=l("hl-icon"),F=l("hl-button"),H=l("two-maximize"),Y=l("hl-panel"),Q=l("hl-col"),I=l("hl-row");return D(),E(I,{gap:"var(--md)"},{default:t(()=>[e(Q,{span:"col"},{default:t(()=>[e(Y,{padding:"var(--md)",borderless:""},{header:t(()=>[d,o("div",v,[e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(T)]),_:1})]),_:1}),e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(H)]),_:1})]),_:1})])]),footer:t(()=>[e(F,{class:"m-r-md",onClick:g[0]||(g[0]=P=>k.dialogVisible=!1)},{default:t(()=>[w]),_:1}),e(F,{type:"primary",onClick:g[1]||(g[1]=P=>k.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[C]),_:1})]),_:1}),e(Q,{span:"col"},{default:t(()=>[e(Y,{padding:"var(--xl)",borderless:""},{header:t(()=>[m,o("div",A,[e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(T)]),_:1})]),_:1}),e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(H)]),_:1})]),_:1})])]),footer:t(()=>[e(F,{class:"m-r-md",onClick:g[2]||(g[2]=P=>k.dialogVisible=!1)},{default:t(()=>[h]),_:1}),e(F,{type:"primary",onClick:g[3]||(g[3]=P=>k.dialogVisible=!1)},{default:t(()=>[s]),_:1})]),default:t(()=>[r]),_:1})]),_:1}),e(Q,{span:"col"},{default:t(()=>[e(Y,{padding:"var(--xl)","body-padding":"0",borderless:""},{header:t(()=>[c,o("div",b,[e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(T)]),_:1})]),_:1}),e(F,{equal:"","no-fill":""},{default:t(()=>[e(N,null,{default:t(()=>[e(H)]),_:1})]),_:1})])]),footer:t(()=>[e(F,{class:"m-r-md",onClick:g[4]||(g[4]=P=>k.dialogVisible=!1)},{default:t(()=>[a]),_:1}),e(F,{type:"primary",onClick:g[5]||(g[5]=P=>k.dialogVisible=!1)},{default:t(()=>[V]),_:1})]),default:t(()=>[p]),_:1})]),_:1})]),_:1})}return $({render:x},{})}(),"hl-demo4":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:D,createBlock:E}=z,d=o("div",{class:"panel-title"}," \u6807\u9898 ",-1),v={class:"panel-header-right"},C=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),w=u("\u53D6 \u6D88"),y=u("\u786E \u5B9A");function m(r,h){const s=l("two-upload"),c=l("hl-icon"),b=l("hl-button"),p=l("two-maximize"),a=l("hl-panel"),V=l("hl-col"),x=l("hl-row");return D(),E(x,{gap:"var(--md)"},{default:t(()=>[e(V,{span:"col"},{default:t(()=>[e(a,{padding:"var(--md)","header-class":"new-header-class","body-class":"new-body-class","footer-class":"new-footer-class"},{header:t(()=>[d,o("div",v,[e(b,{equal:"","no-fill":""},{default:t(()=>[e(c,null,{default:t(()=>[e(s)]),_:1})]),_:1}),e(b,{equal:"","no-fill":""},{default:t(()=>[e(c,null,{default:t(()=>[e(p)]),_:1})]),_:1})])]),footer:t(()=>[e(b,{class:"m-r-md",onClick:h[0]||(h[0]=f=>r.dialogVisible=!1)},{default:t(()=>[w]),_:1}),e(b,{type:"primary",onClick:h[1]||(h[1]=f=>r.dialogVisible=!1)},{default:t(()=>[y]),_:1})]),default:t(()=>[C]),_:1})]),_:1})]),_:1})}return $({render:m},{})}(),"hl-demo5":function(){const{createElementVNode:o,resolveComponent:l,withCtx:e,createVNode:t,openBlock:u,createBlock:D}=z,E=o("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u6709\u8FB9\u6846)",-1),d=o("div",null,"\u4EC5\u4FDD\u7559body\u533A\u57DF (\u65E0\u8FB9\u6846)",-1);function v(w,y){const m=l("hl-panel"),A=l("hl-col"),r=l("hl-row");return u(),D(r,{gap:"var(--md)"},{default:e(()=>[t(A,{span:"col"},{default:e(()=>[t(m,null,{default:e(()=>[E]),_:1})]),_:1}),t(A,{span:"col"},{default:e(()=>[t(m,{borderless:""},{default:e(()=>[d]),_:1})]),_:1})]),_:1})}return $({render:v},{})}(),"hl-demo6":function(){const{resolveComponent:o,createVNode:l,withCtx:e,createElementVNode:t,createTextVNode:u,openBlock:D,createBlock:E}=z,d={class:"panel-header-left"},v=t("div",{class:"panel-title"}," Title ",-1),C=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),w=u(" Panel-Body "),y={class:"panel-header-left"},m=t("span",null,"\u6D4B\u8BD5",-1),A=t("div",{class:"panel-title"},[t("h5",null,"\u5BF9\u65B9\u6B63\u5728\u8F93\u5165\u4E2D...")],-1),r=t("div",{class:"panel-header-right"},[t("button",{class:"panel-close"})],-1),h=u(" Panel-Body "),s=t("div",{class:"panel-title"}," Title ",-1),c={class:"panel-header-right"},b=u(" Panel-Body "),p=t("div",{class:"panel-title"}," Title ",-1),a={class:"panel-header-right"},V=u(" \u641C\u7D22 "),x=u(" Panel-Body "),f=t("div",{class:"panel-title"}," Title ",-1),k={class:"panel-header-right"},g=u(" \u641C\u7D22 "),T=u("\u6570\u636E\u6D41"),N=u("\u4F20\u8F93\u5C5E\u6027\u503C"),F=u("\u5DF2\u65AD\u7EBF"),H=u("\u5F85\u6062\u590D"),Y=u(" Panel-Body "),Q=t("div",{class:"panel-title"}," Title ",-1),I=t("div",{class:"panel-header-right"}," \u5C0F\u8D34\u58EB ",-1),P=u(" Panel-Body ");function R(Ie,Je){const U=o("two-news"),W=o("hl-icon"),j=o("hl-panel"),S=o("hl-col"),X=o("hl-thumb"),J=o("two-search"),Z=o("hl-input"),ee=o("hl-group"),K=o("hl-button"),te=o("two-chevron-bottom"),G=o("hl-dropdown-item"),le=o("hl-dropdown-menu"),ne=o("hl-dropdown"),oe=o("hl-row");return D(),E(oe,{gap:"var(--md)"},{default:e(()=>[l(S,{span:"col-md-12"},{default:e(()=>[l(j,{"footer-align":"align-left"},{header:e(()=>[t("div",d,[l(W,{size:"lg",border:1.5},{default:e(()=>[l(U)]),_:1},8,["border"])]),v,C]),default:e(()=>[w]),_:1})]),_:1}),l(S,{span:"col-md-12"},{default:e(()=>[l(j,null,{header:e(()=>[t("div",y,[l(X,{size:"sm",round:"",class:"primary"},{default:e(()=>[m]),_:1})]),A,r]),default:e(()=>[h]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[s,t("div",c,[l(ee,{merge:"",indent:""},{default:e(()=>[l(Z,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:"",fill:""},{suffix:e(()=>[l(W,null,{default:e(()=>[l(J)]),_:1})]),_:1})]),_:1})])]),default:e(()=>[b]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[p,t("div",a,[l(K,{type:"primary","icon-position":"right"},{icon:e(()=>[l(W,null,{default:e(()=>[l(J)]),_:1})]),default:e(()=>[V]),_:1})])]),default:e(()=>[x]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[f,t("div",k,[l(ne,null,{dropdown:e(()=>[l(le,null,{default:e(()=>[l(G,null,{default:e(()=>[T]),_:1}),l(G,null,{default:e(()=>[N]),_:1}),l(G,null,{default:e(()=>[F]),_:1}),l(G,null,{default:e(()=>[H]),_:1})]),_:1})]),default:e(()=>[l(K,{type:"link","icon-position":"right","no-fill":""},{icon:e(()=>[l(W,null,{default:e(()=>[l(te)]),_:1})]),default:e(()=>[g]),_:1})]),_:1})])]),default:e(()=>[Y]),_:1})]),_:1}),l(S,{span:"col-md-12",class:"m-t-lg"},{default:e(()=>[l(j,null,{header:e(()=>[Q,I]),default:e(()=>[P]),_:1})]),_:1})]),_:1})}return $({render:R},{})}(),"hl-demo7":function(){const{createElementVNode:o,resolveComponent:l,createVNode:e,withCtx:t,createTextVNode:u,openBlock:D,createBlock:E}=z,d=o("div",{class:"panel-title"}," \u8FD9\u662F\u4E00\u4E2A\u6807\u9898 ",-1),v={class:"panel-header-right"},C=o("div",null,"\u8FD9\u662F\u4E00\u6BB5body\u4FE1\u606F",-1),w=u("\u53D6 \u6D88"),y=u("\u786E \u5B9A");function m(s,c){const b=l("two-top"),p=l("hl-icon"),a=l("hl-button"),V=l("two-maximize"),x=l("hl-panel"),f=l("hl-col"),k=l("hl-row");return D(),E(k,{gap:"var(--md)"},{default:t(()=>[e(f,{span:"col"},{default:t(()=>[e(x,{fullscreen:s.maxStatus,collapsed:s.minStatus},{header:t(()=>[d,o("div",v,[e(a,{equal:"","no-fill":"",onClick:s.min},{default:t(()=>[e(p,null,{default:t(()=>[e(b)]),_:1})]),_:1},8,["onClick"]),e(a,{equal:"","no-fill":"",onClick:s.max},{default:t(()=>[e(p,null,{default:t(()=>[e(V)]),_:1})]),_:1},8,["onClick"])])]),footer:t(()=>[e(a,{class:"m-r-md"},{default:t(()=>[w]),_:1}),e(a,{type:"primary"},{default:t(()=>[y]),_:1})]),default:t(()=>[C]),_:1},8,["fullscreen","collapsed"])]),_:1})]),_:1})}const{defineComponent:A,ref:r}=z,h=A({setup(){const s=r(!1),c=r(!1);return{maxStatus:s,minStatus:c,min:()=>{c.value=!c.value},max:()=>{s.value?s.value=!1:s.value={top:"var(--md)",left:"var(--md)"}}}}});return $({render:m},h)}()}},pe=n("h1",null,"Panel \u9762\u677F",-1),_e=n("p",null,"\u9762\u677F\u901A\u5E38\u7531\u5934\u90E8\u3001\u4E3B\u4F53\u548C\u811A\u6CE8\u7EC4\u6210\u3002\u9E3F\u9E3E\u4E2D\u7684\u9762\u677F\u5927\u591A\u6570\u7528\u505A\u63D0\u793A\u6846\u3001\u901A\u77E5\u3001\u5BF9\u8BDD\u6846\u6216\u5F53\u4F5C\u52FE\u52D2\u5185\u5BB9\u533A\u57DF\u7684\u5BB9\u5668\uFF0C\u5F53\u7136\u4E0D\u4EC5\u5982\u6B64\u3002",-1),me=n("h2",{id:"ji-ben-yang-shi"},[n("a",{class:"header-anchor",href:"#ji-ben-yang-shi"}),i(" \u57FA\u672C\u6837\u5F0F")],-1),fe=n("p",null,"Panel \u7EC4\u4EF6\u5305\u62EC header\u3001body\u3001footer \u4E09\u4E2A slot, body \u662F\u4E3A\u9ED8\u8BA4 slot",-1),Fe=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ee=n("h2",{id:"wu-bian-kuang-yang-shi"},[n("a",{class:"header-anchor",href:"#wu-bian-kuang-yang-shi"}),i(" \u65E0\u8FB9\u6846\u6837\u5F0F")],-1),ve=n("p",null,[n("code",null,"borderless"),i(" \u5C5E\u6027\u4F1A\u4F7F Panel \u7EC4\u4EF6\u53D8\u6210\u65E0\u8FB9\u6846\u72B6\u6001\uFF0C\u540C\u65F6\u5B83\u4EEC\u76F4\u63A5\u7684\u95F4\u8DDD\u4E5F\u4F1A\u4EA7\u751F\u53D8\u5316\u3002")],-1),be=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),ge=n("h2",{id:"yuan-jiao-shu-xing"},[n("a",{class:"header-anchor",href:"#yuan-jiao-shu-xing"}),i(" \u5706\u89D2\u5C5E\u6027")],-1),Be=n("p",null,[n("code",null,"radius"),i(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u5706\u89D2\u6837\u5F0F")],-1),De=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ce=n("h2",{id:"jian-ju-shu-xing"},[n("a",{class:"header-anchor",href:"#jian-ju-shu-xing"}),i(" \u95F4\u8DDD\u5C5E\u6027")],-1),we=n("p",null,[n("code",null,"padding"),i(" \u5C5E\u6027\u4F1A\u6539\u53D8 Panel \u7EC4\u4EF6\u7684\u95F4\u8DDD\u5C3A\u5BF8\u3002"),n("code",null,"body-padding"),i(" \u5355\u72EC\u63A7\u5236 body \u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E "),n("code",null,"padding"),i("\u3002")],-1),ye=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ae=O('<h2 id="zi-ding-yi-lei-ming"><a class="header-anchor" href="#zi-ding-yi-lei-ming"></a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><p><code>header-class</code>\uFF0C<code>body-class</code> \u548C <code>footer-class</code> \u5C5E\u6027\u5141\u8BB8\u4F60\u5411\u5BF9\u5E94\u7684<code>header</code>\uFF0C<code>body</code>\uFF0C<code>footer</code> \u589E\u52A0\u81EA\u5B9A\u4E49\u7C7B</p>',2),xe=n("div",null,[n("p",null,"\u4F60\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684 Devtools \u5DE5\u5177\u6765\u67E5\u770B Dom \u4E0A\u7684\u53D8\u5316\u3002")],-1),ke=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Ve=n("h2",{id:"jian-dan-xing-tai"},[n("a",{class:"header-anchor",href:"#jian-dan-xing-tai"}),i(" \u7B80\u5355\u5F62\u6001")],-1),Ne=n("p",null,[i("Panel \u7EC4\u4EF6\u5141\u8BB8\u79FB\u9664 "),n("code",null,"header"),i("\u548C"),n("code",null,"footer"),i(" \u7ED3\u6784\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u66F4\u7075\u6D3B\u7684\u5B9A\u4E49\u5B83\u7684\u7528\u9014\u548C\u6837\u5F0F\u3002")],-1),qe=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),ze=n("h2",{id:"ke-kuo-zhan-de-header"},[n("a",{class:"header-anchor",href:"#ke-kuo-zhan-de-header"}),i(" \u53EF\u6269\u5C55\u7684 Header")],-1),$e=n("p",null,"header \u63D2\u69FD\u53EF\u4EE5\u7684\u627F\u8F7D\u4F60\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u7EC4\u4EF6\uFF0C\u4F60\u751A\u81F3\u4E0D\u9700\u8981\u5B9A\u4E49\u6837\u5F0F\u3002",-1),Te=n("div",null,[n("p",null,[i("\u5728 header \u7684 slot \u4E2D\u63D0\u4F9B\u4E86\u7684 "),n("code",null,"panel-header-left"),i("\uFF0C"),n("code",null,"panel-title"),i("\uFF0C"),n("code",null,"panel-header-right"),i(" \u4E09\u4E2A\u5E03\u5C40\u6837\u5F0F\u3002")])],-1),Pe=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),je=n("h2",{id:"gao-ji-gong-neng"},[n("a",{class:"header-anchor",href:"#gao-ji-gong-neng"}),i(" \u9AD8\u7EA7\u529F\u80FD")],-1),Se=n("p",null,[n("code",null,"panel"),i(" \u63D0\u4F9B "),n("code",null,"\u6536\u8D77"),i(" \u548C "),n("code",null,"\u5168\u5C4F"),i(" \u529F\u80FD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u6309\u94AE\u6765\u63A7\u5236\u5B83\u4EEC\u3002")],-1),He=n("div",null,[n("p",null,[i("\u53EF\u4EE5\u8BBE\u7F6Efullscreen\u4E3A "),n("code",null,"object"),i(" \u7C7B\u578B\uFF0C\u521D\u59CB\u5316\u5168\u5C4F\u7684Panel\u4F4D\u7F6E")])],-1),Ye=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),Qe=O('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>borderless</td><td>\u662F\u5426\u65E0\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>radius</td><td>\u5706\u89D2</td><td>string</td><td>\u2014</td><td>$xxs</td></tr><tr><td>padding</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>body-padding</td><td>body \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>footer-padding</td><td>footer \u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>$lg</td></tr><tr><td>header-class</td><td>\u4E3A header \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>body-class</td><td>\u4E3A body \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>footer-class</td><td>\u4E3A footer \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>fullscreen</td><td>\u5168\u5C4F\u6A21\u5F0F</td><td>boolean / object{top: string; left: string; bottom: stirng; right: string;}</td><td>\u2014</td><td>false</td></tr><tr><td>collapsed</td><td>\u6536\u8D77\u6A21\u5F0F\uFF0C\u5168\u5C4F\u6A21\u5F0F\u4E0B\u6536\u8D77\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Panel \u4E3B\u4F53\u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Panel \u5934\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Panel \u811A\u6CE8\u7684\u5185\u5BB9</td></tr></tbody></table>',4);function We(o,l,e,t,u,D){const E=q("hl-demo0"),d=q("demo-block"),v=q("hl-demo1"),C=q("hl-demo2"),w=q("hl-demo3"),y=q("hl-demo4"),m=q("hl-demo5"),A=q("hl-demo6"),r=q("hl-demo7"),h=q("right-nav");return se(),ie(ce,null,[n("section",null,[pe,_e,me,fe,B(d,{fs:""},{source:_(()=>[B(E)]),highlight:_(()=>[Fe]),_:1}),Ee,ve,B(d,{fs:""},{source:_(()=>[B(v)]),highlight:_(()=>[be]),_:1}),ge,Be,B(d,{fs:""},{source:_(()=>[B(C)]),highlight:_(()=>[De]),_:1}),Ce,we,B(d,{fs:""},{source:_(()=>[B(w)]),highlight:_(()=>[ye]),_:1}),Ae,B(d,{fs:""},{source:_(()=>[B(y)]),highlight:_(()=>[ke]),default:_(()=>[xe]),_:1}),Ve,Ne,B(d,{fs:""},{source:_(()=>[B(m)]),highlight:_(()=>[qe]),_:1}),ze,$e,B(d,{fs:""},{source:_(()=>[B(A)]),highlight:_(()=>[Pe]),default:_(()=>[Te]),_:1}),je,Se,B(d,{fs:""},{source:_(()=>[B(r)]),highlight:_(()=>[Ye]),default:_(()=>[He]),_:1}),Qe]),B(h)],64)}var Xe=he(re,[["render",We]]);export{Xe as default};
