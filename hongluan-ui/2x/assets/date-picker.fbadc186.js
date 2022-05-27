var x=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var j=(s,o,e)=>o in s?x(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,w=(s,o)=>{for(var e in o||(o={}))N.call(o,e)&&j(s,e,o[e]);if(Y)for(var e of Y(o))M.call(o,e)&&j(s,e,o[e]);return s};import{H as k,L as S,W as T,Q as u,X as g,P as D,a4 as P,S as h,o as U,aJ as _}from"./vue.059774a0.js";import{H as q}from"./hongluan-icons.5b925e95.js";import{_ as z}from"./index.c1538894.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const O={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:s,resolveComponent:o,createVNode:e,withCtx:c,openBlock:C,createBlock:A}=_,f=s("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),F=s("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1);function v(t,d){const l=o("two-airplay"),n=o("hl-icon"),a=o("hl-date-picker"),i=o("hl-col"),r=o("hl-row");return C(),A(r,{align:"items-center",gap:"var(--xl)"},{default:c(()=>[e(i,{span:"lg:col-10 md:col-12"},{default:c(()=>[f,e(a,{modelValue:t.value1,"onUpdate:modelValue":d[0]||(d[0]=m=>t.value1=m),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F","show-close":!1,block:""},{icon:c(()=>[e(n,null,{default:c(()=>[e(l)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{span:"lg:col-10 md:col-12"},{default:c(()=>[F,e(a,{modelValue:t.value2,"onUpdate:modelValue":d[1]||(d[1]=m=>t.value2=m),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F","disabled-date":t.disabledDate,shortcuts:t.shortcuts,block:""},null,8,["modelValue","disabled-date","shortcuts"])]),_:1})]),_:1})}const{defineComponent:B}=_,{ref:E}=_,{TwoAirplay:b}=q;return w({render:v},B({setup(t,{expose:d}){d();const l=m=>m.getTime()>Date.now(),n=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const m=new Date;return m.setTime(m.getTime()-3600*1e3*24),m})()},{text:"\u4E00\u5468\u4EE5\u524D",value:(()=>{const m=new Date;return m.setTime(m.getTime()-3600*1e3*24*7),m})()}],a=E(""),i=E(""),r={disabledDate:l,shortcuts:n,value1:a,value2:i,ref:E,TwoAirplay:b};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}))}(),"hl-demo1":function(){const{createElementVNode:s,resolveComponent:o,createVNode:e,withCtx:c,Fragment:C,openBlock:A,createElementBlock:f}=_,F=s("p",{class:"m-b-sm"},"\u5468",-1),v=s("p",{class:"m-b-sm"},"\u6708",-1),B=s("p",{class:"m-b-sm"},"\u5E74",-1),E=s("p",{class:"m-b-sm"},"\u591A\u4E2A\u65E5\u671F",-1);function b(l,n){const a=o("hl-date-picker"),i=o("hl-col"),r=o("hl-row");return A(),f(C,null,[e(r,{align:"items-center",gap:"var(--xl)"},{default:c(()=>[e(i,{span:"md:col-12 lg:col-10"},{default:c(()=>[F,e(a,{modelValue:l.value1,"onUpdate:modelValue":n[0]||(n[0]=m=>l.value1=m),type:"week",format:"gggg \u7B2C ww \u5468",placeholder:"\u9009\u62E9\u5468",block:""},null,8,["modelValue"])]),_:1}),e(i,{span:"md:col-12 lg:col-10"},{default:c(()=>[v,e(a,{modelValue:l.value2,"onUpdate:modelValue":n[1]||(n[1]=m=>l.value2=m),type:"month",placeholder:"\u9009\u62E9\u6708",block:""},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{align:"items-center",gap:"var(--xl)",class:"m-t-lg"},{default:c(()=>[e(i,{span:"md:col-12 lg:col-10"},{default:c(()=>[B,e(a,{modelValue:l.value3,"onUpdate:modelValue":n[2]||(n[2]=m=>l.value3=m),type:"year",placeholder:"\u9009\u62E9\u5E74",block:""},null,8,["modelValue"])]),_:1}),e(i,{span:"md:col-12 lg:col-10"},{default:c(()=>[E,e(a,{modelValue:l.value4,"onUpdate:modelValue":n[3]||(n[3]=m=>l.value4=m),type:"dates",placeholder:"\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1})],64)}const{defineComponent:p}=_,{ref:t}=_;return w({render:b},p({setup(l,{expose:n}){n();const a=t(""),i=t(""),r=t(""),m=t(""),V={value1:a,value2:i,value3:r,value4:m,ref:t};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}))}(),"hl-demo2":function(){const{createElementVNode:s,resolveComponent:o,createVNode:e,withCtx:c,openBlock:C,createBlock:A}=_,f=s("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),F=s("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1);function v(p,t){const d=o("hl-date-picker"),l=o("hl-col"),n=o("hl-row");return C(),A(n,{align:"items-center",gap:"var(--xl)"},{default:c(()=>[e(l,{span:"lg:col-12"},{default:c(()=>[f,e(d,{modelValue:p.value1,"onUpdate:modelValue":t[0]||(t[0]=a=>p.value1=a),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1}),e(l,{span:"lg:col-12"},{default:c(()=>[F,e(d,{modelValue:p.value2,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value2=a),type:"daterange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",shortcuts:p.shortcuts,block:""},null,8,["modelValue","shortcuts"])]),_:1})]),_:1})}const{defineComponent:B}=_,{ref:E}=_;return w({render:v},B({setup(p,{expose:t}){t();const d=[{text:"\u6700\u8FD1\u4E00\u5468",value:(()=>{const i=new Date,r=new Date;return r.setTime(r.getTime()-3600*1e3*24*7),[r,i]})()},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:(()=>{const i=new Date,r=new Date;return r.setTime(r.getTime()-3600*1e3*24*30),[r,i]})()},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:(()=>{const i=new Date,r=new Date;return r.setTime(r.getTime()-3600*1e3*24*90),[r,i]})()}],l=E(""),n=E(""),a={shortcuts:d,value1:l,value2:n,ref:E};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hl-demo3":function(){const{createElementVNode:s,resolveComponent:o,createVNode:e,withCtx:c,openBlock:C,createBlock:A}=_,f=s("p",{class:"m-b-md"},"\u9ED8\u8BA4",-1),F=s("p",{class:"m-b-md"},"\u5E26\u5FEB\u6377\u9009\u9879",-1);function v(p,t){const d=o("hl-date-picker"),l=o("hl-col"),n=o("hl-row");return C(),A(n,{align:"items-center",gap:"var(--xl)"},{default:c(()=>[e(l,{span:"lg:col-12"},{default:c(()=>[f,e(d,{modelValue:p.value1,"onUpdate:modelValue":t[0]||(t[0]=a=>p.value1=a),type:"monthrange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",block:""},null,8,["modelValue"])]),_:1}),e(l,{span:"lg:col-12"},{default:c(()=>[F,e(d,{modelValue:p.value2,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value2=a),type:"monthrange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",shortcuts:p.shortcuts,block:""},null,8,["modelValue","shortcuts"])]),_:1})]),_:1})}const{defineComponent:B}=_,{ref:E}=_;return w({render:v},B({setup(p,{expose:t}){t();const d=[{text:"\u672C\u6708",value:[new Date,new Date]},{text:"\u4ECA\u5E74\u81F3\u4ECA",value:(()=>{const i=new Date;return[new Date(new Date().getFullYear(),0),i]})()},{text:"\u6700\u8FD1\u516D\u4E2A\u6708",value:(()=>{const i=new Date,r=new Date;return r.setMonth(r.getMonth()-6),[r,i]})()}],l=E(""),n=E(""),a={shortcuts:d,value1:l,value2:n,ref:E};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hl-demo4":function(){const{createElementVNode:s,resolveComponent:o,createVNode:e,withCtx:c,openBlock:C,createBlock:A}=_,f=s("p",{class:"m-b-sm"},"\u65E5\u671F",-1),F=s("p",{class:"m-b-sm"},"\u65E5\u671F\u8303\u56F4",-1);function v(p,t){const d=o("hl-date-picker"),l=o("hl-col"),n=o("hl-row");return C(),A(n,{align:"items-center",gap:"var(--xl)"},{default:c(()=>[e(l,{span:"lg:col-12"},{default:c(()=>[f,e(d,{modelValue:p.value1,"onUpdate:modelValue":t[0]||(t[0]=a=>p.value1=a),type:"date",placeholder:"Pick a date","default-value":new Date(2021,8,1)},null,8,["modelValue","default-value"])]),_:1}),e(l,{span:"lg:col-12"},{default:c(()=>[F,e(d,{modelValue:p.value2,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value2=a),type:"daterange","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2021,9,1),new Date(2021,10,1)]},null,8,["modelValue","default-value"])]),_:1})]),_:1})}const{defineComponent:B}=_,{ref:E}=_;return w({render:v},B({setup(p,{expose:t}){t();const d=E(""),l=E(""),n={value1:d,value2:l,ref:E};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}))}(),"hl-demo5":function(){const{createElementVNode:s,resolveComponent:o,createVNode:e,toDisplayString:c,withCtx:C,openBlock:A,createBlock:f}=_,F=s("p",{class:"m-b-sm"},"\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61",-1),v={class:"m-t-lg"},B=s("p",{class:"m-b-sm"},"\u4F7F\u7528value-format",-1),E={class:"m-t-lg"},b=s("p",{class:"m-b-sm"},"\u65F6\u95F4\u6233",-1),p={class:"m-t-lg"};function t(a,i){const r=o("hl-date-picker"),m=o("hl-col"),V=o("hl-row");return A(),f(V,{align:"items-center",gap:"var(--xl)"},{default:C(()=>[e(m,{span:"col"},{default:C(()=>[F,e(r,{modelValue:a.value1,"onUpdate:modelValue":i[0]||(i[0]=y=>a.value1=y),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5"},null,8,["modelValue"]),s("p",v,"\u503C\uFF1A"+c(a.value1),1)]),_:1}),e(m,{span:"col"},{default:C(()=>[B,e(r,{modelValue:a.value2,"onUpdate:modelValue":i[1]||(i[1]=y=>a.value2=y),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"YYYY/MM/DD"},null,8,["modelValue"]),s("p",E,"\u503C\uFF1A"+c(a.value2),1)]),_:1}),e(m,{span:"col"},{default:C(()=>[b,e(r,{modelValue:a.value3,"onUpdate:modelValue":i[2]||(i[2]=y=>a.value3=y),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"x"},null,8,["modelValue"]),s("p",p,"\u503C\uFF1A"+c(a.value3),1)]),_:1})]),_:1})}const{defineComponent:d}=_,{ref:l}=_;return w({render:t},d({setup(a,{expose:i}){i();const r=l(""),m=l(""),V=l(""),y={value1:r,value2:m,value3:V,ref:l};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}))}(),"hl-demo6":function(){const{toDisplayString:s,createElementVNode:o,resolveComponent:e,createVNode:c,Fragment:C,openBlock:A,createElementBlock:f}=_,F={class:"m-b-sm"};function v(p,t){const d=e("hl-date-picker");return A(),f(C,null,[o("p",F,"\u7EC4\u4EF6\u503C\uFF1A"+s(p.value),1),c(d,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=l=>p.value=l),type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":p.defaultTime},null,8,["modelValue","default-time"])],64)}const{defineComponent:B}=_,{ref:E}=_;return w({render:v},B({setup(p,{expose:t}){t();const d=[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)],l=E(""),n={defaultTime:d,value:l,ref:E};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}))}(),"hl-demo7":function(){const{toDisplayString:s,normalizeClass:o,createElementVNode:e,resolveComponent:c,withCtx:C,createVNode:A,openBlock:f,createElementBlock:F}=_,v={class:"demo-date-picker"};function B(t,d){const l=c("hl-date-picker");return f(),F("div",v,[A(l,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=n=>t.value=n),type:"date",placeholder:"Pick a day",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD"},{default:C(n=>[e("div",{class:o(["cell",{current:n.isCurrent}])},[e("span",{class:o(["text",t.isHoliday(n)&&"text-danger font-bold"])},s(n.text),3)],2)]),_:1},8,["modelValue"])])}const{defineComponent:E}=_,{ref:b}=_;return w({render:B},E({setup(t,{expose:d}){d();const l=b("2021-10-29"),n=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"];function a({dayjs:r}){return n.includes(r.format("YYYY-MM-DD"))}const i={value:l,holidays:n,isHoliday:a,ref:b};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}()}},H=u("h1",null,"DatePicker \u65E5\u671F\u9009\u62E9\u5668",-1),$=u("p",null,"\u4EE5\u300C\u65E5\u300D\u4E3A\u57FA\u672C\u5355\u4F4D\uFF0C\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\u63A7\u4EF6",-1),I=u("div",null,[u("p",null,[h("\u57FA\u672C\u5355\u4F4D\u7531"),u("code",null,"type"),h("\u5C5E\u6027\u6307\u5B9A\u3002\u901A\u8FC7"),u("code",null,"shortcuts"),h("\u914D\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u7981\u7528\u65E5\u671F\u901A\u8FC7 "),u("code",null,"disabled-date"),h(" \u8BBE\u7F6E\uFF0C\u4F20\u5165\u51FD\u6570")])],-1),L=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-10 md:col-12">
      <p class="m-b-sm">\u9ED8\u8BA4</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" :show-close="false" block>
        <template #icon>
          <hl-icon>
            <two-airplay />
          </hl-icon>
        </template>
      </hl-date-picker>
    </hl-col>
    <hl-col span="lg:col-10 md:col-12">
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TwoAirplay } from '@hongluan-ui/icons'

const disabledDate = time => {
  return time.getTime() > Date.now()
}
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
    text: '\u4E00\u5468\u4EE5\u524D',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    })(),
  },
]
const value1 = ref('')
const value2 = ref('')
<\/script>
`)],-1),Q=u("h2",{id:"qi-ta-ri-qi-dan-wei"},[u("a",{class:"header-anchor",href:"#qi-ta-ri-qi-dan-wei"}),h(" \u5176\u4ED6\u65E5\u671F\u5355\u4F4D")],-1),R=u("p",null,"\u901A\u8FC7\u6269\u5C55\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\uFF0C\u53EF\u4EE5\u9009\u62E9\u5468\u3001\u6708\u3001\u5E74\u6216\u591A\u4E2A\u65E5\u671F",-1),W=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5468</p>
      <hl-date-picker v-model="value1" type="week" format="gggg \u7B2C ww \u5468" placeholder="\u9009\u62E9\u5468" block />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u6708</p>
      <hl-date-picker v-model="value2" type="month" placeholder="\u9009\u62E9\u6708" block />
    </hl-col>
  </hl-row>

  <hl-row align="items-center" gap="var(--xl)" class="m-t-lg">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5E74</p>
      <hl-date-picker v-model="value3" type="year" placeholder="\u9009\u62E9\u5E74" block />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u591A\u4E2A\u65E5\u671F</p>
      <hl-date-picker v-model="value4" type="dates" placeholder="\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F" block />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
<\/script>

`)],-1),X=u("h2",{id:"xuan-ze-ri-qi-fan-wei"},[u("a",{class:"header-anchor",href:"#xuan-ze-ri-qi-fan-wei"}),h(" \u9009\u62E9\u65E5\u671F\u8303\u56F4")],-1),J=u("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4\u8303\u56F4",-1),G=u("div",null,[u("p",null,[h("\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u6708\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"unlink-panels"),h("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),K=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="daterange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        block
      />
    </hl-col>
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u6700\u8FD1\u4E00\u5468',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u4E00\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u4E09\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    })(),
  },
]
const value1 = ref('')
const value2 = ref('')
<\/script>
`)],-1),Z=u("h2",{id:"xuan-ze-yue-fen-fan-wei"},[u("a",{class:"header-anchor",href:"#xuan-ze-yue-fen-fan-wei"}),h(" \u9009\u62E9\u6708\u4EFD\u8303\u56F4")],-1),uu=u("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u6708\u4EFD\u8303\u56F4",-1),eu=u("div",null,[u("p",null,[h("\u5728\u9009\u62E9\u6708\u4EFD\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u5E74\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"unlink-panels"),h("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u6708\u4EFD"
        end-placeholder="\u7ED3\u675F\u6708\u4EFD"
        block
      />
    </hl-col>
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u6708\u4EFD"
        end-placeholder="\u7ED3\u675F\u6708\u4EFD"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u672C\u6708',
    value: [new Date(), new Date()],
  },
  {
    text: '\u4ECA\u5E74\u81F3\u4ECA',
    value: (() => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u516D\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    })(),
  },
]

const value1 = ref('')
const value2 = ref('')

<\/script>
`)],-1),lu=u("h2",{id:"mo-ren-zhi"},[u("a",{class:"header-anchor",href:"#mo-ren-zhi"}),h(" \u9ED8\u8BA4\u503C")],-1),ou=u("p",null,[h("\u5982\u679C\u7528\u6237\u6CA1\u6709\u9009\u62E9\u65E5\u671F\uFF0C\u90A3\u9ED8\u8BA4\u5C55\u793A\u5F53\u524D\u65E5\u7684\u6708\u4EFD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"default-value"),h(" \u6765\u8BBE\u7F6E\u6210\u5176\u4ED6\u7684\u65E5\u671F\u3002")],-1),au=u("p",null,[h("\u5982\u679C\u7C7B\u578B\u662F "),u("code",null,"daterange"),h(", "),u("code",null,"default-value"),h(" \u5219\u4F1A\u8BBE\u7F6E\u5DE6\u8FB9\u7A97\u53E3\u7684\u9ED8\u8BA4\u503C\u3002")],-1),nu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u65E5\u671F</p>
      <hl-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2021, 8, 1)"
      />
    </hl-col>

    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u65E5\u671F\u8303\u56F4</p>
      <hl-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2021, 9, 1), new Date(2021, 10, 1)]"
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
<\/script>
`)],-1),su=u("h2",{id:"ri-qi-ge-shi"},[u("a",{class:"header-anchor",href:"#ri-qi-ge-shi"}),h(" \u65E5\u671F\u683C\u5F0F")],-1),du=u("p",null,[h("\u4F7F\u7528"),u("code",null,"format"),h("\u6307\u5B9A\u8F93\u5165\u6846\u7684\u683C\u5F0F\u3002\u4F7F\u7528"),u("code",null,"value-format"),h("\u6307\u5B9A\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u63A5\u53D7\u5E76\u8FD4\u56DE"),u("code",null,"Date"),h("\u5BF9\u8C61\u3002")],-1),ru=u("div",{class:"doc-tip warning"},[u("p",null,"\u8BF7\u6CE8\u610F\u5927\u5C0F\u5199")],-1),cu=u("div",null,[u("p",null,[h("\u5728 "),u("a",{href:"https://day.js.org/docs/zh-CN/display/format"},"\u8FD9\u91CC"),h(" \u67E5\u770B Day.js \u652F\u6301\u7684 format \u53C2\u6570\u3002")])],-1),pu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="col">
      <p class="m-b-sm">\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" format="YYYY \u5E74 MM \u6708 DD \u65E5" />
      <p class="m-t-lg">\u503C\uFF1A{{ value1 }}</p>
    </hl-col>
    <hl-col span="col">
      <p class="m-b-sm">\u4F7F\u7528value-format</p>
      <hl-date-picker
        v-model="value2"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        format="YYYY \u5E74 MM \u6708 DD \u65E5"
        value-format="YYYY/MM/DD"
      />
      <p class="m-t-lg">\u503C\uFF1A{{ value2 }}</p>
    </hl-col>
    <hl-col span="col">
      <p class="m-b-sm">\u65F6\u95F4\u6233</p>
      <hl-date-picker
        v-model="value3"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        format="YYYY \u5E74 MM \u6708 DD \u65E5"
        value-format="x"
      />
      <p class="m-t-lg">\u503C\uFF1A{{ value3 }}</p>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
<\/script>
`)],-1),iu=u("h2",{id:"mo-ren-xian-shi-ri-qi"},[u("a",{class:"header-anchor",href:"#mo-ren-xian-shi-ri-qi"}),h(" \u9ED8\u8BA4\u663E\u793A\u65E5\u671F")],-1),mu=u("p",null,"\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u6307\u5B9A\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u9ED8\u8BA4\u65F6\u523B\u3002",-1),hu=u("div",null,[u("p",null,[h("\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u95F4\u90E8\u5206\u5747\u4E3A\u5F53\u5929\u7684 0 \u70B9 0 \u5206 0 \u79D2\u3002\u901A\u8FC7"),u("code",null,"default-time"),h("\u53EF\u4EE5\u5206\u522B\u6307\u5B9A\u4E8C\u8005\u7684\u5177\u4F53\u65F6\u523B\u3002"),u("code",null,"default-time"),h("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u503C\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002")])],-1),Eu=u("pre",null,[u("code",{class:"html"},` <template>
  <p class="m-b-sm">\u7EC4\u4EF6\u503C\uFF1A{{ value }}</p>
  <hl-date-picker v-model="value" type="daterange" start-placeholder="\u5F00\u59CB\u65E5\u671F" end-placeholder="\u7ED3\u675F\u65E5\u671F" :default-time="defaultTime" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)] // '00:00:00', '23:59:59'
const value = ref('')
<\/script>
`)],-1),Fu=u("h2",{id:"zi-ding-yi-dan-yuan-ge-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-dan-yuan-ge-nei-rong"}),h(" \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9")],-1),_u=u("pre",null,[u("code",{class:"html"},` <template>
  <div class="demo-date-picker">
    <hl-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span :class="['text', isHoliday(cell) && 'text-danger font-bold'] ">{{ cell.text }}</span>
        </div>
      </template>
    </hl-date-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('2021-10-29')

const holidays = [
  '2021-10-01',
  '2021-10-02',
  '2021-10-03',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07',
]

function isHoliday({ dayjs }) {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
<\/script>
`)],-1),Du=U(`<p><code>slot</code> \u53C2\u6570\u8BE6\u60C5\uFF1A</p><pre><code class="hljs language-ts"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">DateCell</span> {
  <span class="hljs-attr">column</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">customClass</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">disabled</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">end</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">inRange</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">row</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">selected</span>: <span class="hljs-title class_">Dayjs</span>
  <span class="hljs-attr">isCurrent</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">isSelected</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">start</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">text</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">timestamp</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">date</span>: <span class="hljs-title class_">Date</span>
  <span class="hljs-attr">dayjs</span>: <span class="hljs-title class_">Dayjs</span>
  <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;normal&#39;</span> | <span class="hljs-string">&#39;today&#39;</span> | <span class="hljs-string">&#39;week&#39;</span> | <span class="hljs-string">&#39;next-month&#39;</span> | <span class="hljs-string">&#39;prev-month&#39;</span>
}
</code></pre><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>date(DatePicker) / array(DateRangePicker)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>DatePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u9009\u4E2D\u65E5\u671F\u6240\u4F7F\u7528\u7684\u5F53\u65E5\u5185\u5177\u4F53\u65F6\u523B</td><td>Date[]</td><td>\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>id</td><td>input\u8F93\u5165\u6846id\u5C5E\u6027\u503C</td><td>string / array(string)</td><td>\u65E5\u671F\u9009\u62E9 <code>id=&quot;my-date&quot;</code>\uFF0C\u65E5\u671F\u8303\u56F4\u9009\u62E9 <code>:id=&quot;[&#39;my-range-start&#39;, &#39;my-range-end&#39;]&quot;</code></td><td>-</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>validate-event</td><td>\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>daterange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr><tr><td>panel-change</td><td>\u70B9\u51FB\u5BFC\u822A\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>(date, mode, view)</code></td></tr><tr><td>visible-change</td><td>\u65E5\u671F\u9009\u62E9\u5668\u663E\u793A\u6216\u8005\u9690\u85CF\u65F6\u89E6\u53D1</td><td>true / false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>focusStartInput</td></tr></tbody></table>`,10);function Cu(s,o,e,c,C,A){const f=k("hl-demo0"),F=k("demo-block"),v=k("hl-demo1"),B=k("hl-demo2"),E=k("hl-demo3"),b=k("hl-demo4"),p=k("hl-demo5"),t=k("hl-demo6"),d=k("hl-demo7"),l=k("right-nav");return S(),T(P,null,[u("section",null,[H,$,g(F,{fs:""},{source:D(()=>[g(f)]),highlight:D(()=>[L]),default:D(()=>[I]),_:1}),Q,R,g(F,{fs:""},{source:D(()=>[g(v)]),highlight:D(()=>[W]),_:1}),X,J,g(F,{fs:""},{source:D(()=>[g(B)]),highlight:D(()=>[K]),default:D(()=>[G]),_:1}),Z,uu,g(F,{fs:""},{source:D(()=>[g(E)]),highlight:D(()=>[tu]),default:D(()=>[eu]),_:1}),lu,ou,au,g(F,{fs:""},{source:D(()=>[g(b)]),highlight:D(()=>[nu]),_:1}),su,du,ru,g(F,{fs:""},{source:D(()=>[g(p)]),highlight:D(()=>[pu]),default:D(()=>[cu]),_:1}),iu,mu,g(F,{fs:""},{source:D(()=>[g(t)]),highlight:D(()=>[Eu]),default:D(()=>[hu]),_:1}),Fu,g(F,{fs:""},{source:D(()=>[g(d)]),highlight:D(()=>[_u]),_:1}),Du]),g(l)],64)}var ku=z(O,[["render",Cu]]);export{ku as default};
