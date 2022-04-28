var A=Object.defineProperty;var B=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var b=(o,t,e)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,v=(o,t)=>{for(var e in t||(t={}))k.call(t,e)&&b(o,e,t[e]);if(B)for(var e of B(t))z.call(t,e)&&b(o,e,t[e]);return o};import{F,L as y,W as P,Q as u,X as p,P as g,a2 as V,aJ as C,M as D,o as M}from"./vue.30e377ec.js";import{_ as N,H as T}from"./index.58703c48.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.51d8bafe.js";const W={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:o,createVNode:t,withCtx:e,createTextVNode:i,openBlock:m,createBlock:_}=C,d=i("\u5207\u6362\u8BED\u8A00");function r(s,n){const l=o("hl-pagination"),f=o("hl-config-provider"),h=o("hl-button"),x=o("hl-group");return m(),_(x,null,{default:e(()=>[t(f,{locale:s.locale2},{default:e(()=>[t(l,{layout:"prev, pager, next, total",total:50})]),_:1},8,["locale"]),t(h,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:s.toggle},{default:e(()=>[d]),_:1},8,["onClick"])]),_:1})}const{defineComponent:c,ref:a}=C,E=c({setup(){const s=a(""),n=a({name:"zh-cn",hl:{pagination:{goto:"\u53BB\u5F80",pagesize:"\u5927\u5C0F",total:"\u5171 {total}",pageClassifier:"",deprecationWarning:"\u5E9F\u5F03"}}}),l=a({name:"en",hl:{pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the Pagination documentation for more details"}}});return{value1:s,locale1:n,locale2:l,toggle:()=>{const h=n.value;n.value=l.value,l.value=h}}}});return v({render:r},E)}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:t,withCtx:e,createVNode:i,openBlock:m,createElementBlock:_}=C,d=o("open");function r(n,l){const f=t("hl-button"),h=t("hl-config-provider");return m(),_("div",null,[i(h,{message:n.config},{default:e(()=>[i(f,{onClick:n.open},{default:e(()=>[d]),_:1},8,["onClick"])]),_:1},8,["message"])])}const{defineComponent:c,reactive:a}=C,{HlMessage:E}=T,s=c({setup(){return{config:a({max:3}),open:()=>{E("this is a message.")}}}});return v({render:r},s)}()}},j=u("h1",null,"Config Provider \u5168\u5C40\u914D\u7F6E",-1),w=u("p",null,"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\uFF0CConfig Provider \u4F7F\u7528\u4E86 Vue \u7684 provide/inject \u7279\u6027",-1),H=u("h2",{id:"guo-ji-hua-xiang-guan-pei-zhi"},[u("a",{class:"header-anchor",href:"#guo-ji-hua-xiang-guan-pei-zhi"}),D(" \u56FD\u9645\u5316 \u76F8\u5173\u914D\u7F6E")],-1),$=u("p",null,"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",-1),G=u("div",null,[u("p",null,"\u4F7F\u7528\u4E24\u4E2A\u5C5E\u6027\u6765\u63D0\u4F9B i18n \u76F8\u5173\u914D\u7F6E")],-1),I=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group>
    <hl-config-provider :locale="locale2">
      <hl-pagination layout="prev, pager, next, total" :total="50" />
    </hl-config-provider>
    <hl-button style="margin-left: 8px; vertical-align: middle" @click="toggle">\u5207\u6362\u8BED\u8A00</hl-button>
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref('')
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

    return {
      value1,
      locale1,
      locale2,
      toggle,
    }
  },
})
<\/script>
`)],-1),L=u("h2",{id:"message-xiang-guan-pei-zhi"},[u("a",{class:"header-anchor",href:"#message-xiang-guan-pei-zhi"}),D(" Message \u76F8\u5173\u914D\u7F6E")],-1),O=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <hl-config-provider :message="config">
      <hl-button @click="open">open</hl-button>
    </hl-config-provider>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { HlMessage } from 'hongluan-ui'

export default defineComponent({
  setup() {
    const config = reactive({
      max: 3,
    })
    const open = () => {
      HlMessage('this is a message.')
    }
    return {
      config,
      open,
    }
  },
})
<\/script>
`)],-1),Q=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>locale</td><td>\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61</td><td>Object&lt;Language&gt;</td><td>zh-cn / zh-tw / en</td><td>Chinese</td></tr><tr><td>size</td><td>\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>zIndex</td><td>\u5168\u5C40\u521D\u59CB\u5316zIndex</td><td>number</td><td>-</td><td>-</td></tr><tr><td>message</td><td>Message\u76F8\u5173\u914D\u7F6E, <a href="#message-attributes">\u53C2\u89C1\u4E0B\u8868</a></td><td>MessageGlobalConfig</td><td>-</td><td>\u53C2\u89C1\u4E0B\u8868</td></tr><tr><td>experimental-features</td><td>\u5B9E\u9A8C\u7279\u6027\uFF0C\u9ED8\u8BA4\u5168\u90E8\u914D\u7F6E\u4E3Afalse</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="message-attributes"><a class="header-anchor" href="#message-attributes"></a> Message Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max</td><td>\u540C\u65F6\u663E\u793AMessage\u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table>',6);function X(o,t,e,i,m,_){const d=F("hl-demo0"),r=F("demo-block"),c=F("hl-demo1"),a=F("right-nav");return y(),P(V,null,[u("section",null,[j,w,H,$,p(r,{fs:""},{source:g(()=>[p(d)]),highlight:g(()=>[I]),default:g(()=>[G]),_:1}),L,p(r,{fs:""},{source:g(()=>[p(c)]),highlight:g(()=>[O]),_:1}),Q]),p(a)],64)}var Y=N(W,[["render",X]]);export{Y as default};
