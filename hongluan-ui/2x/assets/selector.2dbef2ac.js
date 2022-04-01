var Qu=Object.defineProperty;var R=Object.getOwnPropertySymbols;var Xu=Object.prototype.hasOwnProperty,Ju=Object.prototype.propertyIsEnumerable;var L=(l,a,u)=>a in l?Qu(l,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[a]=u,P=(l,a)=>{for(var u in a||(a={}))Xu.call(a,u)&&L(l,u,a[u]);if(R)for(var u of R(a))Ju.call(a,u)&&L(l,u,a[u]);return l};import{F as I,L as qu,W as Gu,Q as n,X as D,P as B,a2 as Ku,aJ as x,M as j,o as Yu}from"./vue.fdea90c3.js";import{_ as Zu}from"./index.70fcd2c0.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const ue={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:l,resolveComponent:a,createVNode:u,withCtx:e,normalizeStyle:k,openBlock:T,createBlock:m}=x,v=l("p",{class:"m-b-sm"},"\u4E0B\u62C9\u6811\u5355\u9009+\u8FC7\u6EE4",-1);function f(o,p){const s=a("two-point"),d=a("hl-icon"),C=a("hl-tree"),h=a("hl-selector"),F=a("hl-col"),A=a("hl-row");return T(),m(A,{align:"items-center"},{default:e(()=>[u(F,{span:"col-md-12 col-lg-10"},{default:e(()=>[v,u(h,{ref:"selector1",filterable:"",clearable:"",block:"",onInput:o.handleTreeInput,onClear:p[0]||(p[0]=E=>o.handleTreeInput("")),onResize:o.resize},{prefix:e(()=>[u(d,null,{default:e(()=>[u(s)]),_:1})]),default:e(()=>[u(C,{ref:"hlTreeSingle",style:k(o.treeStyle),"node-key":"value",data:o.options,"filter-node-method":o.filterNode,class:"p-md",onNodeClick:o.clickTree},null,8,["style","data","filter-node-method","onNodeClick"])]),_:1},8,["onInput","onResize"])]),_:1}),u(F,{span:"col-md-12 col-lg-10"})]),_:1})}const{defineComponent:_,ref:r}=x,i=_({setup(){const o=r({}),p=r([{value:"zhinan",label:"\u6307\u5357",children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}]),s=r(null),d=r(null);return{selector1:s,hlTreeSingle:d,treeStyle:o,options:p,resize:({offsetWidth:E})=>{o.value.width=E+"px"},clickTree:E=>{s.value.setValue(E.label),d.value.filter("")},filterNode:(E,g)=>E?g.label.indexOf(E)!==-1:!0,handleTreeInput:E=>{d.value.filter(E)}}}});return P({render:f},i)}(),"hl-demo1":function(){const{createElementVNode:l,resolveComponent:a,createVNode:u,withCtx:e,toDisplayString:k,openBlock:T,createBlock:m}=x,v=l("p",{class:"m-b-sm"},"\u4E0B\u62C9\u6811\u591A\u9009",-1);function f(o,p){const s=a("hl-tree"),d=a("hl-scrollbar"),C=a("hl-selector"),h=a("hl-col"),F=a("hl-row");return T(),m(F,{align:"items-center"},{default:e(()=>[u(h,{span:"col-md-12 col-lg-10"},{default:e(()=>[v,u(C,{ref:"selector2",clearable:"",filterable:"",block:"",multiple:"",onInput:o.handleTreeInput,onRemoveTag:o.removeTag,onClear:o.clearTags},{tag:e(({tag:A})=>[l("span",null,k(A.text.label),1)]),default:e(()=>[u(d,null,{default:e(()=>[u(s,{ref:"hlTree","node-key":"value","show-checkbox":"",style:{width:"300px","max-height":"400px"},data:o.options,"filter-node-method":o.filterNode,onCheckChange:o.chooseTree},null,8,["data","filter-node-method","onCheckChange"])]),_:1})]),_:1},8,["onInput","onRemoveTag","onClear"])]),_:1}),u(h,{span:"col-md-12 col-lg-10"})]),_:1})}const{defineComponent:_,ref:r}=x,i=_({setup(){const o=r([]),p=r([{value:"zhinan",label:"\u6307\u5357",children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}]),s=r(null),d=r(null);return{treeNodes:o,options:p,hlTree:s,selector2:d,removeTag:g=>{o.value=o.value.filter(S=>S!==g.text),s.value.setCheckedNodes(o.value)},clearTags:()=>{o.value=[],s.value.setCheckedNodes(o.value)},filterNode:(g,S)=>g?S.label.indexOf(g)!==-1:!0,handleTreeInput:g=>{s.value.filter(g)},chooseTree:()=>{o.value=s.value.getCheckedNodes(),d.value.setValue(o.value)}}}});return P({render:f},i)}(),"hl-demo2":function(){const{createElementVNode:l,resolveComponent:a,createVNode:u,withCtx:e,openBlock:k,createBlock:T}=x,m=l("p",{class:"m-b-sm"},"\u4E0B\u62C9\u8868\u683C\u591A\u9009",-1);function v(i,o){const p=a("two-point"),s=a("hl-icon"),d=a("hl-table-column"),C=a("hl-table"),h=a("hl-selector"),F=a("hl-col"),A=a("hl-row");return k(),T(A,{align:"items-center"},{default:e(()=>[u(F,{span:"col-md-12 col-lg-10"},{default:e(()=>[m,u(h,{ref:"selectorTable",clearable:"",block:"",multiple:"",onRemoveTag:i.handleTableInput,onClear:o[0]||(o[0]=E=>i.handleTableInput(""))},{prefix:e(()=>[u(s,null,{default:e(()=>[u(p)]),_:1})]),default:e(()=>[u(C,{ref:"multipleTable",data:i.tableData,"tooltip-effect":"dark",onSelectionChange:i.handleSelectionChange},{default:e(()=>[u(d,{type:"selection",width:"55"}),u(d,{prop:"name",label:"\u59D3\u540D",width:"120"}),u(d,{prop:"tel",label:"\u7535\u8BDD",width:"120","show-overflow-tooltip":""})]),_:1},8,["data","onSelectionChange"])]),_:1},8,["onRemoveTag"])]),_:1}),u(F,{span:"col-md-12 col-lg-10"})]),_:1})}const{defineComponent:f,ref:_}=x,r=f({setup(){const i=_([{name:"\u738B\u5C0F\u864E",tel:"16787812234"},{name:"\u738B2\u864E",tel:"17787812234"},{name:"\u738B3\u864E",tel:"18787812234"},{name:"\u738B4\u864E",tel:"19787812234"},{name:"\u738B5\u864E",tel:"10787812234"},{name:"\u738B6\u864E",tel:"11787812234"},{name:"\u738B7\u864E",tel:"12787812234"}]),o=_([]),p=_(null),s=_(null);return{tableData:i,multipleSelection:o,multipleTable:p,selectorTable:s,handleSelectionChange:h=>{o.value=h,s.value.setValue(o.value.map(F=>F.name))},handleTableInput:h=>{h===""?p.value.clearSelection():p.value.toggleRowSelection(i.value.find(F=>F.name===h.text))}}}});return P({render:v},r)}(),"hl-demo3":function(){const{createElementVNode:l,resolveComponent:a,withCtx:u,createVNode:e,renderList:k,Fragment:T,openBlock:m,createElementBlock:v,withModifiers:f,createBlock:_}=x,r=l("p",{class:"m-b-sm"},"\u81EA\u5B9A\u4E49\u591A\u9009Icon",-1),i=l("span",null,"\u{1F600}",-1),o=l("span",null,"\u{1F601}",-1),p=l("span",null,"\u{1F602}",-1),s=l("span",null,"\u{1F603}",-1),d=l("span",null,"\u{1F604}",-1),C=l("span",null,"\u{1F605}",-1),h=l("span",null,"\u{1F606}",-1),F=l("span",null,"\u{1F609}",-1),A=l("span",null,"\u{1F60A}",-1),E=l("span",null,"\u{1F60B}",-1),g=l("span",null,"\u{1F60E}",-1),S=l("span",null,"\u{1F60D}",-1),U=l("span",null,"\u{1F618}",-1),O=l("span",null,"\u{1F617}",-1),$=l("span",null,"\u{1F619}",-1),H=l("span",null,"\u{1F61A}",-1),W=l("span",null,"\u{1F607}",-1),Q=l("span",null,"\u{1F610}",-1),X=l("span",null,"\u{1F611}",-1),J=l("span",null,"\u{1F636}",-1),q=l("span",null,"\u{1F60F}",-1),G=l("span",null,"\u{1F623}",-1),K=l("span",null,"\u{1F625}",-1),Y=l("span",null,"\u{1F62E}",-1),Z=l("span",null,"\u{1F62F}",-1),uu=l("span",null,"\u{1F62A}",-1),eu=l("span",null,"\u{1F62B}",-1),lu=l("span",null,"\u{1F634}",-1),tu=l("span",null,"\u{1F60C}",-1),au=l("span",null,"\u{1F61B}",-1),ou=l("span",null,"\u{1F61C}",-1),nu=l("span",null,"\u{1F61D}",-1),su=l("span",null,"\u{1F612}",-1),cu=l("span",null,"\u{1F613}",-1),du=l("span",null,"\u{1F614}",-1),ru=l("span",null,"\u{1F615}",-1),iu=l("span",null,"\u{1F632}",-1),pu=l("span",null,"\u{1F637}",-1),hu=l("span",null,"\u{1F616}",-1),Fu=l("span",null,"\u{1F61E}",-1),bu=l("span",null,"\u{1F61F}",-1),vu=l("span",null,"\u{1F624}",-1),Eu=l("span",null,"\u{1F622}",-1),_u=l("span",null,"\u{1F62D}",-1),mu=l("span",null,"\u{1F626}",-1),Bu=l("span",null,"\u{1F627}",-1),Cu=l("span",null,"\u{1F628}",-1),gu=l("span",null,"\u{1F62C}",-1),fu=l("span",null,"\u{1F630}",-1),Au=l("span",null,"\u{1F631}",-1),Du=l("span",null,"\u{1F633}",-1),ku=l("span",null,"\u{1F635}",-1),Tu=l("span",null,"\u{1F621}",-1),yu=l("span",null,"\u{1F620}",-1),wu=l("span",null,"\u{1F608}",-1),xu=l("span",null,"\u{1F47F}",-1),Nu=l("span",null,"\u{1F479}",-1),Iu=l("span",null,"\u{1F47A}",-1),Su=l("span",null,"\u{1F480}",-1),Vu=l("span",null,"\u2620",-1),zu=l("span",null,"\u{1F47B}",-1),Pu=l("span",null,"\u{1F47D}",-1),ju=["innerHTML"],Mu=l("p",{class:"m-b-sm"},"\u81EA\u5B9A\u4E49\u591A\u9009\u89C6\u9891",-1),Ru={ref:"selector4Dom",class:"selector-content video-list clearfix",style:{width:"300px"}},Lu=["src","onClick"],Uu=["src"];function Ou(c,y){const t=a("hl-col"),N=a("hl-row"),z=a("hl-selector");return m(),_(N,{align:"items-center",gap:"var(--lg)"},{default:u(()=>[e(t,{span:"col-md-12 col-lg-10"},{default:u(()=>[r,e(z,{ref:"selector3",clearable:"",block:"",multiple:"",onRemoveTag:c.removeIcon,onClear:c.clearIcons},{tag:u(({tag:w})=>[l("span",{style:{width:"20px",display:"inline-block","vertical-align":"middle"},innerHTML:w.text},null,8,ju)]),default:u(()=>[e(N,{ref:"selector3Dom",layout:"grid",gap:"var(--md)",class:"p-xl selector-content font-h2",count:"count-8",onClick:c.selectIcon},{default:u(()=>[e(t,{span:"col",title:"\u{1F600}\u7B11\u563B\u563B"},{default:u(()=>[i]),_:1}),e(t,{span:"col",title:"\u{1F601}\u7B11\u563B\u563B\u7684\u8138\uFF0C\u542B\u7B11\u7684\u773C\u775B"},{default:u(()=>[o]),_:1}),e(t,{span:"col",title:"\u{1F602}\u8138\u4E0A\u5E26\u7740\u559C\u60A6\u7684\u6CEA\u6C34"},{default:u(()=>[p]),_:1}),e(t,{span:"col",title:"\u{1F603}\u5F00\u53E3\u7B11\u8138"},{default:u(()=>[s]),_:1}),e(t,{span:"col",title:"\u{1F604}\u5F00\u53E3\u7B11\u8138\u548C\u5FAE\u7B11\u7684\u773C\u775B"},{default:u(()=>[d]),_:1}),e(t,{span:"col",title:"\u{1F605}\u7B11\u8138\u6DCC\u51B7\u6C57"},{default:u(()=>[C]),_:1}),e(t,{span:"col",title:"\u{1F606}\u5F00\u53E3\u7B11\u7D27\u95ED\u7684\u773C\u775B"},{default:u(()=>[h]),_:1}),e(t,{span:"col",title:"\u{1F609}\u7728\u773C\u8868\u60C5"},{default:u(()=>[F]),_:1}),e(t,{span:"col",title:"\u{1F60A}\u9762\u5E26\u5FAE\u7B11\u7684\u773C\u775B"},{default:u(()=>[A]),_:1}),e(t,{span:"col",title:"\u{1F60B}\u54C1\u5C1D\u7F8E\u5473\u98DF\u7269\u8868\u60C5"},{default:u(()=>[E]),_:1}),e(t,{span:"col",title:"\u{1F60E}\u592A\u9633\u955C\u7B11\u8138"},{default:u(()=>[g]),_:1}),e(t,{span:"col",title:"\u{1F60D}\u9762\u5E26\u5FC3\u5F62\u773C\u775B"},{default:u(()=>[S]),_:1}),e(t,{span:"col",title:"\u{1F618}\u98DE\u543B\u8868\u60C5"},{default:u(()=>[U]),_:1}),e(t,{span:"col",title:"\u{1F617}\u4EB2\u543B\u8868\u60C5"},{default:u(()=>[O]),_:1}),e(t,{span:"col",title:"\u{1F619}\u542B\u7B11\u4EB2\u543B\u8868\u60C5"},{default:u(()=>[$]),_:1}),e(t,{span:"col",title:"\u{1F61A}\u95ED\u773C\u4EB2\u543B\u8868\u60C5"},{default:u(()=>[H]),_:1}),e(t,{span:"col",title:"\u{1F607}\u5149\u73AF\u7B11\u8138"},{default:u(()=>[W]),_:1}),e(t,{span:"col",title:"\u{1F610}\u4E2D\u6027\u9762"},{default:u(()=>[Q]),_:1}),e(t,{span:"col",title:"\u{1F611}\u9762\u65E0\u8868\u60C5"},{default:u(()=>[X]),_:1}),e(t,{span:"col",title:"\u{1F636}\u6CA1\u6709\u5634\u7684\u8138"},{default:u(()=>[J]),_:1}),e(t,{span:"col"},{default:u(()=>[q]),_:1}),e(t,{span:"col"},{default:u(()=>[G]),_:1}),e(t,{span:"col"},{default:u(()=>[K]),_:1}),e(t,{span:"col"},{default:u(()=>[Y]),_:1}),e(t,{span:"col"},{default:u(()=>[Z]),_:1}),e(t,{span:"col",title:"\u{1F62A}\u56F0"},{default:u(()=>[uu]),_:1}),e(t,{span:"col"},{default:u(()=>[eu]),_:1}),e(t,{span:"col"},{default:u(()=>[lu]),_:1}),e(t,{span:"col",title:"\u{1F60C}\u5B89\u5FC3"},{default:u(()=>[tu]),_:1}),e(t,{span:"col",title:"\u{1F61B}\u5410\u820C\u5934"},{default:u(()=>[au]),_:1}),e(t,{span:"col"},{default:u(()=>[ou]),_:1}),e(t,{span:"col"},{default:u(()=>[nu]),_:1}),e(t,{span:"col"},{default:u(()=>[su]),_:1}),e(t,{span:"col"},{default:u(()=>[cu]),_:1}),e(t,{span:"col"},{default:u(()=>[du]),_:1}),e(t,{span:"col"},{default:u(()=>[ru]),_:1}),e(t,{span:"col",title:"\u{1F632}\u60CA\u8BB6"},{default:u(()=>[iu]),_:1}),e(t,{span:"col",title:"\u{1F637}\u6234\u53E3\u7F69"},{default:u(()=>[pu]),_:1}),e(t,{span:"col",title:"\u{1F616}\u88AB\u6253\u8D25"},{default:u(()=>[hu]),_:1}),e(t,{span:"col"},{default:u(()=>[Fu]),_:1}),e(t,{span:"col"},{default:u(()=>[bu]),_:1}),e(t,{span:"col",title:"\u{1F624}\u9762\u5E26\u80DC\u5229"},{default:u(()=>[vu]),_:1}),e(t,{span:"col",title:"\u{1F622}\u54ED\u6CE3\u7684\u8138"},{default:u(()=>[Eu]),_:1}),e(t,{span:"col",title:"\u{1F62D}\u5927\u58F0\u54ED\u6CE3\u7684\u8138"},{default:u(()=>[_u]),_:1}),e(t,{span:"col",title:"\u{1F626}\u5F20\u5634\u54ED"},{default:u(()=>[mu]),_:1}),e(t,{span:"col",title:"\u{1F627}\u75DB\u82E6"},{default:u(()=>[Bu]),_:1}),e(t,{span:"col",title:"\u{1F628}\u6050\u60E7"},{default:u(()=>[Cu]),_:1}),e(t,{span:"col"},{default:u(()=>[gu]),_:1}),e(t,{span:"col",title:"\u{1F630}\u6DCC\u51B7\u6C57"},{default:u(()=>[fu]),_:1}),e(t,{span:"col",title:"\u{1F631}\u5C16\u53EB\u6050\u60E7"},{default:u(()=>[Au]),_:1}),e(t,{span:"col",title:"\u{1F633}\u7EA2\u6251\u6251\u7684\u8138\u86CB"},{default:u(()=>[Du]),_:1}),e(t,{span:"col",title:"\u{1F635}\u6655"},{default:u(()=>[ku]),_:1}),e(t,{span:"col"},{default:u(()=>[Tu]),_:1}),e(t,{span:"col"},{default:u(()=>[yu]),_:1}),e(t,{span:"col"},{default:u(()=>[wu]),_:1}),e(t,{span:"col"},{default:u(()=>[xu]),_:1}),e(t,{span:"col",title:"\u{1F479}\u65E5\u672C\u98DF\u4EBA\u9B54"},{default:u(()=>[Nu]),_:1}),e(t,{span:"col"},{default:u(()=>[Iu]),_:1}),e(t,{span:"col"},{default:u(()=>[Su]),_:1}),e(t,{span:"col"},{default:u(()=>[Vu]),_:1}),e(t,{span:"col"},{default:u(()=>[zu]),_:1}),e(t,{span:"col"},{default:u(()=>[Pu]),_:1})]),_:1},8,["onClick"])]),_:1},8,["onRemoveTag","onClear"])]),_:1}),e(t,{span:"col-md-12 col-lg-10"},{default:u(()=>[Mu,e(z,{ref:"selector4",clearable:"",block:"",multiple:"",class:"video-tags",onRemoveTag:c.removeVideo,onClear:c.clearVideos},{tag:u(({tag:w})=>[l("video",{width:"100",height:"100",style:{"object-fit":"cover"},src:w.text,controls:"controls"},null,8,Uu)]),default:u(()=>[l("div",Ru,[(m(!0),v(T,null,k(c.videoUrls,w=>(m(),v("video",{key:w,width:"120",height:"100",class:"m-l-sm m-r-sm",src:w,onClick:f(Wu=>c.chooseVideo(w),["stop"])},null,8,Lu))),128))],512)]),_:1},8,["onRemoveTag","onClear"])]),_:1})]),_:1})}const{defineComponent:$u,ref:V}=x,Hu=$u({setup(){const c=V([]),y=V([]),t=V(["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"]),N=V(null),z=V(null);return{icons:c,videos:y,videoUrls:t,selector3:N,selector4:z,selectIcon:b=>{console.log(b),b.target.tagName.toUpperCase()==="SPAN"&&(c.value.includes(b.target.innerHTML)||c.value.push(b.target.innerHTML),N.value.setValue(c.value))},chooseIcon:b=>{c.value.includes(b)||c.value.push(b),N.value.setValue(c.value)},clearIcons:()=>{c.value=[]},removeIcon:b=>{c.value=c.value.filter(M=>M!==b.text)},chooseVideo:b=>{y.value.includes(b)||y.value.push(b),z.value.setValue(y.value)},clearVideos:()=>{y.value=[]},removeVideo:b=>{y.value=y.value.filter(M=>M!==b.text)}}}});return P({render:Ou},Hu)}()}},ee=n("h1",null,"Selector \u9AD8\u7EA7\u9009\u62E9\u5668",-1),le=n("p",null,"Selector \u662F\u4E00\u6B3E\u53EF\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u7684\u4E0B\u62C9\u9009\u62E9\u5668\u3002",-1),te=n("h2",{id:"shu-dan-xuan-shi-li"},[n("a",{class:"header-anchor",href:"#shu-dan-xuan-shi-li"}),j(" \u6811\u5355\u9009\u793A\u4F8B")],-1),ae=n("div",null,[n("p",null,"\u4E0B\u62C9\u9009\u62E9\u5668\u914D\u5408\u6811\u7EC4\u4EF6\u5B9E\u73B0\u4E0B\u62C9\u5355\u9009\u6811\u8282\u70B9\u4EE5\u53CA\u8F93\u5165\u8FC7\u6EE4\u529F\u80FD\u3002")],-1),oe=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-row align="items-center">
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
          <hl-icon>
            <two-point />
          </hl-icon>
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
`)],-1),ne=n("h2",{id:"shu-duo-xuan-shi-li"},[n("a",{class:"header-anchor",href:"#shu-duo-xuan-shi-li"}),j(" \u6811\u591A\u9009\u793A\u4F8B")],-1),se=n("div",null,[n("p",null,"\u4E0B\u62C9\u9009\u62E9\u5668\u914D\u5408\u6811\u7EC4\u4EF6\u5B9E\u73B0\u4E0B\u62C9\u591A\u9009\u6811\u8282\u70B9\u4EE5\u53CA\u8F93\u5165\u8FC7\u6EE4\u529F\u80FD\u3002")],-1),ce=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-row align="items-center">
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
`)],-1),de=n("h2",{id:"biao-ge-shi-li"},[n("a",{class:"header-anchor",href:"#biao-ge-shi-li"}),j(" \u8868\u683C\u793A\u4F8B")],-1),re=n("div",null,[n("p",null,"\u4E0B\u62C9\u9009\u62E9\u5668\u914D\u5408\u8868\u683C\u5B9E\u73B0\u8868\u683C\u9009\u62E9\u3002")],-1),ie=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-row align="items-center">
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
          <hl-icon>
            <two-point />
          </hl-icon>
        </template>
        <hl-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
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
`)],-1),pe=n("h2",{id:"zi-ding-yi-shi-pin-yi-ji-tu-pian-lie-biao"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-shi-pin-yi-ji-tu-pian-lie-biao"}),j(" \u81EA\u5B9A\u4E49\u89C6\u9891\u4EE5\u53CA\u56FE\u7247\u5217\u8868")],-1),he=n("p",null,"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9009\u62E9\u5185\u5BB9\uFF0C\u4E0B\u9762\u4EE5\u56FE\u7247\u548C\u89C6\u9891\u4E3A\u4F8B\u3002",-1),Fe=n("pre",null,[n("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--lg)">
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
        <hl-row
          ref="selector3Dom"
          layout="grid"
          gap="var(--md)"
          class="p-xl selector-content font-h2"
          count="count-8"
          @click="selectIcon"
        >
          <hl-col span="col" title="\u{1F600}\u7B11\u563B\u563B">
            <span>\u{1F600}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F601}\u7B11\u563B\u563B\u7684\u8138\uFF0C\u542B\u7B11\u7684\u773C\u775B">
            <span>\u{1F601}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F602}\u8138\u4E0A\u5E26\u7740\u559C\u60A6\u7684\u6CEA\u6C34">
            <span>\u{1F602}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F603}\u5F00\u53E3\u7B11\u8138">
            <span>\u{1F603}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F604}\u5F00\u53E3\u7B11\u8138\u548C\u5FAE\u7B11\u7684\u773C\u775B">
            <span>\u{1F604}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F605}\u7B11\u8138\u6DCC\u51B7\u6C57">
            <span>\u{1F605}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F606}\u5F00\u53E3\u7B11\u7D27\u95ED\u7684\u773C\u775B">
            <span>\u{1F606}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F609}\u7728\u773C\u8868\u60C5">
            <span>\u{1F609}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F60A}\u9762\u5E26\u5FAE\u7B11\u7684\u773C\u775B">
            <span>\u{1F60A}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F60B}\u54C1\u5C1D\u7F8E\u5473\u98DF\u7269\u8868\u60C5">
            <span>\u{1F60B}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F60E}\u592A\u9633\u955C\u7B11\u8138">
            <span>\u{1F60E}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F60D}\u9762\u5E26\u5FC3\u5F62\u773C\u775B">
            <span>\u{1F60D}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F618}\u98DE\u543B\u8868\u60C5">
            <span>\u{1F618}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F617}\u4EB2\u543B\u8868\u60C5">
            <span>\u{1F617}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F619}\u542B\u7B11\u4EB2\u543B\u8868\u60C5">
            <span>\u{1F619}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F61A}\u95ED\u773C\u4EB2\u543B\u8868\u60C5">
            <span>\u{1F61A}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F607}\u5149\u73AF\u7B11\u8138">
            <span>\u{1F607}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F610}\u4E2D\u6027\u9762">
            <span>\u{1F610}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F611}\u9762\u65E0\u8868\u60C5">
            <span>\u{1F611}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F636}\u6CA1\u6709\u5634\u7684\u8138">
            <span>\u{1F636}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F60F}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F623}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F625}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F62E}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F62F}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F62A}\u56F0">
            <span>\u{1F62A}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F62B}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F634}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F60C}\u5B89\u5FC3">
            <span>\u{1F60C}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F61B}\u5410\u820C\u5934">
            <span>\u{1F61B}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F61C}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F61D}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F612}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F613}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F614}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F615}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F632}\u60CA\u8BB6">
            <span>\u{1F632}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F637}\u6234\u53E3\u7F69">
            <span>\u{1F637}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F616}\u88AB\u6253\u8D25">
            <span>\u{1F616}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F61E}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F61F}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F624}\u9762\u5E26\u80DC\u5229">
            <span>\u{1F624}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F622}\u54ED\u6CE3\u7684\u8138">
            <span>\u{1F622}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F62D}\u5927\u58F0\u54ED\u6CE3\u7684\u8138">
            <span>\u{1F62D}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F626}\u5F20\u5634\u54ED">
            <span>\u{1F626}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F627}\u75DB\u82E6">
            <span>\u{1F627}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F628}\u6050\u60E7">
            <span>\u{1F628}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F62C}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F630}\u6DCC\u51B7\u6C57">
            <span>\u{1F630}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F631}\u5C16\u53EB\u6050\u60E7">
            <span>\u{1F631}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F633}\u7EA2\u6251\u6251\u7684\u8138\u86CB">
            <span>\u{1F633}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F635}\u6655">
            <span>\u{1F635}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F621}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F620}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F608}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F47F}</span>
          </hl-col>
          <hl-col span="col" title="\u{1F479}\u65E5\u672C\u98DF\u4EBA\u9B54">
            <span>\u{1F479}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F47A}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F480}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u2620</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F47B}</span>
          </hl-col>
          <hl-col span="col">
            <span>\u{1F47D}</span>
          </hl-col>
        </hl-row>
        <template #tag="{ tag }">
          <span style="width: 20px;display: inline-block;vertical-align: middle;" v-html="tag.text"></span>
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
        class="video-tags"
        @remove-tag="removeVideo"
        @clear="clearVideos"
      >
        <div ref="selector4Dom" class="selector-content video-list clearfix" style="width:300px">
          <video
            v-for="url in videoUrls"
            :key="url"
            width="120"
            height="100"
            class="m-l-sm m-r-sm"
            :src="url"
            @click.stop="chooseVideo(url)"
          ></video>
        </div>
        <template #tag="{ tag }">
          <video
            width="100"
            height="100"
            style="object-fit:cover"
            :src="tag.text"
            controls="controls"
          ></video>
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
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
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
<style>
.video-tags .hl-tag{
  height: 100%;
}
</style>
`)],-1),be=Yu('<div class="doc-tip"><p>\u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6\u9700\u8981\u81EA\u5B9A\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u4F1A\u6709\u4E00\u4E2A\u6700\u5C0F\u5BBD\u5EA6\u3002\u4F46\u53EF\u4EE5\u7528 resize \u4E8B\u4EF6\u53C2\u6570\u4E2D\u7684 input \u5BBD\u5EA6\u4E3A\u53C2\u8003\u503C\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u56FA\u5B9A\u5BBD\u5EA6\u3002</p></div><div class="doc-tip"><p>\u81EA\u5B9A\u4E49 tag slot \u53C2\u6570\u4E3A{ tag }\uFF0Ctag \u6570\u636E\u7C7B\u578B\u4E3A: <code>{key: string, text: unknown}</code>\u3002\u5F53 tag \u6298\u53E0\u65F6\uFF0Ckey \u503C\u4E3A&#39;-1&#39;\uFF1B\u5176\u4F59 tag key \u503C\u4E3A\u968F\u673A\u6570\u5B57\u3002text \u503C\u4E3A setValue \u65B9\u6CD5\u4F20\u5165\u7684\u4EFB\u610F\u53C2\u6570\u3002</p></div><div class="doc-tip warning"><p>\u9009\u62E9\u5668\u5E76\u4E0D\u8D1F\u8D23\u5904\u7406 Form \u8868\u5355\u7684\u9A8C\u8BC1\u4E8B\u4EF6\uFF0C\u9700\u7528\u6237\u81EA\u5B9A\u4E49\u5904\u7406</p></div><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>md / lg / xs</td><td>md</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>clearable</td><td>\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-all-levels</td><td>\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>collapse-tags</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0 Tag</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>collapse-tags-tooltip</td><td>\u9F20\u6807\u6ED1\u5165\u6298\u53E0Tag\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u6298\u53E0\u7684Tag</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>separator</td><td>\u9009\u9879\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u659C\u6760&#39; / &#39;</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-class</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>block</td><td>\u662F\u5426\u62C9\u4F38\u81F3\u7236\u5BB9\u5668\u5BBD\u5EA6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>input-style</td><td>input \u5143\u7D20\u7684 style</td><td>object</td><td>-</td><td>{}</td></tr><tr><td>placement</td><td>\u4E0B\u62C9\u6846\u5F39\u51FA\u4F4D\u7F6E</td><td>string</td><td>\u53C2\u8003 popover</td><td>bottom-start</td></tr><tr><td>fallback-placements</td><td>\u4E0B\u62C9\u6846\u5F39\u51FA\u88AB\u9009\u4F4D\u7F6E</td><td>array</td><td>\u53C2\u8003 popover</td><td>-</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>4</td></tr><tr><td>popper-append-to-body(deprecated)</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false\u3002\u8BF7\u4F7F\u7528teleported\u5C5E\u6027</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>teleported</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u8F93\u5165\u6846</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>tag-type</td><td>\u6807\u7B7E\u7C7B\u578B</td><td>string</td><td>success/info/warning/danger</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5F53\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5F53\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>input</td><td>\u53EF\u641C\u7D22\u65F6\u7528\u6237\u8F93\u5165\u5185\u5BB9</td><td>\u8F93\u5165\u7684\u5185\u5BB9</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false</td></tr><tr><td>popper-visible</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0\u65F6\u89E6\u53D1\uFF0C\u540E\u4E8E visible-change \u89E6\u53D1</td><td></td></tr><tr><td>remove-tag</td><td>\u5728\u591A\u9009\u6A21\u5F0F\u4E0B\uFF0C\u79FB\u9664 Tag \u65F6\u89E6\u53D1</td><td>\u79FB\u9664\u7684 Tag \u5BF9\u5E94\u7684\u8282\u70B9\u7684\u503C</td></tr><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u9664 icon \u65F6\u89E6\u53D1</td><td></td></tr><tr><td>resize</td><td>\u66F4\u65B0\u5F39\u6846\u6837\u5F0F\u65F6\u89E6\u53D1</td><td>\u5185\u90E8 input \u6846\u8282\u70B9</td></tr><tr><td>after-leave</td><td>\u5F39\u6846\u5173\u95ED\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>keyboard-down</td><td>\u70B9\u51FB\u952E\u76D8\u5411\u4E0B\u7BAD\u5934\u65F6\u89E6\u53D1\uFF0C\u53EF\u4EE5\u5728\u8FD9\u4E2A\u4E8B\u4EF6\u4E2D\u5BF9\u4E0B\u62C9\u6846\u4E2D\u7684\u67D0\u4E2A\u8FDB\u884C focus</td><td></td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>setValue</td><td>\u8BBE\u7F6E\u9009\u62E9\u5668\u5185\u5BB9</td><td>val \u53EF\u4EE5\u4E3A\u4EFB\u610F\u7C7B\u578B\u6216\u8005\u4EFB\u610F\u6570\u7EC4\u7C7B\u578B\u3002\u4E3A\u6570\u7EC4\u65F6\uFF0C\u81EA\u52A8\u5207\u6362\u6210\u591A\u9009\u6A21\u5F0F</td></tr><tr><td>togglePopperVisible</td><td>\u5207\u6362\u4E0B\u62C9\u6846\u663E\u793A\u6216\u8005\u9690\u85CF</td><td>visible\uFF08true/false\uFF09\uFF0C\u53EF\u9009</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</td></tr><tr><td>tag</td><td>\u81EA\u5B9A\u4E49\u591A\u9009 tag \u663E\u793A\uFF0C\u53C2\u6570\u4E3A{ tag }\uFF0CsetValue \u4F20\u5165\u7684\u5185\u5BB9</td></tr><tr><td>collapse-tag</td><td>collapse-tags-tooltip\u4E3A<code>true</code>\u65F6\uFF0C\u81EA\u5B9A\u4E49\u591A\u9009 tag \u5728\u63D0\u793A\u6846\u4E2D\u7684\u663E\u793A\uFF0C\u53C2\u6570\u4E3A{ tag }\uFF0CsetValue \u4F20\u5165\u7684\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u81EA\u5B9A\u4E49\u524D\u7F00</td></tr></tbody></table>',11);function ve(l,a,u,e,k,T){const m=I("hl-demo0"),v=I("demo-block"),f=I("hl-demo1"),_=I("hl-demo2"),r=I("hl-demo3"),i=I("right-nav");return qu(),Gu(Ku,null,[n("section",null,[ee,le,te,D(v,{fs:""},{source:B(()=>[D(m)]),highlight:B(()=>[oe]),default:B(()=>[ae]),_:1}),ne,D(v,{fs:""},{source:B(()=>[D(f)]),highlight:B(()=>[ce]),default:B(()=>[se]),_:1}),de,D(v,{fs:""},{source:B(()=>[D(_)]),highlight:B(()=>[ie]),default:B(()=>[re]),_:1}),pe,he,D(v,{fs:""},{source:B(()=>[D(r)]),highlight:B(()=>[Fe]),_:1}),be]),D(i)],64)}var ye=Zu(ue,[["render",ve]]);export{ye as default};
