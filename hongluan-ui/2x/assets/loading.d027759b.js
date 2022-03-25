var S=Object.defineProperty;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var y=(t,e,n)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))H.call(e,n)&&y(t,n,e[n]);if(w)for(var n of w(e))z.call(e,n)&&y(t,n,e[n]);return t};import{Y as b,L as M,W as N,Q as u,a2 as D,a0 as r,P as T,aG as _,a3 as o,o as L}from"./vue.ad0d5d1c.js";import{_ as V,H as I}from"./index.4f3bfee7.js";import"./hongluan.bb564fd4.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.3fa14f51.js";const $={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:t,createVNode:e,resolveDirective:n,withCtx:i,openBlock:s,createBlock:p,withDirectives:F}=_;function c(d,B){const a=t("hl-table-column"),A=t("hl-table"),l=n("loading");return F((s(),p(A,{data:d.tableData,style:{width:"100%"}},{default:i(()=>[e(a,{prop:"date",label:"\u65E5\u671F",width:"180"}),e(a,{prop:"name",label:"\u59D3\u540D",width:"180"}),e(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"])),[[l,d.loading]])}const{defineComponent:h,ref:E}=_,C=h({setup(){const d=E([{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}]),B=E(!0);return{tableData:d,loading:B}}});return v({render:c},C)}(),"hl-demo1":function(){const{resolveComponent:t,createVNode:e,resolveDirective:n,withCtx:i,openBlock:s,createBlock:p,withDirectives:F,Fragment:c,createElementBlock:h}=_;function E(a,A){const l=t("hl-table-column"),m=t("hl-table"),f=n("loading");return s(),h(c,null,[F((s(),p(m,{"loading-text":"\u62FC\u547D\u52A0\u8F7D\u4E2D","loading-spinner":"spinner","loading-background":"rgba(0, 0, 0, 0.8)",data:a.tableData,style:{width:"100%","margin-bottom":"10px"}},{default:i(()=>[e(l,{prop:"date",label:"\u65E5\u671F",width:"180"}),e(l,{prop:"name",label:"\u59D3\u540D",width:"180"}),e(l,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"])),[[f,a.loading]]),F((s(),p(m,{"loading-svg":a.svg,class:"custom-loading-svg","loading-svg-view-box":"0, 0, 22, 22",data:a.tableData,style:{width:"100%"}},{default:i(()=>[e(l,{prop:"date",label:"\u65E5\u671F",width:"180"}),e(l,{prop:"name",label:"\u59D3\u540D",width:"180"}),e(l,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["loading-svg","data"])),[[f,a.loading]])],64)}const{defineComponent:C,ref:d}=_,B=C({setup(){const a=d({color:"red"}),A=d([{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}]),l=d(!0),m=d(`
      <path d="M11,21 C16.5228475,21 21,16.5228475 21,11 C21,10.3293212 20.9339755,9.67406333 20.8080718,9.04037141 C20.1649528,5.80346047 17.9594709,3.12924671 15.0106393,1.83674328 C13.7829108,1.29861717 12.4263283,1 11,1 C5.4771525,1 1,5.4771525 1,11 C1,16.5228475 5.4771525,21 11,21 Z M6,14 C7,16 9,17 11,17 C13,17 15,16 16,14"></path>
    `);return{spinner:a,tableData:A,loading:l,svg:m}}});return v({render:E},B)}(),"hl-demo2":function(){const{createTextVNode:t,resolveComponent:e,resolveDirective:n,withCtx:i,openBlock:s,createBlock:p,withDirectives:F,createVNode:c,Fragment:h,createElementBlock:E}=_,C=t(" \u6307\u4EE4\u65B9\u5F0F "),d=t(" \xA0\xA0\xA0\xA0 "),B=t(" \u670D\u52A1\u65B9\u5F0F ");function a(g,x){const k=e("hl-button"),j=n("loading");return s(),E(h,null,[F((s(),p(k,{type:"primary",onClick:g.openFullScreen1},{default:i(()=>[C]),_:1},8,["onClick"])),[[j,g.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]]),d,c(k,{type:"primary",onClick:g.openFullScreen2},{default:i(()=>[B]),_:1},8,["onClick"])],64)}const{defineComponent:A,ref:l}=_,{HlLoading:m}=I,f=A({setup(){const g=l(!1);return{fullscreenLoading:g,openFullScreen1:()=>{g.value=!0,setTimeout(()=>{g.value=!1},2e3)},openFullScreen2:()=>{const j=m.service({lock:!0,text:"Loading",spinner:{size:"30px",color:"yellow"},background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{j.close()},2e3)}}}});return v({render:a},f)}()}},O=u("h1",null,"Loading \u52A0\u8F7D",-1),P=u("p",null,"\u52A0\u8F7D\u6570\u636E\u65F6\u663E\u793A\u52A8\u6548\u3002",-1),q=u("h2",{id:"qu-yu-jia-zai"},[u("a",{class:"header-anchor",href:"#qu-yu-jia-zai"}),o(" \u533A\u57DF\u52A0\u8F7D")],-1),Q=u("p",null,"\u5728\u8868\u683C\u7B49\u5BB9\u5668\u4E2D\u52A0\u8F7D\u6570\u636E\u65F6\u663E\u793A\u3002",-1),U=u("div",null,[u("p",null,[o("Hongluan UI \u63D0\u4F9B\u4E86\u4E24\u79CD\u8C03\u7528 Loading \u7684\u65B9\u6CD5\uFF1A\u6307\u4EE4\u548C\u670D\u52A1\u3002\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u6307\u4EE4"),u("code",null,"v-loading"),o("\uFF0C\u53EA\u9700\u8981\u7ED1\u5B9A"),u("code",null,"Boolean"),o("\u5373\u53EF\u3002\u9ED8\u8BA4\u72B6\u51B5\u4E0B\uFF0CLoading \u906E\u7F69\u4F1A\u63D2\u5165\u5230\u7ED1\u5B9A\u5143\u7D20\u7684\u5B50\u8282\u70B9\uFF0C\u901A\u8FC7\u6DFB\u52A0"),u("code",null,"body"),o("\u4FEE\u9970\u7B26\uFF0C\u53EF\u4EE5\u4F7F\u906E\u7F69\u63D2\u5165\u81F3 DOM \u4E2D\u7684 body \u4E0A\u3002")])],-1),W=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%"
  >
    <hl-table-column
      prop="date"
      label="\u65E5\u671F"
      width="180"
    />
    <hl-table-column
      prop="name"
      label="\u59D3\u540D"
      width="180"
    />
    <hl-table-column
      prop="address"
      label="\u5730\u5740"
    />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([{
      date: '2016-05-03',
      name: '\u738B\u5C0F\u864E',
      address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
    }, {
      date: '2016-05-02',
      name: '\u738B\u5C0F\u864E',
      address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
    }, {
      date: '2016-05-04',
      name: '\u738B\u5C0F\u864E',
      address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
    }])
    const loading = ref(true)

    return {
      tableData,
      loading,
    }
  },
})
<\/script>

<style>
  body {
    margin: 0;
  }
</style>
`)],-1),X=u("h2",{id:"zi-ding-yi"},[u("a",{class:"header-anchor",href:"#zi-ding-yi"}),o(" \u81EA\u5B9A\u4E49")],-1),Z=u("p",null,"\u53EF\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u6848\u3001\u56FE\u6807\u548C\u80CC\u666F\u8272\u3002",-1),G=u("div",null,[u("p",null,[o("\u5728\u7ED1\u5B9A\u4E86"),u("code",null,"v-loading"),o("\u6307\u4EE4\u7684\u5143\u7D20\u4E0A\u6DFB\u52A0"),u("code",null,"loading-text"),o("\u5C5E\u6027\uFF0C\u5176\u503C\u4F1A\u88AB\u6E32\u67D3\u4E3A\u52A0\u8F7D\u6587\u6848\uFF0C\u5E76\u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u7684\u4E0B\u65B9\u3002\u7C7B\u4F3C\u5730\uFF0C"),u("code",null,"loading-spinner"),o("\u3001"),u("code",null,"loading-background"),o("\u548C"),u("code",null,"loading-svg"),o("\u5C5E\u6027\u5206\u522B\u7528\u6765\u8BBE\u5B9A\u56FE\u6807\u7C7B\u540D\u3001\u80CC\u666F\u8272\u503C\u3001\u52A0\u8F7D\u56FE\u6807\u3002\u5F53loading-spinner\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5C06\u4F1A\u9ED8\u8BA4\u4F7F\u7528Spinner\u7EC4\u4EF6")])],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-table
    v-loading="loading"
    loading-text="\u62FC\u547D\u52A0\u8F7D\u4E2D"
    loading-spinner="spinner"
    loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"
    style="width: 100%;margin-bottom: 10px"
  >
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
  <hl-table
    v-loading="loading"
    :loading-svg="svg"
    class="custom-loading-svg"
    loading-svg-view-box="0, 0, 22, 22"
    :data="tableData"
    style="width: 100%"
  >
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const spinner = ref({ color: 'red' })
    const tableData = ref([{
      date: '2016-05-03',
      name: '\u738B\u5C0F\u864E',
      address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
    }, {
      date: '2016-05-02',
      name: '\u738B\u5C0F\u864E',
      address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
    }, {
      date: '2016-05-04',
      name: '\u738B\u5C0F\u864E',
      address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
    }])
    const loading = ref(true)
    const svg = ref(\`
      <path d="M11,21 C16.5228475,21 21,16.5228475 21,11 C21,10.3293212 20.9339755,9.67406333 20.8080718,9.04037141 C20.1649528,5.80346047 17.9594709,3.12924671 15.0106393,1.83674328 C13.7829108,1.29861717 12.4263283,1 11,1 C5.4771525,1 1,5.4771525 1,11 C1,16.5228475 5.4771525,21 11,21 Z M6,14 C7,16 9,17 11,17 C13,17 15,16 16,14"></path>
    \`)

    return {
      spinner,
      tableData,
      loading,
      svg,
    }
  },
})
<\/script>

`)],-1),J=L('<div class="doc-tip warning"><p><code>loading-svg</code> \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS \u653B\u51FB</a>\u3002\u8BF7\u786E\u4FDD <code>loading-svg</code> \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\uFF0C<strong>\u6C38\u8FDC\u4E0D\u8981</strong>\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9 <code>loading-svg</code> \u5C5E\u6027\u3002</p></div><h2 id="zheng-ye-jia-zai"><a class="header-anchor" href="#zheng-ye-jia-zai"></a> \u6574\u9875\u52A0\u8F7D</h2><p>\u9875\u9762\u6570\u636E\u52A0\u8F7D\u65F6\u663E\u793A\u3002</p>',3),K=u("div",null,[u("p",null,[o("\u5F53\u4F7F\u7528\u6307\u4EE4\u65B9\u5F0F\u65F6\uFF0C\u5168\u5C4F\u906E\u7F69\u9700\u8981\u6DFB\u52A0"),u("code",null,"fullscreen"),o("\u4FEE\u9970\u7B26\uFF08\u906E\u7F69\u4F1A\u63D2\u5165\u81F3 body \u4E0A\uFF09\uFF0C\u6B64\u65F6\u82E5\u9700\u8981\u9501\u5B9A\u5C4F\u5E55\u7684\u6EDA\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"lock"),o("\u4FEE\u9970\u7B26\uFF1B\u5F53\u4F7F\u7528\u670D\u52A1\u65B9\u5F0F\u65F6\uFF0C\u906E\u7F69\u9ED8\u8BA4\u5373\u4E3A\u5168\u5C4F\uFF0C\u65E0\u9700\u989D\u5916\u8BBE\u7F6E\u3002")])],-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    \u6307\u4EE4\u65B9\u5F0F
  </hl-button>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <hl-button
    type="primary"
    @click="openFullScreen2"
  >
    \u670D\u52A1\u65B9\u5F0F
  </hl-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { HlLoading } from 'hongluan-ui'
export default defineComponent({
  setup() {
    const fullscreenLoading = ref(false)
    const openFullScreen1 = () => {
      fullscreenLoading.value = true
      setTimeout(() => {
        fullscreenLoading.value = false
      }, 2000)
    }
    const openFullScreen2 = () => {
      const loading = HlLoading.service({
        lock: true,
        text: 'Loading',
        spinner: { size: '30px', color: 'yellow' },
        background: 'rgba(0, 0, 0, 0.7)',
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }

    return {
      fullscreenLoading,
      openFullScreen1,
      openFullScreen2,
    }
  },
})
<\/script>
`)],-1),uu=L(`<h2 id="fu-wu"><a class="header-anchor" href="#fu-wu"></a> \u670D\u52A1</h2><p>Loading \u8FD8\u53EF\u4EE5\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528\u3002\u5F15\u5165 Loading \u670D\u52A1\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlLoading</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>;
</code></pre><p>\u5728\u9700\u8981\u8C03\u7528\u65F6\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-title class_">HlLoading</span>.<span class="hljs-title function_">service</span>(options);
</code></pre><p>\u5176\u4E2D <code>options</code> \u53C2\u6570\u4E3A Loading \u7684\u914D\u7F6E\u9879\uFF0C\u5177\u4F53\u89C1\u4E0B\u8868\u3002<code>LoadingService</code> \u4F1A\u8FD4\u56DE\u4E00\u4E2A Loading \u5B9E\u4F8B\uFF0C\u53EF\u901A\u8FC7\u8C03\u7528\u8BE5\u5B9E\u4F8B\u7684 <code>close</code> \u65B9\u6CD5\u6765\u5173\u95ED\u5B83\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> loadingInstance = <span class="hljs-title class_">HlLoading</span>.<span class="hljs-title function_">service</span>(options);
<span class="hljs-variable language_">this</span>.$nextTick(<span class="hljs-function">() =&gt;</span> { <span class="hljs-comment">// \u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528\u7684 Loading \u9700\u8981\u5F02\u6B65\u5173\u95ED</span>
  loadingInstance.<span class="hljs-title function_">close</span>();
});
</code></pre><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528\u7684\u5168\u5C4F Loading \u662F\u5355\u4F8B\u7684\uFF1A\u82E5\u5728\u524D\u4E00\u4E2A\u5168\u5C4F Loading \u5173\u95ED\u524D\u518D\u6B21\u8C03\u7528\u5168\u5C4F Loading\uFF0C\u5E76\u4E0D\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Loading \u5B9E\u4F8B\uFF0C\u800C\u662F\u8FD4\u56DE\u73B0\u6709\u5168\u5C4F Loading \u7684\u5B9E\u4F8B\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> loadingInstance1 = <span class="hljs-title class_">HlLoading</span>.<span class="hljs-title function_">service</span>({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });
<span class="hljs-keyword">let</span> loadingInstance2 = <span class="hljs-title class_">HlLoading</span>.<span class="hljs-title function_">service</span>({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(loadingInstance1 === loadingInstance2); <span class="hljs-comment">// true</span>
</code></pre><p>\u6B64\u65F6\u8C03\u7528\u5B83\u4EEC\u4E2D\u4EFB\u610F\u4E00\u4E2A\u7684 <code>close</code> \u65B9\u6CD5\u90FD\u80FD\u5173\u95ED\u8FD9\u4E2A\u5168\u5C4F Loading\u3002</p><p>\u5982\u679C\u5B8C\u6574\u5F15\u5165\u4E86 Element\uFF0C\u90A3\u4E48 <code>app.config.globalProperties</code> \u4E0A\u4F1A\u6709\u4E00\u4E2A\u5168\u5C40\u65B9\u6CD5 <code>$loading</code>\uFF0C\u5B83\u7684\u8C03\u7528\u65B9\u5F0F\u4E3A\uFF1A<code>this.$loading(options)</code>\uFF0C\u540C\u6837\u4F1A\u8FD4\u56DE\u4E00\u4E2A Loading \u5B9E\u4F8B\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>target</td><td>Loading \u9700\u8981\u8986\u76D6\u7684 DOM \u8282\u70B9\u3002\u53EF\u4F20\u5165\u4E00\u4E2A DOM \u5BF9\u8C61\u6216\u5B57\u7B26\u4E32\uFF1B\u82E5\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u5219\u4F1A\u5C06\u5176\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165 <code>document.querySelector</code>\u4EE5\u83B7\u53D6\u5230\u5BF9\u5E94 DOM \u8282\u70B9</td><td>object/string</td><td>\u2014</td><td>document.body</td></tr><tr><td>body</td><td>\u540C <code>v-loading</code> \u6307\u4EE4\u4E2D\u7684 <code>body</code> \u4FEE\u9970\u7B26</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>fullscreen</td><td>\u540C <code>v-loading</code> \u6307\u4EE4\u4E2D\u7684 <code>fullscreen</code> \u4FEE\u9970\u7B26</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>lock</td><td>\u540C <code>v-loading</code> \u6307\u4EE4\u4E2D\u7684 <code>lock</code> \u4FEE\u9970\u7B26</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>text</td><td>\u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u4E0B\u65B9\u7684\u52A0\u8F7D\u6587\u6848</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>spinner</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>background</td><td>\u906E\u7F69\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>custom-class</td><td>Loading \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="directive"><a class="header-anchor" href="#directive"></a> Directive</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>v-loading</td><td>v-loading</td><td>boolean</td></tr><tr><td>loading-text</td><td>\u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u4E0B\u65B9\u7684\u52A0\u8F7D\u6587\u6848</td><td>string</td></tr><tr><td>loading-spinner</td><td>\u5F53\u503C\u4E3A\u5E03\u5C14\u65F6\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u6837\u5F0F\u3002\u503C\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u4F7F\u7528Spinner\u7EC4\u4EF6\u5E76\u4F5C\u4E3A\u5C5E\u6027\u4F20\u5165</td><td>object / boolean</td></tr><tr><td>loading-svg</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807</td><td>string</td></tr><tr><td>loading-background</td><td>\u80CC\u666F\u906E\u7F69\u7684\u989C\u8272</td><td>string</td></tr></tbody></table>`,15);function eu(t,e,n,i,s,p){const F=b("hl-demo0"),c=b("demo-block"),h=b("hl-demo1"),E=b("hl-demo2"),C=b("right-nav");return M(),N(T,null,[u("section",null,[O,P,q,Q,D(c,{fs:""},{source:r(()=>[D(F)]),highlight:r(()=>[W]),default:r(()=>[U]),_:1}),X,Z,D(c,{fs:""},{source:r(()=>[D(h)]),highlight:r(()=>[Y]),default:r(()=>[G]),_:1}),J,D(c,{fs:""},{source:r(()=>[D(E)]),highlight:r(()=>[R]),default:r(()=>[K]),_:1}),uu]),D(C)],64)}var su=V($,[["render",eu]]);export{su as default};
