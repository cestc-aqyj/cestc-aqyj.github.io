var H=Object.defineProperty;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var k=(n,e,o)=>e in n?H(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,m=(n,e)=>{for(var o in e||(e={}))T.call(e,o)&&k(n,o,e[o]);if(y)for(var o of y(e))v.call(e,o)&&k(n,o,e[o]);return n};import{H as h,o as w,B as V,C as u,v as r,M as d,Y as L,ax as D,_ as t,aw as x}from"./vue.4f7e9041.js";import{_ as $,H as f}from"./index.709c2d0b.js";import{H as N}from"./hongluan-icons.01c6d80b.js";import"./hongluan.a52c900d.js";import"./highlight.e2508551.js";const j={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:n,resolveComponent:e,withCtx:o,openBlock:i,createBlock:C}=D,p=n("\u70B9\u51FB\u6253\u5F00 Message Box");function a(c,E){const A=e("hl-button");return i(),C(A,{type:"link",onClick:c.open},{default:o(()=>[p]),_:1},8,["onClick"])}const{defineComponent:F}=D,{HlMessageBox:s,HlMessage:B}=f,l=F({setup(){return{open:()=>{s.alert("\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9","\u6807\u9898\u540D\u79F0",{confirmButtonText:"\u786E\u5B9A",callback:E=>{B({type:"info",message:`action: ${E}`})}})}}}});return m({render:a},l)}(),"hl-demo1":function(){const{createTextVNode:n,resolveComponent:e,withCtx:o,openBlock:i,createBlock:C}=D,p=n("\u70B9\u51FB\u6253\u5F00 Message Box");function a(c,E){const A=e("hl-button");return i(),C(A,{type:"link",onClick:c.open},{default:o(()=>[p]),_:1},8,["onClick"])}const{defineComponent:F}=D,{HlMessageBox:s,HlMessage:B}=f,l=F({setup(){return{open:()=>{s.confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u6587\u4EF6, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",confirmButtonType:"danger",cancelButtonText:"\u53D6\u6D88",type:"success"}).then(()=>{B({type:"success",message:"\u5220\u9664\u6210\u529F!"})}).catch(()=>{B({type:"info",message:"\u5DF2\u53D6\u6D88\u5220\u9664"})})}}}});return m({render:a},l)}(),"hl-demo2":function(){const{createTextVNode:n,resolveComponent:e,withCtx:o,openBlock:i,createBlock:C}=D,p=n("\u70B9\u51FB\u6253\u5F00 Message Box");function a(M,_){const g=e("hl-button");return i(),C(g,{type:"link",onClick:M.open},{default:o(()=>[p]),_:1},8,["onClick"])}const{defineComponent:F,h:s}=D,{HlMessageBox:B,HlMessage:l,HlIcon:c}=f,{Airplay:E}=N,A=F({setup(){return{open:()=>{B({title:"\u6D88\u606F",message:s("p",null,[s("span",null,"\u5185\u5BB9\u53EF\u4EE5\u662F "),s("i",{style:"color: teal"},"VNode")]),icon:s(c,{size:"xl"},[s(E)]),showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",beforeClose:(_,g,b)=>{_==="confirm"?(g.confirmButtonLoading=!0,g.confirmButtonText="\u6267\u884C\u4E2D...",setTimeout(()=>{b(),setTimeout(()=>{g.confirmButtonLoading=!1},300)},3e3)):b()}}).then(_=>{l({type:"info",message:"action: "+_})})}}}});return m({render:a},A)}(),"hl-demo3":function(){const{createTextVNode:n,resolveComponent:e,withCtx:o,openBlock:i,createBlock:C}=D,p=n("\u70B9\u51FB\u6253\u5F00 Message Box");function a(l,c){const E=e("hl-button");return i(),C(E,{type:"link",onClick:l.open},{default:o(()=>[p]),_:1},8,["onClick"])}const{defineComponent:F}=D,{HlMessageBox:s}=f,B=F({setup(){return{open:()=>{s.alert("<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>","HTML \u7247\u6BB5",{dangerouslyUseHTMLString:!0})}}}});return m({render:a},B)}(),"hl-demo4":function(){const{createTextVNode:n,resolveComponent:e,withCtx:o,openBlock:i,createBlock:C}=D,p=n("\u70B9\u51FB\u6253\u5F00 Message Box");function a(c,E){const A=e("hl-button");return i(),C(A,{type:"link",onClick:c.open},{default:o(()=>[p]),_:1},8,["onClick"])}const{defineComponent:F}=D,{HlMessageBox:s,HlMessage:B}=f,l=F({setup(){return{open:()=>{s.confirm("\u68C0\u6D4B\u5230\u672A\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u662F\u5426\u5728\u79BB\u5F00\u9875\u9762\u524D\u4FDD\u5B58\u4FEE\u6539\uFF1F","\u786E\u8BA4\u4FE1\u606F",{distinguishCancelAndClose:!0,confirmButtonText:"\u4FDD\u5B58",cancelButtonText:"\u653E\u5F03\u4FEE\u6539"}).then(()=>{B({type:"info",message:"\u4FDD\u5B58\u4FEE\u6539"})}).catch(E=>{B({type:"info",message:E==="cancel"?"\u653E\u5F03\u4FDD\u5B58\u5E76\u79BB\u5F00\u9875\u9762":"\u505C\u7559\u5728\u5F53\u524D\u9875\u9762"})})}}}});return m({render:a},l)}()}},S=u("h1",null,"MessageBox \u5F39\u6846",-1),q=u("p",null,"\u6A21\u62DF\u7CFB\u7EDF\u7684\u6D88\u606F\u63D0\u793A\u6846\u800C\u5B9E\u73B0\u7684\u4E00\u5957\u6A21\u6001\u5BF9\u8BDD\u6846\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u786E\u8BA4\u6D88\u606F\u548C\u63D0\u4EA4\u5185\u5BB9\u3002",-1),P=u("div",{class:"md-tip"},[u("p",null,[t("\u4ECE\u573A\u666F\u4E0A\u8BF4\uFF0CMessageBox \u7684\u4F5C\u7528\u662F\u7F8E\u5316\u7CFB\u7EDF\u81EA\u5E26\u7684 "),u("code",null,"alert"),t("\u548C"),u("code",null,"confirm"),t("\uFF0C\u56E0\u6B64\u9002\u5408\u5C55\u793A\u8F83\u4E3A\u7B80\u5355\u7684\u5185\u5BB9\u3002\u5982\u679C\u9700\u8981\u5F39\u51FA\u8F83\u4E3A\u590D\u6742\u7684\u5185\u5BB9\uFF0C\u8BF7\u4F7F\u7528 Dialog\u3002")])],-1),z=u("h2",{id:"xiao-xi-ti-shi"},[u("a",{class:"header-anchor",href:"#xiao-xi-ti-shi"}),t(" \u6D88\u606F\u63D0\u793A")],-1),I=u("p",null,"\u5F53\u7528\u6237\u8FDB\u884C\u64CD\u4F5C\u65F6\u4F1A\u88AB\u89E6\u53D1\uFF0C\u8BE5\u5BF9\u8BDD\u6846\u4E2D\u65AD\u7528\u6237\u64CD\u4F5C\uFF0C\u76F4\u5230\u7528\u6237\u786E\u8BA4\u77E5\u6653\u540E\u624D\u53EF\u5173\u95ED\u3002",-1),U=u("div",null,[u("p",null,[t("\u8C03\u7528"),u("code",null,"$alert"),t("\u65B9\u6CD5\u5373\u53EF\u6253\u5F00\u6D88\u606F\u63D0\u793A\uFF0C\u5B83\u6A21\u62DF\u4E86\u7CFB\u7EDF\u7684 "),u("code",null,"alert"),t("\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6309\u4E0B ESC \u6216\u70B9\u51FB\u6846\u5916\u5173\u95ED\u3002\u6B64\u4F8B\u4E2D\u63A5\u6536\u4E86\u4E24\u4E2A\u53C2\u6570\uFF0C"),u("code",null,"message"),t("\u548C"),u("code",null,"title"),t("\u3002\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u7A97\u53E3\u88AB\u5173\u95ED\u540E\uFF0C\u5B83\u9ED8\u8BA4\u4F1A\u8FD4\u56DE\u4E00\u4E2A"),u("code",null,"Promise"),t("\u5BF9\u8C61\u4FBF\u4E8E\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u7684\u5904\u7406\u3002\u82E5\u4E0D\u786E\u5B9A\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301"),u("code",null,"Promise"),t("\uFF0C\u53EF\u81EA\u884C\u5F15\u5165\u7B2C\u4E09\u65B9 polyfill \u6216\u50CF\u672C\u4F8B\u4E00\u6837\u4F7F\u7528\u56DE\u8C03\u8FDB\u884C\u540E\u7EED\u5904\u7406\u3002")])],-1),O=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlMessageBox, HlMessage } from 'hongluan-ui'

export default defineComponent({
  setup() {
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
    return {
      open,
    }
  },
})
<\/script>
`)],-1),Y=u("h2",{id:"que-ren-xiao-xi"},[u("a",{class:"header-anchor",href:"#que-ren-xiao-xi"}),t(" \u786E\u8BA4\u6D88\u606F")],-1),W=u("p",null,"\u63D0\u793A\u7528\u6237\u786E\u8BA4\u5176\u5DF2\u7ECF\u89E6\u53D1\u7684\u52A8\u4F5C\uFF0C\u5E76\u8BE2\u95EE\u662F\u5426\u8FDB\u884C\u6B64\u64CD\u4F5C\u65F6\u4F1A\u7528\u5230\u6B64\u5BF9\u8BDD\u6846\u3002",-1),X=u("div",null,[u("p",null,[t("\u8C03\u7528"),u("code",null,"$confirm"),t("\u65B9\u6CD5\u5373\u53EF\u6253\u5F00\u6D88\u606F\u63D0\u793A\uFF0C\u5B83\u6A21\u62DF\u4E86\u7CFB\u7EDF\u7684 "),u("code",null,"confirm"),t("\u3002Message Box \u7EC4\u4EF6\u4E5F\u62E5\u6709\u6781\u9AD8\u7684\u5B9A\u5236\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F20\u5165"),u("code",null,"options"),t("\u4F5C\u4E3A\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u5B83\u662F\u4E00\u4E2A\u5B57\u9762\u91CF\u5BF9\u8C61\u3002"),u("code",null,"type"),t("\u5B57\u6BB5\u7528\u6765\u663E\u793A\u5934\u90E8 icon\uFF0C\u53EF\u4EE5\u4E3A"),u("code",null,"success"),t("\uFF0C"),u("code",null,"error"),t("\uFF0C"),u("code",null,"info"),t("\u548C"),u("code",null,"warning"),t("\uFF0C\u9664\u4E86\u4EE5\u4E0A\u81EA\u5B9A\u4E49\u7684\u540D\u79F0\uFF0C\u5176\u5B83 type \u503C\u5C06\u88AB\u8BA4\u4E3A\u76F4\u63A5\u662F Icon \u7EC4\u4EF6\u7684\u540D\u79F0\uFF0C\u6B64\u65F6\u53EF\u4EE5\u914D\u5408 iconProps \u5C5E\u6027\u81EA\u5B9A\u4E49 icon \u6837\u5F0F\u3002\u6CE8\u610F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570"),u("code",null,"title"),t("\u5FC5\u987B\u5B9A\u4E49\u4E3A"),u("code",null,"String"),t("\u7C7B\u578B\uFF0C\u5982\u679C\u662F"),u("code",null,"Object"),t("\uFF0C\u4F1A\u88AB\u7406\u89E3\u4E3A"),u("code",null,"options"),t("\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u7528\u4E86 Promise \u6765\u5904\u7406\u540E\u7EED\u54CD\u5E94\u3002")])],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlMessageBox, HlMessage } from 'hongluan-ui'
export default defineComponent({
  setup() {
    const open = () =>{
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
    return {
      open,
    }
  },
})
<\/script>
`)],-1),J=u("h2",{id:"zi-ding-yi"},[u("a",{class:"header-anchor",href:"#zi-ding-yi"}),t(" \u81EA\u5B9A\u4E49")],-1),K=u("p",null,"\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u4E0D\u540C\u5185\u5BB9\u3002",-1),Q=u("div",null,[u("p",null,[t("\u4EE5\u4E0A\u4E09\u4E2A\u65B9\u6CD5\u90FD\u662F\u5BF9"),u("code",null,"$msgbox"),t("\u65B9\u6CD5\u7684\u518D\u5305\u88C5\u3002\u672C\u4F8B\u76F4\u63A5\u8C03\u7528"),u("code",null,"$msgbox"),t("\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E86"),u("code",null,"showCancelButton"),t("\u5B57\u6BB5\uFF0C\u7528\u4E8E\u663E\u793A\u53D6\u6D88\u6309\u94AE\u3002\u53E6\u5916\u53EF\u4F7F\u7528"),u("code",null,"cancelButtonClass"),t("\u4E3A\u5176\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528"),u("code",null,"cancelButtonText"),t("\u6765\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u672C\uFF08Confirm \u6309\u94AE\u4E5F\u5177\u6709\u76F8\u540C\u7684\u5B57\u6BB5\uFF0C\u5728\u6587\u672B\u7684\u5B57\u6BB5\u8BF4\u660E\u4E2D\u6709\u5B8C\u6574\u7684\u5B57\u6BB5\u5217\u8868\uFF09\u3002\u6B64\u4F8B\u8FD8\u4F7F\u7528\u4E86"),u("code",null,"beforeClose"),t("\u5C5E\u6027\uFF0C\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u4F1A\u5728 MessageBox \u7684\u5B9E\u4F8B\u5173\u95ED\u524D\u88AB\u8C03\u7528\uFF0C\u540C\u65F6\u6682\u505C\u5B9E\u4F8B\u7684\u5173\u95ED\u3002\u5B83\u6709\u4E09\u4E2A\u53C2\u6570\uFF1A"),u("code",null,"action"),t("\u3001\u5B9E\u4F8B\u672C\u8EAB\u548C"),u("code",null,"done"),t("\u65B9\u6CD5\u3002\u4F7F\u7528\u5B83\u80FD\u591F\u5728\u5173\u95ED\u524D\u5BF9\u5B9E\u4F8B\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982\u4E3A\u786E\u5B9A\u6309\u94AE\u6DFB\u52A0"),u("code",null,"loading"),t("\u72B6\u6001\u7B49\uFF1B\u6B64\u65F6\u82E5\u9700\u8981\u5173\u95ED\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u8C03\u7528"),u("code",null,"done"),t("\u65B9\u6CD5\uFF08\u82E5\u5728"),u("code",null,"beforeClose"),t("\u4E2D\u6CA1\u6709\u8C03\u7528"),u("code",null,"done"),t("\uFF0C\u5219\u5B9E\u4F8B\u4E0D\u4F1A\u5173\u95ED\uFF09\u3002")])],-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script>
import { defineComponent, h } from 'vue'
import { HlMessageBox, HlMessage, HlIcon } from 'hongluan-ui'
import { Airplay } from '@hongluan-ui/icons'

export default defineComponent({
  setup() {
    const open = () => {
      HlMessageBox({
        title: '\u6D88\u606F',
        message: h('p', null, [
          h('span', null, '\u5185\u5BB9\u53EF\u4EE5\u662F '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
        icon: h(HlIcon, { size: 'xl' }, [h(Airplay)]),
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
    return {
      open,
    }
  },
})
<\/script>
`)],-1),Z=x('<div class="md-tip"><p>\u5F39\u51FA\u5C42\u7684\u5185\u5BB9\u53EF\u4EE5\u662F <code>VNode</code>\uFF0C\u6240\u4EE5\u6211\u4EEC\u80FD\u628A\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F20\u5165\u5176\u4E2D\u3002\u6BCF\u6B21\u5F39\u51FA\u5C42\u6253\u5F00\u540E\uFF0CVue \u4F1A\u5BF9\u65B0\u8001 <code>VNode</code> \u8282\u70B9\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u7136\u540E\u5C06\u6839\u636E\u6BD4\u8F83\u7ED3\u679C\u8FDB\u884C\u6700\u5C0F\u5355\u4F4D\u5730\u4FEE\u6539\u89C6\u56FE\u3002\u8FD9\u4E5F\u8BB8\u4F1A\u9020\u6210\u5F39\u51FA\u5C42\u5185\u5BB9\u533A\u57DF\u7684\u7EC4\u4EF6\u6CA1\u6709\u91CD\u65B0\u6E32\u67D3\uFF0C\u4F8B\u5982 <a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>\u3002\u5F53\u8FD9\u7C7B\u95EE\u9898\u51FA\u73B0\u65F6\uFF0C\u89E3\u51B3\u65B9\u6848\u662F\u7ED9 <code>VNode</code> \u52A0\u4E0A\u4E00\u4E2A\u4E0D\u76F8\u540C\u7684 key\uFF0C\u53C2\u8003<a href="https://jsfiddle.net/zhiyang/ezmhq2ef/">\u8FD9\u91CC</a>\u3002</p></div><h2 id="shi-yong-html-pian-duan"><a class="header-anchor" href="#shi-yong-html-pian-duan"></a> \u4F7F\u7528 HTML \u7247\u6BB5</h2><p><code>message</code> \u5C5E\u6027\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\u3002</p>',3),uu=u("div",null,[u("p",null,[t("\u5C06"),u("code",null,"dangerouslyUseHTMLString"),t("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),u("code",null,"message"),t(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")])],-1),tu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlMessageBox } from 'hongluan-ui'

export default defineComponent({
  setup() {
    const open = () => {
      HlMessageBox.alert('<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>', 'HTML \u7247\u6BB5', {
        dangerouslyUseHTMLString: true,
      })
    }
    return {
      open,
    }
  },
})
<\/script>
`)],-1),eu=x('<div class="md-warning"><p><code>message</code> \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS \u653B\u51FB</a>\u3002\u56E0\u6B64\u5728 <code>dangerouslyUseHTMLString</code> \u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u786E\u4FDD <code>message</code> \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\uFF0C<strong>\u6C38\u8FDC\u4E0D\u8981</strong>\u5C06\u7528\u6237\u63D0\u4EA4\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9 <code>message</code> \u5C5E\u6027\u3002</p></div><h2 id="qu-fen-qu-xiao-yu-guan-bi"><a class="header-anchor" href="#qu-fen-qu-xiao-yu-guan-bi"></a> \u533A\u5206\u53D6\u6D88\u4E0E\u5173\u95ED</h2><p>\u6709\u4E9B\u573A\u666F\u4E0B\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u4E0E\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6709\u7740\u4E0D\u540C\u7684\u542B\u4E49\u3002</p>',3),ou=u("div",null,[u("p",null,[t("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u7528\u6237\u89E6\u53D1\u53D6\u6D88\uFF08\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF09\u548C\u89E6\u53D1\u5173\u95ED\uFF08\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u906E\u7F69\u5C42\u3001\u6309\u4E0B ESC \u952E\uFF09\u65F6\uFF0CPromise \u7684 reject \u56DE\u8C03\u548C"),u("code",null,"callback"),t("\u56DE\u8C03\u7684\u53C2\u6570\u5747\u4E3A 'cancel'\u3002\u5982\u679C\u5C06"),u("code",null,"distinguishCancelAndClose"),t("\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u4E0A\u8FF0\u4E24\u79CD\u884C\u4E3A\u7684\u53C2\u6570\u5206\u522B\u4E3A 'cancel' \u548C 'close'\u3002")])],-1),nu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-button type="link" @click="open">\u70B9\u51FB\u6253\u5F00 Message Box</hl-button>
</template>

<script>
import { defineComponent } from 'vue'
import { HlMessageBox, HlMessage } from 'hongluan-ui'
export default defineComponent({
  setup() {
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
    return {
      open,
    }
  },
})
<\/script>
`)],-1),Fu=x(`<h2 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa"></a> \u5168\u5C40\u65B9\u6CD5</h2><p>\u5982\u679C\u4F60\u5B8C\u6574\u5F15\u5165\u4E86 Hongluan\uFF0C\u5B83\u4F1A\u4E3A <code>app.config.globalProperties</code> \u6DFB\u52A0\u5982\u4E0B\u5168\u5C40\u65B9\u6CD5\uFF1A$msgbox, $alert, $confirm \u548C $prompt\u3002\u56E0\u6B64\u5728 Vue instance \u4E2D\u53EF\u4EE5\u91C7\u7528\u672C\u9875\u9762\u4E2D\u7684\u65B9\u5F0F\u8C03\u7528 <code>MessageBox</code>\u3002\u8C03\u7528\u53C2\u6570\u4E3A\uFF1A</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> \u6216 <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> \u6216 <code>$confirm(message, options)</code></li></ul><h2 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong"></a> \u5355\u72EC\u5F15\u7528</h2><p>\u5982\u679C\u5355\u72EC\u5F15\u5165 <code>MessageBox</code>\uFF1A</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { HlMessageBox } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
</code></pre><p>\u90A3\u4E48\u5BF9\u5E94\u4E8E\u4E0A\u8FF0\u4E09\u4E2A\u5168\u5C40\u65B9\u6CD5\u7684\u8C03\u7528\u65B9\u6CD5\u4F9D\u6B21\u4E3A\uFF1AHlMessageBox, HlMessageBox.alert, HlMessageBox.confirm\uFF0C\u8C03\u7528\u53C2\u6570\u4E0E\u5168\u5C40\u65B9\u6CD5\u76F8\u540C\u3002</p><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>MessageBox \u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>message</td><td>MessageBox \u6D88\u606F\u6B63\u6587\u5185\u5BB9</td><td>string / VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>success / info / error / warning</td><td>\u2014</td></tr><tr><td>customStyle</td><td>MessageBox \u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td>\u2014</td><td>{}</td></tr><tr><td>customClass</td><td>MessageBox \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>callback</td><td>\u82E5\u4E0D\u4F7F\u7528 Promise\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B64\u53C2\u6570\u6307\u5B9A MessageBox \u5173\u95ED\u540E\u7684\u56DE\u8C03</td><td>function(action, instance)\uFF0Caction \u7684\u503C\u4E3A&#39;confirm&#39;, &#39;cancel&#39;\u6216&#39;close&#39;, instance \u4E3A MessageBox \u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B83\u8BBF\u95EE\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</td><td>\u2014</td><td>\u2014</td></tr><tr><td>showClose</td><td>MessageBox \u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>beforeClose</td><td>MessageBox \u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C\u5B9E\u4F8B\u7684\u5173\u95ED</td><td>function(action, instance, done)\uFF0Caction \u7684\u503C\u4E3A&#39;confirm&#39;, &#39;cancel&#39;\u6216&#39;close&#39;\uFF1Binstance \u4E3A MessageBox \u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B83\u8BBF\u95EE\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1Bdone \u7528\u4E8E\u5173\u95ED MessageBox \u5B9E\u4F8B</td><td>\u2014</td><td>\u2014</td></tr><tr><td>distinguishCancelAndClose</td><td>\u662F\u5426\u5C06\u53D6\u6D88\uFF08\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF09\u4E0E\u5173\u95ED\uFF08\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u906E\u7F69\u5C42\u3001\u6309\u4E0B ESC \u952E\uFF09\u8FDB\u884C\u533A\u5206</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lockScroll</td><td>\u662F\u5426\u5728 MessageBox \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>showCancelButton</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false\uFF08\u4EE5 confirm \u548C prompt \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A true\uFF09</td></tr><tr><td>showConfirmButton</td><td>\u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>cancelButtonText</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u53D6\u6D88</td></tr><tr><td>confirmButtonText</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u786E\u5B9A</td></tr><tr><td>cancelButtonType</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u7C7B\u578B\uFF0C\u53C2\u8003 Button \u6587\u6863</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>confirmButtonType</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u7C7B\u578B\uFF0C\u53C2\u8003 Button \u6587\u6863</td><td>string</td><td>\u2014</td><td>primary</td></tr><tr><td>cancelButtonClass</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirmButtonClass</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>closeOnClickModal</td><td>\u662F\u5426\u53EF\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09</td></tr><tr><td>closeOnPressEscape</td><td>\u662F\u5426\u53EF\u901A\u8FC7\u6309\u4E0B ESC \u952E\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09</td></tr><tr><td>closeOnHashChange</td><td>\u662F\u5426\u5728 hashchange \u65F6\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>roundButton</td><td>\u662F\u5426\u4F7F\u7528\u5706\u89D2\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>buttonSize</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u53CA\u53D6\u6D88\u6309\u94AE\u7684\u5927\u5C0F\uFF0C\u53C2\u89C1 Button \u6587\u6863</td><td>string</td><td>md</td><td></td></tr><tr><td>animationName</td><td>\u52A8\u753B\u7C7B\u578B\uFF0C\u53C2\u8003\u5185\u7F6E\u8FC7\u5EA6\u52A8\u753B\u6587\u6863</td><td>string</td><td>slideTop</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49icon\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Etype\u5B9A\u4E49\u7684icon</td><td>VNode</td><td>\u2014</td><td>\u2014</td></tr></tbody></table>`,9);function su(n,e,o,i,C,p){const a=h("hl-demo0"),F=h("demo-block"),s=h("hl-demo1"),B=h("hl-demo2"),l=h("hl-demo3"),c=h("hl-demo4"),E=h("right-nav");return w(),V(L,null,[u("section",null,[S,q,P,z,I,r(F,{fs:""},{source:d(()=>[r(a)]),highlight:d(()=>[O]),default:d(()=>[U]),_:1}),Y,W,r(F,{fs:""},{source:d(()=>[r(s)]),highlight:d(()=>[G]),default:d(()=>[X]),_:1}),J,K,r(F,{fs:""},{source:d(()=>[r(B)]),highlight:d(()=>[R]),default:d(()=>[Q]),_:1}),Z,r(F,{fs:""},{source:d(()=>[r(l)]),highlight:d(()=>[tu]),default:d(()=>[uu]),_:1}),eu,r(F,{fs:""},{source:d(()=>[r(c)]),highlight:d(()=>[nu]),default:d(()=>[ou]),_:1}),Fu]),r(E)],64)}var ru=$(j,[["render",su]]);export{ru as default};
