var N=Object.defineProperty;var S=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var V=(a,t,e)=>t in a?N(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,I=(a,t)=>{for(var e in t||(t={}))j.call(t,e)&&V(a,e,t[e]);if(S)for(var e of S(t))T.call(t,e)&&V(a,e,t[e]);return a};import{U as f,L as $,W as z,Q as r,a1 as D,X as E,a9 as U,aX as A,a2 as R,aR as X}from"./vue.64e975b8.js";import{H}from"./hongluan-icons.0c35ed0d.js";import{_ as L}from"./index.7e3760ca.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";const M={name:"component-doc",components:{"hb-demo0":function(){const{createTextVNode:a,resolveComponent:t,withCtx:e,createVNode:l,Fragment:b,openBlock:C,createElementBlock:p}=A,m=a("\u9009\u98791"),i=a("\u9009\u98792"),F=a("\u9009\u98793"),v=a("\u91CD\u7F6E\u503C");function _(u,d){const s=t("hl-checkbox"),n=t("hl-checkbox-group"),x=t("hb-data-filter"),c=t("hl-button");return C(),p(b,null,[l(x,{ref:"dataFilterRef",items:u.searchItems,gap:"var(--sm)","max-height":"calc(var(--xxl) * 15)",onSearch:u.searchChanged,onRemoveSelectedItem:u.removeSelectedItem},{checkbox:e(()=>[l(n,{modelValue:u.boxVals,"onUpdate:modelValue":d[0]||(d[0]=g=>u.boxVals=g),onChange:u.boxChanged},{default:e(()=>[l(s,{label:"1"},{default:e(()=>[m]),_:1}),l(s,{label:"2"},{default:e(()=>[i]),_:1}),l(s,{label:"3"},{default:e(()=>[F]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1},8,["items","onSearch","onRemoveSelectedItem"]),l(c,{class:"m-l-md",onClick:u.resetVal},{default:e(()=>[v]),_:1},8,["onClick"])],64)}const{defineComponent:y,ref:o}=A,h=y({setup(){const u=o(null),d=o([]),s=[{type:"select",label:"\u6D4B\u8BD51",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{type:"input",label:"\u6D4B\u8BD52",placeholder:"sss\u6D4B\u8BD5",value:"ccc",name:"prop2"},{type:"select",label:"\u6D4B\u8BD53",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:["4"],name:"prop3",multiple:!0,"collapse-tags":!0,options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{label:"\u6D4B\u8BD54",type:"date",name:"prop4",value:"",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},{label:"\u6D4B\u8BD55",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},{label:"\u6D4B\u8BD56",type:"daterange",name:"prop6",value:[],placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",display:()=>"date1~date2"},{label:"\u6D4B\u8BD57",type:"slot",slotName:"checkbox",value:""}];let n;return{boxVals:d,dataFilterRef:u,searchItems:s,boxChanged:()=>{n={display:d.value.map(B=>`\u9009\u9879${B}`).join("\uFF0C"),value:d.value,name:"checkbox",type:"slot"},u.value.updateDisplayItem(n)},searchChanged:(B,P,w)=>{console.log(B,P,w)},removeSelectedItem:B=>{B.name===(n==null?void 0:n.name)&&(d.value=[])},resetVal:()=>{u.value.resetFields()}}}});return I({render:_},h)}(),"hb-demo1":function(){const{createTextVNode:a,resolveComponent:t,withCtx:e,createVNode:l,openBlock:b,createBlock:C}=A,p=a(" \u9AD8\u7EA7\u641C\u7D22 "),m=a(" \u9AD8\u7EA7\u641C\u7D22 ");function i(o,h){const u=t("hb-data-filter"),d=t("two-airplay"),s=t("hl-icon"),n=t("hl-group");return b(),C(n,{gap:"var(--md)"},{default:e(()=>[l(u,{ref:"dataFilterRef",items:o.searchItems,gap:"var(--sm)",onSearch:o.searchChanged,onRemoveSelectedItem:o.removeSelectedItem},{default:e(()=>[p]),_:1},8,["items","onSearch","onRemoveSelectedItem"]),l(u,{ref:"dataFilterRef",items:o.searchItems,gap:"var(--sm)",onSearch:o.searchChanged,onRemoveSelectedItem:o.removeSelectedItem},{icon:e(()=>[l(s,null,{default:e(()=>[l(d)]),_:1})]),_:1},8,["items","onSearch","onRemoveSelectedItem"]),l(u,{ref:"dataFilterRef",items:o.searchItems,"icon-position":"left",gap:"var(--sm)",onSearch:o.searchChanged,onRemoveSelectedItem:o.removeSelectedItem},{icon:e(()=>[l(s,null,{default:e(()=>[l(d)]),_:1})]),default:e(()=>[m]),_:1},8,["items","onSearch","onRemoveSelectedItem"])]),_:1})}const{defineComponent:F,ref:v}=A,{TwoAirplay:_}=H,y=F({components:{TwoAirplay:_},setup(){const o=v(null),h=v([]),u=[{type:"select",label:"\u6D4B\u8BD51",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{type:"input",label:"\u6D4B\u8BD52",placeholder:"sss\u6D4B\u8BD5",value:"ccc",name:"prop2"},{type:"select",label:"\u6D4B\u8BD53",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:["4"],name:"prop3",multiple:!0,"collapse-tags":!0,options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{label:"\u6D4B\u8BD54",type:"date",name:"prop4",value:"",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},{label:"\u6D4B\u8BD55",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},{label:"\u6D4B\u8BD56",type:"daterange",name:"prop6",value:[],placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",display:()=>"date1~date2"},{label:"\u6D4B\u8BD57",type:"slot",slotName:"checkbox",value:""}];let d;return{boxVals:h,dataFilterRef:o,searchItems:u,boxChanged:()=>{d={display:h.value.map(c=>`\u9009\u9879${c}`).join("\uFF0C"),value:h.value,name:"checkbox",type:"slot"},o.value.updateDisplayItem(d)},searchChanged:(c,g,k)=>{console.log(c,g,k)},removeSelectedItem:c=>{c.name===(d==null?void 0:d.name)&&(h.value=[])}}}});return I({render:i},y)}()}},Q=r("h1",null,"DataFilter \u6570\u636E\u8FC7\u6EE4\u5668",-1),W=r("p",null,"\u5F39\u7A97\u5F62\u5F0F\u7684\u6570\u636E\u8FC7\u6EE4\u5668\uFF0C\u53EF\u4EE5\u5D4C\u5165\u5230TableToolbar\u4E2D\uFF0C\u6BD4\u8D77TableSearchbar\u66F4\u7701\u7A7A\u95F4\u3002",-1),q=r("h2",{id:"ji-chu-yong-fa"},[r("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),R(" \u57FA\u7840\u7528\u6CD5")],-1),G=r("div",null,[r("p",null,"\u672C\u7EC4\u4EF6\u6240\u6709\u529F\u80FD\u5747\u4E0D\u4F1A\u81EA\u52A8\u5904\u7406\u81EA\u5B9A\u4E49slot\u7C7B\u578B\u7684\u641C\u7D22\u9879")],-1),J=r("pre",null,[r("code",{class:"html"},` <template>
  <hb-data-filter
    ref="dataFilterRef"
    :items="searchItems"
    gap="var(--sm)"
    max-height="calc(var(--xxl) * 15)"
    @search="searchChanged"
    @remove-selected-item="removeSelectedItem"
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
`)],-1),K=r("h2",{id:"zi-ding-yi-an-niu-nei-rong"},[r("a",{class:"header-anchor",href:"#zi-ding-yi-an-niu-nei-rong"}),R(" \u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9")],-1),O=r("pre",null,[r("code",{class:"html"},` <template>
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
      @remove-selected-item="removeSelectedItem"
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
import { TwoAirplay} from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoAirplay },
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
`)],-1),Y=X('<div class="md-tip"><p><code>search</code>\u4E8B\u4EF6\u53C2\u6570\u5206\u522B\u4E3A\uFF1A<code>urlParams</code>\uFF0C\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u4F1A\u81EA\u52A8\u5728time/date range\u7C7B\u578B\u7684name\u7ED3\u5C3E\u6DFB\u52A0Start/End\uFF1B<code>mapParams</code>\uFF0Cobject\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u540C\u6837\u4F1A\u5904\u7406time/date range\u7C7B\u578B\uFF1B<code>originalParams</code>\uFF0Cobject\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u539F\u59CB\u7684\u6570\u636E\u3002</p></div><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>icon-position</td><td>Icon\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>right</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u6570\u636E\u7B5B\u9009</td></tr><tr><td>placement</td><td>\u51FA\u73B0\u4F4D\u7F6E</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>item-gap</td><td>label\u4E0E\u8868\u5355\u5143\u7D20\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u8868\u5355\u5143\u7D20\u4E0E\u8868\u5355\u5143\u7D20\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>width</td><td>\u5F39\u7A97\u5BBD\u5EA6</td><td>number / string</td><td>\u2014</td><td>380</td></tr><tr><td>max-height</td><td>\u9009\u9879\u533A\u57DF\u6700\u5927\u9AD8</td><td>string</td><td>\u2014</td><td>300px</td></tr><tr><td>max</td><td>\u53C2\u89C1Badge\u7EC4\u4EF6max\u53C2\u6570</td><td>number</td><td>\u2014</td><td>99</td></tr><tr><td>search-label</td><td>\u641C\u7D22\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u641C\u7D22</td></tr><tr><td>items</td><td>\u641C\u7D22\u9879\uFF0C\u5177\u4F53\u5C5E\u6027\u53C2\u89C1\u4E0B\u9762\u6587\u6863</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>outside-ignore</td><td>\u963B\u6B62\u64CD\u4F5C\u5F39\u7A97\u5185\u5143\u7D20\u5BFC\u81F4\u5F39\u7A97\u81EA\u52A8\u9690\u85CF</td><td>MaybeElementRef[]</td><td>\u2014</td><td>[]</td></tr><tr><td>selected-section</td><td>\u5DF2\u9009\u9879\u90E8\u5206\u914D\u7F6E\uFF1A\u662F\u5426\u663E\u793A\uFF1B\u662F\u5426\u53EF\u53D6\u6D88</td><td>{ show: boolean; closable: boolean; }</td><td>\u2014</td><td>{ show: true, closable: true }</td></tr></tbody></table><h2 id="items-attributes"><a class="header-anchor" href="#items-attributes"></a> items Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u8FC7\u6EE4\u6846\u7C7B\u578B</td><td>string</td><td>input / select / slot / timepicker / DatePicker\u652F\u6301\u7684\u6240\u6709\u7C7B\u578B</td><td>input</td></tr><tr><td>label</td><td>\u8868\u5355\u6807\u9898</td><td>string</td><td>--</td><td>--</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u503C</td><td>--</td><td>--</td><td>--</td></tr><tr><td>name</td><td>\u8868\u5355\u7684\u540D\u79F0\uFF0C\u503C\u9700\u8981\u552F\u4E00</td><td>string</td><td>--</td><td>--</td></tr><tr><td>prop</td><td>\u914D\u7F6Eselect\u4E0B\u62C9\u9879</td><td>object {label: string, value: string}</td><td>--</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;}</td></tr><tr><td>options</td><td>select\u4E0B\u62C9\u9879</td><td>array</td><td>--</td><td>[]</td></tr><tr><td>display</td><td>\u5C55\u793A\u9009\u4E2D\u9879\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u679C\u6709\u6B64\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u5C55\u793A\u8FD4\u56DE\u7684\u975E\u7A7A\u503C</td><td>(item) =&gt; string</td><td>--</td><td>--</td></tr></tbody></table><h2 id="xuan-zhong-xiang-items-attributes"><a class="header-anchor" href="#xuan-zhong-xiang-items-attributes"></a> \u9009\u4E2D\u9879 items Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u8FC7\u6EE4\u6846\u7C7B\u578B</td><td>string</td><td>--</td><td>--</td></tr><tr><td>label</td><td>\u8868\u5355\u6807\u9898</td><td>string</td><td>--</td><td>--</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u503C</td><td>--</td><td>--</td><td>--</td></tr><tr><td>name</td><td>\u8868\u5355\u7684\u540D\u79F0\uFF0C\u503C\u9700\u8981\u552F\u4E00</td><td>string</td><td>--</td><td>--</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>search</td><td>\u70B9\u51FB\u641C\u7D22\u65F6\u89E6\u53D1</td><td>urlParams:string, mapParams: object, originalParams: object</td></tr><tr><td>remove-selected-item</td><td>\u5220\u9664\u5DF2\u9009\u62E9\u9879\u65F6\u89E6\u53D1</td><td>item</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getDisplayItemsCount</td><td>\u8FD4\u56DE\u5DF2\u7ECF\u9009\u4E2D\u9879\u7684\u6570\u91CF</td><td>--</td></tr><tr><td>search</td><td>\u624B\u5DE5\u8C03\u7528\u9ED8\u8BA4\u7684search\u65B9\u6CD5\uFF0C\u4E3A\u81EA\u5B9A\u4E49footer\u65F6\u4F7F\u7528</td><td>--</td></tr><tr><td>removeDisplayItem</td><td>\u624B\u5DE5\u5220\u9664\u67D0\u4E00\u4E2A\u9009\u4E2D\u9879</td><td>\u9009\u4E2D\u9879item</td></tr><tr><td>updateDisplayItem</td><td>\u6DFB\u52A0\u6216\u8005\u66F4\u65B0\u4E00\u4E2A\u9009\u4E2D\u9879\uFF0C\u901A\u8FC7\u5BF9\u6BD4name\u8FDB\u884C\u67E5\u627E</td><td>\u9009\u4E2D\u9879item</td></tr><tr><td>resetFields</td><td>\u91CD\u7F6E\u641C\u7D22\u5B57\u6BB5\u4E3A\u521D\u59CB\u503C</td><td>names: string[]\uFF0C\u6307\u5B9A\u8981\u91CD\u7F6E\u7684\u5B57\u6BB5\uFF0C\u4E0D\u4F20\u91CD\u7F6E\u6240\u6709\u5B57\u6BB5\u3002\u540C\u65F6\u89E6\u53D1search\u4E8B\u4EF6</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u5185\u5BB9\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Ereference</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u6309\u94AEIcon\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Ereference</td></tr><tr><td>reference</td><td>\u81EA\u5B9A\u4E49Popover\u7684reference\uFF0C\u5F53\u81EA\u5B9A\u4E49\u65F6\uFF0C\u9700\u8981\u81EA\u884C\u5904\u7406Badge\u7B49\u529F\u80FD</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5F39\u7A97\u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u533A\u57DF</td></tr></tbody></table>',13);function Z(a,t,e,l,b,C){const p=f("hb-demo0"),m=f("demo-block"),i=f("hb-demo1"),F=f("right-nav");return $(),z(U,null,[r("section",null,[Q,W,q,D(m,{fs:""},{source:E(()=>[D(p)]),highlight:E(()=>[J]),default:E(()=>[G]),_:1}),K,D(m,{fs:""},{source:E(()=>[D(i)]),highlight:E(()=>[O]),_:1}),Y]),D(F)],64)}var oe=L(M,[["render",Z]]);export{oe as default};
