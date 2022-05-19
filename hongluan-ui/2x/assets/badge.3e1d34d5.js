var A=Object.defineProperty;var v=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(n,e,o)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,C=(n,e)=>{for(var o in e||(e={}))D.call(e,o)&&x(n,o,e[o]);if(v)for(var o of v(e))k.call(e,o)&&x(n,o,e[o]);return n};import{H as F,L as w,W as N,Q as t,X as c,P as a,a4 as V,S as l,o as z,aJ as f}from"./vue.059774a0.js";import{H as T}from"./hongluan-icons.5b925e95.js";import{_ as L}from"./index.6a62691a.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";const S={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:n,resolveComponent:e,createVNode:o,withCtx:u,openBlock:m,createBlock:h}=f,p=n("p",null,"Number",-1),d=n("p",null,"String",-1);function _(g,i){const s=e("hl-badge"),E=e("hl-col"),B=e("hl-row");return m(),h(B,{align:"items-center"},{default:u(()=>[o(E,{span:"lg:col-12"},{default:u(()=>[p,o(s,{value:1,type:"primary",class:"m-r-md"}),o(s,{value:2,type:"primary",outline:"",class:"m-r-md"}),o(s,{value:3,type:"primary",round:"",class:"m-r-md"})]),_:1}),o(E,{span:"lg:col-12"},{default:u(()=>[d,o(s,{value:"Badge",type:"primary",class:"m-r-md"}),o(s,{value:"Badge Outline",type:"primary",outline:"",class:"m-r-md"}),o(s,{value:"Badge Round",type:"primary",round:"",class:"m-r-md"})]),_:1})]),_:1})}return C({render:_},{})}(),"hl-demo1":function(){const{resolveComponent:n,createVNode:e,Fragment:o,openBlock:u,createElementBlock:m}=f;function h(d,_){const r=n("hl-badge");return u(),m(o,null,[e(r,{value:"primary",type:"primary",class:"m-r-md"}),e(r,{value:"success",type:"success",class:"m-r-md"}),e(r,{value:"danger",type:"danger",class:"m-r-md"}),e(r,{value:"warning",type:"warning",class:"m-r-md"}),e(r,{value:"info",type:"info",class:"m-r-md"})],64)}return C({render:h},{})}(),"hl-demo2":function(){const{resolveComponent:n,createVNode:e,createTextVNode:o,withCtx:u,Fragment:m,openBlock:h,createElementBlock:p}=f,d=o("\u5DE6\u4E0A\u60AC\u6D6E"),_=o("\u5DE6\u4E0B\u60AC\u6D6E"),r=o("\u53F3\u4E0A\u60AC\u6D6E"),g=o("\u53F3\u4E0B\u60AC\u6D6E");function i(E,B){const b=n("hl-badge"),y=n("hl-button");return h(),p(m,null,[e(y,{class:"m-r-md"},{default:u(()=>[d,e(b,{value:"LT",type:"danger",position:"lt",round:""})]),_:1}),e(y,{class:"m-r-md"},{default:u(()=>[_,e(b,{value:"LB",type:"danger",position:"lb",round:""})]),_:1}),e(y,{class:"m-r-md"},{default:u(()=>[r,e(b,{value:"RT",type:"danger",position:"rt",round:""})]),_:1}),e(y,{class:"m-r-md"},{default:u(()=>[g,e(b,{value:"RB",type:"danger",position:"rb",round:""})]),_:1})],64)}return C({render:i},{})}(),"hl-demo3":function(){const{resolveComponent:n,createVNode:e,withCtx:o,openBlock:u,createBlock:m}=f;function h(r,g){const i=n("two-search"),s=n("hl-icon"),E=n("hl-badge"),B=n("hl-button");return u(),m(B,{class:"m-r-md",type:"primary","no-fill":"",round:""},{icon:o(()=>[e(s,null,{default:o(()=>[e(i)]),_:1})]),default:o(()=>[e(E,{value:"LT",type:"danger",position:"rt",offset:["5px","5px"],round:""})]),_:1})}const{defineComponent:p}=f,{TwoSearch:d}=T;return C({render:h},p({setup(r,{expose:g}){g();const i={TwoSearch:d};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo4":function(){const{resolveComponent:n,createVNode:e,createTextVNode:o,withCtx:u,Fragment:m,openBlock:h,createElementBlock:p}=f,d=o(" \u8BC4\u8BBA "),_=o(" \u56DE\u590D ");function r(i,s){const E=n("hl-badge"),B=n("hl-button");return h(),p(m,null,[e(B,{class:"m-r-md"},{default:u(()=>[d,e(E,{type:"danger",position:"rt",value:200,max:99,round:""})]),_:1}),e(B,{class:"m-r-md"},{default:u(()=>[_,e(E,{type:"danger",position:"rt",value:100,max:10,round:""})]),_:1})],64)}return C({render:r},{})}(),"hl-demo5":function(){const{createTextVNode:n,resolveComponent:e,withCtx:o,createVNode:u,Fragment:m,openBlock:h,createElementBlock:p}=f,d=n(" \u5C0F\u7EA2\u70B9"),_=n("\u6570\u636E\u67E5\u8BE2"),r=n("\u6570\u636E\u67E5\u8BE2 ");function g(s,E){const B=e("hl-badge"),b=e("hl-button");return h(),p(m,null,[u(b,{class:"m-r-md"},{default:o(()=>[d,u(B,{dot:"",type:"danger",position:"rt"},{default:o(()=>[_]),_:1})]),_:1}),u(b,{type:"primary",class:"m-r-md"},{default:o(()=>[u(B,{dot:"",class:"m-r-sm"}),r]),_:1})],64)}return C({render:g},{})}()}},R=t("h1",null,"Badge \u5FBD\u7AE0",-1),P=t("p",null,"\u5FBD\u7AE0\uFF08Badge\uFF09\u662F\u4E00\u79CD\u5C0F\u578B\u7684\u7528\u4E8E\u8BA1\u6570\u548C\u6253\u6807\u7B7E\u7684\u7EC4\u4EF6\u3002",-1),$=t("div",null,[t("p",null,[l("\u5B9A\u4E49 "),t("code",null,"value"),l(" \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 "),t("code",null,"number"),l(" \u6216\u8005 "),t("code",null,"string"),l("\u3002")])],-1),H=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row align="items-center">
    <hl-col span="lg:col-12">
      <p>Number</p>
      <hl-badge :value="1" type="primary" class="m-r-md" />
      <hl-badge :value="2" type="primary" outline class="m-r-md" />
      <hl-badge :value="3" type="primary" round class="m-r-md" />
    </hl-col>
    <hl-col span="lg:col-12">
      <p>String</p>
      <hl-badge value="Badge" type="primary" class="m-r-md" />
      <hl-badge value="Badge Outline" type="primary" outline class="m-r-md" />
      <hl-badge value="Badge Round" type="primary" round class="m-r-md" />
    </hl-col>
  </hl-row>
</template>
`)],-1),O=t("h2",{id:"hui-zhang-yan-se"},[t("a",{class:"header-anchor",href:"#hui-zhang-yan-se"}),l(" \u5FBD\u7AE0\u989C\u8272")],-1),I=t("p",null,[t("code",null,"Badge"),l(" \u7EC4\u4EF6\u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002")],-1),Q=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-badge value="primary" type="primary" class="m-r-md" />
  <hl-badge value="success" type="success" class="m-r-md" />
  <hl-badge value="danger" type="danger" class="m-r-md" />
  <hl-badge value="warning" type="warning" class="m-r-md" />
  <hl-badge value="info" type="info" class="m-r-md" />
</template>
`)],-1),W=t("h2",{id:"xuan-fu-wei-zhi"},[t("a",{class:"header-anchor",href:"#xuan-fu-wei-zhi"}),l(" \u60AC\u6D6E\u4F4D\u7F6E")],-1),X=t("p",null,[l("\u8BBE\u7F6E "),t("code",null,"position"),l("\u5C5E\u6027\u53EF\u4EE5\u4F7F "),t("code",null,"Badge"),l(" \u60AC\u6D6E\u5728\u7236\u5143\u7D20\u7684\u56DB\u4E2A\u89D2\u4E0A\u3002")],-1),j=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md">\u5DE6\u4E0A\u60AC\u6D6E<hl-badge value="LT" type="danger" position="lt" round /></hl-button>
  <hl-button class="m-r-md">\u5DE6\u4E0B\u60AC\u6D6E<hl-badge value="LB" type="danger" position="lb" round /></hl-button>
  <hl-button class="m-r-md">\u53F3\u4E0A\u60AC\u6D6E<hl-badge value="RT" type="danger" position="rt" round /></hl-button>
  <hl-button class="m-r-md">\u53F3\u4E0B\u60AC\u6D6E<hl-badge value="RB" type="danger" position="rb" round /></hl-button>
</template>
`)],-1),J=t("h2",{id:"shou-dong-kong-zhi-xuan-fu-wei-zhi"},[t("a",{class:"header-anchor",href:"#shou-dong-kong-zhi-xuan-fu-wei-zhi"}),l(" \u624B\u52A8\u63A7\u5236\u60AC\u6D6E\u4F4D\u7F6E")],-1),U=t("p",null,[l("\u8BBE\u7F6E "),t("code",null,"offset"),l("\u5C5E\u6027\u4E3A\u6570\u7EC4\u7C7B\u578B\uFF0C\u53EF\u4EE5\u63A7\u5236 "),t("code",null,"Badge"),l("\u7684\u7CBE\u786E\u4F4D\u7F6E\u3002")],-1),q=t("div",null,[t("p",null,"\u6570\u7EC4\u63A5\u65364\u4E2A\u503C\uFF0C\u987A\u5E8F\u4E3A\uFF1Atop\u3001right\u3001bottom\u3001left")],-1),G=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md" type="primary" no-fill round>
    <template #icon>
      <hl-icon><two-search /></hl-icon>
    </template>
    <hl-badge value="LT" type="danger" position="rt" :offset="['5px','5px']" round />
  </hl-button>
</template>
<script lang="ts" setup>
import { TwoSearch } from '@hongluan-ui/icons'
<\/script>
`)],-1),K=t("h2",{id:"zui-da-zhi"},[t("a",{class:"header-anchor",href:"#zui-da-zhi"}),l(" \u6700\u5927\u503C")],-1),M=t("p",null,[t("code",null,"max"),l("\u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u6700\u5927\u503C\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u53EA\u6709\u5F53"),t("code",null,"value"),l("\u4E3A"),t("code",null,"Number"),l("\u65F6\uFF0C\u5B83\u624D\u4F1A\u751F\u6548\u3002")],-1),Y=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md">
    \u8BC4\u8BBA
    <hl-badge
      type="danger"
      position="rt"
      :value="200"
      :max="99"
      round
    />
  </hl-button>
  <hl-button class="m-r-md">
    \u56DE\u590D
    <hl-badge
      type="danger"
      position="rt"
      :value="100"
      :max="10"
      round
    />
  </hl-button>
</template>
`)],-1),Z=t("h2",{id:"yuan-dian-hui-zhang"},[t("a",{class:"header-anchor",href:"#yuan-dian-hui-zhang"}),l(" \u5706\u70B9\u5FBD\u7AE0")],-1),tt=t("p",null,[l("\u8BBE\u7F6E"),t("code",null,"dot"),l("\u5C5E\u6027\u53EF\u4F7F\u5FBD\u7AE0\u7EC4\u4EF6\u53D8\u6210\u4E00\u4E2A 8 x 8 \u50CF\u7D20\u7684\u5706\u70B9\u3002")],-1),et=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md">
    \u5C0F\u7EA2\u70B9<hl-badge dot type="danger" position="rt">\u6570\u636E\u67E5\u8BE2</hl-badge>
  </hl-button>

  <hl-button type="primary" class="m-r-md">
    <hl-badge dot class="m-r-sm" />\u6570\u636E\u67E5\u8BE2
  </hl-button>
</template>
`)],-1),ot=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u663E\u793A\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max</td><td>\u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A &#39;{max}+&#39;\uFF0C\u8981\u6C42 value \u662F Number \u7C7B\u578B</td><td>number</td><td>\u2014</td><td>99</td></tr><tr><td>dot</td><td>\u5C0F\u5706\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u662F\u5426\u662F\u5706\u5F62</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>hidden</td><td>\u9690\u85CF badge</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>primary / success / warning / danger / info</td><td>\u2014</td></tr><tr><td>position</td><td>\u4F4D\u7F6E</td><td>string</td><td>lt / rt / lb / rb</td><td>\u2014</td></tr><tr><td>offset</td><td>\u4F4D\u7F6E\u504F\u79FB\u8BBE\u7F6E</td><td>array</td><td>\u2014</td><td>-</td></tr></tbody></table>',2);function nt(n,e,o,u,m,h){const p=F("hl-demo0"),d=F("demo-block"),_=F("hl-demo1"),r=F("hl-demo2"),g=F("hl-demo3"),i=F("hl-demo4"),s=F("hl-demo5"),E=F("right-nav");return w(),N(V,null,[t("section",null,[R,P,c(d,{fs:""},{source:a(()=>[c(p)]),highlight:a(()=>[H]),default:a(()=>[$]),_:1}),O,I,c(d,{fs:""},{source:a(()=>[c(_)]),highlight:a(()=>[Q]),_:1}),W,X,c(d,{fs:""},{source:a(()=>[c(r)]),highlight:a(()=>[j]),_:1}),J,U,c(d,{fs:""},{source:a(()=>[c(g)]),highlight:a(()=>[G]),default:a(()=>[q]),_:1}),K,M,c(d,{fs:""},{source:a(()=>[c(i)]),highlight:a(()=>[Y]),_:1}),Z,tt,c(d,{fs:""},{source:a(()=>[c(s)]),highlight:a(()=>[et]),_:1}),ot]),c(E)],64)}var ct=L(S,[["render",nt]]);export{ct as default};
