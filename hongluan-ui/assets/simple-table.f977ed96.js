var U=Object.defineProperty;var I=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var S=(c,n,o)=>n in c?U(c,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[n]=o,N=(c,n)=>{for(var o in n||(n={}))j.call(n,o)&&S(c,o,n[o]);if(I)for(var o of I(n))P.call(n,o)&&S(c,o,n[o]);return c};import{M as A,o as J,C as O,D as e,v as b,Q as B,Y as z,av as x,_ as D,au as H}from"./vue.53c5f407.js";import{_ as L,H as $}from"./index.4c5900db.js";import"./hongluan.975e8b35.js";import"./highlight.e2508551.js";import"./hongluan-icons.1a8d0b03.js";const Y={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:c,createVNode:n,toDisplayString:o,createTextVNode:i,withCtx:t,createElementVNode:E,openBlock:f,createBlock:l}=x,F=i(o("")),C=E("a",null,"\u4FEE\u6539",-1);function _(u,d){const a=c("hl-checkbox"),r=c("hl-simple-table");return f(),l(r,{cols:u.cols,data:u.tableData,"remove-thead":"",onRowClick:u.rowClicked,onCellClick:u.cellClicked},{firstCol:t(({col:m})=>[n(a,{modelValue:u.selectedAll,"onUpdate:modelValue":d[0]||(d[0]=v=>u.selectedAll=v),onChange:u.selectAll},null,8,["modelValue","onChange"])]),tableIndex:t(({row:m})=>[n(a,{modelValue:u.selectedRows,"onUpdate:modelValue":d[1]||(d[1]=v=>u.selectedRows=v),label:m.id,onChange:v=>u.selectRow(m.id)},{default:t(()=>[F]),_:2},1032,["modelValue","label","onChange"])]),handle:t(({row:m})=>[C]),_:1},8,["cols","data","onRowClick","onCellClick"])}const{defineComponent:h,ref:p}=x,s=h({setup(){const u=p(!1),d=p([]),a=p([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),r=p([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{selectedAll:u,selectedRows:d,tableData:a,cols:r,selectAll:()=>{u.value?(d.value.splice(0,d.value.length),d.value.push(...a.value.map(V=>V.id))):d.value.splice(0,d.value.length)},selectRow:()=>{u.value=d.value.length===a.value.length},rowClicked:(V,w,y)=>{console.log("rowClicked",V,w,y)},cellClicked:(V,w,y,T,R)=>{console.log("cellClicked",V,w,y,T,R)}}}});return N({render:_},s)}(),"hl-demo1":function(){const{renderList:c,Fragment:n,openBlock:o,createElementBlock:i,resolveComponent:t,createBlock:E,createCommentVNode:f,withCtx:l,createVNode:F,toDisplayString:C,createElementVNode:_}=x,h=_("a",null,"\u4FEE\u6539",-1);function p(a,r){const m=t("hl-option"),v=t("hl-select"),k=t("hl-simple-table");return o(),i(n,null,[F(v,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=g=>a.value=g),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:l(()=>[(o(!0),i(n,null,c(a.options,g=>(o(),i(n,null,[g.divider?(o(),E(m,{key:g.value,divider:""})):(o(),E(m,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(k,{cols:a.cols,data:a.tableData,border:a.value,padding:"0"},{tableIndex:l(({row:g})=>[_("span",null,C(g.rowIndex+1),1)]),handle:l(()=>[h]),_:1},8,["cols","data","border"])],64)}const{defineComponent:s,ref:u}=x,d=s({setup(){const a=u([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),r=u([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),m=u([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),v=u("borderless");return{tableData:a,cols:r,value:v,options:m}}});return N({render:p},d)}(),"hl-demo2":function(){const{renderList:c,Fragment:n,openBlock:o,createElementBlock:i,resolveComponent:t,createBlock:E,createCommentVNode:f,withCtx:l,createVNode:F,toDisplayString:C,createElementVNode:_,createTextVNode:h}=x,p=h("\u4FEE\u6539");function s(r,m){const v=t("hl-option"),k=t("hl-select"),g=t("hl-button"),V=t("hl-simple-table");return o(),i(n,null,[F(k,{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=w=>r.value=w),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:l(()=>[(o(!0),i(n,null,c(r.options,w=>(o(),i(n,null,[w.divider?(o(),E(v,{key:w.value,divider:""})):(o(),E(v,{key:w.value,label:w.label,value:w.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(V,{cols:r.cols,data:r.tableData,border:"border-x",padding:r.value},{tableIndex:l(({row:w})=>[_("span",null,C(w.rowIndex+1),1)]),handle:l(({row:w})=>[F(g,{type:"link"},{default:l(()=>[p]),_:1})]),_:1},8,["cols","data","padding"])],64)}const{defineComponent:u,ref:d}=x,a=u({setup(){const r=d([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),m=d([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),v=d([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),k=d("0");return{tableData:r,cols:m,value:k,options:v}}});return N({render:s},a)}(),"hl-demo3":function(){const{toDisplayString:c,createElementVNode:n,createTextVNode:o,resolveComponent:i,withCtx:t,createVNode:E,openBlock:f,createBlock:l}=x,F=o("\u4FEE\u6539");function C(s,u){const d=i("hl-button"),a=i("hl-simple-table");return f(),l(a,{cols:s.cols,data:s.tableData,hover:""},{tableIndex:t(({row:r})=>[n("span",null,c(r.rowIndex+1),1)]),handle:t(()=>[E(d,{type:"link"},{default:t(()=>[F]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:_,ref:h}=x,p=_({setup(){const s=h([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=h([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:s,cols:u}}});return N({render:C},p)}(),"hl-demo4":function(){const{toDisplayString:c,createElementVNode:n,createTextVNode:o,resolveComponent:i,withCtx:t,createVNode:E,openBlock:f,createBlock:l}=x,F=o("\u4FEE\u6539");function C(s,u){const d=i("hl-button"),a=i("hl-simple-table");return f(),l(a,{cols:s.cols,data:s.tableData,stripe:""},{tableIndex:t(({row:r})=>[n("span",null,c(r.rowIndex+1),1)]),handle:t(()=>[E(d,{type:"link"},{default:t(()=>[F]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:_,ref:h}=x,p=_({setup(){const s=h([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=h([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:s,cols:u}}});return N({render:C},p)}(),"hl-demo5":function(){const{renderList:c,Fragment:n,openBlock:o,createElementBlock:i,resolveComponent:t,createBlock:E,createCommentVNode:f,withCtx:l,createVNode:F,toDisplayString:C,createElementVNode:_}=x,h=_("a",null,"\u4FEE\u6539",-1);function p(a,r){const m=t("hl-option"),v=t("hl-select"),k=t("hl-simple-table");return o(),i(n,null,[F(v,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=g=>a.value=g),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:l(()=>[(o(!0),i(n,null,c(a.options,g=>(o(),i(n,null,[g.divider?(o(),E(m,{key:g.value,divider:""})):(o(),E(m,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),F(k,{cols:a.cols,data:a.tableData,size:a.value,class:"borderless-last"},{tableIndex:l(({row:g})=>[_("span",null,C(g.rowIndex+1),1)]),handle:l(()=>[h]),_:1},8,["cols","data","size"])],64)}const{defineComponent:s,ref:u}=x,d=s({setup(){const a=u([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),r=u([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),m=u([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),v=u("md");return{tableData:a,cols:r,value:v,options:m}}});return N({render:p},d)}(),"hl-demo6":function(){const{resolveDynamicComponent:c,openBlock:n,createBlock:o,resolveComponent:i,withCtx:t,createVNode:E,createElementVNode:f}=x,l=f("a",null,"\u4FEE\u6539",-1);function F(p,s){const u=i("hl-icon"),d=i("hl-simple-table");return n(),o(d,{cols:p.cols,data:p.tableData,list:"","gap-y":"var(--xs)"},{tableIndex:t(({row:a})=>[E(u,{type:"danger",fill:"",radius:""},{default:t(()=>[(n(),o(c("Two"+a.icon)))]),_:2},1024)]),handle:t(()=>[l]),_:1},8,["cols","data"])}const{defineComponent:C,ref:_}=x,h=C({setup(){const p=_([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",icon:"Briefcase"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",icon:"ChartPie"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",icon:"Archive"}]),s=_([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:p,cols:s}}});return N({render:F},h)}(),"hl-demo7":function(){const{toDisplayString:c,createElementVNode:n,createTextVNode:o,resolveComponent:i,withCtx:t,createVNode:E,openBlock:f,createElementBlock:l}=x,F={class:"table-scroll",style:{height:"200px"}},C=o("\u4FEE\u6539");function _(u,d){const a=i("hl-button"),r=i("hl-simple-table");return f(),l("div",F,[E(r,{cols:u.cols,data:u.tableData,border:"border-x","fixed-header":""},{tableIndex:t(({row:m})=>[n("span",null,c(m.rowIndex+1),1)]),handle:t(()=>[E(a,{type:"link"},{default:t(()=>[C]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:h,ref:p}=x,s=h({setup(){const u=p([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),d=p([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:u,cols:d}}});return N({render:_},s)}(),"hl-demo8":function(){const{toDisplayString:c,createElementVNode:n,createTextVNode:o,resolveComponent:i,withCtx:t,createVNode:E,openBlock:f,createElementBlock:l}=x,F={class:"table-scroll"},C=o("\u4FEE\u6539");function _(u,d){const a=i("hl-button"),r=i("hl-simple-table");return f(),l("div",F,[E(r,{cols:u.cols,data:u.tableData,border:"border-x"},{tableIndex:t(({row:m})=>[n("span",null,c(m.rowIndex+1),1)]),handle:t(()=>[E(a,{type:"link"},{default:t(()=>[C]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:h,ref:p}=x,s=h({setup(){const u=p([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),d=p([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px",fixed:"left"},{title:"\u6027\u522B",prop:"sex",width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"100px"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return{tableData:u,cols:d}}});return N({render:_},s)}(),"hl-demo9":function(){const{toDisplayString:c,createElementVNode:n,createTextVNode:o,resolveComponent:i,withCtx:t,createVNode:E,openBlock:f,createBlock:l}=x,F=o("\u4FEE\u6539");function C(s,u){const d=i("hl-button"),a=i("hl-simple-table"),r=i("hl-scrollbar");return f(),l(r,{height:"200px"},{default:t(()=>[E(a,{cols:s.cols,data:s.tableData,border:"border-x","fixed-header":""},{tableIndex:t(({row:m})=>[n("span",null,c(m.rowIndex+1),1)]),handle:t(()=>[E(d,{type:"link"},{default:t(()=>[F]),_:1})]),_:1},8,["cols","data"])]),_:1})}const{defineComponent:_,ref:h}=x,p=_({setup(){const s=h([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=h([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px"},{title:"\u6027\u522B",prop:"sex",width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"500px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,fixed:"right"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return{tableData:s,cols:u}}});return N({render:C},p)}(),"hl-demo10":function(){const{toDisplayString:c,createElementVNode:n,createTextVNode:o,resolveComponent:i,withCtx:t,createVNode:E,openBlock:f,createBlock:l}=x,F=o("\u4FEE\u6539");function C(s,u){const d=i("hl-button"),a=i("hl-simple-table");return f(),l(a,{cols:s.cols,data:s.tableData,hover:"","show-header":!1},{tableIndex:t(({row:r})=>[n("span",null,c(r.rowIndex+1),1)]),handle:t(()=>[E(d,{type:"link"},{default:t(()=>[F]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:_,ref:h}=x,p=_({setup(){const s=h([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),u=h([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return{tableData:s,cols:u}}});return N({render:C},p)}(),"hl-demo11":function(){const{resolveComponent:c,createVNode:n,createTextVNode:o,withCtx:i,openBlock:t,createBlock:E}=x,f=o(" \u81EA\u5B9A\u4E49\u5217 ");function l(s,u){const d=c("sortable-icon"),a=c("hl-simple-table");return t(),E(a,{cols:s.cols,data:s.tableData,"remove-thead":"",onSortChange:s.sortChange},{index:i(()=>[f,n(d,{sortable:"xxxxxx",onSortChange:u[0]||(u[0]=r=>s.sortChange("id",r))})]),_:1},8,["cols","data","onSortChange"])}const{defineComponent:F,ref:C}=x,{HlSimpleTable:_}=$,{SortableIcon:h}=_,p=F({components:{SortableIcon:h},setup(){const s=[{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}],u=C(JSON.parse(JSON.stringify(s))),d=C([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0},{title:"\u6027\u522B",prop:"sex",sortable:!1},{title:"\u5355\u4F4D",prop:"org",sortable:"descending"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]);return{tableData:u,cols:d,sortChange:(r,m)=>{console.log("soring...",r,m),m?u.value.sort((v,k)=>{const g=String(v[r]).localeCompare(String(k[r]));return m==="ascending"?g:g*-1}):u.value=JSON.parse(JSON.stringify(s))}}}});return N({render:l},p)}(),"hl-demo12":function(){const{resolveComponent:c,openBlock:n,createBlock:o}=x;function i(l,F){const C=c("hl-simple-table");return n(),o(C,{cols:l.cols,border:"border-x",data:l.tableData},null,8,["cols","data"])}const{defineComponent:t,ref:E}=x,f=t({setup(){const l=E([]),F=E([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return{tableData:l,cols:F}}});return N({render:i},f)}()}},M=e("h1",null,"SimpleTable \u7B80\u5355\u8868\u683C",-1),Q=e("p",null,"SimpleTable \u662F\u4E00\u6B3E\u975E\u5E38\u8F7B\u91CF\u7684\u8868\u683C\u7EC4\u4EF6\u3002",-1),W=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    remove-thead
    @row-click="rowClicked"
    @cell-click="cellClicked"
  >
    <template #firstCol="{ col }">
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

    <template #handle="{ row }">
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
`)],-1),q=e("h2",{id:"bian-kuang-yang-shi"},[e("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),D(" \u8FB9\u6846\u6837\u5F0F")],-1),G=e("p",null,[e("code",null,"border"),D(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F")],-1),K=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),X=e("h2",{id:"jian-ju-she-zhi"},[e("a",{class:"header-anchor",href:"#jian-ju-she-zhi"}),D(" \u95F4\u8DDD\u8BBE\u7F6E")],-1),Z=e("p",null,[e("code",null,"padding"),D(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u4E0D\u540C\u7684\u95F4\u8DDD\u6837\u5F0F")],-1),ee=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ue=e("h2",{id:"xuan-ting-yang-shi-hover"},[e("a",{class:"header-anchor",href:"#xuan-ting-yang-shi-hover"}),D(" \u60AC\u505C\u6837\u5F0F Hover")],-1),te=e("p",null,[e("code",null,"hover"),D(" \u5C5E\u6027\u53EF\u4EE5\u5728\u60AC\u505C\u5728\u67D0\u4E00\u884C\u65F6\uFF0C\u5448\u73B0\u80CC\u666F\u8272\u3002")],-1),oe=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),le=e("h2",{id:"tiao-wen-yang-shi"},[e("a",{class:"header-anchor",href:"#tiao-wen-yang-shi"}),D(" \u6761\u7EB9\u6837\u5F0F")],-1),ne=e("p",null,[e("code",null,"stripe"),D("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u6761\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),ae=e("div",null,[e("p",null,[D("stripe \u8FD8\u63A5\u6536 "),e("code",null,"even"),D(" \u6216\u8005 "),e("code",null,"odd"),D(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),e("code",null,"odd"),D(" \u5947\u6570")])],-1),se=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),de=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),D(" \u5C3A\u5BF8\u4FEE\u9970")],-1),re=e("p",null,[e("code",null,"size"),D(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u7684\u5C3A\u5BF8\u3002")],-1),ie=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ce=e("h2",{id:"lie-biao-yang-shi"},[e("a",{class:"header-anchor",href:"#lie-biao-yang-shi"}),D(" \u5217\u8868\u6837\u5F0F")],-1),Ee=e("p",null,[e("code",null,"list"),D(" \u53EF\u4EE5\u5C06\u4F20\u7EDF\u7684\u8868\u683C\u5448\u73B0\u6210\u5217\u8868\u7684\u72B6\u6001\u3002")],-1),pe=e("div",null,[e("p",null,[D("\u5217\u8868\u6837\u5F0F\u4F1A\u4E3A\u6BCF\u4E00\u884C\u8868\u683C\u52A0\u4E0A\u5706\u89D2\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u95F4\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="var(--xs)"')])],-1),Fe=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),me=e("h2",{id:"gu-ding-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),D(" \u56FA\u5B9A\u8868\u5934")],-1),De=e("p",null,[D("\u4E3A SimpleTable \u7EC4\u4EF6\u52A0\u4E0A "),e("code",null,"fixed-header"),D(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8868\u5934\u56FA\u5B9A\u5728\u9876\u7AEF\u3002")],-1),he=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Be=e("h2",{id:"gu-ding-lie"},[e("a",{class:"header-anchor",href:"#gu-ding-lie"}),D(" \u56FA\u5B9A\u5217")],-1),Ce=e("p",null,[D("\u4E3A\u67D0\u4E00\u5217\u589E\u52A0 "),e("code",null,"fixed"),D(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5B83\u56FA\u5B9A\uFF0C\u540C\u65F6\u4F60\u53EF\u4EE5\u4F20\u9012 "),e("code",null,"left"),D(),e("code",null,"right"),D(" \u6765\u63A7\u5236\u5B83\u56FA\u5B9A\u5728\u4EC0\u4E48\u5730\u65B9\u3002\u4F8B\u5982 "),e("code",null,"fixed: 'left'")],-1),_e=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),be=e("h2",{id:"gu-ding-tou-he-lie"},[e("a",{class:"header-anchor",href:"#gu-ding-tou-he-lie"}),D(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),xe=e("p",null,"\u8868\u5934\u548C\u5217\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u56FA\u5B9A\u3002",-1),ge=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),fe=e("h2",{id:"yi-chu-biao-tou"},[e("a",{class:"header-anchor",href:"#yi-chu-biao-tou"}),D(" \u79FB\u9664\u8868\u5934")],-1),ve=e("p",null,[e("code",null,"show-header"),D(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664\u8868\u5934\uFF0C\u8BA9\u5176\u5C55\u793A\u4E3A\u4E00\u4E2A\u7EAF\u5217\u8868\u6837\u5F0F\u3002")],-1),Ae=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),we=e("h2",{id:"pai-xu"},[e("a",{class:"header-anchor",href:"#pai-xu"}),D(" \u6392\u5E8F")],-1),Ne=e("p",null,"\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u70B9\u51FB\u76F8\u540C\u7684\u6392\u5E8F\u56FE\u6807\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F\u3002\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u8BF7\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA SortableIcon \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770B\u4E0B\u9762\u81EA\u5B9A\u4E49\u5217\u5B9E\u73B0\u3002",-1),ke=e("div",null,[e("p",null,[D("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6Esortable\u5C5E\u6027\uFF0C\u503C\u4E3A\uFF1A"),e("code",null,"true / false / 'descending' / 'ascending'"),D(" \uFF0C\u5E76\u901A\u8FC7\u76D1\u542Csort-change\u4E8B\u4EF6\u5904\u7406\u6570\u636E\u6392\u5E8F")])],-1),Ve=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    remove-thead
    @sort-change="sortChange"
  >
    <template #index>
      \u81EA\u5B9A\u4E49\u5217
      <sortable-icon sortable="xxxxxx" @sort-change="val => sortChange('id', val)" />
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
`)],-1),ye=e("h2",{id:"kong-shu-ju"},[e("a",{class:"header-anchor",href:"#kong-shu-ju"}),D(" \u7A7A\u6570\u636E")],-1),Ie=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Se=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u586B\u5145</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string</td><td>left/right</td><td>-</td></tr><tr><td>slotName</td><td>\u5217 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A row\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr></tbody></table>',8);function Te(c,n,o,i,t,E){const f=A("hl-demo0"),l=A("demo-block"),F=A("hl-demo1"),C=A("hl-demo2"),_=A("hl-demo3"),h=A("hl-demo4"),p=A("hl-demo5"),s=A("hl-demo6"),u=A("hl-demo7"),d=A("hl-demo8"),a=A("hl-demo9"),r=A("hl-demo10"),m=A("hl-demo11"),v=A("hl-demo12"),k=A("right-nav");return J(),O(z,null,[e("section",null,[M,Q,b(l,{fs:""},{source:B(()=>[b(f)]),highlight:B(()=>[W]),_:1}),q,G,b(l,{fs:""},{source:B(()=>[b(F)]),highlight:B(()=>[K]),_:1}),X,Z,b(l,{fs:""},{source:B(()=>[b(C)]),highlight:B(()=>[ee]),_:1}),ue,te,b(l,{fs:""},{source:B(()=>[b(_)]),highlight:B(()=>[oe]),_:1}),le,ne,b(l,{fs:""},{source:B(()=>[b(h)]),highlight:B(()=>[se]),default:B(()=>[ae]),_:1}),de,re,b(l,{fs:""},{source:B(()=>[b(p)]),highlight:B(()=>[ie]),_:1}),ce,Ee,b(l,{fs:"",dark:""},{source:B(()=>[b(s)]),highlight:B(()=>[Fe]),default:B(()=>[pe]),_:1}),me,De,b(l,{fs:""},{source:B(()=>[b(u)]),highlight:B(()=>[he]),_:1}),Be,Ce,b(l,{fs:""},{source:B(()=>[b(d)]),highlight:B(()=>[_e]),_:1}),be,xe,b(l,{fs:""},{source:B(()=>[b(a)]),highlight:B(()=>[ge]),_:1}),fe,ve,b(l,{fs:""},{source:B(()=>[b(r)]),highlight:B(()=>[Ae]),_:1}),we,Ne,b(l,{fs:""},{source:B(()=>[b(m)]),highlight:B(()=>[Ve]),default:B(()=>[ke]),_:1}),ye,b(l,{fs:""},{source:B(()=>[b(v)]),highlight:B(()=>[Ie]),_:1}),Se]),b(k)],64)}var ze=L(Y,[["render",Te]]);export{ze as default};
