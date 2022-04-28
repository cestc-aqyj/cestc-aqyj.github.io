var N=Object.defineProperty;var k=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var S=(a,t,e)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,I=(a,t)=>{for(var e in t||(t={}))j.call(t,e)&&S(a,e,t[e]);if(k)for(var e of k(t))w.call(t,e)&&S(a,e,t[e]);return a};import{S as _,L as $,W as T,Q as o,a0 as E,U as b,a7 as z,aY as y,a1 as V,aS as L}from"./vue.aeed2366.js";import{_ as M}from"./index.1ceb2445.js";import"./hongluan-business.7de35cf9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.6c2b21a2.js";const Q={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:a,resolveComponent:t,withCtx:e,createVNode:d,Fragment:C,openBlock:v,createElementBlock:i}=y,p=a("\u9009\u98791"),F=a("\u9009\u98792"),B=a("\u9009\u98793"),g=a("\u91CD\u7F6E\u503C");function x(u,r){const s=t("hl-checkbox"),c=t("hl-checkbox-group"),h=t("hb-data-filter"),f=t("hl-button");return v(),i(C,null,[d(h,{ref:"dataFilterRef",items:u.searchItems,gap:"var(--sm)","max-height":"calc(var(--xxl) * 15)",onSearch:u.searchChanged,onRemoveSelectedItem:u.removeSelectedItem},{checkbox:e(()=>[d(c,{modelValue:u.boxVals,"onUpdate:modelValue":r[0]||(r[0]=A=>u.boxVals=A),onChange:u.boxChanged},{default:e(()=>[d(s,{label:"1"},{default:e(()=>[p]),_:1}),d(s,{label:"2"},{default:e(()=>[F]),_:1}),d(s,{label:"3"},{default:e(()=>[B]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1},8,["items","onSearch","onRemoveSelectedItem"]),d(f,{class:"m-l-md",onClick:u.resetVal},{default:e(()=>[g]),_:1},8,["onClick"])],64)}const{defineComponent:l,ref:n}=y,m=l({setup(){const u=n(null),r=n([]),s=[{type:"select",label:"\u6D4B\u8BD51",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{type:"input",label:"\u6D4B\u8BD52",placeholder:"sss\u6D4B\u8BD5",value:"ccc",name:"prop2"},{type:"select",label:"\u6D4B\u8BD53",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:["4"],name:"prop3",multiple:!0,"collapse-tags":!0,options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{label:"\u6D4B\u8BD54",type:"date",name:"prop4",value:"",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},{label:"\u6D4B\u8BD55",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},{label:"\u6D4B\u8BD56",type:"daterange",name:"prop6",value:[],placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",display:()=>"date1~date2"},{label:"\u6D4B\u8BD57",type:"slot",slotName:"checkbox",value:""}];let c;return{boxVals:r,dataFilterRef:u,searchItems:s,boxChanged:()=>{c={display:r.value.map(D=>`\u9009\u9879${D}`).join("\uFF0C"),value:r.value,name:"checkbox",type:"slot"},u.value.updateDisplayItem(c)},searchChanged:(D,R,P)=>{console.log(D,R,P)},removeSelectedItem:D=>{D.name===(c==null?void 0:c.name)&&(r.value=[])},resetVal:()=>{u.value.resetFields()}}}});return I({render:x},m)}(),"hb-demo1":function(){const{createTextVNode:a,resolveComponent:t,withCtx:e,createVNode:d,openBlock:C,createBlock:v}=y,i=a(" \u9AD8\u7EA7\u641C\u7D22 "),p=a(" \u9AD8\u7EA7\u641C\u7D22 ");function F(l,n){const m=t("hb-data-filter"),u=t("two-airplay"),r=t("hl-icon"),s=t("hl-group");return C(),v(s,{gap:"var(--md)"},{default:e(()=>[d(m,{ref:"dataFilterRef",items:l.searchItems,gap:"var(--sm)",onSearch:l.searchChanged,onRemoveSelectedItem:l.removeSelectedItem},{default:e(()=>[i]),_:1},8,["items","onSearch","onRemoveSelectedItem"]),d(m,{ref:"dataFilterRef",items:l.searchItems,gap:"var(--sm)",onSearch:l.searchChanged,onRemoveSelectedItem:l.removeSelectedItem},{icon:e(()=>[d(r,null,{default:e(()=>[d(u)]),_:1})]),_:1},8,["items","onSearch","onRemoveSelectedItem"]),d(m,{ref:"dataFilterRef",items:l.searchItems,"icon-position":"left",gap:"var(--sm)",onSearch:l.searchChanged,onRemoveSelectedItem:l.removeSelectedItem},{icon:e(()=>[d(r,null,{default:e(()=>[d(u)]),_:1})]),default:e(()=>[p]),_:1},8,["items","onSearch","onRemoveSelectedItem"])]),_:1})}const{defineComponent:B,ref:g}=y,x=B({setup(){const l=g(null),n=g([]),m=[{type:"select",label:"\u6D4B\u8BD51",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{type:"input",label:"\u6D4B\u8BD52",placeholder:"sss\u6D4B\u8BD5",value:"ccc",name:"prop2"},{type:"select",label:"\u6D4B\u8BD53",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:["4"],name:"prop3",multiple:!0,"collapse-tags":!0,options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{label:"\u6D4B\u8BD54",type:"date",name:"prop4",value:"",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},{label:"\u6D4B\u8BD55",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},{label:"\u6D4B\u8BD56",type:"daterange",name:"prop6",value:[],placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",display:()=>"date1~date2"},{label:"\u6D4B\u8BD57",type:"slot",slotName:"checkbox",value:""}];let u;return{boxVals:n,dataFilterRef:l,searchItems:m,boxChanged:()=>{u={display:n.value.map(h=>`\u9009\u9879${h}`).join("\uFF0C"),value:n.value,name:"checkbox",type:"slot"},l.value.updateDisplayItem(u)},searchChanged:(h,f,A)=>{console.log(h,f,A)},removeSelectedItem:h=>{h.name===(u==null?void 0:u.name)&&(n.value=[])}}}});return I({render:F},x)}()}},U=o("h1",null,"DataFilter \u6570\u636E\u8FC7\u6EE4\u5668",-1),W=o("p",null,"\u5F39\u7A97\u5F62\u5F0F\u7684\u6570\u636E\u8FC7\u6EE4\u5668\uFF0C\u53EF\u4EE5\u5D4C\u5165\u5230TableToolbar\u4E2D\uFF0C\u6BD4\u8D77TableSearchbar\u66F4\u7701\u7A7A\u95F4\u3002",-1),X=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),V(" \u57FA\u7840\u7528\u6CD5")],-1),Y=o("div",null,[o("p",null,"\u672C\u7EC4\u4EF6\u6240\u6709\u529F\u80FD\u5747\u4E0D\u4F1A\u81EA\u52A8\u5904\u7406\u81EA\u5B9A\u4E49slot\u7C7B\u578B\u7684\u641C\u7D22\u9879")],-1),q=o("pre",null,[o("code",{class:"html"},` <template>
  <hb-data-filter
    ref="dataFilterRef"
    :items="searchItems"
    gap="var(--sm)"
    max-height="calc(var(--xxl) * 15)"
    @search="searchChanged"
    @removeSelectedItem="removeSelectedItem"
  >
    <template #checkbox>
      <hl-checkbox-group v-model="boxVals" @change="boxChanged">
        <hl-checkbox label="1">\u9009\u98791</hl-checkbox>
        <hl-checkbox label="2">\u9009\u98792</hl-checkbox>
        <hl-checkbox label="3">\u9009\u98793</hl-checkbox>
      </hl-checkbox-group>
    </template>
  </hb-data-filter>
  <hl-button class="m-l-md" @click="resetVal">\u91CD\u7F6E\u503C</hl-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dataFilterRef = ref(null)
    const boxVals = ref([])
    const searchItems = [
      {
        type: 'select',
        label: '\u6D4B\u8BD51',
        placeholder: '\u4E0B\u62C9\u6D4B\u8BD5',
        value: '4',
        name: 'prop1',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u5DF2\u9A73\u56DE3', code: '3' },
          { name: '\u5DF2\u5BA1\u5B9A4', code: '4' },
        ],
      },
      {
        type: 'input',
        label: '\u6D4B\u8BD52',
        placeholder: 'sss\u6D4B\u8BD5',
        value: 'ccc',
        name: 'prop2',
      },
      {
        type: 'select',
        label: '\u6D4B\u8BD53',
        placeholder: '\u4E0B\u62C9\u6D4B\u8BD5',
        value: ['4'],
        name: 'prop3',
        multiple: true,
        'collapse-tags': true,
        options: [
          { label: '\u5DF2\u9A73\u56DE3', value: '3' },
          { label: '\u5DF2\u5BA1\u5B9A4', value: '4' },
        ],
      },
      {
        label: '\u6D4B\u8BD54',
        type: 'date',
        name: 'prop4',
        value: '',
        placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
      },
      {
        label: '\u6D4B\u8BD55',
        type: 'timepicker',
        name: 'prop5',
        value: [],
        'is-range': true,
        'range-separator': '\u81F3',
        'start-placeholder': '\u5F00\u59CB\u65F6\u95F4',
        'end-placeholder': '\u7ED3\u675F\u65F6\u95F4',
        'placeholder': '\u9009\u62E9\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: '\u6D4B\u8BD56',
        type: 'daterange',
        name: 'prop6',
        value: [],
        placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
        display: () => 'date1~date2',
      },
      {
        label: '\u6D4B\u8BD57',
        type: 'slot',
        slotName: 'checkbox',
        value: '',
      },
    ]

    let checkboxItem
    const boxChanged = () => {
      checkboxItem = {
        display: boxVals.value.map(v => \`\u9009\u9879\${v}\`).join('\uFF0C'),
        value: boxVals.value,
        name: 'checkbox', // \u9700\u8981\u552F\u4E00\u503C
        type: 'slot',
      }
      dataFilterRef.value.updateDisplayItem(checkboxItem)
    }
    const removeSelectedItem = item => {
      if (item.name === checkboxItem?.name) {
        boxVals.value = []
      }
    }

    const searchChanged = (urlParams, mapParams, originalParams) => {
      console.log(urlParams, mapParams, originalParams)
    }

    const resetVal = () => {
      dataFilterRef.value.resetFields()
    }

    return {
      boxVals,
      dataFilterRef,
      searchItems,
      boxChanged,
      searchChanged,
      removeSelectedItem,
      resetVal,
    }
  },
})
<\/script>
`)],-1),G=o("h2",{id:"zi-ding-yi-an-niu-nei-rong"},[o("a",{class:"header-anchor",href:"#zi-ding-yi-an-niu-nei-rong"}),V(" \u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9")],-1),H=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-group gap="var(--md)">
    <hb-data-filter ref="dataFilterRef" :items="searchItems" gap="var(--sm)" @search="searchChanged" @removeSelectedItem="removeSelectedItem">
      <template #default> \u9AD8\u7EA7\u641C\u7D22 </template>
    </hb-data-filter>
    <hb-data-filter ref="dataFilterRef" :items="searchItems" gap="var(--sm)" @search="searchChanged" @removeSelectedItem="removeSelectedItem">
      <template #icon>
        <hl-icon><two-airplay /></hl-icon>
      </template>
    </hb-data-filter>
    <hb-data-filter
      ref="dataFilterRef"
      :items="searchItems"
      icon-position="left"
      gap="var(--sm)"
      @search="searchChanged"
      @removeSelectedItem="removeSelectedItem"
    >
      <template #icon>
        <hl-icon><two-airplay /></hl-icon>
      </template>
      <template #default> \u9AD8\u7EA7\u641C\u7D22 </template>
    </hb-data-filter>
  </hl-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const dataFilterRef = ref(null)
    const boxVals = ref([])
    const searchItems = [
      {
        type: 'select',
        label: '\u6D4B\u8BD51',
        placeholder: '\u4E0B\u62C9\u6D4B\u8BD5',
        value: '4',
        name: 'prop1',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u5DF2\u9A73\u56DE3', code: '3' },
          { name: '\u5DF2\u5BA1\u5B9A4', code: '4' },
        ],
      },
      {
        type: 'input',
        label: '\u6D4B\u8BD52',
        placeholder: 'sss\u6D4B\u8BD5',
        value: 'ccc',
        name: 'prop2',
      },
      {
        type: 'select',
        label: '\u6D4B\u8BD53',
        placeholder: '\u4E0B\u62C9\u6D4B\u8BD5',
        value: ['4'],
        name: 'prop3',
        multiple: true,
        'collapse-tags': true,
        options: [
          { label: '\u5DF2\u9A73\u56DE3', value: '3' },
          { label: '\u5DF2\u5BA1\u5B9A4', value: '4' },
        ],
      },
      {
        label: '\u6D4B\u8BD54',
        type: 'date',
        name: 'prop4',
        value: '',
        placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
      },
      {
        label: '\u6D4B\u8BD55',
        type: 'timepicker',
        name: 'prop5',
        value: [],
        'is-range': true,
        'range-separator': '\u81F3',
        'start-placeholder': '\u5F00\u59CB\u65F6\u95F4',
        'end-placeholder': '\u7ED3\u675F\u65F6\u95F4',
        placeholder: '\u9009\u62E9\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: '\u6D4B\u8BD56',
        type: 'daterange',
        name: 'prop6',
        value: [],
        placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
        display: () => 'date1~date2',
      },
      {
        label: '\u6D4B\u8BD57',
        type: 'slot',
        slotName: 'checkbox',
        value: '',
      },
    ]

    let checkboxItem
    const boxChanged = () => {
      checkboxItem = {
        display: boxVals.value.map(v => \`\u9009\u9879\${v}\`).join('\uFF0C'),
        value: boxVals.value,
        name: 'checkbox', // \u9700\u8981\u552F\u4E00\u503C
        type: 'slot',
      }
      dataFilterRef.value.updateDisplayItem(checkboxItem)
    }
    const removeSelectedItem = item => {
      if (item.name === checkboxItem?.name) {
        boxVals.value = []
      }
    }

    const searchChanged = (urlParams, mapParams, originalParams) => {
      console.log(urlParams, mapParams, originalParams)
    }

    return {
      boxVals,
      dataFilterRef,
      searchItems,
      boxChanged,
      searchChanged,
      removeSelectedItem,
    }
  },
})
<\/script>
`)],-1),J=L('<div class="md-tip"><p><code>search</code>\u4E8B\u4EF6\u53C2\u6570\u5206\u522B\u4E3A\uFF1A<code>urlParams</code>\uFF0C\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u4F1A\u81EA\u52A8\u5728time/date range\u7C7B\u578B\u7684name\u7ED3\u5C3E\u6DFB\u52A0Start/End\uFF1B<code>mapParams</code>\uFF0Cobject\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u540C\u6837\u4F1A\u5904\u7406time/date range\u7C7B\u578B\uFF1B<code>originalParams</code>\uFF0Cobject\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u539F\u59CB\u7684\u6570\u636E\u3002</p></div><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>icon-position</td><td>Icon\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>right</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u6570\u636E\u7B5B\u9009</td></tr><tr><td>item-gap</td><td>label\u4E0E\u8868\u5355\u5143\u7D20\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u8868\u5355\u5143\u7D20\u4E0E\u8868\u5355\u5143\u7D20\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>width</td><td>\u5F39\u7A97\u5BBD\u5EA6</td><td>number / string</td><td>\u2014</td><td>380</td></tr><tr><td>max-height</td><td>\u9009\u9879\u533A\u57DF\u6700\u5927\u9AD8</td><td>string</td><td>\u2014</td><td>300px</td></tr><tr><td>max</td><td>\u53C2\u89C1Badge\u7EC4\u4EF6max\u53C2\u6570</td><td>number</td><td>\u2014</td><td>99</td></tr><tr><td>search-label</td><td>\u641C\u7D22\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u641C\u7D22</td></tr><tr><td>items</td><td>\u641C\u7D22\u9879\uFF0C\u5177\u4F53\u5C5E\u6027\u53C2\u89C1\u4E0B\u9762\u6587\u6863</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>outside-ignore</td><td>\u963B\u6B62\u64CD\u4F5C\u5F39\u7A97\u5185\u5143\u7D20\u5BFC\u81F4\u5F39\u7A97\u81EA\u52A8\u9690\u85CF</td><td>MaybeElementRef[]</td><td>\u2014</td><td>[]</td></tr></tbody></table><h2 id="items-attributes"><a class="header-anchor" href="#items-attributes"></a> items Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u8FC7\u6EE4\u6846\u7C7B\u578B</td><td>string</td><td>input / select / slot / timepicker / DatePicker\u652F\u6301\u7684\u6240\u6709\u7C7B\u578B</td><td>input</td></tr><tr><td>label</td><td>\u8868\u5355\u6807\u9898</td><td>string</td><td>--</td><td>--</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u503C</td><td>--</td><td>--</td><td>--</td></tr><tr><td>name</td><td>\u8868\u5355\u7684\u540D\u79F0\uFF0C\u503C\u9700\u8981\u552F\u4E00</td><td>string</td><td>--</td><td>--</td></tr><tr><td>prop</td><td>\u914D\u7F6Eselect\u4E0B\u62C9\u9879</td><td>object {label: string, value: string}</td><td>--</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;}</td></tr><tr><td>options</td><td>select\u4E0B\u62C9\u9879</td><td>array</td><td>--</td><td>[]</td></tr><tr><td>display</td><td>\u5C55\u793A\u9009\u4E2D\u9879\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u679C\u6709\u6B64\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u5C55\u793A\u8FD4\u56DE\u7684\u975E\u7A7A\u503C</td><td>() =&gt; string</td><td>--</td><td>--</td></tr></tbody></table><h2 id="xuan-zhong-xiang-items-attributes"><a class="header-anchor" href="#xuan-zhong-xiang-items-attributes"></a> \u9009\u4E2D\u9879 items Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u8FC7\u6EE4\u6846\u7C7B\u578B</td><td>string</td><td>--</td><td>--</td></tr><tr><td>label</td><td>\u8868\u5355\u6807\u9898</td><td>string</td><td>--</td><td>--</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u503C</td><td>--</td><td>--</td><td>--</td></tr><tr><td>name</td><td>\u8868\u5355\u7684\u540D\u79F0\uFF0C\u503C\u9700\u8981\u552F\u4E00</td><td>string</td><td>--</td><td>--</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>search</td><td>\u70B9\u51FB\u641C\u7D22\u65F6\u89E6\u53D1</td><td>urlParams:string, mapParams: object, originalParams: object</td></tr><tr><td>remove-selected-item</td><td>\u5220\u9664\u5DF2\u9009\u62E9\u9879\u65F6\u89E6\u53D1</td><td>item</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getDisplayItemsCount</td><td>\u8FD4\u56DE\u5DF2\u7ECF\u9009\u4E2D\u9879\u7684\u6570\u91CF</td><td>--</td></tr><tr><td>search</td><td>\u624B\u5DE5\u8C03\u7528\u9ED8\u8BA4\u7684search\u65B9\u6CD5\uFF0C\u4E3A\u81EA\u5B9A\u4E49footer\u65F6\u4F7F\u7528</td><td>--</td></tr><tr><td>removeDisplayItem</td><td>\u624B\u5DE5\u5220\u9664\u67D0\u4E00\u4E2A\u9009\u4E2D\u9879</td><td>\u9009\u4E2D\u9879item</td></tr><tr><td>updateDisplayItem</td><td>\u6DFB\u52A0\u6216\u8005\u66F4\u65B0\u4E00\u4E2A\u9009\u4E2D\u9879\uFF0C\u901A\u8FC7\u5BF9\u6BD4name\u8FDB\u884C\u67E5\u627E</td><td>\u9009\u4E2D\u9879item</td></tr><tr><td>resetFields</td><td>\u91CD\u7F6E\u641C\u7D22\u5B57\u6BB5\u4E3A\u521D\u59CB\u503C</td><td>names: string[]\uFF0C\u6307\u5B9A\u8981\u91CD\u7F6E\u7684\u5B57\u6BB5\uFF0C\u4E0D\u4F20\u91CD\u7F6E\u6240\u6709\u5B57\u6BB5\u3002\u540C\u65F6\u89E6\u53D1search\u4E8B\u4EF6</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u5185\u5BB9\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Ereference</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u6309\u94AEIcon\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Ereference</td></tr><tr><td>reference</td><td>\u81EA\u5B9A\u4E49Popover\u7684reference\uFF0C\u5F53\u81EA\u5B9A\u4E49\u65F6\uFF0C\u9700\u8981\u81EA\u884C\u5904\u7406Badge\u7B49\u529F\u80FD</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5F39\u7A97\u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u533A\u57DF</td></tr></tbody></table>',13);function K(a,t,e,d,C,v){const i=_("hb-demo0"),p=_("demo-block"),F=_("hb-demo1"),B=_("right-nav");return $(),T(z,null,[o("section",null,[U,W,X,E(p,{fs:""},{source:b(()=>[E(i)]),highlight:b(()=>[q]),default:b(()=>[Y]),_:1}),G,E(p,{fs:""},{source:b(()=>[E(F)]),highlight:b(()=>[H]),_:1}),J]),E(B)],64)}var le=M(Q,[["render",K]]);export{le as default};
