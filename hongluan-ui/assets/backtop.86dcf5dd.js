var F=Object.defineProperty;var m=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var E=(o,t,e)=>t in o?F(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,p=(o,t)=>{for(var e in t||(t={}))f.call(t,e)&&E(o,e,t[e]);if(m)for(var e of m(t))A.call(t,e)&&E(o,e,t[e]);return o};import{P as h,L as x,W as k,Q as u,X as d,S as a,F as C,Y as B,o as v,aC as b}from"./vue.0e7200cd.js";import{_ as y}from"./index.9dfed6e6.js";import"./hongluan.ccf786f1.js";import"./highlight.e2508551.js";import"./hongluan-icons.9e674cb2.js";const w={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:o,openBlock:t,createBlock:e}=b;function c(l,r){const n=o("hl-backtop");return t(),e(n)}return p({render:c},{})}(),"hl-demo1":function(){const{createElementVNode:o,resolveComponent:t,withCtx:e,createVNode:c,createTextVNode:s,Fragment:l,openBlock:r,createElementBlock:n}=b,i=s(" Scroll down to see the bottom-right button. "),_=o("div",{style:{"{\n        height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .12)","text-align":"center","line-height":"40px",color:"#1989fa"}}," UP ",-1);function g(W,X){const D=t("hl-backtop");return r(),n(l,null,[i,c(D,{bottom:100},{default:e(()=>[_]),_:1})],64)}return p({render:g},{})}()}},j=u("h1",null,"Backtop \u56DE\u5230\u9876\u90E8",-1),N=u("p",null,"\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE",-1),V=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),B(" \u57FA\u7840\u7528\u6CD5")],-1),$=u("p",null,"\u6ED1\u52A8\u9875\u9762\u5373\u53EF\u770B\u5230\u53F3\u4E0B\u65B9\u7684\u6309\u94AE\u3002",-1),P=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-backtop />
</template>
`)],-1),S=u("h2",{id:"zi-ding-yi-xian-shi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-xian-shi-nei-rong"}),B(" \u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9")],-1),z=u("p",null,"\u663E\u793A\u533A\u57DF\u88AB\u56FA\u5B9A\u4E3A 40px * 40px \u7684\u533A\u57DF, \u5176\u4E2D\u7684\u5185\u5BB9\u53EF\u652F\u6301\u81EA\u5B9A\u4E49\u3002",-1),L=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),Q=v('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>target</td><td>\u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61</td><td>string</td><td></td><td></td></tr><tr><td>visibility-height</td><td>\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0</td><td>number</td><td></td><td>200</td></tr><tr><td>right</td><td>\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD</td><td>number</td><td></td><td>40</td></tr><tr><td>bottom</td><td>\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E, \u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB</td><td>number</td><td></td><td>40</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u70B9\u51FB\u4E8B\u4EF6</td></tr></tbody></table>',4);function T(o,t,e,c,s,l){const r=h("hl-demo0"),n=h("demo-block"),i=h("hl-demo1"),_=h("right-nav");return x(),k(C,null,[u("section",null,[j,N,V,$,d(n,{fs:""},{source:a(()=>[d(r)]),highlight:a(()=>[P]),_:1}),S,z,d(n,{fs:""},{source:a(()=>[d(i)]),highlight:a(()=>[L]),_:1}),Q]),d(_)],64)}var K=y(w,[["render",T]]);export{K as default};
