var t=Object.defineProperty,e=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(e,d,n)=>d in e?t(e,d,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[d]=n,o=(t,o)=>{for(var a in o||(o={}))d.call(o,a)&&r(t,a,o[a]);if(e)for(var a of e(o))n.call(o,a)&&r(t,a,o[a]);return t};import{W as a,o as l,c as h,g as s,v as i,s as c,Y as u,_ as f,aK as p,aL as b}from"./vue.6b0aa35b.js";import{_ as g}from"./index.da01531f.js";import"./hongluan-business.f987da2d.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.22da276b.js";const m={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:t,resolveComponent:e,withCtx:d,openBlock:n,createBlock:r}=b,a=t(" 测试长度问题测试长度问题测试长度问题测试长度问题测试长度问题 ");return o({render:function(t,o){const l=e("hb-text-overflow");return n(),r(l,{style:{display:"inline-block",width:"150px"}},{default:d((()=>[a])),_:1})}},{})}(),"hb-demo1":function(){const{createTextVNode:t,resolveComponent:e,withCtx:d,openBlock:n,createBlock:r}=b,a=t(" 测试长度问题测试长度问题测试长度问题测试长度问题测试长度问题 ");return o({render:function(t,o){const l=e("hb-text-overflow");return n(),r(l,{method:"length",length:10,effect:"dark"},{default:d((()=>[a])),_:1})}},{})}()}},v=s("h1",null,"TextOverflow 文本溢出",-1),w=s("p",null,"可以通过设置文本长度或者组件width使文本出现溢出效果。",-1),x=s("h2",{id:"gu-ding-kuan-du"},[s("a",{class:"header-anchor",href:"#gu-ding-kuan-du"}),f(" 固定宽度")],-1),y=s("div",null,[s("p",null,"基于宽度计算时需要设置width，否则不会有溢出效果")],-1),k=s("pre",null,[s("code",{class:"html"},' <template>\n  <hb-text-overflow style="display: inline-block; width: 150px;">\n    测试长度问题测试长度问题测试长度问题测试长度问题测试长度问题\n  </hb-text-overflow>\n</template>\n')],-1),j=s("h2",{id:"gu-ding-zi-fu-chuan-chang-du"},[s("a",{class:"header-anchor",href:"#gu-ding-zi-fu-chuan-chang-du"}),f(" 固定字符串长度")],-1),O=s("div",null,[s("p",null,"基于长度计算时需要设置length，否则不会有溢出效果")],-1),_=s("pre",null,[s("code",{class:"html"},' <template>\n  <hb-text-overflow method="length" :length="10" effect="dark">\n    测试长度问题测试长度问题测试长度问题测试长度问题测试长度问题\n  </hb-text-overflow>\n</template>\n')],-1),P=p('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>effect</td><td>tooltip样式主题</td><td>string</td><td>参考Popover文档</td><td>light</td></tr><tr><td>placement</td><td>tooltip弹出位置</td><td>string</td><td>参考Popover文档</td><td>top</td></tr><tr><td>method</td><td>溢出方法：宽度自动计算或者计算字符串长度</td><td>string</td><td>width / length</td><td>width</td></tr><tr><td>length</td><td>基于长度计算时，需要设置此值</td><td>number</td><td>—</td><td>-1</td></tr><tr><td>width</td><td>弹框宽度</td><td>number / string</td><td>—</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>文本内容</td></tr></tbody></table>',4);var B=g(m,[["render",function(t,e,d,n,r,o){const f=a("hb-demo0"),p=a("demo-block"),b=a("hb-demo1"),g=a("right-nav");return l(),h(u,null,[s("section",null,[v,w,x,i(p,{fs:""},{source:c((()=>[i(f)])),highlight:c((()=>[k])),default:c((()=>[y])),_:1}),j,i(p,{fs:""},{source:c((()=>[i(b)])),highlight:c((()=>[_])),default:c((()=>[O])),_:1}),P]),i(g)],64)}]]);export{B as default};