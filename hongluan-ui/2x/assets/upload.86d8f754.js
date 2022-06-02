import{p as j,R as f,F as d,L as h,C as v,P as e,X as n,V as r,M as s,Q as t,W as x,a2 as E,a as M,o as U}from"./vue.651ae949.js";import{o as C,B as y,p as $,Z as P,Y as k,c as A,_ as q}from"./hongluan-icons.071444ab.js";const z=s("\u9009\u53D6\u6587\u4EF6"),D=s(" \u4E0A\u4F20\u5230\u670D\u52A1\u5668 "),R=t("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1),S=j({setup(_){const a=f(null),c=f([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),p=()=>{a.value.submit()},l=(o,i)=>{console.log(o,i)},u=o=>{console.log(o)};return(o,i)=>{const m=d("hl-button"),g=d("hl-icon"),w=d("hl-upload");return h(),v(w,{ref_key:"upload",ref:a,action:"http://10.32.66.28/up/","on-preview":u,"on-remove":l,"file-list":c.value,"auto-upload":!1},{trigger:e(()=>[n(m,{type:"primary"},{default:e(()=>[z]),_:1})]),tip:e(()=>[R]),default:e(()=>[n(m,{type:"primary",class:"m-l-md",effect:"light",onClick:p},{icon:e(()=>[n(g,null,{default:e(()=>[n(r(C))]),_:1})]),default:e(()=>[D]),_:1})]),_:1},8,["file-list"])}}});var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const B=s(" \u70B9\u51FB\u4E0A\u4F20 "),V=t("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1),I=j({setup(_){const a=f([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),c=(o,i)=>{console.log(o,i)},p=o=>{console.log(o)},l=(o,i)=>{alert(`\u5F53\u524D\u9650\u5236\u9009\u62E9 3 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 ${o.length} \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 ${o.length+i.length} \u4E2A\u6587\u4EF6`)},u=o=>confirm(`\u786E\u5B9A\u79FB\u9664 ${o.name}\uFF1F`);return(o,i)=>{const m=d("hl-icon"),g=d("hl-button"),w=d("hl-upload");return h(),v(w,{style:{width:"400px"},action:"http://10.32.66.28/up/","on-preview":p,"on-remove":c,"before-remove":u,multiple:"",limit:5,"on-exceed":l,"file-list":a.value},{tip:e(()=>[V]),default:e(()=>[n(g,{type:"primary","icon-position":"left"},{icon:e(()=>[n(m,null,{default:e(()=>[n(r(y))]),_:1})]),default:e(()=>[B]),_:1})]),_:1},8,["file-list"])}}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const G=s(" \u70B9\u51FB\u4E0A\u4F20 "),J=t("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1),W=j({setup(_){const a=f([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),c=(p,l)=>{l.value=l.slice(-3)};return(p,l)=>{const u=d("hl-icon"),o=d("hl-button"),i=d("hl-upload");return h(),v(i,{action:"http://10.32.66.28/up/","on-change":c,"file-list":a.value},{tip:e(()=>[J]),default:e(()=>[n(o,{type:"primary","icon-position":"left"},{icon:e(()=>[n(u,null,{default:e(()=>[n(r(y))]),_:1})]),default:e(()=>[G]),_:1})]),_:1},8,["file-list"])}}});var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const Q=t("div",{class:"m-t-md"},[s("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),t("em",{class:"text-primary"},"\u70B9\u51FB\u4E0A\u4F20")],-1),X=j({setup(_){return(a,c)=>{const p=d("hl-icon"),l=d("hl-upload");return h(),v(l,{drag:"",action:"http://10.32.66.28/up/",multiple:"",full:""},{default:e(()=>[n(p,{border:1.2},{default:e(()=>[n(r(y))]),_:1},8,["border"]),Q]),_:1})}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const N=j({setup(_){const a=f(""),c=f(!1),p=(o,i)=>{console.log(o,i)},l=o=>{a.value=o.url,c.value=!0},u=f([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]);return(o,i)=>{const m=d("hl-icon"),g=d("hl-upload"),w=d("hl-thumb"),F=d("hl-dialog");return h(),x(E,null,[n(g,{action:"http://10.32.66.28/up/","list-type":"card","file-list":u.value,"on-preview":l,"on-remove":p},{default:e(()=>[n(m,null,{default:e(()=>[n(r(y))]),_:1})]),_:1},8,["file-list"]),n(F,{modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=b=>c.value=b),title:"\u67E5\u770B\u56FE\u7247",width:"600px"},{default:e(()=>[n(w,{src:a.value,class:"full"},null,8,["src"])]),_:1},8,["modelValue"])],64)}}});var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const K=s(" \u70B9\u51FB\u4E0A\u4F20 "),tt=t("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1),et=j({setup(_){const a=f([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),c=(l,u)=>{console.log(l,u)},p=l=>{console.log(l)};return(l,u)=>{const o=d("hl-icon"),i=d("hl-button"),m=d("hl-upload");return h(),v(m,{action:"http://10.32.66.28/up/","on-preview":p,"on-remove":c,"file-list":a.value,"list-type":"picture"},{tip:e(()=>[tt]),default:e(()=>[n(i,{type:"primary","icon-position":"left"},{icon:e(()=>[n(o,null,{default:e(()=>[n(r(y))]),_:1})]),default:e(()=>[K]),_:1})]),_:1},8,["file-list"])}}});var nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et});const lt=["src"],ot={class:"item-actions"},at=["onClick"],dt=["onClick"],it=["onClick"],st={style:{width:"300px",height:"300px"}},ut=["src"],ct=j({setup(_){const a=f(""),c=f(!1),p=f(!1),l=i=>{console.log(i)},u=i=>{a.value=i.url,c.value=!0},o=i=>{console.log(i)};return(i,m)=>{const g=d("hl-icon"),w=d("hl-upload"),F=d("hl-dialog");return h(),x(E,null,[n(w,{action:"#","list-type":"card","auto-upload":!1},{default:e(()=>[n(g,{size:"xl"},{default:e(()=>[n(r($))]),_:1})]),file:e(({file:b})=>[t("div",null,[t("img",{class:"item-thumb",src:b.url,alt:""},null,8,lt),t("span",ot,[t("span",{class:"item-preview",onClick:L=>u(b)},[n(g,null,{default:e(()=>[n(r(P))]),_:1})],8,at),p.value?M("",!0):(h(),x("span",{key:0,class:"item-delete",onClick:L=>o(b)},[n(g,null,{default:e(()=>[n(r(k))]),_:1})],8,dt)),p.value?M("",!0):(h(),x("span",{key:1,class:"item-delete",onClick:L=>l(b)},[n(g,null,{default:e(()=>[n(r(A))]),_:1})],8,it))])])]),_:1}),n(F,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=b=>c.value=b),"modal-class":"is-center"},{default:e(()=>[t("div",st,[t("img",{width:"100%",src:a.value,alt:""},null,8,ut)])]),_:1},8,["modelValue"])],64)}}});var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct});const pt=j({setup(_){const a=f(""),c=(l,u)=>{a.value=URL.createObjectURL(u.raw)},p=l=>{const u=l.type==="image/jpeg",o=l.size/1024/1024<2;return u||alert("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG \u683C\u5F0F!"),o||alert("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),u&&o};return(l,u)=>{const o=d("hl-thumb"),i=d("hl-icon"),m=d("hl-upload");return h(),v(m,{action:"http://10.32.66.28/up/","show-file-list":!1,"on-success":c,"before-upload":p},{default:e(()=>[a.value?(h(),v(o,{key:0,size:"xxxl",round:"",src:a.value,fit:"cover"},null,8,["src"])):(h(),v(o,{key:1,size:"xxxl",class:"bg-light",round:""},{default:e(()=>[n(i,{size:"xl"},{default:e(()=>[n(r(q))]),_:1})]),_:1}))]),_:1})}}});var mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const ht=t("h1",null,"Upload \u4E0A\u4F20",-1),ft=t("p",null,"\u901A\u8FC7\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u4E0A\u4F20\u6587\u4EF6",-1),gt=t("div",null,[t("p",null,[s("\u901A\u8FC7 slot \u4F60\u53EF\u4EE5\u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u4E0A\u4F20\u6309\u94AE\u7C7B\u578B\u548C\u6587\u5B57\u63D0\u793A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"limit"),s("\u548C"),t("code",null,"on-exceed"),s("\u6765\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u4E2A\u6570\u548C\u5B9A\u4E49\u8D85\u51FA\u9650\u5236\u65F6\u7684\u884C\u4E3A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"before-remove"),s("\u6765\u963B\u6B62\u6587\u4EF6\u79FB\u9664\u64CD\u4F5C\u3002")])],-1),_t=t("p",null,"upload/basic",-1),bt=t("h2",{id:"yong-hu-tou-xiang-shang-chuan"},[t("a",{class:"header-anchor",href:"#yong-hu-tou-xiang-shang-chuan"}),s(" \u7528\u6237\u5934\u50CF\u4E0A\u4F20")],-1),vt=t("p",null,[s("\u4F7F\u7528 "),t("code",null,"before-upload"),s(" \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002")],-1),jt=t("p",null,"upload/thumb",-1),wt=t("h2",{id:"zhao-pian-qiang"},[t("a",{class:"header-anchor",href:"#zhao-pian-qiang"}),s(" \u7167\u7247\u5899")],-1),xt=t("p",null,[s("\u4F7F\u7528 "),t("code",null,"list-type"),s(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6587\u4EF6\u5217\u8868\u7684\u6837\u5F0F\u3002")],-1),yt=t("p",null,"upload/list-type",-1),Ft=t("h2",{id:"wen-jian-suo-lue-tu"},[t("a",{class:"header-anchor",href:"#wen-jian-suo-lue-tu"}),s(" \u6587\u4EF6\u7F29\u7565\u56FE")],-1),Et=t("p",null,[s("\u4F7F\u7528 "),t("code",null,"slot"),s(" \u53BB\u8BBE\u7F6E\u7F29\u7565\u56FE\u6A21\u7248\u3002")],-1),Lt=t("p",null,"upload/slot",-1),Mt=t("h2",{id:"tu-pian-lie-biao-suo-lue-tu"},[t("a",{class:"header-anchor",href:"#tu-pian-lie-biao-suo-lue-tu"}),s(" \u56FE\u7247\u5217\u8868\u7F29\u7565\u56FE")],-1),Ut=t("p",null,"upload/picture",-1),Ct=t("h2",{id:"shang-chuan-wen-jian-lie-biao-kong-zhi"},[t("a",{class:"header-anchor",href:"#shang-chuan-wen-jian-lie-biao-kong-zhi"}),s(" \u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u63A7\u5236")],-1),$t=t("p",null,[s("\u901A\u8FC7 "),t("code",null,"on-change"),s(" \u94A9\u5B50\u51FD\u6570\u6765\u5BF9\u5217\u8868\u8FDB\u884C\u63A7\u5236")],-1),Pt=t("p",null,"upload/change",-1),kt=t("h2",{id:"tuo-zhuai-shang-chuan"},[t("a",{class:"header-anchor",href:"#tuo-zhuai-shang-chuan"}),s(" \u62D6\u62FD\u4E0A\u4F20")],-1),At=t("p",null,"upload/drag",-1),qt=t("h2",{id:"shou-dong-shang-chuan"},[t("a",{class:"header-anchor",href:"#shou-dong-shang-chuan"}),s(" \u624B\u52A8\u4E0A\u4F20")],-1),zt=t("p",null,"upload/auto-upload",-1),Dt=U('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>action</td><td>\u5FC5\u9009\u53C2\u6570\uFF0C\u4E0A\u4F20\u7684\u5730\u5740</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>method</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u65B9\u6CD5\u5740</td><td>string</td><td>post / put</td><td>post</td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>data</td><td>\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D</td><td>string</td><td>\u2014</td><td>file</td></tr><tr><td>with-credentials</td><td>\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-file-list</td><td>\u662F\u5426\u663E\u793A\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>drag</td><td>\u662F\u5426\u542F\u7528\u62D6\u62FD\u4E0A\u4F20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">\u6587\u4EF6\u7C7B\u578B</a>\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-preview</td><td>\u70B9\u51FB\u6587\u4EF6\u5217\u8868\u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>function(file)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-remove</td><td>\u6587\u4EF6\u5217\u8868\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-success</td><td>\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u94A9\u5B50</td><td>function(response, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-error</td><td>\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u94A9\u5B50</td><td>function(err, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-progress</td><td>\u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u94A9\u5B50</td><td>function(event, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-change</td><td>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u65F6\u7684\u94A9\u5B50\uFF0C\u6DFB\u52A0\u6587\u4EF6\u3001\u4E0A\u4F20\u6210\u529F\u548C\u4E0A\u4F20\u5931\u8D25\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>before-upload</td><td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u4E0A\u4F20\u3002</td><td>function(file)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>before-remove</td><td>\u5220\u9664\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5217\u8868\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5220\u9664\u3002</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>list-type</td><td>\u6587\u4EF6\u5217\u8868\u7684\u7C7B\u578B</td><td>string</td><td>text/picture/card</td><td>text</td></tr><tr><td>auto-upload</td><td>\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>file-list</td><td>\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868, \u4F8B\u5982: [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>http-request</td><td>\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0A\u4F20\u7684\u5B9E\u73B0</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>limit</td><td>\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-exceed</td><td>\u6587\u4EF6\u8D85\u51FA\u4E2A\u6570\u9650\u5236\u65F6\u7684\u94A9\u5B50</td><td>function(files, fileList)</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u4E0A\u4F20\u5217\u8868\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u6587\u4EF6\u9009\u62E9\u6846\u7684\u5185\u5BB9</td></tr><tr><td>tip</td><td>\u63D0\u793A\u8BF4\u660E\u6587\u5B57</td></tr><tr><td>file</td><td>\u6587\u4EF6\u5217\u8868\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { file }</td></tr><tr><td>file-icon</td><td>\u6587\u4EF6\u5217\u8868\u81EA\u5B9A\u4E49\u6587\u4EF6Icon\uFF0C\u53C2\u6570\u4E3A { file }\u3002file\u548Cfile-icon\u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0Cfile\u4F18\u5148\u7EA7\u66F4\u9AD8</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearFiles</td><td>\u6E05\u7A7A\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301\u5728 before-upload \u4E2D\u8C03\u7528\uFF09</td><td>\u2014</td></tr><tr><td>abort</td><td>\u53D6\u6D88\u4E0A\u4F20\u8BF7\u6C42</td><td>\uFF08 file: fileList \u4E2D\u7684 file \u5BF9\u8C61 \uFF09</td></tr><tr><td>submit</td><td>\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u5217\u8868</td><td>\u2014</td></tr><tr><td>handleStart</td><td>\u624B\u5DE5\u9009\u62E9\u6587\u4EF6</td><td>( file: files \u4E2D\u7684 file \u5BF9\u8C61)</td></tr><tr><td>handleRemove</td><td>\u624B\u5DE5\u5220\u9664\u6587\u4EF6</td><td>( file: fileList \u4E2D\u7684 file \u5BF9\u8C61 )</td></tr></tbody></table>',6),Tt={setup(_){const a={"../../../examples/upload/auto-upload.vue":T,"../../../examples/upload/basic.vue":O,"../../../examples/upload/change.vue":Z,"../../../examples/upload/drag.vue":H,"../../../examples/upload/list-type.vue":Y,"../../../examples/upload/picture.vue":nt,"../../../examples/upload/slot.vue":rt,"../../../examples/upload/thumb.vue":mt};return(c,p)=>{const l=d("demo-block"),u=d("right-nav");return h(),x(E,null,[t("section",null,[ht,ft,n(l,{fs:"",demos:r(a),"path-name":"upload/basic","source-code":`<template>
  <hl-upload
    style="width: 400px"
    action="http://10.32.66.28/up/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="5"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <hl-button type="primary" icon-position="left">
      \u70B9\u51FB\u4E0A\u4F20
      <template #icon>
        <hl-icon><two-upload /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])
const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePreview = file => {
  console.log(file)
}
const handleExceed = (files, fileList) => {
  alert(\`\u5F53\u524D\u9650\u5236\u9009\u62E9 3 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 \${files.length} \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 \${files.length + fileList.length} \u4E2A\u6587\u4EF6\`)
}
const beforeRemove = file => {
  // alert(\`\u786E\u5B9A\u79FB\u9664 \${file.name}\uFF1F\`)
  return confirm(\`\u786E\u5B9A\u79FB\u9664 \${file.name}\uFF1F\`)
}

<\/script>
`},{default:e(()=>[gt,_t]),_:1},8,["demos"]),bt,vt,n(l,{fs:"",demos:r(a),"path-name":"upload/thumb","source-code":`<template>
  <hl-upload action="http://10.32.66.28/up/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
    <hl-thumb v-if="imageUrl" size="xxxl" round :src="imageUrl" fit="cover" />
    <hl-thumb v-else size="xxxl" class="bg-light" round>
      <hl-icon size="xl"><two-user /></hl-icon>
    </hl-thumb>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUser } from '@hongluan-ui/icons'

const imageUrl = ref('')

const handleAvatarSuccess = (res, file) => {
  imageUrl.value = URL.createObjectURL(file.raw)
}
const beforeAvatarUpload = file => {
  const isJPG = file.type === 'image/jpeg'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPG) {
    alert('\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG \u683C\u5F0F!')
  }
  if (!isLt2M) {
    alert('\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!')
  }
  return isJPG && isLt2M
}

<\/script>
`},{default:e(()=>[jt]),_:1},8,["demos"]),wt,xt,n(l,{fs:"",demos:r(a),"path-name":"upload/list-type","source-code":`<template>
  <hl-upload
    action="http://10.32.66.28/up/"
    list-type="card"
    :file-list="fileList"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <hl-icon><two-upload /></hl-icon>
  </hl-upload>
  <hl-dialog v-model="dialogVisible" title="\u67E5\u770B\u56FE\u7247" width="600px">
    <hl-thumb :src="dialogImageUrl" class="full" />
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePictureCardPreview = file => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

<\/script>
`},{default:e(()=>[yt]),_:1},8,["demos"]),Ft,Et,n(l,{fs:"",demos:r(a),"path-name":"upload/slot","source-code":`<template>
  <hl-upload action="#" list-type="card" :auto-upload="false">
    <template #default>
      <hl-icon size="xl"><two-pic /></hl-icon>
    </template>
    <template #file="{file}">
      <div>
        <img class="item-thumb" :src="file.url" alt="">
        <span class="item-actions">
          <span class="item-preview" @click="handlePictureCardPreview(file)">
            <hl-icon><two-zoom-in /></hl-icon>
          </span>
          <span v-if="!disabled" class="item-delete" @click="handleDownload(file)">
            <hl-icon><two-download /></hl-icon>
          </span>
          <span v-if="!disabled" class="item-delete" @click="handleRemove(file)">
            <hl-icon><two-delete /></hl-icon>
          </span>
        </span>
      </div>
    </template>
  </hl-upload>
  <hl-dialog v-model="dialogVisible" modal-class="is-center">
    <div style="width:300px;height:300px;">
      <img width="100%" :src="dialogImageUrl" alt="">
    </div>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoPic, TwoZoomIn, TwoDownload, TwoDelete } from '@hongluan-ui/icons'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = file => {
  console.log(file)
}
const handlePictureCardPreview = file => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
const handleDownload = file => {
  console.log(file)
}

<\/script>
`},{default:e(()=>[Lt]),_:1},8,["demos"]),Mt,n(l,{fs:"",demos:r(a),"path-name":"upload/picture","source-code":`<template>
  <hl-upload action="http://10.32.66.28/up/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
    <hl-button type="primary" icon-position="left">
      \u70B9\u51FB\u4E0A\u4F20
      <template #icon>
        <hl-icon><two-upload /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePreview = file => {
  console.log(file)
}

<\/script>
`},{default:e(()=>[Ut]),_:1},8,["demos"]),Ct,$t,n(l,{fs:"",demos:r(a),"path-name":"upload/change","source-code":`<template>
  <hl-upload action="http://10.32.66.28/up/" :on-change="handleChange" :file-list="fileList">
    <hl-button type="primary" icon-position="left">
      \u70B9\u51FB\u4E0A\u4F20
      <template #icon>
        <hl-icon><two-upload /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleChange = (file, fileList) => {
  fileList.value = fileList.slice(-3)
}
<\/script>
`},{default:e(()=>[Pt]),_:1},8,["demos"]),kt,n(l,{fs:"",demos:r(a),"path-name":"upload/drag","source-code":`<template>
  <hl-upload drag action="http://10.32.66.28/up/" multiple full>
    <hl-icon :border="1.2"><two-upload /></hl-icon>
    <div class="m-t-md">\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 <em class="text-primary">\u70B9\u51FB\u4E0A\u4F20</em></div>
  </hl-upload>
</template>
<script lang="ts" setup>
import { TwoUpload } from '@hongluan-ui/icons'

<\/script>
`},{default:e(()=>[At]),_:1},8,["demos"]),qt,n(l,{fs:"",demos:r(a),"path-name":"upload/auto-upload","source-code":`<template>
  <hl-upload
    ref="upload"
    action="http://10.32.66.28/up/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false"
  >
    <template #trigger>
      <hl-button type="primary">\u9009\u53D6\u6587\u4EF6</hl-button>
    </template>
    <hl-button type="primary" class="m-l-md" effect="light" @click="submitUpload">
      \u4E0A\u4F20\u5230\u670D\u52A1\u5668
      <template #icon>
        <hl-icon><two-server /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoServer } from '@hongluan-ui/icons'

const upload = ref(null)
const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const submitUpload = () => {
  upload.value.submit()
}
const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePreview = file => {
  console.log(file)
}

<\/script>
`},{default:e(()=>[zt]),_:1},8,["demos"]),Dt]),n(u)],64)}}};export{Tt as default};
