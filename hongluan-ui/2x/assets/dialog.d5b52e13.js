var S=Object.defineProperty;var j=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var H=(l,d,t)=>d in l?S(l,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[d]=t,P=(l,d)=>{for(var t in d||(d={}))z.call(d,t)&&H(l,t,d[t]);if(j)for(var t of j(d))q.call(d,t)&&H(l,t,d[t]);return l};import{F as T,L as Q,W as X,Q as u,X as k,P as p,a2 as I,aJ as y,M as s,o as J}from"./vue.fdea90c3.js";import{_ as G,H as K}from"./index.73d60150.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const R={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:l,resolveComponent:d,withCtx:t,createVNode:e,createElementVNode:r,Fragment:v,openBlock:b,createElementBlock:E}=y,C=l("\u6253\u5F00 Dialog"),g=r("br",null,null,-1),B=r("br",null,null,-1),f=l("\u6253\u5F00 \u5DE6\u4FA7\u62BD\u5C49"),_=l("\u6253\u5F00 \u53F3\u4FA7\u62BD\u5C49"),N=l("\u6253\u5F00 \u5E95\u90E8\u62BD\u5C49"),D=l("\u6253\u5F00 \u9876\u90E8\u62BD\u5C49"),c=r("br",null,null,-1),$=r("br",null,null,-1),a=l("\u6253\u5F00 \u5168\u5C4FDialog"),o=r("h4",null,"\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846title",-1),i=r("span",{style:{display:"block",height:"100px"}},"\u5BF9\u8BDD\u6846body\u4FE1\u606F",-1),m={class:"dialog-footer"},w=l("\u53D6 \u6D88"),h=l("\u786E \u5B9A");function U(F,n){const A=d("hl-button"),W=d("hl-dialog");return b(),E(v,null,[e(A,{class:"m-r-md",onClick:n[0]||(n[0]=V=>F.btnClick("center"))},{default:t(()=>[C]),_:1}),g,B,e(A,{class:"m-r-md",onClick:n[1]||(n[1]=V=>F.btnClick("left","drawer"))},{default:t(()=>[f]),_:1}),e(A,{class:"m-r-md",onClick:n[2]||(n[2]=V=>F.btnClick("right","drawer"))},{default:t(()=>[_]),_:1}),e(A,{class:"m-r-md",onClick:n[3]||(n[3]=V=>F.btnClick("bottom","drawer"))},{default:t(()=>[N]),_:1}),e(A,{class:"m-r-md",onClick:n[4]||(n[4]=V=>F.btnClick("top","drawer"))},{default:t(()=>[D]),_:1}),c,$,e(A,{class:"m-r-md",onClick:n[5]||(n[5]=V=>F.btnClick("fullscreen","drawer"))},{default:t(()=>[a]),_:1}),e(W,{modelValue:F.dialogVisible,"onUpdate:modelValue":n[8]||(n[8]=V=>F.dialogVisible=V),width:"400px","show-as":F.showAs,placement:F.placement},{header:t(()=>[o]),footer:t(()=>[r("span",m,[e(A,{onClick:n[6]||(n[6]=V=>F.dialogVisible=!1)},{default:t(()=>[w]),_:1}),e(A,{type:"primary",class:"m-l-md",onClick:n[7]||(n[7]=V=>F.dialogVisible=!1)},{default:t(()=>[h]),_:1})])]),default:t(()=>[i]),_:1},8,["modelValue","show-as","placement"])],64)}const{defineComponent:M,ref:x}=y,L=M({setup(){const F=x(!1),n=x("dialog"),A=x("center");return{dialogVisible:F,showAs:n,placement:A,btnClick:(V,O="dialog")=>{A.value=V,n.value=O,F.value=!0}}}});return P({render:U},L)}(),"hl-demo1":function(){const{createTextVNode:l,resolveComponent:d,withCtx:t,createVNode:e,createElementVNode:r,Fragment:v,openBlock:b,createElementBlock:E}=y,C=l("\u6253\u5F00\u5D4C\u5957\u8868\u683C\u7684 Dialog"),g=l("\u6253\u5F00\u5D4C\u5957\u8868\u5355\u7684 Dialog"),B={class:"dialog-footer"},f=l("\u53D6 \u6D88"),_=l("\u786E \u5B9A");function N(a,o){const i=d("hl-button"),m=d("hl-table-column"),w=d("hl-table"),h=d("hl-dialog"),U=d("hl-input"),M=d("hl-form-item"),x=d("hl-option"),L=d("hl-select"),F=d("hl-form");return b(),E(v,null,[e(i,{class:"m-r-md",onClick:o[0]||(o[0]=n=>a.dialogTableVisible=!0)},{default:t(()=>[C]),_:1}),e(h,{modelValue:a.dialogTableVisible,"onUpdate:modelValue":o[1]||(o[1]=n=>a.dialogTableVisible=n),title:"\u6536\u8D27\u5730\u5740",width:"50%"},{default:t(()=>[e(w,{data:a.gridData,list:""},{default:t(()=>[e(m,{property:"date",label:"\u65E5\u671F",width:"150"}),e(m,{property:"name",label:"\u59D3\u540D",width:"200"}),e(m,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),e(i,{class:"m-r-md",onClick:o[2]||(o[2]=n=>a.dialogFormVisible=!0)},{default:t(()=>[g]),_:1}),e(h,{modelValue:a.dialogFormVisible,"onUpdate:modelValue":o[7]||(o[7]=n=>a.dialogFormVisible=n),title:"\u6536\u8D27\u5730\u5740",width:"500px"},{footer:t(()=>[r("span",B,[e(i,{class:"m-r-md",onClick:o[5]||(o[5]=n=>a.dialogFormVisible=!1)},{default:t(()=>[f]),_:1}),e(i,{type:"primary",onClick:o[6]||(o[6]=n=>a.dialogFormVisible=!1)},{default:t(()=>[_]),_:1})])]),default:t(()=>[e(F,{model:a.form,width:["col-md-6","col-md-18"]},{default:t(()=>[e(M,{label:"\u6D3B\u52A8\u540D\u79F0","label-width":a.formLabelWidth},{default:t(()=>[e(U,{modelValue:a.form.name,"onUpdate:modelValue":o[3]||(o[3]=n=>a.form.name=n),autocomplete:"off",block:""},null,8,["modelValue"])]),_:1},8,["label-width"]),e(M,{label:"\u6D3B\u52A8\u533A\u57DF","label-width":a.formLabelWidth},{default:t(()=>[e(L,{modelValue:a.form.region,"onUpdate:modelValue":o[4]||(o[4]=n=>a.form.region=n),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",block:""},{default:t(()=>[e(x,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(x,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const{defineComponent:D,ref:c}=y,$=D({setup(){const a=c([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}]),o=c(!1),i=c(!1),m=c({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),w=c("120px");return{gridData:a,dialogTableVisible:o,dialogFormVisible:i,form:m,formLabelWidth:w}}});return P({render:N},$)}(),"hl-demo2":function(){const{createTextVNode:l,resolveComponent:d,withCtx:t,createVNode:e,createElementVNode:r,Fragment:v,openBlock:b,createElementBlock:E}=y,C=l("\u70B9\u51FB\u6253\u5F00\u5916\u5C42 Dialog"),g=l("\u70B9\u51FB\u6253\u5F00 Message Box"),B={class:"dialog-footer"},f=l("\u53D6 \u6D88"),_=l("\u6253\u5F00\u5185\u5C42 Dialog");function N(o,i){const m=d("hl-button"),w=d("hl-dialog");return b(),E(v,null,[e(m,{class:"m-r-md",onClick:i[0]||(i[0]=h=>o.outerVisible=!0)},{default:t(()=>[C]),_:1}),e(w,{modelValue:o.outerVisible,"onUpdate:modelValue":i[4]||(i[4]=h=>o.outerVisible=h),title:"\u5916\u5C42 Dialog",width:"40%","destroy-on-close":""},{footer:t(()=>[r("div",B,[e(m,{onClick:i[2]||(i[2]=h=>o.outerVisible=!1)},{default:t(()=>[f]),_:1}),e(m,{type:"primary",class:"m-l-md",onClick:i[3]||(i[3]=h=>o.innerVisible=!0)},{default:t(()=>[_]),_:1})])]),default:t(()=>[e(w,{modelValue:o.innerVisible,"onUpdate:modelValue":i[1]||(i[1]=h=>o.innerVisible=h),width:"30%",title:"\u5185\u5C42 Dialog","append-to-body":""},{default:t(()=>[e(m,{type:"link",onClick:o.open},{default:t(()=>[g]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)}const{defineComponent:D,ref:c}=y,{HlMessageBox:$}=K,a=D({setup(){const o=()=>{$.alert("\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9","\u6807\u9898\u540D\u79F0",{confirmButtonText:"\u786E\u5B9A"})},i=c(!1),m=c(!1);return{outerVisible:i,innerVisible:m,open:o}}});return P({render:N},a)}(),"hl-demo3":function(){const{createTextVNode:l,resolveComponent:d,withCtx:t,createVNode:e,createElementVNode:r,Fragment:v,openBlock:b,createElementBlock:E}=y,C=l("\u70B9\u51FB\u6253\u5F00 Dialog"),g=r("span",null,"\u9700\u8981\u6CE8\u610F\u5728 Dialog \u6253\u5F00\u524D\u662F\u8FD9\u6761\u5185\u5BB9\u548C\u4E0B\u9762\u7684\u5185\u5BB9\u90FD\u662F\u4E0D\u4F1A\u88AB\u6E32\u67D3\u7684",-1),B=r("strong",null,"\u989D\u5916\u7684\u5185\u5BB9",-1),f={class:"dialog-footer"},_=l("\u53D6 \u6D88"),N=l("\u786E \u5B9A");function D(o,i){const m=d("hl-button"),w=d("hl-dialog");return b(),E(v,null,[e(m,{class:"m-r-md",onClick:i[0]||(i[0]=h=>o.centerDialogVisible=!0)},{default:t(()=>[C]),_:1}),e(w,{modelValue:o.centerDialogVisible,"onUpdate:modelValue":i[3]||(i[3]=h=>o.centerDialogVisible=h),title:"\u63D0\u793A",width:"30%","destroy-on-close":""},{footer:t(()=>[r("span",f,[e(m,{onClick:i[1]||(i[1]=h=>o.centerDialogVisible=!1)},{default:t(()=>[_]),_:1}),e(m,{type:"primary",class:"m-l-md",onClick:i[2]||(i[2]=h=>o.centerDialogVisible=!1)},{default:t(()=>[N]),_:1})])]),default:t(()=>[g,B]),_:1},8,["modelValue"])],64)}const{defineComponent:c,ref:$}=y,a=c({setup(){return{centerDialogVisible:$(!1)}}});return P({render:D},a)}(),"hl-demo4":function(){const{createTextVNode:l,resolveComponent:d,withCtx:t,createVNode:e,createElementVNode:r,Fragment:v,openBlock:b,createElementBlock:E}=y,C=l("\u70B9\u51FB\u6253Dialog"),g=r("p",null,"panel \u5BF9\u8BDD\u6846",-1);function B(D,c){const $=d("hl-button"),a=d("hl-dialog");return b(),E(v,null,[e($,{class:"m-r-md",onClick:c[0]||(c[0]=o=>D.outerVisible=!0)},{default:t(()=>[C]),_:1}),e(a,{modelValue:D.outerVisible,"onUpdate:modelValue":c[1]||(c[1]=o=>D.outerVisible=o),title:"\u6D4B\u8BD5Panel\u5C5E\u6027",width:"40%",borderless:"",radius:"0","header-height":"40px","body-padding":"20px","header-class":"header-dialog","body-class":"footer-dialog"},{default:t(()=>[g]),_:1},8,["modelValue"])],64)}const{defineComponent:f,ref:_}=y,N=f({setup(){return{outerVisible:_(!1)}}});return P({render:B},N)}()}},Y=u("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),Z=u("p",null,"Dialog \u901A\u5E38\u7528\u4F5C\u5F39\u7A97\u3001\u6A21\u6001\u7A97\u4F7F\u7528\uFF0C\u5B83\u4F7F\u7528panel\u7EC4\u4EF6\u6784\u5EFA\uFF0C\u540C\u65F6\u4E5F\u652F\u6301panel\u7684\u5C5E\u6027\u7279\u5F81",-1),uu=u("div",null,[u("p",null,[s("\u9700\u8981\u8BBE\u7F6E "),u("code",null,"model-value / v-model"),s(" \u5C5E\u6027\uFF0C\u5B83\u63A5\u6536 "),u("code",null,"boolean"),s("\uFF0C\u5F53\u4E3A "),u("code",null,"true"),s(" \u65F6\u663E\u793A Dialog\u3002Dialog \u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF1A"),u("code",null,"body"),s(" \u548C "),u("code",null,"footer"),s("\uFF0C"),u("code",null,"footer"),s(" \u9700\u8981\u5177\u540D\u4E3A "),u("code",null,"footer"),s(" \u7684 "),u("code",null,"slot"),s("\u3002"),u("code",null,"title"),s(" \u5C5E\u6027\u7528\u4E8E\u5B9A\u4E49\u6807\u9898\uFF0C\u5B83\u662F\u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002\u6700\u540E\uFF0C\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86 "),u("code",null,"before-close"),s(" \u7684\u7528\u6CD5\u3002")])],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="btnClick('center')">\u6253\u5F00 Dialog</hl-button>
  <br><br>
  <hl-button class="m-r-md" @click="btnClick('left', 'drawer')">\u6253\u5F00 \u5DE6\u4FA7\u62BD\u5C49</hl-button>
  <hl-button class="m-r-md" @click="btnClick('right', 'drawer')">\u6253\u5F00 \u53F3\u4FA7\u62BD\u5C49</hl-button>
  <hl-button class="m-r-md" @click="btnClick('bottom', 'drawer')">\u6253\u5F00 \u5E95\u90E8\u62BD\u5C49</hl-button>
  <hl-button class="m-r-md" @click="btnClick('top', 'drawer')">\u6253\u5F00 \u9876\u90E8\u62BD\u5C49</hl-button>
  <br><br>
  <hl-button class="m-r-md" @click="btnClick('fullscreen', 'drawer')">\u6253\u5F00 \u5168\u5C4FDialog</hl-button>

  <hl-dialog
    v-model="dialogVisible"
    width="400px"
    :show-as="showAs"
    :placement="placement"
  >
    <template #header>
      <h4>\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846title</h4>
    </template>
    <span style="display:block; height:100px;">\u5BF9\u8BDD\u6846body\u4FE1\u606F</span>
    <template #footer>
      <span class="dialog-footer">
        <hl-button @click="dialogVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" class="m-l-md" @click="dialogVisible = false">\u786E \u5B9A</hl-button>
      </span>
    </template>
  </hl-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dialogVisible = ref(false)
    const showAs = ref('dialog')
    const placement = ref('center')

    const btnClick = (placementParam, showAsParam = 'dialog') => {
      placement.value = placementParam
      showAs.value = showAsParam
      dialogVisible.value = true
    }

    return {
      dialogVisible,
      showAs,
      placement,
      btnClick,
    }
  },
})
<\/script>
`)],-1),eu=u("div",{class:"doc-tip"},[u("p",null,[u("code",null,"before-close"),s(" \u4EC5\u5F53\u7528\u6237\u901A\u8FC7\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u6216\u906E\u7F69\u5173\u95ED Dialog \u65F6\u8D77\u6548\u3002\u5982\u679C\u4F60\u5728 "),u("code",null,"footer"),s(" \u5177\u540D slot \u91CC\u6DFB\u52A0\u4E86\u7528\u4E8E\u5173\u95ED Dialog \u7684\u6309\u94AE\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u6309\u94AE\u7684\u70B9\u51FB\u56DE\u8C03\u51FD\u6570\u91CC\u52A0\u5165 "),u("code",null,"before-close"),s(" \u7684\u76F8\u5173\u903B\u8F91\u3002")])],-1),ou=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),s(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),lu=u("p",null,"Dialog \u7EC4\u4EF6\u7684\u53EF\u4EE5\u5D4C\u5165\u4EFB\u610F\u7684\u5185\u5BB9",-1),du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="dialogTableVisible = true">\u6253\u5F00\u5D4C\u5957\u8868\u683C\u7684 Dialog</hl-button>

  <hl-dialog v-model="dialogTableVisible" title="\u6536\u8D27\u5730\u5740" width="50%">
    <hl-table :data="gridData" list>
      <hl-table-column property="date" label="\u65E5\u671F" width="150" />
      <hl-table-column property="name" label="\u59D3\u540D" width="200" />
      <hl-table-column property="address" label="\u5730\u5740" />
    </hl-table>
  </hl-dialog>

  <!-- Form -->
  <hl-button class="m-r-md" @click="dialogFormVisible = true">\u6253\u5F00\u5D4C\u5957\u8868\u5355\u7684 Dialog</hl-button>

  <hl-dialog v-model="dialogFormVisible" title="\u6536\u8D27\u5730\u5740" width="500px">
    <hl-form :model="form" :width="['col-md-6','col-md-18']">
      <hl-form-item label="\u6D3B\u52A8\u540D\u79F0" :label-width="formLabelWidth">
        <hl-input v-model="form.name" autocomplete="off" block />
      </hl-form-item>
      <hl-form-item label="\u6D3B\u52A8\u533A\u57DF" :label-width="formLabelWidth">
        <hl-select v-model="form.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF" block>
          <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
          <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
        </hl-select>
      </hl-form-item>
    </hl-form>
    <template #footer>
      <span class="dialog-footer">
        <hl-button class="m-r-md" @click="dialogFormVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" @click="dialogFormVisible = false">\u786E \u5B9A</hl-button>
      </span>
    </template>
  </hl-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const gridData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
    ])
    const dialogTableVisible = ref(false)
    const dialogFormVisible = ref(false)
    const form = ref({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    })
    const formLabelWidth = ref('120px')

    return {
      gridData,
      dialogTableVisible,
      dialogFormVisible,
      form,
      formLabelWidth,
    }
  },
})
<\/script>
`)],-1),nu=u("h2",{id:"qian-tao-de-dialog"},[u("a",{class:"header-anchor",href:"#qian-tao-de-dialog"}),s(" \u5D4C\u5957\u7684 Dialog")],-1),iu=u("p",null,[s("\u5982\u679C\u9700\u8981\u5728\u4E00\u4E2A Dialog \u5185\u90E8\u5D4C\u5957\u53E6\u4E00\u4E2A Dialog\uFF0C\u9700\u8981\u4F7F\u7528 "),u("code",null,"append-to-body"),s(" \u5C5E\u6027\u3002")],-1),au=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="outerVisible = true">\u70B9\u51FB\u6253\u5F00\u5916\u5C42 Dialog</hl-button>

  <hl-dialog v-model="outerVisible" title="\u5916\u5C42 Dialog" width="40%" destroy-on-close>
    <hl-dialog
      v-model="innerVisible"
      width="30%"
      title="\u5185\u5C42 Dialog"
      append-to-body
    >
      <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
    </hl-dialog>
    <template #footer>
      <div class="dialog-footer">
        <hl-button @click="outerVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" class="m-l-md" @click="innerVisible = true">\u6253\u5F00\u5185\u5C42 Dialog</hl-button>
      </div>
    </template>
  </hl-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { HlMessageBox } from 'hongluan-ui'

export default defineComponent({
  setup() {
    const open = () => {
      HlMessageBox.alert('\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9', '\u6807\u9898\u540D\u79F0', {
        confirmButtonText: '\u786E\u5B9A',
      })
    }
    const outerVisible = ref(false)
    const innerVisible = ref(false)
    return {
      outerVisible,
      innerVisible,
      open,
    }
  },
})
<\/script>
`)],-1),su=u("div",{class:"doc-tip"},[u("p",null,[s("Dialog \u7684\u5185\u5BB9\u662F\u61D2\u6E32\u67D3\u7684\uFF0C\u5373\u5728\u7B2C\u4E00\u6B21\u88AB\u6253\u5F00\u4E4B\u524D\uFF0C\u4F20\u5165\u7684\u9ED8\u8BA4 slot \u4E0D\u4F1A\u88AB\u6E32\u67D3\u5230 DOM \u4E0A\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u9700\u8981\u6267\u884C DOM \u64CD\u4F5C\uFF0C\u6216\u901A\u8FC7 "),u("code",null,"ref"),s(" \u83B7\u53D6\u76F8\u5E94\u7EC4\u4EF6\uFF0C\u8BF7\u5728 "),u("code",null,"open"),s(" \u4E8B\u4EF6\u56DE\u8C03\u4E2D\u8FDB\u884C\u3002")])],-1),ru=u("h2",{id:"guan-bi-shi-xiao-hui-dom-nei-rong"},[u("a",{class:"header-anchor",href:"#guan-bi-shi-xiao-hui-dom-nei-rong"}),s(" \u5173\u95ED\u65F6\u9500\u6BC1 DOM \u5185\u5BB9")],-1),mu=u("p",null,"\u53EF\u5728 Dialog \u6CA1\u6709\u663E\u793A\u65F6\uFF0C\u9500\u6BC1 Dialog \u91CC\u7684\u5185\u5BB9\u4EE5\u8FBE\u5230\u51CF\u5C11 DOM \u8282\u70B9\u7684\u4F5C\u7528",-1),cu=u("div",null,[u("p",null,[s("\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u8FD9\u4E2A\u5C5E\u6027\u88AB\u542F\u7528\u65F6\uFF0CDialog \u5185\u5E76\u4E0D\u4F1A\u6709\u4EFB\u4F55\u7684 DOM \u8282\u70B9\u5B58\u5728\uFF0C\u9664\u4E86 "),u("code",null,"overlay"),s(),u("code",null,"header\uFF08\u5982\u679C\u6709\uFF09"),s(),u("code",null,"footer\uFF08\u5982\u679C\u6709\uFF09")])],-1),Fu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="centerDialogVisible = true">\u70B9\u51FB\u6253\u5F00 Dialog</hl-button>

  <hl-dialog
    v-model="centerDialogVisible"
    title="\u63D0\u793A"
    width="30%"
    destroy-on-close
  >
    <span>\u9700\u8981\u6CE8\u610F\u5728 Dialog \u6253\u5F00\u524D\u662F\u8FD9\u6761\u5185\u5BB9\u548C\u4E0B\u9762\u7684\u5185\u5BB9\u90FD\u662F\u4E0D\u4F1A\u88AB\u6E32\u67D3\u7684</span>
    <strong>\u989D\u5916\u7684\u5185\u5BB9</strong>
    <template #footer>
      <span class="dialog-footer">
        <hl-button @click="centerDialogVisible = false">\u53D6 \u6D88</hl-button>
        <hl-button type="primary" class="m-l-md" @click="centerDialogVisible = false">\u786E \u5B9A</hl-button>
      </span>
    </template>
  </hl-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const centerDialogVisible = ref(false)
    return {
      centerDialogVisible,
    }
  },
})
<\/script>
`)],-1),hu=u("h2",{id:"panelshu-xing"},[u("a",{class:"header-anchor",href:"#panelshu-xing"}),s(" Panel\u5C5E\u6027")],-1),Eu=u("p",null,"\u7531\u4E8E Dialog \u57FA\u4E8E Panel \u7EC4\u4EF6\u6784\u9020\uFF0C\u53EF\u4EE5\u5728 Dialog \u4E0A\u76F4\u63A5\u5E94\u7528 Panel \u7EC4\u4EF6\u5C5E\u6027\u3002",-1),pu=u("div",null,[u("p",null,"\u5177\u4F53\u5C5E\u6027\u8BF7\u53C2\u8003Panel\u6587\u6863\u3002")],-1),Du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="outerVisible = true">\u70B9\u51FB\u6253Dialog</hl-button>
  <hl-dialog
    v-model="outerVisible"
    title="\u6D4B\u8BD5Panel\u5C5E\u6027"
    width="40%"
    borderless
    radius="0"
    header-height="40px"
    body-padding="20px"
    header-class="header-dialog"
    body-class="footer-dialog"
  >
    <p>panel \u5BF9\u8BDD\u6846</p>
  </hl-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const outerVisible = ref(false)
    return {
      outerVisible,
    }
  },
})
<\/script>
`)],-1),bu=J('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u662F\u5426\u663E\u793A Dialog</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>Dialog \u7684\u5BBD\u5EA6\u3002showAs=drawer\uFF0Cposition=top / bottom\uFF0C\u8BBE\u7F6E\u4E3A 100%</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>height</td><td>Dialog \u7684\u9AD8\u5EA6\u3002showAs=drawer\uFF0Cposition=left / right\uFF0C\u8BBE\u7F6E\u4E3A 100%</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>top</td><td>Dialog CSS \u4E2D\u7684 top \u503C</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>modal</td><td>\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>append-to-body</td><td>Dialog \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Dialog \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u5728 Dialog \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>custom-class</td><td>Dialog \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>open-delay</td><td>Dialog \u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-delay</td><td>Dialog \u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED</td><td>function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>destroy-on-close</td><td>\u5173\u95ED\u65F6\u9500\u6BC1 Dialog \u4E2D\u7684\u5143\u7D20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>modal-class</td><td>\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>show-as</td><td>\u5F39\u7A97\u7C7B\u578B\u3002\u8BBE\u7F6E\u4E3A drawer \u65F6\uFF0C\u8BF7\u914D\u5408 placement \u4F7F\u7528</td><td>string</td><td>dialog / drawer</td><td>dialog</td></tr><tr><td>animation-name</td><td>Dialog \u52A8\u753B\u7C7B\u578B\uFF0C\u4EC5\u5BF9dialog\u7C7B\u578B\u751F\u6548\u3002\u53C2\u8003\u5185\u7F6E\u8FC7\u5EA6\u52A8\u753B\u6587\u6863</td><td>string</td><td>-</td><td>-</td></tr><tr><td>placement</td><td>\u5F39\u7A97\u4F4D\u7F6E</td><td>string</td><td>center / top / bottom / left / right / fullscreen</td><td>center</td></tr><tr><td>draggable</td><td>\u662F\u5426\u53EF\u62D6\u52A8\u6807\u9898\u90E8\u5206\u79FB\u52A8\u5BF9\u8BDD\u6846\uFF0Cdrawer\u4EE5\u53CAfullscreen\u6A21\u5F0F\u4E0B\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>title</td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>z-index</td><td>\u5BF9\u8BDD\u6846\u81EA\u5B9A\u4E49\u5C42\u7EA7</td><td>number</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Dialog \u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Dialog \u5934\u90E8\u533A\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>Dialog \u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>Dialog \u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr></tbody></table>',6);function Cu(l,d,t,e,r,v){const b=T("hl-demo0"),E=T("demo-block"),C=T("hl-demo1"),g=T("hl-demo2"),B=T("hl-demo3"),f=T("hl-demo4"),_=T("right-nav");return Q(),X(I,null,[u("section",null,[Y,Z,k(E,{fs:""},{source:p(()=>[k(b)]),highlight:p(()=>[tu]),default:p(()=>[uu]),_:1}),eu,ou,lu,k(E,{fs:""},{source:p(()=>[k(C)]),highlight:p(()=>[du]),_:1}),nu,iu,k(E,{fs:""},{source:p(()=>[k(g)]),highlight:p(()=>[au]),_:1}),su,ru,mu,k(E,{fs:""},{source:p(()=>[k(B)]),highlight:p(()=>[Fu]),default:p(()=>[cu]),_:1}),hu,Eu,k(E,{fs:""},{source:p(()=>[k(f)]),highlight:p(()=>[Du]),default:p(()=>[pu]),_:1}),bu]),k(_)],64)}var ku=G(R,[["render",Cu]]);export{ku as default};
