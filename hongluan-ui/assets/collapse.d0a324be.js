var z=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var j=(u,e,F)=>e in u?z(u,e,{enumerable:!0,configurable:!0,writable:!0,value:F}):u[e]=F,x=(u,e)=>{for(var F in e||(e={}))$.call(e,F)&&j(u,F,e[F]);if(w)for(var F of w(e))U.call(e,F)&&j(u,F,e[F]);return u};import{H as k,o as q,C as S,D as t,v as h,M as d,av as b,_ as n,au as T}from"./vue.450bc1d0.js";import{_ as H}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const M={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:e,withCtx:F,createVNode:E,openBlock:i,createBlock:m}=b,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),B=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),c=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),s=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),_=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),p=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),v=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(o,C){const l=e("hl-collapse-item"),r=e("hl-collapse");return i(),m(r,{modelValue:o.activeNames,"onUpdate:modelValue":C[0]||(C[0]=g=>o.activeNames=g),onChange:o.handleChange},{default:F(()=>[E(l,{title:"\u4E00\u81F4\u6027 Consistency",name:"1"},{default:F(()=>[a,B]),_:1}),E(l,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,c]),_:1}),E(l,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[s,A,_]),_:1}),E(l,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[p,v]),_:1})]),_:1},8,["modelValue","onChange"])}const{defineComponent:N,ref:V}=b,f=N({setup(){return{activeNames:V(["1"]),handleChange:l=>{console.log(l)}}}});return x({render:y},f)}(),"hl-demo1":function(){const{createElementVNode:u,resolveComponent:e,withCtx:F,createVNode:E,openBlock:i,createBlock:m}=b,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),B=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),c=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),s=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),_=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),p=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),v=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(o,C){const l=e("hl-collapse-item"),r=e("hl-collapse");return i(),m(r,{modelValue:o.activeName,"onUpdate:modelValue":C[0]||(C[0]=g=>o.activeName=g),accordion:""},{default:F(()=>[E(l,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[a,B]),_:1}),E(l,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,c]),_:1}),E(l,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[s,A,_]),_:1}),E(l,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[p,v]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:N,ref:V}=b,f=N({setup(){return{activeName:V("1")}}});return x({render:y},f)}(),"hl-demo2":function(){const{createElementVNode:u,resolveComponent:e,withCtx:F,createVNode:E,openBlock:i,createBlock:m}=b,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),B=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),c=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),s=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),_=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),p=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),v=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(o,C){const l=e("hl-collapse-item"),r=e("hl-collapse");return i(),m(r,{modelValue:o.activeName,"onUpdate:modelValue":C[0]||(C[0]=g=>o.activeName=g),accordion:"",gap:"var(--lg)"},{default:F(()=>[E(l,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[a,B]),_:1}),E(l,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,c]),_:1}),E(l,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[s,A,_]),_:1}),E(l,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[p,v]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:N,ref:V}=b,f=N({setup(){return{activeName:V("1")}}});return x({render:y},f)}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:e,withCtx:F,createElementVNode:E,createTextVNode:i,openBlock:m,createBlock:a}=b,B=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),D=E("p",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),c=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),s=E("p",null," \u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B \u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002 ",-1),A=E("div",null," \u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08 ",-1),_=E("p",null,[i(" \u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B"),E("br"),i(" \u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B"),E("br"),i(" \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002"),E("br")],-1),p=E("p",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function v(N,V){const f=u("two-setting"),o=u("hl-icon"),C=u("hl-collapse-item"),l=u("two-airplay"),r=u("hl-group"),g=u("two-user-group"),I=u("hl-collapse");return m(),a(I,{accordion:""},{default:F(()=>[e(C,null,{title:F(()=>[e(o,{type:"primary",class:"m-r-md"},{default:F(()=>[e(f)]),_:1}),B]),default:F(()=>[D]),_:1}),e(C,null,{title:F(()=>[e(r,{align:"middle",gap:"var(--md)"},{default:F(()=>[e(o,{type:"primary"},{default:F(()=>[e(l)]),_:1}),c]),_:1})]),default:F(()=>[s]),_:1}),e(C,null,{title:F(()=>[e(r,{gap:"var(--md)",full:"",align:"middle"},{default:F(()=>[e(o,{type:"primary",size:"xs",class:"static",fill:"",radius:""},{default:F(()=>[e(g)]),_:1}),e(r,{dir:"vertical"},{default:F(()=>[A]),_:1})]),_:1})]),default:F(()=>[_]),_:1}),e(C,{title:"\u53EF\u63A7 Controllability"},{default:F(()=>[p]),_:1})]),_:1})}return x({render:v},{})}()}},W={class:"doc-main-content"},G={class:"doc-content"},J=t("h1",null,"Collapse \u6298\u53E0\u9762\u677F",-1),K=t("p",null,"\u901A\u8FC7\u6298\u53E0\u9762\u677F\u6536\u7EB3\u5185\u5BB9\u533A\u57DF,\u53EF\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u9762\u677F\u4E4B\u95F4\u4E0D\u5F71\u54CD",-1),L=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-collapse v-model="activeNames" @change="handleChange">
    <hl-collapse-item title="\u4E00\u81F4\u6027 Consistency" name="1">
      <div>
        \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B
      </div>
      <div>
        \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002
      </div>
    </hl-collapse-item>
    <hl-collapse-item title="\u53CD\u9988 Feedback" name="2">
      <div>\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B</div>
      <div>\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002</div>
    </hl-collapse-item>
    <hl-collapse-item title="\u6548\u7387 Efficiency" name="3">
      <div>\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B</div>
      <div>\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B</div>
      <div>
        \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002
      </div>
    </hl-collapse-item>
    <hl-collapse-item title="\u53EF\u63A7 Controllability" name="4">
      <div>
        \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B
      </div>
      <div>
        \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002
      </div>
    </hl-collapse-item>
  </hl-collapse>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeNames = ref(['1'])
    const handleChange = val => {
      console.log(val)
    }
    return {
      activeNames,
      handleChange,
    }
  },
})
<\/script>
`)],-1),O=t("h2",{id:"shou-feng-qin-xiao-guo"},[t("a",{class:"header-anchor",href:"#shou-feng-qin-xiao-guo"}),n(" \u624B\u98CE\u7434\u6548\u679C")],-1),P=t("p",null,"\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u9762\u677F",-1),Q=t("div",null,[t("p",null,[n("\u901A\u8FC7 "),t("code",null,"accordion"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),R=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-collapse v-model="activeName" accordion>
    <hl-collapse-item title="\u4E00\u81F4\u6027 Consistency" name="1" disabled>
      <div>
        \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B
      </div>
      <div>
        \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002
      </div>
    </hl-collapse-item>
    <hl-collapse-item title="\u53CD\u9988 Feedback" name="2">
      <div>\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B</div>
      <div>\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002</div>
    </hl-collapse-item>
    <hl-collapse-item title="\u6548\u7387 Efficiency" name="3">
      <div>\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B</div>
      <div>\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B</div>
      <div>
        \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002
      </div>
    </hl-collapse-item>
    <hl-collapse-item title="\u53EF\u63A7 Controllability" name="4">
      <div>
        \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B
      </div>
      <div>
        \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002
      </div>
    </hl-collapse-item>
  </hl-collapse>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeName = ref('1')

    return {
      activeName,
    }
  },
})
<\/script>
`)],-1),X=t("h2",{id:"jian-ju"},[t("a",{class:"header-anchor",href:"#jian-ju"}),n(" \u95F4\u8DDD")],-1),Y=t("p",null,[n("\u4F7F\u7528 "),t("code",null,"gap"),n(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6BCF\u4E2A CollapseItem \u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD")],-1),Z=t("div",null,[t("p",null,[n("\u901A\u8FC7 "),t("code",null,"accordion"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),uu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-collapse v-model="activeName" accordion gap="var(--lg)">
    <hl-collapse-item title="\u4E00\u81F4\u6027 Consistency" name="1" disabled>
      <div>
        \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B
      </div>
      <div>
        \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002
      </div>
    </hl-collapse-item>
    <hl-collapse-item title="\u53CD\u9988 Feedback" name="2">
      <div>\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B</div>
      <div>\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002</div>
    </hl-collapse-item>
    <hl-collapse-item title="\u6548\u7387 Efficiency" name="3">
      <div>\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B</div>
      <div>\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B</div>
      <div>
        \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002
      </div>
    </hl-collapse-item>
    <hl-collapse-item title="\u53EF\u63A7 Controllability" name="4">
      <div>
        \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B
      </div>
      <div>
        \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002
      </div>
    </hl-collapse-item>
  </hl-collapse>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeName = ref('1')

    return {
      activeName,
    }
  },
})
<\/script>
`)],-1),Fu=t("h2",{id:"zi-ding-yi-mian-ban-biao-ti"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-mian-ban-biao-ti"}),n(" \u81EA\u5B9A\u4E49\u9762\u677F\u6807\u9898")],-1),eu=t("p",null,[n("\u9664\u4E86\u53EF\u4EE5\u901A\u8FC7 "),t("code",null,"title"),n(" \u5C5E\u6027\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),t("code",null,"slot"),n(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u6807\u9898\u5185\u5BB9\uFF0C\u4EE5\u5B9E\u73B0\u589E\u52A0\u56FE\u6807\u7B49\u6548\u679C\u3002")],-1),tu=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-collapse accordion>
    <hl-collapse-item>
      <template #title>
        <hl-icon type="primary" class="m-r-md">
          <two-setting />
        </hl-icon>
        <div>\u4E00\u81F4\u6027 Consistency</div>
      </template>
      <p>
        \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B
        \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002
      </p>
    </hl-collapse-item>
    <hl-collapse-item>
      <template #title>
        <hl-group align="middle" gap="var(--md)">
          <hl-icon type="primary">
            <two-airplay />
          </hl-icon>
          <div>\u4E00\u81F4\u6027 Consistency</div>
        </hl-group>
      </template>
      <p>
        \u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B
        \u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002
      </p>
    </hl-collapse-item>
    <hl-collapse-item>
      <template #title>
        <hl-group gap="var(--md)" full align="middle">
          <hl-icon type="primary" size="xs" class="static" fill radius>
            <two-user-group />
          </hl-icon>
          <hl-group dir="vertical">
            <div>
              \u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08
            </div>
          </hl-group>
        </hl-group>
      </template>
      <p>
        \u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B<br>
        \u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B<br>
        \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002<br>
      </p>
    </hl-collapse-item>
    <hl-collapse-item title="\u53EF\u63A7 Controllability">
      <p>
        \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B
        \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002
      </p>
    </hl-collapse-item>
  </hl-collapse>
</template>
`)],-1),Eu=T('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u524D\u6FC0\u6D3B\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53C2\u6570 <code>activeNames</code> \u7C7B\u578B\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>(activeNames: array / string)</td></tr></tbody></table><h2 id="collapse-item-attributes"><a class="header-anchor" href="#collapse-item-attributes"></a> Collapse Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u5FD7\u7B26</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>\u9762\u677F\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="collapse-item-slot"><a class="header-anchor" href="#collapse-item-slot"></a> Collapse Item Slot</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Collapse Item \u7684\u6B63\u6587\u5185\u5BB9</td></tr><tr><td>title</td><td>Collapse Item \u7684\u6807\u9898\u533A\u5185\u5BB9</td></tr></tbody></table>',8);function lu(u,e,F,E,i,m){const a=k("hl-demo0"),B=k("demo-block"),D=k("hl-demo1"),c=k("hl-demo2"),s=k("hl-demo3"),A=k("right-nav");return q(),S("section",W,[t("div",G,[J,K,h(B,{fs:""},{source:d(()=>[h(a)]),highlight:d(()=>[L]),_:1}),O,P,h(B,{fs:""},{source:d(()=>[h(D)]),highlight:d(()=>[R]),default:d(()=>[Q]),_:1}),X,Y,h(B,{fs:""},{source:d(()=>[h(c)]),highlight:d(()=>[uu]),default:d(()=>[Z]),_:1}),Fu,eu,h(B,{fs:""},{source:d(()=>[h(s)]),highlight:d(()=>[tu]),_:1}),Eu]),h(A)])}var au=H(M,[["render",lu]]);export{au as default};
