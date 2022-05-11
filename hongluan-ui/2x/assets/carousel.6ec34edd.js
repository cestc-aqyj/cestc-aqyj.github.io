var z=Object.defineProperty;var w=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(l,o,e)=>o in l?z(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e,b=(l,o)=>{for(var e in o||(o={}))q.call(o,e)&&N(l,e,o[e]);if(w)for(var e of w(o))L.call(o,e)&&N(l,e,o[e]);return l};import{H as v,L as j,W as S,Q as t,X as _,P as d,a4 as I,aJ as y,S as r,o as $}from"./vue.059774a0.js";import{_ as M}from"./index.ea916894.js";import"./hongluan.43ef0c0e.js";import"./highlight.d526497d.js";import"./hongluan-icons.5b925e95.js";const H={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:l,renderList:o,Fragment:e,openBlock:c,createElementBlock:a,toDisplayString:h,resolveComponent:n,withCtx:u,createVNode:i,createBlock:p}=y,F=l("span",{class:"demonstration"},"\u9ED8\u8BA4 Hover \u6307\u793A\u5668\u89E6\u53D1",-1),E={class:"w-full h-full bg-primary light-2 display-flex items-center items-middle text-inverse font-lg font-bold"},A=l("span",{class:"demonstration"},"Click \u6307\u793A\u5668\u89E6\u53D1 ",-1),C={class:"w-full h-full bg-primary light-2 display-flex items-center items-middle text-inverse font-lg font-bold"};function s(f,g){const x=n("hl-carousel-item"),k=n("hl-carousel"),D=n("hl-group");return c(),p(D,{full:"",gap:"var(--xxl)"},{default:u(()=>[i(D,{dir:"vertical"},{default:u(()=>[F,i(k,{height:"150px"},{default:u(()=>[(c(),a(e,null,o(4,B=>i(x,{key:B},{default:u(()=>[l("div",E,h(B),1)]),_:2},1024)),64))]),_:1})]),_:1}),i(D,{dir:"vertical"},{default:u(()=>[A,i(k,{trigger:"click","indicator-type":"dot",height:"150px"},{default:u(()=>[(c(),a(e,null,o(4,B=>i(x,{key:B},{default:u(()=>[l("div",C,h(B),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}return b({render:s},{})}(),"hl-demo1":function(){const{renderList:l,Fragment:o,openBlock:e,createElementBlock:c,toDisplayString:a,createElementVNode:h,resolveComponent:n,withCtx:u,createVNode:i,createBlock:p}=y,F={class:"w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold"};function E(C,s){const m=n("hl-carousel-item"),f=n("hl-carousel");return e(),p(f,{"indicator-position":"outside"},{default:u(()=>[(e(),c(o,null,l(4,g=>i(m,{key:g},{default:u(()=>[h("div",F,a(g),1)]),_:2},1024)),64))]),_:1})}return b({render:E},{})}(),"hl-demo2":function(){const{renderList:l,Fragment:o,openBlock:e,createElementBlock:c,toDisplayString:a,createElementVNode:h,resolveComponent:n,withCtx:u,createVNode:i,createBlock:p}=y,F={class:"w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold"};function E(C,s){const m=n("hl-carousel-item"),f=n("hl-carousel");return e(),p(f,{interval:5e3,arrow:"always"},{default:u(()=>[(e(),c(o,null,l(4,g=>i(m,{key:g},{default:u(()=>[h("div",F,a(g),1)]),_:2},1024)),64))]),_:1})}return b({render:E},{})}(),"hl-demo3":function(){const{renderList:l,Fragment:o,openBlock:e,createElementBlock:c,toDisplayString:a,createElementVNode:h,resolveComponent:n,withCtx:u,createVNode:i,createBlock:p}=y,F={class:"w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold"};function E(C,s){const m=n("hl-carousel-item"),f=n("hl-carousel");return e(),p(f,{interval:4e3,type:"card",height:"200px"},{default:u(()=>[(e(),c(o,null,l(6,g=>i(m,{key:g},{default:u(()=>[h("div",F,a(g),1)]),_:2},1024)),64))]),_:1})}return b({render:E},{})}(),"hl-demo4":function(){const{renderList:l,Fragment:o,openBlock:e,createElementBlock:c,toDisplayString:a,createElementVNode:h,resolveComponent:n,withCtx:u,createVNode:i,createBlock:p}=y,F={class:"w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold"};function E(C,s){const m=n("hl-carousel-item"),f=n("hl-carousel");return e(),p(f,{height:"200px",direction:"vertical",autoplay:!1},{default:u(()=>[(e(),c(o,null,l(3,g=>i(m,{key:g},{default:u(()=>[h("div",F,a(g),1)]),_:2},1024)),64))]),_:1})}return b({render:E},{})}(),"hl-demo5":function(){const{renderList:l,Fragment:o,openBlock:e,createElementBlock:c,resolveComponent:a,createVNode:h,withCtx:n,createBlock:u,normalizeClass:i,withModifiers:p}=y;function F(s,m){const f=a("hl-thumb"),g=a("hl-carousel-item"),x=a("hl-carousel-indicator"),k=a("hl-group"),D=a("hl-carousel");return e(),u(D,{class:"hl-carousel-indicator-inside",height:"400px",width:"100%","indicator-type":"custom",trigger:"click",autoplay:!1,"initial-index":1,onChange:s.change,onMouseenter:m[0]||(m[0]=p(B=>s.carouselDisplay=!0,["stop"])),onMouseleave:m[1]||(m[1]=p(B=>s.carouselDisplay=!1,["stop"]))},{indicator:n(()=>[h(k,{full:"full-x",class:i({active:s.carouselDisplay})},{default:n(()=>[(e(!0),c(o,null,l(s.imageData,(B,V)=>(e(),u(x,{key:B,index:V},{default:n(()=>[h(f,{style:{width:"100px",height:"100px"},src:B.url,fit:"cover"},null,8,["src"])]),_:2},1032,["index"]))),128))]),_:1},8,["class"])]),default:n(()=>[(e(!0),c(o,null,l(s.imageData,B=>(e(),u(g,{key:B},{default:n(()=>[h(f,{style:{width:"100%",height:"100%"},src:B.url,fit:"cover"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["onChange"])}const{defineComponent:E,ref:A}=y,C=E({setup(){const s=A([{url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg6.ddove.com%2Fupload%2F20160620%2F130253841615.jpg&refer=http%3A%2F%2Fimg6.ddove.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=fe2adfe3cd3c67dbc5ea1652a98e9cfc"},{url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F10%2F192621gvktnkenhheenken.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=758616c811511445b7c63570a47ecbfb"},{url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201404%2F12%2F121109atlt9fz05lr05e5q.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=6ce4f8edde1507a463a3df0603accdf8"}]),m=A(!1);return{imageData:s,carouselDisplay:m}}});return b({render:F},C)}(),"hl-demo6":function(){const{renderList:l,Fragment:o,openBlock:e,createElementBlock:c,toDisplayString:a,createElementVNode:h,resolveComponent:n,withCtx:u,createVNode:i}=y,p={class:"w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold"};function F(A,C){const s=n("hl-carousel-item"),m=n("hl-carousel");return e(),c("div",null,[i(m,{height:"150px",autoplay:!1,trigger:"click","items-number":4,"items-width":140},{default:u(()=>[(e(),c(o,null,l(7,f=>i(s,{key:f},{default:u(()=>[h("div",p,a(f),1)]),_:2},1024)),64))]),_:1})])}return b({render:F},{})}()}},P=t("h2",{id:"carousel-zou-ma-deng"},[t("a",{class:"header-anchor",href:"#carousel-zou-ma-deng"}),r(" Carousel \u8D70\u9A6C\u706F")],-1),W=t("h2",{id:"mo-ren-yang-shi"},[t("a",{class:"header-anchor",href:"#mo-ren-yang-shi"}),r(" \u9ED8\u8BA4\u6837\u5F0F")],-1),Q=t("div",null,[t("p",null,[r("\u7ED3\u5408\u4F7F\u7528 Carousel \u7EC4\u4EF6\u548C CarouselItem \u7EC4\u4EF6\u5C31\u5F97\u5230\u4E86\u4E00\u4E2A\u8D70\u9A6C\u706F\u3002\u5E7B\u706F\u7247\u7684\u5185\u5BB9\u662F\u4EFB\u610F\u7684\uFF0C\u9700\u8981\u653E\u5728 CarouselItem \u7EC4\u4EF6\u4E2D\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u9F20\u6807 hover \u5E95\u90E8\u7684\u6307\u793A\u5668\u65F6\u5C31\u4F1A\u89E6\u53D1\u5207\u6362\u3002\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"trigger"),r("\u5C5E\u6027\u4E3A"),t("code",null,"click"),r("\uFF0C\u53EF\u4EE5\u8FBE\u5230\u70B9\u51FB\u89E6\u53D1\u7684\u6548\u679C\u3002")])],-1),X=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-group full gap="var(--xxl)">
    <hl-group dir="vertical">
      <span class="demonstration">\u9ED8\u8BA4 Hover \u6307\u793A\u5668\u89E6\u53D1</span>
      <hl-carousel height="150px">
        <hl-carousel-item v-for="item in 4" :key="item">
          <div class="w-full h-full bg-primary light-2 display-flex items-center items-middle text-inverse font-lg font-bold">
            {{ item }}
          </div>
        </hl-carousel-item>
      </hl-carousel>
    </hl-group>

    <hl-group dir="vertical">
      <span class="demonstration">Click \u6307\u793A\u5668\u89E6\u53D1 </span>
      <hl-carousel trigger="click" indicator-type="dot" height="150px">
        <hl-carousel-item v-for="item in 4" :key="item">
          <div class="w-full h-full bg-primary light-2 display-flex items-center items-middle text-inverse font-lg font-bold">
            {{ item }}
          </div>
        </hl-carousel-item>
      </hl-carousel>
    </hl-group>
  </hl-group>
</template>
`)],-1),J=t("h2",{id:"zhi-shi-qi"},[t("a",{class:"header-anchor",href:"#zhi-shi-qi"}),r(" \u6307\u793A\u5668")],-1),G=t("p",null,"\u53EF\u4EE5\u5C06\u6307\u793A\u5668\u7684\u663E\u793A\u4F4D\u7F6E\u8BBE\u7F6E\u5728\u5BB9\u5668\u5916\u90E8",-1),K=t("div",null,[t("p",null,[t("code",null,"indicator-position"),r("\u5C5E\u6027\u5B9A\u4E49\u4E86\u6307\u793A\u5668\u7684\u4F4D\u7F6E\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4F1A\u663E\u793A\u5728\u8D70\u9A6C\u706F\u5185\u90E8\uFF0C\u8BBE\u7F6E\u4E3A"),t("code",null,"outside"),r("\u5219\u4F1A\u663E\u793A\u5728\u5916\u90E8\uFF1B\u8BBE\u7F6E\u4E3A"),t("code",null,"none"),r("\u5219\u4E0D\u4F1A\u663E\u793A\u6307\u793A\u5668\u3002")])],-1),O=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-carousel indicator-position="outside">
    <hl-carousel-item v-for="item in 4" :key="item">
      <div class="w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold">
        {{ item }}
      </div>
    </hl-carousel-item>
  </hl-carousel>
</template>
`)],-1),R=t("h2",{id:"qie-huan-jian-tou"},[t("a",{class:"header-anchor",href:"#qie-huan-jian-tou"}),r(" \u5207\u6362\u7BAD\u5934")],-1),T=t("p",null,"\u53EF\u4EE5\u8BBE\u7F6E\u5207\u6362\u7BAD\u5934\u7684\u663E\u793A\u65F6\u673A",-1),U=t("div",null,[t("p",null,[t("code",null,"arrow"),r("\u5C5E\u6027\u5B9A\u4E49\u4E86\u5207\u6362\u7BAD\u5934\u7684\u663E\u793A\u65F6\u673A\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5207\u6362\u7BAD\u5934\u53EA\u6709\u5728\u9F20\u6807 hover \u5230\u8D70\u9A6C\u706F\u4E0A\u65F6\u624D\u4F1A\u663E\u793A\uFF1B\u82E5\u5C06"),t("code",null,"arrow"),r("\u8BBE\u7F6E\u4E3A"),t("code",null,"always"),r("\uFF0C\u5219\u4F1A\u4E00\u76F4\u663E\u793A\uFF1B\u8BBE\u7F6E\u4E3A"),t("code",null,"never"),r("\uFF0C\u5219\u4F1A\u4E00\u76F4\u9690\u85CF\u3002")])],-1),Y=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-carousel :interval="5000" arrow="always">
    <hl-carousel-item v-for="item in 4" :key="item">
      <div class="w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold">
        {{ item }}
      </div>
    </hl-carousel-item>
  </hl-carousel>
</template>
`)],-1),Z=t("h2",{id:"qia-pian-hua"},[t("a",{class:"header-anchor",href:"#qia-pian-hua"}),r(" \u5361\u7247\u5316")],-1),tt=t("p",null,"\u5F53\u9875\u9762\u5BBD\u5EA6\u65B9\u5411\u7A7A\u95F4\u7A7A\u4F59\uFF0C\u4F46\u9AD8\u5EA6\u65B9\u5411\u7A7A\u95F4\u532E\u4E4F\u65F6\uFF0C\u53EF\u4F7F\u7528\u5361\u7247\u98CE\u683C",-1),et=t("div",null,[t("p",null,[r("\u5C06"),t("code",null,"type"),r("\u5C5E\u6027\u8BBE\u7F6E\u4E3A"),t("code",null,"card"),r("\u5373\u53EF\u542F\u7528\u5361\u7247\u6A21\u5F0F\u3002\u4ECE\u4EA4\u4E92\u4E0A\u6765\u8BF4\uFF0C\u5361\u7247\u6A21\u5F0F\u548C\u4E00\u822C\u6A21\u5F0F\u7684\u6700\u5927\u533A\u522B\u5728\u4E8E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u70B9\u51FB\u4E24\u4FA7\u7684\u5E7B\u706F\u7247\u8FDB\u884C\u5207\u6362\u3002")])],-1),ut=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-carousel :interval="4000" type="card" height="200px">
    <hl-carousel-item v-for="item in 6" :key="item">
      <div class="w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold">
        {{ item }}
      </div>
    </hl-carousel-item>
  </hl-carousel>
</template>
`)],-1),ot=t("h2",{id:"fang-xiang"},[t("a",{class:"header-anchor",href:"#fang-xiang"}),r(" \u65B9\u5411")],-1),lt=t("p",null,[r("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C"),t("code",null,"direction"),r(" \u4E3A "),t("code",null,"horizontal"),r("\u3002\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"direction"),r(" \u4E3A "),t("code",null,"vertical"),r(" \u6765\u8BA9\u8D70\u9A6C\u706F\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u663E\u793A\u3002")],-1),nt=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-carousel height="200px" direction="vertical" :autoplay="false">
    <hl-carousel-item v-for="item in 3" :key="item">
      <div class="w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold">
        {{ item }}
      </div>
    </hl-carousel-item>
  </hl-carousel>
</template>
`)],-1),rt=t("h2",{id:"zi-ding-yi-zhi-shi-qi-shi-li"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-zhi-shi-qi-shi-li"}),r(" \u81EA\u5B9A\u4E49\u6307\u793A\u5668\u793A\u4F8B")],-1),it=t("div",null,[t("p",null,"\u81EA\u5B9A\u4E49indicator\u65F6\uFF0C\u4F7F\u7528 CarouselIndicator \u7EC4\u4EF6")],-1),dt=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-carousel
    class="hl-carousel-indicator-inside"
    height="400px"
    width="100%"
    indicator-type="custom"
    trigger="click"
    :autoplay="false"
    :initial-index="1"
    @change="change"
    @mouseenter.stop="carouselDisplay = true"
    @mouseleave.stop="carouselDisplay = false"
  >
    <hl-carousel-item v-for="item in imageData" :key="item">
      <hl-thumb
        style="width: 100%; height: 100%"
        :src="item.url"
        fit="cover"
      />
    </hl-carousel-item>
    <template #indicator>
      <hl-group
        full="full-x"
        :class="{'active':carouselDisplay}"
      >
        <hl-carousel-indicator v-for="(item,index) in imageData" :key="item" :index="index">
          <hl-thumb
            style="width: 100px; height: 100px"
            :src="item.url"
            fit="cover"
          />
        </hl-carousel-indicator>
      </hl-group>
    </template>
  </hl-carousel>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const imageData = ref([
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg6.ddove.com%2Fupload%2F20160620%2F130253841615.jpg&refer=http%3A%2F%2Fimg6.ddove.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=fe2adfe3cd3c67dbc5ea1652a98e9cfc',
      },
      {
        url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F10%2F192621gvktnkenhheenken.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=758616c811511445b7c63570a47ecbfb',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201404%2F12%2F121109atlt9fz05lr05e5q.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615016975&t=6ce4f8edde1507a463a3df0603accdf8',
      },
    ])
    const carouselDisplay = ref(false)
    return {
      imageData,
      carouselDisplay,
    }
  },
})
<\/script>
`)],-1),at=t("h2",{id:"xian-shi-duo-zhang-tu-pian"},[t("a",{class:"header-anchor",href:"#xian-shi-duo-zhang-tu-pian"}),r(" \u663E\u793A\u591A\u5F20\u56FE\u7247")],-1),ct=t("div",null,[t("p",null,"\u53EF\u89C6\u533A\u57DF\u663E\u793A\u591A\u4E2Aitems\uFF0CCarouselItem \u7EC4\u4EF6\u7684\u6570\u91CF - itemsNumber >= 2 && type !== 'card' && direction === 'horizontal'\u65F6\u751F\u6548\uFF0CitemsNumber/itemsWidth\u5FC5\u4F20\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793Aindicator\u6307\u793A\u5668;")],-1),st=t("pre",null,[t("code",{class:"html"},` <template>
  <div>
    <hl-carousel height="150px" :autoplay="false" trigger="click" :items-number="4" :items-width="140">
      <hl-carousel-item v-for="item in 7" :key="item">
        <div class="w-full h-full bg-primary light-1 display-flex items-center items-middle text-inverse font-lg font-bold">
          {{ item }}
        </div>
      </hl-carousel-item>
    </hl-carousel>
  </div>
</template>

<style>
  .hl-carousel-item h4 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .hl-carousel-item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .hl-carousel-item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
`)],-1),ht=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u8D70\u9A6C\u706F\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>initial-index</td><td>\u521D\u59CB\u72B6\u6001\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>trigger</td><td>\u6307\u793A\u5668\u7684\u89E6\u53D1\u65B9\u5F0F</td><td>string</td><td>click</td><td>\u2014</td></tr><tr><td>autoplay</td><td>\u662F\u5426\u81EA\u52A8\u5207\u6362</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>interval</td><td>\u81EA\u52A8\u5207\u6362\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td><td>number</td><td>\u2014</td><td>3000</td></tr><tr><td>indicator-position</td><td>\u6307\u793A\u5668\u7684\u4F4D\u7F6E</td><td>string</td><td>outside/none</td><td>\u2014</td></tr><tr><td>arrow</td><td>\u5207\u6362\u7BAD\u5934\u7684\u663E\u793A\u65F6\u673A</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>\u8D70\u9A6C\u706F\u7684\u7C7B\u578B</td><td>string</td><td>card</td><td>\u2014</td></tr><tr><td>loop</td><td>\u662F\u5426\u5FAA\u73AF\u663E\u793A</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>direction</td><td>\u8D70\u9A6C\u706F\u5C55\u793A\u7684\u65B9\u5411</td><td>string</td><td>horizontal/vertical</td><td>horizontal</td></tr><tr><td>pause-on-hover</td><td>\u9F20\u6807\u60AC\u6D6E\u65F6\u6682\u505C\u81EA\u52A8\u5207\u6362</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>indicator-type</td><td>\u6307\u793A\u5668\u7C7B\u578B</td><td>string</td><td>line/dot/custom(\u81EA\u5B9A\u4E49)</td><td>line</td></tr><tr><td>slot</td><td>\u81EA\u5B9A\u4E49\u6307\u793A\u5668\u5177\u540D\u63D2\u69FD</td><td>v-slot:indicator</td><td></td><td></td></tr><tr><td>items-number</td><td>\u53EF\u89C6\u533A\u57DF\u663E\u793Aitems\u4E2A\u6570,</td><td>number</td><td></td><td>\u5927\u4E8E1</td></tr><tr><td>items-width</td><td>items-number &gt; 1\u65F6\uFF0Citems\u5BBD\u5EA6\u6709\u6548</td><td>string/number</td><td></td><td></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5E7B\u706F\u7247\u5207\u6362\u65F6\u89E6\u53D1</td><td>\u76EE\u524D\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u539F\u5E7B\u706F\u7247\u7684\u7D22\u5F15</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>setActiveItem</td><td>\u624B\u52A8\u5207\u6362\u5E7B\u706F\u7247</td><td>\u9700\u8981\u5207\u6362\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB\uFF1B\u6216\u76F8\u5E94 <code>hl-carousel-item</code> \u7684 <code>name</code> \u5C5E\u6027\u503C</td></tr><tr><td>prev</td><td>\u5207\u6362\u81F3\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247</td><td>\u2014</td></tr><tr><td>next</td><td>\u5207\u6362\u81F3\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247</td><td>\u2014</td></tr></tbody></table><h2 id="carousel-item-attributes"><a class="header-anchor" href="#carousel-item-attributes"></a> Carousel Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u5E7B\u706F\u7247\u7684\u540D\u5B57\uFF0C\u53EF\u7528\u4F5C <code>setActiveItem</code> \u7684\u53C2\u6570</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u8BE5\u5E7B\u706F\u7247\u6240\u5BF9\u5E94\u6307\u793A\u5668\u7684\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="carousel-indicator-attributes"><a class="header-anchor" href="#carousel-indicator-attributes"></a> Carousel Indicator Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>index</td><td>\u6307\u793A\u5668\u7D22\u5F15</td><td>number</td><td></td><td></td></tr></tbody></table><h2 id="carousel-indicator-events"><a class="header-anchor" href="#carousel-indicator-events"></a> Carousel Indicator Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u6307\u793A\u5668click\u65F6\u89E6\u53D1</td><td>\u76EE\u524D\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15</td></tr><tr><td>hover</td><td>\u6307\u793A\u5668hover\u65F6\u89E6\u53D1</td><td>\u76EE\u524D\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15</td></tr></tbody></table>',12);function mt(l,o,e,c,a,h){const n=v("hl-demo0"),u=v("demo-block"),i=v("hl-demo1"),p=v("hl-demo2"),F=v("hl-demo3"),E=v("hl-demo4"),A=v("hl-demo5"),C=v("hl-demo6"),s=v("right-nav");return j(),S(I,null,[t("section",null,[P,W,_(u,{fs:""},{source:d(()=>[_(n)]),highlight:d(()=>[X]),default:d(()=>[Q]),_:1}),J,G,_(u,{fs:""},{source:d(()=>[_(i)]),highlight:d(()=>[O]),default:d(()=>[K]),_:1}),R,T,_(u,{fs:""},{source:d(()=>[_(p)]),highlight:d(()=>[Y]),default:d(()=>[U]),_:1}),Z,tt,_(u,{fs:""},{source:d(()=>[_(F)]),highlight:d(()=>[ut]),default:d(()=>[et]),_:1}),ot,lt,_(u,{fs:""},{source:d(()=>[_(E)]),highlight:d(()=>[nt]),_:1}),rt,_(u,{fs:""},{source:d(()=>[_(A)]),highlight:d(()=>[dt]),default:d(()=>[it]),_:1}),at,_(u,{fs:""},{source:d(()=>[_(C)]),highlight:d(()=>[st]),default:d(()=>[ct]),_:1}),ht]),_(s)],64)}var Bt=M(H,[["render",mt]]);export{Bt as default};
