var k=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var T=(r,e,t)=>e in r?k(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,_=(r,e)=>{for(var t in e||(e={}))E.call(e,t)&&T(r,t,e[t]);if(y)for(var t of y(e))C.call(e,t)&&T(r,t,e[t]);return r};import{Y as g,L as F,W as N,Q as o,a2 as m,a0 as c,P as V,o as L,a3 as j,aG as B}from"./vue.ad0d5d1c.js";import{_ as R}from"./index.4f3bfee7.js";import"./hongluan.bb564fd4.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.3fa14f51.js";const O={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:r,resolveComponent:e,withCtx:t,createVNode:d,openBlock:p,createBlock:x}=B,l=r("sm"),a=r("md"),n=r("lg"),u=r("xl"),b=r("round");function h(v,w){const i=e("hl-group");return p(),x(i,{block:"",align:"items-center",gap:"var(--lg)"},{default:t(()=>[d(i,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-sm"},{default:t(()=>[l]),_:1}),d(i,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-md"},{default:t(()=>[a]),_:1}),d(i,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-lg"},{default:t(()=>[n]),_:1}),d(i,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-xl"},{default:t(()=>[u]),_:1}),d(i,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-round"},{default:t(()=>[b]),_:1})]),_:1})}return _({render:h},{})}(),"hl-demo1":function(){const{createTextVNode:r,resolveComponent:e,withCtx:t,createVNode:d,Fragment:p,openBlock:x,createElementBlock:l}=B,a=r("TL"),n=r("TR"),u=r("BL"),b=r("BR"),h=r("TOP"),f=r("BOTTOM"),v=r("LEFT"),w=r("RIGHT");function i(I,M){const s=e("hl-group");return x(),l(p,null,[d(s,{block:"",align:"items-center",gap:"var(--lg)"},{default:t(()=>[d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-tl-xl"},{default:t(()=>[a]),_:1}),d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-tr-xl"},{default:t(()=>[n]),_:1}),d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-bl-xl"},{default:t(()=>[u]),_:1}),d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-br-xl"},{default:t(()=>[b]),_:1})]),_:1}),d(s,{block:"",align:"items-center",gap:"var(--lg)",class:"m-t-lg"},{default:t(()=>[d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-t-xl"},{default:t(()=>[h]),_:1}),d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-b-xl"},{default:t(()=>[f]),_:1}),d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-l-xl"},{default:t(()=>[v]),_:1}),d(s,{align:"items-center items-middle",class:"w-xs h-xs bg-primary text-inverse radius-r-xl"},{default:t(()=>[w]),_:1})]),_:1})],64)}return _({render:i},{})}()}},P=L('<h1>Radius \u8FB9\u754C\u534A\u5F84</h1><p>\u7528\u4E8E\u63A7\u5236\u5143\u7D20\u8FB9\u754C\u534A\u5F84\u7684\u5DE5\u5177\u7C7B</p><div class="scrollable h-max-xl m-t-md"><table><thead><tr><th>Class</th><th>Properties</th></tr></thead><tbody><tr><td>radius-none</td><td>border-radius: 0</td></tr><tr><td>radius-round</td><td>border-radius: 9999px</td></tr><tr><td>radius-t-none</td><td>border-top-left-radius: 0; border-top-right-radius: 0</td></tr><tr><td>radius-b-none</td><td>border-bottom-left-radius: 0; border-bottom-right-radius: 0</td></tr><tr><td>radius-l-none</td><td>border-top-left-radius: 0; border-bottom-left-radius: 0</td></tr><tr><td>radius-r-none</td><td>border-top-right-radius: 0; border-bottom-right-radius: 0</td></tr><tr><td>radius-tl-none</td><td>border-top-left-radius: 0</td></tr><tr><td>radius-tr-none</td><td>border-top-right-radius: 0</td></tr><tr><td>radius-bl-none</td><td>border-bottom-left-radius: 0</td></tr><tr><td>radius-br-none</td><td>border-bottom-right-radius: 0</td></tr><tr><td>radius-t-sm</td><td>border-top-left-radius: 2px; border-top-right-radius: 2px</td></tr><tr><td>radius-b-sm</td><td>border-bottom-left-radius: 2px; border-bottom-right-radius: 2px</td></tr><tr><td>radius-l-sm</td><td>border-top-left-radius: 2px; border-bottom-left-radius: 2px</td></tr><tr><td>radius-r-sm</td><td>border-top-right-radius: 2px; border-bottom-right-radius: 2px</td></tr><tr><td>radius-tl-sm</td><td>border-top-left-radius: 2px</td></tr><tr><td>radius-tr-sm</td><td>border-top-right-radius: 2px</td></tr><tr><td>radius-bl-sm</td><td>border-bottom-left-radius: 2px</td></tr><tr><td>radius-br-sm</td><td>border-bottom-right-radius: 2px</td></tr><tr><td>radius-t-md</td><td>border-top-left-radius: 4px; border-top-right-radius: 4px</td></tr><tr><td>radius-b-md</td><td>border-bottom-left-radius: 4px; border-bottom-right-radius: 4px</td></tr><tr><td>radius-l-md</td><td>border-top-left-radius: 4px; border-bottom-left-radius: 4px</td></tr><tr><td>radius-r-md</td><td>border-top-right-radius: 4px; border-bottom-right-radius: 4px</td></tr><tr><td>radius-tl-md</td><td>border-top-left-radius: 4px</td></tr><tr><td>radius-tr-md</td><td>border-top-right-radius: 4px</td></tr><tr><td>radius-bl-md</td><td>border-bottom-left-radius: 4px</td></tr><tr><td>radius-br-md</td><td>border-bottom-right-radius: 4px</td></tr><tr><td>radius-t-lg</td><td>border-top-left-radius: 6px; border-top-right-radius: 6px</td></tr><tr><td>radius-b-lg</td><td>border-bottom-left-radius: 6px; border-bottom-right-radius: 6px</td></tr><tr><td>radius-l-lg</td><td>border-top-left-radius: 6px; border-bottom-left-radius: 6px</td></tr><tr><td>radius-r-lg</td><td>border-top-right-radius: 6px; border-bottom-right-radius: 6px</td></tr><tr><td>radius-tl-lg</td><td>border-top-left-radius: 6px</td></tr><tr><td>radius-tr-lg</td><td>border-top-right-radius: 6px</td></tr><tr><td>radius-bl-lg</td><td>border-bottom-left-radius: 6px</td></tr><tr><td>radius-br-lg</td><td>border-bottom-right-radius: 6px</td></tr><tr><td>radius-t-xl</td><td>border-top-left-radius: 8px; border-top-right-radius: 8px</td></tr><tr><td>radius-b-xl</td><td>border-bottom-left-radius: 8px; border-bottom-right-radius: 8px</td></tr><tr><td>radius-l-xl</td><td>border-top-left-radius: 8px; border-bottom-left-radius: 8px</td></tr><tr><td>radius-r-xl</td><td>border-top-right-radius: 8px; border-bottom-right-radius: 8px</td></tr><tr><td>radius-tl-xl</td><td>border-top-left-radius: 8px</td></tr><tr><td>radius-tr-xl</td><td>border-top-right-radius: 8px</td></tr><tr><td>radius-bl-xl</td><td>border-bottom-left-radius: 8px</td></tr><tr><td>radius-br-xl</td><td>border-bottom-right-radius: 8px</td></tr></tbody></table></div>',3),$=o("pre",null,[o("code",{class:"html"},`<hl-group block align="items-center" gap="var(--lg)">
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-sm">sm</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-md">md</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-lg">lg</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-xl">xl</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-round">round</hl-group>
</hl-group>
`)],-1),A=o("h2",{id:"yuan-jiao-xiu-shi"},[o("a",{class:"header-anchor",href:"#yuan-jiao-xiu-shi"}),j(" \u5706\u89D2\u4FEE\u9970")],-1),D=o("pre",null,[o("code",{class:"html"},`<hl-group block align="items-center" gap="var(--lg)">
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-tl-xl">TL</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-tr-xl">TR</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-bl-xl">BL</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-br-xl">BR</hl-group>
</hl-group>

<hl-group block align="items-center" gap="var(--lg)" class="m-t-lg">
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-t-xl">TOP</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-b-xl">BOTTOM</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-l-xl">LEFT</hl-group>
  <hl-group align="items-center items-middle" class="w-xs h-xs bg-primary text-inverse radius-r-xl">RIGHT</hl-group>
</hl-group>
`)],-1);function G(r,e,t,d,p,x){const l=g("hl-demo0"),a=g("demo-block"),n=g("hl-demo1"),u=g("right-nav");return F(),N(V,null,[o("section",null,[P,m(a,null,{source:c(()=>[m(l)]),highlight:c(()=>[$]),_:1}),A,m(a,null,{source:c(()=>[m(n)]),highlight:c(()=>[D]),_:1})]),m(u)],64)}var J=R(O,[["render",G]]);export{J as default};