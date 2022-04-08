var D=Object.defineProperty;var A=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var b=(t,e,u)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,F=(t,e)=>{for(var u in e||(e={}))V.call(e,u)&&b(t,u,e[u]);if(A)for(var u of A(e))y.call(e,u)&&b(t,u,e[u]);return t};import{F as E,L as w,W as j,Q as o,X as h,P as s,a2 as x,aJ as _,M as g,o as z}from"./vue.fdea90c3.js";import{_ as N}from"./index.d7b78d50.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const U={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:t,resolveComponent:e,createVNode:u,Fragment:i,openBlock:m,createElementBlock:a}=_,p={class:"m-b-md"},l=t("span",{class:"m-r-sm"},"\u6709\u9ED8\u8BA4\u503C",-1),d=t("span",{class:"m-r-sm"},"\u65E0\u9ED8\u8BA4\u503C",-1);function r(c,C){const k=e("hl-color-picker");return m(),a(i,null,[t("div",p,[l,u(k,{modelValue:c.color1,"onUpdate:modelValue":C[0]||(C[0]=B=>c.color1=B)},null,8,["modelValue"])]),t("div",null,[d,u(k,{modelValue:c.color2,"onUpdate:modelValue":C[1]||(C[1]=B=>c.color2=B)},null,8,["modelValue"])])],64)}const{defineComponent:n,ref:f}=_,v=n({setup(){const c=f("#409EFF"),C=f();return{color1:c,color2:C}}});return F({render:r},v)}(),"hl-demo1":function(){const{resolveComponent:t,openBlock:e,createBlock:u}=_;function i(l,d){const r=t("hl-color-picker");return e(),u(r,{modelValue:l.color,"onUpdate:modelValue":d[0]||(d[0]=n=>l.color=n),"show-alpha":""},null,8,["modelValue"])}const{defineComponent:m,ref:a}=_,p=m({setup(){return{color:a("rgba(19, 206, 102, 0.8)")}}});return F({render:i},p)}(),"hl-demo2":function(){const{resolveComponent:t,openBlock:e,createBlock:u}=_;function i(l,d){const r=t("hl-color-picker");return e(),u(r,{modelValue:l.color,"onUpdate:modelValue":d[0]||(d[0]=n=>l.color=n),"show-alpha":"",predefine:l.predefineColors},null,8,["modelValue","predefine"])}const{defineComponent:m,ref:a}=_,p=m({setup(){const l=a("rgba(255, 69, 0, 0.68)"),d=a(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return{color:l,predefineColors:d}}});return F({render:i},p)}(),"hl-demo3":function(){const{resolveComponent:t,createVNode:e,withCtx:u,openBlock:i,createBlock:m}=_;function a(r,n){const f=t("hl-color-picker"),v=t("hl-group");return i(),m(v,{indent:"var(--md)"},{default:u(()=>[e(f,{modelValue:r.color,"onUpdate:modelValue":n[0]||(n[0]=c=>r.color=c),size:"lg"},null,8,["modelValue"]),e(f,{modelValue:r.color,"onUpdate:modelValue":n[1]||(n[1]=c=>r.color=c)},null,8,["modelValue"]),e(f,{modelValue:r.color,"onUpdate:modelValue":n[2]||(n[2]=c=>r.color=c),size:"sm"},null,8,["modelValue"])]),_:1})}const{defineComponent:p,ref:l}=_,d=p({setup(){return{color:l("409EFF")}}});return F({render:a},d)}()}},P=o("h1",null,"ColorPicker \u989C\u8272\u9009\u62E9\u5668",-1),$=o("p",null,"\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002",-1),L=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),g(" \u57FA\u7840\u7528\u6CD5")],-1),Q=o("div",null,[o("p",null,"\u4F7F\u7528 v-model \u4E0E Vue \u5B9E\u4F8B\u4E2D\u7684\u4E00\u4E2A\u53D8\u91CF\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\uFF0C\u7ED1\u5B9A\u7684\u53D8\u91CF\u9700\u8981\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u3002")],-1),W=o("pre",null,[o("code",{class:"html"},` <template>
  <div class="m-b-md">
    <span class="m-r-sm">\u6709\u9ED8\u8BA4\u503C</span>
    <hl-color-picker v-model="color1" />
  </div>
  <div>
    <span class="m-r-sm">\u65E0\u9ED8\u8BA4\u503C</span>
    <hl-color-picker v-model="color2" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const color1 = ref('#409EFF')
    const color2 = ref()
    return {
      color1,
      color2,
    }
  },
})
<\/script>
`)],-1),X=o("h2",{id:"xuan-ze-tou-ming-du"},[o("a",{class:"header-anchor",href:"#xuan-ze-tou-ming-du"}),g(" \u9009\u62E9\u900F\u660E\u5EA6")],-1),J=o("div",null,[o("p",null,"ColorPicker \u652F\u6301\u666E\u901A\u989C\u8272\uFF0C\u4E5F\u652F\u6301\u5E26 Alpha \u901A\u9053\u7684\u989C\u8272\uFF0C \u8981\u542F\u7528 Alpha \u9009\u62E9\uFF0C\u53EA\u9700\u6DFB\u52A0 show-alpha \u5C5E\u6027\u3002")],-1),M=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-color-picker v-model="color" show-alpha />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {

    const color = ref('rgba(19, 206, 102, 0.8)')
    return {
      color,
    }
  },
})
<\/script>
`)],-1),q=o("h2",{id:"yu-ding-yi-yan-se"},[o("a",{class:"header-anchor",href:"#yu-ding-yi-yan-se"}),g(" \u9884\u5B9A\u4E49\u989C\u8272")],-1),G=o("div",null,[o("p",null,"\u9884\u5B9A\u4E49\u989C\u8272")],-1),H=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-color-picker v-model="color" show-alpha :predefine="predefineColors" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {

    const color = ref('rgba(255, 69, 0, 0.68)')
    const predefineColors = ref([
      '#ff4500',
      '#ff8c00',
      '#ffd700',
      '#90ee90',
      '#00ced1',
      '#1e90ff',
      '#c71585',
      'rgba(255, 69, 0, 0.68)',
      'rgb(255, 120, 0)',
      'hsv(51, 100, 98)',
      'hsva(120, 40, 94, 0.5)',
      'hsl(181, 100%, 37%)',
      'hsla(209, 100%, 56%, 0.73)',
      '#c7158577',
    ])
    return {
      color,
      predefineColors,
    }
  },
})
<\/script>
`)],-1),I=o("h2",{id:"bu-tong-chi-cun"},[o("a",{class:"header-anchor",href:"#bu-tong-chi-cun"}),g(" \u4E0D\u540C\u5C3A\u5BF8")],-1),K=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group indent="var(--md)">
    <hl-color-picker v-model="color" size="lg" />
    <hl-color-picker v-model="color" />
    <hl-color-picker v-model="color" size="sm" />
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const color = ref('409EFF')
    return {
      color,
    }
  },
})
<\/script>
`)],-1),O=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>large / default /small</td><td>\u2014</td></tr><tr><td>show-alpha</td><td>\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>color-format</td><td>\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex (\u5F53 show-alpha \u4E3A false) / rgb (\u5F53 show-alpha \u4E3A true)</td></tr><tr><td>popper-class</td><td>\u989C\u8272\u9009\u62E9\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>predefine</td><td>\u9884\u5B9A\u4E49\u989C\u8272</td><td>array</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u503C</td></tr><tr><td>active-change</td><td>\u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u503C</td></tr></tbody></table>',4);function R(t,e,u,i,m,a){const p=E("hl-demo0"),l=E("demo-block"),d=E("hl-demo1"),r=E("hl-demo2"),n=E("hl-demo3"),f=E("right-nav");return w(),j(x,null,[o("section",null,[P,$,L,h(l,{fs:""},{source:s(()=>[h(p)]),highlight:s(()=>[W]),default:s(()=>[Q]),_:1}),X,h(l,{fs:""},{source:s(()=>[h(d)]),highlight:s(()=>[M]),default:s(()=>[J]),_:1}),q,h(l,{fs:""},{source:s(()=>[h(r)]),highlight:s(()=>[H]),default:s(()=>[G]),_:1}),I,h(l,{fs:""},{source:s(()=>[h(n)]),highlight:s(()=>[K]),_:1}),O]),h(f)],64)}var to=N(U,[["render",R]]);export{to as default};
