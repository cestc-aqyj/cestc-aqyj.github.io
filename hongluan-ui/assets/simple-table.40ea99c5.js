var G=Object.defineProperty;var j=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var z=(n,a,e)=>a in n?G(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,N=(n,a)=>{for(var e in a||(a={}))M.call(a,e)&&z(n,e,a[e]);if(j)for(var e of j(a))P.call(a,e)&&z(n,e,a[e]);return n};import{M as w,o as O,C as H,D as u,v as _,Q as D,Y as J,av as b,_ as i,au as $}from"./vue.3baa9061.js";import{_ as K,H as R}from"./index.4b0b5d1f.js";import"./hongluan.a52c900d.js";import"./highlight.e2508551.js";import"./hongluan-icons.91256e5f.js";const Y={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,createVNode:a,toDisplayString:e,createTextVNode:s,withCtx:l,createElementVNode:B,openBlock:x,createBlock:o}=b,F=s(e("")),h=B("a",null,"\u4FEE\u6539",-1);function c(t,p){const r=n("hl-checkbox"),E=n("hl-simple-table");return x(),o(E,{cols:t.cols,data:t.tableData,onRowClick:t.rowClicked,onCellClick:t.cellClicked},{firstCol:l(()=>[a(r,{modelValue:t.selectedAll,"onUpdate:modelValue":p[0]||(p[0]=g=>t.selectedAll=g),onChange:t.selectAll},null,8,["modelValue","onChange"])]),tableIndex:l(({row:g})=>[a(r,{modelValue:t.selectedRows,"onUpdate:modelValue":p[1]||(p[1]=v=>t.selectedRows=v),label:g.id,onChange:v=>t.selectRow(g.id)},{default:l(()=>[F]),_:2},1032,["modelValue","label","onChange"])]),handle:l(()=>[h]),_:1},8,["cols","data","onRowClick","onCellClick"])}const{defineComponent:m,ref:C}=b,d=m({setup(){const t=C(!1),p=C([]),r=C([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),E=C([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{selectedAll:t,selectedRows:p,tableData:r,cols:E,selectAll:()=>{t.value?(p.value.splice(0,p.value.length),p.value.push(...r.value.map(k=>k.id))):p.value.splice(0,p.value.length)},selectRow:()=>{t.value=p.value.length===r.value.length},rowClicked:(k,A,I)=>{console.log("rowClicked",k,A,I)},cellClicked:(k,A,I,V,S)=>{console.log("cellClicked",k,A,I,V,S)}}}});return N({render:c},d)}(),"hl-demo1":function(){const{renderList:n,Fragment:a,openBlock:e,createElementBlock:s,resolveComponent:l,createBlock:B,createCommentVNode:x,withCtx:o,createVNode:F,toDisplayString:h,createElementVNode:c}=b,m=c("a",null,"\u4FEE\u6539",-1);function C(r,E){const g=l("hl-option"),v=l("hl-select"),y=l("hl-simple-table");return e(),s(a,null,[F(v,{modelValue:r.value,"onUpdate:modelValue":E[0]||(E[0]=f=>r.value=f),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:o(()=>[(e(!0),s(a,null,n(r.options,f=>(e(),s(a,null,[f.divider?(e(),B(g,{key:f.value,divider:""})):(e(),B(g,{key:f.value,label:f.label,value:f.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(y,{cols:r.cols,data:r.tableData,border:r.value,padding:"0"},{tableIndex:o(({row:f})=>[c("span",null,h(f.rowIndex+1),1)]),handle:o(()=>[m]),_:1},8,["cols","data","border"])],64)}const{defineComponent:d,ref:t}=b,p=d({setup(){const r=t([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),E=t([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),g=t([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),v=t("borderless");return{tableData:r,cols:E,value:v,options:g}}});return N({render:C},p)}(),"hl-demo2":function(){const{renderList:n,Fragment:a,openBlock:e,createElementBlock:s,resolveComponent:l,createBlock:B,createCommentVNode:x,withCtx:o,createVNode:F,toDisplayString:h,createElementVNode:c,createTextVNode:m}=b,C=m("\u4FEE\u6539");function d(E,g){const v=l("hl-option"),y=l("hl-select"),f=l("hl-button"),k=l("hl-simple-table");return e(),s(a,null,[F(y,{modelValue:E.value,"onUpdate:modelValue":g[0]||(g[0]=A=>E.value=A),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:o(()=>[(e(!0),s(a,null,n(E.options,A=>(e(),s(a,null,[A.divider?(e(),B(v,{key:A.value,divider:""})):(e(),B(v,{key:A.value,label:A.label,value:A.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(k,{cols:E.cols,data:E.tableData,border:"border-x",padding:E.value},{tableIndex:o(({row:A})=>[c("span",null,h(A.rowIndex+1),1)]),handle:o(({row:A})=>[F(f,{type:"link"},{default:o(()=>[C]),_:1})]),_:1},8,["cols","data","padding"])],64)}const{defineComponent:t,ref:p}=b,r=t({setup(){const E=p([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),g=p([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),v=p([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),y=p("0");return{tableData:E,cols:g,value:y,options:v}}});return N({render:d},r)}(),"hl-demo3":function(){const{toDisplayString:n,createElementVNode:a,createTextVNode:e,resolveComponent:s,withCtx:l,createVNode:B,openBlock:x,createBlock:o}=b,F=e("\u4FEE\u6539");function h(d,t){const p=s("hl-button"),r=s("hl-simple-table");return x(),o(r,{cols:d.cols,data:d.tableData,hover:""},{tableIndex:l(({row:E})=>[a("span",null,n(E.rowIndex+1),1)]),handle:l(()=>[B(p,{type:"link"},{default:l(()=>[F]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:c,ref:m}=b,C=c({setup(){const d=m([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=m([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:d,cols:t}}});return N({render:h},C)}(),"hl-demo4":function(){const{toDisplayString:n,createElementVNode:a,createTextVNode:e,resolveComponent:s,withCtx:l,createVNode:B,openBlock:x,createBlock:o}=b,F=e("\u4FEE\u6539");function h(d,t){const p=s("hl-button"),r=s("hl-simple-table");return x(),o(r,{cols:d.cols,data:d.tableData,stripe:""},{tableIndex:l(({row:E})=>[a("span",null,n(E.rowIndex+1),1)]),handle:l(()=>[B(p,{type:"link"},{default:l(()=>[F]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:c,ref:m}=b,C=c({setup(){const d=m([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=m([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:d,cols:t}}});return N({render:h},C)}(),"hl-demo5":function(){const{renderList:n,Fragment:a,openBlock:e,createElementBlock:s,resolveComponent:l,createBlock:B,createCommentVNode:x,withCtx:o,createVNode:F,toDisplayString:h,createElementVNode:c}=b,m=c("a",null,"\u4FEE\u6539",-1);function C(r,E){const g=l("hl-option"),v=l("hl-select"),y=l("hl-simple-table");return e(),s(a,null,[F(v,{modelValue:r.value,"onUpdate:modelValue":E[0]||(E[0]=f=>r.value=f),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:o(()=>[(e(!0),s(a,null,n(r.options,f=>(e(),s(a,null,[f.divider?(e(),B(g,{key:f.value,divider:""})):(e(),B(g,{key:f.value,label:f.label,value:f.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(y,{cols:r.cols,data:r.tableData,size:r.value,class:"borderless-last"},{tableIndex:o(({row:f})=>[c("span",null,h(f.rowIndex+1),1)]),handle:o(()=>[m]),_:1},8,["cols","data","size"])],64)}const{defineComponent:d,ref:t}=b,p=d({setup(){const r=t([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),E=t([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),g=t([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),v=t("md");return{tableData:r,cols:E,value:v,options:g}}});return N({render:C},p)}(),"hl-demo6":function(){const{resolveDynamicComponent:n,openBlock:a,createBlock:e,resolveComponent:s,withCtx:l,createVNode:B,createElementVNode:x}=b,o=x("a",null,"\u4FEE\u6539",-1);function F(C,d){const t=s("hl-icon"),p=s("hl-simple-table");return a(),e(p,{cols:C.cols,data:C.tableData,list:"","gap-y":"var(--xs)"},{tableIndex:l(({row:r})=>[B(t,{type:"danger",fill:"",radius:""},{default:l(()=>[(a(),e(n("Two"+r.icon)))]),_:2},1024)]),handle:l(()=>[o]),_:1},8,["cols","data"])}const{defineComponent:h,ref:c}=b,m=h({setup(){const C=c([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",icon:"Briefcase"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",icon:"ChartPie"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",icon:"Archive"}]),d=c([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:C,cols:d}}});return N({render:F},m)}(),"hl-demo7":function(){const{toDisplayString:n,createElementVNode:a,createTextVNode:e,resolveComponent:s,withCtx:l,createVNode:B,openBlock:x,createElementBlock:o}=b,F={class:"table-scroll",style:{height:"200px"}},h=e("\u4FEE\u6539");function c(t,p){const r=s("hl-button"),E=s("hl-simple-table");return x(),o("div",F,[B(E,{cols:t.cols,data:t.tableData,border:"border-x","fixed-header":""},{tableIndex:l(({row:g})=>[a("span",null,n(g.rowIndex+1),1)]),handle:l(()=>[B(r,{type:"link"},{default:l(()=>[h]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:m,ref:C}=b,d=m({setup(){const t=C([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),p=C([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:t,cols:p}}});return N({render:c},d)}(),"hl-demo8":function(){const{toDisplayString:n,createElementVNode:a,createTextVNode:e,resolveComponent:s,withCtx:l,createVNode:B,openBlock:x,createElementBlock:o}=b,F={class:"table-scroll"},h=e("\u4FEE\u6539");function c(t,p){const r=s("hl-button"),E=s("hl-simple-table");return x(),o("div",F,[B(E,{cols:t.cols,data:t.tableData,border:"border-x"},{tableIndex:l(({row:g})=>[a("span",null,n(g.rowIndex+1),1)]),handle:l(()=>[B(r,{type:"link"},{default:l(()=>[h]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:m,ref:C}=b,d=m({setup(){const t=C([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),p=C([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px",fixed:"left"},{title:"\u6027\u522B",prop:"sex",width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"100px"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return{tableData:t,cols:p}}});return N({render:c},d)}(),"hl-demo9":function(){const{toDisplayString:n,createElementVNode:a,createTextVNode:e,resolveComponent:s,withCtx:l,createVNode:B,openBlock:x,createBlock:o}=b,F=e("\u4FEE\u6539");function h(d,t){const p=s("hl-button"),r=s("hl-simple-table"),E=s("hl-scrollbar");return x(),o(E,{height:"200px"},{default:l(()=>[B(r,{cols:d.cols,data:d.tableData,border:"border-x","fixed-header":""},{tableIndex:l(({row:g})=>[a("span",null,n(g.rowIndex+1),1)]),handle:l(()=>[B(p,{type:"link"},{default:l(()=>[F]),_:1})]),_:1},8,["cols","data"])]),_:1})}const{defineComponent:c,ref:m}=b,C=c({setup(){const d=m([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=m([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px"},{title:"\u6027\u522B",prop:"sex",width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"500px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,fixed:"right"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return{tableData:d,cols:t}}});return N({render:h},C)}(),"hl-demo10":function(){const{toDisplayString:n,createElementVNode:a,createTextVNode:e,resolveComponent:s,withCtx:l,createVNode:B,openBlock:x,createBlock:o}=b,F=e("\u4FEE\u6539");function h(d,t){const p=s("hl-button"),r=s("hl-simple-table");return x(),o(r,{cols:d.cols,data:d.tableData,hover:"","show-header":!1},{tableIndex:l(({row:E})=>[a("span",null,n(E.rowIndex+1),1)]),handle:l(()=>[B(p,{type:"link"},{default:l(()=>[F]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:c,ref:m}=b,C=c({setup(){const d=m([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=m([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:d,cols:t}}});return N({render:h},C)}(),"hl-demo11":function(){const{resolveComponent:n,createVNode:a,createTextVNode:e,withCtx:s,openBlock:l,createBlock:B}=b,x=e(" \u81EA\u5B9A\u4E49\u5217 ");function o(d,t){const p=n("sortable-icon"),r=n("hl-simple-table");return l(),B(r,{cols:d.cols,data:d.tableData,onSortChange:d.sortChange},{index:s(()=>[x,a(p,{sortable:"",onSortChange:t[0]||(t[0]=E=>d.sortChange("id",E))})]),_:1},8,["cols","data","onSortChange"])}const{defineComponent:F,ref:h}=b,{HlSimpleTable:c}=R,{SortableIcon:m}=c,C=F({components:{SortableIcon:m},setup(){const d=[{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}],t=h(JSON.parse(JSON.stringify(d))),p=h([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0},{title:"\u6027\u522B",prop:"sex",sortable:!1},{title:"\u5355\u4F4D",prop:"org",sortable:"descending"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]);return{tableData:t,cols:p,sortChange:(E,g)=>{console.log("soring...",E,g),g?t.value.sort((v,y)=>{const f=String(v[E]).localeCompare(String(y[E]));return g==="ascending"?f:f*-1}):t.value=JSON.parse(JSON.stringify(d))}}}});return N({render:o},C)}(),"hl-demo12":function(){const{createTextVNode:n,resolveComponent:a,withCtx:e,createVNode:s,openBlock:l,createBlock:B}=b,x=n("\u6761\u4EF61"),o=n("\u6761\u4EF62"),F=n("\u6761\u4EF63"),h=n("\u786E\u5B9A"),c=n(" \u81EA\u5B9A\u4E49\u5217 "),m=n("\u6761\u4EF61"),C=n("\u6761\u4EF62"),d=n("\u6761\u4EF63"),t=n("\u786E\u5B9A");function p(f,k){const A=a("hl-checkbox"),I=a("hl-checkbox-group"),V=a("hl-button"),S=a("filter-icon"),U=a("hl-simple-table");return l(),B(U,{cols:f.cols,data:f.tableData},{filterSlot:e(({close:T})=>[s(I,{modelValue:f.selectedItems,"onUpdate:modelValue":k[0]||(k[0]=L=>f.selectedItems=L),dir:"vertical",gap:"var(--md)",block:""},{default:e(()=>[s(A,{label:"1"},{default:e(()=>[x]),_:1}),s(A,{label:"2"},{default:e(()=>[o]),_:1}),s(A,{label:"3"},{default:e(()=>[F]),_:1})]),_:1},8,["modelValue"]),s(V,{type:"primary",size:"sm",class:"m-t-md",onClick:T},{default:e(()=>[h]),_:2},1032,["onClick"])]),index:e(()=>[c,s(S,{placement:"right"},{default:e(({close:T})=>[s(I,{modelValue:f.selectedItems,"onUpdate:modelValue":k[1]||(k[1]=L=>f.selectedItems=L),dir:"vertical",gap:"var(--md)",block:""},{default:e(()=>[s(A,{label:"1"},{default:e(()=>[m]),_:1}),s(A,{label:"2"},{default:e(()=>[C]),_:1}),s(A,{label:"3"},{default:e(()=>[d]),_:1})]),_:1},8,["modelValue"]),s(V,{type:"primary",size:"sm",class:"m-t-md",onClick:T},{default:e(()=>[t]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:r,ref:E}=b,{HlSimpleTable:g}=R,{FilterIcon:v}=g,y=r({components:{FilterIcon:v},setup(){const f=E([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),k=E([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),A=E([]);return{tableData:f,cols:k,selectedItems:A}}});return N({render:p},y)}(),"hl-demo13":function(){const{toDisplayString:n,createElementVNode:a,createTextVNode:e,resolveComponent:s,withCtx:l,openBlock:B,createBlock:x}=b,o=["onClick"],F=a("p",null,"\u624B\u5DE5\u5C55\u5F00\u6570\u636E",-1);function h(d,t){const p=s("hl-simple-table");return B(),x(p,{ref:"tableRef",cols:d.cols,data:d.tableData,"expand-row-keys":["1index","2nameExpand"]},{index:l(({row:r})=>[a("p",null,n(r.org)+" / "+n(r.des),1)]),name:l(({row:r})=>[a("a",{href:"javascript:;",onClick:E=>d.expand(r)},"\u70B9\u6211\u5C55\u5F00",8,o),e(" / "+n(r.name),1)]),nameExpand:l(()=>[F]),des:l(({row:r})=>[a("p",null,n(r.sex)+" / "+n(r.des),1)]),_:1},8,["cols","data"])}const{defineComponent:c,ref:m}=b,C=c({setup(){const d=m(),t=m([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),p=m([{title:"#",prop:"id",expand:{slotName:"index",hideLabel:!0}},{title:"\u7528\u6237\u540D",prop:"name",slotName:"name",expand:{slotName:"nameExpand"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",expand:{slotName:"des"},tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableRef:d,tableData:t,cols:p,expand:E=>{d.value.toggleExpand(E.id,"nameExpand")}}}});return N({render:h},C)}(),"hl-demo14":function(){const{resolveComponent:n,createVNode:a,Fragment:e,openBlock:s,createElementBlock:l}=b;function B(h,c){const m=n("hl-simple-table");return s(),l(e,null,[a(m,{cols:h.cols,data:h.tableData,border:"bordered","span-method":h.arraySpanMethod},null,8,["cols","data","span-method"]),a(m,{cols:h.cols,data:h.tableData,border:"bordered",class:"m-t-md","span-method":h.objectSpanMethod},null,8,["cols","data","span-method"])],64)}const{defineComponent:x,ref:o}=b,F=x({setup(){const h=o([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),c=o([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return{tableData:h,cols:c,arraySpanMethod:({rowIndex:d,columnIndex:t})=>{if(d%2==0){if(t===0)return[1,2];if(t===1)return[0,0]}},objectSpanMethod:({rowIndex:d,columnIndex:t})=>{if(t===0)return d%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}}});return N({render:B},F)}(),"hl-demo15":function(){const{createElementVNode:n,resolveComponent:a,withCtx:e,openBlock:s,createBlock:l}=b,B=n("a",null,"\u4FEE\u6539",-1);function x(c,m){const C=a("hl-simple-table");return s(),l(C,{cols:c.cols,data:c.tableData,border:"bordered"},{handle:e(()=>[B]),_:1},8,["cols","data"])}const{defineComponent:o,ref:F}=b,h=o({setup(){const c=F([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),m=F([{title:"\u65E5\u671F",prop:"date"},{title:"\u914D\u9001\u4FE1\u606F",prop:"delivery",children:[{title:"\u59D3\u540D",prop:"name"},{title:"\u5730\u5740\u4FE1\u606F",prop:"address",children:[{title:"\u7701/\u5E02",prop:"state"},{title:"\u57CE\u5E02",prop:"city"},{title:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"zip",slotName:"handle"}]}]}]);return{tableData:c,cols:m}}});return N({render:x},h)}(),"hl-demo16":function(){const{createElementVNode:n,resolveComponent:a,withCtx:e,openBlock:s,createBlock:l}=b,B=n("tr",null,[n("td",{colspan:"2"},[n("strong",null,"\u5408\u8BA1")]),n("td",null,"\uFFE53232"),n("td",null,"\uFFE51212.22"),n("td",null,"\uFFE590.22")],-1);function x(c,m){const C=a("hl-simple-table");return s(),l(C,{cols:c.cols,data:c.tableData,border:"bordered"},{foot:e(()=>[B]),_:1},8,["cols","data"])}const{defineComponent:o,ref:F}=b,h=o({setup(){const c=F([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),m=F([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return{tableData:c,cols:m}}});return N({render:x},h)}(),"hl-demo17":function(){const{resolveComponent:n,openBlock:a,createBlock:e}=b;function s(o,F){const h=n("hl-simple-table");return a(),e(h,{cols:o.cols,border:"border-x",data:o.tableData},null,8,["cols","data"])}const{defineComponent:l,ref:B}=b,x=l({setup(){const o=B([]),F=B([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return{tableData:o,cols:F}}});return N({render:s},x)}(),"hl-demo18":function(){const{createElementVNode:n,resolveComponent:a,withCtx:e,openBlock:s,createBlock:l}=b,B=n("p",{style:{"text-align":"center"}},"\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~",-1);function x(c,m){const C=a("hl-simple-table");return s(),l(C,{cols:c.cols,border:"border-x",data:c.tableData},{unknown:e(()=>[B]),_:1},8,["cols","data"])}const{defineComponent:o,ref:F}=b,h=o({setup(){const c=F(null),m=F([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return{tableData:c,cols:m}}});return N({render:x},h)}()}},Q=u("h1",null,"SimpleTable \u7B80\u5355\u8868\u683C",-1),W=u("p",null,"SimpleTable \u662F\u4E00\u6B3E\u975E\u5E38\u8F7B\u91CF\u7684\u8868\u683C\u7EC4\u4EF6\u3002",-1),q=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    @row-click="rowClicked"
    @cell-click="cellClicked"
  >
    <template #firstCol>
      <hl-checkbox v-model="selectedAll" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <hl-checkbox
        v-model="selectedRows"
        :label="row.id"
        @change="selectRow(row.id)"
      >
        {{ '' }}
      </hl-checkbox>
    </template>

    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const selectedAll = ref(false)
    const selectedRows = ref([])
    const tableData = ref([
      {
        id: 1,
        name: '\u8303\u767D\u9732',
        sex: '\u5973',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
      },
      {
        id: 2,
        name: 'xxx',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
      },
      {
        id: 3,
        name: '\u738B\u671D\u9633',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      {
        title: '\u7B80\u4ECB',
        prop: 'des',
        showTooltip: true,
        width: '40%',
        tooltipProps: { width: '200px', popperClass: 'test-tip' },
      },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    const selectAll = () => {
      if (selectedAll.value) {
        selectedRows.value.splice(0, selectedRows.value.length)
        selectedRows.value.push(...tableData.value.map(d => d.id))
      } else {
        selectedRows.value.splice(0, selectedRows.value.length)
      }
    }
    const selectRow = () => {
      selectedAll.value = selectedRows.value.length === tableData.value.length
    }
    const rowClicked = (row, rowIndex, event) => {
      console.log('rowClicked', row, rowIndex, event)
    }
    const cellClicked = (row, col, rowIndex, colIndex, event) => {
      console.log('cellClicked', row, col, rowIndex, colIndex, event)
    }

    return {
      selectedAll,
      selectedRows,
      tableData,
      cols,
      selectAll,
      selectRow,
      rowClicked,
      cellClicked,
    }
  },
})
<\/script>
`)],-1),X=u("h2",{id:"bian-kuang-yang-shi"},[u("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),i(" \u8FB9\u6846\u6837\u5F0F")],-1),Z=u("p",null,[u("code",null,"border"),i(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F")],-1),uu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table :cols="cols" :data="tableData" :border="value" padding="0">
    <template #tableIndex="{ row }">
      <span>{{ row.rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])
    const options = ref([
      {
        value: 'borderless',
        label: 'borderless',
      },
      {
        value: 'border-x',
        label: 'border-x',
      },
      {
        value: 'border-y',
        label: 'border-y',
      },
      {
        value: 'bordered',
        label: 'bordered',
      },
    ])
    const value = ref('borderless')

    return {
      tableData,
      cols,
      value,
      options,
    }
  },
})
<\/script>
`)],-1),eu=u("h2",{id:"jian-ju-she-zhi"},[u("a",{class:"header-anchor",href:"#jian-ju-she-zhi"}),i(" \u95F4\u8DDD\u8BBE\u7F6E")],-1),tu=u("p",null,[u("code",null,"padding"),i(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u4E0D\u540C\u7684\u95F4\u8DDD\u6837\u5F0F")],-1),ou=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="border-x"
    :padding="value"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.rowIndex + 1 }}</span>
    </template>
    <template #handle="{ row }">
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])
    const options = ref([
      {
        value: '0',
        label: 'none',
      },
      {
        divider: true,
      },
      {
        value: 'var(--sm)',
        label: 'sm',
      },
      {
        value: 'var(--md)',
        label: 'md',
      },
      {
        value: 'var(--lg)',
        label: 'lg',
      },
      {
        value: 'var(--xl)',
        label: 'xl',
      },
      {
        value: 'var(--xxl)',
        label: 'xxl',
      },
    ])
    const value = ref('0')

    return {
      tableData,
      cols,
      value,
      options,
    }
  },
})
<\/script>
`)],-1),lu=u("h2",{id:"xuan-ting-yang-shi-hover"},[u("a",{class:"header-anchor",href:"#xuan-ting-yang-shi-hover"}),i(" \u60AC\u505C\u6837\u5F0F Hover")],-1),nu=u("p",null,[u("code",null,"hover"),i(" \u5C5E\u6027\u53EF\u4EE5\u5728\u60AC\u505C\u5728\u67D0\u4E00\u884C\u65F6\uFF0C\u5448\u73B0\u80CC\u666F\u8272\u3002")],-1),au=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" :data="tableData" hover>
    <template #tableIndex="{ row }">
      <span>{{ row.rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),su=u("h2",{id:"tiao-wen-yang-shi"},[u("a",{class:"header-anchor",href:"#tiao-wen-yang-shi"}),i(" \u6761\u7EB9\u6837\u5F0F")],-1),du=u("p",null,[u("code",null,"stripe"),i("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u6761\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),ru=u("div",null,[u("p",null,[i("stripe \u8FD8\u63A5\u6536 "),u("code",null,"even"),i(" \u6216\u8005 "),u("code",null,"odd"),i(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),u("code",null,"odd"),i(" \u5947\u6570")])],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" :data="tableData" stripe>
    <template #tableIndex="{ row }">
      <span>{{ row.rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),cu=u("h2",{id:"chi-cun-xiu-shi"},[u("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),i(" \u5C3A\u5BF8\u4FEE\u9970")],-1),pu=u("p",null,[u("code",null,"size"),i(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u7684\u5C3A\u5BF8\u3002")],-1),Eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :size="value"
    class="borderless-last"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])
    const options = ref([
      {
        value: 'sm',
        label: 'sm',
      },
      {
        value: 'md',
        label: 'md',
      },
      {
        value: 'lg',
        label: 'lg',
      },
    ])
    const value = ref('md')

    return {
      tableData,
      cols,
      value,
      options,
    }
  },
})
<\/script>
`)],-1),mu=u("h2",{id:"lie-biao-yang-shi"},[u("a",{class:"header-anchor",href:"#lie-biao-yang-shi"}),i(" \u5217\u8868\u6837\u5F0F")],-1),Fu=u("p",null,[u("code",null,"list"),i(" \u53EF\u4EE5\u5C06\u4F20\u7EDF\u7684\u8868\u683C\u5448\u73B0\u6210\u5217\u8868\u7684\u72B6\u6001\u3002")],-1),hu=u("div",null,[u("p",null,[i("\u5217\u8868\u6837\u5F0F\u4F1A\u4E3A\u6BCF\u4E00\u884C\u8868\u683C\u52A0\u4E0A\u5706\u89D2\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u95F4\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),u("code",null,'gap="var(--xs)"')])],-1),Du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    list
    gap-y="var(--xs)"
  >
    <template #tableIndex="{ row }">
      <hl-icon
        type="danger"
        fill
        radius
      >
        <component
          :is="'Two' + row.icon"
        />
      </hl-icon>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
        icon: 'Briefcase',
      },
      {
        id: 2,
        name: '\u674E\u56DB',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD',
        icon: 'ChartPie',
      },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
        icon: 'Archive',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),Bu=u("h2",{id:"gu-ding-biao-tou"},[u("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),i(" \u56FA\u5B9A\u8868\u5934")],-1),Cu=u("p",null,[i("\u4E3A SimpleTable \u7EC4\u4EF6\u52A0\u4E0A "),u("code",null,"fixed-header"),i(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8868\u5934\u56FA\u5B9A\u5728\u9876\u7AEF\u3002")],-1),_u=u("pre",null,[u("code",{class:"html"},` <template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
    >
      <template #tableIndex="{ row }">
        <span>{{ row.rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),bu=u("h2",{id:"gu-ding-lie"},[u("a",{class:"header-anchor",href:"#gu-ding-lie"}),i(" \u56FA\u5B9A\u5217")],-1),xu=u("p",null,[i("\u4E3A\u67D0\u4E00\u5217\u589E\u52A0 "),u("code",null,"fixed"),i(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5B83\u56FA\u5B9A\uFF0C\u540C\u65F6\u4F60\u53EF\u4EE5\u4F20\u9012 "),u("code",null,"left"),i(),u("code",null,"right"),i(" \u6765\u63A7\u5236\u5B83\u56FA\u5B9A\u5728\u4EC0\u4E48\u5730\u65B9\u3002\u4F8B\u5982 "),u("code",null,"fixed: 'left'")],-1),fu=u("pre",null,[u("code",{class:"html"},` <template>
  <div class="table-scroll">
    <hl-simple-table :cols="cols" :data="tableData" border="border-x">
      <template #tableIndex="{ row }">
        <span>{{ row.rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    // \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
    const cols = ref([
      { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex', fixed: 'left' },
      {
        title: '\u59D3\u540D',
        prop: 'name',
        showTooltip: true,
        width: '150px',
        fixed: 'left',
      },
      { title: '\u6027\u522B', prop: 'sex', width: '150px' },
      { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '400px' },
      { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, width: '100px' },
      {
        title: '\u64CD\u4F5C',
        prop: '',
        slotName: 'handle',
        align: 'center',
        fixed: 'right',
      },
    ])
    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),gu=u("h2",{id:"gu-ding-tou-he-lie"},[u("a",{class:"header-anchor",href:"#gu-ding-tou-he-lie"}),i(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),Au=u("p",null,"\u8868\u5934\u548C\u5217\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u56FA\u5B9A\u3002",-1),vu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-scrollbar height="200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
    >
      <template #tableIndex="{ row }">
        <span>{{ row.rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </hl-scrollbar>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    // \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
    const cols = ref([
      { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex', fixed: 'left' },
      { title: '\u59D3\u540D', prop: 'name', showTooltip: true, width: '150px' },
      { title: '\u6027\u522B', prop: 'sex', width: '150px' },
      { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '500px' },
      { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, fixed: 'right' },
      {
        title: '\u64CD\u4F5C',
        prop: '',
        slotName: 'handle',
        align: 'center',
        fixed: 'right',
      },
    ])
    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),wu=u("h2",{id:"yi-chu-biao-tou"},[u("a",{class:"header-anchor",href:"#yi-chu-biao-tou"}),i(" \u79FB\u9664\u8868\u5934")],-1),Nu=u("p",null,[u("code",null,"show-header"),i(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664\u8868\u5934\uFF0C\u8BA9\u5176\u5C55\u793A\u4E3A\u4E00\u4E2A\u7EAF\u5217\u8868\u6837\u5F0F\u3002")],-1),ku=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" :data="tableData" hover :show-header="false">
    <template #tableIndex="{ row }">
      <span>{{ row.rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      },
      { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
      {
        id: 3,
        name: '\u5F20\u4E09',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
      },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),yu=u("h2",{id:"pai-xu"},[u("a",{class:"header-anchor",href:"#pai-xu"}),i(" \u6392\u5E8F")],-1),Iu=u("p",null,"\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u70B9\u51FB\u76F8\u540C\u7684\u6392\u5E8F\u56FE\u6807\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F\u3002\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u8BF7\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA SortableIcon \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770B\u4E0B\u9762\u81EA\u5B9A\u4E49\u5217\u5B9E\u73B0\u3002",-1),Vu=u("div",null,[u("p",null,[i("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6Esortable\u5C5E\u6027\uFF0C\u503C\u4E3A\uFF1A"),u("code",null,"true / false / 'descending' / 'ascending'"),i(" \uFF0C\u5E76\u901A\u8FC7\u76D1\u542Csort-change\u4E8B\u4EF6\u5904\u7406\u6570\u636E\u6392\u5E8F")])],-1),Su=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    @sort-change="sortChange"
  >
    <template #index>
      \u81EA\u5B9A\u4E49\u5217
      <sortable-icon sortable @sort-change="val => sortChange('id', val)" />
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { HlSimpleTable } from 'hongluan-ui'

const { SortableIcon } = HlSimpleTable

export default defineComponent({
  components: { SortableIcon },
  setup() {
    const defaultData = [
      {
        id: 1,
        name: '\u8303\u767D\u9732',
        sex: '\u5973',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
      },
      {
        id: 2,
        name: 'xxx',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
      },
      {
        id: 3,
        name: '\u738B\u671D\u9633',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
      },
    ]
    const tableData = ref(JSON.parse(JSON.stringify(defaultData)))
    const cols = ref([
      { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
      { title: '\u7528\u6237\u540D', prop: 'name', sortable: true },
      { title: '\u6027\u522B', prop: 'sex', sortable: false },
      { title: '\u5355\u4F4D', prop: 'org', sortable: 'descending' },
      {
        title: '\u7B80\u4ECB',
        prop: 'des',
        showTooltip: true,
        width: '40%',
        tooltipProps: { width: '200px', popperClass: 'test-tip' },
        sortable: 'ascending',
      },
    ])

    const sortChange = (prop, sort) => { // \u4EC5\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5B9E\u9645\u9879\u76EE\u9700\u8981\u901A\u8FC7\u8C03\u53D6\u540E\u53F0API\u5B9E\u73B0
      console.log('soring...', prop, sort)
      if (sort) {
        tableData.value.sort((d1, d2) => {
          const result = String(d1[prop]).localeCompare(String(d2[prop]))
          return sort === 'ascending' ? result : result * -1
        })
      } else {
        tableData.value = JSON.parse(JSON.stringify(defaultData))
      }
    }

    return {
      tableData,
      cols,
      sortChange,
    }
  },
})
<\/script>
`)],-1),Tu=u("h2",{id:"shai-xuan"},[u("a",{class:"header-anchor",href:"#shai-xuan"}),i(" \u7B5B\u9009")],-1),Lu=u("p",null,"\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u8BF7\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA FilterIcon \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770B\u4E0B\u9762\u81EA\u5B9A\u4E49\u5217\u5B9E\u73B0\u3002",-1),ju=u("div",null,[u("p",null,[i("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6E "),u("code",null,"filter"),i(" \u5BF9\u8C61\uFF0C\u63D0\u4F9B "),u("code",null,"slotName"),i("\uFF08\u5FC5\u9009\uFF09\u3001"),u("code",null,"placement"),i("\uFF08\u53C2\u8003Popover\u6587\u6863\uFF09\u3001"),u("code",null,"popperClass"),i(" \u5C5E\u6027\u3002slot\u4E2D\u63D0\u4F9B "),u("code",null,"close"),i(" \u65B9\u6CD5\u7528\u6765\u624B\u5DE5\u5173\u95ED\u5F39\u51FA\u6846\u3002")])],-1),zu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
  >
    <template #filterSlot="{ close }">
      <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>
        <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>
        <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>
        <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>
      </hl-checkbox-group>
      <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>
    </template>
    <template #index>
      \u81EA\u5B9A\u4E49\u5217
      <filter-icon placement="right">
        <template #default="{ close }">
          <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>
            <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>
            <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>
            <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>
          </hl-checkbox-group>
          <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>
        </template>
      </filter-icon>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { HlSimpleTable } from 'hongluan-ui'

const { FilterIcon } = HlSimpleTable

export default defineComponent({
  components: { FilterIcon },
  setup() {
    const tableData = ref([
      {
        id: 1,
        name: '\u8303\u767D\u9732',
        sex: '\u5973',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
      },
      {
        id: 2,
        name: 'xxx',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
      },
      {
        id: 3,
        name: '\u738B\u671D\u9633',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
      },
    ])
    const cols = ref([
      { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
      {
        title: '\u7528\u6237\u540D',
        prop: 'name',
        sortable: true,
        filter: {
          slotName: 'filterSlot',
          placement: 'top',
          popperClass: 'test-filter-slot',
        },
      },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      {
        title: '\u7B80\u4ECB',
        prop: 'des',
        showTooltip: true,
        width: '40%',
        tooltipProps: { width: '200px', popperClass: 'test-tip' },
        filter: { slotName: 'filterSlot' },
      },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    const selectedItems = ref([])

    return {
      tableData,
      cols,
      selectedItems,
    }
  },
})
<\/script>
`)],-1),Ru=u("h2",{id:"zhan-kai-xing"},[u("a",{class:"header-anchor",href:"#zhan-kai-xing"}),i(" \u5C55\u5F00\u884C")],-1),Uu=u("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 SimpleTable \u5C55\u5F00\u884C\u529F\u80FD\u3002\u53EF\u4EE5\u5B9A\u4E49\u591A\u5217\u540C\u65F6\u5C55\u5F00\u3002",-1),Gu=u("div",null,[u("p",null,[i("\u901A\u8FC7\u8BBE\u7F6E expand \u5BF9\u8C61 \u548C slot \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\u3002expand\u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A"),u("code",null,"slotName"),i("\uFF0C"),u("code",null,"hideLabel"),i("\uFF0ChideLabel\u9ED8\u8BA4\u4E3Afalse")])],-1),Mu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    ref="tableRef"
    :cols="cols"
    :data="tableData"
    :expand-row-keys="['1index', '2nameExpand']"
  >
    <template #index="{ row }">
      <p>{{ row.org }} / {{ row.des }}</p>
    </template>
    <template #name="{ row }">
      <a href="javascript:;" @click="expand(row)">\u70B9\u6211\u5C55\u5F00</a> / {{ row.name }}
    </template>
    <template #nameExpand>
      <p>\u624B\u5DE5\u5C55\u5F00\u6570\u636E</p>
    </template>
    <template #des="{ row }">
      <p>{{ row.sex }} / {{ row.des }}</p>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableRef = ref()
    const tableData = ref([
      {
        id: 1,
        name: '\u8303\u767D\u9732',
        sex: '\u5973',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
      },
      {
        id: 2,
        name: 'xxx',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
      },
      {
        id: 3,
        name: '\u738B\u671D\u9633',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
      },
    ])
    const cols = ref([
      { title: '#', prop: 'id', expand: { slotName: 'index', hideLabel: true } },
      { title: '\u7528\u6237\u540D', prop: 'name', slotName: 'name', expand: { slotName: 'nameExpand' } },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      {
        title: '\u7B80\u4ECB',
        prop: 'des',
        showTooltip: true,
        width: '40%',
        expand: { slotName: 'des' },
        tooltipProps: { width: '200px', popperClass: 'test-tip' },
      },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
    ])

    const expand = row => {
      tableRef.value.toggleExpand(row.id, 'nameExpand')
    }

    return {
      tableRef,
      tableData,
      cols,
      expand,
    }
  },
})
<\/script>
`)],-1),Pu=u("h2",{id:"he-bing-xing-huo-lie"},[u("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),i(" \u5408\u5E76\u884C\u6216\u5217")],-1),Ou=u("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),Hu=u("div",null,[u("p",null,"\u901A\u8FC7\u7ED9 table \u4F20\u5165span-method\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C row\u3001\u5F53\u524D\u5217 column\u3001\u5F53\u524D\u884C\u53F7 rowIndex\u3001\u5F53\u524D\u5217\u53F7 columnIndex \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 rowspan\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 colspan\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A rowspan \u548C colspan \u7684\u5BF9\u8C61\u3002")],-1),Ju=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
    :span-method="arraySpanMethod"
  />
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
    class="m-t-md"
    :span-method="objectSpanMethod"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: '12987122',
        name: 'Tom',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
      },
      {
        id: '12987123',
        name: 'Tom',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      },
      {
        id: '12987124',
        name: 'Tom',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
      },
      {
        id: '12987125',
        name: 'Tom',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      },
      {
        id: '12987126',
        name: 'Tom',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      },
    ])
    const cols = ref([
      { title: 'id', prop: 'id' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: 'Amount1', prop: 'amount1' },
      { title: 'Amount2', prop: 'amount2' },
      { title: 'Amount3', prop: 'amount3' },
    ])

    const arraySpanMethod = ({ rowIndex, columnIndex }) => {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    }

    const objectSpanMethod = ({ rowIndex, columnIndex }) => {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          }
        }
      }
    }

    return {
      tableData,
      cols,
      arraySpanMethod,
      objectSpanMethod,
    }
  },
})
<\/script>
`)],-1),$u=u("h2",{id:"duo-ji-biao-tou"},[u("a",{class:"header-anchor",href:"#duo-ji-biao-tou"}),i(" \u591A\u7EA7\u8868\u5934")],-1),Ku=u("p",null,"\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002",-1),Yu=u("div",null,[u("p",null,[i("\u901A\u8FC7"),u("code",null,"cols"),i(" \u7684 "),u("code",null,"children"),i(" \u5C5E\u6027\u5D4C\u5957\u5B9E\u73B0\u591A\u7EA7\u8868\u5934")])],-1),Qu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
  >
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
    ])
    const cols = ref([
      { title: '\u65E5\u671F', prop: 'date' },
      {
        title: '\u914D\u9001\u4FE1\u606F',
        prop: 'delivery',
        children: [
          { title: '\u59D3\u540D', prop: 'name' },
          {
            title: '\u5730\u5740\u4FE1\u606F',
            prop: 'address',
            children: [
              { title: '\u7701/\u5E02', prop: 'state' },
              { title: '\u57CE\u5E02', prop: 'city' },
              { title: '\u5730\u5740', prop: 'address' },
              { title: '\u64CD\u4F5C', prop: 'zip', slotName: 'handle' },
            ],
          },
        ],
      },
    ])

    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),Wu=u("h2",{id:"biao-wei-he-ji-xing"},[u("a",{class:"header-anchor",href:"#biao-wei-he-ji-xing"}),i(" \u8868\u5C3E\u5408\u8BA1\u884C")],-1),qu=u("p",null,"\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u8868\u5C3E\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002",-1),Xu=u("div",null,[u("p",null,[i("\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 "),u("code",null,"foot"),i(" slot\u5B9E\u73B0")])],-1),Zu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
  >
    <template #foot>
      <tr>
        <td colspan="2"><strong>\u5408\u8BA1</strong></td>
        <td>\uFFE53232</td>
        <td>\uFFE51212.22</td>
        <td>\uFFE590.22</td>
      </tr>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: '12987122',
        name: 'Tom',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
      },
      {
        id: '12987123',
        name: 'Tom',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      },
      {
        id: '12987124',
        name: 'Tom',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
      },
      {
        id: '12987125',
        name: 'Tom',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      },
      {
        id: '12987126',
        name: 'Tom',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      },
    ])
    const cols = ref([
      { title: 'id', prop: 'id' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: 'Amount1', prop: 'amount1' },
      { title: 'Amount2', prop: 'amount2' },
      { title: 'Amount3', prop: 'amount3' },
    ])


    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),ue=u("h2",{id:"kong-shu-ju"},[u("a",{class:"header-anchor",href:"#kong-shu-ju"}),i(" \u7A7A\u6570\u636E")],-1),ee=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData" />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([])
    // \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
    const cols = ref([
      { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
      { title: '\u59D3\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u64CD\u4F5C', prop: '', align: 'center' },
    ])
    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),te=u("h2",{id:"wei-zhi-shu-ju"},[u("a",{class:"header-anchor",href:"#wei-zhi-shu-ju"}),i(" \u672A\u77E5\u6570\u636E")],-1),oe=u("div",null,[u("p",null,[i("\u5728\u4F20\u9012\u7684\u6570\u636E\u4E3A "),u("code",null,"null"),i(" \u6216\u8005 "),u("code",null,"undefined"),i(" \u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 "),u("code",null,"unknown"),i(" slot")])],-1),le=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData">
    <template #unknown>
      <p style="text-align: center;">\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~</p>
    </template>
  </hl-simple-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref(null)
    // \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
    const cols = ref([
      { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
      { title: '\u59D3\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u64CD\u4F5C', prop: '', align: 'center' },
    ])
    return {
      tableData,
      cols,
    }
  },
})
<\/script>
`)],-1),ne=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 SimpleTable \u7684\u6E32\u67D3\u3002<em><strong>\u5982\u679C\u8868\u683C\u6570\u636E\u6807\u8BC6\u7B26\u4E0D\u662Fid\u5B57\u6BB5\uFF0C\u8BF7\u4E00\u5B9A\u8981\u8BBE\u7F6E\u6B64\u503C</strong></em></td><td>string / function(row): string</td><td>-</td><td>id</td></tr><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u586B\u5145</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>expand-row-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u884C\uFF0C\u9700\u8981\u7528\u884Cid+slotName\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26</td><td>array</td><td>-</td><td>-</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>-</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string</td><td>left/right</td><td>-</td></tr><tr><td>slotName</td><td>\u5217 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A row\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr><tr><td>filter</td><td>\u5217\u7B5B\u9009\u8BBE\u7F6E</td><td>object{ slotName: string, placement: string, popperClass: string }</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E</td><td>object{ slotName: string, hideLabel: boolean }</td><td>-</td><td>-</td></tr><tr><td>children</td><td>\u5B50\u5217\u4FE1\u606F</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, rowkey, slotName</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleExpand</td><td>\u5C55\u5F00/\u6298\u53E0\u884C\u3002\u7531\u4E8E\u6BCF\u884C\u53EF\u80FD\u6709\u591A\u4E2A\u5C55\u5F00\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u9012\u9700\u8981\u5C55\u5F00\u7684slotName</td><td>rowKey, slotName</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr><tr><td>foot</td><td>\u8868\u5C3E</td></tr></tbody></table>',10);function ae(n,a,e,s,l,B){const x=w("hl-demo0"),o=w("demo-block"),F=w("hl-demo1"),h=w("hl-demo2"),c=w("hl-demo3"),m=w("hl-demo4"),C=w("hl-demo5"),d=w("hl-demo6"),t=w("hl-demo7"),p=w("hl-demo8"),r=w("hl-demo9"),E=w("hl-demo10"),g=w("hl-demo11"),v=w("hl-demo12"),y=w("hl-demo13"),f=w("hl-demo14"),k=w("hl-demo15"),A=w("hl-demo16"),I=w("hl-demo17"),V=w("hl-demo18"),S=w("right-nav");return O(),H(J,null,[u("section",null,[Q,W,_(o,{fs:""},{source:D(()=>[_(x)]),highlight:D(()=>[q]),_:1}),X,Z,_(o,{fs:""},{source:D(()=>[_(F)]),highlight:D(()=>[uu]),_:1}),eu,tu,_(o,{fs:""},{source:D(()=>[_(h)]),highlight:D(()=>[ou]),_:1}),lu,nu,_(o,{fs:""},{source:D(()=>[_(c)]),highlight:D(()=>[au]),_:1}),su,du,_(o,{fs:""},{source:D(()=>[_(m)]),highlight:D(()=>[iu]),default:D(()=>[ru]),_:1}),cu,pu,_(o,{fs:""},{source:D(()=>[_(C)]),highlight:D(()=>[Eu]),_:1}),mu,Fu,_(o,{fs:"",dark:""},{source:D(()=>[_(d)]),highlight:D(()=>[Du]),default:D(()=>[hu]),_:1}),Bu,Cu,_(o,{fs:""},{source:D(()=>[_(t)]),highlight:D(()=>[_u]),_:1}),bu,xu,_(o,{fs:""},{source:D(()=>[_(p)]),highlight:D(()=>[fu]),_:1}),gu,Au,_(o,{fs:""},{source:D(()=>[_(r)]),highlight:D(()=>[vu]),_:1}),wu,Nu,_(o,{fs:""},{source:D(()=>[_(E)]),highlight:D(()=>[ku]),_:1}),yu,Iu,_(o,{fs:""},{source:D(()=>[_(g)]),highlight:D(()=>[Su]),default:D(()=>[Vu]),_:1}),Tu,Lu,_(o,{fs:""},{source:D(()=>[_(v)]),highlight:D(()=>[zu]),default:D(()=>[ju]),_:1}),Ru,Uu,_(o,{fs:""},{source:D(()=>[_(y)]),highlight:D(()=>[Mu]),default:D(()=>[Gu]),_:1}),Pu,Ou,_(o,{fs:""},{source:D(()=>[_(f)]),highlight:D(()=>[Ju]),default:D(()=>[Hu]),_:1}),$u,Ku,_(o,{fs:""},{source:D(()=>[_(k)]),highlight:D(()=>[Qu]),default:D(()=>[Yu]),_:1}),Wu,qu,_(o,{fs:""},{source:D(()=>[_(A)]),highlight:D(()=>[Zu]),default:D(()=>[Xu]),_:1}),ue,_(o,{fs:""},{source:D(()=>[_(I)]),highlight:D(()=>[ee]),_:1}),te,_(o,{fs:""},{source:D(()=>[_(V)]),highlight:D(()=>[le]),default:D(()=>[oe]),_:1}),ne]),_(S)],64)}var Ee=K(Y,[["render",ae]]);export{Ee as default};
