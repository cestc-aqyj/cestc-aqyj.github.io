var N=Object.defineProperty;var T=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var V=(o,s,e)=>s in o?N(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,M=(o,s)=>{for(var e in s||(s={}))j.call(s,e)&&V(o,e,s[e]);if(T)for(var e of T(s))L.call(s,e)&&V(o,e,s[e]);return o};import{H as k,L as S,W as $,Q as u,X as m,P as d,a4 as I,S as t,o as x,aL as C}from"./vue.8f5537c1.js";import{_ as P,H as y}from"./index.417b30ee.js";import{H as U}from"./hongluan-icons.35255449.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";const z={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:o,resolveComponent:s,withCtx:e,createVNode:l,Fragment:g,openBlock:D,createElementBlock:B}=C,c=o("\u6253\u5F00\u6D88\u606F\u63D0\u793A"),p=o("VNode");function A(E,n){const _=s("hl-button");return D(),B(g,null,[l(_,{class:"m-r-md",onClick:E.open},{default:e(()=>[c]),_:1},8,["onClick"]),l(_,{onClick:E.openVn},{default:e(()=>[p]),_:1},8,["onClick"])],64)}const{defineComponent:i}=C,{h:a}=C,{HlMessage:r}=y;return M({render:A},i({setup(E,{expose:n}){n();const H={open:()=>{r("\u53EA\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A")},openVn:()=>{r({message:a("p",null,[a("span",null,"\u5185\u5BB9\u53EF\u4EE5\u662F "),a("i",{style:"color: teal"},"VNode")])})},h:a,HlMessage:r};return Object.defineProperty(H,"__isScriptSetup",{enumerable:!1,value:!0}),H}}))}(),"hl-demo1":function(){const{createTextVNode:o,resolveComponent:s,withCtx:e,createVNode:l,Fragment:g,openBlock:D,createElementBlock:B}=C,c=o("\u6210\u529F"),p=o("\u8B66\u544A"),A=o("\u6D88\u606F"),i=o("\u9519\u8BEF"),a=o("\u81EA\u5B9A\u4E49icon");function r(b,w){const f=s("hl-button");return D(),B(g,null,[l(f,{class:"m-r-md",onClick:b.open1},{default:e(()=>[c]),_:1},8,["onClick"]),l(f,{class:"m-r-md",onClick:b.open2},{default:e(()=>[p]),_:1},8,["onClick"]),l(f,{class:"m-r-md",onClick:b.open3},{default:e(()=>[A]),_:1},8,["onClick"]),l(f,{class:"m-r-md",onClick:b.open4},{default:e(()=>[i]),_:1},8,["onClick"]),l(f,{onClick:b.open5},{default:e(()=>[a]),_:1},8,["onClick"])],64)}const{defineComponent:F}=C,{h:E}=C,{HlMessage:n,HlIcon:_}=y,{TwoAirplay:h}=U;return M({render:r},F({setup(b,{expose:w}){w();const v={open1:()=>{n({type:"success",duration:5e3,showClose:!0,message:"\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F"})},open2:()=>{n.warning({message:"\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F"})},open3:()=>{n("\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A")},open4:()=>{n.error("\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F")},open5:()=>{n({duration:5e3,icon:E(_,{size:"xl"},{default:()=>[E(h)]}),message:"\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6D88\u606F"})},h:E,HlMessage:n,HlIcon:_,TwoAirplay:h};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}))}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:s,withCtx:e,createVNode:l,Fragment:g,openBlock:D,createElementBlock:B}=C,c=o("\u6D88\u606F"),p=o("\u6210\u529F"),A=o("\u8B66\u544A"),i=o("\u9519\u8BEF");function a(n,_){const h=s("hl-button");return D(),B(g,null,[l(h,{class:"m-r-md",onClick:n.open1},{default:e(()=>[c]),_:1},8,["onClick"]),l(h,{class:"m-r-md",onClick:n.open2},{default:e(()=>[p]),_:1},8,["onClick"]),l(h,{class:"m-r-md",onClick:n.open3},{default:e(()=>[A]),_:1},8,["onClick"]),l(h,{onClick:n.open4},{default:e(()=>[i]),_:1},8,["onClick"])],64)}const{defineComponent:r}=C,{HlMessage:F}=y;return M({render:a},r({setup(n,{expose:_}){_();const f={open1:()=>{F({showClose:!0,message:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A",duration:3e5})},open2:()=>{F({showClose:!0,message:"\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F",type:"success"})},open3:()=>{F({showClose:!0,message:"\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F",type:"warning"})},open4:()=>{F({showClose:!0,message:"\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F",type:"error"})},HlMessage:F};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}(),"hl-demo3":function(){const{createTextVNode:o,resolveComponent:s,withCtx:e,createVNode:l,Fragment:g,openBlock:D,createElementBlock:B}=C,c=o("\u5C45\u5DE6\u5BF9\u9F50\u65B9\u5F0F"),p=o("\u5C45\u4E2D\u5BF9\u9F50\u65B9\u5F0F"),A=o("\u5C45\u53F3\u5BF9\u9F50\u65B9\u5F0F");function i(E,n){const _=s("hl-button");return D(),B(g,null,[l(_,{class:"m-r-md",onClick:n[0]||(n[0]=h=>E.openCenter("left"))},{default:e(()=>[c]),_:1}),l(_,{class:"m-r-md",onClick:n[1]||(n[1]=h=>E.openCenter("center"))},{default:e(()=>[p]),_:1}),l(_,{onClick:n[2]||(n[2]=h=>E.openCenter("right"))},{default:e(()=>[A]),_:1})],64)}const{defineComponent:a}=C,{HlMessage:r}=y;return M({render:i},a({setup(E,{expose:n}){n();const h={openCenter:H=>{r({message:"\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F",textAlign:H})},HlMessage:r};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}))}(),"hl-demo4":function(){const{createTextVNode:o,resolveComponent:s,withCtx:e,openBlock:l,createBlock:g}=C,D=o("\u4F7F\u7528 HTML \u7247\u6BB5");function B(i,a){const r=s("hl-button");return l(),g(r,{onClick:i.openHTML},{default:e(()=>[D]),_:1},8,["onClick"])}const{defineComponent:c}=C,{HlMessage:p}=y;return M({render:B},c({setup(i,{expose:a}){a();const F={openHTML:()=>{p({dangerouslyUseHTMLString:!0,message:"<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>"})},HlMessage:p};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}(),"hl-demo5":function(){const{createTextVNode:o,resolveComponent:s,withCtx:e,openBlock:l,createBlock:g}=C,D=o("\u6253\u5F00\u6D88\u606F\u63D0\u793A");function B(i,a){const r=s("hl-button");return l(),g(r,{class:"m-r-md",onClick:i.open},{default:e(()=>[D]),_:1},8,["onClick"])}const{defineComponent:c}=C,{HlMessage:p}=y;return M({render:B},c({setup(i,{expose:a}){a();const F={open:()=>{p({message:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F.",grouping:!0,type:"success",duration:5e3})},HlMessage:p};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}))}()}},O=u("h1",null,"Message \u6D88\u606F\u63D0\u793A",-1),q=u("p",null,"\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002\u4E0E Notification \u7684\u533A\u522B\u662F\u540E\u8005\u66F4\u591A\u7528\u4E8E\u7CFB\u7EDF\u7EA7\u901A\u77E5\u7684\u88AB\u52A8\u63D0\u9192\u3002",-1),X=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),t(" \u57FA\u7840\u7528\u6CD5")],-1),Q=u("p",null,"\u4ECE\u9876\u90E8\u51FA\u73B0\uFF0C3 \u79D2\u540E\u81EA\u52A8\u6D88\u5931\u3002",-1),W=u("div",null,[u("p",null,[t("Message \u5728\u914D\u7F6E\u4E0A\u4E0E Notification \u975E\u5E38\u7C7B\u4F3C\uFF0C\u6240\u4EE5\u90E8\u5206 options \u5728\u6B64\u4E0D\u505A\u8BE6\u5C3D\u89E3\u91CA\uFF0C\u6587\u672B\u6709 options \u5217\u8868\uFF0C\u53EF\u4EE5\u7ED3\u5408 Notification \u7684\u6587\u6863\u7406\u89E3\u5B83\u4EEC\u3002Hongluan UI \u6CE8\u518C\u4E86\u4E00\u4E2A"),u("code",null,"$message"),t("\u65B9\u6CD5\u7528\u4E8E\u8C03\u7528\uFF0CMessage \u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A VNode \u4F5C\u4E3A\u53C2\u6570\uFF0C\u5B83\u4F1A\u88AB\u663E\u793A\u4E3A\u6B63\u6587\u5185\u5BB9\u3002")])],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="open">\u6253\u5F00\u6D88\u606F\u63D0\u793A</hl-button>
  <hl-button @click="openVn">VNode</hl-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { HlMessage } from 'hongluan-ui'

const open = () => {
  HlMessage('\u53EA\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A')
}
const openVn = () => {
  HlMessage({
    message: h('p', null, [
      h('span', null, '\u5185\u5BB9\u53EF\u4EE5\u662F '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

<\/script>
`)],-1),J=u("h2",{id:"bu-tong-zhuang-tai"},[u("a",{class:"header-anchor",href:"#bu-tong-zhuang-tai"}),t(" \u4E0D\u540C\u72B6\u6001")],-1),K=u("p",null,"\u7528\u6765\u663E\u793A\u300C\u6210\u529F\u3001\u8B66\u544A\u3001\u6D88\u606F\u3001\u9519\u8BEF\u300D\u7C7B\u7684\u64CD\u4F5C\u53CD\u9988\u3002",-1),R=u("div",null,[u("p",null,[t("\u5F53\u9700\u8981\u81EA\u5B9A\u4E49\u66F4\u591A\u5C5E\u6027\u65F6\uFF0CMessage \u4E5F\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u4E3A\u53C2\u6570\u3002\u6BD4\u5982\uFF0C\u8BBE\u7F6E"),u("code",null,"type"),t("\u5B57\u6BB5\u53EF\u4EE5\u5B9A\u4E49\u4E0D\u540C\u7684\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A"),u("code",null,"info"),t("\u3002\u6B64\u65F6\u6B63\u6587\u5185\u5BB9\u4EE5"),u("code",null,"message"),t("\u7684\u503C\u4F20\u5165\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u4E3A Message \u7684\u5404\u79CD type \u6CE8\u518C\u4E86\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E0D\u4F20\u5165"),u("code",null,"type"),t("\u5B57\u6BB5\u7684\u60C5\u51B5\u4E0B\u50CF"),u("code",null,"open4"),t("\u51FD\u6570\u90A3\u6837\u76F4\u63A5\u8C03\u7528\u3002")])],-1),Y=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="open1">\u6210\u529F</hl-button>
  <hl-button class="m-r-md" @click="open2">\u8B66\u544A</hl-button>
  <hl-button class="m-r-md" @click="open3">\u6D88\u606F</hl-button>
  <hl-button class="m-r-md" @click="open4">\u9519\u8BEF</hl-button>
  <hl-button @click="open5">\u81EA\u5B9A\u4E49icon</hl-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { HlMessage, HlIcon } from 'hongluan-ui'
import { TwoAirplay } from '@hongluan-ui/icons'

const open1 = () => {
  HlMessage({
    type: 'success',
    duration: 5000,
    showClose: true,
    message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
  })
}
const open2 = () => {
  HlMessage.warning({
    message: '\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F',
  })
}
const open3 = () => {
  HlMessage('\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A')
}
const open4 = () => {
  HlMessage.error('\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F')
}
const open5 = () => {
  HlMessage({
    duration: 5000,
    icon: h(HlIcon, {
      size: 'xl',
    }, {
      default: () => [h(TwoAirplay)],
    }),
    message: '\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6D88\u606F',
  })
}

<\/script>
`)],-1),Z=u("h2",{id:"ke-guan-bi"},[u("a",{class:"header-anchor",href:"#ke-guan-bi"}),t(" \u53EF\u5173\u95ED")],-1),uu=u("p",null,"\u53EF\u4EE5\u6DFB\u52A0\u5173\u95ED\u6309\u94AE\u3002",-1),eu=u("div",null,[u("p",null,[t("\u9ED8\u8BA4\u7684 Message \u662F\u4E0D\u53EF\u4EE5\u88AB\u4EBA\u5DE5\u5173\u95ED\u7684\uFF0C\u5982\u679C\u9700\u8981\u53EF\u624B\u52A8\u5173\u95ED\u7684 Message\uFF0C\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"showClose"),t("\u5B57\u6BB5\u3002\u6B64\u5916\uFF0C\u548C Notification \u4E00\u6837\uFF0CMessage \u62E5\u6709\u53EF\u63A7\u7684"),u("code",null,"duration"),t("\uFF0C\u8BBE\u7F6E"),u("code",null,"0"),t("\u4E3A\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED\uFF0C\u9ED8\u8BA4\u4E3A 3000 \u6BEB\u79D2\u3002")])],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="open1">\u6D88\u606F</hl-button>
  <hl-button class="m-r-md" @click="open2">\u6210\u529F</hl-button>
  <hl-button class="m-r-md" @click="open3">\u8B66\u544A</hl-button>
  <hl-button @click="open4">\u9519\u8BEF</hl-button>
</template>

<script lang="ts" setup>
import { HlMessage } from 'hongluan-ui'

const open1 = () => {
  HlMessage({
    showClose: true,
    message: '\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u63D0\u793A',
    duration: 300000,
  })
}

const open2 = () => {
  HlMessage({
    showClose: true,
    message: '\u606D\u559C\u4F60\uFF0C\u8FD9\u662F\u4E00\u6761\u6210\u529F\u6D88\u606F',
    type: 'success',
  })
}

const open3 = () => {
  HlMessage({
    showClose: true,
    message: '\u8B66\u544A\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u6D88\u606F',
    type: 'warning',
  })
}

const open4 = () => {
  HlMessage({
    showClose: true,
    message: '\u9519\u4E86\u54E6\uFF0C\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u6D88\u606F',
    type: 'error',
  })
}

<\/script>
`)],-1),ou=u("h2",{id:"wen-zi-dui-qi-fang-shi"},[u("a",{class:"header-anchor",href:"#wen-zi-dui-qi-fang-shi"}),t(" \u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F")],-1),nu=u("p",null,[t("\u4F7F\u7528 "),u("code",null,"textAlign"),t("\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A"),u("code",null,"left"),t(","),u("code",null,"right"),t(","),u("code",null,"center"),t("\uFF0C\u9ED8\u8BA4\u503C\u4E3A"),u("code",null,"left")],-1),su=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="openCenter('left')">\u5C45\u5DE6\u5BF9\u9F50\u65B9\u5F0F</hl-button>
  <hl-button class="m-r-md" @click="openCenter('center')">\u5C45\u4E2D\u5BF9\u9F50\u65B9\u5F0F</hl-button>
  <hl-button @click="openCenter('right')">\u5C45\u53F3\u5BF9\u9F50\u65B9\u5F0F</hl-button>
</template>

<script lang="ts" setup>
import { HlMessage } from 'hongluan-ui'

const openCenter = align => {
  HlMessage({
    message: \`\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\`,
    textAlign: align,
  })
}

<\/script>
`)],-1),lu=u("h2",{id:"shi-yong-html-pian-duan"},[u("a",{class:"header-anchor",href:"#shi-yong-html-pian-duan"}),t(" \u4F7F\u7528 HTML \u7247\u6BB5")],-1),cu=u("p",null,[u("code",null,"message"),t(" \u5C5E\u6027\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5")],-1),au=u("div",null,[u("p",null,[t("\u5C06"),u("code",null,"dangerouslyUseHTMLString"),t("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),u("code",null,"message"),t(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")])],-1),ru=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button @click="openHTML">\u4F7F\u7528 HTML \u7247\u6BB5</hl-button>
</template>

<script lang="ts" setup>
import { HlMessage } from 'hongluan-ui'

const openHTML = () => {
  HlMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>',
  })
}

<\/script>
`)],-1),du=x('<div class="doc-tip warning"><p><code>message</code> \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS \u653B\u51FB</a>\u3002\u56E0\u6B64\u5728 <code>dangerouslyUseHTMLString</code> \u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u786E\u4FDD <code>message</code> \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\uFF0C<strong>\u6C38\u8FDC\u4E0D\u8981</strong>\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9 <code>message</code> \u5C5E\u6027\u3002</p></div><h2 id="fen-zu-he-bing"><a class="header-anchor" href="#fen-zu-he-bing"></a> \u5206\u7EC4\u5408\u5E76</h2><p>\u76F8\u540C\u5185\u5BB9\u7684Message\u4FE1\u606F\u53EF\u4EE5\u5408\u5E76</p>',3),Fu=u("div",null,[u("p",null,[t("\u8BBE\u7F6E "),u("code",null,"grouping"),t(" \u4E3A true\uFF0C\u76F8\u540C\u5185\u5BB9\u7684 "),u("code",null,"message"),t(" \u5C06\u4F1A\u88AB\u5408\u5E76\u3002")])],-1),pu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="open">\u6253\u5F00\u6D88\u606F\u63D0\u793A</hl-button>
</template>

<script lang="ts" setup>
import { HlMessage } from 'hongluan-ui'

const open = () => {
  HlMessage({
    message: '\u8FD9\u662F\u4E00\u6761\u6D88\u606F.',
    grouping: true,
    type: 'success',
    duration: 5000,
  })
}
<\/script>
`)],-1),iu=x(`<h2 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa"></a> \u5168\u5C40\u65B9\u6CD5</h2><p>Hongluan UI \u4E3A <code>app.config.globalProperties</code> \u6DFB\u52A0\u4E86\u5168\u5C40\u65B9\u6CD5 $message\u3002\u56E0\u6B64\u5728 vue instance \u4E2D\u53EF\u4EE5\u91C7\u7528\u5728 method \u4E2D\u8C03\u7528 <code>this.$message</code> \u65B9\u6CD5\u5524\u8D77 <code>HlMessage</code>\u3002</p><h2 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong"></a> \u5355\u72EC\u5F15\u7528</h2><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlMessage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>;
</code></pre><p>\u6B64\u65F6\u8C03\u7528\u65B9\u6CD5\u4E3A <code>HlMessage(options)</code>\u3002\u6211\u4EEC\u4E5F\u4E3A\u6BCF\u4E2A type \u5B9A\u4E49\u4E86\u5404\u81EA\u7684\u65B9\u6CD5\uFF0C\u5982 <code>HlMessage.success(options)</code>\u3002\u5E76\u4E14\u53EF\u4EE5\u8C03\u7528 <code>HlMessage.closeAll()</code> \u624B\u52A8\u5173\u95ED\u6240\u6709\u5B9E\u4F8B\u3002</p>`,5),Eu={id:"app-shang-xia-wen-ji-cheng-1.5.7"},hu=u("a",{class:"header-anchor",href:"#app-shang-xia-wen-ji-cheng-1.5.7"},null,-1),_u=t(" App \u4E0A\u4E0B\u6587\u7EE7\u627F "),mu=t("> 1.5.7"),Cu=x(`<div class="doc-tip"><p>\u5982\u679C\u5168\u5C40\u6CE8\u518C HlMessage \u7EC4\u4EF6, \u4F1A\u81EA\u52A8\u7EE7\u627Fapp\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002</p></div><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlMessage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>

<span class="hljs-comment">// in your setup method</span>
<span class="hljs-keyword">const</span> { appContext } = <span class="hljs-title function_">getCurrentInstance</span>()!
<span class="hljs-title class_">HlMessage</span>({}, appContext)
</code></pre><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u6D88\u606F\u6587\u5B57</td><td>string / VNode / () =&gt; VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u4E3B\u9898</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>customClass</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>duration</td><td>\u663E\u793A\u65F6\u95F4, \u6BEB\u79D2\u3002\u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>\u2014</td><td>3000</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>textAlign</td><td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570, \u53C2\u6570\u4E3A\u88AB\u5173\u95ED\u7684 message \u5B9E\u4F8B</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>offset</td><td>Message \u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>20</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Etype\u5B9A\u4E49\u7684icon</td><td>VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>appendTo</td><td>\u6DFB\u52A0Message\u7684\u6839DOM\u5143\u7D20</td><td>string / HTMLElement</td><td>-</td><td>document.body</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p>\u8C03\u7528 <code>HlMessage</code> \u6216 <code>this.$message</code> \u4F1A\u8FD4\u56DE\u5F53\u524D Message \u7684\u5B9E\u4F8B\u3002\u5982\u679C\u9700\u8981\u624B\u52A8\u5173\u95ED\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u8C03\u7528\u5B83\u7684 <code>close</code> \u65B9\u6CD5\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u5F53\u524D\u7684 Message</td></tr></tbody></table>`,7);function Bu(o,s,e,l,g,D){const B=k("hl-demo0"),c=k("demo-block"),p=k("hl-demo1"),A=k("hl-demo2"),i=k("hl-demo3"),a=k("hl-demo4"),r=k("hl-demo5"),F=k("hl-tag"),E=k("right-nav");return S(),$(I,null,[u("section",null,[O,q,X,Q,m(c,{fs:""},{source:d(()=>[m(B)]),highlight:d(()=>[G]),default:d(()=>[W]),_:1}),J,K,m(c,{fs:""},{source:d(()=>[m(p)]),highlight:d(()=>[Y]),default:d(()=>[R]),_:1}),Z,uu,m(c,{fs:""},{source:d(()=>[m(A)]),highlight:d(()=>[tu]),default:d(()=>[eu]),_:1}),ou,nu,m(c,{fs:""},{source:d(()=>[m(i)]),highlight:d(()=>[su]),_:1}),lu,cu,m(c,{fs:""},{source:d(()=>[m(a)]),highlight:d(()=>[ru]),default:d(()=>[au]),_:1}),du,m(c,{fs:""},{source:d(()=>[m(r)]),highlight:d(()=>[pu]),default:d(()=>[Fu]),_:1}),iu,u("h2",Eu,[hu,_u,m(F,null,{default:d(()=>[mu]),_:1})]),Cu]),m(E)],64)}var xu=P(z,[["render",Bu]]);export{xu as default};
