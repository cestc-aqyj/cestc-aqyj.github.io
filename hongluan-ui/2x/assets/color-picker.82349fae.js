var V=Object.defineProperty;var A=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var D=(u,o,r)=>o in u?V(u,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[o]=r,B=(u,o)=>{for(var r in o||(o={}))y.call(o,r)&&D(u,r,o[r]);if(A)for(var r of A(o))w.call(o,r)&&D(u,r,o[r]);return u};import{H as C,L as P,W as S,Q as e,X as i,P as m,a4 as z,S as b,o as N,aJ as c}from"./vue.059774a0.js";import{_ as U}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";import"./hongluan-icons.5b925e95.js";const j={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:o,createVNode:r,Fragment:h,openBlock:_,createElementBlock:a}=c,f={class:"m-b-md"},l=u("span",{class:"m-r-sm"},"\u6709\u9ED8\u8BA4\u503C",-1),d=u("span",{class:"m-r-sm"},"\u65E0\u9ED8\u8BA4\u503C",-1);function n(p,E){const g=o("hl-color-picker");return _(),a(h,null,[u("div",f,[l,r(g,{modelValue:p.color1,"onUpdate:modelValue":E[0]||(E[0]=v=>p.color1=v)},null,8,["modelValue"])]),u("div",null,[d,r(g,{modelValue:p.color2,"onUpdate:modelValue":E[1]||(E[1]=v=>p.color2=v)},null,8,["modelValue"])])],64)}const{defineComponent:t}=c,{ref:s}=c;return B({render:n},t({setup(p,{expose:E}){E();const g=s("#409EFF"),v=s(),k={color1:g,color2:v,ref:s};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}))}(),"hl-demo1":function(){const{resolveComponent:u,openBlock:o,createBlock:r}=c;function h(l,d){const n=u("hl-color-picker");return o(),r(n,{modelValue:l.color,"onUpdate:modelValue":d[0]||(d[0]=t=>l.color=t),"show-alpha":""},null,8,["modelValue"])}const{defineComponent:_}=c,{ref:a}=c;return B({render:h},_({setup(l,{expose:d}){d();const t={color:a("rgba(19, 206, 102, 0.8)"),ref:a};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo2":function(){const{resolveComponent:u,openBlock:o,createBlock:r}=c;function h(l,d){const n=u("hl-color-picker");return o(),r(n,{modelValue:l.color,"onUpdate:modelValue":d[0]||(d[0]=t=>l.color=t),"show-alpha":"",predefine:l.predefineColors},null,8,["modelValue","predefine"])}const{defineComponent:_}=c,{ref:a}=c;return B({render:h},_({setup(l,{expose:d}){d();const n=a("rgba(255, 69, 0, 0.68)"),t=a(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]),s={color:n,predefineColors:t,ref:a};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}))}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:o,withCtx:r,openBlock:h,createBlock:_}=c;function a(n,t){const s=u("hl-color-picker"),F=u("hl-group");return h(),_(F,{indent:"var(--md)"},{default:r(()=>[o(s,{modelValue:n.color,"onUpdate:modelValue":t[0]||(t[0]=p=>n.color=p),size:"lg"},null,8,["modelValue"]),o(s,{modelValue:n.color,"onUpdate:modelValue":t[1]||(t[1]=p=>n.color=p)},null,8,["modelValue"]),o(s,{modelValue:n.color,"onUpdate:modelValue":t[2]||(t[2]=p=>n.color=p),size:"sm"},null,8,["modelValue"])]),_:1})}const{defineComponent:f}=c,{ref:l}=c;return B({render:a},f({setup(n,{expose:t}){t();const F={color:l("409EFF"),ref:l};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}()}},x=e("h1",null,"ColorPicker \u989C\u8272\u9009\u62E9\u5668",-1),O=e("p",null,"\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002",-1),$=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),b(" \u57FA\u7840\u7528\u6CD5")],-1),L=e("div",null,[e("p",null,"\u4F7F\u7528 v-model \u4E0E Vue \u5B9E\u4F8B\u4E2D\u7684\u4E00\u4E2A\u53D8\u91CF\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\uFF0C\u7ED1\u5B9A\u7684\u53D8\u91CF\u9700\u8981\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u3002")],-1),Q=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="m-b-md">
    <span class="m-r-sm">\u6709\u9ED8\u8BA4\u503C</span>
    <hl-color-picker v-model="color1" />
  </div>
  <div>
    <span class="m-r-sm">\u65E0\u9ED8\u8BA4\u503C</span>
    <hl-color-picker v-model="color2" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color1 = ref('#409EFF')
const color2 = ref()

<\/script>
`)],-1),W=e("h2",{id:"xuan-ze-tou-ming-du"},[e("a",{class:"header-anchor",href:"#xuan-ze-tou-ming-du"}),b(" \u9009\u62E9\u900F\u660E\u5EA6")],-1),X=e("div",null,[e("p",null,"ColorPicker \u652F\u6301\u666E\u901A\u989C\u8272\uFF0C\u4E5F\u652F\u6301\u5E26 Alpha \u901A\u9053\u7684\u989C\u8272\uFF0C \u8981\u542F\u7528 Alpha \u9009\u62E9\uFF0C\u53EA\u9700\u6DFB\u52A0 show-alpha \u5C5E\u6027\u3002")],-1),H=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-color-picker v-model="color" show-alpha />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('rgba(19, 206, 102, 0.8)')

<\/script>
`)],-1),J=e("h2",{id:"yu-ding-yi-yan-se"},[e("a",{class:"header-anchor",href:"#yu-ding-yi-yan-se"}),b(" \u9884\u5B9A\u4E49\u989C\u8272")],-1),q=e("div",null,[e("p",null,"\u9884\u5B9A\u4E49\u989C\u8272")],-1),G=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-color-picker v-model="color" show-alpha :predefine="predefineColors" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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
<\/script>
`)],-1),I=e("h2",{id:"bu-tong-chi-cun"},[e("a",{class:"header-anchor",href:"#bu-tong-chi-cun"}),b(" \u4E0D\u540C\u5C3A\u5BF8")],-1),K=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-group indent="var(--md)">
    <hl-color-picker v-model="color" size="lg" />
    <hl-color-picker v-model="color" />
    <hl-color-picker v-model="color" size="sm" />
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('409EFF')

<\/script>
`)],-1),M=N('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>large / default /small</td><td>\u2014</td></tr><tr><td>show-alpha</td><td>\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>color-format</td><td>\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex (\u5F53 show-alpha \u4E3A false) / rgb (\u5F53 show-alpha \u4E3A true)</td></tr><tr><td>popper-class</td><td>\u989C\u8272\u9009\u62E9\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>predefine</td><td>\u9884\u5B9A\u4E49\u989C\u8272</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u503C</td></tr><tr><td>active-change</td><td>\u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u503C</td></tr></tbody></table>',4);function R(u,o,r,h,_,a){const f=C("hl-demo0"),l=C("demo-block"),d=C("hl-demo1"),n=C("hl-demo2"),t=C("hl-demo3"),s=C("right-nav");return P(),S(z,null,[e("section",null,[x,O,$,i(l,{fs:""},{source:m(()=>[i(f)]),highlight:m(()=>[Q]),default:m(()=>[L]),_:1}),W,i(l,{fs:""},{source:m(()=>[i(d)]),highlight:m(()=>[H]),default:m(()=>[X]),_:1}),J,i(l,{fs:""},{source:m(()=>[i(n)]),highlight:m(()=>[G]),default:m(()=>[q]),_:1}),I,i(l,{fs:""},{source:m(()=>[i(t)]),highlight:m(()=>[K]),_:1}),M]),i(s)],64)}var ue=U(j,[["render",R]]);export{ue as default};
