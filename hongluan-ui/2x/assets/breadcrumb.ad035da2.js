var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(o,u,t)=>u in o?k(o,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[u]=t,E=(o,u)=>{for(var t in u||(u={}))T.call(u,t)&&y(o,t,u[t]);if(x)for(var t of x(u))I.call(u,t)&&y(o,t,u[t]);return o};import{H as p,L as H,W as $,Q as e,X as m,P as d,a4 as P,aJ as C,S as n,o as R}from"./vue.059774a0.js";import{H as S}from"./hongluan-icons.5b925e95.js";import{_ as z}from"./index.04f8f626.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";const L={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:u,withCtx:t,createVNode:r,createElementVNode:i,openBlock:_,createBlock:a}=C,c=o("\u9996\u9875"),l=i("a",{href:"/"},"\u6D3B\u52A8\u7BA1\u7406",-1),h=o("\u6D3B\u52A8\u5217\u8868"),B=o("\u6D3B\u52A8\u8BE6\u60C5");function F(A,D){const s=u("hl-breadcrumb-item"),g=u("hl-breadcrumb");return _(),a(g,{separator:"/"},{default:t(()=>[r(s,{to:{path:"/"}},{default:t(()=>[c]),_:1}),r(s,null,{default:t(()=>[l]),_:1}),r(s,null,{default:t(()=>[h]),_:1}),r(s,null,{default:t(()=>[B]),_:1})]),_:1})}return E({render:F},{})}(),"hl-demo1":function(){const{resolveComponent:o,createVNode:u,withCtx:t,createTextVNode:r,openBlock:i,createBlock:_}=C,a=r("\u9996\u9875"),c=r("\u6D3B\u52A8\u7BA1\u7406"),l=r(" \u6D3B\u52A8\u5217\u8868 "),h=r("\u6D3B\u52A8\u8BE6\u60C5");function B(s,g){const w=o("two-chevron-right"),v=o("hl-icon"),b=o("hl-breadcrumb-item"),N=o("two-airplay"),V=o("hl-breadcrumb");return i(),_(V,null,{icon:t(()=>[u(v,null,{default:t(()=>[u(w)]),_:1})]),default:t(()=>[u(b,{to:{path:"/"}},{default:t(()=>[a]),_:1}),u(b,null,{default:t(()=>[c]),_:1}),u(b,null,{icon:t(()=>[u(v,{size:"sm",type:"danger"},{default:t(()=>[u(N)]),_:1})]),default:t(()=>[l]),_:1}),u(b,null,{default:t(()=>[h]),_:1})]),_:1})}const{defineComponent:F}=C,{TwoAirplay:f,TwoChevronRight:A}=S,D=F({components:{TwoAirplay:f,TwoChevronRight:A}});return E({render:B},D)}()}},Q=e("h1",null,"Breadcrumb \u9762\u5305\u5C51",-1),U=e("p",null,"\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u5FEB\u901F\u8FD4\u56DE\u4E4B\u524D\u7684\u4EFB\u610F\u9875\u9762\u3002",-1),W=e("div",null,[e("p",null,[n("\u5728 Breadcrumb \u7EC4\u4EF6\u4E2D\u4F7F\u7528 BreadcrumbItem \u7EC4\u4EF6\u8868\u793A\u4ECE\u9996\u9875\u5F00\u59CB\u7684\u6BCF\u4E00\u7EA7\u3002Hongluan UI \u63D0\u4F9B\u4E86\u4E00\u4E2A"),e("code",null,"separator"),n("\u5C5E\u6027\uFF0C\u5728 Breadcrumb \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E\u5B83\u6765\u51B3\u5B9A\u5206\u9694\u7B26\uFF0C\u5B83\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4\u4E3A\u659C\u6760"),e("code",null,"/"),n("\u3002")])],-1),X=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-breadcrumb separator="/">
    <hl-breadcrumb-item :to="{ path: '/' }">\u9996\u9875</hl-breadcrumb-item>
    <hl-breadcrumb-item><a href="/">\u6D3B\u52A8\u7BA1\u7406</a></hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u5217\u8868</hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u8BE6\u60C5</hl-breadcrumb-item>
  </hl-breadcrumb>
</template>
`)],-1),j=e("h2",{id:"tu-biao-fen-ge-fu"},[e("a",{class:"header-anchor",href:"#tu-biao-fen-ge-fu"}),n(" \u56FE\u6807\u5206\u9694\u7B26")],-1),J=e("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),e("code",null,"icon"),n(" \u63D2\u69FD\uFF0C\u53EF\u4F7F\u7528\u76F8\u5E94\u7684 "),e("code",null,"icon\u56FE\u6807"),n(" \u4F5C\u4E3A\u5206\u9694\u7B26")],-1),q=e("div",null,[e("p",null,[n("\u6CE8\u610F\uFF0C\u4F7F\u7528"),e("code",null,"icon"),n(" \u63D2\u69FD\u5C06\u4F7F "),e("code",null,"separator"),n(" \u8BBE\u7F6E\u5931\u6548")])],-1),G=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-breadcrumb>
    <template #icon>
      <hl-icon>
        <two-chevron-right />
      </hl-icon>
    </template>
    <hl-breadcrumb-item :to="{ path: '/' }">\u9996\u9875</hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u7BA1\u7406</hl-breadcrumb-item>
    <hl-breadcrumb-item>
      \u6D3B\u52A8\u5217\u8868
      <template #icon>
        <hl-icon size="sm" type="danger">
          <two-airplay />
        </hl-icon>
      </template>
    </hl-breadcrumb-item>
    <hl-breadcrumb-item>\u6D3B\u52A8\u8BE6\u60C5</hl-breadcrumb-item>
  </hl-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoAirplay, TwoChevronRight } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoAirplay, TwoChevronRight },
})
<\/script>
`)],-1),K=R('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>separator</td><td>\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u659C\u6760&#39;/&#39;</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon</td></tr></tbody></table><h2 id="breadcrumb-item-attributes"><a class="header-anchor" href="#breadcrumb-item-attributes"></a> Breadcrumb Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>to</td><td>\u8DEF\u7531\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u540C <code>vue-router</code> \u7684 <code>to</code></td><td>string/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>replace</td><td>\u5728\u4F7F\u7528 to \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u65F6\uFF0C\u542F\u7528 replace \u5C06\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="breadcrumb-item-slots"><a class="header-anchor" href="#breadcrumb-item-slots"></a> Breadcrumb Item Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8EBreadcrumb icon\u63D2\u69FD</td></tr></tbody></table>',8);function M(o,u,t,r,i,_){const a=p("hl-demo0"),c=p("demo-block"),l=p("hl-demo1"),h=p("right-nav");return H(),$(P,null,[e("section",null,[Q,U,m(c,{fs:""},{source:d(()=>[m(a)]),highlight:d(()=>[X]),default:d(()=>[W]),_:1}),j,J,m(c,{fs:""},{source:d(()=>[m(l)]),highlight:d(()=>[G]),default:d(()=>[q]),_:1}),K]),m(h)],64)}var ot=z(L,[["render",M]]);export{ot as default};
