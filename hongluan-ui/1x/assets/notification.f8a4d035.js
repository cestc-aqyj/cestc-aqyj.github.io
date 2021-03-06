var j=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(e,n,o)=>n in e?j(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,b=(e,n)=>{for(var o in n||(n={}))L.call(n,o)&&w(e,o,n[o]);if(x)for(var o of x(n))V.call(n,o)&&w(e,o,n[o]);return e};import{Y as _,L as M,W as I,Q as u,a2 as d,a0 as l,P as z,aG as C,a3 as t,o as v}from"./vue.a2bb788b.js";import{_ as U,H}from"./index.6c900e06.js";import{H as S}from"./hongluan-icons.da8bad7b.js";import"./hongluan.bb564fd4.js";import"./highlight.5c3ff532.js";const $={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:e,resolveComponent:n,withCtx:o,createVNode:i,Fragment:h,openBlock:B,createElementBlock:a}=C,s=e(" \u53EF\u81EA\u52A8\u5173\u95ED "),E=e(" \u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED ");function r(p,A){const D=n("hl-button");return B(),a(h,null,[i(D,{plain:"",class:"m-r-md",onClick:p.open1},{default:o(()=>[s]),_:1},8,["onClick"]),i(D,{plain:"",onClick:p.open2},{default:o(()=>[E]),_:1},8,["onClick"])],64)}const{defineComponent:c,h:m}=C,{HlNotification:F}=H,k=c({setup(){return{open1:()=>{F({title:"\u6807\u9898\u540D\u79F0",message:m("p",{style:"color: teal"},"\u5728\u5F15\u5165 Hongluan UI Library \u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5168\u5C40\u914D\u7F6E\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u76EE\u524D\u652F\u6301 size \u4E0E zIndex \u5B57\u6BB5\u3002size \u7528\u4E8E\u6539\u53D8\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\uFF0CzIndex \u8BBE\u7F6E\u5F39\u6846\u7684\u521D\u59CB z-index\uFF08\u9ED8\u8BA4\u503C\uFF1A2000\uFF09")})},open2:()=>{F({title:"\u63D0\u793A",message:"\u8FD9\u662F\u4E00\u6761\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F",duration:0})}}}});return b({render:r},k)}(),"hl-demo1":function(){const{createTextVNode:e,resolveComponent:n,withCtx:o,createVNode:i,Fragment:h,openBlock:B,createElementBlock:a}=C,s=e("\u6210\u529F"),E=e("\u8B66\u544A"),r=e("\u6D88\u606F"),c=e("\u9519\u8BEF"),m=e("\u81EA\u5B9A\u4E49");function F(g,T){const N=n("hl-button");return B(),a(h,null,[i(N,{plain:"",class:"m-r-md",onClick:g.open1},{default:o(()=>[s]),_:1},8,["onClick"]),i(N,{plain:"",class:"m-r-md",onClick:g.open2},{default:o(()=>[E]),_:1},8,["onClick"]),i(N,{plain:"",class:"m-r-md",onClick:g.open3},{default:o(()=>[r]),_:1},8,["onClick"]),i(N,{plain:"",class:"m-r-md",onClick:g.open4},{default:o(()=>[c]),_:1},8,["onClick"]),i(N,{plain:"",onClick:g.open5},{default:o(()=>[m]),_:1},8,["onClick"])],64)}const{defineComponent:k,h:p}=C,{HlNotification:A,HlIcon:D}=H,{TwoAirplay:y}=S,f=k({setup(){return{open1:()=>{A({title:"\u6210\u529F",message:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u63D0\u793A\u6D88\u606F",type:"success",duration:0})},open2:()=>{A({title:"\u8B66\u544A",message:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u7684\u63D0\u793A\u6D88\u606F",type:"warning"})},open3:()=>{A.info({title:"\u6D88\u606F",message:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u7684\u63D0\u793A\u6D88\u606F"})},open4:()=>{A.error({title:"\u9519\u8BEF",message:"\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u7684\u63D0\u793A\u6D88\u606F"})},open5:()=>{A({title:"\u81EA\u5B9A\u4E49Icon",message:"\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u7684\u63D0\u793A\u6D88\u606F",icon:p(D,{size:"xl"},{default:()=>[p(y)]})})}}}});return b({render:F},f)}(),"hl-demo2":function(){const{createTextVNode:e,resolveComponent:n,withCtx:o,createVNode:i,Fragment:h,openBlock:B,createElementBlock:a}=C,s=e(" \u53F3\u4E0A\u89D2 "),E=e(" \u53F3\u4E0B\u89D2 "),r=e(" \u5DE6\u4E0B\u89D2 "),c=e(" \u5DE6\u4E0A\u89D2 ");function m(D,y){const f=n("hl-button");return B(),a(h,null,[i(f,{plain:"",class:"m-r-md",onClick:D.open1},{default:o(()=>[s]),_:1},8,["onClick"]),i(f,{plain:"",class:"m-r-md",onClick:D.open2},{default:o(()=>[E]),_:1},8,["onClick"]),i(f,{plain:"",class:"m-r-md",onClick:D.open3},{default:o(()=>[r]),_:1},8,["onClick"]),i(f,{plain:"",onClick:D.open4},{default:o(()=>[c]),_:1},8,["onClick"])],64)}const{defineComponent:F,h:k}=C,{HlNotification:p}=H,A=F({setup(){return{open1:()=>{p({title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",message:"\u53F3\u4E0A\u89D2\u5F39\u51FA\u7684\u6D88\u606F"})},open2:()=>{p({title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",message:"\u53F3\u4E0B\u89D2\u5F39\u51FA\u7684\u6D88\u606F",position:"bottom-right"})},open3:()=>{p({title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",message:"\u5DE6\u4E0B\u89D2\u5F39\u51FA\u7684\u6D88\u606F",position:"bottom-left"})},open4:()=>{p({title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",message:"\u5DE6\u4E0A\u89D2\u5F39\u51FA\u7684\u6D88\u606F",position:"top-left"})}}}});return b({render:m},A)}(),"hl-demo3":function(){const{createTextVNode:e,resolveComponent:n,withCtx:o,openBlock:i,createBlock:h}=C,B=e(" \u504F\u79FB\u7684\u6D88\u606F ");function a(c,m){const F=n("hl-button");return i(),h(F,{plain:"",onClick:c.open},{default:o(()=>[B]),_:1},8,["onClick"])}const{defineComponent:s}=C,{HlNotification:E}=H,r=s({setup(){return{open:()=>{E({title:"\u504F\u79FB",message:"\u8FD9\u662F\u4E00\u6761\u5E26\u6709\u504F\u79FB\u7684\u63D0\u793A\u6D88\u606F",offset:100})}}}});return b({render:a},r)}(),"hl-demo4":function(){const{createTextVNode:e,resolveComponent:n,withCtx:o,openBlock:i,createBlock:h}=C,B=e(" \u4F7F\u7528 HTML \u7247\u6BB5 ");function a(c,m){const F=n("hl-button");return i(),h(F,{plain:"",onClick:c.open},{default:o(()=>[B]),_:1},8,["onClick"])}const{defineComponent:s}=C,{HlNotification:E}=H,r=s({setup(){return{open:()=>{E({title:"HTML \u7247\u6BB5",dangerouslyUseHTMLString:!0,message:"<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>"})}}}});return b({render:a},r)}(),"hl-demo5":function(){const{createTextVNode:e,resolveComponent:n,withCtx:o,openBlock:i,createBlock:h}=C,B=e(" \u9690\u85CF\u5173\u95ED\u6309\u94AE ");function a(c,m){const F=n("hl-button");return i(),h(F,{plain:"",onClick:c.open},{default:o(()=>[B]),_:1},8,["onClick"])}const{defineComponent:s}=C,{HlNotification:E}=H,r=s({setup(){return{open:()=>{E.success({title:"Info",message:"\u8FD9\u662F\u4E00\u6761\u6CA1\u6709\u5173\u95ED\u6309\u94AE\u7684\u6D88\u606F",showClose:!1})}}}});return b({render:a},r)}()}},P=u("h1",null,"Notification \u901A\u77E5",-1),q=u("p",null,"\u60AC\u6D6E\u51FA\u73B0\u5728\u9875\u9762\u89D2\u843D\uFF0C\u663E\u793A\u5168\u5C40\u7684\u901A\u77E5\u63D0\u9192\u6D88\u606F\u3002",-1),Q=u("h2",{id:"ji-ben-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),t(" \u57FA\u672C\u7528\u6CD5")],-1),W=u("p",null,"\u9002\u7528\u6027\u5E7F\u6CDB\u7684\u901A\u77E5\u680F",-1),X=u("div",null,[u("p",null,[t("Notification \u7EC4\u4EF6\u63D0\u4F9B\u901A\u77E5\u529F\u80FD\uFF0CElement Plus \u6CE8\u518C\u4E86"),u("code",null,"$notify"),t("\u65B9\u6CD5\uFF0C\u63A5\u6536\u4E00\u4E2A"),u("code",null,"options"),t("\u5B57\u9762\u91CF\u53C2\u6570\uFF0C\u5728\u6700\u7B80\u5355\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E"),u("code",null,"title"),t("\u5B57\u6BB5\u548C"),u("code",null,"message"),t("\u5B57\u6BB5\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u901A\u77E5\u7684\u6807\u9898\u548C\u6B63\u6587\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7ECF\u8FC7\u4E00\u6BB5\u65F6\u95F4\u540E Notification \u7EC4\u4EF6\u4F1A\u81EA\u52A8\u5173\u95ED\uFF0C\u4F46\u662F\u901A\u8FC7\u8BBE\u7F6E"),u("code",null,"duration"),t("\uFF0C\u53EF\u4EE5\u63A7\u5236\u5173\u95ED\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u7279\u522B\u7684\u662F\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A"),u("code",null,"0"),t("\uFF0C\u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u3002\u6CE8\u610F\uFF1A"),u("code",null,"duration"),t("\u63A5\u6536\u4E00\u4E2A"),u("code",null,"Number"),t("\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF0C\u9ED8\u8BA4\u4E3A"),u("code",null,"4500"),t("\u3002")])],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button plain class="m-r-md" @click="open1">
    \u53EF\u81EA\u52A8\u5173\u95ED
  </hl-button>
  <hl-button plain @click="open2">
    \u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED
  </hl-button>
</template>

<script>
import { defineComponent, h } from 'vue'
import { HlNotification } from 'hongluan-ui'
export default defineComponent ({
  setup() {
    const open1 = () => {
      HlNotification({
        title: '\u6807\u9898\u540D\u79F0',
        message: h(
          'p',
          { style: 'color: teal' },
          '\u5728\u5F15\u5165 Hongluan UI Library \u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5168\u5C40\u914D\u7F6E\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u76EE\u524D\u652F\u6301 size \u4E0E zIndex \u5B57\u6BB5\u3002size \u7528\u4E8E\u6539\u53D8\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\uFF0CzIndex \u8BBE\u7F6E\u5F39\u6846\u7684\u521D\u59CB z-index\uFF08\u9ED8\u8BA4\u503C\uFF1A2000\uFF09',
        ),
      })
    }

    const open2 = () => {
      HlNotification({
        title: '\u63D0\u793A',
        message: '\u8FD9\u662F\u4E00\u6761\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F',
        duration: 0,
      })
    }
    return {
      open1,
      open2,
    }
  },
})
<\/script>
`)],-1),O=u("h2",{id:"dai-you-qing-xiang-xing"},[u("a",{class:"header-anchor",href:"#dai-you-qing-xiang-xing"}),t(" \u5E26\u6709\u503E\u5411\u6027")],-1),Y=u("p",null,"\u5E26\u6709 icon\uFF0C\u5E38\u7528\u6765\u663E\u793A\u300C\u6210\u529F\u3001\u8B66\u544A\u3001\u6D88\u606F\u3001\u9519\u8BEF\u300D\u7C7B\u7684\u7CFB\u7EDF\u6D88\u606F",-1),J=u("div",null,[u("p",null,[t("Hongluan UI \u4E3A Notification \u7EC4\u4EF6\u51C6\u5907\u4E86\u56DB\u79CD\u901A\u77E5\u7C7B\u578B\uFF1A"),u("code",null,"success"),t(", "),u("code",null,"warning"),t(", "),u("code",null,"info"),t(", "),u("code",null,"error"),t("\u3002\u5982\u6709\u7279\u6B8A icon\uFF0C\u8BF7\u76F4\u63A5\u8BBE\u7F6E"),u("code",null,"icon"),t("\uFF0C\u5982\uFF1Aopen5 "),u("code",null,"Airplay"),t("\uFF0C\u901A\u8FC7"),u("code",null,"type"),t("\u5B57\u6BB5\u6765\u8BBE\u7F6E\uFF0C\u9664\u6B64\u4EE5\u5916\u7684\u503C\u5C06\u88AB\u5FFD\u7565\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u4E3A Notification \u7684\u5404\u79CD type \u6CE8\u518C\u4E86\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E0D\u4F20\u5165"),u("code",null,"type"),t("\u5B57\u6BB5\u7684\u60C5\u51B5\u4E0B\u50CF"),u("code",null,"open3"),t("\u548C"),u("code",null,"open4"),t("\u90A3\u6837\u76F4\u63A5\u8C03\u7528\u3002")])],-1),K=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button plain class="m-r-md" @click="open1">\u6210\u529F</hl-button>
  <hl-button plain class="m-r-md" @click="open2">\u8B66\u544A</hl-button>
  <hl-button plain class="m-r-md" @click="open3">\u6D88\u606F</hl-button>
  <hl-button plain class="m-r-md" @click="open4">\u9519\u8BEF</hl-button>
  <hl-button plain @click="open5">\u81EA\u5B9A\u4E49</hl-button>
</template>

<script>
import { defineComponent, h } from 'vue'
import { HlNotification, HlIcon } from 'hongluan-ui'
import { TwoAirplay } from '@hongluan-ui/icons'

export default defineComponent ({
  setup() {
    const open1 = () => {
      HlNotification({
        title: '\u6210\u529F',
        message: '\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u63D0\u793A\u6D88\u606F',
        type: 'success',
        duration: 0,
      })
    }

    const open2 = () => {
      HlNotification({
        title: '\u8B66\u544A',
        message: '\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u7684\u63D0\u793A\u6D88\u606F',
        type: 'warning',
      })
    }

    const open3 = () => {
      HlNotification.info({
        title: '\u6D88\u606F',
        message: '\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u7684\u63D0\u793A\u6D88\u606F',
      })
    }

    const open4 = () => {
      HlNotification.error({
        title: '\u9519\u8BEF',
        message: '\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u7684\u63D0\u793A\u6D88\u606F',
      })
    }

    const open5 = () => {
      HlNotification({
        title: '\u81EA\u5B9A\u4E49Icon',
        message: '\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u7684\u63D0\u793A\u6D88\u606F',
        icon: h(HlIcon, {
          size: 'xl',
        }, {
          default: () => [h(TwoAirplay)],
        }),
      })
    }

    return {
      open1,
      open2,
      open3,
      open4,
      open5,
    }
  },
})
<\/script>
`)],-1),R=u("h2",{id:"zi-ding-yi-dan-chu-wei-zhi"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-dan-chu-wei-zhi"}),t(" \u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E")],-1),Z=u("p",null,"\u53EF\u4EE5\u8BA9 Notification \u4ECE\u5C4F\u5E55\u56DB\u89D2\u4E2D\u7684\u4EFB\u610F\u4E00\u89D2\u5F39\u51FA",-1),uu=u("div",null,[u("p",null,[t("\u4F7F\u7528"),u("code",null,"position"),t("\u5C5E\u6027\u5B9A\u4E49 Notification \u7684\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u652F\u6301\u56DB\u4E2A\u9009\u9879\uFF1A"),u("code",null,"top-right"),t("\u3001"),u("code",null,"top-left"),t("\u3001"),u("code",null,"bottom-right"),t("\u3001"),u("code",null,"bottom-left"),t("\uFF0C\u9ED8\u8BA4\u4E3A"),u("code",null,"top-right"),t("\u3002")])],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button plain class="m-r-md" @click="open1">
    \u53F3\u4E0A\u89D2
  </hl-button>
  <hl-button plain class="m-r-md" @click="open2">
    \u53F3\u4E0B\u89D2
  </hl-button>
  <hl-button plain class="m-r-md" @click="open3">
    \u5DE6\u4E0B\u89D2
  </hl-button>
  <hl-button plain @click="open4">
    \u5DE6\u4E0A\u89D2
  </hl-button>
</template>

<script>
import { defineComponent, h } from 'vue'
import { HlNotification } from 'hongluan-ui'
export default defineComponent ({
  setup() {
    const open1 = () => {
      HlNotification({
        title: '\u81EA\u5B9A\u4E49\u4F4D\u7F6E',
        message: '\u53F3\u4E0A\u89D2\u5F39\u51FA\u7684\u6D88\u606F',
      })
    }

    const open2 = () => {
      HlNotification({
        title: '\u81EA\u5B9A\u4E49\u4F4D\u7F6E',
        message: '\u53F3\u4E0B\u89D2\u5F39\u51FA\u7684\u6D88\u606F',
        position: 'bottom-right',
      })
    }

    const open3 = () => {
      HlNotification({
        title: '\u81EA\u5B9A\u4E49\u4F4D\u7F6E',
        message: '\u5DE6\u4E0B\u89D2\u5F39\u51FA\u7684\u6D88\u606F',
        position: 'bottom-left',
      })
    }

    const open4 = () => {
      HlNotification({
        title: '\u81EA\u5B9A\u4E49\u4F4D\u7F6E',
        message: '\u5DE6\u4E0A\u89D2\u5F39\u51FA\u7684\u6D88\u606F',
        position: 'top-left',
      })
    }

    return {
      open1,
      open2,
      open3,
      open4,
    }
  },
})
<\/script>
`)],-1),ou=u("h2",{id:"dai-you-pian-yi"},[u("a",{class:"header-anchor",href:"#dai-you-pian-yi"}),t(" \u5E26\u6709\u504F\u79FB")],-1),eu=u("p",null,"\u8BA9 Notification \u504F\u79FB\u4E00\u4E9B\u4F4D\u7F6E",-1),nu=u("div",null,[u("p",null,[t("Notification \u63D0\u4F9B\u8BBE\u7F6E\u504F\u79FB\u91CF\u7684\u529F\u80FD\uFF0C\u901A\u8FC7\u8BBE\u7F6E "),u("code",null,"offset"),t(" \u5B57\u6BB5\uFF0C\u53EF\u4EE5\u4F7F\u5F39\u51FA\u7684\u6D88\u606F\u8DDD\u5C4F\u5E55\u8FB9\u7F18\u504F\u79FB\u4E00\u6BB5\u8DDD\u79BB\u3002\u6CE8\u610F\u5728\u540C\u4E00\u65F6\u523B\uFF0C\u6240\u6709\u7684 Notification \u5B9E\u4F8B\u5E94\u5F53\u5177\u6709\u4E00\u4E2A\u76F8\u540C\u7684\u504F\u79FB\u91CF\u3002")])],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button plain @click="open">
    \u504F\u79FB\u7684\u6D88\u606F
  </hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlNotification } from 'hongluan-ui'
export default defineComponent ({
  setup() {
    const open = () => {
      HlNotification({
        title: '\u504F\u79FB',
        message: '\u8FD9\u662F\u4E00\u6761\u5E26\u6709\u504F\u79FB\u7684\u63D0\u793A\u6D88\u606F',
        offset: 100,
      })
    }
    return {
      open,
    }
  },
})
<\/script>
`)],-1),lu=u("h2",{id:"shi-yong-html-pian-duan"},[u("a",{class:"header-anchor",href:"#shi-yong-html-pian-duan"}),t(" \u4F7F\u7528 HTML \u7247\u6BB5")],-1),su=u("p",null,[u("code",null,"message"),t(" \u5C5E\u6027\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5")],-1),cu=u("div",null,[u("p",null,[t("\u5C06"),u("code",null,"dangerouslyUseHTMLString"),t("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),u("code",null,"message"),t(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")])],-1),Fu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button plain @click="open">
    \u4F7F\u7528 HTML \u7247\u6BB5
  </hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlNotification } from 'hongluan-ui'
export default defineComponent ({
  setup() {
    const open = () => {
      HlNotification({
        title: 'HTML \u7247\u6BB5',
        dangerouslyUseHTMLString: true,
        message: '<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>',
      })
    }
    return {
      open,
    }
  },
})
<\/script>
`)],-1),du=v('<div class="doc-tip warning"><p><code>message</code> \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS \u653B\u51FB</a>\u3002\u56E0\u6B64\u5728 <code>dangerouslyUseHTMLString</code> \u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u786E\u4FDD <code>message</code> \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\uFF0C<strong>\u6C38\u8FDC\u4E0D\u8981</strong>\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9 <code>message</code> \u5C5E\u6027\u3002</p></div><h2 id="yin-cang-guan-bi-an-niu"><a class="header-anchor" href="#yin-cang-guan-bi-an-niu"></a> \u9690\u85CF\u5173\u95ED\u6309\u94AE</h2><p>\u53EF\u4EE5\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE</p>',3),au=u("div",null,[u("p",null,[t("\u5C06"),u("code",null,"showClose"),t("\u5C5E\u6027\u8BBE\u7F6E\u4E3A"),u("code",null,"false"),t("\u5373\u53EF\u9690\u85CF\u5173\u95ED\u6309\u94AE\u3002")])],-1),Eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button plain @click="open">
    \u9690\u85CF\u5173\u95ED\u6309\u94AE
  </hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlNotification } from 'hongluan-ui'
export default defineComponent ({
  setup() {
    const open = () => {
      HlNotification.success({
        title: 'Info',
        message: '\u8FD9\u662F\u4E00\u6761\u6CA1\u6709\u5173\u95ED\u6309\u94AE\u7684\u6D88\u606F',
        showClose: false,
      })
    }
    return {
      open,
    }
  },
})
<\/script>
`)],-1),ru={id:"app-shang-xia-wen-ji-cheng-1.5.7"},pu=u("a",{class:"header-anchor",href:"#app-shang-xia-wen-ji-cheng-1.5.7"},null,-1),hu=t(" App \u4E0A\u4E0B\u6587\u7EE7\u627F "),Bu=t("> 1.5.7"),Cu=v(`<div class="doc-tip"><p>\u5982\u679C\u5168\u5C40\u6CE8\u518C HlNotification \u7EC4\u4EF6, \u4F1A\u81EA\u52A8\u7EE7\u627Fapp\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002</p></div><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">HlNotification</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>

<span class="hljs-comment">// in your setup method</span>
<span class="hljs-keyword">const</span> { appContext } = <span class="hljs-title function_">getCurrentInstance</span>()!
<span class="hljs-title class_">HlNotification</span>({}, appContext)
</code></pre><h2 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa"></a> \u5168\u5C40\u65B9\u6CD5</h2><p>Hongluan ui \u4E3A <code>app.config.globalProperties</code> \u6DFB\u52A0\u4E86\u5168\u5C40\u65B9\u6CD5 <code>$notify</code>\u3002\u56E0\u6B64\u5728 vue instance \u4E2D\u53EF\u4EE5\u91C7\u7528\u672C\u9875\u9762\u4E2D\u7684\u65B9\u5F0F\u8C03\u7528 Notification\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>message</td><td>\u8BF4\u660E\u6587\u5B57</td><td>string/Vue.VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u4E3B\u9898\u6837\u5F0F\uFF0C\u5982\u679C\u4E0D\u5728\u53EF\u9009\u503C\u5185\u5C06\u88AB\u5FFD\u7565</td><td>string</td><td>success/warning/info/error</td><td>\u2014</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Etype\u5B9A\u4E49\u56FE\u6807</td><td>VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>customClass</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>duration</td><td>\u663E\u793A\u65F6\u95F4, \u6BEB\u79D2\u3002\u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>\u2014</td><td>4500</td></tr><tr><td>position</td><td>\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E</td><td>string</td><td>top-right/top-left/bottom-right/bottom-left</td><td>top-right</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>onClick</td><td>\u70B9\u51FB Notification \u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>offset</td><td>\u504F\u79FB\u7684\u8DDD\u79BB\uFF0C\u5728\u540C\u4E00\u65F6\u523B\uFF0C\u6240\u6709\u7684 Notification \u5B9E\u4F8B\u5E94\u5F53\u5177\u6709\u4E00\u4E2A\u76F8\u540C\u7684\u504F\u79FB\u91CF</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>appendTo</td><td>\u6DFB\u52A0Notification\u7684\u6839DOM\u5143\u7D20</td><td>string / HTMLElement</td><td>-</td><td>document.body</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p>\u8C03\u7528 <code>Notification</code> \u6216 <code>this.$notify</code> \u4F1A\u8FD4\u56DE\u5F53\u524D Notification \u7684\u5B9E\u4F8B\u3002\u5982\u679C\u9700\u8981\u624B\u52A8\u5173\u95ED\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u8C03\u7528\u5B83\u7684 <code>close</code> \u65B9\u6CD5\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u5F53\u524D\u7684 Notification</td></tr></tbody></table>`,9);function mu(e,n,o,i,h,B){const a=_("hl-demo0"),s=_("demo-block"),E=_("hl-demo1"),r=_("hl-demo2"),c=_("hl-demo3"),m=_("hl-demo4"),F=_("hl-demo5"),k=_("hl-tag"),p=_("right-nav");return M(),I(z,null,[u("section",null,[P,q,Q,W,d(s,{fs:""},{source:l(()=>[d(a)]),highlight:l(()=>[G]),default:l(()=>[X]),_:1}),O,Y,d(s,{fs:""},{source:l(()=>[d(E)]),highlight:l(()=>[K]),default:l(()=>[J]),_:1}),R,Z,d(s,{fs:""},{source:l(()=>[d(r)]),highlight:l(()=>[tu]),default:l(()=>[uu]),_:1}),ou,eu,d(s,{fs:""},{source:l(()=>[d(c)]),highlight:l(()=>[iu]),default:l(()=>[nu]),_:1}),lu,su,d(s,{fs:""},{source:l(()=>[d(m)]),highlight:l(()=>[Fu]),default:l(()=>[cu]),_:1}),du,d(s,{fs:""},{source:l(()=>[d(F)]),highlight:l(()=>[Eu]),default:l(()=>[au]),_:1}),u("h2",ru,[pu,hu,d(k,null,{default:l(()=>[Bu]),_:1})]),Cu]),d(p)],64)}var Hu=U($,[["render",mu]]);export{Hu as default};
