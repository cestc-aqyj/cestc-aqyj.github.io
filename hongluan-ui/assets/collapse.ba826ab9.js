var z=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(u,t,F)=>t in u?z(u,t,{enumerable:!0,configurable:!0,writable:!0,value:F}):u[t]=F,x=(u,t)=>{for(var F in t||(t={}))$.call(t,F)&&j(u,F,t[F]);if(w)for(var F of w(t))T.call(t,F)&&j(u,F,t[F]);return u};import{H as k,o as U,c as q,g as e,T as h,M as i,Y as S,aB as b,_ as n,aA as Y}from"./vue.d542b1f8.js";import{_ as H}from"./index.4626a2fa.js";import"./hongluan.3c5b9861.js";import"./highlight.e2508551.js";import"./hongluan-icons.e8265415.js";const M={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:d,createBlock:m}=b,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),C=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),c=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),s=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),p=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),_=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),v=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(o,B){const l=t("hl-collapse-item"),r=t("hl-collapse");return d(),m(r,{modelValue:o.activeNames,"onUpdate:modelValue":B[0]||(B[0]=g=>o.activeNames=g),onChange:o.handleChange},{default:F(()=>[E(l,{title:"\u4E00\u81F4\u6027 Consistency",name:"1"},{default:F(()=>[a,C]),_:1}),E(l,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,c]),_:1}),E(l,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[s,A,p]),_:1}),E(l,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[_,v]),_:1})]),_:1},8,["modelValue","onChange"])}const{defineComponent:N,ref:V}=b,f=N({setup(){return{activeNames:V(["1"]),handleChange:l=>{console.log(l)}}}});return x({render:y},f)}(),"hl-demo1":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:d,createBlock:m}=b,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),C=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),c=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),s=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),p=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),_=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),v=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(o,B){const l=t("hl-collapse-item"),r=t("hl-collapse");return d(),m(r,{modelValue:o.activeName,"onUpdate:modelValue":B[0]||(B[0]=g=>o.activeName=g),accordion:""},{default:F(()=>[E(l,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[a,C]),_:1}),E(l,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,c]),_:1}),E(l,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[s,A,p]),_:1}),E(l,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[_,v]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:N,ref:V}=b,f=N({setup(){return{activeName:V("1")}}});return x({render:y},f)}(),"hl-demo2":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:d,createBlock:m}=b,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),C=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),c=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),s=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),p=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),_=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),v=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(o,B){const l=t("hl-collapse-item"),r=t("hl-collapse");return d(),m(r,{modelValue:o.activeName,"onUpdate:modelValue":B[0]||(B[0]=g=>o.activeName=g),accordion:"",gap:"var(--lg)"},{default:F(()=>[E(l,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[a,C]),_:1}),E(l,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,c]),_:1}),E(l,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[s,A,p]),_:1}),E(l,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[_,v]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:N,ref:V}=b,f=N({setup(){return{activeName:V("1")}}});return x({render:y},f)}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:t,withCtx:F,createElementVNode:E,createTextVNode:d,openBlock:m,createBlock:a}=b,C=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),D=E("p",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),c=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),s=E("p",null," \u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B \u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002 ",-1),A=E("div",null," \u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08 ",-1),p=E("p",null,[d(" \u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B"),E("br"),d(" \u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B"),E("br"),d(" \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002"),E("br")],-1),_=E("p",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function v(N,V){const f=u("two-setting"),o=u("hl-icon"),B=u("hl-collapse-item"),l=u("two-airplay"),r=u("hl-group"),g=u("two-user-group"),I=u("hl-collapse");return m(),a(I,{accordion:""},{default:F(()=>[t(B,null,{title:F(()=>[t(o,{type:"primary",class:"m-r-md"},{default:F(()=>[t(f)]),_:1}),C]),default:F(()=>[D]),_:1}),t(B,null,{title:F(()=>[t(r,{align:"middle",gap:"var(--md)"},{default:F(()=>[t(o,{type:"primary"},{default:F(()=>[t(l)]),_:1}),c]),_:1})]),default:F(()=>[s]),_:1}),t(B,null,{title:F(()=>[t(r,{gap:"var(--md)",full:"",align:"middle"},{default:F(()=>[t(o,{type:"primary",size:"xs",class:"static",fill:"",radius:""},{default:F(()=>[t(g)]),_:1}),t(r,{dir:"vertical"},{default:F(()=>[A]),_:1})]),_:1})]),default:F(()=>[p]),_:1}),t(B,{title:"\u53EF\u63A7 Controllability"},{default:F(()=>[_]),_:1})]),_:1})}return x({render:v},{})}()}},W=e("h1",null,"Collapse \u6298\u53E0\u9762\u677F",-1),G=e("p",null,"\u901A\u8FC7\u6298\u53E0\u9762\u677F\u6536\u7EB3\u5185\u5BB9\u533A\u57DF,\u53EF\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u9762\u677F\u4E4B\u95F4\u4E0D\u5F71\u54CD",-1),J=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),K=e("h2",{id:"shou-feng-qin-xiao-guo"},[e("a",{class:"header-anchor",href:"#shou-feng-qin-xiao-guo"}),n(" \u624B\u98CE\u7434\u6548\u679C")],-1),L=e("p",null,"\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u9762\u677F",-1),O=e("div",null,[e("p",null,[n("\u901A\u8FC7 "),e("code",null,"accordion"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),P=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Q=e("h2",{id:"jian-ju"},[e("a",{class:"header-anchor",href:"#jian-ju"}),n(" \u95F4\u8DDD")],-1),R=e("p",null,[n("\u4F7F\u7528 "),e("code",null,"gap"),n(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6BCF\u4E2A CollapseItem \u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD")],-1),X=e("div",null,[e("p",null,[n("\u901A\u8FC7 "),e("code",null,"accordion"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),Z=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),uu=e("h2",{id:"zi-ding-yi-mian-ban-biao-ti"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-mian-ban-biao-ti"}),n(" \u81EA\u5B9A\u4E49\u9762\u677F\u6807\u9898")],-1),Fu=e("p",null,[n("\u9664\u4E86\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"title"),n(" \u5C5E\u6027\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),e("code",null,"slot"),n(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u6807\u9898\u5185\u5BB9\uFF0C\u4EE5\u5B9E\u73B0\u589E\u52A0\u56FE\u6807\u7B49\u6548\u679C\u3002")],-1),tu=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),eu=Y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E Item \u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>padding</td><td>\u8BBE\u7F6E item-header \u7684\u5DE6\u53F3\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>content-padding</td><td>\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u524D\u6FC0\u6D3B\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53C2\u6570 <code>activeNames</code> \u7C7B\u578B\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>(activeNames: array / string)</td></tr></tbody></table><h2 id="collapse-item-attributes"><a class="header-anchor" href="#collapse-item-attributes"></a> Collapse Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u5FD7\u7B26</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>\u9762\u677F\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="collapse-item-slot"><a class="header-anchor" href="#collapse-item-slot"></a> Collapse Item Slot</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Collapse Item \u7684\u6B63\u6587\u5185\u5BB9</td></tr><tr><td>title</td><td>Collapse Item \u7684\u6807\u9898\u533A\u5185\u5BB9</td></tr></tbody></table>',8);function Eu(u,t,F,E,d,m){const a=k("hl-demo0"),C=k("demo-block"),D=k("hl-demo1"),c=k("hl-demo2"),s=k("hl-demo3"),A=k("right-nav");return U(),q(S,null,[e("section",null,[W,G,h(C,{fs:""},{source:i(()=>[h(a)]),highlight:i(()=>[J]),_:1}),K,L,h(C,{fs:""},{source:i(()=>[h(D)]),highlight:i(()=>[P]),default:i(()=>[O]),_:1}),Q,R,h(C,{fs:""},{source:i(()=>[h(c)]),highlight:i(()=>[Z]),default:i(()=>[X]),_:1}),uu,Fu,h(C,{fs:""},{source:i(()=>[h(s)]),highlight:i(()=>[tu]),_:1}),eu]),h(A)],64)}var iu=H(M,[["render",Eu]]);export{iu as default};
