var g=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var D=(e,o,t)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,F=(e,o)=>{for(var t in o||(o={}))A.call(o,t)&&D(e,t,o[t]);if(y)for(var t of y(o))N.call(o,t)&&D(e,t,o[t]);return e};import{S as C,L as V,W as L,Q as n,a0 as _,U as i,a7 as T,a1 as k,aS as $,aY as E}from"./vue.aeed2366.js";import{_ as j}from"./index.1ceb2445.js";import"./hongluan-business.7de35cf9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.6c2b21a2.js";const S={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:u,openBlock:a,createBlock:p}=E,c=e("\u64CD\u4F5C1"),r=e("\u64CD\u4F5C3"),h=e("\u64CD\u4F5C4"),s=e("\u64CD\u4F5C5");function m(B,w){const d=o("hl-button"),l=o("hl-switch"),b=o("hb-overflow-list");return a(),p(b,{"show-count":3},{default:t(()=>[u(d,{type:"link"},{default:t(()=>[c]),_:1}),u(l,{type:"primary"}),u(d,{type:"link"},{default:t(()=>[r]),_:1}),u(d,{type:"link"},{default:t(()=>[h]),_:1}),u(d,{type:"link"},{default:t(()=>[s]),_:1})]),_:1})}return F({render:m},{})}(),"hb-demo1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:u,openBlock:a,createBlock:p}=E,c=e("\u64CD\u4F5C1"),r=e("\u64CD\u4F5C2"),h=e("\u64CD\u4F5C3"),s=e("\u64CD\u4F5C4"),m=e("\u64CD\u4F5C5");function f(w,d){const l=o("hl-button"),b=o("fill-layer"),v=o("hl-icon"),x=o("hb-overflow-list");return a(),p(x,{"dropdown-props":{trigger:"click"}},{more:t(()=>[u(v,null,{default:t(()=>[u(b)]),_:1})]),default:t(()=>[u(l,{type:"link"},{default:t(()=>[c]),_:1}),u(l,{type:"link"},{default:t(()=>[r]),_:1}),u(l,{type:"link"},{default:t(()=>[h]),_:1}),u(l,{type:"link"},{default:t(()=>[s]),_:1}),u(l,{type:"link"},{default:t(()=>[m]),_:1})]),_:1})}return F({render:f},{})}()}},z=n("h1",null,"OverflowList \u6298\u53E0\u5217\u8868",-1),P=n("p",null,"\u901A\u5E38\u7528\u4E8E\u8868\u683C\u64CD\u4F5C\u5217\uFF0C\u5F53\u64CD\u4F5C\u9879\u6BD4\u8F83\u591A\u65F6\uFF0C\u53EF\u5229\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u64CD\u4F5C\u7684\u663E\u9690\u3002",-1),Q=n("h2",{id:"ji-chu-yong-fa"},[n("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),k(" \u57FA\u7840\u7528\u6CD5")],-1),W=n("div",null,[n("p",null,"\u5177\u4F53\u7528\u6CD5\u8BF7\u770B\u4EE3\u7801\uFF0C\u7EC4\u4EF6\u5185\u4E00\u5B9A\u8981\u5D4C\u5165\u5185\u5BB9")],-1),M=n("pre",null,[n("code",{class:"html"},` <template>
  <hb-overflow-list :show-count="3">
    <hl-button type="link">\u64CD\u4F5C1</hl-button>
    <hl-switch type="primary" />
    <hl-button type="link">\u64CD\u4F5C3</hl-button>
    <hl-button type="link">\u64CD\u4F5C4</hl-button>
    <hl-button type="link">\u64CD\u4F5C5</hl-button>
  </hb-overflow-list>
</template>
`)],-1),O=n("h2",{id:"zi-ding-yi-moretu-biao"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-moretu-biao"}),k(" \u81EA\u5B9A\u4E49More\u56FE\u6807")],-1),U=n("pre",null,[n("code",{class:"html"},` <template>
  <hb-overflow-list :dropdown-props="{ trigger: 'click' }">
    <hl-button type="link">\u64CD\u4F5C1</hl-button>
    <hl-button type="link">\u64CD\u4F5C2</hl-button>
    <hl-button type="link">\u64CD\u4F5C3</hl-button>
    <hl-button type="link">\u64CD\u4F5C4</hl-button>
    <hl-button type="link">\u64CD\u4F5C5</hl-button>
    <template #more>
      <hl-icon>
        <fill-layer />
      </hl-icon>
    </template>
  </hb-overflow-list>
</template>
`)],-1),X=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show-count</td><td>\u663E\u793A\u7684\u6570\u91CF</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>dropdown-props</td><td>Dropdown\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53C2\u8003Dropdown\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u9ED8\u8BA4\u5185\u5BB9\u63D2\u69FD</td></tr><tr><td>more</td><td>\u81EA\u5B9Amore\u5143\u7D20\u7684\u5C55\u793A</td></tr></tbody></table>',4);function Y(e,o,t,u,a,p){const c=C("hb-demo0"),r=C("demo-block"),h=C("hb-demo1"),s=C("right-nav");return V(),L(T,null,[n("section",null,[z,P,Q,_(r,{fs:""},{source:i(()=>[_(c)]),highlight:i(()=>[M]),default:i(()=>[W]),_:1}),O,_(r,{fs:""},{source:i(()=>[_(h)]),highlight:i(()=>[U]),_:1}),X]),_(s)],64)}var R=j(S,[["render",Y]]);export{R as default};
