var z=Object.defineProperty;var j=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var I=(u,t,F)=>t in u?z(u,t,{enumerable:!0,configurable:!0,writable:!0,value:F}):u[t]=F,w=(u,t)=>{for(var F in t||(t={}))O.call(t,F)&&I(u,F,t[F]);if(j)for(var F of j(t))$.call(t,F)&&I(u,F,t[F]);return u};import{H as k,L as H,W as q,Q as e,X as h,P as c,a4 as G,S as d,o as L,aJ as a}from"./vue.059774a0.js";import{H as Q}from"./hongluan-icons.5b925e95.js";import{_ as W}from"./index.9503bc3e.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const X={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:s,createBlock:v}=a,A=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),n=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),r=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),p=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),_=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),m=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),f=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),g=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),b=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(C,B){const o=t("hl-collapse-item"),l=t("hl-collapse");return s(),v(l,{modelValue:C.activeNames,"onUpdate:modelValue":B[0]||(B[0]=i=>C.activeNames=i),onChange:C.handleChange},{default:F(()=>[E(o,{title:"\u4E00\u81F4\u6027 Consistency",name:"1"},{default:F(()=>[A,n]),_:1}),E(o,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[r,p]),_:1}),E(o,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[_,m,f]),_:1}),E(o,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[g,b]),_:1})]),_:1},8,["modelValue","onChange"])}const{defineComponent:N}=a,{ref:D}=a;return w({render:y},N({setup(C,{expose:B}){B();const i={activeNames:D(["1"]),handleChange:V=>{console.log(V)},ref:D};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo1":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:s,createBlock:v}=a,A=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),n=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),r=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),p=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),_=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),m=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),f=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),g=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),b=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(C,B){const o=t("hl-collapse-item"),l=t("hl-collapse");return s(),v(l,{modelValue:C.activeName,"onUpdate:modelValue":B[0]||(B[0]=i=>C.activeName=i),accordion:""},{default:F(()=>[E(o,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[A,n]),_:1}),E(o,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[r,p]),_:1}),E(o,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[_,m,f]),_:1}),E(o,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[g,b]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:N}=a,{ref:D}=a;return w({render:y},N({setup(C,{expose:B}){B();const l={activeName:D("1"),ref:D};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hl-demo2":function(){const{createElementVNode:u,resolveComponent:t,withCtx:F,createVNode:E,openBlock:s,createBlock:v}=a,A=u("div",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B ",-1),n=u("div",null," \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),r=u("div",null,"\u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B",-1),p=u("div",null,"\u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002",-1),_=u("div",null,"\u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B",-1),m=u("div",null,"\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B",-1),f=u("div",null," \u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 ",-1),g=u("div",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B ",-1),b=u("div",null," \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function y(C,B){const o=t("hl-collapse-item"),l=t("hl-collapse");return s(),v(l,{modelValue:C.activeName,"onUpdate:modelValue":B[0]||(B[0]=i=>C.activeName=i),accordion:"",gap:"var(--lg)"},{default:F(()=>[E(o,{title:"\u4E00\u81F4\u6027 Consistency",name:"1",disabled:""},{default:F(()=>[A,n]),_:1}),E(o,{title:"\u53CD\u9988 Feedback",name:"2"},{default:F(()=>[r,p]),_:1}),E(o,{title:"\u6548\u7387 Efficiency",name:"3"},{default:F(()=>[_,m,f]),_:1}),E(o,{title:"\u53EF\u63A7 Controllability",name:"4"},{default:F(()=>[g,b]),_:1})]),_:1},8,["modelValue"])}const{defineComponent:N}=a,{ref:D}=a;return w({render:y},N({setup(C,{expose:B}){B();const l={activeName:D("1"),ref:D};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:t,withCtx:F,createElementVNode:E,createTextVNode:s,openBlock:v,createBlock:A}=a,n=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),r=E("p",null," \u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B \u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A\u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002 ",-1),p=E("div",null,"\u4E00\u81F4\u6027 Consistency",-1),_=E("p",null," \u63A7\u5236\u53CD\u9988\uFF1A\u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B \u9875\u9762\u53CD\u9988\uFF1A\u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002 ",-1),m=E("div",null,"\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08",-1),f=E("p",null,[s(" \u7B80\u5316\u6D41\u7A0B\uFF1A\u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B "),E("br"),s("\u6E05\u6670\u660E\u786E\uFF1A\u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B "),E("br"),s("\u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A\u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002 "),E("br")],-1),g=E("p",null," \u7528\u6237\u51B3\u7B56\uFF1A\u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B \u7ED3\u679C\u53EF\u63A7\uFF1A\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002 ",-1);function b(B,o){const l=u("two-setting"),i=u("hl-icon"),V=u("hl-collapse-item"),T=u("two-airplay"),S=u("hl-group"),P=u("two-user-group"),U=u("hl-collapse");return v(),A(U,{accordion:""},{default:F(()=>[t(V,null,{title:F(()=>[t(i,{type:"primary",class:"m-r-md"},{default:F(()=>[t(l)]),_:1}),n]),default:F(()=>[r]),_:1}),t(V,null,{title:F(()=>[t(S,{align:"items-middle",gap:"var(--md)"},{default:F(()=>[t(i,{type:"primary"},{default:F(()=>[t(T)]),_:1}),p]),_:1})]),default:F(()=>[_]),_:1}),t(V,null,{title:F(()=>[t(S,{gap:"var(--md)",full:"",align:"items-middle"},{default:F(()=>[t(i,{type:"primary",size:"xs",class:"static",fill:"",radius:""},{default:F(()=>[t(P)]),_:1}),t(S,{dir:"vertical"},{default:F(()=>[m]),_:1})]),_:1})]),default:F(()=>[f]),_:1}),t(V,{title:"\u53EF\u63A7 Controllability"},{default:F(()=>[g]),_:1})]),_:1})}const{defineComponent:y}=a,{TwoSetting:N,TwoAirplay:D,TwoUserGroup:x}=Q;return w({render:b},y({setup(B,{expose:o}){o();const l={TwoSetting:N,TwoAirplay:D,TwoUserGroup:x};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}()}},J=e("h1",null,"Collapse \u6298\u53E0\u9762\u677F",-1),K=e("p",null,"\u901A\u8FC7\u6298\u53E0\u9762\u677F\u6536\u7EB3\u5185\u5BB9\u533A\u57DF,\u53EF\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u9762\u677F\u4E4B\u95F4\u4E0D\u5F71\u54CD",-1),M=e("pre",null,[e("code",{class:"html"},` <template>
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

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = val => {
  console.log(val)
}

<\/script>
`)],-1),R=e("h2",{id:"shou-feng-qin-xiao-guo"},[e("a",{class:"header-anchor",href:"#shou-feng-qin-xiao-guo"}),d(" \u624B\u98CE\u7434\u6548\u679C")],-1),Y=e("p",null,"\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u9762\u677F",-1),Z=e("div",null,[e("p",null,[d("\u901A\u8FC7 "),e("code",null,"accordion"),d(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),uu=e("pre",null,[e("code",{class:"html"},` <template>
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

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
<\/script>
`)],-1),Fu=e("h2",{id:"jian-ju"},[e("a",{class:"header-anchor",href:"#jian-ju"}),d(" \u95F4\u8DDD")],-1),tu=e("p",null,[d("\u4F7F\u7528 "),e("code",null,"gap"),d(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6BCF\u4E2A CollapseItem \u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD")],-1),eu=e("div",null,[e("p",null,[d("\u901A\u8FC7 "),e("code",null,"accordion"),d(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u662F\u5426\u4EE5\u624B\u98CE\u7434\u6A21\u5F0F\u663E\u793A\u3002")])],-1),Eu=e("pre",null,[e("code",{class:"html"},` <template>
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

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
<\/script>

`)],-1),ou=e("h2",{id:"zi-ding-yi-mian-ban-biao-ti"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-mian-ban-biao-ti"}),d(" \u81EA\u5B9A\u4E49\u9762\u677F\u6807\u9898")],-1),lu=e("p",null,[d("\u9664\u4E86\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"title"),d(" \u5C5E\u6027\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),e("code",null,"slot"),d(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9762\u677F\u7684\u6807\u9898\u5185\u5BB9\uFF0C\u4EE5\u5B9E\u73B0\u589E\u52A0\u56FE\u6807\u7B49\u6548\u679C\u3002")],-1),Bu=e("pre",null,[e("code",{class:"html"},` <template>
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
<script lang="ts" setup>
import { TwoSetting, TwoAirplay, TwoUserGroup } from '@hongluan-ui/icons'
<\/script>
`)],-1),Cu=L('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u5F53\u524D\u6FC0\u6D3B\u7684\u9762\u677F(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u7ED1\u5B9A\u503C\u7C7B\u578B\u9700\u8981\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>accordion</td><td>\u662F\u5426\u624B\u98CE\u7434\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E Item \u4E4B\u95F4\u7684\u95F4\u9699</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>padding</td><td>\u8BBE\u7F6E item-header \u7684\u5DE6\u53F3\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>content-padding</td><td>\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u524D\u6FC0\u6D3B\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1(\u5982\u679C\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53C2\u6570 <code>activeNames</code> \u7C7B\u578B\u4E3A<code>string</code>\uFF0C\u5426\u5219\u4E3A<code>array</code>)</td><td>(activeNames: array / string)</td></tr></tbody></table><h2 id="collapse-item-attributes"><a class="header-anchor" href="#collapse-item-attributes"></a> Collapse Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u5FD7\u7B26</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>\u9762\u677F\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="collapse-item-slot"><a class="header-anchor" href="#collapse-item-slot"></a> Collapse Item Slot</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Collapse Item \u7684\u6B63\u6587\u5185\u5BB9</td></tr><tr><td>title</td><td>Collapse Item \u7684\u6807\u9898\u533A\u5185\u5BB9</td></tr></tbody></table>',8);function nu(u,t,F,E,s,v){const A=k("hl-demo0"),n=k("demo-block"),r=k("hl-demo1"),p=k("hl-demo2"),_=k("hl-demo3"),m=k("right-nav");return H(),q(G,null,[e("section",null,[J,K,h(n,{fs:""},{source:c(()=>[h(A)]),highlight:c(()=>[M]),_:1}),R,Y,h(n,{fs:""},{source:c(()=>[h(r)]),highlight:c(()=>[uu]),default:c(()=>[Z]),_:1}),Fu,tu,h(n,{fs:""},{source:c(()=>[h(p)]),highlight:c(()=>[Eu]),default:c(()=>[eu]),_:1}),ou,lu,h(n,{fs:""},{source:c(()=>[h(_)]),highlight:c(()=>[Bu]),_:1}),Cu]),h(m)],64)}var Au=W(X,[["render",nu]]);export{Au as default};
