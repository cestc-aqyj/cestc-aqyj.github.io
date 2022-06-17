import{p as y,R as i,F as p,L as _,C,P as c,M as t,W as g,X as l,a2 as v,Q as e,S as E,ad as z,V as x,o as S}from"./vue.247780a9.js";const D=t("\u5907\u9009\u9879"),A=y({setup(f){const n=i(!0);return(s,r)=>{const d=p("hl-checkbox");return _(),C(d,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=u=>n.value=u)},{default:c(()=>[D]),_:1},8,["modelValue"])}}});var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const F=t("Default"),j=t("Primary"),O=t("Success"),G=t("Warning"),M=t("Danger"),B=t("Info"),T=y({setup(f){const n=i(!1),s=i(!1),r=i(!1),d=i(!1),u=i(!1),a=i(!1);return(b,o)=>{const m=p("hl-checkbox");return _(),g(v,null,[l(m,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=h=>n.value=h)},{default:c(()=>[F]),_:1},8,["modelValue"]),l(m,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=h=>s.value=h),type:"primary"},{default:c(()=>[j]),_:1},8,["modelValue"]),l(m,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=h=>r.value=h),type:"success"},{default:c(()=>[O]),_:1},8,["modelValue"]),l(m,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=h=>d.value=h),type:"warning"},{default:c(()=>[G]),_:1},8,["modelValue"]),l(m,{modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=h=>u.value=h),type:"danger"},{default:c(()=>[M]),_:1},8,["modelValue"]),l(m,{modelValue:a.value,"onUpdate:modelValue":o[5]||(o[5]=h=>a.value=h),type:"info"},{default:c(()=>[B]),_:1},8,["modelValue"])],64)}}});var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const P=e("p",{class:"m-b-md"},"\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),L={class:"bg-primary-light-5 text-primary p-sm m-t-md"},W=e("p",{class:"m-b-md"},"\u4F7F\u7528checkbox-group\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),q=e("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"},"\u9009\u9879\u4E00",-1),Q=e("div",{class:"p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary"},"\u9009\u9879\u4E8C",-1),R={class:"bg-primary-light-5 text-primary p-sm m-t-md"},X=e("p",{class:"m-b-md"},"\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F",-1),N={class:"bg-primary-light-5 text-primary p-sm m-t-md"},H=y({setup(f){const n=["\u9009\u9879\u4E00","\u9009\u9879\u4E8C"],s=i(["Safari"]),r=i(["\u9009\u9879\u4E00"]),d=i(n);return(u,a)=>{const b=p("hl-thumb"),o=p("hl-checkbox"),m=p("hl-group"),h=p("hl-col"),$=p("hl-checkbox-group"),V=p("hl-button"),U=p("hl-row");return _(),C(U,{gap:"var(--md)"},{default:c(()=>[l(h,{span:"col",class:"text-center"},{default:c(()=>[P,l(m,{style:{height:"48px"},gap:"var(--md)"},{default:c(()=>[l(o,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=k=>s.value=k),label:"Edge",custom:""},{default:c(()=>[l(b,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png"})]),_:1},8,["modelValue"]),l(o,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=k=>s.value=k),label:"Firefox",custom:""},{default:c(()=>[l(b,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png"})]),_:1},8,["modelValue"]),l(o,{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=k=>s.value=k),label:"Chrome",custom:""},{default:c(()=>[l(b,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png"})]),_:1},8,["modelValue"]),l(o,{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=k=>s.value=k),label:"Safari",custom:""},{default:c(()=>[l(b,{src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png"})]),_:1},8,["modelValue"])]),_:1}),e("p",L,E(s.value),1)]),_:1}),l(h,{span:"col",class:"text-center"},{default:c(()=>[W,l($,{modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=k=>r.value=k),custom:"",type:"primary",gap:"6px"},{default:c(()=>[l(o,{label:"\u9009\u9879\u4E00"},{default:c(()=>[q]),_:1}),l(o,{label:"\u9009\u9879\u4E8C"},{default:c(()=>[Q]),_:1})]),_:1},8,["modelValue"]),e("p",R,E(r.value),1)]),_:1}),l(h,{span:"col",class:"text-center"},{default:c(()=>[X,l($,{modelValue:r.value,"onUpdate:modelValue":a[5]||(a[5]=k=>r.value=k),style:{height:"48px"},custom:"",type:"primary",gap:"6px"},{default:c(()=>[(_(!0),g(v,null,z(d.value,k=>(_(),C(o,{key:k,label:k},{default:c(()=>[l(V,null,{default:c(()=>[t(E(k),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),e("p",N,E(r.value),1)]),_:1})]),_:1})}}});var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const K=t("\u5907\u9009\u98791"),Y=t("\u5907\u9009\u9879"),Z=y({setup(f){const n=i(!1),s=i(!1);return(r,d)=>{const u=p("hl-checkbox");return _(),g(v,null,[l(u,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=a=>n.value=a),disabled:""},{default:c(()=>[K]),_:1},8,["modelValue"]),l(u,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=a=>s.value=a),disabled:""},{default:c(()=>[Y]),_:1},8,["modelValue"])],64)}}});var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const te=t("Default"),le=t("Primary"),oe=t("Success"),ce=t("Warning"),de=t("Danger"),ne=t("Info"),ae=y({setup(f){const n=i(!1),s=i(!1),r=i(!1),d=i(!1),u=i(!1),a=i(!1);return(b,o)=>{const m=p("hl-checkbox");return _(),g(v,null,[l(m,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=h=>n.value=h),fill:""},{default:c(()=>[te]),_:1},8,["modelValue"]),l(m,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=h=>s.value=h),type:"primary",fill:""},{default:c(()=>[le]),_:1},8,["modelValue"]),l(m,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=h=>r.value=h),type:"success",fill:""},{default:c(()=>[oe]),_:1},8,["modelValue"]),l(m,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=h=>d.value=h),type:"warning",fill:""},{default:c(()=>[ce]),_:1},8,["modelValue"]),l(m,{modelValue:u.value,"onUpdate:modelValue":o[4]||(o[4]=h=>u.value=h),type:"danger",fill:""},{default:c(()=>[de]),_:1},8,["modelValue"]),l(m,{modelValue:a.value,"onUpdate:modelValue":o[5]||(o[5]=h=>a.value=h),type:"info",fill:""},{default:c(()=>[ne]),_:1},8,["modelValue"])],64)}}});var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});const ue=y({setup(f){const n=i(["\u9009\u4E2D\u4E14\u7981\u7528","\u590D\u9009\u6846 A"]);return(s,r)=>{const d=p("hl-checkbox"),u=p("hl-checkbox-group"),a=p("hl-col"),b=p("hl-row");return _(),C(b,null,{default:c(()=>[l(a,{span:"col-18"},{default:c(()=>[l(u,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=o=>n.value=o),dir:"horizontal",gap:"var(--md)",wrap:""},{default:c(()=>[l(d,{label:"\u590D\u9009\u6846 A"}),l(d,{label:"\u590D\u9009\u6846 B"}),l(d,{label:"\u590D\u9009\u6846 C"}),l(d,{label:"\u7981\u7528",disabled:""}),l(d,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1}),l(a,{span:"col-6"},{default:c(()=>[l(u,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=o=>n.value=o),dir:"vertical",gap:"var(--md)"},{default:c(()=>[l(d,{label:"\u590D\u9009\u6846 A"}),l(d,{label:"\u590D\u9009\u6846 B"}),l(d,{label:"\u590D\u9009\u6846 C"}),l(d,{label:"\u7981\u7528",disabled:""}),l(d,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue});const he=t("\u5168\u9009"),ie=e("hr",null,null,-1),me=y({setup(f){const n=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],s=i(!1),r=i(["\u4E0A\u6D77","\u5317\u4EAC"]),d=i(n),u=i(!0),a=o=>{r.value=o?n:[],u.value=!1},b=o=>{let m=o.length;s.value=m===d.value.length,u.value=m>0&&m<d.value.length};return(o,m)=>{const h=p("hl-checkbox"),$=p("hl-checkbox-group");return _(),g(v,null,[l(h,{modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=V=>s.value=V),indeterminate:u.value,onChange:a},{default:c(()=>[he]),_:1},8,["modelValue","indeterminate"]),ie,l($,{modelValue:r.value,"onUpdate:modelValue":m[1]||(m[1]=V=>r.value=V),dir:"vertical",gap:"var(--md)",onChange:b},{default:c(()=>[(_(!0),g(v,null,z(d.value,V=>(_(),C(h,{key:V,label:V},{default:c(()=>[t(E(V),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])],64)}}});var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});const be=y({setup(f){const n=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],s=i(["\u4E0A\u6D77","\u5317\u4EAC"]),r=i(n);return(d,u)=>{const a=p("hl-checkbox"),b=p("hl-checkbox-group");return _(),C(b,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=o=>s.value=o),min:1,max:2},{default:c(()=>[(_(!0),g(v,null,z(r.value,o=>(_(),C(a,{key:o,label:o},{default:c(()=>[t(E(o),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}}});var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:be});const ke=t("\u5907\u9009\u98791"),fe=t("\u5907\u9009\u9879"),xe=y({setup(f){const n=i(!1),s=i(!1);return(r,d)=>{const u=p("hl-checkbox");return _(),g(v,null,[l(u,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=a=>n.value=a),round:""},{default:c(()=>[ke]),_:1},8,["modelValue"]),l(u,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=a=>s.value=a),round:"",type:"primary"},{default:c(()=>[fe]),_:1},8,["modelValue"])],64)}}});var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});const ve=t("Default"),ye=t("Primary"),Ve=t("Success"),Ce=y({setup(f){const n=i(!1),s=i(!1),r=i(!1);return(d,u)=>{const a=p("hl-checkbox");return _(),g(v,null,[l(a,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=b=>n.value=b),size:"sm"},{default:c(()=>[ve]),_:1},8,["modelValue"]),l(a,{modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=b=>s.value=b),type:"primary"},{default:c(()=>[ye]),_:1},8,["modelValue"]),l(a,{modelValue:r.value,"onUpdate:modelValue":u[2]||(u[2]=b=>r.value=b),type:"success",size:"lg"},{default:c(()=>[Ve]),_:1},8,["modelValue"])],64)}}});var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce});const $e=e("h1",null,"Checkbox \u590D\u9009\u6846",-1),ze=e("p",null,"\u4F7F\u7528\u5B8C\u5168\u91CD\u6784\u7684 Checkbox \u7EC4\u4EF6\u6765\u521B\u5EFA\u4E00\u81F4\u7684\u8DE8\u6D4F\u89C8\u5668\u548C\u8DE8\u8BBE\u5907\u7684\u590D\u9009\u6846\u3002",-1),Se=e("div",null,[e("p",null,[t("\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u5B9A\u4E49"),e("code",null,"v-model"),t("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u5355\u4E00\u7684 Checkbox \u7EC4\u4EF6\u4E2D\uFF0C\u9ED8\u8BA4\u7ED1\u5B9A\u53D8\u91CF\u7684\u503C\u4F1A\u662F"),e("code",null,"boolean"),t("\uFF0C\u9009\u4E2D\u4E3A"),e("code",null,"true"),t("\u3002")])],-1),Ue=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),t(" \u5C3A\u5BF8\u4FEE\u9970")],-1),De=e("p",null,[t("Checkbox \u540C\u5176\u4ED6\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E00\u6837\u63D0\u4F9B\u4E86 "),e("code",null,"sm"),t(),e("code",null,"md"),t(),e("code",null,"lg"),t(" \u4E09\u79CD\u5C3A\u5BF8\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"md"),t(" \u5C3A\u5BF8")],-1),Ae=S('<h2 id="zhuang-tai-yan-se"><a class="header-anchor" href="#zhuang-tai-yan-se"></a> \u72B6\u6001\u989C\u8272</h2><p>Checkbox \u7684\u989C\u8272\u4E0E\u72B6\u6001\u989C\u8272\u4FDD\u6301\u4E00\u81F4\u3002\u53EF\u9009\u503C\u4E3A<code>primary</code>\u3001<code>success</code>\u3001<code>warning</code>\u3001<code>danger</code>\u3001<code>info</code>\u3002</p>',2),we=e("h2",{id:"fill-yan-se"},[e("a",{class:"header-anchor",href:"#fill-yan-se"}),t(" Fill \u989C\u8272")],-1),Fe=e("p",null,"\u4F7F\u7528 fill \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F Checkbox \u5448\u73B0\u4E3A\u586B\u5145\u6837\u5F0F\u3002",-1),je=e("h2",{id:"yuan-xing-fu-xuan-kuang"},[e("a",{class:"header-anchor",href:"#yuan-xing-fu-xuan-kuang"}),t(" \u5706\u5F62\u590D\u9009\u6846")],-1),Oe=e("p",null,[t("\u4E3A\u590D\u9009\u6846\u52A0\u4E0A "),e("code",null,"round"),t(" \u5C5E\u6027\uFF0C\u5373\u53EF\u5C06\u5B83\u4EEC\u53D8\u6210\u5706\u5F62\uFF0C\u5E76\u4E14\u62E5\u6709 "),e("code",null,"radio"),t(" \u76F8\u4F3C\u7684\u5916\u89C2\u3002")],-1),Ge=e("h2",{id:"jin-yong-zhuang-tai"},[e("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"}),t(" \u7981\u7528\u72B6\u6001")],-1),Me=e("p",null,[t("\u4E3A\u590D\u9009\u6846\u8BBE\u7F6E"),e("code",null,"disabled"),t("\u5C5E\u6027\u540E\u5448\u7070\u8272\u7981\u7528\uFF0C\u5373\u4FBF\u4F60\u4E3A\u5B83\u8BBE\u7F6E\u4E86\u72B6\u6001\u989C\u8272\u4E5F\u4F9D\u7136\u4E0D\u8D77\u4F5C\u7528\u3002")],-1),Be=e("h2",{id:"fu-xuan-kuang-zu"},[e("a",{class:"header-anchor",href:"#fu-xuan-kuang-zu"}),t(" \u590D\u9009\u6846\u7EC4")],-1),Te=e("p",null,[t("\u5355\u9009\u6846\u7EC4\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),t(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),t("\uFF0C\u9ED8\u8BA4\u4E3A 12px")],-1),Ie=e("p",null,[t("CheckboxGroup \u5BB9\u5668\u80FD\u5C06\u591A\u4E2A\u590D\u9009\u6846\u7BA1\u7406\u4E3A\u4E00\u7EC4\uFF0C\u53EA\u9700\u4E3A\u5B83\u7684"),e("code",null,"v-model"),t("\u7ED1\u5B9A"),e("code",null,"Array"),t("\u7C7B\u578B\u7684\u53D8\u91CF\u5373\u53EF\u3002")],-1),Pe=e("div",null,[e("p",null,[t("Checkbox \u7EC4\u4EF6\u7684"),e("code",null,"label"),t("\u5C5E\u6027\u662F\u5BF9\u5E94\u7684\u503C\uFF0C\u5F53\u590D\u9009\u6846\u65E0\u4ECB\u7ECD\u5185\u5BB9\u65F6\u4E5F\u53EF\u5145\u5F53\u5B83\u7684\u4ECB\u7ECD\u3002"),e("code",null,"label"),t("\u4E0E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u503C\u76F8\u5BF9\u5E94\uFF0C\u5982\u679C\u5B58\u5728\u6307\u5B9A\u7684\u503C\u5219\u4E3A\u9009\u4E2D\u72B6\u6001\uFF0C\u5426\u5219\u4E3A\u4E0D\u9009\u4E2D\u3002\u590D\u9009\u6846\u7EC4\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A "),e("code",null,"gap"),t(" \u6765\u81EA\u5B9A\u4E49\u5143\u7D20\u4E4B\u95F4\u7684\u8FB9\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="0"'),t("\uFF0C\u9ED8\u8BA4\u4E3A 12px")])],-1),Le=e("h2",{id:"bu-que-ding-zhuang-tai"},[e("a",{class:"header-anchor",href:"#bu-que-ding-zhuang-tai"}),t(" \u4E0D\u786E\u5B9A\u72B6\u6001")],-1),We=e("p",null,[e("code",null,"indeterminate"),t(" \u5C5E\u6027\u7528\u4EE5\u8868\u793A\u590D\u9009\u6846\u7684\u4E0D\u786E\u5B9A\u72B6\u6001\uFF0C\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u5168\u9009\u7684\u6548\u679C\u3002")],-1),qe=e("h2",{id:"ke-xuan-xiang-mu-shu-liang-de-xian-zhi"},[e("a",{class:"header-anchor",href:"#ke-xuan-xiang-mu-shu-liang-de-xian-zhi"}),t(" \u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236")],-1),Qe=e("p",null,[t("\u4F7F\u7528 "),e("code",null,"min"),t(" \u548C "),e("code",null,"max"),t(" \u5C5E\u6027\u80FD\u591F\u9650\u5236\u53EF\u4EE5\u88AB\u52FE\u9009\u7684\u9879\u76EE\u7684\u6570\u91CF\u3002")],-1),Re=e("h2",{id:"zi-ding-yi-yang-shi"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-yang-shi"}),t(" \u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),Xe=e("p",null,[t("\u53EA\u8981\u5728 Checkbox \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),e("code",null,"custom"),t("\u5C5E\u6027\u5373\u53EF\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"Boolean"),t("\uFF0C"),e("code",null,"true"),t("\u4E3A\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002")],-1),Ne=e("div",null,[e("p",null,[t("\u4F60\u53EF\u4EE5\u6839\u636E Checkbox \u7EC4\u4EF6\u63D0\u4F9B\u7684 "),e("code",null,"is-checked"),t(),e("code",null,"is-focus"),t(),e("code",null,"is-disabled"),t("\u7684\u6837\u5F0F\u540D\u79F0\u6765\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002")])],-1),He=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728<code>checkbox-group</code>\u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u7C7B\u578B\u4E3A<code>array</code>\u65F6\u6709\u6548\uFF09</td><td>string / number / boolean / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>true-label</td><td>\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>false-label</td><td>\u6CA1\u6709\u9009\u4E2D\u65F6\u7684\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>checked</td><td>\u5F53\u524D\u662F\u5426\u52FE\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>indeterminate</td><td>\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u4FEE\u9970</td><td>string</td><td>sm, md, lg</td><td>md</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A Label \u5C5E\u6027\u7684\u6587\u672C\u5185\u5BB9</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table><h2 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes"></a> Checkbox Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max</td><td>\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>custom</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u5706\u5F62\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u989C\u8272\u72B6\u6001</td><td>string</td><td>info, primary, warning, danger, success</td><td>primary</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>-</td><td>sm</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>label</td><td>\u5C4F\u5E55\u9605\u8BFB\u5668\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events"></a> Checkbox Group Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u66F4\u65B0\u540E\u7684\u503C</td></tr></tbody></table>',8),Ke={setup(f){const n={"../../../examples/checkbox/basic.vue":w,"../../../examples/checkbox/color.vue":I,"../../../examples/checkbox/custom.vue":J,"../../../examples/checkbox/disabled.vue":ee,"../../../examples/checkbox/fill.vue":se,"../../../examples/checkbox/group.vue":re,"../../../examples/checkbox/indeterminate.vue":pe,"../../../examples/checkbox/minmax.vue":_e,"../../../examples/checkbox/round.vue":ge,"../../../examples/checkbox/size.vue":Ee};return(s,r)=>{const d=p("demo-block"),u=p("right-nav");return _(),g(v,null,[e("section",null,[$e,ze,l(d,{fs:"",demos:x(n),"path-name":"checkbox/basic","source-code":`<template>
  <!-- \`checked\` \u4E3A true \u6216 false -->
  <hl-checkbox v-model="checked">\u5907\u9009\u9879</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref(true)
<\/script>
`},{default:c(()=>[Se]),_:1},8,["demos"]),Ue,De,l(d,{fs:"",demos:x(n),"path-name":"checkbox/size","source-code":`<template>
  <hl-checkbox v-model="checked1" size="sm">Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary">Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success" size="lg">Success</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)

<\/script>
`},null,8,["demos"]),Ae,l(d,{fs:"",demos:x(n),"path-name":"checkbox/color","source-code":`<template>
  <hl-checkbox v-model="checked1">Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary">Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success">Success</hl-checkbox>
  <hl-checkbox v-model="checked4" type="warning">Warning</hl-checkbox>
  <hl-checkbox v-model="checked5" type="danger">Danger</hl-checkbox>
  <hl-checkbox v-model="checked6" type="info">Info</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)

<\/script>
`},null,8,["demos"]),we,Fe,l(d,{fs:"",demos:x(n),"path-name":"checkbox/fill","source-code":`<template>
  <hl-checkbox v-model="checked1" fill>Default</hl-checkbox>
  <hl-checkbox v-model="checked2" type="primary" fill>Primary</hl-checkbox>
  <hl-checkbox v-model="checked3" type="success" fill>Success</hl-checkbox>
  <hl-checkbox v-model="checked4" type="warning" fill>Warning</hl-checkbox>
  <hl-checkbox v-model="checked5" type="danger" fill>Danger</hl-checkbox>
  <hl-checkbox v-model="checked6" type="info" fill>Info</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)

<\/script>
`},null,8,["demos"]),je,Oe,l(d,{fs:"",demos:x(n),"path-name":"checkbox/round","source-code":`<template>
  <hl-checkbox v-model="checked1" round>\u5907\u9009\u98791</hl-checkbox>
  <hl-checkbox v-model="checked2" round type="primary">\u5907\u9009\u9879</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)

<\/script>
`},null,8,["demos"]),Ge,Me,l(d,{fs:"",demos:x(n),"path-name":"checkbox/disabled","source-code":`<template>
  <hl-checkbox v-model="checked1" disabled>\u5907\u9009\u98791</hl-checkbox>
  <hl-checkbox v-model="checked2" disabled>\u5907\u9009\u9879</hl-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)

<\/script>
`},null,8,["demos"]),Be,Te,Ie,l(d,{fs:"",demos:x(n),"path-name":"checkbox/group","source-code":`<template>
  <hl-row>
    <hl-col span="col-18">
      <hl-checkbox-group v-model="checkList" dir="horizontal" gap="var(--md)" wrap>
        <hl-checkbox label="\u590D\u9009\u6846 A" />
        <hl-checkbox label="\u590D\u9009\u6846 B" />
        <hl-checkbox label="\u590D\u9009\u6846 C" />
        <hl-checkbox label="\u7981\u7528" disabled />
        <hl-checkbox label="\u9009\u4E2D\u4E14\u7981\u7528" disabled />
      </hl-checkbox-group>
    </hl-col>

    <hl-col span="col-6">
      <hl-checkbox-group v-model="checkList" dir="vertical" gap="var(--md)">
        <hl-checkbox label="\u590D\u9009\u6846 A" />
        <hl-checkbox label="\u590D\u9009\u6846 B" />
        <hl-checkbox label="\u590D\u9009\u6846 C" />
        <hl-checkbox label="\u7981\u7528" disabled />
        <hl-checkbox label="\u9009\u4E2D\u4E14\u7981\u7528" disabled />
      </hl-checkbox-group>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['\u9009\u4E2D\u4E14\u7981\u7528', '\u590D\u9009\u6846 A'])

<\/script>
`},{default:c(()=>[Pe]),_:1},8,["demos"]),Le,We,l(d,{fs:"",demos:x(n),"path-name":"checkbox/indeterminate","source-code":`<template>
  <hl-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">\u5168\u9009</hl-checkbox>
  <hr>
  <hl-checkbox-group v-model="checkedCities" dir="vertical" gap="var(--md)" @change="handleCheckedCitiesChange">
    <hl-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</hl-checkbox>
  </hl-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cityOptions = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733']

const checkAll = ref(false)
const checkedCities = ref(['\u4E0A\u6D77', '\u5317\u4EAC'])
const cities = ref(cityOptions)
const isIndeterminate = ref(true)

const handleCheckAllChange = val => {
  checkedCities.value = val ? cityOptions : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = value => {
  let checkedCount = value.length
  checkAll.value = checkedCount === cities.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length
}

<\/script>
`},null,8,["demos"]),qe,Qe,l(d,{fs:"",demos:x(n),"path-name":"checkbox/minmax","source-code":`<template>
  <hl-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <hl-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</hl-checkbox>
  </hl-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cityOptions = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733']

const checkedCities = ref(['\u4E0A\u6D77', '\u5317\u4EAC'])
const cities = ref(cityOptions)

<\/script>
`},null,8,["demos"]),Re,Xe,l(d,{fs:"",demos:x(n),"path-name":"checkbox/custom","source-code":`<template>
  <hl-row gap="var(--md)">
    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528group\u7EC4\u4EF6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-group style="height: 48px" gap="var(--md)">
        <hl-checkbox v-model="checkboxGroup1" label="Edge" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png" />
        </hl-checkbox>
        <hl-checkbox v-model="checkboxGroup1" label="Firefox" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png" />
        </hl-checkbox>
        <hl-checkbox v-model="checkboxGroup1" label="Chrome" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png" />
        </hl-checkbox>
        <hl-checkbox v-model="checkboxGroup1" label="Safari" custom>
          <hl-thumb src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png" />
        </hl-checkbox>
      </hl-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ checkboxGroup1 }}</p>
    </hl-col>
    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528checkbox-group\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-checkbox-group v-model="checkboxGroup2" custom type="primary" gap="6px">
        <hl-checkbox label="\u9009\u9879\u4E00">
          <div class="p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary">\u9009\u9879\u4E00</div>
        </hl-checkbox>
        <hl-checkbox label="\u9009\u9879\u4E8C">
          <div class="p-sm border radius-lg checked:bg-primary-light-5 checked:border-primary checked:text-primary">\u9009\u9879\u4E8C</div>
        </hl-checkbox>
      </hl-checkbox-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ checkboxGroup2 }}</p>
    </hl-col>

    <hl-col span="col" class="text-center">
      <p class="m-b-md">\u4F7F\u7528button\u7EC4\u4EF6\u6765\u5B9A\u4E49\u6837\u5F0F</p>
      <hl-checkbox-group v-model="checkboxGroup2" style="height: 48px" custom type="primary" gap="6px">
        <hl-checkbox v-for="city in cities" :key="city" :label="city">
          <hl-button>{{ city }}</hl-button>
        </hl-checkbox>
      </hl-checkbox-group>
      <p class="bg-primary-light-5 text-primary p-sm m-t-md">{{ checkboxGroup2 }}</p>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cityOptions = ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C']

const checkboxGroup1 = ref(['Safari'])
const checkboxGroup2 = ref(['\u9009\u9879\u4E00'])
const cities = ref(cityOptions)

<\/script>
`},{default:c(()=>[Ne]),_:1},8,["demos"]),He]),l(u)],64)}}};export{Ke as default};
