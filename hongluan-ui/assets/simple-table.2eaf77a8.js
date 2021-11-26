var G=Object.defineProperty;var j=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var z=(n,l,e)=>l in n?G(n,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[l]=e,N=(n,l)=>{for(var e in l||(l={}))P.call(l,e)&&z(n,e,l[e]);if(j)for(var e of j(l))M.call(l,e)&&z(n,e,l[e]);return n};import{E as w,o as O,c as H,g as u,Q as b,H as D,Y as J,ay as x,_ as i,ax as $}from"./vue.7de0486a.js";import{_ as K,H as U}from"./index.6438634e.js";import"./hongluan.9c38f5fe.js";import"./highlight.e2508551.js";import"./hongluan-icons.14143dc3.js";const Y={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:n,createVNode:l,toDisplayString:e,createTextVNode:d,withCtx:a,createElementVNode:h,openBlock:f,createBlock:t}=x,m=d(e("")),B=h("a",null,"\u4FEE\u6539",-1);function p(o,E){const r=n("hl-checkbox"),c=n("hl-simple-table");return f(),t(c,{cols:o.cols,data:o.tableData,onRowClick:o.rowClicked,onCellClick:o.cellClicked},{firstCol:a(()=>[l(r,{modelValue:o.selectedAll,"onUpdate:modelValue":E[0]||(E[0]=g=>o.selectedAll=g),onChange:o.selectAll},null,8,["modelValue","onChange"])]),tableIndex:a(({row:g})=>[l(r,{modelValue:o.selectedRows,"onUpdate:modelValue":E[1]||(E[1]=v=>o.selectedRows=v),label:g.id,onChange:v=>o.selectRow(g.id)},{default:a(()=>[m]),_:2},1032,["modelValue","label","onChange"])]),handle:a(()=>[B]),_:1},8,["cols","data","onRowClick","onCellClick"])}const{defineComponent:F,ref:C}=x,s=F({setup(){const o=C(!1),E=C([]),r=C([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=C([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{selectedAll:o,selectedRows:E,tableData:r,cols:c,selectAll:()=>{o.value?(E.value.splice(0,E.value.length),E.value.push(...r.value.map(k=>k.id))):E.value.splice(0,E.value.length)},selectRow:()=>{o.value=E.value.length===r.value.length},rowClicked:(k,A,I)=>{console.log("rowClicked",k,A,I)},cellClicked:(k,A,I,V,T)=>{console.log("cellClicked",k,A,I,V,T)}}}});return N({render:p},s)}(),"hl-demo1":function(){const{renderList:n,Fragment:l,openBlock:e,createElementBlock:d,resolveComponent:a,createBlock:h,createCommentVNode:f,withCtx:t,createVNode:m,toDisplayString:B,createElementVNode:p}=x,F=p("a",null,"\u4FEE\u6539",-1);function C(r,c){const g=a("hl-option"),v=a("hl-select"),y=a("hl-simple-table");return e(),d(l,null,[m(v,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=_=>r.value=_),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:t(()=>[(e(!0),d(l,null,n(r.options,_=>(e(),d(l,null,[_.divider?(e(),h(g,{key:_.value,divider:""})):(e(),h(g,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),m(y,{cols:r.cols,data:r.tableData,border:r.value,padding:"0"},{tableIndex:t(({row:_})=>[p("span",null,B(_.rowIndex+1),1)]),handle:t(()=>[F]),_:1},8,["cols","data","border"])],64)}const{defineComponent:s,ref:o}=x,E=s({setup(){const r=o([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),c=o([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),g=o([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),v=o("borderless");return{tableData:r,cols:c,value:v,options:g}}});return N({render:C},E)}(),"hl-demo2":function(){const{renderList:n,Fragment:l,openBlock:e,createElementBlock:d,resolveComponent:a,createBlock:h,createCommentVNode:f,withCtx:t,createVNode:m,toDisplayString:B,createElementVNode:p,createTextVNode:F}=x,C=F("\u4FEE\u6539");function s(c,g){const v=a("hl-option"),y=a("hl-select"),_=a("hl-button"),k=a("hl-simple-table");return e(),d(l,null,[m(y,{modelValue:c.value,"onUpdate:modelValue":g[0]||(g[0]=A=>c.value=A),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145",class:"m-b-md"},{default:t(()=>[(e(!0),d(l,null,n(c.options,A=>(e(),d(l,null,[A.divider?(e(),h(v,{key:A.value,divider:""})):(e(),h(v,{key:A.value,label:A.label,value:A.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),m(y,{modelValue:c.value2,"onUpdate:modelValue":g[1]||(g[1]=A=>c.value2=A),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145",class:"m-l-md m-b-md"},{default:t(()=>[(e(!0),d(l,null,n(c.options,A=>(e(),d(l,null,[A.divider?(e(),h(v,{key:A.value,divider:""})):(e(),h(v,{key:A.value,label:A.label,value:A.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),m(k,{cols:c.cols,data:c.tableData,border:"border-x",padding:c.value,"cell-padding":c.value2},{tableIndex:t(({row:A})=>[p("span",null,B(A.rowIndex+1),1)]),handle:t(({row:A})=>[m(_,{type:"link"},{default:t(()=>[C]),_:1})]),_:1},8,["cols","data","padding","cell-padding"])],64)}const{defineComponent:o,ref:E}=x,r=o({setup(){const c=E([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),g=E([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),v=E([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),y=E("0"),_=E("0");return{tableData:c,cols:g,value:y,value2:_,options:v}}});return N({render:s},r)}(),"hl-demo3":function(){const{toDisplayString:n,createElementVNode:l,createTextVNode:e,resolveComponent:d,withCtx:a,createVNode:h,openBlock:f,createBlock:t}=x,m=e("\u4FEE\u6539");function B(s,o){const E=d("hl-button"),r=d("hl-simple-table");return f(),t(r,{cols:s.cols,data:s.tableData,hover:""},{tableIndex:a(({row:c})=>[l("span",null,n(c.rowIndex+1),1)]),handle:a(()=>[h(E,{type:"link"},{default:a(()=>[m]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:p,ref:F}=x,C=p({setup(){const s=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),o=F([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:s,cols:o}}});return N({render:B},C)}(),"hl-demo4":function(){const{toDisplayString:n,createElementVNode:l,createTextVNode:e,resolveComponent:d,withCtx:a,createVNode:h,openBlock:f,createBlock:t}=x,m=e("\u4FEE\u6539");function B(s,o){const E=d("hl-button"),r=d("hl-simple-table");return f(),t(r,{cols:s.cols,data:s.tableData,stripe:""},{tableIndex:a(({row:c})=>[l("span",null,n(c.rowIndex+1),1)]),handle:a(()=>[h(E,{type:"link"},{default:a(()=>[m]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:p,ref:F}=x,C=p({setup(){const s=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),o=F([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:s,cols:o}}});return N({render:B},C)}(),"hl-demo5":function(){const{renderList:n,Fragment:l,openBlock:e,createElementBlock:d,resolveComponent:a,createBlock:h,createCommentVNode:f,withCtx:t,createVNode:m,toDisplayString:B,createElementVNode:p}=x,F=p("a",null,"\u4FEE\u6539",-1);function C(r,c){const g=a("hl-option"),v=a("hl-select"),y=a("hl-simple-table");return e(),d(l,null,[m(v,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=_=>r.value=_),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:t(()=>[(e(!0),d(l,null,n(r.options,_=>(e(),d(l,null,[_.divider?(e(),h(g,{key:_.value,divider:""})):(e(),h(g,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),m(y,{cols:r.cols,data:r.tableData,size:r.value,class:"borderless-last"},{tableIndex:t(({row:_})=>[p("span",null,B(_.rowIndex+1),1)]),handle:t(()=>[F]),_:1},8,["cols","data","size"])],64)}const{defineComponent:s,ref:o}=x,E=s({setup(){const r=o([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),c=o([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),g=o([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),v=o("md");return{tableData:r,cols:c,value:v,options:g}}});return N({render:C},E)}(),"hl-demo6":function(){const{resolveDynamicComponent:n,openBlock:l,createBlock:e,resolveComponent:d,withCtx:a,createVNode:h,createElementVNode:f}=x,t=f("a",null,"\u4FEE\u6539",-1);function m(C,s){const o=d("hl-icon"),E=d("hl-simple-table");return l(),e(E,{cols:C.cols,data:C.tableData,list:"","gap-y":"var(--xs)"},{tableIndex:a(({row:r})=>[h(o,{type:"danger",fill:"",radius:""},{default:a(()=>[(l(),e(n("Two"+r.icon)))]),_:2},1024)]),handle:a(()=>[t]),_:1},8,["cols","data"])}const{defineComponent:B,ref:p}=x,F=B({setup(){const C=p([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",icon:"Briefcase"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",icon:"ChartPie"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",icon:"Archive"}]),s=p([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:C,cols:s}}});return N({render:m},F)}(),"hl-demo7":function(){const{toDisplayString:n,createElementVNode:l,createTextVNode:e,resolveComponent:d,withCtx:a,createVNode:h,openBlock:f,createElementBlock:t}=x,m={class:"table-scroll",style:{height:"200px"}},B=e("\u4FEE\u6539");function p(o,E){const r=d("hl-button"),c=d("hl-simple-table");return f(),t("div",m,[h(c,{cols:o.cols,data:o.tableData,border:"border-x","fixed-header":""},{tableIndex:a(({row:g})=>[l("span",null,n(g.rowIndex+1),1)]),handle:a(()=>[h(r,{type:"link"},{default:a(()=>[B]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:F,ref:C}=x,s=F({setup(){const o=C([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),E=C([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:o,cols:E}}});return N({render:p},s)}(),"hl-demo8":function(){const{toDisplayString:n,createElementVNode:l,createTextVNode:e,resolveComponent:d,withCtx:a,createVNode:h,openBlock:f,createElementBlock:t}=x,m={class:"table-scroll"},B=e("\u4FEE\u6539");function p(o,E){const r=d("hl-button"),c=d("hl-simple-table");return f(),t("div",m,[h(c,{cols:o.cols,data:o.tableData,border:"border-x"},{tableIndex:a(({row:g})=>[l("span",null,n(g.rowIndex+1),1)]),handle:a(()=>[h(r,{type:"link"},{default:a(()=>[B]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:F,ref:C}=x,s=F({setup(){const o=C([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),E=C([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px",fixed:"left"},{title:"\u6027\u522B",prop:"sex",width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"100px"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return{tableData:o,cols:E}}});return N({render:p},s)}(),"hl-demo9":function(){const{toDisplayString:n,createElementVNode:l,createTextVNode:e,resolveComponent:d,withCtx:a,createVNode:h,openBlock:f,createBlock:t}=x,m=e("\u4FEE\u6539");function B(s,o){const E=d("hl-button"),r=d("hl-simple-table"),c=d("hl-scrollbar");return f(),t(c,{height:"200px"},{default:a(()=>[h(r,{cols:s.cols,data:s.tableData,border:"border-x","fixed-header":""},{tableIndex:a(({row:g})=>[l("span",null,n(g.rowIndex+1),1)]),handle:a(()=>[h(E,{type:"link"},{default:a(()=>[m]),_:1})]),_:1},8,["cols","data"])]),_:1})}const{defineComponent:p,ref:F}=x,C=p({setup(){const s=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),o=F([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px"},{title:"\u6027\u522B",prop:"sex",width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"500px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,fixed:"right"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return{tableData:s,cols:o}}});return N({render:B},C)}(),"hl-demo10":function(){const{toDisplayString:n,createElementVNode:l,createTextVNode:e,resolveComponent:d,withCtx:a,createVNode:h,openBlock:f,createBlock:t}=x,m=e("\u4FEE\u6539");function B(s,o){const E=d("hl-button"),r=d("hl-simple-table");return f(),t(r,{cols:s.cols,data:s.tableData,hover:"","show-header":!1},{tableIndex:a(({row:c})=>[l("span",null,n(c.rowIndex+1),1)]),handle:a(()=>[h(E,{type:"link"},{default:a(()=>[m]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:p,ref:F}=x,C=p({setup(){const s=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),o=F([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:s,cols:o}}});return N({render:B},C)}(),"hl-demo11":function(){const{resolveComponent:n,createVNode:l,createTextVNode:e,withCtx:d,openBlock:a,createBlock:h}=x,f=e(" \u81EA\u5B9A\u4E49\u5217 ");function t(s,o){const E=n("sortable-icon"),r=n("hl-simple-table");return a(),h(r,{cols:s.cols,data:s.tableData,onSortChange:s.sortChange},{index:d(()=>[f,l(E,{sortable:"",onSortChange:o[0]||(o[0]=c=>s.sortChange("id",c))})]),_:1},8,["cols","data","onSortChange"])}const{defineComponent:m,ref:B}=x,{HlSimpleTable:p}=U,{SortableIcon:F}=p,C=m({components:{SortableIcon:F},setup(){const s=[{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}],o=B(JSON.parse(JSON.stringify(s))),E=B([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0},{title:"\u6027\u522B",prop:"sex",sortable:!1},{title:"\u5355\u4F4D",prop:"org",sortable:"descending"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]);return{tableData:o,cols:E,sortChange:(c,g)=>{console.log("soring...",c,g),g?o.value.sort((v,y)=>{const _=String(v[c]).localeCompare(String(y[c]));return g==="ascending"?_:_*-1}):o.value=JSON.parse(JSON.stringify(s))}}}});return N({render:t},C)}(),"hl-demo12":function(){const{createTextVNode:n,resolveComponent:l,withCtx:e,createVNode:d,openBlock:a,createBlock:h}=x,f=n("\u6761\u4EF61"),t=n("\u6761\u4EF62"),m=n("\u6761\u4EF63"),B=n("\u786E\u5B9A"),p=n(" \u81EA\u5B9A\u4E49\u5217 "),F=n("\u6761\u4EF61"),C=n("\u6761\u4EF62"),s=n("\u6761\u4EF63"),o=n("\u786E\u5B9A");function E(_,k){const A=l("hl-checkbox"),I=l("hl-checkbox-group"),V=l("hl-button"),T=l("filter-icon"),R=l("hl-simple-table");return a(),h(R,{cols:_.cols,data:_.tableData},{filterSlot:e(({close:S})=>[d(I,{modelValue:_.selectedItems,"onUpdate:modelValue":k[0]||(k[0]=L=>_.selectedItems=L),dir:"vertical",gap:"var(--md)",block:""},{default:e(()=>[d(A,{label:"1"},{default:e(()=>[f]),_:1}),d(A,{label:"2"},{default:e(()=>[t]),_:1}),d(A,{label:"3"},{default:e(()=>[m]),_:1})]),_:1},8,["modelValue"]),d(V,{type:"primary",size:"sm",class:"m-t-md",onClick:S},{default:e(()=>[B]),_:2},1032,["onClick"])]),index:e(()=>[p,d(T,{placement:"right"},{default:e(({close:S})=>[d(I,{modelValue:_.selectedItems,"onUpdate:modelValue":k[1]||(k[1]=L=>_.selectedItems=L),dir:"vertical",gap:"var(--md)",block:""},{default:e(()=>[d(A,{label:"1"},{default:e(()=>[F]),_:1}),d(A,{label:"2"},{default:e(()=>[C]),_:1}),d(A,{label:"3"},{default:e(()=>[s]),_:1})]),_:1},8,["modelValue"]),d(V,{type:"primary",size:"sm",class:"m-t-md",onClick:S},{default:e(()=>[o]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:r,ref:c}=x,{HlSimpleTable:g}=U,{FilterIcon:v}=g,y=r({components:{FilterIcon:v},setup(){const _=c([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),k=c([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),A=c([]);return{tableData:_,cols:k,selectedItems:A}}});return N({render:E},y)}(),"hl-demo13":function(){const{toDisplayString:n,createElementVNode:l,createTextVNode:e,resolveComponent:d,withCtx:a,openBlock:h,createBlock:f}=x,t=["onClick"],m=l("p",null,"\u624B\u5DE5\u5C55\u5F00\u6570\u636E",-1);function B(s,o){const E=d("hl-simple-table");return h(),f(E,{ref:"tableRef",cols:s.cols,data:s.tableData,"expand-row-keys":["1index","2nameExpand"]},{index:a(({row:r})=>[l("p",null,n(r.org)+" / "+n(r.des),1)]),name:a(({row:r})=>[l("a",{href:"javascript:;",onClick:c=>s.expand(r)},"\u70B9\u6211\u5C55\u5F00",8,t),e(" / "+n(r.name),1)]),nameExpand:a(()=>[m]),des:a(({row:r})=>[l("p",null,n(r.sex)+" / "+n(r.des),1)]),_:1},8,["cols","data"])}const{defineComponent:p,ref:F}=x,C=p({setup(){const s=F(),o=F([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),E=F([{title:"#",prop:"id",expand:{slotName:"index",hideLabel:!0}},{title:"\u7528\u6237\u540D",prop:"name",slotName:"name",expand:{slotName:"nameExpand"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",expand:{slotName:"des"},tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableRef:s,tableData:o,cols:E,expand:c=>{s.value.toggleExpand(c.id,"nameExpand")}}}});return N({render:B},C)}(),"hl-demo14":function(){const{resolveComponent:n,createVNode:l,Fragment:e,openBlock:d,createElementBlock:a}=x;function h(B,p){const F=n("hl-simple-table");return d(),a(e,null,[l(F,{cols:B.cols,data:B.tableData,border:"bordered","span-method":B.arraySpanMethod},null,8,["cols","data","span-method"]),l(F,{cols:B.cols,data:B.tableData,border:"bordered",class:"m-t-md","span-method":B.objectSpanMethod},null,8,["cols","data","span-method"])],64)}const{defineComponent:f,ref:t}=x,m=f({setup(){const B=t([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),p=t([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return{tableData:B,cols:p,arraySpanMethod:({rowIndex:s,columnIndex:o})=>{if(s%2==0){if(o===0)return[1,2];if(o===1)return[0,0]}},objectSpanMethod:({rowIndex:s,columnIndex:o})=>{if(o===0)return s%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}}});return N({render:h},m)}(),"hl-demo15":function(){const{createElementVNode:n,resolveComponent:l,withCtx:e,openBlock:d,createBlock:a}=x,h=n("a",null,"\u4FEE\u6539",-1);function f(p,F){const C=l("hl-simple-table");return d(),a(C,{cols:p.cols,data:p.tableData,border:"bordered"},{handle:e(()=>[h]),_:1},8,["cols","data"])}const{defineComponent:t,ref:m}=x,B=t({setup(){const p=m([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),F=m([{title:"\u65E5\u671F",prop:"date"},{title:"\u914D\u9001\u4FE1\u606F",prop:"delivery",children:[{title:"\u59D3\u540D",prop:"name"},{title:"\u5730\u5740\u4FE1\u606F",prop:"address",children:[{title:"\u7701/\u5E02",prop:"state"},{title:"\u57CE\u5E02",prop:"city"},{title:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"zip",slotName:"handle"}]}]}]);return{tableData:p,cols:F}}});return N({render:f},B)}(),"hl-demo16":function(){const{createElementVNode:n,resolveComponent:l,withCtx:e,openBlock:d,createBlock:a}=x,h=n("tr",null,[n("td",{colspan:"2"},[n("strong",null,"\u5408\u8BA1")]),n("td",null,"\uFFE53232"),n("td",null,"\uFFE51212.22"),n("td",null,"\uFFE590.22")],-1);function f(p,F){const C=l("hl-simple-table");return d(),a(C,{cols:p.cols,data:p.tableData,border:"bordered"},{foot:e(()=>[h]),_:1},8,["cols","data"])}const{defineComponent:t,ref:m}=x,B=t({setup(){const p=m([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),F=m([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return{tableData:p,cols:F}}});return N({render:f},B)}(),"hl-demo17":function(){const{resolveComponent:n,openBlock:l,createBlock:e}=x;function d(t,m){const B=n("hl-simple-table");return l(),e(B,{cols:t.cols,border:"border-x",data:t.tableData},null,8,["cols","data"])}const{defineComponent:a,ref:h}=x,f=a({setup(){const t=h([]),m=h([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return{tableData:t,cols:m}}});return N({render:d},f)}(),"hl-demo18":function(){const{createElementVNode:n,resolveComponent:l,withCtx:e,openBlock:d,createBlock:a}=x,h=n("p",{style:{"text-align":"center"}},"\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~",-1);function f(p,F){const C=l("hl-simple-table");return d(),a(C,{cols:p.cols,border:"border-x",data:p.tableData},{unknown:e(()=>[h]),_:1},8,["cols","data"])}const{defineComponent:t,ref:m}=x,B=t({setup(){const p=m(null),F=m([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return{tableData:p,cols:F}}});return N({render:f},B)}()}},Q=u("h1",null,"SimpleTable \u7B80\u5355\u8868\u683C",-1),W=u("p",null,"SimpleTable \u662F\u4E00\u6B3E\u975E\u5E38\u8F7B\u91CF\u7684\u8868\u683C\u7EC4\u4EF6\u3002",-1),q=u("pre",null,[u("code",{class:"html"},` <template>
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
        des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
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
      { title: '\u5355\u4F4D', prop: 'org', align: 'center' },
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
`)],-1),eu=u("h2",{id:"jian-ju-she-zhi"},[u("a",{class:"header-anchor",href:"#jian-ju-she-zhi"}),i(" \u95F4\u8DDD\u8BBE\u7F6E")],-1),tu=u("p",null,[u("code",null,"padding"),i(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u4E0D\u540C\u7684\u95F4\u8DDD\u5C3A\u5BF8\uFF0C \u540C\u65F6"),u("code",null,"td-padding"),i(" \u53EF\u8BBE\u7F6ETD\u7684\u95F4\u8DDD\u5C3A\u5BF8")],-1),ou=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145" class="m-b-md">
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

  <hl-select v-model="value2" clearable placeholder="\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145" class="m-l-md m-b-md">
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
    :cell-padding="value2"
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
    const value2 = ref('0')
    return {
      tableData,
      cols,
      value,
      value2,
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
`)],-1),du=u("h2",{id:"tiao-wen-yang-shi"},[u("a",{class:"header-anchor",href:"#tiao-wen-yang-shi"}),i(" \u6761\u7EB9\u6837\u5F0F")],-1),su=u("p",null,[u("code",null,"stripe"),i("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u6761\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),ru=u("div",null,[u("p",null,[i("stripe \u8FD8\u63A5\u6536 "),u("code",null,"even"),i(" \u6216\u8005 "),u("code",null,"odd"),i(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),u("code",null,"odd"),i(" \u5947\u6570")])],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),mu=u("h2",{id:"lie-biao-yang-shi"},[u("a",{class:"header-anchor",href:"#lie-biao-yang-shi"}),i(" \u5217\u8868\u6837\u5F0F")],-1),Fu=u("p",null,[u("code",null,"list"),i(" \u53EF\u4EE5\u5C06\u4F20\u7EDF\u7684\u8868\u683C\u5448\u73B0\u6210\u5217\u8868\u7684\u72B6\u6001\u3002")],-1),hu=u("div",null,[u("p",null,[i("\u5217\u8868\u6837\u5F0F\u4F1A\u4E3A\u6BCF\u4E00\u884C\u8868\u683C\u52A0\u4E0A\u5706\u89D2\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u95F4\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),u("code",null,'gap="var(--xs)"')])],-1),Bu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Du=u("h2",{id:"gu-ding-biao-tou"},[u("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),i(" \u56FA\u5B9A\u8868\u5934")],-1),Cu=u("p",null,[i("\u4E3A SimpleTable \u7EC4\u4EF6\u52A0\u4E0A "),u("code",null,"fixed-header"),i(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8868\u5934\u56FA\u5B9A\u5728\u9876\u7AEF\u3002")],-1),bu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),_u=u("h2",{id:"gu-ding-lie"},[u("a",{class:"header-anchor",href:"#gu-ding-lie"}),i(" \u56FA\u5B9A\u5217")],-1),xu=u("p",null,[i("\u4E3A\u67D0\u4E00\u5217\u589E\u52A0 "),u("code",null,"fixed"),i(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5B83\u56FA\u5B9A\uFF0C\u540C\u65F6\u4F60\u53EF\u4EE5\u4F20\u9012 "),u("code",null,"left"),i(),u("code",null,"right"),i(" \u6765\u63A7\u5236\u5B83\u56FA\u5B9A\u5728\u4EC0\u4E48\u5730\u65B9\u3002\u4F8B\u5982 "),u("code",null,"fixed: 'left'")],-1),fu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),yu=u("h2",{id:"pai-xu"},[u("a",{class:"header-anchor",href:"#pai-xu"}),i(" \u6392\u5E8F")],-1),Iu=u("p",null,"\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u70B9\u51FB\u76F8\u540C\u7684\u6392\u5E8F\u56FE\u6807\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F\u3002\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u8BF7\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA SortableIcon \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770B\u4E0B\u9762\u81EA\u5B9A\u4E49\u5217\u5B9E\u73B0\u3002",-1),Vu=u("div",null,[u("p",null,[i("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6Esortable\u5C5E\u6027\uFF0C\u503C\u4E3A\uFF1A"),u("code",null,"true / false / 'descending' / 'ascending'"),i(" \uFF0C\u5E76\u901A\u8FC7\u76D1\u542Csort-change\u4E8B\u4EF6\u5904\u7406\u6570\u636E\u6392\u5E8F")])],-1),Tu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Su=u("h2",{id:"shai-xuan"},[u("a",{class:"header-anchor",href:"#shai-xuan"}),i(" \u7B5B\u9009")],-1),Lu=u("p",null,"\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u8BF7\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA FilterIcon \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770B\u4E0B\u9762\u81EA\u5B9A\u4E49\u5217\u5B9E\u73B0\u3002",-1),ju=u("div",null,[u("p",null,[i("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6E "),u("code",null,"filter"),i(" \u5BF9\u8C61\uFF0C\u63D0\u4F9B "),u("code",null,"slotName"),i("\uFF08\u5FC5\u9009\uFF09\u3001"),u("code",null,"placement"),i("\uFF08\u53C2\u8003Popover\u6587\u6863\uFF09\u3001"),u("code",null,"popperClass"),i(" \u5C5E\u6027\u3002slot\u4E2D\u63D0\u4F9B "),u("code",null,"close"),i(" \u65B9\u6CD5\u7528\u6765\u624B\u5DE5\u5173\u95ED\u5F39\u51FA\u6846\u3002")])],-1),zu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Uu=u("h2",{id:"zhan-kai-xing"},[u("a",{class:"header-anchor",href:"#zhan-kai-xing"}),i(" \u5C55\u5F00\u884C")],-1),Ru=u("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 SimpleTable \u5C55\u5F00\u884C\u529F\u80FD\u3002\u53EF\u4EE5\u5B9A\u4E49\u591A\u5217\u540C\u65F6\u5C55\u5F00\u3002",-1),Gu=u("div",null,[u("p",null,[i("\u901A\u8FC7\u8BBE\u7F6E expand \u5BF9\u8C61 \u548C slot \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\u3002expand\u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A"),u("code",null,"slotName"),i("\uFF0C"),u("code",null,"hideLabel"),i("\uFF0ChideLabel\u9ED8\u8BA4\u4E3Afalse")])],-1),Pu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Mu=u("h2",{id:"he-bing-xing-huo-lie"},[u("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),i(" \u5408\u5E76\u884C\u6216\u5217")],-1),Ou=u("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),Hu=u("div",null,[u("p",null,"\u901A\u8FC7\u7ED9 table \u4F20\u5165span-method\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C row\u3001\u5F53\u524D\u5217 column\u3001\u5F53\u524D\u884C\u53F7 rowIndex\u3001\u5F53\u524D\u5217\u53F7 columnIndex \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 rowspan\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 colspan\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A rowspan \u548C colspan \u7684\u5BF9\u8C61\u3002")],-1),Ju=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),ne=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 SimpleTable \u7684\u6E32\u67D3\u3002<em><strong>\u5982\u679C\u8868\u683C\u6570\u636E\u6807\u8BC6\u7B26\u4E0D\u662Fid\u5B57\u6BB5\uFF0C\u8BF7\u4E00\u5B9A\u8981\u8BBE\u7F6E\u6B64\u503C</strong></em></td><td>string / function(row): string</td><td>-</td><td>id</td></tr><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>td-padding</td><td>\u8BBE\u7F6ETd\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>auto-height</td><td>\u4F7FTh\u548CTd\u7684\u9AD8\u5EA6\u53D8\u4E3Aauto</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>expand-row-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u884C\uFF0C\u9700\u8981\u7528\u884Cid+slotName\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26</td><td>array</td><td>-</td><td>-</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>-</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string</td><td>left/right</td><td>-</td></tr><tr><td>slotName</td><td>\u5217 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A row\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr><tr><td>filter</td><td>\u5217\u7B5B\u9009\u8BBE\u7F6E</td><td>object{ slotName: string, placement: string, popperClass: string }</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E</td><td>object{ slotName: string, hideLabel: boolean }</td><td>-</td><td>-</td></tr><tr><td>children</td><td>\u5B50\u5217\u4FE1\u606F</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, rowkey, slotName</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleExpand</td><td>\u5C55\u5F00/\u6298\u53E0\u884C\u3002\u7531\u4E8E\u6BCF\u884C\u53EF\u80FD\u6709\u591A\u4E2A\u5C55\u5F00\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u9012\u9700\u8981\u5C55\u5F00\u7684slotName</td><td>rowKey, slotName</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr><tr><td>foot</td><td>\u8868\u5C3E</td></tr></tbody></table>',10);function ae(n,l,e,d,a,h){const f=w("hl-demo0"),t=w("demo-block"),m=w("hl-demo1"),B=w("hl-demo2"),p=w("hl-demo3"),F=w("hl-demo4"),C=w("hl-demo5"),s=w("hl-demo6"),o=w("hl-demo7"),E=w("hl-demo8"),r=w("hl-demo9"),c=w("hl-demo10"),g=w("hl-demo11"),v=w("hl-demo12"),y=w("hl-demo13"),_=w("hl-demo14"),k=w("hl-demo15"),A=w("hl-demo16"),I=w("hl-demo17"),V=w("hl-demo18"),T=w("right-nav");return O(),H(J,null,[u("section",null,[Q,W,b(t,{fs:""},{source:D(()=>[b(f)]),highlight:D(()=>[q]),_:1}),X,Z,b(t,{fs:""},{source:D(()=>[b(m)]),highlight:D(()=>[uu]),_:1}),eu,tu,b(t,{fs:""},{source:D(()=>[b(B)]),highlight:D(()=>[ou]),_:1}),lu,nu,b(t,{fs:""},{source:D(()=>[b(p)]),highlight:D(()=>[au]),_:1}),du,su,b(t,{fs:""},{source:D(()=>[b(F)]),highlight:D(()=>[iu]),default:D(()=>[ru]),_:1}),cu,pu,b(t,{fs:""},{source:D(()=>[b(C)]),highlight:D(()=>[Eu]),_:1}),mu,Fu,b(t,{fs:"",dark:""},{source:D(()=>[b(s)]),highlight:D(()=>[Bu]),default:D(()=>[hu]),_:1}),Du,Cu,b(t,{fs:""},{source:D(()=>[b(o)]),highlight:D(()=>[bu]),_:1}),_u,xu,b(t,{fs:""},{source:D(()=>[b(E)]),highlight:D(()=>[fu]),_:1}),gu,Au,b(t,{fs:""},{source:D(()=>[b(r)]),highlight:D(()=>[vu]),_:1}),wu,Nu,b(t,{fs:""},{source:D(()=>[b(c)]),highlight:D(()=>[ku]),_:1}),yu,Iu,b(t,{fs:""},{source:D(()=>[b(g)]),highlight:D(()=>[Tu]),default:D(()=>[Vu]),_:1}),Su,Lu,b(t,{fs:""},{source:D(()=>[b(v)]),highlight:D(()=>[zu]),default:D(()=>[ju]),_:1}),Uu,Ru,b(t,{fs:""},{source:D(()=>[b(y)]),highlight:D(()=>[Pu]),default:D(()=>[Gu]),_:1}),Mu,Ou,b(t,{fs:""},{source:D(()=>[b(_)]),highlight:D(()=>[Ju]),default:D(()=>[Hu]),_:1}),$u,Ku,b(t,{fs:""},{source:D(()=>[b(k)]),highlight:D(()=>[Qu]),default:D(()=>[Yu]),_:1}),Wu,qu,b(t,{fs:""},{source:D(()=>[b(A)]),highlight:D(()=>[Zu]),default:D(()=>[Xu]),_:1}),ue,b(t,{fs:""},{source:D(()=>[b(I)]),highlight:D(()=>[ee]),_:1}),te,b(t,{fs:""},{source:D(()=>[b(V)]),highlight:D(()=>[le]),default:D(()=>[oe]),_:1}),ne]),b(T)],64)}var Ee=K(Y,[["render",ae]]);export{Ee as default};
