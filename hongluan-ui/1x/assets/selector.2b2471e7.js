var J=Object.defineProperty;var R=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var L=(u,l,e)=>l in u?J(u,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[l]=e,S=(u,l)=>{for(var e in l||(l={}))K.call(l,e)&&L(u,e,l[e]);if(R)for(var e of R(l))Z.call(l,e)&&L(u,e,l[e]);return u};import{Y as N,L as uu,W as eu,Q as a,a2 as D,a0 as _,P as lu,aG as y,a3 as P,o as tu}from"./vue.d40fa6f3.js";import{_ as au}from"./index.4c73e209.js";import"./hongluan.bb564fd4.js";import"./highlight.e2508551.js";import"./hongluan-icons.ba2c1041.js";const ou={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:l,createVNode:e,withCtx:o,normalizeStyle:T,openBlock:k,createBlock:B}=y,v=u("p",{class:"m-b-sm"},"\u4E0B\u62C9\u6811\u5355\u9009+\u8FC7\u6EE4",-1);function g(t,r){const s=l("two-point"),i=l("hl-icon"),A=l("hl-tree"),p=l("hl-selector"),h=l("hl-col"),w=l("hl-row");return k(),B(w,{align:"center"},{default:o(()=>[e(h,{span:"col-md-12 col-lg-10"},{default:o(()=>[v,e(p,{ref:"selector1",filterable:"",clearable:"",block:"",onInput:t.handleTreeInput,onClear:r[0]||(r[0]=E=>t.handleTreeInput("")),onResize:t.resize},{prefix:o(()=>[e(i,null,{default:o(()=>[e(s)]),_:1})]),default:o(()=>[e(A,{ref:"hlTreeSingle",style:T(t.treeStyle),"node-key":"value",data:t.options,"filter-node-method":t.filterNode,class:"p-md",onNodeClick:t.clickTree},null,8,["style","data","filter-node-method","onNodeClick"])]),_:1},8,["onInput","onResize"])]),_:1}),e(h,{span:"col-md-12 col-lg-10"})]),_:1})}const{defineComponent:b,ref:d}=y,c=b({setup(){const t=d({}),r=d([{value:"zhinan",label:"\u6307\u5357",children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}]),s=d(null),i=d(null);return{selector1:s,hlTreeSingle:i,treeStyle:t,options:r,resize:({offsetWidth:E})=>{t.value.width=E+"px"},clickTree:E=>{s.value.setValue(E.label),i.value.filter("")},filterNode:(E,f)=>E?f.label.indexOf(E)!==-1:!0,handleTreeInput:E=>{i.value.filter(E)}}}});return S({render:g},c)}(),"hl-demo1":function(){const{createElementVNode:u,resolveComponent:l,createVNode:e,withCtx:o,toDisplayString:T,openBlock:k,createBlock:B}=y,v=u("p",{class:"m-b-sm"},"\u4E0B\u62C9\u6811\u591A\u9009",-1);function g(t,r){const s=l("hl-tree"),i=l("hl-scrollbar"),A=l("hl-selector"),p=l("hl-col"),h=l("hl-row");return k(),B(h,{align:"center"},{default:o(()=>[e(p,{span:"col-md-12 col-lg-10"},{default:o(()=>[v,e(A,{ref:"selector2",clearable:"",filterable:"",block:"",multiple:"",onInput:t.handleTreeInput,onRemoveTag:t.removeTag,onClear:t.clearTags},{tag:o(({tag:w})=>[u("span",null,T(w.text.label),1)]),default:o(()=>[e(i,null,{default:o(()=>[e(s,{ref:"hlTree","node-key":"value","show-checkbox":"",style:{width:"300px","max-height":"400px"},data:t.options,"filter-node-method":t.filterNode,onCheckChange:t.chooseTree},null,8,["data","filter-node-method","onCheckChange"])]),_:1})]),_:1},8,["onInput","onRemoveTag","onClear"])]),_:1}),e(p,{span:"col-md-12 col-lg-10"})]),_:1})}const{defineComponent:b,ref:d}=y,c=b({setup(){const t=d([]),r=d([{value:"zhinan",label:"\u6307\u5357",children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}]),s=d(null),i=d(null);return{treeNodes:t,options:r,hlTree:s,selector2:i,removeTag:f=>{t.value=t.value.filter(V=>V!==f.text),s.value.setCheckedNodes(t.value)},clearTags:()=>{t.value=[],s.value.setCheckedNodes(t.value)},filterNode:(f,V)=>f?V.label.indexOf(f)!==-1:!0,handleTreeInput:f=>{s.value.filter(f)},chooseTree:()=>{t.value=s.value.getCheckedNodes(),i.value.setValue(t.value)}}}});return S({render:g},c)}(),"hl-demo2":function(){const{createElementVNode:u,resolveComponent:l,createVNode:e,withCtx:o,openBlock:T,createBlock:k}=y,B=u("p",{class:"m-b-sm"},"\u4E0B\u62C9\u8868\u683C\u591A\u9009",-1);function v(c,t){const r=l("two-point"),s=l("hl-icon"),i=l("hl-table-column"),A=l("hl-table"),p=l("hl-selector"),h=l("hl-col"),w=l("hl-row");return T(),k(w,{align:"center"},{default:o(()=>[e(h,{span:"col-md-12 col-lg-10"},{default:o(()=>[B,e(p,{ref:"selectorTable",clearable:"",block:"",multiple:"",onRemoveTag:c.handleTableInput,onClear:t[0]||(t[0]=E=>c.handleTableInput(""))},{prefix:o(()=>[e(s,null,{default:o(()=>[e(r)]),_:1})]),default:o(()=>[e(A,{ref:"multipleTable",data:c.tableData,"tooltip-effect":"dark",onSelectionChange:c.handleSelectionChange},{default:o(()=>[e(i,{type:"selection",width:"55"}),e(i,{prop:"name",label:"\u59D3\u540D",width:"120"}),e(i,{prop:"tel",label:"\u7535\u8BDD",width:"120","show-overflow-tooltip":""})]),_:1},8,["data","onSelectionChange"])]),_:1},8,["onRemoveTag"])]),_:1}),e(h,{span:"col-md-12 col-lg-10"})]),_:1})}const{defineComponent:g,ref:b}=y,d=g({setup(){const c=b([{name:"\u738B\u5C0F\u864E",tel:"16787812234"},{name:"\u738B2\u864E",tel:"17787812234"},{name:"\u738B3\u864E",tel:"18787812234"},{name:"\u738B4\u864E",tel:"19787812234"},{name:"\u738B5\u864E",tel:"10787812234"},{name:"\u738B6\u864E",tel:"11787812234"},{name:"\u738B7\u864E",tel:"12787812234"}]),t=b([]),r=b(null),s=b(null);return{tableData:c,multipleSelection:t,multipleTable:r,selectorTable:s,handleSelectionChange:p=>{t.value=p,s.value.setValue(t.value.map(h=>h.name))},handleTableInput:p=>{p===""?r.value.clearSelection():r.value.toggleRowSelection(c.value.find(h=>h.name===p.text))}}}});return S({render:v},d)}(),"hl-demo3":function(){const{createElementVNode:u,resolveComponent:l,withCtx:e,createVNode:o,renderList:T,Fragment:k,openBlock:B,createElementBlock:v,withModifiers:g,createBlock:b}=y,d=u("p",{class:"m-b-sm"},"\u81EA\u5B9A\u4E49\u591A\u9009Icon",-1),U=[u("li",{title:"\u{1F600}\u7B11\u563B\u563B"},[u("span",null,"\u{1F600}")],-1),u("li",{title:"\u{1F601}\u7B11\u563B\u563B\u7684\u8138\uFF0C\u542B\u7B11\u7684\u773C\u775B"},[u("span",null,"\u{1F601}")],-1),u("li",{title:"\u{1F602}\u8138\u4E0A\u5E26\u7740\u559C\u60A6\u7684\u6CEA\u6C34"},[u("span",null,"\u{1F602}")],-1),u("li",{title:"\u{1F603}\u5F00\u53E3\u7B11\u8138"},[u("span",null,"\u{1F603}")],-1),u("li",{title:"\u{1F604}\u5F00\u53E3\u7B11\u8138\u548C\u5FAE\u7B11\u7684\u773C\u775B"},[u("span",null,"\u{1F604}")],-1),u("li",{title:"\u{1F605}\u7B11\u8138\u6DCC\u51B7\u6C57"},[u("span",null,"\u{1F605}")],-1),u("li",{title:"\u{1F606}\u5F00\u53E3\u7B11\u7D27\u95ED\u7684\u773C\u775B"},[u("span",null,"\u{1F606}")],-1),u("li",{title:"\u{1F609}\u7728\u773C\u8868\u60C5"},[u("span",null,"\u{1F609}")],-1),u("li",{title:"\u{1F60A}\u9762\u5E26\u5FAE\u7B11\u7684\u773C\u775B"},[u("span",null,"\u{1F60A}")],-1),u("li",{title:"\u{1F60B}\u54C1\u5C1D\u7F8E\u5473\u98DF\u7269\u8868\u60C5"},[u("span",null,"\u{1F60B}")],-1),u("li",{title:"\u{1F60E}\u592A\u9633\u955C\u7B11\u8138"},[u("span",null,"\u{1F60E}")],-1),u("li",{title:"\u{1F60D}\u9762\u5E26\u5FC3\u5F62\u773C\u775B"},[u("span",null,"\u{1F60D}")],-1),u("li",{title:"\u{1F618}\u98DE\u543B\u8868\u60C5"},[u("span",null,"\u{1F618}")],-1),u("li",{title:"\u{1F617}\u4EB2\u543B\u8868\u60C5"},[u("span",null,"\u{1F617}")],-1),u("li",{title:"\u{1F619}\u542B\u7B11\u4EB2\u543B\u8868\u60C5"},[u("span",null,"\u{1F619}")],-1),u("li",{title:"\u{1F61A}\u95ED\u773C\u4EB2\u543B\u8868\u60C5"},[u("span",null,"\u{1F61A}")],-1),u("li",{title:"\u263A\u7B11\u8138"},[u("span",null,"\u263A")],-1),u("li",{title:"\u{1F607}\u5149\u73AF\u7B11\u8138"},[u("span",null,"\u{1F607}")],-1),u("li",{title:"\u{1F610}\u4E2D\u6027\u9762"},[u("span",null,"\u{1F610}")],-1),u("li",{title:"\u{1F611}\u9762\u65E0\u8868\u60C5"},[u("span",null,"\u{1F611}")],-1),u("li",{title:"\u{1F636}\u6CA1\u6709\u5634\u7684\u8138"},[u("span",null,"\u{1F636}")],-1),u("li",null,[u("span",null,"\u{1F60F}")],-1),u("li",null,[u("span",null,"\u{1F623}")],-1),u("li",null,[u("span",null,"\u{1F625}")],-1),u("li",null,[u("span",null,"\u{1F62E}")],-1),u("li",null,[u("span",null,"\u{1F62F}")],-1),u("li",{title:"\u{1F62A}\u56F0"},[u("span",null,"\u{1F62A}")],-1),u("li",null,[u("span",null,"\u{1F62B}")],-1),u("li",null,[u("span",null,"\u{1F634}")],-1),u("li",{title:"\u{1F60C}\u5B89\u5FC3"},[u("span",null,"\u{1F60C}")],-1),u("li",{title:"\u{1F61B}\u5410\u820C\u5934"},[u("span",null,"\u{1F61B}")],-1),u("li",null,[u("span",null,"\u{1F61C}")],-1),u("li",null,[u("span",null,"\u{1F61D}")],-1),u("li",null,[u("span",null,"\u{1F612}")],-1),u("li",null,[u("span",null,"\u{1F613}")],-1),u("li",null,[u("span",null,"\u{1F614}")],-1),u("li",null,[u("span",null,"\u{1F615}")],-1),u("li",{title:"\u{1F632}\u60CA\u8BB6"},[u("span",null,"\u{1F632}")],-1),u("li",{title:"\u{1F637}\u6234\u53E3\u7F69"},[u("span",null,"\u{1F637}")],-1),u("li",{title:"\u{1F616}\u88AB\u6253\u8D25"},[u("span",null,"\u{1F616}")],-1),u("li",null,[u("span",null,"\u{1F61E}")],-1),u("li",null,[u("span",null,"\u{1F61F}")],-1),u("li",{title:"\u{1F624}\u9762\u5E26\u80DC\u5229"},[u("span",null,"\u{1F624}")],-1),u("li",{title:"\u{1F622}\u54ED\u6CE3\u7684\u8138"},[u("span",null,"\u{1F622}")],-1),u("li",{title:"\u{1F62D}\u5927\u58F0\u54ED\u6CE3\u7684\u8138"},[u("span",null,"\u{1F62D}")],-1),u("li",{title:"\u{1F626}\u5F20\u5634\u54ED"},[u("span",null,"\u{1F626}")],-1),u("li",{title:"\u{1F627}\u75DB\u82E6"},[u("span",null,"\u{1F627}")],-1),u("li",{title:"\u{1F628}\u6050\u60E7"},[u("span",null,"\u{1F628}")],-1),u("li",null,[u("span",null,"\u{1F62C}")],-1),u("li",{title:"\u{1F630}\u6DCC\u51B7\u6C57"},[u("span",null,"\u{1F630}")],-1),u("li",{title:"\u{1F631}\u5C16\u53EB\u6050\u60E7"},[u("span",null,"\u{1F631}")],-1),u("li",{title:"\u{1F633}\u7EA2\u6251\u6251\u7684\u8138\u86CB"},[u("span",null,"\u{1F633}")],-1),u("li",{title:"\u{1F635}\u6655"},[u("span",null,"\u{1F635}")],-1),u("li",null,[u("span",null,"\u{1F621}")],-1),u("li",null,[u("span",null,"\u{1F620}")],-1),u("li",null,[u("span",null,"\u{1F608}")],-1),u("li",null,[u("span",null,"\u{1F47F}")],-1),u("li",{title:"\u{1F479}\u65E5\u672C\u98DF\u4EBA\u9B54"},[u("span",null,"\u{1F479}")],-1),u("li",null,[u("span",null,"\u{1F47A}")],-1),u("li",null,[u("span",null,"\u{1F480}")],-1),u("li",null,[u("span",null,"\u2620")],-1),u("li",null,[u("span",null,"\u{1F47B}")],-1),u("li",null,[u("span",null,"\u{1F47D}")],-1)],O=["innerHTML"],$=u("p",{class:"m-b-sm"},"\u81EA\u5B9A\u4E49\u591A\u9009\u89C6\u9891",-1),H={ref:"selector4Dom",class:"selector-content video-list clearfix",style:{width:"300px"}},W=["src","onClick"],Q=["src"];function G(n,m){const z=l("hl-selector"),x=l("hl-col"),j=l("hl-row");return B(),b(j,{align:"center",gap:"var(--lg)"},{default:e(()=>[o(x,{span:"col-md-12 col-lg-10"},{default:e(()=>[d,o(z,{ref:"selector3",clearable:"",block:"",multiple:"",onRemoveTag:n.removeIcon,onClear:n.clearIcons},{tag:e(({tag:C})=>[u("span",{style:{width:"22px"},innerHTML:C.text},null,8,O)]),default:e(()=>[u("ul",{ref:"selector3Dom",class:"icon-list clearfix selector-content",style:{width:"300px"},onClick:m[0]||(m[0]=(...C)=>n.selectIcon&&n.selectIcon(...C))},U,512)]),_:1},8,["onRemoveTag","onClear"])]),_:1}),o(x,{span:"col-md-12 col-lg-10"},{default:e(()=>[$,o(z,{ref:"selector4",clearable:"",block:"",multiple:"",onRemoveTag:n.removeVideo,onClear:n.clearVideos},{tag:e(({tag:C})=>[u("video",{width:"100",height:"100",style:{"object-fit":"cover"},src:C.text,controls:"controls"},null,8,Q)]),default:e(()=>[u("div",H,[(B(!0),v(k,null,T(n.videoUrls,C=>(B(),v("video",{key:C,width:"120",height:"100",src:C,onClick:g(q=>n.chooseVideo(C),["stop"])},null,8,W))),128))],512)]),_:1},8,["onRemoveTag","onClear"])]),_:1})]),_:1})}const{defineComponent:X,ref:I}=y,Y=X({setup(){const n=I([]),m=I([]),z=I(["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://www.w3school.com.cn/example/html5/mov_bbb.mp4","https://v-cdn.zjol.com.cn/276998.mp4","https://v-cdn.zjol.com.cn/277003.mp4","https://v-cdn.zjol.com.cn/277000.mp4","https://v-cdn.zjol.com.cn/277001.mp4","https://v-cdn.zjol.com.cn/277002.mp4"]),x=I(null),j=I(null);return{icons:n,videos:m,videoUrls:z,selector3:x,selector4:j,selectIcon:F=>{console.log(F),F.target.tagName.toUpperCase()==="SPAN"&&(n.value.includes(F.target.innerHTML)||n.value.push(F.target.innerHTML),x.value.setValue(n.value))},chooseIcon:F=>{n.value.includes(F)||n.value.push(F),x.value.setValue(n.value)},clearIcons:()=>{n.value=[]},removeIcon:F=>{n.value=n.value.filter(M=>M!==F.text)},chooseVideo:F=>{m.value.includes(F)||m.value.push(F),j.value.setValue(m.value)},clearVideos:()=>{m.value=[]},removeVideo:F=>{m.value=m.value.filter(M=>M!==F.text)}}}});return S({render:G},Y)}()}},nu=a("h1",null,"Selector \u9AD8\u7EA7\u9009\u62E9\u5668",-1),su=a("p",null,"Selector \u662F\u4E00\u6B3E\u53EF\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u7684\u4E0B\u62C9\u9009\u62E9\u5668\u3002",-1),iu=a("h2",{id:"shu-dan-xuan-shi-li"},[a("a",{class:"header-anchor",href:"#shu-dan-xuan-shi-li"}),P(" \u6811\u5355\u9009\u793A\u4F8B")],-1),du=a("div",null,[a("p",null,"\u4E0B\u62C9\u9009\u62E9\u5668\u914D\u5408\u6811\u7EC4\u4EF6\u5B9E\u73B0\u4E0B\u62C9\u5355\u9009\u6811\u8282\u70B9\u4EE5\u53CA\u8F93\u5165\u8FC7\u6EE4\u529F\u80FD\u3002")],-1),cu=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-row align="center">
    <hl-col span="col-md-12 col-lg-10">
      <p class="m-b-sm">\u4E0B\u62C9\u6811\u5355\u9009+\u8FC7\u6EE4</p>
      <hl-selector
        ref="selector1"
        filterable
        clearable
        block
        @input="handleTreeInput"
        @clear="handleTreeInput('')"
        @resize="resize"
      >
        <template #prefix>
          <hl-icon><two-point /></hl-icon>
        </template>
        <hl-tree
          ref="hlTreeSingle"
          :style="treeStyle"
          node-key="value"
          :data="options"
          :filter-node-method="filterNode"
          class="p-md"
          @node-click="clickTree"
        />
      </hl-selector>
    </hl-col>
    <hl-col span="col-md-12 col-lg-10" />
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const treeStyle = ref({})
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        children: [
          {
            value: 'shejiyuanze',
            label: '\u8BBE\u8BA1\u539F\u5219',
            children: [
              {
                value: 'yizhi',
                label: '\u4E00\u81F4',
              },
              {
                value: 'fankui',
                label: '\u53CD\u9988',
              },
              {
                value: 'xiaolv',
                label: '\u6548\u7387',
              },
              {
                value: 'kekong',
                label: '\u53EF\u63A7',
              },
            ],
          },
          {
            value: 'daohang',
            label: '\u5BFC\u822A',
            children: [
              {
                value: 'cexiangdaohang',
                label: '\u4FA7\u5411\u5BFC\u822A',
              },
              {
                value: 'dingbudaohang',
                label: '\u9876\u90E8\u5BFC\u822A',
              },
            ],
          },
        ],
      },
      {
        value: 'zujian',
        label: '\u7EC4\u4EF6',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout \u5E03\u5C40',
              },
              {
                value: 'color',
                label: 'Color \u8272\u5F69',
              },
              {
                value: 'typography',
                label: 'Typography \u5B57\u4F53',
              },
              {
                value: 'icon',
                label: 'Icon \u56FE\u6807',
              },
              {
                value: 'button',
                label: 'Button \u6309\u94AE',
              },
            ],
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio \u5355\u9009\u6846',
              },
              {
                value: 'checkbox',
                label: 'Checkbox \u590D\u9009\u6846',
              },
              {
                value: 'input',
                label: 'Input \u8F93\u5165\u6846',
              },
              {
                value: 'input-number',
                label: 'InputNumber \u8BA1\u6570\u5668',
              },
              {
                value: 'select',
                label: 'Select \u9009\u62E9\u5668',
              },
              {
                value: 'cascader',
                label: 'Cascader \u7EA7\u8054\u9009\u62E9\u5668',
              },
              {
                value: 'switch',
                label: 'Switch \u5F00\u5173',
              },
              {
                value: 'slider',
                label: 'Slider \u6ED1\u5757',
              },
              {
                value: 'time-picker',
                label: 'TimePicker \u65F6\u95F4\u9009\u62E9\u5668',
              },
              {
                value: 'date-picker',
                label: 'DatePicker \u65E5\u671F\u9009\u62E9\u5668',
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668',
              },
              {
                value: 'upload',
                label: 'Upload \u4E0A\u4F20',
              },
              {
                value: 'rate',
                label: 'Rate \u8BC4\u5206',
              },
              {
                value: 'form',
                label: 'Form \u8868\u5355',
              },
            ],
          },
          {
            value: 'data',
            label: 'Data',
            children: [
              {
                value: 'table',
                label: 'Table \u8868\u683C',
              },
              {
                value: 'tag',
                label: 'Tag \u6807\u7B7E',
              },
              {
                value: 'progress',
                label: 'Progress \u8FDB\u5EA6\u6761',
              },
              {
                value: 'tree',
                label: 'Tree \u6811\u5F62\u63A7\u4EF6',
              },
              {
                value: 'pagination',
                label: 'Pagination \u5206\u9875',
              },
              {
                value: 'badge',
                label: 'Badge \u5FBD\u7AE0',
              },
            ],
          },
          {
            value: 'notice',
            label: 'Notice',
            children: [
              {
                value: 'alert',
                label: 'Alert \u8B66\u544A',
              },
              {
                value: 'loading',
                label: 'Loading \u52A0\u8F7D',
              },
              {
                value: 'message',
                label: 'Message \u6D88\u606F\u63D0\u793A',
              },
              {
                value: 'message-box',
                label: 'MessageBox \u5F39\u6846',
              },
              {
                value: 'notification',
                label: 'Notification \u901A\u77E5',
              },
            ],
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'menu',
                label: 'Menu \u5BFC\u822A\u83DC\u5355',
              },
              {
                value: 'tabs',
                label: 'Tabs \u6807\u7B7E\u9875',
              },
              {
                value: 'breadcrumb',
                label: 'Breadcrumb \u9762\u5305\u5C51',
              },
              {
                value: 'dropdown',
                label: 'Dropdown \u4E0B\u62C9\u83DC\u5355',
              },
              {
                value: 'steps',
                label: 'Steps \u6B65\u9AA4\u6761',
              },
            ],
          },
          {
            value: 'others',
            label: 'Others',
            children: [
              {
                value: 'dialog',
                label: 'Dialog \u5BF9\u8BDD\u6846',
              },
              {
                value: 'tooltip',
                label: 'Tooltip \u6587\u5B57\u63D0\u793A',
              },
              {
                value: 'popover',
                label: 'Popover \u5F39\u51FA\u6846',
              },
              {
                value: 'card',
                label: 'Card \u5361\u7247',
              },
              {
                value: 'carousel',
                label: 'Carousel \u8D70\u9A6C\u706F',
              },
              {
                value: 'collapse',
                label: 'Collapse \u6298\u53E0\u9762\u677F',
              },
            ],
          },
        ],
      },
      {
        value: 'ziyuan',
        label: '\u8D44\u6E90',
        children: [
          {
            value: 'axure',
            label: 'Axure Components',
          },
          {
            value: 'sketch',
            label: 'Sketch Templates',
          },
          {
            value: 'jiaohu',
            label: '\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863',
          },
        ],
      },
    ])
    const selector1 = ref(null)
    const hlTreeSingle = ref(null)

    const resize = ({ offsetWidth }) => {
      treeStyle.value.width = offsetWidth + 'px'
    }
    const clickTree = data => {
      selector1.value.setValue(data.label)
      hlTreeSingle.value.filter('')
    }
    const filterNode = (value, data) => {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
    const handleTreeInput = val => {
      hlTreeSingle.value.filter(val)
    }

    return {
      selector1,
      hlTreeSingle,
      treeStyle,
      options,
      resize,
      clickTree,
      filterNode,
      handleTreeInput,
    }
  },
})
<\/script>
`)],-1),ru=a("h2",{id:"shu-duo-xuan-shi-li"},[a("a",{class:"header-anchor",href:"#shu-duo-xuan-shi-li"}),P(" \u6811\u591A\u9009\u793A\u4F8B")],-1),pu=a("div",null,[a("p",null,"\u4E0B\u62C9\u9009\u62E9\u5668\u914D\u5408\u6811\u7EC4\u4EF6\u5B9E\u73B0\u4E0B\u62C9\u591A\u9009\u6811\u8282\u70B9\u4EE5\u53CA\u8F93\u5165\u8FC7\u6EE4\u529F\u80FD\u3002")],-1),hu=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-row align="center">
    <hl-col span="col-md-12 col-lg-10">
      <p class="m-b-sm">\u4E0B\u62C9\u6811\u591A\u9009</p>
      <hl-selector
        ref="selector2"
        clearable
        filterable
        block
        multiple
        @input="handleTreeInput"
        @remove-tag="removeTag"
        @clear="clearTags"
      >
        <hl-scrollbar>
          <hl-tree
            ref="hlTree"
            node-key="value"
            show-checkbox
            style="width: 300px; max-height:400px"
            :data="options"
            :filter-node-method="filterNode"
            @check-change="chooseTree"
          />
        </hl-scrollbar>
        <template #tag="{ tag }">
          <span>{{ tag.text.label }}</span>
        </template>
      </hl-selector>
    </hl-col>
    <hl-col span="col-md-12 col-lg-10" />
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const treeNodes = ref([])
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        children: [
          {
            value: 'shejiyuanze',
            label: '\u8BBE\u8BA1\u539F\u5219',
            children: [
              {
                value: 'yizhi',
                label: '\u4E00\u81F4',
              },
              {
                value: 'fankui',
                label: '\u53CD\u9988',
              },
              {
                value: 'xiaolv',
                label: '\u6548\u7387',
              },
              {
                value: 'kekong',
                label: '\u53EF\u63A7',
              },
            ],
          },
          {
            value: 'daohang',
            label: '\u5BFC\u822A',
            children: [
              {
                value: 'cexiangdaohang',
                label: '\u4FA7\u5411\u5BFC\u822A',
              },
              {
                value: 'dingbudaohang',
                label: '\u9876\u90E8\u5BFC\u822A',
              },
            ],
          },
        ],
      },
      {
        value: 'zujian',
        label: '\u7EC4\u4EF6',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout \u5E03\u5C40',
              },
              {
                value: 'color',
                label: 'Color \u8272\u5F69',
              },
              {
                value: 'typography',
                label: 'Typography \u5B57\u4F53',
              },
              {
                value: 'icon',
                label: 'Icon \u56FE\u6807',
              },
              {
                value: 'button',
                label: 'Button \u6309\u94AE',
              },
            ],
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio \u5355\u9009\u6846',
              },
              {
                value: 'checkbox',
                label: 'Checkbox \u590D\u9009\u6846',
              },
              {
                value: 'input',
                label: 'Input \u8F93\u5165\u6846',
              },
              {
                value: 'input-number',
                label: 'InputNumber \u8BA1\u6570\u5668',
              },
              {
                value: 'select',
                label: 'Select \u9009\u62E9\u5668',
              },
              {
                value: 'cascader',
                label: 'Cascader \u7EA7\u8054\u9009\u62E9\u5668',
              },
              {
                value: 'switch',
                label: 'Switch \u5F00\u5173',
              },
              {
                value: 'slider',
                label: 'Slider \u6ED1\u5757',
              },
              {
                value: 'time-picker',
                label: 'TimePicker \u65F6\u95F4\u9009\u62E9\u5668',
              },
              {
                value: 'date-picker',
                label: 'DatePicker \u65E5\u671F\u9009\u62E9\u5668',
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668',
              },
              {
                value: 'upload',
                label: 'Upload \u4E0A\u4F20',
              },
              {
                value: 'rate',
                label: 'Rate \u8BC4\u5206',
              },
              {
                value: 'form',
                label: 'Form \u8868\u5355',
              },
            ],
          },
          {
            value: 'data',
            label: 'Data',
            children: [
              {
                value: 'table',
                label: 'Table \u8868\u683C',
              },
              {
                value: 'tag',
                label: 'Tag \u6807\u7B7E',
              },
              {
                value: 'progress',
                label: 'Progress \u8FDB\u5EA6\u6761',
              },
              {
                value: 'tree',
                label: 'Tree \u6811\u5F62\u63A7\u4EF6',
              },
              {
                value: 'pagination',
                label: 'Pagination \u5206\u9875',
              },
              {
                value: 'badge',
                label: 'Badge \u5FBD\u7AE0',
              },
            ],
          },
          {
            value: 'notice',
            label: 'Notice',
            children: [
              {
                value: 'alert',
                label: 'Alert \u8B66\u544A',
              },
              {
                value: 'loading',
                label: 'Loading \u52A0\u8F7D',
              },
              {
                value: 'message',
                label: 'Message \u6D88\u606F\u63D0\u793A',
              },
              {
                value: 'message-box',
                label: 'MessageBox \u5F39\u6846',
              },
              {
                value: 'notification',
                label: 'Notification \u901A\u77E5',
              },
            ],
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'menu',
                label: 'Menu \u5BFC\u822A\u83DC\u5355',
              },
              {
                value: 'tabs',
                label: 'Tabs \u6807\u7B7E\u9875',
              },
              {
                value: 'breadcrumb',
                label: 'Breadcrumb \u9762\u5305\u5C51',
              },
              {
                value: 'dropdown',
                label: 'Dropdown \u4E0B\u62C9\u83DC\u5355',
              },
              {
                value: 'steps',
                label: 'Steps \u6B65\u9AA4\u6761',
              },
            ],
          },
          {
            value: 'others',
            label: 'Others',
            children: [
              {
                value: 'dialog',
                label: 'Dialog \u5BF9\u8BDD\u6846',
              },
              {
                value: 'tooltip',
                label: 'Tooltip \u6587\u5B57\u63D0\u793A',
              },
              {
                value: 'popover',
                label: 'Popover \u5F39\u51FA\u6846',
              },
              {
                value: 'card',
                label: 'Card \u5361\u7247',
              },
              {
                value: 'carousel',
                label: 'Carousel \u8D70\u9A6C\u706F',
              },
              {
                value: 'collapse',
                label: 'Collapse \u6298\u53E0\u9762\u677F',
              },
            ],
          },
        ],
      },
      {
        value: 'ziyuan',
        label: '\u8D44\u6E90',
        children: [
          {
            value: 'axure',
            label: 'Axure Components',
          },
          {
            value: 'sketch',
            label: 'Sketch Templates',
          },
          {
            value: 'jiaohu',
            label: '\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863',
          },
        ],
      },
    ])
    const hlTree = ref(null)
    const selector2 = ref(null)

    const removeTag = tag => {
      treeNodes.value = treeNodes.value.filter(n => n !== tag.text)
      hlTree.value.setCheckedNodes(treeNodes.value)
    }
    const clearTags = () => {
      treeNodes.value = []
      hlTree.value.setCheckedNodes(treeNodes.value)
    }
    const filterNode = (value, data) => {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
    const handleTreeInput = val => {
      hlTree.value.filter(val)
    }
    const chooseTree = () => {
      treeNodes.value = hlTree.value.getCheckedNodes()
      selector2.value.setValue(treeNodes.value)
    }

    return {
      treeNodes,
      options,
      hlTree,
      selector2,
      removeTag,
      clearTags,
      filterNode,
      handleTreeInput,
      chooseTree,
    }
  },
})
<\/script>
`)],-1),Fu=a("h2",{id:"biao-ge-shi-li"},[a("a",{class:"header-anchor",href:"#biao-ge-shi-li"}),P(" \u8868\u683C\u793A\u4F8B")],-1),vu=a("div",null,[a("p",null,"\u4E0B\u62C9\u9009\u62E9\u5668\u914D\u5408\u8868\u683C\u5B9E\u73B0\u8868\u683C\u9009\u62E9\u3002")],-1),bu=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-row align="center">
    <hl-col span="col-md-12 col-lg-10">
      <p class="m-b-sm">\u4E0B\u62C9\u8868\u683C\u591A\u9009</p>
      <hl-selector
        ref="selectorTable"
        clearable
        block
        multiple
        @remove-tag="handleTableInput"
        @clear="handleTableInput('')"
      >
        <template #prefix>
          <hl-icon><two-point /></hl-icon>
        </template>
        <hl-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
          <hl-table-column type="selection" width="55" />
          <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
          <hl-table-column prop="tel" label="\u7535\u8BDD" width="120" show-overflow-tooltip />
        </hl-table>
      </hl-selector>
    </hl-col>
    <hl-col span="col-md-12 col-lg-10" />
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        name: '\u738B\u5C0F\u864E',
        tel: '16787812234',
      },
      {
        name: '\u738B2\u864E',
        tel: '17787812234',
      },
      {
        name: '\u738B3\u864E',
        tel: '18787812234',
      },
      {
        name: '\u738B4\u864E',
        tel: '19787812234',
      },
      {
        name: '\u738B5\u864E',
        tel: '10787812234',
      },
      {
        name: '\u738B6\u864E',
        tel: '11787812234',
      },
      {
        name: '\u738B7\u864E',
        tel: '12787812234',
      },
    ])
    const multipleSelection = ref([])
    const multipleTable = ref(null)
    const selectorTable = ref(null)

    const handleSelectionChange = val => {
      multipleSelection.value = val
      selectorTable.value.setValue(multipleSelection.value.map(s => s.name))
    }
    const handleTableInput = tag => {
      if (tag === '') {
        multipleTable.value.clearSelection()
      } else {
        multipleTable.value.toggleRowSelection(tableData.value.find(d => d.name === tag.text))
      }
    }

    return {
      tableData,
      multipleSelection,
      multipleTable,
      selectorTable,
      handleSelectionChange,
      handleTableInput,
    }
  },
})
<\/script>
`)],-1),Eu=a("h2",{id:"zi-ding-yi-shi-pin-yi-ji-tu-pian-lie-biao"},[a("a",{class:"header-anchor",href:"#zi-ding-yi-shi-pin-yi-ji-tu-pian-lie-biao"}),P(" \u81EA\u5B9A\u4E49\u89C6\u9891\u4EE5\u53CA\u56FE\u7247\u5217\u8868")],-1),_u=a("div",null,[a("p",null,"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9009\u62E9\u5185\u5BB9\uFF0C\u4E0B\u9762\u4E00\u56FE\u7247\u4EE5\u53CA\u89C6\u9891\u4E3A\u4F8B\u3002")],-1),Bu=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-row align="center" gap="var(--lg)">
    <hl-col span="col-md-12 col-lg-10">
      <p class="m-b-sm">\u81EA\u5B9A\u4E49\u591A\u9009Icon</p>
      <hl-selector
        ref="selector3"
        clearable
        block
        multiple
        @remove-tag="removeIcon"
        @clear="clearIcons"
      >
        <ul ref="selector3Dom" class="icon-list clearfix selector-content" style="width:300px" @click="selectIcon">
          <li title="\u{1F600}\u7B11\u563B\u563B"><span>\u{1F600}</span></li>
          <li title="\u{1F601}\u7B11\u563B\u563B\u7684\u8138\uFF0C\u542B\u7B11\u7684\u773C\u775B"><span>\u{1F601}</span></li>
          <li title="\u{1F602}\u8138\u4E0A\u5E26\u7740\u559C\u60A6\u7684\u6CEA\u6C34"><span>\u{1F602}</span></li>
          <li title="\u{1F603}\u5F00\u53E3\u7B11\u8138"><span>\u{1F603}</span></li>
          <li title="\u{1F604}\u5F00\u53E3\u7B11\u8138\u548C\u5FAE\u7B11\u7684\u773C\u775B"><span>\u{1F604}</span></li>
          <li title="\u{1F605}\u7B11\u8138\u6DCC\u51B7\u6C57"><span>\u{1F605}</span></li>
          <li title="\u{1F606}\u5F00\u53E3\u7B11\u7D27\u95ED\u7684\u773C\u775B"><span>\u{1F606}</span></li>
          <li title="\u{1F609}\u7728\u773C\u8868\u60C5"><span>\u{1F609}</span></li>
          <li title="\u{1F60A}\u9762\u5E26\u5FAE\u7B11\u7684\u773C\u775B"><span>\u{1F60A}</span></li>
          <li title="\u{1F60B}\u54C1\u5C1D\u7F8E\u5473\u98DF\u7269\u8868\u60C5"><span>\u{1F60B}</span></li>
          <li title="\u{1F60E}\u592A\u9633\u955C\u7B11\u8138"><span>\u{1F60E}</span></li>
          <li title="\u{1F60D}\u9762\u5E26\u5FC3\u5F62\u773C\u775B"><span>\u{1F60D}</span></li>
          <li title="\u{1F618}\u98DE\u543B\u8868\u60C5"><span>\u{1F618}</span></li>
          <li title="\u{1F617}\u4EB2\u543B\u8868\u60C5"><span>\u{1F617}</span></li>
          <li title="\u{1F619}\u542B\u7B11\u4EB2\u543B\u8868\u60C5"><span>\u{1F619}</span></li>
          <li title="\u{1F61A}\u95ED\u773C\u4EB2\u543B\u8868\u60C5"><span>\u{1F61A}</span></li>
          <li title="\u263A\u7B11\u8138"><span>\u263A</span></li>
          <li title="\u{1F607}\u5149\u73AF\u7B11\u8138"><span>\u{1F607}</span></li>
          <li title="\u{1F610}\u4E2D\u6027\u9762"><span>\u{1F610}</span></li>
          <li title="\u{1F611}\u9762\u65E0\u8868\u60C5"><span>\u{1F611}</span></li>
          <li title="\u{1F636}\u6CA1\u6709\u5634\u7684\u8138"><span>\u{1F636}</span></li>
          <li><span>\u{1F60F}</span></li>
          <li><span>\u{1F623}</span></li>
          <li><span>\u{1F625}</span></li>
          <li><span>\u{1F62E}</span></li>
          <li><span>\u{1F62F}</span></li>
          <li title="\u{1F62A}\u56F0"><span>\u{1F62A}</span></li>
          <li><span>\u{1F62B}</span></li>
          <li><span>\u{1F634}</span></li>
          <li title="\u{1F60C}\u5B89\u5FC3"><span>\u{1F60C}</span></li>
          <li title="\u{1F61B}\u5410\u820C\u5934"><span>\u{1F61B}</span></li>
          <li><span>\u{1F61C}</span></li>
          <li><span>\u{1F61D}</span></li>
          <li><span>\u{1F612}</span></li>
          <li><span>\u{1F613}</span></li>
          <li><span>\u{1F614}</span></li>
          <li><span>\u{1F615}</span></li>
          <li title="\u{1F632}\u60CA\u8BB6"><span>\u{1F632}</span></li>
          <li title="\u{1F637}\u6234\u53E3\u7F69"><span>\u{1F637}</span></li>
          <li title="\u{1F616}\u88AB\u6253\u8D25"><span>\u{1F616}</span></li>
          <li><span>\u{1F61E}</span></li>
          <li><span>\u{1F61F}</span></li>
          <li title="\u{1F624}\u9762\u5E26\u80DC\u5229"><span>\u{1F624}</span></li>
          <li title="\u{1F622}\u54ED\u6CE3\u7684\u8138"><span>\u{1F622}</span></li>
          <li title="\u{1F62D}\u5927\u58F0\u54ED\u6CE3\u7684\u8138"><span>\u{1F62D}</span></li>
          <li title="\u{1F626}\u5F20\u5634\u54ED"><span>\u{1F626}</span></li>
          <li title="\u{1F627}\u75DB\u82E6"><span>\u{1F627}</span></li>
          <li title="\u{1F628}\u6050\u60E7"><span>\u{1F628}</span></li>
          <li><span>\u{1F62C}</span></li>
          <li title="\u{1F630}\u6DCC\u51B7\u6C57"><span>\u{1F630}</span></li>
          <li title="\u{1F631}\u5C16\u53EB\u6050\u60E7"><span>\u{1F631}</span></li>
          <li title="\u{1F633}\u7EA2\u6251\u6251\u7684\u8138\u86CB"><span>\u{1F633}</span></li>
          <li title="\u{1F635}\u6655"><span>\u{1F635}</span></li>
          <li><span>\u{1F621}</span></li>
          <li><span>\u{1F620}</span></li>
          <li><span>\u{1F608}</span></li>
          <li><span>\u{1F47F}</span></li>
          <li title="\u{1F479}\u65E5\u672C\u98DF\u4EBA\u9B54"><span>\u{1F479}</span></li>
          <li><span>\u{1F47A}</span></li>
          <li><span>\u{1F480}</span></li>
          <li><span>\u2620</span></li>
          <li><span>\u{1F47B}</span></li>
          <li><span>\u{1F47D}</span></li>
        </ul>
        <template #tag="{ tag }">
          <span style="width: 22px" v-html="tag.text"></span>
        </template>
      </hl-selector>
    </hl-col>
    <hl-col span="col-md-12 col-lg-10">
      <p class="m-b-sm">\u81EA\u5B9A\u4E49\u591A\u9009\u89C6\u9891</p>
      <hl-selector
        ref="selector4"
        clearable
        block
        multiple
        @remove-tag="removeVideo"
        @clear="clearVideos"
      >
        <div ref="selector4Dom" class="selector-content video-list clearfix" style="width:300px">
          <video
            v-for="url in videoUrls"
            :key="url"
            width="120"
            height="100"
            :src="url"
            @click.stop="chooseVideo(url)"
          ></video>
        </div>
        <template #tag="{ tag }">
          <video width="100" height="100" style="object-fit:cover" :src="tag.text" controls="controls"></video>
        </template>
      </hl-selector>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const icons = ref([])
    const videos = ref([])
    const videoUrls = ref([
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
      'https://v-cdn.zjol.com.cn/276998.mp4',
      'https://v-cdn.zjol.com.cn/277003.mp4',
      'https://v-cdn.zjol.com.cn/277000.mp4',
      'https://v-cdn.zjol.com.cn/277001.mp4',
      'https://v-cdn.zjol.com.cn/277002.mp4',
    ])
    const selector3 = ref(null)
    const selector4 = ref(null)

    const selectIcon = evt => {
      console.log(evt)
      if (evt.target.tagName.toUpperCase() === 'SPAN') {
        if (!icons.value.includes(evt.target.innerHTML)) {
          icons.value.push(evt.target.innerHTML)
        }
        selector3.value.setValue(icons.value)
      }
    }
    const chooseIcon = name => {
      if (!icons.value.includes(name)) {
        icons.value.push(name)
      }
      selector3.value.setValue(icons.value)
    }
    const clearIcons = () => {
      icons.value = []
    }
    const removeIcon = tag => {
      icons.value = icons.value.filter(i => i !== tag.text)
    }
    const chooseVideo = name => {
      if (!videos.value.includes(name)) {
        videos.value.push(name)
      }
      selector4.value.setValue(videos.value)
    }
    const clearVideos = () => {
      videos.value = []
    }
    const removeVideo = tag => {
      videos.value = videos.value.filter(i => i !== tag.text)
    }

    return {
      icons,
      videos,
      videoUrls,
      selector3,
      selector4,
      selectIcon,
      chooseIcon,
      clearIcons,
      removeIcon,
      chooseVideo,
      clearVideos,
      removeVideo,
    }
  },
})
<\/script>
`)],-1),mu=tu('<div class="doc-tip"><p>\u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6\u9700\u8981\u81EA\u5B9A\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u4F1A\u6709\u4E00\u4E2A\u6700\u5C0F\u5BBD\u5EA6\u3002\u4F46\u53EF\u4EE5\u7528 resize \u4E8B\u4EF6\u53C2\u6570\u4E2D\u7684 input \u5BBD\u5EA6\u4E3A\u53C2\u8003\u503C\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u56FA\u5B9A\u5BBD\u5EA6\u3002</p></div><div class="doc-tip"><p>\u81EA\u5B9A\u4E49 tag slot \u53C2\u6570\u4E3A{ tag }\uFF0Ctag \u6570\u636E\u7C7B\u578B\u4E3A: <code>{key: string, text: unknown}</code>\u3002\u5F53 tag \u6298\u53E0\u65F6\uFF0Ckey \u503C\u4E3A&#39;-1&#39;\uFF1B\u5176\u4F59 tag key \u503C\u4E3A\u968F\u673A\u6570\u5B57\u3002text \u503C\u4E3A setValue \u65B9\u6CD5\u4F20\u5165\u7684\u4EFB\u610F\u53C2\u6570\u3002</p></div><div class="doc-tip"><p>\u9009\u62E9\u5668\u5E76\u4E0D\u8D1F\u8D23\u5904\u7406 Form \u8868\u5355\u7684\u9A8C\u8BC1\u4E8B\u4EF6\uFF0C\u9700\u7528\u6237\u81EA\u5B9A\u4E49\u5904\u7406</p></div><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>md / lg / xs</td><td>md</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>clearable</td><td>\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-all-levels</td><td>\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>collapse-tags</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0 Tag</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>separator</td><td>\u9009\u9879\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u659C\u6760&#39; / &#39;</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-class</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>block</td><td>\u662F\u5426\u62C9\u4F38\u81F3\u7236\u5BB9\u5668\u5BBD\u5EA6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>input-style</td><td>input \u5143\u7D20\u7684 style</td><td>object</td><td>-</td><td>{}</td></tr><tr><td>placement</td><td>\u4E0B\u62C9\u6846\u5F39\u51FA\u4F4D\u7F6E</td><td>string</td><td>\u53C2\u8003 popover</td><td>bottom-start</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u8F93\u5165\u6846</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5F53\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5F53\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>input</td><td>\u53EF\u641C\u7D22\u65F6\u7528\u6237\u8F93\u5165\u5185\u5BB9</td><td>\u8F93\u5165\u7684\u5185\u5BB9</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false</td></tr><tr><td>popper-visible</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0\u65F6\u89E6\u53D1\uFF0C\u540E\u4E8E visible-change \u89E6\u53D1</td><td></td></tr><tr><td>remove-tag</td><td>\u5728\u591A\u9009\u6A21\u5F0F\u4E0B\uFF0C\u79FB\u9664 Tag \u65F6\u89E6\u53D1</td><td>\u79FB\u9664\u7684 Tag \u5BF9\u5E94\u7684\u8282\u70B9\u7684\u503C</td></tr><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u9664 icon \u65F6\u89E6\u53D1</td><td></td></tr><tr><td>resize</td><td>\u66F4\u65B0\u5F39\u6846\u6837\u5F0F\u65F6\u89E6\u53D1</td><td>\u5185\u90E8 input \u6846\u8282\u70B9</td></tr><tr><td>after-leave</td><td>\u5F39\u6846\u5173\u95ED\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>keyboard-down</td><td>\u70B9\u51FB\u952E\u76D8\u5411\u4E0B\u7BAD\u5934\u65F6\u89E6\u53D1\uFF0C\u53EF\u4EE5\u5728\u8FD9\u4E2A\u4E8B\u4EF6\u4E2D\u5BF9\u4E0B\u62C9\u6846\u4E2D\u7684\u67D0\u4E2A\u8FDB\u884C focus</td><td></td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>setValue</td><td>\u8BBE\u7F6E\u9009\u62E9\u5668\u5185\u5BB9</td><td>val \u53EF\u4EE5\u4E3A\u4EFB\u610F\u7C7B\u578B\u6216\u8005\u4EFB\u610F\u6570\u7EC4\u7C7B\u578B\u3002\u4E3A\u6570\u7EC4\u65F6\uFF0C\u81EA\u52A8\u5207\u6362\u6210\u591A\u9009\u6A21\u5F0F</td></tr><tr><td>togglePopperVisible</td><td>\u5207\u6362\u4E0B\u62C9\u6846\u663E\u793A\u6216\u8005\u9690\u85CF</td><td>visible\uFF08true/false\uFF09\uFF0C\u53EF\u9009</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</td></tr><tr><td>tag</td><td>\u81EA\u5B9A\u4E49\u591A\u9009 tag \u663E\u793A\uFF0C\u53C2\u6570\u4E3A{ tag }\uFF0CsetValue \u4F20\u5165\u7684\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u81EA\u5B9A\u4E49\u524D\u7F00</td></tr></tbody></table>',11);function Cu(u,l,e,o,T,k){const B=N("hl-demo0"),v=N("demo-block"),g=N("hl-demo1"),b=N("hl-demo2"),d=N("hl-demo3"),c=N("right-nav");return uu(),eu(lu,null,[a("section",null,[nu,su,iu,D(v,{fs:""},{source:_(()=>[D(B)]),highlight:_(()=>[cu]),default:_(()=>[du]),_:1}),ru,D(v,{fs:""},{source:_(()=>[D(g)]),highlight:_(()=>[hu]),default:_(()=>[pu]),_:1}),Fu,D(v,{fs:""},{source:_(()=>[D(b)]),highlight:_(()=>[bu]),default:_(()=>[vu]),_:1}),Eu,D(v,{fs:""},{source:_(()=>[D(d)]),highlight:_(()=>[Bu]),default:_(()=>[_u]),_:1}),mu]),D(c)],64)}var xe=au(ou,[["render",Cu]]);export{xe as default};
