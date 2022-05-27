var N=Object.defineProperty;var T=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var V=(o,e,u)=>e in o?N(o,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[e]=u,k=(o,e)=>{for(var u in e||(e={}))P.call(e,u)&&V(o,u,e[u]);if(T)for(var u of T(e))x.call(e,u)&&V(o,u,e[u]);return o};import{H as w,L as q,W as S,Q as t,X as v,P as h,a4 as j,S as F,o as U,aJ as B}from"./vue.059774a0.js";import{_ as Y}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";import"./hongluan-icons.5b925e95.js";const $={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:o,resolveComponent:e,createVNode:u,withCtx:c,openBlock:g,createBlock:A}=B,C=o("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),p=o("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),D=o("p",{class:"m-b-sm"},"\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u95F4",-1);function _(d,a){const s=e("hl-date-picker"),E=e("hl-col"),l=e("hl-row");return g(),A(l,{gap:"var(--lg)"},{default:c(()=>[u(E,{span:"lg:col-8"},{default:c(()=>[C,u(s,{modelValue:d.value1,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value1=r),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",block:""},null,8,["modelValue"])]),_:1}),u(E,{span:"lg:col-8"},{default:c(()=>[p,u(s,{modelValue:d.value2,"onUpdate:modelValue":a[1]||(a[1]=r=>d.value2=r),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",shortcuts:d.shortcuts,block:""},null,8,["modelValue","shortcuts"])]),_:1}),u(E,{span:"lg:col-8"},{default:c(()=>[D,u(s,{modelValue:d.value3,"onUpdate:modelValue":a[2]||(a[2]=r=>d.value3=r),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4","default-time":d.defaultTime,block:""},null,8,["modelValue","default-time"])]),_:1})]),_:1})}const{defineComponent:m}=B,{ref:b}=B;return k({render:_},m({setup(d,{expose:a}){a();const s=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const f=new Date;return f.setTime(f.getTime()-3600*1e3*24),f})()},{text:"\u4E00\u5468\u524D",value:(()=>{const f=new Date;return f.setTime(f.getTime()-3600*1e3*24*7),f})()}],E=new Date(2e3,1,1,12,0,0),l=b(""),r=b(""),i=b(""),y={shortcuts:s,defaultTime:E,value1:l,value2:r,value3:i,ref:b};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}))}(),"hl-demo1":function(){const{createElementVNode:o,resolveComponent:e,createVNode:u,withCtx:c,openBlock:g,createBlock:A}=B,C=o("p",{class:"m-b-md"},"\u9ED8\u8BA4",-1),p=o("p",{class:"m-b-md"},"\u5E26\u5FEB\u6377\u9009\u9879",-1);function D(n,d){const a=e("hl-date-picker"),s=e("hl-col"),E=e("hl-row");return g(),A(E,{align:"items-center",gap:"var(--lg)"},{default:c(()=>[u(s,{span:"col"},{default:c(()=>[C,u(a,{modelValue:n.value1,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value1=l),type:"datetimerange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),u(s,{span:"col"},{default:c(()=>[p,u(a,{modelValue:n.value2,"onUpdate:modelValue":d[1]||(d[1]=l=>n.value2=l),type:"datetimerange",shortcuts:n.shortcuts,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue","shortcuts"])]),_:1})]),_:1})}const{defineComponent:_}=B,{ref:m}=B;return k({render:D},_({setup(n,{expose:d}){d();const a=[{text:"\u6700\u8FD1\u4E00\u5468",value:()=>{const r=new Date,i=new Date;return i.setTime(i.getTime()-3600*1e3*24*7),[i,r]}},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:()=>{const r=new Date,i=new Date;return i.setTime(i.getTime()-3600*1e3*24*30),[i,r]}},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:()=>{const r=new Date,i=new Date;return i.setTime(i.getTime()-3600*1e3*24*90),[i,r]}}],s=m([new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)]),E=m(""),l={shortcuts:a,value1:s,value2:E,ref:m};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hl-demo2":function(){const{createElementVNode:o,resolveComponent:e,createVNode:u,withCtx:c,openBlock:g,createBlock:A}=B,C=o("p",{class:"m-b-md"},"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00",-1),p=o("p",{class:"m-b-md"},"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00",-1);function D(n,d){const a=e("hl-date-picker"),s=e("hl-col"),E=e("hl-row");return g(),A(E,{align:"items-center",gap:"var(--lg)"},{default:c(()=>[u(s,{span:"col"},{default:c(()=>[C,u(a,{modelValue:n.value1,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value1=l),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":n.defaultTime1,block:""},null,8,["modelValue","default-time"])]),_:1}),u(s,{span:"col"},{default:c(()=>[p,u(a,{modelValue:n.value2,"onUpdate:modelValue":d[1]||(d[1]=l=>n.value2=l),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":n.defaultTime2,block:""},null,8,["modelValue","default-time"])]),_:1})]),_:1})}const{defineComponent:_}=B,{ref:m}=B;return k({render:D},_({setup(n,{expose:d}){d();const a=[new Date(2e3,1,1,12,0,0)],s=[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)],E=m(""),l=m(""),r={defaultTime1:a,defaultTime2:s,value1:E,value2:l,ref:m};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}()}},z=t("h1",null,"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668",-1),H=t("p",null,[F("\u4E3A"),t("code",null,"hl-date-picker"),F("\u8BBE\u7F6E"),t("code",null,"type"),F("\u5C5E\u6027\u4E3A"),t("code",null,"datetime"),F("\uFF0C\u5373\u53EF\u5728\u540C\u4E00\u4E2A\u9009\u62E9\u5668\u91CC\u540C\u65F6\u8FDB\u884C\u65E5\u671F\u548C\u65F6\u95F4\u7684\u9009\u62E9\u3002\u5FEB\u6377\u9009\u9879\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0E Date Picker \u76F8\u540C\u3002")],-1),M=t("div",null,[t("p",null,"DateTimePicker \u7531 \u65F6\u95F4 \u548C \u65E5\u671F \u9009\u62E9\u5668\u6D3E\u751F\u800C\u6765\uFF0C\u76F8\u5173\u5C5E\u6027\u53EF\u53C2\u8003\u6587\u6863\u8BF4\u660E\u3002")],-1),O=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),L=t("h2",{id:"ri-qi-he-shi-jian-fan-wei"},[t("a",{class:"header-anchor",href:"#ri-qi-he-shi-jian-fan-wei"}),F(" \u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")],-1),Q=t("div",null,[t("p",null,[F("\u8BBE\u7F6E"),t("code",null,"type"),F("\u4E3A"),t("code",null,"datetimerange"),F("\u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")])],-1),W=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),X=t("h2",{id:"mo-ren-de-qi-shi-yu-jie-shu-shi-ke"},[t("a",{class:"header-anchor",href:"#mo-ren-de-qi-shi-yu-jie-shu-shi-ke"}),F(" \u9ED8\u8BA4\u7684\u8D77\u59CB\u4E0E\u7ED3\u675F\u65F6\u523B")],-1),J=t("div",null,[t("p",null,[F("\u4F7F\u7528"),t("code",null,"datetimerange"),F("\u8FDB\u884C\u8303\u56F4\u9009\u62E9\u65F6\uFF0C\u5728\u65E5\u671F\u9009\u62E9\u9762\u677F\u4E2D\u9009\u5B9A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65E5\u671F\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u8BE5\u65E5\u671F\u7684"),t("code",null,"00:00:00"),F("\u4F5C\u4E3A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65F6\u523B\uFF1B\u901A\u8FC7\u9009\u9879"),t("code",null,"default-time"),F("\u53EF\u4EE5\u63A7\u5236\u9009\u4E2D\u8D77\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\u65F6\u6240\u4F7F\u7528\u7684\u5177\u4F53\u65F6\u523B\u3002"),t("code",null,"default-time"),F("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u7B2C\u4E00\u9879\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\u3002")])],-1),R=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),G=U('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>date(DateTimePicker) / array(DateTimeRangePicker)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>time-arrow-control</td><td>\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/month/date/week/ datetime/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD HH:mm:ss</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>popper-class</td><td>DateTimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u9009\u4E2D\u65E5\u671F\u540E\u7684\u9ED8\u8BA4\u5177\u4F53\u65F6\u523B</td><td>Date / \u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate[]</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate \u5BF9\u8C61\uFF1B\u8303\u56F4\u9009\u62E9\u65F6\uFF1A\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u6BCF\u9879\u503C\u4E3A Date \u5BF9\u8C61\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-class-name</td><td>\u8BBE\u7F6E\u65E5\u671F\u7684 className</td><td>Function(Date)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>id</td><td>input\u8F93\u5165\u6846id\u5C5E\u6027\u503C</td><td>string / array(string)</td><td>\u65E5\u671F\u9009\u62E9 <code>id=&quot;my-date&quot;</code>\uFF0C\u65E5\u671F\u8303\u56F4\u9009\u62E9 <code>:id=&quot;[&#39;my-range-start&#39;, &#39;my-range-end&#39;]&quot;</code></td><td>-</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>datetimerange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr><tr><td>visible-change</td><td>\u65E5\u671F\u9009\u62E9\u5668\u663E\u793A\u6216\u8005\u9690\u85CF\u65F6\u89E6\u53D1</td><td>true / false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr></tbody></table><h2 id="slots-2"><a class="header-anchor" href="#slots-2"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>range-separator</td><td>\u81EA\u5B9A\u4E49\u5206\u9694\u7B26</td></tr></tbody></table>',10);function I(o,e,u,c,g,A){const C=w("hl-demo0"),p=w("demo-block"),D=w("hl-demo1"),_=w("hl-demo2"),m=w("right-nav");return q(),S(j,null,[t("section",null,[z,H,v(p,{fs:""},{source:h(()=>[v(C)]),highlight:h(()=>[O]),default:h(()=>[M]),_:1}),L,v(p,{fs:""},{source:h(()=>[v(D)]),highlight:h(()=>[W]),default:h(()=>[Q]),_:1}),X,v(p,{fs:""},{source:h(()=>[v(_)]),highlight:h(()=>[R]),default:h(()=>[J]),_:1}),G]),v(m)],64)}var ou=Y($,[["render",I]]);export{ou as default};
