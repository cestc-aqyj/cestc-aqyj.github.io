var y=Object.defineProperty;var k=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var _=(t,a,l)=>a in t?y(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,D=(t,a)=>{for(var l in a||(a={}))x.call(a,l)&&_(t,l,a[l]);if(k)for(var l of k(a))T.call(a,l)&&_(t,l,a[l]);return t};import{F as g,L as P,W as w,Q as u,X as s,P as d,a2 as z,aJ as p,M as e,o as N}from"./vue.30e377ec.js";import{_ as S}from"./index.58703c48.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.51d8bafe.js";const j={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:t,resolveComponent:a,createVNode:l,withCtx:r,openBlock:v,createBlock:F}=p,b=t("p",{class:"m-b-sm"},"\u9ED8\u8BA4 click \u89E6\u53D1\u5B50\u83DC\u5355",-1),o=t("p",{class:"m-b-sm"},"hover \u89E6\u53D1\u5B50\u83DC\u5355",-1);function E(n,c){const A=a("hl-cascader"),B=a("hl-col"),m=a("hl-row");return v(),F(m,{align:"items-center",gap:"var(--xl)"},{default:r(()=>[l(B,{span:"md:col-12 lg:col-10"},{default:r(()=>[b,l(A,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=f=>n.value=f),options:n.options,block:"",onChange:n.handleChange},null,8,["modelValue","options","onChange"])]),_:1}),l(B,{span:"md:col-12 lg:col-10"},{default:r(()=>[o,l(A,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=f=>n.value=f),options:n.options,props:n.props,block:"",onChange:n.handleChange},null,8,["modelValue","options","props","onChange"])]),_:1})]),_:1})}const{defineComponent:i,ref:C}=p,h=i({setup(){const n=C([]),c=C({expandTrigger:"hover"}),A=C([{value:"zhinan",label:"\u6307\u5357",children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}]);return{value:n,props:c,options:A,handleChange:m=>{console.log("changed:",m)}}}});return D({render:E},h)}(),"hl-demo1":function(){const{resolveComponent:t,createVNode:a,withCtx:l,openBlock:r,createBlock:v}=p;function F(i,C){const h=t("hl-cascader"),n=t("hl-col"),c=t("hl-row");return r(),v(c,{align:"items-center",gap:"var(--xl)"},{default:l(()=>[a(n,{span:"md:col-12 lg:col-10"},{default:l(()=>[a(h,{options:i.options,block:"",disabled:""},null,8,["options"])]),_:1}),a(n,{span:"md:col-12 lg:col-10"},{default:l(()=>[a(h,{options:i.options,block:""},null,8,["options"])]),_:1})]),_:1})}const{defineComponent:b,ref:o}=p,E=b({setup(){return{options:o([{value:"zhinan",label:"\u6307\u5357",disabled:!0,children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}])}}});return D({render:F},E)}(),"hl-demo2":function(){const{resolveComponent:t,openBlock:a,createBlock:l}=p;function r(o,E){const i=t("hl-cascader");return a(),l(i,{options:o.options,clearable:""},null,8,["options"])}const{defineComponent:v,ref:F}=p,b=v({setup(){return{options:F([{value:"zhinan",label:"\u6307\u5357",disabled:!0,children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}])}}});return D({render:r},b)}(),"hl-demo3":function(){const{resolveComponent:t,openBlock:a,createBlock:l}=p;function r(o,E){const i=t("hl-cascader");return a(),l(i,{options:o.options,"show-all-levels":!1},null,8,["options"])}const{defineComponent:v,ref:F}=p,b=v({setup(){return{options:F([{value:"zhinan",label:"\u6307\u5357",disabled:!0,children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}])}}});return D({render:r},b)}(),"hl-demo4":function(){const{createElementVNode:t,resolveComponent:a,createVNode:l,withCtx:r,openBlock:v,createBlock:F}=p,b=t("p",{class:"m-b-sm"},"\u9ED8\u8BA4\u663E\u793A\u6240\u6709Tag",-1),o=t("p",{class:"m-b-sm"},"\u6298\u53E0\u5C55\u793ATag",-1),E=t("p",{class:"m-b-sm"},"\u6298\u53E0Tag\u5E26\u63D0\u793A",-1);function i(c,A){const B=a("hl-cascader"),m=a("hl-col"),f=a("hl-row");return v(),F(f,{align:"items-left",gap:"var(--xl)"},{default:r(()=>[l(m,{span:"md:col-12"},{default:r(()=>[b,l(B,{options:c.options,props:c.props,"show-all-levels":!1,block:"",clearable:""},null,8,["options","props"])]),_:1}),l(m,{span:"md:col-12"},{default:r(()=>[o,l(B,{options:c.options,props:c.props,block:"","collapse-tags":"",clearable:""},null,8,["options","props"])]),_:1}),l(m,{span:"md:col-12"},{default:r(()=>[E,l(B,{options:c.options,props:c.props,block:"","collapse-tags":"","collapse-tags-tooltip":"",clearable:""},null,8,["options","props"])]),_:1})]),_:1})}const{defineComponent:C,ref:h}=p,n=C({setup(){const c=h({multiple:!0}),A=h([{value:1,label:"\u4E1C\u5357",children:[{value:2,label:"\u4E0A\u6D77",children:[{value:3,label:"\u666E\u9640"},{value:4,label:"\u9EC4\u57D4"},{value:5,label:"\u5F90\u6C47"}]},{value:7,label:"\u6C5F\u82CF",children:[{value:8,label:"\u5357\u4EAC"},{value:9,label:"\u82CF\u5DDE"},{value:10,label:"\u65E0\u9521"}]},{value:12,label:"\u6D59\u6C5F",children:[{value:13,label:"\u676D\u5DDE"},{value:14,label:"\u5B81\u6CE2"},{value:15,label:"\u5609\u5174"}]}]},{value:17,label:"\u897F\u5317",children:[{value:18,label:"\u9655\u897F",children:[{value:19,label:"\u897F\u5B89"},{value:20,label:"\u5EF6\u5B89"}]},{value:21,label:"\u65B0\u7586\u7EF4\u543E\u5C14\u65CF\u81EA\u6CBB\u533A",children:[{value:22,label:"\u4E4C\u9C81\u6728\u9F50"},{value:23,label:"\u514B\u62C9\u739B\u4F9D"}]}]}]);return{props:c,options:A}}});return D({render:i},n)}(),"hl-demo5":function(){const{createElementVNode:t,resolveComponent:a,createVNode:l,withCtx:r,openBlock:v,createBlock:F}=p,b=t("p",{class:"m-b-sm"},"\u5355\u9009\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879",-1),o=t("p",{class:"m-b-sm"},"\u591A\u9009\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879",-1);function E(n,c){const A=a("hl-cascader"),B=a("hl-col"),m=a("hl-row");return v(),F(m,{align:"items-center",gap:"var(--xl)"},{default:r(()=>[l(B,{span:"md:col-12 lg:col-10"},{default:r(()=>[b,l(A,{options:n.options,props:{checkStrictly:!0},block:"",clearable:""},null,8,["options"])]),_:1}),l(B,{span:"md:col-12 lg:col-10"},{default:r(()=>[o,l(A,{options:n.options,props:{multiple:!0,checkStrictly:!0},block:"",clearable:""},null,8,["options"])]),_:1})]),_:1})}const{defineComponent:i,ref:C}=p,h=i({setup(){return{options:C([{value:"zhinan",label:"\u6307\u5357",disabled:!0,children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}])}}});return D({render:E},h)}(),"hl-demo6":function(){const{resolveComponent:t,openBlock:a,createBlock:l}=p;function r(o,E){const i=t("hl-cascader");return a(),l(i,{props:o.props},null,8,["props"])}const{defineComponent:v,ref:F}=p,b=v({setup(){let o=0;return{props:F({lazy:!0,lazyLoad(i,C){const{level:h}=i;setTimeout(()=>{const n=Array.from({length:h+1}).map(c=>({value:++o,label:`\u9009\u9879${o}`,leaf:h>=2}));C(n)},1e3)}})}}});return D({render:r},b)}(),"hl-demo7":function(){const{createElementVNode:t,resolveComponent:a,createVNode:l,withCtx:r,openBlock:v,createBlock:F}=p,b=t("p",{class:"m-b-sm"},"\u5355\u9009\u53EF\u641C\u7D22",-1),o=t("p",{class:"m-b-sm"},"\u591A\u9009\u53EF\u641C\u7D22",-1);function E(n,c){const A=a("hl-cascader"),B=a("hl-col"),m=a("hl-row");return v(),F(m,{align:"items-center",gap:"var(--xl)"},{default:r(()=>[l(B,{span:"md:col-12 lg:col-10"},{default:r(()=>[b,l(A,{placeholder:"\u8BD5\u8BD5\u641C\u7D22\uFF1A\u6307\u5357",options:n.options,block:"",filterable:""},null,8,["options"])]),_:1}),l(B,{span:"md:col-12 lg:col-10"},{default:r(()=>[o,l(A,{placeholder:"\u8BD5\u8BD5\u641C\u7D22\uFF1A\u6307\u5357",options:n.options,props:{multiple:!0},block:"",filterable:""},null,8,["options"])]),_:1})]),_:1})}const{defineComponent:i,ref:C}=p,h=i({setup(){return{options:C([{value:"zhinan",label:"\u6307\u5357",disabled:!0,children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}])}}});return D({render:E},h)}(),"hl-demo8":function(){const{toDisplayString:t,createElementVNode:a,openBlock:l,createElementBlock:r,createCommentVNode:v,resolveComponent:F,withCtx:b,createBlock:o}=p,E={key:0};function i(c,A){const B=F("hl-cascader");return l(),o(B,{options:c.options},{default:b(({node:m,data:f})=>[a("span",null,t(f.label),1),m.isLeaf?v("",!0):(l(),r("span",E," ("+t(f.children.length)+") ",1))]),_:1},8,["options"])}const{defineComponent:C,ref:h}=p,n=C({setup(){return{options:h([{value:"zhinan",label:"\u6307\u5357",disabled:!0,children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}])}}});return D({render:i},n)}(),"hl-demo9":function(){const{resolveComponent:t,openBlock:a,createBlock:l}=p;function r(o,E){const i=t("hl-cascader-panel");return a(),l(i,{options:o.options},null,8,["options"])}const{defineComponent:v,ref:F}=p,b=v({setup(){return{options:F([{value:"zhinan",label:"\u6307\u5357",disabled:!0,children:[{value:"shejiyuanze",label:"\u8BBE\u8BA1\u539F\u5219",children:[{value:"yizhi",label:"\u4E00\u81F4"},{value:"fankui",label:"\u53CD\u9988"},{value:"xiaolv",label:"\u6548\u7387"},{value:"kekong",label:"\u53EF\u63A7"}]},{value:"daohang",label:"\u5BFC\u822A",children:[{value:"cexiangdaohang",label:"\u4FA7\u5411\u5BFC\u822A"},{value:"dingbudaohang",label:"\u9876\u90E8\u5BFC\u822A"}]}]},{value:"zujian",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout \u5E03\u5C40"},{value:"color",label:"Color \u8272\u5F69"},{value:"typography",label:"Typography \u5B57\u4F53"},{value:"icon",label:"Icon \u56FE\u6807"},{value:"button",label:"Button \u6309\u94AE"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio \u5355\u9009\u6846"},{value:"checkbox",label:"Checkbox \u590D\u9009\u6846"},{value:"switch",label:"Switch \u5F00\u5173"},{value:"input",label:"Input \u8F93\u5165\u6846"},{value:"input-number",label:"InputNumber \u8BA1\u6570\u5668"},{value:"select",label:"Select \u9009\u62E9\u5668"},{value:"cascader",label:"Cascader \u7EA7\u8054\u9009\u62E9\u5668"},{value:"slider",label:"Slider \u6ED1\u5757"},{value:"time-picker",label:"TimePicker \u65F6\u95F4\u9009\u62E9\u5668"},{value:"date-picker",label:"DatePicker \u65E5\u671F\u9009\u62E9\u5668"},{value:"datetime-picker",label:"DateTimePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"},{value:"upload",label:"Upload \u4E0A\u4F20"},{value:"rate",label:"Rate \u8BC4\u5206"},{value:"form",label:"Form \u8868\u5355"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table \u8868\u683C"},{value:"tag",label:"Tag \u6807\u7B7E"},{value:"progress",label:"Progress \u8FDB\u5EA6\u6761"},{value:"tree",label:"Tree \u6811\u5F62\u63A7\u4EF6"},{value:"pagination",label:"Pagination \u5206\u9875"},{value:"badge",label:"Badge \u5FBD\u7AE0"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert \u8B66\u544A"},{value:"loading",label:"Loading \u52A0\u8F7D"},{value:"message",label:"Message \u6D88\u606F\u63D0\u793A"},{value:"message-box",label:"MessageBox \u5F39\u6846"},{value:"notification",label:"Notification \u901A\u77E5"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu \u5BFC\u822A\u83DC\u5355"},{value:"tabs",label:"Tabs \u6807\u7B7E\u9875"},{value:"breadcrumb",label:"Breadcrumb \u9762\u5305\u5C51"},{value:"dropdown",label:"Dropdown \u4E0B\u62C9\u83DC\u5355"},{value:"steps",label:"Steps \u6B65\u9AA4\u6761"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog \u5BF9\u8BDD\u6846"},{value:"tooltip",label:"Tooltip \u6587\u5B57\u63D0\u793A"},{value:"popover",label:"Popover \u5F39\u51FA\u6846"},{value:"card",label:"Card \u5361\u7247"},{value:"carousel",label:"Carousel \u8D70\u9A6C\u706F"},{value:"collapse",label:"Collapse \u6298\u53E0\u9762\u677F"}]}]},{value:"ziyuan",label:"\u8D44\u6E90",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]}])}}});return D({render:r},b)}()}},M=u("h1",null,"Cascader \u7EA7\u8054\u9009\u62E9\u5668",-1),I=u("p",null,"\u5F53\u4E00\u4E2A\u6570\u636E\u96C6\u5408\u6709\u6E05\u6670\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF0C\u53EF\u901A\u8FC7\u7EA7\u8054\u9009\u62E9\u5668\u9010\u7EA7\u67E5\u770B\u5E76\u9009\u62E9\u3002",-1),L=u("div",null,[u("p",null,[e("\u53EA\u9700\u4E3A Cascader \u7684"),u("code",null,"options"),e("\u5C5E\u6027\u6307\u5B9A\u9009\u9879\u6570\u7EC4\u5373\u53EF\u6E32\u67D3\u51FA\u4E00\u4E2A\u7EA7\u8054\u9009\u62E9\u5668\u3002\u901A\u8FC7"),u("code",null,"props.expandTrigger"),e("\u53EF\u4EE5\u5B9A\u4E49\u5C55\u5F00\u5B50\u7EA7\u83DC\u5355\u7684\u89E6\u53D1\u65B9\u5F0F\u3002")])],-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u9ED8\u8BA4 click \u89E6\u53D1\u5B50\u83DC\u5355</p>
      <hl-cascader v-model="value" :options="options" block @change="handleChange" />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">hover \u89E6\u53D1\u5B50\u83DC\u5355</p>
      <hl-cascader v-model="value" :options="options" :props="props" block @change="handleChange" />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref([])
    const props = ref({ expandTrigger: 'hover' })
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

    const handleChange = value => {
      console.log('changed:', value)
    }

    return {
      value,
      props,
      options,
      handleChange,
    }
  },
})
<\/script>
`)],-1),V=u("h2",{id:"jin-yong-xuan-xiang-jin-yong"},[u("a",{class:"header-anchor",href:"#jin-yong-xuan-xiang-jin-yong"}),e(" \u7981\u7528\u3001\u9009\u9879\u7981\u7528")],-1),O=u("p",null,[e("\u901A\u8FC7\u5728\u6570\u636E\u6E90\u4E2D\u8BBE\u7F6E "),u("code",null,"disabled"),e(" \u5B57\u6BB5\u6765\u58F0\u660E\u8BE5\u9009\u9879\u662F\u7981\u7528\u7684")],-1),U=u("div",null,[u("p",null,[e("\u672C\u4F8B\u4E2D\uFF0C"),u("code",null,"options"),e("\u6307\u5B9A\u7684\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u542B\u6709"),u("code",null,"disabled: true"),e("\u952E\u503C\u5BF9\uFF0C\u56E0\u6B64\u662F\u7981\u7528\u7684\u3002\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CCascader \u4F1A\u68C0\u67E5\u6570\u636E\u4E2D\u6BCF\u4E00\u9879\u7684"),u("code",null,"disabled"),e("\u5B57\u6BB5\u662F\u5426\u4E3A"),u("code",null,"true"),e("\uFF0C\u5982\u679C\u4F60\u7684\u6570\u636E\u4E2D\u8868\u793A\u7981\u7528\u542B\u4E49\u7684\u5B57\u6BB5\u540D\u4E0D\u4E3A"),u("code",null,"disabled"),e("\uFF0C\u53EF\u4EE5\u901A\u8FC7"),u("code",null,"props.disabled"),e("\u5C5E\u6027\u6765\u6307\u5B9A\uFF08\u8BE6\u89C1\u4E0B\u65B9 API \u8868\u683C\uFF09\u3002\u5F53\u7136\uFF0C"),u("code",null,"value"),e("\u3001"),u("code",null,"label"),e("\u548C"),u("code",null,"children"),e("\u8FD9\u4E09\u4E2A\u5B57\u6BB5\u540D\u4E5F\u53EF\u4EE5\u901A\u8FC7\u540C\u6837\u7684\u65B9\u5F0F\u6307\u5B9A\u3002")])],-1),$=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="md:col-12 lg:col-10">
      <hl-cascader :options="options" block disabled />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <hl-cascader :options="options" block />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        disabled: true,
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
                value: 'switch',
                label: 'Switch \u5F00\u5173',
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
    return {
      options,
    }
  },
})
<\/script>
`)],-1),q=u("h2",{id:"ke-qing-kong"},[u("a",{class:"header-anchor",href:"#ke-qing-kong"}),e(" \u53EF\u6E05\u7A7A")],-1),Q=u("p",null,[e("\u901A\u8FC7 "),u("code",null,"clearable"),e(" \u8BBE\u7F6E\u8F93\u5165\u6846\u53EF\u6E05\u7A7A")],-1),W=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-cascader :options="options" clearable />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        disabled: true,
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
                value: 'switch',
                label: 'Switch \u5F00\u5173',
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
    return {
      options,
    }
  },
})
<\/script>
`)],-1),X=u("h2",{id:"jin-xian-shi-zui-hou-yi-ji"},[u("a",{class:"header-anchor",href:"#jin-xian-shi-zui-hou-yi-ji"}),e(" \u4EC5\u663E\u793A\u6700\u540E\u4E00\u7EA7")],-1),J=u("p",null,[e("\u5C5E\u6027"),u("code",null,"show-all-levels"),e("\u5B9A\u4E49\u4E86\u662F\u5426\u663E\u793A\u5B8C\u6574\u7684\u8DEF\u5F84\uFF0C\u5C06\u5176\u8D4B\u503C\u4E3A"),u("code",null,"false"),e("\u5219\u4EC5\u663E\u793A\u6700\u540E\u4E00\u7EA7")],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-cascader :options="options" :show-all-levels="false" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        disabled: true,
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
                value: 'switch',
                label: 'Switch \u5F00\u5173',
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
    return {
      options,
    }
  },
})
<\/script>
`)],-1),H=u("h2",{id:"duo-xuan"},[u("a",{class:"header-anchor",href:"#duo-xuan"}),e(" \u591A\u9009")],-1),K=u("p",null,[e("\u53EF\u901A\u8FC7 "),u("code",null,"props.multiple = true"),e(" \u6765\u5F00\u542F\u591A\u9009\u6A21\u5F0F\u3002")],-1),Y=u("div",null,[u("p",null,[e("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5C55\u793A\u6240\u6709\u5DF2\u9009\u4E2D\u7684\u7684"),u("code",null,"Tag"),e("\u6807\u7B7E\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"collapse-tags"),e("\u5C5E\u6027\u5C06\u5176\u6298\u53E0\u8D77\u6765\u3002")])],-1),Z=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-left" gap="var(--xl)">
    <hl-col span="md:col-12">
      <p class="m-b-sm">\u9ED8\u8BA4\u663E\u793A\u6240\u6709Tag</p>
      <hl-cascader :options="options" :props="props" :show-all-levels="false" block clearable />
    </hl-col>
    <hl-col span="md:col-12">
      <p class="m-b-sm">\u6298\u53E0\u5C55\u793ATag</p>
      <hl-cascader
        :options="options"
        :props="props"
        block
        collapse-tags
        clearable
      />
    </hl-col>
    <hl-col span="md:col-12">
      <p class="m-b-sm">\u6298\u53E0Tag\u5E26\u63D0\u793A</p>
      <hl-cascader
        :options="options"
        :props="props"
        block
        collapse-tags
        collapse-tags-tooltip
        clearable
      />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const props = ref({ multiple: true })
    const options = ref([
      {
        value: 1,
        label: '\u4E1C\u5357',
        children: [
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              { value: 3, label: '\u666E\u9640' },
              { value: 4, label: '\u9EC4\u57D4' },
              { value: 5, label: '\u5F90\u6C47' },
            ],
          },
          {
            value: 7,
            label: '\u6C5F\u82CF',
            children: [
              { value: 8, label: '\u5357\u4EAC' },
              { value: 9, label: '\u82CF\u5DDE' },
              { value: 10, label: '\u65E0\u9521' },
            ],
          },
          {
            value: 12,
            label: '\u6D59\u6C5F',
            children: [
              { value: 13, label: '\u676D\u5DDE' },
              { value: 14, label: '\u5B81\u6CE2' },
              { value: 15, label: '\u5609\u5174' },
            ],
          },
        ],
      },
      {
        value: 17,
        label: '\u897F\u5317',
        children: [
          {
            value: 18,
            label: '\u9655\u897F',
            children: [
              { value: 19, label: '\u897F\u5B89' },
              { value: 20, label: '\u5EF6\u5B89' },
            ],
          },
          {
            value: 21,
            label: '\u65B0\u7586\u7EF4\u543E\u5C14\u65CF\u81EA\u6CBB\u533A',
            children: [
              { value: 22, label: '\u4E4C\u9C81\u6728\u9F50' },
              { value: 23, label: '\u514B\u62C9\u739B\u4F9D' },
            ],
          },
        ],
      },
    ])

    return {
      props,
      options,
    }
  },
})
<\/script>
`)],-1),uu=u("h2",{id:"xuan-ze-ren-yi-yi-ji-xuan-xiang"},[u("a",{class:"header-anchor",href:"#xuan-ze-ren-yi-yi-ji-xuan-xiang"}),e(" \u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879")],-1),eu=u("p",null,"\u5728\u5355\u9009\u6A21\u5F0F\u4E0B\uFF0C\u4F60\u53EA\u80FD\u9009\u62E9\u53F6\u5B50\u8282\u70B9\uFF1B\u800C\u5728\u591A\u9009\u6A21\u5F0F\u4E0B\uFF0C\u52FE\u9009\u7236\u8282\u70B9\u771F\u6B63\u9009\u4E2D\u7684\u90FD\u662F\u53F6\u5B50\u8282\u70B9\u3002\u542F\u7528\u8BE5\u529F\u80FD\u540E\uFF0C\u53EF\u8BA9\u7236\u5B50\u8282\u70B9\u53D6\u6D88\u5173\u8054\uFF0C\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879\u3002",-1),lu=u("div",null,[u("p",null,[e("\u53EF\u901A\u8FC7 "),u("code",null,"props.checkStrictly = true"),e(" \u6765\u8BBE\u7F6E\u7236\u5B50\u8282\u70B9\u53D6\u6D88\u9009\u4E2D\u5173\u8054\uFF0C\u4ECE\u800C\u8FBE\u5230\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879\u7684\u76EE\u7684\u3002")])],-1),au=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5355\u9009\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879</p>
      <hl-cascader :options="options" :props="{ checkStrictly: true }" block clearable />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u591A\u9009\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7\u9009\u9879</p>
      <hl-cascader
        :options="options"
        :props="{ multiple: true, checkStrictly: true }"
        block
        clearable
      />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        disabled: true,
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
                value: 'switch',
                label: 'Switch \u5F00\u5173',
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
    return {
      options,
    }
  },
})
<\/script>
`)],-1),tu=u("h2",{id:"dong-tai-jia-zai"},[u("a",{class:"header-anchor",href:"#dong-tai-jia-zai"}),e(" \u52A8\u6001\u52A0\u8F7D")],-1),ou=u("p",null,"\u5F53\u9009\u4E2D\u67D0\u4E00\u7EA7\u65F6\uFF0C\u52A8\u6001\u52A0\u8F7D\u8BE5\u7EA7\u4E0B\u7684\u9009\u9879\u3002",-1),nu=u("div",null,[u("p",null,[e("\u901A\u8FC7"),u("code",null,"lazy"),e("\u5F00\u542F\u52A8\u6001\u52A0\u8F7D\uFF0C\u5E76\u901A\u8FC7"),u("code",null,"lazyload"),e("\u6765\u8BBE\u7F6E\u52A0\u8F7D\u6570\u636E\u6E90\u7684\u65B9\u6CD5\u3002"),u("code",null,"lazyload"),e("\u65B9\u6CD5\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570"),u("code",null,"node"),e("\u4E3A\u5F53\u524D\u70B9\u51FB\u7684\u8282\u70B9\uFF0C\u7B2C\u4E8C\u4E2A"),u("code",null,"resolve"),e("\u4E3A\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u7684\u56DE\u8C03(\u5FC5\u987B\u8C03\u7528)\u3002\u4E3A\u4E86\u66F4\u51C6\u786E\u7684\u663E\u793A\u8282\u70B9\u7684\u72B6\u6001\uFF0C\u8FD8\u53EF\u4EE5\u5BF9\u8282\u70B9\u6570\u636E\u6DFB\u52A0\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\u7684\u6807\u5FD7\u4F4D (\u9ED8\u8BA4\u5B57\u6BB5\u4E3A"),u("code",null,"leaf"),e("\uFF0C\u53EF\u901A\u8FC7"),u("code",null,"props.leaf"),e("\u4FEE\u6539)\uFF0C\u5426\u5219\u4F1A\u7B80\u5355\u7684\u4EE5\u6709\u65E0\u5B50\u8282\u70B9\u6765\u5224\u65AD\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9\u3002")])],-1),ru=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-cascader :props="props" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    let id = 0
    const props = ref({
      lazy: true,
      lazyLoad(node, resolve) {
        const { level } = node
        setTimeout(() => {
          const nodes = Array.from({ length: level + 1 }).map(item => ({
            value: ++id,
            label: \`\u9009\u9879\${id}\`,
            leaf: level >= 2,
          }))
          // \u901A\u8FC7\u8C03\u7528resolve\u5C06\u5B50\u8282\u70B9\u6570\u636E\u8FD4\u56DE\uFF0C\u901A\u77E5\u7EC4\u4EF6\u6570\u636E\u52A0\u8F7D\u5B8C\u6210
          resolve(nodes)
        }, 1000)
      },
    })
    return {
      props,
    }
  },
})
<\/script>
`)],-1),du=u("h2",{id:"ke-sou-suo"},[u("a",{class:"header-anchor",href:"#ke-sou-suo"}),e(" \u53EF\u641C\u7D22")],-1),iu=u("p",null,[e("\u5C06"),u("code",null,"filterable"),e("\u8D4B\u503C\u4E3A"),u("code",null,"true"),e("\u5373\u53EF\u6253\u5F00\u641C\u7D22\u529F\u80FD\uFF0C\u9ED8\u8BA4\u4F1A\u5339\u914D\u8282\u70B9\u6216\u7236\u8282\u70B9\u7684"),u("code",null,"label"),e("(\u7531"),u("code",null,"show-all-levels"),e("\u51B3\u5B9A)\u4E2D\u5305\u542B\u8F93\u5165\u503C\u7684\u9009\u9879\u3002")],-1),cu=u("div",null,[u("p",null,[e("\u4F60\u4E5F\u53EF\u4EE5\u7528"),u("code",null,"filter-method"),e("\u81EA\u5B9A\u4E49\u641C\u7D22\u903B\u8F91\uFF0C\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8282\u70B9"),u("code",null,"node"),e("\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u641C\u7D22\u5173\u952E\u8BCD"),u("code",null,"keyword"),e("\uFF0C\u901A\u8FC7\u8FD4\u56DE\u5E03\u5C14\u503C\u8868\u793A\u662F\u5426\u547D\u4E2D\u3002")])],-1),bu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5355\u9009\u53EF\u641C\u7D22</p>
      <hl-cascader placeholder="\u8BD5\u8BD5\u641C\u7D22\uFF1A\u6307\u5357" :options="options" block filterable />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u591A\u9009\u53EF\u641C\u7D22</p>
      <hl-cascader
        placeholder="\u8BD5\u8BD5\u641C\u7D22\uFF1A\u6307\u5357"
        :options="options"
        :props="{ multiple: true }"
        block
        filterable
      />
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        disabled: true,
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
                value: 'switch',
                label: 'Switch \u5F00\u5173',
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
    return {
      options,
    }
  },
})
<\/script>
`)],-1),su=u("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),e(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),vu=u("p",null,"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5907\u9009\u9879\u7684\u8282\u70B9\u5185\u5BB9",-1),Fu=u("div",null,[u("p",null,[e("\u53EF\u4EE5\u901A\u8FC7"),u("code",null,"scoped slot"),e("\u5BF9\u7EA7\u8054\u9009\u62E9\u5668\u7684\u5907\u9009\u9879\u7684\u8282\u70B9\u5185\u5BB9\u8FDB\u884C\u81EA\u5B9A\u4E49\uFF0Cscoped slot \u4F1A\u4F20\u5165\u4E24\u4E2A\u5B57\u6BB5 "),u("code",null,"node"),e(" \u548C "),u("code",null,"data"),e("\uFF0C\u5206\u522B\u8868\u793A\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61\u548C\u6570\u636E\u3002")])],-1),pu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-cascader :options="options">
    <template #default="{ node, data }">
      <span>{{ data.label }}</span>
      <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
    </template>
  </hl-cascader>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        disabled: true,
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
                value: 'switch',
                label: 'Switch \u5F00\u5173',
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
    return {
      options,
    }
  },
})
<\/script>
`)],-1),Eu=u("h2",{id:"ji-lian-mian-ban"},[u("a",{class:"header-anchor",href:"#ji-lian-mian-ban"}),e(" \u7EA7\u8054\u9762\u677F")],-1),hu=u("p",null,"\u7EA7\u8054\u9762\u677F\u662F\u7EA7\u8054\u9009\u62E9\u5668\u7684\u6838\u5FC3\u7EC4\u4EF6\uFF0C\u4E0E\u7EA7\u8054\u9009\u62E9\u5668\u4E00\u6837\uFF0C\u6709\u5355\u9009\u3001\u591A\u9009\u3001\u52A8\u6001\u52A0\u8F7D\u7B49\u591A\u79CD\u529F\u80FD\u3002",-1),Bu=u("div",null,[u("p",null,[e("\u548C\u7EA7\u8054\u9009\u62E9\u5668\u4E00\u6837\uFF0C\u901A\u8FC7"),u("code",null,"options"),e("\u6765\u6307\u5B9A\u9009\u9879\uFF0C\u4E5F\u53EF\u901A\u8FC7"),u("code",null,"props"),e("\u6765\u8BBE\u7F6E\u591A\u9009\u3001\u52A8\u6001\u52A0\u8F7D\u7B49\u529F\u80FD\uFF0C\u5177\u4F53\u8BE6\u60C5\u89C1\u4E0B\u65B9 API \u8868\u683C\u3002")])],-1),Cu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-cascader-panel :options="options" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: 'zhinan',
        label: '\u6307\u5357',
        disabled: true,
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
                value: 'switch',
                label: 'Switch \u5F00\u5173',
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
    return {
      options,
    }
  },
})
<\/script>
`)],-1),Au=N('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>-</td><td>\u2014</td><td>\u2014</td></tr><tr><td>options</td><td>\u53EF\u9009\u9879\u6570\u636E\u6E90\uFF0C\u952E\u540D\u53EF\u901A\u8FC7 <code>Props</code> \u5C5E\u6027\u914D\u7F6E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u89C1\u4E0B\u8868</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>md / lg / xs</td><td>md</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>clearable</td><td>\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-all-levels</td><td>\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>collapse-tags</td><td>\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0 Tag</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>collapse-tags-tooltip</td><td>\u9F20\u6807\u6ED1\u5165\u6298\u53E0Tag\u65F6\uFF0C\u662F\u5426\u663E\u793A\u6240\u6709\u6298\u53E0\u7684Tag</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>separator</td><td>\u9009\u9879\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u659C\u6760&#39; / &#39;</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filter-method</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u903B\u8F91\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8282\u70B9<code>node</code>\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u641C\u7D22\u5173\u952E\u8BCD<code>keyword</code>\uFF0C\u901A\u8FC7\u8FD4\u56DE\u5E03\u5C14\u503C\u8868\u793A\u662F\u5426\u547D\u4E2D</td><td>function(node, keyword)</td><td>-</td><td>-</td></tr><tr><td>debounce</td><td>\u641C\u7D22\u5173\u952E\u8BCD\u8F93\u5165\u7684\u53BB\u6296\u5EF6\u8FDF\uFF0C\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>before-filter</td><td>\u7B5B\u9009\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u8F93\u5165\u7684\u503C\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u7B5B\u9009</td><td>function(value)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-class</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-offset</td><td>\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>4</td></tr><tr><td>popper-append-to-body(deprecated)</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false\u3002\u8BF7\u4F7F\u7528teleported\u5C5E\u6027</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>teleported</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20\u3002</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>tag-type</td><td>\u6807\u7B7E\u7C7B\u578B</td><td>string</td><td>info/success/warning/danger</td><td>-</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>expand-trigger</td><td>\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F</td><td>string</td><td>click / hover</td><td>&#39;click&#39;</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>check-strictly</td><td>\u662F\u5426\u4E25\u683C\u7684\u9075\u5B88\u7236\u5B50\u8282\u70B9\u4E0D\u4E92\u76F8\u5173\u8054</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>emit-path</td><td>\u5728\u9009\u4E2D\u8282\u70B9\u6539\u53D8\u65F6\uFF0C\u662F\u5426\u8FD4\u56DE\u7531\u8BE5\u8282\u70B9\u6240\u5728\u7684\u5404\u7EA7\u83DC\u5355\u7684\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u82E5\u8BBE\u7F6E false\uFF0C\u5219\u53EA\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u503C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>\u662F\u5426\u52A8\u6001\u52A0\u8F7D\u5B50\u8282\u70B9\uFF0C\u9700\u4E0E lazyLoad \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>lazy-load</td><td>\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5728 lazy \u4E3A true \u65F6\u6709\u6548</td><td>function(node, resolve)\uFF0C<code>node</code>\u4E3A\u5F53\u524D\u70B9\u51FB\u7684\u8282\u70B9\uFF0C<code>resolve</code>\u4E3A\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u7684\u56DE\u8C03(\u5FC5\u987B\u8C03\u7528)</td><td>-</td><td>-</td></tr><tr><td>value</td><td>\u6307\u5B9A\u9009\u9879\u7684\u503C\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>&#39;value&#39;</td></tr><tr><td>label</td><td>\u6307\u5B9A\u9009\u9879\u6807\u7B7E\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>\u6307\u5B9A\u9009\u9879\u7684\u5B50\u9009\u9879\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>&#39;children&#39;</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u9009\u9879\u7684\u7981\u7528\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>&#39;disabled&#39;</td></tr><tr><td>leaf</td><td>\u6307\u5B9A\u9009\u9879\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6807\u5FD7\u4F4D\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>\u2014</td><td>&#39;leaf&#39;</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u9009\u4E2D\u8282\u70B9\u7684\u503C</td></tr><tr><td>expand-change</td><td>\u5F53\u5C55\u5F00\u8282\u70B9\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5404\u7236\u7EA7\u9009\u9879\u503C\u7EC4\u6210\u7684\u6570\u7EC4</td></tr><tr><td>blur</td><td>\u5F53\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>focus</td><td>\u5F53\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td></tr><tr><td>visible-change</td><td>\u4E0B\u62C9\u6846\u51FA\u73B0/\u9690\u85CF\u65F6\u89E6\u53D1</td><td>\u51FA\u73B0\u5219\u4E3A true\uFF0C\u9690\u85CF\u5219\u4E3A false</td></tr><tr><td>remove-tag</td><td>\u5728\u591A\u9009\u6A21\u5F0F\u4E0B\uFF0C\u79FB\u9664 Tag \u65F6\u89E6\u53D1</td><td>\u79FB\u9664\u7684 Tag \u5BF9\u5E94\u7684\u8282\u70B9\u7684\u503C</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>\u83B7\u53D6\u9009\u4E2D\u7684\u8282\u70B9</td><td>(leafOnly) \u662F\u5426\u53EA\u662F\u53F6\u5B50\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u5907\u9009\u9879\u7684\u8282\u70B9\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data }\uFF0C\u5206\u522B\u4E3A\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61\u548C\u6570\u636E</td></tr><tr><td>empty</td><td>\u65E0\u5339\u914D\u9009\u9879\u65F6\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="cascader-panel-attributes"><a class="header-anchor" href="#cascader-panel-attributes"></a> Cascader Panel Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value / v-model</td><td>\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C</td><td>-</td><td>\u2014</td><td>\u2014</td></tr><tr><td>options</td><td>\u53EF\u9009\u9879\u6570\u636E\u6E90\uFF0C\u952E\u540D\u53EF\u901A\u8FC7 <code>Props</code> \u5C5E\u6027\u914D\u7F6E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u89C1\u4E0B\u8868</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="cascader-panel-events"><a class="header-anchor" href="#cascader-panel-events"></a> Cascader Panel Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u9009\u4E2D\u8282\u70B9\u7684\u503C</td></tr><tr><td>expand-change</td><td>\u5F53\u5C55\u5F00\u8282\u70B9\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5404\u7236\u7EA7\u9009\u9879\u503C\u7EC4\u6210\u7684\u6570\u7EC4</td></tr></tbody></table><h2 id="cascader-panel-methods"><a class="header-anchor" href="#cascader-panel-methods"></a> Cascader Panel Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>\u83B7\u53D6\u9009\u4E2D\u7684\u8282\u70B9\u6570\u7EC4</td><td>(leafOnly) \u662F\u5426\u53EA\u662F\u53F6\u5B50\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code></td></tr><tr><td>clearCheckedNodes</td><td>\u6E05\u7A7A\u9009\u4E2D\u7684\u8282\u70B9</td><td>-</td></tr></tbody></table><h2 id="cascader-panel-slots"><a class="header-anchor" href="#cascader-panel-slots"></a> Cascader Panel Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u5907\u9009\u9879\u7684\u8282\u70B9\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { node, data }\uFF0C\u5206\u522B\u4E3A\u5F53\u524D\u8282\u70B9\u7684 Node \u5BF9\u8C61\u548C\u6570\u636E</td></tr></tbody></table>',18);function mu(t,a,l,r,v,F){const b=g("hl-demo0"),o=g("demo-block"),E=g("hl-demo1"),i=g("hl-demo2"),C=g("hl-demo3"),h=g("hl-demo4"),n=g("hl-demo5"),c=g("hl-demo6"),A=g("hl-demo7"),B=g("hl-demo8"),m=g("hl-demo9"),f=g("right-nav");return P(),w(z,null,[u("section",null,[M,I,s(o,{fs:""},{source:d(()=>[s(b)]),highlight:d(()=>[R]),default:d(()=>[L]),_:1}),V,O,s(o,{fs:""},{source:d(()=>[s(E)]),highlight:d(()=>[$]),default:d(()=>[U]),_:1}),q,Q,s(o,{fs:""},{source:d(()=>[s(i)]),highlight:d(()=>[W]),_:1}),X,J,s(o,{fs:""},{source:d(()=>[s(C)]),highlight:d(()=>[G]),_:1}),H,K,s(o,{fs:""},{source:d(()=>[s(h)]),highlight:d(()=>[Z]),default:d(()=>[Y]),_:1}),uu,eu,s(o,{fs:""},{source:d(()=>[s(n)]),highlight:d(()=>[au]),default:d(()=>[lu]),_:1}),tu,ou,s(o,{fs:""},{source:d(()=>[s(c)]),highlight:d(()=>[ru]),default:d(()=>[nu]),_:1}),du,iu,s(o,{fs:""},{source:d(()=>[s(A)]),highlight:d(()=>[bu]),default:d(()=>[cu]),_:1}),su,vu,s(o,{fs:""},{source:d(()=>[s(B)]),highlight:d(()=>[pu]),default:d(()=>[Fu]),_:1}),Eu,hu,s(o,{fs:""},{source:d(()=>[s(m)]),highlight:d(()=>[Cu]),default:d(()=>[Bu]),_:1}),Au]),s(f)],64)}var xu=S(j,[["render",mu]]);export{xu as default};
