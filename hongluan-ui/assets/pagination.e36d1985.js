var y=Object.defineProperty;var D=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(o,e,n)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,A=(o,e)=>{for(var n in e||(e={}))b.call(e,n)&&x(o,n,e[n]);if(D)for(var n of D(e))k.call(e,n)&&x(o,n,e[n]);return o};import{H as _,o as z,B as w,C as u,v as c,M as a,Y as P,ax as C,_ as t,aw as V}from"./vue.e799739b.js";import{_ as N}from"./index.9414aa1f.js";import"./hongluan.9c38f5fe.js";import"./highlight.e2508551.js";import"./hongluan-icons.aab6c2a9.js";const j={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:o,resolveComponent:e,createVNode:n,withCtx:d,openBlock:p,createBlock:i}=C,h=o("p",null,"\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C",-1),l=o("p",null,"\u5927\u4E8E 7 \u9875\u65F6\u7684\u6548\u679C",-1);function B(s,F){const g=e("hl-pagination"),E=e("hl-col"),m=e("hl-row");return p(),i(m,null,{default:d(()=>[n(E,{span:"col-24"},{default:d(()=>[h,n(g,{layout:"prev, pager, next",total:50})]),_:1}),n(E,{span:"col-24",class:"m-t-lg"},{default:d(()=>[l,n(g,{layout:"prev, pager, next",total:1e3})]),_:1})]),_:1})}return A({render:B},{})}(),"hl-demo1":function(){const{resolveComponent:o,openBlock:e,createBlock:n}=C;function d(i,h){const l=o("hl-pagination");return e(),n(l,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})}return A({render:d},{})}(),"hl-demo2":function(){const{resolveComponent:o,openBlock:e,createBlock:n}=C;function d(i,h){const l=o("hl-pagination");return e(),n(l,{line:"",layout:"prev, pager, next",total:50})}return A({render:d},{})}(),"hl-demo3":function(){const{resolveComponent:o,openBlock:e,createBlock:n}=C;function d(i,h){const l=o("hl-pagination");return e(),n(l,{block:"",layout:"prev, pager, next",total:50})}return A({render:d},{})}(),"hl-demo4":function(){const{resolveComponent:o,createVNode:e,withCtx:n,openBlock:d,createBlock:p}=C;function i(l,B){const r=o("hl-pagination"),s=o("hl-col"),F=o("hl-row");return d(),p(F,{align:"center"},{default:n(()=>[e(s,{span:"col-lg-16",class:"dom-area","data-name":"left"},{default:n(()=>[e(r,{layout:"prev, pager, next",total:50,align:"left"})]),_:1}),e(s,{span:"col-lg-16",class:"m-t-xxl dom-area","data-name":"center"},{default:n(()=>[e(r,{layout:"prev, pager, next",total:50,align:"center"})]),_:1}),e(s,{span:"col-lg-16",class:"m-t-xxl dom-area","data-name":"right"},{default:n(()=>[e(r,{layout:"prev, pager, next",total:50,align:"right"})]),_:1}),e(s,{span:"col-lg-16",class:"m-t-xxl dom-area","data-name":"between"},{default:n(()=>[e(r,{line:"",layout:"prev, pager, next",total:50,align:"between"})]),_:1})]),_:1})}return A({render:i},{})}(),"hl-demo5":function(){const{createElementVNode:o,resolveComponent:e,withCtx:n,createVNode:d,openBlock:p,createBlock:i}=C,h=o("div",{style:{width:"100%",padding:"0 12px"}},[o("a",null,"\u81EA\u5B9A\u4E49\u5143\u7D20")],-1);function l(F,g){const E=e("hl-pagination"),m=e("hl-col"),v=e("hl-row");return p(),i(v,null,{default:n(()=>[d(m,{span:"col-24",class:"m-t-xxl"},{default:n(()=>[d(E,{"current-page":F.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, slot, prev, pager, next, sizes, jumper",total:400,align:"between",onSizeChange:F.handleSizeChange,onCurrentChange:F.handleCurrentChange},{default:n(()=>[h]),_:1},8,["current-page","onSizeChange","onCurrentChange"])]),_:1})]),_:1})}const{defineComponent:B,ref:r}=C,s=B({setup(){const F=r(5),g=r(5),E=r(5),m=r(4);return{currentPage1:F,currentPage4:m,currentPage2:g,currentPage3:E,handleSizeChange:f=>{console.log(`\u6BCF\u9875 ${f} \u6761`)},handleCurrentChange:f=>{console.log(`\u5F53\u524D\u9875: ${f}`)}}}});return A({render:l},s)}(),"hl-demo6":function(){const{resolveComponent:o,createVNode:e,createElementVNode:n,openBlock:d,createElementBlock:p}=C,i={class:"m-b-md"};function h(s,F){const g=o("hl-switch"),E=o("hl-pagination");return d(),p("div",null,[n("p",i,[e(g,{modelValue:s.value,"onUpdate:modelValue":F[0]||(F[0]=m=>s.value=m),style:{}},null,8,["modelValue"])]),e(E,{"hide-on-single-page":s.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])}const{defineComponent:l,ref:B}=C,r=l({setup(){return{value:B(!1)}}});return A({render:h},r)}()}},S=u("h1",null,"Pagination \u5206\u9875",-1),$=u("p",null,"\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u5206\u89E3\u6570\u636E\u3002",-1),q=u("div",null,[u("p",null,[t("\u8BBE\u7F6E"),u("code",null,"layout"),t("\uFF0C\u8868\u793A\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5E03\u5C40\u5143\u7D20\u4F1A\u4F9D\u6B21\u663E\u793A\u3002"),u("code",null,"prev"),t("\u8868\u793A\u4E0A\u4E00\u9875\uFF0C"),u("code",null,"next"),t("\u4E3A\u4E0B\u4E00\u9875\uFF0C"),u("code",null,"pager"),t("\u8868\u793A\u9875\u7801\u5217\u8868\uFF0C\u9664\u6B64\u4EE5\u5916\u8FD8\u63D0\u4F9B\u4E86"),u("code",null,"jumper"),t("\u548C"),u("code",null,"total"),t("\uFF0C"),u("code",null,"size"),t("\u548C\u7279\u6B8A\u7684\u5E03\u5C40\u7B26\u53F7"),u("code",null,"->"),t("\uFF0C"),u("code",null,"->"),t("\u540E\u7684\u5143\u7D20\u4F1A\u9760\u53F3\u663E\u793A\uFF0C"),u("code",null,"jumper"),t("\u8868\u793A\u8DF3\u9875\u5143\u7D20\uFF0C"),u("code",null,"total"),t("\u8868\u793A\u603B\u6761\u76EE\u6570\uFF0C"),u("code",null,"size"),t("\u7528\u4E8E\u8BBE\u7F6E\u6BCF\u9875\u663E\u793A\u7684\u9875\u7801\u6570\u91CF\u3002")])],-1),U=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Y=u("h2",{id:"she-zhi-zui-da-ye-ma-an-niu-shu"},[u("a",{class:"header-anchor",href:"#she-zhi-zui-da-ye-ma-an-niu-shu"}),t(" \u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570")],-1),H=u("p",null,[t("\u901A\u8FC7"),u("code",null,"pager-count"),t("\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6309\u94AE\u6570\u3002")],-1),L=u("div",null,[u("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7 7 \u9875\u65F6 Pagination \u4F1A\u6298\u53E0\u591A\u4F59\u7684\u9875\u7801\u6309\u94AE\u3002")],-1),M=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination
    :page-size="20"
    :pager-count="11"
    layout="prev, pager, next"
    :total="1000"
  />
</template>
`)],-1),W=u("h2",{id:"line-yang-shi"},[u("a",{class:"header-anchor",href:"#line-yang-shi"}),t(" Line \u6837\u5F0F")],-1),G=u("p",null,"\u5728\u7A7A\u95F4\u6709\u9650\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684\u5C0F\u578B\u5206\u9875\u3002",-1),I=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination line layout="prev, pager, next" :total="50" />
</template>
`)],-1),J=u("h2",{id:"man-kuan-yu-pai-lie-fang-shi"},[u("a",{class:"header-anchor",href:"#man-kuan-yu-pai-lie-fang-shi"}),t(" \u6EE1\u5BBD\u4E0E\u6392\u5217\u65B9\u5F0F")],-1),K=u("p",null,[t("\u4F7F\u7528 "),u("code",null,"block"),t(" \u5C5E\u6027\u4F1A\u4F7F\u5206\u9875\u7EC4\u4EF6\u53D8\u4E3A\u5757\u7EA7\u6837\u5F0F\u3002")],-1),O=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-pagination block layout="prev, pager, next" :total="50" />
</template>
`)],-1),Q=u("h2",{id:"pai-lie-fang-shi"},[u("a",{class:"header-anchor",href:"#pai-lie-fang-shi"}),t(" \u6392\u5217\u65B9\u5F0F")],-1),R=u("p",null,[t("\u4F7F\u7528 "),u("code",null,"align"),t(" \u5C5E\u6027\u80FD\u591F\u8BBE\u7F6E\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F\u3002")],-1),T=u("div",null,[u("p",null,[t("\u652F\u6301\u5E38\u7528\u7684 "),u("code",null,"left(\u9ED8\u8BA4)"),t(),u("code",null,"center"),t(),u("code",null,"right"),t(),u("code",null,"around"),t(),u("code",null,"between"),t(" \u5C5E\u6027")])],-1),X=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Z=u("h2",{id:"fu-jia-gong-neng"},[u("a",{class:"header-anchor",href:"#fu-jia-gong-neng"}),t(" \u9644\u52A0\u529F\u80FD")],-1),uu=u("p",null,[t("\u6839\u636E\u4F7F\u7528\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u5176\u4ED6\u7684\u529F\u80FD\u6A21\u5757\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u5143\u7D20\u548C "),u("code",null,"align"),t(" \u5C5E\u6027\u6765\u5E03\u5C40\u4E00\u4E2A\u4E24\u7AEF\u5BF9\u9F50\u7684\u5206\u9875\u7EC4\u4EF6\u3002")],-1),tu=u("div",null,[u("p",null,[t("\u6B64\u4F8B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7528\u4F8B\uFF0C\u4F7F\u7528\u4E86"),u("code",null,"size-change"),t("\u548C"),u("code",null,"current-change"),t("\u4E8B\u4EF6\u6765\u5904\u7406\u9875\u7801\u5927\u5C0F\u548C\u5F53\u524D\u9875\u53D8\u52A8\u65F6\u5019\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002"),u("code",null,"page-sizes"),t("\u63A5\u53D7\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\uFF0C\u6570\u7EC4\u5143\u7D20\u4E3A\u5C55\u793A\u7684\u9009\u62E9\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u7684\u9009\u9879\uFF0C"),u("code",null,"[100, 200, 300, 400]"),t("\u8868\u793A\u56DB\u4E2A\u9009\u9879\uFF0C\u6BCF\u9875\u663E\u793A 100 \u4E2A\uFF0C200 \u4E2A\uFF0C300 \u4E2A\u6216\u8005 400 \u4E2A\u3002")])],-1),eu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),nu=u("h2",{id:"dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"},[u("a",{class:"header-anchor",href:"#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"}),t(" \u5F53\u53EA\u6709\u4E00\u9875\u65F6\u9690\u85CF\u5206\u9875")],-1),ou=u("p",null,[t("\u5F53\u53EA\u6709\u4E00\u9875\u65F6\uFF0C\u901A\u8FC7\u8BBE\u7F6E "),u("code",null,"hide-on-single-page"),t(" \u5C5E\u6027\u6765\u9690\u85CF\u5206\u9875\u3002")],-1),lu=u("pre",null,[u("code",{class:"html"},` <template>
  <div>
    <p class="m-b-md">
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
`)],-1),au=V('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>line</td><td>\u662F\u5426\u4F7F\u7528\u7EBF\u6761\u5206\u9875\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>align</td><td>\u5206\u9875\u7EC4\u4EF6\u7684\u6392\u5217\u65B9\u5F0F</td><td>string</td><td><code>left</code>, <code>center</code>, <code>right</code>, <code>around</code>, <code>between</code></td><td>left</td></tr><tr><td>page-size</td><td>\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A</td><td>number</td><td>\u2014</td><td>10</td></tr><tr><td>total</td><td>\u603B\u6761\u76EE\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>page-count</td><td>\u603B\u9875\u6570\uFF0Ctotal \u548C page-count \u8BBE\u7F6E\u4EFB\u610F\u4E00\u4E2A\u5C31\u53EF\u4EE5\u8FBE\u5230\u663E\u793A\u9875\u7801\u7684\u529F\u80FD\uFF1B\u5982\u679C\u8981\u652F\u6301 page-sizes \u7684\u66F4\u6539\uFF0C\u5219\u9700\u8981\u4F7F\u7528 total \u5C5E\u6027</td><td>Number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>pager-count</td><td>\u9875\u7801\u6309\u94AE\u7684\u6570\u91CF\uFF0C\u5F53\u603B\u9875\u6570\u8D85\u8FC7\u8BE5\u503C\u65F6\u4F1A\u6298\u53E0</td><td>number</td><td>\u5927\u4E8E\u7B49\u4E8E 5 \u4E14\u5C0F\u4E8E\u7B49\u4E8E 21 \u7684\u5947\u6570</td><td>7</td></tr><tr><td>current-page</td><td>\u5F53\u524D\u9875\u6570\uFF0C\u652F\u6301 v-model \u53CC\u5411\u7ED1\u5B9A\u7B26</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>layout</td><td>\u7EC4\u4EF6\u5E03\u5C40\uFF0C\u5B50\u7EC4\u4EF6\u540D\u7528\u9017\u53F7\u5206\u9694</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, total&#39;</td></tr><tr><td>page-sizes</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td><td>number[]</td><td>\u2014</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u4E0B\u62C9\u6846\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>prev-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0A\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>next-text</td><td>\u66FF\u4EE3\u56FE\u6807\u663E\u793A\u7684\u4E0B\u4E00\u9875\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF</td><td>boolean</td><td>\u2014</td><td>-</td></tr><tr><td>block</td><td>\u5757\u7EA7\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><blockquote class="m-t-md"><p><em><strong>\u7EC4\u4EF6\u73B0\u5728\u4F1A\u68C0\u67E5\u4E00\u4E9B\u4E0D\u5408\u7406\u7684\u7528\u6CD5\uFF0C\u5982\u679C\u53D1\u73B0\u5206\u9875\u5668\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u6838\u5BF9\u662F\u5426\u8FDD\u53CD\u4EE5\u4E0B\u60C5\u5F62\uFF1A</strong></em></p><ul><li>total \u548C page-count \u5FC5\u987B\u4F20\u4E00\u4E2A\uFF0C\u4E0D\u7136\u7EC4\u4EF6\u65E0\u6CD5\u5224\u65AD\u603B\u9875\u6570\uFF1B\u4F18\u5148\u4F7F\u7528 page-count;</li><li>\u5982\u679C\u4F20\u5165\u4E86 current-page \u5FC5\u987B\u76D1\u542C current-page \u53D8\u66F4\u7684\u4E8B\u4EF6\uFF08onUpdate:currentPage\uFF09\uFF1B\u5426\u5219\u5206\u9875\u5207\u6362\u4E0D\u8D77\u4F5C\u7528\uFF1B</li><li>\u5982\u679C\u4F20\u5165\u4E86 page-size\uFF0C\u4E14\u5E03\u5C40\u5305\u542B page-size \u9009\u62E9\u5668\uFF08\u5373 layout \u5305\u542B sizes\uFF09\uFF0C\u5FC5\u987B\u76D1\u542C page-size \u53D8\u66F4\u7684\u4E8B\u4EF6\uFF08onUpdate:pageSize\uFF09\uFF0C\u5426\u5219 page-size \u5207\u6362\u4E0D\u8D77\u4F5C\u7528\uFF1B</li></ul></blockquote><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>size-change</td><td>pageSize \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u6BCF\u9875\u6761\u6570</td></tr><tr><td>current-change</td><td>currentPage \u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>prev-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0A\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr><tr><td>next-click</td><td>\u7528\u6237\u70B9\u51FB\u4E0B\u4E00\u9875\u6309\u94AE\u6539\u53D8\u5F53\u524D\u9875\u540E\u89E6\u53D1</td><td>\u5F53\u524D\u9875</td></tr></tbody></table><blockquote class="m-t-md"><p><em><strong>\u4EE5\u4E0A\u4E8B\u4EF6\u4E0D\u63A8\u8350\u4F7F\u7528\uFF08\u4F46\u7531\u4E8E\u517C\u5BB9\u7684\u539F\u56E0\u4ECD\u7136\u652F\u6301\uFF0C\u5728\u4EE5\u540E\u7684\u7248\u672C\u4E2D\u5C06\u4F1A\u88AB\u5220\u9664\uFF09\uFF1B\u5982\u679C\u8981\u76D1\u542C current-page \u548C page-size \u7684\u6539\u53D8\uFF0C\u4F7F\u7528 v-model \u53CC\u5411\u7ED1\u5B9A\u662F\u4E2A\u66F4\u597D\u7684\u9009\u62E9\u3002</strong></em></p></blockquote><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u9700\u8981\u5728 <code>layout</code> \u4E2D\u5217\u51FA <code>slot</code></td></tr></tbody></table>',8);function du(o,e,n,d,p,i){const h=_("hl-demo0"),l=_("demo-block"),B=_("hl-demo1"),r=_("hl-demo2"),s=_("hl-demo3"),F=_("hl-demo4"),g=_("hl-demo5"),E=_("hl-demo6"),m=_("right-nav");return z(),w(P,null,[u("section",null,[S,$,c(l,{fs:""},{source:a(()=>[c(h)]),highlight:a(()=>[U]),default:a(()=>[q]),_:1}),Y,H,c(l,{fs:""},{source:a(()=>[c(B)]),highlight:a(()=>[M]),default:a(()=>[L]),_:1}),W,G,c(l,{fs:""},{source:a(()=>[c(r)]),highlight:a(()=>[I]),_:1}),J,K,c(l,{fs:""},{source:a(()=>[c(s)]),highlight:a(()=>[O]),_:1}),Q,R,c(l,{fs:""},{source:a(()=>[c(F)]),highlight:a(()=>[X]),default:a(()=>[T]),_:1}),Z,uu,c(l,{fs:""},{source:a(()=>[c(g)]),highlight:a(()=>[eu]),default:a(()=>[tu]),_:1}),nu,ou,c(l,{fs:""},{source:a(()=>[c(E)]),highlight:a(()=>[lu]),_:1}),au]),c(m)],64)}var Eu=N(j,[["render",du]]);export{Eu as default};
