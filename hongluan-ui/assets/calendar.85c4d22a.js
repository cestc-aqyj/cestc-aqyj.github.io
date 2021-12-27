var N=Object.defineProperty;var g=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var y=(n,t,e)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,A=(n,t)=>{for(var e in t||(t={}))$.call(t,e)&&y(n,e,t[e]);if(g)for(var e of g(t))M.call(t,e)&&y(n,e,t[e]);return n};import{H as C,o as T,c as I,g as u,T as h,M as s,Y as P,aB as B,_ as o,aA as Y}from"./vue.54068bde.js";import{_ as H}from"./index.79199018.js";import"./hongluan.27fafe3d.js";import"./highlight.e2508551.js";import"./hongluan-icons.2b644934.js";const U={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=B;function r(l,E){const m=n("hl-calendar");return t(),e(m,{modelValue:l.value,"onUpdate:modelValue":E[0]||(E[0]=_=>l.value=_)},null,8,["modelValue"])}const{defineComponent:a,ref:d}=B,i=a({setup(){return{value:d(new Date)}}});return A({render:r},i)}(),"hl-demo1":function(){const{toDisplayString:n,normalizeClass:t,createElementVNode:e,resolveComponent:r,withCtx:a,openBlock:d,createBlock:i}=B;function l(m,_){const D=r("hl-calendar");return d(),i(D,null,{dateCell:a(({data:f})=>[e("p",{class:t(f.isSelected?"is-selected":"")},n(f.day.split("-").slice(1).join("-"))+" "+n(f.isSelected?"\u2714\uFE0F":""),3)]),_:1})}return A({render:l},{})}(),"hl-demo2":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=B;function r(d,i){const l=n("hl-calendar");return t(),e(l,{range:[new Date(2019,2,4),new Date(2019,2,24)]},null,8,["range"])}return A({render:r},{})}(),"hl-demo3":function(){const{createElementVNode:n,toDisplayString:t,createTextVNode:e,resolveComponent:r,withCtx:a,createVNode:d,openBlock:i,createBlock:l}=B,E=n("span",null,"\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9",-1),m=e("\u4E0A\u4E00\u5E74"),_=e("\u4E0A\u4E2A\u6708"),D=e("\u4ECA\u5929"),f=e("\u4E0B\u4E2A\u6708"),b=e("\u4E0B\u4E00\u5E74");function k(F,c){const p=r("hl-button"),w=r("hl-group"),V=r("hl-calendar");return i(),l(V,{ref:"calendar"},{header:a(({date:j})=>[E,n("span",null,t(j),1),d(w,null,{default:a(()=>[d(p,{size:"sm",onClick:c[0]||(c[0]=v=>F.selectDate("prev-year"))},{default:a(()=>[m]),_:1}),d(p,{size:"sm",onClick:c[1]||(c[1]=v=>F.selectDate("prev-month"))},{default:a(()=>[_]),_:1}),d(p,{size:"sm",onClick:c[2]||(c[2]=v=>F.selectDate("today"))},{default:a(()=>[D]),_:1}),d(p,{size:"sm",onClick:c[3]||(c[3]=v=>F.selectDate("next-month"))},{default:a(()=>[f]),_:1}),d(p,{size:"sm",onClick:c[4]||(c[4]=v=>F.selectDate("next-year"))},{default:a(()=>[b]),_:1})]),_:1})]),_:1},512)}const{defineComponent:x,ref:z}=B,S=x({setup(){const F=z(null);return{calendar:F,selectDate:p=>{F.value.selectDate(p)}}}});return A({render:k},S)}()}},W=u("h1",null,"Calendar \u65E5\u5386",-1),q=u("p",null,"\u663E\u793A\u65E5\u671F",-1),G=u("h2",{id:"ji-ben"},[u("a",{class:"header-anchor",href:"#ji-ben"}),o(" \u57FA\u672C")],-1),J=u("div",null,[u("p",null,[o("\u8BBE\u7F6E "),u("code",null,"value"),o(" \u6765\u6307\u5B9A\u5F53\u524D\u663E\u793A\u7684\u6708\u4EFD\u3002\u5982\u679C "),u("code",null,"value"),o(" \u672A\u6307\u5B9A\uFF0C\u5219\u663E\u793A\u5F53\u6708\u3002"),u("code",null,"value"),o(" \u652F\u6301 "),u("code",null,"v-model"),o(" \u53CC\u5411\u7ED1\u5B9A\u3002")])],-1),K=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-calendar v-model="value" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(new Date())
    return {
      value,
    }
  },
})
<\/script>
`)],-1),L=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),o(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),O=u("div",null,[u("p",null,[o("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),u("code",null,"dateCell"),o(" \u7684 "),u("code",null,"slot"),o(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5355\u5143\u683C\u4E2D\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),u("code",null,"slot"),o(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09, data\uFF08\u5305\u62EC type\uFF0CisSelected\uFF0Cday \u5C5E\u6027\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),Q=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),R=u("h2",{id:"zi-ding-yi-fan-wei"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-fan-wei"}),o(" \u81EA\u5B9A\u4E49\u8303\u56F4")],-1),X=u("div",null,[u("p",null,[o("\u8BBE\u7F6E "),u("code",null,"range"),o(" \u5C5E\u6027\u6307\u5B9A\u65E5\u5386\u7684\u663E\u793A\u8303\u56F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002")])],-1),Z=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]" />
</template>
`)],-1),uu=u("h2",{id:"zi-ding-yi-tou-bu"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-tou-bu"}),o(" \u81EA\u5B9A\u4E49\u5934\u90E8")],-1),eu=u("div",null,[u("p",null,[o("\u901A\u8FC7\u8BBE\u7F6E\u540D\u4E3A "),u("code",null,"header"),o(" \u7684 "),u("code",null,"slot"),o(" \u6765\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8\u663E\u793A\u7684\u5185\u5BB9\u3002\u5728 "),u("code",null,"slot"),o(" \u53EF\u4EE5\u83B7\u53D6\u5230 date\uFF08\u5F53\u524D\u5355\u5143\u683C\u7684\u65E5\u671F\uFF09\u3002\u8BE6\u60C5\u89E3\u91CA\u53C2\u8003\u4E0B\u65B9\u7684 API \u6587\u6863\u3002")])],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
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
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const calendar = ref(null)
    const selectDate = value => {
      calendar.value.selectDate(value)
    }

    return {
      calendar,
      selectDate,
    }
  },
})
<\/script>
`)],-1),ou=Y('<h2 id="guo-ji-hua"><a class="header-anchor" href="#guo-ji-hua"></a> \u56FD\u9645\u5316</h2><p>\u9ED8\u8BA4\u8BED\u8A00\u662F\u82F1\u8BED (English), \u5982\u9700\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00, \u8BF7\u53C2\u8003 <a href="#/zh-CN/component/i18n">\u56FD\u9645\u5316</a></p><p>\u6CE8\u610F\uFF1A\u65F6\u95F4\u65E5\u671F\u76F8\u5173\u7684\u8BED\u8A00\u914D\u7F6E\u5982 (\u6708\u4EFD\u540D, \u6BCF\u5468\u7B2C\u4E00\u5929\u662F\u5468\u51E0\u7B49) \u4E5F\u662F\u5728\u56FD\u9645\u5316\u91CC\u914D\u7F6E\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>Date</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002</td><td>[Date]Array</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>selectDate</td><td>\u5207\u6362\u65E5\u671F</td><td>today / prev-month / next-month / prev-year / next-year</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date-cell</td><td>{ type, isSelected, day, date }\uFF0C<code>type</code> \u8868\u793A\u8BE5\u65E5\u671F\u7684\u6240\u5C5E\u6708\u4EFD\uFF0C\u53EF\u9009\u503C\u6709 prev-month\uFF0Ccurrent-month\uFF0Cnext-month\uFF1B<code>isSelected</code> \u6807\u660E\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u9009\u4E2D\uFF1B<code>day</code> \u662F\u683C\u5F0F\u5316\u7684\u65E5\u671F\uFF0C\u683C\u5F0F\u4E3A yyyy-MM-dd\uFF1B<code>date</code> \u662F\u5355\u5143\u683C\u7684\u65E5\u671F</td></tr><tr><td>header</td><td>{ date }\uFF0C<code>date</code> \u662F\u6708\u4EFD\u4FE1\u606F</td></tr></tbody></table>',9);function nu(n,t,e,r,a,d){const i=C("hl-demo0"),l=C("demo-block"),E=C("hl-demo1"),m=C("hl-demo2"),_=C("hl-demo3"),D=C("right-nav");return T(),I(P,null,[u("section",null,[W,q,G,h(l,{fs:""},{source:s(()=>[h(i)]),highlight:s(()=>[K]),default:s(()=>[J]),_:1}),L,h(l,{fs:""},{source:s(()=>[h(E)]),highlight:s(()=>[Q]),default:s(()=>[O]),_:1}),R,h(l,{fs:""},{source:s(()=>[h(m)]),highlight:s(()=>[Z]),default:s(()=>[X]),_:1}),uu,h(l,{fs:""},{source:s(()=>[h(_)]),highlight:s(()=>[tu]),default:s(()=>[eu]),_:1}),ou]),h(D)],64)}var hu=H(U,[["render",nu]]);export{hu as default};
