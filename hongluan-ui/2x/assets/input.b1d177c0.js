var L=Object.defineProperty;var U=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var z=(r,t,e)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,C=(r,t)=>{for(var e in t||(t={}))M.call(t,e)&&z(r,e,t[e]);if(U)for(var e of U(t))P.call(t,e)&&z(r,e,t[e]);return r};import{F as _,L as T,W,Q as u,X as c,P as i,a2 as J,aJ as f,M as d,o as q}from"./vue.fdea90c3.js";import{_ as Q}from"./index.f30b9df7.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const R={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.input,"onUpdate:modelValue":a[0]||(a[0]=l=>o.input=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{input:h("")}}});return C({render:p},F)}(),"hl-demo1":function(){const{resolveComponent:r,createVNode:t,withCtx:e,openBlock:p,createBlock:m}=f;function h(n,l){const E=r("hl-input"),B=r("hl-col"),A=r("hl-row");return p(),m(A,{gap:"var(--lg)"},{default:e(()=>[t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input1,"onUpdate:modelValue":l[0]||(l[0]=s=>n.input1=s),placeholder:"\u9ED8\u8BA4",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input2,"onUpdate:modelValue":l[1]||(l[1]=s=>n.input2=s),placeholder:"primary",type:"primary",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input3,"onUpdate:modelValue":l[2]||(l[2]=s=>n.input3=s),placeholder:"warning",type:"warning",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input4,"onUpdate:modelValue":l[3]||(l[3]=s=>n.input4=s),placeholder:"success",type:"success",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input5,"onUpdate:modelValue":l[4]||(l[4]=s=>n.input5=s),placeholder:"danger",type:"danger",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input6,"onUpdate:modelValue":l[5]||(l[5]=s=>n.input6=s),placeholder:"info",type:"info",block:""},null,8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:F,ref:o}=f,a=F({setup(){return{input1:o("\u9ED8\u8BA4"),input2:o("primary"),input3:o("warning"),input4:o("success"),input5:o("danger"),input6:o("info")}}});return C({render:h},a)}(),"hl-demo2":function(){const{resolveComponent:r,createVNode:t,withCtx:e,openBlock:p,createBlock:m}=f;function h(n,l){const E=r("hl-input"),B=r("hl-col"),A=r("hl-row");return p(),m(A,{gap:"var(--lg)"},{default:e(()=>[t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input1,"onUpdate:modelValue":l[0]||(l[0]=s=>n.input1=s),placeholder:"\u9ED8\u8BA4",fill:"",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input2,"onUpdate:modelValue":l[1]||(l[1]=s=>n.input2=s),placeholder:"primary",type:"primary",fill:"",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input3,"onUpdate:modelValue":l[2]||(l[2]=s=>n.input3=s),placeholder:"warning",type:"warning",fill:"",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input4,"onUpdate:modelValue":l[3]||(l[3]=s=>n.input4=s),placeholder:"success",type:"success",fill:"",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input5,"onUpdate:modelValue":l[4]||(l[4]=s=>n.input5=s),placeholder:"danger",type:"danger",fill:"",block:""},null,8,["modelValue"])]),_:1}),t(B,{span:"col-md-12"},{default:e(()=>[t(E,{modelValue:n.input6,"onUpdate:modelValue":l[5]||(l[5]=s=>n.input6=s),placeholder:"info",type:"info",fill:"",block:""},null,8,["modelValue"])]),_:1})]),_:1})}const{defineComponent:F,ref:o}=f,a=F({setup(){return{input1:o("\u9ED8\u8BA4"),input2:o("primary"),input3:o("warning"),input4:o("success"),input5:o("danger"),input6:o("info")}}});return C({render:h},a)}(),"hl-demo3":function(){const{resolveComponent:r,createVNode:t,Fragment:e,openBlock:p,createElementBlock:m}=f;function h(n,l){const E=r("hl-input");return p(),m(e,null,[t(E,{modelValue:n.input1,"onUpdate:modelValue":l[0]||(l[0]=B=>n.input1=B),placeholder:"sm",size:"sm",class:"m-r-md"},null,8,["modelValue"]),t(E,{modelValue:n.input2,"onUpdate:modelValue":l[1]||(l[1]=B=>n.input2=B),placeholder:"md",size:"md",class:"m-r-md"},null,8,["modelValue"]),t(E,{modelValue:n.input3,"onUpdate:modelValue":l[2]||(l[2]=B=>n.input3=B),placeholder:"lg",size:"lg",class:"m-r-md"},null,8,["modelValue"])],64)}const{defineComponent:F,ref:o}=f,a=F({setup(){return{input1:o(""),input2:o(""),input3:o("")}}});return C({render:h},a)}(),"hl-demo4":function(){const{resolveComponent:r,createVNode:t,Fragment:e,openBlock:p,createElementBlock:m}=f;function h(o,a){const n=r("hl-input");return p(),m(e,null,[t(n,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",block:""}),t(n,{"native-type":"textarea",placeholder:"\u6587\u672C\u57DF",rows:3,block:"",class:"m-t-md"})],64)}return C({render:h},{})}(),"hl-demo5":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.input,"onUpdate:modelValue":a[0]||(a[0]=l=>o.input=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",round:""},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{input:h("")}}});return C({render:p},F)}(),"hl-demo6":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.input,"onUpdate:modelValue":a[0]||(a[0]=l=>o.input=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",thin:""},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{input:h("")}}});return C({render:p},F)}(),"hl-demo7":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.input,"onUpdate:modelValue":a[0]||(a[0]=l=>o.input=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",disabled:!0},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{input:h("")}}});return C({render:p},F)}(),"hl-demo8":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.input,"onUpdate:modelValue":a[0]||(a[0]=l=>o.input=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",clearable:""},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{input:h("\u6D4B\u8BD5\u8F93\u5165")}}});return C({render:p},F)}(),"hl-demo9":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.input,"onUpdate:modelValue":a[0]||(a[0]=l=>o.input=l),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801","show-password":""},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{input:h("")}}});return C({render:p},F)}(),"hl-demo10":function(){const{createElementVNode:r,resolveComponent:t,createVNode:e,withCtx:p,createTextVNode:m,Fragment:h,openBlock:F,createElementBlock:o}=f,a=r("p",null,"\u5C5E\u6027\u65B9\u5F0F\uFF1A",-1),n=r("p",{class:"m-t-lg"},"\u81EA\u5B9A\u4E49slot\u65B9\u5F0F\uFF1A",-1),l=r("select",{class:"hl-input sm thin"},[r("option",{value:""},"http://"),r("option",{value:""},"https://"),r("option",{value:""},"ssh:")],-1),E=m("\u90AE\u7BB1:");function B(g,v){const w=t("two-calendar"),D=t("hl-icon"),b=t("hl-input"),V=t("hl-col"),N=t("two-mail"),x=t("hl-row"),j=t("two-search"),I=t("hl-popover"),$=t("hl-spinner");return F(),o(h,null,[a,e(x,{gap:"var(--lg)"},{default:p(()=>[e(V,{span:"col"},{default:p(()=>[e(b,{modelValue:g.input1,"onUpdate:modelValue":v[0]||(v[0]=k=>g.input1=k),placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",type:"danger",block:""},{suffix:p(()=>[e(D,null,{default:p(()=>[e(w)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(V,{span:"col"},{default:p(()=>[e(b,{modelValue:g.input2,"onUpdate:modelValue":v[1]||(v[1]=k=>g.input2=k),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",block:""},{prefix:p(()=>[e(D,null,{default:p(()=>[e(N)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),n,e(x,{gap:"var(--lg)"},{default:p(()=>[e(V,{span:"col"},{default:p(()=>[e(b,{modelValue:g.input3,"onUpdate:modelValue":v[2]||(v[2]=k=>g.input3=k),placeholder:"\u8BF7\u8F93\u5165\u952E\u8BCD\u8FDB\u884C\u641C\u7D22",block:""},{prefix:p(()=>[l]),suffix:p(()=>[e(I,{placement:"top",tooltip:"",trigger:"hover",content:"\u641C\u7D22\u4E00\u4E0B"},{reference:p(()=>[e(D,null,{default:p(()=>[e(j)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(V,{span:"col"},{default:p(()=>[e(b,{modelValue:g.input4,"onUpdate:modelValue":v[3]||(v[3]=k=>g.input4=k),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",block:""},{prefix:p(()=>[E]),suffix:p(()=>[e($,{animation:"around-right"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}const{defineComponent:A,ref:s}=f,y=A({setup(){return{input1:s(""),input2:s(""),input3:s(""),input4:s("916471@qq.com")}}});return C({render:B},y)}(),"hl-demo11":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.textarea,"onUpdate:modelValue":a[0]||(a[0]=l=>o.textarea=l),"native-type":"textarea",rows:3,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",block:""},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{textarea:h("")}}});return C({render:p},F)}(),"hl-demo12":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=f;function p(o,a){const n=r("hl-input");return t(),e(n,{modelValue:o.textarea1,"onUpdate:modelValue":a[0]||(a[0]=l=>o.textarea1=l),"native-type":"textarea",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",autosize:"",block:""},null,8,["modelValue"])}const{defineComponent:m,ref:h}=f,F=m({setup(){return{textarea1:h("")}}});return C({render:p},F)}(),"hl-demo13":function(){const{resolveComponent:r,createVNode:t,Fragment:e,openBlock:p,createElementBlock:m}=f;function h(n,l){const E=r("hl-input");return p(),m(e,null,[t(E,{modelValue:n.text,"onUpdate:modelValue":l[0]||(l[0]=B=>n.text=B),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:"10","show-word-limit":"",block:""},null,8,["modelValue"]),t(E,{modelValue:n.textarea,"onUpdate:modelValue":l[1]||(l[1]=B=>n.textarea=B),"native-type":"textarea",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:"30",class:"m-t-md","show-word-limit":"",block:""},null,8,["modelValue"])],64)}const{defineComponent:F,ref:o}=f,a=F({setup(){return{text:o(""),textarea:o("")}}});return C({render:h},a)}()}},S=u("h2",{id:"input-shu-ru-kuang"},[u("a",{class:"header-anchor",href:"#input-shu-ru-kuang"}),d(" Input \u8F93\u5165\u6846")],-1),X=u("p",null,"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0CInput \u4E3A\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u5B83\u603B\u4F1A\u663E\u793A Vue \u7ED1\u5B9A\u503C\u3002",-1),H=u("div",null,[u("p",null,[d("\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5E94\u5F53\u5904\u7406 "),u("code",null,"input"),d(" \u4E8B\u4EF6\uFF0C\u5E76\u66F4\u65B0\u7EC4\u4EF6\u7684\u7ED1\u5B9A\u503C\uFF08\u6216\u4F7F\u7528"),u("code",null,"v-model"),d("\uFF09\u3002\u5426\u5219\u8F93\u5165\u6846\u5185\u663E\u793A\u7684\u503C\u5C06\u4E0D\u4F1A\u6539\u53D8\u3002\u4E0D\u652F\u6301 "),u("code",null,"v-model"),d(" \u4FEE\u9970\u7B26\u3002")])],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
<\/script>
`)],-1),K=q('<h2 id="zhuang-tai-yan-se"><a class="header-anchor" href="#zhuang-tai-yan-se"></a> \u72B6\u6001\u989C\u8272</h2><p>Input \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A<code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code>\u548C<code>info</code>\u3002</p>',2),O=u("div",null,[u("p",null,[d("\u6839\u636E\u9E3F\u9E3E\u7684\u4EA4\u4E92\u539F\u5219\uFF1A\u65E0\u8BBA\u662F\u54EA\u79CD\u72B6\u6001\u7684\u8F93\u5165\u6846\uFF0C\u5728\u975E "),u("strong",null,"\u7126\u70B9"),d(" \u6216 "),u("strong",null,"\u6FC0\u6D3B"),d(" \u72B6\u6001\u65F6\uFF0C\u90FD\u7EDF\u4E00\u5448\u73B0\u4E3A\u9ED8\u8BA4\u7684\u72B6\u6001\u3002")])],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="col-md-12">
      <hl-input v-model="input1" placeholder="\u9ED8\u8BA4" block />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input2"
        placeholder="primary"
        type="primary"
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input3"
        placeholder="warning"
        type="warning"
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input4"
        placeholder="success"
        type="success"
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input5"
        placeholder="danger"
        type="danger"
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input v-model="input6" placeholder="info" type="info" block />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input1: ref('\u9ED8\u8BA4'),
      input2: ref('primary'),
      input3: ref('warning'),
      input4: ref('success'),
      input5: ref('danger'),
      input6: ref('info'),
    }
  },
})
<\/script>
`)],-1),Z=u("h2",{id:"fill-yan-se"},[u("a",{class:"header-anchor",href:"#fill-yan-se"}),d(" Fill \u989C\u8272")],-1),uu=u("p",null,[d("\u4F7F\u7528 "),u("code",null,"fill"),d(" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F input \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002")],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="col-md-12">
      <hl-input v-model="input1" placeholder="\u9ED8\u8BA4" fill block />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input2"
        placeholder="primary"
        type="primary"
        fill
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input3"
        placeholder="warning"
        type="warning"
        fill
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input4"
        placeholder="success"
        type="success"
        fill
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input5"
        placeholder="danger"
        type="danger"
        fill
        block
      />
    </hl-col>
    <hl-col span="col-md-12">
      <hl-input
        v-model="input6"
        placeholder="info"
        type="info"
        fill
        block
      />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input1: ref('\u9ED8\u8BA4'),
      input2: ref('primary'),
      input3: ref('warning'),
      input4: ref('success'),
      input5: ref('danger'),
      input6: ref('info'),
    }
  },
})
<\/script>
`)],-1),eu=u("h2",{id:"input-chi-cun"},[u("a",{class:"header-anchor",href:"#input-chi-cun"}),d(" Input \u5C3A\u5BF8")],-1),ou=u("p",null,[d("\u8F93\u5165\u6846\u63D0\u4F9B\u4E86\u4E0E\u6309\u94AE\u76F8\u540C\u7684\u5C3A\u5BF8\u3002\u4EE5\u65B9\u4FBF\u4E0E "),u("code",null,"group"),d(" \u7EC4\uFF0C\u6765\u642D\u914D\u4F7F\u7528\u3002\u9ED8\u8BA4\u5C3A\u5BF8\u4E3A "),u("code",null,"md"),d("\u3002")],-1),nu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input
    v-model="input1"
    placeholder="sm"
    size="sm"
    class="m-r-md"
  />
  <hl-input
    v-model="input2"
    placeholder="md"
    size="md"
    class="m-r-md"
  />
  <hl-input
    v-model="input3"
    placeholder="lg"
    size="lg"
    class="m-r-md"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
    }
  },
})
<\/script>
`)],-1),lu=u("h2",{id:"la-shen-shu-ru-kuang"},[u("a",{class:"header-anchor",href:"#la-shen-shu-ru-kuang"}),d(" \u62C9\u4F38\u8F93\u5165\u6846")],-1),du=u("p",null,[d("\u4F7F\u7528"),u("code",null,"block"),d("\u5C5E\u6027\u53EF\u4EE5\u628A\u8F93\u5165\u6846\u62C9\u4F38\u81F3\u4E0E\u7236\u5143\u7D20\u7684\u5BBD\u5EA6")],-1),ru=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" block />
  <hl-input native-type="textarea" placeholder="\u6587\u672C\u57DF" :rows="3" block class="m-t-md" />
</template>
`)],-1),pu=u("h2",{id:"tuo-yuan-yang-shi"},[u("a",{class:"header-anchor",href:"#tuo-yuan-yang-shi"}),d(" \u692D\u5706\u6837\u5F0F")],-1),au=u("p",null,[d("\u4E3A input \u52A0\u4E0A "),u("code",null,"round"),d(" \u5C5E\u6027\uFF0C\u5373\u53EF\u5448\u73B0\u4E3A\u692D\u5706\u6837\u5F0F\u3002")],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" round />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
<\/script>
`)],-1),su=u("h2",{id:"dan-bo-yang-shi"},[u("a",{class:"header-anchor",href:"#dan-bo-yang-shi"}),d(" \u5355\u8584\u6837\u5F0F")],-1),cu=u("p",null,[d("\u4E3A input \u52A0\u4E0A "),u("code",null,"thin"),d(" \u5C5E\u6027\uFF0C\u5373\u53EF\u79FB\u9664\u8FB9\u6846\u3001\u80CC\u666F\u8272\u3001\u586B\u5145\u7B49\u3002")],-1),mu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" thin />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
<\/script>
`)],-1),hu=u("h2",{id:"jin-yong-zhuang-tai"},[u("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),d(" \u7981\u7528\u72B6\u6001")],-1),Fu=u("p",null,[d("\u901A\u8FC7 "),u("code",null,"disabled"),d(" \u5C5E\u6027\u6307\u5B9A\u662F\u5426\u7981\u7528 input \u7EC4\u4EF6")],-1),Bu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" :disabled="true" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
<\/script>
`)],-1),fu=u("h2",{id:"ke-qing-kong-de-shu-ru-kuang"},[u("a",{class:"header-anchor",href:"#ke-qing-kong-de-shu-ru-kuang"}),d(" \u53EF\u6E05\u7A7A\u7684\u8F93\u5165\u6846")],-1),Eu=u("p",null,[d("\u4F7F\u7528"),u("code",null,"clearable"),d("\u5C5E\u6027\u5373\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u6E05\u7A7A\u7684\u8F93\u5165\u6846")],-1),_u=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" clearable />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input: ref('\u6D4B\u8BD5\u8F93\u5165'),
    }
  },
})
<\/script>
`)],-1),Cu=u("h2",{id:"mi-ma-shu-ru-kuang"},[u("a",{class:"header-anchor",href:"#mi-ma-shu-ru-kuang"}),d(" \u5BC6\u7801\u8F93\u5165\u6846")],-1),gu=u("p",null,[d("\u4F7F\u7528"),u("code",null,"show-password"),d("\u5C5E\u6027\u5373\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u5207\u6362\u663E\u793A\u9690\u85CF\u7684\u5BC6\u7801\u6846")],-1),vu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" show-password />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
<\/script>
`)],-1),Au=u("h2",{id:"dai-fu-biao-de-shu-ru-kuang"},[u("a",{class:"header-anchor",href:"#dai-fu-biao-de-shu-ru-kuang"}),d(' \u5E26 "\u9644\u6807" \u7684\u8F93\u5165\u6846')],-1),ku=u("p",null,"\u53EF\u4EE5\u901A\u8FC7 slot \u6765\u653E\u7F6E\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u6DFB\u52A0\u56FE\u6807\u6216\u8005\u6587\u5B57\u7B49\u3002",-1),bu=u("pre",null,[u("code",{class:"html"},` <template>
  <p>\u5C5E\u6027\u65B9\u5F0F\uFF1A</p>
  <hl-row gap="var(--lg)">
    <hl-col span="col">
      <hl-input
        v-model="input1"
        placeholder="\u8BF7\u9009\u62E9\u65E5\u671F"
        type="danger"
        block
      >
        <template #suffix>
          <hl-icon><two-calendar /></hl-icon>
        </template>
      </hl-input>
    </hl-col>
    <hl-col span="col">
      <hl-input
        v-model="input2"
        placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
        block
      >
        <template #prefix>
          <hl-icon><two-mail /></hl-icon>
        </template>
      </hl-input>
    </hl-col>
  </hl-row>

  <p class="m-t-lg">\u81EA\u5B9A\u4E49slot\u65B9\u5F0F\uFF1A</p>
  <hl-row gap="var(--lg)">
    <hl-col span="col">
      <hl-input v-model="input3" placeholder="\u8BF7\u8F93\u5165\u952E\u8BCD\u8FDB\u884C\u641C\u7D22" block>
        <template #prefix>
          <select class="hl-input sm thin">
            <option value="">http://</option>
            <option value="">https://</option>
            <option value="">ssh:</option>
          </select>
        </template>
        <template #suffix>
          <hl-popover
            placement="top"
            tooltip
            trigger="hover"
            content="\u641C\u7D22\u4E00\u4E0B"
          >
            <template #reference>
              <hl-icon><two-search /></hl-icon>
            </template>
          </hl-popover>
        </template>
      </hl-input>
    </hl-col>
    <hl-col span="col">
      <hl-input v-model="input4" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" block>
        <template #prefix>\u90AE\u7BB1:</template>
        <template #suffix><hl-spinner animation="around-right" /></template>
      </hl-input>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref('916471@qq.com'),
    }
  },
})
<\/script>
`)],-1),Vu=u("h2",{id:"wen-ben-yu"},[u("a",{class:"header-anchor",href:"#wen-ben-yu"}),d(" \u6587\u672C\u57DF")],-1),Du=u("p",null,[d("\u901A\u8FC7\u5C06 "),u("code",null,"native-type"),d(" \u5C5E\u6027\u7684\u503C\u8BBE\u7F6E "),u("code",null,"textarea"),d(" \u5373\u53EF\u8C03\u7528\u51FA\u6587\u672C\u57DF\u8F93\u5165\u6846\u3002")],-1),yu=u("div",null,[u("p",null,[d("\u6587\u672C\u57DF\u9664\u4E86\u8BBE\u7F6E\u9AD8\u5EA6\u4EE5\u5916\uFF0C\u8FD8\u53EF\u901A\u8FC7 "),u("code",null,"rows"),d(" \u5C5E\u6027\u6765\u63A7\u5236\u9AD8\u5EA6\u3002")])],-1),wu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input
    v-model="textarea"
    native-type="textarea"
    :rows="3"
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
    block
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      textarea: ref(''),
    }
  },
})
<\/script>
`)],-1),xu=u("h2",{id:"zi-dong-gao-du"},[u("a",{class:"header-anchor",href:"#zi-dong-gao-du"}),d(" \u81EA\u52A8\u9AD8\u5EA6")],-1),Uu=u("p",null,[d("\u901A\u8FC7\u8BBE\u7F6E "),u("code",null,"autosize"),d(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5F97\u6587\u672C\u57DF\u7684\u9AD8\u5EA6\u80FD\u591F\u6839\u636E\u6587\u672C\u5185\u5BB9\u81EA\u52A8\u8FDB\u884C\u8C03\u6574\u3002")],-1),zu=u("div",null,[u("p",null,[u("code",null,"autosize"),d(" \u8FD8\u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002")])],-1),qu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input
    v-model="textarea1"
    native-type="textarea"
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
    autosize
    block
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      textarea1: ref(''),
    }
  },
})
<\/script>
`)],-1),Nu=u("h2",{id:"shu-ru-chang-du-xian-zhi"},[u("a",{class:"header-anchor",href:"#shu-ru-chang-du-xian-zhi"}),d(" \u8F93\u5165\u957F\u5EA6\u9650\u5236")],-1),ju=u("div",null,[u("p",null,[u("code",null,"maxlength"),d(" \u548C "),u("code",null,"minlength"),d(" \u5C5E\u6027\uFF0C\u7528\u6765\u9650\u5236\u8F93\u5165\u6846\u7684\u5B57\u7B26\u957F\u5EA6\uFF0C\u5176\u4E2D\u5B57\u7B26\u957F\u5EA6\u662F\u7528 Javascript \u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u7EDF\u8BA1\u7684\u3002\u5BF9\u4E8E\u7C7B\u578B\u4E3A "),u("code",null,"text"),d(" \u6216 "),u("code",null,"textarea"),d(" \u7684\u8F93\u5165\u6846\uFF0C\u5728\u4F7F\u7528 "),u("code",null,"maxlength"),d(" \u5C5E\u6027\u9650\u5236\u6700\u5927\u8F93\u5165\u957F\u5EA6\u7684\u540C\u65F6\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E "),u("code",null,"show-word-limit"),d(" \u5C5E\u6027\u6765\u5C55\u793A\u5B57\u6570\u7EDF\u8BA1\u3002")])],-1),Iu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-input
    v-model="text"
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
    maxlength="10"
    show-word-limit
    block
  />
  <hl-input
    v-model="textarea"
    native-type="textarea"
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
    maxlength="30"
    class="m-t-md"
    show-word-limit
    block
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      text: ref(''),
      textarea: ref(''),
    }
  },
})
<\/script>
`)],-1),$u=q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>native-type</td><td>\u7C7B\u578B</td><td>string</td><td>text\uFF0Ctextarea \u548C\u5176\u4ED6 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">\u539F\u751F input \u7684 type \u503C</a></td><td>text</td></tr><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>maxlength</td><td>\u6700\u5927\u8F93\u5165\u957F\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>minlength</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5C0F\u8F93\u5165\u957F\u5EA6</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-word-limit</td><td>\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1\uFF0C\u53EA\u5728 <code>native-type = &quot;text&quot;</code> \u6216 <code>native-type = &quot;textarea&quot;</code> \u65F6\u6709\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u6E05\u7A7A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-password</td><td>\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>block</td><td>\u662F\u5426\u62C9\u4F38\u81F3\u7236\u5143\u7D20 100%\u7684\u5BBD\u5EA6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8\uFF0C\u53EA\u5728 <code>native-type!=&quot;textarea&quot;</code> \u65F6\u6709\u6548</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>rows</td><td>\u8F93\u5165\u6846\u884C\u6570\uFF0C\u53EA\u5BF9 <code>native-type=&quot;textarea&quot;</code> \u6709\u6548</td><td>number</td><td>\u2014</td><td>2</td></tr><tr><td>autosize</td><td>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EA\u5BF9 <code>native-type=&quot;textarea&quot;</code> \u6709\u6548\uFF0C\u53EF\u4F20\u5165\u5BF9\u8C61\uFF0C\u5982\uFF0C{ minRows: 2, maxRows: 6 }</td><td>boolean / object</td><td>\u2014</td><td>false</td></tr><tr><td>autocomplete</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u8865\u5168</td><td>string</td><td>-</td><td>off</td></tr><tr><td>auto-complete</td><td>\u4E0B\u4E2A\u4E3B\u7248\u672C\u5F03\u7528</td><td>string</td><td>on, off</td><td>off</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u8F93\u5165\u6846\uFF0C\u53EA\u5728 <code>native-type!=&quot;textarea&quot;</code> \u65F6\u6709\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>max</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5927\u503C</td><td>\u2014</td><td>\u2014</td><td>\u2014</td></tr><tr><td>min</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5C0F\u503C</td><td>\u2014</td><td>\u2014</td><td>\u2014</td></tr><tr><td>step</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8F93\u5165\u5B57\u6BB5\u7684\u5408\u6CD5\u6570\u5B57\u95F4\u9694</td><td>\u2014</td><td>\u2014</td><td>\u2014</td></tr><tr><td>resize</td><td>\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E</td><td>string</td><td>none, both, horizontal, vertical</td><td>\u2014</td></tr><tr><td>autofocus</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>true, false</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>\u2014</td></tr><tr><td>form</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u8F93\u5165\u6846\u5173\u8054\u7684 label \u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tabindex</td><td>\u8F93\u5165\u6846\u7684 tabindex</td><td>string / number</td><td>-</td><td>-</td></tr><tr><td>validate-event</td><td>\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>input-style</td><td>input\u5143\u7D20\u6216textarea\u5143\u7D20\u7684style</td><td>object</td><td>-</td><td>{}</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prefix</td><td>\u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9 <code>native-type=&quot;text&quot;</code> \u6709\u6548</td></tr><tr><td>suffix</td><td>\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9\uFF0C\u53EA\u5BF9 <code>native-type=&quot;text&quot;</code> \u6709\u6548</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>change</td><td>\u4EC5\u5728\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1</td><td>(value: string | number)</td></tr><tr><td>input</td><td>\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(value: string | number)</td></tr><tr><td>clear</td><td>\u5728\u70B9\u51FB\u7531 <code>clearable</code> \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>\u2014</td></tr><tr><td>blur</td><td>\u4F7F input \u5931\u53BB\u7126\u70B9</td><td>\u2014</td></tr><tr><td>select</td><td>\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57</td><td>\u2014</td></tr></tbody></table>',8);function Lu(r,t,e,p,m,h){const F=_("hl-demo0"),o=_("demo-block"),a=_("hl-demo1"),n=_("hl-demo2"),l=_("hl-demo3"),E=_("hl-demo4"),B=_("hl-demo5"),A=_("hl-demo6"),s=_("hl-demo7"),y=_("hl-demo8"),g=_("hl-demo9"),v=_("hl-demo10"),w=_("hl-demo11"),D=_("hl-demo12"),b=_("hl-demo13"),V=_("right-nav");return T(),W(J,null,[u("section",null,[S,X,c(o,{fs:""},{source:i(()=>[c(F)]),highlight:i(()=>[G]),default:i(()=>[H]),_:1}),K,c(o,{fs:""},{source:i(()=>[c(a)]),highlight:i(()=>[Y]),default:i(()=>[O]),_:1}),Z,uu,c(o,{fs:""},{source:i(()=>[c(n)]),highlight:i(()=>[tu]),_:1}),eu,ou,c(o,{fs:""},{source:i(()=>[c(l)]),highlight:i(()=>[nu]),_:1}),lu,du,c(o,{fs:""},{source:i(()=>[c(E)]),highlight:i(()=>[ru]),_:1}),pu,au,c(o,{fs:""},{source:i(()=>[c(B)]),highlight:i(()=>[iu]),_:1}),su,cu,c(o,{fs:""},{source:i(()=>[c(A)]),highlight:i(()=>[mu]),_:1}),hu,Fu,c(o,{fs:""},{source:i(()=>[c(s)]),highlight:i(()=>[Bu]),_:1}),fu,Eu,c(o,{fs:""},{source:i(()=>[c(y)]),highlight:i(()=>[_u]),_:1}),Cu,gu,c(o,{fs:""},{source:i(()=>[c(g)]),highlight:i(()=>[vu]),_:1}),Au,ku,c(o,{fs:""},{source:i(()=>[c(v)]),highlight:i(()=>[bu]),_:1}),Vu,Du,c(o,{fs:""},{source:i(()=>[c(w)]),highlight:i(()=>[wu]),default:i(()=>[yu]),_:1}),xu,Uu,c(o,{fs:""},{source:i(()=>[c(D)]),highlight:i(()=>[qu]),default:i(()=>[zu]),_:1}),Nu,c(o,{fs:""},{source:i(()=>[c(b)]),highlight:i(()=>[Iu]),default:i(()=>[ju]),_:1}),$u]),c(V)],64)}var Ru=Q(R,[["render",Lu]]);export{Ru as default};
