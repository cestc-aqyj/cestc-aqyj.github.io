import{p as b,R as h,F as c,L as g,C as k,P as a,X as l,V as v,Q as t,W as y,y as x,S as D,a2 as E,M as o,o as Y}from"./vue.651ae949.js";import{A as F}from"./hongluan-icons.071444ab.js";const j=t("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),V=t("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),M=b({setup(f){const d=e=>e.getTime()>Date.now(),r=[{text:"\u4ECA\u5929",value:new Date},{text:"\u6628\u5929",value:(()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e})()},{text:"\u4E00\u5468\u4EE5\u524D",value:(()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e})()}],p=h(""),n=h("");return(e,s)=>{const u=c("hl-icon"),m=c("hl-date-picker"),i=c("hl-col"),_=c("hl-row");return g(),k(_,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[l(i,{span:"lg:col-10 md:col-12"},{default:a(()=>[j,l(m,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=w=>p.value=w),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F","show-close":!1,block:""},{icon:a(()=>[l(u,null,{default:a(()=>[l(v(F))]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(i,{span:"lg:col-10 md:col-12"},{default:a(()=>[V,l(m,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=w=>n.value=w),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F","disabled-date":d,shortcuts:r,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const $={class:"demo-date-picker"},C=b({setup(f){const d=h("2021-10-29"),r=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"];function p({dayjs:n}){return r.includes(n.format("YYYY-MM-DD"))}return(n,e)=>{const s=c("hl-date-picker");return g(),y("div",$,[l(s,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=u=>d.value=u),type:"date",placeholder:"Pick a day",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD"},{default:a(u=>[t("div",{class:x(["cell",{current:u.isCurrent}])},[t("span",{class:x(["text",p(u)&&"text-danger font-bold"])},D(u.text),3)],2)]),_:1},8,["modelValue"])])}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const S=t("p",{class:"m-b-sm"},"\u9ED8\u8BA4",-1),z=t("p",{class:"m-b-sm"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),U=b({setup(f){const d=[{text:"\u6700\u8FD1\u4E00\u5468",value:(()=>{const n=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,n]})()},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:(()=>{const n=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,n]})()},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:(()=>{const n=new Date,e=new Date;return e.setTime(e.getTime()-7776e6),[e,n]})()}],r=h(""),p=h("");return(n,e)=>{const s=c("hl-date-picker"),u=c("hl-col"),m=c("hl-row");return g(),k(m,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[l(u,{span:"lg:col-12"},{default:a(()=>[S,l(s,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=i=>r.value=i),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1}),l(u,{span:"lg:col-12"},{default:a(()=>[z,l(s,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=i=>p.value=i),type:"daterange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",shortcuts:d,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});const B={class:"m-b-sm"},P=b({setup(f){const d=[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)],r=h("");return(p,n)=>{const e=c("hl-date-picker");return g(),y(E,null,[t("p",B,"\u7EC4\u4EF6\u503C\uFF1A"+D(r.value),1),l(e,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=s=>r.value=s),type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":d},null,8,["modelValue"])],64)}}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const N=t("p",{class:"m-b-sm"},"\u65E5\u671F",-1),R=t("p",{class:"m-b-sm"},"\u65E5\u671F\u8303\u56F4",-1),H=b({setup(f){const d=h(""),r=h("");return(p,n)=>{const e=c("hl-date-picker"),s=c("hl-col"),u=c("hl-row");return g(),k(u,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[l(s,{span:"lg:col-12"},{default:a(()=>[N,l(e,{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=m=>d.value=m),type:"date",placeholder:"Pick a date","default-value":new Date(2021,8,1)},null,8,["modelValue","default-value"])]),_:1}),l(s,{span:"lg:col-12"},{default:a(()=>[R,l(e,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=m=>r.value=m),type:"daterange","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2021,9,1),new Date(2021,10,1)]},null,8,["modelValue","default-value"])]),_:1})]),_:1})}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const Q=t("p",{class:"m-b-sm"},"\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61",-1),W={class:"m-t-lg"},X=t("p",{class:"m-b-sm"},"\u4F7F\u7528value-format",-1),I={class:"m-t-lg"},G=t("p",{class:"m-b-sm"},"\u65F6\u95F4\u6233",-1),J={class:"m-t-lg"},K=b({setup(f){const d=h(""),r=h(""),p=h("");return(n,e)=>{const s=c("hl-date-picker"),u=c("hl-col"),m=c("hl-row");return g(),k(m,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[l(u,{span:"col"},{default:a(()=>[Q,l(s,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=i=>d.value=i),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5"},null,8,["modelValue"]),t("p",W,"\u503C\uFF1A"+D(d.value),1)]),_:1}),l(u,{span:"col"},{default:a(()=>[X,l(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=i=>r.value=i),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"YYYY/MM/DD"},null,8,["modelValue"]),t("p",I,"\u503C\uFF1A"+D(r.value),1)]),_:1}),l(u,{span:"col"},{default:a(()=>[G,l(s,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=i=>p.value=i),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",format:"YYYY \u5E74 MM \u6708 DD \u65E5","value-format":"x"},null,8,["modelValue"]),t("p",J,"\u503C\uFF1A"+D(p.value),1)]),_:1})]),_:1})}}});var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const tt=t("p",{class:"m-b-md"},"\u9ED8\u8BA4",-1),et=t("p",{class:"m-b-md"},"\u5E26\u5FEB\u6377\u9009\u9879",-1),lt=b({setup(f){const d=[{text:"\u672C\u6708",value:[new Date,new Date]},{text:"\u4ECA\u5E74\u81F3\u4ECA",value:(()=>{const n=new Date;return[new Date(new Date().getFullYear(),0),n]})()},{text:"\u6700\u8FD1\u516D\u4E2A\u6708",value:(()=>{const n=new Date,e=new Date;return e.setMonth(e.getMonth()-6),[e,n]})()}],r=h(""),p=h("");return(n,e)=>{const s=c("hl-date-picker"),u=c("hl-col"),m=c("hl-row");return g(),k(m,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[l(u,{span:"lg:col-12"},{default:a(()=>[tt,l(s,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=i=>r.value=i),type:"monthrange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",block:""},null,8,["modelValue"])]),_:1}),l(u,{span:"lg:col-12"},{default:a(()=>[et,l(s,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=i=>p.value=i),type:"monthrange","unlink-panels":"","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u6708\u4EFD","end-placeholder":"\u7ED3\u675F\u6708\u4EFD",shortcuts:d,block:""},null,8,["modelValue"])]),_:1})]),_:1})}}});var nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lt});const at=t("p",{class:"m-b-sm"},"\u5468",-1),st=t("p",{class:"m-b-sm"},"\u6708",-1),dt=t("p",{class:"m-b-sm"},"\u5E74",-1),ot=t("p",{class:"m-b-sm"},"\u591A\u4E2A\u65E5\u671F",-1),rt=b({setup(f){const d=h(""),r=h(""),p=h(""),n=h("");return(e,s)=>{const u=c("hl-date-picker"),m=c("hl-col"),i=c("hl-row");return g(),y(E,null,[l(i,{align:"items-center",gap:"var(--xl)"},{default:a(()=>[l(m,{span:"md:col-12 lg:col-10"},{default:a(()=>[at,l(u,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=_=>d.value=_),type:"week",format:"gggg \u7B2C ww \u5468",placeholder:"\u9009\u62E9\u5468",block:""},null,8,["modelValue"])]),_:1}),l(m,{span:"md:col-12 lg:col-10"},{default:a(()=>[st,l(u,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=_=>r.value=_),type:"month",placeholder:"\u9009\u62E9\u6708",block:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{align:"items-center",gap:"var(--xl)",class:"m-t-lg"},{default:a(()=>[l(m,{span:"md:col-12 lg:col-10"},{default:a(()=>[dt,l(u,{modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=_=>p.value=_),type:"year",placeholder:"\u9009\u62E9\u5E74",block:""},null,8,["modelValue"])]),_:1}),l(m,{span:"md:col-12 lg:col-10"},{default:a(()=>[ot,l(u,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=_=>n.value=_),type:"dates",placeholder:"\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1})],64)}}});var ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rt});const ct=t("h1",null,"DatePicker \u65E5\u671F\u9009\u62E9\u5668",-1),pt=t("p",null,"\u4EE5\u300C\u65E5\u300D\u4E3A\u57FA\u672C\u5355\u4F4D\uFF0C\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\u63A7\u4EF6",-1),it=t("div",null,[t("p",null,[o("\u57FA\u672C\u5355\u4F4D\u7531"),t("code",null,"type"),o("\u5C5E\u6027\u6307\u5B9A\u3002\u901A\u8FC7"),t("code",null,"shortcuts"),o("\u914D\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u7981\u7528\u65E5\u671F\u901A\u8FC7 "),t("code",null,"disabled-date"),o(" \u8BBE\u7F6E\uFF0C\u4F20\u5165\u51FD\u6570")])],-1),mt=t("p",null,"date-picker/basic",-1),ht=t("h2",{id:"qi-ta-ri-qi-dan-wei"},[t("a",{class:"header-anchor",href:"#qi-ta-ri-qi-dan-wei"}),o(" \u5176\u4ED6\u65E5\u671F\u5355\u4F4D")],-1),_t=t("p",null,"\u901A\u8FC7\u6269\u5C55\u57FA\u7840\u7684\u65E5\u671F\u9009\u62E9\uFF0C\u53EF\u4EE5\u9009\u62E9\u5468\u3001\u6708\u3001\u5E74\u6216\u591A\u4E2A\u65E5\u671F",-1),vt=t("p",null,"date-picker/type",-1),gt=t("h2",{id:"xuan-ze-ri-qi-fan-wei"},[t("a",{class:"header-anchor",href:"#xuan-ze-ri-qi-fan-wei"}),o(" \u9009\u62E9\u65E5\u671F\u8303\u56F4")],-1),ft=t("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4\u8303\u56F4",-1),bt=t("div",null,[t("p",null,[o("\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u6708\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),t("code",null,"unlink-panels"),o("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),Dt=t("p",null,"date-picker/daterange",-1),kt=t("h2",{id:"xuan-ze-yue-fen-fan-wei"},[t("a",{class:"header-anchor",href:"#xuan-ze-yue-fen-fan-wei"}),o(" \u9009\u62E9\u6708\u4EFD\u8303\u56F4")],-1),yt=t("p",null,"\u53EF\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u4FBF\u6377\u5730\u9009\u62E9\u4E00\u4E2A\u6708\u4EFD\u8303\u56F4",-1),wt=t("div",null,[t("p",null,[o("\u5728\u9009\u62E9\u6708\u4EFD\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u5E74\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528"),t("code",null,"unlink-panels"),o("\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002")])],-1),Et=t("p",null,"date-picker/monthrange",-1),xt=t("h2",{id:"mo-ren-zhi"},[t("a",{class:"header-anchor",href:"#mo-ren-zhi"}),o(" \u9ED8\u8BA4\u503C")],-1),Yt=t("p",null,[o("\u5982\u679C\u7528\u6237\u6CA1\u6709\u9009\u62E9\u65E5\u671F\uFF0C\u90A3\u9ED8\u8BA4\u5C55\u793A\u5F53\u524D\u65E5\u7684\u6708\u4EFD\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),t("code",null,"default-value"),o(" \u6765\u8BBE\u7F6E\u6210\u5176\u4ED6\u7684\u65E5\u671F\u3002")],-1),Ft=t("p",null,[o("\u5982\u679C\u7C7B\u578B\u662F "),t("code",null,"daterange"),o(", "),t("code",null,"default-value"),o(" \u5219\u4F1A\u8BBE\u7F6E\u5DE6\u8FB9\u7A97\u53E3\u7684\u9ED8\u8BA4\u503C\u3002")],-1),jt=t("p",null,"date-picker/default-value",-1),Vt=t("h2",{id:"ri-qi-ge-shi"},[t("a",{class:"header-anchor",href:"#ri-qi-ge-shi"}),o(" \u65E5\u671F\u683C\u5F0F")],-1),Mt=t("p",null,[o("\u4F7F\u7528"),t("code",null,"format"),o("\u6307\u5B9A\u8F93\u5165\u6846\u7684\u683C\u5F0F\u3002\u4F7F\u7528"),t("code",null,"value-format"),o("\u6307\u5B9A\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u63A5\u53D7\u5E76\u8FD4\u56DE"),t("code",null,"Date"),o("\u5BF9\u8C61\u3002")],-1),Tt=t("div",{class:"doc-tip warning"},[t("p",null,"\u8BF7\u6CE8\u610F\u5927\u5C0F\u5199")],-1),$t=t("div",null,[t("p",null,[o("\u5728 "),t("a",{href:"https://day.js.org/docs/zh-CN/display/format"},"\u8FD9\u91CC"),o(" \u67E5\u770B Day.js \u652F\u6301\u7684 format \u53C2\u6570\u3002")])],-1),Ct=t("p",null,"date-picker/format",-1),At=t("h2",{id:"mo-ren-xian-shi-ri-qi"},[t("a",{class:"header-anchor",href:"#mo-ren-xian-shi-ri-qi"}),o(" \u9ED8\u8BA4\u663E\u793A\u65E5\u671F")],-1),St=t("p",null,"\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u6307\u5B9A\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u9ED8\u8BA4\u65F6\u523B\u3002",-1),zt=t("div",null,[t("p",null,[o("\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8D77\u59CB\u65E5\u671F\u548C\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u95F4\u90E8\u5206\u5747\u4E3A\u5F53\u5929\u7684 0 \u70B9 0 \u5206 0 \u79D2\u3002\u901A\u8FC7"),t("code",null,"default-time"),o("\u53EF\u4EE5\u5206\u522B\u6307\u5B9A\u4E8C\u8005\u7684\u5177\u4F53\u65F6\u523B\u3002"),t("code",null,"default-time"),o("\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u503C\u63A7\u5236\u8D77\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u63A7\u5236\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\u3002")])],-1),Ut=t("p",null,"date-picker/default-time",-1),qt=t("h2",{id:"zi-ding-yi-dan-yuan-ge-nei-rong"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-dan-yuan-ge-nei-rong"}),o(" \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9")],-1),Bt=t("p",null,"date-picker/custom-content",-1),Pt=Y(`<p><code>slot</code> \u53C2\u6570\u8BE6\u60C5\uFF1A</p><pre><code class="hljs language-ts"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">DateCell</span> {
  <span class="hljs-attr">column</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">customClass</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">disabled</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">end</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">inRange</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">row</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">selected</span>: <span class="hljs-title class_">Dayjs</span>
  <span class="hljs-attr">isCurrent</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">isSelected</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">start</span>: <span class="hljs-built_in">boolean</span>
  <span class="hljs-attr">text</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">timestamp</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">date</span>: <span class="hljs-title class_">Date</span>
  <span class="hljs-attr">dayjs</span>: <span class="hljs-title class_">Dayjs</span>
  <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;normal&#39;</span> | <span class="hljs-string">&#39;today&#39;</span> | <span class="hljs-string">&#39;week&#39;</span> | <span class="hljs-string">&#39;next-month&#39;</span> | <span class="hljs-string">&#39;prev-month&#39;</span>
}
</code></pre><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>date(DatePicker) / array(DateRangePicker)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm/lg</td><td>large</td></tr><tr><td>placeholder</td><td>\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>start-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>end-placeholder</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u663E\u793A\u7C7B\u578B</td><td>string</td><td>year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange</td><td>date</td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>DatePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>range-separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td>Date</td><td>\u53EF\u88AB<code>new Date()</code>\u89E3\u6790</td><td>\u2014</td></tr><tr><td>default-time</td><td>\u8303\u56F4\u9009\u62E9\u65F6\u9009\u4E2D\u65E5\u671F\u6240\u4F7F\u7528\u7684\u5F53\u65E5\u5185\u5177\u4F53\u65F6\u523B</td><td>Date[]</td><td>\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A 2\uFF0C\u7B2C\u4E00\u9879\u6307\u5B9A\u5F00\u59CB\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u7B2C\u4E8C\u9879\u6307\u5B9A\u7ED3\u675F\u65E5\u671F\u7684\u65F6\u523B\uFF0C\u4E0D\u6307\u5B9A\u4F1A\u4F7F\u7528\u65F6\u523B <code>00:00:00</code></td><td>\u2014</td></tr><tr><td>value-format</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A Date \u5BF9\u8C61</td><td>string</td><td>\u89C1<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">\u65E5\u671F\u683C\u5F0F</a></td><td>\u2014</td></tr><tr><td>id</td><td>input\u8F93\u5165\u6846id\u5C5E\u6027\u503C</td><td>string / array(string)</td><td>\u65E5\u671F\u9009\u62E9 <code>id=&quot;my-date&quot;</code>\uFF0C\u65E5\u671F\u8303\u56F4\u9009\u62E9 <code>:id=&quot;[&#39;my-range-start&#39;, &#39;my-range-end&#39;]&quot;</code></td><td>-</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>validate-event</td><td>\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>object[{ text: string, value: date / function }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled-date</td><td>\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u8981\u6C42\u8FD4\u56DE Boolean</td><td>Function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>teleported</td><td>\u4E0B\u62C9\u6846\u8282\u70B9\u662F\u5426\u6DFB\u52A0\u5230body\u4E0A</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u7528\u6237\u786E\u8BA4\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u7ED1\u5B9A\u503C</td></tr><tr><td>blur</td><td>\u5F53 input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>focus</td><td>\u5F53 input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>\u7EC4\u4EF6\u5B9E\u4F8B</td></tr><tr><td>calendar-change</td><td>\u9009\u4E2D\u65E5\u5386\u65E5\u671F\u540E\u4F1A\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5F53 <code>daterange</code> \u624D\u751F\u6548</td><td>[Date, Date]</td></tr><tr><td>panel-change</td><td>\u70B9\u51FB\u5BFC\u822A\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>(date, mode, view)</code></td></tr><tr><td>visible-change</td><td>\u65E5\u671F\u9009\u62E9\u5668\u663E\u793A\u6216\u8005\u9690\u85CF\u65F6\u89E6\u53D1</td><td>true / false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>focusStartInput</td></tr></tbody></table>`,10),Rt={setup(f){const d={"../../../examples/date-picker/basic.vue":T,"../../../examples/date-picker/custom-content.vue":A,"../../../examples/date-picker/daterange.vue":q,"../../../examples/date-picker/default-time.vue":O,"../../../examples/date-picker/default-value.vue":L,"../../../examples/date-picker/format.vue":Z,"../../../examples/date-picker/monthrange.vue":nt,"../../../examples/date-picker/type.vue":ut};return(r,p)=>{const n=c("demo-block"),e=c("right-nav");return g(),y(E,null,[t("section",null,[ct,pt,l(n,{fs:"",demos:v(d),"path-name":"date-picker/basic","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-10 md:col-12">
      <p class="m-b-sm">\u9ED8\u8BA4</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" :show-close="false" block>
        <template #icon>
          <hl-icon>
            <two-airplay />
          </hl-icon>
        </template>
      </hl-date-picker>
    </hl-col>
    <hl-col span="lg:col-10 md:col-12">
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TwoAirplay } from '@hongluan-ui/icons'

const disabledDate = time => {
  return time.getTime() > Date.now()
}
const shortcuts = [
  {
    text: '\u4ECA\u5929',
    value: new Date(),
  },
  {
    text: '\u6628\u5929',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    })(),
  },
  {
    text: '\u4E00\u5468\u4EE5\u524D',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    })(),
  },
]
const value1 = ref('')
const value2 = ref('')
<\/script>
`},{default:a(()=>[it,mt]),_:1},8,["demos"]),ht,_t,l(n,{fs:"",demos:v(d),"path-name":"date-picker/type","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5468</p>
      <hl-date-picker v-model="value1" type="week" format="gggg \u7B2C ww \u5468" placeholder="\u9009\u62E9\u5468" block />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u6708</p>
      <hl-date-picker v-model="value2" type="month" placeholder="\u9009\u62E9\u6708" block />
    </hl-col>
  </hl-row>

  <hl-row align="items-center" gap="var(--xl)" class="m-t-lg">
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u5E74</p>
      <hl-date-picker v-model="value3" type="year" placeholder="\u9009\u62E9\u5E74" block />
    </hl-col>
    <hl-col span="md:col-12 lg:col-10">
      <p class="m-b-sm">\u591A\u4E2A\u65E5\u671F</p>
      <hl-date-picker v-model="value4" type="dates" placeholder="\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65E5\u671F" block />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
<\/script>

`},{default:a(()=>[vt]),_:1},8,["demos"]),gt,ft,l(n,{fs:"",demos:v(d),"path-name":"date-picker/daterange","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="daterange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        block
      />
    </hl-col>
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u65E5\u671F"
        end-placeholder="\u7ED3\u675F\u65E5\u671F"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u6700\u8FD1\u4E00\u5468',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u4E00\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u4E09\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    })(),
  },
]
const value1 = ref('')
const value2 = ref('')
<\/script>
`},{default:a(()=>[bt,Dt]),_:1},8,["demos"]),kt,yt,l(n,{fs:"",demos:v(d),"path-name":"date-picker/monthrange","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u9ED8\u8BA4</p>
      <hl-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u6708\u4EFD"
        end-placeholder="\u7ED3\u675F\u6708\u4EFD"
        block
      />
    </hl-col>
    <hl-col span="lg:col-12">
      <p class="m-b-md">\u5E26\u5FEB\u6377\u9009\u9879</p>
      <hl-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="\u81F3"
        start-placeholder="\u5F00\u59CB\u6708\u4EFD"
        end-placeholder="\u7ED3\u675F\u6708\u4EFD"
        :shortcuts="shortcuts"
        block
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const shortcuts = [
  {
    text: '\u672C\u6708',
    value: [new Date(), new Date()],
  },
  {
    text: '\u4ECA\u5E74\u81F3\u4ECA',
    value: (() => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    })(),
  },
  {
    text: '\u6700\u8FD1\u516D\u4E2A\u6708',
    value: (() => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    })(),
  },
]

const value1 = ref('')
const value2 = ref('')

<\/script>
`},{default:a(()=>[wt,Et]),_:1},8,["demos"]),xt,Yt,Ft,l(n,{fs:"",demos:v(d),"path-name":"date-picker/default-value","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u65E5\u671F</p>
      <hl-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2021, 8, 1)"
      />
    </hl-col>

    <hl-col span="lg:col-12">
      <p class="m-b-sm">\u65E5\u671F\u8303\u56F4</p>
      <hl-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2021, 9, 1), new Date(2021, 10, 1)]"
      />
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
<\/script>
`},{default:a(()=>[jt]),_:1},8,["demos"]),Vt,Mt,Tt,l(n,{fs:"",demos:v(d),"path-name":"date-picker/format","source-code":`<template>
  <hl-row align="items-center" gap="var(--xl)">
    <hl-col span="col">
      <p class="m-b-sm">\u9ED8\u8BA4\u4E3A Date \u5BF9\u8C61</p>
      <hl-date-picker v-model="value1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" format="YYYY \u5E74 MM \u6708 DD \u65E5" />
      <p class="m-t-lg">\u503C\uFF1A{{ value1 }}</p>
    </hl-col>
    <hl-col span="col">
      <p class="m-b-sm">\u4F7F\u7528value-format</p>
      <hl-date-picker
        v-model="value2"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        format="YYYY \u5E74 MM \u6708 DD \u65E5"
        value-format="YYYY/MM/DD"
      />
      <p class="m-t-lg">\u503C\uFF1A{{ value2 }}</p>
    </hl-col>
    <hl-col span="col">
      <p class="m-b-sm">\u65F6\u95F4\u6233</p>
      <hl-date-picker
        v-model="value3"
        type="date"
        placeholder="\u9009\u62E9\u65E5\u671F"
        format="YYYY \u5E74 MM \u6708 DD \u65E5"
        value-format="x"
      />
      <p class="m-t-lg">\u503C\uFF1A{{ value3 }}</p>
    </hl-col>
  </hl-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
<\/script>
`},{default:a(()=>[$t,Ct]),_:1},8,["demos"]),At,St,l(n,{fs:"",demos:v(d),"path-name":"date-picker/default-time","source-code":`<template>
  <p class="m-b-sm">\u7EC4\u4EF6\u503C\uFF1A{{ value }}</p>
  <hl-date-picker v-model="value" type="daterange" start-placeholder="\u5F00\u59CB\u65E5\u671F" end-placeholder="\u7ED3\u675F\u65E5\u671F" :default-time="defaultTime" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)] // '00:00:00', '23:59:59'
const value = ref('')
<\/script>
`},{default:a(()=>[zt,Ut]),_:1},8,["demos"]),qt,l(n,{fs:"",demos:v(d),"path-name":"date-picker/custom-content","source-code":`<template>
  <div class="demo-date-picker">
    <hl-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span :class="['text', isHoliday(cell) && 'text-danger font-bold'] ">{{ cell.text }}</span>
        </div>
      </template>
    </hl-date-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('2021-10-29')

const holidays = [
  '2021-10-01',
  '2021-10-02',
  '2021-10-03',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07',
]

function isHoliday({ dayjs }) {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
<\/script>
`},{default:a(()=>[Bt]),_:1},8,["demos"]),Pt]),l(e)],64)}}};export{Rt as default};
