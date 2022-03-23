var C=Object.defineProperty;var F=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(n,e,o)=>e in n?C(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,l=(n,e)=>{for(var o in e||(e={}))A.call(e,o)&&f(n,o,e[o]);if(F)for(var o of F(e))x.call(e,o)&&f(n,o,e[o]);return n};import{a4 as a,Q as k,W as v,S as t,a7 as r,a5 as s,P as D,a8 as d,aS as w,aX as i}from"./vue.7ea6d5da.js";import{_ as z}from"./index.709ccb24.js";import"./hongluan-business.a5572174.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.daeaf28e.js";const N={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:n,openBlock:e,createBlock:o}=i;function c(m,h){const u=n("hb-empty");return e(),o(u,{description:"\u63CF\u8FF0\u6587\u5B57"})}return l({render:c},{})}(),"hb-demo1":function(){const{resolveComponent:n,openBlock:e,createBlock:o}=i;function c(m,h){const u=n("hb-empty");return e(),o(u,{image:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"})}return l({render:c},{})}(),"hb-demo2":function(){const{resolveComponent:n,openBlock:e,createBlock:o}=i;function c(m,h){const u=n("hb-empty");return e(),o(u,{"image-size":"20vw"})}return l({render:c},{})}(),"hb-demo3":function(){const{createTextVNode:n,resolveComponent:e,withCtx:o,createVNode:c,openBlock:p,createBlock:m}=i,h=n("\u8FD4\u56DE\u9996\u9875");function u(E,B){const _=e("hl-button"),g=e("hl-group"),y=e("hb-empty");return p(),m(y,null,{default:o(()=>[c(g,{class:"m-t-lg"},{default:o(()=>[c(_,{type:"primary",icon:"arrowLeft","icon-position":"left"},{default:o(()=>[h]),_:1})]),_:1})]),_:1})}return l({render:u},{})}()}},V=t("h1",null,"Empty \u7A7A\u72B6\u6001",-1),L=t("p",null,"\u7A7A\u72B6\u6001\u65F6\u7684\u5360\u4F4D\u63D0\u793A\u3002",-1),$=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),d(" \u57FA\u7840\u7528\u6CD5")],-1),P=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-empty description="\u63CF\u8FF0\u6587\u5B57" />
</template>
`)],-1),S=t("h2",{id:"zi-ding-yi-tu-pian"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-tu-pian"}),d(" \u81EA\u5B9A\u4E49\u56FE\u7247")],-1),j=t("p",null,[d("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"image"),d(" \u5C5E\u6027\u4F20\u5165\u56FE\u7247 URL\u3002")],-1),Q=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
</template>
`)],-1),T=t("h2",{id:"tu-pian-chi-cun"},[t("a",{class:"header-anchor",href:"#tu-pian-chi-cun"}),d(" \u56FE\u7247\u5C3A\u5BF8")],-1),W=t("p",null,[d("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"image-size"),d(" \u5C5E\u6027\u6765\u63A7\u5236\u56FE\u7247\u5927\u5C0F\u3002")],-1),X=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-empty image-size="20vw" />
</template>
`)],-1),R=t("h2",{id:"di-bu-nei-rong"},[t("a",{class:"header-anchor",href:"#di-bu-nei-rong"}),d(" \u5E95\u90E8\u5185\u5BB9")],-1),U=t("p",null,"\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u53EF\u5728\u5E95\u90E8\u63D2\u5165\u5185\u5BB9\u3002",-1),q=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-empty>
    <hl-group class="m-t-lg">
      <hl-button type="primary" icon="arrowLeft" icon-position="left">\u8FD4\u56DE\u9996\u9875</hl-button>
    </hl-group>
  </hb-empty>
</template>
`)],-1),G=w('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>image</td><td>\u56FE\u7247\u5730\u5740</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>image-size</td><td>\u56FE\u7247\u5927\u5C0F\uFF08\u5BBD\u5EA6\uFF09</td><td>number / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>description</td><td>\u6587\u672C\u63CF\u8FF0</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9</td></tr><tr><td>image</td><td>\u81EA\u5B9A\u4E49\u56FE\u7247</td></tr><tr><td>description</td><td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u5B57</td></tr></tbody></table>',4);function H(n,e,o,c,p,m){const h=a("hb-demo0"),u=a("demo-block"),b=a("hb-demo1"),E=a("hb-demo2"),B=a("hb-demo3"),_=a("right-nav");return k(),v(D,null,[t("section",null,[V,L,$,r(u,{fs:""},{source:s(()=>[r(h)]),highlight:s(()=>[P]),_:1}),S,j,r(u,{fs:""},{source:s(()=>[r(b)]),highlight:s(()=>[Q]),_:1}),T,W,r(u,{fs:""},{source:s(()=>[r(E)]),highlight:s(()=>[X]),_:1}),R,U,r(u,{fs:""},{source:s(()=>[r(B)]),highlight:s(()=>[q]),_:1}),G]),r(_)],64)}var Z=z(N,[["render",H]]);export{Z as default};