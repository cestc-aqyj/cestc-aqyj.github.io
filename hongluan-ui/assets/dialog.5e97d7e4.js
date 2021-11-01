var z=Object.defineProperty;var M=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var O=(n,a,u)=>a in n?z(n,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[a]=u,U=(n,a)=>{for(var u in a||(a={}))q.call(a,u)&&O(n,u,a[u]);if(M)for(var u of M(a))Y.call(a,u)&&O(n,u,a[u]);return n};import{M as L,o as Q,C as G,D as t,v,Q as E,Y as H,av as y,_ as i,au as I}from"./vue.e2359999.js";import{_ as J}from"./index.1cefbf0a.js";import"./hongluan.c549c0be.js";import"./highlight.e2508551.js";import"./hongluan-icons.785053b0.js";const K={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:n,resolveComponent:a,withCtx:u,createVNode:e,createElementVNode:F,Fragment:w,openBlock:b,createElementBlock:h}=y,C=n("\u6253\u5F00 Dialog"),f=F("br",null,null,-1),g=F("br",null,null,-1),B=n("\u6253\u5F00 \u5DE6\u4FA7\u62BD\u5C49"),_=n("\u6253\u5F00 \u53F3\u4FA7\u62BD\u5C49"),N=n("\u6253\u5F00 \u5E95\u90E8\u62BD\u5C49"),D=n("\u6253\u5F00 \u9876\u90E8\u62BD\u5C49"),s=F("br",null,null,-1),T=F("br",null,null,-1),d=n("\u6253\u5F00 \u5168\u5C4FDialog"),l=F("h4",null,"\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846title",-1),r=F("span",{style:{display:"block",height:"100px"}},"\u5BF9\u8BDD\u6846body\u4FE1\u606F",-1),c={class:"dialog-footer"},A=n("\u53D6 \u6D88"),p=n("\u786E \u5B9A");function x(m,o){const V=a("hl-button"),j=a("hl-dialog");return b(),h(w,null,[e(V,{class:"m-r-md",onClick:o[0]||(o[0]=k=>m.btnClick("center"))},{default:u(()=>[C]),_:1}),f,g,e(V,{class:"m-r-md",onClick:o[1]||(o[1]=k=>m.btnClick("left","drawer"))},{default:u(()=>[B]),_:1}),e(V,{class:"m-r-md",onClick:o[2]||(o[2]=k=>m.btnClick("right","drawer"))},{default:u(()=>[_]),_:1}),e(V,{class:"m-r-md",onClick:o[3]||(o[3]=k=>m.btnClick("bottom","drawer"))},{default:u(()=>[N]),_:1}),e(V,{class:"m-r-md",onClick:o[4]||(o[4]=k=>m.btnClick("top","drawer"))},{default:u(()=>[D]),_:1}),s,T,e(V,{class:"m-r-md",onClick:o[5]||(o[5]=k=>m.btnClick("fullscreen","drawer"))},{default:u(()=>[d]),_:1}),e(j,{modelValue:m.dialogVisible,"onUpdate:modelValue":o[8]||(o[8]=k=>m.dialogVisible=k),width:"400px","show-as":m.showAs,placement:m.placement},{header:u(()=>[l]),footer:u(()=>[F("span",c,[e(V,{onClick:o[6]||(o[6]=k=>m.dialogVisible=!1)},{default:u(()=>[A]),_:1}),e(V,{type:"primary",class:"m-l-md",onClick:o[7]||(o[7]=k=>m.dialogVisible=!1)},{default:u(()=>[p]),_:1})])]),default:u(()=>[r]),_:1},8,["modelValue","show-as","placement"])],64)}const{defineComponent:W,ref:$}=y,P=W({setup(){const m=$(!1),o=$("dialog"),V=$("center");return{dialogVisible:m,showAs:o,placement:V,btnClick:(k,S="dialog")=>{V.value=k,o.value=S,m.value=!0}}}});return U({render:x},P)}(),"hl-demo1":function(){const{createTextVNode:n,resolveComponent:a,withCtx:u,createVNode:e,createElementVNode:F,Fragment:w,openBlock:b,createElementBlock:h}=y,C=n("\u6253\u5F00\u5D4C\u5957\u8868\u683C\u7684 Dialog"),f=n("\u6253\u5F00\u5D4C\u5957\u8868\u5355\u7684 Dialog"),g={class:"dialog-footer"},B=n("\u53D6 \u6D88"),_=n("\u786E \u5B9A");function N(d,l){const r=a("hl-button"),c=a("hl-table-column"),A=a("hl-table"),p=a("hl-dialog"),x=a("hl-input"),W=a("hl-form-item"),$=a("hl-option"),P=a("hl-select"),m=a("hl-form");return b(),h(w,null,[e(r,{class:"m-r-md",onClick:l[0]||(l[0]=o=>d.dialogTableVisible=!0)},{default:u(()=>[C]),_:1}),e(p,{modelValue:d.dialogTableVisible,"onUpdate:modelValue":l[1]||(l[1]=o=>d.dialogTableVisible=o),title:"\u6536\u8D27\u5730\u5740",width:"50%"},{default:u(()=>[e(A,{data:d.gridData,list:""},{default:u(()=>[e(c,{property:"date",label:"\u65E5\u671F",width:"150"}),e(c,{property:"name",label:"\u59D3\u540D",width:"200"}),e(c,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),e(r,{class:"m-r-md",onClick:l[2]||(l[2]=o=>d.dialogFormVisible=!0)},{default:u(()=>[f]),_:1}),e(p,{modelValue:d.dialogFormVisible,"onUpdate:modelValue":l[7]||(l[7]=o=>d.dialogFormVisible=o),title:"\u6536\u8D27\u5730\u5740",width:"500px"},{footer:u(()=>[F("span",g,[e(r,{class:"m-r-md",onClick:l[5]||(l[5]=o=>d.dialogFormVisible=!1)},{default:u(()=>[B]),_:1}),e(r,{type:"primary",onClick:l[6]||(l[6]=o=>d.dialogFormVisible=!1)},{default:u(()=>[_]),_:1})])]),default:u(()=>[e(m,{model:d.form,width:["col-md-6","col-md-18"]},{default:u(()=>[e(W,{label:"\u6D3B\u52A8\u540D\u79F0","label-width":d.formLabelWidth},{default:u(()=>[e(x,{modelValue:d.form.name,"onUpdate:modelValue":l[3]||(l[3]=o=>d.form.name=o),autocomplete:"off",block:""},null,8,["modelValue"])]),_:1},8,["label-width"]),e(W,{label:"\u6D3B\u52A8\u533A\u57DF","label-width":d.formLabelWidth},{default:u(()=>[e(P,{modelValue:d.form.region,"onUpdate:modelValue":l[4]||(l[4]=o=>d.form.region=o),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",block:""},{default:u(()=>[e($,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e($,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const{defineComponent:D,ref:s}=y,T=D({setup(){const d=s([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}]),l=s(!1),r=s(!1),c=s({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),A=s("120px");return{gridData:d,dialogTableVisible:l,dialogFormVisible:r,form:c,formLabelWidth:A}}});return U({render:N},T)}(),"hl-demo2":function(){const{createTextVNode:n,resolveComponent:a,withCtx:u,createVNode:e,createElementVNode:F,Fragment:w,openBlock:b,createElementBlock:h}=y,C=n("\u6253\u5F00\u5D4C\u5957\u8868\u683C\u7684 Dialog"),f=n("\u6253\u5F00\u5D4C\u5957\u8868\u5355\u7684 Dialog"),g={class:"dialog-footer"},B=n("\u53D6 \u6D88"),_=n("\u786E \u5B9A");function N(d,l){const r=a("hl-button"),c=a("hl-table-column"),A=a("hl-table"),p=a("hl-dialog"),x=a("hl-input"),W=a("hl-form-item"),$=a("hl-option"),P=a("hl-select"),m=a("hl-form");return b(),h(w,null,[e(r,{class:"m-r-md",onClick:l[0]||(l[0]=o=>d.dialogTableVisible=!0)},{default:u(()=>[C]),_:1}),e(p,{modelValue:d.dialogTableVisible,"onUpdate:modelValue":l[1]||(l[1]=o=>d.dialogTableVisible=o),title:"\u6536\u8D27\u5730\u5740",width:"50%"},{default:u(()=>[e(A,{data:d.gridData,list:""},{default:u(()=>[e(c,{property:"date",label:"\u65E5\u671F",width:"150"}),e(c,{property:"name",label:"\u59D3\u540D",width:"200"}),e(c,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),e(r,{class:"m-r-md",onClick:l[2]||(l[2]=o=>d.dialogFormVisible=!0)},{default:u(()=>[f]),_:1}),e(p,{modelValue:d.dialogFormVisible,"onUpdate:modelValue":l[7]||(l[7]=o=>d.dialogFormVisible=o),title:"\u6536\u8D27\u5730\u5740",width:"500px"},{footer:u(()=>[F("span",g,[e(r,{class:"m-r-md",onClick:l[5]||(l[5]=o=>d.dialogFormVisible=!1)},{default:u(()=>[B]),_:1}),e(r,{type:"primary",onClick:l[6]||(l[6]=o=>d.dialogFormVisible=!1)},{default:u(()=>[_]),_:1})])]),default:u(()=>[e(m,{model:d.form,width:["col-md-6","col-md-18"]},{default:u(()=>[e(W,{label:"\u6D3B\u52A8\u540D\u79F0","label-width":d.formLabelWidth},{default:u(()=>[e(x,{modelValue:d.form.name,"onUpdate:modelValue":l[3]||(l[3]=o=>d.form.name=o),autocomplete:"off",block:""},null,8,["modelValue"])]),_:1},8,["label-width"]),e(W,{label:"\u6D3B\u52A8\u533A\u57DF","label-width":d.formLabelWidth},{default:u(()=>[e(P,{modelValue:d.form.region,"onUpdate:modelValue":l[4]||(l[4]=o=>d.form.region=o),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",block:""},{default:u(()=>[e($,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e($,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const{defineComponent:D,ref:s}=y,T=D({setup(){const d=s([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}]),l=s(!1),r=s(!1),c=s({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),A=s("120px");return{gridData:d,dialogTableVisible:l,dialogFormVisible:r,form:c,formLabelWidth:A}}});return U({render:N},T)}(),"hl-demo3":function(){const{createTextVNode:n,resolveComponent:a,withCtx:u,createVNode:e,createElementVNode:F,Fragment:w,openBlock:b,createElementBlock:h}=y,C=n("\u70B9\u51FB\u6253\u5F00 Dialog"),f=F("span",null,"\u9700\u8981\u6CE8\u610F\u5728 Dialog \u6253\u5F00\u524D\u662F\u8FD9\u6761\u5185\u5BB9\u548C\u4E0B\u9762\u7684\u5185\u5BB9\u90FD\u662F\u4E0D\u4F1A\u88AB\u6E32\u67D3\u7684",-1),g=F("strong",null,"\u989D\u5916\u7684\u5185\u5BB9",-1),B={class:"dialog-footer"},_=n("\u53D6 \u6D88"),N=n("\u786E \u5B9A");function D(l,r){const c=a("hl-button"),A=a("hl-dialog");return b(),h(w,null,[e(c,{class:"m-r-md",onClick:r[0]||(r[0]=p=>l.centerDialogVisible=!0)},{default:u(()=>[C]),_:1}),e(A,{modelValue:l.centerDialogVisible,"onUpdate:modelValue":r[3]||(r[3]=p=>l.centerDialogVisible=p),title:"\u63D0\u793A",width:"30%","destroy-on-close":""},{footer:u(()=>[F("span",B,[e(c,{onClick:r[1]||(r[1]=p=>l.centerDialogVisible=!1)},{default:u(()=>[_]),_:1}),e(c,{type:"primary",class:"m-l-md",onClick:r[2]||(r[2]=p=>l.centerDialogVisible=!1)},{default:u(()=>[N]),_:1})])]),default:u(()=>[f,g]),_:1},8,["modelValue"])],64)}const{defineComponent:s,ref:T}=y,d=s({setup(){return{centerDialogVisible:T(!1)}}});return U({render:D},d)}(),"hl-demo4":function(){const{createTextVNode:n,resolveComponent:a,withCtx:u,createVNode:e,createElementVNode:F,Fragment:w,openBlock:b,createElementBlock:h}=y,C=n("\u70B9\u51FB\u6253Dialog"),f=F("p",null,"panel \u5BF9\u8BDD\u6846",-1);function g(D,s){const T=a("hl-button"),d=a("hl-dialog");return b(),h(w,null,[e(T,{class:"m-r-md",onClick:s[0]||(s[0]=l=>D.outerVisible=!0)},{default:u(()=>[C]),_:1}),e(d,{modelValue:D.outerVisible,"onUpdate:modelValue":s[1]||(s[1]=l=>D.outerVisible=l),title:"\u6D4B\u8BD5Panel\u5C5E\u6027",width:"40%",borderless:!0,radius:"0px","header-height":"40px","body-padding":"20px","header-class":"header-dialog","body-class":"footer-dialog"},{default:u(()=>[f]),_:1},8,["modelValue"])],64)}const{defineComponent:B,ref:_}=y,N=B({setup(){return{outerVisible:_(!1)}}});return U({render:g},N)}()}},R=t("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),X=t("p",null,"Dialog \u901A\u5E38\u7528\u4F5C\u5F39\u7A97\u3001\u6A21\u6001\u7A97\u4F7F\u7528\uFF0C\u5B83\u4F7F\u7528panel\u7EC4\u4EF6\u6784\u5EFA\uFF0C\u540C\u65F6\u4E5F\u652F\u6301panel\u7684\u5C5E\u6027\u7279\u5F81",-1),Z=t("div",null,[t("p",null,[i("\u9700\u8981\u8BBE\u7F6E "),t("code",null,"model-value / v-model"),i(" \u5C5E\u6027\uFF0C\u5B83\u63A5\u6536 "),t("code",null,"boolean"),i("\uFF0C\u5F53\u4E3A "),t("code",null,"true"),i(" \u65F6\u663E\u793A Dialog\u3002Dialog \u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF1A"),t("code",null,"body"),i(" \u548C "),t("code",null,"footer"),i("\uFF0C"),t("code",null,"footer"),i(" \u9700\u8981\u5177\u540D\u4E3A "),t("code",null,"footer"),i(" \u7684 "),t("code",null,"slot"),i("\u3002"),t("code",null,"title"),i(" \u5C5E\u6027\u7528\u4E8E\u5B9A\u4E49\u6807\u9898\uFF0C\u5B83\u662F\u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002\u6700\u540E\uFF0C\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86 "),t("code",null,"before-close"),i(" \u7684\u7528\u6CD5\u3002")])],-1),uu=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),eu=t("div",{class:"md-tip"},[t("p",null,[t("code",null,"before-close"),i(" \u4EC5\u5F53\u7528\u6237\u901A\u8FC7\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u6216\u906E\u7F69\u5173\u95ED Dialog \u65F6\u8D77\u6548\u3002\u5982\u679C\u4F60\u5728 "),t("code",null,"footer"),i(" \u5177\u540D slot \u91CC\u6DFB\u52A0\u4E86\u7528\u4E8E\u5173\u95ED Dialog \u7684\u6309\u94AE\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u6309\u94AE\u7684\u70B9\u51FB\u56DE\u8C03\u51FD\u6570\u91CC\u52A0\u5165 "),t("code",null,"before-close"),i(" \u7684\u76F8\u5173\u903B\u8F91\u3002")])],-1),tu=t("h2",{id:"zi-ding-yi-nei-rong"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),i(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),lu=t("p",null,"Dialog \u7EC4\u4EF6\u7684\u53EF\u4EE5\u5D4C\u5165\u4EFB\u610F\u7684\u5185\u5BB9",-1),ou=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),du=t("h2",{id:"qian-tao-de-dialog"},[t("a",{class:"header-anchor",href:"#qian-tao-de-dialog"}),i(" \u5D4C\u5957\u7684 Dialog")],-1),au=t("p",null,[i("\u5982\u679C\u9700\u8981\u5728\u4E00\u4E2A Dialog \u5185\u90E8\u5D4C\u5957\u53E6\u4E00\u4E2A Dialog\uFF0C\u9700\u8981\u4F7F\u7528 "),t("code",null,"append-to-body"),i(" \u5C5E\u6027\u3002")],-1),nu=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),iu=t("div",{class:"md-tip"},[t("p",null,[i("Dialog \u7684\u5185\u5BB9\u662F\u61D2\u6E32\u67D3\u7684\uFF0C\u5373\u5728\u7B2C\u4E00\u6B21\u88AB\u6253\u5F00\u4E4B\u524D\uFF0C\u4F20\u5165\u7684\u9ED8\u8BA4 slot \u4E0D\u4F1A\u88AB\u6E32\u67D3\u5230 DOM \u4E0A\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u9700\u8981\u6267\u884C DOM \u64CD\u4F5C\uFF0C\u6216\u901A\u8FC7 "),t("code",null,"ref"),i(" \u83B7\u53D6\u76F8\u5E94\u7EC4\u4EF6\uFF0C\u8BF7\u5728 "),t("code",null,"open"),i(" \u4E8B\u4EF6\u56DE\u8C03\u4E2D\u8FDB\u884C\u3002")])],-1),ru=t("h2",{id:"guan-bi-shi-xiao-hui-dom-nei-rong"},[t("a",{class:"header-anchor",href:"#guan-bi-shi-xiao-hui-dom-nei-rong"}),i(" \u5173\u95ED\u65F6\u9500\u6BC1 DOM \u5185\u5BB9")],-1),su=t("p",null,"\u53EF\u5728 Dialog \u6CA1\u6709\u663E\u793A\u65F6\uFF0C\u9500\u6BC1 Dialog \u91CC\u7684\u5185\u5BB9\u4EE5\u8FBE\u5230\u51CF\u5C11 DOM \u8282\u70B9\u7684\u4F5C\u7528",-1),mu=t("div",null,[t("p",null,[i("\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u8FD9\u4E2A\u5C5E\u6027\u88AB\u542F\u7528\u65F6\uFF0CDialog \u5185\u5E76\u4E0D\u4F1A\u6709\u4EFB\u4F55\u7684 DOM \u8282\u70B9\u5B58\u5728\uFF0C\u9664\u4E86 "),t("code",null,"overlay"),i(),t("code",null,"header\uFF08\u5982\u679C\u6709\uFF09"),i(),t("code",null,"footer\uFF08\u5982\u679C\u6709\uFF09")])],-1),Fu=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),cu=t("h2",{id:"panelshu-xing"},[t("a",{class:"header-anchor",href:"#panelshu-xing"}),i(" Panel\u5C5E\u6027")],-1),hu=t("p",null,"\u7531\u4E8E Dialog \u57FA\u4E8E Panel \u7EC4\u4EF6\u6784\u9020\uFF0C\u53EF\u4EE5\u5728 Dialog \u4E0A\u76F4\u63A5\u5E94\u7528 Panel \u7EC4\u4EF6\u5C5E\u6027\u3002",-1),Eu=t("div",null,[t("p",null,"\u5177\u4F53\u5C5E\u6027\u8BF7\u53C2\u8003Panel\u6587\u6863\u3002\u6CE8\u610Fboolean\u503C\u5C5E\u6027\u9700\u8981\u5199\u5168\uFF0C\u4E0D\u80FD\u7528\u7B80\u5199")],-1),Du=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="outerVisible = true">\u70B9\u51FB\u6253Dialog</hl-button>
  <hl-dialog
    v-model="outerVisible"
    title="\u6D4B\u8BD5Panel\u5C5E\u6027"
    width="40%"
    :borderless="true"
    radius="0px"
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
`)],-1),pu=I('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u662F\u5426\u663E\u793A Dialog</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>Dialog \u7684\u5BBD\u5EA6\u3002showAs=drawer\uFF0Cposition=top / bottom\uFF0C\u8BBE\u7F6E\u4E3A 100%</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>height</td><td>Dialog \u7684\u9AD8\u5EA6\u3002showAs=drawer\uFF0Cposition=left / right\uFF0C\u8BBE\u7F6E\u4E3A 100%</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>top</td><td>Dialog CSS \u4E2D\u7684 top \u503C</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>modal</td><td>\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>append-to-body</td><td>Dialog \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Dialog \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u5728 Dialog \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>custom-class</td><td>Dialog \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>open-delay</td><td>Dialog \u6253\u5F00\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-delay</td><td>Dialog \u5173\u95ED\u7684\u5EF6\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u6309\u4E0B ESC \u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C Dialog \u7684\u5173\u95ED</td><td>function(done)\uFF0Cdone \u7528\u4E8E\u5173\u95ED Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>destroy-on-close</td><td>\u5173\u95ED\u65F6\u9500\u6BC1 Dialog \u4E2D\u7684\u5143\u7D20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>modal-class</td><td>\u5F39\u7A97\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>showAs</td><td>\u5F39\u7A97\u7C7B\u578B\u3002\u8BBE\u7F6E\u4E3A drawer \u65F6\uFF0C\u8BF7\u914D\u5408 placement \u4F7F\u7528</td><td>string</td><td>dialog / drawer</td><td>dialog</td></tr><tr><td>animation-name</td><td>Dialog \u52A8\u753B\u7C7B\u578B\uFF0C\u4EC5\u5BF9dialog\u7C7B\u578B\u751F\u6548\u3002\u53C2\u8003\u5185\u7F6E\u8FC7\u5EA6\u52A8\u753B\u6587\u6863</td><td>string</td><td>-</td><td>-</td></tr><tr><td>placement</td><td>\u5F39\u7A97\u4F4D\u7F6E</td><td>string</td><td>center / top / bottom / left / right / fullscreen</td><td>center</td></tr><tr><td>draggable</td><td>\u662F\u5426\u53EF\u62D6\u52A8\u6807\u9898\u90E8\u5206\u79FB\u52A8\u5BF9\u8BDD\u6846\uFF0Cdrawer\u4EE5\u53CAfullscreen\u6A21\u5F0F\u4E0B\u65E0\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>title</td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>z-index</td><td>\u5BF9\u8BDD\u6846\u81EA\u5B9A\u4E49\u5C42\u7EA7</td><td>number</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Dialog \u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Dialog \u5934\u90E8\u533A\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>Dialog \u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>Dialog \u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr></tbody></table>',6);function bu(n,a,u,e,F,w){const b=L("hl-demo0"),h=L("demo-block"),C=L("hl-demo1"),f=L("hl-demo2"),g=L("hl-demo3"),B=L("hl-demo4"),_=L("right-nav");return Q(),G(H,null,[t("section",null,[R,X,v(h,{fs:""},{source:E(()=>[v(b)]),highlight:E(()=>[uu]),default:E(()=>[Z]),_:1}),eu,tu,lu,v(h,{fs:""},{source:E(()=>[v(C)]),highlight:E(()=>[ou]),_:1}),du,au,v(h,{fs:""},{source:E(()=>[v(f)]),highlight:E(()=>[nu]),_:1}),iu,ru,su,v(h,{fs:""},{source:E(()=>[v(g)]),highlight:E(()=>[Fu]),default:E(()=>[mu]),_:1}),cu,hu,v(h,{fs:""},{source:E(()=>[v(B)]),highlight:E(()=>[Du]),default:E(()=>[Eu]),_:1}),pu]),v(_)],64)}var Vu=J(K,[["render",bu]]);export{Vu as default};
