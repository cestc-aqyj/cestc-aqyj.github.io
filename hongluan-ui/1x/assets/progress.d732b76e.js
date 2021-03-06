var y=Object.defineProperty;var D=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(r,t,n)=>t in r?y(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,A=(r,t)=>{for(var n in t||(t={}))N.call(t,n)&&b(r,n,t[n]);if(D)for(var n of D(t))V.call(t,n)&&b(r,n,t[n]);return r};import{Y as F,L as $,W as j,Q as e,a2 as g,a0 as h,P as S,aG as f,a3 as u,o as z}from"./vue.a2bb788b.js";import{_ as M}from"./index.6c900e06.js";import"./hongluan.bb564fd4.js";import"./highlight.5c3ff532.js";import"./hongluan-icons.da8bad7b.js";const W={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:r,createVNode:t,Fragment:n,openBlock:d,createElementBlock:i}=f;function _(s,o){const c=r("hl-progress");return d(),i(n,null,[t(c,{type:"disabled",percentage:40,format:s.format,round:"",class:"m-b-xxl"},null,8,["format"]),t(c,{percentage:40,format:s.format,round:"",class:"m-b-xxl"},null,8,["format"]),t(c,{percentage:40,format:s.format,"stroke-width":"3px","show-text":!1,"track-color":"#fff"},null,8,["format"])],64)}const{defineComponent:m,ref:l}=f,a=m({setup(){return{text:l("\u81EA\u5B9A\u4E49\u5185\u5BB9"),format:c=>`${c}%  Complete`}}});return A({render:_},a)}(),"hl-demo1":function(){const{resolveComponent:r,createVNode:t,withCtx:n,openBlock:d,createBlock:i}=f;function _(a,s){const o=r("hl-progress"),c=r("hl-col"),p=r("hl-row");return d(),i(p,{gap:"var(--md)"},{default:n(()=>[t(c,{span:"col-lg-8"},{default:n(()=>[t(o,{percentage:68,type:"warning",format:a.formatWarning},null,8,["format"])]),_:1}),t(c,{span:"col-lg-8"},{default:n(()=>[t(o,{percentage:68,type:"success",format:a.formatSuccess},null,8,["format"])]),_:1}),t(c,{span:"col-lg-8"},{default:n(()=>[t(o,{percentage:68,type:"error",format:a.formatDanger},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:m}=f,l=m({setup(){return{formatSuccess:c=>`${c}%  success`,formatWarning:c=>`${c}%  warning`,formatDanger:c=>`${c}%  danger`}}});return A({render:_},l)}(),"hl-demo2":function(){const{resolveComponent:r,createVNode:t,withCtx:n,Fragment:d,openBlock:i,createElementBlock:_}=f;function m(o,c){const p=r("hl-progress"),B=r("hl-col"),E=r("hl-row"),v=r("two-minus"),C=r("hl-icon"),w=r("hl-button"),k=r("two-plus"),x=r("hl-group");return i(),_(d,null,[t(E,{gap:"var(--md)"},{default:n(()=>[t(B,{span:"col-lg-8"},{default:n(()=>[t(p,{percentage:o.percentage,color:o.customColor},null,8,["percentage","color"])]),_:1}),t(B,{span:"col-lg-8"},{default:n(()=>[t(p,{percentage:o.percentage,color:o.customColorMethod},null,8,["percentage","color"])]),_:1}),t(B,{span:"col-lg-8"},{default:n(()=>[t(p,{percentage:o.percentage,color:o.customColors},null,8,["percentage","color"])]),_:1})]),_:1}),t(x,{merge:"",indent:"",class:"m-t-lg"},{default:n(()=>[t(w,{class:"group-item",onClick:o.decrease},{icon:n(()=>[t(C,null,{default:n(()=>[t(v)]),_:1})]),_:1},8,["onClick"]),t(w,{class:"group-item",onClick:o.increase},{icon:n(()=>[t(C,null,{default:n(()=>[t(k)]),_:1})]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:l,ref:a}=f,s=l({setup(){const o=a(20),c=a("#409eff"),p=a([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]);return{percentage:o,customColor:c,customColors:p,customColorMethod:C=>C<30?"#909399":C<70?"#e6a23c":"#67c23a",increase:()=>{o.value+=10,o.value>100&&(o.value=100)},decrease:()=>{o.value-=10,o.value<0&&(o.value=0)}}}});return A({render:m},s)}(),"hl-demo3":function(){const{resolveComponent:r,createVNode:t,withCtx:n,openBlock:d,createBlock:i}=f;function _(a,s){const o=r("hl-progress"),c=r("hl-col"),p=r("hl-row");return d(),i(p,{gap:"var(--md)"},{default:n(()=>[t(c,{span:12},{default:n(()=>[t(o,{percentage:50,striped:"",format:a.format},null,8,["format"])]),_:1}),t(c,{span:12},{default:n(()=>[t(o,{percentage:50,striped:"",active:"",format:a.formatActive},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:m}=f,l=m({setup(){return{format:o=>`${o}%  \u9759\u6001\u6761\u7EB9`,formatActive:o=>`${o}%  \u6EDA\u52A8\u6761\u7EB9`}}});return A({render:_},l)}(),"hl-demo4":function(){const{resolveComponent:r,createVNode:t,withCtx:n,openBlock:d,createBlock:i}=f;function _(a,s){const o=r("hl-progress"),c=r("hl-col"),p=r("hl-row");return d(),i(p,{gap:"var(--md)"},{default:n(()=>[t(c,{span:12},{default:n(()=>[t(o,{percentage:50,indicating:"",format:a.format},null,8,["format"])]),_:1}),t(c,{span:12},{default:n(()=>[t(o,{percentage:50,indicating:"",active:"",format:a.formatActive},null,8,["format"])]),_:1})]),_:1})}const{defineComponent:m}=f,l=m({setup(){return{format:o=>`${o}%  \u9759\u6001`,formatActive:o=>`${o}%  \u8109\u51B2`}}});return A({render:_},l)}(),"hl-demo5":function(){const{resolveComponent:r,openBlock:t,createBlock:n}=f;function d(l,a){const s=r("hl-progress");return t(),n(s,{"show-as":"stack",stack:l.list},null,8,["stack"])}const{defineComponent:i,ref:_}=f,m=i({setup(){return{list:_([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:a=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${a}%`}])}}});return A({render:d},m)}(),"hl-demo6":function(){const{resolveComponent:r,createVNode:t,createElementVNode:n,Fragment:d,openBlock:i,createElementBlock:_}=f,m=n("br",null,null,-1);function l(c,p){const B=r("hl-progress");return i(),_(d,null,[t(B,{percentage:75,"stroke-width":"var(--xxs)",text:c.text,"show-as":"line"},null,8,["text"]),m,t(B,{percentage:75,"stroke-width":"1px","hide-label":"","show-as":"line"})],64)}const{defineComponent:a,ref:s}=f,o=a({setup(){return{text:s("\u6B63\u5728\u4E0B\u8F7D hongluan-ui_v_1.2.1.rar")}}});return A({render:l},o)}(),"hl-demo7":function(){const{resolveComponent:r,createVNode:t,Fragment:n,openBlock:d,createElementBlock:i}=f;function _(s,o){const c=r("hl-progress");return d(),i(n,null,[t(c,{percentage:40,format:s.format,round:"",class:"m-b-xxl",align:"right"},null,8,["format"]),t(c,{"show-as":"stack",stack:s.list,align:"right"},null,8,["stack"])],64)}const{defineComponent:m,ref:l}=f,a=m({setup(){const s=l("\u81EA\u5B9A\u4E49\u5185\u5BB9"),o=p=>`${p}%  Complete`,c=l([{percentage:35,type:"",striped:!0,active:!1},{percentage:20,type:"warning",indicating:!0,active:!0},{percentage:20,type:"error",format:p=>`\u81EA\u5B9A\u4E49\u5185\u5BB9${p}%`}]);return{text:s,format:o,list:c}}});return A({render:_},a)}(),"hl-demo8":function(){const{resolveComponent:r,createVNode:t,toDisplayString:n,createElementVNode:d,withCtx:i,openBlock:_,createBlock:m}=f,l={class:"progress-content"};function a(o,c){const p=r("hl-progress"),B=r("hl-group");return _(),m(B,{indent:"var(--lg)"},{default:i(()=>[t(p,{"show-as":"circle",percentage:80}),t(p,{"show-as":"circle","stroke-width":"4px",percentage:70,color:"#f00","track-color":"rgba(0,0,0, 0.01)"},{default:i(({percentage:E})=>[d("div",l,[d("h5",null,"\u6D4B\u8BD5\uFF1A"+n(E),1)])]),_:1}),t(p,{"show-as":"circle",type:"info","stroke-width":"4px",percentage:50,text:"Label"})]),_:1})}return A({render:a},{})}(),"hl-demo9":function(){const{resolveComponent:r,createVNode:t,withCtx:n,openBlock:d,createBlock:i}=f;function _(o,c){const p=r("two-minus"),B=r("hl-icon"),E=r("hl-button"),v=r("hl-progress"),C=r("two-plus"),w=r("hl-group"),k=r("hl-col"),x=r("hl-row");return d(),i(x,null,{default:n(()=>[t(k,{span:"col-md-12"},{default:n(()=>[t(w,{indent:"var(--md)",class:"middle"},{default:n(()=>[t(E,{onClick:o.decrease},{icon:n(()=>[t(B,null,{default:n(()=>[t(p)]),_:1})]),_:1},8,["onClick"]),t(v,{"show-as":"dashboard",percentage:o.percentage,color:o.colors},null,8,["percentage","color"]),t(E,{onClick:o.increase},{icon:n(()=>[t(B,null,{default:n(()=>[t(C)]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),t(k,{span:"col-md-12"},{default:n(()=>[t(v,{"show-as":"dashboard",percentage:o.percentage2,color:o.colors},null,8,["percentage","color"])]),_:1})]),_:1})}const{defineComponent:m,ref:l,onMounted:a}=f,s=m({setup(){const o=l(10),c=l(0),p=l([{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),B=()=>{o.value+=10,o.value>100&&(o.value=100)},E=()=>{o.value-=10,o.value<0&&(o.value=0)};return a(()=>{setInterval(()=>{c.value=c.value%100+10},500)}),{percentage:o,percentage2:c,colors:p,increase:B,decrease:E}}});return A({render:_},s)}(),"hl-demo10":function(){const{createElementVNode:r,resolveComponent:t,withCtx:n,createVNode:d,toDisplayString:i,Fragment:_,openBlock:m,createElementBlock:l}=f,a=r("span",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),s={class:"progress-label"},o={class:"progress-percentage"};function c(v,C){const w=t("hl-progress");return m(),l(_,null,[d(w,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:n(()=>[a]),_:1}),d(w,{percentage:40,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",class:"m-b-xxl"},{default:n(({percentage:k,text:x})=>[r("span",s,i(x),1),r("span",o,i(k)+"%",1)]),_:1}),d(w,{"show-as":"stack",stack:v.list,class:"m-b-xxl"},{default:n(({percentage:k})=>[r("strong",null,"\u8FDB\u5EA6\uFF1A"+i(k)+"%",1)]),_:1},8,["stack"])],64)}const{defineComponent:p,ref:B}=f,E=p({setup(){const v=B([{percentage:35},{percentage:20,status:"warning"},{percentage:20,status:"danger"}]),C=B("\u81EA\u5B9A\u4E49\u5185\u5BB9");return{list:v,text:C}}});return A({render:c},E)}()}},P=e("h1",null,"Progress \u8FDB\u5EA6\u6761",-1),L=e("p",null,"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u8FDB\u5EA6\uFF0C\u544A\u77E5\u7528\u6237\u5F53\u524D\u72B6\u6001\u548C\u9884\u671F\u3002",-1),q=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),u(" \u57FA\u7840\u7528\u6CD5")],-1),I=e("div",null,[e("p",null,[u("\u6DFB\u52A0"),e("code",null,"percentage"),u("\u5C5E\u6027\u5373\u53EF\uFF0C\u8868\u793A\u8FDB\u5EA6\u6761\u5BF9\u5E94\u7684\u767E\u5206\u6BD4\uFF0C"),e("strong",null,"\u5FC5\u586B"),u("\uFF0C\u5FC5\u987B\u5728 0-100\u3002\u901A\u8FC7 "),e("code",null,"format"),u(" \u5C5E\u6027\u6765\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9\u3002")])],-1),Q=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),G=e("h2",{id:"jin-du-tiao-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-du-tiao-zhuang-tai"}),u(" \u8FDB\u5EA6\u6761\u72B6\u6001")],-1),X=e("p",null,[u("\u6DFB\u52A0"),e("code",null,"type"),u("\u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001\u3002")],-1),Y=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col-lg-8">
      <hl-progress :percentage="68" type="warning" :format="formatWarning" />
    </hl-col>
    <hl-col span="col-lg-8">
      <hl-progress :percentage="68" type="success" :format="formatSuccess" />
    </hl-col>
    <hl-col span="col-lg-8">
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
`)],-1),H=e("h2",{id:"jie-duan-yan-se"},[e("a",{class:"header-anchor",href:"#jie-duan-yan-se"}),u(" \u9636\u6BB5\u989C\u8272")],-1),J=e("p",null,[u("\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"color"),u(" \u8BBE\u7F6E\u8FDB\u5EA6\u6761\u4E0D\u540C\u9636\u6BB5\u7684\u989C\u8272\uFF0C"),e("code",null,"color"),u(" \u53EF\u4EE5\u63A5\u53D7\u989C\u8272\u5B57\u7B26\u4E32\uFF0C\u51FD\u6570\u548C\u6570\u7EC4\u3002")],-1),K=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--md)">
    <hl-col span="col-lg-8">
      <hl-progress :percentage="percentage" :color="customColor" />
    </hl-col>
    <hl-col span="col-lg-8">
      <hl-progress :percentage="percentage" :color="customColorMethod" />
    </hl-col>
    <hl-col span="col-lg-8">
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
export default defineComponent({
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
`)],-1),O=e("h2",{id:"tiao-wen-zhuang"},[e("a",{class:"header-anchor",href:"#tiao-wen-zhuang"}),u(" \u6761\u7EB9\u72B6")],-1),R=e("p",null,[u("\u6DFB\u52A0"),e("code",null,"striped"),u("\u5C5E\u6027\u8BBE\u7F6E\u6761\u7EB9\u72B6, \u6DFB\u52A0"),e("code",null,"active"),u("\u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u7EB9\u3002")],-1),T=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),U=e("h2",{id:"mai-chong-zhuang"},[e("a",{class:"header-anchor",href:"#mai-chong-zhuang"}),u(" \u8109\u51B2\u72B6")],-1),Z=e("p",null,[u("\u6DFB\u52A0"),e("code",null,"indicating"),u("\u5C5E\u6027\u8BBE\u7F6E\u9759\u6001\u8109\u51B2\u72B6, \u6DFB\u52A0"),e("code",null,"active"),u("\u5C5E\u6027\u8BBE\u7F6E\u8109\u51B2\u72B6\u3002")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),te=e("h2",{id:"dui-die-zhuang"},[e("a",{class:"header-anchor",href:"#dui-die-zhuang"}),u(" \u5806\u53E0\u72B6")],-1),oe=e("p",null,[u("\u6DFB\u52A0\u5C5E\u6027"),e("code",null,"show-as"),u("\u503C\u4E3A"),e("code",null,"stack"),u("\u65F6\u53D8\u4E3A\u5806\u53E0\u72B6\uFF0C\u7528 "),e("code",null,"stack"),u(" \u4F20\u53C2\u3002")],-1),ne=e("div",null,[e("p",null,[u("\u53EF\u9009\u503C\uFF1A"),e("code",null,"percentage"),u(","),e("code",null,"type"),u(","),e("code",null,"striped"),u(","),e("code",null,"indicating"),u(","),e("code",null,"active"),u(","),e("code",null,"format"),u(" \u7B49\u5C5E\u6027")])],-1),re=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ue=e("h2",{id:"xian-tiao-yang-shi"},[e("a",{class:"header-anchor",href:"#xian-tiao-yang-shi"}),u(" \u7EBF\u6761\u6837\u5F0F")],-1),ce=e("p",null,[u("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"show-as"),u("\u4E3A "),e("code",null,"line"),u(" \u6837\u5F0F\u5373\u53EF\u5C55\u73B0\u4E00\u79CD\u65B0\u7684\u5F62\u6001")],-1),le=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ae=e("h2",{id:"dui-qi-fang-shi"},[e("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),u(" \u5BF9\u9F50\u65B9\u5F0F")],-1),se=e("p",null,[u("\u8BBE\u7F6E\u5C5E\u6027"),e("code",null,"align"),u("\u4E3A "),e("code",null,"left"),u(),e("code",null,"center"),u(),e("code",null,"right"),u(" \u6837\u5F0F\u5373\u53EF\u6539\u53D8\u8FDB\u5EA6\u6761\u7684\u5BF9\u9F50\u65B9\u5F0F")],-1),pe=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-progress :percentage="40" :format="format" round class="m-b-xxl" align="right" />

  <hl-progress show-as="stack" :stack="list" align="right" />
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
`)],-1),de=e("h2",{id:"huan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#huan-xing-jin-du-tiao"}),u(" \u73AF\u5F62\u8FDB\u5EA6\u6761")],-1),ie=e("p",null,[u("Progress \u7EC4\u4EF6\u53EF\u901A\u8FC7 "),e("code",null,"show-as"),u(" \u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF0C\u5728\u73AF\u5F62\u8FDB\u5EA6\u6761\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"width"),u(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u5176\u5927\u5C0F\u3002")],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),me=e("h2",{id:"yi-biao-pan-xing-jin-du-tiao"},[e("a",{class:"header-anchor",href:"#yi-biao-pan-xing-jin-du-tiao"}),u(" \u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761")],-1),ge=e("p",null,[u("\u901A\u8FC7 "),e("code",null,'show-as="dashboard"'),u("\u5C5E\u6027\u6765\u6307\u5B9A\u4F7F\u7528\u4EEA\u8868\u76D8\u5F62\u8FDB\u5EA6\u6761\u3002")],-1),_e=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-md-12">
      <hl-group indent="var(--md)" class="middle">
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
    <hl-col span="col-md-12">
      <hl-progress show-as="dashboard" :percentage="percentage2" :color="colors" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
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
`)],-1),fe=e("h2",{id:"zi-ding-yi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),u(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),Be=e("p",null,"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",-1),Ee=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Fe=z('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>percentage</td><td>\u767E\u5206\u6BD4</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>show-as</td><td>\u8FDB\u5EA6\u6761\u5C55\u73B0\u5F62\u5F0F</td><td>string</td><td>stack / circle / dashboard / line</td><td>\u2014</td></tr><tr><td>stroke-width</td><td>\u8FDB\u5EA6\u6761\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001</td><td>string</td><td>success / warning / error</td><td>\u2014</td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF08\u4F1A\u8986\u76D6\u72B6\u6001\u989C\u8272\uFF09(show-as \u4E3A stack \u65F6\u4E0D\u53EF\u7528)</td><td>string/function/array</td><td>\u2014</td><td></td></tr><tr><td>track-color</td><td>\u8FDB\u5EA6\u6761\u8F68\u9053\u989C\u8272</td><td>string</td><td>\u2014</td><td></td></tr><tr><td>show-text</td><td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>function(percentage)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>text</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u63CF\u8FF0\u6587\u5B57\uFF0C\u4E3B\u8981\u7528\u5728 line=true \u65F6\uFF0C\u663E\u793A\u5DE6\u4FA7\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>stack</td><td>\u6307\u5B9A\u8FDB\u5EA6\u6761\u96C6\u5408\uFF08\u53EA\u5728 show-as \u4E3A stack \u65F6\u53EF\u7528\uFF09</td><td>array[{percentage, type, striped, indicating, active, format}]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>align</td><td>\u8FDB\u5EA6\u6761\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u9ED8\u8BA4\u4E3A { percentage, text }\uFF0Cshow-as=stack \u65F6{percentage, type, striped, indicating, active, format}</td></tr></tbody></table>',4);function Ce(r,t,n,d,i,_){const m=F("hl-demo0"),l=F("demo-block"),a=F("hl-demo1"),s=F("hl-demo2"),o=F("hl-demo3"),c=F("hl-demo4"),p=F("hl-demo5"),B=F("hl-demo6"),E=F("hl-demo7"),v=F("hl-demo8"),C=F("hl-demo9"),w=F("hl-demo10"),k=F("right-nav");return $(),j(S,null,[e("section",null,[P,L,q,g(l,{fs:""},{source:h(()=>[g(m)]),highlight:h(()=>[Q]),default:h(()=>[I]),_:1}),G,X,g(l,{fs:""},{source:h(()=>[g(a)]),highlight:h(()=>[Y]),_:1}),H,J,g(l,{fs:""},{source:h(()=>[g(s)]),highlight:h(()=>[K]),_:1}),O,R,g(l,{fs:""},{source:h(()=>[g(o)]),highlight:h(()=>[T]),_:1}),U,Z,g(l,{fs:""},{source:h(()=>[g(c)]),highlight:h(()=>[ee]),_:1}),te,oe,g(l,{fs:""},{source:h(()=>[g(p)]),highlight:h(()=>[re]),default:h(()=>[ne]),_:1}),ue,ce,g(l,{fs:""},{source:h(()=>[g(B)]),highlight:h(()=>[le]),_:1}),ae,se,g(l,{fs:""},{source:h(()=>[g(E)]),highlight:h(()=>[pe]),_:1}),de,ie,g(l,{fs:""},{source:h(()=>[g(v)]),highlight:h(()=>[he]),_:1}),me,ge,g(l,{fs:""},{source:h(()=>[g(C)]),highlight:h(()=>[_e]),_:1}),fe,Be,g(l,{fs:""},{source:h(()=>[g(w)]),highlight:h(()=>[Ee]),_:1}),Fe]),g(k)],64)}var be=M(W,[["render",Ce]]);export{be as default};
