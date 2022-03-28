var z=Object.defineProperty;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var U=(t,o,u)=>o in t?z(t,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[o]=u,D=(t,o)=>{for(var u in o||(o={}))S.call(o,u)&&U(t,u,o[u]);if(N)for(var u of N(o))$.call(o,u)&&U(t,u,o[u]);return t};import{F as A,L as P,W as L,Q as e,X as v,P as c,a2 as Q,aJ as B,M as i,o as W}from"./vue.fdea90c3.js";import{_ as X}from"./index.6769b04b.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:t,resolveComponent:o,createVNode:u,Fragment:F,openBlock:E,createElementBlock:_}=B,m={class:"block"},d=t("span",{class:"demonstration"},"\u9ED8\u8BA4",-1),p={class:"block"},l=t("span",{class:"demonstration"},"\u81EA\u5B9A\u4E49\u521D\u59CB\u503C",-1),n={class:"block"},r=t("span",{class:"demonstration"},"\u9690\u85CF Tooltip",-1),s={class:"block"},b=t("span",{class:"demonstration"},"\u683C\u5F0F\u5316 Tooltip",-1),a={class:"block"},V=t("span",{class:"demonstration"},"\u7981\u7528",-1);function y(h,f){const k=o("hl-slider");return E(),_(F,null,[t("div",m,[d,u(k,{modelValue:h.value1,"onUpdate:modelValue":f[0]||(f[0]=C=>h.value1=C)},null,8,["modelValue"])]),t("div",p,[l,u(k,{modelValue:h.value2,"onUpdate:modelValue":f[1]||(f[1]=C=>h.value2=C)},null,8,["modelValue"])]),t("div",n,[r,u(k,{modelValue:h.value3,"onUpdate:modelValue":f[2]||(f[2]=C=>h.value3=C),"show-tooltip":!1},null,8,["modelValue"])]),t("div",s,[b,u(k,{modelValue:h.value4,"onUpdate:modelValue":f[3]||(f[3]=C=>h.value4=C),"format-tooltip":h.formatTooltip},null,8,["modelValue","format-tooltip"])]),t("div",a,[V,u(k,{modelValue:h.value5,"onUpdate:modelValue":f[4]||(f[4]=C=>h.value5=C),disabled:""},null,8,["modelValue"])])],64)}const{defineComponent:g,ref:w}=B,T=g({setup(){const h=w(0),f=w(50),k=w(36),C=w(48),j=w(42);return{value1:h,value2:f,value3:k,value4:C,value5:j,formatTooltip:x=>x/100}}});return D({render:y},T)}(),"hl-demo1":function(){const{createElementVNode:t,resolveComponent:o,createVNode:u,Fragment:F,openBlock:E,createElementBlock:_}=B,m={class:"block"},d=t("span",{class:"demonstration"},"\u4E0D\u663E\u793A\u95F4\u65AD\u70B9",-1),p={class:"block"},l=t("span",{class:"demonstration"},"\u663E\u793A\u95F4\u65AD\u70B9",-1);function n(a,V){const y=o("hl-slider");return E(),_(F,null,[t("div",m,[d,u(y,{modelValue:a.value1,"onUpdate:modelValue":V[0]||(V[0]=g=>a.value1=g),step:10},null,8,["modelValue"])]),t("div",p,[l,u(y,{modelValue:a.value2,"onUpdate:modelValue":V[1]||(V[1]=g=>a.value2=g),step:10,"show-stops":""},null,8,["modelValue"])])],64)}const{defineComponent:r,ref:s}=B,b=r({setup(){const a=s(0),V=s(0);return{value1:a,value2:V}}});return D({render:n},b)}(),"hl-demo2":function(){const{resolveComponent:t,createVNode:o,withCtx:u,openBlock:F,createBlock:E}=B;function _(l,n){const r=t("hl-slider"),s=t("hl-col"),b=t("hl-row");return F(),E(b,null,{default:u(()=>[o(s,{span:"col"},{default:u(()=>[o(r,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=a=>l.value=a),type:"primary"},null,8,["modelValue"])]),_:1}),o(s,{span:"col"},{default:u(()=>[o(r,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=a=>l.value=a),type:"danger"},null,8,["modelValue"])]),_:1}),o(s,{span:"col"},{default:u(()=>[o(r,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=a=>l.value=a),type:"warning"},null,8,["modelValue"])]),_:1}),o(s,{span:"col"},{default:u(()=>[o(r,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=a=>l.value=a),type:"success"},null,8,["modelValue"])]),_:1}),o(s,{span:"col"},{default:u(()=>[o(r,{modelValue:l.value,"onUpdate:modelValue":n[4]||(n[4]=a=>l.value=a),type:"info"},null,8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:m,ref:d}=B,p=m({setup(){return{value:d(50)}}});return D({render:_},p)}(),"hl-demo3":function(){const{resolveComponent:t,createVNode:o,openBlock:u,createElementBlock:F}=B,E={class:"block"};function _(l,n){const r=t("hl-slider");return u(),F("div",E,[o(r,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=s=>l.value=s),range:"","show-stops":"",max:10},null,8,["modelValue"])])}const{defineComponent:m,ref:d}=B,p=m({setup(){return{value:d([4,8])}}});return D({render:_},p)}(),"hl-demo4":function(){const{resolveComponent:t,createVNode:o,openBlock:u,createElementBlock:F}=B,E={class:"block"};function _(l,n){const r=t("hl-slider");return u(),F("div",E,[o(r,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=s=>l.value=s),vertical:"",height:"200px"},null,8,["modelValue"])])}const{defineComponent:m,ref:d}=B,p=m({setup(){return{value:d(0)}}});return D({render:_},p)}(),"hl-demo5":function(){const{resolveComponent:t,createVNode:o,openBlock:u,createElementBlock:F}=B,E={class:"block"};function _(l,n){const r=t("hl-slider");return u(),F("div",E,[o(r,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=s=>l.value=s),range:"",marks:l.marks},null,8,["modelValue","marks"])])}const{defineComponent:m,ref:d}=B,p=m({setup(){const l=d([30,60]),n=d({0:"0\xB0C",8:"8\xB0C",37:"37\xB0C",50:{style:{color:"#1989FA"},label:"50%"}});return{value:l,marks:n}}});return D({render:_},p)}()}},M=e("h1",null,"Slider \u6ED1\u5757",-1),q=e("p",null,"\u901A\u8FC7\u62D6\u52A8\u6ED1\u5757\u5728\u4E00\u4E2A\u56FA\u5B9A\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9",-1),G=e("div",null,[e("p",null,"\u901A\u8FC7\u8BBE\u7F6E\u7ED1\u5B9A\u503C\u81EA\u5B9A\u4E49\u6ED1\u5757\u7684\u521D\u59CB\u503C")],-1),H=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <span class="demonstration">\u9ED8\u8BA4</span>
    <hl-slider v-model="value1" />
  </div>
  <div class="block">
    <span class="demonstration">\u81EA\u5B9A\u4E49\u521D\u59CB\u503C</span>
    <hl-slider v-model="value2" />
  </div>
  <div class="block">
    <span class="demonstration">\u9690\u85CF Tooltip</span>
    <hl-slider v-model="value3" :show-tooltip="false" />
  </div>
  <div class="block">
    <span class="demonstration">\u683C\u5F0F\u5316 Tooltip</span>
    <hl-slider v-model="value4" :format-tooltip="formatTooltip" />
  </div>
  <div class="block">
    <span class="demonstration">\u7981\u7528</span>
    <hl-slider v-model="value5" disabled />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(0)
    const value2 = ref(50)
    const value3 = ref(36)
    const value4 = ref(48)
    const value5 = ref(42)

    const formatTooltip = val => {
      return val / 100
    }

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      formatTooltip,
    }
  },
})
<\/script>
`)],-1),I=e("h2",{id:"chi-san-zhi"},[e("a",{class:"header-anchor",href:"#chi-san-zhi"}),i(" \u79BB\u6563\u503C")],-1),K=e("p",null,"\u9009\u9879\u53EF\u4EE5\u662F\u79BB\u6563\u7684",-1),O=e("div",null,[e("p",null,[i("\u6539\u53D8"),e("code",null,"step"),i("\u7684\u503C\u53EF\u4EE5\u6539\u53D8\u6B65\u957F\uFF0C\u901A\u8FC7\u8BBE\u7F6E"),e("code",null,"show-stops"),i("\u5C5E\u6027\u53EF\u4EE5\u663E\u793A\u95F4\u65AD\u70B9")])],-1),R=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <span class="demonstration">\u4E0D\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value1" :step="10" />
  </div>
  <div class="block">
    <span class="demonstration">\u663E\u793A\u95F4\u65AD\u70B9</span>
    <hl-slider v-model="value2" :step="10" show-stops />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(0)
    const value2 = ref(0)

    return {
      value1,
      value2,
    }
  },
})
<\/script>
`)],-1),Y=e("h2",{id:"zhuang-tai-se"},[e("a",{class:"header-anchor",href:"#zhuang-tai-se"}),i(" \u72B6\u6001\u8272")],-1),Z=e("p",null,"Slider \u4E5F\u652F\u6301\u72B6\u6001\u8272",-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <hl-slider v-model="value" type="primary" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="danger" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="warning" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="success" />
    </hl-col>
    <hl-col span="col">
      <hl-slider v-model="value" type="info" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(50)

    return {
      value,
    }
  },
})
<\/script>
`)],-1),te=e("h2",{id:"fan-wei-xuan-ze"},[e("a",{class:"header-anchor",href:"#fan-wei-xuan-ze"}),i(" \u8303\u56F4\u9009\u62E9")],-1),ue=e("p",null,"\u652F\u6301\u9009\u62E9\u67D0\u4E00\u6570\u503C\u8303\u56F4",-1),oe=e("div",null,[e("p",null,[i("\u8BBE\u7F6E"),e("code",null,"range"),i("\u5373\u53EF\u5F00\u542F\u8303\u56F4\u9009\u62E9\uFF0C\u6B64\u65F6\u7ED1\u5B9A\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u5143\u7D20\u5206\u522B\u4E3A\u6700\u5C0F\u8FB9\u754C\u503C\u548C\u6700\u5927\u8FB9\u754C\u503C")])],-1),le=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-slider v-model="value" range show-stops :max="10" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref([4, 8])

    return {
      value,
    }
  },
})
<\/script>
`)],-1),ne=e("h2",{id:"shu-xiang-mo-shi"},[e("a",{class:"header-anchor",href:"#shu-xiang-mo-shi"}),i(" \u7AD6\u5411\u6A21\u5F0F")],-1),de=e("div",null,[e("p",null,[i("\u8BBE\u7F6E"),e("code",null,"vertical"),i("\u53EF\u4F7F Slider \u53D8\u6210\u7AD6\u5411\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6"),e("code",null,"height"),i("\u5C5E\u6027")])],-1),se=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-slider v-model="value" vertical height="200px" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(0)

    return {
      value,
    }
  },
})
<\/script>
`)],-1),ae=e("h2",{id:"zhan-shi-biao-ji"},[e("a",{class:"header-anchor",href:"#zhan-shi-biao-ji"}),i(" \u5C55\u793A\u6807\u8BB0")],-1),re=e("div",null,[e("p",null,[i("\u8BBE\u7F6E "),e("code",null,"marks"),i(" \u5C5E\u6027\u53EF\u4EE5\u5C55\u793A\u6807\u8BB0")])],-1),ce=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-slider v-model="value" range :marks="marks" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref([30, 60])
    const marks = ref({
      0: '0\xB0C',
      8: '8\xB0C',
      37: '37\xB0C',
      50: {
        style: {
          color: '#1989FA',
        },
        label: '50%',
      },
    })

    return {
      value,
      marks,
    }
  },
})
<\/script>
`)],-1),ie=W('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td>\u2014</td><td>100</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>step</td><td>\u6B65\u957F</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-stops</td><td>\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-tooltip</td><td>\u662F\u5426\u663E\u793A tooltip</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>format-tooltip</td><td>\u683C\u5F0F\u5316 tooltip message</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range</td><td>\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>vertical</td><td>\u662F\u5426\u7AD6\u5411\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>height</td><td>Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>debounce</td><td>\u8F93\u5165\u65F6\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2\uFF0C\u4EC5\u5728<code>show-input</code>\u7B49\u4E8E true \u65F6\u6709\u6548</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>tooltip-class</td><td>tooltip \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>marks</td><td>\u6807\u8BB0\uFF0C key \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A number \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 <code>[min, max]</code> \u5185\uFF0C\u6BCF\u4E2A\u6807\u8BB0\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr><tr><td>input</td><td>\u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u6D3B\u52A8\u8FC7\u7A0B\u5B9E\u65F6\u89E6\u53D1\uFF09</td><td>\u6539\u53D8\u540E\u7684\u503C</td></tr></tbody></table>',4);function me(t,o,u,F,E,_){const m=A("hl-demo0"),d=A("demo-block"),p=A("hl-demo1"),l=A("hl-demo2"),n=A("hl-demo3"),r=A("hl-demo4"),s=A("hl-demo5"),b=A("right-nav");return P(),L(Q,null,[e("section",null,[M,q,v(d,{fs:""},{source:c(()=>[v(m)]),highlight:c(()=>[H]),default:c(()=>[G]),_:1}),I,K,v(d,{fs:""},{source:c(()=>[v(p)]),highlight:c(()=>[R]),default:c(()=>[O]),_:1}),Y,Z,v(d,{fs:""},{source:c(()=>[v(l)]),highlight:c(()=>[ee]),_:1}),te,ue,v(d,{fs:""},{source:c(()=>[v(n)]),highlight:c(()=>[le]),default:c(()=>[oe]),_:1}),ne,v(d,{fs:""},{source:c(()=>[v(r)]),highlight:c(()=>[se]),default:c(()=>[de]),_:1}),ae,v(d,{fs:""},{source:c(()=>[v(s)]),highlight:c(()=>[ce]),default:c(()=>[re]),_:1}),ie]),v(b)],64)}var Be=X(J,[["render",me]]);export{Be as default};
