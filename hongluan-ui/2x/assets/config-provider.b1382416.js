var k=Object.defineProperty;var b=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var D=(o,t,e)=>t in o?k(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,B=(o,t)=>{for(var e in t||(t={}))z.call(t,e)&&D(o,e,t[e]);if(b)for(var e of b(t))y.call(t,e)&&D(o,e,t[e]);return o};import{H as E,L as P,W as V,Q as u,X as _,P as m,a4 as N,S as x,o as M,aJ as c}from"./vue.059774a0.js";import{_ as j,H}from"./index.c1538894.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";import"./hongluan-icons.5b925e95.js";const S={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:o,createVNode:t,withCtx:e,createTextVNode:d,openBlock:f,createBlock:F}=c,h=d("\u5207\u6362\u8BED\u8A00");function s(C,i){const a=o("hl-pagination"),r=o("hl-config-provider"),g=o("hl-button"),l=o("hl-group");return f(),F(l,null,{default:e(()=>[t(r,{locale:C.locale2},{default:e(()=>[t(a,{layout:"prev, pager, next, total",total:50})]),_:1},8,["locale"]),t(g,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:C.toggle},{default:e(()=>[h]),_:1},8,["onClick"])]),_:1})}const{defineComponent:p}=c,{ref:n}=c;return B({render:s},p({setup(C,{expose:i}){i();const a=n({name:"zh-cn",hl:{pagination:{goto:"\u53BB\u5F80",pagesize:"\u5927\u5C0F",total:"\u5171 {total}",pageClassifier:"",deprecationWarning:"\u5E9F\u5F03"}}}),r=n({name:"en",hl:{pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the Pagination documentation for more details"}}}),l={locale1:a,locale2:r,toggle:()=>{const A=a.value;a.value=r.value,r.value=A},ref:n};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:t,withCtx:e,createVNode:d,openBlock:f,createElementBlock:F}=c,h=o("open");function s(i,a){const r=t("hl-button"),g=t("hl-config-provider");return f(),F("div",null,[d(g,{message:i.config},{default:e(()=>[d(r,{onClick:i.open},{default:e(()=>[h]),_:1},8,["onClick"])]),_:1},8,["message"])])}const{defineComponent:p}=c,{reactive:n}=c,{HlMessage:v}=H;return B({render:s},p({setup(i,{expose:a}){a();const l={config:n({max:3}),open:()=>{v("this is a message.")},reactive:n,HlMessage:v};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}()}},T=u("h1",null,"Config Provider \u5168\u5C40\u914D\u7F6E",-1),W=u("p",null,"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\uFF0CConfig Provider \u4F7F\u7528\u4E86 Vue \u7684 provide/inject \u7279\u6027",-1),w=u("h2",{id:"guo-ji-hua-xiang-guan-pei-zhi"},[u("a",{class:"header-anchor",href:"#guo-ji-hua-xiang-guan-pei-zhi"}),x(" \u56FD\u9645\u5316 \u76F8\u5173\u914D\u7F6E")],-1),O=u("p",null,"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",-1),$=u("div",null,[u("p",null,"\u4F7F\u7528\u4E24\u4E2A\u5C5E\u6027\u6765\u63D0\u4F9B i18n \u76F8\u5173\u914D\u7F6E")],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group>
    <hl-config-provider :locale="locale2">
      <hl-pagination layout="prev, pager, next, total" :total="50" />
    </hl-config-provider>
    <hl-button style="margin-left: 8px; vertical-align: middle" @click="toggle">\u5207\u6362\u8BED\u8A00</hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const locale1 = ref({
  name: 'zh-cn',
  hl: {
    pagination: {
      goto: '\u53BB\u5F80',
      pagesize: '\u5927\u5C0F',
      total: '\u5171 {total}',
      pageClassifier: '',
      deprecationWarning: '\u5E9F\u5F03',
    },
  },
})
const locale2 = ref({
  name: 'en',
  hl: {
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      deprecationWarning: 'Deprecated usages detected, please refer to the Pagination documentation for more details',
    },
  },
})
const toggle = () => {
  const temp = locale1.value
  locale1.value = locale2.value
  locale2.value = temp
}

<\/script>
`)],-1),I=u("h2",{id:"message-xiang-guan-pei-zhi"},[u("a",{class:"header-anchor",href:"#message-xiang-guan-pei-zhi"}),x(" Message \u76F8\u5173\u914D\u7F6E")],-1),L=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <hl-config-provider :message="config">
      <hl-button @click="open">open</hl-button>
    </hl-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { HlMessage } from 'hongluan-ui'

const config = reactive({
  max: 3,
})
const open = () => {
  HlMessage('this is a message.')
}

<\/script>
`)],-1),Q=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>locale</td><td>\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61</td><td>Object&lt;Language&gt;</td><td>zh-cn / zh-tw / en</td><td>Chinese</td></tr><tr><td>size</td><td>\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>zIndex</td><td>\u5168\u5C40\u521D\u59CB\u5316zIndex</td><td>number</td><td>-</td><td>-</td></tr><tr><td>message</td><td>Message\u76F8\u5173\u914D\u7F6E, <a href="#message-attributes">\u53C2\u89C1\u4E0B\u8868</a></td><td>MessageGlobalConfig</td><td>-</td><td>\u53C2\u89C1\u4E0B\u8868</td></tr><tr><td>experimental-features</td><td>\u5B9E\u9A8C\u7279\u6027\uFF0C\u9ED8\u8BA4\u5168\u90E8\u914D\u7F6E\u4E3Afalse</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="message-attributes"><a class="header-anchor" href="#message-attributes"></a> Message Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max</td><td>\u540C\u65F6\u663E\u793AMessage\u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table>',6);function X(o,t,e,d,f,F){const h=E("hl-demo0"),s=E("demo-block"),p=E("hl-demo1"),n=E("right-nav");return P(),V(N,null,[u("section",null,[T,W,w,O,_(s,{fs:""},{source:m(()=>[_(h)]),highlight:m(()=>[G]),default:m(()=>[$]),_:1}),I,_(s,{fs:""},{source:m(()=>[_(p)]),highlight:m(()=>[L]),_:1}),Q]),_(n)],64)}var Z=j(S,[["render",X]]);export{Z as default};
