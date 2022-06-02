import{p as E,U as $,F as n,L as k,C as B,P as l,X as e,V as b,Q as o,M as a,R as v,W as w,ad as q,a4 as N,a2 as C,o as M}from"./vue.651ae949.js";import{c as T}from"./hongluan-icons.071444ab.js";import{H as L}from"./index.8fb14b93.js";import"./hongluan.44f21e2d.js";import"./highlight.687c59a9.js";const O=o("p",null,'"Full Name" label is automatically attached to the input:',-1),W=o("p",null,[a(' "Your Information" serves as a label for the group of inputs. '),o("br"),a(' You must specify labels on the individal inputs. Placeholders are not replacements for using the "label" attribute. ')],-1),H=E({setup(A){const t=$({fullName:"",firstName:"",lastName:""});return(h,m)=>{const d=n("hl-alert"),r=n("hl-input"),i=n("hl-form-item"),f=n("hl-group"),c=n("hl-form");return k(),B(c,{"labhl-position":"left","label-width":"150px",style:{"max-width":"460px"}},{default:l(()=>[e(f,{gap:"var(--md)"},{default:l(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:l(()=>[O]),_:1}),e(i,{label:"Full Name"},{default:l(()=>[e(r,{modelValue:b(t).fullName,"onUpdate:modelValue":m[0]||(m[0]=u=>b(t).fullName=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{gap:"var(--md)"},{default:l(()=>[e(d,{type:"info","show-icon":"",closable:!1},{default:l(()=>[W]),_:1}),e(i,{label:"Your Information"},{default:l(()=>[e(r,{modelValue:b(t).firstName,"onUpdate:modelValue":m[1]||(m[1]=u=>b(t).firstName=u),label:"First Name",placeholder:"First Name"},null,8,["modelValue"]),e(r,{modelValue:b(t).lastName,"onUpdate:modelValue":m[2]||(m[2]=u=>b(t).lastName=u),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}});var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const J=a("\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"),X=a("\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"),G=a("\u7ACB\u5373\u521B\u5EFA"),Q=a("\u53D6\u6D88"),K=E({setup(A){const t=$({name:"",region:"shanghai",date1:"",type:[],resource:"1",desc:""}),h=()=>{console.log("submit!")};return(m,d)=>{const r=n("hl-input"),i=n("hl-form-item"),f=n("hl-option"),c=n("hl-select"),u=n("hl-date-picker"),s=n("hl-radio"),p=n("hl-radio-group"),_=n("hl-button"),V=n("hl-form");return k(),B(V,{model:b(t),width:["col-6","col-15"],"label-position":["items-right","items-middle"],"item-gap":"var(--md)"},{default:l(()=>[e(i,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:l(()=>[e(r,{modelValue:b(t).name,"onUpdate:modelValue":d[0]||(d[0]=F=>b(t).name=F),placeholder:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(c,{modelValue:b(t).region,"onUpdate:modelValue":d[1]||(d[1]=F=>b(t).region=F),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:l(()=>[e(u,{modelValue:b(t).date1,"onUpdate:modelValue":d[2]||(d[2]=F=>b(t).date1=F),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",class:"m-r-sm"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:l(()=>[e(p,{modelValue:b(t).resource,"onUpdate:modelValue":d[3]||(d[3]=F=>b(t).resource=F),type:"primary"},{default:l(()=>[e(s,{label:"1"},{default:l(()=>[J]),_:1}),e(s,{label:"2"},{default:l(()=>[X]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:l(()=>[e(r,{modelValue:b(t).desc,"onUpdate:modelValue":d[4]||(d[4]=F=>b(t).desc=F),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1}),e(i,{offset:"offset-6"},{default:l(()=>[e(_,{type:"primary",class:"m-r-md",onClick:h},{default:l(()=>[G]),_:1}),e(_,null,{default:l(()=>[Q]),_:1})]),_:1})]),_:1},8,["model"])}}});var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const ee=a("\u63D0\u4EA4"),le=a("\u65B0\u589E\u57DF\u540D"),te=E({setup(A){const t=v({domains:[{value:"",key:-1}],email:""}),h=v(null),m=()=>{h.value.validate(i=>{if(i)alert("submit!");else return console.log("error submit!!"),!1})},d=i=>{var f=t.value.domains.indexOf(i);f!==-1&&t.value.domains.splice(f,1)},r=()=>{t.value.domains.push({value:"",key:Date.now()})};return(i,f)=>{const c=n("hl-input"),u=n("hl-form-item"),s=n("hl-icon"),p=n("hl-button"),_=n("hl-form");return k(),B(_,{ref_key:"dynamicValidateFormRef",ref:h,model:t.value,width:["md:col-4","col"]},{default:l(()=>[e(u,{prop:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",trigger:"blur"},{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}]},{default:l(()=>[e(c,{modelValue:t.value.email,"onUpdate:modelValue":f[0]||(f[0]=V=>t.value.email=V)},null,8,["modelValue"])]),_:1}),(k(!0),w(C,null,q(t.value.domains,(V,F)=>(k(),B(u,{key:V.key,label:"\u57DF\u540D"+F,prop:"domains."+F+".value",rules:{required:!0,message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}},{default:l(()=>[e(c,{modelValue:V.value,"onUpdate:modelValue":y=>V.value=y},null,8,["modelValue","onUpdate:modelValue"]),e(p,{type:"primary",effect:"light",class:"m-l-sm",equal:"",onClick:N(y=>d(V),["prevent"])},{icon:l(()=>[e(s,null,{default:l(()=>[e(b(T))]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["label","prop"]))),128)),e(u,{label:" "},{default:l(()=>[e(p,{type:"primary",class:"m-r-sm",onClick:f[1]||(f[1]=V=>m())},{default:l(()=>[ee]),_:1}),e(p,{class:"m-r-sm",onClick:r},{default:l(()=>[le]),_:1})]),_:1})]),_:1},8,["model"])}}});var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const ne=E({setup(A){const t=v({user:"",region:""});return(h,m)=>{const d=n("hl-input"),r=n("hl-form-item"),i=n("hl-option"),f=n("hl-select"),c=n("hl-form");return k(),w(C,null,[e(c,{model:t.value,width:["col-24","col-24"],class:"hl-row grid grid-direction-vertical xl:count-3 lg:count-2",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:l(()=>[e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[0]||(m[0]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(f,{modelValue:t.value.region,"onUpdate:modelValue":m[1]||(m[1]=u=>t.value.region=u),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(i,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(i,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[2]||(m[2]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[3]||(m[3]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[4]||(m[4]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[5]||(m[5]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),e(c,{model:t.value,width:["col-5","col-19"],gap:"var(--md)",class:"hl-row grid grid-direction-vertical xl:count-2 lg:count-2 m-t-xxl",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:l(()=>[e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[6]||(m[6]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{modelValue:t.value.region,"onUpdate:modelValue":m[7]||(m[7]=u=>t.value.region=u),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(i,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(i,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[8]||(m[8]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[9]||(m[9]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[10]||(m[10]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(d,{modelValue:t.value.user,"onUpdate:modelValue":m[11]||(m[11]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}});var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne});const ue=a("\u67E5\u8BE2"),re=E({setup(A){const t=v({user:"",region:""}),h=()=>{console.log("submit!")};return(m,d)=>{const r=n("hl-input"),i=n("hl-form-item"),f=n("hl-option"),c=n("hl-select"),u=n("hl-button"),s=n("hl-form");return k(),B(s,{inline:"",model:t.value,gap:"var(--md)","item-gap":"var(--md)"},{default:l(()=>[e(i,{label:"\u5BA1\u6279\u4EBA",required:""},{default:l(()=>[e(r,{modelValue:t.value.user,"onUpdate:modelValue":d[0]||(d[0]=p=>t.value.user=p),placeholder:"\u5BA1\u6279\u4EBA"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(c,{modelValue:t.value.region,"onUpdate:modelValue":d[1]||(d[1]=p=>t.value.region=p),placeholder:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(u,{type:"primary",onClick:h},{default:l(()=>[ue]),_:1})]),_:1})]),_:1},8,["model"])}}});var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});const me=a("\u63D0\u4EA4"),ie=a("\u91CD\u7F6E"),se=E({setup(A){const t=v({age:""}),h=v(null),m=()=>{h.value.validate(r=>{r&&L("submit")})},d=()=>{h.value.resetFields()};return(r,i)=>{const f=n("hl-input"),c=n("hl-form-item"),u=n("hl-button"),s=n("hl-form");return k(),B(s,{ref_key:"numberValidateFormRef",ref:h,model:t.value,inline:"",style:{"--form-padding-y":"6px"}},{default:l(()=>[e(c,{label:"\u5E74\u9F84",prop:"age",s:"",rules:[{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"},{type:"number",message:"\u5E74\u9F84\u5FC5\u987B\u4E3A\u6570\u5B57\u503C"}]},{default:l(()=>[e(f,{modelValue:t.value.age,"onUpdate:modelValue":i[0]||(i[0]=p=>t.value.age=p),modelModifiers:{number:!0},"native-type":"age",autocomplete:"off",block:""},null,8,["modelValue"])]),_:1}),e(c,null,{default:l(()=>[e(u,{type:"primary",class:"m-r-sm",onClick:i[1]||(i[1]=p=>m())},{default:l(()=>[me]),_:1}),e(u,{onClick:i[2]||(i[2]=p=>d())},{default:l(()=>[ie]),_:1})]),_:1})]),_:1},8,["model"])}}});var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});const he=E({setup(A){const t=v("items-left"),h=v("items-middle"),m=v({name:"",region:"",type:""});return(d,r)=>{const i=n("hl-option"),f=n("hl-select"),c=n("hl-group"),u=n("hl-form-item"),s=n("hl-input"),p=n("hl-form");return k(),B(p,{"label-position":[t.value,h.value],width:["md:col-6","md:col-14"],model:m.value},{default:l(()=>[e(u,{label:"Label\u5BF9\u9F50\uFF1A"},{default:l(()=>[e(c,{gap:"var(--sm)"},{default:l(()=>[e(f,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=_=>t.value=_),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:l(()=>[e(i,{label:"items-left",value:"items-left"}),e(i,{label:"items-center",value:"items-center"}),e(i,{label:"items-right",value:"items-right"})]),_:1},8,["modelValue"]),e(f,{modelValue:h.value,"onUpdate:modelValue":r[1]||(r[1]=_=>h.value=_),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:l(()=>[e(i,{label:"items-top",value:"items-top"}),e(i,{label:"items-middle",value:"items-middle"}),e(i,{label:"items-bottom",value:"items-bottom"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{label:"\u6D3B\u52A8\u533A\u57DF\uFF1A"},{default:l(()=>[e(s,{modelValue:m.value.region,"onUpdate:modelValue":r[2]||(r[2]=_=>m.value.region=_),block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:l(()=>[e(s,{modelValue:m.value.type,"onUpdate:modelValue":r[3]||(r[3]=_=>m.value.type=_),block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:l(()=>[e(s,{modelValue:m.value.type,"onUpdate:modelValue":r[4]||(r[4]=_=>m.value.type=_),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["label-position","model"])}}});var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he});const fe=a("\u63D0\u4EA4"),be=a("\u91CD\u7F6E"),_e=E({setup(A){const t=v({pass:"",checkPass:"",age:""}),h=v(null),i=v({pass:[{validator:(u,s,p)=>{s===""?p(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):(t.value.checkPass!==""&&h.value.validateField("checkPass"),p())},trigger:"blur"}],checkPass:[{validator:(u,s,p)=>{s===""?p(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):s!==t.value.pass?p(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):p()},trigger:"blur"}],age:[{validator:(u,s,p)=>{if(!s)return p(new Error("\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"));setTimeout(()=>{Number.isInteger(s)?s<18?p(new Error("\u5FC5\u987B\u5E74\u6EE118\u5C81")):p():p(new Error("\u8BF7\u8F93\u5165\u6570\u5B57\u503C"))},1e3)},trigger:"blur"}]}),f=()=>{h.value.validate(u=>{if(u)alert("submit!");else return console.log("error submit!!"),!1})},c=()=>{h.value.resetFields()};return(u,s)=>{const p=n("hl-input"),_=n("hl-form-item"),V=n("hl-button"),F=n("hl-form");return k(),B(F,{ref_key:"ruleFormRef",ref:h,model:t.value,rules:i.value,width:["md:col-4","col"]},{default:l(()=>[e(_,{label:"\u5BC6\u7801",prop:"pass"},{default:l(()=>[e(p,{modelValue:t.value.pass,"onUpdate:modelValue":s[0]||(s[0]=y=>t.value.pass=y),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"checkPass"},{default:l(()=>[e(p,{modelValue:t.value.checkPass,"onUpdate:modelValue":s[1]||(s[1]=y=>t.value.checkPass=y),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u5E74\u9F84",prop:"age"},{default:l(()=>[e(p,{modelValue:t.value.age,"onUpdate:modelValue":s[2]||(s[2]=y=>t.value.age=y),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),e(_,{label:" "},{default:l(()=>[e(V,{type:"primary",class:"m-r-sm",onClick:s[3]||(s[3]=y=>f())},{default:l(()=>[fe]),_:1}),e(V,{onClick:s[4]||(s[4]=y=>c())},{default:l(()=>[be]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e});const ve=a(" \u5C3A\u5BF8\uFF1A"),Fe=a("\u5C0F"),ye=a("\u9ED8\u8BA4"),Ve=a("\u5927"),De=o("br",null,null,-1),ke=o("br",null,null,-1),Ae=a("\u7ACB\u5373\u521B\u5EFA"),Ee=a("\u53D6\u6D88"),Be=E({setup(A){const t=v("md"),h=v({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),m=()=>{console.log("submit!")};return(d,r)=>{const i=n("hl-radio"),f=n("hl-radio-group"),c=n("hl-input"),u=n("hl-form-item"),s=n("hl-option"),p=n("hl-select"),_=n("hl-date-picker"),V=n("hl-time-picker"),F=n("hl-group"),y=n("hl-checkbox"),z=n("hl-checkbox-group"),x=n("hl-button"),I=n("hl-form");return k(),w(C,null,[ve,e(f,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=D=>t.value=D)},{default:l(()=>[e(i,{label:"sm"},{default:l(()=>[Fe]),_:1}),e(i,{label:"md"},{default:l(()=>[ye]),_:1}),e(i,{label:"lg"},{default:l(()=>[Ve]),_:1})]),_:1},8,["modelValue"]),De,ke,e(I,{ref:"form",model:h.value,width:["md:col-4","col"],size:t.value},{default:l(()=>[e(u,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:l(()=>[e(c,{modelValue:h.value.name,"onUpdate:modelValue":r[1]||(r[1]=D=>h.value.name=D)},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(p,{modelValue:h.value.region,"onUpdate:modelValue":r[2]||(r[2]=D=>h.value.region=D),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(s,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(s,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:l(()=>[e(F,{merge:"",indent:""},{default:l(()=>[e(_,{modelValue:h.value.date1,"onUpdate:modelValue":r[3]||(r[3]=D=>h.value.date1=D),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F"},null,8,["modelValue"]),e(V,{modelValue:h.value.date2,"onUpdate:modelValue":r[4]||(r[4]=D=>h.value.date2=D),placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:l(()=>[e(z,{modelValue:h.value.type,"onUpdate:modelValue":r[5]||(r[5]=D=>h.value.type=D)},{default:l(()=>[e(y,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(y,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(y,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:l(()=>[e(f,{modelValue:h.value.resource,"onUpdate:modelValue":r[6]||(r[6]=D=>h.value.resource=D)},{default:l(()=>[e(i,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(i,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(u,{offset:"md:offset-4"},{default:l(()=>[e(x,{type:"primary",class:"m-r-sm",onClick:m},{default:l(()=>[Ae]),_:1}),e(x,null,{default:l(()=>[Ee]),_:1})]),_:1})]),_:1},8,["model","size"])],64)}}});var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be});const we=a("\u7ACB\u5373\u521B\u5EFA"),Ce=a("\u91CD\u7F6E"),ze=E({setup(A){const t=v({location:[],name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),h=v({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],location:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u5730\u70B9",trigger:"change"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",trigger:"change"}],date1:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}],date2:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],type:[{type:"array",required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28",trigger:"change"}],resource:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90",trigger:"change"}],desc:[{required:!0,message:"\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F",trigger:"blur"}]}),m=v([{value:"BJ",label:"\u5317\u4EAC",children:[{value:"HD",label:"\u6D77\u6DC0\u533A"},{value:"XW",label:"\u5BA3\u6B66\u533A"},{value:"CW",label:"\u5D07\u6587\u533A",children:[{value:"WFJ",label:"\u738B\u5E9C\u4E95"},{value:"DD",label:"\u4E1C\u5355"}]}]}]),d=v(null),r=()=>{d.value.validate(f=>{if(f)alert("submit!");else return console.log("error submit!!"),!1})},i=()=>{d.value.resetFields()};return(f,c)=>{const u=n("hl-input"),s=n("hl-form-item"),p=n("hl-cascader"),_=n("hl-option"),V=n("hl-select"),F=n("hl-date-picker"),y=n("hl-col"),z=n("hl-time-picker"),x=n("hl-row"),I=n("hl-switch"),D=n("hl-checkbox"),S=n("hl-checkbox-group"),U=n("hl-radio"),R=n("hl-radio-group"),P=n("hl-button"),j=n("hl-form");return k(),B(j,{ref_key:"ruleFormRef",ref:d,model:t.value,rules:h.value,"label-position":["items-right","items-left"],gap:"var(--lg)","item-gap":"var(--md)",width:["md:col-6","md:col-18"]},{default:l(()=>[e(s,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name"},{default:l(()=>[e(u,{modelValue:t.value.name,"onUpdate:modelValue":c[0]||(c[0]=g=>t.value.name=g)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u6D3B\u52A8\u5730\u70B9",prop:"location"},{default:l(()=>[e(p,{modelValue:t.value.location,"onUpdate:modelValue":c[1]||(c[1]=g=>t.value.location=g),options:m.value},null,8,["modelValue","options"])]),_:1}),e(s,{label:"\u6D3B\u52A8\u533A\u57DF",prop:"region"},{default:l(()=>[e(V,{modelValue:t.value.region,"onUpdate:modelValue":c[2]||(c[2]=g=>t.value.region=g),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(_,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(_,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u6D3B\u52A8\u65F6\u95F4",required:""},{default:l(()=>[e(x,null,{default:l(()=>[e(y,{span:12},{default:l(()=>[e(s,{prop:"date1"},{default:l(()=>[e(F,{modelValue:t.value.date1,"onUpdate:modelValue":c[3]||(c[3]=g=>t.value.date1=g),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1}),e(y,{span:12},{default:l(()=>[e(s,{prop:"date2"},{default:l(()=>[e(z,{modelValue:t.value.date2,"onUpdate:modelValue":c[4]||(c[4]=g=>t.value.date2=g),placeholder:"\u9009\u62E9\u65F6\u95F4",block:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{label:"\u5373\u65F6\u914D\u9001",prop:"delivery"},{default:l(()=>[e(I,{modelValue:t.value.delivery,"onUpdate:modelValue":c[5]||(c[5]=g=>t.value.delivery=g),type:"primary"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u6D3B\u52A8\u6027\u8D28",prop:"type"},{default:l(()=>[e(S,{modelValue:t.value.type,"onUpdate:modelValue":c[6]||(c[6]=g=>t.value.type=g)},{default:l(()=>[e(D,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(D,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u7279\u6B8A\u8D44\u6E90",prop:"resource"},{default:l(()=>[e(R,{modelValue:t.value.resource,"onUpdate:modelValue":c[7]||(c[7]=g=>t.value.resource=g)},{default:l(()=>[e(U,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(U,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u6D3B\u52A8\u5F62\u5F0F",prop:"desc"},{default:l(()=>[e(u,{modelValue:t.value.desc,"onUpdate:modelValue":c[8]||(c[8]=g=>t.value.desc=g),"native-type":"textarea",block:""},null,8,["modelValue"])]),_:1}),e(s,{offset:"md:offset-6"},{default:l(()=>[e(P,{type:"primary",class:"m-r-sm",onClick:c[9]||(c[9]=g=>r())},{default:l(()=>[we]),_:1}),e(P,{class:"m-r-sm",onClick:c[10]||(c[10]=g=>i())},{default:l(()=>[Ce]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze});const Ue=a("\u67E5\u8BE2"),Pe=E({setup(A){const t=v({user:"",region:""}),h=()=>{console.log("submit!")};return(m,d)=>{const r=n("hl-input"),i=n("hl-form-item"),f=n("hl-option"),c=n("hl-select"),u=n("hl-button"),s=n("hl-form");return k(),B(s,{model:t.value,fill:""},{default:l(()=>[e(i,{label:"\u5BA1\u6279\u4EBA"},{default:l(()=>[e(r,{modelValue:t.value.user,"onUpdate:modelValue":d[0]||(d[0]=p=>t.value.user=p),placeholder:"\u5BA1\u6279\u4EBA",block:""},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(c,{modelValue:t.value.region,"onUpdate:modelValue":d[1]||(d[1]=p=>t.value.region=p),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(u,{type:"primary",block:"",onClick:h},{default:l(()=>[Ue]),_:1})]),_:1})]),_:1},8,["model"])}}});var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pe});const Se=o("h1",null,"Form \u8868\u5355",-1),Re=o("p",null,"\u7531\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u63A7\u4EF6\u7EC4\u6210\uFF0C\u7528\u4EE5\u6536\u96C6\u3001\u6821\u9A8C\u3001\u63D0\u4EA4\u6570\u636E",-1),je=o("div",null,[o("p",null,"\u5728 Form \u7EC4\u4EF6\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8868\u5355\u57DF\u7531\u4E00\u4E2A FormItem \u7EC4\u4EF6\u6784\u6210\uFF0C\u8868\u5355\u57DF\u4E2D\u53EF\u4EE5\u653E\u7F6E\u5404\u79CD\u7C7B\u578B\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u5305\u62EC Input\u3001Select\u3001Checkbox\u3001Radio\u3001Switch\u3001DatePicker\u3001TimePicker")],-1),qe=o("p",null,"form/basic",-1),Ne=o("div",{class:"doc-tip"},[o("p",null,[a("W3C \u6807\u51C6\u4E2D\u6709\u5982\u4E0B"),o("a",{href:"https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"},"\u89C4\u5B9A"),a("\uFF1A")]),o("p",null,[a("\u5373\uFF1A\u5F53\u4E00\u4E2A form \u5143\u7D20\u4E2D\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u5728\u8BE5\u8F93\u5165\u6846\u4E2D\u6309\u4E0B\u56DE\u8F66\u5E94\u63D0\u4EA4\u8BE5\u8868\u5355\u3002\u5982\u679C\u5E0C\u671B\u963B\u6B62\u8FD9\u4E00\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EF\u4EE5\u5728 From \u7EC4\u4EF6\u4E0A\u6DFB\u52A0 "),o("code",null,"@submit.native.prevent"),a("\u3002")])],-1),Me=o("h2",{id:"chui-zhi-biao-dan"},[o("a",{class:"header-anchor",href:"#chui-zhi-biao-dan"}),a(" \u5782\u76F4\u8868\u5355")],-1),Te=o("p",null,[a("\u5F53\u4F60\u6CA1\u6709\u8BBE\u7F6E"),o("code",null,"width"),a(" \u5C5E\u6027\u65F6\uFF0Cform\u7EC4\u4EF6\u9ED8\u8BA4\u628A\u6807\u9898\u548C\u8868\u5355\u5143\u7D20\u5206\u884C\u653E\u7F6E\u3002")],-1),Le=o("div",null,[o("p",null,[a("\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),o("code",null,"width"),a(" \u5C5E\u6027\u4E3A"),o("code",null,"100%"),a(),o("code",null,"block"),a(" \u6216\u8005 "),o("code",null,"col-24"),a("\u6765\u5B9E\u73B0\u6574\u884C\u7684\u6548\u679C\u3002")])],-1),Oe=o("p",null,"form/vertical",-1),We=o("h2",{id:"xing-nei-biao-dan"},[o("a",{class:"header-anchor",href:"#xing-nei-biao-dan"}),a(" \u884C\u5185\u8868\u5355")],-1),He=o("p",null,"\u5F53\u5782\u76F4\u65B9\u5411\u7A7A\u95F4\u53D7\u9650\u4E14\u8868\u5355\u8F83\u7B80\u5355\u65F6\uFF0C\u53EF\u4EE5\u5728\u4E00\u884C\u5185\u653E\u7F6E\u8868\u5355\u3002",-1),Ye=o("div",null,[o("p",null,[a("\u8BBE\u7F6E "),o("code",null,"inline"),a(" \u5C5E\u6027\u53EF\u4EE5\u8BA9\u8868\u5355\u57DF\u53D8\u4E3A\u884C\u5185\u7684\u8868\u5355\u57DF")])],-1),Je=o("p",null,"form/inline",-1),Xe=o("h2",{id:"dui-qi-fang-shi"},[o("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),a(" \u5BF9\u9F50\u65B9\u5F0F")],-1),Ge=o("p",null,"\u6839\u636E\u5177\u4F53\u76EE\u6807\u548C\u5236\u7EA6\u56E0\u7D20\uFF0C\u9009\u62E9\u6700\u4F73\u7684\u6807\u7B7E\u5BF9\u9F50\u65B9\u5F0F\u3002",-1),Qe=o("div",null,[o("p",null,[a("\u901A\u8FC7\u8BBE\u7F6E "),o("code",null,"label-position"),a(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u5BF9\u9F50\u65B9\u5F0F\u4E5F\u652F\u6301\u54CD\u5E94\u5F0F\u6807\u7B7E\u4F8B\u5982\uFF1A"),o("code",null,"xl:items-right")])],-1),Ke=o("p",null,"form/position",-1),Ze=o("h2",{id:"biao-dan-yan-zheng"},[o("a",{class:"header-anchor",href:"#biao-dan-yan-zheng"}),a(" \u8868\u5355\u9A8C\u8BC1")],-1),el=o("p",null,"\u5728\u8868\u5355\u9A8C\u8BC1\u5C3D\u53EF\u80FD\u8BA9\u7528\u6237\u66F4\u65E9\u5730\u53D1\u73B0\u5E76\u7EA0\u6B63\u9519\u8BEF\u7684\u8F93\u5165\u3002",-1),ll=o("div",null,[o("p",null,[a("Form \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8868\u5355\u9A8C\u8BC1\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 "),o("code",null,"rules"),a(" \u5C5E\u6027\u4F20\u5165\u7EA6\u5B9A\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5E76\u5C06 Form-Item \u7684 "),o("code",null,"prop"),a(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u9700\u6821\u9A8C\u7684\u5B57\u6BB5\u540D\u5373\u53EF\u3002\u6821\u9A8C\u89C4\u5219\u53C2\u89C1 "),o("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator")])],-1),tl=o("p",null,"form/validate",-1),ol=o("h2",{id:"zi-ding-yi-xiao-yan-gui-ze"},[o("a",{class:"header-anchor",href:"#zi-ding-yi-xiao-yan-gui-ze"}),a(" \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219")],-1),nl=o("p",null,"\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u6765\u5B8C\u6210\u5BC6\u7801\u7684\u4E8C\u6B21\u9A8C\u8BC1\u3002",-1),al=o("p",null,"form/rule",-1),ul=o("div",{class:"doc-tip"},[o("p",null,[a("\u81EA\u5B9A\u4E49\u6821\u9A8C callback \u5FC5\u987B\u88AB\u8C03\u7528\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 "),o("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator"),a("\u3002 "),o("em",null,[o("strong",null,[a("\u5982\u679CWebpack5\u62A5async_validator\u4E0D\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u7C7B\u4F3C\u7684\u9519\u8BEF\uFF0C\u8BF7\u5728alias\u914D\u7F6E\u4E2D\u589E\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A"),o("code",null,'"async-validator": "async-validator/dist-web/index.js",')])])])],-1),rl=o("h2",{id:"dong-tai-zeng-jian-biao-dan-xiang"},[o("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-dan-xiang"}),a(" \u52A8\u6001\u589E\u51CF\u8868\u5355\u9879")],-1),dl=o("div",null,[o("p",null,"\u9664\u4E86\u5728 Form \u7EC4\u4EF6\u4E0A\u4E00\u6B21\u6027\u4F20\u9012\u6240\u6709\u7684\u9A8C\u8BC1\u89C4\u5219\u5916\u8FD8\u53EF\u4EE5\u5728\u5355\u4E2A\u7684\u8868\u5355\u57DF\u4E0A\u4F20\u9012\u5C5E\u6027\u7684\u9A8C\u8BC1\u89C4\u5219")],-1),ml=o("p",null,"form/dynamic",-1),il=o("h2",{id:"shu-zi-lei-xing-yan-zheng"},[o("a",{class:"header-anchor",href:"#shu-zi-lei-xing-yan-zheng"}),a(" \u6570\u5B57\u7C7B\u578B\u9A8C\u8BC1")],-1),sl=o("div",null,[o("p",null,[a("\u6570\u5B57\u7C7B\u578B\u7684\u9A8C\u8BC1\u9700\u8981\u5728 "),o("code",null,"v-model"),a(" \u5904\u52A0\u4E0A "),o("code",null,".number"),a(" \u7684\u4FEE\u9970\u7B26\uFF0C\u8FD9\u662F "),o("code",null,"Vue"),a(" \u81EA\u8EAB\u63D0\u4F9B\u7684\u7528\u4E8E\u5C06\u7ED1\u5B9A\u503C\u8F6C\u5316\u4E3A "),o("code",null,"number"),a(" \u7C7B\u578B\u7684\u4FEE\u9970\u7B26\u3002")])],-1),cl=o("p",null,"form/number",-1),hl=o("h2",{id:"biao-dan-nei-zu-jian-chi-cun-kong-zhi"},[o("a",{class:"header-anchor",href:"#biao-dan-nei-zu-jian-chi-cun-kong-zhi"}),a(" \u8868\u5355\u5185\u7EC4\u4EF6\u5C3A\u5BF8\u63A7\u5236")],-1),pl=o("p",null,[a("\u901A\u8FC7\u8BBE\u7F6E Form \u4E0A\u7684 "),o("code",null,"size"),a(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8BE5\u8868\u5355\u5185\u6240\u6709\u53EF\u8C03\u8282\u5927\u5C0F\u7684\u7EC4\u4EF6\u7EE7\u627F\u8BE5\u5C3A\u5BF8\u3002FormItem \u4E5F\u5177\u6709\u8BE5\u5C5E\u6027\u3002")],-1),fl=o("div",null,[o("p",null,[a("\u5982\u679C\u5E0C\u671B\u67D0\u4E2A\u8868\u5355\u9879\u6216\u67D0\u4E2A\u8868\u5355\u7EC4\u4EF6\u7684\u5C3A\u5BF8\u4E0D\u540C\u4E8E Form \u4E0A\u7684"),o("code",null,"size"),a("\u5C5E\u6027\uFF0C\u76F4\u63A5\u4E3A\u8FD9\u4E2A\u8868\u5355\u9879\u6216\u8868\u5355\u7EC4\u4EF6\u8BBE\u7F6E\u81EA\u5DF1\u7684"),o("code",null,"size"),a("\u5373\u53EF\u3002")])],-1),bl=o("p",null,"form/size",-1),_l=o("h2",{id:"ke-fang-wen-xing"},[o("a",{class:"header-anchor",href:"#ke-fang-wen-xing"}),a(" \u53EF\u8BBF\u95EE\u6027")],-1),gl=o("p",null,[a("\u5F53\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\uFF08\u6216\u8005Select\uFF0CCheckbox\u7B49\u76F8\u5173\u63A7\u4EF6\uFF09\u5728 "),o("code",null,"FormItem"),a(" \u91CC\u65F6\uFF0C\u8868\u5355\u9879\u7684\u6807\u7B7E\u5C06\u4F1A\u81EA\u52A8\u9644\u52A0\u5230Input\u4E0A\u3002\u5F53\u6709\u591A\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u8868\u5355\u9879\u5C06\u4F1A\u6839\u636E"),o("a",{href:"https://www.w3.org/WAI/standards-guidelines/aria/"},"WAI-ARIA"),a("\u89C4\u8303\uFF0C\u8D4B\u4E88 "),o("code",null,"role"),a(" \u5C5E\u6027\u4E3A"),o("a",{href:"https://www.w3.org/TR/wai-aria/#group"},"group"),a(" \u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u9644\u52A0\u6807\u7B7E\u5230\u76F8\u5E94\u7684\u8F93\u5165\u6846\u3002")],-1),vl=o("p",null,"form/accessibility",-1),Fl=o("h2",{id:"li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"},[o("a",{class:"header-anchor",href:"#li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"}),a(" \u5229\u7528Grid\u7EC4\u4EF6\u521B\u5EFA\u591A\u5217\u8868\u5355")],-1),yl=o("p",null,"\u4F7F\u7528\u9E3F\u9E3E\u5F3A\u5927\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u53EF\u521B\u9020\u51FA\u66F4\u591A\u4E30\u5BCC\u4E14\u54CD\u5E94\u5F0F\u7684\u8868\u5355\u5E03\u5C40",-1),Vl=o("div",null,[o("p",null,"\u672C\u793A\u4F8B\u4F7F\u7528class\u7C7B\u540D\u5C06 Form \u7EC4\u4EF6\u6784\u5EFA\u6210\u4E00\u4E2A Row\uFF0C \u5E76\u5C06\u5176\u8F85\u4E8E\u6805\u683C\u7CFB\u7EDF\u7684\u7279\u6027\u3002")],-1),Dl=o("p",null,"form/grid",-1),kl=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>Record&lt;string, any&gt;</td><td>\u2014</td><td>\u2014</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td>FormRules</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inline</td><td>\u884C\u5185\u8868\u5355\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>left/center/right/top/middle/bottom</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Grid \u4E2D\u63D0\u4F9B\u7684\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-suffix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-prefix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u524D\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>hide-required-asterisk</td><td>\u662F\u5426\u663E\u793A\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>validate-on-rule-change</td><td>\u662F\u5426\u5728 <code>rules</code> \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E\u6BCF\u4E2A FormItem \u7684\u5782\u76F4\u95F4\u8DDD\u3002\u7531\u4E8EForm\u91C7\u7528Flex\u5E03\u5C40\uFF0C\u6240\u4EE5\u53EA\u6709Form\u4E0B\u7684\u76F4\u63A5\u5B50FormItem\u624D\u8D77\u4F5C\u7528</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>item-gap</td><td>\u8BBE\u7F6E FormItem \u4E0B\u7684 label \u548C content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E<code>item-gap-x</code>\u6216<code>item-gap-y</code></td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002\u82E5\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u5355\u5185\u7EC4\u4EF6\u4E0A\u7684 disabled \u5C5E\u6027\u4E0D\u518D\u751F\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="rules"><a class="header-anchor" href="#rules"></a> Rules</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>string</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</td><td><code>(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>validateField</td><td>\u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr><tr><td>scrollToField</td><td>\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u5B57\u6BB5</td><td><code>(prop: FormItemProp) =&gt; void</code></td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u6216\u8005 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1</td><td>(prop: FormItemProp, isValid: boolean, message: string) =&gt; void</td></tr></tbody></table><h2 id="form-item-attributes"><a class="header-anchor" href="#form-item-attributes"></a> Form Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684</td><td>string</td><td>\u4F20\u5165 Form \u7EC4\u4EF6\u7684 <code>model</code> \u4E2D\u7684\u5B57\u6BB5</td><td>\u2014</td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>right/left/top</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Layout \u4E2D\u63D0\u4F9B\u4E86\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09\u3002</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u586B\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219, \u5177\u4F53\u914D\u7F6E\u89C1\u4E0B\u8868, \u66F4\u591A\u5185\u5BB9\u53C2\u8003<a href="https://github.com/yiminghe/async-validator">async-validator</a></td><td>FormItemRule | FormItemRule[]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>error</td><td>\u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3A<code>error</code>\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u57DF\u4E0B\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>-</td></tr><tr><td>offset</td><td>\u5F53\u4F60\u672A\u8BBE\u7F6Elabel\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528offset\u63A7\u5236form-content\u7684\u504F\u79FB\uFF0C\u5177\u4F53\u53C2\u8003Grid\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F</td><td>string</td><td></td><td>-</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E form-item \u4E0B\u7684 form-label \u548C form-content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Eitem-gap</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E \u2248/ \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr></tbody></table><h4 id="formitemrule"><a class="header-anchor" href="#formitemrule"></a> FormItemRule</h4><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><h2 id="form-item-slots"><a class="header-anchor" href="#form-item-slots"></a> Form Item Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Form Item \u7684\u5185\u5BB9</td></tr><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u6807\u7B7E\u663E\u793A. \u53C2\u6570\u4E3A { label }</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u53C2\u6570\u4E3A { error }</td></tr></tbody></table><h2 id="form-item-methods"><a class="header-anchor" href="#form-item-methods"></a> Form Item Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>resetField</td><td>\u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8BE5\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr></tbody></table>',16),Cl={setup(A){const t={"../../../examples/form/accessibility.vue":Y,"../../../examples/form/basic.vue":Z,"../../../examples/form/dynamic.vue":oe,"../../../examples/form/grid.vue":ae,"../../../examples/form/inline.vue":de,"../../../examples/form/number.vue":ce,"../../../examples/form/position.vue":pe,"../../../examples/form/rule.vue":ge,"../../../examples/form/size.vue":xe,"../../../examples/form/validate.vue":Ie,"../../../examples/form/vertical.vue":$e};return(h,m)=>{const d=n("demo-block"),r=n("right-nav");return k(),w(C,null,[o("section",null,[Se,Re,e(d,{fs:"",demos:b(t),"path-name":"form/basic","source-code":`<template>
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
`},{default:l(()=>[je,qe]),_:1},8,["demos"]),Ne,Me,Te,e(d,{fs:"",demos:b(t),"path-name":"form/vertical","source-code":`<template>
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
`},{default:l(()=>[Le,Oe]),_:1},8,["demos"]),We,He,e(d,{fs:"",demos:b(t),"path-name":"form/inline","source-code":`<template>
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
`},{default:l(()=>[Ye,Je]),_:1},8,["demos"]),Xe,Ge,e(d,{fs:"",demos:b(t),"path-name":"form/position","source-code":`<template>
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
`},{default:l(()=>[Qe,Ke]),_:1},8,["demos"]),Ze,el,e(d,{fs:"",demos:b(t),"path-name":"form/validate","source-code":`<template>
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
`},{default:l(()=>[ll,tl]),_:1},8,["demos"]),ol,nl,e(d,{fs:"",demos:b(t),"path-name":"form/rule","source-code":`<template>
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
`},{default:l(()=>[al]),_:1},8,["demos"]),ul,rl,e(d,{fs:"",demos:b(t),"path-name":"form/dynamic","source-code":`<template>
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
`},{default:l(()=>[dl,ml]),_:1},8,["demos"]),il,e(d,{fs:"",demos:b(t),"path-name":"form/number","source-code":`<template>
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
`},{default:l(()=>[sl,cl]),_:1},8,["demos"]),hl,pl,e(d,{fs:"",demos:b(t),"path-name":"form/size","source-code":`<template>
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
`},{default:l(()=>[fl,bl]),_:1},8,["demos"]),_l,gl,e(d,{fs:"",demos:b(t),"path-name":"form/accessibility","source-code":`<template>
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

`},{default:l(()=>[vl]),_:1},8,["demos"]),Fl,yl,e(d,{fs:"",demos:b(t),"path-name":"form/grid","source-code":`<template>
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
`},{default:l(()=>[Vl,Dl]),_:1},8,["demos"]),kl]),e(r)],64)}}};export{Cl as default};
