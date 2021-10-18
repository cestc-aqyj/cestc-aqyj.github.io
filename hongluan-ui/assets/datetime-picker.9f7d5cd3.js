var T=Object.defineProperty;var b=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var k=(a,l,u)=>l in a?T(a,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[l]=u,w=(a,l)=>{for(var u in l||(l={}))V.call(l,u)&&k(a,u,l[u]);if(b)for(var u of b(l))y.call(l,u)&&k(a,u,l[u]);return a};import{H as A,o as N,C as x,D as e,v as C,M as i,av as v,_ as r,au as j}from"./vue.450bc1d0.js";import{_ as P}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const U={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:a,resolveComponent:l,createVNode:u,withCtx:s,openBlock:f,createBlock:_}=v,h=a("p",null,"\u9ED8\u8BA4",-1),F=a("p",null,"\u5E26\u5FEB\u6377\u9009\u9879",-1),p=a("p",null,"\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u95F4",-1);function m(t,d){const n=l("hl-date-picker"),D=l("hl-col"),E=l("hl-row");return f(),_(E,{gap:"var(--lg)"},{default:s(()=>[u(D,{span:"col-lg-8"},{default:s(()=>[h,u(n,{modelValue:t.value1,"onUpdate:modelValue":d[0]||(d[0]=g=>t.value1=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",block:"",fill:""},null,8,["modelValue"])]),_:1}),u(D,{span:"col-lg-8"},{default:s(()=>[F,u(n,{modelValue:t.value2,"onUpdate:modelValue":d[1]||(d[1]=g=>t.value2=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",shortcuts:t.shortcuts,block:""},null,8,["modelValue","shortcuts"])]),_:1}),u(D,{span:"col-lg-8"},{default:s(()=>[p,u(n,{modelValue:t.value3,"onUpdate:modelValue":d[2]||(d[2]=g=>t.value3=g),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4","default-time":t.defaultTime,block:""},null,8,["modelValue","default-time"])]),_:1})]),_:1})}const{defineComponent:c,ref:B}=v,o=c({setup(){const t=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const n=new Date;return n.setTime(n.getTime()-3600*1e3*24),n})()},{text:"\u4E00\u5468\u524D",value:(()=>{const n=new Date;return n.setTime(n.getTime()-3600*1e3*24*7),n})()}],d=new Date(2e3,1,1,12,0,0);return{shortcuts:t,value1:B(""),value2:B(""),value3:B(""),defaultTime:d}}});return w({render:m},o)}(),"hl-demo1":function(){const{createElementVNode:a,resolveComponent:l,createVNode:u,withCtx:s,openBlock:f,createBlock:_}=v,h=a("p",null,"\u9ED8\u8BA4",-1),F=a("p",null,"\u5E26\u5FEB\u6377\u9009\u9879",-1);function p(o,t){const d=l("hl-date-picker"),n=l("hl-col"),D=l("hl-row");return f(),_(D,{align:"center",gap:"var(--lg)"},{default:s(()=>[u(n,{span:"col"},{default:s(()=>[h,u(d,{modelValue:o.value1,"onUpdate:modelValue":t[0]||(t[0]=E=>o.value1=E),type:"datetimerange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",fill:""},null,8,["modelValue"])]),_:1}),u(n,{span:"col"},{default:s(()=>[F,u(d,{modelValue:o.value2,"onUpdate:modelValue":t[1]||(t[1]=E=>o.value2=E),type:"datetimerange",shortcuts:o.shortcuts,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue","shortcuts"])]),_:1})]),_:1})}const{defineComponent:m,ref:c}=v,B=m({setup(){return{shortcuts:[{text:"\u6700\u8FD1\u4E00\u5468",value:()=>{const t=new Date,d=new Date;return d.setTime(d.getTime()-3600*1e3*24*7),[d,t]}},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:()=>{const t=new Date,d=new Date;return d.setTime(d.getTime()-3600*1e3*24*30),[d,t]}},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:()=>{const t=new Date,d=new Date;return d.setTime(d.getTime()-3600*1e3*24*90),[d,t]}}],value1:c([new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)]),value2:c("")}}});return w({render:p},B)}(),"hl-demo2":function(){const{createElementVNode:a,resolveComponent:l,createVNode:u,withCtx:s,openBlock:f,createBlock:_}=v,h=a("p",null,"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00",-1),F=a("p",null,"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00",-1);function p(o,t){const d=l("hl-date-picker"),n=l("hl-col"),D=l("hl-row");return f(),_(D,{align:"center",gap:"var(--lg)"},{default:s(()=>[u(n,{span:"col"},{default:s(()=>[h,u(d,{modelValue:o.value1,"onUpdate:modelValue":t[0]||(t[0]=E=>o.value1=E),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":o.defaultTime1,block:""},null,8,["modelValue","default-time"])]),_:1}),u(n,{span:"col"},{default:s(()=>[F,u(d,{modelValue:o.value2,"onUpdate:modelValue":t[1]||(t[1]=E=>o.value2=E),type:"datetimerange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":o.defaultTime2,block:""},null,8,["modelValue","default-time"])]),_:1})]),_:1})}const{defineComponent:m,ref:c}=v,B=m({setup(){const o=[new Date(2e3,1,1,12,0,0)],t=[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)];return{value1:c(""),value2:c(""),defaultTime1:o,defaultTime2:t}}});return w({render:p},B)}()}},q={class:"doc-main-content"},M={class:"doc-content"},Y=e("h1",null,"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668",-1),$=e("p",null,[r("\u4E3A"),e("code",null,"hl-date-picker"),r("\u8BBE\u7F6E"),e("code",null,"type"),r("\u5C5E\u6027\u4E3A"),e("code",null,"datetime"),r("\uFF0C\u5373\u53EF\u5728\u540C\u4E00\u4E2A\u9009\u62E9\u5668\u91CC\u540C\u65F6\u8FDB\u884C\u65E5\u671F\u548C\u65F6\u95F4\u7684\u9009\u62E9\u3002\u5FEB\u6377\u9009\u9879\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0E Date Picker \u76F8\u540C\u3002")],-1),z=e("div",null,[e("p",null,"DateTimePicker \u7531 \u65F6\u95F4 \u548C \u65E5\u671F \u9009\u62E9\u5668\u6D3E\u751F\u800C\u6765\uFF0C\u76F8\u5173\u5C5E\u6027\u53EF\u53C2\u8003\u6587\u6863\u8BF4\u660E\u3002")],-1),H=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="col-lg-8">
      <p>\u9ED8\u8BA4</p>
      <hl-date-picker v-model="value1" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" block fill />
    </hl-col>
    <hl-col span="col-lg-8">
      <p>\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker v-model="value2" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" :shortcuts="shortcuts" block />
    </hl-col>
    <hl-col span="col-lg-8">
      <p>\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u95F4</p>
      <hl-date-picker v-model="value3" type="datetime" placeholder="\u9009\u62E9\u65E5\u671F\u65F6\u95F4" :default-time="defaultTime" block />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      shortcuts,
      value1: ref(''),
      value2: ref(''),
      value3: ref(''),
      defaultTime, // '12:00:00'
    }
  },
})
<\/script>
`)],-1),S=e("h2",{id:"ri-qi-he-shi-jian-fan-wei"},[e("a",{class:"header-anchor",href:"#ri-qi-he-shi-jian-fan-wei"}),r(" \u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")],-1),R=e("div",null,[e("p",null,[r("\u8BBE\u7F6E"),e("code",null,"type"),r("\u4E3A"),e("code",null,"datetimerange"),r("\u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4")])],-1),W=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--lg)">
    <hl-col span="col">
      <p>\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        fill
      />
    </hl-col>
    <hl-col span="col">
      <p>\u5E26\u5FEB\u6377\u9009\u9879</p>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      shortcuts,
      value1: ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]),
      value2: ref(''),
    }
  },
})
<\/script>
`)],-1),G=e("h2",{id:"mo-ren-de-qi-shi-yu-jie-shu-shi-ke"},[e("a",{class:"header-anchor",href:"#mo-ren-de-qi-shi-yu-jie-shu-shi-ke"}),r(" \u9ED8\u8BA4\u7684\u8D77\u59CB\u4E0E\u7ED3\u675F\u65F6\u523B")],-1),I=e("div",null,[e("p",null,[r("\u4F7F\u7528"),e("code",null,"datetimerange"),r("\u8FDB\u884C\u8303\u56F4\u9009\u62E9\u65F6\uFF0C\u5728\u65E5\u671F\u9009\u62E9\u9762\u677F\u4E2D\u9009\u5B9A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65E5\u671F\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u8BE5\u65E5\u671F\u7684"),e("code",null,"00:00:00"),r("\u4F5C\u4E3A\u8D77\u59CB\u4E0E\u7ED3\u675F\u7684\u65F6\u523B\uFF1B\u901A\u8FC7\u9009\u9879"),e("code",null,"default-time"),r("\u53EF\u4EE5\u63A7\u5236\u9009\u4E2D\u8D77\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\u65F6\u6240\u4F7F\u7528\u7684\u5177\u4F53\u65F6\u523B\u3002"),e("code",null,"default-time"),r("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u7B2C\u4E00\u9879\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u5177\u4F53\u65F6\u523B\u3002")])],-1),J=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--lg)">
    <hl-col span="col">
      <p>\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00</p>
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
      <p>\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00</p>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const defaultTime1 = [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'
    const defaultTime2 = [new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)] // '12:00:00', '08:00:00'
    return {
      value1: ref(''),
      value2: ref(''),
      defaultTime1,
      defaultTime2,
    }
  },
})
<\/script>
`)],-1),K=j('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>date(DateTimePicker) / array(DateTimeRangePicker)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>time-arrow-control</td><td>\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/month/date/week/ datetime/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD HH:mm:ss</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>popper-class</td><td>DateTimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u9009\u4E2D\u65E5\u671F\u540E\u7684\u9ED8\u8BA4\u5177\u4F53\u65F6\u523B</td><td>Date / \u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate[]</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\uFF1ADate \u5BF9\u8C61\uFF1B\u8303\u56F4\u9009\u62E9\u65F6\uFF1A\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u6BCF\u9879\u503C\u4E3A Date \u5BF9\u8C61\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-class-name</td><td>\u8BBE\u7F6E\u65E5\u671F\u7684 className</td><td>Function(Date)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>datetimerange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr></tbody></table><h2 id="slots-2"><a class="header-anchor" href="#slots-2"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>range-separator</td><td>\u81EA\u5B9A\u4E49\u5206\u9694\u7B26</td></tr></tbody></table>',10);function L(a,l,u,s,f,_){const h=A("hl-demo0"),F=A("demo-block"),p=A("hl-demo1"),m=A("hl-demo2"),c=A("right-nav");return N(),x("section",q,[e("div",M,[Y,$,C(F,{fs:""},{source:i(()=>[C(h)]),highlight:i(()=>[H]),default:i(()=>[z]),_:1}),S,C(F,{fs:""},{source:i(()=>[C(p)]),highlight:i(()=>[W]),default:i(()=>[R]),_:1}),G,C(F,{fs:""},{source:i(()=>[C(m)]),highlight:i(()=>[J]),default:i(()=>[I]),_:1}),K]),C(c)])}var eu=P(U,[["render",L]]);export{eu as default};
