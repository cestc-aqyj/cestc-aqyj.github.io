var $=Object.defineProperty;var w=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var T=(o,e,u)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[e]=u,k=(o,e)=>{for(var u in e||(e={}))P.call(e,u)&&T(o,u,e[u]);if(w)for(var u of w(e))j.call(e,u)&&T(o,u,e[u]);return o};import{H as C,L as z,W as M,Q as t,X as E,P as s,a4 as H,S as _,o as O,aL as B}from"./vue.8f5537c1.js";import{_ as I}from"./index.417b30ee.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";import"./hongluan-icons.35255449.js";const Q={name:"component-doc",components:{"hl-demo0":function(){const{renderList:o,Fragment:e,openBlock:u,createElementBlock:a,toDisplayString:F,createElementVNode:c,resolveComponent:r,withCtx:l,createBlock:m}=B;function h(g,p){const D=r("hl-scrollbar");return u(),m(D,{height:"calc(var(--lg) * 10)"},{default:l(()=>[(u(),a(e,null,o(20,v=>c("span",{key:v,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},F(v),1)),64))]),_:1})}return k({render:h},{})}(),"hl-demo1":function(){const{renderList:o,Fragment:e,openBlock:u,createElementBlock:a,toDisplayString:F,createElementVNode:c,resolveComponent:r,withCtx:l,createBlock:m}=B,h={class:"display-flex",style:{gap:"var(--md)"}};function A(p,D){const v=r("hl-scrollbar");return u(),m(v,null,{default:l(()=>[c("div",h,[(u(),a(e,null,o(20,n=>c("span",{key:n,class:"w-sm static p-md bg-primary text-center text-inverse"},F(n),1)),64))])]),_:1})}return k({render:A},{})}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:e,withCtx:u,createVNode:a,renderList:F,Fragment:c,openBlock:r,createElementBlock:l,toDisplayString:m}=B,h=o("\u6DFB\u52A0\u5143\u7D20"),A=o("\u5220\u9664\u5143\u7D20");function g(n,f){const d=e("hl-button"),b=e("hl-scrollbar");return r(),l(c,null,[a(d,{class:"m-r-md",onClick:n.add},{default:u(()=>[h]),_:1},8,["onClick"]),a(d,{onClick:n.del},{default:u(()=>[A]),_:1},8,["onClick"]),a(b,{class:"m-t-lg","max-height":"calc(var(--lg) * 10)"},{default:u(()=>[(r(!0),l(c,null,F(n.count,i=>(r(),l("span",{key:i,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},m(i),1))),128))]),_:1})],64)}const{defineComponent:p}=B,{ref:D}=B;return k({render:g},p({setup(n,{expose:f}){f();const d=D(3),x={count:d,add:()=>{d.value++},del:()=>{d.value>0&&d.value--},ref:D};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}))}(),"hl-demo3":function(){const{renderList:o,Fragment:e,openBlock:u,createElementBlock:a,toDisplayString:F,createElementVNode:c,resolveComponent:r,withCtx:l,createVNode:m}=B,h={ref:"inner"};function A(n,f){const d=r("hl-scrollbar"),b=r("hl-slider");return u(),a(e,null,[m(d,{ref:"scrollbar",height:"calc(var(--lg) * 10)",always:"",onScroll:n.scroll},{default:l(()=>[c("div",h,[(u(),a(e,null,o(20,i=>c("span",{key:i,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},F(i),1)),64))],512)]),_:1},8,["onScroll"]),m(b,{modelValue:n.value,"onUpdate:modelValue":f[0]||(f[0]=i=>n.value=i),max:n.max,"format-tooltip":n.formatTooltip,onInput:n.inputSlider},null,8,["modelValue","max","format-tooltip","onInput"])],64)}const{defineComponent:g}=B,{ref:p,onMounted:D}=B;return k({render:A},g({setup(n,{expose:f}){f();const d=p(0),b=p(0),i=p(null),x=p(null),V=y=>{x.value.setScrollTop(y)},L=y=>`${y} px`,N=({scrollTop:y})=>{b.value=y};D(()=>{d.value=i.value.clientHeight-380});const S={max:d,value:b,inner:i,scrollbar:x,inputSlider:V,formatTooltip:L,scroll:N,ref:p,onMounted:D};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}))}()}},W=t("h1",null,"Scrollbar \u6EDA\u52A8\u6761",-1),X=t("p",null,"\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761\u3002",-1),U=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),_(" \u57FA\u7840\u7528\u6CD5")],-1),q=t("div",null,[t("p",null,[_("\u901A\u8FC7 "),t("code",null,"height"),_(" \u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u9AD8\u5EA6\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u7236\u5BB9\u5668\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002")])],-1),G=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar height="calc(var(--lg) * 10)">
    <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
  </hl-scrollbar>
</template>
`)],-1),J=t("h2",{id:"heng-xiang-gun-dong"},[t("a",{class:"header-anchor",href:"#heng-xiang-gun-dong"}),_(" \u6A2A\u5411\u6EDA\u52A8")],-1),K=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u5BBD\u5EA6\u5927\u4E8E\u6EDA\u52A8\u6761\u5BBD\u5EA6\u65F6\uFF0C\u4F1A\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u6A2A\u5411\u6EDA\u52A8\u3002")],-1),R=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar>
    <div class="display-flex" style="gap: var(--md)">
      <span v-for="item in 20" :key="item" class="w-sm static p-md bg-primary text-center text-inverse">{{ item }}</span>
    </div>
  </hl-scrollbar>
</template>
`)],-1),Y=t("h2",{id:"zui-da-gao-du"},[t("a",{class:"header-anchor",href:"#zui-da-gao-du"}),_(" \u6700\u5927\u9AD8\u5EA6")],-1),Z=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u9AD8\u5EA6\u8D85\u8FC7\u6700\u5927\u9AD8\u5EA6\uFF0C\u624D\u4F1A\u663E\u793A\u6EDA\u52A8\u6761\u3002")],-1),tt=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="add">\u6DFB\u52A0\u5143\u7D20</hl-button>
  <hl-button @click="del">\u5220\u9664\u5143\u7D20</hl-button>
  <hl-scrollbar class="m-t-lg" max-height="calc(var(--lg) * 10)">
    <span v-for="item in count" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
  </hl-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(3)

const add = () => {
  count.value++
}
const del = () => {
  if (count.value > 0) {
    count.value--
  }
}

<\/script>
`)],-1),ut=t("h2",{id:"shou-dong-gun-dong"},[t("a",{class:"header-anchor",href:"#shou-dong-gun-dong"}),_(" \u624B\u52A8\u6EDA\u52A8")],-1),et=t("div",null,[t("p",null,[_("\u901A\u8FC7\u4F7F\u7528 "),t("code",null,"setScrollTop"),_(" \u4E0E "),t("code",null,"setScrollLeft"),_(" \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u6EDA\u52A8\u6761\u6EDA\u52A8\u3002")])],-1),ot=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar ref="scrollbar" height="calc(var(--lg) * 10)" always @scroll="scroll">
    <div ref="inner">
      <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
    </div>
  </hl-scrollbar>
  <hl-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const max = ref(0)
const value = ref(0)
const inner = ref(null)
const scrollbar = ref(null)

const inputSlider = value => {
  scrollbar.value.setScrollTop(value)
}
const formatTooltip = value => {
  return \`\${value} px\`
}

const scroll = ({ scrollTop }) => {
  value.value = scrollTop
}

onMounted(() => {
  max.value = inner.value.clientHeight - 380
})
<\/script>
`)],-1),nt=O('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u6EDA\u52A8\u6761\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max-height</td><td>\u6EDA\u52A8\u6761\u6700\u5927\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>native</td><td>\u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>wrap-style</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>wrap-class</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-style</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-class</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>noresize</td><td>\u4E0D\u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316\uFF0C\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tag</td><td>\u89C6\u56FE\u7684\u5143\u7D20\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>div</td></tr><tr><td>always</td><td>\u6EDA\u52A8\u6761\u603B\u662F\u663E\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min-size</td><td>\u6EDA\u52A8\u6761\u6700\u5C0F\u5C3A\u5BF8</td><td>number</td><td>\u2014</td><td>20</td></tr><tr><td>distance</td><td>\u8DDD\u79BB\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u81F3\u5C11\u591A\u5C11\u50CF\u7D20\u89E6\u53D1\u4E8B\u4EF6\u3002<em><strong>\u8FD9\u4E2A\u503C\u6700\u597D\u4E0D\u8981\u8BBE\u7F6E\u62100\uFF0C\u5426\u5219\u6709\u53EF\u80FD\u4E0D\u89E6\u53D1\u4E8B\u4EF6</strong></em></td><td>number</td><td>\u2014</td><td>5</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u6EDA\u52A8\u8DDD\u79BB <code>{ scrollLeft, scrollTop }</code></td></tr><tr><td>at-end</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u65F6\u89E6\u53D1\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u6EDA\u52A8\u5230\u5E95\u90E8\u89E6\u53D1</td><td><code>{ vertical: true }</code></td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>scrollTo</td><td>\u6EDA\u52A8\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E</td><td>(options: ScrollToOptions | number, yCoord?: number)</td></tr><tr><td>setScrollTop</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB</td><td>(scrollTop: number)</td></tr><tr><td>setScrollLeft</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u5DE6\u8FB9\u7684\u8DDD\u79BB</td><td>(scrollLeft: number)</td></tr><tr><td>update</td><td>\u624B\u52A8\u66F4\u65B0\u6EDA\u52A8\u6761\u72B6\u6001</td><td>\u2014</td></tr></tbody></table>',6);function lt(o,e,u,a,F,c){const r=C("hl-demo0"),l=C("demo-block"),m=C("hl-demo1"),h=C("hl-demo2"),A=C("hl-demo3"),g=C("right-nav");return z(),M(H,null,[t("section",null,[W,X,U,E(l,{fs:""},{source:s(()=>[E(r)]),highlight:s(()=>[G]),default:s(()=>[q]),_:1}),J,E(l,{fs:""},{source:s(()=>[E(m)]),highlight:s(()=>[R]),default:s(()=>[K]),_:1}),Y,E(l,{fs:""},{source:s(()=>[E(h)]),highlight:s(()=>[tt]),default:s(()=>[Z]),_:1}),ut,E(l,{fs:""},{source:s(()=>[E(A)]),highlight:s(()=>[ot]),default:s(()=>[et]),_:1}),nt]),E(g)],64)}var mt=I(Q,[["render",lt]]);export{mt as default};
