var ou=Object.defineProperty;var nu=Object.getOwnPropertySymbols;var iu=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable;var du=(e,n,u)=>n in e?ou(e,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[n]=u,eu=(e,n)=>{for(var u in n||(n={}))iu.call(n,u)&&du(e,u,n[u]);if(nu)for(var u of nu(n))au.call(n,u)&&du(e,u,n[u]);return e};import{H as Y,L as su,W as hu,Q as d,X as w,P as F,a4 as mu,aJ as y,S as s,o as cu}from"./vue.059774a0.js";import{H as lu}from"./hongluan-icons.5b925e95.js";import{_ as ru}from"./index.9503bc3e.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const _u={name:"component-doc",components:{"hl-demo0":function(){const{createTextVNode:e,resolveComponent:n,withCtx:u,createVNode:t,createElementVNode:o,Fragment:v,openBlock:f,createElementBlock:r}=y,D=e("\u5904\u7406\u4E2D\u5FC3"),B=e("\u6211\u7684\u5DE5\u4F5C\u53F0"),b=e("\u9009\u98791"),S=e("\u9009\u98792"),I=e("\u9009\u98793"),P=e("\u9009\u98794"),V=e("\u9009\u98791"),O=e("\u9009\u98792"),M=e("\u9009\u98793"),N=e("\u6D88\u606F\u4E2D\u5FC3"),L=o("a",{href:"https://www.example.com",target:"_blank"},"\u8BA2\u5355\u7BA1\u7406",-1),z=o("br",null,null,-1),G=o("br",null,null,-1),H=e("\u5904\u7406\u4E2D\u5FC3"),R=e("\u6211\u7684\u5DE5\u4F5C\u53F0"),U=e("\u9009\u98791"),x=e("\u9009\u98792"),$=e("\u9009\u98793"),_=e("\u9009\u98794"),a=e("\u9009\u98791"),h=e("\u9009\u98792"),k=e("\u9009\u98793"),T=e("\u7528\u6237\u4E2D\u5FC3"),j=o("a",{href:"https://www.example.com",target:"_blank"},"\u8BA2\u5355\u7BA1\u7406",-1),Q=e("\u90E8\u95E8\u4E2D\u5FC3"),q=e("\u90AE\u4EF6\u4E2D\u5FC3"),m=e("\u751F\u4EA7\u4E2D\u5FC3"),p=e("\u9500\u552E\u4E2D\u5FC3"),A=e("\u884C\u653F\u4E2D\u5FC3"),J=e("\u8D22\u52A1\u4E2D\u5FC3"),K=e("\u8FD0\u8425\u4E2D\u5FC3"),c=e("\u5E7F\u544A\u4E2D\u5FC3"),i=o("div",{class:"line"},null,-1);function g(E,uu){const l=n("hl-menu-item"),C=n("hl-sub-menu"),tu=n("hl-menu");return f(),r(v,null,[t(tu,{"default-active":E.activeIndex,mode:"vertical",onSelect:E.handleSelect},{default:u(()=>[t(l,{index:"1"},{default:u(()=>[D]),_:1}),t(C,{index:"2"},{title:u(()=>[B]),default:u(()=>[t(l,{index:"2-1"},{default:u(()=>[b]),_:1}),t(l,{index:"2-2"},{default:u(()=>[S]),_:1}),t(l,{index:"2-3"},{default:u(()=>[I]),_:1}),t(C,{index:"2-4"},{title:u(()=>[P]),default:u(()=>[t(l,{index:"2-4-1"},{default:u(()=>[V]),_:1}),t(l,{index:"2-4-2"},{default:u(()=>[O]),_:1}),t(l,{index:"2-4-3"},{default:u(()=>[M]),_:1})]),_:1})]),_:1}),t(l,{index:"3",disabled:""},{default:u(()=>[N]),_:1}),t(l,{index:"4"},{default:u(()=>[L]),_:1})]),_:1},8,["default-active","onSelect"]),z,G,t(tu,{"default-active":E.activeIndex,mode:"horizontal",onSelect:E.handleSelect},{default:u(()=>[t(l,{index:"1"},{default:u(()=>[H]),_:1}),t(C,{index:"2"},{title:u(()=>[R]),default:u(()=>[t(l,{index:"2-1"},{default:u(()=>[U]),_:1}),t(l,{index:"2-2"},{default:u(()=>[x]),_:1}),t(l,{index:"2-3"},{default:u(()=>[$]),_:1}),t(C,{index:"2-4"},{title:u(()=>[_]),default:u(()=>[t(l,{index:"2-4-1"},{default:u(()=>[a]),_:1}),t(l,{index:"2-4-2"},{default:u(()=>[h]),_:1}),t(l,{index:"2-4-3"},{default:u(()=>[k]),_:1})]),_:1})]),_:1}),t(l,{index:"3",disabled:""},{default:u(()=>[T]),_:1}),t(l,{index:"4"},{default:u(()=>[j]),_:1}),t(l,{index:"31"},{default:u(()=>[Q]),_:1}),t(l,{index:"32"},{default:u(()=>[q]),_:1}),t(l,{index:"33"},{default:u(()=>[m]),_:1}),t(l,{index:"34"},{default:u(()=>[p]),_:1}),t(l,{index:"35"},{default:u(()=>[A]),_:1}),t(l,{index:"36"},{default:u(()=>[J]),_:1}),t(l,{index:"37",disabled:""},{default:u(()=>[K]),_:1}),t(l,{index:"38"},{default:u(()=>[c]),_:1})]),_:1},8,["default-active","onSelect"]),i],64)}const{defineComponent:W,ref:Z}=y,X=W({setup(){const E=Z("1"),uu=Z("1");return{activeIndex:E,activeIndex2:uu,handleSelect:(C,tu)=>{console.log(C,tu)}}}});return eu({render:g},X)}(),"hl-demo1":function(){const{resolveComponent:e,createVNode:n,withCtx:u,createElementVNode:t,createTextVNode:o,openBlock:v,createBlock:f}=y,r=t("span",null,"\u5BFC\u822A\u4E00",-1),D=o("\u5206\u7EC4\u4E00"),B=o("\u9009\u98791"),b=o("\u9009\u98792"),S=o("\u9009\u98793"),I=o("\u9009\u98794"),P=o("\u9009\u98791"),V=o("\u5BFC\u822A\u4E8C"),O=o("\u5BFC\u822A\u4E09"),M=o("\u5BFC\u822A\u56DB");function N(x,$){const _=e("two-point"),a=e("hl-icon"),h=e("hl-menu-item"),k=e("hl-menu-item-group"),T=e("hl-sub-menu"),j=e("two-application"),Q=e("two-file"),q=e("two-setting"),m=e("hl-menu"),p=e("hl-col"),A=e("hl-row");return v(),f(A,null,{default:u(()=>[n(p,{span:12},{default:u(()=>[n(m,{"default-active":"2",class:"hl-menu-vertical-demo",onOpen:x.handleOpen,onClose:x.handleClose},{default:u(()=>[n(T,{index:"1"},{title:u(()=>[n(a,{class:"item-icon"},{default:u(()=>[n(_)]),_:1}),r]),default:u(()=>[n(k,null,{title:u(()=>[D]),default:u(()=>[n(h,{index:"1-1"},{default:u(()=>[B]),_:1}),n(h,{index:"1-2"},{default:u(()=>[b]),_:1})]),_:1}),n(k,{title:"\u5206\u7EC42"},{default:u(()=>[n(h,{index:"1-3"},{default:u(()=>[S]),_:1})]),_:1}),n(T,{index:"1-4"},{title:u(()=>[I]),default:u(()=>[n(h,{index:"1-4-1"},{default:u(()=>[P]),_:1})]),_:1})]),_:1}),n(h,{index:"2"},{title:u(()=>[V]),default:u(()=>[n(a,{class:"item-icon"},{default:u(()=>[n(j)]),_:1})]),_:1}),n(h,{index:"3",disabled:""},{title:u(()=>[O]),default:u(()=>[n(a,{class:"item-icon"},{default:u(()=>[n(Q)]),_:1})]),_:1}),n(h,{index:"4"},{title:u(()=>[M]),default:u(()=>[n(a,{class:"item-icon"},{default:u(()=>[n(q)]),_:1})]),_:1})]),_:1},8,["onOpen","onClose"])]),_:1})]),_:1})}const{defineComponent:L}=y,{TwoPoint:z,TwoApplication:G,TwoFile:H,TwoSetting:R}=lu,U=L({components:{TwoPoint:z,TwoApplication:G,TwoFile:H,TwoSetting:R},setup(){return{handleOpen:(_,a)=>{console.log(_,a)},handleClose:(_,a)=>{console.log(_,a)}}}});return eu({render:N},U)}(),"hl-demo2":function(){const{createTextVNode:e,resolveComponent:n,withCtx:u,createVNode:t,createElementVNode:o,Fragment:v,openBlock:f,createElementBlock:r}=y,D=e("\u5C55\u5F00"),B=e("\u6536\u8D77"),b=e("DASHBOARD"),S=e("\u4EEA\u8868\u76D8"),I=e("\u5DE5\u4F5C\u53F0"),P=e("Pages"),V=o("span",null,"\u8868\u5355\u9875",-1),O=e("\u57FA\u7840\u8868\u5355"),M=o("span",null,"\u6CE8\u518C\u767B\u5F55",-1),N=e("\u6CE8\u518C"),L=e("\u767B\u5F55"),z=e("\u5206\u6B65\u6CE8\u518C"),G=e("LAYOUT"),H=o("span",null,"\u6846\u67B6",-1),R=e("\u6B22\u8FCE"),U=e("\u63D0\u793A"),x=e("\u8868\u5355");function $(m,p){const A=n("hl-radio"),J=n("hl-radio-group"),K=n("two-layer"),c=n("hl-icon"),i=n("hl-menu-item"),g=n("Two-airplay"),W=n("hl-menu-item-group"),Z=n("two-edit"),X=n("hl-sub-menu"),E=n("two-preview"),uu=n("two-application"),l=n("hl-menu");return f(),r(v,null,[t(J,{modelValue:m.isCollapse,"onUpdate:modelValue":p[0]||(p[0]=C=>m.isCollapse=C),style:{"margin-bottom":"20px"}},{default:u(()=>[t(A,{label:!1},{default:u(()=>[D]),_:1}),t(A,{label:!0},{default:u(()=>[B]),_:1})]),_:1},8,["modelValue"]),t(l,{"default-active":"1-4-1",collapse:m.isCollapse,onOpen:m.handleOpen,onClose:m.handleClose},{default:u(()=>[t(W,null,{title:u(()=>[b]),default:u(()=>[t(i,null,{title:u(()=>[S]),default:u(()=>[t(c,{class:"item-icon"},{default:u(()=>[t(K)]),_:1})]),_:1}),t(i,null,{title:u(()=>[I]),default:u(()=>[t(c,{class:"item-icon"},{default:u(()=>[t(g)]),_:1})]),_:1})]),_:1}),t(W,null,{title:u(()=>[P]),default:u(()=>[t(X,{index:"forms","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:u(()=>[t(c,{class:"item-icon"},{default:u(()=>[t(Z)]),_:1}),V]),default:u(()=>[t(i,null,{default:u(()=>[O]),_:1})]),_:1}),t(X,{index:"verify","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:u(()=>[t(c,{class:"item-icon"},{default:u(()=>[t(E)]),_:1}),M]),default:u(()=>[t(i,{index:"/verify/sign-up"},{default:u(()=>[N]),_:1}),t(i,{index:"/verify/sign-in"},{default:u(()=>[L]),_:1}),t(i,{index:"/verify/sign-up-step"},{default:u(()=>[z]),_:1})]),_:1})]),_:1}),t(W,null,{title:u(()=>[G]),default:u(()=>[t(X,{index:"10","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:u(()=>[t(c,{class:"item-icon"},{default:u(()=>[t(uu)]),_:1}),H]),default:u(()=>[t(i,{index:"table"},{default:u(()=>[R]),_:1}),t(i,{index:"table"},{default:u(()=>[U]),_:1}),t(i,{index:"table"},{default:u(()=>[x]),_:1})]),_:1})]),_:1})]),_:1},8,["collapse","onOpen","onClose"])],64)}const{defineComponent:_}=y,{ref:a}=y,{TwoApplication:h,TwoAirplay:k,TwoEdit:T,TwoLayer:j,TwoPreview:Q}=lu;return eu({render:$},_({setup(m,{expose:p}){p();const c={isCollapse:a(!0),handleOpen:(i,g)=>{console.log(i,g)},handleClose:(i,g)=>{console.log(i,g)},ref:a,TwoApplication:h,TwoAirplay:k,TwoEdit:T,TwoLayer:j,TwoPreview:Q};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}()}},Fu=d("h1",null,"Menu \u5BFC\u822A\u83DC\u5355",-1),pu=d("p",null,"\u4E3A\u7F51\u7AD9\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\u7684\u83DC\u5355\u3002",-1),Eu=d("div",null,[d("p",null,[s("\u5BFC\u822A\u83DC\u5355\u9ED8\u8BA4\u4E3A\u5782\u76F4\u6A21\u5F0F\uFF0C\u901A\u8FC7"),d("code",null,"mode"),s("\u5C5E\u6027\u53EF\u4EE5\u4F7F\u5BFC\u822A\u83DC\u5355\u53D8\u66F4\u4E3A\u6C34\u5E73\u6A21\u5F0F\u3002\u53E6\u5916\uFF0C\u5728\u83DC\u5355\u4E2D\u901A\u8FC7"),d("code",null,"submenu"),s("\u7EC4\u4EF6\u53EF\u4EE5\u751F\u6210\u4E8C\u7EA7\u83DC\u5355\u3002Menu \u8FD8\u63D0\u4F9B\u4E86"),d("code",null,"background-color"),s("\u3001"),d("code",null,"text-color"),s("\u548C"),d("code",null,"active-text-color"),s("\uFF0C\u5206\u522B\u7528\u4E8E\u8BBE\u7F6E\u83DC\u5355\u7684\u80CC\u666F\u8272\u3001\u83DC\u5355\u7684\u6587\u5B57\u989C\u8272\u548C\u5F53\u524D\u6FC0\u6D3B\u83DC\u5355\u7684\u6587\u5B57\u989C\u8272\u3002")])],-1),Cu=d("pre",null,[d("code",{class:"html"},` <template>
  <hl-menu :default-active="activeIndex" mode="vertical" @select="handleSelect">
    <hl-menu-item index="1">\u5904\u7406\u4E2D\u5FC3</hl-menu-item>
    <hl-sub-menu index="2">
      <template #title>\u6211\u7684\u5DE5\u4F5C\u53F0</template>
      <hl-menu-item index="2-1">\u9009\u98791</hl-menu-item>
      <hl-menu-item index="2-2">\u9009\u98792</hl-menu-item>
      <hl-menu-item index="2-3">\u9009\u98793</hl-menu-item>
      <hl-sub-menu index="2-4">
        <template #title>\u9009\u98794</template>
        <hl-menu-item index="2-4-1">\u9009\u98791</hl-menu-item>
        <hl-menu-item index="2-4-2">\u9009\u98792</hl-menu-item>
        <hl-menu-item index="2-4-3">\u9009\u98793</hl-menu-item>
      </hl-sub-menu>
    </hl-sub-menu>
    <hl-menu-item index="3" disabled>\u6D88\u606F\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="4"><a href="https://www.example.com" target="_blank">\u8BA2\u5355\u7BA1\u7406</a></hl-menu-item>
  </hl-menu>

  <br><br>

  <hl-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <hl-menu-item index="1">\u5904\u7406\u4E2D\u5FC3</hl-menu-item>
    <hl-sub-menu index="2">
      <template #title>\u6211\u7684\u5DE5\u4F5C\u53F0</template>
      <hl-menu-item index="2-1">\u9009\u98791</hl-menu-item>
      <hl-menu-item index="2-2">\u9009\u98792</hl-menu-item>
      <hl-menu-item index="2-3">\u9009\u98793</hl-menu-item>
      <hl-sub-menu index="2-4">
        <template #title>\u9009\u98794</template>
        <hl-menu-item index="2-4-1">\u9009\u98791</hl-menu-item>
        <hl-menu-item index="2-4-2">\u9009\u98792</hl-menu-item>
        <hl-menu-item index="2-4-3">\u9009\u98793</hl-menu-item>
      </hl-sub-menu>
    </hl-sub-menu>
    <hl-menu-item index="3" disabled>\u7528\u6237\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="4"><a href="https://www.example.com" target="_blank">\u8BA2\u5355\u7BA1\u7406</a></hl-menu-item>
    <hl-menu-item index="31">\u90E8\u95E8\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="32">\u90AE\u4EF6\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="33">\u751F\u4EA7\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="34">\u9500\u552E\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="35">\u884C\u653F\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="36">\u8D22\u52A1\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="37" disabled>\u8FD0\u8425\u4E2D\u5FC3</hl-menu-item>
    <hl-menu-item index="38">\u5E7F\u544A\u4E2D\u5FC3</hl-menu-item>
  </hl-menu>
  <div class="line"></div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')

    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      activeIndex2,
      handleSelect,
    }
  },
})
<\/script>
`)],-1),fu=d("h2",{id:"ce-lan"},[d("a",{class:"header-anchor",href:"#ce-lan"}),s(" \u4FA7\u680F")],-1),Du=d("p",null,"\u5782\u76F4\u83DC\u5355\uFF0C\u53EF\u5185\u5D4C\u5B50\u83DC\u5355\u3002",-1),Bu=d("div",null,[d("p",null,[s("\u901A\u8FC7 MenuItemGroup \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u83DC\u5355\u8FDB\u884C\u5206\u7EC4\uFF0C\u5206\u7EC4\u540D\u53EF\u4EE5\u901A\u8FC7"),d("code",null,"title"),s("\u5C5E\u6027\u76F4\u63A5\u8BBE\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5177\u540D slot \u6765\u8BBE\u5B9A\u3002")])],-1),bu=d("pre",null,[d("code",{class:"html"},` <template>
  <hl-row>
    <hl-col :span="12">
      <hl-menu
        default-active="2"
        class="hl-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <hl-sub-menu index="1">
          <template #title>
            <hl-icon class="item-icon"><two-point /></hl-icon>
            <span>\u5BFC\u822A\u4E00</span>
          </template>
          <hl-menu-item-group>
            <template #title>\u5206\u7EC4\u4E00</template>
            <hl-menu-item index="1-1">\u9009\u98791</hl-menu-item>
            <hl-menu-item index="1-2">\u9009\u98792</hl-menu-item>
          </hl-menu-item-group>
          <hl-menu-item-group title="\u5206\u7EC42">
            <hl-menu-item index="1-3">\u9009\u98793</hl-menu-item>
          </hl-menu-item-group>
          <hl-sub-menu index="1-4">
            <template #title>\u9009\u98794</template>
            <hl-menu-item index="1-4-1">\u9009\u98791</hl-menu-item>
          </hl-sub-menu>
        </hl-sub-menu>
        <hl-menu-item index="2">
          <hl-icon class="item-icon"><two-application /></hl-icon>
          <template #title>\u5BFC\u822A\u4E8C</template>
        </hl-menu-item>
        <hl-menu-item index="3" disabled>
          <hl-icon class="item-icon"><two-file /></hl-icon>
          <template #title>\u5BFC\u822A\u4E09</template>
        </hl-menu-item>
        <hl-menu-item index="4">
          <hl-icon class="item-icon"><two-setting /></hl-icon>
          <template #title>\u5BFC\u822A\u56DB</template>
        </hl-menu-item>
      </hl-menu>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent } from 'vue'
import { TwoPoint, TwoApplication, TwoFile, TwoSetting } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoPoint, TwoApplication, TwoFile, TwoSetting },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      handleOpen,
      handleClose,
    }
  },
})
<\/script>
`)],-1),xu=d("h2",{id:"zhe-die"},[d("a",{class:"header-anchor",href:"#zhe-die"}),s(" \u6298\u53E0")],-1),Au=d("p",null,[d("em",null,[d("strong",null,"\u6CE8\u610F")]),s(" \u5728\u542F\u7528\u54CD\u5E94\u5F0F\u7684\u60C5\u51B5\u4E0B\uFF0C\u903B\u8F91\u53D8\u6210\uFF1A\u624B\u5DE5\u8BBE\u7F6E\u6298\u53E0\u4EE5\u540E\uFF0C\u54CD\u5E94\u5F0F\u4E0D\u8D77\u4F5C\u7528\uFF0C\u53EA\u80FD\u624B\u5DE5\u5C55\u5F00\u3002\u5728\u54CD\u5E94\u5F0F\u6298\u53E0\u8D77\u4F5C\u7528\u65F6\uFF0C\u624B\u5DE5\u5C55\u5F00\u4E0D\u8D77\u4F5C\u7528\uFF0C\u53EA\u80FD\u9760\u54CD\u5E94\u5F0F\u5C55\u5F00\u3002 \u60A8\u4E5F\u53EF\u4EE5\u8BBE\u7F6E "),d("code",null,".hl-layout"),s(" \u4E0B "),d("code",null,"--layout-aside-respond-width"),s(" \u53D8\u91CF\u4E3Afalse\uFF08\u4E0D\u652F\u6301\u52A8\u6001\u4FEE\u6539\u6B64\u503C\uFF09\uFF0C\u5173\u95EDLayout\u7EC4\u4EF6\u4E0B\u83DC\u5355\u54CD\u5E94\u5F0F\u6298\u53E0\u529F\u80FD\u3002")],-1),gu=d("div",null,[d("p",null,"\u5F53\u83DC\u5355\u6CA1\u6709\u7F6E\u4E8ELayout\u7EC4\u4EF6\u4E0B\u65F6\uFF0C\u54CD\u5E94\u5F0F\u4E0D\u4F1A\u5BF9\u83DC\u5355\u8D77\u4F5C\u7528")],-1),wu=d("pre",null,[d("code",{class:"html"},` <template>
  <hl-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <hl-radio :label="false">\u5C55\u5F00</hl-radio>
    <hl-radio :label="true">\u6536\u8D77</hl-radio>
  </hl-radio-group>

  <hl-menu default-active="1-4-1" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <hl-menu-item-group>
      <template #title>DASHBOARD</template>
      <hl-menu-item>
        <hl-icon class="item-icon"><two-layer /></hl-icon>
        <template #title>\u4EEA\u8868\u76D8</template>
      </hl-menu-item>
      <hl-menu-item>
        <hl-icon class="item-icon"><Two-airplay /></hl-icon>
        <template #title>\u5DE5\u4F5C\u53F0</template>
      </hl-menu-item>
    </hl-menu-item-group>

    <hl-menu-item-group>
      <template #title>Pages</template>
      <hl-sub-menu index="forms" :popper-append-to-body="true" :fallback-placements="['right-start']">
        <template #title>
          <hl-icon class="item-icon"><two-edit /></hl-icon>
          <span>\u8868\u5355\u9875</span>
        </template>
        <hl-menu-item>\u57FA\u7840\u8868\u5355</hl-menu-item>
      </hl-sub-menu>

      <hl-sub-menu index="verify" :popper-append-to-body="true" :fallback-placements="['right-start']">
        <template #title>
          <hl-icon class="item-icon"><two-preview /></hl-icon>
          <span>\u6CE8\u518C\u767B\u5F55</span>
        </template>
        <hl-menu-item index="/verify/sign-up">\u6CE8\u518C</hl-menu-item>
        <hl-menu-item index="/verify/sign-in">\u767B\u5F55</hl-menu-item>
        <hl-menu-item index="/verify/sign-up-step">\u5206\u6B65\u6CE8\u518C</hl-menu-item>
      </hl-sub-menu>
    </hl-menu-item-group>

    <hl-menu-item-group>
      <template #title>LAYOUT</template>
      <hl-sub-menu index="10" :popper-append-to-body="true" :fallback-placements="['right-start']">
        <template #title>
          <hl-icon class="item-icon"><two-application /></hl-icon>
          <span>\u6846\u67B6</span>
        </template>
        <hl-menu-item index="table">\u6B22\u8FCE</hl-menu-item>
        <hl-menu-item index="table">\u63D0\u793A</hl-menu-item>
        <hl-menu-item index="table">\u8868\u5355</hl-menu-item>
      </hl-sub-menu>
    </hl-menu-item-group>
  </hl-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoApplication, TwoAirplay, TwoEdit, TwoLayer, TwoPreview } from '@hongluan-ui/icons'

const isCollapse = ref(true)

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
<\/script>

`)],-1),yu=cu('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>mode</td><td>\u6A21\u5F0F</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>\u662F\u5426\u6C34\u5E73\u6298\u53E0\u6536\u8D77\u83DC\u5355\uFF08\u4EC5\u5728 mode \u4E3A vertical \u65F6\u53EF\u7528\uFF09</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>ellipsis</td><td>\u662F\u5426\u663E\u793A\u7701\u7565\u7B26\uFF08\u4EC5\u5728 mode \u4E3A vertical \u65F6\u53EF\u7528\uFF09</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>background-color</td><td>\u83DC\u5355\u7684\u80CC\u666F\u8272\uFF08\u4EC5\u652F\u6301 hex \u683C\u5F0F\uFF09</td><td>string</td><td>\u2014</td><td>#ffffff</td></tr><tr><td>text-color</td><td>\u83DC\u5355\u7684\u6587\u5B57\u989C\u8272\uFF08\u4EC5\u652F\u6301 hex \u683C\u5F0F\uFF09</td><td>string</td><td>\u2014</td><td>#303133</td></tr><tr><td>active-text-color</td><td>\u5F53\u524D\u6FC0\u6D3B\u83DC\u5355\u7684\u6587\u5B57\u989C\u8272\uFF08\u4EC5\u652F\u6301 hex \u683C\u5F0F\uFF09</td><td>string</td><td>\u2014</td><td>#409EFF</td></tr><tr><td>default-active</td><td>\u5F53\u524D\u6FC0\u6D3B\u83DC\u5355\u7684 index</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>default-openeds</td><td>\u5F53\u524D\u6253\u5F00\u7684 sub-menu \u7684 index \u7684\u6570\u7EC4</td><td>Array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>unique-opened</td><td>\u662F\u5426\u53EA\u4FDD\u6301\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u5C55\u5F00</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>menu-trigger</td><td>\u5B50\u83DC\u5355\u6253\u5F00\u7684\u89E6\u53D1\u65B9\u5F0F(\u53EA\u5728 mode \u4E3A horizontal \u65F6\u6709\u6548)</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>\u662F\u5426\u4F7F\u7528 vue-router \u7684\u6A21\u5F0F\uFF0C\u542F\u7528\u8BE5\u6A21\u5F0F\u4F1A\u5728\u6FC0\u6D3B\u5BFC\u822A\u65F6\u4EE5 index \u4F5C\u4E3A path \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u5C55\u5F00\u6307\u5B9A\u7684 sub-menu</td><td>index: \u9700\u8981\u6253\u5F00\u7684 sub-menu \u7684 index</td></tr><tr><td>close</td><td>\u6536\u8D77\u6307\u5B9A\u7684 sub-menu</td><td>index: \u9700\u8981\u6536\u8D77\u7684 sub-menu \u7684 index</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u83DC\u5355\u6FC0\u6D3B\u56DE\u8C03</td><td>index: \u9009\u4E2D\u83DC\u5355\u9879\u7684 index, indexPath: \u9009\u4E2D\u83DC\u5355\u9879\u7684 index path, item: \u9009\u4E2D\u83DC\u5355\u9879, routeResult: vue-router \u7684\u8FD4\u56DE\u503C\uFF08\u5982\u679C router \u4E3A true\uFF09</td></tr><tr><td>open</td><td>sub-menu \u5C55\u5F00\u7684\u56DE\u8C03</td><td>index: \u6253\u5F00\u7684 sub-menu \u7684 index, indexPath: \u6253\u5F00\u7684 sub-menu \u7684 index path</td></tr><tr><td>close</td><td>sub-menu \u6536\u8D77\u7684\u56DE\u8C03</td><td>index: \u6536\u8D77\u7684 sub-menu \u7684 index, indexPath: \u6536\u8D77\u7684 sub-menu \u7684 index path</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u5B50\u6807\u7B7E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td>SubMenu / MenuItem / MenuItemGroup</td></tr></tbody></table><h2 id="sub-menu-attributes"><a class="header-anchor" href="#sub-menu-attributes"></a> Sub Menu Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>index</td><td>\u552F\u4E00\u6807\u5FD7</td><td>string/null</td><td>\u2014</td><td>null</td></tr><tr><td>popper-class</td><td>\u5F39\u51FA\u83DC\u5355\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-timeout</td><td>\u5C55\u5F00 sub-menu \u7684\u5EF6\u65F6</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>hide-timeout</td><td>\u6536\u8D77 sub-menu \u7684\u5EF6\u65F6</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>\u662F\u5426\u5C06\u5F39\u51FA\u83DC\u5355\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u83DC\u5355\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C1D\u8BD5\u4FEE\u6539\u8BE5\u5C5E\u6027</td><td>boolean</td><td>\u2014</td><td>\u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Atrue / \u975E\u4E00\u7EA7\u5B50\u83DC\u5355\uFF1Afalse</td></tr><tr><td>fallback-placements</td><td>\u5F39\u51FA\u83DC\u5355\u4F4D\u7F6E\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u6B64\u5C5E\u6027\u53EF\u4EE5\u5F3A\u5236\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u5426\u5219\u6309\u7167\u9ED8\u8BA4\u8BBE\u7F6E\u8FDB\u884C\u4F4D\u7F6E\u8BA1\u7B97</td><td>string[]</td><td>\u2014</td><td>-</td></tr><tr><td>popper-offset</td><td>\u5F39\u6846\u504F\u79FB</td><td>number</td><td>\u2014</td><td>0</td></tr></tbody></table><h2 id="sub-menu-slots"><a class="header-anchor" href="#sub-menu-slots"></a> Sub Menu Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u5B50\u6807\u7B7E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td>SubMenu / MenuItem / MenuItemGroup</td></tr></tbody></table><h2 id="menu-item-attributes"><a class="header-anchor" href="#menu-item-attributes"></a> Menu Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>index</td><td>\u552F\u4E00\u6807\u5FD7</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>route</td><td>Vue Router \u8DEF\u5F84\u5BF9\u8C61</td><td>Object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="menu-item-events"><a class="header-anchor" href="#menu-item-events"></a> Menu Item Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u5355\u51FB\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</td><td>el: MenuItem\u5B9E\u4F8B</td></tr></tbody></table><h2 id="menu-item-slots"><a class="header-anchor" href="#menu-item-slots"></a> Menu Item Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table><h2 id="menu-item-group-attributes"><a class="header-anchor" href="#menu-item-group-attributes"></a> Menu Item Group Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5206\u7EC4\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="menu-item-group-slots"><a class="header-anchor" href="#menu-item-group-slots"></a> Menu Item Group Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u5B50\u6807\u7B7E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td>MenuItem</td></tr></tbody></table>',22);function vu(e,n,u,t,o,v){const f=Y("hl-demo0"),r=Y("demo-block"),D=Y("hl-demo1"),B=Y("hl-demo2"),b=Y("right-nav");return su(),hu(mu,null,[d("section",null,[Fu,pu,w(r,{fs:""},{source:F(()=>[w(f)]),highlight:F(()=>[Cu]),default:F(()=>[Eu]),_:1}),fu,Du,w(r,{fs:""},{source:F(()=>[w(D)]),highlight:F(()=>[bu]),default:F(()=>[Bu]),_:1}),xu,Au,w(r,{fs:""},{source:F(()=>[w(B)]),highlight:F(()=>[wu]),default:F(()=>[gu]),_:1}),yu]),w(b)],64)}var Ou=ru(_u,[["render",vu]]);export{Ou as default};
