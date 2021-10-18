var A=Object.defineProperty;var m=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var E=(u,t,o)=>t in u?A(u,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[t]=o,p=(u,t)=>{for(var o in t||(t={}))f.call(t,o)&&E(u,o,t[o]);if(m)for(var o of m(t))F.call(t,o)&&E(u,o,t[o]);return u};import{H as h,o as x,C as k,D as e,v as d,M as s,_ as B,au as v,av as b}from"./vue.450bc1d0.js";import{_ as C}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const y={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:u,openBlock:t,createBlock:o}=b;function c(l,r){const n=u("hl-backtop");return t(),o(n)}return p({render:c},{})}(),"hl-demo1":function(){const{createElementVNode:u,resolveComponent:t,withCtx:o,createVNode:c,createTextVNode:a,Fragment:l,openBlock:r,createElementBlock:n}=b,i=a(" Scroll down to see the bottom-right button. "),_=u("div",{style:{"{\n        height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .12)","text-align":"center","line-height":"40px",color:"#1989fa"}}," UP ",-1);function g(q,G){const D=t("hl-backtop");return r(),n(l,null,[i,c(D,{bottom:100},{default:o(()=>[_]),_:1})],64)}return p({render:g},{})}()}},w={class:"doc-main-content"},j={class:"doc-content"},V=e("h1",null,"Backtop \u56DE\u5230\u9876\u90E8",-1),N=e("p",null,"\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE",-1),$=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),B(" \u57FA\u7840\u7528\u6CD5")],-1),S=e("p",null,"\u6ED1\u52A8\u9875\u9762\u5373\u53EF\u770B\u5230\u53F3\u4E0B\u65B9\u7684\u6309\u94AE\u3002",-1),z=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-backtop />
</template>
`)],-1),P=e("h2",{id:"zi-ding-yi-xian-shi-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-xian-shi-nei-rong"}),B(" \u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9")],-1),T=e("p",null,"\u663E\u793A\u533A\u57DF\u88AB\u56FA\u5B9A\u4E3A 40px * 40px \u7684\u533A\u57DF, \u5176\u4E2D\u7684\u5185\u5BB9\u53EF\u652F\u6301\u81EA\u5B9A\u4E49\u3002",-1),U=e("pre",null,[e("code",{class:"html"},` <template>
  Scroll down to see the bottom-right button.
  <hl-backtop :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </hl-backtop>
</template>
`)],-1),H=v('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>target</td><td>\u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61</td><td>string</td><td></td><td></td></tr><tr><td>visibility-height</td><td>\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0</td><td>number</td><td></td><td>200</td></tr><tr><td>right</td><td>\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD</td><td>number</td><td></td><td>40</td></tr><tr><td>bottom</td><td>\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB</td><td>number</td><td></td><td>40</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u70B9\u51FB\u4E8B\u4EF6</td></tr></tbody></table>',4);function M(u,t,o,c,a,l){const r=h("hl-demo0"),n=h("demo-block"),i=h("hl-demo1"),_=h("right-nav");return x(),k("section",w,[e("div",j,[V,N,$,S,d(n,{fs:""},{source:s(()=>[d(r)]),highlight:s(()=>[z]),_:1}),P,T,d(n,{fs:""},{source:s(()=>[d(i)]),highlight:s(()=>[U]),_:1}),H]),d(_)])}var R=C(y,[["render",M]]);export{R as default};
