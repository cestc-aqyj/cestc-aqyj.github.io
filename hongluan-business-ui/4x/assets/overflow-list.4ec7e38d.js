var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(o,e,t)=>e in o?z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,v=(o,e)=>{for(var t in e||(e={}))M.call(e,t)&&N(o,t,e[t]);if(x)for(var t of x(e))P.call(e,t)&&N(o,t,e[t]);return o};import{U as B,L as $,W as O,Q as n,a1 as p,X as a,a9 as X,a2 as g,aX as H,b1 as F}from"./vue.7ad5235a.js";import{H as A}from"./hongluan-icons.2e665c4f.js";import{_ as I}from"./index.9f142c89.js";import"./hongluan-business.c8efa785.js";import"./highlight.aba4bc0a.js";const Q={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:u,openBlock:m,createBlock:s}=F,r=o("\u64CD\u4F5C1"),c=o("\u64CD\u4F5C3"),h=o("\u64CD\u4F5C4"),_=o("\u64CD\u4F5C5");function d(E,k){const i=e("hl-button"),f=e("hl-switch"),b=e("hb-overflow-list");return m(),s(b,{"show-count":3},{default:t(()=>[u(i,{type:"link"},{default:t(()=>[r]),_:1}),u(f,{type:"primary"}),u(i,{type:"link"},{default:t(()=>[c]),_:1}),u(i,{type:"link"},{default:t(()=>[h]),_:1}),u(i,{type:"link"},{default:t(()=>[_]),_:1})]),_:1})}return v({render:d},{})}(),"hb-demo1":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:u,openBlock:m,createBlock:s}=F,r=o("\u64CD\u4F5C1"),c=o("\u64CD\u4F5C2"),h=o("\u64CD\u4F5C3"),_=o("\u64CD\u4F5C4"),d=o("\u64CD\u4F5C5");function w(f,b){const l=e("hl-button"),y=e("fill-layer"),C=e("hl-icon"),D=e("hb-overflow-list");return m(),s(D,{"dropdown-props":{trigger:"click"}},{more:t(()=>[u(C,null,{default:t(()=>[u(y)]),_:1})]),default:t(()=>[u(l,{type:"link"},{default:t(()=>[r]),_:1}),u(l,{type:"link"},{default:t(()=>[c]),_:1}),u(l,{type:"link"},{default:t(()=>[h]),_:1}),u(l,{type:"link"},{default:t(()=>[_]),_:1}),u(l,{type:"link"},{default:t(()=>[d]),_:1})]),_:1})}const{defineComponent:E}=F,{FillLayer:k}=A;return v({render:w},E({setup(f,{expose:b}){b();const l={FillLayer:k};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hb-demo2":function(){const{createElementVNode:o,resolveComponent:e,openBlock:t,createBlock:u,createCommentVNode:m,withCtx:s,createVNode:r}=F,c=o("p",null,"\u7B2C\u4E00\u884C\u5185\u5BB9",-1),h=o("p",null,"\u7B2C\u4E8C\u884C\u5185\u5BB9",-1),_=o("p",null,"\u7B2C\u4E09\u884C\u5185\u5BB9",-1),d=o("p",null,"\u7B2C\u56DB\u884C\u5185\u5BB9",-1),w=o("p",null,"\u7B2C\u4E94\u884C\u5185\u5BB9",-1);function E(l,y){const C=e("two-chevrons-bottom"),D=e("two-chevrons-top"),V=e("hl-icon"),T=e("hb-overflow-list");return t(),u(T,{"show-count":3,"show-type":"expand"},{more:s(({hasMore:L,show:j,hide:S})=>[r(V,{class:"cursor-pointer m-l-lg"},{default:s(()=>[L?(t(),u(C,{key:0,onClick:j},null,8,["onClick"])):(t(),u(D,{key:1,onClick:S},null,8,["onClick"]))]),_:2},1024)]),default:s(()=>[c,h,_,d,w]),_:1})}const{defineComponent:k}=F,{TwoChevronsBottom:i,TwoChevronsTop:f}=A;return v({render:E},k({setup(l,{expose:y}){y();const C={TwoChevronsBottom:i,TwoChevronsTop:f};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}))}()}},U=n("h1",null,"OverflowList \u6298\u53E0\u5217\u8868",-1),W=n("p",null,"\u901A\u5E38\u7528\u4E8E\u8868\u683C\u64CD\u4F5C\u5217\uFF0C\u5F53\u64CD\u4F5C\u9879\u6BD4\u8F83\u591A\u65F6\uFF0C\u53EF\u5229\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u64CD\u4F5C\u7684\u663E\u9690\u3002",-1),q=n("h2",{id:"ji-chu-yong-fa"},[n("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),g(" \u57FA\u7840\u7528\u6CD5")],-1),G=n("div",null,[n("p",null,"\u5177\u4F53\u7528\u6CD5\u8BF7\u770B\u4EE3\u7801\uFF0C\u7EC4\u4EF6\u5185\u4E00\u5B9A\u8981\u5D4C\u5165\u5185\u5BB9")],-1),J=n("pre",null,[n("code",{class:"html"},` <template>
  <hb-overflow-list :show-count="3">
    <hl-button type="link">\u64CD\u4F5C1</hl-button>
    <hl-switch type="primary" />
    <hl-button type="link">\u64CD\u4F5C3</hl-button>
    <hl-button type="link">\u64CD\u4F5C4</hl-button>
    <hl-button type="link">\u64CD\u4F5C5</hl-button>
  </hb-overflow-list>
</template>
`)],-1),K=n("h2",{id:"zi-ding-yi-moretu-biao"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-moretu-biao"}),g(" \u81EA\u5B9A\u4E49More\u56FE\u6807")],-1),R=n("pre",null,[n("code",{class:"html"},` <template>
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
<script lang="ts" setup>
import { FillLayer } from '@hongluan-ui/icons'

<\/script>
`)],-1),Y=n("h2",{id:"zhan-kai-fang-shi"},[n("a",{class:"header-anchor",href:"#zhan-kai-fang-shi"}),g(" \u5C55\u5F00\u65B9\u5F0F")],-1),Z=n("pre",null,[n("code",{class:"html"},` <template>
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
<script lang="ts" setup>
import { TwoChevronsBottom, TwoChevronsTop } from '@hongluan-ui/icons'

<\/script>
`)],-1),tt=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show-count</td><td>\u663E\u793A\u7684\u6570\u91CF</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-type</td><td>\u663E\u793A\u7684\u7C7B\u578B</td><td>tooltip / expand</td><td>\u2014</td><td>tooltip</td></tr><tr><td>dropdown-props</td><td>Dropdown\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53C2\u8003Dropdown\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u9ED8\u8BA4\u5185\u5BB9\u63D2\u69FD</td></tr><tr><td>more</td><td>\u81EA\u5B9Amore\u5143\u7D20\u7684\u5C55\u793A\uFF0C\u53C2\u6570\u4E3A<code>{ hasMore, show, hide }</code></td></tr></tbody></table>',4);function ot(o,e,t,u,m,s){const r=B("hb-demo0"),c=B("demo-block"),h=B("hb-demo1"),_=B("hb-demo2"),d=B("right-nav");return $(),O(X,null,[n("section",null,[U,W,q,p(c,{fs:""},{source:a(()=>[p(r)]),highlight:a(()=>[J]),default:a(()=>[G]),_:1}),K,p(c,{fs:""},{source:a(()=>[p(h)]),highlight:a(()=>[R]),_:1}),Y,p(c,{fs:""},{source:a(()=>[p(_)]),highlight:a(()=>[Z]),_:1}),tt]),p(d)],64)}var rt=I(Q,[["render",ot]]);export{rt as default};
