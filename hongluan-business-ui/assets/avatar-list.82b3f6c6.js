var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,a=(e,n,d)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[n]=d,c=(t,c)=>{for(var o in c||(c={}))n.call(c,o)&&a(t,o,c[o]);if(e)for(var o of e(c))d.call(c,o)&&a(t,o,c[o]);return t};import{W as o,o as i,c as r,i as s,v as b,s as l,aL as p,E as m,aK as h}from"./vue.b9c48aee.js";import{_ as f}from"./index.c59879b2.js";import"./hongluan-business.74ca0624.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.24045f27.js";const u={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=p;const{defineComponent:d,ref:a,reactive:o,nextTick:i}=p,r=d({setup:()=>({list:a([{url:"https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a"},{url:"https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a",title:"头像二"},{url:"https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4",title:"头像三"},{url:"https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1",title:"头像四"}])})});return c({render:function(d,a){const c=t("hb-avatar-list");return e(),n(c,{data:d.list},null,8,["data"])}},r)}(),"hl-demo1":function(){const{toDisplayString:t,createElementVNode:e,resolveComponent:n,withCtx:d,openBlock:a,createBlock:o}=p;const{defineComponent:i,ref:r,reactive:s,nextTick:b}=p,l=i({setup:()=>({props:r({url:"img",title:"name"}),list:r([{img:"https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a",name:"头像一"},{img:"https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a",name:"头像二"},{img:"https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4",name:"头像三"},{img:"https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1",name:"头像四"},{img:"https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a",name:"头像5"},{img:"https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a",name:"头像6"},{img:"https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4",name:"头像7"},{img:"https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1",name:"头像8"}])})});return c({render:function(c,i){const r=n("hb-avatar-list");return a(),o(r,{data:c.list,max:5,props:c.props},{tip:d((({item:n})=>[e("h5",null,"姓名："+t(n.name),1)])),_:1},8,["data","props"])}},l)}()}},g={class:"doc-main-content"},k={class:"doc-content"},v=s("h1",null,"AvatarList 头像列表",-1),w=s("p",null,"一组用户头像，常用在项目/团队成员列表。可以设置尺寸，也可以限制最多显示数量。",-1),y=s("h2",{id:"ji-chu-yong-fa"},[s("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),m(" 基础用法")],-1),j=s("div",null,[s("p",null,[m("data参数为对象数组，对象中需要有两个属性，默认为"),s("code",null,"url / title"),m("，其中url用来展示图片，鼠标滑上去时候展示title提示信息。没有title属性时，将不会展示提示信息。")])],-1),x=s("pre",null,[s("code",{class:"html"},"<template>\n  <hb-avatar-list :data=\"list\"></hb-avatar-list>\n</template>\n<script>\nimport { defineComponent, ref, reactive, nextTick } from 'vue'\nexport default defineComponent({\n  setup() {\n    return {\n      list: ref([\n        {\n          url: 'https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a',\n        },\n        {\n          url: 'https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a',\n          title: '头像二'\n        },\n        {\n          url: 'https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4',\n          title: '头像三'\n        },\n        {\n          url: 'https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1',\n          title: '头像四'\n        },\n      ])\n    }\n  }\n})\n<\/script>\n")],-1),C=s("h2",{id:"zui-da-zhi-she-zhi"},[s("a",{class:"header-anchor",href:"#zui-da-zhi-she-zhi"}),m(" 最大值设置")],-1),z=s("div",null,[s("p",null,"可以通过props属性配置url和title对应的属性。")],-1),O=s("pre",null,[s("code",{class:"html"},"<template>\n  <hb-avatar-list :data=\"list\" :max=\"5\" :props=\"props\">\n    <template #tip=\"{item}\">\n      <h5>姓名：{{ item.name }}</h5>  \n    </template>\n  </hb-avatar-list>\n</template>\n<script>\nimport { defineComponent, ref, reactive, nextTick } from 'vue'\nexport default defineComponent({\n  setup() {\n    return {\n      props: ref({\n        url: 'img',\n        title: 'name',\n      }),\n      list: ref([\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a',\n          name: '头像一'\n        },\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a',\n          name: '头像二'\n        },\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4',\n          name: '头像三'\n        },\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1',\n          name: '头像四'\n        },\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a',\n          name: '头像5'\n        },\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a',\n          name: '头像6'\n        },\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4',\n          name: '头像7'\n        },\n        {\n          img: 'https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1',\n          name: '头像8'\n        },\n      ])\n    }\n  }\n})\n<\/script>\n")],-1),S=h('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>数据列表</td><td>object[]</td><td>—</td><td>[]</td></tr><tr><td>indent</td><td>图片之间的重叠距离，可以是各种css单位</td><td>string</td><td>-</td><td>图片宽度一半的负值</td></tr><tr><td>popper-class</td><td>弹框类名</td><td>string</td><td>-</td><td>-</td></tr><tr><td>size</td><td>图片大小</td><td>string</td><td>参考基础组件中的Thumb组件参数</td><td>sm</td></tr><tr><td>fit</td><td>确定图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a></td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr><tr><td>max</td><td>显示的最大数量，超过此值将会在最后显示一个剩余值</td><td>number</td><td>—</td><td>-</td></tr><tr><td>max-bg-color</td><td>剩余值的背景颜色</td><td>string</td><td>—</td><td>black</td></tr><tr><td>props</td><td>data对象配置项</td><td>object</td><td>—</td><td>{url: &#39;url&#39;, title: &#39;title&#39;}</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>tip</td><td>滑动提示信息，参数为data中对应的对象: item</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>图片单击事件</td><td>data中对应的对象</td></tr></tbody></table>',6);var T=f(u,[["render",function(t,e,n,d,a,c){const p=o("hl-demo0"),m=o("demo-block"),h=o("hl-demo1"),f=o("right-nav");return i(),r("section",g,[s("div",k,[v,w,y,b(m,null,{source:l((()=>[b(p)])),highlight:l((()=>[x])),default:l((()=>[j])),_:1}),C,b(m,null,{source:l((()=>[b(h)])),highlight:l((()=>[O])),default:l((()=>[z])),_:1}),S]),b(f)])}]]);export{T as default};