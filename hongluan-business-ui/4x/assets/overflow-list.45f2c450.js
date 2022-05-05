var z=Object.defineProperty;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var x=(o,e,t)=>e in o?z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))L.call(e,t)&&x(o,t,e[t]);if(v)for(var t of v(e))M.call(e,t)&&x(o,t,e[t]);return o};import{S as B,L as T,W as $,Q as n,a0 as i,U as a,a7 as j,a1 as y,aS as S,aY as k}from"./vue.aeed2366.js";import{_ as P}from"./index.27ce5e11.js";import"./hongluan-business.7de35cf9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.6c2b21a2.js";const Q={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:u,openBlock:C,createBlock:c}=k,h=o("\u64CD\u4F5C1"),l=o("\u64CD\u4F5C3"),r=o("\u64CD\u4F5C4"),d=o("\u64CD\u4F5C5");function _(F,D){const p=e("hl-button"),s=e("hl-switch"),m=e("hb-overflow-list");return C(),c(m,{"show-count":3},{default:t(()=>[u(p,{type:"link"},{default:t(()=>[h]),_:1}),u(s,{type:"primary"}),u(p,{type:"link"},{default:t(()=>[l]),_:1}),u(p,{type:"link"},{default:t(()=>[r]),_:1}),u(p,{type:"link"},{default:t(()=>[d]),_:1})]),_:1})}return f({render:_},{})}(),"hb-demo1":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:u,openBlock:C,createBlock:c}=k,h=o("\u64CD\u4F5C1"),l=o("\u64CD\u4F5C2"),r=o("\u64CD\u4F5C3"),d=o("\u64CD\u4F5C4"),_=o("\u64CD\u4F5C5");function b(D,p){const s=e("hl-button"),m=e("fill-layer"),E=e("hl-icon"),w=e("hb-overflow-list");return C(),c(w,{"dropdown-props":{trigger:"click"}},{more:t(()=>[u(E,null,{default:t(()=>[u(m)]),_:1})]),default:t(()=>[u(s,{type:"link"},{default:t(()=>[h]),_:1}),u(s,{type:"link"},{default:t(()=>[l]),_:1}),u(s,{type:"link"},{default:t(()=>[r]),_:1}),u(s,{type:"link"},{default:t(()=>[d]),_:1}),u(s,{type:"link"},{default:t(()=>[_]),_:1})]),_:1})}return f({render:b},{})}(),"hb-demo2":function(){const{createElementVNode:o,resolveComponent:e,openBlock:t,createBlock:u,createCommentVNode:C,withCtx:c,createVNode:h}=k,l=o("p",null,"\u7B2C\u4E00\u884C\u5185\u5BB9",-1),r=o("p",null,"\u7B2C\u4E8C\u884C\u5185\u5BB9",-1),d=o("p",null,"\u7B2C\u4E09\u884C\u5185\u5BB9",-1),_=o("p",null,"\u7B2C\u56DB\u884C\u5185\u5BB9",-1),b=o("p",null,"\u7B2C\u4E94\u884C\u5185\u5BB9",-1);function F(p,s){const m=e("two-chevrons-bottom"),E=e("two-chevrons-top"),w=e("hl-icon"),g=e("hb-overflow-list");return t(),u(g,{"show-count":3,"show-type":"expand"},{more:c(({hasMore:N,show:A,hide:V})=>[h(w,{class:"cursor-pointer m-l-lg"},{default:c(()=>[N?(t(),u(m,{key:0,onClick:A},null,8,["onClick"])):(t(),u(E,{key:1,onClick:V},null,8,["onClick"]))]),_:2},1024)]),default:c(()=>[l,r,d,_,b]),_:1})}return f({render:F},{})}()}},W=n("h1",null,"OverflowList \u6298\u53E0\u5217\u8868",-1),O=n("p",null,"\u901A\u5E38\u7528\u4E8E\u8868\u683C\u64CD\u4F5C\u5217\uFF0C\u5F53\u64CD\u4F5C\u9879\u6BD4\u8F83\u591A\u65F6\uFF0C\u53EF\u5229\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u64CD\u4F5C\u7684\u663E\u9690\u3002",-1),U=n("h2",{id:"ji-chu-yong-fa"},[n("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),y(" \u57FA\u7840\u7528\u6CD5")],-1),X=n("div",null,[n("p",null,"\u5177\u4F53\u7528\u6CD5\u8BF7\u770B\u4EE3\u7801\uFF0C\u7EC4\u4EF6\u5185\u4E00\u5B9A\u8981\u5D4C\u5165\u5185\u5BB9")],-1),Y=n("pre",null,[n("code",{class:"html"},` <template>
  <hb-overflow-list :show-count="3">
    <hl-button type="link">\u64CD\u4F5C1</hl-button>
    <hl-switch type="primary" />
    <hl-button type="link">\u64CD\u4F5C3</hl-button>
    <hl-button type="link">\u64CD\u4F5C4</hl-button>
    <hl-button type="link">\u64CD\u4F5C5</hl-button>
  </hb-overflow-list>
</template>
`)],-1),q=n("h2",{id:"zi-ding-yi-moretu-biao"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-moretu-biao"}),y(" \u81EA\u5B9A\u4E49More\u56FE\u6807")],-1),G=n("pre",null,[n("code",{class:"html"},` <template>
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
`)],-1),H=n("h2",{id:"zhan-kai-fang-shi"},[n("a",{class:"header-anchor",href:"#zhan-kai-fang-shi"}),y(" \u5C55\u5F00\u65B9\u5F0F")],-1),I=n("pre",null,[n("code",{class:"html"},` <template>
  <hb-overflow-list :show-count="3" show-type="expand">
    <p>\u7B2C\u4E00\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u4E8C\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u4E09\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u56DB\u884C\u5185\u5BB9</p>
    <p>\u7B2C\u4E94\u884C\u5185\u5BB9</p>
    <template #more="{ hasMore, show, hide }">
      <hl-icon class="cursor-pointer m-l-lg">
        <two-chevrons-bottom v-if="hasMore" @click="show" />
        <two-chevrons-top v-else @click="hide" />
      </hl-icon>
    </template>
  </hb-overflow-list>
</template>
`)],-1),J=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show-count</td><td>\u663E\u793A\u7684\u6570\u91CF</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-type</td><td>\u663E\u793A\u7684\u7C7B\u578B</td><td>tooltip / expand</td><td>\u2014</td><td>tooltip</td></tr><tr><td>dropdown-props</td><td>Dropdown\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53C2\u8003Dropdown\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u9ED8\u8BA4\u5185\u5BB9\u63D2\u69FD</td></tr><tr><td>more</td><td>\u81EA\u5B9Amore\u5143\u7D20\u7684\u5C55\u793A\uFF0C\u53C2\u6570\u4E3A<code>{ hasMore, show, hide }</code></td></tr></tbody></table>',4);function K(o,e,t,u,C,c){const h=B("hb-demo0"),l=B("demo-block"),r=B("hb-demo1"),d=B("hb-demo2"),_=B("right-nav");return T(),$(j,null,[n("section",null,[W,O,U,i(l,{fs:""},{source:a(()=>[i(h)]),highlight:a(()=>[Y]),default:a(()=>[X]),_:1}),q,i(l,{fs:""},{source:a(()=>[i(r)]),highlight:a(()=>[G]),_:1}),H,i(l,{fs:""},{source:a(()=>[i(d)]),highlight:a(()=>[I]),_:1}),J]),i(_)],64)}var nt=P(Q,[["render",K]]);export{nt as default};
