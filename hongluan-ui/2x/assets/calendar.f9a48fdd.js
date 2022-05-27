var j=Object.defineProperty;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var z=(n,t,e)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,A=(n,t)=>{for(var e in t||(t={}))N.call(t,e)&&z(n,e,t[e]);if(x)for(var e of x(t))$.call(t,e)&&z(n,e,t[e]);return n};import{H as B,L as P,W as M,Q as u,X as E,P as c,a4 as I,S as o,o as L,aJ as p}from"./vue.059774a0.js";import{_ as O}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";import"./hongluan-icons.5b925e95.js";const Q={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=p;function r(l,h){const m=n("hl-calendar");return t(),e(m,{modelValue:l.value,"onUpdate:modelValue":h[0]||(h[0]=i=>l.value=i)},null,8,["modelValue"])}const{defineComponent:a}=p,{ref:d}=p;return A({render:r},a({setup(l,{expose:h}){h();const i={value:d(new Date),ref:d};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo1":function(){const{toDisplayString:n,normalizeClass:t,createElementVNode:e,resolveComponent:r,withCtx:a,openBlock:d,createBlock:_}=p;function l(m,i){const D=r("hl-calendar");return d(),_(D,null,{dateCell:a(({data:f})=>[e("p",{class:t(f.isSelected?"is-selected":"")},n(f.day.split("-").slice(1).join("-"))+" "+n(f.isSelected?"\u2714\uFE0F":""),3)]),_:1})}return A({render:l},{})}(),"hl-demo2":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=p;function r(d,_){const l=n("hl-calendar");return t(),e(l,{range:[new Date(2019,2,4),new Date(2019,2,24)]},null,8,["range"])}return A({render:r},{})}(),"hl-demo3":function(){const{createElementVNode:n,toDisplayString:t,createTextVNode:e,resolveComponent:r,withCtx:a,createVNode:d,openBlock:_,createBlock:l}=p,h=n("span",null,"\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9",-1),m=e("\u4E0A\u4E00\u5E74"),i=e("\u4E0A\u4E2A\u6708"),D=e("\u4ECA\u5929"),f=e("\u4E0B\u4E2A\u6708"),S=e("\u4E0B\u4E00\u5E74");function w(C,s){const F=r("hl-button"),k=r("hl-group"),v=r("hl-calendar");return _(),l(v,{ref:"calendar"},{header:a(({date:b})=>[h,n("span",null,t(b),1),d(k,null,{default:a(()=>[d(F,{size:"sm",onClick:s[0]||(s[0]=y=>C.selectDate("prev-year"))},{default:a(()=>[m]),_:1}),d(F,{size:"sm",onClick:s[1]||(s[1]=y=>C.selectDate("prev-month"))},{default:a(()=>[i]),_:1}),d(F,{size:"sm",onClick:s[2]||(s[2]=y=>C.selectDate("today"))},{default:a(()=>[D]),_:1}),d(F,{size:"sm",onClick:s[3]||(s[3]=y=>C.selectDate("next-month"))},{default:a(()=>[f]),_:1}),d(F,{size:"sm",onClick:s[4]||(s[4]=y=>C.selectDate("next-year"))},{default:a(()=>[S]),_:1})]),_:1})]),_:1},512)}const{defineComponent:V}=p,{ref:g}=p;return A({render:w},V({setup(C,{expose:s}){s();const F=g(null),v={calendar:F,selectDate:b=>{F.value.selectDate(b)},ref:g};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}))}()}},T=u("h1",null,"Calendar \u65E5\u5386",-1),W=u("p",null,"\u663E\u793A\u65E5\u671F",-1),X=u("h2",{id:"ji-ben"},[u("a",{class:"header-anchor",href:"#ji-ben"}),o(" \u57FA\u672C")],-1),H=u("div",null,[u("p",null,[o("\u8BBE\u7F6E "),u("code",null,"value"),o(" \u6765\u6307\u5B9A\u5F53\u524D\u663E\u793A\u7684\u6708\u4EFD\u3002\u5982\u679C "),u("code",null,"value"),o(" \u672A\u6307\u5B9A\uFF0C\u5219\u663E\u793A\u5F53\u6708\u3002"),u("code",null,"value"),o(" \u652F\u6301 "),u("code",null,"v-model"),o(" \u53CC\u5411\u7ED1\u5B9A\u3002")])],-1),J=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-calendar v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
<\/script>
`)],-1),U=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),o(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),q=u("div",null,[u("p",null,[o("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),u("code",null,"dateCell"),o(" \u7684 "),u("code",null,"slot"),o(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5355\u5143\u683C\u4E2D\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),u("code",null,"slot"),o(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09, data\uFF08\u5305\u62EC type\uFF0CisSelected\uFF0Cday \u5C5E\u6027\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-calendar>
    <template #dateCell="{data}">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '\u2714\uFE0F' :
          '' }}
      </p>
    </template>
  </hl-calendar>
</template>

<style>
  .is-selected {
    color: #1989fa;
  }
</style>
`)],-1),K=u("h2",{id:"zi-ding-yi-fan-wei"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-fan-wei"}),o(" \u81EA\u5B9A\u4E49\u8303\u56F4")],-1),R=u("div",null,[u("p",null,[o("\u8BBE\u7F6E "),u("code",null,"range"),o(" \u5C5E\u6027\u6307\u5B9A\u65E5\u5386\u7684\u663E\u793A\u8303\u56F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002")])],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]" />
</template>
`)],-1),Z=u("h2",{id:"zi-ding-yi-tou-bu"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-tou-bu"}),o(" \u81EA\u5B9A\u4E49\u5934\u90E8")],-1),uu=u("div",null,[u("p",null,[o("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),u("code",null,"header"),o(" \u7684 "),u("code",null,"slot"),o(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),u("code",null,"slot"),o(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-calendar ref="calendar">
    <template #header="{date}">
      <span>\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9</span>
      <span>{{ date }}</span>
      <hl-group>
        <hl-button size="sm" @click="selectDate('prev-year')">\u4E0A\u4E00\u5E74</hl-button>
        <hl-button size="sm" @click="selectDate('prev-month')">\u4E0A\u4E2A\u6708</hl-button>
        <hl-button size="sm" @click="selectDate('today')">\u4ECA\u5929</hl-button>
        <hl-button size="sm" @click="selectDate('next-month')">\u4E0B\u4E2A\u6708</hl-button>
        <hl-button size="sm" @click="selectDate('next-year')">\u4E0B\u4E00\u5E74</hl-button>
      </hl-group>
    </template>
  </hl-calendar>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const calendar = ref(null)
const selectDate = value => {
  calendar.value.selectDate(value)
}
<\/script>
`)],-1),tu=L('<h2 id="guo-ji-hua"><a class="header-anchor" href="#guo-ji-hua"></a> \u56FD\u9645\u5316</h2><p>\u9ED8\u8BA4\u8BED\u8A00\u662F\u4E2D\u6587 (Chinese), \u5982\u9700\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00, \u8BF7\u53C2\u8003 <a href="#/zh-CN/component/config-provider">ConfigProvider</a></p><p>\u6CE8\u610F\uFF1A\u65F6\u95F4\u65E5\u671F\u76F8\u5173\u7684\u8BED\u8A00\u914D\u7F6E\u5982 (\u6708\u4EFD\u540D, \u6BCF\u5468\u7B2C\u4E00\u5929\u662F\u5468\u51E0\u7B49) \u4E5F\u662F\u5728\u56FD\u9645\u5316\u91CC\u914D\u7F6E\u3002\u540C\u65F6\u9700\u8981\u5F15\u5165dayjs\u76F8\u5173\u7684\u8BED\u8A00\u5305<code>import &#39;path/to/dayjs/locale/zh-cn&#39;</code></p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>Date</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002</td><td>[Date]Array</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>selectDate</td><td>\u5207\u6362\u65E5\u671F</td><td>today / prev-month / next-month / prev-year / next-year</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date-cell</td><td>{ type, isSelected, day, date }\uFF0C<code>type</code> \u8868\u793A\u8BE5\u65E5\u671F\u7684\u6240\u5C5E\u6708\u4EFD\uFF0C\u53EF\u9009\u503C\u6709 prev-month\uFF0Ccurrent-month\uFF0Cnext-month\uFF1B<code>isSelected</code> \u6807\u660E\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u9009\u4E2D\uFF1B<code>day</code> \u662F\u683C\u5F0F\u5316\u7684\u65E5\u671F\uFF0C\u683C\u5F0F\u4E3A yyyy-MM-dd\uFF1B<code>date</code> \u662F\u5355\u5143\u683C\u7684\u65E5\u671F</td></tr><tr><td>header</td><td>{ date }\uFF0C<code>date</code> \u662F\u6708\u4EFD\u4FE1\u606F</td></tr></tbody></table>',9);function ou(n,t,e,r,a,d){const _=B("hl-demo0"),l=B("demo-block"),h=B("hl-demo1"),m=B("hl-demo2"),i=B("hl-demo3"),D=B("right-nav");return P(),M(I,null,[u("section",null,[T,W,X,E(l,{fs:""},{source:c(()=>[E(_)]),highlight:c(()=>[J]),default:c(()=>[H]),_:1}),U,E(l,{fs:""},{source:c(()=>[E(h)]),highlight:c(()=>[G]),default:c(()=>[q]),_:1}),K,E(l,{fs:""},{source:c(()=>[E(m)]),highlight:c(()=>[Y]),default:c(()=>[R]),_:1}),Z,E(l,{fs:""},{source:c(()=>[E(i)]),highlight:c(()=>[eu]),default:c(()=>[uu]),_:1}),tu]),E(D)],64)}var hu=O(Q,[["render",ou]]);export{hu as default};
