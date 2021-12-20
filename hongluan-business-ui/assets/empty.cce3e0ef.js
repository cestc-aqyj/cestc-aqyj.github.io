var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,a=(t,a)=>{for(var d in a||(a={}))n.call(a,d)&&o(t,d,a[d]);if(e)for(var d of e(a))r.call(a,d)&&o(t,d,a[d]);return t};import{W as d,o as l,c as h,g as s,v as i,s as c,Y as p,_ as u,aK as m,aL as b}from"./vue.6b0aa35b.js";import{_ as f}from"./index.da01531f.js";import"./hongluan-business.f987da2d.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.22da276b.js";const g={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=b;return a({render:function(r,o){const a=t("hb-empty");return e(),n(a,{description:"描述文字"})}},{})}(),"hb-demo1":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=b;return a({render:function(r,o){const a=t("hb-empty");return e(),n(a,{image:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"})}},{})}(),"hb-demo2":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=b;return a({render:function(r,o){const a=t("hb-empty");return e(),n(a,{"image-size":"20vw"})}},{})}(),"hb-demo3":function(){const{createTextVNode:t,resolveComponent:e,withCtx:n,createVNode:r,openBlock:o,createBlock:d}=b,l=t("返回首页");return a({render:function(t,a){const h=e("hl-button"),s=e("hl-group"),i=e("hb-empty");return o(),d(i,null,{default:n((()=>[r(s,{class:"m-t-lg"},{default:n((()=>[r(h,{type:"primary",icon:"arrowLeft","icon-position":"left"},{default:n((()=>[l])),_:1})])),_:1})])),_:1})}},{})}()}},y=s("h1",null,"Empty 空状态",-1),v=s("p",null,"空状态时的占位提示。",-1),j=s("h2",{id:"ji-chu-yong-fa"},[s("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),u(" 基础用法")],-1),w=s("pre",null,[s("code",{class:"html"},' <template>\n  <hb-empty description="描述文字" />\n</template>\n')],-1),k=s("h2",{id:"zi-ding-yi-tu-pian"},[s("a",{class:"header-anchor",href:"#zi-ding-yi-tu-pian"}),u(" 自定义图片")],-1),_=s("p",null,[u("通过设置 "),s("code",null,"image"),u(" 属性传入图片 URL。")],-1),B=s("pre",null,[s("code",{class:"html"},' <template>\n  <hb-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />\n</template>\n')],-1),z=s("h2",{id:"tu-pian-chi-cun"},[s("a",{class:"header-anchor",href:"#tu-pian-chi-cun"}),u(" 图片尺寸")],-1),O=s("p",null,[u("通过设置 "),s("code",null,"image-size"),u(" 属性来控制图片大小。")],-1),C=s("pre",null,[s("code",{class:"html"},' <template>\n  <hb-empty image-size="20vw" />\n</template>\n')],-1),x=s("h2",{id:"di-bu-nei-rong"},[s("a",{class:"header-anchor",href:"#di-bu-nei-rong"}),u(" 底部内容")],-1),L=s("p",null,"使用默认插槽可在底部插入内容。",-1),N=s("pre",null,[s("code",{class:"html"},' <template>\n  <hb-empty>\n    <hl-group class="m-t-lg">\n      <hl-button type="primary" icon="arrowLeft" icon-position="left">返回首页</hl-button>\n    </hl-group>\n  </hb-empty>\n</template>\n')],-1),P=m('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>image</td><td>图片地址</td><td>string</td><td>—</td><td>—</td></tr><tr><td>image-size</td><td>图片大小（宽度）</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>文本描述</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义底部内容</td></tr><tr><td>image</td><td>自定义图片</td></tr><tr><td>description</td><td>自定义描述文字</td></tr></tbody></table>',4);var E=f(g,[["render",function(t,e,n,r,o,a){const u=d("hb-demo0"),m=d("demo-block"),b=d("hb-demo1"),f=d("hb-demo2"),g=d("hb-demo3"),E=d("right-nav");return l(),h(p,null,[s("section",null,[y,v,j,i(m,{fs:""},{source:c((()=>[i(u)])),highlight:c((()=>[w])),_:1}),k,_,i(m,{fs:""},{source:c((()=>[i(b)])),highlight:c((()=>[B])),_:1}),z,O,i(m,{fs:""},{source:c((()=>[i(f)])),highlight:c((()=>[C])),_:1}),x,L,i(m,{fs:""},{source:c((()=>[i(g)])),highlight:c((()=>[N])),_:1}),P]),i(E)],64)}]]);export{E as default};