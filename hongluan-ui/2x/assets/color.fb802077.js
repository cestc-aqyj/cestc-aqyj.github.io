var H=Object.defineProperty;var j=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var q=(a,n,t)=>n in a?H(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,E=(a,n)=>{for(var t in n||(n={}))N.call(n,t)&&q(a,t,n[t]);if(j)for(var t of j(n))V.call(n,t)&&q(a,t,n[t]);return a};import{F as b,L as S,W as P,Q as s,X as e,P as o,a2 as W,aJ as C,M as c,o as w}from"./vue.30e377ec.js";import{_ as $}from"./index.58703c48.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.51d8bafe.js";const z={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:a,resolveComponent:n,withCtx:t,createVNode:u,openBlock:x,createBlock:v}=C,_=a("div",{class:"bg-primary text-inverse text-center p-md radius-xl"},"Primary \u9996\u9009",-1),p=a("div",{class:"bg-success text-inverse text-center p-md radius-xl"},"Success \u6210\u529F",-1),l=a("div",{class:"bg-warning text-inverse text-center p-md radius-xl"},"Warning \u8B66\u544A",-1),r=a("div",{class:"bg-danger text-inverse text-center p-md radius-xl"},"Danger \u5371\u9669",-1),h=a("div",{class:"bg-info text-inverse text-center p-md radius-xl"},"Info \u4FE1\u606F",-1);function m(f,k){const d=n("hl-col"),y=n("hl-row");return x(),v(y,{layout:"grid",gap:"var(--md)",count:"md:count-5"},{default:t(()=>[u(d,{span:"col"},{default:t(()=>[_]),_:1}),u(d,{span:"col"},{default:t(()=>[p]),_:1}),u(d,{span:"col"},{default:t(()=>[l]),_:1}),u(d,{span:"col"},{default:t(()=>[r]),_:1}),u(d,{span:"col"},{default:t(()=>[h]),_:1})]),_:1})}return E({render:m},{})}(),"hl-demo1":function(){const{createTextVNode:a,resolveComponent:n,withCtx:t,createVNode:u,openBlock:x,createBlock:v}=C,_=a("\u5E38\u7528 text-regular"),p=a("\u6B21\u8981 text-secondary"),l=a("\u6DE1\u8272 text-light"),r=a("\u6781\u6DE1 text-lightest"),h=a("\u6807\u9898 text-title"),m=a("\u94FE\u63A5 text-link"),F=a("\u60AC\u505C text-hover"),f=a("\u53CD\u8272 text-inverse"),k=a("\u7EE7\u627F text-inherit"),d=a("\u9996\u9009 text-primary"),y=a("\u6210\u529F text-success"),A=a("\u8B66\u544A text-warning"),D=a("\u5371\u9669 text-danger"),g=a("\u4FE1\u606F text-info");function B(Ce,Be){const i=n("hl-group");return x(),v(i,{gap:"var(--md)",wrap:""},{default:t(()=>[u(i,{class:"text-regular p-sm bg-backdrop radius-xl"},{default:t(()=>[_]),_:1}),u(i,{class:"text-secondary p-sm bg-backdrop radius-xl"},{default:t(()=>[p]),_:1}),u(i,{class:"text-light p-sm bg-backdrop radius-xl"},{default:t(()=>[l]),_:1}),u(i,{class:"text-lightest p-sm bg-backdrop radius-xl"},{default:t(()=>[r]),_:1}),u(i,{class:"text-title p-sm bg-backdrop radius-xl"},{default:t(()=>[h]),_:1}),u(i,{class:"text-link p-sm bg-backdrop radius-xl"},{default:t(()=>[m]),_:1}),u(i,{class:"text-hover p-sm bg-backdrop radius-xl"},{default:t(()=>[F]),_:1}),u(i,{class:"text-inverse p-sm bg-backdrop radius-xl"},{default:t(()=>[f]),_:1}),u(i,{class:"text-inherit p-sm bg-backdrop radius-xl"},{default:t(()=>[k]),_:1}),u(i,{class:"text-primary p-sm bg-backdrop radius-xl"},{default:t(()=>[d]),_:1}),u(i,{class:"text-success p-sm bg-backdrop radius-xl"},{default:t(()=>[y]),_:1}),u(i,{class:"text-warning p-sm bg-backdrop radius-xl"},{default:t(()=>[A]),_:1}),u(i,{class:"text-danger p-sm bg-backdrop radius-xl"},{default:t(()=>[D]),_:1}),u(i,{class:"text-info p-sm bg-backdrop radius-xl"},{default:t(()=>[g]),_:1})]),_:1})}return E({render:B},{})}(),"hl-demo2":function(){const{createElementVNode:a,resolveComponent:n,withCtx:t,createVNode:u,openBlock:x,createBlock:v}=C,_=a("span",{class:"display-block hover:bg-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center"},"Hover \u80CC\u666F\u8272",-1),p=a("span",{class:"display-block hover:text-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center"},"Hover \u6587\u672C\u8272",-1),l=a("span",{class:"display-block hover:border-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center"},"Hover \u8FB9\u6846\u8272",-1),r=a("span",{class:"display-block active:bg-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center"},"Active \u80CC\u666F\u8272",-1),h=a("span",{class:"display-block active:text-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center"},"Active \u6587\u672C\u8272",-1),m=a("span",{class:"display-block active:border-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center"},"Active \u8FB9\u6846\u8272",-1),F=a("input",{class:"focus:bg-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center",value:"Focus \u80CC\u666F\u8272"},null,-1),f=a("input",{class:"focus:text-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center",value:"Focus \u6587\u672C\u8272"},null,-1),k=a("input",{class:"focus:border-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center",value:"Focus \u8FB9\u6846\u8272"},null,-1);function d(A,D){const g=n("hl-col"),B=n("hl-row");return x(),v(B,{layout:"grid",gap:"var(--md)",count:"md:count-3"},{default:t(()=>[u(g,{span:"col"},{default:t(()=>[_]),_:1}),u(g,{span:"col"},{default:t(()=>[p]),_:1}),u(g,{span:"col"},{default:t(()=>[l]),_:1}),u(g,{span:"col"},{default:t(()=>[r]),_:1}),u(g,{span:"col"},{default:t(()=>[h]),_:1}),u(g,{span:"col"},{default:t(()=>[m]),_:1}),u(g,{span:"col"},{default:t(()=>[F]),_:1}),u(g,{span:"col"},{default:t(()=>[f]),_:1}),u(g,{span:"col"},{default:t(()=>[k]),_:1})]),_:1})}return E({render:d},{})}(),"hl-demo3":function(){const{createElementVNode:a,resolveComponent:n,withCtx:t,createVNode:u,openBlock:x,createBlock:v}=C,_=a("span",{class:"display-block checked:bg-primary text-inverse p-sm bg-backdrop w-full text-center radius-xl"},"Hover \u80CC\u666F\u8272",-1),p=a("span",{class:"display-block checked:text-primary text-inverse p-sm bg-backdrop w-full text-center radius-xl"},"Hover \u6587\u672C\u8272",-1),l=a("span",{class:"display-block checked:border-primary border border-transparent text-inverse p-sm bg-backdrop w-full text-center radius-xl"},"Hover \u8FB9\u6846\u8272",-1);function r(f,k){const d=n("hl-col"),y=n("hl-row");return x(),v(y,{layout:"grid",gap:"var(--md)",count:"md:count-3",class:"is-checked"},{default:t(()=>[u(d,{span:"col"},{default:t(()=>[_]),_:1}),u(d,{span:"col"},{default:t(()=>[p]),_:1}),u(d,{span:"col"},{default:t(()=>[l]),_:1})]),_:1})}const{defineComponent:h,ref:m}=C,F=h({setup(){return{checkboxGroup:m(["\u9009\u9879\u4E00"])}}});return E({render:r},F)}()}},G=s("h1",null,"StateColor \u72B6\u6001\u989C\u8272",-1),I=s("p",null,[c("Hongluan\u7684\u8272\u5F69\u4F53\u7CFB\u7531"),s("code",null,"\u72B6\u6001\u8272"),c("\u548C"),s("code",null,"\u54C1\u724C\u8272"),c("\u6784\u5EFA\u800C\u6210\uFF0C\u8272\u5F69\u7CFB\u7EDF\u5BF9\u6211\u4EEC\u7684\u754C\u9762\u98CE\u683C\u548C\u7EC4\u4EF6\u8FDB\u884C\u4E3B\u9898\u5316\u3002\u5E76\u4E14\u4E3A\u4EFB\u610F\u9879\u76EE\u63D0\u4F9B\u4E86\u66F4\u52A0\u5168\u9762\u7684\u5B9A\u5236\u548C\u6269\u5C55\u3002")],-1),L=s("h2",{id:"zhuang-tai-se"},[s("a",{class:"header-anchor",href:"#zhuang-tai-se"}),c(" \u72B6\u6001\u8272")],-1),M=s("p",null,"\u8272\u5F69\u7CFB\u7EDF\u914D\u7F6E\u4E865\u4E2A\u72B6\u6001\u8272\uFF0C\u5B83\u4EEC\u5206\u522B\u7528\u4E8E\u8868\u8FBE\u76F8\u5E94\u7684\u4EA4\u4E92\u542B\u4E49\u3002",-1),Q=s("pre",null,[s("code",{class:"html"},`<template>
  <hl-row layout="grid" gap="var(--md)" count="md:count-5">
    <hl-col span="col"><div class="bg-primary text-inverse text-center p-md radius-xl">Primary \u9996\u9009</div></hl-col>
    <hl-col span="col"><div class="bg-success text-inverse text-center p-md radius-xl">Success \u6210\u529F</div></hl-col>
    <hl-col span="col"><div class="bg-warning text-inverse text-center p-md radius-xl">Warning \u8B66\u544A</div></hl-col>
    <hl-col span="col"><div class="bg-danger text-inverse text-center p-md radius-xl">Danger \u5371\u9669</div></hl-col>
    <hl-col span="col"><div class="bg-info text-inverse text-center p-md radius-xl">Info \u4FE1\u606F</div></hl-col>
  </hl-row>
</template>
`)],-1),T=w(`<p>\u5728<code>packages/theme/src/common/config.scss</code>\u6587\u4EF6\u4E2D\u4FEE\u6539\u6216\u589E\u52A0\u72B6\u6001\u8272\u3002</p><pre><code class="hljs language-scss"><span class="hljs-variable">$conf_state_color</span>: (
  <span class="hljs-string">&quot;primary&quot;</span>: (......),
  <span class="hljs-string">&quot;success&quot;</span>: (......),
  <span class="hljs-string">&quot;warning&quot;</span>: (......),
  <span class="hljs-string">&quot;danger&quot;</span>: (......),
  <span class="hljs-string">&quot;info&quot;</span>: (......),
  // \u65B0\u589E
  ...: (
    <span class="hljs-string">&quot;key&quot;</span>: value
  ),
) !default;
</code></pre><div class="doc-tip"><p>\u914D\u7F6E\u6587\u4EF6\u91C7\u7528SCSS\u7F16\u5199\uFF0C\u9700\u8981\u4F60\u5BF9SCSS\u7684<a href="https://sass-lang.com/documentation/values/maps">Map\u51FD\u6570</a>\u6709\u6240\u4E86\u89E3\u3002</p></div><h2 id="jian-jin-yan-se"><a class="header-anchor" href="#jian-jin-yan-se"></a> \u6E10\u8FDB\u989C\u8272</h2><p>Hongluan \u4E3A\u6BCF\u4E00\u4E2A\u72B6\u6001\u8272\u90FD\u8D4B\u4E88\u4E86 <code>light</code> \u548C <code>dark</code> \u7684\u6E10\u8FDB\u8272\u3002</p>`,5),X=c("Primary"),J=c("\u9996\u9009\u8272\u3001\u54C1\u724C\u4E3B\u8272\u7CFB"),K=s("div",{class:"text-primary-dark-1 p-sm bg-primary-light-5"},"light-5",-1),O=s("div",{class:"text-primary-dark-2 p-sm bg-primary-light-4"},"light-4",-1),R=s("div",{class:"text-primary-dark-3 p-sm bg-primary-light-3"},"light-3",-1),U=s("div",{class:"text-primary-dark-4 p-sm bg-primary-light-2"},"light-2",-1),Y=s("div",{class:"text-primary-dark-5 p-sm bg-primary-light-1"},"light-1",-1),Z=s("div",{class:"text-inverse p-sm bg-primary"},"primary",-1),ss=s("div",{class:"text-primary-light-5 p-sm bg-primary-dark-1"},"dark-1",-1),ts=s("div",{class:"text-primary-light-4 p-sm bg-primary-dark-2"},"dark-2",-1),es=s("div",{class:"text-primary-light-3 p-sm bg-primary-dark-3"},"dark-3",-1),os=s("div",{class:"text-primary-light-2 p-sm bg-primary-dark-4"},"dark-4",-1),as=s("div",{class:"text-primary-light-1 p-sm bg-primary-dark-5"},"dark-5",-1),us=c("Danger"),cs=c("\u5371\u9669\u63D0\u793A\u3001\u5F3A\u8C03"),ls=s("div",{class:"text-danger-dark-1 p-sm bg-danger-light-5"},"light-5",-1),ns=s("div",{class:"text-danger-dark-2 p-sm bg-danger-light-4"},"light-4",-1),rs=s("div",{class:"text-danger-dark-3 p-sm bg-danger-light-3"},"light-3",-1),is=s("div",{class:"text-danger-dark-4 p-sm bg-danger-light-2"},"light-2",-1),ds=s("div",{class:"text-danger-dark-5 p-sm bg-danger-light-1"},"light-1",-1),ps=s("div",{class:"text-inverse p-sm bg-danger"},"danger",-1),gs=s("div",{class:"text-danger-light-5 p-sm bg-danger-dark-1"},"dark-1",-1),hs=s("div",{class:"text-danger-light-4 p-sm bg-danger-dark-2"},"dark-2",-1),_s=s("div",{class:"text-danger-light-3 p-sm bg-danger-dark-3"},"dark-3",-1),ms=s("div",{class:"text-danger-light-2 p-sm bg-danger-dark-4"},"dark-4",-1),bs=s("div",{class:"text-danger-light-1 p-sm bg-danger-dark-5"},"dark-5",-1),xs=c("Warning"),vs=c("\u8B66\u793A\u3001\u4E0D\u88AB\u63A8\u8350"),Fs=s("div",{class:"text-warning-dark-1 p-sm bg-warning-light-5"},"light-5",-1),fs=s("div",{class:"text-warning-dark-2 p-sm bg-warning-light-4"},"light-4",-1),ks=s("div",{class:"text-warning-dark-3 p-sm bg-warning-light-3"},"light-3",-1),ys=s("div",{class:"text-warning-dark-4 p-sm bg-warning-light-2"},"light-2",-1),Es=s("div",{class:"text-warning-dark-5 p-sm bg-warning-light-1"},"light-1",-1),Cs=s("div",{class:"text-inverse p-sm bg-warning"},"warning",-1),Bs=s("div",{class:"text-warning-light-5 p-sm bg-warning-dark-1"},"dark-1",-1),ws=s("div",{class:"text-warning-light-4 p-sm bg-warning-dark-2"},"dark-2",-1),As=s("div",{class:"text-warning-light-3 p-sm bg-warning-dark-3"},"dark-3",-1),Ds=s("div",{class:"text-warning-light-2 p-sm bg-warning-dark-4"},"dark-4",-1),js=s("div",{class:"text-warning-light-1 p-sm bg-warning-dark-5"},"dark-5",-1),qs=c("Success"),Hs=c("\u901A\u8FC7\u3001\u6B63\u5E38\u3001\u6210\u529F\u53CD\u9988"),Ns=s("div",{class:"text-success-dark-1 p-sm bg-success-light-5"},"light-5",-1),Vs=s("div",{class:"text-success-dark-2 p-sm bg-success-light-4"},"light-4",-1),Ss=s("div",{class:"text-success-dark-3 p-sm bg-success-light-3"},"light-3",-1),Ps=s("div",{class:"text-success-dark-4 p-sm bg-success-light-2"},"light-2",-1),Ws=s("div",{class:"text-success-dark-5 p-sm bg-success-light-1"},"light-1",-1),$s=s("div",{class:"text-inverse p-sm bg-success"},"success",-1),zs=s("div",{class:"text-success-light-5 p-sm bg-success-dark-1"},"dark-1",-1),Gs=s("div",{class:"text-success-light-4 p-sm bg-success-dark-2"},"dark-2",-1),Is=s("div",{class:"text-success-light-3 p-sm bg-success-dark-3"},"dark-3",-1),Ls=s("div",{class:"text-success-light-2 p-sm bg-success-dark-4"},"dark-4",-1),Ms=s("div",{class:"text-success-light-1 p-sm bg-success-dark-5"},"dark-5",-1),Qs=c("Info"),Ts=c("\u63D0\u793A\u4FE1\u606F"),Xs=s("div",{class:"text-info-dark-1 p-sm bg-info-light-5"},"light-5",-1),Js=s("div",{class:"text-info-dark-2 p-sm bg-info-light-4"},"light-4",-1),Ks=s("div",{class:"text-info-dark-3 p-sm bg-info-light-3"},"light-3",-1),Os=s("div",{class:"text-info-dark-4 p-sm bg-info-light-2"},"light-2",-1),Rs=s("div",{class:"text-info-dark-5 p-sm bg-info-light-1"},"light-1",-1),Us=s("div",{class:"text-inverse p-sm bg-info"},"info",-1),Ys=s("div",{class:"text-info-light-5 p-sm bg-info-dark-1"},"dark-1",-1),Zs=s("div",{class:"text-info-light-4 p-sm bg-info-dark-2"},"dark-2",-1),st=s("div",{class:"text-info-light-3 p-sm bg-info-dark-3"},"dark-3",-1),tt=s("div",{class:"text-info-light-2 p-sm bg-info-dark-4"},"dark-4",-1),et=s("div",{class:"text-info-light-1 p-sm bg-info-dark-5"},"dark-5",-1),ot=s("h2",{id:"tou-ming-zhuang-tai-se"},[s("a",{class:"header-anchor",href:"#tou-ming-zhuang-tai-se"}),c(" \u900F\u660E\u72B6\u6001\u8272")],-1),at=s("p",null,[c("\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u900F\u660E\u5EA6"),s("code",null,"opacity"),c("\u5C5E\u6027\u6765\u8BBE\u7F6E\u72B6\u6001\u989C\u8272\uFF0C\u4F8B\u5982\uFF1A"),s("code",null,"bg-primary-opacity-9")],-1),ut=s("div",{class:"bg-primary p-sm w-xs"},"primary",-1),ct=s("div",{class:"bg-primary-opacity-9 p-sm"},"9",-1),lt=s("div",{class:"bg-primary-opacity-8 p-sm"},"8",-1),nt=s("div",{class:"bg-primary-opacity-7 p-sm"},"7",-1),rt=s("div",{class:"bg-primary-opacity-6 p-sm"},"6",-1),it=s("div",{class:"bg-primary-opacity-5 p-sm"},"5",-1),dt=s("div",{class:"bg-primary-opacity-4 p-sm"},"4",-1),pt=s("div",{class:"bg-primary-opacity-3 p-sm"},"3",-1),gt=s("div",{class:"bg-primary-opacity-2 p-sm"},"2",-1),ht=s("div",{class:"bg-primary-opacity-1 p-sm"},"1",-1),_t=s("div",{class:"bg-danger p-sm w-xs"},"Danger",-1),mt=s("div",{class:"bg-danger-opacity-9 p-sm"},"9",-1),bt=s("div",{class:"bg-danger-opacity-8 p-sm"},"8",-1),xt=s("div",{class:"bg-danger-opacity-7 p-sm"},"7",-1),vt=s("div",{class:"bg-danger-opacity-6 p-sm"},"6",-1),Ft=s("div",{class:"bg-danger-opacity-5 p-sm"},"5",-1),ft=s("div",{class:"bg-danger-opacity-4 p-sm"},"4",-1),kt=s("div",{class:"bg-danger-opacity-3 p-sm"},"3",-1),yt=s("div",{class:"bg-danger-opacity-2 p-sm"},"2",-1),Et=s("div",{class:"bg-danger-opacity-1 p-sm"},"1",-1),Ct=s("div",{class:"bg-warning p-sm w-xs"},"Warning",-1),Bt=s("div",{class:"bg-warning-opacity-9 p-sm"},"9",-1),wt=s("div",{class:"bg-warning-opacity-8 p-sm"},"8",-1),At=s("div",{class:"bg-warning-opacity-7 p-sm"},"7",-1),Dt=s("div",{class:"bg-warning-opacity-6 p-sm"},"6",-1),jt=s("div",{class:"bg-warning-opacity-5 p-sm"},"5",-1),qt=s("div",{class:"bg-warning-opacity-4 p-sm"},"4",-1),Ht=s("div",{class:"bg-warning-opacity-3 p-sm"},"3",-1),Nt=s("div",{class:"bg-warning-opacity-2 p-sm"},"2",-1),Vt=s("div",{class:"bg-warning-opacity-1 p-sm"},"1",-1),St=s("div",{class:"bg-success p-sm w-xs"},"Success",-1),Pt=s("div",{class:"bg-success-opacity-9 p-sm"},"9",-1),Wt=s("div",{class:"bg-success-opacity-8 p-sm"},"8",-1),$t=s("div",{class:"bg-success-opacity-7 p-sm"},"7",-1),zt=s("div",{class:"bg-success-opacity-6 p-sm"},"6",-1),Gt=s("div",{class:"bg-success-opacity-5 p-sm"},"5",-1),It=s("div",{class:"bg-success-opacity-4 p-sm"},"4",-1),Lt=s("div",{class:"bg-success-opacity-3 p-sm"},"3",-1),Mt=s("div",{class:"bg-success-opacity-2 p-sm"},"2",-1),Qt=s("div",{class:"bg-success-opacity-1 p-sm"},"1",-1),Tt=s("div",{class:"bg-info p-sm w-xs"},"Info",-1),Xt=s("div",{class:"bg-info-opacity-9 p-sm"},"9",-1),Jt=s("div",{class:"bg-info-opacity-8 p-sm"},"8",-1),Kt=s("div",{class:"bg-info-opacity-7 p-sm"},"7",-1),Ot=s("div",{class:"bg-info-opacity-6 p-sm"},"6",-1),Rt=s("div",{class:"bg-info-opacity-5 p-sm"},"5",-1),Ut=s("div",{class:"bg-info-opacity-4 p-sm"},"4",-1),Yt=s("div",{class:"bg-info-opacity-3 p-sm"},"3",-1),Zt=s("div",{class:"bg-info-opacity-2 p-sm"},"2",-1),se=s("div",{class:"bg-info-opacity-1 p-sm"},"1",-1),te=s("p",null,[c("\u9664\u4E86"),s("code",null,"bg-primary"),c("\u80CC\u666F\u652F\u6301\u72B6\u6001\u8272\u4EE5\u5916\uFF0C\u6587\u672C"),s("code",null,"text-primary"),c("\u3001\u8FB9\u6846"),s("code",null,"border-primary"),c("\u5747\u652F\u6301\u72B6\u6001\u8272\uFF0C\u4EE5\u53CA\u6E10\u8FD1\u548C\u900F\u660E\u5EA6\u5C5E\u6027\u3002\u4F8B\u5982\uFF1A")],-1),ee=s("div",{class:"p-y-sm p-x-lg radius-lg bg-light border"},[c("text-danger"),s("span",{class:"text-primary font-bold",style:{"text-decoration":"underline"}},"-dark-1")],-1),oe=s("div",{class:"p-y-sm p-x-lg radius-lg bg-light border"},[c("border-danger"),s("span",{class:"text-primary font-bold",style:{"text-decoration":"underline"}},"-opacity-1")],-1),ae=w(`<div class="doc-tip"><p>\u53EA\u6709 <strong>\u72B6\u6001\u8272</strong> \u548C <strong>\u54C1\u724C\u8272</strong> \u53EF\u4EE5\u4F7F\u7528\u6E10\u8FDB\u548C\u900F\u660E\u5EA6\u6837\u5F0F</p></div><h2 id="bei-jing-se"><a class="header-anchor" href="#bei-jing-se"></a> \u80CC\u666F\u8272</h2><p>\u80CC\u666F\u8272\u7528\u4E8E\u4FEE\u9970\u9875\u9762\u7684\u5C42\u7EA7\uFF0CHongluan\u4E3A\u63D0\u524D\u4E3A\u4F60\u63D0\u4F9B\u4E86\u4E0B\u9762\u51E0\u79CD\u5E38\u7528\u6837\u5F0F</p><pre><code class="hljs language-scss"><span class="hljs-variable">$conf_bg_color</span>: (
  <span class="hljs-string">&quot;body&quot;</span>: <span class="hljs-number">#FFFFFF</span>, // \u4E3B\u4F53\u80CC\u666F
  <span class="hljs-string">&quot;header&quot;</span>: <span class="hljs-number">#FFFFFF</span>, // \u6807\u9898\u80CC\u666F
  <span class="hljs-string">&quot;content&quot;</span>: <span class="hljs-number">#FFFFFF</span>, // \u5185\u5BB9\u533A\u80CC\u666F
  <span class="hljs-string">&quot;light&quot;</span>: <span class="hljs-number">#F6F9FB</span>, // \u6DE1\u8272\u80CC\u666F (\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u8303\u56F4)
  <span class="hljs-string">&quot;popup&quot;</span>: <span class="hljs-number">#FFFFFF</span>, // \u5F39\u7A97\u80CC\u666F (\u6D6E\u5C42\u3001\u5F39\u7A97\u7B49)
  <span class="hljs-string">&quot;element&quot;</span>: <span class="hljs-number">#FFFFFF</span>, // \u7EC4\u4EF6\u5143\u7D20\u80CC\u666F
  <span class="hljs-string">&quot;hover&quot;</span>: <span class="hljs-number">#F6F9FB</span>, // \u901A\u7528\u60AC\u505C\u80CC\u666F
  <span class="hljs-string">&quot;active&quot;</span>: <span class="hljs-number">#F6F9FB</span>, // \u901A\u7528\u9009\u4E2D\u80CC\u666F
  <span class="hljs-string">&quot;backdrop&quot;</span>: rgba(<span class="hljs-number">#000000</span>, <span class="hljs-number">0.3</span>), // \u5E55\u5E03\u80CC\u666F
) !default;
</code></pre><p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5DE5\u5177\u7C7B\u5FEB\u901F\u8C03\u7528\uFF1A</p>`,5),ue=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-body",-1),ce=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-header",-1),le=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-content",-1),ne=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-light",-1),re=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-popup",-1),ie=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-element",-1),de=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-hover",-1),pe=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-active",-1),ge=s("span",{class:"display-block p-y-xs p-x-lg radius-lg bg-light border"},"bg-backdrop",-1),he=s("h2",{id:"wen-ben-se"},[s("a",{class:"header-anchor",href:"#wen-ben-se"}),c(" \u6587\u672C\u8272")],-1),_e=s("p",null,[c("\u6587\u672C\u989C\u8272\u4F7F\u7528 "),s("code",null,"text-"),c(" \u524D\u7F00\uFF0CHongluan\u603B\u7ED3\u4E86\u4E0B\u9762\u51E0\u79CD\u989C\u8272\u7684\u4F7F\u7528\u573A\u666F\uFF0C\u6587\u672C\u989C\u8272\u4E5F\u62E5\u6709\u72B6\u6001\u8272\u6837\u5F0F")],-1),me=s("pre",null,[s("code",{class:"html"},`<template>
  <hl-group gap="var(--md)" wrap>
    <hl-group class="text-regular p-sm bg-backdrop radius-xl">\u5E38\u7528 text-regular</hl-group>
    <hl-group class="text-secondary p-sm bg-backdrop radius-xl">\u6B21\u8981 text-secondary</hl-group>
    <hl-group class="text-light p-sm bg-backdrop radius-xl">\u6DE1\u8272 text-light</hl-group>
    <hl-group class="text-lightest p-sm bg-backdrop radius-xl">\u6781\u6DE1 text-lightest</hl-group>
    <hl-group class="text-title p-sm bg-backdrop radius-xl">\u6807\u9898 text-title</hl-group>
    <hl-group class="text-link p-sm bg-backdrop radius-xl">\u94FE\u63A5 text-link</hl-group>
    <hl-group class="text-hover p-sm bg-backdrop radius-xl">\u60AC\u505C text-hover</hl-group>
    <hl-group class="text-inverse p-sm bg-backdrop radius-xl">\u53CD\u8272 text-inverse</hl-group>
    <hl-group class="text-inherit p-sm bg-backdrop radius-xl">\u7EE7\u627F text-inherit</hl-group>
    <hl-group class="text-primary p-sm bg-backdrop radius-xl">\u9996\u9009 text-primary</hl-group>
    <hl-group class="text-success p-sm bg-backdrop radius-xl">\u6210\u529F text-success</hl-group>
    <hl-group class="text-warning p-sm bg-backdrop radius-xl">\u8B66\u544A text-warning</hl-group>
    <hl-group class="text-danger p-sm bg-backdrop radius-xl">\u5371\u9669 text-danger</hl-group>
    <hl-group class="text-info p-sm bg-backdrop radius-xl">\u4FE1\u606F text-info</hl-group>
  </hl-group>
</template>
`)],-1),be=w('<h2 id="jiao-hu-xiang-ying"><a class="header-anchor" href="#jiao-hu-xiang-ying"></a> \u4EA4\u4E92\u54CD\u5E94</h2><p>\u9664\u4E86\u8BBE\u7F6E\u6587\u672C\u8272\u3001\u72B6\u6001\u8272\u4EE5\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4E3A\u5143\u7D20\u7684\u4EA4\u4E92<code>hover</code>\u3001<code>active</code>\u3001<code>focus</code>\u8BBE\u7F6E\u72B6\u6001\u989C\u8272</p><div class="doc-tip"><p>\u4E3A\u4E86\u5229\u4E8E\u8BB0\u5FC6\uFF0C\u4EA4\u4E92\u72B6\u6001\u7684\u6807\u7B7E\u662F\u5199\u5728\u989C\u8272\u524D\u9762\u7684\uFF0C\u4F8B\u5982 <code>hover:bg-primary</code> <code>active:bg-primary</code></p></div>',3),xe=s("pre",null,[s("code",{class:"html"},`<template>
  <hl-row layout="grid" gap="var(--md)" count="md:count-3">
    <hl-col span="col"><span class="display-block hover:bg-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center">Hover \u80CC\u666F\u8272</span></hl-col>
    <hl-col span="col"><span class="display-block hover:text-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center">Hover \u6587\u672C\u8272</span></hl-col>
    <hl-col span="col"><span class="display-block hover:border-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center">Hover \u8FB9\u6846\u8272</span></hl-col>
    <hl-col span="col"><span class="display-block active:bg-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center">Active \u80CC\u666F\u8272</span></hl-col>
    <hl-col span="col"><span class="display-block active:text-primary text-inverse p-sm bg-backdrop radius-xl w-full text-center">Active \u6587\u672C\u8272</span></hl-col>
    <hl-col span="col"><span class="display-block active:border-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center">Active \u8FB9\u6846\u8272</span></hl-col>
    <hl-col span="col"><input class="focus:bg-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center" value="Focus \u80CC\u666F\u8272" /></hl-col>
    <hl-col span="col"><input class="focus:text-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center" value="Focus \u6587\u672C\u8272" /></hl-col>
    <hl-col span="col"><input class="focus:border-primary border border-transparent text-inverse p-sm bg-backdrop radius-xl w-full text-center" value="Focus \u8FB9\u6846\u8272" /></hl-col>
  </hl-row>
</template>
`)],-1),ve=s("h2",{id:"checkedshu-xing"},[s("a",{class:"header-anchor",href:"#checkedshu-xing"}),c(" Checked\u5C5E\u6027")],-1),Fe=s("p",null,[c("\u5F53\u7236\u5143\u7D20\u4E2D\u6709"),s("code",null,"is-checked"),c("\u7C7B\u540D\u6216"),s("code",null,":checked"),c("\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528\u7C7B\u4F3C"),s("code",null,"checked:bg-primary"),c("\u7684\u7C7B\u540D\u6765\u8C03\u7528")],-1),fe=s("pre",null,[s("code",{class:"html"},`<template>
  <hl-row layout="grid" gap="var(--md)" count="md:count-3" class="is-checked">
    <hl-col span="col">
      <span class="display-block checked:bg-primary text-inverse p-sm bg-backdrop  w-full text-center radius-xl">Hover \u80CC\u666F\u8272</span>
    </hl-col>
    <hl-col span="col">
      <span class="display-block checked:text-primary text-inverse p-sm bg-backdrop  w-full text-center radius-xl">Hover \u6587\u672C\u8272</span>
    </hl-col>
    <hl-col span="col">
      <span class="display-block checked:border-primary border border-transparent text-inverse p-sm bg-backdrop w-full text-center radius-xl">Hover \u8FB9\u6846\u8272</span>
    </hl-col>
  </hl-row>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const checkboxGroup = ref(['\u9009\u9879\u4E00'])
      return {
        checkboxGroup,
      }
    },
  })
<\/script>
`)],-1),ke=s("div",{class:"doc-tip danger"},[s("p",null,[c("Hongluan\u7684\u6574\u4E2A\u8272\u5F69\u7CFB\u7EDF\u5747\u652F\u6301 "),s("code",null,"hover"),c("\u3001"),s("code",null,"active"),c("\u3001"),s("code",null,"checked"),c("\u7684\u4EA4\u4E92\u72B6\u6001")])],-1);function ye(a,n,t,u,x,v){const _=b("hl-demo0"),p=b("demo-block"),l=b("hl-group"),r=b("hl-col"),h=b("hl-row"),m=b("hl-demo1"),F=b("hl-demo2"),f=b("hl-demo3"),k=b("right-nav");return S(),P(W,null,[s("section",null,[G,I,L,M,e(p,null,{source:o(()=>[e(_)]),highlight:o(()=>[Q]),_:1}),T,e(h,{layout:"grid",gap:"var(--lg)",count:"md:count-3",class:"font-sm m-b-md"},{default:o(()=>[e(r,{span:"col"},{default:o(()=>[e(l,{dir:"vertical",full:"",class:"p-md text-inverse bg-primary"},{default:o(()=>[e(l,{class:"font-h3 font-bold"},{default:o(()=>[X]),_:1}),e(l,null,{default:o(()=>[J]),_:1})]),_:1}),K,O,R,U,Y,Z,ss,ts,es,os,as]),_:1}),e(r,{span:"col"},{default:o(()=>[e(l,{dir:"vertical",full:"",class:"p-md text-inverse bg-danger"},{default:o(()=>[e(l,{class:"font-h3 font-bold"},{default:o(()=>[us]),_:1}),e(l,null,{default:o(()=>[cs]),_:1})]),_:1}),ls,ns,rs,is,ds,ps,gs,hs,_s,ms,bs]),_:1}),e(r,{span:"col"},{default:o(()=>[e(l,{dir:"vertical",full:"",class:"p-md text-inverse bg-warning"},{default:o(()=>[e(l,{class:"font-h3 font-bold"},{default:o(()=>[xs]),_:1}),e(l,null,{default:o(()=>[vs]),_:1})]),_:1}),Fs,fs,ks,ys,Es,Cs,Bs,ws,As,Ds,js]),_:1}),e(r,{span:"col"},{default:o(()=>[e(l,{dir:"vertical",full:"",class:"p-md text-inverse bg-success"},{default:o(()=>[e(l,{class:"font-h3 font-bold"},{default:o(()=>[qs]),_:1}),e(l,null,{default:o(()=>[Hs]),_:1})]),_:1}),Ns,Vs,Ss,Ps,Ws,$s,zs,Gs,Is,Ls,Ms]),_:1}),e(r,{span:"col"},{default:o(()=>[e(l,{dir:"vertical",full:"",class:"p-md text-inverse bg-info"},{default:o(()=>[e(l,{class:"font-h3 font-bold"},{default:o(()=>[Qs]),_:1}),e(l,null,{default:o(()=>[Ts]),_:1})]),_:1}),Xs,Js,Ks,Os,Rs,Us,Ys,Zs,st,tt,et]),_:1})]),_:1}),ot,at,e(l,{full:"",dir:"vertical",class:"m-b-md font-sm font-bold text-center text-inverse",style:{"background-color":"#000"}},{default:o(()=>[e(l,{full:"",class:"hover:bg-primary-dark-5 transition"},{default:o(()=>[ut,ct,lt,nt,rt,it,dt,pt,gt,ht]),_:1}),e(l,{full:"",class:"hover:bg-danger-dark-5 transition"},{default:o(()=>[_t,mt,bt,xt,vt,Ft,ft,kt,yt,Et]),_:1}),e(l,{full:"",class:"hover:bg-warning-dark-5 transition"},{default:o(()=>[Ct,Bt,wt,At,Dt,jt,qt,Ht,Nt,Vt]),_:1}),e(l,{full:"",class:"hover:bg-success-dark-5 transition"},{default:o(()=>[St,Pt,Wt,$t,zt,Gt,It,Lt,Mt,Qt]),_:1}),e(l,{full:"",class:"hover:bg-info-dark-5 transition"},{default:o(()=>[Tt,Xt,Jt,Kt,Ot,Rt,Ut,Yt,Zt,se]),_:1})]),_:1}),te,e(l,{gap:"var(--lg)",class:"m-b-xl"},{default:o(()=>[ee,oe]),_:1}),ae,e(h,{layout:"grid",count:"xl:count-5 md:count-3",gap:"var(--sm)"},{default:o(()=>[e(r,{span:"col"},{default:o(()=>[ue]),_:1}),e(r,{span:"col"},{default:o(()=>[ce]),_:1}),e(r,{span:"col"},{default:o(()=>[le]),_:1}),e(r,{span:"col"},{default:o(()=>[ne]),_:1}),e(r,{span:"col"},{default:o(()=>[re]),_:1}),e(r,{span:"col"},{default:o(()=>[ie]),_:1}),e(r,{span:"col"},{default:o(()=>[de]),_:1}),e(r,{span:"col"},{default:o(()=>[pe]),_:1}),e(r,{span:"col"},{default:o(()=>[ge]),_:1})]),_:1}),he,_e,e(p,{dark:""},{source:o(()=>[e(m)]),highlight:o(()=>[me]),_:1}),be,e(p,{dark:""},{source:o(()=>[e(F)]),highlight:o(()=>[xe]),_:1}),ve,Fe,e(p,{dark:""},{source:o(()=>[e(f)]),highlight:o(()=>[fe]),_:1}),ke]),e(k)],64)}var Ne=$(z,[["render",ye]]);export{Ne as default};