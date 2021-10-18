var y=Object.defineProperty;var x=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var D=(o,e,n)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,B=(o,e)=>{for(var n in e||(e={}))b.call(e,n)&&D(o,n,e[n]);if(x)for(var n of x(e))k.call(e,n)&&D(o,n,e[n]);return o};import{H as _,o as z,C as w,D as u,v as r,M as a,av as m,_ as t,au as V}from"./vue.450bc1d0.js";import{_ as P}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const N={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:o,resolveComponent:e,createVNode:n,withCtx:d,openBlock:i,createBlock:p}=m,F=o("p",null,"\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C",-1),l=o("p",null,"\u5927\u4E8E 7 \u9875\u65F6\u7684\u6548\u679C",-1);function C(s,h){const g=e("hl-pagination"),E=e("hl-col"),f=e("hl-row");return i(),p(f,null,{default:d(()=>[n(E,{span:"col-24"},{default:d(()=>[F,n(g,{layout:"prev, pager, next",total:50})]),_:1}),n(E,{span:"col-24",class:"m-t-lg"},{default:d(()=>[l,n(g,{layout:"prev, pager, next",total:1e3})]),_:1})]),_:1})}return B({render:C},{})}(),"hl-demo1":function(){const{resolveComponent:o,openBlock:e,createBlock:n}=m;function d(p,F){const l=o("hl-pagination");return e(),n(l,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})}return B({render:d},{})}(),"hl-demo2":function(){const{resolveComponent:o,openBlock:e,createBlock:n}=m;function d(p,F){const l=o("hl-pagination");return e(),n(l,{line:"",layout:"prev, pager, next",total:50})}return B({render:d},{})}(),"hl-demo3":function(){const{resolveComponent:o,openBlock:e,createBlock:n}=m;function d(p,F){const l=o("hl-pagination");return e(),n(l,{block:"",layout:"prev, pager, next",total:50})}return B({render:d},{})}(),"hl-demo4":function(){const{resolveComponent:o,createVNode:e,withCtx:n,openBlock:d,createBlock:i}=m;function p(l,C){const c=o("hl-pagination"),s=o("hl-col"),h=o("hl-row");return d(),i(h,{align:"center"},{default:n(()=>[e(s,{span:"col-lg-16",class:"dom-area","data-name":"left"},{default:n(()=>[e(c,{layout:"prev, pager, next",total:50,align:"left"})]),_:1}),e(s,{span:"col-lg-16",class:"m-t-xxl dom-area","data-name":"center"},{default:n(()=>[e(c,{layout:"prev, pager, next",total:50,align:"center"})]),_:1}),e(s,{span:"col-lg-16",class:"m-t-xxl dom-area","data-name":"right"},{default:n(()=>[e(c,{layout:"prev, pager, next",total:50,align:"right"})]),_:1}),e(s,{span:"col-lg-16",class:"m-t-xxl dom-area","data-name":"between"},{default:n(()=>[e(c,{line:"",layout:"prev, pager, next",total:50,align:"between"})]),_:1})]),_:1})}return B({render:p},{})}(),"hl-demo5":function(){const{createElementVNode:o,resolveComponent:e,withCtx:n,createVNode:d,openBlock:i,createBlock:p}=m,F=o("div",{style:{width:"100%",padding:"0 12px"}},[o("a",null,"\u81EA\u5B9A\u4E49\u5143\u7D20")],-1);function l(h,g){const E=e("hl-pagination"),f=e("hl-col"),v=e("hl-row");return i(),p(v,null,{default:n(()=>[d(f,{span:"col-24",class:"m-t-xxl"},{default:n(()=>[d(E,{"current-page":h.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, slot, prev, pager, next, sizes, jumper",total:400,align:"between",onSizeChange:h.handleSizeChange,onCurrentChange:h.handleCurrentChange},{default:n(()=>[F]),_:1},8,["current-page","onSizeChange","onCurrentChange"])]),_:1})]),_:1})}const{defineComponent:C,ref:c}=m,s=C({setup(){const h=c(5),g=c(5),E=c(5),f=c(4);return{currentPage1:h,currentPage4:f,currentPage2:g,currentPage3:E,handleSizeChange:A=>{console.log(`\u6BCF\u9875 ${A} \u6761`)},handleCurrentChange:A=>{console.log(`\u5F53\u524D\u9875: ${A}`)}}}});return B({render:l},s)}(),"hl-demo6":function(){const{resolveComponent:o,createVNode:e,createElementVNode:n,openBlock:d,createElementBlock:i}=m;function p(c,s){const h=o("hl-switch"),g=o("hl-pagination");return d(),i("div",null,[n("p",null,[e(h,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=E=>c.value=E),style:{}},null,8,["modelValue"])]),e(g,{"hide-on-single-page":c.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])}const{defineComponent:F,ref:l}=m,C=F({setup(){return{value:l(!1)}}});return B({render:p},C)}()}},j={class:"doc-main-content"},S={class:"doc-content"},$=u("h1",null,"Pagination \u5206\u9875",-1),H=u("p",null,"\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u5206\u89E3\u6570\u636E\u3002",-1),L=u("div",null,[u("p",null,[t("\u8BBE\u7F6E"),u("code",null,"layout"),t("\uFF0C\u8868\u793A\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5E03\u5C40\u5143\u7D20\u4F1A\u4F9D\u6B21\u663E\u793A\u3002"),u("code",null,"prev"),t("\u8868\u793A\u4E0A\u4E00\u9875\uFF0C"),u("code",null,"next"),t("\u4E3A\u4E0B\u4E00\u9875\uFF0C"),u("code",null,"pager"),t("\u8868\u793A\u9875\u7801\u5217\u8868\uFF0C\u9664\u6B64\u4EE5\u5916\u8FD8\u63D0\u4F9B\u4E86"),u("code",null,"jumper"),t("\u548C"),u("code",null,"total"),t("\uFF0C"),u("code",null,"size"),t("\u548C\u7279\u6B8A\u7684\u5E03\u5C40\u7B26\u53F7"),u("code",null,"->"),t("\uFF0C"),u("code",null,"->"),t("\u540E\u7684\u5143\u7D20\u4F1A\u9760\u53F3\u663E\u793A\uFF0C"),u("code",null,"jumper"),t("\u8868\u793A\u8DF3\u9875\u5143\u7D20\uFF0C"),u("code",null,"total"),t("\u8868\u793A\u603B\u6761\u76EE\u6570\uFF0C"),u("code",null,"size"),t("\u7528\u4E8E\u8BBE\u7F6E\u6BCF\u9875\u663E\u793A\u7684\u9875\u7801\u6570\u91CF\u3002")])],-1),M=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-24">
      <p>\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C</p>
      <hl-pagination layout="prev, pager, next" :total="50" />
    </hl-col>
    <hl-col span="col-24" class="m-t-lg">
      <p>\u5927\u4E8E 7 \u9875\u65F6\u7684\u6548\u679C</p>
      <hl-pagination layout="prev, pager, next" :total="1000" />
    </hl-col>
  </hl-row>
</template>
`)],-1),U=u("h2",{id:"she-zhi-zui-da-ye-ma-an-niu-shu"},[u("a",{class:"header-anchor",href:"#she-zhi-zui-da-ye-ma-an-niu-shu"}),t(" \u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570")],-1),W=u("p",null,[t("\u901A\u8FC7"),u("code",null,"pager-count"),t("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570\u3002")],-1),q=u("div",null,[u("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7 7 \u9875\u65F6 Pagination \u4F1A\u6298\u53E0\u591A\u4F59\u7684\u9875\u7801\u6309\u94AE\u3002")],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination
    :page-size="20"
    :pager-count="11"
    layout="prev, pager, next"
    :total="1000"
  />
</template>
`)],-1),I=u("h2",{id:"line-yang-shi"},[u("a",{class:"header-anchor",href:"#line-yang-shi"}),t(" Line \u6837\u5F0F")],-1),J=u("p",null,"\u5728\u7A7A\u95F4\u6709\u9650\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684\u5C0F\u578B\u5206\u9875\u3002",-1),K=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination line layout="prev, pager, next" :total="50" />
</template>
`)],-1),O=u("h2",{id:"man-kuan-yu-pai-lie-fang-shi"},[u("a",{class:"header-anchor",href:"#man-kuan-yu-pai-lie-fang-shi"}),t(" \u6EE1\u5BBD\u4E0E\u6392\u5217\u65B9\u5F0F")],-1),Q=u("p",null,[t("\u4F7F\u7528 "),u("code",null,"block"),t(" \u5C5E\u6027\u4F1A\u4F7F\u5206\u9875\u7EC4\u4EF6\u53D8\u4E3A\u5757\u7EA7\u6837\u5F0F\u3002")],-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination block layout="prev, pager, next" :total="50" />
</template>
`)],-1),T=u("h2",{id:"pai-lie-fang-shi"},[u("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),t(" \u6392\u5217\u65B9\u5F0F")],-1),X=u("p",null,[t("\u4F7F\u7528 "),u("code",null,"align"),t(" \u5C5E\u6027\u80FD\u591F\u8BBE\u7F6E\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),Y=u("div",null,[u("p",null,[t("\u652F\u6301\u5E38\u7528\u7684 "),u("code",null,"left(\u9ED8\u8BA4)"),t(),u("code",null,"center"),t(),u("code",null,"right"),t(),u("code",null,"around"),t(),u("code",null,"between"),t(" \u5C5E\u6027")])],-1),Z=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="center">
    <hl-col span="col-lg-16" class="dom-area" data-name="left">
      <hl-pagination
        layout="prev, pager, next"
        :total="50"
        align="left"
      />
    </hl-col>
    <hl-col span="col-lg-16" class="m-t-xxl dom-area" data-name="center">
      <hl-pagination
        layout="prev, pager, next"
        :total="50"
        align="center"
      />
    </hl-col>

    <hl-col span="col-lg-16" class="m-t-xxl dom-area" data-name="right">
      <hl-pagination
        layout="prev, pager, next"
        :total="50"
        align="right"
      />
    </hl-col>

    <hl-col span="col-lg-16" class="m-t-xxl dom-area" data-name="between">
      <hl-pagination
        line
        layout="prev, pager, next"
        :total="50"
        align="between"
      />
    </hl-col>
  </hl-row>
</template>
`)],-1),uu=u("h2",{id:"fu-jia-gong-neng"},[u("a",{class:"header-anchor",href:"#fu-jia-gong-neng"}),t(" \u9644\u52A0\u529F\u80FD")],-1),tu=u("p",null,[t("\u6839\u636E\u4F7F\u7528\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u5176\u4ED6\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u5143\u7D20\u548C "),u("code",null,"align"),t(" \u5C5E\u6027\u6765\u5E03\u5C40\u4E00\u4E2A\u4E24\u7AEF\u5BF9\u9F50\u7684\u5206\u9875\u7EC4\u4EF6\u3002")],-1),eu=u("div",null,[u("p",null,[t("\u6B64\u4F8B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7528\u4F8B\uFF0C\u4F7F\u7528\u4E86"),u("code",null,"size-change"),t("\u548C"),u("code",null,"current-change"),t("\u4E8B\u4EF6\u6765\u5904\u7406\u9875\u7801\u5927\u5C0F\u548C\u5F53\u524D\u9875\u53D8\u52A8\u65F6\u5019\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002"),u("code",null,"page-sizes"),t("\u63A5\u53D7\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\uFF0C\u6570\u7EC4\u5143\u7D20\u4E3A\u5C55\u793A\u7684\u9009\u62E9\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u7684\u9009\u9879\uFF0C"),u("code",null,"[100, 200, 300, 400]"),t("\u8868\u793A\u56DB\u4E2A\u9009\u9879\uFF0C\u6BCF\u9875\u663E\u793A 100 \u4E2A\uFF0C200 \u4E2A\uFF0C300 \u4E2A\u6216\u8005 400 \u4E2A\u3002")])],-1),nu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col-24" class="m-t-xxl">
      <hl-pagination
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, slot, prev, pager, next, sizes, jumper"
        :total="400"
        align="between"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
        <div style="width:100%; padding: 0 12px"><a>\u81EA\u5B9A\u4E49\u5143\u7D20</a></div>
      </hl-pagination>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const currentPage1 = ref(5)
    const currentPage2 = ref(5)
    const currentPage3 = ref(5)
    const currentPage4 = ref(4)

    const handleSizeChange = val => {
      console.log(\`\u6BCF\u9875 \${val} \u6761\`)
    }
    const handleCurrentChange = val => {
      console.log(\`\u5F53\u524D\u9875: \${val}\`)
    }

    return {
      currentPage1,
      currentPage4,
      currentPage2,
      currentPage3,
      handleSizeChange,
      handleCurrentChange,
    }
  },
})
<\/script>
`)],-1),ou=u("h2",{id:"dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"},[u("a",{class:"header-anchor",href:"#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"}),t(" \u5F53\u53EA\u6709\u4E00\u9875\u65F6\u9690\u85CF\u5206\u9875")],-1),lu=u("p",null,[t("\u5F53\u53EA\u6709\u4E00\u9875\u65F6\uFF0C\u901A\u8FC7\u8BBE\u7F6E "),u("code",null,"hide-on-single-page"),t(" \u5C5E\u6027\u6765\u9690\u85CF\u5206\u9875\u3002")],-1),au=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <p>
      <hl-switch v-model="value" style="" />
    </p>
    <hl-pagination
      :hide-on-single-page="value"
      :total="5"
      layout="prev, pager, next"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(false)
    return {
      value,
    }
  },
})
<\/script>
`)],-1),du=V('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>line</td><td>\u662F\u5426\u4F7F\u7528\u7EBF\u6761\u5206\u9875\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>align</td><td>\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F</td><td>string</td><td><code>left</code>, <code>center</code>, <code>right</code>, <code>around</code>, <code>between</code></td><td>left</td></tr><tr><td>page-size</td><td>\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A</td><td>number</td><td>\u2014</td><td>10</td></tr><tr><td>total</td><td>\u603B\u6761\u76EE\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>page-count</td><td>\u603B\u9875\u6570\uFF0Ctotal \u548C page-count \u8BBE\u7F6E\u4EFB\u610F\u4E00\u4E2A\u5C31\u53EF\u4EE5\u8FBE\u5230\u663E\u793A\u9875\u7801\u7684\u529F\u80FD\uFF1B\u5982\u679C\u8981\u652F\u6301 page-sizes \u7684\u66F4\u6539\uFF0C\u5219\u9700\u8981\u4F7F\u7528 total \u5C5E\u6027</td><td>Number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>pager-count</td><td>\u9875\u7801\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0</td><td>number</td><td>\u5927\u4E8E\u7B49\u4E8E 5 \u4E14\u5C0F\u4E8E\u7B49\u4E8E 21 \u7684\u5947\u6570</td><td>7</td></tr><tr><td>current-page</td><td>\u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A\u7B26</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>layout</td><td>\u7EC4\u4EF6\u5E03\u5C40\uFF0C\u5B50\u7EC4\u4EF6\u540D\u7528\u9017\u53F7\u5206\u9694</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, total&#39;</td></tr><tr><td>page-sizes</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td><td>number[]</td><td>\u2014</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u4E0B\u62C9\u6846\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>prev-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0A\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>next-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0B\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF</td><td>boolean</td><td>\u2014</td><td>-</td></tr><tr><td>block</td><td>\u5757\u7EA7\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>size-change</td><td>pageSize \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u6BCF\u9875\u6761\u6570</td></tr><tr><td>current-change</td><td>currentPage \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>prev-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>next-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u9700\u8981\u5728 <code>layout</code> \u4E2D\u5217\u51FA <code>slot</code></td></tr></tbody></table>',6);function cu(o,e,n,d,i,p){const F=_("hl-demo0"),l=_("demo-block"),C=_("hl-demo1"),c=_("hl-demo2"),s=_("hl-demo3"),h=_("hl-demo4"),g=_("hl-demo5"),E=_("hl-demo6"),f=_("right-nav");return z(),w("section",j,[u("div",S,[$,H,r(l,{fs:""},{source:a(()=>[r(F)]),highlight:a(()=>[M]),default:a(()=>[L]),_:1}),U,W,r(l,{fs:""},{source:a(()=>[r(C)]),highlight:a(()=>[G]),default:a(()=>[q]),_:1}),I,J,r(l,{fs:""},{source:a(()=>[r(c)]),highlight:a(()=>[K]),_:1}),O,Q,r(l,{fs:""},{source:a(()=>[r(s)]),highlight:a(()=>[R]),_:1}),T,X,r(l,{fs:""},{source:a(()=>[r(h)]),highlight:a(()=>[Z]),default:a(()=>[Y]),_:1}),uu,tu,r(l,{fs:""},{source:a(()=>[r(g)]),highlight:a(()=>[nu]),default:a(()=>[eu]),_:1}),ou,lu,r(l,{fs:""},{source:a(()=>[r(E)]),highlight:a(()=>[au]),_:1}),du]),r(f)])}var gu=P(N,[["render",cu]]);export{gu as default};
