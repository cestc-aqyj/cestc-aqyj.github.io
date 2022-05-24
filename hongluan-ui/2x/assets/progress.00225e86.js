var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var N=(n,t,o)=>t in n?$(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,w=(n,t)=>{for(var o in t||(t={}))M.call(t,o)&&N(n,o,t[o]);if(y)for(var o of y(t))S.call(t,o)&&N(n,o,t[o]);return n};import{H as A,L as T,W as P,Q as e,X as g,P as h,a4 as j,aJ as f,S as u,o as z}from"./vue.059774a0.js";import{H as V}from"./hongluan-icons.5b925e95.js";import{_ as W}from"./index.9503bc3e.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const I={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,createVNode:t,Fragment:o,openBlock:d,createElementBlock:i}=f;function _(p,s){const c=n("hl-progress");return d(),i(o,null,[t(c,{type:"disabled",percentage:40,format:p.format,round:"",class:"m-b-xxl"},null,8,["format"]),t(c,{percentage:40,format:p.format,round:"",class:"m-b-xxl"},null,8,["format"]),t(c,{percentage:40,format:p.format,"stroke-width":"3px","show-text":!1,"track-color":"#fff"},null,8,["format"])],64)}const{defineComponent:m,ref:l}=f,a=m({setup(){return{text:l("\u81EA\u5B9A\u4E49\u5185\u5BB9"),format:c=>`${c}%  Complete`}}});return w({render:_},a)}(),"hl-demo1":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:d,createBlock:i}=f;function _(a,p){const s=n("hl-progress"),c=n("hl-col"),r=n("hl-row");return d(),i(r,{gap:"var(--md)"},{default:o(()=>[t(c,{span:"lg:col-8"},{default:o(()=>[t(s,{percentage:68,type:"warning",format:a.formatWarning},null,8,["format"])]),_:1}),t(c,{span:"lg:col-8"},{default:o(()=>[t(s,{percentage:68,type:"success",format:a.formatSuccess},null,8,["format"])]),_:1}),t(c,{span:"lg:col-8"},{default:o(()=>[t(s,{percentage:68,type:"error",format:a.formatDanger},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:m}=f,l=m({setup(){return{formatSuccess:c=>`${c}%  success`,formatWarning:c=>`${c}%  warning`,formatDanger:c=>`${c}%  danger`}}});return w({render:_},l)}(),"hl-demo2":function(){const{resolveComponent:n,createVNode:t,withCtx:o,Fragment:d,openBlock:i,createElementBlock:_}=f;function m(r,B){const E=n("hl-progress"),F=n("hl-col"),v=n("hl-row"),k=n("two-minus"),C=n("hl-icon"),x=n("hl-button"),D=n("two-plus"),b=n("hl-group");return i(),_(d,null,[t(v,{gap:"var(--md)"},{default:o(()=>[t(F,{span:"lg:col-8"},{default:o(()=>[t(E,{percentage:r.percentage,color:r.customColor},null,8,["percentage","color"])]),_:1}),t(F,{span:"lg:col-8"},{default:o(()=>[t(E,{percentage:r.percentage,color:r.customColorMethod},null,8,["percentage","color"])]),_:1}),t(F,{span:"lg:col-8"},{default:o(()=>[t(E,{percentage:r.percentage,color:r.customColors},null,8,["percentage","color"])]),_:1})]),_:1}),t(b,{merge:"",indent:"",class:"m-t-lg"},{default:o(()=>[t(x,{class:"group-item",onClick:r.decrease},{icon:o(()=>[t(C,null,{default:o(()=>[t(k)]),_:1})]),_:1},8,["onClick"]),t(x,{class:"group-item",onClick:r.increase},{icon:o(()=>[t(C,null,{default:o(()=>[t(D)]),_:1})]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:l,ref:a}=f,{TwoMinus:p,TwoPlus:s}=V,c=l({components:{TwoMinus:p,TwoPlus:s},setup(){const r=a(20),B=a("#409eff"),E=a([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]);return{percentage:r,customColor:B,customColors:E,customColorMethod:C=>C<30?"#909399":C<70?"#e6a23c":"#67c23a",increase:()=>{r.value+=10,r.value>100&&(r.value=100)},decrease:()=>{r.value-=10,r.value<0&&(r.value=0)}}}});return w({render:m},c)}(),"hl-demo3":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:d,createBlock:i}=f;function _(a,p){const s=n("hl-progress"),c=n("hl-col"),r=n("hl-row");return d(),i(r,{gap:"var(--md)"},{default:o(()=>[t(c,{span:12},{default:o(()=>[t(s,{percentage:50,striped:"",format:a.format},null,8,["format"])]),_:1}),t(c,{span:12},{default:o(()=>[t(s,{percentage:50,striped:"",active:"",format:a.formatActive},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:m}=f,l=m({setup(){return{format:s=>`${s}%  \u9759\u6001\u6761\u7EB9`,formatActive:s=>`${s}%  \u6EDA\u52A8\u6761\u7EB9`}}});return w({render:_},l)}(),"hl-demo4":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:d,createBlock:i}=f;function _(a,p){const s=n("hl-progress"),c=n("hl-col"),r=n("hl-row");return d(),i(r,{gap:"var(--md)"},{default:o(()=>[t(c,{span:12},{default:o(()=>[t(s,{percentage:50,indicating:"",format:a.format},null,8,["format"])]),_:1}),t(c,{span:12},{default:o(()=>[t(s,{percentage:50,indicating:"",active:"",format:a.formatActive},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:m}=f,l=m({setup(){return{format:s=>`${s}%  \u9759\u6001`,formatActive:s=>`${s}%  \u8109\u51B2`}}});return w({render:_},l)}(),"hl-demo5":function(){const{resolveComponent:n,openBlock:t,createBlock:o}=f;function d(l,a){const p=n("hl-progress");return t(),o(p,{"show-as":"stack",stack:l.list},null,8,["stack"])}const{defineComponent:i,ref:_}=f,m=i({setup(){return{list:_([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:a=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${a}%`}])}}});return w({render:d},m)}(),"hl-demo6":function(){const{resolveComponent:n,createVNode:t,createElementVNode:o,Fragment:d,openBlock:i,createElementBlock:_}=f,m=o("br",null,null,-1);function l(c,r){const B=n("hl-progress");return i(),_(d,null,[t(B,{percentage:75,"stroke-width":"var(--xxs)",text:c.text,"show-as":"line"},null,8,["text"]),m,t(B,{percentage:75,"stroke-width":"1px","hide-label":"","show-as":"line"})],64)}const{defineComponent:a,ref:p}=f,s=a({setup(){return{text:p("\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar")}}});return w({render:l},s)}(),"hl-demo7":function(){const{resolveComponent:n,createVNode:t,Fragment:o,openBlock:d,createElementBlock:i}=f;function _(p,s){const c=n("hl-progress");return d(),i(o,null,[t(c,{percentage:40,format:p.format,round:"",class:"m-b-xxl",align:"items-right"},null,8,["format"]),t(c,{"show-as":"stack",stack:p.list,align:"items-right"},null,8,["stack"])],64)}const{defineComponent:m,ref:l}=f,a=m({setup(){const p=l("\u81EA\u5B9A\u4E49\u5185\u5BB9"),s=r=>`${r}%  Complete`,c=l([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:r=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${r}%`}]);return{text:p,format:s,list:c}}});return w({render:_},a)}(),"hl-demo8":function(){const{resolveComponent:n,createVNode:t,toDisplayString:o,createElementVNode:d,withCtx:i,openBlock:_,createBlock:m}=f,l={class:"progress-content"};function a(s,c){const r=n("hl-progress"),B=n("hl-group");return _(),m(B,{indent:"var(--lg)"},{default:i(()=>[t(r,{"show-as":"circle",percentage:80}),t(r,{"show-as":"circle","stroke-width":"4px",percentage:70,color:"#f00","track-color":"rgba(0,0,0, 0.01)"},{default:i(({percentage:E})=>[d("div",l,[d("h5",null,"\u6D4B\u8BD5\uFF1A"+o(E),1)])]),_:1}),t(r,{"show-as":"circle",type:"info","stroke-width":"4px",percentage:50,text:"Label"})]),_:1})}return w({render:a},{})}(),"hl-demo9":function(){const{resolveComponent:n,createVNode:t,withCtx:o,openBlock:d,createBlock:i}=f;function _(r,B){const E=n("two-minus"),F=n("hl-icon"),v=n("hl-button"),k=n("hl-progress"),C=n("two-plus"),x=n("hl-group"),D=n("hl-col"),b=n("hl-row");return d(),i(b,null,{default:o(()=>[t(D,{span:"md:col-12"},{default:o(()=>[t(x,{indent:"var(--md)",class:"items-middle"},{default:o(()=>[t(v,{onClick:r.decrease},{icon:o(()=>[t(F,null,{default:o(()=>[t(E)]),_:1})]),_:1},8,["onClick"]),t(k,{"show-as":"dashboard",percentage:r.percentage,color:r.colors},null,8,["percentage","color"]),t(v,{onClick:r.increase},{icon:o(()=>[t(F,null,{default:o(()=>[t(C)]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),t(D,{span:"md:col-12"},{default:o(()=>[t(k,{"show-as":"dashboard",percentage:r.percentage2,color:r.colors},null,8,["percentage","color"])]),_:1})]),_:1})}const{defineComponent:m,ref:l,onMounted:a}=f,{TwoMinus:p,TwoPlus:s}=V,c=m({components:{TwoMinus:p,TwoPlus:s},setup(){const r=l(10),B=l(0),E=l([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),F=()=>{r.value+=10,r.value>100&&(r.value=100)},v=()=>{r.value-=10,r.value<0&&(r.value=0)};return a(()=>{setInterval(()=>{B.value=B.value%100+10},500)}),{percentage:r,percentage2:B,colors:E,increase:F,decrease:v}}});return w({render:_},c)}(),"hl-demo10":function(){const{createElementVNode:n,resolveComponent:t,withCtx:o,createVNode:d,toDisplayString:i,Fragment:_,openBlock:m,createElementBlock:l}=f,a=n("span",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),p={class:"progress-label"},s={class:"progress-percentage"};function c(F,v){const k=t("hl-progress");return m(),l(_,null,[d(k,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:o(()=>[a]),_:1}),d(k,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:o(({percentage:C,text:x})=>[n("span",p,i(x),1),n("span",s,i(C)+"%",1)]),_:1}),d(k,{"show-as":"stack",stack:F.list,class:"m-b-xxl"},{default:o(({percentage:C})=>[n("strong",null,"\u8FDB\u5EA6\uFF1A"+i(C)+"%",1)]),_:1},8,["stack"])],64)}const{defineComponent:r,ref:B}=f,E=r({setup(){const F=B([{percentage:35},{percentage:20,status:"warning"},{percentage:20,status:"danger"}]),v=B("\u81EA\u5B9A\u4E49\u5185\u5BB9");return{list:F,text:v}}});return w({render:c},E)}()}},L=e("h1",null,"Progress \u8FDB\u5EA6\u6761",-1),H=e("p",null,"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\uFF0C\u544A\u77E5\u7528\u6237\u5F53\u524D\u72B6\u6001\u548C\u9884\u671F\u3002",-1),q=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),u(" \u57FA\u7840\u7528\u6CD5")],-1),Q=e("div",null,[e("p",null,[u("\u6DFB\u52A0"),e("code",null,"percentage"),u("\u5C5E\u6027\u5373\u53EF\uFF0C\u8868\u793A\u8FDB\u5EA6\u6761\u5BF9\u5E94\u7684\u767E\u5206\u6BD4\uFF0C"),e("strong",null,"\u5FC5\u586B"),u("\uFF0C\u5FC5\u987B\u5728 0-100\u3002\u901A\u8FC7 "),e("code",null,"format"),u(" \u5C5E\u6027\u6765\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9\u3002")])],-1),X=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress type="disabled" :percentage="40" :format="format" round class="m-b-xxl" />
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" />
  <hl-progress :percentage="40" :format="format" stroke-width="3px" :show-text="false" track-color="#fff" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const text = ref('\u81EA\u5B9A\u4E49\u5185\u5BB9')

    const format = percentage => {
      return \`\${percentage}%  Complete\`
    }

    return {
      text,
      format,
    }
  },
})
<\/script>
`)],-1),J=e("h2",{id:"jin-du-tiao-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-du-tiao-zhuang-tai"}),u(" \u8FDB\u5EA6\u6761\u72B6\u6001")],-1),U=e("p",null,[u("\u6DFB\u52A0"),e("code",null,"type"),u("\u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001\u3002")],-1),G=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="warning" :format="formatWarning" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="success" :format="formatSuccess" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="68" type="error" :format="formatDanger" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const formatSuccess = percentage => {
      return \`\${percentage}%  success\`
    }
    const formatWarning = percentage => {
      return \`\${percentage}%  warning\`
    }
    const formatDanger = percentage => {
      return \`\${percentage}%  danger\`
    }
    return {
      formatSuccess,
      formatWarning,
      formatDanger,
    }
  },
})
<\/script>
`)],-1),K=e("h2",{id:"jie-duan-yan-se"},[e("a",{class:"header-anchor",href:"#jie-duan-yan-se"}),u(" \u9636\u6BB5\u989C\u8272")],-1),O=e("p",null,[u("\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"color"),u(" \u8BBE\u7F6E\u8FDB\u5EA6\u6761\u4E0D\u540C\u9636\u6BB5\u7684\u989C\u8272\uFF0C"),e("code",null,"color"),u(" \u53EF\u4EE5\u63A5\u53D7\u989C\u8272\u5B57\u7B26\u4E32\uFF0C\u51FD\u6570\u548C\u6570\u7EC4\u3002")],-1),R=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColor" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColorMethod" />
    </hl-col>
    <hl-col span="lg:col-8">
      <hl-progress :percentage="percentage" :color="customColors" />
    </hl-col>
  </hl-row>

  <hl-group merge indent class="m-t-lg">
    <hl-button class="group-item" @click="decrease">
      <template #icon>
        <hl-icon><two-minus /></hl-icon>
      </template>
    </hl-button>
    <hl-button class="group-item" @click="increase">
      <template #icon>
        <hl-icon><two-plus /></hl-icon>
      </template>
    </hl-button>
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoMinus, TwoPlus },
  setup() {
    const percentage = ref(20)
    const customColor = ref('#409eff')
    const customColors = ref([
      { color: '#f56c6c', percentage: 20 },
      { color: '#e6a23c', percentage: 40 },
      { color: '#5cb87a', percentage: 60 },
      { color: '#1989fa', percentage: 80 },
      { color: '#6f7ad3', percentage: 100 },
    ])

    const customColorMethod = percentage => {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    }
    const increase = () => {
      percentage.value += 10
      if (percentage.value > 100) {
        percentage.value = 100
      }
    }
    const decrease = () => {
      percentage.value -= 10
      if (percentage.value < 0) {
        percentage.value = 0
      }
    }
    return {
      percentage,
      customColor,
      customColors,
      customColorMethod,
      increase,
      decrease,
    }
  },
})
<\/script>
`)],-1),Y=e("h2",{id:"tiao-wen-zhuang"},[e("a",{class:"header-anchor",href:"#tiao-wen-zhuang"}),u(" \u6761\u7EB9\u72B6")],-1),Z=e("p",null,[u("\u6DFB\u52A0"),e("code",null,"striped"),u("\u5C5E\u6027\u8BBE\u7F6E\u6761\u7EB9\u72B6, \u6DFB\u52A0"),e("code",null,"active"),u("\u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u7EB9\u3002")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col :span="12">
      <hl-progress :percentage="50" striped :format="format" />
    </hl-col>
    <hl-col :span="12">
      <hl-progress :percentage="50" striped active :format="formatActive" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const format = percentage => {
      return \`\${percentage}%  \u9759\u6001\u6761\u7EB9\`
    }
    const formatActive = percentage => {
      return \`\${percentage}%  \u6EDA\u52A8\u6761\u7EB9\`
    }
    return {
      format,
      formatActive,
    }
  },
})
<\/script>
`)],-1),te=e("h2",{id:"mai-chong-zhuang"},[e("a",{class:"header-anchor",href:"#mai-chong-zhuang"}),u(" \u8109\u51B2\u72B6")],-1),oe=e("p",null,[u("\u6DFB\u52A0"),e("code",null,"indicating"),u("\u5C5E\u6027\u8BBE\u7F6E\u9759\u6001\u8109\u51B2\u72B6, \u6DFB\u52A0"),e("code",null,"active"),u("\u5C5E\u6027\u8BBE\u7F6E\u8109\u51B2\u72B6\u3002")],-1),ne=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col :span="12">
      <hl-progress :percentage="50" indicating :format="format" />
    </hl-col>
    <hl-col :span="12">
      <hl-progress :percentage="50" indicating active :format="formatActive" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const format = percentage => {
      return \`\${percentage}%  \u9759\u6001\`
    }
    const formatActive = percentage => {
      return \`\${percentage}%  \u8109\u51B2\`
    }
    return {
      format,
      formatActive,
    }
  },
})
<\/script>
`)],-1),re=e("h2",{id:"dui-die-zhuang"},[e("a",{class:"header-anchor",href:"#dui-die-zhuang"}),u(" \u5806\u53E0\u72B6")],-1),ue=e("p",null,[u("\u6DFB\u52A0\u5C5E\u6027"),e("code",null,"show-as"),u("\u503C\u4E3A"),e("code",null,"stack"),u("\u65F6\u53D8\u4E3A\u5806\u53E0\u72B6\uFF0C\u7528 "),e("code",null,"stack"),u(" \u4F20\u53C2\u3002")],-1),ce=e("div",null,[e("p",null,[u("\u53EF\u9009\u503C\uFF1A"),e("code",null,"percentage"),u(","),e("code",null,"type"),u(","),e("code",null,"striped"),u(","),e("code",null,"indicating"),u(","),e("code",null,"active"),u(","),e("code",null,"format"),u(" \u7B49\u5C5E\u6027")])],-1),le=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress show-as="stack" :stack="list" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const list = ref([
      {
        percentage: 35,
        type: '',
        striped: true,
        active: false,
      },
      {
        percentage: 20,
        type: 'warning',
        indicating: true,
        active: true,
      },
      {
        percentage: 20,
        type: 'error',
        format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,
      },
    ])
    return {
      list,
    }
  },
})
<\/script>
`)],-1),se=e("h2",{id:"xian-tiao-yang-shi"},[e("a",{class:"header-anchor",href:"#xian-tiao-yang-shi"}),u(" \u7EBF\u6761\u6837\u5F0F")],-1),ae=e("p",null,[u("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"show-as"),u("\u4E3A "),e("code",null,"line"),u(" \u6837\u5F0F\u5373\u53EF\u5C55\u73B0\u4E00\u79CD\u65B0\u7684\u5F62\u6001")],-1),pe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress :percentage="75" stroke-width="var(--xxs)" :text="text" show-as="line" />
  <br>
  <hl-progress :percentage="75" stroke-width="1px" hide-label show-as="line" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const text = ref('\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar')
    return {
      text,
    }
  },
})
<\/script>
`)],-1),de=e("h2",{id:"dui-qi-fang-shi"},[e("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),u(" \u5BF9\u9F50\u65B9\u5F0F")],-1),ie=e("p",null,[u("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"align"),u("\u4E3A "),e("code",null,"left"),u(),e("code",null,"center"),u(),e("code",null,"right"),u(" \u6837\u5F0F\u5373\u53EF\u6539\u53D8\u8FDB\u5EA6\u6761\u7684\u5BF9\u9F50\u65B9\u5F0F")],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" align="items-right" />

  <hl-progress show-as="stack" :stack="list" align="items-right" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const text = ref('\u81EA\u5B9A\u4E49\u5185\u5BB9')

    const format = percentage => {
      return \`\${percentage}%  Complete\`
    }

    const list = ref([
      {
        percentage: 35,
        type: '',
        striped: true,
        active: false,
      },
      {
        percentage: 20,
        type: 'warning',
        indicating: true,
        active: true,
      },
      {
        percentage: 20,
        type: 'error',
        format: p => \`\u81EA\u5B9A\u4E49\u5185\u5BB9\${p}%\`,
      },
    ])

    return {
      text,
      format,
      list,
    }
  },
})
<\/script>
`)],-1),me=e("h2",{id:"huan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#huan-xing-jin-du-tiao"}),u(" \u73AF\u5F62\u8FDB\u5EA6\u6761")],-1),ge=e("p",null,[u("Progress \u7EC4\u4EF6\u53EF\u901A\u8FC7 "),e("code",null,"show-as"),u(" \u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF0C\u5728\u73AF\u5F62\u8FDB\u5EA6\u6761\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"width"),u(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u5176\u5927\u5C0F\u3002")],-1),_e=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-group indent="var(--lg)">
    <hl-progress show-as="circle" :percentage="80" />
    <hl-progress show-as="circle" stroke-width="4px" :percentage="70" color="#f00" track-color="rgba(0,0,0, 0.01)">
      <template #default="{percentage}">
        <div class="progress-content">
          <h5>\u6D4B\u8BD5\uFF1A{{ percentage }}</h5>
        </div>
      </template>
    </hl-progress>
    <hl-progress show-as="circle" type="info" stroke-width="4px" :percentage="50" text="Label" />
  </hl-group>
</template>
`)],-1),fe=e("h2",{id:"yi-biao-pan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#yi-biao-pan-xing-jin-du-tiao"}),u(" \u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761")],-1),Be=e("p",null,[u("\u901A\u8FC7 "),e("code",null,'show-as="dashboard"'),u("\u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761\u3002")],-1),Ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="md:col-12">
      <hl-group indent="var(--md)" class="items-middle">
        <hl-button @click="decrease">
          <template #icon>
            <hl-icon><two-minus /></hl-icon>
          </template>
        </hl-button>
        <hl-progress show-as="dashboard" :percentage="percentage" :color="colors" />
        <hl-button @click="increase">
          <template #icon>
            <hl-icon><two-plus /></hl-icon>
          </template>
        </hl-button>
      </hl-group>
    </hl-col>
    <hl-col span="md:col-12">
      <hl-progress show-as="dashboard" :percentage="percentage2" :color="colors" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { TwoMinus, TwoPlus } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoMinus, TwoPlus },
  setup() {
    const percentage = ref(10)
    const percentage2 = ref(0)
    const colors = ref([
      { color: '#f56c6c', percentage: 20 },
      { color: '#e6a23c', percentage: 40 },
      { color: '#5cb87a', percentage: 60 },
      { color: '#1989fa', percentage: 80 },
      { color: '#6f7ad3', percentage: 100 },
    ])

    const increase = () => {
      percentage.value += 10
      if (percentage.value > 100) {
        percentage.value = 100
      }
    }
    const decrease = () => {
      percentage.value -= 10
      if (percentage.value < 0) {
        percentage.value = 0
      }
    }

    onMounted(() => {
      setInterval(() => {
        percentage2.value = (percentage2.value % 100) + 10
      }, 500)
    })

    return {
      percentage,
      percentage2,
      colors,
      increase,
      decrease,
    }
  },
})
<\/script>
`)],-1),Fe=e("h2",{id:"zi-ding-yi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),u(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),Ce=e("p",null,"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),Ae=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">
    <span>\u81EA\u5B9A\u4E49\u5185\u5BB9</span>
  </hl-progress>

  <hl-progress :percentage="40" text="\u81EA\u5B9A\u4E49\u5185\u5BB9" class="m-b-xxl">
    <template #default="{percentage, text}">
      <span class="progress-label">{{ text }}</span>
      <span class="progress-percentage">{{ percentage }}%</span>
    </template>
  </hl-progress>

  <hl-progress show-as="stack" :stack="list" class="m-b-xxl">
    <template #default="{percentage}">
      <strong>\u8FDB\u5EA6\uFF1A{{ percentage }}%</strong>
    </template>
  </hl-progress>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const list = ref([
      {
        percentage: 35,
      },
      {
        percentage: 20,
        status: 'warning',
      },
      {
        percentage: 20,
        status: 'danger',
      },
    ])
    const text = ref('\u81EA\u5B9A\u4E49\u5185\u5BB9')

    return {
      list,
      text,
    }
  },
})
<\/script>
`)],-1),ve=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>percentage</td><td>\u767E\u5206\u6BD4</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>show-as</td><td>\u8FDB\u5EA6\u6761\u5C55\u73B0\u5F62\u5F0F</td><td>string</td><td>stack / circle / dashboard / line</td><td>\u2014</td></tr><tr><td>stroke-width</td><td>\u8FDB\u5EA6\u6761\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001</td><td>string</td><td>success / warning / error</td><td>\u2014</td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF08\u4F1A\u8986\u76D6\u72B6\u6001\u989C\u8272\uFF09(show-as \u4E3A stack \u65F6\u4E0D\u53EF\u7528)</td><td>string/function/array</td><td>\u2014</td><td></td></tr><tr><td>track-color</td><td>\u8FDB\u5EA6\u6761\u8F68\u9053\u989C\u8272</td><td>string</td><td>\u2014</td><td></td></tr><tr><td>show-text</td><td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>function(percentage)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>text</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u63CF\u8FF0\u6587\u5B57\uFF0C\u4E3B\u8981\u7528\u5728 line=true \u65F6\uFF0C\u663E\u793A\u5DE6\u4FA7\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>stack</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u96C6\u5408\uFF08\u53EA\u5728 show-as \u4E3A stack \u65F6\u53EF\u7528\uFF09</td><td>array[{percentage, type, striped, indicating, active, format}]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>align</td><td>\u8FDB\u5EA6\u6761\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u9ED8\u8BA4\u4E3A { percentage, text }\uFF0Cshow-as=stack \u65F6{percentage, type, striped, indicating, active, format}</td></tr></tbody></table>',4);function we(n,t,o,d,i,_){const m=A("hl-demo0"),l=A("demo-block"),a=A("hl-demo1"),p=A("hl-demo2"),s=A("hl-demo3"),c=A("hl-demo4"),r=A("hl-demo5"),B=A("hl-demo6"),E=A("hl-demo7"),F=A("hl-demo8"),v=A("hl-demo9"),k=A("hl-demo10"),C=A("right-nav");return T(),P(j,null,[e("section",null,[L,H,q,g(l,{fs:""},{source:h(()=>[g(m)]),highlight:h(()=>[X]),default:h(()=>[Q]),_:1}),J,U,g(l,{fs:""},{source:h(()=>[g(a)]),highlight:h(()=>[G]),_:1}),K,O,g(l,{fs:""},{source:h(()=>[g(p)]),highlight:h(()=>[R]),_:1}),Y,Z,g(l,{fs:""},{source:h(()=>[g(s)]),highlight:h(()=>[ee]),_:1}),te,oe,g(l,{fs:""},{source:h(()=>[g(c)]),highlight:h(()=>[ne]),_:1}),re,ue,g(l,{fs:""},{source:h(()=>[g(r)]),highlight:h(()=>[le]),default:h(()=>[ce]),_:1}),se,ae,g(l,{fs:""},{source:h(()=>[g(B)]),highlight:h(()=>[pe]),_:1}),de,ie,g(l,{fs:""},{source:h(()=>[g(E)]),highlight:h(()=>[he]),_:1}),me,ge,g(l,{fs:""},{source:h(()=>[g(F)]),highlight:h(()=>[_e]),_:1}),fe,Be,g(l,{fs:""},{source:h(()=>[g(v)]),highlight:h(()=>[Ee]),_:1}),Fe,Ce,g(l,{fs:""},{source:h(()=>[g(k)]),highlight:h(()=>[Ae]),_:1}),ve]),g(C)],64)}var Ve=W(I,[["render",we]]);export{Ve as default};
