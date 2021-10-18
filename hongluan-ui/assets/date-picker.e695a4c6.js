var N=Object.defineProperty;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var Y=(d,l,e)=>l in d?N(d,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[l]=e,V=(d,l)=>{for(var e in l||(l={}))T.call(l,e)&&Y(d,e,l[e]);if(y)for(var e of y(l))M.call(l,e)&&Y(d,e,l[e]);return d};import{H as w,o as U,C as q,D as u,v,M as i,av as B,_ as c,au as z}from"./vue.450bc1d0.js";import{_ as j}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const S={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:n,openBlock:m,createBlock:f}=B,_=d("p",null,"\u9ED8\u8BA4",-1),E=d("p",null,"\u5E26\u5FEB\u6377\u9009\u9879",-1);function C(a,t){const o=l("two-airplay"),p=l("hl-icon"),r=l("hl-date-picker"),s=l("hl-col"),g=l("hl-row");return m(),f(g,{align:"center",gap:"var(--xl)"},{default:n(()=>[e(s,{span:"col-lg-10 col-md-12"},{default:n(()=>[_,e(r,{modelValue:a.value1,"onUpdate:modelValue":t[0]||(t[0]=k=>a.value1=k),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",block:""},{icon:n(()=>[e(p,null,{default:n(()=>[e(o)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{span:"col-lg-10 col-md-12"},{default:n(()=>[E,e(r,{modelValue:a.value2,"onUpdate:modelValue":t[1]||(t[1]=k=>a.value2=k),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F","disabled-date":a.disabledDate,shortcuts:a.shortcuts,block:""},null,8,["modelValue","disabled-date","shortcuts"])]),_:1})]),_:1})}const{defineComponent:D,ref:h}=B,F=D({setup(){const a=r=>r.getTime()>Date.now(),t=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const r=new Date;return r.setTime(r.getTime()-3600*1e3*24),r})()},{text:"\u4E00\u5468\u4EE5\u524D",value:(()=>{const r=new Date;return r.setTime(r.getTime()-3600*1e3*24*7),r})()}],o=h(""),p=h("");return{value1:o,value2:p,disabledDate:a,shortcuts:t}}});return V({render:C},F)}(),"hl-demo1":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:n,Fragment:m,openBlock:f,createElementBlock:_}=B,E=d("p",null,"\u5468",-1),C=d("p",null,"\u6708",-1),D=d("p",null,"\u5E74",-1),h=d("p",null,"\u591A\u4E2A\u65E5\u671F",-1);function F(p,r){const s=l("hl-date-picker"),g=l("hl-col"),k=l("hl-row");return f(),_(m,null,[e(k,{align:"center",gap:"var(--xl)"},{default:n(()=>[e(g,{span:"col-md-12 col-lg-10"},{default:n(()=>[E,e(s,{modelValue:p.value1,"onUpdate:modelValue":r[0]||(r[0]=A=>p.value1=A),type:"week",format:"gggg \u7B2C ww \u5468",placeholder:"\u9009\u62E9\u5468",block:""},null,8,["modelValue"])]),_:1}),e(g,{span:"col-md-12 col-lg-10"},{default:n(()=>[C,e(s,{modelValue:p.value2,"onUpdate:modelValue":r[1]||(r[1]=A=>p.value2=A),type:"month",placeholder:"\u9009\u62E9\u6708",block:"",fill:""},null,8,["modelValue"])]),_:1})]),_:1}),e(k,{align:"center",gap:"var(--xl)",class:"m-t-lg"},{default:n(()=>[e(g,{span:"col-md-12 col-lg-10"},{default:n(()=>[D,e(s,{modelValue:p.value3,"onUpdate:modelValue":r[2]||(r[2]=A=>p.value3=A),type:"year",placeholder:"\u9009\u62E9\u5E74",block:""},null,8,["modelValue"])]),_:1}),e(g,{span:"col-md-12 col-lg-10"},{default:n(()=>[h,e(s,{modelValue:p.value4,"onUpdate:modelValue":r[3]||(r[3]=A=>p.value4=A),type:"dates",placeholder:"\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1})],64)}const{defineComponent:a,ref:t}=B,o=a({setup(){return{value1:t(""),value2:t(""),value3:t(""),value4:t("")}}});return V({render:F},o)}(),"hl-demo2":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:n,openBlock:m,createBlock:f}=B,_=d("p",null,"\u9ED8\u8BA4",-1),E=d("p",null,"\u5E26\u5FEB\u6377\u9009\u9879",-1);function C(a,t){const o=l("hl-date-picker"),p=l("hl-col"),r=l("hl-row");return m(),f(r,{align:"center",gap:"var(--xl)"},{default:n(()=>[e(p,{span:"col-lg-12"},{default:n(()=>[_,e(o,{modelValue:a.value1,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value1=s),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1}),e(p,{span:"col-lg-12"},{default:n(()=>[E,e(o,{modelValue:a.value2,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value2=s),type:"daterange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",shortcuts:a.shortcuts,block:"",fill:""},null,8,["modelValue","shortcuts"])]),_:1})]),_:1})}const{defineComponent:D,ref:h}=B,F=D({setup(){return{shortcuts:[{text:"\u6700\u8FD1\u4E00\u5468",value:(()=>{const t=new Date,o=new Date;return o.setTime(o.getTime()-3600*1e3*24*7),[o,t]})()},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:(()=>{const t=new Date,o=new Date;return o.setTime(o.getTime()-3600*1e3*24*30),[o,t]})()},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:(()=>{const t=new Date,o=new Date;return o.setTime(o.getTime()-3600*1e3*24*90),[o,t]})()}],value1:h(""),value2:h("")}}});return V({render:C},F)}(),"hl-demo3":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:n,openBlock:m,createBlock:f}=B,_=d("p",null,"\u9ED8\u8BA4",-1),E=d("p",null,"\u5E26\u5FEB\u6377\u9009\u9879",-1);function C(a,t){const o=l("hl-date-picker"),p=l("hl-col"),r=l("hl-row");return m(),f(r,{align:"center",gap:"var(--xl)"},{default:n(()=>[e(p,{span:"col-lg-12"},{default:n(()=>[_,e(o,{modelValue:a.value1,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value1=s),type:"monthrange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",block:""},null,8,["modelValue"])]),_:1}),e(p,{span:"col-lg-12"},{default:n(()=>[E,e(o,{modelValue:a.value2,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value2=s),type:"monthrange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",shortcuts:a.shortcuts,block:""},null,8,["modelValue","shortcuts"])]),_:1})]),_:1})}const{defineComponent:D,ref:h}=B,F=D({setup(){return{shortcuts:[{text:"\u672C\u6708",value:[new Date,new Date]},{text:"\u4ECA\u5E74\u81F3\u4ECA",value:(()=>{const t=new Date;return[new Date(new Date().getFullYear(),0),t]})()},{text:"\u6700\u8FD1\u516D\u4E2A\u6708",value:(()=>{const t=new Date,o=new Date;return o.setMonth(o.getMonth()-6),[o,t]})()}],value1:h(""),value2:h("")}}});return V({render:C},F)}(),"hl-demo4":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,withCtx:n,openBlock:m,createBlock:f}=B,_=d("p",null,"\u65E5\u671F",-1),E=d("p",null,"\u65E5\u671F\u8303\u56F4",-1);function C(a,t){const o=l("hl-date-picker"),p=l("hl-col"),r=l("hl-row");return m(),f(r,{align:"center",gap:"var(--xl)"},{default:n(()=>[e(p,{span:"col-lg-12"},{default:n(()=>[_,e(o,{modelValue:a.value1,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value1=s),type:"date",placeholder:"Pick a date","default-value":new Date(2010,9,1)},null,8,["modelValue","default-value"])]),_:1}),e(p,{span:"col-lg-12"},{default:n(()=>[E,e(o,{modelValue:a.value2,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value2=s),type:"daterange","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2010,9,1),new Date(2010,10,1)]},null,8,["modelValue","default-value"])]),_:1})]),_:1})}const{defineComponent:D,ref:h}=B,F=D({setup(){return{value1:h(""),value2:h("")}}});return V({render:C},F)}(),"hl-demo5":function(){const{createElementVNode:d,resolveComponent:l,createVNode:e,toDisplayString:n,withCtx:m,openBlock:f,createBlock:_}=B,E=d("p",null,"\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61",-1),C={class:"m-t-lg"},D=d("p",null,"\u4F7F\u7528value-format",-1),h={class:"m-t-lg"},F=d("p",null,"\u65F6\u95F4\u6233",-1),a={class:"m-t-lg"};function t(s,g){const k=l("hl-date-picker"),A=l("hl-col"),x=l("hl-row");return f(),_(x,{align:"center",gap:"var(--xl)"},{default:m(()=>[e(A,{span:"col"},{default:m(()=>[E,e(k,{modelValue:s.value1,"onUpdate:modelValue":g[0]||(g[0]=b=>s.value1=b),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5"},null,8,["modelValue"]),d("p",C,"\u503C\uFF1A"+n(s.value1),1)]),_:1}),e(A,{span:"col"},{default:m(()=>[D,e(k,{modelValue:s.value2,"onUpdate:modelValue":g[1]||(g[1]=b=>s.value2=b),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"YYYY/MM/DD"},null,8,["modelValue"]),d("p",h,"\u503C\uFF1A"+n(s.value2),1)]),_:1}),e(A,{span:"col"},{default:m(()=>[F,e(k,{modelValue:s.value3,"onUpdate:modelValue":g[2]||(g[2]=b=>s.value3=b),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"x"},null,8,["modelValue"]),d("p",a,"\u503C\uFF1A"+n(s.value3),1)]),_:1})]),_:1})}const{defineComponent:o,ref:p}=B,r=o({setup(){return{value1:p(""),value2:p(""),value3:p("")}}});return V({render:t},r)}(),"hl-demo6":function(){const{toDisplayString:d,createElementVNode:l,resolveComponent:e,createVNode:n,Fragment:m,openBlock:f,createElementBlock:_}=B;function E(F,a){const t=e("hl-date-picker");return f(),_(m,null,[l("p",null,"\u7EC4\u4EF6\u503C\uFF1A"+d(F.value),1),n(t,{modelValue:F.value,"onUpdate:modelValue":a[0]||(a[0]=o=>F.value=o),type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":F.defaultTime},null,8,["modelValue","default-time"])],64)}const{defineComponent:C,ref:D}=B,h=C({setup(){const F=[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)];return{value:D(""),defaultTime:F}}});return V({render:E},h)}()}},P={class:"doc-main-content"},$={class:"doc-content"},H=u("h1",null,"DatePicker \u65E5\u671F\u9009\u62E9\u5668",-1),R=u("p",null,"\u4EE5\u300C\u65E5\u300D\u4E3A\u57FA\u672C\u5355\u4F4D\uFF0C\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\u63A7\u4EF6",-1),W=u("div",null,[u("p",null,[c("\u57FA\u672C\u5355\u4F4D\u7531"),u("code",null,"type"),c("\u5C5E\u6027\u6307\u5B9A\u3002\u901A\u8FC7"),u("code",null,"shortcuts"),c("\u914D\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u7981\u7528\u65E5\u671F\u901A\u8FC7 "),u("code",null,"disabled-date"),c(" \u8BBE\u7F6E\uFF0C\u4F20\u5165\u51FD\u6570")])],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col-lg-10 col-md-12">
      <p>\u9ED8\u8BA4</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" block>
        <template #icon>
          <hl-icon><two-airplay /></hl-icon>
        </template>
      </hl-date-picker>
    </hl-col>
    <hl-col span="col-lg-10 col-md-12">
      <p>\u5E26\u5FEB\u6377\u9009\u9879</p>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      value1: value1,
      value2: value2,
      disabledDate: disabledDate,
      shortcuts: shortcuts,
    }
  },
})
<\/script>
`)],-1),I=u("h2",{id:"qi-ta-ri-qi-dan-wei"},[u("a",{class:"header-anchor",href:"#qi-ta-ri-qi-dan-wei"}),c(" \u5176\u4ED6\u65E5\u671F\u5355\u4F4D")],-1),J=u("p",null,"\u901A\u8FC7\u6269\u5C55\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\uFF0C\u53EF\u4EE5\u9009\u62E9\u5468\u3001\u6708\u3001\u5E74\u6216\u591A\u4E2A\u65E5\u671F",-1),K=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col-md-12 col-lg-10">
      <p>\u5468</p>
      <hl-date-picker v-model="value1" type="week" format="gggg \u7B2C ww \u5468" placeholder="\u9009\u62E9\u5468" block />
    </hl-col>
    <hl-col span="col-md-12 col-lg-10">
      <p>\u6708</p>
      <hl-date-picker v-model="value2" type="month" placeholder="\u9009\u62E9\u6708" block fill />
    </hl-col>
  </hl-row>

  <hl-row align="center" gap="var(--xl)" class="m-t-lg">
    <hl-col span="col-md-12 col-lg-10">
      <p>\u5E74</p>
      <hl-date-picker v-model="value3" type="year" placeholder="\u9009\u62E9\u5E74" block />
    </hl-col>
    <hl-col span="col-md-12 col-lg-10">
      <p>\u591A\u4E2A\u65E5\u671F</p>
      <hl-date-picker v-model="value4" type="dates" placeholder="\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F" block />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref(''),
      value4: ref(''),
    }
  },
})
<\/script>
`)],-1),L=u("h2",{id:"xuan-ze-ri-qi-fan-wei"},[u("a",{class:"header-anchor",href:"#xuan-ze-ri-qi-fan-wei"}),c(" \u9009\u62E9\u65E5\u671F\u8303\u56F4")],-1),O=u("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4\u8303\u56F4",-1),Q=u("div",null,[u("p",null,[c("\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u6708\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"unlink-panels"),c("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),X=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col-lg-12">
      <p>\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="daterange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        block
      />
    </hl-col>
    <hl-col span="col-lg-12">
      <p>\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        :shortcuts="shortcuts"
        block
        fill
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
    return {
      shortcuts: shortcuts,
      value1: ref(''),
      value2: ref(''),
    }
  },
})
<\/script>
`)],-1),Z=u("h2",{id:"xuan-ze-yue-fen-fan-wei"},[u("a",{class:"header-anchor",href:"#xuan-ze-yue-fen-fan-wei"}),c(" \u9009\u62E9\u6708\u4EFD\u8303\u56F4")],-1),uu=u("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u6708\u4EFD\u8303\u56F4",-1),eu=u("div",null,[u("p",null,[c("\u5728\u9009\u62E9\u6708\u4EFD\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u5E74\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"unlink-panels"),c("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col-lg-12">
      <p>\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u6708\u4EFD"
        end-placeholder="\u7ED3\u675F\u6708\u4EFD"
        block
      />
    </hl-col>
    <hl-col span="col-lg-12">
      <p>\u5E26\u5FEB\u6377\u9009\u9879</p>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      shortcuts: shortcuts,
      value1: ref(''),
      value2: ref(''),
    }
  },
})
<\/script>
`)],-1),lu=u("h2",{id:"mo-ren-zhi"},[u("a",{class:"header-anchor",href:"#mo-ren-zhi"}),c(" \u9ED8\u8BA4\u503C")],-1),ou=u("p",null,[c("\u5982\u679C\u7528\u6237\u6CA1\u6709\u9009\u62E9\u65E5\u671F\uFF0C\u90A3\u9ED8\u8BA4\u5C55\u793A\u5F53\u524D\u65E5\u7684\u6708\u4EFD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"default-value"),c(" \u6765\u8BBE\u7F6E\u6210\u5176\u4ED6\u7684\u65E5\u671F\u3002")],-1),au=u("p",null,[c("\u5982\u679C\u7C7B\u578B\u662F "),u("code",null,"daterange"),c(", "),u("code",null,"default-value"),c(" \u5219\u4F1A\u8BBE\u7F6E\u5DE6\u8FB9\u7A97\u53E3\u7684\u9ED8\u8BA4\u503C\u3002")],-1),du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col-lg-12">
      <p>\u65E5\u671F</p>
      <hl-date-picker v-model="value1" type="date" placeholder="Pick a date" :default-value="new Date(2010, 9, 1)" />
    </hl-col>

    <hl-col span="col-lg-12">
      <p>\u65E5\u671F\u8303\u56F4</p>
      <hl-date-picker v-model="value2" type="daterange" start-placeholder="Start Date" end-placeholder="End Date" :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      value1: ref(''),
      value2: ref(''),
    }
  },
})
<\/script>
`)],-1),nu=u("h2",{id:"ri-qi-ge-shi"},[u("a",{class:"header-anchor",href:"#ri-qi-ge-shi"}),c(" \u65E5\u671F\u683C\u5F0F")],-1),ru=u("p",null,[c("\u4F7F\u7528"),u("code",null,"format"),c("\u6307\u5B9A\u8F93\u5165\u6846\u7684\u683C\u5F0F\u3002\u4F7F\u7528"),u("code",null,"value-format"),c("\u6307\u5B9A\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u63A5\u53D7\u5E76\u8FD4\u56DE"),u("code",null,"Date"),c("\u5BF9\u8C61\u3002")],-1),su=u("div",{class:"md-warning"},[u("p",null,"\u8BF7\u6CE8\u610F\u5927\u5C0F\u5199")],-1),cu=u("div",null,[u("p",null,[c("\u5728 "),u("a",{href:"https://day.js.org/docs/zh-CN/display/format"},"\u8FD9\u91CC"),c(" \u67E5\u770B Day.js \u652F\u6301\u7684 format \u53C2\u6570\u3002")])],-1),pu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col">
      <p>\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" format="YYYY \u5E74 MM \u6708 DD \u65E5" />
      <p class="m-t-lg">\u503C\uFF1A{{ value1 }}</p>
    </hl-col>
    <hl-col span="col">
      <p>\u4F7F\u7528value-format</p>
      <hl-date-picker v-model="value2" type="date" placeholder="\u9009\u62E9\u65E5\u671F" format="YYYY \u5E74 MM \u6708 DD \u65E5" value-format="YYYY/MM/DD" />
      <p class="m-t-lg">\u503C\uFF1A{{ value2 }}</p>
    </hl-col>
    <hl-col span="col">
      <p>\u65F6\u95F4\u6233</p>
      <hl-date-picker v-model="value3" type="date" placeholder="\u9009\u62E9\u65E5\u671F" format="YYYY \u5E74 MM \u6708 DD \u65E5" value-format="x" />
      <p class="m-t-lg">\u503C\uFF1A{{ value3 }}</p>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref(''),
    }
  },
})
<\/script>
`)],-1),Eu=u("h2",{id:"mo-ren-xian-shi-ri-qi"},[u("a",{class:"header-anchor",href:"#mo-ren-xian-shi-ri-qi"}),c(" \u9ED8\u8BA4\u663E\u793A\u65E5\u671F")],-1),Fu=u("p",null,"\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u6307\u5B9A\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u9ED8\u8BA4\u65F6\u523B\u3002",-1),hu=u("div",null,[u("p",null,[c("\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u95F4\u90E8\u5206\u5747\u4E3A\u5F53\u5929\u7684 0 \u70B9 0 \u5206 0 \u79D2\u3002\u901A\u8FC7"),u("code",null,"default-time"),c("\u53EF\u4EE5\u5206\u522B\u6307\u5B9A\u4E8C\u8005\u7684\u5177\u4F53\u65F6\u523B\u3002"),u("code",null,"default-time"),c("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u503C\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002")])],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
  <p>\u7EC4\u4EF6\u503C\uFF1A{{ value }}</p>
  <hl-date-picker v-model="value" type="daterange" start-placeholder="\u5F00\u59CB\u65E5\u671F" end-placeholder="\u7ED3\u675F\u65E5\u671F" :default-time="defaultTime" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)] // '00:00:00', '23:59:59'
    return {
      value: ref(''),
      defaultTime: defaultTime,
    }
  },
})
<\/script>
`)],-1),mu=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>date(DatePicker) / array(DateRangePicker)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>DatePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u9009\u4E2D\u65E5\u671F\u6240\u4F7F\u7528\u7684\u5F53\u65E5\u5185\u5177\u4F53\u65F6\u523B</td><td>Date[]</td><td>\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>validate-event</td><td>\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>daterange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr></tbody></table>',8);function _u(d,l,e,n,m,f){const _=w("hl-demo0"),E=w("demo-block"),C=w("hl-demo1"),D=w("hl-demo2"),h=w("hl-demo3"),F=w("hl-demo4"),a=w("hl-demo5"),t=w("hl-demo6"),o=w("right-nav");return U(),q("section",P,[u("div",$,[H,R,v(E,{fs:""},{source:i(()=>[v(_)]),highlight:i(()=>[G]),default:i(()=>[W]),_:1}),I,J,v(E,{fs:""},{source:i(()=>[v(C)]),highlight:i(()=>[K]),_:1}),L,O,v(E,{fs:""},{source:i(()=>[v(D)]),highlight:i(()=>[X]),default:i(()=>[Q]),_:1}),Z,uu,v(E,{fs:""},{source:i(()=>[v(h)]),highlight:i(()=>[tu]),default:i(()=>[eu]),_:1}),lu,ou,au,v(E,{fs:""},{source:i(()=>[v(F)]),highlight:i(()=>[du]),_:1}),nu,ru,su,v(E,{fs:""},{source:i(()=>[v(a)]),highlight:i(()=>[pu]),default:i(()=>[cu]),_:1}),Eu,Fu,v(E,{fs:""},{source:i(()=>[v(t)]),highlight:i(()=>[iu]),default:i(()=>[hu]),_:1}),mu]),v(o)])}var Au=j(S,[["render",_u]]);export{Au as default};
