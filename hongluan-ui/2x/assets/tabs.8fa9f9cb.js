import{p as f,R as g,F as i,L as h,C as m,P as l,X as s,M as e,U as B,W as C,ad as D,S as x,V as _,a2 as T,Q as a,o as N}from"./vue.651ae949.js";import{v as F}from"./hongluan-icons.071444ab.js";const V=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),y=e("\u706B\u72D0\u6D4F\u89C8\u5668"),$=e("\u6B27\u670B\u6D4F\u89C8\u5668"),k=f({setup(p){const n=g("second"),c=(d,t)=>{console.log(d,t)};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),onTabClick:c},{default:l(()=>[s(o,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:l(()=>[V]),_:1}),s(o,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:l(()=>[y]),_:1}),s(o,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:l(()=>[$]),_:1})]),_:1},8,["modelValue"])}}});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const S=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),w=e("\u706B\u72D0\u6D4F\u89C8\u5668"),j=e("\u6B27\u670B\u6D4F\u89C8\u5668"),q=f({setup(p){const n=g("first"),c=(d,t)=>{console.log(d,t)};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),type:"button",onTabClick:c},{default:l(()=>[s(o,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:l(()=>[S]),_:1}),s(o,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:l(()=>[w]),_:1}),s(o,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:l(()=>[j]),_:1})]),_:1},8,["modelValue"])}}});var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const P=f({setup(p){const n=B({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),c=(d,t)=>{if(t==="add"){let o=++n.tabIndex+"";n.editableTabs.push({title:"New Tab",name:o,content:"New Tab content"}),n.editableTabsValue=o}if(t==="remove"){let o=n.editableTabs,b=n.editableTabsValue;b===d&&o.forEach((u,v)=>{if(u.name===d){let r=o[v+1]||o[v-1];r&&(b=r.name)}}),n.editableTabsValue=b,n.editableTabs=o.filter(u=>u.name!==d)}};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:_(n).editableTabsValue,"onUpdate:modelValue":t[0]||(t[0]=u=>_(n).editableTabsValue=u),editable:"",onEdit:c},{default:l(()=>[(h(!0),C(T,null,D(_(n).editableTabs,u=>(h(),m(o,{key:u.name,label:u.title,name:u.name},{default:l(()=>[e(x(u.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const O=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),U=e("\u706B\u72D0\u6D4F\u89C8\u5668"),I=e("\u6B27\u670B\u6D4F\u89C8\u5668"),A=f({setup(p){const n=g("second"),c=(d,t)=>{console.log(d,t)};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),gap:"var(--md)",onTabClick:c},{default:l(()=>[s(o,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:l(()=>[O]),_:1}),s(o,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:l(()=>[U]),_:1}),s(o,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:l(()=>[I]),_:1})]),_:1},8,["modelValue"])}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const R=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),Q=e("\u706B\u72D0\u6D4F\u89C8\u5668"),W=e("\u6B27\u670B\u6D4F\u89C8\u5668"),X=f({setup(p){const n=g("first"),c=(d,t)=>{console.log(d,t)};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),type:"line",onTabClick:c},{default:l(()=>[s(o,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:l(()=>[R]),_:1}),s(o,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:l(()=>[Q]),_:1}),s(o,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:l(()=>[W]),_:1})]),_:1},8,["modelValue"])}}});var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const H=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),J=e("\u706B\u72D0\u6D4F\u89C8\u5668"),K=e("\u6B27\u670B\u6D4F\u89C8\u5668"),Y=f({setup(p){const n=g("second"),c=(d,t)=>{console.log(d,t)};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"nav-height":"80px",onTabClick:c},{default:l(()=>[s(o,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:l(()=>[H]),_:1}),s(o,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:l(()=>[J]),_:1}),s(o,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:l(()=>[K]),_:1})]),_:1},8,["modelValue"])}}});var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const tt=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),et=e("\u706B\u72D0\u6D4F\u89C8\u5668"),at=e("\u6B27\u670B\u6D4F\u89C8\u5668"),nt=f({setup(p){const n=g("second"),c=(d,t)=>{console.log(d,t)};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"nav-padding":"var(--xxl)",onTabClick:c},{default:l(()=>[s(o,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:l(()=>[tt]),_:1}),s(o,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:l(()=>[et]),_:1}),s(o,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:l(()=>[at]),_:1})]),_:1},8,["modelValue"])}}});var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const ot=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),st=e("\u706B\u72D0\u6D4F\u89C8\u5668"),dt=e("\u6B27\u670B\u6D4F\u89C8\u5668"),ut=f({setup(p){const n=g("second"),c=(d,t)=>{console.log(d,t)};return(d,t)=>{const o=i("hl-tab-pane"),b=i("hl-tabs");return h(),m(b,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"pane-height":"calc(var(--xxl) * 6)",onTabClick:c},{default:l(()=>[s(o,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:l(()=>[ot]),_:1}),s(o,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:l(()=>[st]),_:1}),s(o,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:l(()=>[dt]),_:1})]),_:1},8,["modelValue"])}}});var bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ut});const it={style:{"margin-bottom":"20px"}},ct=e(" add tab "),_t=f({setup(p){const n=B({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),c=()=>{let t=++n.tabIndex+"";n.editableTabs.push({title:"New Tab",name:t,content:"New Tab content"}),n.editableTabsValue=t},d=t=>{let o=n.editableTabs,b=n.editableTabsValue;b===t&&o.forEach((u,v)=>{if(u.name===t){let r=o[v+1]||o[v-1];r&&(b=r.name)}}),n.editableTabsValue=b,n.editableTabs=o.filter(u=>u.name!==t)};return(t,o)=>{const b=i("hl-button"),u=i("hl-tab-pane"),v=i("hl-tabs");return h(),C(T,null,[a("div",it,[s(b,{size:"sm",onClick:o[0]||(o[0]=r=>c())},{default:l(()=>[ct]),_:1})]),s(v,{modelValue:_(n).editableTabsValue,"onUpdate:modelValue":o[1]||(o[1]=r=>_(n).editableTabsValue=r),type:"line",closable:"",onTabRemove:d},{default:l(()=>[(h(!0),C(T,null,D(_(n).editableTabs,r=>(h(),m(u,{key:r.name,label:r.title,name:r.name},{default:l(()=>[e(x(r.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])],64)}}});var ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t});const rt=e("top"),pt=e("right"),mt=e("bottom"),ft=e("left"),vt=e("\u8C37\u6B4C\u6D4F\u89C8\u5668"),gt=e("\u706B\u72D0\u6D4F\u89C8\u5668"),Ct=e("\u6B27\u670B\u6D4F\u89C8\u5668"),Tt=f({setup(p){const n=g("top");return(c,d)=>{const t=i("hl-radio"),o=i("hl-radio-group"),b=i("hl-tab-pane"),u=i("hl-tabs");return h(),C(T,null,[s(o,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=v=>n.value=v),style:{"margin-bottom":"30px"}},{default:l(()=>[s(t,{label:"top"},{default:l(()=>[rt]),_:1}),s(t,{label:"right"},{default:l(()=>[pt]),_:1}),s(t,{label:"bottom"},{default:l(()=>[mt]),_:1}),s(t,{label:"left"},{default:l(()=>[ft]),_:1})]),_:1},8,["modelValue"]),s(u,{"tab-position":n.value,type:"button",style:{height:"200px"}},{default:l(()=>[s(b,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668"},{default:l(()=>[vt]),_:1}),s(b,{label:"\u706B\u72D0\u6D4F\u89C8\u5668"},{default:l(()=>[gt]),_:1}),s(b,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:l(()=>[Ct]),_:1})]),_:1},8,["tab-position"])],64)}}});var Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tt});const Dt=e(" \u6211\u7684\u884C\u7A0B "),xt=e(" \u6211\u7684\u884C\u7A0B "),Nt=e("\u6D88\u606F\u4E2D\u5FC3"),Ft=e("\u6B27\u670B\u6D4F\u89C8\u5668"),Vt=f({setup(p){return(n,c)=>{const d=i("hl-icon"),t=i("hl-tab-pane"),o=i("hl-tabs");return h(),m(o,null,{default:l(()=>[s(t,null,{label:l(()=>[s(d,{class:"sm m-r-xs"},{default:l(()=>[s(_(F))]),_:1}),Dt]),default:l(()=>[xt]),_:1}),s(t,{label:"\u6D88\u606F\u4E2D\u5FC3"},{default:l(()=>[Nt]),_:1}),s(t,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:l(()=>[Ft]),_:1})]),_:1})}}});var yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vt});const $t=a("h1",null,"Tabs \u6807\u7B7E\u9875",-1),kt=a("p",null,"Tabs \u7528\u4E8E\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1),zt=a("div",null,[a("p",null,[e("Tabs \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u6807\u7B7E\u529F\u80FD\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),a("code",null,"value"),e(" \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u3002")])],-1),St=a("p",null,"tabs/basic",-1),wt=a("h2",{id:"line-yang-shi"},[a("a",{class:"header-anchor",href:"#line-yang-shi"}),e(" Line \u6837\u5F0F")],-1),jt=a("p",null,[e("\u53EA\u9700\u8981\u8BBE\u7F6E "),a("code",null,"type"),e(" \u5C5E\u6027\u4E3A "),a("code",null,"line"),e(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u7EBF\u6761\u98CE\u683C\u3002")],-1),qt=a("p",null,"tabs/line",-1),Mt=a("h2",{id:"button-yang-shi"},[a("a",{class:"header-anchor",href:"#button-yang-shi"}),e(" Button \u6837\u5F0F")],-1),Pt=a("p",null,[e("\u53EA\u9700\u8981\u8BBE\u7F6E "),a("code",null,"type"),e(" \u5C5E\u6027\u4E3A "),a("code",null,"button"),e(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u6309\u94AE\u98CE\u683C\u3002")],-1),Et=a("p",null,"tabs/button",-1),Ot=a("h2",{id:"paddingshu-xing"},[a("a",{class:"header-anchor",href:"#paddingshu-xing"}),e(" Padding\u5C5E\u6027")],-1),Ut=a("p",null,[a("code",null,"nav-padding"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u7684\u4E24\u4FA7\u586B\u5145\u5C3A\u5BF8\uFF0C\u5B83\u53EA\u63A5\u6536"),a("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),It=a("p",null,"tabs/padding",-1),At=a("h2",{id:"gapshu-xing"},[a("a",{class:"header-anchor",href:"#gapshu-xing"}),e(" Gap\u5C5E\u6027")],-1),Lt=a("p",null,[a("code",null,"gap"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5B83\u53EA\u63A5\u6536"),a("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Rt=a("p",null,"tabs/gap",-1),Qt=a("h2",{id:"biao-qian-gao-du-she-zhi"},[a("a",{class:"header-anchor",href:"#biao-qian-gao-du-she-zhi"}),e(" \u6807\u7B7E\u9AD8\u5EA6\u8BBE\u7F6E")],-1),Wt=a("p",null,[a("code",null,"nav-height"),e(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u6807\u7B7E\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),a("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Xt=a("p",null,"tabs/nav-height",-1),Gt=a("h2",{id:"nei-rong-qu-gao-du-she-zhi"},[a("a",{class:"header-anchor",href:"#nei-rong-qu-gao-du-she-zhi"}),e(" \u5185\u5BB9\u533A\u9AD8\u5EA6\u8BBE\u7F6E")],-1),Ht=a("p",null,[a("code",null,"pane-height"),e(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),a("code",null,"\u5B57\u7B26\u4E32"),e(" \u7C7B\u578B\u3002")],-1),Jt=a("p",null,"tabs/pane-height",-1),Kt=a("h2",{id:"wei-zhi"},[a("a",{class:"header-anchor",href:"#wei-zhi"}),e(" \u4F4D\u7F6E")],-1),Yt=a("p",null,[e("\u53EF\u4EE5\u901A\u8FC7 "),a("code",null,"tab-position"),e(" \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E")],-1),Zt=a("div",null,[a("p",null,[e("\u6807\u7B7E\u4E00\u5171\u6709\u56DB\u4E2A\u65B9\u5411\u7684\u8BBE\u7F6E "),a("code",null,'tabPosition="left|right|top|bottom"')])],-1),te=a("p",null,"tabs/position",-1),ee=a("h2",{id:"zi-ding-yi-biao-qian-ye"},[a("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian-ye"}),e(" \u81EA\u5B9A\u4E49\u6807\u7B7E\u9875")],-1),ae=a("p",null,[e("\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),a("code",null,"slot"),e(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875\u7684\u5185\u5BB9")],-1),ne=a("p",null,"tabs/slot",-1),le=a("h2",{id:"dong-tai-zeng-jian-biao-qian-ye"},[a("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-qian-ye"}),e(" \u52A8\u6001\u589E\u51CF\u6807\u7B7E\u9875")],-1),oe=a("p",null,"\u589E\u51CF\u6807\u7B7E\u9875\u6309\u94AE\u53EA\u80FD\u5728\u6807\u7B7E\u6837\u5F0F\u7684\u6807\u7B7E\u9875\u4E0B\u4F7F\u7528",-1),se=a("p",null,"tabs/editable",-1),de=a("h2",{id:"zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"},[a("a",{class:"header-anchor",href:"#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"}),e(" \u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875\u89E6\u53D1\u5668")],-1),ue=a("p",null,"tabs/pane",-1),be=N('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u6807\u7B7E\u7684 name</td><td>string / number</td><td>\u2014</td><td>\u7B2C\u4E00\u4E2A\u6807\u7B7E\u7684 name</td></tr><tr><td>type</td><td>\u98CE\u683C\u7C7B\u578B</td><td>string</td><td>line</td><td>\u663E\u793A\u4E3A\u7EBF\u6761\u6837\u5F0F</td></tr><tr><td>nav-height</td><td>\u6807\u7B7E\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>nav-padding</td><td>\u6807\u7B7E\u7684\u586B\u5145\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u6807\u7B7E\u7684\u95F4\u9694\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>pane-height</td><td>\u5185\u5BB9\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-pane</td><td>\u662F\u5426\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>addable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6807\u7B7E\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tab-position</td><td>\u6807\u7B7E\u6240\u5728\u4F4D\u7F6E</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u963B\u6B62\u5207\u6362\u3002</td><td>Function(activeName, oldActiveName)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-click</td><td>tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B</td></tr><tr><td>tab-change</td><td><code>activeName</code>\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(name: <code>TabPanelName</code>)</td></tr><tr><td>tab-remove</td><td>\u70B9\u51FB tab \u79FB\u9664\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name</td></tr><tr><td>tab-add</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>edit</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1</td><td>(targetName, action)</td></tr></tbody></table><h2 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes"></a> Tab Pane Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6807\u7B7E\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u4E0E\u6807\u7B7E\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u6807\u7B7E\u522B\u540D</td><td>string / number</td><td>\u2014</td><td>\u8BE5\u6807\u7B7E\u5728\u6807\u7B7E\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u6807\u7B7E\u5219\u4E3A&#39;1&#39;</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lazy</td><td>\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',6),_e={setup(p){const n={"../../../examples/tabs/basic.vue":z,"../../../examples/tabs/button.vue":M,"../../../examples/tabs/editable.vue":E,"../../../examples/tabs/gap.vue":L,"../../../examples/tabs/line.vue":G,"../../../examples/tabs/nav-height.vue":Z,"../../../examples/tabs/padding.vue":lt,"../../../examples/tabs/pane-height.vue":bt,"../../../examples/tabs/pane.vue":ht,"../../../examples/tabs/position.vue":Bt,"../../../examples/tabs/slot.vue":yt};return(c,d)=>{const t=i("demo-block"),o=i("right-nav");return h(),C(T,null,[a("section",null,[$t,kt,s(t,{fs:"",demos:_(n),"path-name":"tabs/basic","source-code":`<template>
  <hl-tabs v-model="activeName" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
<\/script>
`},{default:l(()=>[zt,St]),_:1},8,["demos"]),wt,jt,s(t,{fs:"",demos:_(n),"path-name":"tabs/line","source-code":`<template>
  <hl-tabs v-model="activeName" type="line" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},{default:l(()=>[qt]),_:1},8,["demos"]),Mt,Pt,s(t,{fs:"",demos:_(n),"path-name":"tabs/button","source-code":`<template>
  <hl-tabs v-model="activeName" type="button" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},{default:l(()=>[Et]),_:1},8,["demos"]),Ot,Ut,s(t,{fs:"",demos:_(n),"path-name":"tabs/padding","source-code":`<template>
  <hl-tabs v-model="activeName" nav-padding="var(--xxl)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},{default:l(()=>[It]),_:1},8,["demos"]),At,Lt,s(t,{fs:"",demos:_(n),"path-name":"tabs/gap","source-code":`<template>
  <hl-tabs v-model="activeName" gap="var(--md)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},{default:l(()=>[Rt]),_:1},8,["demos"]),Qt,Wt,s(t,{fs:"",demos:_(n),"path-name":"tabs/nav-height","source-code":`<template>
  <hl-tabs v-model="activeName" nav-height="80px" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},{default:l(()=>[Xt]),_:1},8,["demos"]),Gt,Ht,s(t,{fs:"",demos:_(n),"path-name":"tabs/pane-height","source-code":`<template>
  <hl-tabs v-model="activeName" pane-height="calc(var(--xxl) * 6)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},{default:l(()=>[Jt]),_:1},8,["demos"]),Kt,Yt,s(t,{fs:"",demos:_(n),"path-name":"tabs/position","source-code":`<template>
  <hl-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <hl-radio label="top">top</hl-radio>
    <hl-radio label="right">right</hl-radio>
    <hl-radio label="bottom">bottom</hl-radio>
    <hl-radio label="left">left</hl-radio>
  </hl-radio-group>

  <hl-tabs :tab-position="tabPosition" type="button" style="height: 200px;">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('top')
<\/script>
`},{default:l(()=>[Zt,te]),_:1},8,["demos"]),ee,ae,s(t,{fs:"",demos:_(n),"path-name":"tabs/slot","source-code":`<template>
  <hl-tabs>
    <hl-tab-pane>
      <template #label>
        <hl-icon class="sm m-r-xs"><two-application /></hl-icon>
        \u6211\u7684\u884C\u7A0B
      </template>
      \u6211\u7684\u884C\u7A0B
    </hl-tab-pane>
    <hl-tab-pane label="\u6D88\u606F\u4E2D\u5FC3">\u6D88\u606F\u4E2D\u5FC3</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>
<script lang="ts" setup>

import { TwoApplication } from '@hongluan-ui/icons'
<\/script>
`},{default:l(()=>[ne]),_:1},8,["demos"]),le,oe,s(t,{fs:"",demos:_(n),"path-name":"tabs/editable","source-code":`<template>
  <hl-tabs v-model="state.editableTabsValue" editable @edit="handleTabsEdit">
    <hl-tab-pane
      v-for="item in state.editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  editableTabsValue: '2',
  editableTabs: [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ],
  tabIndex: 2,
})
const handleTabsEdit = (targetName, action) => {
  if (action === 'add') {
    let newTabName = ++state.tabIndex + ''
    state.editableTabs.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    state.editableTabsValue = newTabName
  }
  if (action === 'remove') {
    let tabs = state.editableTabs
    let activeName = state.editableTabsValue
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    state.editableTabsValue = activeName
    state.editableTabs = tabs.filter(tab => tab.name !== targetName)
  }
}

<\/script>
`},{default:l(()=>[se]),_:1},8,["demos"]),de,s(t,{fs:"",demos:_(n),"path-name":"tabs/pane","source-code":`<template>
  <div style="margin-bottom: 20px;">
    <hl-button size="sm" @click="addTab()">
      add tab
    </hl-button>
  </div>
  <hl-tabs
    v-model="state.editableTabsValue"
    type="line"
    closable
    @tab-remove="removeTab"
  >
    <hl-tab-pane
      v-for="item in state.editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  editableTabsValue: '2',
  editableTabs: [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ],
  tabIndex: 2,
})

const addTab = () => {
  let newTabName = ++state.tabIndex + ''
  state.editableTabs.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  state.editableTabsValue = newTabName
}

const removeTab = targetName => {
  let tabs = state.editableTabs
  let activeName = state.editableTabsValue
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        let nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  state.editableTabsValue = activeName
  state.editableTabs = tabs.filter(tab => tab.name !== targetName)
}

<\/script>
`},{default:l(()=>[ue]),_:1},8,["demos"]),be]),s(o)],64)}}};export{_e as default};
