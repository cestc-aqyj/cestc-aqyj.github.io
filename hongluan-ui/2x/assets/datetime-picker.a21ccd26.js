import{p as D,R as p,F as s,L as v,C as w,P as o,X as d,V as f,Q as t,W as F,a1 as k,M as l,o as E}from"./vue.45a90dcf.js";const y=t("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),T=t("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),V=t("p",{class:"m-b-sm"},"\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u95F4",-1),x=D({setup(b){const u=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const n=new Date;return n.setTime(n.getTime()-864e5),n})()},{text:"\u4E00\u5468\u524D",value:(()=>{const n=new Date;return n.setTime(n.getTime()-6048e5),n})()}],h=new Date(2e3,1,1,12,0,0),c=p(""),a=p(""),e=p("");return(n,r)=>{const m=s("hl-date-picker"),i=s("hl-col"),_=s("hl-row");return v(),w(_,{gap:"var(--lg)"},{default:o(()=>[d(i,{span:"lg:col-8"},{default:o(()=>[y,d(m,{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=g=>c.value=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",block:""},null,8,["modelValue"])]),_:1}),d(i,{span:"lg:col-8"},{default:o(()=>[T,d(m,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=g=>a.value=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",shortcuts:u,block:""},null,8,["modelValue"])]),_:1}),d(i,{span:"lg:col-8"},{default:o(()=>[V,d(m,{modelValue:e.value,"onUpdate:modelValue":r[2]||(r[2]=g=>e.value=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4","default-time":f(h),block:""},null,8,["modelValue","default-time"])]),_:1})]),_:1})}}});var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const C=t("p",{class:"m-b-md"},"\u9ED8\u8BA4",-1),q=t("p",{class:"m-b-md"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),A=D({setup(b){const u=[{text:"\u6700\u8FD1\u4E00\u5468",value:()=>{const a=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,a]}},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:()=>{const a=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,a]}},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:()=>{const a=new Date,e=new Date;return e.setTime(e.getTime()-7776e6),[e,a]}}],h=p([new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)]),c=p("");return(a,e)=>{const n=s("hl-date-picker"),r=s("hl-col"),m=s("hl-row");return v(),w(m,{align:"items-center",gap:"var(--lg)"},{default:o(()=>[d(r,{span:"col"},{default:o(()=>[C,d(n,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=i=>h.value=i),type:"datetimerange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),d(r,{span:"col"},{default:o(()=>[q,d(n,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=i=>c.value=i),type:"datetimerange",shortcuts:u,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1})]),_:1})}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const $=t("p",{class:"m-b-md"},"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00",-1),j=t("p",{class:"m-b-md"},"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00",-1),S=D({setup(b){const u=[new Date(2e3,1,1,12,0,0)],h=[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)],c=p(""),a=p("");return(e,n)=>{const r=s("hl-date-picker"),m=s("hl-col"),i=s("hl-row");return v(),w(i,{align:"items-center",gap:"var(--lg)"},{default:o(()=>[d(m,{span:"col"},{default:o(()=>[$,d(r,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=_=>c.value=_),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":u,block:""},null,8,["modelValue"])]),_:1}),d(m,{span:"col"},{default:o(()=>[j,d(r,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=_=>a.value=_),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":h,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const M=t("h1",null,"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668",-1),U=t("p",null,[l("\u4E3A"),t("code",null,"hl-date-picker"),l("\u8BBE\u7F6E"),t("code",null,"type"),l("\u5C5E\u6027\u4E3A"),t("code",null,"datetime"),l("\uFF0C\u5373\u53EF\u5728\u540C\u4E00\u4E2A\u9009\u62E9\u5668\u91CC\u540C\u65F6\u8FDB\u884C\u65E5\u671F\u548C\u65F6\u95F4\u7684\u9009\u62E9\u3002\u5FEB\u6377\u9009\u9879\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0E Date Picker \u76F8\u540C\u3002")],-1),N=t("div",null,[t("p",null,"DateTimePicker \u7531 \u65F6\u95F4 \u548C \u65E5\u671F \u9009\u62E9\u5668\u6D3E\u751F\u800C\u6765\uFF0C\u76F8\u5173\u5C5E\u6027\u53EF\u53C2\u8003\u6587\u6863\u8BF4\u660E\u3002")],-1),Y=t("h2",{id:"ri-qi-he-shi-jian-fan-wei"},[t("a",{class:"header-anchor",href:"#ri-qi-he-shi-jian-fan-wei"}),l(" \u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")],-1),O=t("div",null,[t("p",null,[l("\u8BBE\u7F6E"),t("code",null,"type"),l("\u4E3A"),t("code",null,"datetimerange"),l("\u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")])],-1),R=t("h2",{id:"mo-ren-de-qi-shi-yu-jie-shu-shi-ke"},[t("a",{class:"header-anchor",href:"#mo-ren-de-qi-shi-yu-jie-shu-shi-ke"}),l(" \u9ED8\u8BA4\u7684\u8D77\u59CB\u4E0E\u7ED3\u675F\u65F6\u523B")],-1),H=t("div",null,[t("p",null,[l("\u4F7F\u7528"),t("code",null,"datetimerange"),l("\u8FDB\u884C\u8303\u56F4\u9009\u62E9\u65F6\uFF0C\u5728\u65E5\u671F\u9009\u62E9\u9762\u677F\u4E2D\u9009\u5B9A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65E5\u671F\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u8BE5\u65E5\u671F\u7684"),t("code",null,"00:00:00"),l("\u4F5C\u4E3A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65F6\u523B\uFF1B\u901A\u8FC7\u9009\u9879"),t("code",null,"default-time"),l("\u53EF\u4EE5\u63A7\u5236\u9009\u4E2D\u8D77\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\u65F6\u6240\u4F7F\u7528\u7684\u5177\u4F53\u65F6\u523B\u3002"),t("code",null,"default-time"),l("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u7B2C\u4E00\u9879\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\u3002")])],-1),L=E('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>date(DateTimePicker) / array(DateTimeRangePicker)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>time-arrow-control</td><td>\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/month/date/week/ datetime/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD HH:mm:ss</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>popper-class</td><td>DateTimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u9009\u4E2D\u65E5\u671F\u540E\u7684\u9ED8\u8BA4\u5177\u4F53\u65F6\u523B</td><td>Date / \u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate[]</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate \u5BF9\u8C61\uFF1B\u8303\u56F4\u9009\u62E9\u65F6\uFF1A\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u6BCF\u9879\u503C\u4E3A Date \u5BF9\u8C61\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-class-name</td><td>\u8BBE\u7F6E\u65E5\u671F\u7684 className</td><td>Function(Date)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>id</td><td>input\u8F93\u5165\u6846id\u5C5E\u6027\u503C</td><td>string / array(string)</td><td>\u65E5\u671F\u9009\u62E9 <code>id=&quot;my-date&quot;</code>\uFF0C\u65E5\u671F\u8303\u56F4\u9009\u62E9 <code>:id=&quot;[&#39;my-range-start&#39;, &#39;my-range-end&#39;]&quot;</code></td><td>-</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>datetimerange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr><tr><td>visible-change</td><td>\u65E5\u671F\u9009\u62E9\u5668\u663E\u793A\u6216\u8005\u9690\u85CF\u65F6\u89E6\u53D1</td><td>true / false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr></tbody></table><h2 id="slots-2"><a class="header-anchor" href="#slots-2"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>range-separator</td><td>\u81EA\u5B9A\u4E49\u5206\u9694\u7B26</td></tr></tbody></table>',10),W={setup(b){const u={"../../../examples/datetime-picker/basic.vue":B,"../../../examples/datetime-picker/datetimerange.vue":P,"../../../examples/datetime-picker/default-time.vue":z};return(h,c)=>{const a=s("demo-block"),e=s("right-nav");return v(),F(k,null,[t("section",null,[M,U,d(a,{fs:"",demos:f(u),"path-name":"datetime-picker/basic","source-code":`<template>
  <hl-row gap="var(--lg)">
    <hl-col span="lg:col-8">
      <p class="m-b-sm">\u9ED8\u8BA4</p>
      <hl-date-picker v-model="value1" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" block />
    </hl-col>
    <hl-col span="lg:col-8">
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker v-model="value2" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" :shortcuts="shortcuts" block />
    </hl-col>
    <hl-col span="lg:col-8">
      <p class="m-b-sm">\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u95F4</p>
      <hl-date-picker v-model="value3" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" :default-time="defaultTime" block />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u4ECA\u5929',
    value: new Date(),
  },
  {
    text: '\u6628\u5929',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    })(),
  },
  {
    text: '\u4E00\u5468\u524D',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    })(),
  },
]
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')

<\/script>
`},{default:o(()=>[N]),_:1},8,["demos"]),Y,d(a,{fs:"",demos:f(u),"path-name":"datetime-picker/datetimerange","source-code":`<template>
  <hl-row align="items-center" gap="var(--lg)">
    <hl-col span="col">
      <p class="m-b-md">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
      />
    </hl-col>
    <hl-col span="col">
      <p class="m-b-md">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="datetimerange"
        :shortcuts="shortcuts"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u6700\u8FD1\u4E00\u5468',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '\u6700\u8FD1\u4E00\u4E2A\u6708',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '\u6700\u8FD1\u4E09\u4E2A\u6708',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

const value1 = ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)])
const value2 = ref('')

<\/script>
`},{default:o(()=>[O]),_:1},8,["demos"]),R,d(a,{fs:"",demos:f(u),"path-name":"datetime-picker/default-time","source-code":`<template>
  <hl-row align="items-center" gap="var(--lg)">
    <hl-col span="col">
      <p class="m-b-md">\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00</p>
      <hl-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        :default-time="defaultTime1"
        block
      />
    </hl-col>
    <hl-col span="col">
      <p class="m-b-md">\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00</p>
      <hl-date-picker
        v-model="value2"
        type="datetimerange"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        :default-time="defaultTime2"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const defaultTime1 = [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'
const defaultTime2 = [new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)] // '12:00:00', '08:00:00'

const value1 = ref('')
const value2 = ref('')

<\/script>
`},{default:o(()=>[H]),_:1},8,["demos"]),L]),d(e)],64)}}};export{W as default};
