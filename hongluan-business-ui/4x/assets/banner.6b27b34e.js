var N=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(o,t,u)=>t in o?N(o,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[t]=u,w=(o,t)=>{for(var u in t||(t={}))T.call(t,u)&&y(o,u,t[u]);if(x)for(var u of x(t))S.call(t,u)&&y(o,u,t[u]);return o};import{S as v,L as z,W as j,Q as e,a0 as b,U as i,a7 as M,aY as f,a1 as g,aS as O}from"./vue.e7196d28.js";import{_ as U}from"./index.275466c3.js";import"./hongluan-business.8d704877.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.6993e0a8.js";const $={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:o,createVNode:t,createTextVNode:u,withCtx:a,Fragment:_,openBlock:B,createElementBlock:c}=f,l=u("\u663E\u793A/\u9690\u85CF");function h(n,E){const d=o("hb-banner"),s=o("hl-button");return B(),c(_,null,[t(d,{modelValue:n.visible,"onUpdate:modelValue":E[0]||(E[0]=A=>n.visible=A),title:"\u8FD9\u662F\u4E2ABanner"},null,8,["modelValue"]),t(s,{onClick:n.show},{default:a(()=>[l]),_:1},8,["onClick"])],64)}const{defineComponent:m,ref:F}=f,C=m({setup(){const n=F(!1);return{visible:n,show:()=>{n.value=!n.value}}}});return w({render:h},C)}(),"hb-demo1":function(){const{createElementVNode:o,resolveComponent:t,withCtx:u,openBlock:a,createBlock:_,createCommentVNode:B,createTextVNode:c,createVNode:l,Fragment:h,createElementBlock:m}=f,F=o("b",null,"\u7279\u5B9A\u5BB9\u5668",-1),C=o("div",{id:"bannerContainer",style:{height:"200px",position:"relative"},class:"w-full bg-success m-b-md"},null,-1),n=c("\u663E\u793A/\u9690\u85CF(\u4F1A\u6709\u5EF6\u8FDF)");function E(r,p){const D=t("hb-banner"),k=t("hl-button");return a(),m(h,null,[r.mounted?(a(),_(D,{key:0,modelValue:r.visible,"onUpdate:modelValue":p[0]||(p[0]=V=>r.visible=V),to:"#bannerContainer"},{default:u(()=>[F]),_:1},8,["modelValue"])):B("",!0),C,l(k,{onClick:r.show},{default:u(()=>[n]),_:1},8,["onClick"])],64)}const{defineComponent:d,ref:s}=f,A=d({setup(){const r=s(!1),p=s(!1);return{visible:r,mounted:p,show:()=>{p.value=!0,window.setTimeout(()=>{r.value=!r.value},1e3)}}}});return w({render:E},A)}(),"hb-demo2":function(){const{resolveComponent:o,createVNode:t,withCtx:u,createElementVNode:a,createTextVNode:_,Fragment:B,openBlock:c,createElementBlock:l}=f,h=a("div",{class:"text-regular"}," \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002 ",-1),m=_("\u663E\u793A/\u9690\u85CF");function F(d,s){const A=o("two-airplay"),r=o("hl-icon"),p=o("hl-group"),D=o("hb-banner"),k=o("hl-button");return c(),l(B,null,[t(D,{modelValue:d.visible,"onUpdate:modelValue":s[0]||(s[0]=V=>d.visible=V),type:"primary",effect:"light",dashed:"",closable:!1,timeout:5e3,title:"\u81EA\u5B9A\u4E49\u5185\u5BB9Banner"},{default:u(()=>[t(p,{align:"items-middle",gap:"var(--md)"},{default:u(()=>[t(r,{type:"info",size:"xl",border:1.2,class:"no-shrink"},{default:u(()=>[t(A)]),_:1},8,["border"]),h]),_:1})]),_:1},8,["modelValue"]),t(k,{onClick:d.show},{default:u(()=>[m]),_:1},8,["onClick"])],64)}const{defineComponent:C,ref:n}=f,E=C({setup(){const d=n(!1);return{visible:d,show:()=>{d.value=!d.value}}}});return w({render:F},E)}()}},L=e("h1",null,"Banner \u901A\u77E5\u6A2A\u5E45",-1),P=e("p",null,"\u6A2A\u5E45\u901A\u5E38\u7528\u4E8E\u6807\u8BC6\u5168\u9875\u7684\u72B6\u6001\u6216\u901A\u77E5\u7B49\u3002\u5B83\u901A\u5E38\u662F\u5E38\u9A7B\u7684\uFF0C\u9700\u8981\u7528\u6237\u4E3B\u52A8\u5C06\u5176\u5173\u95ED\u3002",-1),Q=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),g(" \u57FA\u7840\u7528\u6CD5")],-1),W=e("div",null,[e("p",null,[g("\u9ED8\u8BA4 Banner \u5C06\u4F1A\u5168\u5C4F\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),e("code",null,"to"),g(" \u5C5E\u6027\u5B9A\u5411\u5230\u7279\u5B9ADOM\u8282\u70B9")])],-1),I=e("pre",null,[e("code",{class:"html"},` <template>
  <hb-banner v-model="visible" title="\u8FD9\u662F\u4E2ABanner" />
  <hl-button @click="show">\u663E\u793A/\u9690\u85CF</hl-button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const show = () => {
      visible.value = !visible.value
    }

    return {
      visible,
      show,
    }
  },
})
<\/script>
`)],-1),X=e("h2",{id:"te-ding-domjie-dian"},[e("a",{class:"header-anchor",href:"#te-ding-domjie-dian"}),g(" \u7279\u5B9ADOM\u8282\u70B9")],-1),Y=e("p",null,"\u8981\u4FDD\u8BC1DOM\u8282\u70B9\u5148\u4E8E Banner \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6210",-1),q=e("div",null,[e("p",null,"\u793A\u4F8B\u4E2D\u7531\u4E8E\u8981\u4FDD\u8BC1DOM\u5BB9\u5668\u5148\u52A0\u8F7D\uFF0C\u6240\u4EE5Banner\u7EC4\u4EF6\u8BBE\u7F6E\u4E86\u5EF6\u8FDF\u52A0\u8F7D")],-1),G=e("pre",null,[e("code",{class:"html"},` <template>
  <hb-banner v-if="mounted" v-model="visible" to="#bannerContainer">
    <b>\u7279\u5B9A\u5BB9\u5668</b>
  </hb-banner>
  <div id="bannerContainer" style="height: 200px; position: relative" class="w-full bg-success m-b-md">
  </div>
  <hl-button @click="show">\u663E\u793A/\u9690\u85CF(\u4F1A\u6709\u5EF6\u8FDF)</hl-button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const mounted = ref(false)

    const show = () => {
      mounted.value = true
      window.setTimeout(() => {
        visible.value = !visible.value
      }, 1000)
    }

    return {
      visible,
      mounted,
      show,
    }
  },
})
<\/script>
`)],-1),H=e("h2",{id:"zi-ding-yi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi"}),g(" \u81EA\u5B9A\u4E49")],-1),J=e("pre",null,[e("code",{class:"html"},` <template>
  <hb-banner
    v-model="visible"
    type="primary"
    effect="light"
    dashed
    :closable="false"
    :timeout="5000"
    title="\u81EA\u5B9A\u4E49\u5185\u5BB9Banner"
  >
    <hl-group align="items-middle" gap="var(--md)">
      <hl-icon type="info" size="xl" :border="1.2" class="no-shrink">
        <two-airplay />
      </hl-icon>
      <div class="text-regular">
        \u4E3B\u52A8\u5F0F\u6837\u5F0F\u751F\u6210\u7CFB\u7EDF\u662F\u901A\u8FC7config\u914D\u7F6E\u6587\u4EF6\u52A0\u6837\u5F0F\u751F\u6210\u51FD\u6570mixin\u6765\u7F16\u8BD1\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u5B83\u6240\u6709\u7684\u6837\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u4EA7\u751F\u5197\u4F59\u7684\u4EE3\u7801\u3002
      </div>
    </hl-group>
  </hb-banner>
  <hl-button @click="show">\u663E\u793A/\u9690\u85CF</hl-button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const show = () => {
      visible.value = !visible.value
    }

    return {
      visible,
      show,
    }
  },
})
<\/script>
`)],-1),K=O('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>effect</td><td>\u6837\u5F0F\u4E3B\u9898</td><td>string</td><td>light</td><td>-</td></tr><tr><td>description</td><td>\u8F85\u52A9\u6027\u6587\u5B57\u3002\u4E5F\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u4F20\u5165</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>closable</td><td>\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>close-text</td><td>\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-icon</td><td>\u662F\u5426\u663E\u793A\u56FE\u6807</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>dashed</td><td>dashed\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>placement</td><td>\u4F4D\u7F6E</td><td>string</td><td>top / bottom</td><td>top</td></tr><tr><td>animation-name</td><td>\u52A8\u753B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>to</td><td>\u5448\u73B0\u5BB9\u5668</td><td>string</td><td>-</td><td>body</td></tr><tr><td>z-index</td><td>zIndex\u503C</td><td>number</td><td>-</td><td>-</td></tr><tr><td>height</td><td>Banner\u9AD8\u5EA6</td><td>string</td><td>-</td><td>-</td></tr><tr><td>position</td><td>Banner\u7684CSS position\u5C5E\u6027\u8BBE\u7F6E</td><td>string</td><td>fixed / absolute\u7B49CSS\u6709\u6548\u503C</td><td><em><strong>to\u4E3Abody\u65F6\uFF1Afixed\uFF0C\u5176\u4ED6\u503C\uFF1Aabsolute</strong></em></td></tr><tr><td>timeout</td><td>Banner\u81EA\u52A8\u5173\u95ED\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u63CF\u8FF0</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon</td></tr><tr><td>title</td><td>\u6807\u9898\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED Banner \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr></tbody></table>',6);function R(o,t,u,a,_,B){const c=v("hb-demo0"),l=v("demo-block"),h=v("hb-demo1"),m=v("hb-demo2"),F=v("right-nav");return z(),j(M,null,[e("section",null,[L,P,Q,b(l,{fs:""},{source:i(()=>[b(c)]),highlight:i(()=>[I]),default:i(()=>[W]),_:1}),X,Y,b(l,{fs:""},{source:i(()=>[b(h)]),highlight:i(()=>[G]),default:i(()=>[q]),_:1}),H,b(l,{fs:""},{source:i(()=>[b(m)]),highlight:i(()=>[J]),_:1}),K]),b(F)],64)}var dt=U($,[["render",R]]);export{dt as default};
