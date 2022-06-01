var M=Object.defineProperty;var N=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var O=(s,c,e)=>c in s?M(s,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[c]=e,V=(s,c)=>{for(var e in c||(c={}))I.call(c,e)&&O(s,e,c[e]);if(N)for(var e of N(c))H.call(c,e)&&O(s,e,c[e]);return s};import{H as k,L as Q,W as X,Q as u,X as B,P as i,a4 as K,S as t,o as W,aL as F}from"./vue.8f5537c1.js";import{H as J}from"./hongluan-icons.35255449.js";import{_ as G}from"./index.417b30ee.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";const Y={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:s,openBlock:c,createBlock:e}=F;function n(o,a){const r=s("hl-transfer");return c(),e(r,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=E=>o.value=E),data:o.data},null,8,["modelValue","data"])}const{defineComponent:l}=F,{ref:h}=F;return V({render:n},l({setup(o,{expose:a}){a();const r=()=>{const p=[];for(let d=1;d<=15;d++)p.push({key:d,label:`\u5907\u9009\u9879 ${d}`,disabled:d%4===0});return p},E=h(r()),m=h([1,4]),f={generateData:r,data:E,value:m,ref:h};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}(),"hl-demo1":function(){const{resolveComponent:s,openBlock:c,createBlock:e}=F;function n(o,a){const r=s("hl-transfer");return c(),e(r,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=E=>o.value=E),"left-default-checked":[1,4],titles:["Source","Target"],data:o.data,"show-buttons":!1,format:{noChecked:"${total}",hasChecked:"${total}"}},null,8,["modelValue","data"])}const{defineComponent:l}=F,{ref:h}=F;return V({render:n},l({setup(o,{expose:a}){a();const r=()=>{const p=[];for(let d=1;d<=15;d++)p.push({key:d,label:`\u5907\u9009\u9879 ${d}`,disabled:d%4===0});return p},E=h(r()),m=h([1,4]),f={generateData:r,data:E,value:m,ref:h};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}(),"hl-demo2":function(){const{resolveComponent:s,openBlock:c,createBlock:e}=F;function n(o,a){const r=s("hl-transfer");return c(),e(r,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=E=>o.value=E),filterable:"","filter-method":o.filterMethod,"filter-placeholder":"\u8BF7\u8F93\u5165\u57CE\u5E02\u62FC\u97F3",data:o.data},null,8,["modelValue","filter-method","data"])}const{defineComponent:l}=F,{ref:h}=F;return V({render:n},l({setup(o,{expose:a}){a();const r=()=>{const d=[],T=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733","\u5357\u4EAC","\u897F\u5B89","\u6210\u90FD"],g=["shanghai","beijing","guangzhou","shenzhen","nanjing","xian","chengdu"];return T.forEach((x,S)=>{d.push({label:x,key:S,spell:g[S]})}),d},E=h(r()),m=h([]),p={generateData:r,data:E,value:m,filterMethod:(d,T)=>T.spell.indexOf(d)>-1,ref:h};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}))}(),"hl-demo3":function(){const{createElementVNode:s,createTextVNode:c,resolveComponent:e,withCtx:n,createVNode:l,toDisplayString:h,openBlock:A,createBlock:o}=F,a=s("p",null,"\u4F7F\u7528 render-content \u81EA\u5B9A\u4E49\u6570\u636E\u9879",-1),r=c("\u64CD\u4F5C"),E=c("\u64CD\u4F5C"),m=s("p",{class:"m-t-lg"},"\u4F7F\u7528 scoped-slot \u81EA\u5B9A\u4E49\u6570\u636E\u9879",-1),f=s("span",null,"\u59D3\u540D",-1),p=s("div",{style:{display:"none"}},null,-1);function d(C,v){const b=e("hl-button"),w=e("hl-transfer"),j=e("hl-col"),R=e("hl-thumb"),$=e("two-folder-in"),L=e("hl-icon"),P=e("hl-group"),q=e("two-delete"),z=e("hl-row");return A(),o(z,null,{default:n(()=>[a,l(j,{span:"md:col-24"},{default:n(()=>[l(w,{modelValue:C.leftValue,"onUpdate:modelValue":v[0]||(v[0]=_=>C.leftValue=_),block:"",filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":C.renderFunc,titles:["Source","Target"],"button-texts":["\u5230\u5DE6\u8FB9","\u5230\u53F3\u8FB9"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:C.data,onChange:C.handleChange},{"left-footer":n(()=>[l(b,null,{default:n(()=>[r]),_:1})]),"right-footer":n(()=>[l(b,null,{default:n(()=>[E]),_:1})]),_:1},8,["modelValue","render-content","data","onChange"])]),_:1}),m,l(j,{span:"md:col-24"},{default:n(()=>[l(w,{ref:"transferRef",modelValue:C.rightValue,"onUpdate:modelValue":v[1]||(v[1]=_=>C.rightValue=_),block:"",filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:C.data,onChange:C.handleChange},{default:n(({option:_})=>[l(R,{round:"",type:"primary",size:"xs"},{default:n(()=>[f]),_:1}),s("span",null,h(_.key)+" - "+h(_.label),1)]),"left-footer":n(()=>[l(P,{full:"",align:"items-left"},{default:n(()=>[l(b,{equal:"","no-fill":"",onClick:C.addToRight},{icon:n(()=>[l(L,null,{default:n(()=>[l($)]),_:1})]),_:1},8,["onClick"])]),_:1})]),"right-footer":n(()=>[l(b,{type:"danger",equal:"","no-fill":"",onClick:C.addToLeft},{icon:n(()=>[l(L,null,{default:n(()=>[l(q)]),_:1})]),_:1},8,["onClick"])]),buttons:n(()=>[p]),_:1},8,["modelValue","data","onChange"])]),_:1})]),_:1})}const{defineComponent:T}=F,{ref:g}=F,{TwoFolderIn:x,TwoDelete:S}=J;return V({render:d},T({setup(C,{expose:v}){v();const b=()=>{const y=[];for(let D=1;D<=15;D++)y.push({key:D,label:`\u5907\u9009\u9879 ${D}`,disabled:D%4===0});return y},w=g(b()),j=g([1]),R=g([1]),$=g(null),_={generateData:b,data:w,leftValue:j,rightValue:R,transferRef:$,renderFunc:(y,D)=>y("span",null,D.key," - ",D.label),addToRight:()=>{$.value.addToRight()},addToLeft:()=>{$.value.addToLeft()},handleChange:(y,D,U)=>{console.log(y,D,U)},ref:g,TwoFolderIn:x,TwoDelete:S};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}))}(),"hl-demo4":function(){const{resolveComponent:s,openBlock:c,createBlock:e}=F;function n(o,a){const r=s("hl-transfer");return c(),e(r,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=E=>o.value=E),props:{key:"value",label:"desc"},data:o.data},null,8,["modelValue","data"])}const{defineComponent:l}=F,{ref:h}=F;return V({render:n},l({setup(o,{expose:a}){a();const r=()=>{const p=[];for(let d=1;d<=15;d++)p.push({value:d,desc:`\u5907\u9009\u9879 ${d}`,disabled:d%4===0});return p},E=h(r()),m=h([]),f={generateData:r,data:E,value:m,ref:h};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}()}},Z=u("h1",null,"Transfer \u7A7F\u68AD\u6846",-1),uu=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),t(" \u57FA\u7840\u7528\u6CD5")],-1),tu=u("div",null,[u("p",null,[t("Transfer \u7684\u6570\u636E\u901A\u8FC7 "),u("code",null,"data"),t(" \u5C5E\u6027\u4F20\u5165\u3002\u6570\u636E\u9700\u8981\u662F\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\uFF1A"),u("code",null,"key"),t(" \u4E3A\u6570\u636E\u7684\u552F\u4E00\u6027\u6807\u8BC6\uFF0C"),u("code",null,"label"),t(" \u4E3A\u663E\u793A\u6587\u672C\uFF0C"),u("code",null,"disabled"),t(" \u8868\u793A\u8BE5\u9879\u6570\u636E\u662F\u5426\u7981\u6B62\u8F6C\u79FB\u3002\u76EE\u6807\u5217\u8868\u4E2D\u7684\u6570\u636E\u9879\u4F1A\u540C\u6B65\u5230\u7ED1\u5B9A\u81F3 "),u("code",null,"v-model"),t(" \u7684\u53D8\u91CF\uFF0C\u503C\u4E3A\u6570\u636E\u9879\u7684 "),u("code",null,"key"),t(" \u6240\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u5F53\u7136\uFF0C\u5982\u679C\u5E0C\u671B\u5728\u521D\u59CB\u72B6\u6001\u65F6\u76EE\u6807\u5217\u8868\u4E0D\u4E3A\u7A7A\uFF0C\u53EF\u4EE5\u50CF\u672C\u4F8B\u4E00\u6837\u4E3A "),u("code",null,"v-model"),t(" \u7ED1\u5B9A\u7684\u53D8\u91CF\u8D4B\u4E88\u4E00\u4E2A\u521D\u59CB\u503C\u3002")])],-1),eu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-transfer v-model="value" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const value = ref([1, 4])

<\/script>
`)],-1),ou=u("h2",{id:"qie-huan-dan-xuan-mo-shi"},[u("a",{class:"header-anchor",href:"#qie-huan-dan-xuan-mo-shi"}),t(" \u5207\u6362\u5355\u9009\u6A21\u5F0F")],-1),nu=u("div",null,[u("p",null,[t("\u5F53"),u("code",null,"show-buttons"),t("\u8BBE\u7F6E\u4E3A false \u65F6\uFF0C\u5DE6\u53F3\u4FA7\u9762\u677F\u4F1A\u53D8\u6210\u5355\u51FB\u9009\u62E9\u6A21\u5F0F\u5E76\u4E14\u5DE6\u53F3\u4FA7\u9ED8\u8BA4\u9009\u4E2D\u9879\u4E0D\u518D\u6709\u6548\u3002")])],-1),du=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-transfer
    v-model="value"
    :left-default-checked="[1,4]"
    :titles="['Source', 'Target']"
    :data="data"
    :show-buttons="false"
    :format="{
      noChecked: '\${total}',
      hasChecked: '\${total}'
    }"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const value = ref([1, 4])
<\/script>
`)],-1),lu=u("h2",{id:"ke-sou-suo"},[u("a",{class:"header-anchor",href:"#ke-sou-suo"}),t(" \u53EF\u641C\u7D22")],-1),au=u("p",null,"\u5728\u6570\u636E\u5F88\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u641C\u7D22\u548C\u8FC7\u6EE4\u3002",-1),ru=u("div",null,[u("p",null,[t("\u8BBE\u7F6E "),u("code",null,"filterable"),t(" \u4E3A "),u("code",null,"true"),t(" \u5373\u53EF\u5F00\u542F\u641C\u7D22\u6A21\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u82E5\u6570\u636E\u9879\u7684 "),u("code",null,"label"),t(" \u5C5E\u6027\u5305\u542B\u641C\u7D22\u5173\u952E\u5B57\uFF0C\u5219\u4F1A\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u663E\u793A\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"filter-method"),t(" \u5B9A\u4E49\u81EA\u5DF1\u7684\u641C\u7D22\u903B\u8F91\u3002"),u("code",null,"filter-method"),t(" \u63A5\u6536\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5F53\u641C\u7D22\u5173\u952E\u5B57\u53D8\u5316\u65F6\uFF0C\u4F1A\u5C06\u5F53\u524D\u7684\u5173\u952E\u5B57\u548C\u6BCF\u4E2A\u6570\u636E\u9879\u4F20\u7ED9\u8BE5\u65B9\u6CD5\u3002\u82E5\u65B9\u6CD5\u8FD4\u56DE "),u("code",null,"true"),t("\uFF0C\u5219\u4F1A\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u663E\u793A\u5BF9\u5E94\u7684\u6570\u636E\u9879\u3002")])],-1),su=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-transfer v-model="value" filterable :filter-method="filterMethod" filter-placeholder="\u8BF7\u8F93\u5165\u57CE\u5E02\u62FC\u97F3" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  const cities = ['\u4E0A\u6D77', '\u5317\u4EAC', '\u5E7F\u5DDE', '\u6DF1\u5733', '\u5357\u4EAC', '\u897F\u5B89', '\u6210\u90FD']
  const spell = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
  cities.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      spell: spell[index],
    })
  })
  return data
}
const data = ref(generateData())
const value = ref([])
const filterMethod = (query, item) => {
  return item.spell.indexOf(query) > -1
}

<\/script>
`)],-1),cu=u("h2",{id:"ke-zi-ding-yi"},[u("a",{class:"header-anchor",href:"#ke-zi-ding-yi"}),t(" \u53EF\u81EA\u5B9A\u4E49")],-1),hu=u("p",null,"\u53EF\u4EE5\u5BF9\u5217\u8868\u6807\u9898\u6587\u6848\u3001\u6309\u94AE\u6587\u6848\u3001\u6570\u636E\u9879\u7684\u6E32\u67D3\u51FD\u6570\u3001\u5217\u8868\u5E95\u90E8\u7684\u52FE\u9009\u72B6\u6001\u6587\u6848\u3001\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9\u533A\u7B49\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002",-1),Eu=u("div",null,[u("p",null,[t("\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"titles"),t("\u3001"),u("code",null,"button-texts"),t("\u3001"),u("code",null,"render-content"),t(" \u548C "),u("code",null,"format"),t(" \u5C5E\u6027\u5206\u522B\u5BF9\u5217\u8868\u6807\u9898\u6587\u6848\u3001\u6309\u94AE\u6587\u6848\u3001\u6570\u636E\u9879\u7684\u6E32\u67D3\u51FD\u6570\u548C\u5217\u8868\u9876\u90E8\u7684\u52FE\u9009\u72B6\u6001\u6587\u6848\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002\u6570\u636E\u9879\u7684\u6E32\u67D3\u8FD8\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"scoped-slot"),t(" \u8FDB\u884C\u81EA\u5B9A\u4E49\u3002\u5BF9\u4E8E\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9\u533A\uFF0C\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5177\u540D slot\uFF1A"),u("code",null,"left-footer"),t(" \u548C "),u("code",null,"right-footer"),t("\u3002\u6B64\u5916\uFF0C\u5982\u679C\u5E0C\u671B\u67D0\u4E9B\u6570\u636E\u9879\u5728\u521D\u59CB\u5316\u65F6\u5C31\u88AB\u52FE\u9009\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"left-default-checked"),t(" \u548C "),u("code",null,"right-default-checked"),t(" \u5C5E\u6027\u3002\u6700\u540E\uFF0C\u672C\u4F8B\u8FD8\u5C55\u793A\u4E86 "),u("code",null,"change"),t(" \u4E8B\u4EF6\u7684\u7528\u6CD5\u3002\u6CE8\u610F\uFF1A\u7531\u4E8E jsfiddle \u4E0D\u652F\u6301 JSX \u8BED\u6CD5\uFF0C\u6240\u4EE5\u4F7F\u7528 "),u("code",null,"render-content"),t(" \u81EA\u5B9A\u4E49\u6570\u636E\u9879\u7684\u4F8B\u5B50\u5728 jsfiddle \u4E2D\u65E0\u6CD5\u8FD0\u884C\u3002\u4F46\u662F\u5728\u5B9E\u9645\u7684\u9879\u76EE\u4E2D\uFF0C\u53EA\u8981\u6B63\u786E\u5730\u914D\u7F6E\u4E86\u76F8\u5173\u4F9D\u8D56\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u3002")])],-1),iu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row>
    <p>\u4F7F\u7528 render-content \u81EA\u5B9A\u4E49\u6570\u636E\u9879</p>
    <hl-col span="md:col-24">
      <hl-transfer
        v-model="leftValue"
        block
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['\u5230\u5DE6\u8FB9', '\u5230\u53F3\u8FB9']"
        :format="{
          noChecked: '\${total}',
          hasChecked: '\${checked}/\${total}'
        }"
        :data="data"
        @change="handleChange"
      >
        <template #left-footer>
          <hl-button>\u64CD\u4F5C</hl-button>
        </template>
        <template #right-footer>
          <hl-button>\u64CD\u4F5C</hl-button>
        </template>
      </hl-transfer>
    </hl-col>
    <p class="m-t-lg">\u4F7F\u7528 scoped-slot \u81EA\u5B9A\u4E49\u6570\u636E\u9879</p>
    <hl-col span="md:col-24">
      <hl-transfer
        ref="transferRef"
        v-model="rightValue"
        block
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :format="{
          noChecked: '\${total}',
          hasChecked: '\${checked}/\${total}'
        }"
        :data="data"
        @change="handleChange"
      >
        <template #default="{option}">
          <hl-thumb round type="primary" size="xs">
            <span>\u59D3\u540D</span>
          </hl-thumb>
          <span>{{ option.key }} - {{ option.label }}</span>
        </template>
        <template #left-footer>
          <hl-group full align="items-left">
            <hl-button equal no-fill @click="addToRight">
              <template #icon>
                <hl-icon>
                  <two-folder-in />
                </hl-icon>
              </template>
            </hl-button>
          </hl-group>
        </template>
        <template #right-footer>
          <hl-button type="danger" equal no-fill @click="addToLeft">
            <template #icon>
              <hl-icon>
                <two-delete />
              </hl-icon>
            </template>
          </hl-button>
        </template>
        <template #buttons>
          <div style="display: none"></div>
        </template>
      </hl-transfer>
    </hl-col>
  </hl-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoFolderIn, TwoDelete } from '@hongluan-ui/icons'


const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const leftValue = ref([1])
const rightValue = ref([1])
const transferRef = ref(null)

const renderFunc = (h, option) => {
  return h('span', null, option.key, ' - ', option.label)
}
const addToRight = () => {
  transferRef.value.addToRight()
}
const addToLeft = () => {
  transferRef.value.addToLeft()
}
const handleChange = (value, direction, movedKeys) => {
  console.log(value, direction, movedKeys)
}


<\/script>

`)],-1),Fu=u("h2",{id:"shu-ju-xiang-shu-xing-bie-ming"},[u("a",{class:"header-anchor",href:"#shu-ju-xiang-shu-xing-bie-ming"}),t(" \u6570\u636E\u9879\u5C5E\u6027\u522B\u540D")],-1),fu=u("p",null,[t("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTransfer \u4EC5\u80FD\u8BC6\u522B\u6570\u636E\u9879\u4E2D\u7684 "),u("code",null,"key"),t("\u3001"),u("code",null,"label"),t(" \u548C "),u("code",null,"disabled"),t(" \u5B57\u6BB5\u3002\u5982\u679C\u4F60\u7684\u6570\u636E\u7684\u5B57\u6BB5\u540D\u4E0D\u540C\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),u("code",null,"props"),t(" \u5C5E\u6027\u4E3A\u5B83\u4EEC\u8BBE\u7F6E\u522B\u540D\u3002")],-1),pu=u("div",null,[u("p",null,[t("\u672C\u4F8B\u4E2D\u7684\u6570\u636E\u6E90\u6CA1\u6709 "),u("code",null,"key"),t(" \u548C "),u("code",null,"label"),t(" \u5B57\u6BB5\uFF0C\u5728\u529F\u80FD\u4E0A\u4E0E\u5B83\u4EEC\u76F8\u540C\u7684\u5B57\u6BB5\u540D\u4E3A "),u("code",null,"value"),t(" \u548C "),u("code",null,"desc"),t("\u3002\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"props"),t(" \u5C5E\u6027\u4E3A "),u("code",null,"key"),t(" \u548C "),u("code",null,"label"),t(" \u8BBE\u7F6E\u522B\u540D\u3002")])],-1),Cu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: \`\u5907\u9009\u9879 \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const data = ref(generateData())
const value = ref([])

<\/script>
`)],-1),mu=W('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>data</td><td>Transfer \u7684\u6570\u636E\u6E90</td><td>array[{ key, label, disabled }]</td><td>\u2014</td><td>[ ]</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filter-placeholder</td><td>\u641C\u7D22\u6846\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9</td></tr><tr><td>filter-method</td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u65B9\u6CD5</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-method</td><td>\u5355\u9009\u6A21\u5F0F\u4E0B\uFF0C\u79FB\u52A8\u5168\u90E8\u65F6\u7684\u786E\u8BA4\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A left/right\uFF0C\u8FD4\u56DE\u503C\u662F Promise</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>target-order</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565\uFF1A\u82E5\u4E3A <code>original</code>\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A <code>push</code>\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A <code>unshift</code>\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898</td><td>array</td><td>\u2014</td><td>[&#39;\u5217\u8868 1&#39;, &#39;\u5217\u8868 2&#39;]</td></tr><tr><td>button-texts</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848</td><td>array</td><td>\u2014</td><td>[ ]</td></tr><tr><td>render-content</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u6E32\u67D3\u51FD\u6570</td><td>function(h, option)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>format</td><td>\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848</td><td>object{noChecked, hasChecked}</td><td>\u2014</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D</td><td>object{key, label, disabled}</td><td>\u2014</td><td>\u2014</td></tr><tr><td>left-default-checked</td><td>\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4</td><td>array</td><td>\u2014</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4</td><td>array</td><td>\u2014</td><td>[ ]</td></tr><tr><td>show-buttons</td><td>\u662F\u5426\u663E\u793A\u4E2D\u95F4\u64CD\u4F5C\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>gap</td><td>\u7A7F\u68AD\u6846\u9762\u677F\u4E4B\u95F4\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>list-gap</td><td>\u9009\u9879\u5361\u4E4B\u95F4\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>item-gap</td><td>\u9009\u9879\u5361\u5185\u90E8\u5143\u7D20\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { option }</td></tr><tr><td>left-footer</td><td>\u5DE6\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>right-footer</td><td>\u53F3\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>buttons</td><td>\u81EA\u5B9A\u4E49\u4E2D\u95F4\u64CD\u4F5C\u6309\u94AE\u533A\u57DF</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearQuery</td><td>\u6E05\u7A7A\u67D0\u4E2A\u9762\u677F\u7684\u641C\u7D22\u5173\u952E\u8BCD</td><td>&#39;left&#39; / &#39;right&#39;\uFF0C\u6307\u5B9A\u9700\u8981\u6E05\u7A7A\u7684\u9762\u677F</td></tr><tr><td>addToLeft</td><td>\u628A\u53F3\u4FA7\u9009\u4E2D\u9009\u9879\u6DFB\u52A0\u5230\u5DE6\u4FA7</td><td>-</td></tr><tr><td>addToRight</td><td>\u628A\u5DE6\u4FA7\u9009\u4E2D\u9009\u9879\u6DFB\u52A0\u5230\u53F3\u4FA7</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u503C\u3001\u6570\u636E\u79FB\u52A8\u7684\u65B9\u5411\uFF08&#39;left&#39; / &#39;right&#39;\uFF09\u3001\u53D1\u751F\u79FB\u52A8\u7684\u6570\u636E key \u6570\u7EC4</td></tr><tr><td>left-check-change</td><td>\u5DE6\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4</td></tr><tr><td>right-check-change</td><td>\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u88AB\u7528\u6237\u9009\u4E2D / \u53D6\u6D88\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684 key \u6570\u7EC4\u3001\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u7684\u5143\u7D20\u7684 key \u6570\u7EC4</td></tr></tbody></table>',8);function Bu(s,c,e,n,l,h){const A=k("hl-demo0"),o=k("demo-block"),a=k("hl-demo1"),r=k("hl-demo2"),E=k("hl-demo3"),m=k("hl-demo4"),f=k("right-nav");return Q(),X(K,null,[u("section",null,[Z,uu,B(o,{fs:""},{source:i(()=>[B(A)]),highlight:i(()=>[eu]),default:i(()=>[tu]),_:1}),ou,B(o,{fs:""},{source:i(()=>[B(a)]),highlight:i(()=>[du]),default:i(()=>[nu]),_:1}),lu,au,B(o,{fs:""},{source:i(()=>[B(r)]),highlight:i(()=>[su]),default:i(()=>[ru]),_:1}),cu,hu,B(o,{fs:""},{source:i(()=>[B(E)]),highlight:i(()=>[iu]),default:i(()=>[Eu]),_:1}),Fu,fu,B(o,{fs:""},{source:i(()=>[B(m)]),highlight:i(()=>[Cu]),default:i(()=>[pu]),_:1}),mu]),B(f)],64)}var yu=G(Y,[["render",Bu]]);export{yu as default};
