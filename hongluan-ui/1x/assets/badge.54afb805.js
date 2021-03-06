var A=Object.defineProperty;var v=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(u,e,n)=>e in u?A(u,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[e]=n,C=(u,e)=>{for(var n in e||(e={}))D.call(e,n)&&x(u,n,e[n]);if(v)for(var n of v(e))k.call(e,n)&&x(u,n,e[n]);return u};import{Y as B,L as w,W as N,Q as t,a2 as c,a0 as r,P as V,a3 as l,o as z,aG as f}from"./vue.a2bb788b.js";import{_ as T}from"./index.6c900e06.js";import"./hongluan.bb564fd4.js";import"./highlight.5c3ff532.js";import"./hongluan-icons.da8bad7b.js";const L={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:e,createVNode:n,withCtx:o,openBlock:m,createBlock:h}=f,p=u("p",null,"Number",-1),d=u("p",null,"String",-1);function _(i,g){const s=e("hl-badge"),E=e("hl-col"),b=e("hl-row");return m(),h(b,{align:"center"},{default:o(()=>[n(E,{span:"col-lg-12"},{default:o(()=>[p,n(s,{value:1,type:"primary",class:"m-r-md"}),n(s,{value:2,type:"primary",outline:"",class:"m-r-md"}),n(s,{value:3,type:"primary",round:"",class:"m-r-md"})]),_:1}),n(E,{span:"col-lg-12"},{default:o(()=>[d,n(s,{value:"Badge",type:"primary",class:"m-r-md"}),n(s,{value:"Badge Outline",type:"primary",outline:"",class:"m-r-md"}),n(s,{value:"Badge Round",type:"primary",round:"",class:"m-r-md"})]),_:1})]),_:1})}return C({render:_},{})}(),"hl-demo1":function(){const{resolveComponent:u,createVNode:e,Fragment:n,openBlock:o,createElementBlock:m}=f;function h(d,_){const a=u("hl-badge");return o(),m(n,null,[e(a,{value:"primary",type:"primary",class:"m-r-md"}),e(a,{value:"success",type:"success",class:"m-r-md"}),e(a,{value:"danger",type:"danger",class:"m-r-md"}),e(a,{value:"warning",type:"warning",class:"m-r-md"}),e(a,{value:"info",type:"info",class:"m-r-md"})],64)}return C({render:h},{})}(),"hl-demo2":function(){const{resolveComponent:u,createVNode:e,createTextVNode:n,withCtx:o,Fragment:m,openBlock:h,createElementBlock:p}=f,d=n("\u5DE6\u4E0A\u60AC\u6D6E"),_=n("\u5DE6\u4E0B\u60AC\u6D6E"),a=n("\u53F3\u4E0A\u60AC\u6D6E"),i=n("\u53F3\u4E0B\u60AC\u6D6E");function g(E,b){const F=u("hl-badge"),y=u("hl-button");return h(),p(m,null,[e(y,{class:"m-r-md"},{default:o(()=>[d,e(F,{value:"LT",type:"danger",position:"lt",round:""})]),_:1}),e(y,{class:"m-r-md"},{default:o(()=>[_,e(F,{value:"LB",type:"danger",position:"lb",round:""})]),_:1}),e(y,{class:"m-r-md"},{default:o(()=>[a,e(F,{value:"RT",type:"danger",position:"rt",round:""})]),_:1}),e(y,{class:"m-r-md"},{default:o(()=>[i,e(F,{value:"RB",type:"danger",position:"rb",round:""})]),_:1})],64)}return C({render:g},{})}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:e,withCtx:n,openBlock:o,createBlock:m}=f;function h(d,_){const a=u("two-search"),i=u("hl-icon"),g=u("hl-badge"),s=u("hl-button");return o(),m(s,{class:"m-r-md",type:"primary","no-fill":"",round:""},{icon:n(()=>[e(i,null,{default:n(()=>[e(a)]),_:1})]),default:n(()=>[e(g,{value:"LT",type:"danger",position:"rt",offset:["5px","5px"],round:""})]),_:1})}return C({render:h},{})}(),"hl-demo4":function(){const{resolveComponent:u,createVNode:e,createTextVNode:n,withCtx:o,Fragment:m,openBlock:h,createElementBlock:p}=f,d=n(" \u8BC4\u8BBA "),_=n(" \u56DE\u590D ");function a(g,s){const E=u("hl-badge"),b=u("hl-button");return h(),p(m,null,[e(b,{class:"m-r-md"},{default:o(()=>[d,e(E,{type:"danger",position:"rt",value:200,max:99,round:""})]),_:1}),e(b,{class:"m-r-md"},{default:o(()=>[_,e(E,{type:"danger",position:"rt",value:100,max:10,round:""})]),_:1})],64)}return C({render:a},{})}(),"hl-demo5":function(){const{createTextVNode:u,resolveComponent:e,withCtx:n,createVNode:o,Fragment:m,openBlock:h,createElementBlock:p}=f,d=u(" \u5C0F\u7EA2\u70B9"),_=u("\u6570\u636E\u67E5\u8BE2"),a=u("\u6570\u636E\u67E5\u8BE2 ");function i(s,E){const b=e("hl-badge"),F=e("hl-button");return h(),p(m,null,[o(F,{class:"m-r-md"},{default:n(()=>[d,o(b,{dot:"",type:"danger",position:"rt"},{default:n(()=>[_]),_:1})]),_:1}),o(F,{type:"primary",class:"m-r-md"},{default:n(()=>[o(b,{dot:"",class:"m-r-sm"}),a]),_:1})],64)}return C({render:i},{})}()}},R=t("h1",null,"Badge \u5FBD\u7AE0",-1),j=t("p",null,"\u5FBD\u7AE0\uFF08Badge\uFF09\u662F\u4E00\u79CD\u5C0F\u578B\u7684\u7528\u4E8E\u8BA1\u6570\u548C\u6253\u6807\u7B7E\u7684\u7EC4\u4EF6\u3002",-1),$=t("div",null,[t("p",null,[l("\u5B9A\u4E49 "),t("code",null,"value"),l(" \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 "),t("code",null,"number"),l(" \u6216\u8005 "),t("code",null,"string"),l("\u3002")])],-1),P=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-row align="center">
    <hl-col span="col-lg-12">
      <p>Number</p>
      <hl-badge :value="1" type="primary" class="m-r-md" />
      <hl-badge :value="2" type="primary" outline class="m-r-md" />
      <hl-badge :value="3" type="primary" round class="m-r-md" />
    </hl-col>
    <hl-col span="col-lg-12">
      <p>String</p>
      <hl-badge value="Badge" type="primary" class="m-r-md" />
      <hl-badge
        value="Badge Outline"
        type="primary"
        outline
        class="m-r-md"
      />
      <hl-badge
        value="Badge Round"
        type="primary"
        round
        class="m-r-md"
      />
    </hl-col>
  </hl-row>
</template>
`)],-1),O=t("h2",{id:"hui-zhang-yan-se"},[t("a",{class:"header-anchor",href:"#hui-zhang-yan-se"}),l(" \u5FBD\u7AE0\u989C\u8272")],-1),Q=t("p",null,[t("code",null,"Badge"),l(" \u7EC4\u4EF6\u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002")],-1),S=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-badge value="primary" type="primary" class="m-r-md" />
  <hl-badge value="success" type="success" class="m-r-md" />
  <hl-badge value="danger" type="danger" class="m-r-md" />
  <hl-badge value="warning" type="warning" class="m-r-md" />
  <hl-badge value="info" type="info" class="m-r-md" />
</template>
`)],-1),W=t("h2",{id:"xuan-fu-wei-zhi"},[t("a",{class:"header-anchor",href:"#xuan-fu-wei-zhi"}),l(" \u60AC\u6D6E\u4F4D\u7F6E")],-1),G=t("p",null,[l("\u8BBE\u7F6E "),t("code",null,"position"),l("\u5C5E\u6027\u53EF\u4EE5\u4F7F "),t("code",null,"Badge"),l(" \u60AC\u6D6E\u5728\u7236\u5143\u7D20\u7684\u56DB\u4E2A\u89D2\u4E0A\u3002")],-1),X=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md">\u5DE6\u4E0A\u60AC\u6D6E<hl-badge value="LT" type="danger" position="lt" round /></hl-button>
  <hl-button class="m-r-md">\u5DE6\u4E0B\u60AC\u6D6E<hl-badge value="LB" type="danger" position="lb" round /></hl-button>
  <hl-button class="m-r-md">\u53F3\u4E0A\u60AC\u6D6E<hl-badge value="RT" type="danger" position="rt" round /></hl-button>
  <hl-button class="m-r-md">\u53F3\u4E0B\u60AC\u6D6E<hl-badge value="RB" type="danger" position="rb" round /></hl-button>
</template>
`)],-1),Y=t("h2",{id:"shou-dong-kong-zhi-xuan-fu-wei-zhi"},[t("a",{class:"header-anchor",href:"#shou-dong-kong-zhi-xuan-fu-wei-zhi"}),l(" \u624B\u52A8\u63A7\u5236\u60AC\u6D6E\u4F4D\u7F6E")],-1),q=t("p",null,[l("\u8BBE\u7F6E "),t("code",null,"offset"),l("\u5C5E\u6027\u4E3A\u6570\u7EC4\u7C7B\u578B\uFF0C\u53EF\u4EE5\u63A7\u5236 "),t("code",null,"Badge"),l("\u7684\u7CBE\u786E\u4F4D\u7F6E\u3002")],-1),H=t("div",null,[t("p",null,"\u6570\u7EC4\u63A5\u65364\u4E2A\u503C\uFF0C\u987A\u5E8F\u4E3A\uFF1Atop\u3001right\u3001bottom\u3001left")],-1),I=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md" type="primary" no-fill round>
    <template #icon>
      <hl-icon><two-search /></hl-icon>
    </template>
    <hl-badge value="LT" type="danger" position="rt" :offset="['5px','5px']" round />
  </hl-button>
</template>
`)],-1),J=t("h2",{id:"zui-da-zhi"},[t("a",{class:"header-anchor",href:"#zui-da-zhi"}),l(" \u6700\u5927\u503C")],-1),K=t("p",null,[t("code",null,"max"),l("\u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u6700\u5927\u503C\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u53EA\u6709\u5F53"),t("code",null,"value"),l("\u4E3A"),t("code",null,"Number"),l("\u65F6\uFF0C\u5B83\u624D\u4F1A\u751F\u6548\u3002")],-1),M=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),U=t("h2",{id:"yuan-dian-hui-zhang"},[t("a",{class:"header-anchor",href:"#yuan-dian-hui-zhang"}),l(" \u5706\u70B9\u5FBD\u7AE0")],-1),Z=t("p",null,[l("\u8BBE\u7F6E"),t("code",null,"dot"),l("\u5C5E\u6027\u53EF\u4F7F\u5FBD\u7AE0\u7EC4\u4EF6\u53D8\u6210\u4E00\u4E2A 8 x 8 \u50CF\u7D20\u7684\u5706\u70B9\u3002")],-1),tt=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md">
    \u5C0F\u7EA2\u70B9<hl-badge dot type="danger" position="rt">\u6570\u636E\u67E5\u8BE2</hl-badge>
  </hl-button>

  <hl-button type="primary" class="m-r-md">
    <hl-badge dot class="m-r-sm" />\u6570\u636E\u67E5\u8BE2
  </hl-button>
</template>
`)],-1),et=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u663E\u793A\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max</td><td>\u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A &#39;{max}+&#39;\uFF0C\u8981\u6C42 value \u662F Number \u7C7B\u578B</td><td>number</td><td>\u2014</td><td>99</td></tr><tr><td>dot</td><td>\u5C0F\u5706\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u662F\u5426\u662F\u5706\u5F62</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>hidden</td><td>\u9690\u85CF badge</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>primary / success / warning / danger / info</td><td>\u2014</td></tr><tr><td>position</td><td>\u4F4D\u7F6E</td><td>string</td><td>lt / rt / lb / rb</td><td>\u2014</td></tr><tr><td>offset</td><td>\u4F4D\u7F6E\u504F\u79FB\u8BBE\u7F6E</td><td>array</td><td>\u2014</td><td>-</td></tr></tbody></table>',2);function nt(u,e,n,o,m,h){const p=B("hl-demo0"),d=B("demo-block"),_=B("hl-demo1"),a=B("hl-demo2"),i=B("hl-demo3"),g=B("hl-demo4"),s=B("hl-demo5"),E=B("right-nav");return w(),N(V,null,[t("section",null,[R,j,c(d,{fs:""},{source:r(()=>[c(p)]),highlight:r(()=>[P]),default:r(()=>[$]),_:1}),O,Q,c(d,{fs:""},{source:r(()=>[c(_)]),highlight:r(()=>[S]),_:1}),W,G,c(d,{fs:""},{source:r(()=>[c(a)]),highlight:r(()=>[X]),_:1}),Y,q,c(d,{fs:""},{source:r(()=>[c(i)]),highlight:r(()=>[I]),default:r(()=>[H]),_:1}),J,K,c(d,{fs:""},{source:r(()=>[c(g)]),highlight:r(()=>[M]),_:1}),U,Z,c(d,{fs:""},{source:r(()=>[c(s)]),highlight:r(()=>[tt]),_:1}),et]),c(E)],64)}var st=T(L,[["render",nt]]);export{st as default};
