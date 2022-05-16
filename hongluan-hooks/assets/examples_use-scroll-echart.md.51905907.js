import{o as m,d,a as g,L as h,_ as f,c as k,g as b,i as t,h as v,f as i,j as y}from"./app.cea1df3c.js";import{u as _}from"./index.0598b5ba.js";function C(n,c){let e=null,p=0,s=[];const l=()=>{if(n.showCount>=n.chartData.length)s=n.chartData,c(s);else{if(!(s==null?void 0:s.length)){for(let o=0;o<n.showCount;o++)s.push(n.chartData[o]);p=n.showCount,c(s)}n.scrollCount>0&&r()}},r=()=>{var o;e=window.setInterval(()=>{if(!!e){s.splice(0,n.scrollCount);for(let a=p;a<p+n.scrollCount&&a<n.chartData.length&&s.length<n.showCount;a++)s.push(n.chartData[a]);if(p=p+Math.min(n.scrollCount,n.showCount),s.length<n.showCount)if(n.seamless===!1)p=0;else{p=n.showCount-s.length;for(let a=0;a<p;a++)s.push(n.chartData[a])}c(s)}},(o=n.interval)!=null?o:1e4)},u=()=>{e&&window.clearInterval(e),e=null};return m(()=>{u(),p=0,s=[]}),{startScroll:l,stopScroll:u}}const w=d({setup(){const n=[{label:"2002",value:23},{label:"2004",value:53},{label:"2006",value:63},{label:"2008",value:13},{label:"2010",value:93},{label:"2012",value:50},{label:"2014",value:43},{label:"2016",value:29},{label:"2018",value:43},{label:"2020",value:29}],{chartContainer:c,setChartOption:e,addChartEvent:p}=_(),s=u=>{const o={tooltip:{trigger:"axis",axisPointer:{type:"none"},extraCssText:"border-radius: 0;",formatter:a=>`
          <div style="backgroundColor:#fff;borderRaduis:0">
            ${a[0].marker}
            <span>${a[0].axisValue} <span style="font-weight: bold; margin-left: 30px">${a[0].value}</span></span>
          </div>
          `},grid:{top:"10",left:"0%",right:"0%",bottom:"0%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1,lineStyle:{type:"solid",color:"#2B394E"}},axisLabel:{fontSize:12,color:"#6F8EA8",lineHeight:20,margin:5},axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#2B394E"}},data:u.map(a=>a.label)},yAxis:{type:"value",splitNumber:3,splitLine:{show:!0,lineStyle:{type:"solid",color:"#2B394E"}},axisLabel:{fontSize:12,color:"#6F8EA8",lineHeight:20}},series:[{itemStyle:{color:new h(0,0,0,1,[{offset:0,color:"#71F8FC"},{offset:1,color:"rgba(0,250,255,0.16)"}]),borderRadius:[2,2,0,0]},barWidth:16,showBackground:!0,backgroundStyle:{color:"rgba(56,75,103,0.16)"},data:u.map(a=>a.value),type:"bar"}]};e(o)},{startScroll:l,stopScroll:r}=C({showCount:6,scrollCount:2,interval:5e3,chartData:n},s);return g(()=>{l(),p("mouseover",r),p("mouseout",l)}),{chartContainer:c}}}),x={ref:"chartContainer",class:"echart-container"};function S(n,c,e,p,s,l){return k(),b("div",x,null,512)}var E=f(w,[["render",S],["__scopeId","data-v-51de323a"]]);const D=t("h3",{id:"\u8BF4\u660E",tabindex:"-1"},[i("\u8BF4\u660E "),t("a",{class:"header-anchor",href:"#\u8BF4\u660E","aria-hidden":"true"},"#")],-1),L=t("p",null,[i("\u5B9A\u65F6\u6EDA\u52A8EChart\u7684\u6570\u636E\uFF0C\u63D0\u4F9B\u53EF\u81EA\u52A8\u6EDA\u52A8\u7684\u56FE\u8868\u6570\u636E"),t("br"),t("br")],-1),q=t("h4",{id:"\u793A\u4F8B",tabindex:"-1"},[i("\u793A\u4F8B "),t("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#")],-1),B={style:{background:"rgba(14, 23, 38, 0.96)",padding:"15px"}},T=t("br",null,null,-1),$=t("br",null,null,-1),A=y(`<h4 id="\u51FD\u6570\u5B9A\u4E49" tabindex="-1">\u51FD\u6570\u5B9A\u4E49 <a class="header-anchor" href="#\u51FD\u6570\u5B9A\u4E49" aria-hidden="true">#</a></h4><div class="language-typescript line-numbers-mode"><pre><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  showCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u6BCF\u6B21\u663E\u793A\u7684\u6570\u91CF</span>
  scrollCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u6BCF\u6B21\u5411\u540E\u6EDA\u52A8\u7684\u6570\u91CF</span>
  interval<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u6EDA\u52A8\u95F4\u9694\uFF0C\u9ED8\u8BA410000ms</span>
  seamless<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// \u662F\u5426\u65E0\u7F1D\u6EDA\u52A8\uFF0C\u9ED8\u8BA4true</span>
  chartData<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u56FE\u8868\u6570\u636E</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span>chartData<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">startScroll</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token comment">// \u5F00\u59CB\u6EDA\u52A8</span>
  <span class="token function-variable function">stopScroll</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token comment">// \u505C\u6B62\u6EDA\u52A8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="demo\u4EE3\u7801" tabindex="-1">Demo\u4EE3\u7801 <a class="header-anchor" href="#demo\u4EE3\u7801" aria-hidden="true">#</a></h4><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">show-source</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartContainer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echart-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEChart<span class="token punctuation">,</span> useScrollEChartData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> chartData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2002&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2004&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">53</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2006&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">63</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2008&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2010&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">93</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2012&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2014&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">43</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2016&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">29</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2018&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">43</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;2020&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">29</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> chartContainer<span class="token punctuation">,</span> setChartOption<span class="token punctuation">,</span> addChartEvent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">renderChart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">chartData<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
          trigger<span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
          axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          extraCssText<span class="token operator">:</span> <span class="token string">&#39;border-radius: 0;&#39;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div style=&quot;backgroundColor:#fff;borderRaduis:0&quot;&gt;
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>marker<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
            &lt;span&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axisValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;span style=&quot;font-weight: bold; margin-left: 30px&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span&gt;&lt;/span&gt;
          &lt;/div&gt;
          </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        grid<span class="token operator">:</span> <span class="token punctuation">{</span>
          top<span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
          left<span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
          right<span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
          bottom<span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
          containLabel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
          splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span><span class="token punctuation">,</span>
              color<span class="token operator">:</span> <span class="token string">&#39;#2B394E&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#6F8EA8&#39;</span><span class="token punctuation">,</span>
            lineHeight<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            margin<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            alignWithLabel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&#39;#2B394E&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> chartData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">d</span> <span class="token operator">=&gt;</span> d<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
          splitNumber<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span><span class="token punctuation">,</span>
              color<span class="token operator">:</span> <span class="token string">&#39;#2B394E&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#6F8EA8&#39;</span><span class="token punctuation">,</span>
            lineHeight<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        series<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">&#39;#71F8FC&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">&#39;rgba(0,250,255,0.16)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              borderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            barWidth<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
            showBackground<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            backgroundStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&#39;rgba(56,75,103,0.16)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> chartData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">d</span> <span class="token operator">=&gt;</span> d<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token function">setChartOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> startScroll<span class="token punctuation">,</span> stopScroll <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useScrollEChartData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showCount<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      scrollCount<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      interval<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
      chartData<span class="token operator">:</span> chartData<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> renderChart<span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">startScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">addChartEvent</span><span class="token punctuation">(</span><span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">,</span> stopScroll<span class="token punctuation">)</span>
      <span class="token function">addChartEvent</span><span class="token punctuation">(</span><span class="token string">&#39;mouseout&#39;</span><span class="token punctuation">,</span> startScroll<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      chartContainer<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.echart-container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br></div></div>`,4),j='{"title":"useScrollEChart","description":"","frontmatter":{"title":"useScrollEChart"},"headers":[{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"}],"relativePath":"examples/use-scroll-echart.md","lastUpdated":1637907342579}',F={};function V(n){return(c,e)=>(k(),b("div",null,[D,L,q,t("div",B,[v(E),T,$]),A]))}const P=Object.assign(F,{setup:V});export{j as __pageData,P as default};
