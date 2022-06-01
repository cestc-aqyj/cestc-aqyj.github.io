var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var N=(o,e,t)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,E=(o,e)=>{for(var t in e||(e={}))j.call(e,t)&&N(o,t,e[t]);if(g)for(var t of g(e))X.call(e,t)&&N(o,t,e[t]);return o};import{U as m,L as H,W as I,Q as n,a1 as _,X as p,a9 as P,aX as f,a2 as D,aR as Q}from"./vue.64e975b8.js";import{H as A}from"./hongluan-icons.0c35ed0d.js";import{_ as U}from"./index.ac2db5b0.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";const W={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:u,openBlock:C,createBlock:c}=f,r=o("\u64CD\u4F5C1"),l=o("\u64CD\u4F5C3"),h=o("\u64CD\u4F5C4"),i=o("\u64CD\u4F5C5");function d(b,F){const s=e("hl-button"),w=e("hl-switch"),k=e("hb-overflow-list");return C(),c(k,{"show-count":3},{default:t(()=>[u(s,{type:"link"},{default:t(()=>[r]),_:1}),u(w,{type:"primary"}),u(s,{type:"link"},{default:t(()=>[l]),_:1}),u(s,{type:"link"},{default:t(()=>[h]),_:1}),u(s,{type:"link"},{default:t(()=>[i]),_:1})]),_:1})}return E({render:d},{})}(),"hb-demo1":function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:u,openBlock:C,createBlock:c}=f,r=o("\u64CD\u4F5C1"),l=o("\u64CD\u4F5C2"),h=o("\u64CD\u4F5C3"),i=o("\u64CD\u4F5C4"),d=o("\u64CD\u4F5C5");function B(w,k){const a=e("hl-button"),x=e("fill-layer"),y=e("hl-icon"),v=e("hb-overflow-list");return C(),c(v,{"dropdown-props":{trigger:"click"}},{more:t(()=>[u(y,null,{default:t(()=>[u(x)]),_:1})]),default:t(()=>[u(a,{type:"link"},{default:t(()=>[r]),_:1}),u(a,{type:"link"},{default:t(()=>[l]),_:1}),u(a,{type:"link"},{default:t(()=>[h]),_:1}),u(a,{type:"link"},{default:t(()=>[i]),_:1}),u(a,{type:"link"},{default:t(()=>[d]),_:1})]),_:1})}const{defineComponent:b}=f,{FillLayer:F}=A,s=b({components:{FillLayer:F}});return E({render:B},s)}(),"hb-demo2":function(){const{createElementVNode:o,resolveComponent:e,openBlock:t,createBlock:u,createCommentVNode:C,withCtx:c,createVNode:r}=f,l=o("p",null,"\u7B2C\u4E00\u884C\u5185\u5BB9",-1),h=o("p",null,"\u7B2C\u4E8C\u884C\u5185\u5BB9",-1),i=o("p",null,"\u7B2C\u4E09\u884C\u5185\u5BB9",-1),d=o("p",null,"\u7B2C\u56DB\u884C\u5185\u5BB9",-1),B=o("p",null,"\u7B2C\u4E94\u884C\u5185\u5BB9",-1);function b(a,x){const y=e("two-chevrons-bottom"),v=e("two-chevrons-top"),V=e("hl-icon"),T=e("hb-overflow-list");return t(),u(T,{"show-count":3,"show-type":"expand"},{more:c(({hasMore:L,show:z,hide:M})=>[r(V,{class:"cursor-pointer m-l-lg"},{default:c(()=>[L?(t(),u(y,{key:0,onClick:z},null,8,["onClick"])):(t(),u(v,{key:1,onClick:M},null,8,["onClick"]))]),_:2},1024)]),default:c(()=>[l,h,i,d,B]),_:1})}const{defineComponent:F}=f,{TwoChevronsBottom:s,TwoChevronsTop:w}=A,k=F({components:{TwoChevronsBottom:s,TwoChevronsTop:w}});return E({render:b},k)}()}},O=n("h1",null,"OverflowList \u6298\u53E0\u5217\u8868",-1),R=n("p",null,"\u901A\u5E38\u7528\u4E8E\u8868\u683C\u64CD\u4F5C\u5217\uFF0C\u5F53\u64CD\u4F5C\u9879\u6BD4\u8F83\u591A\u65F6\uFF0C\u53EF\u5229\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u64CD\u4F5C\u7684\u663E\u9690\u3002",-1),S=n("h2",{id:"ji-chu-yong-fa"},[n("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),D(" \u57FA\u7840\u7528\u6CD5")],-1),q=n("div",null,[n("p",null,"\u5177\u4F53\u7528\u6CD5\u8BF7\u770B\u4EE3\u7801\uFF0C\u7EC4\u4EF6\u5185\u4E00\u5B9A\u8981\u5D4C\u5165\u5185\u5BB9")],-1),G=n("pre",null,[n("code",{class:"html"},` <template>
  <hb-overflow-list :show-count="3">
    <hl-button type="link">\u64CD\u4F5C1</hl-button>
    <hl-switch type="primary" />
    <hl-button type="link">\u64CD\u4F5C3</hl-button>
    <hl-button type="link">\u64CD\u4F5C4</hl-button>
    <hl-button type="link">\u64CD\u4F5C5</hl-button>
  </hb-overflow-list>
</template>
`)],-1),J=n("h2",{id:"zi-ding-yi-moretu-biao"},[n("a",{class:"header-anchor",href:"#zi-ding-yi-moretu-biao"}),D(" \u81EA\u5B9A\u4E49More\u56FE\u6807")],-1),K=n("pre",null,[n("code",{class:"html"},` <template>
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
<script>
import { defineComponent } from 'vue'
import { FillLayer } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillLayer },
})
<\/script>
`)],-1),Y=n("h2",{id:"zhan-kai-fang-shi"},[n("a",{class:"header-anchor",href:"#zhan-kai-fang-shi"}),D(" \u5C55\u5F00\u65B9\u5F0F")],-1),Z=n("pre",null,[n("code",{class:"html"},` <template>
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
<script>
import { defineComponent } from 'vue'
import { TwoChevronsBottom, TwoChevronsTop } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoChevronsBottom, TwoChevronsTop },
})
<\/script>
`)],-1),tt=Q('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show-count</td><td>\u663E\u793A\u7684\u6570\u91CF</td><td>number</td><td>\u2014</td><td>1</td></tr><tr><td>show-type</td><td>\u663E\u793A\u7684\u7C7B\u578B</td><td>tooltip / expand</td><td>\u2014</td><td>tooltip</td></tr><tr><td>dropdown-props</td><td>Dropdown\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53C2\u8003Dropdown\u7EC4\u4EF6</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u9ED8\u8BA4\u5185\u5BB9\u63D2\u69FD</td></tr><tr><td>more</td><td>\u81EA\u5B9Amore\u5143\u7D20\u7684\u5C55\u793A\uFF0C\u53C2\u6570\u4E3A<code>{ hasMore, show, hide }</code></td></tr></tbody></table>',4);function ot(o,e,t,u,C,c){const r=m("hb-demo0"),l=m("demo-block"),h=m("hb-demo1"),i=m("hb-demo2"),d=m("right-nav");return H(),I(P,null,[n("section",null,[O,R,S,_(l,{fs:""},{source:p(()=>[_(r)]),highlight:p(()=>[G]),default:p(()=>[q]),_:1}),J,_(l,{fs:""},{source:p(()=>[_(h)]),highlight:p(()=>[K]),_:1}),Y,_(l,{fs:""},{source:p(()=>[_(i)]),highlight:p(()=>[Z]),_:1}),tt]),_(d)],64)}var rt=U(W,[["render",ot]]);export{rt as default};
