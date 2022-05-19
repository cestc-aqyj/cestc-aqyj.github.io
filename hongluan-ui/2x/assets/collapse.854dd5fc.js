var $=Object.defineProperty;var I=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var U=(u,t,F)=>t in u?$(u,t,{enumerable:!0,configurable:!0,writable:!0,value:F}):u[t]=F,k=(u,t)=>{for(var F in t||(t={}))G.call(t,F)&&U(u,F,t[F]);if(I)for(var F of I(t))H.call(t,F)&&U(u,F,t[F]);return u};import{H as w,L as P,W as q,Q as e,X as h,P as d,a4 as L,aJ as p,S as C,o as Q}from"./vue.059774a0.js";import{H as W}from"./hongluan-icons.5b925e95.js";import{_ as X}from"./index.6a62691a.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:n,createBlock:m}=p,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),B=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),s=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),c=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),_=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),v=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),f=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function g(l,i){const o=t("hl-collapse-item"),V=t("hl-collapse");return n(),m(V,{modelValue:l.activeNames,"onUpdate:modelValue":i[0]||(i[0]=r=>l.activeNames=r),onChange:l.handleChange},{default:F(()=>[E(o,{title:"\u4E00\u81F4\u6027 Consistency",name:"1"},{default:F(()=>[a,B]),_:1}),E(o,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,s]),_:1}),E(o,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[c,A,_]),_:1}),E(o,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[v,f]),_:1})]),_:1},8,["modelValue","onChange"])}const{defineComponent:b,ref:y}=p,N=b({setup(){return{activeNames:y(["1"]),handleChange:o=>{console.log(o)}}}});return k({render:g},N)}(),"hl-demo1":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:n,createBlock:m}=p,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),B=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),s=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),c=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),_=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),v=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),f=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function g(l,i){const o=t("hl-collapse-item"),V=t("hl-collapse");return n(),m(V,{modelValue:l.activeName,"onUpdate:modelValue":i[0]||(i[0]=r=>l.activeName=r),accordion:""},{default:F(()=>[E(o,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[a,B]),_:1}),E(o,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,s]),_:1}),E(o,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[c,A,_]),_:1}),E(o,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[v,f]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:b,ref:y}=p,N=b({setup(){return{activeName:y("1")}}});return k({render:g},N)}(),"hl-demo2":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:n,createBlock:m}=p,a=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),B=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),D=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),s=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),c=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),A=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),_=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),v=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),f=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function g(l,i){const o=t("hl-collapse-item"),V=t("hl-collapse");return n(),m(V,{modelValue:l.activeName,"onUpdate:modelValue":i[0]||(i[0]=r=>l.activeName=r),accordion:"",gap:"var(--lg)"},{default:F(()=>[E(o,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[a,B]),_:1}),E(o,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[D,s]),_:1}),E(o,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[c,A,_]),_:1}),E(o,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[v,f]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:b,ref:y}=p,N=b({setup(){return{activeName:y("1")}}});return k({render:g},N)}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:t,withCtx:F,createElementVNode:E,createTextVNode:n,openBlock:m,createBlock:a}=p,B=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),D=E("p",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),s=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),c=E("p",null," \u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B \u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002 ",-1),A=E("div",null,"\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08",-1),_=E("p",null,[n(" \u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B "),E("br"),n("\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B "),E("br"),n("\u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 "),E("br")],-1),v=E("p",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function f(i,o){const V=u("two-setting"),r=u("hl-icon"),x=u("hl-collapse-item"),S=u("two-airplay"),T=u("hl-group"),j=u("two-user-group"),z=u("hl-collapse");return m(),a(z,{accordion:""},{default:F(()=>[t(x,null,{title:F(()=>[t(r,{type:"primary",class:"m-r-md"},{default:F(()=>[t(V)]),_:1}),B]),default:F(()=>[D]),_:1}),t(x,null,{title:F(()=>[t(T,{align:"items-middle",gap:"var(--md)"},{default:F(()=>[t(r,{type:"primary"},{default:F(()=>[t(S)]),_:1}),s]),_:1})]),default:F(()=>[c]),_:1}),t(x,null,{title:F(()=>[t(T,{gap:"var(--md)",full:"",align:"items-middle"},{default:F(()=>[t(r,{type:"primary",size:"xs",class:"static",fill:"",radius:""},{default:F(()=>[t(j)]),_:1}),t(T,{dir:"vertical"},{default:F(()=>[A]),_:1})]),_:1})]),default:F(()=>[_]),_:1}),t(x,{title:"\u53EF\u63A7 Controllability"},{default:F(()=>[v]),_:1})]),_:1})}const{defineComponent:g}=p,{TwoSetting:b,TwoAirplay:y,TwoUserGroup:N}=W,l=g({components:{TwoSetting:b,TwoAirplay:y,TwoUserGroup:N}});return k({render:f},l)}()}},K=e("h1",null,"Collapse \u6298\u53E0\u9762\u677F",-1),M=e("p",null,"\u901A\u8FC7\u6298\u53E0\u9762\u677F\u6536\u7EB3\u5185\u5BB9\u533A\u57DF,\u53EF\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u9762\u677F\u4E4B\u95F4\u4E0D\u5F71\u54CD",-1),O=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),R=e("h2",{id:"shou-feng-qin-xiao-guo"},[e("a",{class:"header-anchor",href:"#shou-feng-qin-xiao-guo"}),C(" \u624B\u98CE\u7434\u6548\u679C")],-1),Y=e("p",null,"\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u9762\u677F",-1),Z=e("div",null,[e("p",null,[C("\u901A\u8FC7 "),e("code",null,"accordion"),C(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),uu=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),Fu=e("h2",{id:"jian-ju"},[e("a",{class:"header-anchor",href:"#jian-ju"}),C(" \u95F4\u8DDD")],-1),tu=e("p",null,[C("\u4F7F\u7528 "),e("code",null,"gap"),C(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6BCF\u4E2A CollapseItem \u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD")],-1),eu=e("div",null,[e("p",null,[C("\u901A\u8FC7 "),e("code",null,"accordion"),C(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),Eu=e("pre",null,[e("code",{class:"html"},` <template>
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
`)],-1),ou=e("h2",{id:"zi-ding-yi-mian-ban-biao-ti"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-mian-ban-biao-ti"}),C(" \u81EA\u5B9A\u4E49\u9762\u677F\u6807\u9898")],-1),lu=e("p",null,[C("\u9664\u4E86\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"title"),C(" \u5C5E\u6027\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),e("code",null,"slot"),C(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u6807\u9898\u5185\u5BB9\uFF0C\u4EE5\u5B9E\u73B0\u589E\u52A0\u56FE\u6807\u7B49\u6548\u679C\u3002")],-1),Bu=e("pre",null,[e("code",{class:"html"},` <template>
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
        <hl-group align="items-middle" gap="var(--md)">
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
        <hl-group gap="var(--md)" full align="items-middle">
          <hl-icon type="primary" size="xs" class="static" fill radius>
            <two-user-group />
          </hl-icon>
          <hl-group dir="vertical">
            <div>\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08</div>
          </hl-group>
        </hl-group>
      </template>
      <p>
        \u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B
        <br>\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B
        <br>\u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002
        <br>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoSetting, TwoAirplay, TwoUserGroup } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoSetting, TwoAirplay, TwoUserGroup },
})
<\/script>
`)],-1),Cu=Q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E Item \u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>padding</td><td>\u8BBE\u7F6E item-header \u7684\u5DE6\u53F3\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>content-padding</td><td>\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u524D\u6FC0\u6D3B\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53C2\u6570 <code>activeNames</code> \u7C7B\u578B\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>(activeNames: array / string)</td></tr></tbody></table><h2 id="collapse-item-attributes"><a class="header-anchor" href="#collapse-item-attributes"></a> Collapse Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u5FD7\u7B26</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>\u9762\u677F\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="collapse-item-slot"><a class="header-anchor" href="#collapse-item-slot"></a> Collapse Item Slot</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Collapse Item \u7684\u6B63\u6587\u5185\u5BB9</td></tr><tr><td>title</td><td>Collapse Item \u7684\u6807\u9898\u533A\u5185\u5BB9</td></tr></tbody></table>',8);function nu(u,t,F,E,n,m){const a=w("hl-demo0"),B=w("demo-block"),D=w("hl-demo1"),s=w("hl-demo2"),c=w("hl-demo3"),A=w("right-nav");return P(),q(L,null,[e("section",null,[K,M,h(B,{fs:""},{source:d(()=>[h(a)]),highlight:d(()=>[O]),_:1}),R,Y,h(B,{fs:""},{source:d(()=>[h(D)]),highlight:d(()=>[uu]),default:d(()=>[Z]),_:1}),Fu,tu,h(B,{fs:""},{source:d(()=>[h(s)]),highlight:d(()=>[Eu]),default:d(()=>[eu]),_:1}),ou,lu,h(B,{fs:""},{source:d(()=>[h(c)]),highlight:d(()=>[Bu]),_:1}),Cu]),h(A)],64)}var Au=X(J,[["render",nu]]);export{Au as default};
