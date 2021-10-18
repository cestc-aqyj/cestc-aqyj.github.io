var S=Object.defineProperty;var y=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var H=(o,u,t)=>u in o?S(o,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[u]=t,V=(o,u)=>{for(var t in u||(u={}))M.call(u,t)&&H(o,t,u[t]);if(y)for(var t of y(u))N.call(u,t)&&H(o,t,u[t]);return o};import{H as g,o as T,C as j,D as d,v as _,M as f,av as D,_ as c,au as R}from"./vue.450bc1d0.js";import{_ as x}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const P={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:o,createTextVNode:u,resolveComponent:t,createVNode:r,withCtx:n,openBlock:C,createBlock:m}=D,F=o("p",null,[u("\u4F7F\u7528\u7684\u7BAD\u5934\u8FDB\u884C\u9009\u62E9\uFF1A"),o("code",null,"arrow-control")],-1),E=o("p",null,"\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u9009\u62E9\uFF1A\u9ED8\u8BA4",-1);function l(e,i){const B=t("two-airplay"),p=t("hl-icon"),k=t("hl-time-picker"),h=t("hl-col"),w=t("hl-row");return C(),m(w,{align:"center",gap:"var(--xl)"},{default:n(()=>[r(h,{span:"col-lg-10"},{default:n(()=>[F,r(k,{modelValue:e.value2,"onUpdate:modelValue":i[0]||(i[0]=A=>e.value2=A),"arrow-control":"","disabled-hours":e.disabledHours,"disabled-minutes":e.disabledMinutes,"disabled-seconds":e.disabledSeconds,placeholder:"\u4EFB\u610F\u65F6\u95F4\u70B9",block:""},{icon:n(()=>[r(p,null,{default:n(()=>[r(B)]),_:1})]),_:1},8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])]),_:1}),r(h,{span:"col-lg-10"},{default:n(()=>[E,r(k,{modelValue:e.value1,"onUpdate:modelValue":i[1]||(i[1]=A=>e.value1=A),"disabled-hours":e.disabledHours,"disabled-minutes":e.disabledMinutes,"disabled-seconds":e.disabledSeconds,placeholder:"\u4EFB\u610F\u65F6\u95F4\u70B9",block:"",fill:""},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])]),_:1})]),_:1})}const{defineComponent:a,ref:b}=D,s=(e,i)=>{const B=[];for(let p=e;p<=i;p++)B.push(p);return B},v=a({setup(){let e=b(new Date(2016,9,10,18,40)),i=b(new Date(2016,9,10,18,40));return{value1:e,value2:i,disabledHours:()=>s(0,16).concat(s(19,23)),disabledMinutes:h=>{if(h===17)return s(0,29);if(h===18)return s(31,59)},disabledSeconds:(h,w)=>{if(h===18&&w===30)return s(1,59)}}}});return V({render:l},v)}(),"hl-demo1":function(){const{resolveComponent:o,createVNode:u,withCtx:t,openBlock:r,createBlock:n}=D;function C(l,a){const b=o("hl-time-picker"),s=o("hl-col"),v=o("hl-row");return r(),n(v,{align:"center",gap:"var(--xl)"},{default:t(()=>[u(s,{span:"col-lg-10"},{default:t(()=>[u(b,{modelValue:l.value2,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value2=e),"is-range":"","arrow-control":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4",block:""},null,8,["modelValue"])]),_:1}),u(s,{span:"col-lg-10"},{default:t(()=>[u(b,{modelValue:l.value1,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value1=e),"is-range":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4",block:"",fill:""},null,8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:m,ref:F}=D,E=m({setup(){let l=F([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]),a=F([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]);return{value1:l,value2:a}}});return V({render:C},E)}()}},U={class:"doc-main-content"},$={class:"doc-content"},z=d("h1",null,"TimePicker \u65F6\u95F4\u9009\u62E9\u5668",-1),q=d("p",null,"TimePicker \u7EC4\u4EF6\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u65F6\u95F4\u3002",-1),W=d("div",null,[d("p",null,[c("\u901A\u8FC7 "),d("code",null,"disabledHours"),c(),d("code",null,"disabledMinutes"),c(" \u548C "),d("code",null,"disabledSeconds"),c(" \u9650\u5236\u53EF\u9009\u65F6\u95F4\u8303\u56F4\u3002")])],-1),G=d("pre",null,[d("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col-lg-10">
      <p>\u4F7F\u7528\u7684\u7BAD\u5934\u8FDB\u884C\u9009\u62E9\uFF1A<code>arrow-control</code></p>
      <hl-time-picker
        v-model="value2"
        arrow-control
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="\u4EFB\u610F\u65F6\u95F4\u70B9"
        block
      >
        <template #icon>
          <hl-icon><two-airplay /></hl-icon>
        </template>
      </hl-time-picker>
    </hl-col>
    <hl-col span="col-lg-10">
      <p>\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u9009\u62E9\uFF1A\u9ED8\u8BA4</p>
      <hl-time-picker
        v-model="value1"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="\u4EFB\u610F\u65F6\u95F4\u70B9"
        block
        fill
      />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
export default defineComponent({
  setup() {
    let value1 = ref(new Date(2016, 9, 10, 18, 40))
    let value2 = ref(new Date(2016, 9, 10, 18, 40))

    // \u5982\u5141\u8BB8 17:30:00 - 18:30:00
    const disabledHours = () => {
      return makeRange(0, 16).concat(makeRange(19, 23))
    }

    const disabledMinutes = hour => {
      if (hour === 17) {
        return makeRange(0, 29)
      }
      if (hour === 18) {
        return makeRange(31, 59)
      }
    }

    const disabledSeconds = (hour, minute) => {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59)
      }
    }

    return {
      value1,
      value2,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
    }
  },
})
<\/script>
`)],-1),I=d("h2",{id:"ren-yi-shi-jian-fan-wei"},[d("a",{class:"header-anchor",href:"#ren-yi-shi-jian-fan-wei"}),c(" \u4EFB\u610F\u65F6\u95F4\u8303\u56F4")],-1),J=d("p",null,[c("\u6DFB\u52A0"),d("code",null,"is-range"),c("\u5C5E\u6027\u5373\u53EF\u9009\u62E9\u65F6\u95F4\u8303\u56F4\uFF0C\u540C\u6837\u652F\u6301"),d("code",null,"arrow-control"),c("\u5C5E\u6027\u3002")],-1),K=d("pre",null,[d("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--xl)">
    <hl-col span="col-lg-10">
      <hl-time-picker
        v-model="value2"
        is-range
        arrow-control
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65F6\u95F4"
        end-placeholder="\u7ED3\u675F\u65F6\u95F4"
        placeholder="\u9009\u62E9\u65F6\u95F4\u8303\u56F4"
        block
      />
    </hl-col>
    <hl-col span="col-lg-10">
      <hl-time-picker
        v-model="value1"
        is-range
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65F6\u95F4"
        end-placeholder="\u7ED3\u675F\u65F6\u95F4"
        placeholder="\u9009\u62E9\u65F6\u95F4\u8303\u56F4"
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
    let value1 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
    let value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])

    return {
      value1,
      value2,
    }
  },
})
<\/script>
`)],-1),L=R('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>date</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>is-range</td><td>\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>arrow-control</td><td>\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>popper-class</td><td>TimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>HH:mm:ss</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date(TimePicker) / string(TimeSelect)</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790(TimePicker) / \u53EF\u9009\u503C(TimeSelect)</td><td>\u2014</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled-hours</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</td><td>function</td><td>\u2014</td><td>-</td></tr><tr><td>disabled-minutes</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</td><td>function(selectedHour)</td><td>\u2014</td><td>-</td></tr><tr><td>disabled-seconds</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</td><td>function(selectedHour, selectedMinute)</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr><tr><td>blur</td><td>\u4F7F input \u5931\u53BB\u7126\u70B9</td><td>\u2014</td></tr></tbody></table>',8);function O(o,u,t,r,n,C){const m=g("hl-demo0"),F=g("demo-block"),E=g("hl-demo1"),l=g("right-nav");return T(),j("section",U,[d("div",$,[z,q,_(F,{fs:""},{source:f(()=>[_(m)]),highlight:f(()=>[G]),default:f(()=>[W]),_:1}),I,J,_(F,{fs:""},{source:f(()=>[_(E)]),highlight:f(()=>[K]),_:1}),L]),_(l)])}var et=x(P,[["render",O]]);export{et as default};
