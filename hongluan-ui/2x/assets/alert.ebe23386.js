var k=Object.defineProperty;var C=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(l,u,e)=>u in l?k(l,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[u]=e,B=(l,u)=>{for(var e in u||(u={}))b.call(u,e)&&y(l,e,u[e]);if(C)for(var e of C(u))N.call(u,e)&&y(l,e,u[e]);return l};import{H as m,L as V,W as z,Q as t,X as d,P as a,a4 as j,aJ as f,S as c,o as H}from"./vue.059774a0.js";import{H as $}from"./hongluan-icons.5b925e95.js";import{_ as P}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const S={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:l,createVNode:u,withCtx:e,openBlock:r,createBlock:i}=f;function p(s,E){const o=l("hl-alert"),n=l("hl-col"),h=l("hl-row");return r(),i(h,{gap:"var(--lg)"},{default:e(()=>[u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u9ED8\u8BA4\u6837\u5F0F"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",type:"primary"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",type:"warning"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",type:"danger"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u4FE1\u606F\u63D0\u793A\u7684\u6587\u6848",type:"info"})]),_:1})]),_:1})}return B({render:p},{})}(),"hl-demo1":function(){const{resolveComponent:l,createVNode:u,withCtx:e,openBlock:r,createBlock:i}=f;function p(s,E){const o=l("hl-alert"),n=l("hl-col"),h=l("hl-row");return r(),i(h,{gap:"var(--lg)"},{default:e(()=>[u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u9ED8\u8BA4\u63D0\u793A\u7684\u6587\u6848",effect:"light"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success",effect:"light"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",type:"primary",effect:"light"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",type:"warning",effect:"light"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",type:"danger",effect:"light"})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u4FE1\u606F\u63D0\u793A\u7684\u6587\u6848",type:"info",effect:"light"})]),_:1})]),_:1})}return B({render:p},{})}(),"hl-demo2":function(){const{resolveComponent:l,createVNode:u,createTextVNode:e,withCtx:r,Fragment:i,openBlock:p,createElementBlock:_}=f,s=e("\u8F93\u5165\u7684\u989D\u5185\u5BB9\u662F");function E(h,A){const F=l("hl-alert");return p(),_(i,null,[u(F,{title:"\u4E0D\u53EF\u5173\u95ED\u7684 alert",type:"danger",closable:!1}),u(F,{title:"\u81EA\u5B9A\u4E49 close-text",type:"primary","close-text":"\u77E5\u9053\u4E86",class:"m-t-lg"},{default:r(()=>[s]),_:1}),u(F,{title:"\u8BBE\u7F6E\u4E86\u56DE\u8C03\u7684 alert",type:"warning",class:"m-t-lg",onClose:h.hello},null,8,["onClose"])],64)}const{defineComponent:o}=f,n=o({setup(){return{hello:()=>{alert("Hello World!")}}}});return B({render:E},n)}(),"hl-demo3":function(){const{resolveComponent:l,createVNode:u,withCtx:e,openBlock:r,createBlock:i}=f;function p(s,E){const o=l("hl-alert"),n=l("hl-col"),h=l("hl-row");return r(),i(h,{gap:"var(--lg)"},{default:e(()=>[u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success",effect:"light","show-icon":""})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",type:"info",effect:"light","show-icon":""})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",type:"warning",effect:"light","show-icon":""})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",type:"danger",effect:"light","show-icon":""})]),_:1})]),_:1})}return B({render:p},{})}(),"hl-demo4":function(){const{resolveComponent:l,createVNode:u,withCtx:e,openBlock:r,createBlock:i}=f;function p(s,E){const o=l("hl-alert"),n=l("hl-col"),h=l("hl-row");return r(),i(h,{gap:"var(--lg)"},{default:e(()=>[u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success",effect:"light","show-icon":"",dashed:""})]),_:1}),u(n,{span:"md:col-12"},{default:e(()=>[u(o,{title:"\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848",type:"info",effect:"light","show-icon":"",dashed:""})]),_:1}),u(n,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[u(o,{title:"\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848",type:"warning",effect:"light","show-icon":"",dashed:""})]),_:1}),u(n,{span:"md:col-12",class:"m-t-lg"},{default:e(()=>[u(o,{title:"\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848",type:"danger",effect:"light","show-icon":"",dashed:""})]),_:1})]),_:1})}return B({render:p},{})}(),"hl-demo5":function(){const{resolveComponent:l,openBlock:u,createBlock:e}=f;function r(p,_){const s=l("hl-alert");return u(),e(s,{title:"\u5E26\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD",type:"success",description:"\u8FD9\u662F\u4E00\u53E5\u7ED5\u53E3\u4EE4\uFF1A\u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u6325\u53D1\uFF1B\u7070\u9ED1\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u9ED1\u7070\u5316\u80A5\u53D1\u6325\u3002 \u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u9ED1\u7070\u6325\u53D1\u5316\u4E3A\u7070\u2026\u2026"})}return B({render:r},{})}(),"hl-demo6":function(){const{resolveComponent:l,createVNode:u,withCtx:e,openBlock:r,createBlock:i}=f;function p(s,E){const o=l("hl-alert"),n=l("hl-col"),h=l("hl-row");return r(),i(h,{gap:"var(--lg)"},{default:e(()=>[u(n,{span:"col-12"},{default:e(()=>[u(o,{title:"\u6210\u529F\u63D0\u793A\u7684\u6587\u6848",type:"success",description:"\u8FD9\u662F\u4E00\u6BB5\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD\u7684\u8B66\u544A\u63D0\u793A\u3002","show-icon":"",light:""})]),_:1})]),_:1})}return B({render:p},{})}(),"hl-demo7":function(){const{resolveComponent:l,createVNode:u,withCtx:e,createElementVNode:r,openBlock:i,createBlock:p}=f,_=r("div",{class:"text-regular"}," \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002 ",-1);function s(h,A){const F=l("fill-data-cloud"),D=l("hl-icon"),g=l("hl-group"),w=l("hl-alert"),x=l("hl-col"),v=l("hl-row");return i(),p(v,{gap:"var(--lg)"},{default:e(()=>[u(x,{span:"col"},{default:e(()=>[u(w,{type:"primary",effect:"light",class:"p-lg",dashed:"",closable:!1},{default:e(()=>[u(g,{align:"items-middle",gap:"var(--md)"},{default:e(()=>[u(D,{type:"info",size:"xl",border:1.2,class:"no-shrink"},{default:e(()=>[u(F)]),_:1},8,["border"]),_]),_:1})]),_:1})]),_:1})]),_:1})}const{defineComponent:E}=f,{FillDataCloud:o}=$;return B({render:s},E({setup(h,{expose:A}){A();const F={FillDataCloud:o};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}()}},W=t("h1",null,"Alert \u8B66\u544A",-1),I=t("p",null,"\u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F\u3002",-1),L=t("div",null,[t("p",null,[c("Alert \u7EC4\u4EF6\u63D0\u4F9B\u56DB\u79CD\u4E3B\u9898\uFF0C\u7531"),t("code",null,"type"),c("\u5C5E\u6027\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u503C\u4E3A"),t("code",null,"info"),c("\u3002")])],-1),Q=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12"><hl-alert title="\u9ED8\u8BA4\u6837\u5F0F" /></hl-col>
    <hl-col span="md:col-12"><hl-alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" type="success" /></hl-col>
    <hl-col span="md:col-12"><hl-alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" type="primary" /></hl-col>
    <hl-col span="md:col-12"><hl-alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" type="warning" /></hl-col>
    <hl-col span="md:col-12"><hl-alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" type="danger" /></hl-col>
    <hl-col span="md:col-12"><hl-alert title="\u4FE1\u606F\u63D0\u793A\u7684\u6587\u6848" type="info" /></hl-col>
  </hl-row>
</template>
`)],-1),T=t("h2",{id:"light-yan-se"},[t("a",{class:"header-anchor",href:"#light-yan-se"}),c(" light \u989C\u8272")],-1),X=t("p",null,[c("\u5F53 Alert \u7EC4\u4EF6\u9644\u6709\u72B6\u6001\u8272\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u5728\u52A0\u4E0A "),t("code",null,'effect="light"'),c(" \u5C5E\u6027\u5373\u53EF\u4F7F\u5B83\u7684\u989C\u8272\u51CF\u6DE1\u3002")],-1),J=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      <hl-alert title="\u9ED8\u8BA4\u63D0\u793A\u7684\u6587\u6848" effect="light" />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" type="success" effect="light" />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" type="primary" effect="light" />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" type="warning" effect="light" />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" type="danger" effect="light" />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u4FE1\u606F\u63D0\u793A\u7684\u6587\u6848" type="info" effect="light" />
    </hl-col>
  </hl-row>
</template>
`)],-1),O=t("h2",{id:"zi-ding-yi-guan-bi-an-niu"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-guan-bi-an-niu"}),c(" \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE")],-1),U=t("p",null,"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u4E3A\u6587\u5B57\u6216\u5176\u4ED6\u7B26\u53F7\u3002",-1),q=t("div",null,[t("p",null,[c("\u5728 Alert \u7EC4\u4EF6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u53EF\u5173\u95ED\uFF0C\u5173\u95ED\u6309\u94AE\u7684\u6587\u672C\u4EE5\u53CA\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002"),t("code",null,"closable"),c("\u5C5E\u6027\u51B3\u5B9A\u662F\u5426\u53EF\u5173\u95ED\uFF0C\u63A5\u53D7"),t("code",null,"boolean"),c("\uFF0C\u9ED8\u8BA4\u4E3A"),t("code",null,"true"),c("\u3002\u4F60\u53EF\u4EE5\u8BBE\u7F6E"),t("code",null,"close-text"),c("\u5C5E\u6027\u6765\u4EE3\u66FF\u53F3\u4FA7\u7684\u5173\u95ED\u56FE\u6807\uFF0C\u6CE8\u610F\uFF1A"),t("code",null,"close-text"),c("\u5FC5\u987B\u4E3A\u6587\u672C\u3002\u8BBE\u7F6E"),t("code",null,"close"),c("\u4E8B\u4EF6\u6765\u8BBE\u7F6E\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u3002")])],-1),G=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-alert title="\u4E0D\u53EF\u5173\u95ED\u7684 alert" type="danger" :closable="false" />
  <hl-alert title="\u81EA\u5B9A\u4E49 close-text" type="primary" close-text="\u77E5\u9053\u4E86" class="m-t-lg">\u8F93\u5165\u7684\u989D\u5185\u5BB9\u662F</hl-alert>
  <hl-alert title="\u8BBE\u7F6E\u4E86\u56DE\u8C03\u7684 alert" type="warning" class="m-t-lg" @close="hello" />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const hello = () => {
      alert('Hello World!')
    }
    return {
      hello,
    }
  },
})
<\/script>
`)],-1),K=t("h2",{id:"dai-you-icon"},[t("a",{class:"header-anchor",href:"#dai-you-icon"}),c(" \u5E26\u6709 icon")],-1),M=t("p",null,"\u8868\u793A\u67D0\u79CD\u72B6\u6001\u65F6\u63D0\u5347\u53EF\u8BFB\u6027\u3002",-1),R=t("div",null,[t("p",null,[c("\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"show-icon"),c("\u5C5E\u6027\u6765\u663E\u793A Alert \u7684 icon\uFF0C\u8FD9\u80FD\u66F4\u6709\u6548\u5730\u5411\u7528\u6237\u5C55\u793A\u4F60\u7684\u663E\u793A\u610F\u56FE\u3002")])],-1),Y=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      <hl-alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" type="success" effect="light" show-icon />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" type="info" effect="light" show-icon />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" type="warning" effect="light" show-icon />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" type="danger" effect="light" show-icon />
    </hl-col>
  </hl-row>
</template>
`)],-1),Z=t("h2",{id:"bian-kuang-yang-shi"},[t("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),c(" \u8FB9\u6846\u6837\u5F0F")],-1),uu=t("div",null,[t("p",null,[c("\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"dashed"),c("\u5C5E\u6027\u6765\u8BBE\u7F6E\u865A\u7EBF\u8FB9\u6846\u3002")])],-1),tu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="md:col-12">
      <hl-alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" type="success" effect="light" show-icon dashed />
    </hl-col>
    <hl-col span="md:col-12">
      <hl-alert title="\u6D88\u606F\u63D0\u793A\u7684\u6587\u6848" type="info" effect="light" show-icon dashed />
    </hl-col>
    <hl-col span="md:col-12" class="m-t-lg">
      <hl-alert title="\u8B66\u544A\u63D0\u793A\u7684\u6587\u6848" type="warning" effect="light" show-icon dashed />
    </hl-col>
    <hl-col span="md:col-12" class="m-t-lg">
      <hl-alert title="\u9519\u8BEF\u63D0\u793A\u7684\u6587\u6848" type="danger" effect="light" show-icon dashed />
    </hl-col>
  </hl-row>
</template>
`)],-1),eu=t("h2",{id:"dai-you-fu-zhu-xing-wen-zi-jie-shao"},[t("a",{class:"header-anchor",href:"#dai-you-fu-zhu-xing-wen-zi-jie-shao"}),c(" \u5E26\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD")],-1),lu=t("p",null,"\u5305\u542B\u6807\u9898\u548C\u5185\u5BB9\uFF0C\u89E3\u91CA\u66F4\u8BE6\u7EC6\u7684\u8B66\u544A\u3002",-1),ou=t("div",null,[t("p",null,[c("\u9664\u4E86\u5FC5\u586B\u7684"),t("code",null,"title"),c("\u5C5E\u6027\u5916\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E"),t("code",null,"description"),c("\u5C5E\u6027\u6765\u5E2E\u52A9\u4F60\u66F4\u597D\u5730\u4ECB\u7ECD\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u8F85\u52A9\u6027\u6587\u5B57\u3002\u8F85\u52A9\u6027\u6587\u5B57\u53EA\u80FD\u5B58\u653E\u5355\u884C\u6587\u672C\uFF0C\u4F1A\u81EA\u52A8\u6362\u884C\u663E\u793A\u3002")])],-1),nu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-alert title="\u5E26\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD" type="success" description="\u8FD9\u662F\u4E00\u53E5\u7ED5\u53E3\u4EE4\uFF1A\u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u6325\u53D1\uFF1B\u7070\u9ED1\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u9ED1\u7070\u5316\u80A5\u53D1\u6325\u3002 \u9ED1\u7070\u5316\u80A5\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u5316\u80A5\u9ED1\u7070\u6325\u53D1\u5316\u4E3A\u7070\u2026\u2026" />
</template>
`)],-1),cu=t("h2",{id:"dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"},[t("a",{class:"header-anchor",href:"#dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"}),c(" \u5E26\u6709 icon \u548C\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD")],-1),au=t("div",null,[t("p",null,"\u540C\u65F6\u5177\u6709 icon \u548C\u8F85\u52A9\u6027\u6587\u5B57\u3002")],-1),su=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="col-12">
      <hl-alert title="\u6210\u529F\u63D0\u793A\u7684\u6587\u6848" type="success" description="\u8FD9\u662F\u4E00\u6BB5\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD\u7684\u8B66\u544A\u63D0\u793A\u3002" show-icon light />
    </hl-col>
  </hl-row>
</template>
`)],-1),du=t("h2",{id:"zi-ding-yi-nei-rong"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),c(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),ru=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="col">
      <hl-alert type="primary" effect="light" class="p-lg" dashed :closable="false">
        <hl-group align="items-middle" gap="var(--md)">
          <hl-icon type="info" size="xl" :border="1.2" class="no-shrink">
            <fill-data-cloud />
          </hl-icon>
          <div
            class="text-regular"
          >
            \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002
          </div>
        </hl-group>
      </hl-alert>
    </hl-col>
  </hl-row>
</template>
<script lang="ts" setup>
import { FillDataCloud } from '@hongluan-ui/icons'
<\/script>

`)],-1),hu=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>effect</td><td>\u6837\u5F0F\u4E3B\u9898</td><td>string</td><td>light</td><td>-</td></tr><tr><td>description</td><td>\u8F85\u52A9\u6027\u6587\u5B57\u3002\u4E5F\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u4F20\u5165</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>closable</td><td>\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>close-text</td><td>\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-icon</td><td>\u662F\u5426\u663E\u793A\u56FE\u6807</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>dashed</td><td>dashed\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u63CF\u8FF0</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon</td></tr><tr><td>title</td><td>\u6807\u9898\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED alert \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr></tbody></table>',6);function iu(l,u,e,r,i,p){const _=m("hl-demo0"),s=m("demo-block"),E=m("hl-demo1"),o=m("hl-demo2"),n=m("hl-demo3"),h=m("hl-demo4"),A=m("hl-demo5"),F=m("hl-demo6"),D=m("hl-demo7"),g=m("right-nav");return V(),z(j,null,[t("section",null,[W,I,d(s,{fs:""},{source:a(()=>[d(_)]),highlight:a(()=>[Q]),default:a(()=>[L]),_:1}),T,X,d(s,{fs:""},{source:a(()=>[d(E)]),highlight:a(()=>[J]),_:1}),O,U,d(s,{fs:""},{source:a(()=>[d(o)]),highlight:a(()=>[G]),default:a(()=>[q]),_:1}),K,M,d(s,{fs:""},{source:a(()=>[d(n)]),highlight:a(()=>[Y]),default:a(()=>[R]),_:1}),Z,d(s,{fs:""},{source:a(()=>[d(h)]),highlight:a(()=>[tu]),default:a(()=>[uu]),_:1}),eu,lu,d(s,{fs:""},{source:a(()=>[d(A)]),highlight:a(()=>[nu]),default:a(()=>[ou]),_:1}),cu,d(s,{fs:""},{source:a(()=>[d(F)]),highlight:a(()=>[su]),default:a(()=>[au]),_:1}),du,d(s,{fs:""},{source:a(()=>[d(D)]),highlight:a(()=>[ru]),_:1}),hu]),d(g)],64)}var Bu=P(S,[["render",iu]]);export{Bu as default};
