var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,d=(e,d)=>{for(var o in d||(d={}))l.call(d,o)&&a(e,o,d[o]);if(t)for(var o of t(d))n.call(d,o)&&a(e,o,d[o]);return e};import{H as o,o as r,C as u,D as c,v as p,P as s,at as h,_ as i,as as m}from"./vue.69b6befa.js";import{_ as v}from"./index.f86c4400.js";import"./hongluan.17b69477.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.f9afdbe4.js";const f={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:e,resolveComponent:t,createVNode:l,withCtx:n,openBlock:a,createBlock:o}=h,r=e("p",null,"默认",-1),u=e("p",null,"带快捷选项",-1);const{defineComponent:c,ref:p}=h,s=c({setup(){const e=[{text:"今天",value:new Date},{text:"昨天",value:(()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e})()},{text:"一周以前",value:(()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e})()}];return{value1:p(""),value2:p(""),disabledDate:e=>e.getTime()>Date.now(),shortcuts:e}}});return d({render:function(e,d){const c=t("two-airplay"),p=t("hl-icon"),s=t("hl-date-picker"),h=t("hl-col"),i=t("hl-row");return a(),o(i,{align:"center",gap:"var(--xl)"},{default:n((()=>[l(h,{span:"col-lg-10 col-md-12"},{default:n((()=>[r,l(s,{modelValue:e.value1,"onUpdate:modelValue":d[0]||(d[0]=t=>e.value1=t),type:"date",placeholder:"选择日期",block:""},{icon:n((()=>[l(p,null,{default:n((()=>[l(c)])),_:1})])),_:1},8,["modelValue"])])),_:1}),l(h,{span:"col-lg-10 col-md-12"},{default:n((()=>[u,l(s,{modelValue:e.value2,"onUpdate:modelValue":d[1]||(d[1]=t=>e.value2=t),type:"date",placeholder:"选择日期","disabled-date":e.disabledDate,shortcuts:e.shortcuts,block:""},null,8,["modelValue","disabled-date","shortcuts"])])),_:1})])),_:1})}},s)}(),"hl-demo1":function(){const{createElementVNode:e,resolveComponent:t,createVNode:l,withCtx:n,Fragment:a,openBlock:o,createElementBlock:r}=h,u=e("p",null,"周",-1),c=e("p",null,"月",-1),p=e("p",null,"年",-1),s=e("p",null,"多个日期",-1);const{defineComponent:i,ref:m}=h,v=i({setup:()=>({value1:m(""),value2:m(""),value3:m(""),value4:m("")})});return d({render:function(e,d){const h=t("hl-date-picker"),i=t("hl-col"),m=t("hl-row");return o(),r(a,null,[l(m,{align:"center",gap:"var(--xl)"},{default:n((()=>[l(i,{span:"col-md-12 col-lg-10"},{default:n((()=>[u,l(h,{modelValue:e.value1,"onUpdate:modelValue":d[0]||(d[0]=t=>e.value1=t),type:"week",format:"gggg 第 ww 周",placeholder:"选择周",block:""},null,8,["modelValue"])])),_:1}),l(i,{span:"col-md-12 col-lg-10"},{default:n((()=>[c,l(h,{modelValue:e.value2,"onUpdate:modelValue":d[1]||(d[1]=t=>e.value2=t),type:"month",placeholder:"选择月",block:"",fill:""},null,8,["modelValue"])])),_:1})])),_:1}),l(m,{align:"center",gap:"var(--xl)",class:"m-t-lg"},{default:n((()=>[l(i,{span:"col-md-12 col-lg-10"},{default:n((()=>[p,l(h,{modelValue:e.value3,"onUpdate:modelValue":d[2]||(d[2]=t=>e.value3=t),type:"year",placeholder:"选择年",block:""},null,8,["modelValue"])])),_:1}),l(i,{span:"col-md-12 col-lg-10"},{default:n((()=>[s,l(h,{type:"dates",modelValue:e.value4,"onUpdate:modelValue":d[3]||(d[3]=t=>e.value4=t),placeholder:"选择一个或多个日期",block:""},null,8,["modelValue"])])),_:1})])),_:1})],64)}},v)}(),"hl-demo2":function(){const{createElementVNode:e,resolveComponent:t,createVNode:l,withCtx:n,openBlock:a,createBlock:o}=h,r=e("p",null,"默认",-1),u=e("p",null,"带快捷选项",-1);const{defineComponent:c,ref:p}=h,s=c({setup:()=>({shortcuts:[{text:"最近一周",value:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},{text:"最近一个月",value:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})()},{text:"最近三个月",value:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})()}],value1:p(""),value2:p("")})});return d({render:function(e,d){const c=t("hl-date-picker"),p=t("hl-col"),s=t("hl-row");return a(),o(s,{align:"center",gap:"var(--xl)"},{default:n((()=>[l(p,{span:"col-lg-12"},{default:n((()=>[r,l(c,{modelValue:e.value1,"onUpdate:modelValue":d[0]||(d[0]=t=>e.value1=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",block:""},null,8,["modelValue"])])),_:1}),l(p,{span:"col-lg-12"},{default:n((()=>[u,l(c,{modelValue:e.value2,"onUpdate:modelValue":d[1]||(d[1]=t=>e.value2=t),type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:e.shortcuts,block:"",fill:""},null,8,["modelValue","shortcuts"])])),_:1})])),_:1})}},s)}(),"hl-demo3":function(){const{createElementVNode:e,resolveComponent:t,createVNode:l,withCtx:n,openBlock:a,createBlock:o}=h,r=e("p",null,"默认",-1),u=e("p",null,"带快捷选项",-1);const{defineComponent:c,ref:p}=h,s=c({setup:()=>({shortcuts:[{text:"本月",value:[new Date,new Date]},{text:"今年至今",value:(()=>{const e=new Date;return[new Date((new Date).getFullYear(),0),e]})()},{text:"最近六个月",value:(()=>{const e=new Date,t=new Date;return t.setMonth(t.getMonth()-6),[t,e]})()}],value1:p(""),value2:p("")})});return d({render:function(e,d){const c=t("hl-date-picker"),p=t("hl-col"),s=t("hl-row");return a(),o(s,{align:"center",gap:"var(--xl)"},{default:n((()=>[l(p,{span:"col-lg-12"},{default:n((()=>[r,l(c,{modelValue:e.value1,"onUpdate:modelValue":d[0]||(d[0]=t=>e.value1=t),type:"monthrange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份",block:""},null,8,["modelValue"])])),_:1}),l(p,{span:"col-lg-12"},{default:n((()=>[u,l(c,{modelValue:e.value2,"onUpdate:modelValue":d[1]||(d[1]=t=>e.value2=t),type:"monthrange","unlink-panels":"","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份",shortcuts:e.shortcuts,block:""},null,8,["modelValue","shortcuts"])])),_:1})])),_:1})}},s)}(),"hl-demo4":function(){const{createElementVNode:e,resolveComponent:t,createVNode:l,withCtx:n,openBlock:a,createBlock:o}=h,r=e("p",null,"日期",-1),u=e("p",null,"日期范围",-1);const{defineComponent:c,ref:p}=h,s=c({setup:()=>({value1:p(""),value2:p("")})});return d({render:function(e,d){const c=t("hl-date-picker"),p=t("hl-col"),s=t("hl-row");return a(),o(s,{align:"center",gap:"var(--xl)"},{default:n((()=>[l(p,{span:"col-lg-12"},{default:n((()=>[r,l(c,{modelValue:e.value1,"onUpdate:modelValue":d[0]||(d[0]=t=>e.value1=t),type:"date",placeholder:"Pick a date","default-value":new Date(2010,9,1)},null,8,["modelValue","default-value"])])),_:1}),l(p,{span:"col-lg-12"},{default:n((()=>[u,l(c,{modelValue:e.value2,"onUpdate:modelValue":d[1]||(d[1]=t=>e.value2=t),type:"daterange","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2010,9,1),new Date(2010,10,1)]},null,8,["modelValue","default-value"])])),_:1})])),_:1})}},s)}(),"hl-demo5":function(){const{createElementVNode:e,resolveComponent:t,createVNode:l,toDisplayString:n,withCtx:a,openBlock:o,createBlock:r}=h,u=e("p",null,"默认为 Date 对象",-1),c={class:"m-t-lg"},p=e("p",null,"使用value-format",-1),s={class:"m-t-lg"},i=e("p",null,"时间戳",-1),m={class:"m-t-lg"};const{defineComponent:v,ref:f}=h,g=v({setup:()=>({value1:f(""),value2:f(""),value3:f("")})});return d({render:function(d,h){const v=t("hl-date-picker"),f=t("hl-col"),g=t("hl-row");return o(),r(g,{align:"center",gap:"var(--xl)"},{default:a((()=>[l(f,{span:"col"},{default:a((()=>[u,l(v,{modelValue:d.value1,"onUpdate:modelValue":h[0]||(h[0]=e=>d.value1=e),type:"date",placeholder:"选择日期",format:"YYYY 年 MM 月 DD 日"},null,8,["modelValue"]),e("p",c,"值："+n(d.value1),1)])),_:1}),l(f,{span:"col"},{default:a((()=>[p,l(v,{modelValue:d.value2,"onUpdate:modelValue":h[1]||(h[1]=e=>d.value2=e),type:"date",placeholder:"选择日期",format:"YYYY 年 MM 月 DD 日","value-format":"YYYY/MM/DD"},null,8,["modelValue"]),e("p",s,"值："+n(d.value2),1)])),_:1}),l(f,{span:"col"},{default:a((()=>[i,l(v,{modelValue:d.value3,"onUpdate:modelValue":h[2]||(h[2]=e=>d.value3=e),type:"date",placeholder:"选择日期",format:"YYYY 年 MM 月 DD 日","value-format":"x"},null,8,["modelValue"]),e("p",m,"值："+n(d.value3),1)])),_:1})])),_:1})}},g)}(),"hl-demo6":function(){const{toDisplayString:e,createElementVNode:t,resolveComponent:l,createVNode:n,Fragment:a,openBlock:o,createElementBlock:r}=h;const{defineComponent:u,ref:c}=h,p=u({setup(){const e=[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)];return{value:c(""),defaultTime:e}}});return d({render:function(d,u){const c=l("hl-date-picker");return o(),r(a,null,[t("p",null,"组件值："+e(d.value),1),n(c,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=e=>d.value=e),type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":d.defaultTime},null,8,["modelValue","default-time"])],64)}},p)}()}},g={class:"doc-main-content"},k={class:"doc-content"},w=c("h1",null,"DatePicker 日期选择器",-1),D=c("p",null,"以「日」为基本单位，基础的日期选择控件",-1),b=c("div",null,[c("p",null,[i("基本单位由"),c("code",null,"type"),i("属性指定。通过"),c("code",null,"shortcuts"),i("配置快捷选项，禁用日期通过 "),c("code",null,"disabledDate"),i(" 设置，传入函数")])],-1),y=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-row align="center" gap="var(--xl)">\n    <hl-col span="col-lg-10 col-md-12">\n      <p>默认</p>\n      <hl-date-picker v-model="value1" type="date" placeholder="选择日期" block>\n        <template #icon>\n          <hl-icon><two-airplay /></hl-icon>\n        </template>\n      </hl-date-picker>\n    </hl-col>\n    <hl-col span="col-lg-10 col-md-12">\n      <p>带快捷选项</p>\n      <hl-date-picker v-model="value2" type="date" placeholder="选择日期" :disabled-date="disabledDate" :shortcuts="shortcuts" block></hl-date-picker>\n    </hl-col>\n  </hl-row>\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      const disabledDate = time => {\n        return time.getTime() > Date.now()\n      }\n      const shortcuts = [\n        {\n          text: \'今天\',\n          value: new Date(),\n        },\n        {\n          text: \'昨天\',\n          value: (() => {\n            const date = new Date()\n            date.setTime(date.getTime() - 3600 * 1000 * 24)\n            return date\n          })(),\n        },\n        {\n          text: \'一周以前\',\n          value: (() => {\n            const date = new Date()\n            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)\n            return date\n          })(),\n        },\n      ]\n      const value1 = ref(\'\')\n      const value2 = ref(\'\')\n      return {\n        value1: value1,\n        value2: value2,\n        disabledDate: disabledDate,\n        shortcuts: shortcuts,\n      }\n    },\n  })\n<\/script>\n')],-1),V=c("h2",{id:"qi-ta-ri-qi-dan-wei"},[c("a",{class:"header-anchor",href:"#qi-ta-ri-qi-dan-wei"}),i(" 其他日期单位")],-1),x=c("p",null,"通过扩展基础的日期选择，可以选择周、月、年或多个日期",-1),C=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-row align="center" gap="var(--xl)">\n    <hl-col span="col-md-12 col-lg-10">\n      <p>周</p>\n      <hl-date-picker v-model="value1" type="week" format="gggg 第 ww 周" placeholder="选择周" block></hl-date-picker>\n    </hl-col>\n    <hl-col span="col-md-12 col-lg-10">\n      <p>月</p>\n      <hl-date-picker v-model="value2" type="month" placeholder="选择月" block fill></hl-date-picker>\n    </hl-col>\n  </hl-row>\n\n  <hl-row align="center" gap="var(--xl)" class="m-t-lg">\n    <hl-col span="col-md-12 col-lg-10">\n      <p>年</p>\n      <hl-date-picker v-model="value3" type="year" placeholder="选择年" block></hl-date-picker>\n    </hl-col>\n    <hl-col span="col-md-12 col-lg-10">\n      <p>多个日期</p>\n      <hl-date-picker type="dates" v-model="value4" placeholder="选择一个或多个日期" block></hl-date-picker>\n    </hl-col>\n  </hl-row>\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      return {\n        value1: ref(\'\'),\n        value2: ref(\'\'),\n        value3: ref(\'\'),\n        value4: ref(\'\'),\n      }\n    },\n  })\n<\/script>\n')],-1),Y=c("h2",{id:"xuan-ze-ri-qi-fan-wei"},[c("a",{class:"header-anchor",href:"#xuan-ze-ri-qi-fan-wei"}),i(" 选择日期范围")],-1),_=c("p",null,"可在一个选择器中便捷地选择一个时间范围",-1),T=c("div",null,[c("p",null,[i("在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用"),c("code",null,"unlink-panels"),i("属性解除联动。")])],-1),M=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-row align="center" gap="var(--xl)">\n    <hl-col span="col-lg-12">\n      <p>默认</p>\n      <hl-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" block></hl-date-picker>\n    </hl-col>\n    <hl-col span="col-lg-12">\n      <p>带快捷选项</p>\n      <hl-date-picker v-model="value2" type="daterange" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" block fill></hl-date-picker>\n    </hl-col>\n  </hl-row>\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      const shortcuts = [\n        {\n          text: \'最近一周\',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)\n            return [start, end]\n          })(),\n        },\n        {\n          text: \'最近一个月\',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)\n            return [start, end]\n          })(),\n        },\n        {\n          text: \'最近三个月\',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)\n            return [start, end]\n          })(),\n        },\n      ]\n      return {\n        shortcuts: shortcuts,\n        value1: ref(\'\'),\n        value2: ref(\'\'),\n      }\n    },\n  })\n<\/script>\n')],-1),N=c("h2",{id:"xuan-ze-yue-fen-fan-wei"},[c("a",{class:"header-anchor",href:"#xuan-ze-yue-fen-fan-wei"}),i(" 选择月份范围")],-1),U=c("p",null,"可在一个选择器中便捷地选择一个月份范围",-1),B=c("div",null,[c("p",null,[i("在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用"),c("code",null,"unlink-panels"),i("属性解除联动。")])],-1),E=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-row align="center" gap="var(--xl)">\n    <hl-col span="col-lg-12">\n      <p>默认</p>\n      <hl-date-picker v-model="value1" type="monthrange" range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" block></hl-date-picker>\n    </hl-col>\n    <hl-col span="col-lg-12">\n      <p>带快捷选项</p>\n      <hl-date-picker v-model="value2" type="monthrange" unlink-panels range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" :shortcuts="shortcuts" block></hl-date-picker>\n    </hl-col>\n  </hl-row>\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      const shortcuts = [\n        {\n          text: \'本月\',\n          value: [new Date(), new Date()],\n        },\n        {\n          text: \'今年至今\',\n          value: (() => {\n            const end = new Date()\n            const start = new Date(new Date().getFullYear(), 0)\n            return [start, end]\n          })(),\n        },\n        {\n          text: \'最近六个月\',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setMonth(start.getMonth() - 6)\n            return [start, end]\n          })(),\n        },\n      ]\n      return {\n        shortcuts: shortcuts,\n        value1: ref(\'\'),\n        value2: ref(\'\'),\n      }\n    },\n  })\n<\/script>\n')],-1),j=c("h2",{id:"mo-ren-zhi"},[c("a",{class:"header-anchor",href:"#mo-ren-zhi"}),i(" 默认值")],-1),q=c("p",null,[i("如果用户没有选择日期，那默认展示当前日的月份。你可以使用 "),c("code",null,"default-value"),i(" 来设置成其他的日期。")],-1),z=c("p",null,[i("如果类型是 "),c("code",null,"daterange"),i(", "),c("code",null,"default-value"),i(" 则会设置左边窗口的默认值。")],-1),P=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-row align="center" gap="var(--xl)">\n    <hl-col span="col-lg-12">\n      <p>日期</p>\n      <hl-date-picker v-model="value1" type="date" placeholder="Pick a date" :default-value="new Date(2010, 9, 1)"></hl-date-picker>\n    </hl-col>\n\n    <hl-col span="col-lg-12">\n      <p>日期范围</p>\n      <hl-date-picker v-model="value2" type="daterange" start-placeholder="Start Date" end-placeholder="End Date" :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"></hl-date-picker>\n    </hl-col>\n  </hl-row>\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      return {\n        value1: ref(\'\'),\n        value2: ref(\'\'),\n      }\n    },\n  })\n<\/script>\n')],-1),O=c("h2",{id:"ri-qi-ge-shi"},[c("a",{class:"header-anchor",href:"#ri-qi-ge-shi"}),i(" 日期格式")],-1),S=c("p",null,[i("使用"),c("code",null,"format"),i("指定输入框的格式。使用"),c("code",null,"value-format"),i("指定绑定值的格式。默认情况下，组件接受并返回"),c("code",null,"Date"),i("对象。")],-1),F=c("div",{class:"md-warning"},[c("p",null,"请注意大小写")],-1),A=c("div",null,[c("p",null,[i("在 "),c("a",{href:"https://day.js.org/docs/zh-CN/display/format"},"这里"),i(" 查看 Day.js 支持的 format 参数。")])],-1),H=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-row align="center" gap="var(--xl)">\n    <hl-col span="col">\n      <p>默认为 Date 对象</p>\n      <hl-date-picker v-model="value1" type="date" placeholder="选择日期" format="YYYY 年 MM 月 DD 日"></hl-date-picker>\n      <p class="m-t-lg">值：{{ value1 }}</p>\n    </hl-col>\n    <hl-col span="col">\n      <p>使用value-format</p>\n      <hl-date-picker v-model="value2" type="date" placeholder="选择日期" format="YYYY 年 MM 月 DD 日" value-format="YYYY/MM/DD"></hl-date-picker>\n      <p class="m-t-lg">值：{{ value2 }}</p>\n    </hl-col>\n    <hl-col span="col">\n      <p>时间戳</p>\n      <hl-date-picker v-model="value3" type="date" placeholder="选择日期" format="YYYY 年 MM 月 DD 日" value-format="x"> </hl-date-picker>\n      <p class="m-t-lg">值：{{ value3 }}</p>\n    </hl-col>\n  </hl-row>\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      return {\n        value1: ref(\'\'),\n        value2: ref(\'\'),\n        value3: ref(\'\'),\n      }\n    },\n  })\n<\/script>\n')],-1),I=c("h2",{id:"mo-ren-xian-shi-ri-qi"},[c("a",{class:"header-anchor",href:"#mo-ren-xian-shi-ri-qi"}),i(" 默认显示日期")],-1),R=c("p",null,"在选择日期范围时，指定起始日期和结束日期的默认时刻。",-1),G=c("div",null,[c("p",null,[i("选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过"),c("code",null,"default-time"),i("可以分别指定二者的具体时刻。"),c("code",null,"default-time"),i("接受一个数组，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。")])],-1),J=c("pre",null,[c("code",{class:"html"},'<template>\n  <p>组件值：{{ value }}</p>\n  <hl-date-picker v-model="value" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="defaultTime"></hl-date-picker>\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      const defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)] // \'00:00:00\', \'23:59:59\'\n      return {\n        value: ref(\'\'),\n        defaultTime: defaultTime,\n      }\n    },\n  })\n<\/script>\n')],-1),K=m('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>date(DatePicker) / array(DateRangePicker)</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时结束日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>显示类型</td><td>string</td><td>year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange</td><td>date</td></tr><tr><td>format</td><td>显示在输入框中的格式</td><td>string</td><td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>DatePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>—</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date</td><td>可被<code>new Date()</code>解析</td><td>—</td></tr><tr><td>default-time</td><td>范围选择时选中日期所使用的当日内具体时刻</td><td>Date[]</td><td>数组，长度为 2，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 <code>00:00:00</code></td><td>—</td></tr><tr><td>value-format</td><td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td><td>string</td><td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>fill</td><td>填充样式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>unlink-panels</td><td>在范围选择器里取消两个日期面板之间的联动</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>validate-event</td><td>输入时是否触发表单的校验</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>shortcuts</td><td>设置快捷选项，需要传入数组对象</td><td>object[{ text: string, value: date / function }]</td><td>—</td><td>—</td></tr><tr><td>disabled-date</td><td>设置禁用状态，参数为当前日期，要求返回 Boolean</td><td>Function</td><td>—</td><td>—</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td><td>—</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr><tr><td>calendar-change</td><td>选中日历日期后会执行的回调，只有当 <code>daterange</code> 才生效</td><td>[Date, Date]</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>—</td></tr></tbody></table>',8);var L=v(f,[["render",function(e,t,l,n,a,d){const h=o("hl-demo0"),i=o("demo-block"),m=o("hl-demo1"),v=o("hl-demo2"),f=o("hl-demo3"),L=o("hl-demo4"),Q=o("hl-demo5"),W=o("hl-demo6"),X=o("right-nav");return r(),u("section",g,[c("div",k,[w,D,p(i,null,{source:s((()=>[p(h)])),highlight:s((()=>[y])),default:s((()=>[b])),_:1}),V,x,p(i,null,{source:s((()=>[p(m)])),highlight:s((()=>[C])),_:1}),Y,_,p(i,null,{source:s((()=>[p(v)])),highlight:s((()=>[M])),default:s((()=>[T])),_:1}),N,U,p(i,null,{source:s((()=>[p(f)])),highlight:s((()=>[E])),default:s((()=>[B])),_:1}),j,q,z,p(i,null,{source:s((()=>[p(L)])),highlight:s((()=>[P])),_:1}),O,S,F,p(i,null,{source:s((()=>[p(Q)])),highlight:s((()=>[H])),default:s((()=>[A])),_:1}),I,R,p(i,null,{source:s((()=>[p(W)])),highlight:s((()=>[J])),default:s((()=>[G])),_:1}),K]),p(X)])}]]);export{L as default};