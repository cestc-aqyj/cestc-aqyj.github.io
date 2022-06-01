var G=Object.defineProperty;var O=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var z=(d,n,l)=>n in d?G(d,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):d[n]=l,y=(d,n)=>{for(var l in n||(n={}))H.call(n,l)&&z(d,l,n[l]);if(O)for(var l of O(n))$.call(n,l)&&z(d,l,n[l]);return d};import{H as k,L as K,W as Q,Q as u,X as x,P as C,a4 as W,aL as E,S as p,o as R}from"./vue.8f5537c1.js";import{_ as X,H as L}from"./index.417b30ee.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const q={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:d,createVNode:n,toDisplayString:l,createTextVNode:s,withCtx:r,createElementVNode:B,openBlock:f,createBlock:a}=E,h=s(l("")),b=B("a",null,"\u4FEE\u6539",-1);function _(o,i){const t=d("hl-checkbox"),e=d("hl-simple-table");return f(),a(e,{"table-fixed":"",cols:o.cols,data:o.tableData,onRowClick:o.rowClicked,onCellClick:o.cellClicked},{firstCol:r(()=>[n(t,{modelValue:o.selectedAll,"onUpdate:modelValue":i[0]||(i[0]=c=>o.selectedAll=c),onChange:o.selectAll},null,8,["modelValue","onChange"])]),tableIndex:r(({row:c})=>[n(t,{modelValue:o.selectedRows,"onUpdate:modelValue":i[1]||(i[1]=A=>o.selectedRows=A),label:c.id,onChange:A=>o.selectRow(c.id)},{default:r(()=>[h]),_:2},1032,["modelValue","label","onChange"])]),handle:r(()=>[b]),_:1},8,["cols","data","onRowClick","onCellClick"])}const{defineComponent:F}=E,{ref:D}=E;return y({render:_},F({setup(o,{expose:i}){i();const t=D(!1),e=D([]),c=D([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),A=D([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol",width:"3em"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),S={selectedAll:t,selectedRows:e,tableData:c,cols:A,selectAll:()=>{t.value?(e.value.splice(0,e.value.length),e.value.push(...c.value.map(I=>I.id))):e.value.splice(0,e.value.length)},selectRow:()=>{t.value=e.value.length===c.value.length},rowClicked:(I,P,V)=>{console.log("rowClicked",I,P,V)},cellClicked:(I,P,V,j,T)=>{console.log("cellClicked",I,P,V,j,T)},ref:D};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}))}(),"hl-demo1":function(){const{renderList:d,Fragment:n,openBlock:l,createElementBlock:s,resolveComponent:r,createBlock:B,createCommentVNode:f,withCtx:a,createVNode:h,toDisplayString:b,createElementVNode:_}=E,F=_("a",null,"\u4FEE\u6539",-1);function D(t,e){const c=r("hl-option"),A=r("hl-select"),N=r("hl-simple-table");return l(),s(n,null,[h(A,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=g=>t.value=g),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:a(()=>[(l(!0),s(n,null,d(t.options,g=>(l(),s(n,null,[g.divider?(l(),B(c,{key:g.value,divider:""})):(l(),B(c,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),h(N,{cols:t.cols,data:t.tableData,border:t.value,padding:"0"},{tableIndex:a(({rowIndex:g})=>[_("span",null,b(g+1),1)]),handle:a(()=>[F]),_:1},8,["cols","data","border"])],64)}const{defineComponent:m}=E,{ref:o}=E;return y({render:D},m({setup(t,{expose:e}){e();const c=o([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),A=o([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),N=o([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),g=o("borderless"),w={tableData:c,cols:A,options:N,value:g,ref:o};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}))}(),"hl-demo2":function(){const{renderList:d,Fragment:n,openBlock:l,createElementBlock:s,resolveComponent:r,createBlock:B,createCommentVNode:f,withCtx:a,createVNode:h,toDisplayString:b,createElementVNode:_,createTextVNode:F}=E,D=F("\u4FEE\u6539");function m(e,c){const A=r("hl-option"),N=r("hl-select"),g=r("hl-button"),w=r("hl-simple-table");return l(),s(n,null,[h(N,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=v=>e.value=v),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145",class:"m-b-md"},{default:a(()=>[(l(!0),s(n,null,d(e.options,v=>(l(),s(n,null,[v.divider?(l(),B(A,{key:v.value,divider:""})):(l(),B(A,{key:v.value,label:v.label,value:v.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),h(N,{modelValue:e.value2,"onUpdate:modelValue":c[1]||(c[1]=v=>e.value2=v),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145",class:"m-l-md m-b-md"},{default:a(()=>[(l(!0),s(n,null,d(e.options,v=>(l(),s(n,null,[v.divider?(l(),B(A,{key:v.value,divider:""})):(l(),B(A,{key:v.value,label:v.label,value:v.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),h(w,{cols:e.cols,data:e.tableData,border:"border-x",padding:e.value,"cell-padding":e.value2},{tableIndex:a(({rowIndex:v})=>[_("span",null,b(v+1),1)]),handle:a(()=>[h(g,{type:"link"},{default:a(()=>[D]),_:1})]),_:1},8,["cols","data","padding","cell-padding"])],64)}const{defineComponent:o}=E,{ref:i}=E;return y({render:m},o({setup(e,{expose:c}){c();const A=i([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),N=i([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),g=i([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),w=i("0"),v=i("0"),S={tableData:A,cols:N,options:g,value:w,value2:v,ref:i};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}))}(),"hl-demo3":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createBlock:a}=E,h=l("\u4FEE\u6539");function b(m,o){const i=s("hl-button"),t=s("hl-simple-table");return f(),a(t,{cols:m.cols,data:m.tableData,hover:""},{tableIndex:r(({rowIndex:e})=>[n("span",null,d(e+1),1)]),handle:r(()=>[B(i,{type:"link"},{default:r(()=>[h]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:_}=E,{ref:F}=E;return y({render:b},_({setup(m,{expose:o}){o();const i=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=F([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),e={tableData:i,cols:t,ref:F};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}))}(),"hl-demo4":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createBlock:a}=E,h=l("\u4FEE\u6539");function b(m,o){const i=s("hl-button"),t=s("hl-simple-table");return f(),a(t,{cols:m.cols,data:m.tableData,stripe:""},{tableIndex:r(({rowIndex:e})=>[n("span",null,d(e+1),1)]),handle:r(()=>[B(i,{type:"link"},{default:r(()=>[h]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:_}=E,{ref:F}=E;return y({render:b},_({setup(m,{expose:o}){o();const i=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=F([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),e={tableData:i,cols:t,ref:F};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}))}(),"hl-demo5":function(){const{renderList:d,Fragment:n,openBlock:l,createElementBlock:s,resolveComponent:r,createBlock:B,createCommentVNode:f,withCtx:a,createVNode:h,toDisplayString:b,createElementVNode:_}=E,F=_("a",null,"\u4FEE\u6539",-1);function D(t,e){const c=r("hl-option"),A=r("hl-select"),N=r("hl-simple-table");return l(),s(n,null,[h(A,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=g=>t.value=g),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:a(()=>[(l(!0),s(n,null,d(t.options,g=>(l(),s(n,null,[g.divider?(l(),B(c,{key:g.value,divider:""})):(l(),B(c,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),h(N,{cols:t.cols,data:t.tableData,size:t.value,class:"borderless-last"},{tableIndex:a(({rowIndex:g})=>[_("span",null,b(g+1),1)]),handle:a(()=>[F]),_:1},8,["cols","data","size"])],64)}const{defineComponent:m}=E,{ref:o}=E;return y({render:D},m({setup(t,{expose:e}){e();const c=o([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),A=o([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),N=o([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),g=o("md"),w={tableData:c,cols:A,options:N,value:g,ref:o};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}))}(),"hl-demo6":function(){const{toDisplayString:d,createElementVNode:n,resolveComponent:l,withCtx:s,openBlock:r,createBlock:B}=E,f=n("a",null,"\u4FEE\u6539",-1);function a(F,D){const m=l("hl-simple-table");return r(),B(m,{cols:F.cols,data:F.tableData,border:"bordered",resize:""},{tableIndex:s(({rowIndex:o})=>[n("span",null,d(o+1),1)]),handle:s(()=>[f]),_:1},8,["cols","data"])}const{defineComponent:h}=E,{ref:b}=E;return y({render:a},h({setup(F,{expose:D}){D();const m=b([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),o=b([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),i={tableData:m,cols:o,ref:b};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo7":function(){const{resolveDynamicComponent:d,openBlock:n,createBlock:l,resolveComponent:s,withCtx:r,createVNode:B,createElementVNode:f}=E,a=f("a",null,"\u4FEE\u6539",-1);function h(D,m){const o=s("hl-icon"),i=s("hl-simple-table");return n(),l(i,{cols:D.cols,data:D.tableData,list:"","gap-y":"var(--xs)"},{tableIndex:r(({row:t})=>[B(o,{type:"danger",fill:"",radius:""},{default:r(()=>[(n(),l(d("Two"+t.icon)))]),_:2},1024)]),handle:r(()=>[a]),_:1},8,["cols","data"])}const{defineComponent:b}=E,{ref:_}=E;return y({render:h},b({setup(D,{expose:m}){m();const o=_([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",icon:"Briefcase"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",icon:"ChartPie"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",icon:"Archive"}]),i=_([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),t={tableData:o,cols:i,ref:_};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}(),"hl-demo8":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createElementBlock:a}=E,h={class:"table-scroll",style:{height:"200px"}},b=l("\u4FEE\u6539");function _(o,i){const t=s("hl-button"),e=s("hl-simple-table");return f(),a("div",h,[B(e,{cols:o.cols,data:o.tableData,border:"border-x","fixed-header":""},{tableIndex:r(({rowIndex:c})=>[n("span",null,d(c+1),1)]),handle:r(()=>[B(t,{type:"link"},{default:r(()=>[b]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:F}=E,{ref:D}=E;return y({render:_},F({setup(o,{expose:i}){i();const t=D([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),e=D([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c={tableData:t,cols:e,ref:D};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"hl-demo9":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createElementBlock:a}=E,h={class:"table-scroll scroll-column"},b=l("\u4FEE\u6539");function _(o,i){const t=s("hl-button"),e=s("hl-simple-table");return f(),a("div",h,[B(e,{cols:o.cols,data:o.tableData,border:"border-x"},{tableIndex:r(({rowIndex:c})=>[n("span",null,d(c+1),1)]),handle:r(()=>[B(t,{type:"link"},{default:r(()=>[b]),_:1})]),_:1},8,["cols","data"])])}const{defineComponent:F}=E,{ref:D}=E;return y({render:_},F({setup(o,{expose:i}){i();const t=D([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",no:"478343",level:"P8",years:10},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",no:"238343",level:"P6",years:3},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",no:"178343",level:"P7",years:5}]),e=D([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left",width:"50px"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5DE5\u53F7",prop:"no",showTooltip:!0,width:"120px",fixed:{position:"left",distance:"50px"}},{title:"\u804C\u7EA7",prop:"level",showTooltip:!0},{title:"\u53F8\u9F84",prop:"years",showTooltip:!0},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"150px",fixed:{position:"right",distance:"78px"}},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]),c={tableData:t,cols:e,ref:D};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"hl-demo10":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createElementBlock:a}=E,h={class:"table-scroll",style:{height:"200px"}},b=l("\u4FEE\u6539");function _(o,i){const t=s("hl-button"),e=s("hl-simple-table");return f(),a("div",h,[B(e,{cols:o.cols,data:o.tableData,border:"border-x","fixed-header":"","cell-style":o.cellStyle},{tableIndex:r(({rowIndex:c})=>[n("span",null,d(c),1)]),handle:r(()=>[B(t,{type:"link"},{default:r(()=>[b]),_:1})]),_:1},8,["cols","data","cell-style"])])}const{defineComponent:F}=E,{ref:D}=E;return y({render:_},F({setup(o,{expose:i}){i();let t=0;const e={name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},c=D(new Array(22).fill(0).map(w=>Object.assign(JSON.parse(JSON.stringify(e)),{id:t++}))),A=D([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"100px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center"}]),g={idx:t,row:e,tableData:c,cols:A,cellStyle:({rowIndex:w})=>w%5===0?{backgroundColor:"var(--bg-light)",zIndex:10,position:"sticky",top:"48px"}:{},ref:D};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}))}(),"hl-demo11":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createBlock:a}=E,h=l("\u4FEE\u6539");function b(m,o){const i=s("hl-button"),t=s("hl-simple-table"),e=s("hl-scrollbar");return f(),a(e,{height:"200px"},{default:r(()=>[B(t,{cols:m.cols,data:m.tableData,border:"border-x","fixed-header":""},{tableIndex:r(({rowIndex:c})=>[n("span",null,d(c+1),1)]),handle:r(()=>[B(i,{type:"link"},{default:r(()=>[h]),_:1})]),_:1},8,["cols","data"])]),_:1})}const{defineComponent:_}=E,{ref:F}=E;return y({render:b},_({setup(m,{expose:o}){o();const i=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=F([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"150px"},{title:"\u6027\u522B",prop:"sex",width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"500px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,fixed:"right"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]),e={tableData:i,cols:t,ref:F};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}))}(),"hl-demo12":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createBlock:a,createCommentVNode:h,createSlots:b}=E,_=l("\u4FEE\u6539"),F=n("span",null,"\u6B63\u5728\u52A0\u8F7D...",-1);function D(e,c){const A=s("hl-button"),N=s("hl-spinner"),g=s("hl-group"),w=s("hl-simple-table"),v=s("hl-scrollbar");return f(),a(v,{style:{height:"200px"},onAtEnd:e.loadMore},{default:r(()=>[B(w,{cols:e.cols,data:e.tableData,border:"border-x","fixed-header":""},b({tableIndex:r(({rowIndex:S})=>[n("span",null,d(S+1),1)]),handle:r(()=>[B(A,{type:"link"},{default:r(()=>[_]),_:1})]),_:2},[e.hadMoreData?{name:"more",fn:r(()=>[e.loading?(f(),a(g,{key:0,align:"items-middle",gap:"var(--xs)"},{default:r(()=>[B(N,{size:"sm"}),F]),_:1})):h("",!0)])}:void 0]),1032,["cols","data"])]),_:1},8,["onAtEnd"])}const{defineComponent:m}=E,{computed:o,ref:i}=E;return y({render:D},m({setup(e,{expose:c}){c();let A=1;function N(){return A++}const g=[{id:N(),name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:N(),name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:N(),name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}],w=i(!1),v=i(JSON.parse(JSON.stringify(g))),S=i([{title:"#",slotName:"tableIndex",width:"8%"},{title:"\u7528\u6237\u540D",prop:"name",width:"15%"},{title:"\u6027\u522B",prop:"sex",width:"8%"},{title:"\u5355\u4F4D",prop:"org",width:"20%"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"10%"}]),I=o(()=>v.value.length<12),V={count:A,id:N,data:g,loading:w,tableData:v,cols:S,hadMoreData:I,loadMore:()=>{w.value||(w.value=!0,window.setTimeout(()=>{const j=JSON.parse(JSON.stringify(g));j.forEach(T=>{T.id=N(),T.name=T.name+T.id}),v.value.push(...j),w.value=!1},300))},computed:o,ref:i};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}))}(),"hl-demo13":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,createVNode:B,openBlock:f,createBlock:a}=E,h=l("\u4FEE\u6539");function b(m,o){const i=s("hl-button"),t=s("hl-simple-table");return f(),a(t,{cols:m.cols,data:m.tableData,hover:"","show-header":!1},{tableIndex:r(({rowIndex:e})=>[n("span",null,d(e+1),1)]),handle:r(()=>[B(i,{type:"link"},{default:r(()=>[h]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:_}=E,{ref:F}=E;return y({render:b},_({setup(m,{expose:o}){o();const i=F([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),t=F([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),e={tableData:i,cols:t,ref:F};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}))}(),"hl-demo14":function(){const{resolveComponent:d,createVNode:n,createTextVNode:l,withCtx:s,openBlock:r,createBlock:B}=E,f=l(" \u81EA\u5B9A\u4E49\u5217 ");function a(m,o){const i=d("sortable-icon"),t=d("hl-simple-table");return r(),B(t,{cols:m.cols,data:m.tableData,onSortChange:m.sortChange},{index:s(()=>[f,n(i,{sortable:"",onSortChange:o[0]||(o[0]=e=>m.sortChange("id",e))})]),_:1},8,["cols","data","onSortChange"])}const{defineComponent:h,ref:b}=E,{HlSimpleTable:_}=L,{SortableIcon:F}=_,D=h({components:{SortableIcon:F},setup(){const m=[{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}],o=b(JSON.parse(JSON.stringify(m))),i=b([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0},{title:"\u6027\u522B",prop:"sex",sortable:!1},{title:"\u5355\u4F4D",prop:"org",sortable:"descending"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]);return{tableData:o,cols:i,sortChange:(e,c)=>{console.log("soring...",e,c),c?o.value.sort((A,N)=>{const g=String(A[e]).localeCompare(String(N[e]));return c==="ascending"?g:g*-1}):o.value=JSON.parse(JSON.stringify(m))}}}});return y({render:a},D)}(),"hl-demo15":function(){const{createTextVNode:d,resolveComponent:n,withCtx:l,createVNode:s,openBlock:r,createBlock:B}=E,f=d("\u6761\u4EF61"),a=d("\u6761\u4EF62"),h=d("\u6761\u4EF63"),b=d("\u786E\u5B9A"),_=d(" \u81EA\u5B9A\u4E49\u5217 "),F=d("\u6761\u4EF61"),D=d("\u6761\u4EF62"),m=d("\u6761\u4EF63"),o=d("\u786E\u5B9A");function i(g,w){const v=n("hl-checkbox"),S=n("hl-checkbox-group"),I=n("hl-button"),P=n("filter-icon"),V=n("hl-simple-table");return r(),B(V,{cols:g.cols,data:g.tableData},{filterSlot:l(({close:j})=>[s(S,{modelValue:g.selectedItems,"onUpdate:modelValue":w[0]||(w[0]=T=>g.selectedItems=T),dir:"vertical",gap:"var(--md)",block:""},{default:l(()=>[s(v,{label:"1"},{default:l(()=>[f]),_:1}),s(v,{label:"2"},{default:l(()=>[a]),_:1}),s(v,{label:"3"},{default:l(()=>[h]),_:1})]),_:1},8,["modelValue"]),s(I,{type:"primary",size:"sm",class:"m-t-md",onClick:j},{default:l(()=>[b]),_:2},1032,["onClick"])]),index:l(()=>[_,s(P,{placement:"right"},{default:l(({close:j})=>[s(S,{modelValue:g.selectedItems,"onUpdate:modelValue":w[1]||(w[1]=T=>g.selectedItems=T),dir:"vertical",gap:"var(--md)",block:""},{default:l(()=>[s(v,{label:"1"},{default:l(()=>[F]),_:1}),s(v,{label:"2"},{default:l(()=>[D]),_:1}),s(v,{label:"3"},{default:l(()=>[m]),_:1})]),_:1},8,["modelValue"]),s(I,{type:"primary",size:"sm",class:"m-t-md",onClick:j},{default:l(()=>[o]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["cols","data"])}const{defineComponent:t,ref:e}=E,{HlSimpleTable:c}=L,{FilterIcon:A}=c,N=t({components:{FilterIcon:A},setup(){const g=e([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),w=e([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),v=e([]);return{tableData:g,cols:w,selectedItems:v}}});return y({render:i},N)}(),"hl-demo16":function(){const{resolveComponent:d,createVNode:n,createElementVNode:l,createTextVNode:s,withCtx:r,Fragment:B,openBlock:f,createElementBlock:a}=E,h=l("br",null,null,-1),b=s("\u9009\u4E2D\u7B2C\u4E00\u884C"),_=s("\u53D6\u6D88\u9009\u62E9");function F(i,t){const e=d("hl-simple-table"),c=d("hl-button");return f(),a(B,null,[n(e,{ref:"tableRef",cols:i.cols,data:i.tableData,"highlight-current-row":"",onCurrentChange:i.currentChange,onRowClick:i.rowClick},null,8,["cols","data","onCurrentChange","onRowClick"]),h,n(c,{class:"m-r-md",onClick:t[0]||(t[0]=A=>i.setCurrent(i.tableData[0]))},{default:r(()=>[b]),_:1}),n(c,{onClick:t[1]||(t[1]=A=>i.setCurrent())},{default:r(()=>[_]),_:1})],64)}const{defineComponent:D}=E,{ref:m}=E;return y({render:F},D({setup(i,{expose:t}){t();const e=m(),c=m([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),A=m([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),v={tableRef:e,tableData:c,cols:A,currentChange:(S,I)=>{console.log(S,I)},rowClick:()=>{console.log("row-click")},setCurrent:S=>{e.value.setCurrentRow(S)},ref:m};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}))}(),"hl-demo17":function(){const{toDisplayString:d,createElementVNode:n,createTextVNode:l,resolveComponent:s,withCtx:r,openBlock:B,createBlock:f}=E,a=["onClick"],h=n("p",null,"\u624B\u5DE5\u5C55\u5F00\u6570\u636E",-1);function b(m,o){const i=s("hl-simple-table");return B(),f(i,{ref:"tableRef",cols:m.cols,data:m.tableData,"expand-row-keys":["1index","2nameExpand"]},{index:r(({row:t})=>[n("p",null,d(t.org)+" / "+d(t.des),1)]),name:r(({row:t})=>[n("a",{href:"javascript:;",onClick:e=>m.expand(t)},"\u70B9\u6211\u5C55\u5F00",8,a),l(" / "+d(t.name),1)]),nameExpand:r(()=>[h]),des:r(({row:t})=>[n("p",null,d(t.sex)+" / "+d(t.des),1)]),_:1},8,["cols","data"])}const{defineComponent:_}=E,{ref:F}=E;return y({render:b},_({setup(m,{expose:o}){o();const i=F(),t=F([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),e=F([{title:"#",prop:"id",expand:{slotName:"index",hideLabel:!0}},{title:"\u7528\u6237\u540D",prop:"name",slotName:"name",expand:{slotName:"nameExpand"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",expand:{slotName:"des"},tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),A={tableRef:i,tableData:t,cols:e,expand:N=>{i.value.toggleExpand(N.id,"nameExpand")},ref:F};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}}))}(),"hl-demo18":function(){const{toDisplayString:d,createElementVNode:n,resolveComponent:l,withCtx:s,createVNode:r,Fragment:B,openBlock:f,createElementBlock:a}=E,h=n("a",null,"\u4FEE\u6539",-1),b=n("br",null,null,-1),_=n("br",null,null,-1),F=n("a",null,"\u4FEE\u6539",-1);function D(t,e){const c=l("hl-simple-table");return f(),a(B,null,[r(c,{cols:t.cols,data:t.tableData,load:t.load,"expand-row-keys":["1"]},{tableIndex:s(({row:A})=>[n("span",null,d(A.id),1)]),handle:s(()=>[h]),_:1},8,["cols","data","load"]),b,_,r(c,{cols:t.cols,data:t.tableData,load:t.load,"expand-row-keys":["1"],"first-column-index":1},{tableIndex:s(({row:A})=>[n("span",null,d(A.id),1)]),handle:s(()=>[F]),_:1},8,["cols","data","load"])],64)}const{defineComponent:m}=E,{ref:o}=E;return y({render:D},m({setup(t,{expose:e}){e();let c=1e4;const A=o(),N=o([{title:"ID",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",width:"220px",showTooltip:!0},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),g=(v,S,I)=>{window.setTimeout(()=>{I([{id:c++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",hasChildren:!0},{id:c++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:c++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]}])},3e3)};window.setTimeout(()=>{A.value=[{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:11,name:"\u738B\u4E8C\u9EBB\u5B5011",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:111,name:"\u738B\u4E8C\u9EBB\u5B50111",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:112,name:"\u738B\u4E8C\u9EBB\u5B50112",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]},{id:12,name:"\u738B\u4E8C\u9EBB\u5B5012",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",hasChildren:!0},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]},100);const w={count:c,tableData:A,cols:N,load:g,ref:o};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}))}(),"hl-demo19":function(){const{resolveComponent:d,createVNode:n,Fragment:l,openBlock:s,createElementBlock:r}=E;function B(b,_){const F=d("hl-simple-table");return s(),r(l,null,[n(F,{cols:b.cols,data:b.tableData,border:"bordered","span-method":b.arraySpanMethod},null,8,["cols","data","span-method"]),n(F,{cols:b.cols,data:b.tableData,border:"bordered",class:"m-t-md","span-method":b.objectSpanMethod},null,8,["cols","data","span-method"])],64)}const{defineComponent:f}=E,{ref:a}=E;return y({render:B},f({setup(b,{expose:_}){_();const F=a([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),D=a([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]),i={tableData:F,cols:D,arraySpanMethod:({rowIndex:t,columnIndex:e})=>{if(t%2===0){if(e===0)return[1,2];if(e===1)return[0,0]}},objectSpanMethod:({rowIndex:t,columnIndex:e})=>{if(e===0)return t%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},ref:a};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo20":function(){const{createElementVNode:d,resolveComponent:n,withCtx:l,openBlock:s,createBlock:r}=E,B=d("a",null,"\u4FEE\u6539",-1);function f(_,F){const D=n("hl-simple-table");return s(),r(D,{cols:_.cols,data:_.tableData,border:"bordered"},{handle:l(()=>[B]),_:1},8,["cols","data"])}const{defineComponent:a}=E,{ref:h}=E;return y({render:f},a({setup(_,{expose:F}){F();const D=h([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),m=h([{title:"\u65E5\u671F",prop:"date"},{title:"\u914D\u9001\u4FE1\u606F",prop:"delivery",children:[{title:"\u59D3\u540D",prop:"name"},{title:"\u5730\u5740\u4FE1\u606F",prop:"address",children:[{title:"\u7701/\u5E02",prop:"state"},{title:"\u57CE\u5E02",prop:"city"},{title:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"zip",slotName:"handle"}]}]}]),o={tableData:D,cols:m,ref:h};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}))}(),"hl-demo21":function(){const{createElementVNode:d,resolveComponent:n,withCtx:l,openBlock:s,createBlock:r}=E,B=d("tr",null,[d("td",{colspan:"2"},[d("strong",null,"\u5408\u8BA1")]),d("td",null,"\uFFE53232"),d("td",null,"\uFFE51212.22"),d("td",null,"\uFFE590.22")],-1);function f(_,F){const D=n("hl-simple-table");return s(),r(D,{cols:_.cols,data:_.tableData,border:"bordered"},{foot:l(()=>[B]),_:1},8,["cols","data"])}const{defineComponent:a}=E,{ref:h}=E;return y({render:f},a({setup(_,{expose:F}){F();const D=h([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),m=h([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]),o={tableData:D,cols:m,ref:h};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}))}(),"hl-demo22":function(){const{createElementVNode:d,resolveComponent:n,withCtx:l,createVNode:s,createTextVNode:r,Fragment:B,openBlock:f,createElementBlock:a}=E,h=d("a",null,"\u4FEE\u6539",-1),b=d("br",null,null,-1),_=d("br",null,null,-1),F=r("\u9690\u85CF/\u663E\u793A\u7B2C3\u5217");function D(t,e){const c=n("hl-simple-table"),A=n("hl-button");return f(),a(B,null,[s(c,{ref:"simpleTableRef",cols:t.cols,data:t.tableData},{handle:l(()=>[h]),_:1},8,["cols","data"]),b,_,s(A,{type:"primary",onClick:t.toggleColumn},{default:l(()=>[F]),_:1},8,["onClick"])],64)}const{defineComponent:m}=E,{ref:o}=E;return y({render:D},m({setup(t,{expose:e}){e();const c=o(),A=o([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),N=o([{title:"#",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),w={simpleTableRef:c,tableData:A,cols:N,toggleColumn:()=>{c.value.toggleColumn(2)},ref:o};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}))}(),"hl-demo23":function(){const{resolveComponent:d,openBlock:n,createBlock:l}=E;function s(a,h){const b=d("hl-simple-table");return n(),l(b,{cols:a.cols,border:"border-x",data:a.tableData},null,8,["cols","data"])}const{defineComponent:r}=E,{ref:B}=E;return y({render:s},r({setup(a,{expose:h}){h();const b=B([]),_=B([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]),F={tableData:b,cols:_,ref:B};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}(),"hl-demo24":function(){const{createElementVNode:d,resolveComponent:n,withCtx:l,openBlock:s,createBlock:r}=E,B=d("p",{style:{"text-align":"center"}},"\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~",-1);function f(_,F){const D=n("hl-simple-table");return s(),r(D,{cols:_.cols,border:"border-x",data:_.tableData},{unknown:l(()=>[B]),_:1},8,["cols","data"])}const{defineComponent:a}=E,{ref:h}=E;return y({render:f},a({setup(_,{expose:F}){F();const D=h(null),m=h([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]),o={tableData:D,cols:m,ref:h};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}))}()}},Y=u("h1",null,"SimpleTable \u7B80\u5355\u8868\u683C",-1),Z=u("p",null,"SimpleTable \u662F\u4E00\u6B3E\u975E\u5E38\u8F7B\u91CF\u7684\u8868\u683C\u7EC4\u4EF6\u3002",-1),uu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    table-fixed
    :cols="cols"
    :data="tableData"
    @row-click="rowClicked"
    @cell-click="cellClicked"
  >
    <template #firstCol>
      <hl-checkbox v-model="selectedAll" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <hl-checkbox v-model="selectedRows" :label="row.id" @change="selectRow(row.id)">{{ '' }}</hl-checkbox>
    </template>

    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol', width: '3em' },
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

<\/script>
`)],-1),eu=u("h2",{id:"bian-kuang-yang-shi"},[u("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),p(" \u8FB9\u6846\u6837\u5F0F")],-1),tu=u("p",null,[u("code",null,"border"),p(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F")],-1),ou=u("pre",null,[u("code",{class:"html"},` <template>
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
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),lu=u("h2",{id:"jian-ju-she-zhi"},[u("a",{class:"header-anchor",href:"#jian-ju-she-zhi"}),p(" \u95F4\u8DDD\u8BBE\u7F6E")],-1),nu=u("p",null,[u("code",null,"padding"),p(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u4E0D\u540C\u7684\u95F4\u8DDD\u5C3A\u5BF8\uFF0C \u540C\u65F6"),u("code",null,"cell-padding"),p(" \u53EF\u8BBE\u7F6ETD\u7684\u95F4\u8DDD\u5C3A\u5BF8")],-1),au=u("pre",null,[u("code",{class:"html"},` <template>
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
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),su=u("h2",{id:"xuan-ting-yang-shi-hover"},[u("a",{class:"header-anchor",href:"#xuan-ting-yang-shi-hover"}),p(" \u60AC\u505C\u6837\u5F0F Hover")],-1),ru=u("p",null,[u("code",null,"hover"),p(" \u5C5E\u6027\u53EF\u4EE5\u5728\u60AC\u505C\u5728\u67D0\u4E00\u884C\u65F6\uFF0C\u5448\u73B0\u80CC\u666F\u8272\u3002")],-1),du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" :data="tableData" hover>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),iu=u("h2",{id:"tiao-wen-yang-shi"},[u("a",{class:"header-anchor",href:"#tiao-wen-yang-shi"}),p(" \u6761\u7EB9\u6837\u5F0F")],-1),Eu=u("p",null,[u("code",null,"stripe"),p("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u6761\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),pu=u("div",null,[u("p",null,[p("stripe \u8FD8\u63A5\u6536 "),u("code",null,"even"),p(" \u6216\u8005 "),u("code",null,"odd"),p(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),u("code",null,"odd"),p(" \u5947\u6570")])],-1),cu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" :data="tableData" stripe>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),Fu=u("h2",{id:"chi-cun-xiu-shi"},[u("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),p(" \u5C3A\u5BF8\u4FEE\u9970")],-1),mu=u("p",null,[u("code",null,"size"),p(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u7684\u5C3A\u5BF8\u3002")],-1),Bu=u("pre",null,[u("code",{class:"html"},` <template>
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
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),Du=u("h2",{id:"tuo-zhuai-gai-bian-lie-kuan"},[u("a",{class:"header-anchor",href:"#tuo-zhuai-gai-bian-lie-kuan"}),p(" \u62D6\u62FD\u6539\u53D8\u5217\u5BBD")],-1),hu=u("p",null,[u("code",null,"resize"),p(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A "),u("code",null,"true"),p("\uFF0C\u53EF\u4EE5\u62D6\u62FD\u8868\u683C\u5934\u7684\u5217\uFF0C\u4ECE\u800C\u6539\u53D8\u5217\u5BBD\u3002")],-1),Cu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" :data="tableData" border="bordered" resize>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),_u=u("h2",{id:"lie-biao-yang-shi"},[u("a",{class:"header-anchor",href:"#lie-biao-yang-shi"}),p(" \u5217\u8868\u6837\u5F0F")],-1),bu=u("p",null,[u("code",null,"list"),p(" \u53EF\u4EE5\u5C06\u4F20\u7EDF\u7684\u8868\u683C\u5448\u73B0\u6210\u5217\u8868\u7684\u72B6\u6001\u3002")],-1),gu=u("div",null,[u("p",null,[p("\u5217\u8868\u6837\u5F0F\u4F1A\u4E3A\u6BCF\u4E00\u884C\u8868\u683C\u52A0\u4E0A\u5706\u89D2\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u95F4\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),u("code",null,'gap="var(--xs)"')])],-1),xu=u("pre",null,[u("code",{class:"html"},` <template>
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
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),Au=u("h2",{id:"gu-ding-biao-tou"},[u("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),p(" \u56FA\u5B9A\u8868\u5934")],-1),fu=u("p",null,[p("\u4E3A SimpleTable \u7EC4\u4EF6\u52A0\u4E0A "),u("code",null,"fixed-header"),p(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8868\u5934\u56FA\u5B9A\u5728\u9876\u7AEF\u3002")],-1),vu=u("pre",null,[u("code",{class:"html"},` <template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),wu=R('<h2 id="gu-ding-lie"><a class="header-anchor" href="#gu-ding-lie"></a> \u56FA\u5B9A\u5217</h2><p>\u4E3A\u67D0\u4E00\u5217\u589E\u52A0 <code>fixed</code> \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5B83\u56FA\u5B9A\uFF0C\u540C\u65F6\u4F60\u53EF\u4EE5\u4F20\u9012 <code>left</code> <code>right</code> \u6765\u63A7\u5236\u5B83\u56FA\u5B9A\u5728\u4EC0\u4E48\u5730\u65B9\u3002\u4F8B\u5982 <code>fixed: &#39;left&#39;</code>\u3002<code>fixed</code> \u5C5E\u6027\u8FD8\u53EF\u4EE5\u4E3A <code>object</code> \u7C7B\u578B\uFF0C\u8BE6\u7EC6\u63A7\u5236 <code>fixed</code> \u7684\u8DDD\u79BB\u3002</p>',2),Nu=u("pre",null,[u("code",{class:"html"},` <template>
  <div class="table-scroll scroll-column">
    <hl-simple-table :cols="cols" :data="tableData" border="border-x">
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
    no: '478343',
    level: 'P8',
    years: 10,
  },
  {
    id: 2,
    name: '\u674E\u56DB',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD',
    no: '238343',
    level: 'P6',
    years: 3,
  },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    no: '178343',
    level: 'P7',
    years: 5,
  },
])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex', fixed: 'left', width: '50px' },
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, width: '150px' },
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },
  { title: '\u5DE5\u53F7', prop: 'no', showTooltip: true, width: '120px', fixed: { position: 'left', distance: '50px' } },
  { title: '\u804C\u7EA7', prop: 'level', showTooltip: true },
  { title: '\u53F8\u9F84', prop: 'years', showTooltip: true },
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '400px' },
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, width: '150px', fixed: { position: 'right', distance: '78px' } },
  {
    title: '\u64CD\u4F5C',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
])

<\/script>
`)],-1),ku=u("h2",{id:"gu-ding-xing"},[u("a",{class:"header-anchor",href:"#gu-ding-xing"}),p(" \u56FA\u5B9A\u884C")],-1),yu=u("p",null,[p("\u901A\u8FC7 "),u("code",null,"cellStyle"),p(" \u5C5E\u6027\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u56FA\u5B9A\u884C\u6548\u679C\u3002")],-1),Su=u("pre",null,[u("code",{class:"html"},` <template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
      :cell-style="cellStyle"
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let idx = 0
const row = {
  name: '\u738B\u4E8C\u9EBB\u5B50',
  sex: '\u7537',
  org: '\u4E2D\u56FD\u7CFB\u7EDF',
  des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
}
const tableData = ref(new Array(22).fill(0).map(_ => Object.assign(JSON.parse(JSON.stringify(row)), { id: idx++ })))
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, width: '100px' },
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, width: '150px' },
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '400px' },
  { title: '\u64CD\u4F5C', prop: '', slotName: 'handle', align: 'center' },
])

// \u56FA\u5B9A5\u500D\u6570\u7684\u884C
const cellStyle = ({ rowIndex }) => {
  return rowIndex % 5 === 0 ? {
    backgroundColor: 'var(--bg-light)',
    zIndex: 10,
    position: 'sticky',
    top: \`48px\`, // 48\u4E3A\u8868\u683C\u5934\u7684\u9AD8\u5EA6
  } : {}
}
<\/script>
`)],-1),Iu=u("h2",{id:"gu-ding-tou-he-lie"},[u("a",{class:"header-anchor",href:"#gu-ding-tou-he-lie"}),p(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),Tu=u("p",null,"\u8868\u5934\u548C\u5217\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u56FA\u5B9A\u3002",-1),Vu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-scrollbar height="200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </hl-scrollbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),ju=u("h2",{id:"xia-la-jia-zai-geng-duo"},[u("a",{class:"header-anchor",href:"#xia-la-jia-zai-geng-duo"}),p(" \u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A")],-1),Pu=u("p",null,"\u914D\u5408 Scrollbar \u7EC4\u4EF6\u53EF\u5B9E\u73B0\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A\u3002",-1),Ou=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-scrollbar style="height: 200px" @at-end="loadMore">
    <hl-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
      <template v-if="hadMoreData" #more>
        <template v-if="loading">
          <hl-group align="items-middle" gap="var(--xs)">
            <hl-spinner size="sm" />
            <span>\u6B63\u5728\u52A0\u8F7D...</span>
          </hl-group>
        </template>
      </template>
    </hl-simple-table>
  </hl-scrollbar>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

let count = 1
function id() {
  return count++
}
const data = [
  {
    id: id(),
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: id(), name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: id(),
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
]

const loading = ref(false)
const tableData = ref(JSON.parse(JSON.stringify(data)))
const cols = ref([
  { title: '#', slotName: 'tableIndex', width: '8%' },
  { title: '\u7528\u6237\u540D', prop: 'name', width: '15%' },
  { title: '\u6027\u522B', prop: 'sex', width: '8%' },
  { title: '\u5355\u4F4D', prop: 'org', width: '20%' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', width: '10%' },
])

const hadMoreData = computed(() => tableData.value.length < 12)
const loadMore = () => {
  if (loading.value) return
  loading.value = true
  window.setTimeout(() => {
    const moreData = JSON.parse(JSON.stringify(data))
    moreData.forEach(d => {
      d.id = id()
      d.name = d.name + d.id
    })
    tableData.value.push(...moreData)
    loading.value = false
  }, 300)
}

<\/script>
`)],-1),zu=u("h2",{id:"yi-chu-biao-tou"},[u("a",{class:"header-anchor",href:"#yi-chu-biao-tou"}),p(" \u79FB\u9664\u8868\u5934")],-1),Lu=u("p",null,[u("code",null,"show-header"),p(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664\u8868\u5934\uFF0C\u8BA9\u5176\u5C55\u793A\u4E3A\u4E00\u4E2A\u7EAF\u5217\u8868\u6837\u5F0F\u3002")],-1),Ru=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" :data="tableData" hover :show-header="false">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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
<\/script>
`)],-1),Uu=u("h2",{id:"pai-xu"},[u("a",{class:"header-anchor",href:"#pai-xu"}),p(" \u6392\u5E8F")],-1),Mu=u("p",null,"\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u70B9\u51FB\u76F8\u540C\u7684\u6392\u5E8F\u56FE\u6807\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F\u3002\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u8BF7\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA SortableIcon \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770B\u4E0B\u9762\u81EA\u5B9A\u4E49\u5217\u5B9E\u73B0\u3002",-1),Ju=u("div",null,[u("p",null,[p("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6Esortable\u5C5E\u6027\uFF0C\u503C\u4E3A\uFF1A"),u("code",null,"true / false / 'descending' / 'ascending'"),p(" \uFF0C\u5E76\u901A\u8FC7\u76D1\u542Csort-change\u4E8B\u4EF6\u5904\u7406\u6570\u636E\u6392\u5E8F")])],-1),Gu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Hu=u("h2",{id:"shai-xuan"},[u("a",{class:"header-anchor",href:"#shai-xuan"}),p(" \u7B5B\u9009")],-1),$u=u("p",null,"\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u8BF7\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA FilterIcon \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770B\u4E0B\u9762\u81EA\u5B9A\u4E49\u5217\u5B9E\u73B0\u3002",-1),Ku=u("div",null,[u("p",null,[p("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6E "),u("code",null,"filter"),p(" \u5BF9\u8C61\uFF0C\u63D0\u4F9B "),u("code",null,"slotName"),p("\uFF08\u5FC5\u9009\uFF09\u3001"),u("code",null,"placement"),p("\uFF08\u53C2\u8003Popover\u6587\u6863\uFF09\u3001"),u("code",null,"popperClass"),p(" \u5C5E\u6027\u3002slot\u4E2D\u63D0\u4F9B "),u("code",null,"close"),p(" \u65B9\u6CD5\u7528\u6765\u624B\u5DE5\u5173\u95ED\u5F39\u51FA\u6846\u3002")])],-1),Qu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Wu=u("h2",{id:"gao-liang-xing"},[u("a",{class:"header-anchor",href:"#gao-liang-xing"}),p(" \u9AD8\u4EAE\u884C")],-1),Xu=u("p",null,"\u9009\u62E9\u5355\u884C\u6570\u636E\u65F6\u4F7F\u7528\u8272\u5757\u8868\u793A\u3002",-1),qu=u("div",null,[u("p",null,[p("SimpleTable \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5355\u9009\u7684\u652F\u6301\uFF0C \u53EA\u9700\u8981\u914D\u7F6E"),u("code",null,"highlight-current-row"),p("\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u5355\u9009\u3002 \u4E4B\u540E\u7531"),u("code",null,"current-change"),p("\u4E8B\u4EF6\u6765\u7BA1\u7406\u9009\u4E2D\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u5B83\u4F1A\u4F20\u5165 currentRow\uFF0ColdCurrentRow\u3002")])],-1),Yu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    ref="tableRef"
    :cols="cols"
    :data="tableData"
    highlight-current-row
    @current-change="currentChange"
    @row-click="rowClick"
  />
  <br>
  <hl-button class="m-r-md" @click="setCurrent(tableData[0])">\u9009\u4E2D\u7B2C\u4E00\u884C</hl-button>
  <hl-button @click="setCurrent()">\u53D6\u6D88\u9009\u62E9</hl-button>
</template>
<script setup lang="ts">
import { ref } from 'vue'


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

const currentChange = (now, old) => {
  console.log(now, old)
}
const rowClick = () => {
  console.log('row-click')
}
const setCurrent = row => {
  tableRef.value.setCurrentRow(row)
}

<\/script>
`)],-1),Zu=u("h2",{id:"zhan-kai-xing"},[u("a",{class:"header-anchor",href:"#zhan-kai-xing"}),p(" \u5C55\u5F00\u884C")],-1),ue=u("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 SimpleTable \u5C55\u5F00\u884C\u529F\u80FD\u3002\u53EF\u4EE5\u5B9A\u4E49\u591A\u5217\u540C\u65F6\u5C55\u5F00\u3002",-1),ee=u("div",null,[u("p",null,[p("\u901A\u8FC7\u8BBE\u7F6E expand \u5BF9\u8C61 \u548C slot \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\u3002expand\u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A"),u("code",null,"slotName"),p("\uFF0C"),u("code",null,"hideLabel"),p("\uFF0ChideLabel\u9ED8\u8BA4\u4E3Afalse")])],-1),te=u("pre",null,[u("code",{class:"html"},` <template>
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
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),oe=u("h2",{id:"shu-xing-shu-ju-yu-lan-jia-zai"},[u("a",{class:"header-anchor",href:"#shu-xing-shu-ju-yu-lan-jia-zai"}),p(" \u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D")],-1),le=u("p",null,[p("\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 row \u4E2D\u5305\u542B children \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002 \u6E32\u67D3\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6307\u5B9A row-key\u3002\u652F\u6301\u5B50\u8282\u70B9\u6570\u636E\u5F02\u6B65\u52A0\u8F7D\u3002 \u8BBE\u7F6E Table \u7684\u52A0\u8F7D\u51FD\u6570 load \u3002 \u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684hasChildren\u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002 children\u4E0EhasChildren\u90FD\u53EF\u4EE5\u901A\u8FC7 "),u("code",null,"tree-props"),p(" \u914D\u7F6E\u3002"),u("code",null,"first-column-index"),p(" \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u5C55\u5F00\u884C\u4E3A\u6240\u4F5C\u7528\u7684\u5217\u3002")],-1),ne=u("div",null,[u("p",null,[p("\u5F53children\u5B57\u6BB5\u6709\u6570\u7EC4\u503C\u65F6\uFF0C\u5C06\u4F1A\u5FFD\u7565hasChildren\u5B57\u6BB5\u3002"),u("em",null,[u("strong",null,[p("\u9700\u8981\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u65F6\uFF0C\u4E00\u5B9A\u8981\u8C28\u614E\u8BBE\u7F6E"),u("code",null,"default-expand-all"),p("\u5C5E\u6027\u4E3Atrue\u503C")])])])],-1),ae=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :load="load"
    :expand-row-keys="['1']"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
  <br><br>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :load="load"
    :expand-row-keys="['1']"
    :first-column-index="1"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let count = 10000
const tableData = ref()
const cols = ref([
  { title: 'ID', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des', width: '220px', showTooltip: true },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const load = (row, node, resolve) => {
  window.setTimeout(() => {
    resolve([
      {
        id: count++,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
        hasChildren: true,
      },
      {
        id: count++,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
        children: [
          {
            id: count++,
            name: '\u738B\u4E8C\u9EBB\u5B50',
            sex: '\u7537',
            org: '\u4E2D\u56FD\u7CFB\u7EDF',
            des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          },
        ],
      },
    ])
  }, 3000)
}

window.setTimeout(() => {
  tableData.value = [
    {
      id: 1,
      name: '\u738B\u4E8C\u9EBB\u5B50',
      sex: '\u7537',
      org: '\u4E2D\u56FD\u7CFB\u7EDF',
      des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      children: [
        {
          id: 11,
          name: '\u738B\u4E8C\u9EBB\u5B5011',
          sex: '\u7537',
          org: '\u4E2D\u56FD\u7CFB\u7EDF',
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          children: [
            {
              id: 111,
              name: '\u738B\u4E8C\u9EBB\u5B50111',
              sex: '\u7537',
              org: '\u4E2D\u56FD\u7CFB\u7EDF',
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
            },
            {
              id: 112,
              name: '\u738B\u4E8C\u9EBB\u5B50112',
              sex: '\u7537',
              org: '\u4E2D\u56FD\u7CFB\u7EDF',
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
            },
          ],
        },
        {
          id: 12,
          name: '\u738B\u4E8C\u9EBB\u5B5012',
          sex: '\u7537',
          org: '\u4E2D\u56FD\u7CFB\u7EDF',
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
        },
      ],
    },
    {
      id: 2,
      name: '\u674E\u56DB',
      sex: '\u7537',
      org: '\u4E2D\u56FD\u7CFB\u7EDF',
      des: '\u6765\u81EA\u4E2D\u56FD',
      hasChildren: true,
    },
    {
      id: 3,
      name: '\u5F20\u4E09',
      sex: '\u7537',
      org: '\u4E2D\u56FD\u7CFB\u7EDF',
      des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    },
  ]
}, 100)

<\/script>
`)],-1),se=u("h2",{id:"he-bing-xing-huo-lie"},[u("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),p(" \u5408\u5E76\u884C\u6216\u5217")],-1),re=u("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),de=u("div",null,[u("p",null,"\u901A\u8FC7\u7ED9 table \u4F20\u5165span-method\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C row\u3001\u5F53\u524D\u5217 column\u3001\u5F53\u524D\u884C\u53F7 rowIndex\u3001\u5F53\u524D\u5217\u53F7 columnIndex \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 rowspan\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 colspan\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A rowspan \u548C colspan \u7684\u5BF9\u8C61\u3002")],-1),ie=u("pre",null,[u("code",{class:"html"},` <template>
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
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),Ee=u("h2",{id:"duo-ji-biao-tou"},[u("a",{class:"header-anchor",href:"#duo-ji-biao-tou"}),p(" \u591A\u7EA7\u8868\u5934")],-1),pe=u("p",null,"\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002",-1),ce=u("div",null,[u("p",null,[p("\u901A\u8FC7"),u("code",null,"cols"),p(" \u7684 "),u("code",null,"children"),p(" \u5C5E\u6027\u5D4C\u5957\u5B9E\u73B0\u591A\u7EA7\u8868\u5934")])],-1),Fe=u("pre",null,[u("code",{class:"html"},` <template>
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
<script setup lang="ts">
import { ref } from 'vue'

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

<\/script>
`)],-1),me=u("h2",{id:"biao-wei-he-ji-xing"},[u("a",{class:"header-anchor",href:"#biao-wei-he-ji-xing"}),p(" \u8868\u5C3E\u5408\u8BA1\u884C")],-1),Be=u("p",null,"\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u8868\u5C3E\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002",-1),De=u("div",null,[u("p",null,[p("\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 "),u("code",null,"foot"),p(" slot\u5B9E\u73B0")])],-1),he=u("pre",null,[u("code",{class:"html"},` <template>
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
<script setup lang="ts">
import { ref } from 'vue'

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
<\/script>
`)],-1),Ce=u("h2",{id:"yin-cang-lie"},[u("a",{class:"header-anchor",href:"#yin-cang-lie"}),p(" \u9690\u85CF\u5217")],-1),_e=u("p",null,[u("code",null,"toggleColumn"),p(" \u65B9\u6CD5\u652F\u6301\u5BF9\u5217\u7684\u9690\u85CF\u6216\u8005\u663E\u793A\u64CD\u4F5C\u3002")],-1),be=u("div",null,[u("p",null,"\u6682\u4E0D\u652F\u6301\u5BF9\u591A\u7EA7\u8868\u5934\u4EE5\u53CA\u5B58\u5728\u5408\u5E76\u5355\u5143\u683C\u7684\u8868\u683C\u8FDB\u884C\u64CD\u4F5C")],-1),ge=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table
    ref="simpleTableRef"
    :cols="cols"
    :data="tableData"
  >
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
  <br><br>
  <hl-button type="primary" @click="toggleColumn">\u9690\u85CF/\u663E\u793A\u7B2C3\u5217</hl-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const simpleTableRef = ref()
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
  { title: '#', prop: 'id' },
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

const toggleColumn = () => {
  simpleTableRef.value.toggleColumn(2)
}

<\/script>
`)],-1),xe=u("h2",{id:"kong-shu-ju"},[u("a",{class:"header-anchor",href:"#kong-shu-ju"}),p(" \u7A7A\u6570\u636E")],-1),Ae=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData" />
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },
])

<\/script>
`)],-1),fe=u("h2",{id:"wei-zhi-shu-ju"},[u("a",{class:"header-anchor",href:"#wei-zhi-shu-ju"}),p(" \u672A\u77E5\u6570\u636E")],-1),ve=u("div",null,[u("p",null,[p("\u5728\u4F20\u9012\u7684\u6570\u636E\u4E3A "),u("code",null,"null"),p(" \u6216\u8005 "),u("code",null,"undefined"),p(" \u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 "),u("code",null,"unknown"),p(" slot")])],-1),we=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData">
    <template #unknown>
      <p style="text-align: center;">\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~</p>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref(null)
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },
])

<\/script>
`)],-1),Ne=R('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 SimpleTable \u7684\u6E32\u67D3\u3002<em><strong>\u5982\u679C\u8868\u683C\u6570\u636E\u6807\u8BC6\u7B26\u4E0D\u662Fid\u5B57\u6BB5\uFF0C\u8BF7\u4E00\u5B9A\u8981\u8BBE\u7F6E\u6B64\u503C</strong></em></td><td>string / function(row): string</td><td>-</td><td>id</td></tr><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>cell-padding</td><td>\u8BBE\u7F6ETd\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>auto-height</td><td>\u4F7FTh\u548CTd\u7684\u9AD8\u5EA6\u53D8\u4E3Aauto</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>fixed-footer</td><td>\u56FA\u5B9A\u8868\u5C3E</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>resize</td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u62FD\u8868\u5934\u6539\u53D8\u5217\u5BBD</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>scroll-container</td><td>\u8BBE\u7F6E\u56FA\u5B9A\u5217\u65F6\uFF0C\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u4E0D\u662F\u8868\u683C\u7684\u76F4\u63A5\u7236\u5143\u7D20\u6216\u8005Scrollbar\u7EC4\u4EF6\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u5C5E\u6027\uFF0C\u7528\u4EE5\u652F\u6301\u6EDA\u52A8\u65F6\u56FA\u5B9A\u5217\u9634\u5F71\u6548\u679C</td><td>string / HTMLElement</td><td>-</td><td>-</td></tr><tr><td>highlight-current-row</td><td>\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>expand-row-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\uFF0C\u540C\u65F6\u9002\u7528\u884C\u5C55\u5F00\u4E0E\u6811\u5C55\u5F00\u3002\u884C\u5C55\u5F00\u65F6\u7528\u884CrowKey+slotName\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\uFF1B\u6811\u5C55\u5F00\u65F6\u4F7F\u7528rowKey\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\u3002<em><strong>\u6570\u7EC4\u503C\u4E00\u5B9A\u662F\u5B57\u7B26\u4E32\u3002</strong></em></td><td>array</td><td>-</td><td>-</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 SimpleTable \u5305\u542B\u5C55\u5F00\u884C\u5B58\u5728\u6216\u8005\u4E3A\u6811\u5F62\u8868\u683C\u65F6\u6709\u6548</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>-</td><td>-</td></tr><tr><td>first-column-index</td><td>\u6811\u5F62\u5C55\u5F00\u64CD\u4F5C\u4F5C\u7528\u7684\u5217</td><td>number</td><td>-</td><td>0</td></tr><tr><td>tree-props</td><td>\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td>object</td><td>-</td><td><code>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5305\u542B\u4E86\u8282\u70B9\u7684\u5C42\u7EA7\u4FE1\u606F</td><td>function(row, treeNode, resolve)</td><td>-</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string / object</td><td>left / right / { position: string; distance: string; }</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr><tr><td>filter</td><td>\u5217\u7B5B\u9009\u8BBE\u7F6E</td><td>object{ slotName: string, placement: string, popperClass: string }</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E</td><td>object{ slotName: string, hideLabel: boolean }</td><td>-</td><td>-</td></tr><tr><td>children</td><td>\u5B50\u5217\u4FE1\u606F</td><td>array</td><td>-</td><td>-</td></tr><tr><td>formatter</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td>function(row, column, cellValue, rowIndex, columnIndex)</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, rowkey, slotName</td></tr><tr><td>tree-expand</td><td>\u6811\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, row</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleExpand</td><td>\u5C55\u5F00/\u6298\u53E0\u884C\u3002\u7531\u4E8E\u6BCF\u884C\u53EF\u80FD\u6709\u591A\u4E2A\u5C55\u5F00\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u9012\u9700\u8981\u5C55\u5F00\u7684slotName</td><td>rowKey, slotName</td></tr><tr><td>toggleExpandTree</td><td>\u5C55\u5F00\u6811</td><td>row</td></tr><tr><td>toggleColumn</td><td>\u663E\u793A/\u9690\u85CF\u5217</td><td>index, show\uFF08show\u53EF\u9009\uFF09</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C \u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001</td><td>row</td></tr><tr><td>clearTooltip</td><td>\u9690\u85CFtooltip</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr><tr><td>unknown</td><td>\u8868\u683C\u6570\u636E\u4E3Anull\u6216\u8005undefined\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>more</td><td>\u4E0B\u62C9\u52A0\u8F7D\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>foot</td><td>\u8868\u5C3E</td></tr></tbody></table>',10);function ke(d,n,l,s,r,B){const f=k("hl-demo0"),a=k("demo-block"),h=k("hl-demo1"),b=k("hl-demo2"),_=k("hl-demo3"),F=k("hl-demo4"),D=k("hl-demo5"),m=k("hl-demo6"),o=k("hl-demo7"),i=k("hl-demo8"),t=k("hl-demo9"),e=k("hl-demo10"),c=k("hl-demo11"),A=k("hl-demo12"),N=k("hl-demo13"),g=k("hl-demo14"),w=k("hl-demo15"),v=k("hl-demo16"),S=k("hl-demo17"),I=k("hl-demo18"),P=k("hl-demo19"),V=k("hl-demo20"),j=k("hl-demo21"),T=k("hl-demo22"),U=k("hl-demo23"),M=k("hl-demo24"),J=k("right-nav");return K(),Q(W,null,[u("section",null,[Y,Z,x(a,{fs:""},{source:C(()=>[x(f)]),highlight:C(()=>[uu]),_:1}),eu,tu,x(a,{fs:""},{source:C(()=>[x(h)]),highlight:C(()=>[ou]),_:1}),lu,nu,x(a,{fs:""},{source:C(()=>[x(b)]),highlight:C(()=>[au]),_:1}),su,ru,x(a,{fs:""},{source:C(()=>[x(_)]),highlight:C(()=>[du]),_:1}),iu,Eu,x(a,{fs:""},{source:C(()=>[x(F)]),highlight:C(()=>[cu]),default:C(()=>[pu]),_:1}),Fu,mu,x(a,{fs:""},{source:C(()=>[x(D)]),highlight:C(()=>[Bu]),_:1}),Du,hu,x(a,{fs:""},{source:C(()=>[x(m)]),highlight:C(()=>[Cu]),_:1}),_u,bu,x(a,{fs:"",dark:""},{source:C(()=>[x(o)]),highlight:C(()=>[xu]),default:C(()=>[gu]),_:1}),Au,fu,x(a,{fs:""},{source:C(()=>[x(i)]),highlight:C(()=>[vu]),_:1}),wu,x(a,{fs:""},{source:C(()=>[x(t)]),highlight:C(()=>[Nu]),_:1}),ku,yu,x(a,{fs:""},{source:C(()=>[x(e)]),highlight:C(()=>[Su]),_:1}),Iu,Tu,x(a,{fs:""},{source:C(()=>[x(c)]),highlight:C(()=>[Vu]),_:1}),ju,Pu,x(a,{fs:""},{source:C(()=>[x(A)]),highlight:C(()=>[Ou]),_:1}),zu,Lu,x(a,{fs:""},{source:C(()=>[x(N)]),highlight:C(()=>[Ru]),_:1}),Uu,Mu,x(a,{fs:""},{source:C(()=>[x(g)]),highlight:C(()=>[Gu]),default:C(()=>[Ju]),_:1}),Hu,$u,x(a,{fs:""},{source:C(()=>[x(w)]),highlight:C(()=>[Qu]),default:C(()=>[Ku]),_:1}),Wu,Xu,x(a,{fs:""},{source:C(()=>[x(v)]),highlight:C(()=>[Yu]),default:C(()=>[qu]),_:1}),Zu,ue,x(a,{fs:""},{source:C(()=>[x(S)]),highlight:C(()=>[te]),default:C(()=>[ee]),_:1}),oe,le,x(a,{fs:""},{source:C(()=>[x(I)]),highlight:C(()=>[ae]),default:C(()=>[ne]),_:1}),se,re,x(a,{fs:""},{source:C(()=>[x(P)]),highlight:C(()=>[ie]),default:C(()=>[de]),_:1}),Ee,pe,x(a,{fs:""},{source:C(()=>[x(V)]),highlight:C(()=>[Fe]),default:C(()=>[ce]),_:1}),me,Be,x(a,{fs:""},{source:C(()=>[x(j)]),highlight:C(()=>[he]),default:C(()=>[De]),_:1}),Ce,_e,x(a,{fs:""},{source:C(()=>[x(T)]),highlight:C(()=>[ge]),default:C(()=>[be]),_:1}),xe,x(a,{fs:""},{source:C(()=>[x(U)]),highlight:C(()=>[Ae]),_:1}),fe,x(a,{fs:""},{source:C(()=>[x(M)]),highlight:C(()=>[we]),default:C(()=>[ve]),_:1}),Ne]),x(J)],64)}var Pe=X(q,[["render",ke]]);export{Pe as default};
