var V=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var S=(o,u,e)=>u in o?V(o,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[u]=e,y=(o,u)=>{for(var e in u||(u={}))L.call(u,e)&&S(o,e,u[e]);if(k)for(var e of k(u))N.call(u,e)&&S(o,e,u[e]);return o};import{H as v,o as j,c as $,g as t,T as m,M as d,Y as z,aA as x,_ as p,az as M}from"./vue.ce25aa37.js";import{_ as H}from"./index.4a92399f.js";import"./hongluan.3c5b9861.js";import"./highlight.e2508551.js";import"./hongluan-icons.f928b84f.js";const I={name:"component-doc",components:{"hl-demo0":function(){const{renderList:o,Fragment:u,openBlock:e,createElementBlock:s,toDisplayString:_,createElementVNode:a,resolveComponent:r,withCtx:l,createBlock:c}=x;function i(B,A){const g=r("hl-scrollbar");return e(),c(g,{height:"400px"},{default:l(()=>[(e(),s(u,null,o(20,F=>a("span",{key:F,class:"display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs"},_(F),1)),64))]),_:1})}return y({render:i},{})}(),"hl-demo1":function(){const{renderList:o,Fragment:u,openBlock:e,createElementBlock:s,toDisplayString:_,createElementVNode:a,resolveComponent:r,withCtx:l,createBlock:c}=x,i={class:"display-flex",style:{gap:"var(--md)"}};function E(A,g){const F=r("hl-scrollbar");return e(),c(F,null,{default:l(()=>[a("div",i,[(e(),s(u,null,o(20,n=>a("span",{key:n,class:"w-sm static p-md bg-primary text-center text-inverse radius-xs"},_(n),1)),64))])]),_:1})}return y({render:E},{})}(),"hl-demo2":function(){const{createTextVNode:o,resolveComponent:u,withCtx:e,createVNode:s,renderList:_,Fragment:a,openBlock:r,createElementBlock:l,toDisplayString:c}=x,i=o("\u6DFB\u52A0\u5143\u7D20"),E=o("\u5220\u9664\u5143\u7D20");function B(n,D){const f=u("hl-button"),b=u("hl-scrollbar");return r(),l(a,null,[s(f,{class:"m-r-md",onClick:n.add},{default:e(()=>[i]),_:1},8,["onClick"]),s(f,{onClick:n.del},{default:e(()=>[E]),_:1},8,["onClick"]),s(b,{"max-height":"400px"},{default:e(()=>[(r(!0),l(a,null,_(n.count,h=>(r(),l("span",{key:h,class:"display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs"},c(h),1))),128))]),_:1})],64)}const{defineComponent:A,ref:g}=x,F=A({setup(){const n=g(3);return{count:n,add:()=>{n.value++},del:()=>{n.value>0&&n.value--}}}});return y({render:B},F)}(),"hl-demo3":function(){const{renderList:o,Fragment:u,openBlock:e,createElementBlock:s,toDisplayString:_,createElementVNode:a,resolveComponent:r,withCtx:l,createVNode:c}=x,i={ref:"inner"};function E(n,D){const f=r("hl-scrollbar"),b=r("hl-slider");return e(),s(u,null,[c(f,{ref:"scrollbar",height:"400px",always:"",onScroll:n.scroll},{default:l(()=>[a("div",i,[(e(),s(u,null,o(20,h=>a("span",{key:h,class:"display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs"},_(h),1)),64))],512)]),_:1},8,["onScroll"]),c(b,{modelValue:n.value,"onUpdate:modelValue":D[0]||(D[0]=h=>n.value=h),max:n.max,"format-tooltip":n.formatTooltip,onInput:n.inputSlider},null,8,["modelValue","max","format-tooltip","onInput"])],64)}const{defineComponent:B,ref:A,onMounted:g}=x,F=B({setup(){const n=A(0),D=A(0),f=A(null),b=A(null),h=C=>{b.value.setScrollTop(C)},w=C=>`${C} px`,T=({scrollTop:C})=>{D.value=C};return g(()=>{n.value=f.value.clientHeight-380}),{max:n,value:D,inner:f,scrollbar:b,scroll:T,inputSlider:h,formatTooltip:w}}});return y({render:E},F)}()}},Y=t("h1",null,"Scrollbar \u6EDA\u52A8\u6761",-1),U=t("p",null,"\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761\u3002",-1),W=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),p(" \u57FA\u7840\u7528\u6CD5")],-1),q=t("div",null,[t("p",null,[p("\u901A\u8FC7 "),t("code",null,"height"),p(" \u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u9AD8\u5EA6\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u7236\u5BB9\u5668\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002")])],-1),G=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar height="400px">
    <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse radius-xs">{{ item }}</span>
  </hl-scrollbar>
</template>
`)],-1),J=t("h2",{id:"heng-xiang-gun-dong"},[t("a",{class:"header-anchor",href:"#heng-xiang-gun-dong"}),p(" \u6A2A\u5411\u6EDA\u52A8")],-1),K=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u5BBD\u5EA6\u5927\u4E8E\u6EDA\u52A8\u6761\u5BBD\u5EA6\u65F6\uFF0C\u4F1A\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u6A2A\u5411\u6EDA\u52A8\u3002")],-1),O=t("pre",null,[t("code",{class:"html"},` <template>
  <hl-scrollbar>
    <div class="display-flex" style="gap: var(--md)">
      <span v-for="item in 20" :key="item" class="w-sm static p-md bg-primary text-center text-inverse radius-xs">{{ item }}</span>
    </div>
  </hl-scrollbar>
</template>
`)],-1),P=t("h2",{id:"zui-da-gao-du"},[t("a",{class:"header-anchor",href:"#zui-da-gao-du"}),p(" \u6700\u5927\u9AD8\u5EA6")],-1),Q=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u9AD8\u5EA6\u8D85\u8FC7\u6700\u5927\u9AD8\u5EA6\uFF0C\u624D\u4F1A\u663E\u793A\u6EDA\u52A8\u6761\u3002")],-1),R=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),X=t("h2",{id:"shou-dong-gun-dong"},[t("a",{class:"header-anchor",href:"#shou-dong-gun-dong"}),p(" \u624B\u52A8\u6EDA\u52A8")],-1),Z=t("div",null,[t("p",null,[p("\u901A\u8FC7\u4F7F\u7528 "),t("code",null,"setScrollTop"),p(" \u4E0E "),t("code",null,"setScrollLeft"),p(" \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u6EDA\u52A8\u6761\u6EDA\u52A8\u3002")])],-1),tt=t("pre",null,[t("code",{class:"html"},` <template>
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
`)],-1),et=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u6EDA\u52A8\u6761\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max-height</td><td>\u6EDA\u52A8\u6761\u6700\u5927\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>native</td><td>\u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>wrap-style</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>wrap-class</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-style</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-class</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>noresize</td><td>\u4E0D\u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316\uFF0C\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tag</td><td>\u89C6\u56FE\u7684\u5143\u7D20\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>div</td></tr><tr><td>always</td><td>\u6EDA\u52A8\u6761\u603B\u662F\u663E\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min-size</td><td>\u6EDA\u52A8\u6761\u6700\u5C0F\u5C3A\u5BF8</td><td>number</td><td>\u2014</td><td>20</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u6EDA\u52A8\u8DDD\u79BB { scrollLeft, scrollTop }</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>setScrollTop</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB</td><td>(scrollTop: number)</td></tr><tr><td>setScrollLeft</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u5DE6\u8FB9\u7684\u8DDD\u79BB</td><td>(scrollLeft: number)</td></tr><tr><td>update</td><td>\u624B\u52A8\u66F4\u65B0\u6EDA\u52A8\u6761\u72B6\u6001</td><td>\u2014</td></tr></tbody></table>',6);function ut(o,u,e,s,_,a){const r=v("hl-demo0"),l=v("demo-block"),c=v("hl-demo1"),i=v("hl-demo2"),E=v("hl-demo3"),B=v("right-nav");return j(),$(z,null,[t("section",null,[Y,U,W,m(l,{fs:""},{source:d(()=>[m(r)]),highlight:d(()=>[G]),default:d(()=>[q]),_:1}),J,m(l,{fs:""},{source:d(()=>[m(c)]),highlight:d(()=>[O]),default:d(()=>[K]),_:1}),P,m(l,{fs:""},{source:d(()=>[m(i)]),highlight:d(()=>[R]),default:d(()=>[Q]),_:1}),X,m(l,{fs:""},{source:d(()=>[m(E)]),highlight:d(()=>[tt]),default:d(()=>[Z]),_:1}),et]),m(B)],64)}var at=H(I,[["render",ut]]);export{at as default};
