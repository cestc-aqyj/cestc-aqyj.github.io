var x=Object.defineProperty;var y=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(t,n,e)=>n in t?x(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,k=(t,n)=>{for(var e in n||(n={}))V.call(n,e)&&v(t,e,n[e]);if(y)for(var e of y(n))N.call(n,e)&&v(t,e,n[e]);return t};import{H as f,o as T,C as L,D as u,v as C,M as c,av as _,_ as o,au as j}from"./vue.450bc1d0.js";import{_ as $,H}from"./index.fedb9125.js";import{H as U}from"./hongluan-icons.7d79c200.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";const I={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:t,resolveComponent:n,withCtx:e,createVNode:s,Fragment:m,openBlock:B,createElementBlock:i}=_,d=t("\u6253\u5F00\u6D88\u606F\u63D0\u793A"),E=t("VNode");function h(r,l){const D=n("hl-button");return B(),i(m,null,[s(D,{class:"m-r-md",onClick:r.open},{default:e(()=>[d]),_:1},8,["onClick"]),s(D,{onClick:r.openVn},{default:e(()=>[E]),_:1},8,["onClick"])],64)}const{defineComponent:p,h:a}=_,{HlMessage:F}=H,g=p({setup(){return{open(){F("\u53EA\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A")},openVn(){F({message:a("p",null,[a("span",null,"\u5185\u5BB9\u53EF\u4EE5\u662F "),a("i",{style:"color: teal"},"VNode")])})}}}});return k({render:h},g)}(),"hl-demo1":function(){const{createTextVNode:t,resolveComponent:n,withCtx:e,createVNode:s,Fragment:m,openBlock:B,createElementBlock:i}=_,d=t("\u6210\u529F"),E=t("\u8B66\u544A"),h=t("\u6D88\u606F"),p=t("\u9519\u8BEF"),a=t("\u81EA\u5B9A\u4E49icon");function F(b,Fu){const M=n("hl-button");return B(),i(m,null,[s(M,{class:"m-r-md",onClick:b.open1},{default:e(()=>[d]),_:1},8,["onClick"]),s(M,{class:"m-r-md",onClick:b.open2},{default:e(()=>[E]),_:1},8,["onClick"]),s(M,{class:"m-r-md",onClick:b.open3},{default:e(()=>[h]),_:1},8,["onClick"]),s(M,{class:"m-r-md",onClick:b.open4},{default:e(()=>[p]),_:1},8,["onClick"]),s(M,{onClick:b.open5},{default:e(()=>[a]),_:1},8,["onClick"])],64)}const{defineComponent:g,h:r}=_,{HlMessage:l,HlIcon:D}=H,{Airplay:A}=U,w=g({setup(){return{open1(){l({type:"success",duration:5e3,showClose:!0,message:"\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F"})},open2(){l.warning({message:"\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F"})},open3(){l("\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A")},open4(){l.error("\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F")},open5(){l({duration:5e3,icon:r(D,{size:"xl"},{default:()=>[r(A)]}),message:"\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6D88\u606F"})}}}});return k({render:F},w)}(),"hl-demo2":function(){const{createTextVNode:t,resolveComponent:n,withCtx:e,createVNode:s,Fragment:m,openBlock:B,createElementBlock:i}=_,d=t("\u6D88\u606F"),E=t("\u6210\u529F"),h=t("\u8B66\u544A"),p=t("\u9519\u8BEF");function a(l,D){const A=n("hl-button");return B(),i(m,null,[s(A,{class:"m-r-md",onClick:l.open1},{default:e(()=>[d]),_:1},8,["onClick"]),s(A,{class:"m-r-md",onClick:l.open2},{default:e(()=>[E]),_:1},8,["onClick"]),s(A,{class:"m-r-md",onClick:l.open3},{default:e(()=>[h]),_:1},8,["onClick"]),s(A,{onClick:l.open4},{default:e(()=>[p]),_:1},8,["onClick"])],64)}const{defineComponent:F}=_,{HlMessage:g}=H,r=F({setup(){return{open1(){g({showClose:!0,message:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A",duration:3e5})},open2(){g({showClose:!0,message:"\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F",type:"success"})},open3(){g({showClose:!0,message:"\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F",type:"warning"})},open4(){g({showClose:!0,message:"\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F",type:"error"})}}}});return k({render:a},r)}(),"hl-demo3":function(){const{createTextVNode:t,resolveComponent:n,withCtx:e,createVNode:s,Fragment:m,openBlock:B,createElementBlock:i}=_,d=t("\u5C45\u5DE6\u5BF9\u9F50\u65B9\u5F0F"),E=t("\u5C45\u4E2D\u5BF9\u9F50\u65B9\u5F0F"),h=t("\u5C45\u53F3\u5BF9\u9F50\u65B9\u5F0F");function p(r,l){const D=n("hl-button");return B(),i(m,null,[s(D,{class:"m-r-md",onClick:l[0]||(l[0]=A=>r.openCenter("left"))},{default:e(()=>[d]),_:1}),s(D,{class:"m-r-md",onClick:l[1]||(l[1]=A=>r.openCenter("center"))},{default:e(()=>[E]),_:1}),s(D,{onClick:l[2]||(l[2]=A=>r.openCenter("right"))},{default:e(()=>[h]),_:1})],64)}const{defineComponent:a}=_,{HlMessage:F}=H,g=a({setup(){return{openCenter(r){F({message:"\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F",textAlign:r})}}}});return k({render:p},g)}(),"hl-demo4":function(){const{createTextVNode:t,resolveComponent:n,withCtx:e,openBlock:s,createBlock:m}=_,B=t("\u4F7F\u7528 HTML \u7247\u6BB5");function i(p,a){const F=n("hl-button");return s(),m(F,{onClick:p.openHTML},{default:e(()=>[B]),_:1},8,["onClick"])}const{defineComponent:d}=_,{HlMessage:E}=H,h=d({setup(){return{openHTML(){E({dangerouslyUseHTMLString:!0,message:"<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>"})}}}});return k({render:i},h)}()}},S={class:"doc-main-content"},z={class:"doc-content"},q=u("h1",null,"Message \u6D88\u606F\u63D0\u793A",-1),P=u("p",null,"\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002\u4E0E Notification \u7684\u533A\u522B\u662F\u540E\u8005\u66F4\u591A\u7528\u4E8E\u7CFB\u7EDF\u7EA7\u901A\u77E5\u7684\u88AB\u52A8\u63D0\u9192\u3002",-1),W=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),o(" \u57FA\u7840\u7528\u6CD5")],-1),X=u("p",null,"\u4ECE\u9876\u90E8\u51FA\u73B0\uFF0C3 \u79D2\u540E\u81EA\u52A8\u6D88\u5931\u3002",-1),G=u("div",null,[u("p",null,[o("Message \u5728\u914D\u7F6E\u4E0A\u4E0E Notification \u975E\u5E38\u7C7B\u4F3C\uFF0C\u6240\u4EE5\u90E8\u5206 options \u5728\u6B64\u4E0D\u505A\u8BE6\u5C3D\u89E3\u91CA\uFF0C\u6587\u672B\u6709 options \u5217\u8868\uFF0C\u53EF\u4EE5\u7ED3\u5408 Notification \u7684\u6587\u6863\u7406\u89E3\u5B83\u4EEC\u3002Hongluan UI \u6CE8\u518C\u4E86\u4E00\u4E2A"),u("code",null,"$message"),o("\u65B9\u6CD5\u7528\u4E8E\u8C03\u7528\uFF0CMessage \u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A VNode \u4F5C\u4E3A\u53C2\u6570\uFF0C\u5B83\u4F1A\u88AB\u663E\u793A\u4E3A\u6B63\u6587\u5185\u5BB9\u3002")])],-1),J=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="open">\u6253\u5F00\u6D88\u606F\u63D0\u793A</hl-button>
  <hl-button @click="openVn">VNode</hl-button>
</template>

<script>
import { defineComponent, h } from 'vue'
import { HlMessage } from 'hongluan-ui'
export default defineComponent ({
  setup() {
    return {
      open() {
        HlMessage('\u53EA\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A')
      },
      openVn() {
        HlMessage({
          message: h('p', null, [
            h('span', null, '\u5185\u5BB9\u53EF\u4EE5\u662F '),
            h('i', { style: 'color: teal' }, 'VNode'),
          ]),
        })
      },
    }
  },
})
<\/script>
`)],-1),K=u("h2",{id:"bu-tong-zhuang-tai"},[u("a",{class:"header-anchor",href:"#bu-tong-zhuang-tai"}),o(" \u4E0D\u540C\u72B6\u6001")],-1),O=u("p",null,"\u7528\u6765\u663E\u793A\u300C\u6210\u529F\u3001\u8B66\u544A\u3001\u6D88\u606F\u3001\u9519\u8BEF\u300D\u7C7B\u7684\u64CD\u4F5C\u53CD\u9988\u3002",-1),Q=u("div",null,[u("p",null,[o("\u5F53\u9700\u8981\u81EA\u5B9A\u4E49\u66F4\u591A\u5C5E\u6027\u65F6\uFF0CMessage \u4E5F\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u4E3A\u53C2\u6570\u3002\u6BD4\u5982\uFF0C\u8BBE\u7F6E"),u("code",null,"type"),o("\u5B57\u6BB5\u53EF\u4EE5\u5B9A\u4E49\u4E0D\u540C\u7684\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A"),u("code",null,"info"),o("\u3002\u6B64\u65F6\u6B63\u6587\u5185\u5BB9\u4EE5"),u("code",null,"message"),o("\u7684\u503C\u4F20\u5165\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u4E3A Message \u7684\u5404\u79CD type \u6CE8\u518C\u4E86\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E0D\u4F20\u5165"),u("code",null,"type"),o("\u5B57\u6BB5\u7684\u60C5\u51B5\u4E0B\u50CF"),u("code",null,"open4"),o("\u51FD\u6570\u90A3\u6837\u76F4\u63A5\u8C03\u7528\u3002")])],-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="open1">\u6210\u529F</hl-button>
  <hl-button class="m-r-md" @click="open2">\u8B66\u544A</hl-button>
  <hl-button class="m-r-md" @click="open3">\u6D88\u606F</hl-button>
  <hl-button class="m-r-md" @click="open4">\u9519\u8BEF</hl-button>
  <hl-button @click="open5">\u81EA\u5B9A\u4E49icon</hl-button>
</template>

<script>
import { defineComponent, h } from 'vue'
import { HlMessage, HlIcon } from 'hongluan-ui'
import { Airplay } from '@hongluan-ui/icons'

export default defineComponent({
  setup() {
    return {
      open1() {
        HlMessage({
          type: 'success',
          duration: 5000,
          showClose: true,
          message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
        })
      },
      open2() {
        HlMessage.warning({
          message: '\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F',
        })
      },
      open3() {
        HlMessage('\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A')
      },
      open4() {
        HlMessage.error('\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F')
      },
      open5() {
        HlMessage({
          duration: 5000,
          icon: h(HlIcon, {
            size: 'xl',
          }, {
            default: () => [h(Airplay)],
          }),
          message: '\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6D88\u606F',
        })
      },
    }
  },
})
<\/script>
`)],-1),Y=u("h2",{id:"ke-guan-bi"},[u("a",{class:"header-anchor",href:"#ke-guan-bi"}),o(" \u53EF\u5173\u95ED")],-1),Z=u("p",null,"\u53EF\u4EE5\u6DFB\u52A0\u5173\u95ED\u6309\u94AE\u3002",-1),uu=u("div",null,[u("p",null,[o("\u9ED8\u8BA4\u7684 Message \u662F\u4E0D\u53EF\u4EE5\u88AB\u4EBA\u5DE5\u5173\u95ED\u7684\uFF0C\u5982\u679C\u9700\u8981\u53EF\u624B\u52A8\u5173\u95ED\u7684 Message\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"showClose"),o("\u5B57\u6BB5\u3002\u6B64\u5916\uFF0C\u548C Notification \u4E00\u6837\uFF0CMessage \u62E5\u6709\u53EF\u63A7\u7684"),u("code",null,"duration"),o("\uFF0C\u8BBE\u7F6E"),u("code",null,"0"),o("\u4E3A\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED\uFF0C\u9ED8\u8BA4\u4E3A 3000 \u6BEB\u79D2\u3002")])],-1),eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="open1">\u6D88\u606F</hl-button>
  <hl-button class="m-r-md" @click="open2">\u6210\u529F</hl-button>
  <hl-button class="m-r-md" @click="open3">\u8B66\u544A</hl-button>
  <hl-button @click="open4">\u9519\u8BEF</hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlMessage } from 'hongluan-ui'

export default defineComponent({
  setup() {
    return {
      open1() {
        HlMessage({
          showClose: true,
          message: '\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A',
          duration: 300000,
        })
      },

      open2() {
        HlMessage({
          showClose: true,
          message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
          type: 'success',
        })
      },

      open3() {
        HlMessage({
          showClose: true,
          message: '\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F',
          type: 'warning',
        })
      },

      open4() {
        HlMessage({
          showClose: true,
          message: '\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F',
          type: 'error',
        })
      },
    }
  },
})
<\/script>
`)],-1),tu=u("h2",{id:"wen-zi-dui-qi-fang-shi"},[u("a",{class:"header-anchor",href:"#wen-zi-dui-qi-fang-shi"}),o(" \u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F")],-1),ou=u("p",null,[o("\u4F7F\u7528 "),u("code",null,"textAlign"),o("\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A"),u("code",null,"left"),o(","),u("code",null,"right"),o(","),u("code",null,"center"),o("\uFF0C\u9ED8\u8BA4\u503C\u4E3A"),u("code",null,"left")],-1),nu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="openCenter('left')">\u5C45\u5DE6\u5BF9\u9F50\u65B9\u5F0F</hl-button>
  <hl-button class="m-r-md" @click="openCenter('center')">\u5C45\u4E2D\u5BF9\u9F50\u65B9\u5F0F</hl-button>
  <hl-button @click="openCenter('right')">\u5C45\u53F3\u5BF9\u9F50\u65B9\u5F0F</hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlMessage } from 'hongluan-ui'
export default defineComponent({
  setup() {
    return {
      openCenter(align) {
        HlMessage({
          message: \`\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\`,
          textAlign: align,
        })
      },
    }
  },
})
<\/script>
`)],-1),su=u("h2",{id:"shi-yong-html-pian-duan"},[u("a",{class:"header-anchor",href:"#shi-yong-html-pian-duan"}),o(" \u4F7F\u7528 HTML \u7247\u6BB5")],-1),lu=u("p",null,[u("code",null,"message"),o(" \u5C5E\u6027\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5")],-1),du=u("div",null,[u("p",null,[o("\u5C06"),u("code",null,"dangerouslyUseHTMLString"),o("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),u("code",null,"message"),o(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")])],-1),cu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button @click="openHTML">\u4F7F\u7528 HTML \u7247\u6BB5</hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlMessage } from 'hongluan-ui'
export default defineComponent({
  setup() {
    return {
      openHTML() {
        HlMessage({
          dangerouslyUseHTMLString: true,
          message: '<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>',
        })
      },
    }
  },
})
<\/script>
`)],-1),ru=j(`<div class="md-warning"><p><code>message</code> \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS \u653B\u51FB</a>\u3002\u56E0\u6B64\u5728 <code>dangerouslyUseHTMLString</code> \u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u786E\u4FDD <code>message</code> \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\uFF0C<strong>\u6C38\u8FDC\u4E0D\u8981</strong>\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9 <code>message</code> \u5C5E\u6027\u3002</p></div><h2 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa"></a> \u5168\u5C40\u65B9\u6CD5</h2><p>Hongluan UI \u4E3A <code>app.config.globalProperties</code> \u6DFB\u52A0\u4E86\u5168\u5C40\u65B9\u6CD5 $message\u3002\u56E0\u6B64\u5728 vue instance \u4E2D\u53EF\u4EE5\u91C7\u7528\u5728 method \u4E2D\u8C03\u7528 <code>this.$message</code> \u65B9\u6CD5\u5524\u8D77 <code>HlMessage</code>\u3002</p><h2 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong"></a> \u5355\u72EC\u5F15\u7528</h2><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { HlMessage } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>;
</code></pre><p>\u6B64\u65F6\u8C03\u7528\u65B9\u6CD5\u4E3A <code>HlMessage(options)</code>\u3002\u6211\u4EEC\u4E5F\u4E3A\u6BCF\u4E2A type \u5B9A\u4E49\u4E86\u5404\u81EA\u7684\u65B9\u6CD5\uFF0C\u5982 <code>HlMessage.success(options)</code>\u3002\u5E76\u4E14\u53EF\u4EE5\u8C03\u7528 <code>HlMessage.closeAll()</code> \u624B\u52A8\u5173\u95ED\u6240\u6709\u5B9E\u4F8B\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u6D88\u606F\u6587\u5B57</td><td>string / VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u4E3B\u9898</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>customClass</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>duration</td><td>\u663E\u793A\u65F6\u95F4, \u6BEB\u79D2\u3002\u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>\u2014</td><td>3000</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>textAlign</td><td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570, \u53C2\u6570\u4E3A\u88AB\u5173\u95ED\u7684 message \u5B9E\u4F8B</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>offset</td><td>Message \u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>20</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Etype\u5B9A\u4E49\u7684icon</td><td>VNode</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p>\u8C03\u7528 <code>HlMessage</code> \u6216 <code>this.$message</code> \u4F1A\u8FD4\u56DE\u5F53\u524D Message \u7684\u5B9E\u4F8B\u3002\u5982\u679C\u9700\u8981\u624B\u52A8\u5173\u95ED\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u8C03\u7528\u5B83\u7684 <code>close</code> \u65B9\u6CD5\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u5F53\u524D\u7684 Message</td></tr></tbody></table>`,11);function au(t,n,e,s,m,B){const i=f("hl-demo0"),d=f("demo-block"),E=f("hl-demo1"),h=f("hl-demo2"),p=f("hl-demo3"),a=f("hl-demo4"),F=f("right-nav");return T(),L("section",S,[u("div",z,[q,P,W,X,C(d,{fs:""},{source:c(()=>[C(i)]),highlight:c(()=>[J]),default:c(()=>[G]),_:1}),K,O,C(d,{fs:""},{source:c(()=>[C(E)]),highlight:c(()=>[R]),default:c(()=>[Q]),_:1}),Y,Z,C(d,{fs:""},{source:c(()=>[C(h)]),highlight:c(()=>[eu]),default:c(()=>[uu]),_:1}),tu,ou,C(d,{fs:""},{source:c(()=>[C(p)]),highlight:c(()=>[nu]),_:1}),su,lu,C(d,{fs:""},{source:c(()=>[C(a)]),highlight:c(()=>[cu]),default:c(()=>[du]),_:1}),ru]),C(F)])}var Bu=$(I,[["render",au]]);export{Bu as default};
