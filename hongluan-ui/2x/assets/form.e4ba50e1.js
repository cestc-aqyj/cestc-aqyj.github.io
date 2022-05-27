var H=Object.defineProperty;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var O=(o,u,e)=>u in o?H(o,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[u]=e,S=(o,u)=>{for(var e in u||(u={}))M.call(u,e)&&O(o,e,u[e]);if(x)for(var e of x(u))Y.call(u,e)&&O(o,e,u[e]);return o};import{H as z,L as J,W as X,Q as l,X as y,P as A,a4 as G,S as F,o as Q,aJ as B}from"./vue.059774a0.js";import{_ as K,H as Z}from"./index.c1538894.js";import{H as uu}from"./hongluan-icons.5b925e95.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const eu={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:o,createVNode:u,withCtx:e,createTextVNode:s,openBlock:g,createBlock:D}=B,V=s("\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"),b=s("\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"),v=s("\u7ACB\u5373\u521B\u5EFA"),E=s("\u53D6\u6D88");function i(a,m){const f=o("hl-input"),n=o("hl-form-item"),h=o("hl-option"),_=o("hl-select"),p=o("hl-date-picker"),C=o("hl-radio"),N=o("hl-radio-group"),w=o("hl-button"),I=o("hl-form");return g(),D(I,{model:a.form,width:["col-6","col-15"],"label-position":["items-right","items-middle"],"item-gap":"var(--md)"},{default:e(()=>[u(n,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:e(()=>[u(f,{modelValue:a.form.name,"onUpdate:modelValue":m[0]||(m[0]=c=>a.form.name=c),placeholder:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"},null,8,["modelValue"])]),_:1}),u(n,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[u(_,{modelValue:a.form.region,"onUpdate:modelValue":m[1]||(m[1]=c=>a.form.region=c),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[u(h,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),u(h,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:e(()=>[u(p,{modelValue:a.form.date1,"onUpdate:modelValue":m[2]||(m[2]=c=>a.form.date1=c),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",class:"m-r-sm"},null,8,["modelValue"])]),_:1}),u(n,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:e(()=>[u(N,{modelValue:a.form.resource,"onUpdate:modelValue":m[3]||(m[3]=c=>a.form.resource=c),type:"primary"},{default:e(()=>[u(C,{label:"1"},{default:e(()=>[V]),_:1}),u(C,{label:"2"},{default:e(()=>[b]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:e(()=>[u(f,{modelValue:a.form.desc,"onUpdate:modelValue":m[4]||(m[4]=c=>a.form.desc=c),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1}),u(n,{offset:"offset-6"},{default:e(()=>[u(w,{type:"primary",class:"m-r-md",onClick:a.onSubmit},{default:e(()=>[v]),_:1},8,["onClick"]),u(w,null,{default:e(()=>[E]),_:1})]),_:1})]),_:1},8,["model"])}const{defineComponent:d}=B,{reactive:r}=B;return S({render:i},d({setup(a,{expose:m}){m();const h={form:r({name:"",region:"shanghai",date1:"",type:[],resource:"1",desc:""}),onSubmit:()=>{console.log("submit!")},reactive:r};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}))}(),"hl-demo1":function(){const{resolveComponent:o,createVNode:u,withCtx:e,createTextVNode:s,openBlock:g,createBlock:D}=B,V=s("\u67E5\u8BE2");function b(d,r){const t=o("hl-input"),a=o("hl-form-item"),m=o("hl-option"),f=o("hl-select"),n=o("hl-button"),h=o("hl-form");return g(),D(h,{model:d.formInline,fill:""},{default:e(()=>[u(a,{label:"\u5BA1\u6279\u4EBA"},{default:e(()=>[u(t,{modelValue:d.formInline.user,"onUpdate:modelValue":r[0]||(r[0]=_=>d.formInline.user=_),placeholder:"\u5BA1\u6279\u4EBA",block:""},null,8,["modelValue"])]),_:1}),u(a,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[u(f,{modelValue:d.formInline.region,"onUpdate:modelValue":r[1]||(r[1]=_=>d.formInline.region=_),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:e(()=>[u(m,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),u(m,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),u(a,null,{default:e(()=>[u(n,{type:"primary",block:"",onClick:d.onSubmit},{default:e(()=>[V]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])}const{defineComponent:v}=B,{ref:E}=B;return S({render:b},v({setup(d,{expose:r}){r();const m={formInline:E({user:"",region:""}),onSubmit:()=>{console.log("submit!")},ref:E};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}))}(),"hl-demo2":function(){const{resolveComponent:o,createVNode:u,withCtx:e,createTextVNode:s,openBlock:g,createBlock:D}=B,V=s("\u67E5\u8BE2");function b(d,r){const t=o("hl-input"),a=o("hl-form-item"),m=o("hl-option"),f=o("hl-select"),n=o("hl-button"),h=o("hl-form");return g(),D(h,{inline:"",model:d.formInline,gap:"var(--md)","item-gap":"var(--md)"},{default:e(()=>[u(a,{label:"\u5BA1\u6279\u4EBA",required:""},{default:e(()=>[u(t,{modelValue:d.formInline.user,"onUpdate:modelValue":r[0]||(r[0]=_=>d.formInline.user=_),placeholder:"\u5BA1\u6279\u4EBA"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[u(f,{modelValue:d.formInline.region,"onUpdate:modelValue":r[1]||(r[1]=_=>d.formInline.region=_),placeholder:"\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[u(m,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),u(m,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),u(a,null,{default:e(()=>[u(n,{type:"primary",onClick:d.onSubmit},{default:e(()=>[V]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])}const{defineComponent:v}=B,{ref:E}=B;return S({render:b},v({setup(d,{expose:r}){r();const m={formInline:E({user:"",region:""}),onSubmit:()=>{console.log("submit!")},ref:E};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}))}(),"hl-demo3":function(){const{resolveComponent:o,createVNode:u,withCtx:e,openBlock:s,createBlock:g}=B;function D(E,i){const d=o("hl-option"),r=o("hl-select"),t=o("hl-group"),a=o("hl-form-item"),m=o("hl-input"),f=o("hl-form");return s(),g(f,{"label-position":[E.labelPosition,E.labelPosition2],width:["md:col-6","md:col-14"],model:E.formLabelAlign},{default:e(()=>[u(a,{label:"Label\u5BF9\u9F50\uFF1A"},{default:e(()=>[u(t,{gap:"var(--sm)"},{default:e(()=>[u(r,{modelValue:E.labelPosition,"onUpdate:modelValue":i[0]||(i[0]=n=>E.labelPosition=n),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:e(()=>[u(d,{label:"items-left",value:"items-left"}),u(d,{label:"items-center",value:"items-center"}),u(d,{label:"items-right",value:"items-right"})]),_:1},8,["modelValue"]),u(r,{modelValue:E.labelPosition2,"onUpdate:modelValue":i[1]||(i[1]=n=>E.labelPosition2=n),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:e(()=>[u(d,{label:"items-top",value:"items-top"}),u(d,{label:"items-middle",value:"items-middle"}),u(d,{label:"items-bottom",value:"items-bottom"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),u(a,{label:"\u6D3B\u52A8\u533A\u57DF\uFF1A"},{default:e(()=>[u(m,{modelValue:E.formLabelAlign.region,"onUpdate:modelValue":i[2]||(i[2]=n=>E.formLabelAlign.region=n),block:""},null,8,["modelValue"])]),_:1}),u(a,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:e(()=>[u(m,{modelValue:E.formLabelAlign.type,"onUpdate:modelValue":i[3]||(i[3]=n=>E.formLabelAlign.type=n),block:""},null,8,["modelValue"])]),_:1}),u(a,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:e(()=>[u(m,{modelValue:E.formLabelAlign.type,"onUpdate:modelValue":i[4]||(i[4]=n=>E.formLabelAlign.type=n),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["label-position","model"])}const{defineComponent:V}=B,{ref:b}=B;return S({render:D},V({setup(E,{expose:i}){i();const d=b("items-left"),r=b("items-middle"),t=b({name:"",region:"",type:""}),a={labelPosition:d,labelPosition2:r,formLabelAlign:t,ref:b};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}))}(),"hl-demo4":function(){const{resolveComponent:o,createVNode:u,withCtx:e,createTextVNode:s,openBlock:g,createBlock:D}=B,V=s("\u7ACB\u5373\u521B\u5EFA"),b=s("\u91CD\u7F6E");function v(r,t){const a=o("hl-input"),m=o("hl-form-item"),f=o("hl-cascader"),n=o("hl-option"),h=o("hl-select"),_=o("hl-date-picker"),p=o("hl-col"),C=o("hl-time-picker"),N=o("hl-row"),w=o("hl-switch"),I=o("hl-checkbox"),c=o("hl-checkbox-group"),U=o("hl-radio"),R=o("hl-radio-group"),j=o("hl-button"),q=o("hl-form");return g(),D(q,{ref:"ruleFormRef",model:r.ruleForm,rules:r.rules,"label-position":["items-right","items-left"],gap:"var(--lg)","item-gap":"var(--md)",width:["md:col-6","md:col-18"]},{default:e(()=>[u(m,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name"},{default:e(()=>[u(a,{modelValue:r.ruleForm.name,"onUpdate:modelValue":t[0]||(t[0]=k=>r.ruleForm.name=k)},null,8,["modelValue"])]),_:1}),u(m,{label:"\u6D3B\u52A8\u5730\u70B9",prop:"location"},{default:e(()=>[u(f,{modelValue:r.ruleForm.location,"onUpdate:modelValue":t[1]||(t[1]=k=>r.ruleForm.location=k),options:r.locations},null,8,["modelValue","options"])]),_:1}),u(m,{label:"\u6D3B\u52A8\u533A\u57DF",prop:"region"},{default:e(()=>[u(h,{modelValue:r.ruleForm.region,"onUpdate:modelValue":t[2]||(t[2]=k=>r.ruleForm.region=k),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[u(n,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),u(n,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),u(m,{label:"\u6D3B\u52A8\u65F6\u95F4",required:""},{default:e(()=>[u(N,null,{default:e(()=>[u(p,{span:12},{default:e(()=>[u(m,{prop:"date1"},{default:e(()=>[u(_,{modelValue:r.ruleForm.date1,"onUpdate:modelValue":t[3]||(t[3]=k=>r.ruleForm.date1=k),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1}),u(p,{span:12},{default:e(()=>[u(m,{prop:"date2"},{default:e(()=>[u(C,{modelValue:r.ruleForm.date2,"onUpdate:modelValue":t[4]||(t[4]=k=>r.ruleForm.date2=k),placeholder:"\u9009\u62E9\u65F6\u95F4",block:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),u(m,{label:"\u5373\u65F6\u914D\u9001",prop:"delivery"},{default:e(()=>[u(w,{modelValue:r.ruleForm.delivery,"onUpdate:modelValue":t[5]||(t[5]=k=>r.ruleForm.delivery=k),type:"primary"},null,8,["modelValue"])]),_:1}),u(m,{label:"\u6D3B\u52A8\u6027\u8D28",prop:"type"},{default:e(()=>[u(c,{modelValue:r.ruleForm.type,"onUpdate:modelValue":t[6]||(t[6]=k=>r.ruleForm.type=k)},{default:e(()=>[u(I,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),u(I,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),u(m,{label:"\u7279\u6B8A\u8D44\u6E90",prop:"resource"},{default:e(()=>[u(R,{modelValue:r.ruleForm.resource,"onUpdate:modelValue":t[7]||(t[7]=k=>r.ruleForm.resource=k)},{default:e(()=>[u(U,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),u(U,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),u(m,{label:"\u6D3B\u52A8\u5F62\u5F0F",prop:"desc"},{default:e(()=>[u(a,{modelValue:r.ruleForm.desc,"onUpdate:modelValue":t[8]||(t[8]=k=>r.ruleForm.desc=k),"native-type":"textarea",block:""},null,8,["modelValue"])]),_:1}),u(m,{offset:"md:offset-6"},{default:e(()=>[u(j,{type:"primary",class:"m-r-sm",onClick:t[9]||(t[9]=k=>r.submitForm("ruleForm"))},{default:e(()=>[V]),_:1}),u(j,{class:"m-r-sm",onClick:t[10]||(t[10]=k=>r.resetForm("ruleForm"))},{default:e(()=>[b]),_:1})]),_:1})]),_:1},8,["model","rules"])}const{defineComponent:E}=B,{ref:i}=B;return S({render:v},E({setup(r,{expose:t}){t();const a=i({location:[],name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),m=i({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],location:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u5730\u70B9",trigger:"change"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",trigger:"change"}],date1:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}],date2:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],type:[{type:"array",required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28",trigger:"change"}],resource:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90",trigger:"change"}],desc:[{required:!0,message:"\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F",trigger:"blur"}]}),f=i([{value:"BJ",label:"\u5317\u4EAC",children:[{value:"HD",label:"\u6D77\u6DC0\u533A"},{value:"XW",label:"\u5BA3\u6B66\u533A"},{value:"CW",label:"\u5D07\u6587\u533A",children:[{value:"WFJ",label:"\u738B\u5E9C\u4E95"},{value:"DD",label:"\u4E1C\u5355"}]}]}]),n=i(null),p={ruleForm:a,rules:m,locations:f,ruleFormRef:n,submitForm:()=>{n.value.validate(C=>{if(C)alert("submit!");else return console.log("error submit!!"),!1})},resetForm:()=>{n.value.resetFields()},ref:i};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}(),"hl-demo5":function(){const{resolveComponent:o,createVNode:u,withCtx:e,createTextVNode:s,openBlock:g,createBlock:D}=B,V=s("\u63D0\u4EA4"),b=s("\u91CD\u7F6E");function v(r,t){const a=o("hl-input"),m=o("hl-form-item"),f=o("hl-button"),n=o("hl-form");return g(),D(n,{ref:"ruleFormRef",model:r.ruleForm,rules:r.rules,width:["md:col-4","col"]},{default:e(()=>[u(m,{label:"\u5BC6\u7801",prop:"pass"},{default:e(()=>[u(a,{modelValue:r.ruleForm.pass,"onUpdate:modelValue":t[0]||(t[0]=h=>r.ruleForm.pass=h),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),u(m,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"checkPass"},{default:e(()=>[u(a,{modelValue:r.ruleForm.checkPass,"onUpdate:modelValue":t[1]||(t[1]=h=>r.ruleForm.checkPass=h),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),u(m,{label:"\u5E74\u9F84",prop:"age"},{default:e(()=>[u(a,{modelValue:r.ruleForm.age,"onUpdate:modelValue":t[2]||(t[2]=h=>r.ruleForm.age=h),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),u(m,{label:" "},{default:e(()=>[u(f,{type:"primary",class:"m-r-sm",onClick:t[3]||(t[3]=h=>r.submitForm("ruleForm"))},{default:e(()=>[V]),_:1}),u(f,{onClick:t[4]||(t[4]=h=>r.resetForm("ruleForm"))},{default:e(()=>[b]),_:1})]),_:1})]),_:1},8,["model","rules"])}const{defineComponent:E}=B,{ref:i}=B;return S({render:v},E({setup(r,{expose:t}){t();const a=i({pass:"",checkPass:"",age:""}),m=i(null),f=(w,I,c)=>{if(!I)return c(new Error("\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"));setTimeout(()=>{Number.isInteger(I)?I<18?c(new Error("\u5FC5\u987B\u5E74\u6EE118\u5C81")):c():c(new Error("\u8BF7\u8F93\u5165\u6570\u5B57\u503C"))},1e3)},n=(w,I,c)=>{I===""?c(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):(a.value.checkPass!==""&&m.value.validateField("checkPass"),c())},h=(w,I,c)=>{I===""?c(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):I!==a.value.pass?c(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):c()},_=i({pass:[{validator:n,trigger:"blur"}],checkPass:[{validator:h,trigger:"blur"}],age:[{validator:f,trigger:"blur"}]}),N={ruleForm:a,ruleFormRef:m,checkAge:f,validatePass:n,validatePass2:h,rules:_,submitForm:()=>{m.value.validate(w=>{if(w)alert("submit!");else return console.log("error submit!!"),!1})},resetForm:()=>{m.value.resetFields()},ref:i};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}}))}(),"hl-demo6":function(){const{resolveComponent:o,createVNode:u,withCtx:e,renderList:s,Fragment:g,openBlock:D,createElementBlock:V,withModifiers:b,createBlock:v,createTextVNode:E}=B,i=E("\u63D0\u4EA4"),d=E("\u65B0\u589E\u57DF\u540D");function r(n,h){const _=o("hl-input"),p=o("hl-form-item"),C=o("two-delete"),N=o("hl-icon"),w=o("hl-button"),I=o("hl-form");return D(),v(I,{ref:"dynamicValidateFormRef",model:n.dynamicValidateForm,width:["md:col-4","col"]},{default:e(()=>[u(p,{prop:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",trigger:"blur"},{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}]},{default:e(()=>[u(_,{modelValue:n.dynamicValidateForm.email,"onUpdate:modelValue":h[0]||(h[0]=c=>n.dynamicValidateForm.email=c)},null,8,["modelValue"])]),_:1}),(D(!0),V(g,null,s(n.dynamicValidateForm.domains,(c,U)=>(D(),v(p,{key:c.key,label:"\u57DF\u540D"+U,prop:"domains."+U+".value",rules:{required:!0,message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}},{default:e(()=>[u(_,{modelValue:c.value,"onUpdate:modelValue":R=>c.value=R},null,8,["modelValue","onUpdate:modelValue"]),u(w,{type:"primary",effect:"light",class:"m-l-sm",equal:"",onClick:b(R=>n.removeDomain(c),["prevent"])},{icon:e(()=>[u(N,null,{default:e(()=>[u(C)]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["label","prop"]))),128)),u(p,{label:" "},{default:e(()=>[u(w,{type:"primary",class:"m-r-sm",onClick:h[1]||(h[1]=c=>n.submitForm("dynamicValidateForm"))},{default:e(()=>[i]),_:1}),u(w,{class:"m-r-sm",onClick:n.addDomain},{default:e(()=>[d]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])}const{defineComponent:t}=B,{ref:a}=B,{TwoDelete:m}=uu;return S({render:r},t({setup(n,{expose:h}){h();const _=a({domains:[{value:"",key:-1}],email:""}),p=a(null),c={dynamicValidateForm:_,dynamicValidateFormRef:p,submitForm:()=>{p.value.validate(U=>{if(U)alert("submit!");else return console.log("error submit!!"),!1})},resetForm:()=>{p.value.resetFields()},removeDomain:U=>{var R=_.value.domains.indexOf(U);R!==-1&&_.value.domains.splice(R,1)},addDomain:()=>{_.value.domains.push({value:"",key:Date.now()})},ref:a,TwoDelete:m};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"hl-demo7":function(){const{resolveComponent:o,createVNode:u,withCtx:e,createTextVNode:s,openBlock:g,createBlock:D}=B,V=s("\u63D0\u4EA4"),b=s("\u91CD\u7F6E");function v(t,a){const m=o("hl-input"),f=o("hl-form-item"),n=o("hl-button"),h=o("hl-form");return g(),D(h,{ref:"numberValidateFormRef",model:t.numberValidateForm,inline:"",style:{"--form-padding-y":"6px"}},{default:e(()=>[u(f,{label:"\u5E74\u9F84",prop:"age",s:"",rules:[{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"},{type:"number",message:"\u5E74\u9F84\u5FC5\u987B\u4E3A\u6570\u5B57\u503C"}]},{default:e(()=>[u(m,{modelValue:t.numberValidateForm.age,"onUpdate:modelValue":a[0]||(a[0]=_=>t.numberValidateForm.age=_),modelModifiers:{number:!0},"native-type":"age",autocomplete:"off",block:""},null,8,["modelValue"])]),_:1}),u(f,null,{default:e(()=>[u(n,{type:"primary",class:"m-r-sm",onClick:a[1]||(a[1]=_=>t.submitForm("numberValidateForm"))},{default:e(()=>[V]),_:1}),u(n,{onClick:a[2]||(a[2]=_=>t.resetForm("numberValidateForm"))},{default:e(()=>[b]),_:1})]),_:1})]),_:1},8,["model"])}const{defineComponent:E}=B,{HlMessage:i}=Z,{ref:d}=B;return S({render:v},E({setup(t,{expose:a}){a();const m=d({age:""}),f=d(null),_={numberValidateForm:m,numberValidateFormRef:f,submitForm:()=>{f.value.validate(p=>{p&&i("submit")})},resetForm:()=>{f.value.resetFields()},HlMessage:i,ref:d};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}))}(),"hl-demo8":function(){const{createTextVNode:o,resolveComponent:u,withCtx:e,createVNode:s,createElementVNode:g,Fragment:D,openBlock:V,createElementBlock:b}=B,v=o(" \u5C3A\u5BF8\uFF1A"),E=o("\u5C0F"),i=o("\u9ED8\u8BA4"),d=o("\u5927"),r=g("br",null,null,-1),t=g("br",null,null,-1),a=o("\u7ACB\u5373\u521B\u5EFA"),m=o("\u53D6\u6D88");function f(p,C){const N=u("hl-radio"),w=u("hl-radio-group"),I=u("hl-input"),c=u("hl-form-item"),U=u("hl-option"),R=u("hl-select"),j=u("hl-date-picker"),q=u("hl-time-picker"),k=u("hl-group"),T=u("hl-checkbox"),W=u("hl-checkbox-group"),L=u("hl-button"),$=u("hl-form");return V(),b(D,null,[v,s(w,{modelValue:p.size,"onUpdate:modelValue":C[0]||(C[0]=P=>p.size=P)},{default:e(()=>[s(N,{label:"sm"},{default:e(()=>[E]),_:1}),s(N,{label:"md"},{default:e(()=>[i]),_:1}),s(N,{label:"lg"},{default:e(()=>[d]),_:1})]),_:1},8,["modelValue"]),r,t,s($,{ref:"form",model:p.sizeForm,width:["md:col-4","col"],size:p.size},{default:e(()=>[s(c,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:e(()=>[s(I,{modelValue:p.sizeForm.name,"onUpdate:modelValue":C[1]||(C[1]=P=>p.sizeForm.name=P)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[s(R,{modelValue:p.sizeForm.region,"onUpdate:modelValue":C[2]||(C[2]=P=>p.sizeForm.region=P),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[s(U,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),s(U,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),s(c,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:e(()=>[s(k,{merge:"",indent:""},{default:e(()=>[s(j,{modelValue:p.sizeForm.date1,"onUpdate:modelValue":C[3]||(C[3]=P=>p.sizeForm.date1=P),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F"},null,8,["modelValue"]),s(q,{modelValue:p.sizeForm.date2,"onUpdate:modelValue":C[4]||(C[4]=P=>p.sizeForm.date2=P),placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1}),s(c,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:e(()=>[s(W,{modelValue:p.sizeForm.type,"onUpdate:modelValue":C[5]||(C[5]=P=>p.sizeForm.type=P)},{default:e(()=>[s(T,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),s(T,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),s(T,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),s(c,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:e(()=>[s(w,{modelValue:p.sizeForm.resource,"onUpdate:modelValue":C[6]||(C[6]=P=>p.sizeForm.resource=P)},{default:e(()=>[s(N,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),s(N,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),s(c,{offset:"md:offset-4"},{default:e(()=>[s(L,{type:"primary",class:"m-r-sm",onClick:p.onSubmit},{default:e(()=>[a]),_:1},8,["onClick"]),s(L,null,{default:e(()=>[m]),_:1})]),_:1})]),_:1},8,["model","size"])],64)}const{defineComponent:n}=B,{ref:h}=B;return S({render:f},n({setup(p,{expose:C}){C();const N=h("md"),w=h({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),c={size:N,sizeForm:w,onSubmit:()=>{console.log("submit!")},ref:h};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"hl-demo9":function(){const{createElementVNode:o,resolveComponent:u,withCtx:e,createVNode:s,createTextVNode:g,openBlock:D,createBlock:V}=B,b=o("p",null,'"Full Name" label is automatically attached to the input:',-1),v=o("p",null,[g(' "Your Information" serves as a label for the group of inputs. '),o("br"),g(' You must specify labels on the individal inputs. Placeholders are not replacements for using the "label" attribute. ')],-1);function E(t,a){const m=u("hl-alert"),f=u("hl-input"),n=u("hl-form-item"),h=u("hl-group"),_=u("hl-form");return D(),V(_,{"labhl-position":"left","label-width":"150px",style:{"max-width":"460px"}},{default:e(()=>[s(h,{gap:"var(--md)"},{default:e(()=>[s(m,{type:"info","show-icon":"",closable:!1},{default:e(()=>[b]),_:1}),s(n,{label:"Full Name"},{default:e(()=>[s(f,{modelValue:t.formAccessibility.fullName,"onUpdate:modelValue":a[0]||(a[0]=p=>t.formAccessibility.fullName=p)},null,8,["modelValue"])]),_:1})]),_:1}),s(h,{gap:"var(--md)"},{default:e(()=>[s(m,{type:"info","show-icon":"",closable:!1},{default:e(()=>[v]),_:1}),s(n,{label:"Your Information"},{default:e(()=>[s(f,{modelValue:t.formAccessibility.firstName,"onUpdate:modelValue":a[1]||(a[1]=p=>t.formAccessibility.firstName=p),label:"First Name",placeholder:"First Name"},null,8,["modelValue"]),s(f,{modelValue:t.formAccessibility.lastName,"onUpdate:modelValue":a[2]||(a[2]=p=>t.formAccessibility.lastName=p),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}const{defineComponent:i}=B,{reactive:d}=B;return S({render:E},i({setup(t,{expose:a}){a();const f={formAccessibility:d({fullName:"",firstName:"",lastName:""}),reactive:d};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}(),"hl-demo10":function(){const{resolveComponent:o,createVNode:u,withCtx:e,Fragment:s,openBlock:g,createElementBlock:D}=B;function V(i,d){const r=o("hl-input"),t=o("hl-form-item"),a=o("hl-option"),m=o("hl-select"),f=o("hl-form");return g(),D(s,null,[u(f,{model:i.formInline,width:["col-24","col-24"],class:"hl-row grid grid-direction-vertical xl:count-3 lg:count-2",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:e(()=>[u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[0]||(d[0]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(m,{modelValue:i.formInline.region,"onUpdate:modelValue":d[1]||(d[1]=n=>i.formInline.region=n),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:e(()=>[u(a,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),u(a,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[2]||(d[2]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[3]||(d[3]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[4]||(d[4]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[5]||(d[5]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),u(f,{model:i.formInline,width:["col-5","col-19"],gap:"var(--md)",class:"hl-row grid grid-direction-vertical xl:count-2 lg:count-2 m-t-xxl",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:e(()=>[u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[6]||(d[6]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:e(()=>[u(m,{modelValue:i.formInline.region,"onUpdate:modelValue":d[7]||(d[7]=n=>i.formInline.region=n),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:e(()=>[u(a,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),u(a,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[8]||(d[8]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[9]||(d[9]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[10]||(d[10]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8868\u5355\u540D\u79F0"},{default:e(()=>[u(r,{modelValue:i.formInline.user,"onUpdate:modelValue":d[11]||(d[11]=n=>i.formInline.user=n),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}const{defineComponent:b}=B,{ref:v}=B;return S({render:V},b({setup(i,{expose:d}){d();const t={formInline:v({user:"",region:""}),ref:v};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}))}()}},lu=l("h1",null,"Form \u8868\u5355",-1),ou=l("p",null,"\u7531\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u63A7\u4EF6\u7EC4\u6210\uFF0C\u7528\u4EE5\u6536\u96C6\u3001\u6821\u9A8C\u3001\u63D0\u4EA4\u6570\u636E",-1),tu=l("div",null,[l("p",null,"\u5728 Form \u7EC4\u4EF6\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8868\u5355\u57DF\u7531\u4E00\u4E2A FormItem \u7EC4\u4EF6\u6784\u6210\uFF0C\u8868\u5355\u57DF\u4E2D\u53EF\u4EE5\u653E\u7F6E\u5404\u79CD\u7C7B\u578B\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u5305\u62EC Input\u3001Select\u3001Checkbox\u3001Radio\u3001Switch\u3001DatePicker\u3001TimePicker")],-1),ru=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form :model="form" :width="['col-6','col-15']" :label-position="['items-right', 'items-middle']" item-gap="var(--md)">
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0">
      <hl-input v-model="form.name" placeholder="\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="form.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4">
      <hl-date-picker v-model="form.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" class="m-r-sm" />
    </hl-form-item>

    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90">
      <hl-radio-group v-model="form.resource" type="primary">
        <hl-radio label="1">\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9</hl-radio>
        <hl-radio label="2">\u7EBF\u4E0B\u573A\u5730\u514D\u8D39</hl-radio>
      </hl-radio-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F">
      <hl-input v-model="form.desc" native-type="textarea" :rows="3" block />
    </hl-form-item>
    <hl-form-item offset="offset-6">
      <hl-button type="primary" class="m-r-md" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</hl-button>
      <hl-button>\u53D6\u6D88</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  region: 'shanghai',
  date1: '',
  type: [],
  resource: '1',
  desc: '',
})
const onSubmit = () => {
  console.log('submit!')
}

<\/script>
`)],-1),nu=l("div",{class:"doc-tip"},[l("p",null,[F("W3C \u6807\u51C6\u4E2D\u6709\u5982\u4E0B"),l("a",{href:"https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"},"\u89C4\u5B9A"),F("\uFF1A")]),l("p",null,[F("\u5373\uFF1A\u5F53\u4E00\u4E2A form \u5143\u7D20\u4E2D\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u5728\u8BE5\u8F93\u5165\u6846\u4E2D\u6309\u4E0B\u56DE\u8F66\u5E94\u63D0\u4EA4\u8BE5\u8868\u5355\u3002\u5982\u679C\u5E0C\u671B\u963B\u6B62\u8FD9\u4E00\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EF\u4EE5\u5728 From \u7EC4\u4EF6\u4E0A\u6DFB\u52A0 "),l("code",null,"@submit.native.prevent"),F("\u3002")])],-1),au=l("h2",{id:"chui-zhi-biao-dan"},[l("a",{class:"header-anchor",href:"#chui-zhi-biao-dan"}),F(" \u5782\u76F4\u8868\u5355")],-1),mu=l("p",null,[F("\u5F53\u4F60\u6CA1\u6709\u8BBE\u7F6E"),l("code",null,"width"),F(" \u5C5E\u6027\u65F6\uFF0Cform\u7EC4\u4EF6\u9ED8\u8BA4\u628A\u6807\u9898\u548C\u8868\u5355\u5143\u7D20\u5206\u884C\u653E\u7F6E\u3002")],-1),du=l("div",null,[l("p",null,[F("\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),l("code",null,"width"),F(" \u5C5E\u6027\u4E3A"),l("code",null,"100%"),F(),l("code",null,"block"),F(" \u6216\u8005 "),l("code",null,"col-24"),F("\u6765\u5B9E\u73B0\u6574\u884C\u7684\u6548\u679C\u3002")])],-1),iu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form :model="formInline" fill>
    <hl-form-item label="\u5BA1\u6279\u4EBA">
      <hl-input v-model="formInline.user" placeholder="\u5BA1\u6279\u4EBA" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item>
      <hl-button type="primary" block @click="onSubmit">\u67E5\u8BE2</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formInline = ref({
  user: '',
  region: '',
})
const onSubmit = () => {
  console.log('submit!')
}
<\/script>
`)],-1),su=l("h2",{id:"xing-nei-biao-dan"},[l("a",{class:"header-anchor",href:"#xing-nei-biao-dan"}),F(" \u884C\u5185\u8868\u5355")],-1),Fu=l("p",null,"\u5F53\u5782\u76F4\u65B9\u5411\u7A7A\u95F4\u53D7\u9650\u4E14\u8868\u5355\u8F83\u7B80\u5355\u65F6\uFF0C\u53EF\u4EE5\u5728\u4E00\u884C\u5185\u653E\u7F6E\u8868\u5355\u3002",-1),cu=l("div",null,[l("p",null,[F("\u8BBE\u7F6E "),l("code",null,"inline"),F(" \u5C5E\u6027\u53EF\u4EE5\u8BA9\u8868\u5355\u57DF\u53D8\u4E3A\u884C\u5185\u7684\u8868\u5355\u57DF")])],-1),pu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form inline :model="formInline" gap="var(--md)" item-gap="var(--md)">
    <hl-form-item label="\u5BA1\u6279\u4EBA" required>
      <hl-input v-model="formInline.user" placeholder="\u5BA1\u6279\u4EBA" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item>
      <hl-button type="primary" @click="onSubmit">\u67E5\u8BE2</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formInline = ref({
  user: '',
  region: '',
})
const onSubmit = () => {
  console.log('submit!')
}

<\/script>
`)],-1),hu=l("h2",{id:"dui-qi-fang-shi"},[l("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),F(" \u5BF9\u9F50\u65B9\u5F0F")],-1),fu=l("p",null,"\u6839\u636E\u5177\u4F53\u76EE\u6807\u548C\u5236\u7EA6\u56E0\u7D20\uFF0C\u9009\u62E9\u6700\u4F73\u7684\u6807\u7B7E\u5BF9\u9F50\u65B9\u5F0F\u3002",-1),Eu=l("div",null,[l("p",null,[F("\u901A\u8FC7\u8BBE\u7F6E "),l("code",null,"label-position"),F(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u5BF9\u9F50\u65B9\u5F0F\u4E5F\u652F\u6301\u54CD\u5E94\u5F0F\u6807\u7B7E\u4F8B\u5982\uFF1A"),l("code",null,"xl:items-right")])],-1),bu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form :label-position="[labelPosition, labelPosition2]" :width="['md:col-6','md:col-14']" :model="formLabelAlign">
    <hl-form-item label="Label\u5BF9\u9F50\uFF1A">
      <hl-group gap="var(--sm)">
        <hl-select v-model="labelPosition" placeholder="\u6C34\u5E73\u5BF9\u9F50">
          <hl-option label="items-left" value="items-left" />
          <hl-option label="items-center" value="items-center" />
          <hl-option label="items-right" value="items-right" />
        </hl-select>
        <hl-select v-model="labelPosition2" placeholder="\u6C34\u5E73\u5BF9\u9F50">
          <hl-option label="items-top" value="items-top" />
          <hl-option label="items-middle" value="items-middle" />
          <hl-option label="items-bottom" value="items-bottom" />
        </hl-select>
      </hl-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF\uFF1A">
      <hl-input v-model="formLabelAlign.region" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F\uFF1A">
      <hl-input v-model="formLabelAlign.type" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F\uFF1A">
      <hl-input v-model="formLabelAlign.type" native-type="textarea" :rows="3" block />
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const labelPosition = ref('items-left')
const labelPosition2 = ref('items-middle')
const formLabelAlign = ref({
  name: '',
  region: '',
  type: '',
})
<\/script>
`)],-1),Bu=l("h2",{id:"biao-dan-yan-zheng"},[l("a",{class:"header-anchor",href:"#biao-dan-yan-zheng"}),F(" \u8868\u5355\u9A8C\u8BC1")],-1),_u=l("p",null,"\u5728\u8868\u5355\u9A8C\u8BC1\u5C3D\u53EF\u80FD\u8BA9\u7528\u6237\u66F4\u65E9\u5730\u53D1\u73B0\u5E76\u7EA0\u6B63\u9519\u8BEF\u7684\u8F93\u5165\u3002",-1),Au=l("div",null,[l("p",null,[F("Form \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8868\u5355\u9A8C\u8BC1\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 "),l("code",null,"rules"),F(" \u5C5E\u6027\u4F20\u5165\u7EA6\u5B9A\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5E76\u5C06 Form-Item \u7684 "),l("code",null,"prop"),F(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u9700\u6821\u9A8C\u7684\u5B57\u6BB5\u540D\u5373\u53EF\u3002\u6821\u9A8C\u89C4\u5219\u53C2\u89C1 "),l("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator")])],-1),Cu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    :label-position="['items-right', 'items-left']"
    gap="var(--lg)"
    item-gap="var(--md)"
    :width="['md:col-6','md:col-18']"
  >
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0" prop="name">
      <hl-input v-model="ruleForm.name" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5730\u70B9" prop="location">
      <hl-cascader v-model="ruleForm.location" :options="locations" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF" prop="region">
      <hl-select v-model="ruleForm.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4" required>
      <hl-row>
        <hl-col :span="12">
          <hl-form-item prop="date1">
            <hl-date-picker v-model="ruleForm.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" block />
          </hl-form-item>
        </hl-col>
        <hl-col :span="12">
          <hl-form-item prop="date2">
            <hl-time-picker v-model="ruleForm.date2" placeholder="\u9009\u62E9\u65F6\u95F4" block />
          </hl-form-item>
        </hl-col>
      </hl-row>
    </hl-form-item>
    <hl-form-item label="\u5373\u65F6\u914D\u9001" prop="delivery">
      <hl-switch v-model="ruleForm.delivery" type="primary" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u6027\u8D28" prop="type">
      <hl-checkbox-group v-model="ruleForm.type">
        <hl-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type" />
        <hl-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type" />
      </hl-checkbox-group>
    </hl-form-item>
    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90" prop="resource">
      <hl-radio-group v-model="ruleForm.resource">
        <hl-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9" />
        <hl-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39" />
      </hl-radio-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F" prop="desc">
      <hl-input v-model="ruleForm.desc" native-type="textarea" block />
    </hl-form-item>
    <hl-form-item offset="md:offset-6">
      <hl-button type="primary" class="m-r-sm" @click="submitForm('ruleForm')">\u7ACB\u5373\u521B\u5EFA</hl-button>
      <hl-button class="m-r-sm" @click="resetForm('ruleForm')">\u91CD\u7F6E</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const ruleForm = ref({
  location: [],
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const rules = ref({
  name: [
    { required: true, message: '\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0', trigger: 'blur' },
    {
      min: 3,
      max: 5,
      message: '\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26',
      trigger: 'blur',
    },
  ],
  location: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u5730\u70B9', trigger: 'change' }],
  region: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF', trigger: 'change' }],
  date1: [
    {
      type: 'date',
      required: true,
      message: '\u8BF7\u9009\u62E9\u65E5\u671F',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '\u8BF7\u9009\u62E9\u65F6\u95F4',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28',
      trigger: 'change',
    },
  ],
  resource: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90', trigger: 'change' }],
  desc: [{ required: true, message: '\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F', trigger: 'blur' }],
})
const locations = ref([
  {
    value: 'BJ',
    label: '\u5317\u4EAC',
    children: [
      { value: 'HD', label: '\u6D77\u6DC0\u533A' },
      { value: 'XW', label: '\u5BA3\u6B66\u533A' },
      {
        value: 'CW',
        label: '\u5D07\u6587\u533A',
        children: [
          { value: 'WFJ', label: '\u738B\u5E9C\u4E95' },
          { value: 'DD', label: '\u4E1C\u5355' },
        ],
      },
    ],
  },
])
const ruleFormRef = ref(null)

const submitForm = () => {
  ruleFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = () => {
  ruleFormRef.value.resetFields()
}

<\/script>
`)],-1),gu=l("h2",{id:"zi-ding-yi-xiao-yan-gui-ze"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-xiao-yan-gui-ze"}),F(" \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219")],-1),Du=l("p",null,"\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u6765\u5B8C\u6210\u5BC6\u7801\u7684\u4E8C\u6B21\u9A8C\u8BC1\u3002",-1),vu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :width="['md:col-4','col']">
    <hl-form-item label="\u5BC6\u7801" prop="pass">
      <hl-input v-model="ruleForm.pass" native-type="password" autocomplete="off" />
    </hl-form-item>
    <hl-form-item label="\u786E\u8BA4\u5BC6\u7801" prop="checkPass">
      <hl-input v-model="ruleForm.checkPass" native-type="password" autocomplete="off" />
    </hl-form-item>
    <hl-form-item label="\u5E74\u9F84" prop="age">
      <hl-input v-model.number="ruleForm.age" />
    </hl-form-item>
    <hl-form-item label=" ">
      <hl-button type="primary" class="m-r-sm" @click="submitForm('ruleForm')">\u63D0\u4EA4</hl-button>
      <hl-button @click="resetForm('ruleForm')">\u91CD\u7F6E</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const ruleForm = ref({
  pass: '',
  checkPass: '',
  age: '',
})
const ruleFormRef = ref(null)

const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('\u8BF7\u8F93\u5165\u6570\u5B57\u503C'))
    } else {
      if (value < 18) {
        callback(new Error('\u5FC5\u987B\u5E74\u6EE118\u5C81'))
      } else {
        callback()
      }
    }
  }, 1000)
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('\u8BF7\u8F93\u5165\u5BC6\u7801'))
  } else {
    if (ruleForm.value.checkPass !== '') {
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801'))
  } else if (value !== ruleForm.value.pass) {
    callback(new Error('\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'))
  } else {
    callback()
  }
}

const rules = ref({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = () => {
  ruleFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = () => {
  ruleFormRef.value.resetFields()
}

<\/script>
`)],-1),Vu=l("div",{class:"doc-tip"},[l("p",null,[F("\u81EA\u5B9A\u4E49\u6821\u9A8C callback \u5FC5\u987B\u88AB\u8C03\u7528\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 "),l("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator"),F("\u3002 "),l("em",null,[l("strong",null,[F("\u5982\u679CWebpack5\u62A5async_validator\u4E0D\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u7C7B\u4F3C\u7684\u9519\u8BEF\uFF0C\u8BF7\u5728alias\u914D\u7F6E\u4E2D\u589E\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A"),l("code",null,'"async-validator": "async-validator/dist-web/index.js",')])])])],-1),yu=l("h2",{id:"dong-tai-zeng-jian-biao-dan-xiang"},[l("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-dan-xiang"}),F(" \u52A8\u6001\u589E\u51CF\u8868\u5355\u9879")],-1),ku=l("div",null,[l("p",null,"\u9664\u4E86\u5728 Form \u7EC4\u4EF6\u4E0A\u4E00\u6B21\u6027\u4F20\u9012\u6240\u6709\u7684\u9A8C\u8BC1\u89C4\u5219\u5916\u8FD8\u53EF\u4EE5\u5728\u5355\u4E2A\u7684\u8868\u5355\u57DF\u4E0A\u4F20\u9012\u5C5E\u6027\u7684\u9A8C\u8BC1\u89C4\u5219")],-1),wu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form ref="dynamicValidateFormRef" :model="dynamicValidateForm" :width="['md:col-4','col']">
    <hl-form-item
      prop="email"
      label="\u90AE\u7BB1"
      :rules="[
        { required: true, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740', trigger: 'blur' },
        { type: 'email', message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740', trigger: ['blur', 'change'] }
      ]"
    >
      <hl-input v-model="dynamicValidateForm.email" />
    </hl-form-item>
    <hl-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'\u57DF\u540D' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true, message: '\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A', trigger: 'blur'
      }"
    >
      <hl-input v-model="domain.value" />
      <hl-button type="primary" effect="light" class="m-l-sm" equal @click.prevent="removeDomain(domain)">
        <template #icon>
          <hl-icon><two-delete /></hl-icon>
        </template>
      </hl-button>
    </hl-form-item>
    <hl-form-item label=" ">
      <hl-button type="primary" class="m-r-sm" @click="submitForm('dynamicValidateForm')">\u63D0\u4EA4</hl-button>
      <hl-button class="m-r-sm" @click="addDomain">\u65B0\u589E\u57DF\u540D</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoDelete } from '@hongluan-ui/icons'

const dynamicValidateForm = ref({
  domains: [
    {
      value: '',
      key: -1,
    },
  ],
  email: '',
})
const dynamicValidateFormRef = ref(null)

const submitForm = () => {
  dynamicValidateFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = () => {
  dynamicValidateFormRef.value.resetFields()
}
const removeDomain = item => {
  var index = dynamicValidateForm.value.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.value.domains.splice(index, 1)
  }
}
const addDomain = () => {
  dynamicValidateForm.value.domains.push({
    value: '',
    key: Date.now(),
  })
}

<\/script>
`)],-1),Iu=l("h2",{id:"shu-zi-lei-xing-yan-zheng"},[l("a",{class:"header-anchor",href:"#shu-zi-lei-xing-yan-zheng"}),F(" \u6570\u5B57\u7C7B\u578B\u9A8C\u8BC1")],-1),Nu=l("div",null,[l("p",null,[F("\u6570\u5B57\u7C7B\u578B\u7684\u9A8C\u8BC1\u9700\u8981\u5728 "),l("code",null,"v-model"),F(" \u5904\u52A0\u4E0A "),l("code",null,".number"),F(" \u7684\u4FEE\u9970\u7B26\uFF0C\u8FD9\u662F "),l("code",null,"Vue"),F(" \u81EA\u8EAB\u63D0\u4F9B\u7684\u7528\u4E8E\u5C06\u7ED1\u5B9A\u503C\u8F6C\u5316\u4E3A "),l("code",null,"number"),F(" \u7C7B\u578B\u7684\u4FEE\u9970\u7B26\u3002")])],-1),Pu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form ref="numberValidateFormRef" :model="numberValidateForm" inline style="--form-padding-y: 6px">
    <hl-form-item
      label="\u5E74\u9F84"
      prop="age"
      s
      :rules="[
        { required: true, message: '\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'},
        { type: 'number', message: '\u5E74\u9F84\u5FC5\u987B\u4E3A\u6570\u5B57\u503C'}
      ]"
    >
      <hl-input v-model.number="numberValidateForm.age" native-type="age" autocomplete="off" block />
    </hl-form-item>
    <hl-form-item>
      <hl-button type="primary" class="m-r-sm" @click="submitForm('numberValidateForm')">\u63D0\u4EA4</hl-button>
      <hl-button @click="resetForm('numberValidateForm')">\u91CD\u7F6E</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { HlMessage } from 'hongluan-ui'
import { ref } from 'vue'

const numberValidateForm = ref({
  age: '',
})
const numberValidateFormRef = ref(null)

const submitForm = () => {
  numberValidateFormRef.value.validate(valid => {
    if (valid) {
      HlMessage('submit')
    }
  })
}
const resetForm = () => {
  numberValidateFormRef.value.resetFields()
}

<\/script>
`)],-1),zu=l("h2",{id:"biao-dan-nei-zu-jian-chi-cun-kong-zhi"},[l("a",{class:"header-anchor",href:"#biao-dan-nei-zu-jian-chi-cun-kong-zhi"}),F(" \u8868\u5355\u5185\u7EC4\u4EF6\u5C3A\u5BF8\u63A7\u5236")],-1),Uu=l("p",null,[F("\u901A\u8FC7\u8BBE\u7F6E Form \u4E0A\u7684 "),l("code",null,"size"),F(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8BE5\u8868\u5355\u5185\u6240\u6709\u53EF\u8C03\u8282\u5927\u5C0F\u7684\u7EC4\u4EF6\u7EE7\u627F\u8BE5\u5C3A\u5BF8\u3002FormItem \u4E5F\u5177\u6709\u8BE5\u5C5E\u6027\u3002")],-1),Su=l("div",null,[l("p",null,[F("\u5982\u679C\u5E0C\u671B\u67D0\u4E2A\u8868\u5355\u9879\u6216\u67D0\u4E2A\u8868\u5355\u7EC4\u4EF6\u7684\u5C3A\u5BF8\u4E0D\u540C\u4E8E Form \u4E0A\u7684"),l("code",null,"size"),F("\u5C5E\u6027\uFF0C\u76F4\u63A5\u4E3A\u8FD9\u4E2A\u8868\u5355\u9879\u6216\u8868\u5355\u7EC4\u4EF6\u8BBE\u7F6E\u81EA\u5DF1\u7684"),l("code",null,"size"),F("\u5373\u53EF\u3002")])],-1),Ru=l("pre",null,[l("code",{class:"html"},` <template>
  \u5C3A\u5BF8\uFF1A<hl-radio-group v-model="size">
    <hl-radio label="sm">\u5C0F</hl-radio>
    <hl-radio label="md">\u9ED8\u8BA4</hl-radio>
    <hl-radio label="lg">\u5927</hl-radio>
  </hl-radio-group>
  <br><br>

  <hl-form ref="form" :model="sizeForm" :width="['md:col-4','col']" :size="size">
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0">
      <hl-input v-model="sizeForm.name" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="sizeForm.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4">
      <hl-group merge indent>
        <hl-date-picker v-model="sizeForm.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" />
        <hl-time-picker v-model="sizeForm.date2" placeholder="\u9009\u62E9\u65F6\u95F4" />
      </hl-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u6027\u8D28">
      <hl-checkbox-group v-model="sizeForm.type">
        <hl-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type" />
        <hl-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type" />
        <hl-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type" />
      </hl-checkbox-group>
    </hl-form-item>
    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90">
      <hl-radio-group v-model="sizeForm.resource">
        <hl-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9" />
        <hl-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39" />
      </hl-radio-group>
    </hl-form-item>
    <hl-form-item offset="md:offset-4">
      <hl-button type="primary" class="m-r-sm" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</hl-button>
      <hl-button>\u53D6\u6D88</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref('md')
const sizeForm = ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const onSubmit = () => {
  console.log('submit!')
}
<\/script>
`)],-1),ju=l("h2",{id:"ke-fang-wen-xing"},[l("a",{class:"header-anchor",href:"#ke-fang-wen-xing"}),F(" \u53EF\u8BBF\u95EE\u6027")],-1),qu=l("p",null,[F("\u5F53\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\uFF08\u6216\u8005Select\uFF0CCheckbox\u7B49\u76F8\u5173\u63A7\u4EF6\uFF09\u5728 "),l("code",null,"FormItem"),F(" \u91CC\u65F6\uFF0C\u8868\u5355\u9879\u7684\u6807\u7B7E\u5C06\u4F1A\u81EA\u52A8\u9644\u52A0\u5230Input\u4E0A\u3002\u5F53\u6709\u591A\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u8868\u5355\u9879\u5C06\u4F1A\u6839\u636E"),l("a",{href:"https://www.w3.org/WAI/standards-guidelines/aria/"},"WAI-ARIA"),F("\u89C4\u8303\uFF0C\u8D4B\u4E88 "),l("code",null,"role"),F(" \u5C5E\u6027\u4E3A"),l("a",{href:"https://www.w3.org/TR/wai-aria/#group"},"group"),F(" \u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u9644\u52A0\u6807\u7B7E\u5230\u76F8\u5E94\u7684\u8F93\u5165\u6846\u3002")],-1),Tu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form labhl-position="left" label-width="150px" style="max-width: 460px">
    <hl-group gap="var(--md)">
      <hl-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </hl-alert>
      <hl-form-item label="Full Name">
        <hl-input v-model="formAccessibility.fullName" />
      </hl-form-item>
    </hl-group>
    <hl-group gap="var(--md)">
      <hl-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br>
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </hl-alert>
      <hl-form-item label="Your Information">
        <hl-input
          v-model="formAccessibility.firstName"
          label="First Name"
          placeholder="First Name"
        />

        <hl-input
          v-model="formAccessibility.lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </hl-form-item>
    </hl-group>
  </hl-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})

<\/script>

`)],-1),Lu=l("h2",{id:"li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"},[l("a",{class:"header-anchor",href:"#li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"}),F(" \u5229\u7528Grid\u7EC4\u4EF6\u521B\u5EFA\u591A\u5217\u8868\u5355")],-1),xu=l("p",null,"\u4F7F\u7528\u9E3F\u9E3E\u5F3A\u5927\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u53EF\u521B\u9020\u51FA\u66F4\u591A\u4E30\u5BCC\u4E14\u54CD\u5E94\u5F0F\u7684\u8868\u5355\u5E03\u5C40",-1),Ou=l("div",null,[l("p",null,"\u672C\u793A\u4F8B\u4F7F\u7528class\u7C7B\u540D\u5C06 Form \u7EC4\u4EF6\u6784\u5EFA\u6210\u4E00\u4E2A Row\uFF0C \u5E76\u5C06\u5176\u8F85\u4E8E\u6805\u683C\u7CFB\u7EDF\u7684\u7279\u6027\u3002")],-1),Wu=l("pre",null,[l("code",{class:"html"},` <template>
  <hl-form
    :model="formInline"
    :width="['col-24','col-24']"
    class="hl-row grid grid-direction-vertical xl:count-3 lg:count-2"
    style="--row-gap-y: var(--md); --row-gap-x:var(--md)"
  >
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
  </hl-form>

  <hl-form
    :model="formInline"
    :width="['col-5','col-19']"
    gap="var(--md)"
    class="hl-row grid grid-direction-vertical xl:count-2 lg:count-2 m-t-xxl"
    style="--row-gap-y: var(--md); --row-gap-x:var(--md)"
  >
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formInline = ref({
  user: '',
  region: '',
})
<\/script>
`)],-1),$u=Q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>Record&lt;string, any&gt;</td><td>\u2014</td><td>\u2014</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td>FormRules</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inline</td><td>\u884C\u5185\u8868\u5355\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>left/center/right/top/middle/bottom</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Grid \u4E2D\u63D0\u4F9B\u7684\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-suffix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-prefix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u524D\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>hide-required-asterisk</td><td>\u662F\u5426\u663E\u793A\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>validate-on-rule-change</td><td>\u662F\u5426\u5728 <code>rules</code> \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E\u6BCF\u4E2A FormItem \u7684\u5782\u76F4\u95F4\u8DDD\u3002\u7531\u4E8EForm\u91C7\u7528Flex\u5E03\u5C40\uFF0C\u6240\u4EE5\u53EA\u6709Form\u4E0B\u7684\u76F4\u63A5\u5B50FormItem\u624D\u8D77\u4F5C\u7528</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>item-gap</td><td>\u8BBE\u7F6E FormItem \u4E0B\u7684 label \u548C content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E<code>item-gap-x</code>\u6216<code>item-gap-y</code></td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002\u82E5\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u5355\u5185\u7EC4\u4EF6\u4E0A\u7684 disabled \u5C5E\u6027\u4E0D\u518D\u751F\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="rules"><a class="header-anchor" href="#rules"></a> Rules</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>string</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</td><td><code>(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>validateField</td><td>\u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr><tr><td>scrollToField</td><td>\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u5B57\u6BB5</td><td><code>(prop: FormItemProp) =&gt; void</code></td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u6216\u8005 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1</td><td>(prop: FormItemProp, isValid: boolean, message: string) =&gt; void</td></tr></tbody></table><h2 id="form-item-attributes"><a class="header-anchor" href="#form-item-attributes"></a> Form Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684</td><td>string</td><td>\u4F20\u5165 Form \u7EC4\u4EF6\u7684 <code>model</code> \u4E2D\u7684\u5B57\u6BB5</td><td>\u2014</td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>right/left/top</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Layout \u4E2D\u63D0\u4F9B\u4E86\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09\u3002</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u586B\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219, \u5177\u4F53\u914D\u7F6E\u89C1\u4E0B\u8868, \u66F4\u591A\u5185\u5BB9\u53C2\u8003<a href="https://github.com/yiminghe/async-validator">async-validator</a></td><td>FormItemRule | FormItemRule[]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>error</td><td>\u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3A<code>error</code>\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u57DF\u4E0B\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>-</td></tr><tr><td>offset</td><td>\u5F53\u4F60\u672A\u8BBE\u7F6Elabel\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528offset\u63A7\u5236form-content\u7684\u504F\u79FB\uFF0C\u5177\u4F53\u53C2\u8003Grid\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F</td><td>string</td><td></td><td>-</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E form-item \u4E0B\u7684 form-label \u548C form-content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Eitem-gap</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E \u2248/ \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr></tbody></table><h4 id="formitemrule"><a class="header-anchor" href="#formitemrule"></a> FormItemRule</h4><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><h2 id="form-item-slots"><a class="header-anchor" href="#form-item-slots"></a> Form Item Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Form Item \u7684\u5185\u5BB9</td></tr><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u6807\u7B7E\u663E\u793A. \u53C2\u6570\u4E3A { label }</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u53C2\u6570\u4E3A { error }</td></tr></tbody></table><h2 id="form-item-methods"><a class="header-anchor" href="#form-item-methods"></a> Form Item Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>resetField</td><td>\u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8BE5\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr></tbody></table>',16);function Hu(o,u,e,s,g,D){const V=z("hl-demo0"),b=z("demo-block"),v=z("hl-demo1"),E=z("hl-demo2"),i=z("hl-demo3"),d=z("hl-demo4"),r=z("hl-demo5"),t=z("hl-demo6"),a=z("hl-demo7"),m=z("hl-demo8"),f=z("hl-demo9"),n=z("hl-demo10"),h=z("right-nav");return J(),X(G,null,[l("section",null,[lu,ou,y(b,{fs:""},{source:A(()=>[y(V)]),highlight:A(()=>[ru]),default:A(()=>[tu]),_:1}),nu,au,mu,y(b,{fs:""},{source:A(()=>[y(v)]),highlight:A(()=>[iu]),default:A(()=>[du]),_:1}),su,Fu,y(b,{fs:""},{source:A(()=>[y(E)]),highlight:A(()=>[pu]),default:A(()=>[cu]),_:1}),hu,fu,y(b,{fs:""},{source:A(()=>[y(i)]),highlight:A(()=>[bu]),default:A(()=>[Eu]),_:1}),Bu,_u,y(b,{fs:""},{source:A(()=>[y(d)]),highlight:A(()=>[Cu]),default:A(()=>[Au]),_:1}),gu,Du,y(b,{fs:""},{source:A(()=>[y(r)]),highlight:A(()=>[vu]),_:1}),Vu,yu,y(b,{fs:""},{source:A(()=>[y(t)]),highlight:A(()=>[wu]),default:A(()=>[ku]),_:1}),Iu,y(b,{fs:""},{source:A(()=>[y(a)]),highlight:A(()=>[Pu]),default:A(()=>[Nu]),_:1}),zu,Uu,y(b,{fs:""},{source:A(()=>[y(m)]),highlight:A(()=>[Ru]),default:A(()=>[Su]),_:1}),ju,qu,y(b,{fs:""},{source:A(()=>[y(f)]),highlight:A(()=>[Tu]),_:1}),Lu,xu,y(b,{fs:""},{source:A(()=>[y(n)]),highlight:A(()=>[Wu]),default:A(()=>[Ou]),_:1}),$u]),y(h)],64)}var Ku=K(eu,[["render",Hu]]);export{Ku as default};
