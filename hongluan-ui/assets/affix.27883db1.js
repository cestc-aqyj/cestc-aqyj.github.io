var C=Object.defineProperty;var D=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var x=(o,u,e)=>u in o?C(o,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[u]=e,F=(o,u)=>{for(var e in u||(u={}))b.call(u,e)&&x(o,e,u[e]);if(D)for(var e of D(u))g.call(u,e)&&x(o,e,u[e]);return o};import{H as p,o as v,C as y,D as t,v as r,M as c,_ as n,au as k,av as E}from"./vue.450bc1d0.js";import{_ as V}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const N={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:u,withCtx:e,createVNode:s,openBlock:a,createBlock:l}=E,h=o("\u8DDD\u79BB\u9876\u90E8 120px");function d(f,B){const m=u("hl-button"),_=u("hl-affix");return a(),l(_,{offset:120},{default:e(()=>[s(m,{type:"primary"},{default:e(()=>[h]),_:1})]),_:1})}return F({render:d},{})}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:u,withCtx:e,createVNode:s,openBlock:a,createElementBlock:l}=E,h={class:"affix-container"},d=o("\u6307\u5B9A\u5BB9\u5668");function i(B,m){const _=u("hl-button"),A=u("hl-affix");return a(),l("div",h,[s(A,{target:".affix-container",offset:80},{default:e(()=>[s(_,{type:"primary"},{default:e(()=>[d]),_:1})]),_:1})])}return F({render:i},{})}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:u,withCtx:e,createVNode:s,openBlock:a,createBlock:l}=E,h=o("\u8DDD\u79BB\u5E95\u90E8 20px");function d(f,B){const m=u("hl-button"),_=u("hl-affix");return a(),l(_,{position:"bottom",offset:20},{default:e(()=>[s(m,{type:"primary"},{default:e(()=>[h]),_:1})]),_:1})}return F({render:d},{})}()}},w={class:"doc-main-content"},j={class:"doc-content"},T=t("h1",null,"Affix \u56FA\u9489",-1),z=t("p",null,"\u5C06\u9875\u9762\u5143\u7D20\u56FA\u5B9A\u5728\u7279\u5B9A\u53EF\u89C6\u533A\u57DF\u3002",-1),$=t("h2",{id:"ji-ben-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),n(" \u57FA\u672C\u7528\u6CD5")],-1),S=t("p",null,"\u56FA\u9489\u9ED8\u8BA4\u56FA\u5B9A\u5728\u9875\u9762\u9876\u90E8\u3002",-1),q=t("div",null,[t("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"offset"),n(" \u5C5E\u6027\u6765\u6539\u53D8\u5438\u9876\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0\u3002")])],-1),M=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-affix :offset="120">
    <hl-button type="primary">\u8DDD\u79BB\u9876\u90E8 120px</hl-button>
  </hl-affix>
</template>

`)],-1),H=t("h2",{id:"zhi-ding-rong-qi"},[t("a",{class:"header-anchor",href:"#zhi-ding-rong-qi"}),n(" \u6307\u5B9A\u5BB9\u5668")],-1),W=t("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"target"),n(" \u5C5E\u6027\uFF0C\u8BA9\u56FA\u9489\u59CB\u7EC8\u4FDD\u6301\u5728\u5BB9\u5668\u5185\uFF0C\u8D85\u8FC7\u8303\u56F4\u5219\u9690\u85CF\u3002")],-1),G=t("div",null,[t("p",null,"\u8BF7\u6CE8\u610F\u5BB9\u5668\u907F\u514D\u51FA\u73B0\u6EDA\u52A8\u6761\u3002")],-1),I=t("pre",null,[t("code",{class:"html"},` <template>
  <div class="affix-container">
    <hl-affix target=".affix-container" :offset="80">
      <hl-button type="primary">\u6307\u5B9A\u5BB9\u5668</hl-button>
    </hl-affix>
  </div>
</template>
`)],-1),J=t("h2",{id:"gu-ding-wei-zhi"},[t("a",{class:"header-anchor",href:"#gu-ding-wei-zhi"}),n(" \u56FA\u5B9A\u4F4D\u7F6E")],-1),K=t("p",null,[n("Affix \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E24\u4E2A\u56FA\u5B9A\u4F4D\u7F6E\uFF1A"),t("code",null,"top"),n(" \u548C "),t("code",null,"bottom"),n("\u3002")],-1),L=t("div",null,[t("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"position"),n(" \u5C5E\u6027\u6765\u6539\u53D8\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u503C\u4E3A "),t("code",null,"top"),n(" \u3002")])],-1),O=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-affix position="bottom" :offset="20">
    <hl-button type="primary">\u8DDD\u79BB\u5E95\u90E8 20px</hl-button>
  </hl-affix>
</template>
`)],-1),P=k('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>offset</td><td>\u504F\u79FB\u8DDD\u79BB</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>position</td><td>\u56FA\u9489\u4F4D\u7F6E</td><td>string</td><td>top / bottom</td><td>top</td></tr><tr><td>target</td><td>\u6307\u5B9A\u5BB9\u5668\uFF08CSS \u9009\u62E9\u5668\uFF09</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>z-index</td><td>\u56FA\u9489\u5C42\u7EA7</td><td>number</td><td>\u2014</td><td>100</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u56FA\u9489\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(value: boolean)</td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u6EDA\u52A8\u8DDD\u79BB\u548C\u56FA\u9489\u72B6\u6001</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>update</td><td>\u624B\u52A8\u66F4\u65B0\u56FA\u9489\u72B6\u6001</td><td>\u2014</td></tr></tbody></table>',6);function Q(o,u,e,s,a,l){const h=p("hl-demo0"),d=p("demo-block"),i=p("hl-demo1"),f=p("hl-demo2"),B=p("right-nav");return v(),y("section",w,[t("div",j,[T,z,$,S,r(d,{fs:""},{source:c(()=>[r(h)]),highlight:c(()=>[M]),default:c(()=>[q]),_:1}),H,W,r(d,{fs:""},{source:c(()=>[r(i)]),highlight:c(()=>[I]),default:c(()=>[G]),_:1}),J,K,r(d,{fs:""},{source:c(()=>[r(f)]),highlight:c(()=>[O]),default:c(()=>[L]),_:1}),P]),r(B)])}var ut=V(N,[["render",Q]]);export{ut as default};
