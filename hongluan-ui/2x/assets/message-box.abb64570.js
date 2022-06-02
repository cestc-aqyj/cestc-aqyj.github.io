import{p as h,F as l,L as i,C as m,P as a,M as e,J as p,W as b,Q as t,X as c,V as g,a2 as M,o as f}from"./vue.651ae949.js";import{b as _,H as u,d as y}from"./index.8fb14b93.js";import{A as H}from"./hongluan-icons.071444ab.js";import"./hongluan.44f21e2d.js";import"./highlight.687c59a9.js";const T=e("\u70B9\u51FB\u6253\u5F00 Message Box"),C=h({setup(r){const s=()=>{_.alert("\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9","\u6807\u9898\u540D\u79F0",{confirmButtonText:"\u786E\u5B9A",callback:o=>{u({type:"info",message:`action: ${o}`})}})};return(o,d)=>{const n=l("hl-button");return i(),m(n,{type:"link",onClick:s},{default:a(()=>[T]),_:1})}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const k=e("\u70B9\u51FB\u6253\u5F00 Message Box"),j=h({setup(r){const s=()=>{_.confirm("\u68C0\u6D4B\u5230\u672A\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u662F\u5426\u5728\u79BB\u5F00\u9875\u9762\u524D\u4FDD\u5B58\u4FEE\u6539\uFF1F","\u786E\u8BA4\u4FE1\u606F",{distinguishCancelAndClose:!0,confirmButtonText:"\u4FDD\u5B58",cancelButtonText:"\u653E\u5F03\u4FEE\u6539"}).then(()=>{u({type:"info",message:"\u4FDD\u5B58\u4FEE\u6539"})}).catch(o=>{u({type:"info",message:o==="cancel"?"\u653E\u5F03\u4FDD\u5B58\u5E76\u79BB\u5F00\u9875\u9762":"\u505C\u7559\u5728\u5F53\u524D\u9875\u9762"})})};return(o,d)=>{const n=l("hl-button");return i(),m(n,{type:"link",onClick:s},{default:a(()=>[k]),_:1})}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const D=e("\u70B9\u51FB\u6253\u5F00 Message Box"),v=h({setup(r){const s=()=>{_.confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",confirmButtonType:"danger",cancelButtonText:"\u53D6\u6D88",type:"success"}).then(()=>{u({type:"success",message:"\u5220\u9664\u6210\u529F!"})}).catch(()=>{u({type:"info",message:"\u5DF2\u53D6\u6D88\u5220\u9664"})})};return(o,d)=>{const n=l("hl-button");return i(),m(n,{type:"link",onClick:s},{default:a(()=>[D]),_:1})}}});var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v});const $=e("\u70B9\u51FB\u6253\u5F00 Message Box"),w=h({setup(r){const s=()=>{_({title:"\u6D88\u606F",message:p("p",null,[p("span",null,"\u5185\u5BB9\u53EF\u4EE5\u662F "),p("i",{style:"color: teal"},"VNode")]),icon:p(y,{size:"md"},[p(H)]),showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",beforeClose:(o,d,n)=>{o==="confirm"?(d.confirmButtonLoading=!0,d.confirmButtonText="\u6267\u884C\u4E2D...",setTimeout(()=>{n(),setTimeout(()=>{d.confirmButtonLoading=!1},300)},3e3)):n()}}).then(o=>{u({type:"info",message:"action: "+o})})};return(o,d)=>{const n=l("hl-button");return i(),m(n,{type:"link",onClick:s},{default:a(()=>[$]),_:1})}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const A=e("\u70B9\u51FB\u6253\u5F00 Message Box"),z=h({setup(r){const s=()=>{_.alert("<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>","HTML \u7247\u6BB5",{dangerouslyUseHTMLString:!0})};return(o,d)=>{const n=l("hl-button");return i(),m(n,{type:"link",onClick:s},{default:a(()=>[A]),_:1})}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const V=t("h1",null,"MessageBox \u5F39\u6846",-1),q=t("p",null,"\u6A21\u62DF\u7CFB\u7EDF\u7684\u6D88\u606F\u63D0\u793A\u6846\u800C\u5B9E\u73B0\u7684\u4E00\u5957\u6A21\u6001\u5BF9\u8BDD\u6846\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u786E\u8BA4\u6D88\u606F\u548C\u63D0\u4EA4\u5185\u5BB9\u3002",-1),N=t("div",{class:"doc-tip"},[t("p",null,[e("\u4ECE\u573A\u666F\u4E0A\u8BF4\uFF0CMessageBox \u7684\u4F5C\u7528\u662F\u7F8E\u5316\u7CFB\u7EDF\u81EA\u5E26\u7684 "),t("code",null,"alert"),e("\u548C"),t("code",null,"confirm"),e("\uFF0C\u56E0\u6B64\u9002\u5408\u5C55\u793A\u8F83\u4E3A\u7B80\u5355\u7684\u5185\u5BB9\u3002\u5982\u679C\u9700\u8981\u5F39\u51FA\u8F83\u4E3A\u590D\u6742\u7684\u5185\u5BB9\uFF0C\u8BF7\u4F7F\u7528 Dialog\u3002")])],-1),O=t("h2",{id:"xiao-xi-ti-shi"},[t("a",{class:"header-anchor",href:"#xiao-xi-ti-shi"}),e(" \u6D88\u606F\u63D0\u793A")],-1),I=t("p",null,"\u5F53\u7528\u6237\u8FDB\u884C\u64CD\u4F5C\u65F6\u4F1A\u88AB\u89E6\u53D1\uFF0C\u8BE5\u5BF9\u8BDD\u6846\u4E2D\u65AD\u7528\u6237\u64CD\u4F5C\uFF0C\u76F4\u5230\u7528\u6237\u786E\u8BA4\u77E5\u6653\u540E\u624D\u53EF\u5173\u95ED\u3002",-1),U=t("div",null,[t("p",null,[e("\u8C03\u7528"),t("code",null,"$alert"),e("\u65B9\u6CD5\u5373\u53EF\u6253\u5F00\u6D88\u606F\u63D0\u793A\uFF0C\u5B83\u6A21\u62DF\u4E86\u7CFB\u7EDF\u7684 "),t("code",null,"alert"),e("\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6309\u4E0B ESC \u6216\u70B9\u51FB\u6846\u5916\u5173\u95ED\u3002\u6B64\u4F8B\u4E2D\u63A5\u6536\u4E86\u4E24\u4E2A\u53C2\u6570\uFF0C"),t("code",null,"message"),e("\u548C"),t("code",null,"title"),e("\u3002\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u7A97\u53E3\u88AB\u5173\u95ED\u540E\uFF0C\u5B83\u9ED8\u8BA4\u4F1A\u8FD4\u56DE\u4E00\u4E2A"),t("code",null,"Promise"),e("\u5BF9\u8C61\u4FBF\u4E8E\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u7684\u5904\u7406\u3002\u82E5\u4E0D\u786E\u5B9A\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301"),t("code",null,"Promise"),e("\uFF0C\u53EF\u81EA\u884C\u5F15\u5165\u7B2C\u4E09\u65B9 polyfill \u6216\u50CF\u672C\u4F8B\u4E00\u6837\u4F7F\u7528\u56DE\u8C03\u8FDB\u884C\u540E\u7EED\u5904\u7406\u3002")])],-1),X=t("p",null,"message-box/basic",-1),J=t("h2",{id:"que-ren-xiao-xi"},[t("a",{class:"header-anchor",href:"#que-ren-xiao-xi"}),e(" \u786E\u8BA4\u6D88\u606F")],-1),Q=t("p",null,"\u63D0\u793A\u7528\u6237\u786E\u8BA4\u5176\u5DF2\u7ECF\u89E6\u53D1\u7684\u52A8\u4F5C\uFF0C\u5E76\u8BE2\u95EE\u662F\u5426\u8FDB\u884C\u6B64\u64CD\u4F5C\u65F6\u4F1A\u7528\u5230\u6B64\u5BF9\u8BDD\u6846\u3002",-1),W=t("div",null,[t("p",null,[e("\u8C03\u7528"),t("code",null,"$confirm"),e("\u65B9\u6CD5\u5373\u53EF\u6253\u5F00\u6D88\u606F\u63D0\u793A\uFF0C\u5B83\u6A21\u62DF\u4E86\u7CFB\u7EDF\u7684 "),t("code",null,"confirm"),e("\u3002Message Box \u7EC4\u4EF6\u4E5F\u62E5\u6709\u6781\u9AD8\u7684\u5B9A\u5236\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F20\u5165"),t("code",null,"options"),e("\u4F5C\u4E3A\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u5B83\u662F\u4E00\u4E2A\u5B57\u9762\u91CF\u5BF9\u8C61\u3002"),t("code",null,"type"),e("\u5B57\u6BB5\u7528\u6765\u663E\u793A\u5934\u90E8 icon\uFF0C\u53EF\u4EE5\u4E3A"),t("code",null,"success"),e("\uFF0C"),t("code",null,"error"),e("\uFF0C"),t("code",null,"info"),e("\u548C"),t("code",null,"warning"),e("\uFF0C\u9664\u4E86\u4EE5\u4E0A\u81EA\u5B9A\u4E49\u7684\u540D\u79F0\uFF0C\u5176\u5B83 type \u503C\u5C06\u88AB\u8BA4\u4E3A\u76F4\u63A5\u662F Icon \u7EC4\u4EF6\u7684\u540D\u79F0\uFF0C\u6B64\u65F6\u53EF\u4EE5\u914D\u5408 iconProps \u5C5E\u6027\u81EA\u5B9A\u4E49 icon \u6837\u5F0F\u3002\u6CE8\u610F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570"),t("code",null,"title"),e("\u5FC5\u987B\u5B9A\u4E49\u4E3A"),t("code",null,"String"),e("\u7C7B\u578B\uFF0C\u5982\u679C\u662F"),t("code",null,"Object"),e("\uFF0C\u4F1A\u88AB\u7406\u89E3\u4E3A"),t("code",null,"options"),e("\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u7528\u4E86 Promise \u6765\u5904\u7406\u540E\u7EED\u54CD\u5E94\u3002")])],-1),Y=t("p",null,"message-box/confirm",-1),G=t("h2",{id:"zi-ding-yi"},[t("a",{class:"header-anchor",href:"#zi-ding-yi"}),e(" \u81EA\u5B9A\u4E49")],-1),K=t("p",null,"\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u4E0D\u540C\u5185\u5BB9\u3002",-1),R=t("div",null,[t("p",null,[e("\u4EE5\u4E0A\u4E09\u4E2A\u65B9\u6CD5\u90FD\u662F\u5BF9"),t("code",null,"$msgbox"),e("\u65B9\u6CD5\u7684\u518D\u5305\u88C5\u3002\u672C\u4F8B\u76F4\u63A5\u8C03\u7528"),t("code",null,"$msgbox"),e("\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E86"),t("code",null,"showCancelButton"),e("\u5B57\u6BB5\uFF0C\u7528\u4E8E\u663E\u793A\u53D6\u6D88\u6309\u94AE\u3002\u53E6\u5916\u53EF\u4F7F\u7528"),t("code",null,"cancelButtonClass"),e("\u4E3A\u5176\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528"),t("code",null,"cancelButtonText"),e("\u6765\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u672C\uFF08Confirm \u6309\u94AE\u4E5F\u5177\u6709\u76F8\u540C\u7684\u5B57\u6BB5\uFF0C\u5728\u6587\u672B\u7684\u5B57\u6BB5\u8BF4\u660E\u4E2D\u6709\u5B8C\u6574\u7684\u5B57\u6BB5\u5217\u8868\uFF09\u3002\u6B64\u4F8B\u8FD8\u4F7F\u7528\u4E86"),t("code",null,"beforeClose"),e("\u5C5E\u6027\uFF0C\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u4F1A\u5728 MessageBox \u7684\u5B9E\u4F8B\u5173\u95ED\u524D\u88AB\u8C03\u7528\uFF0C\u540C\u65F6\u6682\u505C\u5B9E\u4F8B\u7684\u5173\u95ED\u3002\u5B83\u6709\u4E09\u4E2A\u53C2\u6570\uFF1A"),t("code",null,"action"),e("\u3001\u5B9E\u4F8B\u672C\u8EAB\u548C"),t("code",null,"done"),e("\u65B9\u6CD5\u3002\u4F7F\u7528\u5B83\u80FD\u591F\u5728\u5173\u95ED\u524D\u5BF9\u5B9E\u4F8B\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982\u4E3A\u786E\u5B9A\u6309\u94AE\u6DFB\u52A0"),t("code",null,"loading"),e("\u72B6\u6001\u7B49\uFF1B\u6B64\u65F6\u82E5\u9700\u8981\u5173\u95ED\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u8C03\u7528"),t("code",null,"done"),e("\u65B9\u6CD5\uFF08\u82E5\u5728"),t("code",null,"beforeClose"),e("\u4E2D\u6CA1\u6709\u8C03\u7528"),t("code",null,"done"),e("\uFF0C\u5219\u5B9E\u4F8B\u4E0D\u4F1A\u5173\u95ED\uFF09\u3002")])],-1),Z=t("p",null,"message-box/custom",-1),tt=f('<div class="doc-tip"><p>\u5F39\u51FA\u5C42\u7684\u5185\u5BB9\u53EF\u4EE5\u662F <code>VNode</code>\uFF0C\u6240\u4EE5\u6211\u4EEC\u80FD\u628A\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F20\u5165\u5176\u4E2D\u3002\u6BCF\u6B21\u5F39\u51FA\u5C42\u6253\u5F00\u540E\uFF0CVue \u4F1A\u5BF9\u65B0\u8001 <code>VNode</code> \u8282\u70B9\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u7136\u540E\u5C06\u6839\u636E\u6BD4\u8F83\u7ED3\u679C\u8FDB\u884C\u6700\u5C0F\u5355\u4F4D\u5730\u4FEE\u6539\u89C6\u56FE\u3002\u8FD9\u4E5F\u8BB8\u4F1A\u9020\u6210\u5F39\u51FA\u5C42\u5185\u5BB9\u533A\u57DF\u7684\u7EC4\u4EF6\u6CA1\u6709\u91CD\u65B0\u6E32\u67D3\uFF0C\u4F8B\u5982 <a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>\u3002\u5F53\u8FD9\u7C7B\u95EE\u9898\u51FA\u73B0\u65F6\uFF0C\u89E3\u51B3\u65B9\u6848\u662F\u7ED9 <code>VNode</code> \u52A0\u4E0A\u4E00\u4E2A\u4E0D\u76F8\u540C\u7684 key\uFF0C\u53C2\u8003<a href="https://jsfiddle.net/zhiyang/ezmhq2ef/">\u8FD9\u91CC</a>\u3002</p></div><h2 id="shi-yong-html-pian-duan"><a class="header-anchor" href="#shi-yong-html-pian-duan"></a> \u4F7F\u7528 HTML \u7247\u6BB5</h2><p><code>message</code> \u5C5E\u6027\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\u3002</p>',3),et=t("div",null,[t("p",null,[e("\u5C06"),t("code",null,"dangerouslyUseHTMLString"),e("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),t("code",null,"message"),e(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")])],-1),nt=t("p",null,"message-box/html",-1),st=f('<div class="doc-tip warning"><p><code>message</code> \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS \u653B\u51FB</a>\u3002\u56E0\u6B64\u5728 <code>dangerouslyUseHTMLString</code> \u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u786E\u4FDD <code>message</code> \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\uFF0C<strong>\u6C38\u8FDC\u4E0D\u8981</strong>\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9 <code>message</code> \u5C5E\u6027\u3002</p></div><h2 id="qu-fen-qu-xiao-yu-guan-bi"><a class="header-anchor" href="#qu-fen-qu-xiao-yu-guan-bi"></a> \u533A\u5206\u53D6\u6D88\u4E0E\u5173\u95ED</h2><p>\u6709\u4E9B\u573A\u666F\u4E0B\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u4E0E\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6709\u7740\u4E0D\u540C\u7684\u542B\u4E49\u3002</p>',3),ot=t("div",null,[t("p",null,[e("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u7528\u6237\u89E6\u53D1\u53D6\u6D88\uFF08\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF09\u548C\u89E6\u53D1\u5173\u95ED\uFF08\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u906E\u7F69\u5C42\u3001\u6309\u4E0B ESC \u952E\uFF09\u65F6\uFF0CPromise \u7684 reject \u56DE\u8C03\u548C"),t("code",null,"callback"),e("\u56DE\u8C03\u7684\u53C2\u6570\u5747\u4E3A 'cancel'\u3002\u5982\u679C\u5C06"),t("code",null,"distinguishCancelAndClose"),e("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u4E0A\u8FF0\u4E24\u79CD\u884C\u4E3A\u7684\u53C2\u6570\u5206\u522B\u4E3A 'cancel' \u548C 'close'\u3002")])],-1),at=t("p",null,"message-box/cancel-close",-1),dt={id:"app-shang-xia-wen-ji-cheng-1.5.7"},lt=t("a",{class:"header-anchor",href:"#app-shang-xia-wen-ji-cheng-1.5.7"},null,-1),ct=e(" App \u4E0A\u4E0B\u6587\u7EE7\u627F "),ut=e("> 1.5.7"),it=f(`<div class="doc-tip"><p>\u5982\u679C\u5168\u5C40\u6CE8\u518C HlMessageBox \u7EC4\u4EF6, \u4F1A\u81EA\u52A8\u7EE7\u627Fapp\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002</p></div><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlMessageBox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>

<span class="hljs-comment">// in your setup method</span>
<span class="hljs-keyword">const</span> { appContext } = <span class="hljs-title function_">getCurrentInstance</span>()!
<span class="hljs-comment">// You can pass it like:</span>
<span class="hljs-title class_">HlMessageBox</span>({}, appContext)
<span class="hljs-comment">// or if you are using variants</span>
<span class="hljs-title class_">HlMessageBox</span>.<span class="hljs-title function_">alert</span>(<span class="hljs-string">&#39;Hello world!&#39;</span>, <span class="hljs-string">&#39;Title&#39;</span>, {}, appContext)
</code></pre><h2 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa"></a> \u5168\u5C40\u65B9\u6CD5</h2><p>\u5982\u679C\u4F60\u5B8C\u6574\u5F15\u5165\u4E86 Hongluan\uFF0C\u5B83\u4F1A\u4E3A <code>app.config.globalProperties</code> \u6DFB\u52A0\u5982\u4E0B\u5168\u5C40\u65B9\u6CD5\uFF1A$msgbox, $alert, $confirm \u548C $prompt\u3002\u56E0\u6B64\u5728 Vue instance \u4E2D\u53EF\u4EE5\u91C7\u7528\u672C\u9875\u9762\u4E2D\u7684\u65B9\u5F0F\u8C03\u7528 <code>MessageBox</code>\u3002\u8C03\u7528\u53C2\u6570\u4E3A\uFF1A</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> \u6216 <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> \u6216 <code>$confirm(message, options)</code></li></ul><h2 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong"></a> \u5355\u72EC\u5F15\u7528</h2><p>\u5982\u679C\u5355\u72EC\u5F15\u5165 <code>MessageBox</code>\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlMessageBox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
</code></pre><p>\u90A3\u4E48\u5BF9\u5E94\u4E8E\u4E0A\u8FF0\u4E09\u4E2A\u5168\u5C40\u65B9\u6CD5\u7684\u8C03\u7528\u65B9\u6CD5\u4F9D\u6B21\u4E3A\uFF1AHlMessageBox, HlMessageBox.alert, HlMessageBox.confirm\uFF0C\u8C03\u7528\u53C2\u6570\u4E0E\u5168\u5C40\u65B9\u6CD5\u76F8\u540C\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>MessageBox \u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>message</td><td>MessageBox \u6D88\u606F\u6B63\u6587\u5185\u5BB9</td><td>string / VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>success / info / error / warning</td><td>\u2014</td></tr><tr><td>customStyle</td><td>MessageBox \u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td>\u2014</td><td>{}</td></tr><tr><td>customClass</td><td>MessageBox \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>callback</td><td>\u82E5\u4E0D\u4F7F\u7528 Promise\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B64\u53C2\u6570\u6307\u5B9A MessageBox \u5173\u95ED\u540E\u7684\u56DE\u8C03</td><td>function(action, instance)\uFF0Caction \u7684\u503C\u4E3A&#39;confirm&#39;, &#39;cancel&#39;\u6216&#39;close&#39;, instance \u4E3A MessageBox \u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B83\u8BBF\u95EE\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</td><td>\u2014</td><td>\u2014</td></tr><tr><td>showClose</td><td>MessageBox \u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>beforeClose</td><td>MessageBox \u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C\u5B9E\u4F8B\u7684\u5173\u95ED</td><td>function(action, instance, done)\uFF0Caction \u7684\u503C\u4E3A&#39;confirm&#39;, &#39;cancel&#39;\u6216&#39;close&#39;\uFF1Binstance \u4E3A MessageBox \u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B83\u8BBF\u95EE\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1Bdone \u7528\u4E8E\u5173\u95ED MessageBox \u5B9E\u4F8B</td><td>\u2014</td><td>\u2014</td></tr><tr><td>distinguishCancelAndClose</td><td>\u662F\u5426\u5C06\u53D6\u6D88\uFF08\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF09\u4E0E\u5173\u95ED\uFF08\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u906E\u7F69\u5C42\u3001\u6309\u4E0B ESC \u952E\uFF09\u8FDB\u884C\u533A\u5206</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lockScroll</td><td>\u662F\u5426\u5728 MessageBox \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>showCancelButton</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false\uFF08\u4EE5 confirm \u548C prompt \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A true\uFF09</td></tr><tr><td>showConfirmButton</td><td>\u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>cancelButtonText</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u53D6\u6D88</td></tr><tr><td>confirmButtonText</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u786E\u5B9A</td></tr><tr><td>cancelButtonType</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u7C7B\u578B\uFF0C\u53C2\u8003 Button \u6587\u6863</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>confirmButtonType</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u7C7B\u578B\uFF0C\u53C2\u8003 Button \u6587\u6863</td><td>string</td><td>\u2014</td><td>primary</td></tr><tr><td>cancelButtonClass</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirmButtonClass</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>closeOnClickModal</td><td>\u662F\u5426\u53EF\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09</td></tr><tr><td>closeOnPressEscape</td><td>\u662F\u5426\u53EF\u901A\u8FC7\u6309\u4E0B ESC \u952E\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09</td></tr><tr><td>closeOnHashChange</td><td>\u662F\u5426\u5728 hashchange \u65F6\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>roundButton</td><td>\u662F\u5426\u4F7F\u7528\u5706\u89D2\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>buttonSize</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u53CA\u53D6\u6D88\u6309\u94AE\u7684\u5927\u5C0F\uFF0C\u53C2\u89C1 Button \u6587\u6863</td><td>string</td><td>md</td><td></td></tr><tr><td>animationName</td><td>\u52A8\u753B\u7C7B\u578B\uFF0C\u53C2\u8003\u5185\u7F6E\u8FC7\u5EA6\u52A8\u753B\u6587\u6863</td><td>string</td><td>slideTop</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Etype\u5B9A\u4E49\u7684icon</td><td>VNode</td><td>\u2014</td><td>\u2014</td></tr></tbody></table>`,11),_t={setup(r){const s={"../../../examples/message-box/basic.vue":F,"../../../examples/message-box/cancel-close.vue":E,"../../../examples/message-box/confirm.vue":S,"../../../examples/message-box/custom.vue":L,"../../../examples/message-box/html.vue":P};return(o,d)=>{const n=l("demo-block"),B=l("hl-tag"),x=l("right-nav");return i(),b(M,null,[t("section",null,[V,q,N,O,I,c(n,{fs:"",demos:g(s),"path-name":"message-box/basic","source-code":`<template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script lang="ts" setup>
import { HlMessageBox, HlMessage } from 'hongluan-ui'

const open = () => {
  HlMessageBox.alert('\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9', '\u6807\u9898\u540D\u79F0', {
    confirmButtonText: '\u786E\u5B9A',
    callback: action => {
      HlMessage({
        type: 'info',
        message: \`action: \${action}\`,
      })
    },
  })
}
<\/script>
`},{default:a(()=>[U,X]),_:1},8,["demos"]),J,Q,c(n,{fs:"",demos:g(s),"path-name":"message-box/confirm","source-code":`<template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script lang="ts" setup>
import { HlMessageBox, HlMessage } from 'hongluan-ui'

const open = () => {
  HlMessageBox.confirm('\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?', '\u63D0\u793A', {
    confirmButtonText: '\u786E\u5B9A',
    confirmButtonType: 'danger',
    cancelButtonText: '\u53D6\u6D88',
    type: 'success',
  })
    .then(() => {
      HlMessage({
        type: 'success',
        message: '\u5220\u9664\u6210\u529F!',
      })
    })
    .catch(() => {
      HlMessage({
        type: 'info',
        message: '\u5DF2\u53D6\u6D88\u5220\u9664',
      })
    })
}

<\/script>
`},{default:a(()=>[W,Y]),_:1},8,["demos"]),G,K,c(n,{fs:"",demos:g(s),"path-name":"message-box/custom","source-code":`<template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { HlMessageBox, HlMessage, HlIcon } from 'hongluan-ui'
import { TwoAirplay } from '@hongluan-ui/icons'

const open = () => {
  HlMessageBox({
    title: '\u6D88\u606F',
    message: h('p', null, [
      h('span', null, '\u5185\u5BB9\u53EF\u4EE5\u662F '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
    icon: h(HlIcon, { size: 'md' }, [h(TwoAirplay)]),
    showCancelButton: true,
    confirmButtonText: '\u786E\u5B9A',
    cancelButtonText: '\u53D6\u6D88',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = '\u6267\u884C\u4E2D...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    },
  }).then(action => {
    HlMessage({
      type: 'info',
      message: 'action: ' + action,
    })
  })
}
<\/script>

`},{default:a(()=>[R,Z]),_:1},8,["demos"]),tt,c(n,{fs:"",demos:g(s),"path-name":"message-box/html","source-code":`<template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script lang="ts" setup>
import { HlMessageBox } from 'hongluan-ui'

const open = () => {
  HlMessageBox.alert('<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>', 'HTML \u7247\u6BB5', {
    dangerouslyUseHTMLString: true,
  })
}

<\/script>
`},{default:a(()=>[et,nt]),_:1},8,["demos"]),st,c(n,{fs:"",demos:g(s),"path-name":"message-box/cancel-close","source-code":`<template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script lang="ts" setup>
import { HlMessageBox, HlMessage } from 'hongluan-ui'

const open = () => {
  HlMessageBox.confirm(
    '\u68C0\u6D4B\u5230\u672A\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u662F\u5426\u5728\u79BB\u5F00\u9875\u9762\u524D\u4FDD\u5B58\u4FEE\u6539\uFF1F',
    '\u786E\u8BA4\u4FE1\u606F',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: '\u4FDD\u5B58',
      cancelButtonText: '\u653E\u5F03\u4FEE\u6539',
    },
  )
    .then(() => {
      HlMessage({
        type: 'info',
        message: '\u4FDD\u5B58\u4FEE\u6539',
      })
    })
    .catch(action => {
      HlMessage({
        type: 'info',
        message:
          action === 'cancel' ? '\u653E\u5F03\u4FDD\u5B58\u5E76\u79BB\u5F00\u9875\u9762' : '\u505C\u7559\u5728\u5F53\u524D\u9875\u9762',
      })
    })
}
<\/script>
`},{default:a(()=>[ot,at]),_:1},8,["demos"]),t("h2",dt,[lt,ct,c(B,null,{default:a(()=>[ut]),_:1})]),it]),c(x)],64)}}};export{_t as default};
