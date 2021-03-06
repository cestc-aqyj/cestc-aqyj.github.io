var T=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var S=(o,e,u)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[e]=u,y=(o,e)=>{for(var u in e||(e={}))L.call(e,u)&&S(o,u,e[u]);if(k)for(var u of k(e))N.call(e,u)&&S(o,u,e[u]);return o};import{Y as v,L as j,W as $,Q as t,a2 as m,a0 as d,P as z,aG as x,a3 as p,o as M}from"./vue.a2bb788b.js";import{_ as P}from"./index.6c900e06.js";import"./hongluan.bb564fd4.js";import"./highlight.5c3ff532.js";import"./hongluan-icons.da8bad7b.js";const H={name:"component-doc",components:{"hl-demo0":function(){const{renderList:o,Fragment:e,openBlock:u,createElementBlock:s,toDisplayString:E,createElementVNode:a,resolveComponent:r,withCtx:l,createBlock:c}=x;function i(f,F){const b=r("hl-scrollbar");return u(),c(b,{height:"400px"},{default:l(()=>[(u(),s(e,null,o(20,A=>a("span",{key:A,class:"display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs"},E(A),1)),64))]),_:1})}return y({render:i},{})}(),"hl-demo1":function(){const{renderList:o,Fragment:e,openBlock:u,createElementBlock:s,toDisplayString:E,createElementVNode:a,resolveComponent:r,withCtx:l,createBlock:c}=x,i={class:"display-flex",style:{gap:"var(--md)"}};function _(F,b){const A=r("hl-scrollbar");return u(),c(A,null,{default:l(()=>[a("div",i,[(u(),s(e,null,o(20,n=>a("span",{key:n,class:"w-sm static p-md bg-primary text-center text-inverse radius-xs"},E(n),1)),64))])]),_:1})}return y({render:_},{})}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:e,withCtx:u,createVNode:s,renderList:E,Fragment:a,openBlock:r,createElementBlock:l,toDisplayString:c}=x,i=o("\u6DFB\u52A0\u5143\u7D20"),_=o("\u5220\u9664\u5143\u7D20");function f(n,B){const D=e("hl-button"),g=e("hl-scrollbar");return r(),l(a,null,[s(D,{class:"m-r-md",onClick:n.add},{default:u(()=>[i]),_:1},8,["onClick"]),s(D,{onClick:n.del},{default:u(()=>[_]),_:1},8,["onClick"]),s(g,{"max-height":"400px"},{default:u(()=>[(r(!0),l(a,null,E(n.count,h=>(r(),l("span",{key:h,class:"display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs"},c(h),1))),128))]),_:1})],64)}const{defineComponent:F,ref:b}=x,A=F({setup(){const n=b(3);return{count:n,add:()=>{n.value++},del:()=>{n.value>0&&n.value--}}}});return y({render:f},A)}(),"hl-demo3":function(){const{renderList:o,Fragment:e,openBlock:u,createElementBlock:s,toDisplayString:E,createElementVNode:a,resolveComponent:r,withCtx:l,createVNode:c}=x,i={ref:"inner"};function _(n,B){const D=r("hl-scrollbar"),g=r("hl-slider");return u(),s(e,null,[c(D,{ref:"scrollbar",height:"400px",always:"",onScroll:n.scroll},{default:l(()=>[a("div",i,[(u(),s(e,null,o(20,h=>a("span",{key:h,class:"display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs"},E(h),1)),64))],512)]),_:1},8,["onScroll"]),c(g,{modelValue:n.value,"onUpdate:modelValue":B[0]||(B[0]=h=>n.value=h),max:n.max,"format-tooltip":n.formatTooltip,onInput:n.inputSlider},null,8,["modelValue","max","format-tooltip","onInput"])],64)}const{defineComponent:f,ref:F,onMounted:b}=x,A=f({setup(){const n=F(0),B=F(0),D=F(null),g=F(null),h=C=>{g.value.setScrollTop(C)},w=C=>`${C} px`,V=({scrollTop:C})=>{B.value=C};return b(()=>{n.value=D.value.clientHeight-380}),{max:n,value:B,inner:D,scrollbar:g,scroll:V,inputSlider:h,formatTooltip:w}}});return y({render:_},A)}()}},I=t("h1",null,"Scrollbar \u6EDA\u52A8\u6761",-1),Q=t("p",null,"\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761\u3002",-1),W=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),p(" \u57FA\u7840\u7528\u6CD5")],-1),G=t("div",null,[t("p",null,[p("\u901A\u8FC7 "),t("code",null,"height"),p(" \u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u9AD8\u5EA6\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u7236\u5BB9\u5668\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002")])],-1),U=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar height="400px">
    <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs">{{ item }}</span>
  </hl-scrollbar>
</template>
`)],-1),X=t("h2",{id:"heng-xiang-gun-dong"},[t("a",{class:"header-anchor",href:"#heng-xiang-gun-dong"}),p(" \u6A2A\u5411\u6EDA\u52A8")],-1),Y=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u5BBD\u5EA6\u5927\u4E8E\u6EDA\u52A8\u6761\u5BBD\u5EA6\u65F6\uFF0C\u4F1A\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u6A2A\u5411\u6EDA\u52A8\u3002")],-1),q=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar>
    <div class="display-flex" style="gap: var(--md)">
      <span v-for="item in 20" :key="item" class="w-sm static p-md bg-primary text-center text-inverse radius-xs">{{ item }}</span>
    </div>
  </hl-scrollbar>
</template>
`)],-1),J=t("h2",{id:"zui-da-gao-du"},[t("a",{class:"header-anchor",href:"#zui-da-gao-du"}),p(" \u6700\u5927\u9AD8\u5EA6")],-1),K=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u9AD8\u5EA6\u8D85\u8FC7\u6700\u5927\u9AD8\u5EA6\uFF0C\u624D\u4F1A\u663E\u793A\u6EDA\u52A8\u6761\u3002")],-1),O=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-button class="m-r-md" @click="add">\u6DFB\u52A0\u5143\u7D20</hl-button>
  <hl-button @click="del">\u5220\u9664\u5143\u7D20</hl-button>
  <hl-scrollbar max-height="400px">
    <span v-for="item in count" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs">{{ item }}</span>
  </hl-scrollbar>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(3)

    const add = () => {
      count.value++
    }
    const del = () => {
      if (count.value > 0) {
        count.value--
      }
    }
    return {
      count,
      add,
      del,
    }
  },
})
<\/script>
`)],-1),R=t("h2",{id:"shou-dong-gun-dong"},[t("a",{class:"header-anchor",href:"#shou-dong-gun-dong"}),p(" \u624B\u52A8\u6EDA\u52A8")],-1),Z=t("div",null,[t("p",null,[p("\u901A\u8FC7\u4F7F\u7528 "),t("code",null,"setScrollTop"),p(" \u4E0E "),t("code",null,"setScrollLeft"),p(" \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u6EDA\u52A8\u6761\u6EDA\u52A8\u3002")])],-1),tt=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar ref="scrollbar" height="400px" always @scroll="scroll">
    <div ref="inner">
      <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs">{{ item }}</span>
    </div>
  </hl-scrollbar>
  <hl-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
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

    return {
      max,
      value,
      inner,
      scrollbar,
      scroll,
      inputSlider,
      formatTooltip,
    }
  },
})
<\/script>
`)],-1),ut=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u6EDA\u52A8\u6761\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max-height</td><td>\u6EDA\u52A8\u6761\u6700\u5927\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>native</td><td>\u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>wrap-style</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>wrap-class</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-style</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-class</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>noresize</td><td>\u4E0D\u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316\uFF0C\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tag</td><td>\u89C6\u56FE\u7684\u5143\u7D20\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>div</td></tr><tr><td>always</td><td>\u6EDA\u52A8\u6761\u603B\u662F\u663E\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min-size</td><td>\u6EDA\u52A8\u6761\u6700\u5C0F\u5C3A\u5BF8</td><td>number</td><td>\u2014</td><td>20</td></tr><tr><td>distance</td><td>\u8DDD\u79BB\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u81F3\u5C11\u591A\u5C11\u50CF\u7D20\u89E6\u53D1\u4E8B\u4EF6\u3002<em><strong>\u8FD9\u4E2A\u503C\u6700\u597D\u4E0D\u8981\u8BBE\u7F6E\u62100\uFF0C\u5426\u5219\u6709\u53EF\u80FD\u4E0D\u89E6\u53D1\u4E8B\u4EF6</strong></em></td><td>number</td><td>\u2014</td><td>5</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u6EDA\u52A8\u8DDD\u79BB <code>{ scrollLeft, scrollTop }</code></td></tr><tr><td>at-end</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u65F6\u89E6\u53D1\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u6EDA\u52A8\u5230\u5E95\u90E8\u89E6\u53D1</td><td><code>{ vertical: true }</code></td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>setScrollTop</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB</td><td>(scrollTop: number)</td></tr><tr><td>setScrollLeft</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u5DE6\u8FB9\u7684\u8DDD\u79BB</td><td>(scrollLeft: number)</td></tr><tr><td>update</td><td>\u624B\u52A8\u66F4\u65B0\u6EDA\u52A8\u6761\u72B6\u6001</td><td>\u2014</td></tr></tbody></table>',6);function et(o,e,u,s,E,a){const r=v("hl-demo0"),l=v("demo-block"),c=v("hl-demo1"),i=v("hl-demo2"),_=v("hl-demo3"),f=v("right-nav");return j(),$(z,null,[t("section",null,[I,Q,W,m(l,{fs:""},{source:d(()=>[m(r)]),highlight:d(()=>[U]),default:d(()=>[G]),_:1}),X,m(l,{fs:""},{source:d(()=>[m(c)]),highlight:d(()=>[q]),default:d(()=>[Y]),_:1}),J,m(l,{fs:""},{source:d(()=>[m(i)]),highlight:d(()=>[O]),default:d(()=>[K]),_:1}),R,m(l,{fs:""},{source:d(()=>[m(_)]),highlight:d(()=>[tt]),default:d(()=>[Z]),_:1}),ut]),m(f)],64)}var at=P(H,[["render",et]]);export{at as default};
